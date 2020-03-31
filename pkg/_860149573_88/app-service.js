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
Z([[7],[3,'appLogo']])
Z([[7],[3,'appName']])
Z([3,'captureClickCard'])
Z([3,'handleClickLike'])
Z([3,'handleClickMore'])
Z([3,'toProfile'])
Z([3,'app-card-article'])
Z([[7],[3,'hasLike']])
Z([[7],[3,'likeCount']])
Z([[7],[3,'recommendReason']])
Z([[7],[3,'recommend_reason_type']])
Z([[7],[3,'social_like_info']])
Z([3,'handleClickCardBody'])
Z([3,'card__bd'])
Z([3,'body'])
Z([[2,'>='],[[6],[[7],[3,'content_image_list']],[3,'length']],[1,3]])
Z([[7],[3,'content_image_list']])
Z([[7],[3,'item']])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([[2,'>'],[[6],[[7],[3,'content_image_list']],[3,'length']],[1,0]])
Z([[7],[3,'isVideo']])
Z(z[20])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'captureClickCard'])
Z([3,'default-box default-border-bottom uiexperiment'])
Z([3,'body'])
Z([3,'card__ft'])
Z([[2,'||'],[[2,'==='],[[7],[3,'recommend_reason_type']],[1,1]],[[7],[3,'likeNameString']]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appLogo']])
Z([[7],[3,'appName']])
Z([3,'captureClickCard'])
Z([3,'handleClickLike'])
Z([3,'handleClickMore'])
Z([3,'toProfile'])
Z([3,'app-card-post-video'])
Z([[7],[3,'hasLike']])
Z([[7],[3,'likeCount']])
Z([[7],[3,'recommendReason']])
Z([[7],[3,'recommend_reason_type']])
Z([[7],[3,'social_like_info']])
Z([3,'card__bd'])
Z([3,'body'])
Z([3,'handleClickVideo'])
Z([3,'video__content__bd'])
Z([3,'video-wrap'])
Z([[7],[3,'canPlay']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showActionSheet']])
Z([3,'closeActionSheet'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
Z([3,'feed-list'])
Z([[2,'||'],[[7],[3,'feiyan_data']],[[2,'>'],[[6],[[7],[3,'epidemicList']],[3,'length']],[1,0]]])
Z([3,'panel'])
Z([[7],[3,'feiyan_data']])
Z(z[3])
Z([[2,'>'],[[6],[[7],[3,'virus_group_info']],[3,'length']],[1,0]])
Z([[7],[3,'virus_group_info']])
Z([[2,'>'],[[6],[[7],[3,'epidemicList']],[3,'length']],[1,0]])
Z([[7],[3,'epidemicList']])
Z([[6],[[7],[3,'item']],[3,'recommend_id']])
Z([3,'handleLongpressEpidemicItem'])
Z([3,'clickEpidemicItem'])
Z([1,true])
Z([[7],[3,'index']])
Z(z[9])
Z([[2,'+'],[1,'epidemicList'],[[7],[3,'index']]])
Z(z[13])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'epidemicList']],[3,'length']])
Z([1,false])
Z(z[7])
Z([[2,'>'],[[6],[[7],[3,'topHotList']],[3,'length']],[1,0]])
Z([[7],[3,'homeFeedsList']])
Z([[6],[[7],[3,'item']],[3,'recommendId']])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'deleted']]],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,1]],[[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,3]]],[[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,5]]],[[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,7]]]])
Z([[6],[[7],[3,'item']],[3,'appLogo']])
Z([[6],[[7],[3,'item']],[3,'appName']])
Z([3,'handleClickCardBody'])
Z(z[27])
Z([3,'handleClickLike'])
Z([3,'handleClickMore'])
Z([3,'handleLongPress'])
Z([3,'onLoadimageError'])
Z([3,'toProfile'])
Z([[6],[[7],[3,'item']],[3,'contentImg']])
Z([[6],[[7],[3,'item']],[3,'contentText']])
Z([[6],[[7],[3,'item']],[3,'content_image_list']])
Z(z[13])
Z([[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'has_like']])
Z([[6],[[7],[3,'item']],[3,'formatedRecommendId']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,3]])
Z([[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'like_count']])
Z([[6],[[7],[3,'item']],[3,'recommendReason']])
Z([[6],[[7],[3,'item']],[3,'recommend_reason_type']])
Z([[6],[[7],[3,'item']],[3,'social_like_info']])
Z([[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'text_link']])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'deleted']]],[[2,'==='],[[6],[[7],[3,'item']],[3,'card_type']],[1,8]]])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[27])
Z(z[29])
Z(z[30])
Z([3,'handlePauseVideo'])
Z([3,'handlePlayVideo'])
Z(z[31])
Z(z[32])
Z(z[33])
Z([[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'item_list']],[1,0]],[3,'shot_img_url']])
Z(z[35])
Z(z[13])
Z(z[38])
Z(z[39])
Z(z[41])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[45])
Z([[2,'||'],[[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'item_list']],[1,0]],[3,'video_url']],[[6],[[6],[[6],[[6],[[7],[3,'item']],[3,'dynamic_info']],[3,'item_list']],[1,0]],[3,'vedio_url']]])
Z([[2,'==='],[[7],[3,'feedsListFetchState']],[1,'fetching']])
Z([1,2])
Z(z[13])
Z([[2,'==='],[[7],[3,'feedsListFetchState']],[1,'exhausted']])
Z([[2,'==='],[[7],[3,'feedsListFetchState']],[1,'empty']])
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
Z([3,'category-list'])
Z([[2,'>'],[[6],[[7],[3,'tabList']],[3,'length']],[1,0]])
Z([[7],[3,'tabList']])
Z([[6],[[7],[3,'item']],[3,'category_id']])
Z([[2,'||'],[[2,'<='],[[7],[3,'category_total']],[1,5]],[[2,'&&'],[[2,'>'],[[7],[3,'category_total']],[1,5]],[[2,'<='],[[7],[3,'index']],[1,3]]]])
Z([[2,'>'],[[7],[3,'category_total']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wx-flex__item wx-flex'])
Z([[2,'&&'],[[7],[3,'category']],[[2,'==='],[[7],[3,'listIndex']],[1,0]]])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'listIndex']],[1,0]],[[6],[[7],[3,'category_name_list']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'withImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'entranceUI']],[1,1]])
Z([3,'app-list'])
Z([[2,'>'],[[6],[[7],[3,'commonUseAppList']],[3,'length']],[1,0]])
Z([[7],[3,'commonUseAppList']])
Z([[6],[[7],[3,'item']],[3,'appid']])
Z([[2,'<='],[[7],[3,'index']],[1,5]])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[2,'<='],[[7],[3,'index']],[1,7]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'hidden']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([a,[3,'bottom: -'],[[7],[3,'topHeight']],[3,'px;'],[[2,'?:'],[[7],[3,'hideTop']],[[2,'+'],[[2,'+'],[1,'transform: translate3d(0, -'],[[7],[3,'topHeight']]],[1,'px, 0);']],[1,'']],[3,' '],[[7],[3,'pageStyle']]])
Z([3,'top'])
Z([3,'main'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'疫情热门信息'])
Z([[7],[3,'renderList']])
Z([[6],[[7],[3,'item']],[3,'recommend_id']])
Z([3,'handleLongPress'])
Z([3,'clickItem'])
Z([[7],[3,'index']])
Z(z[3])
Z([[2,'+'],[1,'hotlist'],[[7],[3,'index']]])
Z(z[6])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'renderList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'大家在用'])
Z([[2,'=='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'android']])
Z([3,'toggle-display-top'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'android']],[1,'bottom:0;'],[1,'']],[1,'top:']],[[6],[[7],[3,'systemInfo']],[3,'statusBarHeight']]],[1,'px;']])
Z([1,56])
Z([[7],[3,'searchEventId']])
Z([3,'weuse-search'])
Z([[2,'!=='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'ios']])
Z([3,'search'])
Z([1,2000])
Z([3,'top'])
Z([3,'main'])
Z(z[12])
Z([3,'cate-tab-list'])
Z(z[0])
Z([[2,'>'],[[6],[[7],[3,'tabList']],[3,'length']],[1,0]])
Z([[7],[3,'tabList']])
Z([[6],[[7],[3,'item']],[3,'category_id']])
Z([[2,'!=='],[[7],[3,'index']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'activeList']],[3,'length']],[1,0]])
Z([3,'bindscroll'])
Z([3,'bindscrolltolower'])
Z([3,'bindscrolltoupper'])
Z([3,'app-list'])
Z(z[0])
Z([[7],[3,'scrollTop']])
Z(z[0])
Z([1,0])
Z([[7],[3,'activeList']])
Z([[6],[[7],[3,'item']],[3,'appid']])
Z([[6],[[7],[3,'item']],[3,'appDesc']])
Z([[6],[[7],[3,'item']],[3,'appLogo']])
Z([[6],[[7],[3,'item']],[3,'appName']])
Z(z[30])
Z([3,'handleLongpress'])
Z([3,'handleClickItem'])
Z([[6],[[7],[3,'item']],[3,'category']])
Z([[6],[[7],[3,'item']],[3,'category_name_list']])
Z([[7],[3,'index']])
Z([[7],[3,'activeListIndex']])
Z([[6],[[7],[3,'item']],[3,'formatedAppId']])
Z(z[40])
Z([[6],[[7],[3,'item']],[3,'recommendReason']])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([[2,'==='],[[7],[3,'fetchStatus']],[1,'fetching']])
Z([1,6])
Z(z[39])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'肺炎疫情专区'])
Z([[2,'>'],[[6],[[7],[3,'group_app_list_render']],[3,'length']],[1,0]])
Z([3,'group_list_index'])
Z([3,'group_list_item'])
Z([[7],[3,'group_app_list_render']])
Z([[6],[[6],[[7],[3,'group_list_item']],[3,'group_info']],[3,'group_name']])
Z([[2,'>'],[[6],[[6],[[7],[3,'group_list_item']],[3,'_card_list']],[3,'length']],[1,0]])
Z([3,'cate-group_list_item'])
Z([3,'card_list_item'])
Z([[6],[[7],[3,'group_list_item']],[3,'_card_list']])
Z([[6],[[7],[3,'card_list_item']],[3,'appid']])
Z([[6],[[7],[3,'card_list_item']],[3,'appDesc']])
Z([[6],[[7],[3,'card_list_item']],[3,'appLogo']])
Z([[6],[[7],[3,'card_list_item']],[3,'appName']])
Z(z[11])
Z([3,'handleLongpress'])
Z([3,'handleClickItem'])
Z([[6],[[7],[3,'card_list_item']],[3,'category']])
Z([[6],[[7],[3,'card_list_item']],[3,'category_name_list']])
Z([[7],[3,'group_list_index']])
Z([[7],[3,'index']])
Z(z[11])
Z([1,0])
Z([[6],[[7],[3,'card_list_item']],[3,'recommendReason']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsg']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsgType']])
Z([[6],[[7],[3,'card_list_item']],[3,'score']])
Z([[2,'>'],[[6],[[6],[[7],[3,'group_list_item']],[3,'card_list']],[3,'length']],[1,3]])
Z([1,7])
Z(z[21])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([[7],[3,'group_name']])
Z([[2,'>'],[[6],[[7],[3,'card_list']],[3,'length']],[1,0]])
Z([3,'card_list_item'])
Z([[7],[3,'card_list']])
Z([[6],[[7],[3,'card_list_item']],[3,'appid']])
Z([[6],[[7],[3,'card_list_item']],[3,'appDesc']])
Z([[6],[[7],[3,'card_list_item']],[3,'appLogo']])
Z([[6],[[7],[3,'card_list_item']],[3,'appName']])
Z(z[5])
Z([3,'handleLongpress'])
Z([3,'handleClickItem'])
Z([[6],[[7],[3,'card_list_item']],[3,'category']])
Z([[6],[[7],[3,'card_list_item']],[3,'category_name_list']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'card_list_item']],[3,'formatedAppId']])
Z([1,0])
Z([[6],[[7],[3,'card_list_item']],[3,'recommendReason']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsg']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsgType']])
Z([[6],[[7],[3,'card_list_item']],[3,'score']])
Z([1,7])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'大家在用'])
Z([[2,'=='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'android']])
Z([3,'toggle-display-top'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'android']],[1,'bottom:0;'],[1,'']],[1,'top:']],[[6],[[7],[3,'systemInfo']],[3,'statusBarHeight']]],[1,'px;']])
Z([1,56])
Z([[7],[3,'searchEventId']])
Z([3,'weuse-search'])
Z([[2,'!=='],[[6],[[7],[3,'systemInfo']],[3,'platform']],[1,'ios']])
Z([3,'search'])
Z([1,2000])
Z([3,'top'])
Z([3,'main'])
Z(z[12])
Z([[2,'&&'],[[2,'>'],[[7],[3,'category_total']],[1,1]],[[2,'>'],[[6],[[7],[3,'tabList']],[3,'length']],[1,1]]])
Z([[7],[3,'swiperCurrentIndex']])
Z([[7],[3,'category_total']])
Z([3,'category-tab'])
Z([[7],[3,'tabLineOffset']])
Z([[7],[3,'tabList']])
Z([3,'handleSlideAnimationEnd'])
Z([3,'handleSlideEnd'])
Z([3,'swiper'])
Z(z[15])
Z([3,'catchTouchMove'])
Z([3,'swiper-item'])
Z([3,'bindscroll'])
Z([3,'bindscrolltolower'])
Z([3,'bindscrolltoupper'])
Z([3,'scroll-view'])
Z([1,0])
Z(z[0])
Z(z[0])
Z(z[30])
Z([[7],[3,'showepidemicEntrance']])
Z([[2,'>'],[[6],[[6],[[6],[[7],[3,'category_group_app_list']],[1,0]],[3,'group_list']],[3,'length']],[1,0]])
Z([3,'group_list_index'])
Z([3,'group_list_item'])
Z([[6],[[6],[[7],[3,'category_group_app_list']],[1,0]],[3,'group_list']])
Z([[6],[[6],[[7],[3,'group_list_item']],[3,'group_info']],[3,'group_name']])
Z([[2,'>'],[[6],[[6],[[7],[3,'group_list_item']],[3,'_card_list']],[3,'length']],[1,0]])
Z([3,'cate-group_list_item'])
Z([3,'card_list_item'])
Z([[6],[[7],[3,'group_list_item']],[3,'_card_list']])
Z([[6],[[7],[3,'card_list_item']],[3,'appid']])
Z([[6],[[7],[3,'card_list_item']],[3,'appDesc']])
Z([[6],[[7],[3,'card_list_item']],[3,'appLogo']])
Z([[6],[[7],[3,'card_list_item']],[3,'appName']])
Z(z[44])
Z([3,'handleLongpress'])
Z([3,'handleClickItem'])
Z([[6],[[7],[3,'card_list_item']],[3,'category']])
Z([[6],[[7],[3,'card_list_item']],[3,'category_name_list']])
Z([[7],[3,'group_list_index']])
Z([[7],[3,'index']])
Z(z[30])
Z([[6],[[7],[3,'card_list_item']],[3,'hidden']])
Z([[6],[[7],[3,'card_list_item']],[3,'formatedAppId']])
Z(z[30])
Z([[6],[[7],[3,'card_list_item']],[3,'recommendReason']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsg']])
Z([[6],[[7],[3,'card_list_item']],[3,'referMsgType']])
Z([[6],[[7],[3,'card_list_item']],[3,'score']])
Z([[2,'!=='],[[7],[3,'group_list_index']],[[2,'-'],[[6],[[6],[[6],[[7],[3,'category_group_app_list']],[1,0]],[3,'group_list']],[3,'length']],[1,1]]])
Z([[2,'==='],[[6],[[7],[3,'friendsUseAppListFetchStatus']],[1,0]],[1,'fetching']])
Z([1,7])
Z(z[54])
Z([3,'listIndex'])
Z([[7],[3,'swiperLength']])
Z([[7],[3,'listIndex']])
Z([[2,'!=='],[[7],[3,'listIndex']],[1,0]])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[69])
Z(z[0])
Z(z[0])
Z(z[30])
Z([3,'friends-use-list thin-border-bottom'])
Z([[2,'>'],[[6],[[6],[[7],[3,'friendsUseAppList']],[[7],[3,'listIndex']]],[3,'length']],[1,0]])
Z([[6],[[7],[3,'friendsUseAppList']],[[7],[3,'listIndex']]])
Z([[6],[[7],[3,'item']],[3,'appid']])
Z([[6],[[7],[3,'item']],[3,'appDesc']])
Z([[6],[[7],[3,'item']],[3,'appLogo']])
Z([[6],[[7],[3,'item']],[3,'appName']])
Z(z[84])
Z(z[49])
Z(z[50])
Z([[6],[[7],[3,'item']],[3,'category']])
Z([[6],[[7],[3,'item']],[3,'category_name_list']])
Z(z[54])
Z(z[69])
Z([[6],[[7],[3,'item']],[3,'formatedAppId']])
Z(z[69])
Z([[6],[[7],[3,'item']],[3,'recommendReason']])
Z([[6],[[7],[3,'item']],[3,'referMsg']])
Z([[6],[[7],[3,'item']],[3,'referMsgType']])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([[2,'==='],[[6],[[7],[3,'friendsUseAppListFetchStatus']],[[7],[3,'listIndex']]],[1,'fetching']])
Z(z[65])
Z(z[54])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'实时热榜'])
Z([3,'panelIndex'])
Z([3,'panel'])
Z([[7],[3,'renderList']])
Z([[7],[3,'panelIndex']])
Z(z[3])
Z([[7],[3,'panel']])
Z([[7],[3,'index']])
Z([[2,'||'],[[2,'<'],[[7],[3,'index']],[1,3]],[[6],[[7],[3,'showAll']],[[7],[3,'panelIndex']]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'showAll']],[[7],[3,'panelIndex']]]],[[2,'>'],[[6],[[7],[3,'panel']],[3,'length']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z(z[0])
Z([3,'小程序'])
Z([[2,'=='],[[7],[3,'platform']],[1,'android']])
Z([[7],[3,'showOrderEntrance']])
Z([3,'clickMoreMenu'])
Z([3,'btn-topright btn-more'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'platform']],[1,'android']],[1,'tap-dark'],[1,'ios-opacity']])
Z([3,'right'])
Z([[7],[3,'showMoreMenuRedDot']])
Z([3,'onPageScroll'])
Z(z[10])
Z([3,'main'])
Z([[7],[3,'searchEventId']])
Z([[2,'!=='],[[7],[3,'platform']],[1,'ios']])
Z([3,'search'])
Z([1,201])
Z([3,'related-app-list-card'])
Z([3,'handleRetry'])
Z([3,'feed-list'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'weui-navigation-bar__inner '],[[2,'?:'],[[7],[3,'ios']],[1,'ios'],[1,'android']]])
Z([a,[3,'padding-top: '],[[7],[3,'statusBarHeight']],[3,'px;'],[[7],[3,'displayStyle']],[3,';'],[[7],[3,'innerPaddingRight']],[3,';'],[[7],[3,'innerWidth']],[3,';']])
Z([3,'weui-navigation-bar__left'])
Z([[7],[3,'leftWidth']])
Z([[7],[3,'back']])
Z([3,'left'])
Z([[2,'&&'],[[7],[3,'title']],[[2,'!'],[[7],[3,'ios']]]])
Z([3,'weui-navigation-bar__center'])
Z([[7],[3,'loading']])
Z([[2,'&&'],[[7],[3,'title']],[[7],[3,'ios']]])
Z([3,'center'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/app-cards/app-card-layout/app-card-layout.wxml:cardwxs":np_0,"m_./components/friends-use-list-item/friends-use-list-item.wxml:filter":np_1,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/app-cards/app-card-layout/app-card-layout.wxml']={};
f_['./components/app-cards/app-card-layout/app-card-layout.wxml']['cardwxs'] =nv_require("m_./components/app-cards/app-card-layout/app-card-layout.wxml:cardwxs");
function np_0(){var nv_module={nv_exports:{}};function nv_handleClickLike(nv_event,nv_ownerInstance){var nv_instance = nv_ownerInstance.nv_selectComponent('.icon-like');if (nv_instance.nv_hasClass('not-like')){nv_instance.nv_removeClass('not-like','ani-like','has-like','ani-unlike');nv_instance.nv_addClass('ani-like');nv_instance.nv_addClass('has-like')} else {nv_instance.nv_removeClass('has-like','ani-unlike','not-like','ani-like');nv_instance.nv_addClass('ani-unlike');nv_instance.nv_addClass('not-like')};nv_ownerInstance.nv_callMethod('handleClickLike')};nv_module.nv_exports = ({nv_handleClickLike:nv_handleClickLike,});return nv_module.nv_exports;}

f_['./components/friends-use-list-item/friends-use-list-item.wxml']={};
f_['./components/friends-use-list-item/friends-use-list-item.wxml']['filter'] =nv_require("m_./components/friends-use-list-item/friends-use-list-item.wxml:filter");
function np_1(){var nv_module={nv_exports:{}};function nv_scoreFilter(nv_score){if (typeof nv_score !== 'number'){return('')} else {return(nv_score.nv_toFixed(1))}};nv_module.nv_exports = ({nv_scoreFilter:nv_scoreFilter,});return nv_module.nv_exports;}

var x=['./components/app-cards/app-card-article/app-card-article.wxml','./components/app-cards/app-card-layout/app-card-layout.wxml','./components/app-cards/app-card-post-video/app-card-post-video.wxml','./components/epidemic-info-panel/epidemic-info-panel.wxml','./components/epidemic-server-panel/epidemic-server-panel.wxml','./components/feed-list-item-placeholder/feed-list-item-placeholder.wxml','./components/feed-list/feed-list.wxml','./components/feiyan-app-action-sheet/feiyan-app-action-sheet.wxml','./components/friends-use-category-tab/friends-use-category-tab.wxml','./components/friends-use-epidemic-panel/friends-use-epidemic-panel.wxml','./components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.wxml','./components/friends-use-list-item/friends-use-list-item.wxml','./components/hot-feed-card/hot-feed-card.wxml','./components/related-app-list-card/related-app-list-card.wxml','./components/search/search.wxml','./components/toggle-display-top/toggle-display-top.wxml','./pages/epidemic-feeds/epidemic-feeds.wxml','./pages/friends-use-all/friends-use-all.wxml','./pages/friends-use-epidemic/friends-use-epidemic.wxml','./pages/friends-use-group/friends-use-group.wxml','./pages/friends-use/friends-use.wxml','./pages/hot-list/hot-list.wxml','./pages/index/index.wxml','./weui-miniprogram/navigation-bar/navigation-bar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'app-card-layout',['appLogo',0,'appName',1,'bind:captureClickCard',1,'bind:handleClickLike',2,'bind:handleClickMore',3,'bind:toProfile',4,'class',5,'hasLike',6,'likeCount',7,'recommendReason',8,'recommend_reason_type',9,'social_like_info',10],[],e,s,gg)
var xC=_mz(z,'view',['catch:tap',12,'class',1,'slot',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,15,e,s,gg)){oD.wxVkey=1
var fE=_v()
_(oD,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,18,oH,hG,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,16,cF,e,s,gg,fE,'item','index','{{item}}')
}
else if(_oz(z,19,e,s,gg)){oD.wxVkey=2
}
else if(_oz(z,20,e,s,gg)){oD.wxVkey=3
}
else{oD.wxVkey=4
var aL=_v()
_(oD,aL)
if(_oz(z,21,e,s,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
}
oD.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var eN=_mz(z,'view',['catch:tap',0,'class',1],[],e,s,gg)
var bO=_n('slot')
_rz(z,bO,'name',2,e,s,gg)
_(eN,bO)
var oP=_n('view')
_rz(z,oP,'class',3,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,4,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,5,e,s,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
_(eN,oP)
_(r,eN)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cT=_mz(z,'app-card-layout',['appLogo',0,'appName',1,'bind:captureClickCard',1,'bind:handleClickLike',2,'bind:handleClickMore',3,'bind:toProfile',4,'class',5,'hasLike',6,'likeCount',7,'recommendReason',8,'recommend_reason_type',9,'social_like_info',10],[],e,s,gg)
var hU=_mz(z,'view',['class',12,'slot',1],[],e,s,gg)
var oV=_mz(z,'view',['bind:tap',14,'class',1,'id',2],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,17,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(hU,oV)
_(cT,hU)
_(r,cT)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
var aZ=_n('feiyan-app-action-sheet')
_rz(z,aZ,'bind:close',1,e,s,gg)
_(lY,aZ)
}
lY.wxXCkey=1
lY.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
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
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,1,e,s,gg)){c8.wxVkey=1
var o0=_n('view')
_rz(z,o0,'class',2,e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,3,e,s,gg)){cAB.wxVkey=1
var tEB=_n('epidemic-info-panel')
_rz(z,tEB,'feiyan_data',4,e,s,gg)
_(cAB,tEB)
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,5,e,s,gg)){oBB.wxVkey=1
var eFB=_n('epidemic-server-panel')
_rz(z,eFB,'virus_group_info',6,e,s,gg)
_(oBB,eFB)
}
var lCB=_v()
_(o0,lCB)
if(_oz(z,7,e,s,gg)){lCB.wxVkey=1
var bGB=_v()
_(lCB,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_mz(z,'hot-feed-card',['bind:longpress',10,'bind:tap',1,'data-hot-list',2,'data-index',3,'data-recommend_id',4,'id',5,'index',6,'item',7,'listLength',8,'withImg',9],[],oJB,xIB,gg)
_(fKB,hMB)
return fKB
}
bGB.wxXCkey=4
_2z(z,8,oHB,e,s,gg,bGB,'item','index','{{item.recommend_id}}')
}
var aDB=_v()
_(o0,aDB)
if(_oz(z,20,e,s,gg)){aDB.wxVkey=1
}
cAB.wxXCkey=1
cAB.wxXCkey=3
oBB.wxXCkey=1
oBB.wxXCkey=3
lCB.wxXCkey=1
lCB.wxXCkey=3
aDB.wxXCkey=1
_(c8,o0)
}
var h9=_v()
_(f7,h9)
if(_oz(z,21,e,s,gg)){h9.wxVkey=1
}
var oNB=_v()
_(f7,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_v()
_(aRB,eTB)
if(_oz(z,24,lQB,oPB,gg)){eTB.wxVkey=1
var oVB=_mz(z,'app-card-article',['appLogo',25,'appName',1,'bind:captureClickCard',2,'bind:handleClickCardBody',3,'bind:handleClickLike',4,'bind:handleClickMore',5,'bind:longpress',6,'bind:onLoadimageError',7,'bind:toProfile',8,'contentImg',9,'contentText',10,'content_image_list',11,'data-index',12,'hasLike',13,'id',14,'isVideo',15,'likeCount',16,'recommendReason',17,'recommend_reason_type',18,'social_like_info',19,'textLink',20],[],lQB,oPB,gg)
_(eTB,oVB)
}
var bUB=_v()
_(aRB,bUB)
if(_oz(z,46,lQB,oPB,gg)){bUB.wxVkey=1
var xWB=_mz(z,'app-card-post-video',['appLogo',47,'appName',1,'bind:captureClickCard',2,'bind:handleClickCardBody',3,'bind:handleClickLike',4,'bind:handleClickMore',5,'bind:handlePauseVideo',6,'bind:handlePlayVideo',7,'bind:longpress',8,'bind:onLoadimageError',9,'bind:toProfile',10,'contentImg',11,'contentText',12,'data-index',13,'hasLike',14,'id',15,'likeCount',16,'recommendReason',17,'recommend_reason_type',18,'social_like_info',19,'textLink',20,'videoUrl',21],[],lQB,oPB,gg)
_(bUB,xWB)
}
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
bUB.wxXCkey=3
return aRB
}
oNB.wxXCkey=4
_2z(z,22,cOB,e,s,gg,oNB,'item','index','{{item.recommendId}}')
c8.wxXCkey=1
c8.wxXCkey=3
h9.wxXCkey=1
_(r,f7)
var o4=_v()
_(r,o4)
if(_oz(z,69,e,s,gg)){o4.wxVkey=1
var oXB=_v()
_(o4,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_n('feed-list-item-placeholder')
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=4
_2z(z,70,fYB,e,s,gg,oXB,'item','index','{{index}}')
}
var x5=_v()
_(r,x5)
if(_oz(z,72,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(r,o6)
if(_oz(z,73,e,s,gg)){o6.wxVkey=1
}
o4.wxXCkey=1
o4.wxXCkey=3
x5.wxXCkey=1
o6.wxXCkey=1
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
var t7B=_n('view')
_rz(z,t7B,'class',0,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,1,e,s,gg)){e8B.wxVkey=1
var o0B=_v()
_(e8B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_v()
_(cDC,oFC)
if(_oz(z,4,fCC,oBC,gg)){oFC.wxVkey=1
}
oFC.wxXCkey=1
return cDC
}
o0B.wxXCkey=2
_2z(z,2,xAC,e,s,gg,o0B,'item','index','{{item.category_id}}')
var b9B=_v()
_(e8B,b9B)
if(_oz(z,5,e,s,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
}
else{e8B.wxVkey=2
}
e8B.wxXCkey=1
_(r,t7B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aJC=_n('view')
_rz(z,aJC,'class',0,e,s,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,1,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,2,e,s,gg)){eLC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
_(r,aJC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oNC=_v()
_(r,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
}
oNC.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oPC=_v()
_(r,oPC)
if(_oz(z,0,e,s,gg)){oPC.wxVkey=1
var fQC=_n('view')
_rz(z,fQC,'class',1,e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,2,e,s,gg)){cRC.wxVkey=1
var hSC=_v()
_(cRC,hSC)
var oTC=function(oVC,cUC,lWC,gg){
var tYC=_v()
_(lWC,tYC)
if(_oz(z,5,oVC,cUC,gg)){tYC.wxVkey=1
}
tYC.wxXCkey=1
return lWC
}
hSC.wxXCkey=2
_2z(z,3,oTC,e,s,gg,hSC,'item','index','{{item.appid}}')
}
else{cRC.wxVkey=2
}
cRC.wxXCkey=1
_(oPC,fQC)
}
else{oPC.wxVkey=2
var eZC=_n('view')
_rz(z,eZC,'class',6,e,s,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,7,e,s,gg)){b1C.wxVkey=1
var o2C=_v()
_(b1C,o2C)
var x3C=function(f5C,o4C,c6C,gg){
var o8C=_v()
_(c6C,o8C)
if(_oz(z,10,f5C,o4C,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
return c6C
}
o2C.wxXCkey=2
_2z(z,8,x3C,e,s,gg,o2C,'item','index','{{item.appid}}')
}
else{b1C.wxVkey=2
}
b1C.wxXCkey=1
_(oPC,eZC)
}
oPC.wxXCkey=1
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o0C=_v()
_(r,o0C)
if(_oz(z,0,e,s,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var aBD=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tCD=_n('slot')
_rz(z,tCD,'name',2,e,s,gg)
_(aBD,tCD)
var eDD=_n('slot')
_rz(z,eDD,'name',3,e,s,gg)
_(aBD,eDD)
_(r,aBD)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oFD=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
_(r,oFD)
var xGD=_v()
_(r,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'hot-feed-card',['bind:longpress',4,'bind:tap',1,'data-index',2,'data-recommend_id',3,'id',4,'index',5,'item',6,'listLength',7],[],cJD,fID,gg)
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=4
_2z(z,2,oHD,e,s,gg,xGD,'item','index','{{item.recommend_id}}')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var lOD=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,2,e,s,gg)){aPD.wxVkey=1
}
aPD.wxXCkey=1
_(r,lOD)
var tQD=_mz(z,'toggle-display-top',['id',3,'pageStyle',1,'topHeight',2],[],e,s,gg)
var eRD=_mz(z,'search',['eventId',6,'extraClass',1,'hidden',2,'id',3,'scene',4,'slot',5],[],e,s,gg)
_(tQD,eRD)
var bSD=_mz(z,'view',['class',12,'slot',1],[],e,s,gg)
var xUD=_mz(z,'scroll-view',['class',14,'scrollY',1],[],e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,16,e,s,gg)){oVD.wxVkey=1
var fWD=_v()
_(oVD,fWD)
var cXD=function(oZD,hYD,c1D,gg){
var l3D=_v()
_(c1D,l3D)
if(_oz(z,19,oZD,hYD,gg)){l3D.wxVkey=1
}
l3D.wxXCkey=1
return c1D
}
fWD.wxXCkey=2
_2z(z,17,cXD,e,s,gg,fWD,'item','index','{{item.category_id}}')
}
else{oVD.wxVkey=2
}
oVD.wxXCkey=1
_(bSD,xUD)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,20,e,s,gg)){oTD.wxVkey=1
var a4D=_mz(z,'scroll-view',['bindscroll',21,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'enableBackToTop',4,'scrollTop',5,'scrollY',6,'upperThreshold',7],[],e,s,gg)
var t5D=_v()
_(a4D,t5D)
var e6D=function(o8D,b7D,x9D,gg){
var fAE=_mz(z,'friends-use-list-item',['appDesc',31,'appLogo',1,'appName',2,'appid',3,'bind:longpress',4,'bind:tap',5,'category',6,'category_name_list',7,'data-index',8,'data-list-index',9,'id',10,'listIndex',11,'recommendReason',12,'score',13],[],o8D,b7D,gg)
_(x9D,fAE)
return x9D
}
t5D.wxXCkey=4
_2z(z,29,e6D,e,s,gg,t5D,'item','index','{{item.appid}}')
_(oTD,a4D)
}
else if(_oz(z,45,e,s,gg)){oTD.wxVkey=2
var cBE=_v()
_(oTD,cBE)
var hCE=function(cEE,oDE,oFE,gg){
var aHE=_n('friends-use-list-item-placeholder')
_(oFE,aHE)
return oFE
}
cBE.wxXCkey=4
_2z(z,46,hCE,e,s,gg,cBE,'item','index','{{index}}')
}
else{oTD.wxVkey=3
}
oTD.wxXCkey=1
oTD.wxXCkey=3
oTD.wxXCkey=3
_(tQD,bSD)
_(r,tQD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bKE=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
_(r,bKE)
var eJE=_v()
_(r,eJE)
if(_oz(z,2,e,s,gg)){eJE.wxVkey=1
var oLE=_v()
_(eJE,oLE)
var xME=function(fOE,oNE,cPE,gg){
var oRE=_v()
_(cPE,oRE)
if(_oz(z,7,fOE,oNE,gg)){oRE.wxVkey=1
var cSE=_n('view')
_rz(z,cSE,'class',8,fOE,oNE,gg)
var lUE=_v()
_(cSE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_mz(z,'friends-use-list-item',['appDesc',12,'appLogo',1,'appName',2,'appid',3,'bind:longpress',4,'bind:tap',5,'category',6,'category_name_list',7,'data-group-index',8,'data-index',9,'id',10,'listIndex',11,'recommendReason',12,'referMsg',13,'referMsgType',14,'score',15],[],eXE,tWE,gg)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=4
_2z(z,10,aVE,fOE,oNE,gg,lUE,'card_list_item','index','{{card_list_item.appid}}')
var oTE=_v()
_(cSE,oTE)
if(_oz(z,28,fOE,oNE,gg)){oTE.wxVkey=1
}
oTE.wxXCkey=1
_(oRE,cSE)
}
oRE.wxXCkey=1
oRE.wxXCkey=3
return cPE
}
oLE.wxXCkey=4
_2z(z,5,xME,e,s,gg,oLE,'group_list_item','group_list_index','{{group_list_item.group_info.group_name}}')
}
else{eJE.wxVkey=2
var o2E=_v()
_(eJE,o2E)
var f3E=function(h5E,c4E,o6E,gg){
var o8E=_n('friends-use-list-item-placeholder')
_(o6E,o8E)
return o6E
}
o2E.wxXCkey=4
_2z(z,29,f3E,e,s,gg,o2E,'item','index','{{index}}')
}
eJE.wxXCkey=1
eJE.wxXCkey=3
eJE.wxXCkey=3
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var tAF=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
_(r,tAF)
var a0E=_v()
_(r,a0E)
if(_oz(z,2,e,s,gg)){a0E.wxVkey=1
var eBF=_v()
_(a0E,eBF)
var bCF=function(xEF,oDF,oFF,gg){
var cHF=_mz(z,'friends-use-list-item',['appDesc',6,'appLogo',1,'appName',2,'appid',3,'bind:longpress',4,'bind:tap',5,'category',6,'category_name_list',7,'data-index',8,'id',9,'listIndex',10,'recommendReason',11,'referMsg',12,'referMsgType',13,'score',14],[],xEF,oDF,gg)
_(oFF,cHF)
return oFF
}
eBF.wxXCkey=4
_2z(z,4,bCF,e,s,gg,eBF,'card_list_item','index','{{card_list_item.appid}}')
}
else{a0E.wxVkey=2
var hIF=_v()
_(a0E,hIF)
var oJF=function(oLF,cKF,lMF,gg){
var tOF=_n('friends-use-list-item-placeholder')
_(lMF,tOF)
return lMF
}
hIF.wxXCkey=4
_2z(z,21,oJF,e,s,gg,hIF,'item','index','{{index}}')
}
a0E.wxXCkey=1
a0E.wxXCkey=3
a0E.wxXCkey=3
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var bQF=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
var oRF=_v()
_(bQF,oRF)
if(_oz(z,2,e,s,gg)){oRF.wxVkey=1
}
oRF.wxXCkey=1
_(r,bQF)
var xSF=_mz(z,'toggle-display-top',['id',3,'pageStyle',1,'topHeight',2],[],e,s,gg)
var oTF=_mz(z,'search',['eventId',6,'extraClass',1,'hidden',2,'id',3,'scene',4,'slot',5],[],e,s,gg)
_(xSF,oTF)
var fUF=_mz(z,'view',['class',12,'slot',1],[],e,s,gg)
var cVF=_v()
_(fUF,cVF)
if(_oz(z,14,e,s,gg)){cVF.wxVkey=1
var hWF=_mz(z,'friends-use-category-tab',['activeTabIndex',15,'category_total',1,'class',2,'tabLineOffset',3,'tabList',4],[],e,s,gg)
_(cVF,hWF)
}
var oXF=_mz(z,'swiper',['bindanimationfinish',20,'bindchange',1,'class',2,'current',3],[],e,s,gg)
var cYF=_mz(z,'swiper-item',['catchtouchmove',24,'class',1],[],e,s,gg)
var oZF=_mz(z,'scroll-view',['bindscroll',26,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'data-list-index',4,'enableBackToTop',5,'scrollY',6,'upperThreshold',7],[],e,s,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,34,e,s,gg)){l1F.wxVkey=1
var t3F=_n('friends-use-epidemic-panel')
_(l1F,t3F)
}
var a2F=_v()
_(oZF,a2F)
if(_oz(z,35,e,s,gg)){a2F.wxVkey=1
var e4F=_v()
_(a2F,e4F)
var b5F=function(x7F,o6F,o8F,gg){
var c0F=_v()
_(o8F,c0F)
if(_oz(z,40,x7F,o6F,gg)){c0F.wxVkey=1
var hAG=_n('view')
_rz(z,hAG,'class',41,x7F,o6F,gg)
var cCG=_v()
_(hAG,cCG)
var oDG=function(aFG,lEG,tGG,gg){
var bIG=_mz(z,'friends-use-list-item',['appDesc',45,'appLogo',1,'appName',2,'appid',3,'bind:longpress',4,'bind:tap',5,'category',6,'category_name_list',7,'data-group-index',8,'data-index',9,'data-list-index',10,'hidden',11,'id',12,'listIndex',13,'recommendReason',14,'referMsg',15,'referMsgType',16,'score',17],[],aFG,lEG,gg)
_(tGG,bIG)
return tGG
}
cCG.wxXCkey=4
_2z(z,43,oDG,x7F,o6F,gg,cCG,'card_list_item','index','{{card_list_item.appid}}')
var oBG=_v()
_(hAG,oBG)
if(_oz(z,63,x7F,o6F,gg)){oBG.wxVkey=1
}
oBG.wxXCkey=1
_(c0F,hAG)
}
c0F.wxXCkey=1
c0F.wxXCkey=3
return o8F
}
e4F.wxXCkey=4
_2z(z,38,b5F,e,s,gg,e4F,'group_list_item','group_list_index','{{group_list_item.group_info.group_name}}')
}
else if(_oz(z,64,e,s,gg)){a2F.wxVkey=2
var oJG=_v()
_(a2F,oJG)
var xKG=function(fMG,oLG,cNG,gg){
var oPG=_n('friends-use-list-item-placeholder')
_(cNG,oPG)
return cNG
}
oJG.wxXCkey=4
_2z(z,65,xKG,e,s,gg,oJG,'item','index','{{index}}')
}
else{a2F.wxVkey=3
}
l1F.wxXCkey=1
l1F.wxXCkey=3
a2F.wxXCkey=1
a2F.wxXCkey=3
a2F.wxXCkey=3
_(cYF,oZF)
_(oXF,cYF)
var cQG=_v()
_(oXF,cQG)
var oRG=function(aTG,lSG,tUG,gg){
var bWG=_v()
_(tUG,bWG)
if(_oz(z,70,aTG,lSG,gg)){bWG.wxVkey=1
var oXG=_mz(z,'swiper-item',['catchtouchmove',71,'class',1],[],aTG,lSG,gg)
var xYG=_mz(z,'scroll-view',['bindscroll',73,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'data-list-index',4,'enableBackToTop',5,'scrollY',6,'upperThreshold',7],[],aTG,lSG,gg)
var oZG=_n('view')
_rz(z,oZG,'class',81,aTG,lSG,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,82,aTG,lSG,gg)){f1G.wxVkey=1
var c2G=_v()
_(f1G,c2G)
var h3G=function(c5G,o4G,o6G,gg){
var a8G=_mz(z,'friends-use-list-item',['appDesc',85,'appLogo',1,'appName',2,'appid',3,'bind:longpress',4,'bind:tap',5,'category',6,'category_name_list',7,'data-index',8,'data-list-index',9,'id',10,'listIndex',11,'recommendReason',12,'referMsg',13,'referMsgType',14,'score',15],[],c5G,o4G,gg)
_(o6G,a8G)
return o6G
}
c2G.wxXCkey=4
_2z(z,83,h3G,aTG,lSG,gg,c2G,'item','index','{{item.appid}}')
}
else if(_oz(z,101,aTG,lSG,gg)){f1G.wxVkey=2
var t9G=_v()
_(f1G,t9G)
var e0G=function(oBH,bAH,xCH,gg){
var fEH=_n('friends-use-list-item-placeholder')
_(xCH,fEH)
return xCH
}
t9G.wxXCkey=4
_2z(z,102,e0G,aTG,lSG,gg,t9G,'item','index','{{index}}')
}
f1G.wxXCkey=1
f1G.wxXCkey=3
f1G.wxXCkey=3
_(xYG,oZG)
_(oXG,xYG)
_(bWG,oXG)
}
bWG.wxXCkey=1
bWG.wxXCkey=3
return tUG
}
cQG.wxXCkey=4
_2z(z,68,oRG,e,s,gg,cQG,'item','listIndex','{{listIndex}}')
_(fUF,oXF)
cVF.wxXCkey=1
cVF.wxXCkey=3
_(xSF,fUF)
_(r,xSF)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var hGH=_mz(z,'navigation-bar',['back',0,'title',1],[],e,s,gg)
_(r,hGH)
var oHH=_v()
_(r,oHH)
var cIH=function(lKH,oJH,aLH,gg){
var eNH=_n('view')
_rz(z,eNH,'class',6,lKH,oJH,gg)
var oPH=_v()
_(eNH,oPH)
var xQH=function(fSH,oRH,cTH,gg){
var oVH=_v()
_(cTH,oVH)
if(_oz(z,9,fSH,oRH,gg)){oVH.wxVkey=1
}
oVH.wxXCkey=1
return cTH
}
oPH.wxXCkey=2
_2z(z,7,xQH,lKH,oJH,gg,oPH,'item','index','{{index}}')
var bOH=_v()
_(eNH,bOH)
if(_oz(z,10,lKH,oJH,gg)){bOH.wxVkey=1
}
bOH.wxXCkey=1
_(aLH,eNH)
return aLH
}
oHH.wxXCkey=2
_2z(z,4,cIH,e,s,gg,oHH,'panel','panelIndex','{{panelIndex}}')
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oXH=_mz(z,'navigation-bar',['back',0,'isIndex',1,'title',1],[],e,s,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,3,e,s,gg)){lYH.wxVkey=1
}
var aZH=_v()
_(oXH,aZH)
if(_oz(z,4,e,s,gg)){aZH.wxVkey=1
var t1H=_mz(z,'view',['bind:tap',5,'class',1,'hoverClass',2,'slot',3],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,9,e,s,gg)){e2H.wxVkey=1
}
e2H.wxXCkey=1
_(aZH,t1H)
}
lYH.wxXCkey=1
aZH.wxXCkey=1
_(r,oXH)
var b3H=_mz(z,'view',['bind:touchcancel',10,'bind:touchend',1,'class',2],[],e,s,gg)
var o4H=_mz(z,'search',['eventId',13,'hidden',1,'id',2,'scene',3],[],e,s,gg)
_(b3H,o4H)
var x5H=_n('related-app-list-card')
_rz(z,x5H,'id',17,e,s,gg)
_(b3H,x5H)
var o6H=_mz(z,'feed-list',['bind:handleRetry',18,'id',1],[],e,s,gg)
_(b3H,o6H)
_(r,b3H)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var c8H=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var h9H=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var o0H=_v()
_(h9H,o0H)
if(_oz(z,4,e,s,gg)){o0H.wxVkey=1
}
else{o0H.wxVkey=2
var oBI=_n('slot')
_rz(z,oBI,'name',5,e,s,gg)
_(o0H,oBI)
}
var cAI=_v()
_(h9H,cAI)
if(_oz(z,6,e,s,gg)){cAI.wxVkey=1
}
o0H.wxXCkey=1
cAI.wxXCkey=1
_(c8H,h9H)
var lCI=_n('view')
_rz(z,lCI,'class',7,e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,8,e,s,gg)){aDI.wxVkey=1
}
var tEI=_v()
_(lCI,tEI)
if(_oz(z,9,e,s,gg)){tEI.wxVkey=1
}
else{tEI.wxVkey=2
var eFI=_n('slot')
_rz(z,eFI,'name',10,e,s,gg)
_(tEI,eFI)
}
aDI.wxXCkey=1
tEI.wxXCkey=1
_(c8H,lCI)
var bGI=_n('slot')
_rz(z,bGI,'name',11,e,s,gg)
_(c8H,bGI)
_(r,c8H)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/app-cards/app-card-article/app-card-article.json'] = {"component":true,"usingComponents":{"app-card-layout":"/components/app-cards/app-card-layout/app-card-layout"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/app-cards/app-card-article/app-card-article.wxml'] = [$gwx, './components/app-cards/app-card-article/app-card-article.wxml'];else __wxAppCode__['components/app-cards/app-card-article/app-card-article.wxml'] = $gwx( './components/app-cards/app-card-article/app-card-article.wxml' );
		__wxAppCode__['components/app-cards/app-card-layout/app-card-layout.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/app-cards/app-card-layout/app-card-layout.wxml'] = [$gwx, './components/app-cards/app-card-layout/app-card-layout.wxml'];else __wxAppCode__['components/app-cards/app-card-layout/app-card-layout.wxml'] = $gwx( './components/app-cards/app-card-layout/app-card-layout.wxml' );
		__wxAppCode__['components/app-cards/app-card-post-video/app-card-post-video.json'] = {"component":true,"usingComponents":{"app-card-layout":"/components/app-cards/app-card-layout/app-card-layout"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/app-cards/app-card-post-video/app-card-post-video.wxml'] = [$gwx, './components/app-cards/app-card-post-video/app-card-post-video.wxml'];else __wxAppCode__['components/app-cards/app-card-post-video/app-card-post-video.wxml'] = $gwx( './components/app-cards/app-card-post-video/app-card-post-video.wxml' );
		__wxAppCode__['components/epidemic-info-panel/epidemic-info-panel.json'] = {"component":true,"usingComponents":{"feiyan-app-action-sheet":"/components/feiyan-app-action-sheet/feiyan-app-action-sheet"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/epidemic-info-panel/epidemic-info-panel.wxml'] = [$gwx, './components/epidemic-info-panel/epidemic-info-panel.wxml'];else __wxAppCode__['components/epidemic-info-panel/epidemic-info-panel.wxml'] = $gwx( './components/epidemic-info-panel/epidemic-info-panel.wxml' );
		__wxAppCode__['components/epidemic-server-panel/epidemic-server-panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/epidemic-server-panel/epidemic-server-panel.wxml'] = [$gwx, './components/epidemic-server-panel/epidemic-server-panel.wxml'];else __wxAppCode__['components/epidemic-server-panel/epidemic-server-panel.wxml'] = $gwx( './components/epidemic-server-panel/epidemic-server-panel.wxml' );
		__wxAppCode__['components/feed-list-item-placeholder/feed-list-item-placeholder.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/feed-list-item-placeholder/feed-list-item-placeholder.wxml'] = [$gwx, './components/feed-list-item-placeholder/feed-list-item-placeholder.wxml'];else __wxAppCode__['components/feed-list-item-placeholder/feed-list-item-placeholder.wxml'] = $gwx( './components/feed-list-item-placeholder/feed-list-item-placeholder.wxml' );
		__wxAppCode__['components/feed-list/feed-list.json'] = {"component":true,"usingComponents":{"app-card-article":"/components/app-cards/app-card-article/app-card-article","app-card-post-video":"/components/app-cards/app-card-post-video/app-card-post-video","feed-list-item-placeholder":"/components/feed-list-item-placeholder/feed-list-item-placeholder","hot-feed-card":"/components/hot-feed-card/hot-feed-card","epidemic-server-panel":"/components/epidemic-server-panel/epidemic-server-panel","epidemic-info-panel":"/components/epidemic-info-panel/epidemic-info-panel"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/feed-list/feed-list.wxml'] = [$gwx, './components/feed-list/feed-list.wxml'];else __wxAppCode__['components/feed-list/feed-list.wxml'] = $gwx( './components/feed-list/feed-list.wxml' );
		__wxAppCode__['components/feiyan-app-action-sheet/feiyan-app-action-sheet.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/feiyan-app-action-sheet/feiyan-app-action-sheet.wxml'] = [$gwx, './components/feiyan-app-action-sheet/feiyan-app-action-sheet.wxml'];else __wxAppCode__['components/feiyan-app-action-sheet/feiyan-app-action-sheet.wxml'] = $gwx( './components/feiyan-app-action-sheet/feiyan-app-action-sheet.wxml' );
		__wxAppCode__['components/friends-use-category-tab/friends-use-category-tab.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/friends-use-category-tab/friends-use-category-tab.wxml'] = [$gwx, './components/friends-use-category-tab/friends-use-category-tab.wxml'];else __wxAppCode__['components/friends-use-category-tab/friends-use-category-tab.wxml'] = $gwx( './components/friends-use-category-tab/friends-use-category-tab.wxml' );
		__wxAppCode__['components/friends-use-epidemic-panel/friends-use-epidemic-panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/friends-use-epidemic-panel/friends-use-epidemic-panel.wxml'] = [$gwx, './components/friends-use-epidemic-panel/friends-use-epidemic-panel.wxml'];else __wxAppCode__['components/friends-use-epidemic-panel/friends-use-epidemic-panel.wxml'] = $gwx( './components/friends-use-epidemic-panel/friends-use-epidemic-panel.wxml' );
		__wxAppCode__['components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.wxml'] = [$gwx, './components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.wxml'];else __wxAppCode__['components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.wxml'] = $gwx( './components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.wxml' );
		__wxAppCode__['components/friends-use-list-item/friends-use-list-item.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/friends-use-list-item/friends-use-list-item.wxml'] = [$gwx, './components/friends-use-list-item/friends-use-list-item.wxml'];else __wxAppCode__['components/friends-use-list-item/friends-use-list-item.wxml'] = $gwx( './components/friends-use-list-item/friends-use-list-item.wxml' );
		__wxAppCode__['components/hot-feed-card/hot-feed-card.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hot-feed-card/hot-feed-card.wxml'] = [$gwx, './components/hot-feed-card/hot-feed-card.wxml'];else __wxAppCode__['components/hot-feed-card/hot-feed-card.wxml'] = $gwx( './components/hot-feed-card/hot-feed-card.wxml' );
		__wxAppCode__['components/related-app-list-card/related-app-list-card.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/related-app-list-card/related-app-list-card.wxml'] = [$gwx, './components/related-app-list-card/related-app-list-card.wxml'];else __wxAppCode__['components/related-app-list-card/related-app-list-card.wxml'] = $gwx( './components/related-app-list-card/related-app-list-card.wxml' );
		__wxAppCode__['components/search/search.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/search/search.wxml'] = [$gwx, './components/search/search.wxml'];else __wxAppCode__['components/search/search.wxml'] = $gwx( './components/search/search.wxml' );
		__wxAppCode__['components/toggle-display-top/toggle-display-top.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/toggle-display-top/toggle-display-top.wxml'] = [$gwx, './components/toggle-display-top/toggle-display-top.wxml'];else __wxAppCode__['components/toggle-display-top/toggle-display-top.wxml'] = $gwx( './components/toggle-display-top/toggle-display-top.wxml' );
		__wxAppCode__['pages/epidemic-feeds/epidemic-feeds.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"疫情热门信息","usingComponents":{"navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar","hot-feed-card":"/components/hot-feed-card/hot-feed-card"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/epidemic-feeds/epidemic-feeds.wxml'] = [$gwx, './pages/epidemic-feeds/epidemic-feeds.wxml'];else __wxAppCode__['pages/epidemic-feeds/epidemic-feeds.wxml'] = $gwx( './pages/epidemic-feeds/epidemic-feeds.wxml' );
		__wxAppCode__['pages/friends-use-all/friends-use-all.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"大家在用","usingComponents":{"search":"/components/search/search","friends-use-list-item":"/components/friends-use-list-item/friends-use-list-item","friends-use-list-item-placeholder":"/components/friends-use-list-item-placeholder/friends-use-list-item-placeholder","toggle-display-top":"/components/toggle-display-top/toggle-display-top","navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/friends-use-all/friends-use-all.wxml'] = [$gwx, './pages/friends-use-all/friends-use-all.wxml'];else __wxAppCode__['pages/friends-use-all/friends-use-all.wxml'] = $gwx( './pages/friends-use-all/friends-use-all.wxml' );
		__wxAppCode__['pages/friends-use-epidemic/friends-use-epidemic.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"肺炎疫情专区","usingComponents":{"friends-use-list-item":"/components/friends-use-list-item/friends-use-list-item","friends-use-list-item-placeholder":"/components/friends-use-list-item-placeholder/friends-use-list-item-placeholder","navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/friends-use-epidemic/friends-use-epidemic.wxml'] = [$gwx, './pages/friends-use-epidemic/friends-use-epidemic.wxml'];else __wxAppCode__['pages/friends-use-epidemic/friends-use-epidemic.wxml'] = $gwx( './pages/friends-use-epidemic/friends-use-epidemic.wxml' );
		__wxAppCode__['pages/friends-use-group/friends-use-group.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"大家在用","usingComponents":{"friends-use-list-item":"/components/friends-use-list-item/friends-use-list-item","friends-use-list-item-placeholder":"/components/friends-use-list-item-placeholder/friends-use-list-item-placeholder","navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/friends-use-group/friends-use-group.wxml'] = [$gwx, './pages/friends-use-group/friends-use-group.wxml'];else __wxAppCode__['pages/friends-use-group/friends-use-group.wxml'] = $gwx( './pages/friends-use-group/friends-use-group.wxml' );
		__wxAppCode__['pages/friends-use/friends-use.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"大家在用","usingComponents":{"search":"/components/search/search","friends-use-category-tab":"/components/friends-use-category-tab/friends-use-category-tab","friends-use-list-item":"/components/friends-use-list-item/friends-use-list-item","friends-use-list-item-placeholder":"/components/friends-use-list-item-placeholder/friends-use-list-item-placeholder","toggle-display-top":"/components/toggle-display-top/toggle-display-top","navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar","friends-use-epidemic-panel":"/components/friends-use-epidemic-panel/friends-use-epidemic-panel"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/friends-use/friends-use.wxml'] = [$gwx, './pages/friends-use/friends-use.wxml'];else __wxAppCode__['pages/friends-use/friends-use.wxml'] = $gwx( './pages/friends-use/friends-use.wxml' );
		__wxAppCode__['pages/hot-list/hot-list.json'] = {"backgroundColor":"#ededed","navigationBarTitleText":"实时热榜","usingComponents":{"navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/hot-list/hot-list.wxml'] = [$gwx, './pages/hot-list/hot-list.wxml'];else __wxAppCode__['pages/hot-list/hot-list.wxml'] = $gwx( './pages/hot-list/hot-list.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"backgroundColor":"#ededed","usingComponents":{"search":"/components/search/search","related-app-list-card":"/components/related-app-list-card/related-app-list-card","feed-list":"/components/feed-list/feed-list","navigation-bar":"/weui-miniprogram/navigation-bar/navigation-bar"},"onReachBottomDistance":100};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['weui-miniprogram/navigation-bar/navigation-bar.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['weui-miniprogram/navigation-bar/navigation-bar.wxml'] = [$gwx, './weui-miniprogram/navigation-bar/navigation-bar.wxml'];else __wxAppCode__['weui-miniprogram/navigation-bar/navigation-bar.wxml'] = $gwx( './weui-miniprogram/navigation-bar/navigation-bar.wxml' );
	
	define("common.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[1],[function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"d",function(){return i}),n.d(e,"k",function(){return o}),n.d(e,"i",function(){return s}),n.d(e,"h",function(){return c}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"j",function(){return p}),n.d(e,"g",function(){return f}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return h});const r={WxaHomeGetFeedsList:"WxaHomeGetFeedsList",WxaHomeGetCommonUseAppList:"WxaHomeGetCommonUseAppList",WxaHomeGetNearbyInfo:"WxaHomeGetNearbyInfo",WxaHomeGetWeUseAppList:"WxaHomeGetWeUseAppList",WxaHomeOssReport:"WxaHomeOssReport",WxaHomeCommReport:"WxaHomeCommReport"},i={START:"START",FAIL:"FAIL",FINALLY_FAIL:"FINALLY_FAIL",SUCCESS:"SUCCESS",EMPTY:"EMPTY",COST_LESS_THEN_1:"COST_LESS_THEN_1",COST_LESS_THEN_2:"COST_LESS_THEN_2",COST_LESS_THEN_3:"COST_LESS_THEN_3",COST_LESS_THEN_5:"COST_LESS_THEN_5",COST_MORE_THEN_5:"COST_MORE_THEN_5"},o=(t,e)=>`${t}-${e}`,s={open:0,cache:1,request:2,openHistory:11,openHistorySuccess:12,openHistoryFail:13,openStar:14,openStarSuccess:15,openStarFail:16,openNearby:17,openNearbySuccess:18,openNearbyFail:19,openSearch:20,openSearchSuccess:21,openSearchFail:22,[o(r.WxaHomeGetNearbyInfo,i.START)]:23,[o(r.WxaHomeGetNearbyInfo,i.FAIL)]:24,[o(r.WxaHomeGetNearbyInfo,i.FINALLY_FAIL)]:80,[o(r.WxaHomeGetNearbyInfo,i.EMPTY)]:25,[o(r.WxaHomeGetNearbyInfo,i.SUCCESS)]:26,[o(r.WxaHomeGetNearbyInfo,i.COST_LESS_THEN_1)]:27,[o(r.WxaHomeGetNearbyInfo,i.COST_LESS_THEN_3)]:28,[o(r.WxaHomeGetNearbyInfo,i.COST_LESS_THEN_5)]:29,[o(r.WxaHomeGetNearbyInfo,i.COST_MORE_THEN_5)]:30,[o(r.WxaHomeGetFeedsList,i.START)]:39,[o(r.WxaHomeGetFeedsList,i.FAIL)]:40,[o(r.WxaHomeGetFeedsList,i.FINALLY_FAIL)]:75,[o(r.WxaHomeGetFeedsList,i.EMPTY)]:41,[o(r.WxaHomeGetFeedsList,i.SUCCESS)]:42,[o(r.WxaHomeGetFeedsList,i.COST_LESS_THEN_1)]:43,[o(r.WxaHomeGetFeedsList,i.COST_LESS_THEN_2)]:72,[o(r.WxaHomeGetFeedsList,i.COST_LESS_THEN_3)]:44,[o(r.WxaHomeGetFeedsList,i.COST_LESS_THEN_5)]:45,[o(r.WxaHomeGetFeedsList,i.COST_MORE_THEN_5)]:46,[o(r.WxaHomeGetCommonUseAppList,i.START)]:47,[o(r.WxaHomeGetCommonUseAppList,i.FAIL)]:48,[o(r.WxaHomeGetCommonUseAppList,i.FINALLY_FAIL)]:76,[o(r.WxaHomeGetCommonUseAppList,i.EMPTY)]:49,[o(r.WxaHomeGetCommonUseAppList,i.SUCCESS)]:50,[o(r.WxaHomeGetCommonUseAppList,i.COST_LESS_THEN_1)]:51,[o(r.WxaHomeGetCommonUseAppList,i.COST_LESS_THEN_2)]:73,[o(r.WxaHomeGetCommonUseAppList,i.COST_LESS_THEN_3)]:52,[o(r.WxaHomeGetCommonUseAppList,i.COST_LESS_THEN_5)]:53,[o(r.WxaHomeGetCommonUseAppList,i.COST_MORE_THEN_5)]:54,[o(r.WxaHomeGetWeUseAppList,i.START)]:55,[o(r.WxaHomeGetWeUseAppList,i.FAIL)]:56,[o(r.WxaHomeGetWeUseAppList,i.FINALLY_FAIL)]:77,[o(r.WxaHomeGetWeUseAppList,i.EMPTY)]:57,[o(r.WxaHomeGetWeUseAppList,i.SUCCESS)]:58,[o(r.WxaHomeGetWeUseAppList,i.COST_LESS_THEN_1)]:59,[o(r.WxaHomeGetWeUseAppList,i.COST_LESS_THEN_2)]:74,[o(r.WxaHomeGetWeUseAppList,i.COST_LESS_THEN_3)]:60,[o(r.WxaHomeGetWeUseAppList,i.COST_LESS_THEN_5)]:61,[o(r.WxaHomeGetWeUseAppList,i.COST_MORE_THEN_5)]:62,[o(r.WxaHomeCommReport,i.START)]:66,[o(r.WxaHomeCommReport,i.FAIL)]:67,[o(r.WxaHomeCommReport,i.FINALLY_FAIL)]:79,[o(r.WxaHomeCommReport,i.SUCCESS)]:68,openWeuse:69,openWeuseSuccess:70,openWeuseFail:71,uiVersionUnknow:100,uiVersion1:101,uiVersion2:102},c={ENTRY:1,NOTICE:2,HISTORY_USE:3,MY_STAR:4,NEARBY:5,FRIENDS_USE:6,MINI_APP:7,MINI_APP_PROFILE:8,SEARCH:9,EIXT:-1,PREVIEW:10,FRIENDS_USE_ALL:11},a={FRIENDS_USE:3,NOTICE:4,HISTORY_USE:5,MY_STAR:6,NEARBY:7,EIXT:8,CLICK_INDEX_SEARCH:9,CLICK_FRIENDS_USE_SEARCH:10,CLICK_FRIENDS_USE_ALL_SEARCH:11,CLICK_FRIENDS_USE_TOPIC:12,NAVIGATION_BAR_MENU:21,TRANSACTION_GUARANTEE:22,CLICK_EPIDEMIC_TAB:23,CLICK_EPIDEMIC_SERVER:41},u={COMMON_USE:1,FEEDS_LIST:2,FRIENDS_USE:3,NOTICE_LIST:4,TIMELINE_FEEDS_LIST:9,PREVIEW:10,FRIENDS_USE_ALL:11,FRIENDS_USE_GROUP:12,INDEX_HOT_LIST_PANEL:13,HOT_LIST_PAGE:14,INDEX_EPIDEMIC_FEED_LIST:15,EPIDEMIC_FEED_LIST_PAGE:16,EPIDEMIC_APP_LIST:17,EPIDEMIC_APP_LIST_GROUP:18},p={EXPOSURE:1,CLICK:2,REFRESH:3},f={ACCOUNT:1,FOOT:2,NOTICE:3,FEED_SMALL:4,FEED_BIG:5},l={CLICK_POST_IMG:1,CLICK_POST_VIDEO:2,CLICK_CRAWLER:3,CLICK_PROFILE_LINK:4,CLICK_TEXT_LINK:5,CLICK_EXPAND:6,CLICK_LIKE:10,CANCEL_LIKE:11,CLICK_FEED_MENU:15,CLICK_DISLIKE:16,CLICK_COMPLAIN:17,CANCEL_FEED_MENU:18,VIDEO_PLAYED:21,CARD_STAY_TIME:22,FEED_STAY_TIME:23,CLICK_INNER_LINK:41,PREVIEW_SLIDE:42,LOAD_MORE:51,HOT_LIST_ENTRANCE:61,SHOW_ALL:62,EPIDEMIC_FEED_LIST_ENTRANCE:63,CLICK_EPIDEMIC_DATA_APP:64,EXPOSURE_INDEX_EPIDEMIC_MODULE:65,CLICK_FRIENDS_USE_EPIDEMIC_PANEL:66,CLICK_EPIDEMIC_DATA_APP_JUMP:67,CLICK_EPIDEMIC_ACTION_SHEET_APP_WITH_CHECK:68,CLICK_EPIDEMIC_ACTION_SHEET_APP_WITHOUT_CHECK:69,CLICK_EPIDEMIC_ACTION_SHEET_CLOSE:70},h={ARTICLE:1,HOT:2,VIDEO:3,GOODS:5,POST_IMAGE:7,POST_VIDEO:8}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}},function(t,e,n){"use strict";n.d(e,"i",function(){return h}),n.d(e,"g",function(){return d}),n.d(e,"d",function(){return b}),n.d(e,"f",function(){return _}),n.d(e,"e",function(){return y}),n.d(e,"h",function(){return m}),n.d(e,"b",function(){return v}),n.d(e,"c",function(){return E}),n.d(e,"a",function(){return S});var r=n(20),i=n(28),o=n(35),s=n(17),c=n(118),a=n(58),u=n(42),p=n(15),f=n(57),l=n(61);const h=i.a.getSystemInfo().pipe(Object(c.a)(1),Object(a.a)(()=>({})),Object(u.a)(1)),d=h.pipe(Object(p.a)(t=>t.platform)),b=i.a.getLocation({type:"gcj02"}).pipe(Object(a.a)(()=>Object(o.a)({latitude:23.13,longitude:113.27})),Object(u.a)(1)),_=(b.pipe(Object(p.a)(t=>({location_x:t.longitude,location_y:t.latitude}))),i.a.getNetworkType().pipe(Object(a.a)(()=>Object(o.a)({networkType:"unknown"})),Object(p.a)(t=>t.networkType),Object(u.a)(1))),y=(_.pipe(Object(p.a)(t=>({net_type:t}))),b.pipe(Object(f.a)(t=>r.a.getNearbyInfo({longitude:t.longitude,latitude:t.latitude})),Object(a.a)(t=>Object(o.a)({app_list:[],nearby_appid:"wxb935bc1925fb7b47",location_query:"?location=1234456789",nearby_tip:""})),Object(p.a)(({app_list:t,nearby_appid:e,location_query:n,nearby_tip:r})=>({appList:t,nearbyAppid:e,query:n,nearbyTip:r||""})),Object(l.a)(({nearbyAppid:t})=>{}),Object(u.a)(1))),m=new s.a,v=new s.a,E=(new s.a).pipe(Object(u.a)(1)),S=new s.a},function(t,e,n){"use strict";n.d(e,"b",function(){return v}),n.d(e,"d",function(){return O}),n.d(e,"g",function(){return w}),n.d(e,"i",function(){return g}),n.d(e,"f",function(){return E});var r=n(20),i=n(18),o=n(2);n.d(e,"k",function(){return o.i});var s=n(6);n.d(e,"e",function(){return s.d});var c=n(7);n.d(e,"j",function(){return c.c}),n.d(e,"c",function(){return c.a});var a=n(16);n.d(e,"l",function(){return a.c}),n.d(e,"a",function(){return a.a}),n.d(e,"h",function(){return a.b});var u=n(0),p=n(17),f=n(57),l=n(62),h=n(15),d=n(61),b=n(119),_=n(120),y=n(64),m=n(63);const v=new p.a,E=v.pipe(Object(f.a)(()=>r.a.getFriendsUseAppList({category_type:2})),Object(l.a)((t,e)=>e.fail?t:e),Object(h.a)(t=>(t.category_app_list&&t.category_app_list.sort((t,e)=>t.category.category_pos-e.category.category_pos),t)),Object(d.a)(t=>{t.category_app_list&&t.category_app_list.forEach(t=>{t.weuse_app_list})}),Object(b.a)(1)),S=E.pipe(Object(_.a)("session_id")),x=Object(i.b)(),O=new p.a;O.pipe(Object(y.a)(E,o.c,({index:t,listIndex:e,groupIndex:n,forEpidemic:r,extraSceneNote:i},o,s)=>{let c;c=r?o.virus_module_app_list.group_app_list[n].card_list[t]:"number"==typeof n?o.category_group_app_list[e].group_list[n].card_list[t]:o.category_app_list[e].weuse_app_list[t];const{strategy_info:a,appid:u,app_user_name:p}=c;let f=[p,s,a];Array.isArray(i)&&(f=f.concat(i));const l=f.join(";");return console.log("sceneNoteString",l),{appId:u,scene:1145,sceneNote:l,preScene:17,preSceneNote:[s].join(";")}})).subscribe(x);const g=new p.a;g.pipe(Object(y.a)(E,o.c,S,({cardIndex:t,eventId:e,listIndex:n,groupIndex:r,entry_scene:i,forEpidemic:o},s,c,a)=>{let p,f,l;if(o){const e=s.virus_module_app_list;l=e.module_title,f=e.group_app_list[r].card_list[t]}else if("number"==typeof r){l=(p=s.category_group_app_list[n]).category.category_name,f=p.group_list[r].card_list[t]}else f=(p=s.category_app_list[n]).weuse_app_list[t],l=p.category.category_name;const{recommend_id:h,app_user_name:d,content_desc:b,pass_str:_}=f,y={session_id:a,client_session_id:c,entry_scene:i||u.f.FRIENDS_USE,event_id:e||u.j.EXPOSURE,event_type:u.g.ACCOUNT,event_pos:t,event_happen_before_seconds:Date.now(),username:d,content_title:b,recommend_id:h,pass_str:_,tab_name:l};return console.log("info>>",y),y})).subscribe(c.b);const w=new p.a;w.pipe(Object(m.a)(t=>`${t.intersectionObserveTime}-${t.eventId}-${t.cardIndex}-${t.listIndex}-${t.formatedAppId}-${t.groupIndex}`)).subscribe(g),x.subscribe(t=>{t.fail?console.log(`超时或失败：${JSON.stringify(t)}`):s.d.next({scene:u.h.MINI_APP})},t=>{console.log("weuse-app-list失败，导致navigateToMiniProgram",t)})},function(t,e,n){"use strict";var r=n(20),i=n(0);var o=n(17),s=n(40),c=n(49),a=n(116),u=n(15),p=n(117),f=n(60),l=n(61),h=n(54),d=n(58);n.d(e,"c",function(){return b}),n.d(e,"b",function(){return y}),n.d(e,"a",function(){return m});const b=new o.a,_=b.pipe(Object(a.a)(5e3));b.pipe(Object(u.a)(t=>({id:118265,key:t})),Object(p.a)(_),Object(f.a)(t=>t.length>0),Object(l.a)(t=>{r.a.reportIDKeyList(t).subscribe(()=>void 0,t=>console.log("上报idkey 失败",t))})).subscribe();const y=new o.a;y.pipe(Object(u.a)(({apiName:t,cgiTimeCost:e,resData:n,fail:r,finallyFail:o})=>{const s=[];if(o){const e=Object(i.k)(t,i.d.FINALLY_FAIL);return i.i[e]&&s.push(i.i[e]),s}if(r){const e=Object(i.k)(t,i.d.FAIL);i.i[e]&&s.push(i.i[e])}else{const e=(t=>{return{[i.b.WxaHomeGetFeedsList]:["weuse_feeds_list"],[i.b.WxaHomeGetCommonUseAppList]:["commonuse_app_list"],[i.b.WxaHomeGetWeUseAppList]:["category_app_list"]}[t]})(t);if(e){if(e.some(t=>Array.isArray(n[t])&&n[t].length>0)){const e=Object(i.k)(t,i.d.SUCCESS);i.i[e]&&s.push(i.i[e])}else{const e=Object(i.k)(t,i.d.EMPTY);i.i[e]&&s.push(i.i[e])}}else{const e=Object(i.k)(t,i.d.SUCCESS);i.i[e]&&s.push(i.i[e])}}const c=(t=>t<1e3?i.d.COST_LESS_THEN_1:t<2e3?i.d.COST_LESS_THEN_2:t<3e3?i.d.COST_LESS_THEN_3:t<5e3?i.d.COST_LESS_THEN_5:i.d.COST_MORE_THEN_5)(e);let a=Object(i.k)(t,c);return i.i[a]&&s.push(i.i[a]),s}),Object(u.a)(t=>Object(s.a)(t)),Object(h.a)()).subscribe(b);const m=(new o.a).pipe(Object(d.a)(()=>Object(c.a)())),v=m.pipe(Object(a.a)(1));m.pipe(Object(p.a)(v),Object(u.a)(t=>{const e={reportList:[],exitMainReportList:[]};return t.forEach(t=>{t.exitMainReportList&&(e.exitMainReportList=e.exitMainReportList.concat(t.exitMainReportList)),t.reportList&&(e.reportList=e.reportList.concat(t.reportList))}),0===e.reportList.length&&delete e.reportList,0===e.exitMainReportList.length&&delete e.exitMainReportList,e}),Object(l.a)(t=>{console.log("开始上报 ",t),r.a.reportCommonAction(t).subscribe(()=>void 0,t=>console.log("上报CommonAction 失败",t))})).subscribe()},function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(1),i=n(34),o=n(41),s=n(14),c=n(33),a=n(22),u=n(30),p=function(t){function e(n,r,i){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o.a;break;case 1:if(!n){s.destination=o.a;break}if("object"==typeof n){n instanceof e?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new f(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new f(s,n,r,i)}return s}return r.a(e,t),e.prototype[c.a]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.a),f=function(t){function e(e,n,r,s){var c,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return Object(i.a)(n)?c=n:n&&(c=n.next,r=n.error,s=n.complete,n!==o.a&&(u=Object.create(n),Object(i.a)(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=c,a._error=r,a._complete=s,a}return r.a(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=a.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):Object(u.a)(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;Object(u.a)(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};a.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),a.a.useDeprecatedSynchronousErrorHandling)throw t;Object(u.a)(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!a.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return a.a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(Object(u.a)(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(p)},function(t,e,n){"use strict";var r=n(0),i=n(17),o=n(15),s=n(62),c=n(35),a=n(54);function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Object(a.a)(1)(c.a.apply(void 0,t))}var p=n(39);var f=n(42),l=n(60);n.d(e,"d",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"b",function(){return _}),n.d(e,"e",function(){return b}),n.d(e,"a",function(){return y});const h=new i.a,d=h.pipe(Object(o.a)(t=>t.scene),Object(s.a)((t,e)=>t.concat(e),[])).pipe(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return Object(p.a)(n)?(t.pop(),function(e){return u(t,e,n)}):function(e){return u(t,e)}}([]),Object(f.a)(1)),b=d.pipe(Object(o.a)(t=>t.length>=1?t[t.length-1]:null),Object(l.a)(t=>null!==t&&t!==r.h.EIXT),Object(f.a)(1)),_=new i.a,y=new i.a},function(t,e,n){"use strict";n.d(e,"c",function(){return l}),n.d(e,"b",function(){return _}),n.d(e,"d",function(){return d});var r=n(6);n.d(e,"a",function(){return r.b});var i=n(4),o=n(17),s=n(116),c=n(121),a=n(63),u=n(117),p=n(60),f=n(15);const l=new o.a,h=l.pipe(Object(s.a)(1e4)),d=new o.a,b=h.pipe(Object(c.a)(r.b,d)),_=new o.a;_.pipe(Object(a.a)(t=>JSON.stringify(t)),Object(u.a)(b),Object(p.a)(t=>t.length>0),Object(f.a)(t=>t.map(t=>(t.event_happen_before_seconds=Math.floor((Date.now()-t.event_happen_before_seconds)/1e3),t))),Object(f.a)(t=>({reportList:t}))).subscribe(i.a)},function(t,e,n){"use strict";var r=n(17),i=n(1),o=n(12),s=n(11);function c(t){return function(e){return e.lift(new a(t))}}var a=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new u(t),r=Object(s.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n},t}(),u=function(t){function e(e){var n=t.call(this,e)||this;return n.seenValue=!1,n}return i.a(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(o.a),p=n(5);function f(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}f.prototype=Object.create(Error.prototype);var l=f,h=n(49);function d(t){return function(e){return 0===t?Object(h.a)():e.lift(new b(t))}}var b=function(){function t(t){if(this.total=t,this.total<0)throw new l}return t.prototype.call=function(t,e){return e.subscribe(new _(t,this.total))},t}(),_=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return i.a(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(p.a);function y(t){for(let e in t)if("noRender"===e)for(let n in t[e]){t[e][n].pipe(c(this.destroy$)).subscribe(t=>{this[n]=t})}else{t[e].pipe(c(this.destroy$)).subscribe(t=>{this.setData({[e]:t})})}}function m(){this.destroy$.next(),this.destroy$=null}function v(t){return t.pipe(c(this.destroy$))}n.d(e,"a",function(){return E}),n.d(e,"b",function(){return S});const E=t=>{Component({...t,attached(...e){this.destroy$=(new r.a).pipe(d(1)),"function"==typeof t.getSubscriptions&&y.call(this,t.getSubscriptions()),this.autoUnsubscribe=v.bind(this),t.attached&&t.attached.call(this,...e)},detached(...e){m.call(this),t.detached&&t.detached.call(this,...e)}})},S=t=>{Page({...t,onLoad(...e){this.destroy$=(new r.a).pipe(d(1)),"function"==typeof t.getSubscriptions&&y.call(this,t.getSubscriptions()),this.autoUnsubscribe=v.bind(this),t.onLoad&&t.onLoad.call(this,...e)},onUnload(...e){m.call(this),t.onUnload&&t.onUnload.call(this,...e)}})}},function(t,e,n){"use strict";var r=n(20),i=n(2),o=n(7),s=n(6),c=n(18);const a=(t="",e="")=>t.replace(/(\.html)*\??$/g,"")+"?"+e.replace(/^\?/,"");var u=n(51);const p=(t=[])=>{const e=t.map(t=>({contentText:t.content_desc,contentImg:t.content_image,appLogo:t.app_icon_url,appName:t.app_nick_name,recommendReason:t.recommend_reason,recommendId:t.recommend_id,appid:t.appid,card_type:t.card_type,pagePath:a(t.page_path,t.page_param),formatedRecommendId:Object(u.a)(t.recommend_id),dynamic_info:t.dynamic_info,deleted:t.deleted||!1,content_image_list:t.dynamic_info&&t.dynamic_info.item_list&&t.dynamic_info.item_list.map(t=>t.shot_img_url)||[],recommend_reason_type:t.recommend_reason_type,social_like_info:t.social_like_info}));return e.uiexperiment=t.uiexperiment,e.user_nick_name=t.user_nick_name,e.recommend_feature=t.recommend_feature,e};var f=n(0),l=n(4),h=n(17),d=n(35),b=n(49),_=n(57),y=n(123),m=n(15),v=n(48);var E=n(61),S=n(62),x=n(119),O=n(120),g=n(64),w=n(60),I=n(63),j=n(122),C=n(58),T=n(54),N=n(28);n.d(e,"b",function(){return D}),n.d(e,"c",function(){return W}),n.d(e,"f",function(){return P}),n.d(e,"a",function(){return H}),n.d(e,"e",function(){return F}),n.d(e,"g",function(){return o.c}),n.d(e,"d",function(){return o.a}),n.d(e,"h",function(){return i.i}),n.d(e,"i",function(){return o.d});const L=t=>{return{1:f.g.FEED_SMALL,3:f.g.FEED_BIG,5:f.g.FEED_SMALL}[t]};let A,H;const P=new h.a,F=new h.a,D=()=>{const t=new h.a,e=t.pipe(Object(_.a)(({fetchType:t,page_num:e})=>{switch(t){case"get":return r.a.getHomeFeedsList();case"refill":return Object(d.a)(0).pipe(Object(y.a)(n,(t,n)=>r.a.refillHomeFeedsList({page_num:e,session_id:n}).pipe(Object(m.a)(t=>(t.refill=!0,t)))),Object(_.a)(v.a))}}),Object(E.a)(t=>(A=t,t)),Object(S.a)((t,e)=>e.fail||!(e.weuse_feeds_list&&e.weuse_feeds_list.length>0)?t:e),Object(x.a)(1)),n=e.pipe(Object(O.a)("session_id"),Object(x.a)(1)),u=new h.a;e.pipe(Object(m.a)(t=>{const e=t.weuse_feeds_list||[];return e.uiexperiment=t.recommend_ui,e.user_nick_name=t.user_nick_name,e.recommend_feature=t.recommend_feature,e.refill=t.refill,e.wxCacheExpires=t.wxCacheExpires,e}),Object(E.a)(t=>{t.length}),Object(S.a)((t,e)=>{if(!e.refill&&void 0!==t.wxCacheExpires&&void 0===e.wxCacheExpires)return e;const n=e.filter(e=>!t.some(t=>t.recommend_id===e.recommend_id)),r=t.concat(n);return r.uiexperiment=e.uiexperiment,r.user_nick_name=e.user_nick_name,r.recommend_feature=e.recommend_feature,r.wxCacheExpires=e.wxCacheExpires,r}),Object(x.a)(1)).subscribe(u);const D=u.pipe(Object(m.a)(p),Object(E.a)(t=>{const e={1:f.i.uiVersion1,2:f.i.uiVersion2};t.uiexperiment in e?l.c.next(e[t.uiexperiment]):l.c.next(f.i.uiVersionUnknow)})),W=Object(c.b)();(H=(new h.a).pipe(Object(g.a)(u,({index:t,hotListItem:e},n)=>{if(e)return{card:e};return{card:n[t]}}),Object(w.a)(({card:t})=>!!t),Object(x.a)(1))).pipe(Object(m.a)(t=>t.card)).pipe(Object(g.a)(i.c,(t,e)=>{const{appid:n,page_path:r,page_param:i,recommend_id:o,strategy_info:s,app_user_name:c,app_icon_url:u,app_nick_name:p,path:f}=t;return{appId:n,path:f||a(r,i),scene:1143,sceneNote:[c,e,s,o].join(";"),app_icon_url:u,app_user_name:c,app_nick_name:p}})).subscribe(W),P.pipe(Object(g.a)(u,i.c,n,({cardIndex:t,eventId:e,event_type:n,action_type:r,action_pos:i,video_play_time:o,entry_scene:s,card_stay_time:c,duration_time:a,hotListItem:u},p,l,h)=>{const d=u||(p[t]||{}),{page_path:b,page_param:_,recommend_id:y,card_type:m,app_user_name:v,content_desc:E,pass_str:S,recommend_reason_type:x}=d,O={session_id:h,client_session_id:l,entry_scene:s||f.f.TIMELINE_FEEDS_LIST,event_id:e||f.j.EXPOSURE,event_type:n||L(m),event_pos:t,event_happen_before_seconds:Date.now(),username:v,page_path:b,page_query:_,content_title:E,recommend_id:y,pass_str:S,action_type:r,action_pos:i,video_play_time:o,card_stay_time:c,card_type:m,card_exp_type:x,duration_time:a};return console.log("info上报",O),O})).subscribe(o.b),F.pipe(Object(I.a)(t=>`${t.intersectionObserveTime}-${t.formatedRecommendId}`)).subscribe(P);const R=new h.a;R.pipe(Object(I.a)(t=>`${t.intersectionObserveTime}-${t.formatedRecommendId}-${t.action_pos}`)).subscribe(P);const M=new h.a,U=M.pipe(Object(g.a)(u,({cardIndex:t},e)=>{return{appUsername:e[t].app_user_name}}),Object(j.a)(t=>{const{appUsername:e}=t;return N.a.openMiniProgramProfile({username:e,scene:7}).pipe(Object(C.a)(t=>Object(d.a)({fail:!0,err:t})))})),k=(new h.a).pipe(Object(g.a)(u,({operateType:t,cardIndex:e,...n},r)=>{const i=r[e];return 0===t?(P.next({eventId:f.j.CLICK,cardIndex:e,action_type:f.a.CLICK_DISLIKE}),i&&(i.deleted=!0),Object(d.a)(0)):1===t?(wx.openUrl({url:`https://mp.weixin.qq.com/mp/wacomplain?action=show&appid=${i.appid}#wechat_redirect`,isNativeStyle:!0,fail(t){console.log("打开投诉页失败",t)}}),P.next({eventId:f.j.CLICK,cardIndex:e,action_type:f.a.CLICK_COMPLAIN}),Object(b.a)()):2===t?(Object.assign(i,n),P.next({eventId:f.j.CLICK,cardIndex:e,action_type:i.dynamic_info.has_like?f.a.CLICK_LIKE:f.a.CANCEL_LIKE,entry_scene:i.entry_scene}),Object(d.a)(0)):void 0}),Object(T.a)()),G=(new h.a).pipe(Object(g.a)(e,(t,e)=>{console.log("updateStorage",e),wx.setStorage({key:`[cache]${JSON.stringify({apiName:f.b.WxaHomeGetFeedsList})}`,data:e})}));return k.subscribe(G),G.subscribe(),U.subscribe(t=>{t.fail?console.log(`超时或失败：${JSON.stringify(t)}`):s.d.next({scene:f.h.MINI_APP_PROFILE})},t=>{console.log("feedlist失败,导致openMiniProgramProfile失败",t)}),W.subscribe(t=>{t.fail?console.log(`超时或失败：${JSON.stringify(t)}`):s.d.next({scene:f.h.MINI_APP})},t=>{console.log("feedlist失败,导致navigateToMiniProgram失败",t)}),{feedsListForRender$:D,fetchFeedsList$:t,clickFeedItem$:H,clickMiniProgramProfileLink$:M,reportMiniAppFromFeedsList$:P,reportExposureMiniAppFromFeedsList$:F,cardOperate$:k,reportExposureLinkCardFromFeedsList$:R,feedsList$:u,getLastFetchFeedRes:()=>A}};function W(){return A}},function(t,e,n){"use strict";var r=n(5);var i=n(33),o=n(41);var s=n(26),c=n(25);function a(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:c.a}var u=n(22);n.d(e,"a",function(){return p});var p=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var s=this.operator,c=function(t,e,n){if(t){if(t instanceof r.a)return t;if(t[i.a])return t[i.a]()}return t||e||n?new r.a(t,e,n):new r.a(o.a)}(t,e,n);if(s?c.add(s.call(c,this.source)):c.add(this.source||u.a.useDeprecatedSynchronousErrorHandling&&!c.syncErrorThrowable?this._subscribe(c):this._trySubscribe(c)),u.a.useDeprecatedSynchronousErrorHandling&&c.syncErrorThrowable&&(c.syncErrorThrowable=!1,c.syncErrorThrown))throw c.syncErrorValue;return c},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,i=e.destination,o=e.isStopped;if(n||o)return!1;t=i&&i instanceof r.a?i:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=f(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[s.a]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:a(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=f(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function f(t){if(t||(t=u.a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(27),i=n(53),o=n(10);function s(t,e,n,s,c){if(void 0===c&&(c=new r.a(t,n,s)),!c.closed)return e instanceof o.a?e.subscribe(c):Object(i.a)(e)(c)}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.a(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(n(5).a)},,function(t,e,n){"use strict";var r=n(36),i=n(43),o=n(34);function s(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}s.prototype=Object.create(Error.prototype);var c=s;n.d(e,"a",function(){return a});var a=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,s=this._unsubscribe,a=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var p=0;p<n.length;++p){n[p].remove(this)}if(Object(o.a)(s))try{s.call(this)}catch(t){e=t instanceof c?u(t.errors):[t]}if(Object(r.a)(a)){p=-1;for(var f=a.length;++p<f;){var l=a[p];if(Object(i.a)(l))try{l.unsubscribe()}catch(t){e=e||[],t instanceof c?e=e.concat(u(t.errors)):e.push(t)}}}if(e)throw new c(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=((e=new t).closed=!0,e),t}();function u(t){return t.reduce(function(t,e){return t.concat(e instanceof c?e.errors:e)},[])}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),i=n(5);function o(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.project,this.thisArg))},t}(),c=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return r.a(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";var r=n(2),i=n(6),o=n(4),s=n(17),c=n(1),a=n(29),u=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return c.a(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return n&&!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new a.a;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(s.a),p=n(64),f=n(5);var l=function(){function t(t,e){this.bufferSize=t,this.startBufferEvery=e,this.subscriberClass=e&&t!==e?d:h}return t.prototype.call=function(t,e){return e.subscribe(new this.subscriberClass(t,this.bufferSize,this.startBufferEvery))},t}(),h=function(t){function e(e,n){var r=t.call(this,e)||this;return r.bufferSize=n,r.buffer=[],r}return c.a(e,t),e.prototype._next=function(t){var e=this.buffer;e.push(t),e.length==this.bufferSize&&(this.destination.next(e),this.buffer=[])},e.prototype._complete=function(){var e=this.buffer;e.length>0&&this.destination.next(e),t.prototype._complete.call(this)},e}(f.a),d=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.bufferSize=n,i.startBufferEvery=r,i.buffers=[],i.count=0,i}return c.a(e,t),e.prototype._next=function(t){var e=this.bufferSize,n=this.startBufferEvery,r=this.buffers,i=this.count;this.count++,i%n==0&&r.push([]);for(var o=r.length;o--;){var s=r[o];s.push(t),s.length===e&&(r.splice(o,1),this.destination.next(s))}},e.prototype._complete=function(){for(var e=this.buffers,n=this.destination;e.length>0;){var r=e.shift();r.length>0&&n.next(r)}t.prototype._complete.call(this)},e}(f.a),b=n(15),_=n(0);n.d(e,"b",function(){return y}),n.d(e,"c",function(){return E}),n.d(e,"a",function(){return S});const y=new s.a;var m,v;y.pipe(Object(p.a)(r.c,i.e,({eventId:t,params:e},n,r)=>{return{session_id:n,client_session_id:n,event_id:t||_.j.EXPOSURE,pre_scene:r,params:e}}),(m=1,void 0===v&&(v=null),function(t){return t.lift(new l(m,v))}),Object(b.a)(t=>({exitMainReportList:t}))).subscribe(o.a);const E=new u(0),S=new s.a},function(t,e,n){"use strict";n.d(e,"b",function(){return p}),n.d(e,"a",function(){return f});var r=n(1),i=n(10),o=n(5),s=n(14),c=n(29),a=n(44),u=n(33),p=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return r.a(e,t),e}(o.a),f=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r.a(e,t),e.prototype[u.a]=function(){return new p(this)},e.prototype.lift=function(t){var e=new l(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new c.a;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new c.a;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),i=0;i<n;i++)r[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new c.a;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new c.a;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new c.a;return this.hasError?(t.error(this.thrownError),s.a.EMPTY):this.isStopped?(t.complete(),s.a.EMPTY):(this.observers.push(t),new a.a(this,t))},e.prototype.asObservable=function(){var t=new i.a;return t.source=this,t},e.create=function(t,e){return new l(t,e)},e}(i.a),l=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return r.a(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.a.EMPTY},e}(f)},function(t,e,n){"use strict";var r=n(28),i=n(122),o=n(37);function s(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}s.prototype=Object.create(Error.prototype);var c=s,a=n(1);var u=n(12),p=n(11);function f(t,e,n){return void 0===n&&(n=o.a),function(r){var i,o=(i=t)instanceof Date&&!isNaN(+i),s=o?+t-n.now():Math.abs(t);return r.lift(new l(s,o,e,n))}}var l=function(){function t(t,e,n,r){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=n,this.scheduler=r}return t.prototype.call=function(t,e){return e.subscribe(new h(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))},t}(),h=function(t){function e(e,n,r,i,o){var s=t.call(this,e)||this;return s.absoluteTimeout=n,s.waitFor=r,s.withObservable=i,s.scheduler=o,s.action=null,s.scheduleTimeout(),s}return a.a(e,t),e.dispatchTimeout=function(t){var e=t.withObservable;t._unsubscribeAndRecycle(),t.add(Object(p.a)(t,e))},e.prototype.scheduleTimeout=function(){var t=this.action;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(e.dispatchTimeout,this.waitFor,this))},e.prototype._next=function(e){this.absoluteTimeout||this.scheduleTimeout(),t.prototype._next.call(this,e)},e.prototype._unsubscribe=function(){this.action=null,this.scheduler=null,this.withObservable=null},e}(u.a),d=n(50);var b=n(58),_=n(119),y=n(17),m=n(35);let v=null;n.d(e,"b",function(){return S}),n.d(e,"c",function(){return x}),n.d(e,"e",function(){return O}),n.d(e,"a",function(){return g}),n.d(e,"d",function(){return w});const E=t=>(new y.a).pipe(Object(i.a)(e=>r.a[t](e).pipe(function(t,e){return void 0===e&&(e=o.a),f(t,Object(d.a)(new c),e)}(7e3),Object(b.a)(t=>Object(m.a)({fail:!0,err:t})))),Object(_.a)(1)),S=()=>{const t=(v||(v=wx.getSystemInfoSync()),v).platform;return E("android"===t?"launchMiniProgram":"navigateToMiniProgramDirectly")},x=()=>E("openMiniProgramHistoryList"),O=()=>E("openMiniProgramStarList"),g=()=>E("navigateTo"),w=()=>E("openMiniProgramSearch")},,function(t,e,n){"use strict";var r=n(2),i=n(4),o=n(0);Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random();var s=n(10),c=n(61);class a{constructor(){}}class u extends a{constructor(t,e){super(),this.fail=!0,this.requestErrorMsg=t;for(let t in e)this[t]=e[t]}}const p=(t={})=>{const e=t.apiName!==o.b.WxaHomeOssReport;return s.a.create(n=>{setTimeout(()=>{const r=Date.now();if(console.log(`${t.apiName}开始cgi`),e){i.c.next(o.i.request);const e=Object(o.k)(t.apiName,o.d.START),n=o.i[e];n&&i.c.next(n)}wx.operateWXData({...t,success(o){const s=Date.now()-r;try{if("operateWXData:ok"===o.errMsg)if(o.rawData){const r=JSON.parse(o.rawData);r.base_resp&&r.base_resp.err_code>=0?(console.log(t.apiName+"成功",r),n.next(r),n.complete(),e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!1,resData:r})):(e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!0}),n.error(new u(`${t.apiName}请求成功，但是服务器不能正常处理请求`,o)))}else e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!0}),n.error(new u(`${t.apiName}请求成功，但是没有rawData`,o));else e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!0}),n.error(new u(`${t.apiName}请求成功，但服务器处理失败`,o))}catch(r){e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!0}),n.error(new u(`${t.apiName}请求成功，但JSON.parse时出错`,r))}},fail(o){console.log(`${t.apiName}请求失败`,o);const s=Date.now()-r;e&&i.b.next({apiName:t.apiName,cgiTimeCost:s,fail:!0}),n.error(new u(`${t.apiName}请求失败`,o))}})},0)}).pipe(Object(c.a)(t=>{r.h.next(t)}))},f=(t={},{useCache:e=!1,cacheSeconds:n=0,cacheKey:c}={})=>s.a.create(s=>{setTimeout(()=>{const a=Date.now();console.log(`${t.apiName} 开始查找缓存`);const f=`[cache]${JSON.stringify({apiName:t.apiName,...c})}`;wx.getStorage({key:f,complete(c){console.log(`${t.apiName}读取本地存储耗时`,Date.now()-a);const l=c.data;if(l&&(console.log(`${t.apiName}使用缓存`,l),r.b.next(l),i.c.next(o.i.cache),s.next(l)),l&&l.wxCacheExpires>Date.now()&&!0===e)return console.log(`${t.apiName}使用缓存且不在请求cgi`,l),void s.complete();t.reqData$?t.reqData$.subscribe(e=>{p({apiName:t.apiName,reqData:e}).subscribe(t=>{if(s.next(t),s.complete(),t.cache_seconds&&t.cache_seconds>0||n>0){n=t.cache_seconds||n;const e=Object.assign({},t);e.wxCacheExpires=Date.now()+1e3*n,wx.setStorage({key:f,data:e})}},e=>{s.error(new u(`${t.apiName} (缓存失效或没有缓存)时重新请求出错(含reqData$)`,e))})},e=>{s.error(new u(`${t.apiName} reqData$失败`,e))}):(console.log(`${t.apiName}发起网络请求`),p(t).subscribe(t=>{if(s.next(t),s.complete(),t.cache_seconds&&t.cache_seconds>0||n>0){n=t.cache_seconds||n;const e=Object.assign({},t);e.wxCacheExpires=Date.now()+1e3*n,wx.setStorage({key:f,data:e})}},e=>{s.error(new u(`${t.apiName} (缓存失效或没有缓存)时重新请求出错`,e))}))}})},0)});var l=p,h=n(6);const d=(t,e)=>{return t.reduce((t,n)=>(n===e&&t++,t),0)};var b=n(123),_=n(57),y=n(118),m=n(58),v=n(35),E=n(50);const S={getHomeFeedsList:()=>Object(v.a)(0).pipe(Object(b.a)(h.c,(t,e)=>{return d(e,o.h.EIXT)>=1}),Object(_.a)(t=>f({apiName:o.b.WxaHomeGetFeedsList,reqData:{data_type:5,page_num:1}},{useCache:t}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeGetFeedsList,finallyFail:!0}),Object(v.a)(t)))))),refillHomeFeedsList:({page_num:t,session_id:e})=>Object(v.a)(0).pipe(Object(_.a)(()=>l({apiName:o.b.WxaHomeGetFeedsList,reqData:{data_type:4,page_num:t,session_id:e}}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeGetFeedsList,finallyFail:!0}),Object(v.a)(t)))))),getCommonUseAppList:()=>Object(v.a)(0).pipe(Object(b.a)(r.f,h.c,(t,e,n)=>{return{useCache:d(n,o.h.EIXT)>=1,networkType:e}}),Object(_.a)(({useCache:t,networkType:e})=>f({apiName:o.b.WxaHomeGetCommonUseAppList,reqData:{net_type:e}},{useCache:t,cacheSeconds:18e5}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeGetCommonUseAppList,finallyFail:!0}),Object(v.a)(t)))))),getNearbyInfo:({longitude:t,latitude:e})=>l({apiName:o.b.WxaHomeGetNearbyInfo,reqData:{location_x:t,location_y:e}}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeGetNearbyInfo,finallyFail:!0}),Object(E.a)(t)))),getFriendsUseAppList:({category_type:t})=>Object(v.a)(0).pipe(Object(b.a)(r.f,h.c,r.d,(e,n,r,i)=>{let s;return 2===t?s=d(r,o.h.FRIENDS_USE)>1:1===t&&(s=d(r,o.h.FRIENDS_USE_ALL)>1),{useCache:s,networkType:n,location:i}}),Object(_.a)(({useCache:e,networkType:n,location:r})=>f({apiName:o.b.WxaHomeGetWeUseAppList,reqData:{net_type:n,category_type:t,data_type:2,longitude:r.longitude,latitude:r.latitude}},{useCache:e,cacheKey:{category_type:t}}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeGetWeUseAppList,finallyFail:!0}),Object(v.a)(t)))))),reportIDKeyList:(t=[])=>l({apiName:o.b.WxaHomeOssReport,reqData:{idkey_list:t}}).pipe(Object(y.a)(1)),reportCommonAction:({reportList:t,exitMainReportList:e})=>Object(v.a)(0).pipe(Object(b.a)(r.f,(t,e)=>e),Object(_.a)(n=>l({apiName:o.b.WxaHomeCommReport,reqData:{net_type:n,report_list:t,exit_main_report_list:e}}).pipe(Object(y.a)(1),Object(m.a)(t=>(i.b.next({apiName:o.b.WxaHomeCommReport,finallyFail:!0}),Object(E.a)(t))))))};e.a=S},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(51);const i=(t,e)=>{return t.map(t=>({appLogo:t.app_icon_url,appName:t.app_nick_name,appDesc:t.content_desc,appid:t.appid,recommendReason:t.recommend_reason,formatedAppId:"listIndex-"+e+"-"+Object(r.a)(t.appid),score:t.account_info&&t.account_info.app_score,category:t.account_info&&t.account_info.category_name_list&&t.account_info.category_name_list[0],referMsgType:t.refer_msg_type,referMsg:t.refer_msg,category_name_list:t.account_info&&t.account_info.category_name_list,hidden:t.hidden}))}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=!1,i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},function(t,e,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(e,"a",function(){return i});var i=r()},function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a});var r=n(17),i=n(15),o=n(62),s=n(60);const c=()=>{const t=(new r.a).pipe(Object(i.a)(t=>({operation:t,timeStamp:Date.now(),duration:0})),Object(o.a)((t,e)=>{if(t&&"end"===t.operation)return e;switch(e.operation){case"start":return{...e,duration:0};case"pause":return"start"===t.operation||"resume"===t.operation?{...e,duration:t.duration+(e.timeStamp-t.timeStamp)}:t;case"end":return"start"===t.operation||"resume"===t.operation?{...e,duration:t.duration+(e.timeStamp-t.timeStamp)}:"pause"===t.operation?{...e,duration:t.duration}:t;case"resume":return"pause"===t.operation?{...e,duration:t.duration}:t}}));return t.on=e=>t.pipe(Object(s.a)(t=>t.operation===e)),t};function a(t){function e(t){return(1==String(t).length?"0":"")+t}var n=parseInt((new Date).getTime()/1e3),r=new Date(1e3*n),i=new Date(1e3*t),o=i.getFullYear(),s=i.getMonth()+1,c=i.getDate(),a=i.getHours(),u=i.getMinutes();i.getSeconds();if(r.getFullYear()==o&&r.getMonth()+1==s&&r.getDate()==c)return"今天 "+e(a)+":"+e(u);var p=new Date(1e3*(n-86400));return p.getFullYear()==o&&p.getMonth()+1==s&&p.getDate()==c?"昨天 "+e(a)+":"+e(u):r.getFullYear()==o?e(s)+"月"+e(c)+"日 "+e(a)+":"+e(u):o+"年"+e(s)+"月"+e(c)+"日 "+e(a)+":"+e(u)}},function(t,e,n){"use strict";function r(){}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol&&Symbol.observable||"@@observable"},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),i=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return r.a(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(n(5).a)},function(t,e,n){"use strict";var r=n(17),i=n(10);let o={Rx:{},fromEvent(t,e){var n=new r.a;return t[e]=function(t){n.next(t)},n}};const s=(t,e,n)=>i.a.create(n=>{if("object"==typeof t||void 0===t){let r=Object.assign({},t),i=new Promise((t,e)=>{r.success=(...e)=>{t(...e)},r.fail=t=>e(t)}),o=e.call(null,r)||{};i.then(t=>{n.next(Object.assign(o,t)),n.complete()},t=>{n.error(t,o),n.complete()})}else n.next(e.call(null,t))});for(let t in wx)switch(typeof wx[t]){case"object":o[t]=Object.assign(wx[t]);break;case"function":/Sync$/.test(t)?o[t]=(...e)=>i.a.of(wx[t].call(null,...e)):o[t]=e=>s(e,wx[t]);break;default:o[t]=wx[t]}e.a=o},function(t,e,n){"use strict";function r(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}n.d(e,"a",function(){return i}),r.prototype=Object.create(Error.prototype);var i=r},function(t,e,n){"use strict";function r(t){setTimeout(function(){throw t},0)}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(10),i=n(46),o=n(38);function s(t,e){return e?Object(o.a)(t,e):new r.a(Object(i.a)(t))}},function(t,e){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";t.exports=n(1).behavior},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(2),o=n(3),s=[String,Number,Boolean,Object,Array,null],c=["",0,!1,null,[],null],a=function(t,e){var n=t;return e.forEach(function(t){n="object"!==(void 0===n?"undefined":r(n))||null===n?void 0:n[t]}),n};e.behavior=Behavior({lifetimes:{created:function(){this._initComputedWatchInfo()}},definitionFilter:function(t){var e=t.computed||{},n=t.watch||{},u=[];if(t.methods||(t.methods={}),t.data||(t.data={}),t.methods._initComputedWatchInfo)throw new Error("Please do not use this behavior more than once in a single component");var p=[];t.methods._initComputedWatchInfo=function(){var t=this;this._computedWatchInfo||(this._computedWatchInfo={computedRelatedPathValues:{},watchCurVal:{}},p.forEach(function(e){return e.call(t)}))};var f,l=[];(Object.keys(e).forEach(function(n){var u,f,h,d=i.parseSingleDataPath(n),b=e[n],_=[],y=(u=t.data,f=t.properties,h={},Object.keys(u).forEach(function(t){h[t]=u[t]}),f&&Object.keys(f).forEach(function(t){var e=null,n=f[t],r=s.indexOf(n);if(r>=0)e=c[r];else if(n.value)e=n.value;else{var i=s.indexOf(n.type);i>=0&&(e=c[i])}h[t]=e}),h),m=b(o.create(y,_));!function(t,e,n){for(var i=t,o=0;o<e.length-1;){var s=e[o++];"number"==typeof s?i[s]instanceof Array||(i[s]=[]):"object"===r(i[s])&&null!==i[s]||(i[s]={}),i=i[s]}i[e[o]]=n}(t.data,d,m),p.push(function(){var t=this,e=_.map(function(e){var n=e.path;return{path:n,value:a(t.data,n)}});this._computedWatchInfo.computedRelatedPathValues[n]=e}),l.push(function(){for(var t,e=this._computedWatchInfo.computedRelatedPathValues[n],r=!1,i=0;i<e.length;i++){var s=e[i],c=s.path;if(s.value!==a(this.data,c)){r=!0;break}}if(!r)return!1;var u=[],p=b(o.create(this.data,u));return this.setData(((t={})[n]=p,t)),this._computedWatchInfo.computedRelatedPathValues[n]=u,!0})}),l.length&&u.push({fields:"**",observer:function(){var t=this;if(this._computedWatchInfo){var e=void 0;do{e=!1,l.forEach(function(n){n.call(t)&&(e=!0)})}while(e)}}}),Object.keys(n).forEach(function(t){var e=i.parseMultiDataPaths(t);p.push(function(){var n=this,r=e.map(function(t){return a(n.data,t)});this._computedWatchInfo.watchCurVal[t]=r}),u.push({fields:t,observer:function(){var r=this;if(this._computedWatchInfo){var i=this._computedWatchInfo.watchCurVal[t],o=e.map(function(t){return a(r.data,t)});this._computedWatchInfo.watchCurVal[t]=o;for(var s=!1,c=0;c<o.length;c++)if(i[c]!==o[c]){s=!0;break}s&&n[t].apply(this,o)}}})}),"object"!==r(t.observers)&&(t.observers={}),t.observers instanceof Array)?(f=t.observers).push.apply(f,u):u.forEach(function(e){t.observers[e.fields]=e.observer})}})},function(t,e,n){"use strict";var r=/^\s/,i=function(t,e){throw new Error('Parsing data path "'+t+'" failed at char "'+t[e]+'" (index '+e+")")},o=function(t,e){for(var n=e.index;e.index<e.length;){var r=t[e.index];if(!/^[0-9]/.test(r))break;e.index++}return n===e.index&&i(t,e.index),parseInt(t.slice(n,e.index),10)},s=function(t,e){var n=e.index,r=t[n];if(/^[_a-zA-Z$]/.test(r))for(e.index++;e.index<e.length;){var o=t[e.index];if(!/^[_a-zA-Z0-9$]/.test(o))break;e.index++}else i(t,e.index);return t.slice(n,e.index)},c=function(t,e){for(var n=[s(t,e)];e.index<e.length;){var r=t[e.index];if("["===r){e.index++,n.push(o(t,e)),"]"!==t[e.index]&&i(t,e.index),e.index++}else{if("."!==r)break;e.index++,n.push(s(t,e))}}return n},a=function(t,e){e.index<e.length&&i(t,e.index)};e.parseSingleDataPath=function(t){var e={length:t.length,index:0},n=c(t,e);return a(t,e),n},e.parseMultiDataPaths=function(t){var e={length:t.length,index:0},n=function(t,e){for(;r.test(t[e.index]);)e.index++;for(var n=[c(t,e)],i=!1;e.index<e.length;){var o=t[e.index];r.test(o)?e.index++:","===o?(i=!0,e.index++):i&&(i=!1,n.push(c(t,e)))}return n}(t,e);return a(t,e),n}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.create=function(t,e){return function t(e,n,i){if("object"!==(void 0===e?"undefined":r(e))||null===e)return e;var o=e instanceof Array,s={};Object.keys(e).forEach(function(r){var o=null;s[r]={get:function(){if(!o){var s=i.concat(r);n.push({path:s,value:e[r]}),o=t(e[r],n,s)}return o},set:function(){throw new Error("Setting data is not allowed")}}}),o&&(s.length={value:e.length});var c=o?Array.prototype:Object.prototype;return Object.create(c,s)}(t,e,[])}}])},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(39),i=n(31),o=n(38);function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return Object(r.a)(n)?(t.pop(),Object(o.a)(t,n)):Object(i.a)(t)}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(56),i=new(n(55).a)(r.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(10),i=n(14);function o(t,e){return new r.a(function(n){var r=new i.a,o=0;return r.add(e.schedule(function(){o!==t.length?(n.next(t[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}},function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";var r=n(10),i=n(53),o=n(14),s=n(26);var c=n(38),a=n(23);var u=n(47),p=n(45);function f(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[s.a]}(t))return function(t,e){return new r.a(function(n){var r=new o.a;return r.add(e.schedule(function(){var i=t[s.a]();r.add(i.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r})}(t,e);if(Object(u.a)(t))return function(t,e){return new r.a(function(n){var r=new o.a;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r})}(t,e);if(Object(p.a)(t))return Object(c.a)(t,e);if(function(t){return t&&"function"==typeof t[a.a]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new r.a(function(n){var r,i=new o.a;return i.add(function(){r&&"function"==typeof r.return&&r.return()}),i.add(e.schedule(function(){r=t[a.a](),i.add(e.schedule(function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),i})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function l(t,e){return e?f(t,e):t instanceof r.a?t:new r.a(Object(i.a)(t))}n.d(e,"a",function(){return l})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(22),i=n(30),o={closed:!0,next:function(t){},error:function(t){if(r.a.useDeprecatedSynchronousErrorHandling)throw t;Object(i.a)(t)},complete:function(){}}},function(t,e,n){"use strict";var r=n(52),i=n(1),o=n(17),s=n(10),c=n(5),a=n(14);var u=function(){function t(t){this.connectable=t}return t.prototype.call=function(t,e){var n=this.connectable;n._refCount++;var r=new p(t,n),i=e.subscribe(r);return r.closed||(r.connection=n.connect()),i},t}(),p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return i.a(e,t),e.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._refCount;if(e<=0)this.connection=null;else if(t._refCount=e-1,e>1)this.connection=null;else{var n=this.connection,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},e}(c.a),f=function(t){function e(e,n){var r=t.call(this)||this;return r.source=e,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return i.a(e,t),e.prototype._subscribe=function(t){return this.getSubject().subscribe(t)},e.prototype.getSubject=function(){var t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject},e.prototype.connect=function(){var t=this._connection;return t||(this._isComplete=!1,(t=this._connection=new a.a).add(this.source.subscribe(new h(this.getSubject(),this))),t.closed&&(this._connection=null,t=a.a.EMPTY)),t},e.prototype.refCount=function(){return(t=this).lift(new u(t));var t},e}(s.a).prototype,l={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:f._subscribe},_isComplete:{value:f._isComplete,writable:!0},getSubject:{value:f.getSubject},connect:{value:f.connect},refCount:{value:f.refCount}},h=function(t){function e(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return i.a(e,t),e.prototype._error=function(e){this._unsubscribe(),t.prototype._error.call(this,e)},e.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}},e}(o.b);c.a;var d=function(){function t(t,e){this.subjectFactory=t,this.selector=e}return t.prototype.call=function(t,e){var n=this.selector,r=this.subjectFactory(),i=n(r).subscribe(t);return i.add(e.subscribe(r)),i},t}();function b(t,e,n,i){n&&"function"!=typeof n&&(i=n);var o="function"==typeof n?n:void 0,s=new r.a(t,e,i);return function(t){return function(t,e){return function(n){var r;if(r="function"==typeof t?t:function(){return t},"function"==typeof e)return n.lift(new d(r,e));var i=Object.create(n,l);return i.source=n,i.subjectFactory=r,i}}(function(){return s},o)(t)}}n.d(e,"a",function(){return b})},function(t,e,n){"use strict";function r(t){return null!==t&&"object"==typeof t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),i=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return r.a(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(n(14).a)},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}}},function(t,e,n){"use strict";function r(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";function r(t){return t}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(10),i=new r.a(function(t){return t.complete()});function o(t){return t?function(t){return new r.a(function(e){return t.schedule(function(){return e.complete()})})}(t):i}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(10);function i(t,e){return e?new r.a(function(n){return e.schedule(o,0,{error:t,subscriber:n})}):new r.a(function(e){return e.error(t)})}function o(t){var e=t.error;t.subscriber.error(e)}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r=t=>"id"+t.replace(/\./g,"-dot-").replace(/\#/g,"-sign-")},function(t,e,n){"use strict";var r,i=n(1),o=n(17),s=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r}return i.a(e,t),e.prototype.schedule=function(e,n){return void 0===n&&(n=0),n>0?t.prototype.schedule.call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,n){return n>0||this.closed?t.prototype.execute.call(this,e,n):this._execute(e,n)},e.prototype.requestAsyncId=function(e,n,r){return void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0?t.prototype.requestAsyncId.call(this,e,n,r):e.flush(this)},e}(n(56).a),c=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.a(e,t),e}(n(55).a))(s),a=n(14),u=n(5),p=n(49),f=n(35),l=n(50);r||(r={});var h=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){switch(this.kind){case"N":return Object(f.a)(this.value);case"E":return Object(l.a)(this.error);case"C":return Object(p.a)()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();var d=function(t){function e(e,n,r){void 0===r&&(r=0);var i=t.call(this,e)||this;return i.scheduler=n,i.delay=r,i}return i.a(e,t),e.dispatch=function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new b(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(h.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(h.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(h.createComplete()),this.unsubscribe()},e}(u.a),b=function(){return function(t,e){this.notification=t,this.destination=e}}(),_=n(29),y=n(44);n.d(e,"a",function(){return m});var m=function(t){function e(e,n,r){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this)||this;return i.scheduler=r,i._events=[],i._infiniteTimeWindow=!1,i._bufferSize=e<1?1:e,i._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(i._infiniteTimeWindow=!0,i.next=i.nextInfiniteTimeWindow):i.next=i.nextTimeWindow,i}return i.a(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var n=this._events;n.push(e),n.length>this._bufferSize&&n.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new v(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=r.length;if(this.closed)throw new _.a;if(this.isStopped||this.hasError?e=a.a.EMPTY:(this.observers.push(t),e=new y.a(this,t)),i&&t.add(t=new d(t,i)),n)for(var s=0;s<o&&!t.closed;s++)t.next(r[s]);else for(s=0;s<o&&!t.closed;s++)t.next(r[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||c).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,r=this._events,i=r.length,o=0;o<i&&!(t-r[o].time<n);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&r.splice(0,o),r},e}(o.a),v=function(){return function(t,e){this.time=t,this.value=e}}()},function(t,e,n){"use strict";var r=n(46),i=n(30),o=n(23),s=n(26),c=n(45),a=n(47),u=n(43);n.d(e,"a",function(){return p});var p=function(t){if(t&&"function"==typeof t[s.a])return p=t,function(t){var e=p[s.a]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(Object(c.a)(t))return Object(r.a)(t);if(Object(a.a)(t))return n=t,function(t){return n.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,i.a),t};if(t&&"function"==typeof t[o.a])return e=t,function(t){for(var n=e[o.a]();;){var r=n.next();if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add(function(){n.return&&n.return()}),t};var e,n,p,f=Object(u.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+f+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(t,e,n){"use strict";var r=n(1),i=n(11),o=n(12),s=n(27),c=n(15),a=n(40);var u=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new p(t,this.project,this.concurrent))},t}(),p=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return r.a(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new s.a(this,void 0,void 0);this.destination.add(r),Object(i.a)(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(o.a),f=n(48);function l(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(i){return i.pipe(t(function(t,r){return Object(a.a)(e(t,r)).pipe(Object(c.a)(function(e,i){return n(t,e,r,i)}))},r))}:("number"==typeof n&&(r=n),function(t){return t.lift(new u(e,r))})}(f.a,t)}n.d(e,"a",function(){return l})},function(t,e,n){"use strict";var r=n(1),i=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}();n.d(e,"a",function(){return o});var o=function(t){function e(n,r){void 0===r&&(r=i.now);var o=t.call(this,n,function(){return e.delegate&&e.delegate!==o?e.delegate.now():r()})||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return r.a(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(i)},function(t,e,n){"use strict";var r=n(1),i=function(t){function e(e,n){return t.call(this)||this}return r.a(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(n(14).a);n.d(e,"a",function(){return o});var o=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return r.a(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(i)},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(1),i=n(12),o=n(27),s=n(11),c=n(15),a=n(40);function u(t,e){return"function"==typeof e?function(n){return n.pipe(u(function(n,r){return Object(a.a)(t(n,r)).pipe(Object(c.a)(function(t,i){return e(n,t,r,i)}))}))}:function(e){return e.lift(new p(t))}}var p=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new f(t,this.project))},t}(),f=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.index=0,r}return r.a(e,t),e.prototype._next=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new o.a(this,void 0,void 0);this.destination.add(i),this.innerSubscription=Object(s.a)(this,t,e,n,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(1),i=n(12),o=n(27),s=n(11);function c(t){return function(e){var n=new a(t),r=e.lift(n);return n.caught=r}}var a=function(){function t(t){this.selector=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.selector,this.caught))},t}(),u=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.selector=n,i.caught=r,i}return r.a(e,t),e.prototype.error=function(e){if(!this.isStopped){var n=void 0;try{n=this.selector(e,this.caught)}catch(e){return void t.prototype.error.call(this,e)}this._unsubscribeAndRecycle();var r=new o.a(this,void 0,void 0);this.add(r),Object(s.a)(this,n,void 0,void 0,r)}},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(18),i=n(0),o=n(6),s=n(4);const c=Object(r.d)();c.subscribe(t=>{o.d.next({scene:i.h.SEARCH}),t.fail?s.c.next(i.i.openSearchFail):s.c.next(i.i.openSearchSuccess)})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),i=n(5);function o(t,e){return function(n){return n.lift(new s(t,e))}}var s=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.predicate,this.thisArg))},t}(),c=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.predicate=n,i.thisArg=r,i.count=0,i}return r.a(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(1),i=n(5),o=n(25),s=n(34);function c(t,e,n){return function(r){return r.lift(new a(t,e,n))}}var a=function(){function t(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.nextOrObserver,this.error,this.complete))},t}(),u=function(t){function e(e,n,r,i){var c=t.call(this,e)||this;return c._tapNext=o.a,c._tapError=o.a,c._tapComplete=o.a,c._tapError=r||o.a,c._tapComplete=i||o.a,Object(s.a)(n)?(c._context=c,c._tapNext=n):n&&(c._context=n,c._tapNext=n.next||o.a,c._tapError=n.error||o.a,c._tapComplete=n.complete||o.a),c}return r.a(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),i=n(5);function o(t,e){var n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new s(t,e,n))}}var s=function(){function t(t,e,n){void 0===n&&(n=!1),this.accumulator=t,this.seed=e,this.hasSeed=n}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.accumulator,this.seed,this.hasSeed))},t}(),c=function(t){function e(e,n,r,i){var o=t.call(this,e)||this;return o.accumulator=n,o._seed=r,o.hasSeed=i,o.index=0,o}return r.a(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.accumulator(this.seed,t,n)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=n(12),o=n(11);function s(t,e){return function(n){return n.lift(new c(t,e))}}var c=function(){function t(t,e){this.keySelector=t,this.flushes=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.keySelector,this.flushes))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.keySelector=n,i.values=new Set,r&&i.add(Object(o.a)(i,r)),i}return r.a(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.values.clear()},e.prototype.notifyError=function(t,e){this._error(t)},e.prototype._next=function(t){this.keySelector?this._useKeySelector(t):this._finalizeNext(t,t)},e.prototype._useKeySelector=function(t){var e,n=this.destination;try{e=this.keySelector(t)}catch(t){return void n.error(t)}this._finalizeNext(e,t)},e.prototype._finalizeNext=function(t,e){var n=this.values;n.has(t)||(n.add(t),this.destination.next(e))},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=n(12),o=n(11);function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){var n;"function"==typeof t[t.length-1]&&(n=t.pop());var r=t;return e.lift(new c(r,n))}}var c=function(){function t(t,e){this.observables=t,this.project=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.observables,this.project))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;i.observables=n,i.project=r,i.toRespond=[];var s=n.length;i.values=new Array(s);for(var c=0;c<s;c++)i.toRespond.push(c);for(c=0;c<s;c++){var a=n[c];i.add(Object(o.a)(i,a,a,c))}return i}return r.a(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.values[n]=e;var o=this.toRespond;if(o.length>0){var s=o.indexOf(n);-1!==s&&o.splice(s,1)}},e.prototype.notifyComplete=function(){},e.prototype._next=function(t){if(0===this.toRespond.length){var e=[t].concat(this.values);this.project?this._tryProject(e):this.destination.next(e)}},e.prototype._tryProject=function(t){var e;try{e=this.project.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(i.a)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=n(5),o=n(37);function s(t,e){return void 0===e&&(e=o.a),function(n){return n.lift(new c(t,e))}}var c=function(){function t(t,e){this.dueTime=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.dueTime,this.scheduler))},t}(),a=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.dueTime=n,i.scheduler=r,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return r.a(e,t),e.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(u,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}},e.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},e}(i.a);function u(t){t.debouncedNext()}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=n(12),o=n(11);function s(t){return function(e){return e.lift(new c(t))}}var c=function(){function t(t){this.closingNotifier=t}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.closingNotifier))},t}(),a=function(t){function e(e,n){var r=t.call(this,e)||this;return r.buffer=[],r.add(Object(o.a)(r,n)),r}return r.a(e,t),e.prototype._next=function(t){this.buffer.push(t)},e.prototype.notifyNext=function(t,e,n,r,i){var o=this.buffer;this.buffer=[],this.destination.next(o)},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(1),i=n(5);function o(t){return void 0===t&&(t=-1),function(e){return e.lift(new s(t,e))}}var s=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.count,this.source))},t}(),c=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.count=n,i.source=r,i}return r.a(e,t),e.prototype.error=function(e){if(!this.isStopped){var n=this.source,r=this.count;if(0===r)return t.prototype.error.call(this,e);r>-1&&(this.count=r-1),n.subscribe(this._unsubscribeAndRecycle())}},e}(i.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(52);function i(t,e,n){var i;return i=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:n},function(t){return t.lift(function(t){var e,n,i=t.bufferSize,o=void 0===i?Number.POSITIVE_INFINITY:i,s=t.windowTime,c=void 0===s?Number.POSITIVE_INFINITY:s,a=t.refCount,u=t.scheduler,p=0,f=!1,l=!1;return function(t){p++,e&&!f||(f=!1,e=new r.a(o,c,u),n=t.subscribe({next:function(t){e.next(t)},error:function(t){f=!0,e.error(t)},complete:function(){l=!0,e.complete()}}));var i=e.subscribe(this);this.add(function(){p--,i.unsubscribe(),n&&!l&&a&&0===p&&(n.unsubscribe(),n=void 0,e=void 0)})}}(i))}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(15);function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t.length;if(0===n)throw new Error("list of properties cannot be empty.");return function(e){return Object(r.a)(function(t,e){return function(n){for(var r=n,i=0;i<e;i++){var o=r[t[i]];if(void 0===o)return;r=o}return r}}(t,n))(e)}}},function(t,e,n){"use strict";var r=n(10),i=n(39),o=n(54),s=n(31);function c(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return e.lift.call(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,c=null,a=t[t.length-1];return Object(i.a)(a)?(c=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(n=t.pop())):"number"==typeof a&&(n=t.pop()),null===c&&1===t.length&&t[0]instanceof r.a?t[0]:Object(o.a)(n)(Object(s.a)(t,c))}.apply(void 0,[e].concat(t)))}}n.d(e,"a",function(){return c})},function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(1),i=n(12),o=n(27),s=n(11),c=n(15),a=n(40);function u(t,e){return e?function(n){return n.pipe(u(function(n,r){return Object(a.a)(t(n,r)).pipe(Object(c.a)(function(t,i){return e(n,t,r,i)}))}))}:function(e){return e.lift(new p(t))}}var p=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new f(t,this.project))},t}(),f=function(t){function e(e,n){var r=t.call(this,e)||this;return r.project=n,r.hasSubscription=!1,r.hasCompleted=!1,r.index=0,r}return r.a(e,t),e.prototype._next=function(t){this.hasSubscription||this.tryNext(t)},e.prototype.tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.hasSubscription=!0,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new o.a(this,void 0,void 0);this.destination.add(r),Object(s.a)(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.remove(t),this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},e}(i.a)},function(t,e,n){"use strict";var r=n(1),i=n(31),o=n(36),s=n(5),c=n(12),a=n(11),u=n(23);var p=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new f(t,this.resultSelector))},t}(),f=function(t){function e(e,n,r){void 0===r&&(r=Object.create(null));var i=t.call(this,e)||this;return i.iterators=[],i.active=0,i.resultSelector="function"==typeof n?n:null,i.values=r,i}return r.a(e,t),e.prototype._next=function(t){var e=this.iterators;Object(o.a)(t)?e.push(new h(t)):"function"==typeof t[u.a]?e.push(new l(t[u.a]())):e.push(new d(this.destination,this,t))},e.prototype._complete=function(){var t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(var n=0;n<e;n++){var r=t[n];if(r.stillUnsubscribed)this.destination.add(r.subscribe(r,n));else this.active--}}else this.destination.complete()},e.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},e.prototype.checkIterators=function(){for(var t=this.iterators,e=t.length,n=this.destination,r=0;r<e;r++){if("function"==typeof(s=t[r]).hasValue&&!s.hasValue())return}var i=!1,o=[];for(r=0;r<e;r++){var s,c=(s=t[r]).next();if(s.hasCompleted()&&(i=!0),c.done)return void n.complete();o.push(c.value)}this.resultSelector?this._tryresultSelector(o):n.next(o),i&&n.complete()},e.prototype._tryresultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(s.a),l=function(){function t(t){this.iterator=t,this.nextResult=t.next()}return t.prototype.hasValue=function(){return!0},t.prototype.next=function(){var t=this.nextResult;return this.nextResult=this.iterator.next(),t},t.prototype.hasCompleted=function(){var t=this.nextResult;return t&&t.done},t}(),h=function(){function t(t){this.array=t,this.index=0,this.length=0,this.length=t.length}return t.prototype[u.a]=function(){return this},t.prototype.next=function(t){var e=this.index++,n=this.array;return e<this.length?{value:n[e],done:!1}:{value:null,done:!0}},t.prototype.hasValue=function(){return this.array.length>this.index},t.prototype.hasCompleted=function(){return this.array.length===this.index},t}(),d=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.parent=n,i.observable=r,i.stillUnsubscribed=!0,i.buffer=[],i.isComplete=!1,i}return r.a(e,t),e.prototype[u.a]=function(){return this},e.prototype.next=function(){var t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}},e.prototype.hasValue=function(){return this.buffer.length>0},e.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},e.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,i){this.buffer.push(e),this.parent.checkIterators()},e.prototype.subscribe=function(t,e){return Object(a.a)(this,this.observable,this,e)},e}(c.a);function b(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return e.lift.call(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return"function"==typeof n&&t.pop(),Object(i.a)(t,void 0).lift(new p(n))}.apply(void 0,[e].concat(t)))}}n.d(e,"a",function(){return b})}]]);
//# sourceMappingURL=common.js.map 
 			}); 
		define("runtime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
!function(e){function r(r){for(var n,l,f=r[0],a=r[1],p=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,p||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var a=t[f];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={0:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var f=wx.webpackJsonp=wx.webpackJsonp||[],a=f.push.bind(f);f.push=r,f=f.slice();for(var p=0;p<f.length;p++)r(f[p]);var i=a;t()}([]);
//# sourceMappingURL=runtime.js.map 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./runtime"),require("./common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[3],{111:function(e,s,n){"use strict";n.r(s);var o=n(2),t=n(4),c=n(0),i=n(6);o.d.connect(),o.e.connect(),o.f.connect(),i.c.connect(),i.e.connect(),o.c.connect(),o.i.connect(),App({onLaunch(){this.sessionId=""},onShow(e){const s=e.query.showOrderEntrance||0;let n=e.query.redDotTypeList;n=n?(n=decodeURIComponent(n)).split(","):[],this.redDotTypeList=n.map(e=>+e),this.showOrderEntrance=!!+s,console.log("redDotTypeList",n),console.log("showOrderEntrance",s),1112===e.scene&&t.c.next(c.i.open),1038===e.scene&&e.sessionId!==this.sessionId||this.setGlobalSessionId(e),this.sessionId=e.sessionId},setGlobalSessionId(e){e.sessionId=e.sessionId||"test in devtools",o.c.next(e.sessionId)},onHide(e){o.a.next(e)}})}},[[111,0,1]]]);
//# sourceMappingURL=app.js.map 
 			}); 	require("app.js");
 		__wxRoute = 'components/app-cards/app-card-article/app-card-article';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/app-cards/app-card-article/app-card-article.js';	define("components/app-cards/app-card-article/app-card-article.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../../runtime"),require("./../../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[4],{66:function(e,t,i){"use strict";i.r(t);var a=i(32);Component({behaviors:[i.n(a).a],options:{styleIsolation:"apply-shared"},properties:{contentText:{type:String,value:""},contentImg:{type:String,value:""},appLogo:{type:String,value:""},appName:{type:String,value:""},recommendReason:{type:String,value:""},likeCount:{type:Number,value:0},hasLike:{type:Boolean,value:!1},isVideo:{type:Boolean,value:!1},content_image_list:{type:Array,value:[]},recommend_reason_type:{type:Number,value:0},textLink:{type:Object,value:{wxa_path:"",href_tag:" ",href_text:""}},social_like_info:{type:Object,value:{has_like:!1,like_nickname_list:[]}}},data:{singleImageStyle:""},computed:{contentTextObj(e){if(e.textLink&&e.textLink.href_tag){return{front:e.contentText.replace(new RegExp(e.textLink.href_tag),"")}}return{front:e.contentText,back:"",text:""}}},methods:{onLoadimageError(e){const{index:t}=e.currentTarget.dataset;this.triggerEvent("onLoadimageError",{imgIndex:t})},handleClickMore(){this.triggerEvent("handleClickMore")},handleClickLike(){this.triggerEvent("handleClickLike")},toProfile(){this.triggerEvent("toProfile")},handleClickCardBody(){this.triggerEvent("handleClickCardBody")},imageLoad(e){const{height:t,width:i}=e.detail,a=t/i;let n=268,r=124;if(a<1?n=(r=124)/a>268?268:r/a:r=(n=150)*a>180?180:n*a,!this.data.isVideo&&n&&r){const e="width:"+n+"px;height:"+r+"px";this.setData({singleImageStyle:e})}},captureClickCard(){this.triggerEvent("captureClickCard")}}})}},[[66,0,1]]]);
//# sourceMappingURL=app-card-article.js.map 
 			}); 	require("components/app-cards/app-card-article/app-card-article.js");
 		__wxRoute = 'components/app-cards/app-card-layout/app-card-layout';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/app-cards/app-card-layout/app-card-layout.js';	define("components/app-cards/app-card-layout/app-card-layout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../../runtime"),require("./../../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[5],{67:function(e,i,t){"use strict";t.r(i);var l=t(8),a=t(2),n=t(32),o=t.n(n);Object(l.a)({behaviors:[o.a],options:{styleIsolation:"apply-shared"},properties:{appLogo:{type:String,value:""},appName:{type:String,value:""},recommendReason:{type:String,value:""},likeCount:{type:Number,value:0},hasLike:{type:Boolean,value:!1},recommend_reason_type:{type:Number,value:0},social_like_info:{type:Object,value:{has_like:!1,like_nickname_list:[]}}},getSubscriptions:()=>({platform:a.g}),options:{styleIsolation:"shared",multipleSlots:!0},computed:{likeNameString(e){if(e.social_like_info&&e.social_like_info.like_nickname_list){return e.social_like_info.like_nickname_list.map(e=>e.user_nick_name).join("，")}return""}},methods:{toProfile(){this.triggerEvent("toProfile")},handleClickMore(){this.triggerEvent("handleClickMore")},handleClickLike(){setTimeout(()=>{this.triggerEvent("handleClickLike")},50)},captureClickCard(){this.triggerEvent("captureClickCard")}}})}},[[67,0,1]]]);
//# sourceMappingURL=app-card-layout.js.map 
 			}); 	require("components/app-cards/app-card-layout/app-card-layout.js");
 		__wxRoute = 'components/app-cards/app-card-post-video/app-card-post-video';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/app-cards/app-card-post-video/app-card-post-video.js';	define("components/app-cards/app-card-post-video/app-card-post-video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../../runtime"),require("./../../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[6],{114:function(t,e,i){"use strict";i.r(e);var a=i(2);const s=new class{constructor(){this.list=[]}add(t){this.list.push({videoId:t})}canSet(t){return!!this.list.find(e=>e.videoId===t)}set(t,e,i){const a=this.list.find(e=>e.videoId===t);return!!a&&(a.videoContext=e,a.currentTime=i,1===this.list.length&&this.playTop(),!0)}delete(t){const e=this.list.find(e=>e.videoId===t);if(e){const t=this.list.indexOf(e);e.videoContext&&e.videoContext.pause(),this.list.splice(t,1),this.list.length>0&&this.playTop()}}playTop(){a.f.subscribe(t=>{if("wifi"===t){const t=this.list[0];t&&t.videoContext&&setTimeout(()=>{t.videoContext.seek(t.currentTime||0),t.videoContext.play()},200)}})}};var n=i(7),o=i(116),r=i(15),d=i(32),h=i.n(d),l=i(8);const c=n.c.pipe(Object(o.a)(200));Object(l.a)({behaviors:[h.a],options:{styleIsolation:"apply-shared"},properties:{contentText:{type:String,value:""},contentImg:{type:String,value:""},appLogo:{type:String,value:""},appName:{type:String,value:""},recommendReason:{type:String,value:""},likeCount:{type:Number,value:0},hasLike:{type:Boolean,value:!1},videoUrl:{type:String,value:""},textLink:{type:Object,value:{wxa_path:"",href_tag:" ",href_text:""}},recommend_reason_type:{type:Number,value:0},social_like_info:{type:Object,value:{has_like:!1,like_nickname_list:[]}}},data:{canPlay:!1,wating:!0},getSubscriptions:()=>({noRender:{networkType:a.f,systemInfo:a.i.pipe(Object(r.a)(t=>{const e=t.statusBarHeight;let i;return i="android"===t.platform?48:44,{platform:t.platform,statusBarHeight:e+i}}))}}),computed:{contentTextObj(t){if(t.textLink&&t.textLink.href_tag){return{front:t.contentText.replace(new RegExp(t.textLink.href_tag),"")}}return{front:t.contentText,back:"",text:""}}},attached(){this.isAttached=!0,this.observeVideo()},detached(){this.observable.disconnect()},methods:{observeVideo(){this.videoCardId=String(Math.random()+Date.now()),this.observable=this.createIntersectionObserver(),this.observable.relativeToViewport({top:-184-this.systemInfo.statusBarHeight,bottom:-184}).observe("#video-wrap",({intersectionRatio:t})=>{t>0?this.play():this.pause()})},toProfile(){this.triggerEvent("toProfile")},onLoadimageError(){this.triggerEvent("onLoadimageError")},handleClickMore(){this.triggerEvent("handleClickMore")},handleClickLike(){this.triggerEvent("handleClickLike")},toProfile(){this.triggerEvent("toProfile")},handleClickVideo(t){this.videoContext&&this.videoContext.pause(),this.triggerEvent("handleClickCardBody")},bindplay(){this.triggerEvent("handlePlayVideo"),this.data.canPlay&&this.setData({wating:!1})},bindpause(){this.triggerEvent("handlePauseVideo")},bindended(){this.triggerEvent("handlePauseVideo")},binderror(){this.triggerEvent("handlePauseVideo")},bindtimeupdate(t){const{currentTime:e,duration:i}=t.detail;this.currentTime=e,this.duration=i},play(){s.add(this.videoCardId);const t=c.subscribe(()=>{s.canSet(this.videoCardId)&&"wifi"===this.networkType&&this.setData({canPlay:!0},()=>{this.videoContext=wx.createVideoContext("video",this),s.set(this.videoCardId,this.videoContext,this.currentTime)||this.setData({canPlay:!1,wating:!0})}),t.unsubscribe()})},pause(){this.setData({wating:!0},()=>{setTimeout(()=>{this.setData({canPlay:!1},()=>{s.delete(this.videoCardId)})},0)})},captureClickCard(){this.triggerEvent("captureClickCard")}}})}},[[114,0,1]]]);
//# sourceMappingURL=app-card-post-video.js.map 
 			}); 	require("components/app-cards/app-card-post-video/app-card-post-video.js");
 		__wxRoute = 'components/epidemic-info-panel/epidemic-info-panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/epidemic-info-panel/epidemic-info-panel.js';	define("components/epidemic-info-panel/epidemic-info-panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[7],{71:function(e,t,a){"use strict";a.r(t);var n=a(32),i=a.n(n),o=a(9),p=a(0),c=a(24),s=a(8);Object(s.a)({behaviors:[i.a],data:{showActionSheet:!1},options:{styleIsolation:"apply-shared"},properties:{feiyan_data:{type:Object,value:{}}},computed:{update_time_filter(e){if(e.feiyan_data.update_time){const t=e.feiyan_data.update_time.replace(/-/g,"/"),a=new Date(t),n=parseInt(a.getTime()/1e3);return Object(c.b)(n)}return""}},methods:{viewData(){wx.getStorage({key:"[cache]feiyan_app",complete:e=>{const t=e.data;if(t){wx.navigateToMiniProgramDirectly({appId:t.appid,path:t.path,scene:17,preScene:17});const e={page_path:t.path,content_desc:t.appName};o.f.next({cardIndex:0,hotListItem:e,eventId:p.j.CLICK,action_type:p.a.CLICK_EPIDEMIC_DATA_APP_JUMP,entry_scene:p.f.INDEX_EPIDEMIC_FEED_LIST})}else this.showActionSheet()}}),o.f.next({eventId:p.j.CLICK,action_type:p.a.CLICK_EPIDEMIC_DATA_APP,entry_scene:p.f.INDEX_EPIDEMIC_FEED_LIST})},showActionSheet(){this.setData({showActionSheet:!0})},closeActionSheet(){this.setData({showActionSheet:!1})}}})}},[[71,0,1]]]);
//# sourceMappingURL=epidemic-info-panel.js.map 
 			}); 	require("components/epidemic-info-panel/epidemic-info-panel.js");
 		__wxRoute = 'components/epidemic-server-panel/epidemic-server-panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/epidemic-server-panel/epidemic-server-panel.js';	define("components/epidemic-server-panel/epidemic-server-panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[8],{70:function(e,r,a){"use strict";a.r(r);var s=a(16),t=a(8),n=a(0);Object(t.a)({options:{styleIsolation:"apply-shared"},properties:{virus_group_info:{type:Array,value:[]}},methods:{goFriendsUseEpidemic(e){const r=e.currentTarget.dataset.anchor,a=e.currentTarget.dataset.group_name;wx.navigateTo({url:"../../pages/friends-use-epidemic/friends-use-epidemic?anchor="+r}),s.b.next({eventId:n.e.CLICK_EPIDEMIC_SERVER,params:a})}}})}},[[70,0,1]]]);
//# sourceMappingURL=epidemic-server-panel.js.map 
 			}); 	require("components/epidemic-server-panel/epidemic-server-panel.js");
 		__wxRoute = 'components/feed-list-item-placeholder/feed-list-item-placeholder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/feed-list-item-placeholder/feed-list-item-placeholder.js';	define("components/feed-list-item-placeholder/feed-list-item-placeholder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[9],{68:function(n,o){Component({options:{styleIsolation:"apply-shared"}})}},[[68,0]]]);
//# sourceMappingURL=feed-list-item-placeholder.js.map 
 			}); 	require("components/feed-list-item-placeholder/feed-list-item-placeholder.js");
 		__wxRoute = 'components/feed-list/feed-list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/feed-list/feed-list.js';	define("components/feed-list/feed-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[10],{65:function(e,t,i){"use strict";i.r(t);var s=i(9),n=i(0),r=i(8),o=i(15),a=i(24);Object(r.a)({options:{styleIsolation:"apply-shared"},data:{homeFeedsList:[],feedsListFetchState:"fetching",user_nick_name:"",systemInfo:{},topHotList:[],epidemicList:[],feiyan_data:null,virus_group_info:[]},getSubscriptions:()=>({systemInfo:s.h.pipe(Object(o.a)(e=>{const t=e.statusBarHeight;let i;return i="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:t+i}}))}),created(){this.page_num=1,this.rawTopHotList=[],this.rawEpidemicList=[],this.createdTime=Date.now(),Object.assign(this,Object(s.b)()),this.feedsList$.subscribe(e=>{this.feedsList=e,this.initHotList(),this.initEpidemicList(),this.initFeiyanData(),this.exposureEpidemicModule(),this.initServerPanelData()})},attached(){this.intersectionObserverMap={},this.hotListIntersectionObserverMap={},this.epidemicListIntersectionObserverMap={},this.renderFeedsList()},methods:{handleRetry(){this.triggerEvent("handleRetry")},fetchFeedsList(){0===this.data.homeFeedsList.length&&this.setData({feedsListFetchState:"fetching"}),this.fetchFeedsList$.next({fetchType:"get"}),this.intersectionObserveTime=Date.now()},renderFeedsList(){this.autoUnsubscribe(this.feedsListForRender$).subscribe(e=>{0===e.length&&0===this.data.homeFeedsList.length?this.setData({feedsListFetchState:"empty",homeFeedsList:[]}):(wx.nextTick(()=>{this.progressivelyRenderLists({lists:{homeFeedsList:e},others:{feedsListFetchState:"success",user_nick_name:e.user_nick_name}}).then(()=>{this.observerMiniAppInViewport(),s.g.next(0),this.initVideoStayingRecord()})}),this.recommend_feature=e.recommend_feature)})},handleClickCardBody(e){const{index:t}=e.currentTarget.dataset,i=this.data.homeFeedsList[t];if(i){const r=e.detail&&e.detail.imgIndex||0;this.clickFeedItem$.next({index:t,imgIndex:r}),this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,cardIndex:t,action_type:i.card_type===n.c.POST_IMAGE?n.a.CLICK_POST_IMG:i.card_type===n.c.POST_VIDEO?n.a.CLICK_POST_VIDEO:n.a.CLICK_CRAWLER,action_pos:r}),s.d.next()}},toProfile(e){const{index:t}=e.currentTarget.dataset;this.clickMiniProgramProfileLink$.next({index:t}),this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,cardIndex:t,event_type:n.g.ACCOUNT,action_type:n.a.CLICK_PROFILE_LINK}),s.d.next()},onLoadimageError(e){const{index:t}=e.currentTarget.dataset,i=this.data.homeFeedsList[t];if(i){if(i.card_type===n.c.POST_IMAGE){const s=e.detail&&e.detail.imgIndex||0;i.dynamic_info.item_list[s]&&"string"==typeof i.dynamic_info.item_list[s].shot_img_url&&this.setData({[`homeFeedsList[${t}].dynamic_info.item_list[${s}].shot_img_url`]:i.dynamic_info.item_list[s].shot_img_url.trim()+" "})}else"string"==typeof i.contentImg&&this.setData({[`homeFeedsList[${t}].contentImg`]:i.contentImg.trim()+" "})}},observerMiniAppInViewport(){this.cardTimer$List=[];for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];this.data.homeFeedsList.forEach((e,t)=>{const{formatedRecommendId:i,card_type:r,dynamic_info:o}=e,d=Object(a.a)();d.on("end").subscribe(e=>{e.duration>0&&this.reportMiniAppFromFeedsList$.next({cardIndex:t,action_type:n.a.CARD_STAY_TIME,entry_scene:n.f.TIMELINE_FEEDS_LIST,card_stay_time:e.duration})}),this.cardTimer$List[t]=d;const c=this.intersectionObserveTime;this.intersectionObserverMap[`#${i}`]||(this.intersectionObserverMap[`#${i}`]=this.createIntersectionObserver(),this.intersectionObserverMap[`#${i}`].relativeToViewport({top:-this.data.systemInfo.statusBarHeight-143,bottom:-143}).observe(`#${i}`,a=>{a.intersectionRatio>0?(this.reportExposureMiniAppFromFeedsList$.next({formatedRecommendId:i,eventId:n.j.EXPOSURE,cardIndex:t,intersectionObserveTime:c}),r!==n.c.POST_IMAGE&&r!==n.c.POST_VIDEO||o&&o.item_list&&o.item_list.forEach((e,s)=>{this.reportExposureLinkCardFromFeedsList$.next({formatedRecommendId:i,cardIndex:t,entry_scene:n.f.TIMELINE_FEEDS_LIST,eventId:n.j.EXPOSURE,action_pos:s,intersectionObserveTime:c})}),d.next("resume"),e.isInView=!0,t===this.data.homeFeedsList.length-3&&s.i.next()):(d.next("pause"),e.isInView=!1)}))})},setDataPromisely(e){return new Promise((t,i)=>{this.setData(e,()=>{wx.nextTick(()=>{t()})})})},async progressivelyRenderLists({lists:e={},others:t={}}={}){for(let i in e){const s=e[i],n=(e,t)=>s.slice(e,t).reduce((t,s,n)=>(t[`${i}[${e+n}]`]=s,t),{});if(await this.setDataPromisely({...n(0,3),...t}),await this.setDataPromisely({...n(3,s.length)}),s.length<this.data[i].length){const e=this.data[i].slice(0,s.length);await this.setDataPromisely({[i]:e})}}},handleClickMore(e){const{index:t}=e.currentTarget.dataset;this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,cardIndex:t,event_type:n.g.ACCOUNT,action_type:n.a.CLICK_FEED_MENU}),wx.showActionSheet({itemList:["不感兴趣","投诉"],success:({tapIndex:e})=>{this.cardOperate$.next({cardIndex:t,operateType:e}),0===e&&this.deleteCard(t)},fail:({errMsg:e})=>{"showActionSheet:fail cancel"===e&&this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,cardIndex:t,event_type:n.g.ACCOUNT,action_type:n.a.CANCEL_FEED_MENU})}})},handleClickLike(e){let t=e&&e.currentTarget.dataset.index,i=n.f.TIMELINE_FEEDS_LIST;const s=this.data.homeFeedsList[t],r=s.dynamic_info||{},o=!r.has_like,a=o?(r.like_count||0)+1:Math.max(r.like_count-1,0);let d=s.social_like_info&&s.social_like_info.like_nickname_list||[];if(o)d.push({user_nick_name:this.data.user_nick_name,is_self:!0});else{const e=d.findIndex(e=>!!e.is_self);e>=0&&d.splice(e,1)}this.setData({[`homeFeedsList[${t}].dynamic_info.has_like`]:o,[`homeFeedsList[${t}].dynamic_info.like_count`]:a,[`homeFeedsList[${t}].social_like_info.has_like`]:o,[`homeFeedsList[${t}].social_like_info.like_nickname_list`]:d}),this.cardOperate$.next({cardIndex:t,operateType:2,dynamic_info:{has_like:o,like_count:a,item_list:r.item_list,text_link:r.text_link},entry_scene:i,social_like_info:{has_like:o,like_nickname_list:d}})},handlePlayVideo(e){const{index:t}=e.currentTarget.dataset;this.videoTimer$List[t]&&this.videoTimer$List[t].next("resume")},handlePauseVideo(e){const{index:t}=e.currentTarget.dataset;this.videoTimer$List[t]&&this.videoTimer$List[t].next("pause")},handleLongPress(e){},handleLongpressEpidemicItem(e){},initVideoStayingRecord(){this.videoTimer$List=[],this.data.homeFeedsList.forEach((e,t)=>{if(e&&e.card_type===n.c.POST_VIDEO){const i=Object(a.a)();i.on("end").subscribe(i=>{if(i.duration>0){const s=this.selectComponent("#"+e.formatedRecommendId).duration||0;this.reportMiniAppFromFeedsList$.next({cardIndex:t,action_type:n.a.VIDEO_PLAYED,entry_scene:n.f.TIMELINE_FEEDS_LIST,video_play_time:i.duration,duration_time:Math.round(1e3*s)})}}),this.videoTimer$List[t]=i}})},reportVideoStayingRecord(){this.data.homeFeedsList.forEach((e,t)=>{e&&e.card_type===n.c.POST_VIDEO&&this.videoTimer$List&&this.videoTimer$List[t]&&this.videoTimer$List[t].next("end")})},reportCardsStayingRecord(){this.data.homeFeedsList.forEach((e,t)=>{this.cardTimer$List&&this.cardTimer$List[t]&&this.cardTimer$List[t].next("end")}),this.rawTopHotList.forEach((e,t)=>{this.hotListCardTimer$List&&this.hotListCardTimer$List[t]&&this.hotListCardTimer$List[t].next("end")}),this.rawEpidemicList.forEach((e,t)=>{this.epidemicListCardTimer$List&&this.epidemicListCardTimer$List[t]&&this.epidemicListCardTimer$List[t].next("end")})},deleteCard(e){this.setData({[`homeFeedsList[${e}].deleted`]:!0})},resumeCardInViewTimeRecord(){this.data.homeFeedsList.forEach((e,t)=>{e.isInView&&this.cardTimer$List&&this.cardTimer$List[t]&&this.cardTimer$List[t].next("resume")}),this.rawTopHotList.forEach((e,t)=>{e.isInView&&this.hotListCardTimer$List&&this.hotListCardTimer$List[t]&&this.hotListCardTimer$List[t].next("resume")}),this.rawEpidemicList.forEach((e,t)=>{e.isInView&&this.epidemicListCardTimer$List&&this.epidemicListCardTimer$List[t]&&this.epidemicListCardTimer$List[t].next("resume")})},loadMoreFeed(){const e=this.getLastFetchFeedRes();e&&e.weuse_feeds_list&&e.weuse_feeds_list.length>=3&&this.recommend_feature?(this.fetchFeedsList$.next({fetchType:"refill",page_num:++this.page_num}),this.reportMiniAppFromFeedsList$.next({eventId:n.j.REFRESH,action_type:n.a.LOAD_MORE})):e&&e.weuse_feeds_list&&e.weuse_feeds_list.length>=0||!this.recommend_feature?this.setData({feedsListFetchState:"exhausted"}):(this.fetchFeedsList$.next({fetchType:"refill",page_num:++this.page_num}),this.reportMiniAppFromFeedsList$.next({eventId:n.j.REFRESH,action_type:n.a.LOAD_MORE}))},epidemicListItemFilter:e=>({content_desc:e.content_desc,app_nick_name:e.app_nick_name,content_image:e.content_image,recommend_id:e.recommend_id,recommend_reason:e.recommend_reason}),hotListItemFilter:e=>({content_desc:e.content_desc,app_nick_name:e.app_nick_name,content_image:e.content_image,recommend_id:e.recommend_id}),initHotList(){const e=this.getLastFetchFeedRes().weuse_hot_list||[];this.rawTopHotList=[];const t=[],i=[];for(let s=0;s<e.length&&t.length<3;s++){const n=e[s];-1==i.indexOf(n.appid)&&(t.push(this.hotListItemFilter(n)),i.push(n.appid),this.rawTopHotList.push(n))}t.length>0&&this.setData({topHotList:t},()=>{this.observerHotListAppInViewport(),this.observerGoAllHotListInViewport()})},initEpidemicList(){const e=this.getLastFetchFeedRes(),t=e.group_feeds_list&&e.group_feeds_list.find(e=>"virus"===e.group_name);if(this.epidemicGroup=t,t&&t.weuse_feeds_list&&t.weuse_feeds_list.length>0){const e=t.weuse_feeds_list,i=[],s=[];for(let t=0;t<e.length&&i.length<1;t++){const n=e[t];-1==s.indexOf(n.appid)&&(i.push(this.epidemicListItemFilter(n)),s.push(n.appid),this.rawEpidemicList[t]=n)}i.length>0&&this.setData({epidemicList:i},()=>{this.observerEpidemicAppInViewport()})}},initFeiyanData(){const e=this.getLastFetchFeedRes();e.feiyan_data&&this.setData({feiyan_data:e.feiyan_data})},clickHotListItem(e){const{recommend_id:t,index:i}=e.currentTarget.dataset,r=(this.getLastFetchFeedRes().weuse_hot_list||[]).find(e=>e.recommend_id===t);r&&(this.clickFeedItem$.next({hotListItem:r}),this.reportMiniAppFromFeedsList$.next({hotListItem:r,eventId:n.j.CLICK,cardIndex:i,action_type:n.a.CLICK_CRAWLER,entry_scene:n.f.INDEX_HOT_LIST_PANEL}),s.d.next())},clickEpidemicItem(e){const{index:t}=e.currentTarget.dataset,i=this.epidemicGroup.weuse_feeds_list[t];i&&(this.clickFeedItem$.next({hotListItem:i}),this.reportMiniAppFromFeedsList$.next({hotListItem:i,eventId:n.j.CLICK,cardIndex:t,action_type:n.a.CLICK_CRAWLER,entry_scene:n.f.INDEX_EPIDEMIC_FEED_LIST}),s.d.next())},goAllHotList(){this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,action_type:n.a.HOT_LIST_ENTRANCE,entry_scene:n.f.INDEX_HOT_LIST_PANEL}),wx.navigateTo({url:"../../pages/hot-list/hot-list"})},observerHotListAppInViewport(){this.hotListCardTimer$List=[];for(let e in this.hotListIntersectionObserverMap)this.hotListIntersectionObserverMap[e].disconnect(),delete this.hotListIntersectionObserverMap[e];this.rawTopHotList.forEach((e,t)=>{const i=`#hotlist${t}`,s=Object(a.a)();s.on("end").subscribe(i=>{i.duration>0&&this.reportMiniAppFromFeedsList$.next({hotListItem:e,cardIndex:t,action_type:n.a.CARD_STAY_TIME,entry_scene:n.f.INDEX_HOT_LIST_PANEL,card_stay_time:i.duration})}),this.hotListCardTimer$List[t]=s;const r=this.intersectionObserveTime;this.hotListIntersectionObserverMap[i]||(this.hotListIntersectionObserverMap[i]=this.createIntersectionObserver(),this.hotListIntersectionObserverMap[i].relativeToViewport({top:-this.data.systemInfo.statusBarHeight-46,bottom:-46}).observe(i,o=>{o.intersectionRatio>0?(this.reportExposureMiniAppFromFeedsList$.next({hotListItem:e,formatedRecommendId:i,eventId:n.j.EXPOSURE,cardIndex:t,intersectionObserveTime:r,entry_scene:n.f.INDEX_HOT_LIST_PANEL}),s.next("resume"),e.isInView=!0):(s.next("pause"),e.isInView=!1)}))})},observerGoAllHotListInViewport(){this.goAllHotListIntersectionObserver&&(this.goAllHotListIntersectionObserver.disconnect(),delete this.goAllHotListIntersectionObserver),this.goAllHotListIntersectionObserver=this.createIntersectionObserver(),this.goAllHotListIntersectionObserver.relativeToViewport({top:-this.data.systemInfo.statusBarHeight,bottom:0}).observe("#goAllHotList",e=>{e.intersectionRatio>0&&this.reportExposureMiniAppFromFeedsList$.next({action_type:n.a.HOT_LIST_ENTRANCE,entry_scene:n.f.INDEX_HOT_LIST_PANEL,eventId:n.j.EXPOSURE,intersectionObserveTime:this.createdTime,formatedRecommendId:"goAllHotList"})})},observerEpidemicAppInViewport(){this.epidemicListCardTimer$List=[];for(let e in this.epidemicListIntersectionObserverMap)this.epidemicListIntersectionObserverMap[e].disconnect(),delete this.epidemicListIntersectionObserverMap[e];this.rawEpidemicList.forEach((e,t)=>{const i=`#epidemicList${t}`,s=Object(a.a)();s.on("end").subscribe(i=>{i.duration>0&&this.reportMiniAppFromFeedsList$.next({hotListItem:e,cardIndex:t,action_type:n.a.CARD_STAY_TIME,entry_scene:n.f.INDEX_EPIDEMIC_FEED_LIST,card_stay_time:i.duration})}),this.epidemicListCardTimer$List[t]=s;const r=this.intersectionObserveTime;this.epidemicListIntersectionObserverMap[i]||(this.epidemicListIntersectionObserverMap[i]=this.createIntersectionObserver(),this.epidemicListIntersectionObserverMap[i].relativeToViewport({top:-this.data.systemInfo.statusBarHeight-46,bottom:-46}).observe(i,o=>{o.intersectionRatio>0?(this.reportExposureMiniAppFromFeedsList$.next({hotListItem:e,formatedRecommendId:i,eventId:n.j.EXPOSURE,cardIndex:t,intersectionObserveTime:r,entry_scene:n.f.INDEX_EPIDEMIC_FEED_LIST}),s.next("resume"),e.isInView=!0):(s.next("pause"),e.isInView=!1)}))})},goEpidemicFeedsPage(){this.reportMiniAppFromFeedsList$.next({eventId:n.j.CLICK,action_type:n.a.EPIDEMIC_FEED_LIST_ENTRANCE,entry_scene:n.f.INDEX_EPIDEMIC_FEED_LIST}),wx.navigateTo({url:"../../pages/epidemic-feeds/epidemic-feeds"})},exposureEpidemicModule(){const e=this.getLastFetchFeedRes(),t=e.group_feeds_list&&e.group_feeds_list.find(e=>"virus"===e.group_name),i=t&&t.weuse_feeds_list&&t.weuse_feeds_list.length>0;(e.feiyan_data||i)&&this.reportMiniAppFromFeedsList$.next({eventId:n.j.EXPOSURE,action_type:n.a.EXPOSURE_INDEX_EPIDEMIC_MODULE,entry_scene:n.f.INDEX_EPIDEMIC_FEED_LIST})},initServerPanelData(){const e=this.getLastFetchFeedRes();this.setData({virus_group_info:e.virus_group_info})},detached(){this.goAllHotListIntersectionObserver.disconnect();for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect();for(let e in this.hotListIntersectionObserverMap)this.hotListIntersectionObserverMap[e].disconnect();for(let e in this.epidemicListIntersectionObserverMap)this.epidemicListIntersectionObserverMap[e].disconnect()}}})}},[[65,0,1]]]);
