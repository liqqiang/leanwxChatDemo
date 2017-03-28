(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('leancloud-realtime')) :
    typeof define === 'function' && define.amd ? define('webrtc', ['exports', 'leancloud-realtime'], factory) :
    (factory((global.AV = global.AV || {}),global.AV));
}(this, (function (exports,leancloudRealtime) { 'use strict';

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var _addToUnscopables = createCommonjsModule(function (module) {
    module.exports = function(){ /* empty */ };
    });

    var _iterStep = createCommonjsModule(function (module) {
    module.exports = function(done, value){
      return {value: value, done: !!done};
    };
    });

    var _iterators = createCommonjsModule(function (module) {
    module.exports = {};
    });

    var _cof = createCommonjsModule(function (module) {
    var toString = {}.toString;

    module.exports = function(it){
      return toString.call(it).slice(8, -1);
    };
    });

    var _iobject = createCommonjsModule(function (module) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = _cof;
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
    });

    var _defined = createCommonjsModule(function (module) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function(it){
      if(it == undefined)throw TypeError("Can't call method on  " + it);
      return it;
    };
    });

    var _toIobject = createCommonjsModule(function (module) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = _iobject
      , defined = _defined;
    module.exports = function(it){
      return IObject(defined(it));
    };
    });

    var _library = createCommonjsModule(function (module) {
    module.exports = true;
    });

    var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
    if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
    });

    var _core = createCommonjsModule(function (module) {
    var core = module.exports = {version: '2.4.0'};
    if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
    });

    var _aFunction = createCommonjsModule(function (module) {
    module.exports = function(it){
      if(typeof it != 'function')throw TypeError(it + ' is not a function!');
      return it;
    };
    });

    var _ctx = createCommonjsModule(function (module) {
    // optional / simple context binding
    var aFunction = _aFunction;
    module.exports = function(fn, that, length){
      aFunction(fn);
      if(that === undefined)return fn;
      switch(length){
        case 1: return function(a){
          return fn.call(that, a);
        };
        case 2: return function(a, b){
          return fn.call(that, a, b);
        };
        case 3: return function(a, b, c){
          return fn.call(that, a, b, c);
        };
      }
      return function(/* ...args */){
        return fn.apply(that, arguments);
      };
    };
    });

    var _isObject = createCommonjsModule(function (module) {
    module.exports = function(it){
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    });

    var _anObject = createCommonjsModule(function (module) {
    var isObject = _isObject;
    module.exports = function(it){
      if(!isObject(it))throw TypeError(it + ' is not an object!');
      return it;
    };
    });

    var _fails = createCommonjsModule(function (module) {
    module.exports = function(exec){
      try {
        return !!exec();
      } catch(e){
        return true;
      }
    };
    });

    var _descriptors = createCommonjsModule(function (module) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !_fails(function(){
      return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
    });
    });

    var _domCreate = createCommonjsModule(function (module) {
    var isObject = _isObject
      , document = _global.document
      // in old IE typeof document.createElement is 'object'
      , is = isObject(document) && isObject(document.createElement);
    module.exports = function(it){
      return is ? document.createElement(it) : {};
    };
    });

    var _ie8DomDefine = createCommonjsModule(function (module) {
    module.exports = !_descriptors && !_fails(function(){
      return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
    });
    });

    var _toPrimitive = createCommonjsModule(function (module) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = _isObject;
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function(it, S){
      if(!isObject(it))return it;
      var fn, val;
      if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
      if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
      if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
      throw TypeError("Can't convert object to primitive value");
    };
    });

    var _objectDp = createCommonjsModule(function (module, exports) {
    var anObject       = _anObject
      , IE8_DOM_DEFINE = _ie8DomDefine
      , toPrimitive    = _toPrimitive
      , dP             = Object.defineProperty;

    exports.f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if(IE8_DOM_DEFINE)try {
        return dP(O, P, Attributes);
      } catch(e){ /* empty */ }
      if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
      if('value' in Attributes)O[P] = Attributes.value;
      return O;
    };
    });

    var _propertyDesc = createCommonjsModule(function (module) {
    module.exports = function(bitmap, value){
      return {
        enumerable  : !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable    : !(bitmap & 4),
        value       : value
      };
    };
    });

    var _hide = createCommonjsModule(function (module) {
    var dP         = _objectDp
      , createDesc = _propertyDesc;
    module.exports = _descriptors ? function(object, key, value){
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value){
      object[key] = value;
      return object;
    };
    });

    var _export = createCommonjsModule(function (module) {
    var global    = _global
      , core      = _core
      , ctx       = _ctx
      , hide      = _hide
      , PROTOTYPE = 'prototype';

    var $export = function(type, name, source){
      var IS_FORCED = type & $export.F
        , IS_GLOBAL = type & $export.G
        , IS_STATIC = type & $export.S
        , IS_PROTO  = type & $export.P
        , IS_BIND   = type & $export.B
        , IS_WRAP   = type & $export.W
        , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
        , expProto  = exports[PROTOTYPE]
        , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
        , key, own, out;
      if(IS_GLOBAL)source = name;
      for(key in source){
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if(own && key in exports)continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
        // bind timers to global for call from export context
        : IS_BIND && own ? ctx(out, global)
        // wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? (function(C){
          var F = function(a, b, c){
            if(this instanceof C){
              switch(arguments.length){
                case 0: return new C;
                case 1: return new C(a);
                case 2: return new C(a, b);
              } return new C(a, b, c);
            } return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        // make static versions for prototype methods
        })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if(IS_PROTO){
          (exports.virtual || (exports.virtual = {}))[key] = out;
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
        }
      }
    };
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library` 
    module.exports = $export;
    });

    var _redefine = createCommonjsModule(function (module) {
    module.exports = _hide;
    });

    var _has = createCommonjsModule(function (module) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key){
      return hasOwnProperty.call(it, key);
    };
    });

    var _toInteger = createCommonjsModule(function (module) {
    // 7.1.4 ToInteger
    var ceil  = Math.ceil
      , floor = Math.floor;
    module.exports = function(it){
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    });

    var _toLength = createCommonjsModule(function (module) {
    // 7.1.15 ToLength
    var toInteger = _toInteger
      , min       = Math.min;
    module.exports = function(it){
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
    });

    var _toIndex = createCommonjsModule(function (module) {
    var toInteger = _toInteger
      , max       = Math.max
      , min       = Math.min;
    module.exports = function(index, length){
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
    });

    var _arrayIncludes = createCommonjsModule(function (module) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = _toIobject
      , toLength  = _toLength
      , toIndex   = _toIndex;
    module.exports = function(IS_INCLUDES){
      return function($this, el, fromIndex){
        var O      = toIObject($this)
          , length = toLength(O.length)
          , index  = toIndex(fromIndex, length)
          , value;
        // Array#includes uses SameValueZero equality algorithm
        if(IS_INCLUDES && el != el)while(length > index){
          value = O[index++];
          if(value != value)return true;
        // Array#toIndex ignores holes, Array#includes - not
        } else for(;length > index; index++)if(IS_INCLUDES || index in O){
          if(O[index] === el)return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };
    });

    var _shared = createCommonjsModule(function (module) {
    var global = _global
      , SHARED = '__core-js_shared__'
      , store  = global[SHARED] || (global[SHARED] = {});
    module.exports = function(key){
      return store[key] || (store[key] = {});
    };
    });

    var _uid = createCommonjsModule(function (module) {
    var id = 0
      , px = Math.random();
    module.exports = function(key){
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
    });

    var _sharedKey = createCommonjsModule(function (module) {
    var shared = _shared('keys')
      , uid    = _uid;
    module.exports = function(key){
      return shared[key] || (shared[key] = uid(key));
    };
    });

    var _objectKeysInternal = createCommonjsModule(function (module) {
    var has          = _has
      , toIObject    = _toIobject
      , arrayIndexOf = _arrayIncludes(false)
      , IE_PROTO     = _sharedKey('IE_PROTO');

    module.exports = function(object, names){
      var O      = toIObject(object)
        , i      = 0
        , result = []
        , key;
      for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while(names.length > i)if(has(O, key = names[i++])){
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };
    });

    var _enumBugKeys = createCommonjsModule(function (module) {
    // IE 8- don't enum bug keys
    module.exports = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');
    });

    var _objectKeys = createCommonjsModule(function (module) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys       = _objectKeysInternal
      , enumBugKeys = _enumBugKeys;

    module.exports = Object.keys || function keys(O){
      return $keys(O, enumBugKeys);
    };
    });

    var _objectDps = createCommonjsModule(function (module) {
    var dP       = _objectDp
      , anObject = _anObject
      , getKeys  = _objectKeys;

    module.exports = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
      anObject(O);
      var keys   = getKeys(Properties)
        , length = keys.length
        , i = 0
        , P;
      while(length > i)dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
    });

    var _html = createCommonjsModule(function (module) {
    module.exports = _global.document && document.documentElement;
    });

    var _objectCreate = createCommonjsModule(function (module) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject    = _anObject
      , dPs         = _objectDps
      , enumBugKeys = _enumBugKeys
      , IE_PROTO    = _sharedKey('IE_PROTO')
      , Empty       = function(){ /* empty */ }
      , PROTOTYPE   = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function(){
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _domCreate('iframe')
        , i      = enumBugKeys.length
        , lt     = '<'
        , gt     = '>'
        , iframeDocument;
      iframe.style.display = 'none';
      _html.appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };

    module.exports = Object.create || function create(O, Properties){
      var result;
      if(O !== null){
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty;
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === undefined ? result : dPs(result, Properties);
    };
    });

    var _wks = createCommonjsModule(function (module) {
    var store      = _shared('wks')
      , uid        = _uid
      , Symbol     = _global.Symbol
      , USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function(name){
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
    });

    var _setToStringTag = createCommonjsModule(function (module) {
    var def = _objectDp.f
      , has = _has
      , TAG = _wks('toStringTag');

    module.exports = function(it, tag, stat){
      if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
    };
    });

    var _iterCreate = createCommonjsModule(function (module) {
    'use strict';
    var create         = _objectCreate
      , descriptor     = _propertyDesc
      , setToStringTag = _setToStringTag
      , IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

    module.exports = function(Constructor, NAME, next){
      Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
      setToStringTag(Constructor, NAME + ' Iterator');
    };
    });

    var _toObject = createCommonjsModule(function (module) {
    // 7.1.13 ToObject(argument)
    var defined = _defined;
    module.exports = function(it){
      return Object(defined(it));
    };
    });

    var _objectGpo = createCommonjsModule(function (module) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has         = _has
      , toObject    = _toObject
      , IE_PROTO    = _sharedKey('IE_PROTO')
      , ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function(O){
      O = toObject(O);
      if(has(O, IE_PROTO))return O[IE_PROTO];
      if(typeof O.constructor == 'function' && O instanceof O.constructor){
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    };
    });

    var _iterDefine = createCommonjsModule(function (module) {
    'use strict';
    var LIBRARY        = _library
      , $export        = _export
      , redefine       = _redefine
      , hide           = _hide
      , has            = _has
      , Iterators      = _iterators
      , $iterCreate    = _iterCreate
      , setToStringTag = _setToStringTag
      , getPrototypeOf = _objectGpo
      , ITERATOR       = _wks('iterator')
      , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
      , FF_ITERATOR    = '@@iterator'
      , KEYS           = 'keys'
      , VALUES         = 'values';

    var returnThis = function(){ return this; };

    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind){
        if(!BUGGY && kind in proto)return proto[kind];
        switch(kind){
          case KEYS: return function keys(){ return new Constructor(this, kind); };
          case VALUES: return function values(){ return new Constructor(this, kind); };
        } return function entries(){ return new Constructor(this, kind); };
      };
      var TAG        = NAME + ' Iterator'
        , DEF_VALUES = DEFAULT == VALUES
        , VALUES_BUG = false
        , proto      = Base.prototype
        , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
        , $default   = $native || getMethod(DEFAULT)
        , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
        , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
        , methods, key, IteratorPrototype;
      // Fix native
      if($anyNative){
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
        if(IteratorPrototype !== Object.prototype){
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if(DEF_VALUES && $native && $native.name !== VALUES){
        VALUES_BUG = true;
        $default = function values(){ return $native.call(this); };
      }
      // Define iterator
      if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
        hide(proto, ITERATOR, $default);
      }
      // Plug for library
      Iterators[NAME] = $default;
      Iterators[TAG]  = returnThis;
      if(DEFAULT){
        methods = {
          values:  DEF_VALUES ? $default : getMethod(VALUES),
          keys:    IS_SET     ? $default : getMethod(KEYS),
          entries: $entries
        };
        if(FORCED)for(key in methods){
          if(!(key in proto))redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
    });

    var es6_array_iterator = createCommonjsModule(function (module) {
    'use strict';
    var addToUnscopables = _addToUnscopables
      , step             = _iterStep
      , Iterators        = _iterators
      , toIObject        = _toIobject;

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = _iterDefine(Array, 'Array', function(iterated, kind){
      this._t = toIObject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function(){
      var O     = this._t
        , kind  = this._k
        , index = this._i++;
      if(!O || index >= O.length){
        this._t = undefined;
        return step(1);
      }
      if(kind == 'keys'  )return step(0, index);
      if(kind == 'values')return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    });

    var web_dom_iterable = createCommonjsModule(function (module) {
    var global        = _global
      , hide          = _hide
      , Iterators     = _iterators
      , TO_STRING_TAG = _wks('toStringTag');

    for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
      var NAME       = collections[i]
        , Collection = global[NAME]
        , proto      = Collection && Collection.prototype;
      if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    });

    var _stringAt = createCommonjsModule(function (module) {
    var toInteger = _toInteger
      , defined   = _defined;
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function(TO_STRING){
      return function(that, pos){
        var s = String(defined(that))
          , i = toInteger(pos)
          , l = s.length
          , a, b;
        if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };
    });

    var es6_string_iterator = createCommonjsModule(function (module) {
    'use strict';
    var $at  = _stringAt(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    _iterDefine(String, 'String', function(iterated){
      this._t = String(iterated); // target
      this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function(){
      var O     = this._t
        , index = this._i
        , point;
      if(index >= O.length)return {value: undefined, done: true};
      point = $at(O, index);
      this._i += point.length;
      return {value: point, done: false};
    });
    });

    var _classof = createCommonjsModule(function (module) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = _cof
      , TAG = _wks('toStringTag')
      // ES3 wrong here
      , ARG = cof(function(){ return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function(it, key){
      try {
        return it[key];
      } catch(e){ /* empty */ }
    };

    module.exports = function(it){
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
        // builtinTag case
        : ARG ? cof(O)
        // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    });

    var core_isIterable = createCommonjsModule(function (module) {
    var classof   = _classof
      , ITERATOR  = _wks('iterator')
      , Iterators = _iterators;
    module.exports = _core.isIterable = function(it){
      var O = Object(it);
      return O[ITERATOR] !== undefined
        || '@@iterator' in O
        || Iterators.hasOwnProperty(classof(O));
    };
    });

    var isIterable$2 = createCommonjsModule(function (module) {
    module.exports = core_isIterable;
    });

    var isIterable = createCommonjsModule(function (module) {
    module.exports = { "default": isIterable$2, __esModule: true };
    });

    var core_getIteratorMethod = createCommonjsModule(function (module) {
    var classof   = _classof
      , ITERATOR  = _wks('iterator')
      , Iterators = _iterators;
    module.exports = _core.getIteratorMethod = function(it){
      if(it != undefined)return it[ITERATOR]
        || it['@@iterator']
        || Iterators[classof(it)];
    };
    });

    var core_getIterator = createCommonjsModule(function (module) {
    var anObject = _anObject
      , get      = core_getIteratorMethod;
    module.exports = _core.getIterator = function(it){
      var iterFn = get(it);
      if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
      return anObject(iterFn.call(it));
    };
    });

    var getIterator$2 = createCommonjsModule(function (module) {
    module.exports = core_getIterator;
    });

    var getIterator = createCommonjsModule(function (module) {
    module.exports = { "default": getIterator$2, __esModule: true };
    });

    var slicedToArray = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    var _isIterable2 = isIterable;

    var _isIterable3 = _interopRequireDefault(_isIterable2);

    var _getIterator2 = getIterator;

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if ((0, _isIterable3.default)(Object(arr))) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    });

    var _slicedToArray = unwrapExports(slicedToArray);

    var _anInstance = createCommonjsModule(function (module) {
    module.exports = function(it, Constructor, name, forbiddenField){
      if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
        throw TypeError(name + ': incorrect invocation!');
      } return it;
    };
    });

    var _iterCall = createCommonjsModule(function (module) {
    // call something on iterator step with safe closing on error
    var anObject = _anObject;
    module.exports = function(iterator, fn, value, entries){
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch(e){
        var ret = iterator['return'];
        if(ret !== undefined)anObject(ret.call(iterator));
        throw e;
      }
    };
    });

    var _isArrayIter = createCommonjsModule(function (module) {
    // check on default Array iterator
    var Iterators  = _iterators
      , ITERATOR   = _wks('iterator')
      , ArrayProto = Array.prototype;

    module.exports = function(it){
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    });

    var _forOf = createCommonjsModule(function (module) {
    var ctx         = _ctx
      , call        = _iterCall
      , isArrayIter = _isArrayIter
      , anObject    = _anObject
      , toLength    = _toLength
      , getIterFn   = core_getIteratorMethod
      , BREAK       = {}
      , RETURN      = {};
    var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
      var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
        , f      = ctx(fn, that, entries ? 2 : 1)
        , index  = 0
        , length, step, iterator, result;
      if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if(result === BREAK || result === RETURN)return result;
      } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
        result = call(iterator, f, step.value, entries);
        if(result === BREAK || result === RETURN)return result;
      }
    };
    exports.BREAK  = BREAK;
    exports.RETURN = RETURN;
    });

    var _speciesConstructor = createCommonjsModule(function (module) {
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject  = _anObject
      , aFunction = _aFunction
      , SPECIES   = _wks('species');
    module.exports = function(O, D){
      var C = anObject(O).constructor, S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
    });

    var _invoke = createCommonjsModule(function (module) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function(fn, args, that){
      var un = that === undefined;
      switch(args.length){
        case 0: return un ? fn()
                          : fn.call(that);
        case 1: return un ? fn(args[0])
                          : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
                          : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
                          : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
                          : fn.call(that, args[0], args[1], args[2], args[3]);
      } return              fn.apply(that, args);
    };
    });

    var _task = createCommonjsModule(function (module) {
    var ctx                = _ctx
      , invoke             = _invoke
      , html               = _html
      , cel                = _domCreate
      , global             = _global
      , process            = global.process
      , setTask            = global.setImmediate
      , clearTask          = global.clearImmediate
      , MessageChannel     = global.MessageChannel
      , counter            = 0
      , queue              = {}
      , ONREADYSTATECHANGE = 'onreadystatechange'
      , defer, channel, port;
    var run = function(){
      var id = +this;
      if(queue.hasOwnProperty(id)){
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function(event){
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if(!setTask || !clearTask){
      setTask = function setImmediate(fn){
        var args = [], i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function(){
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id){
        delete queue[id];
      };
      // Node.js 0.8-
      if(_cof(process) == 'process'){
        defer = function(id){
          process.nextTick(ctx(run, id, 1));
        };
      // Browsers with MessageChannel, includes WebWorkers
      } else if(MessageChannel){
        channel = new MessageChannel;
        port    = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
        defer = function(id){
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
      // IE8-
      } else if(ONREADYSTATECHANGE in cel('script')){
        defer = function(id){
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
            html.removeChild(this);
            run.call(id);
          };
        };
      // Rest old browsers
      } else {
        defer = function(id){
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set:   setTask,
      clear: clearTask
    };
    });

    var _microtask = createCommonjsModule(function (module) {
    var global    = _global
      , macrotask = _task.set
      , Observer  = global.MutationObserver || global.WebKitMutationObserver
      , process   = global.process
      , Promise   = global.Promise
      , isNode    = _cof(process) == 'process';

    module.exports = function(){
      var head, last, notify;

      var flush = function(){
        var parent, fn;
        if(isNode && (parent = process.domain))parent.exit();
        while(head){
          fn   = head.fn;
          head = head.next;
          try {
            fn();
          } catch(e){
            if(head)notify();
            else last = undefined;
            throw e;
          }
        } last = undefined;
        if(parent)parent.enter();
      };

      // Node.js
      if(isNode){
        notify = function(){
          process.nextTick(flush);
        };
      // browsers with MutationObserver
      } else if(Observer){
        var toggle = true
          , node   = document.createTextNode('');
        new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
        notify = function(){
          node.data = toggle = !toggle;
        };
      // environments with maybe non-completely correct, but existent Promise
      } else if(Promise && Promise.resolve){
        var promise = Promise.resolve();
        notify = function(){
          promise.then(flush);
        };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function(){
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }

      return function(fn){
        var task = {fn: fn, next: undefined};
        if(last)last.next = task;
        if(!head){
          head = task;
          notify();
        } last = task;
      };
    };
    });

    var _redefineAll = createCommonjsModule(function (module) {
    var hide = _hide;
    module.exports = function(target, src, safe){
      for(var key in src){
        if(safe && target[key])target[key] = src[key];
        else hide(target, key, src[key]);
      } return target;
    };
    });

    var _setSpecies = createCommonjsModule(function (module) {
    'use strict';
    var global      = _global
      , core        = _core
      , dP          = _objectDp
      , DESCRIPTORS = _descriptors
      , SPECIES     = _wks('species');

    module.exports = function(KEY){
      var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
      if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
        configurable: true,
        get: function(){ return this; }
      });
    };
    });

    var _iterDetect = createCommonjsModule(function (module) {
    var ITERATOR     = _wks('iterator')
      , SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();
      riter['return'] = function(){ SAFE_CLOSING = true; };
      Array.from(riter, function(){ throw 2; });
    } catch(e){ /* empty */ }

    module.exports = function(exec, skipClosing){
      if(!skipClosing && !SAFE_CLOSING)return false;
      var safe = false;
      try {
        var arr  = [7]
          , iter = arr[ITERATOR]();
        iter.next = function(){ return {done: safe = true}; };
        arr[ITERATOR] = function(){ return iter; };
        exec(arr);
      } catch(e){ /* empty */ }
      return safe;
    };
    });

    var es6_promise = createCommonjsModule(function (module) {
    'use strict';
    var LIBRARY            = _library
      , global             = _global
      , ctx                = _ctx
      , classof            = _classof
      , $export            = _export
      , isObject           = _isObject
      , aFunction          = _aFunction
      , anInstance         = _anInstance
      , forOf              = _forOf
      , speciesConstructor = _speciesConstructor
      , task               = _task.set
      , microtask          = _microtask()
      , PROMISE            = 'Promise'
      , TypeError          = global.TypeError
      , process            = global.process
      , $Promise           = global[PROMISE]
      , process            = global.process
      , isNode             = classof(process) == 'process'
      , empty              = function(){ /* empty */ }
      , Internal, GenericPromiseCapability, Wrapper;

    var USE_NATIVE = !!function(){
      try {
        // correct subclassing with @@species support
        var promise     = $Promise.resolve(1)
          , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
      } catch(e){ /* empty */ }
    }();

    // helpers
    var sameConstructor = function(a, b){
      // with library wrapper special case
      return a === b || a === $Promise && b === Wrapper;
    };
    var isThenable = function(it){
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var newPromiseCapability = function(C){
      return sameConstructor($Promise, C)
        ? new PromiseCapability(C)
        : new GenericPromiseCapability(C);
    };
    var PromiseCapability = GenericPromiseCapability = function(C){
      var resolve, reject;
      this.promise = new C(function($$resolve, $$reject){
        if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject  = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject  = aFunction(reject);
    };
    var perform = function(exec){
      try {
        exec();
      } catch(e){
        return {error: e};
      }
    };
    var notify = function(promise, isReject){
      if(promise._n)return;
      promise._n = true;
      var chain = promise._c;
      microtask(function(){
        var value = promise._v
          , ok    = promise._s == 1
          , i     = 0;
        var run = function(reaction){
          var handler = ok ? reaction.ok : reaction.fail
            , resolve = reaction.resolve
            , reject  = reaction.reject
            , domain  = reaction.domain
            , result, then;
          try {
            if(handler){
              if(!ok){
                if(promise._h == 2)onHandleUnhandled(promise);
                promise._h = 1;
              }
              if(handler === true)result = value;
              else {
                if(domain)domain.enter();
                result = handler(value);
                if(domain)domain.exit();
              }
              if(result === reaction.promise){
                reject(TypeError('Promise-chain cycle'));
              } else if(then = isThenable(result)){
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch(e){
            reject(e);
          }
        };
        while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if(isReject && !promise._h)onUnhandled(promise);
      });
    };
    var onUnhandled = function(promise){
      task.call(global, function(){
        var value = promise._v
          , abrupt, handler, console;
        if(isUnhandled(promise)){
          abrupt = perform(function(){
            if(isNode){
              process.emit('unhandledRejection', value, promise);
            } else if(handler = global.onunhandledrejection){
              handler({promise: promise, reason: value});
            } else if((console = global.console) && console.error){
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        } promise._a = undefined;
        if(abrupt)throw abrupt.error;
      });
    };
    var isUnhandled = function(promise){
      if(promise._h == 1)return false;
      var chain = promise._a || promise._c
        , i     = 0
        , reaction;
      while(chain.length > i){
        reaction = chain[i++];
        if(reaction.fail || !isUnhandled(reaction.promise))return false;
      } return true;
    };
    var onHandleUnhandled = function(promise){
      task.call(global, function(){
        var handler;
        if(isNode){
          process.emit('rejectionHandled', promise);
        } else if(handler = global.onrejectionhandled){
          handler({promise: promise, reason: promise._v});
        }
      });
    };
    var $reject = function(value){
      var promise = this;
      if(promise._d)return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if(!promise._a)promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function(value){
      var promise = this
        , then;
      if(promise._d)return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if(promise === value)throw TypeError("Promise can't be resolved itself");
        if(then = isThenable(value)){
          microtask(function(){
            var wrapper = {_w: promise, _d: false}; // wrap
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch(e){
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch(e){
        $reject.call({_w: promise, _d: false}, e); // wrap
      }
    };

    // constructor polyfill
    if(!USE_NATIVE){
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor){
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch(err){
          $reject.call(this, err);
        }
      };
      Internal = function Promise(executor){
        this._c = [];             // <- awaiting reactions
        this._a = undefined;      // <- checked in isUnhandled reactions
        this._s = 0;              // <- state
        this._d = false;          // <- done
        this._v = undefined;      // <- value
        this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;          // <- notify
      };
      Internal.prototype = _redefineAll($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected){
          var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail   = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;
          this._c.push(reaction);
          if(this._a)this._a.push(reaction);
          if(this._s)notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function(onRejected){
          return this.then(undefined, onRejected);
        }
      });
      PromiseCapability = function(){
        var promise  = new Internal;
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject  = ctx($reject, promise, 1);
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
    _setToStringTag($Promise, PROMISE);
    _setSpecies(PROMISE);
    Wrapper = _core[PROMISE];

    // statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r){
        var capability = newPromiseCapability(this)
          , $$reject   = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x){
        // instanceof instead of internal slot check because we should fix it without replacement native Promise core
        if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
        var capability = newPromiseCapability(this)
          , $$resolve  = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && _iterDetect(function(iter){
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable){
        var C          = this
          , capability = newPromiseCapability(C)
          , resolve    = capability.resolve
          , reject     = capability.reject;
        var abrupt = perform(function(){
          var values    = []
            , index     = 0
            , remaining = 1;
          forOf(iterable, false, function(promise){
            var $index        = index++
              , alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function(value){
              if(alreadyCalled)return;
              alreadyCalled  = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if(abrupt)reject(abrupt.error);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable){
        var C          = this
          , capability = newPromiseCapability(C)
          , reject     = capability.reject;
        var abrupt = perform(function(){
          forOf(iterable, false, function(promise){
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if(abrupt)reject(abrupt.error);
        return capability.promise;
      }
    });
    });

    var promise$1 = createCommonjsModule(function (module) {
    module.exports = _core.Promise;
    });

    var promise = createCommonjsModule(function (module) {
    module.exports = { "default": promise$1, __esModule: true };
    });

    var _Promise = unwrapExports(promise);

    var _objectGops = createCommonjsModule(function (module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    });

    var _objectPie = createCommonjsModule(function (module, exports) {
    exports.f = {}.propertyIsEnumerable;
    });

    var _objectAssign = createCommonjsModule(function (module) {
    'use strict';
    // 19.1.2.1 Object.assign(target, source, ...)
    var getKeys  = _objectKeys
      , gOPS     = _objectGops
      , pIE      = _objectPie
      , toObject = _toObject
      , IObject  = _iobject
      , $assign  = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || _fails(function(){
      var A = {}
        , B = {}
        , S = Symbol()
        , K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function(k){ B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source){ // eslint-disable-line no-unused-vars
      var T     = toObject(target)
        , aLen  = arguments.length
        , index = 1
        , getSymbols = gOPS.f
        , isEnum     = pIE.f;
      while(aLen > index){
        var S      = IObject(arguments[index++])
          , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
          , length = keys.length
          , j      = 0
          , key;
        while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
      } return T;
    } : $assign;
    });

    var es6_object_assign = createCommonjsModule(function (module) {
    // 19.1.3.1 Object.assign(target, source)
    var $export = _export;

    $export($export.S + $export.F, 'Object', {assign: _objectAssign});
    });

    var assign$1 = createCommonjsModule(function (module) {
    module.exports = _core.Object.assign;
    });

    var assign = createCommonjsModule(function (module) {
    module.exports = { "default": assign$1, __esModule: true };
    });

    var _Object$assign = unwrapExports(assign);

    var classCallCheck = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    });

    var _classCallCheck = unwrapExports(classCallCheck);

    var _wksExt = createCommonjsModule(function (module, exports) {
    exports.f = _wks;
    });

    var iterator$2 = createCommonjsModule(function (module) {
    module.exports = _wksExt.f('iterator');
    });

    var iterator = createCommonjsModule(function (module) {
    module.exports = { "default": iterator$2, __esModule: true };
    });

    var _meta = createCommonjsModule(function (module) {
    var META     = _uid('meta')
      , isObject = _isObject
      , has      = _has
      , setDesc  = _objectDp.f
      , id       = 0;
    var isExtensible = Object.isExtensible || function(){
      return true;
    };
    var FREEZE = !_fails(function(){
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it){
      setDesc(it, META, {value: {
        i: 'O' + ++id, // object ID
        w: {}          // weak collections IDs
      }});
    };
    var fastKey = function(it, create){
      // return primitive with prefix
      if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if(!has(it, META)){
        // can't set metadata to uncaught frozen object
        if(!isExtensible(it))return 'F';
        // not necessary to add metadata
        if(!create)return 'E';
        // add missing metadata
        setMeta(it);
      // return object ID
      } return it[META].i;
    };
    var getWeak = function(it, create){
      if(!has(it, META)){
        // can't set metadata to uncaught frozen object
        if(!isExtensible(it))return true;
        // not necessary to add metadata
        if(!create)return false;
        // add missing metadata
        setMeta(it);
      // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function(it){
      if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY:      META,
      NEED:     false,
      fastKey:  fastKey,
      getWeak:  getWeak,
      onFreeze: onFreeze
    };
    });

    var _wksDefine = createCommonjsModule(function (module) {
    var global         = _global
      , core           = _core
      , LIBRARY        = _library
      , wksExt         = _wksExt
      , defineProperty = _objectDp.f;
    module.exports = function(name){
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
    };
    });

    var _keyof = createCommonjsModule(function (module) {
    var getKeys   = _objectKeys
      , toIObject = _toIobject;
    module.exports = function(object, el){
      var O      = toIObject(object)
        , keys   = getKeys(O)
        , length = keys.length
        , index  = 0
        , key;
      while(length > index)if(O[key = keys[index++]] === el)return key;
    };
    });

    var _enumKeys = createCommonjsModule(function (module) {
    // all enumerable object keys, includes symbols
    var getKeys = _objectKeys
      , gOPS    = _objectGops
      , pIE     = _objectPie;
    module.exports = function(it){
      var result     = getKeys(it)
        , getSymbols = gOPS.f;
      if(getSymbols){
        var symbols = getSymbols(it)
          , isEnum  = pIE.f
          , i       = 0
          , key;
        while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
      } return result;
    };
    });

    var _isArray = createCommonjsModule(function (module) {
    // 7.2.2 IsArray(argument)
    var cof = _cof;
    module.exports = Array.isArray || function isArray(arg){
      return cof(arg) == 'Array';
    };
    });

    var _objectGopn = createCommonjsModule(function (module, exports) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys      = _objectKeysInternal
      , hiddenKeys = _enumBugKeys.concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
      return $keys(O, hiddenKeys);
    };
    });

    var _objectGopnExt = createCommonjsModule(function (module) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = _toIobject
      , gOPN      = _objectGopn.f
      , toString  = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function(it){
      try {
        return gOPN(it);
      } catch(e){
        return windowNames.slice();
      }
    };

    module.exports.f = function getOwnPropertyNames(it){
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };
    });

    var _objectGopd = createCommonjsModule(function (module, exports) {
    var pIE            = _objectPie
      , createDesc     = _propertyDesc
      , toIObject      = _toIobject
      , toPrimitive    = _toPrimitive
      , has            = _has
      , IE8_DOM_DEFINE = _ie8DomDefine
      , gOPD           = Object.getOwnPropertyDescriptor;

    exports.f = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P){
      O = toIObject(O);
      P = toPrimitive(P, true);
      if(IE8_DOM_DEFINE)try {
        return gOPD(O, P);
      } catch(e){ /* empty */ }
      if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
    };
    });

    var es6_symbol = createCommonjsModule(function (module) {
    'use strict';
    // ECMAScript 6 symbols shim
    var global         = _global
      , has            = _has
      , DESCRIPTORS    = _descriptors
      , $export        = _export
      , redefine       = _redefine
      , META           = _meta.KEY
      , $fails         = _fails
      , shared         = _shared
      , setToStringTag = _setToStringTag
      , uid            = _uid
      , wks            = _wks
      , wksExt         = _wksExt
      , wksDefine      = _wksDefine
      , keyOf          = _keyof
      , enumKeys       = _enumKeys
      , isArray        = _isArray
      , anObject       = _anObject
      , toIObject      = _toIobject
      , toPrimitive    = _toPrimitive
      , createDesc     = _propertyDesc
      , _create        = _objectCreate
      , gOPNExt        = _objectGopnExt
      , $GOPD          = _objectGopd
      , $DP            = _objectDp
      , $keys          = _objectKeys
      , gOPD           = $GOPD.f
      , dP             = $DP.f
      , gOPN           = gOPNExt.f
      , $Symbol        = global.Symbol
      , $JSON          = global.JSON
      , _stringify     = $JSON && $JSON.stringify
      , PROTOTYPE      = 'prototype'
      , HIDDEN         = wks('_hidden')
      , TO_PRIMITIVE   = wks('toPrimitive')
      , isEnum         = {}.propertyIsEnumerable
      , SymbolRegistry = shared('symbol-registry')
      , AllSymbols     = shared('symbols')
      , OPSymbols      = shared('op-symbols')
      , ObjectProto    = Object[PROTOTYPE]
      , USE_NATIVE     = typeof $Symbol == 'function'
      , QObject        = global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = DESCRIPTORS && $fails(function(){
      return _create(dP({}, 'a', {
        get: function(){ return dP(this, 'a', {value: 7}).a; }
      })).a != 7;
    }) ? function(it, key, D){
      var protoDesc = gOPD(ObjectProto, key);
      if(protoDesc)delete ObjectProto[key];
      dP(it, key, D);
      if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
    } : dP;

    var wrap = function(tag){
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
      return typeof it == 'symbol';
    } : function(it){
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D){
      if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if(has(AllSymbols, key)){
        if(!D.enumerable){
          if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
          D = _create(D, {enumerable: createDesc(0, false)});
        } return setSymbolDesc(it, key, D);
      } return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P){
      anObject(it);
      var keys = enumKeys(P = toIObject(P))
        , i    = 0
        , l = keys.length
        , key;
      while(l > i)$defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P){
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key){
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
      it  = toIObject(it);
      key = toPrimitive(key, true);
      if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
      var D = gOPD(it, key);
      if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it){
      var names  = gOPN(toIObject(it))
        , result = []
        , i      = 0
        , key;
      while(names.length > i){
        if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
      } return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
      var IS_OP  = it === ObjectProto
        , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
        , result = []
        , i      = 0
        , key;
      while(names.length > i){
        if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
      } return result;
    };

    // 19.4.1.1 Symbol([description])
    if(!USE_NATIVE){
      $Symbol = function Symbol(){
        if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function(value){
          if(this === ObjectProto)$set.call(OPSymbols, value);
          if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], 'toString', function toString(){
        return this._k;
      });

      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f   = $defineProperty;
      _objectGopn.f = gOPNExt.f = $getOwnPropertyNames;
      _objectPie.f  = $propertyIsEnumerable;
      _objectGops.f = $getOwnPropertySymbols;

      if(DESCRIPTORS && !_library){
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      wksExt.f = function(name){
        return wrap(wks(name));
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

    for(var symbols = (
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

    for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

    $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function(key){
        return has(SymbolRegistry, key += '')
          ? SymbolRegistry[key]
          : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(key){
        if(isSymbol(key))return keyOf(SymbolRegistry, key);
        throw TypeError(key + ' is not a symbol!');
      },
      useSetter: function(){ setter = true; },
      useSimple: function(){ setter = false; }
    });

    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it){
        if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
        var args = [it]
          , i    = 1
          , replacer, $replacer;
        while(arguments.length > i)args.push(arguments[i++]);
        replacer = args[1];
        if(typeof replacer == 'function')$replacer = replacer;
        if($replacer || !isArray(replacer))replacer = function(key, value){
          if($replacer)value = $replacer.call(this, key, value);
          if(!isSymbol(value))return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });

    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);
    });

    var es7_symbol_asyncIterator = createCommonjsModule(function (module) {
    _wksDefine('asyncIterator');
    });

    var es7_symbol_observable = createCommonjsModule(function (module) {
    _wksDefine('observable');
    });

    var index$1 = createCommonjsModule(function (module) {
    module.exports = _core.Symbol;
    });

    var symbol = createCommonjsModule(function (module) {
    module.exports = { "default": index$1, __esModule: true };
    });

    var _typeof = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    var _iterator = iterator;

    var _iterator2 = _interopRequireDefault(_iterator);

    var _symbol = symbol;

    var _symbol2 = _interopRequireDefault(_symbol);

    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
    });

    var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    var _typeof2 = _typeof;

    var _typeof3 = _interopRequireDefault(_typeof2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
    };
    });

    var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

    var _setProto = createCommonjsModule(function (module) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var isObject = _isObject
      , anObject = _anObject;
    var check = function(O, proto){
      anObject(O);
      if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function(test, buggy, set){
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch(e){ buggy = true; }
          return function setPrototypeOf(O, proto){
            check(O, proto);
            if(buggy)O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };
    });

    var es6_object_setPrototypeOf = createCommonjsModule(function (module) {
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = _export;
    $export($export.S, 'Object', {setPrototypeOf: _setProto.set});
    });

    var setPrototypeOf$2 = createCommonjsModule(function (module) {
    module.exports = _core.Object.setPrototypeOf;
    });

    var setPrototypeOf = createCommonjsModule(function (module) {
    module.exports = { "default": setPrototypeOf$2, __esModule: true };
    });

    var es6_object_create = createCommonjsModule(function (module) {
    var $export = _export;
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', {create: _objectCreate});
    });

    var create$2 = createCommonjsModule(function (module) {
    var $Object = _core.Object;
    module.exports = function create(P, D){
      return $Object.create(P, D);
    };
    });

    var create = createCommonjsModule(function (module) {
    module.exports = { "default": create$2, __esModule: true };
    });

    var inherits = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    var _setPrototypeOf = setPrototypeOf;

    var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

    var _create = create;

    var _create2 = _interopRequireDefault(_create);

    var _typeof2 = _typeof;

    var _typeof3 = _interopRequireDefault(_typeof2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }

      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
    });

    var _inherits = unwrapExports(inherits);

    var index$3 = createCommonjsModule(function (module) {
    'use strict';

    var has = Object.prototype.hasOwnProperty
      , prefix = '~';

    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @api private
     */
    function Events() {}

    //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //
    if (Object.create) {
      Events.prototype = Object.create(null);

      //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //
      if (!new Events().__proto__) prefix = false;
    }

    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {Mixed} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @api private
     */
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @api public
     */
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @api public
     */
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = []
        , events
        , name;

      if (this._eventsCount === 0) return names;

      for (name in (events = this._events)) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };

    /**
     * Return the listeners registered for a given event.
     *
     * @param {String|Symbol} event The event name.
     * @param {Boolean} exists Only check if there are listeners.
     * @returns {Array|Boolean}
     * @api public
     */
    EventEmitter.prototype.listeners = function listeners(event, exists) {
      var evt = prefix ? prefix + event : event
        , available = this._events[evt];

      if (exists) return !!available;
      if (!available) return [];
      if (available.fn) return [available.fn];

      for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
        ee[i] = available[i].fn;
      }

      return ee;
    };

    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {String|Symbol} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @api public
     */
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return false;

      var listeners = this._events[evt]
        , len = arguments.length
        , args
        , i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1: return listeners.fn.call(listeners.context), true;
          case 2: return listeners.fn.call(listeners.context, a1), true;
          case 3: return listeners.fn.call(listeners.context, a1, a2), true;
          case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len -1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length
          , j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1: listeners[i].fn.call(listeners[i].context); break;
            case 2: listeners[i].fn.call(listeners[i].context, a1); break;
            case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
            case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
            default:
              if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
                args[j - 1] = arguments[j];
              }

              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };

    /**
     * Add a listener for a given event.
     *
     * @param {String|Symbol} event The event name.
     * @param {Function} fn The listener function.
     * @param {Mixed} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @api public
     */
    EventEmitter.prototype.on = function on(event, fn, context) {
      var listener = new EE(fn, context || this)
        , evt = prefix ? prefix + event : event;

      if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
      else if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [this._events[evt], listener];

      return this;
    };

    /**
     * Add a one-time listener for a given event.
     *
     * @param {String|Symbol} event The event name.
     * @param {Function} fn The listener function.
     * @param {Mixed} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @api public
     */
    EventEmitter.prototype.once = function once(event, fn, context) {
      var listener = new EE(fn, context || this, true)
        , evt = prefix ? prefix + event : event;

      if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
      else if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [this._events[evt], listener];

      return this;
    };

    /**
     * Remove the listeners of a given event.
     *
     * @param {String|Symbol} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {Mixed} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @api public
     */
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return this;
      if (!fn) {
        if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (
             listeners.fn === fn
          && (!once || listeners.once)
          && (!context || listeners.context === context)
        ) {
          if (--this._eventsCount === 0) this._events = new Events();
          else delete this._events[evt];
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (
               listeners[i].fn !== fn
            || (once && !listeners[i].once)
            || (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else if (--this._eventsCount === 0) this._events = new Events();
        else delete this._events[evt];
      }

      return this;
    };

    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {String|Symbol} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @api public
     */
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) {
          if (--this._eventsCount === 0) this._events = new Events();
          else delete this._events[evt];
        }
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    };

    //
    // Alias methods names because people roll like that.
    //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    //
    // This function doesn't apply anymore.
    //
    EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
      return this;
    };

    //
    // Expose the prefix.
    //
    EventEmitter.prefixed = prefix;

    //
    // Allow `EventEmitter` to be imported as module namespace.
    //
    EventEmitter.EventEmitter = EventEmitter;

    //
    // Expose the module.
    //
    if ('undefined' !== typeof module) {
      module.exports = EventEmitter;
    }
    });

    var es6_object_defineProperty = createCommonjsModule(function (module) {
    var $export = _export;
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !_descriptors, 'Object', {defineProperty: _objectDp.f});
    });

    var defineProperty$2 = createCommonjsModule(function (module) {
    var $Object = _core.Object;
    module.exports = function defineProperty(it, key, desc){
      return $Object.defineProperty(it, key, desc);
    };
    });

    var defineProperty = createCommonjsModule(function (module) {
    module.exports = { "default": defineProperty$2, __esModule: true };
    });

    var createClass = createCommonjsModule(function (module, exports) {
    "use strict";

    exports.__esModule = true;

    var _defineProperty = defineProperty;

    var _defineProperty2 = _interopRequireDefault(_defineProperty);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    });

    var _createClass = unwrapExports(createClass);

    var stateMachine = createCommonjsModule(function (module, exports) {
    /*

      Javascript State Machine Library - https://github.com/jakesgordon/javascript-state-machine

      Copyright (c) 2012, 2013, 2014, 2015, Jake Gordon and contributors
      Released under the MIT license - https://github.com/jakesgordon/javascript-state-machine/blob/master/LICENSE

    */

    (function () {

      var StateMachine = {

        //---------------------------------------------------------------------------

        VERSION: "2.4.0",

        //---------------------------------------------------------------------------

        Result: {
          SUCCEEDED:    1, // the event transitioned successfully from one state to another
          NOTRANSITION: 2, // the event was successfull but no state transition was necessary
          CANCELLED:    3, // the event was cancelled by the caller in a beforeEvent callback
          PENDING:      4  // the event is asynchronous and the caller is in control of when the transition occurs
        },

        Error: {
          INVALID_TRANSITION: 100, // caller tried to fire an event that was innapropriate in the current state
          PENDING_TRANSITION: 200, // caller tried to fire an event while an async transition was still pending
          INVALID_CALLBACK:   300 // caller provided callback function threw an exception
        },

        WILDCARD: '*',
        ASYNC: 'async',

        //---------------------------------------------------------------------------

        create: function(cfg, target) {

          var initial      = (typeof cfg.initial == 'string') ? { state: cfg.initial } : cfg.initial; // allow for a simple string, or an object with { state: 'foo', event: 'setup', defer: true|false }
          var terminal     = cfg.terminal || cfg['final'];
          var fsm          = target || cfg.target  || {};
          var events       = cfg.events || [];
          var callbacks    = cfg.callbacks || {};
          var map          = {}; // track state transitions allowed for an event { event: { from: [ to ] } }
          var transitions  = {}; // track events allowed from a state            { state: [ event ] }

          var add = function(e) {
            var from = Array.isArray(e.from) ? e.from : (e.from ? [e.from] : [StateMachine.WILDCARD]); // allow 'wildcard' transition if 'from' is not specified
            map[e.name] = map[e.name] || {};
            for (var n = 0 ; n < from.length ; n++) {
              transitions[from[n]] = transitions[from[n]] || [];
              transitions[from[n]].push(e.name);

              map[e.name][from[n]] = e.to || from[n]; // allow no-op transition if 'to' is not specified
            }
            if (e.to)
              transitions[e.to] = transitions[e.to] || [];
          };

          if (initial) {
            initial.event = initial.event || 'startup';
            add({ name: initial.event, from: 'none', to: initial.state });
          }

          for(var n = 0 ; n < events.length ; n++)
            add(events[n]);

          for(var name in map) {
            if (map.hasOwnProperty(name))
              fsm[name] = StateMachine.buildEvent(name, map[name]);
          }

          for(var name in callbacks) {
            if (callbacks.hasOwnProperty(name))
              fsm[name] = callbacks[name];
          }

          fsm.current     = 'none';
          fsm.is          = function(state) { return Array.isArray(state) ? (state.indexOf(this.current) >= 0) : (this.current === state); };
          fsm.can         = function(event) { return !this.transition && (map[event] !== undefined) && (map[event].hasOwnProperty(this.current) || map[event].hasOwnProperty(StateMachine.WILDCARD)); };
          fsm.cannot      = function(event) { return !this.can(event); };
          fsm.transitions = function()      { return (transitions[this.current] || []).concat(transitions[StateMachine.WILDCARD] || []); };
          fsm.isFinished  = function()      { return this.is(terminal); };
          fsm.error       = cfg.error || function(name, from, to, args, error, msg, e) { throw e || msg; }; // default behavior when something unexpected happens is to throw an exception, but caller can override this behavior if desired (see github issue #3 and #17)
          fsm.states      = function() { return Object.keys(transitions).sort() };

          if (initial && !initial.defer)
            fsm[initial.event]();

          return fsm;

        },

        //===========================================================================

        doCallback: function(fsm, func, name, from, to, args) {
          if (func) {
            try {
              return func.apply(fsm, [name, from, to].concat(args));
            }
            catch(e) {
              return fsm.error(name, from, to, args, StateMachine.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", e);
            }
          }
        },

        beforeAnyEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbeforeevent'],                       name, from, to, args); },
        afterAnyEvent:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafterevent'] || fsm['onevent'],      name, from, to, args); },
        leaveAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleavestate'],                        name, from, to, args); },
        enterAnyState:   function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenterstate'] || fsm['onstate'],      name, from, to, args); },
        changeState:     function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onchangestate'],                       name, from, to, args); },

        beforeThisEvent: function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onbefore' + name],                     name, from, to, args); },
        afterThisEvent:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onafter'  + name] || fsm['on' + name], name, from, to, args); },
        leaveThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onleave'  + from],                     name, from, to, args); },
        enterThisState:  function(fsm, name, from, to, args) { return StateMachine.doCallback(fsm, fsm['onenter'  + to]   || fsm['on' + to],   name, from, to, args); },

        beforeEvent: function(fsm, name, from, to, args) {
          if ((false === StateMachine.beforeThisEvent(fsm, name, from, to, args)) ||
              (false === StateMachine.beforeAnyEvent( fsm, name, from, to, args)))
            return false;
        },

        afterEvent: function(fsm, name, from, to, args) {
          StateMachine.afterThisEvent(fsm, name, from, to, args);
          StateMachine.afterAnyEvent( fsm, name, from, to, args);
        },

        leaveState: function(fsm, name, from, to, args) {
          var specific = StateMachine.leaveThisState(fsm, name, from, to, args),
              general  = StateMachine.leaveAnyState( fsm, name, from, to, args);
          if ((false === specific) || (false === general))
            return false;
          else if ((StateMachine.ASYNC === specific) || (StateMachine.ASYNC === general))
            return StateMachine.ASYNC;
        },

        enterState: function(fsm, name, from, to, args) {
          StateMachine.enterThisState(fsm, name, from, to, args);
          StateMachine.enterAnyState( fsm, name, from, to, args);
        },

        //===========================================================================

        buildEvent: function(name, map) {
          return function() {

            var from  = this.current;
            var to    = map[from] || (map[StateMachine.WILDCARD] != StateMachine.WILDCARD ? map[StateMachine.WILDCARD] : from) || from;
            var args  = Array.prototype.slice.call(arguments); // turn arguments into pure array

            if (this.transition)
              return this.error(name, from, to, args, StateMachine.Error.PENDING_TRANSITION, "event " + name + " inappropriate because previous transition did not complete");

            if (this.cannot(name))
              return this.error(name, from, to, args, StateMachine.Error.INVALID_TRANSITION, "event " + name + " inappropriate in current state " + this.current);

            if (false === StateMachine.beforeEvent(this, name, from, to, args))
              return StateMachine.Result.CANCELLED;

            if (from === to) {
              StateMachine.afterEvent(this, name, from, to, args);
              return StateMachine.Result.NOTRANSITION;
            }

            // prepare a transition method for use EITHER lower down, or by caller if they want an async transition (indicated by an ASYNC return value from leaveState)
            var fsm = this;
            this.transition = function() {
              fsm.transition = null; // this method should only ever be called once
              fsm.current = to;
              StateMachine.enterState( fsm, name, from, to, args);
              StateMachine.changeState(fsm, name, from, to, args);
              StateMachine.afterEvent( fsm, name, from, to, args);
              return StateMachine.Result.SUCCEEDED;
            };
            this.transition.cancel = function() { // provide a way for caller to cancel async transition if desired (issue #22)
              fsm.transition = null;
              StateMachine.afterEvent(fsm, name, from, to, args);
            };

            var leave = StateMachine.leaveState(this, name, from, to, args);
            if (false === leave) {
              this.transition = null;
              return StateMachine.Result.CANCELLED;
            }
            else if (StateMachine.ASYNC === leave) {
              return StateMachine.Result.PENDING;
            }
            else {
              if (this.transition) // need to check in case user manually called transition() but forgot to return StateMachine.ASYNC
                return this.transition();
            }

          };
        }

      }; // StateMachine

      //===========================================================================

      //======
      // NODE
      //======
      if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = StateMachine;
        }
        exports.StateMachine = StateMachine;
      }
      //============
      // AMD/REQUIRE
      //============
      else if (typeof define === 'function' && define.amd) {
        define(function(require) { return StateMachine; });
      }
      //========
      // BROWSER
      //========
      else if (typeof window !== 'undefined') {
        window.StateMachine = StateMachine;
      }
      //===========
      // WEB WORKER
      //===========
      else if (typeof self !== 'undefined') {
        self.StateMachine = StateMachine;
      }

    }());
    });

    var createCallStateMachine = (function () {
      return stateMachine.create({
        initial: 'calling',
        events: [{
          name: 'connect',
          from: 'calling',
          to: 'connected'
        }, {
          name: 'close',
          from: 'connected',
          to: 'closed'
        }, {
          name: 'cancel',
          from: 'calling',
          to: 'canceled'
        }, {
          name: 'refuse',
          from: 'calling',
          to: 'refused'
        }]
      });
    });

    var inherit$1 = createCommonjsModule(function (module, exports) {
    /**
     * @module inherit
     * @version 2.2.6
     * @author Filatov Dmitry <dfilatov@yandex-team.ru>
     * @description This module provides some syntax sugar for "class" declarations, constructors, mixins, "super" calls and static members.
     */

    (function(global) {

    var hasIntrospection = (function(){return '_';}).toString().indexOf('_') > -1,
        emptyBase = function() {},
        hasOwnProperty = Object.prototype.hasOwnProperty,
        objCreate = Object.create || function(ptp) {
            var inheritance = function() {};
            inheritance.prototype = ptp;
            return new inheritance();
        },
        objKeys = Object.keys || function(obj) {
            var res = [];
            for(var i in obj) {
                hasOwnProperty.call(obj, i) && res.push(i);
            }
            return res;
        },
        extend = function(o1, o2) {
            for(var i in o2) {
                hasOwnProperty.call(o2, i) && (o1[i] = o2[i]);
            }

            return o1;
        },
        toStr = Object.prototype.toString,
        isArray = Array.isArray || function(obj) {
            return toStr.call(obj) === '[object Array]';
        },
        isFunction = function(obj) {
            return toStr.call(obj) === '[object Function]';
        },
        noOp = function() {},
        needCheckProps = true,
        testPropObj = { toString : '' };

    for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
        testPropObj.hasOwnProperty(i) && (needCheckProps = false);
    }

    var specProps = needCheckProps? ['toString', 'valueOf'] : null;

    function getPropList(obj) {
        var res = objKeys(obj);
        if(needCheckProps) {
            var specProp, i = 0;
            while(specProp = specProps[i++]) {
                obj.hasOwnProperty(specProp) && res.push(specProp);
            }
        }

        return res;
    }

    function override(base, res, add) {
        var addList = getPropList(add),
            j = 0, len = addList.length,
            name, prop;
        while(j < len) {
            if((name = addList[j++]) === '__self') {
                continue;
            }
            prop = add[name];
            if(isFunction(prop) &&
                    (!prop.prototype || !prop.prototype.__self) && // check to prevent wrapping of "class" functions
                    (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {
                res[name] = (function(name, prop) {
                    var baseMethod = base[name]?
                            base[name] :
                            name === '__constructor'? // case of inheritance from plain function
                                res.__self.__parent :
                                noOp,
                        result = function() {
                            var baseSaved = this.__base;

                            this.__base = result.__base;
                            var res = prop.apply(this, arguments);
                            this.__base = baseSaved;

                            return res;
                        };
                    result.__base = baseMethod;

                    return result;
                })(name, prop);
            } else {
                res[name] = prop;
            }
        }
    }

    function applyMixins(mixins, res) {
        var i = 1, mixin;
        while(mixin = mixins[i++]) {
            res?
                isFunction(mixin)?
                    inherit.self(res, mixin.prototype, mixin) :
                    inherit.self(res, mixin) :
                res = isFunction(mixin)?
                    inherit(mixins[0], mixin.prototype, mixin) :
                    inherit(mixins[0], mixin);
        }
        return res || mixins[0];
    }

    /**
    * Creates class
    * @exports
    * @param {Function|Array} [baseClass|baseClassAndMixins] class (or class and mixins) to inherit from
    * @param {Object} prototypeFields
    * @param {Object} [staticFields]
    * @returns {Function} class
    */
    function inherit() {
        var args = arguments,
            withMixins = isArray(args[0]),
            hasBase = withMixins || isFunction(args[0]),
            base = hasBase? withMixins? applyMixins(args[0]) : args[0] : emptyBase,
            props = args[hasBase? 1 : 0] || {},
            staticProps = args[hasBase? 2 : 1],
            res = props.__constructor || (hasBase && base.prototype && base.prototype.__constructor)?
                function() {
                    return this.__constructor.apply(this, arguments);
                } :
                hasBase?
                    function() {
                        return base.apply(this, arguments);
                    } :
                    function() {};

        if(!hasBase) {
            res.prototype = props;
            res.prototype.__self = res.prototype.constructor = res;
            return extend(res, staticProps);
        }

        extend(res, base);

        res.__parent = base;

        var basePtp = base.prototype,
            resPtp = res.prototype = objCreate(basePtp);

        resPtp.__self = resPtp.constructor = res;

        props && override(basePtp, resPtp, props);
        staticProps && override(base, res, staticProps);

        return res;
    }

    inherit.self = function() {
        var args = arguments,
            withMixins = isArray(args[0]),
            base = withMixins? applyMixins(args[0], args[0][0]) : args[0],
            props = args[1],
            staticProps = args[2],
            basePtp = base.prototype;

        props && override(basePtp, basePtp, props);
        staticProps && override(base, base, staticProps);

        return base;
    };

    var defineAsGlobal = true;
    if(typeof exports === 'object') {
        module.exports = inherit;
        defineAsGlobal = false;
    }

    if(typeof modules === 'object' && typeof modules.define === 'function') {
        modules.define('inherit', function(provide) {
            provide(inherit);
        });
        defineAsGlobal = false;
    }

    if(typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = inherit;
        });
        defineAsGlobal = false;
    }

    defineAsGlobal && (global.inherit = inherit);

    })(commonjsGlobal);
    });

    var index$4 = createCommonjsModule(function (module) {
    /*!
     * node-inherit
     * Copyright(c) 2011 Dmitry Filatov <dfilatov@yandex-team.ru>
     * MIT Licensed
     */

    module.exports = inherit$1;
    });

    /* eslint-disable import/no-unresolved */
    if (!leancloudRealtime.TypedMessage) {
      throw new Error('LeanCloud Realtime SDK not installed');
    }

    // use dynamic class inherit helper instead of ES class syntex
    // to prevent TypedMessage from being included in the bundler
    var Signaling = index$4(leancloudRealtime.TypedMessage, {
      __constructor: function __constructor(payload) {
        this.__base();
        this.payload = payload;
        this.setTransient(true);
      }
    });

    leancloudRealtime.messageField('payload')(Signaling);

    var _dec;
    var _class;

    var Answer = (_dec = leancloudRealtime.messageType(-102), _dec(_class = function (_Signaling) {
      _inherits(Answer, _Signaling);

      function Answer() {
        _classCallCheck(this, Answer);

        return _possibleConstructorReturn(this, _Signaling.apply(this, arguments));
      }

      return Answer;
    }(Signaling)) || _class);

    var _dec$1;
    var _class$1;

    var ICECandidate = (_dec$1 = leancloudRealtime.messageType(-103), _dec$1(_class$1 = function (_Signaling) {
      _inherits(ICECandidate, _Signaling);

      function ICECandidate() {
        _classCallCheck(this, ICECandidate);

        return _possibleConstructorReturn(this, _Signaling.apply(this, arguments));
      }

      return ICECandidate;
    }(Signaling)) || _class$1);

    var _dec$2;
    var _class$2;

    var Refusal = (_dec$2 = leancloudRealtime.messageType(-104), _dec$2(_class$2 = function (_Signaling) {
      _inherits(Refusal, _Signaling);

      function Refusal() {
        _classCallCheck(this, Refusal);

        return _possibleConstructorReturn(this, _Signaling.apply(this, arguments));
      }

      return Refusal;
    }(Signaling)) || _class$2);

    var _dec$3;
    var _class$3;

    var Cancelation = (_dec$3 = leancloudRealtime.messageType(-105), _dec$3(_class$3 = function (_Signaling) {
      _inherits(Cancelation, _Signaling);

      function Cancelation() {
        _classCallCheck(this, Cancelation);

        return _possibleConstructorReturn(this, _Signaling.apply(this, arguments));
      }

      return Cancelation;
    }(Signaling)) || _class$3);

    var Call = function (_EventEmitter) {
      _inherits(Call, _EventEmitter);

      /**
       * {@link IncomingCall} 与 {@link OutgoingCall} 的基类
       * @abstract
       */
      function Call(conversation, RTCConfiguration) {
        _classCallCheck(this, Call);

        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this._setConversation(conversation);
        _this._peerConnection = _this._createPeerConnection(RTCConfiguration);
        _this._call = createCallStateMachine();
        _this._promises = {};
        var streamReady = new _Promise(function (resolve) {
          _this._promises.resolveStreamReady = resolve;
        });
        var accept = new _Promise(function (resolve) {
          _this._promises.resolveAccept = resolve;
        });
        _Promise.all([streamReady, accept]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              stream = _ref2[0];

          if (_this._call.can('connect')) {
            _this._call.connect();
            /**
             * 通话连接成功
             * @event Call#connect
             * @param {MediaStream} stram 对方的媒体流
             */
            _this.emit('connect', stream);
          }
        });
        return _this;
      }

      /**
       * 当前通话状态
       * （<code>calling</code>, <code>connected</code>, <code>closed</code>,
       * <code>refused</code>, <code>canceled</code>）
       * @type {string}
       * @readonly
       */


      /**
       * 结束通话
       * @return {Promise}
       */
      Call.prototype.close = function close() {
        var _this2 = this;

        return _Promise.resolve().then(function () {
          _this2._call.close();
          _this2._destroyPeerConnection();
          _this2._peerConnection.close();
          _this2._destroy();
        });
      };

      Call.prototype._handleCloseEvent = function _handleCloseEvent() {
        if (this._call.can('close')) {
          this.close();
          /**
           * 通话结束，可能是对方挂断或网络中断
           * @event Call#close
           */
          this.emit('close');
        }
      };

      Call.prototype._setConversation = function _setConversation(conversation) {
        if (this._conversation) {
          this._conversation.off('message');
        }
        if (conversation) {
          this._conversation = conversation;
          conversation.on('message', this._handleMessage.bind(this));
        }
      };

      Call.prototype._destroy = function _destroy() {
        this._conversation.off('message');
      };

      Call.prototype._createPeerConnection = function _createPeerConnection(RTCConfiguration) {
        var connection = new RTCPeerConnection(RTCConfiguration);
        connection.onicecandidate = this._handleICECandidateEvent.bind(this);
        connection.onaddstream = this._handleAddStreamEvent.bind(this);
        connection.onnremovestream = this._handleRemoveStreamEvent.bind(this);
        connection.oniceconnectionstatechange = this._handleICEConnectionStateChangeEvent.bind(this);
        connection.onsignalingstatechange = this._handleSignalingStateChangeEvent.bind(this);
        return connection;
      };

      Call.prototype._destroyPeerConnection = function _destroyPeerConnection() {
        var connection = this._peerConnection;
        delete connection.onaddstream;
        delete connection.onremovestream;
        delete connection.onnicecandidate;
        delete connection.oniceconnectionstatechange;
        delete connection.onsignalingstatechange;
      };

      Call.prototype._handleMessage = function _handleMessage(message) {
        if (message instanceof Answer) {
          return this._handleAnswer(message);
        }
        if (message instanceof Refusal) {
          return this._handleRefusal();
        }
        if (message instanceof Cancelation) {
          return this._handleCancelation();
        }
        if (message instanceof ICECandidate) {
          return this._handleICECandidate(message);
        }
        return false;
      };

      Call.prototype._handleICECandidate = function _handleICECandidate(message) {
        var candidate = new RTCIceCandidate(message.payload);
        if (this._peerConnection) {
          this._peerConnection.addIceCandidate(candidate).catch(console.error.bind(console));
        }
      };

      Call.prototype._handleICECandidateEvent = function _handleICECandidateEvent(event) {
        if (event.candidate && this._conversation) {
          return this._conversation.send(new ICECandidate(event.candidate)).catch(console.error.bind(console));
        }
        return false;
      };

      Call.prototype._handleAddStreamEvent = function _handleAddStreamEvent(event) {
        this._promises.resolveStreamReady(event.stream);
      };

      Call.prototype._handleRemoveStreamEvent = function _handleRemoveStreamEvent() {
        this._handleCloseEvent();
      };

      Call.prototype._handleICEConnectionStateChangeEvent = function _handleICEConnectionStateChangeEvent() {
        switch (this._peerConnection.iceConnectionState) {
          case 'closed':
          case 'failed':
          case 'disconnected':
            this._handleCloseEvent();
            break;
          default:
        }
      };

      Call.prototype._handleSignalingStateChangeEvent = function _handleSignalingStateChangeEvent() {
        switch (this._peerConnection.signalingState) {
          case 'closed':
            this._handleCloseEvent();
            break;
          default:
        }
      };
      /* eslint-disable class-methods-use-this */


      Call.prototype._handleAnswer = function _handleAnswer() {
        throw new Error('not implemented');
      };

      Call.prototype._handleRefusal = function _handleRefusal() {
        throw new Error('not implemented');
      };

      Call.prototype._handleCancelation = function _handleCancelation() {
        throw new Error('not implemented');
      };
      /* eslint-enable class-methods-use-this */


      _createClass(Call, [{
        key: 'state',
        get: function get() {
          return this._call.current;
        }
      }]);

      return Call;
    }(index$3);

    var OutgoingCall = function (_Call) {
      _inherits(OutgoingCall, _Call);

      /**
       * 呼出的通话
       * @extends Call
       */
      function OutgoingCall(to, conversation, RTCConfiguration) {
        _classCallCheck(this, OutgoingCall);

        /**
         * 呼叫目标 id
         * @type {string}
         */
        var _this = _possibleConstructorReturn(this, _Call.call(this, conversation, RTCConfiguration));

        _this.to = to;
        return _this;
      }

      OutgoingCall.prototype._handleAnswer = function _handleAnswer(answer) {
        var desc = new RTCSessionDescription(answer.payload);
        this._peerConnection.setRemoteDescription(desc);
        this._promises.resolveAccept();
      };

      OutgoingCall.prototype._handleRefusal = function _handleRefusal() {
        this._destroyPeerConnection();
        this._call.refuse();
        /**
         * 呼叫被对方拒绝
         * @event OutgoingCall#refuse
         */
        this.emit('refuse');
        this._destroy();
      };

      /**
       * 取消该次呼叫
       * @return {Promise}
       */


      OutgoingCall.prototype.cancel = function cancel() {
        var _this2 = this;

        this._call.cancel();
        return this._conversation.send(new Cancelation()).then(function () {
          return _this2._destroy();
        });
      };

      /**
       * 结束通话，如果在 <code>calling</code> 状态，则取消该次呼叫
       * @return {Promise}
       */


      OutgoingCall.prototype.close = function close() {
        if (this._call.can('cancel')) {
          return this.cancel();
        }
        return _Call.prototype.close.call(this);
      };

      return OutgoingCall;
    }(Call);

    var IncomingCall = function (_Call) {
      _inherits(IncomingCall, _Call);

      /**
       * 呼入的通话
       * @extends Call
       */
      function IncomingCall(offer, conversation, RTCConfiguration) {
        _classCallCheck(this, IncomingCall);

        /**
         * 呼叫者 id
         * @type {string}
         */
        var _this = _possibleConstructorReturn(this, _Call.call(this, conversation, RTCConfiguration));

        _this.from = offer.from;
        var desc = new RTCSessionDescription(offer.payload);
        _this._handleOfferPromise = _this._peerConnection.setRemoteDescription(desc);
        return _this;
      }

      /**
       * 接受该呼入通话
       * @param  {MediaStream} stream 本地流媒体，参见 {@link https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API MediaStream}
       * @return {Promise}
       */


      IncomingCall.prototype.accept = function accept(stream) {
        var _this2 = this;

        if (!stream) {
          throw new TypeError('a MediaStream instance is required to accept a call');
        }
        return this._handleOfferPromise.then(function () {
          return _this2._peerConnection.addStream(stream);
        }).then(function () {
          return _this2._peerConnection.createAnswer();
        }).then(function (answer) {
          return _this2._peerConnection.setLocalDescription(answer);
        }).then(function () {
          return _this2._conversation.send(new Answer(_this2._peerConnection.localDescription));
        }).then(function () {
          return _this2._promises.resolveAccept();
        });
      };
      /**
       * 拒绝该呼入通话
       * @return {Promise}
       */


      IncomingCall.prototype.refuse = function refuse() {
        var _this3 = this;

        return this._conversation.send(new Refusal()).then(function () {
          _this3._call.refuse();
          _this3._destroy();
        });
      };

      IncomingCall.prototype._handleCancelation = function _handleCancelation() {
        this._call.cancel();
        /**
         * 呼叫被对方取消
         * @event IncomingCall#cancel
         */
        this.emit('cancel');
        this._destroy();
      };

      return IncomingCall;
    }(Call);

    var _dec$4;
    var _class$4;

    var Offer = (_dec$4 = leancloudRealtime.messageType(-101), _dec$4(_class$4 = function (_Signaling) {
      _inherits(Offer, _Signaling);

      function Offer() {
        _classCallCheck(this, Offer);

        return _possibleConstructorReturn(this, _Signaling.apply(this, arguments));
      }

      return Offer;
    }(Signaling)) || _class$4);

    var DEFAULT_RTCCONF = {
      iceServers: [{
        urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302', 'stun:stun3.l.google.com:19302', 'stun:stun4.l.google.com:19302', 'stun:stun.ekiga.net', 'stun:stun.ideasip.com', 'stun:stun.rixtelecom.se', 'stun:stun.schlund.de', 'stun:stun.stunprotocol.org:3478', 'stun:stun.voiparound.com', 'stun:stun.voipbuster.com', 'stun:stun.voipstunt.com', 'stun:stun.voxgratia.org']
      }]
    };

    var WebRTCClient = function (_EventEmitter) {
      _inherits(WebRTCClient, _EventEmitter);

      /**
       * 无法直接实例化，请使用 {@link createWebRTCClient Realtime#createWebRTCClient} 创建新的 WebRTCClient
       */
      function WebRTCClient(id, options) {
        _classCallCheck(this, WebRTCClient);

        if (typeof id !== 'string') {
          throw new TypeError('id is not a string');
        }

        /** @type {string}*/
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this.id = id;
        _this.options = _Object$assign({
          RTCConfiguration: DEFAULT_RTCCONF
        }, options);
        return _this;
      }

      WebRTCClient.prototype._open = function _open(realtime, clientOptions) {
        var _this2 = this;

        return realtime.createIMClient(this.id, clientOptions, 'webrtc').then(function (imClient) {
          _this2._imClient = imClient;
          _this2.id = imClient.id;
          imClient.on('message', function (message, conversation) {
            if (message instanceof Offer) {
              return _this2._handleOffer(message, conversation);
            }
            return false;
          });
          /**
           * 用户在其他客户端登录，当前客户端被服务端强行下线。详见文档「单点登录」章节。
           * @event WebRTCClient#conflict
           */
          imClient.on('conflict', function () {
            for (var _len = arguments.length, payload = Array(_len), _key = 0; _key < _len; _key++) {
              payload[_key] = arguments[_key];
            }

            return _this2.emit.apply(_this2, ['conflict'].concat(payload));
          });
          return _this2;
        });
      };

      /**
       * 关闭客户端
       * @return {Promise}
       */


      WebRTCClient.prototype.close = function close() {
        return this._imClient.close();
      };

      /**
       * 呼叫另一个用户
       * @param  {string} targetId 用户 ID
       * @param  {MediaStream} stream 本地流媒体，参见 {@link https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API MediaStream}
       * @return {Promise.<OutgoingCall>} 呼出通话
       */


      WebRTCClient.prototype.call = function call(targetId, stream) {
        var _this3 = this;

        if (typeof targetId !== 'string') {
          throw new TypeError('target id is not a string');
        }
        if (!stream) {
          throw new TypeError('a MediaStream instance is required to make a call');
        }
        return this._imClient.ping([targetId]).then(function (onlineClients) {
          if (!onlineClients.length) {
            throw new Error('Call failed as ' + targetId + ' is not online');
          }
          var outgoingCall = new OutgoingCall(targetId, null, _this3.options.RTCConfiguration);
          var promise = new _Promise(function (resolve) {
            outgoingCall._peerConnection.onnegotiationneeded = resolve;
          });
          outgoingCall._peerConnection.addStream(stream);
          return promise.then(function () {
            return _Promise.all([_this3._imClient.createConversation({
              members: [targetId],
              unique: true
            }), outgoingCall._peerConnection.createOffer().then(function (localDescription) {
              outgoingCall._peerConnection.setLocalDescription(localDescription);
            })]);
          }).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                conversation = _ref2[0];

            outgoingCall._setConversation(conversation);
            return conversation.send(new Offer(outgoingCall._peerConnection.localDescription));
          }).then(function () {
            return outgoingCall;
          });
        });
      };

      WebRTCClient.prototype._handleOffer = function _handleOffer(offer, conversation) {
        var incomingCall = new IncomingCall(offer, conversation, this.options.RTCConfiguration);
        /**
         * 收到其他用户的呼叫
         * @event WebRTCClient#call
         * @param {incomingCall} incomingCall 呼入通话
         */
        this.emit('call', incomingCall);
      };

      return WebRTCClient;
    }(index$3);

    var name = "leancloud-realtime-plugin-webrtc";

    /* eslint-disable import/prefer-default-export */
    /** @module leancloud-realtime-plugin-webrtc */
    var messageClasses = [Offer, Answer, ICECandidate, Refusal, Cancelation];

    var onRealtimeCreate = function onRealtimeCreate(realtime) {
      /**
       * 创建一个 WebRTC 客户端，多次创建相同 id 的客户端会返回同一个实例。应用 WebRTC 插件后，Realtime 类会增加该实例方法。
       * WebRTC 客户端是单点登录的，既在同一时刻，同一个 id 只允许一个客户端在线，后登录的客户端会将原来在线上的客户端踢下线。
       * @function createWebRTCClient
       * @global
       * @param  {String} id 客户端 id
       * @param  {Object} [clientOptions] 详细参数 @see {@link IMClient}
       * @param  {Object} [clientOptions.RTCConfiguration] @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration RTCConfiguration}
       * @return {Promise.<WebRTCClient>}
       */
      // eslint-disable-next-line no-param-reassign
      realtime.createWebRTCClient = function (id, clientOptions) {
        return new WebRTCClient(id)._open(realtime, clientOptions);
      };
    };

    /**
     * WebRTC 插件，使用后可通过 {@link createWebRTCClient Realtime#createWebRTCClient}
     * 创建 {@link WebRTCClient} 实现音视频通话
     * @example
     * var realtime = new Realtime({
     *   appId: appId,
     *   plugins: WebRTCPlugin,
     * });
     * realtime.createWebRTCClient(id);
     */
    var WebRTCPlugin = {
      name: name,
      messageClasses: messageClasses,
      onRealtimeCreate: onRealtimeCreate
    };

    /**
     * 当前浏览器是否支持 WebRTC 的标记
     * @type {Boolean}
     */
    var isWebRTCSupported = !!(window.RTCPeerConnection && window.RTCSessionDescription && window.RTCIceCandidate);

    exports.WebRTCPlugin = WebRTCPlugin;
    exports.isWebRTCSupported = isWebRTCSupported;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=webrtc.js.map