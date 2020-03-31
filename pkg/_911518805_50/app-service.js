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
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hideMask'])
Z([3,'mod-mask-view'])
Z([[7],[3,'animationIn']])
Z([3,'catchtapPanel'])
Z([[2,'?:'],[[7],[3,'showNoPicButton']],[1,'mod-panel'],[1,'mod-panel-hide-skip-button']])
Z([[7],[3,'showNoPicButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hideMask'])
Z([3,'noop'])
Z([3,'mask-view'])
Z([3,'catchtapPanel'])
Z([3,'panel'])
Z([a,[3,'height: '],[[7],[3,'panelHeight']],[3,'px; bottom: 0px']])
Z([[7],[3,'isFirstInit']])
Z([1,true])
Z([3,'bindscrolltolower'])
Z([3,'comment-scroll-view'])
Z([a,z[5][1],[[7],[3,'scrollViewHeight']],[3,'px']])
Z([[2,'>'],[[7],[3,'totalCommentCount']],[1,0]])
Z([3,'comment-section'])
Z([3,'mainCommentIndex'])
Z([3,'mainComment'])
Z([[7],[3,'mainComments']])
Z([3,'id'])
Z([[2,'>'],[[6],[[6],[[7],[3,'mainComment']],[3,'replyComments']],[3,'length']],[1,0]])
Z([[7],[3,'showBottomLoadingView']])
Z([[7],[3,'continueFlag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldShowButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldShowAllButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showLink']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'isDropdownContentShown']],[[2,'==='],[[7],[3,'styleType']],[1,'dark']]])
Z([[2,'==='],[[7],[3,'styleType']],[1,'dark']])
Z([3,'noop'])
Z([a,[3,'dropdown '],[[2,'?:'],[[7],[3,'isDropdownContentShown']],[1,'dropdown--active'],[1,'']]])
Z([[2,'&&'],[[7],[3,'selectedId']],[[7],[3,'selectedName']]])
Z([[7],[3,'isDropdownContentShown']])
Z([[2,'&&'],[[7],[3,'isDropdownContentShown']],[[2,'==='],[[7],[3,'styleType']],[1,'light']]])
Z([[2,'==='],[[7],[3,'styleType']],[1,'light']])
Z(z[2])
Z([a,z[3][1],z[3][2]])
Z(z[4])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'noop'])
Z([3,'filters-panel'])
Z([a,[3,'position:'],[[2,'?:'],[[7],[3,'useAbs']],[1,'absolute'],[1,'fixed']],[3,';top:'],[[2,'?:'],[[7],[3,'useAbs']],[1,'auto'],[[2,'+'],[[7],[3,'top']],[1,'px']]],[3,';left:0;']])
Z([3,'bindAreaCategorySelect'])
Z([[7],[3,'areaCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowAreaCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindMenuCategorySelect'])
Z([[7],[3,'menuCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowMenuCategoryPanel']],[1,''],[1,'hide']])
Z([[7],[3,'resultSelectedMenuCategoryId']])
Z([3,'bindOrderSelect'])
Z([[2,'?:'],[[7],[3,'shouldShowOrderPanel']],[1,''],[1,'hide']])
Z([[7],[3,'orderOptions']])
Z([[7],[3,'resultSelectedOrderId']])
Z([3,'index'])
Z([3,'poiItem'])
Z([[7],[3,'poiList']])
Z([3,'id'])
Z([[7],[3,'index']])
Z([[7],[3,'poiItem']])
Z(z[19])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'height:'],[[7],[3,'imgHeight']],[3,'rpx; width:'],[[7],[3,'imgWidth']],[3,'rpx; margin-bottom:'],[[7],[3,'imgMarginBottom']],[3,'rpx; margin-right: '],[[7],[3,'imgMarginRight']],[3,'rpx; position: relative']])
Z([[7],[3,'switchHighRes']])
Z([[2,'!'],[[7],[3,'showOnlyHighRes']]])
Z([3,'bindImageLoad'])
Z([3,'image-item image-placeholder'])
Z([[7],[3,'lazyLoad']])
Z([[7],[3,'imgMode']])
Z([[2,'||'],[[7],[3,'posterSrc']],[[7],[3,'imgSrc']]])
Z([a,z[0][1],z[0][2],z[0][3],z[0][4],[3,'rpx;']])
Z([[2,'==='],[[7],[3,'imgType']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTapImpression'])
Z([a,[3,'impression-content '],[[2,'?:'],[[7],[3,'impressionCustomTheme']],[[7],[3,'impressionCustomTheme']],[1,'']]])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([3,'impression-header'])
Z([3,'bindtapToUserProfile'])
Z([3,'author impression-author'])
Z([[6],[[7],[3,'renderData']],[3,'contact']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'contact']],[3,'nameExtra']])
Z([[6],[[7],[3,'renderData']],[3,'timeString']])
Z([[2,'>='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']],[3,'length']],[1,1]])
Z([3,'formatted-image-layout'])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']])
Z(z[12])
Z([3,'picIndex'])
Z([3,'picList'])
Z([[6],[[7],[3,'picItem']],[3,'picLists']])
Z(z[16])
Z([3,'bindTapLocateMedia'])
Z([3,'media-item'])
Z([[7],[3,'picList']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'picList']],[3,'type']],[1,1]],[[6],[[7],[3,'picList']],[3,'isFirstVideo']]])
Z(z[22])
Z([a,[3,'video-'],z[3]])
Z([[6],[[7],[3,'picList']],[3,'videoStyle']])
Z(z[22])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'notDisplayMediaCount']],[1,0]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[3,'length']],[1,0]]])
Z([3,'toggleComment16483KvReport'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z([3,'bindshareshake'])
Z([3,'onTapPoi'])
Z(z[2])
Z([[6],[[7],[3,'renderData']],[3,'isUsingRealCurrentLocation']])
Z([[6],[[7],[3,'renderData']],[3,'poiInfo']])
Z([[6],[[7],[3,'renderData']],[3,'reportData']])
Z([[2,'==='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'mediaList']],[3,'length']],[1,0]])
Z([3,'noop'])
Z([3,'impression-content__middle'])
Z([3,'bindlikechange'])
Z(z[2])
Z([[7],[3,'impressionIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'isLike']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'likeCount']])
Z(z[37])
Z([[7],[3,'canShare']])
Z([3,'share-to-wechat-frame'])
Z([[6],[[7],[3,'renderData']],[3,'originComment']])
Z([[7],[3,'isShareShake']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'topImageUrl']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'name']])
Z([[7],[3,'shouldShowCommentPanel']])
Z([3,'bindhidecommmentpanel'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'subCommentCount']])
Z(z[2])
Z(z[37])
Z([[7],[3,'shouldAutoFocusCommentPanel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'impression-refer-block'])
Z([[6],[[7],[3,'renderData']],[3,'friendMarkCount']])
Z([3,'onTapImpression'])
Z([3,'impression-content'])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([3,'onTapPoi'])
Z([3,'poi-card'])
Z([[2,'>'],[[6],[[7],[3,'renderData']],[3,'visitCount']],[1,0]])
Z([[2,'>='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']],[3,'length']],[1,1]])
Z(z[2])
Z([3,'formatted-image-layout'])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']])
Z(z[12])
Z([3,'picIndex'])
Z([3,'picList'])
Z([[6],[[7],[3,'picItem']],[3,'picLists']])
Z(z[16])
Z([3,'bindTapLocateMedia'])
Z([3,'media-item'])
Z([[7],[3,'picList']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'picList']],[3,'type']],[1,1]],[[6],[[7],[3,'picList']],[3,'isFirstVideo']]])
Z([a,[3,'video-'],z[5]])
Z(z[22])
Z([a,z[24][1],z[5]])
Z(z[22])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'notDisplayMediaCount']],[1,0]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z([1,'comment-text--forward'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTapImpression'])
Z([3,'impression-content'])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([3,'impression-header'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'name']])
Z([[6],[[7],[3,'renderData']],[3,'timeString']])
Z([[7],[3,'showMoreOptions']])
Z([[2,'>='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']],[3,'length']],[1,1]])
Z([3,'formatted-image-layout'])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']])
Z(z[10])
Z([3,'picIndex'])
Z([3,'picList'])
Z([[6],[[7],[3,'picItem']],[3,'picLists']])
Z(z[14])
Z([3,'bindTapLocateMedia'])
Z([3,'media-item'])
Z([[7],[3,'picList']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'picList']],[3,'type']],[1,1]],[[6],[[7],[3,'picList']],[3,'isFirstVideo']]])
Z([a,[3,'video-'],z[3]])
Z(z[20])
Z([a,z[22][1],z[3]])
Z(z[20])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'notDisplayMediaCount']],[1,0]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z([1,2])
Z([1,'comment-text--profile'])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'topicTags']],[3,'length']],[1,0]])
Z([3,'noop'])
Z([3,'impression-content__bottom'])
Z([3,'bindlikechange'])
Z(z[2])
Z([[7],[3,'impressionIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'isLike']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'likeCount']])
Z([[6],[[7],[3,'renderData']],[3,'reportData']])
Z([[7],[3,'canShare']])
Z([3,'share-to-wechat-frame'])
Z([[6],[[7],[3,'renderData']],[3,'originComment']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'topImageUrl']])
Z(z[5])
Z([[7],[3,'shouldShowCommentPanel']])
Z([3,'bindhidecommmentpanel'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'subCommentCount']])
Z(z[2])
Z(z[39])
Z([[7],[3,'shouldAutoFocusCommentPanel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTapImpression'])
Z([3,'impression-content'])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([3,'impression-header'])
Z([3,'bindtapToUserProfile'])
Z([3,'author impression-author'])
Z([[6],[[7],[3,'renderData']],[3,'contact']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'contact']],[3,'nameExtra']])
Z([[6],[[7],[3,'renderData']],[3,'timeString']])
Z([[2,'>='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']],[3,'length']],[1,1]])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']])
Z(z[11])
Z([3,'picIndex'])
Z([3,'picList'])
Z([[6],[[7],[3,'picItem']],[3,'picLists']])
Z(z[15])
Z([3,'bindTapLocateMedia'])
Z([3,'media-item'])
Z([[7],[3,'picList']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'picList']],[3,'type']],[1,1]],[[6],[[7],[3,'picList']],[3,'isFirstVideo']]])
Z([a,[3,'video-'],z[3]])
Z(z[21])
Z([a,z[23][1],z[3]])
Z(z[21])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'notDisplayMediaCount']],[1,0]],[[2,'==='],[[7],[3,'picIndex']],[1,2]]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z([3,'noop'])
Z([3,'impression-content__bottom'])
Z([3,'bindlikechange'])
Z(z[2])
Z([[7],[3,'impressionIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'isLike']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'likeCount']])
Z([[6],[[7],[3,'renderData']],[3,'reportData']])
Z([[7],[3,'canShare']])
Z([3,'share-to-wechat-frame'])
Z([[6],[[7],[3,'renderData']],[3,'originComment']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'topImageUrl']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'name']])
Z([[7],[3,'shouldShowCommentPanel']])
Z([3,'bindhidecommmentpanel'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'subCommentCount']])
Z(z[2])
Z(z[37])
Z([[7],[3,'shouldAutoFocusCommentPanel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTapImpression'])
Z([3,'impression-content'])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([3,'impression-header'])
Z([3,'bindtapToUserProfile'])
Z([3,'author impression-author'])
Z([[6],[[7],[3,'renderData']],[3,'contact']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'contact']],[3,'nameExtra']])
Z([[6],[[7],[3,'renderData']],[3,'timeString']])
Z([[2,'>='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']],[3,'length']],[1,1]])
Z([3,'formatted-image-layout'])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'displayMediaList']])
Z(z[12])
Z([3,'picIndex'])
Z([3,'picList'])
Z([[6],[[7],[3,'picItem']],[3,'picLists']])
Z(z[16])
Z([3,'bindTapLocateMedia'])
Z([3,'media-item'])
Z([[7],[3,'picList']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'picList']],[3,'type']],[1,1]],[[6],[[7],[3,'picList']],[3,'isFirstVideo']]])
Z([a,[3,'video-'],z[3]])
Z(z[22])
Z([a,z[24][1],z[3]])
Z(z[22])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'notDisplayMediaCount']],[1,0]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[[2,'>'],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']],[3,'length']],[1,0]]])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z([[6],[[7],[3,'renderData']],[3,'hitInfo']])
Z([[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'topicTags']],[3,'length']],[1,0]])
Z([3,'onTapPoi'])
Z(z[2])
Z([[6],[[7],[3,'renderData']],[3,'isUsingRealCurrentLocation']])
Z([[6],[[7],[3,'renderData']],[3,'poiInfo']])
Z([[6],[[7],[3,'renderData']],[3,'reportData']])
Z([[2,'==='],[[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'mediaList']],[3,'length']],[1,0]])
Z([3,'noop'])
Z([3,'impression-content__bottom'])
Z([3,'bindlikechange'])
Z(z[2])
Z([[7],[3,'impressionIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'isLike']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'likeCount']])
Z(z[37])
Z([[7],[3,'canShare']])
Z([3,'share-to-wechat-frame'])
Z([[6],[[7],[3,'renderData']],[3,'originComment']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'topImageUrl']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'name']])
Z([[7],[3,'shouldShowCommentPanel']])
Z([3,'bindhidecommmentpanel'])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'subCommentCount']])
Z(z[2])
Z(z[37])
Z([[7],[3,'shouldAutoFocusCommentPanel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTapImpression'])
Z([3,'impr'])
Z([[6],[[7],[3,'renderData']],[3,'commentId']])
Z([[7],[3,'impressionDataIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'firstMedia']])
Z([3,'impr__image'])
Z([[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'firstMedia']],[3,'isFirstVideo']])
Z([a,[3,'video-'],z[3]])
Z(z[4])
Z([a,z[7][1],z[3]])
Z([[6],[[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'firstMedia']],[3,'videoStyle']])
Z(z[4])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'text']])
Z(z[2])
Z([[7],[3,'impressionIndex']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'isLike']])
Z([[6],[[6],[[7],[3,'renderData']],[3,'commentInfo']],[3,'likeCount']])
Z([[6],[[7],[3,'renderData']],[3,'reportData']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
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
Z([a,[3,'poi-card-wrapper '],[[2,'?:'],[[7],[3,'poiCustomTheme']],[[7],[3,'poiCustomTheme']],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'renderData']],[3,'visitCount']],[1,0]])
Z([[2,'&&'],[[7],[3,'showPoiGallery']],[[2,'>'],[[6],[[6],[[7],[3,'renderData']],[3,'poiGalleryPics']],[3,'length']],[1,0]]])
Z([3,'picItemIndex'])
Z([3,'picItem'])
Z([[6],[[7],[3,'renderData']],[3,'poiGalleryPics']])
Z(z[3])
Z([a,[3,'poi-gallery-pic '],[[2,'?:'],[[2,'==='],[[7],[3,'picItemIndex']],[[2,'-'],[[6],[[6],[[7],[3,'renderData']],[3,'poiGalleryPics']],[3,'length']],[1,1]]],[1,'ps-last-of-type'],[1,'']]])
Z([[7],[3,'picItem']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bottom-reason'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'poi poi-recommend js-intersection-poi'])
Z([3,'onTapToPoiDetail'])
Z([[7],[3,'renderDataIndex']])
Z([3,'onTapMark'])
Z([a,[3,'poi__mark '],[[2,'?:'],[[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'isMark']],[1,'poi__mark--marked'],[1,'']]])
Z([[2,'!'],[[6],[[6],[[7],[3,'renderData']],[3,'poiInfo']],[3,'isMark']]])
Z([[6],[[7],[3,'renderData']],[3,'reasonInfo']])
Z([[9],[[9],[[8],'type',[[6],[[6],[[7],[3,'renderData']],[3,'reasonInfo']],[3,'type']]],[[8],'data',[[6],[[6],[[7],[3,'renderData']],[3,'reasonInfo']],[3,'data']]]],[[8],'index',[[7],[3,'renderDataIndex']]]])
Z([3,'bottom-reason'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showError']])
Z([[2,'||'],[[7],[3,'showFirstLaunchTip']],[[7],[3,'showNotAllowedRegionTip']]])
Z([3,'screen'])
Z([[7],[3,'showFirstLaunchTip']])
Z([[2,'&&'],[[7],[3,'showNotAllowedRegionTip']],[[7],[3,'showFirstLaunchTip']]])
Z([[2,'&&'],[[7],[3,'showNotAllowedRegionTip']],[[2,'!'],[[7],[3,'showFirstLaunchTip']]]])
Z(z[3])
Z(z[3])
Z([[7],[3,'showContent']])
Z([[2,'=='],[[7],[3,'buttonType']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'videoUrl']],[[7],[3,'isVideoShow']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'banner'])
Z([[7],[3,'pageBgUrl']])
Z(z[2])
Z([3,'banner-content'])
Z([[7],[3,'prizeUrl']])
Z([3,'content-text'])
Z([[7],[3,'titleName']])
Z([[7],[3,'description']])
Z([[7],[3,'visitCountInfo']])
Z([[7],[3,'topRankPoiName']])
Z([3,'index'])
Z([3,'impression'])
Z([[7],[3,'impressionList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impression']],[3,'unqiue']])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impression']])
Z(z[17])
Z([1,3])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'uploadedPics']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'impressionData'])
Z([[7],[3,'impressionList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impressionData']],[3,'unqiue']])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impressionData']])
Z(z[6])
Z([[7],[3,'showBottomLoadingView']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindCheckboxChange'])
Z([[7],[3,'checkboxItems']])
Z([3,'value'])
Z([3,'weui-cell__hd weui-check__hd_in-checkbox'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'checked']]])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[2,'<'],[[6],[[7],[3,'uploadedPics']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'userLists']],[3,'length']],[1,0]])
Z([[8],'lists',[[7],[3,'userLists']]])
Z([3,'user-item'])
Z([[7],[3,'isUserListEmpty']])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'userLists']],[3,'length']],[1,0]])
Z([[8],'lists',[[7],[3,'userLists']]])
Z([3,'user-item'])
Z([[7],[3,'isUserListEmpty']])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-item'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'lists']])
Z([3,'id'])
Z([3,'bindTapToUserProfile'])
Z([3,'user-item user-row'])
Z([[7],[3,'index']])
Z([[2,'!=='],[[7],[3,'index']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'headImgUrl']])
Z([3,'content-row'])
Z([[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'impressionCount']])
Z([[2,'||'],[[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'fansCount']],[[2,'+'],[[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'likeCount']],[[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'markCount']]]])
Z([[2,'+'],[[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'likeCount']],[[6],[[6],[[7],[3,'item']],[3,'ugc']],[3,'markCount']]])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'noop'])
Z([3,'mod-panel'])
Z([3,'bindAreaCategorySelect'])
Z([[7],[3,'areaCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowAreaCategoryPanel']],[1,''],[1,'hide']])
Z([3,''])
Z(z[6])
Z([3,'bindMenuCategorySelect'])
Z([[7],[3,'menuCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowMenuCategoryPanel']],[1,''],[1,'hide']])
Z([[7],[3,'resultSelectedMenuCategoryId']])
Z([3,'bindPriceCategorySelect'])
Z([[7],[3,'priceCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowPriceCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindOrderSelect'])
Z([[2,'?:'],[[7],[3,'shouldShowOrderPanel']],[1,''],[1,'hide']])
Z([[7],[3,'orderOptions']])
Z([[7],[3,'resultSelectedOrderId']])
Z([3,'index'])
Z([3,'poiItem'])
Z([[7],[3,'poiList']])
Z([3,'id'])
Z([[7],[3,'index']])
Z([[7],[3,'poiItem']])
Z(z[23])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'hasLaunch']],[[2,'&&'],[[7],[3,'isCacheHit']],[[2,'!'],[[7],[3,'shouldShowUserAccessPermission']]]]])
Z([[2,'&&'],[[2,'>='],[[7],[3,'impressionState']],[1,0]],[[2,'>'],[[6],[[6],[[7],[3,'poi']],[3,'title1']],[3,'length']],[1,0]]])
Z([3,'impression-page'])
Z([3,'impression-header-section'])
Z([[6],[[7],[3,'swiperData']],[3,'length']])
Z([[7],[3,'canShare']])
Z([[2,'>='],[[6],[[7],[3,'swiperData']],[3,'length']],[1,2]])
Z(z[5])
Z([3,'main-comment'])
Z([3,'bindtapToUserProfile'])
Z([3,'author impression-author'])
Z([[7],[3,'authorContact']])
Z([[6],[[7],[3,'authorContact']],[3,'nameExtra']])
Z([[2,'>'],[[6],[[7],[3,'topicTags']],[3,'length']],[1,0]])
Z([3,'bindtapPoi'])
Z([3,'poi-card'])
Z([[6],[[7],[3,'poi']],[3,'id']])
Z([[6],[[7],[3,'poi']],[3,'thumbUrl']])
Z([[2,'>'],[[7],[3,'totalCommentCount']],[1,0]])
Z([3,'comment-section'])
Z([3,'comment-stats'])
Z([3,'bindlikechange'])
Z([[7],[3,'impressionId']])
Z([[7],[3,'isLike']])
Z([[7],[3,'likeCount']])
Z([[7],[3,'reportDataForLike']])
Z([[7],[3,'mainComments']])
Z([3,'mainCommentIndex'])
Z([3,'mainComment'])
Z(z[26])
Z([3,'id'])
Z([[2,'>'],[[6],[[6],[[7],[3,'mainComment']],[3,'replyComments']],[3,'length']],[1,0]])
Z([[7],[3,'showBottomLoadingView']])
Z([[7],[3,'continueFlag']])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z([[7],[3,'showInputKeyboardMask']])
Z([[2,'<'],[[7],[3,'impressionState']],[1,0]])
Z([[2,'=='],[[7],[3,'impressionState']],[[2,'-'],[1,2]]])
Z([[7],[3,'contentErrorText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'broadcastTextArray']],[3,'length']])
Z([[7],[3,'broadcastTextArray']])
Z([3,'index'])
Z([3,'impression'])
Z([[7],[3,'impressionList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impression']],[3,'unqiue']])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impression']])
Z(z[8])
Z([[7],[3,'shouldShowBottomLoading']])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-body'])
Z([[7],[3,'shouldLocateDefault']])
Z([[7],[3,'hasLabSwitch']])
Z([3,'weui-cells weui-cells_after-title'])
Z([[7],[3,'shouldUsePoiTestInfo']])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hd-row'])
Z([[2,'&&'],[[7],[3,'followCount']],[[7],[3,'shouldUseFollow']]])
Z([[2,'&&'],[[7],[3,'fansCount']],[[7],[3,'shouldUseFollow']]])
Z([[7],[3,'markLikeCountTotal']])
Z([a,[3,'tab-content '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,2]],[1,'tab-content--margin'],[1,'']]])
Z([[2,'&&'],[[7],[3,'impressionList']],[[2,'==='],[[7],[3,'currentTab']],[1,1]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'impressionList']],[3,'length']]],[[7],[3,'isTab1Inited']]])
Z([3,'index'])
Z([3,'impressionData'])
Z([[7],[3,'impressionList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impressionData']],[3,'unqiue']])
Z([3,'onTapMoreOptions'])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impressionData']])
Z(z[14])
Z([[7],[3,'continueFlagImpression']])
Z([[2,'&&'],[[7],[3,'markList']],[[2,'==='],[[7],[3,'currentTab']],[1,2]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'markList']],[3,'length']]],[[7],[3,'isTab2Inited']]])
Z([3,'onSelectDropDownMenu'])
Z([[7],[3,'selectedOptions']])
Z([[7],[3,'selectedId']])
Z([3,'light'])
Z(z[7])
Z([3,'item'])
Z([[7],[3,'markList']])
Z([3,'id'])
Z([3,'bindTapToPoiDetail'])
Z([3,'poi-cell'])
Z(z[14])
Z([3,'poi-card poi-card--with-thumbnail'])
Z([3,'poi-card--active'])
Z([3,'poi-thumbnail'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'thumbUrl']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'statusLabel']],[3,'length']],[1,0]])
Z([[6],[[6],[[7],[3,'item']],[3,'poi']],[3,'like']])
Z([[7],[3,'continueFlagMark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'newList']],[3,'length']]],[[2,'!'],[[6],[[7],[3,'oldList']],[3,'length']]]],[[7],[3,'isInited']]])
Z([[2,'>'],[[7],[3,'unreadMentionCount']],[1,0]])
Z([[8],'list',[[7],[3,'newList']]])
Z([3,'mention-list'])
Z([[6],[[7],[3,'oldList']],[3,'length']])
Z([[8],'list',[[7],[3,'oldList']]])
Z(z[3])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mention-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'COMMENT']])
Z([3,'bindtapItem'])
Z([3,'mod-item'])
Z([[6],[[7],[3,'item']],[3,'impressionId']])
Z([[6],[[7],[3,'item']],[3,'isImpressionDeleted']])
Z([[6],[[7],[3,'item']],[3,'poiId']])
Z([3,'mod-item__right'])
Z([3,'mod-info__wrap1'])
Z([[6],[[6],[[7],[3,'item']],[3,'toUser']],[3,'toUserNickName']])
Z([[6],[[7],[3,'item']],[3,'text2']])
Z([[6],[[7],[3,'item']],[3,'isNotifyDisabled']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'MARK']])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'LIKE']])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'SPECIAL']])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'FOLLOW']])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mod-comment-area'])
Z([a,[3,'margin: '],[[7],[3,'menuPositionTop']],[3,'px 0 0 0']])
Z([[7],[3,'poiId']])
Z([[2,'!'],[[7],[3,'fromPoiDetail']]])
Z([3,'media-container'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'picList']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[2,'<'],[[6],[[7],[3,'picList']],[3,'length']],[1,9]])
Z([[2,'||'],[[2,'&&'],[[7],[3,'topicItemList']],[[6],[[7],[3,'topicItemList']],[3,'length']]],[[6],[[7],[3,'selectedTopicItem']],[3,'id']]])
Z([3,'tag-container'])
Z([3,'onTapSelectTopic'])
Z([3,'tag-line'])
Z([[6],[[7],[3,'selectedTopicItem']],[3,'id']])
Z([[7],[3,'canNavigateToTagListView']])
Z([[2,'!'],[[6],[[7],[3,'selectedTopicItem']],[3,'id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-for-testing-purpose'])
Z([[7],[3,'showShareInfoInputView']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'hasLaunch']],[[2,'&&'],[[7],[3,'isCacheHit']],[[2,'!'],[[7],[3,'shouldShowUserAccessPermission']]]]])
Z([3,'poi-card'])
Z([[9],[[9],[[9],[[9],[[8],'poiInfo',[[7],[3,'poiInfo']]],[[8],'canShare',[[7],[3,'canShare']]]],[[8],'useRealCurrentLocationToGetData',[[7],[3,'useRealCurrentLocationToGetData']]]],[[8],'menuPositionTop',[[7],[3,'menuPositionTop']]]],[[8],'menuTop',[[7],[3,'menuTop']]]])
Z([3,'poi-info-basic'])
Z([[9],[[9],[[8],'poiHour',[[7],[3,'poiHour']]],[[8],'poiAddress',[[7],[3,'poiAddress']]]],[[8],'poiPhone',[[7],[3,'poiPhone']]]])
Z([3,'poi-info-detail'])
Z([[6],[[7],[3,'payRecommendContacts']],[3,'length']])
Z([[6],[[7],[3,'poiRank']],[3,'label']])
Z([[2,'>'],[[6],[[7],[3,'friendsImpressionDataList']],[3,'length']],[1,0]])
Z(z[1])
Z([3,'index'])
Z([3,'impressionData'])
Z([[7],[3,'friendsImpressionDataList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impressionData']],[3,'unqiue']])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impressionData']])
Z(z[16])
Z([[7],[3,'showMoreFriendComments']])
Z([[2,'>'],[[6],[[7],[3,'strangerImpressionDataList']],[3,'length']],[1,0]])
Z(z[1])
Z(z[10])
Z(z[11])
Z([[7],[3,'strangerImpressionDataList']])
Z(z[13])
Z(z[14])
Z(z[17])
Z(z[15])
Z(z[16])
Z([1,true])
Z(z[17])
Z([[2,'+'],[[6],[[7],[3,'friendsImpressionDataList']],[3,'length']],[[7],[3,'index']]])
Z([[7],[3,'showMoreStrangerComments']])
Z([[2,'>'],[[6],[[7],[3,'reasonList']],[3,'length']],[1,0]])
Z([[8],'reasons',[[7],[3,'reasonList']]])
Z([3,'reason-item'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'poi-info-basic'])
Z([3,'poi-banner'])
Z([a,[3,'padding-top: '],[[2,'?:'],[[2,'>'],[[6],[[6],[[7],[3,'poiInfo']],[3,'topImage']],[3,'length']],[1,0]],[1,''],[[2,'+'],[[7],[3,'menuPositionTop']],[1,60]]],[3,'px']])
Z([[2,'>'],[[6],[[6],[[7],[3,'poiInfo']],[3,'topImage']],[3,'length']],[1,0]])
Z([[7],[3,'canShare']])
Z([[2,'>'],[[6],[[6],[[7],[3,'poiInfo']],[3,'name']],[3,'length']],[1,0]])
Z([3,'poi-row ellipse'])
Z([[2,'>'],[[6],[[7],[3,'poiInfo']],[3,'price']],[1,0]])
Z([[6],[[7],[3,'poiInfo']],[3,'area']])
Z([[2,'&&'],[[7],[3,'useRealCurrentLocationToGetData']],[[6],[[7],[3,'poiInfo']],[3,'distance']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'poi-info-detail'])
Z([[2,'||'],[[6],[[7],[3,'poiHour']],[3,'time']],[[6],[[7],[3,'poiHour']],[3,'status']]])
Z([[6],[[7],[3,'poiAddress']],[3,'address']])
Z([[7],[3,'poiPhone']])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'reason-item'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'reasons']])
Z([3,'id'])
Z([3,'bindTapToIndexTag'])
Z([a,[3,'card-item card-item--block card-item--block-'],[[7],[3,'index']]])
Z([[7],[3,'item']])
Z([3,'tag'])
Z([3,'content-subtitle'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'poiCount']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'visitCount']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'coverPhoto']])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindCheckboxChange'])
Z([[7],[3,'checkboxItems']])
Z([3,'value'])
Z([3,'weui-cell__hd weui-check__hd_in-checkbox'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'checked']]])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[2,'<'],[[6],[[7],[3,'uploadedPics']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([a,[3,'height: '],[[7],[3,'scrollViewHeight']],[3,'px; position: relative; z-index: 0;']])
Z([3,'bindselect'])
Z([3,'dropdown-ranklist'])
Z([[7],[3,'areaOptions']])
Z([[7],[3,'selectedAreaId']])
Z([[2,'>'],[[6],[[7],[3,'renderPoiList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'poiItem'])
Z([[7],[3,'renderPoiList']])
Z([3,'unique'])
Z([[9],[[9],[[8],'index',[[7],[3,'index']]],[[8],'poiItem',[[7],[3,'poiItem']]]],[[8],'poiSelectorName',[1,'poi-selector1']]])
Z([3,'poi-item'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'renderPoiList']],[3,'length']]],[[2,'!'],[[7],[3,'shouldShowBottomLoading']]]])
Z([a,z[1][1],[[7],[3,'scrollViewHeight3']],[3,'px; position: relative; z-index: 0']])
Z([3,'bindselect3'])
Z([3,'dropdown-ranklist3'])
Z([[7],[3,'categoryOptions']])
Z([[7],[3,'selectedCategoryId']])
Z([[2,'>'],[[6],[[7],[3,'renderPoiList3']],[3,'length']],[1,0]])
Z(z[7])
Z(z[8])
Z([[7],[3,'renderPoiList3']])
Z(z[10])
Z([[9],[[9],[[8],'index',[[7],[3,'index']]],[[8],'poiItem',[[7],[3,'poiItem']]]],[[8],'poiSelectorName',[1,'poi-selector3']]])
Z(z[12])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'renderPoiList3']],[3,'length']]],[[2,'!'],[[7],[3,'shouldShowBottomLoading3']]]])
Z([3,'bindscrolltolower2'])
Z([a,z[1][1],[[7],[3,'scrollViewHeight2']],[3,'px;']])
Z([3,'bindselect2'])
Z([[7],[3,'typeOptions']])
Z([[7],[3,'selectedTypeId']])
Z([[2,'>'],[[6],[[7],[3,'renderPoiList2']],[3,'length']],[1,0]])
Z(z[7])
Z(z[8])
Z([[7],[3,'renderPoiList2']])
Z(z[10])
Z([[9],[[9],[[8],'index',[[7],[3,'index']]],[[8],'poiItem',[[7],[3,'poiItem']]]],[[8],'poiSelectorName',[1,'poi-selector2']]])
Z(z[12])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'renderPoiList2']],[3,'length']]],[[2,'!'],[[7],[3,'shouldShowBottomLoading2']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'poi-item'])
Z([3,'bindTapItem'])
Z([a,[3,'poi '],[[7],[3,'poiSelectorName']]])
Z([[6],[[7],[3,'poiItem']],[3,'id']])
Z([[7],[3,'index']])
Z([[2,'>'],[[6],[[6],[[7],[3,'poiItem']],[3,'ugc']],[3,'visitCount']],[1,0]])
Z([3,'onMark'])
Z([a,[3,'poi__mark '],[[2,'?:'],[[6],[[7],[3,'poiItem']],[3,'isMark']],[1,'poi__mark_marked'],[1,'']]])
Z(z[3])
Z(z[4])
Z([[6],[[7],[3,'poiItem']],[3,'isMark']])
Z([[2,'!'],[[6],[[7],[3,'poiItem']],[3,'isMark']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'renderPoiList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'poi'])
Z([[7],[3,'renderPoiList']])
Z([3,'id'])
Z([[7],[3,'index']])
Z([[7],[3,'poi']])
Z(z[5])
Z([3,'loading'])
Z([[7],[3,'shouldShowBottomLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'showPageType']],[1,'INDEX']])
Z([3,'mod-page-index'])
Z([[2,'&&'],[[7],[3,'history']],[[6],[[7],[3,'history']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'friendPoiCategory']],[[6],[[7],[3,'friendPoiCategory']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'isFriendTagInited']],[[7],[3,'isFriendTagMultiLine']]])
Z([[2,'&&'],[[7],[3,'selfPoiCategory']],[[6],[[7],[3,'selfPoiCategory']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'isSelfTagInited']],[[7],[3,'isSelfTagMultiLine']]])
Z([[2,'=='],[[7],[3,'showPageType']],[1,'SUGG']])
Z([[6],[[7],[3,'suggs']],[3,'length']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'suggs']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[[2,'-'],[1,1]]])
Z([3,'bindtapSugg'])
Z([3,'mod-sugg-item'])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'poi']])
Z([[6],[[7],[3,'item']],[3,'tagId']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,3]])
Z(z[19])
Z([[6],[[6],[[7],[3,'item']],[3,'poi']],[3,'isMark']])
Z([[7],[3,'useRealCurrentLocationToGetData']])
Z([[2,'=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'suggs']],[3,'length']],[1,1]]])
Z([[2,'==='],[[7],[3,'showPageType']],[1,'RESULT']])
Z([3,'mode-page-result'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'selectedResultType']],[1,0]],[1,''],[1,'hide']])
Z([[7],[3,'query']])
Z([[7],[3,'queryType']])
Z([[2,'?:'],[[2,'=='],[[7],[3,'selectedResultType']],[1,1]],[1,''],[1,'hide']])
Z(z[30])
Z(z[31])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mod-hd'])
Z([[7],[3,'isSearching']])
Z([[2,'&&'],[[7],[3,'query']],[[6],[[7],[3,'query']],[3,'length']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'list4Search']],[[2,'>'],[[6],[[7],[3,'list4Search']],[3,'length']],[1,0]]],[[2,'||'],[[2,'!'],[[7],[3,'query']]],[[2,'=='],[[6],[[7],[3,'query']],[3,'length']],[1,0]]]])
Z([[7],[3,'shouldShowBottomLoading4Search']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'shouldShowBottomLoading4Search']]],[[2,'=='],[[6],[[7],[3,'list4Search']],[3,'length']],[1,0]]])
Z([[7],[3,'showChooseMediaPanel']])
Z([3,'onHideChooseMediaPanel'])
Z([3,'onChooseMediaPanelResult'])
Z([[7],[3,'currentPoiName']])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'mod-panel'])
Z([3,'bindAreaCategorySelect'])
Z([[7],[3,'areaCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowAreaCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindMenuCategorySelect'])
Z([[7],[3,'menuCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowMenuCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindPriceCategorySelect'])
Z([[7],[3,'priceCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowPriceCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindOrderSelect'])
Z([[2,'?:'],[[7],[3,'shouldShowOrderPanel']],[1,''],[1,'hide']])
Z([[7],[3,'orderOptions']])
Z([[7],[3,'resultSelectedOrderId']])
Z([[7],[3,'similarAreas']])
Z([3,'mod-area-select'])
Z([[7],[3,'shouldShowSimilarAreaPanel']])
Z([3,'bindtapSelectedSmlArea'])
Z([3,'mod-area-select-item'])
Z([[6],[[6],[[7],[3,'similarAreas']],[[7],[3,'selectedSimilarAreaIndex']]],[3,'id']])
Z([[2,'>'],[[6],[[7],[3,'similarAreas']],[3,'length']],[1,1]])
Z([3,'index'])
Z([3,'smlArea'])
Z(z[15])
Z([[2,'!='],[[6],[[7],[3,'smlArea']],[3,'id']],[[6],[[6],[[7],[3,'similarAreas']],[[7],[3,'selectedSimilarAreaIndex']]],[3,'id']]])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z([[2,'&&'],[[7],[3,'tagResults']],[[6],[[7],[3,'tagResults']],[3,'length']]])
Z([[7],[3,'isPoiListLoaded']])
Z([[2,'!'],[[6],[[7],[3,'poiList']],[3,'length']]])
Z([3,'bindscrolltolower'])
Z([3,'scrollView'])
Z([3,'500'])
Z([a,[3,'height: '],[[7],[3,'scrollViewHeight']],[3,'px']])
Z([3,'poiIndex'])
Z([3,'poi'])
Z([[7],[3,'poiList']])
Z([3,'unique'])
Z([3,'bindtapItem'])
Z([3,'mod-poi-1208 selector-poi'])
Z([[6],[[7],[3,'poi']],[3,'id']])
Z([[7],[3,'poiIndex']])
Z([3,'mod-poi-1208__title1-wrap'])
Z([[2,'||'],[[6],[[7],[3,'poi']],[3,'title2HitWord']],[[7],[3,'query']]])
Z([[6],[[7],[3,'poi']],[3,'title1']])
Z([[6],[[7],[3,'poi']],[3,'isMark']])
Z([[7],[3,'useRealCurrentLocationToGetData']])
Z([[7],[3,'query']])
Z([[6],[[7],[3,'poi']],[3,'title2']])
Z([[2,'==='],[[6],[[6],[[7],[3,'poi']],[3,'recommendText']],[3,'scene']],[1,1]])
Z([[6],[[6],[[7],[3,'poi']],[3,'recommendText']],[3,'label']])
Z([[6],[[6],[[7],[3,'poi']],[3,'photos']],[3,'length']])
Z([[7],[3,'shouldShowBottomLoading']])
Z(z[55])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'mod-panel'])
Z([3,'bindAreaCategorySelect'])
Z([[7],[3,'areaCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowAreaCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindMenuCategorySelect'])
Z([[7],[3,'menuCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowMenuCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindPriceCategorySelect'])
Z([[7],[3,'priceCategory']])
Z([[2,'?:'],[[7],[3,'shouldShowPriceCategoryPanel']],[1,''],[1,'hide']])
Z([3,'bindOrderSelect'])
Z([[2,'?:'],[[7],[3,'shouldShowOrderPanel']],[1,''],[1,'hide']])
Z([[7],[3,'orderOptions']])
Z([[7],[3,'resultSelectedOrderId']])
Z([[7],[3,'isInited']])
Z([[2,'!'],[[6],[[7],[3,'impressionDataList']],[3,'length']]])
Z([3,'bindscrolltolower'])
Z([3,'scrollView'])
Z([3,'500'])
Z([a,[3,'background: white; height: '],[[7],[3,'scrollViewHeight']],[3,'px']])
Z([3,'index'])
Z([3,'impression'])
Z([[7],[3,'impressionDataList']])
Z([3,'unqiue'])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impression']])
Z(z[26])
Z([[7],[3,'shouldShowBottomLoading']])
Z(z[29])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'topicItemList']])
Z([3,'id'])
Z([3,'onTapTopicItem'])
Z([3,'tag-item'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'visitCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindSwiperChange'])
Z([[7],[3,'current']])
Z([3,'200'])
Z([3,'height: 100vh;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'renderPicArr']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
Z([[7],[3,'showDeleteButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'nav__tabs'])
Z([3,'onTapTitleTabItem'])
Z([3,'tab'])
Z([1,0])
Z([a,[3,'order: '],[[2,'?:'],[[2,'=='],[[7],[3,'mainTab']],[1,1]],[1,'2'],[1,'1']],[3,';']])
Z([[2,'==='],[[7],[3,'currentTitleTab']],[1,0]])
Z(z[1])
Z(z[2])
Z([1,1])
Z([a,z[4][1],[[2,'?:'],[[2,'=='],[[7],[3,'mainTab']],[1,1]],[1,'1'],[1,'2']],z[4][3]])
Z([[2,'==='],[[7],[3,'currentTitleTab']],[1,1]])
Z([3,'titleTab0'])
Z([a,[3,'background: #f4f4f4; min-height: '],[[7],[3,'visibleTitleTabContentHeight']],[3,'px; '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTitleTab']],[1,0]],[[2,'?:'],[[7],[3,'isChangingTitleTab']],[[2,'+'],[[2,'+'],[1,'overflow: hidden; height: '],[[7],[3,'visibleTitleTabContentHeight']]],[1,'px;']],[1,'']],[1,'display: none']]])
Z([[2,'&&'],[[7],[3,'friendTalkAboutList']],[[2,'>='],[[7],[3,'friendTalkAboutListLen']],[1,5]]])
Z([[6],[[7],[3,'findPoiProps']],[3,'filtersTop']])
Z([3,'js-find-poi'])
Z([3,'findPoi'])
Z([[7],[3,'findPoiProps']])
Z([3,'titleTab1'])
Z([a,z[12][1],z[12][2],z[12][3],[[2,'?:'],[[2,'==='],[[7],[3,'currentTitleTab']],[1,1]],[[2,'?:'],[[7],[3,'isChangingTitleTab']],[[2,'+'],[[2,'+'],[1,'overflow: hidden; height: '],[[7],[3,'visibleTitleTabContentHeight']]],[1,'px;']],[1,'']],[1,'display: none']]])
Z([3,'tab-header'])
Z([3,'onTapTabItem'])
Z([3,'tab-header__item tab-header__item-1'])
Z(z[8])
Z([[2,'=='],[1,1],[[7],[3,'currentTab']]])
Z(z[21])
Z([a,[3,'tab-header__item tab-header__item-2 '],[[2,'?:'],[[2,'=='],[1,0],[[7],[3,'currentTab']]],[1,'tab-header__item_selected'],[1,'']]])
Z(z[3])
Z([[2,'=='],[1,0],[[7],[3,'currentTab']]])
Z([3,'tab1'])
Z([a,z[12][1],[[7],[3,'scrollViewHeight']],z[12][3],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,1]],[[2,'?:'],[[7],[3,'isChangingTab']],[[2,'+'],[[2,'+'],[1,'overflow: hidden; height: '],[[7],[3,'scrollViewHeight']]],[1,'px;']],[1,'']],[1,'display: none']]])
Z([[2,'>'],[[7],[3,'unreadMentionCount']],[1,0]])
Z([[2,'&&'],[[7],[3,'payRecommendPoiInfoList']],[[6],[[7],[3,'payRecommendPoiInfoList']],[3,'length']]])
Z([3,'mod-timeline-top-entry-container'])
Z([[2,'>'],[[6],[[7],[3,'payRecommendPoiInfoList']],[3,'length']],[1,1]])
Z([3,'payRecommendPoiIndex'])
Z([3,'payRecommendPoiItem'])
Z([[7],[3,'payRecommendPoiInfoList']])
Z([3,'id'])
Z([[2,'=='],[[7],[3,'payRecommendPoiIndex']],[1,0]])
Z([[9],[[8],'waterfallCol1',[[7],[3,'waterfallCol1']]],[[8],'waterfallCol2',[[7],[3,'waterfallCol2']]]])
Z([3,'waterfall'])
Z([3,'loading'])
Z([[7],[3,'shouldShowBottomLoadingRecommend']])
Z([3,'tab0'])
Z([a,[3,'background: white; '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,0]],[[2,'?:'],[[7],[3,'isChangingTab']],[[2,'+'],[[2,'+'],[1,'overflow: hidden; height: '],[[7],[3,'scrollViewHeight']]],[1,'px;']],[1,'']],[1,'display: none']]])
Z([[7],[3,'shouldShowNewFriendImprBar']])
Z(z[31])
Z(z[13])
Z([3,'index'])
Z([3,'impressionData'])
Z([[7],[3,'impressionDataList']])
Z([3,'unqiue'])
Z([[6],[[7],[3,'impressionData']],[3,'unqiue']])
Z([[6],[[7],[3,'impressionData']],[3,'markInfo']])
Z([3,'impression-cell js-intersection-impression'])
Z([[7],[3,'index']])
Z([[7],[3,'impressionData']])
Z(z[56])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[56])
Z([[2,'&&'],[[7],[3,'isFriendTimelineInited']],[[2,'!'],[[6],[[7],[3,'impressionDataList']],[3,'length']]]])
Z(z[42])
Z([[7],[3,'shouldShowBottomLoadingFriend']])
Z([[2,'||'],[[6],[[7],[3,'impressionDataList']],[3,'length']],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'impressionDataList']],[3,'length']]],[[7],[3,'shouldShowNormalPostButton']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'waterfallItem'])
Z([3,'waterfall__item'])
Z([a,[3,'height: '],[[6],[[6],[[7],[3,'item']],[3,'sizeInfo']],[3,'cardHeight']],[3,'rpx;']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'type']],[1,2]])
Z([3,'onTapActivityEntry'])
Z([3,'activity__mask js-intersection-topic'])
Z([[6],[[6],[[7],[3,'item']],[3,'data']],[3,'index']])
Z([[6],[[6],[[7],[3,'item']],[3,'data']],[3,'topic']])
Z([a,[3,'width:'],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'width']],[3,'rpx; height: '],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'height']],z[2][3]])
Z([[6],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'topic']],[3,'visitCount']])
Z([[6],[[6],[[7],[3,'item']],[3,'data']],[3,'comment']])
Z([3,'js-intersection-impression'])
Z(z[6])
Z([1,true])
Z([[6],[[7],[3,'item']],[3,'data']])
Z(z[6])
Z([3,'waterfall'])
Z(z[16])
Z([3,'item'])
Z([[7],[3,'waterfallCol1']])
Z([3,'unqiue'])
Z([[8],'item',[[7],[3,'item']]])
Z(z[0])
Z(z[18])
Z([[7],[3,'waterfallCol2']])
Z(z[20])
Z(z[21])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hd-col'])
Z([[7],[3,'shouldUseFollow']])
Z([3,'hd-row'])
Z([[2,'&&'],[[7],[3,'shouldUseFollow']],[[7],[3,'followCount']]])
Z([[2,'&&'],[[7],[3,'fansCount']],[[7],[3,'shouldUseFollow']]])
Z([[7],[3,'markLikeCountTotal']])
Z([a,[3,'tab-content '],[[2,'?:'],[[2,'==='],[[7],[3,'currentTab']],[1,2]],[1,'tab-content--margin'],[1,'']]])
Z([[2,'&&'],[[7],[3,'impressionList']],[[2,'==='],[[7],[3,'currentTab']],[1,1]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'impressionList']],[3,'length']]],[[7],[3,'isTab1Inited']]])
Z([3,'index'])
Z([3,'impressionData'])
Z([[7],[3,'impressionList']])
Z([3,'id'])
Z([3,'impression-cell'])
Z([[7],[3,'index']])
Z([[7],[3,'impressionData']])
Z(z[14])
Z([1,false])
Z([[7],[3,'continueFlagImpression']])
Z([[2,'&&'],[[7],[3,'markList']],[[2,'==='],[[7],[3,'currentTab']],[1,2]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'markList']],[3,'length']]],[[7],[3,'isTab2Inited']]])
Z(z[9])
Z([3,'item'])
Z([[7],[3,'markList']])
Z(z[12])
Z([3,'bindTapToPoiDetail'])
Z([3,'poi-cell'])
Z(z[14])
Z([3,'poi-card poi-card--with-thumbnail'])
Z([3,'poi-card--active'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'thumbUrl']],[3,'length']],[1,0]])
Z([[6],[[6],[[7],[3,'item']],[3,'poi']],[3,'like']])
Z([[7],[3,'continueFlagMark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./pages/impression_feed/swiper.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/impression_feed/swiper.wxs'] = nv_require("p_./pages/impression_feed/swiper.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_func = (function (nv_e,nv_instance){var nv_dataset = nv_e.nv_instance.nv_getDataset();var nv_st = nv_e.nv_instance.nv_getState();var nv_current = nv_st.nv_current || 0;var nv_imgsize = nv_dataset.nv_imgsize;var nv_width = nv_dataset.nv_width;var nv_detail = nv_e.nv_detail;var nv_dx = nv_e.nv_detail.nv_dx;var nv_diff = typeof nv_st.nv_lastx !== 'undefined' ? (nv_dx - nv_st.nv_lastx):(nv_dx - 0);if (nv_diff === 0)return;;nv_st.nv_continueCount = nv_st.nv_continueCount || 1;if (Math.nv_abs(nv_dx) > nv_width * nv_st.nv_continueCount && nv_st.nv_tmpcurrent != -1){nv_console.nv_log('mod is 0 some info',nv_st.nv_tmpcurrent,nv_current);nv_current = nv_st.nv_tmpcurrent;nv_st.nv_current = nv_st.nv_tmpcurrent;nv_st.nv_tmpcurrent = -1;nv_st.nv_continueCount++};var nv_setToWidth = false;var nv_dir = nv_dx > 0;if (nv_dx !== 0 && Math.nv_abs(nv_dx) >= nv_width){nv_setToWidth = true};nv_dx = nv_dx - nv_width * nv_parseInt(nv_dx / nv_width);if (nv_dx === 0 && nv_setToWidth){nv_dx = nv_dir ? nv_width:-nv_width};if (nv_current >= nv_imgsize.nv_length - 1 && nv_dx > 0)return;;if (nv_current <= 0 && nv_dx < 0)return;;var nv_currentSize = nv_imgsize[((nt_0=(nv_current),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))];var nv_nextSize = nv_dx > 0 ? nv_imgsize[((nt_1=(nv_current + 1),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))]:nv_imgsize[((nt_2=(nv_current - 1),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))];var nv_currentHeight = nv_st.nv_currentHeight || nv_currentSize.nv_height;var nv_diffHeight = Math.nv_abs((nv_nextSize.nv_height - nv_currentSize.nv_height) * (nv_dx / nv_width));var nv_realheight = nv_currentSize.nv_height + (nv_nextSize.nv_height - nv_currentSize.nv_height > 0 ? nv_diffHeight:-nv_diffHeight);nv_st.nv_currentHeight = nv_realheight;nv_e.nv_instance.nv_setStyle(({nv_height:nv_realheight + 'px',}));nv_st.nv_lastdir = nv_dx > 0;nv_console.nv_log('111',nv_realheight,nv_dx,nv_current,nv_nextSize.nv_height,nv_currentSize.nv_height)});nv_module.nv_exports = ({nv_func:nv_func,nv_change:(function (nv_e,nv_instance){var nv_st = nv_e.nv_instance.nv_getState();nv_console.nv_log('\x3d\x3d\x3d\x3d\x3dchange detail is',nv_e.nv_detail.nv_current);nv_st.nv_tmpcurrent = nv_e.nv_detail.nv_current;nv_e.nv_instance.nv_callMethod('bindSwiperChange',nv_e)}),nv_animationFinish:(function (nv_e){var nv_st = nv_e.nv_instance.nv_getState();if (typeof nv_st.nv_tmpcurrent === 'undefined' || nv_st.nv_tmpcurrent === -1)return;;nv_console.nv_log('\x3d\x3d\x3d\x3danimation finish is',nv_st.nv_tmpcurrent);nv_st.nv_current = nv_st.nv_tmpcurrent;nv_st.nv_tmpcurrent = -1;nv_st.nv_continueCount = 1}),});return nv_module.nv_exports;}

var x=['./components/animation_broadcast/animation_broadcast.wxml','./components/bottom_loading/bottom_loading.wxml','./components/choose_media_panel/choose_media_panel.wxml','./components/comment_panel/comment_panel.wxml','./components/comment_text/comment_text.wxml','./components/comment_text_search/comment_text_search.wxml','./components/content_error/content_error.wxml','./components/dropdown_menu/dropdown_menu.wxml','./components/find_poi/find_poi.wxml','./components/image_loader/image_loader.wxml','./components/impression/impression.wxml','./components/impression_mark/impression_mark.wxml','./components/impression_me/impression_me.wxml','./components/impression_poi/impression_poi.wxml','./components/impression_search/impression_search.wxml','./components/impression_small/impression_small.wxml','./components/left_right_panel/left_right_panel.wxml','./components/like/like.wxml','./components/order_panel/order_panel.wxml','./components/page_observer/page_observer.wxml','./components/poi_card/poi_card.wxml','./components/poi_recommend/bottom_reason.wxml','./components/poi_recommend/poi_recommend.wxml','./bottom_reason.wxml','./components/select_panel/select_panel.wxml','./components/share_to_wechat/share_to_wechat.wxml','./components/skeleton_loading/skeleton_loading.wxml','./components/subcategory_panel/subcategory_panel.wxml','./components/user_access_permission/user_access_permission.wxml','./components/video_preview/video_preview.wxml','./pages/activity/activity.wxml','./pages/app_feedback/app_feedback.wxml','./pages/article_webview/article_webview.wxml','./pages/comment_feed/comment_feed.wxml','./pages/complain_page/complain_page.wxml','./pages/fans/fans.wxml','../following/user_item.wxml','./pages/feedback/feedback.wxml','./pages/following/following.wxml','user_item.wxml','./pages/following/user_item.wxml','./pages/friend_talk_about/friend_talk_about.wxml','./pages/impression_feed/impression_feed.wxml','./pages/index_tag/index_tag.wxml','./pages/kitchen/kitchen.wxml','./pages/me/me.wxml','./pages/mention/mention.wxml','tpl_mention_list.wxml','./pages/mention/tpl_mention_list.wxml','./pages/poi_comment_publish/poi_comment_publish.wxml','./pages/poi_detail/component_for_testing_purpose.wxml','./pages/poi_detail/poi_detail.wxml','poi_info_detail.wxml','poi_info_basic.wxml','article_item.wxml','reason_item.wxml','./pages/poi_detail/poi_info_basic.wxml','./pages/poi_detail/poi_info_detail.wxml','./pages/poi_detail/reason_item.wxml','./pages/poi_feedback/poi_feedback.wxml','./pages/rank_list_new/rank_list_new.wxml','tpl_poi_item.wxml','./pages/rank_list_new/tpl_poi_item.wxml','./pages/recommend_poi/recommend_poi.wxml','./pages/search_index/search_index.wxml','./pages/search_poi_list/search_poi_list.wxml','./pages/search_result/match_text/match_text.wxml','./pages/search_result/search_result.wxml','./pages/search_result_impression/search_result_impression.wxml','./pages/select_tag_list/select_tag_list.wxml','./pages/swipe_pic/swipe_pic.wxml','./pages/timeline/timeline.wxml','./tpl_waterfall.wxml','./pages/timeline/tpl_waterfall.wxml','./pages/user_profile/user_profile.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'view',['catchtap',0,'class',1],[],e,s,gg)
var fE=_mz(z,'view',['animation',2,'catchtap',1,'class',2],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
_(oD,fE)
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oH=_mz(z,'view',['catchtap',0,'catchtouchmove',1,'class',1],[],e,s,gg)
var cI=_mz(z,'view',['catchtap',3,'class',1,'style',2],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,6,e,s,gg)){oJ.wxVkey=1
var lK=_n('bottom-loading')
_rz(z,lK,'showBottomLoading',7,e,s,gg)
_(oJ,lK)
}
else{oJ.wxVkey=2
var aL=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',8,'class',1,'style',2],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,11,e,s,gg)){tM.wxVkey=1
var eN=_n('view')
_rz(z,eN,'class',12,e,s,gg)
var oP=_v()
_(eN,oP)
var xQ=function(fS,oR,cT,gg){
var oV=_v()
_(cT,oV)
if(_oz(z,17,fS,oR,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
return cT
}
oP.wxXCkey=2
_2z(z,15,xQ,e,s,gg,oP,'mainComment','mainCommentIndex','id')
var bO=_v()
_(eN,bO)
if(_oz(z,18,e,s,gg)){bO.wxVkey=1
var cW=_n('bottom-loading')
_rz(z,cW,'showBottomLoading',19,e,s,gg)
_(bO,cW)
}
bO.wxXCkey=1
bO.wxXCkey=3
_(tM,eN)
}
else{tM.wxVkey=2
}
tM.wxXCkey=1
tM.wxXCkey=3
_(oJ,aL)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
oJ.wxXCkey=3
_(oH,cI)
_(r,oH)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var t1=_v()
_(r,t1)
if(_oz(z,0,e,s,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var b3=_v()
_(r,b3)
if(_oz(z,0,e,s,gg)){b3.wxVkey=1
}
b3.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var x5=_v()
_(r,x5)
if(_oz(z,0,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(r,o6)
if(_oz(z,1,e,s,gg)){o6.wxVkey=1
var h9=_mz(z,'view',['catchtouchmove',2,'class',1],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,4,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,5,e,s,gg)){cAB.wxVkey=1
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(o6,h9)
}
var f7=_v()
_(r,f7)
if(_oz(z,6,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(r,c8)
if(_oz(z,7,e,s,gg)){c8.wxVkey=1
var oBB=_mz(z,'view',['catchtouchmove',8,'class',1],[],e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,10,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,11,e,s,gg)){aDB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
_(c8,oBB)
}
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
c8.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eFB=_n('view')
_rz(z,eFB,'class',0,e,s,gg)
var bGB=_mz(z,'view',['catchtouchmove',1,'class',1,'style',2],[],e,s,gg)
var oHB=_mz(z,'left-right-panel',['bindleftrightselect',4,'category',1,'class',2],[],e,s,gg)
_(bGB,oHB)
var xIB=_mz(z,'select-panel',['bindselect',7,'category',1,'class',2,'selectedId',3],[],e,s,gg)
_(bGB,xIB)
var oJB=_mz(z,'order-panel',['bindselect',11,'class',1,'options',2,'selectedId',3],[],e,s,gg)
_(bGB,oJB)
_(eFB,bGB)
var fKB=_v()
_(eFB,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_mz(z,'poi-recommend',['data-index',19,'poiData',1,'poiDataIndex',2],[],oNB,hMB,gg)
_(cOB,lQB)
return cOB
}
fKB.wxXCkey=4
_2z(z,17,cLB,e,s,gg,fKB,'poiItem','index','id')
var aRB=_n('bottom-loading')
_rz(z,aRB,'showBottomLoading',22,e,s,gg)
_(eFB,aRB)
_(r,eFB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eTB=_n('view')
_rz(z,eTB,'style',0,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,1,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(eTB,oVB)
if(_oz(z,2,e,s,gg)){oVB.wxVkey=1
var xWB=_mz(z,'image',['bindload',3,'class',1,'lazyLoad',2,'mode',3,'src',4,'style',5],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,9,e,s,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
_(oVB,xWB)
}
bUB.wxXCkey=1
oVB.wxXCkey=1
_(r,eTB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_mz(z,'view',['catchtap',0,'class',1,'data-commentid',1,'data-index',2],[],e,s,gg)
var o4B=_n('view')
_rz(z,o4B,'class',4,e,s,gg)
var a6B=_mz(z,'view',['catchtap',5,'class',1,'data-contact',2],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,8,e,s,gg)){t7B.wxVkey=1
}
t7B.wxXCkey=1
_(o4B,a6B)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,9,e,s,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
_(h1B,o4B)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,10,e,s,gg)){o2B.wxVkey=1
var e8B=_n('view')
_rz(z,e8B,'class',11,e,s,gg)
var o0B=_v()
_(e8B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_v()
_(cDC,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_mz(z,'view',['bindtap',20,'class',1,'data-media',2],[],lIC,oHC,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,23,lIC,oHC,gg)){bMC.wxVkey=1
var oNC=_mz(z,'video-preview',['media',24,'videoId',1,'videoStyle',2],[],lIC,oHC,gg)
_(bMC,oNC)
}
else{bMC.wxVkey=2
var xOC=_n('image-loader')
_rz(z,xOC,'media',27,lIC,oHC,gg)
_(bMC,xOC)
}
bMC.wxXCkey=1
bMC.wxXCkey=3
bMC.wxXCkey=3
_(aJC,eLC)
return aJC
}
oFC.wxXCkey=4
_2z(z,18,cGC,fCC,oBC,gg,oFC,'picList','picIndex','picIndex')
return cDC
}
o0B.wxXCkey=4
_2z(z,14,xAC,e,s,gg,o0B,'picItem','picItemIndex','picItemIndex')
var b9B=_v()
_(e8B,b9B)
if(_oz(z,28,e,s,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
_(o2B,e8B)
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,29,e,s,gg)){c3B.wxVkey=1
var oPC=_mz(z,'comment-text',['bindshowall',30,'content',1],[],e,s,gg)
_(c3B,oPC)
}
var fQC=_mz(z,'poi-card',['bindshareshake',32,'catchtap',1,'impressionId',2,'isUsingRealCurrentLocation',3,'poiData',4,'reportData',5,'showPoiGallery',6],[],e,s,gg)
_(h1B,fQC)
var cRC=_mz(z,'view',['catchtap',39,'class',1],[],e,s,gg)
var oTC=_mz(z,'like',['catchlikechange',41,'commentId',1,'data-index',2,'isLike',3,'likeCount',4,'reportData',5],[],e,s,gg)
_(cRC,oTC)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,47,e,s,gg)){hSC.wxVkey=1
var cUC=_mz(z,'share-to-wechat',['class',48,'impressionData',1,'isShareShake',2,'poiImage',3,'poiName',4],[],e,s,gg)
_(hSC,cUC)
}
hSC.wxXCkey=1
hSC.wxXCkey=3
_(h1B,cRC)
o2B.wxXCkey=1
o2B.wxXCkey=3
c3B.wxXCkey=1
c3B.wxXCkey=3
_(r,h1B)
var cZB=_v()
_(r,cZB)
if(_oz(z,53,e,s,gg)){cZB.wxVkey=1
var oVC=_mz(z,'comment-panel',['bindhidecommmentpanel',54,'commentCount',1,'impressionId',2,'reportData',3,'shouldAutoFocus',4],[],e,s,gg)
_(cZB,oVC)
}
cZB.wxXCkey=1
cZB.wxXCkey=3
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aXC=_n('view')
_rz(z,aXC,'class',0,e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,1,e,s,gg)){tYC.wxVkey=1
}
var eZC=_mz(z,'view',['catchtap',2,'class',1,'data-commentid',2,'data-index',3],[],e,s,gg)
var x3C=_mz(z,'view',['catchtap',6,'class',1],[],e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,8,e,s,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
_(eZC,x3C)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,9,e,s,gg)){b1C.wxVkey=1
var f5C=_mz(z,'view',['catchtap',10,'class',1],[],e,s,gg)
var h7C=_v()
_(f5C,h7C)
var o8C=function(o0C,c9C,lAD,gg){
var tCD=_v()
_(lAD,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_mz(z,'view',['bindtap',20,'class',1,'data-media',2],[],oFD,bED,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,23,oFD,bED,gg)){cJD.wxVkey=1
var hKD=_mz(z,'video-preview',['id',24,'media',1,'videoId',2],[],oFD,bED,gg)
_(cJD,hKD)
}
else{cJD.wxVkey=2
var oLD=_n('image-loader')
_rz(z,oLD,'media',27,oFD,bED,gg)
_(cJD,oLD)
}
cJD.wxXCkey=1
cJD.wxXCkey=3
cJD.wxXCkey=3
_(xGD,fID)
return xGD
}
tCD.wxXCkey=4
_2z(z,18,eDD,o0C,c9C,gg,tCD,'picList','picIndex','picIndex')
return lAD
}
h7C.wxXCkey=4
_2z(z,14,o8C,e,s,gg,h7C,'picItem','picItemIndex','picItemIndex')
var c6C=_v()
_(f5C,c6C)
if(_oz(z,28,e,s,gg)){c6C.wxVkey=1
}
c6C.wxXCkey=1
_(b1C,f5C)
}
var o2C=_v()
_(eZC,o2C)
if(_oz(z,29,e,s,gg)){o2C.wxVkey=1
var cMD=_mz(z,'comment-text',['content',30,'externalClass',1],[],e,s,gg)
_(o2C,cMD)
}
b1C.wxXCkey=1
b1C.wxXCkey=3
o2C.wxXCkey=1
o2C.wxXCkey=3
_(aXC,eZC)
tYC.wxXCkey=1
_(r,aXC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lOD=_n('view')
var tQD=_mz(z,'view',['catchtap',0,'class',1,'data-commentid',1,'data-index',2],[],e,s,gg)
var xUD=_n('view')
_rz(z,xUD,'class',4,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,5,e,s,gg)){oVD.wxVkey=1
}
var fWD=_v()
_(xUD,fWD)
if(_oz(z,6,e,s,gg)){fWD.wxVkey=1
}
var cXD=_v()
_(xUD,cXD)
if(_oz(z,7,e,s,gg)){cXD.wxVkey=1
}
oVD.wxXCkey=1
fWD.wxXCkey=1
cXD.wxXCkey=1
_(tQD,xUD)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,8,e,s,gg)){eRD.wxVkey=1
var hYD=_n('view')
_rz(z,hYD,'class',9,e,s,gg)
var c1D=_v()
_(hYD,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_v()
_(t5D,b7D)
var o8D=function(o0D,x9D,fAE,gg){
var hCE=_mz(z,'view',['bindtap',18,'class',1,'data-media',2],[],o0D,x9D,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,21,o0D,x9D,gg)){oDE.wxVkey=1
var cEE=_mz(z,'video-preview',['id',22,'media',1,'videoId',2],[],o0D,x9D,gg)
_(oDE,cEE)
}
else{oDE.wxVkey=2
var oFE=_n('image-loader')
_rz(z,oFE,'media',25,o0D,x9D,gg)
_(oDE,oFE)
}
oDE.wxXCkey=1
oDE.wxXCkey=3
oDE.wxXCkey=3
_(fAE,hCE)
return fAE
}
b7D.wxXCkey=4
_2z(z,16,o8D,a4D,l3D,gg,b7D,'picList','picIndex','picIndex')
return t5D
}
c1D.wxXCkey=4
_2z(z,12,o2D,e,s,gg,c1D,'picItem','picItemIndex','picItemIndex')
var oZD=_v()
_(hYD,oZD)
if(_oz(z,26,e,s,gg)){oZD.wxVkey=1
}
oZD.wxXCkey=1
_(eRD,hYD)
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,27,e,s,gg)){bSD.wxVkey=1
var lGE=_mz(z,'comment-text',['content',28,'customerFoldLines',1,'externalClass',2],[],e,s,gg)
_(bSD,lGE)
}
var oTD=_v()
_(tQD,oTD)
if(_oz(z,31,e,s,gg)){oTD.wxVkey=1
}
var aHE=_mz(z,'view',['catchtap',32,'class',1],[],e,s,gg)
var eJE=_mz(z,'like',['catchlikechange',34,'commentId',1,'data-index',2,'isLike',3,'likeCount',4,'reportData',5],[],e,s,gg)
_(aHE,eJE)
var tIE=_v()
_(aHE,tIE)
if(_oz(z,40,e,s,gg)){tIE.wxVkey=1
var bKE=_mz(z,'share-to-wechat',['class',41,'impressionData',1,'poiImage',2,'poiName',3],[],e,s,gg)
_(tIE,bKE)
}
tIE.wxXCkey=1
tIE.wxXCkey=3
_(tQD,aHE)
eRD.wxXCkey=1
eRD.wxXCkey=3
bSD.wxXCkey=1
bSD.wxXCkey=3
oTD.wxXCkey=1
_(lOD,tQD)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,45,e,s,gg)){aPD.wxVkey=1
var oLE=_mz(z,'comment-panel',['bindhidecommmentpanel',46,'commentCount',1,'impressionId',2,'reportData',3,'shouldAutoFocus',4],[],e,s,gg)
_(aPD,oLE)
}
aPD.wxXCkey=1
aPD.wxXCkey=3
_(r,lOD)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oNE=_n('view')
var cPE=_mz(z,'view',['catchtap',0,'class',1,'data-commentid',1,'data-index',2],[],e,s,gg)
var cSE=_n('view')
_rz(z,cSE,'class',4,e,s,gg)
var lUE=_mz(z,'view',['catchtap',5,'class',1,'data-contact',2],[],e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,8,e,s,gg)){aVE.wxVkey=1
}
aVE.wxXCkey=1
_(cSE,lUE)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,9,e,s,gg)){oTE.wxVkey=1
}
oTE.wxXCkey=1
_(cPE,cSE)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,10,e,s,gg)){hQE.wxVkey=1
var tWE=_v()
_(hQE,tWE)
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_v()
_(x1E,f3E)
var c4E=function(o6E,h5E,c7E,gg){
var l9E=_mz(z,'view',['bindtap',19,'class',1,'data-media',2],[],o6E,h5E,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,22,o6E,h5E,gg)){a0E.wxVkey=1
var eBF=_mz(z,'video-preview',['id',23,'media',1,'videoId',2],[],o6E,h5E,gg)
_(a0E,eBF)
}
else{a0E.wxVkey=2
var bCF=_n('image-loader')
_rz(z,bCF,'media',26,o6E,h5E,gg)
_(a0E,bCF)
}
var tAF=_v()
_(l9E,tAF)
if(_oz(z,27,o6E,h5E,gg)){tAF.wxVkey=1
}
a0E.wxXCkey=1
a0E.wxXCkey=3
a0E.wxXCkey=3
tAF.wxXCkey=1
_(c7E,l9E)
return c7E
}
f3E.wxXCkey=4
_2z(z,17,c4E,oZE,bYE,gg,f3E,'picList','picIndex','picIndex')
return x1E
}
tWE.wxXCkey=4
_2z(z,13,eXE,e,s,gg,tWE,'picItem','picItemIndex','picItemIndex')
}
var oRE=_v()
_(cPE,oRE)
if(_oz(z,28,e,s,gg)){oRE.wxVkey=1
var oDF=_n('comment-text')
_rz(z,oDF,'content',29,e,s,gg)
_(oRE,oDF)
}
var xEF=_mz(z,'view',['catchtap',30,'class',1],[],e,s,gg)
var fGF=_mz(z,'like',['catchlikechange',32,'commentId',1,'data-index',2,'isLike',3,'likeCount',4,'reportData',5],[],e,s,gg)
_(xEF,fGF)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,38,e,s,gg)){oFF.wxVkey=1
var cHF=_mz(z,'share-to-wechat',['class',39,'impressionData',1,'poiImage',2,'poiName',3],[],e,s,gg)
_(oFF,cHF)
}
oFF.wxXCkey=1
oFF.wxXCkey=3
_(cPE,xEF)
hQE.wxXCkey=1
hQE.wxXCkey=3
oRE.wxXCkey=1
oRE.wxXCkey=3
_(oNE,cPE)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,43,e,s,gg)){fOE.wxVkey=1
var hIF=_mz(z,'comment-panel',['bindhidecommmentpanel',44,'commentCount',1,'impressionId',2,'reportData',3,'shouldAutoFocus',4],[],e,s,gg)
_(fOE,hIF)
}
fOE.wxXCkey=1
fOE.wxXCkey=3
_(r,oNE)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cKF=_n('view')
var lMF=_mz(z,'view',['catchtap',0,'class',1,'data-commentid',1,'data-index',2],[],e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',4,e,s,gg)
var xSF=_mz(z,'view',['catchtap',5,'class',1,'data-contact',2],[],e,s,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,8,e,s,gg)){oTF.wxVkey=1
}
oTF.wxXCkey=1
_(bQF,xSF)
var oRF=_v()
_(bQF,oRF)
if(_oz(z,9,e,s,gg)){oRF.wxVkey=1
}
oRF.wxXCkey=1
_(lMF,bQF)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,10,e,s,gg)){aNF.wxVkey=1
var fUF=_n('view')
_rz(z,fUF,'class',11,e,s,gg)
var hWF=_v()
_(fUF,hWF)
var oXF=function(oZF,cYF,l1F,gg){
var t3F=_v()
_(l1F,t3F)
var e4F=function(o6F,b5F,x7F,gg){
var f9F=_mz(z,'view',['bindtap',20,'class',1,'data-media',2],[],o6F,b5F,gg)
var c0F=_v()
_(f9F,c0F)
if(_oz(z,23,o6F,b5F,gg)){c0F.wxVkey=1
var hAG=_mz(z,'video-preview',['id',24,'media',1,'videoId',2],[],o6F,b5F,gg)
_(c0F,hAG)
}
else{c0F.wxVkey=2
var oBG=_n('image-loader')
_rz(z,oBG,'media',27,o6F,b5F,gg)
_(c0F,oBG)
}
c0F.wxXCkey=1
c0F.wxXCkey=3
c0F.wxXCkey=3
_(x7F,f9F)
return x7F
}
t3F.wxXCkey=4
_2z(z,18,e4F,oZF,cYF,gg,t3F,'picList','picIndex','picIndex')
return l1F
}
hWF.wxXCkey=4
_2z(z,14,oXF,e,s,gg,hWF,'picItem','picItemIndex','picItemIndex')
var cVF=_v()
_(fUF,cVF)
if(_oz(z,28,e,s,gg)){cVF.wxVkey=1
}
cVF.wxXCkey=1
_(aNF,fUF)
}
var tOF=_v()
_(lMF,tOF)
if(_oz(z,29,e,s,gg)){tOF.wxVkey=1
var cCG=_mz(z,'comment-text-search',['content',30,'hitInfo',1],[],e,s,gg)
_(tOF,cCG)
}
var ePF=_v()
_(lMF,ePF)
if(_oz(z,32,e,s,gg)){ePF.wxVkey=1
}
var oDG=_mz(z,'poi-card',['catchtap',33,'impressionId',1,'isUsingRealCurrentLocation',2,'poiData',3,'reportData',4,'showPoiGallery',5],[],e,s,gg)
_(lMF,oDG)
var lEG=_mz(z,'view',['catchtap',39,'class',1],[],e,s,gg)
var tGG=_mz(z,'like',['catchlikechange',41,'commentId',1,'data-index',2,'isLike',3,'likeCount',4,'reportData',5],[],e,s,gg)
_(lEG,tGG)
var aFG=_v()
_(lEG,aFG)
if(_oz(z,47,e,s,gg)){aFG.wxVkey=1
var eHG=_mz(z,'share-to-wechat',['class',48,'impressionData',1,'poiImage',2,'poiName',3],[],e,s,gg)
_(aFG,eHG)
}
aFG.wxXCkey=1
aFG.wxXCkey=3
_(lMF,lEG)
aNF.wxXCkey=1
aNF.wxXCkey=3
tOF.wxXCkey=1
tOF.wxXCkey=3
ePF.wxXCkey=1
_(cKF,lMF)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,52,e,s,gg)){oLF.wxVkey=1
var bIG=_mz(z,'comment-panel',['bindhidecommmentpanel',53,'commentCount',1,'impressionId',2,'reportData',3,'shouldAutoFocus',4],[],e,s,gg)
_(oLF,bIG)
}
oLF.wxXCkey=1
oLF.wxXCkey=3
_(r,cKF)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var xKG=_mz(z,'view',['catchtap',0,'class',1,'data-commentid',1,'data-index',2],[],e,s,gg)
var oLG=_v()
_(xKG,oLG)
if(_oz(z,4,e,s,gg)){oLG.wxVkey=1
var cNG=_n('view')
_rz(z,cNG,'class',5,e,s,gg)
var hOG=_v()
_(cNG,hOG)
if(_oz(z,6,e,s,gg)){hOG.wxVkey=1
var oPG=_mz(z,'video-preview',['id',7,'media',1,'videoId',2,'videoStyle',3],[],e,s,gg)
_(hOG,oPG)
}
else{hOG.wxVkey=2
var cQG=_n('image-loader')
_rz(z,cQG,'media',11,e,s,gg)
_(hOG,cQG)
}
hOG.wxXCkey=1
hOG.wxXCkey=3
hOG.wxXCkey=3
_(oLG,cNG)
}
var fMG=_v()
_(xKG,fMG)
if(_oz(z,12,e,s,gg)){fMG.wxVkey=1
}
var oRG=_mz(z,'like',['commentId',13,'data-index',1,'isLike',2,'likeCount',3,'reportData',4],[],e,s,gg)
_(xKG,oRG)
oLG.wxXCkey=1
oLG.wxXCkey=3
fMG.wxXCkey=1
_(r,xKG)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var bWG=_n('slot')
_(r,bWG)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var xYG=_n('view')
_rz(z,xYG,'class',0,e,s,gg)
var oZG=_v()
_(xYG,oZG)
if(_oz(z,1,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(xYG,f1G)
if(_oz(z,2,e,s,gg)){f1G.wxVkey=1
var c2G=_v()
_(f1G,c2G)
var h3G=function(c5G,o4G,o6G,gg){
var a8G=_mz(z,'image-loader',['class',7,'media',1],[],c5G,o4G,gg)
_(o6G,a8G)
return o6G
}
c2G.wxXCkey=4
_2z(z,5,h3G,e,s,gg,c2G,'picItem','picItemIndex','picItemIndex')
}
oZG.wxXCkey=1
f1G.wxXCkey=1
f1G.wxXCkey=3
_(r,xYG)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
d_[x[21]]["bottom-reason"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[21]+':bottom-reason'
r.wxVkey=b
gg.f=$gdc(f_["./components/poi_recommend/bottom_reason.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var bAH=e_[x[22]].i
_ai(bAH,x[23],e_,x[22],1,1)
var oBH=_n('view')
_rz(z,oBH,'class',0,e,s,gg)
var oDH=_mz(z,'view',['catchtap',1,'data-index',1],[],e,s,gg)
var fEH=_mz(z,'view',['catchtap',3,'class',1],[],e,s,gg)
var cFH=_v()
_(fEH,cFH)
if(_oz(z,5,e,s,gg)){cFH.wxVkey=1
}
cFH.wxXCkey=1
_(oDH,fEH)
_(oBH,oDH)
var xCH=_v()
_(oBH,xCH)
if(_oz(z,6,e,s,gg)){xCH.wxVkey=1
var hGH=_v()
_(xCH,hGH)
var oHH=_oz(z,8,e,s,gg)
var cIH=_gd(x[22],oHH,e_,d_)
if(cIH){
var oJH=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hGH.wxXCkey=3
cIH(oJH,oJH,hGH,gg)
gg.f=cur_globalf
}
else _w(oHH,x[22],21,22)
}
xCH.wxXCkey=1
_(r,oBH)
bAH.pop()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[24]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[25]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[26]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[27]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oPH=_v()
_(r,oPH)
if(_oz(z,0,e,s,gg)){oPH.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){oPH.wxVkey=2
var xQH=_n('view')
_rz(z,xQH,'class',2,e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,3,e,s,gg)){oRH.wxVkey=1
}
var fSH=_v()
_(xQH,fSH)
if(_oz(z,4,e,s,gg)){fSH.wxVkey=1
}
var cTH=_v()
_(xQH,cTH)
if(_oz(z,5,e,s,gg)){cTH.wxVkey=1
}
var hUH=_v()
_(xQH,hUH)
if(_oz(z,6,e,s,gg)){hUH.wxVkey=1
}
var oVH=_v()
_(xQH,oVH)
if(_oz(z,7,e,s,gg)){oVH.wxVkey=1
}
oRH.wxXCkey=1
fSH.wxXCkey=1
cTH.wxXCkey=1
hUH.wxXCkey=1
oVH.wxXCkey=1
_(oPH,xQH)
}
else if(_oz(z,8,e,s,gg)){oPH.wxVkey=3
var cWH=_v()
_(oPH,cWH)
if(_oz(z,9,e,s,gg)){cWH.wxVkey=1
}
cWH.wxXCkey=1
}
else{oPH.wxVkey=4
}
oPH.wxXCkey=1
return r
}
e_[x[28]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var lYH=_v()
_(r,lYH)
if(_oz(z,0,e,s,gg)){lYH.wxVkey=1
}
lYH.wxXCkey=1
return r
}
e_[x[29]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var t1H=_n('view')
_rz(z,t1H,'class',0,e,s,gg)
var e2H=_n('view')
_rz(z,e2H,'class',1,e,s,gg)
var b3H=_v()
_(e2H,b3H)
if(_oz(z,2,e,s,gg)){b3H.wxVkey=1
}
var o4H=_v()
_(e2H,o4H)
if(_oz(z,3,e,s,gg)){o4H.wxVkey=1
var x5H=_n('view')
_rz(z,x5H,'class',4,e,s,gg)
var o6H=_v()
_(x5H,o6H)
if(_oz(z,5,e,s,gg)){o6H.wxVkey=1
}
var f7H=_n('view')
_rz(z,f7H,'class',6,e,s,gg)
var c8H=_v()
_(f7H,c8H)
if(_oz(z,7,e,s,gg)){c8H.wxVkey=1
}
var h9H=_v()
_(f7H,h9H)
if(_oz(z,8,e,s,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(f7H,o0H)
if(_oz(z,9,e,s,gg)){o0H.wxVkey=1
}
var cAI=_v()
_(f7H,cAI)
if(_oz(z,10,e,s,gg)){cAI.wxVkey=1
}
c8H.wxXCkey=1
h9H.wxXCkey=1
o0H.wxXCkey=1
cAI.wxXCkey=1
_(x5H,f7H)
o6H.wxXCkey=1
_(o4H,x5H)
}
b3H.wxXCkey=1
o4H.wxXCkey=1
_(t1H,e2H)
var oBI=_v()
_(t1H,oBI)
var lCI=function(tEI,aDI,eFI,gg){
var oHI=_v()
_(eFI,oHI)
if(_oz(z,15,tEI,aDI,gg)){oHI.wxVkey=1
var xII=_mz(z,'impression',['class',16,'data-index',1,'impressionData',2,'impressionDataIndex',3,'impressionLayoutMaxPic',4],[],tEI,aDI,gg)
_(oHI,xII)
}
oHI.wxXCkey=1
oHI.wxXCkey=3
return eFI
}
oBI.wxXCkey=4
_2z(z,13,lCI,e,s,gg,oBI,'impression','index','unqiue')
var oJI=_n('bottom-loading')
_rz(z,oJI,'showBottomLoading',21,e,s,gg)
_(t1H,oJI)
_(r,t1H)
return r
}
e_[x[30]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var cLI=_v()
_(r,cLI)
if(_oz(z,0,e,s,gg)){cLI.wxVkey=1
}
cLI.wxXCkey=1
return r
}
e_[x[31]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[32]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var cOI=_v()
_(r,cOI)
var oPI=function(aRI,lQI,tSI,gg){
var bUI=_v()
_(tSI,bUI)
if(_oz(z,4,aRI,lQI,gg)){bUI.wxVkey=1
var oVI=_mz(z,'impression-poi',['class',5,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],aRI,lQI,gg)
_(bUI,oVI)
}
bUI.wxXCkey=1
bUI.wxXCkey=3
return tSI
}
cOI.wxXCkey=4
_2z(z,2,oPI,e,s,gg,cOI,'impressionData','index','unqiue')
var xWI=_n('bottom-loading')
_rz(z,xWI,'showBottomLoading',9,e,s,gg)
_(r,xWI)
return r
}
e_[x[33]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var fYI=_n('view')
var h1I=_n('radio-group')
_rz(z,h1I,'bindchange',0,e,s,gg)
var o2I=_v()
_(h1I,o2I)
var c3I=function(l5I,o4I,a6I,gg){
var e8I=_n('view')
_rz(z,e8I,'class',3,l5I,o4I,gg)
var b9I=_v()
_(e8I,b9I)
if(_oz(z,4,l5I,o4I,gg)){b9I.wxVkey=1
}
var o0I=_v()
_(e8I,o0I)
if(_oz(z,5,l5I,o4I,gg)){o0I.wxVkey=1
}
b9I.wxXCkey=1
o0I.wxXCkey=1
_(a6I,e8I)
return a6I
}
o2I.wxXCkey=2
_2z(z,1,c3I,e,s,gg,o2I,'item','index','value')
_(fYI,h1I)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,6,e,s,gg)){cZI.wxVkey=1
}
cZI.wxXCkey=1
_(r,fYI)
return r
}
e_[x[34]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oBJ=e_[x[35]].i
_ai(oBJ,x[36],e_,x[35],1,1)
var fCJ=_v()
_(r,fCJ)
if(_oz(z,0,e,s,gg)){fCJ.wxVkey=1
var hEJ=_v()
_(fCJ,hEJ)
var oFJ=_oz(z,2,e,s,gg)
var cGJ=_gd(x[35],oFJ,e_,d_)
if(cGJ){
var oHJ=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
hEJ.wxXCkey=3
cGJ(oHJ,oHJ,hEJ,gg)
gg.f=cur_globalf
}
else _w(oFJ,x[35],3,18)
}
var cDJ=_v()
_(r,cDJ)
if(_oz(z,3,e,s,gg)){cDJ.wxVkey=1
}
var lIJ=_n('bottom-loading')
_rz(z,lIJ,'showBottomLoading',4,e,s,gg)
_(r,lIJ)
fCJ.wxXCkey=1
cDJ.wxXCkey=1
oBJ.pop()
return r
}
e_[x[35]]={f:m34,j:[],i:[],ti:[x[36]],ic:[]}
d_[x[37]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[37]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var eLJ=e_[x[38]].i
_ai(eLJ,x[39],e_,x[38],1,1)
var bMJ=_v()
_(r,bMJ)
if(_oz(z,0,e,s,gg)){bMJ.wxVkey=1
var xOJ=_v()
_(bMJ,xOJ)
var oPJ=_oz(z,2,e,s,gg)
var fQJ=_gd(x[38],oPJ,e_,d_)
if(fQJ){
var cRJ=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
xOJ.wxXCkey=3
fQJ(cRJ,cRJ,xOJ,gg)
gg.f=cur_globalf
}
else _w(oPJ,x[38],3,18)
}
var oNJ=_v()
_(r,oNJ)
if(_oz(z,3,e,s,gg)){oNJ.wxVkey=1
}
var hSJ=_n('bottom-loading')
_rz(z,hSJ,'showBottomLoading',4,e,s,gg)
_(r,hSJ)
bMJ.wxXCkey=1
oNJ.wxXCkey=1
eLJ.pop()
return r
}
e_[x[38]]={f:m36,j:[],i:[],ti:[x[39]],ic:[]}
d_[x[40]]={}
d_[x[40]]["user-item"]=function(e,s,r,gg){
var z=gz$gwx_38()
var b=x[40]+':user-item'
r.wxVkey=b
gg.f=$gdc(f_["./pages/following/user_item.wxml"],"",1)
if(p_[b]){_wl(b,x[40]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',5,'class',1,'data-index',2],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,8,fE,oD,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,9,fE,oD,gg)){oJ.wxVkey=1
}
var lK=_n('view')
_rz(z,lK,'class',10,fE,oD,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,11,fE,oD,gg)){aL.wxVkey=1
var bO=_v()
_(aL,bO)
if(_oz(z,12,fE,oD,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,13,fE,oD,gg)){tM.wxVkey=1
}
var eN=_v()
_(lK,eN)
if(_oz(z,14,fE,oD,gg)){eN.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
_(oH,lK)
cI.wxXCkey=1
oJ.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','id')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[40]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var oVJ=_n('view')
_rz(z,oVJ,'class',0,e,s,gg)
var lWJ=_mz(z,'view',['catchtouchmove',1,'class',1],[],e,s,gg)
var aXJ=_mz(z,'left-right-panel',['bindleftrightselect',3,'category',1,'class',2,'selectedLeftId',3,'selectedRightId',4],[],e,s,gg)
_(lWJ,aXJ)
var tYJ=_mz(z,'select-panel',['bindselect',8,'category',1,'class',2,'selectedId',3],[],e,s,gg)
_(lWJ,tYJ)
var eZJ=_mz(z,'select-panel',['bindselect',12,'category',1,'class',2],[],e,s,gg)
_(lWJ,eZJ)
var b1J=_mz(z,'order-panel',['bindselect',15,'class',1,'options',2,'selectedId',3],[],e,s,gg)
_(lWJ,b1J)
_(oVJ,lWJ)
var o2J=_v()
_(oVJ,o2J)
var x3J=function(f5J,o4J,c6J,gg){
var o8J=_mz(z,'poi_recommend',['data-index',23,'poiData',1,'poiDataIndex',2],[],f5J,o4J,gg)
_(c6J,o8J)
return c6J
}
o2J.wxXCkey=4
_2z(z,21,x3J,e,s,gg,o2J,'poiItem','index','id')
var c9J=_n('bottom-loading')
_rz(z,c9J,'showBottomLoading',26,e,s,gg)
_(oVJ,c9J)
_(r,oVJ)
return r
}
e_[x[41]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var lAK=_v()
_(r,lAK)
if(_oz(z,0,e,s,gg)){lAK.wxVkey=1
var aBK=_v()
_(lAK,aBK)
if(_oz(z,1,e,s,gg)){aBK.wxVkey=1
var eDK=_n('view')
_rz(z,eDK,'class',2,e,s,gg)
var xGK=_n('view')
_rz(z,xGK,'class',3,e,s,gg)
var oHK=_v()
_(xGK,oHK)
if(_oz(z,4,e,s,gg)){oHK.wxVkey=1
var fIK=_v()
_(oHK,fIK)
if(_oz(z,5,e,s,gg)){fIK.wxVkey=1
}
var cJK=_v()
_(oHK,cJK)
if(_oz(z,6,e,s,gg)){cJK.wxVkey=1
}
fIK.wxXCkey=1
cJK.wxXCkey=1
}
else{oHK.wxVkey=2
var hKK=_v()
_(oHK,hKK)
if(_oz(z,7,e,s,gg)){hKK.wxVkey=1
}
hKK.wxXCkey=1
}
var oLK=_n('view')
_rz(z,oLK,'class',8,e,s,gg)
var oNK=_mz(z,'view',['catchtap',9,'class',1,'data-contact',2],[],e,s,gg)
var lOK=_v()
_(oNK,lOK)
if(_oz(z,12,e,s,gg)){lOK.wxVkey=1
}
lOK.wxXCkey=1
_(oLK,oNK)
var cMK=_v()
_(oLK,cMK)
if(_oz(z,13,e,s,gg)){cMK.wxVkey=1
}
cMK.wxXCkey=1
_(xGK,oLK)
var aPK=_mz(z,'view',['catchtap',14,'class',1,'data-id',2],[],e,s,gg)
var tQK=_v()
_(aPK,tQK)
if(_oz(z,17,e,s,gg)){tQK.wxVkey=1
}
tQK.wxXCkey=1
_(xGK,aPK)
oHK.wxXCkey=1
_(eDK,xGK)
var bEK=_v()
_(eDK,bEK)
if(_oz(z,18,e,s,gg)){bEK.wxVkey=1
var eRK=_n('view')
_rz(z,eRK,'class',19,e,s,gg)
var oTK=_n('view')
_rz(z,oTK,'class',20,e,s,gg)
var oVK=_mz(z,'like',['catchlikechange',21,'commentId',1,'isLike',2,'likeCount',3,'reportData',4],[],e,s,gg)
_(oTK,oVK)
var xUK=_v()
_(oTK,xUK)
if(_oz(z,26,e,s,gg)){xUK.wxVkey=1
}
xUK.wxXCkey=1
_(eRK,oTK)
var fWK=_v()
_(eRK,fWK)
var cXK=function(oZK,hYK,c1K,gg){
var l3K=_v()
_(c1K,l3K)
if(_oz(z,31,oZK,hYK,gg)){l3K.wxVkey=1
}
l3K.wxXCkey=1
return c1K
}
fWK.wxXCkey=2
_2z(z,29,cXK,e,s,gg,fWK,'mainComment','mainCommentIndex','id')
var bSK=_v()
_(eRK,bSK)
if(_oz(z,32,e,s,gg)){bSK.wxVkey=1
var a4K=_n('bottom-loading')
_rz(z,a4K,'showBottomLoading',33,e,s,gg)
_(bSK,a4K)
}
bSK.wxXCkey=1
bSK.wxXCkey=3
_(bEK,eRK)
}
else{bEK.wxVkey=2
var t5K=_mz(z,'like',['catchlikechange',34,'commentId',1,'isLike',2,'likeCount',3,'reportData',4],[],e,s,gg)
_(bEK,t5K)
}
var oFK=_v()
_(eDK,oFK)
if(_oz(z,39,e,s,gg)){oFK.wxVkey=1
}
bEK.wxXCkey=1
bEK.wxXCkey=3
bEK.wxXCkey=3
oFK.wxXCkey=1
_(aBK,eDK)
}
var tCK=_v()
_(lAK,tCK)
if(_oz(z,40,e,s,gg)){tCK.wxVkey=1
var e6K=_mz(z,'content-error',['showLink',41,'text',1],[],e,s,gg)
_(tCK,e6K)
}
aBK.wxXCkey=1
aBK.wxXCkey=3
tCK.wxXCkey=1
tCK.wxXCkey=3
}
else{lAK.wxVkey=2
var b7K=_n('user-access-permission')
_(lAK,b7K)
}
lAK.wxXCkey=1
lAK.wxXCkey=3
lAK.wxXCkey=3
return r
}
e_[x[42]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var x9K=_n('view')
var o0K=_v()
_(x9K,o0K)
if(_oz(z,0,e,s,gg)){o0K.wxVkey=1
var cBL=_n('animation-broadcast')
_rz(z,cBL,'textArray',1,e,s,gg)
_(o0K,cBL)
}
var hCL=_v()
_(x9K,hCL)
var oDL=function(oFL,cEL,lGL,gg){
var tIL=_v()
_(lGL,tIL)
if(_oz(z,6,oFL,cEL,gg)){tIL.wxVkey=1
var eJL=_mz(z,'impression',['class',7,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],oFL,cEL,gg)
_(tIL,eJL)
}
tIL.wxXCkey=1
tIL.wxXCkey=3
return lGL
}
hCL.wxXCkey=4
_2z(z,4,oDL,e,s,gg,hCL,'impression','index','unqiue')
var bKL=_n('bottom-loading')
_rz(z,bKL,'showBottomLoading',11,e,s,gg)
_(x9K,bKL)
var fAL=_v()
_(x9K,fAL)
if(_oz(z,12,e,s,gg)){fAL.wxVkey=1
}
o0K.wxXCkey=1
o0K.wxXCkey=3
fAL.wxXCkey=1
_(r,x9K)
return r
}
e_[x[43]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var xML=_n('view')
_rz(z,xML,'class',0,e,s,gg)
var oNL=_v()
_(xML,oNL)
if(_oz(z,1,e,s,gg)){oNL.wxVkey=1
}
var fOL=_v()
_(xML,fOL)
if(_oz(z,2,e,s,gg)){fOL.wxVkey=1
}
var cPL=_n('view')
_rz(z,cPL,'class',3,e,s,gg)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,4,e,s,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(cPL,oRL)
if(_oz(z,5,e,s,gg)){oRL.wxVkey=1
}
hQL.wxXCkey=1
oRL.wxXCkey=1
_(xML,cPL)
oNL.wxXCkey=1
fOL.wxXCkey=1
_(r,xML)
return r
}
e_[x[44]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var oTL=_n('view')
_rz(z,oTL,'class',0,e,s,gg)
var lUL=_v()
_(oTL,lUL)
if(_oz(z,1,e,s,gg)){lUL.wxVkey=1
}
var aVL=_v()
_(oTL,aVL)
if(_oz(z,2,e,s,gg)){aVL.wxVkey=1
}
var tWL=_v()
_(oTL,tWL)
if(_oz(z,3,e,s,gg)){tWL.wxVkey=1
}
lUL.wxXCkey=1
aVL.wxXCkey=1
tWL.wxXCkey=1
_(r,oTL)
var eXL=_n('view')
_rz(z,eXL,'class',4,e,s,gg)
var bYL=_v()
_(eXL,bYL)
if(_oz(z,5,e,s,gg)){bYL.wxVkey=1
var oZL=_v()
_(bYL,oZL)
if(_oz(z,6,e,s,gg)){oZL.wxVkey=1
}
else{oZL.wxVkey=2
var x1L=_v()
_(oZL,x1L)
var o2L=function(c4L,f3L,h5L,gg){
var c7L=_v()
_(h5L,c7L)
if(_oz(z,11,c4L,f3L,gg)){c7L.wxVkey=1
var o8L=_mz(z,'impression-me',['bindontapmoreoptions',12,'class',1,'data-index',2,'impressionData',3,'impressionDataIndex',4],[],c4L,f3L,gg)
_(c7L,o8L)
}
c7L.wxXCkey=1
c7L.wxXCkey=3
return h5L
}
x1L.wxXCkey=4
_2z(z,9,o2L,e,s,gg,x1L,'impressionData','index','unqiue')
var l9L=_n('bottom-loading')
_rz(z,l9L,'showBottomLoading',17,e,s,gg)
_(oZL,l9L)
}
oZL.wxXCkey=1
oZL.wxXCkey=3
}
else if(_oz(z,18,e,s,gg)){bYL.wxVkey=2
var a0L=_v()
_(bYL,a0L)
if(_oz(z,19,e,s,gg)){a0L.wxVkey=1
}
else{a0L.wxVkey=2
var tAM=_mz(z,'dropdown-menu',['bindselect',20,'options',1,'selectedId',2,'styleType',3],[],e,s,gg)
_(a0L,tAM)
var eBM=_v()
_(a0L,eBM)
var bCM=function(xEM,oDM,oFM,gg){
var cHM=_mz(z,'view',['bindtap',28,'class',1,'data-index',2],[],xEM,oDM,gg)
var hIM=_mz(z,'view',['class',31,'hoverClass',1],[],xEM,oDM,gg)
var cKM=_n('view')
_rz(z,cKM,'class',33,xEM,oDM,gg)
var oLM=_v()
_(cKM,oLM)
if(_oz(z,34,xEM,oDM,gg)){oLM.wxVkey=1
}
var lMM=_v()
_(cKM,lMM)
if(_oz(z,35,xEM,oDM,gg)){lMM.wxVkey=1
}
oLM.wxXCkey=1
lMM.wxXCkey=1
_(hIM,cKM)
var oJM=_v()
_(hIM,oJM)
if(_oz(z,36,xEM,oDM,gg)){oJM.wxVkey=1
}
oJM.wxXCkey=1
_(cHM,hIM)
_(oFM,cHM)
return oFM
}
eBM.wxXCkey=2
_2z(z,26,bCM,e,s,gg,eBM,'item','index','id')
var aNM=_n('bottom-loading')
_rz(z,aNM,'showBottomLoading',37,e,s,gg)
_(a0L,aNM)
}
a0L.wxXCkey=1
a0L.wxXCkey=3
}
bYL.wxXCkey=1
bYL.wxXCkey=3
bYL.wxXCkey=3
_(r,eXL)
return r
}
e_[x[45]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var ePM=e_[x[46]].i
_ai(ePM,x[47],e_,x[46],1,1)
var bQM=_v()
_(r,bQM)
if(_oz(z,0,e,s,gg)){bQM.wxVkey=1
}
else{bQM.wxVkey=2
var oRM=_v()
_(bQM,oRM)
if(_oz(z,1,e,s,gg)){oRM.wxVkey=1
}
var oTM=_v()
_(bQM,oTM)
var fUM=_oz(z,3,e,s,gg)
var cVM=_gd(x[46],fUM,e_,d_)
if(cVM){
var hWM=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oTM.wxXCkey=3
cVM(hWM,hWM,oTM,gg)
gg.f=cur_globalf
}
else _w(fUM,x[46],12,18)
var xSM=_v()
_(bQM,xSM)
if(_oz(z,4,e,s,gg)){xSM.wxVkey=1
}
var oXM=_v()
_(bQM,oXM)
var cYM=_oz(z,6,e,s,gg)
var oZM=_gd(x[46],cYM,e_,d_)
if(oZM){
var l1M=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oXM.wxXCkey=3
oZM(l1M,l1M,oXM,gg)
gg.f=cur_globalf
}
else _w(cYM,x[46],16,18)
oRM.wxXCkey=1
xSM.wxXCkey=1
}
var a2M=_n('bottom-loading')
_rz(z,a2M,'showBottomLoading',7,e,s,gg)
_(r,a2M)
bQM.wxXCkey=1
ePM.pop()
return r
}
e_[x[46]]={f:m43,j:[],i:[],ti:[x[47]],ic:[]}
d_[x[48]]={}
d_[x[48]]["mention-list"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[48]+':mention-list'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mention/tpl_mention_list.wxml"],"",1)
if(p_[b]){_wl(b,x[48]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,4,fE,oD,gg)){oH.wxVkey=1
var cI=_mz(z,'view',['bindtap',5,'class',1,'data-impressionid',2,'data-isimpressiondeleted',3,'data-poi-id',4],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',10,fE,oD,gg)
var aL=_n('view')
_rz(z,aL,'class',11,fE,oD,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,12,fE,oD,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,13,fE,oD,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(oJ,aL)
var lK=_v()
_(oJ,lK)
if(_oz(z,14,fE,oD,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
_(cI,oJ)
_(oH,cI)
}
else if(_oz(z,15,fE,oD,gg)){oH.wxVkey=2
var bO=_mz(z,'view',['bindtap',16,'class',1,'data-impressionid',2,'data-isimpressiondeleted',3,'data-poi-id',4],[],fE,oD,gg)
var oP=_n('view')
_rz(z,oP,'class',21,fE,oD,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,22,fE,oD,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,23,fE,oD,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
_(bO,oP)
_(oH,bO)
}
else if(_oz(z,24,fE,oD,gg)){oH.wxVkey=3
var fS=_mz(z,'view',['bindtap',25,'class',1,'data-impressionid',2,'data-isimpressiondeleted',3,'data-poi-id',4],[],fE,oD,gg)
var cT=_n('view')
_rz(z,cT,'class',30,fE,oD,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,31,fE,oD,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_oz(z,32,fE,oD,gg)){oV.wxVkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
_(fS,cT)
_(oH,fS)
}
else if(_oz(z,33,fE,oD,gg)){oH.wxVkey=4
var cW=_mz(z,'view',['bindtap',34,'class',1,'data-impressionid',2,'data-isimpressiondeleted',3,'data-poi-id',4],[],fE,oD,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,39,fE,oD,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
_(oH,cW)
}
else if(_oz(z,40,fE,oD,gg)){oH.wxVkey=5
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[48]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var b5M=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var o6M=_v()
_(b5M,o6M)
if(_oz(z,2,e,s,gg)){o6M.wxVkey=1
var o8M=_v()
_(o6M,o8M)
if(_oz(z,3,e,s,gg)){o8M.wxVkey=1
}
o8M.wxXCkey=1
}
else{o6M.wxVkey=2
}
var f9M=_n('view')
_rz(z,f9M,'class',4,e,s,gg)
var hAN=_v()
_(f9M,hAN)
var oBN=function(oDN,cCN,lEN,gg){
var tGN=_v()
_(lEN,tGN)
if(_oz(z,8,oDN,cCN,gg)){tGN.wxVkey=1
}
tGN.wxXCkey=1
return lEN
}
hAN.wxXCkey=2
_2z(z,7,oBN,e,s,gg,hAN,'item','index','')
var c0M=_v()
_(f9M,c0M)
if(_oz(z,9,e,s,gg)){c0M.wxVkey=1
}
c0M.wxXCkey=1
_(b5M,f9M)
var x7M=_v()
_(b5M,x7M)
if(_oz(z,10,e,s,gg)){x7M.wxVkey=1
var eHN=_n('view')
_rz(z,eHN,'class',11,e,s,gg)
var oJN=_mz(z,'view',['bindtap',12,'class',1],[],e,s,gg)
var xKN=_v()
_(oJN,xKN)
if(_oz(z,14,e,s,gg)){xKN.wxVkey=1
}
var oLN=_v()
_(oJN,oLN)
if(_oz(z,15,e,s,gg)){oLN.wxVkey=1
}
xKN.wxXCkey=1
oLN.wxXCkey=1
_(eHN,oJN)
var bIN=_v()
_(eHN,bIN)
if(_oz(z,16,e,s,gg)){bIN.wxVkey=1
}
bIN.wxXCkey=1
_(x7M,eHN)
}
o6M.wxXCkey=1
x7M.wxXCkey=1
_(r,b5M)
return r
}
e_[x[49]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
d_[x[50]]["component-for-testing-purpose"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[50]+':component-for-testing-purpose'
r.wxVkey=b
gg.f=$gdc(f_["./pages/poi_detail/component_for_testing_purpose.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[50]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var hON=e_[x[51]].i
_ai(hON,x[52],e_,x[51],2,2)
_ai(hON,x[53],e_,x[51],3,2)
_ai(hON,x[54],e_,x[51],4,2)
_ai(hON,x[55],e_,x[51],5,2)
var oPN=_v()
_(r,oPN)
if(_oz(z,0,e,s,gg)){oPN.wxVkey=1
var tUN=_n('view')
_rz(z,tUN,'class',1,e,s,gg)
var bWN=_v()
_(tUN,bWN)
var oXN=_oz(z,3,e,s,gg)
var xYN=_gd(x[51],oXN,e_,d_)
if(xYN){
var oZN=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
bWN.wxXCkey=3
xYN(oZN,oZN,bWN,gg)
gg.f=cur_globalf
}
else _w(oXN,x[51],9,18)
var f1N=_v()
_(tUN,f1N)
var c2N=_oz(z,5,e,s,gg)
var h3N=_gd(x[51],c2N,e_,d_)
if(h3N){
var o4N=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
f1N.wxXCkey=3
h3N(o4N,o4N,f1N,gg)
gg.f=cur_globalf
}
else _w(c2N,x[51],11,18)
var eVN=_v()
_(tUN,eVN)
if(_oz(z,6,e,s,gg)){eVN.wxVkey=1
}
eVN.wxXCkey=1
_(oPN,tUN)
var cQN=_v()
_(oPN,cQN)
if(_oz(z,7,e,s,gg)){cQN.wxVkey=1
}
var oRN=_v()
_(oPN,oRN)
if(_oz(z,8,e,s,gg)){oRN.wxVkey=1
var c5N=_n('view')
_rz(z,c5N,'class',9,e,s,gg)
var l7N=_v()
_(c5N,l7N)
var a8N=function(e0N,t9N,bAO,gg){
var xCO=_v()
_(bAO,xCO)
if(_oz(z,14,e0N,t9N,gg)){xCO.wxVkey=1
var oDO=_mz(z,'impression-poi',['class',15,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],e0N,t9N,gg)
_(xCO,oDO)
}
xCO.wxXCkey=1
xCO.wxXCkey=3
return bAO
}
l7N.wxXCkey=4
_2z(z,12,a8N,e,s,gg,l7N,'impressionData','index','unqiue')
var o6N=_v()
_(c5N,o6N)
if(_oz(z,19,e,s,gg)){o6N.wxVkey=1
}
o6N.wxXCkey=1
_(oRN,c5N)
}
var lSN=_v()
_(oPN,lSN)
if(_oz(z,20,e,s,gg)){lSN.wxVkey=1
var fEO=_n('view')
_rz(z,fEO,'class',21,e,s,gg)
var hGO=_v()
_(fEO,hGO)
var oHO=function(oJO,cIO,lKO,gg){
var tMO=_v()
_(lKO,tMO)
if(_oz(z,26,oJO,cIO,gg)){tMO.wxVkey=1
var eNO=_v()
_(tMO,eNO)
if(_oz(z,27,oJO,cIO,gg)){eNO.wxVkey=1
var bOO=_mz(z,'impression-poi',['class',28,'data-index',1,'data-stranger',2,'impressionData',3,'impressionDataIndex',4],[],oJO,cIO,gg)
_(eNO,bOO)
}
eNO.wxXCkey=1
eNO.wxXCkey=3
}
tMO.wxXCkey=1
tMO.wxXCkey=3
return lKO
}
hGO.wxXCkey=4
_2z(z,24,oHO,e,s,gg,hGO,'impressionData','index','unqiue')
var cFO=_v()
_(fEO,cFO)
if(_oz(z,33,e,s,gg)){cFO.wxVkey=1
}
cFO.wxXCkey=1
_(lSN,fEO)
}
var aTN=_v()
_(oPN,aTN)
if(_oz(z,34,e,s,gg)){aTN.wxVkey=1
var oPO=_v()
_(aTN,oPO)
var xQO=_oz(z,36,e,s,gg)
var oRO=_gd(x[51],xQO,e_,d_)
if(oRO){
var fSO=_1z(z,35,e,s,gg) || {}
var cur_globalf=gg.f
oPO.wxXCkey=3
oRO(fSO,fSO,oPO,gg)
gg.f=cur_globalf
}
else _w(xQO,x[51],71,18)
}
cQN.wxXCkey=1
oRN.wxXCkey=1
oRN.wxXCkey=3
lSN.wxXCkey=1
lSN.wxXCkey=3
aTN.wxXCkey=1
}
else{oPN.wxVkey=2
var cTO=_n('user-access-permission')
_(oPN,cTO)
}
oPN.wxXCkey=1
oPN.wxXCkey=3
oPN.wxXCkey=3
hON.pop()
hON.pop()
hON.pop()
hON.pop()
return r
}
e_[x[51]]={f:m47,j:[],i:[],ti:[x[52],x[53],x[54],x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["poi-info-basic"]=function(e,s,r,gg){
var z=gz$gwx_49()
var b=x[56]+':poi-info-basic'
r.wxVkey=b
gg.f=$gdc(f_["./pages/poi_detail/poi_info_basic.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
var xC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(r,xC)
var oB=_v()
_(r,oB)
if(_oz(z,5,e,s,gg)){oB.wxVkey=1
var cF=_n('view')
_rz(z,cF,'class',6,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,8,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(cF,cI)
if(_oz(z,9,e,s,gg)){cI.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
_(oB,cF)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[56]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
d_[x[57]]["poi-info-detail"]=function(e,s,r,gg){
var z=gz$gwx_50()
var b=x[57]+':poi-info-detail'
r.wxVkey=b
gg.f=$gdc(f_["./pages/poi_detail/poi_info_detail.wxml"],"",1)
if(p_[b]){_wl(b,x[57]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[57]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
d_[x[58]]["reason-item"]=function(e,s,r,gg){
var z=gz$gwx_51()
var b=x[58]+':reason-item'
r.wxVkey=b
gg.f=$gdc(f_["./pages/poi_detail/reason_item.wxml"],"",1)
if(p_[b]){_wl(b,x[58]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',5,'class',1,'data-item',2,'data-reporttype',3],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',9,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,10,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,11,fE,oD,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(oH,oJ)
var cI=_v()
_(oH,cI)
if(_oz(z,12,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','id')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[58]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var lYO=_n('view')
var t1O=_n('radio-group')
_rz(z,t1O,'bindchange',0,e,s,gg)
var e2O=_v()
_(t1O,e2O)
var b3O=function(x5O,o4O,o6O,gg){
var c8O=_n('view')
_rz(z,c8O,'class',3,x5O,o4O,gg)
var h9O=_v()
_(c8O,h9O)
if(_oz(z,4,x5O,o4O,gg)){h9O.wxVkey=1
}
var o0O=_v()
_(c8O,o0O)
if(_oz(z,5,x5O,o4O,gg)){o0O.wxVkey=1
}
h9O.wxXCkey=1
o0O.wxXCkey=1
_(o6O,c8O)
return o6O
}
e2O.wxXCkey=2
_2z(z,1,b3O,e,s,gg,e2O,'item','index','value')
_(lYO,t1O)
var aZO=_v()
_(lYO,aZO)
if(_oz(z,6,e,s,gg)){aZO.wxVkey=1
}
aZO.wxXCkey=1
_(r,lYO)
return r
}
e_[x[59]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var oBP=e_[x[60]].i
_ai(oBP,x[61],e_,x[60],1,1)
var lCP=_n('view')
_rz(z,lCP,'class',0,e,s,gg)
var aDP=_mz(z,'scroll-view',['scrollY',-1,'style',1],[],e,s,gg)
var eFP=_mz(z,'dropdown-menu',['bindselect',2,'id',1,'options',2,'selectedId',3],[],e,s,gg)
_(aDP,eFP)
var tEP=_v()
_(aDP,tEP)
if(_oz(z,6,e,s,gg)){tEP.wxVkey=1
var bGP=_v()
_(tEP,bGP)
var oHP=function(oJP,xIP,fKP,gg){
var hMP=_v()
_(fKP,hMP)
var oNP=_oz(z,12,oJP,xIP,gg)
var cOP=_gd(x[60],oNP,e_,d_)
if(cOP){
var oPP=_1z(z,11,oJP,xIP,gg) || {}
var cur_globalf=gg.f
hMP.wxXCkey=3
cOP(oPP,oPP,hMP,gg)
gg.f=cur_globalf
}
else _w(oNP,x[60],25,38)
return fKP
}
bGP.wxXCkey=2
_2z(z,9,oHP,e,s,gg,bGP,'poiItem','index','unique')
}
else if(_oz(z,13,e,s,gg)){tEP.wxVkey=2
}
tEP.wxXCkey=1
_(lCP,aDP)
var lQP=_mz(z,'scroll-view',['scrollY',-1,'style',14],[],e,s,gg)
var tSP=_mz(z,'dropdown-menu',['bindselect',15,'id',1,'options',2,'selectedId',3],[],e,s,gg)
_(lQP,tSP)
var aRP=_v()
_(lQP,aRP)
if(_oz(z,19,e,s,gg)){aRP.wxVkey=1
var eTP=_v()
_(aRP,eTP)
var bUP=function(xWP,oVP,oXP,gg){
var cZP=_v()
_(oXP,cZP)
var h1P=_oz(z,25,xWP,oVP,gg)
var o2P=_gd(x[60],h1P,e_,d_)
if(o2P){
var c3P=_1z(z,24,xWP,oVP,gg) || {}
var cur_globalf=gg.f
cZP.wxXCkey=3
o2P(c3P,c3P,cZP,gg)
gg.f=cur_globalf
}
else _w(h1P,x[60],50,38)
return oXP
}
eTP.wxXCkey=2
_2z(z,22,bUP,e,s,gg,eTP,'poiItem','index','unique')
}
else if(_oz(z,26,e,s,gg)){aRP.wxVkey=2
}
aRP.wxXCkey=1
_(lCP,lQP)
var o4P=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',27,'style',1],[],e,s,gg)
var a6P=_mz(z,'dropdown-menu',['bindselect',29,'options',1,'selectedId',2],[],e,s,gg)
_(o4P,a6P)
var l5P=_v()
_(o4P,l5P)
if(_oz(z,32,e,s,gg)){l5P.wxVkey=1
var t7P=_v()
_(l5P,t7P)
var e8P=function(o0P,b9P,xAQ,gg){
var fCQ=_v()
_(xAQ,fCQ)
var cDQ=_oz(z,38,o0P,b9P,gg)
var hEQ=_gd(x[60],cDQ,e_,d_)
if(hEQ){
var oFQ=_1z(z,37,o0P,b9P,gg) || {}
var cur_globalf=gg.f
fCQ.wxXCkey=3
hEQ(oFQ,oFQ,fCQ,gg)
gg.f=cur_globalf
}
else _w(cDQ,x[60],87,38)
return xAQ
}
t7P.wxXCkey=2
_2z(z,35,e8P,e,s,gg,t7P,'poiItem','index','unique')
}
else if(_oz(z,39,e,s,gg)){l5P.wxVkey=2
}
l5P.wxXCkey=1
_(lCP,o4P)
_(r,lCP)
oBP.pop()
return r
}
e_[x[60]]={f:m52,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["poi-item"]=function(e,s,r,gg){
var z=gz$gwx_54()
var b=x[62]+':poi-item'
r.wxVkey=b
gg.f=$gdc(f_["./pages/rank_list_new/tpl_poi_item.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-id',2,'data-index',3],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
var oD=_mz(z,'view',['catchtap',6,'class',1,'data-id',2,'data-index',3,'data-ismark',4],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,11,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[62]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var lIQ=_n('view')
var aJQ=_v()
_(lIQ,aJQ)
if(_oz(z,0,e,s,gg)){aJQ.wxVkey=1
var tKQ=_v()
_(aJQ,tKQ)
var eLQ=function(oNQ,bMQ,xOQ,gg){
var fQQ=_mz(z,'poi_recommend',['data-index',5,'poiData',1,'poiDataIndex',2],[],oNQ,bMQ,gg)
_(xOQ,fQQ)
return xOQ
}
tKQ.wxXCkey=4
_2z(z,3,eLQ,e,s,gg,tKQ,'poi','index','id')
}
var cRQ=_mz(z,'bottom-loading',['id',8,'showBottomLoading',1],[],e,s,gg)
_(lIQ,cRQ)
aJQ.wxXCkey=1
aJQ.wxXCkey=3
_(r,lIQ)
return r
}
e_[x[63]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var oTQ=_v()
_(r,oTQ)
if(_oz(z,0,e,s,gg)){oTQ.wxVkey=1
var lWQ=_n('view')
_rz(z,lWQ,'class',1,e,s,gg)
var aXQ=_v()
_(lWQ,aXQ)
if(_oz(z,2,e,s,gg)){aXQ.wxVkey=1
}
var tYQ=_v()
_(lWQ,tYQ)
if(_oz(z,3,e,s,gg)){tYQ.wxVkey=1
var b1Q=_v()
_(tYQ,b1Q)
if(_oz(z,4,e,s,gg)){b1Q.wxVkey=1
}
b1Q.wxXCkey=1
}
var eZQ=_v()
_(lWQ,eZQ)
if(_oz(z,5,e,s,gg)){eZQ.wxVkey=1
var o2Q=_v()
_(eZQ,o2Q)
if(_oz(z,6,e,s,gg)){o2Q.wxVkey=1
}
o2Q.wxXCkey=1
}
aXQ.wxXCkey=1
tYQ.wxXCkey=1
eZQ.wxXCkey=1
_(oTQ,lWQ)
}
var cUQ=_v()
_(r,cUQ)
if(_oz(z,7,e,s,gg)){cUQ.wxVkey=1
var x3Q=_v()
_(cUQ,x3Q)
if(_oz(z,8,e,s,gg)){x3Q.wxVkey=1
var o4Q=_v()
_(x3Q,o4Q)
var f5Q=function(h7Q,c6Q,o8Q,gg){
var o0Q=_v()
_(o8Q,o0Q)
if(_oz(z,12,h7Q,c6Q,gg)){o0Q.wxVkey=1
}
else{o0Q.wxVkey=2
var aBR=_mz(z,'view',['bindtap',13,'class',1,'data-name',2,'data-poi',3,'data-tagid',4,'data-type',5],[],h7Q,c6Q,gg)
var tCR=_v()
_(aBR,tCR)
if(_oz(z,19,h7Q,c6Q,gg)){tCR.wxVkey=1
}
var eDR=_v()
_(aBR,eDR)
if(_oz(z,20,h7Q,c6Q,gg)){eDR.wxVkey=1
}
var bER=_v()
_(aBR,bER)
if(_oz(z,21,h7Q,c6Q,gg)){bER.wxVkey=1
}
var oFR=_v()
_(aBR,oFR)
if(_oz(z,22,h7Q,c6Q,gg)){oFR.wxVkey=1
}
var xGR=_v()
_(aBR,xGR)
if(_oz(z,23,h7Q,c6Q,gg)){xGR.wxVkey=1
var oHR=_v()
_(xGR,oHR)
if(_oz(z,24,h7Q,c6Q,gg)){oHR.wxVkey=1
}
var fIR=_v()
_(xGR,fIR)
if(_oz(z,25,h7Q,c6Q,gg)){fIR.wxVkey=1
}
oHR.wxXCkey=1
fIR.wxXCkey=1
}
else{xGR.wxVkey=2
}
tCR.wxXCkey=1
eDR.wxXCkey=1
bER.wxXCkey=1
oFR.wxXCkey=1
xGR.wxXCkey=1
_(o0Q,aBR)
var lAR=_v()
_(o0Q,lAR)
if(_oz(z,26,h7Q,c6Q,gg)){lAR.wxVkey=1
}
lAR.wxXCkey=1
}
o0Q.wxXCkey=1
return o8Q
}
o4Q.wxXCkey=2
_2z(z,11,f5Q,e,s,gg,o4Q,'item','index','')
}
x3Q.wxXCkey=1
}
var oVQ=_v()
_(r,oVQ)
if(_oz(z,27,e,s,gg)){oVQ.wxVkey=1
var cJR=_n('view')
_rz(z,cJR,'class',28,e,s,gg)
var hKR=_mz(z,'search-result',['class',29,'query',1,'queryType',2],[],e,s,gg)
_(cJR,hKR)
var oLR=_mz(z,'search-result-impression',['class',32,'query',1,'queryType',2],[],e,s,gg)
_(cJR,oLR)
_(oVQ,cJR)
}
oTQ.wxXCkey=1
cUQ.wxXCkey=1
oVQ.wxXCkey=1
oVQ.wxXCkey=3
return r
}
e_[x[64]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var eRR=_n('view')
_rz(z,eRR,'class',0,e,s,gg)
var bSR=_v()
_(eRR,bSR)
if(_oz(z,1,e,s,gg)){bSR.wxVkey=1
var oTR=_v()
_(bSR,oTR)
if(_oz(z,2,e,s,gg)){oTR.wxVkey=1
}
oTR.wxXCkey=1
}
else{bSR.wxVkey=2
}
bSR.wxXCkey=1
_(r,eRR)
var oNR=_v()
_(r,oNR)
if(_oz(z,3,e,s,gg)){oNR.wxVkey=1
}
var lOR=_v()
_(r,lOR)
if(_oz(z,4,e,s,gg)){lOR.wxVkey=1
}
var aPR=_v()
_(r,aPR)
if(_oz(z,5,e,s,gg)){aPR.wxVkey=1
}
var tQR=_v()
_(r,tQR)
if(_oz(z,6,e,s,gg)){tQR.wxVkey=1
var xUR=_mz(z,'choose-media-panel',['bindonhidepanel',7,'bindonresult',1,'poiName',2,'showNoPicButton',3],[],e,s,gg)
_(tQR,xUR)
}
oNR.wxXCkey=1
lOR.wxXCkey=1
aPR.wxXCkey=1
tQR.wxXCkey=1
tQR.wxXCkey=3
return r
}
e_[x[65]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[66]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var cXR=_n('view')
_rz(z,cXR,'class',0,e,s,gg)
var o2R=_n('view')
_rz(z,o2R,'class',1,e,s,gg)
var l3R=_mz(z,'left-right-panel',['bindleftrightselect',2,'category',1,'class',2],[],e,s,gg)
_(o2R,l3R)
var a4R=_mz(z,'select-panel',['bindselect',5,'category',1,'class',2],[],e,s,gg)
_(o2R,a4R)
var t5R=_mz(z,'select-panel',['bindselect',8,'category',1,'class',2],[],e,s,gg)
_(o2R,t5R)
var e6R=_mz(z,'order-panel',['bindselect',11,'class',1,'options',2,'selectedId',3],[],e,s,gg)
_(o2R,e6R)
_(cXR,o2R)
var hYR=_v()
_(cXR,hYR)
if(_oz(z,15,e,s,gg)){hYR.wxVkey=1
var b7R=_n('view')
_rz(z,b7R,'class',16,e,s,gg)
var o8R=_v()
_(b7R,o8R)
if(_oz(z,17,e,s,gg)){o8R.wxVkey=1
var x9R=_mz(z,'view',['catchtap',18,'class',1,'data-areaid',2],[],e,s,gg)
var o0R=_v()
_(x9R,o0R)
if(_oz(z,21,e,s,gg)){o0R.wxVkey=1
}
o0R.wxXCkey=1
_(o8R,x9R)
var fAS=_v()
_(o8R,fAS)
var cBS=function(oDS,hCS,cES,gg){
var lGS=_v()
_(cES,lGS)
if(_oz(z,25,oDS,hCS,gg)){lGS.wxVkey=1
}
lGS.wxXCkey=1
return cES
}
fAS.wxXCkey=2
_2z(z,24,cBS,e,s,gg,fAS,'smlArea','index','')
}
else{o8R.wxVkey=2
var aHS=_mz(z,'view',['catchtap',26,'class',1,'data-areaid',2],[],e,s,gg)
var tIS=_v()
_(aHS,tIS)
if(_oz(z,29,e,s,gg)){tIS.wxVkey=1
}
tIS.wxXCkey=1
_(o8R,aHS)
}
o8R.wxXCkey=1
_(hYR,b7R)
}
var oZR=_v()
_(cXR,oZR)
if(_oz(z,30,e,s,gg)){oZR.wxVkey=1
}
var c1R=_v()
_(cXR,c1R)
if(_oz(z,31,e,s,gg)){c1R.wxVkey=1
var eJS=_v()
_(c1R,eJS)
if(_oz(z,32,e,s,gg)){eJS.wxVkey=1
}
else{eJS.wxVkey=2
var bKS=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',33,'id',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var oLS=_v()
_(bKS,oLS)
var xMS=function(fOS,oNS,cPS,gg){
var oRS=_mz(z,'view',['catchtap',41,'class',1,'data-id',2,'data-index',3],[],fOS,oNS,gg)
var lUS=_n('view')
_rz(z,lUS,'class',45,fOS,oNS,gg)
var eXS=_mz(z,'match-text',['query',46,'text',1],[],fOS,oNS,gg)
_(lUS,eXS)
var aVS=_v()
_(lUS,aVS)
if(_oz(z,48,fOS,oNS,gg)){aVS.wxVkey=1
}
var tWS=_v()
_(lUS,tWS)
if(_oz(z,49,fOS,oNS,gg)){tWS.wxVkey=1
}
aVS.wxXCkey=1
tWS.wxXCkey=1
_(oRS,lUS)
var bYS=_mz(z,'match-text',['query',50,'text',1],[],fOS,oNS,gg)
_(oRS,bYS)
var cSS=_v()
_(oRS,cSS)
if(_oz(z,52,fOS,oNS,gg)){cSS.wxVkey=1
}
else{cSS.wxVkey=2
var oZS=_v()
_(cSS,oZS)
if(_oz(z,53,fOS,oNS,gg)){oZS.wxVkey=1
}
oZS.wxXCkey=1
}
var oTS=_v()
_(oRS,oTS)
if(_oz(z,54,fOS,oNS,gg)){oTS.wxVkey=1
}
cSS.wxXCkey=1
oTS.wxXCkey=1
_(cPS,oRS)
return cPS
}
oLS.wxXCkey=4
_2z(z,39,xMS,e,s,gg,oLS,'poi','poiIndex','unique')
var x1S=_n('bottom-loading')
_rz(z,x1S,'showBottomLoading',55,e,s,gg)
_(bKS,x1S)
_(eJS,bKS)
}
eJS.wxXCkey=1
eJS.wxXCkey=3
}
else{c1R.wxVkey=2
var o2S=_n('bottom-loading')
_rz(z,o2S,'showBottomLoading',56,e,s,gg)
_(c1R,o2S)
}
hYR.wxXCkey=1
oZR.wxXCkey=1
c1R.wxXCkey=1
c1R.wxXCkey=3
c1R.wxXCkey=3
_(r,cXR)
return r
}
e_[x[67]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var c4S=_n('view')
_rz(z,c4S,'class',0,e,s,gg)
var o6S=_n('view')
_rz(z,o6S,'class',1,e,s,gg)
var c7S=_mz(z,'left-right-panel',['bindleftrightselect',2,'category',1,'class',2],[],e,s,gg)
_(o6S,c7S)
var o8S=_mz(z,'select-panel',['bindselect',5,'category',1,'class',2],[],e,s,gg)
_(o6S,o8S)
var l9S=_mz(z,'select-panel',['bindselect',8,'category',1,'class',2],[],e,s,gg)
_(o6S,l9S)
var a0S=_mz(z,'order-panel',['bindselect',11,'class',1,'options',2,'selectedId',3],[],e,s,gg)
_(o6S,a0S)
_(c4S,o6S)
var h5S=_v()
_(c4S,h5S)
if(_oz(z,15,e,s,gg)){h5S.wxVkey=1
var tAT=_v()
_(h5S,tAT)
if(_oz(z,16,e,s,gg)){tAT.wxVkey=1
}
else{tAT.wxVkey=2
var eBT=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',17,'id',1,'lowerThreshold',2,'style',3],[],e,s,gg)
var bCT=_v()
_(eBT,bCT)
var oDT=function(oFT,xET,fGT,gg){
var hIT=_mz(z,'impression-search',['class',25,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],oFT,xET,gg)
_(fGT,hIT)
return fGT
}
bCT.wxXCkey=4
_2z(z,23,oDT,e,s,gg,bCT,'impression','index','unqiue')
var oJT=_n('bottom-loading')
_rz(z,oJT,'showBottomLoading',29,e,s,gg)
_(eBT,oJT)
_(tAT,eBT)
}
tAT.wxXCkey=1
tAT.wxXCkey=3
}
else{h5S.wxVkey=2
var cKT=_n('bottom-loading')
_rz(z,cKT,'showBottomLoading',30,e,s,gg)
_(h5S,cKT)
}
h5S.wxXCkey=1
h5S.wxXCkey=3
h5S.wxXCkey=3
_(r,c4S)
return r
}
e_[x[68]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
var lMT=_v()
_(r,lMT)
var aNT=function(ePT,tOT,bQT,gg){
var xST=_mz(z,'view',['bindtap',4,'class',1,'data-index',2],[],ePT,tOT,gg)
var oTT=_v()
_(xST,oTT)
if(_oz(z,7,ePT,tOT,gg)){oTT.wxVkey=1
}
oTT.wxXCkey=1
_(bQT,xST)
return bQT
}
lMT.wxXCkey=2
_2z(z,2,aNT,e,s,gg,lMT,'item','index','id')
return r
}
e_[x[69]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
var hWT=_mz(z,'swiper',['bindchange',0,'current',1,'duration',1,'style',2],[],e,s,gg)
var oXT=_v()
_(hWT,oXT)
var cYT=function(l1T,oZT,a2T,gg){
var e4T=_n('swiper-item')
var b5T=_v()
_(e4T,b5T)
if(_oz(z,7,l1T,oZT,gg)){b5T.wxVkey=1
}
var o6T=_v()
_(e4T,o6T)
if(_oz(z,8,l1T,oZT,gg)){o6T.wxVkey=1
}
b5T.wxXCkey=1
o6T.wxXCkey=1
_(a2T,e4T)
return a2T
}
oXT.wxXCkey=2
_2z(z,6,cYT,e,s,gg,oXT,'item','index','')
_(r,hWT)
var cVT=_v()
_(r,cVT)
if(_oz(z,9,e,s,gg)){cVT.wxVkey=1
}
cVT.wxXCkey=1
return r
}
e_[x[70]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var o8T=e_[x[71]].i
_ai(o8T,x[72],e_,x[71],1,1)
var f9T=_n('view')
_rz(z,f9T,'class',0,e,s,gg)
var c0T=_mz(z,'view',['catchtap',1,'class',1,'data-index',2,'style',3],[],e,s,gg)
var hAU=_v()
_(c0T,hAU)
if(_oz(z,5,e,s,gg)){hAU.wxVkey=1
}
hAU.wxXCkey=1
_(f9T,c0T)
var oBU=_mz(z,'view',['catchtap',6,'class',1,'data-index',2,'style',3],[],e,s,gg)
var cCU=_v()
_(oBU,cCU)
if(_oz(z,10,e,s,gg)){cCU.wxVkey=1
}
cCU.wxXCkey=1
_(f9T,oBU)
_(r,f9T)
var oDU=_mz(z,'view',['id',11,'style',1],[],e,s,gg)
var lEU=_v()
_(oDU,lEU)
if(_oz(z,13,e,s,gg)){lEU.wxVkey=1
}
var aFU=_v()
_(oDU,aFU)
if(_oz(z,14,e,s,gg)){aFU.wxVkey=1
var tGU=_mz(z,'find-poi',['class',15,'id',1,'props',2],[],e,s,gg)
_(aFU,tGU)
}
lEU.wxXCkey=1
aFU.wxXCkey=1
aFU.wxXCkey=3
_(r,oDU)
var eHU=_mz(z,'view',['id',18,'style',1],[],e,s,gg)
var oJU=_n('view')
_rz(z,oJU,'class',20,e,s,gg)
var xKU=_mz(z,'view',['catchtap',21,'class',1,'data-index',2],[],e,s,gg)
var oLU=_v()
_(xKU,oLU)
if(_oz(z,24,e,s,gg)){oLU.wxVkey=1
}
oLU.wxXCkey=1
_(oJU,xKU)
var fMU=_mz(z,'view',['catchtap',25,'class',1,'data-index',2],[],e,s,gg)
var cNU=_v()
_(fMU,cNU)
if(_oz(z,28,e,s,gg)){cNU.wxVkey=1
}
cNU.wxXCkey=1
_(oJU,fMU)
_(eHU,oJU)
var hOU=_mz(z,'view',['id',29,'style',1],[],e,s,gg)
var oPU=_n('view')
var cQU=_v()
_(oPU,cQU)
if(_oz(z,31,e,s,gg)){cQU.wxVkey=1
}
var oRU=_v()
_(oPU,oRU)
if(_oz(z,32,e,s,gg)){oRU.wxVkey=1
var lSU=_n('view')
_rz(z,lSU,'class',33,e,s,gg)
var aTU=_v()
_(lSU,aTU)
if(_oz(z,34,e,s,gg)){aTU.wxVkey=1
var tUU=_v()
_(aTU,tUU)
var eVU=function(oXU,bWU,xYU,gg){
var f1U=_v()
_(xYU,f1U)
if(_oz(z,39,oXU,bWU,gg)){f1U.wxVkey=1
}
f1U.wxXCkey=1
return xYU
}
tUU.wxXCkey=2
_2z(z,37,eVU,e,s,gg,tUU,'payRecommendPoiItem','payRecommendPoiIndex','id')
}
else{aTU.wxVkey=2
}
aTU.wxXCkey=1
_(oRU,lSU)
}
cQU.wxXCkey=1
oRU.wxXCkey=1
_(hOU,oPU)
var c2U=_v()
_(hOU,c2U)
var h3U=_oz(z,41,e,s,gg)
var o4U=_gd(x[71],h3U,e_,d_)
if(o4U){
var c5U=_1z(z,40,e,s,gg) || {}
var cur_globalf=gg.f
c2U.wxXCkey=3
o4U(c5U,c5U,c2U,gg)
gg.f=cur_globalf
}
else _w(h3U,x[71],133,26)
var o6U=_mz(z,'bottom-loading',['id',42,'showBottomLoading',1],[],e,s,gg)
_(hOU,o6U)
_(eHU,hOU)
var l7U=_mz(z,'view',['id',44,'style',1],[],e,s,gg)
var a8U=_v()
_(l7U,a8U)
if(_oz(z,46,e,s,gg)){a8U.wxVkey=1
}
var t9U=_v()
_(l7U,t9U)
if(_oz(z,47,e,s,gg)){t9U.wxVkey=1
}
var e0U=_v()
_(l7U,e0U)
if(_oz(z,48,e,s,gg)){e0U.wxVkey=1
}
var oBV=_v()
_(l7U,oBV)
var xCV=function(fEV,oDV,cFV,gg){
var oHV=_v()
_(cFV,oHV)
if(_oz(z,53,fEV,oDV,gg)){oHV.wxVkey=1
var cIV=_v()
_(oHV,cIV)
if(_oz(z,54,fEV,oDV,gg)){cIV.wxVkey=1
var oJV=_mz(z,'impression-mark',['class',55,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],fEV,oDV,gg)
_(cIV,oJV)
}
else{cIV.wxVkey=2
var lKV=_mz(z,'impression',['class',59,'data-index',1,'impressionData',2,'impressionDataIndex',3],[],fEV,oDV,gg)
_(cIV,lKV)
}
cIV.wxXCkey=1
cIV.wxXCkey=3
cIV.wxXCkey=3
}
oHV.wxXCkey=1
oHV.wxXCkey=3
return cFV
}
oBV.wxXCkey=4
_2z(z,51,xCV,e,s,gg,oBV,'impressionData','index','unqiue')
var bAV=_v()
_(l7U,bAV)
if(_oz(z,63,e,s,gg)){bAV.wxVkey=1
}
var aLV=_mz(z,'bottom-loading',['id',64,'showBottomLoading',1],[],e,s,gg)
_(l7U,aLV)
a8U.wxXCkey=1
t9U.wxXCkey=1
e0U.wxXCkey=1
bAV.wxXCkey=1
_(eHU,l7U)
var bIU=_v()
_(eHU,bIU)
if(_oz(z,66,e,s,gg)){bIU.wxVkey=1
}
bIU.wxXCkey=1
_(r,eHU)
o8T.pop()
return r
}
e_[x[71]]={f:m62,j:[],i:[],ti:[x[72]],ic:[]}
d_[x[73]]={}
d_[x[73]]["waterfallItem"]=function(e,s,r,gg){
var z=gz$gwx_64()
var b=x[73]+':waterfallItem'
r.wxVkey=b
gg.f=$gdc(f_["./pages/timeline/tpl_waterfall.wxml"],"",1)
if(p_[b]){_wl(b,x[73]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['catchtap',4,'class',1,'data-index',2,'data-topic',3,'style',4],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,9,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
_(xC,oD)
}
else{xC.wxVkey=2
var cF=_v()
_(xC,cF)
if(_oz(z,10,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'impression-small',['class',11,'data-index',1,'data-recommend',2,'impressionData',3,'impressionDataIndex',4],[],e,s,gg)
_(cF,hG)
}
cF.wxXCkey=1
cF.wxXCkey=3
}
xC.wxXCkey=1
xC.wxXCkey=3
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[73]]["waterfall"]=function(e,s,r,gg){
var z=gz$gwx_64()
var b=x[73]+':waterfall'
r.wxVkey=b
gg.f=$gdc(f_["./pages/timeline/tpl_waterfall.wxml"],"",1)
if(p_[b]){_wl(b,x[73]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',17,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,22,cF,fE,gg)
var lK=_gd(x[73],oJ,e_,d_)
if(lK){
var aL=_1z(z,21,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[73],35,34)
return hG
}
xC.wxXCkey=2
_2z(z,19,oD,e,s,gg,xC,'item','index','unqiue')
var tM=_v()
_(oB,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_v()
_(xQ,fS)
var cT=_oz(z,27,oP,bO,gg)
var hU=_gd(x[73],cT,e_,d_)
if(hU){
var oV=_1z(z,26,oP,bO,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[73],42,34)
return xQ
}
tM.wxXCkey=2
_2z(z,24,eN,e,s,gg,tM,'item','index','unqiue')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
return r
}
e_[x[73]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var bOV=_n('view')
_rz(z,bOV,'class',0,e,s,gg)
var oPV=_v()
_(bOV,oPV)
if(_oz(z,1,e,s,gg)){oPV.wxVkey=1
}
var xQV=_n('view')
_rz(z,xQV,'class',2,e,s,gg)
var oRV=_v()
_(xQV,oRV)
if(_oz(z,3,e,s,gg)){oRV.wxVkey=1
}
var fSV=_v()
_(xQV,fSV)
if(_oz(z,4,e,s,gg)){fSV.wxVkey=1
}
var cTV=_v()
_(xQV,cTV)
if(_oz(z,5,e,s,gg)){cTV.wxVkey=1
}
oRV.wxXCkey=1
fSV.wxXCkey=1
cTV.wxXCkey=1
_(bOV,xQV)
oPV.wxXCkey=1
_(r,bOV)
var hUV=_n('view')
_rz(z,hUV,'class',6,e,s,gg)
var oVV=_v()
_(hUV,oVV)
if(_oz(z,7,e,s,gg)){oVV.wxVkey=1
var cWV=_v()
_(oVV,cWV)
if(_oz(z,8,e,s,gg)){cWV.wxVkey=1
}
else{cWV.wxVkey=2
var oXV=_v()
_(cWV,oXV)
var lYV=function(t1V,aZV,e2V,gg){
var o4V=_mz(z,'impression-me',['class',13,'data-index',1,'impressionData',2,'impressionDataIndex',3,'showMoreOptions',4],[],t1V,aZV,gg)
_(e2V,o4V)
return e2V
}
oXV.wxXCkey=4
_2z(z,11,lYV,e,s,gg,oXV,'impressionData','index','id')
var x5V=_n('bottom-loading')
_rz(z,x5V,'showBottomLoading',18,e,s,gg)
_(cWV,x5V)
}
cWV.wxXCkey=1
cWV.wxXCkey=3
}
else if(_oz(z,19,e,s,gg)){oVV.wxVkey=2
var o6V=_v()
_(oVV,o6V)
if(_oz(z,20,e,s,gg)){o6V.wxVkey=1
}
else{o6V.wxVkey=2
var f7V=_v()
_(o6V,f7V)
var c8V=function(o0V,h9V,cAW,gg){
var lCW=_mz(z,'view',['bindtap',25,'class',1,'data-index',2],[],o0V,h9V,gg)
var aDW=_mz(z,'view',['class',28,'hoverClass',1],[],o0V,h9V,gg)
var tEW=_v()
_(aDW,tEW)
if(_oz(z,30,o0V,h9V,gg)){tEW.wxVkey=1
}
var eFW=_v()
_(aDW,eFW)
if(_oz(z,31,o0V,h9V,gg)){eFW.wxVkey=1
}
tEW.wxXCkey=1
eFW.wxXCkey=1
_(lCW,aDW)
_(cAW,lCW)
return cAW
}
f7V.wxXCkey=2
_2z(z,23,c8V,e,s,gg,f7V,'item','index','id')
var bGW=_n('bottom-loading')
_rz(z,bGW,'showBottomLoading',32,e,s,gg)
_(o6V,bGW)
}
o6V.wxXCkey=1
o6V.wxXCkey=3
}
oVV.wxXCkey=1
oVV.wxXCkey=3
oVV.wxXCkey=3
_(r,hUV)
return r
}
e_[x[74]]={f:m64,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/animation_broadcast/animation_broadcast.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/animation_broadcast/animation_broadcast.wxml'] = [$gwx, './components/animation_broadcast/animation_broadcast.wxml'];else __wxAppCode__['components/animation_broadcast/animation_broadcast.wxml'] = $gwx( './components/animation_broadcast/animation_broadcast.wxml' );
		__wxAppCode__['components/bottom_loading/bottom_loading.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/bottom_loading/bottom_loading.wxml'] = [$gwx, './components/bottom_loading/bottom_loading.wxml'];else __wxAppCode__['components/bottom_loading/bottom_loading.wxml'] = $gwx( './components/bottom_loading/bottom_loading.wxml' );
		__wxAppCode__['components/choose_media_panel/choose_media_panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/choose_media_panel/choose_media_panel.wxml'] = [$gwx, './components/choose_media_panel/choose_media_panel.wxml'];else __wxAppCode__['components/choose_media_panel/choose_media_panel.wxml'] = $gwx( './components/choose_media_panel/choose_media_panel.wxml' );
		__wxAppCode__['components/comment_panel/comment_panel.json'] = {"component":true,"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/comment_panel/comment_panel.wxml'] = [$gwx, './components/comment_panel/comment_panel.wxml'];else __wxAppCode__['components/comment_panel/comment_panel.wxml'] = $gwx( './components/comment_panel/comment_panel.wxml' );
		__wxAppCode__['components/comment_text/comment_text.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/comment_text/comment_text.wxml'] = [$gwx, './components/comment_text/comment_text.wxml'];else __wxAppCode__['components/comment_text/comment_text.wxml'] = $gwx( './components/comment_text/comment_text.wxml' );
		__wxAppCode__['components/comment_text_search/comment_text_search.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/comment_text_search/comment_text_search.wxml'] = [$gwx, './components/comment_text_search/comment_text_search.wxml'];else __wxAppCode__['components/comment_text_search/comment_text_search.wxml'] = $gwx( './components/comment_text_search/comment_text_search.wxml' );
		__wxAppCode__['components/content_error/content_error.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/content_error/content_error.wxml'] = [$gwx, './components/content_error/content_error.wxml'];else __wxAppCode__['components/content_error/content_error.wxml'] = $gwx( './components/content_error/content_error.wxml' );
		__wxAppCode__['components/dropdown_menu/dropdown_menu.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/dropdown_menu/dropdown_menu.wxml'] = [$gwx, './components/dropdown_menu/dropdown_menu.wxml'];else __wxAppCode__['components/dropdown_menu/dropdown_menu.wxml'] = $gwx( './components/dropdown_menu/dropdown_menu.wxml' );
		__wxAppCode__['components/find_poi/find_poi.json'] = {"component":true,"usingComponents":{"left-right-panel":"/components/left_right_panel/left_right_panel","select-panel":"/components/select_panel/select_panel","order-panel":"/components/order_panel/order_panel","bottom-loading":"/components/bottom_loading/bottom_loading","poi-recommend":"/components/poi_recommend/poi_recommend"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/find_poi/find_poi.wxml'] = [$gwx, './components/find_poi/find_poi.wxml'];else __wxAppCode__['components/find_poi/find_poi.wxml'] = $gwx( './components/find_poi/find_poi.wxml' );
		__wxAppCode__['components/image_loader/image_loader.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/image_loader/image_loader.wxml'] = [$gwx, './components/image_loader/image_loader.wxml'];else __wxAppCode__['components/image_loader/image_loader.wxml'] = $gwx( './components/image_loader/image_loader.wxml' );
		__wxAppCode__['components/impression/impression.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader","comment-panel":"/components/comment_panel/comment_panel","poi-card":"/components/poi_card/poi_card"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression/impression.wxml'] = [$gwx, './components/impression/impression.wxml'];else __wxAppCode__['components/impression/impression.wxml'] = $gwx( './components/impression/impression.wxml' );
		__wxAppCode__['components/impression_mark/impression_mark.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression_mark/impression_mark.wxml'] = [$gwx, './components/impression_mark/impression_mark.wxml'];else __wxAppCode__['components/impression_mark/impression_mark.wxml'] = $gwx( './components/impression_mark/impression_mark.wxml' );
		__wxAppCode__['components/impression_me/impression_me.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader","comment-panel":"/components/comment_panel/comment_panel"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression_me/impression_me.wxml'] = [$gwx, './components/impression_me/impression_me.wxml'];else __wxAppCode__['components/impression_me/impression_me.wxml'] = $gwx( './components/impression_me/impression_me.wxml' );
		__wxAppCode__['components/impression_poi/impression_poi.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader","comment-panel":"/components/comment_panel/comment_panel"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression_poi/impression_poi.wxml'] = [$gwx, './components/impression_poi/impression_poi.wxml'];else __wxAppCode__['components/impression_poi/impression_poi.wxml'] = $gwx( './components/impression_poi/impression_poi.wxml' );
		__wxAppCode__['components/impression_search/impression_search.json'] = {"component":true,"usingComponents":{"comment-text-search":"/components/comment_text_search/comment_text_search","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader","comment-panel":"/components/comment_panel/comment_panel","poi-card":"/components/poi_card/poi_card"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression_search/impression_search.wxml'] = [$gwx, './components/impression_search/impression_search.wxml'];else __wxAppCode__['components/impression_search/impression_search.wxml'] = $gwx( './components/impression_search/impression_search.wxml' );
		__wxAppCode__['components/impression_small/impression_small.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader","comment-panel":"/components/comment_panel/comment_panel","poi-card":"/components/poi_card/poi_card"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/impression_small/impression_small.wxml'] = [$gwx, './components/impression_small/impression_small.wxml'];else __wxAppCode__['components/impression_small/impression_small.wxml'] = $gwx( './components/impression_small/impression_small.wxml' );
		__wxAppCode__['components/left_right_panel/left_right_panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/left_right_panel/left_right_panel.wxml'] = [$gwx, './components/left_right_panel/left_right_panel.wxml'];else __wxAppCode__['components/left_right_panel/left_right_panel.wxml'] = $gwx( './components/left_right_panel/left_right_panel.wxml' );
		__wxAppCode__['components/like/like.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/like/like.wxml'] = [$gwx, './components/like/like.wxml'];else __wxAppCode__['components/like/like.wxml'] = $gwx( './components/like/like.wxml' );
		__wxAppCode__['components/order_panel/order_panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/order_panel/order_panel.wxml'] = [$gwx, './components/order_panel/order_panel.wxml'];else __wxAppCode__['components/order_panel/order_panel.wxml'] = $gwx( './components/order_panel/order_panel.wxml' );
		__wxAppCode__['components/page_observer/page_observer.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/page_observer/page_observer.wxml'] = [$gwx, './components/page_observer/page_observer.wxml'];else __wxAppCode__['components/page_observer/page_observer.wxml'] = $gwx( './components/page_observer/page_observer.wxml' );
		__wxAppCode__['components/poi_card/poi_card.json'] = {"component":true,"usingComponents":{"image-loader":"/components/image_loader/image_loader"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/poi_card/poi_card.wxml'] = [$gwx, './components/poi_card/poi_card.wxml'];else __wxAppCode__['components/poi_card/poi_card.wxml'] = $gwx( './components/poi_card/poi_card.wxml' );
		__wxAppCode__['components/poi_recommend/poi_recommend.json'] = {"component":true,"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","share-to-wechat":"/components/share_to_wechat/share_to_wechat","image-loader":"/components/image_loader/image_loader"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/poi_recommend/poi_recommend.wxml'] = [$gwx, './components/poi_recommend/poi_recommend.wxml'];else __wxAppCode__['components/poi_recommend/poi_recommend.wxml'] = $gwx( './components/poi_recommend/poi_recommend.wxml' );
		__wxAppCode__['components/select_panel/select_panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/select_panel/select_panel.wxml'] = [$gwx, './components/select_panel/select_panel.wxml'];else __wxAppCode__['components/select_panel/select_panel.wxml'] = $gwx( './components/select_panel/select_panel.wxml' );
		__wxAppCode__['components/share_to_wechat/share_to_wechat.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/share_to_wechat/share_to_wechat.wxml'] = [$gwx, './components/share_to_wechat/share_to_wechat.wxml'];else __wxAppCode__['components/share_to_wechat/share_to_wechat.wxml'] = $gwx( './components/share_to_wechat/share_to_wechat.wxml' );
		__wxAppCode__['components/skeleton_loading/skeleton_loading.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/skeleton_loading/skeleton_loading.wxml'] = [$gwx, './components/skeleton_loading/skeleton_loading.wxml'];else __wxAppCode__['components/skeleton_loading/skeleton_loading.wxml'] = $gwx( './components/skeleton_loading/skeleton_loading.wxml' );
		__wxAppCode__['components/subcategory_panel/subcategory_panel.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/subcategory_panel/subcategory_panel.wxml'] = [$gwx, './components/subcategory_panel/subcategory_panel.wxml'];else __wxAppCode__['components/subcategory_panel/subcategory_panel.wxml'] = $gwx( './components/subcategory_panel/subcategory_panel.wxml' );
		__wxAppCode__['components/user_access_permission/user_access_permission.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/user_access_permission/user_access_permission.wxml'] = [$gwx, './components/user_access_permission/user_access_permission.wxml'];else __wxAppCode__['components/user_access_permission/user_access_permission.wxml'] = $gwx( './components/user_access_permission/user_access_permission.wxml' );
		__wxAppCode__['components/video_preview/video_preview.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/video_preview/video_preview.wxml'] = [$gwx, './components/video_preview/video_preview.wxml'];else __wxAppCode__['components/video_preview/video_preview.wxml'] = $gwx( './components/video_preview/video_preview.wxml' );
		__wxAppCode__['pages/activity/activity.json'] = {"usingComponents":{"impression":"/components/impression/impression","bottom-loading":"/components/bottom_loading/bottom_loading"},"navigationBarRightButton":{"hide":true,"iconPath":"/images/icon-share.png"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/activity/activity.wxml'] = [$gwx, './pages/activity/activity.wxml'];else __wxAppCode__['pages/activity/activity.wxml'] = $gwx( './pages/activity/activity.wxml' );
		__wxAppCode__['pages/app_feedback/app_feedback.json'] = {"component":true,"navigationBarBackgroundColor":"#f1f1f1","backgroundColor":"#f1f1f1","navigationBarTitleText":"意见反馈","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app_feedback/app_feedback.wxml'] = [$gwx, './pages/app_feedback/app_feedback.wxml'];else __wxAppCode__['pages/app_feedback/app_feedback.wxml'] = $gwx( './pages/app_feedback/app_feedback.wxml' );
		__wxAppCode__['pages/article_webview/article_webview.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/article_webview/article_webview.wxml'] = [$gwx, './pages/article_webview/article_webview.wxml'];else __wxAppCode__['pages/article_webview/article_webview.wxml'] = $gwx( './pages/article_webview/article_webview.wxml' );
		__wxAppCode__['pages/comment_feed/comment_feed.json'] = {"usingComponents":{"comment-text":"/components/comment_text/comment_text","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","impression-poi":"/components/impression_poi/impression_poi"},"backgroundColor":"#ffffff"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/comment_feed/comment_feed.wxml'] = [$gwx, './pages/comment_feed/comment_feed.wxml'];else __wxAppCode__['pages/comment_feed/comment_feed.wxml'] = $gwx( './pages/comment_feed/comment_feed.wxml' );
		__wxAppCode__['pages/complain_page/complain_page.json'] = {"component":true,"navigationBarBackgroundColor":"#f1f1f1","backgroundColor":"#f1f1f1","navigationBarTitleText":"投诉","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/complain_page/complain_page.wxml'] = [$gwx, './pages/complain_page/complain_page.wxml'];else __wxAppCode__['pages/complain_page/complain_page.wxml'] = $gwx( './pages/complain_page/complain_page.wxml' );
		__wxAppCode__['pages/fans/fans.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading"},"backgroundColor":"#fff","navigationBarTitleText":"我的粉丝","navigationBarBackgroundColor":"#fff"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/fans/fans.wxml'] = [$gwx, './pages/fans/fans.wxml'];else __wxAppCode__['pages/fans/fans.wxml'] = $gwx( './pages/fans/fans.wxml' );
		__wxAppCode__['pages/feedback/feedback.json'] = {"usingComponents":{},"navigationBarTitleText":"反馈"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/feedback/feedback.wxml'] = [$gwx, './pages/feedback/feedback.wxml'];else __wxAppCode__['pages/feedback/feedback.wxml'] = $gwx( './pages/feedback/feedback.wxml' );
		__wxAppCode__['pages/following/following.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading"},"backgroundColor":"#fff","navigationBarTitleText":"我的关注","navigationBarBackgroundColor":"#fff"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/following/following.wxml'] = [$gwx, './pages/following/following.wxml'];else __wxAppCode__['pages/following/following.wxml'] = $gwx( './pages/following/following.wxml' );
		__wxAppCode__['pages/friend_talk_about/friend_talk_about.json'] = {"usingComponents":{"left-right-panel":"/components/left_right_panel/left_right_panel","select-panel":"/components/select_panel/select_panel","order-panel":"/components/order_panel/order_panel","choose-media-panel":"/components/choose_media_panel/choose_media_panel","subcategory-panel":"/components/subcategory_panel/subcategory_panel","bottom-loading":"/components/bottom_loading/bottom_loading","poi_recommend":"/components/poi_recommend/poi_recommend"},"backgroundColor":"#f4f4f4","navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"朋友提到的餐厅"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/friend_talk_about/friend_talk_about.wxml'] = [$gwx, './pages/friend_talk_about/friend_talk_about.wxml'];else __wxAppCode__['pages/friend_talk_about/friend_talk_about.wxml'] = $gwx( './pages/friend_talk_about/friend_talk_about.wxml' );
		__wxAppCode__['pages/impression_feed/impression_feed.json'] = {"usingComponents":{"comment-text":"/components/comment_text/comment_text","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","user-access-permission":"/components/user_access_permission/user_access_permission","content-error":"/components/content_error/content_error"},"navigationBarTitleText":" "};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/impression_feed/impression_feed.wxml'] = [$gwx, './pages/impression_feed/impression_feed.wxml'];else __wxAppCode__['pages/impression_feed/impression_feed.wxml'] = $gwx( './pages/impression_feed/impression_feed.wxml' );
		__wxAppCode__['pages/index_tag/index_tag.json'] = {"usingComponents":{"impression":"/components/impression/impression","bottom-loading":"/components/bottom_loading/bottom_loading","animation-broadcast":"/components/animation_broadcast/animation_broadcast"},"navigationBarTitleText":" ","navigationBarRightButton":{"hide":true,"iconPath":"/images/icon-share.png"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index_tag/index_tag.wxml'] = [$gwx, './pages/index_tag/index_tag.wxml'];else __wxAppCode__['pages/index_tag/index_tag.wxml'] = $gwx( './pages/index_tag/index_tag.wxml' );
		__wxAppCode__['pages/kitchen/kitchen.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/kitchen/kitchen.wxml'] = [$gwx, './pages/kitchen/kitchen.wxml'];else __wxAppCode__['pages/kitchen/kitchen.wxml'] = $gwx( './pages/kitchen/kitchen.wxml' );
		__wxAppCode__['pages/me/me.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading","impression-me":"/components/impression_me/impression_me","dropdown-menu":"/components/dropdown_menu/dropdown_menu"},"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"我","backgroundColor":"#ffffff","enablePullDownRefresh":true,"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/me/me.wxml'] = [$gwx, './pages/me/me.wxml'];else __wxAppCode__['pages/me/me.wxml'] = $gwx( './pages/me/me.wxml' );
		__wxAppCode__['pages/mention/mention.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading"},"backgroundColor":"#f1f1f1","navigationBarTitleText":"消息","navigationBarBackgroundColor":"#f1f1f1"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mention/mention.wxml'] = [$gwx, './pages/mention/mention.wxml'];else __wxAppCode__['pages/mention/mention.wxml'] = $gwx( './pages/mention/mention.wxml' );
		__wxAppCode__['pages/poi_comment_publish/poi_comment_publish.json'] = {"navigationBarTitleText":" ","navigationStyle":"custom","disableSwipeBack":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/poi_comment_publish/poi_comment_publish.wxml'] = [$gwx, './pages/poi_comment_publish/poi_comment_publish.wxml'];else __wxAppCode__['pages/poi_comment_publish/poi_comment_publish.wxml'] = $gwx( './pages/poi_comment_publish/poi_comment_publish.wxml' );
		__wxAppCode__['pages/poi_detail/poi_detail.json'] = {"usingComponents":{"comment-text":"/components/comment_text/comment_text","choose-media-panel":"/components/choose_media_panel/choose_media_panel","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","user-access-permission":"/components/user_access_permission/user_access_permission","share-to-wechat":"/components/share_to_wechat/share_to_wechat","impression-poi":"/components/impression_poi/impression_poi"},"navigationBarTitleText":" ","navigationStyle":"custom","navigationBarTextStyle":"white"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/poi_detail/poi_detail.wxml'] = [$gwx, './pages/poi_detail/poi_detail.wxml'];else __wxAppCode__['pages/poi_detail/poi_detail.wxml'] = $gwx( './pages/poi_detail/poi_detail.wxml' );
		__wxAppCode__['pages/poi_feedback/poi_feedback.json'] = {"component":true,"navigationBarBackgroundColor":"#f1f1f1","backgroundColor":"#f1f1f1","navigationBarTitleText":"餐厅信息纠错","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/poi_feedback/poi_feedback.wxml'] = [$gwx, './pages/poi_feedback/poi_feedback.wxml'];else __wxAppCode__['pages/poi_feedback/poi_feedback.wxml'] = $gwx( './pages/poi_feedback/poi_feedback.wxml' );
		__wxAppCode__['pages/rank_list_new/rank_list_new.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading","image-loader":"/components/image_loader/image_loader","dropdown-menu":"/components/dropdown_menu/dropdown_menu"},"navigationBarBackgroundColor":"#303030","navigationBarTitleText":"美食圈想去排行榜","backgroundColor":"#303030","navigationBarTextStyle":"white","enablePullDownRefresh":false};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/rank_list_new/rank_list_new.wxml'] = [$gwx, './pages/rank_list_new/rank_list_new.wxml'];else __wxAppCode__['pages/rank_list_new/rank_list_new.wxml'] = $gwx( './pages/rank_list_new/rank_list_new.wxml' );
		__wxAppCode__['pages/recommend_poi/recommend_poi.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading","poi_recommend":"/components/poi_recommend/poi_recommend"},"backgroundColor":"#f1f1f1","navigationBarBackgroundColor":"#f1f1f1","navigationBarTitleText":"今天吃什么"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/recommend_poi/recommend_poi.wxml'] = [$gwx, './pages/recommend_poi/recommend_poi.wxml'];else __wxAppCode__['pages/recommend_poi/recommend_poi.wxml'] = $gwx( './pages/recommend_poi/recommend_poi.wxml' );
		__wxAppCode__['pages/search_index/search_index.json'] = {"usingComponents":{"search-result":"/pages/search_result/search_result","search-result-impression":"/pages/search_result_impression/search_result_impression"},"navigationBarBackgroundColor":"#f1f1f1","backgroundColor":"#f1f1f1","navigationBarTitleText":"搜索"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search_index/search_index.wxml'] = [$gwx, './pages/search_index/search_index.wxml'];else __wxAppCode__['pages/search_index/search_index.wxml'] = $gwx( './pages/search_index/search_index.wxml' );
		__wxAppCode__['pages/search_poi_list/search_poi_list.json'] = {"usingComponents":{"choose-media-panel":"/components/choose_media_panel/choose_media_panel"},"navigationBarTitleText":"选择餐厅","backgroundColor":"#ffffff"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search_poi_list/search_poi_list.wxml'] = [$gwx, './pages/search_poi_list/search_poi_list.wxml'];else __wxAppCode__['pages/search_poi_list/search_poi_list.wxml'] = $gwx( './pages/search_poi_list/search_poi_list.wxml' );
		__wxAppCode__['pages/search_result/match_text/match_text.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search_result/match_text/match_text.wxml'] = [$gwx, './pages/search_result/match_text/match_text.wxml'];else __wxAppCode__['pages/search_result/match_text/match_text.wxml'] = $gwx( './pages/search_result/match_text/match_text.wxml' );
		__wxAppCode__['pages/search_result/search_result.json'] = {"usingComponents":{"left-right-panel":"/components/left_right_panel/left_right_panel","select-panel":"/components/select_panel/select_panel","order-panel":"/components/order_panel/order_panel","match-text":"match_text/match_text","bottom-loading":"/components/bottom_loading/bottom_loading"},"backgroundColor":"#f1f1f1","component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search_result/search_result.wxml'] = [$gwx, './pages/search_result/search_result.wxml'];else __wxAppCode__['pages/search_result/search_result.wxml'] = $gwx( './pages/search_result/search_result.wxml' );
		__wxAppCode__['pages/search_result_impression/search_result_impression.json'] = {"usingComponents":{"left-right-panel":"/components/left_right_panel/left_right_panel","select-panel":"/components/select_panel/select_panel","order-panel":"/components/order_panel/order_panel","bottom-loading":"/components/bottom_loading/bottom_loading","impression-search":"/components/impression_search/impression_search"},"backgroundColor":"#f1f1f1","component":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search_result_impression/search_result_impression.wxml'] = [$gwx, './pages/search_result_impression/search_result_impression.wxml'];else __wxAppCode__['pages/search_result_impression/search_result_impression.wxml'] = $gwx( './pages/search_result_impression/search_result_impression.wxml' );
		__wxAppCode__['pages/select_tag_list/select_tag_list.json'] = {"navigationBarTitleText":"选择话题","backgroundColor":"#ffffff","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/select_tag_list/select_tag_list.wxml'] = [$gwx, './pages/select_tag_list/select_tag_list.wxml'];else __wxAppCode__['pages/select_tag_list/select_tag_list.wxml'] = $gwx( './pages/select_tag_list/select_tag_list.wxml' );
		__wxAppCode__['pages/swipe_pic/swipe_pic.json'] = {"navigationBarTitleText":" ","navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","backgroundColor":"#000000","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/swipe_pic/swipe_pic.wxml'] = [$gwx, './pages/swipe_pic/swipe_pic.wxml'];else __wxAppCode__['pages/swipe_pic/swipe_pic.wxml'] = $gwx( './pages/swipe_pic/swipe_pic.wxml' );
		__wxAppCode__['pages/timeline/timeline.json'] = {"usingComponents":{"comment-text":"/components/comment_text/comment_text","skeleton-loading":"/components/skeleton_loading/skeleton_loading","user-access-permission":"/components/user_access_permission/user_access_permission","bottom-loading":"/components/bottom_loading/bottom_loading","like":"/components/like/like","video-preview":"/components/video_preview/video_preview","image-loader":"/components/image_loader/image_loader","share-to-wechat":"/components/share_to_wechat/share_to_wechat","impression":"/components/impression/impression","impression-mark":"/components/impression_mark/impression_mark","impression-small":"/components/impression_small/impression_small","find-poi":"/components/find_poi/find_poi"},"navigationBarTitleText":" ","backgroundColor":"#f4f4f4","enablePullDownRefresh":true,"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/timeline/timeline.wxml'] = [$gwx, './pages/timeline/timeline.wxml'];else __wxAppCode__['pages/timeline/timeline.wxml'] = $gwx( './pages/timeline/timeline.wxml' );
		__wxAppCode__['pages/user_profile/user_profile.json'] = {"usingComponents":{"bottom-loading":"/components/bottom_loading/bottom_loading","impression-me":"/components/impression_me/impression_me"},"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":" ","backgroundColor":"#ffffff","enablePullDownRefresh":true,"navigationStyle":"custom"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user_profile/user_profile.wxml'] = [$gwx, './pages/user_profile/user_profile.wxml'];else __wxAppCode__['pages/user_profile/user_profile.wxml'] = $gwx( './pages/user_profile/user_profile.wxml' );
	
	define("behaviors/impression-behaviors.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../utils/cgi"),
    util = require("../utils/util"),
    reporter = require("../utils/reporter"),
    reportEnum = require("../utils/reportEnum"),
    reportSession = require("../utils/report_session"),
    ugcStorage = require("../utils/ugcStorage"),
    declareBinding = require("../utils/model_lib/declareBinding"),
    PoiSchema = require("../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../utils/model/model_schema").CommentSchema,
    ContactSchema = require("../utils/model/model_schema").ContactSchema,
    PoiModel = require("../utils/model/poi_model"),
    CommentModel = require("../utils/model/comment_model"),
    startTimeStamp = "";module.exports = Behavior({ behaviors: [], properties: {}, data: { currentMedia: 0, canShare: util.canUseShareAppMessageAPI(), isShareShake: 0 }, attached: function attached() {}, ready: function ready() {}, created: function created() {}, detached: function detached() {}, methods: { noop: function noop() {}, bindlikechange: function bindlikechange(e) {
      app.getHasLaunched();
    }, bindshareshake: function bindshareshake(e) {
      this.setData({ isShareShake: e.detail.isShareShake });
    }, onTapPoi: function onTapPoi(e) {
      var t = this.data.renderData.poiInfo.poiId || "",
          a = this.data.renderData.visitCount;if (app.getHasLaunched()) {
        var r = this.data.renderData.reportData || {},
            n = this.data.renderData.commentId || "",
            o = this.data.renderData.friendMarkCount ? 1 : 0,
            i = reportEnum.enumFeedAction.FEED_CLIKED_POI,
            s = r.scene || 0,
            d = r.requestId || "",
            p = r.pageId || 0,
            m = r.recId || "",
            c = r.recType || 0,
            u = util.getImpressionType(this.data.renderData.contact.type);o && (u = reportEnum.enumFeedImpressionType.MARKED);var I = 0;this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (I = this.data.renderData.commentInfo.subCommentCount), wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t) + "&visitCount=" + a }), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(s).poiId().impressionId().impressionCommentCount(I).isForwardedImpression(o).poiIdString(t).impressionIdString(n).action(i).impressionType(u).requestId(d).pageId(p).reasonId().reasonIdString().recId(m).recType(c).reportToServer();
      }
    }, onTapImpression: function onTapImpression(e) {
      if (app.getHasLaunched()) {
        var t = this.data.renderData.commentId,
            a = 0;this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (a = this.data.renderData.commentInfo.subCommentCount);var r = 0 === a,
            n = this.data.renderData.reportData || {},
            o = this.data.renderData.commentId || "",
            i = this.data.renderData.friendMarkCount ? 1 : 0,
            s = reportEnum.enumFeedAction.FEED_CLIKED_IMPRESSION,
            d = n.scene || 0,
            p = this.data.renderData.poiInfo.poiId,
            m = n.requestId || "",
            c = n.pageId || 0,
            u = n.recId || "",
            I = n.recType || 0,
            l = util.getImpressionType(this.data.renderData.contact.type);i && (l = reportEnum.enumFeedImpressionType.MARKED), wx.navigateTo({ url: "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(t) + "&autoFocus=" + r + "&currentMedia=" + this.data.currentMedia + "&recId=" + u + "&recType=" + I }), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(a).isForwardedImpression(i).poiIdString(p).impressionIdString(o).action(s).impressionType(l).requestId(m).pageId(c).reasonId().reasonIdString().recId(u).recType(I).reportToServer();
      }
    }, onTapMarkTimelineItem: function onTapMarkTimelineItem(e) {
      if (app.getHasLaunched()) {
        var t = this.data.renderData,
            a = t.isMark ? 0 : 1,
            r = this.data.renderData.poiInfo.poiId;new PoiModel(r).toggleMark();var n = a,
            o = n ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";wx.vibrateShort(), wx.showToast({ title: o, icon: "none", duration: 2500 });var i = {};t.reportData && t.reportData.scene && (i.scene = t.reportData.scene), t.reportData && t.reportData.pageId && (i.pageId = t.reportData.pageId);var s = "";t.reportData && t.reportData.recId && (s = t.reportData.recId);var d = 0;t.reportData && t.reportData.recType && (d = t.reportData.recType), new cgi.SimpleRequest("markpoi", { baseRequest: i, poiId: t.poiInfo.poiId, flag: n, referId: t.impressionId, recId: s, recType: d }).send(function (e) {
          app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
        }, function (e) {
          console.error("markpoi resp failed", e);
        }), this.setData({ shouldShowCommentPanel: 1 }), !1 === ugcStorage.hasMarkAtTimeline() && (ugcStorage.updateMarkAtTimeline(), wx.showModal({ content: "你的“想去”将会通知印象作者。", showCancel: !1, confirmText: "知道了" }));
      }
    }, bindTapLocateMedia: function bindTapLocateMedia(e) {
      var t = e.currentTarget.dataset.media || {};this.data.currentMedia = t.id || 0;
    }, bindtapToUserProfile: function bindtapToUserProfile(e) {
      var t = e.currentTarget.dataset.contact;0 == t.type ? wx.navigateTo({ url: "/pages/me/me" }) : wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t)) });
    }, bindtapShowCommentPanel: function bindtapShowCommentPanel() {
      this.setData({ shouldShowCommentPanel: 1, shouldAutoFocusCommentPanel: 1 });
    }, bindhidecommmentpanel: function bindhidecommmentpanel() {
      this.setData({ shouldShowCommentPanel: 0 });
    }, bindtapShowCommentPanelNotFocus: function bindtapShowCommentPanelNotFocus() {
      this.setData({ shouldShowCommentPanel: 1, shouldAutoFocusCommentPanel: 0 });
    }, bindTapTag: function bindTapTag(e) {
      var t = e.currentTarget.dataset.name,
          a = e.currentTarget.dataset.id;wx.navigateTo({ url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify({ name: t, id: a })) });var r = this.data.renderData.reportData || {},
          n = this.data.renderData.poiInfo.poiId,
          o = this.data.renderData.commentId || "",
          i = this.data.renderData.friendMarkCount ? 1 : 0,
          s = reportEnum.enumFeedAction.FEED_CLIKED_TAG,
          d = r.scene || 0,
          p = r.requestId || "",
          m = r.pageId || 0,
          c = r.recId || "",
          u = r.recType || 0,
          I = util.getImpressionType(this.data.renderData.contact.type);i && (I = reportEnum.enumFeedImpressionType.MARKED);var l = 0;this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (l = this.data.renderData.commentInfo.subCommentCount), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(l).isForwardedImpression(i).poiIdString(n).impressionIdString(o).action(s).impressionType(I).requestId(p).pageId(m).reasonId().reasonIdString(a).recId(c).recType(u).reportToServer();
    }, toggleComment16483KvReport: function toggleComment16483KvReport(e) {
      var t = this.data.renderData.reportData || {},
          a = this.data.renderData.commentId || "",
          r = this.data.renderData.friendMarkCount ? 1 : 0,
          n = this.data.renderData.poiInfo.poiId || "",
          o = e.detail.shouldShowEllipse ? reportEnum.enumFeedAction.FEED_CLICKED_SHOW_ALL : reportEnum.enumFeedAction.FEED_CLICKED_FOLD_ALL,
          i = t.scene || 0,
          s = t.requestId || "",
          d = t.pageId || 0,
          p = t.recId || "",
          m = t.recType || 0,
          c = util.getImpressionType(this.data.renderData.contact.type);r && (c = reportEnum.enumFeedImpressionType.MARKED);var u = 0;this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (u = this.data.renderData.commentInfo.subCommentCount), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(i).poiId().impressionId().impressionCommentCount(u).isForwardedImpression(r).poiIdString(n).impressionIdString(a).action(o).impressionType(c).requestId(s).pageId(d).reasonId().reasonIdString().recId(p).recType(m).reportToServer();
    }, declareBindingForPoi: function declareBindingForPoi(e) {
      e.poiInfo && e.poiInfo.poiId && declareBinding({ instance: this, schema: PoiSchema, mapping: { "renderData.poiInfo.id": "id", "renderData.poiInfo.name": "name", "renderData.poiInfo.categoryName": "categoryName", "renderData.poiInfo.price": "price", "renderData.poiInfo.area": "area", "renderData.isMark": "isMark" } });
    }, declareBindingForContact: function declareBindingForContact(e) {
      e.contact && e.contact.userId && declareBinding({ instance: this, schema: ContactSchema, mapping: { "renderData.contact.userId": "id", "renderData.contact.follow": "follow", "renderData.contact.ugc.fansCount": "fansCount" } });
    } } }); 
 			}); 
		define("behaviors/media-behaviors.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../utils/util"),
    reporter = require("../utils/reporter"),
    app = getApp(),
    startTimeStamp = "";module.exports = Behavior({ behaviors: [], properties: { media: { type: Object } }, attached: function attached() {
    startTimeStamp = new Date().getTime();
  }, ready: function ready() {}, methods: { mediaKVReportBehavior: function mediaKVReportBehavior(e) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.media || {},
          t = new Date().getTime();i.duration;reporter.getReporter(16479).appVersion(app.globalData.sysInfo.version).publicLibVersion(app.globalData.sysInfo.SDKVersion).pagePath(this._getCurrentPagePath()).mediaType(this._getMediaInfo(i).mediaType).mediaSrc(this._getMediaInfo(i).mediaSrc).networkType(app.globalData.sysInfo.networkType).startLoadTime(startTimeStamp).endLoadTime(t).mediaSize(this._getMediaInfo(i).mediaSize).mediaWidth(e.detail.width).mediaHeight(e.detail.height).mediaDuration(this._getMediaInfo(i).mediaDuration).mediaScale(this._getMediaInfo(i).mediaScale).lazyReportToServer();
    }, _getMediaInfo: function _getMediaInfo(e) {
      var i = e.type,
          t = e.url,
          a = 0,
          r = 0,
          m = e.duration;return 0 === i ? e.midImageUrl && e.midImageUrl.length > 0 ? (t = e.midImageUrl, a = 1) : (t = e.url, a = 2) : (t = e.url, a = ""), 2 === a && e.imageSize ? r = e.imageSize : 1 === a && e.midImageSize ? r = e.midImageSize : 0 === a && e.thumbSize ? r = e.thumbSize : e.videoSize && (r = e.videoSize), e.isPosterImage && (r = e.thumbSize, t = e.thumbUrl, a = "", m = 0, i = 0), { mediaType: i, mediaSrc: t, mediaScale: a, mediaSize: r, mediaDuration: m };
    }, _getCurrentPagePath: function _getCurrentPagePath() {
      var e = getCurrentPages();return e[e.length - 1].route;
    } } }); 
 			}); 
		define("behaviors/page-observer-behaviors.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../utils/cgi"),
    util = require("../utils/util"),
    reporter = require("../utils/reporter"),
    reportEnum = require("../utils/reportEnum"),
    reportSession = require("../utils/report_session");module.exports = Behavior({ behaviors: [], properties: {}, data: {}, attached: function attached() {}, ready: function ready() {}, created: function created() {}, detached: function detached() {}, methods: { _pageExposeKvReport: function _pageExposeKvReport() {
      reporter.getReporter(16501).pageId(this._getEnumPageId()).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    }, _getEnumPageId: function _getEnumPageId() {
      var e = getCurrentPages(),
          r = e[e.length - 1].route,
          t = "";if (r) for (var o in t = r.match(/\/(.*)\//)[0].replace(/\//g, "").toUpperCase(), reportEnum.enumPageName) {
        if (o === t) return reportEnum.enumPageName[t];
      }return "";
    } } }); 
 			}); 
		define("components/impression_small/impression_small_contants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { width: 354, mediaMaxHeight: 532, textHeight: 242, textHeightNoComment: 150, margin: 10 }; 
 			}); 
		define("components/video_preview/videoStyleConstants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var r = "8rpx",
    TL = "border-top-left-radius: " + r,
    TR = "border-top-right-radius: " + r,
    BL = "border-bottom-left-radius: " + r,
    BR = "border-bottom-right-radius: " + r,
    FULL = "border-radius: " + r;module.exports = { radiusBorderStyle: { "1-1": FULL, "1-2": TL + ";" + BL, "2-2": TR + ";" + BR, "1-3": TL + ";" + BL, "2-3": TR, "3-3": BR, "1-4": TL, "2-4": TR, "3-4": BL, "4-4": BR, "1-5": TL, "2-5": TR, "3-5": "", "4-5": BL, "5-5": BR, "1-6": TL, "2-6": TR, "3-6": "", "4-6": BL, "5-6": "", "6-6": BR, "1-1--nearby": FULL, "1-2--nearby": FULL, "2-2--nearby": FULL, "1-1--forward": FULL, "1-2--forward": TL + ";" + BL, "2-2--forward": TR + ";" + BR, "1-3--forward": TL + ";" + BL, "2-3--forward": "", "3-3--forward": TR + ";" + BR, "1-1--small": TL + ";" + TR } }; 
 			}); 
		define("jslib/moment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};!function (e, t) {
  "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t();
}(void 0, function () {
  var e, t;function n() {
    return e.apply(null, arguments);
  }function s(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }function i(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }function r(e) {
    return void 0 === e;
  }function a(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }function o(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }function u(e, t) {
    var n,
        s = [];for (n = 0; n < e.length; ++n) {
      s.push(t(e[n], n));
    }return s;
  }function l(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }function d(e, t) {
    for (var n in t) {
      l(t, n) && (e[n] = t[n]);
    }return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }function h(e, t, n, s) {
    return Yt(e, t, n, s, !0).utc();
  }function c(e) {
    return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf;
  }function f(e) {
    if (null == e._isValid) {
      var n = c(e),
          s = t.call(n.parsedDateParts, function (e) {
        return null != e;
      }),
          i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;e._isValid = i;
    }return e._isValid;
  }function m(e) {
    var t = h(NaN);return null != e ? d(c(t), e) : c(t).userInvalidated = !0, t;
  }t = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) {
      if (s in t && e.call(this, t[s], s, t)) return !0;
    }return !1;
  };var _ = n.momentProperties = [];function y(e, t) {
    var n, s, i;if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = c(t)), r(t._locale) || (e._locale = t._locale), 0 < _.length) for (n = 0; n < _.length; n++) {
      r(i = t[s = _[n]]) || (e[s] = i);
    }return e;
  }var g = !1;function p(e) {
    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, n.updateOffset(this), g = !1);
  }function w(e) {
    return e instanceof p || null != e && null != e._isAMomentObject;
  }function v(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }function M(e) {
    var t = +e,
        n = 0;return 0 !== t && isFinite(t) && (n = v(t)), n;
  }function S(e, t, n) {
    var s,
        i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;for (s = 0; s < i; s++) {
      (n && e[s] !== t[s] || !n && M(e[s]) !== M(t[s])) && a++;
    }return a + r;
  }function D(e) {
    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }function k(e, t) {
    var s = !0;return d(function () {
      if (null != n.deprecationHandler && n.deprecationHandler(null, e), s) {
        for (var i, r = [], a = 0; a < arguments.length; a++) {
          if (i = "", "object" == _typeof(arguments[a])) {
            for (var o in i += "\n[" + a + "] ", arguments[0]) {
              i += o + ": " + arguments[0][o] + ", ";
            }i = i.slice(0, -2);
          } else i = arguments[a];r.push(i);
        }D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), s = !1;
      }return t.apply(this, arguments);
    }, t);
  }var Y,
      O = {};function T(e, t) {
    null != n.deprecationHandler && n.deprecationHandler(e, t), O[e] || (D(t), O[e] = !0);
  }function x(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }function b(e, t) {
    var n,
        s = d({}, e);for (n in t) {
      l(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {}, d(s[n], e[n]), d(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
    }for (n in e) {
      l(e, n) && !l(t, n) && i(e[n]) && (s[n] = d({}, s[n]));
    }return s;
  }function P(e) {
    null != e && this.set(e);
  }n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, Y = Object.keys ? Object.keys : function (e) {
    var t,
        n = [];for (t in e) {
      l(e, t) && n.push(t);
    }return n;
  };var W = {};function H(e, t) {
    var n = e.toLowerCase();W[n] = W[n + "s"] = W[t] = e;
  }function R(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }function C(e) {
    var t,
        n,
        s = {};for (n in e) {
      l(e, n) && (t = R(n)) && (s[t] = e[n]);
    }return s;
  }var F = {};function L(e, t) {
    F[e] = t;
  }function U(e, t, n) {
    var s = "" + Math.abs(e),
        i = t - s.length;return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
  }var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      V = {},
      E = {};function I(e, t, n, s) {
    var i = s;"string" == typeof s && (i = function i() {
      return this[s]();
    }), e && (E[e] = i), t && (E[t[0]] = function () {
      return U(i.apply(this, arguments), t[1], t[2]);
    }), n && (E[n] = function () {
      return this.localeData().ordinal(i.apply(this, arguments), e);
    });
  }function A(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function (e) {
      var t,
          n,
          s,
          i = e.match(N);for (t = 0, n = i.length; t < n; t++) {
        E[i[t]] ? i[t] = E[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
      }return function (t) {
        var s,
            r = "";for (s = 0; s < n; s++) {
          r += x(i[s]) ? i[s].call(t, e) : i[s];
        }return r;
      };
    }(t), V[t](e)) : e.localeData().invalidDate();
  }function j(e, t) {
    var n = 5;function s(e) {
      return t.longDateFormat(e) || e;
    }for (G.lastIndex = 0; 0 <= n && G.test(e);) {
      e = e.replace(G, s), G.lastIndex = 0, n -= 1;
    }return e;
  }var Z = /\d/,
      z = /\d\d/,
      $ = /\d{3}/,
      q = /\d{4}/,
      J = /[+-]?\d{6}/,
      B = /\d\d?/,
      Q = /\d\d\d\d?/,
      X = /\d\d\d\d\d\d?/,
      K = /\d{1,3}/,
      ee = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ne = /\d+/,
      se = /[+-]?\d+/,
      ie = /Z|[+-]\d\d:?\d\d/gi,
      re = /Z|[+-]\d\d(?::?\d\d)?/gi,
      ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      oe = {};function ue(e, t, n) {
    oe[e] = x(t) ? t : function (e, s) {
      return e && n ? n : t;
    };
  }function le(e, t) {
    return l(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
      return t || n || s || i;
    })));
  }function de(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }var he = {};function ce(e, t) {
    var n,
        s = t;for ("string" == typeof e && (e = [e]), a(t) && (s = function s(e, n) {
      n[t] = M(e);
    }), n = 0; n < e.length; n++) {
      he[e[n]] = s;
    }
  }function fe(e, t) {
    ce(e, function (e, n, s, i) {
      s._w = s._w || {}, t(e, s._w, s, i);
    });
  }var me = 0,
      _e = 1,
      ye = 2,
      ge = 3,
      pe = 4,
      we = 5,
      ve = 6,
      Me = 7,
      Se = 8;function De(e) {
    return ke(e) ? 366 : 365;
  }function ke(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }I("Y", 0, 0, function () {
    var e = this.year();return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), L("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
    t[me] = 2 === e.length ? n.parseTwoDigitYear(e) : M(e);
  }), ce("YY", function (e, t) {
    t[me] = n.parseTwoDigitYear(e);
  }), ce("Y", function (e, t) {
    t[me] = parseInt(e, 10);
  }), n.parseTwoDigitYear = function (e) {
    return M(e) + (68 < M(e) ? 1900 : 2e3);
  };var Ye,
      Oe = Te("FullYear", !0);function Te(e, t) {
    return function (s) {
      return null != s ? (be(this, e, s), n.updateOffset(this, t), this) : xe(this, e);
    };
  }function xe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }function be(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;var n = (t % 12 + 12) % 12;return e += (t - n) / 12, 1 === n ? ke(e) ? 29 : 28 : 31 - n % 7 % 2;
  }Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;for (t = 0; t < this.length; ++t) {
      if (this[t] === e) return t;
    }return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), H("month", "M"), L("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }), ue("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }), ce(["M", "MM"], function (e, t) {
    t[_e] = M(e) - 1;
  }), ce(["MMM", "MMMM"], function (e, t, n, s) {
    var i = n._locale.monthsParse(e, s, n._strict);null != i ? t[_e] = i : c(n).invalidMonth = e;
  });var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e, t) {
    var n;if (!e.isValid()) return e;if ("string" == typeof t) if (/^\d+$/.test(t)) t = M(t);else if (!a(t = e.localeData().monthsParse(t))) return e;return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }function Fe(e) {
    return null != e ? (Ce(this, e), n.updateOffset(this, !0), this) : xe(this, "Month");
  }var Le = ae,
      Ue = ae;function Ne() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        s = [],
        i = [],
        r = [];for (t = 0; t < 12; t++) {
      n = h([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    }for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) {
      s[t] = de(s[t]), i[t] = de(i[t]);
    }for (t = 0; t < 24; t++) {
      r[t] = de(r[t]);
    }this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }function Ge(e) {
    var t = new Date(Date.UTC.apply(null, arguments));return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
  }function Ve(e, t, n) {
    var s = 7 + t - n;return -(7 + Ge(e, 0, s).getUTCDay() - t) % 7 + s - 1;
  }function Ee(e, t, n, s, i) {
    var r,
        a,
        o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);return o <= 0 ? a = De(r = e - 1) + o : o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o), { year: r, dayOfYear: a };
  }function Ie(e, t, n) {
    var s,
        i,
        r = Ve(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), { week: s, year: i };
  }function Ae(e, t, n) {
    var s = Ve(e, t, n),
        i = Ve(e + 1, t, n);return (De(e) - s + i) / 7;
  }I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), L("week", 5), L("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
    t[s.substr(0, 1)] = M(e);
  }), I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }), ue("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }), ue("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
    var i = n._locale.weekdaysParse(e, s, n._strict);null != i ? t.d = i : c(n).invalidWeekday = e;
  }), fe(["d", "e", "E"], function (e, t, n, s) {
    t[s] = M(e);
  });var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      $e = ae,
      qe = ae,
      Je = ae;function Be() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        s,
        i,
        r,
        a = [],
        o = [],
        u = [],
        l = [];for (t = 0; t < 7; t++) {
      n = h([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
    }for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) {
      o[t] = de(o[t]), u[t] = de(u[t]), l[t] = de(l[t]);
    }this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
  }function Qe() {
    return this.hours() % 12 || 12;
  }function Xe(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }function Ke(e, t) {
    return t._meridiemParse;
  }I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Qe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), Xe("a", !0), Xe("A", !1), H("hour", "h"), L("hour", 13), ue("a", Ke), ue("A", Ke), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function (e, t, n) {
    var s = M(e);t[ge] = 24 === s ? 0 : s;
  }), ce(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  }), ce(["h", "hh"], function (e, t, n) {
    t[ge] = M(e), c(n).bigHour = !0;
  }), ce("hmm", function (e, t, n) {
    var s = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s)), c(n).bigHour = !0;
  }), ce("hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[we] = M(e.substr(i)), c(n).bigHour = !0;
  }), ce("Hmm", function (e, t, n) {
    var s = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s));
  }), ce("Hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[we] = M(e.substr(i));
  });var et,
      tt = Te("Hours", !0),
      nt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: He, monthsShort: Re, week: { dow: 0, doy: 6 }, weekdays: je, weekdaysMin: ze, weekdaysShort: Ze, meridiemParse: /[ap]\.?m?\.?/i },
      st = {},
      it = {};function rt(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }function at(e) {
    var t = null;if (!st[e] && "undefined" != typeof module && module && module.exports) try {
      t = et._abbr, require("./locale/" + e), ot(t);
    } catch (e) {}return st[e];
  }function ot(e, t) {
    var n;return e && ((n = r(t) ? lt(e) : ut(e, t)) ? et = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr;
  }function ut(e, t) {
    if (null !== t) {
      var n,
          s = nt;if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = st[e]._config;else if (null != t.parentLocale) if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;else {
        if (null == (n = at(t.parentLocale))) return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({ name: e, config: t }), null;s = n._config;
      }return st[e] = new P(b(s, t)), it[e] && it[e].forEach(function (e) {
        ut(e.name, e.config);
      }), ot(e), st[e];
    }return delete st[e], null;
  }function lt(e) {
    var t;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;if (!s(e)) {
      if (t = at(e)) return t;e = [e];
    }return function (e) {
      for (var t, n, s, i, r = 0; r < e.length;) {
        for (t = (i = rt(e[r]).split("-")).length, n = (n = rt(e[r + 1])) ? n.split("-") : null; 0 < t;) {
          if (s = at(i.slice(0, t).join("-"))) return s;if (n && n.length >= t && S(i, n, !0) >= t - 1) break;t--;
        }r++;
      }return et;
    }(e);
  }function dt(e) {
    var t,
        n = e._a;return n && -2 === c(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[pe] || 0 !== n[we] || 0 !== n[ve]) ? ge : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 59 < n[we] ? we : n[ve] < 0 || 999 < n[ve] ? ve : -1, c(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), c(e)._overflowWeeks && -1 === t && (t = Me), c(e)._overflowWeekday && -1 === t && (t = Se), c(e).overflow = t), e;
  }function ht(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }function ct(e) {
    var t,
        s,
        i,
        r,
        a,
        o = [];if (!e._d) {
      var u, l;for (u = e, l = new Date(n.now()), i = u._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function (e) {
        var t, n, s, i, r, a, o, u;if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ht(t.GG, e._a[me], Ie(Ot(), 1, 4).year), s = ht(t.W, 1), ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);else {
          r = e._locale._week.dow, a = e._locale._week.doy;var l = Ie(Ot(), r, a);n = ht(t.gg, e._a[me], l.year), s = ht(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r;
        }s < 1 || s > Ae(n, r, a) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear);
      }(e), null != e._dayOfYear && (a = ht(e._a[me], i[me]), (e._dayOfYear > De(a) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), s = Ge(a, 0, e._dayOfYear), e._a[_e] = s.getUTCMonth(), e._a[ye] = s.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
        e._a[t] = o[t] = i[t];
      }for (; t < 7; t++) {
        e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      }24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[we] && 0 === e._a[ve] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function (e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e), o;
      }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0);
    }
  }var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _t = /Z|[+-]\d\d(?::?\d\d)?/,
      yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      pt = /^\/?Date\((\-?\d+)/i;function wt(e) {
    var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = ft.exec(o) || mt.exec(o);if (u) {
      for (c(e).iso = !0, t = 0, n = yt.length; t < n; t++) {
        if (yt[t][1].exec(u[1])) {
          i = yt[t][0], s = !1 !== yt[t][2];break;
        }
      }if (null == i) return void (e._isValid = !1);if (u[3]) {
        for (t = 0, n = gt.length; t < n; t++) {
          if (gt[t][1].exec(u[3])) {
            r = (u[2] || " ") + gt[t][0];break;
          }
        }if (null == r) return void (e._isValid = !1);
      }if (!s && null != r) return void (e._isValid = !1);if (u[4]) {
        if (!_t.exec(u[4])) return void (e._isValid = !1);a = "Z";
      }e._f = i + (r || "") + (a || ""), Dt(e);
    } else e._isValid = !1;
  }var vt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;var Mt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function St(e) {
    var t,
        n,
        s,
        i = vt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));if (i) {
      var r = function (e, t, n, s, i, r) {
        var a = [function (e) {
          var t = parseInt(e, 10);return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
        }(e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];return r && a.push(parseInt(r, 10)), a;
      }(i[4], i[3], i[2], i[5], i[6], i[7]);if (n = r, s = e, (t = i[1]) && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (c(s).weekdayMismatch = !0, !(s._isValid = !1))) return;e._a = r, e._tzm = function (e, t, n) {
        if (e) return Mt[e];if (t) return 0;var s = parseInt(n, 10),
            i = s % 100;return (s - i) / 100 * 60 + i;
      }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0;
    } else e._isValid = !1;
  }function Dt(e) {
    if (e._f !== n.ISO_8601) {
      if (e._f !== n.RFC_2822) {
        e._a = [], c(e).empty = !0;var t,
            s,
            i,
            r,
            a,
            o,
            u,
            d,
            h = "" + e._i,
            f = h.length,
            m = 0;for (i = j(e._f, e._locale).match(N) || [], t = 0; t < i.length; t++) {
          r = i[t], (s = (h.match(le(r, e)) || [])[0]) && (0 < (a = h.substr(0, h.indexOf(s))).length && c(e).unusedInput.push(a), h = h.slice(h.indexOf(s) + s.length), m += s.length), E[r] ? (s ? c(e).empty = !1 : c(e).unusedTokens.push(r), o = r, d = e, null != (u = s) && l(he, o) && he[o](u, d._a, d, o)) : e._strict && !s && c(e).unusedTokens.push(r);
        }c(e).charsLeftOver = f - m, 0 < h.length && c(e).unusedInput.push(h), e._a[ge] <= 12 && !0 === c(e).bigHour && 0 < e._a[ge] && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
          var s;return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t);
        }(e._locale, e._a[ge], e._meridiem), ct(e), dt(e);
      } else St(e);
    } else wt(e);
  }function kt(e) {
    var t,
        l,
        h,
        _,
        g = e._i,
        v = e._f;return e._locale = e._locale || lt(e._l), null === g || void 0 === v && "" === g ? m({ nullInput: !0 }) : ("string" == typeof g && (e._i = g = e._locale.preparse(g)), w(g) ? new p(dt(g)) : (o(g) ? e._d = g : s(v) ? function (e) {
      var t, n, s, i, r;if (0 === e._f.length) return c(e).invalidFormat = !0, e._d = new Date(NaN);for (i = 0; i < e._f.length; i++) {
        r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Dt(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == s || r < s) && (s = r, n = t));
      }d(e, n || t);
    }(e) : v ? Dt(e) : r(l = (t = e)._i) ? t._d = new Date(n.now()) : o(l) ? t._d = new Date(l.valueOf()) : "string" == typeof l ? (h = t, null === (_ = pt.exec(h._i)) ? (wt(h), !1 === h._isValid && (delete h._isValid, St(h), !1 === h._isValid && (delete h._isValid, n.createFromInputFallback(h)))) : h._d = new Date(+_[1])) : s(l) ? (t._a = u(l.slice(0), function (e) {
      return parseInt(e, 10);
    }), ct(t)) : i(l) ? function (e) {
      if (!e._d) {
        var t = C(e._i);e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), ct(e);
      }
    }(t) : a(l) ? t._d = new Date(l) : n.createFromInputFallback(t), f(e) || (e._d = null), e));
  }function Yt(e, t, n, r, a) {
    var o,
        u = {};return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;var t;for (t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }return !0;
    }(e) || s(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new p(dt(kt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
  }function Ot(e, t, n, s) {
    return Yt(e, t, n, s, !1);
  }n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), n.ISO_8601 = function () {}, n.RFC_2822 = function () {};var Tt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Ot.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : m();
  }),
      xt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Ot.apply(null, arguments);return this.isValid() && e.isValid() ? this < e ? this : e : m();
  });function bt(e, t) {
    var n, i;if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Ot();for (n = t[0], i = 1; i < t.length; ++i) {
      t[i].isValid() && !t[i][e](n) || (n = t[i]);
    }return n;
  }var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Wt(e) {
    var t = C(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        d = t.millisecond || 0;this._isValid = function (e) {
      for (var t in e) {
        if (-1 === Ye.call(Pt, t) || null != e[t] && isNaN(e[t])) return !1;
      }for (var n = !1, s = 0; s < Pt.length; ++s) {
        if (e[Pt[s]]) {
          if (n) return !1;parseFloat(e[Pt[s]]) !== M(e[Pt[s]]) && (n = !0);
        }
      }return !0;
    }(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = lt(), this._bubble();
  }function Ht(e) {
    return e instanceof Wt;
  }function Rt(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }function Ct(e, t) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          n = "+";return e < 0 && (e = -e, n = "-"), n + U(~~(e / 60), 2) + t + U(~~e % 60, 2);
    });
  }Ct("Z", ":"), Ct("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = Lt(re, e);
  });var Ft = /([\+\-]|\d\d)/gi;function Lt(e, t) {
    var n = (t || "").match(e);if (null === n) return null;var s = ((n[n.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
        i = 60 * s[1] + M(s[2]);return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }function Ut(e, t) {
    var s, i;return t._isUTC ? (s = t.clone(), i = (w(e) || o(e) ? e.valueOf() : Ot(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), n.updateOffset(s, !1), s) : Ot(e).local();
  }function Nt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }function Gt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }n.updateOffset = function () {};var Vt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Et = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function It(e, t) {
    var n,
        s,
        i,
        r = e,
        o = null;return Ht(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : a(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = Vt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = { y: 0, d: M(o[ye]) * n, h: M(o[ge]) * n, m: M(o[pe]) * n, s: M(o[we]) * n, ms: M(Rt(1e3 * o[ve])) * n }) : (o = Et.exec(e)) ? (n = "-" === o[1] ? -1 : (o[1], 1), r = { y: At(o[2], n), M: At(o[3], n), w: At(o[4], n), d: At(o[5], n), h: At(o[6], n), m: At(o[7], n), s: At(o[8], n) }) : null == r ? r = {} : "object" == (void 0 === r ? "undefined" : _typeof(r)) && ("from" in r || "to" in r) && (i = function (e, t) {
      var n;return e.isValid() && t.isValid() ? (t = Ut(t, e), e.isBefore(t) ? n = jt(e, t) : ((n = jt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
    }(Ot(r.from), Ot(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Wt(r), Ht(e) && l(e, "_locale") && (s._locale = e._locale), s;
  }function At(e, t) {
    var n = e && parseFloat(e.replace(",", "."));return (isNaN(n) ? 0 : n) * t;
  }function jt(e, t) {
    var n = { milliseconds: 0, months: 0 };return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }function Zt(e, t) {
    return function (n, s) {
      var i;return null === s || isNaN(+s) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = s, s = i), zt(this, It(n = "string" == typeof n ? +n : n, s), e), this;
    };
  }function zt(e, t, s, i) {
    var r = t._milliseconds,
        a = Rt(t._days),
        o = Rt(t._months);e.isValid() && (i = null == i || i, o && Ce(e, xe(e, "Month") + o * s), a && be(e, "Date", xe(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), i && n.updateOffset(e, a || o));
  }It.fn = Wt.prototype, It.invalid = function () {
    return It(NaN);
  };var $t = Zt(1, "add"),
      qt = Zt(-1, "subtract");function Jt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0;
  }function Bt(e) {
    var t;return void 0 === e ? this._locale._abbr : (null != (t = lt(e)) && (this._locale = t), this);
  }n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Qt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });function Xt() {
    return this._locale;
  }function Kt(e, t) {
    I(0, [e, e.length], 0, t);
  }function en(e, t, n, s, i) {
    var r;return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function (e, t, n, s, i) {
      var r = Ee(e, t, n, s, i),
          a = Ge(r.year, 0, r.dayOfYear);return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
    }.call(this, e, t, n, s, i));
  }I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Kt("gggg", "weekYear"), Kt("ggggg", "weekYear"), Kt("GGGG", "isoWeekYear"), Kt("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
    t[s.substr(0, 2)] = M(e);
  }), fe(["gg", "GG"], function (e, t, s, i) {
    t[i] = n.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), H("quarter", "Q"), L("quarter", 7), ue("Q", Z), ce("Q", function (e, t) {
    t[_e] = 3 * (M(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), H("date", "D"), L("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }), ce(["D", "DD"], ye), ce("Do", function (e, t) {
    t[ye] = M(e.match(B)[0]);
  });var tn = Te("Date", !0);I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), L("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = M(e);
  }), I("m", ["mm", 2], 0, "minute"), H("minute", "m"), L("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], pe);var nn = Te("Minutes", !1);I("s", ["ss", 2], 0, "second"), H("second", "s"), L("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], we);var sn,
      rn = Te("Seconds", !1);for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), H("millisecond", "ms"), L("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), sn = "SSSS"; sn.length <= 9; sn += "S") {
    ue(sn, ne);
  }function an(e, t) {
    t[ve] = M(1e3 * ("0." + e));
  }for (sn = "S"; sn.length <= 9; sn += "S") {
    ce(sn, an);
  }var on = Te("Milliseconds", !1);I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");var un = p.prototype;function ln(e) {
    return e;
  }un.add = $t, un.calendar = function (e, t) {
    var s = e || Ot(),
        i = Ut(s, this).startOf("day"),
        r = n.calendarFormat(this, i) || "sameElse",
        a = t && (x(t[r]) ? t[r].call(this, s) : t[r]);return this.format(a || this.localeData().calendar(r, this, Ot(s)));
  }, un.clone = function () {
    return new p(this);
  }, un.diff = function (e, t, n) {
    var s, i, r;if (!this.isValid()) return NaN;if (!(s = Ut(e, this)).isValid()) return NaN;switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = R(t)) {case "year":
        r = Jt(this, s) / 12;break;case "month":
        r = Jt(this, s);break;case "quarter":
        r = Jt(this, s) / 3;break;case "second":
        r = (this - s) / 1e3;break;case "minute":
        r = (this - s) / 6e4;break;case "hour":
        r = (this - s) / 36e5;break;case "day":
        r = (this - s - i) / 864e5;break;case "week":
        r = (this - s - i) / 6048e5;break;default:
        r = this - s;}return n ? r : v(r);
  }, un.endOf = function (e) {
    return void 0 === (e = R(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, un.format = function (e) {
    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);var t = A(this, e);return this.localeData().postformat(t);
  }, un.from = function (e, t) {
    return this.isValid() && (w(e) && e.isValid() || Ot(e).isValid()) ? It({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, un.fromNow = function (e) {
    return this.from(Ot(), e);
  }, un.to = function (e, t) {
    return this.isValid() && (w(e) && e.isValid() || Ot(e).isValid()) ? It({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, un.toNow = function (e) {
    return this.to(Ot(), e);
  }, un.get = function (e) {
    return x(this[e = R(e)]) ? this[e]() : this;
  }, un.invalidAt = function () {
    return c(this).overflow;
  }, un.isAfter = function (e, t) {
    var n = w(e) ? e : Ot(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(r(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }, un.isBefore = function (e, t) {
    var n = w(e) ? e : Ot(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(r(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }, un.isBetween = function (e, t, n, s) {
    return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
  }, un.isSame = function (e, t) {
    var n,
        s = w(e) ? e : Ot(e);return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }, un.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }, un.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }, un.isValid = function () {
    return f(this);
  }, un.lang = Qt, un.locale = Bt, un.localeData = Xt, un.max = xt, un.min = Tt, un.parsingFlags = function () {
    return d({}, c(this));
  }, un.set = function (e, t) {
    if ("object" == (void 0 === e ? "undefined" : _typeof(e))) for (var n = function (e) {
      var t = [];for (var n in e) {
        t.push({ unit: n, priority: F[n] });
      }return t.sort(function (e, t) {
        return e.priority - t.priority;
      }), t;
    }(e = C(e)), s = 0; s < n.length; s++) {
      this[n[s].unit](e[n[s].unit]);
    } else if (x(this[e = R(e)])) return this[e](t);return this;
  }, un.startOf = function (e) {
    switch (e = R(e)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, un.subtract = qt, un.toArray = function () {
    var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, un.toObject = function () {
    var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
  }, un.toDate = function () {
    return new Date(this.valueOf());
  }, un.toISOString = function (e) {
    if (!this.isValid()) return null;var t = !0 !== e,
        n = t ? this.clone().utc() : this;return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, un.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
        t = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
  }, un.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, un.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, un.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, un.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, un.creationData = function () {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }, un.year = Oe, un.isLeapYear = function () {
    return ke(this.year());
  }, un.weekYear = function (e) {
    return en.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, un.isoWeekYear = function (e) {
    return en.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, un.quarter = un.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, un.month = Fe, un.daysInMonth = function () {
    return Pe(this.year(), this.month());
  }, un.week = un.weeks = function (e) {
    var t = this.localeData().week(this);return null == e ? t : this.add(7 * (e - t), "d");
  }, un.isoWeek = un.isoWeeks = function (e) {
    var t = Ie(this, 1, 4).week;return null == e ? t : this.add(7 * (e - t), "d");
  }, un.weeksInYear = function () {
    var e = this.localeData()._week;return Ae(this.year(), e.dow, e.doy);
  }, un.isoWeeksInYear = function () {
    return Ae(this.year(), 1, 4);
  }, un.date = tn, un.day = un.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s;
  }, un.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? t : this.add(e - t, "d");
  }, un.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      var t = (n = e, s = this.localeData(), "string" == typeof n ? s.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);return this.day(this.day() % 7 ? t : t - 7);
    }return this.day() || 7;var n, s;
  }, un.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? t : this.add(e - t, "d");
  }, un.hour = un.hours = tt, un.minute = un.minutes = nn, un.second = un.seconds = rn, un.millisecond = un.milliseconds = on, un.utcOffset = function (e, t, s) {
    var i,
        r = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = Lt(re, e))) return this;
      } else Math.abs(e) < 16 && !s && (e *= 60);return !this._isUTC && t && (i = Nt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? zt(this, It(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? r : Nt(this);
  }, un.utc = function (e) {
    return this.utcOffset(0, e);
  }, un.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Nt(this), "m")), this;
  }, un.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Lt(ie, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }return this;
  }, un.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? Ot(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, un.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, un.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, un.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, un.isUtc = Gt, un.isUTC = Gt, un.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, un.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, un.dates = k("dates accessor is deprecated. Use date instead.", tn), un.months = k("months accessor is deprecated. Use month instead", Fe), un.years = k("years accessor is deprecated. Use year instead", Oe), un.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }), un.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!r(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (y(e, this), (e = kt(e))._a) {
      var t = e._isUTC ? h(e._a) : Ot(e._a);this._isDSTShifted = this.isValid() && 0 < S(e._a, t.toArray());
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  });var dn = P.prototype;function hn(e, t, n, s) {
    var i = lt(),
        r = h().set(s, t);return i[n](r, e);
  }function cn(e, t, n) {
    if (a(e) && (t = e, e = void 0), e = e || "", null != t) return hn(e, t, n, "month");var s,
        i = [];for (s = 0; s < 12; s++) {
      i[s] = hn(e, s, n, "month");
    }return i;
  }function fn(e, t, n, s) {
    "boolean" == typeof e ? a(t) && (n = t, t = void 0) : (t = e, e = !1, a(n = t) && (n = t, t = void 0)), t = t || "";var i,
        r = lt(),
        o = e ? r._week.dow : 0;if (null != n) return hn(t, (n + o) % 7, s, "day");var u = [];for (i = 0; i < 7; i++) {
      u[i] = hn(t, (i + o) % 7, s, "day");
    }return u;
  }dn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;return x(s) ? s.call(t, n) : s;
  }, dn.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, dn.invalidDate = function () {
    return this._invalidDate;
  }, dn.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, dn.preparse = ln, dn.postformat = ln, dn.relativeTime = function (e, t, n, s) {
    var i = this._relativeTime[n];return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
  }, dn.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];return x(n) ? n(t) : n.replace(/%s/i, t);
  }, dn.set = function (e) {
    var t, n;for (n in e) {
      x(t = e[n]) ? this[n] = t : this["_" + n] = t;
    }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, dn.months = function (e, t) {
    return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone;
  }, dn.monthsShort = function (e, t) {
    return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, dn.monthsParse = function (e, t, n) {
    var s, i, r;if (this._monthsParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        r = h([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
      }return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null;
    }.call(this, e, t, n);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (i = h([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;if (!n && this._monthsParse[s].test(e)) return s;
    }
  }, dn.monthsRegex = function (e) {
    return this._monthsParseExact ? (l(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, dn.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (l(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, dn.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, dn.firstDayOfYear = function () {
    return this._week.doy;
  }, dn.firstDayOfWeek = function () {
    return this._week.dow;
  }, dn.weekdays = function (e, t) {
    return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, dn.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, dn.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, dn.weekdaysParse = function (e, t, n) {
    var s, i, r;if (this._weekdaysParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        r = h([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
      }return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null;
    }.call(this, e, t, n);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (i = h([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;if (!n && this._weekdaysParse[s].test(e)) return s;
    }
  }, dn.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, dn.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, dn.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, dn.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, dn.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, ot("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
      var t = e % 10;return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    } }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", ot), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", lt);var mn = Math.abs;function _n(e, t, n, s) {
    var i = It(t, n);return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble();
  }function yn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }function gn(e) {
    return 4800 * e / 146097;
  }function pn(e) {
    return 146097 * e / 4800;
  }function wn(e) {
    return function () {
      return this.as(e);
    };
  }var vn = wn("ms"),
      Mn = wn("s"),
      Sn = wn("m"),
      Dn = wn("h"),
      kn = wn("d"),
      Yn = wn("w"),
      On = wn("M"),
      Tn = wn("y");function xn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }var bn = xn("milliseconds"),
      Pn = xn("seconds"),
      Wn = xn("minutes"),
      Hn = xn("hours"),
      Rn = xn("days"),
      Cn = xn("months"),
      Fn = xn("years"),
      Ln = Math.round,
      Un = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      Nn = Math.abs;function Gn(e) {
    return (0 < e) - (e < 0) || +e;
  }function Vn() {
    if (!this.isValid()) return this.localeData().invalidDate();var e,
        t,
        n = Nn(this._milliseconds) / 1e3,
        s = Nn(this._days),
        i = Nn(this._months);t = v((e = v(n / 60)) / 60), n %= 60, e %= 60;var r = v(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        h = this.asSeconds();if (!h) return "P0D";var c = h < 0 ? "-" : "",
        f = Gn(this._months) !== Gn(h) ? "-" : "",
        m = Gn(this._days) !== Gn(h) ? "-" : "",
        _ = Gn(this._milliseconds) !== Gn(h) ? "-" : "";return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "");
  }var En = Wt.prototype;return En.isValid = function () {
    return this._isValid;
  }, En.abs = function () {
    var e = this._data;return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), e.milliseconds = mn(e.milliseconds), e.seconds = mn(e.seconds), e.minutes = mn(e.minutes), e.hours = mn(e.hours), e.months = mn(e.months), e.years = mn(e.years), this;
  }, En.add = function (e, t) {
    return _n(this, e, t, 1);
  }, En.subtract = function (e, t) {
    return _n(this, e, t, -1);
  }, En.as = function (e) {
    if (!this.isValid()) return NaN;var t,
        n,
        s = this._milliseconds;if ("month" === (e = R(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + gn(t), "month" === e ? n : n / 12;switch (t = this._days + Math.round(pn(this._months)), e) {case "week":
        return t / 7 + s / 6048e5;case "day":
        return t + s / 864e5;case "hour":
        return 24 * t + s / 36e5;case "minute":
        return 1440 * t + s / 6e4;case "second":
        return 86400 * t + s / 1e3;case "millisecond":
        return Math.floor(864e5 * t) + s;default:
        throw new Error("Unknown unit " + e);}
  }, En.asMilliseconds = vn, En.asSeconds = Mn, En.asMinutes = Sn, En.asHours = Dn, En.asDays = kn, En.asWeeks = Yn, En.asMonths = On, En.asYears = Tn, En.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN;
  }, En._bubble = function () {
    var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * yn(pn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = v(r / 1e3), u.seconds = e % 60, t = v(e / 60), u.minutes = t % 60, n = v(t / 60), u.hours = n % 24, o += i = v(gn(a += v(n / 24))), a -= yn(pn(i)), s = v(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this;
  }, En.clone = function () {
    return It(this);
  }, En.get = function (e) {
    return e = R(e), this.isValid() ? this[e + "s"]() : NaN;
  }, En.milliseconds = bn, En.seconds = Pn, En.minutes = Wn, En.hours = Hn, En.days = Rn, En.weeks = function () {
    return v(this.days() / 7);
  }, En.months = Cn, En.years = Fn, En.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h = this.localeData(),
        c = (t = !e, n = h, s = It(this).abs(), i = Ln(s.as("s")), r = Ln(s.as("m")), a = Ln(s.as("h")), o = Ln(s.as("d")), u = Ln(s.as("M")), l = Ln(s.as("y")), (d = i <= Un.ss && ["s", i] || i < Un.s && ["ss", i] || r <= 1 && ["m"] || r < Un.m && ["mm", r] || a <= 1 && ["h"] || a < Un.h && ["hh", a] || o <= 1 && ["d"] || o < Un.d && ["dd", o] || u <= 1 && ["M"] || u < Un.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l])[2] = t, d[3] = 0 < +this, d[4] = n, function (e, t, n, s, i) {
      return i.relativeTime(t || 1, !!n, e, s);
    }.apply(null, d));return e && (c = h.pastFuture(+this, c)), h.postformat(c);
  }, En.toISOString = Vn, En.toString = Vn, En.toJSON = Vn, En.locale = Bt, En.localeData = Xt, En.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn), En.lang = Qt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10));
  }), ce("x", function (e, t, n) {
    n._d = new Date(M(e));
  }), n.version = "2.22.2", e = Ot, n.fn = un, n.min = function () {
    return bt("isBefore", [].slice.call(arguments, 0));
  }, n.max = function () {
    return bt("isAfter", [].slice.call(arguments, 0));
  }, n.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, n.utc = h, n.unix = function (e) {
    return Ot(1e3 * e);
  }, n.months = function (e, t) {
    return cn(e, t, "months");
  }, n.isDate = o, n.locale = ot, n.invalid = m, n.duration = It, n.isMoment = w, n.weekdays = function (e, t, n) {
    return fn(e, t, n, "weekdays");
  }, n.parseZone = function () {
    return Ot.apply(null, arguments).parseZone();
  }, n.localeData = lt, n.isDuration = Ht, n.monthsShort = function (e, t) {
    return cn(e, t, "monthsShort");
  }, n.weekdaysMin = function (e, t, n) {
    return fn(e, t, n, "weekdaysMin");
  }, n.defineLocale = ut, n.updateLocale = function (e, t) {
    if (null != t) {
      var n,
          s,
          i = nt;null != (s = at(e)) && (i = s._config), (n = new P(t = b(i, t))).parentLocale = st[e], st[e] = n, ot(e);
    } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);return st[e];
  }, n.locales = function () {
    return Y(st);
  }, n.weekdaysShort = function (e, t, n) {
    return fn(e, t, n, "weekdaysShort");
  }, n.normalizeUnits = R, n.relativeTimeRounding = function (e) {
    return void 0 === e ? Ln : "function" == typeof e && (Ln = e, !0);
  }, n.relativeTimeThreshold = function (e, t) {
    return void 0 !== Un[e] && (void 0 === t ? Un[e] : (Un[e] = t, "s" === e && (Un.ss = t - 1), !0));
  }, n.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, n.prototype = un, n.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, n;
}); 
 			}); 
		define("pages/timeline/waterfall.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}var util = require("../../utils/util"),
    renderDataUtil = require("../../utils/render_data_util"),
    enumRecommendVisitInfoType = { impression: 1, topic: 2 },
    impressionSmallContants = require("../../components/impression_small/impression_small_contants"),
    APPEND = 1,
    REPLACE = 0;function createWaterfall(e, t, i) {
  var n = {},
      a = 0,
      o = 0,
      r = 0,
      s = 0;return n.replace = function (e) {
    a = 0, o = 0, r = 0, s = 0, 0, n.insert(e, REPLACE);
  }, n.append = function (e) {
    n.insert(e, APPEND);
  }, n.insert = function (n, l) {
    var m,
        u = {},
        d = [],
        c = [],
        p = void 0;(p = l ? e.data[t].length + e.data[i].length : 0, n.forEach(function (e, n) {
      e.index = p + n;var m = impressionSmallContants.margin,
          h = void 0;if (enumRecommendVisitInfoType.topic == e.type) h = e.height;else {
        var f = e,
            g = 0,
            q = util.clone(renderDataUtil.getCommentMediaInfo(f.comment)[0]);q && q.height && q.width && (g = 1 * impressionSmallContants.width * q.height / q.width) > impressionSmallContants.mediaMaxHeight && (g = impressionSmallContants.mediaMaxHeight), h = JSON.parse(f.comment.info).content.replace(/^\s+|\s+$/g, "") ? g + impressionSmallContants.textHeight : g + impressionSmallContants.textHeightNoComment;
      }return a <= r ? (a += h + m, l ? u[t + "[" + o + "]"] = { data: e, sizeInfo: { cardHeight: h, colIndex: o, heightFromTop: a }, unqiue: e.unqiue + "-" + o } : d.push({ data: e, sizeInfo: { cardHeight: h, colIndex: o, heightFromTop: a }, unqiue: e.unqiue + "-" + o }), void o++) : (r += h + m, l ? u[i + "[" + s + "]"] = { data: e, sizeInfo: { cardHeight: h, colIndex: s, heightFromTop: r }, unqiue: e.unqiue + "-" + s } : c.push({ data: e, sizeInfo: { cardHeight: h, colIndex: s, heightFromTop: r }, unqiue: e.unqiue + "-" + s }), void s++);
    }), l) ? e.setData(u) : e.setData((_defineProperty(m = {}, t, d), _defineProperty(m, i, c), m));
  }, n;
}module.exports = { createWaterfall: createWaterfall }; 
 			}); 
		define("utils/ABTestUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util.js"),
    showActionSheetBeforePostViewAppear = !1,
    mainTab = 0;function getIntValueFromApiRes(e) {
  return e ? void 0 === e.testConfig ? (console.error("getIntValueFromApiRes, res.testConfig is undefined, return"), 0) : (console.log("res.testConfig=" + e.testConfig), e.testConfig ? parseInt(e.testConfig) : 0) : (console.error("getIntValueFromApiRes, no res, return"), 0);
}function getBoolValueFromApiRes(e) {
  return 0 != getIntValueFromApiRes(e);
}function getAllABTestValues() {
  wx.getABTestConfig ? (showActionSheetBeforePostViewAppear = !0, wx.getABTestConfig({ experimentId: "mmlifeapp_cli_write_interface_switch", experimentType: "Expt", success: function success(e) {
      console.log("wx getABTestConfig mmlifeapp_cli_write_interface_switch success: " + JSON.stringify(e)), showActionSheetBeforePostViewAppear = getBoolValueFromApiRes(e);
    }, fail: function fail(e) {
      console.error("wx getABTestConfig mmlifeapp_cli_write_interface_switch failed: " + JSON.stringify(e));
    } }), wx.getABTestConfig({ experimentId: "mmlifeapp_main_tab", experimentType: "Expt", success: function success(e) {
      console.log("wx getABTestConfig mmlifeapp_main_tab success: " + JSON.stringify(e)), mainTab = null == e.testConfig || "" === e.testConfig ? 0 : getIntValueFromApiRes(e), util.notifyOneTimeEvent("ABTestUtil_getMainTab", mainTab);
    }, fail: function fail(e) {
      console.error("wx getABTestConfig mmlifeapp_main_tab failed: " + JSON.stringify(e)), util.notifyOneTimeEvent("ABTestUtil_getMainTab", mainTab);
    } })) : console.error("no wx.getABTestConfig api");
}function shouldShowActionSheetBeforePostViewAppear() {
  return showActionSheetBeforePostViewAppear;
}function getMainTab() {
  return mainTab;
}module.exports = { getMainTab: getMainTab, getAllABTestValues: getAllABTestValues, shouldShowActionSheetBeforePostViewAppear: shouldShowActionSheetBeforePostViewAppear }; 
 			}); 
		define("utils/appLaunchData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util.js"),
    storage = require("./storage.js"),
    APP_LAUNCH_DATA_USER_LAST_LATITUDE = "AppLaunchDataUserLastLatitude",
    APP_LAUNCH_DATA_USER_LAST_LONGITUDE = "AppLaunchDataUserLastLongitude",
    APP_LAUNCH_DATA_USER_LAST_AREA_ID = "AppLaunchDataUserLastSelectedAreaId",
    APP_LAUNCH_DATA_USER_LAST_OPEN_ID = "AppLaunchDataUserLastOpenId",
    APP_LAUNCH_DATA_USER_LAST_ROUTE_ID = "AppLaunchDataUserLastRouteId",
    APP_LAUNCH_DATA_USER_LAST_SESSION_KEY = "AppLaunchDataUserLastSessionKey",
    hasCheckedRealCurrentLocation = !1,
    useRealCurrentLocation = !1,
    latitude = storage.getFloatNumber(APP_LAUNCH_DATA_USER_LAST_LATITUDE),
    longitude = storage.getFloatNumber(APP_LAUNCH_DATA_USER_LAST_LONGITUDE),
    selectedAreaId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_AREA_ID),
    openId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID),
    routeId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID),
    sessionKey = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY),
    userRealCurrentLocation = { latitude: 0, longitude: 0 },
    modifiedLocation = { latitude: 0, longitude: 0 },
    confirmUserLocationListeners = [],
    currentAreaData = { id: "", name: "" },
    allRankAreaData = [],
    allRankCategory = [];function getLocalStorageString(e) {
  var t = storage.getString(e);return t && t.length && "string" == typeof t ? t : "";
}function updateUserLocation(e, t) {
  console.log("updateUserLocation, _latitude: " + e + ", _longitude: " + t), e && t ? (latitude = e, longitude = t, storage.setNumber(APP_LAUNCH_DATA_USER_LAST_LATITUDE, latitude), storage.setNumber(APP_LAUNCH_DATA_USER_LAST_LONGITUDE, longitude)) : console.error("updateUserLocation, !_latitude || !_longitude, return");
}function updateSelectedAreaId(e) {
  console.log("updateSelectedAreaId: " + e), e && e.length && "string" == typeof e ? (selectedAreaId = e, storage.setString(APP_LAUNCH_DATA_USER_LAST_AREA_ID, selectedAreaId)) : console.error("updateSelectedAreaId, invalid _selectedAreaId, return");
}function updateAuthData(e, t, a) {
  console.log("updateAuthData, _openId: " + e + ", _routeId: " + t + ", _sessionKey: " + a), e && t && a ? (openId = e, routeId = t, sessionKey = a, storage.setString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID, openId), storage.setString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID, routeId), storage.setString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY, sessionKey)) : console.error("updateAuthData, !_openId || !_routeId || !_sessionKey, return");
}function clearSelectedAreaId() {
  console.log("clearSelectedAreaId"), selectedAreaId = "", storage.setString(APP_LAUNCH_DATA_USER_LAST_AREA_ID, "");
}function clearAuthData() {
  console.log("clearAuthData"), openId = "", routeId = "", sessionKey = "", storage.setString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID, ""), storage.setString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID, ""), storage.setString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY, "");
}function getUserLocation() {
  return latitude && longitude ? { latitude: latitude, longitude: longitude } : (console.log("getUserLocation, !latitude || !longitude, return default value"), { latitude: 23.123823166, longitude: 113.343940735 });
}function getSelectedAreaId() {
  return hasCheckedRealCurrentLocation ? selectedAreaId : "";
}function getAuthData() {
  return { openId: openId, routeId: routeId, sessionKey: sessionKey };
}function getSessionKey() {
  return sessionKey;
}function getOpenId() {
  return openId;
}function getRouteId() {
  return routeId;
}function markCheckRealCurrentLocation(e) {
  hasCheckedRealCurrentLocation = !0, (useRealCurrentLocation = e) && clearSelectedAreaId(), notifyConfirmUserLocationListener();
}function isUsingRealCurrentLocation() {
  return useRealCurrentLocation;
}function updateUserRealCurrentLocation(e, t) {
  console.log("updateUserRealCurrentLocation, _latitude: " + e + ", _longitude: " + t), e && t ? userRealCurrentLocation = { latitude: e, longitude: t } : console.error("updateUserRealCurrentLocation, !_latitude || !_longitude, return");
}function updateModifiedLocation(e, t) {
  console.log("updateModifiedLocation, _latitude: " + e + ", _longitude: " + t), e && t ? modifiedLocation = { latitude: e, longitude: t } : console.error("updateModifiedLocation, !_latitude || !_longitude, return");
}function getUserRealCurrentLocation() {
  return userRealCurrentLocation;
}function getModifiedLocation() {
  return modifiedLocation;
}function addConfirmUserLocationListener(e) {
  e && (hasCheckedRealCurrentLocation ? e() : confirmUserLocationListeners.push(e));
}function notifyConfirmUserLocationListener() {
  if (confirmUserLocationListeners.length) for (var e = 0; e < confirmUserLocationListeners.length; e++) {
    (0, confirmUserLocationListeners[e])();
  }confirmUserLocationListeners = [];
}function setCurrentArea(e) {
  e && e.id && e.name ? (currentAreaData.id = e.id, currentAreaData.name = e.name) : console.error("invalid _areaData, return. _areaData is: " + JSON.stringify(e));
}function getCurrentArea() {
  return currentAreaData;
}function setAllRankArea(e) {
  e && e.length ? allRankAreaData = e : console.error("invalid _allRankAreaData, return.");
}function getAllRankArea() {
  return allRankAreaData;
}function setAllRankCategory(e) {
  e && e.length ? allRankCategory = e : console.error("invalid _allRankCategoryData, return.");
}function getAllRankCategory() {
  return allRankCategory;
}module.exports = { setAllRankCategory: setAllRankCategory, getAllRankCategory: getAllRankCategory, updateUserLocation: updateUserLocation, updateSelectedAreaId: updateSelectedAreaId, updateAuthData: updateAuthData, clearSelectedAreaId: clearSelectedAreaId, clearAuthData: clearAuthData, getUserLocation: getUserLocation, getSelectedAreaId: getSelectedAreaId, getAuthData: getAuthData, getSessionKey: getSessionKey, getOpenId: getOpenId, getRouteId: getRouteId, markCheckRealCurrentLocation: markCheckRealCurrentLocation, isUsingRealCurrentLocation: isUsingRealCurrentLocation, updateUserRealCurrentLocation: updateUserRealCurrentLocation, updateModifiedLocation: updateModifiedLocation, getUserRealCurrentLocation: getUserRealCurrentLocation, getModifiedLocation: getModifiedLocation, addConfirmUserLocationListener: addConfirmUserLocationListener, setCurrentArea: setCurrentArea, getCurrentArea: getCurrentArea, setAllRankArea: setAllRankArea, getAllRankArea: getAllRankArea }; 
 			}); 
		define("utils/arrMap.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function arrMap() {} 
 			}); 
		define("utils/calculateDistance.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var cgi = require("cgi"),
    appLaunchData = require("appLaunchData"),
    util = require("./util"),
    poiLocations = [],
    poiLocationsFn = [];function cgiCalculate() {
  if (appLaunchData.isUsingRealCurrentLocation() && poiLocations.length) {
    var a = poiLocations,
        o = poiLocationsFn;poiLocations = [], poiLocationsFn = [];var i = appLaunchData.getUserLocation();new cgi.SimpleRequest("CalculateDistance", { poiLocation: a, userLocation: i }).ensureNoSameUrlProcessing().send(function (a) {
      a.poiDistance.forEach(function (a, i) {
        o[i] && o[i](a.distance);
      });
    });
  }
}var debouceCgiCalculte = util.debounce(cgiCalculate, 500);function addPoiLocation(a, o) {
  poiLocations.push(a), poiLocationsFn.push(o), debouceCgiCalculte();
}appLaunchData.addConfirmUserLocationListener(cgiCalculate), module.exports = { addPoiLocation: addPoiLocation }; 
 			}); 
		define("utils/cgi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("util.js"),
    cgiCmdId = require("./cgi_cmdid"),
    appLaunchData = require("./appLaunchData"),
    eventCenter = require("eventCenter.js"),
    sessionKey = appLaunchData.getSessionKey(),
    lastSessionKeyTimeMillis = 0,
    openId = appLaunchData.getOpenId(),
    routeId = appLaunchData.getRouteId(),
    reportSession = require("./report_session"),
    kitchenStorage = require("./kitchenStorage"),
    isGreyServer = kitchenStorage.getShouldUseGreyServer(),
    URL_PREFIX = "https://ae.weixin.qq.com/cgi-bin/mmlife-bin/",
    HOST = "ae.weixin.qq.com";function getHost() {
  return HOST;
}function getUrlPrefix() {
  return URL_PREFIX;
}function getReqHeader(e) {
  var t = kitchenStorage.getClientVersion(),
      o = isGreyServer ? "0x01000010" : "0x0" + t.toString(16),
      a = cgiCmdId.getCmdId(e);return routeId && routeId.length > 0 ? { "content-type": "application/json", "X-WX-ClientVersion": o, "X-WX-ProductId": "2101", "X-WECHAT-UIN": routeId, "X-WECHAT-CMDID": "" + a } : { "content-type": "application/json", "X-WX-ClientVersion": o, "X-WX-ProductId": "2101", "X-WECHAT-CMDID": "" + a };
}function handleWxLoginFinish(e) {
  if (getApp().globalData.appLaunchSessionId > 0) {
    var t = new Date().getTime();getApp().globalData.appLaunchReportData.cgiLoginStartTime = t, getApp().globalData.appLaunchReportData.wxLoginTime = t - getApp().globalData.appLaunchReportData.appLaunchStartTime;
  }e || wx.reportMonitor("0", 1);
}function handleAuthCgiFinish(e) {
  if (getApp().globalData.appLaunchSessionId > 0) {
    var t = new Date().getTime();getApp().globalData.appLaunchReportData.cgiLongLinkStartTime = t, getApp().globalData.appLaunchReportData.cgiLoginTime = t - getApp().globalData.appLaunchReportData.cgiLoginStartTime;
  }e || wx.reportMonitor("1", 1);
}isGreyServer && (URL_PREFIX = "https://testae.weixin.qq.com/cgi-bin/mmlife-bin/", HOST = "testae.weixin.qq.com");var REQ_METHOD = "POST";function login(e, t) {
  if (console.log("TimeRecord, start wx.login: " + JSON.stringify(new Date())), eventCenter.add("EVENT_LOGIN", e)) {
    var o = function o() {
      eventCenter.remove("EVENT_LOGIN"), t && "function" == typeof t && t();
    };wx.login({ success: function success(e) {
        if (e.code) {
          handleWxLoginFinish(!0);var t = URL_PREFIX + "auth",
              a = { code: e.code },
              i = getReqHeader("auth");console.log("[cgi request] url=", t, "reqData=", a, "header=", i), wx.request({ url: t, data: a, method: REQ_METHOD, header: i, success: function success(e) {
              if (console.log("[cgi response] url=" + t, "req=", a), console.log("success res=", e), !e.data) return console.error("小程序wx.request返回没有data"), handleAuthCgiFinish(!1), void o();if (!e.data.baseResponse) return console.error("服务器返回没有baseResponse"), handleAuthCgiFinish(!1), void o();var i = e.data.baseResponse.ret,
                  r = e.data;0 == i ? (handleAuthCgiFinish(!0), sessionKey = r.key, openId = r.openId, routeId = r.routeId, appLaunchData.updateAuthData(openId, routeId, sessionKey), lastSessionKeyTimeMillis = new Date().getTime(), console.log("sessionKey=", sessionKey), eventCenter.notify("EVENT_LOGIN", sessionKey)) : (console.error("登陆错误. ret=" + i), handleAuthCgiFinish(!1), o());
            }, fail: function fail(e) {
              console.log("[cgi response] url=" + t, "req=", a), console.error("[cgi response] wx.request fail res=", JSON.stringify(e)), handleAuthCgiFinish(!1), o();
            } });
        } else console.error("获取用户登录code失败！" + JSON.stringify(e.errMsg)), handleWxLoginFinish(!1), o();
      }, fail: function fail(e) {
        console.error("wx.login failed, res: " + JSON.stringify(e)), handleWxLoginFinish(!1), o();
      } });
  }
}var processUrlSet = {};function SimpleRequest(e, t) {
  this.url = e, this.reqData = t || {};
}function uploadOnePic(e, t, o, a, i) {
  var r = t.filePath,
      s = URL_PREFIX + "uploadimage",
      n = { openId: openId, key: sessionKey },
      l = getReqHeader("uploadimage");console.log("[uploadFile request] seq=", e, "url=" + s, "reqData=", n, "header=", l);var p = wx.uploadFile({ url: s, header: l, filePath: r, name: "file", formData: n, success: function success(i) {
      if (console.log("[uploadFile response] success call back seq=", e, i), "string" == typeof i.data) try {
        i.data = JSON.parse(i.data);
      } catch (t) {
        return void console.error("[uploadFile video response] parse JSON data failed, seq=", e, ", res.data: ", JSON.stringify(i.data));
      }0 == i.data.baseResponse.ret ? (console.log("[uploadFile response] success seq=", e), o(e, { type: 0, url: i.data.imageUrl, thumbUrl: i.data.midImageUrl, midImageUrl: i.data.midImageUrl, imageSize: i.data.imageSize, midImageSize: i.data.midImageSize, height: t.height, width: t.width, orientation: t.orientation, size: t.size, scene: t.scene, mark: t.mark })) : (console.error("[uploadFile pic response] failed seq=", e, "res.data.baseResponse.ret= ", i.data.baseResponse.ret, ", res.data= ", JSON.stringify(i.data)), a(e));
    }, fail: function fail(t) {
      console.error("[uploadFile pic response] fail seq=", e, ", resp: ", JSON.stringify(t)), a(e);
    } });util.canUseUploadProgress() ? (p.lastTotalBytesSent = 0, p.onProgressUpdate(function (e) {
    i(e.totalBytesSent - p.lastTotalBytesSent), p.lastTotalBytesSent = e.totalBytesSent;
  })) : i(0);
}function uploadOneVideo(e, t, o, a, i) {
  var r = t.filePath,
      s = URL_PREFIX + "uploadvideo",
      n = { openId: openId, key: sessionKey };t.thumbFilePath ? (n.shouldUseClientThumb = 1, n.thumbFileBase64 = wx.getFileSystemManager().readFileSync(t.thumbFilePath, "base64")) : (n.shouldUseClientThumb = 0, n.thumbFileBase64 = "");var l = getReqHeader("uploadvideo");console.log("[uploadFile request] url=" + s, "reqData=", n, "header=", l);var p = wx.uploadFile({ url: s, header: l, filePath: r, name: "file", formData: n, success: function success(i) {
      if (console.log("[uploadFile response] success call back", i), "string" == typeof i.data) try {
        i.data = JSON.parse(i.data);
      } catch (t) {
        return void console.error("[uploadFile video response] parse JSON data failed, seq=", e, ", res.data: ", JSON.stringify(i.data));
      }0 == i.data.baseResponse.ret ? (console.log("[uploadFile response] success"), o(e, { type: 1, url: i.data.videoUrl, thumbUrl: i.data.thumbUrl, videoSize: i.data.videoSize, thumbSize: i.data.thumbSize, height: t.height, width: t.width, duration: t.duration, size: t.size, scene: t.scene, mark: t.mark })) : (console.error("[uploadFile video response] failed seq=", e, "res.data.baseResponse.ret= ", i.data.baseResponse.ret, ", res.data: ", JSON.stringify(i.data)), a(e));
    }, fail: function fail(t) {
      console.error("[uploadFile video response] fail seq=", e, ", res: ", JSON.stringify(t)), a(e);
    } });util.canUseUploadProgress() ? (p.lastTotalBytesSent = 0, p.onProgressUpdate(function (e) {
    i(e.totalBytesSent - p.lastTotalBytesSent), p.lastTotalBytesSent = e.totalBytesSent;
  })) : i(0);
}function uploadPic4TempFilePaths(e, t, o, a, i) {
  var r = 0,
      s = {};function n(e, t) {
    s[e] = t, p();
  }function l(e) {
    p();
  }function p() {
    if (++r == t.length) if (a) {
      console.log("upload complete call back, pics=", s);for (var e = [], o = 0; o < t.length; o++) {
        s[o] && e.push(s[o]);
      }a(e);
    } else util.hideLoading(), console.log("upload pic files, OK");
  }var u = 0;function c(t) {
    u += t, console.log("upload pic progresss: totalBytesSent=", u, "totalFileSize=", e, "percentage=", 1 * u / e), i(u, e, (1 * u / e * 100).toFixed(0));
  }if (o && o(), t.length) for (var d = 0; d < t.length; d++) {
    uploadOnePic(d, t[d], n, l, c);
  }
}function uploadMedia4TempFiles(e, t, o, a, i) {
  var r = 0,
      s = {};function n(e, t) {
    s[e] = t, p();
  }function l(e) {
    p();
  }function p() {
    if (++r == t.length) if (a) {
      console.log("upload complete call back, medias=", s);for (var e = [], o = 0; o < t.length; o++) {
        s[o] && e.push(s[o]);
      }a(e);
    } else util.hideLoading(), console.log("upload media files, OK");
  }var u = 0;function c(t) {
    u += t, console.log("upload pic progresss: totalBytesSent=", u, "totalFileSize=", e, "percentage=", 1 * u / e), i(u, e, (1 * u / e * 100).toFixed(0));
  }if (o && o(), t.length) for (var d = 0; d < t.length; d++) {
    var g = t[d];0 == t[d].type ? uploadOnePic(d, g, n, l, c) : 1 == t[d].type ? uploadOneVideo(d, g, n, l, c) : console.error("error file type, file: " + JSON.stringify(t[d]));
  }
}function multipleRequest(e, t) {
  if (e && e.length && t) {
    for (var o = 0, a = [], i = 0; i < e.length; i++) {
      a.push({});
    }for (i = 0; i < e.length; i++) {
      var r = e[i];!function (i) {
        r.send(function (r) {
          o++, a[i] = r, o == e.length && t(a);
        }, !0);
      }(i);
    }
  }
}SimpleRequest.prototype.setMockRespData = function (e) {
  return this.mockRespData = e, this;
}, SimpleRequest.prototype.ensureNoSameUrlProcessing = function () {
  return this._ensureNoSameUrlProcessing = !0, this;
}, SimpleRequest.prototype.send = function (e, t, o) {
  var a = this;if (a.mockRespData) return console.log("[cgi response mockRespData] url=" + i), console.log("mockRespData", a.mockRespData), void e(a.mockRespData);if (a._ensureNoSameUrlProcessing && processUrlSet[a.url]) console.log("same url is processing, return", processUrlSet, a.url);else {
    var i = URL_PREFIX + a.url;a.reqData.baseRequest ? (a.reqData.baseRequest.openId = openId, a.reqData.baseRequest.key = sessionKey) : a.reqData.baseRequest = { openId: openId, key: sessionKey };var r = reportSession.getId();r > 0 && (a.reqData.baseRequest.sessionId = r);var s = a.reqData,
        n = getReqHeader(a.url);"kvreport" != a.url.toLowerCase() && console.log("[cgi request] url=", i, "reqData=", a.reqData, "header=", n), processUrlSet[a.url] || (processUrlSet[a.url] = 1);var l = new Date().getTime();a.cgiStartTime || (a.cgiStartTime = l), wx.request({ url: i, data: a.reqData, method: REQ_METHOD, header: n, success: function success(r) {
        if (a.retryTimeout && clearTimeout(a.retryTimeout), processUrlSet[a.url] && processUrlSet[a.url]--, "kvreport" != a.url.toLowerCase() && (console.log("[cgi response] url=" + i, "req=", s), console.log("res = ", r), console.log("cost = ", new Date().getTime() - l + "ms")), r.data) {
          if (!r.data.baseResponse) return console.error("服务器返回没有baseResponse"), void (t && "function" == typeof t && t());var n = r.data.baseResponse.ret,
              p = r.data;if (0 == n) e && e(p, s);else if (-13 != n || o) console.error("服务器返回错误, errorCode=" + n + ", data: " + JSON.stringify(p)), wx.reportMonitor("1", 1), t && "function" == typeof t && t({ errorCode: n, data: p });else {
            console.error("服务器返回登陆过期错误, errorCode=" + n), wx.reportMonitor("1", 1);var u = new Date().getTime();sessionKey != a.reqData.baseRequest.key ? a.send(e, t) : eventCenter.getHandlers("EVENT_LOGIN").length ? login(function () {
              a.send(e, t);
            }) : u - lastSessionKeyTimeMillis >= 5e3 ? login(function () {
              a.send(e, t);
            }) : console.error("5秒内频繁登录。服务器返回错误, errorCode=" + n);
          }
        }
      }, fail: function fail(o) {
        processUrlSet[a.url] && processUrlSet[a.url]--, "kvreport" != a.url.toLowerCase() && (console.log("[cgi response] url=" + i, "req=", s), console.error("[cgi response] fail", JSON.stringify(o))), wx.reportMonitor("1", 1), new Date().getTime() - a.cgiStartTime < 2e4 ? (a.retryTimeout && clearTimeout(a.retryTimeout), a.retryTimeout = setTimeout(function () {
          a.send(e, t);
        }, 2e3)) : t && "function" == typeof t && t(o);
      } });
  }
};var EnumSuggestionFlag = { MMLIFEAPP_SUGGESTION_FLAG_HARDCODE: 1, MMLIFEAPP_SUGGESTION_FLAG_TAG: 2, MMLIFEAPP_SUGGESTION_FLAG_POI: 4 },
    EnumMMLifeAppSearchPoiListFlagDefine = { MMLIFEAPP_SEARCH_POI_LIST_FLAG_TAG: 1, MMLIFEAPP_SEARCH_POI_LIST_FLAG_POI: 2 },
    EnumMMLifeAppPoiImpressionTypeDefine = { MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT: 0, MMLIFEAPP_POI_IMPRESSION_TYPE_LIKE: 1, MMLIFEAPP_POI_IMPRESSION_TYPE_MARK: 2, MMLIFEAPP_POI_IMPRESSION_TYPE_RECOMMEND: 3, MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION: 4 },
    EnumMMLifeAppGetUserPageSceneDefine = { MMLIFEAPP_GET_USER_PAGE_SCENE_ALL: 0, MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION: 1, MMLIFEAPP_GET_USER_PAGE_SCENE_MARK: 2, MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE: 3 },
    EnumMMLifeAppFriendVisitInfoTypeDefine = { MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT: 0, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_LIKE: 1, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK: 2, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND: 3, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND_ACTIVITIY: 4, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND_IMPRESSION: 5, MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION: 6 };module.exports = { getHost: getHost, login: login, SimpleRequest: SimpleRequest, uploadPic4TempFilePaths: uploadPic4TempFilePaths, multipleRequest: multipleRequest, uploadMedia4TempFiles: uploadMedia4TempFiles, EnumSuggestionFlag: EnumSuggestionFlag, EnumMMLifeAppSearchPoiListFlagDefine: EnumMMLifeAppSearchPoiListFlagDefine, EnumMMLifeAppPoiImpressionTypeDefine: EnumMMLifeAppPoiImpressionTypeDefine, EnumMMLifeAppGetUserPageSceneDefine: EnumMMLifeAppGetUserPageSceneDefine, EnumMMLifeAppFriendVisitInfoTypeDefine: EnumMMLifeAppFriendVisitInfoTypeDefine, getUrlPrefix: getUrlPrefix, getReqHeader: getReqHeader }; 
 			}); 
		define("utils/cgi_cmdid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _map;function _defineProperty(e, i, p) {
  return i in e ? Object.defineProperty(e, i, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = p, e;
}var map = (_defineProperty(_map = { MMLifeWebCmd_LifeApp_Auth: 363, MMLifeWebCmd_LifeApp_Echo: 526, MMLifeWebCmd_LifeApp_GetPoiList: 196, MMLifeWebCmd_LifeApp_GetPoiDetail: 144, MMLifeWebCmd_LifeApp_SearchPoi: 91, MMLifeWebCmd_LifeApp_GetCategory: 974, MMLifeWebCmd_LifeApp_UploadImage: 572, MMLifeWebCmd_LifeApp_GetPoiComment: 946, MMLifeWebCmd_LifeApp_PostPoiComment: 993, MMLifeWebCmd_LifeApp_DelPoiComment: 489, MMLifeWebCmd_LifeApp_GetFeedList: 95, MMLifeWebCmd_LifeApp_ReadTemplate: 211, MMLifeWebCmd_LifeApp_GetRes: 48, MMLifeWebCmd_LifeApp_GetProfile: 107, MMLifeWebCmd_LifeApp_GetLocationInfo: 80, MMLifeWebCmd_LifeApp_LikePoi: 242, MMLifeWebCmd_LifeApp_SearchPoiList: 266, MMLifeWebCmd_LifeApp_UploadVideo: 92, MMLifeWebCmd_LifeApp_GetRecommendDetail: 188, MMLifeWebCmd_LifeApp_GetSuggestion: 194, MMLifeWebCmd_LifeApp_GetUserPage: 77, MMLifeWebCmd_LifeApp_GetFriendVisitPage: 406, MMLifeWebCmd_LifeApp_MarkPoi: 758, MMLifeWebCmd_LifeApp_GetMention: 8312, MMLifeWebCmd_LifeApp_KvReport: 9149, MMLifeWebCmd_LifeApp_RecommendPoi: 9450, MMLifeWebCmd_LifeApp_ReportWithProof: 8955, MMLifeWebCmd_LifeApp_GetImpressionComment: 9399, MMLifeWebCmd_LifeApp_DelImpressionComment: 8746, MMLifeWebCmd_LifeApp_PostImpressionComment: 9101, MMLifeWebCmd_LifeApp_GetUnReadMentionCount: 9483 }, "MMLifeWebCmd_LifeApp_GetUnReadMentionCount", 9483), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetPoiCommentDetail", 9073), _defineProperty(_map, "MMLifeWebCmd_LifeApp_LikePoiComment", 2671), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFindRestaurantPage", 9702), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFindRestaurantDetailPage", 9505), _defineProperty(_map, "MMLifeWebCmd_LifeApp_ModUserLocation", 9818), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendImpression", 10642), _defineProperty(_map, "MMLifeWebCmd_LifeApp_SearchImpression", 11964), _defineProperty(_map, "MMLifeWebCmd_LifeApp_CalculateDistance", 11098), _defineProperty(_map, "MMLifeWebCmd_LifeApp_CalculateDistance", 11098), _defineProperty(_map, "MMLifeWebCmd_LifeApp_ChangeUserNotifyStatus", 12463), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendVisitPage", 12868), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFollowVisitPage", 12446), _defineProperty(_map, "MMLifeWebCmd_LifeApp_FollowUser", 11156), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFollowUserList", 12741), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFansList", 11444), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendPoI", 12739), _map);function getCmdId(e) {
  var i = map[("MMLifeWebCmd_LifeApp_" + e).toLowerCase()];return i || (console.error(e + " 缺少cmdId"), 0);
}Object.keys(map).forEach(function (e) {
  var i = map[e];map[e.toLowerCase()] = i, delete map[e];
}), module.exports = { getCmdId: getCmdId }; 
 			}); 
		define("utils/cgi_longlink.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var socket,
    retryOpenWebSocketTimeout,
    util = require("./util"),
    cgi = require("./cgi"),
    appLaunchData = require("./appLaunchData"),
    enumSocketState = { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 },
    URL_PREFIX = cgi.getUrlPrefix(),
    isSocketOpening = !1,
    getNextSeq = function () {
  var e = 0;return function () {
    return ++e;
  };
}(),
    initState = function () {
  var e = !1;return { isInited: function isInited() {
      return e;
    }, setInited: function setInited() {
      e = !0;
    } };
}(),
    openWebSocketCbQueue = [],
    simpleRequestMap = {},
    isSocketEverOpened = !1;function getIsSocketEverOpened() {
  return isSocketEverOpened;
}function addOpenWebSocketCb(e) {
  openWebSocketCbQueue.push(e);
}function openWebSocket() {
  isSocketOpening || (isSocketOpening = !0, (socket = wx.connectSocket({ url: "wss://" + cgi.getHost(), success: function success(e) {
      console.log("[socket] connect success res=", e, socket);
    }, fail: function fail(e) {
      console.log("[socket] connect fail res=", e, socket);
    } })) ? (socket.onOpen(function (e) {
    var n = socket;for (isSocketEverOpened = !0, console.log("[socket]onSocketOpen", n), isSocketOpening = !1, retryOpenWebSocketTimeout && clearTimeout(retryOpenWebSocketTimeout), appLaunchData.getSessionKey() && syncMention(1); openWebSocketCbQueue.length;) {
      var t = openWebSocketCbQueue.shift();t && t();
    }Object.keys(simpleRequestMap).forEach(function (e) {
      var n = simpleRequestMap[e];if (n) {
        var t = n.simpleRequest,
            o = n.success;t.send(o), delete simpleRequestMap[e];
      }
    });
  }), socket.onMessage(function (e) {
    var n = socket;console.log("[socket]onSocketMessage", e, n), onRecvMsg(e);
  }), socket.onError(function (e) {
    var n = socket;console.log("[socket]onSocketError", e, n);
  }), socket.onClose(function (e) {
    isSocketOpening = !1;var n = socket;console.error("[socket]onSocketClose", e, n), retryOpenWebSocket();
  })) : retryOpenWebSocket());
}function retryOpenWebSocket() {
  retryOpenWebSocketTimeout = setTimeout(function () {
    openWebSocket();
  }, 1e3);
}function SimpleRequest(e, n) {
  this.url = e, this.reqData = n || {};
}function onRecvMsg(e) {
  if (e.data) {
    var n = JSON.parse(e.data);if (0 == n.cmd) {
      var t;try {
        t = JSON.parse(n.content);
      } catch (e) {
        return void util.alert(n.content);
      }var o = simpleRequestMap[n.seq];if (!o) return;var s = o.simpleRequest,
          c = o.success,
          i = o.fail;if (console.log("[cgilonglink response] url=" + s.url, "req=", s, "resp=", t), !t.baseResponse) return void util.alert("服务器返回没有baseResponse");var r = t.baseResponse.ret;0 == r ? c(t, s.reqData) : -13 == r ? (i && i(), console.error("服务器返回登陆过期错误, errorCode=" + r)) : (i && i(), console.error("服务器返回错误, errorCode=" + r)), delete simpleRequestMap[n.seq];
    } else console.log("收到推送", e), initState.isInited() ? syncMention() : syncDirty = !0;
  }
}SimpleRequest.prototype.send = function (e, n) {
  n = n || function () {};var t = URL_PREFIX + this.url;this.reqData.baseRequest = { openId: appLaunchData.getOpenId(), key: appLaunchData.getSessionKey() };var o = cgi.getReqHeader(this.url);o.HOST = cgi.getHost(), console.log("[cgilonglink request] url=", t, "reqData=", this.reqData, "header=", o);var s = getNextSeq(),
      c = { data: JSON.stringify({ cmd: 0, product: 0, seq: s, http: { method: "POST", path: "/cgi-bin/mmlife-bin/" + this.url, header: o, query: "" }, content: JSON.stringify(this.reqData) }), success: function success(e) {
      console.log("[socket] websocket send success", e, socket, "isSocketOpening=", isSocketOpening);
    }, fail: function fail(e) {
      n && n(), console.error("[socket] websocket send failed", e, socket, "isSocketOpening=", isSocketOpening), retryOpenWebSocket();
    } };simpleRequestMap[s] = { success: e, fail: n, simpleRequest: this }, socket && socket.send(c);
};var syncDirty = !1,
    isSyncMentionIng = !1;function syncMention(e) {
  console.log("[syncMention] isSyncMentionIng", isSyncMentionIng), !isSyncMentionIng || e ? (isSyncMentionIng = !0, new SimpleRequest("GetUnReadMentionCount".toLowerCase(), {}).send(function (e) {
    initState.isInited() || initState.setInited();var n = e.count,
        t = e.seq;unreadMentionCountMgr.setCountAndSeq(n, t), isSyncMentionIng = !1, syncDirty && (syncMention(), syncDirty = !1);
  }, function () {
    isSyncMentionIng = !1;
  })) : syncDirty = !0;
}var unreadMentionCountMgr = function () {
  var e = 0,
      n = 0,
      t = {},
      o = {};return o.getCount = function () {
    return e;
  }, o.setCountAndSeq = function (o, s) {
    (s == n && o > e || s > n) && (e = o, n = s, Object.keys(t).forEach(function (o) {
      var s = t[o];s(e, n);
    }));
  }, o.addCountChangeListener = function (e, n) {
    t[e] = n;
  }, o;
}();module.exports = { addOpenWebSocketCb: addOpenWebSocketCb, openWebSocket: openWebSocket, syncMention: syncMention, getUnReadMentionCount: unreadMentionCountMgr.getCount, addUnReadMentionCountChangeListener: unreadMentionCountMgr.addCountChangeListener, getIsSocketEverOpened: getIsSocketEverOpened }; 
 			}); 
		define("utils/chooseMediaUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("util.js"),
    kitchenStorage = require("./kitchenStorage"),
    app = getApp(),
    enumChooseResultType = { SUCCESS: 1, FAILED: 2, CANCEL: 3, ACTION_SHEET_FAILED: 4, ACTION_SHEET_CANCEL: 5 };function chooseMediaWithTwoOptions(e, o, t, i, s, n) {
  var a = 10;console.log("chooseMediaWithTwoOptions, app.canOpenKitchen(): " + app.canOpenKitchen() + ", kitchenStorage.getShouldUsePoiTestInfo(): " + kitchenStorage.getShouldUsePoiTestInfo()), app.canOpenKitchen() && (a = kitchenStorage.getMediaMaxDuration(), kitchenStorage.getShouldUsePoiTestInfo() && (t = kitchenStorage.getTestPoiName(), 0 == (o = { latitude: kitchenStorage.getTestPoiLocationLatitude(), longitude: kitchenStorage.getTestPoiLocationLongitude() }).latitude && 0 == o.longitude && (o = {}), t && t.length || (t = void 0), console.log("UsePoiTestInfo location: " + JSON.stringify(o)), console.log("UsePoiTestInfo poiName: " + JSON.stringify(t))));wx.showActionSheet({ itemList: ["拍摄", "从手机相册选择"], success: function success(r) {
      switch (console.log("chooseMediaWithTwoOptions, success. show res.tapIndex" + r.tapIndex), r.tapIndex) {case 0:
          chooseMediaDirectly(a, e, o, t, i, ["camera"], s, n);break;case 1:
          chooseMediaDirectly(a, e, o, t, i, ["album"], s, n);break;default:
          console.error("chooseMediaWithTwoOptions, showActionSheet, invalid res.tapIndex, res: " + JSON.stringify(r)), n && n({ resultType: enumChooseResultType.ACTION_SHEET_FAILED, errMsg: "chooseMediaWithTwoOptions, showActionSheet, invalid res.tapIndex" });}
    }, fail: function fail(e) {
      if (console.error("chooseMediaWithTwoOptions, showActionSheet failed: " + JSON.stringify(e)), n) {
        var o = { errMsg: e.errMsg };e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.ACTION_SHEET_CANCEL : o.resultType = enumChooseResultType.ACTION_SHEET_FAILED, n(o);
      }
    } });
}function chooseMediaWithThreeOptions(e, o, t, i, s, n) {
  var a = 10;console.log("chooseMediaWithThreeOptions, app.canOpenKitchen(): " + app.canOpenKitchen() + ", kitchenStorage.getShouldUsePoiTestInfo(): " + kitchenStorage.getShouldUsePoiTestInfo()), app.canOpenKitchen() && (a = kitchenStorage.getMediaMaxDuration(), kitchenStorage.getShouldUsePoiTestInfo() && (t = kitchenStorage.getTestPoiName(), 0 == (o = { latitude: kitchenStorage.getTestPoiLocationLatitude(), longitude: kitchenStorage.getTestPoiLocationLongitude() }).latitude && 0 == o.longitude && (o = {}), t && t.length || (t = void 0), console.log("UsePoiTestInfo location: " + JSON.stringify(o)), console.log("UsePoiTestInfo poiName: " + JSON.stringify(t))));wx.showActionSheet({ itemList: ["拍摄", "从手机相册选择", "输入文字"], success: function success(r) {
      switch (console.log("chooseMediaWithThreeOptions, success. show res.tapIndex" + r.tapIndex), r.tapIndex) {case 0:
          chooseMediaDirectly(a, e, o, t, i, ["camera"], s, n);break;case 1:
          chooseMediaDirectly(a, e, o, t, i, ["album"], s, n);break;case 2:
          s({ resultType: enumChooseResultType.SUCCESS, textDirectly: !0 });break;default:
          console.error("chooseMediaWithThreeOptions, showActionSheet, invalid res.tapIndex, res: " + JSON.stringify(r)), n && n({ resultType: enumChooseResultType.ACTION_SHEET_FAILED, errMsg: "chooseMediaWithThreeOptions, showActionSheet, invalid res.tapIndex" });}
    }, fail: function fail(e) {
      if (console.error("chooseMediaWithThreeOptions, showActionSheet failed: " + JSON.stringify(e)), n) {
        var o = { errMsg: e.errMsg };e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.ACTION_SHEET_CANCEL : o.resultType = enumChooseResultType.ACTION_SHEET_FAILED, n(o);
      }
    } });
}function chooseMediaDirectly(e, o, t, i, s, n, a, r) {
  t && t.latitude && t.longitude || (console.log("set location undefined !"), t = void 0), util.canUseChooseMultiMediaAPI() ? (console.log("chooseMultiMedia: invoke chooseMultiMedia"), wx.chooseMultiMedia({ maxDuration: e, count: o, location: t, poiName: i, locationRadius: s, sourceType: n, success: function success(e) {
      console.log("chooseMultiMedia: chooseMultiMedia success, res: " + JSON.stringify(e)), console.log("chooseMultiMedia success");for (var o = e.tempFiles, t = [], i = 0, s = 0; s < o.length; s++) {
        var n = o[s];if (n.size / 1048576 >= 6) {
          if (util.hint("上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"), r) {
            var l = { resultType: enumChooseResultType.FAILED, errMsg: "上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大" };r(l);
          }return;
        }var h = { filePath: n.tempFilePath, size: n.size },
            c = 0;h.height = n.height, h.width = n.width, "video" == n.type ? (c = 1, h.duration = n.duration, h.thumbFilePath = "", n.thumbTempFilePath && (h.thumbFilePath = n.thumbTempFilePath)) : h.orientation = n.orientation, h.scene = n.scene, h.mark = n.mark, h.displayHeight = 240, h.displayWidth = 240, h.type = c, i += n.size, t.push(h);
      }a && a({ resultType: enumChooseResultType.SUCCESS, totalFileSize: i, mediaItemList: t });
    }, fail: function fail(e) {
      if (console.error("chooseMultiMedia: chooseMultiMedia failed, res: " + JSON.stringify(e)), r) {
        var o = { errMsg: e.errMsg };e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.CANCEL : o.resultType = enumChooseResultType.FAILED, r(o);
      }
    } })) : wx.invoke ? wx.invoke("chooseMultiMedia", { maxDuration: e, count: o, location: t, poiName: i, locationRadius: s, sourceType: n, success: function success(e) {}, fail: function fail(e) {} }, function (e) {
    if (console.log("test chooseMultiMedia, res: " + JSON.stringify(e)), "chooseMultiMedia:ok" == e.errMsg) {
      console.log("test chooseMultiMedia success");for (var o = e.tempFiles, t = [], i = 0, s = 0; s < o.length; s++) {
        var n = o[s];if (n.size / 1048576 >= 6) {
          if (util.hint("上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"), r) {
            var l = { resultType: enumChooseResultType.FAILED, errMsg: "上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大" };r(l);
          }return;
        }var h = { filePath: n.tempFilePath, size: n.size },
            c = 0;h.height = n.height, h.width = n.width, "video" == n.type ? (c = 1, h.duration = n.duration, h.thumbFilePath = "", n.thumbTempFilePath && (h.thumbFilePath = n.thumbTempFilePath)) : h.orientation = n.orientation, h.scene = n.scene, h.mark = n.mark, h.displayHeight = 240, h.displayWidth = 240, h.type = c, i += n.size, t.push(h), console.log("test, show mediaItem: " + JSON.stringify(h));
      }a && a({ resultType: enumChooseResultType.SUCCESS, totalFileSize: i, mediaItemList: t });
    } else if ("chooseMultiMedia:cancel" == e.errMsg) {
      if (console.log("test chooseMultiMedia cancel"), r) {
        var u = { resultType: enumChooseResultType.CANCEL, errMsg: e.errMsg };r(u);
      }
    } else if (console.error("test chooseMultiMedia failed"), r) {
      var p = { resultType: enumChooseResultType.FAILED, errMsg: e.errMsg };r(p);
    }
  }) : wx.chooseImage({ count: o, sourceType: n, success: function success(e) {
      console.log("chooseImage success, ", e);for (var o = e.tempFilePaths, t = e.tempFiles, i = [], s = 0, n = 0; n < t.length; n++) {
        var l = t[n];if (l.size / 1048576 >= 6) {
          if (util.hint("上传的单张图片不能超过6M, 第" + (n + 1) + "张图片过大"), r) {
            var h = { resultType: enumChooseResultType.FAILED, errMsg: "上传的单张图片不能超过6M, 第" + (n + 1) + "张图片过大" };r(h);
          }return;
        }s += l.size;var c = { type: 0, filePath: o[n], size: l.size, displayHeight: 240, displayWidth: 240 };i.push(c);
      }a && a({ resultType: enumChooseResultType.SUCCESS, totalFileSize: s, mediaItemList: i });
    }, fail: function fail(e) {
      if (console.error("chooseImage failed, ", e), r) {
        var o = { errMsg: e.errMsg };e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.CANCEL : o.resultType = enumChooseResultType.FAILED, r(o);
      }
    } });
}module.exports = { enumChooseResultType: enumChooseResultType, chooseMediaWithTwoOptions: chooseMediaWithTwoOptions, chooseMediaWithThreeOptions: chooseMediaWithThreeOptions }; 
 			}); 
		define("utils/commentStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    poiStorage = require("./poiStorage"),
    COMMENTS_KEY = "COMMENTS_STORAGE";function getComments() {
  return storage.getObj(COMMENTS_KEY);
}function setComments(t) {
  storage.setObj(COMMENTS_KEY, t);
}function setComment(t, e, o) {
  var n = getComments() || [],
      i = !1;n.some(function (m, s) {
    if (m.poiId == t) return i = !0, m.picLength = e, m.commentText = o, m.liked || m.picLength || m.commentText && m.commentText.content || n.splice(s, 1), !0;
  }), i || n.unshift({ poiId: t, picLength: e, commentText: o }), setComments(n);
}function setLike(t, e) {
  var o = getComments() || [],
      n = !1;o.some(function (o) {
    if (o.poiId == t) return n = !0, o.liked = e, !0;
  }), n || o.unshift({ poiId: t, liked: e }), setComments(o);
}function getCommentsWithPoiInfo() {
  var t = getComments() || [];return t.forEach(function (t) {
    var e = poiStorage.getPoi(t.poiId);t.poiInfo = e;
  }), t;
}module.exports = { setComment: setComment, setLike: setLike, getCommentsWithPoiInfo: getCommentsWithPoiInfo }; 
 			}); 
		define("utils/eventCenter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var eventHandlerMapping = {};function add(e, n) {
  if (e && n) {
    var r = eventHandlerMapping[e];r || (r = [], eventHandlerMapping[e] = r);var t = !1;return 0 == r.length && (t = !0), r.push(n), t;
  }
}function getHandlers(e) {
  if (!e) return [];var n = eventHandlerMapping[e];return n || [];
}function notify(e, n) {
  if (e) {
    var r = eventHandlerMapping[e];if (r && r.length) {
      for (var t = 0; t < r.length; t++) {
        (0, r[t])(n);
      }delete eventHandlerMapping[e];
    }
  }
}function remove(e) {
  delete eventHandlerMapping[e];
}module.exports = { add: add, getHandlers: getHandlers, remove: remove, notify: notify }; 
 			}); 
		define("utils/flutter_helpers/parseHtml.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var fs = require("fs"),
    path = require("path"),
    glob = require("glob"),
    HTMLParser = require("node-html-parser"),
    filesArray = glob("../../components/**/*.wxml", function (e, r) {
  r.forEach(function (e) {
    generateDomTree(e);
  });
});function generateDomTree(e) {
  var r = fs.readFileSync(e, "utf8"),
      i = HTMLParser.parse(r);i.querySelector(".impression-cell").appendChild('<view class="impression-cell--ps"></view>'), console.log(i.firstChild.structure), fs.writeFileSync(e, i, { encoding: "utf8", flag: "w" });
} 
 			}); 
		define("utils/flutter_helpers/reworkCss.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var csstree = require("css-tree"),
    cheerio = require("cheerio"),
    fs = require("fs"),
    path = require("path"),
    glob = require("glob"),
    rework = require("rework"),
    pseudoclasses = require("rework-pseudo-classes"),
    compile = require("css-whitespace"),
    util = require("util"),
    log_file = fs.createWriteStream(__dirname + "/debug.log", { flags: "w" }),
    log_stdout = process.stdout,
    ignoreFiles = require("../../../gulpingore"),
    ignorePath = [];ignoreFiles.forEach(function (e, r) {
  ignorePath.push("../../**/" + e + "/**/*");
}), console.error = function () {
  log_file.write(util.format.apply(util, arguments) + "\n"), log_stdout.write(util.format.apply(util, arguments) + "\n");
};var goThroughAllFiles = function goThroughAllFiles(e, r) {
  glob(e, { ignore: ignorePath }, function (e, o) {
    console.log(o), o.forEach(function (e) {
      try {
        r.call(this, e);
      } catch (r) {
        console.error("fail at", e);
      }
    });
  });
},
    updatePseudoClassName = function updatePseudoClassName(e) {
  var r = fs.readFileSync(e, "utf8");rework(r).use(pseudoclasses({ blacklist: [":active", ":hover"], allCombinations: !0 })).toString();
};function getAllPesudoClass(e) {
  var r = fs.readFileSync(e, "utf8");csstree.parse(r);
}goThroughAllFiles("../../**/!(weui).?(wx|le)ss", updatePseudoClassName); 
 			}); 
		define("utils/generateImageLayout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _toConsumableArray(i) {
  if (Array.isArray(i)) {
    for (var p = 0, t = Array(i.length); p < i.length; p++) {
      t[p] = i[p];
    }return t;
  }return Array.from(i);
}var px_margin = 4,
    px_010__v3 = xmpx2rpx(126),
    px_101__v3 = xmpx2rpx(125),
    px_11 = xmpx2rpx(190),
    px_100 = xmpx2rpx(253),
    px_010 = xmpx2rpx(125),
    px_001_h = xmpx2rpx(126),
    px_100_h = px_010 + px_001_h + px_margin,
    px_1_w = xmpx2rpx(380),
    px_1_h = xmpx2rpx(253);function xmpx2rpx(i) {
  return 750 / 414 * i;
}function generateLayout3(i) {
  var p = i[0] && i[0].pic ? i[0].pic : i[0],
      t = i[1] && i[1].pic ? i[1].pic : i[1],
      e = i[2] && i[2].pic ? i[2].pic : i[2],
      r = [],
      a = Object.assign({}, p, { id: p.picUniqueID, width: px_101__v3, height: px_101__v3, marginRight: px_margin }),
      x = Object.assign({}, t, { id: t.picUniqueID, width: px_010__v3, height: px_101__v3, marginRight: px_margin }),
      s = Object.assign({}, e, { id: e.picUniqueID, width: px_101__v3, height: px_101__v3 });return i[0] && i[0].pic ? (i[0].pic = a, i[1].pic = x, i[2].pic = s, r.push({ maxHeight: px_101__v3, picLists: [i[0], i[1], i[2]] })) : r.push({ maxHeight: px_101__v3, picLists: [a, x, s] }), r;
}function generateFormattedMediaList(i) {
  var p = i[0] && i[0].pic ? i[0].pic : i[0],
      t = i[1] && i[1].pic ? i[1].pic : i[1],
      e = i[2] && i[2].pic ? i[2].pic : i[2],
      r = i.length,
      a = [];if (1 === r) {
    var x = Object.assign({}, p, { id: p.picUniqueID, width: px_1_w, height: px_1_h });return i[0] && i[0].pic ? (i[0].pic = x, a.push({ picLists: [i[0]] })) : a.push({ picLists: [x] }), a;
  }if (2 === r) {
    var s = i[1].pic || i[1],
        n = Object.assign({}, p, { id: p.picUniqueID, width: px_11, height: px_11, marginRight: px_margin }),
        h = Object.assign({}, s, { id: s.picUniqueID, width: px_11, height: px_11 });return i[0] && i[0].pic ? (i[0].pic = n, i[1].pic = h, a.push({ maxHeight: px_11, picLists: [i[0], i[1]] })) : a.push({ maxHeight: px_11, picLists: [n, h] }), a;
  }if (3 === r) {
    var c = Object.assign({}, p, { id: p.picUniqueID, width: px_100, height: px_100_h, marginRight: px_margin }),
        _ = Object.assign({}, t, { id: t.picUniqueID, width: px_010, height: px_010, marginBottom: px_margin }),
        g = Object.assign({}, e, { id: e.picUniqueID, width: px_010, height: px_001_h });return i[0] && i[0].pic ? (i[0].pic = c, i[1].pic = _, i[2].pic = g, a.push({ maxHeight: px_100_h, picLists: [i[0], i[1], i[2]] })) : a.push({ maxHeight: px_100_h, picLists: [c, _, g] }), a;
  }if (4 === r) {
    var m = i.splice(0, 2);return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(m))), a.push.apply(a, _toConsumableArray(generateFormattedMediaList(i))), a;
  }if (5 === r) {
    var u = i.splice(0, 2);return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(u))), a.push.apply(a, _toConsumableArray(generateLayout3(i))), a;
  }var d = i.splice(0, 3);return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(d))), a.push.apply(a, _toConsumableArray(generateLayout3(i))), a;
}function generateForwardFormattedMediaList(i) {
  var p = i[0] && i[0].pic ? i[0].pic : i[0],
      t = i[1] && i[1].pic ? i[1].pic : i[1],
      e = i[2] && i[2].pic ? i[2].pic : i[2],
      r = i.length,
      a = [];if (1 === r) {
    var x = Object.assign({}, p, { id: p.picUniqueID, width: xmpx2rpx(366), height: xmpx2rpx(243) });return i[0] && i[0].pic ? (i[0].pic = x, a.push({ picLists: [i[0]] })) : a.push({ picLists: [x] }), a;
  }if (2 === r) {
    var s = i[1].pic || i[1],
        n = Object.assign({}, p, { id: p.picUniqueID, width: xmpx2rpx(182), height: xmpx2rpx(148), marginRight: px_margin }),
        h = Object.assign({}, s, { id: s.picUniqueID, width: xmpx2rpx(182), height: xmpx2rpx(148) });return i[0] && i[0].pic ? (i[0].pic = n, i[1].pic = h, a.push({ maxHeight: xmpx2rpx(148), picLists: [i[0], i[1]] })) : a.push({ maxHeight: xmpx2rpx(148), picLists: [n, h] }), a;
  }if (3 === r) {
    var c = Object.assign({}, p, { id: p.picUniqueID, width: xmpx2rpx(120), height: xmpx2rpx(98), marginRight: px_margin }),
        _ = Object.assign({}, t, { id: t.picUniqueID, width: xmpx2rpx(122), height: xmpx2rpx(98), marginRight: px_margin }),
        g = Object.assign({}, e, { id: e.picUniqueID, width: xmpx2rpx(120), height: xmpx2rpx(98) });return i[0] && i[0].pic ? (i[0].pic = c, i[1].pic = _, i[2].pic = g, a.push({ maxHeight: xmpx2rpx(98), picLists: [i[0], i[1], i[2]] })) : a.push({ maxHeight: xmpx2rpx(98), picLists: [c, _, g] }), a;
  }var m = i.splice(0, 3);return a.push.apply(a, _toConsumableArray(generateForwardFormattedMediaList(m))), a.push.apply(a, _toConsumableArray(generateForwardFormattedMediaList(i))), a;
}module.exports = { generateFormattedMediaList: generateFormattedMediaList, generateForwardFormattedMediaList: generateForwardFormattedMediaList }; 
 			}); 
		define("utils/kitchenStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    util = require("./util"),
    PREFIX = "KITCHEN_";function getClientVersion() {
  var e = storage.getNumber(PREFIX + "clientVersion");return e && e > 0 ? e : 16777248;
}function setClientVersion(e) {
  storage.setNumber(PREFIX + "clientVersion", e);
}function getSource() {
  if ("" === storage.getString(PREFIX + "source")) return 0;var e = storage.getNumber(PREFIX + "source");return e && e > 0 ? e : 0;
}function setSource(e) {
  e < 0 && (e = 0), storage.setNumber(PREFIX + "source", e);
}function setCurrentTime(e) {
  storage.setString(PREFIX + "currentTime", e);
}function getCurrentTime(e) {
  return storage.getString(PREFIX + "currentTime");
}function setPriceLevel(e) {
  storage.setNumber(PREFIX + "priceLevel", e);
}function getPriceLevel() {
  return storage.getNumber(PREFIX + "priceLevel");
}function setPoiLocationRadius(e) {
  storage.setNumber(PREFIX + "poiLocationRadius", e);
}function getPoiLocationRadius() {
  var e = storage.getNumber(PREFIX + "poiLocationRadius");return null === e ? 80 : e;
}function getShouldShowHeadImage() {
  var e = storage.getNumber(PREFIX + "shouldShowHeadImage");return null === e ? 1 : e;
}function setShouldShowHeadImage(e) {
  storage.setNumber(PREFIX + "shouldShowHeadImage", e);
}function getShouldLocateDefault() {
  var e = storage.getNumber(PREFIX + "shouldShowLocateDefault");return null === e ? 0 : e;
}function setShouldShowLocateDefault(e) {
  storage.setNumber(PREFIX + "shouldShowLocateDefault", e);
}function getShouldUseGreyServer() {
  var e = storage.getNumber(PREFIX + "shouldUseGreyServer");return null === e ? 0 : e;
}function setShouldUseGreyServer(e) {
  storage.setNumber(PREFIX + "shouldUseGreyServer", e);
}function setDefaultLocationLatitude(e) {
  null != e && util.isNumeric(e) || (e = 23.10053), storage.setNumber(PREFIX + "defaultLocationLatitude", e);
}function getDefaultLocationLatitude() {
  var e = storage.getFloatNumber(PREFIX + "defaultLocationLatitude");return null === e ? 23.10053 : e;
}function setDefaultLocationLongitude(e) {
  null != e && util.isNumeric(e) || (e = 113.325), storage.setNumber(PREFIX + "defaultLocationLongitude", e);
}function getDefaultLocationLongitude() {
  var e = storage.getFloatNumber(PREFIX + "defaultLocationLongitude");return null === e ? 113.325 : e;
}function setMediaMaxDuration(e) {
  storage.setNumber(PREFIX + "mediaMaxDuration", e);
}function getMediaMaxDuration() {
  var e = storage.getNumber(PREFIX + "mediaMaxDuration");return null === e ? 15 : e;
}function setTestPoiLocationLatitude(e) {
  null != e && util.isNumeric(e) || (e = 0), storage.setNumber(PREFIX + "testPoiLocationLatitude", e);
}function getTestPoiLocationLatitude() {
  var e = storage.getFloatNumber(PREFIX + "testPoiLocationLatitude");return null === e ? 0 : e;
}function setTestPoiLocationLongitude(e) {
  null != e && util.isNumeric(e) || (e = 0), storage.setNumber(PREFIX + "testPoiLocationLongitude", e);
}function getTestPoiLocationLongitude() {
  var e = storage.getFloatNumber(PREFIX + "testPoiLocationLongitude");return null === e ? 0 : e;
}function setTestPoiName(e) {
  storage.setString(PREFIX + "testPoiName", e);
}function getTestPoiName() {
  return storage.getString(PREFIX + "testPoiName");
}function getShouldUsePoiTestInfo() {
  var e = storage.getNumber(PREFIX + "shouldUsePoiTestInfo");return null === e ? 0 : e;
}function setShouldUsePoiTestInfo(e) {
  storage.setNumber(PREFIX + "shouldUsePoiTestInfo", e);
}function getShouldShowStoreAppEntry() {
  var e = storage.getNumber(PREFIX + "shouldShowStoreAppEntry");return null === e ? 1 : e;
}function setShouldShowStoreAppEntry(e) {
  storage.setNumber(PREFIX + "shouldShowStoreAppEntry", e);
}module.exports = { getShouldUseGreyServer: getShouldUseGreyServer, setShouldUseGreyServer: setShouldUseGreyServer, getShouldLocateDefault: getShouldLocateDefault, setShouldShowLocateDefault: setShouldShowLocateDefault, getClientVersion: getClientVersion, setClientVersion: setClientVersion, getSource: getSource, setSource: setSource, getCurrentTime: getCurrentTime, setCurrentTime: setCurrentTime, setPriceLevel: setPriceLevel, getPriceLevel: getPriceLevel, setPoiLocationRadius: setPoiLocationRadius, getPoiLocationRadius: getPoiLocationRadius, getShouldShowHeadImage: getShouldShowHeadImage, setShouldShowHeadImage: setShouldShowHeadImage, setDefaultLocationLatitude: setDefaultLocationLatitude, getDefaultLocationLatitude: getDefaultLocationLatitude, setDefaultLocationLongitude: setDefaultLocationLongitude, getDefaultLocationLongitude: getDefaultLocationLongitude, setMediaMaxDuration: setMediaMaxDuration, getMediaMaxDuration: getMediaMaxDuration, setTestPoiLocationLatitude: setTestPoiLocationLatitude, getTestPoiLocationLatitude: getTestPoiLocationLatitude, setTestPoiLocationLongitude: setTestPoiLocationLongitude, getTestPoiLocationLongitude: getTestPoiLocationLongitude, setTestPoiName: setTestPoiName, getTestPoiName: getTestPoiName, setShouldUsePoiTestInfo: setShouldUsePoiTestInfo, getShouldUsePoiTestInfo: getShouldUsePoiTestInfo, getShouldShowStoreAppEntry: getShouldShowStoreAppEntry, setShouldShowStoreAppEntry: setShouldShowStoreAppEntry }; 
 			}); 
		define("utils/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
!function (n) {
  function r(n, r) {
    var t = (65535 & n) + (65535 & r);return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
  }function t(n, t, e, o, u, c) {
    return r((f = r(r(t, n), r(o, c))) << (i = u) | f >>> 32 - i, e);var f, i;
  }function e(n, r, e, o, u, c, f) {
    return t(r & e | ~r & o, n, r, u, c, f);
  }function o(n, r, e, o, u, c, f) {
    return t(r & o | e & ~o, n, r, u, c, f);
  }function u(n, r, e, o, u, c, f) {
    return t(r ^ e ^ o, n, r, u, c, f);
  }function c(n, r, e, o, u, c, f) {
    return t(e ^ (r | ~o), n, r, u, c, f);
  }function f(n, t) {
    var f, i, a, h, g;n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;var l = 1732584193,
        v = -271733879,
        d = -1732584194,
        C = 271733878;for (f = 0; f < n.length; f += 16) {
      i = l, a = v, h = d, g = C, l = e(l, v, d, C, n[f], 7, -680876936), C = e(C, l, v, d, n[f + 1], 12, -389564586), d = e(d, C, l, v, n[f + 2], 17, 606105819), v = e(v, d, C, l, n[f + 3], 22, -1044525330), l = e(l, v, d, C, n[f + 4], 7, -176418897), C = e(C, l, v, d, n[f + 5], 12, 1200080426), d = e(d, C, l, v, n[f + 6], 17, -1473231341), v = e(v, d, C, l, n[f + 7], 22, -45705983), l = e(l, v, d, C, n[f + 8], 7, 1770035416), C = e(C, l, v, d, n[f + 9], 12, -1958414417), d = e(d, C, l, v, n[f + 10], 17, -42063), v = e(v, d, C, l, n[f + 11], 22, -1990404162), l = e(l, v, d, C, n[f + 12], 7, 1804603682), C = e(C, l, v, d, n[f + 13], 12, -40341101), d = e(d, C, l, v, n[f + 14], 17, -1502002290), l = o(l, v = e(v, d, C, l, n[f + 15], 22, 1236535329), d, C, n[f + 1], 5, -165796510), C = o(C, l, v, d, n[f + 6], 9, -1069501632), d = o(d, C, l, v, n[f + 11], 14, 643717713), v = o(v, d, C, l, n[f], 20, -373897302), l = o(l, v, d, C, n[f + 5], 5, -701558691), C = o(C, l, v, d, n[f + 10], 9, 38016083), d = o(d, C, l, v, n[f + 15], 14, -660478335), v = o(v, d, C, l, n[f + 4], 20, -405537848), l = o(l, v, d, C, n[f + 9], 5, 568446438), C = o(C, l, v, d, n[f + 14], 9, -1019803690), d = o(d, C, l, v, n[f + 3], 14, -187363961), v = o(v, d, C, l, n[f + 8], 20, 1163531501), l = o(l, v, d, C, n[f + 13], 5, -1444681467), C = o(C, l, v, d, n[f + 2], 9, -51403784), d = o(d, C, l, v, n[f + 7], 14, 1735328473), l = u(l, v = o(v, d, C, l, n[f + 12], 20, -1926607734), d, C, n[f + 5], 4, -378558), C = u(C, l, v, d, n[f + 8], 11, -2022574463), d = u(d, C, l, v, n[f + 11], 16, 1839030562), v = u(v, d, C, l, n[f + 14], 23, -35309556), l = u(l, v, d, C, n[f + 1], 4, -1530992060), C = u(C, l, v, d, n[f + 4], 11, 1272893353), d = u(d, C, l, v, n[f + 7], 16, -155497632), v = u(v, d, C, l, n[f + 10], 23, -1094730640), l = u(l, v, d, C, n[f + 13], 4, 681279174), C = u(C, l, v, d, n[f], 11, -358537222), d = u(d, C, l, v, n[f + 3], 16, -722521979), v = u(v, d, C, l, n[f + 6], 23, 76029189), l = u(l, v, d, C, n[f + 9], 4, -640364487), C = u(C, l, v, d, n[f + 12], 11, -421815835), d = u(d, C, l, v, n[f + 15], 16, 530742520), l = c(l, v = u(v, d, C, l, n[f + 2], 23, -995338651), d, C, n[f], 6, -198630844), C = c(C, l, v, d, n[f + 7], 10, 1126891415), d = c(d, C, l, v, n[f + 14], 15, -1416354905), v = c(v, d, C, l, n[f + 5], 21, -57434055), l = c(l, v, d, C, n[f + 12], 6, 1700485571), C = c(C, l, v, d, n[f + 3], 10, -1894986606), d = c(d, C, l, v, n[f + 10], 15, -1051523), v = c(v, d, C, l, n[f + 1], 21, -2054922799), l = c(l, v, d, C, n[f + 8], 6, 1873313359), C = c(C, l, v, d, n[f + 15], 10, -30611744), d = c(d, C, l, v, n[f + 6], 15, -1560198380), v = c(v, d, C, l, n[f + 13], 21, 1309151649), l = c(l, v, d, C, n[f + 4], 6, -145523070), C = c(C, l, v, d, n[f + 11], 10, -1120210379), d = c(d, C, l, v, n[f + 2], 15, 718787259), v = c(v, d, C, l, n[f + 9], 21, -343485551), l = r(l, i), v = r(v, a), d = r(d, h), C = r(C, g);
    }return [l, v, d, C];
  }function i(n) {
    var r,
        t = "",
        e = 32 * n.length;for (r = 0; r < e; r += 8) {
      t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
    }return t;
  }function a(n) {
    var r,
        t = [];for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) {
      t[r] = 0;
    }var e = 8 * n.length;for (r = 0; r < e; r += 8) {
      t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
    }return t;
  }function h(n) {
    var r,
        t,
        e = "";for (t = 0; t < n.length; t += 1) {
      r = n.charCodeAt(t), e += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r);
    }return e;
  }function g(n) {
    return unescape(encodeURIComponent(n));
  }function l(n) {
    return function (n) {
      return i(f(a(n), 8 * n.length));
    }(g(n));
  }function v(n, r) {
    return function (n, r) {
      var t,
          e,
          o = a(n),
          u = [],
          c = [];for (u[15] = c[15] = void 0, o.length > 16 && (o = f(o, 8 * n.length)), t = 0; t < 16; t += 1) {
        u[t] = 909522486 ^ o[t], c[t] = 1549556828 ^ o[t];
      }return e = f(u.concat(a(r)), 512 + 8 * r.length), i(f(c.concat(e), 640));
    }(g(n), g(r));
  }module.exports = function (n, r, t) {
    return r ? t ? v(r, n) : h(v(r, n)) : t ? l(n) : h(l(n));
  };
}(); 
 			}); 
		define("utils/mentionStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    PREFIX = "MENTION_LAST_METION_READ_TIME";function setLastMetionReadTime(e) {
  storage.setNumber(PREFIX, e);
}function getLastMetionReadTime() {
  return storage.getNumber(PREFIX) || 0;
}module.exports = { setLastMetionReadTime: setLastMetionReadTime, getLastMetionReadTime: getLastMetionReadTime }; 
 			}); 
		define("utils/mixinCss.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { navTitleHeight: 102, statusBarHeight: 30, ipxPadding: 48, ipxFtPadding: 54, tabHeight: 100, ipxDangerBottom: 68 }; 
 			}); 
		define("utils/mmFramework/mm_page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var lastPages = [],
    MMPage = function MMPage(a) {
  var t = a.onLoad,
      e = a.onUnload,
      n = a.onShow;Page(Object.assign(a, { onLoad: function onLoad() {
      var a = arguments;t && t.apply(this, a);
    }, onShow: function onShow() {
      var a = getCurrentPages();lastPages.length > 0 && a.length > 0 && (lastPages.length + 1 == a.length ? this.mmPrevPage = a[a.length - 2] : lastPages.length - 1 == lastPages.length && (this.mmBackPage = a[a.length - 1])), lastPages = a, n && n.apply(this);
    }, onUnload: function onUnload() {
      e && e.apply(this);
    } }));
};module.exports = MMPage; 
 			}); 
		define("utils/model/comment_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var r = t[o];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (t, o, r) {
    return o && e(t.prototype, o), r && e(t, r), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}var BaseStateLessModel = require("../model_lib/base_stateless_model"),
    CommentSchema = require("../model/model_schema").CommentSchema,
    CommentModel = function (e) {
  function t() {
    return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }return _inherits(t, BaseStateLessModel), _createClass(t, [{ key: "getSchema", value: function value() {
      return CommentSchema;
    } }]), t;
}();module.exports = CommentModel; 
 			}); 
		define("utils/model/contact_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (t, o, n) {
    return o && e(t.prototype, o), n && e(t, n), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}var BaseStateLessModel = require("../model_lib/base_stateless_model"),
    ContactSchema = require("./model_schema").ContactSchema,
    ContactModel = function (e) {
  function t() {
    return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }return _inherits(t, BaseStateLessModel), _createClass(t, [{ key: "getSchema", value: function value() {
      return ContactSchema;
    } }, { key: "toggleFollow", value: function value() {
      var e = this.getValue();null != e.follow && this.setValue({ follow: 0 === e.follow ? 1 : 0 });
    } }]), t;
}();module.exports = ContactModel; 
 			}); 
		define("utils/model/model_schema.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { PoiSchema: { schemaName: "poi", id: String, isMark: Number, name: String, categoryName: String, area: String, price: Number, topImageUrl: String }, CommentSchema: { schemaName: "comment", id: String, isLike: Number, likeCount: Number, subCommentCount: Number }, ContactSchema: { schemaName: "contact", id: String, follow: Number, fansCount: Number }, NumberSchema: { schemaName: "number", id: String, number: Number }, StringSchema: { schemaName: "number", id: String, string: String } }; 
 			}); 
		define("utils/model/number_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function e(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}var BaseStateLessModel = require("../model_lib/base_stateless_model"),
    schema = require("./model_schema"),
    NumberModel = function (e) {
  function t() {
    return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }return _inherits(t, BaseStateLessModel), _createClass(t, [{ key: "getSchema", value: function value() {
      return schema.NumberSchema;
    } }, { key: "get", value: function value() {
      var e = this.getValue();return null != e.number ? e.number : null;
    } }, { key: "set", value: function value(e) {
      this.setValue({ number: e });
    } }]), t;
}();module.exports = NumberModel; 
 			}); 
		define("utils/model/poi_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function e(e, t) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (t, r, o) {
    return r && e(t.prototype, r), o && e(t, o), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}var BaseStateLessModel = require("../model_lib/base_stateless_model"),
    PoiSchema = require("../model/model_schema").PoiSchema,
    PoiModel = function (e) {
  function t() {
    return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }return _inherits(t, BaseStateLessModel), _createClass(t, [{ key: "getSchema", value: function value() {
      return PoiSchema;
    } }, { key: "toggleMark", value: function value() {
      var e = this.getValue();null != e.isMark && this.setValue({ isMark: 0 == e.isMark ? 1 : 0 });
    } }]), t;
}();module.exports = PoiModel; 
 			}); 
		define("utils/model/single_value_ids.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { followCountId: "followCountId" }; 
 			}); 
		define("utils/model_lib/base_stateless_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _createClass = function () {
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }return function (t, i, s) {
    return i && e(t.prototype, i), s && e(t, s), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var util = require("./util"),
    BaseStatelessModel = function () {
  function e(t) {
    if (_classCallCheck(this, e), this._schema = this.getSchema(), !this._schema) throw new Error("No schema for model");this._table = require("./table_manager").getTable(this._schema), this._id = t;
  }return _createClass(e, [{ key: "getSchema", value: function value() {
      return null;
    } }, { key: "getValue", value: function value() {
      return this._table.getRow(this._id);
    } }, { key: "setValue", value: function value(e) {
      util.isObject(e) && Object.keys(e).length && this._table.mergeRow(this._id, e);
    } }, { key: "resetValue", value: function value(e) {
      util.isObject(e) && Object.keys(e).length && this._table.setRow(this._id, e);
    } }, { key: "addUpdateListener", value: function value(e) {
      null != this._listenerId && this.clearOnUpdate(), this._listenerId = this._table.addRowUpdateListener(this._id, e);
    } }, { key: "removeUpdateListener", value: function value() {
      null != this._listenerId && (this._table.removeRowUpdateListener(this._id, this._listenerId), this._listenerId = void 0);
    } }]), e;
}();module.exports = BaseStatelessModel; 
 			}); 
		define("utils/model_lib/bindingUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var ReactiveModel = require("./reactive_model"),
    util = require("./util.js"),
    config = require("./config");function doBinding(e, a, t, r, n, i, l) {
  var o = a.__dataIdPath;if (l) {
    var d = util.getValueForPath(t.data, o),
        u = require("./table_manager").getTable(e);if (null != d && u.hasRow(d)) {
      var c = u.getRow(d),
          g = {};Object.keys(a).some(function (e) {
        var t = a[e];null != c[t] && (g[e] = c[t]);
      }), Object.keys(g).length && t[constants.Name_Original_SetData](g);
    }
  }var f = util.getSetDataObjValueForPath(r, o);if (null != f) {
    config.enableDebugLog && console.log("[binding] setData", r);var s = n.getPathModels(o);if (0 === s.length) new ReactiveModel(e).bindData(t, a).onUpdate(i);else {
      if (1 !== s.length) throw new Error("Internal error. Id path should not contains multiple values");var _ = s[0];_.getId() !== f ? (_.unBindData(), new ReactiveModel(e).bindData(t, a).onUpdate(i)) : _.setModelData(r, { from: "UPDATE_DATA_WITH_ID_IN_SET_DATA" });
    }
  } else if (null != util.getValueForPath(t.data, o)) {
    var h = n.getPathModels(o);if (0 === h.length) throw new Error("Internal error. Id field has not been bound with model");if (1 !== h.length) throw new Error("Internal error. Id path should not contains multiple values");h[0].setModelData(r, { from: "UPDATE_DATA_WITHOUT_ID_IN_SET_DATA" });
  }
}function normalizeArrayDataAndMapping(e, a, t) {
  var r = {};return Object.keys(e).forEach(function (t) {
    if (t.startsWith(a)) if (t.length === a.length) e[a].forEach(function (e, a) {
      r[a] = e;
    });else {
      var n = t.match(new RegExp(a + "\\[(\\d+)\\](.*)"));if (n) {
        var i = n[1],
            l = n[2];l ? l.startsWith(".") && (r[i] || (r[i] = {}), r[i][l.substring(1)] = e[t]) : r[i] = e[t];
      }
    }
  }), Object.keys(r).map(function (e) {
    var n = r[e],
        i = a + "[" + e + "]",
        l = {};Object.defineProperty(l, "__dataIdPath", { configurable: !1, enumerable: !1, value: i + "." + t.__dataIdPath, writable: !1 }), config.enableArrayMappingShare ? Object.defineProperty(l, "__arrayElementMapping__", { configurable: !1, enumerable: !1, value: t, writable: !1 }) : Object.keys(t).forEach(function (e) {
      var a = t[e];"__dataIdPath" !== e && (l[i + "." + e] = a);
    }), Object.defineProperty(l, "__arrayPath__", { configurable: !1, enumerable: !1, value: a, writable: !1 }), Object.defineProperty(l, "__arrayIndex__", { configurable: !1, enumerable: !1, value: e, writable: !1 });var o = {};return Object.keys(n).forEach(function (e) {
      o[i + "." + e] = n[e];
    }), { normalizedArrayElementData: o, mapping: l };
  });
}module.exports = { normalizeArrayDataAndMapping: normalizeArrayDataAndMapping, doBinding: doBinding }; 
 			}); 
		define("utils/model_lib/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { enableDebugLog: !1, enableArrayMappingShare: !0, enableDataShare: !0 }; 
 			}); 
		define("utils/model_lib/constants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { Name_Tables: "__tables__", Name_TableCallbacks: "__tableCallbacks__", Name_Has_Hooked: "__REACTIVE_MODELS_HAS_HOOKED__", Name_Instance_Id: "__REACTIVE_MODELS_INSTANCE_ID__", Name_Reactive_Models_Mapping_Tree: "__REACTIVE_MODELS_MAPPING_TREE__", Name_Original_SetData: "__REACTIVE_MODELS_ORIGINAL_SETDATA__", Name_Declared_Bindings: "__REACTIVE_MODELS_DECLARED_BINDINGS__", enumHookStatus: { Hooked: 1, InstanceRemoved: 2 } }; 
 			}); 
		define("utils/model_lib/declareBinding.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var bindingUtil = require("./bindingUtil.js"),
    MappingTree = require("./mapping_tree"),
    constants = require("./constants"),
    util = require("./util"),
    config = require("./config");function declareBinding(n) {
  var a = n.instance;if (!a) throw new Error("Instance not found in declareBinding options.");var e = n.schema;if (!e) throw new Error("schema not found in declareBinding options.");var t = util.clone(n.mapping);if (!t) throw new Error("mapping not found in declareBinding options.");var i = n.arrayPath,
      r = n.onUpdate,
      o = !!n.shouldSetPrevData;if (Object.keys(t).forEach(function (n) {
    var a = t[n];if (!e[a]) throw new Error("Mapping is not matched with schema. Do you use the wrong schema?");
  }), hook(a) !== constants.enumHookStatus.InstanceRemoved) {
    var s = void 0;if (a[constants.Name_Declared_Bindings].some(function (a) {
      if (n.arrayPath !== a.arrayPath) return !1;var e = Object.keys(a.mapping).some(function (a) {
        return null != n.mapping[a];
      });return e && (s = a), e;
    }) && s) config.enableDebugLog && console.log("[binding] Ignore duplicated declared binding", { schema: n.schema, arrayPath: n.arrayPath, mapping: n.mapping }, "is duplicated with", { schema: s.schema, arrayPath: s.arrayPath, mapping: s.mapping });else {
      var c = null;if (Object.keys(t).some(function (n) {
        if ("id" === t[n]) return c = n, !0;
      }), !c) throw new Error('No "id" mapping found for ' + JSON.stringify(t) + " in declareBinding options");Object.defineProperty(t, "__dataIdPath", { configurable: !1, enumerable: !1, value: c, writable: !1 }), Object.keys(t).every(function (n) {
        return -1 === n.indexOf(".");
      }) && Object.defineProperty(t, "__noDots__", { configurable: !1, enumerable: !1, value: 1, writable: !1 }), a[constants.Name_Declared_Bindings].push({ schema: e, mapping: t, arrayPath: i, onUpdate: r });var d = a[constants.Name_Reactive_Models_Mapping_Tree];i ? bindingUtil.normalizeArrayDataAndMapping(a.data || {}, i, t).forEach(function (n) {
        var t = n.normalizedArrayElementData,
            i = n.mapping;bindingUtil.doBinding(e, i, a, t, d, r, o);
      }) : bindingUtil.doBinding(e, t, a, a.data || {}, d, r, o);
    }
  }
}var getNextInstanceId = function () {
  var n = 0;return function () {
    return n++;
  };
}();function hook(n) {
  var a = n[constants.Name_Has_Hooked];if (n[constants.Name_Has_Hooked] === constants.enumHookStatus.Hooked) return constants.enumHookStatus.Hooked;if (a === constants.enumHookStatus.InstanceRemoved) return constants.enumHookStatus.InstanceRemoved;if (void 0 !== a) throw new Error("Internal error. Unknown hook status in instance" + constants.Name_Has_Hooked);n[constants.Name_Has_Hooked] = constants.enumHookStatus.Hooked, n[constants.Name_Instance_Id] = getNextInstanceId(), n[constants.Name_Reactive_Models_Mapping_Tree] = new MappingTree(), n[constants.Name_Declared_Bindings] = [];var e = n.setData;return n[constants.Name_Original_SetData] = e, n.setData = function (n, a) {
    e.call(this, n, a);var t = this,
        i = t[constants.Name_Declared_Bindings];if (i.some(function (a) {
      var e = a.arrayPath;if (e) return Object.keys(n).some(function (n) {
        return n.startsWith(e);
      });var t = a.mapping;return t.__noDots__ ? Object.keys(t).some(function (a) {
        return null != n[a];
      }) : Object.keys(t).some(function (a) {
        return Object.keys(n).some(function (n) {
          return a.startsWith(n);
        });
      });
    })) {
      var r = t[constants.Name_Reactive_Models_Mapping_Tree];i.forEach(function (a) {
        var e = a.mapping,
            i = a.arrayPath,
            o = a.schema,
            s = a.onUpdate;i && n[i] && r.getPathModels(i).forEach(function (n) {
          n.unBindData();
        });if (i) bindingUtil.normalizeArrayDataAndMapping(n, i, e).forEach(function (n) {
          var a = n.normalizedArrayElementData,
              e = n.mapping,
              i = e.__dataIdPath;if (null == util.getValueForPath(t.data, i)) {
            var c = r.getPathModels(i);if (c.length) return void c.forEach(function (n) {
              n.unBindData();
            });
          }bindingUtil.doBinding(o, e, t, a, r, s);
        });else {
          var c = e.__dataIdPath;if (null == util.getValueForPath(t.data, c)) {
            var d = r.getPathModels(c);if (d.length) return void d.forEach(function (n) {
              n.unBindData();
            });
          }bindingUtil.doBinding(o, e, t, n, r, s);
        }
      });
    }
  }, constants.enumHookStatus.Hooked;
}module.exports = declareBinding; 
 			}); 
		define("utils/model_lib/deep_equal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (r) {
  return typeof r === "undefined" ? "undefined" : _typeof2(r);
} : function (r) {
  return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r === "undefined" ? "undefined" : _typeof2(r);
},
    isArray = Array.isArray,
    keyList = Object.keys,
    hasProp = Object.prototype.hasOwnProperty;module.exports = function r(t, e) {
  if (t === e) return !0;if (t && e && "object" == (void 0 === t ? "undefined" : _typeof(t)) && "object" == (void 0 === e ? "undefined" : _typeof(e))) {
    var n,
        o,
        i,
        f = isArray(t),
        y = isArray(e);if (f && y) {
      if ((o = t.length) != e.length) return !1;for (n = o; 0 != n--;) {
        if (!r(t[n], e[n])) return !1;
      }return !0;
    }if (f != y) return !1;var u = t instanceof Date,
        a = e instanceof Date;if (u != a) return !1;if (u && a) return t.getTime() == e.getTime();var s = t instanceof RegExp,
        p = e instanceof RegExp;if (s != p) return !1;if (s && p) return t.toString() == e.toString();var c = keyList(t);if ((o = c.length) !== keyList(e).length) return !1;for (n = o; 0 != n--;) {
      if (!hasProp.call(e, c[n])) return !1;
    }for (n = o; 0 != n--;) {
      if (!r(t[i = c[n]], e[i])) return !1;
    }return !0;
  }return t != t && e != e;
}; 
 			}); 
		define("utils/model_lib/helper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util"),
    tableManager = require("./table_manager");function getTableData(e, t) {
  return tableManager.getTable(e).getRow(t);
}function setTableData(e, t, a) {
  util.isObject(a) && Object.keys(a).length && util.validate(e, a) && tableManager.getTable(e).mergeRow(t, a);
}function resetTableData(e, t, a) {
  util.isObject(a) && Object.keys(a).length && util.validate(e, a) && tableManager.getTable(e).setRow(t, a);
}function addTableDataListener(e, t, a) {
  return tableManager.getTable(e).addRowUpdateListener(t, a);
}function removeTableDataListener(e, t, a) {
  tableManager.getTable(e).removeRowUpdateListener(t, a);
} 
 			}); 
		define("utils/model_lib/hook.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var constants = require("./constants"),
    util = require("./util");function removeHook() {
  if (null != this[constants.Name_Has_Hooked]) {
    this[constants.Name_Reactive_Models_Mapping_Tree].getAllPathModels().forEach(function (e) {
      e.unBindData();
    }), delete this[constants.Name_Reactive_Models_Mapping_Tree], this[constants.Name_Has_Hooked] = constants.enumHookStatus.InstanceRemoved, this.setData = this[constants.Name_Original_SetData];
  }
}var originalPage = Page,
    HookPage = function HookPage(e) {
  e.onLoad;var o = e.onUnload;originalPage(Object.assign(e, { onUnload: function onUnload() {
      removeHook.apply(this, arguments), o && o.apply(this, arguments);
    } }));
};Page = HookPage;var originalComponent = Component,
    HookComponent = function HookComponent(e) {
  if (e.lifetimes && e.lifetimes.detached) {
    var o = e.lifetimes.detached;originalComponent(util.mergeDeep(e, { lifetimes: { detached: function detached() {
          o.apply(this, arguments), removeHook.apply(this, arguments);
        } } }));
  } else if (e.detached) {
    var t = e.detached;originalComponent(util.mergeDeep(e, { detached: function detached() {
        t.apply(this, arguments), removeHook.apply(this, arguments);
      } }));
  } else originalComponent(util.mergeDeep(e, { lifetimes: { detached: function detached() {
        removeHook.apply(this, arguments);
      } } }));
};Component = HookComponent; 
 			}); 
		define("utils/model_lib/mapping_tree.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var util = require("./util"),
    MappingTree = function () {
  function e() {
    _classCallCheck(this, e), this.root = { isRoot: 1, token: "", children: {} };
  }return _createClass(e, [{ key: "setPathModel", value: function value(e, t) {
      var n = this;if (util.isArray(t)) t.forEach(function (t, r) {
        n.setPathModel(e + "[" + r + "]", t);
      });else {
        var r = util.getPathTokens(e),
            a = this.root;r.forEach(function (e) {
          if (a.children[e]) a = a.children[e];else {
            var t = { name: e, children: {} };a.children[e] = t, a = t;
          }
        }), a.data = t;
      }
    } }, { key: "getAllPathModels", value: function value() {
      return this.getPathModels("");
    } }, { key: "getPathModels", value: function value(e) {
      var t = this.root;if (e && e.length) {
        if (util.getPathTokens(e).some(function (e) {
          if (!t.children[e]) return !0;t = t.children[e];
        })) return [];if (t.data) return [t.data];
      }var n = [];n.push(t);for (var r = [], a = function a() {
        var e = n.pop();Object.keys(e.children).length && Object.keys(e.children).forEach(function (t) {
          var r = e.children[t];n.push(r);
        }), e.data && r.push(e.data);
      }; n.length;) {
        a();
      }return r;
    } }]), e;
}();module.exports = MappingTree; 
 			}); 
		define("utils/model_lib/reactive_model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }return function (t, n, i) {
    return n && e(t.prototype, n), i && e(t, i), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var constants = require("./constants"),
    util = require("./util"),
    config = require("./config"),
    ReactiveModel = function () {
  function e(t) {
    _classCallCheck(this, e), this._id = null, this._schema = t, this._table = require("./table_manager").getTable(this._schema);
  }return _createClass(e, [{ key: "bindData", value: function value(e, t) {
      var n = t.__dataIdPath,
          i = util.getValueForPath(e.data, n);if (null != i) {
        this._id = i, Object.defineProperty(this, "_instance", { configurable: !0, enumerable: !1, value: e, writable: !1 });var a = e[constants.Name_Reactive_Models_Mapping_Tree];return this._mapping = t, a.setPathModel(n, this), this.setModelData(e.data, { from: "ADD_BINDING" }), this;
      }
    } }, { key: "_getReversedMapping", value: function value(e) {
      var t = this;return this._reversedMapping ? this._reversedMapping : (this._reversedMapping = {}, Object.keys(e).forEach(function (n) {
        var i = e[n];t._reversedMapping[i] = n;
      }), this._reversedMapping);
    } }, { key: "_addListener", value: function value() {
      var e = this;if (void 0 === this._listenerId) {
        var t = this._id;if (null == t) return;this._bindingInfoPage = { pageOrComponentId: this._instance[constants.Name_Instance_Id], route: this._instance.route || "", dataIdPath: this._mapping.__dataIdPath }, this._bindingInfoSchema = { schema: this._schema.schemaName, id: t }, this._listenerId = this._table.addRowUpdateListener(t, function (t, n, i) {
          if (e._id !== t.id) throw new Error("Internal Error. Id should not be changed.");var a = i ? i.reactiveModel : null,
              s = {},
              r = void 0;r = config.enableArrayMappingShare ? util.getNormalArrayElementMapping(e._mapping) : e._mapping;var o = e._getReversedMapping(r);if (Object.keys(n).forEach(function (t) {
            var i = o[t],
                a = util.getValueForPath(e._instance.data, i),
                r = n[t];r !== a && void 0 !== r && (s[i] = r);
          }), (Object.keys(s).length || a === e) && e._onUpdateFn) {
            var _ = function _(e) {
              Object.keys(e).forEach(function (t) {
                s[t] = e[t];
              });
            };e._mapping.__arrayPath__ ? e._onUpdateFn(util.clone(t), util.clone(n), _, e._mapping.__arrayPath__, e._mapping.__arrayIndex__) : e._onUpdateFn(util.clone(t), util.clone(n), _);
          }Object.keys(s).length && e._instance[constants.Name_Original_SetData](s), (Object.keys(s).length || a === e) && config.enableDebugLog && console.log("[binding] Update data, diff=", n, ". BindingInfo: ", e._bindingInfoPage, "<==>", e._bindingInfoSchema);
        }), this._bindingInfoSchema._listenerId = this._listenerId, config.enableDebugLog && console.log("[binding] Add binding", ". BindingInfo: ", this._bindingInfoPage, "<==>", this._bindingInfoSchema);
      }
    } }, { key: "unBindData", value: function value() {
      (this._id && void 0 !== this._listenerId && (this._table.removeRowUpdateListener(this._id, this._listenerId), config.enableDebugLog && console.log("[binding] Remove binding", ". BindingInfo: ", this._bindingInfoPage, "<==>", this._bindingInfoSchema), delete this._listenerId), this._instance) && (this._instance[constants.Name_Reactive_Models_Mapping_Tree].setPathModel(this._mapping.__dataIdPath, void 0), delete this._instance);
    } }, { key: "onUpdate", value: function value(e) {
      return this._onUpdateFn = e, this;
    } }, { key: "onInsert", value: function value(e) {
      return this._onInsertFn = e, this;
    } }, { key: "setModelData", value: function value(e, t) {
      if (this._addListener(), config.enableDataShare && "ADD_BINDING" === t.from && !this._table.hasRow(this._id)) this._table.setRow(this._id, { id: this._id, __isLazyMappingValue__: !0, mapping: this._mapping, data: e, reactiveModel: this }, { reactiveModel: this, from: t.from });else {
        var n = {},
            i = void 0;if (i = config.enableArrayMappingShare ? util.getNormalArrayElementMapping(this._mapping) : this._mapping, Object.keys(i).forEach(function (a) {
          var s = i[a],
              r = void 0;void 0 !== (r = "ADD_BINDING" === t.from ? util.getValueForPath(e, a) : util.getSetDataObjValueForPath(e, a)) && (n[s] = r);
        }), !Object.keys(n).length) return;"UPDATE_DATA_WITHOUT_ID_IN_SET_DATA" === t.from && config.enableDebugLog && console.log("[binding] setData", e), this._table.mergeRow(this._id, n, { reactiveModel: this, from: t.from });
      }this._onInsertFn && "ADD_BINDING" === t.from && this._onInsertFn(this._table.getRow(this._id), this._mapping.__arrayPath__, this._mapping.__arrayIndex__);
    } }, { key: "getId", value: function value() {
      return this._id;
    } }, { key: "getListenerId", value: function value() {
      return this._listenerId;
    } }]), e;
}();module.exports = ReactiveModel; 
 			}); 
		define("utils/model_lib/table.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _createClass = function () {
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }return function (t, a, i) {
    return a && e(t.prototype, a), i && e(t, i), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var tableEventBus = require("./table_event_bus"),
    config = require("./config"),
    util = require("./util"),
    Table = function () {
  function e(t) {
    _classCallCheck(this, e), this._schema = t, this._tableName = t.schemaName, this._table = {};
  }return _createClass(e, [{ key: "setRow", value: function value(e, t, a) {
      var i = this;if (null == t.id && (t.id = e), t.__isLazyMappingValue__) {
        if (this._table[e]) throw new Error("Internal error. Lazy mapping value should be set on empty row.");this._table[e] = t;
      } else if (util.validate(this._schema, t)) if (this._table[e]) {
        this._table[e].__isLazyMappingValue__ && (this._table[e] = this.calcLazyMappingValue(this._table[e]));var n = {},
            l = this._table[e];Object.keys(t).forEach(function (e) {
          var a = t[e];a !== l[e] && (n[e] = a);
        }), Object.assign(this._table[e], n), Object.keys(n).length && wx.nextTick(function () {
          tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), n, a);
        });
      } else this._table[e] = util.clone(t);
    } }, { key: "mergeRow", value: function value(e, t, a) {
      var i = this;if (t.__isLazyMappingValue__) this._table[e] = t;else if (util.validate(this._schema, t)) {
        if (!this._table[e]) {
          if (!a) return void this.setRow(e, t);throw new Error("Internal error. Merge row get called when row is empty.");
        }if (this._table[e].__isLazyMappingValue__) {
          var n = {},
              l = this._table[e].reactiveModel;this._table[e] = this.calcLazyMappingValue(this._table[e]);var r = this._table[e];if (Object.keys(t).forEach(function (e) {
            var a = t[e];a !== r[e] && (n[e] = a);
          }), Object.keys(n).length) Object.assign(this._table[e], n), wx.nextTick(function () {
            tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), n, a);
          });else if (a && l === a.reactiveModel) {
            var s = util.clone(t);wx.nextTick(function () {
              tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), s, a);
            });
          }
        } else {
          var o = {},
              u = this._table[e];Object.keys(t).forEach(function (e) {
            var a = t[e];a !== u[e] && (o[e] = a);
          }), Object.assign(this._table[e], o), Object.keys(o).length && wx.nextTick(function () {
            tableEventBus.notify(i._tableName, e, util.clone(i._table[e]), o, a);
          });
        }
      }
    } }, { key: "getRow", value: function value(e) {
      var t = this._table[e];if (!t) return {};t.__isLazyMappingValue__ && (t = this.calcLazyMappingValue(t));return util.clone(t);
    } }, { key: "hasRow", value: function value(e) {
      return !!this._table[e];
    } }, { key: "addRowUpdateListener", value: function value(e, t) {
      return tableEventBus.add(this._tableName, e, t);
    } }, { key: "removeRowUpdateListener", value: function value(e, t) {
      var a = this;tableEventBus.remove(this._tableName, e, t, function () {
        config.enableDebugLog && console.log("[binding] remove row", a._table[e]), delete a._table[e];
      });
    } }, { key: "calcLazyMappingValue", value: function value(e) {
      if (e.__isLazyMappingValue__) {
        var t = e.id,
            a = e.data,
            i = e.mapping;config.enableArrayMappingShare && (i = util.getNormalArrayElementMapping(i));var n = {};if (Object.keys(i).forEach(function (e) {
          var t = i[e],
              l = util.getValueForPath(a, e);void 0 !== l && (n[t] = l);
        }), n.id !== t) throw new Error("Internal Error. Id is not equal");return n;
      }return e;
    } }]), e;
}();module.exports = Table; 
 			}); 
		define("utils/model_lib/table_event_bus.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var constants = require("./constants");getApp().globalData || (getApp().globalData = {}), getApp().globalData[constants.Name_TableCallbacks] = {};var tableCallbacks = getApp().globalData[constants.Name_TableCallbacks],
    getNextListenerId = function () {
  var a = 0;return function () {
    return a++;
  };
}();function add(a, l, t) {
  var e = getNextListenerId();return tableCallbacks[a] || (tableCallbacks[a] = {}), tableCallbacks[a][l] || (tableCallbacks[a][l] = {}), tableCallbacks[a][l][e] = t, e;
}function notify(a, l, t, e, b) {
  if (tableCallbacks && tableCallbacks[a] && tableCallbacks[a][l]) {
    var s = tableCallbacks[a][l],
        c = Object.assign({}, s);Object.keys(c).forEach(function (a) {
      (0, s[a])(t, e, b);
    });
  }
}function remove(a, l, t, e) {
  if (tableCallbacks && tableCallbacks[a] && tableCallbacks[a][l] && tableCallbacks[a][l][t]) {
    delete tableCallbacks[a][l][t];var b = tableCallbacks[a][l];Object.keys(b).length || (delete tableCallbacks[a][l], e && e(a, l));
  }
}module.exports = { notify: notify, add: add, remove: remove }; 
 			}); 
		define("utils/model_lib/table_manager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var constants = require("./constants"),
    Table = require("./table");getApp().globalData || (getApp().globalData = {}), getApp().globalData[constants.Name_Tables] = {};var tables = getApp().globalData[constants.Name_Tables];function getTable(a) {
  return tables[a.schemaName] || (tables[a.schemaName] = new Table(a)), tables[a.schemaName];
}module.exports = { getTable: getTable }; 
 			}); 
		define("utils/model_lib/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};function _defineProperty(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}var config = require("./config");function clone(e) {
  var r = void 0;if (null == e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return e;if (e instanceof Date) return (r = new Date()).setTime(e.getTime()), r;if (e instanceof Array) {
    r = [];for (var t = 0, n = e.length; t < n; t++) {
      r[t] = clone(e[t]);
    }return r;
  }if (e instanceof Object) {
    for (var i in r = {}, e) {
      e.hasOwnProperty(i) && (r[i] = clone(e[i]));
    }return r;
  }throw new Error("Unable to copy obj! Its type isn't supported.");
}function shallowDiff(e, r) {
  var t = {};return Object.keys(r).forEach(function (n) {
    r[n] !== e[n] && (t[n] = r[n]);
  }), t;
}var getPathTokens = function () {
  var e = {};return function (r) {
    if (e[r]) return e[r];var t = [];return r.split(".").forEach(function (e) {
      e.endsWith("]") ? e.replace(/\[/g, ".[").split(".").forEach(function (e) {
        t.push(e);
      }) : t.push(e);
    }), e[r] = t, t;
  };
}();function getSetDataObjValueForPath(e, r) {
  if (isObject(e) && isString(r)) {
    if (null != e[r]) return e[r];for (var t = getPathTokens(r), n = t.length, i = "", o = void 0, a = 0; a < n; a++) {
      var f = t[a];if (null == o) i.length ? t[a].startsWith("[") ? i += t[a] : i += "." + t[a] : i = t[a], o = e[i];else {
        var u = f.match(/^\[(\d+)]$/);if (!(o = u ? o[parseInt(u[1], 10)] : o[t[a]])) return;
      }
    }return o;
  }
}function getValueForPath(e, r) {
  if (isObject(e) && isString(r)) {
    if (null != e[r]) return e[r];var t = getPathTokens(r),
        n = e,
        i = !1;return t.some(function (e, r) {
      i = r === t.length - 1;var o = e.match(/^\[(\d+)]$/);if (o) {
        var a = parseInt(o[1], 10);if (null == (n = n[a])) return !0;
      } else if (null == (n = n[e])) return !0;
    }), i ? n : void 0;
  }
}function isString(e) {
  return "string" == typeof e || e instanceof String;
}function isNumber(e) {
  return "number" == typeof e && isFinite(e);
}function isBoolean(e) {
  return "boolean" == typeof e;
}function isObject(e) {
  return e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.constructor === Object;
}function isArray(e) {
  return e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.constructor === Array;
}function isFunction(e) {
  return "function" == typeof e;
}function isNull(e) {
  return null === e;
}function isUndefined(e) {
  return void 0 === e;
}function validate(e, r) {
  return Object.keys(r).every(function (t) {
    if (!e[t]) throw new Error("No field=" + t + " found in schema=" + e.schemaName + ".");var n = r[t];if (isNull(n) || isUndefined(n)) return !0;if (e[t] === String) {
      if (!isString(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be String for schema=" + e.schemaName);return !0;
    }if (e[t] === Number) {
      if (!isNumber(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Number for schema=" + e.schemaName);return !0;
    }if (e[t] === Boolean) {
      if (!isBoolean(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Boolean for schema=" + e.schemaName);return !0;
    }if (e[t] === Array) {
      if (!isArray(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Array for schema=" + e.schemaName);return !0;
    }if (e[t] === Object) {
      if (!isObject(n)) throw new Error("object=" + JSON.stringify(r) + ", field=" + t + " should be Object for schema=" + e.schemaName);return !0;
    }if (isObject(e[t])) throw new Error("schema type cannot be a hierarchical object, only String, Number, Boolean, Object type supported");throw new Error("Unsupported schema type " + _typeof(e[t]));
  });
}function getNormalArrayElementMapping(e) {
  if (config.enableArrayMappingShare && e.__arrayElementMapping__) {
    var r = e.__arrayPath__ + "[" + e.__arrayIndex__ + "]",
        t = {},
        n = e.__arrayElementMapping__;return Object.keys(n).forEach(function (e) {
      var i = n[e];"__dataIdPath" !== e ? t[r + "." + e] = i : Object.defineProperty(t, "__dataIdPath", { configurable: !1, enumerable: !1, value: r + "." + i, writable: !1 });
    }), t;
  }return e;
}function mergeDeep(e) {
  for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) {
    t[n - 1] = arguments[n];
  }if (!t.length) return e;var i = t.shift();if (isObject(e) && isObject(i)) for (var o in i) {
    isObject(i[o]) ? (e[o] || Object.assign(e, _defineProperty({}, o, {})), mergeDeep(e[o], i[o])) : Object.assign(e, _defineProperty({}, o, i[o]));
  }return mergeDeep.apply(void 0, [e].concat(t));
}module.exports = { getNormalArrayElementMapping: getNormalArrayElementMapping, clone: clone, getSetDataObjValueForPath: getSetDataObjValueForPath, getValueForPath: getValueForPath, isString: isString, getPathTokens: getPathTokens, isNumber: isNumber, isBoolean: isBoolean, isObject: isObject, isArray: isArray, isFunction: isFunction, isNull: isNull, isUndefined: isUndefined, validate: validate, deepEqual: require("./deep_equal.js"), shallowDiff: shallowDiff, mergeDeep: mergeDeep }; 
 			}); 
		define("utils/poiDataFormatter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });var moment_ = require("../jslib/moment"),
    moment = moment_,
    FILTER_PATTERN = /^((周[一二三四五六七日末])?)([到至]?)((周[一二三四五六七日末])?)((全天)?)(((0*[0-9]|1[0-9]|2[0-3]):[0-5][0-9])?)/g,
    DAY_REGEX = /[一二三四五六日]|(周末)/g,
    HOURS_REGEX = /\d|全天/g,
    HOURS_MAP = ["周末", "一", "二", "三", "四", "五", "六", "日"],
    ALL_DAY = "00:00-24:00";function tokenizer(e) {
  return e.split(/(?:;|\s)+/g);
}function businessHourFormatter(e) {
  for (var r = {}, t = [], n = [], s = tokenizer(e), i = 0; i < s.length;) {
    var o = s[i],
        u = o.trim().match(FILTER_PATTERN) || void 0,
        m = HOURS_REGEX.test(o),
        a = o.match(DAY_REGEX) || [];if (o && void 0 !== u && 0 === u[0].length) return { 0: e };if ("全天" === o && (o = ALL_DAY), m) {
      for (var f = 0; f < t.length; f++) {
        if (void 0 === r[t[f]]) r[t[f]] = o;else {
          var l = r[t[f]];l = l.concat(";", o), r[t[f]] = l;
        }
      }n = [];
    } else {
      if (t = a.map(function (e) {
        return HOURS_MAP.indexOf(e);
      }), o.includes("至")) {
        var h = t[0],
            H = t[1] || -1;for (t = []; h <= H;) {
          t.push(h), h++;
        }
      } else 0 === t[0] && (t = []).push.apply(t, [6, 7]);t = n = n.concat(t);
    }i++;
  }return r;
}exports.businessHourFormatter = businessHourFormatter;var HOUR_SPLIT_REGEX = /-/g,
    HH_MM_REGEX = /(\d{1,2}):(\d{1,2})-(\d{1,2}):(\d{1,2})/g;function businessHourBeautifier(e) {
  for (var r = [], t = tokenizer(e), n = 0; n < t.length;) {
    var s = t[n],
        i = s.split(HOUR_SPLIT_REGEX);switch (s) {case "周一至周日":
        break;case "周末":
        "", r.push("周末");break;default:
        if (i.length > 0) for (var o = moment("00:00", "HH:mm"), u = moment("05:00", "HH:mm"), m = 0; m < i.length; m++) {
          if (moment(i[m], "hh:mm").isBetween(o, u)) {
            i[m] = "凌晨" + i[m];break;
          }
        }s = i.join("-"), r.push(s), s = "";}n++;
  }var a = e.match(HH_MM_REGEX) || "",
      f = businessHourFormatter(e),
      l = Object.keys(f),
      h = 0;if (6 === l.length && 1 == a.length) {
    for (var H = 0; H < 7; H++) {
      if (l[H] !== (H + 1).toString()) {
        h = H + 1;break;
      }
    }(r = []).push(a), r.push("周" + HOURS_MAP[h] + "不营业");
  }return 5 === l.length && 1 == a.length && l.indexOf("6") && l.indexOf("7") && ((r = []).push(a), r.push("周末不营业")), r.join(" ");
}function businessHourChecker(e, r) {
  var t = businessHourFormatter(r);if (t[0]) return null;for (var n = Object.keys(t), s = n.length, i = moment.unix(Number(e)).isoWeekday(), o = [], u = !1, m = null, a = 0; a < s; a++) {
    var f = void 0;n.indexOf((i - 1).toString()) > -1 && n.indexOf(i.toString()) > -1 && (f = i - 1), 1 === i && (f = 7), i === Number(n[a]) ? o = t[i].split(";") : f === Number(n[a]) && (o = t[f].split(";"), u = !0);for (var l = 0, h = o.length, H = null, b = moment.unix(Number(e)); l < h;) {
      var c = o[l].split("-"),
          d = moment(c[0], "HH:mm"),
          _ = moment(c[1], "HH:mm");_.isBefore(d) && (u && b.hour() <= _.hour() ? (d.subtract(1, "days"), u = !1) : _.add(1, "days")), (H = b.isBetween(d, _)) ? l = h : l++;
    }if (H) return m = 1;m = 0;
  }return m;
}exports.businessHourBeautifier = businessHourBeautifier, exports.businessHourChecker = businessHourChecker; 
 			}); 
		define("utils/poiStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    PREFIX = "STORAGE_POI_";function setPoi(e, t) {
  storage.setObj(PREFIX + e, t);
}function getPoi(e) {
  return storage.getObj(PREFIX + e);
}module.exports = { setPoi: setPoi, getPoi: getPoi }; 
 			}); 
		define("utils/protoConstants.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD: 1, MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD: 2, MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST: 3 }; 
 			}); 
		define("utils/questionStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    PREFIX = "QUESTION_";function hasAnswered() {
  return !!storage.getNumber(PREFIX + "hasAnswered");
}function answer() {
  storage.setNumber(PREFIX + "hasAnswered", 1);
}module.exports = { hasAnswered: hasAnswered, answer: answer }; 
 			}); 
		define("utils/render_data_util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}var generateImageLayout = require("./generateImageLayout"),
    util = require("/util"),
    reportEnum = require("../utils/reportEnum"),
    protoConstants = require("../utils/protoConstants"),
    payRecommendInfoText = "支付后推荐这里",
    declareBinding = require("../utils/model_lib/declareBinding"),
    PoiSchema = require("../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../utils/model/model_schema").CommentSchema,
    PoiModel = require("../utils/model/poi_model"),
    CommentModel = require("../utils/model/comment_model");function getRenderTagInfoList(e) {
  var t = this;return (e = e || []).map(function (e) {
    return t.getRenderTagInfo(e);
  });
}function getRenderTagInfo(e) {
  var t = e.tag;return { abstestId: e.abstestId, context: e.context, userGroupId: e.userGroupId, id: t.id, name: t.name, popular: t.popular, poiCount: t.poiCount, visitCount: t.visitCount, coverPhoto: t.coverPhoto && t.coverPhoto.url ? t.coverPhoto.url : "" };
}function getRenderPoiInfoList(e) {
  return (e = e || []).map(function (e) {
    return getRenderPoiInfo(e);
  });
}function getRenderPoiInfo(e) {
  var t = { id: "", poiId: "", unique: "", thumbUrl: "", topImageUrl: "", photos: [], name: "", categoryName: "", price: 0, distance: 0, distanceString: "", distanceString2: "", isMark: 0, recommendText: { label: "", scene: reportEnum.enumPoiUgcLabelScene.OTHER }, area: "", infoWithDistance: "", visitCount: 0, ugc: { visitCount: 0, visitContact: [], markCount: 0, markContact: [], impression: {} } };t.id = e.base.id, t.poiId = e.base.id, t.unique = t.id, t.thumbUrl = "", t.topImageUrl = "", e.base.logo ? (e.base.logo.thumbUrl ? t.thumbUrl = e.base.logo.thumbUrl : t.thumbUrl = "", e.base.logo.url ? t.topImageUrl = e.base.logo.url : t.topImageUrl = "") : t.thumbUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg", t.name = util.formatChar(e.base.name);var a = [];(e.base.category.forEach(function (e) {
    var t = e.name,
        n = e.name.lastIndexOf(":");-1 != n && (t = t.substring(n + 1, e.name.length)), a.push(t);
  }), t.categoryDesc = a.join(","), t.categoryName = t.categoryDesc, t.price = 0, e.price && e.price.price && (t.price = parseInt(e.price.price) / 100), t.distance = Math.round(e.base.location.distance), t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", t.distance < 100 || 100 == t.distance ? t.distanceString2 = "约100m" : t.distance > 100 && t.distance < 1e3 ? t.distanceString2 = "约" + Math.round(t.distance / 100) + "00m" : (t.distance > 1e3 || 1e3 == t.distance) && (t.distanceString2 = Math.round(t.distance / 1e3) + "km"), t.infoWithDistance = t.distanceString2, t.isMark = 0, t.recommendText = { label: "", scene: reportEnum.enumPoiUgcLabelScene.OTHER }, t.photos = [], e.ugc && e.ugc.ugcPhoto && e.ugc.ugcPhoto.length ? t.photos = e.ugc.ugcPhoto.map(function (e) {
    return e.thumbUrl;
  }) : e.photo && e.photo.length ? (t.photos = e.photo.map(function (e) {
    return e.thumbUrl;
  }), t.photos.splice(0, t.photos.length - 1)) : t.photos = ["https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg"], t.photos.length > 3 && t.photos.splice(3, t.photos.length - 3), e.ugc && (t.ugc.visitCount = e.ugc.visitCount || 0, t.ugc.visitContact = e.ugc.visitContact || [], t.ugc.markCount = e.ugc.markCount || 0, t.ugc.markContact = e.ugc.markContact || [], t.ugc.impression = e.ugc.friendMatchImpressionInfo || "", t.isMark = e.ugc.isMark || 0, e.ugc.markCount && (t.recommendText.label = e.ugc.markCount + "个朋友想去", t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL), e.ugc.visitCount && (t.recommendText.label = e.ugc.visitCount + "个朋友发过印象", t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL), e.ugc.matchImpressionInfo && e.ugc.matchImpressionInfo.impressionId && (t.matchImpressionHeadImgUrl = e.ugc.matchImpressionInfo.contact.headImgUrl, t.matchImpressionWord = e.ugc.matchImpressionInfo.word, t.matchImpressionId = e.ugc.matchImpressionInfo.impressionId)), e.rank && e.rank.billBoardRank && (e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD ? t.recommendText.label = "朋友想去排行榜第" + e.rank.billBoardRank.position + "名" : e.rank.billBoardRank.area && e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD ? t.recommendText.label = e.rank.billBoardRank.area.name + "想去排行榜第" + e.rank.billBoardRank.position + "名" : e.rank.billBoardRank.category && e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST && (t.recommendText.label = e.rank.billBoardRank.category.name + "排行榜第" + e.rank.billBoardRank.position + "名"), t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.RANK_LABEL), e.intro) && renderErrorBusinessStatusLabel(e.intro).length > 0 && (t.recommendText.label = renderErrorBusinessStatusLabel(e.intro), t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.ERROR_BUSINESS_STATUS);if (t.areaName = "", e.area && e.area.length) if (1 === e.area[0].type) t.areaName = e.area[0].name;else {
    var n = e.area.filter(function (e) {
      return 1 === e.type;
    }) || [];n.length > 0 ? t.areaName = n[0].name : t.areaName = "";
  }return t.area = t.areaName, t.title1 = t.name, t.title2 = t.categoryDesc, t.price && 0 != t.price && (t.title2 += " · 人均￥" + t.price, t.infoWithDistance += " · 人均￥" + t.price), t.areaName && (t.title2 += " · " + t.areaName, t.infoWithDistance += " · " + t.areaName), t;
}function setAndObserveNewPoiList(e, t, a, n, o) {
  var i = e,
      r = 0;n ? (r = i.data[t].length, i.data[t] = i.data[t].concat(a)) : i.data[t] = a;for (var s, c = {}, m = r; m < i.data[t].length; m++) {
    c[t + "[" + m + "]"] = i.data[t][m];
  }(i.setData(c), o) ? declareBinding({ instance: i, schema: PoiSchema, arrayPath: t, mapping: (s = {}, _defineProperty(s, o + ".id", "id"), _defineProperty(s, o + ".name", "name"), _defineProperty(s, o + ".categoryName", "categoryName"), _defineProperty(s, o + ".price", "price"), _defineProperty(s, o + ".area", "area"), _defineProperty(s, o + ".isMark", "isMark"), s) }) : declareBinding({ instance: i, schema: PoiSchema, arrayPath: t, mapping: { id: "id", name: "name", categoryName: "categoryName", price: "price", area: "area", isMark: "isMark" } });
}function getCommentMediaInfo(e) {
  var t = JSON.parse(e.info),
      a = { mediaList: [] };if (a.text = t.content.replace(/^\s+|\s+$/g, ""), t.pic && t.pic.length > 0) for (var n = -1, o = 0; o < t.pic.length; o++) {
    var i = t.pic[o];i.picUniqueID = o, a.mediaList.push(i), -1 === n && 1 === i.type && (i.isFirstVideo = !0, i.posterSrc = i.thumbUrl, n = 0, i.videoStyle = o + 1 + "-" + t.pic.length);
  }return a.mediaList;
}function getCommentInfo4Impression(e, t, a, n, o) {
  var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3,
      r = {},
      s = JSON.parse(e.info);if (r.commentId = e.id, r.text = s.content.replace(/^\s+|\s+$/g, ""), r.subCommentCount = e.subCommentCount, r.exposureCount = e.exposure || 0, r.markCount = e.markCount || 0, r.isLike = e.isLike, r.likeCount = e.likeCount, r.mediaList = [], r.maxPic = i, s.pic && s.pic.length > 0) for (var c = -1, m = 0; m < s.pic.length; m++) {
    var u = s.pic[m];u.picUniqueID = m, r.mediaList.push(u), -1 === c && 1 === u.type && (u.isFirstVideo = !0, u.posterSrc = u.thumbUrl, c = 0, u.videoStyle = m + 1 + "-" + s.pic.length, 2 === a && (u.videoStyle = m + 1 + "-" + s.pic.length + "--forward"));
  }r.displayMediaList = r.mediaList, r.notDisplayMediaCount = 0, r.notDisplayForwardMediaCount = 0, r.mediaList.length > i && (r.displayMediaList = r.mediaList.slice(0, i), r.notDisplayMediaCount = r.mediaList.length - i);var d = r.mediaList.slice(0, i);if (d.length > 0 && (r.displayMediaList = generateImageLayout.generateFormattedMediaList(d), 2 === a && (r.displayMediaList = generateImageLayout.generateForwardFormattedMediaList(d))), 2 === a && 0 !== s.content.length && n) {
    var p = n.remark || n.nickName;r.text = p + ": " + s.content.replace(/^\s+|\s+$/g, "");
  }return r;
}function getPoiInfo4Impression(e) {
  var t = { id: "", poiId: "", topImageUrl: "", name: "", categoryName: "", area: "", price: 0, visitCount: 0, info: "", infoWithDistance: "", info2: "", isMark: 0, photos: [] };e.poi && e.poi.ugc && 1 == e.poi.ugc.isMark && (t.isMark = 1);if (e.poi && e.poi.ugc && e.poi.ugc.visitCount && (t.visitCount = e.poi.ugc.visitCount), e.poi && e.poi.base && (t.poiId = e.poi.base.id, t.id = t.poiId), e.poi && e.poi.base.logo && e.poi.base.logo.url && (t.topImageUrl = e.poi.base.logo.url), e.poi && e.poi.base.name && (t.name = util.formatChar(e.poi.base.name)), t.longitude = e.poi.base.location.longitude, t.latitude = e.poi.base.location.latitude, t.distance = Math.round(e.poi.base.location.distance), t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", t.distance < 100 || 100 == t.distance ? t.distanceString2 = "约100m" : t.distance > 100 && t.distance < 1e3 ? t.distanceString2 = "约" + Math.round(t.distance / 100) + "00m" : (t.distance > 1e3 || 1e3 == t.distance) && (t.distanceString2 = Math.round(t.distance / 1e3) + "km"), t.infoWithDistance += t.distanceString2, e.poi && e.poi.base && e.poi.base.category && e.poi.base.category[0] && e.poi.base.category[0].name) {
    t.categoryName = e.poi.base.category[0].name;var a = t.categoryName.lastIndexOf(":");-1 != a && (t.categoryName = t.categoryName.substring(a + 1, t.categoryName.length)), t.info += t.categoryName;
  }return e.poi && e.poi.price && e.poi.price.price && (t.price = parseInt(e.poi.price.price) / 100, t.info += " · 人均￥" + t.price, t.infoWithDistance += " · 人均￥" + t.price, t.info2 += " · 人均￥" + t.price), e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info += " · " + t.area, t.infoWithDistance += " · " + t.area, t.info2 += " · " + t.area), t.photos = [], e.poi && e.poi.ugc && e.poi.ugc.ugcPhoto && e.poi.ugc.ugcPhoto.length && (t.photos = e.poi.ugc.ugcPhoto.map(function (e) {
    return e.thumbUrl;
  })), t.photos.length > 3 && t.photos.splice(3, t.photos.length - 3), t;
}function getReasonIdString(e) {
  return 0 === e.length ? "" : e.slice(0, Math.min(2, e.length)).map(function (e) {
    return e.id;
  }).join(";");
}function getPoiInfoForPostImpression(e) {
  if (e && e.base) {
    if (e.base.id && e.base.name) {
      if (e.base.location && e.base.location.longitude && e.base.location.latitude) {
        var t = { longitude: e.base.location.longitude, latitude: e.base.location.latitude },
            a = 0;e.base.location.distance && (a = e.base.location.distance);var n = "";e.base.logo && e.base.logo.url && (n = e.base.logo.url);var o = "";if (e.base.category && e.base.category.length) {
          var i = [];e.base.category.forEach(function (e) {
            var t = e.name,
                a = e.name.lastIndexOf(":");-1 != a && (t = t.substring(a + 1, e.name.length)), i.push(t);
          }), o = i.join(",");
        }var r = 0;e.price && e.price.price && (r = parseInt(e.price.price) / 100);var s = "";e.base.address && e.base.address.address && (s = e.base.address.address);var c = "";if (e.area && e.area.length) if (1 === e.area[0].type) c = e.area[0].name;else {
          var m = e.area.filter(function (e) {
            return 1 === e.type;
          }) || [];c = m.length > 0 ? m[0].name : "";
        }var u = !1;return e.ugc && e.ugc.isMark && e.ugc.isMark > 0 && (u = !0), { id: e.base.id, name: e.base.name, topImage: n, categoryName: o, price: r, distance: a, area: c, isMarked: u, address: s, location: t };
      }console.error("no location value, poiItem: " + JSON.stringify(e));
    } else console.error("no poiId or poiName, poiItem: " + JSON.stringify(e));
  } else console.error("no poiItem.base, poiItem: " + JSON.stringify(e));
}function getFormattedContactInfo(e) {
  return e.baseName = "", e.nameExtra = "", e.isNameLenRestrict = !1, e.type && 2 === e.type && (e.isNameLenRestrict = !0), e.nickName && (e.baseName = e.nickName), e.remark && (e.baseName = e.remark), e.isFriendsLabelOnNameShown && (e.nameExtra = "(朋友)"), e.ugc && e.ugc.impressionCount && e.ugc.impressionCount >= 50 && (e.nameExtra = " 发布了" + e.ugc.impressionCount + "条印象"), e.ugc && e.ugc.likeCount && e.ugc.likeCount >= 100 && (e.nameExtra = " 共收获了" + e.ugc.likeCount + "个赞", e.ugc.markCount && e.ugc.markCount >= 100 && e.ugc.likeCount >= e.ugc.markCount) ? e : (e.ugc && e.ugc.markCount && e.ugc.markCount >= 100 && (e.nameExtra = " 共收获了" + e.ugc.markCount + "个想去"), e);
}function convertPayRecommendInfoToImpression(e) {
  var t = { content: payRecommendInfoText, contentType: 0 };return e.info = JSON.stringify(t), e.fromPayRecommend = !0, e;
}function renderErrorBusinessStatusLabel(e) {
  var t = "";e && e.status && (t = "1" !== e.status ? "可能已歇业" : "");var a = { 2: "尚未开业", 3: "暂停营业", 4: "尚未开业", 11: "已歇业", 12: "已歇业", 40: "可能已搬迁", 41: "可能已歇业" };if (e && e.quality) {
    var n = e.quality;n < 60 && a[n] && (t = a[n]);
  }return t;
}module.exports = { getCommentMediaInfo: getCommentMediaInfo, getPoiInfo4Impression: getPoiInfo4Impression, getCommentInfo4Impression: getCommentInfo4Impression, setAndObserveNewPoiList: setAndObserveNewPoiList, getRenderTagInfoList: getRenderTagInfoList, getRenderTagInfo: getRenderTagInfo, getRenderPoiInfoList: getRenderPoiInfoList, getRenderPoiInfo: getRenderPoiInfo, getReasonIdString: getReasonIdString, getPoiInfoForPostImpression: getPoiInfoForPostImpression, getFormattedContactInfo: getFormattedContactInfo, payRecommendInfoText: payRecommendInfoText, convertPayRecommendInfoToImpression: convertPayRecommendInfoToImpression, renderErrorBusinessStatusLabel: renderErrorBusinessStatusLabel }; 
 			}); 
		define("utils/reportEnum.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
module.exports = { enumPageName: { FRIEND_TIMELINE: 1, INDEX: 2, INDEX_TAG: 3, NEAR_POI: 4, SEARCH: 5, POI_DETAIL: 6, IMPRESSION: 7, ME: 8, MENTION: 9, COMMENT_PUBLISH: 10, RECOMMEND_LIST: 11, SEARCH_POI_LIST: 12, SEARCH_POI_LIST_RESULT: 13, RECOMMEND_TIMELINE: 16, FRIEND_TIMELINE_EMPTY: 17, POI_DETAIL_SECOND: 18, TIMELINE: 19, TIMELINE_ALL: 20, RANK_LIST: 21, HOT_TOPIC: 25, USER_PROFILE: 26, ACTIVITY: 27, FOLLOWING: 28, FANS: 29, FRIEND_TALK_ABOUT: 30, RECOMMEND_POI: 31 }, enumPoiTagAction: { TAG_EXPOSED: 1, TAG_CLIKED: 2, POI_EXPOSED: 3, POI_CLICKED: 4, POI_MARKED: 5, CLICK_REASON: 6 }, enumPoiSearchType: { INPUT: 1, TAG: 2, HISTORY: 3, FRIEND: 4, SELF: 5 }, enumSceneType: { FRIEND_TIMELINE: 1, POI_DETAIL: 2, POI_DETAIL_SECOND: 3, ME: 4, MENTION: 5, RECOMMEND_TIMELINE: 6, FRIEND_TIMELINE_EMPTY: 7, TIMELINE: 8, TIMELINE_RECOMMEND: 9, SEARCH_IMPRESSION_RESULT: 10, RANK_LIST_MARK: 11, RANK_LIST_ALL: 12, RANK_LIST_CATEGORY: 13, FOLLOW_TIMELINE: 14, FIND_POI: 15 }, enumShareType: { POI: 1, IMPRESSION: 2, HOT_TOPIC: 3, ACTIVITY_TOPIC: 4 }, enumShareResult: { API_SUCCESS: 1, API_CANCEL: 2, API_FAILED: 3, FORBID_HIGH: 4, FORBID_LOW: 5 }, enumImpressionContentType: { TEXT_ONLY: 1, TEXT_IMAGE: 2, TEXT_VIDEO: 3, TEXT_IMAGE_VIDEO: 4 }, enumPageState: { OK: 1, DELETED: 2, IMPRESSION_INVALID: 3, IMPRESSION_INVALID2: 4, UNKNOWN: 99 }, enumFeedAction: { FEED_CLIKED_IMPRESSION: 0, FEED_EXPOSED: 1, FEED_CLIKED_POI: 2, FEED_CLIKED_RECOMMEND: 3, FEED_CLIKED_TAG: 4, FEED_CLICKED_SHOW_ALL: 5, FEED_CLICKED_FOLD_ALL: 6 }, enumFeedImpressionType: { OTHER: 0, FRIEND: 1, MARKED: 2, RECOMMENDED: 3, NEARBY: 4, STRANGER: 5 }, enumIndexTopRegionAction: { HOT_TOPIC_EXPOSED: 1, SEARCH_CLIKED: 2, HOT_TOPIC_CLICKED: 3, NEARBY_POI_CLICKED: 4, RANK_LIST_CLICKED: 5, TAB_FRIEND_CLICKED: 6, TAB_RECOMMEND_CLICKED: 7, ACTIVITY_SHOW_RULES: 8, TAB_FRIEND_CLICKED_RED: 9, TAB_FRIEND_EXPOSED_RED: 10, TOPIC_EXPOSED: 11, TOPIC_CLICKED: 12, FRIEND_TALK_ABOUT_EXPOSED: 13, FRIEND_TALK_ABOUT_CLICKED: 14, TAB_FIND_CLICKED: 15, TAB_FR_CLICKED_RED: 16, TAB_FR_CLICKED: 17, TAB_FR_EXPOSED_RED: 18, RECOMMEND_POI_CLICK: 19, TAB_FIND_FRIEND_TALK_ABOUT_EXPOSED: 20, TAB_FIND_FRIEND_TALK_ABOUT_CLICKED: 21 }, enumPoiDetailClickScene: { MORE_FEEDBACK: 1, MORE_CANCEL: 2, TOP_IMAGE: 3, LOCATION: 4, PHONE_SUCCESS: 5, PHONE_CANCEL: 6, MORE_FRIEND_IMPRESSIONS: 7, MORE__STRANGER_IMPRESSIONS: 8, TAG: 9, ARTICLE: 10, RANK: 11, WECATERING_SUCCESS: 12, WECATERING_FAIL: 13 }, enumProfilePageClickScene: { IMPRESSION_TAB: 1, MARK_TAB: 2, MORE_ADVICE: 3, MORE_RULES: 4, MORE_CANCEL: 5, HEADIMG: 6, MENTION: 7 }, enumPoiUgcLabelScene: { RANK_LABEL: 1, IMPRESSION_COUNT_LABEL: 2, MARK_COUNT_LABEL: 3, OTHER: 4, ERROR_BUSINESS_STATUS: 5, FRIEND_IMPRESSION_SHOWN: 6, NEAR_POI: 7 } }; 
 			}); 
		define("utils/reportPostImpression.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util"),
    reporter = require("./reporter"),
    reportSession = require("./report_session"),
    abTestUtil = require("./ABTestUtil"),
    chooseMediaUtil = require("./chooseMediaUtil"),
    kitchenStorage = require("./kitchenStorage"),
    cgi = require("./cgi"),
    appLaunchData = require("./appLaunchData"),
    enumPostResult = { SUCCESS: 1, NOT_POST: 2, FAILED: 3 },
    enumChooseMediaResult = { NO_CHOOSE: 1, CHOOSE_CANCELLED: 2, CHOOSE_SUCCESS: 3, CHOOSE_FAILED: 4, NO_POI_CANNOT_CHOOSE: 5 },
    enumChoosePoiResult = { NO_CHOOSE: 1, CHOOSE_CANCELLED: 2, CHOOSE_RECOMMENDED_POI: 3, CHOOSE_USER_SEARCHED_POI: 4 },
    enumActionSheetResult = { NOT_SHOW: 1, ACTION_SHEET_CANCELLED: 2, CHOOSE_MEDIA_OK: 3, CHOOSE_MEDIA_CANCELLED: 4, TEXT_DIRECTLY: 5, ACTION_SHEET_FAILED: 6, CHOOSE_MEDIA_FAILED: 7 },
    enumTopicResult = { NO: 1, CHOOSE_RECOMMENDED_TOPIC: 2, CHOOSE_AT_LIST: 3, DELETED: 4, DEFAULT: 5 },
    sessionType = 0,
    sessionId = 0,
    startScene = 0,
    startTime = 0,
    lastScene = 0,
    enterPostViewTime = 0,
    poiId = "",
    longitude = 0,
    latitude = 0,
    poiName = "",
    impressionId = "",
    clickPostTime = 0,
    postResult = 0,
    getResultTime = 0,
    endTime = 0,
    endScene = 0,
    hasInputtedText = 0,
    chooseMediaResult = 0,
    choosePoiResult = 0,
    queryStringList = "",
    actionSheetResult = 0,
    topicResult = 0,
    distanceType = 0,
    poiItemToPostImpression = { hasNew: !1 },
    mediaItemsToPostImpression = { hasNew: !1 },
    topicItemList = [],
    topicItemToPostImpression = { hasNew: !1 };function clearReportData() {
  sessionType = 0, sessionId = 0, startScene = 0, startTime = 0, lastScene = 0, enterPostViewTime = 0, poiId = "", longitude = 0, latitude = 0, poiName = "", impressionId = "", clickPostTime = 0, postResult = 0, getResultTime = 0, endTime = 0, endScene = 0, hasInputtedText = 0, chooseMediaResult = 0, choosePoiResult = 0, queryStringList = "", actionSheetResult = 0, topicResult = 0, distanceType = 0;
}function startPostImpressionReportProcess(e, t) {
  e && t ? (sessionId = e, startScene = t, startTime = Math.floor(new Date().getTime() / 1e3)) : console.error("invalid parameters, do not startPostImpressionReportProcess. _sessionId: " + e + ", _startScene: " + t);
}function setLastScene(e) {
  e ? lastScene = e : console.error("invalid _lastScene: " + e);
}function enterPostView() {
  enterPostViewTime = Math.floor(new Date().getTime() / 1e3), longitude = 0, latitude = 0, poiId = "", poiName = "", impressionId = "", clickPostTime = 0, postResult = 0, getResultTime = 0;
}function setPoiId(e) {
  e ? poiId = e : console.error("invalid _poiId: " + e);
}function setPoiName(e) {
  e ? poiName = e : console.error("invalid _poiName: " + e);
}function setLocation(e, t) {
  e && util.isNumeric(e) && (longitude = Math.floor(1e6 * e)), t && util.isNumeric(t) && (latitude = Math.floor(1e6 * t));
}function setImpressionId(e) {
  e ? impressionId = e : console.error("invalid _impressionId: " + e);
}function clickPost() {
  clickPostTime = Math.floor(new Date().getTime() / 1e3);
}function setPostResult(e) {
  if (e) switch (e) {case enumPostResult.SUCCESS:
      postResult = e, getResultTime = Math.floor(new Date().getTime() / 1e3);break;case enumPostResult.NOT_POST:
      postResult <= 0 && (postResult = e);break;case enumPostResult.FAILED:
      postResult = e, getResultTime = Math.floor(new Date().getTime() / 1e3);break;default:
      return void console.error("invalid _postResult: " + e);} else console.error("invalid _postResult: " + e);
}function setChooseMediaResult(e) {
  !e || e < enumChooseMediaResult.NO_CHOOSE || e > enumChooseMediaResult.NO_POI_CANNOT_CHOOSE ? console.error("invalid _chooseMediaResult: " + e) : chooseMediaResult = e;
}function setHasInputtedText(e) {
  1 == e || 2 == e ? hasInputtedText = e : console.error("invalid _hasInputtedText: " + e);
}function setChoosePoiResult(e) {
  !e || e < enumChoosePoiResult.NO_CHOOSE || e > enumChoosePoiResult.CHOOSE_USER_SEARCHED_POI ? console.error("invalid _choosePoiResult: " + e) : choosePoiResult = e;
}function addQueryString(e) {
  e ? queryStringList = queryStringList ? queryStringList + ";" + e : e : console.error("invalid _query");
}function setActionSheetResult(e) {
  !e || e < enumActionSheetResult.NOT_SHOW || e > enumActionSheetResult.CHOOSE_MEDIA_FAILED ? console.error("invalid _actionSheetResult: " + e) : actionSheetResult = e;
}function setTopicResult(e) {
  !e || e < enumTopicResult.NO || e > enumTopicResult.DEFAULT ? console.error("invalid _topicResult: " + e) : topicResult = e;
}function updateDistanceType(e) {
  if (void 0 === e) return console.error("updateDistanceType, distance === undefined"), void (distanceType = 0);distanceType = e <= 0 ? 0 : e < 100 ? 1 : e < 200 ? 2 : e < 500 ? 3 : e < 1e3 ? 4 : 5;
}function triggerReport(e) {
  startScene <= 0 ? console.log("startScene <= 0, do not trigger report post impression") : !e || e <= 0 ? console.error("invalid _endScene, do not trigger report post impression") : (endScene = e, endTime = Math.floor(new Date().getTime() / 1e3), reporter.getReporter(16870).sessionType(sessionType).sessionId(sessionId).startScene(startScene).startTime(startTime).lastScene(lastScene).enterPostViewTime(enterPostViewTime).poiId(poiId).longitude().latitude().poiName(poiName).impressionId(impressionId).clickPostTime(clickPostTime).postResult(postResult).getResultTime(getResultTime).endTime(endTime).endScene(endScene).hasInputtedText(hasInputtedText).chooseMediaResult(chooseMediaResult).choosePoiResult(choosePoiResult).queryStringList(queryStringList).actionSheetResult(actionSheetResult).topicResult(topicResult).distanceType(distanceType).reportToServer(), clearReportData());
}function startPostImpressionProcess(e) {
  if (e && e.startScene && e.lastScene) {
    var t = {},
        o = "";if (e.poiInfo && e.poiInfo.id ? (updatePoiForPostImpression(e.poiInfo), e.poiInfo.name && (o = e.poiInfo.name), e.poiInfo.location && e.poiInfo.location.latitude && e.poiInfo.location.longitude && (t.latitude = e.poiInfo.location.latitude, t.longitude = e.poiInfo.location.longitude)) : clearPoiForPostImpression(), clearTopicItemForPostImpression(), setTopicResult(enumTopicResult.NO), e.nextPageUrl && e.nextPageUrl.length || (console.error("startPostImpressionProcess, no postObject.nextPageUrl, use default value"), e.nextPageUrl = "/pages/poi_comment_publish/poi_comment_publish"), startPostImpressionReportProcess(reportSession.getId(), e.startScene), setLastScene(e.lastScene), !abTestUtil.shouldShowActionSheetBeforePostViewAppear() || !util.canUseChooseMultiMediaAPIWithoutPoiInfo()) return clearMediaItemsForPostImpression(), setActionSheetResult(enumActionSheetResult.NOT_SHOW), void wx.navigateTo({ url: e.nextPageUrl, success: function success(t) {
        console.log("startPostImpressionProcess wx.navigateTo poi_comment_publish success"), e.navigateToNextPageSuccess && e.navigateToNextPageSuccess(t);
      } });var s = kitchenStorage.getPoiLocationRadius();chooseMediaUtil.chooseMediaWithThreeOptions(9, t, o, s, function (t) {
      if (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions, success"), !t || t.resultType != chooseMediaUtil.enumChooseResultType.SUCCESS) return console.error("startPostImpressionProcess, chooseMediaWithThreeOptions, success, no res or invalid res.resultType! return"), setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED), void triggerReport(startScene);t.textDirectly ? setActionSheetResult(enumActionSheetResult.TEXT_DIRECTLY) : setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_OK), updateMediaItemsForPostImpression(t), wx.navigateTo({ url: e.nextPageUrl, success: function success(t) {
          console.log("startPostImpressionProcess wx.navigateTo poi_comment_publish success"), e.navigateToNextPageSuccess && e.navigateToNextPageSuccess(t);
        } });
    }, function (e) {
      if (!e) return console.error("startPostImpressionProcess, chooseMediaWithThreeOptions failed, but no err object"), setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED), void triggerReport(startScene);e.resultType == chooseMediaUtil.enumChooseResultType.CANCEL ? (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions CHOOSE_MEDIA_CANCELLED: " + JSON.stringify(e)), setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_CANCELLED)) : e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_CANCEL ? (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions ACTION_SHEET_CANCELLED: " + JSON.stringify(e)), setActionSheetResult(enumActionSheetResult.ACTION_SHEET_CANCELLED)) : e.resultType == chooseMediaUtil.enumChooseResultType.FAILED ? (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions CHOOSE_MEDIA_FAILED: " + JSON.stringify(e)), setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED)) : e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_FAILED ? (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions ACTION_SHEET_FAILED: " + JSON.stringify(e)), setActionSheetResult(enumActionSheetResult.ACTION_SHEET_FAILED)) : (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions failed, err: " + JSON.stringify(e)), setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED)), triggerReport(startScene);
    });
  } else console.error("invalid postObject, do not startPostImpressionProcess. postObject: " + JSON.stringify(e));
}function clearPoiForPostImpression() {
  poiItemToPostImpression = { hasNew: !1 };
}function getAndClearPoiForPostImpression() {
  var e = poiItemToPostImpression;return poiItemToPostImpression = { hasNew: !1 }, e;
}function updatePoiForPostImpression(e) {
  poiItemToPostImpression = { poi: e, hasNew: !0 }, updateDistanceType(e.distance);
}function clearMediaItemsForPostImpression() {
  mediaItemsToPostImpression = { hasNew: !1 };
}function getAndClearMediaItemsForPostImpression() {
  var e = mediaItemsToPostImpression;return mediaItemsToPostImpression = { hasNew: !1 }, e;
}function updateMediaItemsForPostImpression(e) {
  mediaItemsToPostImpression = { mediaItems: e, hasNew: !0 };
}function clearTopicItemForPostImpression() {
  topicItemToPostImpression = { hasNew: !1 };
}function getAndClearTopicItemForPostImpression() {
  var e = topicItemToPostImpression;return topicItemToPostImpression = { hasNew: !1 }, e;
}function updateTopicItemForPostImpression(e) {
  topicItemToPostImpression = { topic: e, hasNew: !0 };
}function requestAllTopicList() {
  console.log("requestAllTopicList addConfirmUserLocationListener"), appLaunchData.addConfirmUserLocationListener(function () {
    console.log("start requestAllTopicList");var e = appLaunchData.getUserLocation();new cgi.SimpleRequest("getcategory", { location: e }).send(function (e) {
      if (e && e.topic) {
        if (e.topic.length) {
          topicItemList = [];for (var t = 0; t < e.topic.length; t++) {
            var o = e.topic[t];o.id && o.name ? (o.ugcCount = o.ugcCount || 0, o.visitCount = o.visitCount || 0, topicItemList.push(o)) : console.error("requestAllTopicList resp, invalid topicItem from data.topic, index is " + t);
          }
        } else console.error("requestAllTopicList resp, data.topic.length is 0");
      } else console.error("requestAllTopicList resp, no data or data.topic");
    });
  });
}function getTopicItemList() {
  return topicItemList;
}module.exports = { setLastScene: setLastScene, enterPostView: enterPostView, setPoiId: setPoiId, setPoiName: setPoiName, setLocation: setLocation, setImpressionId: setImpressionId, clickPost: clickPost, setPostResult: setPostResult, setChooseMediaResult: setChooseMediaResult, setHasInputtedText: setHasInputtedText, triggerReport: triggerReport, enumPostResult: enumPostResult, enumChooseMediaResult: enumChooseMediaResult, enumChoosePoiResult: enumChoosePoiResult, setChoosePoiResult: setChoosePoiResult, addQueryString: addQueryString, enumTopicResult: enumTopicResult, setTopicResult: setTopicResult, startPostImpressionProcess: startPostImpressionProcess, getAndClearPoiForPostImpression: getAndClearPoiForPostImpression, updatePoiForPostImpression: updatePoiForPostImpression, getAndClearMediaItemsForPostImpression: getAndClearMediaItemsForPostImpression, requestAllTopicList: requestAllTopicList, getTopicItemList: getTopicItemList, getAndClearTopicItemForPostImpression: getAndClearTopicItemForPostImpression, updateTopicItemForPostImpression: updateTopicItemForPostImpression }; 
 			}); 
		define("utils/report_session.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util"),
    sessionId = 0,
    launchScene = 0;function createNewSession() {
  return sessionId = util.getTimeRandomId();
}function getId() {
  return sessionId;
}function setLaunchScene(e) {
  launchScene = e;
}function getLaunchScene() {
  return launchScene;
}module.exports = { createNewSession: createNewSession, getId: getId, setLaunchScene: setLaunchScene, getLaunchScene: getLaunchScene }; 
 			}); 
		define("utils/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var cgi = require("./cgi"),
    util = require("./util"),
    enableReportLog = !0,
    protocols = { 16373: [{ name: "currentPage", type: "Number" }, { name: "prevPage", type: "Number" }, { name: "sessionType", type: "Number" }, { name: "sessionId", type: "Number" }, { name: "action", type: "Number" }, { name: "poiId", type: "String" }, { name: "tagId", type: "Number" }, { name: "abtestId", type: "Number" }, { name: "timeStamp2", type: "Number" }, { name: "groupId", type: "Number" }, { name: "longitude", type: "Number" }, { name: "latitude", type: "Number" }, { name: "menuCategoryId", type: "String" }, { name: "price", type: "String" }, { name: "area", type: "String" }, { name: "query", type: "String" }, { name: "sortType", type: "String" }, { name: "selectCity", type: "String" }, { name: "requestId", type: Number }, { name: "prevRequestId", type: Number }, { name: "poiClickedIndex", type: Number }, { name: "requestIdStr" }, { name: "scene", type: "Number" }, { name: "poiUgcLabelScene" }], 16479: [{ name: "appVersion", type: "Number" }, { name: "publicLibVersion", type: "String" }, { name: "pagePath", type: "String" }, { name: "mediaType", type: "Number" }, { name: "mediaSrc", type: "String" }, { name: "networkType", type: "String" }, { name: "startLoadTime", type: "Number" }, { name: "endLoadTime", type: "Number" }, { name: "mediaSize", type: "Number" }, { name: "mediaWidth", type: "Number" }, { name: "mediaHeight", type: "Number" }, { name: "mediaDuration", type: "Number" }, { name: "mediaScale", type: "Number" }], 16483: [{ name: "sessionType", type: "Number" }, { name: "sessionId", type: "Number" }, { name: "clickTime", type: "Number" }, { name: "scene", type: "Number" }, { name: "poiId", type: "String" }, { name: "impressionId", type: "String" }, { name: "impressionCommentCount", type: "Number" }, { name: "isForwardedImpression", type: "Number" }, { name: "poiIdString", type: "String" }, { name: "impressionIdString", type: "String" }, { name: "action", type: "Number" }, { name: "impressionType", type: "Number" }, { name: "requestId", type: "String" }, { name: "pageId", type: "Number" }, { name: "reasonId" }, { name: "reasonIdString" }, { name: "recId" }, { name: "recType" }], 16501: [{ name: "pageId", type: "Number" }, { name: "time", type: "Number" }, { name: "launchScene", type: "Number" }, { name: "sessionId", type: "Number" }], 16597: [{ name: "sessionId", type: "Number" }, { name: "appLaunchTime", type: "Number" }, { name: "getLocationTime", type: "Number" }, { name: "loginProcessTime", type: "Number" }, { name: "wxLoginTime", type: "Number" }, { name: "cgiLoginTime", type: "Number" }, { name: "cgiLongLinkTime", type: "Number" }, { name: "getProfileTime", type: "Number" }, { name: "getFriendsTimelineTime", type: "Number" }, { name: "totalTimeCost", type: "Number" }, { name: "cachedSessionKeyResult", type: "Number" }, { name: "getLocationResult", type: "Number" }, { name: "isFriendsTimelineCacheHit", type: "Number" }, { name: "launchScene", type: "Number" }, { name: "userStatusFlag", type: "Number" }, { name: "showUserFirstLaunchTip", type: "Number" }, { name: "userAuthorizeAction", type: "Number" }, { name: "isPreOpen", type: "Number" }], 16870: [{ name: "sessionType", type: "Number" }, { name: "sessionId", type: "Number" }, { name: "startScene", type: "Number" }, { name: "startTime", type: "Number" }, { name: "lastScene", type: "Number" }, { name: "enterPostViewTime", type: "Number" }, { name: "poiId", type: "String" }, { name: "longitude", type: "Number" }, { name: "latitude", type: "Number" }, { name: "poiName", type: "String" }, { name: "impressionId", type: "String" }, { name: "clickPostTime", type: "Number" }, { name: "postResult", type: "Number" }, { name: "getResultTime", type: "Number" }, { name: "endTime", type: "Number" }, { name: "endScene", type: "Number" }, { name: "hasInputtedText", type: "Number" }, { name: "chooseMediaResult", type: "Number" }, { name: "choosePoiResult", type: "Number" }, { name: "queryStringList", type: "String" }, { name: "actionSheetResult", type: "Number" }, { name: "topicResult", type: "Number" }, { name: "distanceType", type: "Number" }], 16876: [{ name: "shareType", type: "Number" }, { name: "shareScene", type: "Number" }, { name: "poiId", type: "String" }, { name: "impressionId", type: "String" }, { name: "shareResult", type: "Number" }, { name: "poiImpressionsCount", type: "Number" }, { name: "impressionCommentCount", type: "Number" }, { name: "impressionWowCount", type: "Number" }, { name: "impressionMarkCount", type: "Number" }, { name: "impressionType", type: "Number" }, { name: "shareTime", type: "Number" }, { name: "poiIdString", type: "String" }, { name: "impressionIdString", type: "String" }, { name: "sessionId", type: "Number" }], 16878: [{ name: "pageId", type: "Number" }, { name: "sessionId", type: "Number" }, { name: "startTime", type: "Number" }, { name: "impressionCount", type: "Number" }, { name: "forwardedImpressionCount", type: "Number" }, { name: "viewedImpressionCount", type: "Number" }, { name: "viewedForwardedImpressionCount", type: "Number" }, { name: "endTime", type: "Number" }, { name: "impressionIdList", type: "String" }, { name: "poiIdList", type: "String" }, { name: "sysImpressionIdList", type: "String" }, { name: "sysPoiIdList", type: "String" }, { name: "unreadMentionCount", type: "Number" }, { name: "hasTabRedDot" }, { name: "refreshCount" }, { name: "hasClickedUnreadMention" }, { name: "viewedSysImpressionCount", type: "Number" }, { name: "viewedFriendsImpressionCount", type: "Number" }], 17014: [{ name: "pageId", type: "Number" }, { name: "launchScene", type: "Number" }, { name: "poiId", type: "String" }, { name: "impressionId", type: "String" }, { name: "pageState", type: "Number" }, { name: "impressionType", type: "Number" }, { name: "time", type: "Number" }, { name: "sessionId", type: "Number" }], 17332: [{ name: "sessionId", type: "Number" }, { name: "action", type: "Number" }, { name: "actionItem", type: "String" }], 17491: [{ name: "prevPage" }, { name: "exp" }, { name: "action" }, { name: "type" }, { name: "requestId" }], 17415: [{ name: "sessionId" }, { name: "prevPageId" }, { name: "clickTime" }, { name: "poiId" }, { name: "clickScene" }], 17511: [{ name: "prevPageId" }, { name: "clickTime" }, { name: "clickScene" }, { name: "userId" }], 18067: [{ name: "pageId" }, { name: "sessionId" }, { name: "impressionId" }, { name: "poiId" }, { name: "mediaIndexList" }] },
    reporters = {},
    reportCgiQueue = function () {
  var e,
      t = [],
      n = !1,
      r = 50;function m() {
    i(), e = setTimeout(function () {
      !function () {
        var e = [];if (t.length >= r) e = t.splice(0, r);else {
          if (!(t.length > 0)) return void m();e = t.splice(0, t.length);
        }n || (n = !0, new cgi.SimpleRequest("KvReport", { detail: { device: util.getDeviceForKvReport(), item: e } }).send(function () {
          enableReportLog && e.forEach(function (e) {
            console.log("[report] batchReport, report item sent to server: " + e.logId + "," + e.value);
          }), n = !1, m();
        }, function () {
          n = !1, enableReportLog && e.forEach(function (e) {
            console.log("[report] batchReport, report item sent to server FAIL!!!: " + e.logId + "," + e.value);
          }), m();
        }));
      }();
    }, 5e3);
  }function i() {
    clearTimeout(e);
  }return { push: function push(e) {
      t.push(e);
    }, batchReportAll: function e() {
      i();var m = [];if (t.length >= r) m = t.splice(0, r);else {
        if (!(t.length > 0)) return;m = t.splice(0, t.length);
      }n = !0, new cgi.SimpleRequest("KvReport", { detail: { device: util.getDeviceForKvReport(), item: m } }).send(function () {
        enableReportLog && m.forEach(function (e) {
          console.log("[report] batchReportAll, report item sent to server: " + e.logId + "," + e.value);
        }), t.length ? e() : n = !1;
      }, function () {
        enableReportLog && m.forEach(function (e) {
          console.log("[report] batchReportAll, report item sent to server FAIL!!!: " + e.logId + "," + e.value);
        }), t.length ? e() : n = !1;
      });
    }, setTimeout4BatchReport: m, clearTimeout4BatchReport: i };
}();function getReporter(e) {
  if (reporters[e]) return new (0, reporters[e])();var t = protocols[e],
      n = function n() {
    this.logId = e;
  };return t.forEach(function (e) {
    n.prototype[e.name] = function (t) {
      return this["_" + e.name] = t, this;
    };
  }), n.prototype.reportToServer = function () {
    var e = this.toReportString(),
        t = { logId: this.logId, value: e };new cgi.SimpleRequest("KvReport", { detail: { device: util.getDeviceForKvReport(), item: [t] } }).send(function () {
      enableReportLog && console.log("[report] single report item sent to server: " + t.logId + "," + t.value);
    }, function () {
      enableReportLog && console.log("[report] single report item sent to server FAIL!!!: " + t.logId + "," + t.value);
    });
  }, n.prototype.lazyReportToServer = function () {
    var e = this.toReportString();reportCgiQueue.push({ logId: this.logId, value: e });
  }, n.prototype.toReportString = function () {
    var e = this,
        n = "";return t.forEach(function (t) {
      var r = e["_" + t.name];null == r && (r = ""), n += r + ",";
    }), n.substring(0, n.length - 1);
  }, reporters[e] = n, new n();
}module.exports = { getReporter: getReporter, batchReportAll: reportCgiQueue.batchReportAll, setTimeout4BatchReport: reportCgiQueue.setTimeout4BatchReport, clearTimeout4BatchReport: reportCgiQueue.clearTimeout4BatchReport }; 
 			}); 
		define("utils/ring_buffer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict"; 
 			}); 
		define("utils/searchStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    PREFIX = "SEARCH_HIS";function addHistory(t) {
  var e = getAllHistory() || [];e.unshift(t);for (var r = 1; r < e.length; r++) {
    e[r].name == t.name && (e[r].shouldDelete = !0);
  }(e = e.filter(function (t) {
    return !t.shouldDelete;
  })).length > 5 && e.splice(5, e.length - 5), storage.setObj(PREFIX, e);
}function getAllHistory() {
  return storage.getObj(PREFIX) || [];
}module.exports = { addHistory: addHistory, getAllHistory: getAllHistory }; 
 			}); 
		define("utils/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("./util");function setString(t, e) {
  if ("string" == typeof e) try {
    wx.setStorageSync(t, e);
  } catch (t) {
    console.error("kitchen storage setStorageSync error", t);
  } else util.alert("setString error, not a string");
}function getString(t) {
  if (!t) return "";try {
    return wx.getStorageSync(t);
  } catch (t) {
    return console.error("kitchen storage getStorageSync error", t), "";
  }
}function setNumber(t, e) {
  null !== e ? util.isNumeric(e) ? setString(t, e.toString(10)) : util.alert("set Number error, not a number") : setString(t, "");
}function getNumber(t) {
  var e = getString(t);return e ? parseInt(e, 10) : null;
}function getFloatNumber(t) {
  var e = getString(t);return e ? parseFloat(e) : null;
}function setObj(t, e) {
  wx.setStorageSync(t, e);
}function getObj(t, e) {
  return wx.getStorageSync(t);
}module.exports = { setString: setString, getString: getString, setNumber: setNumber, getNumber: getNumber, setObj: setObj, getObj: getObj, getFloatNumber: getFloatNumber }; 
 			}); 
		define("utils/ugcStorage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var storage = require("./storage"),
    PREFIX = "UGC_",
    MAX_SHAKE_COUNT = 5;function hasPostComment() {
  return !!storage.getNumber(PREFIX + "hasPostComment");
}function updatePostCommentFlag() {
  storage.setNumber(PREFIX + "hasPostComment", 1);
}function hasMarkAtTimeline() {
  return !!storage.getNumber(PREFIX + "hasMarkAtTimeline");
}function updateMarkAtTimeline() {
  storage.setNumber(PREFIX + "hasMarkAtTimeline", 1);
}function isShareShakeDisable() {
  return !!(storage.getNumber(PREFIX + "shareShakeCount") >= MAX_SHAKE_COUNT);
}function updateShareShakeCount() {
  var e = 1;return storage.getNumber(PREFIX + "shareShakeCount") && (e = storage.getNumber(PREFIX + "shareShakeCount") + 1), storage.setNumber(PREFIX + "shareShakeCount", e), e;
}module.exports = { hasPostComment: hasPostComment, updatePostCommentFlag: updatePostCommentFlag, hasMarkAtTimeline: hasMarkAtTimeline, updateMarkAtTimeline: updateMarkAtTimeline, isShareShakeDisable: isShareShakeDisable, updateShareShakeCount: updateShareShakeCount }; 
 			}); 
		define("utils/utf8.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var byteArray,
    byteCount,
    byteIndex,
    stringFromCharCode = String.fromCharCode;function ucs2decode(e) {
  for (var r, t, n = [], o = 0, a = e.length; o < a;) {
    (r = e.charCodeAt(o++)) >= 55296 && r <= 56319 && o < a ? 56320 == (64512 & (t = e.charCodeAt(o++))) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), o--) : n.push(r);
  }return n;
}function ucs2encode(e) {
  for (var r, t = e.length, n = -1, o = ""; ++n < t;) {
    (r = e[n]) > 65535 && (o += stringFromCharCode((r -= 65536) >>> 10 & 1023 | 55296), r = 56320 | 1023 & r), o += stringFromCharCode(r);
  }return o;
}function checkScalarValue(e) {
  if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
}function createByte(e, r) {
  return stringFromCharCode(e >> r & 63 | 128);
}function encodeCodePoint(e) {
  if (0 == (4294967168 & e)) return stringFromCharCode(e);var r = "";return 0 == (4294965248 & e) ? r = stringFromCharCode(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (checkScalarValue(e), r = stringFromCharCode(e >> 12 & 15 | 224), r += createByte(e, 6)) : 0 == (4292870144 & e) && (r = stringFromCharCode(e >> 18 & 7 | 240), r += createByte(e, 12), r += createByte(e, 6)), r += stringFromCharCode(63 & e | 128);
}function utf8encode(e) {
  for (var r = ucs2decode(e), t = r.length, n = -1, o = ""; ++n < t;) {
    o += encodeCodePoint(r[n]);
  }return o;
}function readContinuationByte() {
  if (byteIndex >= byteCount) throw Error("Invalid byte index");var e = 255 & byteArray[byteIndex];if (byteIndex++, 128 == (192 & e)) return 63 & e;throw Error("Invalid continuation byte");
}function decodeSymbol() {
  var e, r;if (byteIndex > byteCount) throw Error("Invalid byte index");if (byteIndex == byteCount) return !1;if (e = 255 & byteArray[byteIndex], byteIndex++, 0 == (128 & e)) return e;if (192 == (224 & e)) {
    if ((r = (31 & e) << 6 | readContinuationByte()) >= 128) return r;throw Error("Invalid continuation byte");
  }if (224 == (240 & e)) {
    if ((r = (15 & e) << 12 | readContinuationByte() << 6 | readContinuationByte()) >= 2048) return checkScalarValue(r), r;throw Error("Invalid continuation byte");
  }if (240 == (248 & e) && (r = (7 & e) << 18 | readContinuationByte() << 12 | readContinuationByte() << 6 | readContinuationByte()) >= 65536 && r <= 1114111) return r;throw Error("Invalid UTF-8 detected");
}function utf8decode(e) {
  byteArray = ucs2decode(e), byteCount = byteArray.length, byteIndex = 0;for (var r, t = []; !1 !== (r = decodeSymbol());) {
    t.push(r);
  }return ucs2encode(t);
}module.exports = { encode: utf8encode, decode: utf8decode }; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sysInfo,
    _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    mixinCss = require("./mixinCss"),
    reportEnum = require("./reportEnum"),
    utf8 = require("./utf8"),
    hasCheckWechatVersion = !1,
    canUseNewChooseMultiMediaAPI = !1,
    canUseGetAndSetLabInfo = !1,
    canUseThisApp = !1,
    canUseShareAppMessage = !1,
    canUseChooseMultiMediaWithoutPoiInfo = !1;function formatTime(e) {
  var t = e.getFullYear(),
      n = e.getMonth() + 1,
      o = e.getDate(),
      a = e.getHours(),
      r = e.getMinutes(),
      i = e.getSeconds();return [t, n, o].map(formatNumber).join("-") + " " + [a, r, i].map(formatNumber).join(":");
}function formatTimeMinute(e) {
  var t = e.getFullYear(),
      n = e.getMonth() + 1,
      o = e.getDate(),
      a = e.getHours(),
      r = e.getMinutes();e.getSeconds();return [t, n, o].map(formatNumber).join("-") + " " + [a, r].map(formatNumber).join(":");
}function formatDate(e) {
  var t = formatNumber(e.getFullYear()),
      n = formatNumber(e.getMonth() + 1),
      o = formatNumber(e.getDate()),
      a = new Date();formatNumber(a.getFullYear()), formatNumber(a.getMonth() + 1), formatNumber(a.getDate());return t + "/" + n + "/" + o;
}function formatRegularDate(e) {
  return formatNumber(e.getFullYear()) + "年" + formatNumber(e.getMonth() + 1) + "月" + formatNumber(e.getDate()) + "日";
}function formatNumber(e) {
  return (e = e.toString())[1] ? e : "0" + e;
}function isString(e) {
  return "string" == typeof e || e instanceof String;
}function isNumeric(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}function formatDuration(e) {
  if (!e) return "0:00";if (!isNumeric(e)) return "0:00";if (e <= 0) return "0:00";var t = Math.floor(e / 60),
      n = e - 60 * t;return t + ":" + (n >= 10 ? n : "0" + n);
}function serialize(e) {
  var t = [];for (var n in e) {
    e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  }return t.join("&");
}function clone(e) {
  var t;if (null == e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return e;if (e instanceof Date) return (t = new Date()).setTime(e.getTime()), t;if (e instanceof Array) {
    t = [];for (var n = 0, o = e.length; n < o; n++) {
      t[n] = clone(e[n]);
    }return t;
  }if (e instanceof Object) {
    for (var a in t = {}, e) {
      e.hasOwnProperty(a) && (t[a] = clone(e[a]));
    }return t;
  }throw new Error("Unable to copy obj! Its type isn't supported.");
}function guid() {
  function e() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
  }return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}function getSysInfo() {
  if (sysInfo) return sysInfo;try {
    sysInfo = wx.getSystemInfoSync();
  } catch (e) {
    util.alert("getSystemInfoSync:" + JSON.stringify(e));
  }for (var e = 0; !sysInfo && e < 10;) {
    try {
      sysInfo = wx.getSystemInfoSync();
    } catch (e) {
      util.alert("getSystemInfoSync:" + JSON.stringify(e));
    }e++;
  }return sysInfo ? (console.log("getSystemInfoSync:" + JSON.stringify(sysInfo)), sysInfo) : (alert("api wx.getSystemInfoSync() 连续调用失败"), {});
}function getNetworkType() {
  return new Promise(function (e, t) {
    wx.getNetworkType({ success: function success(t) {
        e(t.networkType);
      }, fail: function fail(e) {
        t(e);
      }, complete: function complete(e) {} });
  });
}function isV1EqualToV2(e, t) {
  if (!e || !t) return !1;var n = e.split("."),
      o = t.split(".");if (!n || !o || 3 != n.length || 3 != o.length) return !1;for (var a = 0; a < 3; a++) {
    n[a] = parseInt(n[a]), o[a] = parseInt(o[a]);
  }return n[0] == o[0] && n[1] == o[1] && n[2] == o[2];
}function isV1GreaterThanOrEqualToV2(e, t) {
  if (!e || !t) return !1;var n = e.split("."),
      o = t.split(".");if (!n || !o) return !1;if (n.length > 3 || o.length > 3 || n.length < 1 || o.length < 1) return !1;for (var a = 0; a < 3; a++) {
    n[a] = n[a] ? parseInt(n[a]) : 0, o[a] = o[a] ? parseInt(o[a]) : 0;
  }return n[0] > o[0] || n[0] == o[0] && n[1] > o[1] || n[0] == o[0] && n[1] == o[1] && n[2] >= o[2];
}function getUrlParam(e, t) {
  var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);if (!n) return null;if (!n[2]) return "";console.log("url=" + e, "name=" + t);var o = decodeURIComponent(n[2]);return console.log("getUrlParam=" + o), o;
}function toast(e) {
  wx.showToast({ title: e, icon: "success", duration: 2e3 });
}function hint(e) {
  isNumeric(e) && (e = "" + e), wx.showModal({ title: "提示", content: e || "", showCancel: !1 });
}function alert(e) {
  isNumeric(e) && (e = "" + e), wx.showModal({ title: "提示", content: e || "" });
}function showLoading() {
  wx.showLoading({ title: "加载中", mask: !0 });
}function hideLoading() {
  wx.hideLoading();
}function showNavLoading() {
  wx.showNavigationBarLoading();
}function hideNavLoading() {
  wx.hideNavigationBarLoading();
}function debounce(e, t) {
  var n;return function () {
    var o = this,
        a = arguments;clearTimeout(n), n = setTimeout(function () {
      e.apply(o, a);
    }, t);
  };
}function throttle(e, t) {
  var n, o;return function () {
    var a = this,
        r = arguments,
        i = new Date().getTime();n ? i - n > t ? (e.apply(a, r), n = i) : (clearTimeout(o), o = setTimeout(function () {
      e.apply(a, r), n = i;
    }, t - (i - n))) : (e.apply(a, r), n = i);
  };
}function throttleWithTrailingCancelling(e, t) {
  var n;return function () {
    var o = arguments,
        a = new Date().getTime();n ? a - n > t && e.apply(this, o) : e.apply(this, o), n = a;
  };
}function canUseUploadProgress() {
  return sysInfo || (sysInfo = getSysInfo()), isV1GreaterThanOrEqualToV2(sysInfo.SDKVersion, "1.4.0");
}function rpx2px(e) {
  return getSysInfo().screenWidth / 750 * e;
}function px2rpx(e) {
  return 750 / getSysInfo().screenWidth * e;
}function isIpx() {
  var e = getSysInfo().model.toLowerCase();return (/iphone\D*x/.test(e)
  );
}function getDateFormatString(e) {
  if (e <= 0) return "";var t = new Date();t = new Date(t.getFullYear(), t.getMonth(), t.getDate());var n = new Date(1e3 * e),
      o = t - (n = new Date(n.getFullYear(), n.getMonth(), n.getDate()));return 0 == o ? "今天" : 864e5 == o ? "昨天" : o >= 1728e5 && o < 6048e5 ? o / 864e5 + "天前" : o >= 6048e5 && o < 12096e5 ? "1周前" : o >= 12096e5 && o < 18144e5 ? "2周前" : o >= 18144e5 && o < 24192e5 ? "3周前" : o >= 24192e5 && o < 2592e6 ? "4周前" : o >= 2592e6 && o < 5184e6 ? "1个月前" : o >= 5184e6 && o < 7776e6 ? "2个月前" : o >= 7776e6 && o < 10368e6 ? "3个月前" : o >= 10368e6 && o < 1296e7 ? "4个月前" : o >= 1296e7 && o < 15552e6 ? "5个月前" : o >= 15552e6 && o < 31536e6 ? "半年前" : Math.floor(o / 31536e6) + "年前";
}function getDistanceString(e) {
  var t = parseInt(e);return t >= 1e3 ? parseInt(t / 1e3) + "km" : t + "m";
}function getTabHeightRpx() {
  return 174;
}var windowHeightExcludeTab = 0;function getWindowHeightExcludeTab() {
  return windowHeightExcludeTab || (windowHeightExcludeTab = getSysInfo().screenHeight - rpx2px(getTabHeightRpx())), windowHeightExcludeTab;
}var safeScreenHeight = 0;function getSafeScreenHeight() {
  if (!safeScreenHeight) {
    var e,
        t = getSysInfo().windowHeight;e = isIpx() ? t - rpx2px(mixinCss.statusBarHeight + mixinCss.ipxPadding + mixinCss.ipxFtPadding) : t - rpx2px(mixinCss.statusBarHeight);
  }return e;
}function getCurrentPageUrl() {
  var e = getCurrentPages(),
      t = e[e.length - 1],
      n = t.route,
      o = t.options,
      a = n + "?";for (var r in o) {
    a += r + "=" + o[r] + "&";
  }return a = a.substring(0, a.length - 1);
}function updateCanUseValues() {
  console.log("updateCanUseValues, hasCheckWechatVersion: " + hasCheckWechatVersion), hasCheckWechatVersion = !0, sysInfo || (sysInfo = getSysInfo());var e = sysInfo.version;console.log("updateCanUseValues, sysInfo: " + JSON.stringify(sysInfo)), canUseNewChooseMultiMediaAPI = !1, canUseChooseMultiMediaWithoutPoiInfo = !1, wx.chooseMultiMedia && (-1 != sysInfo.system.search("iOS") ? (canUseNewChooseMultiMediaAPI = isV1GreaterThanOrEqualToV2(e, "6.7.4"), canUseChooseMultiMediaWithoutPoiInfo = isV1GreaterThanOrEqualToV2(e, "7.0.5")) : (canUseNewChooseMultiMediaAPI = isV1GreaterThanOrEqualToV2(e, "6.7.3"), canUseChooseMultiMediaWithoutPoiInfo = isV1GreaterThanOrEqualToV2(e, "7.0.6"))), canUseGetAndSetLabInfo = !1, wx.getLabInfo && wx.setLabInfo && (canUseGetAndSetLabInfo = (sysInfo.system.search("iOS"), isV1GreaterThanOrEqualToV2(e, "7.0.0"))), canUseShareAppMessage = !1, wx.shareAppMessageForFakeNative && (canUseShareAppMessage = (sysInfo.system.search("iOS"), isV1GreaterThanOrEqualToV2(e, "7.0.0"))), canUseThisApp = canUseNewChooseMultiMediaAPI;
}function canUseChooseMultiMediaAPI() {
  return console.log("canUseChooseMultiMediaAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseNewChooseMultiMediaAPI: " + canUseNewChooseMultiMediaAPI), hasCheckWechatVersion ? canUseNewChooseMultiMediaAPI : (updateCanUseValues(), canUseNewChooseMultiMediaAPI);
}function canUseChooseMultiMediaAPIWithoutPoiInfo() {
  return console.log("canUseChooseMultiMediaAPIWithoutPoiInfo, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseChooseMultiMediaWithoutPoiInfo: " + canUseChooseMultiMediaWithoutPoiInfo), hasCheckWechatVersion ? canUseChooseMultiMediaWithoutPoiInfo : (updateCanUseValues(), canUseChooseMultiMediaWithoutPoiInfo);
}function canUseGetAndSetLabInfoAPI() {
  return console.log("canUseGetAndSetLabInfoAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseGetAndSetLabInfo: " + canUseGetAndSetLabInfo), hasCheckWechatVersion ? canUseGetAndSetLabInfo : (updateCanUseValues(), canUseGetAndSetLabInfo);
}function canUseShareAppMessageAPI() {
  return console.log("canUseShareAppMessageAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseShareAppMessage: " + canUseShareAppMessage), hasCheckWechatVersion ? canUseShareAppMessage : (updateCanUseValues(), canUseShareAppMessage);
}function canUseApp() {
  return console.log("canUseApp, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseApp: " + canUseThisApp), hasCheckWechatVersion ? canUseThisApp : (updateCanUseValues(), canUseThisApp);
}function getTimeRandomId() {
  var e = Math.floor(100 * Math.random() + 1);return 1e3 * new Date().getTime() + e;
}var rafApi = function () {
  var e = {},
      t = 0;return e.requestAnimationFrame = function (e, n) {
    var o = new Date().getTime(),
        a = Math.max(0, 16 - (o - t));console.log("timeToCall", a);var r = setTimeout(function () {
      e(o + a);
    }, a);return t = o + a, r;
  }, e.cancelAnimationFrame = function (e) {
    clearTimeout(e);
  }, e;
}();function isIPad() {
  return -1 != getSysInfo().model.search("iPad");
}function isIOS() {
  return -1 != getSysInfo().system.search("iOS");
}function formatChar(e) {
  return e.replace(/[\uff01-\uff5e]/g, function (e) {
    return String.fromCharCode(e.charCodeAt(0) - 65248);
  });
}function formatPhoneWithParentheses(e) {
  if (e.startsWith("(")) {
    return e.split(/^\(([0-9]{3,4})\)?\-/g).filter(function (e) {
      return e;
    }).join("-");
  }return e;
}var _pageId = 0;function getPageId() {
  return _pageId++;
}var _isLogManagerSet = !1;function setLogManager() {
  if (!_isLogManagerSet) {
    setSystemLog();var e = wx.getLogManager({ level: 0 });e.error = e.warn.bind(e, "[ERROR][error]: ");var t = console.debug;console.debug = function () {
      e.debug.apply(e, arguments), t.apply(console, arguments);
    };var n = console.info;console.info = function () {
      e.info.apply(e, arguments), n.apply(console, arguments);
    };var o = console.log;console.log = function () {
      e.log.apply(e, arguments), o.apply(console, arguments);
    };var a = console.warn;console.warn = function () {
      e.warn.apply(e, arguments), a.apply(a, arguments);
    };var r = console.error;console.error = function () {
      e.error.apply(e, arguments), r.apply(console, arguments);
    };
  }
}function setSystemLog() {
  var e = !1,
      t = wx.getLogManager().privateSystemLog;console.log("systemLog", t);var n = "[NEARBY_RESTAURANT_MINI_PROGRAM]";if (t ? (t(n + "test system log", t, { a: 1 }), console.log(n + "test system log ok!"), e = !0) : console.log(n + "test system log fail!"), !e) return !1;var o = console.debug;console.debug = function () {
    var e = Array.prototype.slice.call(arguments);e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][DEBUG]"), t.apply(void 0, e), o.apply(console, arguments);
  };var a = console.info;console.info = function () {
    var e = Array.prototype.slice.call(arguments);e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][INFO]"), t.apply(void 0, e), a.apply(console, arguments);
  };var r = console.log;console.log = function () {
    var e = Array.prototype.slice.call(arguments);e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][LOG]"), t.apply(void 0, e), r.apply(console, arguments);
  };var i = console.warn;console.warn = function () {
    var e = Array.prototype.slice.call(arguments);e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][WARN]"), t.apply(void 0, e), i.apply(i, arguments);
  };var s = console.error;return console.error = function () {
    var e = Array.prototype.slice.call(arguments);e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][ERROR]"), t.apply(void 0, e), s.apply(console, arguments);
  }, !0;
}function createRingBuffer(e) {
  var t = 0,
      n = [];return { push: function push(o) {
      n[t] = o, t = (e + t + 1) % e;
    }, getArray: function getArray() {
      for (var o = [], a = 0; a < e; a++) {
        var r = (a + t) % e;void 0 !== n[r] && o.push(n[r]);
      }return o;
    } };
}function getPartialData(e, t, n, o) {
  var a = t.length;if (n < 0 && (n = 0), o > a && (o = a), n >= o) return {};for (var r = {}, i = n; i < o; i++) {
    r[e + "[" + i + "]"] = t[i];
  }return r;
}function getMultiPartialData(e, t, n, o, a) {
  if (a > t.length && (a = t.length), a < 0) return [];var r = t.length;if (n < 0 && (n = 0), o > r && (o = r), n >= o) return [];for (var i = n, s = i + a, u = [];;) {
    var c = getPartialData(e, t, i, s);if (u.push(c), (i += a) >= o) break;(s += a) > r && (s = r);
  }return u;
}function arrayIncludes(e, t) {
  return e.some(function (e) {
    return e === t;
  });
}function getImpressionType(e) {
  if (void 0 === e) return reportEnum.enumFeedImpressionType.OTHER;switch (e) {case 0:case 1:
      return reportEnum.enumFeedImpressionType.FRIEND;case 2:
      return reportEnum.enumFeedImpressionType.STRANGER;default:
      return reportEnum.enumFeedImpressionType.OTHER;}
}function getCurrentPage() {
  var e = getCurrentPages();return e.length ? e[e.length - 1] : null;
}function appNavigateBack() {
  console.log("call appNavigateBack"), wx.navigateBackMiniProgram({ success: function success(e) {
      console.log("wx.navigateBackMiniProgram, success");
    }, fail: function fail(e) {
      console.error("wx.navigateBackMiniProgram fail, err: " + JSON.stringify(e)), wx.navigateBackNative({ success: function success(e) {
          console.log("wx.navigateBackNative, success");
        }, fail: function fail(e) {
          console.error("wx.navigateBackNative fail, err: " + JSON.stringify(e));
        } });
    } });
}function canUseCssSticky() {
  var e = !1,
      t = getSysInfo();return -1 != t.system.search("iOS") && (e = isV1GreaterThanOrEqualToV2(t.version, "6.0.0")), e;
}function formatNumberToTenThousand(e) {
  return e >= 1e4 ? Number((e / 1e4).toFixed(1)) + "万" : e;
}function utf8Index2StrIndex(e, t, n) {
  for (var o = 0, a = 0; a < e.length; a++) {
    var r = e[a],
        i = 0;try {
      i = utf8.encode(r).length;
    } catch (e) {
      i += 4;
    }if ((o += i) == t) {
      var s = n.length;return n == e.substring(a + 1, a + 1 + s) ? a + 1 : u(e, a + 2, n);
    }if (o > t) return u(e, a, n);
  }return -1;function u(e, t, n) {
    for (var o = n.length, a = t; a < e.length; a++) {
      if (e.substring(a, a + o) == n) return a;
    }return -1;
  }
}function getPostImpressionCommentErrorMessage(e) {
  var t = "评论失败";return e && e.errorCode && -16 != e.errorCode && (e.data && e.data.baseResponse && e.data.baseResponse.msg && "string" == typeof e.data.baseResponse.msg ? t = e.data.baseResponse.msg : console.error("getPostImpressionCommentErrorMessage, no err.data.baseResponse.msg from err: " + JSON.stringify(e))), t;
}var oneTimeEventMap = {};function listeneToOneTimeEvent(e, t) {
  var n = oneTimeEventMap[e];n ? n.notified ? t(null != n.data ? clone(n.data) : n.data) : n.cbs.push(t) : oneTimeEventMap[e] = { notified: !1, data: void 0, cbs: [t] };
}function notifyOneTimeEvent(e, t) {
  var n = oneTimeEventMap[e];n ? (n.notified = !0, n.data = t, n.cbs.forEach(function (e) {
    e(t);
  }), n.cbs = []) : oneTimeEventMap[e] = { notified: !0, data: t, cbs: [] };
}function getReasonTags(e) {
  return 0 === e.length ? e : e.slice(0, Math.min(2, e.length));
}function normalizeArray(e) {
  return e.filter(function (e) {
    return 0 !== Object.keys(e).length;
  });
}function getDeviceForKvReport() {
  return "ios" === getSysInfo().platform ? 1 : "android" === getSysInfo().platform ? 2 : -1;
}module.exports = { listeneToOneTimeEvent: listeneToOneTimeEvent, notifyOneTimeEvent: notifyOneTimeEvent, utf8Index2StrIndex: utf8Index2StrIndex, getCurrentPage: getCurrentPage, arrayIncludes: arrayIncludes, getMultiPartialData: getMultiPartialData, createRingBuffer: createRingBuffer, setLogManager: setLogManager, getPageId: getPageId, requestAnimationFrame: rafApi.requestAnimationFrame, cancelAnimationFrame: rafApi.cancelAnimationFrame, getTimeRandomId: getTimeRandomId, isIpx: isIpx, rpx2px: rpx2px, px2rpx: px2rpx, formatDuration: formatDuration, getSysInfo: getSysInfo, getNetworkType: getNetworkType, showNavLoading: showNavLoading, hideNavLoading: hideNavLoading, toast: toast, hideLoading: hideLoading, showLoading: showLoading, hint: hint, alert: alert, formatTime: formatTime, formatDate: formatDate, formatRegularDate: formatRegularDate, formatTimeMinute: formatTimeMinute, formatChar: formatChar, formatPhoneWithParentheses: formatPhoneWithParentheses, serialize: serialize, formatNumber: formatNumber, clone: clone, isNumeric: isNumeric, isString: isString, guid: guid, uuid: guid, getUrlParam: getUrlParam, debounce: debounce, throttle: throttle, throttleWithTrailingCancelling: throttleWithTrailingCancelling, canUseUploadProgress: canUseUploadProgress, getDateFormatString: getDateFormatString, getDistanceString: getDistanceString, getWindowHeightExcludeTab: getWindowHeightExcludeTab, getSafeScreenHeight: getSafeScreenHeight, getCurrentPageUrl: getCurrentPageUrl, canUseChooseMultiMediaAPI: canUseChooseMultiMediaAPI, canUseGetAndSetLabInfoAPI: canUseGetAndSetLabInfoAPI, canUseApp: canUseApp, isIPad: isIPad, isIOS: isIOS, canUseShareAppMessageAPI: canUseShareAppMessageAPI, getImpressionType: getImpressionType, appNavigateBack: appNavigateBack, canUseCssSticky: canUseCssSticky, formatNumberToTenThousand: formatNumberToTenThousand, getPostImpressionCommentErrorMessage: getPostImpressionCommentErrorMessage, canUseChooseMultiMediaAPIWithoutPoiInfo: canUseChooseMultiMediaAPIWithoutPoiInfo, getReasonTags: getReasonTags, normalizeArray: normalizeArray, getDeviceForKvReport: getDeviceForKvReport }; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
require("./utils/model_lib/hook");var util = require("./utils/util"),
    cgi = require("./utils/cgi"),
    cgiLonglink = require("./utils/cgi_longlink"),
    kitchenStorage = require("./utils/kitchenStorage"),
    reporter = require("./utils/reporter.js"),
    reportSession = require("./utils/report_session"),
    appLaunchData = require("./utils/appLaunchData"),
    abTestUtil = require("./utils/ABTestUtil.js"),
    stackBuffer = util.createRingBuffer(32);util.setLogManager();var hasLaunched = !1,
    launchListeners = [],
    hasCheckedUserState = !1,
    getLocationOK = !1,
    cgiLoginSuccess = !1,
    showIndexItemDistance = !1,
    shouldGetProfileToCheckLocation = !1,
    hasStartedGettingLocation = !1,
    canShowModifyUserLocationTip = !1,
    hasModifiedUserLocationByCgi = !1,
    shouldShowModifyUserLocationTip = !1,
    isShowingModifyUserLocationTip = !1,
    shouldShowUserFirstAuthorizationTip = !1,
    isShowingUserFirstAuthorizationTip = !1,
    appLaunchSessionIdCachedForAuthorizationTip = 0,
    shouldShowGetUserLocationErrorTip = !1,
    isShowingGetUserLocationErrorTip = !1,
    hasReportedAppLaunchTotalTime = !1,
    hasReportedAppLaunchLocationInfo = !1,
    shouldCreateNewReportSession = !0,
    launchForPreOpen = !1,
    canStartMainProcess = !1,
    lastGetLocationResultTime = 0,
    getLocationMinTimeInterval = 6e4,
    useFollow = null,
    USE_TAB_STYLE_FOR_TIMELINE_KEY = "useTabStyleForTimelineKey",
    USE_FOLLOW_KEY = "useFollowKey",
    enumUserStateAtLab = { Unknown: 0, NoLabItem: 1, Closed: 2, Open: 3 },
    enumUserStateError = { ok: 0, notExpUser: 1, shouldUpdateWeChat: 2, labItemClosed: 3, regionNotAllowed: 4, isPad: 5, firstLaunch: 6, regionNotAllowedAndFirstLaunch: 7, unknown: 99, error: -1 },
    enumGetProfileScene = { checkUserStatusAndLocation: 0, onlyCheckLocation: 1 },
    MMLIFEAPP_USER_STATUS_FLAG_EXP_USER = 1,
    MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN = 2,
    MMLIFEAPP_USER_STATUS_FLAG_REGION_ALLOW = 4,
    MMLIFEAPP_USER_STATUS_FLAG_EXP_SWITCH_OPEN = 8,
    MMLIFEAPP_USER_STATUS_FLAG_AUTHORIZED = 16,
    MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE = 32,
    MMLIFEAPP_USER_STATUS_FLAG_DoubleTabStyle = 64,
    MMLIFEAPP_USER_STATUS_FLAG_GridCellStyle = 128,
    MMLIFEAPP_USER_STATUS_FLAG_GridCellActivityStyle = 256,
    MMLIFEAPP_USER_STATUS_FLAG_OpenFollowFwitch = 512,
    HAS_SHOWN_USER_FIRST_LAUNCH_TIP_KEY = "hasShownUserFirstLaunchTip",
    userHasModifiedLocation = !1,
    userStateAtLab = enumUserStateAtLab.Unknown,
    userStatusFlagAtServer = 0,
    userStateErrorCode = enumUserStateError.unknown,
    userStateChangeListeners = [],
    kv16878ReportData = { timelineExposedSet: new Set(), timelineAllExposedSet: new Set() };function addUserStateChangeListener(e) {
  e && (userStateErrorCode != enumUserStateError.unknown ? e() : userStateChangeListeners.push(e));
}function notifyUserStateChangeListener() {
  if (userStateChangeListeners.length) for (var e = 0; e < userStateChangeListeners.length; e++) {
    (0, userStateChangeListeners[e])();
  }
}var _launchListenerId = 1;function addLaunchListener(e) {
  if (e) return hasLaunched ? (e(), 0) : (launchListeners.push({ id: _launchListenerId, func: e }), ++_launchListenerId);
}function notifyLaunchListener() {
  if (launchListeners.length) for (var e = 0; e < launchListeners.length; e++) {
    (0, launchListeners[e].func)();
  }launchListeners = [];
}function removeLaunchListener(e) {
  if (launchListeners.length) for (var t = 0; t < launchListeners.length; t++) {
    launchListeners[t].id === e && launchListeners.splice(t, 1);
  }
}var infoUpdateEvent = { addImpression: "addImpression", deleteImpression: "deleteImpression", updateImpressionCommentCount: "updateImpressionCommentCount" },
    infoUpdateEventKey = { friendsTimeline: "friendsTimeline", me: "me", searchResultImpression: "searchResultImpression", poiDetail: "poiDetail", commentFeed: "commentFeed", indexTag: "indexTag", timeline: "timeline", timelineAll: "timelineAll", userProfile: "userProfile", activity: "activity" },
    infoUpdateEventListeners = {};function isValidInfoUpdateEventKey(e) {
  if (!e || 0 == e.length) return !1;for (var t in infoUpdateEventKey) {
    if (infoUpdateEventKey[t] == e) return !0;
  }return !1;
}function addInfoUpdateEventListeners(e, t, o) {
  if (o && isValidInfoUpdateEventKey(e) && null != t) {
    switch (infoUpdateEventListeners[e] || (infoUpdateEventListeners[e] = {}), t) {case infoUpdateEvent.addImpression:
        infoUpdateEventListeners[e].addImpression = o;break;case infoUpdateEvent.deleteImpression:
        infoUpdateEventListeners[e].deleteImpression = o;break;case infoUpdateEvent.updateImpressionCommentCount:
        infoUpdateEventListeners[e].updateImpressionCommentCount = o;}console.log("addInfoUpdateEventListeners, key: " + e + ", event: " + t + ", func: " + JSON.stringify(o));
  }
}function removeInfoUpdateEventListeners(e) {
  e && 0 != e.length && infoUpdateEventListeners[e] && (infoUpdateEventListeners[e] = void 0, console.log("removeInfoUpdateEventListeners, key: " + e));
}function notifyInfoUpdateEventListeners(e, t) {
  if (null != e) for (var o in infoUpdateEventListeners) {
    if (infoUpdateEventListeners[o]) {
      var a = infoUpdateEventListeners[o][e];a && (a(t), console.log("notifyInfoUpdateEventListeners, current key: " + o + ", event: " + e + ", func: " + JSON.stringify(a)));
    }
  }
}App({ onLaunch: function onLaunch(e) {
    if (console.log("app onLaunch, res: " + JSON.stringify(e)), e.scene) {
      var t = parseInt(e.scene);reportSession.setLaunchScene(t), this.globalData.appLaunchReportData.launchScene = t;
    }launchForPreOpen = !1;var o = !0;e.prerender && 1 == e.prerender && (launchForPreOpen = !0, o = !1), this.checkAndCreateNewReportSession(), this.updateNavigationBarForAppLaunch(!0), this.tryStartApp(o, !0), abTestUtil.getAllABTestValues();
  }, onShow: function onShow(e) {
    var t = this;if (console.log("app onShow, res: ", e), e.scene) {
      var o = parseInt(e.scene);reportSession.setLaunchScene(o);
    }var a = util.getSysInfo();util.getNetworkType().then(function (e) {
      a.networkType = e, t.globalData.sysInfo = a, console.log(a);
    });this.checkAndCreateNewReportSession();var n = !1;e.prerender && 1 == e.prerender && (n = !0), 0 == n && launchForPreOpen && (launchForPreOpen = !1, hasStartedGettingLocation ? console.error("app onShow, (isPrerender == false) && launchForPreOpen, but hasStartedGettingLocation!") : this.checkAndGetLocation(), canStartMainProcess && this.startMainProcess()), this.checkAndShowModalForTips(), reporter.setTimeout4BatchReport();
  }, onHide: function onHide(e) {
    isShowingUserFirstAuthorizationTip && this.reportAppLaunchUserFirstAuthorization(2);var t = getCurrentPages();t && t.length && "pages/timeline/timeline" == t[t.length - 1].route && (shouldCreateNewReportSession = !0);this.globalData.kv16878ReportData.timelineExposedSet.clear(), this.globalData.kv16878ReportData.timelineAllExposedSet.clear(), reporter.clearTimeout4BatchReport(), reporter.batchReportAll();
  }, checkAndCreateNewReportSession: function checkAndCreateNewReportSession() {
    shouldCreateNewReportSession ? (console.log("create new report session"), shouldCreateNewReportSession = !1, reportSession.createNewSession(), this.checkAndUpdateUserCurrentLocation()) : console.log("should not create new report session, return");
  }, updateNavigationBarForAppLaunch: function updateNavigationBarForAppLaunch(e) {
    if (e) wx.setNavigationBarTitle({ title: "加载中" }), wx.showNavigationBarLoading();else {
      var t = "",
          o = getCurrentPages();if (o && o.length) "pages/timeline/timeline" == o[o.length - 1].route && (t = "附近的餐厅");wx.setNavigationBarTitle({ title: t }), wx.hideNavigationBarLoading();
    }
  }, tryStartApp: function tryStartApp(e, t) {
    if (util.isIPad()) return userStateErrorCode = enumUserStateError.isPad, notifyUserStateChangeListener(), void this.updateNavigationBarForAppLaunch(!1);t && (this.globalData.appLaunchSessionId = util.getTimeRandomId(), this.globalData.appLaunchReportData.appLaunchStartTime = new Date().getTime()), wx.hideTabBar(), this.getLocalLabInfo();var o = appLaunchData.getAuthData();o.openId && o.openId.length && o.sessionKey && o.sessionKey.length ? (this.globalData.appLaunchReportData.cachedSessionKeyResult = 1, this.getProfileWithScene(enumGetProfileScene.checkUserStatusAndLocation, !e)) : (this.globalData.appLaunchReportData.cachedSessionKeyResult = 3, this.appLogin()), e && this.checkAndGetLocation();
  }, retryStartApp: function retryStartApp() {
    userStateErrorCode = enumUserStateError.unknown, notifyUserStateChangeListener(), this.updateNavigationBarForAppLaunch(!0), this.tryStartApp(!1, !1);
  }, startAppFailed: function startAppFailed() {
    userStateErrorCode = enumUserStateError.error, notifyUserStateChangeListener(), this.updateNavigationBarForAppLaunch(!1);
  }, getHasLaunched: function getHasLaunched() {
    return hasLaunched;
  }, checkAndGetLocation: function checkAndGetLocation() {
    console.log("TimeRecord, start checkAndGetLocation: " + JSON.stringify(new Date())), hasStartedGettingLocation = !0, getLocationOK = !1, shouldGetProfileToCheckLocation = !1;var e = this;this.getLocation(function (t) {
      var o = t.latitude,
          a = t.longitude;if (("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) && (o = kitchenStorage.getDefaultLocationLatitude(), a = kitchenStorage.getDefaultLocationLongitude()), o && a) {
        appLaunchData.updateUserRealCurrentLocation(o, a);var n = t.speed,
            i = t.accuracy;if (console.log("latitude=", o, "longitude=", a, "speed=", n, "accuracy=", i), console.log("TimeRecord, getLocation success: " + JSON.stringify(new Date())), e.globalData.appLaunchSessionId > 0) {
          var r = new Date().getTime();e.globalData.appLaunchReportData.getLocationTime = r - e.globalData.appLaunchReportData.appLaunchStartTime, 0 == e.globalData.appLaunchReportData.getLocationResult && (e.globalData.appLaunchReportData.getLocationResult = 1), cgiLoginSuccess && e.reportAppLaunchTimeCost();
        }getLocationOK = !0, hasCheckedUserState ? e.getProfileWithScene(enumGetProfileScene.onlyCheckLocation) : shouldGetProfileToCheckLocation = !0;
      } else e.getLocationError(t);
    }, function (t) {
      e.getLocationError(t);
    });
  }, getLocationError: function getLocationError(e) {
    console.error("获取地理位置失败, result: " + JSON.stringify(e)), shouldShowGetUserLocationErrorTip = !0, this.checkAndShowModalForTips();
  }, appLogin: function appLogin() {
    console.log("TimeRecord, start appLogin: " + JSON.stringify(new Date())), cgiLoginSuccess = !1;var e = this;cgi.login(function () {
      if (console.log("TimeRecord, cgi.login success: " + JSON.stringify(new Date())), cgiLoginSuccess = !0, e.globalData.appLaunchSessionId > 0) {
        var t = new Date().getTime();e.globalData.appLaunchReportData.loginProcessTime = t - e.globalData.appLaunchReportData.appLaunchStartTime;
      }shouldGetProfileToCheckLocation = !1, e.getProfileWithScene(enumGetProfileScene.checkUserStatusAndLocation);
    }, function () {
      e.startAppFailed();
    });
  }, getProfileWithScene: function getProfileWithScene(e, t) {
    console.log("getProfileWithScene: " + e + ", _ignoreLocation: " + t), void 0 === e && (e = enumGetProfileScene.checkUserStatusAndLocation);var o = this,
        a = e == enumGetProfileScene.checkUserStatusAndLocation,
        n = (e == enumGetProfileScene.onlyCheckLocation || e == enumGetProfileScene.checkUserStatusAndLocation) && !t;a && (o.globalData.appLaunchReportData.firstGetProfileStartTime = new Date().getTime(), cgiLoginSuccess && o.reportAppLaunchTimeCost());var i = getLocationOK,
        r = appLaunchData.getUserLocation();i && (r = appLaunchData.getUserRealCurrentLocation()), new cgi.SimpleRequest("getprofile", { location: r, scene: e }).send(function (e) {
      if (console.log("getprofile success, userInfo: " + JSON.stringify(e.userInfo)), a && (cgiLoginSuccess = !0, e.userInfo && (o.globalData.userInfo = e.userInfo), e.statusFlag && (userStatusFlagAtServer = e.statusFlag, o.globalData.appLaunchReportData.userStatusFlag = userStatusFlagAtServer, o.updateABTestValueByUserStatusFlag()), o.globalData.appLaunchSessionId > 0)) {
        var t = new Date().getTime();o.globalData.appLaunchReportData.getProfileTime = t - o.globalData.appLaunchReportData.firstGetProfileStartTime, o.globalData.appLaunchReportData.appLaunchTime = t - o.globalData.appLaunchReportData.appLaunchStartTime, o.reportAppLaunchTimeCost();
      }if (n) {
        var s = e.statusFlag;if (void 0 === s && (console.error("data.statusFlag is undefined at getprofile cgi response"), s = 0), 0 == (s & MMLIFEAPP_USER_STATUS_FLAG_REGION_ALLOW) && 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN)) return void o.modifyUserLocation(i, a);appLaunchData.clearSelectedAreaId(), i && (appLaunchData.updateUserLocation(r.latitude, r.longitude), appLaunchData.markCheckRealCurrentLocation(!0));
      }a && o.checkUserStateAndStartMainProcess();
    }, function (e) {
      if (console.error("getprofile resp failed: " + JSON.stringify(e)), a) {
        if (e && -13 == e.errorCode) return console.error("getprofile resp failed, errorCode is -13, try login"), o.globalData.appLaunchReportData.cachedSessionKeyResult = 2, appLaunchData.clearAuthData(), void o.appLogin();o.startAppFailed();
      }
    }, !0);
  }, startMainProcess: function startMainProcess() {
    launchForPreOpen ? console.log("preOpen, do not startMainProcess now") : hasLaunched ? console.log("hasLaunched, do not startMainProcess") : (console.log("startMainProcess"), userStateAtLab = enumUserStateAtLab.Open, userStateErrorCode = enumUserStateError.ok, hasLaunched = !0, notifyLaunchListener());
  }, getLocalLabInfo: function getLocalLabInfo() {
    userStateAtLab = enumUserStateAtLab.Unknown, util.canUseGetAndSetLabInfoAPI() && (console.log("TimeRecord, start getLabInfo: " + JSON.stringify(new Date())), wx.getLabInfo({ labId: "labs_nearbylife", success: function success(e) {
        console.log("get labInfo success: " + JSON.stringify(e)), console.log("TimeRecord, getLabInfo success: " + JSON.stringify(new Date())), userStateAtLab = e.exist ? e.enabled ? enumUserStateAtLab.Open : enumUserStateAtLab.Closed : enumUserStateAtLab.NoLabItem;
      }, fail: function fail(e) {
        console.error("get labInfo failed: " + JSON.stringify(e)), console.log("TimeRecord, getLabInfo failed: " + JSON.stringify(new Date())), userStateAtLab = enumUserStateAtLab.Unknown;
      } }));
  }, checkUserState: function checkUserState() {
    return console.log("checkUserState, userStatusFlagAtServer: " + JSON.stringify(userStatusFlagAtServer)), console.log("checkUserState, userStateAtLab: " + userStateAtLab), userStateErrorCode = enumUserStateError.ok, userStateAtLab == enumUserStateAtLab.NoLabItem && 0 != (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_USER) && console.log("is exp user at server, but no lab item"), 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_USER) ? userStateErrorCode = enumUserStateError.notExpUser : (userStateAtLab == enumUserStateAtLab.Unknown && (console.log("checkUserState, local result is Unknown. Use userStatusFlagAtServer"), util.canUseGetAndSetLabInfoAPI() && console.error("Is exp user and has api: wx.getLabInfo. But userStateAtLab is still Unknown when checkUserState."), 0 == util.canUseApp() && (userStateErrorCode = enumUserStateError.shouldUpdateWeChat), 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_SWITCH_OPEN) && (userStateErrorCode = enumUserStateError.labItemClosed)), userStateAtLab == enumUserStateAtLab.NoLabItem && (userStateErrorCode = enumUserStateError.notExpUser), userStateAtLab == enumUserStateAtLab.Closed && (userStateErrorCode = enumUserStateError.labItemClosed)), userStateErrorCode == enumUserStateError.notExpUser && (console.log("checkUserState, not exp user"), userStateErrorCode = enumUserStateError.ok), userStateErrorCode == enumUserStateError.labItemClosed && (console.log("checkUserState, lab item closed"), userStateErrorCode = enumUserStateError.ok), "devtools" != util.getSysInfo().platform && userStateErrorCode == enumUserStateError.ok && 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_AUTHORIZED) && (shouldShowUserFirstAuthorizationTip = !0, appLaunchSessionIdCachedForAuthorizationTip = this.globalData.appLaunchSessionId, this.checkAndShowModalForTips(), this.globalData.appLaunchReportData.showUserFirstLaunchTip = 1, this.reportAppLaunchTimeCost()), hasCheckedUserState = !0, shouldGetProfileToCheckLocation && getLocationOK && (shouldGetProfileToCheckLocation = !1, this.getProfileWithScene(enumGetProfileScene.onlyCheckLocation)), notifyUserStateChangeListener(), this.updateNavigationBarForAppLaunch(!1), (userStateErrorCode == enumUserStateError.ok || "devtools" == util.getSysInfo().platform) && (this.globalData.appLaunchReportData.showUserFirstLaunchTip = 2, this.reportAppLaunchTimeCost(), !0);
  }, getLocation: function getLocation(e, t) {
    var o = this;wx.getSetting({ success: function success(a) {
        console.log("setting", a), a.authSetting["scope.userLocation"] ? wx.getLocation({ type: "gcj02", success: function success(t) {
            lastGetLocationResultTime = new Date().getTime(), e && e(t);
          }, fail: function fail(e) {
            lastGetLocationResultTime = new Date().getTime(), t && t(e);
          } }) : wx.authorize({ scope: "scope.userLocation", success: function success(o) {
            wx.getLocation({ type: "gcj02", success: function success(t) {
                lastGetLocationResultTime = new Date().getTime(), e && e(t);
              }, fail: function fail(e) {
                lastGetLocationResultTime = new Date().getTime(), t && t(e);
              } });
          }, fail: function fail(e) {
            o.getLocationError(e);
          } });
      } });
  }, checkAndShowModalForTips: function checkAndShowModalForTips() {
    launchForPreOpen ? console.log("is launch for PreOpen, do not show tips now, return") : shouldShowGetUserLocationErrorTip || shouldShowUserFirstAuthorizationTip || shouldShowModifyUserLocationTip ? isShowingGetUserLocationErrorTip ? console.log("isShowingGetUserLocationErrorTip, return") : isShowingUserFirstAuthorizationTip ? console.log("isShowingUserFirstAuthorizationTip, return") : isShowingModifyUserLocationTip ? console.log("isShowingModifyUserLocationTip, return") : shouldShowGetUserLocationErrorTip ? this.showGetUserLocationErrorTip() : shouldShowUserFirstAuthorizationTip ? this.showUserFirstAuthorizationTip() : shouldShowModifyUserLocationTip && this.showModifyUserLocationTip() : console.log("no tip should show, return");
  }, showGetUserLocationErrorTip: function showGetUserLocationErrorTip() {
    var e = this;console.log("showGetUserLocationErrorTip"), shouldShowGetUserLocationErrorTip = !1, isShowingGetUserLocationErrorTip = !0, wx.showModal({ title: "", content: "定位服务未开启，开启定位服务可获得更好的推荐", cancelText: "下次再说", confirmText: "已开启", success: function success(t) {
        t.confirm ? (console.log("showGetUserLocationErrorTip, system or WeChat location showModel, result confirm"), isShowingGetUserLocationErrorTip = !1, e.checkAndShowModalForTips(), e.globalData.appLaunchReportData.getLocationResult = 2, cgiLoginSuccess && e.reportAppLaunchTimeCost(), e.checkAndGetLocation()) : (t.cancel ? console.error("showGetUserLocationErrorTip, system or WeChat location showModel, result cancel") : console.error("showGetUserLocationErrorTip, system or WeChat location showModel, result invalid"), isShowingGetUserLocationErrorTip = !1, e.checkAndShowModalForTips(), e.globalData.appLaunchReportData.getLocationResult = 3, cgiLoginSuccess && e.reportAppLaunchTimeCost(), appLaunchData.markCheckRealCurrentLocation(!1));
      } });
  }, showModifyUserLocationTip: function showModifyUserLocationTip() {
    var e = this;isShowingModifyUserLocationTip = !0, shouldShowModifyUserLocationTip = !1, hasModifiedUserLocationByCgi = !1, console.log("showModifyUserLocationTip"), wx.showModal({ title: "", content: "当前仅支持查看广州地区的餐厅", showCancel: !1, confirmText: "知道了", success: function success(t) {
        t.confirm ? (console.log("showModifyUserLocationTip showModel, result confirm"), isShowingModifyUserLocationTip = !1, e.checkAndShowModalForTips()) : t.cancel && (console.error("showModifyUserLocationTip showModel, result cancel"), isShowingModifyUserLocationTip = !1, e.checkAndShowModalForTips());
      } });
  }, showUserFirstAuthorizationTip: function showUserFirstAuthorizationTip() {
    var e = this;isShowingUserFirstAuthorizationTip = !0, console.log("showUserFirstAuthorizationTip"), wx.showModal({ title: "请注意", content: "你可以在此分享餐厅，你发表的内容可以被所有人看到。\n我们会根据你的地理位置信息向你推荐餐厅。目前仅支持查看广州地区的餐厅。\n你可以在个人主页中点击右上角按钮查看平台规范。", confirmText: "知道了", showCancel: !1, success: function success(t) {
        t.confirm ? (console.log("showUserFirstAuthorizationTip showModel, result confirm"), isShowingUserFirstAuthorizationTip = !1, shouldShowUserFirstAuthorizationTip = !1, e.reportAppLaunchUserFirstAuthorization(1), e.sendUserAuthorizeAction(), e.checkAndShowModalForTips()) : (console.error("showUserFirstAuthorizationTip showModel. result.confirm is false, result.cancel is: " + t.cancel), isShowingUserFirstAuthorizationTip = !1, shouldShowUserFirstAuthorizationTip = !1, e.reportAppLaunchUserFirstAuthorization(2), util.appNavigateBack());
      } });
  }, sendUserAuthorizeAction: function sendUserAuthorizeAction() {
    new cgi.SimpleRequest("userauthorize", {}).send(function (e) {
      console.log("userauthorize success");
    }, function (e) {
      console.error("userauthorize resp failed: " + JSON.stringify(e));
    });
  }, reportAppLaunchUserFirstAuthorization: function reportAppLaunchUserFirstAuthorization(e) {
    var t = launchForPreOpen ? 1 : 0;reporter.getReporter(16597).sessionId(appLaunchSessionIdCachedForAuthorizationTip).appLaunchTime(0).getLocationTime(0).loginProcessTime(0).wxLoginTime(0).cgiLoginTime(0).cgiLongLinkTime(0).getProfileTime(0).getFriendsTimelineTime(0).totalTimeCost(0).cachedSessionKeyResult(0).getLocationResult(0).isFriendsTimelineCacheHit(0).launchScene(0).userStatusFlag(0).showUserFirstLaunchTip(0).userAuthorizeAction(e).isPreOpen(t).reportToServer();
  }, globalData: { picList: [], currentPicIndex: 0, deletePicFunc: function deletePicFunc() {}, userInfo: {}, sysInfo: {}, curentTabItemIndex: 0, poiDetailPicItemList: [], poiDetailPicItemCurrentIndex: 0, poiCommentSourceType: 0, postCommentFromPoiDetail: !0, selectedPoiItem: {}, appLaunchReportData: { appLaunchStartTime: 0, cgiLoginStartTime: 0, cgiLongLinkStartTime: 0, firstGetProfileStartTime: 0, firstGetFriendsTimelineStartTime: 0, appLaunchTime: 0, getLocationTime: 0, loginProcessTime: 0, wxLoginTime: 0, cgiLoginTime: 0, cgiLongLinkTime: 0, getProfileTime: 0, getFriendsTimelineTime: 0, totalTimeCost: 0, cachedSessionKeyResult: 0, getLocationResult: 0, isFriendsTimelineCacheHit: 0, launchScene: 0, userStatusFlag: 0, showUserFirstLaunchTip: 0 }, appLaunchSessionId: 0, kv16878ReportData: kv16878ReportData }, addLaunchListener: addLaunchListener, removeLaunchListener: removeLaunchListener, enumUserStateError: enumUserStateError, addUserStateChangeListener: addUserStateChangeListener, getUserState: function getUserState() {
    return userStateErrorCode;
  }, canOpenKitchen: function canOpenKitchen() {
    return !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN);
  }, reportAppLaunchTimeCost: function reportAppLaunchTimeCost() {
    var e = !1;this.globalData.appLaunchReportData.totalTimeCost && (hasReportedAppLaunchTotalTime = !0), (this.globalData.appLaunchReportData.getLocationTime || 3 == this.globalData.appLaunchReportData.getLocationResult) && (hasReportedAppLaunchLocationInfo = !0), hasReportedAppLaunchTotalTime && hasReportedAppLaunchLocationInfo && (e = !0), this.globalData.appLaunchSessionId <= 0 && console.error("reportAppLaunchTimeCost error: globalData.appLaunchSessionId <= 0");var t = launchForPreOpen ? 1 : 0;reporter.getReporter(16597).sessionId(this.globalData.appLaunchSessionId).appLaunchTime(this.globalData.appLaunchReportData.appLaunchTime).getLocationTime(this.globalData.appLaunchReportData.getLocationTime).loginProcessTime(this.globalData.appLaunchReportData.loginProcessTime).wxLoginTime(this.globalData.appLaunchReportData.wxLoginTime).cgiLoginTime(this.globalData.appLaunchReportData.cgiLoginTime).cgiLongLinkTime(this.globalData.appLaunchReportData.cgiLongLinkTime).getProfileTime(this.globalData.appLaunchReportData.getProfileTime).getFriendsTimelineTime(this.globalData.appLaunchReportData.getFriendsTimelineTime).totalTimeCost(this.globalData.appLaunchReportData.totalTimeCost).cachedSessionKeyResult(this.globalData.appLaunchReportData.cachedSessionKeyResult).getLocationResult(this.globalData.appLaunchReportData.getLocationResult).isFriendsTimelineCacheHit(this.globalData.appLaunchReportData.isFriendsTimelineCacheHit).launchScene(this.globalData.appLaunchReportData.launchScene).userStatusFlag(this.globalData.appLaunchReportData.userStatusFlag).showUserFirstLaunchTip(this.globalData.appLaunchReportData.showUserFirstLaunchTip).userAuthorizeAction(0).isPreOpen(t).reportToServer(), e ? (this.globalData.appLaunchSessionId = 0, this.globalData.appLaunchReportData = { appLaunchStartTime: 0, cgiLoginStartTime: 0, cgiLongLinkStartTime: 0, firstGetProfileStartTime: 0, firstGetFriendsTimelineStartTime: 0, appLaunchTime: 0, getLocationTime: 0, loginProcessTime: 0, wxLoginTime: 0, cgiLoginTime: 0, cgiLongLinkTime: 0, getProfileTime: 0, getFriendsTimelineTime: 0, totalTimeCost: 0, cachedSessionKeyResult: 0, getLocationResult: 0, isFriendsTimelineCacheHit: 0, launchScene: 0, userStatusFlag: 0, showUserFirstLaunchTip: 0 }) : (this.globalData.appLaunchReportData.appLaunchTime = 0, this.globalData.appLaunchReportData.getLocationTime = 0, this.globalData.appLaunchReportData.loginProcessTime = 0, this.globalData.appLaunchReportData.wxLoginTime = 0, this.globalData.appLaunchReportData.cgiLoginTime = 0, this.globalData.appLaunchReportData.cgiLongLinkTime = 0, this.globalData.appLaunchReportData.getProfileTime = 0, this.globalData.appLaunchReportData.getFriendsTimelineTime = 0, this.globalData.appLaunchReportData.totalTimeCost = 0, this.globalData.appLaunchReportData.cachedSessionKeyResult = 0, this.globalData.appLaunchReportData.getLocationResult = 0, this.globalData.appLaunchReportData.isFriendsTimelineCacheHit = 0, this.globalData.appLaunchReportData.launchScene = 0, this.globalData.appLaunchReportData.userStatusFlag = 0, this.globalData.appLaunchReportData.showUserFirstLaunchTip = 0);
  }, addInfoUpdateEventListeners: addInfoUpdateEventListeners, removeInfoUpdateEventListeners: removeInfoUpdateEventListeners, notifyInfoUpdateEventListeners: notifyInfoUpdateEventListeners, infoUpdateEvent: infoUpdateEvent, infoUpdateEventKey: infoUpdateEventKey, setHasShownUserFirstLaunchTipValue: function setHasShownUserFirstLaunchTipValue() {
    wx.setStorageSync(HAS_SHOWN_USER_FIRST_LAUNCH_TIP_KEY, "1");
  }, setUserLabStateOpen: function setUserLabStateOpen() {
    userStateAtLab = enumUserStateAtLab.Open;
  }, modifyUserLocation: function modifyUserLocation(e, t, o, a) {
    console.log("modifyUserLocation start, useRealLocationBefore: " + e + ", checkMainProcess: " + t), e && (hasModifiedUserLocationByCgi = !0, canShowModifyUserLocationTip && (shouldShowModifyUserLocationTip = !0, this.checkAndShowModalForTips()));var n = appLaunchData.getModifiedLocation();if (n.latitude && n.longitude) return appLaunchData.markCheckRealCurrentLocation(!1), appLaunchData.updateSelectedAreaId("areafilter_7742324733502755168"), appLaunchData.updateUserLocation(n.latitude, n.longitude), void console.log("modifyUserLocation, use cachedModifiedLocation, return!");var i = this;new cgi.SimpleRequest("moduserlocation", { areaId: "areafilter_7742324733502755168" }).send(function (e) {
      if (console.log("modifyUserLocation success: " + JSON.stringify(e)), !e.location || !e.location.latitude || !e.location.longitude) return console.error("modifyUserLocation resp data location invalid"), a && a(e), void (t && i.startAppFailed());appLaunchData.markCheckRealCurrentLocation(!1), appLaunchData.updateSelectedAreaId("areafilter_7742324733502755168"), appLaunchData.updateUserLocation(e.location.latitude, e.location.longitude), appLaunchData.updateModifiedLocation(e.location.latitude, e.location.longitude), o && o(e), t && i.checkUserStateAndStartMainProcess();
    }, function (e) {
      console.error("modifyUserLocation resp failed: " + JSON.stringify(e)), a && a(e), t && i.startAppFailed();
    });
  }, checkUserStateAndStartMainProcess: function checkUserStateAndStartMainProcess() {
    this.checkUserState() && (canStartMainProcess = !0, this.startMainProcess());
  }, onFuncBefore: function onFuncBefore(e, t, o) {
    stackBuffer.push({ type: "before", funcId: e, funcName: t, args: [].slice.call(o) });
  }, onFuncAfter: function onFuncAfter(e) {
    stackBuffer.push({ type: "after", funcId: e });
  }, onError: function onError(e) {
    stackBuffer = util.createRingBuffer(32);
  }, checkAndShowModifyUserLocationTip: function checkAndShowModifyUserLocationTip() {
    console.log("checkAndShowModifyUserLocationTip, hasModifiedUserLocationByCgi is: " + hasModifiedUserLocationByCgi), canShowModifyUserLocationTip = !0, hasModifiedUserLocationByCgi && (shouldShowModifyUserLocationTip = !0, this.checkAndShowModalForTips());
  }, checkAndUpdateUserCurrentLocation: function checkAndUpdateUserCurrentLocation() {
    if ("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) console.log("checkAndUpdateUserCurrentLocation, is devtools or using kitchen location. return!");else if (appLaunchData.isUsingRealCurrentLocation()) {
      var e = new Date().getTime() - lastGetLocationResultTime;e < getLocationMinTimeInterval ? console.log("checkAndUpdateUserCurrentLocation, timeFromLastGetLocation < getLocationMinTimeInterval, return! timeFromLastGetLocation: " + e) : (console.log("checkAndUpdateUserCurrentLocation, start get location, timeFromLastGetLocation: " + e), wx.getLocation({ type: "gcj02", success: function success(e) {
          lastGetLocationResultTime = new Date().getTime();var t = e.latitude,
              o = e.longitude;if (("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) && (t = kitchenStorage.getDefaultLocationLatitude(), o = kitchenStorage.getDefaultLocationLongitude()), t && o) {
            appLaunchData.isUsingRealCurrentLocation() && appLaunchData.updateUserLocation(t, o);var a = e.speed,
                n = e.accuracy;console.log("checkAndUpdateUserCurrentLocation, wx.getLocation success, latitude=", t, "longitude=", o, "speed=", a, "accuracy=", n);
          } else console.error("checkAndUpdateUserCurrentLocation, wx.getLocation failed, invalid location, value");
        }, fail: function fail(e) {
          lastGetLocationResultTime = new Date().getTime(), console.error("checkAndUpdateUserCurrentLocation, wx.getLocation failed, error: " + JSON.stringify(e));
        } }));
    } else console.log("checkAndUpdateUserCurrentLocation, is not UsingRealCurrentLocation, return!");
  }, shouldFoldFriendVisitPage: function shouldFoldFriendVisitPage() {
    return console.log("check MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE, userStatusFlagAtServer is " + userStatusFlagAtServer), !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE);
  }, isPreOpen: function isPreOpen() {
    return launchForPreOpen;
  }, updateABTestValueByUserStatusFlag: function updateABTestValueByUserStatusFlag() {
    useFollow = !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_OpenFollowFwitch), wx.setStorage({ key: USE_FOLLOW_KEY, data: useFollow, success: function success(e) {
        console.log("setStorage useFollow success");
      }, fail: function fail(e) {
        console.error("setStorage useFollow failed: " + JSON.stringify(e));
      } });
  }, shouldUseFollow: function shouldUseFollow() {
    if (null == useFollow) try {
      useFollow = wx.getStorageSync(USE_FOLLOW_KEY);
    } catch (e) {
      console.error("wx.getStorageSync(USE_FOLLOW_KEY) error: " + JSON.stringify(e)), useFollow = !1;
    }return console.log("shouldUseFollow: " + useFollow), useFollow;
  } }); 
 			}); 	require("app.js");
 		__wxRoute = 'components/animation_broadcast/animation_broadcast';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/animation_broadcast/animation_broadcast.js';	define("components/animation_broadcast/animation_broadcast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    duration = 500;Component({ properties: { textArray: { type: Array, value: [], observer: function observer(t, a, e) {} }, alarmPosition: { type: String, value: "", observer: function observer(t, a, e) {} } }, data: { index: 0, nextTimeoutSeq: [2e3, 3e3, 6e3, 4e3], nextTimeoutIndex: 0, alarmExtraStyle: "" }, attached: function attached() {
    var t = this;t.data.alarmPosition && t.setData({ alarmExtraStyle: "alarm-" + t.data.alarmPosition }), setTimeout(function () {
      t.animationIn(t.data.textArray[t.data.index]);
    }, 10);
  }, methods: { getNextTimeout: function getNextTimeout() {
      var t = this.data.nextTimeoutSeq,
          a = this.data.nextTimeoutIndex,
          e = t[a];return this.data.nextTimeoutIndex = (a + 1) % t.length, e;
    }, animationIn: function animationIn(t) {
      var a = this;a.setData({ isVisible: 0, shouldSetWidth0: 0, isTextOpacity0: 1, text: t }, function () {
        wx.createSelectorQuery().in(a).select(".alarm").boundingClientRect(function (t) {
          var e = t.width;a.setData({ isVisible: 1, shouldSetWidth0: 1 }, function () {
            var t = wx.createAnimation({ duration: duration, timingFunction: "ease" }).width(e).step();a.setData({ animationData: t.export() }), setTimeout(function () {
              var t = wx.createAnimation({ duration: duration / 2, timingFunction: "ease" }).opacity(1).step();a.setData({ animationOpacityData: t.export() }), setTimeout(function () {
                a.animationOut();
              }, 4 * duration);
            }, duration);
          });
        }).exec();
      });
    }, animationOut: function animationOut() {
      var t = this,
          a = wx.createAnimation({ duration: duration, timingFunction: "ease" }).width(0).step();t.setData({ animationData: a.export() }), t.data.index++, t.data.index >= t.data.textArray.length && (t.data.index = 0), setTimeout(function () {
        t.setData({ isTextOpacity0: 1 }), setTimeout(function () {
          t.animationIn(t.data.textArray[t.data.index]);
        }, 500);
      }, t.getNextTimeout());
    } } }); 
 			}); 	require("components/animation_broadcast/animation_broadcast.js");
 		__wxRoute = 'components/bottom_loading/bottom_loading';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/bottom_loading/bottom_loading.js';	define("components/bottom_loading/bottom_loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util");Component({ properties: { showBottomLoading: { type: Boolean, value: !0 }, darkTheme: { type: Boolean, value: !1 } }, data: {}, ready: function ready(o) {
    console.log("bottom_loading, ready: " + JSON.stringify(o));
  }, methods: {} }); 
 			}); 	require("components/bottom_loading/bottom_loading.js");
 		__wxRoute = 'components/choose_media_panel/choose_media_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/choose_media_panel/choose_media_panel.js';	define("components/choose_media_panel/choose_media_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util");Component({ properties: { poiName: String, showNoPicButton: { type: Boolean, value: !0 } }, data: {}, ready: function ready(t) {
    console.log("choose_media_panel, ready: " + JSON.stringify(t));var n = this;this.data.wxAnimationIn = wx.createAnimation({ duration: 300, timingFunction: "ease" });var e = this.properties.showNoPicButton ? 650 : 610,
        a = util.rpx2px(e);setTimeout(function () {
      n.data.wxAnimationIn.translateY(-a).step(), n.setData({ animationIn: n.data.wxAnimationIn.export() });
    }.bind(this), 100);
  }, methods: { hideMask: function hideMask(t) {
      console.log("hideMask: " + JSON.stringify(t)), this.triggerEvent("onhidepanel", {});
    }, catchtapPanel: function catchtapPanel(t) {
      console.log("catchtapPanel: " + JSON.stringify(t));
    }, onTapButton: function onTapButton(t) {
      console.log("onTapButton: " + JSON.stringify(t));var n = "";switch (t.currentTarget.dataset.index) {case 0:
          n = "camera";break;case 1:
          n = "album";break;case 2:
          n = "noMedia";break;default:
          n = "cancel";}this.triggerEvent("onresult", { result: n }), this.triggerEvent("onhidepanel", {});
    } } }); 
 			}); 	require("components/choose_media_panel/choose_media_panel.js");
 		__wxRoute = 'components/comment_panel/comment_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/comment_panel/comment_panel.js';	define("components/comment_panel/comment_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}var app = getApp(),
    util = require("../../utils/util"),
    appLaunchData = require("../../utils/appLaunchData"),
    reportEnum = require("../../utils/reportEnum"),
    cgi = require("../../utils/cgi"),
    mixinCss = require("../../utils/mixinCss"),
    renderDataUtil = require("../../utils/render_data_util"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    schema = require("../../utils/model/model_schema"),
    windowHeight = 0,
    ipxDangerBottom = mixinCss.ipxDangerBottom,
    MMLIFEAPP_IMPRESSION_STATUS_VALID = 0,
    MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1,
    MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;Component({ properties: { impressionId: String, commentCount: Number, shouldAutoFocus: Number, scene: Number, reportData: { type: Object, value: {} } }, data: { isFirstInit: !0, focus: !0, isIpx: util.isIpx(), ipxDangerBottom: mixinCss.ipxDangerBottom, mainCommentIndex: "", replyCommentIndex: "", panelHeight: 0, scrollViewHeight: 0, keyboardHeight: 0 }, created: function created() {
    windowHeight || (windowHeight = wx.getSystemInfoSync().windowHeight);
  }, attached: function attached() {
    this.setData({ totalCommentCount: this.data.commentCount });var e = .8 * windowHeight,
        t = e - util.rpx2px(112) - (this.data.isIpx ? util.rpx2px(ipxDangerBottom + 20 + 75) : util.rpx2px(125));this.setData({ panelHeight: e, scrollViewHeight: t, focus: 1 == this.data.shouldAutoFocus }), util.getCurrentPage().navigationBarColorWithMask ? wx.setNavigationBarColor(util.getCurrentPage().navigationBarColorWithMask) : wx.setNavigationBarColor({ frontColor: "#000000", backgroundColor: "#999999" }), this.loadComment();
  }, detached: function detached() {
    util.getCurrentPage().navigationBarColor ? wx.setNavigationBarColor(util.getCurrentPage().navigationBarColor) : wx.setNavigationBarColor({ frontColor: "#000000", backgroundColor: "#FFFFFF" });
  }, ready: function ready() {}, methods: { hideMask: function hideMask(e) {
      this.triggerEvent("hidecommmentpanel", {});
    }, loadComment: function loadComment() {
      var e = this;this.setData({ continueFlag: 0, impressionCommentContext: "" });var t = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetImpressionComment", { impressionId: e.data.impressionId, location: t }).send(function (t) {
        if (t.impression) {
          e.setData({ continueFlag: t.continueFlag, impressionCommentContext: t.context, isFirstInit: !1 });var n = t.comment || [],
              a = {};if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) a = t.impression.comment;else if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) {
            if (!t.impression.payRecommendPoiImpression || !t.impression.payRecommendPoiImpression.id) return void console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");a = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression);
          }if (a.id) {
            var o = a.contact.type,
                i = e.generateMainComments(n, o);a.isLike, a.likeCount;e.setData({ mainComments: i, totalCommentCount: a.subCommentCount || 0, showBottomLoadingView: !0, contactType: o }), declareBinding({ instance: e, schema: schema.ContactSchema, arrayPath: "mainComments", mapping: { "contact.userId": "id", "contact.follow": "follow", "contact.ugc.fansCount": "fansCount" } }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: e.data.impressionId, commentCount: e.data.totalCommentCount });
          } else console.error("no valid impression object data, return!");
        } else console.error("no data.impression");
      }, function (t) {
        if (console.error("GetImpressionComment failed, error: " + JSON.stringify(t)), t && t.errorCode && -10003 == t.errorCode) {
          if (!t.data || !t.data.impression) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression data"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), wx.showToast({ title: "该内容已被发布者删除", icon: "none", duration: 2500 }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (t.data.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) return console.error("GetImpressionComment failed, errorCode is -10003 type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), wx.showToast({ title: "该内容已被发布者删除", icon: "none", duration: 2500 }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (!t.data.impression.comment) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression.comment data"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), wx.showToast({ title: "该内容已被发布者删除", icon: "none", duration: 2500 }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_VALID) e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), wx.showToast({ title: "该内容已被发布者删除", icon: "none", duration: 2500 }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });else if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_UNREAL || t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID) {
            var n = t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID ? reportEnum.enumPageState.IMPRESSION_INVALID : reportEnum.enumPageState.IMPRESSION_INVALID2;e.setData({ impressionState: -2, contentErrorText: "该内容违反了平台相关规定，无法查看。", pageState: n }), wx.showToast({ title: "该内容违反了平台相关规定，无法查看", icon: "none", duration: 2500 }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });
          } else console.error("GetImpressionComment failed, errorCode is -10003, unknown impression.comment.status"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), wx.showToast({ title: "该内容已被发布者删除", icon: "none", duration: 2500 }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });
        } else console.error("GetImpressionComment failed, other error"), e.setData({ impressionState: -99, contentErrorText: "内容获取失败", pageState: reportEnum.enumPageState.UNKNOWN }), wx.showToast({ title: "内容获取失败", icon: "none", duration: 2500 });
      });
    }, generateMainComments: function generateMainComments(e, t) {
      var n = [];return e.forEach(function (e) {
        var a = {};a.id = e.mainComment.id, a.contact = e.mainComment.contact, a.nickName = e.mainComment.contact.remark || e.mainComment.contact.nickName, 0 === t && 1 === e.mainComment.contact.type && (a.nickName = a.nickName + "(朋友)"), a.headImgUrl = e.mainComment.contact.headImgUrl, a.timeStr = util.getDateFormatString(e.mainComment.createTime), a.commentContent = JSON.parse(e.mainComment.info).content.replace(/^\s+|\s+$/g, ""), a.isDeleted = e.mainComment.deleted, a.isSelf = 0 == e.mainComment.contact.type, e.replyComment && e.replyComment.length && (a.replyComments = e.replyComment.map(function (e) {
          var n = e.contact.remark || e.contact.nickName;0 === t && 1 === e.contact.type && (n += "(朋友)");var a = "";return e.replyContact && (a = e.replyContact.remark || e.replyContact.nickName, 0 === t && 1 === e.replyContact.type && (a += "(朋友)")), { id: e.id, nickName: n, repliedNickName: a, commentContent: JSON.parse(e.info).content.replace(/^\s+|\s+$/g, ""), isSelf: 0 == e.contact.type };
        })), a.isDeleted ? console.log("Comment is Deleted") : (console.log("Comment is not Deleted, add"), n.push(a));
      }), n;
    }, getNextComments: function getNextComments() {
      var e = this,
          t = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetImpressionComment", { impressionId: e.data.impressionId, location: t, context: e.data.impressionCommentContext }).send(function (t) {
        e.setData({ continueFlag: t.continueFlag, impressionCommentContext: t.context });var n = t.comment || [],
            a = e.data.contactType,
            o = e.generateMainComments(n, a);o = e.data.mainComments.concat(o);var i = e.data.totalCommentCount;if (t.impression) {
          var r = {};t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT ? r = t.impression.comment : t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION && (t.impression.payRecommendPoiImpression && t.impression.payRecommendPoiImpression.id ? r = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression) : console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!")), r.subCommentCount && (i = r.subCommentCount, app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: e.data.impressionId, commentCount: i }));
        }e.setData({ mainComments: o, totalCommentCount: i, showBottomLoadingView: !0 });
      });
    }, bindscrolltolower: function bindscrolltolower() {
      this.data.continueFlag && this.getNextComments();
    }, postComment: function postComment(e) {
      var t = this;if (e) {
        var n = 0,
            a = util.getCurrentPage().mmReportData;a && (n = a.pageName);var o = "",
            i = 0,
            r = 0;t.data.reportData && t.data.reportData.recId && (o = t.data.reportData.recId), t.data.reportData && t.data.reportData.recType && (i = t.data.reportData.recType), t.data.reportData && t.data.reportData.scene && (r = t.data.reportData.scene), new cgi.SimpleRequest("PostImpressionComment", { baseRequest: { pageId: n, scene: r }, impressionId: t.data.impressionId, referId: t.data.currentReferId, replyId: t.data.currentReplyId, info: JSON.stringify({ content: e.replace(/^\s+|\s+$/g, "") }), requestId: util.uuid(), recId: o, recType: i }).ensureNoSameUrlProcessing().send(function (e) {
          t.data.lastReferId = t.data.currentReferId, t.data.lastReplyId = t.data.currentReplyId, t.setData({ placeholder: "发表评论", inputValue: "", currentReferId: "", currentReplyId: "" }), t.data.lastReferId ? t.loadLocalComment(t.data.lastInputText, e.commentId, t.data.lastReplyId) : t.loadLocalMainComment(t.data.lastInputText, e.commentId), t.data.lastInputText = "", util.toast("评论成功");
        }, function (e) {
          console.log("PostImpressionComment resp failed", e);var n = "评论失败",
              a = !1;e && e.errorCode && -10012 == e.errorCode ? (a = !0, n = "印象已删除，无法评论。", app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: t.data.impressionId })) : e && e.errorCode && -10013 == e.errorCode ? (a = !0, n = "评论已删除，无法回复。", t.deleteLocalComment(t.data.lastMainIndex, t.data.lastReplyIndex)) : n = util.getPostImpressionCommentErrorMessage(e), a && (t.data.lastReferId = "", t.data.lastReplyId = "", t.data.lastMainIndex = -1, t.data.lastReplyIndex = -1, t.setData({ placeholder: "发表评论", inputValue: "", lastInputText: "", focus: !1, showInputKeyboardMask: !1, currentReferId: "", currentReplyId: "" })), util.hideLoading(), wx.showToast({ title: n, icon: "none", duration: 2e3 });
        });
      }
    }, bindConfirm: util.throttleWithTrailingCancelling(function (e) {
      e.detail.value && 0 !== e.detail.value.length && 0 !== e.detail.value.trim().length ? (this.setData({ placeholder: "发表评论", inputValue: "" }), this.postComment(e.detail.value)) : wx.showModal({ content: this.data.warningMsg, showCancel: !1 });
    }, 1e3), bindBlur: function bindBlur(e) {
      this.setData({ keyboardHeight: 0 }), this.data.lastReferId = this.data.currentReferId, this.data.lastReplyId = this.data.currentReplyId;var t = "";this.data.currentReferId && 0 != this.data.currentReferId.length || this.data.currentReplyId && 0 != this.data.currentReplyId.length || (t = this.data.lastInputText || ""), this.setData({ placeholder: "发表评论", focus: !1, inputValue: t, showInputKeyboardMask: !1, currentReferId: "", currentReplyId: "" });
    }, bindFocus: function bindFocus(e) {
      var t = e.detail.height;this.setData({ keyboardHeight: t });var n = "";this.data.currentReferId == this.data.lastReferId && this.data.currentReplyId == this.data.lastReplyId ? n = this.data.lastInputText : this.data.lastInputText = "", this.setData({ focus: !0, inputValue: n });
    }, bindInput: function bindInput(e) {
      this.data.lastInputText = e.detail.value;
    }, bindtapMainComment: function bindtapMainComment(e) {
      if (!this.data.focus) {
        var t = e.currentTarget.dataset.nickname,
            n = e.currentTarget.dataset.id,
            a = e.currentTarget.dataset.isSelf;this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex;var o = this.data.mainCommentIndex;if (a) return this.setData({ focus: !1 }), void this.showDeleteActionSheet(o, -1, n, "");this.data.lastMainIndex = o, this.data.lastReplyIndex = -1;var i = "";n == this.data.lastReferId && "" == this.data.lastReplyId && (i = this.data.lastInputText || ""), this.setData({ placeholder: "回复" + t, focus: !0, inputValue: i, currentReferId: n, currentReplyId: "" });
      }
    }, bindtapReplyComment: function bindtapReplyComment(e) {
      var t = e.currentTarget.dataset.nickname,
          n = e.currentTarget.dataset.replyid,
          a = e.currentTarget.dataset.referid,
          o = e.currentTarget.dataset.isSelf;this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex;var i = this.data.mainCommentIndex,
          r = this.data.replyCommentIndex;if (o) return this.setData({ focus: !1 }), void this.showDeleteActionSheet(i, r, a, n);this.data.lastMainIndex = i, this.data.lastReplyIndex = r;var s = "";a == this.data.lastReferId && n == this.data.lastReplyId && (s = this.data.lastInputText), this.setData({ placeholder: "回复" + t, warningMsg: "不能回复空白消息", focus: !0, inputValue: s || "", currentReferId: a, currentReplyId: n, repliedName: t });
    }, showDeleteActionSheet: function showDeleteActionSheet(e, t, n, a) {
      var o = this;wx.showActionSheet({ itemList: ["删除"], itemColor: "#000", success: function success(i) {
          wx.showModal({ title: "提示", content: "要删除这条评论吗？", cancelText: "取消", confirmText: "删除", success: function success(i) {
              i.confirm ? (console.log("delete impression comment，confirm"), o.deleteComment(e, t, n, a)) : i.cancel && console.log("delete impression comment，cancel");
            } });
        } });
    }, deleteComment: function deleteComment(e, t, n, a) {
      var o = this;util.showLoading();var i = t >= 0 ? a : n;new cgi.SimpleRequest("DelImpressionComment", { impressionId: o.data.impressionId, commentId: i }).send(function (n) {
        util.hideLoading(), util.toast("删除成功"), o.deleteLocalComment(e, t);
      }, function (e) {
        console.log("DelImpressionComment resp failed", e), util.hideLoading(), util.hint("删除失败");
      });
    }, deleteLocalComment: function deleteLocalComment(e, t) {
      var n = this.data.mainComments,
          a = this.data.totalCommentCount;if (e < 0 || e >= n.length) console.error("invalid mainCommentIndex: " + e);else {
        if (t < 0) {
          var o = n[e],
              i = 1;o.replyComments && o.replyComments.length && (i += o.replyComments.length), n.splice(e, 1), a -= i;
        } else {
          if (t >= n[e].replyComments.length) return void console.error("invalid replyCommentIndex: " + t);n[e].replyComments.splice(t, 1), a -= 1;
        }a < 0 && (console.error("deleteLocalComment: new totalCommentCount < 0"), a = 0), this.setData({ mainComments: n, totalCommentCount: a }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: a });
      }
    }, loadLocalComment: function loadLocalComment(e, t, n) {
      var a,
          o = this.data.mainCommentIndex,
          i = this.data.totalCommentCount,
          r = this.data.mainComments;if (o < 0 || o >= r.length) console.error("invalid mainCommentIndex: " + o);else {
        var s = r[o].replyComments || [],
            m = s.length || 0,
            d = { id: t, commentContent: e, isSelf: !0, nickName: app.globalData.userInfo.nickName, repliedNickName: n ? this.data.repliedName : "" };s.push(d), i++, this.setData((_defineProperty(a = {}, "mainComments[" + o + "].replyComments[" + m + "]", d), _defineProperty(a, "totalCommentCount", i), a)), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: i });
      }
    }, loadLocalMainComment: function loadLocalMainComment(e, t) {
      var n = this.data.totalCommentCount;n++;var a = this.data.mainComments || [],
          o = this.generateMainComments([{ mainComment: { contact: Object.assign({}, app.globalData.userInfo, { type: 0 }), createTime: new Date().getTime() / 1e3, id: t, info: JSON.stringify({ content: e }) } }], this.data.contactType)[0];a.unshift(o), this.setData({ mainComments: a, totalCommentCount: n }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: n });
    }, noop: function noop() {}, bindtapToUserProfile: function bindtapToUserProfile(e) {
      var t = e.currentTarget.dataset.contact;0 == t.type ? wx.navigateTo({ url: "/pages/me/me" }) : wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t)) });
    }, onLongPressMainComment: function onLongPressMainComment(e) {
      console.log("onLongPressMainComment, e: " + JSON.stringify(e));e.currentTarget.dataset.nickname;var t = e.currentTarget.dataset.id;e.currentTarget.dataset.isSelf;this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex;this.data.mainCommentIndex;this.setData({ focus: !1 }), this.showComplainActionSheet(t, "");
    }, onLongPressReplyComment: function onLongPressReplyComment(e) {
      console.log("onLongPressReplyComment, e: " + JSON.stringify(e));e.currentTarget.dataset.nickname;var t = e.currentTarget.dataset.replyid,
          n = e.currentTarget.dataset.referid;e.currentTarget.dataset.isSelf;this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex;this.data.mainCommentIndex, this.data.replyCommentIndex;this.setData({ focus: !1 }), this.showComplainActionSheet(n, t);
    }, showComplainActionSheet: function showComplainActionSheet(e, t) {
      var n = t && t.length ? t : e;if (n && n.length) {
        var a = this;console.log("showComplainActionSheet"), wx.showActionSheet({ itemList: ["投诉"], itemColor: "#000", success: function success(e) {
            wx.navigateTo({ url: "/pages/complain_page/complain_page?impressionId=" + a.data.impressionId + "&commentId=" + n });
          } });
      } else console.error("cannot showComplainActionSheet, invalid parameters, referId: " + e + ", replyId: " + t);
    } } }); 
 			}); 	require("components/comment_panel/comment_panel.js");
 		__wxRoute = 'components/comment_text/comment_text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/comment_text/comment_text.js';	define("components/comment_text/comment_text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    PROPER_COMMENT_CHAR_COUNT = 35,
    MAX_COMMENT_COUNT = 50,
    MAX_NEWLINE_COUNT = 2,
    MIN_COMMENT_CHAR_COUNT = 15;Component({ properties: { content: { type: String, value: "", observer: function observer(t, e) {
        var n = t.replace(/^\s+|\s+$/g, "");this.setData({ content: n });
      } }, externalClass: { type: String, value: "" } }, data: { shouldShowEllipse: !1, shouldShowButton: !1 }, attached: function attached() {
    var t = this.getContentClipped();t.length < this.data.content.length && this.setData({ contentClipped: t + "...", shouldShowEllipse: !0, shouldShowButton: !0 });
  }, methods: { getContentClipped: function getContentClipped() {
      var t = this.data.content,
          e = -1,
          n = t.match(/(\r?)\n(\s*)(\r?)\n/);if (n && n.index > 0 && (e = n.index), e > 0 && (t = t.substring(0, e) + "\n"), t.length <= PROPER_COMMENT_CHAR_COUNT) {
        var s = t.match(/\n/g);if (!s || s.length <= MAX_NEWLINE_COUNT) return t;
      }for (var i = 0, l = 0, o = [], h = /[,，.。!！?？、\s]/g, a = void 0, r = 0; null != (a = h.exec(t));) {
        o.push({ oneSentenceContent: t.substring(r, a.index + 1), isUsed: !1 }), r = a.index + 1;
      }o.push({ oneSentenceContent: t.substring(r, t.length), isUsed: !1 });for (var C = 0; C < o.length; C++) {
        var u = o[C],
            d = u.oneSentenceContent;if ("\n" === d[d.length - 1] && l++, u.isUsed = !0, (i += d.length) > PROPER_COMMENT_CHAR_COUNT) break;if (l >= MAX_NEWLINE_COUNT) break;
      }if (i === t.length) return t;for (var N = "", _ = 0; _ < o.length; _++) {
        var g = o[_];if (!g.isUsed) break;N += g.oneSentenceContent;
      }return t.length - N.length <= MIN_COMMENT_CHAR_COUNT ? t : (N.length > MAX_COMMENT_COUNT && (N = N.substr(0, MAX_COMMENT_COUNT)), N);
    }, bindtapShowAll: function bindtapShowAll() {
      this.triggerEvent("showall", { shouldShowEllipse: this.data.shouldShowEllipse }), this.setData({ shouldShowEllipse: !this.data.shouldShowEllipse });
    } } }); 
 			}); 	require("components/comment_text/comment_text.js");
 		__wxRoute = 'components/comment_text_search/comment_text_search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/comment_text_search/comment_text_search.js';	define("components/comment_text_search/comment_text_search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    MAX_COMMENT_CHAR_COUNT = 60;Component({ properties: { content: { type: String, value: "", observer: function observer(e, n) {
        var t = e.replace(/^\s+|\s+$/g, "");this.setData({ content: t });
      } }, hitInfo: { type: Object, value: {}, observer: function observer(e, n) {} } }, data: { shouldShowAll: !0, shouldShowAllButton: !1 }, ready: function ready() {
    if (this.data.content && this.data.hitInfo) {
      var e = this.data.hitInfo,
          n = this.data.content,
          t = [];if (e && e.hitField && e.hitField[0] && e.hitField[0].field && e.hitField[0].field[0] && e.hitField[0].field[0].segWord && e.hitField[0].field[0].segWord.length) {
        var s = e.hitField[0].field[0].segWord,
            o = [];s.forEach(function (e) {
          e.hitPos.forEach(function (n) {
            o.push({ word: e.word, hitPos: n });
          });
        }), o.sort(function (e, n) {
          return e.hitPos < n.hitPos ? -1 : e.hitPos > n.hitPos ? 1 : 0;
        });var i = [],
            h = null;o.forEach(function (e) {
          h && h.hitPos === e.hitPos && h.word === e.word || (i.push(e), h = e);
        });var r = 0;if ((o = i).forEach(function (e) {
          var s = e.word,
              o = s.length,
              i = util.utf8Index2StrIndex(n, e.hitPos, s);-1 != i && (t.push({ subContent: n.substring(r, i), isMatched: !1 }), t.push({ subContent: n.substring(i, i + o), isMatched: !0 }), r = i + o);
        }), t.push({ subContent: n.substring(r, n.length), isMatched: !1 }), this.setData({ matchArr: t }), n.length <= MAX_COMMENT_CHAR_COUNT) return;var c = [],
            l = t.length,
            d = 0;if (t.forEach(function (e, n) {
          if (e.isMatched) e.type = "keyword", d += e.subContent.length;else {
            var t = e.subContent;e.sentences = [];for (var s = /[,，.。!！?？\s]/g, o = void 0, i = 0; null != (o = s.exec(t));) {
              e.sentences.push({ oneSentence: t.substring(i, o.index + 1), isUsed: !1 }), i = o.index + 1;
            }e.sentences.push({ oneSentence: t.substring(i, t.length), isUsed: !1 }), 0 == n ? (e.type = "beforeKeyword", e.sentences[e.sentences.length - 1].isUsed = !0, d += e.sentences[e.sentences.length - 1].oneSentence.length) : l - 1 == n ? (e.type = "afterKeyword", e.sentences[0].isUsed = !0, d += e.sentences[0].oneSentence.length) : (e.type = "betweenKeywords", 1 == e.sentences.length ? (e.sentences[0].isUsed = !0, d += e.sentences[0].oneSentence.length) : e.sentences.length > 1 && (e.sentences[0].isUsed = !0, e.sentences[e.sentences.length - 1].isUsed = !0, d += e.sentences[0].oneSentence.length + e.sentences[e.sentences.length - 1].oneSentence.length));
          }
        }), d < MAX_COMMENT_CHAR_COUNT && t.some(function (e, n) {
          if ("beforeKeyword" == e.type) {
            for (var t = e.sentences.length - 2; t >= 0 && (e.sentences[t].isUsed = !0, !((d += e.sentences[t].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); t--) {}if (d > MAX_COMMENT_CHAR_COUNT) return !0;
          } else if ("betweenKeywords" == e.type) {
            for (var s = 1; s <= e.sentences.length - 2 && (e.sentences[s].isUsed = !0, !((d += e.sentences[s].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); s++) {}if (d > MAX_COMMENT_CHAR_COUNT) return !0;
          } else if ("afterKeyword" == e.type) {
            for (var o = 1; o <= e.sentences.length - 1 && (e.sentences[o].isUsed = !0, !((d += e.sentences[o].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); o++) {}if (d > MAX_COMMENT_CHAR_COUNT) return !0;
          }
        }), d == n.length) return;t.forEach(function (e) {
          if ("keyword" == e.type) c.push(e);else if ("beforeKeyword" == e.type) {
            for (var n = "", t = 0; t < e.sentences.length; t++) {
              e.sentences[t].isUsed && (n += e.sentences[t].oneSentence);
            }e.sentences[0].isUsed || (n = "..." + n), c.push({ isMatched: !1, subContent: n });
          } else if ("betweenKeywords" == e.type) {
            for (var s = "", o = !1, i = 0; i <= e.sentences.length - 1; i++) {
              e.sentences[i].isUsed ? s += e.sentences[i].oneSentence : o || (s += "...", o = !0);
            }c.push({ isMatched: !1, subContent: s });
          } else if ("afterKeyword" == e.type) {
            for (var h = "", r = 0; r <= e.sentences.length - 1; r++) {
              if (!e.sentences[r].isUsed) {
                h += "...";break;
              }h += e.sentences[r].oneSentence;
            }c.push({ isMatched: !1, subContent: h });
          }
        }), this.setData({ shouldShowAll: !1, shouldShowAllButton: !0, matchedArrClipped: c });
      }
    }
  }, methods: { bindtapToggleAll: function bindtapToggleAll() {
      this.setData({ shouldShowAll: !this.data.shouldShowAll });
    } } }); 
 			}); 	require("components/comment_text_search/comment_text_search.js");
 		__wxRoute = 'components/content_error/content_error';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/content_error/content_error.js';	define("components/content_error/content_error.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util"),
    mixinCss = require("../../utils/mixinCss");Component({ properties: { text: { type: String, value: "内容获取失败" }, showLink: { type: Boolean, value: !1 } }, data: { isIpx: util.isIpx(), ipxFtPadding: mixinCss.ipxFtPadding }, ready: function ready(e) {
    console.log("error-screen, ready: " + JSON.stringify(e));
  }, methods: { onTapShowRulesDetail: function onTapShowRulesDetail(e) {
      console.log("error-screen, onTapShowRulesDetail");wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2") });
    } } }); 
 			}); 	require("components/content_error/content_error.js");
 		__wxRoute = 'components/dropdown_menu/dropdown_menu';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/dropdown_menu/dropdown_menu.js';	define("components/dropdown_menu/dropdown_menu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { options: { type: Array, value: [], observer: function observer(t, e, n) {
        t.length <= 1 ? this.setData({ isToggleDisabled: !0 }) : this.setData({ isToggleDisabled: !1 }), this.getName();
      } }, selectedId: { type: String, value: "", observer: function observer(t, e, n) {
        this.getName();
      } }, styleType: { type: String, value: "dark" } }, data: { selectedName: "", isToggleDisabled: !0, isDropdownContentShown: !1 }, lifetimes: { attached: function attached() {
      this.getName();
    } }, methods: { getName: function getName() {
      var t = this;t.data.options.length && t.data.selectedId && t.data.options.some(function (e) {
        if (t.data.selectedId === e.id) return t.setData({ selectedName: e.name }), !0;
      });
    }, hideMask: function hideMask(t) {
      this.setData({ isDropdownContentShown: !1 });
    }, onToggleDropdown: function onToggleDropdown() {
      this.setData({ isDropdownContentShown: !this.data.isDropdownContentShown });
    }, onTapSelect: function onTapSelect(t) {
      var e = t.currentTarget.dataset.id,
          n = t.currentTarget.dataset.name;this.setData({ selectedId: e, selectedName: n, isDropdownContentShown: !1 }), this.triggerEvent("select", { id: e });
    }, noop: function noop() {} } }); 
 			}); 	require("components/dropdown_menu/dropdown_menu.js");
 		__wxRoute = 'components/find_poi/find_poi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/find_poi/find_poi.js';	define("components/find_poi/find_poi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _data;function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}var cgi = require("../../utils/cgi"),
    app = getApp(),
    util = require("../../utils/util"),
    questionStorage = require("../../utils/questionStorage"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    storage = require("../../utils/storage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    mixinCss = require("../../utils/mixinCss"),
    chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    schema = require("../../utils/model/model_schema");Component({ properties: { props: { type: Object, observer: function observer(e, t, a) {
        this.hasAttached && this.render();
      } } }, data: (_data = { shouldShowBottomLoading: !0, context: "", continueFlag: 1, poiList: [], reasonId: 0, shouldShowMask: !1, shouldShowFilterFixed: !1, areaCategory: [], shouldShowAreaCategoryPanel: !1, resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" }, _defineProperty(_data, "areaCategoryLeftId", "localId_10"), _defineProperty(_data, "areaCategoryRightId", "localId_12"), _defineProperty(_data, "menuCategory", [{ id: "wx_filter0", name: "全部类别" }]), _defineProperty(_data, "shouldShowMenuCategoryPanel", !1), _defineProperty(_data, "resultSelectedMenuCategoryId", ""), _defineProperty(_data, "resultSelectedMenuCategoryName", "菜系"), _defineProperty(_data, "orderOptions", [{ id: "2", name: "综合排序" }, { id: "1", name: "距离优先" }]), _defineProperty(_data, "shouldShowOrderPanel", !1), _defineProperty(_data, "resultSelectedOrderId", "2"), _defineProperty(_data, "resultSelectedOrderName", "综合排序"), _defineProperty(_data, "isInited", !1), _data), hasAttached: 0, created: function created() {
    Object.assign(this, { hasAttached: 0, mmReportData: { pageRequestId: "", pageName: "" } });
  }, attached: function attached() {
    var e = this;e.hasAttached = 1, e.render(), app.addLaunchListener(function () {
      app.checkAndUpdateUserCurrentLocation();appLaunchData.isUsingRealCurrentLocation();e.setData({ resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" });var t = appLaunchData.getUserLocation();new cgi.SimpleRequest("getcategory", { location: t }).send(function (t) {
        var a = t.area,
            r = [];a.forEach(function (e) {
          var t = {};t.name = e.name, t.id = e.id, e.subCategory && e.subCategory.length && (t.subCategory = e.subCategory), r.push(t);
        }), r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_12", name: "1公里" }, { id: "localId_13", name: "2公里" }, { id: "localId_14", name: "5公里" }] });var o = t.friendPoiCategory.map(function (e) {
          return { id: e.id, name: e.name, label: e.name + "(" + e.poiCount + ")" };
        }),
            i = 0;t.friendPoiCategory.forEach(function (e) {
          return i += e.poiCount;
        }), o.unshift({ id: "wx_filter0", name: "全部类别", label: "全部类别(" + i + ")" }), e.setData({ areaCategory: r, menuCategory: o });
      });
    });
  }, methods: { mmReportData: { pageRequestId: 0, pageName: "" }, isFirstInit: !0, render: function render() {
      this.mmReportData.pageName = this.data.props.pageName, this.mmReportData.scene = this.data.props.scene, this.setData({ filtersTop: this.data.props.filtersTop });
    }, getDetailPoiList: function getDetailPoiList(e) {
      var t = this;t.setData({ shouldShowBottomLoading: !0 }), e || (t.setData({ poiList: [], context: "" }), t.mmReportData.pageRequestId = util.getTimeRandomId(), t.mmReportData.requestIdStr = util.guid());var a = {};t.data.resultSelectedAreaCategoryId && ("localId_10" == t.data.resultSelectedAreaCategoryId || ("localId_11" == t.data.resultSelectedAreaCategoryId ? (a.radius = 3e4, t.mmReportData.area = 3e4) : "localId_12" == t.data.resultSelectedAreaCategoryId ? (a.radius = 1e3, t.mmReportData.area = 1e3) : "localId_13" == t.data.resultSelectedAreaCategoryId ? (a.radius = 2e3, t.mmReportData.area = 2e3) : "localId_14" == t.data.resultSelectedAreaCategoryId ? (a.radius = 5e3, t.mmReportData.area = 5e3) : (a.areaId = t.data.resultSelectedAreaCategoryId, t.mmReportData.area = t.data.resultSelectedAreaCategoryId))), t.data.resultSelectedMenuCategoryId && (a.categoryId = [t.data.resultSelectedMenuCategoryId], t.mmReportData.menuCategoryId = t.data.resultSelectedMenuCategoryId), t.data.resultSelectedOrderId && (a.sortType = +t.data.resultSelectedOrderId, t.mmReportData.sortType = t.data.resultSelectedOrderId);var r = appLaunchData.getUserLocation();if (t.isFirstInit) {
        t.isFirstInit = !1;var o = new Date().getTime();appLaunchData.isUsingRealCurrentLocation() || appLaunchData.addConfirmUserLocationListener(function () {
          appLaunchData.isUsingRealCurrentLocation() && new Date().getTime() - o <= 3e3 && t.getDetailPoiList();
        });
      }new cgi.SimpleRequest("GetPoiList", { location: r, options: a, context: t.data.context, requestId: t.mmReportData.requestIdStr }).ensureNoSameUrlProcessing().send(function (a) {
        if (wx.stopPullDownRefresh(), t.data.isInited = !0, t.data.context = a.context, t.data.continueFlag = a.continueFlag, !a.poi && !t.data.poiList.length) return t.setData({ shouldShowBottomLoading: !1 }), void wx.showToast({ title: "没有发现符合条件的门店", icon: "none", duration: 2500 });var r = [];if (t.mmPrevPage && t.mmPrevPage.mmReportData.pageName && t.mmPrevPage.mmReportData.pageName, a.poi.forEach(function (e) {
          r.push({ poi: renderDataUtil.getRenderPoiInfo(e), reportData: { pageId: reportEnum.enumPageName.TIMELINE, scene: reportEnum.enumSceneType.FIND_POI, prevPageId: 0, menuCategoryId: t.mmReportData.menuCategoryId || "", price: t.mmReportData.price || "", area: t.mmReportData.area || "", query: t.mmReportData.query || "", requestId: t.mmReportData.requestIdStr || "", sortType: t.mmReportData.sortType || "" } });
        }), e) {
          for (var o = t.data.poiList, i = r, d = {}, s = o.length; s < o.length + i.length; s++) {
            d["poiList[" + s + "]"] = i[s - o.length];
          }t.setData(d);
        } else t.setData({ poiList: r });t.setData({ shouldShowBottomLoading: !1 });
      });
    }, setPanelStyle: function setPanelStyle() {
      var e = app.globalData.pageFriendsTimeline;e.scrollTop <= e.findPoi_scrollTop4FilterSticky ? this.setData({ useAbs: 1 }) : this.setData({ useAbs: 0, top: e.findPoi_filterPanelFixedTop });
    }, bindtapMenuFilter: function bindtapMenuFilter(e) {
      this.setPanelStyle(), this.data.shouldShowMenuCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !0, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 });
    }, bindtapAreaFilter: function bindtapAreaFilter(e) {
      this.setPanelStyle(), this.data.shouldShowAreaCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !0, shouldShowOrderPanel: !1 });
    }, bindtapOrderFilter: function bindtapOrderFilter() {
      this.setPanelStyle(), this.data.shouldShowOrderPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !0 });
    }, bindtapMask: function bindtapMask(e) {
      this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 });
    }, bindMenuCategorySelect: function bindMenuCategorySelect(e) {
      console.log("bindMenuCategorySelect", e);var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedMenuCategoryId: t, resultSelectedMenuCategoryName: a }), this.bindtapMask(), this.getDetailPoiList();
    }, bindAreaCategorySelect: function bindAreaCategorySelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedAreaCategoryId: t, resultSelectedAreaCategoryName: a }), this.bindtapMask(), this.getDetailPoiList();
    }, bindOrderSelect: function bindOrderSelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedOrderId: t, resultSelectedOrderName: a }), this.bindtapMask(), this.getDetailPoiList();
    }, onReachBottom: function onReachBottom(e) {
      this.data.continueFlag && this.getDetailPoiList(!0);
    }, noop: function noop() {} } }); 
 			}); 	require("components/find_poi/find_poi.js");
 		__wxRoute = 'components/image_loader/image_loader';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/image_loader/image_loader.js';	define("components/image_loader/image_loader.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util"),
    mediaBehaviors = require("../../behaviors/media-behaviors"),
    app = getApp();Component({ behaviors: [mediaBehaviors], properties: { media: { type: Object, value: {}, observer: function observer(i, t, a) {
        i && 1 === i.type ? this.setData({ posterSrc: i.thumbUrl }) : i && this.setData({ imageSrc: i.midImageUrl || i.url });
      } }, fixedWidth: { type: Number }, switchHighRes: { type: Boolean, value: !1 } }, observers: { media: function media(i) {
      this.data.media;
    }, imgSrc: function imgSrc(i) {
      1 === this.data.media.type ? this.data.posterSrc = this.data.media.thumbUrl : this.data.imgSrc = this.data.media.midImageUrl || this.data.media.url;
    } }, data: { imgMode: "aspectFill", highResSrc: "", showOnlyHighRes: !1 }, lifetimes: { attached: function attached() {
      var i = this.data.fixedWidth ? this.data.fixedWidth : this.data.media.width;this.setData({ imgHeight: this.data.media.height || 286, imgWidth: i || 340, imgMarginBottom: this.data.media.marginBottom || 0, imgMarginRight: this.data.media.marginRight || 0, imgType: this.data.media.type || 0, imgSrc: this._getMediaInfo(this.data.media).mediaSrc, highResSrc: this.data.media.url || "" });
    }, ready: function ready() {} }, pageLifetimes: { show: function show() {}, hide: function hide() {} }, methods: { bindImageLoad: function bindImageLoad(i) {
      var t = this.data.media;1 === t.type && (t = Object.assign(this.data.media, { isPosterImage: !0 })), this.mediaKVReportBehavior(i, t);
    }, bindHighResImageLoad: function bindHighResImageLoad(i) {
      this.data.media;this.data.switchHighRes && this.setData({ showOnlyHighRes: !0 });
    } } }); 
 			}); 	require("components/image_loader/image_loader.js");
 		__wxRoute = 'components/impression/impression';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression/impression.js';	define("components/impression/impression.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    renderDataUtil = require("../../utils/render_data_util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session");Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(e, t, i) {
        this.data.hasAttached && this.render();
      } }, impressionDataIndex: { type: Number, value: 0, observer: function observer(e, t, i) {} }, impressionLayoutMaxPic: { type: Number, value: 3, observer: function observer(e, t, i) {} }, impressionCustomTheme: { type: String, value: "" } }, data: { impressionExtraStyle: "" }, attached: function attached() {
    this.render(), this.setData({ hasAttached: 1 });
  }, methods: { render: function render() {
      var e = this.data.impressionData,
          t = e.comment.createTime,
          i = util.getDateFormatString(t),
          r = renderDataUtil.getPoiInfo4Impression(e),
          n = e.comment.topic || [],
          o = e.reportData || {};o.recId = e.comment.recId || "", o.recType || (o.recType = e.comment.recType || 0);var a,
          s,
          m = { timeString: i, isMark: r.isMark, poiInfo: r, isUsingRealCurrentLocation: e.isUsingRealCurrentLocation, visitCount: r.visitCount, topicTags: util.normalizeArray(n), reportData: o, visitId: "", commentId: "", contact: {}, commentInfo: {}, originComment: {}, subComments: [] };a = e.comment.contact;var c = ((s = e.comment).subComment || []).map(function (e) {
        return { nickName: e.mainComment.contact.remark || e.mainComment.contact.nickName, content: JSON.parse(e.mainComment.info).content || "", id: e.mainComment.id };
      });m.commentId = e.comment.id, m.visitId = e.visitId || e.comment.id, m.originComment = s, m.contact = renderDataUtil.getFormattedContactInfo(a);var u = renderDataUtil.getCommentInfo4Impression(s, m, 0, a, this.data.impressionDataIndex, this.data.impressionLayoutMaxPic);m.commentInfo = u, m.subComments = c, this.setData({ renderData: m }), this.declareBindingForContact(m);
    } } }); 
 			}); 	require("components/impression/impression.js");
 		__wxRoute = 'components/impression_mark/impression_mark';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression_mark/impression_mark.js';	define("components/impression_mark/impression_mark.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    renderDataUtil = require("../../utils/render_data_util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session");Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(t, e, r) {
        this.data.hasAttached && this.render();
      } }, impressionDataIndex: { type: Number, value: 0, observer: function observer(t, e, r) {} } }, data: {}, attached: function attached() {
    this.setData({ hasAttached: 1 }), this.render();
  }, methods: { render: function render() {
      var t = this.data.impressionData,
          e = t.comment.createTime,
          r = util.getDateFormatString(e),
          i = renderDataUtil.getPoiInfo4Impression(t),
          n = t.reportData || {};n.recId = t.comment.recId || "";var o = t.comment.id || "";n.recType || (n.recType = t.comment.recType || 0);var a,
          s,
          m = { timeString: r, isMark: i.isMark, poiInfo: i, visitCount: i.visitCount, commentId: "", visitId: "", contact: {}, commentInfo: {}, originComment: {}, friendMarkCount: 1, markContacts: [], reportData: n, impressionId: o },
          c = [];a = t.comment.contact, s = t.comment;var d = t.markInfo;d && d.contact && d.contact.length > 0 && d.contact.map(function (t) {
        t.headImgUrl.length > 5 && c.length < 5 && c.push(t);
      }), m.markContacts = c, m.friendMarkCount = d.friendMarkCount ? d.friendMarkCount : 1, m.contact = a, m.commentId = t.comment.id, m.visitId = t.visitId || t.comment.id, m.originComment = s;var p = renderDataUtil.getCommentInfo4Impression(s, m, 2, a, this.data.impressionDataIndex);m.commentInfo = p, this.setData({ renderData: m }), this.declareBindingForPoi(m), this.declareBindingForContact(m);
    } } }); 
 			}); 	require("components/impression_mark/impression_mark.js");
 		__wxRoute = 'components/impression_me/impression_me';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression_me/impression_me.js';	define("components/impression_me/impression_me.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    renderDataUtil = require("../../utils/render_data_util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors");Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(t, e, i) {
        this.setData({ updateCommentCount: t.comment.subCommentCount || "" });
      } }, impressionDataIndex: { type: Number, value: 0, observer: function observer(t, e, i) {} }, showMoreOptions: { type: Boolean, value: !0 } }, data: {}, attached: function attached() {
    var t = this.data.impressionData,
        e = t.comment.createTime,
        i = util.getDateFormatString(e),
        o = {};t.poi && (o = renderDataUtil.getPoiInfo4Impression(t));var n,
        r,
        a = t.reportData || {},
        s = t.comment.topic || [],
        m = { createTime: e, timeString: i, isMark: o.isMark, poiInfo: o, visitCount: o.visitCount, topicTags: util.normalizeArray(s), visitId: t.comment.id, reportData: a, commentId: "", contact: {}, commentInfo: {}, originComment: {} };n = t.comment.contact, r = t.comment, m.commentId = t.comment.id, m.originComment = r, m.contact = n;var u = renderDataUtil.getCommentInfo4Impression(r, m, 2, "", this.data.impressionDataIndex);if (u.exposureCount && (u.exposureCount = util.formatNumberToTenThousand(u.exposureCount)), u.markCount && (u.markCount = util.formatNumberToTenThousand(u.markCount)), m.commentInfo = u, m.commentInfo.displayMediaList && m.commentInfo.displayMediaList[0]) {
      var d = m.commentInfo.displayMediaList[0],
          p = d.picLists;1 === p.length ? d.rowWidth = 226 : 2 === p.length ? d.rowWidth = 456 : 3 === p.length && (d.rowWidth = 686), d.rowHeight = 226;var c = -1;p.map(function (t, e) {
        return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === c && 1 === t.type && (t.isFirstVideo = !0, t.posterSrc = t.thumbUrl, c = 0, t.videoStyle = e + 1 + "-" + p.length + "--forward"), t;
      });
    }this.setData({ renderData: m }), this.declareBindingForPoi(m), this.declareBindingForContact(m);
  }, methods: { bindTapMoreOptions: function bindTapMoreOptions(t) {
      var e = {},
          i = t.currentTarget.dataset.index;e.index = i, this.triggerEvent("ontapmoreoptions", e);
    } } }); 
 			}); 	require("components/impression_me/impression_me.js");
 		__wxRoute = 'components/impression_poi/impression_poi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression_poi/impression_poi.js';	define("components/impression_poi/impression_poi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    renderDataUtil = require("../../utils/render_data_util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    MAX_PIC = 3;Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(t, e, i) {
        this.setData({ updateCommentCount: t.comment.subCommentCount || "" });
      } }, impressionDataIndex: { type: Number, value: 0, observer: function observer(t, e, i) {} } }, data: { canShare: util.canUseShareAppMessageAPI(), currentMedia: 0 }, created: function created() {}, detached: function detached() {}, attached: function attached() {
    var t = this.data.impressionData,
        e = t.comment.createTime,
        i = util.getDateFormatString(e),
        n = {};n = t.poi ? renderDataUtil.getPoiInfo4Impression(t) : t.poiTable;var o,
        a,
        r = t.reportData || {},
        m = { createTime: e, timeString: i, isMark: n.isMark, poiInfo: n, visitCount: n.visitCount, visitId: t.comment.id, reportData: r, commentId: "", contact: {}, commentInfo: {}, originComment: {}, subComments: [] };o = t.comment.contact;var s = ((a = t.comment).subComment || []).map(function (t) {
      return { nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName, content: JSON.parse(t.mainComment.info).content || "", id: t.mainComment.id };
    });m.commentId = t.comment.id, m.originComment = a, m.contact = renderDataUtil.getFormattedContactInfo(o);var c = renderDataUtil.getCommentInfo4Impression(a, m, 2, "", this.data.impressionDataIndex);if (m.commentInfo = c, m.subComments = s, m.commentInfo.displayMediaList && m.commentInfo.displayMediaList[0]) {
      var d = m.commentInfo.displayMediaList[0],
          u = d.picLists;1 === u.length ? d.rowWidth = 226 : 2 === u.length ? d.rowWidth = 456 : 3 === u.length && (d.rowWidth = 686), d.rowHeight = 226;var p = -1;u.map(function (t, e) {
        return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === p && 1 === t.type && (t.isFirstVideo = !0, t.posterSrc = t.thumbUrl, p = 0, t.videoStyle = e + 1 + "-" + u.length + "--forward"), t;
      });
    }this.setData({ renderData: m }), this.declareBindingForContact(m);
  }, methods: {} }); 
 			}); 	require("components/impression_poi/impression_poi.js");
 		__wxRoute = 'components/impression_search/impression_search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression_search/impression_search.js';	define("components/impression_search/impression_search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    renderDataUtil = require("../../utils/render_data_util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    MAX_PIC = 3;Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(t, e, i) {
        this.setData({ updateCommentCount: t.comment.subCommentCount || "" });
      } }, impressionDataIndex: { type: Number, value: 0, observer: function observer(t, e, i) {} }, hitInfo: { type: Array } }, data: { canShare: util.canUseShareAppMessageAPI(), currentMedia: 0 }, created: function created() {}, detached: function detached() {}, attached: function attached() {
    var t,
        e,
        i = this.data.impressionData,
        n = i.comment.createTime,
        o = util.getDateFormatString(n),
        a = renderDataUtil.getPoiInfo4Impression(i),
        r = i.reportData || {},
        m = i.comment.topic || [],
        s = { createTime: n, timeString: o, isMark: a.isMark, poiInfo: a, isUsingRealCurrentLocation: i.isUsingRealCurrentLocation, visitCount: a.visitCount, visitId: i.comment.id, topicTags: util.normalizeArray(m), reportData: r, commentId: "", contact: {}, commentInfo: {}, originComment: {}, hitInfo: i.hitInfo, subComments: [] };t = i.comment.contact;var c = ((e = i.comment).subComment || []).map(function (t) {
      return { nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName, content: JSON.parse(t.mainComment.info).content || "", id: t.mainComment.id };
    });s.commentId = i.comment.id, s.originComment = e, s.contact = renderDataUtil.getFormattedContactInfo(t);var d = renderDataUtil.getCommentInfo4Impression(e, s, 2, "", this.data.impressionDataIndex);if (s.commentInfo = d, s.subComments = c, s.commentInfo.displayMediaList && s.commentInfo.displayMediaList[0]) {
      var u = s.commentInfo.displayMediaList[0],
          p = u.picLists;1 === p.length ? u.rowWidth = 226 : 2 === p.length ? u.rowWidth = 456 : 3 === p.length && (u.rowWidth = 686), u.rowHeight = 226;var h = -1;p.map(function (t, e) {
        return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === h && 1 === t.type && (t.isFirstVideo = !0, t.posterSrc = t.thumbUrl, h = 0, t.videoStyle = e + 1 + "-" + p.length + "--forward"), t;
      });
    }this.setData({ renderData: s }), this.declareBindingForPoi(s), this.declareBindingForContact(s);
  }, methods: {} }); 
 			}); 	require("components/impression_search/impression_search.js");
 		__wxRoute = 'components/impression_small/impression_small';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/impression_small/impression_small.js';	define("components/impression_small/impression_small.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    renderDataUtil = require("../../utils/render_data_util"),
    impressionSmallContants = require("./impression_small_contants");Component({ behaviors: [impressionBehaviors], properties: { impressionData: { type: Object, value: {}, observer: function observer(t, e, i) {} }, impressionDataIndex: { type: Number, value: 0, observer: function observer(t, e, i) {} } }, data: {}, attached: function attached() {
    console.log("impression small attached");this.render(), this.setData({ hasAttached: 1 });
  }, detached: function detached() {
    console.log("impression small detached");
  }, methods: { render: function render() {
      var t = this.data.impressionData;t.comment || console.error("impressionData", t);var e = t.comment.createTime,
          i = util.getDateFormatString(e),
          a = renderDataUtil.getPoiInfo4Impression(t),
          n = (t.comment.tag, t.reportData || {});n.recId = t.comment.recId || "", n.recType || (n.recType = t.comment.recType || 0);var o,
          s,
          r = { timeString: i, isMark: a.isMark, poiInfo: a, isUsingRealCurrentLocation: t.isUsingRealCurrentLocation, visitCount: a.visitCount, reportData: n, visitId: "", commentId: "", contact: {}, commentInfo: {}, originComment: {}, subComments: [] };o = t.comment.contact;var m = ((s = t.comment).subComment || []).map(function (t) {
        return { nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName, content: JSON.parse(t.mainComment.info).content || "", id: t.mainComment.id };
      });r.commentId = t.comment.id, r.visitId = t.visitId || t.comment.id, r.originComment = s, r.contact = renderDataUtil.getFormattedContactInfo(o);var d = renderDataUtil.getCommentInfo4Impression(s, r, 0, o, this.data.impressionDataIndex, this.data.impressionLayoutMaxPic);d.mediaList && d.mediaList[0] && d.mediaList[0].height && d.mediaList[0].width && (d.firstMedia = util.clone(d.mediaList[0]), d.firstMedia.width = impressionSmallContants.width, d.firstMedia.height = 1 * impressionSmallContants.width * d.mediaList[0].height / d.mediaList[0].width, d.firstMedia.height > impressionSmallContants.mediaMaxHeight && (d.firstMedia.height = impressionSmallContants.mediaMaxHeight), 1 === d.firstMedia.type && (d.firstMedia.videoStyle = "1-1--small")), r.commentInfo = d, r.subComments = m, this.setData({ renderData: r }), this.declareBindingForContact(r);
    } } }); 
 			}); 	require("components/impression_small/impression_small.js");
 		__wxRoute = 'components/left_right_panel/left_right_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/left_right_panel/left_right_panel.js';	define("components/left_right_panel/left_right_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { category: { type: Array, value: [], observer: function observer(t, e) {
        this.initCategory(t);
      } }, selectedLeftId: String, selectedRightId: String }, data: {}, attached: function attached() {}, methods: { initCategory: function initCategory(t) {
      if (this.setData({ formattedCategory: this.formatCategory(t) }), this.data.category.length && !this.data.selectedLeftId && !this.data.selectedRightId) {
        var e = this.data.formattedCategory,
            a = e.lvlOneCategory[0].id,
            r = "";e.lvlTwoCategoryMap[a].length && (r = e.lvlTwoCategoryMap[a][0].id), this.setData({ selectedLeftId: a, selectedRightId: r });
      }
    }, formatCategory: function formatCategory(t) {
      var e = [],
          a = {};return t.forEach(function (t) {
        e.push({ id: t.id, name: t.name }), a[t.id] = t.subCategory || [];
      }), { lvlOneCategory: e, lvlTwoCategoryMap: a };
    }, bindtapCategoryItem: function bindtapCategoryItem(t) {
      var e = t.currentTarget.dataset.index,
          a = t.currentTarget.dataset.id;this.setData({ selectedLeftId: a, subCategory: this.data.category[e].subCategory || [] }), this.data.category[e].subCategory && this.data.category[e].subCategory.length || this.triggerEvent("leftrightselect", { id: a, name: t.currentTarget.dataset.name }, {});
    }, bindtapSubCategoryItem: function bindtapSubCategoryItem(t) {
      t.currentTarget.dataset.index;this.setData({ selectedRightId: t.currentTarget.dataset.id }), this.triggerEvent("leftrightselect", { id: t.currentTarget.dataset.id, name: t.currentTarget.dataset.name }, {});
    } } }); 
 			}); 	require("components/left_right_panel/left_right_panel.js");
 		__wxRoute = 'components/like/like';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/like/like.js';	define("components/like/like.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    cgi = require("../../utils/cgi"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    frames = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 9, -1];Component({ properties: { isLike: { type: Number, value: 0, observer: function observer(e, a, t) {} }, likeCount: { type: Number, value: 0, observer: function observer(e, a, t) {} }, commentId: { type: String, value: "", observer: function observer(e, a, t) {} }, reportData: { type: Object, value: {} } }, data: { animationImageIndex: 0, isAnimating: 0, imageUrl: "", currentPageId: 0 }, attached: function attached() {
    if (this.data.commentId) {
      var e = new CommentModel(this.data.commentId).getValue();null != e.isLike && this.setData({ isLike: e.isLike, likeCount: e.likeCount }), declareBinding({ instance: this, schema: CommentSchema, mapping: { commentId: "id", isLike: "isLike", likeCount: "likeCount" } });
    }
  }, methods: { catchTapLike: function catchTapLike(e) {
      var a = this;if (!a.data.isAnimating) {
        var t,
            i = a.data.likeCount,
            n = a.data.isLike ? 0 : 1,
            r = a.data.commentId;if (t = n ? i + 1 : i - 1, a.setData({ isLike: n, likeCount: t }), a.triggerEvent("likechange", { isLike: n, likeCount: t, commentId: r }, {}), 0 == a.data.currentPageId) {
          var o = getCurrentPages();if (o && o.length) {
            var d = o[o.length - 1];d && d.data && d.data.currentPageId && (a.data.currentPageId = d.data.currentPageId);
          }
        }app.addLaunchListener(function () {
          var e = {},
              t = "",
              i = 0;a.data.reportData && a.data.reportData.scene && (e.scene = a.data.reportData.scene), a.data.reportData && a.data.reportData.pageId && (e.pageId = a.data.reportData.pageId), a.data.reportData && a.data.reportData.recId && (t = a.data.reportData.recId), a.data.reportData && a.data.reportData.recType && (i = a.data.reportData.recType), new cgi.SimpleRequest("LikePoiComment", { baseRequest: e, commentId: r, flag: n, scene: a.data.currentPageId, recId: t, recType: i }).send(function () {
            app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
          });
        });
      }
    }, startAnimation: function startAnimation() {
      this.data.animationImageIndex = 0, this.data.isAnimating = 1, util.requestAnimationFrame(this.frame.bind(this));
    }, onAnimationStop: function onAnimationStop() {
      this.data.isAnimating = 0;
    }, frame: function frame(e) {
      var a = frames[this.data.animationImageIndex];-1 == a ? this.setData({ imageUrl: "" }) : this.setData({ imageUrl: "icon-like-a" + a }), this.data.animationImageIndex++, this.data.animationImageIndex < frames.length ? util.requestAnimationFrame(this.frame.bind(this)) : this.onAnimationStop();
    } } }); 
 			}); 	require("components/like/like.js");
 		__wxRoute = 'components/order_panel/order_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/order_panel/order_panel.js';	define("components/order_panel/order_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { options: { type: Array, value: [], observer: function observer(e, t, a) {
        console.log("order panel options", "newVal", e);
      } }, selectedId: { type: String, value: "", observer: function observer(e, t, a) {
        console.log("order panel selectedId", "newVal", e);
      } } }, data: {}, attached: function attached() {}, methods: { bindtapCategoryItem: function bindtapCategoryItem(e) {
      var t = e.currentTarget.dataset.id,
          a = e.currentTarget.dataset.name;this.setData({ selectedId: t }), this.triggerEvent("select", { id: t, name: a }, {});
    } } }); 
 			}); 	require("components/order_panel/order_panel.js");
 		__wxRoute = 'components/page_observer/page_observer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/page_observer/page_observer.js';	define("components/page_observer/page_observer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    pageObserverBehaviors = require("../../behaviors/page-observer-behaviors");Component({ properties: {}, observers: {}, data: {}, lifetimes: { attached: function attached() {}, ready: function ready() {} }, pageLifetimes: { show: function show() {}, hide: function hide() {} }, methods: {} }); 
 			}); 	require("components/page_observer/page_observer.js");
 		__wxRoute = 'components/poi_card/poi_card';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/poi_card/poi_card.js';	define("components/poi_card/poi_card.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    impressionBehaviors = require("../../behaviors/impression-behaviors"),
    calculateDistance = require("../../utils/calculateDistance"),
    PoiModel = require("../../utils/model/poi_model"),
    ugcStorage = require("../../utils/ugcStorage");Component({ behaviors: [impressionBehaviors], properties: { poiData: { type: Object, value: {} }, reportData: { type: Object, value: {} }, showPoiGallery: { type: Boolean, value: !1 }, impressionId: { type: String, value: "" }, isUsingRealCurrentLocation: { type: Boolean, value: !1 }, poiCustomTheme: { type: String, value: "" } }, data: {}, attached: function attached() {
    var e = this,
        a = this.data.poiData,
        t = this.data.reportData || {},
        r = this.data.impressionId || "";this.data.isUsingRealCurrentLocation || calculateDistance.addPoiLocation({ longitude: a.longitude, latitude: a.latitude }, function (t) {
      var r = "";t < 100 || 100 == t ? r = "约100m" : t > 100 && t < 1e3 ? r = "约" + Math.round(t / 100) + "00m" : (t > 1e3 || 1e3 == t) && (r = Math.round(t / 1e3) + "km"), e.setData({ "renderData.isUsingRealCurrentLocation": !0, "renderData.poiInfo.infoWithDistance": r + a.info2 });
    });var i = [];a.photos && 3 === a.photos.length && a.photos.forEach(function (e) {
      var a = {};a.url = e, a.width = 214, a.height = 214, a.marginRight = 0, a.marginBottom = 0, i.push(a);
    });var o = { isUsingRealCurrentLocation: e.data.isUsingRealCurrentLocation, isMark: a.isMark, poiInfo: a, poiGalleryPics: i, visitCount: a.visitCount, reportData: t, impressionId: r };this.setData({ renderData: o }), this.declareBindingForPoi(o);
  }, methods: { onTapMarkButtonWithShareShake: function onTapMarkButtonWithShareShake(e) {
      if (app.getHasLaunched()) {
        var a = this.data.renderData,
            t = a.isMark ? 0 : 1,
            r = this.data.renderData.poiInfo.poiId;new PoiModel(r).toggleMark();var i = t,
            o = i ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";wx.vibrateShort(), wx.showToast({ title: o, icon: "none", duration: 2500 });var s = {};a.reportData && a.reportData.scene && (s.scene = a.reportData.scene), a.reportData && a.reportData.pageId && (s.pageId = a.reportData.pageId);var n = "";a.reportData && a.reportData.recId && (n = a.reportData.recId);var p = 0;a.reportData && a.reportData.recType && (p = a.reportData.recType), new cgi.SimpleRequest("markpoi", { baseRequest: s, poiId: a.poiInfo.poiId, flag: i, referId: a.impressionId, recId: n, recType: p }).send(function (e) {
          app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
        }, function (e) {
          console.error("markpoi resp failed", e);
        }), this.setData({ shouldShowCommentPanel: 1 }), !1 === ugcStorage.hasMarkAtTimeline() && (ugcStorage.updateMarkAtTimeline(), wx.showModal({ content: "你的“想去”将会通知印象作者。", showCancel: !1, confirmText: "知道了" })), !ugcStorage.isShareShakeDisable() && i && (ugcStorage.updateShareShakeCount(), this.triggerEvent("shareshake", { isShareShake: i }, {}));
      }
    } } }); 
 			}); 	require("components/poi_card/poi_card.js");
 		__wxRoute = 'components/poi_recommend/poi_recommend';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/poi_recommend/poi_recommend.js';	define("components/poi_recommend/poi_recommend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    renderDataUtil = require("../../utils/render_data_util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    appLaunchData = require("../../utils/appLaunchData"),
    PoiModel = require("../../utils/model/poi_model"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    schema = require("../../utils/model/model_schema"),
    MAX_AVATAR_PICS = 6;Component({ properties: { poiData: { type: Object, value: {}, observer: function observer(e, a, t) {
        this.data.hasAttached && this.render();
      } }, poiDataIndex: { type: Number, value: 0, observer: function observer(e, a, t) {} } }, data: { observed: 0 }, lifetimes: { attached: function attached() {
      this.setData({ hasAttached: 1 }), this.render();
    }, ready: function ready() {
      this.poiObserver();
    }, detached: function detached() {
      this.observer && this.observer.disconnect();
    } }, pageLifetimes: { show: function show() {
      this.poiObserver();
    }, hide: function hide() {
      this.observer && this.observer.disconnect();
    } }, methods: { render: function render() {
      var e = this.data.poiData,
          a = { poiInfo: e.poi, reasonInfo: this._getReasonInfo(e) };e.reportData && (this.data.reportData = Object.assign({}, { pageId: "", prevPageId: "", scene: "", menuCategoryId: "", price: "", area: "", query: "", requestId: "", sortType: "" }, e.reportData)), e.reasonData && (this.data.reasonData = e.reasonData || {}), this.setData({ renderData: a, renderDataIndex: this.data.poiDataIndex }), declareBinding({ instance: this, schema: schema.PoiSchema, mapping: { "renderData.poiInfo.id": "id", "renderData.poiInfo.isMark": "isMark" } });
    }, onTapMark: function onTapMark(e) {
      var a = this,
          t = a.data.renderData,
          r = t.poiInfo.isMark ? 0 : 1,
          o = t.poiInfo.id;new PoiModel(o).toggleMark();var i = r,
          n = i ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";wx.vibrateShort(), wx.showToast({ title: n, icon: "none", duration: 2500 });var s = {};a.data.reportData.pageId && (s.pageId = a.data.reportData.pageId), a.data.reportData.scene && (s.scene = a.data.reportData.scene), new cgi.SimpleRequest("markpoi", { baseRequest: s, poiId: o, flag: i }).send(function (e) {
        a.setData({ "renderData.poiInfo.isMark": i }), app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
      }, function (e) {
        console.error("markpoi resp failed", e);
      });
    }, onTapToPoiDetail: function onTapToPoiDetail(e) {
      var a = this.data.renderData.poiInfo.id,
          t = e.currentTarget.dataset.index,
          r = appLaunchData.getUserLocation();wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(a) }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(a).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(t + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
    }, onTapToRankList: function onTapToRankList(e) {
      var a = e.currentTarget.dataset.index,
          t = this.data.renderData.poiInfo.id,
          r = this.data.renderData.reasonInfo.data.url,
          o = appLaunchData.getUserLocation(),
          i = r.split("=");r && 3 === i.length && i[2], wx.navigateTo({ url: r }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.CLICK_REASON).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(a + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
    }, onTapToImpressionFeed: function onTapToImpressionFeed(e) {
      var a = e.currentTarget.dataset.index,
          t = this.data.renderData.poiInfo.id,
          r = this.data.renderData.reasonInfo.data.impression.url,
          o = appLaunchData.getUserLocation();wx.navigateTo({ url: r }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.CLICK_REASON).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(a + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
    }, poiObserver: function poiObserver() {
      var e = this;wx.nextTick(function () {
        e.observer && e.observer.disconnect();var a = e.createIntersectionObserver({ thresholds: [1], initialRatio: 0, observeAll: !0 });a.relativeToViewport(), a.observe(".js-intersection-poi", function (a) {
          a.dataset.index;var t = e.data.poiData.poi.id;if (!e.data.observed) {
            e.data.observed = 1;var r = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(e.data.reportData.pageId).prevPage(e.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId(e.data.reportData.menuCategoryId).price(e.data.reportData.price).area(e.data.reportData.area).query(e.data.query).sortType(e.data.reportData.sortType).requestId(e.data.reportData.requestId).scene(e.data.reportData.scene).poiUgcLabelScene(e.data.renderData.reasonInfo.scene).lazyReportToServer();
          }
        }), e.observer = a;
      });
    }, _getReasonInfo: function _getReasonInfo(e) {
      var a = { type: "", data: {}, scene: reportEnum.enumPoiUgcLabelScene.OTHER };if (e.reasonData && e.reasonData.reason) {
        a.type = "displayRankListFromResponseReason", a.data.isClickable = !1, a.data.label = e.reasonData.reason, a.scene = reportEnum.enumPoiUgcLabelScene.OTHER;var t = e.reasonData.type,
            r = { 1: "", 2: "/pages/me/me?tabIndex=2", 3: "", 4: "/pages/rank_list_new/rank_list_new" }[t],
            o = e.reasonData.billboard;4 === t && o ? (o.area ? a.data.url = r + "?tabIndex=" + o.type + "&areaId=" + encodeURIComponent(o.area.id) : o.category ? a.data.url = r + "?tabIndex=" + o.type + "&categoryId=" + encodeURIComponent(o.category.id) : a.data.url = r + "?tabIndex=" + o.type, a.scene = reportEnum.enumPoiUgcLabelScene.RANK_LABEL, a.data.isClickable = !0) : 2 === t ? (a.data.url = r, a.data.isClickable = !0, a.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL) : 1 === t ? a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL : 3 === t && (a.scene = reportEnum.enumPoiUgcLabelScene.NEAR_POI);
      }if (e.poi.ugc && (e.poi.ugc.markCount > e.poi.ugc.visitCount ? (a.type = "displayFriendsMarkAvatar", a.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL, a.data.label = e.poi.ugc.markCount + "个朋友想去", a.data.avatars = e.poi.ugc.markContact, a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS)) : e.poi.ugc.visitCount > 0 && (a.type = "displayFriendsPublishAvatar", a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL, a.data.label = e.poi.ugc.visitCount + "个朋友去过", a.data.avatars = e.poi.ugc.visitContact, a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS))), e.poi.ugc && e.poi.ugc.impression) {
        var i = e.poi.ugc.impression;a.type = "displayFriendsImpression", a.scene = reportEnum.enumPoiUgcLabelScene.FRIEND_IMPRESSION_SHOWN, a.data.impression = {}, a.data.impression.name = i.contact.remark || i.contact.nickName, a.data.impression.comment = JSON.parse(i.word).content, a.data.impression.url = "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(i.impressionId), 0 === a.data.impression.comment.length && (a.data.impression = {}, a.type = "displayFriendsPublishAvatar", a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL, a.data.avatars = e.poi.ugc.visitContact, a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS)), 0 === e.poi.ugc.visitCount ? a.data.label = "1个朋友去过" : a.data.label = e.poi.ugc.visitCount + "个朋友去过";
      }return a;
    }, _getReportTagId: function _getReportTagId(e) {
      return e.area ? e.area.id : e.category ? e.category.id : "";
    } } }); 
 			}); 	require("components/poi_recommend/poi_recommend.js");
 		__wxRoute = 'components/select_panel/select_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/select_panel/select_panel.js';	define("components/select_panel/select_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { category: Array, selectedId: { type: String, value: "", observer: function observer(t, e, a) {} } }, data: {}, attached: function attached() {}, methods: { bindtapCategoryItem: function bindtapCategoryItem(t) {
      t.currentTarget.dataset.index;var e = t.currentTarget.dataset.id,
          a = t.currentTarget.dataset.name,
          r = t.currentTarget.dataset.obj;this.setData({ selectedId: e }), this.triggerEvent("select", { id: e, name: a, obj: r }, {});
    } } }); 
 			}); 	require("components/select_panel/select_panel.js");
 		__wxRoute = 'components/share_to_wechat/share_to_wechat';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/share_to_wechat/share_to_wechat.js';	define("components/share_to_wechat/share_to_wechat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1,
    MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;Component({ properties: { impressionData: { type: Object, value: {} }, poiName: { type: String, value: "" }, poiImage: { type: String, value: "" }, isShareShake: { type: Boolean, value: !1, observer: function observer(e) {
        var a = this;this.setData({ animatedShareShake: e }), wx.nextTick(function () {
          a.shareShakeAnimated();
        });
      } } }, data: { impressionContentType: 0, sharedImage: "", impressionId: "", poiId: "", currentPageId: 0, animatedShareShake: !1, iconAnimationData: {}, labelAnimationData: {} }, attached: function attached() {}, methods: { onTapShareButton: function onTapShareButton(e) {
      console.log("share_to_wechat 分享转发");var a = this;if (a.data.impressionData && a.data.impressionData.id && a.data.impressionData.contact && a.data.impressionData.contact.nickName) {
        if (a.data.poiName && a.data.poiName.length) {
          a.data.impressionId = a.data.impressionData.id, a.data.impressionData.poiId && (a.data.poiId = a.data.impressionData.poiId);var t = a.data.impressionData.contact.nickName,
              r = a.data.impressionData.status;if (r == MMLIFEAPP_IMPRESSION_STATUS_INVALID) return console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal and return"), wx.showModal({ title: "提示", content: "该内容违反了平台相关规定，无法分享。", confirmText: "我知道了", cancelText: "查看详情", success: function success(e) {
              if (e.confirm) console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal, user confirm");else if (e.cancel) {
                console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal, user cancel");wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2") });
              }
            } }), void a.reportShareImpression(reportEnum.enumShareResult.FORBID_HIGH);if (r == MMLIFEAPP_IMPRESSION_STATUS_UNREAL) return console.log("status is impressionServerStatus, showModal and return"), wx.showModal({ content: "该内容与餐厅无关，无法分享。", showCancel: !1, confirmText: "我知道了" }), void a.reportShareImpression(reportEnum.enumShareResult.FORBID_LOW);if (wx.shareAppMessageForFakeNative) {
            if (console.log("shareAppMessage, start"), 0 == a.data.impressionContentType || !a.data.sharedImage || !a.data.sharedImage.length) {
              a.data.sharedImage = "", a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_ONLY;var n = JSON.parse(a.data.impressionData.info);if (n.pic && n.pic.length) {
                var s = n.pic[0];0 == s.type ? s.midImageUrl ? a.data.sharedImage = s.midImageUrl : s.url && (a.data.sharedImage = s.url) : 1 == s.type && s.thumbUrl && (a.data.sharedImage = s.thumbUrl);var i = !1,
                    o = !1;n.pic.forEach(function (e) {
                  0 === e.type ? i = !0 : 1 === e.type ? o = !0 : console.error("unknown type for item in commentInfo: " + JSON.stringify(n));
                }), i && o ? a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_IMAGE_VIDEO : i ? a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_IMAGE : o && (a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_VIDEO);
              }a.data.sharedImage && a.data.sharedImage.length || (a.data.poiImage && a.data.poiImage.length ? a.data.sharedImage = a.data.poiImage : a.data.sharedImage = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), n.content || console.error("No text in impression!");
            }var p = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(a.data.impressionId);wx.shareAppMessageForFakeNative({ bizType: 0, title: t + " 的餐厅印象", imageUrl: a.data.sharedImage, path: p, desc: a.data.poiName, tailLang: "FF_Entry_Nearby", useDefaultSnapshot: !1, disableForward: !1, defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning", success: function success(e) {
                console.log("shareAppMessage success: " + JSON.stringify(e)), a.reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
              }, fail: function fail(e) {
                e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), a.reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), a.reportShareImpression(reportEnum.enumShareResult.API_FAILED));
              } });
          } else console.log("no api");
        } else console.error("share_to_wechat no poiName");
      } else console.error("share_to_wechat no invalid impressionData");
    }, reportShareImpression: function reportShareImpression(e) {
      if (e) {
        if (0 == this.data.currentPageId) {
          var a = getCurrentPages();if (a && a.length) {
            var t = a[a.length - 1];t && t.data && t.data.currentPageId && (this.data.currentPageId = t.data.currentPageId);
          }
        }var r = 0;this.data.impressionData.subCommentCount && (r = this.data.impressionData.subCommentCount);var n = 0;this.data.impressionData.likeCount && (n = this.data.impressionData.likeCount);var s = 0;this.data.impressionData.markCount && (s = this.data.impressionData.markCount), reporter.getReporter(16876).shareType(reportEnum.enumShareType.IMPRESSION).shareScene(this.data.currentPageId).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(r).impressionWowCount(n).impressionMarkCount(s).impressionType(this.data.impressionContentType).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.poiId).impressionIdString(this.data.impressionId).sessionId(reportSession.getId()).reportToServer();
      } else console.error("invalid parameter, shareResult");
    }, shareShakeAnimated: function shareShakeAnimated() {
      var e = wx.createAnimation({ duration: 250, timingFunction: "ease-in-out" });this.iconAnimation = e, e.rotate(15).step(), e.rotate(-15).step(), e.rotate(15).step(), e.rotate(-15).step(), e.rotate(15).step(), e.rotate(0).step();var a = wx.createAnimation({ timingFunction: "ease-in" });this.labelAnimation = a, a.opacity(1).step({ duration: 250 }), this.data.animatedShareShake && this.setData({ iconAnimationData: e.export(), labelAnimationData: a.export() });
    } } }); 
 			}); 	require("components/share_to_wechat/share_to_wechat.js");
 		__wxRoute = 'components/skeleton_loading/skeleton_loading';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/skeleton_loading/skeleton_loading.js';	define("components/skeleton_loading/skeleton_loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { loadingStyle: { type: String, value: "default" } } }); 
 			}); 	require("components/skeleton_loading/skeleton_loading.js");
 		__wxRoute = 'components/subcategory_panel/subcategory_panel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/subcategory_panel/subcategory_panel.js';	define("components/subcategory_panel/subcategory_panel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { subCategories: { type: Array, value: [], observer: function observer(e, t, a) {
        console.log("component subCategory subCategories newVal", e, ", oldVal", t, " changedPath", a);
      } }, selectedId: { type: String, value: "", observer: function observer(e, t, a) {
        console.log("component subCategory selectedId newVal", e, ", oldVal", t, " changedPath", a);
      } } }, data: {}, attached: function attached() {}, methods: { bindtapCategoryItem: function bindtapCategoryItem(e) {
      var t = e.currentTarget.dataset.id;this.setData({ selectedId: t }), this.triggerEvent("subcategoryselect", { id: t }, {});
    } } }); 
 			}); 	require("components/subcategory_panel/subcategory_panel.js");
 		__wxRoute = 'components/user_access_permission/user_access_permission';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/user_access_permission/user_access_permission.js';	define("components/user_access_permission/user_access_permission.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    util = require("../../utils/util"),
    mixinCss = require("../../utils/mixinCss");Component({ data: { isIpx: util.isIpx(), ipxFtPadding: mixinCss.ipxFtPadding, showNotAllowedRegionTip: !1, showFirstLaunchTip: !1, showContent: !1, showError: !1, userState: app.enumUserStateError.unknown, tip: "本功能目前仅对广州地区部分用户开放体验", buttonType: 0 }, ready: function ready(e) {
    console.log("user_access_permission, ready!");var t = this;app.addUserStateChangeListener(function () {
      console.log("user_access_permission, UserStateChangeListener callback"), t.checkUserState();
    });
  }, methods: { checkUserState: function checkUserState() {
      var e = app.getUserState();if (console.log("user_access_permission, checkUserState, userState is: " + e), this.data.userState != e) {
        if (e != app.enumUserStateError.unknown) {
          var t = "本功能目前仅对广州地区部分用户开放体验";e == app.enumUserStateError.isPad ? t = "请在手机上查看" : e == app.enumUserStateError.shouldUpdateWeChat && (t = "请先将微信更新到最新版");var r = e != app.enumUserStateError.ok && e != app.enumUserStateError.notExpUser && e != app.enumUserStateError.labItemClosed,
              s = e == app.enumUserStateError.regionNotAllowed || e == app.enumUserStateError.regionNotAllowedAndFirstLaunch,
              n = e == app.enumUserStateError.firstLaunch || e == app.enumUserStateError.regionNotAllowedAndFirstLaunch,
              a = e == app.enumUserStateError.error;this.setData({ showNotAllowedRegionTip: s, showFirstLaunchTip: n, showContent: r, showError: a, userState: e, tip: t, buttonType: 0 });
        } else this.setData({ showNotAllowedRegionTip: !1, showFirstLaunchTip: !1, showContent: !1, showError: !1, userState: app.enumUserStateError.unknown, tip: "本功能目前仅对广州地区部分用户开放体验", buttonType: 0 });
      } else console.log("user_access_permission, checkUserState, userState not change, return!");
    }, onTapOpen: function onTapOpen() {
      util.canUseGetAndSetLabInfoAPI() && (util.showLoading(), wx.setLabInfo({ labId: "labs_nearbylife", enabled: !0, success: function success(e) {
          console.log("setLabInfo, success: " + JSON.stringify(e)), util.hideLoading(), app.setUserLabStateOpen(), app.checkUserStateAndStartMainProcess();
        }, fail: function fail(e) {
          console.error("setLabInfo, failed: " + JSON.stringify(e)), util.hideLoading(), util.hint("开启失败");
        } }));
    }, onTapConfirmTipButton: function onTapConfirmTipButton() {
      this.data.showFirstLaunchTip && app.setHasShownUserFirstLaunchTipValue(), this.data.showNotAllowedRegionTip, app.startMainProcess();
    }, onTapRetryStartButton: function onTapRetryStartButton() {
      console.log("onTapRetryStartButton"), app.retryStartApp();
    }, onTapRulesDetail: function onTapRulesDetail() {
      wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning") });
    } } }); 
 			}); 	require("components/user_access_permission/user_access_permission.js");
 		__wxRoute = 'components/video_preview/video_preview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/video_preview/video_preview.js';	define("components/video_preview/video_preview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util"),
    app = getApp(),
    mediaBehaviors = require("../../behaviors/media-behaviors"),
    videoStyle = require("./videoStyleConstants");Component({ behaviors: [mediaBehaviors], properties: { media: { type: Object, value: {}, observer: function observer(e, i, t) {
        this.setData({ posterSrc: e.posterSrc || "", videoSrc: e.url || "" });
      } }, videoId: { type: String }, fixedWidth: { type: Number } }, observers: { media: function media(e) {
      this.data.media;
    }, posterSrc: function posterSrc(e) {
      this.data.posterSrc = this.data.media.posterSrc, this.data.videoSrc = this.data.media.url;
    } }, data: { videoUrl: "", isPlayShow: !0, isAutoplay: !1, isVideoShow: !1, isFirstLoaded: !1 }, lifetimes: { attached: function attached() {
      var e = this.data.fixedWidth ? this.data.fixedWidth : this.data.media.width;this.setData({ videoStyle: videoStyle.radiusBorderStyle[this.data.media.videoStyle] || "", videoSrc: this.data.media.url || "", posterSrc: this.data.media.posterSrc || "", videoHeight: this.data.media.height || 286, videoWidth: e || 340 });
    }, ready: function ready() {
      this.videoObserver();
    }, detached: function detached() {
      var e = this;this.setData({ isAutoplay: !1 }, function () {
        e.video && e.video.stop();
      }), e.observer && e.observer.disconnect();
    } }, pageLifetimes: { show: function show() {
      this.videoObserver();
    }, hide: function hide() {
      var e = this;this.setData({ isAutoplay: !1 }, function () {
        e.video && e.video.stop();
      }), e.observer && e.observer.disconnect();
    } }, methods: { videoObserver: function videoObserver() {
      var e = this,
          i = this,
          t = util.rpx2px(i.data.videoHeight) / 2;wx.nextTick(function () {
        i.observer && i.observer.disconnect(), i.observer = wx.createIntersectionObserver(i, { thresholds: [1], initialRatio: 0, observeAll: !1 }), i.observer.relativeToViewport({ top: t, bottom: 200 }), i.observer.observe(".video-preview", function (t) {
          1 === t.intersectionRatio ? e.setData({ videoUrl: i.data.videoSrc, isAutoplay: !0, isPlayShow: !1, isVideoShow: !1 }, function () {
            i.video = wx.createVideoContext(i.data.videoId, i), i.video && i.video.play();
          }) : (e.setData({ isAutoplay: !1, isPlayShow: !0, isVideoShow: !1 }, function () {
            i.video && i.video.stop();
          }), setTimeout(function () {
            e.setData({ videoUrl: "" });
          }, 100));
        });
      });
    }, hideVideo: function hideVideo() {
      this.setData({ isVideoShow: !1, videoUrl: "", isAutoplay: !1 });
    }, bindVideoUpdate: function bindVideoUpdate(e) {
      var i = e.detail,
          t = i.currentTime;i.duration;t > 0 && (this.setData({ isVideoShow: !0, isPlayShow: !1, isLoadingShow: !1 }), this.data.isFirstLoaded || (this.data.isFirstLoaded = !0, this.mediaKVReportBehavior(e)));
    } } }); 
 			}); 	require("components/video_preview/video_preview.js");
 		__wxRoute = 'pages/search_result/match_text/match_text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search_result/match_text/match_text.js';	define("pages/search_result/match_text/match_text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp();Component({ properties: { text: String, query: String }, data: { shouldShowEllipse: !1 }, attached: function attached() {
    var t = this.data.text.indexOf(this.data.query);if (-1 == t) this.setData({ t1: "", t2: "", t3: "" });else {
      var a = this.data.text.substring(0, t),
          e = this.data.text.substring(t, t + this.data.query.length),
          s = this.data.text.substring(t + this.data.query.length, this.data.text.length);this.setData({ t1: a, t2: e, t3: s });
    }
  }, methods: {} }); 
 			}); 	require("pages/search_result/match_text/match_text.js");
 		__wxRoute = 'pages/search_result_impression/search_result_impression';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search_result_impression/search_result_impression.js';	define("pages/search_result_impression/search_result_impression.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t];for (var r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
  }return e;
};function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    searchStorage = require("../../utils/searchStorage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    utf8 = require("../../utils/utf8"),
    cssFilterHeight = 102,
    cssSearchHeight = 72,
    cssTabHeight = 90,
    APPEND = 1,
    REPLACE = 0,
    impressionExposedSet = new Set(),
    poiExposedSet = new Set();Component({ properties: { query: { type: String, value: "", observer: function observer(e, t, a) {
        console.log("component search_result_impression newVal", e, ", oldVal", t, " changedPath", a);
      } }, queryType: { type: String } }, data: { scrollViewHeight: 0, windowHeight: wx.getSystemInfoSync().windowHeight, shouldShowBottomLoading: !0, isIpx: util.isIpx(), isInited: !1, poiList: [], isPoiListLoaded: !1, context: "", continueFlag: 1, shouldShowMask: !1, shouldShowFilterFixed: !1, areaCategory: [], shouldShowAreaCategoryPanel: !1, resultSelectedAreaCategoryId: "", resultSelectedAreaCategoryName: "位置", menuCategory: [{ id: "0", name: "类别" }], shouldShowMenuCategoryPanel: !1, resultSelectedMenuCategoryId: "", resultSelectedMenuCategoryName: "菜系", priceCategory: [{ id: "0", name: "不限价格", value: { min: 0, max: 9999900 } }, { id: "1", name: "0-50", value: { min: 0, max: 5e3 } }, { id: "2", name: "50-100", value: { min: 5e3, max: 1e4 } }, { id: "3", name: "100-200", value: { min: 1e4, max: 2e4 } }, { id: "4", name: "200-300", value: { min: 2e4, max: 3e4 } }, { id: "5", name: "300以上", value: { min: 3e4, max: 9999900 } }], shouldShowPriceCategoryPanel: !1, resultSelectedPriceCategoryId: "", resultSelectedPriceCategoryName: "价格", orderOptions: [{ id: "2", name: "综合排序" }, { id: "1", name: "距离优先" }], shouldShowOrderPanel: !1, resultSelectedOrderId: "2", resultSelectedOrderName: "综合排序", useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }, created: function created(e) {
    this.addGlobalFunc(), this.defaultReportData = { pageRequestId: 0, poiExposedObjSet: {}, pageName: reportEnum.enumPageName.SEARCH }, this.reportData = {};
  }, attached: function attached() {
    var e = this,
        t = e.data.windowHeight;this.setData({ scrollViewHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight), maskHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight) }), e.mmPrevPage = util.getCurrentPage().mmPrevPage, e.setData({ useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }), e.data.queryType == reportEnum.enumPoiSearchType.FRIEND ? e.data.entryType = 1 : e.data.queryType == reportEnum.enumPoiSearchType.SELF ? e.data.entryType = 2 : e.data.entryType = 0, appLaunchData.isUsingRealCurrentLocation() || e.setData({ orderOptions: [{ id: "2", name: "综合排序" }], resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" }), e.intersectionObserver && e.intersectionObserver.disconnect(), e.intersectionObserver = e.createObserveIntersection(), app.addLaunchListener(function () {
      e.getCategory(), e.searchImpression();
    });
  }, detached: function detached() {
    this.clearGlobalFunc();
  }, methods: { addGlobalFunc: function addGlobalFunc() {
      var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.searchResultImpression, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
        if (t && t.impressionId) {
          var a = t.impressionId,
              r = t.commentCount ? t.commentCount : 0;console.log("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + a);for (var o = e.data.impressionDataList, i = 0; i < o.length; i++) {
            var s = o[i];if (s.comment.id == a) {
              s.comment.subCommentCount = r, e.setData(_defineProperty({}, "impressionDataList[" + i + "]", s));break;
            }
          }
        } else console.error("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
      });
    }, clearGlobalFunc: function clearGlobalFunc() {
      app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.searchResultImpression);
    }, searchImpression: function searchImpression(e) {
      var t = this;e || t.setData({ impressionDataList: [], isInited: !1, context: "", continueFlag: 1, shouldShowBottomLoading: !0, requestId: util.uuid() });var a = t.getFilterOption(),
          r = appLaunchData.isUsingRealCurrentLocation(),
          o = appLaunchData.getUserLocation();new cgi.SimpleRequest("SearchImpression", { location: o, options: a, requestId: t.data.requestId, context: t.data.context }).ensureNoSameUrlProcessing().send(function (a) {
        var o = [];if (a.info && a.info.length) if (a.info.forEach(function (e) {
          o.push({ comment: e.impression, unqiue: e.impression.id, poi: e.poi, hitInfo: e.hitInfo, isUsingRealCurrentLocation: r, reportData: { scene: reportEnum.enumSceneType.SEARCH_IMPRESSION_RESULT, pageId: reportEnum.enumPageName.SEARCH, requestId: t.data.requestId, recId: "", recType: e.impression && e.impression.recType ? e.impression.recType : 0 } });
        }), e) {
          for (var i = t.data.impressionDataList, s = o, n = {}, d = i.length; d < i.length + s.length; d++) {
            n["impressionDataList[" + d + "]"] = o[d - i.length];
          }t.setData(_extends({}, n));
        } else t.setData({ impressionDataList: o });t.data.context = a.context, t.data.continueFlag = a.continueFlag, t.data.continueFlag || t.setData({ shouldShowBottomLoading: !1 }), t.data.isInited || t.setData({ isInited: !0 }), t.intersectionObserver && t.intersectionObserver.disconnect(), t.intersectionObserver = t.createObserveIntersection();
      }, function (e) {});
    }, getCategory: function getCategory() {
      var e = this,
          t = appLaunchData.getUserLocation();new cgi.SimpleRequest("getcategory", { location: t }).send(function (t) {
        console.log("test getcategory success: " + JSON.stringify(new Date()));var a = t.area,
            r = [];a.forEach(function (e) {
          var t = {};t.name = e.name, t.id = e.id, e.subCategory && e.subCategory.length && (t.subCategory = e.subCategory), r.push(t);
        }), appLaunchData.isUsingRealCurrentLocation() ? r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_11", name: "默认" }, { id: "localId_12", name: "1公里" }, { id: "localId_13", name: "2公里" }, { id: "localId_14", name: "5公里" }] }) : r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_11", name: "默认" }] }), e.setData({ areaCategory: r, menuCategory: t.category });
      });
    }, getFilterOption: function getFilterOption() {
      var e = {};if (e.query = this.data.query, e.entryType = this.data.entryType, this.reportData.query = this.data.query, this.data.resultSelectedSimilarAreaCategoryId ? e.areaId = this.data.resultSelectedSimilarAreaCategoryId : this.data.resultSelectedAreaCategoryId && ("localId_10" == this.data.resultSelectedAreaCategoryId || ("localId_11" == this.data.resultSelectedAreaCategoryId ? this.reportData.area = "" : "localId_12" == this.data.resultSelectedAreaCategoryId ? (e.radius = 1e3, this.reportData.area = 1e3) : "localId_13" == this.data.resultSelectedAreaCategoryId ? (e.radius = 2e3, this.reportData.area = 2e3) : "localId_14" == this.data.resultSelectedAreaCategoryId ? (e.radius = 5e3, this.reportData.area = 5e3) : (e.areaId = this.data.resultSelectedAreaCategoryId, this.reportData.area = this.data.resultSelectedAreaCategoryId))), this.data.resultSelectedMenuCategoryId && (e.categoryId = [this.data.resultSelectedMenuCategoryId], this.reportData.menuCategoryId = this.data.resultSelectedMenuCategoryId), this.data.resultSelectedPriceCategoryId) if ("0" == this.data.resultSelectedPriceCategoryId) delete e.priceMin, delete e.priceMax, this.reportData.price = "";else {
        var t = this.data.priceCategory[this.data.resultSelectedPriceCategoryId].value;e.priceMin = t.min, e.priceMax = t.max, this.reportData.price = e.priceMin + "-" + e.priceMax;
      }return this.data.resultSelectedOrderId && (e.sortType = +this.data.resultSelectedOrderId, this.reportData.sortType = this.data.resultSelectedOrderId), e;
    }, bindtapMenuFilter: function bindtapMenuFilter(e) {
      this.data.resultSelectedMenuCategoryIdFromSearch || (this.data.shouldShowMenuCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !0, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }));
    }, bindtapPriceFilter: function bindtapPriceFilter(e) {
      this.data.shouldShowPriceCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !0, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 });
    }, bindtapAreaFilter: function bindtapAreaFilter(e) {
      this.data.resultSelectedSimilarAreaCategoryId || (this.data.shouldShowAreaCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !0, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }));
    }, bindtapOrderFilter: function bindtapOrderFilter() {
      this.data.shouldShowOrderPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !0 });
    }, bindtapMask: function bindtapMask(e) {
      this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 });
    }, bindMenuCategorySelect: function bindMenuCategorySelect(e) {
      console.log("bindMenuCategorySelect", e);var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedMenuCategoryId: t, resultSelectedMenuCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindPriceCategorySelect: function bindPriceCategorySelect(e) {
      console.log("bindPriceCategorySelect", e);var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedPriceCategoryId: t, resultSelectedPriceCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindAreaCategorySelect: function bindAreaCategorySelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedAreaCategoryId: t, resultSelectedAreaCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindOrderSelect: function bindOrderSelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedOrderId: t, resultSelectedOrderName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindscrolltolower: function bindscrolltolower() {
      this.data.continueFlag && this.searchImpression(APPEND);
    }, getOnFilterChange: function getOnFilterChange() {
      this.searchImpression(REPLACE);
    }, createObserveIntersection: function createObserveIntersection() {
      var e = this,
          t = wx.createIntersectionObserver(e, { thresholds: [.4, 1], initialRatio: 0, observeAll: !0 });return t.relativeToViewport(), t.observe(".impression-cell", function (t) {
        var a = t.dataset,
            r = a.index;a.recommend;if (void 0 !== r) {
          var o = e.data.impressionDataList[r];if (o) {
            var i = "";o.comment && o.comment.id && (i = o.comment.id);var s = "";if (o && o.poi && o.poi.base && (s = o.poi.base.id), i && s) {
              var n = util.getImpressionType(o.comment.contact.type),
                  d = 0;o && o.comment && o.comment.subCommentCount && (d = o.comment.subCommentCount);var l = reportEnum.enumFeedAction.FEED_EXPOSED,
                  u = o.reportData.scene,
                  h = o.reportData.requestId || "",
                  c = o.reportData.recId || "",
                  p = o.reportData.pageId,
                  g = o.reportData.recType || 0,
                  m = "";o.comment.tag && (m = renderDataUtil.getReasonIdString(o.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(u).poiId().impressionId().impressionCommentCount(d).isForwardedImpression(0).poiIdString(s).impressionIdString(i).action(l).impressionType(n).requestId(h).pageId(p).reasonId().reasonIdString(m).recId(c).recType(g).lazyReportToServer();
            }
          }
        }
      }), t;
    } } }); 
 			}); 	require("pages/search_result_impression/search_result_impression.js");
 		__wxRoute = 'pages/timeline/timeline';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/timeline/timeline.js';	define("pages/timeline/timeline.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];for (var o in n) {
      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
  }return e;
};function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    cgiLonglink = require("../../utils/cgi_longlink"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    appLaunchData = require("../../utils/appLaunchData"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    renderDataUtil = require("../../utils/render_data_util"),
    impressionSmallContants = require("../../components/impression_small/impression_small_contants"),
    waterfall = require("./waterfall"),
    ABTestUtil = require("../../utils/ABTestUtil"),
    MMLIFEAPP_FEED_INFO_TYPE_NEARBY_POI = 1,
    MMLIFEAPP_FEED_INFO_TYPE_RANK_LIST = 2,
    MMLIFEAPP_FEED_INFO_TYPE_HOT_TAG = 3,
    MMLIFEAPP_FEED_INFO_TYPE_PAY_RECOMMEND_POI = 4,
    MMLIFEAPP_FEED_INFO_TYPE_ACTIVITY = 5,
    APPEND = 1,
    REPLACE = 0,
    TITLE_TAB_FIND = 0,
    TITLE_TAB_FR = 1,
    TAB_FRIEND = 0,
    TAB_RECOMMEND = 1,
    TAB_FOLLOW = 2,
    modLoadingHeight = 80,
    kv16878StartTime = "",
    kv16878ImpressionExposedCount = 0,
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    ContactSchema = require("../../utils/model/model_schema").ContactSchema,
    enumRecommendVisitInfoType = { impression: 1, topic: 2 };MMPage(_defineProperty({ data: { unreadImpressionCount: 0, headerHeight: 0, scrollViewHeight: 0, isFirstInit: !0, impressionDataList: [], context: "", continueFlag: 1, userInfo: {}, shouldShowNormalPostButton: 1, shouldShowBottomLoadingFriend: !0, contextRecommend: "", continueFlagRecommend: 1, waterfallCol1: [], waterfallCol2: [], shouldShowBottomLoadingRecommend: !0, shouldUseFollow: !1, contextFollow: "", continueFlagFollow: 1, waterfallCol1Follow: [], waterfallCol2Follow: [], impressionDataListFollow2: [], shouldShowBottomLoadingFollow: !0, friendTalkAboutList: [], currentPageId: reportEnum.enumPageName.TIMELINE, hotTopicTips: [], nearbyPoiCount: 0, nearbyText: "", currentAreaName: "", isFristGetData: !0, hasDelOpOnImprList: 0, hasExecutedFirstPullDownRefresh: !1, payRecommendPoiInfoList: [], canNavigateToTimelineAll: !1, currentTab: TAB_RECOMMEND, currentTitleTab: TITLE_TAB_FIND, lastFollowImprPreloadIndex: -1, lastRecommendImprPreloadIndex: -1, lastFriendsImpressionPreloadIndex: -1, isFriendTimelineInited: !1 }, impressionDataListRecommend: [], impressionDataListFollow: [], mmReportData: { pageName: reportEnum.enumPageName.TIMELINE, pageRequestId: 0 }, onLoad: function onLoad(e) {
    var t = this;app.globalData.pageFriendsTimeline = t, "reLaunchFromComment" == e.reLaunchFrom && t.setData({ reLaunchFromComment: 1, currentTitleTab: TITLE_TAB_FR, currentTab: TAB_FRIEND });var n = 0;if (wx.canIUse("getMenuButtonBoundingClientRect")) {
      var o = wx.getMenuButtonBoundingClientRect();"android" === util.getSysInfo().platform && (o.top = o.top / 2, o.top = o.top + 8), n = o.top + 2;
    } else n = 30;var i = n + util.rpx2px(64) - 1;t.setData({ titleTabHeight: i, menuPositionTop: n, findPoiProps: { filtersTop: i, pageName: reportEnum.enumPageName.TIMELINE, scene: reportEnum.enumSceneType.FIND_POI } }, function () {
      var e = wx.createSelectorQuery();e.select(".js-nav-wrapper").boundingClientRect(), e.select(".js-find-poi").boundingClientRect(), e.exec(function (e) {
        t.findPoi_scrollTop4FilterSticky = e[1].top - e[0].bottom, t.findPoi_filterPanelFixedTop = e[0].height + util.rpx2px(72) - 2, i = e[0].height, t.setData({ titleTabHeight: i, findPoiProps: { filtersTop: i } });var n = wx.getSystemInfoSync().screenHeight - i,
            o = n - util.rpx2px(110);t.setData({ visibleTitleTabContentHeight: n, scrollViewHeight: o });
      });
    }), app.addLaunchListener(function () {
      t.setData({ shouldUseFollow: !1 }), reportPostImpression.requestAllTopicList(), wx.hideNavigationBarLoading(), t.updateNavigationBarTitle(), t.setData({ hasLaunch: !0, userInfo: app.globalData.userInfo || {} });var e,
          n = (e = { getUnreadMentionCount: 0, getUnreadImpressionCount: 0 }, function (n) {
        if (e[n] = 1, Object.keys(e).every(function (t) {
          return e[t];
        })) {
          var o = function o(e) {
            t.data.unreadImpressionCount ? t.setData({ mainTab: e, currentTitleTab: TITLE_TAB_FR, currentTab: TAB_FRIEND }) : t.data.unreadMentionCount ? t.setData({ mainTab: e, currentTitleTab: TITLE_TAB_FR, currentTab: TAB_RECOMMEND }) : 1 == e ? t.setData({ mainTab: e, currentTitleTab: TITLE_TAB_FR, currentTab: TAB_RECOMMEND }) : t.setData({ mainTab: e, currentTitleTab: TITLE_TAB_FIND, currentTab: TAB_RECOMMEND });
          };wx.getABTestConfig ? util.listeneToOneTimeEvent("ABTestUtil_getMainTab", function (e) {
            console.log("ABTestUtil_getMainTab=" + e), o(e);
          }) : o(0);
        }
      });new cgi.SimpleRequest("GetUnReadMentionCount", {}).send(function (e) {
        var o = e.count;t.setData({ unreadMentionCount: o }), n("getUnreadMentionCount"), cgiLonglink.addOpenWebSocketCb(function () {
          cgiLonglink.syncMention();
        }), cgiLonglink.openWebSocket();
      }), new cgi.SimpleRequest("GetUnReadMentionCount", { type: 1 }).send(function (e) {
        t.setData({ unreadImpressionCount: e.count }), n("getUnreadImpressionCount"), e.count > 0 && (t.setData({ shouldShowNewFriendImprBar: 1 }), t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_EXPOSED_RED), setTimeout(function () {
          t.setData({ shouldHideBar: 1 }), wx.nextTick(function () {
            setTimeout(function () {
              t.setData({ shouldShowNewFriendImprBar: 0, shouldHideBar: 0 });
            }, 3e3);
          });
        }, 3e3));
      }), cgiLonglink.addUnReadMentionCountChangeListener("tab", function (e, n) {
        t.setData({ unreadMentionCount: e, unreadMentionCountSeq: n });
      }), t.addGlobalFunc(), t.waterfall = waterfall.createWaterfall(t, "waterfallCol1", "waterfallCol2"), t.waterfallFollow = waterfall.createWaterfall(t, "waterfallCol1Follow", "waterfallCol2Follow");
    }), app.isPreOpen() || this.tryFirstPullDownRefresh();
  }, onUnload: function onUnload() {
    this.clearGlobalFunc(), this.friendObserver && this.friendObserver.disconnect(), this.recommendObserver && this.recommendObserver.disconnect(), this.topicObserver && this.topicObserver.disconnect(), this.followObserver && this.followObserver.disconnect(), kv16878ImpressionExposedCount = 0;
  }, onHide: function onHide() {
    this.kvReport16878TimeString(), kv16878ImpressionExposedCount = 0;
  }, onShow: function onShow(e) {
    app.getHasLaunched() && this.updateNavigationBarTitle();var t = this;app.addLaunchListener(function () {
      console.log("timeline, onShow, launched"), t.tryFirstPullDownRefresh(), kv16878StartTime = Math.floor(new Date().getTime() / 1e3), reporter.getReporter(16501).pageId(reportEnum.enumPageName.TIMELINE).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), t.friendObserver && t.friendObserver.disconnect(), t.friendObserver = t.createObserveIntersection(TAB_FRIEND), t.recommendObserver && t.recommendObserver.disconnect(), t.recommendObserver = t.createObserveIntersection(TAB_RECOMMEND), t.topicObserver && t.topicObserver.disconnect(), t.topicObserver = t.createObserveIntersection4Topic(), t.followObserver && t.followObserver.disconnect(), t.followObserver = t.createObserveIntersection(TAB_FOLLOW);
    });
  }, updateNavigationBarTitle: function updateNavigationBarTitle() {
    var e = appLaunchData.getSelectedAreaId();e && e.length ? wx.setNavigationBarTitle({ title: "附近的餐厅·广州" }) : wx.setNavigationBarTitle({ title: "附近的餐厅" }), kitchenStorage.getShouldUseGreyServer() && (e && e.length ? wx.setNavigationBarTitle({ title: "附近的餐厅·广州(测试环境)" }) : wx.setNavigationBarTitle({ title: "附近的餐厅(测试环境)" }));
  }, stopPullDownRefresh: function stopPullDownRefresh() {
    this.beforeStopPullDownRefresh(), wx.stopPullDownRefresh();
  }, beforeStopPullDownRefresh: function beforeStopPullDownRefresh() {
    this.setData({ shouldShowPullDownRefreshHint: !1 });
  }, onPullDownRefresh: function onPullDownRefresh() {
    var e = this;if (e.setData({ shouldShowPullDownRefreshHint: !0 }), app.getHasLaunched()) app.checkAndUpdateUserCurrentLocation(), e.refresh(), e.stopPullDownRefreshFinally();else {
      var t = app.addLaunchListener(function () {
        e.refresh();
      });setTimeout(function () {
        app.getHasLaunched() || (app.removeLaunchListener(t), wx.showToast({ title: "网络缓慢，请稍后再试", icon: "none", duration: 5e3 }), e.stopPullDownRefresh());
      }, 5e3);
    }
  }, stopPullDownRefreshFinally: util.debounce(function () {
    wx.stopPullDownRefresh();
  }, 3e3), onPageScroll2: util.debounce(function (e) {
    this.waterfall.recycle(e.scrollTop);
  }, 50), onPageScroll1: util.debounce(function (e) {
    this.scrollTop = e.scrollTop;
  }, 10), scrollTop: 0, onPageScroll: function onPageScroll(e) {
    this.onPageScroll1(e);
  }, refresh: function refresh() {
    app.getHasLaunched() && (this.data.hasLaunch ? this.data.isFirstInit ? (this.selectComponent("#findPoi").getDetailPoiList(), this.getFeedList(), this.getRecommendTimelineRequest(REPLACE), this.getFriendsTimelineRequest(), this.setData({ isFirstInit: !1 })) : TITLE_TAB_FIND == this.data.currentTitleTab ? this.selectComponent("#findPoi").getDetailPoiList() : TITLE_TAB_FR == this.data.currentTitleTab && (TAB_RECOMMEND == this.data.currentTab ? (this.getFeedList(), this.getRecommendTimelineRequest(REPLACE)) : TAB_FRIEND == this.data.currentTab ? this.getFriendsTimelineRequest() : TAB_FOLLOW == this.data.currentTab && this.getFollowTimelineRequest(REPLACE)) : this.stopPullDownRefresh());
  }, tryFirstPullDownRefresh: function tryFirstPullDownRefresh() {
    this.data.hasExecutedFirstPullDownRefresh ? console.log("tryFirstPullDownRefresh, hasExecutedFirstPullDownRefresh, return") : (console.log("tryFirstPullDownRefresh, startPullDownRefresh"), this.data.hasExecutedFirstPullDownRefresh = !0, this.onPullDownRefresh());
  }, getFriendsTimelineRequest: function getFriendsTimelineRequest(e) {
    var t = this;if (app.getHasLaunched()) {
      var n = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetPoiList", { location: n, options: { entryType: 1, sortType: 2 } }).send(function (e) {
        if (e.poi && e.poi.length) {
          var n = renderDataUtil.getRenderPoiInfoList(e.poi),
              o = 0;n && n.length && (o = n.length), t.setData({ friendTalkAboutList: n.slice(0, 3), friendTalkAboutListLen: o }), t.data.currentTitleTab == TITLE_TAB_FIND ? t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_EXPOSED) : t.data.currentTitleTab == TITLE_TAB_FR && t.data.currentTab == TAB_FRIEND && t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED);
        }
      });var o = util.uuid();new cgi.SimpleRequest("getfriendvisitpage", { location: n, context: "", requestId: o, newOnly: 0 }).ensureNoSameUrlProcessing().send(function (e) {
        if (t.data.currentTab === TAB_FRIEND && t.stopPullDownRefresh(), e.info && e.info.length) {
          var n = [];e.info.forEach(function (e) {
            if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT) n.push({ comment: e.comment, unqiue: e.comment.id, visitId: e.visitId, poi: e.poi, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: o, recId: e.comment && e.comment.recId ? e.comment.recId : "", recType: e.comment && e.comment.recType ? e.comment.recType : 0 } });else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK) n.push({ comment: e.mark.referComment, unqiue: e.mark.referComment.id, visitId: e.visitId, poi: e.poi, markInfo: { contact: e.mark.contact, friendMarkCount: e.mark.friendMarkCount }, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: o, recId: e.mark.referComment && e.mark.referComment.recId ? e.mark.referComment.recId : "", recType: e.mark.referComment && e.mark.referComment.recType ? e.mark.referComment.recType : 0 } });else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
              var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);n.push({ comment: t, unqiue: t.id, visitId: e.visitId, poi: e.poi, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: o, recId: "", recType: 0 } });
            } else console.error("getfriendvisitpage CGI, type is MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
          }), t.setData({ impressionDataList: n, context: e.context, continueFlag: e.continueFlag });
        } else t.setData({ impressionDataList: [], context: "", continueFlag: 0, userInfo: app.globalData.userInfo });t.setData({ isFriendTimelineInited: !0 }), t.setData({ shouldShowBottomLoadingFriend: !!t.data.continueFlag }), t.updateNormalPostButtonAppearanceForTabStyle();
      }, function (e) {
        t.data.currentTab === TAB_FRIEND && t.stopPullDownRefresh(), t.updateNormalPostButtonAppearanceForTabStyle();
      }), t.friendObserver && t.friendObserver.disconnect(), t.data.lastFriendsImpressionPreloadIndex = -1, t.friendObserver = t.createObserveIntersection(TAB_FRIEND);
    }
  }, getFriendsTimelineRequestNextPage: function getFriendsTimelineRequestNextPage() {
    if (app.getHasLaunched()) {
      var e = this,
          t = appLaunchData.getUserLocation(),
          n = util.uuid();new cgi.SimpleRequest("getfriendvisitpage", { location: t, context: e.data.context, requestId: n }).ensureNoSameUrlProcessing().send(function (t) {
        if (t.info && t.info.length) {
          var o = [];t.info.forEach(function (e) {
            if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT) o.push({ comment: e.comment, unqiue: e.comment.id, visitId: e.visitId, poi: e.poi, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: n, recId: e.comment && e.comment.recId ? e.comment.recId : "", recType: e.comment && e.comment.recType ? e.comment.recType : 0 } });else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK) o.push({ comment: e.mark.referComment, unqiue: e.mark.referComment.id, visitId: e.visitId, poi: e.poi, markInfo: { contact: e.mark.contact, friendMarkCount: e.mark.friendMarkCount }, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: n, recId: e.mark.referComment && e.mark.referComment.recId ? e.mark.referComment.recId : "", recType: e.mark.referComment && e.mark.referComment.recType ? e.mark.referComment.recType : 0 } });else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
              var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);o.push({ comment: t, unqiue: t.id, visitId: e.visitId, poi: e.poi, reportData: { scene: reportEnum.enumSceneType.TIMELINE, pageId: reportEnum.enumPageName.TIMELINE, requestId: n, recId: "", recType: 0 } });
            } else console.error("getfriendvisitpage CGI, type is MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
          });for (var i = e.data.impressionDataList, a = o, r = {}, s = i.length; s < i.length + a.length; s++) {
            r["impressionDataList[" + s + "]"] = o[s - i.length];
          }e.setData(r), e.friendObserver && e.friendObserver.disconnect(), e.friendObserver = e.createObserveIntersection(TAB_FRIEND);
        }e.data.context = t.context, e.data.continueFlag = t.continueFlag, e.setData({ shouldShowBottomLoadingFriend: !!e.data.continueFlag }), e.updateNormalPostButtonAppearanceForTabStyle();
      });
    }
  }, getRecommendTimelineRequest: function getRecommendTimelineRequest(e) {
    if (app.getHasLaunched()) {
      var t = this;t.data.isFristGetData && (app.globalData.appLaunchReportData.firstGetFriendsTimelineStartTime = new Date().getTime()), e || (t.data.contextRecommend = "", t.data.continueFlagRecommend = 1);var n = appLaunchData.isUsingRealCurrentLocation(),
          o = appLaunchData.getUserLocation(),
          i = util.uuid();new cgi.SimpleRequest("GetRecommendVisitPage", { location: o, context: t.data.contextRecommend, requestId: i }).ensureNoSameUrlProcessing().send(function (o) {
        if (e == REPLACE && t.data.currentTab == TAB_RECOMMEND && t.stopPullDownRefresh(), t.data.isFristGetData && t.checkAndReportAppLaunchData(), t.data.contextRecommend = o.context, t.data.continueFlagRecommend = o.continueFlag, t.data.currentTab == TAB_RECOMMEND) {
          var a = !0;t.data.continueFlagRecommend || (a = !1), t.setData({ shouldShowBottomLoadingRecommend: a });
        }if (o.info && o.info.length) {
          var r = [];if (o.info.forEach(function (e) {
            var t = e.type;if (enumRecommendVisitInfoType.impression == t) {
              var o = e.impression,
                  a = e.poi;r.push({ unqiue: o.id, type: enumRecommendVisitInfoType.impression, comment: Object.assign(o, { createTime: "", contact: Object.assign(o.contact, { isFriendsLabelOnNameShown: 1 === o.contact.type }) }), poi: a, isUsingRealCurrentLocation: n, reportData: { scene: reportEnum.enumSceneType.TIMELINE_RECOMMEND, pageId: reportEnum.enumPageName.TIMELINE, requestId: i, recId: o && o.recId ? o.recId : "", recType: o && o.recType ? o.recType : 0 } });
            } else if (enumRecommendVisitInfoType.topic == t) {
              var s = e.topic;r.push({ unqiue: s.id, type: enumRecommendVisitInfoType.topic, width: impressionSmallContants.width, height: 248 * impressionSmallContants.width / 178, topic: s });
            }
          }), e) t.waterfall.append(r), t.impressionDataListRecommend = t.impressionDataListRecommend.concat(r);else {
            var s = r.slice();t.waterfall.replace(s), t.impressionDataListRecommend = r;
          }t.recommendObserver && t.recommendObserver.disconnect(), e || (t.data.lastRecommendImprPreloadIndex = -1), t.recommendObserver = t.createObserveIntersection(TAB_RECOMMEND), e || (t.exposedTopics = {}), t.topicObserver && t.topicObserver.disconnect(), t.topicObserver = t.createObserveIntersection4Topic();
        }t.data.isFristGetData && app.checkAndShowModifyUserLocationTip(), t.data.isFristGetData = !1, t.updateNormalPostButtonAppearanceForTabStyle();
      }, function (n) {
        e == REPLACE && t.data.currentTab == TAB_RECOMMEND && t.stopPullDownRefresh(), t.data.isFristGetData && (t.checkAndReportAppLaunchData(), app.checkAndShowModifyUserLocationTip()), t.data.isFristGetData = !1, t.updateNormalPostButtonAppearanceForTabStyle();
      });
    }
  }, shouldUseWaterfallFollow: !0, getFollowTimelineRequest: function getFollowTimelineRequest(e) {}, onReachBottom: function onReachBottom() {
    app.getHasLaunched() && (this.data.currentTitleTab == TITLE_TAB_FIND ? this.selectComponent("#findPoi").onReachBottom() : this.data.currentTitleTab == TITLE_TAB_FR && (this.data.currentTab == TAB_FRIEND ? this.data.continueFlag && this.getFriendsTimelineRequestNextPage() : this.data.currentTab == TAB_RECOMMEND ? this.data.continueFlagRecommend && this.getRecommendTimelineRequest(APPEND) : this.data.currentTab == TAB_FOLLOW && this.data.continueFlagFollow && this.getFollowTimelineRequest(APPEND)));
  }, onTapPost: function onTapPost(e) {
    if (app.getHasLaunched()) {
      var t = { startScene: reportEnum.enumPageName.TIMELINE, lastScene: reportEnum.enumPageName.TIMELINE, nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish" };reportPostImpression.startPostImpressionProcess(t);
    }
  }, checkAndReportAppLaunchData: function checkAndReportAppLaunchData() {
    if (app.getHasLaunched() && !(app.globalData.appLaunchSessionId <= 0)) {
      var e = new Date().getTime();app.globalData.appLaunchReportData.getFriendsTimelineTime = e - app.globalData.appLaunchReportData.firstGetFriendsTimelineStartTime, app.globalData.appLaunchReportData.totalTimeCost = e - app.globalData.appLaunchReportData.appLaunchStartTime, app.reportAppLaunchTimeCost();
    }
  }, bindtapIndexSearch: function bindtapIndexSearch() {
    console.log("tapIndexSearch"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.SEARCH_CLIKED), wx.navigateTo({ url: "/pages/search_index/search_index" });
  }, bindTapToMePage: function bindTapToMePage() {
    wx.navigateTo({ url: "/pages/me/me" });
  }, bindtapToMention: function bindtapToMention() {
    app.getHasLaunched() && wx.navigateTo({ url: "/pages/mention/mention?unreadMentionCountSeq=" + (this.data.unreadMentionCountSeq || 0) });
  }, onTapHotTopicTip: function onTapHotTopicTip(e) {
    console.log("onTapHotTopicTip: ", +e);var t = e.currentTarget.dataset.index;if (void 0 !== t) {
      var n = this.data.hotTopicTips[t];n ? (this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.HOT_TOPIC_CLICKED, n.id), wx.navigateTo({ url: "/pages/index_tag/index_tag?name=" + encodeURIComponent(n.name) + "&feedId=" + n.id })) : console.error("onTapHotTopicTip, invalid index: " + t);
    } else console.error("onTapHotTopicTip, index is undefined, return");
  }, getFeedList: function getFeedList(e) {
    console.log("check getFeedList");var t = this;appLaunchData.addConfirmUserLocationListener(function () {
      console.log("start getFeedList");var n = appLaunchData.isUsingRealCurrentLocation(),
          o = appLaunchData.getUserLocation();new cgi.SimpleRequest("getfeedlist", { location: o }).ensureNoSameUrlProcessing().send(function (o) {
        if (e && e(), console.log("getFeedList, OK"), o.feed && o.feed.length) {
          for (var i = t.data.hotTopicTips, a = t.data.nearbyPoiCount, r = t.data.currentAreaName, s = t.data.payRecommendPoiInfoList, c = "", p = 0; p < o.feed.length; p++) {
            var d = o.feed[p];if (d.type == MMLIFEAPP_FEED_INFO_TYPE_NEARBY_POI) {
              if (!n) {
                console.log("getFeedList response, feedItem.type is 1, not using real location, ignore");continue;
              }if (!d.nearbyPoiFeed) {
                console.error("getFeedList response, feedItem.type is 1 but no nearbyPoiFeed");continue;
              }d.nearbyPoiFeed.poiCount && (a = parseInt(d.nearbyPoiFeed.poiCount)), c = d.nearbyPoiFeed.selfMarkCount ? "有" + d.nearbyPoiFeed.selfMarkCount + "家想去" : d.nearbyPoiFeed.friendVisitCount ? "朋友去过" + d.nearbyPoiFeed.friendVisitCount + "家" : d.nearbyPoiFeed.friendMarkCount ? "朋友想去" + d.nearbyPoiFeed.friendMarkCount + "家" : "有" + a + "家餐厅";
            } else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_RANK_LIST) {
              if (!d.rankListFeed) {
                console.error("getFeedList response, feedItem.type is 2 but no rankListFeed");continue;
              }if (n) {
                if (!d.rankListFeed.currentArea) {
                  console.error("getFeedList response, feedItem.type is 2 but no rankListFeed.currentArea");continue;
                }if (!d.rankListFeed.currentArea.id || !d.rankListFeed.currentArea.name) {
                  console.error("getFeedList response, feedItem.type is 2, invalid currentArea: " + JSON.stringify(d.rankListFeed.currentArea));continue;
                }var m = { id: d.rankListFeed.currentArea.id, name: d.rankListFeed.currentArea.name };appLaunchData.setCurrentArea(m), r = d.rankListFeed.currentArea.name;
              }if (!d.rankListFeed.allRankArea || !d.rankListFeed.allRankArea.length) {
                console.error("getFeedList response, feedItem.type is 2 but no rankListFeed.allRankArea");continue;
              }for (var l = [], u = 0; u < d.rankListFeed.allRankArea.length; u++) {
                var T = d.rankListFeed.allRankArea[u];if (T.id && T.name) {
                  var I = { id: T.id, name: T.name };l.push(I);
                } else console.error("getFeedList response, feedItem.type is 2, invalid rankAreaItem in allRankArea, rankAreaIndex is: " + u);
              }appLaunchData.setAllRankArea(l), appLaunchData.setAllRankCategory(d.rankListFeed.allRankCategory);
            } else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_HOT_TAG) ;else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_PAY_RECOMMEND_POI) {
              if (!d.payRecommendPoiFeed || !d.payRecommendPoiFeed.poi || !d.payRecommendPoiFeed.poi.length) {
                console.error("getFeedList response, feedItem.type is 4 but no payRecommendPoiFeed.poi data");continue;
              }s = [];for (var f = 0; f < d.payRecommendPoiFeed.poi.length; f++) {
                var g = d.payRecommendPoiFeed.poi[f],
                    h = renderDataUtil.getPoiInfoForPostImpression(g);h && h.id ? s.push(h) : console.error("cannot get valid payRecommendPoiInfo");
              }
            } else console.error("invalid feedItem.type: " + d.type);
          }t.setData({ hotTopicTips: i, nearbyPoiCount: a, nearbyText: c, currentAreaName: r, payRecommendPoiInfoList: s }), util.notifyOneTimeEvent("event_timeline_js_getFeedList");
        } else console.error("no data at feed from getFeedList response");
      }, function (e) {
        util.notifyOneTimeEvent("event_timeline_js_getFeedList"), console.error("getFeedList, error: " + JSON.stringify(e));
      });
    });
  }, onTapFriendTalkAbout: function onTapFriendTalkAbout() {
    console.log("tapNearbyPoi"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.NEARBY_POI_CLICKED);var e = this.data.nearbyPoiCount ? "找餐厅" : "广州的美食",
        t = "/pages/index_tag2/index_tag2?name=" + encodeURIComponent(e) + "&feedId=0&nearcount=" + this.data.nearbyPoiCount;wx.navigateTo({ url: t });
  }, onTapRankList: function onTapRankList() {
    console.log("tapRankList"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.RANK_LIST_CLICKED), wx.navigateTo({ url: "/pages/rank_list_new/rank_list_new" });
  }, onTapRecommendPoi: function onTapRecommendPoi() {
    this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.RECOMMEND_POI_CLICK), wx.navigateTo({ url: "/pages/recommend_poi/recommend_poi" });
  }, addGlobalFunc: function addGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var n = t.impressionId,
            o = t.commentCount ? t.commentCount : 0;console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount");for (var i = e.data.impressionDataList, a = 0; a < i.length; a++) {
          var r = i[a];if (r.unqiue == n) {
            if (r.comment) {
              r.comment.subCommentCount = o, console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount: " + o + ", index: " + a);var s = new PoiModel(r.poi.base.id).getValue(),
                  c = new CommentModel(n).getValue();s && void 0 !== s.isMark && (r.poi.ugc.isMark = s.isMark), c && void 0 !== c.isLike && void 0 !== c.likeCount && (r.comment.isLike = c.isLike, r.comment.likeCount = c.likeCount), e.setData(_defineProperty({}, "impressionDataList[" + a + "]", r));break;
            }console.error("timeline, timelineItem.comment undefined!");break;
          }
        }
      } else console.error("timeline, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.addImpression, function (t) {
      console.log("timeline, infoUpdateEventListeners, addImpression, infoObject: " + JSON.stringify(t)), t && t.shouldUpdateTimelineManually && e.refresh();
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        var n = t.impressionId;console.log("timeline, infoUpdateEventListeners, deleteImpression, impressionId: " + n);for (var o = 0; o < e.data.impressionDataList.length; o++) {
          if (e.data.impressionDataList[o].unqiue == n) {
            e.setData(_defineProperty({}, "impressionDataList[" + o + "]", {})), e.data.hasDelOpOnImprList = 1;break;
          }
        }e.data.impressionDataList.every(function (e) {
          return !e.hasOwnProperty("unqiue");
        }) && (console.log("timeline, infoUpdateEventListeners, deleteImpression, empty. refresh."), e.refresh());
      } else console.error("timeline, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.addLaunchListener(function () {
      app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.timeline);
    });
  }, reportTopRegionAction: function reportTopRegionAction(e, t) {
    var n = parseInt(e);t || (t = ""), reporter.getReporter(17332).sessionId(reportSession.getId()).action(n).actionItem(t).reportToServer();
  }, exposedTopics: {}, createObserveIntersection4Topic: function createObserveIntersection4Topic() {
    var e = this,
        t = wx.createIntersectionObserver(e, { thresholds: [.8, 1], initialRatio: 0, observeAll: !0 });return t.relativeToViewport(), t.observe(".js-intersection-topic", function (t) {
      var n = t.dataset,
          o = n.topic,
          i = n.index;e.exposedTopics[o.id] || (e.exposedTopics[o.id] = 1, void 0 !== i && e.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TOPIC_EXPOSED, o.id + ";" + i));
    }), t;
  }, createObserveIntersection: function createObserveIntersection(e) {
    var t = this;if (void 0 !== e) {
      var n = wx.createIntersectionObserver(t, { thresholds: [.4, 1], initialRatio: 0, observeAll: !0 });return n.relativeToViewport(), n.observe(".js-intersection-impression", function (n) {
        if (e === t.data.currentTab) {
          var o = n.dataset.index,
              i = void 0;if (t.data.currentTab === TAB_FRIEND ? i = t.data.impressionDataList[o] : t.data.currentTab === TAB_RECOMMEND ? i = t.impressionDataListRecommend[o] : t.data.currentTab === TAB_FOLLOW && (i = t.data.recommendUsers && t.data.recommendUsers.length ? t.impressionDataListFollow[o] : t.data.impressionDataListFollow2[o]), i && i.comment) {
            void 0 === t.data.lastRecommendImprPreloadIndex && (t.data.lastRecommendImprPreloadIndex = -1), t.data.currentTab === TAB_RECOMMEND && o > t.data.lastRecommendImprPreloadIndex ? 0 == o % 2 && (t.onReachBottom(), t.data.lastRecommendImprPreloadIndex = o) : t.data.currentTab === TAB_FOLLOW && o > t.data.lastRecommendImprPreloadIndex ? 0 == o % 2 && (t.onReachBottom(), t.data.lastFollowImprPreloadIndex = o) : t.data.currentTab === TAB_FRIEND && o > t.data.lastFriendsImpressionPreloadIndex && (0 == (o % 5 == 0) && t.onReachBottom(), t.data.lastFriendsImpressionPreloadIndex = o);var a = "";i.comment && i.comment.id && (a = i.comment.id);var r = "";if (i && i.poi && i.poi.base && (r = i.poi.base.id), a && r && !app.globalData.kv16878ReportData.timelineExposedSet.has(a)) {
              app.globalData.kv16878ReportData.timelineExposedSet.add(a), kv16878ImpressionExposedCount++;var s = 0;i.markInfo && i.markInfo.friendMarkCount && (s = 1);var c = util.getImpressionType(i.comment.contact.type);s && (c = reportEnum.enumFeedImpressionType.MARKED);var p = 0;i && i.comment && i.comment.subCommentCount && (p = i.comment.subCommentCount);var d = reportEnum.enumFeedAction.FEED_EXPOSED,
                  m = i.reportData.scene,
                  l = i.reportData.requestId || "",
                  u = i.reportData.recId || "",
                  T = i.reportData.recType || 0,
                  I = "";i.comment.tag && (I = renderDataUtil.getReasonIdString(i.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(m).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(s).poiIdString(r).impressionIdString(a).action(d).impressionType(c).requestId(l).pageId(reportEnum.enumPageName.TIMELINE).reasonId().reasonIdString(I).recId(u).recType(T).lazyReportToServer();
            }
          }
        }
      }), n;
    }
  }, kvReport16878TimeString: function kvReport16878TimeString() {
    app.addLaunchListener(function () {
      reporter.getReporter(16878).pageId(reportEnum.enumPageName.TIMELINE).sessionId(reportSession.getId()).startTime(kv16878StartTime).impressionCount().forwardedImpressionCount().viewedImpressionCount(kv16878ImpressionExposedCount).viewedForwardedImpressionCount().endTime(Math.floor(new Date().getTime() / 1e3)).impressionIdList().poiIdList().sysImpressionIdList().sysPoiIdList().unreadMentionCount().hasTabRedDot().refreshCount().hasClickedUnreadMention().viewedSysImpressionCount().viewedFriendsImpressionCount().reportToServer();
    });
  }, onTapPayRecommendPoi: function onTapPayRecommendPoi(e) {
    console.log("onTapPayRecommendPoi: " + JSON.stringify(e));var t = e.currentTarget.dataset.index;if (void 0 !== t) {
      var n = this.data.payRecommendPoiInfoList[t];if (n) {
        if (n.id) {
          var o = this,
              i = { startScene: reportEnum.enumPageName.TIMELINE, lastScene: reportEnum.enumPageName.TIMELINE, nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish", poiInfo: n, navigateToNextPageSuccess: function navigateToNextPageSuccess(e) {
              console.log("onTapPayRecommendPoi wx.navigateTo poi_comment_publish success"), setTimeout(function () {
                console.log("onTapPayRecommendPoi wx.navigateTo poi_comment_publish success, after 1 second. deletePayRecommendPoi of index: " + t), o.deletePayRecommendPoi(t);
              }, 1e3);
            } };reportPostImpression.startPostImpressionProcess(i);
        } else console.error("onTapPayRecommendPoi, no poiId of index: " + t);
      } else console.error("onTapPayRecommendPoi, invalid index: " + t);
    } else console.error("onTapPayRecommendPoi, index is undefined, return");
  }, onTapDeletePayRecommendPoi: function onTapDeletePayRecommendPoi(e) {
    console.log("onTapDeletePayRecommendPoi: " + JSON.stringify(e));var t = e.currentTarget.dataset.index;this.deletePayRecommendPoi(t);
  }, deletePayRecommendPoi: function deletePayRecommendPoi(e) {
    if (void 0 !== e) {
      var t = this.data.payRecommendPoiInfoList[e];if (t) {
        var n = this.data.payRecommendPoiInfoList;n.splice(e, 1), this.setData({ payRecommendPoiInfoList: n });var o = t.id;o ? new cgi.SimpleRequest("cancelpayrecommendpoi", { poiId: o }).send(function (e) {
          console.log("cancelpayrecommendpoi, OK");
        }, function (e) {
          console.error("cancelpayrecommendpoi, error: " + JSON.stringify(e));
        }) : console.error("deletePayRecommendPoi, no poiId of index: " + e);
      } else console.error("deletePayRecommendPoi, invalid index: " + e);
    } else console.error("deletePayRecommendPoi, index is undefined, return");
  }, onTapActivityEntry: function onTapActivityEntry(e) {
    var t = e.currentTarget.dataset.topic,
        n = e.currentTarget.dataset.index;this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TOPIC_CLICKED, t.id + ";" + n), wx.navigateTo({ url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify(t)) });
  }, onTapTitleTabItem: function onTapTitleTabItem(e) {
    var t = this;if (app.getHasLaunched()) {
      var n = e.currentTarget.dataset.index;t.data.currentTitleTab !== n && (n == TITLE_TAB_FR ? (t.data.unreadImpressionCount > 0 && !t.data.reLaunchFromComment ? t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_CLICKED_RED) : t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_CLICKED), t.setData({ unreadImpressionCount: 0 }), t.data.currentTab == TAB_FRIEND && t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED)) : n == TITLE_TAB_FIND && (t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_CLICKED), t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_EXPOSED)), t.setData({ currentTitleTab: n, isChangingTitleTab: !0 }, function () {
        wx.pageScrollTo({ scrollTop: 0, duration: 0, success: function success() {
            t.setData({ isChangingTitleTab: !1 });
          } });
      }));
    }
  }, onTapTabItem: function onTapTabItem(e) {
    var t = this;if (app.getHasLaunched()) {
      var n = e.currentTarget.dataset.index;this.data.currentTab !== n ? (n === TAB_FRIEND ? (t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED), t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FRIEND_CLICKED)) : n === TAB_RECOMMEND && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_RECOMMEND_CLICKED), t.setData({ currentTab: n, isChangingTab: !0 }, function () {
        wx.pageScrollTo({ scrollTop: 0, duration: 0, success: function success() {
            t.setData({ isChangingTab: !1 });
          } });
      }), n === TAB_FRIEND ? ((t.data.unreadImpressionCount > 0 || !t.data.impressionDataList.length) && t.refresh(), this.friendObserver && this.friendObserver.disconnect(), this.friendObserver = this.createObserveIntersection()) : n === TAB_RECOMMEND ? (this.recommendObserver && this.recommendObserver.disconnect(), this.recommendObserver = this.createObserveIntersection(), this.topicObserver && this.topicObserver.disconnect(), this.topicObserver = this.createObserveIntersection4Topic()) : n === TAB_FOLLOW && (t.impressionDataListFollow.length || t.getFollowTimelineRequest(REPLACE), this.followObserver && this.followObserver.disconnect(), this.followObserver = this.createObserveIntersection()), this.updateNormalPostButtonAppearanceForTabStyle()) : console.log("onTapTabItem, this.data.currentTab == tabID, return");
    }
  }, updateNormalPostButtonAppearanceForTabStyle: function updateNormalPostButtonAppearanceForTabStyle() {
    var e = 1;0 == this.data.isFirstInit && this.data.currentTab == TAB_FRIEND && (this.data.impressionDataList && this.data.impressionDataList.length || (e = 0)), this.setData({ shouldShowNormalPostButton: e });
  }, followUserIds: {}, onTapFollowBtn: function onTapFollowBtn(e) {
    var t,
        n = e.currentTarget.dataset.index,
        o = e.currentTarget.dataset.user,
        i = o.userId,
        a = o.follow,
        r = o.ugc.fansCount || 0,
        s = 1 == a ? 0 : 1,
        c = 1 == s ? r + 1 : r - 1;this.setData((_defineProperty(t = {}, "recommendUsers[" + n + "].follow", s), _defineProperty(t, "recommendUsers[" + n + "].ugc.fansCount", c), t));var p = 1 == a ? 2 : 1;new cgi.SimpleRequest("FollowUser", { userId: i, type: p }).send(function (e) {});
  }, bindtapToUserProfile: function bindtapToUserProfile(e) {
    var t = e.currentTarget.dataset.contact;0 == t.type ? wx.navigateTo({ url: "/pages/me/me" }) : wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t)) });
  }, onTapBackButton: function onTapBackButton() {
    util.appNavigateBack();
  }, toFriendTalkAbout: function toFriendTalkAbout() {
    wx.navigateTo({ url: "/pages/friend_talk_about/friend_talk_about?name=" + encodeURIComponent("朋友提到的餐厅") + "&pageScene=15" }), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_CLICKED);
  } }, "onTapFriendTalkAbout", function () {
  wx.navigateTo({ url: "/pages/friend_talk_about/friend_talk_about?name=" + encodeURIComponent("朋友提到的餐厅") + "&pageScene=8" }), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_CLICKED);
})); 
 			}); 	require("pages/timeline/timeline.js");
 		__wxRoute = 'pages/friend_talk_about/friend_talk_about';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/friend_talk_about/friend_talk_about.js';	define("pages/friend_talk_about/friend_talk_about.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _data;function _defineProperty(e, a, t) {
  return a in e ? Object.defineProperty(e, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = t, e;
}var cgi = require("../../utils/cgi"),
    app = getApp(),
    util = require("../../utils/util"),
    questionStorage = require("../../utils/questionStorage"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    storage = require("../../utils/storage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    mixinCss = require("../../utils/mixinCss"),
    chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    schema = require("../../utils/model/model_schema"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    cssFilterHeight = 102;MMPage({ data: (_data = { isIpx: util.isIpx(), scrollViewHeight: wx.getSystemInfoSync() - util.rpx2px(cssFilterHeight), name: "", context: "", continueFlag: 1, poiList: [], reasonId: 0, shouldShowMask: !1, shouldShowFilterFixed: !1, areaCategory: [], shouldShowAreaCategoryPanel: !1, resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" }, _defineProperty(_data, "areaCategoryLeftId", "localId_10"), _defineProperty(_data, "areaCategoryRightId", "localId_12"), _defineProperty(_data, "menuCategory", [{ id: "wx_filter0", name: "全部类别" }]), _defineProperty(_data, "shouldShowMenuCategoryPanel", !1), _defineProperty(_data, "resultSelectedMenuCategoryId", ""), _defineProperty(_data, "resultSelectedMenuCategoryName", "菜系"), _defineProperty(_data, "orderOptions", [{ id: "2", name: "综合排序" }, { id: "1", name: "距离优先" }]), _defineProperty(_data, "shouldShowOrderPanel", !1), _defineProperty(_data, "resultSelectedOrderId", "1"), _defineProperty(_data, "resultSelectedOrderName", "距离优先"), _defineProperty(_data, "isInited", !1), _defineProperty(_data, "useRealCurrentLocationToGetData", appLaunchData.isUsingRealCurrentLocation()), _data), defaultReportData: { pageRequestId: 0, poiExposedObjSet: {}, pageName: reportEnum.enumPageName.FRIEND_TALK_ABOUT }, mmReportData: { pageRequestId: 0, poiExposedObjSet: {}, pageName: reportEnum.enumPageName.FRIEND_TALK_ABOUT }, onLoad: function onLoad(e) {
    var a = this;a.mmReportData = util.clone(a.defaultReportData), a.mmReportData.scene = +e.pageScene, wx.hideShareMenu(), a.setData({ shouldShowBottomLoading: !0 }), app.addLaunchListener(function () {
      app.checkAndUpdateUserCurrentLocation(), a.setData({ useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }), appLaunchData.isUsingRealCurrentLocation() || a.setData({ orderOptions: [{ id: "2", name: "综合排序" }] }), a.setData({ resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" });var e = appLaunchData.getUserLocation();new cgi.SimpleRequest("getcategory", { location: e }).send(function (e) {
        var t = e.area,
            r = [];t.forEach(function (e) {
          var a = {};a.name = e.name, a.id = e.id, e.subCategory && e.subCategory.length && (a.subCategory = e.subCategory), r.push(a);
        }), appLaunchData.isUsingRealCurrentLocation() ? r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_12", name: "1公里" }, { id: "localId_13", name: "2公里" }, { id: "localId_14", name: "5公里" }] }) : r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_11", name: "默认" }] });var o = e.friendPoiCategory.map(function (e) {
          return { id: e.id, name: e.name, label: e.name + "(" + e.poiCount + ")" };
        }),
            i = 0;e.friendPoiCategory.forEach(function (e) {
          return i += e.poiCount;
        }), o.unshift({ id: "wx_filter0", name: "全部类别", label: "全部类别(" + i + ")" }), a.setData({ areaCategory: r, menuCategory: o }), a.getDetailPoiList();
      });
    }), reporter.getReporter(16501).pageId(a.mmReportData.pageName).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
  }, onReady: function onReady() {}, getDetailPoiList: function getDetailPoiList(e) {
    var a = this;a.setData({ shouldShowBottomLoading: !0 }), e || (a.setData({ poiList: [], context: "" }), a.mmReportData.pageRequestId = util.getTimeRandomId(), a.mmReportData.requestIdStr = util.guid());var t = { entryType: 1 };a.data.resultSelectedAreaCategoryId && ("localId_10" == a.data.resultSelectedAreaCategoryId || ("localId_11" == a.data.resultSelectedAreaCategoryId ? (t.radius = 3e4, a.mmReportData.area = 3e4) : "localId_12" == a.data.resultSelectedAreaCategoryId ? (t.radius = 1e3, a.mmReportData.area = 1e3) : "localId_13" == a.data.resultSelectedAreaCategoryId ? (t.radius = 2e3, a.mmReportData.area = 2e3) : "localId_14" == a.data.resultSelectedAreaCategoryId ? (t.radius = 5e3, a.mmReportData.area = 5e3) : (t.areaId = a.data.resultSelectedAreaCategoryId, a.mmReportData.area = a.data.resultSelectedAreaCategoryId))), a.data.resultSelectedMenuCategoryId && (t.categoryId = [a.data.resultSelectedMenuCategoryId], a.mmReportData.menuCategoryId = a.data.resultSelectedMenuCategoryId), a.data.resultSelectedOrderId && (t.sortType = +a.data.resultSelectedOrderId, a.mmReportData.sortType = a.data.resultSelectedOrderId);var r = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetPoiList", { location: r, options: t, context: a.data.context, requestId: a.mmReportData.requestIdStr }).ensureNoSameUrlProcessing().send(function (t) {
      if (a.data.isInited = !0, a.data.context = t.context, a.data.continueFlag = t.continueFlag, !t.poi && !a.data.poiList.length) return a.setData({ shouldShowBottomLoading: !1 }), void wx.showToast({ title: "没有发现符合条件的门店", icon: "none", duration: 2500 });a.mmPrevPage && a.mmPrevPage.mmReportData.pageName && a.mmPrevPage.mmReportData.pageName;var r = [];if (t.poi.forEach(function (e) {
        r.push({ poi: renderDataUtil.getRenderPoiInfo(e), reportData: { pageId: a.mmReportData.pageName || "", scene: a.mmReportData.scene || "", prevPageId: reportEnum.enumPageName.TIMELINE, menuCategoryId: a.mmReportData.menuCategoryId || "", price: a.mmReportData.price || "", area: a.mmReportData.area || "", query: a.mmReportData.query || "", requestId: a.mmReportData.requestIdStr || "", sortType: a.mmReportData.sortType || "" } });
      }), e) {
        for (var o = a.data.poiList, i = r, d = {}, n = o.length; n < o.length + i.length; n++) {
          d["poiList[" + n + "]"] = i[n - o.length];
        }a.setData(d);
      } else a.setData({ poiList: r });a.setData({ shouldShowBottomLoading: !1 }), declareBinding({ instance: a, schema: schema.PoiSchema, arrayPath: "poiList", mapping: { "poi.id": "id", "poi.isMark": "isMark" } });
    });
  }, bindtapMenuFilter: function bindtapMenuFilter(e) {
    this.data.shouldShowMenuCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !0, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 });
  }, bindtapAreaFilter: function bindtapAreaFilter(e) {
    this.data.shouldShowAreaCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !0, shouldShowOrderPanel: !1 });
  }, bindtapOrderFilter: function bindtapOrderFilter() {
    this.data.shouldShowOrderPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !0 });
  }, bindtapMask: function bindtapMask(e) {
    this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 });
  }, bindMenuCategorySelect: function bindMenuCategorySelect(e) {
    console.log("bindMenuCategorySelect", e);var a = e.detail.id,
        t = e.detail.name;this.setData({ resultSelectedMenuCategoryId: a, resultSelectedMenuCategoryName: t }), this.bindtapMask(), this.getDetailPoiList();
  }, bindAreaCategorySelect: function bindAreaCategorySelect(e) {
    var a = e.detail.id,
        t = e.detail.name;this.setData({ resultSelectedAreaCategoryId: a, resultSelectedAreaCategoryName: t }), this.bindtapMask(), this.getDetailPoiList();
  }, bindOrderSelect: function bindOrderSelect(e) {
    var a = e.detail.id,
        t = e.detail.name;this.setData({ resultSelectedOrderId: a, resultSelectedOrderName: t }), this.bindtapMask(), this.getDetailPoiList();
  }, onReachBottom: function onReachBottom(e) {
    this.data.continueFlag && this.getDetailPoiList(!0);
  }, noop: function noop() {} }); 
 			}); 	require("pages/friend_talk_about/friend_talk_about.js");
 		__wxRoute = 'pages/index_tag/index_tag';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index_tag/index_tag.js';	define("pages/index_tag/index_tag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t];for (var n in o) {
      Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
  }return e;
};function _defineProperty(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}var cgi = require("../../utils/cgi"),
    app = getApp(),
    util = require("../../utils/util"),
    questionStorage = require("../../utils/questionStorage"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    storage = require("../../utils/storage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    mixinCss = require("../../utils/mixinCss"),
    chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    APPEND = 1,
    REPLACE = 0,
    impressionExposedSet = new Set();MMPage({ data: { shouldShowBottomLoading: !0, currentPageId: reportEnum.enumPageName.HOT_TOPIC, requestId: "", reasonId: 0, context: "", continueFlag: 1, broadcastTextArray: [] }, mmReportData: { pageName: reportEnum.enumPageName.HOT_TOPIC, pageRequestId: 0 }, onLoad: function onLoad(e) {
    var t = this;t.data.reasonId = +e.feedId;var o = decodeURIComponent(e.name || "");t.setData({ title: o }), app.addLaunchListener(function () {
      wx.setNavigationBarTitle({ title: o }), t.cgiGetRecommendImpression(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.HOT_TOPIC).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), t.updateGlobalFunc();
    }), wx.onTapNavigationBarRightButton(function (e) {
      console.log("onTapNavigationBarRightButton: " + JSON.stringify(e)), t.shareAppMessage();
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc();
  }, cgiGetRecommendImpression: function cgiGetRecommendImpression(e) {
    var t = this;t.data.requestId = util.uuid(), e || (t.data.context = "", t.data.continueFlag = 1);var o = appLaunchData.isUsingRealCurrentLocation(),
        n = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetRecommendImpression", { location: n, requestId: t.data.requestId, reasonId: t.data.reasonId, context: t.data.context, scene: 1 == t.options.scene ? 1 : 0 }).ensureNoSameUrlProcessing().send(function (n) {
      if (1 == t.options.scene && !t.data.context) {
        var r = (n.activityBroadcast || []).map(function (e) {
          return e.contact.nickName + " 推荐了 " + e.poiName;
        });t.setData({ broadcastTextArray: r });
      }var a = [];if (t.setData({ context: n.context, continueFlag: n.continueFlag }), n.continueFlag || t.setData({ shouldShowBottomLoading: !1 }), n.info && n.info.comment && n.info.comment.length && (a = n.info.comment.map(function (e) {
        return { unqiue: e.comment.id, comment: Object.assign(e.comment, { tag: [], createTime: "" }), poi: e.poi, isUsingRealCurrentLocation: o, reportData: { pageId: reportEnum.enumPageName.HOT_TOPIC, requestId: t.data.requestId, recId: e.comment && e.comment.recId ? e.comment.recId : "", recType: e.comment && e.comment.recType ? e.comment.recType : 0 } };
      })), e) {
        for (var i = t.data.impressionList, s = a, p = {}, m = i.length; m < i.length + s.length; m++) {
          p["impressionList[" + m + "]"] = a[m - i.length];
        }t.setData(_extends({}, p));
      } else t.setData({ impressionList: a });t.pageObserveIntersection();
    });
  }, onReachBottom: function onReachBottom() {
    this.cgiGetRecommendImpression(APPEND);
  }, updateGlobalFunc: function updateGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId,
            n = t.commentCount ? t.commentCount : 0;console.log("indexTag, infoUpdateEventListeners, updateImpressionCommentCount");for (var r = e.data.impressionList, a = 0; a < r.length; a++) {
          var i = r[a];if (i.unqiue == o) {
            if (i.comment) {
              i.comment.subCommentCount = n, console.log("indexTag, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + a);var s = new PoiModel(i.poi.base.id),
                  p = new CommentModel(o);s && void 0 !== s.isMark && (i.poi.ugc.isMark = s.isMark), p && void 0 !== p.isLike && void 0 !== p.likeCount && (i.comment.isLike = p.isLike, i.comment.likeCount = p.likeCount), e.setData(_defineProperty({}, "impressionList[" + a + "]", i));break;
            }console.error("indexTag, timelineItem.comment undefined!");break;
          }
        }
      } else console.error("indexTag, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.addImpression, function (t) {
      console.log("indexTag, infoUpdateEventListeners, addImpression"), e.cgiGetRecommendImpression(REPLACE);
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId;console.log("indexTag, infoUpdateEventListeners, deleteImpression, impressionId: " + o);for (var n = 0; n < e.data.impressionList.length; n++) {
          if (e.data.impressionList[n].unqiue == o) {
            e.setData(_defineProperty({}, "impressionList[" + n + "]", {}));break;
          }
        }
      } else console.error("indexTag, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag);
  }, onTapPost: function onTapPost(e) {
    var t = "/pages/poi_comment_publish/poi_comment_publish?topicId=" + this.data.reasonId + "&topicName=" + encodeURIComponent(this.data.title),
        o = { startScene: reportEnum.enumPageName.HOT_TOPIC, lastScene: reportEnum.enumPageName.HOT_TOPIC, nextPageUrl: t };reportPostImpression.startPostImpressionProcess(o);
  }, pageObserveIntersection: function pageObserveIntersection() {
    var e = this;wx.nextTick(function () {
      e.pageObserver && e.pageObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [.4], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".impression-cell", function (t) {
        var o = t.dataset.index;if (void 0 !== o) {
          void 0 === e.data.lastImprPreloadIndex && (e.data.lastImprPreloadIndex = -1), o > e.data.lastImprPreloadIndex && o % 5 == 0 && (e.onReachBottom(), e.data.lastImprPreloadIndex = o);var n = e.data.impressionList[o];if (n) {
            var r = "";n.comment && n.comment.id && (r = n.comment.id);var a = "";if (n && n.poi && n.poi.base && (a = n.poi.base.id), r && a && !impressionExposedSet.has(r)) {
              impressionExposedSet.add(r);var i = 0;n.markInfo && n.markInfo.friendMarkCount && (i = 1);var s = util.getImpressionType(n.comment.contact.type);i && (s = reportEnum.enumFeedImpressionType.MARKED);var p = 0;n && n.comment && n.comment.subCommentCount && (p = n.comment.subCommentCount);var m = reportEnum.enumFeedAction.FEED_EXPOSED,
                  d = n.reportData.scene || "",
                  u = n.reportData.pageId || "",
                  c = n.reportData.requestId || "",
                  l = n.reportData.recId || "",
                  g = n.reportData.recType || 0;reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(i).poiIdString(a).impressionIdString(r).action(m).impressionType(s).requestId(c).pageId(u).reasonId().reasonIdString(e.data.reasonId).recId(l).recType(g).lazyReportToServer();
            }
          }
        }
      }), e.pageObserver = t;
    });
  }, shareAppMessage: function shareAppMessage() {
    var e = this;if (wx.shareAppMessageForFakeNative) {
      console.log("shareAppMessage, start");var t = e.data.impressionList[0];if (!t || !t.poi) return void console.error("shareAppMessage, no impressionData.poi, return!");var o = "";if (t.poi.base && t.poi.base.logo) {
        var n = t.poi.base.logo;n.url ? o = n.url : n.thumbUrl && (o = n.thumbUrl);
      }o && o.length || (console.error("shareAppMessage, no pic from impressionData.poi, impressionId: " + t.comment.id), o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), wx.shareAppMessageForFakeNative({ bizType: 0, title: e.data.title, desc: "精心挑选的餐厅", imageUrl: o, path: util.getCurrentPageUrl(), tailLang: "FF_Entry_Nearby", useDefaultSnapshot: !1, disableForward: !1, defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning", success: function success(t) {
          console.log("shareAppMessage success: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_SUCCESS);
        }, fail: function fail(t) {
          t.errMsg && -1 != t.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_FAILED));
        } });
    } else console.log("shareAppMessage, no api");
  }, reportShareResult: function reportShareResult(e) {
    e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.HOT_TOPIC).shareScene(reportEnum.enumPageName.HOT_TOPIC).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.reasonId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
  } }); 
 			}); 	require("pages/index_tag/index_tag.js");
 		__wxRoute = 'pages/rank_list_new/rank_list_new';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/rank_list_new/rank_list_new.js';	define("pages/rank_list_new/rank_list_new.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t];for (var o in a) {
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
  }return e;
},
    app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    appLaunchData = require("../../utils/appLaunchData"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    renderDataUtil = require("../../utils/render_data_util"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    PoiModel = require("../../utils/model/poi_model"),
    REPLACE = 0,
    APPEND = 1;MMPage({ mmReportData: { pageName: reportEnum.enumPageName.RANK_LIST }, reportData: { poiExposedIdSet: {}, poiExposedIdSet2: {}, poiExposedIdSet3: {} }, data: { tabIndex: 1, context: "", continueFlag: 1, renderPoiList: [], shouldShowBottomLoading: !0, areaOptions: [{ name: "广州市", id: "areafilter_7742324733502755168" }], selectedAreaId: "areafilter_7742324733502755168", scrollViewHeight: util.getSysInfo().windowHeight - util.rpx2px(76), context2: "", continueFlag2: 1, renderPoiList2: [], shouldShowBottomLoading2: !0, scrollViewHeight2: util.getSysInfo().windowHeight - util.rpx2px(76), poiList2EntryType: 4, typeOptions: [{ name: "最热", id: "4" }, { name: "最新", id: "6" }], selectedTypeId: "4", context3: "", continueFlag3: 1, renderPoiList3: [], shouldShowBottomLoading3: !0, categoryOptions: [{ name: "粤菜", id: "wxfilter_3" }], selectedCategoryId: "wxfilter_3", scrollViewHeight3: util.getSysInfo().windowHeight - util.rpx2px(76) }, onLoad: function onLoad(e) {
    var t = this,
        a = 1,
        o = "",
        i = "";e && e.tabIndex && (a = Number(e.tabIndex)), app.addLaunchListener(function () {
      app.checkAndUpdateUserCurrentLocation(), o = appLaunchData.getCurrentArea().id, e && e.areaId && 1 === a && (o = decodeURIComponent(e.areaId)), e && e.categoryId && 3 === a && (i = decodeURIComponent(e.categoryId));var r = appLaunchData.getAllRankArea(),
          n = appLaunchData.getAllRankCategory();t.setData({ selectedAreaId: o || "areafilter_7742324733502755168", areaOptions: r, tabIndex: a, selectedCategoryId: i || "wxfilter_3", categoryOptions: n }), t.getPoiListRequest(), t.getPoiListRequest2(), t.getPoiListRequest3();
    }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.RANK_LIST).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
  }, onTab1: function onTab1() {
    this.setData({ tabIndex: 1 });
  }, onTab2: function onTab2() {
    this.setData({ tabIndex: 2 });
  }, onTab3: function onTab3() {
    this.setData({ tabIndex: 3 });
  }, getPoiListRequest: function getPoiListRequest() {
    var e = this,
        t = appLaunchData.getUserLocation();e.setData({ renderPoiList: [], shouldShowBottomLoading: !0 }), e.data.context = "", e.data.continueFlag = 1, new cgi.SimpleRequest("getpoilist", { location: t, options: { entryType: 3, areaId: e.data.selectedAreaId }, context: e.data.context, requestId: util.uuid() }).send(function (t) {
      if (t && t.poi) {
        var a = renderDataUtil.getRenderPoiInfoList(t.poi);e.setData({ renderPoiList: a, shouldShowBottomLoading: !1 }), declareBinding({ instance: e, schema: PoiSchema, arrayPath: "renderPoiList", mapping: { id: "id", isMark: "isMark" } }), e.observeIntersection();
      }
    }, function (t) {
      e.setData({ shouldShowBottomLoading: !1 });
    });
  }, getPoiListRequest3: function getPoiListRequest3() {
    var e = this,
        t = appLaunchData.getUserLocation();e.setData({ renderPoiList3: [], shouldShowBottomLoading3: !0 }), e.data.context3 = "", e.data.continueFlag3 = 1, new cgi.SimpleRequest("getpoilist", { location: t, options: { entryType: 5, categoryId: [e.data.selectedCategoryId] }, context: "", requestId: util.uuid() }).send(function (t) {
      if (t && t.poi) {
        var a = renderDataUtil.getRenderPoiInfoList(t.poi);e.setData({ renderPoiList3: a }), declareBinding({ instance: e, schema: PoiSchema, arrayPath: "renderPoiList3", mapping: { id: "id", isMark: "isMark" } }), e.observeIntersection3();
      }e.setData({ shouldShowBottomLoading3: !1 });
    }, function (t) {
      e.setData({ shouldShowBottomLoading3: !1 });
    });
  }, getPoiListRequest2: function getPoiListRequest2(e) {
    var t = this;if (!t.data.isDoingGetPoiListRequest2) {
      var a = appLaunchData.getUserLocation();e || (t.setData({ renderPoiList2: [], shouldShowBottomLoading2: !0 }), t.data.context2 = "", t.data.continueFlag2 = 1);var o = util.uuid();t.data.isDoingGetPoiListRequest2 = !0, new cgi.SimpleRequest("getpoilist", { location: a, options: { entryType: t.data.poiList2EntryType }, context: t.data.context2, requestId: o }).send(function (a) {
        if (t.data.isDoingGetPoiListRequest2 = !1, t.data.context2 = a.context, t.data.continueFlag2 = a.continueFlag, t.setData({ shouldShowBottomLoading2: 1 == a.continueFlag }), a && a.poi) {
          var o = renderDataUtil.getRenderPoiInfoList(a.poi).map(function (e) {
            return e.ugc.markContact.length > 7 && e.ugc.markContact.splice(7, e.ugc.markContact.length - 7), e;
          });if (e) {
            for (var i = t.data.renderPoiList2, r = o, n = {}, s = i.length, d = r.length, p = s; p < s + d; p++) {
              n["renderPoiList2[" + p + "]"] = r[p - i.length];
            }t.setData(_extends({}, n));
          } else t.setData({ renderPoiList2: o });declareBinding({ instance: t, schema: PoiSchema, arrayPath: "renderPoiList2", mapping: { id: "id", isMark: "isMark" } }), t.observeIntersection2();
        }
      }, function (e) {
        t.data.isDoingGetPoiListRequest2 = !1, t.setData({ shouldShowBottomLoading2: !1 });
      });
    }
  }, bindscrolltolower2: function bindscrolltolower2() {
    this.data.continueFlag2 && this.getPoiListRequest2(APPEND);
  }, getScene: function getScene() {
    return 1 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_ALL : 2 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_MARK : 3 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_CATEGORY : void 0;
  }, bindTapItem: function bindTapItem(e) {
    var t = e.currentTarget.dataset.id,
        a = e.currentTarget.dataset.index,
        o = this.data.tabIndex;wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t) });var i = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(this.mmReportData.pageName).scene(this.getScene()).prevPage(reportEnum.enumPageName.TIMELINE).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(t).tagId(1 == o ? this.data.selectedAreaId : "").timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * i.longitude)).latitude(Math.floor(1e6 * i.latitude)).poiClickedIndex(a + 1).requestIdStr(this.data.requestId).reportToServer();
  }, bindselect: function bindselect(e) {
    e.detail.id !== this.data.selectedAreaId && (this.setData({ renderPoiList: [], shouldShowBottomLoading: !0, selectedAreaId: e.detail.id }), this.getPoiListRequest(0));
  }, bindselect3: function bindselect3(e) {
    e.detail.id !== this.data.selectedCategoryId && (this.setData({ renderPoiList3: [], shouldShowBottomLoading3: !0, selectedCategoryId: e.detail.id }), this.getPoiListRequest3(0));
  }, bindselect2: function bindselect2(e) {
    if (e.detail.id !== this.data.selectedTypeId) {
      var t = parseInt(e.detail.id);4 != t && 6 != t && (console.error("bindselect2, invalid newPoiList2EntryType: " + t), t = 4), this.setData({ renderPoiList2: [], shouldShowBottomLoading2: !0, selectedTypeId: e.detail.id, poiList2EntryType: t }), this.getPoiListRequest2(0);
    }
  }, onMark: function onMark(e) {
    var t = e.currentTarget.dataset.ismark,
        a = e.currentTarget.dataset.id,
        o = 1 == t ? 0 : 1;new PoiModel(a).setValue({ isMark: o }), new cgi.SimpleRequest("markpoi", { baseRequest: { pageId: this.mmReportData.pageName }, poiId: a, flag: o }).send(function (e) {
      console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
    }, function (e) {
      console.error("markpoi resp failed", e);
    });
  }, onTapCloseDropdown: function onTapCloseDropdown() {
    this.selectComponent("#dropdown-ranklist").onToggleDropdown();
  }, observeIntersection: function observeIntersection() {
    var e = this;wx.nextTick(function () {
      e.poiIntersectionObserver && e.poiIntersectionObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".poi-selector1", function (t) {
        var a = t.dataset,
            o = a.id,
            i = a.index;if (!e.reportData.poiExposedIdSet[o]) {
          e.reportData.poiExposedIdSet[o] = 1;var r = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_ALL).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId(e.data.selectedAreaId).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
        }
      }), e.poiIntersectionObserver = t;
    });
  }, observeIntersection3: function observeIntersection3() {
    var e = this;wx.nextTick(function () {
      e.poiIntersectionObserver3 && e.poiIntersectionObserver3.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".poi-selector3", function (t) {
        var a = t.dataset,
            o = a.id,
            i = a.index;if (!e.reportData.poiExposedIdSet3[o]) {
          e.reportData.poiExposedIdSet3[o] = 1;var r = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_CATEGORY).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId(e.data.selectedCategoryId).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
        }
      }), e.poiIntersectionObserver3 = t;
    });
  }, observeIntersection2: function observeIntersection2() {
    var e = this;wx.nextTick(function () {
      e.poiIntersectionObserver2 && e.poiIntersectionObserver2.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".poi-selector2", function (t) {
        var a = t.dataset,
            o = a.id,
            i = a.index;if (!e.reportData.poiExposedIdSet2[o]) {
          e.reportData.poiExposedIdSet2[o] = 1;var r = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_MARK).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
        }
      }), e.poiIntersectionObserver2 = t;
    });
  } }); 
 			}); 	require("pages/rank_list_new/rank_list_new.js");
 		__wxRoute = 'pages/me/me';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/me/me.js';	define("pages/me/me.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    cgiLonglink = require("../../utils/cgi_longlink"),
    appLaunchData = require("../../utils/appLaunchData"),
    util = require("../../utils/util"),
    reportEnum = require("../../utils/reportEnum"),
    mixinCss = require("../../utils/mixinCss"),
    reporter = require("../../utils/reporter"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    NumberSchema = require("../../utils/model/model_schema").NumberSchema,
    singleValueIds = require("../../utils/model/single_value_ids"),
    SHOULD_REPLACE = 0,
    SHOULD_APPEND = 1,
    impressionExposedSet = new Set(),
    poiExposedSet = new Set();MMPage({ mmReportData: { pageName: reportEnum.enumPageName.ME }, data: { shouldUseFollow: app.shouldUseFollow(), menuPositionTop: 0, isFirstInit: !0, prevTime: "", headImgUrl: "", nickName: "", fansCount: 0, followCount: 0, markLikeCountTotal: 0, impressionList: [], markList: [], impressionCount: 0, markCount: 0, contextImpression: "", continueFlagImpression: 1, showBottomLoadingViewImpression: !1, contextMark: "", continueFlagMark: 1, showBottomLoadingViewMark: !1, commentIdPicMap: {}, currentTab: 1, isTab1Inited: !1, isTab2Inited: !1, useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(), currentPageId: reportEnum.enumPageName.ME, selectedId: "2", selectedOptions: [{ name: "时间优先", id: "2" }, { name: "距离优先", id: "3" }], tab2CGIScene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK }, onLoad: function onLoad(e) {
    var t = this,
        n = 30;if (wx.canIUse("getMenuButtonBoundingClientRect")) {
      var i = wx.getMenuButtonBoundingClientRect();"android" === util.getSysInfo().platform && (i.top = i.top / 2, i.top = i.top + 8), n = i.top + 2;
    }2 == +e.tabIndex && (t.data.currentTab = 2), this.setData({ currentTab: t.data.currentTab, menuPositionTop: n }), app.globalData.pageMe = t, app.addLaunchListener(function () {
      t.setData({ shouldUseFollow: app.shouldUseFollow() }), t.addGlobalFunc(), t.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.ME).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc(), this.impressionObserver && this.impressionObserver.disconnect(), this.poiObserver && this.poiObserver.disconnect();
  }, addGlobalFunc: function addGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var n = t.impressionId,
            i = t.commentCount ? t.commentCount : 0;console.log("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + n);for (var o = !1, a = e.data.impressionList, r = 0; r < a.length; r++) {
          var s = a[r];if (s.comment.id == n) {
            s.comment.subCommentCount = i, o = !0;break;
          }
        }o && e.setData({ impressionList: a });
      } else console.error("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.addImpression, function (t) {
      console.log("me, infoUpdateEventListeners, addImpression"), e.refresh();
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        var n = t.impressionId;console.log("me, infoUpdateEventListeners, deleteImpression, impressionId: " + n);for (var i = !1, o = [], a = e.data.impressionCount, r = 0; r < e.data.impressionList.length; r++) {
          var s = e.data.impressionList[r];s.comment.id != n ? o.push(s) : (i = !0, a--);
        }i && (a < 0 && (console.error("current impressionCount is: " + e.data.impressionCount + ", after change impressionCount is: " + a + ", reset to 0"), a = 0), e.setData({ impressionCount: a, impressionList: o }));
      } else console.error("me, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.me);
  }, onShow: function onShow() {
    var e = this;e.createPoiObserveIntersection(), e.createImpressionObserveIntersection(), app.addLaunchListener(function () {
      e.data.isFirstInit ? (e.setData({ headImgUrl: app.globalData.userInfo.headImgUrl, nickName: app.globalData.userInfo.nickName, unreadMentionCount: cgiLonglink.getUnReadMentionCount(), showBottomLoadingView: !0 }), cgiLonglink.addUnReadMentionCountChangeListener("me", function (t) {
        e.setData({ unreadMentionCount: t });
      }), e.refresh()) : !e.data.useRealCurrentLocationToGetData && appLaunchData.isUsingRealCurrentLocation() && (console.log("me, onShow, useRealCurrentLocationToGetData change, startPullDownRefresh"), e.refresh());
    });
  }, refresh: function refresh() {
    var e = this,
        t = e.data.tab2CGIScene,
        n = appLaunchData.getUserLocation(),
        i = appLaunchData.isUsingRealCurrentLocation();new cgi.multipleRequest([new cgi.SimpleRequest("GetUserPage", { context: "", scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION, location: n }), new cgi.SimpleRequest("GetUserPage", { context: "", scene: t, location: n })], function (n) {
      e.data.useRealCurrentLocationToGetData = i, impressionExposedSet.clear(), poiExposedSet.clear(), e.renderImpressionList(SHOULD_REPLACE, n[0]), e.renderMarkList(SHOULD_REPLACE, n[1], t), e.data.isFirstInit && (n[0] && n[0].impression && n[0].impression.length || !n[1] || !n[1].impression || !n[1].impression.length || (e.data.currentTab = 2)), e.setData({ currentTab: e.data.currentTab, isFirstInit: !1, isTab1Inited: !0, isTab2Inited: !0 }), e.createPoiObserveIntersection(), wx.stopPullDownRefresh();
    }), new cgi.SimpleRequest("getfanslist", { context: "" }).send(function (t) {
      e.setData({ fansCount: t.totalCount || 0 });
    }), new cgi.SimpleRequest("getfollowuserlist", { context: "" }).send(function (t) {
      e.setData({ followCountId: singleValueIds.followCountId, followCount: t.totalCount || 0 }), declareBinding({ instance: e, schema: NumberSchema, mapping: { followCountId: "id", followCount: "number" } });
    });
  }, cgiGetImpressionList: function cgiGetImpressionList(e) {
    var t = this,
        n = appLaunchData.getUserLocation();e || (t.data.contextImpression = "", t.data.continueFlagImpression = 1), new cgi.SimpleRequest("GetUserPage", { context: t.data.contextImpression, scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION, location: n }).ensureNoSameUrlProcessing().send(function (n) {
      t.renderImpressionList(e, n);
    });
  }, renderImpressionList: function renderImpressionList(e, t) {
    var n = [],
        i = t.markCount || 0,
        o = t.likeCount || 0;this.setData({ contextImpression: t.context, continueFlagImpression: t.continueFlag, markLikeCountTotal: util.formatNumberToTenThousand(i + o) || 0 }), e || this.setData({ impressionCount: t.count }), (t.impression || []).forEach(function (e) {
      if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) n.push({ comment: e.comment, unqiue: e.comment.id, poi: e.poi, reportData: { pageId: reportEnum.enumPageName.ME } });else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
        var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);n.push({ comment: t, unqiue: t.id, poi: e.poi, reportData: { pageId: reportEnum.enumPageName.ME } });
      } else console.error("GetUserPage CGI, renderImpressionList, type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
    }), e ? this.setData({ impressionList: this.data.impressionList.concat(n), showBottomLoadingView: !0 }) : this.setData({ impressionList: n, showBottomLoadingView: !0 }), this.createImpressionObserveIntersection();
  }, cgiGetMarkList: function cgiGetMarkList(e) {
    var t = this,
        n = appLaunchData.getUserLocation();e || (t.data.contextMark = "", t.data.continueFlagMark = 1);var i = t.data.tab2CGIScene;new cgi.SimpleRequest("GetUserPage", { context: t.data.contextMark, scene: i, location: n }).ensureNoSameUrlProcessing().send(function (n) {
      t.renderMarkList(e, n, i), t.setData({ isTab2Inited: !0 });
    });
  }, renderMarkList: function renderMarkList(e, t, n) {
    var i = this;void 0 === n && (console.error("renderMarkList, cgiRequestScene is undefined"), n = cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK), i.setData({ contextMark: t.context, continueFlagMark: t.continueFlag });var o = [];e || (i.data.prevTime = "", i.setData({ markCount: t.count })), (t.impression || []).forEach(function (e) {
      var t = "";if (e.createTime) {
        var a = util.formatDate(new Date(1e3 * e.createTime));n == cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE ? t = a : n != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK || 0 !== i.data.prevTime.length && i.data.prevTime === a || (i.data.prevTime = a, t = a);
      }var r = i.getPoiInfo(e);if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) {
        var s = void 0 !== e.comment.info ? JSON.parse(e.comment.info) : "";i.data.commentIdPicMap[e.comment.id] = s.pic || [], o.push({ poi: r, timestamp: t, thumbUrl: (s.pic || []).map(function (e) {
            return e.thumbUrl;
          }) });
      } else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_MARK) {
        var p = [];void 0 !== e.poi.base.logo ? p.push(e.poi.base.logo.thumbUrl) : p.push("https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg");var c = renderDataUtil.getRenderPoiInfo(e.poi);o.push({ poi: r, normalPoi: c, timestamp: t, thumbUrl: p, statusLabel: e.poi.intro && renderDataUtil.renderErrorBusinessStatusLabel(e.poi.intro) });
      }
    }), e ? i.setData({ markList: i.data.markList.concat(o), showBottomLoadingView: !0 }) : i.setData({ markList: o, showBottomLoadingView: !0 }), i.createPoiObserveIntersection();
  }, getPoiInfo: function getPoiInfo(e) {
    var t = {},
        n = [];t.info = "", e.poi.base.category.forEach(function (e) {
      var t = e.name,
          i = e.name.lastIndexOf(":");-1 != i && (t = t.substring(i + 1, e.name.length)), n.push(t);
    });var i = n.join(",");if (t.info += i, void 0 !== e.poi.price.price) {
      var o = e.poi.price.price,
          a = parseInt(o) / 100;0 != a && (t.info += " · 人均￥" + a);
    }if (e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info = t.info + " · " + t.area), this.data.useRealCurrentLocationToGetData) {
      var r = void 0 !== e.poi.base.location.distance ? Math.round(e.poi.base.location.distance) : null,
          s = void 0;r < 1e3 ? s = r + "m" : r >= 1e3 && (s = Math.round(r / 1e3) + "km"), t.info += " · " + s;
    }return void 0 !== e.poi.like && (t.like = e.poi.like.count + "位朋友来过"), t.name = e.poi.base.name, t.id = e.poi.base.id, t;
  }, onPullDownRefresh: function onPullDownRefresh() {
    this.refresh();
  }, onReachBottom: function onReachBottom() {
    if (1 == this.data.currentTab) {
      if (!this.data.continueFlagImpression) return;this.cgiGetImpressionList(SHOULD_APPEND);
    } else if (2 == this.data.currentTab) {
      if (!this.data.continueFlagMark) return;this.cgiGetMarkList(SHOULD_APPEND);
    }
  }, bindtapToMention: function bindtapToMention() {
    wx.navigateTo({ url: "/pages/mention/mention" }), this._reportClickAction(reportEnum.enumProfilePageClickScene.MENTION);
  }, bindTapToPoiDetail: function bindTapToPoiDetail(e) {
    var t = e.currentTarget.dataset.index,
        n = this.data.markList[t].poi.id,
        i = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(reportEnum.enumPageName.ME).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(n).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * i.longitude)).latitude(Math.floor(1e6 * i.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(t + 1).requestIdStr("").lazyReportToServer(), wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(n) });
  }, bindTapToFollowing: function bindTapToFollowing() {
    wx.navigateTo({ url: "/pages/following/following" });
  }, bindTapToFans: function bindTapToFans() {
    wx.navigateTo({ url: "/pages/fans/fans" });
  }, deleteLocalCommentItem: function deleteLocalCommentItem(e) {
    var t = this.data.impressionList,
        n = this.data.impressionCount,
        i = t[e].comment.id;app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: i }), t.splice(e, 1), n--, this.setData({ impressionList: t, impressionCount: n });
  }, bindtapDeleteBtn: function bindtapDeleteBtn(e, t, n) {
    var i = this;wx.showModal({ title: "提示", content: "要删除这条印象吗？", confirmText: "删除", success: function success(o) {
        o.confirm ? (console.log("用户点击确定"), util.showLoading(), new cgi.SimpleRequest("delpoicomment", { id: e, commentId: t, scene: 0 }).send(function (e) {
          console.log("delpoicomment resp ", JSON.stringify(e)), i.deleteLocalCommentItem(n), util.hideLoading(), util.toast("印象删除成功");
        }, function (e) {
          console.log("delpoicomment resp failed", e), util.hideLoading(), util.hint("印象删除失败");
        })) : o.cancel && console.log("用户点击取消");
      } });
  }, bindTapGetLists: function bindTapGetLists(e) {
    var t = e.currentTarget.dataset.index;this.setData({ currentTab: t }), 1 === t ? (this._reportClickAction(reportEnum.enumProfilePageClickScene.IMPRESSION_TAB), this.createImpressionObserveIntersection()) : (this._reportClickAction(reportEnum.enumProfilePageClickScene.MARK_TAB), this.createPoiObserveIntersection());
  }, bindTapAdvice: function bindTapAdvice() {
    wx.navigateTo({ url: "/pages/app_feedback/app_feedback" });
  }, bindTapRulesDetail: function bindTapRulesDetail() {
    wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning") });
  }, bindtapHeadImg: function bindtapHeadImg(e) {
    var t = e.currentTarget.dataset.url;0 == t.indexOf("http") && (wx.previewImage({ current: t, urls: [t] }), this._reportClickAction(reportEnum.enumProfilePageClickScene.HEADIMG));
  }, onTapMoreOptions: function onTapMoreOptions(e) {
    var t = this,
        n = e.detail.index,
        i = t.data.impressionList[n].comment.id,
        o = t.data.impressionList[n].comment.poiId;wx.showActionSheet({ itemList: ["删除"], itemColor: "#000", success: function success(e) {
        t.bindtapDeleteBtn(o, i, n);
      } });
  }, bindTapToFeedbackMore: function bindTapToFeedbackMore(e) {
    var t = this;wx.showActionSheet({ itemList: ["平台规范", "意见反馈"], itemColor: "#000", success: function success(e) {
        0 === e.tapIndex ? (t.bindTapRulesDetail(), t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_RULES)) : (t.bindTapAdvice(), t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_ADVICE));
      }, fail: function fail() {
        t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_CANCEL);
      } });
  }, onTapPost: function onTapPost(e) {
    if (app.getHasLaunched()) {
      var t = { startScene: reportEnum.enumPageName.ME, lastScene: reportEnum.enumPageName.ME, nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish" };reportPostImpression.startPostImpressionProcess(t);
    }
  }, onTapBackButton: function onTapBackButton() {
    wx.navigateBack({});
  }, createImpressionObserveIntersection: function createImpressionObserveIntersection() {
    var e = this;e.impressionObserver && e.impressionObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [.6], initialRatio: 0, observeAll: !0 });return t.relativeToViewport(), t.observe(".impression-cell", function (t) {
      var n = t.dataset.index;if (void 0 !== n) {
        var i = e.data.impressionList[n];if (i) {
          var o = "";if (i.comment && i.comment.id && (o = i.comment.id), o && !impressionExposedSet.has(o)) {
            impressionExposedSet.add(o);var a = util.getImpressionType(i.comment.contact.type),
                r = i.comment.poiId,
                s = 0;i && i.comment && i.comment.subCommentCount && (s = i.comment.subCommentCount);var p = reportEnum.enumFeedAction.FEED_EXPOSED,
                c = "";i.comment.tag && (c = renderDataUtil.getReasonIdString(i.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(s).isForwardedImpression(0).poiIdString(r).impressionIdString(o).action(p).impressionType(a).requestId().pageId(reportEnum.enumPageName.ME).reasonId().reasonIdString(c).recId().recType(0).lazyReportToServer();
          }
        }
      }
    }), e.impressionObserver = t, t;
  }, createPoiObserveIntersection: function createPoiObserveIntersection() {
    var e = this;e.poiObserver && e.poiObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".poi-cell", function (t) {
      var n = t.dataset.index;if (void 0 !== n) {
        var i = e.data.markList[n];if (i) {
          var o = i.poi.id || "";if (o && !poiExposedSet.has(o)) {
            poiExposedSet.add(o);var a = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(reportEnum.enumPageName.ME).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * a.longitude)).latitude(Math.floor(1e6 * a.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(n + 1).requestIdStr("").lazyReportToServer();
          }
        }
      }
    }), e.poiObserver = t;
  }, _reportClickAction: function _reportClickAction(e) {
    if (e) {
      var t = "";this.mmPrevPage && this.mmPrevPage.mmReportData.pageName && (t = this.mmPrevPage.mmReportData.pageName), reporter.getReporter(17511).prevPageId(t).clickTime(Math.floor(new Date().getTime() / 1e3)).clickScene(e).userId(this.data.userId).reportToServer();
    } else console.error("invalid parameter, clickScene");
  }, onSelectDropDownMenu: function onSelectDropDownMenu(e) {
    if (e.detail.id !== this.data.selectedId) {
      var t = parseInt(e.detail.id);t != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK && t != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE && (console.error("invalid newTab2CGIScene: " + t), t = cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK), this.setData({ markList: [], continueFlagMark: 1, selectedId: e.detail.id, isTab2Inited: !1, tab2CGIScene: t }), this.cgiGetMarkList(SHOULD_REPLACE);
    }
  } }); 
 			}); 	require("pages/me/me.js");
 		__wxRoute = 'pages/search_index/search_index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search_index/search_index.js';	define("pages/search_index/search_index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    storage = require("../../utils/storage"),
    searchStorage = require("../../utils/searchStorage"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    enumSelectedResultType = { RESTAURANT: 0, IMPRESSION: 1 };MMPage({ data: { isIpx: util.isIpx(), query: "", showPageType: "INDEX", indexTags: [], history: [], suggs: [], searchInputFocus: !0, shouldShowBottomLoading: !1, searchingSuggCount: 0, windowHeight: 0, isFriendTagInited: 0, friendTagStatus: "TAGLIST_STATUS_EXPAND", isSelfTagInited: 0, selfTagStatus: "TAGLIST_STATUS_EXPAND", useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }, navigationBarColor: { frontColor: "#000000", backgroundColor: "#f1f1f1" }, navigationBarColorWithMask: { frontColor: "#000000", backgroundColor: "#919191" }, mmReportData: { pageRequestId: 0, pageName: reportEnum.enumPageName.SEARCH }, reportData: {}, onLoad: function onLoad(e) {
    var t = this,
        a = wx.getSystemInfoSync().windowHeight;t.setData({ windowHeight: a, scrollViewHeight: a - util.rpx2px(132) }), e.query ? t.setData({ isDirectResult: !0 }, function () {
      t.toResultPage(decodeURIComponent(e.query));
    }) : app.addLaunchListener(function () {
      t.setData({ useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() });var e = appLaunchData.getUserLocation();cgi.multipleRequest([new cgi.SimpleRequest("getcategory", { location: e }), new cgi.SimpleRequest("getsuggestion", { location: e })], function (e) {
        var a = e[0],
            n = e[1],
            r = (a.friendPoiCategory || []).map(function (e) {
          return { name: e.name, text: e.name + "(" + e.poiCount + ")" };
        }),
            i = (a.selfPoiCategory || []).map(function (e) {
          return { name: e.name, text: e.name + "(" + e.poiCount + ")" };
        }),
            o = (a.hotTag || []).map(function (e) {
          return { id: e.id, name: e.name, popular: e.popular, poiCount: e.poiCount };
        }),
            s = n.suggestion.map(function (e) {
          var t = { type: e.type };return 0 == e.type ? t.name = e.poi.base.name : 1 == e.type ? t.name = e.tag.name : 2 == e.type ? t.name = e.area.name : 3 == e.type && (t.name = e.category.name), t;
        });t.setData({ hotTags: o, indexTags: s, history: searchStorage.getAllHistory(), friendPoiCategory: r, selfPoiCategory: i }), t.data.reporter17491 = reporter.getReporter(17491).requestId(util.uuid()).prevPage(t.mmPrevPage.mmReportData.pageName).exp([t.data.history.length, t.data.friendPoiCategory.length, t.data.selfPoiCategory.length].join("|")), wx.nextTick(function () {
          wx.createSelectorQuery().select("#friendPoiCategory").boundingClientRect(function (e) {
            e && (util.px2rpx(e.height) > 94 ? t.setData({ isFriendTagMultiLine: 1, isFriendTagInited: 1, friendTagStatus: "TAGLIST_STATUS_SHRINK" }) : t.setData({ isFriendTagInited: 1, isFriendTagMultiLine: 0, friendTagStatus: "TAGLIST_STATUS_EXPAND" }));
          }).exec(), wx.createSelectorQuery().select("#selfPoiCategory").boundingClientRect(function (e) {
            e && (util.px2rpx(e.height) > 94 ? t.setData({ isSelfTagMultiLine: 1, isSelfTagInited: 1, selfTagStatus: "TAGLIST_STATUS_SHRINK" }) : t.setData({ isSelfTagInited: 1, isSelfTagMultiLine: 0, selfTagStatus: "TAGLIST_STATUS_EXPAND" }));
          }).exec();
        });
      }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.SEARCH).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, bindtapFriendTagBtn: function bindtapFriendTagBtn() {
    "TAGLIST_STATUS_SHRINK" == this.data.friendTagStatus ? this.setData({ friendTagStatus: "TAGLIST_STATUS_EXPAND" }) : this.setData({ friendTagStatus: "TAGLIST_STATUS_SHRINK" });
  }, bindtapSelfTagBtn: function bindtapSelfTagBtn() {
    "TAGLIST_STATUS_SHRINK" == this.data.selfTagStatus ? this.setData({ selfTagStatus: "TAGLIST_STATUS_EXPAND" }) : this.setData({ selfTagStatus: "TAGLIST_STATUS_SHRINK" });
  }, onShow: function onShow() {}, bindtapSugg: function bindtapSugg(e) {
    var t = e.currentTarget.dataset.name,
        a = e.currentTarget.dataset.type,
        n = e.currentTarget.dataset.tagid;if (0 == a) {
      var r = e.currentTarget.dataset.poi.id;wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(r) });
    } else if (1 == a) {
      n = e.currentTarget.dataset.tagid;var i = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + n;wx.navigateTo({ url: i });
    } else this.toResultPage(t, reportEnum.enumPoiSearchType.INPUT);
  }, bindtapListItem: function bindtapListItem(e) {
    var t = e.currentTarget.dataset.name,
        a = e.currentTarget.dataset.listtype;"HISTORY" == a ? (this.data.reporter17491 && this.data.reporter17491.action(2), this.toResultPage(t, reportEnum.enumPoiSearchType.HISTORY)) : "FRIEND" == a ? (this.data.reporter17491 && this.data.reporter17491.action(3), this.toResultPage(t, reportEnum.enumPoiSearchType.FRIEND)) : "SELF" == a && (this.data.reporter17491 && this.data.reporter17491.action(4), this.toResultPage(t, reportEnum.enumPoiSearchType.SELF));
  }, toIndexPage: function toIndexPage() {
    this.setData({ query: "", showPageType: "INDEX", history: searchStorage.getAllHistory() });
  }, toSuggPage: function toSuggPage() {
    this.setData({ suggs: [], showPageType: "SUGG" });
  }, toResultPage: function toResultPage(e, t) {
    this.setData({ selectedResultType: enumSelectedResultType.RESTAURANT, showPageType: "RESULT", query: e, queryType: t || reportEnum.enumPoiSearchType.INPUT });
  }, bindTapResultTypeRestaraunt: function bindTapResultTypeRestaraunt() {
    this.setData({ selectedResultType: enumSelectedResultType.RESTAURANT });
  }, bindTapResultTypeImpression: function bindTapResultTypeImpression() {
    this.setData({ selectedResultType: enumSelectedResultType.IMPRESSION });
  }, bindtapSearchCancel: function bindtapSearchCancel() {
    wx.navigateBack();
  }, bindtapSearchClear: function bindtapSearchClear() {
    this.toIndexPage();
  }, bindSearchInput: function bindSearchInput(e) {
    var t = e.detail.value;this.data.reporter17491 && !this.data.reporter17491HasReportInput && (this.data.reporter17491.action(4).type(2).reportToServer(), this.data.reporter17491HasReportInput = 1, this.data.reporter17491.action(0).type(0)), this.setData({ query: t }), t ? (this.toSuggPage(), this.sendSearchRequest(t)) : this.toIndexPage();
  }, bindSearchConfirm: function bindSearchConfirm(e) {
    var t = e.detail.value;t ? (this.data.reporter17491 && this.data.reporter17491.action(5), this.toResultPage(t)) : this.toIndexPage();
  }, sendSearchRequest: util.debounce(function (e) {
    if (!app.canOpenKitchen() || ":kitchen" !== e && ":kitchen " !== e && ": kitchen " !== e && "：kitchen " !== e && "：kitchen" !== e) {
      if (":up" !== e) {
        var t = this;t.setData({ shouldShowBottomLoading: !0 }), t.data.searchingSuggCount++;var a = appLaunchData.getUserLocation();new cgi.SimpleRequest("getsuggestion", { location: a, options: { query: e } }).send(function (a) {
          t.data.searchingSuggCount--, e == t.data.query ? (t.setData({ shouldShowBottomLoading: !1 }), t.renderSugg(a, e)) : 0 == t.data.searchingSuggCount && t.setData({ shouldShowBottomLoading: !1 });
        });
      } else wx.redirectTo({ url: "/pages/feedback/feedback" });
    } else wx.redirectTo({ url: "/pages/kitchen/kitchen" });
  }, 100), renderSugg: function renderSugg(e, t) {
    if ("SUGG" == this.data.showPageType) {
      var a = (e.suggestion || []).map(function (e) {
        var t = { type: e.type };return 0 == e.type ? (t.name = e.poi.base.name, t.poi = renderDataUtil.getRenderPoiInfo(e.poi)) : 1 == e.type ? (t.name = e.tag.name, t.tagId = e.tag.id) : 2 == e.type ? t.name = e.area.name : 3 == e.type && (t.name = e.category.name), t;
      });a.sort(function (e, t) {
        return e.type < t.type ? 1 : e.type > t.type ? -1 : 0;
      }), a.length || a.push({ type: -1 }), this.setData({ suggs: a });
    }
  }, bindSearchFocus: function bindSearchFocus(e) {
    this.setData({ searchInputFocus: !0 });var t = e.detail.value;t ? "SUGG" != this.data.showPageType && (this.toSuggPage(), this.sendSearchRequest(t)) : this.toIndexPage();
  }, bindSearchBlur: function bindSearchBlur(e) {
    this.setData({ searchInputFocus: !1 });
  }, bindtapIndexTag: function bindtapIndexTag(e) {
    var t = e.currentTarget.dataset.name,
        a = e.currentTarget.dataset.id,
        n = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + a;wx.navigateTo({ url: n });
  }, toFeedBack: function toFeedBack() {
    this.data.query;var e = JSON.stringify({ query: this.data.query });wx.navigateTo({ url: "/pages/app_feedback/app_feedback?word=" + encodeURIComponent(e) });
  } }); 
 			}); 	require("pages/search_index/search_index.js");
 		__wxRoute = 'pages/search_result/search_result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search_result/search_result.js';	define("pages/search_result/search_result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    questionStorage = require("../../utils/questionStorage"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    searchStorage = require("../../utils/searchStorage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    appLaunchData = require("../../utils/appLaunchData"),
    utf8 = require("../../utils/utf8"),
    mixinCss = require("../../utils/mixinCss"),
    cssFilterHeight = 102,
    cssSearchHeight = 72,
    cssTabHeight = 90,
    cssSimilarAreaHeight = 120,
    r = 750 / 414,
    cssTagHeight = 80 * r + 16 * r,
    enumPoiListType = { AREA: 0, CATEGORY: 1, POI: 2 },
    APPEND = 1,
    REPLACE = 0;Component({ properties: { query: { type: String, value: "", observer: function observer(e, t, a) {
        console.log("component search_result newVal", e, ", oldVal", t, " changedPath", a);
      } }, queryType: { type: String } }, data: { scrollViewHeight: 0, windowHeight: wx.getSystemInfoSync().windowHeight, shouldShowBottomLoading: !0, isIpx: util.isIpx(), poiListType: -1, poiList: [], isPoiListLoaded: !1, context: "", continueFlag: 1, shouldShowMask: !1, shouldShowFilterFixed: !1, areaCategory: [], shouldShowAreaCategoryPanel: !1, resultSelectedAreaCategoryId: "", resultSelectedAreaCategoryName: "位置", menuCategory: [{ id: "0", name: "类别" }], shouldShowMenuCategoryPanel: !1, resultSelectedMenuCategoryId: "", resultSelectedMenuCategoryName: "菜系", priceCategory: [{ id: "0", name: "不限价格", value: { min: 0, max: 9999900 } }, { id: "1", name: "0-50", value: { min: 0, max: 5e3 } }, { id: "2", name: "50-100", value: { min: 5e3, max: 1e4 } }, { id: "3", name: "100-200", value: { min: 1e4, max: 2e4 } }, { id: "4", name: "200-300", value: { min: 2e4, max: 3e4 } }, { id: "5", name: "300以上", value: { min: 3e4, max: 9999900 } }], shouldShowPriceCategoryPanel: !1, resultSelectedPriceCategoryId: "", resultSelectedPriceCategoryName: "价格", orderOptions: [{ id: "2", name: "综合排序" }, { id: "1", name: "距离优先" }], shouldShowOrderPanel: !1, resultSelectedOrderId: "2", resultSelectedOrderName: "综合排序", isInited: !1, useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }, created: function created(e) {
    this.defaultReportData = { pageRequestId: 0, poiExposedObjSet: {}, pageName: reportEnum.enumPageName.SEARCH }, this.reportData = {};
  }, attached: function attached() {
    var e = this,
        t = e.data.windowHeight;this.setData({ scrollViewHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight), maskHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight) }), e.mmPrevPage = util.getCurrentPage().mmPrevPage, e.setData({ useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation() }), e.data.queryType == reportEnum.enumPoiSearchType.FRIEND ? e.data.entryType = 1 : e.data.queryType == reportEnum.enumPoiSearchType.SELF ? e.data.entryType = 2 : e.data.entryType = 0, appLaunchData.isUsingRealCurrentLocation() || e.setData({ orderOptions: [{ id: "2", name: "综合排序" }], resultSelectedAreaCategoryId: "localId_11", resultSelectedAreaCategoryName: "位置", areaCategoryLeftId: "localId_10", areaCategoryRightId: "localId_11" }), app.addLaunchListener(function () {
      e.getCategory(), e.getSearchPoiList();
    });
  }, detached: function detached() {}, methods: { getCategory: function getCategory() {
      var e = this,
          t = appLaunchData.getUserLocation();new cgi.SimpleRequest("getcategory", { location: t }).send(function (t) {
        console.log("test getcategory success: " + JSON.stringify(new Date()));var a = t.area,
            r = [];a.forEach(function (e) {
          var t = {};t.name = e.name, t.id = e.id, e.subCategory && e.subCategory.length && (t.subCategory = e.subCategory), r.push(t);
        }), appLaunchData.isUsingRealCurrentLocation() ? r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_11", name: "默认" }, { id: "localId_12", name: "1公里" }, { id: "localId_13", name: "2公里" }, { id: "localId_14", name: "5公里" }] }) : r.unshift({ id: "localId_10", name: "距离", subCategory: [{ id: "localId_11", name: "默认" }] }), e.setData({ areaCategory: r, menuCategory: t.category });
      });
    }, getFilterOption: function getFilterOption() {
      var e = {};if (e.query = this.data.query, e.entryType = this.data.entryType, this.reportData.query = this.data.query, this.data.resultSelectedSimilarAreaCategoryId ? e.areaId = this.data.resultSelectedSimilarAreaCategoryId : this.data.resultSelectedAreaCategoryId && ("localId_10" == this.data.resultSelectedAreaCategoryId || ("localId_11" == this.data.resultSelectedAreaCategoryId ? this.reportData.area = "" : "localId_12" == this.data.resultSelectedAreaCategoryId ? (e.radius = 1e3, this.reportData.area = 1e3) : "localId_13" == this.data.resultSelectedAreaCategoryId ? (e.radius = 2e3, this.reportData.area = 2e3) : "localId_14" == this.data.resultSelectedAreaCategoryId ? (e.radius = 5e3, this.reportData.area = 5e3) : (e.areaId = this.data.resultSelectedAreaCategoryId, this.reportData.area = this.data.resultSelectedAreaCategoryId))), this.data.resultSelectedMenuCategoryId && (e.categoryId = [this.data.resultSelectedMenuCategoryId], this.reportData.menuCategoryId = this.data.resultSelectedMenuCategoryId), this.data.resultSelectedPriceCategoryId) if ("0" == this.data.resultSelectedPriceCategoryId) delete e.priceMin, delete e.priceMax, this.reportData.price = "";else {
        var t = this.data.priceCategory[this.data.resultSelectedPriceCategoryId].value;e.priceMin = t.min, e.priceMax = t.max, this.reportData.price = e.priceMin + "-" + e.priceMax;
      }return this.data.resultSelectedOrderId && (e.sortType = +this.data.resultSelectedOrderId, this.reportData.sortType = this.data.resultSelectedOrderId), e;
    }, getSearchPoiList: function getSearchPoiList() {
      var e = this;if (e.data.query) {
        e.setData({ shouldShowBottomLoading: !0 }), e.reportData = util.clone(e.defaultReportData), e.reportData.pageRequestId = util.getTimeRandomId();var t = e.getFilterOption(),
            a = appLaunchData.getUserLocation();e.data.requestId = util.uuid(), new cgi.SimpleRequest("SearchPoiList", { location: a, options: t, requestId: e.data.requestId }).ensureNoSameUrlProcessing().send(function (a) {
          e.data.isInited = !0, searchStorage.addHistory({ name: t.query });var r = util.getCurrentPage();if (!(a.info && a.info.length || a.poi && a.poi.length)) return r.data.reporter17491 && (r.data.reporter17491.type(4).reportToServer(), r.data.reporter17491.action(0).type(0)), void e.setData({ poiList: [], isPoiListLoaded: !0, shouldShowBottomLoading: !1 });r.data.reporter17491 && (r.data.reporter17491.type(3).reportToServer(), r.data.reporter17491.action(0).type(0));if (a.info && a.info.length) {
            var i = null;a.info.some(function (e) {
              return 0 == e.type ? (i = e, !0) : 1 == e.type ? (i = e, !0) : void 0;
            });var o = [];if (a.info.forEach(function (e) {
              e.tagResult && e.tagResult.tag && o.push({ id: e.tagResult.tag.id, name: e.tagResult.tag.name, poiCount: e.tagResult.tag.poiCount });
            }), i) {
              if (0 == i.type) {
                e.setData({ scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight + cssSimilarAreaHeight + (o.length ? cssTagHeight : 0)), poiListType: enumPoiListType.AREA });var s = i.areaResult,
                    d = [],
                    l = 0;s.similarArea.forEach(function (e, t) {
                  var a = e.id == s.area.id,
                      r = { id: e.id, name: e.name + "(" + e.district + ")", isSelected: a };d.push(r), a && (l = t);
                }), e.setData({ similarAreas: d, selectedSimilarAreaIndex: l, tagResults: o, shouldShowSimilarAreaPanel: !1, resultSelectedSimilarAreaCategoryId: s.area.id }), e.getPoiList(REPLACE);
              } else if (1 == i.type) {
                o.length && e.setData({ scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight + (o.length ? cssTagHeight : 0)), poiListType: enumPoiListType.CATEGORY });var n = i.categoryResult;e.setData({ tagResults: o, resultSelectedMenuCategoryId: n.category.id, resultSelectedMenuCategoryIdFromSearch: n.category.id }), e.getPoiList(REPLACE);
              }
            } else e.setData({ scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight), poiListType: enumPoiListType.POI }), e.setData({ tagResults: o }), e.getPoiList2(REPLACE, a);
          } else a.poi && (e.setData({ scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight), poiListType: enumPoiListType.POI }), e.getPoiList2(REPLACE, a));
        });
      }
    }, bindtapIndexTag: function bindtapIndexTag(e) {
      var t = e.currentTarget.dataset.name,
          a = e.currentTarget.dataset.id,
          r = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + a;wx.navigateTo({ url: r });
    }, bindtapItem: function bindtapItem(e) {
      var t = e.currentTarget.dataset.id;console.log("poiId: " + t);var a = appLaunchData.getUserLocation(),
          r = e.currentTarget.dataset,
          i = (t = r.id, r.index);reporter.getReporter(16373).currentPage(this.reportData.pageName).prevPage(this.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(t).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * a.longitude)).latitude(Math.floor(1e6 * a.latitude)).menuCategoryId(this.reportData.menuCategoryId).price(this.reportData.price).area(this.reportData.area).query(this.data.query).sortType(this.reportData.sortType).selectCity().requestId(this.reportData.pageRequestId).prevRequestId(this.mmPrevPage.mmReportData.pageRequestId).poiClickedIndex(i + 1).poiUgcLabelScene(this.data.poiList[i].recommendText.scene).reportToServer(), wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t) });
    }, bindtapMenuFilter: function bindtapMenuFilter(e) {
      this.data.resultSelectedMenuCategoryIdFromSearch || (this.data.shouldShowMenuCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !0, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }));
    }, bindtapPriceFilter: function bindtapPriceFilter(e) {
      this.data.shouldShowPriceCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !0, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 });
    }, bindtapAreaFilter: function bindtapAreaFilter(e) {
      this.data.resultSelectedSimilarAreaCategoryId || (this.data.shouldShowAreaCategoryPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !0, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 }));
    }, bindtapOrderFilter: function bindtapOrderFilter() {
      this.data.shouldShowOrderPanel ? this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !1 }) : this.setData({ shouldShowFilterFixed: !0, shouldShowMask: !0, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowOrderPanel: !0 });
    }, bindtapMask: function bindtapMask(e) {
      this.setData({ shouldShowFilterFixed: !1, shouldShowMask: !1, shouldShowMenuCategoryPanel: !1, shouldShowPriceCategoryPanel: !1, shouldShowAreaCategoryPanel: !1, shouldShowSimilarAreaPanel: !1, shouldShowOrderPanel: !1 });
    }, bindMenuCategorySelect: function bindMenuCategorySelect(e) {
      console.log("bindMenuCategorySelect", e);var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedMenuCategoryId: t, resultSelectedMenuCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindPriceCategorySelect: function bindPriceCategorySelect(e) {
      console.log("bindPriceCategorySelect", e);var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedPriceCategoryId: t, resultSelectedPriceCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindAreaCategorySelect: function bindAreaCategorySelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedAreaCategoryId: t, resultSelectedAreaCategoryName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindOrderSelect: function bindOrderSelect(e) {
      var t = e.detail.id,
          a = e.detail.name;this.setData({ resultSelectedOrderId: t, resultSelectedOrderName: a }), this.bindtapMask(), this.getOnFilterChange();
    }, bindscrolltolower: function bindscrolltolower() {
      this.data.continueFlag && (this.data.poiListType == enumPoiListType.POI ? this.getPoiList2(APPEND) : this.getPoiList(APPEND));
    }, observeIntersection: function observeIntersection() {
      var e = this;wx.nextTick(function () {
        e.poiIntersectionObserver && e.poiIntersectionObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeTo("#scrollView", {}), t.observe(".selector-poi", function (t) {
          var a = t.dataset,
              r = a.id,
              i = a.index;if (!e.reportData.poiExposedObjSet[r]) {
            e.reportData.poiExposedObjSet[r] = 1;var o = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(e.reportData.pageName).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(r).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(e.reportData.menuCategoryId).price(e.reportData.price).area(e.reportData.area).query(e.data.query).sortType(e.reportData.sortType).selectCity().requestId(e.reportData.pageRequestId).prevRequestId(e.mmPrevPage.mmReportData.pageRequestId).poiClickedIndex(i + 1).poiUgcLabelScene(e.data.poiList[i].recommendText.scene).lazyReportToServer();
          }
        }), e.poiIntersectionObserver = t;
      });
    }, bindtapSmlArea: function bindtapSmlArea(e) {
      var t = e.currentTarget.dataset.index,
          a = e.currentTarget.dataset.areaid;this.setData({ selectedSimilarAreaIndex: t, shouldShowSimilarAreaPanel: !1, resultSelectedSimilarAreaCategoryId: a }), this.getPoiList(REPLACE);
    }, bindtapSelectedSmlArea: function bindtapSelectedSmlArea(e) {
      this.setData({ shouldShowSimilarAreaPanel: !this.data.shouldShowSimilarAreaPanel });
    }, getOnFilterChange: function getOnFilterChange() {
      this.data.poiListType == enumPoiListType.POI ? this.getPoiList2(REPLACE) : this.getPoiList(REPLACE);
    }, toFeedBack: function toFeedBack() {
      this.data.query;var e = JSON.stringify({ query: this.data.query });wx.navigateTo({ url: "/pages/app_feedback/app_feedback?word=" + encodeURIComponent(e) });
    }, getPoiList: function getPoiList(e) {
      var t = this,
          a = t.getFilterOption();e || (t.setData({ poiList: [], isPoiListLoaded: !1, context: "" }), t.reportData = util.clone(t.defaultReportData), t.reportData.pageRequestId = util.getTimeRandomId()), t.setData({ shouldShowBottomLoading: !0 });var r = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetPoiList", { location: r, options: a, context: t.data.context, requestId: t.data.requestId }).ensureNoSameUrlProcessing().send(function (a) {
        var r = renderDataUtil.getRenderPoiInfoList(a.poi);renderDataUtil.setAndObserveNewPoiList(t, "poiList", r, e), t.setData({ isPoiListLoaded: !0, context: a.context, continueFlag: a.continueFlag, shouldShowBottomLoading: !1 }), t.observeIntersection();
      });
    }, getPoiList2: function getPoiList2(e, t) {
      var a = this;if (t) o(t);else {
        e || (a.setData({ poiList: [], isPoiListLoaded: !1, context: "", requestId: a.data.requestId }), a.reportData = util.clone(a.defaultReportData), a.reportData.pageRequestId = util.getTimeRandomId()), a.setData({ shouldShowBottomLoading: !0 });var r = a.getFilterOption(),
            i = appLaunchData.getUserLocation();new cgi.SimpleRequest("SearchPoiList", { location: i, context: a.data.context, options: r }).ensureNoSameUrlProcessing().send(o);
      }function o(t) {
        var r = renderDataUtil.getRenderPoiInfoList(t.poi);t.hitInfo && t.hitInfo.hitField && t.hitInfo.hitField.length && r.forEach(function (e, a) {
          if (t.hitInfo.hitField[a] && t.hitInfo.hitField[a].field && t.hitInfo.hitField[a].field.length) {
            var r = t.hitInfo.hitField[a].field,
                i = 0,
                o = "",
                s = "";r.some(function (e) {
              if (101 == e.fieldId) return i = 101, o = "", !0;102 == e.fieldId ? 101 != i && (i = 102, o = "别名: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 103 == e.fieldId ? 101 != i && (i = 103, o = "别名: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 104 == e.fieldId ? 101 != i && 102 != i && 103 != i && (i = 104, o = "特色菜: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 105 == e.fieldId && 101 != i && 102 != i && 103 != i && 104 != i && (i = 104, o = "标签: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0]));
            }), o && (e.title2 += " · " + o, e.title2HitWord = s);
          }
        }), renderDataUtil.setAndObserveNewPoiList(a, "poiList", r, e), a.setData({ isPoiListLoaded: !0, context: t.context, continueFlag: t.continueFlag, shouldShowBottomLoading: !1 }), a.observeIntersection();
      }
    } } }); 
 			}); 	require("pages/search_result/search_result.js");
 		__wxRoute = 'pages/mention/mention';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mention/mention.js';	define("pages/mention/mention.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];for (var i in n) {
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
  }return e;
},
    app = getApp(),
    cgi = require("../../utils/cgi"),
    cgiLonglink = require("../../utils/cgi_longlink"),
    util = require("../../utils/util"),
    mentionStorage = require("../../utils/mentionStorage"),
    reportEnum = require("../../utils/reportEnum"),
    mixinCss = require("../../utils/mixinCss"),
    reporter = require("../../utils/reporter"),
    reportSession = require("../../utils/report_session"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    renderDataUtil = require("../../utils/render_data_util"),
    enMMLifeAppMentionTypeDefine = { MMLIFEAPP_MENTION_TYPE_MARK_IMPRESSION: 0, MMLIFEAPP_MENTION_TYPE_COMMENT_IMPRESSION: 1, MMLIFEAPP_MENTION_TYPE_LIKE_IMPRESSION: 2, MMLIFEAPP_MENTION_TYPE_SPECIAL_MENTION: 3, MMLIFEAPP_MENTION_TYPE_FOLLOW_MENTION: 4 },
    enMMLifeAppMentionFlagDefine = { MMLIFEAPP_MENTION_FLAG_NEW_MENTION: 1, MMLIFEAPP_MENTION_FLAG_COMMENT_DELETED: 2, MMLIFEAPP_MENTION_FLAG_REFER_DELETED: 4, MMLIFEAPP_MENTION_FLAG_IMPRESSION_DELETED: 8, MMLIFEAPP_MENTION_FLAG_PAY_RECOMMEND_POI_IMPRESSION: 16, MMLIFEAPP_MENTION_FLAG_DISABLE_NOTIFY: 32 },
    enMMLifeAppPoiContactTypeDefine = { MMLIFEAPP_POI_CONTACT_TYPE_SELF: 0, MMLIFEAPP_POI_CONTACT_TYPE_FRIEND: 1, MMLIFEAPP_POI_CONTACT_TYPE_STRANGER: 2 };MMPage({ mmReportData: { pageName: reportEnum.enumPageName.MENTION }, data: { unreadMentionCount: 0, newList: [], oldList: [], context: "", continueFlag: 1, isInited: !1 }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      t.cgiGetMention(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.MENTION).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, bindtapNewMentionHint: function bindtapNewMentionHint() {
    this.setData({ unreadMentionCount: 0 }), this.cgiGetMention();
  }, cgiGetMention: function cgiGetMention(e) {
    var t = this;e || t.setData({ context: "", continueFlag: 1 }), t.setData({ shouldShowBottomLoading: !0 }), new cgi.SimpleRequest("GetMention", { context: t.data.context }).ensureNoSameUrlProcessing().send(function (n) {
      if (!e) {
        if (cgiLonglink.getIsSocketEverOpened()) {
          if (app.globalData && app.globalData.pageFriendsTimeline && app.globalData.pageFriendsTimeline.setData) {
            var i = app.globalData.pageFriendsTimeline.data.unreadMentionCountSeq || 0,
                o = +t.options.unreadMentionCountSeq;console.log("currentSeq=", i, "lastSeq=", o), i == o && app.globalData.pageFriendsTimeline.setData({ unreadMentionCount: 0 });
          }cgiLonglink.syncMention();
        } else app.globalData && app.globalData.pageFriendsTimeline && app.globalData.pageFriendsTimeline.setData && app.globalData.pageFriendsTimeline.setData({ unreadMentionCount: 0 });cgiLonglink.addUnReadMentionCountChangeListener("mention", function (e) {
          t.setData({ unreadMentionCount: e });
        });
      }t.setData({ context: n.context, continueFlag: n.continueFlag, isInited: !0 });var a = [],
          s = [];(n.mention || []).forEach(function (e) {
        var t = {},
            n = e.impressionId;if (t.impressionId = n, t.isImpressionDeleted = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_IMPRESSION_DELETED), e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_PAY_RECOMMEND_POI_IMPRESSION) t.impressionPic = "", t.impressionContent = renderDataUtil.payRecommendInfoText;else if (e.impressionInfo) {
          var i = JSON.parse(e.impressionInfo),
              o = "";i.pic && i.pic.length && (o = i.pic[0].thumbUrl);var r = i.content.replace(/^\s+|\s+$/g, "");t.impressionPic = o, t.impressionContent = r;
        } else t.impressionPic = "EMPTY", t.impressionContent = "", t.isImpressionDeleted = !0;if (t.poiId = "", e.poi && (t.poiId = e.poi.base.id), t.headImgUrl = e.fromUser.headImgUrl, t.nickName = e.fromUser.remark || e.fromUser.nickName, t.contact = e.fromUser, t.fromUser = e.fromUser, t.fromUser.isNameLenRestrict = !1, e.fromUser && e.fromUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_FRIEND && (t.nickName = t.nickName + "(朋友)"), e.fromUser && e.fromUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_STRANGER && (t.fromUser.isNameLenRestrict = !0), t.timeStr = util.getDateFormatString(e.createTime), t.isNotifyDisabled = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_DISABLE_NOTIFY), e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_COMMENT_IMPRESSION) {
          t.type = "COMMENT";var p = "评论了你的印象";if (e.toUser) if (t.toUser = e.toUser, t.toUser.isNameLenRestrict = !1, e.toUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_SELF) p = "回复了你的评论";else {
            var M = e.toUser.remark || e.toUser.nickName;e.toUser && e.toUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_FRIEND && (M += "(朋友)"), p = "", t.toUser.toUserNickName = M, t.toUser.isNameLenRestrict = !0;
          }t.text2 = p, t.isDeleted = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_COMMENT_DELETED), t.isDeleted || (t.content = JSON.parse(e.commentInfo).content.replace(/^\s+|\s+$/g, "")), e.commentId && (t.commentId = e.commentId);
        } else e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_MARK_IMPRESSION ? (t.type = "MARK", t.text2 = "", t.content = "因为你的印象想去 " + e.poi.base.name) : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_LIKE_IMPRESSION ? t.type = "LIKE" : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_SPECIAL_MENTION ? t.type = "SPECIAL" : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_FOLLOW_MENTION && (t.type = "FOLLOW");!!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_NEW_MENTION) ? a.push(t) : s.push(t);
      }), e ? t.setData({ newList: t.data.newList.concat(a), oldList: t.data.oldList.concat(s) }) : t.setData({ newList: a, oldList: s }), t.setData({ shouldShowBottomLoading: !1 });
    });
  }, bindtapItem: function bindtapItem(e) {
    var t = e.currentTarget.dataset.impressionid,
        n = e.currentTarget.dataset.isimpressiondeleted,
        i = e.currentTarget.dataset.poiId;reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(reportEnum.enumSceneType.MENTION).poiId().impressionId().impressionCommentCount().isForwardedImpression().poiIdString(i).impressionIdString(t).action(reportEnum.enumFeedAction.FEED_CLIKED_IMPRESSION).impressionType(reportEnum.enumFeedImpressionType.FRIEND).requestId().pageId(reportEnum.enumPageName.MENTION).reasonId().reasonIdString().recId().recType(0).reportToServer(), n ? wx.showToast({ title: "印象已删除", icon: "none", duration: 1500 }) : wx.navigateTo({ url: "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(t) });
  }, bindtapToUserProfile: function bindtapToUserProfile(e) {
    var t = e.currentTarget.dataset.contact;0 == t.type ? wx.navigateTo({ url: "/pages/me/me" }) : wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t)) });
  }, bindTapToFansPage: function bindTapToFansPage() {
    wx.navigateTo({ url: "/pages/fans/fans" });
  }, onTapMoreOptions: function onTapMoreOptions(e) {
    var t = this,
        n = e.currentTarget.dataset.commentid,
        i = e.currentTarget.dataset.impressionid,
        o = e.currentTarget.dataset.isnotifydisabled || !1,
        a = e.currentTarget.dataset.iscommentdeleted || !1,
        s = o ? "接收红点通知" : "不再红点通知",
        r = [s];n && !a && (r = [s, "投诉这条评论"]), wx.showActionSheet({ itemList: r, itemColor: "#000", success: function success(e) {
        0 === e.tapIndex ? t.updateUserNotify(i, o) : 1 === e.tapIndex && wx.navigateTo({ url: "/pages/complain_page/complain_page?impressionId=" + i + "&commentId=" + n });
      } });
  }, updateUserNotify: function updateUserNotify(e, t) {
    var n = this;util.showLoading(), new cgi.SimpleRequest("changeusernotifystatus", { impressionId: e, status: t ? 1 : 2 }).send(function (t) {
      console.log("changeusernotifystatus resp success"), n.updateAllMentionsForSameImpressionId(e), util.hideLoading(), util.toast("设置成功");
    }, function (e) {
      console.error("changeusernotifystatus resp failed", e), util.hideLoading(), util.hint("设置失败");
    });
  }, updateAllMentionsForSameImpressionId: function updateAllMentionsForSameImpressionId(e) {
    for (var t = [], n = 0; n < this.data.newList.length; n++) {
      var i = this.data.newList[n];i.impressionId === e && (t["newList[" + n + "].isNotifyDisabled"] = !i.isNotifyDisabled);
    }for (var o = 0; o < this.data.oldList.length; o++) {
      var a = this.data.oldList[o];a.impressionId === e && (t["oldList[" + o + "].isNotifyDisabled"] = !a.isNotifyDisabled);
    }this.setData(_extends({}, t));
  }, onReachBottom: function onReachBottom() {
    this.data.continueFlag && this.cgiGetMention(1);
  } }); 
 			}); 	require("pages/mention/mention.js");
 		__wxRoute = 'pages/poi_detail/poi_detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/poi_detail/poi_detail.js';	define("pages/poi_detail/poi_detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t];for (var n in o) {
      Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
  }return e;
};function _defineProperty(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    poiStorage = require("../../utils/poiStorage"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    poiDataFormatter = require("../../utils/poiDataFormatter"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    mixinCss = require("../../utils/mixinCss"),
    appLaunchData = require("../../utils/appLaunchData"),
    renderDataUtil = require("../../utils/render_data_util"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    protoConstants = require("../../utils/protoConstants"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    PoiModel = require("../../utils/model/poi_model");MMPage({ mmReportData: { pageName: reportEnum.enumPageName.POI_DETAIL }, data: { poiId: "", continueFlag: !1, isGettingFriendComment: !1, isGettingStrangerComment: !1, poi: {}, impressionExposedSet: {}, isIpx: util.isIpx(), ipxDangerBottom: mixinCss.ipxDangerBottom, poiInfo: {}, poiAddress: {}, poiHour: {}, poiPhone: "", visitCount: 0, showMoreFriendComments: !1, showMoreStrangerComments: !1, commentContext: "", friendCommentContext: "", strangerCommentContext: "", friendsImpressionDataList: [], strangerImpressionDataList: [], reasonList: [], hasLaunch: !1, showBottomLoading: !0, menuPositionTop: 0, canShare: util.canUseShareAppMessageAPI(), useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(), currentPageId: reportEnum.enumPageName.POI_DETAIL }, onLoad: function onLoad(e) {
    var t = this;wx.hideShareMenu();var o = e.visitCount || 0;t.data.poiId = decodeURIComponent(e.poiId);var n = 0;if (wx.canIUse("getMenuButtonBoundingClientRect")) {
      var a = wx.getMenuButtonBoundingClientRect();"android" === util.getSysInfo().platform && (a.top = a.top / 2, a.top = a.top + 8), n = a.top + 2;
    } else n = 30;t.data.impressionExposedSet = new Set(), t.setData({ visitCount: o, menuPositionTop: n });var i = new PoiModel(t.data.poiId).getValue();Object.keys(i).length && (t.setData({ isCacheHit: 1, "poiInfo.name": i.name || "", "poiInfo.categoryName": i.categoryName || "", "poiInfo.price": i.price || 0, "poiInfo.area": i.area || "", "poiInfo.isMark": i.isMark }), app.addUserStateChangeListener(function () {
      var e = app.getUserState();console.log("onload friendTimeline cache hit, user_access_permission, checkUserState, userState is: " + e), e != app.enumUserStateError.shouldUpdateWeChat && e != app.enumUserStateError.isPad && e != app.enumUserStateError.error || t.setData({ shouldShowUserAccessPermission: 1 });
    })), app.addLaunchListener(function () {
      t.setData({ hasLaunch: !0 }), t._onLoad(e), reporter.getReporter(16501).pageId(reportEnum.enumPageName.POI_DETAIL).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), t.addGlobalFunc();
    });
  }, _onLoad: function _onLoad(e) {
    var t = this,
        o = appLaunchData.getUserLocation();console.log("getpoidetail request"), new cgi.SimpleRequest("getpoidetail", { id: t.data.poiId, location: o }).send(function (e) {
      console.log("getpoidetail resp ", e), e && (t.data.poi = e.poi), t._reportEnterSharedPage(reportEnum.enumPageState.OK), t.generatePoiHeader(e);var o = [];e.payRecommendInfo && e.payRecommendInfo.contact && (o = e.payRecommendInfo.contact.slice(0, 10));var n = { label: "", type: protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD, area: { name: "", id: "" }, category: { name: "", id: "" } };e.poi.rank && e.poi.rank.billBoardRank && (e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD ? (n.label = "朋友想去排行榜第" + e.poi.rank.billBoardRank.position + "名", n.type = protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD) : e.poi.rank.billBoardRank.area && e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD ? (n.label = e.poi.rank.billBoardRank.area.name + "想去排行榜第" + e.poi.rank.billBoardRank.position + "名", n.area.id = e.poi.rank.billBoardRank.area.id, n.area.name = e.poi.rank.billBoardRank.area.name) : e.poi.rank.billBoardRank.category && e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST && (n.label = e.poi.rank.billBoardRank.category.name + "排行榜第" + e.poi.rank.billBoardRank.position + "名", n.type = protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST, n.category.id = e.poi.rank.billBoardRank.category.id, n.category.name = e.poi.rank.billBoardRank.category.name));var a = [];e.poi.reason && (a = e.poi.reason.slice(0, 3)), e.poi.ugc && e.poi.ugc.visitCount && e.poi.ugc.visitCount > 0 && (t.data.visitCount = e.poi.ugc.visitCount), wx.showShareMenu(), t.setData({ payRecommendContacts: o, poiRank: n, reasonList: a, currentPlayVideoId: "", useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(), visitCount: t.data.visitCount }, function () {
        console.log("getpoidetail resp, setData, callback");
      }), t.getCommentRequest();
    }, function (e) {
      console.log("getpoidetail resp failed", e), t._reportEnterSharedPage(reportEnum.enumPageState.UNKNOWN);
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc(), this.poiObserver && this.poiObserver.disconnect();
  }, onReachBottom: function onReachBottom() {
    this.setData({ showBottomLoading: !0 }), this.data.isGettingFriendComment || this.data.isGettingStrangerComment ? this.getMoreCommentRequest() : this.setData({ showBottomLoading: !1 });
  }, generatePoiHeader: function generatePoiHeader(e) {
    var t = "";e.poi.base.address && e.poi.base.address.address && (t = e.poi.base.address.address);var o = {};e.poi.base.location && e.poi.base.location.latitude ? o.latitude = e.poi.base.location.latitude : o.latitude = "", e.poi.base.location && e.poi.base.location.longitude ? o.longitude = e.poi.base.location.longitude : o.longitude = "";var n = "";if (e.poi.intro && e.poi.intro.phone) {
      var a = e.poi.intro.phone;n = (a = a.split(";").length > 0 ? a.split(";") : a).map(function (e) {
        return util.formatPhoneWithParentheses(e);
      });
    }var i = 0;e.poi.ugc && e.poi.ugc.isMark && e.poi.ugc.isMark > 0 && (i = 1);var r = renderDataUtil.getRenderPoiInfo(e.poi),
        s = r.name,
        p = r.topImageUrl,
        m = r.categoryName,
        d = r.price;this.setData({ poiInfo: { id: this.data.poiId, name: s, topImage: p, categoryName: m, price: d, distance: r.distanceString2, area: r.area, isMark: i, distanceValue: r.distance }, poiAddress: { address: t, location: o }, poiHour: this._getFormattedBusinessHour(e.poi, e.serverTime), poiPhone: n }), declareBinding({ instance: this, schema: PoiSchema, mapping: { "poiInfo.id": "id", "poiInfo.isMark": "isMark" } }), poiStorage.setPoi(this.data.poiId, { id: this.data.poiId, logoUrl: p, name: s, categoryDesc: m, price: d });
  }, getCommentRequest: function getCommentRequest() {
    var e = this;new cgi.SimpleRequest("getpoicomment", { id: e.data.poiId, context: "" }).send(function (t) {
      var o = [],
          n = [],
          a = 0,
          i = 0;e.data.isGettingFriendComment = !1, e.data.isGettingStrangerComment = !1, t && t.friendComment && t.friendComment.comment && (a = t.friendComment.comment.length, t.friendComment.comment.forEach(function (t) {
        o.push({ comment: Object.assign(t, { createTime: "" }), unqiue: t.id, poi: e.data.poi, reportData: { pageId: reportEnum.enumPageName.POI_DETAIL } });
      }), 1 === t.friendComment.continueFlag && (e.data.isGettingFriendComment = !0, e.data.commentContext = t.friendComment.context)), t && t.strangerComment && t.strangerComment.comment && (i = t.strangerComment.comment.length, t.strangerComment.comment.forEach(function (t) {
        n.push({ comment: Object.assign(t, { createTime: "" }), unqiue: t.id, poi: e.data.poi, reportData: { pageId: reportEnum.enumPageName.POI_DETAIL } });
      }), 1 === t.strangerComment.continueFlag && (e.data.isGettingStrangerComment = !0, e.data.commentContext = t.strangerComment.context));var r = "",
          s = "";(a > 5 || t.friendComment.continueFlag) && (i > 0 || e.data.reasonList.length > 0) && (o = o.slice(0, 5), e.data.showMoreFriendComments = !0, e.data.isGettingFriendComment = !1, r = t.friendComment.context), (i > 5 || t.strangerComment.continueFlag) && e.data.reasonList.length > 0 && (n = n.slice(0, 5), e.data.showMoreStrangerComments = !0, e.data.isGettingStrangerComment = !1, s = t.strangerComment.context), e.setData({ showBottomLoading: !1, friendsImpressionDataList: o, strangerImpressionDataList: n, showMoreFriendComments: e.data.showMoreFriendComments, showMoreStrangerComments: e.data.showMoreStrangerComments, commentContext: e.data.commentContext, friendCommentContext: r, strangerCommentContext: s }), e.poiObserver && e.poiObserver.disconnect(), e.poiObserver = e.createObserveIntersection();
    }, function (t) {
      console.log("getpoicomment resp failed", t), e.setData({ showBottomLoading: !1 }), e.data.isGettingFriendComment = !1, e.data.isGettingStrangerComment = !1;
    });
  }, getMoreCommentRequest: function getMoreCommentRequest() {
    var e = this,
        t = [];e.data.isGettingFriendComment ? e.data.friendsImpressionDataList.forEach(function (e) {
      t.push(e.unqiue);
    }) : e.data.isGettingStrangerComment && e.data.strangerImpressionDataList.forEach(function (e) {
      t.push(e.unqiue);
    }), new cgi.SimpleRequest("getpoicommentdetail", { id: e.data.poiId, context: e.data.commentContext }).send(function (o) {
      if (e.setData({ commentContext: o.context, continueFlag: o.continueFlag }), o.comment && o.comment.length) {
        var n = [];o.comment.forEach(function (o) {
          -1 === t.indexOf(o.id) && n.push({ comment: Object.assign(o, { createTime: "" }), unqiue: o.id, poi: e.data.poi, reportData: { pageId: reportEnum.enumPageName.POI_DETAIL } });
        }), 0 === n.length && e.getMoreCommentRequest();var a = {},
            i = n;if (e.data.isGettingFriendComment) for (var r = e.data.friendsImpressionDataList, s = r.length; s < r.length + i.length; s++) {
          a["friendsImpressionDataList[" + s + "]"] = n[s - r.length];
        } else if (e.data.isGettingStrangerComment) for (var p = e.data.strangerImpressionDataList, m = p.length; m < p.length + i.length; m++) {
          a["strangerImpressionDataList[" + m + "]"] = n[m - p.length];
        }e.setData(_extends({}, a)), e.poiObserver && e.poiObserver.disconnect(), e.poiObserver = e.createObserveIntersection();
      }e.setData({ showBottomLoading: !1 });
    }, function (t) {
      e.setData({ showBottomLoading: !1 });
    });
  }, onTapBackButton: function onTapBackButton() {
    getCurrentPages();var e = reportSession.getLaunchScene();-1 !== [1007, 1008, 1047].indexOf(e) ? util.appNavigateBack() : wx.navigateBack({});
  }, onTapTopImage: function onTapTopImage() {
    this._reportClickAction(reportEnum.enumPoiDetailClickScene.TOP_IMAGE);
  }, onTapShareButton: function onTapShareButton(e) {
    console.log("分享转发: " + JSON.stringify(e));var t = this;if (wx.shareAppMessageForFakeNative) {
      console.log("shareAppMessage, start");var o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg";t.data.poiInfo.topImage && t.data.poiInfo.topImage.length && (o = t.data.poiInfo.topImage);var n = t.data.poiInfo.categoryName;t.data.poiInfo.price && (n = n && n.length ? n + " · 人均￥" + t.data.poiInfo.price : "人均￥" + t.data.poiInfo.price), t.data.poiInfo.area && (n = n && n.length ? n + " · " + t.data.poiInfo.area : t.data.poiInfo.area), wx.shareAppMessageForFakeNative({ bizType: 0, title: t.data.poiInfo.name, imageUrl: o, path: util.getCurrentPageUrl(), desc: n, tailLang: "FF_Entry_Nearby", useDefaultSnapshot: !1, disableForward: !1, defaultHintUrl: "https://mp.weixin.qq.com/mp/waerrpage?appid=wx734c1ad7b3562129&type=upgrade&upgradetype=3#wechat_redirect", success: function success(e) {
          console.log("shareAppMessage success: " + JSON.stringify(e)), t._reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
        }, fail: function fail(e) {
          e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), t._reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), t._reportShareImpression(reportEnum.enumShareResult.API_FAILED));
        } });
    } else console.log("no api");
  }, openLocation: function openLocation(e) {
    wx.openLocation({ latitude: this.data.poiAddress.location.latitude, longitude: this.data.poiAddress.location.longitude, address: this.data.poiAddress.name, name: this.data.poiInfo.name, success: function success(e) {
        console.log("openLocation success" + e);
      }, fail: function fail(e) {
        console.log("openLocation failed" + e);
      } }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.LOCATION);
  }, bindTapPhoneCall: function bindTapPhoneCall(e) {
    var t = this;wx.showActionSheet({ itemList: t.data.poiPhone, itemColor: "#000", success: function success(e) {
        wx.makePhoneCall({ phoneNumber: t.data.poiPhone[e.tapIndex], success: function success(e) {
            t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_SUCCESS);
          }, fail: function fail(e) {
            t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_CANCEL);
          } });
      }, fail: function fail() {
        t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_CANCEL);
      } });
  }, onTapPost: function onTapPost(e) {
    var t = { id: this.data.poiId, name: this.data.poiInfo.name, topImage: this.data.poiInfo.topImage, categoryName: this.data.poiInfo.categoryName, price: this.data.poiInfo.price, distance: this.data.poiInfo.distanceValue, area: this.data.poiInfo.area, isMark: this.data.poiInfo.isMark, address: this.data.poiAddress.address, location: this.data.poiAddress.location },
        o = { startScene: reportEnum.enumPageName.POI_DETAIL, lastScene: reportEnum.enumPageName.POI_DETAIL, nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish?fromPoiDetail=true", poiInfo: t };reportPostImpression.startPostImpressionProcess(o);
  }, onTapMoreButton: function onTapMoreButton() {
    var e = this,
        t = "release";kitchenStorage.getShouldUseGreyServer() && (t = "trial"), wx.showActionSheet({ itemList: ["信息纠错", "商家管理"], itemColor: "#000", success: function success(o) {
        0 === o.tapIndex ? (wx.navigateTo({ url: "/pages/poi_feedback/poi_feedback?poiId=" + encodeURIComponent(e.data.poiId) }), e._reportClickAction(reportEnum.enumPoiDetailClickScene.MORE_FEEDBACK)) : 1 === o.tapIndex && wx.navigateToMiniProgram({ appId: "wx28fc7f32ef9f2404", path: "/pages/index/index?poiId=" + e.data.poiId, envVersion: t, success: function success(t) {
            e._reportClickAction(reportEnum.enumPoiDetailClickScene.WECATERING_SUCCESS);
          }, fail: function fail(t) {
            e._reportClickAction(reportEnum.enumPoiDetailClickScene.WECATERING_FAIL);
          } });
      }, fail: function fail() {
        e._reportClickAction(reportEnum.enumPoiDetailClickScene.MORE_CANCEL);
      } });
  }, onTapMarkButtonOnPoi: function onTapMarkButtonOnPoi(e) {
    var t = 0 === this.data.poiInfo.isMark ? 1 : 0;this.setData({ "poiInfo.isMark": t });var o = t ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";wx.vibrateShort(), wx.showToast({ title: o, icon: "none", duration: 2500 });var n = t;new cgi.SimpleRequest("markpoi", { baseRequest: { pageId: reportEnum.enumPageName.POI_DETAIL }, poiId: this.data.poiId, flag: n }).send(function (e) {
      console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
    }, function (e) {
      console.error("markpoi resp failed", e);
    });
  }, bindTapShowMoreComments: function bindTapShowMoreComments(e) {
    var t = e.currentTarget.dataset.context,
        o = e.currentTarget.dataset.commenttypeid;wx.navigateTo({ url: "/pages/comment_feed/comment_feed?poi=" + encodeURIComponent(JSON.stringify(this.data.poi)) + "&commentType=" + o + "&context=" + encodeURIComponent(t) }), this._reportClickAction(1 == o ? reportEnum.enumPoiDetailClickScene.MORE_FRIEND_IMPRESSIONS : reportEnum.enumPoiDetailClickScene.MORE__STRANGER_IMPRESSIONS);
  }, bindTapToIndexTag: function bindTapToIndexTag(e) {
    var t = e.currentTarget.dataset.item,
        o = e.currentTarget.dataset.reporttype;"tag" === o ? (wx.navigateTo({ url: "/pages/index_tag/index_tag?name=" + encodeURIComponent(t.name) + "&feedId=" + t.id }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.TAG)) : "rank" === o && (wx.navigateTo({ url: "/pages/rank_list_new/rank_list_new?tabIndex=" + t.type + "&areaId=" + encodeURIComponent(t.area.id) + "&categoryId=" + encodeURIComponent(t.category.id) }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.RANK));
  }, addGlobalFunc: function addGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId,
            n = t.commentCount ? t.commentCount : 0;console.log("poi-detail, infoUpdateEventListeners, updateImpressionCommentCount");for (var a = e.data.friendsImpressionDataList, i = 0; i < a.length; i++) {
          if ((s = a[i]).unqiue == o) {
            if (s.comment) {
              s.comment.subCommentCount = n, console.log("poi-detail friendsImpressionDataList, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + i), e.setData(_defineProperty({}, "friendsImpressionDataList[" + i + "].comment.subCommentCount", n));break;
            }console.error("poi-detail friendsImpressionDataList, timelineItem.comment undefined!");break;
          }
        }var r = e.data.strangerImpressionDataList;for (i = 0; i < r.length; i++) {
          var s;if ((s = r[i]).unqiue == o) {
            if (s.comment) {
              s.comment.subCommentCount = n, console.log("poi-detail strangerImpressionDataList, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + i), e.setData(_defineProperty({}, "strangerImpressionDataList[" + i + "].comment.subCommentCount", n));break;
            }console.error("poi-detail strangerImpressionDataList, timelineItem.comment undefined!");break;
          }
        }
      } else console.error("poi-detail, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.addImpression, function (t) {
      console.log("poi-detail, infoUpdateEventListeners, addImpression"), e.getCommentRequest();
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId;console.log("poi-detail, infoUpdateEventListeners, deleteImpression, impressionId: " + o);for (var n = 0; n < e.data.friendsImpressionDataList.length; n++) {
          if (e.data.friendsImpressionDataList[n].unqiue == o) {
            e.setData(_defineProperty({}, "friendsImpressionDataList[" + n + "]", {}));break;
          }
        }
      } else console.error("poi-detail, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.addLaunchListener(function () {
      app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail);
    });
  }, createObserveIntersection: function createObserveIntersection() {
    var e = this,
        t = wx.createIntersectionObserver(e, { thresholds: [.4, 1], initialRatio: 0, observeAll: !0 });return t.relativeToViewport(), t.observe(".impression-cell", function (t) {
      var o = t.dataset,
          n = o.index,
          a = o.stranger || !1;if (void 0 !== n) {
        var i = e.data.friendsImpressionDataList[n];if (a && (i = e.data.strangerImpressionDataList[n]), i) {
          var r = "";if (i.comment && i.comment.id && (r = i.comment.id), r && !e.data.impressionExposedSet.has(r)) {
            e.data.impressionExposedSet.add(r);var s = reportEnum.enumFeedImpressionType.FRIEND;a && (s = reportEnum.enumFeedImpressionType.STRANGER);var p = 0;i && i.comment && i.comment.subCommentCount && (p = i.comment.subCommentCount);var m = reportEnum.enumFeedAction.FEED_EXPOSED,
                d = i.reportData.requestId || "",
                c = i.reportData.recId || "",
                u = i.reportData.recType || 0;reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(p).isForwardedImpression(0).poiIdString(e.data.poiId).impressionIdString(r).action(m).impressionType(s).requestId(d).pageId(reportEnum.enumPageName.POI_DETAIL).reasonId().reasonIdString().recId(c).recType(u).lazyReportToServer();
          }
        }
      }
    }), t;
  }, _getFormattedBusinessHour: function _getFormattedBusinessHour(e, t) {
    var o = "",
        n = null,
        a = "",
        i = "";if (e.hours && e.hours.hours) {
      var r = e.hours.hours.replace(/(非营业时段\s*\n*?.*)/, ""),
          s = poiDataFormatter.businessHourFormatter(r),
          p = "";void 0 !== s[0] ? o = s[0].replace(/[\r\n]+/g, " ") : (p = poiDataFormatter.businessHourBeautifier(r).replace(/[\r\n]+/g, " "), 0 === (n = poiDataFormatter.businessHourChecker(t, r)) ? (o = p, i = "red-tag", a = "已打烊") : o = 1 === n ? "营业中 | " + p : "");
    }var m = "1";e.intro.status && (m = e.intro.status), "1" !== m && (a = "可能已歇业", i = "red-tag", o = "");var d = { 2: "尚未开业", 3: "暂停营业", 4: "尚未开业", 11: "已歇业", 12: "已歇业", 40: "可能已搬迁", 41: "可能已歇业" },
        c = e.intro.quality;return c < 60 && d[c] && (a = d[c], i = "red-tag", o = ""), c < 60 || 0 === n || a.length > 0 ? o.length > 0 || a.length > 0 ? { time: o, status: a, optionalClass: i } : "" : o.length > 0 ? { time: o, optionalClass: i } : "";
  }, _reportEnterSharedPage: function _reportEnterSharedPage(e) {
    reporter.getReporter(17014).pageId(reportEnum.enumPageName.POI_DETAIL).launchScene(reportSession.getLaunchScene()).poiId(this.data.poiId).impressionId("").pageState(e).impressionType(0).time(Math.floor(new Date().getTime() / 1e3)).sessionId(reportSession.getId()).reportToServer();
  }, _reportClickAction: function _reportClickAction(e) {
    e ? reporter.getReporter(17415).sessionId(reportSession.getId()).prevPageId(this.mmPrevPage.mmReportData.pageName).clickTime(Math.floor(new Date().getTime() / 1e3)).poiId(this.data.poiId).clickScene(e).reportToServer() : console.error("invalid parameter, clickScene");
  }, _reportShareImpression: function _reportShareImpression(e) {
    e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.POI).shareScene(reportEnum.enumPageName.POI_DETAIL).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.poiId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
  } }); 
 			}); 	require("pages/poi_detail/poi_detail.js");
 		__wxRoute = 'pages/impression_feed/impression_feed';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/impression_feed/impression_feed.js';	define("pages/impression_feed/impression_feed.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _data;function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    mixinCss = require("../../utils/mixinCss"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    appLaunchData = require("../../utils/appLaunchData"),
    renderDataUtil = require("../../utils/render_data_util"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    ContactSchema = require("../../utils/model/model_schema").ContactSchema,
    MAX_SWIPER_HEIGHT = 800,
    MIN_SWIPER_HEIGHT = 420,
    MAX_SWIPER_WIDTH = 750,
    MMLIFEAPP_IMPRESSION_STATUS_VALID = 0,
    MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1,
    MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;MMPage({ mmReportData: { pageName: reportEnum.enumPageName.IMPRESSION }, data: (_data = { impressionId: "", recId: "", recType: 0, mainCommentIndex: -1, replyCommentIndex: -1, poi: {}, isSelfImpression: !1, startTimeStamp: 0, from: 0, isIpx: util.isIpx(), ipxDangerBottom: mixinCss.ipxDangerBottom, mainComments: [], referCommentLists: [], poiData: [], current: 0, swiperData: [], previewPicList: [], currentHeight: 0, scale: 1, totalCommentCount: 0, placeholder: "发表评论", warningMsg: "不能评论空白消息", cursorSpacing: util.rpx2px(40), focus: !1, inputValue: "", lastInputText: "", showInputKeyboardMask: !1, lastReferId: "", lastReplyId: "", currentReferId: "", currentReplyId: "", originalNickName: "", repliedName: "", showVideo: !1, currentVideoPath: "", continueFlag: !1, showBottomLoadingView: !1, impressionCommentContext: "", referId: "", fromPoiDetail: !1, hasLaunch: !1, videoContexts: {}, contactType: 0, canShare: util.canUseShareAppMessageAPI(), impressionState: 0, pageState: reportEnum.enumPageState.OK, contentErrorText: "内容获取失败", impressionContentType: 0, lastMainIndex: -1, lastReplyIndex: -1, useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(), currentPageId: reportEnum.enumPageName.IMPRESSION }, _defineProperty(_data, "videoContexts", {}), _defineProperty(_data, "reportDataForLike", { pageId: reportEnum.enumPageName.IMPRESSION }), _defineProperty(_data, "topicTags", []), _defineProperty(_data, "viewedMediasIndexListString", ""), _data), onLoad: function onLoad(e) {
    var t = this,
        a = decodeURIComponent(e.id),
        n = (e.autoFocus, "true" === e.fromPoiDetail),
        i = e.currentMedia ? Number(e.currentMedia) : 0;t.data.recId = e.recId ? e.recId : "", t.data.reportDataForLike.recId = t.data.recId, t.data.recType = e.recType ? Number(e.recType) : 0, t.data.reportDataForLike.recType = t.data.recType, t.setData({ fromPoiDetail: n, impressionId: a, swiperCurrent: i, current: i, reportDataForLike: t.data.reportDataForLike }), t.data.from = i, t.data.viewedMediasIndexListString = "" + i, MAX_SWIPER_HEIGHT = util.px2rpx(util.getSysInfo().screenHeight) - 300, util.isIpx() && (MAX_SWIPER_HEIGHT -= t.data.ipxDangerBottom), t.preCachePageInfo(), app.addLaunchListener(function () {
      t.setData({ hasLaunch: !0 }), t.loadComment(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.IMPRESSION).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, onUnload: function onUnload() {
    this.reportViewedMediasIndex();
  }, onReady: function onReady() {
    this.data.videoContext = wx.createVideoContext("theVideo");
  }, preCachePageInfo: function preCachePageInfo() {
    var e = this,
        t = getCurrentPages(),
        a = {},
        n = {},
        i = [],
        o = 1,
        r = [],
        s = "";if (t.length >= 2 && (a = t[t.length - 2].data), a.impressionDataList ? i = a.impressionDataList.concat(a.impressionDataListRecommend) : a.impressionList ? i = a.impressionList : a.friendsImpressionDataList && (i = a.friendsImpressionDataList.concat(a.strangerImpressionDataList)), i.length > 0 && (n = i.filter(function (t) {
      return (t && t.comment && t.comment.id || "") === e.data.impressionId;
    })[0]), n && 0 !== Object.keys(n).length) {
      e.setData({ isCacheHit: 1 }), app.addUserStateChangeListener(function () {
        var t = app.getUserState();console.log("onload friendTimeline cache hit, user_access_permission, checkUserState, userState is: " + t), t != app.enumUserStateError.shouldUpdateWeChat && t != app.enumUserStateError.isPad && t != app.enumUserStateError.error || e.setData({ shouldShowUserAccessPermission: 1 });
      });n.commentInfo = JSON.parse(n.comment.info);var m = n.commentInfo.pic && n.commentInfo.pic[e.data.from] ? n.commentInfo.pic[e.data.from] : {},
          p = 750 * (m.height || 1) / (m.width || 1);p < MIN_SWIPER_HEIGHT ? p = MIN_SWIPER_HEIGHT : p > MAX_SWIPER_HEIGHT && (p = MAX_SWIPER_HEIGHT);var d = p;n.commentInfo.pic && (r = n.commentInfo.pic.map(function (e) {
        var t = "",
            a = void 0 !== e.height ? e.height : 1,
            n = void 0 !== e.width ? e.width : 1,
            i = n * p / a || 750;return d = i * a / n || 750, i > MAX_SWIPER_WIDTH && (i = MAX_SWIPER_WIDTH, d = MAX_SWIPER_WIDTH * a / n || 750), e.thumbUrl ? t = e.thumbUrl : e.midImageUrl ? t = e.midImageUrl : e.url && (t = e.url), { type: e.type, url: t, thumbUrl: t, height: d, width: i };
      }));var c = r.map(function (e) {
        return { height: util.rpx2px(e.height) };
      });o = 1, r[e.data.from] && r[e.data.from].height && (o = r[e.data.from].height);var l = n.poiTable || renderDataUtil.getPoiInfo4Impression(n),
          u = "",
          I = "";l.name && (I = l.name), l.categoryName && (u += l.categoryName), l.price && (u += " · 人均￥" + l.price), this.data.useRealCurrentLocationToGetData && l.distance && (u += " · " + l.distance), e.data.poi.title1 = I, e.data.poi.title2 = u, s = n.commentInfo.content ? n.commentInfo.content : "", this.setData({ imgSize: c, swiperData: r, currentHeight: o, "poi.title1": I, "poi.title2": u, "poi.isMark": new PoiModel(l.id).getValue().isMark, topCommentContent: s }), this.updateImpressionContentType(), this.bindSwiperChange({ detail: { current: e.data.from } });
    }
  }, onReachBottom: function onReachBottom() {
    this.data.continueFlag && this.getNextComments();
  }, bindSwiperChange: function bindSwiperChange(e) {
    var t = this;console.log("onCurrentChange: ", e);var a = e.detail.current;this.setData({ current: a }), t.data.viewedMediasIndexListString = t.data.viewedMediasIndexListString + ";" + a, 0 !== t.data.swiperData.length && (1 === t.data.swiperData[a].type ? (t.data.videoContexts[a] || (t.data.videoContexts[a] = wx.createVideoContext("swiperItem" + a)), Object.keys(t.data.videoContexts).forEach(function (e) {
      var n = t.data.videoContexts[e];e == a ? n.play() : n.pause();
    })) : Object.keys(t.data.videoContexts).forEach(function (e) {
      t.data.videoContexts[e].pause();
    }));
  }, bindfullscreenchange: function bindfullscreenchange(e) {
    e.detail.fullScreen ? this.data.videoContext.play() : (this.data.videoContext.pause(), this.setData({ videoUrl: "" }));
  }, bindTapPlayVideo: function bindTapPlayVideo(e) {
    var t = e.currentTarget.dataset.index,
        a = { type: 1, filePath: this.data.swiperData[t].url, thumbFilePath: this.data.swiperData[t].thumbUrl };app.globalData.picList = [a], app.globalData.currentPicIndex = 0, wx.navigateTo({ url: "/pages/swipe_pic/swipe_pic" });
  }, bindTapEndVideo: function bindTapEndVideo() {
    this.setData({ showVideo: !1, shouldShowSwiper: !0 });
  }, loadComment: function loadComment() {
    var e = this;this.setData({ continueFlag: !1, impressionCommentContext: "" });var t = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetImpressionComment", { impressionId: e.data.impressionId, location: t }).send(function (t) {
      if (e.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), t.impression) {
        var a = MMLIFEAPP_IMPRESSION_STATUS_VALID;t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT && (t.impression.comment && void 0 !== t.impression.comment.status ? a = t.impression.comment.status : console.error("no data.impression.comment.status")), a == MMLIFEAPP_IMPRESSION_STATUS_UNREAL ? e.setData({ impressionState: 2, pageState: reportEnum.enumPageState.IMPRESSION_INVALID2 }) : a == MMLIFEAPP_IMPRESSION_STATUS_INVALID && e.setData({ impressionState: 1, pageState: reportEnum.enumPageState.IMPRESSION_INVALID });var n = !1,
            i = "";t.continueFlag && (n = t.continueFlag), t.context && (i = t.context);var o = {};if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) o = t.impression.comment;else if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) {
          if (!t.impression.payRecommendPoiImpression || !t.impression.payRecommendPoiImpression.id) return void console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");o = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression);
        }if (o.id) {
          var r = JSON.parse(o.info),
              s = [],
              m = [];if (r.pic && r.pic.length) {
            var p = r.pic[e.data.from] || {},
                d = 750 * (p.height || 1) / (p.width || 1),
                c = d;d < MIN_SWIPER_HEIGHT ? d = MIN_SWIPER_HEIGHT : d > MAX_SWIPER_HEIGHT && (d = MAX_SWIPER_HEIGHT), r.pic.forEach(function (e) {
              var t = e.height || 1,
                  a = e.width || 1,
                  n = a * d / t || 750;c = n * t / a || 750, n > MAX_SWIPER_WIDTH && (n = MAX_SWIPER_WIDTH, c = MAX_SWIPER_WIDTH * t / a || 750);var i = { url: e.url, thumbUrl: e.thumbUrl, width: n, height: c, type: e.type, duration: e.duration || 0, midImageUrl: e.midImageUrl, thumbSize: e.thumbSize || 0, midImageSize: e.midImageSize || 0, imageSize: e.imageSize ? e.imageSize : e.size, videoSize: e.videoSize ? e.videoSize : e.size };s.push(i), 0 === e.type && m.push(e.url);
            });
          }var l = renderDataUtil.getFormattedContactInfo(o.contact),
              u = (l.remark || l.nickName, l.nickName),
              I = l.headImgUrl,
              h = r.content.replace(/^\s+|\s+$/g, ""),
              g = util.getDateFormatString(t.impression.createTime);e.data.isSelfImpression = 0 === l.type;var f = e.getRenderPoiInfo(t.impression.poi),
              S = o.id,
              C = null == s[e.data.current] ? 0 : s[e.data.current].height,
              E = s.map(function (e) {
            return { height: util.rpx2px(e.height) };
          }),
              P = [];o.topic && (P = o.topic), e.setData({ imgSize: E, swiperData: s, previewPicList: m, poi: f, authorContact: l, headImgUrl: I, topCommentContent: h, topCommentTimeStr: g, originalNickName: u, currentHeight: C, continueFlag: n, impressionCommentContext: i, referId: S, topicTags: util.normalizeArray(P) }), e.updateImpressionContentType(), e.reportEnterSharedPage(), declareBinding({ instance: e, schema: ContactSchema, mapping: { "authorContact.userId": "id", "authorContact.follow": "follow", "authorContact.ugc.fansCount": "fansCount" } }), declareBinding({ instance: e, schema: PoiSchema, mapping: { "poi.id": "id", "poi.isMark": "isMark" } }), e.data.startTimeStamp = new Date().getTime();var M = t.comment || [],
              T = o.contact.type,
              y = e.generateMainComments(M, T),
              _ = o.isLike,
              v = o.likeCount;e.setData({ mainComments: y, totalCommentCount: o.subCommentCount || 0, isLike: _, likeCount: v, showBottomLoadingView: !0, contactType: T }), declareBinding({ instance: e, schema: ContactSchema, arrayPath: "mainComments", mapping: { "contact.userId": "id", "contact.follow": "follow", "contact.ugc.fansCount": "fansCount" } }), declareBinding({ instance: e, schema: CommentSchema, mapping: { impressionId: "id", isLike: "isLike", likeCount: "likeCount" } }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: e.data.impressionId, commentCount: e.data.totalCommentCount });
        } else console.error("no valid impression object data, return!");
      } else console.error("no data.impression");
    }, function (t) {
      if (console.error("GetImpressionComment failed, error: " + JSON.stringify(t)), t && t.errorCode && -10003 == t.errorCode) {
        if (!t.data || !t.data.impression) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression data"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (t.data.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) return console.error("GetImpressionComment failed, errorCode is -10003 type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (!t.data.impression.comment) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression.comment data"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_VALID) e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });else if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_UNREAL || t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID) {
          var a = t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID ? reportEnum.enumPageState.IMPRESSION_INVALID : reportEnum.enumPageState.IMPRESSION_INVALID2;e.setData({ impressionState: -2, contentErrorText: "该内容违反了平台相关规定，无法查看。", pageState: a }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });
        } else console.error("GetImpressionComment failed, errorCode is -10003, unknown impression.comment.status"), e.setData({ impressionState: -1, contentErrorText: "该内容已被发布者删除", pageState: reportEnum.enumPageState.DELETED }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: e.data.impressionId });
      } else console.error("GetImpressionComment failed, other error"), e.setData({ impressionState: -99, contentErrorText: "内容获取失败", pageState: reportEnum.enumPageState.UNKNOWN });e.reportEnterSharedPage();
    });
  }, generateMainComments: function generateMainComments(e, t) {
    var a = [];return e.forEach(function (e) {
      var n = {};n.id = e.mainComment.id, n.contact = e.mainComment.contact, n.nickName = e.mainComment.contact.remark || e.mainComment.contact.nickName, 0 === t && 1 === e.mainComment.contact.type && (n.nickName = n.nickName + "(朋友)"), n.headImgUrl = e.mainComment.contact.headImgUrl, n.timeStr = util.getDateFormatString(e.mainComment.createTime), n.commentContent = JSON.parse(e.mainComment.info).content.replace(/^\s+|\s+$/g, ""), n.isDeleted = e.mainComment.deleted, n.isSelf = 0 == e.mainComment.contact.type, e.replyComment && e.replyComment.length && (n.replyComments = e.replyComment.map(function (e) {
        var a = e.contact.remark || e.contact.nickName;0 === t && 1 === e.contact.type && (a += "(朋友)");var n = "";return e.replyContact && (n = e.replyContact.remark || e.replyContact.nickName, 0 === t && 1 === e.replyContact.type && (n += "(朋友)")), { id: e.id, nickName: a, repliedNickName: n, commentContent: JSON.parse(e.info).content.replace(/^\s+|\s+$/g, ""), isSelf: 0 == e.contact.type };
      })), n.isDeleted ? console.log("Comment is Deleted") : (console.log("Comment is not Deleted, add"), a.push(n));
    }), a;
  }, getNextComments: function getNextComments() {
    var e = this,
        t = appLaunchData.getUserLocation();new cgi.SimpleRequest("GetImpressionComment", { impressionId: e.data.impressionId, location: t, context: e.data.impressionCommentContext }).send(function (t) {
      var a = !1,
          n = "";t.continueFlag && (a = t.continueFlag), t.context && (n = t.context);var i = t.comment || [],
          o = e.data.contactType,
          r = e.generateMainComments(i, o);r = e.data.mainComments.concat(r);var s = e.data.totalCommentCount;if (t.impression) {
        var m = {};t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT ? m = t.impression.comment : t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION && (t.impression.payRecommendPoiImpression && t.impression.payRecommendPoiImpression.id ? m = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression) : console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!")), m.subCommentCount && (s = m.subCommentCount, app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: e.data.impressionId, commentCount: s }));
      }e.setData({ mainComments: r, totalCommentCount: s, showBottomLoadingView: !0, continueFlag: a, impressionCommentContext: n });
    });
  }, postComment: function postComment(e) {
    var t = this;e && new cgi.SimpleRequest("PostImpressionComment", { baseRequest: { pageId: reportEnum.enumPageName.IMPRESSION }, impressionId: t.data.impressionId, referId: t.data.currentReferId, replyId: t.data.currentReplyId, info: JSON.stringify({ content: e.replace(/^\s+|\s+$/g, "") }), requestId: util.uuid(), recId: t.data.recId, recType: t.data.recType }).ensureNoSameUrlProcessing().send(function (e) {
      t.data.lastReferId = t.data.currentReferId, t.data.lastReplyId = t.data.currentReplyId, t.setData({ placeholder: "发表评论", inputValue: "", currentReferId: "", currentReplyId: "" }), t.data.lastReferId ? t.loadLocalComment(t.data.lastInputText, e.commentId, t.data.lastReplyId) : t.loadLocalMainComment(t.data.lastInputText, e.commentId), t.data.lastInputText = "", util.toast("评论成功");
    }, function (e) {
      console.log("PostImpressionComment resp failed", e);var a = "评论失败",
          n = !1;e && e.errorCode && -10012 == e.errorCode ? (n = !0, a = "印象已删除，无法评论。", app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: t.data.impressionId })) : e && e.errorCode && -10013 == e.errorCode ? (n = !0, a = "评论已删除，无法回复。", t.deleteLocalComment(t.data.lastMainIndex, t.data.lastReplyIndex)) : a = util.getPostImpressionCommentErrorMessage(e), n && (t.data.lastReferId = "", t.data.lastReplyId = "", t.data.lastMainIndex = -1, t.data.lastReplyIndex = -1, t.setData({ placeholder: "发表评论", inputValue: "", lastInputText: "", focus: !1, showInputKeyboardMask: !1, currentReferId: "", currentReplyId: "" })), util.hideLoading(), wx.showToast({ title: a, icon: "none", duration: 2e3 });
    });
  }, bindConfirm: util.throttleWithTrailingCancelling(function (e) {
    e.detail.value && 0 !== e.detail.value.length && 0 !== e.detail.value.trim().length ? (this.setData({ placeholder: "发表评论", inputValue: "" }), this.postComment(e.detail.value)) : wx.showModal({ content: this.data.warningMsg, showCancel: !1 });
  }, 1e3), bindBlur: function bindBlur(e) {
    this.data.lastReferId = this.data.currentReferId, this.data.lastReplyId = this.data.currentReplyId;var t = "";0 == this.data.currentReferId.length && 0 == this.data.currentReplyId.length && (t = this.data.lastInputText), this.setData({ placeholder: "发表评论", focus: !1, inputValue: t, showInputKeyboardMask: !1, currentReferId: "", currentReplyId: "" });
  }, bindFocus: function bindFocus(e) {
    var t = "";this.data.currentReferId == this.data.lastReferId && this.data.currentReplyId == this.data.lastReplyId ? t = this.data.lastInputText : this.data.lastInputText = "", this.setData({ showInputKeyboardMask: !0, inputValue: t });
  }, bindInput: function bindInput(e) {
    this.data.lastInputText = e.detail.value;
  }, onTapShareButton: function onTapShareButton(e) {
    if (console.log("分享转发: " + JSON.stringify(e)), 1 == this.data.impressionState) return console.log("impressionState is 1, showModal and return"), wx.showModal({ title: "提示", content: "该内容违反了平台相关规定，无法分享。", confirmText: "我知道了", cancelText: "查看详情", success: function success(e) {
        if (e.confirm) console.log("impressionState is 1, showModal, user confirm");else if (e.cancel) {
          console.log("impressionState is 1, showModal, user cancel");wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2") });
        }
      } }), void this.reportShareImpression(reportEnum.enumShareResult.FORBID_HIGH);if (2 == this.data.impressionState) return console.log("impressionState is 2, showModal and return"), wx.showModal({ content: "该内容与餐厅无关，无法分享。", showCancel: !1, confirmText: "我知道了" }), void this.reportShareImpression(reportEnum.enumShareResult.FORBID_LOW);var t = this;if (wx.shareAppMessageForFakeNative) {
      console.log("shareAppMessage, start");var a = "",
          n = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(t.data.impressionId);t.data.swiperData && t.data.swiperData.length > 0 && (0 == t.data.swiperData[t.data.current].type ? t.data.swiperData[t.data.current].midImageUrl ? a = t.data.swiperData[t.data.current].midImageUrl : t.data.swiperData[t.data.current].url && (a = t.data.swiperData[t.data.current].url) : 1 == t.data.swiperData[t.data.current].type && t.data.swiperData[t.data.current].thumbUrl && (a = t.data.swiperData[t.data.current].thumbUrl), n = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(t.data.impressionId) + "&currentMedia=" + t.data.current), a && a.length || (a = t.data.poi.bigPicUrl && t.data.poi.bigPicUrl.length ? t.data.poi.bigPicUrl : "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), wx.shareAppMessageForFakeNative({ bizType: 0, title: t.data.originalNickName + " 的餐厅印象", imageUrl: a, path: n, desc: t.data.poi.title1, tailLang: "FF_Entry_Nearby", useDefaultSnapshot: !1, disableForward: !1, defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning", success: function success(e) {
          console.log("shareAppMessage success: " + JSON.stringify(e)), t.reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
        }, fail: function fail(e) {
          e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), t.reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), t.reportShareImpression(reportEnum.enumShareResult.API_FAILED));
        } });
    } else console.log("no api");
  }, onTapMoreButton: function onTapMoreButton(e) {
    var t = this,
        a = e.currentTarget.dataset.id,
        n = t.data.impressionId;t.data.isSelfImpression ? wx.showActionSheet({ itemList: ["删除"], itemColor: "#000", success: function success(e) {
        t.deleteImpression(a, n);
      } }) : wx.showActionSheet({ itemList: ["投诉"], itemColor: "#000", success: function success(e) {
        wx.navigateTo({ url: "/pages/complain_page/complain_page?impressionId=" + n });
      } });
  }, deleteImpression: function deleteImpression(e, t) {
    wx.showModal({ title: "提示", content: "要删除这条印象吗？", confirmText: "删除", success: function success(a) {
        a.confirm ? (console.log("用户点击确定"), util.showLoading(), new cgi.SimpleRequest("delpoicomment", { id: e, commentId: t, scene: 0 }).send(function (e) {
          console.log("delpoicomment resp ", JSON.stringify(e)), util.hideLoading(), util.toast("印象删除成功"), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, { impressionId: t }), setTimeout(function () {
            wx.navigateBack();
          }, 1e3);
        }, function (e) {
          console.log("delpoicomment resp failed", e), util.hideLoading(), util.hint("印象删除失败");
        })) : a.cancel && console.log("用户点击取消");
      } });
  }, onTapMarkButton: function onTapMarkButton(e) {
    console.log("onTapMarkButton: " + JSON.stringify(e));var t = e.currentTarget.dataset.id,
        a = (e.currentTarget.dataset.poi, 0 == this.data.poi.isMark ? 1 : 0);new PoiModel(t).toggleMark();var n = a ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";wx.vibrateShort(), wx.showToast({ title: n, icon: "none", duration: 2500 });var i = a;new cgi.SimpleRequest("markpoi", { baseRequest: { pageId: reportEnum.enumPageName.IMPRESSION }, poiId: t, flag: i, referId: this.data.referId, recId: this.data.recId, recType: this.data.recType }).send(function (e) {
      console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
    }, function (e) {
      console.error("markpoi resp failed", e);
    });
  }, bindtapPoi: function bindtapPoi(e) {
    if (this.data.fromPoiDetail) wx.navigateBack();else {
      var t = e.currentTarget.dataset.id;wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t) });
    }
  }, bindtapMainComment: function bindtapMainComment(e) {
    var t = e.currentTarget.dataset.nickname,
        a = e.currentTarget.dataset.id,
        n = e.currentTarget.dataset.isSelf;if (this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, n) return this.setData({ focus: !1 }), void this.showDeleteActionSheet(this.data.mainCommentIndex, -1, a, "");this.data.lastMainIndex = this.data.mainCommentIndex, this.data.lastReplyIndex = -1;var i = "";a == this.data.lastReferId && "" == this.data.lastReplyId && (i = this.data.lastInputText), this.setData({ placeholder: "回复" + t, focus: !0, inputValue: i, currentReferId: a, currentReplyId: "" });
  }, bindtapReplyComment: function bindtapReplyComment(e) {
    var t = e.currentTarget.dataset.nickname,
        a = e.currentTarget.dataset.replyid,
        n = e.currentTarget.dataset.referid,
        i = e.currentTarget.dataset.isSelf;if (this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex, i) return this.setData({ focus: !1 }), void this.showDeleteActionSheet(this.data.mainCommentIndex, this.data.replyCommentIndex, n, a);this.data.lastMainIndex = this.data.mainCommentIndex, this.data.lastReplyIndex = this.data.replyCommentIndex;var o = "";n == this.data.lastReferId && a == this.data.lastReplyId && (o = this.data.lastInputText), this.setData({ placeholder: "回复" + t, warningMsg: "不能回复空白消息", focus: !0, inputValue: o, currentReferId: n, currentReplyId: a, repliedName: t });
  }, bindTapTag: function bindTapTag(e) {
    var t = e.currentTarget.dataset.name,
        a = e.currentTarget.dataset.id;wx.navigateTo({ url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify({ name: t, id: a })) });
  }, getRenderPoiInfo: function getRenderPoiInfo(e) {
    var t = {};t.id = e.base.id, t.unique = t.id, t.thumbUrl = "", t.bigPicUrl = "", e.base && e.base.logo && e.base.logo.thumbUrl ? t.thumbUrl = e.base.logo.thumbUrl : t.thumbUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg", e.base && e.base.logo && e.base.logo.url ? t.bigPicUrl = e.base.logo.url : t.bigPicUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg", t.name = e.base.name;var a = [];e.base.category.forEach(function (e) {
      var t = e.name,
          n = e.name.lastIndexOf(":");-1 != n && (t = t.substring(n + 1, e.name.length)), a.push(t);
    }), t.categoryDesc = a.join(","), t.price = 0, e.price && e.price.price && (t.price = parseInt(e.price.price) / 100), t.distance = Math.round(e.base.location.distance), t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", e.like && e.like.count && (t.likeContactsText = e.like.count + "个朋友推荐");var n = 0;e.ugc && e.ugc.isMark && e.ugc.isMark > 0 && (n = 1), t.isMark = n, t.visitCount = 0, e.ugc && e.ugc.visitCount && (t.visitCount = e.ugc.visitCount, t.visitText = e.ugc.visitCount + "个朋友发了印象"), t.rank = 0, e.rank && e.rank.rank && (t.rank = e.rank.rank), t.rank = t.rank.toFixed(1);var i = Math.floor(t.rank),
        o = 5 - i;return t.rank - i >= .7 && (i++, o--), t.stars = Array(i).fill(1), t.halfStars = Array(0).fill(1), t.unstars = Array(o).fill(1), t.poi && t.photo && t.photo[0] && (t.thumbUrl = t.photo[0].thumbUrl || t.photo[0].url), t.title1 = t.name, t.title2 = t.categoryDesc, t.price && (t.title2 += " · 人均￥" + t.price), this.data.useRealCurrentLocationToGetData && t.distanceString && (t.title2 += " · " + t.distanceString), t;
  }, showDeleteActionSheet: function showDeleteActionSheet(e, t, a, n) {
    var i = this;wx.showActionSheet({ itemList: ["删除"], itemColor: "#000", success: function success(o) {
        wx.showModal({ title: "提示", content: "要删除这条评论吗？", cancelText: "取消", confirmText: "删除", success: function success(o) {
            o.confirm ? (console.log("delete impression comment，confirm"), i.deleteComment(e, t, a, n)) : o.cancel && console.log("delete impression comment，cancel");
          } });
      } });
  }, deleteComment: function deleteComment(e, t, a, n) {
    var i = this;util.showLoading();var o = t >= 0 ? n : a;new cgi.SimpleRequest("DelImpressionComment", { impressionId: i.data.impressionId, commentId: o }).send(function (a) {
      util.hideLoading(), util.toast("删除成功"), i.deleteLocalComment(e, t);
    }, function (e) {
      console.log("DelImpressionComment resp failed", e), util.hideLoading(), util.hint("删除失败");
    });
  }, deleteLocalComment: function deleteLocalComment(e, t) {
    var a = this.data.mainComments,
        n = this.data.totalCommentCount;if (e < 0 || e >= a.length) console.error("invalid mainCommentIndex: " + e);else {
      if (t < 0) {
        var i = a[e],
            o = 1;i.replyComments && i.replyComments.length && (o += i.replyComments.length), a.splice(e, 1), n -= o;
      } else {
        if (t >= a[e].replyComments.length) return void console.error("invalid replyCommentIndex: " + t);a[e].replyComments.splice(t, 1), n -= 1;
      }n < 0 && (console.error("deleteLocalComment: new totalCommentCount < 0"), n = 0), this.setData({ mainComments: a, totalCommentCount: n }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: n });
    }
  }, loadLocalComment: function loadLocalComment(e, t, a) {
    var n,
        i = this.data.totalCommentCount,
        o = this.data.mainComments;if (this.data.mainCommentIndex < 0 || this.data.mainCommentIndex >= o.length) console.error("invalid mainCommentIndex: " + this.data.mainCommentIndex);else {
      var r = o[this.data.mainCommentIndex].replyComments || [],
          s = r.length || 0,
          m = { id: t, commentContent: e, isSelf: !0, nickName: app.globalData.userInfo.nickName, repliedNickName: a ? this.data.repliedName : "" };r.push(m), i++, this.setData((_defineProperty(n = {}, "mainComments[" + this.data.mainCommentIndex + "].replyComments[" + s + "]", m), _defineProperty(n, "totalCommentCount", i), n)), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: i });
    }
  }, loadLocalMainComment: function loadLocalMainComment(e, t) {
    var a = this.data.totalCommentCount;a++;var n = this.data.mainComments || [],
        i = this.generateMainComments([{ mainComment: { contact: Object.assign({}, app.globalData.userInfo, { type: 0 }), createTime: new Date().getTime() / 1e3, id: t, info: JSON.stringify({ content: e }) } }], this.data.contactType)[0];n.unshift(i), this.setData({ mainComments: n, totalCommentCount: a }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, { impressionId: this.data.impressionId, commentCount: a });
  }, bindMediaKVReport: function bindMediaKVReport(e) {
    var t = e.currentTarget.dataset.media || {},
        a = new Date().getTime(),
        n = t.url,
        i = 0,
        o = 0;0 == t.type ? (n = t.url, i = 2) : (n = t.thumbUrl, i = 0), 2 == i && t.imageSize ? o = t.imageSize : 0 == i && t.thumbSize && (o = t.thumbSize), reporter.getReporter(16479).appVersion(app.globalData.sysInfo.version).publicLibVersion(app.globalData.sysInfo.SDKVersion).pagePath("pages/impression_feed/impression_feed").mediaType(t.type).mediaSrc(n).networkType(app.globalData.sysInfo.networkType).startLoadTime(this.data.startTimeStamp).endLoadTime(a).mediaSize(o).mediaWidth(e.detail.width).mediaHeight(e.detail.height).mediaDuration(t.duration).mediaScale(i).lazyReportToServer();
  }, bindlikechange: function bindlikechange(e) {}, updateImpressionContentType: function updateImpressionContentType() {
    var e = 0;if (this.data.topCommentContent && 0 != this.data.topCommentContent.length) {
      this.data.swiperData && 0 != this.data.swiperData.length || (e = reportEnum.enumImpressionContentType.TEXT_ONLY);var t = !1,
          a = !1;this.data.swiperData.forEach(function (e) {
        0 === e.type ? t = !0 : 1 === e.type ? a = !0 : console.error("unknown type for item in swiperData: " + JSON.stringify(swiperData));
      }), t && a ? e = reportEnum.enumImpressionContentType.TEXT_IMAGE_VIDEO : t ? e = reportEnum.enumImpressionContentType.TEXT_IMAGE : a ? e = reportEnum.enumImpressionContentType.TEXT_VIDEO : (console.error("has swiperData, but does not have image or video"), e = reportEnum.enumImpressionContentType.TEXT_ONLY), this.setData({ impressionContentType: e });
    } else console.error("No text in impression!");
  }, reportShareImpression: function reportShareImpression(e) {
    if (e) {
      var t = "";this.data.poi && this.data.poi.id && (t = this.data.poi.id);var a = 0;this.data.totalCommentCount && (a = this.data.totalCommentCount);var n = 0;this.data.likeCount && (n = this.data.likeCount);reporter.getReporter(16876).shareType(reportEnum.enumShareType.IMPRESSION).shareScene(reportEnum.enumPageName.IMPRESSION).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(a).impressionWowCount(n).impressionMarkCount(0).impressionType(this.data.impressionContentType).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(t).impressionIdString(this.data.impressionId).sessionId(reportSession.getId()).reportToServer();
    } else console.error("invalid parameter, shareResult");
  }, reportEnterSharedPage: function reportEnterSharedPage() {
    var e = "";this.data.poi && this.data.poi.id && (e = this.data.poi.id);reporter.getReporter(17014).pageId(reportEnum.enumPageName.IMPRESSION).launchScene(reportSession.getLaunchScene()).poiId(e).impressionId(this.data.impressionId).pageState(this.data.pageState).impressionType(this.data.impressionContentType).time(Math.floor(new Date().getTime() / 1e3)).sessionId(reportSession.getId()).reportToServer();
  }, bindtapToUserProfile: function bindtapToUserProfile(e) {
    var t = e.currentTarget.dataset.contact;0 == t.type ? wx.navigateTo({ url: "/pages/me/me" }) : wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t)) });
  }, reportViewedMediasIndex: function reportViewedMediasIndex() {
    var e = "";this.data.poi && this.data.poi.id && (e = this.data.poi.id);reporter.getReporter(18067).pageId(reportEnum.enumPageName.IMPRESSION).sessionId(reportSession.getId()).impressionId(this.data.impressionId).poiId(e).mediaIndexList(this.data.viewedMediasIndexListString).reportToServer();
  } }); 
 			}); 	require("pages/impression_feed/impression_feed.js");
 		__wxRoute = 'pages/comment_feed/comment_feed';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/comment_feed/comment_feed.js';	define("pages/comment_feed/comment_feed.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];for (var o in n) {
      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
  }return e;
};function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    MMPage = require("../../utils/mmFramework/mm_page");MMPage({ mmReportData: { pageName: reportEnum.enumPageName.POI_DETAIL_SECOND }, data: { poiId: "", commentType: 1, showBottomLoadingView: !0, context: "", impressionList: [], continueFlag: 0, currentPageId: reportEnum.enumPageName.POI_DETAIL_SECOND }, onLoad: function onLoad(e) {
    var t = this,
        n = decodeURIComponent(e.context),
        o = Number(e.commentType);t.data.poi = JSON.parse(decodeURIComponent(e.poi)), t.data.poiId = t.data.poi.base.id, app.addLaunchListener(function () {
      t.updateGlobalFunc(), t.setData({ context: n, commentType: o }), wx.setNavigationBarTitle({ title: 1 === o ? "朋友的印象" : "网友的印象" }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.POI_DETAIL_SECOND).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).reportToServer(), t.getCommentRequest(0);
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc();
  }, onReachBottom: function onReachBottom() {
    this.setData({ showBottomLoadingView: !0 }), 0 === this.data.continueFlag ? this.setData({ showBottomLoadingView: !1 }) : this.getCommentRequest(1);
  }, getCommentRequest: function getCommentRequest(e) {
    var t = this;new cgi.SimpleRequest("getpoicommentdetail", { id: t.data.poiId, context: t.data.context }).send(function (n) {
      if (t.setData({ context: n.context, continueFlag: n.continueFlag, showBottomLoadingView: !0 }), n.comment && n.comment.length) {
        var o = [];if (n.comment.forEach(function (e) {
          o.push({ comment: Object.assign(e, { createTime: "" }), unqiue: e.id, poi: t.data.poi, reportData: { pageId: reportEnum.enumPageName.POI_DETAIL_SECOND } });
        }), e) {
          for (var i = t.data.impressionList, a = o, m = {}, r = i.length; r < i.length + a.length; r++) {
            m["impressionList[" + r + "]"] = o[r - i.length];
          }t.setData(_extends({}, m));
        } else t.setData({ impressionList: o });declareBinding({ instance: t, schema: CommentSchema, arrayPath: "impressionList", mapping: { "comment.id": "id", "comment.isLike": "isLike", "comment.likeCount": "likeCount" } });
      }t.setData({ showBottomLoadingView: !1 });
    }, function (e) {
      t.setData({ showBottomLoadingView: !1 });
    });
  }, updateGlobalFunc: function updateGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        console.log("commentFeed, infoUpdateEventListeners, updateImpressionCommentCount");for (var n = t.impressionId, o = t.commentCount ? t.commentCount : 0, i = e.data.impressionList, a = 0; a < i.length; a++) {
          var m = i[a];if (m.unqiue == n) {
            if (m.comment) {
              m.comment.subCommentCount = o, console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount: " + o + ", index: " + a), e.setData(_defineProperty({}, "impressionList[" + a + "].comment.subCommentCount", o));break;
            }console.error("timeline, timelineItem.comment undefined!");break;
          }
        }
      } else console.error("commentFeed, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        console.log("commentFeed, infoUpdateEventListeners, deleteImpression, impressionId: " + n);for (var n = t.impressionId, o = e.data.impressionList, i = 0; i < o.length; i++) {
          if (o[i].unqiue == n) {
            e.setData(_defineProperty({}, "impressionList[" + i + "]", {}));break;
          }
        }
      } else console.error("commentFeed, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed);
  } }); 
 			}); 	require("pages/comment_feed/comment_feed.js");
 		__wxRoute = 'pages/complain_page/complain_page';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/complain_page/complain_page.js';	define("pages/complain_page/complain_page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var a = 0, t = Array(e.length); a < e.length; a++) {
      t[a] = e[a];
    }return t;
  }return Array.from(e);
}var chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT = 0,
    MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_POI = 1,
    MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_NORMAL = 2,
    MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_IMPRESSION_COMMENT = 3;Page({ data: { checkboxItems: [{ name: "与店不相关", value: 8 }, { name: "不实信息", value: 16 }, { name: "色情", value: 1 }, { name: "违反法律", value: 4 }, { name: "广告", value: 2 }, { name: "其他", value: 32 }], checkBoxChecked: !1, isFormComplete: !1, commentText: "", uploadedPics: [], picList: [], uploadFileSize: 0, showProgressPopOver: !1, progress: 0, reasonType: null, type: MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT, complainComment: {}, complainImpressionComment: {} }, onLoad: function onLoad(e) {
    if (console.log("complain_page options", e), e.impressionId && e.commentId) {
      this.data.type = MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_IMPRESSION_COMMENT, this.data.complainImpressionComment = { impressionId: e.impressionId, commentId: e.commentId };this.setData({ checkboxItems: [{ name: "内容对我造成骚扰", value: 128 }, { name: "色情", value: 1 }, { name: "广告", value: 2 }, { name: "政治谣言", value: 4 }, { name: "其他违规内容", value: 32 }] });
    } else e.impressionId && (this.data.type = MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT, this.data.complainComment = { commentId: e.impressionId });
  }, bindCheckboxChange: function bindCheckboxChange(e) {
    for (var a = this.data.checkboxItems, t = Number(e.detail.value), i = 0; i < a.length; ++i) {
      t === a[i].value ? a[i].checked = !0 : a[i].checked = !1;
    }0 !== t ? (this.data.reasonType = t, this.data.checkBoxChecked = !0) : (this.data.checkBoxChecked = !1, this.data.reasonType = null), this.setData({ checkboxItems: a }), this.data.checkBoxChecked && this.data.commentText.length >= 2 ? this.setData({ isFormComplete: !0 }) : this.setData({ isFormComplete: !1 });
  }, bindInputChange: function bindInputChange(e) {
    var a = e.detail.value.replace(/^\s+|\s+$/g, ""),
        t = a.length;this.setData({ commentText: a }), this.data.checkBoxChecked && t >= 2 ? this.setData({ isFormComplete: !0 }) : this.setData({ isFormComplete: !1 });
  }, bindChooseImages: function bindChooseImages(e) {
    var a = this,
        t = a.data.uploadedPics.length,
        i = 0;wx.chooseImage({ count: 4 - t, sourceType: ["album", "camera"], success: function success(e) {
        var t,
            o = a.data.uploadedPics;o.push.apply(o, _toConsumableArray(e.tempFilePaths));var n = e.tempFiles.map(function (e) {
          var a = {};return a.filePath = e.path, a.type = 0, a.size = e.size, i += e.size, a;
        });(t = a.data.picList).push.apply(t, _toConsumableArray(n)), a.setData({ uploadedPics: o, uploadFileSize: i });
      } });
  }, bindDeleteImages: function bindDeleteImages(e) {
    var a = e.currentTarget.dataset.index,
        t = this.data.uploadedPics,
        i = this.data.uploadFileSize;a < t.length && (t.splice(a, 1), i -= this.data.picList[a].size), this.data.picList.splice(a, 1), this.setData({ uploadedPics: t, uploadFileSize: i });
  }, bindPreviewImages: function bindPreviewImages(e) {
    var a = e.currentTarget.dataset.index,
        t = [];this.data.uploadedPics.map(function (e) {
      t.push(e);
    });var i = t[a];wx.previewImage({ current: i, urls: t });
  }, bindTapSubmit: function bindTapSubmit() {
    var e = this;if (wx.showLoading({ title: "上传中", mask: !0 }), 0 === e.data.picList.length) return console.log("_this.data.picList.length === 0, call afterUploadPic directly"), void e.afterUploadPic([]);var a = e.data.picList,
        t = e.data.uploadFileSize,
        i = a.length;cgi.uploadMedia4TempFiles(t, a, function () {
      console.log("uploadMedia4TempFiles, startCb");
    }, function (a) {
      if (console.log("upload complete, mediaList: ", a), a.length != i) return wx.hideLoading(), void wx.showModal({ content: "投诉信息提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(a) {
          a.confirm ? (console.log("complain page submit, uploadMedia failed, retry"), e.bindTapSubmit()) : a.cancel && console.log("complain page submit, uploadMedia failed, cancel");
        } });e.data.uploadFileSize = 0, e.afterUploadPic(a);
    }, function (e, a, t) {});
  }, afterUploadPic: function afterUploadPic(e) {
    for (var a = [], t = this, i = 0; i < e.length; i++) {
      a.push(e[i]);
    }var o = {};o = t.data.picList.length > 0 ? { content: t.data.commentText, pic: a } : { content: t.data.commentText };var n = JSON.stringify(o);console.log("commentDataString ", n), new cgi.SimpleRequest("reportwithproof", { reasonType: t.data.reasonType, type: t.data.type, proof: n, comment: t.data.complainComment, impressionComment: t.data.complainImpressionComment }).send(function (e) {
      wx.hideLoading(), wx.showToast({ title: "已提交", icon: "success", duration: 800 }), setTimeout(function () {
        wx.navigateBack();
      }, 1200);
    }, function (e) {
      console.error("reportwithproof resp failed ", e), wx.hideLoading(), wx.showModal({ content: "投诉提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(e) {
          e.confirm ? (console.log("complain page submit, reportwithproof cgi failed, retry"), t.bindTapSubmit()) : e.cancel && console.log("complain page submit, postpoicomment cgi failed, cancel");
        } });
    });
  } }); 
 			}); 	require("pages/complain_page/complain_page.js");
 		__wxRoute = 'pages/poi_feedback/poi_feedback';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/poi_feedback/poi_feedback.js';	define("pages/poi_feedback/poi_feedback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, a = Array(e.length); t < e.length; t++) {
      a[t] = e[t];
    }return a;
  }return Array.from(e);
}var chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    INPUT_LENGTH = 2;Page({ data: { checkboxItems: [{ name: "店铺未营业", value: 64 }, { name: "其他信息有误", value: 32 }], checkBoxChecked: !1, isFormComplete: !1, commentText: "", uploadedPics: [], picList: [], uploadFileSize: 0, reasonType: null, type: 1, complainPoi: {} }, onLoad: function onLoad(e) {
    console.log("poi_feedback options", e), e.poiId && (this.data.complainPoi = { poiId: decodeURIComponent(e.poiId).toString() });
  }, bindCheckboxChange: function bindCheckboxChange(e) {
    for (var t = this.data.checkboxItems, a = Number(e.detail.value), i = 0; i < t.length; ++i) {
      a === t[i].value ? t[i].checked = !0 : t[i].checked = !1;
    }0 !== a ? (this.data.reasonType = a, this.data.checkBoxChecked = !0) : (this.data.checkBoxChecked = !1, this.data.reasonType = null), this.setData({ checkboxItems: t }), this.data.checkBoxChecked && this.data.commentText.length >= INPUT_LENGTH ? this.setData({ isFormComplete: !0 }) : this.setData({ isFormComplete: !1 });
  }, bindInputChange: function bindInputChange(e) {
    var t = e.detail.value.replace(/^\s+|\s+$/g, ""),
        a = t.length;this.setData({ commentText: t }), this.data.checkBoxChecked && a >= INPUT_LENGTH ? this.setData({ isFormComplete: !0 }) : this.setData({ isFormComplete: !1 });
  }, bindChooseImages: function bindChooseImages(e) {
    var t = this,
        a = t.data.uploadedPics.length,
        i = 0;wx.chooseImage({ count: 9 - a, sourceType: ["album", "camera"], success: function success(e) {
        var a,
            o = t.data.uploadedPics;o.push.apply(o, _toConsumableArray(e.tempFilePaths));var c = e.tempFiles.map(function (e) {
          var t = {};return t.filePath = e.path, t.type = 0, t.size = e.size, i += e.size, t;
        });(a = t.data.picList).push.apply(a, _toConsumableArray(c)), t.setData({ uploadedPics: o, uploadFileSize: i });
      } });
  }, bindDeleteImages: function bindDeleteImages(e) {
    var t = e.currentTarget.dataset.index,
        a = this.data.uploadedPics,
        i = this.data.uploadFileSize;t < a.length && (a.splice(t, 1), i -= this.data.picList[t].size), this.data.picList.splice(t, 1), this.setData({ uploadedPics: a, uploadFileSize: i });
  }, bindPreviewImages: function bindPreviewImages(e) {
    var t = e.currentTarget.dataset.index,
        a = [];this.data.uploadedPics.map(function (e) {
      a.push(e);
    });var i = a[t];wx.previewImage({ current: i, urls: a });
  }, bindTapSubmit: function bindTapSubmit() {
    var e = this;if (wx.showLoading({ title: "上传中", mask: !0 }), 0 === e.data.picList.length) return console.log("_this.data.picList.length === 0, call afterUploadPic directly"), void e.afterUploadPic([]);var t = e.data.picList,
        a = e.data.uploadFileSize,
        i = t.length;cgi.uploadMedia4TempFiles(a, t, function () {
      console.log("uploadMedia4TempFiles, startCb");
    }, function (t) {
      if (console.log("upload complete, mediaList: ", t), t.length != i) return wx.hideLoading(), void wx.showModal({ content: "纠错信息提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(t) {
          t.confirm ? (console.log("poi feedback submit, uploadMedia failed, retry"), e.bindTapSubmit()) : t.cancel && console.log("poi feedback submit, uploadMedia failed, cancel");
        } });e.data.uploadFileSize = 0, e.afterUploadPic(t);
    }, function (e, t, a) {});
  }, afterUploadPic: function afterUploadPic(e) {
    for (var t = [], a = this, i = 0; i < e.length; i++) {
      t.push(e[i]);
    }var o = {};o = a.data.picList.length > 0 ? { content: a.data.commentText, pic: t } : { content: a.data.commentText };var c = JSON.stringify(o);console.log("commentDataString ", c), new cgi.SimpleRequest("reportwithproof", { reasonType: a.data.reasonType, type: a.data.type, proof: c, poi: a.data.complainPoi }).send(function (e) {
      wx.hideLoading(), wx.showToast({ title: "已提交", icon: "success", duration: 800 }), setTimeout(function () {
        wx.navigateBack();
      }, 1200);
    }, function (e) {
      console.error("reportwithproof resp failed ", e), wx.hideLoading(), wx.showModal({ content: "纠错信息提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(e) {
          e.confirm ? (console.log("poi feedback submit, reportwithproof cgi failed, retry"), a.bindTapSubmit()) : e.cancel && console.log("poi feedback submit, postpoicomment cgi failed, cancel");
        } });
    });
  } }); 
 			}); 	require("pages/poi_feedback/poi_feedback.js");
 		__wxRoute = 'pages/app_feedback/app_feedback';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/app_feedback/app_feedback.js';	define("pages/app_feedback/app_feedback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, a = Array(e.length); t < e.length; t++) {
      a[t] = e[t];
    }return a;
  }return Array.from(e);
}var chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    INPUT_LENGTH = 2;Page({ data: { isFormComplete: !1, commentText: "", uploadedPics: [], picList: [], uploadFileSize: 0, reasonType: null, type: 2, complainNormal: {} }, bindInputChange: function bindInputChange(e) {
    var t = e.detail.value.replace(/^\s+|\s+$/g, ""),
        a = t.length;this.setData({ commentText: t }), a >= INPUT_LENGTH ? this.setData({ isFormComplete: !0 }) : this.setData({ isFormComplete: !1 });
  }, bindChooseImages: function bindChooseImages(e) {
    var t = this,
        a = t.data.uploadedPics.length,
        i = 0;wx.chooseImage({ count: 9 - a, sourceType: ["album", "camera"], success: function success(e) {
        var a,
            o = t.data.uploadedPics;o.push.apply(o, _toConsumableArray(e.tempFilePaths));var n = e.tempFiles.map(function (e) {
          var t = {};return t.filePath = e.path, t.type = 0, t.size = e.size, i += e.size, t;
        });(a = t.data.picList).push.apply(a, _toConsumableArray(n)), t.setData({ uploadedPics: o, uploadFileSize: i });
      } });
  }, bindDeleteImages: function bindDeleteImages(e) {
    var t = e.currentTarget.dataset.index,
        a = this.data.uploadedPics,
        i = this.data.uploadFileSize;t < a.length && (a.splice(t, 1), i -= this.data.picList[t].size), this.data.picList.splice(t, 1), this.setData({ uploadedPics: a, uploadFileSize: i });
  }, bindPreviewImages: function bindPreviewImages(e) {
    var t = e.currentTarget.dataset.index,
        a = [];this.data.uploadedPics.map(function (e) {
      a.push(e);
    });var i = a[t];wx.previewImage({ current: i, urls: a });
  }, bindTapSubmit: function bindTapSubmit() {
    var e = this;if (wx.showLoading({ title: "上传中", mask: !0 }), 0 === e.data.picList.length) return console.log("_this.data.picList.length === 0, call afterUploadPic directly"), void e.afterUploadPic([]);var t = e.data.picList,
        a = e.data.uploadFileSize,
        i = t.length;cgi.uploadMedia4TempFiles(a, t, function () {
      console.log("uploadMedia4TempFiles, startCb");
    }, function (t) {
      if (console.log("upload complete, mediaList: ", t), t.length != i) return wx.hideLoading(), void wx.showModal({ content: "反馈信息提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(t) {
          t.confirm ? (console.log("app feedback submit, uploadMedia failed, retry"), e.bindTapSubmit()) : t.cancel && console.log("app feedback submit, uploadMedia failed, cancel");
        } });e.data.uploadFileSize = 0, e.afterUploadPic(t);
    }, function (e, t, a) {});
  }, afterUploadPic: function afterUploadPic(e) {
    for (var t = [], a = this, i = 0; i < e.length; i++) {
      t.push(e[i]);
    }var o = {},
        n = "";a.options.word && (n = decodeURIComponent(a.options.word)), o = a.data.picList.length > 0 ? { content: a.data.commentText + n, pic: t } : { content: a.data.commentText + n };var s = JSON.stringify(o);console.log("commentDataString ", s), new cgi.SimpleRequest("reportwithproof", { type: a.data.type, proof: s, normal: a.data.complainNormal }).send(function (e) {
      wx.hideLoading(), wx.showToast({ title: "已提交", icon: "success", duration: 800 }), setTimeout(function () {
        wx.navigateBack();
      }, 1200);
    }, function (e) {
      console.error("reportwithproof resp failed ", e), wx.hideLoading(), wx.showModal({ content: "反馈信息提交失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(e) {
          e.confirm ? (console.log("app feedback submit, reportwithproof cgi failed, retry"), a.bindTapSubmit()) : e.cancel && console.log("app feedback submit, postpoicomment cgi failed, cancel");
        } });
    });
  } }); 
 			}); 	require("pages/app_feedback/app_feedback.js");
 		__wxRoute = 'pages/swipe_pic/swipe_pic';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/swipe_pic/swipe_pic.js';	define("pages/swipe_pic/swipe_pic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util.js"),
    cgi = require("../../utils/cgi.js"),
    app = getApp();Page({ data: { isIpx: util.isIpx(), currentPicIndex: 0, current: 0, windowHeight: util.getSysInfo().windowHeight, renderPicArr: [], showVideo: !1, currentVideoPath: "", currentVideoThumbPath: "", showDeleteButton: !1, videoContexts: {} }, onLoad: function onLoad(e) {
    console.log("swipe_pic options", e), console.log("app.globalData.picList: ", app.globalData.picList);var t = !1;e.showDelete && (t = e.showDelete), console.log("showDelete: " + t), this.data.currentPicIndex = app.globalData.currentPicIndex, this.setData({ renderPicArr: app.globalData.picList, current: app.globalData.currentPicIndex, showDeleteButton: t });
  }, onReady: function onReady() {
    this.bindSwiperChange({ detail: { current: this.data.currentPicIndex } });
  }, onHide: function onHide() {}, onUnload: function onUnload() {
    console.log("swipe_pic onUnload"), app.globalData.deletePicFunc = function () {};
  }, bindSwiperChange: function bindSwiperChange(e) {
    var t = this;console.log("onCurrentChange: ", e);var a = e.detail.current;t.data.currentPicIndex = a, 1 == t.data.renderPicArr[a].type ? (t.data.videoContexts[a] || (t.data.videoContexts[a] = wx.createVideoContext("swiperItem" + a)), Object.keys(t.data.videoContexts).forEach(function (e) {
      var n = t.data.videoContexts[e];e == a ? n.play() : n.pause();
    })) : Object.keys(t.data.videoContexts).forEach(function (e) {
      t.data.videoContexts[e].pause();
    });
  }, onTapDelete: function onTapDelete(e) {
    console.log("onTapDelete: ", e);var t = parseInt(this.data.currentPicIndex),
        a = this.data.renderPicArr[t].originIndex;app.globalData.deletePicFunc(a);var n = this.data.renderPicArr;n.splice(t, 1), 0 === n.length && wx.navigateBack(), t >= n.length && (t = n.length - 1), this.data.currentPicIndex = t, this.setData({ renderPicArr: n, current: t });
  } }); 
 			}); 	require("pages/swipe_pic/swipe_pic.js");
 		__wxRoute = 'pages/poi_comment_publish/poi_comment_publish';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/poi_comment_publish/poi_comment_publish.js';	define("pages/poi_comment_publish/poi_comment_publish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    ugcStorage = require("../../utils/ugcStorage"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    reportSession = require("../../utils/report_session"),
    appLaunchData = require("../../utils/appLaunchData"),
    scrollWidth = 410;Page({ data: { isIpx: util.isIpx(), poiId: "", commentText: "", scoreList: [0, 0, 0], uploadFileSize: 0, uploadedPics: [], requestId: "", poiName: "", arrayOfStarsList: [[], [], []], arrayOfUnstarsList: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], picList: [], progress: 0, currentCommentCursor: -1, textAreaShouldFocus: !1, canSend: !1, rpx326toPx: -util.rpx2px(244500 / 1242), rpx90toPx: -util.rpx2px(67500 / 1242), topMarginAdjust: "0", textareaPlaceholderText: "记录你的美食生活…", scrollIntoViewId: "", fromActivity: !1, menuPositionTop: 0, poiItemToPostImpression: {}, poiDesc: "", poiTopImage: "", fromPoiDetail: !1, poiLocation: { latitude: 0, longitude: 0 }, topicItemList: [], selectedTopicItem: {}, canNavigateToTagListView: !0 }, onLoad: function onLoad(e) {
    var t = this,
        o = 30;if (wx.canIUse("getMenuButtonBoundingClientRect")) {
      var i = wx.getMenuButtonBoundingClientRect();"android" === util.getSysInfo().platform && (i.top = i.top / 2, i.top = i.top + 8), o = i.top + 2;
    }this.setData({ menuPositionTop: o }), app.addLaunchListener(function () {
      t._onLoad(e), reporter.getReporter(16501).pageId(reportEnum.enumPageName.COMMENT_PUBLISH).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, _onLoad: function _onLoad(e) {
    0 == ugcStorage.hasPostComment() && (ugcStorage.updatePostCommentFlag(), wx.showModal({ content: "你的印象可以被所有人看到。", showCancel: !1, confirmText: "知道了" }));var t = !1;e.fromPoiDetail ? t = !0 : app.checkAndUpdateUserCurrentLocation();var o = !1;e.fromActivity && (o = !0);var i = {},
        s = !0;e.topicId && e.topicName && (i.id = +e.topicId, i.name = decodeURIComponent(e.topicName), s = !1, reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.DEFAULT)), reportPostImpression.enterPostView(), reportPostImpression.setHasInputtedText(2), reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.NO_CHOOSE), reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.NO_CHOOSE), this.checkAndUpdatePoi(), console.log("poi_comment_publish onLoad"), this.setData({ fromPoiDetail: t, fromActivity: o, selectedTopicItem: i, canNavigateToTagListView: s }), this.checkSelectedMediaItemsBeforePageLoad(), this.getTopicItemList(), console.log("poi_comment_publish onLoad: rpx320: " + this.data.rpx320);
  }, onReady: function onReady() {}, onShow: function onShow() {
    var e = this;app.addLaunchListener(function () {
      e.checkAndUpdatePoi(), e.checkAndUpdateTopicItem();
    });
  }, onHide: function onHide() {}, onUnload: function onUnload() {
    reportPostImpression.setPostResult(reportPostImpression.enumPostResult.NOT_POST), reportPostImpression.triggerReport(reportEnum.enumPageName.COMMENT_PUBLISH);
  }, onPullDownRefresh: function onPullDownRefresh() {}, onReachBottom: function onReachBottom() {}, textInput: function textInput(e) {
    this.data.commentText = e.detail.value, this.data.currentCommentCursor = e.detail.cursor, reportPostImpression.setHasInputtedText(1), this.checkAndSetCanSend();
  }, tapImageItem: function tapImageItem(e) {
    for (var t = this.data.picList, o = e.currentTarget.dataset.index, i = [], s = 0; s < t.length; s++) {
      var a = t[s];a.originIndex = s, i[s] = a;
    }app.globalData.picList = i, app.globalData.currentPicIndex = o, app.globalData.deletePicFunc = this.deleteMediaFromOtherView, this.setData({ picList: t }), wx.navigateTo({ url: "/pages/swipe_pic/swipe_pic" });
  }, chooseMedia: function chooseMedia(e) {
    if (console.log("chooseMedia"), !(util.canUseChooseMultiMediaAPIWithoutPoiInfo() || this.data.poiId && this.data.poiId.length)) return console.log("chooseMedia, no poiInfo, return!"), wx.showToast({ title: "请先选择餐厅", icon: "none", duration: 2e3 }), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.NO_POI_CANNOT_CHOOSE);var t = this,
        o = 9 - this.data.picList.length;if (o <= 0) console.log("canChooseImageCount <= 0, current picList.length: ", t.data.picList.length);else {
      console.log("poiLocation: " + JSON.stringify(t.data.poiLocation));var i = kitchenStorage.getPoiLocationRadius();chooseMediaUtil.chooseMediaWithTwoOptions(o, t.data.poiLocation, t.data.poiName, i, function (e) {
        if (!e || e.resultType != chooseMediaUtil.enumChooseResultType.SUCCESS) return console.error("chooseMediaWithTwoOptions, success, no res or invalid res.resultType! return"), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);if (e.textDirectly) return console.error("chooseMediaWithTwoOptions, success, but res.textDirectly is true! return"), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);var o = e.totalFileSize || 0,
            i = e.mediaItemList || [];if (!i.length) return console.log("chooseMediaWithTwoOptions, success, no mediaItemList! return"), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_CANCELLED);0 == o && console.error("chooseMediaWithTwoOptions, success, has mediaItemList but totalFileSize is 0!"), t.data.uploadFileSize += o;var s = t.data.picList.concat(i);t.setData({ picList: s });var a = s.reduce(function (e, t) {
          return e + t.displayWidth;
        }, 0);s.length <= 9 && s.length > 0 && a >= scrollWidth && t.setData({ scrollIntoViewId: "chooseImageViewId" }), reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_SUCCESS), t.checkAndSetCanSend(), console.log("chooseMedia totalFileSize= ", o, "uploadFileSize= ", t.data.uploadFileSize);
      }, function (e) {
        if (!e) return console.error("chooseMedia failed, but no err object"), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);e.resultType == chooseMediaUtil.enumChooseResultType.CANCEL || e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_CANCEL ? (console.log("chooseMedia cancelled: " + JSON.stringify(e)), reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_CANCELLED)) : (console.error("chooseMedia failed, err: " + JSON.stringify(e)), reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED));
      });
    }
  }, tapRecommended: function tapRecommended(e) {
    console.log("tapRecommended");
  }, postComment: function postComment(e) {
    if (console.log("postComment, commentText: ", this.data.commentText, ", scoreList", this.data.scoreList, ", canSend: ", this.data.canSend), 0 != this.data.canSend) {
      reportPostImpression.clickPost(), 0 === this.data.requestId.length && (this.data.requestId = this.generateRequestId());var t = this;app.addLaunchListener(function () {
        if (wx.showLoading({ title: "上传中", mask: !0 }), t.data.picList.length === t.data.uploadedPics.length) return console.log("_this.data.picList.length === _this.data.uploadedPics.length, call afterUploadPic directly"), void s([]);var e = t.data.picList.slice(t.data.uploadedPics.length),
            o = e.length;console.log("postComment, uploadPic4TempFilePaths");var i = t.data.uploadFileSize;function s(e) {
          for (var o = t.data.uploadedPics.length, i = 0; i < e.length; i++) {
            var s = e[i];t.data.uploadedPics[o + i] = s;
          }var a = {};t.data.commentText = t.data.commentText.replace(/^\s+|\s+$/g, ""), a = t.data.uploadedPics.length > 0 ? { content: t.data.commentText, contentType: 1, pic: t.data.uploadedPics } : { content: t.data.commentText, contentType: 0 };var n = JSON.stringify(a);console.log("commentDataString ", n), console.log("postpoicomment request");var r = { id: t.data.poiId, info: n, requestId: t.data.requestId };t.data.selectedTopicItem && t.data.selectedTopicItem.id && (r.topicId = [t.data.selectedTopicItem.id]), new cgi.SimpleRequest("postpoicomment", r).send(function (e) {
            console.log("postpoicomment resp success ", e), wx.hideLoading(), util.toast("发表成功"), wx.vibrateShort(), e && e.commentId ? reportPostImpression.setImpressionId(e.commentId) : console.error("postpoicomment resp cannot find data.commentId"), reportPostImpression.setPostResult(reportPostImpression.enumPostResult.SUCCESS);var o = t.data.fromPoiDetail;setTimeout(function () {
              app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.addImpression, { shouldUpdateTimelineManually: o });
            }, 1e3), reportPostImpression.triggerReport(reportEnum.enumPageName.COMMENT_PUBLISH), setTimeout(function () {
              t.data.fromPoiDetail ? wx.navigateBack() : wx.reLaunch({ url: "/pages/timeline/timeline?reLaunchFrom=reLaunchFromComment" });
            }, 2e3);
          }, function (e) {
            console.error("postpoicomment resp failed ", e), reportPostImpression.setPostResult(reportPostImpression.enumPostResult.FAILED), wx.hideLoading(), wx.showModal({ content: "印象发表失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(e) {
                e.confirm ? (console.log("postComment showModel, postpoicomment cgi failed, retry"), t.postComment()) : e.cancel && console.log("postComment showModel, postpoicomment cgi failed, cancel");
              } });
          });
        }cgi.uploadMedia4TempFiles(i, e, function () {
          console.log("uploadMedia4TempFiles, startCb");
        }, function (e) {
          if (console.log("upload complete, mediaList: ", e), e.length != o) return wx.hideLoading(), reportPostImpression.setPostResult(reportPostImpression.enumPostResult.FAILED), void wx.showModal({ content: "印象发表失败，是否重试？", cancelText: "取消", confirmText: "重试", success: function success(e) {
              e.confirm ? (console.log("postComment showModel, uploadMedia failed, retry"), t.postComment()) : e.cancel && console.log("postComment showModel, uploadMedia failed, cancel");
            } });t.data.uploadFileSize = 0, s(e);
        }, function (e, t, o) {});
      });
    }
  }, generateRequestId: function generateRequestId() {
    return util.guid() + "--" + Date.now();
  }, deleteMediaFromOtherView: function deleteMediaFromOtherView(e) {
    if (e < 0) console.error("wrong originIndex: ", e);else {
      for (var t = [], o = [], i = 0; i < this.data.picList.length; i++) {
        this.data.picList[i].originIndex != e ? (o.push(this.data.picList[i]), i < this.data.uploadedPics.length && t.push(this.data.uploadedPics[i])) : console.log("find delete Item");
      }this.setData({ picList: o }), this.data.uploadedPics = t, this.checkAndSetCanSend();
    }
  }, textareaFocus: function textareaFocus(e) {
    console.log("bindfocus: " + JSON.stringify(e));
  }, textareaBlur: function textareaBlur(e) {
    console.log("bindblur: " + JSON.stringify(e));
  }, tapDeleteMediaItem: function tapDeleteMediaItem(e) {
    console.log("tapDeleteMediaItem: " + JSON.stringify(e));var t = e.currentTarget.dataset.index;if (t < 0 || t >= this.data.picList.length) console.error("wrong index: ", t);else {
      var o = this.data.uploadedPics,
          i = this.data.picList;t < o.length && o.splice(t, 1), i.splice(t, 1), i.reduce(function (e, t) {
        return e + t.displayWidth;
      }, 0) < scrollWidth && this.setData({ scrollIntoViewId: "" }), this.setData({ picList: i }), this.data.uploadedPics = o, this.checkAndSetCanSend();
    }
  }, onTapBackButton: function onTapBackButton() {
    wx.navigateBack({});
  }, checkAndUpdatePoi: function checkAndUpdatePoi() {
    var e = reportPostImpression.getAndClearPoiForPostImpression();if (e.hasNew && e.poi) {
      var t = e.poi;if (t.id && t.name) {
        console.log("checkAndUpdatePoi, update poiInfo: " + JSON.stringify(t)), reportPostImpression.setPoiId(t.id), reportPostImpression.setPoiName(t.name);var o = "";t.categoryName && (o = t.categoryName), t.price && (o = o && o.length ? o + " · 人均￥" + t.price : "人均￥" + t.price), t.area && (o = o && o.length ? o + " · " + t.area : t.area);var i = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg";t.topImage && (i = t.topImage);var s = { latitude: 0, longitude: 0 };t.location && t.location.latitude && t.location.longitude && (s.latitude = t.location.latitude, s.longitude = t.location.longitude), reportPostImpression.setLocation(s.longitude, s.latitude), this.setData({ poiId: t.id, poiName: t.name, poiItemToPostImpression: t, poiDesc: o, poiTopImage: i, poiLocation: s }), this.checkAndSetCanSend();
      } else console.error("checkAndUpdatePoi, no poiId or no poiName, return!");
    } else console.log("checkAndUpdatePoi, no new poiInfo, return!");
  }, onTapChoosePoi: function onTapChoosePoi() {
    console.log("choose poi"), wx.navigateTo({ url: "/pages/search_poi_list/search_poi_list" });
  }, onTapClearPoi: function onTapClearPoi() {
    console.log("clear poi"), this.setData({ poiId: "", poiName: "", poiItemToPostImpression: {}, poiDesc: "", poiTopImage: "", canSend: !1, poiLocation: { latitude: 0, longitude: 0 } });
  }, checkAndSetCanSend: function checkAndSetCanSend() {
    var e = !1;this.data.poiId && this.data.poiId.length && (this.data.commentText.trim().length > 0 || this.data.picList.length > 0) && (e = !0), this.setData({ canSend: e });
  }, onTapSelectTopic: function onTapSelectTopic() {
    console.log("select tag"), this.data.canNavigateToTagListView ? wx.navigateTo({ url: "/pages/select_tag_list/select_tag_list" }) : console.log("select tag, canNavigateToTagListView is false, return");
  }, onTapTopicItem: function onTapTopicItem(e) {
    console.log("onTapTopicItem: " + JSON.stringify(e));var t = e.currentTarget.dataset.index;if (void 0 !== t) {
      var o = this.data.topicItemList[t];o ? (reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.CHOOSE_RECOMMENDED_TOPIC), this.setData({ selectedTopicItem: o })) : console.error("onTapTopicItem, invalid topicItemIndex");
    } else console.error("onTapTopicItem, no topicItemIndex");
  }, checkSelectedMediaItemsBeforePageLoad: function checkSelectedMediaItemsBeforePageLoad() {
    var e = reportPostImpression.getAndClearMediaItemsForPostImpression();if (e) {
      if (e.hasNew) {
        if (e.mediaItems) {
          if (e.mediaItems.textDirectly) return console.log("checkSelectedMediaItemsBeforePageLoad, textDirectly"), void this.setData({ textAreaShouldFocus: !0 });var t = e.mediaItems.totalFileSize || 0,
              o = e.mediaItems.mediaItemList || [];if (o.length) {
            0 == t && console.error("checkSelectedMediaItemsBeforePageLoad, has mediaItemList but totalFileSize is 0!"), this.data.uploadFileSize += t;var i = this.data.picList.concat(o);this.setData({ picList: i }), this.checkAndSetCanSend(), console.log("checkSelectedMediaItemsBeforePageLoad totalFileSize= ", t, "uploadFileSize= ", this.data.uploadFileSize);
          } else console.log("checkSelectedMediaItemsBeforePageLoad, no mediaItemList! return");
        } else console.error("checkSelectedMediaItemsBeforePageLoad, mediaItemObject.hasNew is true but mediaItemObject.mediaItems is undefined, return");
      } else console.log("checkSelectedMediaItemsBeforePageLoad, no new object, return");
    } else console.error("checkSelectedMediaItemsBeforePageLoad, mediaItemObject is undefined, return");
  }, getTopicItemList: function getTopicItemList() {
    var e = reportPostImpression.getTopicItemList();if (e && e.length) {
      var t = e.slice(0, 3);this.setData({ topicItemList: t });
    } else console.error("getTopicItemList, no data");
  }, checkAndUpdateTopicItem: function checkAndUpdateTopicItem() {
    console.log("checkAndUpdateTopicItem");var e = reportPostImpression.getAndClearTopicItemForPostImpression();if (e) {
      if (e.hasNew) {
        var t = e.topic;t || (console.log("checkAndUpdateTopicItem, hasNew is true, but topicItem is undefined"), t = {}), this.setData({ selectedTopicItem: t });
      } else console.log("checkAndUpdateTopicItem, hasNew is false");
    } else console.error("checkAndUpdateTopicItem, no data from getAndClearTopicItemForPostImpression, return!");
  } }); 
 			}); 	require("pages/poi_comment_publish/poi_comment_publish.js");
 		__wxRoute = 'pages/kitchen/kitchen';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/kitchen/kitchen.js';	define("pages/kitchen/kitchen.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var kitchenStorage = require("../../utils/kitchenStorage"),
    util = require("../../utils/util");Page({ data: { clientVersion: "0x" + kitchenStorage.getClientVersion().toString(16), sourceArray: ["腾讯地图", "S.P.A."], isIpx: util.isIpx(), hasLabSwitch: !1, labSwitchValue: !0 }, onLoad: function onLoad(t) {
    if (console.log("kitchenStorage.getSource() = ", kitchenStorage.getSource()), util.canUseGetAndSetLabInfoAPI()) {
      var e = this;wx.getLabInfo({ labId: "labs_nearbylife", success: function success(t) {
          if (console.log("labInfo: " + JSON.stringify(t)), t.exist) {
            var i = !1;t.enabled && (i = !0), e.setData({ hasLabSwitch: !0, labSwitchValue: i });
          }
        } });
    }this.setData({ sourceArrayIndex: kitchenStorage.getSource(), currentTime: kitchenStorage.getCurrentTime(), priceLevel: null === kitchenStorage.getPriceLevel() ? "" : "" + kitchenStorage.getPriceLevel(), poiLocationRadius: kitchenStorage.getPoiLocationRadius(), shouldShowHeadImage: kitchenStorage.getShouldShowHeadImage(), shouldUseGreyServer: kitchenStorage.getShouldUseGreyServer(), shouldLocateDefault: kitchenStorage.getShouldLocateDefault(), shouldShowStoreAppEntry: kitchenStorage.getShouldShowStoreAppEntry(), defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude(), defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude(), mediaMaxDuration: kitchenStorage.getMediaMaxDuration(), shouldUsePoiTestInfo: kitchenStorage.getShouldUsePoiTestInfo(), testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude(), testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude(), testPoiName: kitchenStorage.getTestPoiName() });
  }, onReady: function onReady() {}, onShow: function onShow() {}, onHide: function onHide() {}, onUnload: function onUnload() {}, bindinputClientVersion: function bindinputClientVersion(t) {
    try {
      kitchenStorage.setClientVersion(parseInt(t.detail.value));
    } catch (t) {
      console.error("wrong client version", t.detail.value);
    }
  }, bindPickerChange: function bindPickerChange(t) {
    this.setData({ sourceArrayIndex: t.detail.value }), 0 == t.detail.value ? kitchenStorage.setSource(0) : kitchenStorage.setSource(1);
  }, bindinputCurrentTime: function bindinputCurrentTime(t) {
    var e = t.detail.value;kitchenStorage.setCurrentTime(e.trim());
  }, bindinputPriceLevel: function bindinputPriceLevel(t) {
    var e = t.detail.value;"" === e.trim() ? kitchenStorage.setPriceLevel(null) : kitchenStorage.setPriceLevel(+e.trim());
  }, bindconfirmPoiLocationRadius: function bindconfirmPoiLocationRadius(t) {
    console.log("bindconfirmPoiLocationRadius, e: " + JSON.stringify(t));var e = t.detail.value;this.changePoiLocationRadius(e);
  }, bindblurPoiLocationRadius: function bindblurPoiLocationRadius(t) {
    console.log("bindblurPoiLocationRadius, e: " + JSON.stringify(t));var e = t.detail.value;this.changePoiLocationRadius(e);
  }, changePoiLocationRadius: function changePoiLocationRadius(t) {
    if ("" == (t = t.trim()) || !util.isNumeric(t)) return util.toast("请输入正整数"), void this.setData({ poiLocationRadius: kitchenStorage.getPoiLocationRadius() });var e = parseInt(t);if (e <= 0) return util.toast("请输入正整数"), void this.setData({ poiLocationRadius: kitchenStorage.getPoiLocationRadius() });kitchenStorage.setPoiLocationRadius(e);
  }, bindchangeShouldShowHeadImage: function bindchangeShouldShowHeadImage(t) {
    t.detail.value ? kitchenStorage.setShouldShowHeadImage(1) : kitchenStorage.setShouldShowHeadImage(0);
  }, bindChangeShouldShowStoreAppEntry: function bindChangeShouldShowStoreAppEntry(t) {
    t.detail.value ? kitchenStorage.setShouldShowStoreAppEntry(1) : kitchenStorage.setShouldShowStoreAppEntry(0);
  }, bindchangeShouldUseGreyServer: function bindchangeShouldUseGreyServer(t) {
    t.detail.value ? kitchenStorage.setShouldUseGreyServer(1) : kitchenStorage.setShouldUseGreyServer(0);
  }, bindchangeShouldLocateDefault: function bindchangeShouldLocateDefault(t) {
    var e = !1;t.detail.value ? (kitchenStorage.setShouldShowLocateDefault(1), e = !0) : kitchenStorage.setShouldShowLocateDefault(0), this.setData({ shouldLocateDefault: e });
  }, bindcustomnavigationback: function bindcustomnavigationback() {
    wx.reLaunch({ url: "/pages/friends_timeline/friends_timeline" });
  }, bindtapDebug: function bindtapDebug() {
    wx.setEnableDebug({ enableDebug: !0 });
  }, bindtapUnDebug: function bindtapUnDebug() {
    wx.setEnableDebug({ enableDebug: !1 });
  }, bindtapOpenSetting: function bindtapOpenSetting() {
    wx.openSetting({ success: function success(t) {
        console.log(t.authSetting);
      } });
  }, bindchangeLabSwitchValue: function bindchangeLabSwitchValue(t) {
    console.log("bindchangeLabSwitchValue: " + JSON.stringify(t));var e = t.detail.value;util.canUseGetAndSetLabInfoAPI() && wx.setLabInfo({ labId: "labs_nearbylife", enabled: e, success: function success(t) {
        console.log("setLabInfo, success: " + JSON.stringify(t));
      }, fail: function fail(t) {
        console.error("setLabInfo, failed: " + JSON.stringify(t));
      } });
  }, defaultLocationLatitudeFinishInput: function defaultLocationLatitudeFinishInput(t) {
    var e;return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -90 || e > 90 ? (util.toast("请输入有效的纬度值"), void this.setData({ defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude() })) : (kitchenStorage.setDefaultLocationLatitude(e), void this.setData({ defaultLocationLatitude: e })) : (util.toast("请输入数字"), void this.setData({ defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude() }));
  }, defaultLocationLongitudeFinishInput: function defaultLocationLongitudeFinishInput(t) {
    var e;return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -180 || e > 180 ? (util.toast("请输入有效的经度值"), void this.setData({ defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude() })) : (kitchenStorage.setDefaultLocationLongitude(e), void this.setData({ defaultLocationLongitude: e })) : (util.toast("请输入数字"), void this.setData({ defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude() }));
  }, bindconfirmMediaMaxDuration: function bindconfirmMediaMaxDuration(t) {
    console.log("bindconfirmMediaMaxDuration, e: " + JSON.stringify(t));var e = t.detail.value;this.changeMediaMaxDuration(e);
  }, bindblurMediaMaxDuration: function bindblurMediaMaxDuration(t) {
    console.log("bindblurMediaMaxDuration, e: " + JSON.stringify(t));var e = t.detail.value;this.changeMediaMaxDuration(e);
  }, changeMediaMaxDuration: function changeMediaMaxDuration(t) {
    if ("" == (t = t.trim()) || !util.isNumeric(t)) return wx.showToast({ title: "请输入正整数", icon: "none", duration: 2e3 }), void this.setData({ mediaMaxDuration: kitchenStorage.getMediaMaxDuration() });var e = parseInt(t);if (e <= 0 || e > 30) return wx.showToast({ title: "请输入 30 以下的正整数", icon: "none", duration: 2e3 }), void this.setData({ mediaMaxDuration: kitchenStorage.getMediaMaxDuration() });kitchenStorage.setMediaMaxDuration(e);
  }, testPoiLocationLatitudeFinishInput: function testPoiLocationLatitudeFinishInput(t) {
    var e;return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -90 || e > 90 ? (util.toast("请输入有效的纬度值"), void this.setData({ testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude() })) : (kitchenStorage.setTestPoiLocationLatitude(e), void this.setData({ testPoiLocationLatitude: e })) : (util.toast("请输入数字"), void this.setData({ testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude() }));
  }, testPoiLocationLongitudeFinishInput: function testPoiLocationLongitudeFinishInput(t) {
    var e;return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -180 || e > 180 ? (util.toast("请输入有效的经度值"), void this.setData({ testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude() })) : (kitchenStorage.setTestPoiLocationLongitude(e), void this.setData({ testPoiLocationLongitude: e })) : (util.toast("请输入数字"), void this.setData({ testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude() }));
  }, testPoiNameFinishInput: function testPoiNameFinishInput(t) {
    var e = t.detail.value.trim();kitchenStorage.setTestPoiName(e), this.setData({ testPoiName: e });
  }, bindchangeShouldUsePoiTestInfo: function bindchangeShouldUsePoiTestInfo(t) {
    var e = !1;t.detail.value ? (kitchenStorage.setShouldUsePoiTestInfo(1), e = !0) : kitchenStorage.setShouldUsePoiTestInfo(0), this.setData({ shouldUsePoiTestInfo: e });
  } }); 
 			}); 	require("pages/kitchen/kitchen.js");
 		__wxRoute = 'pages/feedback/feedback';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/feedback/feedback.js';	define("pages/feedback/feedback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var util = require("../../utils/util"),
    cgi = require("../../utils/cgi"),
    md5 = require("../../utils/md5"),
    appLaunchData = require("../../utils/appLaunchData");Page({ data: {}, onLoad: function onLoad(e) {
    for (var o = this, i = wx.getFileSystemManager(), n = function n(e) {
      var n = "devtools" === util.getSysInfo().platform ? "http://usr/miniprogramLog/log" + e : "wxfile://usr/miniprogramLog/log" + e;i.getFileInfo({ filePath: n, success: function success(l) {
          console.log("logFile[" + e + "] success info res", l);var t = l.size;i.readFile({ filePath: n, encoding: "utf8", success: function success(i) {
              console.log("readFile success"), o.uploadLogFile(t, "log." + e, i.data);
            }, fail: function fail(e) {
              console.log("readFile fail", e);
            } });
        }, fail: function fail(o) {
          console.log("logFile[" + e + "] fail info res", o);
        }, complete: function complete(o) {
          console.log("logFile[" + e + "] complete info res", o);
        } });
    }, l = 5; l >= 5; l--) {
      n(l);
    }
  }, onReady: function onReady() {}, onShow: function onShow() {}, onHide: function onHide() {}, uploadLogFile: function uploadLogFile(e, o, i) {
    var n = appLaunchData.getOpenId(),
        l = md5("appengine#$()1" + e);wx.request({ url: "https://aesupport.weixin.qq.com/cgi-bin/mmsupport-bin/aestackreport?productid=2101&reporttype=10001&reportvalue=&uin=" + n + "&version=1&devicetype=1&filelength=" + e + "&rtxname=gragashuang&sum=" + l + "&etype=1", data: i, success: function success(e) {
        console.log("upload log file success", e);
      }, fail: function fail(e) {
        console.log("upload log file success", e);
      } });
  }, onUnload: function onUnload() {} }); 
 			}); 	require("pages/feedback/feedback.js");
 		__wxRoute = 'pages/search_poi_list/search_poi_list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search_poi_list/search_poi_list.js';	define("pages/search_poi_list/search_poi_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t];for (var o in a) {
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
  }return e;
},
    app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    kitchenStorage = require("../../utils/kitchenStorage"),
    mixinCss = require("../../utils/mixinCss"),
    chooseMediaUtil = require("../../utils/chooseMediaUtil"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    appLaunchData = require("../../utils/appLaunchData"),
    cssHdHeight = 244;Page({ data: { isIpx: util.isIpx(), query: "", isSearching: !0, list4Search: [], shouldShowBottomLoading4Search: !0, continueFlag4Search: 0, context4Search: "", searchingCount: 0, currentPoiItemIndex: 0, currentPoiName: "", showChooseMediaPanel: !1, lastSelectedPoiItem: {}, tagName: "", title: "选择餐厅", hasSetChoosePoiResult: !1, scrollViewHeight: util.getSafeScreenHeight() - util.rpx2px(mixinCss.navTitleHeight + cssHdHeight) }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      var a = "";e.tagName && (a = decodeURIComponent(e.tagName)), t.setData({ tagName: a, title: "选择餐厅" }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.SEARCH_POI_LIST).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), t.sendSearchRequest("");
    });
  }, bindSearchInput: function bindSearchInput(e) {
    var t = e.detail.value;this.setData({ query: t, list4Search: [], shouldShowBottomLoading4Search: !0 }), console.log("searching ", t), this.sendSearchRequest(t);
  }, bindInputViewBlur: function bindInputViewBlur(e) {}, bindInputViewFocus: function bindInputViewFocus(e) {
    console.log("bindInputViewFocus"), this.setData({ showChooseMediaPanel: !1 });
  }, sendSearchRequest: util.debounce(function (e) {
    var t = this;t.setData({ shouldShowBottomLoading4Search: !0, continueFlag4Search: 0, context4Search: "" }), t.data.searchingCount++;var a = appLaunchData.getUserLocation();new cgi.SimpleRequest("searchpoi", { location: a, options: { radius: 0, categoryId: [], query: e }, context: "" }).send(function (a) {
      t.data.searchingCount--, e == t.data.query ? (t.setData({ shouldShowBottomLoading4Search: !1 }), e && reportPostImpression.addQueryString(e), t.renderPoiList4Search(a)) : 0 == t.data.searchingCount && t.setData({ shouldShowBottomLoading4Search: !1 });
    });
  }, 500), renderPoiList4Search: function renderPoiList4Search(e) {
    console.log("data.continueFlag: " + e.continueFlag), this.setData({ continueFlag4Search: e.continueFlag, context4Search: e.context });var t = [];if (e.poi && e.poi.length) {
      var a = this.data.query;e.poi.forEach(function (e) {
        var o = {};if (o.unique = e.base.id, o.name = e.base.name, o.addr = e.base.address.address, o.topImage = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg", e.base.logo && (e.base.logo.thumbUrl ? o.topImage = e.base.logo.thumbUrl : e.base.logo.url && (o.topImage = e.base.logo.url)), o.categoryName = "", e.base.category && e.base.category[0] && e.base.category[0].name) {
          o.categoryName = e.base.category[0].name;var r = o.categoryName.lastIndexOf(":");-1 != r && (o.categoryName = o.categoryName.substring(r + 1, o.categoryName.length));
        }if (o.price = 0, e.price && e.price.price && (o.price = parseInt(e.price.price) / 100), o.area = "", e.area && e.area.length) if (1 === e.area[0].type) o.area = e.area[0].name;else {
          var i = e.area.filter(function (e) {
            return 1 === e.type;
          }) || [];i.length > 0 ? o.area = i[0].name : o.area = "";
        }o.poiDesc = "", o.categoryName && (o.poiDesc = o.categoryName), o.area && (o.poiDesc && o.poiDesc.length ? o.poiDesc = o.poiDesc + " " + o.area : o.poiDesc = o.area);var n = o.name.indexOf(a);-1 != n ? (o.nameBeforeMatchPart = o.name.substring(0, n), o.nameMatchPart = a, o.nameAfterMatchPart = o.name.substring(n + a.length, o.name.length)) : -1 != (n = o.poiDesc.indexOf(a)) && (o.poiDescBeforeMatchPart = o.poiDesc.substring(0, n), o.poiDescMatchPart = a, o.poiDescAfterMatchPart = o.poiDesc.substring(n + a.length, o.poiDesc.length)), o.distance = Math.round(e.base.location.distance), o.distanceString = o.distance + "m", o.distance >= 1e3 && (o.distanceString = parseInt(o.distance / 1e3) + "km");var s = 0,
            c = 0;e.base.location && e.base.location.latitude && (s = e.base.location.latitude), e.base.location && e.base.location.longitude && (c = e.base.location.longitude), o.location = { latitude: s, longitude: c }, t.push(o);
      }), t = this.data.list4Search.concat(t), this.setData({ list4Search: t }), console.log("list for search", this.data.list4Search);
    }
  }, onReady: function onReady() {}, onShow: function onShow() {}, onHide: function onHide() {}, onUnload: function onUnload() {
    this.data.hasSetChoosePoiResult || reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_CANCELLED);
  }, onPullDownRefresh: function onPullDownRefresh() {}, bindscrolltolower: function bindscrolltolower() {
    this.onReachBottom();
  }, onReachBottom: function onReachBottom() {
    console.log("onReachBottom");var e = this;if (e.data.continueFlag4Search && e.data.context4Search) {
      e.setData({ shouldShowBottomLoading4Search: !0 });var t = appLaunchData.getUserLocation();new cgi.SimpleRequest("searchpoi", { location: t, options: { radius: 0, categoryId: [], query: e.data.query }, context: e.data.context4Search }).send(function (t, a) {
        a.options.query == e.data.query && (e.renderPoiList4Search(t), e.setData({ shouldShowBottomLoading4Search: !1 }));
      });
    }
  }, bindtapSearchPlaceHolder: function bindtapSearchPlaceHolder() {}, bindtapCancelSearch: function bindtapCancelSearch() {
    if (0 != this.data.query.length) {
      this.setData({ query: "", list4Search: [], shouldShowBottomLoading4Search: !0, continueFlag4Search: 0, context4Search: "" }), this.sendSearchRequest("");
    }
  }, catchtouchmove: function catchtouchmove() {}, bindtapItem: function bindtapItem(e) {
    var t = e.currentTarget.dataset.index,
        a = _extends({}, { name: "", unique: "", topImage: "", categoryName: "", price: 0, distanceString: "", distance: 0, addr: "", location: {}, area: "" }, this.data.list4Search[t]),
        o = a.name,
        r = a.unique;a.location;if ("" !== r) {
      var i = { id: r, name: o, topImage: a.topImage, categoryName: a.categoryName, price: a.price, distance: a.distance, address: a.addr, location: a.location, area: a.area };reportPostImpression.updatePoiForPostImpression(i), this.data.query && 0 !== this.data.query.length ? reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_USER_SEARCHED_POI) : reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_RECOMMENDED_POI), this.data.hasSetChoosePoiResult = !0, wx.navigateBack({});var n = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(reportEnum.enumPageName.SEARCH_POI_LIST).prevPage(reportEnum.enumPageName.FRIEND_TIMELINE).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(r).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * n.longitude)).latitude(Math.floor(1e6 * n.latitude)).requestId().prevRequestId().poiClickedIndex(t + 1).reportToServer();
    }
  } }); 
 			}); 	require("pages/search_poi_list/search_poi_list.js");
 		__wxRoute = 'pages/user_profile/user_profile';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user_profile/user_profile.js';	define("pages/user_profile/user_profile.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    appLaunchData = require("../../utils/appLaunchData"),
    util = require("../../utils/util"),
    reportEnum = require("../../utils/reportEnum"),
    mixinCss = require("../../utils/mixinCss"),
    reporter = require("../../utils/reporter"),
    reportSession = require("../../utils/report_session"),
    renderDataUtil = require("../../utils/render_data_util"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    ContactSchema = require("../../utils/model/model_schema").ContactSchema,
    ContactModel = require("../../utils/model/contact_model"),
    schema = require("../../utils/model/model_schema"),
    prevTime = "",
    SHOULD_REPLACE = 0,
    SHOULD_APPEND = 1,
    impressionExposedSet = new Set(),
    poiExposedSet = new Set();MMPage({ mmReportData: { pageName: reportEnum.enumPageName.USER_PROFILE }, data: { shouldUseFollow: app.shouldUseFollow(), isFirstInit: !0, menuPositionTop: 0, headImgUrl: "", nickName: "", fansCount: 0, followCount: 0, markLikeCountTotal: 0, userGender: "他", followType: 0, markList: [], impressionList: [], markCount: 0, impressionCount: 0, contextImpression: "", continueFlagImpression: 1, showBottomLoadingViewImpression: !1, contextMark: "", continueFlagMark: 1, showBottomLoadingViewMark: !1, commentIdPicMap: {}, currentTab: 1, isTab1Inited: !1, isTab2Inited: !1, useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(), currentPageId: reportEnum.enumPageName.USER_PROFILE }, onLoad: function onLoad(e) {
    var t = this,
        o = 30;if (wx.canIUse("getMenuButtonBoundingClientRect")) {
      var n = wx.getMenuButtonBoundingClientRect();"android" === util.getSysInfo().platform && (n.top = n.top / 2, n.top = n.top + 8), o = n.top + 2;
    }this.setData({ menuPositionTop: o });var i = {};e.contact && (i = JSON.parse(decodeURIComponent(e.contact))), app.globalData.pageUserProfile = t, t.setData({ userId: i.userId, headImgUrl: i.headImgUrl, nickName: i.nickName, userGender: t._getUserGender(Number(i.sex)), followType: i.follow ? Number(i.follow) : 0, fansCount: i.ugc && i.ugc.fansCount ? i.ugc.fansCount : 0, followCount: i.ugc && i.ugc.followCount ? i.ugc.followCount : 0 }), declareBinding({ instance: t, schema: ContactSchema, mapping: { userId: "id", followType: "follow", fansCount: "fansCount" } }), app.addLaunchListener(function () {
      t.setData({ shouldUseFollow: app.shouldUseFollow() }), t.addGlobalFunc(), t.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.USER_PROFILE).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc(), this.impressionObserver && this.impressionObserver.disconnect(), this.poiObserver && this.poiObserver.disconnect();
  }, addGlobalFunc: function addGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.userProfile, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId,
            n = t.commentCount ? t.commentCount : 0;console.log("userProfile, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + o);for (var i = !1, r = e.data.impressionList, a = 0; a < r.length; a++) {
          var s = r[a];if (s.comment.id == o) {
            s.comment.subCommentCount = n, i = !0;break;
          }
        }i && e.setData({ impressionList: r });
      } else console.error("userProfile, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.userProfile);
  }, onShow: function onShow() {
    var e = this;e.createImpressionObserveIntersection(), e.createPoiObserveIntersection(), app.addLaunchListener(function () {
      e.data.isFirstInit ? (e.setData({ showBottomLoadingView: !0 }), e.refresh()) : !e.data.useRealCurrentLocationToGetData && appLaunchData.isUsingRealCurrentLocation() && (console.log("user profile, onShow, useRealCurrentLocationToGetData change, startPullDownRefresh"), e.refresh());
    });
  }, refresh: function refresh() {
    console.log("page me refresh!");var e = this,
        t = appLaunchData.getUserLocation(),
        o = appLaunchData.isUsingRealCurrentLocation();new cgi.multipleRequest([new cgi.SimpleRequest("GetUserPage", { context: "", scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION, userId: e.data.userId, location: t }), new cgi.SimpleRequest("GetUserPage", { context: "", scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK, userId: e.data.userId, location: t })], function (t) {
      e.data.useRealCurrentLocationToGetData = o, impressionExposedSet.clear(), poiExposedSet.clear(), e.renderImpressionList(SHOULD_REPLACE, t[0]), e.renderMarkList(SHOULD_REPLACE, t[1]), e.data.isFirstInit && (t[0] && t[0].impression && t[0].impression.length || !t[1] || !t[1].impression || !t[1].impression.length || (e.data.currentTab = 2)), e.setData({ currentTab: e.data.currentTab, isFirstInit: !1, isTab1Inited: !0, isTab2Inited: !0 }), e.createPoiObserveIntersection(), wx.stopPullDownRefresh();
    });
  }, cgiGetImpressionList: function cgiGetImpressionList(e) {
    var t = this,
        o = appLaunchData.getUserLocation();e || (t.data.contextImpression = "", t.data.continueFlagImpression = 1), new cgi.SimpleRequest("GetUserPage", { context: t.data.contextImpression, scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION, userId: t.data.userId, location: o }).ensureNoSameUrlProcessing().send(function (o) {
      t.renderImpressionList(e, o);
    });
  }, renderImpressionList: function renderImpressionList(e, t) {
    var o = [],
        n = t.markCount || 0,
        i = t.likeCount || 0;this.setData({ contextImpression: t.context, continueFlagImpression: t.continueFlag, markLikeCountTotal: util.formatNumberToTenThousand(n + i) || 0 }), e || this.setData({ impressionCount: t.count }), (t.impression || []).forEach(function (e) {
      if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) o.push({ comment: e.comment, unqiue: e.comment.id, poi: e.poi, reportData: { pageId: reportEnum.enumPageName.USER_PROFILE } });else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
        var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);o.push({ comment: t, unqiue: t.id, poi: e.poi, reportData: { pageId: reportEnum.enumPageName.USER_PROFILE } });
      } else console.error("GetUserPage CGI, renderImpressionList, type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
    }), e ? this.setData({ impressionList: this.data.impressionList.concat(o), showBottomLoadingView: !0 }) : this.setData({ impressionList: o, showBottomLoadingView: !0 }), this.createImpressionObserveIntersection();
  }, cgiGetMarkList: function cgiGetMarkList(e) {
    var t = this,
        o = appLaunchData.getUserLocation();e || (t.data.contextMark = "", t.data.continueFlagMark = 1), new cgi.SimpleRequest("GetUserPage", { context: t.data.contextMark, scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK, userId: t.data.userId, location: o }).ensureNoSameUrlProcessing().send(function (o) {
      t.renderMarkList(e, o);
    });
  }, renderMarkList: function renderMarkList(e, t) {
    var o = this;o.setData({ contextMark: t.context, continueFlagMark: t.continueFlag });var n = [];e || o.setData({ markCount: t.count, markCountTotal: util.formatNumberToTenThousand(t.markCount) || null }), (t.impression || []).forEach(function (e) {
      var t = util.formatDate(new Date(1e3 * e.createTime));0 === prevTime.length || prevTime !== t ? prevTime = t : t = "";var i = o.getPoiInfo(e);if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) {
        var r = void 0 !== e.comment.info ? JSON.parse(e.comment.info) : "";o.data.commentIdPicMap[e.comment.id] = r.pic || [], n.push({ poi: i, timestamp: t, thumbUrl: (r.pic || []).map(function (e) {
            return e.thumbUrl;
          }) });
      } else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_MARK) {
        var a = [];void 0 !== e.poi.base.logo ? a.push(e.poi.base.logo.thumbUrl) : a.push("https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg");var s = renderDataUtil.getRenderPoiInfo(e.poi);n.push({ poi: i, normalPoi: s, timestamp: t, thumbUrl: a });
      }
    }), e ? o.setData({ markList: o.data.markList.concat(n), showBottomLoadingView: !0 }) : o.setData({ markList: n, showBottomLoadingView: !0 }), o.createPoiObserveIntersection();
  }, getPoiInfo: function getPoiInfo(e) {
    var t = {},
        o = [];t.info = "", e.poi.base.category.forEach(function (e) {
      var t = e.name,
          n = e.name.lastIndexOf(":");-1 != n && (t = t.substring(n + 1, e.name.length)), o.push(t);
    });var n = o.join(",");if (t.info += n, void 0 !== e.poi.price.price) {
      var i = e.poi.price.price,
          r = parseInt(i) / 100;0 != r && (t.info += " · 人均￥" + r);
    }if (e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info = t.info + " · " + t.area), this.data.useRealCurrentLocationToGetData) {
      var a = void 0 !== e.poi.base.location.distance ? Math.round(e.poi.base.location.distance) : null,
          s = void 0;a < 1e3 ? s = a + "m" : a >= 1e3 && (s = Math.round(a / 1e3) + "km"), t.info += " · " + s;
    }return void 0 !== e.poi.like && (t.like = e.poi.like.count + "位朋友来过"), t.name = e.poi.base.name, t.id = e.poi.base.id, t;
  }, onPullDownRefresh: function onPullDownRefresh() {
    console.log("page me onPullDownRefresh!"), this.refresh();
  }, onReachBottom: function onReachBottom() {
    if (1 == this.data.currentTab) {
      if (!this.data.continueFlagImpression) return;this.cgiGetImpressionList(SHOULD_APPEND);
    } else if (2 == this.data.currentTab) {
      if (!this.data.continueFlagMark) return;this.cgiGetMarkList(SHOULD_APPEND);
    }
  }, bindTapToPoiDetail: function bindTapToPoiDetail(e) {
    var t = e.currentTarget.dataset.index,
        o = this.data.markList[t].poi.id,
        n = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(reportEnum.enumPageName.USER_PROFILE).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(o).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * n.longitude)).latitude(Math.floor(1e6 * n.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(t + 1).requestIdStr("").lazyReportToServer(), wx.navigateTo({ url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(o) });
  }, bindTapGetLists: function bindTapGetLists(e) {
    var t = e.currentTarget.dataset.index;this.setData({ currentTab: t }), 1 === t ? (this._reportClickAction(reportEnum.enumProfilePageClickScene.IMPRESSION_TAB), this.createImpressionObserveIntersection()) : (this._reportClickAction(reportEnum.enumProfilePageClickScene.MARK_TAB), this.createPoiObserveIntersection());
  }, bindtapHeadImg: function bindtapHeadImg(e) {
    var t = e.currentTarget.dataset.url;0 == t.indexOf("http") && (wx.previewImage({ current: t, urls: [t] }), this._reportClickAction(reportEnum.enumProfilePageClickScene.HEADIMG));
  }, createImpressionObserveIntersection: function createImpressionObserveIntersection() {
    var e = this;e.impressionObserver && e.impressionObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [.6], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".impression-cell", function (t) {
      var o = t.dataset.index;if (void 0 !== o) {
        var n = e.data.impressionList[o];if (n) {
          var i = "";if (n.comment && n.comment.id && (i = n.comment.id), i && !impressionExposedSet.has(i)) {
            impressionExposedSet.add(i);var r = util.getImpressionType(n.comment.contact.type),
                a = n.comment.poiId,
                s = 0;n && n.comment && n.comment.subCommentCount && (s = n.comment.subCommentCount);var p = reportEnum.enumFeedAction.FEED_EXPOSED,
                c = "";n.comment.tag && (c = renderDataUtil.getReasonIdString(n.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(s).isForwardedImpression(0).poiIdString(a).impressionIdString(i).action(p).impressionType(r).requestId().pageId(reportEnum.enumPageName.USER_PROFILE).reasonId().reasonIdString(c).recId().recType(0).lazyReportToServer();
          }
        }
      }
    }), e.impressionObserver = t;
  }, onTapBackButton: function onTapBackButton() {
    wx.navigateBack({});
  }, cgiFollowUser: function cgiFollowUser(e) {
    var t = 0 === e ? 1 : 2,
        o = this.data.fansCount,
        n = 0 === e ? o + 1 : o - 1,
        i = 0 === e ? 1 : 0;this.data.userId;this.setData({ followType: i, fansCount: n }), new cgi.SimpleRequest("followuser", { baseRequest: { pageId: reportEnum.enumPageName.USER_PROFILE }, type: t, userId: this.data.userId }).send(function (e) {
      console.log("followuser resp success: ", e);
    }, function (e) {
      console.error("followuser resp failed", e);
    });
  }, onTapToggleFollowUser: function onTapToggleFollowUser() {
    var e = this;console.log("follow", e.data.followType), 1 === e.data.followType ? wx.showModal({ content: "确定不再关注？", cancelText: "取消", confirmText: "确认", success: function success(t) {
        t.confirm ? (console.log("confirm unfollow"), e.cgiFollowUser(1)) : t.cancel && console.log("cancel unfollow");
      } }) : e.cgiFollowUser(0);
  }, createPoiObserveIntersection: function createPoiObserveIntersection() {
    var e = this;e.poiObserver && e.poiObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [1], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".poi-cell", function (t) {
      var o = t.dataset.index;if (void 0 !== o) {
        var n = e.data.markList[o];if (n) {
          var i = n.poi.id || "";if (i && !poiExposedSet.has(i)) {
            poiExposedSet.add(i);var r = appLaunchData.getUserLocation();reporter.getReporter(16373).currentPage(reportEnum.enumPageName.USER_PROFILE).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(i).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(o + 1).requestIdStr("").lazyReportToServer();
          }
        }
      }
    }), e.poiObserver = t;
  }, _getUserGender: function _getUserGender(e) {
    switch (e) {case 0:case 1:
        return "他";case 2:
        return "她";default:
        return "他";}
  }, _reportClickAction: function _reportClickAction(e) {
    if (e) {
      var t = "";this.mmPrevPage && this.mmPrevPage.mmReportData.pageName && (t = this.mmPrevPage.mmReportData.pageName), reporter.getReporter(17511).prevPageId(t).clickTime(Math.floor(new Date().getTime() / 1e3)).clickScene(e).userId(this.data.userId).reportToServer();
    } else console.error("invalid parameter, clickScene");
  } }); 
 			}); 	require("pages/user_profile/user_profile.js");
 		__wxRoute = 'pages/activity/activity';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/activity/activity.js';	define("pages/activity/activity.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t];for (var a in o) {
      Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
  }return e;
};function _defineProperty(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}var app = getApp(),
    appLaunchData = require("../../utils/appLaunchData"),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    CommentSchema = require("../../utils/model/model_schema").CommentSchema,
    PoiModel = require("../../utils/model/poi_model"),
    CommentModel = require("../../utils/model/comment_model"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    APPEND = 1,
    REPLACE = 0;MMPage({ data: { shouldShowBottomLoading: !0, currentPageId: reportEnum.enumPageName.ACTIVITY, requestId: "", reasonId: 0, context: "", continueFlag: 1, broadcastTextArray: [], ugcCountInfo: "", visitCountInfo: 0, countInfo: "", titleName: "", pageBgUrl: "", prizeUrl: "", rankListName: "", topRankPoiName: "", refBillBoard: {} }, mmReportData: { pageName: reportEnum.enumPageName.ACTIVITY, impressionExposedSet: {} }, onLoad: function onLoad(e) {
    var t = this,
        o = {};e.activity && (o = JSON.parse(decodeURIComponent(e.activity))), t.data.visitCount = o.visitCount && o.visitCount + "人感兴趣", t.setData({ titleName: o.name, reasonId: +o.id, visitCountInfo: t.data.visitCount }), wx.setNavigationBarTitle({ title: t.data.titleName }), app.addLaunchListener(function () {
      t.getRecommendImpression(REPLACE), reporter.getReporter(16501).pageId(t.data.currentPageId).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), t.updateGlobalFunc();
    }), wx.onTapNavigationBarRightButton(function (e) {
      console.log("onTapNavigationBarRightButton: " + JSON.stringify(e)), t.shareAppMessage();
    });
  }, onUnload: function onUnload() {
    this.clearGlobalFunc(), this.pageObserver && this.pageObserver.disconnect();
  }, onReachBottom: function onReachBottom() {
    this.data.continueFlag ? this.getRecommendImpression(APPEND) : this.setData({ shouldShowBottomLoading: !1 });
  }, getRecommendImpression: function getRecommendImpression(e) {
    var t = this,
        o = appLaunchData.isUsingRealCurrentLocation(),
        a = appLaunchData.getUserLocation();t.data.requestId = util.uuid(), t.setData({ shouldShowBottomLoading: !0 }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getrecommendimpression", { location: a, requestId: t.data.requestId, reasonId: t.data.reasonId, context: t.data.context, scene: 1 }).ensureNoSameUrlProcessing().send(function (a) {
      if (a.activityBroadcast && a.activityBroadcast.length > 0) {
        var r = a.activityBroadcast.map(function (e) {
          return e.contact.nickName + " 推荐了 " + e.poiName;
        });t.setData({ broadcastTextArray: r });
      }a.topic && (t.data.pageBgUrl = a.topic.backgroundPhoto && a.topic.backgroundPhoto.url, t.data.description = a.topic.description || "", t.data.refBillBoard = a.topic.refBillBoard || {}, t.data.prizeUrl = a.topic.viewPrizeUrl || "", t.data.refBillBoard.category && t.data.refBillBoard.category.id && t.getTopRankPoi(), t.setData({ pageBgUrl: t.data.pageBgUrl, description: t.data.description, prizeUrl: t.data.prizeUrl, refBillBoard: t.data.refBillBoard }));var i = [];if (a.info && a.info.comment && a.info.comment.length && (i = a.info.comment.map(function (e) {
        return { unqiue: e.comment.id, comment: Object.assign(e.comment, { tag: [], createTime: "" }), poi: e.poi, isUsingRealCurrentLocation: o, reportData: { pageId: t.data.currentPageId, requestId: t.data.requestId, recId: e.comment && e.comment.recId ? e.comment.recId : "", recType: e.comment && e.comment.recType ? e.comment.recType : 0 } };
      })), e) {
        for (var n = t.data.impressionList, s = i, p = {}, d = n.length; d < n.length + s.length; d++) {
          p["impressionList[" + d + "]"] = i[d - n.length];
        }t.setData(_extends({}, p));
      } else t.setData({ impressionList: i });declareBinding({ instance: t, schema: CommentSchema, arrayPath: "impressionList", mapping: { "comment.id": "id", "comment.isLike": "isLike", "comment.likeCount": "likeCount" } }), t.setData({ context: a.context, continueFlag: a.continueFlag, shouldShowBottomLoading: !1 }), t.pageObserveIntersection();
    });
  }, getTopRankPoi: function getTopRankPoi() {
    var e = this,
        t = appLaunchData.getUserLocation();new cgi.SimpleRequest("getpoilist", { location: t, options: { entryType: 5, categoryId: [e.data.refBillBoard.category.id] }, context: "", requestId: util.uuid() }).send(function (t) {
      if (t && t.poi && t.poi[0] && t.poi[0].base) {
        var o = t.poi[0].base.name || "";e.setData({ topRankPoiName: "No.1  " + o, rankListName: e.data.refBillBoard.category.name + "排行榜" || "" });
      }
    }, function (t) {
      e.setData({ shouldShowBottomLoading: !1 }), console.error("prefetch getpoilist fail");
    });
  }, updateGlobalFunc: function updateGlobalFunc() {
    var e = this;app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.updateImpressionCommentCount, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId,
            a = t.commentCount ? t.commentCount : 0;console.log("activity, infoUpdateEventListeners, updateImpressionCommentCount");for (var r = e.data.impressionList, i = 0; i < r.length; i++) {
          var n = r[i];if (n.unqiue == o) {
            if (n.comment) {
              n.comment.subCommentCount = a, console.log("activity, infoUpdateEventListeners, updateImpressionCommentCount: " + a + ", index: " + i);var s = new PoiModel(n.poi.base.id),
                  p = new CommentModel(o);s && void 0 !== s.isMark && (n.poi.ugc.isMark = s.isMark), p && void 0 !== p.isLike && void 0 !== p.likeCount && (n.comment.isLike = p.isLike, n.comment.likeCount = p.likeCount), e.setData(_defineProperty({}, "impressionList[" + i + "]", n));break;
            }console.error("indexTag, timelineItem.comment undefined!");break;
          }
        }
      } else console.error("activity, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.addImpression, function (t) {
      console.log("activity, infoUpdateEventListeners, addImpression"), e.getRecommendImpression(REPLACE);
    }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.deleteImpression, function (t) {
      if (t && t.impressionId) {
        var o = t.impressionId;console.log("activity, infoUpdateEventListeners, deleteImpression, impressionId: " + o);for (var a = 0; a < e.data.impressionList.length; a++) {
          if (e.data.impressionList[a].unqiue == o) {
            e.setData(_defineProperty({}, "impressionList[" + a + "]", {}));break;
          }
        }
      } else console.error("activity, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
    });
  }, clearGlobalFunc: function clearGlobalFunc() {
    app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.activity);
  }, onTapPost: function onTapPost() {
    var e = "/pages/poi_comment_publish/poi_comment_publish?topicId=" + this.data.reasonId + "&topicName=" + encodeURIComponent(this.data.titleName),
        t = { startScene: this.data.currentPageId, lastScene: this.data.currentPageId, nextPageUrl: e };reportPostImpression.startPostImpressionProcess(t);
  }, onTapToRankListPage: function onTapToRankListPage() {
    wx.navigateTo({ url: "/pages/rank_list_new/rank_list_new?tabIndex=3&categoryId=" + encodeURIComponent(this.data.refBillBoard.category.id) });
  }, onTapToPrizeUrl: function onTapToPrizeUrl() {
    wx.navigateTo({ url: "/pages/article_webview/article_webview?url=" + encodeURIComponent(this.data.prizeUrl) }), reporter.getReporter(17332).sessionId(reportSession.getId()).action(reportEnum.enumIndexTopRegionAction.ACTIVITY_SHOW_RULES).actionItem(this.data.reasonId).reportToServer();
  }, shareAppMessage: function shareAppMessage() {
    var e = this;if (wx.shareAppMessageForFakeNative) {
      console.log("shareAppMessage, start");var t = e.data.impressionList[0];if (!t || !t.poi) return void console.error("shareAppMessage, no impressionData.poi, return!");var o = e.data.pageBgUrl;o && o.length || (console.error("shareAppMessage, no pic from impressionData.poi, impressionId: " + t.comment.id), o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), wx.shareAppMessageForFakeNative({ bizType: 0, title: e.data.titleName, desc: "精心挑选的餐厅", imageUrl: o, path: util.getCurrentPageUrl(), tailLang: "FF_Entry_Nearby", useDefaultSnapshot: !1, disableForward: !1, defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning", success: function success(t) {
          console.log("shareAppMessage success: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_SUCCESS);
        }, fail: function fail(t) {
          t.errMsg && -1 != t.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_FAILED));
        } });
    } else console.log("shareAppMessage, no api");
  }, pageObserveIntersection: function pageObserveIntersection() {
    var e = this;e.pageObserver && e.pageObserver.disconnect();var t = wx.createIntersectionObserver(e, { thresholds: [.4], initialRatio: 0, observeAll: !0 });t.relativeToViewport(), t.observe(".impression-cell", function (t) {
      var o = t.dataset.index;if (void 0 !== o) {
        void 0 === e.data.lastImprPreloadIndex && (e.data.lastImprPreloadIndex = -1), o > e.data.lastImprPreloadIndex && o % 5 == 0 && (e.onReachBottom(), e.data.lastImprPreloadIndex = o);var a = e.data.impressionList[o];if (a) {
          var r = "";a.comment && a.comment.id && (r = a.comment.id);var i = "";if (a && a.poi && a.poi.base && (i = a.poi.base.id), r && i && !e.mmReportData.impressionExposedSet[r]) {
            e.mmReportData.impressionExposedSet[r] = 1;var n = 0;a.markInfo && a.markInfo.friendMarkCount && (n = 1);var s = util.getImpressionType(a.comment.contact.type);n && (s = reportEnum.enumFeedImpressionType.MARKED);var p = 0;a && a.comment && a.comment.subCommentCount && (p = a.comment.subCommentCount);var d = reportEnum.enumFeedAction.FEED_EXPOSED,
                m = a.reportData.scene || "",
                c = a.reportData.pageId || "",
                l = a.reportData.requestId || "",
                u = a.reportData.recId || "",
                g = a.reportData.recType || 0;reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(m).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(n).poiIdString(i).impressionIdString(r).action(d).impressionType(s).requestId(l).pageId(c).reasonId().reasonIdString(e.data.reasonId).recId(u).recType(g).lazyReportToServer();
          }
        }
      }
    }), e.pageObserver = t;
  }, reportShareResult: function reportShareResult(e) {
    e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.ACTIVITY_TOPIC).shareScene(reportEnum.enumPageName.ACTIVITY).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.reasonId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
  } }); 
 			}); 	require("pages/activity/activity.js");
 		__wxRoute = 'pages/select_tag_list/select_tag_list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/select_tag_list/select_tag_list.js';	define("pages/select_tag_list/select_tag_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    reportPostImpression = require("../../utils/reportPostImpression"),
    appLaunchData = require("../../utils/appLaunchData");Page({ data: { selectedTagId: 0, hasSetChooseTagResult: !1, topicItemList: [] }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      e.tagId && (t.data.selectedTagId = +e.tagId), t.getTopicItemList();
    });
  }, onReady: function onReady() {}, onShow: function onShow() {}, onHide: function onHide() {}, onUnload: function onUnload() {}, onPullDownRefresh: function onPullDownRefresh() {}, getTopicItemList: function getTopicItemList() {
    var e = reportPostImpression.getTopicItemList();e && e.length ? this.setData({ topicItemList: e }) : console.error("getTopicItemList, no data");
  }, onTapTopicItem: function onTapTopicItem(e) {
    console.log("onTapTopicItem: " + JSON.stringify(e));var t = e.currentTarget.dataset.index;if (void 0 !== t) {
      var o = this.data.topicItemList[t];o ? (reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.CHOOSE_AT_LIST), reportPostImpression.updateTopicItemForPostImpression(o), wx.navigateBack({})) : console.error("onTapTopicItem, invalid topicItemIndex");
    } else console.error("onTapTopicItem, no topicItemIndex");
  }, onTapClearTopic: function onTapClearTopic(e) {
    console.log("onTapClearTopic"), reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.DELETED), reportPostImpression.updateTopicItemForPostImpression({}), wx.navigateBack({});
  } }); 
 			}); 	require("pages/select_tag_list/select_tag_list.js");
 		__wxRoute = 'pages/following/following';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/following/following.js';	define("pages/following/following.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t];for (var r in o) {
      Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
  }return e;
};function _defineProperty(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reportEnum = require("../../utils/reportEnum"),
    reporter = require("../../utils/reporter"),
    reportSession = require("../../utils/report_session"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    ContactSchema = require("../../utils/model/model_schema").ContactSchema,
    ContactModel = require("../../utils/model/contact_model"),
    NumberSchema = require("../../utils/model/model_schema").NumberSchema,
    NumberModel = require("../../utils/model/number_model"),
    singleValueIds = require("../../utils/model/single_value_ids"),
    APPEND = 1,
    REPLACE = 0;MMPage({ mmReportData: { pageName: reportEnum.enumPageName.FOLLOWING }, data: { userLists: [], isUserListEmpty: !1, context: "", continueFlag: 1 }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      t.cgiGetFollowing(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.FOLLOWING).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, cgiGetFollowing: function cgiGetFollowing(e) {
    var t = this;t.setData({ shouldShowBottomLoading: !0 }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getfollowuserlist", { context: t.data.context }).ensureNoSameUrlProcessing().send(function (o) {
      if (o.user && o.user.length && o.user.forEach(function (e) {
        e.ugc.fansCount <= 0 && (e.ugc.fansCount = 1);
      }), !e && o.user) t.setData({ userLists: o.user });else if (o.user) {
        for (var r = t.data.userLists, n = o.user, s = {}, a = r.length; a < r.length + n.length; a++) {
          s["userLists[" + a + "]"] = n[a - r.length];
        }t.setData(_extends({}, s));
      } else t.setData({ isUserListEmpty: !0 });t.setData({ context: o.context, continueFlag: o.continueFlag, shouldShowBottomLoading: !1 }), declareBinding({ instance: t, schema: ContactSchema, arrayPath: "userLists", mapping: { userId: "id", follow: "follow", "ugc.fansCount": "fansCount" }, onUpdate: function onUpdate(e, t, o, r, n) {
          if (1 === t.follow) {
            var s = new NumberModel(singleValueIds.followCountId).get();s++, new NumberModel(singleValueIds.followCountId).set(s);
          } else if (0 === t.follow) {
            var a = new NumberModel(singleValueIds.followCountId).get();a--, new NumberModel(singleValueIds.followCountId).set(a);
          }
        } }), new NumberModel(singleValueIds.followCountId).set(o.totalCount);
    });
  }, onTapToggleFollowUser: function onTapToggleFollowUser(e) {
    var t,
        o = e.currentTarget.dataset.index,
        r = this.data.userLists[o],
        n = 0 === r.follow ? 1 : 2,
        s = r.ugc.fansCount;0 === r.follow ? s++ : s--;var a = 0 === r.follow ? 1 : 0;this.data.userId;this.setData((_defineProperty(t = {}, "userLists[" + o + "].follow", a), _defineProperty(t, "userLists[" + o + "].ugc.fansCount", s), t)), new cgi.SimpleRequest("followuser", { baseRequest: { pageId: reportEnum.enumPageName.FOLLOWING }, type: n, userId: r.userId }).send(function (e) {
      console.log("followuser resp success: ", e);
    }, function (e) {
      console.error("followuser resp failed", e);
    });
  }, bindTapToUserProfile: function bindTapToUserProfile(e) {
    var t = e.currentTarget.dataset.index,
        o = this.data.userLists[t];wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(o)) });
  }, onReachBottom: function onReachBottom() {
    this.data.continueFlag ? this.cgiGetFollowing(APPEND) : this.setData({ shouldShowBottomLoading: !1 });
  } }); 
 			}); 	require("pages/following/following.js");
 		__wxRoute = 'pages/fans/fans';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/fans/fans.js';	define("pages/fans/fans.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];for (var o in r) {
      Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
  }return e;
};function _defineProperty(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reportEnum = require("../../utils/reportEnum"),
    reporter = require("../../utils/reporter"),
    reportSession = require("../../utils/report_session"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    ContactSchema = require("../../utils/model/model_schema").ContactSchema,
    ContactModel = require("../../utils/model/contact_model"),
    APPEND = 1,
    REPLACE = 0;MMPage({ mmReportData: { pageName: reportEnum.enumPageName.FANS }, data: { userLists: [], isUserListEmpty: !1, context: "", continueFlag: 1 }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      t.cgiGetFans(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.FANS).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    });
  }, cgiGetFans: function cgiGetFans(e) {
    var t = this;t.setData({ shouldShowBottomLoading: !0 }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getfanslist", { context: t.data.context }).ensureNoSameUrlProcessing().send(function (r) {
      if (r.user && r.user.length && r.user.forEach(function (e) {
        e.ugc.followCount <= 0 && (e.ugc.followCount = 1);
      }), !e && r.user) t.setData({ userLists: r.user });else if (r.user) {
        for (var o = t.data.userLists, n = r.user, s = {}, a = o.length; a < o.length + n.length; a++) {
          s["userLists[" + a + "]"] = n[a - o.length];
        }t.setData(_extends({}, s));
      } else t.setData({ isUserListEmpty: !0 });declareBinding({ instance: t, schema: ContactSchema, arrayPath: "userLists", mapping: { userId: "id", follow: "follow", "ugc.fansCount": "fansCount" } }), t.setData({ context: r.context, continueFlag: r.continueFlag, shouldShowBottomLoading: !1 });
    });
  }, onTapToggleFollowUser: function onTapToggleFollowUser(e) {
    var t,
        r = e.currentTarget.dataset.index,
        o = this.data.userLists[r],
        n = 0 === o.follow ? 1 : 2,
        s = o.ugc.fansCount;0 === o.follow ? s++ : s--;this.data.userId;this.setData((_defineProperty(t = {}, "userLists[" + r + "].follow", +!o.follow), _defineProperty(t, "userLists[" + r + "].ugc.fansCount", s), t)), new cgi.SimpleRequest("followuser", { baseRequest: { pageId: reportEnum.enumPageName.FANS }, type: n, userId: o.userId }).send(function (e) {
      console.log("followuser resp success: ", e);
    }, function (e) {
      console.error("followuser resp failed", e);
    });
  }, bindTapToUserProfile: function bindTapToUserProfile(e) {
    var t = e.currentTarget.dataset.index,
        r = this.data.userLists[t];wx.navigateTo({ url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(r)) });
  }, onReachBottom: function onReachBottom() {
    this.data.continueFlag ? this.cgiGetFans(APPEND) : this.setData({ shouldShowBottomLoading: !1 });
  } }); 
 			}); 	require("pages/fans/fans.js");
 		__wxRoute = 'pages/recommend_poi/recommend_poi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/recommend_poi/recommend_poi.js';	define("pages/recommend_poi/recommend_poi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
var app = getApp(),
    cgi = require("../../utils/cgi"),
    util = require("../../utils/util"),
    reporter = require("../../utils/reporter"),
    reportEnum = require("../../utils/reportEnum"),
    reportSession = require("../../utils/report_session"),
    appLaunchData = require("../../utils/appLaunchData"),
    MMPage = require("../../utils/mmFramework/mm_page"),
    renderDataUtil = require("../../utils/render_data_util"),
    declareBinding = require("../../utils/model_lib/declareBinding"),
    PoiSchema = require("../../utils/model/model_schema").PoiSchema,
    PoiModel = require("../../utils/model/poi_model"),
    REPLACE = 0,
    APPEND = 1;MMPage({ mmReportData: { pageName: reportEnum.enumPageName.RECOMMEND_POI, poiExposedObjSet: {} }, data: { context: "", continueFlag: 1, shouldShowBottomLoading: !0 }, onLoad: function onLoad(e) {
    var t = this;app.addLaunchListener(function () {
      t.getRecommendPoiRequest();
    }), reporter.getReporter(16501).pageId(t.mmReportData.pageName).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
  }, onUnload: function onUnload() {
    this.poiIntersectionObserver && this.poiIntersectionObserver.disconnect();
  }, getRecommendPoiRequest: function getRecommendPoiRequest() {
    var e = this,
        t = appLaunchData.getUserLocation();e.data.requestId = util.uuid(), e.setData({ renderPoiList: [], shouldShowBottomLoading: !0 }), new cgi.SimpleRequest("getrecommendpoi", { location: t, requestId: e.data.requestId }).send(function (t) {
      if (t.poi) {
        var r = [];t.poi.forEach(function (t) {
          r.push({ poi: renderDataUtil.getRenderPoiInfo(t.poi), reportData: { pageId: e.mmReportData.pageName, prevPageId: reportEnum.enumPageName.TIMELINE, requestId: e.data.requestId }, reasonData: { reason: t.reason, type: t.type, billboard: t.refBillBoard || "" } });
        }), e.setData({ renderPoiList: r, shouldShowBottomLoading: !1 }), declareBinding({ instance: e, schema: PoiSchema, arrayPath: "renderPoiList", mapping: { "poi.id": "id", "poi.isMark": "isMark" } });
      }
    }, function (t) {
      e.setData({ shouldShowBottomLoading: !1 });
    });
  } }); 
 			}); 	require("pages/recommend_poi/recommend_poi.js");
 		__wxRoute = 'pages/article_webview/article_webview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/article_webview/article_webview.js';	define("pages/article_webview/article_webview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";
Page({ data: { url: "" }, onLoad: function onLoad(a) {
    a.url ? this.setData({ url: decodeURIComponent(a.url) }) : wx.navigateBack({ delta: 2 });
  } }); 
 			}); 	require("pages/article_webview/article_webview.js");
 	