//# sourceMappingURL=feed-list.js.map 
 			}); 	require("components/feed-list/feed-list.js");
 		__wxRoute = 'components/feiyan-app-action-sheet/feiyan-app-action-sheet';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/feiyan-app-action-sheet/feiyan-app-action-sheet.js';	define("components/feiyan-app-action-sheet/feiyan-app-action-sheet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[11],{72:function(t,e,a){"use strict";a.r(e);var i=a(8),n=a(9),p=a(0);Object(i.a)({data:{animationData:null,hasCheck:!1},options:{styleIsolation:"apply-shared"},attached(){setTimeout(()=>{const t=wx.createAnimation();t.translateY(0).step({timingFunction:"ease",duration:230});const e=t.export();this.setData({animationData:e}),this.shouldTriggerEvent=!1},20)},data:{appList:[{appName:"腾讯健康",appIcon:"http://mmbiz.qpic.cn/mmbiz_png/gzTjzd7OLETrxXE3y0p2U89YkqSerGMpOsgNXZs7hqYQKdReRqdNhwYY8aXQbJdDLZP33FGTKTjo2NnMy83NOA/640?wx_fmt=png&wxfrom=200",appid:"wxb032bc789053daf4",path:"pages/webview/main?src=https%3A%2F%2Ffeiyan.wecity.qq.com%2Fwuhan%2Fdist%2Findex.html%23%2Findex%3Ftab%3Dyiqingditu%26channel%3DAAGE4DTdkWHeoYS3T0Y8o3ZV%26_scope%3Dsnsapi_base%26minitype%3Dth%26cityCode%3D141100"},{appName:"丁香医生",appIcon:"http://mmbiz.qpic.cn/mmbiz_png/mXuHIXGdlE570rBA6rw2g263HWeGAibEQicU1c3Zy4xtdQNicG2hNNrQqWPoGsDv1EpEGzGqQxDntzNicibxd5X0V5Q/640?wx_fmt=png&wxfrom=200",appid:"wxffc1051032845ffa",path:"pages/webview/index?url=https%3A%2F%2F3g.dxy.cn%2Fnewh5%2Fview%2Fpneumonia"},{appName:"腾讯医典",appIcon:"http://mmbiz.qpic.cn/mmbiz_png/lurquhcQaCVvRWaWDveMzrqF0nialU5doEsNHdUhMxQziaDMXUiaHBA2rhktMowWzyqW58ejSBwiaicZ7c0YgIRiboibQ/640?wx_fmt=png&wxfrom=200",appid:"wx811d61e1f61155a4",path:"pages/webview/webview?shareUrl=https%3A%2F%2Fh5.baike.qq.com%2Fmobile%2Fpneumonia.html%3Ftmenu%3Dnoback"}]},methods:{go(t){const{index:e}=t.currentTarget.dataset,a=this.data.appList[e];wx.navigateToMiniProgramDirectly({appId:a.appid,path:a.path,scene:17,preScene:17});const i={page_path:a.path,content_desc:a.appName};n.f.next({hotListItem:i,eventId:p.j.CLICK,cardIndex:e,action_type:this.data.hasCheck?p.a.CLICK_EPIDEMIC_ACTION_SHEET_APP_WITH_CHECK:p.a.CLICK_EPIDEMIC_ACTION_SHEET_APP_WITHOUT_CHECK,entry_scene:p.f.INDEX_EPIDEMIC_FEED_LIST}),this.data.hasCheck&&wx.setStorage({key:"[cache]feiyan_app",data:a}),this.close()},toggleCheckbox(){this.setData({hasCheck:!this.data.hasCheck})},clickClose(){n.f.next({eventId:p.j.CLICK,action_type:p.a.CLICK_EPIDEMIC_ACTION_SHEET_CLOSE,entry_scene:p.f.INDEX_EPIDEMIC_FEED_LIST}),this.close()},close(){const t=wx.createAnimation();t.translateY(446).step({timingFunction:"ease",duration:230});const e=t.export();this.setData({animationData:e}),this.shouldTriggerEvent=!0},transitionend(){this.shouldTriggerEvent&&this.triggerEvent("close")},noop(){}}})}},[[72,0,1]]]);
