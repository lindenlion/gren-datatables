(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var $author$project$DocBook$ShowPresidents = 0;


var _Array_length = function (array) {
  return array.length;
};

var _Array_initialize = F3(function (size, offset, func) {
  var result = new Array(size);

  for (var i = 0; i < size; i++) {
    result[i] = func(offset + i);
  }

  return result;
});

var _Array_get = F2(function (index, array) {
  var value = array.at(index);

  if (typeof value === "undefined") {
    return $gren_lang$core$Maybe$Nothing;
  }

  return $gren_lang$core$Maybe$Just(value);
});

var _Array_set = F3(function (index, value, array) {
  try {
    return array.with(index, value);
  } catch (e) {
    // assuming RangeError
    return array;
  }
});

var _Array_splice0 = F3(function (index, toRemove, array) {
  return array.toSpliced(index, toRemove);
});

var _Array_splice1 = F4(function (index, toRemove, toAdd, array) {
  return array.toSpliced(index, toRemove, toAdd);
});

var _Array_spliceN = F4(function (index, toRemove, toAdd, array) {
  return array.toSpliced(index, toRemove, ...toAdd);
});

var _Array_foldl = F3(function (func, acc, array) {
  for (var i = 0; i < array.length; i++) {
    acc = A2(func, array[i], acc);
  }

  return acc;
});

var _Array_foldr = F3(function (func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A2(func, array[i], acc);
  }

  return acc;
});

var _Array_indexedFoldl = F3(function (func, acc, array) {
  for (var i = 0; i < array.length; i++) {
    acc = A3(func, i, array[i], acc);
  }

  return acc;
});

var _Array_indexedFoldr = F3(function (func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A3(func, i, array[i], acc);
  }

  return acc;
});

var _Array_map = F2(function (func, array) {
  return array.map(func);
});

var _Array_indexedMap = F2(function (func, array) {
  return array.map(function (value, index) {
    return A2(func, index, value);
  });
});

var _Array_filter = F2(function (func, array) {
  return array.filter(func);
});

var _Array_indexedFilter = F2(function (func, array) {
  return array.filter(function (value, index) {
    return A2(func, index, value);
  });
});

var _Array_flat = function (array) {
  return array.flat();
};

var _Array_flatMap = F2(function (func, array) {
  return array.flatMap(func);
});

var _Array_slice = F3(function (from, to, array) {
  return array.slice(from, to);
});

var _Array_append = F2(function (left, right) {
  return left.concat(right);
});

var _Array_reverse = function (array) {
  return array.toReversed();
};

var _Array_findFirst = F2(function (pred, array) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ bk: i, a0: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_findLast = F2(function (pred, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ bk: i, a0: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_map2 = F3(function (fn, as, bs) {
  var result = [];
  var lowestLength = as.length < bs.length ? as.length : bs.length;

  for (var i = 0; i < lowestLength; i++) {
    result.push(A2(fn, as[i], bs[i]));
  }

  return result;
});

var _Array_map3 = F4(function (fn, as, bs, cs) {
  var result = [];
  var lowestLength = [as.length, bs.length, cs.length].sort()[0];

  for (var i = 0; i < lowestLength; i++) {
    result.push(A3(fn, as[i], bs[i], cs[i]));
  }

  return result;
});

var _Array_sort = function (array) {
  return array.toSorted(function (a, b) {
    return _Utils_cmp(a, b);
  });
};

var _Array_sortBy = F2(function (fn, array) {
  return array.toSorted(function (a, b) {
    return _Utils_cmp(fn(a), fn(b));
  });
});

var _Array_sortWith = F2(function (fn, array) {
  return array.toSorted(function (a, b) {
    var ord = A2(fn, a, b);
    return ord === $gren_lang$core$Basics$EQ ? 0 : ord === $gren_lang$core$Basics$LT ? -1 : 1;
  });
});

class _Array_Builder {
  constructor(target, finalized, array) {
    this.P = target;
    this.t = finalized;
    this.s = array;
  }
}

var _Array_emptyBuilder = function (capacity) {
  return new _Array_Builder(0, false, new Array(capacity));
};

var _Array_pushToBuilder = F2(function (value, builder) {
  var array = builder.s;
  var target = builder.P;

  if (builder.t) {
    array = array.slice(0, target);
  } else {
    builder.t = true;
  }

  if (target < array.length) {
    array[target] = value;
  } else {
    array.push(value);
  }

  return new _Array_Builder(target + 1, false, array);
});

var _Array_appendToBuilder = F2(function (array, builder) {
  var newArray = _Array_fromBuilder(builder);

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return new _Array_Builder(newArray.length, false, newArray);
});

var _Array_toBuilder = function (array) {
  return new _Array_Builder(array.length, true, array);
};

var _Array_fromBuilder = function (builder) {
  var result = builder.s;

  if (builder.t) {
    result = result.slice(0, builder.P);
  } else {
    builder.t = true;
    result.length = builder.P;
  }

  return result;
};


// EQUALITY

function _Utils_eq(x, y) {
  for (
    var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
    isEqual && (pair = stack.pop());
    isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
  ) {}

  return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack) {
  if (x === y) {
    return true;
  }

  if (typeof x !== "object" || x === null || y === null) {
    typeof x === "function" && _Debug_crash(5);
    return false;
  }

  if (depth > 100) {
    stack.push({ a: x, b: y });
    return true;
  }

  /**_UNUSED/
	if (x.$ === 'Set_gren_builtin')
	{
		x = $gren_lang$core$Set$toArray(x);
		y = $gren_lang$core$Set$toArray(y);
	}
	if (x.$ === 'RBNode_gren_builtin' || x.$ === 'RBEmpty_gren_builtin')
	{
		x = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], x);
		y = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], y);
	}
	//*/

  /**/
	if (x.$ < 0)
	{
		x = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], x);
		y = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], y);
	}
	//*/

  if (x instanceof DataView) {
    var length = x.byteLength;

    if (y.byteLength !== length) {
      return false;
    }

    for (var i = 0; i < length; ++i) {
      if (x.getUint8(i) !== y.getUint8(i)) {
        return false;
      }
    }

    return true;
  }

  if (x instanceof _Array_Builder) {
    x = _Array_fromBuilder(x);
    y = _Array_fromBuilder(y);
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  var nextDepth = depth + 1;

  for (var key in x) {
    if (!_Utils_eqHelp(x[key], y[key], nextDepth, stack)) {
      return false;
    }
  }

  return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function (a, b) {
  return !_Utils_eq(a, b);
});

// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y) {
  if (typeof x !== "object") {
    return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
  }

  /**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

  // At this point, we can only be comparing arrays
  for (var idx = 0; idx < x.length; idx++) {
    var ord = _Utils_cmp(x[idx], y[idx]);
    if (ord !== 0) return ord;
  }

  return x.length - y.length;
}

var _Utils_lt = F2(function (a, b) {
  return _Utils_cmp(a, b) < 0;
});
var _Utils_le = F2(function (a, b) {
  return _Utils_cmp(a, b) < 1;
});
var _Utils_gt = F2(function (a, b) {
  return _Utils_cmp(a, b) > 0;
});
var _Utils_ge = F2(function (a, b) {
  return _Utils_cmp(a, b) >= 0;
});

var _Utils_compare = F2(function (x, y) {
  var n = _Utils_cmp(x, y);
  return n < 0 ? $gren_lang$core$Basics$LT : n ? $gren_lang$core$Basics$GT : $gren_lang$core$Basics$EQ;
});

// COMMON VALUES

function _Utils_chr(c) {
  return c;
}
function _Utils_chr_UNUSED(c) {
  return new String(c);
}

// RECORDS

function _Utils_update(oldRecord, updatedFields) {
  var newRecord = {};

  for (var key in oldRecord) {
    newRecord[key] = oldRecord[key];
  }

  for (var key in updatedFields) {
    newRecord[key] = updatedFields[key];
  }

  return newRecord;
}

// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys) {
  // append Strings
  if (typeof xs === "string") {
    return xs + ys;
  }

  return xs.concat(ys);
}


// LOG

var _Debug_log = F2(function (tag, value) {
  return value;
});

var _Debug_log_UNUSED = F2(function (tag, value) {
  console.log(tag + ": " + _Debug_toString(value));
  return value;
});

// TODOS

function _Debug_todo(moduleName, region) {
  return function (message) {
    _Debug_crash(8, moduleName, region, message);
  };
}

function _Debug_todoCase(moduleName, region, value) {
  return function (message) {
    _Debug_crash(9, moduleName, region, value, message);
  };
}

// TO STRING

function _Debug_toString(value) {
  return "<internals>";
}

function _Debug_toString_UNUSED(value) {
  return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value) {
  if (value == null) {
    return _Debug_internalColor(ansi, "<null>");
  }

  if (typeof value === "function") {
    return _Debug_internalColor(ansi, "<function>");
  }

  if (typeof value === "boolean") {
    return _Debug_ctorColor(ansi, value ? "True" : "False");
  }

  if (typeof value === "number") {
    return _Debug_numberColor(ansi, value + "");
  }

  if (value instanceof String) {
    return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
  }

  if (typeof value === "string") {
    return _Debug_stringColor(
      ansi,
      '"' + _Debug_addSlashes(value, false) + '"',
    );
  }

  if (Array.isArray(value)) {
    var output = "[";

    value.length > 0 && (output += _Debug_toAnsiString(ansi, value[0]));

    for (var idx = 1; idx < value.length; idx++) {
      output += ", " + _Debug_toAnsiString(ansi, value[idx]);
    }

    return output + "]";
  }

  if (typeof value === "object" && "$" in value) {
    var tag = value.$;

    if (typeof tag === "number") {
      return _Debug_internalColor(ansi, "<internals>");
    }

    if (tag === "Set_gren_builtin") {
      return (
        _Debug_ctorColor(ansi, "Set") +
        _Debug_fadeColor(ansi, ".fromArray") +
        " " +
        _Debug_toAnsiString(ansi, $gren_lang$core$Set$toArray(value))
      );
    }

    if (tag === "RBNode_gren_builtin" || tag === "RBEmpty_gren_builtin") {
      return (
        _Debug_ctorColor(ansi, "Dict") +
        _Debug_fadeColor(ansi, ".fromArray") +
        " " +
        _Debug_toAnsiString(
          ansi,
          A3(
            $gren_lang$core$Dict$foldl,
            F3(function (key, value, acc) {
              acc.push({ key: key, value: value });
              return acc;
            }),
            [],
            value,
          ),
        )
      );
    }

    var output = "";
    for (var i in value) {
      if (i === "$") continue;
      var str = _Debug_toAnsiString(ansi, value[i]);
      var c0 = str[0];
      var parenless =
        c0 === "{" ||
        c0 === "(" ||
        c0 === "[" ||
        c0 === "<" ||
        c0 === '"' ||
        str.indexOf(" ") < 0;
      output += " " + (parenless ? str : "(" + str + ")");
    }
    return _Debug_ctorColor(ansi, tag) + output;
  }

  if (value instanceof DataView) {
    return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
  }

  if (typeof File !== "undefined" && value instanceof File) {
    return _Debug_internalColor(ansi, "<" + value.name + ">");
  }

  if (
    typeof _Array_Builder !== "undefined" &&
    value instanceof _Array_Builder
  ) {
    return _Debug_toAnsiString(ansi, value.s.slice(0, value.P));
  }

  if (typeof value === "object") {
    var output = [];
    for (var key in value) {
      var field = key[0] === "_" ? key.slice(1) : key;
      output.push(
        _Debug_fadeColor(ansi, field) +
          " = " +
          _Debug_toAnsiString(ansi, value[key]),
      );
    }
    if (output.length === 0) {
      return "{}";
    }
    return "{ " + output.join(", ") + " }";
  }

  return _Debug_internalColor(ansi, "<internals>");
}

function _Debug_addSlashes(str, isChar) {
  var s = str
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")
    .replace(/\r/g, "\\r")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0");

  if (isChar) {
    return s.replace(/\'/g, "\\'");
  } else {
    return s.replace(/\"/g, '\\"');
  }
}

function _Debug_ctorColor(ansi, string) {
  return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
}

function _Debug_numberColor(ansi, string) {
  return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
}

function _Debug_stringColor(ansi, string) {
  return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
}

function _Debug_charColor(ansi, string) {
  return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
}

function _Debug_fadeColor(ansi, string) {
  return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
}

function _Debug_internalColor(ansi, string) {
  return ansi ? "\x1b[36m" + string + "\x1b[0m" : string;
}

function _Debug_toHexDigit(n) {
  return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}

// CRASH

function _Debug_crash(identifier) {
  throw new Error(
    "https://github.com/gren-lang/core/blob/1.0.0/hints/" + identifier + ".md",
  );
}

function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
  switch (identifier) {
    case 0:
      throw new Error(
        'What node should I take over? In JavaScript I need something like:\n\n    Gren.Main.init({\n        node: document.getElementById("gren-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.',
      );

    case 1:
      throw new Error(
        "Browser.application programs cannot handle URLs like this:\n\n    " +
          document.location.href +
          "\n\nWhat is the root? The root of your file system?",
      );

    case 2:
      var jsonErrorString = fact1;
      throw new Error(
        "Problem with the flags given to your Gren program on initialization.\n\n" +
          jsonErrorString,
      );

    case 3:
      var portName = fact1;
      throw new Error(
        "There can only be one port named `" +
          portName +
          "`, but your program has multiple.",
      );

    case 4:
      var portName = fact1;
      var problem = fact2;
      throw new Error(
        "Trying to send an unexpected type of value through port `" +
          portName +
          "`:\n" +
          problem,
      );

    case 5:
      throw new Error(
        'Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Gren sense.\nRead more about this at https://package.gren-lang.org/packages/gren-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.',
      );

    case 6:
      var moduleName = fact1;
      throw new Error(
        "Your page is loading multiple Gren scripts with a module named " +
          moduleName +
          ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!",
      );

    case 8:
      var moduleName = fact1;
      var region = fact2;
      var message = fact3;
      throw new Error(
        "TODO in module `" +
          moduleName +
          "` " +
          _Debug_regionToString(region) +
          "\n\n" +
          message,
      );

    case 9:
      var moduleName = fact1;
      var region = fact2;
      var value = fact3;
      var message = fact4;
      throw new Error(
        "TODO in module `" +
          moduleName +
          "` from the `case` expression " +
          _Debug_regionToString(region) +
          "\n\nIt received the following value:\n\n    " +
          _Debug_toString(value).replace("\n", "\n    ") +
          "\n\nBut the branch that handles it says:\n\n    " +
          message.replace("\n", "\n    "),
      );

    case 10:
      throw new Error("Bug in https://github.com/gren-lang/core/issues");

    case 11:
      throw new Error("Cannot perform mod 0. Division by zero error.");
  }
}

function _Debug_regionToString(region) {
  if (region.ad.v === region.ar.v) {
    return "on line " + region.ad.v;
  }
  return (
    "on lines " + region.ad.v + " through " + region.ar.v
  );
}
var $gren_lang$core$Dict$foldl$ = function(func, acc, dict) {
	foldl:
	while (true) {
		if (dict.$ === -2) {
			return acc;
		} else {
			var _v1 = dict.a;
			var key = _v1.bp;
			var value = _v1.a0;
			var left = _v1.br;
			var right = _v1.bG;
			var $temp$func = func,
			$temp$acc = A3(func, key, value, $gren_lang$core$Dict$foldl$(func, acc, left)),
			$temp$dict = right;
			func = $temp$func;
			acc = $temp$acc;
			dict = $temp$dict;
			continue foldl;
		}
	}
};
var $gren_lang$core$Dict$foldl = F3($gren_lang$core$Dict$foldl$);
var $gren_lang$core$Array$length = _Array_length;
var $gren_lang$core$Array$pushLast$ = function(value, array) {
	return A4(_Array_splice1, $gren_lang$core$Array$length(array), 0, value, array);
};
var $gren_lang$core$Array$pushLast = F2($gren_lang$core$Array$pushLast$);
var $gren_lang$core$Dict$keys = function(dict) {
	return $gren_lang$core$Dict$foldl$(F3(function(key, value, keyArray) {
				return $gren_lang$core$Array$pushLast$(key, keyArray);
			}), [  ], dict);
};
var $gren_lang$core$Set$toArray = function(_v0) {
	var dict = _v0;
	return $gren_lang$core$Dict$keys(dict);
};
var $gren_lang$core$Basics$EQ = 1;
var $gren_lang$core$Basics$GT = 2;
var $gren_lang$core$Basics$LT = 0;
var $gren_lang$core$Maybe$Just = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Maybe$Nothing = { $: 1 };
var $author$project$DataTable$Asc = 0;
var $gren_lang$core$Basics$apR$ = function(x, f) {
	return f(x);
};
var $gren_lang$core$Basics$apR = F2($gren_lang$core$Basics$apR$);
var $author$project$DataTable$NoPagination = { $: 0 };
var $gren_lang$core$Basics$identity = function(x) {
	return x;
};
var $author$project$DataTable$State = $gren_lang$core$Basics$identity;
var $author$project$DataTable$new = function(id) {
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, j: [  ], k: id };
};
var $author$project$DataTable$Scroller = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$Basics$apL$ = function(f, x) {
	return f(x);
};
var $gren_lang$core$Basics$apL = F2($gren_lang$core$Basics$apL$);
var $gren_lang$core$Basics$append = _Utils_append;
var $gren_lang$core$Array$sort = _Array_sort;
var $author$project$DataTable$setScrollingPaginationWith$ = function(defaultPageSize, otherPageSizes, state) {
	var currentState = state;
	return _Utils_update(currentState, { d: defaultPageSize, b: $author$project$DataTable$Scroller($gren_lang$core$Array$sort(_Utils_ap([ defaultPageSize ], otherPageSizes))) });
};
var $author$project$DataTable$setScrollingPaginationWith = F3($author$project$DataTable$setScrollingPaginationWith$);
var $author$project$DataTable$updateActiveRowId$ = function(newActiveRowId, _v0) {
	var _v1 = _v0;
	var sortColumns = _v1.j;
	var pageSize = _v1.d;
	var pagination = _v1.b;
	var tableId = _v1.k;
	return { f: newActiveRowId, d: pageSize, b: pagination, j: sortColumns, k: tableId };
};
var $author$project$DataTable$updateActiveRowId = F2($author$project$DataTable$updateActiveRowId$);
var $author$project$DataTable$updateSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.k;
	return { f: activeRowId, d: pageSize, b: pagination, j: [ { ac: newSortColumn, N: sortDirection } ], k: tableId };
};
var $author$project$DataTable$updateSortState = F3($author$project$DataTable$updateSortState$);
var $author$project$Example$Paginated$init = function(people) {
	var model = { bA: people, aK: '', aT: $author$project$DataTable$updateActiveRowId$('', $author$project$DataTable$updateSortState$('Year', 0, $author$project$DataTable$setScrollingPaginationWith$(10, [ 0, 5, 25, 50 ], $author$project$DataTable$new('Presidents')))) };
	return model;
};
var $author$project$DataTable$initialSort = function(header) {
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, j: [ { ac: header, N: 0 } ], k: 'sortableTable' };
};
var $author$project$Example$Presidents$init = function(people) {
	var model = { bA: people, aK: '', aT: $author$project$DataTable$initialSort('State') };
	return model;
};
var $author$project$Example$Paginated$person$ = function(name, year, city, state) {
	return { al: city, h: name, aQ: state, a1: year };
};
var $author$project$Example$Paginated$person = F4($author$project$Example$Paginated$person$);
var $author$project$Example$Paginated$presidents = [ $author$project$Example$Paginated$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$Paginated$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$Paginated$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$Paginated$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$Paginated$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$Paginated$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$Paginated$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$Paginated$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$Paginated$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$Paginated$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$Paginated$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$Paginated$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$Paginated$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$Paginated$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$Paginated$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$Paginated$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$Paginated$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$Paginated$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$Paginated$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$Paginated$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$Paginated$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$Paginated$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$Paginated$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$Paginated$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$Paginated$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$Paginated$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$Paginated$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$Paginated$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$Paginated$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$Paginated$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$Paginated$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$Paginated$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$Paginated$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$Paginated$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$Paginated$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$Paginated$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$Paginated$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$Paginated$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$Paginated$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$Paginated$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$Paginated$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$Paginated$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$Paginated$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$Paginated$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$Example$Presidents$person$ = function(name, year, city, state) {
	return { al: city, h: name, aQ: state, a1: year };
};
var $author$project$Example$Presidents$person = F4($author$project$Example$Presidents$person$);
var $author$project$Example$Presidents$presidents = [ $author$project$Example$Presidents$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$Presidents$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$Presidents$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$Presidents$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$Presidents$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$Presidents$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$Presidents$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$Presidents$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$Presidents$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$Presidents$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$Presidents$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$Presidents$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$Presidents$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$Presidents$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$Presidents$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$Presidents$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$Presidents$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$Presidents$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$Presidents$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$Presidents$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$Presidents$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$Presidents$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$Presidents$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$Presidents$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$Presidents$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$Presidents$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$Presidents$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$Presidents$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$Presidents$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$Presidents$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$Presidents$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$Presidents$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$Presidents$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$Presidents$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$Presidents$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$Presidents$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$Presidents$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$Presidents$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$Presidents$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$Presidents$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$DocBook$init = { A: 0, K: $author$project$Example$Paginated$init($author$project$Example$Paginated$presidents), L: $author$project$Example$Presidents$init($author$project$Example$Presidents$presidents) };


// ELEMENT

var _Browser_element = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.bl,
    impl.bR,
    impl.bP,
    function (sendToApp, initialModel) {
      var view = impl.bS;
      /**/
			var domNode = args['node'];
			//*/
      /**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
      var currNode = _VirtualDom_virtualize(domNode);

      return _Browser_makeAnimator(initialModel, function (model) {
        var nextNode = view(model);
        var patches = _VirtualDom_diff(currNode, nextNode);
        domNode = _VirtualDom_applyPatches(
          domNode,
          currNode,
          patches,
          sendToApp
        );
        currNode = nextNode;
      });
    }
  );
});

// DOCUMENT

var _Browser_document = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.bl,
    impl.bR,
    impl.bP,
    function (sendToApp, initialModel) {
      var divertHrefToApp = impl.ab && impl.ab(sendToApp);
      var view = impl.bS;
      var title = _VirtualDom_doc.title;
      var bodyNode = _VirtualDom_doc.body;
      var currNode = _VirtualDom_virtualize(bodyNode);
      return _Browser_makeAnimator(initialModel, function (model) {
        _VirtualDom_divertHrefToApp = divertHrefToApp;
        var doc = view(model);
        var nextNode = _VirtualDom_node("body")([])(doc.a6);
        var patches = _VirtualDom_diff(currNode, nextNode);
        bodyNode = _VirtualDom_applyPatches(
          bodyNode,
          currNode,
          patches,
          sendToApp
        );
        currNode = nextNode;
        _VirtualDom_divertHrefToApp = 0;
        title !== doc.aX &&
          (_VirtualDom_doc.title = title = doc.aX);
      });
    }
  );
});

// ANIMATION

var _Browser_cancelAnimationFrame =
  typeof cancelAnimationFrame !== "undefined"
    ? cancelAnimationFrame
    : function (id) {
        clearTimeout(id);
      };

var _Browser_requestAnimationFrame =
  typeof requestAnimationFrame !== "undefined"
    ? requestAnimationFrame
    : function (callback) {
        return setTimeout(callback, 1000 / 60);
      };

function _Browser_makeAnimator(model, draw) {
  draw(model);

  var state = 0;

  function updateIfNeeded() {
    state =
      state === 1
        ? 0
        : (_Browser_requestAnimationFrame(updateIfNeeded),
          draw(model),
          1);
  }

  return function (nextModel, isSync) {
    model = nextModel;

    isSync
      ? (draw(model),
        state === 2 && (state = 1))
      : (state === 0 &&
          _Browser_requestAnimationFrame(updateIfNeeded),
        (state = 2));
  };
}

// APPLICATION

function _Browser_application(impl) {
  var onUrlChange = impl.by;
  var onUrlRequest = impl.bz;
  var key = function () {
    key.a(onUrlChange(_Browser_getUrl()));
  };

  return _Browser_document({
    ab: function (sendToApp) {
      key.a = sendToApp;
      _Browser_window.addEventListener("popstate", key);
      _Browser_window.navigator.userAgent.indexOf("Trident") < 0 ||
        _Browser_window.addEventListener("hashchange", key);

      return F2(function (domNode, event) {
        if (
          !event.ctrlKey &&
          !event.metaKey &&
          !event.shiftKey &&
          event.button < 1 &&
          !domNode.target &&
          !domNode.hasAttribute("download")
        ) {
          event.preventDefault();
          var href = domNode.href;
          var curr = _Browser_getUrl();
          var next = $gren_lang$url$Url$fromString(href).a;
          sendToApp(
            onUrlRequest(
              next &&
                curr.aI === next.aI &&
                curr.aw === next.aw &&
                curr.aE.a === next.aE.a
                ? $gren_lang$browser$Browser$Internal(next)
                : $gren_lang$browser$Browser$External(href)
            )
          );
        }
      });
    },
    bl: function (flags) {
      return A3(impl.bl, flags, _Browser_getUrl(), key);
    },
    bS: impl.bS,
    bR: impl.bR,
    bP: impl.bP,
  });
}

function _Browser_getUrl() {
  return $gren_lang$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function (key, n) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function () {
      n && history.go(n);
      key();
    })
  );
});

var _Browser_pushUrl = F2(function (key, url) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function () {
      history.pushState({}, "", url);
      key();
    })
  );
});

var _Browser_replaceUrl = F2(function (key, url) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function () {
      history.replaceState({}, "", url);
      key();
    })
  );
});

// GLOBAL EVENTS

var _Browser_fakeNode = {
  addEventListener: function () {},
  removeEventListener: function () {},
};
var _Browser_doc =
  typeof document !== "undefined" ? document : _Browser_fakeNode;
var _Browser_window =
  typeof window !== "undefined" ? window : _Browser_fakeNode;

var _Browser_on = F3(function (node, eventName, sendToSelf) {
  return _Scheduler_spawn(
    _Scheduler_binding(function (callback) {
      function handler(event) {
        _Scheduler_rawSpawn(sendToSelf(event));
      }
      node.addEventListener(
        eventName,
        handler,
        _VirtualDom_passiveSupported && { passive: true }
      );
      return function () {
        node.removeEventListener(eventName, handler);
      };
    })
  );
});

var _Browser_decodeEvent = F2(function (decoder, event) {
  var result = _Json_runHelp(decoder, event);
  return $gren_lang$core$Result$isOk(result) ? $gren_lang$core$Maybe$Just(result.a) : $gren_lang$core$Maybe$Nothing;
});

// PAGE VISIBILITY

function _Browser_visibilityInfo() {
  return typeof _VirtualDom_doc.hidden !== "undefined"
    ? { bi: "hidden", a9: "visibilitychange" }
    : typeof _VirtualDom_doc.mozHidden !== "undefined"
    ? { bi: "mozHidden", a9: "mozvisibilitychange" }
    : typeof _VirtualDom_doc.msHidden !== "undefined"
    ? { bi: "msHidden", a9: "msvisibilitychange" }
    : typeof _VirtualDom_doc.webkitHidden !== "undefined"
    ? { bi: "webkitHidden", a9: "webkitvisibilitychange" }
    : { bi: "hidden", a9: "visibilitychange" };
}

// ANIMATION FRAMES

function _Browser_rAF() {
  return _Scheduler_binding(function (callback) {
    var id = _Browser_requestAnimationFrame(function () {
      callback(_Scheduler_succeed(Date.now()));
    });

    return function () {
      _Browser_cancelAnimationFrame(id);
    };
  });
}

function _Browser_now() {
  return _Scheduler_binding(function (callback) {
    callback(_Scheduler_succeed(Date.now()));
  });
}

// DOM STUFF

function _Browser_withNode(id, doStuff) {
  return _Scheduler_binding(function (callback) {
    _Browser_requestAnimationFrame(function () {
      var node = document.getElementById(id);
      callback(
        node
          ? _Scheduler_succeed(doStuff(node))
          : _Scheduler_fail($gren_lang$browser$Browser$Dom$NotFound(id))
      );
    });
  });
}

function _Browser_withWindow(doStuff) {
  return _Scheduler_binding(function (callback) {
    _Browser_requestAnimationFrame(function () {
      callback(_Scheduler_succeed(doStuff()));
    });
  });
}

// FOCUS and BLUR

var _Browser_call = F2(function (functionName, id) {
  return _Browser_withNode(id, function (node) {
    node[functionName]();
    return {};
  });
});

// WINDOW VIEWPORT

function _Browser_getViewport() {
  return {
    aa: _Browser_getScene(),
    ah: {
      R: _Browser_window.pageXOffset,
      S: _Browser_window.pageYOffset,
      r: _Browser_doc.documentElement.clientWidth,
      p: _Browser_doc.documentElement.clientHeight,
    },
  };
}

function _Browser_getScene() {
  var body = _Browser_doc.body;
  var elem = _Browser_doc.documentElement;
  return {
    r: Math.max(
      body.scrollWidth,
      body.offsetWidth,
      elem.scrollWidth,
      elem.offsetWidth,
      elem.clientWidth
    ),
    p: Math.max(
      body.scrollHeight,
      body.offsetHeight,
      elem.scrollHeight,
      elem.offsetHeight,
      elem.clientHeight
    ),
  };
}

var _Browser_setViewport = F2(function (x, y) {
  return _Browser_withWindow(function () {
    _Browser_window.scroll(x, y);
    return {};
  });
});

// ELEMENT VIEWPORT

function _Browser_getViewportOf(id) {
  return _Browser_withNode(id, function (node) {
    return {
      aa: {
        r: node.scrollWidth,
        p: node.scrollHeight,
      },
      ah: {
        R: node.scrollLeft,
        S: node.scrollTop,
        r: node.clientWidth,
        p: node.clientHeight,
      },
    };
  });
}

var _Browser_setViewportOf = F3(function (id, x, y) {
  return _Browser_withNode(id, function (node) {
    node.scrollLeft = x;
    node.scrollTop = y;
    return {};
  });
});

// ELEMENT

function _Browser_getElement(id) {
  return _Browser_withNode(id, function (node) {
    var rect = node.getBoundingClientRect();
    var x = _Browser_window.pageXOffset;
    var y = _Browser_window.pageYOffset;
    return {
      aa: _Browser_getScene(),
      ah: {
        R: x,
        S: y,
        r: _Browser_doc.documentElement.clientWidth,
        p: _Browser_doc.documentElement.clientHeight,
      },
      be: {
        R: x + rect.left,
        S: y + rect.top,
        r: rect.width,
        p: rect.height,
      },
    };
  });
}

// LOAD and RELOAD

function _Browser_reload(skipCache) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function (callback) {
      _VirtualDom_doc.location.reload(skipCache);
    })
  );
}

function _Browser_load(url) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function (callback) {
      try {
        _Browser_window.location = url;
      } catch (err) {
        // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
        // Other browsers reload the page, so let's be consistent about that.
        _VirtualDom_doc.location.reload(false);
      }
    })
  );
}


/**_UNUSED/
function _Json_errorToString(error)
{
	return $gren_lang$core$Json$Decode$errorToString(error);
}
//*/

// CORE DECODERS

function _Json_succeed(msg) {
  return {
    $: 0,
    a: msg,
  };
}

function _Json_fail(msg) {
  return {
    $: 1,
    a: msg,
  };
}

function _Json_decodePrim(decoder) {
  return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function (value) {
  return typeof value !== "number"
    ? _Json_expecting("an INT", value)
    : Math.trunc(value) === value
      ? $gren_lang$core$Result$Ok(value)
      : isFinite(value) && !(value % 1)
        ? $gren_lang$core$Result$Ok(value)
        : _Json_expecting("an INT", value);
});

var _Json_decodeBool = _Json_decodePrim(function (value) {
  return typeof value === "boolean"
    ? $gren_lang$core$Result$Ok(value)
    : _Json_expecting("a BOOL", value);
});

var _Json_decodeFloat = _Json_decodePrim(function (value) {
  return typeof value === "number"
    ? $gren_lang$core$Result$Ok(value)
    : _Json_expecting("a FLOAT", value);
});

var _Json_decodeValue = _Json_decodePrim(function (value) {
  return $gren_lang$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function (value) {
  return typeof value === "string"
    ? $gren_lang$core$Result$Ok(value)
    : value instanceof String
      ? $gren_lang$core$Result$Ok(value + "")
      : _Json_expecting("a STRING", value);
});

function _Json_decodeArray(decoder) {
  return { $: 3, b: decoder };
}

function _Json_decodeNull(value) {
  return { $: 4, c: value };
}

var _Json_decodeField = F2(function (field, decoder) {
  return {
    $: 5,
    d: field,
    b: decoder,
  };
});

var _Json_decodeIndex = F2(function (index, decoder) {
  return {
    $: 6,
    e: index,
    b: decoder,
  };
});

function _Json_decodeKeyValuePairs(decoder) {
  return {
    $: 7,
    b: decoder,
  };
}

function _Json_mapMany(f, decoders) {
  return {
    $: 8,
    f: f,
    g: decoders,
  };
}

var _Json_andThen = F2(function (callback, decoder) {
  return {
    $: 9,
    b: decoder,
    h: callback,
  };
});

function _Json_oneOf(decoders) {
  return {
    $: 10,
    g: decoders,
  };
}

// DECODING OBJECTS

var _Json_map1 = F2(function (f, d1) {
  return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function (f, d1, d2) {
  return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function (f, d1, d2, d3) {
  return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function (f, d1, d2, d3, d4) {
  return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function (f, d1, d2, d3, d4, d5) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function (f, d1, d2, d3, d4, d5, d6) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function (f, d1, d2, d3, d4, d5, d6, d7) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});

// DECODE

var _Json_runOnString = F2(function (decoder, string) {
  try {
    var value = JSON.parse(string);
    return _Json_runHelp(decoder, value);
  } catch (e) {
    return $gren_lang$core$Result$Err(
      $gren_lang$core$Json$Decode$Failure({
        bs: "This is not valid JSON! " + e.message,
        a0: _Json_wrap(string),
      }),
    );
  }
});

var _Json_run = F2(function (decoder, value) {
  return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value) {
  switch (decoder.$) {
    case 2:
      return decoder.b(value);

    case 4:
      return value === null
        ? $gren_lang$core$Result$Ok(decoder.c)
        : _Json_expecting("null", value);

    case 3:
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      return _Json_runArrayDecoder(decoder.b, value);

    case 5:
      var field = decoder.d;
      if (typeof value !== "object" || value === null || !(field in value)) {
        return _Json_expecting(
          "an OBJECT with a field named `" + field + "`",
          value,
        );
      }
      var result = _Json_runHelp(decoder.b, value[field]);
      return $gren_lang$core$Result$isOk(result)
        ? result
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Field({ h: field, E: result.a }));

    case 6:
      var index = decoder.e;
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      if (index >= value.length) {
        return _Json_expecting(
          "a LONGER array. Need index " +
            index +
            " but only see " +
            value.length +
            " entries",
          value,
        );
      }
      var result = _Json_runHelp(decoder.b, value[index]);
      return $gren_lang$core$Result$isOk(result)
        ? result
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bk: index, E: result.a }));

    case 7:
      if (typeof value !== "object" || value === null || _Json_isArray(value)) {
        return _Json_expecting("an OBJECT", value);
      }

      var keyValuePairs = [];
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          var result = _Json_runHelp(decoder.b, value[key]);
          if (!$gren_lang$core$Result$isOk(result)) {
            return $gren_lang$core$Result$Err(
              $gren_lang$core$Json$Decode$Field({ h: key, E: result.a }),
            );
          }
          keyValuePairs.push({ bp: key, a0: result.a });
        }
      }
      return $gren_lang$core$Result$Ok(keyValuePairs);

    case 8:
      var answer = decoder.f;
      var decoders = decoder.g;
      for (var i = 0; i < decoders.length; i++) {
        var result = _Json_runHelp(decoders[i], value);
        if (!$gren_lang$core$Result$isOk(result)) {
          return result;
        }
        answer = answer(result.a);
      }
      return $gren_lang$core$Result$Ok(answer);

    case 9:
      var result = _Json_runHelp(decoder.b, value);
      return !$gren_lang$core$Result$isOk(result)
        ? result
        : _Json_runHelp(decoder.h(result.a), value);

    case 10:
      var errors = [];

      var decoders = decoder.g;
      for (var idx = 0; idx < decoders.length; idx++) {
        var result = _Json_runHelp(decoders[idx], value);
        if ($gren_lang$core$Result$isOk(result)) {
          return result;
        }
        errors.push(result.a);
      }

      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$OneOf(errors));

    case 1:
      return $gren_lang$core$Result$Err(
        $gren_lang$core$Json$Decode$Failure({
          bs: decoder.a,
          a0: _Json_wrap(value),
        }),
      );

    case 0:
      return $gren_lang$core$Result$Ok(decoder.a);
  }
}

function _Json_runArrayDecoder(decoder, value) {
  var len = value.length;
  var array = new Array(len);
  for (var i = 0; i < len; i++) {
    var result = _Json_runHelp(decoder, value[i]);
    if (!$gren_lang$core$Result$isOk(result)) {
      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bk: i, E: result.a }));
    }
    array[i] = result.a;
  }
  return $gren_lang$core$Result$Ok(array);
}

function _Json_isArray(value) {
  return (
    Array.isArray(value) ||
    (typeof FileList !== "undefined" && value instanceof FileList)
  );
}

function _Json_expecting(type, value) {
  return $gren_lang$core$Result$Err(
    $gren_lang$core$Json$Decode$Failure({
      bs: "Expecting " + type,
      a0: _Json_wrap(value),
    }),
  );
}

// EQUALITY

function _Json_equality(x, y) {
  if (x === y) {
    return true;
  }

  if (x.$ !== y.$) {
    return false;
  }

  switch (x.$) {
    case 0:
    case 1:
      return x.a === y.a;

    case 2:
      return x.b === y.b;

    case 4:
      return x.c === y.c;

    case 3:
    case 7:
      return _Json_equality(x.b, y.b);

    case 5:
      return (
        x.d === y.d && _Json_equality(x.b, y.b)
      );

    case 6:
      return (
        x.e === y.e && _Json_equality(x.b, y.b)
      );

    case 8:
      return (
        x.f === y.f && _Json_arrayEquality(x.g, y.g)
      );

    case 9:
      return (
        x.h === y.h &&
        _Json_equality(x.b, y.b)
      );

    case 10:
      return _Json_arrayEquality(x.g, y.g);
  }
}

function _Json_arrayEquality(aDecoders, bDecoders) {
  var len = aDecoders.length;
  if (len !== bDecoders.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (!_Json_equality(aDecoders[i], bDecoders[i])) {
      return false;
    }
  }
  return true;
}

// ENCODE

var _Json_encode = F2(function (indentLevel, value) {
  return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
});

function _Json_wrap_UNUSED(value) {
  return { $: 0, a: value };
}
function _Json_unwrap_UNUSED(value) {
  return value.a;
}

function _Json_wrap(value) {
  return value;
}
function _Json_unwrap(value) {
  return value;
}

function _Json_emptyArray() {
  return [];
}
function _Json_emptyObject() {
  return {};
}

var _Json_addField = F3(function (key, value, object) {
  object[key] = _Json_unwrap(value);
  return object;
});

function _Json_addEntry(func) {
  return F2(function (entry, array) {
    array.push(_Json_unwrap(func(entry)));
    return array;
  });
}

var _Json_encodeNull = _Json_wrap(null);
var $gren_lang$core$Result$Err = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Json$Decode$Failure = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$core$Json$Decode$Field = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Json$Decode$Index = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Result$Ok = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Json$Decode$OneOf = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$Basics$False = 1;


// MATH

var _Basics_add = F2(function (a, b) {
  return a + b;
});
var _Basics_sub = F2(function (a, b) {
  return a - b;
});
var _Basics_mul = F2(function (a, b) {
  return a * b;
});
var _Basics_fdiv = F2(function (a, b) {
  return a / b;
});
var _Basics_idiv = F2(function (a, b) {
  return Math.trunc(a / b);
});
var _Basics_pow = F2(Math.pow);

// MORE MATH

function _Basics_toFloat(x) {
  return x;
}
function _Basics_isInfinite(n) {
  return n === Infinity || n === -Infinity;
}

var _Basics_isNaN = isNaN;

// BOOLEANS

function _Basics_not(bool) {
  return !bool;
}
var _Basics_and = F2(function (a, b) {
  return a && b;
});
var _Basics_or = F2(function (a, b) {
  return a || b;
});
var _Basics_xor = F2(function (a, b) {
  return a !== b;
});
var $gren_lang$core$Basics$add = _Basics_add;


var _String_pushFirst = F2(function (char, string) {
  return char + string;
});

var _String_pushLast = F2(function (char, string) {
  return string + char;
});

var _String_popFirst = function (string) {
  if (string.length <= 0) {
    return $gren_lang$core$Maybe$Nothing;
  }

  var firstPointNumber = string.codePointAt(0);
  var firstChar = String.fromCodePoint(firstPointNumber);

  return $gren_lang$core$Maybe$Just({
    bh: _Utils_chr(firstChar),
    bF: string.slice(firstChar.length),
  });
};

var _String_popLast = function (string) {
  if (string.length <= 0) {
    return $gren_lang$core$Maybe$Nothing;
  }

  var possibleLastPointIdx = string.length - 2;
  var possibleLastPoint = string.codePointAt(possibleLastPointIdx);

  if (possibleLastPoint === string.charCodeAt(possibleLastPointIdx)) {
    // last char is a unit
    return $gren_lang$core$Maybe$Just({
      bq: _Utils_chr(string[string.length - 1]),
      bF: string.slice(string.length - 1),
    });
  }

  // last char is a point
  return $gren_lang$core$Maybe$Just({
    bq: _Utils_chr(String.fromCodePoint(possibleLastPoint)),
    bF: string.slice(string.length - 2),
  });
};

var _String_append = F2(function (a, b) {
  return a + b;
});

var _String_repeat = F2(function (num, chunk) {
  try {
    return chunk.repeat(num);
  } catch (error) {
    if (error.name === "RangeError") {
      return "";
    } else {
      throw error;
    }
  }
});

var _String_foldl = F3(function (func, state, string) {
  for (let char of string) {
    state = A2(func, _Utils_chr(char), state);
  }

  return state;
});

var _String_foldr = F3(function (func, state, string) {
  let reversed = [];

  for (let char of string) {
    reversed.unshift(char);
  }

  for (let char of reversed) {
    state = A2(func, _Utils_chr(char), state);
  }

  return state;
});

var _String_split = F2(function (sep, str) {
  return str.split(sep);
});

var _String_join = F2(function (sep, strs) {
  return strs.join(sep);
});

var _String_slice = F3(function (start, end, str) {
  if (start < 0) {
    start = str.length + start;
  }

  if (end < 0) {
    end = str.length + end;
  }

  if (start >= end) {
    return "";
  }

  let index = 0;
  let result = "";

  for (let char of str) {
    if (index < start) {
      index++;
      continue;
    }

    if (index >= end) {
      break;
    }

    result += char;
    index++;
  }

  return result;
});

function _String_trim(str) {
  return str.trim();
}

function _String_trimLeft(str) {
  return str.replace(/^\s+/, "");
}

function _String_trimRight(str) {
  return str.replace(/\s+$/, "");
}

function _String_words(str) {
  return str.trim().split(/\s+/g);
}

function _String_lines(str) {
  return str.split(/\r\n|\r|\n/g);
}

function _String_toUpper(str) {
  return str.toUpperCase();
}

function _String_toLower(str) {
  return str.toLowerCase();
}

var _String_any = F2(function (isGood, string) {
  for (let char of string) {
    if (isGood(_Utils_chr(char))) {
      return true;
    }
  }

  return false;
});

var _String_contains = F2(function (sub, str) {
  return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function (sub, str) {
  return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function (sub, str) {
  return (
    str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length
  );
});

var _String_indexOf = F2(function (sub, str) {
  var ret = str.indexOf(sub);

  if (ret > -1) {
    return $gren_lang$core$Maybe$Just(ret);
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _String_lastIndexOf = F2(function (sub, str) {
  var ret = str.lastIndexOf(sub);

  if (ret > -1) {
    return $gren_lang$core$Maybe$Just(ret);
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _String_indexes = F2(function (sub, str) {
  var subLen = sub.length;

  if (subLen < 1) {
    return [];
  }

  var i = 0;
  var is = [];

  while ((i = str.indexOf(sub, i)) > -1) {
    is.push(i);
    i = i + subLen;
  }

  return is;
});

// TO STRING

function _String_fromNumber(number) {
  return number + "";
}

// INT CONVERSIONS

function _String_toInt(str) {
  var total = 0;
  var code0 = str.charCodeAt(0);
  var start = code0 == 0x2b /* + */ || code0 == 0x2d /* - */ ? 1 : 0;

  for (var i = start; i < str.length; ++i) {
    var code = str.charCodeAt(i);
    if (code < 0x30 || 0x39 < code) {
      return $gren_lang$core$Maybe$Nothing;
    }
    total = 10 * total + code - 0x30;
  }

  return i == start
    ? $gren_lang$core$Maybe$Nothing
    : $gren_lang$core$Maybe$Just(code0 == 0x2d ? -total : total);
}

// FLOAT CONVERSIONS

function _String_toFloat(s) {
  // check if it is a hex, octal, or binary number
  if (s.length === 0 || /[\sxbo]/.test(s)) {
    return $gren_lang$core$Maybe$Nothing;
  }
  var n = +s;
  // faster isNaN check
  return n === n ? $gren_lang$core$Maybe$Just(n) : $gren_lang$core$Maybe$Nothing;
}

function _String_fromArray(chars) {
  return chars.join("");
}

// UNITS

var _String_unitLength = function (str) {
  return str.length;
};

var _String_getUnit = F2(function (index, str) {
  var ret = str.at(index);

  if (typeof ret === "undefined") {
    return $gren_lang$core$Maybe$Nothing;
  }

  return $gren_lang$core$Maybe$Just(_Utils_chr(char));
});

var _String_foldlUnits = F3(function (fn, state, str) {
  for (let i = 0; i < str.length; i++) {
    state = A2(fn, str[i], state);
  }

  return state;
});

var _String_foldrUnits = F3(function (fn, state, str) {
  for (let i = str.length - 1; i < 0; i--) {
    state = A2(fn, str[i], state);
  }

  return state;
});
var $gren_lang$core$String$any = _String_any;
var $gren_lang$core$Basics$composeL$ = function(g, f) {
	return function(x) {
		return g(f(x));
	};
};
var $gren_lang$core$Basics$composeL = F2($gren_lang$core$Basics$composeL$);
var $gren_lang$core$Basics$not = _Basics_not;
var $gren_lang$core$String$all$ = function(isGood, str) {
	return !A2($gren_lang$core$String$any, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$not, isGood), str);
};
var $gren_lang$core$String$all = F2($gren_lang$core$String$all$);
var $gren_lang$core$Basics$and = _Basics_and;
var $gren_lang$core$Json$Encode$encode = _Json_encode;
var $gren_lang$core$String$fromInt = _String_fromNumber;
var $gren_lang$core$String$join = _String_join;
var $gren_lang$core$String$split = _String_split;
var $gren_lang$core$Json$Decode$indent = function(str) {
	return A2($gren_lang$core$String$join, '\n    ', A2($gren_lang$core$String$split, '\n', str));
};
var $gren_lang$core$Array$indexedMap = _Array_indexedMap;
var $gren_lang$core$Basics$le = _Utils_le;


function _Char_toCode(char) {
  return char.codePointAt(0);
}

function _Char_fromCode(code) {
  return _Utils_chr(String.fromCodePoint(code));
}
var $gren_lang$core$Char$toCode = _Char_toCode;
var $gren_lang$core$Char$isLower = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $gren_lang$core$Char$isUpper = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $gren_lang$core$Basics$or = _Basics_or;
var $gren_lang$core$Char$isAlpha = function(_char) {
	return $gren_lang$core$Char$isLower(_char) || $gren_lang$core$Char$isUpper(_char);
};
var $gren_lang$core$Char$isDigit = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $gren_lang$core$Char$isAlphaNum = function(_char) {
	return $gren_lang$core$Char$isLower(_char) || ($gren_lang$core$Char$isUpper(_char) || $gren_lang$core$Char$isDigit(_char));
};
var $gren_lang$core$String$popFirst = _String_popFirst;
var $gren_lang$core$Json$Decode$errorOneOf$ = function(i, error) {
	return '\n\n(' + ($gren_lang$core$String$fromInt(i + 1) + (') ' + $gren_lang$core$Json$Decode$indent($gren_lang$core$Json$Decode$errorToString(error))));
};
var $gren_lang$core$Json$Decode$errorOneOf = F2($gren_lang$core$Json$Decode$errorOneOf$);
var $gren_lang$core$Json$Decode$errorToString = function(error) {
	return $gren_lang$core$Json$Decode$errorToStringHelp$(error, [  ]);
};
var $gren_lang$core$Json$Decode$errorToStringHelp$ = function(error, context) {
	errorToStringHelp:
	while (true) {
		switch (error.$) {
			case 0:
				var _v1 = error.a;
				var f = _v1.h;
				var err = _v1.E;
				var isSimple = function () {
					var _v2 = $gren_lang$core$String$popFirst(f);
					if (_v2.$ === 1) {
						return false;
					} else {
						var _v3 = _v2.a;
						var _char = _v3.bh;
						var rest = _v3.bF;
						return $gren_lang$core$Char$isAlpha(_char) && $gren_lang$core$String$all$($gren_lang$core$Char$isAlphaNum, rest);
					}
				}();
				var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
				var $temp$error = err,
				$temp$context = _Utils_ap([ fieldName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 1:
				var _v4 = error.a;
				var i = _v4.bk;
				var err = _v4.E;
				var indexName = '[' + ($gren_lang$core$String$fromInt(i) + ']');
				var $temp$error = err,
				$temp$context = _Utils_ap([ indexName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 2:
				var errors = error.a;
				switch (errors.length) {
					case 0:
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (context.length === 0) {
								return '!';
							} else {
								return ' at json' + A2($gren_lang$core$String$join, '', context);
							}
						}();
					case 1:
						var err = errors[0];
						var $temp$error = err,
						$temp$context = context;
						error = $temp$error;
						context = $temp$context;
						continue errorToStringHelp;
					default:
						var starter = function () {
							if (context.length === 0) {
								return 'Json.Decode.oneOf';
							} else {
								return 'The Json.Decode.oneOf at json' + A2($gren_lang$core$String$join, '', context);
							}
						}();
						var introduction = starter + (' failed in the following ' + ($gren_lang$core$String$fromInt($gren_lang$core$Array$length(errors)) + ' ways:'));
						return A2($gren_lang$core$String$join, '\n\n', _Utils_ap([ introduction ], A2($gren_lang$core$Array$indexedMap, $gren_lang$core$Json$Decode$errorOneOf, errors)));
				}
			default:
				var _v8 = error.a;
				var msg = _v8.bs;
				var json = _v8.a0;
				var introduction = function () {
					if (context.length === 0) {
						return 'Problem with the given value:\n\n';
					} else {
						return 'Problem with the value at json' + (A2($gren_lang$core$String$join, '', context) + ':\n\n    ');
					}
				}();
				return introduction + ($gren_lang$core$Json$Decode$indent(A2($gren_lang$core$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
		}
	}
};
var $gren_lang$core$Json$Decode$errorToStringHelp = F2($gren_lang$core$Json$Decode$errorToStringHelp$);
var $gren_lang$core$Basics$True = 0;
var $gren_lang$core$Result$isOk = function(result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};


// PROGRAMS

var _Platform_worker = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.bl,
    impl.bR,
    impl.bP,
    function () {
      return function () {};
    },
  );
});

// INITIALIZE A PROGRAM

function _Platform_initialize(
  flagDecoder,
  args,
  init,
  update,
  subscriptions,
  stepperBuilder,
) {
  var result = A2(
    _Json_run,
    flagDecoder,
    _Json_wrap(args ? args["flags"] : undefined),
  );
  $gren_lang$core$Result$isOk(result) ||
    _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
  var managers = {};
  var initPair = init(result.a);
  var model = initPair.aA;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);

  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper((model = pair.aA), viewMetadata);
    _Platform_enqueueEffects(managers, pair.an, subscriptions(model));
  }

  _Platform_enqueueEffects(managers, initPair.an, subscriptions(model));

  return ports ? { ports: ports } : {};
}

// TRACK PRELOADS
//
// This is used by code in gren/browser and gren/http
// to register any HTTP requests that are triggered by init.
//

var _Platform_preload;

function _Platform_registerPreload(url) {
  _Platform_preload.add(url);
}

// EFFECT MANAGERS

var _Platform_effectManagers = {};

function _Platform_setupEffects(managers, sendToApp) {
  var ports;

  // setup all necessary effect managers
  for (var key in _Platform_effectManagers) {
    var manager = _Platform_effectManagers[key];

    if (manager.a) {
      ports = ports || {};
      ports[key] = manager.a(key, sendToApp);
    }

    managers[key] = _Platform_instantiateManager(manager, sendToApp);
  }

  return ports;
}

function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
  return {
    b: init,
    c: onEffects,
    d: onSelfMsg,
    e: cmdMap,
    f: subMap,
  };
}

function _Platform_instantiateManager(info, sendToApp) {
  var router = {
    g: sendToApp,
    h: undefined,
  };

  var onEffects = info.c;
  var onSelfMsg = info.d;
  var cmdMap = info.e;
  var subMap = info.f;

  function loop(state) {
    return A2(
      _Scheduler_andThen,
      loop,
      _Scheduler_receive(function (msg) {
        var value = msg.a;

        if (msg.$ === 0) {
          return A3(onSelfMsg, router, value, state);
        }

        return cmdMap && subMap
          ? A4(onEffects, router, value.i, value.j, state)
          : A3(onEffects, router, cmdMap ? value.i : value.j, state);
      }),
    );
  }

  return (router.h = _Scheduler_rawSpawn(
    A2(_Scheduler_andThen, loop, info.b),
  ));
}

// ROUTING

var _Platform_sendToApp = F2(function (router, msg) {
  return _Scheduler_binding(function (callback) {
    router.g(msg);
    callback(_Scheduler_succeed({}));
  });
});

var _Platform_sendToSelf = F2(function (router, msg) {
  return A2(_Scheduler_send, router.h, {
    $: 0,
    a: msg,
  });
});

// BAGS

function _Platform_leaf(home) {
  return function (value) {
    return {
      $: 1,
      k: home,
      l: value,
    };
  };
}

function _Platform_batch(array) {
  return {
    $: 2,
    m: array,
  };
}

var _Platform_map = F2(function (tagger, bag) {
  return {
    $: 3,
    n: tagger,
    o: bag,
  };
});

// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/gren/core/issues/980
//   https://github.com/gren/core/pull/981
//   https://github.com/gren/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.

// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;

function _Platform_enqueueEffects(managers, cmdBag, subBag) {
  _Platform_effectsQueue.push({
    p: managers,
    q: cmdBag,
    r: subBag,
  });

  if (_Platform_effectsActive) return;

  _Platform_effectsActive = true;
  for (var fx; (fx = _Platform_effectsQueue.shift()); ) {
    _Platform_dispatchEffects(fx.p, fx.q, fx.r);
  }
  _Platform_effectsActive = false;
}

function _Platform_dispatchEffects(managers, cmdBag, subBag) {
  var effectsDict = {};
  _Platform_gatherEffects(true, cmdBag, effectsDict, null);
  _Platform_gatherEffects(false, subBag, effectsDict, null);

  for (var home in managers) {
    _Scheduler_rawSend(managers[home], {
      $: "fx",
      a: effectsDict[home] || { i: [], j: [] },
    });
  }
}

function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
  switch (bag.$) {
    case 1:
      var home = bag.k;
      var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
      effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
      return;

    case 2:
      var bags = bag.m;
      for (var idx = 0; idx < bags.length; idx++) {
        _Platform_gatherEffects(isCmd, bags[idx], effectsDict, taggers);
      }
      return;

    case 3:
      _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
        s: bag.n,
        t: taggers,
      });
      return;
  }
}

function _Platform_toEffect(isCmd, home, taggers, value) {
  function applyTaggers(x) {
    for (var temp = taggers; temp; temp = temp.t) {
      x = temp.s(x);
    }
    return x;
  }

  var map = isCmd
    ? _Platform_effectManagers[home].e
    : _Platform_effectManagers[home].f;

  return A2(map, applyTaggers, value);
}

function _Platform_insert(isCmd, newEffect, effects) {
  effects = effects || { i: [], j: [] };

  isCmd
    ? (effects.i = A2($gren_lang$core$Array$pushLast, newEffect, effects.i))
    : (effects.j = A2($gren_lang$core$Array$pushLast, newEffect, effects.j));

  return effects;
}

// PORTS

function _Platform_checkPortName(name) {
  if (_Platform_effectManagers[name]) {
    _Debug_crash(3, name);
  }
}

// OUTGOING PORTS

function _Platform_outgoingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    e: _Platform_outgoingPortMap,
    u: converter,
    a: _Platform_setupOutgoingPort,
  };
  return _Platform_leaf(name);
}

var _Platform_outgoingPortMap = F2(function (tagger, value) {
  return value;
});

function _Platform_setupOutgoingPort(name) {
  var subs = [];
  var converter = _Platform_effectManagers[name].u;

  // CREATE MANAGER

  var init = _Process_sleep(0);

  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(
    function (router, cmdArray, state) {
      for (var idx = 0; idx < cmdArray.length; idx++) {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;
        var value = _Json_unwrap(converter(cmdArray[idx]));
        for (var subIdx = 0; subIdx < currentSubs.length; subIdx++) {
          currentSubs[subIdx](value);
        }
      }
      return init;
    },
  );

  // PUBLIC API

  function subscribe(callback) {
    subs.push(callback);
  }

  function unsubscribe(callback) {
    // copy subs into a new array in case unsubscribe is called within a
    // subscribed callback
    subs = subs.slice();
    var index = subs.indexOf(callback);
    if (index >= 0) {
      subs.splice(index, 1);
    }
  }

  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
}

// INCOMING PORTS

function _Platform_incomingPort(name, converter) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    f: _Platform_incomingPortMap,
    u: converter,
    a: _Platform_setupIncomingPort,
  };
  return _Platform_leaf(name);
}

var _Platform_incomingPortMap = F2(function (tagger, finalTagger) {
  return function (value) {
    return tagger(finalTagger(value));
  };
});

function _Platform_setupIncomingPort(name, sendToApp) {
  var subs = [];
  var converter = _Platform_effectManagers[name].u;

  // CREATE MANAGER

  var init = _Scheduler_succeed(null);

  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(
    function (router, subArray, state) {
      subs = subArray;
      return init;
    },
  );

  // PUBLIC API

  function send(incomingValue) {
    var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

    $gren_lang$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

    var value = result.a;
    for (var idx = 0; idx < subs.length; idx++) {
      sendToApp(subs[idx](value));
    }
  }

  return { send: send };
}

// EXPORT GREN MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//

function _Platform_export(exports) {
  scope["Gren"]
    ? _Platform_mergeExportsProd(scope["Gren"], exports)
    : (scope["Gren"] = exports);
}

function _Platform_mergeExportsProd(obj, exports) {
  for (var name in exports) {
    name in obj
      ? name == "init"
        ? _Debug_crash(6)
        : _Platform_mergeExportsProd(obj[name], exports[name])
      : (obj[name] = exports[name]);
  }
}

function _Platform_export_UNUSED(exports) {
  scope["Gren"]
    ? _Platform_mergeExportsDebug("Gren", scope["Gren"], exports)
    : (scope["Gren"] = exports);
}

function _Platform_mergeExportsDebug(moduleName, obj, exports) {
  for (var name in exports) {
    name in obj
      ? name == "init"
        ? _Debug_crash(6, moduleName)
        : _Platform_mergeExportsDebug(
            moduleName + "." + name,
            obj[name],
            exports[name],
          )
      : (obj[name] = exports[name]);
  }
}


function _Process_sleep(time) {
  return _Scheduler_binding(function (callback) {
    var id = setTimeout(function () {
      callback(_Scheduler_succeed({}));
    }, time);

    return function () {
      clearTimeout(id);
    };
  });
}


// TASKS

function _Scheduler_succeed(value) {
  return {
    $: 0,
    a: value,
  };
}

function _Scheduler_fail(error) {
  return {
    $: 1,
    a: error,
  };
}

function _Scheduler_binding(callback) {
  return {
    $: 2,
    b: callback,
    c: null,
  };
}

var _Scheduler_andThen = F2(function (callback, task) {
  return {
    $: 3,
    b: callback,
    d: task,
  };
});

var _Scheduler_onError = F2(function (callback, task) {
  return {
    $: 4,
    b: callback,
    d: task,
  };
});

function _Scheduler_receive(callback) {
  return {
    $: 5,
    b: callback,
  };
}

// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task) {
  var proc = {
    $: 0,
    e: _Scheduler_guid++,
    f: task,
    g: null,
    h: [],
  };

  _Scheduler_enqueue(proc);

  return proc;
}

function _Scheduler_spawn(task) {
  return _Scheduler_binding(function (callback) {
    callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
  });
}

function _Scheduler_rawSend(proc, msg) {
  proc.h.push(msg);
  _Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function (proc, msg) {
  return _Scheduler_binding(function (callback) {
    _Scheduler_rawSend(proc, msg);
    callback(_Scheduler_succeed({}));
  });
});

function _Scheduler_kill(proc) {
  return _Scheduler_binding(function (callback) {
    var task = proc.f;
    if (task && task.$ === 2 && task.c) {
      task.c();
    }

    proc.f = null;

    callback(_Scheduler_succeed({}));
  });
}

/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/

var _Scheduler_working = false;
var _Scheduler_queue = [];

function _Scheduler_enqueue(proc) {
  _Scheduler_queue.push(proc);
  if (_Scheduler_working) {
    return;
  }
  _Scheduler_working = true;
  while ((proc = _Scheduler_queue.shift())) {
    _Scheduler_step(proc);
  }
  _Scheduler_working = false;
}

function _Scheduler_step(proc) {
  while (proc.f) {
    var rootTag = proc.f.$;
    if (rootTag === 0 || rootTag === 1) {
      while (proc.g && proc.g.$ !== rootTag) {
        proc.g = proc.g.i;
      }
      if (!proc.g) {
        return;
      }
      proc.f = proc.g.b(proc.f.a);
      proc.g = proc.g.i;
    } else if (rootTag === 2) {
      proc.f.c = proc.f.b(function (newRoot) {
        proc.f = newRoot;
        _Scheduler_enqueue(proc);
      });
      return;
    } else if (rootTag === 5) {
      if (proc.h.length === 0) {
        return;
      }
      proc.f = proc.f.b(proc.h.shift());
    } // if (rootTag === 3 || rootTag === 4)
    else {
      proc.g = {
        $: rootTag === 3 ? 0 : 1,
        b: proc.f.b,
        i: proc.g,
      };
      proc.f = proc.f.d;
    }
  }
}


// HELPERS

var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== "undefined" ? document : {};

function _VirtualDom_appendChild(parent, child) {
  parent.appendChild(child);
}

var _VirtualDom_init = F2(function (
  virtualNode,
  args
) {
  // NOTE: this function needs _Platform_export available to work

  /**/
	var node = args['node'];
	//*/
  /**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

  node.parentNode.replaceChild(
    _VirtualDom_render(virtualNode, function () {}),
    node
  );

  return {};
});

// TEXT

function _VirtualDom_text(string) {
  return {
    $: 0,
    a: string,
  };
}

// NODE

var _VirtualDom_nodeNS = F2(function (namespace, tag) {
  return F2(function(factList, kids) {
    for (var descendantsCount = 0, i = 0; i < kids.length; i++) {
      var kid = kids[i];
      descendantsCount += kid.b || 0;
    }

    descendantsCount += kids.length;

    return {
      $: 1,
      c: tag,
      d: _VirtualDom_organizeFacts(factList),
      e: kids,
      f: namespace,
      b: descendantsCount,
    };
  });
});

var _VirtualDom_node = function (tag) {
  return _VirtualDom_nodeNS.f(undefined, tag);
};

// KEYED NODE

var _VirtualDom_keyedNodeNS = F2(function (namespace, tag) {
  return F2(function (factList, kids) {
    for (var descendantsCount = 0, i = 0; i < kids.length; i++) {
      var kid = kids[i];
      descendantsCount += kid.bx.b || 0;
    }

    descendantsCount += kids.length;

    return {
      $: 2,
      c: tag,
      d: _VirtualDom_organizeFacts(factList),
      e: kids,
      f: namespace,
      b: descendantsCount,
    };
  });
});

var _VirtualDom_keyedNode = function (tag) {
  return _VirtualDom_keyedNodeNS.f(undefined, tag);
};

// CUSTOM

function _VirtualDom_custom(factList, model, render, diff) {
  return {
    $: 3,
    d: _VirtualDom_organizeFacts(factList),
    g: model,
    h: render,
    i: diff,
  };
}

// MAP

var _VirtualDom_map = F2(function (tagger, node) {
  return {
    $: 4,
    j: tagger,
    k: node,
    b: 1 + (node.b || 0),
  };
});

// LAZY

function _VirtualDom_thunk(view, args, thunk) {
  return {
    $: 5,
    l: view,
    m: args,
    n: thunk,
    k: undefined,
  };
}

var _VirtualDom_lazy = F2(function (func, a) {
  return _VirtualDom_thunk(func, [a], function () {
    return func(a);
  });
});

var _VirtualDom_lazy2 = F3(function (func, a, b) {
  return _VirtualDom_thunk(func, [a, b], function () {
    return A2(func, a, b);
  });
});

var _VirtualDom_lazy3 = F4(function (func, a, b, c) {
  return _VirtualDom_thunk(func, [a, b, c], function () {
    return A3(func, a, b, c);
  });
});

var _VirtualDom_lazy4 = F5(function (func, a, b, c, d) {
  return _VirtualDom_thunk(func, [a, b, c, d], function () {
    return A4(func, a, b, c, d);
  });
});

var _VirtualDom_lazy5 = F6(function (func, a, b, c, d, e) {
  return _VirtualDom_thunk(func, [a, b, c, d, e], function () {
    return A5(func, a, b, c, d, e);
  });
});

var _VirtualDom_lazy6 = F7(function (func, a, b, c, d, e, f) {
  return _VirtualDom_thunk(func, [a, b, c, d, e, f], function () {
    return A6(func, a, b, c, d, e, f);
  });
});

var _VirtualDom_lazy7 = F8(function (func, a, b, c, d, e, f, g) {
  return _VirtualDom_thunk(func, [a, b, c, d, e, f, g], function () {
    return A7(func, a, b, c, d, e, f, g);
  });
});

var _VirtualDom_lazy8 = F9(function (func, a, b, c, d, e, f, g, h) {
  return _VirtualDom_thunk(func, [a, b, c, d, e, f, g, h], function () {
    return A8(func, a, b, c, d, e, f, g, h);
  });
});

// FACTS

var _VirtualDom_on = F2(function (key, handler) {
  return {
    $: "a0",
    o: key,
    p: handler,
  };
});
var _VirtualDom_style = F2(function (key, value) {
  return {
    $: "a1",
    o: key,
    p: value,
  };
});
var _VirtualDom_property = F2(function (key, value) {
  return {
    $: "a2",
    o: key,
    p: value,
  };
});
var _VirtualDom_attribute = F2(function (key, value) {
  return {
    $: "a3",
    o: key,
    p: value,
  };
});
var _VirtualDom_attributeNS = F3(function (namespace, key, value) {
  return {
    $: "a4",
    o: key,
    p: { f: namespace, p: value },
  };
});

// XSS ATTACK VECTOR CHECKS

function _VirtualDom_noScript(tag) {
  return tag == "script" ? "p" : tag;
}

function _VirtualDom_noOnOrFormAction(key) {
  return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key) {
  return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
}

function _VirtualDom_noJavaScriptUri(value) {
  return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value) {
  return /^javascript:/i.test(value.replace(/\s/g, ""))
    ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
    : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value) {
  return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
  return /^\s*(javascript:|data:text\/html)/i.test(value)
    ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
    : value;
}

// MAP FACTS

var _VirtualDom_mapAttribute = F2(function (func, attr) {
  return attr.$ === "a0"
    ? A2(_VirtualDom_on, attr.o, _VirtualDom_mapHandler(func, attr.p))
    : attr;
});

function _VirtualDom_mapHandler(func, handler) {
  var tag = $gren_lang$browser$VirtualDom$toHandlerInt(handler);

  // 0 = Normal
  // 1 = MayStopPropagation
  // 2 = MayPreventDefault
  // 3 = Custom

  var mappedDecoder;
  switch (tag) {
    case 0:
      A2($gren_lang$core$Json$Decode$map, func, handler.a);
      break;
    case 1:
      A3(
        $gren_lang$core$Json$Decode$map2,
        _VirtualDom_mapMayStopPropagation,
        $gren_lang$core$Json$Decode$succeed(func),
        handler.a
      );
      break;
    case 2:
      A3(
        $gren_lang$core$Json$Decode$map2,
        _VirtualDom_mapMayPreventDefault,
        $gren_lang$core$Json$Decode$succeed(func),
        handler.a
      );
      break;
    case 3:
      A3(
        $gren_lang$core$Json$Decode$map2,
        _VirtualDom_mapEventRecord,
        $gren_lang$core$Json$Decode$succeed(func),
        handler.a
      );
      break;
  }

  return {
    $: handler.$,
    a: mappedDecoder,
  };
}

var _VirtualDom_mapMayStopPropagation = F2(function (func, record) {
  return {
    bs: func(record.bs),
    y: record.y,
  };
});

var _VirtualDom_mapMayPreventDefault = F2(function (func, record) {
  return {
    bs: func(record.bs),
    bB: record.bB,
  };
});

var _VirtualDom_mapEventRecord = F2(function (func, record) {
  return {
    bs: func(record.bs),
    y: record.y,
    bB: record.bB,
  };
});

// ORGANIZE FACTS

function _VirtualDom_organizeFacts(factList) {
  for (var facts = {}, i = 0; i < factList.length; i++) {
    var entry = factList[i];

    var tag = entry.$;
    var key = entry.o;
    var value = entry.p;

    if (tag === "a2") {
      key === "className"
        ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
        : (facts[key] = _Json_unwrap(value));

      continue;
    }

    var subFacts = facts[tag] || (facts[tag] = {});
    tag === "a3" && key === "class"
      ? _VirtualDom_addClass(subFacts, key, value)
      : (subFacts[key] = value);
  }

  return facts;
}

function _VirtualDom_addClass(object, key, newClass) {
  var classes = object[key];
  object[key] = classes ? classes + " " + newClass : newClass;
}

// RENDER

function _VirtualDom_render(vNode, eventNode) {
  var tag = vNode.$;

  if (tag === 5) {
    return _VirtualDom_render(
      vNode.k || (vNode.k = vNode.n()),
      eventNode
    );
  }

  if (tag === 0) {
    return _VirtualDom_doc.createTextNode(vNode.a);
  }

  if (tag === 4) {
    var subNode = vNode.k;
    var tagger = vNode.j;

    while (subNode.$ === 4) {
      typeof tagger !== "object"
        ? (tagger = [tagger, subNode.j])
        : tagger.push(subNode.j);

      subNode = subNode.k;
    }

    var subEventRoot = { j: tagger, q: eventNode };
    var domNode = _VirtualDom_render(subNode, subEventRoot);
    domNode.gren_event_node_ref = subEventRoot;
    return domNode;
  }

  if (tag === 3) {
    var domNode = vNode.h(vNode.g);
    _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
    return domNode;
  }

  // at this point `tag` must be 1 or 2

  var domNode = vNode.f
    ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
    : _VirtualDom_doc.createElement(vNode.c);

  if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
    domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
  }

  _VirtualDom_applyFacts(domNode, eventNode, vNode.d);

  for (var kids = vNode.e, i = 0; i < kids.length; i++) {
    _VirtualDom_appendChild(
      domNode,
      _VirtualDom_render(
        tag === 1 ? kids[i] : kids[i].bx,
        eventNode
      )
    );
  }

  return domNode;
}

// APPLY FACTS

function _VirtualDom_applyFacts(domNode, eventNode, facts) {
  for (var key in facts) {
    var value = facts[key];

    key === "a1"
      ? _VirtualDom_applyStyles(domNode, value)
      : key === "a0"
      ? _VirtualDom_applyEvents(domNode, eventNode, value)
      : key === "a3"
      ? _VirtualDom_applyAttrs(domNode, value)
      : key === "a4"
      ? _VirtualDom_applyAttrsNS(domNode, value)
      : ((key !== "value" && key !== "checked") || domNode[key] !== value) &&
        (domNode[key] = value);
  }
}

// APPLY STYLES

function _VirtualDom_applyStyles(domNode, styles) {
  var domNodeStyle = domNode.style;

  for (var key in styles) {
    domNodeStyle[key] = styles[key];
  }
}

// APPLY ATTRS

function _VirtualDom_applyAttrs(domNode, attrs) {
  for (var key in attrs) {
    var value = attrs[key];
    typeof value !== "undefined"
      ? domNode.setAttribute(key, value)
      : domNode.removeAttribute(key);
  }
}

// APPLY NAMESPACED ATTRS

function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
  for (var key in nsAttrs) {
    var pair = nsAttrs[key];
    var namespace = pair.f;
    var value = pair.p;

    typeof value !== "undefined"
      ? domNode.setAttributeNS(namespace, key, value)
      : domNode.removeAttributeNS(namespace, key);
  }
}

// APPLY EVENTS

function _VirtualDom_applyEvents(domNode, eventNode, events) {
  var allCallbacks = domNode.grenFs || (domNode.grenFs = {});

  for (var key in events) {
    var newHandler = events[key];
    var oldCallback = allCallbacks[key];

    if (!newHandler) {
      domNode.removeEventListener(key, oldCallback);
      allCallbacks[key] = undefined;
      continue;
    }

    if (oldCallback) {
      var oldHandler = oldCallback.r;
      if (oldHandler.$ === newHandler.$) {
        oldCallback.r = newHandler;
        continue;
      }
      domNode.removeEventListener(key, oldCallback);
    }

    oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
    domNode.addEventListener(
      key,
      oldCallback,
      _VirtualDom_passiveSupported && {
        passive: $gren_lang$browser$VirtualDom$toHandlerInt(newHandler) < 2,
      }
    );
    allCallbacks[key] = oldCallback;
  }
}

// PASSIVE EVENTS

var _VirtualDom_passiveSupported;

try {
  window.addEventListener(
    "t",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        _VirtualDom_passiveSupported = true;
      },
    })
  );
} catch (e) {}

// EVENT HANDLERS

function _VirtualDom_makeCallback(eventNode, initialHandler) {
  function callback(event) {
    var handler = callback.r;
    var result = _Json_runHelp(handler.a, event);

    if (!$gren_lang$core$Result$isOk(result)) {
      return;
    }

    var tag = $gren_lang$browser$VirtualDom$toHandlerInt(handler);

    // 0 = Normal
    // 1 = MayStopPropagation
    // 2 = MayPreventDefault
    // 3 = Custom

    var value = result.a;
    var message = !tag ? value : value.bs;
    var stopPropagation =
      tag == 1 || tag == 3 ? value.y : false;
    var currentEventNode =
      (stopPropagation && event.stopPropagation(),
      (tag == 2 || tag == 3 ? value.bB : false) &&
        event.preventDefault(),
      eventNode);
    var tagger;
    var i;
    while ((tagger = currentEventNode.j)) {
      if (typeof tagger == "function") {
        message = tagger(message);
      } else {
        for (var i = tagger.length; i--; ) {
          message = tagger[i](message);
        }
      }
      currentEventNode = currentEventNode.q;
    }
    currentEventNode(message, stopPropagation); // stopPropagation implies isSync
  }

  callback.r = initialHandler;

  return callback;
}

function _VirtualDom_equalEvents(x, y) {
  return x.$ == y.$ && _Json_equality(x.a, y.a);
}

// DIFF

// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y) {
  var patches = [];
  _VirtualDom_diffHelp(x, y, patches, 0);
  return patches;
}

function _VirtualDom_pushPatch(patches, type, index, data) {
  var patch = {
    $: type,
    s: index,
    t: data,
    u: undefined,
    v: undefined,
  };
  patches.push(patch);
  return patch;
}

function _VirtualDom_diffHelp(x, y, patches, index) {
  if (x === y) {
    return;
  }

  var xType = x.$;
  var yType = y.$;

  // Bail if you run into different types of nodes. Implies that the
  // structure has changed significantly and it's not worth a diff.
  if (xType !== yType) {
    if (xType === 1 && yType === 2) {
      y = _VirtualDom_dekey(y);
      yType = 1;
    } else {
      _VirtualDom_pushPatch(patches, 0, index, y);
      return;
    }
  }

  // Now we know that both nodes are the same $.
  switch (yType) {
    case 5:
      var xArgs = x.m;
      var yArgs = y.m;
      var i = xArgs.length;
      var same = i === yArgs.length && x.l === y.l;
      while (same && i--) {
        same = _Utils_eq(xArgs[i], yArgs[i]);
      }
      if (same) {
        y.k = x.k;
        return;
      }
      y.k = y.n();
      var subPatches = [];
      _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
      subPatches.length > 0 &&
        _VirtualDom_pushPatch(patches, 1, index, subPatches);
      return;

    case 4:
      // gather nested taggers
      var xTaggers = x.j;
      var yTaggers = y.j;
      var nesting = false;

      var xSubNode = x.k;
      while (xSubNode.$ === 4) {
        nesting = true;

        typeof xTaggers !== "object"
          ? (xTaggers = [xTaggers, xSubNode.j])
          : xTaggers.push(xSubNode.j);

        xSubNode = xSubNode.k;
      }

      var ySubNode = y.k;
      while (ySubNode.$ === 4) {
        nesting = true;

        typeof yTaggers !== "object"
          ? (yTaggers = [yTaggers, ySubNode.j])
          : yTaggers.push(ySubNode.j);

        ySubNode = ySubNode.k;
      }

      // Just bail if different numbers of taggers. This implies the
      // structure of the virtual DOM has changed.
      if (nesting && xTaggers.length !== yTaggers.length) {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }

      // check if taggers are "the same"
      if (
        nesting
          ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers)
          : xTaggers !== yTaggers
      ) {
        _VirtualDom_pushPatch(patches, 2, index, yTaggers);
      }

      // diff everything below the taggers
      _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
      return;

    case 0:
      if (x.a !== y.a) {
        _VirtualDom_pushPatch(patches, 3, index, y.a);
      }
      return;

    case 1:
      _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
      return;

    case 2:
      _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
      return;

    case 3:
      if (x.h !== y.h) {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }

      var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
      factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

      var patch = y.i(x.g, y.g);
      patch && _VirtualDom_pushPatch(patches, 5, index, patch);

      return;
  }
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs) {
  for (var i = 0; i < as.length; i++) {
    if (as[i] !== bs[i]) {
      return false;
    }
  }

  return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
  // Bail if obvious indicators have changed. Implies more serious
  // structural changes such that it's not worth it to diff.
  if (x.c !== y.c || x.f !== y.f) {
    _VirtualDom_pushPatch(patches, 0, index, y);
    return;
  }

  var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
  factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

  diffKids(x, y, patches, index);
}

// DIFF FACTS

// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category) {
  var diff;

  // look for changes and removals
  for (var xKey in x) {
    if (
      xKey === "a1" ||
      xKey === "a0" ||
      xKey === "a3" ||
      xKey === "a4"
    ) {
      var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
      if (subDiff) {
        diff = diff || {};
        diff[xKey] = subDiff;
      }
      continue;
    }

    // remove if not in the new facts
    if (!(xKey in y)) {
      diff = diff || {};
      diff[xKey] = !category
        ? typeof x[xKey] === "string"
          ? ""
          : null
        : category === "a1"
        ? ""
        : category === "a0" || category === "a3"
        ? undefined
        : { f: x[xKey].f, p: undefined };

      continue;
    }

    var xValue = x[xKey];
    var yValue = y[xKey];

    // reference equal, so don't worry about it
    if (
      (xValue === yValue && xKey !== "value" && xKey !== "checked") ||
      (category === "a0" && _VirtualDom_equalEvents(xValue, yValue))
    ) {
      continue;
    }

    diff = diff || {};
    diff[xKey] = yValue;
  }

  // add new stuff
  for (var yKey in y) {
    if (!(yKey in x)) {
      diff = diff || {};
      diff[yKey] = y[yKey];
    }
  }

  return diff;
}

// DIFF KIDS

function _VirtualDom_diffKids(xParent, yParent, patches, index) {
  var xKids = xParent.e;
  var yKids = yParent.e;

  var xLen = xKids.length;
  var yLen = yKids.length;

  // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

  if (xLen > yLen) {
    _VirtualDom_pushPatch(patches, 6, index, {
      w: yLen,
      i: xLen - yLen,
    });
  } else if (xLen < yLen) {
    _VirtualDom_pushPatch(patches, 7, index, {
      w: xLen,
      e: yKids,
    });
  }

  // PAIRWISE DIFF EVERYTHING ELSE

  for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
    var xKid = xKids[i];
    _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
    index += xKid.b || 0;
  }
}

// KEYED DIFF

function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
  var localPatches = [];

  var changes = {}; // Dict String Entry
  var inserts = []; // Array { index : Int, entry : Entry }
  // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

  var xKids = xParent.e;
  var yKids = yParent.e;
  var xLen = xKids.length;
  var yLen = yKids.length;
  var xIndex = 0;
  var yIndex = 0;

  var index = rootIndex;

  while (xIndex < xLen && yIndex < yLen) {
    var x = xKids[xIndex];
    var y = yKids[yIndex];

    var xKey = x.bp;
    var yKey = y.bp;
    var xNode = x.bx;
    var yNode = y.bx;

    var newMatch = undefined;
    var oldMatch = undefined;

    // check if keys match

    if (xKey === yKey) {
      index++;
      _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
      index += xNode.b || 0;

      xIndex++;
      yIndex++;
      continue;
    }

    // look ahead 1 to detect insertions and removals.

    var xNext = xKids[xIndex + 1];
    var yNext = yKids[yIndex + 1];

    if (xNext) {
      var xNextKey = xNext.bp;
      var xNextNode = xNext.bx;
      oldMatch = yKey === xNextKey;
    }

    if (yNext) {
      var yNextKey = yNext.bp;
      var yNextNode = yNext.bx;
      newMatch = xKey === yNextKey;
    }

    // swap x and y
    if (newMatch && oldMatch) {
      index++;
      _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
      _VirtualDom_insertNode(
        changes,
        localPatches,
        xKey,
        yNode,
        yIndex,
        inserts
      );
      index += xNode.b || 0;

      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
      index += xNextNode.b || 0;

      xIndex += 2;
      yIndex += 2;
      continue;
    }

    // insert y
    if (newMatch) {
      index++;
      _VirtualDom_insertNode(
        changes,
        localPatches,
        yKey,
        yNode,
        yIndex,
        inserts
      );
      _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
      index += xNode.b || 0;

      xIndex += 1;
      yIndex += 2;
      continue;
    }

    // remove x
    if (oldMatch) {
      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
      index += xNode.b || 0;

      index++;
      _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
      index += xNextNode.b || 0;

      xIndex += 2;
      yIndex += 1;
      continue;
    }

    // remove x, insert y
    if (xNext && xNextKey === yNextKey) {
      index++;
      _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
      _VirtualDom_insertNode(
        changes,
        localPatches,
        yKey,
        yNode,
        yIndex,
        inserts
      );
      index += xNode.b || 0;

      index++;
      _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
      index += xNextNode.b || 0;

      xIndex += 2;
      yIndex += 2;
      continue;
    }

    break;
  }

  // eat up any remaining nodes with removeNode and insertNode

  while (xIndex < xLen) {
    index++;
    var x = xKids[xIndex];
    var xNode = x.bx;
    _VirtualDom_removeNode(changes, localPatches, x.bp, xNode, index);
    index += xNode.b || 0;
    xIndex++;
  }

  while (yIndex < yLen) {
    var endInserts = endInserts || [];
    var y = yKids[yIndex];
    _VirtualDom_insertNode(
      changes,
      localPatches,
      y.bp,
      y.bx,
      undefined,
      endInserts
    );
    yIndex++;
  }

  if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
    _VirtualDom_pushPatch(patches, 8, rootIndex, {
      x: localPatches,
      y: inserts,
      z: endInserts,
    });
  }
}

// CHANGES FROM KEYED DIFF

var _VirtualDom_POSTFIX = "_grenW6BL";

function _VirtualDom_insertNode(
  changes,
  localPatches,
  key,
  vnode,
  yIndex,
  inserts
) {
  var entry = changes[key];

  // never seen this key before
  if (!entry) {
    entry = {
      c: 0,
      A: vnode,
      s: yIndex,
      t: undefined,
    };

    inserts.push({ s: yIndex, B: entry });
    changes[key] = entry;

    return;
  }

  // this key was removed earlier, a match!
  if (entry.c === 1) {
    inserts.push({ s: yIndex, B: entry });

    entry.c = 2;
    var subPatches = [];
    _VirtualDom_diffHelp(entry.A, vnode, subPatches, entry.s);
    entry.s = yIndex;
    entry.t.t = {
      x: subPatches,
      B: entry,
    };

    return;
  }

  // this key has already been inserted or moved, a duplicate!
  _VirtualDom_insertNode(
    changes,
    localPatches,
    key + _VirtualDom_POSTFIX,
    vnode,
    yIndex,
    inserts
  );
}

function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
  var entry = changes[key];

  // never seen this key before
  if (!entry) {
    var patch = _VirtualDom_pushPatch(
      localPatches,
      9,
      index,
      undefined
    );

    changes[key] = {
      c: 1,
      A: vnode,
      s: index,
      t: patch,
    };

    return;
  }

  // this key was inserted earlier, a match!
  if (entry.c === 0) {
    entry.c = 2;
    var subPatches = [];
    _VirtualDom_diffHelp(vnode, entry.A, subPatches, index);

    _VirtualDom_pushPatch(localPatches, 9, index, {
      x: subPatches,
      B: entry,
    });

    return;
  }

  // this key has already been removed or moved, a duplicate!
  _VirtualDom_removeNode(
    changes,
    localPatches,
    key + _VirtualDom_POSTFIX,
    vnode,
    index
  );
}

// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.

function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
  _VirtualDom_addDomNodesHelp(
    domNode,
    vNode,
    patches,
    0,
    0,
    vNode.b,
    eventNode
  );
}

// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(
  domNode,
  vNode,
  patches,
  i,
  low,
  high,
  eventNode
) {
  var patch = patches[i];
  var index = patch.s;

  while (index === low) {
    var patchType = patch.$;

    if (patchType === 1) {
      _VirtualDom_addDomNodes(domNode, vNode.k, patch.t, eventNode);
    } else if (patchType === 8) {
      patch.u = domNode;
      patch.v = eventNode;

      var subPatches = patch.t.x;
      if (subPatches.length > 0) {
        _VirtualDom_addDomNodesHelp(
          domNode,
          vNode,
          subPatches,
          0,
          low,
          high,
          eventNode
        );
      }
    } else if (patchType === 9) {
      patch.u = domNode;
      patch.v = eventNode;

      var data = patch.t;
      if (data) {
        data.B.t = domNode;
        var subPatches = data.x;
        if (subPatches.length > 0) {
          _VirtualDom_addDomNodesHelp(
            domNode,
            vNode,
            subPatches,
            0,
            low,
            high,
            eventNode
          );
        }
      }
    } else {
      patch.u = domNode;
      patch.v = eventNode;
    }

    i++;

    if (!(patch = patches[i]) || (index = patch.s) > high) {
      return i;
    }
  }

  var tag = vNode.$;

  if (tag === 4) {
    var subNode = vNode.k;

    while (subNode.$ === 4) {
      subNode = subNode.k;
    }

    return _VirtualDom_addDomNodesHelp(
      domNode,
      subNode,
      patches,
      i,
      low + 1,
      high,
      domNode.gren_event_node_ref
    );
  }

  // tag must be 1 or 2 at this point

  var vKids = vNode.e;
  var childNodes = domNode.childNodes;
  for (var j = 0; j < vKids.length; j++) {
    low++;
    var vKid = tag === 1 ? vKids[j] : vKids[j].bx;
    var nextLow = low + (vKid.b || 0);
    if (low <= index && index <= nextLow) {
      i = _VirtualDom_addDomNodesHelp(
        childNodes[j],
        vKid,
        patches,
        i,
        low,
        nextLow,
        eventNode
      );
      if (!(patch = patches[i]) || (index = patch.s) > high) {
        return i;
      }
    }
    low = nextLow;
  }
  return i;
}

// APPLY PATCHES

function _VirtualDom_applyPatches(
  rootDomNode,
  oldVirtualNode,
  patches,
  eventNode
) {
  if (patches.length === 0) {
    return rootDomNode;
  }

  _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
  return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
  for (var i = 0; i < patches.length; i++) {
    var patch = patches[i];
    var localDomNode = patch.u;
    var newNode = _VirtualDom_applyPatch(localDomNode, patch);
    if (localDomNode === rootDomNode) {
      rootDomNode = newNode;
    }
  }
  return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch) {
  switch (patch.$) {
    case 0:
      return _VirtualDom_applyPatchRedraw(
        domNode,
        patch.t,
        patch.v
      );

    case 4:
      _VirtualDom_applyFacts(domNode, patch.v, patch.t);
      return domNode;

    case 3:
      domNode.replaceData(0, domNode.length, patch.t);
      return domNode;

    case 1:
      return _VirtualDom_applyPatchesHelp(domNode, patch.t);

    case 2:
      if (domNode.gren_event_node_ref) {
        domNode.gren_event_node_ref.j = patch.t;
      } else {
        domNode.gren_event_node_ref = {
          j: patch.t,
          q: patch.v,
        };
      }
      return domNode;

    case 6:
      var data = patch.t;
      for (var i = 0; i < data.i; i++) {
        domNode.removeChild(domNode.childNodes[data.w]);
      }
      return domNode;

    case 7:
      var data = patch.t;
      var kids = data.e;
      var i = data.w;
      var theEnd = domNode.childNodes[i];
      for (; i < kids.length; i++) {
        domNode.insertBefore(
          _VirtualDom_render(kids[i], patch.v),
          theEnd
        );
      }
      return domNode;

    case 9:
      var data = patch.t;
      if (!data) {
        domNode.parentNode.removeChild(domNode);
        return domNode;
      }
      var entry = data.B;
      if (typeof entry.s !== "undefined") {
        domNode.parentNode.removeChild(domNode);
      }
      entry.t = _VirtualDom_applyPatchesHelp(domNode, data.x);
      return domNode;

    case 8:
      return _VirtualDom_applyPatchReorder(domNode, patch);

    case 5:
      return patch.t(domNode);

    default:
      _Debug_crash(10); // 'Ran into an unknown patch!'
  }
}

function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
  var parentNode = domNode.parentNode;
  var newNode = _VirtualDom_render(vNode, eventNode);

  if (!newNode.gren_event_node_ref) {
    newNode.gren_event_node_ref = domNode.gren_event_node_ref;
  }

  if (parentNode && newNode !== domNode) {
    parentNode.replaceChild(newNode, domNode);
  }
  return newNode;
}

function _VirtualDom_applyPatchReorder(domNode, patch) {
  var data = patch.t;

  // remove end inserts
  var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(
    data.z,
    patch
  );

  // removals
  domNode = _VirtualDom_applyPatchesHelp(domNode, data.x);

  // inserts
  var inserts = data.y;
  for (var i = 0; i < inserts.length; i++) {
    var insert = inserts[i];
    var entry = insert.B;
    var node =
      entry.c === 2
        ? entry.t
        : _VirtualDom_render(entry.A, patch.v);
    domNode.insertBefore(node, domNode.childNodes[insert.s]);
  }

  // add end inserts
  if (frag) {
    _VirtualDom_appendChild(domNode, frag);
  }

  return domNode;
}

function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
  if (!endInserts) {
    return;
  }

  var frag = _VirtualDom_doc.createDocumentFragment();
  for (var i = 0; i < endInserts.length; i++) {
    var insert = endInserts[i];
    var entry = insert.B;
    _VirtualDom_appendChild(
      frag,
      entry.c === 2
        ? entry.t
        : _VirtualDom_render(entry.A, patch.v)
    );
  }
  return frag;
}

function _VirtualDom_virtualize(node) {
  // TEXT NODES

  if (node.nodeType === 3) {
    return _VirtualDom_text(node.textContent);
  }

  // WEIRD NODES

  if (node.nodeType !== 1) {
    return _VirtualDom_text("");
  }

  // ELEMENT NODES

  var attrs = node.attributes;
  var attrList = new Array(attrs.length);

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    var name = attr.name;
    var value = attr.value;
    attrList[i] = A2(_VirtualDom_attribute, name, value);
  }

  var tag = node.tagName.toLowerCase();
  var kids = node.childNodes;
  var kidList = new Array(kids.length);

  for (var i = 0; i < kids.length; i++) {
    kidList[i] = _VirtualDom_virtualize(kids[i]);
  }

  return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode) {
  var keyedKids = keyedNode.e;
  var len = keyedKids.length;
  var kids = new Array(len);

  for (var i = 0; i < len; i++) {
    kids[i] = keyedKids[i].b;
  }

  return {
    $: 1,
    c: keyedNode.c,
    d: keyedNode.d,
    e: kids,
    f: keyedNode.f,
    b: keyedNode.b,
  };
}
var $gren_lang$core$Json$Decode$map = _Json_map1;
var $gren_lang$core$Json$Decode$map2 = _Json_map2;
var $gren_lang$core$Json$Decode$succeed = _Json_succeed;
var $gren_lang$browser$VirtualDom$toHandlerInt = function(handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $gren_lang$browser$Browser$External = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$browser$Browser$Internal = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$browser$Browser$Dom$NotFound = $gren_lang$core$Basics$identity;
var $gren_lang$url$Url$Http = 0;
var $gren_lang$url$Url$Https = 1;
var $gren_lang$core$String$contains = _String_contains;
var $gren_lang$core$Basics$lt = _Utils_lt;
var $gren_lang$core$String$slice = _String_slice;
var $gren_lang$core$String$unitLength = _String_unitLength;
var $gren_lang$core$String$dropFirst$ = function(n, string) {
	return (n < 1) ? string : A3($gren_lang$core$String$slice, n, $gren_lang$core$String$unitLength(string), string);
};
var $gren_lang$core$String$dropFirst = F2($gren_lang$core$String$dropFirst$);
var $gren_lang$core$String$indices = _String_indexes;
var $gren_lang$core$Basics$eq = _Utils_equal;
var $gren_lang$core$String$isEmpty = function(string) {
	return string === '';
};
var $gren_lang$core$String$takeFirst$ = function(n, string) {
	return (n < 1) ? '' : A3($gren_lang$core$String$slice, 0, n, string);
};
var $gren_lang$core$String$takeFirst = F2($gren_lang$core$String$takeFirst$);
var $gren_lang$core$String$toInt = _String_toInt;
var $gren_lang$url$Url$chompBeforePath$ = function(protocol, path, params, frag, str) {
	if ($gren_lang$core$String$isEmpty(str) || A2($gren_lang$core$String$contains, '@', str)) {
		return $gren_lang$core$Maybe$Nothing;
	} else {
		var _v0 = A2($gren_lang$core$String$indices, ':', str);
		switch (_v0.length) {
			case 0:
				return $gren_lang$core$Maybe$Just({ V: frag, aw: str, X: path, aE: $gren_lang$core$Maybe$Nothing, aI: protocol, aK: params });
			case 1:
				var i = _v0[0];
				var _v1 = $gren_lang$core$String$toInt($gren_lang$core$String$dropFirst$(i + 1, str));
				if (_v1.$ === 1) {
					return $gren_lang$core$Maybe$Nothing;
				} else {
					var port_ = _v1;
					return $gren_lang$core$Maybe$Just({ V: frag, aw: $gren_lang$core$String$takeFirst$(i, str), X: path, aE: port_, aI: protocol, aK: params });
				}
			default:
				return $gren_lang$core$Maybe$Nothing;
		}
	}
};
var $gren_lang$url$Url$chompBeforePath = F5($gren_lang$url$Url$chompBeforePath$);
var $gren_lang$core$Array$get = _Array_get;
var $gren_lang$url$Url$chompBeforeQuery$ = function(protocol, params, frag, str) {
	if ($gren_lang$core$String$isEmpty(str)) {
		return $gren_lang$core$Maybe$Nothing;
	} else {
		var _v0 = A2($gren_lang$core$Array$get, 0, A2($gren_lang$core$String$indices, '/', str));
		if (_v0.$ === 1) {
			return $gren_lang$url$Url$chompBeforePath$(protocol, '/', params, frag, str);
		} else {
			var i = _v0.a;
			return $gren_lang$url$Url$chompBeforePath$(protocol, $gren_lang$core$String$dropFirst$(i, str), params, frag, $gren_lang$core$String$takeFirst$(i, str));
		}
	}
};
var $gren_lang$url$Url$chompBeforeQuery = F4($gren_lang$url$Url$chompBeforeQuery$);
var $gren_lang$url$Url$chompBeforeFragment$ = function(protocol, frag, str) {
	if ($gren_lang$core$String$isEmpty(str)) {
		return $gren_lang$core$Maybe$Nothing;
	} else {
		var _v0 = A2($gren_lang$core$Array$get, 0, A2($gren_lang$core$String$indices, '?', str));
		if (_v0.$ === 1) {
			return $gren_lang$url$Url$chompBeforeQuery$(protocol, $gren_lang$core$Maybe$Nothing, frag, str);
		} else {
			var i = _v0.a;
			return $gren_lang$url$Url$chompBeforeQuery$(protocol, $gren_lang$core$Maybe$Just($gren_lang$core$String$dropFirst$(i + 1, str)), frag, $gren_lang$core$String$takeFirst$(i, str));
		}
	}
};
var $gren_lang$url$Url$chompBeforeFragment = F3($gren_lang$url$Url$chompBeforeFragment$);
var $gren_lang$url$Url$chompAfterProtocol$ = function(protocol, str) {
	if ($gren_lang$core$String$isEmpty(str)) {
		return $gren_lang$core$Maybe$Nothing;
	} else {
		var _v0 = A2($gren_lang$core$Array$get, 0, A2($gren_lang$core$String$indices, '#', str));
		if (_v0.$ === 1) {
			return $gren_lang$url$Url$chompBeforeFragment$(protocol, $gren_lang$core$Maybe$Nothing, str);
		} else {
			var i = _v0.a;
			return $gren_lang$url$Url$chompBeforeFragment$(protocol, $gren_lang$core$Maybe$Just($gren_lang$core$String$dropFirst$(i + 1, str)), $gren_lang$core$String$takeFirst$(i, str));
		}
	}
};
var $gren_lang$url$Url$chompAfterProtocol = F2($gren_lang$url$Url$chompAfterProtocol$);
var $gren_lang$core$String$startsWith = _String_startsWith;
var $gren_lang$url$Url$fromString = function(str) {
	return A2($gren_lang$core$String$startsWith, 'http://', str) ? $gren_lang$url$Url$chompAfterProtocol$(0, $gren_lang$core$String$dropFirst$(7, str)) : (A2($gren_lang$core$String$startsWith, 'https://', str) ? $gren_lang$url$Url$chompAfterProtocol$(1, $gren_lang$core$String$dropFirst$(8, str)) : $gren_lang$core$Maybe$Nothing);
};
var $gren_lang$core$Basics$never = function(_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $gren_lang$core$Task$Perform = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Task$succeed = _Scheduler_succeed;
var $gren_lang$core$Task$init = $gren_lang$core$Task$succeed({  });
var $gren_lang$core$Array$map = _Array_map;
var $gren_lang$core$Task$andThen = _Scheduler_andThen;
var $gren_lang$core$Task$map$ = function(func, taskA) {
	return A2($gren_lang$core$Task$andThen, function(a) {
			return $gren_lang$core$Task$succeed(func(a));
		}, taskA);
};
var $gren_lang$core$Task$map = F2($gren_lang$core$Task$map$);
var $gren_lang$core$Array$foldr = _Array_foldr;
var $gren_lang$core$Task$map2$ = function(func, taskA, taskB) {
	return A2($gren_lang$core$Task$andThen, function(a) {
			return A2($gren_lang$core$Task$andThen, function(b) {
					return $gren_lang$core$Task$succeed(A2(func, a, b));
				}, taskB);
		}, taskA);
};
var $gren_lang$core$Task$map2 = F3($gren_lang$core$Task$map2$);
var $gren_lang$core$Array$pushFirst$ = function(value, array) {
	return A4(_Array_splice1, 0, 0, value, array);
};
var $gren_lang$core$Array$pushFirst = F2($gren_lang$core$Array$pushFirst$);
var $gren_lang$core$Task$sequence = function(tasks) {
	return A3($gren_lang$core$Array$foldr, $gren_lang$core$Task$map2($gren_lang$core$Array$pushFirst), $gren_lang$core$Task$succeed([  ]), tasks);
};
var $gren_lang$core$Platform$sendToApp = _Platform_sendToApp;
var $gren_lang$core$Task$spawnCmd$ = function(router, cmd) {
	if (!cmd.$) {
		var task = cmd.a;
		return _Scheduler_spawn(A2($gren_lang$core$Task$andThen, $gren_lang$core$Platform$sendToApp(router), task));
	} else {
		var task = cmd.a;
		return _Scheduler_spawn(task);
	}
};
var $gren_lang$core$Task$spawnCmd = F2($gren_lang$core$Task$spawnCmd$);
var $gren_lang$core$Task$onEffects$ = function(router, commands, state) {
	return $gren_lang$core$Task$map$(function(_v0) {
			return {  };
		}, $gren_lang$core$Task$sequence(A2($gren_lang$core$Array$map, $gren_lang$core$Task$spawnCmd(router), commands)));
};
var $gren_lang$core$Task$onEffects = F3($gren_lang$core$Task$onEffects$);
var $gren_lang$core$Task$onSelfMsg$ = function(_v0, _v1, _v2) {
	return $gren_lang$core$Task$succeed({  });
};
var $gren_lang$core$Task$onSelfMsg = F3($gren_lang$core$Task$onSelfMsg$);
var $gren_lang$core$Task$Execute = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Task$cmdMap$ = function(tagger, cmd) {
	if (!cmd.$) {
		var task = cmd.a;
		return $gren_lang$core$Task$Perform($gren_lang$core$Task$map$(tagger, task));
	} else {
		var task = cmd.a;
		return $gren_lang$core$Task$Execute(task);
	}
};
var $gren_lang$core$Task$cmdMap = F2($gren_lang$core$Task$cmdMap$);
_Platform_effectManagers['Task'] = _Platform_createManager($gren_lang$core$Task$init, $gren_lang$core$Task$onEffects, $gren_lang$core$Task$onSelfMsg, $gren_lang$core$Task$cmdMap);
var $gren_lang$core$Task$command = _Platform_leaf('Task');
var $gren_lang$core$Task$perform$ = function(toMessage, task) {
	return $gren_lang$core$Task$command($gren_lang$core$Task$Perform($gren_lang$core$Task$map$(toMessage, task)));
};
var $gren_lang$core$Task$perform = F2($gren_lang$core$Task$perform$);
var $gren_lang$core$Platform$Cmd$batch = _Platform_batch;
var $gren_lang$core$Platform$Cmd$none = $gren_lang$core$Platform$Cmd$batch([  ]);
var $gren_lang$core$Platform$Sub$batch = _Platform_batch;
var $gren_lang$core$Platform$Sub$none = $gren_lang$core$Platform$Sub$batch([  ]);
var $gren_lang$browser$Browser$sandbox = function(impl) {
	return _Browser_element({ bl: function(_v0) {
			return { an: $gren_lang$core$Platform$Cmd$none, aA: impl.bl };
		}, bP: function(_v1) {
			return $gren_lang$core$Platform$Sub$none;
		}, bR: F2(function(msg, model) {
				return { an: $gren_lang$core$Platform$Cmd$none, aA: A2(impl.bR, msg, model) };
			}), bS: impl.bS });
};
var $author$project$Example$Paginated$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aK: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aT: newState });
	}
};
var $author$project$Example$Paginated$update = F2($author$project$Example$Paginated$update$);
var $author$project$Example$Presidents$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aK: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aT: newState });
	}
};
var $author$project$Example$Presidents$update = F2($author$project$Example$Presidents$update$);
var $author$project$DocBook$update$ = function(msg, model) {
	switch (msg.$) {
		case 0:
			var exampleToSwitchTo = msg.a;
			return _Utils_update(model, { A: exampleToSwitchTo });
		case 1:
			var exampleMsg = msg.a;
			return _Utils_update(model, { L: $author$project$Example$Presidents$update$(exampleMsg, function ($) {
						return $.L;
					}(model)) });
		default:
			var exampleMsg = msg.a;
			return _Utils_update(model, { K: $author$project$Example$Paginated$update$(exampleMsg, function ($) {
						return $.K;
					}(model)) });
	}
};
var $author$project$DocBook$update = F2($author$project$DocBook$update$);
var $author$project$DocBook$PaginatedMsg = function (a) {
	return { $: 2, a: a };
};
var $author$project$DocBook$PresidentsMsg = function (a) {
	return { $: 1, a: a };
};
var $author$project$DocBook$SwitchExample = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$browser$VirtualDom$node = function(tag) {
	return _VirtualDom_node(_VirtualDom_noScript(tag));
};
var $gren_lang$browser$Html$node = $gren_lang$browser$VirtualDom$node;
var $gren_lang$browser$Html$article = $gren_lang$browser$Html$node('article');
var $gren_lang$browser$Html$button = $gren_lang$browser$Html$node('button');
var $author$project$DocBook$ShowPaginated = 1;
var $author$project$DocBook$buttons = [ 0, 1 ];
var $gren_lang$browser$VirtualDom$property$ = function(key, value) {
	return A2(_VirtualDom_property, _VirtualDom_noInnerHtmlOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
};
var $gren_lang$browser$VirtualDom$property = F2($gren_lang$browser$VirtualDom$property$);
var $gren_lang$browser$Html$Attributes$property = $gren_lang$browser$VirtualDom$property;
var $gren_lang$core$Json$Encode$string = _Json_wrap;
var $gren_lang$browser$Html$Attributes$stringProperty$ = function(key, string) {
	return A2($gren_lang$browser$Html$Attributes$property, key, $gren_lang$core$Json$Encode$string(string));
};
var $gren_lang$browser$Html$Attributes$stringProperty = F2($gren_lang$browser$Html$Attributes$stringProperty$);
var $gren_lang$browser$Html$Attributes$class = $gren_lang$browser$Html$Attributes$stringProperty('className');
var $gren_lang$browser$Html$div = $gren_lang$browser$Html$node('div');
var $author$project$DocBook$exampleName = function(variant) {
	if (!variant) {
		return 'Sorting';
	} else {
		return 'Pagination';
	}
};
var $gren_lang$browser$Html$h3 = $gren_lang$browser$Html$node('h3');
var $gren_lang$browser$Html$Attributes$id = $gren_lang$browser$Html$Attributes$stringProperty('id');
var $gren_lang$browser$VirtualDom$map = _VirtualDom_map;
var $gren_lang$browser$Html$map = $gren_lang$browser$VirtualDom$map;
var $gren_lang$browser$Html$nav = $gren_lang$browser$Html$node('nav');
var $gren_lang$core$Basics$negate = function(n) {
	return -n;
};
var $gren_lang$browser$VirtualDom$Normal = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$browser$VirtualDom$on = _VirtualDom_on;
var $gren_lang$browser$Html$Events$on$ = function(event, decoder) {
	return A2($gren_lang$browser$VirtualDom$on, event, $gren_lang$browser$VirtualDom$Normal(decoder));
};
var $gren_lang$browser$Html$Events$on = F2($gren_lang$browser$Html$Events$on$);
var $gren_lang$browser$Html$Events$onClick = function(msg) {
	return $gren_lang$browser$Html$Events$on$('click', $gren_lang$core$Json$Decode$succeed(msg));
};
var $gren_lang$browser$VirtualDom$attribute$ = function(key, value) {
	return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
};
var $gren_lang$browser$VirtualDom$attribute = F2($gren_lang$browser$VirtualDom$attribute$);
var $gren_lang$browser$Html$Attributes$attribute = $gren_lang$browser$VirtualDom$attribute;
var $gren_lang$browser$Html$Attributes$tabindex = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'tabIndex', $gren_lang$core$String$fromInt(n));
};
var $gren_lang$browser$VirtualDom$text = _VirtualDom_text;
var $gren_lang$browser$Html$text = $gren_lang$browser$VirtualDom$text;
var $author$project$Example$Paginated$SetQuery = function (a) {
	return { $: 0, a: a };
};
var $author$project$Example$Paginated$SetTableState = function (a) {
	return { $: 1, a: a };
};
var $author$project$DataTable$Config = $gren_lang$core$Basics$identity;
var $author$project$DataTable$Desc = 1;
var $gren_lang$core$Array$keepIf = _Array_filter;
var $gren_lang$browser$Html$Attributes$classList = function(classes) {
	return $gren_lang$browser$Html$Attributes$class(A2($gren_lang$core$String$join, ' ', A2($gren_lang$core$Array$map, function ($) {
					return $.m;
				}, A2($gren_lang$core$Array$keepIf, function ($) {
						return $.n;
					}, classes))));
};
var $gren_lang$browser$Html$Attributes$colspan = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'colspan', $gren_lang$core$String$fromInt(n));
};
var $gren_lang$core$Basics$gt = _Utils_gt;
var $author$project$Html$Attributes$Aria$label = $gren_lang$browser$Html$Attributes$attribute('aria-label');
var $gren_lang$core$Array$findFirst = _Array_findFirst;
var $gren_lang$core$Array$member$ = function(value, array) {
	var _v0 = A2($gren_lang$core$Array$findFirst, function(v) {
			return _Utils_eq(v, value);
		}, array);
	if (!_v0.$) {
		return true;
	} else {
		return false;
	}
};
var $gren_lang$core$Array$member = F2($gren_lang$core$Array$member$);
var $gren_lang$browser$Html$Attributes$rowspan = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'rowspan', $gren_lang$core$String$fromInt(n));
};
var $author$project$Html$Attributes$Aria$sort = $gren_lang$browser$Html$Attributes$attribute('aria-sort');
var $author$project$DataTable$sortDirectionToString = function(sortDirection) {
	if (!sortDirection) {
		return 'Asc';
	} else {
		return 'Desc';
	}
};
var $gren_lang$browser$Html$span = $gren_lang$browser$Html$node('span');
var $gren_lang$browser$VirtualDom$style = _VirtualDom_style;
var $gren_lang$browser$Html$Attributes$style = $gren_lang$browser$VirtualDom$style;
var $gren_lang$browser$Html$sup = $gren_lang$browser$Html$node('sup');
var $gren_lang$browser$Html$th = $gren_lang$browser$Html$node('th');
var $gren_lang$browser$Html$tr = $gren_lang$browser$Html$node('tr');
var $author$project$DataTable$defaultTableHeader = function(headerInfos) {
	var defaultTH = function(_v3) {
		var name = _v3.h;
		var selected = _v3.bJ;
		var sortDirections = _v3.aP;
		var clickActions = _v3.ba;
		var sortSequenceNumber = function () {
			if (!selected.$) {
				var sortRank = selected.a.bM;
				return (sortRank === 0) ? [  ] : [ A2($gren_lang$browser$Html$sup, [ A2($gren_lang$browser$Html$Attributes$style, 'opacity', '0.4') ], [ $gren_lang$browser$Html$text($gren_lang$core$String$fromInt(sortRank)) ]) ];
			} else {
				return [  ];
			}
		}();
		var rowAndColSpan = [ $gren_lang$browser$Html$Attributes$rowspan(1), $gren_lang$browser$Html$Attributes$colspan(1) ];
		var isSorted = function(viewedSortDirection) {
			if (!selected.$) {
				var sortDirection = selected.a.N;
				return _Utils_eq(viewedSortDirection, sortDirection);
			} else {
				return false;
			}
		};
		var columnTitle = A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$class('dt-column-title') ], [ $gren_lang$browser$Html$text(name) ]);
		var columnOrder = ($gren_lang$core$Array$length(sortDirections) > 0) ? A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$classList([ { m: 'dt-column-order', n: true } ]), $author$project$Html$Attributes$Aria$label('Click here to sort by this column'), A2($gren_lang$browser$Html$Attributes$attribute, 'role', 'button'), $gren_lang$browser$Html$Attributes$tabindex(0) ], sortSequenceNumber) : $gren_lang$browser$Html$text('');
		var canBeSorted = function(sortDirection) {
			return $gren_lang$core$Array$member$(sortDirection, sortDirections);
		};
		var thClasses = [ $gren_lang$browser$Html$Attributes$classList([ { m: 'dt-orderable-asc', n: canBeSorted(0) }, { m: 'dt-orderable-desc', n: canBeSorted(1) }, { m: 'dt-ordering-asc', n: isSorted(0) }, { m: 'dt-ordering-desc', n: isSorted(1) }, { m: 'dt-ordering-none', n: (!isSorted(0)) && (!isSorted(1)) } ]) ];
		var ariaSort = function () {
			if (!selected.$) {
				var sortDirection = selected.a.N;
				return [ $author$project$Html$Attributes$Aria$sort($author$project$DataTable$sortDirectionToString(sortDirection)) ];
			} else {
				return [  ];
			}
		}();
		var thAttributes = _Utils_ap(clickActions, _Utils_ap(ariaSort, _Utils_ap(rowAndColSpan, thClasses)));
		return A2($gren_lang$browser$Html$th, thAttributes, [ A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$class('dt-column-header') ], [ columnTitle, columnOrder ]) ]);
	};
	return { B: [  ], C: [ A2($gren_lang$browser$Html$tr, [  ], A2($gren_lang$core$Array$map, defaultTH, headerInfos)) ] };
};
var $author$project$DataTable$getActiveRowId = function(_v0) {
	var activeRowId = _v0.f;
	return activeRowId;
};
var $author$project$DataTable$simpleRowAttrs$ = function(toId, toMsg, state, data) {
	var is_current_row = _Utils_eq(toId(data), $author$project$DataTable$getActiveRowId(state)) ? true : false;
	return is_current_row ? [ A2($gren_lang$browser$Html$Attributes$style, 'background', '#CEFAF8') ] : [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateActiveRowId$(toId(data), state))) ];
};
var $author$project$DataTable$simpleRowAttrs = F4($author$project$DataTable$simpleRowAttrs$);
var $author$project$DataTable$defaultCustomizations = { a5: { a2: $gren_lang$core$Maybe$Nothing, a4: $gren_lang$core$Maybe$Nothing }, ak: $gren_lang$core$Maybe$Nothing, bb: function(_v0) {
	return $gren_lang$core$Maybe$Nothing;
}, aM: $author$project$DataTable$simpleRowAttrs, aS: [ $gren_lang$browser$Html$Attributes$class('dataTable') ], aU: [  ], aV: $gren_lang$core$Maybe$Nothing, aW: $author$project$DataTable$defaultTableHeader };
var $author$project$DataTable$config = function(_v0) {
	var toId = _v0.aZ;
	var toMsg = _v0.a$;
	var columns = _v0.am;
	return { am: A2($gren_lang$core$Array$map, function(_v1) {
			var cData = _v1;
			return cData;
		}, columns), ao: $author$project$DataTable$defaultCustomizations, aZ: toId, a$: toMsg };
};
var $author$project$DataTable$Column = $gren_lang$core$Basics$identity;
var $author$project$DataTable$IncOrDec = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$core$Array$sortBy = _Array_sortBy;
var $author$project$DataTable$increasingOrDecreasingBy = function(toComparable) {
	return $author$project$DataTable$IncOrDec($gren_lang$core$Array$sortBy(toComparable));
};
var $author$project$DataTable$textDetails = function(str) {
	return { B: [  ], C: [ $gren_lang$browser$Html$text(str) ] };
};
var $author$project$DataTable$intColumn$ = function(name, toInt) {
	return { h: name, x: $author$project$DataTable$increasingOrDecreasingBy(toInt), z: $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, $gren_lang$core$String$fromInt), toInt) };
};
var $author$project$DataTable$intColumn = F2($author$project$DataTable$intColumn$);
var $author$project$DataTable$stringColumn$ = function(name, toStr) {
	return { h: name, x: $author$project$DataTable$increasingOrDecreasingBy(toStr), z: $gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, toStr) };
};
var $author$project$DataTable$stringColumn = F2($author$project$DataTable$stringColumn$);
var $author$project$Example$Paginated$config = $author$project$DataTable$config({ am: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.h;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.a1;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.al;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.aQ;
		}) ], aZ: function ($) {
		return $.h;
	}, a$: $author$project$Example$Paginated$SetTableState });
var $gren_lang$browser$Html$h1 = $gren_lang$browser$Html$node('h1');
var $gren_lang$browser$Html$input = $gren_lang$browser$Html$node('input');
var $gren_lang$browser$Html$Events$alwaysStop = function(msg) {
	return { bs: msg, y: true };
};
var $gren_lang$browser$VirtualDom$MayStopPropagation = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$browser$Html$Events$stopPropagationOn$ = function(event, decoder) {
	return A2($gren_lang$browser$VirtualDom$on, event, $gren_lang$browser$VirtualDom$MayStopPropagation(decoder));
};
var $gren_lang$browser$Html$Events$stopPropagationOn = F2($gren_lang$browser$Html$Events$stopPropagationOn$);
var $gren_lang$core$Json$Decode$field = _Json_decodeField;
var $gren_lang$core$Json$Decode$at$ = function(fields, decoder) {
	return A3($gren_lang$core$Array$foldr, $gren_lang$core$Json$Decode$field, decoder, fields);
};
var $gren_lang$core$Json$Decode$at = F2($gren_lang$core$Json$Decode$at$);
var $gren_lang$core$Json$Decode$string = _Json_decodeString;
var $gren_lang$browser$Html$Events$targetValue = $gren_lang$core$Json$Decode$at$([ 'target', 'value' ], $gren_lang$core$Json$Decode$string);
var $gren_lang$browser$Html$Events$onInput = function(tagger) {
	return $gren_lang$browser$Html$Events$stopPropagationOn$('input', A2($gren_lang$core$Json$Decode$map, $gren_lang$browser$Html$Events$alwaysStop, A2($gren_lang$core$Json$Decode$map, tagger, $gren_lang$browser$Html$Events$targetValue)));
};
var $author$project$DataTable$getPageSize = function(_v0) {
	var pageSize = _v0.d;
	return pageSize;
};
var $gren_lang$browser$Html$option = $gren_lang$browser$Html$node('option');
var $gren_lang$browser$Html$select = $gren_lang$browser$Html$node('select');
var $gren_lang$core$Json$Encode$bool = _Json_wrap;
var $gren_lang$browser$Html$Attributes$boolProperty$ = function(key, bool) {
	return A2($gren_lang$browser$Html$Attributes$property, key, $gren_lang$core$Json$Encode$bool(bool));
};
var $gren_lang$browser$Html$Attributes$boolProperty = F2($gren_lang$browser$Html$Attributes$boolProperty$);
var $gren_lang$browser$Html$Attributes$selected = $gren_lang$browser$Html$Attributes$boolProperty('selected');
var $gren_lang$core$Basics$ge = _Utils_ge;
var $gren_lang$core$Array$slice = _Array_slice;
var $gren_lang$core$Array$dropFirst$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, n, $gren_lang$core$Array$length(array), array);
};
var $gren_lang$core$Array$dropFirst = F2($gren_lang$core$Array$dropFirst$);
var $gren_lang$core$Array$first = function(array) {
	return A2($gren_lang$core$Array$get, 0, array);
};
var $gren_lang$core$Array$popFirst = function(array) {
	var _v0 = $gren_lang$core$Array$first(array);
	if (!_v0.$) {
		var value = _v0.a;
		return $gren_lang$core$Maybe$Just({ bh: value, bF: $gren_lang$core$Array$dropFirst$(1, array) });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $author$project$DataTable$updatePageSize$ = function(minimumNewPageSize, _v0) {
	var _v1 = _v0;
	var sortColumns = _v1.j;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.k;
	var nextHigherInList = F2(function(input, list) {
			var _v3 = $gren_lang$core$Array$popFirst(A2($gren_lang$core$Array$keepIf, function(x) {
						return _Utils_cmp(x, input) > -1;
					}, $gren_lang$core$Array$sort(list)));
			if (!_v3.$) {
				var x = _v3.a;
				return function ($) {
					return $.bh;
				}(x);
			} else {
				return 0;
			}
		});
	var newPageSize = function () {
		switch (pagination.$) {
			case 1:
				var list = pagination.a;
				return A2(nextHigherInList, minimumNewPageSize, list);
			case 2:
				var list = pagination.a;
				return A2(nextHigherInList, minimumNewPageSize, list);
			default:
				return 0;
		}
	}();
	return { f: activeRowId, d: newPageSize, b: pagination, j: sortColumns, k: tableId };
};
var $author$project$DataTable$updatePageSize = F2($author$project$DataTable$updatePageSize$);
var $gren_lang$browser$Html$Attributes$value = $gren_lang$browser$Html$Attributes$stringProperty('value');
var $gren_lang$core$Maybe$withDefault$ = function(_default, maybe) {
	if (!maybe.$) {
		var value = maybe.a;
		return value;
	} else {
		return _default;
	}
};
var $gren_lang$core$Maybe$withDefault = F2($gren_lang$core$Maybe$withDefault$);
var $author$project$DataTable$pageLengthChooser$ = function(_v0, tableState) {
	var toMsg = _v0.a$;
	var pagination = tableState.b;
	var viewOption = function(values) {
		return A3($gren_lang$core$Array$foldr, F2(function(val, html) {
					return _Utils_ap([ A2($gren_lang$browser$Html$option, [ $gren_lang$browser$Html$Attributes$value(val), $gren_lang$browser$Html$Attributes$selected(_Utils_eq($gren_lang$core$String$fromInt($author$project$DataTable$getPageSize(tableState)), val)) ], [ $gren_lang$browser$Html$text(val) ]) ], html);
				}), [  ], A2($gren_lang$core$Array$map, $gren_lang$core$String$fromInt, values));
	};
	var onPageSizeChoice = function(state) {
		return $gren_lang$browser$Html$Events$on$('change', A2($gren_lang$core$Json$Decode$map, function(newPageSize) {
					return toMsg($author$project$DataTable$updatePageSize$(newPageSize, state));
				}, A2($gren_lang$core$Json$Decode$map, $gren_lang$core$Basics$composeL$($gren_lang$core$Maybe$withDefault(0), $gren_lang$core$String$toInt), $gren_lang$browser$Html$Events$targetValue)));
	};
	return A2($gren_lang$browser$Html$select, [ onPageSizeChoice(tableState) ], function () {
			switch (pagination.$) {
				case 1:
					var values = pagination.a;
					return viewOption(values);
				case 2:
					var values = pagination.a;
					return viewOption(values);
				default:
					return [  ];
			}
		}());
};
var $author$project$DataTable$pageLengthChooser = F2($author$project$DataTable$pageLengthChooser$);
var $gren_lang$browser$Html$Attributes$placeholder = $gren_lang$browser$Html$Attributes$stringProperty('placeholder');
var $gren_lang$core$String$toLower = _String_toLower;
var $gren_lang$browser$Html$caption = $gren_lang$browser$Html$node('caption');
var $gren_lang$core$Basics$compare = _Utils_compare;
var $gren_lang$core$Basics$idiv = _Basics_idiv;


// MATH

var _Math_remainderBy = F2(function (b, a) {
  return a % b;
});

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Math_modBy = F2(function (modulus, x) {
  var answer = x % modulus;
  return modulus === 0
    ? _Debug_crash(11)
    : (answer > 0 && modulus < 0) || (answer < 0 && modulus > 0)
      ? answer + modulus
      : answer;
});

// CONSTANTS

var _Math_pi = Math.PI;
var _Math_e = Math.E;
var _Math_maxSafeInteger = Number.MAX_SAFE_INTEGER;
var _Math_minSafeInteger = Number.MIN_SAFE_INTEGER;
var _Math_maxFloat = Number.MAX_VALUE;

// TRIGONOMETRY

var _Math_cos = Math.cos;
var _Math_sin = Math.sin;
var _Math_tan = Math.tan;
var _Math_acos = Math.acos;
var _Math_asin = Math.asin;
var _Math_atan = Math.atan;
var _Math_atan2 = F2(Math.atan2);

// MORE MATH

var _Math_truncate = Math.trunc;
var _Math_ceiling = Math.ceil;
var _Math_floor = Math.floor;
var _Math_round = Math.round;
var _Math_sqrt = Math.sqrt;
var _Math_log = Math.log;
var _Math_log10 = Math.log10;
var $gren_lang$core$Math$modBy = _Math_modBy;
var $author$project$DataTable$isEven = function(_int) {
	return A2($gren_lang$core$Math$modBy, 2, _int) === 0;
};
var $gren_lang$core$Maybe$map$ = function(f, maybe) {
	if (!maybe.$) {
		var value = maybe.a;
		return $gren_lang$core$Maybe$Just(f(value));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$core$Maybe$map = F2($gren_lang$core$Maybe$map$);
var $gren_lang$core$Basics$mul = _Basics_mul;
var $author$project$DataTable$negativeToZero = function(n) {
	var _v0 = A2($gren_lang$core$Basics$compare, n, 0);
	if (!_v0) {
		return 0;
	} else {
		return n;
	}
};
var $gren_lang$core$Basics$sub = _Basics_sub;
var $gren_lang$core$Array$takeFirst$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, 0, n, array);
};
var $gren_lang$core$Array$takeFirst = F2($gren_lang$core$Array$takeFirst$);
var $author$project$DataTable$getPaginatedData$ = function(_v0, _v1, data) {
	var toId = _v0.aZ;
	var _v2 = _v1;
	var pageSize = _v2.d;
	var activeRowId = _v2.f;
	var pagination = _v2.b;
	var rowCursor = $gren_lang$core$Maybe$withDefault$(0, $gren_lang$core$Maybe$map$(function(i) {
				return i + 1;
			}, $gren_lang$core$Maybe$map$(function ($) {
					return $.bk;
				}, A2($gren_lang$core$Array$findFirst, function(v) {
						return _Utils_eq(toId(v), activeRowId);
					}, data))));
	var precedingFullPages = ((rowCursor - 1) / pageSize) | 0;
	var lastRowOnPage = function () {
		switch (pagination.$) {
			case 1:
				if (!pageSize) {
					return $gren_lang$core$Array$length(data);
				} else {
					return (precedingFullPages + 1) * pageSize;
				}
			case 2:
				if (pageSize === 0) {
					return $gren_lang$core$Array$length(data);
				} else {
					var _v7 = A2($gren_lang$core$Basics$compare, rowCursor, (pageSize / 2) | 0);
					if (_v7 === 2) {
						return rowCursor + ((pageSize / 2) | 0);
					} else {
						return pageSize;
					}
				}
			default:
				return $gren_lang$core$Array$length(data);
		}
	}();
	var lastRowBeforePage = function () {
		switch (pagination.$) {
			case 1:
				return precedingFullPages * pageSize;
			case 2:
				if (pageSize === 0) {
					return rowCursor - 2;
				} else {
					var _v4 = A2($gren_lang$core$Basics$compare, rowCursor, $gren_lang$core$Array$length(data) - ((pageSize / 2) | 0));
					if (_v4 === 2) {
						return $gren_lang$core$Array$length(data) - pageSize;
					} else {
						return $author$project$DataTable$isEven(pageSize) ? (rowCursor - ((pageSize / 2) | 0)) : ((rowCursor - ((pageSize / 2) | 0)) - 1);
					}
				}
			default:
				return 0;
		}
	}();
	return $gren_lang$core$Array$dropFirst$($author$project$DataTable$negativeToZero(lastRowBeforePage), $gren_lang$core$Array$takeFirst$($author$project$DataTable$negativeToZero(lastRowOnPage), data));
};
var $author$project$DataTable$getPaginatedData = F3($author$project$DataTable$getPaginatedData$);
var $gren_lang$core$Array$reverse = _Array_reverse;
var $author$project$DataTable$applySorter$ = function(sortDirection, sorter, data) {
	switch (sorter.$) {
		case 0:
			return data;
		case 1:
			return data;
		case 2:
			var srt = sorter.a;
			return srt(data);
		case 3:
			var srt = sorter.a;
			return $gren_lang$core$Array$reverse(srt(data));
		case 4:
			var srt = sorter.a;
			return (sortDirection === 1) ? $gren_lang$core$Array$reverse(srt(data)) : srt(data);
		default:
			var srt = sorter.a;
			return (sortDirection === 1) ? srt(data) : $gren_lang$core$Array$reverse(srt(data));
	}
};
var $author$project$DataTable$applySorter = F3($author$project$DataTable$applySorter$);
var $author$project$DataTable$findSorter$ = function(selectedColumn, cData) {
	findSorter:
	while (true) {
		var _v0 = $gren_lang$core$Array$popFirst(cData);
		if (_v0.$ === 1) {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var _v1 = _v0.a;
			var _v2 = _v1.bh;
			var name = _v2.h;
			var sorter = _v2.x;
			var rest = _v1.bF;
			if (_Utils_eq(name, selectedColumn)) {
				return $gren_lang$core$Maybe$Just(sorter);
			} else {
				var $temp$selectedColumn = selectedColumn,
				$temp$cData = rest;
				selectedColumn = $temp$selectedColumn;
				cData = $temp$cData;
				continue findSorter;
			}
		}
	}
};
var $author$project$DataTable$findSorter = F2($author$project$DataTable$findSorter$);
var $author$project$DataTable$sort$ = function(_v0, cData, data) {
	var _v1 = _v0;
	var sortColumns = _v1.j;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.k;
	var _v2 = $gren_lang$core$Array$popFirst(sortColumns);
	if (!_v2.$) {
		var _v3 = _v2.a;
		var _v4 = _v3.bh;
		var sortColumnName = _v4.ac;
		var sortDirection = _v4.N;
		var rest = _v3.bF;
		var _v5 = $author$project$DataTable$findSorter$(sortColumnName, cData);
		if (_v5.$ === 1) {
			return data;
		} else {
			var sorter = _v5.a;
			return $author$project$DataTable$sort$({ f: activeRowId, d: pageSize, b: pagination, j: rest, k: tableId }, cData, $author$project$DataTable$applySorter$(sortDirection, sorter, data));
		}
	} else {
		return data;
	}
};
var $author$project$DataTable$sort = F3($author$project$DataTable$sort$);
var $author$project$DataTable$getSortedData$ = function(_v0, state, data) {
	var columns = _v0.am;
	return $author$project$DataTable$sort$(state, columns, data);
};
var $author$project$DataTable$getSortedData = F3($author$project$DataTable$getSortedData$);
var $gren_lang$browser$VirtualDom$keyedNode = function(tag) {
	return _VirtualDom_keyedNode(_VirtualDom_noScript(tag));
};
var $gren_lang$browser$Html$Keyed$node = $gren_lang$browser$VirtualDom$keyedNode;
var $gren_lang$browser$Html$table = $gren_lang$browser$Html$node('table');
var $gren_lang$browser$Html$tfoot = $gren_lang$browser$Html$node('tfoot');
var $gren_lang$browser$Html$thead = $gren_lang$browser$Html$node('thead');
var $author$project$DataTable$toHeader = function(_v0) {
	var name = _v0.h;
	var sorter = _v0.x;
	return { h: name, x: sorter };
};
var $author$project$DataTable$headerInfo$ = function(name, selected, sortDirections, clickActions) {
	return { ba: clickActions, h: name, bJ: selected, aP: sortDirections };
};
var $author$project$DataTable$headerInfo = F4($author$project$DataTable$headerInfo$);
var $gren_lang$browser$VirtualDom$MayPreventDefault = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$browser$Html$Events$preventDefaultOn$ = function(event, decoder) {
	return A2($gren_lang$browser$VirtualDom$on, event, $gren_lang$browser$VirtualDom$MayPreventDefault(decoder));
};
var $gren_lang$browser$Html$Events$preventDefaultOn = F2($gren_lang$browser$Html$Events$preventDefaultOn$);
var $gren_lang$core$Basics$neq = _Utils_notEqual;
var $author$project$DataTable$updateMultiSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0;
	var sortColumns = _v1.j;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.k;
	var newSortState = _Utils_ap([ { ac: newSortColumn, N: sortDirection } ], A2($gren_lang$core$Array$keepIf, function(_v2) {
				var sortColumnName = _v2.ac;
				return !_Utils_eq(sortColumnName, newSortColumn);
			}, sortColumns));
	return { f: activeRowId, d: pageSize, b: pagination, j: newSortState, k: tableId };
};
var $author$project$DataTable$updateMultiSortState = F3($author$project$DataTable$updateMultiSortState$);
var $author$project$DataTable$onColumnHeader$ = function(state, name, sortDirection, toMsg) {
	return [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateSortState$(name, sortDirection, state))), $gren_lang$browser$Html$Events$preventDefaultOn$('long-press', A2($gren_lang$core$Json$Decode$map, function(msg) {
				return { bs: msg, bB: true };
			}, $gren_lang$core$Json$Decode$succeed(toMsg($author$project$DataTable$updateMultiSortState$(name, sortDirection, state))))), A2($gren_lang$browser$Html$Attributes$attribute, 'data-long-press-delay', '500') ];
};
var $author$project$DataTable$onColumnHeader = F4($author$project$DataTable$onColumnHeader$);
var $author$project$DataTable$toHeaderInfo$ = function(state, toMsg, _v0) {
	var sortColumns = state.j;
	var name = _v0.h;
	var sorter = _v0.x;
	var selected = function () {
		if (sortColumns.length === 0) {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var nonEmptyList = sortColumns;
			var indexedList = A2($gren_lang$core$Array$indexedMap, F2(function(idx, val) {
						return { br: idx, bG: val };
					}), $gren_lang$core$Array$reverse(nonEmptyList));
			var filteredList = A2($gren_lang$core$Array$keepIf, function(_v8) {
					var sortColumnName = _v8.bG.ac;
					return _Utils_eq(name, sortColumnName);
				}, indexedList);
			var _v6 = $gren_lang$core$Array$takeFirst$(1, filteredList);
			if (_v6.length === 1) {
				var _v7 = _v6[0];
				var index = _v7.br;
				var sortDirection = _v7.bG.N;
				return $gren_lang$core$Maybe$Just({ N: sortDirection, bM: ($gren_lang$core$Array$length(indexedList) === 1) ? 0 : (index + 1) });
			} else {
				return $gren_lang$core$Maybe$Nothing;
			}
		}
	}();
	var reverse = function(a) {
		if (a === 1) {
			return 0;
		} else {
			return 1;
		}
	};
	var reversedSortDirection = function () {
		if (!selected.$) {
			var sortDirection = selected.a.N;
			return reverse(sortDirection);
		} else {
			if (sorter.$ === 5) {
				return 1;
			} else {
				return 0;
			}
		}
	}();
	switch (sorter.$) {
		case 0:
			return $author$project$DataTable$headerInfo$(name, $gren_lang$core$Maybe$Nothing, [  ], [  ]);
		case 1:
			return $author$project$DataTable$headerInfo$(name, $gren_lang$core$Maybe$Nothing, [  ], [  ]);
		case 2:
			return $author$project$DataTable$headerInfo$(name, selected, [ 0 ], $author$project$DataTable$onColumnHeader$(state, name, 0, toMsg));
		case 3:
			return $author$project$DataTable$headerInfo$(name, selected, [ 1 ], $author$project$DataTable$onColumnHeader$(state, name, 1, toMsg));
		case 4:
			return $author$project$DataTable$headerInfo$(name, selected, [ 0, 1 ], $author$project$DataTable$onColumnHeader$(state, name, reversedSortDirection, toMsg));
		default:
			return $author$project$DataTable$headerInfo$(name, selected, [ 1, 0 ], $author$project$DataTable$onColumnHeader$(state, name, reversedSortDirection, toMsg));
	}
};
var $author$project$DataTable$toHeaderInfo = F3($author$project$DataTable$toHeaderInfo$);
var $gren_lang$browser$Html$td = $gren_lang$browser$Html$node('td');
var $author$project$DataTable$viewCell$ = function(data, _v0) {
	var viewData = _v0.z;
	var sorter = _v0.x;
	var details = viewData(data);
	return A2($gren_lang$browser$Html$td, details.B, details.C);
};
var $author$project$DataTable$viewCell = F2($author$project$DataTable$viewCell$);
var $author$project$DataTable$viewRowHelp$ = function(columns, toRowAttrs, toId, toMsg, state, data) {
	return A2($gren_lang$browser$Html$tr, A4(toRowAttrs, toId, toMsg, state, data), A2($gren_lang$core$Array$map, $author$project$DataTable$viewCell(data), columns));
};
var $author$project$DataTable$viewRowHelp = F6($author$project$DataTable$viewRowHelp$);
var $author$project$DataTable$viewRow$ = function(toId, toMsg, columns, toRowAttrs, state, data) {
	return { bp: toId(data), bx: $author$project$DataTable$viewRowHelp$(columns, toRowAttrs, toId, toMsg, state, data) };
};
var $author$project$DataTable$viewRow = F6($author$project$DataTable$viewRow$);
var $author$project$DataTable$view$ = function(conf, state, data) {
	var _v0 = conf;
	var toId = _v0.aZ;
	var toMsg = _v0.a$;
	var columns = _v0.am;
	var customizations = _v0.ao;
	var rows = $author$project$DataTable$getPaginatedData$(conf, state, $author$project$DataTable$getSortedData$(conf, state, data));
	var tbody = A3($gren_lang$browser$Html$Keyed$node, 'tbody', customizations.aU, A2($gren_lang$core$Array$map, A5($author$project$DataTable$viewRow, toId, toMsg, columns, customizations.aM, state), rows));
	var withFoot = function () {
		var _v3 = customizations.aV;
		if (_v3.$ === 1) {
			return [ tbody ];
		} else {
			var _v4 = _v3.a;
			var attributes = _v4.B;
			var children = _v4.C;
			return [ A2($gren_lang$browser$Html$tfoot, attributes, children), tbody ];
		}
	}();
	var headers = A2($gren_lang$core$Array$map, $author$project$DataTable$toHeader, columns);
	var theadDetails = customizations.aW(A2($gren_lang$core$Array$map, A2($author$project$DataTable$toHeaderInfo, state, toMsg), headers));
	var thead = A2($gren_lang$browser$Html$thead, theadDetails.B, theadDetails.C);
	return A2($gren_lang$browser$Html$table, customizations.aS, function () {
			var _v1 = customizations.ak;
			if (_v1.$ === 1) {
				return _Utils_ap([ thead ], withFoot);
			} else {
				var _v2 = _v1.a;
				var attributes = _v2.B;
				var children = _v2.C;
				return _Utils_ap([ A2($gren_lang$browser$Html$caption, attributes, children) ], _Utils_ap([ thead ], withFoot));
			}
		}());
};
var $author$project$DataTable$view = F3($author$project$DataTable$view$);
var $author$project$Example$Paginated$view = function(_v0) {
	var people = _v0.bA;
	var tableState = _v0.aT;
	var query = _v0.aK;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.h;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Pagination (Scrolling variant)') ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$Paginated$SetQuery) ], [  ]), $author$project$DataTable$pageLengthChooser$($author$project$Example$Paginated$config, tableState), $author$project$DataTable$view$($author$project$Example$Paginated$config, tableState, acceptablePeople) ]);
};
var $author$project$Example$Presidents$SetQuery = function (a) {
	return { $: 0, a: a };
};
var $author$project$Example$Presidents$SetTableState = function (a) {
	return { $: 1, a: a };
};
var $author$project$Example$Presidents$config = $author$project$DataTable$config({ am: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.h;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.a1;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.al;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.aQ;
		}) ], aZ: function ($) {
		return $.h;
	}, a$: $author$project$Example$Presidents$SetTableState });
var $gren_lang$browser$Html$li = $gren_lang$browser$Html$node('li');
var $gren_lang$browser$Html$ul = $gren_lang$browser$Html$node('ul');
var $author$project$Example$Presidents$view = function(_v0) {
	var people = _v0.bA;
	var tableState = _v0.aT;
	var query = _v0.aK;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.h;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Sortable table.') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Single click to (re)set the sort order to that column.') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('If the column was selected already, the sort order is reversed.') ]) ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Long click on column header to add that column to the end of the sort order (...then sort by Year).') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('If the column was selected already, it is moved to the end of the sort order sequence') ]) ]) ]), A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$Presidents$SetQuery) ], [  ]), $author$project$DataTable$view$($author$project$Example$Presidents$config, tableState, acceptablePeople) ]);
};
var $author$project$DocBook$view = function(model) {
	var isActive = function(variant) {
		return _Utils_eq(model.A, variant) ? [ $gren_lang$browser$Html$Attributes$class('active'), $gren_lang$browser$Html$Attributes$tabindex(-1) ] : [  ];
	};
	var variants = A2($gren_lang$core$Array$map, function(variant) {
			return A2($gren_lang$browser$Html$button, _Utils_ap([ $gren_lang$browser$Html$Events$onClick($author$project$DocBook$SwitchExample(variant)) ], isActive(variant)), [ $gren_lang$browser$Html$text($author$project$DocBook$exampleName(variant)) ]);
		}, $author$project$DocBook$buttons);
	return A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$id('wrapper') ], [ A2($gren_lang$browser$Html$nav, [ $gren_lang$browser$Html$Attributes$id('navigation') ], _Utils_ap([ A2($gren_lang$browser$Html$h3, [  ], [ $gren_lang$browser$Html$text('Examples') ]) ], variants)), A2($gren_lang$browser$Html$article, [ $gren_lang$browser$Html$Attributes$id('example') ], [ function () {
				var _v0 = model.A;
				if (!_v0) {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PresidentsMsg, $author$project$Example$Presidents$view(model.L));
				} else {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PaginatedMsg, $author$project$Example$Paginated$view(model.K));
				}
			}() ]) ]);
};
var $author$project$DocBook$main = $gren_lang$browser$Browser$sandbox({ bl: $author$project$DocBook$init, bR: $author$project$DocBook$update, bS: $author$project$DocBook$view });
_Platform_export({'DocBook':{'init':$author$project$DocBook$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));
//# sourceMappingURL=data:application/json;base64,ewogICAgInZlcnNpb24iOiAzLAogICAgInNvdXJjZXMiOiBbCiAgICAgICAgIkRpY3QiLAogICAgICAgICJBcnJheSIsCiAgICAgICAgIlNldCIsCiAgICAgICAgIkJhc2ljcyIsCiAgICAgICAgIkRhdGFUYWJsZSIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzIiwKICAgICAgICAiRG9jQm9vayIsCiAgICAgICAgIlN0cmluZyIsCiAgICAgICAgIkpzb24uRW5jb2RlIiwKICAgICAgICAiSnNvbi5EZWNvZGUiLAogICAgICAgICJDaGFyIiwKICAgICAgICAiUmVzdWx0IiwKICAgICAgICAiVmlydHVhbERvbSIsCiAgICAgICAgIlVybCIsCiAgICAgICAgIlRhc2siLAogICAgICAgICJQbGF0Zm9ybSIsCiAgICAgICAgIlBsYXRmb3JtLkNtZCIsCiAgICAgICAgIlBsYXRmb3JtLlN1YiIsCiAgICAgICAgIkJyb3dzZXIiLAogICAgICAgICJIdG1sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzIiwKICAgICAgICAiSHRtbC5FdmVudHMiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYSIsCiAgICAgICAgIk1heWJlIiwKICAgICAgICAiTWF0aCIsCiAgICAgICAgIkh0bWwuS2V5ZWQiCiAgICBdLAogICAgInNvdXJjZXNDb250ZW50IjogWwogICAgICAgICJtb2R1bGUgRGljdCBleHBvc2luZ1xuICAgICggRGljdFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcbiAgICAsIGlzRW1wdHksIGNvdW50LCBnZXQsIG1lbWJlciwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCBrZXlzLCB2YWx1ZXNcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICAsIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmYsIG1lcmdlXG4gICAgKVxuXG57LXwgQSBkaWN0aW9uYXJ5IG1hcHBpbmcgdW5pcXVlIGtleXMgdG8gdmFsdWVzLiBUaGUga2V5cyBjYW4gYmUgYW55IGNvbXBhcmFibGVcbnR5cGUuIFRoaXMgaW5jbHVkZXMgYEludGAsIGBGbG9hdGAsIGBUaW1lYCwgYENoYXJgIGFuZCBgU3RyaW5nYC5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBEaWN0XG5cblxuQGRvY3MgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBpc0VtcHR5LCBjb3VudCwgZ2V0LCBtZW1iZXIsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuXG5cbiMjIEFycmF5c1xuXG5AZG9jcyBrZXlzLCB2YWx1ZXNcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3MgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgdW5pb24sIGludGVyc2VjdCwgZGlmZiwgbWVyZ2VcblxuLX1cblxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKC4uKVxuXG5cblxuLS0gRElDVElPTkFSSUVTXG4tLSBUaGUgY29sb3Igb2YgYSBub2RlLiBMZWF2ZXMgYXJlIGNvbnNpZGVyZWQgQmxhY2suXG5cblxudHlwZSBOQ29sb3JcbiAgICA9IFJlZFxuICAgIHwgQmxhY2tcblxuXG57LXwgQSBkaWN0aW9uYXJ5IG9mIGtleXMgYW5kIHZhbHVlcy4gU28gYSBgRGljdCBTdHJpbmcgVXNlcmAgaXMgYSBkaWN0aW9uYXJ5XG50aGF0IGxldHMgeW91IGxvb2sgdXAgYSBgU3RyaW5nYCAoc3VjaCBhcyB1c2VyIG5hbWVzKSBhbmQgZmluZCB0aGUgYXNzb2NpYXRlZFxuYFVzZXJgLlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKCBEaWN0IClcblxuICAgIHVzZXJzIDogRGljdCBTdHJpbmcgVXNlclxuICAgIHVzZXJzID1cbiAgICAgICAgRGljdC5lbXB0eVxuICAgICAgICAgICAgfD4gRGljdC5zZXQgXCJBbGljZVwiIChtYWtlVXNlciBcIkFsaWNlXCIgMjggMS42NSlcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQm9iXCIgKG1ha2VVc2VyIFwiQm9iXCIgMTkgMS44MilcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQ2h1Y2tcIiAobWFrZVVzZXIgXCJDaHVja1wiIDMzIDEuNzUpXG5cbiAgICB0eXBlIGFsaWFzIFVzZXIgPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgLCBoZWlnaHQgOiBGbG9hdFxuICAgICAgICB9XG5cbiAgICBtYWtlVXNlciA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gVXNlclxuICAgIG1ha2VVc2VyIG5hbWUgYWdlIGhlaWdodCA9XG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgLCBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgfVxuLX1cbnR5cGUgRGljdCBrIHZcbiAgICA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA6IE5Db2xvciwga2V5IDogaywgdmFsdWUgOiB2LCBsZWZ0IDogKERpY3QgayB2KSwgcmlnaHQgOiAoRGljdCBrIHYpIH1cbiAgICB8IFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBkaWN0aW9uYXJ5LlxuLX1cbmVtcHR5IDogRGljdCBrIHZcbmVtcHR5ID1cbiAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm5vZGUgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5ub2RlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICBSQk5vZGVfZ3Jlbl9idWlsdGluXG4gICAgICAgIHsgY29sb3IgPSBjb2xvclxuICAgICAgICAsIGtleSA9IGtleVxuICAgICAgICAsIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLCBsZWZ0ID0gbGVmdFxuICAgICAgICAsIHJpZ2h0ID0gcmlnaHRcbiAgICAgICAgfVxuXG5cbnstfCBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBhIGtleS4gSWYgdGhlIGtleSBpcyBub3QgZm91bmQsIHJldHVyblxuYE5vdGhpbmdgLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSBhcmUgbm90IHN1cmUgaWYgYSBrZXkgd2lsbCBiZSBpbiB0aGVcbmRpY3Rpb25hcnkuXG5cbiAgICBhbmltYWxzID0gRGljdC5lbXB0eSB8PiBEaWN0LnNldCBcIlRvbVwiIENhdCB8PiBEaWN0LnNldCBcIkplcnJ5XCIgTW91c2VcblxuICAgIGdldCBcIlRvbVwiICAgYW5pbWFscyA9PSBKdXN0IENhdFxuICAgIGdldCBcIkplcnJ5XCIgYW5pbWFscyA9PSBKdXN0IE1vdXNlXG4gICAgZ2V0IFwiU3Bpa2VcIiBhbmltYWxzID09IE5vdGhpbmdcblxuLX1cbmdldCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gTWF5YmUgdlxuZ2V0IHRhcmdldEtleSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIHRhcmdldEtleSBrZXkgaXNcbiAgICAgICAgICAgICAgICBMVCAtPlxuICAgICAgICAgICAgICAgICAgICBnZXQgdGFyZ2V0S2V5IGxlZnRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgdmFsdWVcblxuICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgIGdldCB0YXJnZXRLZXkgcmlnaHRcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEga2V5IGlzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tZW1iZXIgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IEJvb2xcbm1lbWJlciBrZXkgZGljdCA9XG4gICAgd2hlbiBnZXQga2V5IGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIHBhaXJzIGluIHRoZSBkaWN0aW9uYXJ5LlxuLX1cbmNvdW50IDogRGljdCBrIHYgLT4gSW50XG5jb3VudCBkaWN0ID1cbiAgICBjb3VudEhlbHAgMCBkaWN0XG5cblxuY291bnRIZWxwIDogSW50IC0+IERpY3QgayB2IC0+IEludFxuY291bnRIZWxwIG4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBuXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGNvdW50SGVscCAoY291bnRIZWxwIChuICsgMSkgcmlnaHQpIGxlZnRcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0LCBvciBsb3dlc3QsIGtleS12YWx1ZSBwYWlyLlxuLX1cbmZpcnN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxuZmlyc3QgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCB9IC0+XG4gICAgICAgICAgICBmaXJzdCBsZWZ0XG5cblxuey18IFJldHJpZXZlIHRoZSBsYXN0LCBvciBoaWdoZXN0LCBrZXktdmFsdWUgcGFpci5cbi19XG5sYXN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxubGFzdCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgcmlnaHQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbGFzdCByaWdodFxuXG5cbnstfCBGaW5kIHRoZSBmaXJzdCBrZXktdmFsdWUgcGFpciB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kRmlyc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRGaXJzdCBmbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kRmlyc3QgZm4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgZm4ga2V5IHZhbHVlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdCBmbiByaWdodFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IEZpbmQgdGhlIGxhc3Qga2V5LXZhbHVlIHBhaXIgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZExhc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRMYXN0IGZuIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGZpbmRMYXN0IGZuIHJpZ2h0IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBmbiBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZExhc3QgZm4gbGVmdFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IENoZWNrcyBpZiBhbnkga2V5LXZhbHVlIHBhaXIgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFueSA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYW55IGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IGZuIGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCBrZXktdmFsdWUgcGFpcnMgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFsbCA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYWxsIGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IChcXGtleSB2YWx1ZSAtPiBub3QgPHwgZm4ga2V5IHZhbHVlKSBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IERldGVybWluZSBpZiBhIGRpY3Rpb25hcnkgaXMgZW1wdHkuXG5cbiAgICBpc0VtcHR5IGVtcHR5ID09IFRydWVcblxuLX1cbmlzRW1wdHkgOiBEaWN0IGsgdiAtPiBCb29sXG5pc0VtcHR5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4gXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgU2V0cyBhIHZhbHVlIGZvciBhIGdpdmVuIGtleS4gRXhpc3RpbmcgdmFsdWVzIHdpbGwgYmUgcmVwbGFjZWQuXG5JZiB0aGUga2V5IGlzbid0IGFscmVhZHkgcmVnaXN0ZXJlZCwgdGhlIGtleS12YWx1ZSBwYWlyIHdpbGwgYmUgaW5zZXJ0ZWQuXG4tfVxuc2V0IDogY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5zZXQgc2V0S2V5IHNldFZhbHVlIGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHNldEhlbHAgc2V0S2V5IHNldFZhbHVlIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIEJsYWNrIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0XG5cbiAgICAgICAgeCAtPlxuICAgICAgICAgICAgeFxuXG5cbnNldEhlbHAgOiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnNldEhlbHAga2V5IHZhbHVlIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgLS0gTmV3IG5vZGVzIGFyZSBhbHdheXMgcmVkLiBJZiBpdCB2aW9sYXRlcyB0aGUgcnVsZXMsIGl0IHdpbGwgYmUgZml4ZWRcbiAgICAgICAgICAgIC0tIHdoZW4gYmFsYW5jaW5nLlxuICAgICAgICAgICAgbm9kZSBSZWQga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9ICBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIGtleSBuS2V5IGlzXG4gICAgICAgICAgICAgICAgTFQgLT5cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHNldEhlbHAga2V5IHZhbHVlIG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgbkNvbG9yIG5LZXkgdmFsdWUgbkxlZnQgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSBuTGVmdCAoc2V0SGVscCBrZXkgdmFsdWUgblJpZ2h0KVxuXG5cbmJhbGFuY2UgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5iYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICB3aGVuIHJpZ2h0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGtleSB2YWx1ZSAobm9kZSBCbGFjayBsSyBsViBsTGVmdCBsUmlnaHQpIChub2RlIEJsYWNrIHJLIHJWIHJMZWZ0IHJSaWdodClcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBySyByViAobm9kZSBSZWQga2V5IHZhbHVlIGxlZnQgckxlZnQpIHJSaWdodFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxsSywgdmFsdWUgPSBsbFYsIGxlZnQgPSBsbExlZnQsIHJpZ2h0ID0gbGxSaWdodCB9LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGxLIGxWIChub2RlIEJsYWNrIGxsSyBsbFYgbGxMZWZ0IGxsUmlnaHQpIChub2RlIEJsYWNrIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuXG57LXwgUmVtb3ZlIGEga2V5LXZhbHVlIHBhaXIgZnJvbSBhIGRpY3Rpb25hcnkuIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kLFxubm8gY2hhbmdlcyBhcmUgbWFkZS5cbi19XG5yZW1vdmUgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmUga2V5IGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHJlbW92ZUhlbHAga2V5IGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBuS2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBCbGFjayBuS2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuICAgICAgICB4IC0+XG4gICAgICAgICAgICB4XG5cblxuey18IFRoZSBlYXNpZXN0IHRoaW5nIHRvIHJlbW92ZSBmcm9tIHRoZSB0cmVlLCBpcyBhIHJlZCBub2RlLiBIb3dldmVyLCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlXG5ub2RlIHRvIHJlbW92ZSwgd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZiBpdCB3aWxsIGJlIHJlZCBvciBub3QuIFRoaXMgcmVtb3ZlIGltcGxlbWVudGF0aW9uXG5tYWtlcyBzdXJlIHRoYXQgdGhlIGJvdHRvbSBub2RlIGlzIHJlZCBieSBtb3ZpbmcgcmVkIGNvbG9ycyBkb3duIHRoZSB0cmVlIHRocm91Z2ggcm90YXRpb25cbmFuZCBjb2xvciBmbGlwcy4gQW55IHZpb2xhdGlvbnMgdGhpcyB3aWxsIGNhdXNlLCBjYW4gZWFzaWx5IGJlIGZpeGVkIGJ5IGJhbGFuY2luZyBvbiB0aGUgd2F5XG51cCBhZ2Fpbi5cbi19XG5yZW1vdmVIZWxwIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlSGVscCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5IDwga2V5IHRoZW5cbiAgICAgICAgICAgICAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2ssIGxlZnQgPSBsTGVmdCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGxMZWZ0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbW92ZVJlZExlZnQgZGljdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9IG5MZWZ0LCByaWdodCA9IG5SaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVIZWxwIHRhcmdldEtleSBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVtb3ZlSGVscEVRR1QgdGFyZ2V0S2V5IChyZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQpXG5cblxucmVtb3ZlSGVscFByZXBFUUdUIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBOQ29sb3IgLT4gY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQgPVxuICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgY29sb3IgbEsgbFYgbExlZnQgKG5vZGUgUmVkIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgd2hlbiByaWdodCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2sgfSB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSZWRSaWdodCBkaWN0XG5cbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjaywgbGVmdCA9IFJCRW1wdHlfZ3Jlbl9idWlsdGluIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbW92ZVJlZFJpZ2h0IGRpY3RcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgZGljdFxuXG5cbnstfCBXaGVuIHdlIGZpbmQgdGhlIG5vZGUgd2UgYXJlIGxvb2tpbmcgZm9yLCB3ZSBjYW4gcmVtb3ZlIGJ5IHJlcGxhY2luZyB0aGUga2V5LXZhbHVlXG5wYWlyIHdpdGggdGhlIGtleS12YWx1ZSBwYWlyIG9mIHRoZSBsZWZ0LW1vc3Qgbm9kZSBvbiB0aGUgcmlnaHQgc2lkZSAodGhlIGNsb3Nlc3QgcGFpcikuXG4tfVxucmVtb3ZlSGVscEVRR1QgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwRVFHVCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5ID09IGtleSB0aGVuXG4gICAgICAgICAgICAgICAgd2hlbiBnZXRNaW4gcmlnaHQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSA9IG1pbktleSwgdmFsdWUgPSBtaW5WYWx1ZSB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIG1pbktleSBtaW5WYWx1ZSBsZWZ0IChyZW1vdmVNaW4gcmlnaHQpXG5cbiAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IChyZW1vdmVIZWxwIHRhcmdldEtleSByaWdodClcblxuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5nZXRNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxuZ2V0TWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCA9ICgoUkJOb2RlX2dyZW5fYnVpbHRpbiBfKSBhcyBsZWZ0KSB9IC0+XG4gICAgICAgICAgICBnZXRNaW4gbGVmdFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5yZW1vdmVNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxucmVtb3ZlTWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQgPSAoKFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDb2xvciwgbGVmdCA9IGxMZWZ0IH0pIGFzIGxlZnQpLCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGxDb2xvciBpc1xuICAgICAgICAgICAgICAgIEJsYWNrIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbExlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZU1pbiBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtb3ZlUmVkTGVmdCBkaWN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IG5Db2xvciwga2V5ID0gbktleSwgdmFsdWUgPSBuVmFsdWUsIGxlZnQgPSBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZU1pbiBuTGVmdCkgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVNaW4gbGVmdCkgcmlnaHRcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm1vdmVSZWRMZWZ0IDogRGljdCBrIHYgLT4gRGljdCBrIHZcbm1vdmVSZWRMZWZ0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSAoUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBybEssIHZhbHVlID0gcmxWLCBsZWZ0ID0gcmxMLCByaWdodCA9IHJsUiB9KSBhcyByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgUmVkXG4gICAgICAgICAgICAgICAgcmxLXG4gICAgICAgICAgICAgICAgcmxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgayB2IChub2RlIFJlZCBsSyBsViBsTGVmdCBsUmlnaHQpIHJsTClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBySyByViBybFIgclJpZ2h0KVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5tb3ZlUmVkUmlnaHQgOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxubW92ZVJlZFJpZ2h0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsbEssIHZhbHVlID0gbGxWLCBsZWZ0ID0gbGxMZWZ0LCByaWdodCA9IGxsUmlnaHQgfSwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBSZWRcbiAgICAgICAgICAgICAgICBsS1xuICAgICAgICAgICAgICAgIGxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgbGxLIGxsViBsbExlZnQgbGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBrIHYgbFJpZ2h0IChub2RlIFJlZCBySyByViByTGVmdCByUmlnaHQpKVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG57LXwgVXBkYXRlIHRoZSB2YWx1ZSBvZiBhIGRpY3Rpb25hcnkgZm9yIGEgc3BlY2lmaWMga2V5IHdpdGggYSBnaXZlbiBmdW5jdGlvbi5cbi19XG51cGRhdGUgOiBjb21wYXJhYmxlIC0+IChNYXliZSB2IC0+IE1heWJlIHYpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG51cGRhdGUgdGFyZ2V0S2V5IGFsdGVyIGRpY3Rpb25hcnkgPVxuICAgIHdoZW4gYWx0ZXIgKGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgc2V0IHRhcmdldEtleSB2YWx1ZSBkaWN0aW9uYXJ5XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgcmVtb3ZlIHRhcmdldEtleSBkaWN0aW9uYXJ5XG5cblxuey18IFNhbWUgYXMgW3VwZGF0ZV0oI3VwZGF0ZSkgYnV0IGlmIHRoZSBrZXkgZG9lc24ndCBleGlzdCBpbiB0aGUgZGljdGlvbmFyeSwgYSBkZWZhdWx0IHZhbHVlXG5pcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIHVwZGF0ZSBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgYE1heWJlYC5cbi19XG51cGRhdGVXaXRoRGVmYXVsdCA6IGNvbXBhcmFibGUgLT4gdiAtPiAodiAtPiB2KSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxudXBkYXRlV2l0aERlZmF1bHQgdGFyZ2V0S2V5IGRlZmF1bHRWYWx1ZSBhbHRlciBkaWN0aW9uYXJ5ID1cbiAgICB3aGVuIGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBzZXQgdGFyZ2V0S2V5IChhbHRlciB2YWx1ZSkgZGljdGlvbmFyeVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIHNldCB0YXJnZXRLZXkgKGFsdGVyIGRlZmF1bHRWYWx1ZSkgZGljdGlvbmFyeVxuXG5cbnstfCBDcmVhdGUgYSBkaWN0aW9uYXJ5IHdpdGggb25lIGtleS12YWx1ZSBwYWlyLlxuLX1cbnNpbmdsZXRvbiA6IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuc2luZ2xldG9uIGtleSB2YWx1ZSA9XG4gICAgLS0gUm9vdCBub2RlIGlzIGFsd2F5cyBCbGFja1xuICAgIG5vZGUgQmxhY2sga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGRpY3Rpb25hcmllcy4gSWYgdGhlcmUgaXMgYSBjb2xsaXNpb24sIHByZWZlcmVuY2UgaXMgZ2l2ZW5cbnRvIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbnVuaW9uIDogRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnVuaW9uIHQxIHQyID1cbiAgICBmb2xkbCBzZXQgdDIgdDFcblxuXG57LXwgS2VlcCBhIGtleS12YWx1ZSBwYWlyIHdoZW4gaXRzIGtleSBhcHBlYXJzIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cblByZWZlcmVuY2UgaXMgZ2l2ZW4gdG8gdmFsdWVzIGluIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbmludGVyc2VjdCA6IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5pbnRlcnNlY3QgdDEgdDIgPVxuICAgIGtlZXBJZiAoXFxrIF8gLT4gbWVtYmVyIGsgdDIpIHQxXG5cblxuey18IEtlZXAgYSBrZXktdmFsdWUgcGFpciB3aGVuIGl0cyBrZXkgZG9lcyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cbi19XG5kaWZmIDogRGljdCBjb21wYXJhYmxlIGEgLT4gRGljdCBjb21wYXJhYmxlIGIgLT4gRGljdCBjb21wYXJhYmxlIGFcbmRpZmYgdDEgdDIgPVxuICAgIGZvbGRsIChcXGsgdiB0IC0+IHJlbW92ZSBrIHQpIHQxIHQyXG5cblxuXG4tLSBUUkFOU0ZPUk1cblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiB0byBhbGwgdmFsdWVzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tYXAgOiAoayAtPiBhIC0+IGIpIC0+IERpY3QgayBhIC0+IERpY3QgayBiXG5tYXAgZnVuYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIGNvbG9yIGtleSAoZnVuYyBrZXkgdmFsdWUpIChtYXAgZnVuYyBsZWZ0KSAobWFwIGZ1bmMgcmlnaHQpXG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGxvd2VzdCBrZXkgdG8gaGlnaGVzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRsIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzMzLDE5LDI4XVxuXG4tfVxuZm9sZGwgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkbCBmdW5jIGFjYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkbCBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZGwgZnVuYyBhY2MgbGVmdCkpIHJpZ2h0XG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGhpZ2hlc3Qga2V5IHRvIGxvd2VzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRyIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzI4LDE5LDMzXVxuXG4tfVxuZm9sZHIgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkciBmdW5jIGFjYyB0ID1cbiAgICB3aGVuIHQgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkciBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZHIgZnVuYyBhY2MgcmlnaHQpKSBsZWZ0XG5cblxuey18IEtlZXAgb25seSB0aGUga2V5LXZhbHVlIHBhaXJzIHRoYXQgcGFzcyB0aGUgZ2l2ZW4gdGVzdC5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiB2IC0+IEJvb2wpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5rZWVwSWYgaXNHb29kIGRpY3QgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGsgdiBkIC0+XG4gICAgICAgICAgICBpZiBpc0dvb2QgayB2IHRoZW5cbiAgICAgICAgICAgICAgICBzZXQgayB2IGRcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRcbiAgICAgICAgKVxuICAgICAgICBlbXB0eVxuICAgICAgICBkaWN0XG5cblxuey18IFJlbW92ZSB1bndhbnRlZCByZXN1bHRzIG9mIGEgbWFwIG9wZXJhdGlvbi5cbi19XG5tYXBBbmRLZWVwSnVzdCA6IChjb21wYXJhYmxlIC0+IHYgLT4gTWF5YmUgeCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHhcbm1hcEFuZEtlZXBKdXN0IHRvTWF5YmUgZGljdCA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcayB2IGQgLT5cbiAgICAgICAgICAgIHdoZW4gdG9NYXliZSBrIHYgaXNcbiAgICAgICAgICAgICAgICBKdXN0IG5ld1ZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBrIG5ld1ZhbHVlIGRcblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgZFxuICAgICAgICApXG4gICAgICAgIGVtcHR5XG4gICAgICAgIGRpY3RcblxuXG57LXwgUGFydGl0aW9uIGEgZGljdGlvbmFyeSBhY2NvcmRpbmcgdG8gc29tZSB0ZXN0LiBUaGUgZmlyc3QgZGljdGlvbmFyeVxuY29udGFpbnMgYWxsIGtleS12YWx1ZSBwYWlycyB3aGljaCBwYXNzZWQgdGhlIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zXG50aGUgcGFpcnMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4geyB0cnVlcyA6IERpY3QgY29tcGFyYWJsZSB2LCBmYWxzZXMgOiBEaWN0IGNvbXBhcmFibGUgdiB9XG5wYXJ0aXRpb24gaXNHb29kIGRpY3QgPVxuICAgIGxldFxuICAgICAgICBhZGQga2V5IHZhbHVlIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIGlmIGlzR29vZCBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSBzZXQga2V5IHZhbHVlIHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7IHRydWVzID0gdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IHNldCBrZXkgdmFsdWUgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgIGluXG4gICAgZm9sZGwgYWRkIHsgdHJ1ZXMgPSBlbXB0eSwgZmFsc2VzID0gZW1wdHkgfSBkaWN0XG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUga2V5cyBpbiBhIGRpY3Rpb25hcnksIHNvcnRlZCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxuXG4gICAga2V5cyAoRGljdC5lbXB0eSB8PiBEaWN0LnNldCAwIFwiQWxpY2VcIiB8PiBEaWN0LnNldCAxIFwiQm9iXCIpID09IFsgMCwgMSBdXG5cbi19XG5rZXlzIDogRGljdCBrIHYgLT4gQXJyYXkga1xua2V5cyBkaWN0ID1cbiAgICBmb2xkbCAoXFxrZXkgdmFsdWUga2V5QXJyYXkgLT4gQXJyYXkucHVzaExhc3Qga2V5IGtleUFycmF5KSBbXSBkaWN0XG5cblxuey18IEdldCBhbGwgb2YgdGhlIHZhbHVlcyBpbiBhIGRpY3Rpb25hcnksIGluIHRoZSBvcmRlciBvZiB0aGVpciBrZXlzLlxuXG4gICAgdmFsdWVzIChEaWN0LmVtcHR5IHw+IERpY3Quc2V0IDAgXCJBbGljZVwiIHw+IERpY3Quc2V0IDEgXCJCb2JcIikgPT0gWyBcIkFsaWNlXCIsIFwiQm9iXCIgXVxuXG4tfVxudmFsdWVzIDogRGljdCBrIHYgLT4gQXJyYXkgdlxudmFsdWVzIGRpY3QgPVxuICAgIGZvbGRsIChcXGtleSB2YWx1ZSB2YWx1ZUFycmF5IC0+IEFycmF5LnB1c2hMYXN0IHZhbHVlIHZhbHVlQXJyYXkpIFtdIGRpY3RcblxuXG57LXwgVGhlIG1vc3QgZ2VuZXJhbCB3YXkgb2YgY29tYmluaW5nIHR3byBkaWN0aW9uYXJpZXMuIFlvdSBwcm92aWRlIHRocmVlXG5hY2N1bXVsYXRvcnMgZm9yIHdoZW4gYSBnaXZlbiBrZXkgYXBwZWFyczpcblxuMS4gIE9ubHkgaW4gdGhlIGxlZnQgZGljdGlvbmFyeS5cbjIuICBJbiBib3RoIGRpY3Rpb25hcmllcy5cbjMuICBPbmx5IGluIHRoZSByaWdodCBkaWN0aW9uYXJ5LlxuICAgIFlvdSB0aGVuIHRyYXZlcnNlIGFsbCB0aGUga2V5cyBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LCBidWlsZGluZyB1cCB3aGF0ZXZlclxuICAgIHlvdSB3YW50LlxuXG4tfVxubWVyZ2UgOlxuICAgIChjb21wYXJhYmxlIC0+IGEgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBhIC0+IGIgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBiIC0+IHJlc3VsdCAtPiByZXN1bHQpXG4gICAgLT4gRGljdCBjb21wYXJhYmxlIGFcbiAgICAtPiBEaWN0IGNvbXBhcmFibGUgYlxuICAgIC0+IHJlc3VsdFxuICAgIC0+IHJlc3VsdFxubWVyZ2UgbGVmdFN0ZXAgYm90aFN0ZXAgcmlnaHRTdGVwIGxlZnREaWN0IHJpZ2h0RGljdCBpbml0aWFsUmVzdWx0ID1cbiAgICBsZXRcbiAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIHsgYXJyYXksIHJlc3VsdCB9ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgYXJyYXkgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IHJpZ2h0U3RlcCByS2V5IHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBrZXkgPSBsS2V5LCB2YWx1ZSA9IGxWYWx1ZSB9LCByZXN0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgbEtleSA8IHJLZXkgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSBsZWZ0U3RlcCBsS2V5IGxWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBsS2V5ID4gcktleSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gcmlnaHRTdGVwIHJLZXkgclZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IGJvdGhTdGVwIGxLZXkgbFZhbHVlIHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB7IGFycmF5ID0gbGVmdG92ZXJzLCByZXN1bHQgPSBpbnRlcm1lZGlhdGVSZXN1bHQgfSA9XG4gICAgICAgICAgICBmb2xkbCBzdGVwU3RhdGUgeyBhcnJheSA9IGZvbGRsIChcXGtleSB2YWx1ZSBhcnJheSAtPiBBcnJheS5wdXNoTGFzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9IGFycmF5KSBbXSBsZWZ0RGljdCwgcmVzdWx0ID0gaW5pdGlhbFJlc3VsdCB9IHJpZ2h0RGljdFxuICAgIGluXG4gICAgQXJyYXkuZm9sZGwgKFxceyBrZXksIHZhbHVlIH0gcmVzdWx0IC0+IGxlZnRTdGVwIGtleSB2YWx1ZSByZXN1bHQpIGludGVybWVkaWF0ZVJlc3VsdCBsZWZ0b3ZlcnNcbiIsCiAgICAgICAgIm1vZHVsZSBBcnJheSBleHBvc2luZ1xuICAgICggQXJyYXlcbiAgICAsIHNpbmdsZXRvbiwgaW5pdGlhbGl6ZSwgcmVwZWF0LCByYW5nZVxuICAgICwgbWFwLCBpbmRleGVkTWFwLCBmb2xkbCwgZm9sZHIsIGluZGV4ZWRGb2xkbCwgaW5kZXhlZEZvbGRyLCBrZWVwSWYsIGluZGV4ZWRLZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCByZXZlcnNlXG4gICAgLCBpc0VtcHR5LCBsZW5ndGgsIGdldCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuICAgICwgc2V0LCBzZXRNYW55LCB1cGRhdGUsIGluc2VydCwgaW5zZXJ0TWFueSwgcmVtb3ZlLCByZW1vdmVNYW55LCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBzcGxpY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgZmxhdHRlbiwgbWFwQW5kRmxhdHRlbiwgaW50ZXJzcGVyc2UsIG1hcDIsIG1hcDNcbiAgICAsIGZpcnN0LCBsYXN0LCBzbGljZSwgZHJvcEZpcnN0LCBkcm9wTGFzdCwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgcG9wRmlyc3QsIHBvcExhc3QsIHBhcnRpdGlvblxuICAgICwgc29ydCwgc29ydEJ5LCBzb3J0V2l0aFxuICAgIClcblxuey18IFlvdSBjYW4gY3JlYXRlIGFuIGBBcnJheWAgdXNpbmcgdGhlIGBbMSwgMiwgM11gIHN5bnRheC4gVGhpcyBtb2R1bGUgaGFzIGEgYnVuY2ggb2ZcbmZ1bmN0aW9ucyB0byBoZWxwIHlvdSB3b3JrIHdpdGggdGhlbS5cblxuQGRvY3MgQXJyYXlcblxuQGRvY3Mgc2luZ2xldG9uLCBpbml0aWFsaXplLCByZXBlYXQsIHJhbmdlXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIG1hcCwgaW5kZXhlZE1hcCwgZm9sZGwsIGZvbGRyLCBpbmRleGVkRm9sZGwsIGluZGV4ZWRGb2xkciwga2VlcElmLCBpbmRleGVkS2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcmV2ZXJzZVxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGlzRW1wdHksIGxlbmd0aCwgZ2V0LCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuXG5cbiMjIE1vZGlmeVxuXG5AZG9jcyBzZXQsIHNldE1hbnksIHVwZGF0ZSwgaW5zZXJ0LCBpbnNlcnRNYW55LCByZW1vdmUsIHJlbW92ZU1hbnksIHB1c2hGaXJzdCwgcHVzaExhc3QsIHNwbGljZVxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgcHJlcGVuZCwgYXBwZW5kLCBmbGF0dGVuLCBtYXBBbmRGbGF0dGVuLCBpbnRlcnNwZXJzZSwgbWFwMiwgbWFwM1xuXG5cbiMjIERlY29uc3RydWN0XG5cbkBkb2NzIHNsaWNlLCB0YWtlRmlyc3QsIHRha2VMYXN0LCBkcm9wRmlyc3QsIGRyb3BMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdCwgcGFydGl0aW9uXG5cblxuIyMgU29ydFxuXG5AZG9jcyBzb3J0LCBzb3J0QnksIHNvcnRXaXRoXG5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5BcnJheVxuXG5cbnstfCBBbiBBcnJheSBpcyBhbiBvcmRlcmVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4tfVxudHlwZSBBcnJheSBhXG4gICAgPSBBcnJheSBhXG5cblxuLS0gQ1JFQVRFXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIGEgc2luZ2xlIHZhbHVlLlxuLX1cbnNpbmdsZXRvbiA6IGEgLT4gQXJyYXkgYVxuc2luZ2xldG9uIGEgPVxuICAgIFsgYSBdXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBgbmAgZWxlbWVudHMsIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnRzXG5yZXN1bHRpbmcgZnJvbSBjYWxsaW5nIGBmbmAgd2l0aCBgb2Zmc2V0ICsgaW5kZXhgLlxuXG4gICAgaW5pdGlhbGl6ZSAzIDUgaWRlbnRpdHkgPT0gWyA1LCA2LCA3IF1cblxuSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHdlIGNyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIDMgaW50ZWdlcnNcbnN0YXJ0aW5nIGF0IDUuXG4tfVxuaW5pdGlhbGl6ZSA6IEludCAtPiBJbnQgLT4gKEludCAtPiBhKSAtPiBBcnJheSBhXG5pbml0aWFsaXplID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbml0aWFsaXplXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSB3aXRoIGBuYCBjb3BpZXMgb2YgYSB2YWx1ZTpcblxuICAgIHJlcGVhdCA1IDMgPT0gWyAzLCAzLCAzLCAzLCAzIF1cblxuLX1cbnJlcGVhdCA6IEludCAtPiBhIC0+IEFycmF5IGFcbnJlcGVhdCBuIHZhbCA9XG4gICAgaW5pdGlhbGl6ZSBuIDAgKFxcXyAtPiB2YWwpXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBudW1iZXJzLCBldmVyeSBlbGVtZW50IGluY3JlYXNpbmcgYnkgb25lLiBZb3UgZ2l2ZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IG51bWJlciB0aGF0IHNob3VsZCBiZSBpbiB0aGUgYXJyYXkuXG5cbiAgICByYW5nZSAzIDYgPT0gWzMsIDQsIDUsIDZdXG4gICAgcmFuZ2UgMyAzID09IFszXVxuICAgIHJhbmdlIDYgMyA9PSBbXVxuXG4tfVxucmFuZ2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IEludFxucmFuZ2UgZnJvbSB0byA9XG4gICAgaWYgZnJvbSA+IHRvIHRoZW5cbiAgICAgICAgW11cblxuICAgIGVsc2UgaWYgZnJvbSA9PSB0byB0aGVuXG4gICAgICAgIFtmcm9tXVxuXG4gICAgZWxzZSBcbiAgICAgICAgaW5pdGlhbGl6ZSAodG8gLSBmcm9tICsgMSkgZnJvbSBpZGVudGl0eVxuXG5cbi0tIFRSQU5TRk9STVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIG9uIGV2ZXJ5IGVsZW1lbnQgaW4gYW4gYXJyYXkuXG5cbiAgICBtYXAgbmVnYXRlIFsgMSwgNCwgOSBdID09IFsgLTEsIC00LCAtOSBdXG5cblNvIGBtYXAgZnVuYyBbIGEsIGIsIGMgXWAgaXMgdGhlIHNhbWUgYXMgYFsgZnVuYyBhLCBmdW5jIGIsIGZ1bmMgYyBdYFxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lm1hcFxuXG5cbnstfCBTYW1lIGFzIGBtYXBgIGJ1dCB0aGUgZnVuY3Rpb24gaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkTWFwIChcXGlkeCB2YWwgLT4gW2lkeCwgdmFsXSkgWyAzLCAzLCAzIF0gPT0gWyBbIDAsIDMgXSwgWyAxLCAzIF0sIFsgMiwgMyBdIF1cblxuLX1cbmluZGV4ZWRNYXAgOiAoSW50IC0+IGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5pbmRleGVkTWFwID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkTWFwXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC5cblxuICAgIGZvbGRsICgrKSAwIFsgMSwgMiwgMyBdID09IDZcblxuU28gYGZvbGRsIHN0ZXAgc3RhdGUgWyAxLCAyLCAzIF1gIGlzIGxpa2Ugc2F5aW5nOlxuXG4gICAgc3RhdGVcbiAgICAgICAgfD4gc3RlcCAxXG4gICAgICAgIHw+IHN0ZXAgMlxuICAgICAgICB8PiBzdGVwIDNcbi19XG5mb2xkbCA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmZvbGRsID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIHJpZ2h0LiBTYW1lIGFzIGBmb2xkbGAgYnV0XG50aGUgZXhlY3V0aW9uIG9yZGVyIGlzIHJldmVyc2VkLlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZvbGRyXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC4gVGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIFxucGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS5cblxuICAgIGluZGV4ZWRGb2xkbCAoXFxpZHggdmFsIHN1bSAtPiBpZHggKyB2YWwgKyBzdW0pIDAgWyAxLCAyLCAzIF0gPT0gOVxuXG4tfVxuaW5kZXhlZEZvbGRsIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkbCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRsXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgcmlnaHQuIFRoZSByZWR1Y2luZyBmdW5jdGlvblxuaXMgcGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS4gU2FtZSBhcyBgaW5kZXhlZEZvbGRsYFxuYnV0IHRoZSBleGVjdXRpb24gb3JkZXIgaXMgcmV2ZXJzZWQuXG4tfVxuaW5kZXhlZEZvbGRyIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkciA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRyXG5cblxuey18IEtlZXAgdmFsdWVzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiAoXFxuIC0+IG4gPCAzKSBbIDEsIDIsIDMsIDQgXSA9PSBbIDEsIDIgXVxuXG4tfVxua2VlcElmIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5rZWVwSWYgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbHRlclxuXG57LXwgU2FtZSBhcyBga2VlcElmYCBidXQgdGhlIHRlc3QgaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkS2VlcElmIChcXGlkeCB2YWwgLT4gaWR4ICsgdmFsID4gNCkgWyAxLCAyLCAzLCA0IF0gPT0gWyAzLCA0IF1cbi19XG5pbmRleGVkS2VlcElmIDogKEludCAtPiBhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW5kZXhlZEtlZXBJZiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZpbHRlclxuXG5cbnstfCBSZW1vdmUgdW53YW50ZWQgcmVzdWx0cyBvZiBhIG1hcCBvcGVyYXRpb24uXG5cbiAgICBtYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF0gPT0gWyAzLCAtNSBdXG4gICAgbWFwQW5kS2VlcEp1c3QgaWRlbnRpdHkgWyBKdXN0IDEsIE5vdGhpbmcgXSA9PSBbIDEgXVxuXG4tfVxubWFwQW5kS2VlcEp1c3QgOiAoYSAtPiBNYXliZSBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbm1hcEFuZEtlZXBKdXN0IG1hcHBlciBhcnJheSA9XG4gICAgbWFwQW5kRmxhdHRlblxuICAgICAgICAoXFx2IC0+XG4gICAgICAgICAgICB3aGVuIG1hcHBlciB2IGlzXG4gICAgICAgICAgICAgICAgSnVzdCBuZXdWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBbIG5ld1ZhbHVlIF1cblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgKVxuICAgICAgICBhcnJheVxuXG5cbnstfCBSZXZlcnNlIGFuIGFycmF5LlxuXG4gICAgcmV2ZXJzZSBbIDEsIDIsIDMgXSA9PSBbIDMsIDIsIDEgXVxuXG4tfVxucmV2ZXJzZSA6IEFycmF5IGEgLT4gQXJyYXkgYVxucmV2ZXJzZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkucmV2ZXJzZVxuXG5cbi0tIFFVRVJZXG5cblxuey18IENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBbXSA9PSBUcnVlXG4gICAgaXNFbXB0eSBbIDEsIDIsIDMgXSA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IEFycmF5IGEgLT4gQm9vbFxuaXNFbXB0eSBhcnJheSA9XG4gICAgbGVuZ3RoIGFycmF5ID09IDBcblxuXG57LXwgUmV0dXJuIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG5cbiAgICBsZW5ndGggWyAxLCAyLCAzIF0gPT0gM1xuXG4tfVxubGVuZ3RoIDogQXJyYXkgYSAtPiBJbnRcbmxlbmd0aCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBlbGVtZW50IGF0IGEgZ2l2ZW4gaW5kZXgsIG9yIGBOb3RoaW5nYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbkEgbmVnYXRpdmUgaW5kZXggbG9va3MgdXAgYW4gZWxlbWVudCBpbiByZXZlcnNlIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBnZXQgMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDJcbiAgICBnZXQgMTAgWyAxLCAyLCAzIF0gPT0gTm90aGluZ1xuICAgIGdldCAtMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDNcblxuLX1cbmdldCA6IEludCAtPiBBcnJheSBhIC0+IE1heWJlIGFcbmdldCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZ2V0XG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAxXG5cbi19XG5maW5kRmlyc3QgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IE1heWJlIHsgaW5kZXggOiBJbnQsIHZhbHVlIDogYSB9XG5maW5kRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbmRGaXJzdFxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAyXG5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gTWF5YmUgeyBpbmRleCA6IEludCwgdmFsdWUgOiBhIH1cbmZpbmRMYXN0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5maW5kTGFzdFxuXG5cbnstfCBGaWd1cmUgb3V0IHdoZXRoZXIgYW4gYXJyYXkgY29udGFpbnMgYSB2YWx1ZS5cblxuICAgIG1lbWJlciA5IFsxLDIsMyw0XSA9PSBGYWxzZVxuICAgIG1lbWJlciA0IFsxLDIsMyw0XSA9PSBUcnVlXG5cbi19XG5tZW1iZXIgOiBhIC0+IEFycmF5IGEgLT4gQm9vbFxubWVtYmVyIHZhbHVlIGFycmF5ID1cbiAgICB3aGVuIGZpbmRGaXJzdCAoXFx2IC0+IHYgPT0gdmFsdWUpIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IERldGVybWluZSBpZiBhbnkgZWxlbWVudHMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFueSBpc0V2ZW4gWzIsM10gPT0gVHJ1ZVxuICAgIGFueSBpc0V2ZW4gWzEsM10gPT0gRmFsc2VcbiAgICBhbnkgaXNFdmVuIFtdID09IEZhbHNlXG5cbi19XG5hbnkgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEJvb2xcbmFueSBmbiBhcnJheSA9XG4gICAgd2hlbiBmaW5kRmlyc3QgZm4gYXJyYXkgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGFsbCBlbGVtZW50cyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYWxsIGlzRXZlbiBbMiw0XSA9PSBUcnVlXG4gICAgYWxsIGlzRXZlbiBbMiwzXSA9PSBGYWxzZVxuICAgIGFsbCBpc0V2ZW4gW10gPT0gVHJ1ZVxuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBCb29sXG5hbGwgZm4gYXJyYXkgPVxuICAgIHdoZW4gZmluZEZpcnN0IChub3QgPDwgZm4pIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IEZpbmQgdGhlIG1pbmltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1pbmltdW0gWzMsMiwxXSA9PSBKdXN0IDFcbiAgICBtaW5pbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWluaW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWluaW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGxvd2VzdCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgY3VycmVudCA8IGxvd2VzdCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuey18IEZpbmQgdGhlIG1heGltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1heGltdW0gWzMsMiwxXSA9PSBKdXN0IDNcbiAgICBtYXhpbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWF4aW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWF4aW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGhpZ2hlc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGN1cnJlbnQgPiBoaWdoZXN0IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuLS0gTU9ESUZZXG5cblxuey18IFJlcGxhY2UgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4LCBvciByZXR1cm4gdGhlIGFycmF5IHVubW9kaWZpZWQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG4gICAgc2V0IDEgMTAgWyAxLCAyLCAzIF0gPT0gWyAxLCAxMCwgMyBdXG4gICAgc2V0IDEwIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMyBdXG4gICAgc2V0IC0xIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMTAgXVxuXG4tfVxuc2V0IDogSW50IC0+IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNldFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIHdvcmtzIGp1c3QgbGlrZSBbc2V0XSgjc2V0KSBleGNlcHQgaXQgdGFrZXMgaW4gYW4gYXJyYXkgb2YgdmFsdWVzIHRvIHNldCwgYWxsb3dpbmcgeW91XG50byByZXBsYWNlIHNldmVyYWwgdmFsdWVzIGF0IG9uY2UuXG5cbklmIHRoZSBwcm92aWRlZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgKG5lZ2F0aXZlIGluZGV4KSBvciBhdCB0aGVcbmVuZCAocG9zaXRpdmUgaW5kZXgpLlxuXG4gICAgc2V0TWFueSAxIFsgMCwgMCBdIFsgMSwgMiwgMywgNCBdID09IFsgMSwgMCwgMCwgNCBdXG5cbi19XG5zZXRNYW55IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXRNYW55IGluZGV4IHZhbHVlcyBhcnJheSA9XG4gICAgc3BsaWNlIGluZGV4IChsZW5ndGggdmFsdWVzKSB2YWx1ZXMgYXJyYXlcblxuXG57LXwgVXBkYXRlIGEgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4IHVzaW5nIGEgZnVuY3Rpb24uIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBub3RoaW5nIGhhcHBlbnMuXG5cbiAgICB1cGRhdGUgMSAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDMsIDMgXVxuICAgIHVwZGF0ZSAxMCAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDMgXVxuXG4tfVxudXBkYXRlIDogSW50IC0+IChhIC0+IGEpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudXBkYXRlIGlkeCBmbiBhcnJheSA9XG4gICAgd2hlbiBnZXQgaWR4IGFycmF5IGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGFycmF5XG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIHNldCBpZHggKGZuIHZhbCkgYXJyYXlcblxuXG57LXwgSW5zZXJ0IGEgbmV3IHZhbHVlIGludG8gdGhlIGFycmF5IGF0IHRoZSBnaXZlbiBpbmRleC4gVGhlIHZhbHVlIGFscmVhZHkgYXQgdGhlXG5naXZlbiBpbmRleCwgYXMgd2VsbCBhcyBhbGwgc3Vic2VxdWVudCB2YWx1ZXMsIHdpbGwgYmUgbW92ZWQgb25lIHNwYWNlIHRvIHRoZSByaWdodC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIHByb3ZpZGVkIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIHRoZSBlbGVtZW50IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZVxuZW5kIChwb3NpdGl2ZSBpbmRleCkuXG5cbiAgICBpbnNlcnQgMSAwIFsgMSwgMiwgMyBdID09IFsgMSwgMCwgMiwgMyBdXG5cbi19XG5pbnNlcnQgOiBJbnQgLT4gYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydCBpbmRleCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSBpbmRleCAwIHZhbHVlIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtpbnNlcnRdKCNpbnNlcnQpIGJ1dCBhbGxvd3MgeW91IHRvIGluc2VydCBtdWx0aXBsZVxudmFsdWVzIGF0IG9uY2UuXG5cbiAgICBpbnNlcnRNYW55IDEgWyAwLCAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAwLCAwLCAyLCAzIF1cblxuLX1cbmluc2VydE1hbnkgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydE1hbnkgaW5kZXggdmFsdWVzIGFycmF5ID1cbiAgICBzcGxpY2UgaW5kZXggMCB2YWx1ZXMgYXJyYXlcblxuXG57LXwgUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSBhbiBhcnJheS5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIG5vIGVsZW1lbnQgd2lsbCBiZSByZW1vdmVkLlxuXG4gICAgcmVtb3ZlIDEgWyAxLCAyLCAzIF0gPT0gWyAxLCAzIF1cblxuLX1cbnJlbW92ZSA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnJlbW92ZSBpbmRleCBhcnJheSA9XG4gICAgcmVtb3ZlTWFueSBpbmRleCAxIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtyZW1vdmVdKCNyZW1vdmUpLCBleGNlcHQgaXQgYWxsb3dzIHlvdSB0byByZW1vdmUgbXVsdGlwbGUgZWxlbWVudHMgYXQgb25jZS5cblxuVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSBpbmRleCBmcm9tIHdoZXJlIHRvIHJlbW92ZSBlbGVtZW50cyBmcm9tLCB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBudW1iZXIgb2YgZWxlbWVudHNcbnRvIHJlbW92ZS5cblxuICAgIHJlbW92ZSAwIDIgWyAxLCAyLCAzIF0gPT0gWyAzIF1cblxuLX1cbnJlbW92ZU1hbnkgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucmVtb3ZlTWFueSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMFxuXG5cbnstfCBBZGQgYSB2YWx1ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGFycmF5LlxuXG4gICAgcHVzaEZpcnN0IDEgW10gICAgICAgICAgPT0gWyAxIF1cbiAgICBwdXNoRmlyc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDUsIDEsIDQsIDkgXVxuXG4tfVxucHVzaEZpcnN0IDogYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnB1c2hGaXJzdCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSAwIDAgdmFsdWUgYXJyYXlcblxuXG57LXwgQWRkIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBwdXNoTGFzdCAxIFtdICAgICAgICAgID09IFsgMSBdXG4gICAgcHVzaExhc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDEsIDQsIDksIDUgXVxuXG4tfVxucHVzaExhc3QgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHVzaExhc3QgdmFsdWUgYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTEgKGxlbmd0aCBhcnJheSkgMCB2YWx1ZSBhcnJheVxuXG5cbnstfCBBbGxvd3MgeW91IHRvIHBlcmZvcm0gbXVsdGlwbGUgbW9kaWZpY2F0aW9ucyBpbiBhIHNpbmdsZSBvcGVyYXRpb24uIFNwbGljZSB0YWtlcyBhbiBpbmRleFxuYXMgaXRzIGZpcnN0IGFyZ3VtZW50LiBUaGlzIG1hcmtzIHRoZSBwb2ludCB3aGVyZSBtb2RpZmljYXRpb25zIHdpbGwgYmUgcGVyZm9ybWVkLiBUaGVcbnNlY29uZCBhcmd1bWVudCBpcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJlbW92ZS4gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIHRoZSBlbGVtZW50cyB0aGF0XG53aWxsIGJlIGluc2VydGVkLiBUaGUgYXJndW1lbnQgb3JkZXIgcmVwcmVzZW50cyB0aGUgb3JkZXIgb2YgbW9kaWZpY2F0aW9ucy4gRWxlbWVudHMgd2lsbCBiZVxucmVtb3ZlZCBiZWZvcmUgbmV3IGVsZW1lbnRzIGFyZSBpbnNlcnRlZC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMgbm8gZWxlbWVudHMgd2lsbCBiZSByZW1vdmVkLCBidXQgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBhdCB0aGVcbmJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZSBlbmQgKHBvc2l0aXZlIGluZGV4KS5cblxuXG4gICAgc3BsaWNlIDIgMCBbIDAgXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDAsIDMgXVxuICAgIHNwbGljZSAyIDEgWyAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAwIF1cbiAgICBzcGxpY2UgMiAxIFtdIFsgMSwgMiwgMyBdID09IFsgMSwgMiBdXG5cbi19XG5zcGxpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zcGxpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZU5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwcmVmaXgsXG5hbmQgdGhlIHNlY29uZCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBwcmVwZW5kIFsgMSwgMiwgMyBdIFsgNCwgNSwgNiBdID09IFsgMSwgMiwgMywgNCwgNSwgNiBdIFxuXG5Zb3UgY2FuIGFsc28gdXNlIHRoZSBgKytgIG9wZXJhdG9yIGZvciB0aGlzIHB1cnBvc2UuXG5cbiAgICBbIDEsIDIsIDMgXSArKyBbIDQsIDUsIDYgXSA9PSBbIDEsIDIsIDMsIDQsIDUsIDYgXVxuLX1cbnByZXBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHJlcGVuZCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuYXBwZW5kXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4LFxuYW5kIHRoZSBzZWNvbmQgYXJyYXkgYmVjb21lcyB0aGUgcHJlZml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBhcHBlbmQgWyAxLCAyLCAzIF0gWyA0LCA1LCA2IF0gPT0gWyA0LCA1LCA2LCAxLCAyLCAzIF1cbiAgICBcbi19XG5hcHBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuYXBwZW5kIGZzdCBzZWNvbmQgPVxuICAgIHByZXBlbmQgc2Vjb25kIGZzdFxuXG5cbnstfCBDb21iaW5lIGEgYnVuY2ggb2YgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXkuXG5cbiAgICBmbGF0dGVuIFsgWyAxIF0sIFsgMiBdLCBbIDQsIDUgXSBdID09IFsgMSwgMiwgNCwgNSBdXG5cbi19XG5mbGF0dGVuIDogQXJyYXkgKEFycmF5IGEpIC0+IEFycmF5IGFcbmZsYXR0ZW4gPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZsYXRcblxuXG57LXwgTWFwIGEgZ2l2ZW4gZnVuY3Rpb24gb250byBhbiBhcnJheSwgdGhlbiBmbGF0dGVuIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBtYXBBbmRGbGF0dGVuIGYgeHMgPT0gZmxhdHRlbiAobWFwIGYgeHMpXG5cbi19XG5tYXBBbmRGbGF0dGVuIDogKGEgLT4gQXJyYXkgYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXBBbmRGbGF0dGVuID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mbGF0TWFwXG5cblxuey18IFBsYWNlcyB0aGUgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBhbGwgbWVtYmVycyBvZiB0aGUgZ2l2ZW4gYXJyYXkuXG5cbiAgICBpbnRlcnNwZXJzZSBcIm9uXCIgWyBcInR1cnRsZXNcIiwgXCJ0dXJ0bGVzXCIsIFwidHVydGxlc1wiXSA9PSBbIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiXVxuXG4tfVxuaW50ZXJzcGVyc2UgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW50ZXJzcGVyc2Ugc2VwIHhzID1cbiAgICB3aGVuIHBvcEZpcnN0IHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFtdXG5cbiAgICAgICAgSnVzdCB7IGZpcnN0ID0gaGVhZCwgcmVzdCA9IHRhaWwgfSAtPlxuICAgICAgICAgICAgcHVzaEZpcnN0IGhlYWQgPHwgbWFwQW5kRmxhdHRlbiAoXFx2YWwgLT4gWyBzZXAsIHZhbCBdKSB0YWlsXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAyIChcXHggeSAtPiB7IHggPSB4LCB5ID0geSB9KSBbIDEgXSBbIDIgXSA9PSBbIHsgeCA9IDEsIHkgPSAyIH0gXVxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IHJlc3VsdFxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubWFwMlxuXG5cbnstfCBDb21iaW5lIHRocmVlIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAzIChcXHggeSB6IC0+IHsgeCA9IHgsIHkgPSB5LCB6ID0geiB9KSBbIDEgXSBbIDIgXSBbIDMgXSA9PSBbIHsgeCA9IDEsIHkgPSAyLCB6ID0gMyB9IF1cbi19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IGMgLT4gQXJyYXkgcmVzdWx0XG5tYXAzID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5tYXAzXG5cblxuLS0gREVDT05TVFJVQ1RcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LCBpZiBpdCBleGlzdHMuXG5cbiAgICBmaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IDFcblxuLX1cbmZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5maXJzdCBhcnJheSA9XG4gICAgZ2V0IDAgYXJyYXlcblxuXG57LXwgUmV0cmlldmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXJyYXksIGlmIGl0IGV4aXN0cy5cblxuICAgIGxhc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCAzXG5cbi19XG5sYXN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5sYXN0IGFycmF5ID1cbiAgICBnZXQgLTEgYXJyYXlcblxuXG57LXwgR2V0IGEgc3ViIHNlY3Rpb24gb2YgYW4gYXJyYXk6IGAoc2xpY2Ugc3RhcnQgZW5kIGFycmF5KWAuXG5cblRoZSBgc3RhcnRgIGlzIGEgemVyby1iYXNlZCBpbmRleCB3aGVyZSB3ZSB3aWxsIHN0YXJ0IG91ciBzbGljZS5cblRoZSBgZW5kYCBpcyBhIHplcm8tYmFzZWQgaW5kZXggdGhhdCBpbmRpY2F0ZXMgdGhlIGVuZCBvZiB0aGUgc2xpY2UuXG5UaGUgc2xpY2UgZXh0cmFjdHMgdXAgdG8sIGJ1dCBubyBpbmNsdWRpbmcsIHRoZSBgZW5kYC5cblxuQm90aCBgc3RhcnRgIGFuZCBgZW5kYCBjYW4gYmUgbmVnYXRpdmUsIGluZGljYXRpbmcgYW4gb2Zmc2V0IGZyb20gdGhlIGVuZFxub2YgdGhlIGFycmF5LiBSZW1vdmluZyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBjYW4gYmUgZXhwcmVzc2VkIGFzOlxuXG4gICAgYHNsaWNlIDAgLTEgYXJyYC5cblxuSW4gdGhlIGNhc2Ugb2YgYW4gaW1wb3NzaWJsZSBzbGljZSwgdGhlIGVtcHR5IGFycmF5IGlzIHJldHVybmVkLlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc2xpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNsaWNlXG5cblxuey18IFJlbW92ZSB0aGUgZmlyc3QgYG5gIGVsZW1lbnRzIG9mIHRoZSBhcnJheS5cblxuICAgIGRyb3BGaXJzdCA1IFsgMSBdID09IFtdXG4gICAgZHJvcEZpcnN0IDEgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmRyb3BGaXJzdCBuIGFycmF5ID1cbiAgICBzbGljZSBuIChsZW5ndGggYXJyYXkpIGFycmF5XG5cblxuey18IFJlbW92ZSB0aGUgbGFzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuXG4gICAgZHJvcExhc3QgMSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5kcm9wTGFzdCBuIGFycmF5ID1cbiAgICBzbGljZSAwIChsZW5ndGggYXJyYXkgLSBuKSBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXkuXG5cbiAgICB0YWtlRmlyc3QgMiBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUZpcnN0IG4gYXJyYXkgPVxuICAgIHNsaWNlIDAgbiBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cblxuICAgIHRha2VMYXN0IDIgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbnRha2VMYXN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUxhc3QgbiBhcnJheSA9XG4gICAgbGV0XG4gICAgICAgIGxlbiA9XG4gICAgICAgICAgICBsZW5ndGggYXJyYXlcbiAgICBpblxuICAgIHNsaWNlIChsZW4gLSBuKSBsZW4gYXJyYXlcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgZmlyc3QgZWxlbWVudCwgYW5kIGl0cyByZW1haW5pbmcgZWxlbWVudHMsIGlmIHBvc3NpYmxlLlxuXG4gICAgcG9wRmlyc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCB7IGZpcnN0ID0gMSwgcmVzdCA9IFsgMiwgMyBdIH1cblxuLX1cbnBvcEZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGZpcnN0IDogYSwgcmVzdCA6IEFycmF5IGEgfVxucG9wRmlyc3QgYXJyYXkgPVxuICAgIHdoZW4gZmlyc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgZmlyc3QgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICwgcmVzdCA9IGRyb3BGaXJzdCAxIGFycmF5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgbGFzdCBlbGVtZW50LCBhbmQgaXRzIHJlbWFpbmluZyBlbGVtZW50cywgaWYgcG9zc2libGUuXG5cbiAgICBwb3BGaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IHsgbGFzdCA9IDMsIGluaXRpYWwgPSBbIDEsIDIgXSB9XG5cbi19XG5wb3BMYXN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGxhc3QgOiBhLCBpbml0aWFsIDogQXJyYXkgYSB9XG5wb3BMYXN0IGFycmF5ID1cbiAgICB3aGVuIGxhc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgbGFzdCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgLCBpbml0aWFsID0gZHJvcExhc3QgMSBhcnJheVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IERpdmlkZSBlbGVtZW50cyBpbnRvIHR3byBhcnJheXMgYmFzZWQgb24gdGhlIHJlc3VsdCBvZiBhIGJvb2xlYW4gdGVzdC5cblxuICAgIHBhcnRpdGlvbiAoXFx4IC0+IHggPCAzKSBbIDAsIDEsIDIsIDMsIDQsIDUgXSA9PSB7IHRydWVzID0gWyAwLCAxLCAyIF0sIGZhbHNlcyA9IFsgMywgNCwgNSBdIH1cblxuLX1cbnBhcnRpdGlvbiA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4geyB0cnVlcyA6IEFycmF5IGEsIGZhbHNlcyA6IEFycmF5IGEgfVxucGFydGl0aW9uIGZuIGFycmF5ID1cbiAgICBmb2xkbFxuICAgICAgICAoXFx2YWwgeyB0cnVlcywgZmFsc2VzIH0gLT5cbiAgICAgICAgICAgIGlmIGZuIHZhbCB0aGVuXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHB1c2hMYXN0IHZhbCB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBwdXNoTGFzdCB2YWwgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHsgdHJ1ZXMgPSBbXSwgZmFsc2VzID0gW10gfVxuICAgICAgICBhcnJheVxuXG5cbi0tIFNPUlRcblxuXG57LXwgU29ydCB2YWx1ZXMgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdFxuXG4gICAgc29ydCBbIDMsIDEsIDUgXSA9PSBbIDEsIDMsIDUgXVxuXG4tfVxuc29ydCA6IEFycmF5IGNvbXBhcmFibGUgLT4gQXJyYXkgY29tcGFyYWJsZVxuc29ydCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc29ydFxuXG5cbnstfCBTb3J0IHZhbHVlcyBieSBhIGRlcml2ZWQgcHJvcGVydHkuXG5cbiAgICBzb3J0QnkgU3RyaW5nLmxlbmd0aCBbIFwibW91c2VcIiwgXCJjYXRcIiBdID09IFsgXCJjYXRcIiwgXCJtb3VzZVwiIF1cblxuLX1cbnNvcnRCeSA6IChhIC0+IGNvbXBhcmFibGUpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydEJ5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zb3J0QnlcblxuXG57LXwgU29ydCB2YWx1ZXMgd2l0aCBhIGN1c3RvbSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuXG4gICAgc29ydFdpdGggZmxpcHBlZENvbXBhcmlzb24gWzEsMiwzLDQsNV0gPT0gWzUsNCwzLDIsMV1cblxuICAgIGZsaXBwZWRDb21wYXJpc29uIGEgYiA9XG4gICAgICAgIHdoZW4gY29tcGFyZSBhIGIgaXNcbiAgICAgICAgICBMVCAtPiBHVFxuICAgICAgICAgIEVRIC0+IEVRXG4gICAgICAgICAgR1QgLT4gTFRcblxuVGhpcyBpcyBhbHNvIHRoZSBtb3N0IGdlbmVyYWwgc29ydCBmdW5jdGlvbiwgYWxsb3dpbmcgeW91IHRvIGRlZmluZSBhbnkgb3RoZXI6IGBzb3J0ID09IHNvcnRXaXRoIGNvbXBhcmVgXG5cbi19XG5zb3J0V2l0aCA6IChhIC0+IGEgLT4gT3JkZXIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydFdpdGggPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNvcnRXaXRoXG5cbiIsCiAgICAgICAgIm1vZHVsZSBTZXQgZXhwb3NpbmdcbiAgICAoIFNldFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCByZW1vdmUsIHRvZ2dsZVxuICAgICwgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICApXG5cbnstfCBBIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBUaGUgdmFsdWVzIGNhbiBiZSBhbnkgY29tcGFyYWJsZSB0eXBlLiBUaGlzXG5pbmNsdWRlcyBgSW50YCwgYEZsb2F0YCwgYFRpbWVgLCBgQ2hhcmAsIGBTdHJpbmdgLCBhbmQgdHVwbGVzIG9yIGFycmF5c1xub2YgY29tcGFyYWJsZSB0eXBlcy5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBTZXRcblxuXG5AZG9jcyBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHJlbW92ZSwgdG9nZ2xlXG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG5cblxuIyMgQ29tYmluZVxuXG5AZG9jcyB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIHRvQXJyYXksIGZyb21BcnJheVxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBEaWN0XG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBTbyBgKFNldCBJbnQpYCBpcyBhIHNldCBvZiBpbnRlZ2VycyBhbmRcbmAoU2V0IFN0cmluZylgIGlzIGEgc2V0IG9mIHN0cmluZ3MuXG4tfVxudHlwZSBTZXQgdFxuICAgID0gU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5EaWN0IHQge30pXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBzZXQuXG4tfVxuZW1wdHkgOiBTZXQgYVxuZW1wdHkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gRGljdC5lbXB0eVxuXG5cbnstfCBDcmVhdGUgYSBzZXQgd2l0aCBvbmUgdmFsdWUuXG4tfVxuc2luZ2xldG9uIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuc2luZ2xldG9uIGtleSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5zaW5nbGV0b24ga2V5IHt9KVxuXG5cbnstfCBTZXQgYSB2YWx1ZSBpbnRvIGEgc2V0LlxuLX1cbnNldCA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnNldCBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3Quc2V0IGtleSB7fSBkaWN0KVxuXG5cbnstfCBSZW1vdmUgYSB2YWx1ZSBmcm9tIGEgc2V0LiBJZiB0aGUgdmFsdWUgaXMgbm90IGZvdW5kLCBubyBjaGFuZ2VzIGFyZSBtYWRlLlxuLX1cbnJlbW92ZSA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnJlbW92ZSBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QucmVtb3ZlIGtleSBkaWN0KVxuXG5cbnstfCBUb2dnbGUgYSB2YWx1ZSBpbiBhIHNldC4gSWYgdGhlIHZhbHVlIGlzbid0IGluIHRoZSBzZXQsIGl0IGlzIGFkZGVkLiBJZiB0aGVcbnZhbHVlIGlzIGluIHRoZSBzZXQsIGl0IGlzIHJlbW92ZWQuXG4tfVxudG9nZ2xlIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxudG9nZ2xlIGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgd2hlbiBEaWN0LmdldCBrZXkgZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFNldF9ncmVuX2J1aWx0aW4gPHwgRGljdC5yZW1vdmUga2V5IGRpY3RcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBTZXRfZ3Jlbl9idWlsdGluIDx8IERpY3Quc2V0IGtleSB7fSBkaWN0XG5cblxuey18IERldGVybWluZSBpZiBhIHNldCBpcyBlbXB0eS5cbi19XG5pc0VtcHR5IDogU2V0IGEgLT4gQm9vbFxuaXNFbXB0eSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5pc0VtcHR5IGRpY3RcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgaW4gYSBzZXQuXG4tfVxubWVtYmVyIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBCb29sXG5tZW1iZXIga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0Lm1lbWJlciBrZXkgZGljdFxuXG5cbnstfCBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNldC5cbi19XG5jb3VudCA6IFNldCBhIC0+IEludFxuY291bnQgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuY291bnQgZGljdFxuXG5cbnstfCBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHNldC5cbi19XG5maXJzdCA6IFNldCBhIC0+IE1heWJlIGFcbmZpcnN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maXJzdCBkaWN0KVxuXG5cbnstfCBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgc2V0LlxuLX1cbmxhc3QgOiBTZXQgYSAtPiBNYXliZSBhXG5sYXN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5sYXN0IGRpY3QpXG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRGaXJzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRGaXJzdCBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QuZmluZEZpcnN0IChcXGtleSBfIC0+IGZuIGtleSkgZGljdClcblxuXG57LXwgRmluZCB0aGUgbGFzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRMYXN0IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maW5kTGFzdCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3QpXG5cblxuey18IENoZWNrcyBpZiBhbnkgdmFsdWUgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYW55IDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYW55IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFueSAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCB2YWx1ZXMgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYWxsIGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFsbCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgR2V0IHRoZSB1bmlvbiBvZiB0d28gc2V0cy4gS2VlcCBhbGwgdmFsdWVzLlxuLX1cbnVuaW9uIDogU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnVuaW9uIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QxKSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MikgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QudW5pb24gZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBzZXRzLiBLZWVwcyB2YWx1ZXMgdGhhdCBhcHBlYXIgaW4gYm90aCBzZXRzLlxuLX1cbmludGVyc2VjdCA6IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5pbnRlcnNlY3QgKFNldF9ncmVuX2J1aWx0aW4gZGljdDEpIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QyKSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5pbnRlcnNlY3QgZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBzZXQgYW5kIHRoZSBzZWNvbmQuIEtlZXBzIHZhbHVlc1xudGhhdCBkbyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgc2V0LlxuLX1cbmRpZmYgOiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZGlmZiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MSkgKFNldF9ncmVuX2J1aWx0aW4gZGljdDIpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LmRpZmYgZGljdDEgZGljdDIpXG5cblxuey18IENvbnZlcnQgYSBzZXQgaW50byBhbiBhcnJheSwgc29ydGVkIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxudG9BcnJheSA6IFNldCBhIC0+IEFycmF5IGFcbnRvQXJyYXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3Qua2V5cyBkaWN0XG5cblxuey18IENvbnZlcnQgYW4gYXJyYXkgaW50byBhIHNldCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMuXG4tfVxuZnJvbUFycmF5IDogQXJyYXkgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZnJvbUFycmF5IGFycmF5ID1cbiAgICBBcnJheS5mb2xkbCBzZXQgZW1wdHkgYXJyYXlcblxuXG57LXwgRm9sZCBvdmVyIHRoZSB2YWx1ZXMgaW4gYSBzZXQsIGluIG9yZGVyIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxuZm9sZGwgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gU2V0IGEgLT4gYlxuZm9sZGwgZnVuYyBpbml0aWFsU3RhdGUgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuZm9sZGwgKFxca2V5IF8gc3RhdGUgLT4gZnVuYyBrZXkgc3RhdGUpIGluaXRpYWxTdGF0ZSBkaWN0XG5cblxuey18IEZvbGQgb3ZlciB0aGUgdmFsdWVzIGluIGEgc2V0LCBpbiBvcmRlciBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0LlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IFNldCBhIC0+IGJcbmZvbGRyIGZ1bmMgaW5pdGlhbFN0YXRlIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmZvbGRyIChcXGtleSBfIHN0YXRlIC0+IGZ1bmMga2V5IHN0YXRlKSBpbml0aWFsU3RhdGUgZGljdFxuXG5cbnstfCBNYXAgYSBmdW5jdGlvbiBvbnRvIGEgc2V0LCBjcmVhdGluZyBhIG5ldyBzZXQgd2l0aCBubyBkdXBsaWNhdGVzLlxuLX1cbm1hcCA6IChjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUyKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZTJcbm1hcCBmdW5jIGNvbGwgPVxuICAgIGZvbGRsIChcXHggeHMgLT4gc2V0IChmdW5jIHgpIHhzKSBlbXB0eSBjb2xsXG5cblxuey18IE9ubHkga2VlcCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIGdpdmVuIHRlc3QuXG5cbiAgICBpbXBvcnQgU2V0IGV4cG9zaW5nIChTZXQpXG5cbiAgICBudW1iZXJzIDogU2V0IEludFxuICAgIG51bWJlcnMgPVxuICAgICAgICBTZXQuZnJvbUFycmF5IFsgLTIsIC0xLCAwLCAxLCAyIF1cblxuICAgIHBvc2l0aXZlcyA6IFNldCBJbnRcbiAgICBwb3NpdGl2ZXMgPVxuICAgICAgICBTZXQua2VlcElmIChcXHggLT4geCA+IDApIG51bWJlcnNcblxuICAgIC0tIHBvc2l0aXZlcyA9PSBTZXQuZnJvbUFycmF5IFsxLDJdXG5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiBCb29sKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxua2VlcElmIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5rZWVwSWYgKFxca2V5IF8gLT4gaXNHb29kIGtleSkgZGljdClcblxuXG57LXwgUmVtb3ZlIHVud2FudGVkIHJlc3VsdHMgb2YgYSBtYXAgb3BlcmF0aW9uLlxuICAgIFxuICAgIGltcG9ydCBTZXRcblxuICAgIHN0cmluZ3MgOiBTZXQgU3RyaW5nXG4gICAgc3RyaW5ncyA9XG4gICAgICAgIFNldC5mcm9tQXJyYXkgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF1cblxuICAgIG51bWJlcnMgOiBTZXQgSW50XG4gICAgbnVtYmVycyA9XG4gICAgICAgIFNldC5tYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgc3RyaW5nc1xuXG4gICAgLS0gbnVtYmVycyA9PSBTZXQuZnJvbUFycmF5IFsgMywgLTUgXVxuLX1cbm1hcEFuZEtlZXBKdXN0IDogKGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZTIpIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlMlxubWFwQW5kS2VlcEp1c3QgdG9NYXliZSBjb2xsID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxvbGQgbmV3cyAtPlxuICAgICAgICAgICAgd2hlbiB0b01heWJlIG9sZCBpc1xuICAgICAgICAgICAgICAgIEp1c3QgbmV3IC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBuZXcgbmV3c1xuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBuZXdzXG4gICAgICAgIClcbiAgICAgICAgZW1wdHlcbiAgICAgICAgY29sbFxuXG5cbnstfCBDcmVhdGUgdHdvIG5ldyBzZXRzLiBUaGUgZmlyc3QgY29udGFpbnMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3NlZCB0aGVcbmdpdmVuIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IEJvb2wpIC0+IFNldCBjb21wYXJhYmxlIC0+IHsgdHJ1ZXMgOiBTZXQgY29tcGFyYWJsZSwgZmFsc2VzIDogU2V0IGNvbXBhcmFibGUgfVxucGFydGl0aW9uIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgbGV0XG4gICAgICAgIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIERpY3QucGFydGl0aW9uIChcXGtleSBfIC0+IGlzR29vZCBrZXkpIGRpY3RcbiAgICBpblxuICAgIHsgdHJ1ZXMgPSBTZXRfZ3Jlbl9idWlsdGluIHRydWVzXG4gICAgLCBmYWxzZXMgPSBTZXRfZ3Jlbl9idWlsdGluIGZhbHNlc1xuICAgIH1cbiIsCiAgICAgICAgIm1vZHVsZSBCYXNpY3MgZXhwb3NpbmdcbiAgICAoIEludCwgKCspLCAoLSksICgqKSwgKC8pLCAoLy8pLCAoXiksIG5lZ2F0ZVxuICAgICwgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG4gICAgLCAoPT0pLCAoLz0pXG4gICAgLCAoPCksICg+KSwgKDw9KSwgKD49KSwgbWF4LCBtaW4sIGNsYW1wLCBjb21wYXJlLCBPcmRlciguLilcbiAgICAsIEJvb2woLi4pLCBub3QsICgmJiksICh8fCksIHhvclxuICAgICwgKCsrKVxuICAgICwgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuICAgIClcblxuey18IFRvbnMgb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGdldCBpbXBvcnRlZCBieSBkZWZhdWx0LlxuXG5cbiMjIE51bWJlcnNcblxuQGRvY3MgSW50LCAoKyksICgtKSwgKCopLCAoLyksICgvLyksICheKSwgbmVnYXRlXG5cblxuIyMgRmxvYXRcblxuQGRvY3MgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG5cblxuIyMgRXF1YWxpdHlcblxuQGRvY3MgKD09KSwgKC89KVxuXG5cbiMjIENvbXBhcmlzb25cblxuVGhlc2UgZnVuY3Rpb25zIG9ubHkgd29yayBvbiBgY29tcGFyYWJsZWAgdHlwZXMuIFRoaXMgaW5jbHVkZXMgbnVtYmVycyxcbmNoYXJhY3RlcnMsIHN0cmluZ3MgYW5kIGFycmF5cyBvZiBjb21wYXJhYmxlIHRoaW5ncy5cblxuQGRvY3MgT3JkZXIsICg8KSwgKD4pLCAoPD0pLCAoPj0pLCBtYXgsIG1pbiwgY2xhbXAsIGNvbXBhcmVcblxuXG4jIyBCb29sZWFuc1xuXG5AZG9jcyBCb29sLCBub3QsICgmJiksICh8fCksIHhvclxuXG5cbiMjIEFwcGVuZCBTdHJpbmdzIGFuZCBBcnJheXNcblxuQGRvY3MgKCsrKVxuXG5cbiMjIEZ1bmN0aW9uIEhlbHBlcnNcblxuQGRvY3MgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQmFzaWNzXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVXRpbHNcblxuXG5cbi0tIElORklYIE9QRVJBVE9SU1xuXG5cbmluZml4IHJpZ2h0IDAgKDx8KSA9IGFwTFxuaW5maXggbGVmdCAgMCAofD4pID0gYXBSXG5pbmZpeCByaWdodCAyICh8fCkgPSBvclxuaW5maXggcmlnaHQgMyAoJiYpID0gYW5kXG5pbmZpeCBub24gICA0ICg9PSkgPSBlcVxuaW5maXggbm9uICAgNCAoLz0pID0gbmVxXG5pbmZpeCBub24gICA0ICg8KSA9IGx0XG5pbmZpeCBub24gICA0ICg+KSA9IGd0XG5pbmZpeCBub24gICA0ICg8PSkgPSBsZVxuaW5maXggbm9uICAgNCAoPj0pID0gZ2VcbmluZml4IHJpZ2h0IDUgKCsrKSA9IGFwcGVuZFxuaW5maXggbGVmdCAgNiAoKykgPSBhZGRcbmluZml4IGxlZnQgIDYgKC0pID0gc3ViXG5pbmZpeCBsZWZ0ICA3ICgqKSA9IG11bFxuaW5maXggbGVmdCAgNyAoLykgPSBmZGl2XG5pbmZpeCBsZWZ0ICA3ICgvLykgPSBpZGl2XG5pbmZpeCByaWdodCA4ICheKSA9IHBvd1xuaW5maXggbGVmdCAgOSAoPDwpID0gY29tcG9zZUxcbmluZml4IHJpZ2h0IDkgKD4+KSA9IGNvbXBvc2VSXG5cblxuXG4tLSBNQVRIRU1BVElDU1xuXG5cbnstfCBBbiBgSW50YCBpcyBhIHdob2xlIG51bWJlci4gVmFsaWQgc3ludGF4IGZvciBpbnRlZ2VycyBpbmNsdWRlczpcblxuICAgIDBcblxuICAgIDQyXG5cbiAgICA5MDAwXG5cbiAgICAweEZGIC0tIDI1NSBpbiBoZXhhZGVjaW1hbFxuXG4gICAgMHgwQSAtLSAgMTAgaW4gaGV4YWRlY2ltYWxcblxuKipOb3RlOioqIGBJbnRgIG1hdGggaXMgd2VsbC1kZWZpbmVkIGluIHRoZSByYW5nZSBgLTJeMzFgIHRvIGAyXjMxIC0gMWAuIE91dHNpZGVcbm9mIHRoYXQgcmFuZ2UsIHRoZSBiZWhhdmlvciBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjb21waWxhdGlvbiB0YXJnZXQuIFdoZW5cbmdlbmVyYXRpbmcgSmF2YVNjcmlwdCwgdGhlIHNhZmUgcmFuZ2UgZXhwYW5kcyB0byBgLSgyXjUzIC0gMSlgIHRvIGAyXjUzIC0gMWAgZm9yIHNvbWVcbm9wZXJhdGlvbnMsIGJ1dCBpZiB3ZSBnZW5lcmF0ZSBXZWJBc3NlbWJseSBzb21lIGRheSwgd2Ugd291bGQgZG8gdGhlIHRyYWRpdGlvbmFsXG5baW50ZWdlciBvdmVyZmxvd11baW9dLiBUaGlzIHF1aXJrIGlzIG5lY2Vzc2FyeSB0byBnZXQgZ29vZCBwZXJmb3JtYW5jZSBvblxucXVpcmt5IGNvbXBpbGF0aW9uIHRhcmdldHMuXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBuYW1lIGBJbnRgIGNvbWVzIGZyb20gdGhlIHRlcm0gW2ludGVnZXJdLiBJdCBhcHBlYXJzXG50aGF0IHRoZSBgaW50YCBhYmJyZXZpYXRpb24gd2FzIGludHJvZHVjZWQgaW4gW0FMR09MIDY4XVs2OF0sIHNob3J0ZW5pbmcgaXRcbmZyb20gYGludGVnZXJgIGluIFtBTEdPTCA2MF1bNjBdLiBUb2RheSwgYWxtb3N0IGFsbCBwcm9ncmFtbWluZyBsYW5ndWFnZXMgdXNlXG50aGlzIGFiYnJldmlhdGlvbi5cblxuW2lvXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZWdlcl9vdmVyZmxvd1xuW2ludGVnZXJdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlZ2VyXG5bNjBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTEdPTF82MFxuWzY4XTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQUxHT0xfNjhcblxuLX1cbnR5cGUgSW50XG4gICAgPSBJbnQgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cbnstfCBBIGBGbG9hdGAgaXMgYSBbZmxvYXRpbmctcG9pbnQgbnVtYmVyXVtmcF0uIFZhbGlkIHN5bnRheCBmb3IgZmxvYXRzIGluY2x1ZGVzOlxuXG4gICAgMFxuICAgIDQyXG4gICAgMy4xNFxuICAgIDAuMTIzNFxuICAgIDYuMDIyZTIzICAgLS0gPT0gKDYuMDIyICogMTBeMjMpXG4gICAgNi4wMjJlKzIzICAtLSA9PSAoNi4wMjIgKiAxMF4yMylcbiAgICAxLjYwMmXiiJIxOSAgLS0gPT0gKDEuNjAyICogMTBeLTE5KVxuICAgIDFlMyAgICAgICAgLS0gPT0gKDEgKiAxMF4zKSA9PSAxMDAwXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBwYXJ0aWN1bGFyIGRldGFpbHMgb2YgZmxvYXRzIChlLmcuIGBOYU5gKSBhcmVcbnNwZWNpZmllZCBieSBbSUVFRSA3NTRdW2llZWVdIHdoaWNoIGlzIGxpdGVyYWxseSBoYXJkLWNvZGVkIGludG8gYWxtb3N0IGFsbFxuQ1BVcyBpbiB0aGUgd29ybGQuIFRoYXQgbWVhbnMgaWYgeW91IHRoaW5rIGBOYU5gIGlzIHdlaXJkLCB5b3UgbXVzdFxuc3VjY2Vzc2Z1bGx5IG92ZXJ0YWtlIEludGVsIGFuZCBBTUQgd2l0aCBhIGNoaXAgdGhhdCBpcyBub3QgYmFja3dhcmRzXG5jb21wYXRpYmxlIHdpdGggYW55IHdpZGVseS11c2VkIGFzc2VtYmx5IGxhbmd1YWdlLlxuXG5bZnBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GbG9hdGluZy1wb2ludF9hcml0aG1ldGljXG5baWVlZV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lFRUVfNzU0XG5cbi19XG50eXBlIEZsb2F0XG4gICAgPSBGbG9hdCAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuey18IEFkZCB0d28gbnVtYmVycy4gVGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUgbWVhbnMgdGhpcyBvcGVyYXRpb24gY2FuIGJlXG5zcGVjaWFsaXplZCB0byBgSW50IC0+IEludCAtPiBJbnRgIG9yIHRvIGBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdGAuIFNvIHlvdVxuY2FuIGRvIHRoaW5ncyBsaWtlIHRoaXM6XG5cbiAgICAzMDAyICsgNDAwNCA9PSA3MDA2IC0tIGFsbCBpbnRzXG5cbiAgICAzLjE0ICsgMy4xNCA9PSA2LjI4IC0tIGFsbCBmbG9hdHNcblxuWW91IF9jYW5ub3RfIGFkZCBhbiBgSW50YCBhbmQgYSBgRmxvYXRgIGRpcmVjdGx5IHRob3VnaC4gVXNlIGZ1bmN0aW9ucyBsaWtlXG5bdG9GbG9hdF0oI3RvRmxvYXQpIG9yIFtyb3VuZF0oI3JvdW5kKSB0byBjb252ZXJ0IGJvdGggdmFsdWVzIHRvIHRoZSBzYW1lIHR5cGUuXG5TbyBpZiB5b3UgbmVlZGVkIHRvIGFkZCBhIGFycmF5IGxlbmd0aCB0byBhIGBGbG9hdGAgZm9yIHNvbWUgcmVhc29uLCB5b3VcbmNvdWxkIHNheSBvbmUgb2YgdGhlc2U6XG5cbiAgICAzLjE0ICsgdG9GbG9hdCAoQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdKSA9PSA2LjE0XG5cbiAgICByb3VuZCAzLjE0ICsgQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdID09IDZcblxuKipOb3RlOioqIExhbmd1YWdlcyBsaWtlIEphdmEgYW5kIEphdmFTY3JpcHQgYXV0b21hdGljYWxseSBjb252ZXJ0IGBJbnRgIHZhbHVlc1xudG8gYEZsb2F0YCB2YWx1ZXMgd2hlbiB5b3UgbWl4IGFuZCBtYXRjaC4gVGhpcyBjYW4gbWFrZSBpdCBkaWZmaWN1bHQgdG8gYmUgc3VyZVxuZXhhY3RseSB3aGF0IHR5cGUgb2YgbnVtYmVyIHlvdSBhcmUgZGVhbGluZyB3aXRoLiBXaGVuIHlvdSB0cnkgdG8gX2luZmVyXyB0aGVzZVxuY29udmVyc2lvbnMgKGFzIFNjYWxhIGRvZXMpIGl0IGNhbiBiZSBldmVuIG1vcmUgY29uZnVzaW5nLiBHcmVuIGhhcyBvcHRlZCBmb3IgYVxuZGVzaWduIHRoYXQgbWFrZXMgYWxsIGNvbnZlcnNpb25zIGV4cGxpY2l0LlxuXG4tfVxuYWRkIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmFkZCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmFkZFxuXG5cbnstfCBTdWJ0cmFjdCBudW1iZXJzIGxpa2UgYDQgLSAzID09IDFgLlxuXG5TZWUgW2AoKylgXSgjKykgZm9yIGRvY3Mgb24gdGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUuXG5cbi19XG5zdWIgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxuc3ViID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Muc3ViXG5cblxuey18IE11bHRpcGx5IG51bWJlcnMgbGlrZSBgMiAqIDMgPT0gNmAuXG5cblNlZSBbYCgrKWBdKCMrKSBmb3IgZG9jcyBvbiB0aGUgYG51bWJlcmAgdHlwZSB2YXJpYWJsZS5cblxuLX1cbm11bCA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5tdWwgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5tdWxcblxuXG57LXwgRmxvYXRpbmctcG9pbnQgZGl2aXNpb246XG5cbiAgICAxMCAvIDQgPT0gMi41XG5cbiAgICAxMSAvIDQgPT0gMi43NVxuXG4gICAgMTIgLyA0ID09IDNcblxuICAgIDEzIC8gNCA9PSAzLjI1XG5cbiAgICAxNFxuICAgICAgICAvIDRcbiAgICAgICAgPT0gMy41XG4gICAgICAgIC0gMVxuICAgICAgICAvIDRcbiAgICAgICAgPT0gLTAuMjVcbiAgICAgICAgLSA1XG4gICAgICAgIC8gNFxuICAgICAgICA9PSAtMS4yNVxuXG4tfVxuZmRpdiA6IEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0XG5mZGl2ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuZmRpdlxuXG5cbnstfCBJbnRlZ2VyIGRpdmlzaW9uOlxuXG4gICAgMTAgLy8gNCA9PSAyXG5cbiAgICAxMSAvLyA0ID09IDJcblxuICAgIDEyIC8vIDQgPT0gM1xuXG4gICAgMTMgLy8gNCA9PSAzXG5cbiAgICAxNFxuICAgICAgICAvLyA0XG4gICAgICAgID09IDNcbiAgICAgICAgLSAxXG4gICAgICAgIC8vIDRcbiAgICAgICAgPT0gMFxuICAgICAgICAtIDVcbiAgICAgICAgLy8gNFxuICAgICAgICA9PSAtMVxuXG5Ob3RpY2UgdGhhdCB0aGUgcmVtYWluZGVyIGlzIGRpc2NhcmRlZCwgc28gYDMgLy8gNGAgaXMgZ2l2aW5nIG91dHB1dFxuc2ltaWxhciB0byBgdHJ1bmNhdGUgKDMgLyA0KWAuXG5cbkl0IG1heSBzb21ldGltZXMgYmUgdXNlZnVsIHRvIHBhaXIgdGhpcyB3aXRoIHRoZSBbYHJlbWFpbmRlckJ5YF0oI3JlbWFpbmRlckJ5KVxuZnVuY3Rpb24uXG5cbi19XG5pZGl2IDogSW50IC0+IEludCAtPiBJbnRcbmlkaXYgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5pZGl2XG5cblxuey18IEV4cG9uZW50aWF0aW9uXG5cbiAgICAzIF4gMiA9PSA5XG5cbiAgICAzIF4gMyA9PSAyN1xuXG4tfVxucG93IDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbnBvdyA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnBvd1xuXG5cbnstfCBOZWdhdGUgYSBudW1iZXIuXG5cbiAgICBuZWdhdGUgNDIgPT0gLTQyXG5cbiAgICBuZWdhdGUgLTQyID09IDQyXG5cbiAgICBuZWdhdGUgMCA9PSAwXG5cbi19XG5uZWdhdGUgOiBudW1iZXIgLT4gbnVtYmVyXG5uZWdhdGUgbiA9XG4gICAgLW5cblxuXG4tLSBJTlQgVE8gRkxPQVQgLyBGTE9BVCBUTyBJTlRcblxuXG57LXwgQ29udmVydCBhbiBpbnRlZ2VyIGludG8gYSBmbG9hdC4gVXNlZnVsIHdoZW4gbWl4aW5nIGBJbnRgIGFuZCBgRmxvYXRgXG52YWx1ZXMgbGlrZSB0aGlzOlxuXG4gICAgaGFsZk9mIDogSW50IC0+IEZsb2F0XG4gICAgaGFsZk9mIG51bWJlciA9XG4gICAgICAgIHRvRmxvYXQgbnVtYmVyIC8gMlxuXG4tfVxudG9GbG9hdCA6IEludCAtPiBGbG9hdFxudG9GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnRvRmxvYXRcblxuXG5cbi0tIEVRVUFMSVRZXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgJmxkcXVvO3RoZSBzYW1lJnJkcXVvOy5cblxuKipOb3RlOioqIEdyZW4gdXNlcyBzdHJ1Y3R1cmFsIGVxdWFsaXR5IG9uIHR1cGxlcywgcmVjb3JkcywgYW5kIHVzZXItZGVmaW5lZFxudW5pb24gdHlwZXMuIFRoaXMgbWVhbnMgdGhlIHZhbHVlcyBgKDMsIDQpYCBhbmQgYCgzLCA0KWAgYXJlIGRlZmluaXRlbHkgZXF1YWwuXG5UaGlzIGlzIG5vdCB0cnVlIGluIGxhbmd1YWdlcyBsaWtlIEphdmFTY3JpcHQgdGhhdCB1c2UgcmVmZXJlbmNlIGVxdWFsaXR5IG9uXG5vYmplY3RzLlxuXG4qKk5vdGU6KiogRG8gbm90IHVzZSBgKD09KWAgd2l0aCBmdW5jdGlvbnMsIEpTT04gdmFsdWVzIGZyb20gYGdyZW4vanNvbmAsIG9yXG5yZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gYGdyZW4vcmVnZXhgLiBJdCBkb2VzIG5vdCB3b3JrLiBJdCB3aWxsIGNyYXNoIGlmXG5wb3NzaWJsZS4gV2l0aCBKU09OIHZhbHVlcywgZGVjb2RlIHRvIEdyZW4gdmFsdWVzIGJlZm9yZSBkb2luZyBhbnkgZXF1YWxpdHlcbmNoZWNrcyFcblxuV2h5IGlzIGl0IGxpa2UgdGhpcz8gRXF1YWxpdHkgaW4gdGhlIEdyZW4gc2Vuc2UgY2FuIGJlIGRpZmZpY3VsdCBvciBpbXBvc3NpYmxlXG50byBjb21wdXRlLiBQcm92aW5nIHRoYXQgZnVuY3Rpb25zIGFyZSB0aGUgc2FtZSBpcyBbdW5kZWNpZGFibGVdLCBhbmQgSlNPTlxudmFsdWVzIGNhbiBjb21lIGluIHRocm91Z2ggcG9ydHMgYW5kIGhhdmUgZnVuY3Rpb25zLCBjeWNsZXMsIGFuZCBuZXcgSlMgZGF0YVxudHlwZXMgdGhhdCBpbnRlcmFjdCB3ZWlyZGx5IHdpdGggb3VyIGVxdWFsaXR5IGltcGxlbWVudGF0aW9uLiBJbiBhIGZ1dHVyZVxucmVsZWFzZSwgdGhlIGNvbXBpbGVyIHdpbGwgZGV0ZWN0IHdoZW4gYCg9PSlgIGlzIHVzZWQgd2l0aCBwcm9ibGVtYXRpYyB0eXBlc1xuYW5kIHByb3ZpZGUgYSBoZWxwZnVsIGVycm9yIG1lc3NhZ2UgYXQgY29tcGlsZSB0aW1lLiBUaGlzIHdpbGwgcmVxdWlyZSBzb21lXG5wcmV0dHkgc2VyaW91cyBpbmZyYXN0cnVjdHVyZSB3b3JrLCBzbyB0aGUgc3RvcGdhcCBpcyB0byBjcmFzaCBhcyBxdWlja2x5IGFzXG5wb3NzaWJsZS5cblxuW3VuZGVjaWRhYmxlXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5kZWNpZGFibGVfcHJvYmxlbVxuXG4tfVxuZXEgOiBhIC0+IGEgLT4gQm9vbFxuZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmVxdWFsXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgbm90ICZsZHF1bzt0aGUgc2FtZSZyZHF1bzsuXG5cblNvIGAoYSAvPSBiKWAgaXMgdGhlIHNhbWUgYXMgYChub3QgKGEgPT0gYikpYC5cblxuLX1cbm5lcSA6IGEgLT4gYSAtPiBCb29sXG5uZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLm5vdEVxdWFsXG5cblxuXG4tLSBDT01QQVJJU09OU1xuXG5cbnstfCAtfVxubHQgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxubHQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmx0XG5cblxuey18IC19XG5ndCA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5ndCA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuZ3RcblxuXG57LXwgLX1cbmxlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmxlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5sZVxuXG5cbnstfCAtfVxuZ2UgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxuZ2UgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmdlXG5cblxuey18IEZpbmQgdGhlIHNtYWxsZXIgb2YgdHdvIGNvbXBhcmFibGVzLlxuXG4gICAgbWluIDQyIDEyMzQ1Njc4ID09IDQyXG5cbiAgICBtaW4gXCJhYmNcIiBcInh5elwiID09IFwiYWJjXCJcblxuLX1cbm1pbiA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlXG5taW4geCB5ID1cbiAgICBpZiBsdCB4IHkgdGhlblxuICAgICAgICB4XG5cbiAgICBlbHNlXG4gICAgICAgIHlcblxuXG57LXwgRmluZCB0aGUgbGFyZ2VyIG9mIHR3byBjb21wYXJhYmxlcy5cblxuICAgIG1heCA0MiAxMjM0NTY3OCA9PSAxMjM0NTY3OFxuXG4gICAgbWF4IFwiYWJjXCIgXCJ4eXpcIiA9PSBcInh5elwiXG5cbi19XG5tYXggOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZVxubWF4IHggeSA9XG4gICAgaWYgZ3QgeCB5IHRoZW5cbiAgICAgICAgeFxuXG4gICAgZWxzZVxuICAgICAgICB5XG5cblxuey18IENsYW1wcyBhIG51bWJlciB3aXRoaW4gYSBnaXZlbiByYW5nZS4gV2l0aCB0aGUgZXhwcmVzc2lvblxuYGNsYW1wIDEwMCAyMDAgeGAgdGhlIHJlc3VsdHMgYXJlIGFzIGZvbGxvd3M6XG5cbiAgICAxMDAgICAgIGlmIHggPCAxMDBcbiAgICAgeCAgICAgIGlmIDEwMCA8PSB4IDwgMjAwXG4gICAgMjAwICAgICBpZiAyMDAgPD0geFxuXG4tfVxuY2xhbXAgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmNsYW1wIGxvdyBoaWdoIG51bWJlciA9XG4gICAgaWYgbHQgbnVtYmVyIGxvdyB0aGVuXG4gICAgICAgIGxvd1xuXG4gICAgZWxzZSBpZiBndCBudW1iZXIgaGlnaCB0aGVuXG4gICAgICAgIGhpZ2hcblxuICAgIGVsc2VcbiAgICAgICAgbnVtYmVyXG5cblxuey18IENvbXBhcmUgYW55IHR3byBjb21wYXJhYmxlIHZhbHVlcy4gQ29tcGFyYWJsZSB2YWx1ZXMgaW5jbHVkZSBgU3RyaW5nYCxcbmBDaGFyYCwgYEludGAsIGBGbG9hdGAsIG9yIGFuIGFycmF5IG9yIHR1cGxlIGNvbnRhaW5pbmcgY29tcGFyYWJsZSB2YWx1ZXMuIFRoZXNlXG5hcmUgYWxzbyB0aGUgb25seSB2YWx1ZXMgdGhhdCB3b3JrIGFzIGBEaWN0YCBrZXlzIG9yIGBTZXRgIG1lbWJlcnMuXG5cbiAgICBjb21wYXJlIDMgNCA9PSBMVFxuXG4gICAgY29tcGFyZSA0IDQgPT0gRVFcblxuICAgIGNvbXBhcmUgNSA0ID09IEdUXG5cbi19XG5jb21wYXJlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IE9yZGVyXG5jb21wYXJlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5jb21wYXJlXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHJlbGF0aXZlIG9yZGVyaW5nIG9mIHR3byB0aGluZ3MuXG5UaGUgcmVsYXRpb25zIGFyZSBsZXNzIHRoYW4sIGVxdWFsIHRvLCBhbmQgZ3JlYXRlciB0aGFuLlxuLX1cbnR5cGUgT3JkZXJcbiAgICA9IExUXG4gICAgfCBFUVxuICAgIHwgR1RcblxuXG5cbi0tIEJPT0xFQU5TXG5cblxuey18IEEg4oCcQm9vbGVhbuKAnSB2YWx1ZS4gSXQgY2FuIGVpdGhlciBiZSBgVHJ1ZWAgb3IgYEZhbHNlYC5cblxuKipOb3RlOioqIFByb2dyYW1tZXJzIGNvbWluZyBmcm9tIEphdmFTY3JpcHQsIEphdmEsIGV0Yy4gdGVuZCB0byByZWFjaCBmb3JcbmJvb2xlYW4gdmFsdWVzIHdheSB0b28gb2Z0ZW4gaW4gR3Jlbi4gVXNpbmcgYSBbdW5pb24gdHlwZV1bdXRdIGlzIG9mdGVuIGNsZWFyZXJcbmFuZCBtb3JlIHJlbGlhYmxlLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBmcm9tIEplcmVteSBbaGVyZV1bamZdIG9yXG5mcm9tIFJpY2hhcmQgW2hlcmVdW3J0XS5cblxuW3V0XTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3R5cGVzL3VuaW9uX3R5cGVzLmh0bWxcbltqZl06IGh0dHBzOi8veW91dHUuYmUvNlRES0hHdEF4ZWc/dD0xbTI1c1xuW3J0XTogaHR0cHM6Ly95b3V0dS5iZS9JY2dtU1JKSHVfOD90PTFtMTRzXG5cbi19XG50eXBlIEJvb2xcbiAgICA9IFRydWVcbiAgICB8IEZhbHNlXG5cblxuey18IE5lZ2F0ZSBhIGJvb2xlYW4gdmFsdWUuXG5cbiAgICBub3QgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgbm90IEZhbHNlID09IFRydWVcblxuLX1cbm5vdCA6IEJvb2wgLT4gQm9vbFxubm90ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mubm90XG5cblxuey18IFRoZSBsb2dpY2FsIEFORCBvcGVyYXRvci4gYFRydWVgIGlmIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlICYmIFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSAmJiBGYWxzZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgRmFsc2UgPT0gRmFsc2VcblxuKipOb3RlOioqIFdoZW4gdXNlZCBpbiB0aGUgaW5maXggcG9zaXRpb24sIGxpa2UgYChsZWZ0ICYmIHJpZ2h0KWAsIHRoZSBvcGVyYXRvclxuc2hvcnQtY2lyY3VpdHMuIFRoaXMgbWVhbnMgaWYgYGxlZnRgIGlzIGBGYWxzZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgRmFsc2VgIG92ZXJhbGwuXG5cbi19XG5hbmQgOiBCb29sIC0+IEJvb2wgLT4gQm9vbFxuYW5kID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuYW5kXG5cblxuey18IFRoZSBsb2dpY2FsIE9SIG9wZXJhdG9yLiBgVHJ1ZWAgaWYgb25lIG9yIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlIHx8IFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSB8fCBGYWxzZSA9PSBUcnVlXG5cbiAgICBGYWxzZSB8fCBUcnVlID09IFRydWVcblxuICAgIEZhbHNlIHx8IEZhbHNlID09IEZhbHNlXG5cbioqTm90ZToqKiBXaGVuIHVzZWQgaW4gdGhlIGluZml4IHBvc2l0aW9uLCBsaWtlIGAobGVmdCB8fCByaWdodClgLCB0aGUgb3BlcmF0b3JcbnNob3J0LWNpcmN1aXRzLiBUaGlzIG1lYW5zIGlmIGBsZWZ0YCBpcyBgVHJ1ZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgVHJ1ZWAgb3ZlcmFsbC5cblxuLX1cbm9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbm9yID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mub3JcblxuXG57LXwgVGhlIGV4Y2x1c2l2ZS1vciBvcGVyYXRvci4gYFRydWVgIGlmIGV4YWN0bHkgb25lIGlucHV0IGlzIGBUcnVlYC5cblxuICAgIHhvciBUcnVlIFRydWUgPT0gRmFsc2VcblxuICAgIHhvciBUcnVlIEZhbHNlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBUcnVlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBGYWxzZSA9PSBGYWxzZVxuXG4tfVxueG9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbnhvciA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnhvclxuXG5cblxuLS0gQVBQRU5EXG5cblxuey18IFB1dCB0d28gYXBwZW5kYWJsZSB0aGluZ3MgdG9nZXRoZXIuIFRoaXMgaW5jbHVkZXMgc3RyaW5ncyBhbmQgYXJyYXlzLlxuXG4gICAgXCJoZWxsb1wiICsrIFwid29ybGRcIiA9PSBcImhlbGxvd29ybGRcIlxuXG4gICAgWyAxLCAxLCAyIF0gKysgWyAzLCA1LCA4IF0gPT0gWyAxLCAxLCAyLCAzLCA1LCA4IF1cblxuLX1cbmFwcGVuZCA6IGFwcGVuZGFibGUgLT4gYXBwZW5kYWJsZSAtPiBhcHBlbmRhYmxlXG5hcHBlbmQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmFwcGVuZFxuXG5cblxuLS0gQ1JBWlkgRkxPQVRTXG5cblxuey18IERldGVybWluZSB3aGV0aGVyIGEgZmxvYXQgaXMgYW4gdW5kZWZpbmVkIG9yIHVucmVwcmVzZW50YWJsZSBudW1iZXIuXG5OYU4gc3RhbmRzIGZvciBfbm90IGEgbnVtYmVyXyBhbmQgaXQgaXMgW2Egc3RhbmRhcmRpemVkIHBhcnQgb2YgZmxvYXRpbmcgcG9pbnRcbm51bWJlcnNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05hTikuXG5cbiAgICBpc05hTiAoMCAvIDApID09IFRydWVcblxuICAgIGlzTmFOIChzcXJ0IC0xKSA9PSBUcnVlXG5cbiAgICBpc05hTiAoMSAvIDApID09IEZhbHNlIC0tIGluZmluaXR5IGlzIGEgbnVtYmVyXG5cbiAgICBpc05hTiAxID09IEZhbHNlXG5cbi19XG5pc05hTiA6IEZsb2F0IC0+IEJvb2xcbmlzTmFOID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuaXNOYU5cblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgYSBmbG9hdCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbmZpbml0eS5cblxuICAgIGlzSW5maW5pdGUgKDAgLyAwKSA9PSBGYWxzZVxuXG4gICAgaXNJbmZpbml0ZSAoc3FydCAtMSkgPT0gRmFsc2VcblxuICAgIGlzSW5maW5pdGUgKDEgLyAwKSA9PSBUcnVlXG5cbiAgICBpc0luZmluaXRlIDEgPT0gRmFsc2VcblxuTm90aWNlIHRoYXQgTmFOIGlzIG5vdCBpbmZpbml0ZSEgRm9yIGZsb2F0IGBuYCB0byBiZSBmaW5pdGUgaW1wbGllcyB0aGF0XG5gbm90IChpc0luZmluaXRlIG4gfHwgaXNOYU4gbilgIGV2YWx1YXRlcyB0byBgVHJ1ZWAuXG5cbi19XG5pc0luZmluaXRlIDogRmxvYXQgLT4gQm9vbFxuaXNJbmZpbml0ZSA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmlzSW5maW5pdGVcblxuXG5cbi0tIEZVTkNUSU9OIEhFTFBFUlNcblxuXG57LXwgRnVuY3Rpb24gY29tcG9zaXRpb24sIHBhc3NpbmcgcmVzdWx0cyBhbG9uZyBpbiB0aGUgc3VnZ2VzdGVkIGRpcmVjdGlvbi4gRm9yXG5leGFtcGxlLCB0aGUgZm9sbG93aW5nIGNvZGUgY2hlY2tzIGlmIHRoZSByZXN1bHQgb2Ygcm91bmRpbmcgYSBmbG9hdCBpcyBvZGQ6XG5cbiAgICBub3QgPDwgaXNFdmVuIDw8IHJvdW5kXG5cbllvdSBjYW4gdGhpbmsgb2YgdGhpcyBvcGVyYXRvciBhcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmc6XG5cbiAgICAoZyA8PCBmKSA9PSAoXFx4IC0+IGcgKGYgeCkpXG5cblNvIG91ciBleGFtcGxlIGV4cGFuZHMgb3V0IHRvIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBcXG4gLT4gbm90IChpc0V2ZW4gKHJvdW5kIG4pKVxuXG4tfVxuY29tcG9zZUwgOiAoYiAtPiBjKSAtPiAoYSAtPiBiKSAtPiAoYSAtPiBjKVxuY29tcG9zZUwgZyBmID1cbiAgICBcXHggLT4gZyAoZiB4KVxuXG5cbnstfCBGdW5jdGlvbiBjb21wb3NpdGlvbiwgcGFzc2luZyByZXN1bHRzIGFsb25nIGluIHRoZSBzdWdnZXN0ZWQgZGlyZWN0aW9uLiBGb3JcbmV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgY29kZSBjaGVja3MgaWYgdGhlIHJlc3VsdCBvZiByb3VuZGluZyBhIGZsb2F0IGlzIG9kZDpcblxuICAgIHJvdW5kID4+IGlzRXZlbiA+PiBub3RcblxuLX1cbmNvbXBvc2VSIDogKGEgLT4gYikgLT4gKGIgLT4gYykgLT4gKGEgLT4gYylcbmNvbXBvc2VSIGYgZyA9XG4gICAgXFx4IC0+IGcgKGYgeClcblxuXG57LXwgU2F5aW5nIGB4IHw+IGZgIGlzIGV4YWN0bHkgdGhlIHNhbWUgYXMgYGYgeGAuXG5cbkl0IGlzIGNhbGxlZCB0aGUg4oCccGlwZeKAnSBvcGVyYXRvciBiZWNhdXNlIGl0IGxldHMgeW91IHdyaXRlIOKAnHBpcGVsaW5lZOKAnSBjb2RlLlxuRm9yIGV4YW1wbGUsIHNheSB3ZSBoYXZlIGEgYHNhbml0aXplYCBmdW5jdGlvbiBmb3IgdHVybmluZyB1c2VyIGlucHV0IGludG9cbmludGVnZXJzOlxuXG4gICAgLS0gQkVGT1JFXG4gICAgc2FuaXRpemUgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgc2FuaXRpemUgaW5wdXQgPVxuICAgICAgICBTdHJpbmcudG9JbnQgKFN0cmluZy50cmltIGlucHV0KVxuXG5XZSBjYW4gcmV3cml0ZSBpdCBsaWtlIHRoaXM6XG5cbiAgICAtLSBBRlRFUlxuICAgIHNhbml0aXplIDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIHNhbml0aXplIGlucHV0ID1cbiAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIHw+IFN0cmluZy50cmltXG4gICAgICAgICAgICB8PiBTdHJpbmcudG9JbnRcblxuVG90YWxseSBlcXVpdmFsZW50ISBJIHJlY29tbWVuZCB0cnlpbmcgdG8gcmV3cml0ZSBjb2RlIHRoYXQgdXNlcyBgeCB8PiBmYFxuaW50byBjb2RlIGxpa2UgYGYgeGAgdW50aWwgdGhlcmUgYXJlIG5vIHBpcGVzIGxlZnQuIFRoYXQgY2FuIGhlbHAgeW91IGJ1aWxkXG55b3VyIGludHVpdGlvbi5cblxuKipOb3RlOioqIFRoaXMgY2FuIGJlIG92ZXJ1c2VkISBJIHRoaW5rIGZvbGtzIGZpbmQgaXQgcXVpdGUgbmVhdCwgYnV0IHdoZW4geW91XG5oYXZlIHRocmVlIG9yIGZvdXIgc3RlcHMsIHRoZSBjb2RlIG9mdGVuIGdldHMgY2xlYXJlciBpZiB5b3UgYnJlYWsgb3V0IGFcbnRvcC1sZXZlbCBoZWxwZXIgZnVuY3Rpb24uIE5vdyB0aGUgdHJhbnNmb3JtYXRpb24gaGFzIGEgbmFtZS4gVGhlIGFyZ3VtZW50cyBhcmVcbm5hbWVkLiBJdCBoYXMgYSB0eXBlIGFubm90YXRpb24uIEl0IGlzIG11Y2ggbW9yZSBzZWxmLWRvY3VtZW50aW5nIHRoYXQgd2F5IVxuVGVzdGluZyB0aGUgbG9naWMgZ2V0cyBlYXNpZXIgdG9vLiBOaWNlIHNpZGUgYmVuZWZpdCFcblxuLX1cbmFwUiA6IGEgLT4gKGEgLT4gYikgLT4gYlxuYXBSIHggZiA9XG4gICAgZiB4XG5cblxuey18IFNheWluZyBgZiA8fCB4YCBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGBmIHhgLlxuXG5JdCBjYW4gaGVscCB5b3UgYXZvaWQgcGFyZW50aGVzZXMsIHdoaWNoIGNhbiBiZSBuaWNlIHNvbWV0aW1lcy4gTWF5YmUgeW91IHdhbnRcbnRvIGFwcGx5IGEgZnVuY3Rpb24gdG8gYSBgY2FzZWAgZXhwcmVzc2lvbj8gVGhhdCBzb3J0IG9mIHRoaW5nLlxuXG4tfVxuYXBMIDogKGEgLT4gYikgLT4gYSAtPiBiXG5hcEwgZiB4ID1cbiAgICBmIHhcblxuXG57LXwgR2l2ZW4gYSB2YWx1ZSwgcmV0dXJucyBleGFjdGx5IHRoZSBzYW1lIHZhbHVlLiBUaGlzIGlzIGNhbGxlZFxuW3RoZSBpZGVudGl0eSBmdW5jdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSWRlbnRpdHlfZnVuY3Rpb24pLlxuLX1cbmlkZW50aXR5IDogYSAtPiBhXG5pZGVudGl0eSB4ID1cbiAgICB4XG5cblxuey18IEEgdmFsdWUgdGhhdCBjYW4gbmV2ZXIgaGFwcGVuISBGb3IgY29udGV4dDpcblxuICAtIFRoZSBib29sZWFuIHR5cGUgYEJvb2xgIGhhcyB0d28gdmFsdWVzOiBgVHJ1ZWAgYW5kIGBGYWxzZWBcbiAgLSBUaGUgdW5pdCB0eXBlIGAoKWAgaGFzIG9uZSB2YWx1ZTogYCgpYFxuICAtIFRoZSBuZXZlciB0eXBlIGBOZXZlcmAgaGFzIG5vIHZhbHVlcyFcblxuWW91IG1heSBzZWUgaXQgaW4gdGhlIHdpbGQgaW4gYEh0bWwgTmV2ZXJgIHdoaWNoIG1lYW5zIHRoaXMgSFRNTCB3aWxsIG5ldmVyXG5wcm9kdWNlIGFueSBtZXNzYWdlcy4gWW91IHdvdWxkIG5lZWQgdG8gd3JpdGUgYW4gZXZlbnQgaGFuZGxlciBsaWtlXG5gb25DbGljayA/Pz8gOiBBdHRyaWJ1dGUgTmV2ZXJgIGJ1dCBob3cgY2FuIHdlIGZpbGwgaW4gdGhlIHF1ZXN0aW9uIG1hcmtzPyFcblNvIHRoZXJlIGNhbm5vdCBiZSBhbnkgZXZlbnQgaGFuZGxlcnMgb24gdGhhdCBIVE1MLlxuXG5Zb3UgbWF5IGFsc28gc2VlIHRoaXMgdXNlZCB3aXRoIHRhc2tzIHRoYXQgbmV2ZXIgZmFpbCwgbGlrZSBgVGFzayBOZXZlciAoKWAuXG5cblRoZSBgTmV2ZXJgIHR5cGUgaXMgdXNlZnVsIGZvciByZXN0cmljdGluZyBfYXJndW1lbnRzXyB0byBhIGZ1bmN0aW9uLiBNYXliZSBteVxuQVBJIGNhbiBvbmx5IGFjY2VwdCBIVE1MIHdpdGhvdXQgZXZlbnQgaGFuZGxlcnMsIHNvIEkgcmVxdWlyZSBgSHRtbCBOZXZlcmAgYW5kXG51c2VycyBjYW4gZ2l2ZSBgSHRtbCBtc2dgIGFuZCBldmVyeXRoaW5nIHdpbGwgZ28gZmluZS4gR2VuZXJhbGx5IHNwZWFraW5nLCB5b3VcbmRvIG5vdCB3YW50IGBOZXZlcmAgaW4geW91ciByZXR1cm4gdHlwZXMgdGhvdWdoLlxuXG4tfVxudHlwZSBOZXZlclxuICAgID0gSnVzdE9uZU1vcmUgTmV2ZXJcblxuXG57LXwgQSBmdW5jdGlvbiB0aGF0IGNhbiBuZXZlciBiZSBjYWxsZWQuIFNlZW1zIGV4dHJlbWVseSBwb2ludGxlc3MsIGJ1dCBpdFxuX2Nhbl8gY29tZSBpbiBoYW5keS4gSW1hZ2luZSB5b3UgaGF2ZSBzb21lIEhUTUwgdGhhdCBzaG91bGQgbmV2ZXIgcHJvZHVjZSBhbnlcbm1lc3NhZ2VzLiBBbmQgc2F5IHlvdSB3YW50IHRvIHVzZSBpdCBpbiBzb21lIG90aGVyIEhUTUwgdGhhdCBfZG9lc18gcHJvZHVjZVxubWVzc2FnZXMuIFlvdSBjb3VsZCBzYXk6XG5cbiAgICBpbXBvcnQgSHRtbCBleHBvc2luZyAoLi4pXG5cbiAgICBlbWJlZEh0bWwgOiBIdG1sIE5ldmVyIC0+IEh0bWwgbXNnXG4gICAgZW1iZWRIdG1sIHN0YXRpY1N0dWZmID1cbiAgICAgICAgZGl2IFtdXG4gICAgICAgICAgICBbIHRleHQgXCJoZWxsb1wiXG4gICAgICAgICAgICAsIEh0bWwubWFwIG5ldmVyIHN0YXRpY1N0dWZmXG4gICAgICAgICAgICBdXG5cblNvIHRoZSBgbmV2ZXJgIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSB0ZWxsaW5nIHRoZSB0eXBlIHN5c3RlbSwgbWFrZSBzdXJlIG5vIG9uZVxuZXZlciBjYWxscyBtZSFcblxuLX1cbm5ldmVyIDogTmV2ZXIgLT4gYVxubmV2ZXIgKEp1c3RPbmVNb3JlIG52cikgPVxuICAgIG5ldmVyIG52clxuIiwKICAgICAgICAibW9kdWxlIERhdGFUYWJsZSBleHBvc2luZ1xuICAgICggdmlld1xuICAgICwgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuICAgICwgU3RhdGUsIG5ld1xuICAgICwgU29ydERpcmVjdGlvbiguLiksIGluaXRpYWxTb3J0XG4gICAgLCBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcbiAgICAsIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG4gICAgLCBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuICAgICwgcGFnZUxlbmd0aENob29zZXJcbiAgICAsIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG4gICAgLCBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuICAgICwgQ29uZmlnLCBjdXN0b21Db25maWcsIEN1c3RvbWl6YXRpb25zLCBIdG1sRGV0YWlsc1xuICAgICwgZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgLCBnZXRTb3J0ZWREYXRhLCBnZXRQYWdpbmF0ZWREYXRhXG4gICAgKVxuXG57LXwgVGhpcyBsaWJyYXJ5IGhlbHBzIHlvdSBjcmVhdGUgc29ydGFibGUgdGFibGVzIHdpdGggcGFnaW5hdGlvbiBhbmQgZmlsdGVyIG9wdGlvbnMuXG5UaGUgY3J1Y2lhbCBmZWF0dXJlIGlzIHRoYXQgaXQgbGV0cyB5b3Ugb3duIHlvdXIgZGF0YSBzZXBhcmF0ZWx5IGFuZCBrZWVwIGl0IGluXG53aGF0ZXZlciBmb3JtYXQgaXMgYmVzdCBmb3IgeW91LiBUaGlzIHdheSB5b3UgYXJlIGZyZWUgdG8gY2hhbmdlIHlvdXIgZGF0YSB3aXRob3V0XG53b3JyeWluZyBhYm91dCB0aGUgdGFibGUgJmxkcXVvO2dldHRpbmcgb3V0IG9mIHN5bmMmcmRxdW87IHdpdGggdGhlIGRhdGEuIEhhdmluZyBhIHNpbmdsZVxuc291cmNlIG9mIHRydXRoIGlzIHByZXR0eSBncmVhdCFcblxuSSByZWNvbW1lbmQgY2hlY2tpbmcgb3V0IHRoZSBbZXhhbXBsZXNdIHRvIGdldCBhIGZlZWwgZm9yIGhvdyBpdCB3b3Jrcy5cblxuW2V4YW1wbGVzXTogaHR0cHM6Ly9naXRodWIuY29tL2xpbmRlbmxpb24vZ3Jlbi1kYXRhdGFibGVzL3RyZWUvbWFtYS9leGFtcGxlc1xuXG5cbiMjIFZpZXdcblxuQGRvY3Mgdmlld1xuXG5cbiMjIENvbmZpZ3VyYXRpb25cblxuQGRvY3MgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuXG5cbiMjIFN0YXRlXG5cbkBkb2NzIFN0YXRlLCBuZXdcblxuXG4jIyBTb3J0IG9yZGVyXG5cbkBkb2NzIFNvcnREaXJlY3Rpb24sIGluaXRpYWxTb3J0XG5AZG9jcyBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcblxuXG4jIyBQYWdpbmF0aW9uXG5cbkBkb2NzIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG5AZG9jcyBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuQGRvY3MgcGFnZUxlbmd0aENob29zZXJcblxuIyMgQ3JhenkgQ3VzdG9taXphdGlvblxuXG5JZiB5b3UgYXJlIG5ldyB0byB0aGlzIGxpYnJhcnksIHlvdSBjYW4gcHJvYmFibHkgc3RvcCByZWFkaW5nIGhlcmUuIEFmdGVyIHRoaXNcbnBvaW50IHRoZXJlIGFyZSBhIGJ1bmNoIG9mIHdheXMgdG8gY3VzdG9taXplIHlvdXIgdGFibGUgZnVydGhlci5cblxuIyMjIEN1c3RvbSBDb2x1bW5zXG5cbkBkb2NzIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG5AZG9jcyBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuXG5cbiMjIyBDdXN0b20gQ29uZmlnXG5cbkBkb2NzIENvbmZpZywgY3VzdG9tQ29uZmlnLCBDdXN0b21pemF0aW9ucywgSHRtbERldGFpbHNcbkBkb2NzIGRlZmF1bHRDdXN0b21pemF0aW9uc1xuXG4jIyMgSW50ZXJtZWRpYXRlIERhdGEgQWNjZXNzXG5cbkBkb2NzIGdldFNvcnRlZERhdGEsIGdldFBhZ2luYXRlZERhdGFcblxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgYXMgQVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcy5BcmlhIGFzIEFyaWFcbmltcG9ydCBIdG1sLkV2ZW50cyBhcyBFXG5pbXBvcnQgSHRtbC5LZXllZCBhcyBLZXllZFxuaW1wb3J0IEh0bWwuTGF6eSBhcyBMYXp5XG5pbXBvcnQgSnNvbi5EZWNvZGVcbmltcG9ydCBNYXRoXG5cblxuXG4tLSBTVEFURVxuXG5cbnstfCBUcmFja3Mgd2hpY2ggY29sdW1uIHRvIHNvcnQgYnksIGluIHdoaWNoIGRpcmVjdGlvbiwgdGhlIHBhZ2Ugc2l6ZSBhbmQgdGhlXG5wb3NpdGlvbiBvZiB0aGUgcm93IGN1cnNvciwgYXMgd2VsbCBhcyB0b3RhbCBudW1iZXIgb2Ygcm93cyBvZiB0aGUgd2hvbGVcbihwb3NzaWJseSByZW1vdGUpIHRhYmxlLiBUaGlzIHR5cGUgaXMgb3BhcXVlLlxuLX1cbnR5cGUgU3RhdGVcbiAgICA9IFN0YXRlXG4gICAgICAgIHsgc29ydENvbHVtbnMgOiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG4gICAgICAgICwgcGFnZVNpemUgOiBJbnRcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA6IFN0cmluZ1xuICAgICAgICAsIHBhZ2luYXRpb24gOiBQYWdpbmF0aW9uU3R5bGVcbiAgICAgICAgLCB0YWJsZUlkIDogU3RyaW5nXG4gICAgICAgIH1cblxuXG57LXwgU2ltcGxlIGJvb2xlYW4gdHlwZSBmb3IgY29sdW1uIHNvcnQgZGlyZWN0aW9uLiBUaGlzIHR5cGUgaXMgbm90IG9wYXF1ZSBhbmRcbm1lYW50IHRvIGJlIHVzZWQgYnkgb3RoZXIgbW9kdWxlcyB3aGVuIGNvbnN0cnVjdGluZyBUYWJsZSBTdGF0ZVxuLX1cbnR5cGUgU29ydERpcmVjdGlvblxuICAgID0gQXNjXG4gICAgfCBEZXNjXG5cblxuc29ydERpcmVjdGlvblRvU3RyaW5nIDogU29ydERpcmVjdGlvbiAtPiBTdHJpbmdcbnNvcnREaXJlY3Rpb25Ub1N0cmluZyBzb3J0RGlyZWN0aW9uID1cbiAgICB3aGVuIHNvcnREaXJlY3Rpb24gaXNcbiAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICBcIkFzY1wiXG5cbiAgICAgICAgRGVzYyAtPlxuICAgICAgICAgICAgXCJEZXNjXCJcblxuXG57LXwgQ3JlYXRlIGFuIGluaXRpYWwgc3RhdGUgZm9yIGEgdGFibGUgd2l0aG91dCBwYWdpbmF0aW9uLiBCeSBwcm92aWRpbmcgYSBjb2x1bW5cbm5hbWUsIHlvdSBkZXRlcm1pbmUgd2hpY2ggY29sdW1uIHNob3VsZCBiZSB1c2VkIGZvciBzb3J0aW5nIGJ5IGRlZmF1bHQuIFRoaXMgaXNcbm1lYW50IHRvIGJlIHVzZWQgZm9yIHNpbXBsZSB0YWJsZXMuIE1vcmVcblNvIGlmXG55b3Ugd2FudCB5b3VyIHRhYmxlIG9mIHlhY2h0cyB0byBiZSBzb3J0ZWQgYnkgbGVuZ3RoIGJ5IGRlZmF1bHQsIHlvdSBtaWdodCBzYXk6XG5cbmltcG9ydCBUYWJsZVxuXG4gICAgVGFibGUuaW5pdGlhbFNvcnQgXCJMZW5ndGhcIlxuXG4tfVxuaW5pdGlhbFNvcnQgOiBTdHJpbmcgLT4gU3RhdGVcbmluaXRpYWxTb3J0IGhlYWRlciA9XG4gICAgU3RhdGVcbiAgICAgICAgeyBzb3J0Q29sdW1ucyA9IFsgeyBzb3J0Q29sdW1uTmFtZSA9IGhlYWRlciwgc29ydERpcmVjdGlvbiA9IEFzYyB9IF1cbiAgICAgICAgLCBwYWdlU2l6ZSA9IDBcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA9IFwiXCJcbiAgICAgICAgLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uXG4gICAgICAgICwgdGFibGVJZCA9IFwic29ydGFibGVUYWJsZVwiXG4gICAgICAgIH1cblxuXG57LXwgQ3JlYXRlIGEgZGVmYXVsdCB0YWJsZSBzdGF0ZS4gT25seSB0aGUgaWQgb2YgdGhlIHRhYmxlIGlzIHN1cHBsaWVkLiBBbGwgb3RoZXIgc3RhdGUgaXMgaW5pdGlhbGlzZWQgd2l0aCBkZWZhdWx0IHZhbHVlcy4gVGhpcyBzdGF0ZSBjYW4gdGhlbiBiZSBzZXQgd2l0aCB1cGRhdGUgZnVuY3Rpb25zLiBTbyBpZiB5b3Ugd2FudGVkIGEgdGFibGUgb2YgY291bnRyaWVzIHRoYXQgaXMgYnkgZGVmYXVsdCBzb3J0ZWQgYnkgcG9wdWxhdGlvbiBjb3VudCBpbiBkZXNjZW5kaW5nIG9yZGVyIHlvdSBtaWdodCB3cml0ZVxuXG5pbXBvcnQgVGFibGVcblxuICAgIFRhYmxlLm5ldyBcIkNvdW50cmllc1wiXG4gICAgICAgIHw+IERhdGFUYWJsZS51cGRhdGVTb3J0U3RhdGUgXCJQb3B1bGF0aW9uXCIgRGF0YVRhYmxlLkRlc2NcblxuLX1cbm5ldyA6IFN0cmluZyAtPiBTdGF0ZVxubmV3IGlkID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gW10sIHBhZ2VTaXplID0gMCwgYWN0aXZlUm93SWQgPSBcIlwiLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uLCB0YWJsZUlkID0gaWQgfVxuXG5cbnstfCBJbnNwZWN0IHRoZSBjdXJyZW50IHRhYmxlIHN0YXRlLiBXaGljaCBjb2x1bW4gaXMgYmVpbmcgc29ydGVkIGJ5LCBhbmRcbndoZXRoZXIgdGhlIHNvcnQgb3JkZXIgaXMgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuIFRoaXMgY291bGQgYmUgdXNlZnVsIGZvclxuc3RvcmluZyB0aGUgc29ydCBzdGF0ZSBpbiBhIFVSTCBvciBzb21ld2hlcmUgZWxzZSBvdXRzaWRlIG9mIEVsbS5cbi19XG5nZXRTb3J0U3RhdGUgOiBTdGF0ZSAtPiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG5nZXRTb3J0U3RhdGUgKFN0YXRlIHsgc29ydENvbHVtbnMgfSkgPVxuICAgIHNvcnRDb2x1bW5zXG5cblxuey18IEluc3BlY3QgdGhlIGN1cnJlbnQgdGFibGUgc3RhdGUuIFdoYXQgaXMgdGhlIGN1cnJlbnQgcGFnZSBzaXplIGZvciB0aGVcbnBhZ2luYXRpb24uIFNob3dpbmcgXCJhbGwgcm93c1wiIHJldHVybnMgMC4gVGhpcyBjb3VsZCBiZSB1c2VmdWwgZm9yIHN0b3JpbmdcbnRoZSBzb3J0IHN0YXRlIGluIGEgVVJMIG9yIHNvbWV3aGVyZSBlbHNlIG91dHNpZGUgb2YgRWxtLlxuLX1cbmdldFBhZ2VTaXplIDogU3RhdGUgLT4gSW50XG5nZXRQYWdlU2l6ZSAoU3RhdGUgeyBwYWdlU2l6ZSB9KSA9XG4gICAgcGFnZVNpemVcblxuXG57LXwgSW5zcGVjdCB0aGUgY3VycmVudCB0YWJsZSBzdGF0ZS4gV2hhdCBpcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcm93XG5jdXJzb3IuIFRvZ2V0aGVyIHdpdGggdGhlIGN1cnJlbnQgcGFnZSBzaXplIHRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0YWJsZSBwYWdlXG5pcyBzaG93bi5cbi19XG5nZXRBY3RpdmVSb3dJZCA6IFN0YXRlIC0+IFN0cmluZ1xuZ2V0QWN0aXZlUm93SWQgKFN0YXRlIHsgYWN0aXZlUm93SWQgfSkgPVxuICAgIGFjdGl2ZVJvd0lkXG5cblxuey18IC19XG51cGRhdGVTb3J0U3RhdGUgOiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlU29ydFN0YXRlIG5ld1NvcnRDb2x1bW4gc29ydERpcmVjdGlvbiAoU3RhdGUgeyBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF0sIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuey18IC19XG51cGRhdGVNdWx0aVNvcnRTdGF0ZSA6IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVNdWx0aVNvcnRTdGF0ZSBuZXdTb3J0Q29sdW1uIHNvcnREaXJlY3Rpb24gKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiwgdGFibGVJZCB9KSA9XG4gICAgbGV0XG4gICAgICAgIG5ld1NvcnRTdGF0ZSA9XG4gICAgICAgICAgICBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF1cbiAgICAgICAgICAgICAgICArKyBBcnJheS5rZWVwSWYgKFxceyBzb3J0Q29sdW1uTmFtZSB9IC0+IHNvcnRDb2x1bW5OYW1lIC89IG5ld1NvcnRDb2x1bW4pIHNvcnRDb2x1bW5zXG4gICAgaW5cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gbmV3U29ydFN0YXRlLCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfVxuXG5cbnstfCAtfVxudXBkYXRlUGFnZVNpemUgOiBJbnQgLT4gU3RhdGUgLT4gU3RhdGVcbnVwZGF0ZVBhZ2VTaXplIG1pbmltdW1OZXdQYWdlU2l6ZSAoU3RhdGUgeyBzb3J0Q29sdW1ucywgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIGxldFxuICAgICAgICBuZXh0SGlnaGVySW5MaXN0IDogSW50IC0+IEFycmF5IEludCAtPiBJbnRcbiAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBpbnB1dCBsaXN0ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgPHwgQXJyYXkua2VlcElmIChcXHggLT4geCA+PSBpbnB1dCkgPHwgQXJyYXkuc29ydCBsaXN0IGlzXG4gICAgICAgICAgICAgICAgSnVzdCB4IC0+XG4gICAgICAgICAgICAgICAgICAgIC5maXJzdCB4XG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcblxuICAgICAgICBuZXdQYWdlU2l6ZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBsaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIG5leHRIaWdoZXJJbkxpc3QgbWluaW11bU5ld1BhZ2VTaXplIGxpc3RcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIGxpc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBtaW5pbXVtTmV3UGFnZVNpemUgbGlzdFxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICBpblxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBuZXdQYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG57LXwgLX1cbnVwZGF0ZUFjdGl2ZVJvd0lkIDogU3RyaW5nIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVBY3RpdmVSb3dJZCBuZXdBY3RpdmVSb3dJZCAoU3RhdGUgeyBzb3J0Q29sdW1ucywgcGFnZVNpemUsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBuZXdBY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG5cbi0tIENPTkZJR1xuXG5cbnstfCBDb25maWd1cmF0aW9uIGZvciB5b3VyIHRhYmxlLCBkZXNjcmliaW5nIHlvdXIgY29sdW1ucy5cblxuKipOb3RlOioqIFlvdXIgYENvbmZpZ2Agc2hvdWxkIF9uZXZlcl8gYmUgaGVsZCBpbiB5b3VyIG1vZGVsLlxuSXQgc2hvdWxkIG9ubHkgYXBwZWFyIGluIGB2aWV3YCBjb2RlLlxuXG4tfVxudHlwZSBDb25maWcgZGF0YSBtc2dcbiAgICA9IENvbmZpZ1xuICAgICAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICAgICAsIHRvTXNnIDogU3RhdGUgLT4gbXNnXG4gICAgICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKVxuICAgICAgICAsIGN1c3RvbWl6YXRpb25zIDogQ3VzdG9taXphdGlvbnMgZGF0YSBtc2dcbiAgICAgICAgfVxuXG5cbnstfCBDcmVhdGUgdGhlIGBDb25maWdgIGZvciB5b3VyIGB2aWV3YCBmdW5jdGlvbi4gRXZlcnl0aGluZyB5b3UgbmVlZCB0b1xucmVuZGVyIHlvdXIgY29sdW1ucyBlZmZpY2llbnRseSBhbmQgaGFuZGxlIHNlbGVjdGlvbiBvZiBjb2x1bW5zLlxuXG5TYXkgd2UgaGF2ZSBhbiBgQXJyYXkgUGVyc29uYCwgd2hlcmUgUGVyc29uIGlzIGEgdHlwZSBhbGlhcyBmb3JcbmB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgb3RoZXI6IEZsb2F0IH1gIHRoYXQgd2Ugd2FudCB0byBzaG93IGFzIGEgdGFibGUuXG5Zb3Ugd2FudCB0byBzaG93IGEgY29sdW1uIGZvciBuYW1lIGFuZCBhZ2UsIGlnbm9yaW5nIHRoZSBvdGhlciB2YWx1ZS4gWW91IHdvdWxkXG50aGVuIGNyZWF0ZSBhIGBDb25maWdgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBEYXRhVGFibGVcblxuICAgIHR5cGUgTXNnID0gTmV3VGFibGVTdGF0ZSBEYXRhVGFibGUuU3RhdGUgfCAuLi5cblxuICAgIGNvbmZpZyA6IERhdGFUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuICAgIGNvbmZpZyA9XG4gICAgICBEYXRhVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBOZXdUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIERhdGFUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgRGF0YVRhYmxlLmludENvbHVtbiBcIkFnZVwiIC5hZ2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5Zb3UgcHJvdmlkZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHlvdXIgdGFibGUgY29uZmlndXJhdGlvbjpcblxuICAtIGB0b0lkYCAmbWRhc2g7IHR1cm5zIGEgYFBlcnNvbmAgaW50byBhIHVuaXF1ZSBJRCBvZiB0eXBlIFN0cmluZy5cbiAgICBUaGlzIGxldHMgdXMgdXNlXG4gICAgW2BIdG1sLktleWVkYF1ba2V5ZWRdIHVuZGVyIHRoZSBob29kIHRvIG1ha2UgcmUtc29ydHMgZmFzdGVyLlxuICAtIGB0b01zZ2AgJm1kYXNoOyB0aGUgbWVzc2FnZSB0aHJvdWdoIHdoaWNoIHRoZSBEYXRhVGFibGUgY2FuIHNlbmRcbiAgICB1cGRhdGVkIGludGVybmFsIHRhYmxlIHN0YXRlcyB0byB5b3VyIGFwcCdzIG1vZGVsLlxuICAtIGBjb2x1bW5zYCAmbWRhc2g7IHNwZWNpZnkgc29tZSBjb2x1bW5zIHRvIHNob3cuXG5cbltrZXllZF06IGh0dHBzOi8vcGFja2FnZXMuZ3Jlbi1sYW5nLm9yZy9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL3ZlcnNpb24vbGF0ZXN0L21vZHVsZS9IdG1sLktleWVkXG5cbi19XG5jb25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMgfSA9XG4gICAgQ29uZmlnXG4gICAgICAgIHsgdG9JZCA9IHRvSWRcbiAgICAgICAgLCB0b01zZyA9IHRvTXNnXG4gICAgICAgICwgY29sdW1ucyA9IEFycmF5Lm1hcCAoXFwoQ29sdW1uIGNEYXRhKSAtPiBjRGF0YSkgY29sdW1uc1xuICAgICAgICAsIGN1c3RvbWl6YXRpb25zID0gZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgSnVzdCBsaWtlIGBjb25maWdgIGJ1dCB5b3UgY2FuIHNwZWNpZnkgYSBidW5jaCBvZiB0YWJsZSBjdXN0b21pemF0aW9ucy5cbi19XG5jdXN0b21Db25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgLCBjdXN0b21pemF0aW9ucyA6IEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY3VzdG9tQ29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMsIGN1c3RvbWl6YXRpb25zIH0gPVxuICAgIENvbmZpZ1xuICAgICAgICB7IHRvSWQgPSB0b0lkXG4gICAgICAgICwgdG9Nc2cgPSB0b01zZ1xuICAgICAgICAsIGNvbHVtbnMgPSBBcnJheS5tYXAgKFxcKENvbHVtbiBjRGF0YSkgLT4gY0RhdGEpIGNvbHVtbnNcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA9IGN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgVGhlcmUgYXJlIHF1aXRlIGEgbG90IG9mIHdheXMgdG8gY3VzdG9taXplIHRoZSBgPHRhYmxlPmAgdGFnLiBZb3UgY2FuIGFkZFxuYSBgPGNhcHRpb24+YCB3aGljaCBjYW4gYmUgc3R5bGVkIHZpYSBDU1MuIFlvdSBjYW4gZG8gY3Jhenkgc3R1ZmYgd2l0aFxuYDx0aGVhZD5gIHRvIGdyb3VwIGNvbHVtbnMgaW4gd2VpcmQgd2F5cy4gWW91IGNhbiBoYXZlIGEgYDx0Zm9vdD5gIHRhZyBmb3JcbnN1bW1hcmllcyBvZiB2YXJpb3VzIGNvbHVtbnMuIEFuZCBtYXliZSB5b3Ugd2FudCB0byBwdXQgYXR0cmlidXRlcyBvbiBgPHRib2R5PmBcbm9yIG9uIHBhcnRpY3VsYXIgcm93cyBpbiB0aGUgYm9keS4gQWxsIHRoZXNlIGN1c3RvbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgdG8geW91LlxuXG4qKk5vdGU6KiogVGhlIGxldmVsIG9mIGNyYXppbmVzcyBwb3NzaWJsZSBpbiBgPHRoZWFkPmAgYW5kIGA8dGZvb3Q+YCBhcmUgc29cbmhpZ2ggdGhhdCBJIGNvdWxkIG5vdCBzZWUgaG93IHRvIHByb3ZpZGUgdGhlIGZ1bGwgZnVuY3Rpb25hbGl0eSBfYW5kXyBtYWtlIGl0XG5pbXBvc3NpYmxlIHRvIGRvIGJhZCBzdHVmZi4gU28ganVzdCBiZSBhd2FyZSBvZiB0aGF0LCBhbmQgc2hhcmUgYW55IHN0b3JpZXNcbnlvdSBoYXZlLiBTdG9yaWVzIG1ha2UgaXQgcG9zc2libGUgdG8gZGVzaWduIGJldHRlciFcblxuLX1cbnR5cGUgYWxpYXMgQ3VzdG9taXphdGlvbnMgZGF0YSBtc2cgPVxuICAgIHsgYmVmb3JlQW5kQWZ0ZXJUYWJsZSA6IHsgYmVmb3JlIDogTWF5YmUgKEh0bWwgbXNnKSwgYWZ0ZXIgOiBNYXliZSAoSHRtbCBtc2cpIH1cbiAgICAsIHRhYmxlQXR0cnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNhcHRpb24gOiBNYXliZSAoSHRtbERldGFpbHMgbXNnKVxuICAgICwgY29sZ3JvdXAgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IE1heWJlIChIdG1sRGV0YWlscyBtc2cpXG4gICAgLCB0aGVhZCA6IEFycmF5IChIZWFkZXJJbmZvIG1zZykgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCB0Ym9keUF0dHJzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCByb3dBdHRycyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIHRmb290IDogTWF5YmUgKEh0bWxEZXRhaWxzIG1zZylcbiAgICB9XG5cblxuey18IFNvbWV0aW1lcyB5b3UgbXVzdCB1c2UgYSBgPHRkPmAgdGFnLCBidXQgdGhlIGF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIGFyZSB1cFxudG8geW91LiBUaGlzIHR5cGUgbGV0cyB5b3Ugc3BlY2lmeSBhbGwgdGhlIGRldGFpbHMgb2YgYW4gSFRNTCBub2RlIGV4Y2VwdCB0aGVcbnRhZyBuYW1lLlxuLX1cbnR5cGUgYWxpYXMgSHRtbERldGFpbHMgbXNnID1cbiAgICB7IGF0dHJpYnV0ZXMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNoaWxkcmVuIDogQXJyYXkgKEh0bWwgbXNnKVxuICAgIH1cblxuXG57LXwgVGhlIGN1c3RvbWl6YXRpb25zIHVzZWQgaW4gYGNvbmZpZ2AgYnkgZGVmYXVsdC5cbi19XG5kZWZhdWx0Q3VzdG9taXphdGlvbnMgOiBDdXN0b21pemF0aW9ucyBkYXRhIG1zZ1xuZGVmYXVsdEN1c3RvbWl6YXRpb25zID1cbiAgICB7IGJlZm9yZUFuZEFmdGVyVGFibGUgPSB7IGJlZm9yZSA9IE5vdGhpbmcsIGFmdGVyID0gTm90aGluZyB9XG4gICAgLCB0YWJsZUF0dHJzID0gWyBBLmNsYXNzIFwiZGF0YVRhYmxlXCIgXVxuICAgICwgY2FwdGlvbiA9IE5vdGhpbmdcbiAgICAsIGNvbGdyb3VwID0gXFxfIC0+IE5vdGhpbmdcbiAgICAsIHRoZWFkID0gZGVmYXVsdFRhYmxlSGVhZGVyXG4gICAgLCB0Ym9keUF0dHJzID0gW11cbiAgICAsIHJvd0F0dHJzID0gc2ltcGxlUm93QXR0cnNcbiAgICAsIHRmb290ID0gTm90aGluZ1xuICAgIH1cblxuXG5kZWZhdWx0VGFibGVIZWFkZXIgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IEh0bWxEZXRhaWxzIG1zZ1xuZGVmYXVsdFRhYmxlSGVhZGVyIGhlYWRlckluZm9zID1cbiAgICBsZXRcbiAgICAgICAgZGVmYXVsdFRIIDogSGVhZGVySW5mbyBtc2cgLT4gSHRtbCBtc2dcbiAgICAgICAgZGVmYXVsdFRIIHsgbmFtZSwgc2VsZWN0ZWQsIHNvcnREaXJlY3Rpb25zLCBjbGlja0FjdGlvbnMgfSA9XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBzb3J0U2VxdWVuY2VOdW1iZXIgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydFJhbmsgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHNvcnRSYW5rID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBIdG1sLnN1cCBbIEEuc3R5bGUgXCJvcGFjaXR5XCIgXCIwLjRcIiBdIFsgSHRtbC50ZXh0IDx8IFN0cmluZy5mcm9tSW50IHNvcnRSYW5rIF0gXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW11cblxuICAgICAgICAgICAgICAgIGNvbHVtblRpdGxlID1cbiAgICAgICAgICAgICAgICAgICAgSHRtbC5zcGFuIFsgQS5jbGFzcyBcImR0LWNvbHVtbi10aXRsZVwiIF0gWyBIdG1sLnRleHQgbmFtZSBdXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5PcmRlciA9XG4gICAgICAgICAgICAgICAgICAgIGlmIEFycmF5Lmxlbmd0aCBzb3J0RGlyZWN0aW9ucyA+IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgSHRtbC5zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBBLmNsYXNzTGlzdCBbIHsgY2xhc3MgPSBcImR0LWNvbHVtbi1vcmRlclwiLCBlbmFibGVkID0gVHJ1ZSB9IF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIEFyaWEubGFiZWwgPHwgXCJDbGljayBoZXJlIHRvIHNvcnQgYnkgdGhpcyBjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQS5hdHRyaWJ1dGUgXCJyb2xlXCIgXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQS50YWJpbmRleCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRTZXF1ZW5jZU51bWJlclxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0bWwudGV4dCBcIlwiXG5cbiAgICAgICAgICAgICAgICBjYW5CZVNvcnRlZCA6IFNvcnREaXJlY3Rpb24gLT4gQm9vbFxuICAgICAgICAgICAgICAgIGNhbkJlU29ydGVkIHNvcnREaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICBBcnJheS5tZW1iZXIgc29ydERpcmVjdGlvbiBzb3J0RGlyZWN0aW9uc1xuXG4gICAgICAgICAgICAgICAgaXNTb3J0ZWQgOiBTb3J0RGlyZWN0aW9uIC0+IEJvb2xcbiAgICAgICAgICAgICAgICBpc1NvcnRlZCB2aWV3ZWRTb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBzZWxlY3RlZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IHNvcnREaXJlY3Rpb24gfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdlZFNvcnREaXJlY3Rpb24gPT0gc29ydERpcmVjdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICAgICAgICAgIGFyaWFTb3J0ID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBzZWxlY3RlZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IHNvcnREaXJlY3Rpb24gfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgQXJpYS5zb3J0IDx8IHNvcnREaXJlY3Rpb25Ub1N0cmluZyBzb3J0RGlyZWN0aW9uIF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG5cbiAgICAgICAgICAgICAgICByb3dBbmRDb2xTcGFuID1cbiAgICAgICAgICAgICAgICAgICAgWyBBLnJvd3NwYW4gMSwgQS5jb2xzcGFuIDEgXVxuXG4gICAgICAgICAgICAgICAgdGhDbGFzc2VzID1cbiAgICAgICAgICAgICAgICAgICAgWyBBLmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgWyB7IGNsYXNzID0gXCJkdC1vcmRlcmFibGUtYXNjXCIsIGVuYWJsZWQgPSBjYW5CZVNvcnRlZCBBc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmFibGUtZGVzY1wiLCBlbmFibGVkID0gY2FuQmVTb3J0ZWQgRGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyaW5nLWFzY1wiLCBlbmFibGVkID0gaXNTb3J0ZWQgQXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJpbmctZGVzY1wiLCBlbmFibGVkID0gaXNTb3J0ZWQgRGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyaW5nLW5vbmVcIiwgZW5hYmxlZCA9IG5vdCAoaXNTb3J0ZWQgQXNjKSAmJiBub3QgKGlzU29ydGVkIERlc2MpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgdGhBdHRyaWJ1dGVzID1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tBY3Rpb25zICsrIGFyaWFTb3J0ICsrIHJvd0FuZENvbFNwYW4gKysgdGhDbGFzc2VzXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgSHRtbC50aCB0aEF0dHJpYnV0ZXMgWyBIdG1sLmRpdiBbIEEuY2xhc3MgXCJkdC1jb2x1bW4taGVhZGVyXCIgXSBbIGNvbHVtblRpdGxlLCBjb2x1bW5PcmRlciBdIF1cbiAgICBpblxuICAgIHsgYXR0cmlidXRlcyA9IFtdLCBjaGlsZHJlbiA9IFsgSHRtbC50ciBbXSA8fCBBcnJheS5tYXAgZGVmYXVsdFRIIGhlYWRlckluZm9zIF0gfVxuXG5cbnNpbXBsZVJvd0F0dHJzIDogKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxuc2ltcGxlUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhID1cbiAgICBsZXRcbiAgICAgICAgaXNfY3VycmVudF9yb3cgPVxuICAgICAgICAgICAgaWYgdG9JZCBkYXRhID09IGdldEFjdGl2ZVJvd0lkIHN0YXRlIHRoZW5cbiAgICAgICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBGYWxzZVxuICAgIGluXG4gICAgaWYgaXNfY3VycmVudF9yb3cgdGhlblxuICAgICAgICBbIEEuc3R5bGUgXCJiYWNrZ3JvdW5kXCIgXCIjQ0VGQUY4XCIgXVxuXG4gICAgZWxzZVxuICAgICAgICBbIEUub25DbGljayA8fCB0b01zZyA8fCB1cGRhdGVBY3RpdmVSb3dJZCAodG9JZCBkYXRhKSBzdGF0ZSBdXG5cblxuXG4tLSBDT0xVTU5TXG5cblxuey18IERlc2NyaWJlcyBob3cgdG8gdHVybiBgZGF0YWAgaW50byBhIGNvbHVtbiBpbiB5b3VyIHRhYmxlLlxuLX1cbnR5cGUgQ29sdW1uIGRhdGEgbXNnXG4gICAgPSBDb2x1bW4gKENvbHVtbkRhdGEgZGF0YSBtc2cpXG5cblxudHlwZSBhbGlhcyBDb2x1bW5EYXRhIGRhdGEgbXNnID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHZpZXdEYXRhIDogZGF0YSAtPiBIdG1sRGV0YWlscyBtc2dcbiAgICAsIHNvcnRlciA6IFNvcnRlciBkYXRhXG4gICAgfVxuXG5cbmNvbHVtbkRhdGEgbmFtZSB2aWV3RGF0YSBzb3J0ZXIgPVxuICAgIHsgbmFtZSA9IG5hbWVcbiAgICAsIHZpZXdEYXRhID0gdmlld0RhdGFcbiAgICAsIHNvcnRlciA9IHNvcnRlclxuICAgIH1cblxuXG50eXBlIGFsaWFzIENvbHVtbkhlYWRlciBkYXRhID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHNvcnRlciA6IFNvcnRlciBkYXRhXG4gICAgfVxuXG5cbnRvSGVhZGVyIDogQ29sdW1uRGF0YSBkYXRhIG1zZyAtPiBDb2x1bW5IZWFkZXIgZGF0YVxudG9IZWFkZXIgeyBuYW1lLCBzb3J0ZXIgfSA9XG4gICAgeyBuYW1lID0gbmFtZSwgc29ydGVyID0gc29ydGVyIH1cblxuXG57LXwgLX1cbnN0cmluZ0NvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBTdHJpbmcpIC0+IENvbHVtbiBkYXRhIG1zZ1xuc3RyaW5nQ29sdW1uIG5hbWUgdG9TdHIgPVxuICAgIENvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0ZXh0RGV0YWlscyA8PCB0b1N0clxuICAgICAgICAsIHNvcnRlciA9IGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b1N0clxuICAgICAgICB9XG5cblxuey18IC19XG5pbnRDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gSW50KSAtPiBDb2x1bW4gZGF0YSBtc2dcbmludENvbHVtbiBuYW1lIHRvSW50ID1cbiAgICBDb2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdGV4dERldGFpbHMgPDwgU3RyaW5nLmZyb21JbnQgPDwgdG9JbnRcbiAgICAgICAgLCBzb3J0ZXIgPSBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9JbnRcbiAgICAgICAgfVxuXG5cbnstfCAtfVxuZmxvYXRDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuZmxvYXRDb2x1bW4gbmFtZSB0b0Zsb2F0ID1cbiAgICBDb2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdGV4dERldGFpbHMgPDwgU3RyaW5nLmZyb21GbG9hdCA8PCB0b0Zsb2F0XG4gICAgICAgICwgc29ydGVyID0gaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvRmxvYXRcbiAgICAgICAgfVxuXG5cbnstfCBZb3UgbWF5IG5vdCBmaW5kIHRoZSBoZWxwZXIgZnVuY3Rpb25zIGZvciBgU3RyaW5nYCwgYEludGAgYW5kIGBGbG9hdGAgdG8gYmUgZmxleGlibGVcbiAgICBlbm91Z2ggZm9yIHlvdXIgbmVlZHMuIFlvdSBtYXkgZGVmaW5lIHlvdXIgb3duIGNvbHVtbiBjb25maWd1cmF0aW9uIHdpdGggdGhpcyBmdW5jdGlvbixcbiAgICBieSBwcm92aWRpbmcgb3B0aW9uYWxseSBkaXN0aW5jdCBjb2x1bW4gaGVhZGVyIG5hbWUgYW5kIGNvbHVtbiBpZCBmdW5jdGlvbnMsIG9wdGlvbmFsbHkgZGlzdGluY3QgZGlzcGxheSwgZmlsdGVyIGFuZCBzb3J0IHJlbmRlciBmdW5jdGlvbnNcbiAgICBhbmQgYW4gQXJyYXkgb2YgYFNvcnREaXJlY3Rpb25gcy5cblxuXG4tfVxuY29sdW1uIDpcbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHRvU3RyaW5nIDogZGF0YSAtPiBTdHJpbmdcbiAgICAsIHNvcnREaXJlY3Rpb25zIDogWmVyb09uZU9yVHdvIFNvcnREaXJlY3Rpb25cbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG5jb2x1bW4geyBuYW1lLCB0b1N0cmluZywgc29ydERpcmVjdGlvbnMgfSA9XG4gICAgY3VzdG9tQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBpZCA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRvU3RyaW5nXG4gICAgICAgICwgZmlsdGVyRGF0YSA9IHRvU3RyaW5nXG4gICAgICAgICwgc29ydERhdGEgPSB0b1N0cmluZ1xuICAgICAgICAsIHNvcnREaXJlY3Rpb25zID0gc29ydERpcmVjdGlvbnNcbiAgICAgICAgfVxuXG5cbnRleHREZXRhaWxzIDogU3RyaW5nIC0+IEh0bWxEZXRhaWxzIG1zZ1xudGV4dERldGFpbHMgc3RyID1cbiAgICB7IGF0dHJpYnV0ZXMgPSBbXSwgY2hpbGRyZW4gPSBbIEh0bWwudGV4dCBzdHIgXSB9XG5cblxudHlwZSBaZXJvT25lT3JUd28gYVxuICAgID0gWmVyb1xuICAgIHwgT25lIGFcbiAgICB8IFR3byBhXG5cblxuZ2V0U29ydGVyIDogWmVyb09uZU9yVHdvIFNvcnREaXJlY3Rpb24gLT4gKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmdldFNvcnRlciBzb3J0RGlyZWN0aW9ucyB0b0NvbXBhcmFibGUgPVxuICAgIHdoZW4gc29ydERpcmVjdGlvbnMgaXNcbiAgICAgICAgVHdvIEFzYyAtPlxuICAgICAgICAgICAgaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZVxuXG4gICAgICAgIFR3byBEZXNjIC0+XG4gICAgICAgICAgICBkZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgT25lIEFzYyAtPlxuICAgICAgICAgICAgaW5jcmVhc2luZ0J5IHRvQ29tcGFyYWJsZVxuXG4gICAgICAgIE9uZSBEZXNjIC0+XG4gICAgICAgICAgICBkZWNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgWmVybyAtPlxuICAgICAgICAgICAgdW5zb3J0YWJsZVxuXG5cbnstfCBQZXJoYXBzIHRoZSBiYXNpYyBjb2x1bW5zIGFyZSBub3QgcXVpdGUgd2hhdCB5b3Ugd2FudC4gTWF5YmUgeW91IHdhbnQgdG9cbmRpc3BsYXkgbW9uZXRhcnkgdmFsdWVzIGluIHRob3VzYW5kcyBvZiBkb2xsYXJzLCBhbmQgYGZsb2F0Q29sdW1uYCBkb2VzIG5vdFxucXVpdGUgY3V0IGl0LiBZb3UgY291bGQgZGVmaW5lIGEgY3VzdG9tIGNvbHVtbiBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgVGFibGVcblxuICAgIGRvbGxhckNvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBGbG9hdCkgLT4gQ29sdW1uIGRhdGEgbXNnXG4gICAgZG9sbGFyQ29sdW1uIG5hbWUgdG9Eb2xsYXJzID1cbiAgICAgICAgVGFibGUuY3VzdG9tQ29sdW1uXG4gICAgICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICAgICAsIHZpZXdEYXRhID0gXFxkYXRhIC0+IHZpZXdEb2xsYXJzICh0b0RvbGxhcnMgZGF0YSlcbiAgICAgICAgICAgICwgc29ydGVyID0gVGFibGUuZGVjcmVhc2luZ0J5IHRvRG9sbGFyc1xuICAgICAgICAgICAgfVxuXG4gICAgdmlld0RvbGxhcnMgOiBGbG9hdCAtPiBTdHJpbmdcbiAgICB2aWV3RG9sbGFycyBkb2xsYXJzID1cbiAgICAgICAgXCIkXCIgKysgU3RyaW5nLmZyb21JbnQgKHJvdW5kIChkb2xsYXJzIC8gMTAwMCkpICsrIFwia1wiXG5cblRoZSBgdmlld0RhdGFgIGZpZWxkIG1lYW5zIHdlIHdpbGwgZGlzcGxheXMgdGhlIG51bWJlciBgMTIzNDUuNjdgIGFzIGAkMTJrYC5cblxuVGhlIGBzb3J0ZXJgIGZpZWxkIHNwZWNpZmllcyBob3cgdGhlIGNvbHVtbiBjYW4gYmUgc29ydGVkLiBJbiBgZG9sbGFyQ29sdW1uYCB3ZVxuYXJlIHNheWluZyB0aGF0IGl0IGNhbiBfb25seV8gYmUgc2hvd24gZnJvbSBoaWdoZXN0LXRvLWxvd2VzdCBtb25ldGFyeSB2YWx1ZS5cbk1vcmUgYWJvdXQgc29ydGVycyBzb29uIVxuXG4tfVxuY3VzdG9tQ29sdW1uIDpcbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIGlkIDogU3RyaW5nXG4gICAgLCB2aWV3RGF0YSA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCBmaWx0ZXJEYXRhIDogZGF0YSAtPiBTdHJpbmdcbiAgICAsIHNvcnREYXRhIDogZGF0YSAtPiBjb21wYXJhYmxlXG4gICAgLCBzb3J0RGlyZWN0aW9ucyA6IFplcm9PbmVPclR3byBTb3J0RGlyZWN0aW9uXG4gICAgfVxuICAgIC0+IENvbHVtbiBkYXRhIG1zZ1xuY3VzdG9tQ29sdW1uIHsgbmFtZSwgaWQsIHZpZXdEYXRhLCBmaWx0ZXJEYXRhLCBzb3J0RGF0YSwgc29ydERpcmVjdGlvbnMgfSA9XG4gICAgQ29sdW1uIDx8XG4gICAgICAgIGNvbHVtbkRhdGEgbmFtZSAodGV4dERldGFpbHMgPDwgdmlld0RhdGEpIDx8XG4gICAgICAgICAgICBnZXRTb3J0ZXIgc29ydERpcmVjdGlvbnMgc29ydERhdGFcblxuXG57LXwgSXQgaXMgX3Bvc3NpYmxlXyB0aGF0IHlvdSB3YW50IHNvbWV0aGluZyBjcmF6aWVyIHRoYW4gYGN1c3RvbUNvbHVtbmAuIEluXG50aGF0IHVubGlrZWx5IHNjZW5hcmlvLCB0aGlzIGZ1bmN0aW9uIGxldHMgeW91IGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlXG5hdHRyaWJ1dGVzIGFuZCBjaGlsZHJlbiBvZiBlYWNoIGA8dGQ+YCBjZWxsIGluIHRoaXMgY29sdW1uLlxuXG5TbyBtYXliZSB5b3Ugd2FudCB0byBhIGRvbGxhcnMgY29sdW1uLCBhbmQgdGhlIGRvbGxhciBzaWducyBzaG91bGQgYmUgZ3JlZW4uXG5cbiAgICBpbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlLCBIdG1sLCBzcGFuLCB0ZXh0KVxuICAgIGltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmcgKHN0eWxlKVxuICAgIGltcG9ydCBUYWJsZVxuXG4gICAgZG9sbGFyQ29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEZsb2F0KSAtPiBDb2x1bW4gZGF0YSBtc2dcbiAgICBkb2xsYXJDb2x1bW4gbmFtZSB0b0RvbGxhcnMgPVxuICAgICAgICBUYWJsZS52ZXJ5Q3VzdG9tQ29sdW1uXG4gICAgICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICAgICAsIHZpZXdEYXRhID0gXFxkYXRhIC0+IHZpZXdEb2xsYXJzICh0b0RvbGxhcnMgZGF0YSlcbiAgICAgICAgICAgICwgc29ydGVyID0gVGFibGUuZGVjcmVhc2luZ0J5IHRvRG9sbGFyc1xuICAgICAgICAgICAgfVxuXG4gICAgdmlld0RvbGxhcnMgOiBGbG9hdCAtPiBUYWJsZS5IdG1sRGV0YWlscyBtc2dcbiAgICB2aWV3RG9sbGFycyBkb2xsYXJzID1cbiAgICAgICAgVGFibGUuSHRtbERldGFpbHMgW11cbiAgICAgICAgICAgIFsgc3BhbiBbIHN0eWxlIFwiY29sb3JcIiBcImdyZWVuXCIgXSBbIHRleHQgXCIkXCIgXVxuICAgICAgICAgICAgLCB0ZXh0IChTdHJpbmcuZnJvbUludCAocm91bmQgKGRvbGxhcnMgLyAxMDAwKSkgKysgXCJrXCIpXG4gICAgICAgICAgICBdXG5cbi19XG52ZXJ5Q3VzdG9tQ29sdW1uIDpcbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHZpZXdEYXRhIDogZGF0YSAtPiBIdG1sRGV0YWlscyBtc2dcbiAgICAsIHNvcnRlciA6IFNvcnRlciBkYXRhXG4gICAgfVxuICAgIC0+IENvbHVtbiBkYXRhIG1zZ1xudmVyeUN1c3RvbUNvbHVtbiA9XG4gICAgQ29sdW1uXG5cblxuXG4tLSBWSUVXXG5cblxuey18IFRha2UgYW4gYXJyYXkgb2YgZGF0YSBhbmQgdHVybiBpdCBpbnRvIGEgdGFibGUuIFRoZSBgQ29uZmlnYCBhcmd1bWVudCBpcyB0aGVcbmNvbmZpZ3VyYXRpb24gZm9yIHRoZSB0YWJsZS4gSXQgZGVzY3JpYmVzIHRoZSBjb2x1bW5zIHRoYXQgd2Ugd2FudCB0byBzaG93LiBUaGVcbmBTdGF0ZWAgYXJndW1lbnQgY29udGFpbnMgdGhlIGN1cnJlbnQgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIHRhYmxlLCBpbmNsdWRpbmcgd2hpY2hcbmNvbHVtbihzKSB0aGUgcm93cyBhcmUgc29ydGVkIGJ5IGF0IHRoZSBtb21lbnQsIG9yIHdoaWNoIHJvdyBpcyBjdXJyZW50bHkgYWN0aXZlLlxuVGhlIGBkYXRhYCB0eXBlIHdpbGwgdXN1YWxseSBiZSBhIHJlY29yZCwgYnV0IGFueSB2YWx1ZSBpcyBwb3NzaWJsZS5cblxuKipOb3RlOioqIFRoZSBgU3RhdGVgIGFuZCBgQXJyYXkgZGF0YWAgc2hvdWxkIGxpdmUgaW4geW91ciBgTW9kZWxgLiBUaGUgYENvbmZpZ2BcbmZvciB0aGUgdGFibGUgYmVsb25ncyAoaGFyZC1jb2RlZCkgaW4geW91ciBgdmlld2AgY29kZSwgYXMgaXQgaXMganVzdCBhIGNvbGxlY3Rpb25cbm9mIGN1c3RvbWl6YWJsZSB2aWV3IGFuZCBoZWxwZXIgZnVuY3Rpb25zIGFuZCBpdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCBub3QgdG9cbnB1dCBhbnkgZnVuY3Rpb25zIGluIHlvdXIgbW9kZWwuXG5cbi19XG52aWV3IDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEFycmF5IGRhdGEgLT4gSHRtbCBtc2dcbnZpZXcgKChDb25maWcgeyB0b0lkLCB0b01zZywgY29sdW1ucywgY3VzdG9taXphdGlvbnMgfSkgYXMgY29uZikgc3RhdGUgZGF0YSA9XG4gICAgbGV0XG4gICAgICAgIHJvd3MgPVxuICAgICAgICAgICAgZ2V0UGFnaW5hdGVkRGF0YSBjb25mIHN0YXRlIDx8IGdldFNvcnRlZERhdGEgY29uZiBzdGF0ZSBkYXRhXG5cbiAgICAgICAgaGVhZGVycyA9XG4gICAgICAgICAgICBBcnJheS5tYXAgdG9IZWFkZXIgY29sdW1uc1xuXG4gICAgICAgIHRoZWFkRGV0YWlscyA9XG4gICAgICAgICAgICBjdXN0b21pemF0aW9ucy50aGVhZCA8fCBBcnJheS5tYXAgKHRvSGVhZGVySW5mbyBzdGF0ZSB0b01zZykgaGVhZGVyc1xuXG4gICAgICAgIHRoZWFkID1cbiAgICAgICAgICAgIEh0bWwudGhlYWQgdGhlYWREZXRhaWxzLmF0dHJpYnV0ZXMgdGhlYWREZXRhaWxzLmNoaWxkcmVuXG5cbiAgICAgICAgdGJvZHkgPVxuICAgICAgICAgICAgS2V5ZWQubm9kZSBcInRib2R5XCIgY3VzdG9taXphdGlvbnMudGJvZHlBdHRycyA8fFxuICAgICAgICAgICAgICAgIEFycmF5Lm1hcCAodmlld1JvdyB0b0lkIHRvTXNnIGNvbHVtbnMgY3VzdG9taXphdGlvbnMucm93QXR0cnMgc3RhdGUpIHJvd3NcblxuICAgICAgICB3aXRoRm9vdCA9XG4gICAgICAgICAgICB3aGVuIGN1c3RvbWl6YXRpb25zLnRmb290IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBbIHRib2R5IF1cblxuICAgICAgICAgICAgICAgIEp1c3QgeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgIFsgSHRtbC50Zm9vdCBhdHRyaWJ1dGVzIGNoaWxkcmVuLCB0Ym9keSBdXG4gICAgaW5cbiAgICBIdG1sLnRhYmxlIGN1c3RvbWl6YXRpb25zLnRhYmxlQXR0cnMgPHxcbiAgICAgICAgKHdoZW4gY3VzdG9taXphdGlvbnMuY2FwdGlvbiBpc1xuICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgIFsgdGhlYWQgXSArKyB3aXRoRm9vdFxuXG4gICAgICAgICAgICBKdXN0IHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSAtPlxuICAgICAgICAgICAgICAgIFsgSHRtbC5jYXB0aW9uIGF0dHJpYnV0ZXMgY2hpbGRyZW4gXSArKyBbIHRoZWFkIF0gKysgd2l0aEZvb3RcbiAgICAgICAgKVxuXG5cbnR5cGUgYWxpYXMgSGVhZGVySW5mbyBtc2cgPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgc2VsZWN0ZWQgOiBNYXliZSB7IHNvcnRSYW5rIDogSW50LCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG4gICAgLCBzb3J0RGlyZWN0aW9ucyA6IEFycmF5IFNvcnREaXJlY3Rpb25cbiAgICAsIGNsaWNrQWN0aW9ucyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxuICAgIH1cblxuXG5oZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgc29ydERpcmVjdGlvbnMgY2xpY2tBY3Rpb25zID1cbiAgICB7IG5hbWUgPSBuYW1lXG4gICAgLCBzZWxlY3RlZCA9IHNlbGVjdGVkXG4gICAgLCBzb3J0RGlyZWN0aW9ucyA9IHNvcnREaXJlY3Rpb25zXG4gICAgLCBjbGlja0FjdGlvbnMgPSBjbGlja0FjdGlvbnNcbiAgICB9XG5cblxudG9IZWFkZXJJbmZvIDogU3RhdGUgLT4gKFN0YXRlIC0+IG1zZykgLT4gQ29sdW1uSGVhZGVyIGRhdGEgLT4gSGVhZGVySW5mbyBtc2dcbnRvSGVhZGVySW5mbyAoKFN0YXRlIHsgc29ydENvbHVtbnMgfSkgYXMgc3RhdGUpIHRvTXNnIHsgbmFtZSwgc29ydGVyIH0gPVxuICAgIGxldFxuICAgICAgICByZXZlcnNlIGEgPVxuICAgICAgICAgICAgd2hlbiBhIGlzXG4gICAgICAgICAgICAgICAgRGVzYyAtPlxuICAgICAgICAgICAgICAgICAgICBBc2NcblxuICAgICAgICAgICAgICAgIEFzYyAtPlxuICAgICAgICAgICAgICAgICAgICBEZXNjXG5cbiAgICAgICAgc2VsZWN0ZWQgPVxuICAgICAgICAgICAgd2hlbiBzb3J0Q29sdW1ucyBpc1xuICAgICAgICAgICAgICAgIFtdIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIG5vbkVtcHR5TGlzdCAtPlxuICAgICAgICAgICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZWRMaXN0IDogQXJyYXkgeyBsZWZ0IDogSW50LCByaWdodCA6IHsgc29ydENvbHVtbk5hbWUgOiBTdHJpbmcsIHNvcnREaXJlY3Rpb24gOiBTb3J0RGlyZWN0aW9uIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlZExpc3QgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmluZGV4ZWRNYXAgKFxcaWR4IHZhbCAtPiB7IGxlZnQgPSBpZHgsIHJpZ2h0ID0gdmFsIH0pIDx8IEFycmF5LnJldmVyc2Ugbm9uRW1wdHlMaXN0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkua2VlcElmIChcXHsgcmlnaHQgPSB7IHNvcnRDb2x1bW5OYW1lIH0gfSAtPiBuYW1lID09IHNvcnRDb2x1bW5OYW1lKSBpbmRleGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICBpblxuICAgICAgICAgICAgICAgICAgICB3aGVuIEFycmF5LnRha2VGaXJzdCAxIGZpbHRlcmVkTGlzdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgWyB7IGxlZnQgPSBpbmRleCAsIHJpZ2h0ID0geyBzb3J0RGlyZWN0aW9uIH0gfSBdIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IHNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uLCBzb3J0UmFuayA9IGlmIEFycmF5Lmxlbmd0aCBpbmRleGVkTGlzdCA9PSAxIHRoZW4gMCBlbHNlIGluZGV4ICsgMSB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2Ugc29ydERpcmVjdGlvblxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNvcnRlciBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzY1xuICAgIGluXG4gICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgTm9uZSAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIE5vdGhpbmcgW10gW11cblxuICAgICAgICBSb3dOdW1iZXIgLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBOb3RoaW5nIFtdIFtdXG5cbiAgICAgICAgSW5jcmVhc2luZyBfIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgWyBBc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIEFzYyB0b01zZ1xuXG4gICAgICAgIERlY3JlYXNpbmcgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgRGVzYyB0b01zZ1xuXG4gICAgICAgIEluY09yRGVjIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIEFzYywgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uIHRvTXNnXG5cbiAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYywgQXNjIF0gPHwgb25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSByZXZlcnNlZFNvcnREaXJlY3Rpb24gdG9Nc2dcblxuXG5vbkNvbHVtbkhlYWRlciA6IFN0YXRlIC0+IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IChTdGF0ZSAtPiBtc2cpIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxub25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSBzb3J0RGlyZWN0aW9uIHRvTXNnID1cbiAgICBbIEUub25DbGljayA8fFxuICAgICAgICB0b01zZyA8fFxuICAgICAgICAgICAgdXBkYXRlU29ydFN0YXRlIG5hbWUgc29ydERpcmVjdGlvbiBzdGF0ZVxuICAgICwgRS5wcmV2ZW50RGVmYXVsdE9uIFwibG9uZy1wcmVzc1wiIDx8XG4gICAgICAgIEpzb24uRGVjb2RlLm1hcCAoXFxtc2cgLT4geyBtZXNzYWdlID0gbXNnLCBwcmV2ZW50RGVmYXVsdCA9IFRydWUgfSkgPHxcbiAgICAgICAgICAgIEpzb24uRGVjb2RlLnN1Y2NlZWQgPHxcbiAgICAgICAgICAgICAgICB0b01zZyA8fFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNdWx0aVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICAsIEEuYXR0cmlidXRlIFwiZGF0YS1sb25nLXByZXNzLWRlbGF5XCIgXCI1MDBcIlxuICAgIF1cblxuXG52aWV3Um93IDogKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gKChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykpIC0+IFN0YXRlIC0+IGRhdGEgLT4geyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBIdG1sIG1zZyB9XG52aWV3Um93IHRvSWQgdG9Nc2cgY29sdW1ucyB0b1Jvd0F0dHJzIHN0YXRlIGRhdGEgPVxuICAgIHsga2V5ID0gdG9JZCBkYXRhXG4gICAgLCBub2RlID0gdmlld1Jvd0hlbHAgY29sdW1ucyB0b1Jvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YVxuICAgIH1cblxuXG52aWV3Um93SGVscCA6IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiAoKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSkgLT4gKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IEh0bWwgbXNnXG52aWV3Um93SGVscCBjb2x1bW5zIHRvUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhID1cbiAgICBIdG1sLnRyICh0b1Jvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YSkgPHxcbiAgICAgICAgQXJyYXkubWFwICh2aWV3Q2VsbCBkYXRhKSBjb2x1bW5zXG5cblxudmlld0NlbGwgOiBkYXRhIC0+IENvbHVtbkRhdGEgZGF0YSBtc2cgLT4gSHRtbCBtc2dcbnZpZXdDZWxsIGRhdGEgeyB2aWV3RGF0YSwgc29ydGVyIH0gPVxuICAgIGxldFxuICAgICAgICBkZXRhaWxzID1cbiAgICAgICAgICAgIHZpZXdEYXRhIGRhdGFcbiAgICBpblxuICAgIEh0bWwudGQgZGV0YWlscy5hdHRyaWJ1dGVzIGRldGFpbHMuY2hpbGRyZW5cblxuXG5cbi0tIFNPUlRJTkdcblxuXG5zb3J0IDogU3RhdGUgLT4gQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuc29ydCAoU3RhdGUgeyBzb3J0Q29sdW1ucywgcGFnZVNpemUsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pIGNEYXRhIGRhdGEgPVxuICAgIHdoZW4gQXJyYXkucG9wRmlyc3Qgc29ydENvbHVtbnMgaXNcbiAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBzb3J0Q29sdW1uTmFtZSwgc29ydERpcmVjdGlvbiB9LCByZXN0ID0gcmVzdCB9IC0+XG4gICAgICAgICAgICB3aGVuIGZpbmRTb3J0ZXIgc29ydENvbHVtbk5hbWUgY0RhdGEgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIGRhdGFcblxuICAgICAgICAgICAgICAgIEp1c3Qgc29ydGVyIC0+XG4gICAgICAgICAgICAgICAgICAgIHNvcnQgKFN0YXRlIHsgc29ydENvbHVtbnMgPSByZXN0LCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfSkgY0RhdGEgPHwgYXBwbHlTb3J0ZXIgc29ydERpcmVjdGlvbiBzb3J0ZXIgZGF0YVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRhdGFcblxuXG5hcHBseVNvcnRlciA6IFNvcnREaXJlY3Rpb24gLT4gU29ydGVyIGRhdGEgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5hcHBseVNvcnRlciBzb3J0RGlyZWN0aW9uIHNvcnRlciBkYXRhID1cbiAgICB3aGVuIHNvcnRlciBpc1xuICAgICAgICBOb25lIC0+XG4gICAgICAgICAgICBkYXRhXG5cbiAgICAgICAgUm93TnVtYmVyIC0+XG4gICAgICAgICAgICBkYXRhXG5cbiAgICAgICAgSW5jcmVhc2luZyBzcnQgLT5cbiAgICAgICAgICAgIHNydCBkYXRhXG5cbiAgICAgICAgRGVjcmVhc2luZyBzcnQgLT5cbiAgICAgICAgICAgIEFycmF5LnJldmVyc2UgKHNydCBkYXRhKVxuXG4gICAgICAgIEluY09yRGVjIHNydCAtPlxuICAgICAgICAgICAgaWYgc29ydERpcmVjdGlvbiA9PSBEZXNjIHRoZW5cbiAgICAgICAgICAgICAgICBBcnJheS5yZXZlcnNlIChzcnQgZGF0YSlcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNydCBkYXRhXG5cbiAgICAgICAgRGVjT3JJbmMgc3J0IC0+XG4gICAgICAgICAgICBpZiBzb3J0RGlyZWN0aW9uID09IERlc2MgdGhlblxuICAgICAgICAgICAgICAgIHNydCBkYXRhXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBBcnJheS5yZXZlcnNlIChzcnQgZGF0YSlcblxuXG5maW5kU29ydGVyIDogU3RyaW5nIC0+IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiBNYXliZSAoU29ydGVyIGRhdGEpXG5maW5kU29ydGVyIHNlbGVjdGVkQ29sdW1uIGNEYXRhID1cbiAgICB3aGVuIEFycmF5LnBvcEZpcnN0IGNEYXRhIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IHsgZmlyc3QgPSB7IG5hbWUsIHNvcnRlciB9LCByZXN0IH0gLT5cbiAgICAgICAgICAgIGlmIG5hbWUgPT0gc2VsZWN0ZWRDb2x1bW4gdGhlblxuICAgICAgICAgICAgICAgIEp1c3Qgc29ydGVyXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmaW5kU29ydGVyIHNlbGVjdGVkQ29sdW1uIHJlc3RcblxuXG57LXwgUmV0dXJuIHRoZSBkYXRhIHNvcnRlZCBleGFjdGx5IGFzIGl0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uXG4tfVxuZ2V0U29ydGVkRGF0YSA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbmdldFNvcnRlZERhdGEgKENvbmZpZyB7IGNvbHVtbnMgfSkgc3RhdGUgZGF0YSA9XG4gICAgc29ydCBzdGF0ZSBjb2x1bW5zIGRhdGFcblxuXG5cbi0tIFNPUlRFUlNcblxuXG57LXwgU3BlY2lmaWVzIGEgcGFydGljdWxhciB3YXkgb2Ygc29ydGluZyBkYXRhLlxuLX1cbnR5cGUgU29ydGVyIGRhdGFcbiAgICA9IE5vbmVcbiAgICB8IFJvd051bWJlclxuICAgIHwgSW5jcmVhc2luZyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuICAgIHwgRGVjcmVhc2luZyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuICAgIHwgSW5jT3JEZWMgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcbiAgICB8IERlY09ySW5jIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG5cblxuey18IEEgc29ydGVyIGZvciBjb2x1bW5zIHRoYXQgYXJlIHVuc29ydGFibGUuIE1heWJlIHlvdSBoYXZlIGEgY29sdW1uIGluIHlvdXJcbnRhYmxlIGZvciBkZWxldGUgYnV0dG9ucyB0aGF0IGRlbGV0ZSB0aGUgcm93LiBJdCB3b3VsZCBub3QgbWFrZSBhbnkgc2Vuc2UgdG9cbnNvcnQgYmFzZWQgb24gdGhhdCBjb2x1bW4uXG4tfVxudW5zb3J0YWJsZSA6IFNvcnRlciBkYXRhXG51bnNvcnRhYmxlID1cbiAgICBOb25lXG5cblxuey18IENyZWF0ZSBhIHNvcnRlciB0aGF0IGNhbiBvbmx5IGRpc3BsYXkgdGhlIGRhdGEgaW4gaW5jcmVhc2luZyBvcmRlci4gSWYgd2VcbndhbnQgYSB0YWJsZSBvZiBwZW9wbGUsIHNvcnRlZCBhbHBoYWJldGljYWxseSBieSBuYW1lLCB3ZSB3b3VsZCBzYXkgdGhpczpcblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCBuYW1lIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgaW5jcmVhc2luZ0J5IC5uYW1lXG5cbi19XG5pbmNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuaW5jcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgSW5jcmVhc2luZyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG57LXwgQ3JlYXRlIGEgc29ydGVyIHRoYXQgY2FuIG9ubHkgZGlzcGxheSB0aGUgZGF0YSBpbiBkZWNyZWFzaW5nIG9yZGVyLiBJZiB3ZVxud2FudCBhIHRhYmxlIG9mIGNvdW50cmllcywgc29ydGVkIGJ5IHBvcHVsYXRpb24gZnJvbSBoaWdoZXN0IHRvIGxvd2VzdCwgd2VcbndvdWxkIHNheSB0aGlzOlxuXG4gICAgc29ydGVyIDogU29ydGVyIHsgYSB8IHBvcHVsYXRpb24gOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBkZWNyZWFzaW5nQnkgLnBvcHVsYXRpb25cblxuLX1cbmRlY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5kZWNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBEZWNyZWFzaW5nIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnstfCBTb21ldGltZXMgeW91IHdhbnQgdG8gYmUgYWJsZSB0byBzb3J0IGRhdGEgaW4gaW5jcmVhc2luZyBfb3JfIGRlY3JlYXNpbmdcbm9yZGVyLiBNYXliZSB5b3UgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgYWJvdXQgb3JhbmdlIGp1aWNlLCBhbmQgeW91IHdhbnQgdG8ga25vd1xuYm90aCB3aGljaCBoYXMgdGhlIG1vc3Qgc3VnYXIsIGFuZCB3aGljaCBoYXMgdGhlIGxlYXN0IHN1Z2FyLiBCb3RoIGludGVyZXN0aW5nIVxuVGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBzZWUgYm90aCwgc3RhcnRpbmcgd2l0aCBkZWNyZWFzaW5nIG9yZGVyLlxuXG4gICAgc29ydGVyIDogU29ydGVyIHsgYSB8IHN1Z2FyIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5IC5zdWdhclxuXG4tfVxuZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIERlY09ySW5jIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnstfCBTb21ldGltZXMgeW91IHdhbnQgdG8gYmUgYWJsZSB0byBzb3J0IGRhdGEgaW4gaW5jcmVhc2luZyBfb3JfIGRlY3JlYXNpbmdcbm9yZGVyLiBNYXliZSB5b3UgaGF2ZSByYWNlIHRpbWVzIGZvciB0aGUgMTAwIG1ldGVyIHNwcmludC4gVGhpcyBmdW5jdGlvbiBsZXRzXG5zb3J0IGJ5IGJlc3QgdGltZSBieSBkZWZhdWx0LCBidXQgYWxzbyBzZWUgdGhlIG90aGVyIG9yZGVyLlxuXG4gICAgc29ydGVyIDogU29ydGVyIHsgYSB8IHRpbWUgOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgLnRpbWVcblxuLX1cbmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5pbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBJbmNPckRlYyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG50eXBlIFBhZ2luYXRpb25TdHlsZVxuICAgID0gTm9QYWdpbmF0aW9uXG4gICAgfCBQYWdlciAoQXJyYXkgSW50KVxuICAgIHwgU2Nyb2xsZXIgKEFycmF5IEludClcblxuXG57LXwgLX1cbnNldE5vUGFnaW5hdGlvbiA6IFN0YXRlIC0+IFN0YXRlXG5zZXROb1BhZ2luYXRpb24gc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZSB7IGN1cnJlbnRTdGF0ZSB8IHBhZ2luYXRpb24gPSBOb1BhZ2luYXRpb24gfVxuXG5cbnstfCAtfVxuc2V0U2ltcGxlUGFnaW5hdGlvbiA6IFN0YXRlIC0+IFN0YXRlXG5zZXRTaW1wbGVQYWdpbmF0aW9uIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGUgeyBjdXJyZW50U3RhdGUgfCBwYWdpbmF0aW9uID0gUGFnZXIgWyAxMCwgMjUsIDUwLCAxMDAgXSB9XG5cblxuey18IC19XG5zZXRQYWdpbmF0aW9uV2l0aCA6IEludCAtPiBBcnJheSBJbnQgLT4gU3RhdGUgLT4gU3RhdGVcbnNldFBhZ2luYXRpb25XaXRoIGRlZmF1bHRQYWdlU2l6ZSBvdGhlclBhZ2VTaXplcyBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlXG4gICAgICAgICAgICAgICAgeyBjdXJyZW50U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfCBwYWdpbmF0aW9uID0gUGFnZXIgPHwgQXJyYXkuc29ydCA8fCBbIGRlZmF1bHRQYWdlU2l6ZSBdICsrIG90aGVyUGFnZVNpemVzXG4gICAgICAgICAgICAgICAgICAgICwgcGFnZVNpemUgPSBkZWZhdWx0UGFnZVNpemVcbiAgICAgICAgICAgICAgICB9XG5cblxuey18IC19XG5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCA6IEludCAtPiBBcnJheSBJbnQgLT4gU3RhdGUgLT4gU3RhdGVcbnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIGRlZmF1bHRQYWdlU2l6ZSBvdGhlclBhZ2VTaXplcyBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlXG4gICAgICAgICAgICAgICAgeyBjdXJyZW50U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfCBwYWdpbmF0aW9uID0gU2Nyb2xsZXIgPHwgQXJyYXkuc29ydCA8fCBbIGRlZmF1bHRQYWdlU2l6ZSBdICsrIG90aGVyUGFnZVNpemVzXG4gICAgICAgICAgICAgICAgICAgICwgcGFnZVNpemUgPSBkZWZhdWx0UGFnZVNpemVcbiAgICAgICAgICAgICAgICB9XG5cblxuey18IC19XG5nZXRQYWdpbmF0ZWREYXRhIDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuZ2V0UGFnaW5hdGVkRGF0YSAoQ29uZmlnIHsgdG9JZCB9KSAoU3RhdGUgeyBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gfSkgZGF0YSA9XG4gICAgbGV0XG4gICAgICAgIHJvd0N1cnNvciA9XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfD4gQXJyYXkuZmluZEZpcnN0IChcXHYgLT4gdG9JZCB2ID09IGFjdGl2ZVJvd0lkKVxuICAgICAgICAgICAgICAgIHw+IE1heWJlLm1hcCAuaW5kZXhcbiAgICAgICAgICAgICAgICB8PiBNYXliZS5tYXAgKFxcaSAtPiBpICsgMSlcbiAgICAgICAgICAgICAgICB8PiBNYXliZS53aXRoRGVmYXVsdCAwXG5cbiAgICAgICAgcHJlY2VkaW5nRnVsbFBhZ2VzID1cbiAgICAgICAgICAgIChyb3dDdXJzb3IgLSAxKSAvLyBwYWdlU2l6ZVxuXG4gICAgICAgIGxhc3RSb3dPblBhZ2UgPVxuICAgICAgICAgICAgd2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICAgICAgUGFnZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHBhZ2VTaXplIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAtLSBwYWdlIHNpemUgMCBtZWFucyBzaG93IGFsbCByb3dzIHdhcyBjaG9zZW4gZnJvbSBwYWdlIHNpemUgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgMCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJlY2VkaW5nRnVsbFBhZ2VzICsgMSkgKiBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgU2Nyb2xsZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBwYWdlU2l6ZSA9PSAwIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBjb21wYXJlIHJvd0N1cnNvciAocGFnZVNpemUgLy8gMikgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgKyBwYWdlU2l6ZSAvLyAyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICBOb1BhZ2luYXRpb24gLT5cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGFcblxuICAgICAgICBsYXN0Um93QmVmb3JlUGFnZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIHByZWNlZGluZ0Z1bGxQYWdlcyAqIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICBTY3JvbGxlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIHBhZ2VTaXplID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yIC0gMlxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29tcGFyZSByb3dDdXJzb3IgPHwgQXJyYXkubGVuZ3RoIGRhdGEgLSBwYWdlU2l6ZSAvLyAyIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGEgLSBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBpc0V2ZW4gcGFnZVNpemUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yIC0gcGFnZVNpemUgLy8gMlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciAtIHBhZ2VTaXplIC8vIDIgLSAxXG5cbiAgICAgICAgICAgICAgICBOb1BhZ2luYXRpb24gLT5cbiAgICAgICAgICAgICAgICAgICAgMFxuICAgIGluXG4gICAgZGF0YVxuICAgICAgICB8PiBBcnJheS50YWtlRmlyc3QgKG5lZ2F0aXZlVG9aZXJvIGxhc3RSb3dPblBhZ2UpXG4gICAgICAgIHw+IEFycmF5LmRyb3BGaXJzdCAobmVnYXRpdmVUb1plcm8gbGFzdFJvd0JlZm9yZVBhZ2UpXG5cblxuey18IC19XG5wYWdlTGVuZ3RoQ2hvb3NlciA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBIdG1sIG1zZ1xucGFnZUxlbmd0aENob29zZXIgKENvbmZpZyB7IHRvTXNnIH0pICgoU3RhdGUgeyBwYWdpbmF0aW9uIH0pIGFzIHRhYmxlU3RhdGUpID1cbiAgICBsZXRcbiAgICAgICAgb25QYWdlU2l6ZUNob2ljZSA6IFN0YXRlIC0+IEh0bWwuQXR0cmlidXRlIG1zZ1xuICAgICAgICBvblBhZ2VTaXplQ2hvaWNlIHN0YXRlID1cbiAgICAgICAgICAgIEUub24gXCJjaGFuZ2VcIiA8fFxuICAgICAgICAgICAgICAgIEpzb24uRGVjb2RlLm1hcCAoXFxuZXdQYWdlU2l6ZSAtPiB0b01zZyA8fCB1cGRhdGVQYWdlU2l6ZSBuZXdQYWdlU2l6ZSBzdGF0ZSkgPHxcbiAgICAgICAgICAgICAgICAgICAgSnNvbi5EZWNvZGUubWFwIChNYXliZS53aXRoRGVmYXVsdCAwIDw8IFN0cmluZy50b0ludCkgPHxcbiAgICAgICAgICAgICAgICAgICAgICAgIEUudGFyZ2V0VmFsdWVcblxuICAgICAgICB2aWV3T3B0aW9uIHZhbHVlcyA9XG4gICAgICAgICAgICBBcnJheS5mb2xkclxuICAgICAgICAgICAgICAgIChcXHZhbCBodG1sIC0+XG4gICAgICAgICAgICAgICAgICAgIFsgSHRtbC5vcHRpb24gWyBBLnZhbHVlIHZhbCwgQS5zZWxlY3RlZCA8fCAoU3RyaW5nLmZyb21JbnQgPHwgZ2V0UGFnZVNpemUgdGFibGVTdGF0ZSkgPT0gdmFsIF0gWyBIdG1sLnRleHQgdmFsIF1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKysgaHRtbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgPHxcbiAgICAgICAgICAgICAgICBBcnJheS5tYXAgU3RyaW5nLmZyb21JbnQgdmFsdWVzXG4gICAgaW5cbiAgICBIdG1sLnNlbGVjdCBbIG9uUGFnZVNpemVDaG9pY2UgdGFibGVTdGF0ZSBdIDx8XG4gICAgICAgICh3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgIFBhZ2VyIHZhbHVlcyAtPlxuICAgICAgICAgICAgICAgIHZpZXdPcHRpb24gdmFsdWVzXG5cbiAgICAgICAgICAgIFNjcm9sbGVyIHZhbHVlcyAtPlxuICAgICAgICAgICAgICAgIHZpZXdPcHRpb24gdmFsdWVzXG5cbiAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICApXG5cblxuaXNFdmVuIDogSW50IC0+IEJvb2xcbmlzRXZlbiBpbnQgPVxuICAgIE1hdGgubW9kQnkgMiBpbnQgPT0gMFxuXG5cbm5lZ2F0aXZlVG9aZXJvIDogSW50IC0+IEludFxubmVnYXRpdmVUb1plcm8gbiA9XG4gICAgd2hlbiBjb21wYXJlIG4gMCBpc1xuICAgICAgICBMVCAtPlxuICAgICAgICAgICAgMFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIG5cbiIsCiAgICAgICAgIm1vZHVsZSBFeGFtcGxlLlBhZ2luYXRlZCBleHBvc2luZyAoTW9kZWwsIE1zZyguLiksIFBlcnNvbiwgY29uZmlnLCBpbml0LCBtYWluLCBwcmVzaWRlbnRzLCB1cGRhdGUsIHZpZXcpXG5cbmltcG9ydCBCcm93c2VyXG5pbXBvcnQgRGF0YVRhYmxlIGFzIFRhYmxlIGV4cG9zaW5nIChTb3J0RGlyZWN0aW9uKC4uKSlcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdCBwcmVzaWRlbnRzXG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IFBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgUGVyc29uIC0+IE1vZGVsXG5pbml0IHBlb3BsZSA9XG4gICAgbGV0XG4gICAgICAgIG1vZGVsID1cbiAgICAgICAgICAgIHsgcGVvcGxlID0gcGVvcGxlXG4gICAgICAgICAgICAsIHRhYmxlU3RhdGUgPVxuICAgICAgICAgICAgICAgIFRhYmxlLm5ldyBcIlByZXNpZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCAxMCBbIDAsIDUsIDI1LCA1MCBdXG4gICAgICAgICAgICAgICAgICAgIHw+IFRhYmxlLnVwZGF0ZVNvcnRTdGF0ZSBcIlllYXJcIiBBc2NcbiAgICAgICAgICAgICAgICAgICAgfD4gVGFibGUudXBkYXRlQWN0aXZlUm93SWQgXCJcIlxuICAgICAgICAgICAgLCBxdWVyeSA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICBpblxuICAgIG1vZGVsXG5cblxuXG4tLSBVUERBVEVcblxuXG50eXBlIE1zZ1xuICAgID0gU2V0UXVlcnkgU3RyaW5nXG4gICAgfCBTZXRUYWJsZVN0YXRlIFRhYmxlLlN0YXRlXG5cblxudXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IE1vZGVsXG51cGRhdGUgbXNnIG1vZGVsID1cbiAgICB3aGVuIG1zZyBpc1xuICAgICAgICBTZXRRdWVyeSBuZXdRdWVyeSAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHF1ZXJ5ID0gbmV3UXVlcnkgfVxuXG4gICAgICAgIFNldFRhYmxlU3RhdGUgbmV3U3RhdGUgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCB0YWJsZVN0YXRlID0gbmV3U3RhdGUgfVxuXG5cblxuLS0gVklFV1xuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyB7IHBlb3BsZSwgdGFibGVTdGF0ZSwgcXVlcnkgfSA9XG4gICAgbGV0XG4gICAgICAgIGxvd2VyUXVlcnkgPVxuICAgICAgICAgICAgU3RyaW5nLnRvTG93ZXIgcXVlcnlcblxuICAgICAgICBhY2NlcHRhYmxlUGVvcGxlID1cbiAgICAgICAgICAgIEFycmF5LmtlZXBJZiAoU3RyaW5nLmNvbnRhaW5zIGxvd2VyUXVlcnkgPDwgU3RyaW5nLnRvTG93ZXIgPDwgLm5hbWUpIHBlb3BsZVxuICAgIGluXG4gICAgZGl2IFtdXG4gICAgICAgIFsgaDEgW10gWyB0ZXh0IFwiUGFnaW5hdGlvbiAoU2Nyb2xsaW5nIHZhcmlhbnQpXCIgXVxuICAgICAgICAsIGRpdiBbXSBbXVxuICAgICAgICAsIGlucHV0IFsgcGxhY2Vob2xkZXIgXCJTZWFyY2ggYnkgTmFtZVwiLCBvbklucHV0IFNldFF1ZXJ5IF0gW11cbiAgICAgICAgLCBUYWJsZS5wYWdlTGVuZ3RoQ2hvb3NlciBjb25maWcgdGFibGVTdGF0ZVxuICAgICAgICAsIFRhYmxlLnZpZXcgY29uZmlnIHRhYmxlU3RhdGUgYWNjZXB0YWJsZVBlb3BsZVxuICAgICAgICBdXG5cblxuY29uZmlnIDogVGFibGUuQ29uZmlnIFBlcnNvbiBNc2dcbmNvbmZpZyA9XG4gICAgVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBTZXRUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIFRhYmxlLnN0cmluZ0NvbHVtbiBcIk5hbWVcIiAubmFtZVxuICAgICAgICAgICAgLCBUYWJsZS5pbnRDb2x1bW4gXCJZZWFyXCIgLnllYXJcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiQ2l0eVwiIC5jaXR5XG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIlN0YXRlXCIgLnN0YXRlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuXG5cbi0tIFBFT1BMRVxuXG5cbnR5cGUgYWxpYXMgUGVyc29uID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHllYXIgOiBJbnRcbiAgICAsIGNpdHkgOiBTdHJpbmdcbiAgICAsIHN0YXRlIDogU3RyaW5nXG4gICAgfVxuXG5cbnBlcnNvbiBuYW1lIHllYXIgY2l0eSBzdGF0ZSA9XG4gICAgeyBuYW1lID0gbmFtZSwgeWVhciA9IHllYXIsIGNpdHkgPSBjaXR5LCBzdGF0ZSA9IHN0YXRlIH1cblxuXG5wcmVzaWRlbnRzIDogQXJyYXkgUGVyc29uXG5wcmVzaWRlbnRzID1cbiAgICBbIHBlcnNvbiBcIkdlb3JnZSBXYXNoaW5ndG9uXCIgMTczMiBcIldlc3Rtb3JlbGFuZCBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gQWRhbXNcIiAxNzM1IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIlRob21hcyBKZWZmZXJzb25cIiAxNzQzIFwiU2hhZHdlbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1hZGlzb25cIiAxNzUxIFwiUG9ydCBDb253YXlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1vbnJvZVwiIDE3NTggXCJNb25yb2UgSGFsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEphY2tzb25cIiAxNzY3IFwiV2F4aGF3cyBSZWdpb25cIiBcIlNvdXRoL05vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gUXVpbmN5IEFkYW1zXCIgMTc2NyBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhlbnJ5IEhhcnJpc29uXCIgMTc3MyBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIk1hcnRpbiBWYW4gQnVyZW5cIiAxNzgyIFwiS2luZGVyaG9va1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiWmFjaGFyeSBUYXlsb3JcIiAxNzg0IFwiQmFyYm91cnN2aWxsZVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSm9obiBUeWxlclwiIDE3OTAgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBCdWNoYW5hblwiIDE3OTEgXCJDb3ZlIEdhcFwiIFwiUGVubnN5bHZhbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEsuIFBvbGtcIiAxNzk1IFwiUGluZXZpbGxlXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJNaWxsYXJkIEZpbGxtb3JlXCIgMTgwMCBcIlN1bW1lcmhpbGxcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIkZyYW5rbGluIFBpZXJjZVwiIDE4MDQgXCJIaWxsc2Jvcm91Z2hcIiBcIk5ldyBIYW1wc2hpcmVcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEpvaG5zb25cIiAxODA4IFwiUmFsZWlnaFwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiQWJyYWhhbSBMaW5jb2xuXCIgMTgwOSBcIlNpbmtpbmcgc3ByaW5nXCIgXCJLZW50dWNreVwiXG4gICAgLCBwZXJzb24gXCJVbHlzc2VzIFMuIEdyYW50XCIgMTgyMiBcIlBvaW50IFBsZWFzYW50XCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlJ1dGhlcmZvcmQgQi4gSGF5ZXNcIiAxODIyIFwiRGVsYXdhcmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQ2hlc3RlciBBLiBBcnRodXJcIiAxODI5IFwiRmFpcmZpZWxkXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEEuIEdhcmZpZWxkXCIgMTgzMSBcIk1vcmVsYW5kIEhpbGxzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkJlbmphbWluIEhhcnJpc29uXCIgMTgzMyBcIk5vcnRoIEJlbmRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiR3JvdmVyIENsZXZlbGFuZFwiIDE4MzcgXCJDYWxkd2VsbFwiIFwiTmV3IEplcnNleVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIE1jS2lubGV5XCIgMTg0MyBcIk5pbGVzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIldvb2Ryb3cgV2lsc29uXCIgMTg1NiBcIlN0YXVudG9uXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhvd2FyZCBUYWZ0XCIgMTg1NyBcIkNpbmNpbm5hdGlcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiVGhlb2RvcmUgUm9vc2V2ZWx0XCIgMTg1OCBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIldhcnJlbiBHLiBIYXJkaW5nXCIgMTg2NSBcIkJsb29taW5nIEdyb3ZlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNhbHZpbiBDb29saWRnZVwiIDE4NzIgXCJQbHltb3V0aFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJIZXJiZXJ0IEhvb3ZlclwiIDE4NzQgXCJXZXN0IEJyYW5jaFwiIFwiSW93YVwiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBELiBSb29zZXZlbHRcIiAxODgyIFwiSHlkZSBQYXJrXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJIYXJyeSBTLiBUcnVtYW5cIiAxODg0IFwiTGFtYXJcIiBcIk1pc3NvdXJpXCJcbiAgICAsIHBlcnNvbiBcIkR3aWdodCBELiBFaXNlbmhvd2VyXCIgMTg5MCBcIkRlbmlzb25cIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIkx5bmRvbiBCLiBKb2huc29uXCIgMTkwOCBcIlN0b25ld2FsbFwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uIFwiUm9uYWxkIFJlYWdhblwiIDE5MTEgXCJUYW1waWNvXCIgXCJJbGxpbm9pc1wiXG4gICAgLCBwZXJzb24gXCJSaWNoYXJkIE0uIE5peG9uXCIgMTkxMyBcIllvcmJhIExpbmRhXCIgXCJDYWxpZm9ybmlhXCJcbiAgICAsIHBlcnNvbiBcIkdlcmFsZCBSLiBGb3JkXCIgMTkxMyBcIk9tYWhhXCIgXCJOZWJyYXNrYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEYuIEtlbm5lZHlcIiAxOTE3IFwiQnJvb2tsaW5lXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBILiBXLiBCdXNoXCIgMTkyNCBcIk1pbHRvblwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJKaW1teSBDYXJ0ZXJcIiAxOTI0IFwiUGxhaW5zXCIgXCJHZW9yZ2lhXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBXLiBCdXNoXCIgMTk0NiBcIk5ldyBIYXZlblwiIFwiQ29ubmVjdGljdXRcIlxuICAgICwgcGVyc29uIFwiQmlsbCBDbGludG9uXCIgMTk0NiBcIkhvcGVcIiBcIkFya2Fuc2FzXCJcbiAgICAsIHBlcnNvbiBcIkJhcmFjayBPYmFtYVwiIDE5NjEgXCJIb25vbHVsdVwiIFwiSGF3YWlpXCJcbiAgICAsIHBlcnNvbiBcIkRvbmFsZCBUcnVtcFwiIDE5NDYgXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgXVxuIiwKICAgICAgICAibW9kdWxlIEV4YW1wbGUuUHJlc2lkZW50cyBleHBvc2luZyAoTW9kZWwsIE1zZyguLiksIFBlcnNvbiwgY29uZmlnLCBpbml0LCBtYWluLCBwcmVzaWRlbnRzLCB1cGRhdGUsIHZpZXcpXG5cbmltcG9ydCBCcm93c2VyXG5pbXBvcnQgRGF0YVRhYmxlIGFzIFRhYmxlXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoSHRtbCwgZGl2LCBoMSwgaW5wdXQsIGxpLCB0ZXh0LCB1bClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmcgKHBsYWNlaG9sZGVyKVxuaW1wb3J0IEh0bWwuRXZlbnRzIGV4cG9zaW5nIChvbklucHV0KVxuXG5cbm1haW4gOiBQcm9ncmFtIHt9IE1vZGVsIE1zZ1xubWFpbiA9XG4gICAgQnJvd3Nlci5zYW5kYm94XG4gICAgICAgIHsgaW5pdCA9IGluaXQgcHJlc2lkZW50c1xuICAgICAgICAsIHVwZGF0ZSA9IHVwZGF0ZVxuICAgICAgICAsIHZpZXcgPSB2aWV3XG4gICAgICAgIH1cblxuXG5cbi0tIE1PREVMXG5cblxudHlwZSBhbGlhcyBNb2RlbCA9XG4gICAgeyBwZW9wbGUgOiBBcnJheSBQZXJzb25cbiAgICAsIHRhYmxlU3RhdGUgOiBUYWJsZS5TdGF0ZVxuICAgICwgcXVlcnkgOiBTdHJpbmdcbiAgICB9XG5cblxuaW5pdCA6IEFycmF5IFBlcnNvbiAtPiBNb2RlbFxuaW5pdCBwZW9wbGUgPVxuICAgIGxldFxuICAgICAgICBtb2RlbCA9XG4gICAgICAgICAgICB7IHBlb3BsZSA9IHBlb3BsZVxuICAgICAgICAgICAgLCB0YWJsZVN0YXRlID0gVGFibGUuaW5pdGlhbFNvcnQgXCJTdGF0ZVwiXG4gICAgICAgICAgICAsIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgIGluXG4gICAgbW9kZWxcblxuXG5cbi0tIFVQREFURVxuXG5cbnR5cGUgTXNnXG4gICAgPSBTZXRRdWVyeSBTdHJpbmdcbiAgICB8IFNldFRhYmxlU3RhdGUgVGFibGUuU3RhdGVcblxuXG51cGRhdGUgOiBNc2cgLT4gTW9kZWwgLT4gTW9kZWxcbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFNldFF1ZXJ5IG5ld1F1ZXJ5IC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgcXVlcnkgPSBuZXdRdWVyeSB9XG5cbiAgICAgICAgU2V0VGFibGVTdGF0ZSBuZXdTdGF0ZSAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHRhYmxlU3RhdGUgPSBuZXdTdGF0ZSB9XG5cblxuXG4tLSBWSUVXXG5cblxudmlldyA6IE1vZGVsIC0+IEh0bWwgTXNnXG52aWV3IHsgcGVvcGxlLCB0YWJsZVN0YXRlLCBxdWVyeSB9ID1cbiAgICBsZXRcbiAgICAgICAgbG93ZXJRdWVyeSA9XG4gICAgICAgICAgICBTdHJpbmcudG9Mb3dlciBxdWVyeVxuXG4gICAgICAgIGFjY2VwdGFibGVQZW9wbGUgPVxuICAgICAgICAgICAgQXJyYXkua2VlcElmIChTdHJpbmcuY29udGFpbnMgbG93ZXJRdWVyeSA8PCBTdHJpbmcudG9Mb3dlciA8PCAubmFtZSkgcGVvcGxlXG4gICAgaW5cbiAgICBkaXYgW11cbiAgICAgICAgWyBoMSBbXSBbIHRleHQgXCJTb3J0YWJsZSB0YWJsZS5cIiBdXG4gICAgICAgICwgdWwgW11cbiAgICAgICAgICAgIFsgbGkgW10gWyB0ZXh0IFwiU2luZ2xlIGNsaWNrIHRvIChyZSlzZXQgdGhlIHNvcnQgb3JkZXIgdG8gdGhhdCBjb2x1bW4uXCIgXVxuICAgICAgICAgICAgLCB1bCBbXVxuICAgICAgICAgICAgICAgIFsgbGkgW10gWyB0ZXh0IFwiSWYgdGhlIGNvbHVtbiB3YXMgc2VsZWN0ZWQgYWxyZWFkeSwgdGhlIHNvcnQgb3JkZXIgaXMgcmV2ZXJzZWQuXCIgXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiTG9uZyBjbGljayBvbiBjb2x1bW4gaGVhZGVyIHRvIGFkZCB0aGF0IGNvbHVtbiB0byB0aGUgZW5kIG9mIHRoZSBzb3J0IG9yZGVyICguLi50aGVuIHNvcnQgYnkgWWVhcikuXCIgXVxuICAgICAgICAgICAgLCB1bCBbXVxuICAgICAgICAgICAgICAgIFsgbGkgW10gWyB0ZXh0IFwiSWYgdGhlIGNvbHVtbiB3YXMgc2VsZWN0ZWQgYWxyZWFkeSwgaXQgaXMgbW92ZWQgdG8gdGhlIGVuZCBvZiB0aGUgc29ydCBvcmRlciBzZXF1ZW5jZVwiIF1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgICwgaDEgW10gWyB0ZXh0IFwiQmlydGhwbGFjZXMgb2YgVS5TLiBQcmVzaWRlbnRzXCIgXVxuICAgICAgICAsIGlucHV0IFsgcGxhY2Vob2xkZXIgXCJTZWFyY2ggYnkgTmFtZVwiLCBvbklucHV0IFNldFF1ZXJ5IF0gW11cbiAgICAgICAgLCBUYWJsZS52aWV3IGNvbmZpZyB0YWJsZVN0YXRlIGFjY2VwdGFibGVQZW9wbGVcbiAgICAgICAgXVxuXG5cbmNvbmZpZyA6IFRhYmxlLkNvbmZpZyBQZXJzb24gTXNnXG5jb25maWcgPVxuICAgIFRhYmxlLmNvbmZpZ1xuICAgICAgICB7IHRvSWQgPSAubmFtZVxuICAgICAgICAsIHRvTXNnID0gU2V0VGFibGVTdGF0ZVxuICAgICAgICAsIGNvbHVtbnMgPVxuICAgICAgICAgICAgWyBUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgVGFibGUuaW50Q29sdW1uIFwiWWVhclwiIC55ZWFyXG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIkNpdHlcIiAuY2l0eVxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJTdGF0ZVwiIC5zdGF0ZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cblxuXG4tLSBQRU9QTEVcblxuXG50eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB5ZWFyIDogSW50XG4gICAgLCBjaXR5IDogU3RyaW5nXG4gICAgLCBzdGF0ZSA6IFN0cmluZ1xuICAgIH1cblxuXG5wZXJzb24gbmFtZSB5ZWFyIGNpdHkgc3RhdGUgPVxuICAgIHsgbmFtZSA9IG5hbWUsIHllYXIgPSB5ZWFyLCBjaXR5ID0gY2l0eSwgc3RhdGUgPSBzdGF0ZSB9XG5cblxucHJlc2lkZW50cyA6IEFycmF5IFBlcnNvblxucHJlc2lkZW50cyA9XG4gICAgWyBwZXJzb24gXCJHZW9yZ2UgV2FzaGluZ3RvblwiIDE3MzIgXCJXZXN0bW9yZWxhbmQgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEFkYW1zXCIgMTczNSBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJUaG9tYXMgSmVmZmVyc29uXCIgMTc0MyBcIlNoYWR3ZWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNYWRpc29uXCIgMTc1MSBcIlBvcnQgQ29ud2F5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNb25yb2VcIiAxNzU4IFwiTW9ucm9lIEhhbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKYWNrc29uXCIgMTc2NyBcIldheGhhd3MgUmVnaW9uXCIgXCJTb3V0aC9Ob3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIFF1aW5jeSBBZGFtc1wiIDE3NjcgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIZW5yeSBIYXJyaXNvblwiIDE3NzMgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJNYXJ0aW4gVmFuIEJ1cmVuXCIgMTc4MiBcIktpbmRlcmhvb2tcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIlphY2hhcnkgVGF5bG9yXCIgMTc4NCBcIkJhcmJvdXJzdmlsbGVcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gVHlsZXJcIiAxNzkwIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgQnVjaGFuYW5cIiAxNzkxIFwiQ292ZSBHYXBcIiBcIlBlbm5zeWx2YW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBLLiBQb2xrXCIgMTc5NSBcIlBpbmV2aWxsZVwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiTWlsbGFyZCBGaWxsbW9yZVwiIDE4MDAgXCJTdW1tZXJoaWxsXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBQaWVyY2VcIiAxODA0IFwiSGlsbHNib3JvdWdoXCIgXCJOZXcgSGFtcHNoaXJlXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKb2huc29uXCIgMTgwOCBcIlJhbGVpZ2hcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkFicmFoYW0gTGluY29sblwiIDE4MDkgXCJTaW5raW5nIHNwcmluZ1wiIFwiS2VudHVja3lcIlxuICAgICwgcGVyc29uIFwiVWx5c3NlcyBTLiBHcmFudFwiIDE4MjIgXCJQb2ludCBQbGVhc2FudFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJSdXRoZXJmb3JkIEIuIEhheWVzXCIgMTgyMiBcIkRlbGF3YXJlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNoZXN0ZXIgQS4gQXJ0aHVyXCIgMTgyOSBcIkZhaXJmaWVsZFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBBLiBHYXJmaWVsZFwiIDE4MzEgXCJNb3JlbGFuZCBIaWxsc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJCZW5qYW1pbiBIYXJyaXNvblwiIDE4MzMgXCJOb3J0aCBCZW5kXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkdyb3ZlciBDbGV2ZWxhbmRcIiAxODM3IFwiQ2FsZHdlbGxcIiBcIk5ldyBKZXJzZXlcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBNY0tpbmxleVwiIDE4NDMgXCJOaWxlc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJXb29kcm93IFdpbHNvblwiIDE4NTYgXCJTdGF1bnRvblwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIb3dhcmQgVGFmdFwiIDE4NTcgXCJDaW5jaW5uYXRpXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlRoZW9kb3JlIFJvb3NldmVsdFwiIDE4NTggXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJXYXJyZW4gRy4gSGFyZGluZ1wiIDE4NjUgXCJCbG9vbWluZyBHcm92ZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJDYWx2aW4gQ29vbGlkZ2VcIiAxODcyIFwiUGx5bW91dGhcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uIFwiSGVyYmVydCBIb292ZXJcIiAxODc0IFwiV2VzdCBCcmFuY2hcIiBcIklvd2FcIlxuICAgICwgcGVyc29uIFwiRnJhbmtsaW4gRC4gUm9vc2V2ZWx0XCIgMTg4MiBcIkh5ZGUgUGFya1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiSGFycnkgUy4gVHJ1bWFuXCIgMTg4NCBcIkxhbWFyXCIgXCJNaXNzb3VyaVwiXG4gICAgLCBwZXJzb24gXCJEd2lnaHQgRC4gRWlzZW5ob3dlclwiIDE4OTAgXCJEZW5pc29uXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb24gXCJMeW5kb24gQi4gSm9obnNvblwiIDE5MDggXCJTdG9uZXdhbGxcIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIlJvbmFsZCBSZWFnYW5cIiAxOTExIFwiVGFtcGljb1wiIFwiSWxsaW5vaXNcIlxuICAgICwgcGVyc29uIFwiUmljaGFyZCBNLiBOaXhvblwiIDE5MTMgXCJZb3JiYSBMaW5kYVwiIFwiQ2FsaWZvcm5pYVwiXG4gICAgLCBwZXJzb24gXCJHZXJhbGQgUi4gRm9yZFwiIDE5MTMgXCJPbWFoYVwiIFwiTmVicmFza2FcIlxuICAgICwgcGVyc29uIFwiSm9obiBGLiBLZW5uZWR5XCIgMTkxNyBcIkJyb29rbGluZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgSC4gVy4gQnVzaFwiIDE5MjQgXCJNaWx0b25cIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiSmltbXkgQ2FydGVyXCIgMTkyNCBcIlBsYWluc1wiIFwiR2VvcmdpYVwiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgVy4gQnVzaFwiIDE5NDYgXCJOZXcgSGF2ZW5cIiBcIkNvbm5lY3RpY3V0XCJcbiAgICAsIHBlcnNvbiBcIkJpbGwgQ2xpbnRvblwiIDE5NDYgXCJIb3BlXCIgXCJBcmthbnNhc1wiXG4gICAgLCBwZXJzb24gXCJCYXJhY2sgT2JhbWFcIiAxOTYxIFwiSG9ub2x1bHVcIiBcIkhhd2FpaVwiXG4gICAgLCBwZXJzb24gXCJEb25hbGQgVHJ1bXBcIiAxOTQ2IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgIF1cblxuXG5cbi0tIGh0dHBzOi8vZGF0YS5zdGFkdC16dWVyaWNoLmNoL2FwaS8zL2FjdGlvbi9kYXRhc3RvcmVfc2VhcmNoX3NxbD9zcWw9V0lUSCUyMG1hbGUlMjBBUyUyMChTRUxFQ1QlMjBTVU0oJTIyQW56R2VidVdpciUyMjo6aW50KSUyMEFTJTIwbWNvdW50LCUyMCUyMlZvcm5hbWUlMjIlMjBmcm9tJTIwJTIyN2FiZjg1NjItNDU2OC00YzhjLThmMWYtYTg0MmE1YTU0NjE2JTIyJTIwV0hFUkUlMjAlMjJTZXhMYW5nJTIyJTIwPSUyMCUyN20lQzMlQTRubmxpY2glMjclMjBHUk9VUCUyMEJZJTIwJTIyVm9ybmFtZSUyMiksJTIwZmVtYWxlJTIwQVMlMjAoU0VMRUNUJTIwU1VNKCUyMkFuekdlYnVXaXIlMjI6OmludCklMjBBUyUyMGZjb3VudCwlMjAlMjJWb3JuYW1lJTIyJTIwZnJvbSUyMCUyMjdhYmY4NTYyLTQ1NjgtNGM4Yy04ZjFmLWE4NDJhNWE1NDYxNiUyMiUyMFdIRVJFJTIwJTIyU2V4TGFuZyUyMiUyMD0lMjAlMjd3ZWlibGljaCUyNyUyMEdST1VQJTIwQlklMjAlMjJWb3JuYW1lJTIyKSUyMFNFTEVDVCUyMG1jb3VudCwlMjBmY291bnQsJTIwKG1jb3VudDo6ZGVjaW1hbC9mY291bnQ6OmRlY2ltYWwpJTIwQVMlMjBxdW90aWVudCwlMjBtYWxlLiUyMlZvcm5hbWUlMjIlMjBGUk9NJTIwbWFsZSUyMElOTkVSJTIwSk9JTiUyMGZlbWFsZSUyME9OJTIwbWFsZS4lMjJWb3JuYW1lJTIyJTIwPSUyMGZlbWFsZS4lMjJWb3JuYW1lJTIyJTIwV0hFUkUlMjBtY291bnQlMjAlM0UlMjAxJTIwQU5EJTIwZmNvdW50JTIwJTNFJTIwMSUyME9SREVSJTIwQlklMjBxdW90aWVudCUyMERFU0MlMjBMSU1JVCUyMDEwMDBcbiIsCiAgICAgICAgIm1vZHVsZSBEb2NCb29rIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgaW5pdCwgbWFpbiwgdXBkYXRlLCB2aWV3KVxuXG5pbXBvcnQgQnJvd3NlclxuaW1wb3J0IEV4YW1wbGUuUGFnaW5hdGVkIGFzIFBhZ2luYXRlZFxuaW1wb3J0IEV4YW1wbGUuUHJlc2lkZW50cyBhcyBQcmVzaWRlbnRzXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoSHRtbClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmcgKGNsYXNzLCBpZCwgc3R5bGUpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uQ2xpY2spXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdFxuICAgICAgICAsIHVwZGF0ZSA9IHVwZGF0ZVxuICAgICAgICAsIHZpZXcgPSB2aWV3XG4gICAgICAgIH1cblxuXG50eXBlIE1zZ1xuICAgID0gU3dpdGNoRXhhbXBsZSBFeGFtcGxlU2hvd25cbiAgICB8IFByZXNpZGVudHNNc2cgUHJlc2lkZW50cy5Nc2dcbiAgICB8IFBhZ2luYXRlZE1zZyBQYWdpbmF0ZWQuTXNnXG5cblxuaW5pdCA9XG4gICAgeyBhY3RpdmVFeGFtcGxlID0gU2hvd1ByZXNpZGVudHNcbiAgICAsIHByZXNpZGVudHMgPSBQcmVzaWRlbnRzLmluaXQgUHJlc2lkZW50cy5wcmVzaWRlbnRzXG4gICAgLCBwYWdpbmF0ZWQgPSBQYWdpbmF0ZWQuaW5pdCBQYWdpbmF0ZWQucHJlc2lkZW50c1xuICAgIH1cblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IGFjdGl2ZUV4YW1wbGUgOiBFeGFtcGxlU2hvd25cbiAgICAsIHByZXNpZGVudHMgOiBQcmVzaWRlbnRzLk1vZGVsXG4gICAgLCBwYWdpbmF0ZWQgOiBQYWdpbmF0ZWQuTW9kZWxcbiAgICB9XG5cblxudmlldyA6IE1vZGVsIC0+IEh0bWwgTXNnXG52aWV3IG1vZGVsID1cbiAgICBsZXRcbiAgICAgICAgaXNBY3RpdmUgdmFyaWFudCA9XG4gICAgICAgICAgICBpZiBtb2RlbC5hY3RpdmVFeGFtcGxlID09IHZhcmlhbnQgdGhlblxuICAgICAgICAgICAgICAgIFsgY2xhc3MgXCJhY3RpdmVcIiwgSHRtbC5BdHRyaWJ1dGVzLnRhYmluZGV4IC0xIF1cblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIFtdXG5cbiAgICAgICAgdmFyaWFudHMgPVxuICAgICAgICAgICAgQXJyYXkubWFwXG4gICAgICAgICAgICAgICAgKFxcdmFyaWFudCAtPiBIdG1sLmJ1dHRvbiAoWyBvbkNsaWNrIDx8IFN3aXRjaEV4YW1wbGUgdmFyaWFudCBdICsrIGlzQWN0aXZlIHZhcmlhbnQpIFsgSHRtbC50ZXh0IDx8IGV4YW1wbGVOYW1lIHZhcmlhbnQgXSlcbiAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgaW5cbiAgICBIdG1sLmRpdiBbIGlkIFwid3JhcHBlclwiIF1cbiAgICAgICAgWyBIdG1sLm5hdiBbIGlkIFwibmF2aWdhdGlvblwiIF0gKFsgSHRtbC5oMyBbXSBbIEh0bWwudGV4dCBcIkV4YW1wbGVzXCIgXSBdICsrIHZhcmlhbnRzKVxuICAgICAgICAsIEh0bWwuYXJ0aWNsZSBbIGlkIFwiZXhhbXBsZVwiIF1cbiAgICAgICAgICAgIFsgd2hlbiBtb2RlbC5hY3RpdmVFeGFtcGxlIGlzXG4gICAgICAgICAgICAgICAgU2hvd1ByZXNpZGVudHMgLT5cbiAgICAgICAgICAgICAgICAgICAgUHJlc2lkZW50cy52aWV3IG1vZGVsLnByZXNpZGVudHMgfD4gSHRtbC5tYXAgUHJlc2lkZW50c01zZ1xuXG4gICAgICAgICAgICAgICAgU2hvd1BhZ2luYXRlZCAtPlxuICAgICAgICAgICAgICAgICAgICBQYWdpbmF0ZWQudmlldyBtb2RlbC5wYWdpbmF0ZWQgfD4gSHRtbC5tYXAgUGFnaW5hdGVkTXNnXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cblxuXG51cGRhdGUgOiBNc2cgLT4gTW9kZWwgLT4gTW9kZWxcbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFN3aXRjaEV4YW1wbGUgZXhhbXBsZVRvU3dpdGNoVG8gLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBhY3RpdmVFeGFtcGxlID0gZXhhbXBsZVRvU3dpdGNoVG8gfVxuXG4gICAgICAgIFByZXNpZGVudHNNc2cgZXhhbXBsZU1zZyAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHByZXNpZGVudHMgPSBQcmVzaWRlbnRzLnVwZGF0ZSBleGFtcGxlTXNnIDx8IC5wcmVzaWRlbnRzIG1vZGVsIH1cblxuICAgICAgICBQYWdpbmF0ZWRNc2cgZXhhbXBsZU1zZyAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHBhZ2luYXRlZCA9IFBhZ2luYXRlZC51cGRhdGUgZXhhbXBsZU1zZyA8fCAucGFnaW5hdGVkIG1vZGVsIH1cblxuXG50eXBlIEV4YW1wbGVTaG93blxuICAgID0gU2hvd1ByZXNpZGVudHNcbiAgICB8IFNob3dQYWdpbmF0ZWRcblxuXG5idXR0b25zID1cbiAgICAtLSBkb24ndCBmb3JnZXQgdG8gYWRkIHRoZSBleGFtcGxlIHRvIHRoaXMgbGlzdCwgb3RoZXJ3aXNlIGl0IHdvbid0IHNob3cgdXAuLi5cbiAgICBbIFNob3dQcmVzaWRlbnRzLCBTaG93UGFnaW5hdGVkIF1cblxuXG5leGFtcGxlTmFtZSA6IEV4YW1wbGVTaG93biAtPiBTdHJpbmdcbmV4YW1wbGVOYW1lIHZhcmlhbnQgPVxuICAgIHdoZW4gdmFyaWFudCBpc1xuICAgICAgICBTaG93UHJlc2lkZW50cyAtPlxuICAgICAgICAgICAgXCJTb3J0aW5nXCJcblxuICAgICAgICBTaG93UGFnaW5hdGVkIC0+XG4gICAgICAgICAgICBcIlBhZ2luYXRpb25cIlxuIiwKICAgICAgICAibW9kdWxlIFN0cmluZyBleHBvc2luZ1xuICAgICggU3RyaW5nLCBpc0VtcHR5LCBjb3VudCwgcmV2ZXJzZSwgcmVwZWF0LCByZXBsYWNlXG4gICAgLCBwcmVwZW5kLCBhcHBlbmQsIHNwbGl0LCBqb2luLCB3b3JkcywgbGluZXNcbiAgICAsIHNsaWNlLCB0YWtlRmlyc3QsIHRha2VMYXN0LCBkcm9wRmlyc3QsIGRyb3BMYXN0XG4gICAgLCBjb250YWlucywgc3RhcnRzV2l0aCwgZW5kc1dpdGgsIGZpcnN0SW5kZXhPZiwgbGFzdEluZGV4T2YsIGluZGljZXNcbiAgICAsIHRvSW50LCBmcm9tSW50XG4gICAgLCB0b0Zsb2F0LCBmcm9tRmxvYXRcbiAgICAsIGZyb21DaGFyLCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdFxuICAgICwgdG9BcnJheSwgZnJvbUFycmF5XG4gICAgLCB0b1VwcGVyLCB0b0xvd2VyLCBwYWQsIHBhZExlZnQsIHBhZFJpZ2h0LCB0cmltLCB0cmltTGVmdCwgdHJpbVJpZ2h0XG4gICAgLCBtYXAsIGtlZXBJZiwgZm9sZGwsIGZvbGRyLCBhbnksIGFsbFxuICAgICwgdW5pdExlbmd0aCwgZ2V0VW5pdCwgZm9sZGxVbml0cywgZm9sZHJVbml0c1xuICAgIClcblxuey18IEEgYnVpbHQtaW4gcmVwcmVzZW50YXRpb24gZm9yIGVmZmljaWVudCBzdHJpbmcgbWFuaXB1bGF0aW9uLiBXaGVuIGl0IGNvbWVzIHRvIHN0cmluZ3MsXG50aGVyZSBhcmUgdGhyZWUgY29uY2VwdHMgd29ydGgga25vd2luZyBhYm91dDpcblxuKiBDb2RlIHVuaXRzOiByZXByZXNlbnRzIHRoZSBzbWFsbGVzdCBwcmltaXRpdmUgdmFsdWUgb2YgYSBzdHJpbmcuIEluIEdyZW4sXG5jb2RlIHVuaXRzIGFyZSByZXByZXNlbnRlZCBieSBhIDE2LWJpdCB2YWx1ZS4gVGhpcyBpcyBlbm91Z2ggdG8gc3RvcmUgdGhlIG1vc3QgY29tbW9uXG5jaGFyYWN0ZXJzIGluIHdlc3Rlcm4gbGFuZ3VhZ2VzIChMYXRpbiwgR3JlZWssIEN5cmlsaWMpLCBidXQgbm90IGFsbCB1bmljb2RlIGNoYXJhY3RlcnMuXG4qIENvZGUgcG9pbnRzOiByZXByZXNlbnRzIGEgdW5pY29kZSBjaGFyYWN0ZXIuIENvZGUgcG9pbnRzIGNhbiBiZSByZXByZXNlbnRlZCBieSBvbmVcbnVuaXQsIG9yIGEgcGFpciBvZiB1bml0cy5cbiogR3JhcGhlbWVzOiByZXByZXNlbnRzIGEgc2luZ2xlIHZpc3VhbCBnbHlwaCwgbGlrZSBjZXJ0YWluIGVtb2ppcyBvciBjaGFyYWN0ZXJzIHdpdGhcbmFjY2VudHMuXG5cblVubGVzcyBvdGhlcndpc2Ugbm90ZWQsIGFsbCBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCB3aXRoIGNvZGUgcG9pbnRzLlxuXG5cbkBkb2NzIFN0cmluZywgaXNFbXB0eSwgY291bnQsIHJldmVyc2UsIHJlcGVhdCwgcmVwbGFjZVxuXG5cbiMjIEJ1aWxkaW5nIGFuZCBTcGxpdHRpbmdcblxuQGRvY3MgcHJlcGVuZCwgYXBwZW5kLCBzcGxpdCwgam9pbiwgd29yZHMsIGxpbmVzXG5cblxuIyMgR2V0IFN1YnN0cmluZ3NcblxuQGRvY3Mgc2xpY2UsIHRha2VGaXJzdCwgdGFrZUxhc3QsIGRyb3BGaXJzdCwgZHJvcExhc3RcblxuXG4jIyBDaGVjayBmb3IgU3Vic3RyaW5nc1xuXG5AZG9jcyBjb250YWlucywgc3RhcnRzV2l0aCwgZW5kc1dpdGgsIGZpcnN0SW5kZXhPZiwgbGFzdEluZGV4T2YsIGluZGljZXNcblxuXG4jIyBJbnQgQ29udmVyc2lvbnNcblxuQGRvY3MgdG9JbnQsIGZyb21JbnRcblxuXG4jIyBGbG9hdCBDb252ZXJzaW9uc1xuXG5AZG9jcyB0b0Zsb2F0LCBmcm9tRmxvYXRcblxuXG4jIyBDaGFyIENvbnZlcnNpb25zXG5cbkBkb2NzIGZyb21DaGFyLCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdFxuXG5cbiMjIEFycmF5IENvbnZlcnNpb25zXG5cbkBkb2NzIHRvQXJyYXksIGZyb21BcnJheVxuXG5cbiMjIEZvcm1hdHRpbmdcblxuQ29zbWV0aWMgb3BlcmF0aW9ucyBzdWNoIGFzIHBhZGRpbmcgd2l0aCBleHRyYSBjaGFyYWN0ZXJzIG9yIHRyaW1taW5nIHdoaXRlc3BhY2UuXG5cbkBkb2NzIHRvVXBwZXIsIHRvTG93ZXIsIHBhZCwgcGFkTGVmdCwgcGFkUmlnaHQsIHRyaW0sIHRyaW1MZWZ0LCB0cmltUmlnaHRcblxuIyMgSGlnaGVyLU9yZGVyIEZ1bmN0aW9uc1xuXG5AZG9jcyBtYXAsIGtlZXBJZiwgZm9sZGwsIGZvbGRyLCBhbnksIGFsbFxuXG4jIyBDaGFyIFVuaXRzXG5cbkZ1bmN0aW9ucyB0aGF0IG9wZXJhdGVzIG9uIHVuaXRzIGluc3RlYWQgb2YgY29kZSBwb2ludHMuXG5cbkBkb2NzIHVuaXRMZW5ndGgsIGdldFVuaXQsIGZvbGRsVW5pdHMsIGZvbGRyVW5pdHNcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IE1hdGggZXhwb3NpbmcgKGZsb29yLCBjZWlsaW5nKVxuaW1wb3J0IEJpdHdpc2VcbmltcG9ydCBDaGFyIGV4cG9zaW5nIChDaGFyKVxuaW1wb3J0IEdyZW4uS2VybmVsLlN0cmluZ1xuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSlcbmltcG9ydCBSZXN1bHQgZXhwb3NpbmcgKFJlc3VsdClcblxuXG5cbi0tIFNUUklOR1NcblxuXG57LXwgQSBgU3RyaW5nYCBpcyBhIGNodW5rIG9mIHRleHQuIGBTdHJpbmdgIGxpdGVyYWxzIGFyZSBlbmNsb3NlZCBpbiBgXCJkb3VibGUgcXVvdGVzXCJgLlxuXG4gICAgXCJIZWxsbyFcIlxuXG4gICAgXCJIb3cgYXJlIHlvdT9cIlxuXG4gICAgXCLwn5mI8J+ZifCfmYpcIlxuXG4gICAgLS0gc3RyaW5ncyB3aXRoIGVzY2FwZSBjaGFyYWN0ZXJzXG4gICAgXCJ0aGlzXFxuXFx0XFxcInRoYXRcXFwiXCJcblxuICAgIFwi8J+ZiPCfmYnwn5mKXCIgLS0gXCLwn5mI8J+ZifCfmYpcIlxuXG4gICAgLS0gbXVsdGlsaW5lIHN0cmluZ3NcbiAgICBcIlwiXCJUcmlwbGUgZG91YmxlIHF1b3RlcyBsZXQgeW91XG4gICAgY3JlYXRlIFwibXVsdGlsaW5lIHN0cmluZ3NcIiB3aGljaFxuICAgIGNhbiBoYXZlIHVuZXNjYXBlZCBxdW90ZXMgYW5kIG5ld2xpbmVzLlxuICAgIFwiXCJcIlxuXG5BIGBTdHJpbmdgIGNhbiByZXByZXNlbnQgYW55IHNlcXVlbmNlIG9mIFt1bmljb2RlIGNoYXJhY3RlcnNdW3VdLiBZb3UgY2FuIHVzZVxudGhlIHVuaWNvZGUgZXNjYXBlcyBmcm9tIGBcXHV7MDAwMH1gIHRvIGBcXHV7MTBGRkZGfWAgdG8gcmVwcmVzZW50IGNoYXJhY3RlcnNcbmJ5IHRoZWlyIGNvZGUgcG9pbnQuIFlvdSBjYW4gYWxzbyBpbmNsdWRlIHRoZSB1bmljb2RlIGNoYXJhY3RlcnMgZGlyZWN0bHkuXG5Vc2luZyB0aGUgZXNjYXBlcyBjYW4gYmUgYmV0dGVyIGlmIHlvdSBuZWVkIG9uZSBvZiB0aGUgbWFueSB3aGl0ZXNwYWNlXG5jaGFyYWN0ZXJzIHdpdGggZGlmZmVyZW50IHdpZHRocy5cblxuW3VdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmljb2RlXG5cbioqTm90ZToqKiBKYXZhU2NyaXB0IGxldHMgeW91IHVzZSBkb3VibGUgcXVvdGVzIGFuZCBzaW5nbGUgcXVvdGVzIGludGVyY2hhbmdhYmx5LlxuVGhpcyBpcyBub3QgdHJ1ZSBpbiBHcmVuLiBZb3UgbXVzdCB1c2UgZG91YmxlIHF1b3RlcyBmb3IgYSBgU3RyaW5nYCwgYW5kIHlvdSBtdXN0XG51c2Ugc2luZ2xlIHF1b3RlcyBmb3IgYSBbYENoYXJgXShDaGFyI0NoYXIpLlxuXG4tfVxudHlwZSBTdHJpbmdcbiAgICA9IFN0cmluZyAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuey18IERldGVybWluZSBpZiBhIHN0cmluZyBpcyBlbXB0eS5cblxuICAgIGlzRW1wdHkgXCJcIiA9PSBUcnVlXG5cbiAgICBpc0VtcHR5IFwidGhlIHdvcmxkXCIgPT0gRmFsc2VcblxuLX1cbmlzRW1wdHkgOiBTdHJpbmcgLT4gQm9vbFxuaXNFbXB0eSBzdHJpbmcgPVxuICAgIHN0cmluZyA9PSBcIlwiXG5cblxuey18IENvdW50IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBhIHN0cmluZy5cblxuICAgIGNvdW50IFwiaW5udW1lcmFibGVcIiA9PSAxMVxuXG4gICAgY291bnQgXCJcIiA9PSAwXG5cbi19XG5jb3VudCA6IFN0cmluZyAtPiBJbnRcbmNvdW50IHN0cmluZyA9XG4gICAgZm9sZGwgKFxcXyBudW0gLT4gbnVtICsgMSkgMCBzdHJpbmdcblxuXG57LXwgUmV2ZXJzZSBhIHN0cmluZy5cblxuICAgIHJldmVyc2UgXCJzdHJlc3NlZFwiID09IFwiZGVzc2VydHNcIlxuXG4tfVxucmV2ZXJzZSA6IFN0cmluZyAtPiBTdHJpbmdcbnJldmVyc2Ugc3RyID1cbiAgICB0b0FycmF5IHN0clxuICAgICAgICB8PiBBcnJheS5yZXZlcnNlXG4gICAgICAgIHw+IGZyb21BcnJheVxuXG5cbnstfCBSZXBlYXQgYSBzdHJpbmcgX25fIHRpbWVzLlxuXG4gICAgcmVwZWF0IDMgXCJoYVwiID09IFwiaGFoYWhhXCJcblxuLX1cbnJlcGVhdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5yZXBlYXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5yZXBlYXRcblxuXG57LXwgUmVwbGFjZSBhbGwgb2NjdXJyZW5jZXMgb2Ygc29tZSBzdWJzdHJpbmcuXG5cbiAgICByZXBsYWNlIFwiLlwiIFwiLVwiIFwiSnNvbi5EZWNvZGUuc3VjY2VlZFwiID09IFwiSnNvbi1EZWNvZGUtc3VjY2VlZFwiXG5cbiAgICByZXBsYWNlIFwiLFwiIFwiL1wiIFwiYSxiLGMsZCxlXCIgPT0gXCJhL2IvYy9kL2VcIlxuXG4qKk5vdGU6KiogSWYgeW91IG5lZWQgbW9yZSBhZHZhbmNlZCByZXBsYWNlbWVudHMsIGNoZWNrIG91dCB0aGVcbltgZ3Jlbi1sYW5nL3BhcnNlcmBdW3BhcnNlcl0gcGFja2FnZSBvciBbYFN0cmluZy5SZWdleGBdW3JlZ2V4XSBtb2R1bGUuXG5cbltwYXJzZXJdOiAvcGFja2FnZS9ncmVuLWxhbmcvcGFyc2VyXG5bcmVnZXhdOiBTdHJpbmcuUmVnZXhcblxuLX1cbnJlcGxhY2UgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbnJlcGxhY2UgYmVmb3JlIGFmdGVyIHN0cmluZyA9XG4gICAgam9pbiBhZnRlciAoc3BsaXQgYmVmb3JlIHN0cmluZylcblxuXG5cbi0tIEJVSUxESU5HIEFORCBTUExJVFRJTkdcblxuXG57LXwgQ29tYmluZSB0d28gc3RyaW5ncy4gWW91IGNhbiBhbHNvIHVzZSBbdGhlIGAoKyspYCBvcGVyYXRvcl0oQmFzaWNzIysrKVxudG8gZG8gdGhpcy5cblxuICAgIHByZXBlbmQgXCJidXR0ZXJcIiBcImZseVwiID09IFwiYnV0dGVyZmx5XCJcblxuLX1cbnByZXBlbmQgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xucHJlcGVuZCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmFwcGVuZFxuXG5cbnstfCBBcHBlbmQgb25lIHN0cmluZyBvbnRvIGFub3RoZXIuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIFtwcmVwZW5kXShwcmVwZW5kKSxcbmJ1dCB3aXRoIHRoZSBhcmd1bWVudHMgcmV2ZXJzZWQuXG4gICAgXG4gICAgYXBwZW5kIFwiYnV0dGVyXCIgXCJmbHlcIiA9PSBcImZseWJ1dHRlclwiXG5cbi19XG5hcHBlbmQgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xuYXBwZW5kIGxocyByaHMgPVxuICAgIHByZXBlbmQgcmhzIGxoc1xuXG5cbnstfCBTcGxpdCBhIHN0cmluZyB1c2luZyBhIGdpdmVuIHNlcGFyYXRvci4gSWYgdGhlIHNlcGVyYXRvciBkb2Vzbid0IGFwcGVhcixcbnlvdSB3aWxsIGdldCBhbiBhcnJheSBjb250YWluaW5nIHRoZSBvcmlnaW5hbCBzdHJpbmcuXG5cbiAgICBzcGxpdCBcIixcIiBcIlwiID09IFtcIlwiXVxuICAgIFxuICAgIHNwbGl0IFwiLFwiIFwiY2F0XCIgPT0gW1wiY2F0XCJdXG4gICAgXG4gICAgc3BsaXQgXCIsXCIgXCJjYXQsZG9nLGNvd1wiID09IFsgXCJjYXRcIiwgXCJkb2dcIiwgXCJjb3dcIiBdXG4gICAgXG4gICAgc3BsaXQgXCIvXCIgXCJob21lL2V2YW4vRGVza3RvcC9cIiA9PSBbIFwiaG9tZVwiLCBcImV2YW5cIiwgXCJEZXNrdG9wXCIsIFwiXCIgXVxuXG4tfVxuc3BsaXQgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuc3BsaXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5zcGxpdFxuXG5cbnstfCBQdXQgbWFueSBzdHJpbmdzIHRvZ2V0aGVyIHdpdGggYSBnaXZlbiBzZXBhcmF0b3IuXG5cbiAgICBqb2luIFwiYVwiIFsgXCJIXCIsIFwid1wiLCBcImlpXCIsIFwiblwiIF0gPT0gXCJIYXdhaWlhblwiXG5cbiAgICBqb2luIFwiIFwiIFsgXCJjYXRcIiwgXCJkb2dcIiwgXCJjb3dcIiBdID09IFwiY2F0IGRvZyBjb3dcIlxuXG4gICAgam9pbiBcIi9cIiBbIFwiaG9tZVwiLCBcImV2YW5cIiwgXCJEZXNrdG9wXCIgXSA9PSBcImhvbWUvZXZhbi9EZXNrdG9wXCJcblxuLX1cbmpvaW4gOiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nIC0+IFN0cmluZ1xuam9pbiA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmpvaW5cblxuXG57LXwgQnJlYWsgYSBzdHJpbmcgaW50byB3b3Jkcywgc3BsaXR0aW5nIG9uIGNodW5rcyBvZiB3aGl0ZXNwYWNlLlxuXG4gICAgd29yZHMgXCJIb3cgYXJlIFxcdCB5b3U/IFxcbiBHb29kP1wiID09IFsgXCJIb3dcIiwgXCJhcmVcIiwgXCJ5b3U/XCIsIFwiR29vZD9cIiBdXG5cbi19XG53b3JkcyA6IFN0cmluZyAtPiBBcnJheSBTdHJpbmdcbndvcmRzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcud29yZHNcblxuXG57LXwgQnJlYWsgYSBzdHJpbmcgaW50byBsaW5lcywgc3BsaXR0aW5nIG9uIG5ld2xpbmVzLlxuXG4gICAgbGluZXMgXCJIb3cgYXJlIHlvdT9cXG5Hb29kP1wiID09IFsgXCJIb3cgYXJlIHlvdT9cIiwgXCJHb29kP1wiIF1cblxuLX1cbmxpbmVzIDogU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xubGluZXMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5saW5lc1xuXG5cblxuLS0gU1VCU1RSSU5HU1xuXG5cbnstfCBUYWtlIGEgc3Vic3RyaW5nIGdpdmVuIGEgc3RhcnQgYW5kIGVuZCBpbmRleC4gTmVnYXRpdmUgaW5kZXhlc1xuYXJlIHRha2VuIHN0YXJ0aW5nIGZyb20gdGhlIF9lbmRfIG9mIHRoZSBhcnJheS5cblxuICAgIHNsaWNlIDcgOSBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwib25cIlxuXG4gICAgc2xpY2UgMCA2IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJzbmFrZXNcIlxuXG4gICAgc2xpY2UgMCAtNyBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwic25ha2VzIG9uIGFcIlxuXG4gICAgc2xpY2UgLTYgLTEgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcInBsYW5lXCJcblxuLX1cbnNsaWNlIDogSW50IC0+IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5zbGljZSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnNsaWNlXG5cblxuey18IE1ha2UgYSBuZXcgc3RyaW5nIHVzaW5nIHRoZSBmaXJzdCBfbl8gY2hhcmFjdGVycy4gSWYgX25fIGlzIGxhcmdlciB0aGFuXG50aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcsIHRoZW4gdGhlIHN0cmluZyBpcyByZXR1cm5lZCBhcyBpcy5cblxuICAgIHRha2VGaXJzdCAyIFwiTXVsZGVyXCIgPT0gXCJNdVwiXG5cbiAgICB0YWtlRmlyc3QgOCBcIk11bGRlclwiID09IFwiTXVsZGVyXCJcblxuLX1cbnRha2VGaXJzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG50YWtlRmlyc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgXCJcIlxuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSAwIG4gc3RyaW5nXG5cblxuey18IE1ha2UgYSBuZXcgc3RyaW5nIHVzaW5nIHRoZSBsYXN0IF9uXyBjaGFyYWN0ZXJzLiBJZiBfbl8gaXMgbGFyZ2VyIHRoYW5cbnRoZSBsZW5ndGggb2YgdGhlIHN0cmluZywgdGhlbiB0aGUgc3RyaW5nIGlzIHJldHVybmVkIGFzIGlzLlxuXG4gICAgdGFrZUxhc3QgMiBcIlNjdWxseVwiID09IFwibHlcIlxuXG4gICAgdGFrZUxhc3QgOCBcIlNjdWxseVwiID09IFwiU2N1bGx5XCJcblxuLX1cbnRha2VMYXN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnRha2VMYXN0IG4gc3RyaW5nID1cbiAgICBpZiBuIDwgMSB0aGVuXG4gICAgICAgIFwiXCJcblxuICAgIGVsc2VcbiAgICAgICAgc2xpY2UgLW4gKHVuaXRMZW5ndGggc3RyaW5nKSBzdHJpbmdcblxuXG57LXwgRHJvcCB0aGUgZmlyc3QgX25fIGNoYXJhY3RlcnMuXG5cbiAgICBkcm9wRmlyc3QgMiBcIlRoZSBMb25lIEd1bm1lblwiID09IFwiZSBMb25lIEd1bm1lblwiXG5cbi19XG5kcm9wRmlyc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuZHJvcEZpcnN0IG4gc3RyaW5nID1cbiAgICBpZiBuIDwgMSB0aGVuXG4gICAgICAgIHN0cmluZ1xuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSBuICh1bml0TGVuZ3RoIHN0cmluZykgc3RyaW5nXG5cblxuey18IERyb3AgdGhlIGxhc3QgX25fIGNoYXJhY3RlcnMuXG5cbiAgICBkcm9wTGFzdCAyIFwiQ2lnYXJldHRlIFNtb2tpbmcgTWFuXCIgPT0gXCJDaWdhcmV0dGUgU21va2luZyBNXCJcblxuLX1cbmRyb3BMYXN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbmRyb3BMYXN0IG4gc3RyaW5nID1cbiAgICBpZiBuIDwgMSB0aGVuXG4gICAgICAgIHN0cmluZ1xuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSAwIC1uIHN0cmluZ1xuXG5cblxuLS0gREVURUNUIFNVQlNUUklOR1NcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIGNvbnRhaW5zIHRoZSBmaXJzdCBvbmUuXG5cbiAgICBjb250YWlucyBcInRoZVwiIFwidGhlb3J5XCIgPT0gVHJ1ZVxuXG4gICAgY29udGFpbnMgXCJoYXRcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbiAgICBjb250YWlucyBcIlRIRVwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuLX1cbmNvbnRhaW5zIDogU3RyaW5nIC0+IFN0cmluZyAtPiBCb29sXG5jb250YWlucyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmNvbnRhaW5zXG5cblxuey18IFNlZSBpZiB0aGUgc2Vjb25kIHN0cmluZyBzdGFydHMgd2l0aCB0aGUgZmlyc3Qgb25lLlxuXG4gICAgc3RhcnRzV2l0aCBcInRoZVwiIFwidGhlb3J5XCIgPT0gVHJ1ZVxuXG4gICAgc3RhcnRzV2l0aCBcIm9yeVwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuLX1cbnN0YXJ0c1dpdGggOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbnN0YXJ0c1dpdGggPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5zdGFydHNXaXRoXG5cblxuey18IFNlZSBpZiB0aGUgc2Vjb25kIHN0cmluZyBlbmRzIHdpdGggdGhlIGZpcnN0IG9uZS5cblxuICAgIGVuZHNXaXRoIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4gICAgZW5kc1dpdGggXCJvcnlcIiBcInRoZW9yeVwiID09IFRydWVcblxuLX1cbmVuZHNXaXRoIDogU3RyaW5nIC0+IFN0cmluZyAtPiBCb29sXG5lbmRzV2l0aCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmVuZHNXaXRoXG5cblxuey18IEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBzdHJpbmcgd2l0aGluIHRoZSBzZWNvbmQgb25lLCBpZiBpdCdzIHRoZXJlLlxuXG4gICAgaW5kZXhPZiBcInRoZVwiIFwidGhlb3J5XCIgPT0gSnVzdCAwXG5cbiAgICBpbmRleE9mIFwib3J5XCIgXCJ0aGVvcnlcIiA9PSBKdXN0IDNcbiAgICBcbiAgICBpbmRleE9mIFwiYVwiIFwidGhlb3J5XCIgPT0gTm90aGluZ1xuXG4tfVxuZmlyc3RJbmRleE9mIDogU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBJbnRcbmZpcnN0SW5kZXhPZiA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmluZGV4T2ZcblxuXG57LXwgRmluZCB0aGUgbGFzdCBpbmRleCBvZiB0aGUgZmlyc3Qgc3RyaW5nIHdpdGhpbiB0aGUgc2Vjb25kIG9uZSwgaWYgaXQncyB0aGVyZS5cblxuICAgIGxhc3RJbmRleE9mIFwiYWJyYVwiIFwiYWJyYWNhZGFicmFcIiA9PSBKdXN0IDdcblxuICAgIGxhc3RJbmRleE9mIFwiYmFyYlwiIFwiYWJyYWNhZGFicmFcIiA9PSBOb3RoaW5nXG5cbi19XG5sYXN0SW5kZXhPZiA6IFN0cmluZyAtPiBTdHJpbmcgLT4gTWF5YmUgSW50XG5sYXN0SW5kZXhPZiA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmxhc3RJbmRleE9mXG5cblxuey18IEdldCBhbGwgb2YgdGhlIGluZGljZXMgZm9yIGEgc3Vic3RyaW5nIGluIGFub3RoZXIgc3RyaW5nLlxuXG4gICAgaW5kZXhlcyBcImlcIiBcIk1pc3Npc3NpcHBpXCIgPT0gWyAxLCA0LCA3LCAxMCBdXG5cbiAgICBpbmRleGVzIFwic3NcIiBcIk1pc3Npc3NpcHBpXCIgPT0gWyAyLCA1IF1cblxuICAgIGluZGV4ZXMgXCJuZWVkbGVcIiBcImhheXN0YWNrXCIgPT0gW11cblxuLX1cbmluZGljZXMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IEludFxuaW5kaWNlcyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmluZGV4ZXNcblxuXG5cbi0tIEZPUk1BVFRJTkdcblxuXG57LXwgQ29udmVydCBhIHN0cmluZyB0byBhbGwgdXBwZXIgY2FzZS4gVXNlZnVsIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25zXG5hbmQgVklSVFVBTCBZRUxMSU5HLlxuXG4gICAgdG9VcHBlciBcInNraW5uZXJcIiA9PSBcIlNLSU5ORVJcIlxuXG4tfVxudG9VcHBlciA6IFN0cmluZyAtPiBTdHJpbmdcbnRvVXBwZXIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b1VwcGVyXG5cblxuey18IENvbnZlcnQgYSBzdHJpbmcgdG8gYWxsIGxvd2VyIGNhc2UuIFVzZWZ1bCBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29ucy5cblxuICAgIHRvTG93ZXIgXCJYLUZJTEVTXCIgPT0gXCJ4LWZpbGVzXCJcblxuLX1cbnRvTG93ZXIgOiBTdHJpbmcgLT4gU3RyaW5nXG50b0xvd2VyID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudG9Mb3dlclxuXG5cbnstfCBQYWQgYSBzdHJpbmcgb24gYm90aCBzaWRlcyB1bnRpbCBpdCBoYXMgYSBnaXZlbiBsZW5ndGguXG5cbiAgICBwYWQgNSAnICcgXCIxXCIgPT0gXCIgIDEgIFwiXG5cbiAgICBwYWQgNSAnICcgXCIxMVwiID09IFwiICAxMSBcIlxuXG4gICAgcGFkIDUgJyAnIFwiMTIxXCIgPT0gXCIgMTIxIFwiXG5cbi19XG5wYWQgOiBJbnQgLT4gQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wYWQgbiBjaGFyIHN0cmluZyA9XG4gICAgbGV0XG4gICAgICAgIGhhbGYgPVxuICAgICAgICAgICAgQmFzaWNzLnRvRmxvYXQgKG4gLSBjb3VudCBzdHJpbmcpIC8gMlxuICAgIGluXG4gICAgcmVwZWF0IChjZWlsaW5nIGhhbGYpIChmcm9tQ2hhciBjaGFyKSArKyBzdHJpbmcgKysgcmVwZWF0IChmbG9vciBoYWxmKSAoZnJvbUNoYXIgY2hhcilcblxuXG57LXwgUGFkIGEgc3RyaW5nIG9uIHRoZSBsZWZ0IHVudGlsIGl0IGhhcyBhIGdpdmVuIGxlbmd0aC5cblxuICAgIHBhZExlZnQgNSAnLicgXCIxXCIgPT0gXCIuLi4uMVwiXG5cbiAgICBwYWRMZWZ0IDUgJy4nIFwiMTFcIiA9PSBcIi4uLjExXCJcblxuICAgIHBhZExlZnQgNSAnLicgXCIxMjFcIiA9PSBcIi4uMTIxXCJcblxuLX1cbnBhZExlZnQgOiBJbnQgLT4gQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wYWRMZWZ0IG4gY2hhciBzdHJpbmcgPVxuICAgIHJlcGVhdCAobiAtIGNvdW50IHN0cmluZykgKGZyb21DaGFyIGNoYXIpICsrIHN0cmluZ1xuXG5cbnstfCBQYWQgYSBzdHJpbmcgb24gdGhlIHJpZ2h0IHVudGlsIGl0IGhhcyBhIGdpdmVuIGxlbmd0aC5cblxuICAgIHBhZFJpZ2h0IDUgJy4nIFwiMVwiID09IFwiMS4uLi5cIlxuXG4gICAgcGFkUmlnaHQgNSAnLicgXCIxMVwiID09IFwiMTEuLi5cIlxuXG4gICAgcGFkUmlnaHQgNSAnLicgXCIxMjFcIiA9PSBcIjEyMS4uXCJcblxuLX1cbnBhZFJpZ2h0IDogSW50IC0+IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucGFkUmlnaHQgbiBjaGFyIHN0cmluZyA9XG4gICAgc3RyaW5nICsrIHJlcGVhdCAobiAtIGNvdW50IHN0cmluZykgKGZyb21DaGFyIGNoYXIpXG5cblxuey18IEdldCByaWQgb2Ygd2hpdGVzcGFjZSBvbiBib3RoIHNpZGVzIG9mIGEgc3RyaW5nLlxuXG4gICAgdHJpbSBcIiAgaGF0cyAgXFxuXCIgPT0gXCJoYXRzXCJcblxuLX1cbnRyaW0gOiBTdHJpbmcgLT4gU3RyaW5nXG50cmltID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbVxuXG5cbnstfCBHZXQgcmlkIG9mIHdoaXRlc3BhY2Ugb24gdGhlIGxlZnQgb2YgYSBzdHJpbmcuXG5cbiAgICB0cmltTGVmdCBcIiAgaGF0cyAgXFxuXCIgPT0gXCJoYXRzICBcXG5cIlxuXG4tfVxudHJpbUxlZnQgOiBTdHJpbmcgLT4gU3RyaW5nXG50cmltTGVmdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRyaW1MZWZ0XG5cblxuey18IEdldCByaWQgb2Ygd2hpdGVzcGFjZSBvbiB0aGUgcmlnaHQgb2YgYSBzdHJpbmcuXG5cbiAgICB0cmltUmlnaHQgXCIgIGhhdHMgIFxcblwiID09IFwiICBoYXRzXCJcblxuLX1cbnRyaW1SaWdodCA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW1SaWdodCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRyaW1SaWdodFxuXG5cblxuLS0gSU5UIENPTlZFUlNJT05TXG5cblxuey18IFRyeSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYW4gaW50LCBmYWlsaW5nIG9uIGltcHJvcGVybHkgZm9ybWF0dGVkIHN0cmluZ3MuXG5cbiAgICBTdHJpbmcudG9JbnQgXCIxMjNcIiA9PSBKdXN0IDEyM1xuXG4gICAgU3RyaW5nLnRvSW50IFwiLTQyXCIgPT0gSnVzdCAtNDJcblxuICAgIFN0cmluZy50b0ludCBcIjMuMVwiID09IE5vdGhpbmdcblxuICAgIFN0cmluZy50b0ludCBcIjMxYVwiID09IE5vdGhpbmdcblxuSWYgeW91IGFyZSBleHRyYWN0aW5nIGEgbnVtYmVyIGZyb20gc29tZSByYXcgdXNlciBpbnB1dCwgeW91IHdpbGwgdHlwaWNhbGx5XG53YW50IHRvIHVzZSBbYE1heWJlLndpdGhEZWZhdWx0YF0oTWF5YmUjd2l0aERlZmF1bHQpIHRvIGhhbmRsZSBiYWQgZGF0YTpcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0ludCBcIjQyXCIpID09IDQyXG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9JbnQgXCJhYlwiKSA9PSAwXG5cbi19XG50b0ludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbnRvSW50ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudG9JbnRcblxuXG57LXwgQ29udmVydCBhbiBgSW50YCB0byBhIGBTdHJpbmdgLlxuXG4gICAgU3RyaW5nLmZyb21JbnQgMTIzID09IFwiMTIzXCJcblxuICAgIFN0cmluZy5mcm9tSW50IC00MiA9PSBcIi00MlwiXG5cbkNoZWNrIG91dCBbYERlYnVnLnRvU3RyaW5nYF0oRGVidWcjdG9TdHJpbmcpIHRvIGNvbnZlcnQgX2FueV8gdmFsdWUgdG8gYSBzdHJpbmdcbmZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG5cbi19XG5mcm9tSW50IDogSW50IC0+IFN0cmluZ1xuZnJvbUludCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZyb21OdW1iZXJcblxuXG5cbi0tIEZMT0FUIENPTlZFUlNJT05TXG5cblxuey18IFRyeSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmbG9hdCwgZmFpbGluZyBvbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBzdHJpbmdzLlxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIxMjNcIiA9PSBKdXN0IDEyMy4wXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIi00MlwiID09IEp1c3QgLTQyLjBcblxuICAgIFN0cmluZy50b0Zsb2F0IFwiMy4xXCIgPT0gSnVzdCAzLjFcblxuICAgIFN0cmluZy50b0Zsb2F0IFwiMzFhXCIgPT0gTm90aGluZ1xuXG5JZiB5b3UgYXJlIGV4dHJhY3RpbmcgYSBudW1iZXIgZnJvbSBzb21lIHJhdyB1c2VyIGlucHV0LCB5b3Ugd2lsbCB0eXBpY2FsbHlcbndhbnQgdG8gdXNlIFtgTWF5YmUud2l0aERlZmF1bHRgXShNYXliZSN3aXRoRGVmYXVsdCkgdG8gaGFuZGxlIGJhZCBkYXRhOlxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvRmxvYXQgXCI0Mi41XCIpID09IDQyLjVcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0Zsb2F0IFwiY2F0c1wiKSA9PSAwXG5cbi19XG50b0Zsb2F0IDogU3RyaW5nIC0+IE1heWJlIEZsb2F0XG50b0Zsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudG9GbG9hdFxuXG5cbnstfCBDb252ZXJ0IGEgYEZsb2F0YCB0byBhIGBTdHJpbmdgLlxuXG4gICAgU3RyaW5nLmZyb21GbG9hdCAxMjMgPT0gXCIxMjNcIlxuXG4gICAgU3RyaW5nLmZyb21GbG9hdCAtNDIgPT0gXCItNDJcIlxuXG4gICAgU3RyaW5nLmZyb21GbG9hdCAzLjkgPT0gXCIzLjlcIlxuXG5DaGVjayBvdXQgW2BEZWJ1Zy50b1N0cmluZ2BdKERlYnVnI3RvU3RyaW5nKSB0byBjb252ZXJ0IF9hbnlfIHZhbHVlIHRvIGEgc3RyaW5nXG5mb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuXG4tfVxuZnJvbUZsb2F0IDogRmxvYXQgLT4gU3RyaW5nXG5mcm9tRmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mcm9tTnVtYmVyXG5cblxuXG4tLSBBUlJBWSBDT05WRVJTSU9OU1xuXG5cbnstfCBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMuXG5cbiAgICB0b0FycmF5IFwiYWJjXCIgPT0gWyAnYScsICdiJywgJ2MnIF1cblxuICAgIHRvQXJyYXkgXCLwn5mI8J+ZifCfmYpcIiA9PSBbICfwn5mIJywgJ/CfmYknLCAn8J+ZiicgXVxuXG4tfVxudG9BcnJheSA6IFN0cmluZyAtPiBBcnJheSBDaGFyXG50b0FycmF5IHN0cmluZyA9XG4gICAgZm9sZGwgQXJyYXkucHVzaExhc3QgW10gc3RyaW5nXG5cblxuey18IENvbnZlcnQgYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgU3RyaW5nLlxuICAgIFxuICAgIGZyb21BcnJheSBbICdhJywgJ2InLCAnYycgXSA9PSBcImFiY1wiXG5cbiAgICBmcm9tQXJyYXkgWyAn8J+ZiCcsICfwn5mJJywgJ/CfmYonIF0gPT0gXCLwn5mI8J+ZifCfmYpcIlxuXG4tfVxuZnJvbUFycmF5IDogQXJyYXkgQ2hhciAtPiBTdHJpbmdcbmZyb21BcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZyb21BcnJheVxuXG5cblxuLS0gQ0hBUiBDT05WRVJTSU9OU1xuXG5cbnstfCBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIGdpdmVuIGNoYXJhY3Rlci5cblxuICAgIGZyb21DaGFyICdhJyA9PSBcImFcIlxuXG4tfVxuZnJvbUNoYXIgOiBDaGFyIC0+IFN0cmluZ1xuZnJvbUNoYXIgY2hhciA9XG4gICAgcHVzaEZpcnN0IGNoYXIgXCJcIlxuXG5cbnstfCBBZGQgYSBjaGFyYWN0ZXIgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHN0cmluZy5cblxuICAgIHB1c2hGaXJzdCAnVCcgXCJoZSB0cnV0aCBpcyBvdXQgdGhlcmVcIiA9PSBcIlRoZSB0cnV0aCBpcyBvdXQgdGhlcmVcIlxuXG4tfVxucHVzaEZpcnN0IDogQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wdXNoRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wdXNoRmlyc3RcblxuXG57LXwgQWRkIGEgY2hhcmFjdGVyIHRvIHRoZSBlbmQgb2YgYSBzdHJpbmcuXG5cbiAgICBwdXNoTGFzdCAnVCcgXCJoZSB0cnV0aCBpcyBvdXQgdGhlcmVcIiA9PSBcImhlIHRydXRoIGlzIG91dCB0aGVyZVRcIlxuXG4tfVxucHVzaExhc3QgOiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnB1c2hMYXN0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcucHVzaExhc3RcblxuXG57LXwgU3BsaXQgYSBub24tZW1wdHkgc3RyaW5nIGludG8gaXRzIGZpcnN0IGNoYXJhY3RlciBhbmQgaXRzIHJlbWFpbmluZyBjaGFyYWN0ZXJzLiBUaGlzIGxldHMgeW91XG5wYXR0ZXJuIG1hdGNoIG9uIHN0cmluZ3MgZXhhY3RseSBhcyB5b3Ugd291bGQgd2l0aCBhcnJheXMuXG5cbiAgICBwb3BGaXJzdCBcImFiY1wiID09IEp1c3QgeyBmaXJzdCA9ICdhJywgcmVzdCA9IFwiYmNcIiB9XG5cbiAgICBwb3BGaXJzdCBcIlwiID09IE5vdGhpbmdcblxuLX1cbnBvcEZpcnN0IDogU3RyaW5nIC0+IE1heWJlIHsgZmlyc3QgOiBDaGFyLCByZXN0IDogU3RyaW5nIH1cbnBvcEZpcnN0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcucG9wRmlyc3RcblxuXG57LXwgU3BsaXQgYSBub24tZW1wdHkgc3RyaW5nIGludG8gaXRzIGxhc3QgY2hhcmFjdGVyIGFuZCBpdHMgcmVtYWluaW5nIGNoYXJhY3RlcnMuIFRoaXMgbGV0cyB5b3VcbnBhdHRlcm4gbWF0Y2ggb24gc3RyaW5ncyBleGFjdGx5IGFzIHlvdSB3b3VsZCB3aXRoIGFycmF5cy5cblxuICAgIHBvcExhc3QgXCJhYmNcIiA9PSBKdXN0IHsgZmlyc3QgPSAnYycsIHJlc3QgPSBcImFiXCIgfVxuXG4gICAgcG9wTGFzdCBcIlwiID09IE5vdGhpbmdcblxuLX1cbnBvcExhc3QgOiBTdHJpbmcgLT4gTWF5YmUgeyBsYXN0IDogQ2hhciwgcmVzdCA6IFN0cmluZyB9XG5wb3BMYXN0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcucG9wTGFzdFxuXG5cbi0tIEhJR0hFUi1PUkRFUiBGVU5DVElPTlNcblxuXG57LXwgVHJhbnNmb3JtIGV2ZXJ5IGNoYXJhY3RlciBpbiBhIHN0cmluZ1xuXG4gICAgbWFwXG4gICAgICAgIChcXGMgLT5cbiAgICAgICAgICAgIGlmIGMgPT0gJy8nIHRoZW5cbiAgICAgICAgICAgICAgICAnLidcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNcbiAgICAgICAgKVxuICAgICAgICBcImEvYi9jXCJcbiAgICAgICAgPT0gXCJhLmIuY1wiXG5cbi19XG5tYXAgOiAoQ2hhciAtPiBDaGFyKSAtPiBTdHJpbmcgLT4gU3RyaW5nXG5tYXAgZm4gc3RyID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxjaGFyIGFjYyAtPlxuICAgICAgICAgICAgcHVzaExhc3QgKGZuIGNoYXIpIGFjY1xuICAgICAgICApXG4gICAgICAgIFwiXCJcbiAgICAgICAgc3RyXG5cblxuey18IEtlZXAgb25seSB0aGUgY2hhcmFjdGVycyB0aGF0IHBhc3MgdGhlIHRlc3QuXG5cbiAgICBrZWVwSWYgaXNEaWdpdCBcIlIyLUQyXCIgPT0gXCIyMlwiXG5cbi19XG5rZWVwSWYgOiAoQ2hhciAtPiBCb29sKSAtPiBTdHJpbmcgLT4gU3RyaW5nXG5rZWVwSWYgaXNHb29kIHN0ciA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcY2hhciBhY2MgLT5cbiAgICAgICAgICAgIGlmIGlzR29vZCBjaGFyIHRoZW5cbiAgICAgICAgICAgICAgICBwdXNoTGFzdCBjaGFyIGFjY1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYWNjXG4gICAgICAgIClcbiAgICAgICAgXCJcIlxuICAgICAgICBzdHJcblxuXG57LXwgUmVkdWNlIGEgc3RyaW5nIGZyb20gdGhlIGJlZ2lubmluZy5cblxuICAgIGZvbGRsIGNvbnMgXCJcIiBcInRpbWVcIiA9PSBcImVtaXRcIlxuXG4tfVxuZm9sZGwgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRsID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZm9sZGxcblxuXG57LXwgUmVkdWNlIGEgc3RyaW5nIGZyb20gdGhlIGVuZC5cblxuICAgIGZvbGRyIGNvbnMgXCJcIiBcInRpbWVcIiA9PSBcInRpbWVcIlxuXG4tfVxuZm9sZHIgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRyID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZm9sZHJcblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgX2FueV8gY2hhcmFjdGVycyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYW55IGlzRGlnaXQgXCI5MDIxMFwiID09IFRydWVcblxuICAgIGFueSBpc0RpZ2l0IFwiUjItRDJcIiA9PSBUcnVlXG5cbiAgICBhbnkgaXNEaWdpdCBcImhlYXJ0XCIgPT0gRmFsc2VcblxuICAgIGFueSBpc0RpZ2l0IFwiXCIgPT0gRmFsc2VcblxuLX1cbmFueSA6IChDaGFyIC0+IEJvb2wpIC0+IFN0cmluZyAtPiBCb29sXG5hbnkgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5hbnlcblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgX2FsbF8gY2hhcmFjdGVycyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYWxsIGlzRGlnaXQgXCI5MDIxMFwiID09IFRydWVcblxuICAgIGFsbCBpc0RpZ2l0IFwiUjItRDJcIiA9PSBGYWxzZVxuXG4gICAgYWxsIGlzRGlnaXQgXCJoZWFydFwiID09IEZhbHNlXG5cbiAgICBhbGwgaXNEaWdpdCBcIlwiID0gVHJ1ZVxuXG4tfVxuYWxsIDogKENoYXIgLT4gQm9vbCkgLT4gU3RyaW5nIC0+IEJvb2xcbmFsbCBpc0dvb2Qgc3RyID1cbiAgICBub3QgKGFueSAobm90IDw8IGlzR29vZCkgc3RyKVxuXG5cbi0tIFVOSVRTXG5cblxuey18IEdldCB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlciB1bml0cyBpbiBhIHN0cmluZy4gQXMgc3RyaW5ncyBhcmUsIGVzc2VudGlhbGx5LFxuYXJyYXlzIG9mIGNoYXJhY3RlciB1bml0cywgdGhpcyBpcyBhIGNvbnN0YW50IHRpbWUgb3BlcmF0aW9uLlxuLX1cbnVuaXRMZW5ndGggOiBTdHJpbmcgLT4gSW50XG51bml0TGVuZ3RoID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudW5pdExlbmd0aFxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgY2hhcmFjdGVyIHVuaXQgYXQgYSBnaXZlbiBpbmRleCwgb3IgYE5vdGhpbmdgIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLlxuQSBuZWdhdGl2ZSBpbmRleCB1c2VzIHRoZSBlbmQgb2YgdGhlIHN0cmluZyBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG5cbiAgICBnZXRVbml0IDEgXCJhYmNcIiA9PSBKdXN0ICdhJ1xuICAgIFxuICAgIGdldFVuaXQgMTAgXCJhYmNcIiA9PSBOb3RoaW5nXG4gICAgXG4gICAgZ2V0VW5pdCAtMSBcImFiY1wiID09IEp1c3QgJ2MnXG5cbi19XG5nZXRVbml0IDogSW50IC0+IFN0cmluZyAtPiBNYXliZSBDaGFyXG5nZXRVbml0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZ2V0VW5pdFxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgYmVnaW5uaW5nLiBUaGUgZ2l2ZW4gZnVuY3Rpb24gd2lsbCByZWNlaXZlIGNoYXJhY3RlciB1bml0cyBpbnN0ZWFkXG5vZiBhIGNvZGUgcG9pbnQsIG1lYW5pbmcgdGhhdCB0aGUgcHJvdmlkZWQgYENoYXJgIGNvdWxkIHBvc3NpYmx5IHJlcHJlc2VudCBvbmUgaGFsZiBvZiBhIGZ1bGxcbmNoYXJhY3Rlci5cblxuICAgIGZvbGRsVW5pdHMgcHVzaEZpcnN0IFwiXCIgXCJ0aW1lXCIgPT0gXCJlbWl0XCJcbi19XG5mb2xkbFVuaXRzIDogKENoYXIgLT4gYiAtPiBiKSAtPiBiIC0+IFN0cmluZyAtPiBiXG5mb2xkbFVuaXRzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZm9sZGxVbml0c1xuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgZW5kLiBUaGUgZ2l2ZW4gZnVuY3Rpb24gd2lsbCByZWNlaXZlIGNoYXJhY3RlciB1bml0cyBpbnN0ZWFkXG5vZiBhIGNvZGUgcG9pbnQsIG1lYW5pbmcgdGhhdCB0aGUgcHJvdmlkZWQgYENoYXJgIGNvdWxkIHBvc3NpYmx5IHJlcHJlc2VudCBvbmUgaGFsZiBvZiBhIGZ1bGxcbmNoYXJhY3Rlci5cblxuICAgIGZvbGRyVW5pdHMgcHVzaEZpcnN0IFwiXCIgXCJ0aW1lXCIgPT0gXCJ0aW1lXCJcbi19XG5mb2xkclVuaXRzIDogKENoYXIgLT4gYiAtPiBiKSAtPiBiIC0+IFN0cmluZyAtPiBiXG5mb2xkclVuaXRzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZm9sZHJVbml0c1xuIiwKICAgICAgICAibW9kdWxlIEpzb24uRW5jb2RlIGV4cG9zaW5nXG4gICAgKCBlbmNvZGUsIFZhbHVlXG4gICAgLCBzdHJpbmcsIGludCwgZmxvYXQsIGJvb2wsIG51bGxcbiAgICAsIGFycmF5LCBzZXRcbiAgICAsIG9iamVjdCwgZGljdFxuICAgIClcblxuey18IEZ1bmN0aW9ucyBmb3IgdHVybmluZyBHcmVuIHZhbHVlcyBpbnRvIEpzb24gdmFsdWVzLlxuXG5cbkBkb2NzIGVuY29kZSwgVmFsdWVcblxuXG4jIyBQcmltaXRpdmVzXG5cbkBkb2NzIHN0cmluZywgaW50LCBmbG9hdCwgYm9vbCwgbnVsbFxuXG5cbiMjIEFycmF5c1xuXG5AZG9jcyBhcnJheSwgc2V0XG5cblxuIyMgT2JqZWN0c1xuXG5AZG9jcyBvYmplY3QsIGRpY3RcblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG5pbXBvcnQgU2V0IGV4cG9zaW5nIChTZXQpXG5pbXBvcnQgU3RyaW5nIGV4cG9zaW5nIChTdHJpbmcpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuSnNvblxuXG5cblxuLS0gRU5DT0RFXG5cblxuey18IFJlcHJlc2VudHMgYSBKYXZhU2NyaXB0IHZhbHVlLlxuLX1cbnR5cGUgVmFsdWVcbiAgICA9IFZhbHVlXG5cblxuey18IENvbnZlcnQgYSBgVmFsdWVgIGludG8gYSBwcmV0dGlmaWVkIHN0cmluZy4gVGhlIGZpcnN0IGFyZ3VtZW50IHNwZWNpZmllc1xudGhlIGFtb3VudCBvZiBpbmRlbnRhdGlvbiBpbiB0aGUgcmVzdWx0aW5nIHN0cmluZy5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIHRvbSA6IEVuY29kZS5WYWx1ZVxuICAgIHRvbSA9XG4gICAgICAgIEVuY29kZS5vYmplY3RcbiAgICAgICAgICAgIFsgeyBrZXkgPSBcIm5hbWVcIiwgdmFsdWUgPSBFbmNvZGUuc3RyaW5nIFwiVG9tXCIgfVxuICAgICAgICAgICAgLCB7IGtleSA9IFwiYWdlXCIsIHZhbHVlID0gRW5jb2RlLmludCA0MiApXG4gICAgICAgICAgICBdXG5cbiAgICBjb21wYWN0ID1cbiAgICAgICAgRW5jb2RlLmVuY29kZSAwIHRvbVxuXG4gICAgLS0ge1wibmFtZVwiOlwiVG9tXCIsXCJhZ2VcIjo0Mn1cbiAgICByZWFkYWJsZSA9XG4gICAgICAgIEVuY29kZS5lbmNvZGUgNCB0b21cblxuICAgIC0tIHtcbiAgICAtLSAgICAgXCJuYW1lXCI6IFwiVG9tXCIsXG4gICAgLS0gICAgIFwiYWdlXCI6IDQyXG4gICAgLS0gfVxuXG4tfVxuZW5jb2RlIDogSW50IC0+IFZhbHVlIC0+IFN0cmluZ1xuZW5jb2RlID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmVuY29kZVxuXG5cblxuLS0gUFJJTUlUSVZFU1xuXG5cbnstfCBUdXJuIGEgYFN0cmluZ2AgaW50byBhIEpTT04gc3RyaW5nLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIHN0cmluZylcblxuXG4gICAgLS0gZW5jb2RlIDAgKHN0cmluZyBcIlwiKSAgICAgID09IFwiXFxcIlxcXCJcIlxuICAgIC0tIGVuY29kZSAwIChzdHJpbmcgXCJhYmNcIikgICA9PSBcIlxcXCJhYmNcXFwiXCJcbiAgICAtLSBlbmNvZGUgMCAoc3RyaW5nIFwiaGVsbG9cIikgPT0gXCJcXFwiaGVsbG9cXFwiXCJcblxuLX1cbnN0cmluZyA6IFN0cmluZyAtPiBWYWx1ZVxuc3RyaW5nID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG57LXwgVHVybiBhbiBgSW50YCBpbnRvIGEgSlNPTiBudW1iZXIuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgaW50KVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoaW50IDQyKSA9PSBcIjQyXCJcbiAgICAtLSBlbmNvZGUgMCAoaW50IC03KSA9PSBcIi03XCJcbiAgICAtLSBlbmNvZGUgMCAoaW50IDApICA9PSBcIjBcIlxuXG4tfVxuaW50IDogSW50IC0+IFZhbHVlXG5pbnQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cbnstfCBUdXJuIGEgYEZsb2F0YCBpbnRvIGEgSlNPTiBudW1iZXIuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgZmxvYXQpXG5cblxuICAgIC0tIGVuY29kZSAwIChmbG9hdCAzLjE0KSAgICAgPT0gXCIzLjE0XCJcbiAgICAtLSBlbmNvZGUgMCAoZmxvYXQgMS42MTgpICAgID09IFwiMS42MThcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCAtNDIpICAgICAgPT0gXCItNDJcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCBOYU4pICAgICAgPT0gXCJudWxsXCJcbiAgICAtLSBlbmNvZGUgMCAoZmxvYXQgSW5maW5pdHkpID09IFwibnVsbFwiXG5cbioqTm90ZToqKiBGbG9hdGluZyBwb2ludCBudW1iZXJzIGFyZSBkZWZpbmVkIGluIHRoZSBbSUVFRSA3NTQgc3RhbmRhcmRdW2llZWVdXG53aGljaCBpcyBoYXJkY29kZWQgaW50byBhbG1vc3QgYWxsIENQVXMuIFRoaXMgc3RhbmRhcmQgYWxsb3dzIGBJbmZpbml0eWAgYW5kXG5gTmFOYC4gW1RoZSBKU09OIHNwZWNdW2pzb25dIGRvZXMgbm90IGluY2x1ZGUgdGhlc2UgdmFsdWVzLCBzbyB3ZSBlbmNvZGUgdGhlbVxuYm90aCBhcyBgbnVsbGAuXG5cbltpZWVlXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSUVFRV83NTRcbltqc29uXTogaHR0cHM6Ly93d3cuanNvbi5vcmcvXG5cbi19XG5mbG9hdCA6IEZsb2F0IC0+IFZhbHVlXG5mbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuey18IFR1cm4gYSBgQm9vbGAgaW50byBhIEpTT04gYm9vbGVhbi5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoYm9vbCwgZW5jb2RlKVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoYm9vbCBUcnVlKSAgPT0gXCJ0cnVlXCJcbiAgICAtLSBlbmNvZGUgMCAoYm9vbCBGYWxzZSkgPT0gXCJmYWxzZVwiXG5cbi19XG5ib29sIDogQm9vbCAtPiBWYWx1ZVxuYm9vbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuXG4tLSBOVUxMU1xuXG5cbnstfCBDcmVhdGUgYSBKU09OIGBudWxsYCB2YWx1ZS5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBudWxsKVxuXG5cbiAgICAtLSBlbmNvZGUgMCBudWxsID09IFwibnVsbFwiXG5cbi19XG5udWxsIDogVmFsdWVcbm51bGwgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZW5jb2RlTnVsbFxuXG5cblxuLS0gQVJSQVlTXG5cblxuey18IFR1cm4gYSBgQXJyYXlgIGludG8gYSBKU09OIGFycmF5LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZSBleHBvc2luZyAoYXJyYXksIGJvb2wsIGVuY29kZSwgaW50LCBzdHJpbmcpXG5cblxuICAgIC0tIGVuY29kZSAwIChhcnJheSBpbnQgWzEsMyw0XSkgICAgICAgPT0gXCJbMSwzLDRdXCJcbiAgICAtLSBlbmNvZGUgMCAoYXJyYXkgYm9vbCBbVHJ1ZSxGYWxzZV0pID09IFwiW3RydWUsZmFsc2VdXCJcbiAgICAtLSBlbmNvZGUgMCAoYXJyYXkgc3RyaW5nIFtcImFcIixcImJcIl0pICA9PSBcIlwiXCJbXCJhXCIsXCJiXCJdXCJcIlwiXG5cbi19XG5hcnJheSA6IChhIC0+IFZhbHVlKSAtPiBBcnJheSBhIC0+IFZhbHVlXG5hcnJheSBmdW5jIGVudHJpZXMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuICAgICAgICAoQXJyYXkuZm9sZGwgKEdyZW4uS2VybmVsLkpzb24uYWRkRW50cnkgZnVuYykgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlBcnJheSB7fSkgZW50cmllcylcblxuXG57LXwgVHVybiBhbiBgU2V0YCBpbnRvIGEgSlNPTiBhcnJheS5cbi19XG5zZXQgOiAoYSAtPiBWYWx1ZSkgLT4gU2V0IGEgLT4gVmFsdWVcbnNldCBmdW5jIGVudHJpZXMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuICAgICAgICAoU2V0LmZvbGRsIChHcmVuLktlcm5lbC5Kc29uLmFkZEVudHJ5IGZ1bmMpIChHcmVuLktlcm5lbC5Kc29uLmVtcHR5QXJyYXkge30pIGVudHJpZXMpXG5cblxuXG4tLSBPQkpFQ1RTXG5cblxuey18IENyZWF0ZSBhIEpTT04gb2JqZWN0LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgdG9tIDogRW5jb2RlLlZhbHVlXG4gICAgdG9tID1cbiAgICAgICAgRW5jb2RlLm9iamVjdFxuICAgICAgICAgICAgWyB7IGtleSA9IFwibmFtZVwiLCB2YWx1ZSA9IEVuY29kZS5zdHJpbmcgXCJUb21cIiB9XG4gICAgICAgICAgICAsIHsga2V5ID0gXCJhZ2VcIiwgdmFsdWUgPSBFbmNvZGUuaW50IDQyIH1cbiAgICAgICAgICAgIF1cblxuICAgIC0tIEVuY29kZS5lbmNvZGUgMCB0b20gPT0gXCJcIlwie1wibmFtZVwiOlwiVG9tXCIsXCJhZ2VcIjo0Mn1cIlwiXCJcblxuLX1cbm9iamVjdCA6IEFycmF5IHsga2V5IDogU3RyaW5nLCB2YWx1ZSA6IFZhbHVlIH0gLT4gVmFsdWVcbm9iamVjdCBwYWlycyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChBcnJheS5mb2xkbFxuICAgICAgICAgICAgKFxceyBrZXksIHZhbHVlIH0gb2JqIC0+IEdyZW4uS2VybmVsLkpzb24uYWRkRmllbGQga2V5IHZhbHVlIG9iailcbiAgICAgICAgICAgIChHcmVuLktlcm5lbC5Kc29uLmVtcHR5T2JqZWN0IHt9KVxuICAgICAgICAgICAgcGFpcnNcbiAgICAgICAgKVxuXG5cbnstfCBUdXJuIGEgYERpY3RgIGludG8gYSBKU09OIG9iamVjdC5cblxuICAgIGltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIHBlb3BsZSA6IERpY3QgU3RyaW5nIEludFxuICAgIHBlb3BsZSA9XG4gICAgICAgIERpY3QuZnJvbUFycmF5IFsgeyBrZXkgPSBcIlRvbVwiLCB2YWx1ZSA9IDQyIH0sIHsga2V5ID0gXCJTdWVcIiwgdmFsdWUgPSAzOCB9IF1cblxuICAgIC0tIEVuY29kZS5lbmNvZGUgMCAoRW5jb2RlLmRpY3QgaWRlbnRpdHkgRW5jb2RlLmludCBwZW9wbGUpXG4gICAgLS0gICA9PSBcIlwiXCJ7XCJUb21cIjo0MixcIlN1ZVwiOjM4fVwiXCJcIlxuXG4tfVxuZGljdCA6IChrIC0+IFN0cmluZykgLT4gKHYgLT4gVmFsdWUpIC0+IERpY3QgayB2IC0+IFZhbHVlXG5kaWN0IHRvS2V5IHRvVmFsdWUgZGljdGlvbmFyeSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChEaWN0LmZvbGRsXG4gICAgICAgICAgICAoXFxrZXkgdmFsdWUgb2JqIC0+IEdyZW4uS2VybmVsLkpzb24uYWRkRmllbGQgKHRvS2V5IGtleSkgKHRvVmFsdWUgdmFsdWUpIG9iailcbiAgICAgICAgICAgIChHcmVuLktlcm5lbC5Kc29uLmVtcHR5T2JqZWN0IHt9KVxuICAgICAgICAgICAgZGljdGlvbmFyeVxuICAgICAgICApXG4iLAogICAgICAgICJtb2R1bGUgSnNvbi5EZWNvZGUgZXhwb3NpbmdcbiAgICAoIERlY29kZXIsIHN0cmluZywgYm9vbCwgaW50LCBmbG9hdFxuICAgICwgbnVsbGFibGUsIGFycmF5LCBkaWN0LCBrZXlWYWx1ZVBhaXJzLCBvbmVPck1vcmVcbiAgICAsIGZpZWxkLCBhdCwgaW5kZXhcbiAgICAsIG1heWJlLCBvbmVPZlxuICAgICwgZGVjb2RlU3RyaW5nLCBkZWNvZGVWYWx1ZSwgVmFsdWUsIEVycm9yKC4uKSwgZXJyb3JUb1N0cmluZ1xuICAgICwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1LCBtYXA2LCBtYXA3LCBtYXA4XG4gICAgLCBsYXp5LCB2YWx1ZSwgbnVsbCwgc3VjY2VlZCwgZmFpbCwgYW5kVGhlblxuICAgIClcblxuey18IFR1cm4gSlNPTiB2YWx1ZXMgaW50byBHcmVuIHZhbHVlcy4gV2UndmUgaW5oZXJpdGVkIHRoaXMgZnJvbSBFbG0uIERlZmluaXRlbHkgY2hlY2sgb3V0IHRoaXMgW2ludHJvIHRvXG5KU09OIGRlY29kZXJzXVtndWlkZV0gdG8gZ2V0IGEgZmVlbCBmb3IgaG93IHRoaXMgbGlicmFyeSB3b3JrcyFcblxuW2d1aWRlXTogaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvZWZmZWN0cy9qc29uLmh0bWxcblxuXG5AZG9jcyBEZWNvZGVyLCBzdHJpbmcsIGJvb2wsIGludCwgZmxvYXRcblxuXG4jIyBEYXRhIFN0cnVjdHVyZXNcblxuQGRvY3MgbnVsbGFibGUsIGFycmF5LCBkaWN0LCBrZXlWYWx1ZVBhaXJzLCBvbmVPck1vcmVcblxuXG4jIyBPYmplY3QgUHJpbWl0aXZlc1xuXG5AZG9jcyBmaWVsZCwgYXQsIGluZGV4XG5cblxuIyMgSW5jb25zaXN0ZW50IFN0cnVjdHVyZVxuXG5AZG9jcyBtYXliZSwgb25lT2ZcblxuXG4jIyBSdW4gRGVjb2RlcnNcblxuQGRvY3MgZGVjb2RlU3RyaW5nLCBkZWNvZGVWYWx1ZSwgVmFsdWUsIEVycm9yLCBlcnJvclRvU3RyaW5nXG5cblxuIyMgTWFwcGluZ1xuXG5AZG9jcyBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIG1hcDYsIG1hcDcsIG1hcDhcblxuXG4jIyBGYW5jeSBEZWNvZGluZ1xuXG5AZG9jcyBsYXp5LCB2YWx1ZSwgbnVsbCwgc3VjY2VlZCwgZmFpbCwgYW5kVGhlblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcbmltcG9ydCBDaGFyXG5pbXBvcnQgU3RyaW5nIGV4cG9zaW5nIChTdHJpbmcpXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBSZXN1bHQgZXhwb3NpbmcgKFJlc3VsdCguLikpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuSnNvblxuaW1wb3J0IEpzb24uRW5jb2RlXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IEEgdmFsdWUgdGhhdCBrbm93cyBob3cgdG8gZGVjb2RlIEpTT04gdmFsdWVzLlxuXG5UaGVyZSBpcyBhIHdob2xlIHNlY3Rpb24gaW4gYGd1aWRlLmVsbS1sYW5nLm9yZ2AgYWJvdXQgZGVjb2RlcnMsIHNvIFtjaGVjayBpdFxub3V0XShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9pbnRlcm9wL2pzb24uaHRtbCkgZm9yIGEgbW9yZSBjb21wcmVoZW5zaXZlXG5pbnRyb2R1Y3Rpb24hXG5cbi19XG50eXBlIERlY29kZXIgYVxuICAgID0gRGVjb2RlclxuXG5cbnstfCBEZWNvZGUgYSBKU09OIHN0cmluZyBpbnRvIGFuIEdyZW4gYFN0cmluZ2AuXG5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcIjQyXCIgICAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCIzLjE0XCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwiXFxcImhlbGxvXFxcIlwiICAgICAgICAgPT0gT2sgXCJoZWxsb1wiXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbnN0cmluZyA6IERlY29kZXIgU3RyaW5nXG5zdHJpbmcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlU3RyaW5nXG5cblxuey18IERlY29kZSBhIEpTT04gYm9vbGVhbiBpbnRvIGFuIEdyZW4gYEJvb2xgLlxuXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCJ0cnVlXCIgICAgICAgICAgICAgID09IE9rIFRydWVcbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBib29sIFwiMy4xNFwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCJ7IFxcXCJoZWxsb1xcXCI6IDQyIH1cIiA9PSBFcnIgLi4uXG5cbi19XG5ib29sIDogRGVjb2RlciBCb29sXG5ib29sID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUJvb2xcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBudW1iZXIgaW50byBhbiBHcmVuIGBJbnRgLlxuXG4gICAgZGVjb2RlU3RyaW5nIGludCBcInRydWVcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBpbnQgXCI0MlwiICAgICAgICAgICAgICAgID09IE9rIDQyXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBpbnQgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbmludCA6IERlY29kZXIgSW50XG5pbnQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlSW50XG5cblxuey18IERlY29kZSBhIEpTT04gbnVtYmVyIGludG8gYW4gR3JlbiBgRmxvYXRgLlxuXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBFcnIgLi5cbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCI0MlwiICAgICAgICAgICAgICAgID09IE9rIDQyXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwiMy4xNFwiICAgICAgICAgICAgICA9PSBPayAzLjE0XG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwiXFxcImhlbGxvXFxcIlwiICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbmZsb2F0IDogRGVjb2RlciBGbG9hdFxuZmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlRmxvYXRcblxuXG5cbi0tIERBVEEgU1RSVUNUVVJFU1xuXG5cbnstfCBEZWNvZGUgYSBudWxsYWJsZSBKU09OIHZhbHVlIGludG8gYW4gR3JlbiB2YWx1ZS5cblxuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcIjEzXCIgICAgPT0gT2sgKEp1c3QgMTMpXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwiNDJcIiAgICA9PSBPayAoSnVzdCA0MilcbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCJudWxsXCIgID09IE9rIE5vdGhpbmdcbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCJ0cnVlXCIgID09IEVyciAuLlxuXG4tfVxubnVsbGFibGUgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoTWF5YmUgYSlcbm51bGxhYmxlIGRlY29kZXIgPVxuICAgIG9uZU9mXG4gICAgICAgIFsgbnVsbCBOb3RoaW5nXG4gICAgICAgICwgbWFwIEp1c3QgZGVjb2RlclxuICAgICAgICBdXG5cblxuey18IERlY29kZSBhIEpTT04gYXJyYXkgaW50byBhbiBHcmVuIGBBcnJheWAuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGFycmF5IGludCkgXCJbMSwyLDNdXCIgPT0gT2sgWyAxLCAyLCAzIF1cblxuICAgIGRlY29kZVN0cmluZyAoYXJyYXkgYm9vbCkgXCJbdHJ1ZSxmYWxzZV1cIiA9PSBPayBbIFRydWUsIEZhbHNlIF1cblxuLX1cbmFycmF5IDogRGVjb2RlciBhIC0+IERlY29kZXIgKEFycmF5IGEpXG5hcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVBcnJheVxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG9iamVjdCBpbnRvIGFuIEdyZW4gYERpY3RgLlxuXG4gICAgZGVjb2RlU3RyaW5nIChkaWN0IGludCkgXCJ7IFxcXCJhbGljZVxcXCI6IDQyLCBcXFwiYm9iXFxcIjogOTkgfVwiXG4gICAgICAgID09IE9rIChEaWN0LmVtcHR5IHw+IERpY3Quc2V0IFwiYWxpY2VcIiA0MiB8PiBEaWN0LnNldCBcImJvYlwiIDk5KVxuXG5JZiB5b3UgbmVlZCB0aGUga2V5cyAobGlrZSBgXCJhbGljZVwiYCBhbmQgYFwiYm9iXCJgKSBhdmFpbGFibGUgaW4gdGhlIGBEaWN0YFxudmFsdWVzIGFzIHdlbGwsIEkgcmVjb21tZW5kIHVzaW5nIGEgKHByaXZhdGUpIGludGVybWVkaWF0ZSBkYXRhIHN0cnVjdHVyZSBsaWtlXG5gSW5mb2AgaW4gdGhpcyBleGFtcGxlOlxuXG4gICAgbW9kdWxlIFVzZXIgZXhwb3NpbmcgKCBVc2VyLCBkZWNvZGVyIClcblxuICAgIGltcG9ydCBEaWN0XG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGV4cG9zaW5nICguLilcblxuICAgIHR5cGUgYWxpYXMgVXNlciA9XG4gICAgICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICAgICAsIGhlaWdodCA6IEZsb2F0XG4gICAgICAgICwgYWdlIDogSW50XG4gICAgICAgIH1cblxuICAgIG1ha2VVc2VyIDogU3RyaW5nIC0+IEZsb2F0IC0+IEludCAtPiBVc2VyXG4gICAgbWFrZVVzZXIgbmFtZSBoZWlnaHQgYWdlID1cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIGhlaWdodCA9IGhlaWdodFxuICAgICAgICAsIGFnZSA9IGFnZVxuICAgICAgICB9XG5cbiAgICBkZWNvZGVyIDogRGVjb2RlciAoRGljdC5EaWN0IFN0cmluZyBVc2VyKVxuICAgIGRlY29kZXIgPVxuICAgICAgICBtYXAgKERpY3QubWFwIGluZm9Ub1VzZXIpIChkaWN0IGluZm9EZWNvZGVyKVxuXG4gICAgdHlwZSBhbGlhcyBJbmZvID1cbiAgICAgICAgeyBoZWlnaHQgOiBGbG9hdFxuICAgICAgICAsIGFnZSA6IEludFxuICAgICAgICB9XG5cbiAgICBtYWtlSW5mbyA6IEZsb2F0IC0+IEludCAtPiBJbmZvXG4gICAgbWFrZUluZm8gaGVpZ2h0IGFnZSA9XG4gICAgICAgIHsgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgIH1cblxuICAgIGluZm9EZWNvZGVyIDogRGVjb2RlciBJbmZvXG4gICAgaW5mb0RlY29kZXIgPVxuICAgICAgICBtYXAyIG1ha2VJbmZvXG4gICAgICAgICAgICAoZmllbGQgXCJoZWlnaHRcIiBmbG9hdClcbiAgICAgICAgICAgIChmaWVsZCBcImFnZVwiIGludClcblxuICAgIGluZm9Ub1VzZXIgOiBTdHJpbmcgLT4gSW5mbyAtPiBVc2VyXG4gICAgaW5mb1RvVXNlciBuYW1lIHsgaGVpZ2h0LCBhZ2UgfSA9XG4gICAgICAgIG1ha2VVc2VyIG5hbWUgaGVpZ2h0IGFnZVxuXG5TbyBub3cgSlNPTiBsaWtlIGB7IFwiYWxpY2VcIjogeyBoZWlnaHQ6IDEuNiwgYWdlOiAzMyB9fWAgYXJlIHR1cm5lZCBpbnRvXG5kaWN0aW9uYXJ5IHZhbHVlcyBsaWtlIGBEaWN0LnNpbmdsZXRvbiBcImFsaWNlXCIgKFVzZXIgXCJhbGljZVwiIDEuNiAzMylgIGlmXG55b3UgbmVlZCB0aGF0LlxuXG4tfVxuZGljdCA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChEaWN0IFN0cmluZyBhKVxuZGljdCBkZWNvZGVyID1cbiAgICBtYXAgKFxccGFpcnMgLT4gQXJyYXkuZm9sZGwgKFxccCBjb2xsIC0+IERpY3Quc2V0IHAua2V5IHAudmFsdWUgY29sbCkgRGljdC5lbXB0eSBwYWlycykgKGtleVZhbHVlUGFpcnMgZGVjb2RlcilcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBvYmplY3QgaW50byBhbiBHcmVuIGBBcnJheWAgb2YgcGFpcnMuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGtleVZhbHVlUGFpcnMgaW50KSBcInsgXFxcImFsaWNlXFxcIjogNDIsIFxcXCJib2JcXFwiOiA5OSB9XCJcbiAgICAgICAgPT0gT2sgWyB7IGtleSA9IFwiYWxpY2VcIiwgdmFsdWUgPSA0MiB9LCB7IGtleSA9IFwiYm9iXCIsIHZhbHVlID0gOTkgfSBdXG5cbi19XG5rZXlWYWx1ZVBhaXJzIDogRGVjb2RlciBhIC0+IERlY29kZXIgKEFycmF5IHsga2V5IDogU3RyaW5nLCB2YWx1ZSA6IGEgfSlcbmtleVZhbHVlUGFpcnMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlS2V5VmFsdWVQYWlyc1xuXG5cbnstfCBEZWNvZGUgYSBKU09OIGFycmF5IHRoYXQgaGFzIG9uZSBvciBtb3JlIGVsZW1lbnRzLiBUaGlzIGNvbWVzIHVwIGlmIHlvdVxud2FudCB0byBlbmFibGUgZHJhZy1hbmQtZHJvcCBvZiBmaWxlcyBpbnRvIHlvdXIgYXBwbGljYXRpb24uIFlvdSB3b3VsZCBwYWlyXG50aGlzIGZ1bmN0aW9uIHdpdGggW2BlbG0vZmlsZWBdKCkgdG8gd3JpdGUgYSBgZHJvcERlY29kZXJgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBGaWxlIGV4cG9zaW5nIChGaWxlKVxuICAgIGltcG9ydCBKc29uLkRlY29kZXIgYXMgRFxuXG4gICAgdHlwZSBNc2dcbiAgICAgICAgPSBHb3RGaWxlcyBGaWxlIChBcnJheSBGaWxlcylcblxuICAgIGlucHV0RGVjb2RlciA6IEQuRGVjb2RlciBNc2dcbiAgICBpbnB1dERlY29kZXIgPVxuICAgICAgICBELmF0IFsgXCJkYXRhVHJhbnNmZXJcIiwgXCJmaWxlc1wiIF0gKEQub25lT3JNb3JlIEdvdEZpbGVzIEZpbGUuZGVjb2RlcilcblxuVGhpcyBjYXB0dXJlcyB0aGUgZmFjdCB0aGF0IHlvdSBjYW4gbmV2ZXIgZHJhZy1hbmQtZHJvcCB6ZXJvIGZpbGVzLlxuXG4tfVxub25lT3JNb3JlIDogKGEgLT4gQXJyYXkgYSAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgdmFsdWVcbm9uZU9yTW9yZSB0b1ZhbHVlIGRlY29kZXIgPVxuICAgIGFycmF5IGRlY29kZXJcbiAgICAgICAgfD4gYW5kVGhlbiAob25lT3JNb3JlSGVscCB0b1ZhbHVlKVxuXG5cbm9uZU9yTW9yZUhlbHAgOiAoYSAtPiBBcnJheSBhIC0+IHZhbHVlKSAtPiBBcnJheSBhIC0+IERlY29kZXIgdmFsdWVcbm9uZU9yTW9yZUhlbHAgdG9WYWx1ZSB4cyA9XG4gICAgd2hlbiBBcnJheS5nZXQgMCB4cyBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBmYWlsIFwiYSBBUlJBWSB3aXRoIGF0IGxlYXN0IE9ORSBlbGVtZW50XCJcblxuICAgICAgICBKdXN0IHkgLT5cbiAgICAgICAgICAgIHN1Y2NlZWQgKHRvVmFsdWUgeSAoQXJyYXkuc2xpY2UgMSAoQXJyYXkubGVuZ3RoIHhzKSB4cykpXG5cblxuXG4tLSBPQkpFQ1QgUFJJTUlUSVZFU1xuXG5cbnstfCBEZWNvZGUgYSBKU09OIG9iamVjdCwgcmVxdWlyaW5nIGEgcGFydGljdWxhciBmaWVsZC5cblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiAzIH1cIiA9PSBPayAzXG5cbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwieFwiIGludCkgXCJ7IFxcXCJ4XFxcIjogMywgXFxcInlcXFwiOiA0IH1cIiA9PSBPayAzXG5cbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwieFwiIGludCkgXCJ7IFxcXCJ4XFxcIjogdHJ1ZSB9XCJcbiAgICAgICAgPT0gRXJyXG4gICAgICAgIC4uLiBkZWNvZGVTdHJpbmcgKGZpZWxkIFwieFwiIGludCkgXCJ7IFxcXCJ5XFxcIjogNCB9XCJcbiAgICAgICAgPT0gRXJyXG4gICAgICAgIC4uLiBkZWNvZGVTdHJpbmcgKGZpZWxkIFwibmFtZVwiIHN0cmluZykgXCJ7IFxcXCJuYW1lXFxcIjogXFxcInRvbVxcXCIgfVwiXG4gICAgICAgID09IE9rIFwidG9tXCJcblxuVGhlIG9iamVjdCBfY2FuXyBoYXZlIG90aGVyIGZpZWxkcy4gTG90cyBvZiB0aGVtISBUaGUgb25seSB0aGluZyB0aGlzIGRlY29kZXJcbmNhcmVzIGFib3V0IGlzIGlmIGB4YCBpcyBwcmVzZW50IGFuZCB0aGF0IHRoZSB2YWx1ZSB0aGVyZSBpcyBhbiBgSW50YC5cblxuQ2hlY2sgb3V0IFtgbWFwMmBdKCNtYXAyKSB0byBzZWUgaG93IHRvIGRlY29kZSBtdWx0aXBsZSBmaWVsZHMhXG5cbi19XG5maWVsZCA6IFN0cmluZyAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5maWVsZCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVGaWVsZFxuXG5cbnstfCBEZWNvZGUgYSBuZXN0ZWQgSlNPTiBvYmplY3QsIHJlcXVpcmluZyBjZXJ0YWluIGZpZWxkcy5cblxuICAgIGpzb24gPSBcIlwiXCJ7IFwicGVyc29uXCI6IHsgXCJuYW1lXCI6IFwidG9tXCIsIFwiYWdlXCI6IDQyIH0gfVwiXCJcIlxuXG4gICAgZGVjb2RlU3RyaW5nIChhdCBbXCJwZXJzb25cIiwgXCJuYW1lXCJdIHN0cmluZykganNvbiAgPT0gT2sgXCJ0b21cIlxuICAgIGRlY29kZVN0cmluZyAoYXQgW1wicGVyc29uXCIsIFwiYWdlXCIgXSBpbnQgICApIGpzb24gID09IE9rIDQyXG5cblRoaXMgaXMgcmVhbGx5IGp1c3QgYSBzaG9ydGhhbmQgZm9yIHNheWluZyB0aGluZ3MgbGlrZTpcblxuICAgIGZpZWxkIFwicGVyc29uXCIgKGZpZWxkIFwibmFtZVwiIHN0cmluZykgPT0gYXQgWyBcInBlcnNvblwiLCBcIm5hbWVcIiBdIHN0cmluZ1xuXG4tfVxuYXQgOiBBcnJheSBTdHJpbmcgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYVxuYXQgZmllbGRzIGRlY29kZXIgPVxuICAgIEFycmF5LmZvbGRyIGZpZWxkIGRlY29kZXIgZmllbGRzXG5cblxuey18IERlY29kZSBhIEpTT04gYXJyYXksIHJlcXVpcmluZyBhIHBhcnRpY3VsYXIgaW5kZXguXG5cbiAgICBqc29uID0gXCJcIlwiWyBcImFsaWNlXCIsIFwiYm9iXCIsIFwiY2h1Y2tcIiBdXCJcIlwiXG5cbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDAgc3RyaW5nKSBqc29uICA9PSBPayBcImFsaWNlXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDEgc3RyaW5nKSBqc29uICA9PSBPayBcImJvYlwiXG4gICAgZGVjb2RlU3RyaW5nIChpbmRleCAyIHN0cmluZykganNvbiAgPT0gT2sgXCJjaHVja1wiXG4gICAgZGVjb2RlU3RyaW5nIChpbmRleCAzIHN0cmluZykganNvbiAgPT0gRXJyIC4uLlxuXG4tfVxuaW5kZXggOiBJbnQgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYVxuaW5kZXggPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlSW5kZXhcblxuXG5cbi0tIFdFSVJEIFNUUlVDVFVSRVxuXG5cbnstfCBIZWxwZnVsIGZvciBkZWFsaW5nIHdpdGggb3B0aW9uYWwgZmllbGRzLiBIZXJlIGFyZSBhIGZldyBzbGlnaHRseSBkaWZmZXJlbnRcbmV4YW1wbGVzOlxuXG4gICAganNvbiA9IFwiXCJcInsgXCJuYW1lXCI6IFwidG9tXCIsIFwiYWdlXCI6IDQyIH1cIlwiXCJcblxuICAgIGRlY29kZVN0cmluZyAobWF5YmUgKGZpZWxkIFwiYWdlXCIgICAgaW50ICApKSBqc29uID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAobWF5YmUgKGZpZWxkIFwibmFtZVwiICAgaW50ICApKSBqc29uID09IE9rIE5vdGhpbmdcbiAgICBkZWNvZGVTdHJpbmcgKG1heWJlIChmaWVsZCBcImhlaWdodFwiIGZsb2F0KSkganNvbiA9PSBPayBOb3RoaW5nXG5cbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwiYWdlXCIgICAgKG1heWJlIGludCAgKSkganNvbiA9PSBPayAoSnVzdCA0MilcbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwibmFtZVwiICAgKG1heWJlIGludCAgKSkganNvbiA9PSBPayBOb3RoaW5nXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcImhlaWdodFwiIChtYXliZSBmbG9hdCkpIGpzb24gPT0gRXJyIC4uLlxuXG5Ob3RpY2UgdGhlIGxhc3QgZXhhbXBsZSEgSXQgaXMgc2F5aW5nIHdlIF9tdXN0XyBoYXZlIGEgZmllbGQgbmFtZWQgYGhlaWdodGAgYW5kXG50aGUgY29udGVudCBfbWF5XyBiZSBhIGZsb2F0LiBUaGVyZSBpcyBubyBgaGVpZ2h0YCBmaWVsZCwgc28gdGhlIGRlY29kZXIgZmFpbHMuXG5cblBvaW50IGlzLCBgbWF5YmVgIHdpbGwgbWFrZSBleGFjdGx5IHdoYXQgaXQgY29udGFpbnMgY29uZGl0aW9uYWwuIEZvciBvcHRpb25hbFxuZmllbGRzLCB0aGlzIG1lYW5zIHlvdSBwcm9iYWJseSB3YW50IGl0IF9vdXRzaWRlXyBhIHVzZSBvZiBgZmllbGRgIG9yIGBhdGAuXG5cbi19XG5tYXliZSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChNYXliZSBhKVxubWF5YmUgZGVjb2RlciA9XG4gICAgb25lT2ZcbiAgICAgICAgWyBtYXAgSnVzdCBkZWNvZGVyXG4gICAgICAgICwgc3VjY2VlZCBOb3RoaW5nXG4gICAgICAgIF1cblxuXG57LXwgVHJ5IGEgYnVuY2ggb2YgZGlmZmVyZW50IGRlY29kZXJzLiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgdGhlIEpTT04gbWF5IGNvbWVcbmluIGEgY291cGxlIGRpZmZlcmVudCBmb3JtYXRzLiBGb3IgZXhhbXBsZSwgc2F5IHlvdSB3YW50IHRvIHJlYWQgYW4gYXJyYXkgb2Zcbm51bWJlcnMsIGJ1dCBzb21lIG9mIHRoZW0gYXJlIGBudWxsYC5cblxuICAgIGltcG9ydCBTdHJpbmdcblxuICAgIGJhZEludCA6IERlY29kZXIgSW50XG4gICAgYmFkSW50ID1cbiAgICAgICAgb25lT2YgWyBpbnQsIG51bGwgMCBdXG5cbiAgICAtLSBkZWNvZGVTdHJpbmcgKGFycmF5IGJhZEludCkgXCJbMSwyLG51bGwsNF1cIiA9PSBPayBbMSwyLDAsNF1cblxuV2h5IHdvdWxkIHNvbWVvbmUgZ2VuZXJhdGUgSlNPTiBsaWtlIHRoaXM/IFF1ZXN0aW9ucyBsaWtlIHRoaXMgYXJlIG5vdCBnb29kXG5mb3IgeW91ciBoZWFsdGguIFRoZSBwb2ludCBpcyB0aGF0IHlvdSBjYW4gdXNlIGBvbmVPZmAgdG8gaGFuZGxlIHNpdHVhdGlvbnNcbmxpa2UgdGhpcyFcblxuWW91IGNvdWxkIGFsc28gdXNlIGBvbmVPZmAgdG8gaGVscCB2ZXJzaW9uIHlvdXIgZGF0YS4gVHJ5IHRoZSBsYXRlc3QgZm9ybWF0LFxudGhlbiBhIGZldyBvbGRlciBvbmVzIHRoYXQgeW91IHN0aWxsIHN1cHBvcnQuIFlvdSBjb3VsZCB1c2UgYGFuZFRoZW5gIHRvIGJlXG5ldmVuIG1vcmUgcGFydGljdWxhciBpZiB5b3Ugd2FudGVkLlxuXG4tfVxub25lT2YgOiBBcnJheSAoRGVjb2RlciBhKSAtPiBEZWNvZGVyIGFcbm9uZU9mID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm9uZU9mXG5cblxuXG4tLSBNQVBQSU5HXG5cblxuey18IFRyYW5zZm9ybSBhIGRlY29kZXIuIE1heWJlIHlvdSBqdXN0IHdhbnQgdG8ga25vdyB0aGUgbGVuZ3RoIG9mIGEgc3RyaW5nOlxuXG4gICAgaW1wb3J0IFN0cmluZ1xuXG4gICAgc3RyaW5nTGVuZ3RoIDogRGVjb2RlciBJbnRcbiAgICBzdHJpbmdMZW5ndGggPVxuICAgICAgICBtYXAgU3RyaW5nLmxlbmd0aCBzdHJpbmdcblxuSXQgaXMgb2Z0ZW4gaGVscGZ1bCB0byB1c2UgYG1hcGAgd2l0aCBgb25lT2ZgLCBsaWtlIHdoZW4gZGVmaW5pbmcgYG51bGxhYmxlYDpcblxuICAgIG51bGxhYmxlIDogRGVjb2RlciBhIC0+IERlY29kZXIgKE1heWJlIGEpXG4gICAgbnVsbGFibGUgZGVjb2RlciA9XG4gICAgICAgIG9uZU9mXG4gICAgICAgICAgICBbIG51bGwgTm90aGluZ1xuICAgICAgICAgICAgLCBtYXAgSnVzdCBkZWNvZGVyXG4gICAgICAgICAgICBdXG5cbi19XG5tYXAgOiAoYSAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgdmFsdWVcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXAxXG5cblxuey18IFRyeSB0d28gZGVjb2RlcnMgYW5kIHRoZW4gY29tYmluZSB0aGUgcmVzdWx0LiBXZSBjYW4gdXNlIHRoaXMgdG8gZGVjb2RlXG5vYmplY3RzIHdpdGggbWFueSBmaWVsZHM6XG5cblxuICAgIHR5cGUgYWxpYXMgUG9pbnQgPVxuICAgICAgICB7IHggOiBGbG9hdFxuICAgICAgICAsIHkgOiBGbG9hdFxuICAgICAgICB9XG5cbiAgICBtYWtlUG9pbnQgOiBGbG9hdCAtPiBGbG9hdCAtPiBQb2ludFxuICAgIG1ha2VQb2ludCB4IHkgPVxuICAgICAgICB7IHggPSB4XG4gICAgICAgICwgeSA9IHlcbiAgICAgICAgfVxuXG4gICAgcG9pbnQgOiBEZWNvZGVyIFBvaW50XG4gICAgcG9pbnQgPVxuICAgICAgICBtYXAyIG1ha2VQb2ludCAoZmllbGQgXCJ4XCIgZmxvYXQpIChmaWVsZCBcInlcIiBmbG9hdClcblxuICAgIC0tIGRlY29kZVN0cmluZyBwb2ludCBcIlwiXCJ7IFwieFwiOiAzLCBcInlcIjogNCB9XCJcIlwiID09IE9rIHsgeCA9IDMsIHkgPSA0IH1cblxuSXQgdHJpZXMgZWFjaCBpbmRpdmlkdWFsIGRlY29kZXIgYW5kIHB1dHMgdGhlIHJlc3VsdCB0b2dldGhlciB3aXRoIHRoZSBgUG9pbnRgXG5jb25zdHJ1Y3Rvci5cblxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgdmFsdWVcbm1hcDIgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwMlxuXG5cbnstfCBUcnkgdGhyZWUgZGVjb2RlcnMgYW5kIHRoZW4gY29tYmluZSB0aGUgcmVzdWx0LiBXZSBjYW4gdXNlIHRoaXMgdG8gZGVjb2RlXG5vYmplY3RzIHdpdGggbWFueSBmaWVsZHM6XG5cblxuICAgIHR5cGUgYWxpYXMgUGVyc29uID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nLCBhZ2UgOiBJbnQsIGhlaWdodCA6IEZsb2F0IH1cblxuICAgIG1ha2VQZXJzb24gOiBTdHJpbmcgLT4gSW50IC0+IEZsb2F0IC0+IFBlcnNvblxuICAgIG1ha2VQZXJzb24gbmFtZSBhZ2UgaGVpZ2h0ID1cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIGFnZSA9IGFnZVxuICAgICAgICAsIGhlaWdodCA9IGhlaWdodFxuICAgICAgICB9XG5cbiAgICBwZXJzb24gOiBEZWNvZGVyIFBlcnNvblxuICAgIHBlcnNvbiA9XG4gICAgICAgIG1hcDMgbWFrZVBlcnNvblxuICAgICAgICAgICAgKGF0IFsgXCJuYW1lXCIgXSBzdHJpbmcpXG4gICAgICAgICAgICAoYXQgWyBcImluZm9cIiwgXCJhZ2VcIiBdIGludClcbiAgICAgICAgICAgIChhdCBbIFwiaW5mb1wiLCBcImhlaWdodFwiIF0gZmxvYXQpXG5cbiAgICAtLSBqc29uID0gXCJcIlwieyBcIm5hbWVcIjogXCJ0b21cIiwgXCJpbmZvXCI6IHsgXCJhZ2VcIjogNDIsIFwiaGVpZ2h0XCI6IDEuOCB9IH1cIlwiXCJcbiAgICAtLSBkZWNvZGVTdHJpbmcgcGVyc29uIGpzb24gPT0gT2sgeyBuYW1lID0gXCJ0b21cIiwgYWdlID0gNDIsIGhlaWdodCA9IDEuOCB9XG5cbkxpa2UgYG1hcDJgIGl0IHRyaWVzIGVhY2ggZGVjb2RlciBpbiBvcmRlciBhbmQgdGhlbiBnaXZlIHRoZSByZXN1bHRzIHRvIHRoZVxuYFBlcnNvbmAgY29uc3RydWN0b3IuIFRoYXQgY2FuIGJlIGFueSBmdW5jdGlvbiB0aG91Z2ghXG5cbi19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIHZhbHVlXG5tYXAzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDNcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgdmFsdWVcbm1hcDQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwNFxuXG5cbnstfCAtfVxubWFwNSA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciB2YWx1ZVxubWFwNSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA1XG5cblxuey18IC19XG5tYXA2IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgZiAtPiBEZWNvZGVyIHZhbHVlXG5tYXA2ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDZcblxuXG57LXwgLX1cbm1hcDcgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIGYgLT4gRGVjb2RlciBnIC0+IERlY29kZXIgdmFsdWVcbm1hcDcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwN1xuXG5cbnstfCAtfVxubWFwOCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IGggLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciBmIC0+IERlY29kZXIgZyAtPiBEZWNvZGVyIGggLT4gRGVjb2RlciB2YWx1ZVxubWFwOCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA4XG5cblxuXG4tLSBSVU4gREVDT0RFUlNcblxuXG57LXwgUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbnRvIGEgSlNPTiB2YWx1ZSBhbmQgdGhlbiBydW4gdGhlIGBEZWNvZGVyYCBvbiBpdC5cblRoaXMgd2lsbCBmYWlsIGlmIHRoZSBzdHJpbmcgaXMgbm90IHdlbGwtZm9ybWVkIEpTT04gb3IgaWYgdGhlIGBEZWNvZGVyYFxuZmFpbHMgZm9yIHNvbWUgcmVhc29uLlxuXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjRcIiAgICAgPT0gT2sgNFxuICAgIGRlY29kZVN0cmluZyBpbnQgXCIxICsgMlwiID09IEVyciAuLi5cblxuLX1cbmRlY29kZVN0cmluZyA6IERlY29kZXIgYSAtPiBTdHJpbmcgLT4gUmVzdWx0IEVycm9yIGFcbmRlY29kZVN0cmluZyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5ydW5PblN0cmluZ1xuXG5cbnstfCBSdW4gYSBgRGVjb2RlcmAgb24gc29tZSBKU09OIGBWYWx1ZWAuIFlvdSBjYW4gc2VuZCB0aGVzZSBKU09OIHZhbHVlc1xudGhyb3VnaCBwb3J0cywgc28gdGhhdCBpcyBwcm9iYWJseSB0aGUgbWFpbiB0aW1lIHlvdSB3b3VsZCB1c2UgdGhpcyBmdW5jdGlvbi5cbi19XG5kZWNvZGVWYWx1ZSA6IERlY29kZXIgYSAtPiBWYWx1ZSAtPiBSZXN1bHQgRXJyb3IgYVxuZGVjb2RlVmFsdWUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ucnVuXG5cblxuey18IFJlcHJlc2VudHMgYSBKYXZhU2NyaXB0IHZhbHVlLlxuLX1cbnR5cGUgYWxpYXMgVmFsdWUgPVxuICAgIEpzb24uRW5jb2RlLlZhbHVlXG5cblxuey18IEEgc3RydWN0dXJlZCBlcnJvciBkZXNjcmliaW5nIGV4YWN0bHkgaG93IHRoZSBkZWNvZGVyIGZhaWxlZC4gWW91IGNhbiB1c2VcbnRoaXMgdG8gY3JlYXRlIG1vcmUgZWxhYm9yYXRlIHZpc3VhbGl6YXRpb25zIG9mIGEgZGVjb2RlciBwcm9ibGVtLiBGb3IgZXhhbXBsZSxcbnlvdSBjb3VsZCBzaG93IHRoZSBlbnRpcmUgSlNPTiBvYmplY3QgYW5kIHNob3cgdGhlIHBhcnQgY2F1c2luZyB0aGUgZmFpbHVyZSBpblxucmVkLlxuLX1cbnR5cGUgRXJyb3JcbiAgICA9IEZpZWxkIHsgbmFtZSA6IFN0cmluZywgZXJyb3IgOiBFcnJvciB9XG4gICAgfCBJbmRleCB7IGluZGV4IDogSW50LCBlcnJvciA6IEVycm9yIH1cbiAgICB8IE9uZU9mIChBcnJheSBFcnJvcilcbiAgICB8IEZhaWx1cmUgeyBtZXNzYWdlIDogU3RyaW5nLCB2YWx1ZSA6IFZhbHVlIH1cblxuXG57LXwgQ29udmVydCBhIGRlY29kaW5nIGVycm9yIGludG8gYSBgU3RyaW5nYCB0aGF0IGlzIG5pY2UgZm9yIGRlYnVnZ2luZy5cblxuSXQgcHJvZHVjZXMgbXVsdGlwbGUgbGluZXMgb2Ygb3V0cHV0LCBzbyB5b3UgbWF5IHdhbnQgdG8gcGVlayBhdCBpdCB3aXRoXG5zb21ldGhpbmcgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEh0bWxcbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBlcnJvclRvSHRtbCA6IERlY29kZS5FcnJvciAtPiBIdG1sLkh0bWwgbXNnXG4gICAgZXJyb3JUb0h0bWwgZXJyb3IgPVxuICAgICAgICBIdG1sLnByZSBbXSBbIEh0bWwudGV4dCAoRGVjb2RlLmVycm9yVG9TdHJpbmcgZXJyb3IpIF1cblxuKipOb3RlOioqIEl0IHdvdWxkIGJlIGNvb2wgdG8gZG8gbmljZXIgY29sb3JpbmcgYW5kIGZhbmNpZXIgSFRNTCwgYnV0IEkgd2FudGVkXG50byBhdm9pZCBoYXZpbmcgYW4gYGVsbS9odG1sYCBkZXBlbmRlbmN5IGZvciBub3cuIEl0IGlzIHRvdGFsbHkgcG9zc2libGUgdG9cbmNyYXdsIHRoZSBgRXJyb3JgIHN0cnVjdHVyZSBhbmQgY3JlYXRlIHRoaXMgc2VwYXJhdGVseSB0aG91Z2ghXG5cbi19XG5lcnJvclRvU3RyaW5nIDogRXJyb3IgLT4gU3RyaW5nXG5lcnJvclRvU3RyaW5nIGVycm9yID1cbiAgICBlcnJvclRvU3RyaW5nSGVscCBlcnJvciBbXVxuXG5cbmVycm9yVG9TdHJpbmdIZWxwIDogRXJyb3IgLT4gQXJyYXkgU3RyaW5nIC0+IFN0cmluZ1xuZXJyb3JUb1N0cmluZ0hlbHAgZXJyb3IgY29udGV4dCA9XG4gICAgd2hlbiBlcnJvciBpc1xuICAgICAgICBGaWVsZCB7IG5hbWUgPSBmLCBlcnJvciA9IGVyciB9IC0+XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBpc1NpbXBsZSA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gU3RyaW5nLnBvcEZpcnN0IGYgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgZmlyc3QgPSBjaGFyLCByZXN0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFyLmlzQWxwaGEgY2hhciAmJiBTdHJpbmcuYWxsIENoYXIuaXNBbHBoYU51bSByZXN0XG5cbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPVxuICAgICAgICAgICAgICAgICAgICBpZiBpc1NpbXBsZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi5cIiArKyBmXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJbJ1wiICsrIGYgKysgXCInXVwiXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgZXJyb3JUb1N0cmluZ0hlbHAgZXJyIChbIGZpZWxkTmFtZSBdICsrIGNvbnRleHQpXG5cbiAgICAgICAgSW5kZXggeyBpbmRleCA9IGksIGVycm9yID0gZXJyIH0gLT5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIGluZGV4TmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIFwiW1wiICsrIFN0cmluZy5mcm9tSW50IGkgKysgXCJdXCJcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgKFsgaW5kZXhOYW1lIF0gKysgY29udGV4dClcblxuICAgICAgICBPbmVPZiBlcnJvcnMgLT5cbiAgICAgICAgICAgIHdoZW4gZXJyb3JzIGlzXG4gICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgXCJSYW4gaW50byBhIEpzb24uRGVjb2RlLm9uZU9mIHdpdGggbm8gcG9zc2liaWxpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICArKyAod2hlbiBjb250ZXh0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGF0IGpzb25cIiArKyBTdHJpbmcuam9pbiBcIlwiIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIFsgZXJyIF0gLT5cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUb1N0cmluZ0hlbHAgZXJyIGNvbnRleHRcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbnRleHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSnNvbi5EZWNvZGUub25lT2ZcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlIEpzb24uRGVjb2RlLm9uZU9mIGF0IGpzb25cIiArKyBTdHJpbmcuam9pbiBcIlwiIGNvbnRleHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW50cm9kdWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVyICsrIFwiIGZhaWxlZCBpbiB0aGUgZm9sbG93aW5nIFwiICsrIFN0cmluZy5mcm9tSW50IChBcnJheS5sZW5ndGggZXJyb3JzKSArKyBcIiB3YXlzOlwiXG4gICAgICAgICAgICAgICAgICAgIGluXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5qb2luIFwiXFxuXFxuXCIgKFsgaW50cm9kdWN0aW9uIF0gKysgQXJyYXkuaW5kZXhlZE1hcCBlcnJvck9uZU9mIGVycm9ycylcblxuICAgICAgICBGYWlsdXJlIHsgbWVzc2FnZSA9IG1zZywgdmFsdWUgPSBqc29uIH0gLT5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIGludHJvZHVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gY29udGV4dCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByb2JsZW0gd2l0aCB0aGUgZ2l2ZW4gdmFsdWU6XFxuXFxuXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvYmxlbSB3aXRoIHRoZSB2YWx1ZSBhdCBqc29uXCIgKysgU3RyaW5nLmpvaW4gXCJcIiBjb250ZXh0ICsrIFwiOlxcblxcbiAgICBcIlxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIGludHJvZHVjdGlvbiArKyBpbmRlbnQgKEpzb24uRW5jb2RlLmVuY29kZSA0IGpzb24pICsrIFwiXFxuXFxuXCIgKysgbXNnXG5cblxuZXJyb3JPbmVPZiA6IEludCAtPiBFcnJvciAtPiBTdHJpbmdcbmVycm9yT25lT2YgaSBlcnJvciA9XG4gICAgXCJcXG5cXG4oXCIgKysgU3RyaW5nLmZyb21JbnQgKGkgKyAxKSArKyBcIikgXCIgKysgaW5kZW50IChlcnJvclRvU3RyaW5nIGVycm9yKVxuXG5cbmluZGVudCA6IFN0cmluZyAtPiBTdHJpbmdcbmluZGVudCBzdHIgPVxuICAgIFN0cmluZy5qb2luIFwiXFxuICAgIFwiIChTdHJpbmcuc3BsaXQgXCJcXG5cIiBzdHIpXG5cblxuXG4tLSBGQU5DWSBQUklNSVRJVkVTXG5cblxuey18IElnbm9yZSB0aGUgSlNPTiBhbmQgcHJvZHVjZSBhIGNlcnRhaW4gR3JlbiB2YWx1ZS5cblxuICAgIGRlY29kZVN0cmluZyAoc3VjY2VlZCA0MikgXCJ0cnVlXCIgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKHN1Y2NlZWQgNDIpIFwiWzEsMiwzXVwiID09IE9rIDQyXG4gICAgZGVjb2RlU3RyaW5nIChzdWNjZWVkIDQyKSBcImhlbGxvXCIgICA9PSBFcnIgLi4uIC0tIHRoaXMgaXMgbm90IGEgdmFsaWQgSlNPTiBzdHJpbmdcblxuVGhpcyBpcyBoYW5keSB3aGVuIHVzZWQgd2l0aCBgb25lT2ZgIG9yIGBhbmRUaGVuYC5cblxuLX1cbnN1Y2NlZWQgOiBhIC0+IERlY29kZXIgYVxuc3VjY2VlZCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5zdWNjZWVkXG5cblxuey18IElnbm9yZSB0aGUgSlNPTiBhbmQgbWFrZSB0aGUgZGVjb2RlciBmYWlsLiBUaGlzIGlzIGhhbmR5IHdoZW4gdXNlZCB3aXRoXG5gb25lT2ZgIG9yIGBhbmRUaGVuYCB3aGVyZSB5b3Ugd2FudCB0byBnaXZlIGEgY3VzdG9tIGVycm9yIG1lc3NhZ2UgaW4gc29tZVxuY2FzZS5cblxuU2VlIHRoZSBbYGFuZFRoZW5gXSgjYW5kVGhlbikgZG9jcyBmb3IgYW4gZXhhbXBsZS5cblxuLX1cbmZhaWwgOiBTdHJpbmcgLT4gRGVjb2RlciBhXG5mYWlsID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmZhaWxcblxuXG57LXwgQ3JlYXRlIGRlY29kZXJzIHRoYXQgZGVwZW5kIG9uIHByZXZpb3VzIHJlc3VsdHMuIElmIHlvdSBhcmUgY3JlYXRpbmdcbnZlcnNpb25lZCBkYXRhLCB5b3UgbWlnaHQgZG8gc29tZXRoaW5nIGxpa2UgdGhpczpcblxuXG4gICAgaW5mbyA6IERlY29kZXIgSW5mb1xuICAgIGluZm8gPVxuICAgICAgICBmaWVsZCBcInZlcnNpb25cIiBpbnRcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gaW5mb0hlbHBcblxuICAgIGluZm9IZWxwIDogSW50IC0+IERlY29kZXIgSW5mb1xuICAgIGluZm9IZWxwIHZlcnNpb24gPVxuICAgICAgICB3aGVuIHZlcnNpb24gaXNcbiAgICAgICAgICAgIDQgLT5cbiAgICAgICAgICAgICAgICBpbmZvRGVjb2RlcjRcblxuICAgICAgICAgICAgMyAtPlxuICAgICAgICAgICAgICAgIGluZm9EZWNvZGVyM1xuXG4gICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgZmFpbCA8fFxuICAgICAgICAgICAgICAgICAgICBcIlRyeWluZyB0byBkZWNvZGUgaW5mbywgYnV0IHZlcnNpb24gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrIHRvU3RyaW5nIHZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICsrIFwiIGlzIG5vdCBzdXBwb3J0ZWQuXCJcblxuICAgIC0tIGluZm9EZWNvZGVyNCA6IERlY29kZXIgSW5mb1xuICAgIC0tIGluZm9EZWNvZGVyMyA6IERlY29kZXIgSW5mb1xuXG4tfVxuYW5kVGhlbiA6IChhIC0+IERlY29kZXIgYikgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYlxuYW5kVGhlbiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5hbmRUaGVuXG5cblxuey18IFNvbWV0aW1lcyB5b3UgaGF2ZSBKU09OIHdpdGggcmVjdXJzaXZlIHN0cnVjdHVyZSwgbGlrZSBuZXN0ZWQgY29tbWVudHMuXG5Zb3UgY2FuIHVzZSBgbGF6eWAgdG8gbWFrZSBzdXJlIHlvdXIgZGVjb2RlciB1bnJvbGxzIGxhemlseS5cblxuICAgIHR5cGUgYWxpYXMgQ29tbWVudCA9XG4gICAgICAgIHsgbWVzc2FnZSA6IFN0cmluZ1xuICAgICAgICAsIHJlc3BvbnNlcyA6IFJlc3BvbnNlc1xuICAgICAgICB9XG5cbiAgICBtYWtlQ29tbWVudCA6IFN0cmluZyAtPiBSZXNwb25zZXMgLT4gQ29tbWVudFxuICAgIG1ha2VDb21tZW50IG1lc3NhZ2UgcmVzcG9uc2VzID1cbiAgICAgICAgeyBtZXNzYWdlID0gbWVzc2FnZVxuICAgICAgICAsIHJlc3BvbnNlcyA9IHJlc3BvbnNlc1xuICAgICAgICB9XG5cbiAgICB0eXBlIFJlc3BvbnNlc1xuICAgICAgICA9IFJlc3BvbnNlcyAoQXJyYXkgQ29tbWVudClcblxuICAgIGNvbW1lbnQgOiBEZWNvZGVyIENvbW1lbnRcbiAgICBjb21tZW50ID1cbiAgICAgICAgbWFwMiBtYWtlQ29tbWVudFxuICAgICAgICAgICAgKGZpZWxkIFwibWVzc2FnZVwiIHN0cmluZylcbiAgICAgICAgICAgIChmaWVsZCBcInJlc3BvbnNlc1wiIChtYXAgUmVzcG9uc2VzIChhcnJheSAobGF6eSAoXFxfIC0+IGNvbW1lbnQpKSkpKVxuXG5JZiB3ZSBoYWQgc2FpZCBgYXJyYXkgY29tbWVudGAgaW5zdGVhZCwgd2Ugd291bGQgc3RhcnQgZXhwYW5kaW5nIHRoZSB2YWx1ZVxuaW5maW5pdGVseS4gV2hhdCBpcyBhIGBjb21tZW50YD8gSXQgaXMgYSBkZWNvZGVyIGZvciBvYmplY3RzIHdoZXJlIHRoZVxuYHJlc3BvbnNlc2AgZmllbGQgY29udGFpbnMgY29tbWVudHMuIFdoYXQgaXMgYSBgY29tbWVudGAgdGhvdWdoPyBFdGMuXG5cbkJ5IHVzaW5nIGBhcnJheSAobGF6eSAoXFxfIC0+IGNvbW1lbnQpKWAgd2UgbWFrZSBzdXJlIHRoZSBkZWNvZGVyIG9ubHkgZXhwYW5kc1xudG8gYmUgYXMgZGVlcCBhcyB0aGUgSlNPTiB3ZSBhcmUgZ2l2ZW4uIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHJlY3Vyc2l2ZSBkYXRhXG5zdHJ1Y3R1cmVzIFtoZXJlXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2NvbXBpbGVyL2Jsb2IvbWFzdGVyL2hpbnRzL3JlY3Vyc2l2ZS1hbGlhcy5tZFxuXG4tfVxubGF6eSA6ICh7fSAtPiBEZWNvZGVyIGEpIC0+IERlY29kZXIgYVxubGF6eSB0aHVuayA9XG4gICAgYW5kVGhlbiB0aHVuayAoc3VjY2VlZCB7fSlcblxuXG57LXwgRG8gbm90IGRvIGFueXRoaW5nIHdpdGggYSBKU09OIHZhbHVlLCBqdXN0IGJyaW5nIGl0IGludG8gR3JlbiBhcyBhIGBWYWx1ZWAuXG5UaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IGhhdmUgcGFydGljdWxhcmx5IGNvbXBsZXggZGF0YSB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvXG5kZWFsIHdpdGggbGF0ZXIuIE9yIGlmIHlvdSBhcmUgZ29pbmcgdG8gc2VuZCBpdCBvdXQgYSBwb3J0IGFuZCBkbyBub3QgY2FyZVxuYWJvdXQgaXRzIHN0cnVjdHVyZS5cbi19XG52YWx1ZSA6IERlY29kZXIgVmFsdWVcbnZhbHVlID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZVZhbHVlXG5cblxuey18IERlY29kZSBhIGBudWxsYCB2YWx1ZSBpbnRvIHNvbWUgR3JlbiB2YWx1ZS5cblxuICAgIGRlY29kZVN0cmluZyAobnVsbCBGYWxzZSkgXCJudWxsXCIgPT0gT2sgRmFsc2VcbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgNDIpIFwibnVsbFwiICAgID09IE9rIDQyXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIDQyKSBcIjQyXCIgICAgICA9PSBFcnIgLi5cbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgNDIpIFwiZmFsc2VcIiAgID09IEVyciAuLlxuXG5TbyBpZiB5b3UgZXZlciBzZWUgYSBgbnVsbGAsIHRoaXMgd2lsbCByZXR1cm4gd2hhdGV2ZXIgdmFsdWUgeW91IHNwZWNpZmllZC5cblxuLX1cbm51bGwgOiBhIC0+IERlY29kZXIgYVxubnVsbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVOdWxsXG4iLAogICAgICAgICJtb2R1bGUgQ2hhciBleHBvc2luZ1xuICAgICggQ2hhclxuICAgICwgaXNVcHBlciwgaXNMb3dlciwgaXNBbHBoYSwgaXNBbHBoYU51bVxuICAgICwgaXNEaWdpdCwgaXNPY3REaWdpdCwgaXNIZXhEaWdpdFxuICAgICwgdG9Db2RlLCBmcm9tQ29kZVxuICAgIClcblxuey18IEZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIGNoYXJhY3RlcnMuIENoYXJhY3RlciBsaXRlcmFscyBhcmUgZW5jbG9zZWQgaW5cbmAnYSdgIHBhaXIgb2Ygc2luZ2xlIHF1b3Rlcy5cblxuXG5AZG9jcyBDaGFyXG5cblxuIyMgQVNDSUkgTGV0dGVyc1xuXG5AZG9jcyBpc1VwcGVyLCBpc0xvd2VyLCBpc0FscGhhLCBpc0FscGhhTnVtXG5cblxuIyMgRGlnaXRzXG5cbkBkb2NzIGlzRGlnaXQsIGlzT2N0RGlnaXQsIGlzSGV4RGlnaXRcblxuXG4jIyBVbmljb2RlIENvZGUgUG9pbnRzXG5cbkBkb2NzIHRvQ29kZSwgZnJvbUNvZGVcblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoKCYmKSwgKDw9KSwgKD49KSwgKHx8KSwgQm9vbCwgSW50KVxuaW1wb3J0IEdyZW4uS2VybmVsLkNoYXJcblxuXG5cbi0tIENIQVJcblxuXG57LXwgQSBgQ2hhcmAgaXMgYSBzaW5nbGUgW3VuaWNvZGVdW3VdIGNoYXJhY3RlcjpcblxuICAgICdhJ1xuXG4gICAgJzAnXG5cbiAgICAnWidcblxuICAgICc/J1xuXG4gICAgJ1wiJ1xuXG4gICAgJ86jJ1xuXG4gICAgJ/CfmYgnXG5cbiAgICAnXFx0J1xuXG4gICAgJ1wiJ1xuXG4gICAgJ1xcJydcblxuICAgICfwn5mIJyAtLSAn8J+ZiCdcblxuKipOb3RlIDE6KiogWW91IF9jYW5ub3RfIHVzZSBzaW5nbGUgcXVvdGVzIGFyb3VuZCBtdWx0aXBsZSBjaGFyYWN0ZXJzIGxpa2UgaW5cbkphdmFTY3JpcHQuIFRoaXMgaXMgaG93IHdlIGRpc3Rpbmd1aXNoIFtgU3RyaW5nYF0oU3RyaW5nI1N0cmluZykgYW5kIGBDaGFyYFxudmFsdWVzIGluIHN5bnRheC5cblxuKipOb3RlIDI6KiogWW91IGNhbiB1c2UgdGhlIHVuaWNvZGUgZXNjYXBlcyBmcm9tIGBcXHV7MDAwMH1gIHRvIGBcXHV7MTBGRkZGfWAgdG9cbnJlcHJlc2VudCBjaGFyYWN0ZXJzIGJ5IHRoZWlyIGNvZGUgcG9pbnQuIFlvdSBjYW4gYWxzbyBpbmNsdWRlIHRoZSB1bmljb2RlXG5jaGFyYWN0ZXJzIGRpcmVjdGx5LiBVc2luZyB0aGUgZXNjYXBlcyBjYW4gYmUgYmV0dGVyIGlmIHlvdSBuZWVkIG9uZSBvZiB0aGVcbm1hbnkgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHdpdGggZGlmZmVyZW50IHdpZHRocy5cblxuW3VdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmljb2RlXG5cbi19XG50eXBlIENoYXJcbiAgICA9IENoYXIgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cblxuLS0gQ0xBU1NJRklDQVRJT05cblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzVXBwZXIgJ0EnID09IFRydWVcblxuICAgIGlzVXBwZXIgJ0InXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzVXBwZXIgJ1onXG4gICAgICAgID09IFRydWVcblxuICAgIGlzVXBwZXIgJzAnID09IEZhbHNlXG5cbiAgICBpc1VwcGVyICdhJyA9PSBGYWxzZVxuXG4gICAgaXNVcHBlciAnLScgPT0gRmFsc2VcblxuICAgIGlzVXBwZXIgJ86jJyA9PSBGYWxzZVxuXG4tfVxuaXNVcHBlciA6IENoYXIgLT4gQm9vbFxuaXNVcHBlciBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgY29kZSA8PSAweDVBICYmIDB4NDEgPD0gY29kZVxuXG5cbnstfCBEZXRlY3QgbG93ZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNMb3dlciAnYScgPT0gVHJ1ZVxuXG4gICAgaXNMb3dlciAnYidcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNMb3dlciAneidcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNMb3dlciAnMCcgPT0gRmFsc2VcblxuICAgIGlzTG93ZXIgJ0EnID09IEZhbHNlXG5cbiAgICBpc0xvd2VyICctJyA9PSBGYWxzZVxuXG4gICAgaXNMb3dlciAnz4AnID09IEZhbHNlXG5cbi19XG5pc0xvd2VyIDogQ2hhciAtPiBCb29sXG5pc0xvd2VyIGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICAweDYxIDw9IGNvZGUgJiYgY29kZSA8PSAweDdBXG5cblxuey18IERldGVjdCB1cHBlciBjYXNlIGFuZCBsb3dlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc0FscGhhICdhJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhICdiJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhICdFJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhICdZJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhICcwJyA9PSBGYWxzZVxuXG4gICAgaXNBbHBoYSAnLScgPT0gRmFsc2VcblxuICAgIGlzQWxwaGEgJ8+AJyA9PSBGYWxzZVxuXG4tfVxuaXNBbHBoYSA6IENoYXIgLT4gQm9vbFxuaXNBbHBoYSBjaGFyID1cbiAgICBpc0xvd2VyIGNoYXIgfHwgaXNVcHBlciBjaGFyXG5cblxuey18IERldGVjdCB1cHBlciBjYXNlIGFuZCBsb3dlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc0FscGhhTnVtICdhJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICdiJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICdFJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICdZJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICcwJyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICc3JyA9PSBUcnVlXG5cbiAgICBpc0FscGhhTnVtICctJyA9PSBGYWxzZVxuXG4gICAgaXNBbHBoYU51bSAnz4AnID09IEZhbHNlXG5cbi19XG5pc0FscGhhTnVtIDogQ2hhciAtPiBCb29sXG5pc0FscGhhTnVtIGNoYXIgPVxuICAgIGlzTG93ZXIgY2hhciB8fCBpc1VwcGVyIGNoYXIgfHwgaXNEaWdpdCBjaGFyXG5cblxuey18IERldGVjdCBkaWdpdHMgYDAxMjM0NTY3ODlgXG5cbiAgICBpc0RpZ2l0ICcwJyA9PSBUcnVlXG5cbiAgICBpc0RpZ2l0ICcxJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc0RpZ2l0ICc5J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc0RpZ2l0ICdhJyA9PSBGYWxzZVxuXG4gICAgaXNEaWdpdCAnYicgPT0gRmFsc2VcblxuICAgIGlzRGlnaXQgJ0EnID09IEZhbHNlXG5cbi19XG5pc0RpZ2l0IDogQ2hhciAtPiBCb29sXG5pc0RpZ2l0IGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4MzkgJiYgMHgzMCA8PSBjb2RlXG5cblxuey18IERldGVjdCBvY3RhbCBkaWdpdHMgYDAxMjM0NTY3YFxuXG4gICAgaXNPY3REaWdpdCAnMCcgPT0gVHJ1ZVxuXG4gICAgaXNPY3REaWdpdCAnMSdcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNPY3REaWdpdCAnNydcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNPY3REaWdpdCAnOCcgPT0gRmFsc2VcblxuICAgIGlzT2N0RGlnaXQgJ2EnID09IEZhbHNlXG5cbiAgICBpc09jdERpZ2l0ICdBJyA9PSBGYWxzZVxuXG4tfVxuaXNPY3REaWdpdCA6IENoYXIgLT4gQm9vbFxuaXNPY3REaWdpdCBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgY29kZSA8PSAweDM3ICYmIDB4MzAgPD0gY29kZVxuXG5cbnstfCBEZXRlY3QgaGV4YWRlY2ltYWwgZGlnaXRzIGAwMTIzNDU2Nzg5YWJjZGVmQUJDREVGYFxuLX1cbmlzSGV4RGlnaXQgOiBDaGFyIC0+IEJvb2xcbmlzSGV4RGlnaXQgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgICgweDMwIDw9IGNvZGUgJiYgY29kZSA8PSAweDM5KVxuICAgICAgICB8fCAoMHg0MSA8PSBjb2RlICYmIGNvZGUgPD0gMHg0NilcbiAgICAgICAgfHwgKDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4NjYpXG5cblxuXG4tLSBDT05WRVJTSU9OU1xuXG5cbnstfCBDb252ZXJ0IHRvIHRoZSBjb3JyZXNwb25kaW5nIFVuaWNvZGUgW2NvZGUgcG9pbnRdW2NwXS5cblxuW2NwXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29kZV9wb2ludFxuXG4gICAgdG9Db2RlICdBJyA9PSA2NVxuXG4gICAgdG9Db2RlICdCJyA9PSA2NlxuXG4gICAgdG9Db2RlICfmnKgnID09IDB4NjcyOFxuXG4gICAgdG9Db2RlICfwnYyGJyA9PSAweDAwMDFEMzA2XG5cbiAgICB0b0NvZGUgJ/CfmIMnID09IDB4MDAwMUY2MDNcblxuLX1cbnRvQ29kZSA6IENoYXIgLT4gSW50XG50b0NvZGUgPVxuICAgIEdyZW4uS2VybmVsLkNoYXIudG9Db2RlXG5cblxuey18IENvbnZlcnQgYSBVbmljb2RlIFtjb2RlIHBvaW50XVtjcF0gdG8gYSBjaGFyYWN0ZXIuXG5cbiAgICBmcm9tQ29kZSA2NSA9PSAnQSdcblxuICAgIGZyb21Db2RlIDY2ID09ICdCJ1xuXG4gICAgZnJvbUNvZGUgMHg2NzI4ID09ICfmnKgnXG5cbiAgICBmcm9tQ29kZSAweDAwMDFEMzA2ID09ICfwnYyGJ1xuXG4gICAgZnJvbUNvZGUgMHgwMDAxRjYwMyA9PSAn8J+YgydcblxuICAgIGZyb21Db2RlIC0xID09ICfvv70nXG5cblRoZSBmdWxsIHJhbmdlIG9mIHVuaWNvZGUgaXMgZnJvbSBgMGAgdG8gYDB4MTBGRkZGYC4gV2l0aCBudW1iZXJzIG91dHNpZGUgdGhhdFxucmFuZ2UsIHlvdSBnZXQgW3RoZSByZXBsYWNlbWVudCBjaGFyYWN0ZXJdW2ZmZmRdLlxuXG5bY3BdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlX3BvaW50XG5bZmZmZF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWxzXyhVbmljb2RlX2Jsb2NrKSNSZXBsYWNlbWVudF9jaGFyYWN0ZXJcblxuLX1cbmZyb21Db2RlIDogSW50IC0+IENoYXJcbmZyb21Db2RlID1cbiAgICBHcmVuLktlcm5lbC5DaGFyLmZyb21Db2RlXG4iLAogICAgICAgICJtb2R1bGUgUmVzdWx0IGV4cG9zaW5nXG4gICAgKCBSZXN1bHQoLi4pXG4gICAgLCBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwgZmlyc3RPaywgYWxsT2tcbiAgICAsIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuICAgICwgYW5kVGhlbiwgb25FcnJvclxuICAgICwgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgdG9NYXliZSwgZnJvbU1heWJlLCBtYXBFcnJvclxuICAgIClcblxuey18IEEgYFJlc3VsdGAgaXMgdGhlIHJlc3VsdCBvZiBhIGNvbXB1dGF0aW9uIHRoYXQgbWF5IGZhaWwuIFRoaXMgaXMgYSBncmVhdFxud2F5IHRvIG1hbmFnZSBlcnJvcnMgaW4gR3Jlbi5cblxuQGRvY3MgUmVzdWx0XG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGZpcnN0T2ssIGFsbE9rXG5cblxuIyMgTWFwcGluZ1xuXG5AZG9jcyBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcblxuXG4jIyBDaGFpbmluZ1xuXG5AZG9jcyBhbmRUaGVuLCBvbkVycm9yXG5cblxuIyMgSGFuZGxpbmcgRXJyb3JzXG5cbkBkb2NzIHdpdGhEZWZhdWx0LCB3aXRoRGVmYXVsdExhenksIHRvTWF5YmUsIGZyb21NYXliZSwgbWFwRXJyb3JcblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5cblxuey18IEEgYFJlc3VsdGAgaXMgZWl0aGVyIGBPa2AgbWVhbmluZyB0aGUgY29tcHV0YXRpb24gc3VjY2VlZGVkLCBvciBpdCBpcyBhblxuYEVycmAgbWVhbmluZyB0aGF0IHRoZXJlIHdhcyBzb21lIGZhaWx1cmUuXG4tfVxudHlwZSBSZXN1bHQgZXJyb3IgdmFsdWVcbiAgICA9IE9rIHZhbHVlXG4gICAgfCBFcnIgZXJyb3JcblxuXG57LXwgSWYgdGhlIHJlc3VsdCBpcyBgT2tgIGNoZWNrIGlmIHRoZSBjb250YWluZWQgdmFsdWUgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgdmFsdWUuXG5cbiAgICBSZXN1bHQuaGFzVmFsdWUgMTIzIChPayAxMjMpID09IFRydWVcblxuICAgIFJlc3VsdC5oYXNWYWx1ZSAxMjMgKE9rIDUpID09IEZhbHNlXG4gICAgXG4gICAgUmVzdWx0Lmhhc1ZhbHVlIDEyMyAoRXJyIFwiZmFpbGVkXCIpID09IEZhbHNlXG5cbi19XG5oYXNWYWx1ZSA6IGEgLT4gUmVzdWx0IHggYSAtPiBCb29sXG5oYXNWYWx1ZSB2YWx1ZSByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIGEgPT0gdmFsdWVcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgSWYgdGhlIHJlc3VsdCBpcyBgT2tgIGNoZWNrIGlmIHRoZSBjb250YWluZWQgdmFsdWUgcGFzc2VzIHRoZSBwcm92aWRlZCB0ZXN0LlxuXG4gICAgUmVzdWx0LmNoZWNrVmFsdWUgaXNPZGQgKE9rIDUpID09IFRydWVcblxuICAgIFJlc3VsdC5jaGVja1ZhbHVlIGlzT2RkIChPayAxMikgPT0gRmFsc2VcbiAgICBcbiAgICBSZXN1bHQuY2hlY2tWYWx1ZSBpc09kZCAoRXJyIFwiZmFpbGVkXCIpID09IEZhbHNlXG5cbi19XG5jaGVja1ZhbHVlIDogKGEgLT4gQm9vbCkgLT4gUmVzdWx0IHggYSAtPiBCb29sXG5jaGVja1ZhbHVlIHRlc3QgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICB0ZXN0IGEgXG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IFJldHVybnMgdGhlIGZpcnN0IGBPa2AgdmFsdWUgaW4gYW4gYEFycmF5YCBvZiBgUmVzdWx0YHMuXG5cbiAgICBSZXN1bHQuZmlyc3RPayBbIE9rIDUsIEVyciAwLCBPayAxMCBdID09IEp1c3QgNVxuXG4gICAgUmVzdWx0LmZpcnN0T2sgWyBFcnIgMCwgRXJyIDEgXSA9PSBOb3RoaW5nXG5cbi19XG5maXJzdE9rIDogQXJyYXkgKFJlc3VsdCB4IGEpIC0+IE1heWJlIGFcbmZpcnN0T2sgYXJyYXkgPVxuICAgIEFycmF5LmZpbmRGaXJzdCBpc09rIGFycmF5XG4gICAgICAgIHw+IE1heWJlLm1hcCAudmFsdWVcbiAgICAgICAgfD4gTWF5YmUuYW5kVGhlbiB0b01heWJlXG5cblxuey18IENvbnZlcnQgYW4gYEFycmF5YCBvZiBgUmVzdWx0IGVyciBva2AgdG8gYFJlc3VsdCAoQXJyYXkgZXJyKSAoQXJyYXkgb2spYC4gWW91J2xsIG9ubHlcbnJlY2VpdmUgYW4gYE9rYCBpZiB0aGVyZSBhcmUgbm8gYEVycmAgdmFsdWVzIGluIHRoZSBgQXJyYXlgLlxuXG4gICAgUmVzdWx0LmFsbE9rIFsgT2sgNSwgRXJyIDAsIE9rIDEwIF0gPT0gRXJyIFsgMCBdXG5cbiAgICBSZXN1bHQuYWxsT2sgWyBPayAwLCBPayAxIF0gPT0gT2sgWyAwLCAxIF1cblxuLX1cbmFsbE9rIDogQXJyYXkgKFJlc3VsdCBlcnIgb2spIC0+IFJlc3VsdCAoQXJyYXkgZXJyKSAoQXJyYXkgb2spXG5hbGxPayBhcnJheSA9XG4gICAgbGV0XG4gICAgICAgIGVycm9ycyA9XG4gICAgICAgICAgICBBcnJheS5tYXBBbmRLZWVwSnVzdCBlcnJUb01heWJlIGFycmF5XG4gICAgaW5cbiAgICBpZiBBcnJheS5sZW5ndGggZXJyb3JzID4gMCB0aGVuXG4gICAgICAgIEVyciBlcnJvcnNcblxuICAgIGVsc2VcbiAgICAgICAgT2sgPHwgQXJyYXkubWFwQW5kS2VlcEp1c3QgdG9NYXliZSBhcnJheVxuXG5cbmVyclRvTWF5YmUgOiBSZXN1bHQgZXJyIG9rIC0+IE1heWJlIGVyclxuZXJyVG9NYXliZSByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIF8gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBFcnIgZXJyIC0+XG4gICAgICAgICAgICBKdXN0IGVyclxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgcmV0dXJuIHRoZSB2YWx1ZSwgYnV0IGlmIHRoZSByZXN1bHQgaXMgYW4gYEVycmAgdGhlblxucmV0dXJuIGEgZ2l2ZW4gZGVmYXVsdCB2YWx1ZS4gVGhlIGZvbGxvd2luZyBleGFtcGxlcyB0cnkgdG8gcGFyc2UgaW50ZWdlcnMuXG5cbiAgICBSZXN1bHQud2l0aERlZmF1bHQgMCAoT2sgMTIzKSA9PSAxMjNcblxuICAgIFJlc3VsdC53aXRoRGVmYXVsdCAwIChFcnIgXCJub1wiKSA9PSAwXG5cbi19XG53aXRoRGVmYXVsdCA6IGEgLT4gUmVzdWx0IHggYSAtPiBhXG53aXRoRGVmYXVsdCBkZWYgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICBhXG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIGRlZlxuXG5cbnstfCBTYW1lIGFzIFt3aXRoRGVmYXVsdF0oI3dpdGhEZWZhdWx0KSBidXQgdGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBmdW5jdGlvbi5cblRoaXMgbGV0cyB5b3UgYXZvaWQgY29tcHV0aW5nIHRoZSBkZWZhdWx0IHZhbHVlIGlmIGl0IGlzbid0IG5lY2Vzc2FyeS5cblxuLX1cbndpdGhEZWZhdWx0TGF6eSA6ICh7fSAtPiBhKSAtPiBSZXN1bHQgeCBhIC0+IGFcbndpdGhEZWZhdWx0TGF6eSBwcm92aWRlciByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIGFcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgcHJvdmlkZXIge31cblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiB0byBhIHJlc3VsdC4gSWYgdGhlIHJlc3VsdCBpcyBgT2tgLCBpdCB3aWxsIGJlIGNvbnZlcnRlZC5cbklmIHRoZSByZXN1bHQgaXMgYW4gYEVycmAsIHRoZSBzYW1lIGVycm9yIHZhbHVlIHdpbGwgcHJvcGFnYXRlIHRocm91Z2guXG5cbiAgICBtYXAgc3FydCAoT2sgNC4wKSA9PSBPayAyLjBcblxuICAgIG1hcCBzcXJ0IChFcnIgXCJiYWQgaW5wdXRcIikgPT0gRXJyIFwiYmFkIGlucHV0XCJcblxuLX1cbm1hcCA6IChhIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXAgZnVuYyByYSA9XG4gICAgd2hlbiByYSBpc1xuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICBPayAoZnVuYyBhKVxuXG4gICAgICAgIEVyciBlIC0+XG4gICAgICAgICAgICBFcnIgZVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIGlmIGJvdGggcmVzdWx0cyBhcmUgYE9rYC4gSWYgbm90LCB0aGUgZmlyc3QgYEVycmAgd2lsbFxucHJvcGFnYXRlIHRocm91Z2guXG5cbiAgICBtYXAyIG1heCAoT2sgNDIpIChPayAxMykgPT0gT2sgNDJcblxuICAgIG1hcDIgbWF4IChFcnIgXCJ4XCIpIChPayAxMykgPT0gRXJyIFwieFwiXG5cbiAgICBtYXAyIG1heCAoT2sgNDIpIChFcnIgXCJ5XCIpID09IEVyciBcInlcIlxuXG4gICAgbWFwMiBtYXggKEVyciBcInhcIikgKEVyciBcInlcIikgPT0gRXJyIFwieFwiXG5cblRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSB0d28gY29tcHV0YXRpb25zIHRoYXQgbWF5IGZhaWwsIGFuZCB5b3Ugd2FudFxudG8gcHV0IHRoZW0gdG9nZXRoZXIgcXVpY2tseS5cblxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggdmFsdWVcbm1hcDIgZnVuYyByYSByYiA9XG4gICAgd2hlbiByYSBpc1xuICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICB3aGVuIHJiIGlzXG4gICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgIE9rIGIgLT5cbiAgICAgICAgICAgICAgICAgICAgT2sgKGZ1bmMgYSBiKVxuXG5cbnstfCAtfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggdmFsdWVcbm1hcDMgZnVuYyByYSByYiByYyA9XG4gICAgd2hlbiByYSBpc1xuICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICB3aGVuIHJiIGlzXG4gICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgIE9rIGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiByYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBPayBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgKGZ1bmMgYSBiIGMpXG5cblxuey18IC19XG5tYXA0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCBjIC0+IFJlc3VsdCB4IGQgLT4gUmVzdWx0IHggdmFsdWVcbm1hcDQgZnVuYyByYSByYiByYyByZCA9XG4gICAgd2hlbiByYSBpc1xuICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICB3aGVuIHJiIGlzXG4gICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgIE9rIGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiByYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBPayBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiByZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIgYyBkKVxuXG5cbnstfCAtfVxubWFwNSA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCBjIC0+IFJlc3VsdCB4IGQgLT4gUmVzdWx0IHggZSAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwNSBmdW5jIHJhIHJiIHJjIHJkIHJlID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHJkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgZSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIgYyBkIGUpXG5cblxuey18IENoYWluIHRvZ2V0aGVyIGEgc2VxdWVuY2Ugb2YgY29tcHV0YXRpb25zIHRoYXQgbWF5IGZhaWwuIEl0IGlzIGhlbHBmdWxcbnRvIHNlZSBpdHMgZGVmaW5pdGlvbjpcblxuICAgIGFuZFRoZW4gOiAoYSAtPiBSZXN1bHQgZSBiKSAtPiBSZXN1bHQgZSBhIC0+IFJlc3VsdCBlIGJcbiAgICBhbmRUaGVuIGNhbGxiYWNrIHJlc3VsdCA9XG4gICAgICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgICAgIEVyciBtc2cgLT5cbiAgICAgICAgICAgICAgICBFcnIgbXNnXG5cblRoaXMgbWVhbnMgd2Ugb25seSBjb250aW51ZSB3aXRoIHRoZSBjYWxsYmFjayBpZiB0aGluZ3MgYXJlIGdvaW5nIHdlbGwuIEZvclxuZXhhbXBsZSwgc2F5IHlvdSBuZWVkIHRvIHVzZSAoYHRvSW50IDogU3RyaW5nIC0+IFJlc3VsdCBTdHJpbmcgSW50YCkgdG8gcGFyc2VcbmEgbW9udGggYW5kIG1ha2Ugc3VyZSBpdCBpcyBiZXR3ZWVuIDEgYW5kIDEyOlxuXG5cbiAgICB0b1ZhbGlkTW9udGggOiBJbnQgLT4gUmVzdWx0IFN0cmluZyBJbnRcbiAgICB0b1ZhbGlkTW9udGggbW9udGggPVxuICAgICAgICBpZiBtb250aCA+PSAxICYmIG1vbnRoIDw9IDEyIHRoZW5cbiAgICAgICAgICAgIE9rIG1vbnRoXG5cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgRXJyIFwibW9udGhzIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxMlwiXG5cbiAgICB0b01vbnRoIDogU3RyaW5nIC0+IFJlc3VsdCBTdHJpbmcgSW50XG4gICAgdG9Nb250aCByYXdTdHJpbmcgPVxuICAgICAgICB0b0ludCByYXdTdHJpbmdcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gdG9WYWxpZE1vbnRoXG5cbiAgICAtLSB0b01vbnRoIFwiNFwiID09IE9rIDRcbiAgICAtLSB0b01vbnRoIFwiOVwiID09IE9rIDlcbiAgICAtLSB0b01vbnRoIFwiYVwiID09IEVyciBcImNhbm5vdCBwYXJzZSB0byBhbiBJbnRcIlxuICAgIC0tIHRvTW9udGggXCIwXCIgPT0gRXJyIFwibW9udGhzIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAxMlwiXG5cblRoaXMgYWxsb3dzIHVzIHRvIGNvbWUgb3V0IG9mIGEgY2hhaW4gb2Ygb3BlcmF0aW9ucyB3aXRoIHF1aXRlIGEgc3BlY2lmaWMgZXJyb3Jcbm1lc3NhZ2UuIEl0IGlzIG9mdGVuIGJlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIHR5cGUgdGhhdCBleHBsaWNpdGx5IHJlcHJlc2VudHNcbnRoZSBleGFjdCB3YXlzIHlvdXIgY29tcHV0YXRpb24gbWF5IGZhaWwuIFRoaXMgd2F5IGl0IGlzIGVhc3kgdG8gaGFuZGxlIGluIHlvdXJcbmNvZGUuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gUmVzdWx0IHggYikgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiXG5hbmRUaGVuIGNhbGxiYWNrIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgdmFsdWUgLT5cbiAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgRXJyIG1zZyAtPlxuICAgICAgICAgICAgRXJyIG1zZ1xuXG5cbnstfCBUaGlzIGlzIHNpbWlsYXIgdG8gW2FuZFRoZW5dKCNhbmRUaGVuKSBidXQgdGhlIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuXG50aGUgYFJlc3VsdGAgaXMgYW4gYEVycmAgdmFsdWUuIFRoaXMgZ2l2ZXMgeW91IHRoZSBvcHRpb24gb2YgZGVhbGluZyB3aXRoIGVycm9yc1xuaW4gYSBjaGFpbi5cblxuICAgIHRvSW50IFwiYVwiXG4gICAgICAgIHw+IG9uRXJyb3IgKFxcX21zZyAtPiBPayAxKSAtLSBkZWZhdWx0aW5nIHRvIGZpcnN0IG1vbnRoIG9mIHRoZSB5ZWFyXG4gICAgICAgIHw+IGFuZFRoZW4gdG9WYWxpZE1vbnRoXG5cbi19XG5vbkVycm9yIDogKGEgLT4gUmVzdWx0IGIgeCkgLT4gUmVzdWx0IGEgeCAtPiBSZXN1bHQgYiB4XG5vbkVycm9yIGNhbGxiYWNrIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgdmFsdWUgLT5cbiAgICAgICAgICAgIE9rIHZhbHVlXG5cbiAgICAgICAgRXJyIGVyciAtPlxuICAgICAgICAgICAgY2FsbGJhY2sgZXJyXG5cblxuey18IFRyYW5zZm9ybSBhbiBgRXJyYCB2YWx1ZS4gRm9yIGV4YW1wbGUsIHNheSB0aGUgZXJyb3JzIHdlIGdldCBoYXZlIHRvbyBtdWNoXG5pbmZvcm1hdGlvbjpcblxuICAgIHBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBQYXJzZUVycm9yIEludFxuXG4gICAgdHlwZSBhbGlhcyBQYXJzZUVycm9yID1cbiAgICAgICAgeyBtZXNzYWdlIDogU3RyaW5nXG4gICAgICAgICwgY29kZSA6IEludFxuICAgICAgICAsIHBvc2l0aW9uIDogKEludCxJbnQpXG4gICAgICAgIH1cblxuICAgIG1hcEVycm9yIC5tZXNzYWdlIChwYXJzZUludCBcIjEyM1wiKSA9PSBPayAxMjNcbiAgICBtYXBFcnJvciAubWVzc2FnZSAocGFyc2VJbnQgXCJhYmNcIikgPT0gRXJyIFwiY2hhciAnYScgaXMgbm90IGEgbnVtYmVyXCJcblxuLX1cbm1hcEVycm9yIDogKHggLT4geSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeSBhXG5tYXBFcnJvciBmIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgdiAtPlxuICAgICAgICAgICAgT2sgdlxuXG4gICAgICAgIEVyciBlIC0+XG4gICAgICAgICAgICBFcnIgKGYgZSlcblxuXG57LXwgQ29udmVydCB0byBhIHNpbXBsZXIgYE1heWJlYCBpZiB0aGUgYWN0dWFsIGVycm9yIG1lc3NhZ2UgaXMgbm90IG5lZWRlZCBvclxueW91IG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCBzb21lIGNvZGUgdGhhdCBwcmltYXJpbHkgdXNlcyBtYXliZXMuXG5cbiAgICBwYXJzZUludCA6IFN0cmluZyAtPiBSZXN1bHQgUGFyc2VFcnJvciBJbnRcblxuICAgIG1heWJlUGFyc2VJbnQgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgbWF5YmVQYXJzZUludCBzdHJpbmcgPVxuICAgICAgICB0b01heWJlIChwYXJzZUludCBzdHJpbmcpXG5cbi19XG50b01heWJlIDogUmVzdWx0IHggYSAtPiBNYXliZSBhXG50b01heWJlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgdiAtPlxuICAgICAgICAgICAgSnVzdCB2XG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgQ29udmVydCBmcm9tIGEgc2ltcGxlIGBNYXliZWAgdG8gaW50ZXJhY3Qgd2l0aCBzb21lIGNvZGUgdGhhdCBwcmltYXJpbHlcbnVzZXMgYFJlc3VsdHNgLlxuXG4gICAgcGFyc2VJbnQgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG5cbiAgICByZXN1bHRQYXJzZUludCA6IFN0cmluZyAtPiBSZXN1bHQgU3RyaW5nIEludFxuICAgIHJlc3VsdFBhcnNlSW50IHN0cmluZyA9XG4gICAgICAgIGZyb21NYXliZSAoXCJlcnJvciBwYXJzaW5nIHN0cmluZzogXCIgKysgdG9TdHJpbmcgc3RyaW5nKSAocGFyc2VJbnQgc3RyaW5nKVxuXG4tfVxuZnJvbU1heWJlIDogeCAtPiBNYXliZSBhIC0+IFJlc3VsdCB4IGFcbmZyb21NYXliZSBlcnIgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCB2IC0+XG4gICAgICAgICAgICBPayB2XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRXJyIGVyclxuXG5cblxuLS0gRk9SIElOVEVSTkFMIFVTRSBPTkxZXG4tLVxuLS0gVXNlIGB3aGVuYCBleHByZXNzaW9ucyBmb3IgdGhpcyBpbiBHcmVuIGNvZGUhXG5cblxuaXNPayA6IFJlc3VsdCB4IGEgLT4gQm9vbFxuaXNPayByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgRmFsc2VcbiIsCiAgICAgICAgIm1vZHVsZSBWaXJ0dWFsRG9tIGV4cG9zaW5nXG4gICggTm9kZVxuICAsIHRleHQsIG5vZGUsIG5vZGVOU1xuICAsIEF0dHJpYnV0ZSwgc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZU5TXG4gICwgb24sIEhhbmRsZXIoLi4pXG4gICwgbWFwLCBtYXBBdHRyaWJ1dGVcbiAgLCBrZXllZE5vZGUsIGtleWVkTm9kZU5TXG4gICwgbGF6eSwgbGF6eTIsIGxhenkzLCBsYXp5NCwgbGF6eTUsIGxhenk2LCBsYXp5NywgbGF6eThcbiAgKVxuXG57LXwgQVBJIHRvIHRoZSBjb3JlIGRpZmZpbmcgYWxnb3JpdGhtLiBDYW4gc2VydmUgYXMgYSBmb3VuZGF0aW9uIGZvciBsaWJyYXJpZXNcbnRoYXQgZXhwb3NlIG1vcmUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgSFRNTCBvciBTVkcuXG5cbiMjIENyZWF0ZVxuQGRvY3MgTm9kZSwgdGV4dCwgbm9kZSwgbm9kZU5TXG5cbiMjIEF0dHJpYnV0ZXNcbkBkb2NzIEF0dHJpYnV0ZSwgc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIGF0dHJpYnV0ZU5TXG5cbiMjIEV2ZW50c1xuQGRvY3Mgb24sIEhhbmRsZXJcblxuIyMgUm91dGluZyBNZXNzYWdlc1xuQGRvY3MgbWFwLCBtYXBBdHRyaWJ1dGVcblxuIyMgS2V5ZWQgTm9kZXNcbkBkb2NzIGtleWVkTm9kZSwga2V5ZWROb2RlTlNcblxuIyMgTGF6eSBOb2Rlc1xuQGRvY3MgbGF6eSwgbGF6eTIsIGxhenkzLCBsYXp5NCwgbGF6eTUsIGxhenk2LCBsYXp5NywgbGF6eThcblxuLX1cblxuaW1wb3J0IEdyZW4uS2VybmVsLlZpcnR1YWxEb21cbmltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5cblxuey18IEFuIGltbXV0YWJsZSBjaHVuayBvZiBkYXRhIHJlcHJlc2VudGluZyBhIERPTSBub2RlLiBUaGlzIGNhbiBiZSBIVE1MIG9yIFNWRy5cbi19XG50eXBlIE5vZGUgbXNnID0gTm9kZVxuXG5cbnstfCBDcmVhdGUgYSBET00gbm9kZSB3aXRoIGEgdGFnIG5hbWUsIGEgbGlzdCBvZiBIVE1MIHByb3BlcnRpZXMgdGhhdCBjYW5cbmluY2x1ZGUgc3R5bGVzIGFuZCBldmVudCBsaXN0ZW5lcnMsIGEgbGlzdCBvZiBDU1MgcHJvcGVydGllcyBsaWtlIGBjb2xvcmAsIGFuZFxuYSBsaXN0IG9mIGNoaWxkIG5vZGVzLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpzb25cblxuICAgIGhlbGxvIDogTm9kZSBtc2dcbiAgICBoZWxsbyA9XG4gICAgICBub2RlIFwiZGl2XCIgW10gWyB0ZXh0IFwiSGVsbG8hXCIgXVxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIG5vZGUgXCJkaXZcIlxuICAgICAgICBbIHByb3BlcnR5IFwiaWRcIiAoSnNvbi5zdHJpbmcgXCJncmVldGluZ1wiKSBdXG4gICAgICAgIFsgdGV4dCBcIkhlbGxvIVwiIF1cbi19XG5ub2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoTm9kZSBtc2cpIC0+IE5vZGUgbXNnXG5ub2RlIHRhZyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9kZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuey18IENyZWF0ZSBhIG5hbWVzcGFjZWQgRE9NIG5vZGUuIEZvciBleGFtcGxlLCBhbiBTVkcgYDxwYXRoPmAgbm9kZSBjb3VsZCBiZVxuZGVmaW5lZCBsaWtlIHRoaXM6XG5cbiAgICBwYXRoIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChOb2RlIG1zZykgLT4gTm9kZSBtc2dcbiAgICBwYXRoIGF0dHJ1YnV0ZXMgY2hpbGRyZW4gPVxuICAgICAgbm9kZU5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcInBhdGhcIiBhdHRyaWJ1dGVzIGNoaWxkcmVuXG4tfVxubm9kZU5TIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKE5vZGUgbXNnKSAtPiBOb2RlIG1zZ1xubm9kZU5TIHRhZyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9kZU5TIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG57LXwgSnVzdCBwdXQgcGxhaW4gdGV4dCBpbiB0aGUgRE9NLiBJdCB3aWxsIGVzY2FwZSB0aGUgc3RyaW5nIHNvIHRoYXQgaXQgYXBwZWFyc1xuZXhhY3RseSBhcyB5b3Ugc3BlY2lmeS5cblxuICAgIHRleHQgXCJIZWxsbyBXb3JsZCFcIlxuLX1cbnRleHQgOiBTdHJpbmcgLT4gTm9kZSBtc2dcbnRleHQgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnRleHRcblxuXG57LXwgVGhpcyBmdW5jdGlvbiBpcyB1c2VmdWwgd2hlbiBuZXN0aW5nIGNvbXBvbmVudHMgd2l0aCBbdGhlIEVsbVxuQXJjaGl0ZWN0dXJlXShodHRwczovL2dpdGh1Yi5jb20vZXZhbmN6L2VsbS1hcmNoaXRlY3R1cmUtdHV0b3JpYWwvKS4gSXQgbGV0c1xueW91IHRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBzdWJ0cmVlLlxuXG5TYXkgeW91IGhhdmUgYSBub2RlIG5hbWVkIGBidXR0b25gIHRoYXQgcHJvZHVjZXMgYCgpYCB2YWx1ZXMgd2hlbiBpdCBpc1xuY2xpY2tlZC4gVG8gZ2V0IHlvdXIgbW9kZWwgdXBkYXRpbmcgcHJvcGVybHksIHlvdSB3aWxsIHByb2JhYmx5IHdhbnQgdG8gdGFnXG50aGlzIGAoKWAgdmFsdWUgbGlrZSB0aGlzOlxuXG4gICAgdHlwZSBNc2cgPSBDbGljayB8IC4uLlxuXG4gICAgdXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgICB3aGVuIG1zZyBpc1xuICAgICAgICBDbGljayAtPlxuICAgICAgICAgIC4uLlxuXG4gICAgdmlldyBtb2RlbCA9XG4gICAgICBtYXAgKFxcXyAtPiBDbGljaykgYnV0dG9uXG5cblNvIG5vdyBhbGwgdGhlIGV2ZW50cyBwcm9kdWNlZCBieSBgYnV0dG9uYCB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIGJlIG9mIHR5cGVcbmBNc2dgIHNvIHRoZXkgY2FuIGJlIGhhbmRsZWQgYnkgeW91ciB1cGRhdGUgZnVuY3Rpb24hXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBOb2RlIGEgLT4gTm9kZSBtc2dcbm1hcCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubWFwXG5cblxuXG4tLSBBVFRSSUJVVEVTXG5cblxuey18IFdoZW4gdXNpbmcgSFRNTCBhbmQgSlMsIHRoZXJlIGFyZSB0d28gd2F5cyB0byBzcGVjaWZ5IHBhcnRzIG9mIGEgRE9NIG5vZGUuXG5cbiAgMS4gQXR0cmlidXRlcyAmbWRhc2g7IFlvdSBjYW4gc2V0IHRoaW5ncyBpbiBIVE1MIGl0c2VsZi4gU28gdGhlIGBjbGFzc2BcbiAgICAgaW4gYDxkaXYgY2xhc3M9XCJncmVldGluZ1wiPjwvZGl2PmAgaXMgY2FsbGVkIGFuICphdHRyaWJ1dGUqLlxuXG4gIDIuIFByb3BlcnRpZXMgJm1kYXNoOyBZb3UgY2FuIGFsc28gc2V0IHRoaW5ncyBpbiBKUy4gU28gdGhlIGBjbGFzc05hbWVgXG4gICAgIGluIGBkaXYuY2xhc3NOYW1lID0gJ2dyZWV0aW5nJ2AgaXMgY2FsbGVkIGEgKnByb3BlcnR5Ki5cblxuU28gdGhlIGBjbGFzc2AgYXR0cmlidXRlIGNvcnJlc3BvbmRzIHRvIHRoZSBgY2xhc3NOYW1lYCBwcm9wZXJ0eS4gQXQgZmlyc3RcbmdsYW5jZSwgcGVyaGFwcyB0aGlzIGRpc3RpbmN0aW9uIGlzIGRlZmVuc2libGUsIGJ1dCBpdCBnZXRzIG11Y2ggY3Jhemllci5cbipUaGVyZSBpcyBub3QgYWx3YXlzIGEgb25lLXRvLW9uZSBtYXBwaW5nIGJldHdlZW4gYXR0cmlidXRlcyBhbmQgcHJvcGVydGllcyEqXG5ZZXMsIHRoYXQgaXMgYSB0cnVlIGZhY3QuIFNvbWV0aW1lcyBhbiBhdHRyaWJ1dGUgZXhpc3RzLCBidXQgdGhlcmUgaXMgbm9cbmNvcnJlc3BvbmRpbmcgcHJvcGVydHkuIFNvbWV0aW1lcyBjaGFuZ2luZyBhbiBhdHRyaWJ1dGUgZG9lcyBub3QgY2hhbmdlIHRoZVxudW5kZXJseWluZyBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIGFzIG9mIHRoaXMgd3JpdGluZywgdGhlIGB3ZWJraXQtcGxheXNpbmxpbmVgXG5hdHRyaWJ1dGUgY2FuIGJlIHVzZWQgaW4gSFRNTCwgYnV0IHRoZXJlIGlzIG5vIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkhXG4tfVxudHlwZSBBdHRyaWJ1dGUgbXNnID0gQXR0cmlidXRlXG5cblxuey18IFNwZWNpZnkgYSBzdHlsZS5cblxuICAgIGdyZWV0aW5nIDogTm9kZSBtc2dcbiAgICBncmVldGluZyA9XG4gICAgICBub2RlIFwiZGl2XCJcbiAgICAgICAgWyBzdHlsZSBcImJhY2tncm91bmRDb2xvclwiIFwicmVkXCJcbiAgICAgICAgLCBzdHlsZSBcImhlaWdodFwiIFwiOTBweFwiXG4gICAgICAgICwgc3R5bGUgXCJ3aWR0aFwiIFwiMTAwJVwiXG4gICAgICAgIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCJcbiAgICAgICAgXVxuXG4tfVxuc3R5bGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnN0eWxlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5zdHlsZVxuXG5cbnstfCBDcmVhdGUgYSBwcm9wZXJ0eS5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIGJ1dHRvbkxhYmVsIDogTm9kZSBtc2dcbiAgICBidXR0b25MYWJlbCA9XG4gICAgICBub2RlIFwibGFiZWxcIiBbIHByb3BlcnR5IFwiaHRtbEZvclwiIChFbmNvZGUuc3RyaW5nIFwiYnV0dG9uXCIpIF0gWyB0ZXh0IFwiTGFiZWxcIiBdXG5cbk5vdGljZSB0aGF0IHlvdSBtdXN0IGdpdmUgdGhlICpwcm9wZXJ0eSogbmFtZSwgc28gd2UgdXNlIGBodG1sRm9yYCBhcyBpdFxud291bGQgYmUgaW4gSmF2YVNjcmlwdCwgbm90IGBmb3JgIGFzIGl0IHdvdWxkIGFwcGVhciBpbiBIVE1MLlxuLX1cbnByb3BlcnR5IDogU3RyaW5nIC0+IEpzb24uVmFsdWUgLT4gQXR0cmlidXRlIG1zZ1xucHJvcGVydHkga2V5IHZhbHVlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5wcm9wZXJ0eVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSW5uZXJIdG1sT3JGb3JtQWN0aW9uIGtleSlcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub0phdmFTY3JpcHRPckh0bWxVcmkgdmFsdWUpXG5cblxuey18IENyZWF0ZSBhbiBhdHRyaWJ1dGUuIFRoaXMgdXNlcyBKYXZhU2NyaXB04oCZcyBgc2V0QXR0cmlidXRlYCBmdW5jdGlvblxuYmVoaW5kIHRoZSBzY2VuZXMuXG5cbiAgICBidXR0b25MYWJlbCA6IE5vZGUgbXNnXG4gICAgYnV0dG9uTGFiZWwgPVxuICAgICAgbm9kZSBcImxhYmVsXCIgWyBhdHRyaWJ1dGUgXCJmb3JcIiBcImJ1dHRvblwiIF0gWyB0ZXh0IFwiTGFiZWxcIiBdXG5cbk5vdGljZSB0aGF0IHlvdSBtdXN0IGdpdmUgdGhlICphdHRyaWJ1dGUqIG5hbWUsIHNvIHdlIHVzZSBgZm9yYCBhcyBpdCB3b3VsZFxuYmUgaW4gSFRNTCwgbm90IGBodG1sRm9yYCBhcyBpdCB3b3VsZCBhcHBlYXIgaW4gSlMuXG4tfVxuYXR0cmlidXRlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGUga2V5IHZhbHVlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5hdHRyaWJ1dGVcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub09uT3JGb3JtQWN0aW9uIGtleSlcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub0phdmFTY3JpcHRPckh0bWxVcmkgdmFsdWUpXG5cblxuey18IFdvdWxkIHlvdSBiZWxpZXZlIHRoYXQgdGhlcmUgaXMgYW5vdGhlciB3YXkgdG8gZG8gdGhpcz8hIFRoaXMgdXNlc1xuSmF2YVNjcmlwdCdzIGBzZXRBdHRyaWJ1dGVOU2AgZnVuY3Rpb24gYmVoaW5kIHRoZSBzY2VuZXMuIEl0IGlzIGRvaW5nIHByZXR0eVxubXVjaCB0aGUgc2FtZSB0aGluZyBhcyBgYXR0cmlidXRlYCBidXQgeW91IGFyZSBhYmxlIHRvIGhhdmUgbmFtZXNwYWNlZFxuYXR0cmlidXRlcy4gQXMgYW4gZXhhbXBsZSwgdGhlIGBlbG0vc3ZnYCBwYWNrYWdlIGRlZmluZXMgYW4gYXR0cmlidXRlXG5saWtlIHRoaXM6XG5cbiAgICB4bGlua0hyZWYgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuICAgIHhsaW5rSHJlZiB2YWx1ZSA9XG4gICAgICBhdHRyaWJ1dGVOUyBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBcInhsaW5rOmhyZWZcIiB2YWx1ZVxuLX1cbmF0dHJpYnV0ZU5TIDogU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYXR0cmlidXRlTlMgbmFtZXNwYWNlIGtleSB2YWx1ZSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20uYXR0cmlidXRlTlNcbiAgICBuYW1lc3BhY2VcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub09uT3JGb3JtQWN0aW9uIGtleSlcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub0phdmFTY3JpcHRPckh0bWxVcmkgdmFsdWUpXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBgQXR0cmlidXRlYC5cbi19XG5tYXBBdHRyaWJ1dGUgOiAoYSAtPiBiKSAtPiBBdHRyaWJ1dGUgYSAtPiBBdHRyaWJ1dGUgYlxubWFwQXR0cmlidXRlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5tYXBBdHRyaWJ1dGVcblxuXG5cbi0tIEVWRU5UU1xuXG5cbnstfCBDcmVhdGUgY3VzdG9tIGV2ZW50IGhhbmRsZXJzLlxuXG5Zb3UgY2FuIGRlZmluZSBgb25DbGlja2AgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIERlY29kZVxuXG4gICAgb25DbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25DbGljayBtc2cgPVxuICAgICAgb24gXCJjbGlja1wiIChOb3JtYWwgKERlY29kZS5zdWNjZWVkIG1zZykpXG5cbioqTm90ZToqKiBUaGVzZSBldmVudCBoYW5kbGVycyB0cmlnZ2VyIGluIHRoZSBidWJibGUgcGhhc2UuIFlvdSBjYW4gbGVhcm4gbW9yZVxuYWJvdXQgd2hhdCB0aGF0IG1lYW5zIFtoZXJlXVtdLiBUaGVyZSBpcyBub3Qgc3VwcG9ydCB3aXRoaW4gR3JlbiBmb3IgZG9pbmdcbnRyaWNrcyB3aXRoIHRoZSBjYXB0dXJlIHBoYXNlLiBXZSByZWNvbW1lbmQgZG9pbmcgdGhhdCBpbiBKUyB0aHJvdWdoIHBvcnRzLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vYmxvYi9tYXN0ZXIvaGludHMvY2FwdHVyZS12cy1idWJibGUubWRcbi19XG5vbiA6IFN0cmluZyAtPiBIYW5kbGVyIG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbiA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ub25cblxuXG57LXwgV2hlbiB1c2luZyBgb25gIHlvdSBjYW4gY3VzdG9taXplIHRoZSBldmVudCBiZWhhdmlvclxuYSBiaXQuIFRoZXJlIGFyZSB0d28gd2F5cyB0byBkbyB0aGlzOlxuXG4gIC0gW2BzdG9wUHJvcGFnYXRpb25gXVtzcF0gbWVhbnMgdGhlIGV2ZW50IHN0b3BzIHRyYXZlbGluZyB0aHJvdWdoIHRoZSBET00uXG4gIFNvIGlmIHByb3BhZ2F0aW9uIG9mIGEgY2xpY2sgaXMgc3RvcHBlZCwgaXQgd2lsbCBub3QgdHJpZ2dlciBhbnkgb3RoZXIgZXZlbnRcbiAgbGlzdGVuZXJzLlxuXG4gIC0gW2BwcmV2ZW50RGVmYXVsdGBdW3BkXSBtZWFucyBhbnkgYnVpbHQtaW4gYnJvd3NlciBiZWhhdmlvciByZWxhdGVkIHRvIHRoZVxuICBldmVudCBpcyBwcmV2ZW50ZWQuIFRoaXMgY2FuIGJlIGhhbmR5IHdpdGgga2V5IHByZXNzZXMgb3IgdG91Y2ggZ2VzdHVyZXMuXG5cbioqTm90ZSAxOioqIEEgW3Bhc3NpdmVdW10gZXZlbnQgbGlzdGVuZXIgd2lsbCBiZSBjcmVhdGVkIGlmIHlvdSB1c2UgYE5vcm1hbGBcbm9yIGBNYXlTdG9wUHJvcGFnYXRpb25gLiBJbiBib3RoIGNhc2VzIGBwcmV2ZW50RGVmYXVsdGAgY2Fubm90IGJlIHVzZWQsIHNvXG53ZSBjYW4gZW5hYmxlIG9wdGltaXphdGlvbnMgZm9yIHRvdWNoLCBzY3JvbGwsIGFuZCB3aGVlbCBldmVudHMgaW4gc29tZVxuYnJvd3NlcnMuXG5cbioqTm90ZSAyOioqIFNvbWUgYWN0aW9ucywgbGlrZSB1cGxvYWRpbmcgYW5kIGRvd25sb2FkaW5nIGZpbGVzLCBhcmUgb25seVxuYWxsb3dlZCB3aGVuIHRoZSBKYXZhU2NyaXB0IGV2ZW50IGxvb3AgaXMgcnVubmluZyBiZWNhdXNlIG9mIHVzZXIgaW5wdXQuIFRoaXNcbmlzIGZvciBzZWN1cml0eSEgU28gd2hlbiBhbiBldmVudCBvY2N1cnMsIHdlIGNhbGwgYHVwZGF0ZWAgYW5kIHNlbmQgYW55IGBwb3J0YFxubWVzc2FnZXMgaW1tZWRpYXRlbHksIGFsbCB3aXRoaW4gdGhlIHNhbWUgdGljayBvZiB0aGUgZXZlbnQgbG9vcC4gVGhpcyBtYWtlc1xuaXQgcG9zc2libGUgdG8gaGFuZGxlIHVzZXItaW5zdGlnYXRlZCBldmVudHMgaW4gcG9ydHMuXG5cbioqTm90ZSAzOioqIE5vcm1hbGx5IHRoZSBgdmlld2AgaXMgc2hvd24gaW4gdGhlIG5leHQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWBcbmNhbGwuIFRoaXMgYWxsb3dzIHVzIHRvIHNhdmUgc29tZSB3b3JrIGlmIG1lc3NhZ2VzIGFyZSBjb21pbmcgaW4gdmVyeSBxdWlja2x5LlxuQnV0IGlmIGBzdG9wUHJvcGFnYXRpb25gIGlzIHVzZWQsIHdlIHVwZGF0ZSB0aGUgRE9NIGltbWVkaWF0ZWx5LCB3aXRoaW4gdGhlXG5zYW1lIHRpY2sgb2YgdGhlIGV2ZW50IGxvb3AuIFRoaXMgaXMgdXNlZnVsIGZvciBET00gbm9kZXMgdGhhdCBob2xkIHRoZWlyIG93blxuc3RhdGUsIGxpa2UgYDxpbnB1dCB0eXBlPVwidGV4dFwiPmAuIElmIHNvbWVvbmUgdHlwZXMgdmVyeSBmYXN0LCB0aGUgc3RhdGUgaW4gdGhlXG5ET00gY2FuIGRpdmVyZ2UgZnJvbSB0aGUgc3RhdGUgaW4geW91ciBgTW9kZWxgIHdoaWxlIHdhaXRpbmcgb24gdGhlIG5leHRcbmByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGNhbGwuIFNvIHVwZGF0aW5nIHRoZSBET00gc3luY2hyb25vdXNseSBtYWtlcyB0aGlzXG5kaXZlcmdlbmNlIGltcG9zc2libGUuXG5cbltzcF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9zdG9wUHJvcGFnYXRpb25cbltwZF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9wcmV2ZW50RGVmYXVsdFxuW3Bhc3NpdmVdOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuLX1cbnR5cGUgSGFuZGxlciBtc2dcbiAgPSBOb3JtYWwgKEpzb24uRGVjb2RlciBtc2cpXG4gIHwgTWF5U3RvcFByb3BhZ2F0aW9uIChKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sIH0pXG4gIHwgTWF5UHJldmVudERlZmF1bHQgKEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHByZXZlbnREZWZhdWx0IDogQm9vbCB9KVxuICB8IEN1c3RvbSAoSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCwgcHJldmVudERlZmF1bHQgOiBCb29sIH0pXG5cblxuXG4tLSBMQVpZIE5PREVTXG5cblxuey18IEEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRoYXQgZGVsYXlzIHRoZSBidWlsZGluZyBvZiB2aXJ0dWFsIERPTSBub2Rlcy5cblxuQ2FsbGluZyBgKHZpZXcgbW9kZWwpYCB3aWxsIGRlZmluaXRlbHkgYnVpbGQgc29tZSB2aXJ0dWFsIERPTSwgcGVyaGFwcyBhIGxvdCBvZlxuaXQuIENhbGxpbmcgYChsYXp5IHZpZXcgbW9kZWwpYCBkZWxheXMgdGhlIGNhbGwgdW50aWwgbGF0ZXIuIER1cmluZyBkaWZmaW5nLCB3ZVxuY2FuIGNoZWNrIHRvIHNlZSBpZiBgbW9kZWxgIGlzIHJlZmVyZW50aWFsbHkgZXF1YWwgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHVzZWQsXG5hbmQgaWYgc28sIHdlIGp1c3Qgc3RvcC4gTm8gbmVlZCB0byBidWlsZCB1cCB0aGUgdHJlZSBzdHJ1Y3R1cmUgYW5kIGRpZmYgaXQsXG53ZSBrbm93IGlmIHRoZSBpbnB1dCB0byBgdmlld2AgaXMgdGhlIHNhbWUsIHRoZSBvdXRwdXQgbXVzdCBiZSB0aGUgc2FtZSFcbi19XG5sYXp5IDogKGEgLT4gTm9kZSBtc2cpIC0+IGEgLT4gTm9kZSBtc2dcbmxhenkgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenlcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiB0d28gYXJndW1lbnRzLlxuLX1cbmxhenkyIDogKGEgLT4gYiAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IE5vZGUgbXNnXG5sYXp5MiA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTJcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiB0aHJlZSBhcmd1bWVudHMuXG4tfVxubGF6eTMgOiAoYSAtPiBiIC0+IGMgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IE5vZGUgbXNnXG5sYXp5MyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTNcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBmb3VyIGFyZ3VtZW50cy5cbi19XG5sYXp5NCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IE5vZGUgbXNnXG5sYXp5NCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTRcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBmaXZlIGFyZ3VtZW50cy5cbi19XG5sYXp5NSA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBOb2RlIG1zZ1xubGF6eTUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk1XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gc2l4IGFyZ3VtZW50cy5cbi19XG5sYXp5NiA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gTm9kZSBtc2dcbmxhenk2ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5NlxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHNldmVuIGFyZ3VtZW50cy5cbi19XG5sYXp5NyA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IE5vZGUgbXNnXG5sYXp5NyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTdcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBlaWdodCBhcmd1bWVudHMuXG4tfVxubGF6eTggOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiBoIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IGggLT4gTm9kZSBtc2dcbmxhenk4ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5OFxuXG5cblxuLS0gS0VZRUQgTk9ERVNcblxuXG57LXwgV29ya3MganVzdCBsaWtlIGBub2RlYCwgYnV0IHlvdSBhZGQgYSB1bmlxdWUgaWRlbnRpZmllciB0byBlYWNoIGNoaWxkXG5ub2RlLiBZb3Ugd2FudCB0aGlzIHdoZW4geW91IGhhdmUgYSBsaXN0IG9mIG5vZGVzIHRoYXQgaXMgY2hhbmdpbmc6IGFkZGluZ1xubm9kZXMsIHJlbW92aW5nIG5vZGVzLCBldGMuIEluIHRoZXNlIGNhc2VzLCB0aGUgdW5pcXVlIGlkZW50aWZpZXJzIGhlbHAgbWFrZVxudGhlIERPTSBtb2RpZmljYXRpb25zIG1vcmUgZWZmaWNpZW50LlxuLX1cbmtleWVkTm9kZSA6IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBOb2RlIG1zZyB9IC0+IE5vZGUgbXNnXG5rZXllZE5vZGUgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5rZXllZE5vZGUgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cbnstfCBDcmVhdGUgYSBrZXllZCBhbmQgbmFtZXNwYWNlZCBET00gbm9kZS4gRm9yIGV4YW1wbGUsIGFuIFNWRyBgPGc+YCBub2RlXG5jb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpczpcblxuICAgIGcgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKCBTdHJpbmcsIE5vZGUgbXNnICkgLT4gTm9kZSBtc2dcbiAgICBnID1cbiAgICAgIGtleWVkTm9kZU5TIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcImdcIlxuLX1cbmtleWVkTm9kZU5TIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBOb2RlIG1zZyB9IC0+IE5vZGUgbXNnXG5rZXllZE5vZGVOUyBuYW1lc3BhY2UgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5rZXllZE5vZGVOUyBuYW1lc3BhY2UgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cblxuLS0gRk9SIElOVEVSTkFMIFVTRSBPTkxZXG5cblxudG9IYW5kbGVySW50IDogSGFuZGxlciBtc2cgLT4gSW50XG50b0hhbmRsZXJJbnQgaGFuZGxlciA9XG4gIHdoZW4gaGFuZGxlciBpc1xuICAgIE5vcm1hbCBfIC0+IDBcbiAgICBNYXlTdG9wUHJvcGFnYXRpb24gXyAtPiAxXG4gICAgTWF5UHJldmVudERlZmF1bHQgXyAtPiAyXG4gICAgQ3VzdG9tIF8gLT4gM1xuIiwKICAgICAgICAibW9kdWxlIFVybCBleHBvc2luZ1xuICAoIFVybFxuICAsIFByb3RvY29sKC4uKVxuICAsIHRvU3RyaW5nXG4gICwgZnJvbVN0cmluZ1xuICAsIHBlcmNlbnRFbmNvZGVcbiAgLCBwZXJjZW50RGVjb2RlXG4gIClcblxuXG57LXxcblxuIyBVUkxzXG5AZG9jcyBVcmwsIFByb3RvY29sLCB0b1N0cmluZywgZnJvbVN0cmluZ1xuXG4jIFBlcmNlbnQtRW5jb2RpbmdcbkBkb2NzIHBlcmNlbnRFbmNvZGUsIHBlcmNlbnREZWNvZGVcblxuLX1cblxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVXJsXG5cblxuXG4tLSBVUkxcblxuXG57LXwgSW4gW3RoZSBVUkkgc3BlY10oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYpLCBUaW0gQmVybmVycy1MZWVcbnNheXMgYSBVUkwgbG9va3MgbGlrZSB0aGlzOlxuXG5gYGBcbiAgaHR0cHM6Ly9leGFtcGxlLmNvbTo4MDQyL292ZXIvdGhlcmU/bmFtZT1mZXJyZXQjbm9zZVxuICBcXF9fXy8gICBcXF9fX19fX19fX19fX19fL1xcX19fX19fX19fLyBcXF9fX19fX19fXy8gXFxfXy9cbiAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgICAgICB8ICAgICAgICB8XG4gIHNjaGVtZSAgICAgYXV0aG9yaXR5ICAgICAgIHBhdGggICAgICAgIHF1ZXJ5ICAgZnJhZ21lbnRcbmBgYFxuXG5XaGVuIHlvdSBhcmUgY3JlYXRpbmcgYSBzaW5nbGUtcGFnZSBhcHAgd2l0aCBbYEJyb3dzZXIuYXBwbGljYXRpb25gXVthcHBdLCB5b3VcbnVzZSB0aGUgW2BVcmwuUGFyc2VyYF0oVXJsLVBhcnNlcikgbW9kdWxlIHRvIHR1cm4gYSBgVXJsYCBpbnRvIGV2ZW4gbmljZXIgZGF0YS5cblxuSWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIFVSTHMsIGNoZWNrIG91dCB0aGUgW2BVcmwuQnVpbGRlcmBdKFVybC1CdWlsZGVyKVxubW9kdWxlIGFzIHdlbGwhXG5cblthcHBdOiAvcGFja2FnZXMvZWxtL2Jyb3dzZXIvbGF0ZXN0L0Jyb3dzZXIjYXBwbGljYXRpb25cblxuKipOb3RlOioqIFRoaXMgaXMgYSBzdWJzZXQgb2YgYWxsIHRoZSBmdWxsIHBvc3NpYmlsaXRpZXMgbGlzdGVkIGluIHRoZSBVUklcbnNwZWMuIFNwZWNpZmljYWxseSwgaXQgZG9lcyBub3QgYWNjZXB0IHRoZSBgdXNlcmluZm9gIHNlZ21lbnQgeW91IHNlZSBpbiBlbWFpbFxuYWRkcmVzc2VzIGxpa2UgYHRvbUBleGFtcGxlLmNvbWAuXG4tfVxudHlwZSBhbGlhcyBVcmwgPVxuICB7IHByb3RvY29sIDogUHJvdG9jb2xcbiAgLCBob3N0IDogU3RyaW5nXG4gICwgcG9ydF8gOiBNYXliZSBJbnRcbiAgLCBwYXRoIDogU3RyaW5nXG4gICwgcXVlcnkgOiBNYXliZSBTdHJpbmdcbiAgLCBmcmFnbWVudCA6IE1heWJlIFN0cmluZ1xuICB9XG5cblxuey18IElzIHRoZSBVUkwgc2VydmVkIG92ZXIgYSBzZWN1cmUgY29ubmVjdGlvbiBvciBub3Q/XG4tfVxudHlwZSBQcm90b2NvbCA9IEh0dHAgfCBIdHRwc1xuXG5cbnstfCBBdHRlbXB0IHRvIGJyZWFrIGEgVVJMIHVwIGludG8gW2BVcmxgXSgjVXJsKS4gVGhpcyBpcyB1c2VmdWwgaW5cbnNpbmdsZS1wYWdlIGFwcHMgd2hlbiB5b3Ugd2FudCB0byBwYXJzZSBjZXJ0YWluIGNodW5rcyBvZiBhIFVSTCB0byBmaWd1cmUgb3V0XG53aGF0IHRvIHNob3cgb24gc2NyZWVuLlxuXG4gICAgZnJvbVN0cmluZyBcImh0dHBzOi8vZXhhbXBsZS5jb206NDQzXCJcbiAgICAtLSBKdXN0XG4gICAgLS0gICB7IHByb3RvY29sID0gSHR0cHNcbiAgICAtLSAgICwgaG9zdCA9IFwiZXhhbXBsZS5jb21cIlxuICAgIC0tICAgLCBwb3J0XyA9IEp1c3QgNDQzXG4gICAgLS0gICAsIHBhdGggPSBcIi9cIlxuICAgIC0tICAgLCBxdWVyeSA9IE5vdGhpbmdcbiAgICAtLSAgICwgZnJhZ21lbnQgPSBOb3RoaW5nXG4gICAgLS0gICB9XG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9oYXRzP3E9dG9wJTIwaGF0XCJcbiAgICAtLSBKdXN0XG4gICAgLS0gICB7IHByb3RvY29sID0gSHR0cHNcbiAgICAtLSAgICwgaG9zdCA9IFwiZXhhbXBsZS5jb21cIlxuICAgIC0tICAgLCBwb3J0XyA9IE5vdGhpbmdcbiAgICAtLSAgICwgcGF0aCA9IFwiL2hhdHNcIlxuICAgIC0tICAgLCBxdWVyeSA9IEp1c3QgXCJxPXRvcCUyMGhhdFwiXG4gICAgLS0gICAsIGZyYWdtZW50ID0gTm90aGluZ1xuICAgIC0tICAgfVxuXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly9leGFtcGxlLmNvbS9jb3JlL0xpc3QvI21hcFwiXG4gICAgLS0gSnVzdFxuICAgIC0tICAgeyBwcm90b2NvbCA9IEh0dHBcbiAgICAtLSAgICwgaG9zdCA9IFwiZXhhbXBsZS5jb21cIlxuICAgIC0tICAgLCBwb3J0XyA9IE5vdGhpbmdcbiAgICAtLSAgICwgcGF0aCA9IFwiL2NvcmUvTGlzdC9cIlxuICAgIC0tICAgLCBxdWVyeSA9IE5vdGhpbmdcbiAgICAtLSAgICwgZnJhZ21lbnQgPSBKdXN0IFwibWFwXCJcbiAgICAtLSAgIH1cblxuVGhlIGNvbnZlcnNpb24gdG8gc2VnbWVudHMgY2FuIGZhaWwgaW4gc29tZSBjYXNlcyBhcyB3ZWxsOlxuXG4gICAgZnJvbVN0cmluZyBcImV4YW1wbGUuY29tOjQ0M1wiICAgICAgICA9PSBOb3RoaW5nICAtLSBubyBwcm90b2NvbFxuICAgIGZyb21TdHJpbmcgXCJodHRwOi8vdG9tQGV4YW1wbGUuY29tXCIgPT0gTm90aGluZyAgLS0gdXNlcmluZm8gZGlzYWxsb3dlZFxuICAgIGZyb21TdHJpbmcgXCJodHRwOi8vI2NhdHNcIiAgICAgICAgICAgPT0gTm90aGluZyAgLS0gbm8gaG9zdFxuXG4qKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCB1c2UgW2BwZXJjZW50RGVjb2RlYF0oI3BlcmNlbnREZWNvZGUpIGFueXRoaW5nLlxuSXQganVzdCBzcGxpdHMgdGhpbmdzIHVwLiBbYFVybC5QYXJzZXJgXShVcmwtUGFyc2VyKSBhY3R1YWxseSBfbmVlZHNfIHRoZSByYXdcbmBxdWVyeWAgc3RyaW5nIHRvIHBhcnNlIGl0IHByb3Blcmx5LiBPdGhlcndpc2UgaXQgY291bGQgZ2V0IGNvbmZ1c2VkIGFib3V0IGA9YFxuYW5kIGAmYCBjaGFyYWN0ZXJzIVxuLX1cbmZyb21TdHJpbmcgOiBTdHJpbmcgLT4gTWF5YmUgVXJsXG5mcm9tU3RyaW5nIHN0ciA9XG4gIGlmIFN0cmluZy5zdGFydHNXaXRoIFwiaHR0cDovL1wiIHN0ciB0aGVuXG4gICAgY2hvbXBBZnRlclByb3RvY29sIEh0dHAgKFN0cmluZy5kcm9wRmlyc3QgNyBzdHIpXG5cbiAgZWxzZSBpZiBTdHJpbmcuc3RhcnRzV2l0aCBcImh0dHBzOi8vXCIgc3RyIHRoZW5cbiAgICBjaG9tcEFmdGVyUHJvdG9jb2wgSHR0cHMgKFN0cmluZy5kcm9wRmlyc3QgOCBzdHIpXG5cbiAgZWxzZVxuICAgIE5vdGhpbmdcblxuXG5jaG9tcEFmdGVyUHJvdG9jb2wgOiBQcm90b2NvbCAtPiBTdHJpbmcgLT4gTWF5YmUgVXJsXG5jaG9tcEFmdGVyUHJvdG9jb2wgcHJvdG9jb2wgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIEFycmF5LmdldCAwIChTdHJpbmcuaW5kaWNlcyBcIiNcIiBzdHIpIGlzXG4gICAgICBOb3RoaW5nIC0+XG4gICAgICAgIGNob21wQmVmb3JlRnJhZ21lbnQgcHJvdG9jb2wgTm90aGluZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlRnJhZ21lbnQgcHJvdG9jb2wgKEp1c3QgKFN0cmluZy5kcm9wRmlyc3QgKGkgKyAxKSBzdHIpKSAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cilcblxuXG5jaG9tcEJlZm9yZUZyYWdtZW50IDogUHJvdG9jb2wgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQmVmb3JlRnJhZ21lbnQgcHJvdG9jb2wgZnJhZyBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgKFN0cmluZy5pbmRpY2VzIFwiP1wiIHN0cikgaXNcbiAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVRdWVyeSBwcm90b2NvbCBOb3RoaW5nIGZyYWcgc3RyXG5cbiAgICAgIEp1c3QgaSAtPlxuICAgICAgICBjaG9tcEJlZm9yZVF1ZXJ5IHByb3RvY29sIChKdXN0IChTdHJpbmcuZHJvcEZpcnN0IChpICsgMSkgc3RyKSkgZnJhZyAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cilcblxuXG5jaG9tcEJlZm9yZVF1ZXJ5IDogUHJvdG9jb2wgLT4gTWF5YmUgU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBTdHJpbmcgLT4gTWF5YmUgVXJsXG5jaG9tcEJlZm9yZVF1ZXJ5IHByb3RvY29sIHBhcmFtcyBmcmFnIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBBcnJheS5nZXQgMCAoU3RyaW5nLmluZGljZXMgXCIvXCIgc3RyKSBpc1xuICAgICAgTm90aGluZyAtPlxuICAgICAgICBjaG9tcEJlZm9yZVBhdGggcHJvdG9jb2wgXCIvXCIgcGFyYW1zIGZyYWcgc3RyXG5cbiAgICAgIEp1c3QgaSAtPlxuICAgICAgICBjaG9tcEJlZm9yZVBhdGggcHJvdG9jb2wgKFN0cmluZy5kcm9wRmlyc3QgaSBzdHIpIHBhcmFtcyBmcmFnIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlUGF0aCA6IFByb3RvY29sIC0+IFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQmVmb3JlUGF0aCBwcm90b2NvbCBwYXRoIHBhcmFtcyBmcmFnIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB8fCBTdHJpbmcuY29udGFpbnMgXCJAXCIgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIFN0cmluZy5pbmRpY2VzIFwiOlwiIHN0ciBpc1xuICAgICAgW10gLT5cbiAgICAgICAgSnVzdCA8fCBcbiAgICAgICAgICAgIHsgcHJvdG9jb2wgPSBwcm90b2NvbCBcbiAgICAgICAgICAgICwgaG9zdCA9IHN0ciBcbiAgICAgICAgICAgICwgcG9ydF8gPSBOb3RoaW5nIFxuICAgICAgICAgICAgLCBwYXRoID0gcGF0aCBcbiAgICAgICAgICAgICwgcXVlcnkgPSBwYXJhbXMgXG4gICAgICAgICAgICAsIGZyYWdtZW50ID0gZnJhZ1xuICAgICAgICAgICAgfVxuXG4gICAgICBbaV0gLT5cbiAgICAgICAgd2hlbiBTdHJpbmcudG9JbnQgKFN0cmluZy5kcm9wRmlyc3QgKGkgKyAxKSBzdHIpIGlzXG4gICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgcG9ydF8gLT5cbiAgICAgICAgICAgIEp1c3QgPHwgXG4gICAgICAgICAgICAgICAgeyBwcm90b2NvbCA9IHByb3RvY29sXG4gICAgICAgICAgICAgICAgLCBob3N0ID0gKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpIFxuICAgICAgICAgICAgICAgICwgcG9ydF8gPSBwb3J0XyBcbiAgICAgICAgICAgICAgICAsIHBhdGggPSBwYXRoIFxuICAgICAgICAgICAgICAgICwgcXVlcnkgPSBwYXJhbXMgXG4gICAgICAgICAgICAgICAgLCBmcmFnbWVudCA9IGZyYWdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgIF8gLT5cbiAgICAgICAgTm90aGluZ1xuXG5cbnstfCBUdXJuIGEgW2BVcmxgXSgjVXJsKSBpbnRvIGEgYFN0cmluZ2AuXG4tfVxudG9TdHJpbmcgOiBVcmwgLT4gU3RyaW5nXG50b1N0cmluZyB1cmwgPVxuICBsZXRcbiAgICBodHRwID1cbiAgICAgIHdoZW4gdXJsLnByb3RvY29sIGlzXG4gICAgICAgIEh0dHAgLT5cbiAgICAgICAgICBcImh0dHA6Ly9cIlxuXG4gICAgICAgIEh0dHBzIC0+XG4gICAgICAgICAgXCJodHRwczovL1wiXG4gIGluXG4gIGFkZFBvcnQgdXJsLnBvcnRfIChodHRwICsrIHVybC5ob3N0KSArKyB1cmwucGF0aFxuICAgIHw+IGFkZFByZWZpeGVkIFwiP1wiIHVybC5xdWVyeVxuICAgIHw+IGFkZFByZWZpeGVkIFwiI1wiIHVybC5mcmFnbWVudFxuXG5cbmFkZFBvcnQgOiBNYXliZSBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuYWRkUG9ydCBtYXliZVBvcnQgc3RhcnRlciA9XG4gIHdoZW4gbWF5YmVQb3J0IGlzXG4gICAgTm90aGluZyAtPlxuICAgICAgc3RhcnRlclxuXG4gICAgSnVzdCBwb3J0XyAtPlxuICAgICAgc3RhcnRlciArKyBcIjpcIiArKyBTdHJpbmcuZnJvbUludCBwb3J0X1xuXG5cbmFkZFByZWZpeGVkIDogU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hZGRQcmVmaXhlZCBwcmVmaXggbWF5YmVTZWdtZW50IHN0YXJ0ZXIgPVxuICB3aGVuIG1heWJlU2VnbWVudCBpc1xuICAgIE5vdGhpbmcgLT5cbiAgICAgIHN0YXJ0ZXJcblxuICAgIEp1c3Qgc2VnbWVudCAtPlxuICAgICAgc3RhcnRlciArKyBwcmVmaXggKysgc2VnbWVudFxuXG5cblxuLS0gUEVSQ0VOVCBFTkNPRElOR1xuXG5cbnstfCAqKlVzZSBbVXJsLkJ1aWxkZXJdKFVybC1CdWlsZGVyKSBpbnN0ZWFkISoqIEZ1bmN0aW9ucyBsaWtlIGBhYnNvbHV0ZWAsXG5gcmVsYXRpdmVgLCBhbmQgYGNyb3NzT3JpZ2luYCBhbHJlYWR5IGRvIHRoaXMgYXV0b21hdGljYWxseSEgYHBlcmNlbnRFbmNvZGVgXG5pcyBvbmx5IGF2YWlsYWJsZSBzbyB0aGF0IGV4dHJlbWVseSBjdXN0b20gY2FzZXMgYXJlIHBvc3NpYmxlLCBpZiBuZWVkZWQuXG5cblBlcmNlbnQtZW5jb2RpbmcgaXMgaG93IFt0aGUgb2ZmaWNpYWwgVVJJIHNwZWNdW3VyaV0g4oCcZXNjYXBlc+KAnSBzcGVjaWFsXG5jaGFyYWN0ZXJzLiBZb3UgY2FuIHN0aWxsIHJlcHJlc2VudCBhIGA/YCBldmVuIHRob3VnaCBpdCBpcyByZXNlcnZlZCBmb3JcbnF1ZXJpZXMuXG5cblRoaXMgZnVuY3Rpb24gZXhpc3RzIGluIGNhc2UgeW91IHdhbnQgdG8gZG8gc29tZXRoaW5nIGV4dHJhIGN1c3RvbS4gSGVyZSBhcmVcbnNvbWUgZXhhbXBsZXM6XG5cbiAgICAtLSBzdGFuZGFyZCBBU0NJSSBlbmNvZGluZ1xuICAgIHBlcmNlbnRFbmNvZGUgXCJoYXRcIiAgID09IFwiaGF0XCJcbiAgICBwZXJjZW50RW5jb2RlIFwidG8gYmVcIiA9PSBcInRvJTIwYmVcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCI5OSVcIiAgID09IFwiOTklMjVcIlxuXG4gICAgLS0gbm9uLXN0YW5kYXJkLCBidXQgd2lkZWx5IGFjY2VwdGVkLCBVVEYtOCBlbmNvZGluZ1xuICAgIHBlcmNlbnRFbmNvZGUgXCIkXCIgPT0gXCIlMjRcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCLColwiID09IFwiJUMyJUEyXCJcbiAgICBwZXJjZW50RW5jb2RlIFwi4oKsXCIgPT0gXCIlRTIlODIlQUNcIlxuXG5UaGlzIGlzIHRoZSBzYW1lIGJlaGF2aW9yIGFzIEphdmFTY3JpcHQncyBbYGVuY29kZVVSSUNvbXBvbmVudGBdW2pzXSBmdW5jdGlvbixcbmFuZCB0aGUgcnVsZXMgYXJlIGRlc2NyaWJlZCBpbiBtb3JlIGRldGFpbCBvZmZpY2lhbGx5IFtoZXJlXVtzMl0gYW5kIHdpdGggc29tZVxubm90ZXMgYWJvdXQgVW5pY29kZSBbaGVyZV1bd2lraV0uXG5cbltqc106IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL2VuY29kZVVSSUNvbXBvbmVudFxuW3VyaV06IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2XG5bczJdOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTIuMVxuW3dpa2ldOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QZXJjZW50LWVuY29kaW5nXG4tfVxucGVyY2VudEVuY29kZSA6IFN0cmluZyAtPiBTdHJpbmdcbnBlcmNlbnRFbmNvZGUgPVxuICBHcmVuLktlcm5lbC5VcmwucGVyY2VudEVuY29kZVxuXG5cbnstfCAqKlVzZSBbVXJsLlBhcnNlcl0oVXJsLVBhcnNlcikgaW5zdGVhZCEqKiBJdCB3aWxsIGRlY29kZSBxdWVyeVxucGFyYW1ldGVycyBhcHByb3ByaWF0ZWx5IGFscmVhZHkhIGBwZXJjZW50RGVjb2RlYCBpcyBvbmx5IGF2YWlsYWJsZSBzbyB0aGF0XG5leHRyZW1lbHkgY3VzdG9tIGNhc2VzIGFyZSBwb3NzaWJsZSwgaWYgbmVlZGVkLlxuXG5DaGVjayBvdXQgdGhlIGBwZXJjZW50RW5jb2RlYCBmdW5jdGlvbiB0byBsZWFybiBhYm91dCBwZXJjZW50LWVuY29kaW5nLlxuVGhpcyBmdW5jdGlvbiBkb2VzIHRoZSBvcHBvc2l0ZSEgSGVyZSBhcmUgdGhlIHJldmVyc2UgZXhhbXBsZXM6XG5cbiAgICAtLSBBU0NJSVxuICAgIHBlcmNlbnREZWNvZGUgXCJoYXRcIiAgICAgICA9PSBKdXN0IFwiaGF0XCJcbiAgICBwZXJjZW50RGVjb2RlIFwidG8lMjBiZVwiICAgPT0gSnVzdCBcInRvIGJlXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiOTklMjVcIiAgICAgPT0gSnVzdCBcIjk5JVwiXG5cbiAgICAtLSBVVEYtOFxuICAgIHBlcmNlbnREZWNvZGUgXCIlMjRcIiAgICAgICA9PSBKdXN0IFwiJFwiXG4gICAgcGVyY2VudERlY29kZSBcIiVDMiVBMlwiICAgID09IEp1c3QgXCLColwiXG4gICAgcGVyY2VudERlY29kZSBcIiVFMiU4MiVBQ1wiID09IEp1c3QgXCLigqxcIlxuXG5XaHkgaXMgaXQgYSBgTWF5YmVgIHRob3VnaD8gV2VsbCwgdGhlc2Ugc3RyaW5ncyBjb21lIGZyb20gc3RyYW5nZXJzIG9uIHRoZVxuaW50ZXJuZXQgYXMgYSBidW5jaCBvZiBiaXRzIGFuZCBtYXkgaGF2ZSBlbmNvZGluZyBwcm9ibGVtcy4gRm9yIGV4YW1wbGU6XG5cbiAgICBwZXJjZW50RGVjb2RlIFwiJVwiICAgPT0gTm90aGluZyAgLS0gbm90IGZvbGxvd2VkIGJ5IHR3byBoZXggZGlnaXRzXG4gICAgcGVyY2VudERlY29kZSBcIiVYWVwiID09IE5vdGhpbmcgIC0tIG5vdCBmb2xsb3dlZCBieSB0d28gSEVYIGRpZ2l0c1xuICAgIHBlcmNlbnREZWNvZGUgXCIlQzJcIiA9PSBOb3RoaW5nICAtLSBoYWxmIG9mIHRoZSBcIsKiXCIgZW5jb2RpbmcgXCIlQzIlQTJcIlxuXG5UaGlzIGlzIHRoZSBzYW1lIGJlaGF2aW9yIGFzIEphdmFTY3JpcHQncyBbYGRlY29kZVVSSUNvbXBvbmVudGBdW2pzXSBmdW5jdGlvbi5cblxuW2pzXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZGVjb2RlVVJJQ29tcG9uZW50XG4tfVxucGVyY2VudERlY29kZSA6IFN0cmluZyAtPiBNYXliZSBTdHJpbmdcbnBlcmNlbnREZWNvZGUgPVxuICBHcmVuLktlcm5lbC5VcmwucGVyY2VudERlY29kZVxuIiwKICAgICAgICAiZWZmZWN0IG1vZHVsZSBUYXNrIHdoZXJlIHsgY29tbWFuZCA9IE15Q21kIH0gZXhwb3NpbmdcbiAgICAoIFRhc2ssIHBlcmZvcm0sIGF0dGVtcHQsIGV4ZWN1dGVcbiAgICAsIGFuZFRoZW4sIGF3YWl0LCBzdWNjZWVkLCBmYWlsLCBzZXF1ZW5jZVxuICAgICwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBvbkVycm9yLCBtYXBFcnJvclxuICAgIClcblxuey18IFRhc2tzIG1ha2UgaXQgZWFzeSB0byBkZXNjcmliZSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucyB0aGF0IG1heSBmYWlsLCBsaWtlXG5IVFRQIHJlcXVlc3RzIG9yIHdyaXRpbmcgdG8gYSBkYXRhYmFzZS5cblxuXG5AZG9jcyBUYXNrLCBwZXJmb3JtLCBhdHRlbXB0LCBleGVjdXRlXG5cblxuIyMgQ2hhaW5zXG5cbkBkb2NzIGFuZFRoZW4sIGF3YWl0LCBzdWNjZWVkLCBmYWlsLCBzZXF1ZW5jZVxuXG5cbiMjIE1hcHNcblxuQGRvY3MgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG5cblxuIyMgRXJyb3JzXG5cbkBkb2NzIG9uRXJyb3IsIG1hcEVycm9yXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICgoPDwpLCAofD4pLCBOZXZlcilcbmltcG9ydCBHcmVuLktlcm5lbC5TY2hlZHVsZXJcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IFBsYXRmb3JtXG5pbXBvcnQgUGxhdGZvcm0uQ21kIGV4cG9zaW5nIChDbWQpXG5pbXBvcnQgUmVzdWx0IGV4cG9zaW5nIChSZXN1bHQoLi4pKVxuXG5cbnstfCBIZXJlIGFyZSBzb21lIGNvbW1vbiB0YXNrczpcblxuICAtIFtgbm93IDogVGFzayB4IFBvc2l4YF0oVGltZSNub3cpXG4gIC0gW2Bmb2N1cyA6IFN0cmluZyAtPiBUYXNrIEVycm9yIHt9YF1bZm9jdXNdXG4gIC0gW2BzbGVlcCA6IEZsb2F0IC0+IFRhc2sgeCB7fWBdKFByb2Nlc3Mjc2xlZXApXG5cbltmb2N1c106IC9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL2xhdGVzdC9tb2R1bGUvQnJvd3Nlci5Eb20jZm9jdXNcblxuSW4gZWFjaCBjYXNlIHdlIGhhdmUgYSBgVGFza2AgdGhhdCB3aWxsIHJlc29sdmUgc3VjY2Vzc2Z1bGx5IHdpdGggYW4gYGFgIHZhbHVlXG5vciB1bnN1Y2Nlc3NmdWxseSB3aXRoIGFuIGB4YCB2YWx1ZS4gU28gYEJyb3dzZXIuRG9tLmZvY3VzYCB3ZSBtYXkgZmFpbCB3aXRoIGFuXG5gRXJyb3JgIGlmIHRoZSBnaXZlbiBJRCBkb2VzIG5vdCBleGlzdC4gV2hlcmVhcyBgVGltZS5ub3dgIG5ldmVyIGZhaWxzIHNvXG5JIGNhbm5vdCBiZSBtb3JlIHNwZWNpZmljIHRoYW4gYHhgLiBObyBzdWNoIHZhbHVlIHdpbGwgZXZlciBleGlzdCEgSW5zdGVhZCBpdFxuYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIGN1cnJlbnQgUE9TSVggdGltZS5cblxuTW9yZSBnZW5lcmFsbHkgYSB0YXNrIGlzIGEgX2Rlc2NyaXB0aW9uXyBvZiB3aGF0IHlvdSBuZWVkIHRvIGRvLiBMaWtlIGEgdG9kb1xubGlzdC4gT3IgbGlrZSBhIGdyb2NlcnkgbGlzdC4gT3IgbGlrZSBHaXRIdWIgaXNzdWVzLiBTbyBzYXlpbmcgXCJ0aGUgdGFzayBpc1xudG8gdGVsbCBtZSB0aGUgY3VycmVudCBQT1NJWCB0aW1lXCIgZG9lcyBub3QgY29tcGxldGUgdGhlIHRhc2shIFlvdSBuZWVkXG5bYHBlcmZvcm1gXSgjcGVyZm9ybSkgdGFza3Mgb3IgW2BhdHRlbXB0YF0oI2F0dGVtcHQpIHRhc2tzLlxuXG4tfVxudHlwZSBhbGlhcyBUYXNrIHggYSA9XG4gICAgUGxhdGZvcm0uVGFzayB4IGFcblxuXG5cbi0tIEJBU0lDU1xuXG5cbnstfCBBIHRhc2sgdGhhdCBzdWNjZWVkcyBpbW1lZGlhdGVseSB3aGVuIHJ1bi4gSXQgaXMgdXN1YWxseSB1c2VkIHdpdGhcbltgYW5kVGhlbmBdKCNhbmRUaGVuKS4gWW91IGNhbiB1c2UgaXQgbGlrZSBgbWFwYCBpZiB5b3Ugd2FudDpcblxuICAgIGltcG9ydCBUaW1lXG5cblxuICAgIHRpbWVJbk1pbGxpcyA6IFRhc2sgeCBJbnRcbiAgICB0aW1lSW5NaWxsaXMgPVxuICAgICAgICBUaW1lLm5vd1xuICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFx0IC0+IHN1Y2NlZWQgKFRpbWUucG9zaXhUb01pbGxpcyB0KSlcblxuLX1cbnN1Y2NlZWQgOiBhIC0+IFRhc2sgeCBhXG5zdWNjZWVkID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuc3VjY2VlZFxuXG5cbnstfCBBIHRhc2sgdGhhdCBmYWlscyBpbW1lZGlhdGVseSB3aGVuIHJ1bi4gTGlrZSB3aXRoIGBzdWNjZWVkYCwgdGhpcyBjYW4gYmVcbnVzZWQgd2l0aCBgYW5kVGhlbmAgdG8gY2hlY2sgb24gdGhlIG91dGNvbWUgb2YgYW5vdGhlciB0YXNrLlxuXG4gICAgdHlwZSBFcnJvclxuICAgICAgICA9IE5vdEZvdW5kXG5cbiAgICBub3RGb3VuZCA6IFRhc2sgRXJyb3IgYVxuICAgIG5vdEZvdW5kID1cbiAgICAgICAgZmFpbCBOb3RGb3VuZFxuXG4tfVxuZmFpbCA6IHggLT4gVGFzayB4IGFcbmZhaWwgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5mYWlsXG5cblxuXG4tLSBNQVBQSU5HXG5cblxuey18IFRyYW5zZm9ybSBhIHRhc2suIE1heWJlIHlvdSB3YW50IHRvIHVzZSBbYFRpbWVgXVt0aW1lXSB0byBmaWd1cmVcbm91dCB3aGF0IHRpbWUgaXQgd2lsbCBiZSBpbiBvbmUgaG91cjpcblxuICAgIGltcG9ydCBUYXNrIGV4cG9zaW5nIChUYXNrKVxuICAgIGltcG9ydCBUaW1lXG5cblxuICAgIHRpbWVJbk9uZUhvdXIgOiBUYXNrIHggVGltZS5Qb3NpeFxuICAgIHRpbWVJbk9uZUhvdXIgPVxuICAgICAgICBUYXNrLm1hcCBhZGRBbkhvdXIgVGltZS5ub3dcblxuICAgIGFkZEFuSG91ciA6IFRpbWUuUG9zaXggLT4gVGltZS5Qb3NpeFxuICAgIGFkZEFuSG91ciB0aW1lID1cbiAgICAgICAgVGltZS5taWxsaXNUb1Bvc2l4IChUaW1lLnBvc2l4VG9NaWxsaXMgdGltZSArIDYwICogNjAgKiAxMDAwKVxuXG5bdGltZV06IFRpbWVcblxuLX1cbm1hcCA6IChhIC0+IGIpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiXG5tYXAgZnVuYyB0YXNrQSA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlbiAoXFxhIC0+IHN1Y2NlZWQgKGZ1bmMgYSkpXG5cblxuey18IFB1dCB0aGUgcmVzdWx0cyBvZiB0d28gdGFza3MgdG9nZXRoZXIuIEZvciBleGFtcGxlLCBpZiB3ZSB3YW50ZWQgdG8ga25vd1xudGhlIGN1cnJlbnQgbW9udGgsIHdlIGNvdWxkIHVzZSBbYFRpbWVgXVt0aW1lXSB0byBhc2s6XG5cbiAgICBpbXBvcnQgVGFzayBleHBvc2luZyAoVGFzaylcbiAgICBpbXBvcnQgVGltZVxuXG5cbiAgICBnZXRNb250aCA6IFRhc2sgeCBJbnRcbiAgICBnZXRNb250aCA9XG4gICAgICAgIFRhc2subWFwMiBUaW1lLnRvTW9udGggVGltZS5oZXJlIFRpbWUubm93XG5cbioqTm90ZToqKiBTYXkgd2Ugd2VyZSBkb2luZyBIVFRQIHJlcXVlc3RzIGluc3RlYWQuIGBtYXAyYCBkb2VzIGVhY2ggdGFzayBpblxub3JkZXIsIHNvIGl0IHdvdWxkIHRyeSB0aGUgZmlyc3QgcmVxdWVzdCBhbmQgb25seSBjb250aW51ZSBhZnRlciBpdCBzdWNjZWVkcy5cbklmIGl0IGZhaWxzLCB0aGUgd2hvbGUgdGhpbmcgZmFpbHMhXG5cblt0aW1lXTogVGltZVxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gcmVzdWx0KSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYiAtPiBUYXNrIHggcmVzdWx0XG5tYXAyIGZ1bmMgdGFza0EgdGFza0IgPVxuICAgIHRhc2tBXG4gICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgIChcXGEgLT5cbiAgICAgICAgICAgICAgICB0YXNrQlxuICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChcXGIgLT4gc3VjY2VlZCAoZnVuYyBhIGIpKVxuICAgICAgICAgICAgKVxuXG5cbnstfCAtfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCByZXN1bHRcbm1hcDMgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChcXGMgLT4gc3VjY2VlZCAoZnVuYyBhIGIgYykpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXA0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gcmVzdWx0KSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYiAtPiBUYXNrIHggYyAtPiBUYXNrIHggZCAtPiBUYXNrIHggcmVzdWx0XG5tYXA0IGZ1bmMgdGFza0EgdGFza0IgdGFza0MgdGFza0QgPVxuICAgIHRhc2tBXG4gICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgIChcXGEgLT5cbiAgICAgICAgICAgICAgICB0YXNrQlxuICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAoXFxiIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxcYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcZCAtPiBzdWNjZWVkIChmdW5jIGEgYiBjIGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG5cbnstfCAtfVxubWFwNSA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gcmVzdWx0KSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYiAtPiBUYXNrIHggYyAtPiBUYXNrIHggZCAtPiBUYXNrIHggZSAtPiBUYXNrIHggcmVzdWx0XG5tYXA1IGZ1bmMgdGFza0EgdGFza0IgdGFza0MgdGFza0QgdGFza0UgPVxuICAgIHRhc2tBXG4gICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgIChcXGEgLT5cbiAgICAgICAgICAgICAgICB0YXNrQlxuICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAoXFxiIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxcYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcXGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChcXGUgLT4gc3VjY2VlZCAoZnVuYyBhIGIgYyBkIGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG5cbnstfCBTdGFydCB3aXRoIGFuIGFycmF5IG9mIHRhc2tzLCBhbmQgdHVybiB0aGVtIGludG8gYSBzaW5nbGUgdGFzayB0aGF0IHJldHVybnMgYVxuYXJyYXkuIFRoZSB0YXNrcyB3aWxsIGJlIHJ1biBpbiBvcmRlciBvbmUtYnktb25lIGFuZCBpZiBhbnkgdGFzayBmYWlscyB0aGUgd2hvbGVcbnNlcXVlbmNlIGZhaWxzLlxuXG4gICAgc2VxdWVuY2UgWyBzdWNjZWVkIDEsIHN1Y2NlZWQgMiBdID09IHN1Y2NlZWQgWyAxLCAyIF1cblxuLX1cbnNlcXVlbmNlIDogQXJyYXkgKFRhc2sgeCBhKSAtPiBUYXNrIHggKEFycmF5IGEpXG5zZXF1ZW5jZSB0YXNrcyA9XG4gICAgQXJyYXkuZm9sZHIgKG1hcDIgQXJyYXkucHVzaEZpcnN0KSAoc3VjY2VlZCBbXSkgdGFza3NcblxuXG5cbi0tIENIQUlOSU5HXG5cblxuey18IENoYWluIHRvZ2V0aGVyIGEgdGFzayBhbmQgYSBjYWxsYmFjay4gVGhlIGZpcnN0IHRhc2sgd2lsbCBydW4sIGFuZCBpZiBpdCBpc1xuc3VjY2Vzc2Z1bCwgeW91IGdpdmUgdGhlIHJlc3VsdCB0byB0aGUgY2FsbGJhY2sgcmVzdWx0aW5nIGluIGFub3RoZXIgdGFzay4gVGhpc1xudGFzayB0aGVuIGdldHMgcnVuLiBXZSBjb3VsZCB1c2UgdGhpcyB0byBtYWtlIGEgdGFzayB0aGF0IHJlc29sdmVzIGFuIGhvdXIgZnJvbVxubm93OlxuXG5cbiAgICBpbXBvcnQgUHJvY2Vzc1xuICAgIGltcG9ydCBUaW1lXG5cbiAgICB0aW1lSW5PbmVIb3VyIDogVGFzayB4IFRpbWUuUG9zaXhcbiAgICB0aW1lSW5PbmVIb3VyID1cbiAgICAgICAgUHJvY2Vzcy5zbGVlcCAoNjAgKiA2MCAqIDEwMDApXG4gICAgICAgICAgICB8PiBhbmRUaGVuIChcXF8gLT4gVGltZS5ub3cpXG5cbkZpcnN0IHRoZSBwcm9jZXNzIHNsZWVwcyBmb3IgYW4gaG91ciAqKmFuZCB0aGVuKiogaXQgdGVsbHMgdXMgd2hhdCB0aW1lIGl0IGlzLlxuXG4tfVxuYW5kVGhlbiA6IChhIC0+IFRhc2sgeCBiKSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYlxuYW5kVGhlbiA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmFuZFRoZW5cblxuXG57LXwgVGhpcyBpcyBsaWtlIFthbmRUaGVuXShhbmRUaGVuKSBidXQgdGhlIGFyZ3VtZW50cyBhcmUgcmV2ZXJzZWQuIFRoZSBjYWxsYmFja1xuaXMgdGhlIGxhc3QgYXJndW1lbnQsIGluc3RlYWQgb2YgdGhlIGZpcnN0LiBUaGlzIG1ha2VzIGl0IGVhc2llciB0byB3cml0ZSBpbXBlcmF0aXZlXG5jb2RlIHdoZXJlIGVhY2ggY2FsbGJhY2sgaW52b2x2ZXMgbW9yZSBsb2dpYy5cblxuICAgIGltcG9ydCBQcm9jZXNzXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHRpbWVJbk9uZUhvdXIgOiBUYXNrIHggVGltZS5Qb3NpeFxuICAgIHRpbWVJbk9uZUhvdXIgPVxuICAgICAgICBUYXNrLmF3YWl0IChQcm9jZXNzLnNsZWVwIDx8IDYwICogNjAgKiAxMDAwKSA8fCBcXF8gLT5cbiAgICAgICAgICAgIFRpbWUubm93XG5cbihhKXdhaXQgZm9yIGFuIGhvdXIsIHRoZW4gZmV0Y2ggdGhlIGN1cnJlbnQgdGltZS5cblxuLX1cbmF3YWl0IDogVGFzayB4IGEgLT4gKGEgLT4gVGFzayB4IGIpIC0+IFRhc2sgeCBiXG5hd2FpdCB0c2sgY2FsbGJhY2sgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5hbmRUaGVuIGNhbGxiYWNrIHRza1xuXG5cbi0tIEVSUk9SU1xuXG5cbnstfCBSZWNvdmVyIGZyb20gYSBmYWlsdXJlIGluIGEgdGFzay4gSWYgdGhlIGdpdmVuIHRhc2sgZmFpbHMsIHdlIHVzZSB0aGVcbmNhbGxiYWNrIHRvIHJlY292ZXIuXG5cbiAgICBmYWlsIFwiZmlsZSBub3QgZm91bmRcIlxuICAgICAgfD4gb25FcnJvciAoXFxtc2cgLT4gc3VjY2VlZCA0MilcbiAgICAgIC0tIHN1Y2NlZWQgNDJcblxuICAgIHN1Y2NlZWQgOVxuICAgICAgfD4gb25FcnJvciAoXFxtc2cgLT4gc3VjY2VlZCA0MilcbiAgICAgIC0tIHN1Y2NlZWQgOVxuXG4tfVxub25FcnJvciA6ICh4IC0+IFRhc2sgeSBhKSAtPiBUYXNrIHggYSAtPiBUYXNrIHkgYVxub25FcnJvciA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLm9uRXJyb3JcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBlcnJvciB2YWx1ZS4gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBuZWVkIGEgYnVuY2ggb2YgZXJyb3JcbnR5cGVzIHRvIG1hdGNoIHVwLlxuXG4gICAgdHlwZSBFcnJvclxuICAgICAgICA9IEh0dHAgSHR0cC5FcnJvclxuICAgICAgICB8IFdlYkdMIFdlYkdMLkVycm9yXG5cbiAgICBnZXRSZXNvdXJjZXMgOiBUYXNrIEVycm9yIFJlc291cmNlXG4gICAgZ2V0UmVzb3VyY2VzID1cbiAgICAgICAgc2VxdWVuY2VcbiAgICAgICAgICAgIFsgbWFwRXJyb3IgSHR0cCBzZXJ2ZXJUYXNrXG4gICAgICAgICAgICAsIG1hcEVycm9yIFdlYkdMIHRleHR1cmVUYXNrXG4gICAgICAgICAgICBdXG5cbi19XG5tYXBFcnJvciA6ICh4IC0+IHkpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeSBhXG5tYXBFcnJvciBjb252ZXJ0IHRhc2sgPVxuICAgIHRhc2tcbiAgICAgICAgfD4gb25FcnJvciAoZmFpbCA8PCBjb252ZXJ0KVxuXG5cblxuLS0gQ09NTUFORFNcblxuXG50eXBlIE15Q21kIG1zZ1xuICAgID0gUGVyZm9ybSAoVGFzayBOZXZlciBtc2cpXG4gICAgfCBFeGVjdXRlIChUYXNrIE5ldmVyIHt9KVxuXG5cbnstfCBMaWtlIEkgd2FzIHNheWluZyBpbiB0aGUgW2BUYXNrYF0oI1Rhc2spIGRvY3VtZW50YXRpb24sIGp1c3QgaGF2aW5nIGFcbmBUYXNrYCBkb2VzIG5vdCBtZWFuIGl0IGlzIGRvbmUuIFdlIG11c3QgY29tbWFuZCBHcmVuIHRvIGBwZXJmb3JtYCB0aGUgdGFzazpcblxuXG5cbiAgICBpbXBvcnQgVGFza1xuICAgIGltcG9ydCBUaW1lXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrXG4gICAgICAgIHwgU2VhcmNoIFN0cmluZ1xuICAgICAgICB8IE5ld1RpbWUgVGltZS5Qb3NpeFxuXG4gICAgZ2V0TmV3VGltZSA6IENtZCBNc2dcbiAgICBnZXROZXdUaW1lID1cbiAgICAgICAgVGFzay5wZXJmb3JtIE5ld1RpbWUgVGltZS5ub3dcblxuU28gd2UgaGF2ZSBjaGFuZ2VkIGEgdGFzayBsaWtlIFwibWFrZSBkZWxpY2lvdXMgbGFzYWduYVwiIGludG8gYSBjb21tYW5kIGxpa2VcblwiSGV5IEdyZW4sIG1ha2UgZGVsaWNpb3VzIGxhc2FnbmEgYW5kIGdpdmUgaXQgdG8gbXkgYHVwZGF0ZWAgZnVuY3Rpb24gYXMgYVxuYE1zZ2AgdmFsdWUuXCJcblxuLX1cbnBlcmZvcm0gOiAoYSAtPiBtc2cpIC0+IFRhc2sgTmV2ZXIgYSAtPiBDbWQgbXNnXG5wZXJmb3JtIHRvTWVzc2FnZSB0YXNrID1cbiAgICBjb21tYW5kIChQZXJmb3JtIChtYXAgdG9NZXNzYWdlIHRhc2spKVxuXG5cbnstfCBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byBbYHBlcmZvcm1gXSgjcGVyZm9ybSkgZXhjZXB0IGl0IGNhbiBoYW5kbGUgZmFpbHVyZXMhXG5TbyB3ZSBjb3VsZCBfYXR0ZW1wdF8gdG8gZm9jdXMgb24gYSBjZXJ0YWluIERPTSBub2RlIGxpa2UgdGhpczpcblxuICAgIC0tIGdyZW4gaW5zdGFsbCBncmVuLWxhbmcvYnJvd3NlclxuXG5cbiAgICBpbXBvcnQgQnJvd3Nlci5Eb21cbiAgICBpbXBvcnQgVGFza1xuXG4gICAgdHlwZSBNc2dcbiAgICAgICAgPSBDbGlja1xuICAgICAgICB8IFNlYXJjaCBTdHJpbmdcbiAgICAgICAgfCBGb2N1cyAoUmVzdWx0IEJyb3dzZXIuRG9tRXJyb3Ige30pXG5cbiAgICBmb2N1cyA6IENtZCBNc2dcbiAgICBmb2N1cyA9XG4gICAgICAgIFRhc2suYXR0ZW1wdCBGb2N1cyAoQnJvd3Nlci5Eb20uZm9jdXMgXCJteS1hcHAtc2VhcmNoLWJveFwiKVxuXG5TbyB0aGUgdGFzayBpcyBcImZvY3VzIG9uIHRoaXMgRE9NIG5vZGVcIiBhbmQgd2UgYXJlIHR1cm5pbmcgaXQgaW50byB0aGUgY29tbWFuZFxuXCJIZXkgR3JlbiwgYXR0ZW1wdCB0byBmb2N1cyBvbiB0aGlzIERPTSBub2RlIGFuZCBnaXZlIG1lIGEgYE1zZ2AgYWJvdXQgd2hldGhlclxueW91IHN1Y2NlZWRlZCBvciBmYWlsZWQuXCJcblxuLX1cbmF0dGVtcHQgOiAoUmVzdWx0IHggYSAtPiBtc2cpIC0+IFRhc2sgeCBhIC0+IENtZCBtc2dcbmF0dGVtcHQgcmVzdWx0VG9NZXNzYWdlIHRhc2sgPVxuICAgIGNvbW1hbmRcbiAgICAgICAgKFBlcmZvcm1cbiAgICAgICAgICAgICh0YXNrXG4gICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoc3VjY2VlZCA8PCByZXN1bHRUb01lc3NhZ2UgPDwgT2spXG4gICAgICAgICAgICAgICAgfD4gb25FcnJvciAoc3VjY2VlZCA8PCByZXN1bHRUb01lc3NhZ2UgPDwgRXJyKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG5cblxuey18IFNvbWV0aW1lcyB3ZSB3YW50IHRvIGdpdmUgYSBjb21tYW5kIHdpdGhvdXQgYmVpbmcgdG9sZCBob3cgaXQgd2VudC4gTWF5YmUgd2VcbmFyZSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgc2NyZWVuLCBvciBjaGFuZ2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cuXG5JbiBlaXRoZXIgY2FzZSwgdGhlcmUncyByZWFsbHkgbm90aGluZyBmb3IgdXMgdG8gZG8gYWZ0ZXJ3YXJkcy4gSW4gdGhvc2UgY2FzZXNcbndlIGNhbiB1c2UgYGV4ZWN1dGVgLlxuLX1cbmV4ZWN1dGUgOiBUYXNrIE5ldmVyIGEgLT4gQ21kIG1zZ1xuZXhlY3V0ZSB0YXNrID1cbiAgICBjb21tYW5kIChFeGVjdXRlIChtYXAgKFxcXyAtPiB7fSkgdGFzaykpXG5cblxuY21kTWFwIDogKGEgLT4gYikgLT4gTXlDbWQgYSAtPiBNeUNtZCBiXG5jbWRNYXAgdGFnZ2VyIGNtZCA9XG4gICAgd2hlbiBjbWQgaXNcbiAgICAgICAgUGVyZm9ybSB0YXNrIC0+XG4gICAgICAgICAgICBQZXJmb3JtIChtYXAgdGFnZ2VyIHRhc2spXG5cbiAgICAgICAgRXhlY3V0ZSB0YXNrIC0+XG4gICAgICAgICAgICBFeGVjdXRlIHRhc2tcblxuXG4tLSBNQU5BR0VSXG5cblxuaW5pdCA6IFRhc2sgTmV2ZXIge31cbmluaXQgPVxuICAgIHN1Y2NlZWQge31cblxuXG5vbkVmZmVjdHMgOiBQbGF0Zm9ybS5Sb3V0ZXIgbXNnIE5ldmVyIC0+IEFycmF5IChNeUNtZCBtc2cpIC0+IHt9IC0+IFRhc2sgTmV2ZXIge31cbm9uRWZmZWN0cyByb3V0ZXIgY29tbWFuZHMgc3RhdGUgPVxuICAgIG1hcFxuICAgICAgICAoXFxfIC0+IHt9KVxuICAgICAgICAoc2VxdWVuY2UgKEFycmF5Lm1hcCAoc3Bhd25DbWQgcm91dGVyKSBjb21tYW5kcykpXG5cblxub25TZWxmTXNnIDogUGxhdGZvcm0uUm91dGVyIG1zZyBOZXZlciAtPiBOZXZlciAtPiB7fSAtPiBUYXNrIE5ldmVyIHt9XG5vblNlbGZNc2cgXyBfIF8gPVxuICAgIHN1Y2NlZWQge31cblxuXG5zcGF3bkNtZCA6IFBsYXRmb3JtLlJvdXRlciBtc2cgTmV2ZXIgLT4gTXlDbWQgbXNnIC0+IFRhc2sgeCB7fVxuc3Bhd25DbWQgcm91dGVyIGNtZCA9XG4gICAgd2hlbiBjbWQgaXNcbiAgICAgICAgUGVyZm9ybSB0YXNrIC0+XG4gICAgICAgICAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuc3Bhd25cbiAgICAgICAgICAgICAgICAodGFza1xuICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChQbGF0Zm9ybS5zZW5kVG9BcHAgcm91dGVyKVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICBFeGVjdXRlIHRhc2sgLT5cbiAgICAgICAgICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zcGF3biB0YXNrXG4iLAogICAgICAgICJtb2R1bGUgUGxhdGZvcm0gZXhwb3NpbmdcbiAgICAoIFByb2dyYW0sIHdvcmtlclxuICAgICwgVGFzaywgUHJvY2Vzc0lkXG4gICAgLCBSb3V0ZXIsIHNlbmRUb0FwcCwgc2VuZFRvU2VsZlxuICAgIClcblxuey18IFRoaXMgbW9kdWxlIGNvbnRhaW5zIGRlZmluaXRpb25zIGltcG9ydGFudCB0byB0aGUgbGFuZ3VhZ2UgcnVudGltZS5cbllvdSdyZSB1bmxpa2VseSB0byBtYWtlIGRpcmVjdCB1c2Ugb2YgdGhlc2UgdGhpbmdzIHlvdXJzZWxmLlxuXG5cbkBkb2NzIFByb2dyYW0sIHdvcmtlclxuXG5cbiMjIFRhc2tzIGFuZCBQcm9jZXNzZXNcblxuQGRvY3MgVGFzaywgUHJvY2Vzc0lkXG5cblxuIyMgRWZmZWN0IE1hbmFnZXIgSGVscGVyc1xuXG5FZmZlY3QgbWFuYWdlcnMgY2FuIGJlIHZpZXdlZCBhcyBwcm9ncmFtcy13aXRoaW4tYS1wcm9ncmFtLiBUaGV5IGhhdmUgdGhlaXIgb3duXG5zdGF0ZSwgYW5kIGNvbW11bmljYXRlIHdpdGggdGhlIGFwcGxpY2F0aW9uIHVzaW5nIG1lc3NhZ2VzLlxuXG5FZmZlY3QgbWFuYWdlcnMgYXJlIHVzZWQgaW50ZXJuYWxseSBmb3IgbWFueSB0aGluZ3MsIGJ1dCBpc24ndCBjb25zaWRlcmVkIHRvIGJlXG50cnVseSBzdGFibGUuIEl0J3MgbGlrZWx5IHRoYXQgdGhpcyBmZWF0dXJlIHdpbGwgYmUgcmVkZXNpZ25lZCBpbiBhIGZ1dHVyZSByZWxhc2UuXG5cblxuQGRvY3MgUm91dGVyLCBzZW5kVG9BcHAsIHNlbmRUb1NlbGZcblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoTmV2ZXIpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuUGxhdGZvcm1cbmltcG9ydCBHcmVuLktlcm5lbC5TY2hlZHVsZXJcbmltcG9ydCBQbGF0Zm9ybS5DbWQgZXhwb3NpbmcgKENtZClcbmltcG9ydCBQbGF0Zm9ybS5TdWIgZXhwb3NpbmcgKFN1YilcblxuXG5cbi0tIFBST0dSQU1TXG5cblxuey18IEEgYFByb2dyYW1gIGRlc2NyaWJlcyBhbiBHcmVuIHByb2dyYW0hIEhvdyBkb2VzIGl0IHJlYWN0IHRvIGlucHV0PyBEb2VzIGl0XG5zaG93IGFueXRoaW5nIG9uIHNjcmVlbj8gRXRjLlxuLX1cbnR5cGUgUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbiAgICA9IFByb2dyYW1cblxuXG57LXwgQ3JlYXRlIGEgW2hlYWRsZXNzXSBwcm9ncmFtIHdpdGggbm8gdXNlciBpbnRlcmZhY2UuXG5cblRoaXMgaXMgZ3JlYXQgaWYgeW91IHdhbnQgdG8gdXNlIEdyZW4gYXMgdGhlICZsZHF1bzticmFpbiZyZHF1bzsgZm9yIHNvbWV0aGluZ1xuZWxzZS4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBzZW5kIG1lc3NhZ2VzIG91dCBwb3J0cyB0byBtb2RpZnkgdGhlIERPTSwgYnV0IGRvXG5hbGwgdGhlIGNvbXBsZXggbG9naWMgaW4gR3Jlbi5cblxuW2hlYWRsZXNzXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVhZGxlc3Nfc29mdHdhcmVcblxuSW5pdGlhbGl6aW5nIGEgaGVhZGxlc3MgcHJvZ3JhbSBmcm9tIEphdmFTY3JpcHQgbG9va3MgbGlrZSB0aGlzOlxuXG5gYGBqYXZhc2NyaXB0XG52YXIgYXBwID0gR3Jlbi5NeVRoaW5nLmluaXQoKTtcbmBgYFxuXG5JZiB5b3UgX2RvXyB3YW50IHRvIGNvbnRyb2wgdGhlIHVzZXIgaW50ZXJmYWNlIGluIEdyZW4sIHRoZSBbYEJyb3dzZXJgXVticm93c2VyXVxubW9kdWxlIGhhcyBhIGZldyB3YXlzIHRvIGNyZWF0ZSB0aGF0IGtpbmQgb2YgYFByb2dyYW1gIGluc3RlYWQhXG5cbltoZWFkbGVzc106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlYWRsZXNzX3NvZnR3YXJlXG5bYnJvd3Nlcl06IC9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL2xhdGVzdC9tb2R1bGUvQnJvd3NlclxuXG4tfVxud29ya2VyIDpcbiAgICB7IGluaXQgOiBmbGFncyAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHN1YnNjcmlwdGlvbnMgOiBtb2RlbCAtPiBTdWIgbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG53b3JrZXIgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLndvcmtlclxuXG5cblxuLS0gVEFTS1MgYW5kIFBST0NFU1NFU1xuXG5cbnstfCBIZWFkIG92ZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBbYFRhc2tgXShUYXNrKSBtb2R1bGUgZm9yIG1vcmVcbmluZm9ybWF0aW9uIG9uIHRoaXMuIEl0IGlzIG9ubHkgZGVmaW5lZCBoZXJlIGJlY2F1c2UgaXQgaXMgYSBwbGF0Zm9ybVxucHJpbWl0aXZlLlxuLX1cbnR5cGUgVGFzayBlcnIgb2tcbiAgICA9IFRhc2tcblxuXG57LXwgSGVhZCBvdmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgW2BQcm9jZXNzYF0oUHJvY2VzcykgbW9kdWxlIGZvclxuaW5mb3JtYXRpb24gb24gdGhpcy4gSXQgaXMgb25seSBkZWZpbmVkIGhlcmUgYmVjYXVzZSBpdCBpcyBhIHBsYXRmb3JtXG5wcmltaXRpdmUuXG4tfVxudHlwZSBQcm9jZXNzSWRcbiAgICA9IFByb2Nlc3NJZFxuXG5cblxuLS0gRUZGRUNUIE1BTkFHRVIgSU5URVJOQUxTXG5cblxuey18IEFuIGVmZmVjdCBtYW5hZ2VyIGhhcyBhY2Nlc3MgdG8gYSDigJxyb3V0ZXLigJ0gdGhhdCByb3V0ZXMgbWVzc2FnZXMgYmV0d2VlblxudGhlIG1haW4gYXBwIGFuZCB5b3VyIGluZGl2aWR1YWwgZWZmZWN0IG1hbmFnZXIuXG4tfVxudHlwZSBSb3V0ZXIgYXBwTXNnIHNlbGZNc2dcbiAgICA9IFJvdXRlclxuXG5cbnstfCBTZW5kIHRoZSByb3V0ZXIgYSBtZXNzYWdlIGZvciB0aGUgbWFpbiBsb29wIG9mIHlvdXIgYXBwLiBUaGlzIG1lc3NhZ2Ugd2lsbFxuYmUgaGFuZGxlZCBieSB0aGUgb3ZlcmFsbCBgdXBkYXRlYCBmdW5jdGlvbiwganVzdCBsaWtlIGV2ZW50cyBmcm9tIGBIdG1sYC5cbi19XG5zZW5kVG9BcHAgOiBSb3V0ZXIgbXNnIGEgLT4gbXNnIC0+IFRhc2sgeCB7fVxuc2VuZFRvQXBwID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5zZW5kVG9BcHBcblxuXG57LXwgU2VuZCB0aGUgcm91dGVyIGEgbWVzc2FnZSBmb3IgeW91ciBlZmZlY3QgbWFuYWdlci4gVGhpcyBtZXNzYWdlIHdpbGxcbmJlIHJvdXRlZCB0byB0aGUgYG9uU2VsZk1zZ2AgZnVuY3Rpb24sIHdoZXJlIHlvdSBjYW4gdXBkYXRlIHRoZSBzdGF0ZSBvZiB5b3VyXG5lZmZlY3QgbWFuYWdlciBhcyBuZWNlc3NhcnkuXG5cbkFzIGFuIGV4YW1wbGUsIHRoZSBlZmZlY3QgbWFuYWdlciBmb3Igd2ViIHNvY2tldHNcblxuLX1cbnNlbmRUb1NlbGYgOiBSb3V0ZXIgYSBtc2cgLT4gbXNnIC0+IFRhc2sgeCB7fVxuc2VuZFRvU2VsZiA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uc2VuZFRvU2VsZlxuIiwKICAgICAgICAibW9kdWxlIFBsYXRmb3JtLkNtZCBleHBvc2luZ1xuICAgICggQ21kLCBub25lLCBiYXRjaFxuICAgICwgbWFwXG4gICAgKVxuXG57LXxcblxuPiAqKk5vdGU6KiogR3JlbiBoYXMgKiptYW5hZ2VkIGVmZmVjdHMqKiwgbWVhbmluZyB0aGF0IHRoaW5ncyBsaWtlIEhUVFBcbj4gcmVxdWVzdHMgb3Igd3JpdGluZyB0byBkaXNrIGFyZSBhbGwgdHJlYXRlZCBhcyBfZGF0YV8gaW4gR3Jlbi4gV2hlbiB0aGlzXG4+IGRhdGEgaXMgZ2l2ZW4gdG8gdGhlIEdyZW4gcnVudGltZSBzeXN0ZW0sIGl0IGNhbiBkbyBzb21lIOKAnHF1ZXJ5IG9wdGltaXphdGlvbuKAnVxuPiBiZWZvcmUgYWN0dWFsbHkgcGVyZm9ybWluZyB0aGUgZWZmZWN0LiBQZXJoYXBzIHVuZXhwZWN0ZWRseSwgdGhpcyBtYW5hZ2VkXG4+IGVmZmVjdHMgaWRlYSBpcyB0aGUgaGVhcnQgb2Ygd2h5IEdyZW4gaXMgc28gbmljZSBmb3IgdGVzdGluZywgcmV1c2UsXG4+IHJlcHJvZHVjaWJpbGl0eSwgZXRjLlxuPlxuPiBHcmVuIGhhcyB0d28ga2luZHMgb2YgbWFuYWdlZCBlZmZlY3RzOiBjb21tYW5kcyBhbmQgc3Vic2NyaXB0aW9ucy5cblxuXG4jIyBDb21tYW5kc1xuXG5AZG9jcyBDbWQsIG5vbmUsIGJhdGNoXG5cblxuIyMgRmFuY3kgU3R1ZmZcblxuQGRvY3MgbWFwXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuUGxhdGZvcm1cblxuXG5cbi0tIENPTU1BTkRTXG5cblxuey18IEEgY29tbWFuZCBpcyBhIHdheSBvZiB0ZWxsaW5nIEdyZW4sIOKAnEhleSwgSSB3YW50IHlvdSB0byBkbyB0aGlzIHRoaW5nIeKAnVxuU28gaWYgeW91IHdhbnQgdG8gc2VuZCBhbiBIVFRQIHJlcXVlc3QsIHlvdSB3b3VsZCBuZWVkIHRvIGNvbW1hbmQgR3JlbiB0byBkbyBpdC5cbk9yIGlmIHlvdSB3YW50ZWQgdG8gYXNrIGZvciBnZW9sb2NhdGlvbiwgeW91IHdvdWxkIG5lZWQgdG8gY29tbWFuZCBHcmVuIHRvIGdvXG5nZXQgaXQuXG5cbkV2ZXJ5IGBDbWRgIHNwZWNpZmllcyAoMSkgd2hpY2ggZWZmZWN0cyB5b3UgbmVlZCBhY2Nlc3MgdG8gYW5kICgyKSB0aGUgdHlwZSBvZlxubWVzc2FnZXMgdGhhdCB3aWxsIGNvbWUgYmFjayBpbnRvIHlvdXIgYXBwbGljYXRpb24uXG5cbioqTm90ZToqKiBEbyBub3Qgd29ycnkgaWYgdGhpcyBzZWVtcyBjb25mdXNpbmcgYXQgZmlyc3QhIEFzIHdpdGggZXZlcnkgR3JlbiB1c2VyXG5ldmVyLCBjb21tYW5kcyB3aWxsIG1ha2UgbW9yZSBzZW5zZSBhcyB5b3Ugd29yayB0aHJvdWdoIFt0aGUgR3JlbiBBcmNoaXRlY3R1cmVcblR1dG9yaWFsXShodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlLykgYW5kIHNlZSBob3cgdGhleVxuZml0IGludG8gYSByZWFsIGFwcGxpY2F0aW9uIVxuXG4tfVxudHlwZSBDbWQgbXNnXG4gICAgPSBDbWRcblxuXG57LXwgVGVsbCB0aGUgcnVudGltZSB0aGF0IHRoZXJlIGFyZSBubyBjb21tYW5kcy5cbi19XG5ub25lIDogQ21kIG1zZ1xubm9uZSA9XG4gICAgYmF0Y2ggW11cblxuXG57LXwgV2hlbiB5b3UgbmVlZCB0aGUgcnVudGltZSBzeXN0ZW0gdG8gcGVyZm9ybSBhIGNvdXBsZSBjb21tYW5kcywgeW91XG5jYW4gYmF0Y2ggdGhlbSB0b2dldGhlci4gRWFjaCBpcyBoYW5kZWQgdG8gdGhlIHJ1bnRpbWUgYXQgdGhlIHNhbWUgdGltZSxcbmFuZCBzaW5jZSBlYWNoIGNhbiBwZXJmb3JtIGFyYml0cmFyeSBvcGVyYXRpb25zIGluIHRoZSB3b3JsZCwgdGhlcmUgYXJlXG5ubyBvcmRlcmluZyBndWFyYW50ZWVzIGFib3V0IHRoZSByZXN1bHRzLlxuXG4qKk5vdGU6KiogYENtZC5ub25lYCBhbmQgYENtZC5iYXRjaCBbIENtZC5ub25lLCBDbWQubm9uZSBdYCBhbmQgYENtZC5iYXRjaCBbXWBcbmFsbCBkbyB0aGUgc2FtZSB0aGluZy5cblxuLX1cbmJhdGNoIDogQXJyYXkgKENtZCBtc2cpIC0+IENtZCBtc2dcbmJhdGNoID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5iYXRjaFxuXG5cblxuLS0gRkFOQ1kgU1RVRkZcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIGNvbW1hbmQuXG5WZXJ5IHNpbWlsYXIgdG8gW2BIdG1sLm1hcGBdKC9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL2xhdGVzdC9tb2R1bGUvSHRtbCNtYXApLlxuXG5UaGlzIGlzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiB3ZWxsLXN0cnVjdHVyZWQgR3JlbiBjb2RlLCBzbyBkZWZpbml0ZWx5IHJlYWQgdGhlXG5zZWN0aW9uIG9uIFtzdHJ1Y3R1cmVdIGluIHRoZSBndWlkZSBiZWZvcmUgcmVhY2hpbmcgZm9yIHRoaXMhXG5cbltzdHJ1Y3R1cmVdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvd2ViYXBwcy9zdHJ1Y3R1cmUuaHRtbFxuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBDbWQgYSAtPiBDbWQgbXNnXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLm1hcFxuIiwKICAgICAgICAibW9kdWxlIFBsYXRmb3JtLlN1YiBleHBvc2luZ1xuICAgICggU3ViLCBub25lLCBiYXRjaFxuICAgICwgbWFwXG4gICAgKVxuXG57LXxcblxuPiAqKk5vdGU6KiogR3JlbiBoYXMgKiptYW5hZ2VkIGVmZmVjdHMqKiwgbWVhbmluZyB0aGF0IHRoaW5ncyBsaWtlIEhUVFBcbj4gcmVxdWVzdHMgb3Igd3JpdGluZyB0byBkaXNrIGFyZSBhbGwgdHJlYXRlZCBhcyBfZGF0YV8gaW4gR3Jlbi4gV2hlbiB0aGlzXG4+IGRhdGEgaXMgZ2l2ZW4gdG8gdGhlIEdyZW4gcnVudGltZSBzeXN0ZW0sIGl0IGNhbiBkbyBzb21lIOKAnHF1ZXJ5IG9wdGltaXphdGlvbuKAnVxuPiBiZWZvcmUgYWN0dWFsbHkgcGVyZm9ybWluZyB0aGUgZWZmZWN0LiBQZXJoYXBzIHVuZXhwZWN0ZWRseSwgdGhpcyBtYW5hZ2VkXG4+IGVmZmVjdHMgaWRlYSBpcyB0aGUgaGVhcnQgb2Ygd2h5IEdyZW4gaXMgc28gbmljZSBmb3IgdGVzdGluZywgcmV1c2UsXG4+IHJlcHJvZHVjaWJpbGl0eSwgZXRjLlxuPlxuPiBHcmVuIGhhcyB0d28ga2luZHMgb2YgbWFuYWdlZCBlZmZlY3RzOiBjb21tYW5kcyBhbmQgc3Vic2NyaXB0aW9ucy5cblxuXG4jIyBTdWJzY3JpcHRpb25zXG5cbkBkb2NzIFN1Yiwgbm9uZSwgYmF0Y2hcblxuXG4jIyBGYW5jeSBTdHVmZlxuXG5AZG9jcyBtYXBcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuXG5cblxuLS0gU1VCU0NSSVBUSU9OU1xuXG5cbnstfCBBIHN1YnNjcmlwdGlvbiBpcyBhIHdheSBvZiB0ZWxsaW5nIEdyZW4sIOKAnEhleSwgbGV0IG1lIGtub3cgaWYgYW55dGhpbmdcbmludGVyZXN0aW5nIGhhcHBlbnMgb3ZlciB0aGVyZSHigJ0gU28gaWYgeW91IHdhbnQgdG8gbGlzdGVuIGZvciBtZXNzYWdlcyBvbiBhIHdlYlxuc29ja2V0LCB5b3Ugd291bGQgdGVsbCBHcmVuIHRvIGNyZWF0ZSBhIHN1YnNjcmlwdGlvbi4gSWYgeW91IHdhbnQgdG8gZ2V0IGNsb2NrXG50aWNrcywgeW91IHdvdWxkIHRlbGwgR3JlbiB0byBzdWJzY3JpYmUgdG8gdGhhdC4gVGhlIGNvb2wgdGhpbmcgaGVyZSBpcyB0aGF0XG50aGlzIG1lYW5zIF9HcmVuXyBtYW5hZ2VzIGFsbCB0aGUgZGV0YWlscyBvZiBzdWJzY3JpcHRpb25zIGluc3RlYWQgb2YgX3lvdV8uXG5TbyBpZiBhIHdlYiBzb2NrZXQgZ29lcyBkb3duLCBfeW91XyBkbyBub3QgbmVlZCB0byBtYW51YWxseSByZWNvbm5lY3Qgd2l0aCBhblxuZXhwb25lbnRpYWwgYmFja29mZiBzdHJhdGVneSwgX0dyZW5fIGRvZXMgdGhpcyBhbGwgZm9yIHlvdSBiZWhpbmQgdGhlIHNjZW5lcyFcblxuRXZlcnkgYFN1YmAgc3BlY2lmaWVzICgxKSB3aGljaCBlZmZlY3RzIHlvdSBuZWVkIGFjY2VzcyB0byBhbmQgKDIpIHRoZSB0eXBlIG9mXG5tZXNzYWdlcyB0aGF0IHdpbGwgY29tZSBiYWNrIGludG8geW91ciBhcHBsaWNhdGlvbi5cblxuKipOb3RlOioqIERvIG5vdCB3b3JyeSBpZiB0aGlzIHNlZW1zIGNvbmZ1c2luZyBhdCBmaXJzdCEgQXMgd2l0aCBldmVyeSBHcmVuIHVzZXJcbmV2ZXIsIHN1YnNjcmlwdGlvbnMgd2lsbCBtYWtlIG1vcmUgc2Vuc2UgYXMgeW91IHdvcmsgdGhyb3VnaCBbdGhlIEdyZW4gQXJjaGl0ZWN0dXJlXG5UdXRvcmlhbF0oaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2FyY2hpdGVjdHVyZS8pIGFuZCBzZWUgaG93IHRoZXkgZml0XG5pbnRvIGEgcmVhbCBhcHBsaWNhdGlvbiFcblxuLX1cbnR5cGUgU3ViIG1zZ1xuICAgID0gU3ViXG5cblxuey18IFRlbGwgdGhlIHJ1bnRpbWUgdGhhdCB0aGVyZSBhcmUgbm8gc3Vic2NyaXB0aW9ucy5cbi19XG5ub25lIDogU3ViIG1zZ1xubm9uZSA9XG4gICAgYmF0Y2ggW11cblxuXG57LXwgV2hlbiB5b3UgbmVlZCB0byBzdWJzY3JpYmUgdG8gbXVsdGlwbGUgdGhpbmdzLCB5b3UgY2FuIGNyZWF0ZSBhIGBiYXRjaGAgb2ZcbnN1YnNjcmlwdGlvbnMuXG5cbioqTm90ZToqKiBgU3ViLm5vbmVgIGFuZCBgU3ViLmJhdGNoIFsgU3ViLm5vbmUsIFN1Yi5ub25lIF1gIGFuZFxuYFN1Yi5iYXRjaCBbXWAgYWxsIGRvIHRoZSBzYW1lIHRoaW5nLlxuXG4tfVxuYmF0Y2ggOiBBcnJheSAoU3ViIG1zZykgLT4gU3ViIG1zZ1xuYmF0Y2ggPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLmJhdGNoXG5cblxuXG4tLSBGQU5DWSBTVFVGRlxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGEgc3Vic2NyaXB0aW9uLlxuVmVyeSBzaW1pbGFyIHRvIFtgSHRtbC5tYXBgXSgvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci9sYXRlc3QvbW9kdWxlL0h0bWwjbWFwKS5cblxuVGhpcyBpcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gd2VsbC1zdHJ1Y3R1cmVkIEdyZW4gY29kZSwgc28gZGVmaW5pdGVseSByZWFkIHRoZVxuc2VjdGlvbiBvbiBbc3RydWN0dXJlXSBpbiB0aGUgZ3VpZGUgYmVmb3JlIHJlYWNoaW5nIGZvciB0aGlzIVxuXG5bc3RydWN0dXJlXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3dlYmFwcHMvc3RydWN0dXJlLmh0bWxcblxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gU3ViIGEgLT4gU3ViIG1zZ1xubWFwID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5tYXBcbiIsCiAgICAgICAgIm1vZHVsZSBCcm93c2VyIGV4cG9zaW5nXG4gICAgKCBzYW5kYm94XG4gICAgLCBlbGVtZW50XG4gICAgLCBkb2N1bWVudCwgRG9jdW1lbnRcbiAgICAsIGFwcGxpY2F0aW9uLCBVcmxSZXF1ZXN0KC4uKVxuICAgIClcblxuey18IFRoaXMgbW9kdWxlIGhlbHBzIHlvdSBzZXQgdXAgYW4gR3JlbiBgUHJvZ3JhbWAgd2l0aCBmdW5jdGlvbnMgbGlrZVxuW2BzYW5kYm94YF0oI3NhbmRib3gpIGFuZCBbYGRvY3VtZW50YF0oI2RvY3VtZW50KS5cblxuXG4jIyBTYW5kYm94ZXNcblxuQGRvY3Mgc2FuZGJveFxuXG5cbiMjIEVsZW1lbnRzXG5cbkBkb2NzIGVsZW1lbnRcblxuXG4jIyBEb2N1bWVudHNcblxuQGRvY3MgZG9jdW1lbnQsIERvY3VtZW50XG5cblxuIyMgQXBwbGljYXRpb25zXG5cbkBkb2NzIGFwcGxpY2F0aW9uLCBVcmxSZXF1ZXN0XG5cbi19XG5cbmltcG9ydCBCcm93c2VyLk5hdmlnYXRpb24gYXMgTmF2aWdhdGlvblxuaW1wb3J0IERpY3RcbmltcG9ydCBHcmVuLktlcm5lbC5Ccm93c2VyXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoSHRtbClcbmltcG9ydCBVcmxcblxuXG5cbi0tIFNBTkRCT1hcblxuXG57LXwgQ3JlYXRlIGEg4oCcc2FuZGJveGVk4oCdIHByb2dyYW0gdGhhdCBjYW5ub3QgY29tbXVuaWNhdGUgd2l0aCB0aGUgb3V0c2lkZVxud29ybGQuXG5cblRoaXMgaXMgZ3JlYXQgZm9yIGxlYXJuaW5nIHRoZSBiYXNpY3Mgb2YgW1RoZSBFbG0gQXJjaGl0ZWN0dXJlXVt0ZWFdLCB3aGljaCBHcmVuXG51c2VzIGZvciBzdHJ1Y3R1cmluZyBhcHBsaWNhdGlvbnMuIFlvdSBjYW4gc2VlIHNhbmRib3hlcyBpbiBhY3Rpb24gaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlczpcblxuICAtIFtCdXR0b25zXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvYnV0dG9ucy5odG1sKVxuICAtIFtUZXh0IEZpZWxkc10oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL3RleHRfZmllbGRzLmh0bWwpXG4gIC0gW0Zvcm1zXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvZm9ybXMuaHRtbClcblxuW3RlYV06IGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS9cblxuLX1cbnNhbmRib3ggOlxuICAgIHsgaW5pdCA6IG1vZGVsXG4gICAgLCB2aWV3IDogbW9kZWwgLT4gSHRtbCBtc2dcbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiBtb2RlbFxuICAgIH1cbiAgICAtPiBQcm9ncmFtIHt9IG1vZGVsIG1zZ1xuc2FuZGJveCBpbXBsID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmVsZW1lbnRcbiAgICAgICAgeyBpbml0ID0gXFx7fSAtPiB7IG1vZGVsID0gaW1wbC5pbml0LCBjb21tYW5kID0gQ21kLm5vbmUgfVxuICAgICAgICAsIHZpZXcgPSBpbXBsLnZpZXdcbiAgICAgICAgLCB1cGRhdGUgPSBcXG1zZyBtb2RlbCAtPiB7IG1vZGVsID0gaW1wbC51cGRhdGUgbXNnIG1vZGVsLCBjb21tYW5kID0gQ21kLm5vbmUgfVxuICAgICAgICAsIHN1YnNjcmlwdGlvbnMgPSBcXF8gLT4gU3ViLm5vbmVcbiAgICAgICAgfVxuXG5cblxuLS0gRUxFTUVOVFxuXG5cbnstfCBDcmVhdGUgYW4gSFRNTCBlbGVtZW50IG1hbmFnZWQgYnkgR3Jlbi4gVGhlIHJlc3VsdGluZyBlbGVtZW50cyBhcmUgZWFzeSB0b1xuZW1iZWQgaW4gbGFyZ2VyIEphdmFTY3JpcHQgcHJvamVjdHMsIGFuZCBsb3RzIG9mIGNvbXBhbmllcyB0aGF0IHVzZSBHcmVuXG5zdGFydGVkIHdpdGggdGhpcyBhcHByb2FjaCEgVHJ5IGl0IG91dCBvbiBzb21ldGhpbmcgc21hbGwuIElmIGl0IHdvcmtzLCBncmVhdCxcbmRvIG1vcmUhIElmIG5vdCwgcmV2ZXJ0LCBubyBiaWcgZGVhbC5cblxuVW5saWtlIGEgW2BzYW5kYm94YF0oI3NhbmRib3gpLCBhbiBgZWxlbWVudGAgY2FuIHRhbGsgdG8gdGhlIG91dHNpZGUgd29ybGQgaW5cbmEgY291cGxlIHdheXM6XG5cbiAgLSBgQ21kYCAmbWRhc2g7IHlvdSBjYW4g4oCcY29tbWFuZOKAnSB0aGUgR3JlbiBydW50aW1lIHRvIGRvIHN0dWZmLCBsaWtlIEhUVFAuXG4gIC0gYFN1YmAgJm1kYXNoOyB5b3UgY2FuIOKAnHN1YnNjcmliZeKAnSB0byBldmVudCBzb3VyY2VzLCBsaWtlIGNsb2NrIHRpY2tzLlxuICAtIGBmbGFnc2AgJm1kYXNoOyBKYXZhU2NyaXB0IGNhbiBwYXNzIGluIGRhdGEgd2hlbiBzdGFydGluZyB0aGUgR3JlbiBwcm9ncmFtXG4gIC0gYHBvcnRzYCAmbWRhc2g7IHNldCB1cCBhIGNsaWVudC1zZXJ2ZXIgcmVsYXRpb25zaGlwIHdpdGggSmF2YVNjcmlwdFxuXG5BcyB5b3UgcmVhZCBbdGhlIGd1aWRlXVtndWlkZV0geW91IHdpbGwgcnVuIGludG8gYSBidW5jaCBvZiBleGFtcGxlcyBvZiBgZWxlbWVudGBcbmluIFt0aGlzIHNlY3Rpb25dW2Z4XS4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGZsYWdzIGFuZCBwb3J0cyBpbiBbdGhlIGludGVyb3BcbnNlY3Rpb25dW2ludGVyb3BdLlxuXG5bZ3VpZGVdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvXG5bZnhdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvZWZmZWN0cy9cbltpbnRlcm9wXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2ludGVyb3AvXG5cbi19XG5lbGVtZW50IDpcbiAgICB7IGluaXQgOiBmbGFncyAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHZpZXcgOiBtb2RlbCAtPiBIdG1sIG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbmVsZW1lbnQgPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuZWxlbWVudFxuXG5cblxuLS0gRE9DVU1FTlRcblxuXG57LXwgQ3JlYXRlIGFuIEhUTUwgZG9jdW1lbnQgbWFuYWdlZCBieSBHcmVuLiBUaGlzIGV4cGFuZHMgdXBvbiB3aGF0IGBlbGVtZW50YFxuY2FuIGRvIGluIHRoYXQgYHZpZXdgIG5vdyBnaXZlcyB5b3UgY29udHJvbCBvdmVyIHRoZSBgPHRpdGxlPmAgYW5kIGA8Ym9keT5gLlxuLX1cbmRvY3VtZW50IDpcbiAgICB7IGluaXQgOiBmbGFncyAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHZpZXcgOiBtb2RlbCAtPiBEb2N1bWVudCBtc2dcbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHN1YnNjcmlwdGlvbnMgOiBtb2RlbCAtPiBTdWIgbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG5kb2N1bWVudCA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5kb2N1bWVudFxuXG5cbnstfCBUaGlzIGRhdGEgc3BlY2lmaWVzIHRoZSBgPHRpdGxlPmAgYW5kIGFsbCBvZiB0aGUgbm9kZXMgdGhhdCBzaG91bGQgZ28gaW5cbnRoZSBgPGJvZHk+YC4gVGhpcyBtZWFucyB5b3UgY2FuIHVwZGF0ZSB0aGUgdGl0bGUgYXMgeW91ciBhcHBsaWNhdGlvbiBjaGFuZ2VzLlxuTWF5YmUgeW91ciBcInNpbmdsZS1wYWdlIGFwcFwiIG5hdmlnYXRlcyB0byBhIFwiZGlmZmVyZW50IHBhZ2VcIiwgbWF5YmUgYSBjYWxlbmRhclxuYXBwIHNob3dzIGFuIGFjY3VyYXRlIGRhdGUgaW4gdGhlIHRpdGxlLCBldGMuXG5cbj4gKipOb3RlIGFib3V0IENTUzoqKiBUaGlzIGxvb2tzIHNpbWlsYXIgdG8gYW4gYDxodG1sPmAgZG9jdW1lbnQsIGJ1dCB0aGlzIGlzXG4+IG5vdCB0aGUgcGxhY2UgdG8gbWFuYWdlIENTUyBhc3NldHMuIElmIHlvdSB3YW50IHRvIHdvcmsgd2l0aCBDU1MsIHRoZXJlIGFyZVxuPiBhIGNvdXBsZSB3YXlzOlxuPlxuPiAxLiAgUGFja2FnZXMgbGlrZSBbYHJ0ZmVsZG1hbi9lbG0tY3NzYF1bZWxtLWNzc10gZ2l2ZSBhbGwgb2YgdGhlIGZlYXR1cmVzXG4+ICAgICBvZiBDU1Mgd2l0aG91dCBhbnkgQ1NTIGZpbGVzLiBZb3UgY2FuIGFkZCBhbGwgdGhlIHN0eWxlcyB5b3UgbmVlZCBpbiB5b3VyXG4+ICAgICBgdmlld2AgZnVuY3Rpb24sIGFuZCB0aGVyZSBpcyBubyBuZWVkIHRvIHdvcnJ5IGFib3V0IGNsYXNzIG5hbWVzIG1hdGNoaW5nLlxuPlxuPiAyLiAgQ29tcGlsZSB5b3VyIEdyZW4gY29kZSB0byBKYXZhU2NyaXB0IHdpdGggYGdyZW4gbWFrZSAtLW91dHB1dD1ncmVuLmpzYCBhbmRcbj4gICAgIHRoZW4gbWFrZSB5b3VyIG93biBIVE1MIGZpbGUgdGhhdCBsb2FkcyBgZ3Jlbi5qc2AgYW5kIHRoZSBDU1MgZmlsZSB5b3Ugd2FudC5cbj4gICAgIFdpdGggdGhpcyBhcHByb2FjaCwgaXQgZG9lcyBub3QgbWF0dGVyIHdoZXJlIHRoZSBDU1MgY29tZXMgZnJvbS4gV3JpdGUgaXRcbj4gICAgIGJ5IGhhbmQuIEdlbmVyYXRlIGl0LiBXaGF0ZXZlciB5b3Ugd2FudCB0byBkby5cbj5cbj4gMy4gIElmIHlvdSBuZWVkIHRvIGNoYW5nZSBgPGxpbms+YCB0YWdzIGR5bmFtaWNhbGx5LCB5b3UgY2FuIHNlbmQgbWVzc2FnZXNcbj4gICAgIG91dCBhIHBvcnQgdG8gZG8gaXQgaW4gSmF2YVNjcmlwdC5cbj5cbj4gVGhlIGJpZ2dlciBwb2ludCBoZXJlIGlzIHRoYXQgbG9hZGluZyBhc3NldHMgaW52b2x2ZXMgdG91Y2hpbmcgdGhlIGA8aGVhZD5gXG4+IGFzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbCBvZiBicm93c2VycywgYnV0IHRoYXQgZG9lcyBub3QgbWVhbiBpdCBzaG91bGQgYmVcbj4gdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBgdmlld2AgZnVuY3Rpb24gaW4gR3Jlbi4gU28gd2UgZG8gaXQgZGlmZmVyZW50bHkhXG5cbltlbG0tY3NzXTogL3BhY2thZ2VzL3J0ZmVsZG1hbi9lbG0tY3NzL2xhdGVzdC9cblxuLX1cbnR5cGUgYWxpYXMgRG9jdW1lbnQgbXNnID1cbiAgICB7IHRpdGxlIDogU3RyaW5nXG4gICAgLCBib2R5IDogQXJyYXkgKEh0bWwgbXNnKVxuICAgIH1cblxuXG5cbi0tIEFQUExJQ0FUSU9OXG5cblxuey18IENyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0aGF0IG1hbmFnZXMgW2BVcmxgXVt1cmxdIGNoYW5nZXMuXG5cbioqV2hlbiB0aGUgYXBwbGljYXRpb24gc3RhcnRzKiosIGBpbml0YCBnZXRzIHRoZSBpbml0aWFsIGBVcmxgLiBZb3UgY2FuIHNob3dcbmRpZmZlcmVudCB0aGluZ3MgZGVwZW5kaW5nIG9uIHRoZSBgVXJsYCFcblxuKipXaGVuIHNvbWVvbmUgY2xpY2tzIGEgbGluayoqLCBsaWtlIGA8YSBocmVmPVwiL2hvbWVcIj5Ib21lPC9hPmAsIGl0IGFsd2F5cyBnb2VzXG50aHJvdWdoIGBvblVybFJlcXVlc3RgLiBUaGUgcmVzdWx0aW5nIG1lc3NhZ2UgZ29lcyB0byB5b3VyIGB1cGRhdGVgIGZ1bmN0aW9uLFxuZ2l2aW5nIHlvdSBhIGNoYW5jZSB0byBzYXZlIHNjcm9sbCBwb3NpdGlvbiBvciBwZXJzaXN0IGRhdGEgYmVmb3JlIGNoYW5naW5nXG50aGUgVVJMIHlvdXJzZWxmIHdpdGggW2BwdXNoVXJsYF1bYm5wXSBvciBbYGxvYWRgXVtibmxdLiBNb3JlIGluZm8gb24gdGhpcyBpblxudGhlIFtgVXJsUmVxdWVzdGBdKCNVcmxSZXF1ZXN0KSBkb2NzIVxuXG4qKldoZW4gdGhlIFVSTCBjaGFuZ2VzKiosIHRoZSBuZXcgYFVybGAgZ29lcyB0aHJvdWdoIGBvblVybENoYW5nZWAuIFRoZVxucmVzdWx0aW5nIG1lc3NhZ2UgZ29lcyB0byBgdXBkYXRlYCB3aGVyZSB5b3UgY2FuIGRlY2lkZSB3aGF0IHRvIHNob3cgbmV4dC5cblxuQXBwbGljYXRpb25zIGFsd2F5cyB1c2UgdGhlIFtgQnJvd3Nlci5OYXZpZ2F0aW9uYF1bYm5dIG1vZHVsZSBmb3IgcHJlY2lzZVxuY29udHJvbCBvdmVyIGBVcmxgIGNoYW5nZXMuXG5cbioqTW9yZSBJbmZvOioqIEhlcmUgYXJlIHNvbWUgZXhhbXBsZSB1c2FnZXMgb2YgYGFwcGxpY2F0aW9uYCBwcm9ncmFtczpcblxuICAtIFtSZWFsV29ybGQgZXhhbXBsZSBhcHBdKGh0dHBzOi8vZ2l0aHViLmNvbS9ydGZlbGRtYW4vZWxtLXNwYS1leGFtcGxlKVxuICAtIFtHcmVu4oCZcyBwYWNrYWdlIHdlYnNpdGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vcGFja2FnZS5ncmVuLWxhbmcub3JnKVxuXG5UaGVzZSBhcmUgcXVpdGUgYWR2YW5jZWQgR3JlbiBwcm9ncmFtcywgc28gYmUgc3VyZSB0byBnbyB0aHJvdWdoIFt0aGUgZ3VpZGVdW2ddXG5maXJzdCB0byBnZXQgYSBzb2xpZCBjb25jZXB0dWFsIGZvdW5kYXRpb24gYmVmb3JlIGRpdmluZyBpbiEgSWYgeW91IHN0YXJ0XG5yZWFkaW5nIGEgY2FsY3VsdXMgYm9vayBmcm9tIHBhZ2UgMzE0LCBpdCBtaWdodCBzZWVtIGNvbmZ1c2luZy4gU2FtZSBoZXJlIVxuXG4qKk5vdGU6KiogQ2FuIGFuIFtgZWxlbWVudGBdKCNlbGVtZW50KSBtYW5hZ2UgdGhlIFVSTCB0b28/IFJlYWQgW3RoaXNdIVxuXG5bZ106IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9cbltibl06IEJyb3dzZXIuTmF2aWdhdGlvblxuW2JucF06IEJyb3dzZXIuTmF2aWdhdGlvbiNwdXNoVXJsXG5bYm5sXTogQnJvd3Nlci5OYXZpZ2F0aW9uI2xvYWRcblt1cmxdOiAvcGFja2FnZS9ncmVuLWxhbmcvdXJsL2xhdGVzdC9tb2R1bGUvVXJsI1VybFxuW3RoaXNdOiBodHRwczovL2dpdGh1Yi5jb20vZ3Jlbi1sYW5nL2Jyb3dzZXIvYmxvYi8xLjAuMi9ub3Rlcy9uYXZpZ2F0aW9uLWluLWVsZW1lbnRzLm1kXG5cbi19XG5hcHBsaWNhdGlvbiA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4gVXJsLlVybCAtPiBOYXZpZ2F0aW9uLktleSAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHZpZXcgOiBtb2RlbCAtPiBEb2N1bWVudCBtc2dcbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHN1YnNjcmlwdGlvbnMgOiBtb2RlbCAtPiBTdWIgbXNnXG4gICAgLCBvblVybFJlcXVlc3QgOiBVcmxSZXF1ZXN0IC0+IG1zZ1xuICAgICwgb25VcmxDaGFuZ2UgOiBVcmwuVXJsIC0+IG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuYXBwbGljYXRpb24gPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuYXBwbGljYXRpb25cblxuXG57LXwgQWxsIGxpbmtzIGluIGFuIFtgYXBwbGljYXRpb25gXSgjYXBwbGljYXRpb24pIGNyZWF0ZSBhIGBVcmxSZXF1ZXN0YC4gU29cbndoZW4geW91IGNsaWNrIGA8YSBocmVmPVwiL2hvbWVcIj5Ib21lPC9hPmAsIGl0IGRvZXMgbm90IGp1c3QgbmF2aWdhdGUhIEl0XG5ub3RpZmllcyBgb25VcmxSZXF1ZXN0YCB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGNoYW5nZSB0aGUgYFVybGAuXG5cblxuIyMjIGBJbnRlcm5hbGAgdnMgYEV4dGVybmFsYFxuXG5JbWFnaW5lIHdlIGFyZSBicm93c2luZyBgaHR0cHM6Ly9leGFtcGxlLmNvbWAuIEFuIGBJbnRlcm5hbGAgbGluayB3b3VsZCBiZVxubGlrZTpcblxuICAtIGBzZXR0aW5ncyNwcml2YWN5YFxuICAtIGAvaG9tZWBcbiAgLSBgaHR0cHM6Ly9leGFtcGxlLmNvbS9ob21lYFxuICAtIGAvL2V4YW1wbGUuY29tL2hvbWVgXG5cbkFsbCBvZiB0aGVzZSBsaW5rcyBleGlzdCB1bmRlciB0aGUgYGh0dHBzOi8vZXhhbXBsZS5jb21gIGRvbWFpbi4gQW4gYEV4dGVybmFsYFxubGluayB3b3VsZCBiZSBsaWtlOlxuXG4gIC0gYGh0dHBzOi8vZ3Jlbi1sYW5nLm9yZy9leGFtcGxlc2BcbiAgLSBgaHR0cHM6Ly9vdGhlci5leGFtcGxlLmNvbS9ob21lYFxuICAtIGBodHRwOi8vZXhhbXBsZS5jb20vaG9tZWBcblxuQW55dGhpbmcgdGhhdCBjaGFuZ2VzIHRoZSBkb21haW4uIE5vdGljZSB0aGF0IGNoYW5naW5nIHRoZSBwcm90b2NvbCBmcm9tXG5gaHR0cHNgIHRvIGBodHRwYCBpcyBjb25zaWRlcmVkIGEgZGlmZmVyZW50IGRvbWFpbiEgKEFuZCB2aWNlIHZlcnNhISlcblxuXG4jIyMgUHVycG9zZVxuXG5IYXZpbmcgYSBgVXJsUmVxdWVzdGAgcmVxdWlyZXMgYSBjYXNlIGluIHlvdXIgYHVwZGF0ZWAgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEJyb3dzZXIgZXhwb3NpbmcgKC4uKVxuICAgIGltcG9ydCBCcm93c2VyLk5hdmlnYXRpb24gYXMgTmF2XG4gICAgaW1wb3J0IFVybFxuXG4gICAgdHlwZSBNc2dcbiAgICAgICAgPSBDbGlja2VkTGluayBVcmxSZXF1ZXN0XG5cbiAgICB1cGRhdGUgOiBNc2cgLT4gTW9kZWwgLT4geyBtb2RlbCA6IE1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgdXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgICAgIGNhc2UgbXNnIG9mXG4gICAgICAgICAgICBDbGlja2VkTGluayB1cmxSZXF1ZXN0IC0+XG4gICAgICAgICAgICAgICAgY2FzZSB1cmxSZXF1ZXN0IG9mXG4gICAgICAgICAgICAgICAgICAgIEludGVybmFsIHVybCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlbCA9IG1vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGNvbW1hbmQgPSBOYXYucHVzaFVybCBtb2RlbC5rZXkgKFVybC50b1N0cmluZyB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWwgdXJsIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGVsID0gbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICwgY29tbWFuZCA9IE5hdi5sb2FkIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5UaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIGl0IGdpdmVzIHlvdSBhIGNoYW5jZSB0byBjdXN0b21pemUgdGhlIGJlaGF2aW9yIGluIGVhY2hcbmNhc2UuIE1heWJlIG9uIHNvbWUgYEludGVybmFsYCBsaW5rcyB5b3Ugc2F2ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIHdpdGhcbltgQnJvd3Nlci5Eb20uZ2V0Vmlld3BvcnRgXShCcm93c2VyLkRvbSNnZXRWaWV3cG9ydCkgc28geW91IGNhbiByZXN0b3JlIGl0XG5sYXRlci4gTWF5YmUgb24gYEV4dGVybmFsYCBsaW5rcyB5b3UgcGVyc2lzdCBwYXJ0cyBvZiB0aGUgYE1vZGVsYCBvbiB5b3VyXG5zZXJ2ZXJzIGJlZm9yZSBsZWF2aW5nLiBXaGF0ZXZlciB5b3UgbmVlZCB0byBkbyFcblxuKipOb3RlOioqIEtub3dpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgZW5vdWdoIHRvIHJlc3RvcmUgaXQhIFdoYXQgaWYgdGhlXG5icm93c2VyIGRpbWVuc2lvbnMgY2hhbmdlPyBUaGUgc2Nyb2xsIHBvc2l0aW9uIHdpbGwgbm90IGNvcnJlbGF0ZSB3aXRoXG4mbGRxdW87d2hhdCB3YXMgb24gc2NyZWVuJnJkcXVvOyBhbnltb3JlLiBTbyBpdCBtYXkgYmUgYmV0dGVyIHRvIHJlbWVtYmVyXG4mbGRxdW87d2hhdCB3YXMgb24gc2NyZWVuJnJkcXVvOyBhbmQgcmVjcmVhdGUgdGhlIHBvc2l0aW9uIGJhc2VkIG9uIHRoYXQuIEZvclxuZXhhbXBsZSwgaW4gYSBXaWtpcGVkaWEgYXJ0aWNsZSwgcmVtZW1iZXIgdGhlIGhlYWRlciB0aGF0IHRoZXkgd2VyZSBsb29raW5nIGF0XG5tb3N0IHJlY2VudGx5LiBbYEJyb3dzZXIuRG9tLmdldEVsZW1lbnRgXShCcm93c2VyLkRvbSNnZXRFbGVtZW50KSBpcyBkZXNpZ25lZFxuZm9yIGZpZ3VyaW5nIHRoYXQgb3V0IVxuXG4tfVxudHlwZSBVcmxSZXF1ZXN0XG4gICAgPSBJbnRlcm5hbCBVcmwuVXJsXG4gICAgfCBFeHRlcm5hbCBTdHJpbmdcbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sIGV4cG9zaW5nXG4gICggSHRtbCwgQXR0cmlidXRlXG4gICwgdGV4dCwgbm9kZSwgbWFwXG4gICwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxuICAsIGRpdiwgcCwgaHIsIHByZSwgYmxvY2txdW90ZVxuICAsIHNwYW4sIGEsIGNvZGUsIGVtLCBzdHJvbmcsIGksIGIsIHUsIHN1Yiwgc3VwLCBiclxuICAsIG9sLCB1bCwgbGksIGRsLCBkdCwgZGRcbiAgLCBpbWcsIGlmcmFtZSwgY2FudmFzLCBtYXRoXG4gICwgZm9ybSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCwgb3B0aW9uXG4gICwgc2VjdGlvbiwgbmF2LCBhcnRpY2xlLCBhc2lkZSwgaGVhZGVyLCBmb290ZXIsIGFkZHJlc3MsIG1haW5fXG4gICwgZmlndXJlLCBmaWdjYXB0aW9uXG4gICwgdGFibGUsIGNhcHRpb24sIGNvbGdyb3VwLCBjb2wsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRyLCB0ZCwgdGhcbiAgLCBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgZGF0YWxpc3QsIG9wdGdyb3VwLCBvdXRwdXQsIHByb2dyZXNzLCBtZXRlclxuICAsIGF1ZGlvLCB2aWRlbywgc291cmNlLCB0cmFja1xuICAsIGVtYmVkLCBvYmplY3QsIHBhcmFtXG4gICwgaW5zLCBkZWxcbiAgLCBzbWFsbCwgY2l0ZSwgZGZuLCBhYmJyLCB0aW1lLCB2YXIsIHNhbXAsIGtiZCwgcywgcVxuICAsIG1hcmssIHJ1YnksIHJ0LCBycCwgYmRpLCBiZG8sIHdiclxuICAsIGRldGFpbHMsIHN1bW1hcnksIG1lbnVpdGVtLCBtZW51XG4gIClcblxuey18IFRoaXMgZmlsZSBpcyBvcmdhbml6ZWQgcm91Z2hseSBpbiBvcmRlciBvZiBwb3B1bGFyaXR5LiBUaGUgdGFncyB3aGljaCB5b3UnZFxuZXhwZWN0IHRvIHVzZSBmcmVxdWVudGx5IHdpbGwgYmUgY2xvc2VyIHRvIHRoZSB0b3AuXG5cbkBkb2NzIEh0bWwsIEF0dHJpYnV0ZSwgdGV4dCwgbm9kZSwgbWFwXG5cbiMjIEhlYWRlcnNcbkBkb2NzIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcblxuIyMgR3JvdXBpbmcgQ29udGVudFxuQGRvY3MgZGl2LCBwLCBociwgcHJlLCBibG9ja3F1b3RlXG5cbiMjIFRleHRcbkBkb2NzIHNwYW4sIGEsIGNvZGUsIGVtLCBzdHJvbmcsIGksIGIsIHUsIHN1Yiwgc3VwLCBiclxuXG4jIyBMaXN0c1xuQGRvY3Mgb2wsIHVsLCBsaSwgZGwsIGR0LCBkZFxuXG4jIyBFbWJlZGRlZCBDb250ZW50XG5AZG9jcyBpbWcsIGlmcmFtZSwgY2FudmFzLCBtYXRoXG5cbiMjIElucHV0c1xuQGRvY3MgZm9ybSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCwgb3B0aW9uXG5cbiMjIFNlY3Rpb25zXG5AZG9jcyBzZWN0aW9uLCBuYXYsIGFydGljbGUsIGFzaWRlLCBoZWFkZXIsIGZvb3RlciwgYWRkcmVzcywgbWFpbl9cblxuIyMgRmlndXJlc1xuQGRvY3MgZmlndXJlLCBmaWdjYXB0aW9uXG5cbiMjIFRhYmxlc1xuQGRvY3MgdGFibGUsIGNhcHRpb24sIGNvbGdyb3VwLCBjb2wsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRyLCB0ZCwgdGhcblxuIyMgTGVzcyBDb21tb24gSW5wdXRzXG5AZG9jcyBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgZGF0YWxpc3QsIG9wdGdyb3VwLCBvdXRwdXQsIHByb2dyZXNzLCBtZXRlclxuXG4jIyBBdWRpbyBhbmQgVmlkZW9cbkBkb2NzIGF1ZGlvLCB2aWRlbywgc291cmNlLCB0cmFja1xuXG4jIyBFbWJlZGRlZCBPYmplY3RzXG5AZG9jcyBlbWJlZCwgb2JqZWN0LCBwYXJhbVxuXG4jIyBUZXh0IEVkaXRzXG5AZG9jcyBpbnMsIGRlbFxuXG4jIyBTZW1hbnRpYyBUZXh0XG5AZG9jcyBzbWFsbCwgY2l0ZSwgZGZuLCBhYmJyLCB0aW1lLCB2YXIsIHNhbXAsIGtiZCwgcywgcVxuXG4jIyBMZXNzIENvbW1vbiBUZXh0IFRhZ3NcbkBkb2NzIG1hcmssIHJ1YnksIHJ0LCBycCwgYmRpLCBiZG8sIHdiclxuXG4jIEludGVyYWN0aXZlIEVsZW1lbnRzXG5AZG9jcyBkZXRhaWxzLCBzdW1tYXJ5LCBtZW51aXRlbSwgbWVudVxuXG4tfVxuXG5cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuXG4tLSBDT1JFIFRZUEVTXG5cblxuey18IFRoZSBjb3JlIGJ1aWxkaW5nIGJsb2NrIHVzZWQgdG8gYnVpbGQgdXAgSFRNTC4gSGVyZSB3ZSBjcmVhdGUgYW4gYEh0bWxgXG52YWx1ZSB3aXRoIG5vIGF0dHJpYnV0ZXMgYW5kIG9uZSBjaGlsZDpcblxuICAgIGhlbGxvIDogSHRtbCBtc2dcbiAgICBoZWxsbyA9XG4gICAgICBkaXYgW10gWyB0ZXh0IFwiSGVsbG8hXCIgXVxuLX1cbnR5cGUgYWxpYXMgSHRtbCBtc2cgPSBWaXJ0dWFsRG9tLk5vZGUgbXNnXG5cblxuey18IFNldCBhdHRyaWJ1dGVzIG9uIHlvdXIgYEh0bWxgLiBMZWFybiBtb3JlIGluIHRoZVxuW2BIdG1sLkF0dHJpYnV0ZXNgXShIdG1sLUF0dHJpYnV0ZXMpIG1vZHVsZS5cbi19XG50eXBlIGFsaWFzIEF0dHJpYnV0ZSBtc2cgPSBWaXJ0dWFsRG9tLkF0dHJpYnV0ZSBtc2dcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgR2VuZXJhbCB3YXkgdG8gY3JlYXRlIEhUTUwgbm9kZXMuIEl0IGlzIHVzZWQgdG8gZGVmaW5lIGFsbCBvZiB0aGUgaGVscGVyXG5mdW5jdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LlxuXG4gICAgZGl2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbiAgICBkaXYgYXR0cmlidXRlcyBjaGlsZHJlbiA9XG4gICAgICAgIG5vZGUgXCJkaXZcIiBhdHRyaWJ1dGVzIGNoaWxkcmVuXG5cbllvdSBjYW4gdXNlIHRoaXMgdG8gY3JlYXRlIGN1c3RvbSBub2RlcyBpZiB5b3UgbmVlZCB0byBjcmVhdGUgc29tZXRoaW5nIHRoYXRcbmlzIG5vdCBjb3ZlcmVkIGJ5IHRoZSBoZWxwZXIgZnVuY3Rpb25zIGluIHRoaXMgbGlicmFyeS5cbi19XG5ub2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ub2RlID1cbiAgVmlydHVhbERvbS5ub2RlXG5cblxuey18IEp1c3QgcHV0IHBsYWluIHRleHQgaW4gdGhlIERPTS4gSXQgd2lsbCBlc2NhcGUgdGhlIHN0cmluZyBzbyB0aGF0IGl0IGFwcGVhcnNcbmV4YWN0bHkgYXMgeW91IHNwZWNpZnkuXG5cbiAgICB0ZXh0IFwiSGVsbG8gV29ybGQhXCJcbi19XG50ZXh0IDogU3RyaW5nIC0+IEh0bWwgbXNnXG50ZXh0ID1cbiAgVmlydHVhbERvbS50ZXh0XG5cblxuXG4tLSBORVNUSU5HIFZJRVdTXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgc29tZSBgSHRtbGAuIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSxcbndlIGhhdmUgYHZpZXdCdXR0b25gIHRoYXQgcHJvZHVjZXMgYCgpYCBtZXNzYWdlcywgYW5kIHdlIHRyYW5zZm9ybSB0aG9zZSB2YWx1ZXNcbmludG8gYE1zZ2AgdmFsdWVzIGluIGB2aWV3YC5cblxuICAgIHR5cGUgTXNnID0gTGVmdCB8IFJpZ2h0XG5cbiAgICB2aWV3IDogbW9kZWwgLT4gSHRtbCBNc2dcbiAgICB2aWV3IG1vZGVsID1cbiAgICAgIGRpdiBbXVxuICAgICAgICBbIG1hcCAoXFxfIC0+IExlZnQpICh2aWV3QnV0dG9uIFwiTGVmdFwiKVxuICAgICAgICAsIG1hcCAoXFxfIC0+IFJpZ2h0KSAodmlld0J1dHRvbiBcIlJpZ2h0XCIpXG4gICAgICAgIF1cblxuICAgIHZpZXdCdXR0b24gOiBTdHJpbmcgLT4gSHRtbCAoKVxuICAgIHZpZXdCdXR0b24gbmFtZSA9XG4gICAgICBidXR0b24gWyBvbkNsaWNrICgpIF0gWyB0ZXh0IG5hbWUgXVxuXG5JZiB5b3UgYXJlIGdyb3dpbmcgeW91ciBwcm9qZWN0IGFzIHJlY29tbWVuZGVkIGluIFt0aGUgb2ZmaWNpYWxcbmd1aWRlXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy8pLCB0aGlzIHNob3VsZCBub3QgY29tZSBpbiBoYW5keSBpbiBtb3N0XG5wcm9qZWN0cy4gVXN1YWxseSBpdCBpcyBlYXNpZXIgdG8ganVzdCBwYXNzIHRoaW5ncyBpbiBhcyBhcmd1bWVudHMuXG5cbioqTm90ZToqKiBTb21lIGZvbGtzIGhhdmUgdHJpZWQgdG8gdXNlIHRoaXMgdG8gbWFrZSDigJxjb21wb25lbnRz4oCdIGluIHRoZWlyXG5wcm9qZWN0cywgYnV0IHRoZXkgcnVuIGludG8gdGhlIGZhY3QgdGhhdCBjb21wb25lbnRzIGFyZSBvYmplY3RzLiBCb3RoIGFyZVxubG9jYWwgbXV0YWJsZSBzdGF0ZSB3aXRoIG1ldGhvZHMuIEdyZW4gaXMgbm90IGFuIG9iamVjdC1vcmllbnRlZCBsYW5ndWFnZSwgc29cbnlvdSBydW4gaW50byBhbGwgc29ydHMgb2YgZnJpY3Rpb24gaWYgeW91IHRyeSB0byB1c2UgaXQgbGlrZSBvbmUuIEkgZGVmaW5pdGVseVxucmVjb21tZW5kIGFnYWluc3QgZ29pbmcgZG93biB0aGF0IHBhdGghIEluc3RlYWQsIG1ha2UgdGhlIHNpbXBsZXN0IGZ1bmN0aW9uXG5wb3NzaWJsZSBhbmQgcmVwZWF0LlxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gSHRtbCBhIC0+IEh0bWwgbXNnXG5tYXAgPVxuICBWaXJ0dWFsRG9tLm1hcFxuXG5cblxuLS0gU0VDVElPTlNcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gaW4gYSBkb2N1bWVudC5cbi19XG5zZWN0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNlY3Rpb24gPVxuICBub2RlIFwic2VjdGlvblwiXG5cblxuey18IERlZmluZXMgYSBzZWN0aW9uIHRoYXQgY29udGFpbnMgb25seSBuYXZpZ2F0aW9uIGxpbmtzLlxuLX1cbm5hdiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5uYXYgPVxuICBub2RlIFwibmF2XCJcblxuXG57LXwgRGVmaW5lcyBzZWxmLWNvbnRhaW5lZCBjb250ZW50IHRoYXQgY291bGQgZXhpc3QgaW5kZXBlbmRlbnRseSBvZiB0aGUgcmVzdFxub2YgdGhlIGNvbnRlbnQuXG4tfVxuYXJ0aWNsZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hcnRpY2xlID1cbiAgbm9kZSBcImFydGljbGVcIlxuXG5cbnstfCBEZWZpbmVzIHNvbWUgY29udGVudCBsb29zZWx5IHJlbGF0ZWQgdG8gdGhlIHBhZ2UgY29udGVudC4gSWYgaXQgaXMgcmVtb3ZlZCxcbnRoZSByZW1haW5pbmcgY29udGVudCBzdGlsbCBtYWtlcyBzZW5zZS5cbi19XG5hc2lkZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hc2lkZSA9XG4gIG5vZGUgXCJhc2lkZVwiXG5cblxuey18LX1cbmgxIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmgxID1cbiAgbm9kZSBcImgxXCJcblxuXG57LXwtfVxuaDIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDIgPVxuICBub2RlIFwiaDJcIlxuXG5cbnstfC19XG5oMyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oMyA9XG4gIG5vZGUgXCJoM1wiXG5cblxuey18LX1cbmg0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmg0ID1cbiAgbm9kZSBcImg0XCJcblxuXG57LXwtfVxuaDUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDUgPVxuICBub2RlIFwiaDVcIlxuXG5cbnstfC19XG5oNiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oNiA9XG4gIG5vZGUgXCJoNlwiXG5cblxuey18IERlZmluZXMgdGhlIGhlYWRlciBvZiBhIHBhZ2Ugb3Igc2VjdGlvbi4gSXQgb2Z0ZW4gY29udGFpbnMgYSBsb2dvLCB0aGVcbnRpdGxlIG9mIHRoZSB3ZWIgc2l0ZSwgYW5kIGEgbmF2aWdhdGlvbmFsIHRhYmxlIG9mIGNvbnRlbnQuXG4tfVxuaGVhZGVyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmhlYWRlciA9XG4gIG5vZGUgXCJoZWFkZXJcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBmb290ZXIgZm9yIGEgcGFnZSBvciBzZWN0aW9uLiBJdCBvZnRlbiBjb250YWlucyBhIGNvcHlyaWdodFxubm90aWNlLCBzb21lIGxpbmtzIHRvIGxlZ2FsIGluZm9ybWF0aW9uLCBvciBhZGRyZXNzZXMgdG8gZ2l2ZSBmZWVkYmFjay5cbi19XG5mb290ZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZm9vdGVyID1cbiAgbm9kZSBcImZvb3RlclwiXG5cblxuey18IERlZmluZXMgYSBzZWN0aW9uIGNvbnRhaW5pbmcgY29udGFjdCBpbmZvcm1hdGlvbi4gLX1cbmFkZHJlc3MgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYWRkcmVzcyA9XG4gIG5vZGUgXCJhZGRyZXNzXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWFpbiBvciBpbXBvcnRhbnQgY29udGVudCBpbiB0aGUgZG9jdW1lbnQuIFRoZXJlIGlzIG9ubHkgb25lXG5gbWFpbmAgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnQuXG4tfVxubWFpbl8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWFpbl8gPVxuICBub2RlIFwibWFpblwiXG5cblxuLS0gR1JPVVBJTkcgQ09OVEVOVFxuXG57LXwgRGVmaW5lcyBhIHBvcnRpb24gdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgcGFyYWdyYXBoLiAtfVxucCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wID1cbiAgbm9kZSBcInBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGhlbWF0aWMgYnJlYWsgYmV0d2VlbiBwYXJhZ3JhcGhzIG9mIGEgc2VjdGlvbiBvciBhcnRpY2xlIG9yXG5hbnkgbG9uZ2VyIGNvbnRlbnQuXG4tfVxuaHIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaHIgPVxuICBub2RlIFwiaHJcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCBpdHMgY29udGVudCBpcyBwcmVmb3JtYXR0ZWQgYW5kIHRoYXQgdGhpcyBmb3JtYXQgbXVzdCBiZVxucHJlc2VydmVkLlxuLX1cbnByZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wcmUgPVxuICBub2RlIFwicHJlXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbnRlbnQgdGhhdCBpcyBxdW90ZWQgZnJvbSBhbm90aGVyIHNvdXJjZS4gLX1cbmJsb2NrcXVvdGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmxvY2txdW90ZSA9XG4gIG5vZGUgXCJibG9ja3F1b3RlXCJcblxuXG57LXwgRGVmaW5lcyBhbiBvcmRlcmVkIGxpc3Qgb2YgaXRlbXMuIC19XG5vbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vbCA9XG4gIG5vZGUgXCJvbFwiXG5cblxuey18IERlZmluZXMgYW4gdW5vcmRlcmVkIGxpc3Qgb2YgaXRlbXMuIC19XG51bCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG51bCA9XG4gIG5vZGUgXCJ1bFwiXG5cblxuey18IERlZmluZXMgYSBpdGVtIG9mIGFuIGVudW1lcmF0aW9uIGxpc3QuIC19XG5saSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5saSA9XG4gIG5vZGUgXCJsaVwiXG5cblxuey18IERlZmluZXMgYSBkZWZpbml0aW9uIGxpc3QsIHRoYXQgaXMsIGEgbGlzdCBvZiB0ZXJtcyBhbmQgdGhlaXIgYXNzb2NpYXRlZFxuZGVmaW5pdGlvbnMuXG4tfVxuZGwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGwgPVxuICBub2RlIFwiZGxcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGVybSBkZWZpbmVkIGJ5IHRoZSBuZXh0IGBkZGAuIC19XG5kdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kdCA9XG4gIG5vZGUgXCJkdFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGRlZmluaXRpb24gb2YgdGhlIHRlcm1zIGltbWVkaWF0ZWx5IGxpc3RlZCBiZWZvcmUgaXQuIC19XG5kZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZCA9XG4gIG5vZGUgXCJkZFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBmaWd1cmUgaWxsdXN0cmF0ZWQgYXMgcGFydCBvZiB0aGUgZG9jdW1lbnQuIC19XG5maWd1cmUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmlndXJlID1cbiAgbm9kZSBcImZpZ3VyZVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGxlZ2VuZCBvZiBhIGZpZ3VyZS4gLX1cbmZpZ2NhcHRpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmlnY2FwdGlvbiA9XG4gIG5vZGUgXCJmaWdjYXB0aW9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGdlbmVyaWMgY29udGFpbmVyIHdpdGggbm8gc3BlY2lhbCBtZWFuaW5nLiAtfVxuZGl2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRpdiA9XG4gIG5vZGUgXCJkaXZcIlxuXG5cbi0tIFRFWFQgTEVWRUwgU0VNQU5USUNcblxuey18IFJlcHJlc2VudHMgYSBoeXBlcmxpbmssIGxpbmtpbmcgdG8gYW5vdGhlciByZXNvdXJjZS4gLX1cbmEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYSA9XG4gIG5vZGUgXCJhXCJcblxuXG57LXwgUmVwcmVzZW50cyBlbXBoYXNpemVkIHRleHQsIGxpa2UgYSBzdHJlc3MgYWNjZW50LiAtfVxuZW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZW0gPVxuICBub2RlIFwiZW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGVzcGVjaWFsbHkgaW1wb3J0YW50IHRleHQuIC19XG5zdHJvbmcgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3Ryb25nID1cbiAgbm9kZSBcInN0cm9uZ1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzaWRlIGNvbW1lbnQsIHRoYXQgaXMsIHRleHQgbGlrZSBhIGRpc2NsYWltZXIgb3IgYVxuY29weXJpZ2h0LCB3aGljaCBpcyBub3QgZXNzZW50aWFsIHRvIHRoZSBjb21wcmVoZW5zaW9uIG9mIHRoZSBkb2N1bWVudC5cbi19XG5zbWFsbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zbWFsbCA9XG4gIG5vZGUgXCJzbWFsbFwiXG5cblxuey18IFJlcHJlc2VudHMgY29udGVudCB0aGF0IGlzIG5vIGxvbmdlciBhY2N1cmF0ZSBvciByZWxldmFudC4gLX1cbnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucyA9XG4gIG5vZGUgXCJzXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgdGl0bGUgb2YgYSB3b3JrLiAtfVxuY2l0ZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jaXRlID1cbiAgbm9kZSBcImNpdGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGlubGluZSBxdW90YXRpb24uIC19XG5xIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnEgPVxuICBub2RlIFwicVwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0ZXJtIHdob3NlIGRlZmluaXRpb24gaXMgY29udGFpbmVkIGluIGl0cyBuZWFyZXN0IGFuY2VzdG9yXG5jb250ZW50LlxuLX1cbmRmbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZm4gPVxuICBub2RlIFwiZGZuXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBhYmJyZXZpYXRpb24gb3IgYW4gYWNyb255bTsgdGhlIGV4cGFuc2lvbiBvZiB0aGVcbmFiYnJldmlhdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgaW4gdGhlIHRpdGxlIGF0dHJpYnV0ZS5cbi19XG5hYmJyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFiYnIgPVxuICBub2RlIFwiYWJiclwiXG5cblxuey18IFJlcHJlc2VudHMgYSBkYXRlIGFuZCB0aW1lIHZhbHVlOyB0aGUgbWFjaGluZS1yZWFkYWJsZSBlcXVpdmFsZW50IGNhbiBiZVxucmVwcmVzZW50ZWQgaW4gdGhlIGRhdGV0aW1lIGF0dHJpYnV0ZS5cbi19XG50aW1lIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRpbWUgPVxuICBub2RlIFwidGltZVwiXG5cblxuey18IFJlcHJlc2VudHMgY29tcHV0ZXIgY29kZS4gLX1cbmNvZGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29kZSA9XG4gIG5vZGUgXCJjb2RlXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHZhcmlhYmxlLiBTcGVjaWZpYyBjYXNlcyB3aGVyZSBpdCBzaG91bGQgYmUgdXNlZCBpbmNsdWRlIGFuXG5hY3R1YWwgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb24gb3IgcHJvZ3JhbW1pbmcgY29udGV4dCwgYW4gaWRlbnRpZmllclxucmVwcmVzZW50aW5nIGEgY29uc3RhbnQsIGEgc3ltYm9sIGlkZW50aWZ5aW5nIGEgcGh5c2ljYWwgcXVhbnRpdHksIGEgZnVuY3Rpb25cbnBhcmFtZXRlciwgb3IgYSBtZXJlIHBsYWNlaG9sZGVyIGluIHByb3NlLlxuLX1cbnZhciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG52YXIgPVxuICBub2RlIFwidmFyXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgb3V0cHV0IG9mIGEgcHJvZ3JhbSBvciBhIGNvbXB1dGVyLiAtfVxuc2FtcCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zYW1wID1cbiAgbm9kZSBcInNhbXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIHVzZXIgaW5wdXQsIG9mdGVuIGZyb20gdGhlIGtleWJvYXJkLCBidXQgbm90IG5lY2Vzc2FyaWx5OyBpdFxubWF5IHJlcHJlc2VudCBvdGhlciBpbnB1dCwgbGlrZSB0cmFuc2NyaWJlZCB2b2ljZSBjb21tYW5kcy5cbi19XG5rYmQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xua2JkID1cbiAgbm9kZSBcImtiZFwiXG5cblxuey18IFJlcHJlc2VudCBhIHN1YnNjcmlwdC4gLX1cbnN1YiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdWIgPVxuICBub2RlIFwic3ViXCJcblxuXG57LXwgUmVwcmVzZW50IGEgc3VwZXJzY3JpcHQuIC19XG5zdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3VwID1cbiAgbm9kZSBcInN1cFwiXG5cblxuey18IFJlcHJlc2VudHMgc29tZSB0ZXh0IGluIGFuIGFsdGVybmF0ZSB2b2ljZSBvciBtb29kLCBvciBhdCBsZWFzdCBvZlxuZGlmZmVyZW50IHF1YWxpdHksIHN1Y2ggYXMgYSB0YXhvbm9taWMgZGVzaWduYXRpb24sIGEgdGVjaG5pY2FsIHRlcm0sIGFuXG5pZGlvbWF0aWMgcGhyYXNlLCBhIHRob3VnaHQsIG9yIGEgc2hpcCBuYW1lLlxuLX1cbmkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaSA9XG4gIG5vZGUgXCJpXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRleHQgd2hpY2ggdG8gd2hpY2ggYXR0ZW50aW9uIGlzIGRyYXduIGZvciB1dGlsaXRhcmlhblxucHVycG9zZXMuIEl0IGRvZXNuJ3QgY29udmV5IGV4dHJhIGltcG9ydGFuY2UgYW5kIGRvZXNuJ3QgaW1wbHkgYW4gYWx0ZXJuYXRlXG52b2ljZS5cbi19XG5iIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmIgPVxuICBub2RlIFwiYlwiXG5cblxuey18IFJlcHJlc2VudHMgYSBub24tdGV4dHVhbCBhbm5vdGF0aW9uIGZvciB3aGljaCB0aGUgY29udmVudGlvbmFsXG5wcmVzZW50YXRpb24gaXMgdW5kZXJsaW5pbmcsIHN1Y2ggbGFiZWxpbmcgdGhlIHRleHQgYXMgYmVpbmcgbWlzc3BlbHQgb3JcbmxhYmVsaW5nIGEgcHJvcGVyIG5hbWUgaW4gQ2hpbmVzZSB0ZXh0LlxuLX1cbnUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudSA9XG4gIG5vZGUgXCJ1XCJcblxuXG57LXwgUmVwcmVzZW50cyB0ZXh0IGhpZ2hsaWdodGVkIGZvciByZWZlcmVuY2UgcHVycG9zZXMsIHRoYXQgaXMgZm9yIGl0c1xucmVsZXZhbmNlIGluIGFub3RoZXIgY29udGV4dC5cbi19XG5tYXJrIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1hcmsgPVxuICBub2RlIFwibWFya1wiXG5cblxuey18IFJlcHJlc2VudHMgY29udGVudCB0byBiZSBtYXJrZWQgd2l0aCBydWJ5IGFubm90YXRpb25zLCBzaG9ydCBydW5zIG9mIHRleHRcbnByZXNlbnRlZCBhbG9uZ3NpZGUgdGhlIHRleHQuIFRoaXMgaXMgb2Z0ZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEVhc3QgQXNpYW5cbmxhbmd1YWdlIHdoZXJlIHRoZSBhbm5vdGF0aW9ucyBhY3QgYXMgYSBndWlkZSBmb3IgcHJvbnVuY2lhdGlvbiwgbGlrZSB0aGVcbkphcGFuZXNlIGZ1cmlnYW5hLlxuLX1cbnJ1YnkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnVieSA9XG4gIG5vZGUgXCJydWJ5XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgdGV4dCBvZiBhIHJ1YnkgYW5ub3RhdGlvbi4gLX1cbnJ0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnJ0ID1cbiAgbm9kZSBcInJ0XCJcblxuXG57LXwgUmVwcmVzZW50cyBwYXJlbnRoZXNpcyBhcm91bmQgYSBydWJ5IGFubm90YXRpb24sIHVzZWQgdG8gZGlzcGxheSB0aGVcbmFubm90YXRpb24gaW4gYW4gYWx0ZXJuYXRlIHdheSBieSBicm93c2VycyBub3Qgc3VwcG9ydGluZyB0aGUgc3RhbmRhcmQgZGlzcGxheVxuZm9yIGFubm90YXRpb25zLlxuLX1cbnJwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnJwID1cbiAgbm9kZSBcInJwXCJcblxuXG57LXwgUmVwcmVzZW50cyB0ZXh0IHRoYXQgbXVzdCBiZSBpc29sYXRlZCBmcm9tIGl0cyBzdXJyb3VuZGluZyBmb3JcbmJpZGlyZWN0aW9uYWwgdGV4dCBmb3JtYXR0aW5nLiBJdCBhbGxvd3MgZW1iZWRkaW5nIGEgc3BhbiBvZiB0ZXh0IHdpdGggYVxuZGlmZmVyZW50LCBvciB1bmtub3duLCBkaXJlY3Rpb25hbGl0eS5cbi19XG5iZGkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmRpID1cbiAgbm9kZSBcImJkaVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGRpcmVjdGlvbmFsaXR5IG9mIGl0cyBjaGlsZHJlbiwgaW4gb3JkZXIgdG8gZXhwbGljaXRseVxub3ZlcnJpZGUgdGhlIFVuaWNvZGUgYmlkaXJlY3Rpb25hbCBhbGdvcml0aG0uXG4tfVxuYmRvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJkbyA9XG4gIG5vZGUgXCJiZG9cIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgd2l0aCBubyBzcGVjaWZpYyBtZWFuaW5nLiBUaGlzIGhhcyB0byBiZSB1c2VkIHdoZW4gbm8gb3RoZXJcbnRleHQtc2VtYW50aWMgZWxlbWVudCBjb252ZXlzIGFuIGFkZXF1YXRlIG1lYW5pbmcsIHdoaWNoLCBpbiB0aGlzIGNhc2UsIGlzXG5vZnRlbiBicm91Z2h0IGJ5IGdsb2JhbCBhdHRyaWJ1dGVzIGxpa2UgYGNsYXNzYCwgYGxhbmdgLCBvciBgZGlyYC5cbi19XG5zcGFuIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNwYW4gPVxuICBub2RlIFwic3BhblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaW5lIGJyZWFrLiAtfVxuYnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYnIgPVxuICBub2RlIFwiYnJcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSwgdGhhdCBpcyBhIHN1Z2dlc3RlZCBwb2ludCBmb3JcbndyYXBwaW5nIHRleHQgaW4gb3JkZXIgdG8gaW1wcm92ZSByZWFkYWJpbGl0eSBvZiB0ZXh0IHNwbGl0IG9uIHNldmVyYWwgbGluZXMuXG4tfVxud2JyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbndiciA9XG4gIG5vZGUgXCJ3YnJcIlxuXG5cbi0tIEVESVRTXG5cbnstfCBEZWZpbmVzIGFuIGFkZGl0aW9uIHRvIHRoZSBkb2N1bWVudC4gLX1cbmlucyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbnMgPVxuICBub2RlIFwiaW5zXCJcblxuXG57LXwgRGVmaW5lcyBhIHJlbW92YWwgZnJvbSB0aGUgZG9jdW1lbnQuIC19XG5kZWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGVsID1cbiAgbm9kZSBcImRlbFwiXG5cblxuLS0gRU1CRURERUQgQ09OVEVOVFxuXG57LXwgUmVwcmVzZW50cyBhbiBpbWFnZS4gLX1cbmltZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbWcgPVxuICBub2RlIFwiaW1nXCJcblxuXG57LXwgRW1iZWRkZWQgYW4gSFRNTCBkb2N1bWVudC4gLX1cbmlmcmFtZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pZnJhbWUgPVxuICBub2RlIFwiaWZyYW1lXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGludGVncmF0aW9uIHBvaW50IGZvciBhbiBleHRlcm5hbCwgb2Z0ZW4gbm9uLUhUTUwsXG5hcHBsaWNhdGlvbiBvciBpbnRlcmFjdGl2ZSBjb250ZW50LlxuLX1cbmVtYmVkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmVtYmVkID1cbiAgbm9kZSBcImVtYmVkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBleHRlcm5hbCByZXNvdXJjZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBhbiBpbWFnZSwgYW4gSFRNTFxuc3ViLWRvY3VtZW50LCBvciBhbiBleHRlcm5hbCByZXNvdXJjZSB0byBiZSBwcm9jZXNzZWQgYnkgYSBwbHVnLWluLlxuLX1cbm9iamVjdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vYmplY3QgPVxuICBub2RlIFwib2JqZWN0XCJcblxuXG57LXwgRGVmaW5lcyBwYXJhbWV0ZXJzIGZvciB1c2UgYnkgcGx1Zy1pbnMgaW52b2tlZCBieSBgb2JqZWN0YCBlbGVtZW50cy4gLX1cbnBhcmFtIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnBhcmFtID1cbiAgbm9kZSBcInBhcmFtXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHZpZGVvLCB0aGUgYXNzb2NpYXRlZCBhdWRpbyBhbmQgY2FwdGlvbnMsIGFuZCBjb250cm9scy4gLX1cbnZpZGVvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnZpZGVvID1cbiAgbm9kZSBcInZpZGVvXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNvdW5kIG9yIGF1ZGlvIHN0cmVhbS4gLX1cbmF1ZGlvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmF1ZGlvID1cbiAgbm9kZSBcImF1ZGlvXCJcblxuXG57LXwgQWxsb3dzIGF1dGhvcnMgdG8gc3BlY2lmeSBhbHRlcm5hdGl2ZSBtZWRpYSByZXNvdXJjZXMgZm9yIG1lZGlhIGVsZW1lbnRzXG5saWtlIGB2aWRlb2Agb3IgYGF1ZGlvYC5cbi19XG5zb3VyY2UgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc291cmNlID1cbiAgbm9kZSBcInNvdXJjZVwiXG5cblxuey18IEFsbG93cyBhdXRob3JzIHRvIHNwZWNpZnkgdGltZWQgdGV4dCB0cmFjayBmb3IgbWVkaWEgZWxlbWVudHMgbGlrZSBgdmlkZW9gXG5vciBgYXVkaW9gLlxuLX1cbnRyYWNrIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRyYWNrID1cbiAgbm9kZSBcInRyYWNrXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGJpdG1hcCBhcmVhIGZvciBncmFwaGljcyByZW5kZXJpbmcuIC19XG5jYW52YXMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY2FudmFzID1cbiAgbm9kZSBcImNhbnZhc1wiXG5cblxuey18IERlZmluZXMgYSBtYXRoZW1hdGljYWwgZm9ybXVsYS4gLX1cbm1hdGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWF0aCA9XG4gIG5vZGUgXCJtYXRoXCJcblxuXG4tLSBUQUJVTEFSIERBVEFcblxuey18IFJlcHJlc2VudHMgZGF0YSB3aXRoIG1vcmUgdGhhbiBvbmUgZGltZW5zaW9uLiAtfVxudGFibGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGFibGUgPVxuICBub2RlIFwidGFibGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0aXRsZSBvZiBhIHRhYmxlLiAtfVxuY2FwdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jYXB0aW9uID1cbiAgbm9kZSBcImNhcHRpb25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIG9uZSBvciBtb3JlIGNvbHVtbnMgb2YgYSB0YWJsZS4gLX1cbmNvbGdyb3VwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNvbGdyb3VwID1cbiAgbm9kZSBcImNvbGdyb3VwXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbHVtbiBvZiBhIHRhYmxlLiAtfVxuY29sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNvbCA9XG4gIG5vZGUgXCJjb2xcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb25jcmV0ZSBkYXRhIG9mIGEgdGFibGUuXG4tfVxudGJvZHkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGJvZHkgPVxuICBub2RlIFwidGJvZHlcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb2x1bW4gbGFiZWxzIG9mIGEgdGFibGUuXG4tfVxudGhlYWQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGhlYWQgPVxuICBub2RlIFwidGhlYWRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb2x1bW4gc3VtbWFyaWVzIG9mIGEgdGFibGUuXG4tfVxudGZvb3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGZvb3QgPVxuICBub2RlIFwidGZvb3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgcm93IG9mIGNlbGxzIGluIGEgdGFibGUuIC19XG50ciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50ciA9XG4gIG5vZGUgXCJ0clwiXG5cblxuey18IFJlcHJlc2VudHMgYSBkYXRhIGNlbGwgaW4gYSB0YWJsZS4gLX1cbnRkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRkID1cbiAgbm9kZSBcInRkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGhlYWRlciBjZWxsIGluIGEgdGFibGUuIC19XG50aCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50aCA9XG4gIG5vZGUgXCJ0aFwiXG5cblxuLS0gRk9STVNcblxuey18IFJlcHJlc2VudHMgYSBmb3JtLCBjb25zaXN0aW5nIG9mIGNvbnRyb2xzLCB0aGF0IGNhbiBiZSBzdWJtaXR0ZWQgdG8gYVxuc2VydmVyIGZvciBwcm9jZXNzaW5nLlxuLX1cbmZvcm0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZm9ybSA9XG4gIG5vZGUgXCJmb3JtXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBjb250cm9scy4gLX1cbmZpZWxkc2V0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZpZWxkc2V0ID1cbiAgbm9kZSBcImZpZWxkc2V0XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgY2FwdGlvbiBmb3IgYSBgZmllbGRzZXRgLiAtfVxubGVnZW5kIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmxlZ2VuZCA9XG4gIG5vZGUgXCJsZWdlbmRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjYXB0aW9uIG9mIGEgZm9ybSBjb250cm9sLiAtfVxubGFiZWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubGFiZWwgPVxuICBub2RlIFwibGFiZWxcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdHlwZWQgZGF0YSBmaWVsZCBhbGxvd2luZyB0aGUgdXNlciB0byBlZGl0IHRoZSBkYXRhLiAtfVxuaW5wdXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaW5wdXQgPVxuICBub2RlIFwiaW5wdXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgYnV0dG9uLiAtfVxuYnV0dG9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJ1dHRvbiA9XG4gIG5vZGUgXCJidXR0b25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29udHJvbCBhbGxvd2luZyBzZWxlY3Rpb24gYW1vbmcgYSBzZXQgb2Ygb3B0aW9ucy4gLX1cbnNlbGVjdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zZWxlY3QgPVxuICBub2RlIFwic2VsZWN0XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBwcmVkZWZpbmVkIG9wdGlvbnMgZm9yIG90aGVyIGNvbnRyb2xzLiAtfVxuZGF0YWxpc3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGF0YWxpc3QgPVxuICBub2RlIFwiZGF0YWxpc3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIG9wdGlvbnMsIGxvZ2ljYWxseSBncm91cGVkLiAtfVxub3B0Z3JvdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3B0Z3JvdXAgPVxuICBub2RlIFwib3B0Z3JvdXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIG9wdGlvbiBpbiBhIGBzZWxlY3RgIGVsZW1lbnQgb3IgYSBzdWdnZXN0aW9uIG9mIGEgYGRhdGFsaXN0YFxuZWxlbWVudC5cbi19XG5vcHRpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3B0aW9uID1cbiAgbm9kZSBcIm9wdGlvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBtdWx0aWxpbmUgdGV4dCBlZGl0IGNvbnRyb2wuIC19XG50ZXh0YXJlYSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50ZXh0YXJlYSA9XG4gIG5vZGUgXCJ0ZXh0YXJlYVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBhIGNhbGN1bGF0aW9uLiAtfVxub3V0cHV0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm91dHB1dCA9XG4gIG5vZGUgXCJvdXRwdXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjb21wbGV0aW9uIHByb2dyZXNzIG9mIGEgdGFzay4gLX1cbnByb2dyZXNzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnByb2dyZXNzID1cbiAgbm9kZSBcInByb2dyZXNzXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNjYWxhciBtZWFzdXJlbWVudCAob3IgYSBmcmFjdGlvbmFsIHZhbHVlKSwgd2l0aGluIGEga25vd25cbnJhbmdlLlxuLX1cbm1ldGVyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1ldGVyID1cbiAgbm9kZSBcIm1ldGVyXCJcblxuXG4tLSBJTlRFUkFDVElWRSBFTEVNRU5UU1xuXG57LXwgUmVwcmVzZW50cyBhIHdpZGdldCBmcm9tIHdoaWNoIHRoZSB1c2VyIGNhbiBvYnRhaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxub3IgY29udHJvbHMuXG4tfVxuZGV0YWlscyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZXRhaWxzID1cbiAgbm9kZSBcImRldGFpbHNcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc3VtbWFyeSwgY2FwdGlvbiwgb3IgbGVnZW5kIGZvciBhIGdpdmVuIGBkZXRhaWxzYC4gLX1cbnN1bW1hcnkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3VtbWFyeSA9XG4gIG5vZGUgXCJzdW1tYXJ5XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbW1hbmQgdGhhdCB0aGUgdXNlciBjYW4gaW52b2tlLiAtfVxubWVudWl0ZW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWVudWl0ZW0gPVxuICBub2RlIFwibWVudWl0ZW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbGlzdCBvZiBjb21tYW5kcy4gLX1cbm1lbnUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWVudSA9XG4gIG5vZGUgXCJtZW51XCJcblxuIiwKICAgICAgICAibW9kdWxlIEh0bWwuQXR0cmlidXRlcyBleHBvc2luZ1xuICAoIHN0eWxlLCBwcm9wZXJ0eSwgYXR0cmlidXRlLCBtYXBcbiAgLCBjbGFzcywgY2xhc3NMaXN0LCBpZCwgdGl0bGUsIGhpZGRlblxuICAsIHR5cGVfLCB2YWx1ZSwgY2hlY2tlZCwgcGxhY2Vob2xkZXIsIHNlbGVjdGVkXG4gICwgYWNjZXB0LCBhY2NlcHRDaGFyc2V0LCBhY3Rpb24sIGF1dG9jb21wbGV0ZSwgYXV0b2ZvY3VzXG4gICwgZGlzYWJsZWQsIGVuY3R5cGUsIGxpc3QsIG1heGxlbmd0aCwgbWlubGVuZ3RoLCBtZXRob2QsIG11bHRpcGxlXG4gICwgbmFtZSwgbm92YWxpZGF0ZSwgcGF0dGVybiwgcmVhZG9ubHksIHJlcXVpcmVkLCBzaXplLCBmb3IsIGZvcm1cbiAgLCBtYXgsIG1pbiwgc3RlcFxuICAsIGNvbHMsIHJvd3MsIHdyYXBcbiAgLCBocmVmLCB0YXJnZXQsIGRvd25sb2FkLCBocmVmbGFuZywgbWVkaWEsIHBpbmcsIHJlbFxuICAsIGlzbWFwLCB1c2VtYXAsIHNoYXBlLCBjb29yZHNcbiAgLCBzcmMsIGhlaWdodCwgd2lkdGgsIGFsdFxuICAsIGF1dG9wbGF5LCBjb250cm9scywgbG9vcCwgcHJlbG9hZCwgcG9zdGVyLCBkZWZhdWx0LCBraW5kLCBzcmNsYW5nXG4gICwgc2FuZGJveCwgc3JjZG9jXG4gICwgcmV2ZXJzZWQsIHN0YXJ0XG4gICwgYWxpZ24sIGNvbHNwYW4sIHJvd3NwYW4sIGhlYWRlcnMsIHNjb3BlXG4gICwgYWNjZXNza2V5LCBjb250ZW50ZWRpdGFibGUsIGNvbnRleHRtZW51LCBkaXIsIGRyYWdnYWJsZSwgZHJvcHpvbmVcbiAgLCBpdGVtcHJvcCwgbGFuZywgc3BlbGxjaGVjaywgdGFiaW5kZXhcbiAgLCBjaXRlLCBkYXRldGltZSwgcHViZGF0ZSwgbWFuaWZlc3RcbiAgKVxuXG57LXwgSGVscGVyIGZ1bmN0aW9ucyBmb3IgSFRNTCBhdHRyaWJ1dGVzLiBUaGV5IGFyZSBvcmdhbml6ZWQgcm91Z2hseSBieVxuY2F0ZWdvcnkuIEVhY2ggYXR0cmlidXRlIGlzIGxhYmVsZWQgd2l0aCB0aGUgSFRNTCB0YWdzIGl0IGNhbiBiZSB1c2VkIHdpdGgsIHNvXG5qdXN0IHNlYXJjaCB0aGUgcGFnZSBmb3IgYHZpZGVvYCBpZiB5b3Ugd2FudCB2aWRlbyBzdHVmZi5cblxuIyMgUHJpbWl0aXZlc1xuQGRvY3Mgc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hcFxuXG4jIyBTdXBlciBDb21tb24gQXR0cmlidXRlc1xuQGRvY3MgY2xhc3MsIGNsYXNzTGlzdCwgaWQsIHRpdGxlLCBoaWRkZW5cblxuIyMgSW5wdXRzXG5AZG9jcyB0eXBlXywgdmFsdWUsIGNoZWNrZWQsIHBsYWNlaG9sZGVyLCBzZWxlY3RlZFxuXG4jIyBJbnB1dCBIZWxwZXJzXG5AZG9jcyBhY2NlcHQsIGFjY2VwdENoYXJzZXQsIGFjdGlvbiwgYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXMsIGRpc2FibGVkLCBlbmN0eXBlLCBsaXN0LCBtYXhsZW5ndGgsIG1pbmxlbmd0aCwgbWV0aG9kLCBtdWx0aXBsZSwgbmFtZSwgbm92YWxpZGF0ZSwgcGF0dGVybiwgcmVhZG9ubHksIHJlcXVpcmVkLCBzaXplLCBmb3IsIGZvcm1cblxuIyMgSW5wdXQgUmFuZ2VzXG5AZG9jcyBtYXgsIG1pbiwgc3RlcFxuXG4jIyBJbnB1dCBUZXh0IEFyZWFzXG5AZG9jcyBjb2xzLCByb3dzLCB3cmFwXG5cbiMjIExpbmtzIGFuZCBBcmVhc1xuQGRvY3MgaHJlZiwgdGFyZ2V0LCBkb3dubG9hZCwgaHJlZmxhbmcsIG1lZGlhLCBwaW5nLCByZWxcblxuIyMgTWFwc1xuQGRvY3MgaXNtYXAsIHVzZW1hcCwgc2hhcGUsIGNvb3Jkc1xuXG5cbiMjIEVtYmVkZGVkIENvbnRlbnRcbkBkb2NzIHNyYywgaGVpZ2h0LCB3aWR0aCwgYWx0XG5cbiMjIEF1ZGlvIGFuZCBWaWRlb1xuQGRvY3MgYXV0b3BsYXksIGNvbnRyb2xzLCBsb29wLCBwcmVsb2FkLCBwb3N0ZXIsIGRlZmF1bHQsIGtpbmQsIHNyY2xhbmdcblxuIyMgaWZyYW1lc1xuQGRvY3Mgc2FuZGJveCwgc3JjZG9jXG5cbiMjIE9yZGVyZWQgTGlzdHNcbkBkb2NzIHJldmVyc2VkLCBzdGFydFxuXG4jIyBUYWJsZXNcbkBkb2NzIGFsaWduLCBjb2xzcGFuLCByb3dzcGFuLCBoZWFkZXJzLCBzY29wZVxuXG4jIyBMZXNzIENvbW1vbiBHbG9iYWwgQXR0cmlidXRlc1xuXG5BdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIGFueSBIVE1MIHRhZyBidXQgYXJlIGxlc3MgY29tbW9ubHkgdXNlZC5cblxuQGRvY3MgYWNjZXNza2V5LCBjb250ZW50ZWRpdGFibGUsIGNvbnRleHRtZW51LCBkaXIsIGRyYWdnYWJsZSwgZHJvcHpvbmUsXG4gICAgICBpdGVtcHJvcCwgbGFuZywgc3BlbGxjaGVjaywgdGFiaW5kZXhcblxuIyMgTWlzY2VsbGFuZW91c1xuQGRvY3MgY2l0ZSwgZGF0ZXRpbWUsIHB1YmRhdGUsIG1hbmlmZXN0XG5cbi19XG5cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSlcbmltcG9ydCBKc29uLkVuY29kZSBhcyBKc29uXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cbi0tIFRoaXMgbGlicmFyeSBkb2VzIG5vdCBpbmNsdWRlIGxvdywgaGlnaCwgb3Igb3B0aW11bSBiZWNhdXNlIHRoZSBpZGVhIG9mIGFcbi0tIGBtZXRlcmAgaXMganVzdCB0b28gY3JhenkuXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IFNwZWNpZnkgYSBzdHlsZS5cblxuICAgIGdyZWV0aW5nIDogTm9kZSBtc2dcbiAgICBncmVldGluZyA9XG4gICAgICBkaXZcbiAgICAgICAgWyBzdHlsZSBcImJhY2tncm91bmQtY29sb3JcIiBcInJlZFwiXG4gICAgICAgICwgc3R5bGUgXCJoZWlnaHRcIiBcIjkwcHhcIlxuICAgICAgICAsIHN0eWxlIFwid2lkdGhcIiBcIjEwMCVcIlxuICAgICAgICBdXG4gICAgICAgIFsgdGV4dCBcIkhlbGxvIVwiXG4gICAgICAgIF1cblxuVGhlcmUgaXMgbm8gYEh0bWwuU3R5bGVzYCBtb2R1bGUgYmVjYXVzZSBiZXN0IHByYWN0aWNlcyBmb3Igd29ya2luZyB3aXRoIEhUTUxcbnN1Z2dlc3QgdGhhdCB0aGlzIHNob3VsZCBwcmltYXJpbHkgYmUgc3BlY2lmaWVkIGluIENTUyBmaWxlcy4gU28gdGhlIGdlbmVyYWxcbnJlY29tbWVuZGF0aW9uIGlzIHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGxpZ2h0bHkuXG4tfVxuc3R5bGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnN0eWxlID1cbiAgVmlydHVhbERvbS5zdHlsZVxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIG1ha2VzIGl0IGVhc2llciB0byBidWlsZCBhIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBhdHRyaWJ1dGUuXG5FYWNoIGNsYXNzIGNhbiBlYXNpbHkgYmUgYWRkZWQgYW5kIHJlbW92ZWQgZGVwZW5kaW5nIG9uIHRoZSBib29sZWFuIHZhbHVlIGl0XG5pcyBwYWlyZWQgd2l0aC4gRm9yIGV4YW1wbGUsIG1heWJlIHdlIHdhbnQgYSB3YXkgdG8gdmlldyBub3RpY2VzOlxuXG4gICAgdmlld05vdGljZSA6IE5vdGljZSAtPiBIdG1sIG1zZ1xuICAgIHZpZXdOb3RpY2Ugbm90aWNlID1cbiAgICAgIGRpdlxuICAgICAgICBbIGNsYXNzTGlzdFxuICAgICAgICAgICAgWyB7IGNsYXNzID0gXCJub3RpY2VcIiwgZW5hYmxlZCA9IFRydWUgfVxuICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJub3RpY2UtaW1wb3J0YW50XCIsIGVuYWJsZWQgPSBub3RpY2UuaXNJbXBvcnRhbnQgfVxuICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJub3RpY2Utc2VlblwiLCBlbmFibGVkID0gbm90aWNlLmlzU2VlbiB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgWyB0ZXh0IG5vdGljZS5jb250ZW50IF1cblxuKipOb3RlOioqIFlvdSBjYW4gaGF2ZSBhcyBtYW55IGBjbGFzc2AgYW5kIGBjbGFzc0xpc3RgIGF0dHJpYnV0ZXMgYXMgeW91IHdhbnQuXG5UaGV5IGFsbCBnZXQgYXBwbGllZCwgc28gaWYgeW91IHNheSBgWyBjbGFzcyBcIm5vdGljZVwiLCBjbGFzcyBcIm5vdGljZS1zZWVuXCIgXWBcbnlvdSB3aWxsIGdldCBib3RoIGNsYXNzZXMhXG4tfVxuY2xhc3NMaXN0IDogQXJyYXkgeyBjbGFzcyA6IFN0cmluZywgZW5hYmxlZCA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5jbGFzc0xpc3QgY2xhc3NlcyA9XG4gIGNsYXNzZXNcbiAgICB8PiBBcnJheS5rZWVwSWYgLmVuYWJsZWRcbiAgICB8PiBBcnJheS5tYXAgLmNsYXNzXG4gICAgfD4gU3RyaW5nLmpvaW4gXCIgXCJcbiAgICB8PiBjbGFzc1xuXG5cblxuLS0gQ1VTVE9NIEFUVFJJQlVURVNcblxuXG57LXwgQ3JlYXRlICpwcm9wZXJ0aWVzKiwgbGlrZSBzYXlpbmcgYGRvbU5vZGUuY2xhc3NOYW1lID0gJ2dyZWV0aW5nJ2AgaW5cbkphdmFTY3JpcHQuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICBjbGFzcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgY2xhc3MgbmFtZSA9XG4gICAgICBwcm9wZXJ0eSBcImNsYXNzTmFtZVwiIChFbmNvZGUuc3RyaW5nIG5hbWUpXG5cblJlYWQgbW9yZSBhYm91dCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMgW2hlcmVdW10uXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS9odG1sL2Jsb2IvbWFzdGVyL3Byb3BlcnRpZXMtdnMtYXR0cmlidXRlcy5tZFxuLX1cbnByb3BlcnR5IDogU3RyaW5nIC0+IEpzb24uVmFsdWUgLT4gQXR0cmlidXRlIG1zZ1xucHJvcGVydHkgPVxuICBWaXJ0dWFsRG9tLnByb3BlcnR5XG5cblxuc3RyaW5nUHJvcGVydHkgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnN0cmluZ1Byb3BlcnR5IGtleSBzdHJpbmcgPVxuICBwcm9wZXJ0eSBrZXkgKEpzb24uc3RyaW5nIHN0cmluZylcblxuXG5ib29sUHJvcGVydHkgOiBTdHJpbmcgLT4gQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5ib29sUHJvcGVydHkga2V5IGJvb2wgPVxuICBwcm9wZXJ0eSBrZXkgKEpzb24uYm9vbCBib29sKVxuXG5cbnstfCBDcmVhdGUgKmF0dHJpYnV0ZXMqLCBsaWtlIHNheWluZyBgZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dyZWV0aW5nJylgXG5pbiBKYXZhU2NyaXB0LlxuXG4gICAgY2xhc3MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuICAgIGNsYXNzIG5hbWUgPVxuICAgICAgYXR0cmlidXRlIFwiY2xhc3NcIiBuYW1lXG5cblJlYWQgbW9yZSBhYm91dCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMgW2hlcmVdW10uXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS9odG1sL2Jsb2IvbWFzdGVyL3Byb3BlcnRpZXMtdnMtYXR0cmlidXRlcy5tZFxuLX1cbmF0dHJpYnV0ZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYXR0cmlidXRlID1cbiAgVmlydHVhbERvbS5hdHRyaWJ1dGVcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhbiBgQXR0cmlidXRlYC5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBhIC0+IEF0dHJpYnV0ZSBtc2dcbm1hcCA9XG4gIFZpcnR1YWxEb20ubWFwQXR0cmlidXRlXG5cblxuXG4tLSBHTE9CQUwgQVRUUklCVVRFU1xuXG5cbnstfCBPZnRlbiB1c2VkIHdpdGggQ1NTIHRvIHN0eWxlIGVsZW1lbnRzIHdpdGggY29tbW9uIHByb3BlcnRpZXMuXG5cbioqTm90ZToqKiBZb3UgY2FuIGhhdmUgYXMgbWFueSBgY2xhc3NgIGFuZCBgY2xhc3NMaXN0YCBhdHRyaWJ1dGVzIGFzIHlvdSB3YW50LlxuVGhleSBhbGwgZ2V0IGFwcGxpZWQsIHNvIGlmIHlvdSBzYXkgYFsgY2xhc3MgXCJub3RpY2VcIiwgY2xhc3MgXCJub3RpY2Utc2VlblwiIF1gXG55b3Ugd2lsbCBnZXQgYm90aCBjbGFzc2VzIVxuLX1cbmNsYXNzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNsYXNzID1cbiAgc3RyaW5nUHJvcGVydHkgXCJjbGFzc05hbWVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIHJlbGV2YW5jZSBvZiBhbiBlbGVtZW50LiAtfVxuaGlkZGVuIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5oaWRkZW4gPVxuICBib29sUHJvcGVydHkgXCJoaWRkZW5cIlxuXG5cbnstfCBPZnRlbiB1c2VkIHdpdGggQ1NTIHRvIHN0eWxlIGEgc3BlY2lmaWMgZWxlbWVudC4gVGhlIHZhbHVlIG9mIHRoaXNcbmF0dHJpYnV0ZSBtdXN0IGJlIHVuaXF1ZS5cbi19XG5pZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5pZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaWRcIlxuXG5cbnstfCBUZXh0IHRvIGJlIGRpc3BsYXllZCBpbiBhIHRvb2x0aXAgd2hlbiBob3ZlcmluZyBvdmVyIHRoZSBlbGVtZW50LiAtfVxudGl0bGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xudGl0bGUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInRpdGxlXCJcblxuXG5cbi0tIExFU1MgQ09NTU9OIEdMT0JBTCBBVFRSSUJVVEVTXG5cblxuey18IERlZmluZXMgYSBrZXlib2FyZCBzaG9ydGN1dCB0byBhY3RpdmF0ZSBvciBhZGQgZm9jdXMgdG8gdGhlIGVsZW1lbnQuIC19XG5hY2Nlc3NrZXkgOiBDaGFyIC0+IEF0dHJpYnV0ZSBtc2dcbmFjY2Vzc2tleSBjaGFyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY2Nlc3NLZXlcIiAoU3RyaW5nLmZyb21DaGFyIGNoYXIpXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50J3MgY29udGVudCBpcyBlZGl0YWJsZS4gLX1cbmNvbnRlbnRlZGl0YWJsZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuY29udGVudGVkaXRhYmxlID1cbiAgYm9vbFByb3BlcnR5IFwiY29udGVudEVkaXRhYmxlXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgSUQgb2YgYSBgbWVudWAgZWxlbWVudCB3aGljaCB3aWxsIHNlcnZlIGFzIHRoZSBlbGVtZW50J3NcbmNvbnRleHQgbWVudS5cbi19XG5jb250ZXh0bWVudSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jb250ZXh0bWVudSA9XG4gIGF0dHJpYnV0ZSBcImNvbnRleHRtZW51XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgdGV4dCBkaXJlY3Rpb24uIEFsbG93ZWQgdmFsdWVzIGFyZSBsdHIgKExlZnQtVG8tUmlnaHQpIG9yIHJ0bFxuKFJpZ2h0LVRvLUxlZnQpLlxuLX1cbmRpciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kaXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRpclwiXG5cblxuey18IERlZmluZXMgd2hldGhlciB0aGUgZWxlbWVudCBjYW4gYmUgZHJhZ2dlZC4gLX1cbmRyYWdnYWJsZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kcmFnZ2FibGUgPVxuICBhdHRyaWJ1dGUgXCJkcmFnZ2FibGVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBhY2NlcHQgdGhlIGRyb3BwaW5nIG9mIGNvbnRlbnQgb24gaXQuIC19XG5kcm9wem9uZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kcm9wem9uZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZHJvcHpvbmVcIlxuXG5cbnstfC19XG5pdGVtcHJvcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5pdGVtcHJvcCA9XG4gIGF0dHJpYnV0ZSBcIml0ZW1wcm9wXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbGFuZ3VhZ2UgdXNlZCBpbiB0aGUgZWxlbWVudC4gLX1cbmxhbmcgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFuZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibGFuZ1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHNwZWxsIGNoZWNraW5nIGlzIGFsbG93ZWQgZm9yIHRoZSBlbGVtZW50LiAtfVxuc3BlbGxjaGVjayA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuc3BlbGxjaGVjayA9XG4gIGJvb2xQcm9wZXJ0eSBcInNwZWxsY2hlY2tcIlxuXG5cbnstfCBPdmVycmlkZXMgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHRhYiBvcmRlciBhbmQgZm9sbG93cyB0aGUgb25lIHNwZWNpZmllZFxuaW5zdGVhZC5cbi19XG50YWJpbmRleCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG50YWJpbmRleCBuID1cbiAgYXR0cmlidXRlIFwidGFiSW5kZXhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG5cbi0tIEVNQkVEREVEIENPTlRFTlRcblxuXG57LXwgVGhlIFVSTCBvZiB0aGUgZW1iZWRkYWJsZSBjb250ZW50LiBGb3IgYGF1ZGlvYCwgYGVtYmVkYCwgYGlmcmFtZWAsIGBpbWdgLFxuYGlucHV0YCwgYHNjcmlwdGAsIGBzb3VyY2VgLCBgdHJhY2tgLCBhbmQgYHZpZGVvYC5cbi19XG5zcmMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3JjIHVybCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic3JjXCIgdXJsXG5cblxuey18IERlY2xhcmUgdGhlIGhlaWdodCBvZiBhIGBjYW52YXNgLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsIGBpbnB1dGAsXG5gb2JqZWN0YCwgb3IgYHZpZGVvYC5cbi19XG5oZWlnaHQgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuaGVpZ2h0IG4gPVxuICBhdHRyaWJ1dGUgXCJoZWlnaHRcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVjbGFyZSB0aGUgd2lkdGggb2YgYSBgY2FudmFzYCwgYGVtYmVkYCwgYGlmcmFtZWAsIGBpbWdgLCBgaW5wdXRgLFxuYG9iamVjdGAsIG9yIGB2aWRlb2AuXG4tfVxud2lkdGggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xud2lkdGggbiA9XG4gIGF0dHJpYnV0ZSBcIndpZHRoXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IEFsdGVybmF0aXZlIHRleHQgaW4gY2FzZSBhbiBpbWFnZSBjYW4ndCBiZSBkaXNwbGF5ZWQuIFdvcmtzIHdpdGggYGltZ2AsXG5gYXJlYWAsIGFuZCBgaW5wdXRgLlxuLX1cbmFsdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hbHQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFsdFwiXG5cblxuXG4tLSBBVURJTyBhbmQgVklERU9cblxuXG57LXwgVGhlIGBhdWRpb2Agb3IgYHZpZGVvYCBzaG91bGQgcGxheSBhcyBzb29uIGFzIHBvc3NpYmxlLiAtfVxuYXV0b3BsYXkgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmF1dG9wbGF5ID1cbiAgYm9vbFByb3BlcnR5IFwiYXV0b3BsYXlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgc2hvdyBwbGF5YmFjayBjb250cm9scyBmb3IgdGhlIGBhdWRpb2Bcbm9yIGB2aWRlb2AuXG4tfVxuY29udHJvbHMgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRyb2xzID1cbiAgYm9vbFByb3BlcnR5IFwiY29udHJvbHNcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYGF1ZGlvYCBvciBgdmlkZW9gIHNob3VsZCBzdGFydCBwbGF5aW5nIGZyb20gdGhlXG5zdGFydCB3aGVuIGl0J3MgZmluaXNoZWQuXG4tfVxubG9vcCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xubG9vcCA9XG4gIGJvb2xQcm9wZXJ0eSBcImxvb3BcIlxuXG5cbnstfCBDb250cm9sIGhvdyBtdWNoIG9mIGFuIGBhdWRpb2Agb3IgYHZpZGVvYCByZXNvdXJjZSBzaG91bGQgYmUgcHJlbG9hZGVkLiAtfVxucHJlbG9hZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wcmVsb2FkID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwcmVsb2FkXCJcblxuXG57LXwgQSBVUkwgaW5kaWNhdGluZyBhIHBvc3RlciBmcmFtZSB0byBzaG93IHVudGlsIHRoZSB1c2VyIHBsYXlzIG9yIHNlZWtzIHRoZVxuYHZpZGVvYC5cbi19XG5wb3N0ZXIgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucG9zdGVyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwb3N0ZXJcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgYHRyYWNrYCBzaG91bGQgYmUgZW5hYmxlZCB1bmxlc3MgdGhlIHVzZXIncyBwcmVmZXJlbmNlc1xuaW5kaWNhdGUgc29tZXRoaW5nIGRpZmZlcmVudC5cbi19XG5kZWZhdWx0IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5kZWZhdWx0ID1cbiAgYm9vbFByb3BlcnR5IFwiZGVmYXVsdFwiXG5cblxuey18IFNwZWNpZmllcyB0aGUga2luZCBvZiB0ZXh0IGB0cmFja2AuIC19XG5raW5kIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmtpbmQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImtpbmRcIlxuXG5cbnstLSBUT0RPOiBtYXliZSByZWludHJvZHVjZSBvbmNlIHRoZXJlJ3MgYSBiZXR0ZXIgd2F5IHRvIGRpc2FtYmlndWF0ZSBpbXBvcnRzXG57LXwgU3BlY2lmaWVzIGEgdXNlci1yZWFkYWJsZSB0aXRsZSBvZiB0aGUgdGV4dCBgdHJhY2tgLiAtfVxubGFiZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFiZWwgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImxhYmVsXCJcbi0tfVxuXG57LXwgQSB0d28gbGV0dGVyIGxhbmd1YWdlIGNvZGUgaW5kaWNhdGluZyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIGB0cmFja2AgdGV4dCBkYXRhLlxuLX1cbnNyY2xhbmcgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3JjbGFuZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic3JjbGFuZ1wiXG5cblxuXG4tLSBJRlJBTUVTXG5cblxuey18IEEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2Ygc2VjdXJpdHkgcmVzdHJpY3Rpb25zIHlvdSdkIGxpa2UgdG8gbGlmdCBmb3IgYW5cbmBpZnJhbWVgLlxuLX1cbnNhbmRib3ggOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc2FuZGJveCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2FuZGJveFwiXG5cblxuey18IEFuIEhUTUwgZG9jdW1lbnQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBhcyB0aGUgYm9keSBvZiBhbiBgaWZyYW1lYC4gSXQgd2lsbFxub3ZlcnJpZGUgdGhlIGNvbnRlbnQgb2YgdGhlIGBzcmNgIGF0dHJpYnV0ZSBpZiBpdCBoYXMgYmVlbiBzcGVjaWZpZWQuXG4tfVxuc3JjZG9jIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNyY2RvYyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic3JjZG9jXCJcblxuXG5cbi0tIElOUFVUXG5cblxuey18IERlZmluZXMgdGhlIHR5cGUgb2YgYSBgYnV0dG9uYCwgYGNoZWNrYm94YCwgYGlucHV0YCwgYGVtYmVkYCwgYG1lbnVgLFxuYG9iamVjdGAsIGBzY3JpcHRgLCBgc291cmNlYCwgb3IgYHN0eWxlYC5cbi19XG50eXBlXyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50eXBlXyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidHlwZVwiXG5cblxuey18IFRoZSB2YWx1ZSB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhIGBidXR0b25gLCBgb3B0aW9uYCxcbmBpbnB1dGAsIGBsaWAsIGBtZXRlcmAsIGBwcm9ncmVzc2AsIG9yIGBwYXJhbWAuXG4tfVxudmFsdWUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInZhbHVlXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYGlucHV0YCBvZiB0eXBlIGNoZWNrYm94IGlzIGNoZWNrZWQuIC19XG5jaGVja2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5jaGVja2VkID1cbiAgYm9vbFByb3BlcnR5IFwiY2hlY2tlZFwiXG5cblxuey18IFByb3ZpZGVzIGEgaGludCB0byB0aGUgdXNlciBvZiB3aGF0IGNhbiBiZSBlbnRlcmVkIGludG8gYW4gYGlucHV0YCBvclxuYHRleHRhcmVhYC5cbi19XG5wbGFjZWhvbGRlciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wbGFjZWhvbGRlciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwicGxhY2Vob2xkZXJcIlxuXG5cbnstfCBEZWZpbmVzIHdoaWNoIGBvcHRpb25gIHdpbGwgYmUgc2VsZWN0ZWQgb24gcGFnZSBsb2FkLiAtfVxuc2VsZWN0ZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnNlbGVjdGVkID1cbiAgYm9vbFByb3BlcnR5IFwic2VsZWN0ZWRcIlxuXG5cblxuLS0gSU5QVVQgSEVMUEVSU1xuXG5cbnstfCBMaXN0IG9mIHR5cGVzIHRoZSBzZXJ2ZXIgYWNjZXB0cywgdHlwaWNhbGx5IGEgZmlsZSB0eXBlLlxuRm9yIGBmb3JtYCBhbmQgYGlucHV0YC5cbi19XG5hY2NlcHQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXB0ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY2NlcHRcIlxuXG5cbnstfCBMaXN0IG9mIHN1cHBvcnRlZCBjaGFyc2V0cyBpbiBhIGBmb3JtYC5cbi19XG5hY2NlcHRDaGFyc2V0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFjY2VwdENoYXJzZXQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2VwdENoYXJzZXRcIlxuXG5cbnstfCBUaGUgVVJJIG9mIGEgcHJvZ3JhbSB0aGF0IHByb2Nlc3NlcyB0aGUgaW5mb3JtYXRpb24gc3VibWl0dGVkIHZpYSBhIGBmb3JtYC5cbi19XG5hY3Rpb24gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWN0aW9uIHVyaSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWN0aW9uXCIgdXJpXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGEgYGZvcm1gIG9yIGFuIGBpbnB1dGAgY2FuIGhhdmUgdGhlaXIgdmFsdWVzIGF1dG9tYXRpY2FsbHlcbmNvbXBsZXRlZCBieSB0aGUgYnJvd3Nlci5cbi19XG5hdXRvY29tcGxldGUgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmF1dG9jb21wbGV0ZSBib29sID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhdXRvY29tcGxldGVcIiAoaWYgYm9vbCB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpXG5cblxuey18IFRoZSBlbGVtZW50IHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGZvY3VzZWQgYWZ0ZXIgdGhlIHBhZ2UgbG9hZGVkLlxuRm9yIGBidXR0b25gLCBgaW5wdXRgLCBgc2VsZWN0YCwgYW5kIGB0ZXh0YXJlYWAuXG4tfVxuYXV0b2ZvY3VzIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5hdXRvZm9jdXMgPVxuICBib29sUHJvcGVydHkgXCJhdXRvZm9jdXNcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdXNlciBjYW4gaW50ZXJhY3Qgd2l0aCBhIGBidXR0b25gLCBgZmllbGRzZXRgLFxuYGlucHV0YCwgYG9wdGdyb3VwYCwgYG9wdGlvbmAsIGBzZWxlY3RgIG9yIGB0ZXh0YXJlYWAuXG4tfVxuZGlzYWJsZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmRpc2FibGVkID1cbiAgYm9vbFByb3BlcnR5IFwiZGlzYWJsZWRcIlxuXG5cbnstfCBIb3cgYGZvcm1gIGRhdGEgc2hvdWxkIGJlIGVuY29kZWQgd2hlbiBzdWJtaXR0ZWQgd2l0aCB0aGUgUE9TVCBtZXRob2QuXG5PcHRpb25zIGluY2x1ZGU6IGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCwgbXVsdGlwYXJ0L2Zvcm0tZGF0YSwgYW5kXG50ZXh0L3BsYWluLlxuLX1cbmVuY3R5cGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZW5jdHlwZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZW5jdHlwZVwiXG5cblxuey18IEFzc29jaWF0ZXMgYW4gYGlucHV0YCB3aXRoIGEgYGRhdGFsaXN0YCB0YWcuIFRoZSBkYXRhbGlzdCBnaXZlcyBzb21lXG5wcmUtZGVmaW5lZCBvcHRpb25zIHRvIHN1Z2dlc3QgdG8gdGhlIHVzZXIgYXMgdGhleSBpbnRlcmFjdCB3aXRoIGFuIGlucHV0LlxuVGhlIHZhbHVlIG9mIHRoZSBsaXN0IGF0dHJpYnV0ZSBtdXN0IG1hdGNoIHRoZSBpZCBvZiBhIGBkYXRhbGlzdGAgbm9kZS5cbkZvciBgaW5wdXRgLlxuLX1cbmxpc3QgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGlzdCA9XG4gIGF0dHJpYnV0ZSBcImxpc3RcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFsbG93ZWQgaW4gYW4gYGlucHV0YCBvclxuYHRleHRhcmVhYC5cbi19XG5taW5sZW5ndGggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xubWlubGVuZ3RoIG4gPVxuICBhdHRyaWJ1dGUgXCJtaW5MZW5ndGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVmaW5lcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGluIGFuIGBpbnB1dGAgb3JcbmB0ZXh0YXJlYWAuXG4tfVxubWF4bGVuZ3RoIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbm1heGxlbmd0aCBuID1cbiAgYXR0cmlidXRlIFwibWF4bGVuZ3RoXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IERlZmluZXMgd2hpY2ggSFRUUCBtZXRob2QgdG8gdXNlIHdoZW4gc3VibWl0dGluZyBhIGBmb3JtYC4gQ2FuIGJlIEdFVFxuKGRlZmF1bHQpIG9yIFBPU1QuXG4tfVxubWV0aG9kIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1ldGhvZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibWV0aG9kXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgbXVsdGlwbGUgdmFsdWVzIGNhbiBiZSBlbnRlcmVkIGluIGFuIGBpbnB1dGAgb2YgdHlwZVxuZW1haWwgb3IgZmlsZS4gQ2FuIGFsc28gaW5kaWNhdGUgdGhhdCB5b3UgY2FuIGBzZWxlY3RgIG1hbnkgb3B0aW9ucy5cbi19XG5tdWx0aXBsZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xubXVsdGlwbGUgPVxuICBib29sUHJvcGVydHkgXCJtdWx0aXBsZVwiXG5cblxuey18IE5hbWUgb2YgdGhlIGVsZW1lbnQuIEZvciBleGFtcGxlIHVzZWQgYnkgdGhlIHNlcnZlciB0byBpZGVudGlmeSB0aGUgZmllbGRzXG5pbiBmb3JtIHN1Ym1pdHMuIEZvciBgYnV0dG9uYCwgYGZvcm1gLCBgZmllbGRzZXRgLCBgaWZyYW1lYCwgYGlucHV0YCxcbmBvYmplY3RgLCBgb3V0cHV0YCwgYHNlbGVjdGAsIGB0ZXh0YXJlYWAsIGBtYXBgLCBgbWV0YWAsIGFuZCBgcGFyYW1gLlxuLX1cbm5hbWUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubmFtZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibmFtZVwiXG5cblxuey18IFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IGEgYGZvcm1gIHNob3VsZG4ndCBiZSB2YWxpZGF0ZWQgd2hlblxuc3VibWl0dGVkLlxuLX1cbm5vdmFsaWRhdGUgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbm5vdmFsaWRhdGUgPVxuICBib29sUHJvcGVydHkgXCJub1ZhbGlkYXRlXCJcblxuXG57LXwgRGVmaW5lcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aGljaCBhbiBgaW5wdXRgJ3MgdmFsdWUgd2lsbCBiZSB2YWxpZGF0ZWRcbmFnYWluc3QuXG4tfVxucGF0dGVybiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wYXR0ZXJuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwYXR0ZXJuXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYGlucHV0YCBvciBgdGV4dGFyZWFgIGNhbiBiZSBlZGl0ZWQuIC19XG5yZWFkb25seSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVhZG9ubHkgPVxuICBib29sUHJvcGVydHkgXCJyZWFkT25seVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZWxlbWVudCBpcyByZXF1aXJlZCB0byBmaWxsIG91dCBvciBub3QuXG5Gb3IgYGlucHV0YCwgYHNlbGVjdGAsIGFuZCBgdGV4dGFyZWFgLlxuLX1cbnJlcXVpcmVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZXF1aXJlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcInJlcXVpcmVkXCJcblxuXG57LXwgRm9yIGBpbnB1dGAgc3BlY2lmaWVzIHRoZSB3aWR0aCBvZiBhbiBpbnB1dCBpbiBjaGFyYWN0ZXJzLlxuXG5Gb3IgYHNlbGVjdGAgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSBvcHRpb25zIGluIGEgZHJvcC1kb3duIGxpc3QuXG4tfVxuc2l6ZSA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5zaXplIG4gPVxuICBhdHRyaWJ1dGUgXCJzaXplXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IFRoZSBlbGVtZW50IElEIGRlc2NyaWJlZCBieSB0aGlzIGBsYWJlbGAgb3IgdGhlIGVsZW1lbnQgSURzIHRoYXQgYXJlIHVzZWRcbmZvciBhbiBgb3V0cHV0YC5cbi19XG5mb3IgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZm9yID1cbiAgc3RyaW5nUHJvcGVydHkgXCJodG1sRm9yXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBlbGVtZW50IElEIG9mIHRoZSBgZm9ybWAgdGhhdCBvd25zIHRoaXMgcGFydGljdWxhciBgYnV0dG9uYCxcbmBmaWVsZHNldGAsIGBpbnB1dGAsIGBsYWJlbGAsIGBtZXRlcmAsIGBvYmplY3RgLCBgb3V0cHV0YCwgYHByb2dyZXNzYCxcbmBzZWxlY3RgLCBvciBgdGV4dGFyZWFgLlxuLX1cbmZvcm0gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZm9ybSA9XG4gIGF0dHJpYnV0ZSBcImZvcm1cIlxuXG5cblxuLS0gUkFOR0VTXG5cblxuey18IEluZGljYXRlcyB0aGUgbWF4aW11bSB2YWx1ZSBhbGxvd2VkLiBXaGVuIHVzaW5nIGFuIGlucHV0IG9mIHR5cGUgbnVtYmVyIG9yXG5kYXRlLCB0aGUgbWF4IHZhbHVlIG11c3QgYmUgYSBudW1iZXIgb3IgZGF0ZS4gRm9yIGBpbnB1dGAsIGBtZXRlcmAsIGFuZCBgcHJvZ3Jlc3NgLlxuLX1cbm1heCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tYXggPVxuICBzdHJpbmdQcm9wZXJ0eSBcIm1heFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgbWluaW11bSB2YWx1ZSBhbGxvd2VkLiBXaGVuIHVzaW5nIGFuIGlucHV0IG9mIHR5cGUgbnVtYmVyIG9yXG5kYXRlLCB0aGUgbWluIHZhbHVlIG11c3QgYmUgYSBudW1iZXIgb3IgZGF0ZS4gRm9yIGBpbnB1dGAgYW5kIGBtZXRlcmAuXG4tfVxubWluIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1pbiA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibWluXCJcblxuXG57LXwgQWRkIGEgc3RlcCBzaXplIHRvIGFuIGBpbnB1dGAuIFVzZSBgc3RlcCBcImFueVwiYCB0byBhbGxvdyBhbnkgZmxvYXRpbmctcG9pbnRcbm51bWJlciB0byBiZSB1c2VkIGluIHRoZSBpbnB1dC5cbi19XG5zdGVwIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnN0ZXAgbiA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic3RlcFwiIG5cblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbnstfCBEZWZpbmVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiBhIGB0ZXh0YXJlYWAuIC19XG5jb2xzIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbmNvbHMgbiA9XG4gIGF0dHJpYnV0ZSBcImNvbHNcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVmaW5lcyB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gYSBgdGV4dGFyZWFgLiAtfVxucm93cyA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5yb3dzIG4gPVxuICBhdHRyaWJ1dGUgXCJyb3dzXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSB0ZXh0IHNob3VsZCBiZSB3cmFwcGVkIGluIGEgYHRleHRhcmVhYC4gUG9zc2libGVcbnZhbHVlcyBhcmUgXCJoYXJkXCIgYW5kIFwic29mdFwiLlxuLX1cbndyYXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xud3JhcCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwid3JhcFwiXG5cblxuXG4tLSBNQVBTXG5cblxuey18IFdoZW4gYW4gYGltZ2AgaXMgYSBkZXNjZW5kYW50IG9mIGFuIGBhYCB0YWcsIHRoZSBgaXNtYXBgIGF0dHJpYnV0ZVxuaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWNrIGxvY2F0aW9uIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgcGFyZW50IGBhYCdzIGhyZWYgYXNcbmEgcXVlcnkgc3RyaW5nLlxuLX1cbmlzbWFwIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5pc21hcCA9XG4gIGJvb2xQcm9wZXJ0eSBcImlzTWFwXCJcblxuXG57LXwgU3BlY2lmeSB0aGUgaGFzaCBuYW1lIHJlZmVyZW5jZSBvZiBhIGBtYXBgIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIGFuIGBpbWdgXG5vciBgb2JqZWN0YC4gQSBoYXNoIG5hbWUgcmVmZXJlbmNlIGlzIGEgaGFzaCBzeW1ib2wgZm9sbG93ZWQgYnkgdGhlIGVsZW1lbnQncyBuYW1lIG9yIGlkLlxuRS5nLiBgXCIjcGxhbmV0LW1hcFwiYC5cbi19XG51c2VtYXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xudXNlbWFwID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ1c2VNYXBcIlxuXG5cbnstfCBEZWNsYXJlIHRoZSBzaGFwZSBvZiB0aGUgY2xpY2thYmxlIGFyZWEgaW4gYW4gYGFgIG9yIGBhcmVhYC4gVmFsaWQgdmFsdWVzXG5pbmNsdWRlOiBkZWZhdWx0LCByZWN0LCBjaXJjbGUsIHBvbHkuIFRoaXMgYXR0cmlidXRlIGNhbiBiZSBwYWlyZWQgd2l0aFxuYGNvb3Jkc2AgdG8gY3JlYXRlIG1vcmUgcGFydGljdWxhciBzaGFwZXMuXG4tfVxuc2hhcGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc2hhcGUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNoYXBlXCJcblxuXG57LXwgQSBzZXQgb2YgdmFsdWVzIHNwZWNpZnlpbmcgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBob3Qtc3BvdCByZWdpb24gaW4gYW5cbmBhcmVhYC4gTmVlZHMgdG8gYmUgcGFpcmVkIHdpdGggYSBgc2hhcGVgIGF0dHJpYnV0ZSB0byBiZSBtZWFuaW5nZnVsLlxuLX1cbmNvb3JkcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jb29yZHMgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImNvb3Jkc1wiXG5cblxuXG4tLSBSRUFMIFNUVUZGXG5cblxuey18IFNwZWNpZmllcyB0aGUgaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2YgYSBgY2FwdGlvbmAsIGBjb2xgLCBgY29sZ3JvdXBgLFxuYGhyYCwgYGlmcmFtZWAsIGBpbWdgLCBgdGFibGVgLCBgdGJvZHlgLCAgYHRkYCwgIGB0Zm9vdGAsIGB0aGAsIGB0aGVhZGAsIG9yXG5gdHJgLlxuLX1cbmFsaWduIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFsaWduID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhbGlnblwiXG5cblxuey18IENvbnRhaW5zIGEgVVJJIHdoaWNoIHBvaW50cyB0byB0aGUgc291cmNlIG9mIHRoZSBxdW90ZSBvciBjaGFuZ2UgaW4gYVxuYGJsb2NrcXVvdGVgLCBgZGVsYCwgYGluc2AsIG9yIGBxYC5cbi19XG5jaXRlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNpdGUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImNpdGVcIlxuXG5cblxuXG4tLSBMSU5LUyBBTkQgQVJFQVNcblxuXG57LXwgVGhlIFVSTCBvZiBhIGxpbmtlZCByZXNvdXJjZSwgc3VjaCBhcyBgYWAsIGBhcmVhYCwgYGJhc2VgLCBvciBgbGlua2AuIC19XG5ocmVmIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmhyZWYgdXJsID1cbiAgc3RyaW5nUHJvcGVydHkgXCJocmVmXCIgdXJsXG5cblxuey18IFNwZWNpZnkgd2hlcmUgdGhlIHJlc3VsdHMgb2YgY2xpY2tpbmcgYW4gYGFgLCBgYXJlYWAsIGBiYXNlYCwgb3IgYGZvcm1gXG5zaG91bGQgYXBwZWFyLiBQb3NzaWJsZSBzcGVjaWFsIHZhbHVlcyBpbmNsdWRlOlxuXG4gICogX2JsYW5rICZtZGFzaDsgYSBuZXcgd2luZG93IG9yIHRhYlxuICAqIF9zZWxmICZtZGFzaDsgdGhlIHNhbWUgZnJhbWUgKHRoaXMgaXMgZGVmYXVsdClcbiAgKiBfcGFyZW50ICZtZGFzaDsgdGhlIHBhcmVudCBmcmFtZVxuICAqIF90b3AgJm1kYXNoOyB0aGUgZnVsbCBib2R5IG9mIHRoZSB3aW5kb3dcblxuWW91IGNhbiBhbHNvIGdpdmUgdGhlIG5hbWUgb2YgYW55IGBmcmFtZWAgeW91IGhhdmUgY3JlYXRlZC5cbi19XG50YXJnZXQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xudGFyZ2V0ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ0YXJnZXRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCBjbGlja2luZyBhbiBgYWAgYW5kIGBhcmVhYCB3aWxsIGRvd25sb2FkIHRoZSByZXNvdXJjZVxuZGlyZWN0bHkuIFRoZSBgU3RyaW5nYCBhcmd1bWVudCBkZXRlcm1pbnMgdGhlIG5hbWUgb2YgdGhlIGRvd25sb2FkZWQgZmlsZS5cblNheSB0aGUgZmlsZSB5b3UgYXJlIHNlcnZpbmcgaXMgbmFtZWQgYGhhdHMuanNvbmAuXG5cbiAgICBkb3dubG9hZCBcIlwiICAgICAgICAgICAgICAgLS0gaGF0cy5qc29uXG4gICAgZG93bmxvYWQgXCJteS1oYXRzLmpzb25cIiAgIC0tIG15LWhhdHMuanNvblxuICAgIGRvd25sb2FkIFwic25ha2VzLmpzb25cIiAgICAtLSBzbmFrZXMuanNvblxuXG5UaGUgZW1wdHkgYFN0cmluZ2Agc2F5cyB0byBqdXN0IG5hbWUgaXQgd2hhdGV2ZXIgaXQgd2FzIGNhbGxlZCBvbiB0aGUgc2VydmVyLlxuLX1cbmRvd25sb2FkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRvd25sb2FkIGZpbGVOYW1lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkb3dubG9hZFwiIGZpbGVOYW1lXG5cblxuey18IEluZGljYXRlcyB0aGF0IGNsaWNraW5nIGFuIGBhYCBhbmQgYGFyZWFgIHdpbGwgZG93bmxvYWQgdGhlIHJlc291cmNlXG5kaXJlY3RseSwgYW5kIHRoYXQgdGhlIGRvd25sb2FkZWQgcmVzb3VyY2Ugd2l0aCBoYXZlIHRoZSBnaXZlbiBmaWxlbmFtZS5cblNvIGBkb3dubG9hZEFzIFwiaGF0cy5qc29uXCJgIG1lYW5zIHRoZSBwZXJzb24gZ2V0cyBhIGZpbGUgbmFtZWQgYGhhdHMuanNvbmAuXG4tfVxuZG93bmxvYWRBcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kb3dubG9hZEFzID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkb3dubG9hZFwiXG5cblxuey18IFR3by1sZXR0ZXIgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbGlua2VkIHJlc291cmNlIG9mIGFuIGBhYCwgYGFyZWFgLCBvciBgbGlua2AuXG4tfVxuaHJlZmxhbmcgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaHJlZmxhbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImhyZWZsYW5nXCJcblxuXG57LXwgU3BlY2lmaWVzIGEgaGludCBvZiB0aGUgdGFyZ2V0IG1lZGlhIG9mIGEgYGFgLCBgYXJlYWAsIGBsaW5rYCwgYHNvdXJjZWAsXG5vciBgc3R5bGVgLlxuLX1cbm1lZGlhIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1lZGlhID1cbiAgYXR0cmlidXRlIFwibWVkaWFcIlxuXG5cbnstfCBTcGVjaWZ5IGEgVVJMIHRvIHNlbmQgYSBzaG9ydCBQT1NUIHJlcXVlc3QgdG8gd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW5cbmBhYCBvciBgYXJlYWAuIFVzZWZ1bCBmb3IgbW9uaXRvcmluZyBhbmQgdHJhY2tpbmcuXG4tfVxucGluZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5waW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwaW5nXCJcblxuXG57LXwgU3BlY2lmaWVzIHRoZSByZWxhdGlvbnNoaXAgb2YgdGhlIHRhcmdldCBvYmplY3QgdG8gdGhlIGxpbmsgb2JqZWN0LlxuRm9yIGBhYCwgYGFyZWFgLCBgbGlua2AuXG4tfVxucmVsIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnJlbCA9XG4gIGF0dHJpYnV0ZSBcInJlbFwiXG5cblxuXG4tLSBDUkFaWSBTVFVGRlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGRhdGUgYW5kIHRpbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50LlxuRm9yIGBkZWxgLCBgaW5zYCwgYHRpbWVgLlxuLX1cbmRhdGV0aW1lIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRhdGV0aW1lID1cbiAgYXR0cmlidXRlIFwiZGF0ZXRpbWVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIGRhdGUgYW5kIHRpbWUgaXMgdGhlIGRhdGUgb2YgdGhlIG5lYXJlc3QgYGFydGljbGVgXG5hbmNlc3RvciBlbGVtZW50LiBGb3IgYHRpbWVgLlxuLX1cbnB1YmRhdGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucHViZGF0ZSA9XG4gIGF0dHJpYnV0ZSBcInB1YmRhdGVcIlxuXG5cblxuLS0gT1JERVJFRCBMSVNUU1xuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBvcmRlcmVkIGxpc3QgYG9sYCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGEgZGVzY2VuZGluZ1xub3JkZXIgaW5zdGVhZCBvZiBhIGFzY2VuZGluZy5cbi19XG5yZXZlcnNlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmV2ZXJzZWQgPVxuICBib29sUHJvcGVydHkgXCJyZXZlcnNlZFwiXG5cblxuey18IERlZmluZXMgdGhlIGZpcnN0IG51bWJlciBvZiBhbiBvcmRlcmVkIGxpc3QgaWYgeW91IHdhbnQgaXQgdG8gYmUgc29tZXRoaW5nXG5iZXNpZGVzIDEuXG4tfVxuc3RhcnQgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuc3RhcnQgbiA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic3RhcnRcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG5cbi0tIFRBQkxFU1xuXG5cbnstfCBUaGUgY29sc3BhbiBhdHRyaWJ1dGUgZGVmaW5lcyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYSBjZWxsIHNob3VsZCBzcGFuLlxuRm9yIGB0ZGAgYW5kIGB0aGAuXG4tfVxuY29sc3BhbiA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5jb2xzcGFuIG4gPVxuICBhdHRyaWJ1dGUgXCJjb2xzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IEEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgZWxlbWVudCBJRHMgaW5kaWNhdGluZyB3aGljaCBgdGhgIGVsZW1lbnRzIGFyZVxuaGVhZGVycyBmb3IgdGhpcyBjZWxsLiBGb3IgYHRkYCBhbmQgYHRoYC5cbi19XG5oZWFkZXJzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmhlYWRlcnMgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImhlYWRlcnNcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBudW1iZXIgb2Ygcm93cyBhIHRhYmxlIGNlbGwgc2hvdWxkIHNwYW4gb3Zlci5cbkZvciBgdGRgIGFuZCBgdGhgLlxuLX1cbnJvd3NwYW4gOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xucm93c3BhbiBuID1cbiAgYXR0cmlidXRlIFwicm93c3BhblwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIHNjb3BlIG9mIGEgaGVhZGVyIGNlbGwgYHRoYC4gUG9zc2libGUgdmFsdWVzIGFyZTogY29sLCByb3csXG5jb2xncm91cCwgcm93Z3JvdXAuXG4tfVxuc2NvcGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc2NvcGUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNjb3BlXCJcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBVUkwgb2YgdGhlIGNhY2hlIG1hbmlmZXN0IGZvciBhbiBgaHRtbGAgdGFnLiAtfVxubWFuaWZlc3QgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWFuaWZlc3QgPVxuICBhdHRyaWJ1dGUgXCJtYW5pZmVzdFwiXG5cblxuey0tIFRPRE86IG1heWJlIHJlaW50cm9kdWNlIG9uY2UgdGhlcmUncyBhIGJldHRlciB3YXkgdG8gZGlzYW1iaWd1YXRlIGltcG9ydHNcbnstfCBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgYSBgY29sYCBvciBgY29sZ3JvdXBgIHNob3VsZCBzcGFuLiAtfVxuc3BhbiA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5zcGFuIG4gPVxuICAgIHN0cmluZ1Byb3BlcnR5IFwic3BhblwiIChTdHJpbmcuZnJvbUludCBuKVxuLS19XG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5FdmVudHMgZXhwb3NpbmdcbiAgKCBvbkNsaWNrLCBvbkRvdWJsZUNsaWNrXG4gICwgb25Nb3VzZURvd24sIG9uTW91c2VVcFxuICAsIG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlXG4gICwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXRcbiAgLCBvbklucHV0LCBvbkNoZWNrLCBvblN1Ym1pdFxuICAsIG9uQmx1ciwgb25Gb2N1c1xuICAsIG9uLCBzdG9wUHJvcGFnYXRpb25PbiwgcHJldmVudERlZmF1bHRPbiwgY3VzdG9tXG4gICwgdGFyZ2V0VmFsdWUsIHRhcmdldENoZWNrZWQsIGtleUNvZGVcbiAgKVxuXG57LXwgSXQgaXMgb2Z0ZW4gaGVscGZ1bCB0byBjcmVhdGUgYW4gW0N1c3RvbSBUeXBlXVtdIHNvIHlvdSBjYW4gaGF2ZSBtYW55IGRpZmZlcmVudCBraW5kc1xub2YgZXZlbnRzIGFzIHNlZW4gaW4gdGhlIFtUb2RvTVZDXVtdIGV4YW1wbGUuXG5cbltDdXN0b20gVHlwZV06IGh0dHBzOi8vZ3Jlbi1sYW5nLm9yZy9ib29rL3N5bnRheC9jdXN0b21fdHlwZXMuaHRtbFxuW1RvZG9NVkNdOiBodHRwczovL2dpdGh1Yi5jb20vZ3Jlbi1sYW5nL2V4YW1wbGUtcHJvamVjdHMvdHJlZS9tYWluL3RvZG9fbXZjIFxuXG4jIyBNb3VzZVxuQGRvY3Mgb25DbGljaywgb25Eb3VibGVDbGljaywgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUsIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0XG5cbiMjIEZvcm1zXG5AZG9jcyBvbklucHV0LCBvbkNoZWNrLCBvblN1Ym1pdFxuXG4jIyBGb2N1c1xuQGRvY3Mgb25CbHVyLCBvbkZvY3VzXG5cbiMjIEN1c3RvbVxuQGRvY3Mgb24sIHN0b3BQcm9wYWdhdGlvbk9uLCBwcmV2ZW50RGVmYXVsdE9uLCBjdXN0b21cblxuIyMgQ3VzdG9tIERlY29kZXJzXG5AZG9jcyB0YXJnZXRWYWx1ZSwgdGFyZ2V0Q2hlY2tlZCwga2V5Q29kZVxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSlcbmltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cblxuLS0gTU9VU0UgRVZFTlRTXG5cblxuey18LX1cbm9uQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25DbGljayBtc2cgPVxuICBvbiBcImNsaWNrXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uRG91YmxlQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Eb3VibGVDbGljayBtc2cgPVxuICBvbiBcImRibGNsaWNrXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VEb3duIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VEb3duIG1zZyA9XG4gIG9uIFwibW91c2Vkb3duXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VVcCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlVXAgbXNnID1cbiAgb24gXCJtb3VzZXVwXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VFbnRlciA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlRW50ZXIgbXNnID1cbiAgb24gXCJtb3VzZWVudGVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VMZWF2ZSA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlTGVhdmUgbXNnID1cbiAgb24gXCJtb3VzZWxlYXZlXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VPdmVyIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VPdmVyIG1zZyA9XG4gIG9uIFwibW91c2VvdmVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VPdXQgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZU91dCBtc2cgPVxuICBvbiBcIm1vdXNlb3V0XCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuXG4tLSBGT1JNIEVWRU5UU1xuXG5cbnstfCBEZXRlY3QgW2lucHV0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvaW5wdXQpXG5ldmVudHMgZm9yIHRoaW5ncyBsaWtlIHRleHQgZmllbGRzIG9yIHRleHQgYXJlYXMuXG5cbkZvciBtb3JlIGRldGFpbHMgb24gaG93IGBvbklucHV0YCB3b3JrcywgY2hlY2sgb3V0IFtgdGFyZ2V0VmFsdWVgXSgjdGFyZ2V0VmFsdWUpLlxuXG4qKk5vdGUgMToqKiBJdCBncmFicyB0aGUgKipzdHJpbmcqKiB2YWx1ZSBhdCBgZXZlbnQudGFyZ2V0LnZhbHVlYCwgc28gaXQgd2lsbFxubm90IHdvcmsgaWYgeW91IG5lZWQgc29tZSBvdGhlciBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHRyYWNrXG5pbnB1dHMgb24gYSByYW5nZSBzbGlkZXIsIG1ha2UgYSBjdXN0b20gaGFuZGxlciB3aXRoIFtgb25gXSgjb24pLlxuXG4qKk5vdGUgMjoqKiBJdCB1c2VzIGBzdG9wUHJvcGFnYXRpb25PbmAgaW50ZXJuYWxseSB0byBhbHdheXMgc3RvcCBwcm9wYWdhdGlvblxub2YgdGhlIGV2ZW50LiBUaGlzIGlzIGltcG9ydGFudCBmb3IgY29tcGxpY2F0ZWQgcmVhc29ucyBleHBsYWluZWQgW2hlcmVdWzFdIGFuZFxuW2hlcmVdWzJdLlxuXG5bMV06IC9wYWNrYWdlcy9lbG0vdmlydHVhbC1kb20vbGF0ZXN0L1ZpcnR1YWxEb20jSGFuZGxlclxuWzJdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL3ZpcnR1YWwtZG9tL2lzc3Vlcy8xMjVcbi19XG5vbklucHV0IDogKFN0cmluZyAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbm9uSW5wdXQgdGFnZ2VyID1cbiAgc3RvcFByb3BhZ2F0aW9uT24gXCJpbnB1dFwiIChKc29uLm1hcCBhbHdheXNTdG9wIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0VmFsdWUpKVxuXG5cbmFsd2F5c1N0b3AgOiBtc2cgLT4geyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sIH1cbmFsd2F5c1N0b3AgbXNnID1cbiAgeyBtZXNzYWdlID0gbXNnIFxuICAsIHN0b3BQcm9wYWdhdGlvbiA9IFRydWVcbiAgfVxuXG5cbnstfCBEZXRlY3QgW2NoYW5nZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NoYW5nZSlcbmV2ZW50cyBvbiBjaGVja2JveGVzLiBJdCB3aWxsIGdyYWIgdGhlIGJvb2xlYW4gdmFsdWUgZnJvbSBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgXG5vbiBhbnkgaW5wdXQgZXZlbnQuXG5cbkNoZWNrIG91dCBbYHRhcmdldENoZWNrZWRgXSgjdGFyZ2V0Q2hlY2tlZCkgZm9yIG1vcmUgZGV0YWlscyBvbiBob3cgdGhpcyB3b3Jrcy5cbi19XG5vbkNoZWNrIDogKEJvb2wgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG5vbkNoZWNrIHRhZ2dlciA9XG4gIG9uIFwiY2hhbmdlXCIgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRDaGVja2VkKVxuXG5cbnstfCBEZXRlY3QgYSBbc3VibWl0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvc3VibWl0KVxuZXZlbnQgd2l0aCBbYHByZXZlbnREZWZhdWx0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0KVxuaW4gb3JkZXIgdG8gcHJldmVudCB0aGUgZm9ybSBmcm9tIGNoYW5naW5nIHRoZSBwYWdl4oCZcyBsb2NhdGlvbi4gSWYgeW91IG5lZWRcbmRpZmZlcmVudCBiZWhhdmlvciwgY3JlYXRlIGEgY3VzdG9tIGV2ZW50IGhhbmRsZXIuXG4tfVxub25TdWJtaXQgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25TdWJtaXQgbXNnID1cbiAgcHJldmVudERlZmF1bHRPbiBcInN1Ym1pdFwiIChKc29uLm1hcCBhbHdheXNQcmV2ZW50RGVmYXVsdCAoSnNvbi5zdWNjZWVkIG1zZykpXG5cblxuYWx3YXlzUHJldmVudERlZmF1bHQgOiBtc2cgLT4geyBtZXNzYWdlIDogbXNnLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfVxuYWx3YXlzUHJldmVudERlZmF1bHQgbXNnID1cbiAgeyBtZXNzYWdlID0gbXNnXG4gICwgcHJldmVudERlZmF1bHQgPSBUcnVlXG4gIH1cblxuXG5cbi0tIEZPQ1VTIEVWRU5UU1xuXG5cbnstfC19XG5vbkJsdXIgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25CbHVyIG1zZyA9XG4gIG9uIFwiYmx1clwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbkZvY3VzIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uRm9jdXMgbXNnID1cbiAgb24gXCJmb2N1c1wiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cblxuLS0gQ1VTVE9NIEVWRU5UU1xuXG5cbnstfCBDcmVhdGUgYSBjdXN0b20gZXZlbnQgbGlzdGVuZXIuIE5vcm1hbGx5IHRoaXMgd2lsbCBub3QgYmUgbmVjZXNzYXJ5LCBidXRcbnlvdSBoYXZlIHRoZSBwb3dlciEgSGVyZSBpcyBob3cgYG9uQ2xpY2tgIGlzIGRlZmluZWQgZm9yIGV4YW1wbGU6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBvbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNsaWNrIG1lc3NhZ2UgPVxuICAgICAgb24gXCJjbGlja1wiIChEZWNvZGUuc3VjY2VlZCBtZXNzYWdlKVxuXG5UaGUgZmlyc3QgYXJndW1lbnQgaXMgdGhlIGV2ZW50IG5hbWUgaW4gdGhlIHNhbWUgZm9ybWF0IGFzIHdpdGggSmF2YVNjcmlwdCdzXG5bYGFkZEV2ZW50TGlzdGVuZXJgXVthRUxdIGZ1bmN0aW9uLlxuXG5UaGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgSlNPTiBkZWNvZGVyLiBSZWFkIG1vcmUgYWJvdXQgdGhlc2UgW2hlcmVdW2RlY29kZXJdLlxuV2hlbiBhbiBldmVudCBvY2N1cnMsIHRoZSBkZWNvZGVyIHRyaWVzIHRvIHR1cm4gdGhlIGV2ZW50IG9iamVjdCBpbnRvIGFuIEdyZW5cbnZhbHVlLiBJZiBzdWNjZXNzZnVsLCB0aGUgdmFsdWUgaXMgcm91dGVkIHRvIHlvdXIgYHVwZGF0ZWAgZnVuY3Rpb24uIEluIHRoZVxuY2FzZSBvZiBgb25DbGlja2Agd2UgYWx3YXlzIGp1c3Qgc3VjY2VlZCB3aXRoIHRoZSBnaXZlbiBgbWVzc2FnZWAuXG5cbklmIHRoaXMgaXMgY29uZnVzaW5nLCB3b3JrIHRocm91Z2ggdGhlIFtFbG0gQXJjaGl0ZWN0dXJlIFR1dG9yaWFsXVt0dXRvcmlhbF0uXG5JdCByZWFsbHkgaGVscHMhXG5cblthRUxdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lclxuW2RlY29kZXJdOiAvcGFja2FnZXMvZWxtL2pzb24vbGF0ZXN0L0pzb24tRGVjb2RlXG5bdHV0b3JpYWxdOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbmN6L2VsbS1hcmNoaXRlY3R1cmUtdHV0b3JpYWwvXG5cbioqTm90ZToqKiBUaGlzIGNyZWF0ZXMgYSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciwgZW5hYmxpbmcgb3B0aW1pemF0aW9ucyBmb3JcbnRvdWNoLCBzY3JvbGwsIGFuZCB3aGVlbCBldmVudHMgaW4gc29tZSBicm93c2Vycy5cblxuW3Bhc3NpdmVdOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuLX1cbm9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub24gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uTm9ybWFsIGRlY29kZXIpXG5cblxuey18IENyZWF0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IG1heSBbYHN0b3BQcm9wYWdhdGlvbmBdW3N0b3BdLiBZb3VyIGRlY29kZXJcbm11c3QgcHJvZHVjZSBhIG1lc3NhZ2UgYW5kIGEgYEJvb2xgIHRoYXQgZGVjaWRlcyBpZiBgc3RvcFByb3BhZ2F0aW9uYCBzaG91bGRcbmJlIGNhbGxlZC5cblxuW3N0b3BdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvc3RvcFByb3BhZ2F0aW9uXG5cbioqTm90ZToqKiBUaGlzIGNyZWF0ZXMgYSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciwgZW5hYmxpbmcgb3B0aW1pemF0aW9ucyBmb3JcbnRvdWNoLCBzY3JvbGwsIGFuZCB3aGVlbCBldmVudHMgaW4gc29tZSBicm93c2Vycy5cblxuW3Bhc3NpdmVdOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuLX1cbnN0b3BQcm9wYWdhdGlvbk9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5zdG9wUHJvcGFnYXRpb25PbiBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5NYXlTdG9wUHJvcGFnYXRpb24gZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgcHJldmVudERlZmF1bHRgXVtwcmV2ZW50XS4gWW91ciBkZWNvZGVyXG5tdXN0IHByb2R1Y2UgYSBtZXNzYWdlIGFuZCBhIGBCb29sYCB0aGF0IGRlY2lkZXMgaWYgYHByZXZlbnREZWZhdWx0YCBzaG91bGRcbmJlIGNhbGxlZC5cblxuRm9yIGV4YW1wbGUsIHRoZSBgb25TdWJtaXRgIGZ1bmN0aW9uIGluIHRoaXMgbGlicmFyeSAqYWx3YXlzKiBwcmV2ZW50cyB0aGVcbmRlZmF1bHQgYmVoYXZpb3I6XG5cbltwcmV2ZW50XTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5cbiAgICBvblN1Ym1pdCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25TdWJtaXQgbXNnID1cbiAgICAgIHByZXZlbnREZWZhdWx0T24gXCJzdWJtaXRcIiAoSnNvbi5tYXAgYWx3YXlzUHJldmVudERlZmF1bHQgKEpzb24uc3VjY2VlZCBtc2cpKVxuXG4gICAgYWx3YXlzUHJldmVudERlZmF1bHQgOiBtc2cgLT4gKCBtc2csIEJvb2wgKVxuICAgIGFsd2F5c1ByZXZlbnREZWZhdWx0IG1zZyA9XG4gICAgICAoIG1zZywgVHJ1ZSApXG4tfVxucHJldmVudERlZmF1bHRPbiA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5wcmV2ZW50RGVmYXVsdE9uIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLk1heVByZXZlbnREZWZhdWx0IGRlY29kZXIpXG5cblxuey18IENyZWF0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IG1heSBbYHN0b3BQcm9wYWdhdGlvbmBdW3N0b3BdIG9yXG5bYHByZXZlbnREZWZhdWx0YF1bcHJldmVudF0uXG5cbltzdG9wXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuW3ByZXZlbnRdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHRcbltoYW5kbGVyXTogaHR0cHM6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0vdmlydHVhbC1kb20vbGF0ZXN0L1ZpcnR1YWxEb20jSGFuZGxlclxuXG4qKk5vdGU6KiogQ2hlY2sgb3V0IHRoZSBsb3dlci1sZXZlbCBldmVudCBBUEkgaW4gYGVsbS92aXJ0dWFsLWRvbWAgZm9yIG1vcmVcbmluZm9ybWF0aW9uIG9uIGV4YWN0bHkgaG93IGV2ZW50cyB3b3JrLCBlc3BlY2lhbGx5IHRoZSBbYEhhbmRsZXJgXVtoYW5kbGVyXVxuZG9jcy5cbi19XG5jdXN0b20gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCwgcHJldmVudERlZmF1bHQgOiBCb29sIH0gLT4gQXR0cmlidXRlIG1zZ1xuY3VzdG9tIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLkN1c3RvbSBkZWNvZGVyKVxuXG5cblxuLS0gQ09NTU9OIERFQ09ERVJTXG5cblxuey18IEEgYEpzb24uRGVjb2RlcmAgZm9yIGdyYWJiaW5nIGBldmVudC50YXJnZXQudmFsdWVgLiBXZSB1c2UgdGhpcyB0byBkZWZpbmVcbmBvbklucHV0YCBhcyBmb2xsb3dzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuICAgIG9uSW5wdXQgOiAoU3RyaW5nIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uSW5wdXQgdGFnZ2VyID1cbiAgICAgIHN0b3BQcm9wYWdhdGlvbk9uIFwiaW5wdXRcIiA8fFxuICAgICAgICBKc29uLm1hcCBhbHdheXNTdG9wIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0VmFsdWUpXG5cbiAgICBhbHdheXNTdG9wIDogYSAtPiAoYSwgQm9vbClcbiAgICBhbHdheXNTdG9wIHggPVxuICAgICAgKHgsIFRydWUpXG5cbllvdSBwcm9iYWJseSB3aWxsIG5ldmVyIG5lZWQgdGhpcywgYnV0IGhvcGVmdWxseSBpdCBnaXZlcyBzb21lIGluc2lnaHRzIGludG9cbmhvdyB0byBtYWtlIGN1c3RvbSBldmVudCBoYW5kbGVycy5cbi19XG50YXJnZXRWYWx1ZSA6IEpzb24uRGVjb2RlciBTdHJpbmdcbnRhcmdldFZhbHVlID1cbiAgSnNvbi5hdCBbXCJ0YXJnZXRcIiwgXCJ2YWx1ZVwiXSBKc29uLnN0cmluZ1xuXG5cbnstfCBBIGBKc29uLkRlY29kZXJgIGZvciBncmFiYmluZyBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgLiBXZSB1c2UgdGhpcyB0byBkZWZpbmVcbmBvbkNoZWNrYCBhcyBmb2xsb3dzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuICAgIG9uQ2hlY2sgOiAoQm9vbCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNoZWNrIHRhZ2dlciA9XG4gICAgICBvbiBcImlucHV0XCIgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRDaGVja2VkKVxuLX1cbnRhcmdldENoZWNrZWQgOiBKc29uLkRlY29kZXIgQm9vbFxudGFyZ2V0Q2hlY2tlZCA9XG4gIEpzb24uYXQgW1widGFyZ2V0XCIsIFwiY2hlY2tlZFwiXSBKc29uLmJvb2xcblxuXG57LXwgQSBgSnNvbi5EZWNvZGVyYCBmb3IgZ3JhYmJpbmcgYGV2ZW50LmtleUNvZGVgLiBUaGlzIGhlbHBzIHlvdSBkZWZpbmVcbmtleWJvYXJkIGxpc3RlbmVycyBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25LZXlVcCA6IChJbnQgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25LZXlVcCB0YWdnZXIgPVxuICAgICAgb24gXCJrZXl1cFwiIChKc29uLm1hcCB0YWdnZXIga2V5Q29kZSlcblxuKipOb3RlOioqIEl0IGxvb2tzIGxpa2UgdGhlIHNwZWMgaXMgbW92aW5nIGF3YXkgZnJvbSBgZXZlbnQua2V5Q29kZWAgYW5kXG50b3dhcmRzIGBldmVudC5rZXlgLiBPbmNlIHRoaXMgaXMgc3VwcG9ydGVkIGluIG1vcmUgYnJvd3NlcnMsIHdlIG1heSBhZGRcbmhlbHBlcnMgaGVyZSBmb3IgYG9uS2V5VXBgLCBgb25LZXlEb3duYCwgYG9uS2V5UHJlc3NgLCBldGMuXG4tfVxua2V5Q29kZSA6IEpzb24uRGVjb2RlciBJbnRcbmtleUNvZGUgPVxuICBKc29uLmZpZWxkIFwia2V5Q29kZVwiIEpzb24uaW50XG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5BdHRyaWJ1dGVzLkFyaWEgZXhwb3NpbmdcbiAgICAoIHJvbGVcbiAgICAsIGFjdGl2ZURlc2NlbmRhbnRcbiAgICAsIGNoZWNrZWRcbiAgICAsIGNvbnRyb2xzXG4gICAgLCBkZXNjcmliZWRieVxuICAgICwgZGlzYWJsZWRcbiAgICAsIGV4cGFuZGVkXG4gICAgLCBoYXNQb3B1cFxuICAgICwgaGlkZGVuXG4gICAgLCBsYWJlbFxuICAgICwgbGFiZWxsZWRieVxuICAgICwgbGl2ZVxuICAgICwgcHJlc3NlZFxuICAgICwgcmVhZG9ubHlcbiAgICAsIHJlcXVpcmVkXG4gICAgLCBzZWxlY3RlZFxuICAgICwgc29ydFxuICAgICwgdmFsdWVNYXhcbiAgICAsIHZhbHVlTWluXG4gICAgLCB2YWx1ZU5vd1xuICAgIClcblxuey18IEFkZGl0aW9uYWwgYXR0cmlidXRlcyBmb3IgaHRtbFxuXG5cbiMgQXJpYSByb2xlXG5cbkBkb2NzIHJvbGVcblxuXG4jIEFyaWEgQXR0cmlidXRlc1xuXG5AZG9jcyBhY3RpdmVEZXNjZW5kYW50XG5AZG9jcyBjaGVja2VkXG5AZG9jcyBjb250cm9sc1xuQGRvY3MgZGVzY3JpYmVkYnlcbkBkb2NzIGRpc2FibGVkXG5AZG9jcyBleHBhbmRlZFxuQGRvY3MgaGFzUG9wdXBcbkBkb2NzIGhpZGRlblxuQGRvY3MgbGFiZWxcbkBkb2NzIGxhYmVsbGVkYnlcbkBkb2NzIGxpdmVcbkBkb2NzIHByZXNzZWRcbkBkb2NzIHJlYWRvbmx5XG5AZG9jcyByZXF1aXJlZFxuQGRvY3Mgc2VsZWN0ZWRcbkBkb2NzIHNvcnRcbkBkb2NzIHZhbHVlTWF4XG5AZG9jcyB2YWx1ZU1pblxuQGRvY3MgdmFsdWVOb3dcblxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSlcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmcgKGF0dHJpYnV0ZSlcbmltcG9ydCBKc29uLkVuY29kZSBhcyBKRVxuXG5cbmJvb2xBdHRyaWJ1dGUgOiBTdHJpbmcgLT4gQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5ib29sQXR0cmlidXRlIG5hbWUgdmFsID1cbiAgICBhdHRyaWJ1dGUgbmFtZSAoSkUuZW5jb2RlIDAgPHwgSkUuYm9vbCB2YWwpXG5cblxuZmxvYXRBdHRyaWJ1dGUgOiBTdHJpbmcgLT4gRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xuZmxvYXRBdHRyaWJ1dGUgbmFtZSB2YWwgPVxuICAgIGF0dHJpYnV0ZSBuYW1lIChTdHJpbmcuZnJvbUZsb2F0IHZhbClcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgY3VycmVudGx5IGFjdGl2ZSBkZXNjZW5kYW50IG9mIGEgY29tcG9zaXRlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWFjdGl2ZWRlc2NlbmRhbnQpLlxuXG4gICAgZGl2IFsgYWN0aXZlRGVzY2VuZGFudCBcImlkXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmFjdGl2ZURlc2NlbmRhbnQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWN0aXZlRGVzY2VuZGFudCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwiY2hlY2tlZFwiIHN0YXRlIG9mIGNoZWNrYm94ZXMsIHJhZGlvIGJ1dHRvbnMsIGFuZCBvdGhlciB3aWRnZXRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtY2hlY2tlZCkuXG5cbiAgICBkaXYgWyBjaGVja2VkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5jaGVja2VkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNoZWNrZWQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtY2hlY2tlZFwiXG5cblxuey18IElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB3aG9zZSBjb250ZW50cyBvciBwcmVzZW5jZSBhcmUgY29udHJvbGxlZCBieSB0aGUgY3VycmVudCBlbGVtZW50LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtY29udHJvbHMpLlxuXG4gICAgZGl2IFsgY29udHJvbHMgXCJkcm9wZG93bi1tZW51XCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmNvbnRyb2xzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRyb2xzID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWNvbnRyb2xzXCJcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHRoYXQgZGVzY3JpYmVzIHRoZSBvYmplY3QuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1kZXNjcmliZWRieSkuXG5cbiAgICBkaXYgWyBkZXNjcmliZWRieSBcImlkXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmRlc2NyaWJlZGJ5IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRlc2NyaWJlZGJ5ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWRlc2NyaWJlZGJ5XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgaXMgcGVyY2VpdmFibGUgYnV0IGRpc2FibGVkLCBzbyBpdCBpcyBub3QgZWRpdGFibGUgb3Igb3RoZXJ3aXNlIG9wZXJhYmxlLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtZGlzYWJsZWQpLlxuXG4gICAgZGl2IFsgZGlzYWJsZWQgVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuZGlzYWJsZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmRpc2FibGVkID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1kaXNhYmxlZFwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50LCBvciBhbm90aGVyIGdyb3VwaW5nIGVsZW1lbnQgaXQgY29udHJvbHMsIGlzIGN1cnJlbnRseSBleHBhbmRlZCBvciBjb2xsYXBzZWQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1leHBhbmRlZCkuXG5cbiAgICBkaXYgWyBleHBhbmRlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuZXhwYW5kZWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZXhwYW5kZWQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtZXhwYW5kZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGF2YWlsYWJpbGl0eSBhbmQgdHlwZSBvZiBpbnRlcmFjdGl2ZSBwb3B1cCBlbGVtZW50LCBzdWNoIGFzIG1lbnUgb3IgZGlhbG9nLCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYnkgYW4gZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWhhc3BvcHVwKS5cblxuICAgIGRpdiBbIGhhc1BvcHVwIFwibWVudVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5oYXNQb3B1cCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5oYXNQb3B1cCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1oYXNwb3B1cFwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGFuZCBhbGwgb2YgaXRzIGRlc2NlbmRhbnRzIGFyZSBub3QgdmlzaWJsZSBvciBwZXJjZWl2YWJsZSB0byBhbnkgdXNlciBhcyBpbXBsZW1lbnRlZCBieSB0aGUgYXV0aG9yLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtaGlkZGVuKS5cblxuICAgIGRpdiBbIGhpZGRlbiBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5oaWRkZW4gOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmhpZGRlbiA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtaGlkZGVuXCJcblxuXG57LXwgRGVmaW5lcyBhIHN0cmluZyB2YWx1ZSB0aGF0IGxhYmVscyB0aGUgY3VycmVudCBlbGVtZW50LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtbGFiZWwpLlxuXG4gICAgZGl2IFsgbGFiZWwgXCJsYWJlbFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5sYWJlbCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYWJlbCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1sYWJlbFwiXG5cblxuey18IElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB0aGF0IGxhYmVscyB0aGUgY3VycmVudCBlbGVtZW50LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtbGFiZWxsZWRieSkuXG5cbiAgICBkaXYgWyBsYWJlbGxlZGJ5IFwiaWRcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxubGFiZWxsZWRieSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYWJlbGxlZGJ5ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWxhYmVsbGVkYnlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCBhbiBlbGVtZW50IHdpbGwgYmUgdXBkYXRlZCwgYW5kIGRlc2NyaWJlcyB0aGUgdHlwZXMgb2YgdXBkYXRlcyB0aGUgdXNlciBhZ2VudHMsXG5hc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBhbmQgdXNlciBjYW4gZXhwZWN0IGZyb20gdGhlIGxpdmUgcmVnaW9uLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtbGl2ZSkuXG5cbiAgICBpbnB1dCBbIGxpdmUgXCJhc3NlcnRpdmVcIiBdIFtdXG5cbi19XG5saXZlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxpdmUgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtbGl2ZVwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcInByZXNzZWRcIiBzdGF0ZSBvZiB0b2dnbGUgYnV0dG9ucy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXByZXNzZWQpLlxuXG4gICAgYnV0dG9uIFsgcHJlc3NlZCBUcnVlIF0gWyB0ZXh0IFwiU3VibWl0XCIgXVxuXG4tfVxucHJlc3NlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucHJlc3NlZCA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtcHJlc3NlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGlzIG5vdCBlZGl0YWJsZSwgYnV0IGlzIG90aGVyd2lzZSBvcGVyYWJsZS5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXJlYWRvbmx5KS5cblxuICAgIGRpdiBbIHJlYWRvbmx5IFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbnJlYWRvbmx5IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZWFkb25seSA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtcmVhZG9ubHlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB1c2VyIGlucHV0IGlzIHJlcXVpcmVkIG9uIHRoZSBlbGVtZW50IGJlZm9yZSBhIGZvcm0gbWF5IGJlIHN1Ym1pdHRlZC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXJlcXVpcmVkKS5cblxuICAgIGRpdiBbIHJlcXVpcmVkIFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbnJlcXVpcmVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZXF1aXJlZCA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtcmVxdWlyZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJzZWxlY3RlZFwiIHN0YXRlIG9mIHZhcmlvdXMgd2lkZ2V0cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXNlbGVjdGVkKS5cblxuICAgIGRpdiBbIHNlbGVjdGVkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5zZWxlY3RlZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zZWxlY3RlZCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1zZWxlY3RlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcInNlbGVjdGVkXCIgc3RhdGUgb2YgdmFyaW91cyB3aWRnZXRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtc2VsZWN0ZWQpLlxuXG4gICAgZGl2IFsgc2VsZWN0ZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbnNvcnQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc29ydCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1zb3J0XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXZhbHVlbWF4KS5cblxuICAgIGRpdiBbIHZhbHVlTWF4IDEwLCByb2xlIFwicHJvZ3Jlc3NiYXJcIiBdIFtdXG5cbi19XG52YWx1ZU1heCA6IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbnZhbHVlTWF4ID1cbiAgICBmbG9hdEF0dHJpYnV0ZSBcImFyaWEtdmFsdWVtYXhcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtaW5pbXVtIGFsbG93ZWQgdmFsdWUgZm9yIGEgcmFuZ2Ugd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtdmFsdWVtaW4pLlxuXG4gICAgZGl2IFsgdmFsdWVNaW4gMSwgcm9sZSBcInByb2dyZXNzYmFyXCIgXSBbXVxuXG4tfVxudmFsdWVNaW4gOiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZU1pbiA9XG4gICAgZmxvYXRBdHRyaWJ1dGUgXCJhcmlhLXZhbHVlbWluXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgY3VycmVudCB2YWx1ZSBmb3IgYSByYW5nZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS12YWx1ZW5vdykuXG5cbiAgICBkaXYgWyB2YWx1ZU5vdyA0LCByb2xlIFwicHJvZ3Jlc3NiYXJcIiBdIFtdXG5cbi19XG52YWx1ZU5vdyA6IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbnZhbHVlTm93ID1cbiAgICBmbG9hdEF0dHJpYnV0ZSBcImFyaWEtdmFsdWVub3dcIlxuXG5cbnstfCBBbiBhdHRyaWJ1dGUgdG8gc3VwcG9ydCB0aGUgcm9sZSBjbGFzc2lmaWNhdGlvbiBvZiBlbGVtZW50cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvcm9sZS1hdHRyaWJ1dGUpLlxuXG4gICAgZGl2IFsgcm9sZSBcImJ1dHRvblwiIF0gWyB0ZXh0IFwiU3VibWl0XCIgXVxuXG4tfVxucm9sZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5yb2xlID1cbiAgICBhdHRyaWJ1dGUgXCJyb2xlXCJcbiIsCiAgICAgICAgIm1vZHVsZSBNYXliZSBleHBvc2luZ1xuICAgICggTWF5YmUoLi4pXG4gICAgLCBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwga2VlcElmXG4gICAgLCB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIGFuZFRoZW5cbiAgICApXG5cbnstfCBUaGlzIGxpYnJhcnkgZmlsbHMgYSBidW5jaCBvZiBpbXBvcnRhbnQgbmljaGVzIGluIEdyZW4uIEEgYE1heWJlYCBjYW4gaGVscFxueW91IHdpdGggb3B0aW9uYWwgYXJndW1lbnRzLCBlcnJvciBoYW5kbGluZywgYW5kIHJlY29yZHMgd2l0aCBvcHRpb25hbCBmaWVsZHMuXG5cbkBkb2NzIE1heWJlXG5cblxuIyMgUXVlcmllc1xuXG5AZG9jcyBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwga2VlcElmXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIHdpdGhEZWZhdWx0LCB3aXRoRGVmYXVsdExhenksIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgYW5kVGhlblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcblxuXG57LXwgUmVwcmVzZW50IHZhbHVlcyB0aGF0IG1heSBvciBtYXkgbm90IGV4aXN0LiBJdCBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIGFcbnJlY29yZCBmaWVsZCB0aGF0IGlzIG9ubHkgZmlsbGVkIGluIHNvbWV0aW1lcy4gT3IgaWYgYSBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlXG5zb21ldGltZXMsIGJ1dCBkb2VzIG5vdCBhYnNvbHV0ZWx5IG5lZWQgaXQuXG5cbiAgICAtLSBBIHBlcnNvbiwgYnV0IG1heWJlIHdlIGRvIG5vdCBrbm93IHRoZWlyIGFnZS5cbiAgICB0eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICAgICAsIGFnZSA6IE1heWJlIEludFxuICAgICAgICB9XG5cbiAgICB0b20gPVxuICAgICAgICB7IG5hbWUgPSBcIlRvbVwiLCBhZ2UgPSBKdXN0IDQyIH1cblxuICAgIHN1ZSA9XG4gICAgICAgIHsgbmFtZSA9IFwiU3VlXCIsIGFnZSA9IE5vdGhpbmcgfVxuXG4tfVxudHlwZSBNYXliZSBhXG4gICAgPSBKdXN0IGFcbiAgICB8IE5vdGhpbmdcblxuXG57LXwgQ2hlY2tzIHRvIHNlZSBpZiB0aGUgW01heWJlXSgjTWF5YmUpIGlzIGBKdXN0YCwgYW5kIHRoYXQgdGhlIGNvbnRhaW5lZCB2YWx1ZVxuZXF1YWxzIGEgcHJvdmlkZWQgY29uc3RhbnQuXG5cbiAgICBoYXNWYWx1ZSA1IChKdXN0IDUpID09IFRydWVcblxuICAgIGhhc1ZhbHVlIDUgKEp1c3QgMykgPT0gRmFsc2VcblxuICAgIGhhc1ZhbHVlIDUgTm90aGluZyA9PSBGYWxzZVxuXG4tfVxuaGFzVmFsdWUgOiBhIC0+IE1heWJlIGEgLT4gQm9vbFxuaGFzVmFsdWUgdmFsdWUgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBjb250YWluZWQgLT5cbiAgICAgICAgICAgIGNvbnRhaW5lZCA9PSB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IENoZWNrcyB0byBzZWUgaWYgdGhlIFtNYXliZV0oI01heWJlKSBpcyBgSnVzdGAsIGFuZCB0aGF0IHRoZSBjb250YWluZWQgdmFsdWVcbnBhc3NlcyB0aGUgcHJvdmlkZWQgdGVzdC5cblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgKEp1c3QgNSkgPT0gVHJ1ZVxuXG4gICAgY2hlY2tWYWx1ZSBpc09kZCAoSnVzdCAyKSA9PSBGYWxzZVxuXG4gICAgY2hlY2tWYWx1ZSBpc09kZCBOb3RoaW5nID09IEZhbHNlXG5cbi19XG5jaGVja1ZhbHVlIDogKGEgLT4gQm9vbCkgLT4gTWF5YmUgYSAtPiBCb29sXG5jaGVja1ZhbHVlIHRlc3QgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBjb250YWluZWQgLT5cbiAgICAgICAgICAgIHRlc3QgY29udGFpbmVkXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgUHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUsIHR1cm5pbmcgYW4gb3B0aW9uYWwgdmFsdWUgaW50byBhIG5vcm1hbFxudmFsdWUuIFRoaXMgY29tZXMgaW4gaGFuZHkgd2hlbiBwYWlyZWQgd2l0aCBmdW5jdGlvbnMgbGlrZVxuW2BEaWN0LmdldGBdKERpY3QjZ2V0KSB3aGljaCBnaXZlcyBiYWNrIGEgYE1heWJlYC5cblxuICAgIHdpdGhEZWZhdWx0IDEwMCAoSnVzdCA0MikgPT0gNDJcbiAgICBcbiAgICB3aXRoRGVmYXVsdCAxMDAgTm90aGluZyA9PSAxMDBcbiAgICBcbiAgICB3aXRoRGVmYXVsdCBcInVua25vd25cIiAoRGljdC5nZXQgXCJUb21cIiBEaWN0LmVtcHR5KSA9PSBcInVua25vd25cIlxuXG4tfVxud2l0aERlZmF1bHQgOiBhIC0+IE1heWJlIGEgLT4gYVxud2l0aERlZmF1bHQgZGVmYXVsdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRlZmF1bHRcblxuXG57LXwgU2FtZSBhcyBbd2l0aERlZmF1bHRdKCN3aXRoRGVmYXVsdCkgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIGlzIHdyYXBwZWQgaW5cbmEgZnVuY3Rpb24uIFRoaXMgaXMgdXNlZnVsIHdoZW4gY29tcHV0aW5nIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGV4cGVuc2l2ZSwgYXNcbnlvdSBjYW4gY29tcHV0ZSBpdCBvbmx5IHdoZW4gaXQgaXMgcmVxdWlyZWQuXG5cbkluIG1vc3QgY2FzZXMgeW91IHNob3VsZCB1c2UgcGF0dGVybiBtYXRjaGluZyBvciBbd2l0aERlZmF1bHRdKCN3aXRoRGVmYXVsdCkgaW5zdGVhZC5cblxuLX1cbndpdGhEZWZhdWx0TGF6eSA6ICh7fSAtPiBhKSAtPiBNYXliZSBhIC0+IGFcbndpdGhEZWZhdWx0TGF6eSBkZWZhdWx0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGVmYXVsdCB7fVxuXG5cbnstfCBUcmFuc2Zvcm0gYSBgTWF5YmVgIHZhbHVlIHdpdGggYSBnaXZlbiBmdW5jdGlvbjpcblxuICAgIG1hcCBzcXJ0IChKdXN0IDkpID09IEp1c3QgM1xuXG4gICAgbWFwIHNxcnQgTm90aGluZyA9PSBOb3RoaW5nXG5cbiAgICBtYXAgc3FydCAoU3RyaW5nLnRvRmxvYXQgXCI5XCIpID09IEp1c3QgM1xuXG4gICAgbWFwIHNxcnQgKFN0cmluZy50b0Zsb2F0IFwieFwiKSA9PSBOb3RoaW5nXG5cbi19XG5tYXAgOiAoYSAtPiBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbm1hcCBmIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIEp1c3QgKGYgdmFsdWUpXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIGlmIGFsbCB0aGUgYXJndW1lbnRzIGFyZSBgSnVzdGAgYSB2YWx1ZS5cblxuICAgIG1hcDIgKCspIChKdXN0IDMpIChKdXN0IDQpID09IEp1c3QgN1xuXG4gICAgbWFwMiAoKykgKEp1c3QgMykgTm90aGluZyA9PSBOb3RoaW5nXG5cbiAgICBtYXAyICgrKSBOb3RoaW5nIChKdXN0IDQpID09IE5vdGhpbmdcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCIxXCIpIChTdHJpbmcudG9JbnQgXCIxMjNcIikgPT0gSnVzdCAxMjRcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCJ4XCIpIChTdHJpbmcudG9JbnQgXCIxMjNcIikgPT0gTm90aGluZ1xuXG4gICAgbWFwMiAoKykgKFN0cmluZy50b0ludCBcIjFcIikgKFN0cmluZy50b0ludCBcIjEuM1wiKSA9PSBOb3RoaW5nXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIHZhbHVlXG5tYXAyIGZ1bmMgbWEgbWIgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiKVxuXG5cbnstfCAtfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgdmFsdWVcbm1hcDMgZnVuYyBtYSBtYiBtYyA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIgYylcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgZCAtPiBNYXliZSB2YWx1ZVxubWFwNCBmdW5jIG1hIG1iIG1jIG1kID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIG1jIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1kIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMgZClcblxuXG57LXwgLX1cbm1hcDUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IHZhbHVlKSAtPiBNYXliZSBhIC0+IE1heWJlIGIgLT4gTWF5YmUgYyAtPiBNYXliZSBkIC0+IE1heWJlIGUgLT4gTWF5YmUgdmFsdWVcbm1hcDUgZnVuYyBtYSBtYiBtYyBtZCBtZSA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1lIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGUgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIgYyBkIGUpXG5cblxuey18IFJldHVybnMgYE5vdGhpbmdgIGlmIHRoZSBjb250YWluZWQgdmFsdWUgZG9lc24ndCBwYXNzIHRoZSBnaXZlblxudGVzdC5cblxuICAgIGtlZXBJZiBpc09kZCAoSnVzdCA1KSA9PSBKdXN0IDVcblxuICAgIGtlZXBJZiBpc09kZCAoSnVzdCAyKSA9PSBOb3RoaW5nXG5cbi19XG5rZWVwSWYgOiAoYSAtPiBCb29sKSAtPiBNYXliZSBhIC0+IE1heWJlIGFcbmtlZXBJZiB0ZXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICBpZiB0ZXN0IGNvbnRhaW5lZCB0aGVuXG4gICAgICAgICAgICAgICAgbWF5YmVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IENoYWluIHRvZ2V0aGVyIG1hbnkgY29tcHV0YXRpb25zIHRoYXQgbWF5IGZhaWwuIEl0IGlzIGhlbHBmdWwgdG8gc2VlIGl0c1xuZGVmaW5pdGlvbjpcblxuICAgIGFuZFRoZW4gOiAoYSAtPiBNYXliZSBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbiAgICBhbmRUaGVuIGNhbGxiYWNrIG1heWJlID1cbiAgICAgICAgd2hlbiBtYXliZSBpc1xuICAgICAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICBOb3RoaW5nXG5cblRoaXMgbWVhbnMgd2Ugb25seSBjb250aW51ZSB3aXRoIHRoZSBjYWxsYmFjayBpZiB0aGluZ3MgYXJlIGdvaW5nIHdlbGwuIEZvclxuZXhhbXBsZSwgc2F5IHlvdSBuZWVkIHRvIHBhcnNlIHNvbWUgdXNlciBpbnB1dCBhcyBhIG1vbnRoOlxuXG4gICAgcGFyc2VNb250aCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBwYXJzZU1vbnRoIHVzZXJJbnB1dCA9XG4gICAgICAgIFN0cmluZy50b0ludCB1c2VySW5wdXRcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gdG9WYWxpZE1vbnRoXG5cbiAgICB0b1ZhbGlkTW9udGggOiBJbnQgLT4gTWF5YmUgSW50XG4gICAgdG9WYWxpZE1vbnRoIG1vbnRoID1cbiAgICAgICAgaWYgMSA8PSBtb250aCAmJiBtb250aCA8PSAxMiB0aGVuXG4gICAgICAgICAgICBKdXN0IG1vbnRoXG5cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgTm90aGluZ1xuXG5JbiB0aGUgYHBhcnNlTW9udGhgIGZ1bmN0aW9uLCBpZiBgU3RyaW5nLnRvSW50YCBwcm9kdWNlcyBgTm90aGluZ2AgKGJlY2F1c2VcbnRoZSBgdXNlcklucHV0YCB3YXMgbm90IGFuIGludGVnZXIpIHRoaXMgZW50aXJlIGNoYWluIG9mIG9wZXJhdGlvbnMgd2lsbFxuc2hvcnQtY2lyY3VpdCBhbmQgcmVzdWx0IGluIGBOb3RoaW5nYC4gSWYgYHRvVmFsaWRNb250aGAgcmVzdWx0cyBpbiBgTm90aGluZ2AsXG5hZ2FpbiB0aGUgY2hhaW4gb2YgY29tcHV0YXRpb25zIHdpbGwgcmVzdWx0IGluIGBOb3RoaW5nYC5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBNYXliZSBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbmFuZFRoZW4gY2FsbGJhY2sgbWF5YmVWYWx1ZSA9XG4gICAgd2hlbiBtYXliZVZhbHVlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cblxuLS0gRk9SIElOVEVSTkFMIFVTRSBPTkxZXG4tLVxuLS0gVXNlIGB3aGVuYCBleHByZXNzaW9ucyBmb3IgdGhpcyBpbiBHcmVuIGNvZGUhXG5cblxuaXNKdXN0IDogTWF5YmUgYSAtPiBCb29sXG5pc0p1c3QgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG5kZXN0cnVjdCA6IGIgLT4gKGEgLT4gYikgLT4gTWF5YmUgYSAtPiBiXG5kZXN0cnVjdCBkZWZhdWx0IGZ1bmMgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICBmdW5jIGFcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkZWZhdWx0XG4iLAogICAgICAgICJtb2R1bGUgTWF0aCBleHBvc2luZ1xuICAgICggcm91bmQsIGZsb29yLCBjZWlsaW5nLCB0cnVuY2F0ZVxuICAgICwgbW9kQnksIHJlbWFpbmRlckJ5LCBhYnMsIHNxcnQsIGxvZ0Jhc2VcbiAgICAsIGUsIHBpLCBtYXhTYWZlSW50ZWdlciwgbWluU2FmZUludGVnZXIsIG1heEZsb2F0LCBtaW5GbG9hdFxuICAgICwgZGVncmVlcywgcmFkaWFucywgdHVybnNcbiAgICAsIGNvcywgc2luLCB0YW4sIGFjb3MsIGFzaW4sIGF0YW4sIGF0YW4yXG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciBkb2luZyBtYXRoXG5cbkBkb2NzIHJvdW5kLCBmbG9vciwgY2VpbGluZywgdHJ1bmNhdGUsIG1vZEJ5LCByZW1haW5kZXJCeSwgYWJzLCBzcXJ0LCBsb2dCYXNlXG5cblxuIyMgQ29uc3RhbnRzXG5cbkBkb2NzIGUsIHBpLCBtYXhTYWZlSW50ZWdlciwgbWluU2FmZUludGVnZXIsIG1heEZsb2F0LCBtaW5GbG9hdFxuXG5cbiMjIEFuZ2xlc1xuXG5AZG9jcyBkZWdyZWVzLCByYWRpYW5zLCB0dXJuc1xuXG5cbiMjIFRyaWdvbm9tZXRyeVxuXG5AZG9jcyBjb3MsIHNpbiwgdGFuLCBhY29zLCBhc2luLCBhdGFuLCBhdGFuMlxuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKEludCwgRmxvYXQsICg9PSksICgvKSwgKCopLCAoPCkpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuTWF0aFxuXG5cbnstfCBSb3VuZCBhIG51bWJlciB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLlxuXG4gICAgcm91bmQgMS4wID09IDFcblxuICAgIHJvdW5kIDEuMiA9PSAxXG5cbiAgICByb3VuZCAxLjUgPT0gMlxuXG4gICAgcm91bmQgMS44ID09IDJcblxuICAgIHJvdW5kIC0xLjIgPT0gLTFcblxuICAgIHJvdW5kIC0xLjUgPT0gLTFcblxuICAgIHJvdW5kIC0xLjggPT0gLTJcblxuLX1cbnJvdW5kIDogRmxvYXQgLT4gSW50XG5yb3VuZCA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5yb3VuZFxuXG5cbnstfCBGbG9vciBmdW5jdGlvbiwgcm91bmRpbmcgZG93bi5cblxuICAgIGZsb29yIDEuMCA9PSAxXG5cbiAgICBmbG9vciAxLjIgPT0gMVxuXG4gICAgZmxvb3IgMS41ID09IDFcblxuICAgIGZsb29yIDEuOCA9PSAxXG5cbiAgICBmbG9vciAtMS4yID09IC0yXG5cbiAgICBmbG9vciAtMS41ID09IC0yXG5cbiAgICBmbG9vciAtMS44ID09IC0yXG5cbi19XG5mbG9vciA6IEZsb2F0IC0+IEludFxuZmxvb3IgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguZmxvb3JcblxuXG57LXwgQ2VpbGluZyBmdW5jdGlvbiwgcm91bmRpbmcgdXAuXG5cbiAgICBjZWlsaW5nIDEuMCA9PSAxXG5cbiAgICBjZWlsaW5nIDEuMiA9PSAyXG5cbiAgICBjZWlsaW5nIDEuNSA9PSAyXG5cbiAgICBjZWlsaW5nIDEuOCA9PSAyXG5cbiAgICBjZWlsaW5nIC0xLjIgPT0gLTFcblxuICAgIGNlaWxpbmcgLTEuNSA9PSAtMVxuXG4gICAgY2VpbGluZyAtMS44ID09IC0xXG5cbi19XG5jZWlsaW5nIDogRmxvYXQgLT4gSW50XG5jZWlsaW5nID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmNlaWxpbmdcblxuXG57LXwgVHJ1bmNhdGUgYSBudW1iZXIsIHJvdW5kaW5nIHRvd2FyZHMgemVyby5cblxuICAgIHRydW5jYXRlIDEuMCA9PSAxXG5cbiAgICB0cnVuY2F0ZSAxLjIgPT0gMVxuXG4gICAgdHJ1bmNhdGUgMS41ID09IDFcblxuICAgIHRydW5jYXRlIDEuOCA9PSAxXG5cbiAgICB0cnVuY2F0ZSAtMS4yID09IC0xXG5cbiAgICB0cnVuY2F0ZSAtMS41ID09IC0xXG5cbiAgICB0cnVuY2F0ZSAtMS44ID09IC0xXG5cbi19XG50cnVuY2F0ZSA6IEZsb2F0IC0+IEludFxudHJ1bmNhdGUgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgudHJ1bmNhdGVcblxuXG57LXwgUGVyZm9ybSBbbW9kdWxhciBhcml0aG1ldGljXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2R1bGFyX2FyaXRobWV0aWMpLlxuQSBjb21tb24gdHJpY2sgaXMgdG8gdXNlIChuIG1vZCAyKSB0byBkZXRlY3QgZXZlbiBhbmQgb2RkIG51bWJlcnM6XG5cbiAgICBtb2RCeSAyIDAgPT0gMFxuXG4gICAgbW9kQnkgMiAxID09IDFcblxuICAgIG1vZEJ5IDIgMiA9PSAwXG5cbiAgICBtb2RCeSAyIDMgPT0gMVxuXG5PdXIgYG1vZEJ5YCBmdW5jdGlvbiB3b3JrcyBpbiB0aGUgdHlwaWNhbCBtYXRoZW1hdGljYWwgd2F5IHdoZW4geW91IHJ1biBpbnRvXG5uZWdhdGl2ZSBudW1iZXJzOlxuXG4gICAgTGlzdC5tYXAgKG1vZEJ5IDQpIFsgLTUsIC00LCAtMywgLTIsIC0xLCAgMCwgIDEsICAyLCAgMywgIDQsICA1IF1cbiAgICAtLSAgICAgICAgICAgICAgICAgWyAgMywgIDAsICAxLCAgMiwgIDMsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEgXVxuXG5Vc2UgW2ByZW1haW5kZXJCeWBdKCNyZW1haW5kZXJCeSkgZm9yIGEgZGlmZmVyZW50IHRyZWF0bWVudCBvZiBuZWdhdGl2ZSBudW1iZXJzLFxub3IgcmVhZCBEYWFuIExlaWplbuKAmXMgW0RpdmlzaW9uIGFuZCBNb2R1bHVzIGZvciBDb21wdXRlciBTY2llbnRpc3RzXVtkbV0gZm9yIG1vcmVcbmluZm9ybWF0aW9uLlxuXG5bZG1dOiBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxuXG4tfVxubW9kQnkgOiBJbnQgLT4gSW50IC0+IEludFxubW9kQnkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgubW9kQnlcblxuXG57LXwgR2V0IHRoZSByZW1haW5kZXIgYWZ0ZXIgZGl2aXNpb24uIEhlcmUgYXJlIGJ1bmNoIG9mIGV4YW1wbGVzIG9mIGRpdmlkaW5nIGJ5IGZvdXI6XG5cbiAgICBMaXN0Lm1hcCAocmVtYWluZGVyQnkgNCkgWyAtNSwgLTQsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgNCwgIDUgXVxuICAgIC0tICAgICAgICAgICAgICAgICAgICAgICBbIC0xLCAgMCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICAwLCAgMSBdXG5cblVzZSBbYG1vZEJ5YF0oI21vZEJ5KSBmb3IgYSBkaWZmZXJlbnQgdHJlYXRtZW50IG9mIG5lZ2F0aXZlIG51bWJlcnMsXG5vciByZWFkIERhYW4gTGVpamVu4oCZcyBbRGl2aXNpb24gYW5kIE1vZHVsdXMgZm9yIENvbXB1dGVyIFNjaWVudGlzdHNdW2RtXSBmb3IgbW9yZVxuaW5mb3JtYXRpb24uXG5cbltkbV06IGh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vZW4tdXMvcmVzZWFyY2gvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvZGl2bW9kbm90ZS1sZXR0ZXIucGRmXG5cbi19XG5yZW1haW5kZXJCeSA6IEludCAtPiBJbnQgLT4gSW50XG5yZW1haW5kZXJCeSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5yZW1haW5kZXJCeVxuXG5cbnstfCBHZXQgdGhlIFthYnNvbHV0ZSB2YWx1ZV1bYWJzXSBvZiBhIG51bWJlci5cblxuICAgIGFicyAxNiA9PSAxNlxuXG4gICAgYWJzIC00ID09IDRcblxuICAgIGFicyAtOC41ID09IDguNVxuXG4gICAgYWJzIDMuMTQgPT0gMy4xNFxuXG5bYWJzXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQWJzb2x1dGVfdmFsdWVcblxuLX1cbmFicyA6IG51bWJlciAtPiBudW1iZXJcbmFicyBuID1cbiAgICBpZiBuIDwgMCB0aGVuXG4gICAgICAgIC1uXG5cbiAgICBlbHNlXG4gICAgICAgIG5cblxuey18IFRha2UgdGhlIHNxdWFyZSByb290IG9mIGEgbnVtYmVyLlxuXG4gICAgc3FydCA0ID09IDJcblxuICAgIHNxcnQgOSA9PSAzXG5cbiAgICBzcXJ0IDE2ID09IDRcblxuICAgIHNxcnQgMjUgPT0gNVxuXG4tfVxuc3FydCA6IEZsb2F0IC0+IEZsb2F0XG5zcXJ0ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnNxcnRcblxuXG57LXwgQ2FsY3VsYXRlIHRoZSBsb2dhcml0aG0gb2YgYSBudW1iZXIgd2l0aCBhIGdpdmVuIGJhc2UuXG5cbiAgICBsb2dCYXNlIDEwIDEwMCA9PSAyXG5cbiAgICBsb2dCYXNlIDIgMjU2ID09IDhcblxuLX1cbmxvZ0Jhc2UgOiBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdFxubG9nQmFzZSBiYXNlIG51bWJlciA9XG4gICAgaWYgYmFzZSA9PSAxMCB0aGVuXG4gICAgICAgIEdyZW4uS2VybmVsLk1hdGgubG9nMTAgbnVtYmVyXG5cbiAgICBlbHNlXG4gICAgICAgIChHcmVuLktlcm5lbC5NYXRoLmxvZyBudW1iZXIpIC8gKEdyZW4uS2VybmVsLk1hdGgubG9nIGJhc2UpXG5cblxuLS0gQU5HTEVTXG5cblxuey18IENvbnZlcnQgcmFkaWFucyB0byBzdGFuZGFyZCBHcmVuIGFuZ2xlcyAocmFkaWFucykuXG5cbiAgICByYWRpYW5zIHBpID09IDMuMTQxNTkyNjUzNTg5NzkzXG5cbi19XG5yYWRpYW5zIDogRmxvYXQgLT4gRmxvYXRcbnJhZGlhbnMgYW5nbGVJblJhZGlhbnMgPVxuICAgIGFuZ2xlSW5SYWRpYW5zXG5cblxuey18IENvbnZlcnQgZGVncmVlcyB0byBzdGFuZGFyZCBHcmVuIGFuZ2xlcyAocmFkaWFucykuXG5cbiAgICBkZWdyZWVzIDE4MCA9PSAzLjE0MTU5MjY1MzU4OTc5M1xuXG4tfVxuZGVncmVlcyA6IEZsb2F0IC0+IEZsb2F0XG5kZWdyZWVzIGFuZ2xlSW5EZWdyZWVzID1cbiAgICAoYW5nbGVJbkRlZ3JlZXMgKiBwaSkgLyAxODBcblxuXG57LXwgQ29udmVydCB0dXJucyB0byBzdGFuZGFyZCBHcmVuIGFuZ2xlcyAocmFkaWFucykuIE9uZSB0dXJuIGlzIGVxdWFsIHRvIDM2MMKwLlxuXG4gICAgdHVybnMgKDEgLyAyKSA9PSAzLjE0MTU5MjY1MzU4OTc5M1xuXG4tfVxudHVybnMgOiBGbG9hdCAtPiBGbG9hdFxudHVybnMgYW5nbGVJblR1cm5zID1cbiAgICAoMiAqIHBpKSAqIGFuZ2xlSW5UdXJuc1xuXG5cbi0tIENPTlNUQU5UU1xuXG5cbnstfCBBbiBhcHByb3hpbWF0aW9uIG9mIGUuXG4tfVxuZSA6IEZsb2F0XG5lID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmVcblxuXG57LXwgQW4gYXBwcm94aW1hdGlvbiBvZiBwaS5cbi19XG5waSA6IEZsb2F0XG5waSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5waVxuXG5cbnstfCBUaGUgbGFyZ2VzdCBpbnRlZ2VyIHZhbHVlIHRoYXQgY2FuIGJlIGV4YWN0bHkgcmVwcmVzZW50ZWQgYW5kIGNvbXBhcmVkIGluIGEgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cbkludGVnZXJzIGFib3ZlIHRoaXMgdmFsdWUgbWF5IG5vdCB3b3JrIGFzIHlvdSBleHBlY3QuXG4tfVxubWF4U2FmZUludGVnZXIgOiBJbnRcbm1heFNhZmVJbnRlZ2VyID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1heFNhZmVJbnRlZ2VyXG5cblxuey18IFRoZSBzbWFsbGVzdCBpbnRlZ2VyIHZhbHVlIHRoYXQgY2FuIGJlIGV4YWN0bHkgcmVwcmVzZW50ZWQgYW5kIGNvbXBhcmVkIGluIGEgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cbkludGVnZXJzIGJlbG93IHRoaXMgdmFsdWUgbWF5IG5vdCB3b3JrIGFzIHlvdSBleHBlY3QuXG4tfVxubWluU2FmZUludGVnZXIgOiBJbnRcbm1pblNhZmVJbnRlZ2VyID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1pblNhZmVJbnRlZ2VyXG5cblxuey18IFRoZSBsYXJnZXN0IGBGbG9hdGAgdmFsdWUuXG4tfVxubWF4RmxvYXQgOiBGbG9hdFxubWF4RmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgubWF4RmxvYXRcblxuXG57LXwgVGhlIHNtYWxsZXN0IGBGbG9hdGAgdmFsdWUuXG4tfVxubWluRmxvYXQgOiBGbG9hdFxubWluRmxvYXQgPVxuICAgIC1tYXhGbG9hdFxuXG5cbi0tIFRSSUdPTk9NRVRSWVxuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBjb3NpbmUgZ2l2ZW4gYW4gYW5nbGUgaW4gcmFkaWFucy5cblxuICAgIGNvcyAoZGVncmVlcyA2MCkgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbiAgICBjb3MgKHR1cm5zICgxIC8gNikpID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4gICAgY29zIChyYWRpYW5zIChwaSAvIDMpKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuICAgIGNvcyAocGkgLyAzKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuLX1cbmNvcyA6IEZsb2F0IC0+IEZsb2F0XG5jb3MgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguY29zXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIHNpbmUgZ2l2ZW4gYW4gYW5nbGUgaW4gcmFkaWFucy5cblxuICAgIHNpbiAoZGVncmVlcyAzMCkgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4gICAgc2luICh0dXJucyAoMSAvIDEyKSkgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4gICAgc2luIChyYWRpYW5zIChwaSAvIDYpKSA9PSAwLjQ5OTk5OTk5OTk5OTk5OTk0XG5cbiAgICBzaW4gKHBpIC8gNikgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4tfVxuc2luIDogRmxvYXQgLT4gRmxvYXRcbnNpbiA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5zaW5cblxuXG57LXwgRmlndXJlIG91dCB0aGUgdGFuZ2VudCBnaXZlbiBhbiBhbmdsZSBpbiByYWRpYW5zLlxuXG4gICAgdGFuIChkZWdyZWVzIDQ1KSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuICAgIHRhbiAodHVybnMgKDEgLyA4KSkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbiAgICB0YW4gKHJhZGlhbnMgKHBpIC8gNCkpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4gICAgdGFuIChwaSAvIDQpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4tfVxudGFuIDogRmxvYXQgLT4gRmxvYXRcbnRhbiA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC50YW5cblxuXG57LXwgRmlndXJlIG91dCB0aGUgYXJjY29zaW5lIGZvciBgYWRqYWNlbnQgLyBoeXBvdGVudXNlYCBpbiByYWRpYW5zOlxuXG4gICAgYWNvcyAoMSAvIDIpID09IDEuMDQ3MTk3NTUxMTk2NTk3OSAtLSA2MMKwIG9yIHBpLzMgcmFkaWFuc1xuXG4tfVxuYWNvcyA6IEZsb2F0IC0+IEZsb2F0XG5hY29zID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmFjb3NcblxuXG57LXwgRmlndXJlIG91dCB0aGUgYXJjc2luZSBmb3IgYG9wcG9zaXRlIC8gaHlwb3RlbnVzZWAgaW4gcmFkaWFuczpcblxuICAgIGFzaW4gKDEgLyAyKSA9PSAwLjUyMzU5ODc3NTU5ODI5ODkgLS0gMzDCsCBvciBwaS82IHJhZGlhbnNcblxuLX1cbmFzaW4gOiBGbG9hdCAtPiBGbG9hdFxuYXNpbiA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hc2luXG5cblxuey18IFRoaXMgaGVscHMgeW91IGZpbmQgdGhlIGFuZ2xlIChpbiByYWRpYW5zKSB0byBhbiBgKHgseSlgIGNvb3JkaW5hdGUsIGJ1dFxuaW4gYSB3YXkgdGhhdCBpcyByYXJlbHkgdXNlZnVsIGluIHByb2dyYW1taW5nLiAqKllvdSBwcm9iYWJseSB3YW50XG5bYGF0YW4yYF0oI2F0YW4yKSBpbnN0ZWFkISoqXG5cblRoaXMgdmVyc2lvbiB0YWtlcyBgeS94YCBhcyBpdHMgYXJndW1lbnQsIHNvIHRoZXJlIGlzIG5vIHdheSB0byBrbm93IHdoZXRoZXJcbnRoZSBuZWdhdGl2ZSBzaWducyBjb21lcyBmcm9tIHRoZSBgeWAgb3IgYHhgIHZhbHVlLiBTbyBhcyB3ZSBnbyBjb3VudGVyLWNsb2Nrd2lzZVxuYXJvdW5kIHRoZSBvcmlnaW4gZnJvbSBwb2ludCBgKDEsMSlgIHRvIGAoMSwtMSlgIHRvIGAoLTEsLTEpYCB0byBgKC0xLDEpYCB3ZSBkb1xubm90IGdldCBhbmdsZXMgdGhhdCBnbyBpbiB0aGUgZnVsbCBjaXJjbGU6XG5cbiAgICBhdGFuICgxIC8gMSkgPT0gMC43ODUzOTgxNjMzOTc0NDgzIC0tICA0NcKwIG9yICAgcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuICgxIC8gLTEpID09IC0wLjc4NTM5ODE2MzM5NzQ0ODMgLS0gMzE1wrAgb3IgNypwaS80IHJhZGlhbnNcblxuICAgIGF0YW4gKC0xIC8gLTEpID09IDAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAgNDXCsCBvciAgIHBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbiAoLTEgLyAxKSA9PSAtMC43ODUzOTgxNjMzOTc0NDgzIC0tIDMxNcKwIG9yIDcqcGkvNCByYWRpYW5zXG5cbk5vdGljZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgYmV0d2VlbiBgcGkvMmAgYW5kIGAtcGkvMmAuIFRoYXQgaXMgcHJldHR5IHVzZWxlc3NcbmZvciBmaWd1cmluZyBvdXQgYW5nbGVzIGluIGFueSBzb3J0IG9mIHZpc3VhbGl6YXRpb24sIHNvIGFnYWluLCBjaGVjayBvdXRcbltgYXRhbjJgXSgjYXRhbjIpIGluc3RlYWQhXG5cbi19XG5hdGFuIDogRmxvYXQgLT4gRmxvYXRcbmF0YW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXRhblxuXG5cbnstfCBUaGlzIGhlbHBzIHlvdSBmaW5kIHRoZSBhbmdsZSAoaW4gcmFkaWFucykgdG8gYW4gYCh4LHkpYCBjb29yZGluYXRlLlxuU28gcmF0aGVyIHRoYW4gc2F5aW5nIGBhdGFuICh5L3gpYCB5b3Ugc2F5IGBhdGFuMiB5IHhgIGFuZCB5b3UgY2FuIGdldCBhIGZ1bGxcbnJhbmdlIG9mIGFuZ2xlczpcblxuICAgIGF0YW4yIDEgMSA9PSAwLjc4NTM5ODE2MzM5NzQ0ODMgLS0gIDQ1wrAgb3IgICBwaS80IHJhZGlhbnNcblxuICAgIGF0YW4yIDEgLTEgPT0gMi4zNTYxOTQ0OTAxOTIzNDUgLS0gMTM1wrAgb3IgMypwaS80IHJhZGlhbnNcblxuICAgIGF0YW4yIC0xIC0xID09IC0yLjM1NjE5NDQ5MDE5MjM0NSAtLSAyMjXCsCBvciA1KnBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbjIgLTEgMSA9PSAtMC43ODUzOTgxNjMzOTc0NDgzIC0tIDMxNcKwIG9yIDcqcGkvNCByYWRpYW5zXG5cbi19XG5hdGFuMiA6IEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0XG5hdGFuMiA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hdGFuMlxuIiwKICAgICAgICAibW9kdWxlIEh0bWwuS2V5ZWQgZXhwb3NpbmdcbiAgKCBub2RlXG4gICwgb2xcbiAgLCB1bFxuICApXG5cblxuey18IEEga2V5ZWQgbm9kZSBoZWxwcyBvcHRpbWl6ZSBjYXNlcyB3aGVyZSBjaGlsZHJlbiBhcmUgZ2V0dGluZyBhZGRlZCwgbW92ZWQsXG5yZW1vdmVkLCBldGMuIENvbW1vbiBleGFtcGxlcyBpbmNsdWRlOlxuXG4gIC0gVGhlIHVzZXIgY2FuIGRlbGV0ZSBpdGVtcyBmcm9tIGEgbGlzdC5cbiAgLSBUaGUgdXNlciBjYW4gY3JlYXRlIG5ldyBpdGVtcyBpbiBhIGxpc3QuXG4gIC0gWW91IGNhbiBzb3J0IGEgbGlzdCBiYXNlZCBvbiBuYW1lIG9yIGRhdGUgb3Igd2hhdGV2ZXIuXG5cbldoZW4geW91IHVzZSBhIGtleWVkIG5vZGUsIGV2ZXJ5IGNoaWxkIGlzIHBhaXJlZCB3aXRoIGEgc3RyaW5nIGlkZW50aWZpZXIuIFRoaXNcbm1ha2VzIGl0IHBvc3NpYmxlIGZvciB0aGUgdW5kZXJseWluZyBkaWZmaW5nIGFsZ29yaXRobSB0byByZXVzZSBub2RlcyBtb3JlXG5lZmZpY2llbnRseS5cblxuIyMgS2V5ZWQgTm9kZXNcbkBkb2NzIG5vZGVcblxuIyMgQ29tbW9ubHkgS2V5ZWQgTm9kZXNcbkBkb2NzIG9sLCB1bFxuLX1cblxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlLCBIdG1sKVxuaW1wb3J0IFZpcnR1YWxEb21cblxuXG57LXwgV29ya3MganVzdCBsaWtlIGBIdG1sLm5vZGVgLCBidXQgeW91IGFkZCBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGVhY2ggY2hpbGRcbm5vZGUuIFlvdSB3YW50IHRoaXMgd2hlbiB5b3UgaGF2ZSBhIGxpc3Qgb2Ygbm9kZXMgdGhhdCBpcyBjaGFuZ2luZzogYWRkaW5nXG5ub2RlcywgcmVtb3Zpbmcgbm9kZXMsIGV0Yy4gSW4gdGhlc2UgY2FzZXMsIHRoZSB1bmlxdWUgaWRlbnRpZmllcnMgaGVscCBtYWtlXG50aGUgRE9NIG1vZGlmaWNhdGlvbnMgbW9yZSBlZmZpY2llbnQuXG4tfVxubm9kZSA6IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBIdG1sIG1zZyB9IC0+IEh0bWwgbXNnXG5ub2RlID1cbiAgVmlydHVhbERvbS5rZXllZE5vZGVcblxuXG57LXwtfVxub2wgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBIdG1sIG1zZyB9IC0+IEh0bWwgbXNnXG5vbCA9XG4gIG5vZGUgXCJvbFwiXG5cblxuey18LX1cbnVsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfSAtPiBIdG1sIG1zZ1xudWwgPVxuICBub2RlIFwidWxcIlxuIgogICAgXSwKICAgICJuYW1lcyI6IFsKICAgICAgICAiRGljdC5mb2xkbCIsCiAgICAgICAgImZ1bmMiLAogICAgICAgICJhY2MiLAogICAgICAgICJkaWN0IiwKICAgICAgICAia2V5IiwKICAgICAgICAidmFsdWUiLAogICAgICAgICJsZWZ0IiwKICAgICAgICAicmlnaHQiLAogICAgICAgICJBcnJheS5sZW5ndGgiLAogICAgICAgICJfQXJyYXlfbGVuZ3RoIiwKICAgICAgICAiQXJyYXkucHVzaExhc3QiLAogICAgICAgICJhcnJheSIsCiAgICAgICAgIl9BcnJheV9zcGxpY2UxIiwKICAgICAgICAiRGljdC5rZXlzIiwKICAgICAgICAia2V5QXJyYXkiLAogICAgICAgICJTZXQudG9BcnJheSIsCiAgICAgICAgIl92MCIsCiAgICAgICAgIkJhc2ljcy5hcFIiLAogICAgICAgICJ4IiwKICAgICAgICAiZiIsCiAgICAgICAgIkJhc2ljcy5pZGVudGl0eSIsCiAgICAgICAgIkRhdGFUYWJsZS5uZXciLAogICAgICAgICJpZCIsCiAgICAgICAgImQiLAogICAgICAgICJiIiwKICAgICAgICAiRGF0YVRhYmxlLk5vUGFnaW5hdGlvbiIsCiAgICAgICAgImoiLAogICAgICAgICJrIiwKICAgICAgICAiQmFzaWNzLmFwTCIsCiAgICAgICAgIkJhc2ljcy5hcHBlbmQiLAogICAgICAgICJfVXRpbHNfYXBwZW5kIiwKICAgICAgICAiQXJyYXkuc29ydCIsCiAgICAgICAgIl9BcnJheV9zb3J0IiwKICAgICAgICAiRGF0YVRhYmxlLnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIiwKICAgICAgICAiZGVmYXVsdFBhZ2VTaXplIiwKICAgICAgICAib3RoZXJQYWdlU2l6ZXMiLAogICAgICAgICJzdGF0ZSIsCiAgICAgICAgImN1cnJlbnRTdGF0ZSIsCiAgICAgICAgIkRhdGFUYWJsZS5TY3JvbGxlciIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVBY3RpdmVSb3dJZCIsCiAgICAgICAgIm5ld0FjdGl2ZVJvd0lkIiwKICAgICAgICAicGFnZVNpemUiLAogICAgICAgICJwYWdpbmF0aW9uIiwKICAgICAgICAic29ydENvbHVtbnMiLAogICAgICAgICJ0YWJsZUlkIiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZVNvcnRTdGF0ZSIsCiAgICAgICAgIm5ld1NvcnRDb2x1bW4iLAogICAgICAgICJzb3J0RGlyZWN0aW9uIiwKICAgICAgICAiYWN0aXZlUm93SWQiLAogICAgICAgICJhYyIsCiAgICAgICAgIk4iLAogICAgICAgICJFeGFtcGxlLlBhZ2luYXRlZC5pbml0IiwKICAgICAgICAicGVvcGxlIiwKICAgICAgICAibW9kZWwiLAogICAgICAgICJiQSIsCiAgICAgICAgImFLIiwKICAgICAgICAiYVQiLAogICAgICAgICJEYXRhVGFibGUuaW5pdGlhbFNvcnQiLAogICAgICAgICJoZWFkZXIiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMuaW5pdCIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLnBlcnNvbiIsCiAgICAgICAgIm5hbWUiLAogICAgICAgICJ5ZWFyIiwKICAgICAgICAiY2l0eSIsCiAgICAgICAgImFsIiwKICAgICAgICAiaCIsCiAgICAgICAgImFRIiwKICAgICAgICAiYTEiLAogICAgICAgICJFeGFtcGxlLlBhZ2luYXRlZC5wcmVzaWRlbnRzIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLnBlcnNvbiIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5wcmVzaWRlbnRzIiwKICAgICAgICAiRG9jQm9vay5pbml0IiwKICAgICAgICAiQSIsCiAgICAgICAgIksiLAogICAgICAgICJMIiwKICAgICAgICAiQmFzaWNzLmFkZCIsCiAgICAgICAgIl9CYXNpY3NfYWRkIiwKICAgICAgICAiU3RyaW5nLmFueSIsCiAgICAgICAgIl9TdHJpbmdfYW55IiwKICAgICAgICAiQmFzaWNzLmNvbXBvc2VMIiwKICAgICAgICAiZyIsCiAgICAgICAgIkJhc2ljcy5ub3QiLAogICAgICAgICJfQmFzaWNzX25vdCIsCiAgICAgICAgIlN0cmluZy5hbGwiLAogICAgICAgICJpc0dvb2QiLAogICAgICAgICJzdHIiLAogICAgICAgICJCYXNpY3MuYW5kIiwKICAgICAgICAiX0Jhc2ljc19hbmQiLAogICAgICAgICJKc29uLkVuY29kZS5lbmNvZGUiLAogICAgICAgICJfSnNvbl9lbmNvZGUiLAogICAgICAgICJTdHJpbmcuZnJvbUludCIsCiAgICAgICAgIl9TdHJpbmdfZnJvbU51bWJlciIsCiAgICAgICAgIlN0cmluZy5qb2luIiwKICAgICAgICAiX1N0cmluZ19qb2luIiwKICAgICAgICAiU3RyaW5nLnNwbGl0IiwKICAgICAgICAiX1N0cmluZ19zcGxpdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLmluZGVudCIsCiAgICAgICAgIkFycmF5LmluZGV4ZWRNYXAiLAogICAgICAgICJfQXJyYXlfaW5kZXhlZE1hcCIsCiAgICAgICAgIkJhc2ljcy5sZSIsCiAgICAgICAgIl9VdGlsc19sZSIsCiAgICAgICAgIkNoYXIudG9Db2RlIiwKICAgICAgICAiX0NoYXJfdG9Db2RlIiwKICAgICAgICAiQ2hhci5pc0xvd2VyIiwKICAgICAgICAiX2NoYXIiLAogICAgICAgICJjb2RlIiwKICAgICAgICAiY2hhciIsCiAgICAgICAgIkNoYXIuaXNVcHBlciIsCiAgICAgICAgIkJhc2ljcy5vciIsCiAgICAgICAgIl9CYXNpY3Nfb3IiLAogICAgICAgICJDaGFyLmlzQWxwaGEiLAogICAgICAgICJDaGFyLmlzRGlnaXQiLAogICAgICAgICJDaGFyLmlzQWxwaGFOdW0iLAogICAgICAgICJTdHJpbmcucG9wRmlyc3QiLAogICAgICAgICJfU3RyaW5nX3BvcEZpcnN0IiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JPbmVPZiIsCiAgICAgICAgImkiLAogICAgICAgICJlcnJvciIsCiAgICAgICAgIkpzb24uRGVjb2RlLmVycm9yVG9TdHJpbmciLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvclRvU3RyaW5nSGVscCIsCiAgICAgICAgImNvbnRleHQiLAogICAgICAgICJpc1NpbXBsZSIsCiAgICAgICAgIl92MiIsCiAgICAgICAgInJlc3QiLAogICAgICAgICJmaWVsZE5hbWUiLAogICAgICAgICJlcnIiLAogICAgICAgICJpbmRleE5hbWUiLAogICAgICAgICJzdGFydGVyIiwKICAgICAgICAiaW50cm9kdWN0aW9uIiwKICAgICAgICAiZXJyb3JzIiwKICAgICAgICAianNvbiIsCiAgICAgICAgIm1zZyIsCiAgICAgICAgIlJlc3VsdC5pc09rIiwKICAgICAgICAicmVzdWx0IiwKICAgICAgICAiSnNvbi5EZWNvZGUubWFwIiwKICAgICAgICAiX0pzb25fbWFwMSIsCiAgICAgICAgIkpzb24uRGVjb2RlLm1hcDIiLAogICAgICAgICJfSnNvbl9tYXAyIiwKICAgICAgICAiSnNvbi5EZWNvZGUuc3VjY2VlZCIsCiAgICAgICAgIl9Kc29uX3N1Y2NlZWQiLAogICAgICAgICJWaXJ0dWFsRG9tLnRvSGFuZGxlckludCIsCiAgICAgICAgImhhbmRsZXIiLAogICAgICAgICJTdHJpbmcuY29udGFpbnMiLAogICAgICAgICJfU3RyaW5nX2NvbnRhaW5zIiwKICAgICAgICAiQmFzaWNzLmx0IiwKICAgICAgICAiX1V0aWxzX2x0IiwKICAgICAgICAiU3RyaW5nLnNsaWNlIiwKICAgICAgICAiX1N0cmluZ19zbGljZSIsCiAgICAgICAgIlN0cmluZy51bml0TGVuZ3RoIiwKICAgICAgICAiX1N0cmluZ191bml0TGVuZ3RoIiwKICAgICAgICAiU3RyaW5nLmRyb3BGaXJzdCIsCiAgICAgICAgIm4iLAogICAgICAgICJzdHJpbmciLAogICAgICAgICJTdHJpbmcuaW5kaWNlcyIsCiAgICAgICAgIl9TdHJpbmdfaW5kZXhlcyIsCiAgICAgICAgIkJhc2ljcy5lcSIsCiAgICAgICAgIl9VdGlsc19lcXVhbCIsCiAgICAgICAgIlN0cmluZy5pc0VtcHR5IiwKICAgICAgICAiU3RyaW5nLnRha2VGaXJzdCIsCiAgICAgICAgIlN0cmluZy50b0ludCIsCiAgICAgICAgIl9TdHJpbmdfdG9JbnQiLAogICAgICAgICJVcmwuY2hvbXBCZWZvcmVQYXRoIiwKICAgICAgICAicHJvdG9jb2wiLAogICAgICAgICJwYXRoIiwKICAgICAgICAicGFyYW1zIiwKICAgICAgICAiZnJhZyIsCiAgICAgICAgIk1heWJlLk5vdGhpbmciLAogICAgICAgICJNYXliZS5KdXN0IiwKICAgICAgICAiViIsCiAgICAgICAgImF3IiwKICAgICAgICAiWCIsCiAgICAgICAgImFFIiwKICAgICAgICAiYUkiLAogICAgICAgICJfdjEiLAogICAgICAgICJwb3J0XyIsCiAgICAgICAgIkFycmF5LmdldCIsCiAgICAgICAgIl9BcnJheV9nZXQiLAogICAgICAgICJVcmwuY2hvbXBCZWZvcmVRdWVyeSIsCiAgICAgICAgIlVybC5jaG9tcEJlZm9yZUZyYWdtZW50IiwKICAgICAgICAiVXJsLmNob21wQWZ0ZXJQcm90b2NvbCIsCiAgICAgICAgIlN0cmluZy5zdGFydHNXaXRoIiwKICAgICAgICAiX1N0cmluZ19zdGFydHNXaXRoIiwKICAgICAgICAiVXJsLmZyb21TdHJpbmciLAogICAgICAgICJCYXNpY3MubmV2ZXIiLAogICAgICAgICJudnIiLAogICAgICAgICJUYXNrLnN1Y2NlZWQiLAogICAgICAgICJfU2NoZWR1bGVyX3N1Y2NlZWQiLAogICAgICAgICJUYXNrLmluaXQiLAogICAgICAgICJBcnJheS5tYXAiLAogICAgICAgICJfQXJyYXlfbWFwIiwKICAgICAgICAiVGFzay5hbmRUaGVuIiwKICAgICAgICAiX1NjaGVkdWxlcl9hbmRUaGVuIiwKICAgICAgICAiVGFzay5tYXAiLAogICAgICAgICJ0YXNrQSIsCiAgICAgICAgImEiLAogICAgICAgICJBcnJheS5mb2xkciIsCiAgICAgICAgIl9BcnJheV9mb2xkciIsCiAgICAgICAgIlRhc2subWFwMiIsCiAgICAgICAgInRhc2tCIiwKICAgICAgICAiQXJyYXkucHVzaEZpcnN0IiwKICAgICAgICAiVGFzay5zZXF1ZW5jZSIsCiAgICAgICAgInRhc2tzIiwKICAgICAgICAiUGxhdGZvcm0uc2VuZFRvQXBwIiwKICAgICAgICAiX1BsYXRmb3JtX3NlbmRUb0FwcCIsCiAgICAgICAgIlRhc2suc3Bhd25DbWQiLAogICAgICAgICJyb3V0ZXIiLAogICAgICAgICJjbWQiLAogICAgICAgICJfU2NoZWR1bGVyX3NwYXduIiwKICAgICAgICAidGFzayIsCiAgICAgICAgIlRhc2sub25FZmZlY3RzIiwKICAgICAgICAiY29tbWFuZHMiLAogICAgICAgICJUYXNrLm9uU2VsZk1zZyIsCiAgICAgICAgIlRhc2suY21kTWFwIiwKICAgICAgICAidGFnZ2VyIiwKICAgICAgICAiVGFzay5QZXJmb3JtIiwKICAgICAgICAiVGFzay5FeGVjdXRlIiwKICAgICAgICAiVGFzay5wZXJmb3JtIiwKICAgICAgICAidG9NZXNzYWdlIiwKICAgICAgICAiVGFzay5jb21tYW5kIiwKICAgICAgICAiUGxhdGZvcm0uQ21kLmJhdGNoIiwKICAgICAgICAiX1BsYXRmb3JtX2JhdGNoIiwKICAgICAgICAiUGxhdGZvcm0uQ21kLm5vbmUiLAogICAgICAgICJQbGF0Zm9ybS5TdWIuYmF0Y2giLAogICAgICAgICJQbGF0Zm9ybS5TdWIubm9uZSIsCiAgICAgICAgIkJyb3dzZXIuc2FuZGJveCIsCiAgICAgICAgImltcGwiLAogICAgICAgICJfQnJvd3Nlcl9lbGVtZW50IiwKICAgICAgICAiYmwiLAogICAgICAgICJhbiIsCiAgICAgICAgImFBIiwKICAgICAgICAiYlAiLAogICAgICAgICJiUiIsCiAgICAgICAgImJTIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQudXBkYXRlIiwKICAgICAgICAibmV3UXVlcnkiLAogICAgICAgICJuZXdTdGF0ZSIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy51cGRhdGUiLAogICAgICAgICJEb2NCb29rLnVwZGF0ZSIsCiAgICAgICAgImV4YW1wbGVUb1N3aXRjaFRvIiwKICAgICAgICAiZXhhbXBsZU1zZyIsCiAgICAgICAgIlZpcnR1YWxEb20ubm9kZSIsCiAgICAgICAgInRhZyIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vZGUiLAogICAgICAgICJfVmlydHVhbERvbV9ub1NjcmlwdCIsCiAgICAgICAgIkh0bWwubm9kZSIsCiAgICAgICAgIkh0bWwuYXJ0aWNsZSIsCiAgICAgICAgIkh0bWwuYnV0dG9uIiwKICAgICAgICAiRG9jQm9vay5idXR0b25zIiwKICAgICAgICAiVmlydHVhbERvbS5wcm9wZXJ0eSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX3Byb3BlcnR5IiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24iLAogICAgICAgICJfVmlydHVhbERvbV9ub0phdmFTY3JpcHRPckh0bWxVcmkiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMucHJvcGVydHkiLAogICAgICAgICJKc29uLkVuY29kZS5zdHJpbmciLAogICAgICAgICJfSnNvbl93cmFwIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnN0cmluZ1Byb3BlcnR5IiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNsYXNzIiwKICAgICAgICAiSHRtbC5kaXYiLAogICAgICAgICJEb2NCb29rLmV4YW1wbGVOYW1lIiwKICAgICAgICAidmFyaWFudCIsCiAgICAgICAgIkh0bWwuaDMiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuaWQiLAogICAgICAgICJWaXJ0dWFsRG9tLm1hcCIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX21hcCIsCiAgICAgICAgIkh0bWwubWFwIiwKICAgICAgICAiSHRtbC5uYXYiLAogICAgICAgICJCYXNpY3MubmVnYXRlIiwKICAgICAgICAiVmlydHVhbERvbS5vbiIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX29uIiwKICAgICAgICAiSHRtbC5FdmVudHMub24iLAogICAgICAgICJldmVudCIsCiAgICAgICAgImRlY29kZXIiLAogICAgICAgICJWaXJ0dWFsRG9tLk5vcm1hbCIsCiAgICAgICAgIkh0bWwuRXZlbnRzLm9uQ2xpY2siLAogICAgICAgICJWaXJ0dWFsRG9tLmF0dHJpYnV0ZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24iLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuYXR0cmlidXRlIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnRhYmluZGV4IiwKICAgICAgICAiVmlydHVhbERvbS50ZXh0IiwKICAgICAgICAiX1ZpcnR1YWxEb21fdGV4dCIsCiAgICAgICAgIkh0bWwudGV4dCIsCiAgICAgICAgIkFycmF5LmtlZXBJZiIsCiAgICAgICAgIl9BcnJheV9maWx0ZXIiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuY2xhc3NMaXN0IiwKICAgICAgICAiY2xhc3NlcyIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5jb2xzcGFuIiwKICAgICAgICAiQmFzaWNzLmd0IiwKICAgICAgICAiX1V0aWxzX2d0IiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLkFyaWEubGFiZWwiLAogICAgICAgICJBcnJheS5maW5kRmlyc3QiLAogICAgICAgICJfQXJyYXlfZmluZEZpcnN0IiwKICAgICAgICAiQXJyYXkubWVtYmVyIiwKICAgICAgICAidiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5yb3dzcGFuIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLkFyaWEuc29ydCIsCiAgICAgICAgIkRhdGFUYWJsZS5zb3J0RGlyZWN0aW9uVG9TdHJpbmciLAogICAgICAgICJIdG1sLnNwYW4iLAogICAgICAgICJWaXJ0dWFsRG9tLnN0eWxlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fc3R5bGUiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuc3R5bGUiLAogICAgICAgICJIdG1sLnN1cCIsCiAgICAgICAgIkh0bWwudGgiLAogICAgICAgICJIdG1sLnRyIiwKICAgICAgICAiRGF0YVRhYmxlLmRlZmF1bHRUYWJsZUhlYWRlciIsCiAgICAgICAgImhlYWRlckluZm9zIiwKICAgICAgICAiZGVmYXVsdFRIIiwKICAgICAgICAiX3YzIiwKICAgICAgICAic29ydFNlcXVlbmNlTnVtYmVyIiwKICAgICAgICAic29ydFJhbmsiLAogICAgICAgICJyb3dBbmRDb2xTcGFuIiwKICAgICAgICAiaXNTb3J0ZWQiLAogICAgICAgICJ2aWV3ZWRTb3J0RGlyZWN0aW9uIiwKICAgICAgICAiY29sdW1uVGl0bGUiLAogICAgICAgICJjb2x1bW5PcmRlciIsCiAgICAgICAgInNvcnREaXJlY3Rpb25zIiwKICAgICAgICAibSIsCiAgICAgICAgImNhbkJlU29ydGVkIiwKICAgICAgICAidGhDbGFzc2VzIiwKICAgICAgICAiYXJpYVNvcnQiLAogICAgICAgICJ0aEF0dHJpYnV0ZXMiLAogICAgICAgICJjbGlja0FjdGlvbnMiLAogICAgICAgICJCIiwKICAgICAgICAiQyIsCiAgICAgICAgIkRhdGFUYWJsZS5nZXRBY3RpdmVSb3dJZCIsCiAgICAgICAgIkRhdGFUYWJsZS5zaW1wbGVSb3dBdHRycyIsCiAgICAgICAgInRvSWQiLAogICAgICAgICJ0b01zZyIsCiAgICAgICAgImRhdGEiLAogICAgICAgICJpc19jdXJyZW50X3JvdyIsCiAgICAgICAgIkRhdGFUYWJsZS5kZWZhdWx0Q3VzdG9taXphdGlvbnMiLAogICAgICAgICJhNSIsCiAgICAgICAgImEyIiwKICAgICAgICAiYTQiLAogICAgICAgICJhayIsCiAgICAgICAgImJiIiwKICAgICAgICAiYU0iLAogICAgICAgICJhUyIsCiAgICAgICAgImFVIiwKICAgICAgICAiYVYiLAogICAgICAgICJhVyIsCiAgICAgICAgIkRhdGFUYWJsZS5jb25maWciLAogICAgICAgICJhbSIsCiAgICAgICAgImNEYXRhIiwKICAgICAgICAiY29sdW1ucyIsCiAgICAgICAgImFvIiwKICAgICAgICAiYVoiLAogICAgICAgICJhJCIsCiAgICAgICAgIkFycmF5LnNvcnRCeSIsCiAgICAgICAgIl9BcnJheV9zb3J0QnkiLAogICAgICAgICJEYXRhVGFibGUuaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IiwKICAgICAgICAidG9Db21wYXJhYmxlIiwKICAgICAgICAiRGF0YVRhYmxlLkluY09yRGVjIiwKICAgICAgICAiRGF0YVRhYmxlLnRleHREZXRhaWxzIiwKICAgICAgICAiRGF0YVRhYmxlLmludENvbHVtbiIsCiAgICAgICAgInRvSW50IiwKICAgICAgICAieiIsCiAgICAgICAgIkRhdGFUYWJsZS5zdHJpbmdDb2x1bW4iLAogICAgICAgICJ0b1N0ciIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLmNvbmZpZyIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJIdG1sLmgxIiwKICAgICAgICAiSHRtbC5pbnB1dCIsCiAgICAgICAgIkh0bWwuRXZlbnRzLmFsd2F5c1N0b3AiLAogICAgICAgICJicyIsCiAgICAgICAgInkiLAogICAgICAgICJIdG1sLkV2ZW50cy5zdG9wUHJvcGFnYXRpb25PbiIsCiAgICAgICAgIlZpcnR1YWxEb20uTWF5U3RvcFByb3BhZ2F0aW9uIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZmllbGQiLAogICAgICAgICJfSnNvbl9kZWNvZGVGaWVsZCIsCiAgICAgICAgIkpzb24uRGVjb2RlLmF0IiwKICAgICAgICAiZmllbGRzIiwKICAgICAgICAiSnNvbi5EZWNvZGUuc3RyaW5nIiwKICAgICAgICAiX0pzb25fZGVjb2RlU3RyaW5nIiwKICAgICAgICAiSHRtbC5FdmVudHMudGFyZ2V0VmFsdWUiLAogICAgICAgICJIdG1sLkV2ZW50cy5vbklucHV0IiwKICAgICAgICAiRGF0YVRhYmxlLmdldFBhZ2VTaXplIiwKICAgICAgICAiSHRtbC5vcHRpb24iLAogICAgICAgICJIdG1sLnNlbGVjdCIsCiAgICAgICAgIkpzb24uRW5jb2RlLmJvb2wiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuYm9vbFByb3BlcnR5IiwKICAgICAgICAiYm9vbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5zZWxlY3RlZCIsCiAgICAgICAgIkJhc2ljcy5nZSIsCiAgICAgICAgIl9VdGlsc19nZSIsCiAgICAgICAgIkFycmF5LnNsaWNlIiwKICAgICAgICAiX0FycmF5X3NsaWNlIiwKICAgICAgICAiQXJyYXkuZHJvcEZpcnN0IiwKICAgICAgICAiQXJyYXkuZmlyc3QiLAogICAgICAgICJBcnJheS5wb3BGaXJzdCIsCiAgICAgICAgImJoIiwKICAgICAgICAiYkYiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlUGFnZVNpemUiLAogICAgICAgICJtaW5pbXVtTmV3UGFnZVNpemUiLAogICAgICAgICJuZXh0SGlnaGVySW5MaXN0IiwKICAgICAgICAiaW5wdXQiLAogICAgICAgICJsaXN0IiwKICAgICAgICAibmV3UGFnZVNpemUiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMudmFsdWUiLAogICAgICAgICJNYXliZS53aXRoRGVmYXVsdCIsCiAgICAgICAgIl9kZWZhdWx0IiwKICAgICAgICAibWF5YmUiLAogICAgICAgICJkZWZhdWx0IiwKICAgICAgICAiRGF0YVRhYmxlLnBhZ2VMZW5ndGhDaG9vc2VyIiwKICAgICAgICAidGFibGVTdGF0ZSIsCiAgICAgICAgInZpZXdPcHRpb24iLAogICAgICAgICJ2YWx1ZXMiLAogICAgICAgICJ2YWwiLAogICAgICAgICJodG1sIiwKICAgICAgICAib25QYWdlU2l6ZUNob2ljZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5wbGFjZWhvbGRlciIsCiAgICAgICAgIlN0cmluZy50b0xvd2VyIiwKICAgICAgICAiX1N0cmluZ190b0xvd2VyIiwKICAgICAgICAiSHRtbC5jYXB0aW9uIiwKICAgICAgICAiQmFzaWNzLmNvbXBhcmUiLAogICAgICAgICJfVXRpbHNfY29tcGFyZSIsCiAgICAgICAgIkJhc2ljcy5pZGl2IiwKICAgICAgICAiX0Jhc2ljc19pZGl2IiwKICAgICAgICAiTWF0aC5tb2RCeSIsCiAgICAgICAgIl9NYXRoX21vZEJ5IiwKICAgICAgICAiRGF0YVRhYmxlLmlzRXZlbiIsCiAgICAgICAgIl9pbnQiLAogICAgICAgICJpbnQiLAogICAgICAgICJNYXliZS5tYXAiLAogICAgICAgICJCYXNpY3MubXVsIiwKICAgICAgICAiX0Jhc2ljc19tdWwiLAogICAgICAgICJEYXRhVGFibGUubmVnYXRpdmVUb1plcm8iLAogICAgICAgICJCYXNpY3Muc3ViIiwKICAgICAgICAiX0Jhc2ljc19zdWIiLAogICAgICAgICJBcnJheS50YWtlRmlyc3QiLAogICAgICAgICJEYXRhVGFibGUuZ2V0UGFnaW5hdGVkRGF0YSIsCiAgICAgICAgInJvd0N1cnNvciIsCiAgICAgICAgInByZWNlZGluZ0Z1bGxQYWdlcyIsCiAgICAgICAgImxhc3RSb3dPblBhZ2UiLAogICAgICAgICJfdjciLAogICAgICAgICJsYXN0Um93QmVmb3JlUGFnZSIsCiAgICAgICAgIl92NCIsCiAgICAgICAgIkFycmF5LnJldmVyc2UiLAogICAgICAgICJfQXJyYXlfcmV2ZXJzZSIsCiAgICAgICAgIkRhdGFUYWJsZS5hcHBseVNvcnRlciIsCiAgICAgICAgInNvcnRlciIsCiAgICAgICAgInNydCIsCiAgICAgICAgIkRhdGFUYWJsZS5maW5kU29ydGVyIiwKICAgICAgICAic2VsZWN0ZWRDb2x1bW4iLAogICAgICAgICJEYXRhVGFibGUuc29ydCIsCiAgICAgICAgIl92NSIsCiAgICAgICAgInNvcnRDb2x1bW5OYW1lIiwKICAgICAgICAiRGF0YVRhYmxlLmdldFNvcnRlZERhdGEiLAogICAgICAgICJWaXJ0dWFsRG9tLmtleWVkTm9kZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX2tleWVkTm9kZSIsCiAgICAgICAgIkh0bWwuS2V5ZWQubm9kZSIsCiAgICAgICAgIkh0bWwudGFibGUiLAogICAgICAgICJIdG1sLnRmb290IiwKICAgICAgICAiSHRtbC50aGVhZCIsCiAgICAgICAgIkRhdGFUYWJsZS50b0hlYWRlciIsCiAgICAgICAgIkRhdGFUYWJsZS5oZWFkZXJJbmZvIiwKICAgICAgICAic2VsZWN0ZWQiLAogICAgICAgICJiYSIsCiAgICAgICAgImJKIiwKICAgICAgICAiYVAiLAogICAgICAgICJIdG1sLkV2ZW50cy5wcmV2ZW50RGVmYXVsdE9uIiwKICAgICAgICAiVmlydHVhbERvbS5NYXlQcmV2ZW50RGVmYXVsdCIsCiAgICAgICAgIkJhc2ljcy5uZXEiLAogICAgICAgICJfVXRpbHNfbm90RXF1YWwiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlTXVsdGlTb3J0U3RhdGUiLAogICAgICAgICJuZXdTb3J0U3RhdGUiLAogICAgICAgICJEYXRhVGFibGUub25Db2x1bW5IZWFkZXIiLAogICAgICAgICJiQiIsCiAgICAgICAgIkRhdGFUYWJsZS50b0hlYWRlckluZm8iLAogICAgICAgICJpbmRleGVkTGlzdCIsCiAgICAgICAgImlkeCIsCiAgICAgICAgImJyIiwKICAgICAgICAiYkciLAogICAgICAgICJub25FbXB0eUxpc3QiLAogICAgICAgICJmaWx0ZXJlZExpc3QiLAogICAgICAgICJfdjgiLAogICAgICAgICJfdjYiLAogICAgICAgICJiTSIsCiAgICAgICAgImluZGV4IiwKICAgICAgICAicmV2ZXJzZSIsCiAgICAgICAgInJldmVyc2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgIkh0bWwudGQiLAogICAgICAgICJEYXRhVGFibGUudmlld0NlbGwiLAogICAgICAgICJkZXRhaWxzIiwKICAgICAgICAidmlld0RhdGEiLAogICAgICAgICJEYXRhVGFibGUudmlld1Jvd0hlbHAiLAogICAgICAgICJ0b1Jvd0F0dHJzIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdSb3ciLAogICAgICAgICJicCIsCiAgICAgICAgImJ4IiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXciLAogICAgICAgICJjb25mIiwKICAgICAgICAicm93cyIsCiAgICAgICAgInRib2R5IiwKICAgICAgICAiY3VzdG9taXphdGlvbnMiLAogICAgICAgICJ3aXRoRm9vdCIsCiAgICAgICAgImF0dHJpYnV0ZXMiLAogICAgICAgICJjaGlsZHJlbiIsCiAgICAgICAgImhlYWRlcnMiLAogICAgICAgICJ0aGVhZERldGFpbHMiLAogICAgICAgICJ0aGVhZCIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLnZpZXciLAogICAgICAgICJsb3dlclF1ZXJ5IiwKICAgICAgICAicXVlcnkiLAogICAgICAgICJhY2NlcHRhYmxlUGVvcGxlIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQuU2V0UXVlcnkiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMuY29uZmlnIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJIdG1sLmxpIiwKICAgICAgICAiSHRtbC51bCIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy52aWV3IiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLlNldFF1ZXJ5IiwKICAgICAgICAiRG9jQm9vay52aWV3IiwKICAgICAgICAiaXNBY3RpdmUiLAogICAgICAgICJ2YXJpYW50cyIsCiAgICAgICAgIkRvY0Jvb2suU3dpdGNoRXhhbXBsZSIsCiAgICAgICAgIkRvY0Jvb2suUHJlc2lkZW50c01zZyIsCiAgICAgICAgIkRvY0Jvb2suUGFnaW5hdGVkTXNnIiwKICAgICAgICAiRG9jQm9vay5tYWluIgogICAgXSwKICAgICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJSjRJSkssNkJBQ0lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJSyttQkpDLDZCQUNJQztJTDVMSkMsNENBQVNDLEdBQUU3RDtRQUNQLFNBQUNEO1NB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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