//# sourceMappingURL=feiyan-app-action-sheet.js.map 
 			}); 	require("components/feiyan-app-action-sheet/feiyan-app-action-sheet.js");
 		__wxRoute = 'components/friends-use-category-tab/friends-use-category-tab';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/friends-use-category-tab/friends-use-category-tab.js';	define("components/friends-use-category-tab/friends-use-category-tab.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[12],{109:function(t,e,a){"use strict";a.r(e);var n=a(18),r=a(2),i=a(16),s=a(120),c=a(64),o=a(15);const u=Object(n.a)(),p=r.i.pipe(Object(s.a)("screenWidth")),l=i.c.pipe(Object(c.a)(p),Object(o.a)(([t,e])=>150*t*(e/750)));u.subscribe();var b=a(8),h=a(1),d=a(5);var f=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new v(t))},t}(),v=function(t){function e(e){var a=t.call(this,e)||this;return a.hasPrev=!1,a}return h.a(e,t),e.prototype._next=function(t){var e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)},e}(d.a),x=a(60);let O=null;Object(b.a)({options:{styleIsolation:"apply-shared"},properties:{tabList:{type:Array,value:[]},category_total:{type:Number,value:5}},data:{tabLineOffset:0,weuseActiveTabIndex:0},getSubscriptions:()=>({animationData:l.pipe(function(t){return t.lift(new f)},Object(x.a)(([t,e])=>t!==e),Object(c.a)(p),Object(o.a)(([[t,e],a])=>{const n={transformOrigin:e-t>0?"100% 100% 0":"0 0 0",timingFunction:"ease",duration:230};return Math.abs(e-t)>a/5?(n.duration=400,O.translateX(e).step(n)):O.translateX(e).step(n),O.export()})),weuseActiveTabIndex:i.c}),attached(){O=wx.createAnimation()},methods:{handleTabClick(t){const{index:e}=t.currentTarget.dataset;i.a.next(+e)},handleAllTabClick(){u.next({url:"../friends-use-all/friends-use-all"})}}})}},[[109,0,1]]]);
//# sourceMappingURL=friends-use-category-tab.js.map 
 			}); 	require("components/friends-use-category-tab/friends-use-category-tab.js");
 		__wxRoute = 'components/friends-use-epidemic-panel/friends-use-epidemic-panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/friends-use-epidemic-panel/friends-use-epidemic-panel.js';	define("components/friends-use-epidemic-panel/friends-use-epidemic-panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[13],{78:function(e,i,n){"use strict";n.r(i);var s=n(9),t=n(0),a=n(8);Object(a.a)({options:{styleIsolation:"apply-shared"},methods:{goEpidemicPage(){wx.navigateTo({url:"../../pages/friends-use-epidemic/friends-use-epidemic"}),s.f.next({eventId:t.j.CLICK,action_type:t.a.CLICK_FRIENDS_USE_EPIDEMIC_PANEL,entry_scene:t.f.TIMELINE_FEEDS_LIST})}}})}},[[78,0,1]]]);
//# sourceMappingURL=friends-use-epidemic-panel.js.map 
 			}); 	require("components/friends-use-epidemic-panel/friends-use-epidemic-panel.js");
 		__wxRoute = 'components/friends-use-list-item-placeholder/friends-use-list-item-placeholder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.js';	define("components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[14],{77:function(n,o){Component({options:{styleIsolation:"apply-shared"}})}},[[77,0]]]);
//# sourceMappingURL=friends-use-list-item-placeholder.js.map 
 			}); 	require("components/friends-use-list-item-placeholder/friends-use-list-item-placeholder.js");
 		__wxRoute = 'components/friends-use-list-item/friends-use-list-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/friends-use-list-item/friends-use-list-item.js';	define("components/friends-use-list-item/friends-use-list-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[15],{76:function(e,p){Component({options:{styleIsolation:"apply-shared"},properties:{appLogo:{type:String,value:""},appName:{type:String,value:""},category:{type:String,value:""},appDesc:{type:String,value:""},recommendReason:{type:String,value:""},score:{type:Number,value:0},referMsgType:{type:Number,value:0},referMsg:{type:String,value:0},listIndex:{type:Number,value:-1},category_name_list:{type:Array,value:[]},hidden:{type:Boolean,value:!1}}})}},[[76,0]]]);
//# sourceMappingURL=friends-use-list-item.js.map 
 			}); 	require("components/friends-use-list-item/friends-use-list-item.js");
 		__wxRoute = 'components/hot-feed-card/hot-feed-card';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/hot-feed-card/hot-feed-card.js';	define("components/hot-feed-card/hot-feed-card.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[16],{69:function(e,t){Component({options:{styleIsolation:"apply-shared"},properties:{index:{type:Number,value:-1},listLength:{type:Number,value:0},item:{type:Object,value:{content_desc:"",app_nick_name:"",content_image:""}},withImg:{type:Boolean,value:!0}}})}},[[69,0]]]);
//# sourceMappingURL=hot-feed-card.js.map 
 			}); 	require("components/hot-feed-card/hot-feed-card.js");
 		__wxRoute = 'components/related-app-list-card/related-app-list-card';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/related-app-list-card/related-app-list-card.js';	define("components/related-app-list-card/related-app-list-card.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[17],{108:function(e,t,n){"use strict";n.r(t);var s=n(20),i=n(28),c=n(2),o=n(6),a=n(7),p=n(16),r=n(4),b=n(18),u=n(0),l=n(57),h=n(62),m=n(15),d=n(61),x=n(119),f=n(122),_=n(58),O=n(63),j=n(64),S=n(17),v=n(35),I=n(1),U=n(36),g=n(31),A=n(12),y=n(11);var N=function(){function e(){}return e.prototype.call=function(e,t){return t.subscribe(new w(e))},e}(),w=function(e){function t(t){var n=e.call(this,t)||this;return n.hasFirst=!1,n.observables=[],n.subscriptions=[],n}return I.a(t,e),t.prototype._next=function(e){this.observables.push(e)},t.prototype._complete=function(){var e=this.observables,t=e.length;if(0===t)this.destination.complete();else{for(var n=0;n<t&&!this.hasFirst;n++){var s=e[n],i=Object(y.a)(this,s,s,n);this.subscriptions&&this.subscriptions.push(i),this.add(i)}this.observables=null}},t.prototype.notifyNext=function(e,t,n,s,i){if(!this.hasFirst){this.hasFirst=!0;for(var c=0;c<this.subscriptions.length;c++)if(c!==n){var o=this.subscriptions[c];o.unsubscribe(),this.remove(o)}this.subscriptions=null}this.destination.next(t)},t}(A.a);const C=new S.a,L=C.pipe(Object(l.a)(e=>e?Object(v.a)(e):s.a.getCommonUseAppList()),Object(h.a)((e,t)=>t.fail?e:t),Object(m.a)(e=>(e.commonuse_app_list=e.commonuse_app_list||[],e)),Object(d.a)(({commonuse_app_list:e})=>{e.length}),Object(x.a)(1)),F=Object(b.b)(),E=(new S.a).pipe(Object(d.a)(({index:e})=>{M.next({index:e,eventId:u.j.CLICK}),o.b.next()}),Object(m.a)(({appId:e,scene:t,sceneNote:n})=>({appId:e,scene:t,sceneNote:n})));E.subscribe(F);const R=Object(b.c)().pipe(Object(d.a)(()=>{r.c.next(u.i.openHistory),p.b.next({eventId:u.e.HISTORY_USE}),o.b.next()})),T=Object(b.e)().pipe(Object(d.a)(()=>{r.c.next(u.i.openStar),p.b.next({eventId:u.e.MY_STAR}),o.b.next()})),k=Object(b.a)().pipe(Object(d.a)(()=>{r.c.next(u.i.openWeuse),p.b.next({eventId:u.e.FRIENDS_USE}),o.b.next()})),D=new S.a,H=D.pipe(Object(l.a)(()=>(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(1===e.length){if(!Object(U.a)(e[0]))return e[0];e=e[0]}return Object(g.a)(e,void 0).lift(new N)})(c.e,Object(v.a)(null))),Object(f.a)(e=>{const{appList:t,nearbyAppid:n,query:s}=e||{};return i.a.navigateToMiniProgramDirectly({appId:n||"wxb935bc1925fb7b47",path:"pages/index/index?"+(s?s.replace(/^\?/,""):""),scene:17,preScene:17}).pipe(Object(_.a)(e=>Object(v.a)({fail:!0,err:e})))}),Object(d.a)(()=>{r.c.next(u.i.openNearby),p.b.next({eventId:u.e.NEARBY}),o.b.next()})),M=new S.a,Y=new S.a;Y.pipe(Object(O.a)(e=>`${e.intersectionObserveTime}-${e.appid}`)).subscribe(M),M.pipe(Object(j.a)(L,c.c,({index:e,eventId:t},n,s)=>{const i=n.commonuse_app_list[e],{username:c,pass_str:o,app_nick_name:a}=i;return{session_id:n.session_id,client_session_id:s,entry_scene:u.f.COMMON_USE,event_id:t||u.j.EXPOSURE,event_type:u.g.ACCOUNT,event_pos:e,event_happen_before_seconds:Date.now(),username:c,content_title:a,pass_str:o}})).subscribe(a.b),F.subscribe(e=>{e.fail?console.log(`超时或失败：${JSON.stringify(e)}`):o.d.next({scene:u.h.MINI_APP})},e=>{console.log("点击常用小程序失败",e)}),R.subscribe(e=>{o.d.next({scene:u.h.HISTORY_USE}),e.fail?r.c.next(u.i.openHistoryFail):r.c.next(u.i.openHistorySuccess)}),T.subscribe(e=>{o.d.next({scene:u.h.MY_STAR}),e.fail?r.c.next(u.i.openStarFail):r.c.next(u.i.openStarSuccess)}),H.subscribe(e=>{e.fail?(r.c.next(u.i.openNearbyFail),console.log(`超时或失败：${JSON.stringify(e)}`)):(o.d.next({scene:u.h.NEARBY}),r.c.next(u.i.openNearbySuccess))}),k.subscribe(e=>{e.fail?r.c.next(u.i.openWeuseFail):r.c.next(u.i.openWeuseSuccess)});var P=n(8);Object(P.a)({options:{styleIsolation:"apply-shared"},data:{commonUseAppList:[],commonUseAppListFetchStatus:"fetching",entranceUI:0},getSubscriptions:()=>({noRender:{globalSessionId:c.c}}),attached(){this.renderCommonUseAppList()},methods:{fetchCommonUseAppListInfo(){0===this.data.commonUseAppList.length&&this.setData({commonUseAppListFetchStatus:"fetching"}),C.next()},renderCommonUseAppList(){this.autoUnsubscribe(L).subscribe(e=>{e.fail?(console.log("commonUseAppListInfo失败：",e),this.setData({commonUseAppListFetchStatus:"fail"})):wx.nextTick(()=>{this.setData({commonUseAppList:e.commonuse_app_list,commonUseAppListFetchStatus:"success",entranceUI:e.recommend_ui},()=>{const t=Date.now();(1===e.recommend_ui?e.commonuse_app_list.slice(0,6):e.commonuse_app_list).forEach((e,n)=>{Y.next({eventId:u.j.EXPOSURE,index:n,appid:e.appid,intersectionObserveTime:t})}),a.c.next()})})})},handleCommonAppItemClick(e){const{appid:t,index:n}=e.currentTarget.dataset,s=this.data.commonUseAppList[n];if(s){const{username:e}=s,i=this.globalSessionId;E.next({appId:t,scene:1142,sceneNote:[e,i].join(";"),index:n})}},handleHistoryAppClick(){R.next({scene:17,preScene:17})},handleStarAppClick(){T.next({scene:17,preScene:17})},handleNearbyClick(){D.next()},handleFriendsUseClick(){k.next({url:"../friends-use/friends-use"})}}})}},[[108,0,1]]]);
//# sourceMappingURL=related-app-list-card.js.map 
 			}); 	require("components/related-app-list-card/related-app-list-card.js");
 		__wxRoute = 'components/search/search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/search/search.js';	define("components/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[18],{113:function(e,t,r){"use strict";r.r(t);var s=r(59),n=(r(2),r(4)),a=r(16),o=r(0),p=r(8);Object(p.a)({options:{styleIsolation:"apply-shared"},properties:{scene:{type:Number,value:201},hidden:{type:Boolean,value:!1},extraClass:{type:String,value:""},eventId:{type:Number,value:0}},data:{searchText:"搜索小程序"},methods:{toSearch(){console.log("打开search"),s.a.next({scene:this.properties.scene}),n.c.next(o.i.openSearch),a.b.next({eventId:this.properties.eventId})}}})}},[[113,0,1]]]);
//# sourceMappingURL=search.js.map 
 			}); 	require("components/search/search.js");
 		__wxRoute = 'components/toggle-display-top/toggle-display-top';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/toggle-display-top/toggle-display-top.js';	define("components/toggle-display-top/toggle-display-top.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[19],{110:function(t,e,i){"use strict";i.r(e);var n=i(8),o=i(17),r=i(60),s=i(1),l=i(12),h=i(11),a={leading:!0,trailing:!1};function u(t,e){return void 0===e&&(e=a),function(i){return i.lift(new p(t,e.leading,e.trailing))}}var p=function(){function t(t,e,i){this.durationSelector=t,this.leading=e,this.trailing=i}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.durationSelector,this.leading,this.trailing))},t}(),c=function(t){function e(e,i,n,o){var r=t.call(this,e)||this;return r.destination=e,r.durationSelector=i,r._leading=n,r._trailing=o,r._hasValue=!1,r}return s.a(e,t),e.prototype._next=function(t){this._hasValue=!0,this._sendValue=t,this._throttled||(this._leading?this.send():this.throttle(t))},e.prototype.send=function(){var t=this._hasValue,e=this._sendValue;t&&(this.destination.next(e),this.throttle(e)),this._hasValue=!1,this._sendValue=null},e.prototype.throttle=function(t){var e=this.tryDurationSelector(t);e&&this.add(this._throttled=Object(h.a)(this,e))},e.prototype.tryDurationSelector=function(t){try{return this.durationSelector(t)}catch(t){return this.destination.error(t),null}},e.prototype.throttlingDone=function(){var t=this._throttled,e=this._trailing;t&&t.unsubscribe(),this._throttled=null,e&&this.send()},e.prototype.notifyNext=function(t,e,i,n,o){this.throttlingDone()},e.prototype.notifyComplete=function(){this.throttlingDone()},e}(l.a),d=i(5);function f(t){return function(e){return e.lift(new y(t))}}var y=function(){function t(t){this.value=t}return t.prototype.call=function(t,e){return e.subscribe(new v(t,this.value))},t}(),v=function(t){function e(e,i){var n=t.call(this,e)||this;return n.value=i,n}return s.a(e,t),e.prototype._next=function(t){this.destination.next(this.value)},e}(d.a),b=i(121);Object(n.a)({options:{styleIsolation:"apply-shared",multipleSlots:!0},data:{hideTop:!1},properties:{topHeight:{type:Number,value:56},pageStyle:{type:String,value:""}},attached(){this.scrollEvent$=new o.a,this.showTop$=this.scrollEvent$.pipe(Object(r.a)(({type:t})=>"scrolltoupper"===t),u(()=>this.notShowTop$),f(!1)),this.notShowTop$=this.scrollEvent$.pipe(Object(r.a)(({type:t})=>"scroll"===t),Object(r.a)(({scrollTop:t})=>t>=this.properties.topHeight),u(()=>this.showTop$),f(!0)),this.hideTop$=this.showTop$.pipe(Object(b.a)(this.notShowTop$)),this.autoUnsubscribe(this.hideTop$).subscribe(t=>{t!==this.data.hideTop&&this.setData({hideTop:t})})},methods:{scrolltoupper(){this.scrollEvent$.next({type:"scrolltoupper"})},scroll(t){this.scrollEvent$.next({type:"scroll",scrollTop:t})}}})}},[[110,0,1]]]);
//# sourceMappingURL=toggle-display-top.js.map 
 			}); 	require("components/toggle-display-top/toggle-display-top.js");
 		__wxRoute = 'weui-miniprogram/navigation-bar/navigation-bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'weui-miniprogram/navigation-bar/navigation-bar.js';	define("weui-miniprogram/navigation-bar/navigation-bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[27],{73:function(e,t){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";let a=null;Component({options:{multipleSlots:!0,addGlobalClass:!0},properties:{extClass:{type:String,value:""},title:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},animated:{type:Boolean,value:!0},show:{type:Boolean,value:!0,observer:"_showChange"},delta:{type:Number,value:1},isIndex:{type:Boolean,value:!1}},data:{displayStyle:"",statusBarHeight:20,finished:!1},created(){this.getSystemInfo$=new Promise((e,t)=>{a?e(a):wx.getSystemInfo({success:function(t){e(a=t)},fail(){t()}})})},attached:function(){const e=this;this.getSystemInfo$.then(t=>{e.setStyle(t)}).catch(()=>{e.data({finished:!0})})},methods:{_showChange:function(e){var t="";t=this.data.animated?"opacity: "+(e?"1":"0")+";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;":"display: "+(e?"":"none"),this.setData({displayStyle:t})},back:function(){if(this.properties.isIndex)wx.navigateBackNative();else{var e=this.data;wx.navigateBack({delta:e.delta}),this.triggerEvent("back",{delta:e.delta},{})}},setStyle(e){var t=!!(e.system.toLowerCase().search("ios")+1),n=!!wx.getMenuButtonBoundingClientRect;this.setData({ios:t,statusBarHeight:e.statusBarHeight,innerWidth:n?"width:"+e.windowWidth+"px":"",innerPaddingRight:"",leftWidth:"",finished:!0})}}})}])}},[[73,0]]]);
//# sourceMappingURL=navigation-bar.js.map 
 			}); 	require("weui-miniprogram/navigation-bar/navigation-bar.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[26],{112:function(e,t,s){"use strict";s.r(t);var o=s(2),n=s(7),i=s(16),a=s(6),r=(s(59),s(0));o.a.subscribe(e=>{e&&"back"===e.mode?(i.b.next({eventId:r.e.EIXT}),a.a.next(!1)):a.a.next(!0),n.a.next()});var c=s(8),d=s(24);Object(c.b)({data:{searchEventId:r.e.CLICK_INDEX_SEARCH,showMoreMenuRedDot:!1,showOrderEntrance:!1,platform:""},getSubscriptions:()=>({noRender:{indexPageBackFromOtherPage:a.a},platform:o.g}),onLoad(){this.initIndexPageStayTime()},onShow(){if(!this.indexPageBackFromOtherPage){a.d.next({scene:r.h.ENTRY}),this.selectComponent("#feed-list").fetchFeedsList(),this.selectComponent("#related-app-list-card").fetchCommonUseAppListInfo();const e=getApp(),t=e.showOrderEntrance;this.redDotTypeList=e.redDotTypeList;const s={};t&&(s.showOrderEntrance=!0,this.redDotTypeList.includes(1)?s.showMoreMenuRedDot=!0:s.showMoreMenuRedDot=!1,this.setData(s))}this.selectComponent("#feed-list").resumeCardInViewTimeRecord(),this.hasScroll&&this.indexPageStayTime$.next("resume")},handleRetry(){this.selectComponent("#feed-list").fetchFeedsList(),this.selectComponent("#related-app-list-card").fetchCommonUseAppListInfo()},onPageScroll(){this.hasScroll||(this.hasScroll=!0,this.indexPageStayTime$.next("start")),n.c.next()},onHide(){n.a.next(),a.a.next(!0),a.d.next({scene:r.h.EIXT}),this.selectComponent("#feed-list").reportVideoStayingRecord(),this.selectComponent("#feed-list").reportCardsStayingRecord(),this.indexPageStayTime$.next("end")},onUnload(){a.a.next(!1)},toggleDebug(){wx.showActionSheet({itemList:["打开调试","关闭调试"],success:e=>{wx.setEnableDebug({enableDebug:0===e.tapIndex})}})},toSearch(){this.selectComponent("#search").toSearch()},initIndexPageStayTime(){this.indexPageStayTime$=Object(d.a)(),this.indexPageStayTime$.on("end").subscribe(e=>{if(e&&e.duration>0){const t=this.selectComponent("#feed-list");t&&t.reportMiniAppFromFeedsList$.next({action_type:r.a.FEED_STAY_TIME,entry_scene:r.f.TIMELINE_FEEDS_LIST,duration_time:e.duration})}}),this.hasScroll=!1},onReachBottom(){this.selectComponent("#feed-list").loadMoreFeed()},clickMoreMenu(){const e=this.redDotTypeList,t=[];this.data.showMoreMenuRedDot&&t.push({index:0,type:1}),console.log("newTipsList",t),i.b.next({eventId:r.e.NAVIGATION_BAR_MENU}),wx.showActionSheet({itemList:["小程序订单"],newTipsList:t,success:t=>{0==t.tapIndex&&(i.b.next({eventId:r.e.TRANSACTION_GUARANTEE}),wx.navigateToMiniProgramDirectly({appId:"wx1183b055aeec94d1"}),e.includes(1)&&(this.setData({showMoreMenuRedDot:!1}),wx.opNativeRedDot&&wx.opNativeRedDot({op:"clear",redDotType:1,success(e){console.log("通知客户端消除红点成功",e)},fail(e){console.error("消除红点失败",e)}})))},fail:e=>{console.log(e.errMsg)}})}})}},[[112,0,1]]]);
//# sourceMappingURL=index.js.map 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/epidemic-feeds/epidemic-feeds';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/epidemic-feeds/epidemic-feeds.js';	define("pages/epidemic-feeds/epidemic-feeds.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[20],{74:function(e,t,i){"use strict";i.r(t);var r=i(8),s=i(9),n=i(7),o=i(0),c=i(24),a=i(2),d=i(15);Object(r.b)({data:{showAll:[],renderList:[]},onLoad(){this.initEpidemicFeeds(),this.intersectionObserverMap={},this.intersectionObserveTime=Date.now(),this.renderedCount=0},onShow(){this.resumeCardInViewTimeRecord()},getSubscriptions:()=>({noRender:{systemInfo:a.i.pipe(Object(d.a)(e=>{const t=e.statusBarHeight;let i;return i="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:t+i}}))}}),initEpidemicFeeds(){const e=Object(s.c)().group_feeds_list.find(e=>"virus"===e.group_name);if(e){const t=this.epidemicFeeds=e.weuse_feeds_list,i=[];t.forEach(e=>{i.push(this.renderCardFilter(e))}),this.setData({renderList:i},()=>{this.observerMiniAppInViewport(),n.c.next(0)})}},renderCardFilter:e=>({recommend_id:e.recommend_id,content_desc:e.content_desc,app_nick_name:e.app_nick_name,content_image:e.content_image}),clickItem(e){const{index:t}=e.currentTarget.dataset,i=this.epidemicFeeds[t];i&&(s.a.next({hotListItem:i}),s.f.next({hotListItem:i,eventId:o.j.CLICK,cardIndex:t,action_type:o.a.CLICK_CRAWLER,entry_scene:o.f.EPIDEMIC_FEED_LIST_PAGE}),n.a.next())},observerMiniAppInViewport(){this.cardTimer$List=[],this.epidemicFeeds.forEach((e,t)=>{const i=`#hotlist${t}`;if(this.intersectionObserverMap[i])return;const r=Object(c.a)();r.on("end").subscribe(i=>{i.duration>0&&s.f.next({hotListItem:e,cardIndex:t,entry_scene:o.f.EPIDEMIC_FEED_LIST_PAGE,action_type:o.a.CARD_STAY_TIME,card_stay_time:i.duration})}),this.cardTimer$List[t]=r;const n=this.intersectionObserveTime;this.intersectionObserverMap[i]||(this.intersectionObserverMap[i]=this.createIntersectionObserver(),this.intersectionObserverMap[i].relativeToViewport({top:-this.systemInfo.statusBarHeight-46,bottom:-46}).observe(i,c=>{c.intersectionRatio>0?(s.e.next({hotListItem:e,cardIndex:t,eventId:o.j.EXPOSURE,entry_scene:o.f.EPIDEMIC_FEED_LIST_PAGE,formatedRecommendId:i,intersectionObserveTime:n}),r.next("resume"),e.isInView=!0):(r.next("pause"),e.isInView=!1)}))})},resumeCardInViewTimeRecord(){this.epidemicFeeds.forEach((e,t)=>{e.isInView&&this.cardTimer$List&&this.cardTimer$List[t]&&this.cardTimer$List[t].next("resume")})},reportCardsStayingRecord(){this.epidemicFeeds.forEach((e,t)=>{this.cardTimer$List&&this.cardTimer$List[t]&&this.cardTimer$List[t].next("end")})},handleLongPress(e){},onUnload(){for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];this.reportCardsStayingRecord(),n.a.next()},onPageScroll(){n.c.next()},onHide(){this.reportCardsStayingRecord(),n.a.next()}})}},[[74,0,1]]]);
//# sourceMappingURL=epidemic-feeds.js.map 
 			}); 	require("pages/epidemic-feeds/epidemic-feeds.js");
 		__wxRoute = 'pages/friends-use/friends-use';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/friends-use/friends-use.js';	define("pages/friends-use/friends-use.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[24],{75:function(t,e,s){"use strict";s.r(e);var i=s(3),r=s(0),a=s(8),p=s(15),n=s(21);Object(a.b)({data:{friendsUseAppList:[[],[],[],[],[]],friendsUseAppListFetchStatus:["fetching","fetching","fetching","fetching","fetching"],friendsUseAppListRenderStatus:["","","","",""],systemInfo:{platform:"",statusBarHeight:66},swiperCurrentIndex:0,tabList:[],category_total:5,swiperLength:4,searchEventId:r.e.CLICK_FRIENDS_USE_SEARCH,category_group_app_list:[],showepidemicEntrance:!1},getSubscriptions:()=>({systemInfo:i.k.pipe(Object(p.a)(t=>{let e,s=t.statusBarHeight>0?t.statusBarHeight:28;return e="android"===t.platform?48:44,{platform:t.platform,statusBarHeight:s+e}})),swiperCurrentIndex:i.a}),onLoad(t){this.intersectionObserveTime=Date.now(),i.e.next({scene:r.h.FRIENDS_USE,query:t}),this.intersectionObserverMap=[{},{},{},{},{}],this.fetchFriendsUseAppList(0),this.renderTabAndFirstList()},onPageScroll(){i.j.next()},fetchFriendsUseAppList(t){0===t?this.setData({[`friendsUseAppListFetchStatus[${t}]`]:"fetching"}):0===this.data.friendsUseAppList[t].length&&this.setData({[`friendsUseAppListFetchStatus[${t}]`]:"fetching"}),i.b.next()},handleClickRetry(t){const{listIndex:e}=t.currentTarget.dataset;this.fetchFriendsUseAppList(e)},renderTabAndFirstList(){this.autoUnsubscribe(i.f).subscribe(t=>{if(t.virus_module_app_list&&this.setData({showepidemicEntrance:!0}),this.intersectionObserveTime=Date.now(),this.res=t,this.indexAppList=[],t.category_group_app_list&&t.category_group_app_list.forEach(t=>{t.group_list&&t.group_list.forEach((e,s)=>{if(e.card_list){const i=[];e.card_list.every(e=>{const r=this.indexAppList.some(t=>e.appid===t.appid);return 3!==i.filter(t=>!t.hidden).length&&(r?(i.push(Object.assign(e,{hidden:!0})),!0):(i.push(e),s!==t.group_list.length-1&&this.indexAppList.push(e),!0))}),e._card_list=Object(n.a)(i,0)}})}),t.category_group_app_list&&t.category_group_app_list[0]&&t.category_group_app_list[0].group_list&&t.category_group_app_list[0].group_list.length>0){let e=t.category_group_app_list.map(t=>t.category);t.category_app_list&&(e=e.concat(t.category_app_list.map(t=>t.category).slice(1))),wx.nextTick(()=>{this.setData({category_total:t.category_total,tabList:e,swiperLength:t.category_total>5?4:t.category_total,category_group_app_list:t.category_group_app_list,"friendsUseAppListFetchStatus[0]":"success"},()=>{this.observerMiniAppInViewport(0),i.j.next()})})}else this.setData({category_group_app_list:t.category_group_app_list,"friendsUseAppListFetchStatus[0]":"empty",swiperLength:1})})},renderList(t){const e=this.res;e.category_app_list&&e.category_app_list[t]&&e.category_app_list[t].weuse_app_list&&e.category_app_list[t].weuse_app_list.length>0?this.setData({[`friendsUseAppList[${t}]`]:Object(n.a)(e.category_app_list[t].weuse_app_list.slice(0,8),t),[`friendsUseAppListFetchStatus[${t}]`]:"success"},()=>{this.observerMiniAppInViewport(t),i.j.next()}):this.setData({[`friendsUseAppList[${t}]`]:[],[`friendsUseAppListFetchStatus[${t}]`]:"empty"})},handleClickItem(t){const{index:e,listIndex:s,groupIndex:a}=t.currentTarget.dataset;i.d.next({index:e,listIndex:s,groupIndex:a}),i.i.next({eventId:r.j.CLICK,cardIndex:e,listIndex:s,groupIndex:a}),i.c.next()},observerMiniAppInViewport(t){for(let e in this.intersectionObserverMap[t])this.intersectionObserverMap[t][e].disconnect(),delete this.intersectionObserverMap[t][e];let e;if(0===t){e=(this.data.category_group_app_list[0].group_list||[]).map(t=>t._card_list)}else e=this.data.friendsUseAppList[t];e.forEach((e,s)=>{let i;Array.isArray(e)?(i=s,e.forEach((e,s)=>{this.intersection(e,t,s,i)})):this.intersection(e,t,s)})},intersection(t,e,s,a){const{formatedAppId:p}=t;this.intersectionObserverMap[e][`#${p}`]||(this.intersectionObserverMap[e][`#${p}`]=this.createIntersectionObserver(),this.intersectionObserverMap[e][`#${p}`].relativeToViewport({top:-this.data.systemInfo.statusBarHeight}).observe(`#${p}`,t=>{t.intersectionRatio>0&&i.g.next({eventId:r.j.EXPOSURE,cardIndex:s,intersectionObserveTime:this.intersectionObserveTime,listIndex:e,formatedAppId:p,groupIndex:a})}))},onUnload(){i.c.next(),i.l.next(0),this.intersectionObserverMap.forEach(t=>{for(let e in t)t[e].disconnect()})},handleSlideEnd(t){const{current:e}=t.detail;i.l.next(e)},handleSlideAnimationEnd(t){const{current:e}=t.detail;e>0&&0===this.data.friendsUseAppList[e].length&&this.renderList(e)},bindscroll(t){"android"!==this.data.systemInfo.platform&&this.selectComponent("#toggle-display-top").scroll(t.detail.scrollTop)},bindscrolltoupper(){"android"!==this.data.systemInfo.platform&&this.selectComponent("#toggle-display-top").scrolltoupper()},toSearch(){this.selectComponent("#search").toSearch()},handleLongpress(t){},bindscrolltolower(t){const{listIndex:e}=t.currentTarget.dataset;if(0===e&&this.res&&this.res.category_group_app_list){const t=this.res.category_group_app_list[0].group_list,e=t.length-1,s=t[e].card_list,r=this.data.category_group_app_list[0].group_list[e],a=r._card_list.length,p=Math.min(a+8,s.length);if(a===s.length)return void this.setData({"friendsUseAppListRenderStatus[0]":"exhausted"});const o=[];r.card_list.every(t=>{const e=this.indexAppList.some(e=>t.appid===e.appid);return o.filter(t=>!t.hidden).length!==p&&(e?(o.push(Object.assign(t,{hidden:!0})),!0):(o.push(t),!0))}),r._card_list=Object(n.a)(o,0),this.setData({category_group_app_list:this.data.category_group_app_list},()=>{this.observerMiniAppInViewport(0),i.j.next()})}else if(this.res&&this.res.category_app_list){const t=this.res.category_app_list[e].weuse_app_list,s=this.data.friendsUseAppList[e].length,r=Math.min(s+8,t.length);if(s===r)return void this.setData({[`friendsUseAppListRenderStatus[${e}]`]:"exhausted"});this.setData({[`friendsUseAppList[${e}]`]:Object(n.a)(t.slice(0,r),e)},()=>{this.observerMiniAppInViewport(e),i.j.next()})}},catchTouchMove:()=>!1,handleClickGroupFooter(t){const{groupListIndex:e,groupName:s}=t.currentTarget.dataset;wx.navigateTo({url:`../friends-use-group/friends-use-group?group=${e}`}),i.h.next({eventId:r.e.CLICK_FRIENDS_USE_TOPIC,params:s})}})}},[[75,0,1]]]);
//# sourceMappingURL=friends-use.js.map 
 			}); 	require("pages/friends-use/friends-use.js");
 		__wxRoute = 'pages/friends-use-epidemic/friends-use-epidemic';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/friends-use-epidemic/friends-use-epidemic.js';	define("pages/friends-use-epidemic/friends-use-epidemic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[22],{79:function(e,t,i){"use strict";i.r(t);var r=i(3),s=i(21),n=i(0),o=i(8),a=i(15);Object(o.b)({data:{group_app_list_render:[],systemInfo:{platform:"",statusBarHeight:66},activeGroupId:"",navScrollLeft:0,scrollWithAnimation:!1},getSubscriptions:()=>({systemInfo:r.k.pipe(Object(a.a)(e=>{let t,i=e.statusBarHeight>0?e.statusBarHeight:28;return t="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:i+t,windowWidth:e.windowWidth,windowHeight:e.windowHeight}})),noRender:{rawFriendsUseAppList:r.f}}),onLoad(e){this.anchor=e.anchor,this.rawFriendsUseAppList?this.renderInit():(this.autoUnsubscribe(r.f).subscribe(e=>{e.virus_module_app_list&&this.renderInit()}),r.b.next()),this.intersectionObserverMap={},this.intersectionObserveTime=Date.now()},renderInit(){const e=this.rawFriendsUseAppList;if(e.virus_module_app_list){const t=(e.virus_module_app_list.group_app_list||[]).slice(0).map(e=>(e.card_list&&e.card_list.length>0&&(e._card_list=Object(s.a)(e.card_list.slice(0,3))),e));console.log("group_app_list_render",t),this.setData({group_app_list_render:t},()=>{if(this.observerMiniAppInViewport(),this.anchor){this.scrollToAnchor(),this.setActiveTab(this.anchor);const e=t.findIndex(e=>e.group_info.group_id===this.anchor)||0;this.scrollToTab(e,!1)}else{this.scrollToTab(0,!1);const e=t[0].group_info.group_id;this.setActiveTab(e)}r.j.next()})}},scrollToAnchor(){wx.pageScrollTo({selector:"#"+this.anchor,duration:0})},handleClickGroupFooter(e){const{groupListIndex:t,groupName:i}=e.currentTarget.dataset;wx.navigateTo({url:`../friends-use-group/friends-use-group?group=${t}&modulename=virus_module_app_list&${this.anchor?"anchor="+this.anchor:""}`}),r.h.next({eventId:n.e.CLICK_FRIENDS_USE_TOPIC,params:i})},handleClickItem(e){const{index:t,groupIndex:i}=e.currentTarget.dataset,s=["epidemicPreScene="+(void 0!==this.anchor?"1":"2"),"epidemicScene=1"];r.d.next({index:t,groupIndex:i,forEpidemic:!0,extraSceneNote:s}),r.i.next({eventId:n.j.CLICK,cardIndex:t,listIndex:0,groupIndex:i,forEpidemic:!0,entry_scene:n.f.EPIDEMIC_APP_LIST}),r.c.next()},handleLongpress(e){},observerMiniAppInViewport(){for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];this.data.group_app_list_render.forEach((e,t)=>{e._card_list&&e._card_list.forEach((e,i)=>{this.intersection(e,i,t)}),this.intersectionGroupName(e)})},intersection(e,t,i){const{appid:s}=e;this.intersectionObserverMap[`#${s}`]||(this.intersectionObserverMap[`#${s}`]=this.createIntersectionObserver(),this.intersectionObserverMap[`#${s}`].relativeToViewport({top:-this.data.systemInfo.statusBarHeight-44}).observe(`#${s}`,e=>{e.intersectionRatio>0&&r.g.next({eventId:n.j.EXPOSURE,cardIndex:t,intersectionObserveTime:this.intersectionObserveTime,formatedAppId:s,groupIndex:i,forEpidemic:!0,entry_scene:n.f.EPIDEMIC_APP_LIST})}))},intersectionGroupName(e){e.isGroupNameInView=!1;const t=this.data.systemInfo,i=`#group_name_${e.group_info.group_id}`;this.intersectionObserverMap[i]=this.createIntersectionObserver(),this.intersectionObserverMap[i].relativeToViewport({top:-t.statusBarHeight-44-8,bottom:-(t.windowHeight-(t.statusBarHeight+44+8+1))}).observe(i,t=>{t.intersectionRatio>0?e.isGroupNameInView=!0:e.isGroupNameInView=!1,this.switchTab()})},onPageScroll(){r.j.next()},onUnload(){r.c.next();for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect()},tapAnchorTab(e){const{groupId:t,index:i}=e.currentTarget.dataset,s=this.data.group_app_list_render[i];this.setActiveTab(t),this.anchor=t,this.scrollToAnchor(),this.scrollToTab(i,!0),r.h.next({eventId:n.e.CLICK_EPIDEMIC_TAB,params:s.group_info.group_name})},setActiveTab(e){this.setData({activeGroupId:e})},scrollToTab(e,t){if(e<0)return;const i=this.createSelectorQuery();i.select("anchor-tab"),i.selectAll(".anchor-tab-item").boundingClientRect(i=>{const r=this.data.systemInfo.windowWidth,s=r/750*22;let n=0;for(let t=0;t<e;t++)n+=s,n+=i[t].width;const o=r/750*692/2,a=i[e].width/2;if(n+a>o){const e=n+a-o;this.setData({navScrollLeft:e,scrollWithAnimation:t})}else this.setData({navScrollLeft:0,scrollWithAnimation:t})}).exec()},switchTab(){this.data.group_app_list_render.some((e,t)=>{if(e.isGroupNameInView){const i=e.group_info.group_id;return this.setActiveTab(i),this.scrollToTab(t,!0),!0}})}})}},[[79,0,1]]]);
//# sourceMappingURL=friends-use-epidemic.js.map 
 			}); 	require("pages/friends-use-epidemic/friends-use-epidemic.js");
 		__wxRoute = 'pages/hot-list/hot-list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/hot-list/hot-list.js';	define("pages/hot-list/hot-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[25],{80:function(e,t,s){"use strict";s.r(t);var i=s(8),r=s(9),n=s(6),o=s(7),a=s(0),c=s(24),h=s(2),d=s(15);Object(i.b)({data:{showAll:[],renderList:[]},onLoad(){this.initHostList(),this.intersectionObserverMap={},this.intersectionObserveTime=Date.now(),this.renderedCount=0},onShow(){this.resumeCardInViewTimeRecord()},getSubscriptions:()=>({noRender:{systemInfo:h.i.pipe(Object(d.a)(e=>{const t=e.statusBarHeight;let s;return s="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:t+s}}))}}),initHostList(){const e=Object(r.c)(),t=this.weuse_hot_list=e.weuse_hot_list,s=this.list=[],i=[],n=[],a=[];t.forEach(e=>{const t=n.indexOf(e.appid);-1===t?(s.push([e]),i.push([this.renderCardFilter(e)]),a.push(!1),n.push(e.appid)):(s[t].push(e),i[t].push(this.renderCardFilter(e)))}),this.setData({showAll:a,renderList:i},()=>{this.observerMiniAppInViewport(),this.observerShowMoreInViewport(),o.c.next(0)})},renderCardFilter:e=>({appid:e.appid,content_desc:e.content_desc,app_nick_name:e.app_nick_name,content_image:e.content_image,app_icon_url:e.app_icon_url}),showMore(e){const t=e.currentTarget.dataset.panelIndex,s=this.list[t][0];this.setData({[`showAll[${t}]`]:!0},()=>{this.observerMiniAppInViewport(),o.c.next(0)}),r.f.next({eventId:a.j.CLICK,action_type:a.a.SHOW_ALL,entry_scene:a.f.HOT_LIST_PAGE,cardIndex:t,hotListItem:s})},toProfile(e){const{panelIndex:t}=e.currentTarget.dataset,s=this.list[t][0];wx.openMiniProgramProfile({username:s.app_user_name,scene:7,success(){n.d.next({scene:a.h.MINI_APP_PROFILE})}}),r.f.next({hotListItem:s,eventId:a.j.CLICK,cardIndex:t,event_type:a.g.ACCOUNT,action_type:a.a.CLICK_PROFILE_LINK,entry_scene:a.f.HOT_LIST_PAGE}),o.a.next()},clickItem(e){const{panelIndex:t,index:s}=e.currentTarget.dataset,i=this.list[t][s];i&&(r.a.next({hotListItem:i}),r.f.next({hotListItem:i,eventId:a.j.CLICK,cardIndex:1e4*t+s,action_type:a.a.CLICK_CRAWLER,entry_scene:a.f.HOT_LIST_PAGE}),o.a.next())},observerMiniAppInViewport(){this.cardTimer$List=[],this.list.forEach((e,t)=>{e.forEach((e,s)=>{const i=`#hotlist${t}s${s}`;if(this.intersectionObserverMap[i])return;if(!this.data.showAll[t]&&s>=3)return;const n=this.renderedCount;this.renderedCount++;const h=Object(c.a)();h.on("end").subscribe(t=>{t.duration>0&&r.f.next({hotListItem:e,cardIndex:n,entry_scene:a.f.HOT_LIST_PAGE,action_type:a.a.CARD_STAY_TIME,card_stay_time:t.duration})}),this.cardTimer$List[n]=h;const d=this.intersectionObserveTime;this.intersectionObserverMap[i]||(this.intersectionObserverMap[i]=this.createIntersectionObserver(),this.intersectionObserverMap[i].relativeToViewport({top:-this.systemInfo.statusBarHeight-46,bottom:-46}).observe(i,t=>{t.intersectionRatio>0?(r.e.next({hotListItem:e,cardIndex:n,eventId:a.j.EXPOSURE,entry_scene:a.f.HOT_LIST_PAGE,formatedRecommendId:i,intersectionObserveTime:d}),h.next("resume"),e.isInView=!0,n===this.weuse_hot_list.length-3&&o.d.next()):(h.next("pause"),e.isInView=!1)}))})})},resumeCardInViewTimeRecord(){let e=0;this.list.forEach(t=>{t.forEach(t=>{t.isInView&&this.cardTimer$List&&this.cardTimer$List[e]&&this.cardTimer$List[e].next("resume"),e++})})},reportCardsStayingRecord(){let e=0;this.list.forEach(t=>{t.forEach(t=>{this.cardTimer$List&&this.cardTimer$List[e]&&this.cardTimer$List[e].next("end"),e++})})},handleLongPress(e){},onUnload(){for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];for(let e in this.showMoreObserveMap)this.showMoreObserveMap[e].disconnect(),delete this.showMoreObserveMap[e];this.reportCardsStayingRecord(),o.a.next()},onPageScroll(){o.c.next()},onHide(){this.reportCardsStayingRecord(),o.a.next()},observerShowMoreInViewport(){if(this.showMoreObserveMap)for(let e in this.showMoreObserveMap)this.showMoreObserveMap[e].disconnect(),delete this.showMoreObserveMap[e];this.showMoreObserveMap={},this.list.forEach((e,t)=>{const s=this.intersectionObserveTime;this.showMoreObserveMap[t]=this.createIntersectionObserver(),this.showMoreObserveMap[t].relativeToViewport({top:-this.systemInfo.statusBarHeight,bottom:0}).observe(`#showmore${t}`,i=>{i.intersectionRatio>0&&r.e.next({hotListItem:e[0],cardIndex:t,action_type:a.a.SHOW_ALL,entry_scene:a.f.HOT_LIST_PAGE,eventId:a.j.EXPOSURE,intersectionObserveTime:s,formatedRecommendId:`#showmore${t}`})})})}})}},[[80,0,1]]]);
//# sourceMappingURL=hot-list.js.map 
 			}); 	require("pages/hot-list/hot-list.js");
 		__wxRoute = 'pages/friends-use-all/friends-use-all';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/friends-use-all/friends-use-all.js';	define("pages/friends-use-all/friends-use-all.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[21],{115:function(e,t,s){"use strict";s.r(t);var i=s(8),a=s(2),r=s(6),n=s(7),o=s(15),c=s(0),p=s(20),l=s(21),d=s(18);Object(i.b)({data:{fetchStatus:"fetching",activeList:[],activeListIndex:4,tabList:[],scrollTop:0,searchEventId:c.e.CLICK_FRIENDS_USE_ALL_SEARCH,activeListRenderStatus:"",systemInfo:{platform:"",statusBarHeight:66}},getSubscriptions:()=>({systemInfo:a.i.pipe(Object(o.a)(e=>{const t=e.statusBarHeight;let s;return s="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:t+s}})),noRender:{globalSessionId:a.c}}),onLoad(e){this.intersectionObserveTime=Date.now(),this.intersectionObserverMap={},this.reportedExposure={},r.d.next({scene:c.h.FRIENDS_USE_ALL,query:e}),this.getFriendsUseAllApps(),this.navigateToMiniProgram$=Object(d.b)(),this.autoUnsubscribe(this.navigateToMiniProgram$).subscribe(e=>{e.fail?console.log(`超时或失败：${JSON.stringify(e)}`):r.d.next({scene:c.h.MINI_APP})},e=>{console.log("friends-use-all 跳转小程序失败",e)})},getFriendsUseAllApps(){wx.nextTick(()=>{this.setData({fetchStatus:"fetching"})}),p.a.getFriendsUseAppList({category_type:1}).subscribe(e=>{this.intersectionObserveTime=Date.now(),this.res=e;const t={};e.category_app_list&&e.category_app_list.length>0?(t.tabList=e.category_app_list.map(e=>e.category),t.activeListIndex=4,e.category_app_list[t.activeListIndex]&&e.category_app_list[t.activeListIndex].weuse_app_list&&(t.activeList=Object(l.a)(e.category_app_list[t.activeListIndex].weuse_app_list.slice(0,8),t.activeListIndex)),t.fetchStatus="success",wx.nextTick(()=>{this.setData(t,()=>{this.observerMiniAppInViewport(t.activeListIndex),n.c.next()})})):0===this.data.activeList.length&&this.setData({fetchStatus:"fail"})},e=>{console.error("err",e)})},bindscrolltoupper(){"android"!==this.data.systemInfo.platform&&this.selectComponent("#toggle-display-top").scrolltoupper()},bindscroll(e){"android"!==this.data.systemInfo.platform&&this.selectComponent("#toggle-display-top").scroll(e.detail.scrollTop)},renderList(e){const t=this.res;t.category_app_list&&t.category_app_list[e]&&t.category_app_list[e].weuse_app_list&&t.category_app_list[e].weuse_app_list.length>0?this.setData({activeList:Object(l.a)(t.category_app_list[e].weuse_app_list.slice(0,8),e),activeListIndex:e,scrollTop:2,activeListRenderStatus:""},()=>{this.observerMiniAppInViewport(e),n.c.next()}):this.setData({activeList:[],activeListIndex:e,scrollTop:0})},handleClickCateTab(e){const{index:t}=e.currentTarget.dataset;this.renderList(t)},toSearch(){this.selectComponent("#search").toSearch()},handleClickItem(e){const{index:t,listIndex:s}=e.currentTarget.dataset,i=this.res.category_app_list[s].weuse_app_list[t];if(i){const e=this.globalSessionId;this.navigateToMiniProgram$.next({appId:i.appid,scene:1145,sceneNote:[i.app_user_name,e,i.strategy_info].join(";"),preScene:17,preSceneNote:[e].join(";")}),this.report({listIndex:s,cardIndex:t,eventId:c.j.CLICK}),n.a.next()}},handleLongpress(e){},bindscrolltolower(){const e=this.data.activeListIndex,t=this.res.category_app_list[e].weuse_app_list,s=this.data.activeList.length,i=Math.min(s+8,t.length);s!==t.length?this.setData({activeList:Object(l.a)(t.slice(0,i),e)},()=>{this.observerMiniAppInViewport(e),n.c.next()}):this.setData({activeListRenderStatus:"exhausted"})},observerMiniAppInViewport(e){for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];this.data.activeList.forEach((t,s)=>{const{formatedAppId:i}=t;this.intersectionObserverMap[`#${i}`]=this.createIntersectionObserver(),this.intersectionObserverMap[`#${i}`].relativeToViewport({top:-this.data.systemInfo.statusBarHeight}).observe(`#${i}`,t=>{t.intersectionRatio>0&&this.reportExposure({eventId:c.j.EXPOSURE,cardIndex:s,intersectionObserveTime:this.intersectionObserveTime,listIndex:e,formatedAppId:i})})})},reportExposure(e){const t=`${e.intersectionObserveTime}-${e.eventId}-${e.cardIndex}-${e.listIndex}-${e.formatedAppId}`;this.reportedExposure[t]||(this.reportedExposure[t]=!0,this.report(e))},report(e){const{listIndex:t,cardIndex:s,eventId:i}=e,a=this.res.category_app_list[t],r=a.weuse_app_list[s],o=a.category.category_name,{recommend_id:p,app_user_name:l,content_desc:d,pass_str:h}=r,_={session_id:this.res.session_id,client_session_id:this.globalSessionId,entry_scene:c.f.FRIENDS_USE_ALL,event_id:i||c.j.EXPOSURE,event_type:c.g.ACCOUNT,event_pos:s,event_happen_before_seconds:Date.now(),username:l,content_title:d,recommend_id:p,pass_str:h,tab_name:o};n.b.next(_)},onPageScroll(){n.c.next()},onUnload(){n.a.next();for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect()}})}},[[115,0,1]]]);
//# sourceMappingURL=friends-use-all.js.map 
 			}); 	require("pages/friends-use-all/friends-use-all.js");
 		__wxRoute = 'pages/friends-use-group/friends-use-group';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/friends-use-group/friends-use-group.js';	define("pages/friends-use-group/friends-use-group.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
require("./../../runtime"),require("./../../common"),(wx.webpackJsonp=wx.webpackJsonp||[]).push([[23],{81:function(e,t,i){"use strict";i.r(t);var s=i(8),r=i(3),n=i(21),o=i(15),p=i(0);Object(s.b)({getSubscriptions:()=>({systemInfo:r.k.pipe(Object(o.a)(e=>{const t=e.statusBarHeight;let i;return i="android"===e.platform?48:44,{platform:e.platform,statusBarHeight:t+i}})),noRender:{rawFriendsUseAppList:r.f}}),data:{group_name:"",card_list:[],systemInfo:{platform:"",statusBarHeight:66},friendsUseAppListRenderStatus:""},onLoad(e){const t=e&&e.group,i=e&&e.modulename,s=e&&e.anchor;this.anchor=s,this.modulename=i,this.forEpidemic="virus_module_app_list"===this.modulename,this.intersectionObserverMap={},this.intersectionObserveTime=Date.now(),r.e.next({scene:p.h.FRIENDS_USE,query:e}),t&&(this.group=t,this.renderInit())},renderInit(){const e=this.rawFriendsUseAppList;let t;t=this.forEpidemic&&e.virus_module_app_list?e.virus_module_app_list.group_app_list[+this.group]:e.category_group_app_list[0].group_list[+this.group],this.setData({group_name:t.group_info.group_name,card_list:Object(n.a)(t.card_list.slice(0,10),0)},()=>{this.observerMiniAppInViewport(),r.j.next()})},observerMiniAppInViewport(){for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect(),delete this.intersectionObserverMap[e];this.data.card_list.forEach((e,t)=>{this.intersection(e,0,t,+this.group)})},intersection(e,t,i,s){const{formatedAppId:n}=e;this.intersectionObserverMap[`#${n}`]||(this.intersectionObserverMap[`#${n}`]=this.createIntersectionObserver(),this.intersectionObserverMap[`#${n}`].relativeToViewport({top:-this.data.systemInfo.statusBarHeight}).observe(`#${n}`,e=>{e.intersectionRatio>0&&r.g.next({eventId:p.j.EXPOSURE,cardIndex:i,intersectionObserveTime:this.intersectionObserveTime,listIndex:t,formatedAppId:n,groupIndex:s,entry_scene:this.forEpidemic?p.f.EPIDEMIC_APP_LIST_GROUP:p.f.FRIENDS_USE_GROUP,forEpidemic:this.forEpidemic})}))},handleClickItem(e){const{index:t}=e.currentTarget.dataset,i=["epidemicPreScene="+(void 0!==this.anchor?"1":"2"),"epidemicScene=2"];r.d.next({index:t,listIndex:0,groupIndex:+this.group,forEpidemic:this.forEpidemic,extraSceneNote:i}),r.i.next({eventId:p.j.CLICK,cardIndex:t,listIndex:0,groupIndex:+this.group,entry_scene:this.forEpidemic?p.f.EPIDEMIC_APP_LIST_GROUP:p.f.FRIENDS_USE_GROUP,forEpidemic:this.forEpidemic}),r.c.next()},handleLongpress(e){},onReachBottom(){const e=this.rawFriendsUseAppList;let t;if(this.forEpidemic&&e.virus_module_app_list)t=e.virus_module_app_list.group_app_list[+this.group];else{if(!e.category_group_app_list)return;t=e.category_group_app_list[0].group_list[+this.group]}const i=t.card_list,s=this.data.card_list.length,o=Math.min(s+8,i.length);s!==o?this.setData({card_list:Object(n.a)(i.slice(0,o),0)},()=>{this.observerMiniAppInViewport(),r.j.next()}):this.setData({friendsUseAppListRenderStatus:"exhausted"})},onUnload(){r.c.next();for(let e in this.intersectionObserverMap)this.intersectionObserverMap[e].disconnect()},onPageScroll(){r.j.next()}})}},[[81,0,1]]]);
//# sourceMappingURL=friends-use-group.js.map 
 			}); 	require("pages/friends-use-group/friends-use-group.js");
 	