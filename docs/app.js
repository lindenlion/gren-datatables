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
    this.R = target;
    this.u = finalized;
    this.t = array;
  }
}

var _Array_emptyBuilder = function (capacity) {
  return new _Array_Builder(0, false, new Array(capacity));
};

var _Array_pushToBuilder = F2(function (value, builder) {
  var array = builder.t;
  var target = builder.R;

  if (builder.u) {
    array = array.slice(0, target);
  } else {
    builder.u = true;
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
  var result = builder.t;

  if (builder.u) {
    result = result.slice(0, builder.R);
  } else {
    builder.u = true;
    result.length = builder.R;
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
    return _Debug_toAnsiString(ansi, value.t.slice(0, value.R));
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
  if (region.af.w === region.as.w) {
    return "on line " + region.af.w;
  }
  return (
    "on lines " + region.af.w + " through " + region.as.w
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
			var right = _v1.bE;
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
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, k: [  ], l: id };
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
	var sortColumns = _v1.k;
	var pageSize = _v1.d;
	var pagination = _v1.b;
	var tableId = _v1.l;
	return { f: newActiveRowId, d: pageSize, b: pagination, k: sortColumns, l: tableId };
};
var $author$project$DataTable$updateActiveRowId = F2($author$project$DataTable$updateActiveRowId$);
var $author$project$DataTable$updateSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.l;
	return { f: activeRowId, d: pageSize, b: pagination, k: [ { ae: newSortColumn, P: sortDirection } ], l: tableId };
};
var $author$project$DataTable$updateSortState = F3($author$project$DataTable$updateSortState$);
var $author$project$Example$Paginated$init = function(people) {
	var model = { bz: people, aL: '', aT: $author$project$DataTable$updateActiveRowId$('', $author$project$DataTable$updateSortState$('Year', 0, $author$project$DataTable$setScrollingPaginationWith$(10, [ 0, 5, 25, 50 ], $author$project$DataTable$new('Presidents')))) };
	return model;
};
var $author$project$DataTable$initialSort = function(header) {
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, k: [ { ae: header, P: 0 } ], l: 'sortableTable' };
};
var $author$project$Example$Presidents$init = function(people) {
	var model = { bz: people, aL: '', aT: $author$project$DataTable$initialSort('State') };
	return model;
};
var $author$project$Shared$ExampleData$personWithNameYearCityState$ = function(name, year, city, state) {
	return { a9: city, i: name, bL: state, bT: year };
};
var $author$project$Shared$ExampleData$personWithNameYearCityState = F4($author$project$Shared$ExampleData$personWithNameYearCityState$);
var $author$project$Shared$ExampleData$presidents = [ $author$project$Shared$ExampleData$personWithNameYearCityState$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Shared$ExampleData$personWithNameYearCityState$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Shared$ExampleData$personWithNameYearCityState$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Shared$ExampleData$personWithNameYearCityState$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Shared$ExampleData$personWithNameYearCityState$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Shared$ExampleData$personWithNameYearCityState$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Shared$ExampleData$personWithNameYearCityState$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Shared$ExampleData$personWithNameYearCityState$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Shared$ExampleData$personWithNameYearCityState$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Donald Trump', 1946, 'New York City', 'New York'), $author$project$Shared$ExampleData$personWithNameYearCityState$('Joe Biden', 1942, 'Scranton', 'Pennsylvania') ];
var $author$project$DocBook$init = { C: 0, M: $author$project$Example$Paginated$init($author$project$Shared$ExampleData$presidents), N: $author$project$Example$Presidents$init($author$project$Shared$ExampleData$presidents) };


// ELEMENT

var _Browser_element = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.bl,
    impl.bQ,
    impl.bO,
    function (sendToApp, initialModel) {
      var view = impl.bR;
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
    impl.bQ,
    impl.bO,
    function (sendToApp, initialModel) {
      var divertHrefToApp = impl.ad && impl.ad(sendToApp);
      var view = impl.bR;
      var title = _VirtualDom_doc.title;
      var bodyNode = _VirtualDom_doc.body;
      var currNode = _VirtualDom_virtualize(bodyNode);
      return _Browser_makeAnimator(initialModel, function (model) {
        _VirtualDom_divertHrefToApp = divertHrefToApp;
        var doc = view(model);
        var nextNode = _VirtualDom_node("body")([])(doc.a5);
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
  var onUrlChange = impl.bx;
  var onUrlRequest = impl.by;
  var key = function () {
    key.a(onUrlChange(_Browser_getUrl()));
  };

  return _Browser_document({
    ad: function (sendToApp) {
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
                curr.aJ === next.aJ &&
                curr.ax === next.ax &&
                curr.aF.a === next.aF.a
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
    bR: impl.bR,
    bQ: impl.bQ,
    bO: impl.bO,
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
    ? { bi: "hidden", a8: "visibilitychange" }
    : typeof _VirtualDom_doc.mozHidden !== "undefined"
    ? { bi: "mozHidden", a8: "mozvisibilitychange" }
    : typeof _VirtualDom_doc.msHidden !== "undefined"
    ? { bi: "msHidden", a8: "msvisibilitychange" }
    : typeof _VirtualDom_doc.webkitHidden !== "undefined"
    ? { bi: "webkitHidden", a8: "webkitvisibilitychange" }
    : { bi: "hidden", a8: "visibilitychange" };
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
    ac: _Browser_getScene(),
    aj: {
      T: _Browser_window.pageXOffset,
      U: _Browser_window.pageYOffset,
      s: _Browser_doc.documentElement.clientWidth,
      q: _Browser_doc.documentElement.clientHeight,
    },
  };
}

function _Browser_getScene() {
  var body = _Browser_doc.body;
  var elem = _Browser_doc.documentElement;
  return {
    s: Math.max(
      body.scrollWidth,
      body.offsetWidth,
      elem.scrollWidth,
      elem.offsetWidth,
      elem.clientWidth
    ),
    q: Math.max(
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
      ac: {
        s: node.scrollWidth,
        q: node.scrollHeight,
      },
      aj: {
        T: node.scrollLeft,
        U: node.scrollTop,
        s: node.clientWidth,
        q: node.clientHeight,
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
      ac: _Browser_getScene(),
      aj: {
        T: x,
        U: y,
        s: _Browser_doc.documentElement.clientWidth,
        q: _Browser_doc.documentElement.clientHeight,
      },
      be: {
        T: x + rect.left,
        U: y + rect.top,
        s: rect.width,
        q: rect.height,
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
        h: "This is not valid JSON! " + e.message,
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
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Field({ i: field, G: result.a }));

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
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bk: index, G: result.a }));

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
              $gren_lang$core$Json$Decode$Field({ i: key, G: result.a }),
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
          h: decoder.a,
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
      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bk: i, G: result.a }));
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
      h: "Expecting " + type,
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
    bD: string.slice(firstChar.length),
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
      bD: string.slice(string.length - 1),
    });
  }

  // last char is a point
  return $gren_lang$core$Maybe$Just({
    bq: _Utils_chr(String.fromCodePoint(possibleLastPoint)),
    bD: string.slice(string.length - 2),
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
				var f = _v1.i;
				var err = _v1.G;
				var isSimple = function () {
					var _v2 = $gren_lang$core$String$popFirst(f);
					if (_v2.$ === 1) {
						return false;
					} else {
						var _v3 = _v2.a;
						var _char = _v3.bh;
						var rest = _v3.bD;
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
				var err = _v4.G;
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
				var msg = _v8.h;
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
    impl.bQ,
    impl.bO,
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
  var model = initPair.aB;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);

  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper((model = pair.aB), viewMetadata);
    _Platform_enqueueEffects(managers, pair.ao, subscriptions(model));
  }

  _Platform_enqueueEffects(managers, initPair.ao, subscriptions(model));

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
      descendantsCount += kid.bw.b || 0;
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
    h: func(record.h),
    A: record.A,
  };
});

var _VirtualDom_mapMayPreventDefault = F2(function (func, record) {
  return {
    h: func(record.h),
    x: record.x,
  };
});

var _VirtualDom_mapEventRecord = F2(function (func, record) {
  return {
    h: func(record.h),
    A: record.A,
    x: record.x,
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
        tag === 1 ? kids[i] : kids[i].bw,
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
    var message = !tag ? value : value.h;
    var stopPropagation =
      tag == 1 || tag == 3 ? value.A : false;
    var currentEventNode =
      (stopPropagation && event.stopPropagation(),
      (tag == 2 || tag == 3 ? value.x : false) &&
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
    var xNode = x.bw;
    var yNode = y.bw;

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
      var xNextNode = xNext.bw;
      oldMatch = yKey === xNextKey;
    }

    if (yNext) {
      var yNextKey = yNext.bp;
      var yNextNode = yNext.bw;
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
    var xNode = x.bw;
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
      y.bw,
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
    var vKid = tag === 1 ? vKids[j] : vKids[j].bw;
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
				return $gren_lang$core$Maybe$Just({ X: frag, ax: str, Z: path, aF: $gren_lang$core$Maybe$Nothing, aJ: protocol, aL: params });
			case 1:
				var i = _v0[0];
				var _v1 = $gren_lang$core$String$toInt($gren_lang$core$String$dropFirst$(i + 1, str));
				if (_v1.$ === 1) {
					return $gren_lang$core$Maybe$Nothing;
				} else {
					var port_ = _v1;
					return $gren_lang$core$Maybe$Just({ X: frag, ax: $gren_lang$core$String$takeFirst$(i, str), Z: path, aF: port_, aJ: protocol, aL: params });
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
			return { ao: $gren_lang$core$Platform$Cmd$none, aB: impl.bl };
		}, bO: function(_v1) {
			return $gren_lang$core$Platform$Sub$none;
		}, bQ: F2(function(msg, model) {
				return { ao: $gren_lang$core$Platform$Cmd$none, aB: A2(impl.bQ, msg, model) };
			}), bR: impl.bR });
};
var $author$project$Example$Paginated$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aL: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aT: newState });
	}
};
var $author$project$Example$Paginated$update = F2($author$project$Example$Paginated$update$);
var $author$project$Example$Presidents$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aL: newQuery });
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
			return _Utils_update(model, { C: exampleToSwitchTo });
		case 1:
			var exampleMsg = msg.a;
			return _Utils_update(model, { N: $author$project$Example$Presidents$update$(exampleMsg, function ($) {
						return $.N;
					}(model)) });
		default:
			var exampleMsg = msg.a;
			return _Utils_update(model, { M: $author$project$Example$Paginated$update$(exampleMsg, function ($) {
						return $.M;
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
					return $.n;
				}, A2($gren_lang$core$Array$keepIf, function ($) {
						return $.o;
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
		var name = _v3.i;
		var selected = _v3.bH;
		var sortDirections = _v3.aQ;
		var clickActions = _v3.ba;
		var sortSequenceNumber = function () {
			if (!selected.$) {
				var sortRank = selected.a.bK;
				return (sortRank === 0) ? [  ] : [ A2($gren_lang$browser$Html$sup, [ A2($gren_lang$browser$Html$Attributes$style, 'opacity', '0.4') ], [ $gren_lang$browser$Html$text($gren_lang$core$String$fromInt(sortRank)) ]) ];
			} else {
				return [  ];
			}
		}();
		var rowAndColSpan = [ $gren_lang$browser$Html$Attributes$rowspan(1), $gren_lang$browser$Html$Attributes$colspan(1) ];
		var isSorted = function(viewedSortDirection) {
			if (!selected.$) {
				var sortDirection = selected.a.P;
				return _Utils_eq(viewedSortDirection, sortDirection);
			} else {
				return false;
			}
		};
		var columnTitle = A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$class('dt-column-title') ], [ $gren_lang$browser$Html$text(name) ]);
		var columnOrder = ($gren_lang$core$Array$length(sortDirections) > 0) ? A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$classList([ { n: 'dt-column-order', o: true } ]), $author$project$Html$Attributes$Aria$label('Click here to sort by this column'), A2($gren_lang$browser$Html$Attributes$attribute, 'role', 'button'), $gren_lang$browser$Html$Attributes$tabindex(0) ], sortSequenceNumber) : $gren_lang$browser$Html$text('');
		var canBeSorted = function(sortDirection) {
			return $gren_lang$core$Array$member$(sortDirection, sortDirections);
		};
		var thClasses = [ $gren_lang$browser$Html$Attributes$classList([ { n: 'dt-orderable-asc', o: canBeSorted(0) }, { n: 'dt-orderable-desc', o: canBeSorted(1) }, { n: 'dt-ordering-asc', o: isSorted(0) }, { n: 'dt-ordering-desc', o: isSorted(1) }, { n: 'dt-ordering-none', o: (!isSorted(0)) && (!isSorted(1)) } ]) ];
		var ariaSort = function () {
			if (!selected.$) {
				var sortDirection = selected.a.P;
				return [ $author$project$Html$Attributes$Aria$sort($author$project$DataTable$sortDirectionToString(sortDirection)) ];
			} else {
				return [  ];
			}
		}();
		var thAttributes = _Utils_ap(clickActions, _Utils_ap(ariaSort, _Utils_ap(rowAndColSpan, thClasses)));
		return A2($gren_lang$browser$Html$th, thAttributes, [ A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$class('dt-column-header') ], [ columnTitle, columnOrder ]) ]);
	};
	return { D: [  ], E: [ A2($gren_lang$browser$Html$tr, [  ], A2($gren_lang$core$Array$map, defaultTH, headerInfos)) ] };
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
var $author$project$DataTable$defaultCustomizations = { a4: { a1: $gren_lang$core$Maybe$Nothing, a3: $gren_lang$core$Maybe$Nothing }, am: $gren_lang$core$Maybe$Nothing, bb: function(_v0) {
	return $gren_lang$core$Maybe$Nothing;
}, aN: $author$project$DataTable$simpleRowAttrs, aS: [ $gren_lang$browser$Html$Attributes$class('dataTable') ], aU: [  ], aV: $gren_lang$core$Maybe$Nothing, aW: $author$project$DataTable$defaultTableHeader };
var $author$project$DataTable$config = function(_v0) {
	var toId = _v0.aZ;
	var toMsg = _v0.a$;
	var columns = _v0.an;
	return { an: A2($gren_lang$core$Array$map, function(_v1) {
			var cData = _v1;
			return cData;
		}, columns), ap: $author$project$DataTable$defaultCustomizations, aZ: toId, a$: toMsg };
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
	return { D: [  ], E: [ $gren_lang$browser$Html$text(str) ] };
};
var $author$project$DataTable$intColumn$ = function(name, toInt) {
	return { i: name, z: $author$project$DataTable$increasingOrDecreasingBy(toInt), B: $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, $gren_lang$core$String$fromInt), toInt) };
};
var $author$project$DataTable$intColumn = F2($author$project$DataTable$intColumn$);
var $author$project$DataTable$stringColumn$ = function(name, toStr) {
	return { i: name, z: $author$project$DataTable$increasingOrDecreasingBy(toStr), B: $gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, toStr) };
};
var $author$project$DataTable$stringColumn = F2($author$project$DataTable$stringColumn$);
var $author$project$Example$Paginated$config = $author$project$DataTable$config({ an: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.i;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.bT;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.a9;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.bL;
		}) ], aZ: function ($) {
		return $.i;
	}, a$: $author$project$Example$Paginated$SetTableState });
var $gren_lang$browser$Html$h1 = $gren_lang$browser$Html$node('h1');
var $gren_lang$browser$Html$input = $gren_lang$browser$Html$node('input');
var $gren_lang$browser$Html$Events$alwaysStop = function(msg) {
	return { h: msg, A: true };
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
		return $gren_lang$core$Maybe$Just({ bh: value, bD: $gren_lang$core$Array$dropFirst$(1, array) });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $author$project$DataTable$updatePageSize$ = function(minimumNewPageSize, _v0) {
	var _v1 = _v0;
	var sortColumns = _v1.k;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.l;
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
	return { f: activeRowId, d: newPageSize, b: pagination, k: sortColumns, l: tableId };
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
			var name = _v2.i;
			var sorter = _v2.z;
			var rest = _v1.bD;
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
	var sortColumns = _v1.k;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.l;
	var _v2 = $gren_lang$core$Array$popFirst(sortColumns);
	if (!_v2.$) {
		var _v3 = _v2.a;
		var _v4 = _v3.bh;
		var sortColumnName = _v4.ae;
		var sortDirection = _v4.P;
		var rest = _v3.bD;
		var _v5 = $author$project$DataTable$findSorter$(sortColumnName, cData);
		if (_v5.$ === 1) {
			return data;
		} else {
			var sorter = _v5.a;
			return $author$project$DataTable$sort$({ f: activeRowId, d: pageSize, b: pagination, k: rest, l: tableId }, cData, $author$project$DataTable$applySorter$(sortDirection, sorter, data));
		}
	} else {
		return data;
	}
};
var $author$project$DataTable$sort = F3($author$project$DataTable$sort$);
var $author$project$DataTable$getSortedData$ = function(_v0, state, data) {
	var columns = _v0.an;
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
	var name = _v0.i;
	var sorter = _v0.z;
	return { i: name, z: sorter };
};
var $author$project$DataTable$headerInfo$ = function(name, selected, sortDirections, clickActions) {
	return { ba: clickActions, i: name, bH: selected, aQ: sortDirections };
};
var $author$project$DataTable$headerInfo = F4($author$project$DataTable$headerInfo$);
var $gren_lang$browser$Html$Events$onMouseUp = function(msg) {
	return $gren_lang$browser$Html$Events$on$('mouseup', $gren_lang$core$Json$Decode$succeed(msg));
};
var $gren_lang$browser$Html$Attributes$title = $gren_lang$browser$Html$Attributes$stringProperty('title');
var $gren_lang$core$Basics$neq = _Utils_notEqual;
var $author$project$DataTable$updateMultiSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0;
	var sortColumns = _v1.k;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.l;
	var newSortState = _Utils_ap([ { ae: newSortColumn, P: sortDirection } ], A2($gren_lang$core$Array$keepIf, function(_v2) {
				var sortColumnName = _v2.ae;
				return !_Utils_eq(sortColumnName, newSortColumn);
			}, sortColumns));
	return { f: activeRowId, d: pageSize, b: pagination, k: newSortState, l: tableId };
};
var $author$project$DataTable$updateMultiSortState = F3($author$project$DataTable$updateMultiSortState$);
var $author$project$DataTable$onColumnHeader$ = function(state, name, sortDirection, toMsg) {
	return [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateSortState$(name, sortDirection, state))), $gren_lang$browser$Html$Events$onMouseUp(toMsg($author$project$DataTable$updateMultiSortState$(name, sortDirection, state))), $gren_lang$browser$Html$Attributes$title('Click to sort by this column.\n' + ('Click elsewhere and release here\n' + 'to add this column to the sort order.')) ];
};
var $author$project$DataTable$onColumnHeader = F4($author$project$DataTable$onColumnHeader$);
var $author$project$DataTable$toHeaderInfo$ = function(state, toMsg, _v0) {
	var sortColumns = state.k;
	var name = _v0.i;
	var sorter = _v0.z;
	var selected = function () {
		if (sortColumns.length === 0) {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var nonEmptyList = sortColumns;
			var indexedList = A2($gren_lang$core$Array$indexedMap, F2(function(idx, val) {
						return { br: idx, bE: val };
					}), $gren_lang$core$Array$reverse(nonEmptyList));
			var filteredList = A2($gren_lang$core$Array$keepIf, function(_v8) {
					var sortColumnName = _v8.bE.ae;
					return _Utils_eq(name, sortColumnName);
				}, indexedList);
			var _v6 = $gren_lang$core$Array$takeFirst$(1, filteredList);
			if (_v6.length === 1) {
				var _v7 = _v6[0];
				var index = _v7.br;
				var sortDirection = _v7.bE.P;
				return $gren_lang$core$Maybe$Just({ P: sortDirection, bK: ($gren_lang$core$Array$length(indexedList) === 1) ? 0 : (index + 1) });
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
			var sortDirection = selected.a.P;
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
	var viewData = _v0.B;
	var sorter = _v0.z;
	var details = viewData(data);
	return A2($gren_lang$browser$Html$td, details.D, details.E);
};
var $author$project$DataTable$viewCell = F2($author$project$DataTable$viewCell$);
var $author$project$DataTable$viewRowHelp$ = function(columns, toRowAttrs, toId, toMsg, state, data) {
	return A2($gren_lang$browser$Html$tr, A4(toRowAttrs, toId, toMsg, state, data), A2($gren_lang$core$Array$map, $author$project$DataTable$viewCell(data), columns));
};
var $author$project$DataTable$viewRowHelp = F6($author$project$DataTable$viewRowHelp$);
var $author$project$DataTable$viewRow$ = function(toId, toMsg, columns, toRowAttrs, state, data) {
	return { bp: toId(data), bw: $author$project$DataTable$viewRowHelp$(columns, toRowAttrs, toId, toMsg, state, data) };
};
var $author$project$DataTable$viewRow = F6($author$project$DataTable$viewRow$);
var $author$project$DataTable$view$ = function(conf, state, data) {
	var _v0 = conf;
	var toId = _v0.aZ;
	var toMsg = _v0.a$;
	var columns = _v0.an;
	var customizations = _v0.ap;
	var rows = $author$project$DataTable$getPaginatedData$(conf, state, $author$project$DataTable$getSortedData$(conf, state, data));
	var tbody = A3($gren_lang$browser$Html$Keyed$node, 'tbody', customizations.aU, A2($gren_lang$core$Array$map, A5($author$project$DataTable$viewRow, toId, toMsg, columns, customizations.aN, state), rows));
	var withFoot = function () {
		var _v3 = customizations.aV;
		if (_v3.$ === 1) {
			return [ tbody ];
		} else {
			var _v4 = _v3.a;
			var attributes = _v4.D;
			var children = _v4.E;
			return [ A2($gren_lang$browser$Html$tfoot, attributes, children), tbody ];
		}
	}();
	var headers = A2($gren_lang$core$Array$map, $author$project$DataTable$toHeader, columns);
	var theadDetails = customizations.aW(A2($gren_lang$core$Array$map, A2($author$project$DataTable$toHeaderInfo, state, toMsg), headers));
	var thead = A2($gren_lang$browser$Html$thead, theadDetails.D, theadDetails.E);
	return A2($gren_lang$browser$Html$table, customizations.aS, function () {
			var _v1 = customizations.am;
			if (_v1.$ === 1) {
				return _Utils_ap([ thead ], withFoot);
			} else {
				var _v2 = _v1.a;
				var attributes = _v2.D;
				var children = _v2.E;
				return _Utils_ap([ A2($gren_lang$browser$Html$caption, attributes, children) ], _Utils_ap([ thead ], withFoot));
			}
		}());
};
var $author$project$DataTable$view = F3($author$project$DataTable$view$);
var $author$project$Example$Paginated$view = function(_v0) {
	var people = _v0.bz;
	var tableState = _v0.aT;
	var query = _v0.aL;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.i;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Pagination (Scrolling variant)') ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$Paginated$SetQuery) ], [  ]), $author$project$DataTable$pageLengthChooser$($author$project$Example$Paginated$config, tableState), $author$project$DataTable$view$($author$project$Example$Paginated$config, tableState, acceptablePeople) ]);
};
var $author$project$Example$Presidents$SetQuery = function (a) {
	return { $: 0, a: a };
};
var $author$project$Example$Presidents$SetTableState = function (a) {
	return { $: 1, a: a };
};
var $author$project$Example$Presidents$config = $author$project$DataTable$config({ an: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.i;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.bT;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.a9;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.bL;
		}) ], aZ: function ($) {
		return $.i;
	}, a$: $author$project$Example$Presidents$SetTableState });
var $author$project$Example$Presidents$view = function(_v0) {
	var people = _v0.bz;
	var tableState = _v0.aT;
	var query = _v0.aL;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.i;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Sortable table.') ]), A2($gren_lang$browser$Html$div, [  ], [ $gren_lang$browser$Html$text('Single click to set the sort order to that column. '), $gren_lang$browser$Html$text('If the column was selected already, the sort order is reversed. '), $gren_lang$browser$Html$text('Click elsewhere and release the click on column header to add that column to the end of the sort order (...then sort by Year). '), $gren_lang$browser$Html$text('If the column was selected already, it is moved to the end of the sort order sequence. ') ]), A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$Presidents$SetQuery) ], [  ]), $author$project$DataTable$view$($author$project$Example$Presidents$config, tableState, acceptablePeople) ]);
};
var $author$project$DocBook$view = function(model) {
	var isActive = function(variant) {
		return _Utils_eq(model.C, variant) ? [ $gren_lang$browser$Html$Attributes$class('active'), $gren_lang$browser$Html$Attributes$tabindex(-1) ] : [  ];
	};
	var variants = A2($gren_lang$core$Array$map, function(variant) {
			return A2($gren_lang$browser$Html$button, _Utils_ap([ $gren_lang$browser$Html$Events$onClick($author$project$DocBook$SwitchExample(variant)) ], isActive(variant)), [ $gren_lang$browser$Html$text($author$project$DocBook$exampleName(variant)) ]);
		}, $author$project$DocBook$buttons);
	return A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$id('wrapper') ], [ A2($gren_lang$browser$Html$nav, [ $gren_lang$browser$Html$Attributes$id('navigation') ], _Utils_ap([ A2($gren_lang$browser$Html$h3, [  ], [ $gren_lang$browser$Html$text('Examples') ]) ], variants)), A2($gren_lang$browser$Html$article, [ $gren_lang$browser$Html$Attributes$id('example') ], [ function () {
				var _v0 = model.C;
				if (!_v0) {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PresidentsMsg, $author$project$Example$Presidents$view(model.N));
				} else {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PaginatedMsg, $author$project$Example$Paginated$view(model.M));
				}
			}() ]) ]);
};
var $author$project$DocBook$main = $gren_lang$browser$Browser$sandbox({ bl: $author$project$DocBook$init, bQ: $author$project$DocBook$update, bR: $author$project$DocBook$view });
_Platform_export({'DocBook':{'init':$author$project$DocBook$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));
//# sourceMappingURL=data:application/json;base64,ewogICAgInZlcnNpb24iOiAzLAogICAgInNvdXJjZXMiOiBbCiAgICAgICAgIkRpY3QiLAogICAgICAgICJBcnJheSIsCiAgICAgICAgIlNldCIsCiAgICAgICAgIkJhc2ljcyIsCiAgICAgICAgIkRhdGFUYWJsZSIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzIiwKICAgICAgICAiU2hhcmVkLkV4YW1wbGVEYXRhIiwKICAgICAgICAiRG9jQm9vayIsCiAgICAgICAgIlN0cmluZyIsCiAgICAgICAgIkpzb24uRW5jb2RlIiwKICAgICAgICAiSnNvbi5EZWNvZGUiLAogICAgICAgICJDaGFyIiwKICAgICAgICAiUmVzdWx0IiwKICAgICAgICAiVmlydHVhbERvbSIsCiAgICAgICAgIlVybCIsCiAgICAgICAgIlRhc2siLAogICAgICAgICJQbGF0Zm9ybSIsCiAgICAgICAgIlBsYXRmb3JtLkNtZCIsCiAgICAgICAgIlBsYXRmb3JtLlN1YiIsCiAgICAgICAgIkJyb3dzZXIiLAogICAgICAgICJIdG1sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzIiwKICAgICAgICAiSHRtbC5FdmVudHMiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYSIsCiAgICAgICAgIk1heWJlIiwKICAgICAgICAiTWF0aCIsCiAgICAgICAgIkh0bWwuS2V5ZWQiCiAgICBdLAogICAgInNvdXJjZXNDb250ZW50IjogWwogICAgICAgICJtb2R1bGUgRGljdCBleHBvc2luZ1xuICAgICggRGljdFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcbiAgICAsIGlzRW1wdHksIGNvdW50LCBnZXQsIG1lbWJlciwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCBrZXlzLCB2YWx1ZXNcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICAsIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmYsIG1lcmdlXG4gICAgKVxuXG57LXwgQSBkaWN0aW9uYXJ5IG1hcHBpbmcgdW5pcXVlIGtleXMgdG8gdmFsdWVzLiBUaGUga2V5cyBjYW4gYmUgYW55IGNvbXBhcmFibGVcbnR5cGUuIFRoaXMgaW5jbHVkZXMgYEludGAsIGBGbG9hdGAsIGBUaW1lYCwgYENoYXJgIGFuZCBgU3RyaW5nYC5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBEaWN0XG5cblxuQGRvY3MgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBpc0VtcHR5LCBjb3VudCwgZ2V0LCBtZW1iZXIsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuXG5cbiMjIEFycmF5c1xuXG5AZG9jcyBrZXlzLCB2YWx1ZXNcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3MgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgdW5pb24sIGludGVyc2VjdCwgZGlmZiwgbWVyZ2VcblxuLX1cblxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKC4uKVxuXG5cblxuLS0gRElDVElPTkFSSUVTXG4tLSBUaGUgY29sb3Igb2YgYSBub2RlLiBMZWF2ZXMgYXJlIGNvbnNpZGVyZWQgQmxhY2suXG5cblxudHlwZSBOQ29sb3JcbiAgICA9IFJlZFxuICAgIHwgQmxhY2tcblxuXG57LXwgQSBkaWN0aW9uYXJ5IG9mIGtleXMgYW5kIHZhbHVlcy4gU28gYSBgRGljdCBTdHJpbmcgVXNlcmAgaXMgYSBkaWN0aW9uYXJ5XG50aGF0IGxldHMgeW91IGxvb2sgdXAgYSBgU3RyaW5nYCAoc3VjaCBhcyB1c2VyIG5hbWVzKSBhbmQgZmluZCB0aGUgYXNzb2NpYXRlZFxuYFVzZXJgLlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKCBEaWN0IClcblxuICAgIHVzZXJzIDogRGljdCBTdHJpbmcgVXNlclxuICAgIHVzZXJzID1cbiAgICAgICAgRGljdC5lbXB0eVxuICAgICAgICAgICAgfD4gRGljdC5zZXQgXCJBbGljZVwiIChtYWtlVXNlciBcIkFsaWNlXCIgMjggMS42NSlcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQm9iXCIgKG1ha2VVc2VyIFwiQm9iXCIgMTkgMS44MilcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQ2h1Y2tcIiAobWFrZVVzZXIgXCJDaHVja1wiIDMzIDEuNzUpXG5cbiAgICB0eXBlIGFsaWFzIFVzZXIgPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgLCBoZWlnaHQgOiBGbG9hdFxuICAgICAgICB9XG5cbiAgICBtYWtlVXNlciA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gVXNlclxuICAgIG1ha2VVc2VyIG5hbWUgYWdlIGhlaWdodCA9XG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgLCBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgfVxuLX1cbnR5cGUgRGljdCBrIHZcbiAgICA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA6IE5Db2xvciwga2V5IDogaywgdmFsdWUgOiB2LCBsZWZ0IDogKERpY3QgayB2KSwgcmlnaHQgOiAoRGljdCBrIHYpIH1cbiAgICB8IFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBkaWN0aW9uYXJ5LlxuLX1cbmVtcHR5IDogRGljdCBrIHZcbmVtcHR5ID1cbiAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm5vZGUgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5ub2RlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICBSQk5vZGVfZ3Jlbl9idWlsdGluXG4gICAgICAgIHsgY29sb3IgPSBjb2xvclxuICAgICAgICAsIGtleSA9IGtleVxuICAgICAgICAsIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLCBsZWZ0ID0gbGVmdFxuICAgICAgICAsIHJpZ2h0ID0gcmlnaHRcbiAgICAgICAgfVxuXG5cbnstfCBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBhIGtleS4gSWYgdGhlIGtleSBpcyBub3QgZm91bmQsIHJldHVyblxuYE5vdGhpbmdgLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSBhcmUgbm90IHN1cmUgaWYgYSBrZXkgd2lsbCBiZSBpbiB0aGVcbmRpY3Rpb25hcnkuXG5cbiAgICBhbmltYWxzID0gRGljdC5lbXB0eSB8PiBEaWN0LnNldCBcIlRvbVwiIENhdCB8PiBEaWN0LnNldCBcIkplcnJ5XCIgTW91c2VcblxuICAgIGdldCBcIlRvbVwiICAgYW5pbWFscyA9PSBKdXN0IENhdFxuICAgIGdldCBcIkplcnJ5XCIgYW5pbWFscyA9PSBKdXN0IE1vdXNlXG4gICAgZ2V0IFwiU3Bpa2VcIiBhbmltYWxzID09IE5vdGhpbmdcblxuLX1cbmdldCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gTWF5YmUgdlxuZ2V0IHRhcmdldEtleSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIHRhcmdldEtleSBrZXkgaXNcbiAgICAgICAgICAgICAgICBMVCAtPlxuICAgICAgICAgICAgICAgICAgICBnZXQgdGFyZ2V0S2V5IGxlZnRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgdmFsdWVcblxuICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgIGdldCB0YXJnZXRLZXkgcmlnaHRcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEga2V5IGlzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tZW1iZXIgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IEJvb2xcbm1lbWJlciBrZXkgZGljdCA9XG4gICAgd2hlbiBnZXQga2V5IGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIHBhaXJzIGluIHRoZSBkaWN0aW9uYXJ5LlxuLX1cbmNvdW50IDogRGljdCBrIHYgLT4gSW50XG5jb3VudCBkaWN0ID1cbiAgICBjb3VudEhlbHAgMCBkaWN0XG5cblxuY291bnRIZWxwIDogSW50IC0+IERpY3QgayB2IC0+IEludFxuY291bnRIZWxwIG4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBuXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGNvdW50SGVscCAoY291bnRIZWxwIChuICsgMSkgcmlnaHQpIGxlZnRcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0LCBvciBsb3dlc3QsIGtleS12YWx1ZSBwYWlyLlxuLX1cbmZpcnN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxuZmlyc3QgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCB9IC0+XG4gICAgICAgICAgICBmaXJzdCBsZWZ0XG5cblxuey18IFJldHJpZXZlIHRoZSBsYXN0LCBvciBoaWdoZXN0LCBrZXktdmFsdWUgcGFpci5cbi19XG5sYXN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxubGFzdCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgcmlnaHQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbGFzdCByaWdodFxuXG5cbnstfCBGaW5kIHRoZSBmaXJzdCBrZXktdmFsdWUgcGFpciB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kRmlyc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRGaXJzdCBmbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kRmlyc3QgZm4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgZm4ga2V5IHZhbHVlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdCBmbiByaWdodFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IEZpbmQgdGhlIGxhc3Qga2V5LXZhbHVlIHBhaXIgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZExhc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRMYXN0IGZuIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGZpbmRMYXN0IGZuIHJpZ2h0IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBmbiBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZExhc3QgZm4gbGVmdFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IENoZWNrcyBpZiBhbnkga2V5LXZhbHVlIHBhaXIgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFueSA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYW55IGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IGZuIGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCBrZXktdmFsdWUgcGFpcnMgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFsbCA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYWxsIGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IChcXGtleSB2YWx1ZSAtPiBub3QgPHwgZm4ga2V5IHZhbHVlKSBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IERldGVybWluZSBpZiBhIGRpY3Rpb25hcnkgaXMgZW1wdHkuXG5cbiAgICBpc0VtcHR5IGVtcHR5ID09IFRydWVcblxuLX1cbmlzRW1wdHkgOiBEaWN0IGsgdiAtPiBCb29sXG5pc0VtcHR5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4gXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgU2V0cyBhIHZhbHVlIGZvciBhIGdpdmVuIGtleS4gRXhpc3RpbmcgdmFsdWVzIHdpbGwgYmUgcmVwbGFjZWQuXG5JZiB0aGUga2V5IGlzbid0IGFscmVhZHkgcmVnaXN0ZXJlZCwgdGhlIGtleS12YWx1ZSBwYWlyIHdpbGwgYmUgaW5zZXJ0ZWQuXG4tfVxuc2V0IDogY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5zZXQgc2V0S2V5IHNldFZhbHVlIGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHNldEhlbHAgc2V0S2V5IHNldFZhbHVlIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIEJsYWNrIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0XG5cbiAgICAgICAgeCAtPlxuICAgICAgICAgICAgeFxuXG5cbnNldEhlbHAgOiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnNldEhlbHAga2V5IHZhbHVlIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgLS0gTmV3IG5vZGVzIGFyZSBhbHdheXMgcmVkLiBJZiBpdCB2aW9sYXRlcyB0aGUgcnVsZXMsIGl0IHdpbGwgYmUgZml4ZWRcbiAgICAgICAgICAgIC0tIHdoZW4gYmFsYW5jaW5nLlxuICAgICAgICAgICAgbm9kZSBSZWQga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9ICBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIGtleSBuS2V5IGlzXG4gICAgICAgICAgICAgICAgTFQgLT5cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHNldEhlbHAga2V5IHZhbHVlIG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgbkNvbG9yIG5LZXkgdmFsdWUgbkxlZnQgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSBuTGVmdCAoc2V0SGVscCBrZXkgdmFsdWUgblJpZ2h0KVxuXG5cbmJhbGFuY2UgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5iYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICB3aGVuIHJpZ2h0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGtleSB2YWx1ZSAobm9kZSBCbGFjayBsSyBsViBsTGVmdCBsUmlnaHQpIChub2RlIEJsYWNrIHJLIHJWIHJMZWZ0IHJSaWdodClcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBySyByViAobm9kZSBSZWQga2V5IHZhbHVlIGxlZnQgckxlZnQpIHJSaWdodFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxsSywgdmFsdWUgPSBsbFYsIGxlZnQgPSBsbExlZnQsIHJpZ2h0ID0gbGxSaWdodCB9LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGxLIGxWIChub2RlIEJsYWNrIGxsSyBsbFYgbGxMZWZ0IGxsUmlnaHQpIChub2RlIEJsYWNrIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuXG57LXwgUmVtb3ZlIGEga2V5LXZhbHVlIHBhaXIgZnJvbSBhIGRpY3Rpb25hcnkuIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kLFxubm8gY2hhbmdlcyBhcmUgbWFkZS5cbi19XG5yZW1vdmUgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmUga2V5IGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHJlbW92ZUhlbHAga2V5IGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBuS2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBCbGFjayBuS2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuICAgICAgICB4IC0+XG4gICAgICAgICAgICB4XG5cblxuey18IFRoZSBlYXNpZXN0IHRoaW5nIHRvIHJlbW92ZSBmcm9tIHRoZSB0cmVlLCBpcyBhIHJlZCBub2RlLiBIb3dldmVyLCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlXG5ub2RlIHRvIHJlbW92ZSwgd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZiBpdCB3aWxsIGJlIHJlZCBvciBub3QuIFRoaXMgcmVtb3ZlIGltcGxlbWVudGF0aW9uXG5tYWtlcyBzdXJlIHRoYXQgdGhlIGJvdHRvbSBub2RlIGlzIHJlZCBieSBtb3ZpbmcgcmVkIGNvbG9ycyBkb3duIHRoZSB0cmVlIHRocm91Z2ggcm90YXRpb25cbmFuZCBjb2xvciBmbGlwcy4gQW55IHZpb2xhdGlvbnMgdGhpcyB3aWxsIGNhdXNlLCBjYW4gZWFzaWx5IGJlIGZpeGVkIGJ5IGJhbGFuY2luZyBvbiB0aGUgd2F5XG51cCBhZ2Fpbi5cbi19XG5yZW1vdmVIZWxwIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlSGVscCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5IDwga2V5IHRoZW5cbiAgICAgICAgICAgICAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2ssIGxlZnQgPSBsTGVmdCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGxMZWZ0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbW92ZVJlZExlZnQgZGljdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9IG5MZWZ0LCByaWdodCA9IG5SaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVIZWxwIHRhcmdldEtleSBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVtb3ZlSGVscEVRR1QgdGFyZ2V0S2V5IChyZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQpXG5cblxucmVtb3ZlSGVscFByZXBFUUdUIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBOQ29sb3IgLT4gY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQgPVxuICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgY29sb3IgbEsgbFYgbExlZnQgKG5vZGUgUmVkIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgd2hlbiByaWdodCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2sgfSB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSZWRSaWdodCBkaWN0XG5cbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjaywgbGVmdCA9IFJCRW1wdHlfZ3Jlbl9idWlsdGluIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbW92ZVJlZFJpZ2h0IGRpY3RcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgZGljdFxuXG5cbnstfCBXaGVuIHdlIGZpbmQgdGhlIG5vZGUgd2UgYXJlIGxvb2tpbmcgZm9yLCB3ZSBjYW4gcmVtb3ZlIGJ5IHJlcGxhY2luZyB0aGUga2V5LXZhbHVlXG5wYWlyIHdpdGggdGhlIGtleS12YWx1ZSBwYWlyIG9mIHRoZSBsZWZ0LW1vc3Qgbm9kZSBvbiB0aGUgcmlnaHQgc2lkZSAodGhlIGNsb3Nlc3QgcGFpcikuXG4tfVxucmVtb3ZlSGVscEVRR1QgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwRVFHVCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5ID09IGtleSB0aGVuXG4gICAgICAgICAgICAgICAgd2hlbiBnZXRNaW4gcmlnaHQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSA9IG1pbktleSwgdmFsdWUgPSBtaW5WYWx1ZSB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIG1pbktleSBtaW5WYWx1ZSBsZWZ0IChyZW1vdmVNaW4gcmlnaHQpXG5cbiAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IChyZW1vdmVIZWxwIHRhcmdldEtleSByaWdodClcblxuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5nZXRNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxuZ2V0TWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCA9ICgoUkJOb2RlX2dyZW5fYnVpbHRpbiBfKSBhcyBsZWZ0KSB9IC0+XG4gICAgICAgICAgICBnZXRNaW4gbGVmdFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5yZW1vdmVNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxucmVtb3ZlTWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQgPSAoKFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDb2xvciwgbGVmdCA9IGxMZWZ0IH0pIGFzIGxlZnQpLCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGxDb2xvciBpc1xuICAgICAgICAgICAgICAgIEJsYWNrIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbExlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZU1pbiBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtb3ZlUmVkTGVmdCBkaWN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IG5Db2xvciwga2V5ID0gbktleSwgdmFsdWUgPSBuVmFsdWUsIGxlZnQgPSBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZU1pbiBuTGVmdCkgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVNaW4gbGVmdCkgcmlnaHRcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm1vdmVSZWRMZWZ0IDogRGljdCBrIHYgLT4gRGljdCBrIHZcbm1vdmVSZWRMZWZ0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSAoUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBybEssIHZhbHVlID0gcmxWLCBsZWZ0ID0gcmxMLCByaWdodCA9IHJsUiB9KSBhcyByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgUmVkXG4gICAgICAgICAgICAgICAgcmxLXG4gICAgICAgICAgICAgICAgcmxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgayB2IChub2RlIFJlZCBsSyBsViBsTGVmdCBsUmlnaHQpIHJsTClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBySyByViBybFIgclJpZ2h0KVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5tb3ZlUmVkUmlnaHQgOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxubW92ZVJlZFJpZ2h0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsbEssIHZhbHVlID0gbGxWLCBsZWZ0ID0gbGxMZWZ0LCByaWdodCA9IGxsUmlnaHQgfSwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBSZWRcbiAgICAgICAgICAgICAgICBsS1xuICAgICAgICAgICAgICAgIGxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgbGxLIGxsViBsbExlZnQgbGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBrIHYgbFJpZ2h0IChub2RlIFJlZCBySyByViByTGVmdCByUmlnaHQpKVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG57LXwgVXBkYXRlIHRoZSB2YWx1ZSBvZiBhIGRpY3Rpb25hcnkgZm9yIGEgc3BlY2lmaWMga2V5IHdpdGggYSBnaXZlbiBmdW5jdGlvbi5cbi19XG51cGRhdGUgOiBjb21wYXJhYmxlIC0+IChNYXliZSB2IC0+IE1heWJlIHYpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG51cGRhdGUgdGFyZ2V0S2V5IGFsdGVyIGRpY3Rpb25hcnkgPVxuICAgIHdoZW4gYWx0ZXIgKGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgc2V0IHRhcmdldEtleSB2YWx1ZSBkaWN0aW9uYXJ5XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgcmVtb3ZlIHRhcmdldEtleSBkaWN0aW9uYXJ5XG5cblxuey18IFNhbWUgYXMgW3VwZGF0ZV0oI3VwZGF0ZSkgYnV0IGlmIHRoZSBrZXkgZG9lc24ndCBleGlzdCBpbiB0aGUgZGljdGlvbmFyeSwgYSBkZWZhdWx0IHZhbHVlXG5pcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIHVwZGF0ZSBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgYE1heWJlYC5cbi19XG51cGRhdGVXaXRoRGVmYXVsdCA6IGNvbXBhcmFibGUgLT4gdiAtPiAodiAtPiB2KSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxudXBkYXRlV2l0aERlZmF1bHQgdGFyZ2V0S2V5IGRlZmF1bHRWYWx1ZSBhbHRlciBkaWN0aW9uYXJ5ID1cbiAgICB3aGVuIGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBzZXQgdGFyZ2V0S2V5IChhbHRlciB2YWx1ZSkgZGljdGlvbmFyeVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIHNldCB0YXJnZXRLZXkgKGFsdGVyIGRlZmF1bHRWYWx1ZSkgZGljdGlvbmFyeVxuXG5cbnstfCBDcmVhdGUgYSBkaWN0aW9uYXJ5IHdpdGggb25lIGtleS12YWx1ZSBwYWlyLlxuLX1cbnNpbmdsZXRvbiA6IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuc2luZ2xldG9uIGtleSB2YWx1ZSA9XG4gICAgLS0gUm9vdCBub2RlIGlzIGFsd2F5cyBCbGFja1xuICAgIG5vZGUgQmxhY2sga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGRpY3Rpb25hcmllcy4gSWYgdGhlcmUgaXMgYSBjb2xsaXNpb24sIHByZWZlcmVuY2UgaXMgZ2l2ZW5cbnRvIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbnVuaW9uIDogRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnVuaW9uIHQxIHQyID1cbiAgICBmb2xkbCBzZXQgdDIgdDFcblxuXG57LXwgS2VlcCBhIGtleS12YWx1ZSBwYWlyIHdoZW4gaXRzIGtleSBhcHBlYXJzIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cblByZWZlcmVuY2UgaXMgZ2l2ZW4gdG8gdmFsdWVzIGluIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbmludGVyc2VjdCA6IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5pbnRlcnNlY3QgdDEgdDIgPVxuICAgIGtlZXBJZiAoXFxrIF8gLT4gbWVtYmVyIGsgdDIpIHQxXG5cblxuey18IEtlZXAgYSBrZXktdmFsdWUgcGFpciB3aGVuIGl0cyBrZXkgZG9lcyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cbi19XG5kaWZmIDogRGljdCBjb21wYXJhYmxlIGEgLT4gRGljdCBjb21wYXJhYmxlIGIgLT4gRGljdCBjb21wYXJhYmxlIGFcbmRpZmYgdDEgdDIgPVxuICAgIGZvbGRsIChcXGsgdiB0IC0+IHJlbW92ZSBrIHQpIHQxIHQyXG5cblxuXG4tLSBUUkFOU0ZPUk1cblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiB0byBhbGwgdmFsdWVzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tYXAgOiAoayAtPiBhIC0+IGIpIC0+IERpY3QgayBhIC0+IERpY3QgayBiXG5tYXAgZnVuYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIGNvbG9yIGtleSAoZnVuYyBrZXkgdmFsdWUpIChtYXAgZnVuYyBsZWZ0KSAobWFwIGZ1bmMgcmlnaHQpXG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGxvd2VzdCBrZXkgdG8gaGlnaGVzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRsIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzMzLDE5LDI4XVxuXG4tfVxuZm9sZGwgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkbCBmdW5jIGFjYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkbCBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZGwgZnVuYyBhY2MgbGVmdCkpIHJpZ2h0XG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGhpZ2hlc3Qga2V5IHRvIGxvd2VzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRyIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzI4LDE5LDMzXVxuXG4tfVxuZm9sZHIgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkciBmdW5jIGFjYyB0ID1cbiAgICB3aGVuIHQgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkciBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZHIgZnVuYyBhY2MgcmlnaHQpKSBsZWZ0XG5cblxuey18IEtlZXAgb25seSB0aGUga2V5LXZhbHVlIHBhaXJzIHRoYXQgcGFzcyB0aGUgZ2l2ZW4gdGVzdC5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiB2IC0+IEJvb2wpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5rZWVwSWYgaXNHb29kIGRpY3QgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGsgdiBkIC0+XG4gICAgICAgICAgICBpZiBpc0dvb2QgayB2IHRoZW5cbiAgICAgICAgICAgICAgICBzZXQgayB2IGRcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRcbiAgICAgICAgKVxuICAgICAgICBlbXB0eVxuICAgICAgICBkaWN0XG5cblxuey18IFJlbW92ZSB1bndhbnRlZCByZXN1bHRzIG9mIGEgbWFwIG9wZXJhdGlvbi5cbi19XG5tYXBBbmRLZWVwSnVzdCA6IChjb21wYXJhYmxlIC0+IHYgLT4gTWF5YmUgeCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHhcbm1hcEFuZEtlZXBKdXN0IHRvTWF5YmUgZGljdCA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcayB2IGQgLT5cbiAgICAgICAgICAgIHdoZW4gdG9NYXliZSBrIHYgaXNcbiAgICAgICAgICAgICAgICBKdXN0IG5ld1ZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBrIG5ld1ZhbHVlIGRcblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgZFxuICAgICAgICApXG4gICAgICAgIGVtcHR5XG4gICAgICAgIGRpY3RcblxuXG57LXwgUGFydGl0aW9uIGEgZGljdGlvbmFyeSBhY2NvcmRpbmcgdG8gc29tZSB0ZXN0LiBUaGUgZmlyc3QgZGljdGlvbmFyeVxuY29udGFpbnMgYWxsIGtleS12YWx1ZSBwYWlycyB3aGljaCBwYXNzZWQgdGhlIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zXG50aGUgcGFpcnMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4geyB0cnVlcyA6IERpY3QgY29tcGFyYWJsZSB2LCBmYWxzZXMgOiBEaWN0IGNvbXBhcmFibGUgdiB9XG5wYXJ0aXRpb24gaXNHb29kIGRpY3QgPVxuICAgIGxldFxuICAgICAgICBhZGQga2V5IHZhbHVlIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIGlmIGlzR29vZCBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSBzZXQga2V5IHZhbHVlIHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7IHRydWVzID0gdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IHNldCBrZXkgdmFsdWUgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgIGluXG4gICAgZm9sZGwgYWRkIHsgdHJ1ZXMgPSBlbXB0eSwgZmFsc2VzID0gZW1wdHkgfSBkaWN0XG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUga2V5cyBpbiBhIGRpY3Rpb25hcnksIHNvcnRlZCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxuXG4gICAga2V5cyAoRGljdC5lbXB0eSB8PiBEaWN0LnNldCAwIFwiQWxpY2VcIiB8PiBEaWN0LnNldCAxIFwiQm9iXCIpID09IFsgMCwgMSBdXG5cbi19XG5rZXlzIDogRGljdCBrIHYgLT4gQXJyYXkga1xua2V5cyBkaWN0ID1cbiAgICBmb2xkbCAoXFxrZXkgdmFsdWUga2V5QXJyYXkgLT4gQXJyYXkucHVzaExhc3Qga2V5IGtleUFycmF5KSBbXSBkaWN0XG5cblxuey18IEdldCBhbGwgb2YgdGhlIHZhbHVlcyBpbiBhIGRpY3Rpb25hcnksIGluIHRoZSBvcmRlciBvZiB0aGVpciBrZXlzLlxuXG4gICAgdmFsdWVzIChEaWN0LmVtcHR5IHw+IERpY3Quc2V0IDAgXCJBbGljZVwiIHw+IERpY3Quc2V0IDEgXCJCb2JcIikgPT0gWyBcIkFsaWNlXCIsIFwiQm9iXCIgXVxuXG4tfVxudmFsdWVzIDogRGljdCBrIHYgLT4gQXJyYXkgdlxudmFsdWVzIGRpY3QgPVxuICAgIGZvbGRsIChcXGtleSB2YWx1ZSB2YWx1ZUFycmF5IC0+IEFycmF5LnB1c2hMYXN0IHZhbHVlIHZhbHVlQXJyYXkpIFtdIGRpY3RcblxuXG57LXwgVGhlIG1vc3QgZ2VuZXJhbCB3YXkgb2YgY29tYmluaW5nIHR3byBkaWN0aW9uYXJpZXMuIFlvdSBwcm92aWRlIHRocmVlXG5hY2N1bXVsYXRvcnMgZm9yIHdoZW4gYSBnaXZlbiBrZXkgYXBwZWFyczpcblxuMS4gIE9ubHkgaW4gdGhlIGxlZnQgZGljdGlvbmFyeS5cbjIuICBJbiBib3RoIGRpY3Rpb25hcmllcy5cbjMuICBPbmx5IGluIHRoZSByaWdodCBkaWN0aW9uYXJ5LlxuICAgIFlvdSB0aGVuIHRyYXZlcnNlIGFsbCB0aGUga2V5cyBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LCBidWlsZGluZyB1cCB3aGF0ZXZlclxuICAgIHlvdSB3YW50LlxuXG4tfVxubWVyZ2UgOlxuICAgIChjb21wYXJhYmxlIC0+IGEgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBhIC0+IGIgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBiIC0+IHJlc3VsdCAtPiByZXN1bHQpXG4gICAgLT4gRGljdCBjb21wYXJhYmxlIGFcbiAgICAtPiBEaWN0IGNvbXBhcmFibGUgYlxuICAgIC0+IHJlc3VsdFxuICAgIC0+IHJlc3VsdFxubWVyZ2UgbGVmdFN0ZXAgYm90aFN0ZXAgcmlnaHRTdGVwIGxlZnREaWN0IHJpZ2h0RGljdCBpbml0aWFsUmVzdWx0ID1cbiAgICBsZXRcbiAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIHsgYXJyYXksIHJlc3VsdCB9ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgYXJyYXkgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IHJpZ2h0U3RlcCByS2V5IHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBrZXkgPSBsS2V5LCB2YWx1ZSA9IGxWYWx1ZSB9LCByZXN0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgbEtleSA8IHJLZXkgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSBsZWZ0U3RlcCBsS2V5IGxWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBsS2V5ID4gcktleSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gcmlnaHRTdGVwIHJLZXkgclZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IGJvdGhTdGVwIGxLZXkgbFZhbHVlIHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB7IGFycmF5ID0gbGVmdG92ZXJzLCByZXN1bHQgPSBpbnRlcm1lZGlhdGVSZXN1bHQgfSA9XG4gICAgICAgICAgICBmb2xkbCBzdGVwU3RhdGUgeyBhcnJheSA9IGZvbGRsIChcXGtleSB2YWx1ZSBhcnJheSAtPiBBcnJheS5wdXNoTGFzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9IGFycmF5KSBbXSBsZWZ0RGljdCwgcmVzdWx0ID0gaW5pdGlhbFJlc3VsdCB9IHJpZ2h0RGljdFxuICAgIGluXG4gICAgQXJyYXkuZm9sZGwgKFxceyBrZXksIHZhbHVlIH0gcmVzdWx0IC0+IGxlZnRTdGVwIGtleSB2YWx1ZSByZXN1bHQpIGludGVybWVkaWF0ZVJlc3VsdCBsZWZ0b3ZlcnNcbiIsCiAgICAgICAgIm1vZHVsZSBBcnJheSBleHBvc2luZ1xuICAgICggQXJyYXlcbiAgICAsIHNpbmdsZXRvbiwgaW5pdGlhbGl6ZSwgcmVwZWF0LCByYW5nZVxuICAgICwgbWFwLCBpbmRleGVkTWFwLCBmb2xkbCwgZm9sZHIsIGluZGV4ZWRGb2xkbCwgaW5kZXhlZEZvbGRyLCBrZWVwSWYsIGluZGV4ZWRLZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCByZXZlcnNlXG4gICAgLCBpc0VtcHR5LCBsZW5ndGgsIGdldCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuICAgICwgc2V0LCBzZXRNYW55LCB1cGRhdGUsIGluc2VydCwgaW5zZXJ0TWFueSwgcmVtb3ZlLCByZW1vdmVNYW55LCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBzcGxpY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgZmxhdHRlbiwgbWFwQW5kRmxhdHRlbiwgaW50ZXJzcGVyc2UsIG1hcDIsIG1hcDNcbiAgICAsIGZpcnN0LCBsYXN0LCBzbGljZSwgZHJvcEZpcnN0LCBkcm9wTGFzdCwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgcG9wRmlyc3QsIHBvcExhc3QsIHBhcnRpdGlvblxuICAgICwgc29ydCwgc29ydEJ5LCBzb3J0V2l0aFxuICAgIClcblxuey18IFlvdSBjYW4gY3JlYXRlIGFuIGBBcnJheWAgdXNpbmcgdGhlIGBbMSwgMiwgM11gIHN5bnRheC4gVGhpcyBtb2R1bGUgaGFzIGEgYnVuY2ggb2ZcbmZ1bmN0aW9ucyB0byBoZWxwIHlvdSB3b3JrIHdpdGggdGhlbS5cblxuQGRvY3MgQXJyYXlcblxuQGRvY3Mgc2luZ2xldG9uLCBpbml0aWFsaXplLCByZXBlYXQsIHJhbmdlXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIG1hcCwgaW5kZXhlZE1hcCwgZm9sZGwsIGZvbGRyLCBpbmRleGVkRm9sZGwsIGluZGV4ZWRGb2xkciwga2VlcElmLCBpbmRleGVkS2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcmV2ZXJzZVxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGlzRW1wdHksIGxlbmd0aCwgZ2V0LCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuXG5cbiMjIE1vZGlmeVxuXG5AZG9jcyBzZXQsIHNldE1hbnksIHVwZGF0ZSwgaW5zZXJ0LCBpbnNlcnRNYW55LCByZW1vdmUsIHJlbW92ZU1hbnksIHB1c2hGaXJzdCwgcHVzaExhc3QsIHNwbGljZVxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgcHJlcGVuZCwgYXBwZW5kLCBmbGF0dGVuLCBtYXBBbmRGbGF0dGVuLCBpbnRlcnNwZXJzZSwgbWFwMiwgbWFwM1xuXG5cbiMjIERlY29uc3RydWN0XG5cbkBkb2NzIHNsaWNlLCB0YWtlRmlyc3QsIHRha2VMYXN0LCBkcm9wRmlyc3QsIGRyb3BMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdCwgcGFydGl0aW9uXG5cblxuIyMgU29ydFxuXG5AZG9jcyBzb3J0LCBzb3J0QnksIHNvcnRXaXRoXG5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5BcnJheVxuXG5cbnstfCBBbiBBcnJheSBpcyBhbiBvcmRlcmVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4tfVxudHlwZSBBcnJheSBhXG4gICAgPSBBcnJheSBhXG5cblxuLS0gQ1JFQVRFXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIGEgc2luZ2xlIHZhbHVlLlxuLX1cbnNpbmdsZXRvbiA6IGEgLT4gQXJyYXkgYVxuc2luZ2xldG9uIGEgPVxuICAgIFsgYSBdXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBgbmAgZWxlbWVudHMsIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnRzXG5yZXN1bHRpbmcgZnJvbSBjYWxsaW5nIGBmbmAgd2l0aCBgb2Zmc2V0ICsgaW5kZXhgLlxuXG4gICAgaW5pdGlhbGl6ZSAzIDUgaWRlbnRpdHkgPT0gWyA1LCA2LCA3IF1cblxuSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHdlIGNyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIDMgaW50ZWdlcnNcbnN0YXJ0aW5nIGF0IDUuXG4tfVxuaW5pdGlhbGl6ZSA6IEludCAtPiBJbnQgLT4gKEludCAtPiBhKSAtPiBBcnJheSBhXG5pbml0aWFsaXplID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbml0aWFsaXplXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSB3aXRoIGBuYCBjb3BpZXMgb2YgYSB2YWx1ZTpcblxuICAgIHJlcGVhdCA1IDMgPT0gWyAzLCAzLCAzLCAzLCAzIF1cblxuLX1cbnJlcGVhdCA6IEludCAtPiBhIC0+IEFycmF5IGFcbnJlcGVhdCBuIHZhbCA9XG4gICAgaW5pdGlhbGl6ZSBuIDAgKFxcXyAtPiB2YWwpXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBudW1iZXJzLCBldmVyeSBlbGVtZW50IGluY3JlYXNpbmcgYnkgb25lLiBZb3UgZ2l2ZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IG51bWJlciB0aGF0IHNob3VsZCBiZSBpbiB0aGUgYXJyYXkuXG5cbiAgICByYW5nZSAzIDYgPT0gWzMsIDQsIDUsIDZdXG4gICAgcmFuZ2UgMyAzID09IFszXVxuICAgIHJhbmdlIDYgMyA9PSBbXVxuXG4tfVxucmFuZ2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IEludFxucmFuZ2UgZnJvbSB0byA9XG4gICAgaWYgZnJvbSA+IHRvIHRoZW5cbiAgICAgICAgW11cblxuICAgIGVsc2UgaWYgZnJvbSA9PSB0byB0aGVuXG4gICAgICAgIFtmcm9tXVxuXG4gICAgZWxzZSBcbiAgICAgICAgaW5pdGlhbGl6ZSAodG8gLSBmcm9tICsgMSkgZnJvbSBpZGVudGl0eVxuXG5cbi0tIFRSQU5TRk9STVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIG9uIGV2ZXJ5IGVsZW1lbnQgaW4gYW4gYXJyYXkuXG5cbiAgICBtYXAgbmVnYXRlIFsgMSwgNCwgOSBdID09IFsgLTEsIC00LCAtOSBdXG5cblNvIGBtYXAgZnVuYyBbIGEsIGIsIGMgXWAgaXMgdGhlIHNhbWUgYXMgYFsgZnVuYyBhLCBmdW5jIGIsIGZ1bmMgYyBdYFxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lm1hcFxuXG5cbnstfCBTYW1lIGFzIGBtYXBgIGJ1dCB0aGUgZnVuY3Rpb24gaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkTWFwIChcXGlkeCB2YWwgLT4gW2lkeCwgdmFsXSkgWyAzLCAzLCAzIF0gPT0gWyBbIDAsIDMgXSwgWyAxLCAzIF0sIFsgMiwgMyBdIF1cblxuLX1cbmluZGV4ZWRNYXAgOiAoSW50IC0+IGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5pbmRleGVkTWFwID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkTWFwXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC5cblxuICAgIGZvbGRsICgrKSAwIFsgMSwgMiwgMyBdID09IDZcblxuU28gYGZvbGRsIHN0ZXAgc3RhdGUgWyAxLCAyLCAzIF1gIGlzIGxpa2Ugc2F5aW5nOlxuXG4gICAgc3RhdGVcbiAgICAgICAgfD4gc3RlcCAxXG4gICAgICAgIHw+IHN0ZXAgMlxuICAgICAgICB8PiBzdGVwIDNcbi19XG5mb2xkbCA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmZvbGRsID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIHJpZ2h0LiBTYW1lIGFzIGBmb2xkbGAgYnV0XG50aGUgZXhlY3V0aW9uIG9yZGVyIGlzIHJldmVyc2VkLlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZvbGRyXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC4gVGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIFxucGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS5cblxuICAgIGluZGV4ZWRGb2xkbCAoXFxpZHggdmFsIHN1bSAtPiBpZHggKyB2YWwgKyBzdW0pIDAgWyAxLCAyLCAzIF0gPT0gOVxuXG4tfVxuaW5kZXhlZEZvbGRsIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkbCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRsXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgcmlnaHQuIFRoZSByZWR1Y2luZyBmdW5jdGlvblxuaXMgcGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS4gU2FtZSBhcyBgaW5kZXhlZEZvbGRsYFxuYnV0IHRoZSBleGVjdXRpb24gb3JkZXIgaXMgcmV2ZXJzZWQuXG4tfVxuaW5kZXhlZEZvbGRyIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkciA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRyXG5cblxuey18IEtlZXAgdmFsdWVzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiAoXFxuIC0+IG4gPCAzKSBbIDEsIDIsIDMsIDQgXSA9PSBbIDEsIDIgXVxuXG4tfVxua2VlcElmIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5rZWVwSWYgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbHRlclxuXG57LXwgU2FtZSBhcyBga2VlcElmYCBidXQgdGhlIHRlc3QgaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkS2VlcElmIChcXGlkeCB2YWwgLT4gaWR4ICsgdmFsID4gNCkgWyAxLCAyLCAzLCA0IF0gPT0gWyAzLCA0IF1cbi19XG5pbmRleGVkS2VlcElmIDogKEludCAtPiBhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW5kZXhlZEtlZXBJZiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZpbHRlclxuXG5cbnstfCBSZW1vdmUgdW53YW50ZWQgcmVzdWx0cyBvZiBhIG1hcCBvcGVyYXRpb24uXG5cbiAgICBtYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF0gPT0gWyAzLCAtNSBdXG4gICAgbWFwQW5kS2VlcEp1c3QgaWRlbnRpdHkgWyBKdXN0IDEsIE5vdGhpbmcgXSA9PSBbIDEgXVxuXG4tfVxubWFwQW5kS2VlcEp1c3QgOiAoYSAtPiBNYXliZSBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbm1hcEFuZEtlZXBKdXN0IG1hcHBlciBhcnJheSA9XG4gICAgbWFwQW5kRmxhdHRlblxuICAgICAgICAoXFx2IC0+XG4gICAgICAgICAgICB3aGVuIG1hcHBlciB2IGlzXG4gICAgICAgICAgICAgICAgSnVzdCBuZXdWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBbIG5ld1ZhbHVlIF1cblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgKVxuICAgICAgICBhcnJheVxuXG5cbnstfCBSZXZlcnNlIGFuIGFycmF5LlxuXG4gICAgcmV2ZXJzZSBbIDEsIDIsIDMgXSA9PSBbIDMsIDIsIDEgXVxuXG4tfVxucmV2ZXJzZSA6IEFycmF5IGEgLT4gQXJyYXkgYVxucmV2ZXJzZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkucmV2ZXJzZVxuXG5cbi0tIFFVRVJZXG5cblxuey18IENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBbXSA9PSBUcnVlXG4gICAgaXNFbXB0eSBbIDEsIDIsIDMgXSA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IEFycmF5IGEgLT4gQm9vbFxuaXNFbXB0eSBhcnJheSA9XG4gICAgbGVuZ3RoIGFycmF5ID09IDBcblxuXG57LXwgUmV0dXJuIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG5cbiAgICBsZW5ndGggWyAxLCAyLCAzIF0gPT0gM1xuXG4tfVxubGVuZ3RoIDogQXJyYXkgYSAtPiBJbnRcbmxlbmd0aCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBlbGVtZW50IGF0IGEgZ2l2ZW4gaW5kZXgsIG9yIGBOb3RoaW5nYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbkEgbmVnYXRpdmUgaW5kZXggbG9va3MgdXAgYW4gZWxlbWVudCBpbiByZXZlcnNlIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBnZXQgMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDJcbiAgICBnZXQgMTAgWyAxLCAyLCAzIF0gPT0gTm90aGluZ1xuICAgIGdldCAtMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDNcblxuLX1cbmdldCA6IEludCAtPiBBcnJheSBhIC0+IE1heWJlIGFcbmdldCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZ2V0XG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAxXG5cbi19XG5maW5kRmlyc3QgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IE1heWJlIHsgaW5kZXggOiBJbnQsIHZhbHVlIDogYSB9XG5maW5kRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbmRGaXJzdFxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAyXG5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gTWF5YmUgeyBpbmRleCA6IEludCwgdmFsdWUgOiBhIH1cbmZpbmRMYXN0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5maW5kTGFzdFxuXG5cbnstfCBGaWd1cmUgb3V0IHdoZXRoZXIgYW4gYXJyYXkgY29udGFpbnMgYSB2YWx1ZS5cblxuICAgIG1lbWJlciA5IFsxLDIsMyw0XSA9PSBGYWxzZVxuICAgIG1lbWJlciA0IFsxLDIsMyw0XSA9PSBUcnVlXG5cbi19XG5tZW1iZXIgOiBhIC0+IEFycmF5IGEgLT4gQm9vbFxubWVtYmVyIHZhbHVlIGFycmF5ID1cbiAgICB3aGVuIGZpbmRGaXJzdCAoXFx2IC0+IHYgPT0gdmFsdWUpIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IERldGVybWluZSBpZiBhbnkgZWxlbWVudHMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFueSBpc0V2ZW4gWzIsM10gPT0gVHJ1ZVxuICAgIGFueSBpc0V2ZW4gWzEsM10gPT0gRmFsc2VcbiAgICBhbnkgaXNFdmVuIFtdID09IEZhbHNlXG5cbi19XG5hbnkgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEJvb2xcbmFueSBmbiBhcnJheSA9XG4gICAgd2hlbiBmaW5kRmlyc3QgZm4gYXJyYXkgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGFsbCBlbGVtZW50cyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYWxsIGlzRXZlbiBbMiw0XSA9PSBUcnVlXG4gICAgYWxsIGlzRXZlbiBbMiwzXSA9PSBGYWxzZVxuICAgIGFsbCBpc0V2ZW4gW10gPT0gVHJ1ZVxuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBCb29sXG5hbGwgZm4gYXJyYXkgPVxuICAgIHdoZW4gZmluZEZpcnN0IChub3QgPDwgZm4pIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IEZpbmQgdGhlIG1pbmltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1pbmltdW0gWzMsMiwxXSA9PSBKdXN0IDFcbiAgICBtaW5pbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWluaW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWluaW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGxvd2VzdCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgY3VycmVudCA8IGxvd2VzdCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuey18IEZpbmQgdGhlIG1heGltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1heGltdW0gWzMsMiwxXSA9PSBKdXN0IDNcbiAgICBtYXhpbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWF4aW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWF4aW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGhpZ2hlc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGN1cnJlbnQgPiBoaWdoZXN0IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuLS0gTU9ESUZZXG5cblxuey18IFJlcGxhY2UgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4LCBvciByZXR1cm4gdGhlIGFycmF5IHVubW9kaWZpZWQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG4gICAgc2V0IDEgMTAgWyAxLCAyLCAzIF0gPT0gWyAxLCAxMCwgMyBdXG4gICAgc2V0IDEwIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMyBdXG4gICAgc2V0IC0xIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMTAgXVxuXG4tfVxuc2V0IDogSW50IC0+IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNldFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIHdvcmtzIGp1c3QgbGlrZSBbc2V0XSgjc2V0KSBleGNlcHQgaXQgdGFrZXMgaW4gYW4gYXJyYXkgb2YgdmFsdWVzIHRvIHNldCwgYWxsb3dpbmcgeW91XG50byByZXBsYWNlIHNldmVyYWwgdmFsdWVzIGF0IG9uY2UuXG5cbklmIHRoZSBwcm92aWRlZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgKG5lZ2F0aXZlIGluZGV4KSBvciBhdCB0aGVcbmVuZCAocG9zaXRpdmUgaW5kZXgpLlxuXG4gICAgc2V0TWFueSAxIFsgMCwgMCBdIFsgMSwgMiwgMywgNCBdID09IFsgMSwgMCwgMCwgNCBdXG5cbi19XG5zZXRNYW55IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXRNYW55IGluZGV4IHZhbHVlcyBhcnJheSA9XG4gICAgc3BsaWNlIGluZGV4IChsZW5ndGggdmFsdWVzKSB2YWx1ZXMgYXJyYXlcblxuXG57LXwgVXBkYXRlIGEgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4IHVzaW5nIGEgZnVuY3Rpb24uIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBub3RoaW5nIGhhcHBlbnMuXG5cbiAgICB1cGRhdGUgMSAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDMsIDMgXVxuICAgIHVwZGF0ZSAxMCAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDMgXVxuXG4tfVxudXBkYXRlIDogSW50IC0+IChhIC0+IGEpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudXBkYXRlIGlkeCBmbiBhcnJheSA9XG4gICAgd2hlbiBnZXQgaWR4IGFycmF5IGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGFycmF5XG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIHNldCBpZHggKGZuIHZhbCkgYXJyYXlcblxuXG57LXwgSW5zZXJ0IGEgbmV3IHZhbHVlIGludG8gdGhlIGFycmF5IGF0IHRoZSBnaXZlbiBpbmRleC4gVGhlIHZhbHVlIGFscmVhZHkgYXQgdGhlXG5naXZlbiBpbmRleCwgYXMgd2VsbCBhcyBhbGwgc3Vic2VxdWVudCB2YWx1ZXMsIHdpbGwgYmUgbW92ZWQgb25lIHNwYWNlIHRvIHRoZSByaWdodC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIHByb3ZpZGVkIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIHRoZSBlbGVtZW50IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZVxuZW5kIChwb3NpdGl2ZSBpbmRleCkuXG5cbiAgICBpbnNlcnQgMSAwIFsgMSwgMiwgMyBdID09IFsgMSwgMCwgMiwgMyBdXG5cbi19XG5pbnNlcnQgOiBJbnQgLT4gYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydCBpbmRleCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSBpbmRleCAwIHZhbHVlIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtpbnNlcnRdKCNpbnNlcnQpIGJ1dCBhbGxvd3MgeW91IHRvIGluc2VydCBtdWx0aXBsZVxudmFsdWVzIGF0IG9uY2UuXG5cbiAgICBpbnNlcnRNYW55IDEgWyAwLCAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAwLCAwLCAyLCAzIF1cblxuLX1cbmluc2VydE1hbnkgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydE1hbnkgaW5kZXggdmFsdWVzIGFycmF5ID1cbiAgICBzcGxpY2UgaW5kZXggMCB2YWx1ZXMgYXJyYXlcblxuXG57LXwgUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSBhbiBhcnJheS5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIG5vIGVsZW1lbnQgd2lsbCBiZSByZW1vdmVkLlxuXG4gICAgcmVtb3ZlIDEgWyAxLCAyLCAzIF0gPT0gWyAxLCAzIF1cblxuLX1cbnJlbW92ZSA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnJlbW92ZSBpbmRleCBhcnJheSA9XG4gICAgcmVtb3ZlTWFueSBpbmRleCAxIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtyZW1vdmVdKCNyZW1vdmUpLCBleGNlcHQgaXQgYWxsb3dzIHlvdSB0byByZW1vdmUgbXVsdGlwbGUgZWxlbWVudHMgYXQgb25jZS5cblxuVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSBpbmRleCBmcm9tIHdoZXJlIHRvIHJlbW92ZSBlbGVtZW50cyBmcm9tLCB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBudW1iZXIgb2YgZWxlbWVudHNcbnRvIHJlbW92ZS5cblxuICAgIHJlbW92ZSAwIDIgWyAxLCAyLCAzIF0gPT0gWyAzIF1cblxuLX1cbnJlbW92ZU1hbnkgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucmVtb3ZlTWFueSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMFxuXG5cbnstfCBBZGQgYSB2YWx1ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGFycmF5LlxuXG4gICAgcHVzaEZpcnN0IDEgW10gICAgICAgICAgPT0gWyAxIF1cbiAgICBwdXNoRmlyc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDUsIDEsIDQsIDkgXVxuXG4tfVxucHVzaEZpcnN0IDogYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnB1c2hGaXJzdCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSAwIDAgdmFsdWUgYXJyYXlcblxuXG57LXwgQWRkIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBwdXNoTGFzdCAxIFtdICAgICAgICAgID09IFsgMSBdXG4gICAgcHVzaExhc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDEsIDQsIDksIDUgXVxuXG4tfVxucHVzaExhc3QgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHVzaExhc3QgdmFsdWUgYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTEgKGxlbmd0aCBhcnJheSkgMCB2YWx1ZSBhcnJheVxuXG5cbnstfCBBbGxvd3MgeW91IHRvIHBlcmZvcm0gbXVsdGlwbGUgbW9kaWZpY2F0aW9ucyBpbiBhIHNpbmdsZSBvcGVyYXRpb24uIFNwbGljZSB0YWtlcyBhbiBpbmRleFxuYXMgaXRzIGZpcnN0IGFyZ3VtZW50LiBUaGlzIG1hcmtzIHRoZSBwb2ludCB3aGVyZSBtb2RpZmljYXRpb25zIHdpbGwgYmUgcGVyZm9ybWVkLiBUaGVcbnNlY29uZCBhcmd1bWVudCBpcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJlbW92ZS4gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIHRoZSBlbGVtZW50cyB0aGF0XG53aWxsIGJlIGluc2VydGVkLiBUaGUgYXJndW1lbnQgb3JkZXIgcmVwcmVzZW50cyB0aGUgb3JkZXIgb2YgbW9kaWZpY2F0aW9ucy4gRWxlbWVudHMgd2lsbCBiZVxucmVtb3ZlZCBiZWZvcmUgbmV3IGVsZW1lbnRzIGFyZSBpbnNlcnRlZC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMgbm8gZWxlbWVudHMgd2lsbCBiZSByZW1vdmVkLCBidXQgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBhdCB0aGVcbmJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZSBlbmQgKHBvc2l0aXZlIGluZGV4KS5cblxuXG4gICAgc3BsaWNlIDIgMCBbIDAgXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDAsIDMgXVxuICAgIHNwbGljZSAyIDEgWyAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAwIF1cbiAgICBzcGxpY2UgMiAxIFtdIFsgMSwgMiwgMyBdID09IFsgMSwgMiBdXG5cbi19XG5zcGxpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zcGxpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZU5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwcmVmaXgsXG5hbmQgdGhlIHNlY29uZCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBwcmVwZW5kIFsgMSwgMiwgMyBdIFsgNCwgNSwgNiBdID09IFsgMSwgMiwgMywgNCwgNSwgNiBdIFxuXG5Zb3UgY2FuIGFsc28gdXNlIHRoZSBgKytgIG9wZXJhdG9yIGZvciB0aGlzIHB1cnBvc2UuXG5cbiAgICBbIDEsIDIsIDMgXSArKyBbIDQsIDUsIDYgXSA9PSBbIDEsIDIsIDMsIDQsIDUsIDYgXVxuLX1cbnByZXBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHJlcGVuZCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuYXBwZW5kXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4LFxuYW5kIHRoZSBzZWNvbmQgYXJyYXkgYmVjb21lcyB0aGUgcHJlZml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBhcHBlbmQgWyAxLCAyLCAzIF0gWyA0LCA1LCA2IF0gPT0gWyA0LCA1LCA2LCAxLCAyLCAzIF1cbiAgICBcbi19XG5hcHBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuYXBwZW5kIGZzdCBzZWNvbmQgPVxuICAgIHByZXBlbmQgc2Vjb25kIGZzdFxuXG5cbnstfCBDb21iaW5lIGEgYnVuY2ggb2YgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXkuXG5cbiAgICBmbGF0dGVuIFsgWyAxIF0sIFsgMiBdLCBbIDQsIDUgXSBdID09IFsgMSwgMiwgNCwgNSBdXG5cbi19XG5mbGF0dGVuIDogQXJyYXkgKEFycmF5IGEpIC0+IEFycmF5IGFcbmZsYXR0ZW4gPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZsYXRcblxuXG57LXwgTWFwIGEgZ2l2ZW4gZnVuY3Rpb24gb250byBhbiBhcnJheSwgdGhlbiBmbGF0dGVuIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBtYXBBbmRGbGF0dGVuIGYgeHMgPT0gZmxhdHRlbiAobWFwIGYgeHMpXG5cbi19XG5tYXBBbmRGbGF0dGVuIDogKGEgLT4gQXJyYXkgYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXBBbmRGbGF0dGVuID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mbGF0TWFwXG5cblxuey18IFBsYWNlcyB0aGUgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBhbGwgbWVtYmVycyBvZiB0aGUgZ2l2ZW4gYXJyYXkuXG5cbiAgICBpbnRlcnNwZXJzZSBcIm9uXCIgWyBcInR1cnRsZXNcIiwgXCJ0dXJ0bGVzXCIsIFwidHVydGxlc1wiXSA9PSBbIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiXVxuXG4tfVxuaW50ZXJzcGVyc2UgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW50ZXJzcGVyc2Ugc2VwIHhzID1cbiAgICB3aGVuIHBvcEZpcnN0IHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFtdXG5cbiAgICAgICAgSnVzdCB7IGZpcnN0ID0gaGVhZCwgcmVzdCA9IHRhaWwgfSAtPlxuICAgICAgICAgICAgcHVzaEZpcnN0IGhlYWQgPHwgbWFwQW5kRmxhdHRlbiAoXFx2YWwgLT4gWyBzZXAsIHZhbCBdKSB0YWlsXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAyIChcXHggeSAtPiB7IHggPSB4LCB5ID0geSB9KSBbIDEgXSBbIDIgXSA9PSBbIHsgeCA9IDEsIHkgPSAyIH0gXVxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IHJlc3VsdFxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubWFwMlxuXG5cbnstfCBDb21iaW5lIHRocmVlIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAzIChcXHggeSB6IC0+IHsgeCA9IHgsIHkgPSB5LCB6ID0geiB9KSBbIDEgXSBbIDIgXSBbIDMgXSA9PSBbIHsgeCA9IDEsIHkgPSAyLCB6ID0gMyB9IF1cbi19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IGMgLT4gQXJyYXkgcmVzdWx0XG5tYXAzID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5tYXAzXG5cblxuLS0gREVDT05TVFJVQ1RcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LCBpZiBpdCBleGlzdHMuXG5cbiAgICBmaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IDFcblxuLX1cbmZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5maXJzdCBhcnJheSA9XG4gICAgZ2V0IDAgYXJyYXlcblxuXG57LXwgUmV0cmlldmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXJyYXksIGlmIGl0IGV4aXN0cy5cblxuICAgIGxhc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCAzXG5cbi19XG5sYXN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5sYXN0IGFycmF5ID1cbiAgICBnZXQgLTEgYXJyYXlcblxuXG57LXwgR2V0IGEgc3ViIHNlY3Rpb24gb2YgYW4gYXJyYXk6IGAoc2xpY2Ugc3RhcnQgZW5kIGFycmF5KWAuXG5cblRoZSBgc3RhcnRgIGlzIGEgemVyby1iYXNlZCBpbmRleCB3aGVyZSB3ZSB3aWxsIHN0YXJ0IG91ciBzbGljZS5cblRoZSBgZW5kYCBpcyBhIHplcm8tYmFzZWQgaW5kZXggdGhhdCBpbmRpY2F0ZXMgdGhlIGVuZCBvZiB0aGUgc2xpY2UuXG5UaGUgc2xpY2UgZXh0cmFjdHMgdXAgdG8sIGJ1dCBubyBpbmNsdWRpbmcsIHRoZSBgZW5kYC5cblxuQm90aCBgc3RhcnRgIGFuZCBgZW5kYCBjYW4gYmUgbmVnYXRpdmUsIGluZGljYXRpbmcgYW4gb2Zmc2V0IGZyb20gdGhlIGVuZFxub2YgdGhlIGFycmF5LiBSZW1vdmluZyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBjYW4gYmUgZXhwcmVzc2VkIGFzOlxuXG4gICAgYHNsaWNlIDAgLTEgYXJyYC5cblxuSW4gdGhlIGNhc2Ugb2YgYW4gaW1wb3NzaWJsZSBzbGljZSwgdGhlIGVtcHR5IGFycmF5IGlzIHJldHVybmVkLlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc2xpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNsaWNlXG5cblxuey18IFJlbW92ZSB0aGUgZmlyc3QgYG5gIGVsZW1lbnRzIG9mIHRoZSBhcnJheS5cblxuICAgIGRyb3BGaXJzdCA1IFsgMSBdID09IFtdXG4gICAgZHJvcEZpcnN0IDEgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmRyb3BGaXJzdCBuIGFycmF5ID1cbiAgICBzbGljZSBuIChsZW5ndGggYXJyYXkpIGFycmF5XG5cblxuey18IFJlbW92ZSB0aGUgbGFzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuXG4gICAgZHJvcExhc3QgMSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5kcm9wTGFzdCBuIGFycmF5ID1cbiAgICBzbGljZSAwIChsZW5ndGggYXJyYXkgLSBuKSBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXkuXG5cbiAgICB0YWtlRmlyc3QgMiBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUZpcnN0IG4gYXJyYXkgPVxuICAgIHNsaWNlIDAgbiBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cblxuICAgIHRha2VMYXN0IDIgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbnRha2VMYXN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUxhc3QgbiBhcnJheSA9XG4gICAgbGV0XG4gICAgICAgIGxlbiA9XG4gICAgICAgICAgICBsZW5ndGggYXJyYXlcbiAgICBpblxuICAgIHNsaWNlIChsZW4gLSBuKSBsZW4gYXJyYXlcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgZmlyc3QgZWxlbWVudCwgYW5kIGl0cyByZW1haW5pbmcgZWxlbWVudHMsIGlmIHBvc3NpYmxlLlxuXG4gICAgcG9wRmlyc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCB7IGZpcnN0ID0gMSwgcmVzdCA9IFsgMiwgMyBdIH1cblxuLX1cbnBvcEZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGZpcnN0IDogYSwgcmVzdCA6IEFycmF5IGEgfVxucG9wRmlyc3QgYXJyYXkgPVxuICAgIHdoZW4gZmlyc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgZmlyc3QgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICwgcmVzdCA9IGRyb3BGaXJzdCAxIGFycmF5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgbGFzdCBlbGVtZW50LCBhbmQgaXRzIHJlbWFpbmluZyBlbGVtZW50cywgaWYgcG9zc2libGUuXG5cbiAgICBwb3BGaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IHsgbGFzdCA9IDMsIGluaXRpYWwgPSBbIDEsIDIgXSB9XG5cbi19XG5wb3BMYXN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGxhc3QgOiBhLCBpbml0aWFsIDogQXJyYXkgYSB9XG5wb3BMYXN0IGFycmF5ID1cbiAgICB3aGVuIGxhc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgbGFzdCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgLCBpbml0aWFsID0gZHJvcExhc3QgMSBhcnJheVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IERpdmlkZSBlbGVtZW50cyBpbnRvIHR3byBhcnJheXMgYmFzZWQgb24gdGhlIHJlc3VsdCBvZiBhIGJvb2xlYW4gdGVzdC5cblxuICAgIHBhcnRpdGlvbiAoXFx4IC0+IHggPCAzKSBbIDAsIDEsIDIsIDMsIDQsIDUgXSA9PSB7IHRydWVzID0gWyAwLCAxLCAyIF0sIGZhbHNlcyA9IFsgMywgNCwgNSBdIH1cblxuLX1cbnBhcnRpdGlvbiA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4geyB0cnVlcyA6IEFycmF5IGEsIGZhbHNlcyA6IEFycmF5IGEgfVxucGFydGl0aW9uIGZuIGFycmF5ID1cbiAgICBmb2xkbFxuICAgICAgICAoXFx2YWwgeyB0cnVlcywgZmFsc2VzIH0gLT5cbiAgICAgICAgICAgIGlmIGZuIHZhbCB0aGVuXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHB1c2hMYXN0IHZhbCB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBwdXNoTGFzdCB2YWwgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHsgdHJ1ZXMgPSBbXSwgZmFsc2VzID0gW10gfVxuICAgICAgICBhcnJheVxuXG5cbi0tIFNPUlRcblxuXG57LXwgU29ydCB2YWx1ZXMgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdFxuXG4gICAgc29ydCBbIDMsIDEsIDUgXSA9PSBbIDEsIDMsIDUgXVxuXG4tfVxuc29ydCA6IEFycmF5IGNvbXBhcmFibGUgLT4gQXJyYXkgY29tcGFyYWJsZVxuc29ydCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc29ydFxuXG5cbnstfCBTb3J0IHZhbHVlcyBieSBhIGRlcml2ZWQgcHJvcGVydHkuXG5cbiAgICBzb3J0QnkgU3RyaW5nLmxlbmd0aCBbIFwibW91c2VcIiwgXCJjYXRcIiBdID09IFsgXCJjYXRcIiwgXCJtb3VzZVwiIF1cblxuLX1cbnNvcnRCeSA6IChhIC0+IGNvbXBhcmFibGUpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydEJ5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zb3J0QnlcblxuXG57LXwgU29ydCB2YWx1ZXMgd2l0aCBhIGN1c3RvbSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuXG4gICAgc29ydFdpdGggZmxpcHBlZENvbXBhcmlzb24gWzEsMiwzLDQsNV0gPT0gWzUsNCwzLDIsMV1cblxuICAgIGZsaXBwZWRDb21wYXJpc29uIGEgYiA9XG4gICAgICAgIHdoZW4gY29tcGFyZSBhIGIgaXNcbiAgICAgICAgICBMVCAtPiBHVFxuICAgICAgICAgIEVRIC0+IEVRXG4gICAgICAgICAgR1QgLT4gTFRcblxuVGhpcyBpcyBhbHNvIHRoZSBtb3N0IGdlbmVyYWwgc29ydCBmdW5jdGlvbiwgYWxsb3dpbmcgeW91IHRvIGRlZmluZSBhbnkgb3RoZXI6IGBzb3J0ID09IHNvcnRXaXRoIGNvbXBhcmVgXG5cbi19XG5zb3J0V2l0aCA6IChhIC0+IGEgLT4gT3JkZXIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydFdpdGggPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNvcnRXaXRoXG5cbiIsCiAgICAgICAgIm1vZHVsZSBTZXQgZXhwb3NpbmdcbiAgICAoIFNldFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCByZW1vdmUsIHRvZ2dsZVxuICAgICwgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICApXG5cbnstfCBBIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBUaGUgdmFsdWVzIGNhbiBiZSBhbnkgY29tcGFyYWJsZSB0eXBlLiBUaGlzXG5pbmNsdWRlcyBgSW50YCwgYEZsb2F0YCwgYFRpbWVgLCBgQ2hhcmAsIGBTdHJpbmdgLCBhbmQgdHVwbGVzIG9yIGFycmF5c1xub2YgY29tcGFyYWJsZSB0eXBlcy5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBTZXRcblxuXG5AZG9jcyBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHJlbW92ZSwgdG9nZ2xlXG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG5cblxuIyMgQ29tYmluZVxuXG5AZG9jcyB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIHRvQXJyYXksIGZyb21BcnJheVxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBEaWN0XG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBTbyBgKFNldCBJbnQpYCBpcyBhIHNldCBvZiBpbnRlZ2VycyBhbmRcbmAoU2V0IFN0cmluZylgIGlzIGEgc2V0IG9mIHN0cmluZ3MuXG4tfVxudHlwZSBTZXQgdFxuICAgID0gU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5EaWN0IHQge30pXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBzZXQuXG4tfVxuZW1wdHkgOiBTZXQgYVxuZW1wdHkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gRGljdC5lbXB0eVxuXG5cbnstfCBDcmVhdGUgYSBzZXQgd2l0aCBvbmUgdmFsdWUuXG4tfVxuc2luZ2xldG9uIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuc2luZ2xldG9uIGtleSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5zaW5nbGV0b24ga2V5IHt9KVxuXG5cbnstfCBTZXQgYSB2YWx1ZSBpbnRvIGEgc2V0LlxuLX1cbnNldCA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnNldCBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3Quc2V0IGtleSB7fSBkaWN0KVxuXG5cbnstfCBSZW1vdmUgYSB2YWx1ZSBmcm9tIGEgc2V0LiBJZiB0aGUgdmFsdWUgaXMgbm90IGZvdW5kLCBubyBjaGFuZ2VzIGFyZSBtYWRlLlxuLX1cbnJlbW92ZSA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnJlbW92ZSBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QucmVtb3ZlIGtleSBkaWN0KVxuXG5cbnstfCBUb2dnbGUgYSB2YWx1ZSBpbiBhIHNldC4gSWYgdGhlIHZhbHVlIGlzbid0IGluIHRoZSBzZXQsIGl0IGlzIGFkZGVkLiBJZiB0aGVcbnZhbHVlIGlzIGluIHRoZSBzZXQsIGl0IGlzIHJlbW92ZWQuXG4tfVxudG9nZ2xlIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxudG9nZ2xlIGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgd2hlbiBEaWN0LmdldCBrZXkgZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFNldF9ncmVuX2J1aWx0aW4gPHwgRGljdC5yZW1vdmUga2V5IGRpY3RcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBTZXRfZ3Jlbl9idWlsdGluIDx8IERpY3Quc2V0IGtleSB7fSBkaWN0XG5cblxuey18IERldGVybWluZSBpZiBhIHNldCBpcyBlbXB0eS5cbi19XG5pc0VtcHR5IDogU2V0IGEgLT4gQm9vbFxuaXNFbXB0eSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5pc0VtcHR5IGRpY3RcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgaW4gYSBzZXQuXG4tfVxubWVtYmVyIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBCb29sXG5tZW1iZXIga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0Lm1lbWJlciBrZXkgZGljdFxuXG5cbnstfCBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNldC5cbi19XG5jb3VudCA6IFNldCBhIC0+IEludFxuY291bnQgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuY291bnQgZGljdFxuXG5cbnstfCBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHNldC5cbi19XG5maXJzdCA6IFNldCBhIC0+IE1heWJlIGFcbmZpcnN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maXJzdCBkaWN0KVxuXG5cbnstfCBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgc2V0LlxuLX1cbmxhc3QgOiBTZXQgYSAtPiBNYXliZSBhXG5sYXN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5sYXN0IGRpY3QpXG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRGaXJzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRGaXJzdCBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QuZmluZEZpcnN0IChcXGtleSBfIC0+IGZuIGtleSkgZGljdClcblxuXG57LXwgRmluZCB0aGUgbGFzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRMYXN0IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maW5kTGFzdCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3QpXG5cblxuey18IENoZWNrcyBpZiBhbnkgdmFsdWUgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYW55IDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYW55IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFueSAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCB2YWx1ZXMgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYWxsIGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFsbCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgR2V0IHRoZSB1bmlvbiBvZiB0d28gc2V0cy4gS2VlcCBhbGwgdmFsdWVzLlxuLX1cbnVuaW9uIDogU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnVuaW9uIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QxKSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MikgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QudW5pb24gZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBzZXRzLiBLZWVwcyB2YWx1ZXMgdGhhdCBhcHBlYXIgaW4gYm90aCBzZXRzLlxuLX1cbmludGVyc2VjdCA6IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5pbnRlcnNlY3QgKFNldF9ncmVuX2J1aWx0aW4gZGljdDEpIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QyKSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5pbnRlcnNlY3QgZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBzZXQgYW5kIHRoZSBzZWNvbmQuIEtlZXBzIHZhbHVlc1xudGhhdCBkbyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgc2V0LlxuLX1cbmRpZmYgOiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZGlmZiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MSkgKFNldF9ncmVuX2J1aWx0aW4gZGljdDIpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LmRpZmYgZGljdDEgZGljdDIpXG5cblxuey18IENvbnZlcnQgYSBzZXQgaW50byBhbiBhcnJheSwgc29ydGVkIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxudG9BcnJheSA6IFNldCBhIC0+IEFycmF5IGFcbnRvQXJyYXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3Qua2V5cyBkaWN0XG5cblxuey18IENvbnZlcnQgYW4gYXJyYXkgaW50byBhIHNldCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMuXG4tfVxuZnJvbUFycmF5IDogQXJyYXkgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZnJvbUFycmF5IGFycmF5ID1cbiAgICBBcnJheS5mb2xkbCBzZXQgZW1wdHkgYXJyYXlcblxuXG57LXwgRm9sZCBvdmVyIHRoZSB2YWx1ZXMgaW4gYSBzZXQsIGluIG9yZGVyIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxuZm9sZGwgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gU2V0IGEgLT4gYlxuZm9sZGwgZnVuYyBpbml0aWFsU3RhdGUgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuZm9sZGwgKFxca2V5IF8gc3RhdGUgLT4gZnVuYyBrZXkgc3RhdGUpIGluaXRpYWxTdGF0ZSBkaWN0XG5cblxuey18IEZvbGQgb3ZlciB0aGUgdmFsdWVzIGluIGEgc2V0LCBpbiBvcmRlciBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0LlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IFNldCBhIC0+IGJcbmZvbGRyIGZ1bmMgaW5pdGlhbFN0YXRlIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmZvbGRyIChcXGtleSBfIHN0YXRlIC0+IGZ1bmMga2V5IHN0YXRlKSBpbml0aWFsU3RhdGUgZGljdFxuXG5cbnstfCBNYXAgYSBmdW5jdGlvbiBvbnRvIGEgc2V0LCBjcmVhdGluZyBhIG5ldyBzZXQgd2l0aCBubyBkdXBsaWNhdGVzLlxuLX1cbm1hcCA6IChjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUyKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZTJcbm1hcCBmdW5jIGNvbGwgPVxuICAgIGZvbGRsIChcXHggeHMgLT4gc2V0IChmdW5jIHgpIHhzKSBlbXB0eSBjb2xsXG5cblxuey18IE9ubHkga2VlcCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIGdpdmVuIHRlc3QuXG5cbiAgICBpbXBvcnQgU2V0IGV4cG9zaW5nIChTZXQpXG5cbiAgICBudW1iZXJzIDogU2V0IEludFxuICAgIG51bWJlcnMgPVxuICAgICAgICBTZXQuZnJvbUFycmF5IFsgLTIsIC0xLCAwLCAxLCAyIF1cblxuICAgIHBvc2l0aXZlcyA6IFNldCBJbnRcbiAgICBwb3NpdGl2ZXMgPVxuICAgICAgICBTZXQua2VlcElmIChcXHggLT4geCA+IDApIG51bWJlcnNcblxuICAgIC0tIHBvc2l0aXZlcyA9PSBTZXQuZnJvbUFycmF5IFsxLDJdXG5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiBCb29sKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxua2VlcElmIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5rZWVwSWYgKFxca2V5IF8gLT4gaXNHb29kIGtleSkgZGljdClcblxuXG57LXwgUmVtb3ZlIHVud2FudGVkIHJlc3VsdHMgb2YgYSBtYXAgb3BlcmF0aW9uLlxuICAgIFxuICAgIGltcG9ydCBTZXRcblxuICAgIHN0cmluZ3MgOiBTZXQgU3RyaW5nXG4gICAgc3RyaW5ncyA9XG4gICAgICAgIFNldC5mcm9tQXJyYXkgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF1cblxuICAgIG51bWJlcnMgOiBTZXQgSW50XG4gICAgbnVtYmVycyA9XG4gICAgICAgIFNldC5tYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgc3RyaW5nc1xuXG4gICAgLS0gbnVtYmVycyA9PSBTZXQuZnJvbUFycmF5IFsgMywgLTUgXVxuLX1cbm1hcEFuZEtlZXBKdXN0IDogKGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZTIpIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlMlxubWFwQW5kS2VlcEp1c3QgdG9NYXliZSBjb2xsID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxvbGQgbmV3cyAtPlxuICAgICAgICAgICAgd2hlbiB0b01heWJlIG9sZCBpc1xuICAgICAgICAgICAgICAgIEp1c3QgbmV3IC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBuZXcgbmV3c1xuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBuZXdzXG4gICAgICAgIClcbiAgICAgICAgZW1wdHlcbiAgICAgICAgY29sbFxuXG5cbnstfCBDcmVhdGUgdHdvIG5ldyBzZXRzLiBUaGUgZmlyc3QgY29udGFpbnMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3NlZCB0aGVcbmdpdmVuIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IEJvb2wpIC0+IFNldCBjb21wYXJhYmxlIC0+IHsgdHJ1ZXMgOiBTZXQgY29tcGFyYWJsZSwgZmFsc2VzIDogU2V0IGNvbXBhcmFibGUgfVxucGFydGl0aW9uIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgbGV0XG4gICAgICAgIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIERpY3QucGFydGl0aW9uIChcXGtleSBfIC0+IGlzR29vZCBrZXkpIGRpY3RcbiAgICBpblxuICAgIHsgdHJ1ZXMgPSBTZXRfZ3Jlbl9idWlsdGluIHRydWVzXG4gICAgLCBmYWxzZXMgPSBTZXRfZ3Jlbl9idWlsdGluIGZhbHNlc1xuICAgIH1cbiIsCiAgICAgICAgIm1vZHVsZSBCYXNpY3MgZXhwb3NpbmdcbiAgICAoIEludCwgKCspLCAoLSksICgqKSwgKC8pLCAoLy8pLCAoXiksIG5lZ2F0ZVxuICAgICwgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG4gICAgLCAoPT0pLCAoLz0pXG4gICAgLCAoPCksICg+KSwgKDw9KSwgKD49KSwgbWF4LCBtaW4sIGNsYW1wLCBjb21wYXJlLCBPcmRlciguLilcbiAgICAsIEJvb2woLi4pLCBub3QsICgmJiksICh8fCksIHhvclxuICAgICwgKCsrKVxuICAgICwgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuICAgIClcblxuey18IFRvbnMgb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGdldCBpbXBvcnRlZCBieSBkZWZhdWx0LlxuXG5cbiMjIE51bWJlcnNcblxuQGRvY3MgSW50LCAoKyksICgtKSwgKCopLCAoLyksICgvLyksICheKSwgbmVnYXRlXG5cblxuIyMgRmxvYXRcblxuQGRvY3MgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG5cblxuIyMgRXF1YWxpdHlcblxuQGRvY3MgKD09KSwgKC89KVxuXG5cbiMjIENvbXBhcmlzb25cblxuVGhlc2UgZnVuY3Rpb25zIG9ubHkgd29yayBvbiBgY29tcGFyYWJsZWAgdHlwZXMuIFRoaXMgaW5jbHVkZXMgbnVtYmVycyxcbmNoYXJhY3RlcnMsIHN0cmluZ3MgYW5kIGFycmF5cyBvZiBjb21wYXJhYmxlIHRoaW5ncy5cblxuQGRvY3MgT3JkZXIsICg8KSwgKD4pLCAoPD0pLCAoPj0pLCBtYXgsIG1pbiwgY2xhbXAsIGNvbXBhcmVcblxuXG4jIyBCb29sZWFuc1xuXG5AZG9jcyBCb29sLCBub3QsICgmJiksICh8fCksIHhvclxuXG5cbiMjIEFwcGVuZCBTdHJpbmdzIGFuZCBBcnJheXNcblxuQGRvY3MgKCsrKVxuXG5cbiMjIEZ1bmN0aW9uIEhlbHBlcnNcblxuQGRvY3MgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQmFzaWNzXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVXRpbHNcblxuXG5cbi0tIElORklYIE9QRVJBVE9SU1xuXG5cbmluZml4IHJpZ2h0IDAgKDx8KSA9IGFwTFxuaW5maXggbGVmdCAgMCAofD4pID0gYXBSXG5pbmZpeCByaWdodCAyICh8fCkgPSBvclxuaW5maXggcmlnaHQgMyAoJiYpID0gYW5kXG5pbmZpeCBub24gICA0ICg9PSkgPSBlcVxuaW5maXggbm9uICAgNCAoLz0pID0gbmVxXG5pbmZpeCBub24gICA0ICg8KSA9IGx0XG5pbmZpeCBub24gICA0ICg+KSA9IGd0XG5pbmZpeCBub24gICA0ICg8PSkgPSBsZVxuaW5maXggbm9uICAgNCAoPj0pID0gZ2VcbmluZml4IHJpZ2h0IDUgKCsrKSA9IGFwcGVuZFxuaW5maXggbGVmdCAgNiAoKykgPSBhZGRcbmluZml4IGxlZnQgIDYgKC0pID0gc3ViXG5pbmZpeCBsZWZ0ICA3ICgqKSA9IG11bFxuaW5maXggbGVmdCAgNyAoLykgPSBmZGl2XG5pbmZpeCBsZWZ0ICA3ICgvLykgPSBpZGl2XG5pbmZpeCByaWdodCA4ICheKSA9IHBvd1xuaW5maXggbGVmdCAgOSAoPDwpID0gY29tcG9zZUxcbmluZml4IHJpZ2h0IDkgKD4+KSA9IGNvbXBvc2VSXG5cblxuXG4tLSBNQVRIRU1BVElDU1xuXG5cbnstfCBBbiBgSW50YCBpcyBhIHdob2xlIG51bWJlci4gVmFsaWQgc3ludGF4IGZvciBpbnRlZ2VycyBpbmNsdWRlczpcblxuICAgIDBcblxuICAgIDQyXG5cbiAgICA5MDAwXG5cbiAgICAweEZGIC0tIDI1NSBpbiBoZXhhZGVjaW1hbFxuXG4gICAgMHgwQSAtLSAgMTAgaW4gaGV4YWRlY2ltYWxcblxuKipOb3RlOioqIGBJbnRgIG1hdGggaXMgd2VsbC1kZWZpbmVkIGluIHRoZSByYW5nZSBgLTJeMzFgIHRvIGAyXjMxIC0gMWAuIE91dHNpZGVcbm9mIHRoYXQgcmFuZ2UsIHRoZSBiZWhhdmlvciBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjb21waWxhdGlvbiB0YXJnZXQuIFdoZW5cbmdlbmVyYXRpbmcgSmF2YVNjcmlwdCwgdGhlIHNhZmUgcmFuZ2UgZXhwYW5kcyB0byBgLSgyXjUzIC0gMSlgIHRvIGAyXjUzIC0gMWAgZm9yIHNvbWVcbm9wZXJhdGlvbnMsIGJ1dCBpZiB3ZSBnZW5lcmF0ZSBXZWJBc3NlbWJseSBzb21lIGRheSwgd2Ugd291bGQgZG8gdGhlIHRyYWRpdGlvbmFsXG5baW50ZWdlciBvdmVyZmxvd11baW9dLiBUaGlzIHF1aXJrIGlzIG5lY2Vzc2FyeSB0byBnZXQgZ29vZCBwZXJmb3JtYW5jZSBvblxucXVpcmt5IGNvbXBpbGF0aW9uIHRhcmdldHMuXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBuYW1lIGBJbnRgIGNvbWVzIGZyb20gdGhlIHRlcm0gW2ludGVnZXJdLiBJdCBhcHBlYXJzXG50aGF0IHRoZSBgaW50YCBhYmJyZXZpYXRpb24gd2FzIGludHJvZHVjZWQgaW4gW0FMR09MIDY4XVs2OF0sIHNob3J0ZW5pbmcgaXRcbmZyb20gYGludGVnZXJgIGluIFtBTEdPTCA2MF1bNjBdLiBUb2RheSwgYWxtb3N0IGFsbCBwcm9ncmFtbWluZyBsYW5ndWFnZXMgdXNlXG50aGlzIGFiYnJldmlhdGlvbi5cblxuW2lvXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZWdlcl9vdmVyZmxvd1xuW2ludGVnZXJdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlZ2VyXG5bNjBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTEdPTF82MFxuWzY4XTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQUxHT0xfNjhcblxuLX1cbnR5cGUgSW50XG4gICAgPSBJbnQgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cbnstfCBBIGBGbG9hdGAgaXMgYSBbZmxvYXRpbmctcG9pbnQgbnVtYmVyXVtmcF0uIFZhbGlkIHN5bnRheCBmb3IgZmxvYXRzIGluY2x1ZGVzOlxuXG4gICAgMFxuICAgIDQyXG4gICAgMy4xNFxuICAgIDAuMTIzNFxuICAgIDYuMDIyZTIzICAgLS0gPT0gKDYuMDIyICogMTBeMjMpXG4gICAgNi4wMjJlKzIzICAtLSA9PSAoNi4wMjIgKiAxMF4yMylcbiAgICAxLjYwMmXiiJIxOSAgLS0gPT0gKDEuNjAyICogMTBeLTE5KVxuICAgIDFlMyAgICAgICAgLS0gPT0gKDEgKiAxMF4zKSA9PSAxMDAwXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBwYXJ0aWN1bGFyIGRldGFpbHMgb2YgZmxvYXRzIChlLmcuIGBOYU5gKSBhcmVcbnNwZWNpZmllZCBieSBbSUVFRSA3NTRdW2llZWVdIHdoaWNoIGlzIGxpdGVyYWxseSBoYXJkLWNvZGVkIGludG8gYWxtb3N0IGFsbFxuQ1BVcyBpbiB0aGUgd29ybGQuIFRoYXQgbWVhbnMgaWYgeW91IHRoaW5rIGBOYU5gIGlzIHdlaXJkLCB5b3UgbXVzdFxuc3VjY2Vzc2Z1bGx5IG92ZXJ0YWtlIEludGVsIGFuZCBBTUQgd2l0aCBhIGNoaXAgdGhhdCBpcyBub3QgYmFja3dhcmRzXG5jb21wYXRpYmxlIHdpdGggYW55IHdpZGVseS11c2VkIGFzc2VtYmx5IGxhbmd1YWdlLlxuXG5bZnBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GbG9hdGluZy1wb2ludF9hcml0aG1ldGljXG5baWVlZV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lFRUVfNzU0XG5cbi19XG50eXBlIEZsb2F0XG4gICAgPSBGbG9hdCAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuey18IEFkZCB0d28gbnVtYmVycy4gVGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUgbWVhbnMgdGhpcyBvcGVyYXRpb24gY2FuIGJlXG5zcGVjaWFsaXplZCB0byBgSW50IC0+IEludCAtPiBJbnRgIG9yIHRvIGBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdGAuIFNvIHlvdVxuY2FuIGRvIHRoaW5ncyBsaWtlIHRoaXM6XG5cbiAgICAzMDAyICsgNDAwNCA9PSA3MDA2IC0tIGFsbCBpbnRzXG5cbiAgICAzLjE0ICsgMy4xNCA9PSA2LjI4IC0tIGFsbCBmbG9hdHNcblxuWW91IF9jYW5ub3RfIGFkZCBhbiBgSW50YCBhbmQgYSBgRmxvYXRgIGRpcmVjdGx5IHRob3VnaC4gVXNlIGZ1bmN0aW9ucyBsaWtlXG5bdG9GbG9hdF0oI3RvRmxvYXQpIG9yIFtyb3VuZF0oI3JvdW5kKSB0byBjb252ZXJ0IGJvdGggdmFsdWVzIHRvIHRoZSBzYW1lIHR5cGUuXG5TbyBpZiB5b3UgbmVlZGVkIHRvIGFkZCBhIGFycmF5IGxlbmd0aCB0byBhIGBGbG9hdGAgZm9yIHNvbWUgcmVhc29uLCB5b3VcbmNvdWxkIHNheSBvbmUgb2YgdGhlc2U6XG5cbiAgICAzLjE0ICsgdG9GbG9hdCAoQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdKSA9PSA2LjE0XG5cbiAgICByb3VuZCAzLjE0ICsgQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdID09IDZcblxuKipOb3RlOioqIExhbmd1YWdlcyBsaWtlIEphdmEgYW5kIEphdmFTY3JpcHQgYXV0b21hdGljYWxseSBjb252ZXJ0IGBJbnRgIHZhbHVlc1xudG8gYEZsb2F0YCB2YWx1ZXMgd2hlbiB5b3UgbWl4IGFuZCBtYXRjaC4gVGhpcyBjYW4gbWFrZSBpdCBkaWZmaWN1bHQgdG8gYmUgc3VyZVxuZXhhY3RseSB3aGF0IHR5cGUgb2YgbnVtYmVyIHlvdSBhcmUgZGVhbGluZyB3aXRoLiBXaGVuIHlvdSB0cnkgdG8gX2luZmVyXyB0aGVzZVxuY29udmVyc2lvbnMgKGFzIFNjYWxhIGRvZXMpIGl0IGNhbiBiZSBldmVuIG1vcmUgY29uZnVzaW5nLiBHcmVuIGhhcyBvcHRlZCBmb3IgYVxuZGVzaWduIHRoYXQgbWFrZXMgYWxsIGNvbnZlcnNpb25zIGV4cGxpY2l0LlxuXG4tfVxuYWRkIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmFkZCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmFkZFxuXG5cbnstfCBTdWJ0cmFjdCBudW1iZXJzIGxpa2UgYDQgLSAzID09IDFgLlxuXG5TZWUgW2AoKylgXSgjKykgZm9yIGRvY3Mgb24gdGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUuXG5cbi19XG5zdWIgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxuc3ViID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Muc3ViXG5cblxuey18IE11bHRpcGx5IG51bWJlcnMgbGlrZSBgMiAqIDMgPT0gNmAuXG5cblNlZSBbYCgrKWBdKCMrKSBmb3IgZG9jcyBvbiB0aGUgYG51bWJlcmAgdHlwZSB2YXJpYWJsZS5cblxuLX1cbm11bCA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5tdWwgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5tdWxcblxuXG57LXwgRmxvYXRpbmctcG9pbnQgZGl2aXNpb246XG5cbiAgICAxMCAvIDQgPT0gMi41XG5cbiAgICAxMSAvIDQgPT0gMi43NVxuXG4gICAgMTIgLyA0ID09IDNcblxuICAgIDEzIC8gNCA9PSAzLjI1XG5cbiAgICAxNFxuICAgICAgICAvIDRcbiAgICAgICAgPT0gMy41XG4gICAgICAgIC0gMVxuICAgICAgICAvIDRcbiAgICAgICAgPT0gLTAuMjVcbiAgICAgICAgLSA1XG4gICAgICAgIC8gNFxuICAgICAgICA9PSAtMS4yNVxuXG4tfVxuZmRpdiA6IEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0XG5mZGl2ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuZmRpdlxuXG5cbnstfCBJbnRlZ2VyIGRpdmlzaW9uOlxuXG4gICAgMTAgLy8gNCA9PSAyXG5cbiAgICAxMSAvLyA0ID09IDJcblxuICAgIDEyIC8vIDQgPT0gM1xuXG4gICAgMTMgLy8gNCA9PSAzXG5cbiAgICAxNFxuICAgICAgICAvLyA0XG4gICAgICAgID09IDNcbiAgICAgICAgLSAxXG4gICAgICAgIC8vIDRcbiAgICAgICAgPT0gMFxuICAgICAgICAtIDVcbiAgICAgICAgLy8gNFxuICAgICAgICA9PSAtMVxuXG5Ob3RpY2UgdGhhdCB0aGUgcmVtYWluZGVyIGlzIGRpc2NhcmRlZCwgc28gYDMgLy8gNGAgaXMgZ2l2aW5nIG91dHB1dFxuc2ltaWxhciB0byBgdHJ1bmNhdGUgKDMgLyA0KWAuXG5cbkl0IG1heSBzb21ldGltZXMgYmUgdXNlZnVsIHRvIHBhaXIgdGhpcyB3aXRoIHRoZSBbYHJlbWFpbmRlckJ5YF0oI3JlbWFpbmRlckJ5KVxuZnVuY3Rpb24uXG5cbi19XG5pZGl2IDogSW50IC0+IEludCAtPiBJbnRcbmlkaXYgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5pZGl2XG5cblxuey18IEV4cG9uZW50aWF0aW9uXG5cbiAgICAzIF4gMiA9PSA5XG5cbiAgICAzIF4gMyA9PSAyN1xuXG4tfVxucG93IDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbnBvdyA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnBvd1xuXG5cbnstfCBOZWdhdGUgYSBudW1iZXIuXG5cbiAgICBuZWdhdGUgNDIgPT0gLTQyXG5cbiAgICBuZWdhdGUgLTQyID09IDQyXG5cbiAgICBuZWdhdGUgMCA9PSAwXG5cbi19XG5uZWdhdGUgOiBudW1iZXIgLT4gbnVtYmVyXG5uZWdhdGUgbiA9XG4gICAgLW5cblxuXG4tLSBJTlQgVE8gRkxPQVQgLyBGTE9BVCBUTyBJTlRcblxuXG57LXwgQ29udmVydCBhbiBpbnRlZ2VyIGludG8gYSBmbG9hdC4gVXNlZnVsIHdoZW4gbWl4aW5nIGBJbnRgIGFuZCBgRmxvYXRgXG52YWx1ZXMgbGlrZSB0aGlzOlxuXG4gICAgaGFsZk9mIDogSW50IC0+IEZsb2F0XG4gICAgaGFsZk9mIG51bWJlciA9XG4gICAgICAgIHRvRmxvYXQgbnVtYmVyIC8gMlxuXG4tfVxudG9GbG9hdCA6IEludCAtPiBGbG9hdFxudG9GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnRvRmxvYXRcblxuXG5cbi0tIEVRVUFMSVRZXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgJmxkcXVvO3RoZSBzYW1lJnJkcXVvOy5cblxuKipOb3RlOioqIEdyZW4gdXNlcyBzdHJ1Y3R1cmFsIGVxdWFsaXR5IG9uIHR1cGxlcywgcmVjb3JkcywgYW5kIHVzZXItZGVmaW5lZFxudW5pb24gdHlwZXMuIFRoaXMgbWVhbnMgdGhlIHZhbHVlcyBgKDMsIDQpYCBhbmQgYCgzLCA0KWAgYXJlIGRlZmluaXRlbHkgZXF1YWwuXG5UaGlzIGlzIG5vdCB0cnVlIGluIGxhbmd1YWdlcyBsaWtlIEphdmFTY3JpcHQgdGhhdCB1c2UgcmVmZXJlbmNlIGVxdWFsaXR5IG9uXG5vYmplY3RzLlxuXG4qKk5vdGU6KiogRG8gbm90IHVzZSBgKD09KWAgd2l0aCBmdW5jdGlvbnMsIEpTT04gdmFsdWVzIGZyb20gYGdyZW4vanNvbmAsIG9yXG5yZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gYGdyZW4vcmVnZXhgLiBJdCBkb2VzIG5vdCB3b3JrLiBJdCB3aWxsIGNyYXNoIGlmXG5wb3NzaWJsZS4gV2l0aCBKU09OIHZhbHVlcywgZGVjb2RlIHRvIEdyZW4gdmFsdWVzIGJlZm9yZSBkb2luZyBhbnkgZXF1YWxpdHlcbmNoZWNrcyFcblxuV2h5IGlzIGl0IGxpa2UgdGhpcz8gRXF1YWxpdHkgaW4gdGhlIEdyZW4gc2Vuc2UgY2FuIGJlIGRpZmZpY3VsdCBvciBpbXBvc3NpYmxlXG50byBjb21wdXRlLiBQcm92aW5nIHRoYXQgZnVuY3Rpb25zIGFyZSB0aGUgc2FtZSBpcyBbdW5kZWNpZGFibGVdLCBhbmQgSlNPTlxudmFsdWVzIGNhbiBjb21lIGluIHRocm91Z2ggcG9ydHMgYW5kIGhhdmUgZnVuY3Rpb25zLCBjeWNsZXMsIGFuZCBuZXcgSlMgZGF0YVxudHlwZXMgdGhhdCBpbnRlcmFjdCB3ZWlyZGx5IHdpdGggb3VyIGVxdWFsaXR5IGltcGxlbWVudGF0aW9uLiBJbiBhIGZ1dHVyZVxucmVsZWFzZSwgdGhlIGNvbXBpbGVyIHdpbGwgZGV0ZWN0IHdoZW4gYCg9PSlgIGlzIHVzZWQgd2l0aCBwcm9ibGVtYXRpYyB0eXBlc1xuYW5kIHByb3ZpZGUgYSBoZWxwZnVsIGVycm9yIG1lc3NhZ2UgYXQgY29tcGlsZSB0aW1lLiBUaGlzIHdpbGwgcmVxdWlyZSBzb21lXG5wcmV0dHkgc2VyaW91cyBpbmZyYXN0cnVjdHVyZSB3b3JrLCBzbyB0aGUgc3RvcGdhcCBpcyB0byBjcmFzaCBhcyBxdWlja2x5IGFzXG5wb3NzaWJsZS5cblxuW3VuZGVjaWRhYmxlXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5kZWNpZGFibGVfcHJvYmxlbVxuXG4tfVxuZXEgOiBhIC0+IGEgLT4gQm9vbFxuZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmVxdWFsXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgbm90ICZsZHF1bzt0aGUgc2FtZSZyZHF1bzsuXG5cblNvIGAoYSAvPSBiKWAgaXMgdGhlIHNhbWUgYXMgYChub3QgKGEgPT0gYikpYC5cblxuLX1cbm5lcSA6IGEgLT4gYSAtPiBCb29sXG5uZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLm5vdEVxdWFsXG5cblxuXG4tLSBDT01QQVJJU09OU1xuXG5cbnstfCAtfVxubHQgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxubHQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmx0XG5cblxuey18IC19XG5ndCA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5ndCA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuZ3RcblxuXG57LXwgLX1cbmxlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmxlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5sZVxuXG5cbnstfCAtfVxuZ2UgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxuZ2UgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmdlXG5cblxuey18IEZpbmQgdGhlIHNtYWxsZXIgb2YgdHdvIGNvbXBhcmFibGVzLlxuXG4gICAgbWluIDQyIDEyMzQ1Njc4ID09IDQyXG5cbiAgICBtaW4gXCJhYmNcIiBcInh5elwiID09IFwiYWJjXCJcblxuLX1cbm1pbiA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlXG5taW4geCB5ID1cbiAgICBpZiBsdCB4IHkgdGhlblxuICAgICAgICB4XG5cbiAgICBlbHNlXG4gICAgICAgIHlcblxuXG57LXwgRmluZCB0aGUgbGFyZ2VyIG9mIHR3byBjb21wYXJhYmxlcy5cblxuICAgIG1heCA0MiAxMjM0NTY3OCA9PSAxMjM0NTY3OFxuXG4gICAgbWF4IFwiYWJjXCIgXCJ4eXpcIiA9PSBcInh5elwiXG5cbi19XG5tYXggOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZVxubWF4IHggeSA9XG4gICAgaWYgZ3QgeCB5IHRoZW5cbiAgICAgICAgeFxuXG4gICAgZWxzZVxuICAgICAgICB5XG5cblxuey18IENsYW1wcyBhIG51bWJlciB3aXRoaW4gYSBnaXZlbiByYW5nZS4gV2l0aCB0aGUgZXhwcmVzc2lvblxuYGNsYW1wIDEwMCAyMDAgeGAgdGhlIHJlc3VsdHMgYXJlIGFzIGZvbGxvd3M6XG5cbiAgICAxMDAgICAgIGlmIHggPCAxMDBcbiAgICAgeCAgICAgIGlmIDEwMCA8PSB4IDwgMjAwXG4gICAgMjAwICAgICBpZiAyMDAgPD0geFxuXG4tfVxuY2xhbXAgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmNsYW1wIGxvdyBoaWdoIG51bWJlciA9XG4gICAgaWYgbHQgbnVtYmVyIGxvdyB0aGVuXG4gICAgICAgIGxvd1xuXG4gICAgZWxzZSBpZiBndCBudW1iZXIgaGlnaCB0aGVuXG4gICAgICAgIGhpZ2hcblxuICAgIGVsc2VcbiAgICAgICAgbnVtYmVyXG5cblxuey18IENvbXBhcmUgYW55IHR3byBjb21wYXJhYmxlIHZhbHVlcy4gQ29tcGFyYWJsZSB2YWx1ZXMgaW5jbHVkZSBgU3RyaW5nYCxcbmBDaGFyYCwgYEludGAsIGBGbG9hdGAsIG9yIGFuIGFycmF5IG9yIHR1cGxlIGNvbnRhaW5pbmcgY29tcGFyYWJsZSB2YWx1ZXMuIFRoZXNlXG5hcmUgYWxzbyB0aGUgb25seSB2YWx1ZXMgdGhhdCB3b3JrIGFzIGBEaWN0YCBrZXlzIG9yIGBTZXRgIG1lbWJlcnMuXG5cbiAgICBjb21wYXJlIDMgNCA9PSBMVFxuXG4gICAgY29tcGFyZSA0IDQgPT0gRVFcblxuICAgIGNvbXBhcmUgNSA0ID09IEdUXG5cbi19XG5jb21wYXJlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IE9yZGVyXG5jb21wYXJlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5jb21wYXJlXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHJlbGF0aXZlIG9yZGVyaW5nIG9mIHR3byB0aGluZ3MuXG5UaGUgcmVsYXRpb25zIGFyZSBsZXNzIHRoYW4sIGVxdWFsIHRvLCBhbmQgZ3JlYXRlciB0aGFuLlxuLX1cbnR5cGUgT3JkZXJcbiAgICA9IExUXG4gICAgfCBFUVxuICAgIHwgR1RcblxuXG5cbi0tIEJPT0xFQU5TXG5cblxuey18IEEg4oCcQm9vbGVhbuKAnSB2YWx1ZS4gSXQgY2FuIGVpdGhlciBiZSBgVHJ1ZWAgb3IgYEZhbHNlYC5cblxuKipOb3RlOioqIFByb2dyYW1tZXJzIGNvbWluZyBmcm9tIEphdmFTY3JpcHQsIEphdmEsIGV0Yy4gdGVuZCB0byByZWFjaCBmb3JcbmJvb2xlYW4gdmFsdWVzIHdheSB0b28gb2Z0ZW4gaW4gR3Jlbi4gVXNpbmcgYSBbdW5pb24gdHlwZV1bdXRdIGlzIG9mdGVuIGNsZWFyZXJcbmFuZCBtb3JlIHJlbGlhYmxlLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBmcm9tIEplcmVteSBbaGVyZV1bamZdIG9yXG5mcm9tIFJpY2hhcmQgW2hlcmVdW3J0XS5cblxuW3V0XTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3R5cGVzL3VuaW9uX3R5cGVzLmh0bWxcbltqZl06IGh0dHBzOi8veW91dHUuYmUvNlRES0hHdEF4ZWc/dD0xbTI1c1xuW3J0XTogaHR0cHM6Ly95b3V0dS5iZS9JY2dtU1JKSHVfOD90PTFtMTRzXG5cbi19XG50eXBlIEJvb2xcbiAgICA9IFRydWVcbiAgICB8IEZhbHNlXG5cblxuey18IE5lZ2F0ZSBhIGJvb2xlYW4gdmFsdWUuXG5cbiAgICBub3QgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgbm90IEZhbHNlID09IFRydWVcblxuLX1cbm5vdCA6IEJvb2wgLT4gQm9vbFxubm90ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mubm90XG5cblxuey18IFRoZSBsb2dpY2FsIEFORCBvcGVyYXRvci4gYFRydWVgIGlmIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlICYmIFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSAmJiBGYWxzZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgRmFsc2UgPT0gRmFsc2VcblxuKipOb3RlOioqIFdoZW4gdXNlZCBpbiB0aGUgaW5maXggcG9zaXRpb24sIGxpa2UgYChsZWZ0ICYmIHJpZ2h0KWAsIHRoZSBvcGVyYXRvclxuc2hvcnQtY2lyY3VpdHMuIFRoaXMgbWVhbnMgaWYgYGxlZnRgIGlzIGBGYWxzZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgRmFsc2VgIG92ZXJhbGwuXG5cbi19XG5hbmQgOiBCb29sIC0+IEJvb2wgLT4gQm9vbFxuYW5kID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuYW5kXG5cblxuey18IFRoZSBsb2dpY2FsIE9SIG9wZXJhdG9yLiBgVHJ1ZWAgaWYgb25lIG9yIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlIHx8IFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSB8fCBGYWxzZSA9PSBUcnVlXG5cbiAgICBGYWxzZSB8fCBUcnVlID09IFRydWVcblxuICAgIEZhbHNlIHx8IEZhbHNlID09IEZhbHNlXG5cbioqTm90ZToqKiBXaGVuIHVzZWQgaW4gdGhlIGluZml4IHBvc2l0aW9uLCBsaWtlIGAobGVmdCB8fCByaWdodClgLCB0aGUgb3BlcmF0b3JcbnNob3J0LWNpcmN1aXRzLiBUaGlzIG1lYW5zIGlmIGBsZWZ0YCBpcyBgVHJ1ZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgVHJ1ZWAgb3ZlcmFsbC5cblxuLX1cbm9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbm9yID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mub3JcblxuXG57LXwgVGhlIGV4Y2x1c2l2ZS1vciBvcGVyYXRvci4gYFRydWVgIGlmIGV4YWN0bHkgb25lIGlucHV0IGlzIGBUcnVlYC5cblxuICAgIHhvciBUcnVlIFRydWUgPT0gRmFsc2VcblxuICAgIHhvciBUcnVlIEZhbHNlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBUcnVlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBGYWxzZSA9PSBGYWxzZVxuXG4tfVxueG9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbnhvciA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnhvclxuXG5cblxuLS0gQVBQRU5EXG5cblxuey18IFB1dCB0d28gYXBwZW5kYWJsZSB0aGluZ3MgdG9nZXRoZXIuIFRoaXMgaW5jbHVkZXMgc3RyaW5ncyBhbmQgYXJyYXlzLlxuXG4gICAgXCJoZWxsb1wiICsrIFwid29ybGRcIiA9PSBcImhlbGxvd29ybGRcIlxuXG4gICAgWyAxLCAxLCAyIF0gKysgWyAzLCA1LCA4IF0gPT0gWyAxLCAxLCAyLCAzLCA1LCA4IF1cblxuLX1cbmFwcGVuZCA6IGFwcGVuZGFibGUgLT4gYXBwZW5kYWJsZSAtPiBhcHBlbmRhYmxlXG5hcHBlbmQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmFwcGVuZFxuXG5cblxuLS0gQ1JBWlkgRkxPQVRTXG5cblxuey18IERldGVybWluZSB3aGV0aGVyIGEgZmxvYXQgaXMgYW4gdW5kZWZpbmVkIG9yIHVucmVwcmVzZW50YWJsZSBudW1iZXIuXG5OYU4gc3RhbmRzIGZvciBfbm90IGEgbnVtYmVyXyBhbmQgaXQgaXMgW2Egc3RhbmRhcmRpemVkIHBhcnQgb2YgZmxvYXRpbmcgcG9pbnRcbm51bWJlcnNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05hTikuXG5cbiAgICBpc05hTiAoMCAvIDApID09IFRydWVcblxuICAgIGlzTmFOIChzcXJ0IC0xKSA9PSBUcnVlXG5cbiAgICBpc05hTiAoMSAvIDApID09IEZhbHNlIC0tIGluZmluaXR5IGlzIGEgbnVtYmVyXG5cbiAgICBpc05hTiAxID09IEZhbHNlXG5cbi19XG5pc05hTiA6IEZsb2F0IC0+IEJvb2xcbmlzTmFOID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuaXNOYU5cblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgYSBmbG9hdCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbmZpbml0eS5cblxuICAgIGlzSW5maW5pdGUgKDAgLyAwKSA9PSBGYWxzZVxuXG4gICAgaXNJbmZpbml0ZSAoc3FydCAtMSkgPT0gRmFsc2VcblxuICAgIGlzSW5maW5pdGUgKDEgLyAwKSA9PSBUcnVlXG5cbiAgICBpc0luZmluaXRlIDEgPT0gRmFsc2VcblxuTm90aWNlIHRoYXQgTmFOIGlzIG5vdCBpbmZpbml0ZSEgRm9yIGZsb2F0IGBuYCB0byBiZSBmaW5pdGUgaW1wbGllcyB0aGF0XG5gbm90IChpc0luZmluaXRlIG4gfHwgaXNOYU4gbilgIGV2YWx1YXRlcyB0byBgVHJ1ZWAuXG5cbi19XG5pc0luZmluaXRlIDogRmxvYXQgLT4gQm9vbFxuaXNJbmZpbml0ZSA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmlzSW5maW5pdGVcblxuXG5cbi0tIEZVTkNUSU9OIEhFTFBFUlNcblxuXG57LXwgRnVuY3Rpb24gY29tcG9zaXRpb24sIHBhc3NpbmcgcmVzdWx0cyBhbG9uZyBpbiB0aGUgc3VnZ2VzdGVkIGRpcmVjdGlvbi4gRm9yXG5leGFtcGxlLCB0aGUgZm9sbG93aW5nIGNvZGUgY2hlY2tzIGlmIHRoZSByZXN1bHQgb2Ygcm91bmRpbmcgYSBmbG9hdCBpcyBvZGQ6XG5cbiAgICBub3QgPDwgaXNFdmVuIDw8IHJvdW5kXG5cbllvdSBjYW4gdGhpbmsgb2YgdGhpcyBvcGVyYXRvciBhcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmc6XG5cbiAgICAoZyA8PCBmKSA9PSAoXFx4IC0+IGcgKGYgeCkpXG5cblNvIG91ciBleGFtcGxlIGV4cGFuZHMgb3V0IHRvIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBcXG4gLT4gbm90IChpc0V2ZW4gKHJvdW5kIG4pKVxuXG4tfVxuY29tcG9zZUwgOiAoYiAtPiBjKSAtPiAoYSAtPiBiKSAtPiAoYSAtPiBjKVxuY29tcG9zZUwgZyBmID1cbiAgICBcXHggLT4gZyAoZiB4KVxuXG5cbnstfCBGdW5jdGlvbiBjb21wb3NpdGlvbiwgcGFzc2luZyByZXN1bHRzIGFsb25nIGluIHRoZSBzdWdnZXN0ZWQgZGlyZWN0aW9uLiBGb3JcbmV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgY29kZSBjaGVja3MgaWYgdGhlIHJlc3VsdCBvZiByb3VuZGluZyBhIGZsb2F0IGlzIG9kZDpcblxuICAgIHJvdW5kID4+IGlzRXZlbiA+PiBub3RcblxuLX1cbmNvbXBvc2VSIDogKGEgLT4gYikgLT4gKGIgLT4gYykgLT4gKGEgLT4gYylcbmNvbXBvc2VSIGYgZyA9XG4gICAgXFx4IC0+IGcgKGYgeClcblxuXG57LXwgU2F5aW5nIGB4IHw+IGZgIGlzIGV4YWN0bHkgdGhlIHNhbWUgYXMgYGYgeGAuXG5cbkl0IGlzIGNhbGxlZCB0aGUg4oCccGlwZeKAnSBvcGVyYXRvciBiZWNhdXNlIGl0IGxldHMgeW91IHdyaXRlIOKAnHBpcGVsaW5lZOKAnSBjb2RlLlxuRm9yIGV4YW1wbGUsIHNheSB3ZSBoYXZlIGEgYHNhbml0aXplYCBmdW5jdGlvbiBmb3IgdHVybmluZyB1c2VyIGlucHV0IGludG9cbmludGVnZXJzOlxuXG4gICAgLS0gQkVGT1JFXG4gICAgc2FuaXRpemUgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgc2FuaXRpemUgaW5wdXQgPVxuICAgICAgICBTdHJpbmcudG9JbnQgKFN0cmluZy50cmltIGlucHV0KVxuXG5XZSBjYW4gcmV3cml0ZSBpdCBsaWtlIHRoaXM6XG5cbiAgICAtLSBBRlRFUlxuICAgIHNhbml0aXplIDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIHNhbml0aXplIGlucHV0ID1cbiAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIHw+IFN0cmluZy50cmltXG4gICAgICAgICAgICB8PiBTdHJpbmcudG9JbnRcblxuVG90YWxseSBlcXVpdmFsZW50ISBJIHJlY29tbWVuZCB0cnlpbmcgdG8gcmV3cml0ZSBjb2RlIHRoYXQgdXNlcyBgeCB8PiBmYFxuaW50byBjb2RlIGxpa2UgYGYgeGAgdW50aWwgdGhlcmUgYXJlIG5vIHBpcGVzIGxlZnQuIFRoYXQgY2FuIGhlbHAgeW91IGJ1aWxkXG55b3VyIGludHVpdGlvbi5cblxuKipOb3RlOioqIFRoaXMgY2FuIGJlIG92ZXJ1c2VkISBJIHRoaW5rIGZvbGtzIGZpbmQgaXQgcXVpdGUgbmVhdCwgYnV0IHdoZW4geW91XG5oYXZlIHRocmVlIG9yIGZvdXIgc3RlcHMsIHRoZSBjb2RlIG9mdGVuIGdldHMgY2xlYXJlciBpZiB5b3UgYnJlYWsgb3V0IGFcbnRvcC1sZXZlbCBoZWxwZXIgZnVuY3Rpb24uIE5vdyB0aGUgdHJhbnNmb3JtYXRpb24gaGFzIGEgbmFtZS4gVGhlIGFyZ3VtZW50cyBhcmVcbm5hbWVkLiBJdCBoYXMgYSB0eXBlIGFubm90YXRpb24uIEl0IGlzIG11Y2ggbW9yZSBzZWxmLWRvY3VtZW50aW5nIHRoYXQgd2F5IVxuVGVzdGluZyB0aGUgbG9naWMgZ2V0cyBlYXNpZXIgdG9vLiBOaWNlIHNpZGUgYmVuZWZpdCFcblxuLX1cbmFwUiA6IGEgLT4gKGEgLT4gYikgLT4gYlxuYXBSIHggZiA9XG4gICAgZiB4XG5cblxuey18IFNheWluZyBgZiA8fCB4YCBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGBmIHhgLlxuXG5JdCBjYW4gaGVscCB5b3UgYXZvaWQgcGFyZW50aGVzZXMsIHdoaWNoIGNhbiBiZSBuaWNlIHNvbWV0aW1lcy4gTWF5YmUgeW91IHdhbnRcbnRvIGFwcGx5IGEgZnVuY3Rpb24gdG8gYSBgY2FzZWAgZXhwcmVzc2lvbj8gVGhhdCBzb3J0IG9mIHRoaW5nLlxuXG4tfVxuYXBMIDogKGEgLT4gYikgLT4gYSAtPiBiXG5hcEwgZiB4ID1cbiAgICBmIHhcblxuXG57LXwgR2l2ZW4gYSB2YWx1ZSwgcmV0dXJucyBleGFjdGx5IHRoZSBzYW1lIHZhbHVlLiBUaGlzIGlzIGNhbGxlZFxuW3RoZSBpZGVudGl0eSBmdW5jdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSWRlbnRpdHlfZnVuY3Rpb24pLlxuLX1cbmlkZW50aXR5IDogYSAtPiBhXG5pZGVudGl0eSB4ID1cbiAgICB4XG5cblxuey18IEEgdmFsdWUgdGhhdCBjYW4gbmV2ZXIgaGFwcGVuISBGb3IgY29udGV4dDpcblxuICAtIFRoZSBib29sZWFuIHR5cGUgYEJvb2xgIGhhcyB0d28gdmFsdWVzOiBgVHJ1ZWAgYW5kIGBGYWxzZWBcbiAgLSBUaGUgdW5pdCB0eXBlIGAoKWAgaGFzIG9uZSB2YWx1ZTogYCgpYFxuICAtIFRoZSBuZXZlciB0eXBlIGBOZXZlcmAgaGFzIG5vIHZhbHVlcyFcblxuWW91IG1heSBzZWUgaXQgaW4gdGhlIHdpbGQgaW4gYEh0bWwgTmV2ZXJgIHdoaWNoIG1lYW5zIHRoaXMgSFRNTCB3aWxsIG5ldmVyXG5wcm9kdWNlIGFueSBtZXNzYWdlcy4gWW91IHdvdWxkIG5lZWQgdG8gd3JpdGUgYW4gZXZlbnQgaGFuZGxlciBsaWtlXG5gb25DbGljayA/Pz8gOiBBdHRyaWJ1dGUgTmV2ZXJgIGJ1dCBob3cgY2FuIHdlIGZpbGwgaW4gdGhlIHF1ZXN0aW9uIG1hcmtzPyFcblNvIHRoZXJlIGNhbm5vdCBiZSBhbnkgZXZlbnQgaGFuZGxlcnMgb24gdGhhdCBIVE1MLlxuXG5Zb3UgbWF5IGFsc28gc2VlIHRoaXMgdXNlZCB3aXRoIHRhc2tzIHRoYXQgbmV2ZXIgZmFpbCwgbGlrZSBgVGFzayBOZXZlciAoKWAuXG5cblRoZSBgTmV2ZXJgIHR5cGUgaXMgdXNlZnVsIGZvciByZXN0cmljdGluZyBfYXJndW1lbnRzXyB0byBhIGZ1bmN0aW9uLiBNYXliZSBteVxuQVBJIGNhbiBvbmx5IGFjY2VwdCBIVE1MIHdpdGhvdXQgZXZlbnQgaGFuZGxlcnMsIHNvIEkgcmVxdWlyZSBgSHRtbCBOZXZlcmAgYW5kXG51c2VycyBjYW4gZ2l2ZSBgSHRtbCBtc2dgIGFuZCBldmVyeXRoaW5nIHdpbGwgZ28gZmluZS4gR2VuZXJhbGx5IHNwZWFraW5nLCB5b3VcbmRvIG5vdCB3YW50IGBOZXZlcmAgaW4geW91ciByZXR1cm4gdHlwZXMgdGhvdWdoLlxuXG4tfVxudHlwZSBOZXZlclxuICAgID0gSnVzdE9uZU1vcmUgTmV2ZXJcblxuXG57LXwgQSBmdW5jdGlvbiB0aGF0IGNhbiBuZXZlciBiZSBjYWxsZWQuIFNlZW1zIGV4dHJlbWVseSBwb2ludGxlc3MsIGJ1dCBpdFxuX2Nhbl8gY29tZSBpbiBoYW5keS4gSW1hZ2luZSB5b3UgaGF2ZSBzb21lIEhUTUwgdGhhdCBzaG91bGQgbmV2ZXIgcHJvZHVjZSBhbnlcbm1lc3NhZ2VzLiBBbmQgc2F5IHlvdSB3YW50IHRvIHVzZSBpdCBpbiBzb21lIG90aGVyIEhUTUwgdGhhdCBfZG9lc18gcHJvZHVjZVxubWVzc2FnZXMuIFlvdSBjb3VsZCBzYXk6XG5cbiAgICBpbXBvcnQgSHRtbCBleHBvc2luZyAoLi4pXG5cbiAgICBlbWJlZEh0bWwgOiBIdG1sIE5ldmVyIC0+IEh0bWwgbXNnXG4gICAgZW1iZWRIdG1sIHN0YXRpY1N0dWZmID1cbiAgICAgICAgZGl2IFtdXG4gICAgICAgICAgICBbIHRleHQgXCJoZWxsb1wiXG4gICAgICAgICAgICAsIEh0bWwubWFwIG5ldmVyIHN0YXRpY1N0dWZmXG4gICAgICAgICAgICBdXG5cblNvIHRoZSBgbmV2ZXJgIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSB0ZWxsaW5nIHRoZSB0eXBlIHN5c3RlbSwgbWFrZSBzdXJlIG5vIG9uZVxuZXZlciBjYWxscyBtZSFcblxuLX1cbm5ldmVyIDogTmV2ZXIgLT4gYVxubmV2ZXIgKEp1c3RPbmVNb3JlIG52cikgPVxuICAgIG5ldmVyIG52clxuIiwKICAgICAgICAibW9kdWxlIERhdGFUYWJsZSBleHBvc2luZ1xuICAgICggdmlld1xuICAgICwgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuICAgICwgU3RhdGUsIG5ld1xuICAgICwgU29ydERpcmVjdGlvbiguLiksIGluaXRpYWxTb3J0XG4gICAgLCBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcbiAgICAsIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG4gICAgLCBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuICAgICwgcGFnZUxlbmd0aENob29zZXJcbiAgICAsIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG4gICAgLCBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuICAgICwgQ29uZmlnLCBjdXN0b21Db25maWcsIEN1c3RvbWl6YXRpb25zLCBIdG1sRGV0YWlsc1xuICAgICwgZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgLCBnZXRTb3J0ZWREYXRhLCBnZXRQYWdpbmF0ZWREYXRhXG4gICAgKVxuXG57LXwgVGhpcyBsaWJyYXJ5IGhlbHBzIHlvdSBjcmVhdGUgc29ydGFibGUgdGFibGVzIHdpdGggcGFnaW5hdGlvbiBhbmQgZmlsdGVyIG9wdGlvbnMuXG5UaGUgY3J1Y2lhbCBmZWF0dXJlIGlzIHRoYXQgaXQgbGV0cyB5b3Ugb3duIHlvdXIgZGF0YSBzZXBhcmF0ZWx5IGFuZCBrZWVwIGl0IGluXG53aGF0ZXZlciBmb3JtYXQgaXMgYmVzdCBmb3IgeW91LiBUaGlzIHdheSB5b3UgYXJlIGZyZWUgdG8gY2hhbmdlIHlvdXIgZGF0YSB3aXRob3V0XG53b3JyeWluZyBhYm91dCB0aGUgdGFibGUgJmxkcXVvO2dldHRpbmcgb3V0IG9mIHN5bmMmcmRxdW87IHdpdGggdGhlIGRhdGEuIEhhdmluZyBhIHNpbmdsZVxuc291cmNlIG9mIHRydXRoIGlzIHByZXR0eSBncmVhdCFcblxuSSByZWNvbW1lbmQgY2hlY2tpbmcgb3V0IHRoZSBbZXhhbXBsZXNdIHRvIGdldCBhIGZlZWwgZm9yIGhvdyBpdCB3b3Jrcy5cblxuW2V4YW1wbGVzXTogaHR0cHM6Ly9naXRodWIuY29tL2xpbmRlbmxpb24vZ3Jlbi1kYXRhdGFibGVzL3RyZWUvbWFtYS9leGFtcGxlc1xuXG5cbiMjIFZpZXdcblxuQGRvY3Mgdmlld1xuXG5cbiMjIENvbmZpZ3VyYXRpb25cblxuQGRvY3MgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuXG5cbiMjIFN0YXRlXG5cbkBkb2NzIFN0YXRlLCBuZXdcblxuXG4jIyBTb3J0IG9yZGVyXG5cbkBkb2NzIFNvcnREaXJlY3Rpb24sIGluaXRpYWxTb3J0XG5AZG9jcyBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcblxuXG4jIyBQYWdpbmF0aW9uXG5cbkBkb2NzIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG5AZG9jcyBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuQGRvY3MgcGFnZUxlbmd0aENob29zZXJcblxuIyMgQ3JhenkgQ3VzdG9taXphdGlvblxuXG5JZiB5b3UgYXJlIG5ldyB0byB0aGlzIGxpYnJhcnksIHlvdSBjYW4gcHJvYmFibHkgc3RvcCByZWFkaW5nIGhlcmUuIEFmdGVyIHRoaXNcbnBvaW50IHRoZXJlIGFyZSBhIGJ1bmNoIG9mIHdheXMgdG8gY3VzdG9taXplIHlvdXIgdGFibGUgZnVydGhlci5cblxuIyMjIEN1c3RvbSBDb2x1bW5zXG5cbkBkb2NzIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG5AZG9jcyBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuXG5cbiMjIyBDdXN0b20gQ29uZmlnXG5cbkBkb2NzIENvbmZpZywgY3VzdG9tQ29uZmlnLCBDdXN0b21pemF0aW9ucywgSHRtbERldGFpbHNcbkBkb2NzIGRlZmF1bHRDdXN0b21pemF0aW9uc1xuXG4jIyMgSW50ZXJtZWRpYXRlIERhdGEgQWNjZXNzXG5cbkBkb2NzIGdldFNvcnRlZERhdGEsIGdldFBhZ2luYXRlZERhdGFcblxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgYXMgQVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcy5BcmlhIGFzIEFyaWFcbmltcG9ydCBIdG1sLkV2ZW50cyBhcyBFXG5pbXBvcnQgSHRtbC5LZXllZCBhcyBLZXllZFxuaW1wb3J0IEh0bWwuTGF6eSBhcyBMYXp5XG5pbXBvcnQgSnNvbi5EZWNvZGVcbmltcG9ydCBNYXRoXG5cblxuXG4tLSBTVEFURVxuXG5cbnstfCBUcmFja3Mgd2hpY2ggY29sdW1uIHRvIHNvcnQgYnksIGluIHdoaWNoIGRpcmVjdGlvbiwgdGhlIHBhZ2Ugc2l6ZSBhbmQgdGhlXG5wb3NpdGlvbiBvZiB0aGUgcm93IGN1cnNvciwgYXMgd2VsbCBhcyB0b3RhbCBudW1iZXIgb2Ygcm93cyBvZiB0aGUgd2hvbGVcbihwb3NzaWJseSByZW1vdGUpIHRhYmxlLiBUaGlzIHR5cGUgaXMgb3BhcXVlLlxuLX1cbnR5cGUgU3RhdGVcbiAgICA9IFN0YXRlXG4gICAgICAgIHsgc29ydENvbHVtbnMgOiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG4gICAgICAgICwgcGFnZVNpemUgOiBJbnRcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA6IFN0cmluZ1xuICAgICAgICAsIHBhZ2luYXRpb24gOiBQYWdpbmF0aW9uU3R5bGVcbiAgICAgICAgLCB0YWJsZUlkIDogU3RyaW5nXG4gICAgICAgIH1cblxuXG57LXwgU2ltcGxlIGJvb2xlYW4gdHlwZSBmb3IgY29sdW1uIHNvcnQgZGlyZWN0aW9uLiBUaGlzIHR5cGUgaXMgbm90IG9wYXF1ZSBhbmRcbm1lYW50IHRvIGJlIHVzZWQgYnkgb3RoZXIgbW9kdWxlcyB3aGVuIGNvbnN0cnVjdGluZyBUYWJsZSBTdGF0ZVxuLX1cbnR5cGUgU29ydERpcmVjdGlvblxuICAgID0gQXNjXG4gICAgfCBEZXNjXG5cblxuc29ydERpcmVjdGlvblRvU3RyaW5nIDogU29ydERpcmVjdGlvbiAtPiBTdHJpbmdcbnNvcnREaXJlY3Rpb25Ub1N0cmluZyBzb3J0RGlyZWN0aW9uID1cbiAgICB3aGVuIHNvcnREaXJlY3Rpb24gaXNcbiAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICBcIkFzY1wiXG5cbiAgICAgICAgRGVzYyAtPlxuICAgICAgICAgICAgXCJEZXNjXCJcblxuXG57LXwgQ3JlYXRlIGFuIGluaXRpYWwgc3RhdGUgZm9yIGEgdGFibGUgd2l0aG91dCBwYWdpbmF0aW9uLiBCeSBwcm92aWRpbmcgYSBjb2x1bW5cbm5hbWUsIHlvdSBkZXRlcm1pbmUgd2hpY2ggY29sdW1uIHNob3VsZCBiZSB1c2VkIGZvciBzb3J0aW5nIGJ5IGRlZmF1bHQuIFRoaXMgaXNcbm1lYW50IHRvIGJlIHVzZWQgZm9yIHNpbXBsZSB0YWJsZXMuIE1vcmVcblNvIGlmXG55b3Ugd2FudCB5b3VyIHRhYmxlIG9mIHlhY2h0cyB0byBiZSBzb3J0ZWQgYnkgbGVuZ3RoIGJ5IGRlZmF1bHQsIHlvdSBtaWdodCBzYXk6XG5cbmltcG9ydCBUYWJsZVxuXG4gICAgVGFibGUuaW5pdGlhbFNvcnQgXCJMZW5ndGhcIlxuXG4tfVxuaW5pdGlhbFNvcnQgOiBTdHJpbmcgLT4gU3RhdGVcbmluaXRpYWxTb3J0IGhlYWRlciA9XG4gICAgU3RhdGVcbiAgICAgICAgeyBzb3J0Q29sdW1ucyA9IFsgeyBzb3J0Q29sdW1uTmFtZSA9IGhlYWRlciwgc29ydERpcmVjdGlvbiA9IEFzYyB9IF1cbiAgICAgICAgLCBwYWdlU2l6ZSA9IDBcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA9IFwiXCJcbiAgICAgICAgLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uXG4gICAgICAgICwgdGFibGVJZCA9IFwic29ydGFibGVUYWJsZVwiXG4gICAgICAgIH1cblxuXG57LXwgQ3JlYXRlIGEgZGVmYXVsdCB0YWJsZSBzdGF0ZS4gT25seSB0aGUgaWQgb2YgdGhlIHRhYmxlIGlzIHN1cHBsaWVkLiBBbGwgb3RoZXIgc3RhdGUgaXMgaW5pdGlhbGlzZWQgd2l0aCBkZWZhdWx0IHZhbHVlcy4gVGhpcyBzdGF0ZSBjYW4gdGhlbiBiZSBzZXQgd2l0aCB1cGRhdGUgZnVuY3Rpb25zLiBTbyBpZiB5b3Ugd2FudGVkIGEgdGFibGUgb2YgY291bnRyaWVzIHRoYXQgaXMgYnkgZGVmYXVsdCBzb3J0ZWQgYnkgcG9wdWxhdGlvbiBjb3VudCBpbiBkZXNjZW5kaW5nIG9yZGVyIHlvdSBtaWdodCB3cml0ZVxuXG5pbXBvcnQgVGFibGVcblxuICAgIFRhYmxlLm5ldyBcIkNvdW50cmllc1wiXG4gICAgICAgIHw+IERhdGFUYWJsZS51cGRhdGVTb3J0U3RhdGUgXCJQb3B1bGF0aW9uXCIgRGF0YVRhYmxlLkRlc2NcblxuLX1cbm5ldyA6IFN0cmluZyAtPiBTdGF0ZVxubmV3IGlkID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gW10sIHBhZ2VTaXplID0gMCwgYWN0aXZlUm93SWQgPSBcIlwiLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uLCB0YWJsZUlkID0gaWQgfVxuXG5cbnstfCBJbnNwZWN0IHRoZSBjdXJyZW50IHRhYmxlIHN0YXRlLiBXaGljaCBjb2x1bW4gaXMgYmVpbmcgc29ydGVkIGJ5LCBhbmRcbndoZXRoZXIgdGhlIHNvcnQgb3JkZXIgaXMgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuIFRoaXMgY291bGQgYmUgdXNlZnVsIGZvclxuc3RvcmluZyB0aGUgc29ydCBzdGF0ZSBpbiBhIFVSTCBvciBzb21ld2hlcmUgZWxzZSBvdXRzaWRlIG9mIEVsbS5cbi19XG5nZXRTb3J0U3RhdGUgOiBTdGF0ZSAtPiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG5nZXRTb3J0U3RhdGUgKFN0YXRlIHsgc29ydENvbHVtbnMgfSkgPVxuICAgIHNvcnRDb2x1bW5zXG5cblxuey18IEluc3BlY3QgdGhlIGN1cnJlbnQgdGFibGUgc3RhdGUuIFdoYXQgaXMgdGhlIGN1cnJlbnQgcGFnZSBzaXplIGZvciB0aGVcbnBhZ2luYXRpb24uIFNob3dpbmcgXCJhbGwgcm93c1wiIHJldHVybnMgMC4gVGhpcyBjb3VsZCBiZSB1c2VmdWwgZm9yIHN0b3JpbmdcbnRoZSBzb3J0IHN0YXRlIGluIGEgVVJMIG9yIHNvbWV3aGVyZSBlbHNlIG91dHNpZGUgb2YgRWxtLlxuLX1cbmdldFBhZ2VTaXplIDogU3RhdGUgLT4gSW50XG5nZXRQYWdlU2l6ZSAoU3RhdGUgeyBwYWdlU2l6ZSB9KSA9XG4gICAgcGFnZVNpemVcblxuXG57LXwgSW5zcGVjdCB0aGUgY3VycmVudCB0YWJsZSBzdGF0ZS4gV2hhdCBpcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcm93XG5jdXJzb3IuIFRvZ2V0aGVyIHdpdGggdGhlIGN1cnJlbnQgcGFnZSBzaXplIHRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0YWJsZSBwYWdlXG5pcyBzaG93bi5cbi19XG5nZXRBY3RpdmVSb3dJZCA6IFN0YXRlIC0+IFN0cmluZ1xuZ2V0QWN0aXZlUm93SWQgKFN0YXRlIHsgYWN0aXZlUm93SWQgfSkgPVxuICAgIGFjdGl2ZVJvd0lkXG5cblxuey18IC19XG51cGRhdGVTb3J0U3RhdGUgOiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlU29ydFN0YXRlIG5ld1NvcnRDb2x1bW4gc29ydERpcmVjdGlvbiAoU3RhdGUgeyBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF0sIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuey18IC19XG51cGRhdGVNdWx0aVNvcnRTdGF0ZSA6IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVNdWx0aVNvcnRTdGF0ZSBuZXdTb3J0Q29sdW1uIHNvcnREaXJlY3Rpb24gKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiwgdGFibGVJZCB9KSA9XG4gICAgbGV0XG4gICAgICAgIG5ld1NvcnRTdGF0ZSA9XG4gICAgICAgICAgICBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF1cbiAgICAgICAgICAgICAgICArKyBBcnJheS5rZWVwSWYgKFxceyBzb3J0Q29sdW1uTmFtZSB9IC0+IHNvcnRDb2x1bW5OYW1lIC89IG5ld1NvcnRDb2x1bW4pIHNvcnRDb2x1bW5zXG4gICAgaW5cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gbmV3U29ydFN0YXRlLCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfVxuXG5cbnstfCAtfVxudXBkYXRlUGFnZVNpemUgOiBJbnQgLT4gU3RhdGUgLT4gU3RhdGVcbnVwZGF0ZVBhZ2VTaXplIG1pbmltdW1OZXdQYWdlU2l6ZSAoU3RhdGUgeyBzb3J0Q29sdW1ucywgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIGxldFxuICAgICAgICBuZXh0SGlnaGVySW5MaXN0IDogSW50IC0+IEFycmF5IEludCAtPiBJbnRcbiAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBpbnB1dCBsaXN0ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgPHwgQXJyYXkua2VlcElmIChcXHggLT4geCA+PSBpbnB1dCkgPHwgQXJyYXkuc29ydCBsaXN0IGlzXG4gICAgICAgICAgICAgICAgSnVzdCB4IC0+XG4gICAgICAgICAgICAgICAgICAgIC5maXJzdCB4XG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcblxuICAgICAgICBuZXdQYWdlU2l6ZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBsaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIG5leHRIaWdoZXJJbkxpc3QgbWluaW11bU5ld1BhZ2VTaXplIGxpc3RcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIGxpc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBtaW5pbXVtTmV3UGFnZVNpemUgbGlzdFxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICBpblxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBuZXdQYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG57LXwgLX1cbnVwZGF0ZUFjdGl2ZVJvd0lkIDogU3RyaW5nIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVBY3RpdmVSb3dJZCBuZXdBY3RpdmVSb3dJZCAoU3RhdGUgeyBzb3J0Q29sdW1ucywgcGFnZVNpemUsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBuZXdBY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG5cbi0tIENPTkZJR1xuXG5cbnstfCBDb25maWd1cmF0aW9uIGZvciB5b3VyIHRhYmxlLCBkZXNjcmliaW5nIHlvdXIgY29sdW1ucy5cblxuKipOb3RlOioqIFlvdXIgYENvbmZpZ2Agc2hvdWxkIF9uZXZlcl8gYmUgaGVsZCBpbiB5b3VyIG1vZGVsLlxuSXQgc2hvdWxkIG9ubHkgYXBwZWFyIGluIGB2aWV3YCBjb2RlLlxuXG4tfVxudHlwZSBDb25maWcgZGF0YSBtc2dcbiAgICA9IENvbmZpZ1xuICAgICAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICAgICAsIHRvTXNnIDogU3RhdGUgLT4gbXNnXG4gICAgICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKVxuICAgICAgICAsIGN1c3RvbWl6YXRpb25zIDogQ3VzdG9taXphdGlvbnMgZGF0YSBtc2dcbiAgICAgICAgfVxuXG5cbnstfCBDcmVhdGUgdGhlIGBDb25maWdgIGZvciB5b3VyIGB2aWV3YCBmdW5jdGlvbi4gRXZlcnl0aGluZyB5b3UgbmVlZCB0b1xucmVuZGVyIHlvdXIgY29sdW1ucyBlZmZpY2llbnRseSBhbmQgaGFuZGxlIHNlbGVjdGlvbiBvZiBjb2x1bW5zLlxuXG5TYXkgd2UgaGF2ZSBhbiBgQXJyYXkgUGVyc29uYCwgd2hlcmUgUGVyc29uIGlzIGEgdHlwZSBhbGlhcyBmb3JcbmB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgb3RoZXI6IEZsb2F0IH1gIHRoYXQgd2Ugd2FudCB0byBzaG93IGFzIGEgdGFibGUuXG5Zb3Ugd2FudCB0byBzaG93IGEgY29sdW1uIGZvciBuYW1lIGFuZCBhZ2UsIGlnbm9yaW5nIHRoZSBvdGhlciB2YWx1ZS4gWW91IHdvdWxkXG50aGVuIGNyZWF0ZSBhIGBDb25maWdgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBEYXRhVGFibGVcblxuICAgIHR5cGUgTXNnID0gTmV3VGFibGVTdGF0ZSBEYXRhVGFibGUuU3RhdGUgfCAuLi5cblxuICAgIGNvbmZpZyA6IERhdGFUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuICAgIGNvbmZpZyA9XG4gICAgICBEYXRhVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBOZXdUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIERhdGFUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgRGF0YVRhYmxlLmludENvbHVtbiBcIkFnZVwiIC5hZ2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5Zb3UgcHJvdmlkZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHlvdXIgdGFibGUgY29uZmlndXJhdGlvbjpcblxuICAtIGB0b0lkYCAmbWRhc2g7IHR1cm5zIGEgYFBlcnNvbmAgaW50byBhIHVuaXF1ZSBJRCBvZiB0eXBlIFN0cmluZy5cbiAgICBUaGlzIGxldHMgdXMgdXNlXG4gICAgW2BIdG1sLktleWVkYF1ba2V5ZWRdIHVuZGVyIHRoZSBob29kIHRvIG1ha2UgcmUtc29ydHMgZmFzdGVyLlxuICAtIGB0b01zZ2AgJm1kYXNoOyB0aGUgbWVzc2FnZSB0aHJvdWdoIHdoaWNoIHRoZSBEYXRhVGFibGUgY2FuIHNlbmRcbiAgICB1cGRhdGVkIGludGVybmFsIHRhYmxlIHN0YXRlcyB0byB5b3VyIGFwcCdzIG1vZGVsLlxuICAtIGBjb2x1bW5zYCAmbWRhc2g7IHNwZWNpZnkgc29tZSBjb2x1bW5zIHRvIHNob3cuXG5cbltrZXllZF06IGh0dHBzOi8vcGFja2FnZXMuZ3Jlbi1sYW5nLm9yZy9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL3ZlcnNpb24vbGF0ZXN0L21vZHVsZS9IdG1sLktleWVkXG5cbi19XG5jb25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMgfSA9XG4gICAgQ29uZmlnXG4gICAgICAgIHsgdG9JZCA9IHRvSWRcbiAgICAgICAgLCB0b01zZyA9IHRvTXNnXG4gICAgICAgICwgY29sdW1ucyA9IEFycmF5Lm1hcCAoXFwoQ29sdW1uIGNEYXRhKSAtPiBjRGF0YSkgY29sdW1uc1xuICAgICAgICAsIGN1c3RvbWl6YXRpb25zID0gZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgSnVzdCBsaWtlIGBjb25maWdgIGJ1dCB5b3UgY2FuIHNwZWNpZnkgYSBidW5jaCBvZiB0YWJsZSBjdXN0b21pemF0aW9ucy5cbi19XG5jdXN0b21Db25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgLCBjdXN0b21pemF0aW9ucyA6IEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY3VzdG9tQ29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMsIGN1c3RvbWl6YXRpb25zIH0gPVxuICAgIENvbmZpZ1xuICAgICAgICB7IHRvSWQgPSB0b0lkXG4gICAgICAgICwgdG9Nc2cgPSB0b01zZ1xuICAgICAgICAsIGNvbHVtbnMgPSBBcnJheS5tYXAgKFxcKENvbHVtbiBjRGF0YSkgLT4gY0RhdGEpIGNvbHVtbnNcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA9IGN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgVGhlcmUgYXJlIHF1aXRlIGEgbG90IG9mIHdheXMgdG8gY3VzdG9taXplIHRoZSBgPHRhYmxlPmAgdGFnLiBZb3UgY2FuIGFkZFxuYSBgPGNhcHRpb24+YCB3aGljaCBjYW4gYmUgc3R5bGVkIHZpYSBDU1MuIFlvdSBjYW4gZG8gY3Jhenkgc3R1ZmYgd2l0aFxuYDx0aGVhZD5gIHRvIGdyb3VwIGNvbHVtbnMgaW4gd2VpcmQgd2F5cy4gWW91IGNhbiBoYXZlIGEgYDx0Zm9vdD5gIHRhZyBmb3JcbnN1bW1hcmllcyBvZiB2YXJpb3VzIGNvbHVtbnMuIEFuZCBtYXliZSB5b3Ugd2FudCB0byBwdXQgYXR0cmlidXRlcyBvbiBgPHRib2R5PmBcbm9yIG9uIHBhcnRpY3VsYXIgcm93cyBpbiB0aGUgYm9keS4gQWxsIHRoZXNlIGN1c3RvbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgdG8geW91LlxuXG4qKk5vdGU6KiogVGhlIGxldmVsIG9mIGNyYXppbmVzcyBwb3NzaWJsZSBpbiBgPHRoZWFkPmAgYW5kIGA8dGZvb3Q+YCBhcmUgc29cbmhpZ2ggdGhhdCBJIGNvdWxkIG5vdCBzZWUgaG93IHRvIHByb3ZpZGUgdGhlIGZ1bGwgZnVuY3Rpb25hbGl0eSBfYW5kXyBtYWtlIGl0XG5pbXBvc3NpYmxlIHRvIGRvIGJhZCBzdHVmZi4gU28ganVzdCBiZSBhd2FyZSBvZiB0aGF0LCBhbmQgc2hhcmUgYW55IHN0b3JpZXNcbnlvdSBoYXZlLiBTdG9yaWVzIG1ha2UgaXQgcG9zc2libGUgdG8gZGVzaWduIGJldHRlciFcblxuLX1cbnR5cGUgYWxpYXMgQ3VzdG9taXphdGlvbnMgZGF0YSBtc2cgPVxuICAgIHsgYmVmb3JlQW5kQWZ0ZXJUYWJsZSA6IHsgYmVmb3JlIDogTWF5YmUgKEh0bWwgbXNnKSwgYWZ0ZXIgOiBNYXliZSAoSHRtbCBtc2cpIH1cbiAgICAsIHRhYmxlQXR0cnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNhcHRpb24gOiBNYXliZSAoSHRtbERldGFpbHMgbXNnKVxuICAgICwgY29sZ3JvdXAgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IE1heWJlIChIdG1sRGV0YWlscyBtc2cpXG4gICAgLCB0aGVhZCA6IEFycmF5IChIZWFkZXJJbmZvIG1zZykgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCB0Ym9keUF0dHJzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCByb3dBdHRycyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIHRmb290IDogTWF5YmUgKEh0bWxEZXRhaWxzIG1zZylcbiAgICB9XG5cblxuey18IFNvbWV0aW1lcyB5b3UgbXVzdCB1c2UgYSBgPHRkPmAgdGFnLCBidXQgdGhlIGF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIGFyZSB1cFxudG8geW91LiBUaGlzIHR5cGUgbGV0cyB5b3Ugc3BlY2lmeSBhbGwgdGhlIGRldGFpbHMgb2YgYW4gSFRNTCBub2RlIGV4Y2VwdCB0aGVcbnRhZyBuYW1lLlxuLX1cbnR5cGUgYWxpYXMgSHRtbERldGFpbHMgbXNnID1cbiAgICB7IGF0dHJpYnV0ZXMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNoaWxkcmVuIDogQXJyYXkgKEh0bWwgbXNnKVxuICAgIH1cblxuXG57LXwgVGhlIGN1c3RvbWl6YXRpb25zIHVzZWQgaW4gYGNvbmZpZ2AgYnkgZGVmYXVsdC5cbi19XG5kZWZhdWx0Q3VzdG9taXphdGlvbnMgOiBDdXN0b21pemF0aW9ucyBkYXRhIG1zZ1xuZGVmYXVsdEN1c3RvbWl6YXRpb25zID1cbiAgICB7IGJlZm9yZUFuZEFmdGVyVGFibGUgPSB7IGJlZm9yZSA9IE5vdGhpbmcsIGFmdGVyID0gTm90aGluZyB9XG4gICAgLCB0YWJsZUF0dHJzID0gWyBBLmNsYXNzIFwiZGF0YVRhYmxlXCIgXVxuICAgICwgY2FwdGlvbiA9IE5vdGhpbmdcbiAgICAsIGNvbGdyb3VwID0gXFxfIC0+IE5vdGhpbmdcbiAgICAsIHRoZWFkID0gZGVmYXVsdFRhYmxlSGVhZGVyXG4gICAgLCB0Ym9keUF0dHJzID0gW11cbiAgICAsIHJvd0F0dHJzID0gc2ltcGxlUm93QXR0cnNcbiAgICAsIHRmb290ID0gTm90aGluZ1xuICAgIH1cblxuXG5kZWZhdWx0VGFibGVIZWFkZXIgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IEh0bWxEZXRhaWxzIG1zZ1xuZGVmYXVsdFRhYmxlSGVhZGVyIGhlYWRlckluZm9zID1cbiAgICBsZXRcbiAgICAgICAgZGVmYXVsdFRIIDogSGVhZGVySW5mbyBtc2cgLT4gSHRtbCBtc2dcbiAgICAgICAgZGVmYXVsdFRIIHsgbmFtZSwgc2VsZWN0ZWQsIHNvcnREaXJlY3Rpb25zLCBjbGlja0FjdGlvbnMgfSA9XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBzb3J0U2VxdWVuY2VOdW1iZXIgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydFJhbmsgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHNvcnRSYW5rID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEh0bWwuc3VwIFsgQS5zdHlsZSBcIm9wYWNpdHlcIiBcIjAuNFwiIF0gWyBIdG1sLnRleHQgPHwgU3RyaW5nLmZyb21JbnQgc29ydFJhbmsgXSBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgY29sdW1uVGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW4gWyBBLmNsYXNzIFwiZHQtY29sdW1uLXRpdGxlXCIgXSBbIEh0bWwudGV4dCBuYW1lIF1cblxuICAgICAgICAgICAgICAgIGNvbHVtbk9yZGVyID1cbiAgICAgICAgICAgICAgICAgICAgaWYgQXJyYXkubGVuZ3RoIHNvcnREaXJlY3Rpb25zID4gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0IFsgeyBjbGFzcyA9IFwiZHQtY29sdW1uLW9yZGVyXCIsIGVuYWJsZWQgPSBUcnVlIH0gXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQXJpYS5sYWJlbCA8fCBcIkNsaWNrIGhlcmUgdG8gc29ydCBieSB0aGlzIGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLmF0dHJpYnV0ZSBcInJvbGVcIiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLnRhYmluZGV4IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFNlcXVlbmNlTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgSHRtbC50ZXh0IFwiXCJcblxuICAgICAgICAgICAgICAgIGNhbkJlU29ydGVkIDogU29ydERpcmVjdGlvbiAtPiBCb29sXG4gICAgICAgICAgICAgICAgY2FuQmVTb3J0ZWQgc29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIEFycmF5Lm1lbWJlciBzb3J0RGlyZWN0aW9uIHNvcnREaXJlY3Rpb25zXG5cbiAgICAgICAgICAgICAgICBpc1NvcnRlZCA6IFNvcnREaXJlY3Rpb24gLT4gQm9vbFxuICAgICAgICAgICAgICAgIGlzU29ydGVkIHZpZXdlZFNvcnREaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkU29ydERpcmVjdGlvbiA9PSBzb3J0RGlyZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxzZVxuXG4gICAgICAgICAgICAgICAgYXJpYVNvcnQgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBBcmlhLnNvcnQgPHwgc29ydERpcmVjdGlvblRvU3RyaW5nIHNvcnREaXJlY3Rpb24gXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW11cblxuICAgICAgICAgICAgICAgIHJvd0FuZENvbFNwYW4gPVxuICAgICAgICAgICAgICAgICAgICBbIEEucm93c3BhbiAxLCBBLmNvbHNwYW4gMSBdXG5cbiAgICAgICAgICAgICAgICB0aENsYXNzZXMgPVxuICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgY2xhc3MgPSBcImR0LW9yZGVyYWJsZS1hc2NcIiwgZW5hYmxlZCA9IGNhbkJlU29ydGVkIEFzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyYWJsZS1kZXNjXCIsIGVuYWJsZWQgPSBjYW5CZVNvcnRlZCBEZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJpbmctYXNjXCIsIGVuYWJsZWQgPSBpc1NvcnRlZCBBc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1kZXNjXCIsIGVuYWJsZWQgPSBpc1NvcnRlZCBEZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJpbmctbm9uZVwiLCBlbmFibGVkID0gbm90IChpc1NvcnRlZCBBc2MpICYmIG5vdCAoaXNTb3J0ZWQgRGVzYykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICB0aEF0dHJpYnV0ZXMgPVxuICAgICAgICAgICAgICAgICAgICBjbGlja0FjdGlvbnMgKysgYXJpYVNvcnQgKysgcm93QW5kQ29sU3BhbiArKyB0aENsYXNzZXNcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBIdG1sLnRoIHRoQXR0cmlidXRlcyBbIEh0bWwuZGl2IFsgQS5jbGFzcyBcImR0LWNvbHVtbi1oZWFkZXJcIiBdIFsgY29sdW1uVGl0bGUsIGNvbHVtbk9yZGVyIF0gXVxuICAgIGluXG4gICAgeyBhdHRyaWJ1dGVzID0gW10sIGNoaWxkcmVuID0gWyBIdG1sLnRyIFtdIDx8IEFycmF5Lm1hcCBkZWZhdWx0VEggaGVhZGVySW5mb3MgXSB9XG5cblxuc2ltcGxlUm93QXR0cnMgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG5zaW1wbGVSb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEgPVxuICAgIGxldFxuICAgICAgICBpc19jdXJyZW50X3JvdyA9XG4gICAgICAgICAgICBpZiB0b0lkIGRhdGEgPT0gZ2V0QWN0aXZlUm93SWQgc3RhdGUgdGhlblxuICAgICAgICAgICAgICAgIFRydWVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIEZhbHNlXG4gICAgaW5cbiAgICBpZiBpc19jdXJyZW50X3JvdyB0aGVuXG4gICAgICAgIFsgQS5zdHlsZSBcImJhY2tncm91bmRcIiBcIiNDRUZBRjhcIiBdXG5cbiAgICBlbHNlXG4gICAgICAgIFsgRS5vbkNsaWNrIDx8IHRvTXNnIDx8IHVwZGF0ZUFjdGl2ZVJvd0lkICh0b0lkIGRhdGEpIHN0YXRlIF1cblxuXG5cbi0tIENPTFVNTlNcblxuXG57LXwgRGVzY3JpYmVzIGhvdyB0byB0dXJuIGBkYXRhYCBpbnRvIGEgY29sdW1uIGluIHlvdXIgdGFibGUuXG4tfVxudHlwZSBDb2x1bW4gZGF0YSBtc2dcbiAgICA9IENvbHVtbiAoQ29sdW1uRGF0YSBkYXRhIG1zZylcblxuXG50eXBlIGFsaWFzIENvbHVtbkRhdGEgZGF0YSBtc2cgPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG5cblxuY29sdW1uRGF0YSBuYW1lIHZpZXdEYXRhIHNvcnRlciA9XG4gICAgeyBuYW1lID0gbmFtZVxuICAgICwgdmlld0RhdGEgPSB2aWV3RGF0YVxuICAgICwgc29ydGVyID0gc29ydGVyXG4gICAgfVxuXG5cbnR5cGUgYWxpYXMgQ29sdW1uSGVhZGVyIGRhdGEgPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG5cblxudG9IZWFkZXIgOiBDb2x1bW5EYXRhIGRhdGEgbXNnIC0+IENvbHVtbkhlYWRlciBkYXRhXG50b0hlYWRlciB7IG5hbWUsIHNvcnRlciB9ID1cbiAgICB7IG5hbWUgPSBuYW1lLCBzb3J0ZXIgPSBzb3J0ZXIgfVxuXG5cbnstfCAtfVxuc3RyaW5nQ29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IFN0cmluZykgLT4gQ29sdW1uIGRhdGEgbXNnXG5zdHJpbmdDb2x1bW4gbmFtZSB0b1N0ciA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IHRvU3RyXG4gICAgICAgICwgc29ydGVyID0gaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvU3RyXG4gICAgICAgIH1cblxuXG57LXwgLX1cbmludENvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBJbnQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuaW50Q29sdW1uIG5hbWUgdG9JbnQgPVxuICAgIENvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0ZXh0RGV0YWlscyA8PCBTdHJpbmcuZnJvbUludCA8PCB0b0ludFxuICAgICAgICAsIHNvcnRlciA9IGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0ludFxuICAgICAgICB9XG5cblxuey18IC19XG5mbG9hdENvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBGbG9hdCkgLT4gQ29sdW1uIGRhdGEgbXNnXG5mbG9hdENvbHVtbiBuYW1lIHRvRmxvYXQgPVxuICAgIENvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0ZXh0RGV0YWlscyA8PCBTdHJpbmcuZnJvbUZsb2F0IDw8IHRvRmxvYXRcbiAgICAgICAgLCBzb3J0ZXIgPSBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9GbG9hdFxuICAgICAgICB9XG5cblxuey18IFlvdSBtYXkgbm90IGZpbmQgdGhlIGhlbHBlciBmdW5jdGlvbnMgZm9yIGBTdHJpbmdgLCBgSW50YCBhbmQgYEZsb2F0YCB0byBiZSBmbGV4aWJsZVxuICAgIGVub3VnaCBmb3IgeW91ciBuZWVkcy4gWW91IG1heSBkZWZpbmUgeW91ciBvd24gY29sdW1uIGNvbmZpZ3VyYXRpb24gd2l0aCB0aGlzIGZ1bmN0aW9uLFxuICAgIGJ5IHByb3ZpZGluZyBvcHRpb25hbGx5IGRpc3RpbmN0IGNvbHVtbiBoZWFkZXIgbmFtZSBhbmQgY29sdW1uIGlkIGZ1bmN0aW9ucywgb3B0aW9uYWxseSBkaXN0aW5jdCBkaXNwbGF5LCBmaWx0ZXIgYW5kIHNvcnQgcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGFuZCBhbiBBcnJheSBvZiBgU29ydERpcmVjdGlvbmBzLlxuXG5cbi19XG5jb2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdG9TdHJpbmcgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgc29ydERpcmVjdGlvbnMgOiBaZXJvT25lT3JUd28gU29ydERpcmVjdGlvblxuICAgIH1cbiAgICAtPiBDb2x1bW4gZGF0YSBtc2dcbmNvbHVtbiB7IG5hbWUsIHRvU3RyaW5nLCBzb3J0RGlyZWN0aW9ucyB9ID1cbiAgICBjdXN0b21Db2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIGlkID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdG9TdHJpbmdcbiAgICAgICAgLCBmaWx0ZXJEYXRhID0gdG9TdHJpbmdcbiAgICAgICAgLCBzb3J0RGF0YSA9IHRvU3RyaW5nXG4gICAgICAgICwgc29ydERpcmVjdGlvbnMgPSBzb3J0RGlyZWN0aW9uc1xuICAgICAgICB9XG5cblxudGV4dERldGFpbHMgOiBTdHJpbmcgLT4gSHRtbERldGFpbHMgbXNnXG50ZXh0RGV0YWlscyBzdHIgPVxuICAgIHsgYXR0cmlidXRlcyA9IFtdLCBjaGlsZHJlbiA9IFsgSHRtbC50ZXh0IHN0ciBdIH1cblxuXG50eXBlIFplcm9PbmVPclR3byBhXG4gICAgPSBaZXJvXG4gICAgfCBPbmUgYVxuICAgIHwgVHdvIGFcblxuXG5nZXRTb3J0ZXIgOiBaZXJvT25lT3JUd28gU29ydERpcmVjdGlvbiAtPiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZ2V0U29ydGVyIHNvcnREaXJlY3Rpb25zIHRvQ29tcGFyYWJsZSA9XG4gICAgd2hlbiBzb3J0RGlyZWN0aW9ucyBpc1xuICAgICAgICBUd28gQXNjIC0+XG4gICAgICAgICAgICBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgVHdvIERlc2MgLT5cbiAgICAgICAgICAgIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBPbmUgQXNjIC0+XG4gICAgICAgICAgICBpbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgT25lIERlc2MgLT5cbiAgICAgICAgICAgIGRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBaZXJvIC0+XG4gICAgICAgICAgICB1bnNvcnRhYmxlXG5cblxuey18IFBlcmhhcHMgdGhlIGJhc2ljIGNvbHVtbnMgYXJlIG5vdCBxdWl0ZSB3aGF0IHlvdSB3YW50LiBNYXliZSB5b3Ugd2FudCB0b1xuZGlzcGxheSBtb25ldGFyeSB2YWx1ZXMgaW4gdGhvdXNhbmRzIG9mIGRvbGxhcnMsIGFuZCBgZmxvYXRDb2x1bW5gIGRvZXMgbm90XG5xdWl0ZSBjdXQgaXQuIFlvdSBjb3VsZCBkZWZpbmUgYSBjdXN0b20gY29sdW1uIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBUYWJsZVxuXG4gICAgZG9sbGFyQ29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEZsb2F0KSAtPiBDb2x1bW4gZGF0YSBtc2dcbiAgICBkb2xsYXJDb2x1bW4gbmFtZSB0b0RvbGxhcnMgPVxuICAgICAgICBUYWJsZS5jdXN0b21Db2x1bW5cbiAgICAgICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICwgdmlld0RhdGEgPSBcXGRhdGEgLT4gdmlld0RvbGxhcnMgKHRvRG9sbGFycyBkYXRhKVxuICAgICAgICAgICAgLCBzb3J0ZXIgPSBUYWJsZS5kZWNyZWFzaW5nQnkgdG9Eb2xsYXJzXG4gICAgICAgICAgICB9XG5cbiAgICB2aWV3RG9sbGFycyA6IEZsb2F0IC0+IFN0cmluZ1xuICAgIHZpZXdEb2xsYXJzIGRvbGxhcnMgPVxuICAgICAgICBcIiRcIiArKyBTdHJpbmcuZnJvbUludCAocm91bmQgKGRvbGxhcnMgLyAxMDAwKSkgKysgXCJrXCJcblxuVGhlIGB2aWV3RGF0YWAgZmllbGQgbWVhbnMgd2Ugd2lsbCBkaXNwbGF5cyB0aGUgbnVtYmVyIGAxMjM0NS42N2AgYXMgYCQxMmtgLlxuXG5UaGUgYHNvcnRlcmAgZmllbGQgc3BlY2lmaWVzIGhvdyB0aGUgY29sdW1uIGNhbiBiZSBzb3J0ZWQuIEluIGBkb2xsYXJDb2x1bW5gIHdlXG5hcmUgc2F5aW5nIHRoYXQgaXQgY2FuIF9vbmx5XyBiZSBzaG93biBmcm9tIGhpZ2hlc3QtdG8tbG93ZXN0IG1vbmV0YXJ5IHZhbHVlLlxuTW9yZSBhYm91dCBzb3J0ZXJzIHNvb24hXG5cbi19XG5jdXN0b21Db2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgaWQgOiBTdHJpbmdcbiAgICAsIHZpZXdEYXRhIDogZGF0YSAtPiBTdHJpbmdcbiAgICAsIGZpbHRlckRhdGEgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgc29ydERhdGEgOiBkYXRhIC0+IGNvbXBhcmFibGVcbiAgICAsIHNvcnREaXJlY3Rpb25zIDogWmVyb09uZU9yVHdvIFNvcnREaXJlY3Rpb25cbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG5jdXN0b21Db2x1bW4geyBuYW1lLCBpZCwgdmlld0RhdGEsIGZpbHRlckRhdGEsIHNvcnREYXRhLCBzb3J0RGlyZWN0aW9ucyB9ID1cbiAgICBDb2x1bW4gPHxcbiAgICAgICAgY29sdW1uRGF0YSBuYW1lICh0ZXh0RGV0YWlscyA8PCB2aWV3RGF0YSkgPHxcbiAgICAgICAgICAgIGdldFNvcnRlciBzb3J0RGlyZWN0aW9ucyBzb3J0RGF0YVxuXG5cbnstfCBJdCBpcyBfcG9zc2libGVfIHRoYXQgeW91IHdhbnQgc29tZXRoaW5nIGNyYXppZXIgdGhhbiBgY3VzdG9tQ29sdW1uYC4gSW5cbnRoYXQgdW5saWtlbHkgc2NlbmFyaW8sIHRoaXMgZnVuY3Rpb24gbGV0cyB5b3UgaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGVcbmF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIG9mIGVhY2ggYDx0ZD5gIGNlbGwgaW4gdGhpcyBjb2x1bW4uXG5cblNvIG1heWJlIHlvdSB3YW50IHRvIGEgZG9sbGFycyBjb2x1bW4sIGFuZCB0aGUgZG9sbGFyIHNpZ25zIHNob3VsZCBiZSBncmVlbi5cblxuICAgIGltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwsIHNwYW4sIHRleHQpXG4gICAgaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoc3R5bGUpXG4gICAgaW1wb3J0IFRhYmxlXG5cbiAgICBkb2xsYXJDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuICAgIGRvbGxhckNvbHVtbiBuYW1lIHRvRG9sbGFycyA9XG4gICAgICAgIFRhYmxlLnZlcnlDdXN0b21Db2x1bW5cbiAgICAgICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICwgdmlld0RhdGEgPSBcXGRhdGEgLT4gdmlld0RvbGxhcnMgKHRvRG9sbGFycyBkYXRhKVxuICAgICAgICAgICAgLCBzb3J0ZXIgPSBUYWJsZS5kZWNyZWFzaW5nQnkgdG9Eb2xsYXJzXG4gICAgICAgICAgICB9XG5cbiAgICB2aWV3RG9sbGFycyA6IEZsb2F0IC0+IFRhYmxlLkh0bWxEZXRhaWxzIG1zZ1xuICAgIHZpZXdEb2xsYXJzIGRvbGxhcnMgPVxuICAgICAgICBUYWJsZS5IdG1sRGV0YWlscyBbXVxuICAgICAgICAgICAgWyBzcGFuIFsgc3R5bGUgXCJjb2xvclwiIFwiZ3JlZW5cIiBdIFsgdGV4dCBcIiRcIiBdXG4gICAgICAgICAgICAsIHRleHQgKFN0cmluZy5mcm9tSW50IChyb3VuZCAoZG9sbGFycyAvIDEwMDApKSArKyBcImtcIilcbiAgICAgICAgICAgIF1cblxuLX1cbnZlcnlDdXN0b21Db2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG52ZXJ5Q3VzdG9tQ29sdW1uID1cbiAgICBDb2x1bW5cblxuXG5cbi0tIFZJRVdcblxuXG57LXwgVGFrZSBhbiBhcnJheSBvZiBkYXRhIGFuZCB0dXJuIGl0IGludG8gYSB0YWJsZS4gVGhlIGBDb25maWdgIGFyZ3VtZW50IGlzIHRoZVxuY29uZmlndXJhdGlvbiBmb3IgdGhlIHRhYmxlLiBJdCBkZXNjcmliZXMgdGhlIGNvbHVtbnMgdGhhdCB3ZSB3YW50IHRvIHNob3cuIFRoZVxuYFN0YXRlYCBhcmd1bWVudCBjb250YWlucyB0aGUgY3VycmVudCBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgdGFibGUsIGluY2x1ZGluZyB3aGljaFxuY29sdW1uKHMpIHRoZSByb3dzIGFyZSBzb3J0ZWQgYnkgYXQgdGhlIG1vbWVudCwgb3Igd2hpY2ggcm93IGlzIGN1cnJlbnRseSBhY3RpdmUuXG5UaGUgYGRhdGFgIHR5cGUgd2lsbCB1c3VhbGx5IGJlIGEgcmVjb3JkLCBidXQgYW55IHZhbHVlIGlzIHBvc3NpYmxlLlxuXG4qKk5vdGU6KiogVGhlIGBTdGF0ZWAgYW5kIGBBcnJheSBkYXRhYCBzaG91bGQgbGl2ZSBpbiB5b3VyIGBNb2RlbGAuIFRoZSBgQ29uZmlnYFxuZm9yIHRoZSB0YWJsZSBiZWxvbmdzIChoYXJkLWNvZGVkKSBpbiB5b3VyIGB2aWV3YCBjb2RlLCBhcyBpdCBpcyBqdXN0IGEgY29sbGVjdGlvblxub2YgY3VzdG9taXphYmxlIHZpZXcgYW5kIGhlbHBlciBmdW5jdGlvbnMgYW5kIGl0IGlzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIG5vdCB0b1xucHV0IGFueSBmdW5jdGlvbnMgaW4geW91ciBtb2RlbC5cblxuLX1cbnZpZXcgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBIdG1sIG1zZ1xudmlldyAoKENvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zLCBjdXN0b21pemF0aW9ucyB9KSBhcyBjb25mKSBzdGF0ZSBkYXRhID1cbiAgICBsZXRcbiAgICAgICAgcm93cyA9XG4gICAgICAgICAgICBnZXRQYWdpbmF0ZWREYXRhIGNvbmYgc3RhdGUgPHwgZ2V0U29ydGVkRGF0YSBjb25mIHN0YXRlIGRhdGFcblxuICAgICAgICBoZWFkZXJzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcCB0b0hlYWRlciBjb2x1bW5zXG5cbiAgICAgICAgdGhlYWREZXRhaWxzID1cbiAgICAgICAgICAgIGN1c3RvbWl6YXRpb25zLnRoZWFkIDx8IEFycmF5Lm1hcCAodG9IZWFkZXJJbmZvIHN0YXRlIHRvTXNnKSBoZWFkZXJzXG5cbiAgICAgICAgdGhlYWQgPVxuICAgICAgICAgICAgSHRtbC50aGVhZCB0aGVhZERldGFpbHMuYXR0cmlidXRlcyB0aGVhZERldGFpbHMuY2hpbGRyZW5cblxuICAgICAgICB0Ym9keSA9XG4gICAgICAgICAgICBLZXllZC5ub2RlIFwidGJvZHlcIiBjdXN0b21pemF0aW9ucy50Ym9keUF0dHJzIDx8XG4gICAgICAgICAgICAgICAgQXJyYXkubWFwICh2aWV3Um93IHRvSWQgdG9Nc2cgY29sdW1ucyBjdXN0b21pemF0aW9ucy5yb3dBdHRycyBzdGF0ZSkgcm93c1xuXG4gICAgICAgIHdpdGhGb290ID1cbiAgICAgICAgICAgIHdoZW4gY3VzdG9taXphdGlvbnMudGZvb3QgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIFsgdGJvZHkgXVxuXG4gICAgICAgICAgICAgICAgSnVzdCB7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgWyBIdG1sLnRmb290IGF0dHJpYnV0ZXMgY2hpbGRyZW4sIHRib2R5IF1cbiAgICBpblxuICAgIEh0bWwudGFibGUgY3VzdG9taXphdGlvbnMudGFibGVBdHRycyA8fFxuICAgICAgICAod2hlbiBjdXN0b21pemF0aW9ucy5jYXB0aW9uIGlzXG4gICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgWyB0aGVhZCBdICsrIHdpdGhGb290XG5cbiAgICAgICAgICAgIEp1c3QgeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9IC0+XG4gICAgICAgICAgICAgICAgWyBIdG1sLmNhcHRpb24gYXR0cmlidXRlcyBjaGlsZHJlbiBdICsrIFsgdGhlYWQgXSArKyB3aXRoRm9vdFxuICAgICAgICApXG5cblxudHlwZSBhbGlhcyBIZWFkZXJJbmZvIG1zZyA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCBzZWxlY3RlZCA6IE1heWJlIHsgc29ydFJhbmsgOiBJbnQsIHNvcnREaXJlY3Rpb24gOiBTb3J0RGlyZWN0aW9uIH1cbiAgICAsIHNvcnREaXJlY3Rpb25zIDogQXJyYXkgU29ydERpcmVjdGlvblxuICAgICwgY2xpY2tBY3Rpb25zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgfVxuXG5cbmhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBzb3J0RGlyZWN0aW9ucyBjbGlja0FjdGlvbnMgPVxuICAgIHsgbmFtZSA9IG5hbWVcbiAgICAsIHNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAsIHNvcnREaXJlY3Rpb25zID0gc29ydERpcmVjdGlvbnNcbiAgICAsIGNsaWNrQWN0aW9ucyA9IGNsaWNrQWN0aW9uc1xuICAgIH1cblxuXG50b0hlYWRlckluZm8gOiBTdGF0ZSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBDb2x1bW5IZWFkZXIgZGF0YSAtPiBIZWFkZXJJbmZvIG1zZ1xudG9IZWFkZXJJbmZvICgoU3RhdGUgeyBzb3J0Q29sdW1ucyB9KSBhcyBzdGF0ZSkgdG9Nc2cgeyBuYW1lLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIHJldmVyc2UgYSA9XG4gICAgICAgICAgICB3aGVuIGEgaXNcbiAgICAgICAgICAgICAgICBEZXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIEFzY1xuXG4gICAgICAgICAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICB3aGVuIHNvcnRDb2x1bW5zIGlzXG4gICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgbm9uRW1wdHlMaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlZExpc3QgOiBBcnJheSB7IGxlZnQgOiBJbnQsIHJpZ2h0IDogeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVkTGlzdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaW5kZXhlZE1hcCAoXFxpZHggdmFsIC0+IHsgbGVmdCA9IGlkeCwgcmlnaHQgPSB2YWwgfSkgPHwgQXJyYXkucmV2ZXJzZSBub25FbXB0eUxpc3RcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5rZWVwSWYgKFxceyByaWdodCA9IHsgc29ydENvbHVtbk5hbWUgfSB9IC0+IG5hbWUgPT0gc29ydENvbHVtbk5hbWUpIGluZGV4ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIGluXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gQXJyYXkudGFrZUZpcnN0IDEgZmlsdGVyZWRMaXN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgbGVmdCA9IGluZGV4LCByaWdodCA9IHsgc29ydERpcmVjdGlvbiB9IH0gXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIHNvcnRSYW5rID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIEFycmF5Lmxlbmd0aCBpbmRleGVkTGlzdCA9PSAxIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIHJldmVyc2VkU29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgSnVzdCB7IHNvcnREaXJlY3Rpb24gfSAtPlxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlIHNvcnREaXJlY3Rpb25cblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIERlY09ySW5jIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2NcbiAgICBpblxuICAgIHdoZW4gc29ydGVyIGlzXG4gICAgICAgIE5vbmUgLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBOb3RoaW5nIFtdIFtdXG5cbiAgICAgICAgUm93TnVtYmVyIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgTm90aGluZyBbXSBbXVxuXG4gICAgICAgIEluY3JlYXNpbmcgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgQXNjIF0gPHwgb25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSBBc2MgdG9Nc2dcblxuICAgICAgICBEZWNyZWFzaW5nIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIERlc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIERlc2MgdG9Nc2dcblxuICAgICAgICBJbmNPckRlYyBfIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgWyBBc2MsIERlc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIHJldmVyc2VkU29ydERpcmVjdGlvbiB0b01zZ1xuXG4gICAgICAgIERlY09ySW5jIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIERlc2MsIEFzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uIHRvTXNnXG5cblxub25Db2x1bW5IZWFkZXIgOiBTdGF0ZSAtPiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiAoU3RhdGUgLT4gbXNnKSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbm9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgc29ydERpcmVjdGlvbiB0b01zZyA9XG4gICAgWyBFLm9uQ2xpY2sgPHxcbiAgICAgICAgdG9Nc2cgPHxcbiAgICAgICAgICAgIHVwZGF0ZVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICAsIEUub25Nb3VzZVVwIDx8XG4gICAgICAgIHRvTXNnIDx8XG4gICAgICAgICAgICB1cGRhdGVNdWx0aVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICAsIEEudGl0bGUgPHxcbiAgICAgICAgXCJDbGljayB0byBzb3J0IGJ5IHRoaXMgY29sdW1uLlxcblwiXG4gICAgICAgICAgICArKyBcIkNsaWNrIGVsc2V3aGVyZSBhbmQgcmVsZWFzZSBoZXJlXFxuXCJcbiAgICAgICAgICAgICsrIFwidG8gYWRkIHRoaXMgY29sdW1uIHRvIHRoZSBzb3J0IG9yZGVyLlwiXG4gICAgXVxuXG5cbnZpZXdSb3cgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiAoKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSkgLT4gU3RhdGUgLT4gZGF0YSAtPiB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH1cbnZpZXdSb3cgdG9JZCB0b01zZyBjb2x1bW5zIHRvUm93QXR0cnMgc3RhdGUgZGF0YSA9XG4gICAgeyBrZXkgPSB0b0lkIGRhdGFcbiAgICAsIG5vZGUgPSB2aWV3Um93SGVscCBjb2x1bW5zIHRvUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhXG4gICAgfVxuXG5cbnZpZXdSb3dIZWxwIDogQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+ICgoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpKSAtPiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gSHRtbCBtc2dcbnZpZXdSb3dIZWxwIGNvbHVtbnMgdG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEgPVxuICAgIEh0bWwudHIgKHRvUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhKSA8fFxuICAgICAgICBBcnJheS5tYXAgKHZpZXdDZWxsIGRhdGEpIGNvbHVtbnNcblxuXG52aWV3Q2VsbCA6IGRhdGEgLT4gQ29sdW1uRGF0YSBkYXRhIG1zZyAtPiBIdG1sIG1zZ1xudmlld0NlbGwgZGF0YSB7IHZpZXdEYXRhLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIGRldGFpbHMgPVxuICAgICAgICAgICAgdmlld0RhdGEgZGF0YVxuICAgIGluXG4gICAgSHRtbC50ZCBkZXRhaWxzLmF0dHJpYnV0ZXMgZGV0YWlscy5jaGlsZHJlblxuXG5cblxuLS0gU09SVElOR1xuXG5cbnNvcnQgOiBTdGF0ZSAtPiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5zb3J0IChTdGF0ZSB7IHNvcnRDb2x1bW5zLCBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgY0RhdGEgZGF0YSA9XG4gICAgd2hlbiBBcnJheS5wb3BGaXJzdCBzb3J0Q29sdW1ucyBpc1xuICAgICAgICBKdXN0IHsgZmlyc3QgPSB7IHNvcnRDb2x1bW5OYW1lLCBzb3J0RGlyZWN0aW9uIH0sIHJlc3QgPSByZXN0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gZmluZFNvcnRlciBzb3J0Q29sdW1uTmFtZSBjRGF0YSBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgICAgICAgICAgSnVzdCBzb3J0ZXIgLT5cbiAgICAgICAgICAgICAgICAgICAgc29ydCAoU3RhdGUgeyBzb3J0Q29sdW1ucyA9IHJlc3QsIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9KSBjRGF0YSA8fCBhcHBseVNvcnRlciBzb3J0RGlyZWN0aW9uIHNvcnRlciBkYXRhXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGF0YVxuXG5cbmFwcGx5U29ydGVyIDogU29ydERpcmVjdGlvbiAtPiBTb3J0ZXIgZGF0YSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbmFwcGx5U29ydGVyIHNvcnREaXJlY3Rpb24gc29ydGVyIGRhdGEgPVxuICAgIHdoZW4gc29ydGVyIGlzXG4gICAgICAgIE5vbmUgLT5cbiAgICAgICAgICAgIGRhdGFcblxuICAgICAgICBSb3dOdW1iZXIgLT5cbiAgICAgICAgICAgIGRhdGFcblxuICAgICAgICBJbmNyZWFzaW5nIHNydCAtPlxuICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICBEZWNyZWFzaW5nIHNydCAtPlxuICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cbiAgICAgICAgSW5jT3JEZWMgc3J0IC0+XG4gICAgICAgICAgICBpZiBzb3J0RGlyZWN0aW9uID09IERlc2MgdGhlblxuICAgICAgICAgICAgICAgIEFycmF5LnJldmVyc2UgKHNydCBkYXRhKVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICBEZWNPckluYyBzcnQgLT5cbiAgICAgICAgICAgIGlmIHNvcnREaXJlY3Rpb24gPT0gRGVzYyB0aGVuXG4gICAgICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIEFycmF5LnJldmVyc2UgKHNydCBkYXRhKVxuXG5cbmZpbmRTb3J0ZXIgOiBTdHJpbmcgLT4gQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+IE1heWJlIChTb3J0ZXIgZGF0YSlcbmZpbmRTb3J0ZXIgc2VsZWN0ZWRDb2x1bW4gY0RhdGEgPVxuICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgY0RhdGEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgeyBmaXJzdCA9IHsgbmFtZSwgc29ydGVyIH0sIHJlc3QgfSAtPlxuICAgICAgICAgICAgaWYgbmFtZSA9PSBzZWxlY3RlZENvbHVtbiB0aGVuXG4gICAgICAgICAgICAgICAgSnVzdCBzb3J0ZXJcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZpbmRTb3J0ZXIgc2VsZWN0ZWRDb2x1bW4gcmVzdFxuXG5cbnstfCBSZXR1cm4gdGhlIGRhdGEgc29ydGVkIGV4YWN0bHkgYXMgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cbi19XG5nZXRTb3J0ZWREYXRhIDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuZ2V0U29ydGVkRGF0YSAoQ29uZmlnIHsgY29sdW1ucyB9KSBzdGF0ZSBkYXRhID1cbiAgICBzb3J0IHN0YXRlIGNvbHVtbnMgZGF0YVxuXG5cblxuLS0gU09SVEVSU1xuXG5cbnstfCBTcGVjaWZpZXMgYSBwYXJ0aWN1bGFyIHdheSBvZiBzb3J0aW5nIGRhdGEuXG4tfVxudHlwZSBTb3J0ZXIgZGF0YVxuICAgID0gTm9uZVxuICAgIHwgUm93TnVtYmVyXG4gICAgfCBJbmNyZWFzaW5nIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBEZWNyZWFzaW5nIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBJbmNPckRlYyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuICAgIHwgRGVjT3JJbmMgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcblxuXG57LXwgQSBzb3J0ZXIgZm9yIGNvbHVtbnMgdGhhdCBhcmUgdW5zb3J0YWJsZS4gTWF5YmUgeW91IGhhdmUgYSBjb2x1bW4gaW4geW91clxudGFibGUgZm9yIGRlbGV0ZSBidXR0b25zIHRoYXQgZGVsZXRlIHRoZSByb3cuIEl0IHdvdWxkIG5vdCBtYWtlIGFueSBzZW5zZSB0b1xuc29ydCBiYXNlZCBvbiB0aGF0IGNvbHVtbi5cbi19XG51bnNvcnRhYmxlIDogU29ydGVyIGRhdGFcbnVuc29ydGFibGUgPVxuICAgIE5vbmVcblxuXG57LXwgQ3JlYXRlIGEgc29ydGVyIHRoYXQgY2FuIG9ubHkgZGlzcGxheSB0aGUgZGF0YSBpbiBpbmNyZWFzaW5nIG9yZGVyLiBJZiB3ZVxud2FudCBhIHRhYmxlIG9mIHBlb3BsZSwgc29ydGVkIGFscGhhYmV0aWNhbGx5IGJ5IG5hbWUsIHdlIHdvdWxkIHNheSB0aGlzOlxuXG4gICAgc29ydGVyIDogU29ydGVyIHsgYSB8IG5hbWUgOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBpbmNyZWFzaW5nQnkgLm5hbWVcblxuLX1cbmluY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5pbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBJbmNyZWFzaW5nIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnstfCBDcmVhdGUgYSBzb3J0ZXIgdGhhdCBjYW4gb25seSBkaXNwbGF5IHRoZSBkYXRhIGluIGRlY3JlYXNpbmcgb3JkZXIuIElmIHdlXG53YW50IGEgdGFibGUgb2YgY291bnRyaWVzLCBzb3J0ZWQgYnkgcG9wdWxhdGlvbiBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0LCB3ZVxud291bGQgc2F5IHRoaXM6XG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgcG9wdWxhdGlvbiA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGRlY3JlYXNpbmdCeSAucG9wdWxhdGlvblxuXG4tfVxuZGVjcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIERlY3JlYXNpbmcgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IFNvbWV0aW1lcyB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHNvcnQgZGF0YSBpbiBpbmNyZWFzaW5nIF9vcl8gZGVjcmVhc2luZ1xub3JkZXIuIE1heWJlIHlvdSBoYXZlIGEgYnVuY2ggb2YgZGF0YSBhYm91dCBvcmFuZ2UganVpY2UsIGFuZCB5b3Ugd2FudCB0byBrbm93XG5ib3RoIHdoaWNoIGhhcyB0aGUgbW9zdCBzdWdhciwgYW5kIHdoaWNoIGhhcyB0aGUgbGVhc3Qgc3VnYXIuIEJvdGggaW50ZXJlc3RpbmchXG5UaGlzIGZ1bmN0aW9uIGxldHMgeW91IHNlZSBib3RoLCBzdGFydGluZyB3aXRoIGRlY3JlYXNpbmcgb3JkZXIuXG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgc3VnYXIgOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBkZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgLnN1Z2FyXG5cbi19XG5kZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgRGVjT3JJbmMgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IFNvbWV0aW1lcyB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHNvcnQgZGF0YSBpbiBpbmNyZWFzaW5nIF9vcl8gZGVjcmVhc2luZ1xub3JkZXIuIE1heWJlIHlvdSBoYXZlIHJhY2UgdGltZXMgZm9yIHRoZSAxMDAgbWV0ZXIgc3ByaW50LiBUaGlzIGZ1bmN0aW9uIGxldHNcbnNvcnQgYnkgYmVzdCB0aW1lIGJ5IGRlZmF1bHQsIGJ1dCBhbHNvIHNlZSB0aGUgb3RoZXIgb3JkZXIuXG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgdGltZSA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSAudGltZVxuXG4tfVxuaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIEluY09yRGVjIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnR5cGUgUGFnaW5hdGlvblN0eWxlXG4gICAgPSBOb1BhZ2luYXRpb25cbiAgICB8IFBhZ2VyIChBcnJheSBJbnQpXG4gICAgfCBTY3JvbGxlciAoQXJyYXkgSW50KVxuXG5cbnstfCAtfVxuc2V0Tm9QYWdpbmF0aW9uIDogU3RhdGUgLT4gU3RhdGVcbnNldE5vUGFnaW5hdGlvbiBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlIHsgY3VycmVudFN0YXRlIHwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvbiB9XG5cblxuey18IC19XG5zZXRTaW1wbGVQYWdpbmF0aW9uIDogU3RhdGUgLT4gU3RhdGVcbnNldFNpbXBsZVBhZ2luYXRpb24gc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZSB7IGN1cnJlbnRTdGF0ZSB8IHBhZ2luYXRpb24gPSBQYWdlciBbIDEwLCAyNSwgNTAsIDEwMCBdIH1cblxuXG57LXwgLX1cbnNldFBhZ2luYXRpb25XaXRoIDogSW50IC0+IEFycmF5IEludCAtPiBTdGF0ZSAtPiBTdGF0ZVxuc2V0UGFnaW5hdGlvbldpdGggZGVmYXVsdFBhZ2VTaXplIG90aGVyUGFnZVNpemVzIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGVcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICB8IHBhZ2luYXRpb24gPSBQYWdlciA8fCBBcnJheS5zb3J0IDx8IFsgZGVmYXVsdFBhZ2VTaXplIF0gKysgb3RoZXJQYWdlU2l6ZXNcbiAgICAgICAgICAgICAgICAgICAgLCBwYWdlU2l6ZSA9IGRlZmF1bHRQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIH1cblxuXG57LXwgLX1cbnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIDogSW50IC0+IEFycmF5IEludCAtPiBTdGF0ZSAtPiBTdGF0ZVxuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGggZGVmYXVsdFBhZ2VTaXplIG90aGVyUGFnZVNpemVzIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGVcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICB8IHBhZ2luYXRpb24gPSBTY3JvbGxlciA8fCBBcnJheS5zb3J0IDx8IFsgZGVmYXVsdFBhZ2VTaXplIF0gKysgb3RoZXJQYWdlU2l6ZXNcbiAgICAgICAgICAgICAgICAgICAgLCBwYWdlU2l6ZSA9IGRlZmF1bHRQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIH1cblxuXG57LXwgLX1cbmdldFBhZ2luYXRlZERhdGEgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5nZXRQYWdpbmF0ZWREYXRhIChDb25maWcgeyB0b0lkIH0pIChTdGF0ZSB7IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiB9KSBkYXRhID1cbiAgICBsZXRcbiAgICAgICAgcm93Q3Vyc29yID1cbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB8PiBBcnJheS5maW5kRmlyc3QgKFxcdiAtPiB0b0lkIHYgPT0gYWN0aXZlUm93SWQpXG4gICAgICAgICAgICAgICAgfD4gTWF5YmUubWFwIC5pbmRleFxuICAgICAgICAgICAgICAgIHw+IE1heWJlLm1hcCAoXFxpIC0+IGkgKyAxKVxuICAgICAgICAgICAgICAgIHw+IE1heWJlLndpdGhEZWZhdWx0IDBcblxuICAgICAgICBwcmVjZWRpbmdGdWxsUGFnZXMgPVxuICAgICAgICAgICAgKHJvd0N1cnNvciAtIDEpIC8vIHBhZ2VTaXplXG5cbiAgICAgICAgbGFzdFJvd09uUGFnZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcGFnZVNpemUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tIHBhZ2Ugc2l6ZSAwIG1lYW5zIHNob3cgYWxsIHJvd3Mgd2FzIGNob3NlbiBmcm9tIHBhZ2Ugc2l6ZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAwIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcmVjZWRpbmdGdWxsUGFnZXMgKyAxKSAqIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICBTY3JvbGxlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIHBhZ2VTaXplID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGFcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbXBhcmUgcm93Q3Vyc29yIChwYWdlU2l6ZSAvLyAyKSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciArIHBhZ2VTaXplIC8vIDJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgIGxhc3RSb3dCZWZvcmVQYWdlID1cbiAgICAgICAgICAgIHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgICAgIFBhZ2VyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgcHJlY2VkaW5nRnVsbFBhZ2VzICogcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgcGFnZVNpemUgPT0gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgLSAyXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBjb21wYXJlIHJvd0N1cnNvciA8fCBBcnJheS5sZW5ndGggZGF0YSAtIHBhZ2VTaXplIC8vIDIgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YSAtIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGlzRXZlbiBwYWdlU2l6ZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgLSBwYWdlU2l6ZSAvLyAyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yIC0gcGFnZVNpemUgLy8gMiAtIDFcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgaW5cbiAgICBkYXRhXG4gICAgICAgIHw+IEFycmF5LnRha2VGaXJzdCAobmVnYXRpdmVUb1plcm8gbGFzdFJvd09uUGFnZSlcbiAgICAgICAgfD4gQXJyYXkuZHJvcEZpcnN0IChuZWdhdGl2ZVRvWmVybyBsYXN0Um93QmVmb3JlUGFnZSlcblxuXG57LXwgLX1cbnBhZ2VMZW5ndGhDaG9vc2VyIDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEh0bWwgbXNnXG5wYWdlTGVuZ3RoQ2hvb3NlciAoQ29uZmlnIHsgdG9Nc2cgfSkgKChTdGF0ZSB7IHBhZ2luYXRpb24gfSkgYXMgdGFibGVTdGF0ZSkgPVxuICAgIGxldFxuICAgICAgICBvblBhZ2VTaXplQ2hvaWNlIDogU3RhdGUgLT4gSHRtbC5BdHRyaWJ1dGUgbXNnXG4gICAgICAgIG9uUGFnZVNpemVDaG9pY2Ugc3RhdGUgPVxuICAgICAgICAgICAgRS5vbiBcImNoYW5nZVwiIDx8XG4gICAgICAgICAgICAgICAgSnNvbi5EZWNvZGUubWFwIChcXG5ld1BhZ2VTaXplIC0+IHRvTXNnIDx8IHVwZGF0ZVBhZ2VTaXplIG5ld1BhZ2VTaXplIHN0YXRlKSA8fFxuICAgICAgICAgICAgICAgICAgICBKc29uLkRlY29kZS5tYXAgKE1heWJlLndpdGhEZWZhdWx0IDAgPDwgU3RyaW5nLnRvSW50KSA8fFxuICAgICAgICAgICAgICAgICAgICAgICAgRS50YXJnZXRWYWx1ZVxuXG4gICAgICAgIHZpZXdPcHRpb24gdmFsdWVzID1cbiAgICAgICAgICAgIEFycmF5LmZvbGRyXG4gICAgICAgICAgICAgICAgKFxcdmFsIGh0bWwgLT5cbiAgICAgICAgICAgICAgICAgICAgWyBIdG1sLm9wdGlvbiBbIEEudmFsdWUgdmFsLCBBLnNlbGVjdGVkIDx8IChTdHJpbmcuZnJvbUludCA8fCBnZXRQYWdlU2l6ZSB0YWJsZVN0YXRlKSA9PSB2YWwgXSBbIEh0bWwudGV4dCB2YWwgXVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICArKyBodG1sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICA8fFxuICAgICAgICAgICAgICAgIEFycmF5Lm1hcCBTdHJpbmcuZnJvbUludCB2YWx1ZXNcbiAgICBpblxuICAgIEh0bWwuc2VsZWN0IFsgb25QYWdlU2l6ZUNob2ljZSB0YWJsZVN0YXRlIF0gPHxcbiAgICAgICAgKHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgUGFnZXIgdmFsdWVzIC0+XG4gICAgICAgICAgICAgICAgdmlld09wdGlvbiB2YWx1ZXNcblxuICAgICAgICAgICAgU2Nyb2xsZXIgdmFsdWVzIC0+XG4gICAgICAgICAgICAgICAgdmlld09wdGlvbiB2YWx1ZXNcblxuICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgIClcblxuXG5pc0V2ZW4gOiBJbnQgLT4gQm9vbFxuaXNFdmVuIGludCA9XG4gICAgTWF0aC5tb2RCeSAyIGludCA9PSAwXG5cblxubmVnYXRpdmVUb1plcm8gOiBJbnQgLT4gSW50XG5uZWdhdGl2ZVRvWmVybyBuID1cbiAgICB3aGVuIGNvbXBhcmUgbiAwIGlzXG4gICAgICAgIExUIC0+XG4gICAgICAgICAgICAwXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgblxuIiwKICAgICAgICAibW9kdWxlIEV4YW1wbGUuUGFnaW5hdGVkIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgY29uZmlnLCBpbml0LCBtYWluLCB1cGRhdGUsIHZpZXcpXG5cbmltcG9ydCBCcm93c2VyXG5pbXBvcnQgRGF0YVRhYmxlIGFzIFRhYmxlIGV4cG9zaW5nIChTb3J0RGlyZWN0aW9uKC4uKSlcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5pbXBvcnQgU2hhcmVkLkV4YW1wbGVEYXRhIGFzIERhdGFcblxuXG5cbm1haW4gOiBQcm9ncmFtIHt9IE1vZGVsIE1zZ1xubWFpbiA9XG4gICAgQnJvd3Nlci5zYW5kYm94XG4gICAgICAgIHsgaW5pdCA9IGluaXQgRGF0YS5wcmVzaWRlbnRzXG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IERhdGEuUGVyc29uXG4gICAgLCB0YWJsZVN0YXRlIDogVGFibGUuU3RhdGVcbiAgICAsIHF1ZXJ5IDogU3RyaW5nXG4gICAgfVxuXG5cbmluaXQgOiBBcnJheSBEYXRhLlBlcnNvbiAtPiBNb2RlbFxuaW5pdCBwZW9wbGUgPVxuICAgIGxldFxuICAgICAgICBtb2RlbCA9XG4gICAgICAgICAgICB7IHBlb3BsZSA9IHBlb3BsZVxuICAgICAgICAgICAgLCB0YWJsZVN0YXRlID1cbiAgICAgICAgICAgICAgICBUYWJsZS5uZXcgXCJQcmVzaWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgfD4gVGFibGUuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGggMTAgWyAwLCA1LCAyNSwgNTAgXVxuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS51cGRhdGVTb3J0U3RhdGUgXCJZZWFyXCIgQXNjXG4gICAgICAgICAgICAgICAgICAgIHw+IFRhYmxlLnVwZGF0ZUFjdGl2ZVJvd0lkIFwiXCJcbiAgICAgICAgICAgICwgcXVlcnkgPSBcIlwiXG4gICAgICAgICAgICB9XG4gICAgaW5cbiAgICBtb2RlbFxuXG5cblxuLS0gVVBEQVRFXG5cblxudHlwZSBNc2dcbiAgICA9IFNldFF1ZXJ5IFN0cmluZ1xuICAgIHwgU2V0VGFibGVTdGF0ZSBUYWJsZS5TdGF0ZVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiBNb2RlbFxudXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgd2hlbiBtc2cgaXNcbiAgICAgICAgU2V0UXVlcnkgbmV3UXVlcnkgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBxdWVyeSA9IG5ld1F1ZXJ5IH1cblxuICAgICAgICBTZXRUYWJsZVN0YXRlIG5ld1N0YXRlIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgdGFibGVTdGF0ZSA9IG5ld1N0YXRlIH1cblxuXG5cbi0tIFZJRVdcblxuXG52aWV3IDogTW9kZWwgLT4gSHRtbCBNc2dcbnZpZXcgeyBwZW9wbGUsIHRhYmxlU3RhdGUsIHF1ZXJ5IH0gPVxuICAgIGxldFxuICAgICAgICBsb3dlclF1ZXJ5ID1cbiAgICAgICAgICAgIFN0cmluZy50b0xvd2VyIHF1ZXJ5XG5cbiAgICAgICAgYWNjZXB0YWJsZVBlb3BsZSA9XG4gICAgICAgICAgICBBcnJheS5rZWVwSWYgKFN0cmluZy5jb250YWlucyBsb3dlclF1ZXJ5IDw8IFN0cmluZy50b0xvd2VyIDw8IC5uYW1lKSBwZW9wbGVcbiAgICBpblxuICAgIGRpdiBbXVxuICAgICAgICBbIGgxIFtdIFsgdGV4dCBcIlBhZ2luYXRpb24gKFNjcm9sbGluZyB2YXJpYW50KVwiIF1cbiAgICAgICAgLCBkaXYgW10gW11cbiAgICAgICAgLCBpbnB1dCBbIHBsYWNlaG9sZGVyIFwiU2VhcmNoIGJ5IE5hbWVcIiwgb25JbnB1dCBTZXRRdWVyeSBdIFtdXG4gICAgICAgICwgVGFibGUucGFnZUxlbmd0aENob29zZXIgY29uZmlnIHRhYmxlU3RhdGVcbiAgICAgICAgLCBUYWJsZS52aWV3IGNvbmZpZyB0YWJsZVN0YXRlIGFjY2VwdGFibGVQZW9wbGVcbiAgICAgICAgXVxuXG5cbmNvbmZpZyA6IFRhYmxlLkNvbmZpZyBEYXRhLlBlcnNvbiBNc2dcbmNvbmZpZyA9XG4gICAgVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBTZXRUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIFRhYmxlLnN0cmluZ0NvbHVtbiBcIk5hbWVcIiAubmFtZVxuICAgICAgICAgICAgLCBUYWJsZS5pbnRDb2x1bW4gXCJZZWFyXCIgLnllYXJcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiQ2l0eVwiIC5jaXR5XG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIlN0YXRlXCIgLnN0YXRlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiIsCiAgICAgICAgIm1vZHVsZSBFeGFtcGxlLlByZXNpZGVudHMgZXhwb3NpbmcgKE1vZGVsLCBNc2coLi4pLCBjb25maWcsIGluaXQsIG1haW4sIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGVcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5pbXBvcnQgU2hhcmVkLkV4YW1wbGVEYXRhIGFzIERhdGFcblxuXG5tYWluIDogUHJvZ3JhbSB7fSBNb2RlbCBNc2dcbm1haW4gPVxuICAgIEJyb3dzZXIuc2FuZGJveFxuICAgICAgICB7IGluaXQgPSBpbml0IERhdGEucHJlc2lkZW50c1xuICAgICAgICAsIHVwZGF0ZSA9IHVwZGF0ZVxuICAgICAgICAsIHZpZXcgPSB2aWV3XG4gICAgICAgIH1cblxuXG5cbi0tIE1PREVMXG5cblxudHlwZSBhbGlhcyBNb2RlbCA9XG4gICAgeyBwZW9wbGUgOiBBcnJheSBEYXRhLlBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgRGF0YS5QZXJzb24gLT4gTW9kZWxcbmluaXQgcGVvcGxlID1cbiAgICBsZXRcbiAgICAgICAgbW9kZWwgPVxuICAgICAgICAgICAgeyBwZW9wbGUgPSBwZW9wbGVcbiAgICAgICAgICAgICwgdGFibGVTdGF0ZSA9IFRhYmxlLmluaXRpYWxTb3J0IFwiU3RhdGVcIlxuICAgICAgICAgICAgLCBxdWVyeSA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICBpblxuICAgIG1vZGVsXG5cblxuXG4tLSBVUERBVEVcblxuXG50eXBlIE1zZ1xuICAgID0gU2V0UXVlcnkgU3RyaW5nXG4gICAgfCBTZXRUYWJsZVN0YXRlIFRhYmxlLlN0YXRlXG5cblxudXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IE1vZGVsXG51cGRhdGUgbXNnIG1vZGVsID1cbiAgICB3aGVuIG1zZyBpc1xuICAgICAgICBTZXRRdWVyeSBuZXdRdWVyeSAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHF1ZXJ5ID0gbmV3UXVlcnkgfVxuXG4gICAgICAgIFNldFRhYmxlU3RhdGUgbmV3U3RhdGUgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCB0YWJsZVN0YXRlID0gbmV3U3RhdGUgfVxuXG5cblxuLS0gVklFV1xuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyB7IHBlb3BsZSwgdGFibGVTdGF0ZSwgcXVlcnkgfSA9XG4gICAgbGV0XG4gICAgICAgIGxvd2VyUXVlcnkgPVxuICAgICAgICAgICAgU3RyaW5nLnRvTG93ZXIgcXVlcnlcblxuICAgICAgICBhY2NlcHRhYmxlUGVvcGxlID1cbiAgICAgICAgICAgIEFycmF5LmtlZXBJZiAoU3RyaW5nLmNvbnRhaW5zIGxvd2VyUXVlcnkgPDwgU3RyaW5nLnRvTG93ZXIgPDwgLm5hbWUpIHBlb3BsZVxuICAgIGluXG4gICAgZGl2IFtdXG4gICAgICAgIFsgaDEgW10gWyB0ZXh0IFwiU29ydGFibGUgdGFibGUuXCIgXVxuICAgICAgICAsIGRpdiBbXVxuICAgICAgICAgICAgWyB0ZXh0IFwiU2luZ2xlIGNsaWNrIHRvIHNldCB0aGUgc29ydCBvcmRlciB0byB0aGF0IGNvbHVtbi4gXCJcbiAgICAgICAgICAgICwgdGV4dCBcIklmIHRoZSBjb2x1bW4gd2FzIHNlbGVjdGVkIGFscmVhZHksIHRoZSBzb3J0IG9yZGVyIGlzIHJldmVyc2VkLiBcIlxuICAgICAgICAgICAgLCB0ZXh0IFwiQ2xpY2sgZWxzZXdoZXJlIGFuZCByZWxlYXNlIHRoZSBjbGljayBvbiBjb2x1bW4gaGVhZGVyIHRvIGFkZCB0aGF0IGNvbHVtbiB0byB0aGUgZW5kIG9mIHRoZSBzb3J0IG9yZGVyICguLi50aGVuIHNvcnQgYnkgWWVhcikuIFwiXG4gICAgICAgICAgICAsIHRleHQgXCJJZiB0aGUgY29sdW1uIHdhcyBzZWxlY3RlZCBhbHJlYWR5LCBpdCBpcyBtb3ZlZCB0byB0aGUgZW5kIG9mIHRoZSBzb3J0IG9yZGVyIHNlcXVlbmNlLiBcIlxuICAgICAgICAgICAgXVxuICAgICAgICAsIGgxIFtdIFsgdGV4dCBcIkJpcnRocGxhY2VzIG9mIFUuUy4gUHJlc2lkZW50c1wiIF1cbiAgICAgICAgLCBpbnB1dCBbIHBsYWNlaG9sZGVyIFwiU2VhcmNoIGJ5IE5hbWVcIiwgb25JbnB1dCBTZXRRdWVyeSBdIFtdXG4gICAgICAgICwgVGFibGUudmlldyBjb25maWcgdGFibGVTdGF0ZSBhY2NlcHRhYmxlUGVvcGxlXG4gICAgICAgIF1cblxuXG5jb25maWcgOiBUYWJsZS5Db25maWcgRGF0YS5QZXJzb24gTXNnXG5jb25maWcgPVxuICAgIFRhYmxlLmNvbmZpZ1xuICAgICAgICB7IHRvSWQgPSAubmFtZVxuICAgICAgICAsIHRvTXNnID0gU2V0VGFibGVTdGF0ZVxuICAgICAgICAsIGNvbHVtbnMgPVxuICAgICAgICAgICAgWyBUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgVGFibGUuaW50Q29sdW1uIFwiWWVhclwiIC55ZWFyXG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIkNpdHlcIiAuY2l0eVxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJTdGF0ZVwiIC5zdGF0ZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4iLAogICAgICAgICJtb2R1bGUgU2hhcmVkLkV4YW1wbGVEYXRhIGV4cG9zaW5nIChwcmVzaWRlbnRzLCBQZXJzb24pXG5cbmltcG9ydCBIdG1sXG5cbi0tIERlbW8gZGF0YSB1c2VkIGluIGFsbCBleGFtcGxlc1xuXG5tYWluID0gSHRtbC50ZXh0IFwiVGhpcyBtb2R1bGUgZXhwb3NlcyBkYXRhIHRvIG90aGVyIG1vZHVsZXMuXCJcblxuXG50eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB5ZWFyIDogSW50XG4gICAgLCBjaXR5IDogU3RyaW5nXG4gICAgLCBzdGF0ZSA6IFN0cmluZ1xuICAgIH1cblxucGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIDogU3RyaW5nIC0+IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nIC0+IFBlcnNvblxucGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIG5hbWUgeWVhciBjaXR5IHN0YXRlID1cbiAgICB7IG5hbWUgPSBuYW1lLCB5ZWFyID0geWVhciwgY2l0eSA9IGNpdHksIHN0YXRlID0gc3RhdGUgfVxuXG5cbnByZXNpZGVudHMgOiBBcnJheSBQZXJzb25cbnByZXNpZGVudHMgPVxuICAgIFsgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiR2VvcmdlIFdhc2hpbmd0b25cIiAxNzMyIFwiV2VzdG1vcmVsYW5kIENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSm9obiBBZGFtc1wiIDE3MzUgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiVGhvbWFzIEplZmZlcnNvblwiIDE3NDMgXCJTaGFkd2VsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSmFtZXMgTWFkaXNvblwiIDE3NTEgXCJQb3J0IENvbndheVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSmFtZXMgTW9ucm9lXCIgMTc1OCBcIk1vbnJvZSBIYWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJBbmRyZXcgSmFja3NvblwiIDE3NjcgXCJXYXhoYXdzIFJlZ2lvblwiIFwiU291dGgvTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSm9obiBRdWluY3kgQWRhbXNcIiAxNzY3IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIldpbGxpYW0gSGVucnkgSGFycmlzb25cIiAxNzczIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiTWFydGluIFZhbiBCdXJlblwiIDE3ODIgXCJLaW5kZXJob29rXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJaYWNoYXJ5IFRheWxvclwiIDE3ODQgXCJCYXJib3Vyc3ZpbGxlXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJKb2huIFR5bGVyXCIgMTc5MCBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkphbWVzIEJ1Y2hhbmFuXCIgMTc5MSBcIkNvdmUgR2FwXCIgXCJQZW5uc3lsdmFuaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSmFtZXMgSy4gUG9sa1wiIDE3OTUgXCJQaW5ldmlsbGVcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIk1pbGxhcmQgRmlsbG1vcmVcIiAxODAwIFwiU3VtbWVyaGlsbFwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiRnJhbmtsaW4gUGllcmNlXCIgMTgwNCBcIkhpbGxzYm9yb3VnaFwiIFwiTmV3IEhhbXBzaGlyZVwiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJBbmRyZXcgSm9obnNvblwiIDE4MDggXCJSYWxlaWdoXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJBYnJhaGFtIExpbmNvbG5cIiAxODA5IFwiU2lua2luZyBzcHJpbmdcIiBcIktlbnR1Y2t5XCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIlVseXNzZXMgUy4gR3JhbnRcIiAxODIyIFwiUG9pbnQgUGxlYXNhbnRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiUnV0aGVyZm9yZCBCLiBIYXllc1wiIDE4MjIgXCJEZWxhd2FyZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJDaGVzdGVyIEEuIEFydGh1clwiIDE4MjkgXCJGYWlyZmllbGRcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiSmFtZXMgQS4gR2FyZmllbGRcIiAxODMxIFwiTW9yZWxhbmQgSGlsbHNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiQmVuamFtaW4gSGFycmlzb25cIiAxODMzIFwiTm9ydGggQmVuZFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJHcm92ZXIgQ2xldmVsYW5kXCIgMTgzNyBcIkNhbGR3ZWxsXCIgXCJOZXcgSmVyc2V5XCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIldpbGxpYW0gTWNLaW5sZXlcIiAxODQzIFwiTmlsZXNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiV29vZHJvdyBXaWxzb25cIiAxODU2IFwiU3RhdW50b25cIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIldpbGxpYW0gSG93YXJkIFRhZnRcIiAxODU3IFwiQ2luY2lubmF0aVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJUaGVvZG9yZSBSb29zZXZlbHRcIiAxODU4IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiV2FycmVuIEcuIEhhcmRpbmdcIiAxODY1IFwiQmxvb21pbmcgR3JvdmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiQ2FsdmluIENvb2xpZGdlXCIgMTg3MiBcIlBseW1vdXRoXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkhlcmJlcnQgSG9vdmVyXCIgMTg3NCBcIldlc3QgQnJhbmNoXCIgXCJJb3dhXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkZyYW5rbGluIEQuIFJvb3NldmVsdFwiIDE4ODIgXCJIeWRlIFBhcmtcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkhhcnJ5IFMuIFRydW1hblwiIDE4ODQgXCJMYW1hclwiIFwiTWlzc291cmlcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiRHdpZ2h0IEQuIEVpc2VuaG93ZXJcIiAxODkwIFwiRGVuaXNvblwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiTHluZG9uIEIuIEpvaG5zb25cIiAxOTA4IFwiU3RvbmV3YWxsXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJSb25hbGQgUmVhZ2FuXCIgMTkxMSBcIlRhbXBpY29cIiBcIklsbGlub2lzXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIlJpY2hhcmQgTS4gTml4b25cIiAxOTEzIFwiWW9yYmEgTGluZGFcIiBcIkNhbGlmb3JuaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiR2VyYWxkIFIuIEZvcmRcIiAxOTEzIFwiT21haGFcIiBcIk5lYnJhc2thXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkpvaG4gRi4gS2VubmVkeVwiIDE5MTcgXCJCcm9va2xpbmVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiR2VvcmdlIEguIFcuIEJ1c2hcIiAxOTI0IFwiTWlsdG9uXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkppbW15IENhcnRlclwiIDE5MjQgXCJQbGFpbnNcIiBcIkdlb3JnaWFcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiR2VvcmdlIFcuIEJ1c2hcIiAxOTQ2IFwiTmV3IEhhdmVuXCIgXCJDb25uZWN0aWN1dFwiXG4gICAgLCBwZXJzb25XaXRoTmFtZVllYXJDaXR5U3RhdGUgXCJCaWxsIENsaW50b25cIiAxOTQ2IFwiSG9wZVwiIFwiQXJrYW5zYXNcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiQmFyYWNrIE9iYW1hXCIgMTk2MSBcIkhvbm9sdWx1XCIgXCJIYXdhaWlcIlxuICAgICwgcGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIFwiRG9uYWxkIFRydW1wXCIgMTk0NiBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbldpdGhOYW1lWWVhckNpdHlTdGF0ZSBcIkpvZSBCaWRlblwiIDE5NDIgXCJTY3JhbnRvblwiIFwiUGVubnN5bHZhbmlhXCJcbiAgICBdXG5cblxuXG4tLSBodHRwczovL2RhdGEuc3RhZHQtenVlcmljaC5jaC9hcGkvMy9hY3Rpb24vZGF0YXN0b3JlX3NlYXJjaF9zcWw/c3FsPVdJVEglMjBtYWxlJTIwQVMlMjAoU0VMRUNUJTIwU1VNKCUyMkFuekdlYnVXaXIlMjI6OmludCklMjBBUyUyMG1jb3VudCwlMjAlMjJWb3JuYW1lJTIyJTIwZnJvbSUyMCUyMjdhYmY4NTYyLTQ1NjgtNGM4Yy04ZjFmLWE4NDJhNWE1NDYxNiUyMiUyMFdIRVJFJTIwJTIyU2V4TGFuZyUyMiUyMD0lMjAlMjdtJUMzJUE0bm5saWNoJTI3JTIwR1JPVVAlMjBCWSUyMCUyMlZvcm5hbWUlMjIpLCUyMGZlbWFsZSUyMEFTJTIwKFNFTEVDVCUyMFNVTSglMjJBbnpHZWJ1V2lyJTIyOjppbnQpJTIwQVMlMjBmY291bnQsJTIwJTIyVm9ybmFtZSUyMiUyMGZyb20lMjAlMjI3YWJmODU2Mi00NTY4LTRjOGMtOGYxZi1hODQyYTVhNTQ2MTYlMjIlMjBXSEVSRSUyMCUyMlNleExhbmclMjIlMjA9JTIwJTI3d2VpYmxpY2glMjclMjBHUk9VUCUyMEJZJTIwJTIyVm9ybmFtZSUyMiklMjBTRUxFQ1QlMjBtY291bnQsJTIwZmNvdW50LCUyMChtY291bnQ6OmRlY2ltYWwvZmNvdW50OjpkZWNpbWFsKSUyMEFTJTIwcXVvdGllbnQsJTIwbWFsZS4lMjJWb3JuYW1lJTIyJTIwRlJPTSUyMG1hbGUlMjBJTk5FUiUyMEpPSU4lMjBmZW1hbGUlMjBPTiUyMG1hbGUuJTIyVm9ybmFtZSUyMiUyMD0lMjBmZW1hbGUuJTIyVm9ybmFtZSUyMiUyMFdIRVJFJTIwbWNvdW50JTIwJTNFJTIwMSUyMEFORCUyMGZjb3VudCUyMCUzRSUyMDElMjBPUkRFUiUyMEJZJTIwcXVvdGllbnQlMjBERVNDJTIwTElNSVQlMjAxMDAwXG4iLAogICAgICAgICJtb2R1bGUgRG9jQm9vayBleHBvc2luZyAoTW9kZWwsIE1zZyguLiksIGluaXQsIG1haW4sIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBFeGFtcGxlLlBhZ2luYXRlZCBhcyBQYWdpbmF0ZWRcbmltcG9ydCBFeGFtcGxlLlByZXNpZGVudHMgYXMgUHJlc2lkZW50c1xuaW1wb3J0IFNoYXJlZC5FeGFtcGxlRGF0YSBhcyBEYXRhXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoSHRtbClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmcgKGNsYXNzLCBpZCwgc3R5bGUpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uQ2xpY2spXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdFxuICAgICAgICAsIHVwZGF0ZSA9IHVwZGF0ZVxuICAgICAgICAsIHZpZXcgPSB2aWV3XG4gICAgICAgIH1cblxuXG50eXBlIE1zZ1xuICAgID0gU3dpdGNoRXhhbXBsZSBFeGFtcGxlU2hvd25cbiAgICB8IFByZXNpZGVudHNNc2cgUHJlc2lkZW50cy5Nc2dcbiAgICB8IFBhZ2luYXRlZE1zZyBQYWdpbmF0ZWQuTXNnXG5cblxuaW5pdCA9XG4gICAgeyBhY3RpdmVFeGFtcGxlID0gU2hvd1ByZXNpZGVudHNcbiAgICAsIHByZXNpZGVudHMgPSBQcmVzaWRlbnRzLmluaXQgRGF0YS5wcmVzaWRlbnRzXG4gICAgLCBwYWdpbmF0ZWQgPSBQYWdpbmF0ZWQuaW5pdCBEYXRhLnByZXNpZGVudHNcbiAgICB9XG5cblxudHlwZSBhbGlhcyBNb2RlbCA9XG4gICAgeyBhY3RpdmVFeGFtcGxlIDogRXhhbXBsZVNob3duXG4gICAgLCBwcmVzaWRlbnRzIDogUHJlc2lkZW50cy5Nb2RlbFxuICAgICwgcGFnaW5hdGVkIDogUGFnaW5hdGVkLk1vZGVsXG4gICAgfVxuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyBtb2RlbCA9XG4gICAgbGV0XG4gICAgICAgIGlzQWN0aXZlIHZhcmlhbnQgPVxuICAgICAgICAgICAgaWYgbW9kZWwuYWN0aXZlRXhhbXBsZSA9PSB2YXJpYW50IHRoZW5cbiAgICAgICAgICAgICAgICBbIGNsYXNzIFwiYWN0aXZlXCIsIEh0bWwuQXR0cmlidXRlcy50YWJpbmRleCAtMSBdXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgIHZhcmlhbnRzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcFxuICAgICAgICAgICAgICAgIChcXHZhcmlhbnQgLT4gSHRtbC5idXR0b24gKFsgb25DbGljayA8fCBTd2l0Y2hFeGFtcGxlIHZhcmlhbnQgXSArKyBpc0FjdGl2ZSB2YXJpYW50KSBbIEh0bWwudGV4dCA8fCBleGFtcGxlTmFtZSB2YXJpYW50IF0pXG4gICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgIGluXG4gICAgSHRtbC5kaXYgWyBpZCBcIndyYXBwZXJcIiBdXG4gICAgICAgIFsgSHRtbC5uYXYgWyBpZCBcIm5hdmlnYXRpb25cIiBdIChbIEh0bWwuaDMgW10gWyBIdG1sLnRleHQgXCJFeGFtcGxlc1wiIF0gXSArKyB2YXJpYW50cylcbiAgICAgICAgLCBIdG1sLmFydGljbGUgWyBpZCBcImV4YW1wbGVcIiBdXG4gICAgICAgICAgICBbIHdoZW4gbW9kZWwuYWN0aXZlRXhhbXBsZSBpc1xuICAgICAgICAgICAgICAgIFNob3dQcmVzaWRlbnRzIC0+XG4gICAgICAgICAgICAgICAgICAgIFByZXNpZGVudHMudmlldyBtb2RlbC5wcmVzaWRlbnRzIHw+IEh0bWwubWFwIFByZXNpZGVudHNNc2dcblxuICAgICAgICAgICAgICAgIFNob3dQYWdpbmF0ZWQgLT5cbiAgICAgICAgICAgICAgICAgICAgUGFnaW5hdGVkLnZpZXcgbW9kZWwucGFnaW5hdGVkIHw+IEh0bWwubWFwIFBhZ2luYXRlZE1zZ1xuICAgICAgICAgICAgXVxuICAgICAgICBdXG5cblxudXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IE1vZGVsXG51cGRhdGUgbXNnIG1vZGVsID1cbiAgICB3aGVuIG1zZyBpc1xuICAgICAgICBTd2l0Y2hFeGFtcGxlIGV4YW1wbGVUb1N3aXRjaFRvIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgYWN0aXZlRXhhbXBsZSA9IGV4YW1wbGVUb1N3aXRjaFRvIH1cblxuICAgICAgICBQcmVzaWRlbnRzTXNnIGV4YW1wbGVNc2cgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBwcmVzaWRlbnRzID0gUHJlc2lkZW50cy51cGRhdGUgZXhhbXBsZU1zZyA8fCAucHJlc2lkZW50cyBtb2RlbCB9XG5cbiAgICAgICAgUGFnaW5hdGVkTXNnIGV4YW1wbGVNc2cgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBwYWdpbmF0ZWQgPSBQYWdpbmF0ZWQudXBkYXRlIGV4YW1wbGVNc2cgPHwgLnBhZ2luYXRlZCBtb2RlbCB9XG5cblxudHlwZSBFeGFtcGxlU2hvd25cbiAgICA9IFNob3dQcmVzaWRlbnRzXG4gICAgfCBTaG93UGFnaW5hdGVkXG5cblxuYnV0dG9ucyA9XG4gICAgLS0gZG9uJ3QgZm9yZ2V0IHRvIGFkZCB0aGUgZXhhbXBsZSB0byB0aGlzIGxpc3QsIG90aGVyd2lzZSBpdCB3b24ndCBzaG93IHVwLi4uXG4gICAgWyBTaG93UHJlc2lkZW50cywgU2hvd1BhZ2luYXRlZCBdXG5cblxuZXhhbXBsZU5hbWUgOiBFeGFtcGxlU2hvd24gLT4gU3RyaW5nXG5leGFtcGxlTmFtZSB2YXJpYW50ID1cbiAgICB3aGVuIHZhcmlhbnQgaXNcbiAgICAgICAgU2hvd1ByZXNpZGVudHMgLT5cbiAgICAgICAgICAgIFwiU29ydGluZ1wiXG5cbiAgICAgICAgU2hvd1BhZ2luYXRlZCAtPlxuICAgICAgICAgICAgXCJQYWdpbmF0aW9uXCJcbiIsCiAgICAgICAgIm1vZHVsZSBTdHJpbmcgZXhwb3NpbmdcbiAgICAoIFN0cmluZywgaXNFbXB0eSwgY291bnQsIHJldmVyc2UsIHJlcGVhdCwgcmVwbGFjZVxuICAgICwgcHJlcGVuZCwgYXBwZW5kLCBzcGxpdCwgam9pbiwgd29yZHMsIGxpbmVzXG4gICAgLCBzbGljZSwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgZHJvcEZpcnN0LCBkcm9wTGFzdFxuICAgICwgY29udGFpbnMsIHN0YXJ0c1dpdGgsIGVuZHNXaXRoLCBmaXJzdEluZGV4T2YsIGxhc3RJbmRleE9mLCBpbmRpY2VzXG4gICAgLCB0b0ludCwgZnJvbUludFxuICAgICwgdG9GbG9hdCwgZnJvbUZsb2F0XG4gICAgLCBmcm9tQ2hhciwgcHVzaEZpcnN0LCBwdXNoTGFzdCwgcG9wRmlyc3QsIHBvcExhc3RcbiAgICAsIHRvQXJyYXksIGZyb21BcnJheVxuICAgICwgdG9VcHBlciwgdG9Mb3dlciwgcGFkLCBwYWRMZWZ0LCBwYWRSaWdodCwgdHJpbSwgdHJpbUxlZnQsIHRyaW1SaWdodFxuICAgICwgbWFwLCBrZWVwSWYsIGZvbGRsLCBmb2xkciwgYW55LCBhbGxcbiAgICAsIHVuaXRMZW5ndGgsIGdldFVuaXQsIGZvbGRsVW5pdHMsIGZvbGRyVW5pdHNcbiAgICApXG5cbnstfCBBIGJ1aWx0LWluIHJlcHJlc2VudGF0aW9uIGZvciBlZmZpY2llbnQgc3RyaW5nIG1hbmlwdWxhdGlvbi4gV2hlbiBpdCBjb21lcyB0byBzdHJpbmdzLFxudGhlcmUgYXJlIHRocmVlIGNvbmNlcHRzIHdvcnRoIGtub3dpbmcgYWJvdXQ6XG5cbiogQ29kZSB1bml0czogcmVwcmVzZW50cyB0aGUgc21hbGxlc3QgcHJpbWl0aXZlIHZhbHVlIG9mIGEgc3RyaW5nLiBJbiBHcmVuLFxuY29kZSB1bml0cyBhcmUgcmVwcmVzZW50ZWQgYnkgYSAxNi1iaXQgdmFsdWUuIFRoaXMgaXMgZW5vdWdoIHRvIHN0b3JlIHRoZSBtb3N0IGNvbW1vblxuY2hhcmFjdGVycyBpbiB3ZXN0ZXJuIGxhbmd1YWdlcyAoTGF0aW4sIEdyZWVrLCBDeXJpbGljKSwgYnV0IG5vdCBhbGwgdW5pY29kZSBjaGFyYWN0ZXJzLlxuKiBDb2RlIHBvaW50czogcmVwcmVzZW50cyBhIHVuaWNvZGUgY2hhcmFjdGVyLiBDb2RlIHBvaW50cyBjYW4gYmUgcmVwcmVzZW50ZWQgYnkgb25lXG51bml0LCBvciBhIHBhaXIgb2YgdW5pdHMuXG4qIEdyYXBoZW1lczogcmVwcmVzZW50cyBhIHNpbmdsZSB2aXN1YWwgZ2x5cGgsIGxpa2UgY2VydGFpbiBlbW9qaXMgb3IgY2hhcmFjdGVycyB3aXRoXG5hY2NlbnRzLlxuXG5Vbmxlc3Mgb3RoZXJ3aXNlIG5vdGVkLCBhbGwgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgd2l0aCBjb2RlIHBvaW50cy5cblxuXG5AZG9jcyBTdHJpbmcsIGlzRW1wdHksIGNvdW50LCByZXZlcnNlLCByZXBlYXQsIHJlcGxhY2VcblxuXG4jIyBCdWlsZGluZyBhbmQgU3BsaXR0aW5nXG5cbkBkb2NzIHByZXBlbmQsIGFwcGVuZCwgc3BsaXQsIGpvaW4sIHdvcmRzLCBsaW5lc1xuXG5cbiMjIEdldCBTdWJzdHJpbmdzXG5cbkBkb2NzIHNsaWNlLCB0YWtlRmlyc3QsIHRha2VMYXN0LCBkcm9wRmlyc3QsIGRyb3BMYXN0XG5cblxuIyMgQ2hlY2sgZm9yIFN1YnN0cmluZ3NcblxuQGRvY3MgY29udGFpbnMsIHN0YXJ0c1dpdGgsIGVuZHNXaXRoLCBmaXJzdEluZGV4T2YsIGxhc3RJbmRleE9mLCBpbmRpY2VzXG5cblxuIyMgSW50IENvbnZlcnNpb25zXG5cbkBkb2NzIHRvSW50LCBmcm9tSW50XG5cblxuIyMgRmxvYXQgQ29udmVyc2lvbnNcblxuQGRvY3MgdG9GbG9hdCwgZnJvbUZsb2F0XG5cblxuIyMgQ2hhciBDb252ZXJzaW9uc1xuXG5AZG9jcyBmcm9tQ2hhciwgcHVzaEZpcnN0LCBwdXNoTGFzdCwgcG9wRmlyc3QsIHBvcExhc3RcblxuXG4jIyBBcnJheSBDb252ZXJzaW9uc1xuXG5AZG9jcyB0b0FycmF5LCBmcm9tQXJyYXlcblxuXG4jIyBGb3JtYXR0aW5nXG5cbkNvc21ldGljIG9wZXJhdGlvbnMgc3VjaCBhcyBwYWRkaW5nIHdpdGggZXh0cmEgY2hhcmFjdGVycyBvciB0cmltbWluZyB3aGl0ZXNwYWNlLlxuXG5AZG9jcyB0b1VwcGVyLCB0b0xvd2VyLCBwYWQsIHBhZExlZnQsIHBhZFJpZ2h0LCB0cmltLCB0cmltTGVmdCwgdHJpbVJpZ2h0XG5cbiMjIEhpZ2hlci1PcmRlciBGdW5jdGlvbnNcblxuQGRvY3MgbWFwLCBrZWVwSWYsIGZvbGRsLCBmb2xkciwgYW55LCBhbGxcblxuIyMgQ2hhciBVbml0c1xuXG5GdW5jdGlvbnMgdGhhdCBvcGVyYXRlcyBvbiB1bml0cyBpbnN0ZWFkIG9mIGNvZGUgcG9pbnRzLlxuXG5AZG9jcyB1bml0TGVuZ3RoLCBnZXRVbml0LCBmb2xkbFVuaXRzLCBmb2xkclVuaXRzXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXRoIGV4cG9zaW5nIChmbG9vciwgY2VpbGluZylcbmltcG9ydCBCaXR3aXNlXG5pbXBvcnQgQ2hhciBleHBvc2luZyAoQ2hhcilcbmltcG9ydCBHcmVuLktlcm5lbC5TdHJpbmdcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUpXG5pbXBvcnQgUmVzdWx0IGV4cG9zaW5nIChSZXN1bHQpXG5cblxuXG4tLSBTVFJJTkdTXG5cblxuey18IEEgYFN0cmluZ2AgaXMgYSBjaHVuayBvZiB0ZXh0LiBgU3RyaW5nYCBsaXRlcmFscyBhcmUgZW5jbG9zZWQgaW4gYFwiZG91YmxlIHF1b3Rlc1wiYC5cblxuICAgIFwiSGVsbG8hXCJcblxuICAgIFwiSG93IGFyZSB5b3U/XCJcblxuICAgIFwi8J+ZiPCfmYnwn5mKXCJcblxuICAgIC0tIHN0cmluZ3Mgd2l0aCBlc2NhcGUgY2hhcmFjdGVyc1xuICAgIFwidGhpc1xcblxcdFxcXCJ0aGF0XFxcIlwiXG5cbiAgICBcIvCfmYjwn5mJ8J+ZilwiIC0tIFwi8J+ZiPCfmYnwn5mKXCJcblxuICAgIC0tIG11bHRpbGluZSBzdHJpbmdzXG4gICAgXCJcIlwiVHJpcGxlIGRvdWJsZSBxdW90ZXMgbGV0IHlvdVxuICAgIGNyZWF0ZSBcIm11bHRpbGluZSBzdHJpbmdzXCIgd2hpY2hcbiAgICBjYW4gaGF2ZSB1bmVzY2FwZWQgcXVvdGVzIGFuZCBuZXdsaW5lcy5cbiAgICBcIlwiXCJcblxuQSBgU3RyaW5nYCBjYW4gcmVwcmVzZW50IGFueSBzZXF1ZW5jZSBvZiBbdW5pY29kZSBjaGFyYWN0ZXJzXVt1XS4gWW91IGNhbiB1c2VcbnRoZSB1bmljb2RlIGVzY2FwZXMgZnJvbSBgXFx1ezAwMDB9YCB0byBgXFx1ezEwRkZGRn1gIHRvIHJlcHJlc2VudCBjaGFyYWN0ZXJzXG5ieSB0aGVpciBjb2RlIHBvaW50LiBZb3UgY2FuIGFsc28gaW5jbHVkZSB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGRpcmVjdGx5LlxuVXNpbmcgdGhlIGVzY2FwZXMgY2FuIGJlIGJldHRlciBpZiB5b3UgbmVlZCBvbmUgb2YgdGhlIG1hbnkgd2hpdGVzcGFjZVxuY2hhcmFjdGVycyB3aXRoIGRpZmZlcmVudCB3aWR0aHMuXG5cblt1XTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pY29kZVxuXG4qKk5vdGU6KiogSmF2YVNjcmlwdCBsZXRzIHlvdSB1c2UgZG91YmxlIHF1b3RlcyBhbmQgc2luZ2xlIHF1b3RlcyBpbnRlcmNoYW5nYWJseS5cblRoaXMgaXMgbm90IHRydWUgaW4gR3Jlbi4gWW91IG11c3QgdXNlIGRvdWJsZSBxdW90ZXMgZm9yIGEgYFN0cmluZ2AsIGFuZCB5b3UgbXVzdFxudXNlIHNpbmdsZSBxdW90ZXMgZm9yIGEgW2BDaGFyYF0oQ2hhciNDaGFyKS5cblxuLX1cbnR5cGUgU3RyaW5nXG4gICAgPSBTdHJpbmcgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYSBzdHJpbmcgaXMgZW1wdHkuXG5cbiAgICBpc0VtcHR5IFwiXCIgPT0gVHJ1ZVxuXG4gICAgaXNFbXB0eSBcInRoZSB3b3JsZFwiID09IEZhbHNlXG5cbi19XG5pc0VtcHR5IDogU3RyaW5nIC0+IEJvb2xcbmlzRW1wdHkgc3RyaW5nID1cbiAgICBzdHJpbmcgPT0gXCJcIlxuXG5cbnstfCBDb3VudCB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuXG5cbiAgICBjb3VudCBcImlubnVtZXJhYmxlXCIgPT0gMTFcblxuICAgIGNvdW50IFwiXCIgPT0gMFxuXG4tfVxuY291bnQgOiBTdHJpbmcgLT4gSW50XG5jb3VudCBzdHJpbmcgPVxuICAgIGZvbGRsIChcXF8gbnVtIC0+IG51bSArIDEpIDAgc3RyaW5nXG5cblxuey18IFJldmVyc2UgYSBzdHJpbmcuXG5cbiAgICByZXZlcnNlIFwic3RyZXNzZWRcIiA9PSBcImRlc3NlcnRzXCJcblxuLX1cbnJldmVyc2UgOiBTdHJpbmcgLT4gU3RyaW5nXG5yZXZlcnNlIHN0ciA9XG4gICAgdG9BcnJheSBzdHJcbiAgICAgICAgfD4gQXJyYXkucmV2ZXJzZVxuICAgICAgICB8PiBmcm9tQXJyYXlcblxuXG57LXwgUmVwZWF0IGEgc3RyaW5nIF9uXyB0aW1lcy5cblxuICAgIHJlcGVhdCAzIFwiaGFcIiA9PSBcImhhaGFoYVwiXG5cbi19XG5yZXBlYXQgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xucmVwZWF0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcucmVwZWF0XG5cblxuey18IFJlcGxhY2UgYWxsIG9jY3VycmVuY2VzIG9mIHNvbWUgc3Vic3RyaW5nLlxuXG4gICAgcmVwbGFjZSBcIi5cIiBcIi1cIiBcIkpzb24uRGVjb2RlLnN1Y2NlZWRcIiA9PSBcIkpzb24tRGVjb2RlLXN1Y2NlZWRcIlxuXG4gICAgcmVwbGFjZSBcIixcIiBcIi9cIiBcImEsYixjLGQsZVwiID09IFwiYS9iL2MvZC9lXCJcblxuKipOb3RlOioqIElmIHlvdSBuZWVkIG1vcmUgYWR2YW5jZWQgcmVwbGFjZW1lbnRzLCBjaGVjayBvdXQgdGhlXG5bYGdyZW4tbGFuZy9wYXJzZXJgXVtwYXJzZXJdIHBhY2thZ2Ugb3IgW2BTdHJpbmcuUmVnZXhgXVtyZWdleF0gbW9kdWxlLlxuXG5bcGFyc2VyXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL3BhcnNlclxuW3JlZ2V4XTogU3RyaW5nLlJlZ2V4XG5cbi19XG5yZXBsYWNlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5yZXBsYWNlIGJlZm9yZSBhZnRlciBzdHJpbmcgPVxuICAgIGpvaW4gYWZ0ZXIgKHNwbGl0IGJlZm9yZSBzdHJpbmcpXG5cblxuXG4tLSBCVUlMRElORyBBTkQgU1BMSVRUSU5HXG5cblxuey18IENvbWJpbmUgdHdvIHN0cmluZ3MuIFlvdSBjYW4gYWxzbyB1c2UgW3RoZSBgKCsrKWAgb3BlcmF0b3JdKEJhc2ljcyMrKylcbnRvIGRvIHRoaXMuXG5cbiAgICBwcmVwZW5kIFwiYnV0dGVyXCIgXCJmbHlcIiA9PSBcImJ1dHRlcmZseVwiXG5cbi19XG5wcmVwZW5kIDogU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbnByZXBlbmQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5hcHBlbmRcblxuXG57LXwgQXBwZW5kIG9uZSBzdHJpbmcgb250byBhbm90aGVyLiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBbcHJlcGVuZF0ocHJlcGVuZCksXG5idXQgd2l0aCB0aGUgYXJndW1lbnRzIHJldmVyc2VkLlxuICAgIFxuICAgIGFwcGVuZCBcImJ1dHRlclwiIFwiZmx5XCIgPT0gXCJmbHlidXR0ZXJcIlxuXG4tfVxuYXBwZW5kIDogU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbmFwcGVuZCBsaHMgcmhzID1cbiAgICBwcmVwZW5kIHJocyBsaHNcblxuXG57LXwgU3BsaXQgYSBzdHJpbmcgdXNpbmcgYSBnaXZlbiBzZXBhcmF0b3IuIElmIHRoZSBzZXBlcmF0b3IgZG9lc24ndCBhcHBlYXIsXG55b3Ugd2lsbCBnZXQgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgb3JpZ2luYWwgc3RyaW5nLlxuXG4gICAgc3BsaXQgXCIsXCIgXCJcIiA9PSBbXCJcIl1cbiAgICBcbiAgICBzcGxpdCBcIixcIiBcImNhdFwiID09IFtcImNhdFwiXVxuICAgIFxuICAgIHNwbGl0IFwiLFwiIFwiY2F0LGRvZyxjb3dcIiA9PSBbIFwiY2F0XCIsIFwiZG9nXCIsIFwiY293XCIgXVxuICAgIFxuICAgIHNwbGl0IFwiL1wiIFwiaG9tZS9ldmFuL0Rlc2t0b3AvXCIgPT0gWyBcImhvbWVcIiwgXCJldmFuXCIsIFwiRGVza3RvcFwiLCBcIlwiIF1cblxuLX1cbnNwbGl0IDogU3RyaW5nIC0+IFN0cmluZyAtPiBBcnJheSBTdHJpbmdcbnNwbGl0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuc3BsaXRcblxuXG57LXwgUHV0IG1hbnkgc3RyaW5ncyB0b2dldGhlciB3aXRoIGEgZ2l2ZW4gc2VwYXJhdG9yLlxuXG4gICAgam9pbiBcImFcIiBbIFwiSFwiLCBcIndcIiwgXCJpaVwiLCBcIm5cIiBdID09IFwiSGF3YWlpYW5cIlxuXG4gICAgam9pbiBcIiBcIiBbIFwiY2F0XCIsIFwiZG9nXCIsIFwiY293XCIgXSA9PSBcImNhdCBkb2cgY293XCJcblxuICAgIGpvaW4gXCIvXCIgWyBcImhvbWVcIiwgXCJldmFuXCIsIFwiRGVza3RvcFwiIF0gPT0gXCJob21lL2V2YW4vRGVza3RvcFwiXG5cbi19XG5qb2luIDogU3RyaW5nIC0+IEFycmF5IFN0cmluZyAtPiBTdHJpbmdcbmpvaW4gPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5qb2luXG5cblxuey18IEJyZWFrIGEgc3RyaW5nIGludG8gd29yZHMsIHNwbGl0dGluZyBvbiBjaHVua3Mgb2Ygd2hpdGVzcGFjZS5cblxuICAgIHdvcmRzIFwiSG93IGFyZSBcXHQgeW91PyBcXG4gR29vZD9cIiA9PSBbIFwiSG93XCIsIFwiYXJlXCIsIFwieW91P1wiLCBcIkdvb2Q/XCIgXVxuXG4tfVxud29yZHMgOiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG53b3JkcyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLndvcmRzXG5cblxuey18IEJyZWFrIGEgc3RyaW5nIGludG8gbGluZXMsIHNwbGl0dGluZyBvbiBuZXdsaW5lcy5cblxuICAgIGxpbmVzIFwiSG93IGFyZSB5b3U/XFxuR29vZD9cIiA9PSBbIFwiSG93IGFyZSB5b3U/XCIsIFwiR29vZD9cIiBdXG5cbi19XG5saW5lcyA6IFN0cmluZyAtPiBBcnJheSBTdHJpbmdcbmxpbmVzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcubGluZXNcblxuXG5cbi0tIFNVQlNUUklOR1NcblxuXG57LXwgVGFrZSBhIHN1YnN0cmluZyBnaXZlbiBhIHN0YXJ0IGFuZCBlbmQgaW5kZXguIE5lZ2F0aXZlIGluZGV4ZXNcbmFyZSB0YWtlbiBzdGFydGluZyBmcm9tIHRoZSBfZW5kXyBvZiB0aGUgYXJyYXkuXG5cbiAgICBzbGljZSA3IDkgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcIm9uXCJcblxuICAgIHNsaWNlIDAgNiBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwic25ha2VzXCJcblxuICAgIHNsaWNlIDAgLTcgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcInNuYWtlcyBvbiBhXCJcblxuICAgIHNsaWNlIC02IC0xIFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJwbGFuZVwiXG5cbi19XG5zbGljZSA6IEludCAtPiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuc2xpY2UgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5zbGljZVxuXG5cbnstfCBNYWtlIGEgbmV3IHN0cmluZyB1c2luZyB0aGUgZmlyc3QgX25fIGNoYXJhY3RlcnMuIElmIF9uXyBpcyBsYXJnZXIgdGhhblxudGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLCB0aGVuIHRoZSBzdHJpbmcgaXMgcmV0dXJuZWQgYXMgaXMuXG5cbiAgICB0YWtlRmlyc3QgMiBcIk11bGRlclwiID09IFwiTXVcIlxuXG4gICAgdGFrZUZpcnN0IDggXCJNdWxkZXJcIiA9PSBcIk11bGRlclwiXG5cbi19XG50YWtlRmlyc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xudGFrZUZpcnN0IG4gc3RyaW5nID1cbiAgICBpZiBuIDwgMSB0aGVuXG4gICAgICAgIFwiXCJcblxuICAgIGVsc2VcbiAgICAgICAgc2xpY2UgMCBuIHN0cmluZ1xuXG5cbnstfCBNYWtlIGEgbmV3IHN0cmluZyB1c2luZyB0aGUgbGFzdCBfbl8gY2hhcmFjdGVycy4gSWYgX25fIGlzIGxhcmdlciB0aGFuXG50aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcsIHRoZW4gdGhlIHN0cmluZyBpcyByZXR1cm5lZCBhcyBpcy5cblxuICAgIHRha2VMYXN0IDIgXCJTY3VsbHlcIiA9PSBcImx5XCJcblxuICAgIHRha2VMYXN0IDggXCJTY3VsbHlcIiA9PSBcIlNjdWxseVwiXG5cbi19XG50YWtlTGFzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG50YWtlTGFzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBcIlwiXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIC1uICh1bml0TGVuZ3RoIHN0cmluZykgc3RyaW5nXG5cblxuey18IERyb3AgdGhlIGZpcnN0IF9uXyBjaGFyYWN0ZXJzLlxuXG4gICAgZHJvcEZpcnN0IDIgXCJUaGUgTG9uZSBHdW5tZW5cIiA9PSBcImUgTG9uZSBHdW5tZW5cIlxuXG4tfVxuZHJvcEZpcnN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbmRyb3BGaXJzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBzdHJpbmdcblxuICAgIGVsc2VcbiAgICAgICAgc2xpY2UgbiAodW5pdExlbmd0aCBzdHJpbmcpIHN0cmluZ1xuXG5cbnstfCBEcm9wIHRoZSBsYXN0IF9uXyBjaGFyYWN0ZXJzLlxuXG4gICAgZHJvcExhc3QgMiBcIkNpZ2FyZXR0ZSBTbW9raW5nIE1hblwiID09IFwiQ2lnYXJldHRlIFNtb2tpbmcgTVwiXG5cbi19XG5kcm9wTGFzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5kcm9wTGFzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBzdHJpbmdcblxuICAgIGVsc2VcbiAgICAgICAgc2xpY2UgMCAtbiBzdHJpbmdcblxuXG5cbi0tIERFVEVDVCBTVUJTVFJJTkdTXG5cblxuey18IFNlZSBpZiB0aGUgc2Vjb25kIHN0cmluZyBjb250YWlucyB0aGUgZmlyc3Qgb25lLlxuXG4gICAgY29udGFpbnMgXCJ0aGVcIiBcInRoZW9yeVwiID09IFRydWVcblxuICAgIGNvbnRhaW5zIFwiaGF0XCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4gICAgY29udGFpbnMgXCJUSEVcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbi19XG5jb250YWlucyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQm9vbFxuY29udGFpbnMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5jb250YWluc1xuXG5cbnstfCBTZWUgaWYgdGhlIHNlY29uZCBzdHJpbmcgc3RhcnRzIHdpdGggdGhlIGZpcnN0IG9uZS5cblxuICAgIHN0YXJ0c1dpdGggXCJ0aGVcIiBcInRoZW9yeVwiID09IFRydWVcblxuICAgIHN0YXJ0c1dpdGggXCJvcnlcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbi19XG5zdGFydHNXaXRoIDogU3RyaW5nIC0+IFN0cmluZyAtPiBCb29sXG5zdGFydHNXaXRoID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuc3RhcnRzV2l0aFxuXG5cbnstfCBTZWUgaWYgdGhlIHNlY29uZCBzdHJpbmcgZW5kcyB3aXRoIHRoZSBmaXJzdCBvbmUuXG5cbiAgICBlbmRzV2l0aCBcInRoZVwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuICAgIGVuZHNXaXRoIFwib3J5XCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbi19XG5lbmRzV2l0aCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQm9vbFxuZW5kc1dpdGggPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5lbmRzV2l0aFxuXG5cbnstfCBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgc3RyaW5nIHdpdGhpbiB0aGUgc2Vjb25kIG9uZSwgaWYgaXQncyB0aGVyZS5cblxuICAgIGluZGV4T2YgXCJ0aGVcIiBcInRoZW9yeVwiID09IEp1c3QgMFxuXG4gICAgaW5kZXhPZiBcIm9yeVwiIFwidGhlb3J5XCIgPT0gSnVzdCAzXG4gICAgXG4gICAgaW5kZXhPZiBcImFcIiBcInRoZW9yeVwiID09IE5vdGhpbmdcblxuLX1cbmZpcnN0SW5kZXhPZiA6IFN0cmluZyAtPiBTdHJpbmcgLT4gTWF5YmUgSW50XG5maXJzdEluZGV4T2YgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5pbmRleE9mXG5cblxuey18IEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyB3aXRoaW4gdGhlIHNlY29uZCBvbmUsIGlmIGl0J3MgdGhlcmUuXG5cbiAgICBsYXN0SW5kZXhPZiBcImFicmFcIiBcImFicmFjYWRhYnJhXCIgPT0gSnVzdCA3XG5cbiAgICBsYXN0SW5kZXhPZiBcImJhcmJcIiBcImFicmFjYWRhYnJhXCIgPT0gTm90aGluZ1xuXG4tfVxubGFzdEluZGV4T2YgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIEludFxubGFzdEluZGV4T2YgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5sYXN0SW5kZXhPZlxuXG5cbnstfCBHZXQgYWxsIG9mIHRoZSBpbmRpY2VzIGZvciBhIHN1YnN0cmluZyBpbiBhbm90aGVyIHN0cmluZy5cblxuICAgIGluZGV4ZXMgXCJpXCIgXCJNaXNzaXNzaXBwaVwiID09IFsgMSwgNCwgNywgMTAgXVxuXG4gICAgaW5kZXhlcyBcInNzXCIgXCJNaXNzaXNzaXBwaVwiID09IFsgMiwgNSBdXG5cbiAgICBpbmRleGVzIFwibmVlZGxlXCIgXCJoYXlzdGFja1wiID09IFtdXG5cbi19XG5pbmRpY2VzIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBcnJheSBJbnRcbmluZGljZXMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5pbmRleGVzXG5cblxuXG4tLSBGT1JNQVRUSU5HXG5cblxuey18IENvbnZlcnQgYSBzdHJpbmcgdG8gYWxsIHVwcGVyIGNhc2UuIFVzZWZ1bCBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uc1xuYW5kIFZJUlRVQUwgWUVMTElORy5cblxuICAgIHRvVXBwZXIgXCJza2lubmVyXCIgPT0gXCJTS0lOTkVSXCJcblxuLX1cbnRvVXBwZXIgOiBTdHJpbmcgLT4gU3RyaW5nXG50b1VwcGVyID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudG9VcHBlclxuXG5cbnstfCBDb252ZXJ0IGEgc3RyaW5nIHRvIGFsbCBsb3dlciBjYXNlLiBVc2VmdWwgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbnMuXG5cbiAgICB0b0xvd2VyIFwiWC1GSUxFU1wiID09IFwieC1maWxlc1wiXG5cbi19XG50b0xvd2VyIDogU3RyaW5nIC0+IFN0cmluZ1xudG9Mb3dlciA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvTG93ZXJcblxuXG57LXwgUGFkIGEgc3RyaW5nIG9uIGJvdGggc2lkZXMgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkIDUgJyAnIFwiMVwiID09IFwiICAxICBcIlxuXG4gICAgcGFkIDUgJyAnIFwiMTFcIiA9PSBcIiAgMTEgXCJcblxuICAgIHBhZCA1ICcgJyBcIjEyMVwiID09IFwiIDEyMSBcIlxuXG4tfVxucGFkIDogSW50IC0+IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucGFkIG4gY2hhciBzdHJpbmcgPVxuICAgIGxldFxuICAgICAgICBoYWxmID1cbiAgICAgICAgICAgIEJhc2ljcy50b0Zsb2F0IChuIC0gY291bnQgc3RyaW5nKSAvIDJcbiAgICBpblxuICAgIHJlcGVhdCAoY2VpbGluZyBoYWxmKSAoZnJvbUNoYXIgY2hhcikgKysgc3RyaW5nICsrIHJlcGVhdCAoZmxvb3IgaGFsZikgKGZyb21DaGFyIGNoYXIpXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiB0aGUgbGVmdCB1bnRpbCBpdCBoYXMgYSBnaXZlbiBsZW5ndGguXG5cbiAgICBwYWRMZWZ0IDUgJy4nIFwiMVwiID09IFwiLi4uLjFcIlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjExXCIgPT0gXCIuLi4xMVwiXG5cbiAgICBwYWRMZWZ0IDUgJy4nIFwiMTIxXCIgPT0gXCIuLjEyMVwiXG5cbi19XG5wYWRMZWZ0IDogSW50IC0+IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucGFkTGVmdCBuIGNoYXIgc3RyaW5nID1cbiAgICByZXBlYXQgKG4gLSBjb3VudCBzdHJpbmcpIChmcm9tQ2hhciBjaGFyKSArKyBzdHJpbmdcblxuXG57LXwgUGFkIGEgc3RyaW5nIG9uIHRoZSByaWdodCB1bnRpbCBpdCBoYXMgYSBnaXZlbiBsZW5ndGguXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjFcIiA9PSBcIjEuLi4uXCJcblxuICAgIHBhZFJpZ2h0IDUgJy4nIFwiMTFcIiA9PSBcIjExLi4uXCJcblxuICAgIHBhZFJpZ2h0IDUgJy4nIFwiMTIxXCIgPT0gXCIxMjEuLlwiXG5cbi19XG5wYWRSaWdodCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZFJpZ2h0IG4gY2hhciBzdHJpbmcgPVxuICAgIHN0cmluZyArKyByZXBlYXQgKG4gLSBjb3VudCBzdHJpbmcpIChmcm9tQ2hhciBjaGFyKVxuXG5cbnstfCBHZXQgcmlkIG9mIHdoaXRlc3BhY2Ugb24gYm90aCBzaWRlcyBvZiBhIHN0cmluZy5cblxuICAgIHRyaW0gXCIgIGhhdHMgIFxcblwiID09IFwiaGF0c1wiXG5cbi19XG50cmltIDogU3RyaW5nIC0+IFN0cmluZ1xudHJpbSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRyaW1cblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIHRoZSBsZWZ0IG9mIGEgc3RyaW5nLlxuXG4gICAgdHJpbUxlZnQgXCIgIGhhdHMgIFxcblwiID09IFwiaGF0cyAgXFxuXCJcblxuLX1cbnRyaW1MZWZ0IDogU3RyaW5nIC0+IFN0cmluZ1xudHJpbUxlZnQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50cmltTGVmdFxuXG5cbnstfCBHZXQgcmlkIG9mIHdoaXRlc3BhY2Ugb24gdGhlIHJpZ2h0IG9mIGEgc3RyaW5nLlxuXG4gICAgdHJpbVJpZ2h0IFwiICBoYXRzICBcXG5cIiA9PSBcIiAgaGF0c1wiXG5cbi19XG50cmltUmlnaHQgOiBTdHJpbmcgLT4gU3RyaW5nXG50cmltUmlnaHQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50cmltUmlnaHRcblxuXG5cbi0tIElOVCBDT05WRVJTSU9OU1xuXG5cbnstfCBUcnkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGFuIGludCwgZmFpbGluZyBvbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBzdHJpbmdzLlxuXG4gICAgU3RyaW5nLnRvSW50IFwiMTIzXCIgPT0gSnVzdCAxMjNcblxuICAgIFN0cmluZy50b0ludCBcIi00MlwiID09IEp1c3QgLTQyXG5cbiAgICBTdHJpbmcudG9JbnQgXCIzLjFcIiA9PSBOb3RoaW5nXG5cbiAgICBTdHJpbmcudG9JbnQgXCIzMWFcIiA9PSBOb3RoaW5nXG5cbklmIHlvdSBhcmUgZXh0cmFjdGluZyBhIG51bWJlciBmcm9tIHNvbWUgcmF3IHVzZXIgaW5wdXQsIHlvdSB3aWxsIHR5cGljYWxseVxud2FudCB0byB1c2UgW2BNYXliZS53aXRoRGVmYXVsdGBdKE1heWJlI3dpdGhEZWZhdWx0KSB0byBoYW5kbGUgYmFkIGRhdGE6XG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9JbnQgXCI0MlwiKSA9PSA0MlxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvSW50IFwiYWJcIikgPT0gMFxuXG4tfVxudG9JbnQgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG50b0ludCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvSW50XG5cblxuey18IENvbnZlcnQgYW4gYEludGAgdG8gYSBgU3RyaW5nYC5cblxuICAgIFN0cmluZy5mcm9tSW50IDEyMyA9PSBcIjEyM1wiXG5cbiAgICBTdHJpbmcuZnJvbUludCAtNDIgPT0gXCItNDJcIlxuXG5DaGVjayBvdXQgW2BEZWJ1Zy50b1N0cmluZ2BdKERlYnVnI3RvU3RyaW5nKSB0byBjb252ZXJ0IF9hbnlfIHZhbHVlIHRvIGEgc3RyaW5nXG5mb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuXG4tfVxuZnJvbUludCA6IEludCAtPiBTdHJpbmdcbmZyb21JbnQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mcm9tTnVtYmVyXG5cblxuXG4tLSBGTE9BVCBDT05WRVJTSU9OU1xuXG5cbnstfCBUcnkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZmxvYXQsIGZhaWxpbmcgb24gaW1wcm9wZXJseSBmb3JtYXR0ZWQgc3RyaW5ncy5cblxuICAgIFN0cmluZy50b0Zsb2F0IFwiMTIzXCIgPT0gSnVzdCAxMjMuMFxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCItNDJcIiA9PSBKdXN0IC00Mi4wXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIjMuMVwiID09IEp1c3QgMy4xXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIjMxYVwiID09IE5vdGhpbmdcblxuSWYgeW91IGFyZSBleHRyYWN0aW5nIGEgbnVtYmVyIGZyb20gc29tZSByYXcgdXNlciBpbnB1dCwgeW91IHdpbGwgdHlwaWNhbGx5XG53YW50IHRvIHVzZSBbYE1heWJlLndpdGhEZWZhdWx0YF0oTWF5YmUjd2l0aERlZmF1bHQpIHRvIGhhbmRsZSBiYWQgZGF0YTpcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0Zsb2F0IFwiNDIuNVwiKSA9PSA0Mi41XG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9GbG9hdCBcImNhdHNcIikgPT0gMFxuXG4tfVxudG9GbG9hdCA6IFN0cmluZyAtPiBNYXliZSBGbG9hdFxudG9GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvRmxvYXRcblxuXG57LXwgQ29udmVydCBhIGBGbG9hdGAgdG8gYSBgU3RyaW5nYC5cblxuICAgIFN0cmluZy5mcm9tRmxvYXQgMTIzID09IFwiMTIzXCJcblxuICAgIFN0cmluZy5mcm9tRmxvYXQgLTQyID09IFwiLTQyXCJcblxuICAgIFN0cmluZy5mcm9tRmxvYXQgMy45ID09IFwiMy45XCJcblxuQ2hlY2sgb3V0IFtgRGVidWcudG9TdHJpbmdgXShEZWJ1ZyN0b1N0cmluZykgdG8gY29udmVydCBfYW55XyB2YWx1ZSB0byBhIHN0cmluZ1xuZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cblxuLX1cbmZyb21GbG9hdCA6IEZsb2F0IC0+IFN0cmluZ1xuZnJvbUZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbU51bWJlclxuXG5cblxuLS0gQVJSQVkgQ09OVkVSU0lPTlNcblxuXG57LXwgQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzLlxuXG4gICAgdG9BcnJheSBcImFiY1wiID09IFsgJ2EnLCAnYicsICdjJyBdXG5cbiAgICB0b0FycmF5IFwi8J+ZiPCfmYnwn5mKXCIgPT0gWyAn8J+ZiCcsICfwn5mJJywgJ/CfmYonIF1cblxuLX1cbnRvQXJyYXkgOiBTdHJpbmcgLT4gQXJyYXkgQ2hhclxudG9BcnJheSBzdHJpbmcgPVxuICAgIGZvbGRsIEFycmF5LnB1c2hMYXN0IFtdIHN0cmluZ1xuXG5cbnstfCBDb252ZXJ0IGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgaW50byBhIFN0cmluZy5cbiAgICBcbiAgICBmcm9tQXJyYXkgWyAnYScsICdiJywgJ2MnIF0gPT0gXCJhYmNcIlxuXG4gICAgZnJvbUFycmF5IFsgJ/CfmYgnLCAn8J+ZiScsICfwn5mKJyBdID09IFwi8J+ZiPCfmYnwn5mKXCJcblxuLX1cbmZyb21BcnJheSA6IEFycmF5IENoYXIgLT4gU3RyaW5nXG5mcm9tQXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mcm9tQXJyYXlcblxuXG5cbi0tIENIQVIgQ09OVkVSU0lPTlNcblxuXG57LXwgQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBnaXZlbiBjaGFyYWN0ZXIuXG5cbiAgICBmcm9tQ2hhciAnYScgPT0gXCJhXCJcblxuLX1cbmZyb21DaGFyIDogQ2hhciAtPiBTdHJpbmdcbmZyb21DaGFyIGNoYXIgPVxuICAgIHB1c2hGaXJzdCBjaGFyIFwiXCJcblxuXG57LXwgQWRkIGEgY2hhcmFjdGVyIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSBzdHJpbmcuXG5cbiAgICBwdXNoRmlyc3QgJ1QnIFwiaGUgdHJ1dGggaXMgb3V0IHRoZXJlXCIgPT0gXCJUaGUgdHJ1dGggaXMgb3V0IHRoZXJlXCJcblxuLX1cbnB1c2hGaXJzdCA6IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucHVzaEZpcnN0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcucHVzaEZpcnN0XG5cblxuey18IEFkZCBhIGNoYXJhY3RlciB0byB0aGUgZW5kIG9mIGEgc3RyaW5nLlxuXG4gICAgcHVzaExhc3QgJ1QnIFwiaGUgdHJ1dGggaXMgb3V0IHRoZXJlXCIgPT0gXCJoZSB0cnV0aCBpcyBvdXQgdGhlcmVUXCJcblxuLX1cbnB1c2hMYXN0IDogQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wdXNoTGFzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnB1c2hMYXN0XG5cblxuey18IFNwbGl0IGEgbm9uLWVtcHR5IHN0cmluZyBpbnRvIGl0cyBmaXJzdCBjaGFyYWN0ZXIgYW5kIGl0cyByZW1haW5pbmcgY2hhcmFjdGVycy4gVGhpcyBsZXRzIHlvdVxucGF0dGVybiBtYXRjaCBvbiBzdHJpbmdzIGV4YWN0bHkgYXMgeW91IHdvdWxkIHdpdGggYXJyYXlzLlxuXG4gICAgcG9wRmlyc3QgXCJhYmNcIiA9PSBKdXN0IHsgZmlyc3QgPSAnYScsIHJlc3QgPSBcImJjXCIgfVxuXG4gICAgcG9wRmlyc3QgXCJcIiA9PSBOb3RoaW5nXG5cbi19XG5wb3BGaXJzdCA6IFN0cmluZyAtPiBNYXliZSB7IGZpcnN0IDogQ2hhciwgcmVzdCA6IFN0cmluZyB9XG5wb3BGaXJzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnBvcEZpcnN0XG5cblxuey18IFNwbGl0IGEgbm9uLWVtcHR5IHN0cmluZyBpbnRvIGl0cyBsYXN0IGNoYXJhY3RlciBhbmQgaXRzIHJlbWFpbmluZyBjaGFyYWN0ZXJzLiBUaGlzIGxldHMgeW91XG5wYXR0ZXJuIG1hdGNoIG9uIHN0cmluZ3MgZXhhY3RseSBhcyB5b3Ugd291bGQgd2l0aCBhcnJheXMuXG5cbiAgICBwb3BMYXN0IFwiYWJjXCIgPT0gSnVzdCB7IGZpcnN0ID0gJ2MnLCByZXN0ID0gXCJhYlwiIH1cblxuICAgIHBvcExhc3QgXCJcIiA9PSBOb3RoaW5nXG5cbi19XG5wb3BMYXN0IDogU3RyaW5nIC0+IE1heWJlIHsgbGFzdCA6IENoYXIsIHJlc3QgOiBTdHJpbmcgfVxucG9wTGFzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnBvcExhc3RcblxuXG4tLSBISUdIRVItT1JERVIgRlVOQ1RJT05TXG5cblxuey18IFRyYW5zZm9ybSBldmVyeSBjaGFyYWN0ZXIgaW4gYSBzdHJpbmdcblxuICAgIG1hcFxuICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICBpZiBjID09ICcvJyB0aGVuXG4gICAgICAgICAgICAgICAgJy4nXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjXG4gICAgICAgIClcbiAgICAgICAgXCJhL2IvY1wiXG4gICAgICAgID09IFwiYS5iLmNcIlxuXG4tfVxubWFwIDogKENoYXIgLT4gQ2hhcikgLT4gU3RyaW5nIC0+IFN0cmluZ1xubWFwIGZuIHN0ciA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcY2hhciBhY2MgLT5cbiAgICAgICAgICAgIHB1c2hMYXN0IChmbiBjaGFyKSBhY2NcbiAgICAgICAgKVxuICAgICAgICBcIlwiXG4gICAgICAgIHN0clxuXG5cbnstfCBLZWVwIG9ubHkgdGhlIGNoYXJhY3RlcnMgdGhhdCBwYXNzIHRoZSB0ZXN0LlxuXG4gICAga2VlcElmIGlzRGlnaXQgXCJSMi1EMlwiID09IFwiMjJcIlxuXG4tfVxua2VlcElmIDogKENoYXIgLT4gQm9vbCkgLT4gU3RyaW5nIC0+IFN0cmluZ1xua2VlcElmIGlzR29vZCBzdHIgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGNoYXIgYWNjIC0+XG4gICAgICAgICAgICBpZiBpc0dvb2QgY2hhciB0aGVuXG4gICAgICAgICAgICAgICAgcHVzaExhc3QgY2hhciBhY2NcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFjY1xuICAgICAgICApXG4gICAgICAgIFwiXCJcbiAgICAgICAgc3RyXG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBiZWdpbm5pbmcuXG5cbiAgICBmb2xkbCBjb25zIFwiXCIgXCJ0aW1lXCIgPT0gXCJlbWl0XCJcblxuLX1cbmZvbGRsIDogKENoYXIgLT4gYiAtPiBiKSAtPiBiIC0+IFN0cmluZyAtPiBiXG5mb2xkbCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZvbGRsXG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBlbmQuXG5cbiAgICBmb2xkciBjb25zIFwiXCIgXCJ0aW1lXCIgPT0gXCJ0aW1lXCJcblxuLX1cbmZvbGRyIDogKENoYXIgLT4gYiAtPiBiKSAtPiBiIC0+IFN0cmluZyAtPiBiXG5mb2xkciA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZvbGRyXG5cblxuey18IERldGVybWluZSB3aGV0aGVyIF9hbnlfIGNoYXJhY3RlcnMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFueSBpc0RpZ2l0IFwiOTAyMTBcIiA9PSBUcnVlXG5cbiAgICBhbnkgaXNEaWdpdCBcIlIyLUQyXCIgPT0gVHJ1ZVxuXG4gICAgYW55IGlzRGlnaXQgXCJoZWFydFwiID09IEZhbHNlXG5cbiAgICBhbnkgaXNEaWdpdCBcIlwiID09IEZhbHNlXG5cbi19XG5hbnkgOiAoQ2hhciAtPiBCb29sKSAtPiBTdHJpbmcgLT4gQm9vbFxuYW55ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuYW55XG5cblxuey18IERldGVybWluZSB3aGV0aGVyIF9hbGxfIGNoYXJhY3RlcnMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFsbCBpc0RpZ2l0IFwiOTAyMTBcIiA9PSBUcnVlXG5cbiAgICBhbGwgaXNEaWdpdCBcIlIyLUQyXCIgPT0gRmFsc2VcblxuICAgIGFsbCBpc0RpZ2l0IFwiaGVhcnRcIiA9PSBGYWxzZVxuXG4gICAgYWxsIGlzRGlnaXQgXCJcIiA9IFRydWVcblxuLX1cbmFsbCA6IChDaGFyIC0+IEJvb2wpIC0+IFN0cmluZyAtPiBCb29sXG5hbGwgaXNHb29kIHN0ciA9XG4gICAgbm90IChhbnkgKG5vdCA8PCBpc0dvb2QpIHN0cilcblxuXG4tLSBVTklUU1xuXG5cbnstfCBHZXQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXIgdW5pdHMgaW4gYSBzdHJpbmcuIEFzIHN0cmluZ3MgYXJlLCBlc3NlbnRpYWxseSxcbmFycmF5cyBvZiBjaGFyYWN0ZXIgdW5pdHMsIHRoaXMgaXMgYSBjb25zdGFudCB0aW1lIG9wZXJhdGlvbi5cbi19XG51bml0TGVuZ3RoIDogU3RyaW5nIC0+IEludFxudW5pdExlbmd0aCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnVuaXRMZW5ndGhcblxuXG57LXwgUmV0cmlldmUgdGhlIGNoYXJhY3RlciB1bml0IGF0IGEgZ2l2ZW4gaW5kZXgsIG9yIGBOb3RoaW5nYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbkEgbmVnYXRpdmUgaW5kZXggdXNlcyB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXG4gICAgZ2V0VW5pdCAxIFwiYWJjXCIgPT0gSnVzdCAnYSdcbiAgICBcbiAgICBnZXRVbml0IDEwIFwiYWJjXCIgPT0gTm90aGluZ1xuICAgIFxuICAgIGdldFVuaXQgLTEgXCJhYmNcIiA9PSBKdXN0ICdjJ1xuXG4tfVxuZ2V0VW5pdCA6IEludCAtPiBTdHJpbmcgLT4gTWF5YmUgQ2hhclxuZ2V0VW5pdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmdldFVuaXRcblxuXG57LXwgUmVkdWNlIGEgc3RyaW5nIGZyb20gdGhlIGJlZ2lubmluZy4gVGhlIGdpdmVuIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBjaGFyYWN0ZXIgdW5pdHMgaW5zdGVhZFxub2YgYSBjb2RlIHBvaW50LCBtZWFuaW5nIHRoYXQgdGhlIHByb3ZpZGVkIGBDaGFyYCBjb3VsZCBwb3NzaWJseSByZXByZXNlbnQgb25lIGhhbGYgb2YgYSBmdWxsXG5jaGFyYWN0ZXIuXG5cbiAgICBmb2xkbFVuaXRzIHB1c2hGaXJzdCBcIlwiIFwidGltZVwiID09IFwiZW1pdFwiXG4tfVxuZm9sZGxVbml0cyA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZGxVbml0cyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZvbGRsVW5pdHNcblxuXG57LXwgUmVkdWNlIGEgc3RyaW5nIGZyb20gdGhlIGVuZC4gVGhlIGdpdmVuIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBjaGFyYWN0ZXIgdW5pdHMgaW5zdGVhZFxub2YgYSBjb2RlIHBvaW50LCBtZWFuaW5nIHRoYXQgdGhlIHByb3ZpZGVkIGBDaGFyYCBjb3VsZCBwb3NzaWJseSByZXByZXNlbnQgb25lIGhhbGYgb2YgYSBmdWxsXG5jaGFyYWN0ZXIuXG5cbiAgICBmb2xkclVuaXRzIHB1c2hGaXJzdCBcIlwiIFwidGltZVwiID09IFwidGltZVwiXG4tfVxuZm9sZHJVbml0cyA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZHJVbml0cyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZvbGRyVW5pdHNcbiIsCiAgICAgICAgIm1vZHVsZSBKc29uLkVuY29kZSBleHBvc2luZ1xuICAgICggZW5jb2RlLCBWYWx1ZVxuICAgICwgc3RyaW5nLCBpbnQsIGZsb2F0LCBib29sLCBudWxsXG4gICAgLCBhcnJheSwgc2V0XG4gICAgLCBvYmplY3QsIGRpY3RcbiAgICApXG5cbnstfCBGdW5jdGlvbnMgZm9yIHR1cm5pbmcgR3JlbiB2YWx1ZXMgaW50byBKc29uIHZhbHVlcy5cblxuXG5AZG9jcyBlbmNvZGUsIFZhbHVlXG5cblxuIyMgUHJpbWl0aXZlc1xuXG5AZG9jcyBzdHJpbmcsIGludCwgZmxvYXQsIGJvb2wsIG51bGxcblxuXG4jIyBBcnJheXNcblxuQGRvY3MgYXJyYXksIHNldFxuXG5cbiMjIE9iamVjdHNcblxuQGRvY3Mgb2JqZWN0LCBkaWN0XG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuaW1wb3J0IFNldCBleHBvc2luZyAoU2V0KVxuaW1wb3J0IFN0cmluZyBleHBvc2luZyAoU3RyaW5nKVxuaW1wb3J0IEdyZW4uS2VybmVsLkpzb25cblxuXG5cbi0tIEVOQ09ERVxuXG5cbnstfCBSZXByZXNlbnRzIGEgSmF2YVNjcmlwdCB2YWx1ZS5cbi19XG50eXBlIFZhbHVlXG4gICAgPSBWYWx1ZVxuXG5cbnstfCBDb252ZXJ0IGEgYFZhbHVlYCBpbnRvIGEgcHJldHRpZmllZCBzdHJpbmcuIFRoZSBmaXJzdCBhcmd1bWVudCBzcGVjaWZpZXNcbnRoZSBhbW91bnQgb2YgaW5kZW50YXRpb24gaW4gdGhlIHJlc3VsdGluZyBzdHJpbmcuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICB0b20gOiBFbmNvZGUuVmFsdWVcbiAgICB0b20gPVxuICAgICAgICBFbmNvZGUub2JqZWN0XG4gICAgICAgICAgICBbIHsga2V5ID0gXCJuYW1lXCIsIHZhbHVlID0gRW5jb2RlLnN0cmluZyBcIlRvbVwiIH1cbiAgICAgICAgICAgICwgeyBrZXkgPSBcImFnZVwiLCB2YWx1ZSA9IEVuY29kZS5pbnQgNDIgKVxuICAgICAgICAgICAgXVxuXG4gICAgY29tcGFjdCA9XG4gICAgICAgIEVuY29kZS5lbmNvZGUgMCB0b21cblxuICAgIC0tIHtcIm5hbWVcIjpcIlRvbVwiLFwiYWdlXCI6NDJ9XG4gICAgcmVhZGFibGUgPVxuICAgICAgICBFbmNvZGUuZW5jb2RlIDQgdG9tXG5cbiAgICAtLSB7XG4gICAgLS0gICAgIFwibmFtZVwiOiBcIlRvbVwiLFxuICAgIC0tICAgICBcImFnZVwiOiA0MlxuICAgIC0tIH1cblxuLX1cbmVuY29kZSA6IEludCAtPiBWYWx1ZSAtPiBTdHJpbmdcbmVuY29kZSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5lbmNvZGVcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgVHVybiBhIGBTdHJpbmdgIGludG8gYSBKU09OIHN0cmluZy5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBzdHJpbmcpXG5cblxuICAgIC0tIGVuY29kZSAwIChzdHJpbmcgXCJcIikgICAgICA9PSBcIlxcXCJcXFwiXCJcbiAgICAtLSBlbmNvZGUgMCAoc3RyaW5nIFwiYWJjXCIpICAgPT0gXCJcXFwiYWJjXFxcIlwiXG4gICAgLS0gZW5jb2RlIDAgKHN0cmluZyBcImhlbGxvXCIpID09IFwiXFxcImhlbGxvXFxcIlwiXG5cbi19XG5zdHJpbmcgOiBTdHJpbmcgLT4gVmFsdWVcbnN0cmluZyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuey18IFR1cm4gYW4gYEludGAgaW50byBhIEpTT04gbnVtYmVyLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIGludClcblxuXG4gICAgLS0gZW5jb2RlIDAgKGludCA0MikgPT0gXCI0MlwiXG4gICAgLS0gZW5jb2RlIDAgKGludCAtNykgPT0gXCItN1wiXG4gICAgLS0gZW5jb2RlIDAgKGludCAwKSAgPT0gXCIwXCJcblxuLX1cbmludCA6IEludCAtPiBWYWx1ZVxuaW50ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG57LXwgVHVybiBhIGBGbG9hdGAgaW50byBhIEpTT04gbnVtYmVyLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIGZsb2F0KVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoZmxvYXQgMy4xNCkgICAgID09IFwiMy4xNFwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IDEuNjE4KSAgICA9PSBcIjEuNjE4XCJcbiAgICAtLSBlbmNvZGUgMCAoZmxvYXQgLTQyKSAgICAgID09IFwiLTQyXCJcbiAgICAtLSBlbmNvZGUgMCAoZmxvYXQgTmFOKSAgICAgID09IFwibnVsbFwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IEluZmluaXR5KSA9PSBcIm51bGxcIlxuXG4qKk5vdGU6KiogRmxvYXRpbmcgcG9pbnQgbnVtYmVycyBhcmUgZGVmaW5lZCBpbiB0aGUgW0lFRUUgNzU0IHN0YW5kYXJkXVtpZWVlXVxud2hpY2ggaXMgaGFyZGNvZGVkIGludG8gYWxtb3N0IGFsbCBDUFVzLiBUaGlzIHN0YW5kYXJkIGFsbG93cyBgSW5maW5pdHlgIGFuZFxuYE5hTmAuIFtUaGUgSlNPTiBzcGVjXVtqc29uXSBkb2VzIG5vdCBpbmNsdWRlIHRoZXNlIHZhbHVlcywgc28gd2UgZW5jb2RlIHRoZW1cbmJvdGggYXMgYG51bGxgLlxuXG5baWVlZV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lFRUVfNzU0XG5banNvbl06IGh0dHBzOi8vd3d3Lmpzb24ub3JnL1xuXG4tfVxuZmxvYXQgOiBGbG9hdCAtPiBWYWx1ZVxuZmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cbnstfCBUdXJuIGEgYEJvb2xgIGludG8gYSBKU09OIGJvb2xlYW4uXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGJvb2wsIGVuY29kZSlcblxuXG4gICAgLS0gZW5jb2RlIDAgKGJvb2wgVHJ1ZSkgID09IFwidHJ1ZVwiXG4gICAgLS0gZW5jb2RlIDAgKGJvb2wgRmFsc2UpID09IFwiZmFsc2VcIlxuXG4tfVxuYm9vbCA6IEJvb2wgLT4gVmFsdWVcbmJvb2wgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cblxuLS0gTlVMTFNcblxuXG57LXwgQ3JlYXRlIGEgSlNPTiBgbnVsbGAgdmFsdWUuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgbnVsbClcblxuXG4gICAgLS0gZW5jb2RlIDAgbnVsbCA9PSBcIm51bGxcIlxuXG4tfVxubnVsbCA6IFZhbHVlXG5udWxsID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmVuY29kZU51bGxcblxuXG5cbi0tIEFSUkFZU1xuXG5cbnstfCBUdXJuIGEgYEFycmF5YCBpbnRvIGEgSlNPTiBhcnJheS5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGUgZXhwb3NpbmcgKGFycmF5LCBib29sLCBlbmNvZGUsIGludCwgc3RyaW5nKVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoYXJyYXkgaW50IFsxLDMsNF0pICAgICAgID09IFwiWzEsMyw0XVwiXG4gICAgLS0gZW5jb2RlIDAgKGFycmF5IGJvb2wgW1RydWUsRmFsc2VdKSA9PSBcIlt0cnVlLGZhbHNlXVwiXG4gICAgLS0gZW5jb2RlIDAgKGFycmF5IHN0cmluZyBbXCJhXCIsXCJiXCJdKSAgPT0gXCJcIlwiW1wiYVwiLFwiYlwiXVwiXCJcIlxuXG4tfVxuYXJyYXkgOiAoYSAtPiBWYWx1ZSkgLT4gQXJyYXkgYSAtPiBWYWx1ZVxuYXJyYXkgZnVuYyBlbnRyaWVzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKEFycmF5LmZvbGRsIChHcmVuLktlcm5lbC5Kc29uLmFkZEVudHJ5IGZ1bmMpIChHcmVuLktlcm5lbC5Kc29uLmVtcHR5QXJyYXkge30pIGVudHJpZXMpXG5cblxuey18IFR1cm4gYW4gYFNldGAgaW50byBhIEpTT04gYXJyYXkuXG4tfVxuc2V0IDogKGEgLT4gVmFsdWUpIC0+IFNldCBhIC0+IFZhbHVlXG5zZXQgZnVuYyBlbnRyaWVzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKFNldC5mb2xkbCAoR3Jlbi5LZXJuZWwuSnNvbi5hZGRFbnRyeSBmdW5jKSAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eUFycmF5IHt9KSBlbnRyaWVzKVxuXG5cblxuLS0gT0JKRUNUU1xuXG5cbnstfCBDcmVhdGUgYSBKU09OIG9iamVjdC5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIHRvbSA6IEVuY29kZS5WYWx1ZVxuICAgIHRvbSA9XG4gICAgICAgIEVuY29kZS5vYmplY3RcbiAgICAgICAgICAgIFsgeyBrZXkgPSBcIm5hbWVcIiwgdmFsdWUgPSBFbmNvZGUuc3RyaW5nIFwiVG9tXCIgfVxuICAgICAgICAgICAgLCB7IGtleSA9IFwiYWdlXCIsIHZhbHVlID0gRW5jb2RlLmludCA0MiB9XG4gICAgICAgICAgICBdXG5cbiAgICAtLSBFbmNvZGUuZW5jb2RlIDAgdG9tID09IFwiXCJcIntcIm5hbWVcIjpcIlRvbVwiLFwiYWdlXCI6NDJ9XCJcIlwiXG5cbi19XG5vYmplY3QgOiBBcnJheSB7IGtleSA6IFN0cmluZywgdmFsdWUgOiBWYWx1ZSB9IC0+IFZhbHVlXG5vYmplY3QgcGFpcnMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuICAgICAgICAoQXJyYXkuZm9sZGxcbiAgICAgICAgICAgIChcXHsga2V5LCB2YWx1ZSB9IG9iaiAtPiBHcmVuLktlcm5lbC5Kc29uLmFkZEZpZWxkIGtleSB2YWx1ZSBvYmopXG4gICAgICAgICAgICAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eU9iamVjdCB7fSlcbiAgICAgICAgICAgIHBhaXJzXG4gICAgICAgIClcblxuXG57LXwgVHVybiBhIGBEaWN0YCBpbnRvIGEgSlNPTiBvYmplY3QuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICBwZW9wbGUgOiBEaWN0IFN0cmluZyBJbnRcbiAgICBwZW9wbGUgPVxuICAgICAgICBEaWN0LmZyb21BcnJheSBbIHsga2V5ID0gXCJUb21cIiwgdmFsdWUgPSA0MiB9LCB7IGtleSA9IFwiU3VlXCIsIHZhbHVlID0gMzggfSBdXG5cbiAgICAtLSBFbmNvZGUuZW5jb2RlIDAgKEVuY29kZS5kaWN0IGlkZW50aXR5IEVuY29kZS5pbnQgcGVvcGxlKVxuICAgIC0tICAgPT0gXCJcIlwie1wiVG9tXCI6NDIsXCJTdWVcIjozOH1cIlwiXCJcblxuLX1cbmRpY3QgOiAoayAtPiBTdHJpbmcpIC0+ICh2IC0+IFZhbHVlKSAtPiBEaWN0IGsgdiAtPiBWYWx1ZVxuZGljdCB0b0tleSB0b1ZhbHVlIGRpY3Rpb25hcnkgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuICAgICAgICAoRGljdC5mb2xkbFxuICAgICAgICAgICAgKFxca2V5IHZhbHVlIG9iaiAtPiBHcmVuLktlcm5lbC5Kc29uLmFkZEZpZWxkICh0b0tleSBrZXkpICh0b1ZhbHVlIHZhbHVlKSBvYmopXG4gICAgICAgICAgICAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eU9iamVjdCB7fSlcbiAgICAgICAgICAgIGRpY3Rpb25hcnlcbiAgICAgICAgKVxuIiwKICAgICAgICAibW9kdWxlIEpzb24uRGVjb2RlIGV4cG9zaW5nXG4gICAgKCBEZWNvZGVyLCBzdHJpbmcsIGJvb2wsIGludCwgZmxvYXRcbiAgICAsIG51bGxhYmxlLCBhcnJheSwgZGljdCwga2V5VmFsdWVQYWlycywgb25lT3JNb3JlXG4gICAgLCBmaWVsZCwgYXQsIGluZGV4XG4gICAgLCBtYXliZSwgb25lT2ZcbiAgICAsIGRlY29kZVN0cmluZywgZGVjb2RlVmFsdWUsIFZhbHVlLCBFcnJvciguLiksIGVycm9yVG9TdHJpbmdcbiAgICAsIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgbWFwNiwgbWFwNywgbWFwOFxuICAgICwgbGF6eSwgdmFsdWUsIG51bGwsIHN1Y2NlZWQsIGZhaWwsIGFuZFRoZW5cbiAgICApXG5cbnstfCBUdXJuIEpTT04gdmFsdWVzIGludG8gR3JlbiB2YWx1ZXMuIFdlJ3ZlIGluaGVyaXRlZCB0aGlzIGZyb20gRWxtLiBEZWZpbml0ZWx5IGNoZWNrIG91dCB0aGlzIFtpbnRybyB0b1xuSlNPTiBkZWNvZGVyc11bZ3VpZGVdIHRvIGdldCBhIGZlZWwgZm9yIGhvdyB0aGlzIGxpYnJhcnkgd29ya3MhXG5cbltndWlkZV06IGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2VmZmVjdHMvanNvbi5odG1sXG5cblxuQGRvY3MgRGVjb2Rlciwgc3RyaW5nLCBib29sLCBpbnQsIGZsb2F0XG5cblxuIyMgRGF0YSBTdHJ1Y3R1cmVzXG5cbkBkb2NzIG51bGxhYmxlLCBhcnJheSwgZGljdCwga2V5VmFsdWVQYWlycywgb25lT3JNb3JlXG5cblxuIyMgT2JqZWN0IFByaW1pdGl2ZXNcblxuQGRvY3MgZmllbGQsIGF0LCBpbmRleFxuXG5cbiMjIEluY29uc2lzdGVudCBTdHJ1Y3R1cmVcblxuQGRvY3MgbWF5YmUsIG9uZU9mXG5cblxuIyMgUnVuIERlY29kZXJzXG5cbkBkb2NzIGRlY29kZVN0cmluZywgZGVjb2RlVmFsdWUsIFZhbHVlLCBFcnJvciwgZXJyb3JUb1N0cmluZ1xuXG5cbiMjIE1hcHBpbmdcblxuQGRvY3MgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1LCBtYXA2LCBtYXA3LCBtYXA4XG5cblxuIyMgRmFuY3kgRGVjb2RpbmdcblxuQGRvY3MgbGF6eSwgdmFsdWUsIG51bGwsIHN1Y2NlZWQsIGZhaWwsIGFuZFRoZW5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG5pbXBvcnQgQ2hhclxuaW1wb3J0IFN0cmluZyBleHBvc2luZyAoU3RyaW5nKVxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgUmVzdWx0IGV4cG9zaW5nIChSZXN1bHQoLi4pKVxuaW1wb3J0IEdyZW4uS2VybmVsLkpzb25cbmltcG9ydCBKc29uLkVuY29kZVxuXG5cblxuLS0gUFJJTUlUSVZFU1xuXG5cbnstfCBBIHZhbHVlIHRoYXQga25vd3MgaG93IHRvIGRlY29kZSBKU09OIHZhbHVlcy5cblxuVGhlcmUgaXMgYSB3aG9sZSBzZWN0aW9uIGluIGBndWlkZS5lbG0tbGFuZy5vcmdgIGFib3V0IGRlY29kZXJzLCBzbyBbY2hlY2sgaXRcbm91dF0oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvaW50ZXJvcC9qc29uLmh0bWwpIGZvciBhIG1vcmUgY29tcHJlaGVuc2l2ZVxuaW50cm9kdWN0aW9uIVxuXG4tfVxudHlwZSBEZWNvZGVyIGFcbiAgICA9IERlY29kZXJcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBzdHJpbmcgaW50byBhbiBHcmVuIGBTdHJpbmdgLlxuXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcInRydWVcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCI0MlwiICAgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwiMy4xNFwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IE9rIFwiaGVsbG9cIlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJ7IFxcXCJoZWxsb1xcXCI6IDQyIH1cIiA9PSBFcnIgLi4uXG5cbi19XG5zdHJpbmcgOiBEZWNvZGVyIFN0cmluZ1xuc3RyaW5nID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZVN0cmluZ1xuXG5cbnstfCBEZWNvZGUgYSBKU09OIGJvb2xlYW4gaW50byBhbiBHcmVuIGBCb29sYC5cblxuICAgIGRlY29kZVN0cmluZyBib29sIFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBPayBUcnVlXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCI0MlwiICAgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBib29sIFwiXFxcImhlbGxvXFxcIlwiICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBib29sIFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuYm9vbCA6IERlY29kZXIgQm9vbFxuYm9vbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVCb29sXG5cblxuey18IERlY29kZSBhIEpTT04gbnVtYmVyIGludG8gYW4gR3JlbiBgSW50YC5cblxuICAgIGRlY29kZVN0cmluZyBpbnQgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiNDJcIiAgICAgICAgICAgICAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyBpbnQgXCIzLjE0XCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiXFxcImhlbGxvXFxcIlwiICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBpbnQgXCJ7IFxcXCJoZWxsb1xcXCI6IDQyIH1cIiA9PSBFcnIgLi4uXG5cbi19XG5pbnQgOiBEZWNvZGVyIEludFxuaW50ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUludFxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG51bWJlciBpbnRvIGFuIEdyZW4gYEZsb2F0YC5cblxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcInRydWVcIiAgICAgICAgICAgICAgPT0gRXJyIC4uXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwiNDJcIiAgICAgICAgICAgICAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gT2sgMy4xNFxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJ7IFxcXCJoZWxsb1xcXCI6IDQyIH1cIiA9PSBFcnIgLi4uXG5cbi19XG5mbG9hdCA6IERlY29kZXIgRmxvYXRcbmZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUZsb2F0XG5cblxuXG4tLSBEQVRBIFNUUlVDVFVSRVNcblxuXG57LXwgRGVjb2RlIGEgbnVsbGFibGUgSlNPTiB2YWx1ZSBpbnRvIGFuIEdyZW4gdmFsdWUuXG5cbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCIxM1wiICAgID09IE9rIChKdXN0IDEzKVxuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcIjQyXCIgICAgPT0gT2sgKEp1c3QgNDIpXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwibnVsbFwiICA9PSBPayBOb3RoaW5nXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwidHJ1ZVwiICA9PSBFcnIgLi5cblxuLX1cbm51bGxhYmxlIDogRGVjb2RlciBhIC0+IERlY29kZXIgKE1heWJlIGEpXG5udWxsYWJsZSBkZWNvZGVyID1cbiAgICBvbmVPZlxuICAgICAgICBbIG51bGwgTm90aGluZ1xuICAgICAgICAsIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgXVxuXG5cbnstfCBEZWNvZGUgYSBKU09OIGFycmF5IGludG8gYW4gR3JlbiBgQXJyYXlgLlxuXG4gICAgZGVjb2RlU3RyaW5nIChhcnJheSBpbnQpIFwiWzEsMiwzXVwiID09IE9rIFsgMSwgMiwgMyBdXG5cbiAgICBkZWNvZGVTdHJpbmcgKGFycmF5IGJvb2wpIFwiW3RydWUsZmFsc2VdXCIgPT0gT2sgWyBUcnVlLCBGYWxzZSBdXG5cbi19XG5hcnJheSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChBcnJheSBhKVxuYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlQXJyYXlcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBvYmplY3QgaW50byBhbiBHcmVuIGBEaWN0YC5cblxuICAgIGRlY29kZVN0cmluZyAoZGljdCBpbnQpIFwieyBcXFwiYWxpY2VcXFwiOiA0MiwgXFxcImJvYlxcXCI6IDk5IH1cIlxuICAgICAgICA9PSBPayAoRGljdC5lbXB0eSB8PiBEaWN0LnNldCBcImFsaWNlXCIgNDIgfD4gRGljdC5zZXQgXCJib2JcIiA5OSlcblxuSWYgeW91IG5lZWQgdGhlIGtleXMgKGxpa2UgYFwiYWxpY2VcImAgYW5kIGBcImJvYlwiYCkgYXZhaWxhYmxlIGluIHRoZSBgRGljdGBcbnZhbHVlcyBhcyB3ZWxsLCBJIHJlY29tbWVuZCB1c2luZyBhIChwcml2YXRlKSBpbnRlcm1lZGlhdGUgZGF0YSBzdHJ1Y3R1cmUgbGlrZVxuYEluZm9gIGluIHRoaXMgZXhhbXBsZTpcblxuICAgIG1vZHVsZSBVc2VyIGV4cG9zaW5nICggVXNlciwgZGVjb2RlciApXG5cbiAgICBpbXBvcnQgRGljdFxuICAgIGltcG9ydCBKc29uLkRlY29kZSBleHBvc2luZyAoLi4pXG5cbiAgICB0eXBlIGFsaWFzIFVzZXIgPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBoZWlnaHQgOiBGbG9hdFxuICAgICAgICAsIGFnZSA6IEludFxuICAgICAgICB9XG5cbiAgICBtYWtlVXNlciA6IFN0cmluZyAtPiBGbG9hdCAtPiBJbnQgLT4gVXNlclxuICAgIG1ha2VVc2VyIG5hbWUgaGVpZ2h0IGFnZSA9XG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgfVxuXG4gICAgZGVjb2RlciA6IERlY29kZXIgKERpY3QuRGljdCBTdHJpbmcgVXNlcilcbiAgICBkZWNvZGVyID1cbiAgICAgICAgbWFwIChEaWN0Lm1hcCBpbmZvVG9Vc2VyKSAoZGljdCBpbmZvRGVjb2RlcilcblxuICAgIHR5cGUgYWxpYXMgSW5mbyA9XG4gICAgICAgIHsgaGVpZ2h0IDogRmxvYXRcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgfVxuXG4gICAgbWFrZUluZm8gOiBGbG9hdCAtPiBJbnQgLT4gSW5mb1xuICAgIG1ha2VJbmZvIGhlaWdodCBhZ2UgPVxuICAgICAgICB7IGhlaWdodCA9IGhlaWdodFxuICAgICAgICAsIGFnZSA9IGFnZVxuICAgICAgICB9XG5cbiAgICBpbmZvRGVjb2RlciA6IERlY29kZXIgSW5mb1xuICAgIGluZm9EZWNvZGVyID1cbiAgICAgICAgbWFwMiBtYWtlSW5mb1xuICAgICAgICAgICAgKGZpZWxkIFwiaGVpZ2h0XCIgZmxvYXQpXG4gICAgICAgICAgICAoZmllbGQgXCJhZ2VcIiBpbnQpXG5cbiAgICBpbmZvVG9Vc2VyIDogU3RyaW5nIC0+IEluZm8gLT4gVXNlclxuICAgIGluZm9Ub1VzZXIgbmFtZSB7IGhlaWdodCwgYWdlIH0gPVxuICAgICAgICBtYWtlVXNlciBuYW1lIGhlaWdodCBhZ2VcblxuU28gbm93IEpTT04gbGlrZSBgeyBcImFsaWNlXCI6IHsgaGVpZ2h0OiAxLjYsIGFnZTogMzMgfX1gIGFyZSB0dXJuZWQgaW50b1xuZGljdGlvbmFyeSB2YWx1ZXMgbGlrZSBgRGljdC5zaW5nbGV0b24gXCJhbGljZVwiIChVc2VyIFwiYWxpY2VcIiAxLjYgMzMpYCBpZlxueW91IG5lZWQgdGhhdC5cblxuLX1cbmRpY3QgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoRGljdCBTdHJpbmcgYSlcbmRpY3QgZGVjb2RlciA9XG4gICAgbWFwIChcXHBhaXJzIC0+IEFycmF5LmZvbGRsIChcXHAgY29sbCAtPiBEaWN0LnNldCBwLmtleSBwLnZhbHVlIGNvbGwpIERpY3QuZW1wdHkgcGFpcnMpIChrZXlWYWx1ZVBhaXJzIGRlY29kZXIpXG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0IGludG8gYW4gR3JlbiBgQXJyYXlgIG9mIHBhaXJzLlxuXG4gICAgZGVjb2RlU3RyaW5nIChrZXlWYWx1ZVBhaXJzIGludCkgXCJ7IFxcXCJhbGljZVxcXCI6IDQyLCBcXFwiYm9iXFxcIjogOTkgfVwiXG4gICAgICAgID09IE9rIFsgeyBrZXkgPSBcImFsaWNlXCIsIHZhbHVlID0gNDIgfSwgeyBrZXkgPSBcImJvYlwiLCB2YWx1ZSA9IDk5IH0gXVxuXG4tfVxua2V5VmFsdWVQYWlycyA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChBcnJheSB7IGtleSA6IFN0cmluZywgdmFsdWUgOiBhIH0pXG5rZXlWYWx1ZVBhaXJzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUtleVZhbHVlUGFpcnNcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSB0aGF0IGhhcyBvbmUgb3IgbW9yZSBlbGVtZW50cy4gVGhpcyBjb21lcyB1cCBpZiB5b3VcbndhbnQgdG8gZW5hYmxlIGRyYWctYW5kLWRyb3Agb2YgZmlsZXMgaW50byB5b3VyIGFwcGxpY2F0aW9uLiBZb3Ugd291bGQgcGFpclxudGhpcyBmdW5jdGlvbiB3aXRoIFtgZWxtL2ZpbGVgXSgpIHRvIHdyaXRlIGEgYGRyb3BEZWNvZGVyYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgRmlsZSBleHBvc2luZyAoRmlsZSlcbiAgICBpbXBvcnQgSnNvbi5EZWNvZGVyIGFzIERcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gR290RmlsZXMgRmlsZSAoQXJyYXkgRmlsZXMpXG5cbiAgICBpbnB1dERlY29kZXIgOiBELkRlY29kZXIgTXNnXG4gICAgaW5wdXREZWNvZGVyID1cbiAgICAgICAgRC5hdCBbIFwiZGF0YVRyYW5zZmVyXCIsIFwiZmlsZXNcIiBdIChELm9uZU9yTW9yZSBHb3RGaWxlcyBGaWxlLmRlY29kZXIpXG5cblRoaXMgY2FwdHVyZXMgdGhlIGZhY3QgdGhhdCB5b3UgY2FuIG5ldmVyIGRyYWctYW5kLWRyb3AgemVybyBmaWxlcy5cblxuLX1cbm9uZU9yTW9yZSA6IChhIC0+IEFycmF5IGEgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIHZhbHVlXG5vbmVPck1vcmUgdG9WYWx1ZSBkZWNvZGVyID1cbiAgICBhcnJheSBkZWNvZGVyXG4gICAgICAgIHw+IGFuZFRoZW4gKG9uZU9yTW9yZUhlbHAgdG9WYWx1ZSlcblxuXG5vbmVPck1vcmVIZWxwIDogKGEgLT4gQXJyYXkgYSAtPiB2YWx1ZSkgLT4gQXJyYXkgYSAtPiBEZWNvZGVyIHZhbHVlXG5vbmVPck1vcmVIZWxwIHRvVmFsdWUgeHMgPVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgeHMgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZmFpbCBcImEgQVJSQVkgd2l0aCBhdCBsZWFzdCBPTkUgZWxlbWVudFwiXG5cbiAgICAgICAgSnVzdCB5IC0+XG4gICAgICAgICAgICBzdWNjZWVkICh0b1ZhbHVlIHkgKEFycmF5LnNsaWNlIDEgKEFycmF5Lmxlbmd0aCB4cykgeHMpKVxuXG5cblxuLS0gT0JKRUNUIFBSSU1JVElWRVNcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBvYmplY3QsIHJlcXVpcmluZyBhIHBhcnRpY3VsYXIgZmllbGQuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwieFwiIGludCkgXCJ7IFxcXCJ4XFxcIjogMyB9XCIgPT0gT2sgM1xuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieFxcXCI6IDMsIFxcXCJ5XFxcIjogNCB9XCIgPT0gT2sgM1xuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieFxcXCI6IHRydWUgfVwiXG4gICAgICAgID09IEVyclxuICAgICAgICAuLi4gZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieVxcXCI6IDQgfVwiXG4gICAgICAgID09IEVyclxuICAgICAgICAuLi4gZGVjb2RlU3RyaW5nIChmaWVsZCBcIm5hbWVcIiBzdHJpbmcpIFwieyBcXFwibmFtZVxcXCI6IFxcXCJ0b21cXFwiIH1cIlxuICAgICAgICA9PSBPayBcInRvbVwiXG5cblRoZSBvYmplY3QgX2Nhbl8gaGF2ZSBvdGhlciBmaWVsZHMuIExvdHMgb2YgdGhlbSEgVGhlIG9ubHkgdGhpbmcgdGhpcyBkZWNvZGVyXG5jYXJlcyBhYm91dCBpcyBpZiBgeGAgaXMgcHJlc2VudCBhbmQgdGhhdCB0aGUgdmFsdWUgdGhlcmUgaXMgYW4gYEludGAuXG5cbkNoZWNrIG91dCBbYG1hcDJgXSgjbWFwMikgdG8gc2VlIGhvdyB0byBkZWNvZGUgbXVsdGlwbGUgZmllbGRzIVxuXG4tfVxuZmllbGQgOiBTdHJpbmcgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYVxuZmllbGQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlRmllbGRcblxuXG57LXwgRGVjb2RlIGEgbmVzdGVkIEpTT04gb2JqZWN0LCByZXF1aXJpbmcgY2VydGFpbiBmaWVsZHMuXG5cbiAgICBqc29uID0gXCJcIlwieyBcInBlcnNvblwiOiB7IFwibmFtZVwiOiBcInRvbVwiLCBcImFnZVwiOiA0MiB9IH1cIlwiXCJcblxuICAgIGRlY29kZVN0cmluZyAoYXQgW1wicGVyc29uXCIsIFwibmFtZVwiXSBzdHJpbmcpIGpzb24gID09IE9rIFwidG9tXCJcbiAgICBkZWNvZGVTdHJpbmcgKGF0IFtcInBlcnNvblwiLCBcImFnZVwiIF0gaW50ICAgKSBqc29uICA9PSBPayA0MlxuXG5UaGlzIGlzIHJlYWxseSBqdXN0IGEgc2hvcnRoYW5kIGZvciBzYXlpbmcgdGhpbmdzIGxpa2U6XG5cbiAgICBmaWVsZCBcInBlcnNvblwiIChmaWVsZCBcIm5hbWVcIiBzdHJpbmcpID09IGF0IFsgXCJwZXJzb25cIiwgXCJuYW1lXCIgXSBzdHJpbmdcblxuLX1cbmF0IDogQXJyYXkgU3RyaW5nIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGFcbmF0IGZpZWxkcyBkZWNvZGVyID1cbiAgICBBcnJheS5mb2xkciBmaWVsZCBkZWNvZGVyIGZpZWxkc1xuXG5cbnstfCBEZWNvZGUgYSBKU09OIGFycmF5LCByZXF1aXJpbmcgYSBwYXJ0aWN1bGFyIGluZGV4LlxuXG4gICAganNvbiA9IFwiXCJcIlsgXCJhbGljZVwiLCBcImJvYlwiLCBcImNodWNrXCIgXVwiXCJcIlxuXG4gICAgZGVjb2RlU3RyaW5nIChpbmRleCAwIHN0cmluZykganNvbiAgPT0gT2sgXCJhbGljZVwiXG4gICAgZGVjb2RlU3RyaW5nIChpbmRleCAxIHN0cmluZykganNvbiAgPT0gT2sgXCJib2JcIlxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMiBzdHJpbmcpIGpzb24gID09IE9rIFwiY2h1Y2tcIlxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMyBzdHJpbmcpIGpzb24gID09IEVyciAuLi5cblxuLX1cbmluZGV4IDogSW50IC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGFcbmluZGV4ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUluZGV4XG5cblxuXG4tLSBXRUlSRCBTVFJVQ1RVUkVcblxuXG57LXwgSGVscGZ1bCBmb3IgZGVhbGluZyB3aXRoIG9wdGlvbmFsIGZpZWxkcy4gSGVyZSBhcmUgYSBmZXcgc2xpZ2h0bHkgZGlmZmVyZW50XG5leGFtcGxlczpcblxuICAgIGpzb24gPSBcIlwiXCJ7IFwibmFtZVwiOiBcInRvbVwiLCBcImFnZVwiOiA0MiB9XCJcIlwiXG5cbiAgICBkZWNvZGVTdHJpbmcgKG1heWJlIChmaWVsZCBcImFnZVwiICAgIGludCAgKSkganNvbiA9PSBPayAoSnVzdCA0MilcbiAgICBkZWNvZGVTdHJpbmcgKG1heWJlIChmaWVsZCBcIm5hbWVcIiAgIGludCAgKSkganNvbiA9PSBPayBOb3RoaW5nXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJoZWlnaHRcIiBmbG9hdCkpIGpzb24gPT0gT2sgTm90aGluZ1xuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcImFnZVwiICAgIChtYXliZSBpbnQgICkpIGpzb24gPT0gT2sgKEp1c3QgNDIpXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcIm5hbWVcIiAgIChtYXliZSBpbnQgICkpIGpzb24gPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJoZWlnaHRcIiAobWF5YmUgZmxvYXQpKSBqc29uID09IEVyciAuLi5cblxuTm90aWNlIHRoZSBsYXN0IGV4YW1wbGUhIEl0IGlzIHNheWluZyB3ZSBfbXVzdF8gaGF2ZSBhIGZpZWxkIG5hbWVkIGBoZWlnaHRgIGFuZFxudGhlIGNvbnRlbnQgX21heV8gYmUgYSBmbG9hdC4gVGhlcmUgaXMgbm8gYGhlaWdodGAgZmllbGQsIHNvIHRoZSBkZWNvZGVyIGZhaWxzLlxuXG5Qb2ludCBpcywgYG1heWJlYCB3aWxsIG1ha2UgZXhhY3RseSB3aGF0IGl0IGNvbnRhaW5zIGNvbmRpdGlvbmFsLiBGb3Igb3B0aW9uYWxcbmZpZWxkcywgdGhpcyBtZWFucyB5b3UgcHJvYmFibHkgd2FudCBpdCBfb3V0c2lkZV8gYSB1c2Ugb2YgYGZpZWxkYCBvciBgYXRgLlxuXG4tfVxubWF5YmUgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoTWF5YmUgYSlcbm1heWJlIGRlY29kZXIgPVxuICAgIG9uZU9mXG4gICAgICAgIFsgbWFwIEp1c3QgZGVjb2RlclxuICAgICAgICAsIHN1Y2NlZWQgTm90aGluZ1xuICAgICAgICBdXG5cblxuey18IFRyeSBhIGJ1bmNoIG9mIGRpZmZlcmVudCBkZWNvZGVycy4gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHRoZSBKU09OIG1heSBjb21lXG5pbiBhIGNvdXBsZSBkaWZmZXJlbnQgZm9ybWF0cy4gRm9yIGV4YW1wbGUsIHNheSB5b3Ugd2FudCB0byByZWFkIGFuIGFycmF5IG9mXG5udW1iZXJzLCBidXQgc29tZSBvZiB0aGVtIGFyZSBgbnVsbGAuXG5cbiAgICBpbXBvcnQgU3RyaW5nXG5cbiAgICBiYWRJbnQgOiBEZWNvZGVyIEludFxuICAgIGJhZEludCA9XG4gICAgICAgIG9uZU9mIFsgaW50LCBudWxsIDAgXVxuXG4gICAgLS0gZGVjb2RlU3RyaW5nIChhcnJheSBiYWRJbnQpIFwiWzEsMixudWxsLDRdXCIgPT0gT2sgWzEsMiwwLDRdXG5cbldoeSB3b3VsZCBzb21lb25lIGdlbmVyYXRlIEpTT04gbGlrZSB0aGlzPyBRdWVzdGlvbnMgbGlrZSB0aGlzIGFyZSBub3QgZ29vZFxuZm9yIHlvdXIgaGVhbHRoLiBUaGUgcG9pbnQgaXMgdGhhdCB5b3UgY2FuIHVzZSBgb25lT2ZgIHRvIGhhbmRsZSBzaXR1YXRpb25zXG5saWtlIHRoaXMhXG5cbllvdSBjb3VsZCBhbHNvIHVzZSBgb25lT2ZgIHRvIGhlbHAgdmVyc2lvbiB5b3VyIGRhdGEuIFRyeSB0aGUgbGF0ZXN0IGZvcm1hdCxcbnRoZW4gYSBmZXcgb2xkZXIgb25lcyB0aGF0IHlvdSBzdGlsbCBzdXBwb3J0LiBZb3UgY291bGQgdXNlIGBhbmRUaGVuYCB0byBiZVxuZXZlbiBtb3JlIHBhcnRpY3VsYXIgaWYgeW91IHdhbnRlZC5cblxuLX1cbm9uZU9mIDogQXJyYXkgKERlY29kZXIgYSkgLT4gRGVjb2RlciBhXG5vbmVPZiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5vbmVPZlxuXG5cblxuLS0gTUFQUElOR1xuXG5cbnstfCBUcmFuc2Zvcm0gYSBkZWNvZGVyLiBNYXliZSB5b3UganVzdCB3YW50IHRvIGtub3cgdGhlIGxlbmd0aCBvZiBhIHN0cmluZzpcblxuICAgIGltcG9ydCBTdHJpbmdcblxuICAgIHN0cmluZ0xlbmd0aCA6IERlY29kZXIgSW50XG4gICAgc3RyaW5nTGVuZ3RoID1cbiAgICAgICAgbWFwIFN0cmluZy5sZW5ndGggc3RyaW5nXG5cbkl0IGlzIG9mdGVuIGhlbHBmdWwgdG8gdXNlIGBtYXBgIHdpdGggYG9uZU9mYCwgbGlrZSB3aGVuIGRlZmluaW5nIGBudWxsYWJsZWA6XG5cbiAgICBudWxsYWJsZSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChNYXliZSBhKVxuICAgIG51bGxhYmxlIGRlY29kZXIgPVxuICAgICAgICBvbmVPZlxuICAgICAgICAgICAgWyBudWxsIE5vdGhpbmdcbiAgICAgICAgICAgICwgbWFwIEp1c3QgZGVjb2RlclxuICAgICAgICAgICAgXVxuXG4tfVxubWFwIDogKGEgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIHZhbHVlXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwMVxuXG5cbnstfCBUcnkgdHdvIGRlY29kZXJzIGFuZCB0aGVuIGNvbWJpbmUgdGhlIHJlc3VsdC4gV2UgY2FuIHVzZSB0aGlzIHRvIGRlY29kZVxub2JqZWN0cyB3aXRoIG1hbnkgZmllbGRzOlxuXG5cbiAgICB0eXBlIGFsaWFzIFBvaW50ID1cbiAgICAgICAgeyB4IDogRmxvYXRcbiAgICAgICAgLCB5IDogRmxvYXRcbiAgICAgICAgfVxuXG4gICAgbWFrZVBvaW50IDogRmxvYXQgLT4gRmxvYXQgLT4gUG9pbnRcbiAgICBtYWtlUG9pbnQgeCB5ID1cbiAgICAgICAgeyB4ID0geFxuICAgICAgICAsIHkgPSB5XG4gICAgICAgIH1cblxuICAgIHBvaW50IDogRGVjb2RlciBQb2ludFxuICAgIHBvaW50ID1cbiAgICAgICAgbWFwMiBtYWtlUG9pbnQgKGZpZWxkIFwieFwiIGZsb2F0KSAoZmllbGQgXCJ5XCIgZmxvYXQpXG5cbiAgICAtLSBkZWNvZGVTdHJpbmcgcG9pbnQgXCJcIlwieyBcInhcIjogMywgXCJ5XCI6IDQgfVwiXCJcIiA9PSBPayB7IHggPSAzLCB5ID0gNCB9XG5cbkl0IHRyaWVzIGVhY2ggaW5kaXZpZHVhbCBkZWNvZGVyIGFuZCBwdXRzIHRoZSByZXN1bHQgdG9nZXRoZXIgd2l0aCB0aGUgYFBvaW50YFxuY29uc3RydWN0b3IuXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIHZhbHVlXG5tYXAyID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDJcblxuXG57LXwgVHJ5IHRocmVlIGRlY29kZXJzIGFuZCB0aGVuIGNvbWJpbmUgdGhlIHJlc3VsdC4gV2UgY2FuIHVzZSB0aGlzIHRvIGRlY29kZVxub2JqZWN0cyB3aXRoIG1hbnkgZmllbGRzOlxuXG5cbiAgICB0eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgICAgIHsgbmFtZSA6IFN0cmluZywgYWdlIDogSW50LCBoZWlnaHQgOiBGbG9hdCB9XG5cbiAgICBtYWtlUGVyc29uIDogU3RyaW5nIC0+IEludCAtPiBGbG9hdCAtPiBQZXJzb25cbiAgICBtYWtlUGVyc29uIG5hbWUgYWdlIGhlaWdodCA9XG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgLCBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgfVxuXG4gICAgcGVyc29uIDogRGVjb2RlciBQZXJzb25cbiAgICBwZXJzb24gPVxuICAgICAgICBtYXAzIG1ha2VQZXJzb25cbiAgICAgICAgICAgIChhdCBbIFwibmFtZVwiIF0gc3RyaW5nKVxuICAgICAgICAgICAgKGF0IFsgXCJpbmZvXCIsIFwiYWdlXCIgXSBpbnQpXG4gICAgICAgICAgICAoYXQgWyBcImluZm9cIiwgXCJoZWlnaHRcIiBdIGZsb2F0KVxuXG4gICAgLS0ganNvbiA9IFwiXCJcInsgXCJuYW1lXCI6IFwidG9tXCIsIFwiaW5mb1wiOiB7IFwiYWdlXCI6IDQyLCBcImhlaWdodFwiOiAxLjggfSB9XCJcIlwiXG4gICAgLS0gZGVjb2RlU3RyaW5nIHBlcnNvbiBqc29uID09IE9rIHsgbmFtZSA9IFwidG9tXCIsIGFnZSA9IDQyLCBoZWlnaHQgPSAxLjggfVxuXG5MaWtlIGBtYXAyYCBpdCB0cmllcyBlYWNoIGRlY29kZXIgaW4gb3JkZXIgYW5kIHRoZW4gZ2l2ZSB0aGUgcmVzdWx0cyB0byB0aGVcbmBQZXJzb25gIGNvbnN0cnVjdG9yLiBUaGF0IGNhbiBiZSBhbnkgZnVuY3Rpb24gdGhvdWdoIVxuXG4tfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciB2YWx1ZVxubWFwMyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXAzXG5cblxuey18IC19XG5tYXA0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIHZhbHVlXG5tYXA0ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDRcblxuXG57LXwgLX1cbm1hcDUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgdmFsdWVcbm1hcDUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwNVxuXG5cbnstfCAtfVxubWFwNiA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIGYgLT4gRGVjb2RlciB2YWx1ZVxubWFwNiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA2XG5cblxuey18IC19XG5tYXA3IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciBmIC0+IERlY29kZXIgZyAtPiBEZWNvZGVyIHZhbHVlXG5tYXA3ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDdcblxuXG57LXwgLX1cbm1hcDggOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiBoIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgZiAtPiBEZWNvZGVyIGcgLT4gRGVjb2RlciBoIC0+IERlY29kZXIgdmFsdWVcbm1hcDggPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwOFxuXG5cblxuLS0gUlVOIERFQ09ERVJTXG5cblxuey18IFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW50byBhIEpTT04gdmFsdWUgYW5kIHRoZW4gcnVuIHRoZSBgRGVjb2RlcmAgb24gaXQuXG5UaGlzIHdpbGwgZmFpbCBpZiB0aGUgc3RyaW5nIGlzIG5vdCB3ZWxsLWZvcm1lZCBKU09OIG9yIGlmIHRoZSBgRGVjb2RlcmBcbmZhaWxzIGZvciBzb21lIHJlYXNvbi5cblxuICAgIGRlY29kZVN0cmluZyBpbnQgXCI0XCIgICAgID09IE9rIDRcbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiMSArIDJcIiA9PSBFcnIgLi4uXG5cbi19XG5kZWNvZGVTdHJpbmcgOiBEZWNvZGVyIGEgLT4gU3RyaW5nIC0+IFJlc3VsdCBFcnJvciBhXG5kZWNvZGVTdHJpbmcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ucnVuT25TdHJpbmdcblxuXG57LXwgUnVuIGEgYERlY29kZXJgIG9uIHNvbWUgSlNPTiBgVmFsdWVgLiBZb3UgY2FuIHNlbmQgdGhlc2UgSlNPTiB2YWx1ZXNcbnRocm91Z2ggcG9ydHMsIHNvIHRoYXQgaXMgcHJvYmFibHkgdGhlIG1haW4gdGltZSB5b3Ugd291bGQgdXNlIHRoaXMgZnVuY3Rpb24uXG4tfVxuZGVjb2RlVmFsdWUgOiBEZWNvZGVyIGEgLT4gVmFsdWUgLT4gUmVzdWx0IEVycm9yIGFcbmRlY29kZVZhbHVlID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnJ1blxuXG5cbnstfCBSZXByZXNlbnRzIGEgSmF2YVNjcmlwdCB2YWx1ZS5cbi19XG50eXBlIGFsaWFzIFZhbHVlID1cbiAgICBKc29uLkVuY29kZS5WYWx1ZVxuXG5cbnstfCBBIHN0cnVjdHVyZWQgZXJyb3IgZGVzY3JpYmluZyBleGFjdGx5IGhvdyB0aGUgZGVjb2RlciBmYWlsZWQuIFlvdSBjYW4gdXNlXG50aGlzIHRvIGNyZWF0ZSBtb3JlIGVsYWJvcmF0ZSB2aXN1YWxpemF0aW9ucyBvZiBhIGRlY29kZXIgcHJvYmxlbS4gRm9yIGV4YW1wbGUsXG55b3UgY291bGQgc2hvdyB0aGUgZW50aXJlIEpTT04gb2JqZWN0IGFuZCBzaG93IHRoZSBwYXJ0IGNhdXNpbmcgdGhlIGZhaWx1cmUgaW5cbnJlZC5cbi19XG50eXBlIEVycm9yXG4gICAgPSBGaWVsZCB7IG5hbWUgOiBTdHJpbmcsIGVycm9yIDogRXJyb3IgfVxuICAgIHwgSW5kZXggeyBpbmRleCA6IEludCwgZXJyb3IgOiBFcnJvciB9XG4gICAgfCBPbmVPZiAoQXJyYXkgRXJyb3IpXG4gICAgfCBGYWlsdXJlIHsgbWVzc2FnZSA6IFN0cmluZywgdmFsdWUgOiBWYWx1ZSB9XG5cblxuey18IENvbnZlcnQgYSBkZWNvZGluZyBlcnJvciBpbnRvIGEgYFN0cmluZ2AgdGhhdCBpcyBuaWNlIGZvciBkZWJ1Z2dpbmcuXG5cbkl0IHByb2R1Y2VzIG11bHRpcGxlIGxpbmVzIG9mIG91dHB1dCwgc28geW91IG1heSB3YW50IHRvIHBlZWsgYXQgaXQgd2l0aFxuc29tZXRoaW5nIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBIdG1sXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIERlY29kZVxuXG4gICAgZXJyb3JUb0h0bWwgOiBEZWNvZGUuRXJyb3IgLT4gSHRtbC5IdG1sIG1zZ1xuICAgIGVycm9yVG9IdG1sIGVycm9yID1cbiAgICAgICAgSHRtbC5wcmUgW10gWyBIdG1sLnRleHQgKERlY29kZS5lcnJvclRvU3RyaW5nIGVycm9yKSBdXG5cbioqTm90ZToqKiBJdCB3b3VsZCBiZSBjb29sIHRvIGRvIG5pY2VyIGNvbG9yaW5nIGFuZCBmYW5jaWVyIEhUTUwsIGJ1dCBJIHdhbnRlZFxudG8gYXZvaWQgaGF2aW5nIGFuIGBlbG0vaHRtbGAgZGVwZW5kZW5jeSBmb3Igbm93LiBJdCBpcyB0b3RhbGx5IHBvc3NpYmxlIHRvXG5jcmF3bCB0aGUgYEVycm9yYCBzdHJ1Y3R1cmUgYW5kIGNyZWF0ZSB0aGlzIHNlcGFyYXRlbHkgdGhvdWdoIVxuXG4tfVxuZXJyb3JUb1N0cmluZyA6IEVycm9yIC0+IFN0cmluZ1xuZXJyb3JUb1N0cmluZyBlcnJvciA9XG4gICAgZXJyb3JUb1N0cmluZ0hlbHAgZXJyb3IgW11cblxuXG5lcnJvclRvU3RyaW5nSGVscCA6IEVycm9yIC0+IEFycmF5IFN0cmluZyAtPiBTdHJpbmdcbmVycm9yVG9TdHJpbmdIZWxwIGVycm9yIGNvbnRleHQgPVxuICAgIHdoZW4gZXJyb3IgaXNcbiAgICAgICAgRmllbGQgeyBuYW1lID0gZiwgZXJyb3IgPSBlcnIgfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaXNTaW1wbGUgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIFN0cmluZy5wb3BGaXJzdCBmIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IGZpcnN0ID0gY2hhciwgcmVzdCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhci5pc0FscGhhIGNoYXIgJiYgU3RyaW5nLmFsbCBDaGFyLmlzQWxwaGFOdW0gcmVzdFxuXG4gICAgICAgICAgICAgICAgZmllbGROYW1lID1cbiAgICAgICAgICAgICAgICAgICAgaWYgaXNTaW1wbGUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuXCIgKysgZlxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWydcIiArKyBmICsrIFwiJ11cIlxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIGVycm9yVG9TdHJpbmdIZWxwIGVyciAoWyBmaWVsZE5hbWUgXSArKyBjb250ZXh0KVxuXG4gICAgICAgIEluZGV4IHsgaW5kZXggPSBpLCBlcnJvciA9IGVyciB9IC0+XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBpbmRleE5hbWUgPVxuICAgICAgICAgICAgICAgICAgICBcIltcIiArKyBTdHJpbmcuZnJvbUludCBpICsrIFwiXVwiXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgZXJyb3JUb1N0cmluZ0hlbHAgZXJyIChbIGluZGV4TmFtZSBdICsrIGNvbnRleHQpXG5cbiAgICAgICAgT25lT2YgZXJyb3JzIC0+XG4gICAgICAgICAgICB3aGVuIGVycm9ycyBpc1xuICAgICAgICAgICAgICAgIFtdIC0+XG4gICAgICAgICAgICAgICAgICAgIFwiUmFuIGludG8gYSBKc29uLkRlY29kZS5vbmVPZiB3aXRoIG5vIHBvc3NpYmlsaXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKysgKHdoZW4gY29udGV4dCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBhdCBqc29uXCIgKysgU3RyaW5nLmpvaW4gXCJcIiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBbIGVyciBdIC0+XG4gICAgICAgICAgICAgICAgICAgIGVycm9yVG9TdHJpbmdIZWxwIGVyciBjb250ZXh0XG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBjb250ZXh0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkpzb24uRGVjb2RlLm9uZU9mXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBKc29uLkRlY29kZS5vbmVPZiBhdCBqc29uXCIgKysgU3RyaW5nLmpvaW4gXCJcIiBjb250ZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludHJvZHVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlciArKyBcIiBmYWlsZWQgaW4gdGhlIGZvbGxvd2luZyBcIiArKyBTdHJpbmcuZnJvbUludCAoQXJyYXkubGVuZ3RoIGVycm9ycykgKysgXCIgd2F5czpcIlxuICAgICAgICAgICAgICAgICAgICBpblxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcuam9pbiBcIlxcblxcblwiIChbIGludHJvZHVjdGlvbiBdICsrIEFycmF5LmluZGV4ZWRNYXAgZXJyb3JPbmVPZiBlcnJvcnMpXG5cbiAgICAgICAgRmFpbHVyZSB7IG1lc3NhZ2UgPSBtc2csIHZhbHVlID0ganNvbiB9IC0+XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBpbnRyb2R1Y3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbnRleHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFtdIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9ibGVtIHdpdGggdGhlIGdpdmVuIHZhbHVlOlxcblxcblwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByb2JsZW0gd2l0aCB0aGUgdmFsdWUgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dCArKyBcIjpcXG5cXG4gICAgXCJcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBpbnRyb2R1Y3Rpb24gKysgaW5kZW50IChKc29uLkVuY29kZS5lbmNvZGUgNCBqc29uKSArKyBcIlxcblxcblwiICsrIG1zZ1xuXG5cbmVycm9yT25lT2YgOiBJbnQgLT4gRXJyb3IgLT4gU3RyaW5nXG5lcnJvck9uZU9mIGkgZXJyb3IgPVxuICAgIFwiXFxuXFxuKFwiICsrIFN0cmluZy5mcm9tSW50IChpICsgMSkgKysgXCIpIFwiICsrIGluZGVudCAoZXJyb3JUb1N0cmluZyBlcnJvcilcblxuXG5pbmRlbnQgOiBTdHJpbmcgLT4gU3RyaW5nXG5pbmRlbnQgc3RyID1cbiAgICBTdHJpbmcuam9pbiBcIlxcbiAgICBcIiAoU3RyaW5nLnNwbGl0IFwiXFxuXCIgc3RyKVxuXG5cblxuLS0gRkFOQ1kgUFJJTUlUSVZFU1xuXG5cbnstfCBJZ25vcmUgdGhlIEpTT04gYW5kIHByb2R1Y2UgYSBjZXJ0YWluIEdyZW4gdmFsdWUuXG5cbiAgICBkZWNvZGVTdHJpbmcgKHN1Y2NlZWQgNDIpIFwidHJ1ZVwiICAgID09IE9rIDQyXG4gICAgZGVjb2RlU3RyaW5nIChzdWNjZWVkIDQyKSBcIlsxLDIsM11cIiA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyAoc3VjY2VlZCA0MikgXCJoZWxsb1wiICAgPT0gRXJyIC4uLiAtLSB0aGlzIGlzIG5vdCBhIHZhbGlkIEpTT04gc3RyaW5nXG5cblRoaXMgaXMgaGFuZHkgd2hlbiB1c2VkIHdpdGggYG9uZU9mYCBvciBgYW5kVGhlbmAuXG5cbi19XG5zdWNjZWVkIDogYSAtPiBEZWNvZGVyIGFcbnN1Y2NlZWQgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uc3VjY2VlZFxuXG5cbnstfCBJZ25vcmUgdGhlIEpTT04gYW5kIG1ha2UgdGhlIGRlY29kZXIgZmFpbC4gVGhpcyBpcyBoYW5keSB3aGVuIHVzZWQgd2l0aFxuYG9uZU9mYCBvciBgYW5kVGhlbmAgd2hlcmUgeW91IHdhbnQgdG8gZ2l2ZSBhIGN1c3RvbSBlcnJvciBtZXNzYWdlIGluIHNvbWVcbmNhc2UuXG5cblNlZSB0aGUgW2BhbmRUaGVuYF0oI2FuZFRoZW4pIGRvY3MgZm9yIGFuIGV4YW1wbGUuXG5cbi19XG5mYWlsIDogU3RyaW5nIC0+IERlY29kZXIgYVxuZmFpbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5mYWlsXG5cblxuey18IENyZWF0ZSBkZWNvZGVycyB0aGF0IGRlcGVuZCBvbiBwcmV2aW91cyByZXN1bHRzLiBJZiB5b3UgYXJlIGNyZWF0aW5nXG52ZXJzaW9uZWQgZGF0YSwgeW91IG1pZ2h0IGRvIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cblxuICAgIGluZm8gOiBEZWNvZGVyIEluZm9cbiAgICBpbmZvID1cbiAgICAgICAgZmllbGQgXCJ2ZXJzaW9uXCIgaW50XG4gICAgICAgICAgICB8PiBhbmRUaGVuIGluZm9IZWxwXG5cbiAgICBpbmZvSGVscCA6IEludCAtPiBEZWNvZGVyIEluZm9cbiAgICBpbmZvSGVscCB2ZXJzaW9uID1cbiAgICAgICAgd2hlbiB2ZXJzaW9uIGlzXG4gICAgICAgICAgICA0IC0+XG4gICAgICAgICAgICAgICAgaW5mb0RlY29kZXI0XG5cbiAgICAgICAgICAgIDMgLT5cbiAgICAgICAgICAgICAgICBpbmZvRGVjb2RlcjNcblxuICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgIGZhaWwgPHxcbiAgICAgICAgICAgICAgICAgICAgXCJUcnlpbmcgdG8gZGVjb2RlIGluZm8sIGJ1dCB2ZXJzaW9uIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICArKyB0b1N0cmluZyB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICArKyBcIiBpcyBub3Qgc3VwcG9ydGVkLlwiXG5cbiAgICAtLSBpbmZvRGVjb2RlcjQgOiBEZWNvZGVyIEluZm9cbiAgICAtLSBpbmZvRGVjb2RlcjMgOiBEZWNvZGVyIEluZm9cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBEZWNvZGVyIGIpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGJcbmFuZFRoZW4gPVxuICAgIEdyZW4uS2VybmVsLkpzb24uYW5kVGhlblxuXG5cbnstfCBTb21ldGltZXMgeW91IGhhdmUgSlNPTiB3aXRoIHJlY3Vyc2l2ZSBzdHJ1Y3R1cmUsIGxpa2UgbmVzdGVkIGNvbW1lbnRzLlxuWW91IGNhbiB1c2UgYGxhenlgIHRvIG1ha2Ugc3VyZSB5b3VyIGRlY29kZXIgdW5yb2xscyBsYXppbHkuXG5cbiAgICB0eXBlIGFsaWFzIENvbW1lbnQgPVxuICAgICAgICB7IG1lc3NhZ2UgOiBTdHJpbmdcbiAgICAgICAgLCByZXNwb25zZXMgOiBSZXNwb25zZXNcbiAgICAgICAgfVxuXG4gICAgbWFrZUNvbW1lbnQgOiBTdHJpbmcgLT4gUmVzcG9uc2VzIC0+IENvbW1lbnRcbiAgICBtYWtlQ29tbWVudCBtZXNzYWdlIHJlc3BvbnNlcyA9XG4gICAgICAgIHsgbWVzc2FnZSA9IG1lc3NhZ2VcbiAgICAgICAgLCByZXNwb25zZXMgPSByZXNwb25zZXNcbiAgICAgICAgfVxuXG4gICAgdHlwZSBSZXNwb25zZXNcbiAgICAgICAgPSBSZXNwb25zZXMgKEFycmF5IENvbW1lbnQpXG5cbiAgICBjb21tZW50IDogRGVjb2RlciBDb21tZW50XG4gICAgY29tbWVudCA9XG4gICAgICAgIG1hcDIgbWFrZUNvbW1lbnRcbiAgICAgICAgICAgIChmaWVsZCBcIm1lc3NhZ2VcIiBzdHJpbmcpXG4gICAgICAgICAgICAoZmllbGQgXCJyZXNwb25zZXNcIiAobWFwIFJlc3BvbnNlcyAoYXJyYXkgKGxhenkgKFxcXyAtPiBjb21tZW50KSkpKSlcblxuSWYgd2UgaGFkIHNhaWQgYGFycmF5IGNvbW1lbnRgIGluc3RlYWQsIHdlIHdvdWxkIHN0YXJ0IGV4cGFuZGluZyB0aGUgdmFsdWVcbmluZmluaXRlbHkuIFdoYXQgaXMgYSBgY29tbWVudGA/IEl0IGlzIGEgZGVjb2RlciBmb3Igb2JqZWN0cyB3aGVyZSB0aGVcbmByZXNwb25zZXNgIGZpZWxkIGNvbnRhaW5zIGNvbW1lbnRzLiBXaGF0IGlzIGEgYGNvbW1lbnRgIHRob3VnaD8gRXRjLlxuXG5CeSB1c2luZyBgYXJyYXkgKGxhenkgKFxcXyAtPiBjb21tZW50KSlgIHdlIG1ha2Ugc3VyZSB0aGUgZGVjb2RlciBvbmx5IGV4cGFuZHNcbnRvIGJlIGFzIGRlZXAgYXMgdGhlIEpTT04gd2UgYXJlIGdpdmVuLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCByZWN1cnNpdmUgZGF0YVxuc3RydWN0dXJlcyBbaGVyZV0uXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS9jb21waWxlci9ibG9iL21hc3Rlci9oaW50cy9yZWN1cnNpdmUtYWxpYXMubWRcblxuLX1cbmxhenkgOiAoe30gLT4gRGVjb2RlciBhKSAtPiBEZWNvZGVyIGFcbmxhenkgdGh1bmsgPVxuICAgIGFuZFRoZW4gdGh1bmsgKHN1Y2NlZWQge30pXG5cblxuey18IERvIG5vdCBkbyBhbnl0aGluZyB3aXRoIGEgSlNPTiB2YWx1ZSwganVzdCBicmluZyBpdCBpbnRvIEdyZW4gYXMgYSBgVmFsdWVgLlxuVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIHBhcnRpY3VsYXJseSBjb21wbGV4IGRhdGEgdGhhdCB5b3Ugd291bGQgbGlrZSB0b1xuZGVhbCB3aXRoIGxhdGVyLiBPciBpZiB5b3UgYXJlIGdvaW5nIHRvIHNlbmQgaXQgb3V0IGEgcG9ydCBhbmQgZG8gbm90IGNhcmVcbmFib3V0IGl0cyBzdHJ1Y3R1cmUuXG4tfVxudmFsdWUgOiBEZWNvZGVyIFZhbHVlXG52YWx1ZSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVWYWx1ZVxuXG5cbnstfCBEZWNvZGUgYSBgbnVsbGAgdmFsdWUgaW50byBzb21lIEdyZW4gdmFsdWUuXG5cbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgRmFsc2UpIFwibnVsbFwiID09IE9rIEZhbHNlXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIDQyKSBcIm51bGxcIiAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCI0MlwiICAgICAgPT0gRXJyIC4uXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIDQyKSBcImZhbHNlXCIgICA9PSBFcnIgLi5cblxuU28gaWYgeW91IGV2ZXIgc2VlIGEgYG51bGxgLCB0aGlzIHdpbGwgcmV0dXJuIHdoYXRldmVyIHZhbHVlIHlvdSBzcGVjaWZpZWQuXG5cbi19XG5udWxsIDogYSAtPiBEZWNvZGVyIGFcbm51bGwgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlTnVsbFxuIiwKICAgICAgICAibW9kdWxlIENoYXIgZXhwb3NpbmdcbiAgICAoIENoYXJcbiAgICAsIGlzVXBwZXIsIGlzTG93ZXIsIGlzQWxwaGEsIGlzQWxwaGFOdW1cbiAgICAsIGlzRGlnaXQsIGlzT2N0RGlnaXQsIGlzSGV4RGlnaXRcbiAgICAsIHRvQ29kZSwgZnJvbUNvZGVcbiAgICApXG5cbnstfCBGdW5jdGlvbnMgZm9yIHdvcmtpbmcgd2l0aCBjaGFyYWN0ZXJzLiBDaGFyYWN0ZXIgbGl0ZXJhbHMgYXJlIGVuY2xvc2VkIGluXG5gJ2EnYCBwYWlyIG9mIHNpbmdsZSBxdW90ZXMuXG5cblxuQGRvY3MgQ2hhclxuXG5cbiMjIEFTQ0lJIExldHRlcnNcblxuQGRvY3MgaXNVcHBlciwgaXNMb3dlciwgaXNBbHBoYSwgaXNBbHBoYU51bVxuXG5cbiMjIERpZ2l0c1xuXG5AZG9jcyBpc0RpZ2l0LCBpc09jdERpZ2l0LCBpc0hleERpZ2l0XG5cblxuIyMgVW5pY29kZSBDb2RlIFBvaW50c1xuXG5AZG9jcyB0b0NvZGUsIGZyb21Db2RlXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKCgmJiksICg8PSksICg+PSksICh8fCksIEJvb2wsIEludClcbmltcG9ydCBHcmVuLktlcm5lbC5DaGFyXG5cblxuXG4tLSBDSEFSXG5cblxuey18IEEgYENoYXJgIGlzIGEgc2luZ2xlIFt1bmljb2RlXVt1XSBjaGFyYWN0ZXI6XG5cbiAgICAnYSdcblxuICAgICcwJ1xuXG4gICAgJ1onXG5cbiAgICAnPydcblxuICAgICdcIidcblxuICAgICfOoydcblxuICAgICfwn5mIJ1xuXG4gICAgJ1xcdCdcblxuICAgICdcIidcblxuICAgICdcXCcnXG5cbiAgICAn8J+ZiCcgLS0gJ/CfmYgnXG5cbioqTm90ZSAxOioqIFlvdSBfY2Fubm90XyB1c2Ugc2luZ2xlIHF1b3RlcyBhcm91bmQgbXVsdGlwbGUgY2hhcmFjdGVycyBsaWtlIGluXG5KYXZhU2NyaXB0LiBUaGlzIGlzIGhvdyB3ZSBkaXN0aW5ndWlzaCBbYFN0cmluZ2BdKFN0cmluZyNTdHJpbmcpIGFuZCBgQ2hhcmBcbnZhbHVlcyBpbiBzeW50YXguXG5cbioqTm90ZSAyOioqIFlvdSBjYW4gdXNlIHRoZSB1bmljb2RlIGVzY2FwZXMgZnJvbSBgXFx1ezAwMDB9YCB0byBgXFx1ezEwRkZGRn1gIHRvXG5yZXByZXNlbnQgY2hhcmFjdGVycyBieSB0aGVpciBjb2RlIHBvaW50LiBZb3UgY2FuIGFsc28gaW5jbHVkZSB0aGUgdW5pY29kZVxuY2hhcmFjdGVycyBkaXJlY3RseS4gVXNpbmcgdGhlIGVzY2FwZXMgY2FuIGJlIGJldHRlciBpZiB5b3UgbmVlZCBvbmUgb2YgdGhlXG5tYW55IHdoaXRlc3BhY2UgY2hhcmFjdGVycyB3aXRoIGRpZmZlcmVudCB3aWR0aHMuXG5cblt1XTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pY29kZVxuXG4tfVxudHlwZSBDaGFyXG4gICAgPSBDaGFyIC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG5cbi0tIENMQVNTSUZJQ0FUSU9OXG5cblxuey18IERldGVjdCB1cHBlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc1VwcGVyICdBJyA9PSBUcnVlXG5cbiAgICBpc1VwcGVyICdCJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc1VwcGVyICdaJ1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc1VwcGVyICcwJyA9PSBGYWxzZVxuXG4gICAgaXNVcHBlciAnYScgPT0gRmFsc2VcblxuICAgIGlzVXBwZXIgJy0nID09IEZhbHNlXG5cbiAgICBpc1VwcGVyICfOoycgPT0gRmFsc2VcblxuLX1cbmlzVXBwZXIgOiBDaGFyIC0+IEJvb2xcbmlzVXBwZXIgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIGNvZGUgPD0gMHg1QSAmJiAweDQxIDw9IGNvZGVcblxuXG57LXwgRGV0ZWN0IGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzTG93ZXIgJ2EnID09IFRydWVcblxuICAgIGlzTG93ZXIgJ2InXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzTG93ZXIgJ3onXG4gICAgICAgID09IFRydWVcblxuICAgIGlzTG93ZXIgJzAnID09IEZhbHNlXG5cbiAgICBpc0xvd2VyICdBJyA9PSBGYWxzZVxuXG4gICAgaXNMb3dlciAnLScgPT0gRmFsc2VcblxuICAgIGlzTG93ZXIgJ8+AJyA9PSBGYWxzZVxuXG4tfVxuaXNMb3dlciA6IENoYXIgLT4gQm9vbFxuaXNMb3dlciBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgMHg2MSA8PSBjb2RlICYmIGNvZGUgPD0gMHg3QVxuXG5cbnstfCBEZXRlY3QgdXBwZXIgY2FzZSBhbmQgbG93ZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNBbHBoYSAnYScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYSAnYicgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYSAnRScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYSAnWScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYSAnMCcgPT0gRmFsc2VcblxuICAgIGlzQWxwaGEgJy0nID09IEZhbHNlXG5cbiAgICBpc0FscGhhICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzQWxwaGEgOiBDaGFyIC0+IEJvb2xcbmlzQWxwaGEgY2hhciA9XG4gICAgaXNMb3dlciBjaGFyIHx8IGlzVXBwZXIgY2hhclxuXG5cbnstfCBEZXRlY3QgdXBwZXIgY2FzZSBhbmQgbG93ZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNBbHBoYU51bSAnYScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnYicgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnRScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnWScgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnMCcgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnNycgPT0gVHJ1ZVxuXG4gICAgaXNBbHBoYU51bSAnLScgPT0gRmFsc2VcblxuICAgIGlzQWxwaGFOdW0gJ8+AJyA9PSBGYWxzZVxuXG4tfVxuaXNBbHBoYU51bSA6IENoYXIgLT4gQm9vbFxuaXNBbHBoYU51bSBjaGFyID1cbiAgICBpc0xvd2VyIGNoYXIgfHwgaXNVcHBlciBjaGFyIHx8IGlzRGlnaXQgY2hhclxuXG5cbnstfCBEZXRlY3QgZGlnaXRzIGAwMTIzNDU2Nzg5YFxuXG4gICAgaXNEaWdpdCAnMCcgPT0gVHJ1ZVxuXG4gICAgaXNEaWdpdCAnMSdcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNEaWdpdCAnOSdcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNEaWdpdCAnYScgPT0gRmFsc2VcblxuICAgIGlzRGlnaXQgJ2InID09IEZhbHNlXG5cbiAgICBpc0RpZ2l0ICdBJyA9PSBGYWxzZVxuXG4tfVxuaXNEaWdpdCA6IENoYXIgLT4gQm9vbFxuaXNEaWdpdCBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgY29kZSA8PSAweDM5ICYmIDB4MzAgPD0gY29kZVxuXG5cbnstfCBEZXRlY3Qgb2N0YWwgZGlnaXRzIGAwMTIzNDU2N2BcblxuICAgIGlzT2N0RGlnaXQgJzAnID09IFRydWVcblxuICAgIGlzT2N0RGlnaXQgJzEnXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzT2N0RGlnaXQgJzcnXG4gICAgICAgID09IFRydWVcblxuICAgIGlzT2N0RGlnaXQgJzgnID09IEZhbHNlXG5cbiAgICBpc09jdERpZ2l0ICdhJyA9PSBGYWxzZVxuXG4gICAgaXNPY3REaWdpdCAnQScgPT0gRmFsc2VcblxuLX1cbmlzT2N0RGlnaXQgOiBDaGFyIC0+IEJvb2xcbmlzT2N0RGlnaXQgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIGNvZGUgPD0gMHgzNyAmJiAweDMwIDw9IGNvZGVcblxuXG57LXwgRGV0ZWN0IGhleGFkZWNpbWFsIGRpZ2l0cyBgMDEyMzQ1Njc4OWFiY2RlZkFCQ0RFRmBcbi19XG5pc0hleERpZ2l0IDogQ2hhciAtPiBCb29sXG5pc0hleERpZ2l0IGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICAoMHgzMCA8PSBjb2RlICYmIGNvZGUgPD0gMHgzOSlcbiAgICAgICAgfHwgKDB4NDEgPD0gY29kZSAmJiBjb2RlIDw9IDB4NDYpXG4gICAgICAgIHx8ICgweDYxIDw9IGNvZGUgJiYgY29kZSA8PSAweDY2KVxuXG5cblxuLS0gQ09OVkVSU0lPTlNcblxuXG57LXwgQ29udmVydCB0byB0aGUgY29ycmVzcG9uZGluZyBVbmljb2RlIFtjb2RlIHBvaW50XVtjcF0uXG5cbltjcF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfcG9pbnRcblxuICAgIHRvQ29kZSAnQScgPT0gNjVcblxuICAgIHRvQ29kZSAnQicgPT0gNjZcblxuICAgIHRvQ29kZSAn5pyoJyA9PSAweDY3MjhcblxuICAgIHRvQ29kZSAn8J2MhicgPT0gMHgwMDAxRDMwNlxuXG4gICAgdG9Db2RlICfwn5iDJyA9PSAweDAwMDFGNjAzXG5cbi19XG50b0NvZGUgOiBDaGFyIC0+IEludFxudG9Db2RlID1cbiAgICBHcmVuLktlcm5lbC5DaGFyLnRvQ29kZVxuXG5cbnstfCBDb252ZXJ0IGEgVW5pY29kZSBbY29kZSBwb2ludF1bY3BdIHRvIGEgY2hhcmFjdGVyLlxuXG4gICAgZnJvbUNvZGUgNjUgPT0gJ0EnXG5cbiAgICBmcm9tQ29kZSA2NiA9PSAnQidcblxuICAgIGZyb21Db2RlIDB4NjcyOCA9PSAn5pyoJ1xuXG4gICAgZnJvbUNvZGUgMHgwMDAxRDMwNiA9PSAn8J2MhidcblxuICAgIGZyb21Db2RlIDB4MDAwMUY2MDMgPT0gJ/CfmIMnXG5cbiAgICBmcm9tQ29kZSAtMSA9PSAn77+9J1xuXG5UaGUgZnVsbCByYW5nZSBvZiB1bmljb2RlIGlzIGZyb20gYDBgIHRvIGAweDEwRkZGRmAuIFdpdGggbnVtYmVycyBvdXRzaWRlIHRoYXRcbnJhbmdlLCB5b3UgZ2V0IFt0aGUgcmVwbGFjZW1lbnQgY2hhcmFjdGVyXVtmZmZkXS5cblxuW2NwXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29kZV9wb2ludFxuW2ZmZmRdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsc18oVW5pY29kZV9ibG9jaykjUmVwbGFjZW1lbnRfY2hhcmFjdGVyXG5cbi19XG5mcm9tQ29kZSA6IEludCAtPiBDaGFyXG5mcm9tQ29kZSA9XG4gICAgR3Jlbi5LZXJuZWwuQ2hhci5mcm9tQ29kZVxuIiwKICAgICAgICAibW9kdWxlIFJlc3VsdCBleHBvc2luZ1xuICAgICggUmVzdWx0KC4uKVxuICAgICwgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGZpcnN0T2ssIGFsbE9rXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIGFuZFRoZW4sIG9uRXJyb3JcbiAgICAsIHdpdGhEZWZhdWx0LCB3aXRoRGVmYXVsdExhenksIHRvTWF5YmUsIGZyb21NYXliZSwgbWFwRXJyb3JcbiAgICApXG5cbnstfCBBIGBSZXN1bHRgIGlzIHRoZSByZXN1bHQgb2YgYSBjb21wdXRhdGlvbiB0aGF0IG1heSBmYWlsLiBUaGlzIGlzIGEgZ3JlYXRcbndheSB0byBtYW5hZ2UgZXJyb3JzIGluIEdyZW4uXG5cbkBkb2NzIFJlc3VsdFxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBmaXJzdE9rLCBhbGxPa1xuXG5cbiMjIE1hcHBpbmdcblxuQGRvY3MgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG5cblxuIyMgQ2hhaW5pbmdcblxuQGRvY3MgYW5kVGhlbiwgb25FcnJvclxuXG5cbiMjIEhhbmRsaW5nIEVycm9yc1xuXG5AZG9jcyB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCB0b01heWJlLCBmcm9tTWF5YmUsIG1hcEVycm9yXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuXG5cbnstfCBBIGBSZXN1bHRgIGlzIGVpdGhlciBgT2tgIG1lYW5pbmcgdGhlIGNvbXB1dGF0aW9uIHN1Y2NlZWRlZCwgb3IgaXQgaXMgYW5cbmBFcnJgIG1lYW5pbmcgdGhhdCB0aGVyZSB3YXMgc29tZSBmYWlsdXJlLlxuLX1cbnR5cGUgUmVzdWx0IGVycm9yIHZhbHVlXG4gICAgPSBPayB2YWx1ZVxuICAgIHwgRXJyIGVycm9yXG5cblxuey18IElmIHRoZSByZXN1bHQgaXMgYE9rYCBjaGVjayBpZiB0aGUgY29udGFpbmVkIHZhbHVlIG1hdGNoZXMgdGhlIHByb3ZpZGVkIHZhbHVlLlxuXG4gICAgUmVzdWx0Lmhhc1ZhbHVlIDEyMyAoT2sgMTIzKSA9PSBUcnVlXG5cbiAgICBSZXN1bHQuaGFzVmFsdWUgMTIzIChPayA1KSA9PSBGYWxzZVxuICAgIFxuICAgIFJlc3VsdC5oYXNWYWx1ZSAxMjMgKEVyciBcImZhaWxlZFwiKSA9PSBGYWxzZVxuXG4tfVxuaGFzVmFsdWUgOiBhIC0+IFJlc3VsdCB4IGEgLT4gQm9vbFxuaGFzVmFsdWUgdmFsdWUgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICBhID09IHZhbHVlXG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IElmIHRoZSByZXN1bHQgaXMgYE9rYCBjaGVjayBpZiB0aGUgY29udGFpbmVkIHZhbHVlIHBhc3NlcyB0aGUgcHJvdmlkZWQgdGVzdC5cblxuICAgIFJlc3VsdC5jaGVja1ZhbHVlIGlzT2RkIChPayA1KSA9PSBUcnVlXG5cbiAgICBSZXN1bHQuY2hlY2tWYWx1ZSBpc09kZCAoT2sgMTIpID09IEZhbHNlXG4gICAgXG4gICAgUmVzdWx0LmNoZWNrVmFsdWUgaXNPZGQgKEVyciBcImZhaWxlZFwiKSA9PSBGYWxzZVxuXG4tfVxuY2hlY2tWYWx1ZSA6IChhIC0+IEJvb2wpIC0+IFJlc3VsdCB4IGEgLT4gQm9vbFxuY2hlY2tWYWx1ZSB0ZXN0IHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgdGVzdCBhIFxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBSZXR1cm5zIHRoZSBmaXJzdCBgT2tgIHZhbHVlIGluIGFuIGBBcnJheWAgb2YgYFJlc3VsdGBzLlxuXG4gICAgUmVzdWx0LmZpcnN0T2sgWyBPayA1LCBFcnIgMCwgT2sgMTAgXSA9PSBKdXN0IDVcblxuICAgIFJlc3VsdC5maXJzdE9rIFsgRXJyIDAsIEVyciAxIF0gPT0gTm90aGluZ1xuXG4tfVxuZmlyc3RPayA6IEFycmF5IChSZXN1bHQgeCBhKSAtPiBNYXliZSBhXG5maXJzdE9rIGFycmF5ID1cbiAgICBBcnJheS5maW5kRmlyc3QgaXNPayBhcnJheVxuICAgICAgICB8PiBNYXliZS5tYXAgLnZhbHVlXG4gICAgICAgIHw+IE1heWJlLmFuZFRoZW4gdG9NYXliZVxuXG5cbnstfCBDb252ZXJ0IGFuIGBBcnJheWAgb2YgYFJlc3VsdCBlcnIgb2tgIHRvIGBSZXN1bHQgKEFycmF5IGVycikgKEFycmF5IG9rKWAuIFlvdSdsbCBvbmx5XG5yZWNlaXZlIGFuIGBPa2AgaWYgdGhlcmUgYXJlIG5vIGBFcnJgIHZhbHVlcyBpbiB0aGUgYEFycmF5YC5cblxuICAgIFJlc3VsdC5hbGxPayBbIE9rIDUsIEVyciAwLCBPayAxMCBdID09IEVyciBbIDAgXVxuXG4gICAgUmVzdWx0LmFsbE9rIFsgT2sgMCwgT2sgMSBdID09IE9rIFsgMCwgMSBdXG5cbi19XG5hbGxPayA6IEFycmF5IChSZXN1bHQgZXJyIG9rKSAtPiBSZXN1bHQgKEFycmF5IGVycikgKEFycmF5IG9rKVxuYWxsT2sgYXJyYXkgPVxuICAgIGxldFxuICAgICAgICBlcnJvcnMgPVxuICAgICAgICAgICAgQXJyYXkubWFwQW5kS2VlcEp1c3QgZXJyVG9NYXliZSBhcnJheVxuICAgIGluXG4gICAgaWYgQXJyYXkubGVuZ3RoIGVycm9ycyA+IDAgdGhlblxuICAgICAgICBFcnIgZXJyb3JzXG5cbiAgICBlbHNlXG4gICAgICAgIE9rIDx8IEFycmF5Lm1hcEFuZEtlZXBKdXN0IHRvTWF5YmUgYXJyYXlcblxuXG5lcnJUb01heWJlIDogUmVzdWx0IGVyciBvayAtPiBNYXliZSBlcnJcbmVyclRvTWF5YmUgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBfIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgRXJyIGVyciAtPlxuICAgICAgICAgICAgSnVzdCBlcnJcblxuXG57LXwgSWYgdGhlIHJlc3VsdCBpcyBgT2tgIHJldHVybiB0aGUgdmFsdWUsIGJ1dCBpZiB0aGUgcmVzdWx0IGlzIGFuIGBFcnJgIHRoZW5cbnJldHVybiBhIGdpdmVuIGRlZmF1bHQgdmFsdWUuIFRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgdHJ5IHRvIHBhcnNlIGludGVnZXJzLlxuXG4gICAgUmVzdWx0LndpdGhEZWZhdWx0IDAgKE9rIDEyMykgPT0gMTIzXG5cbiAgICBSZXN1bHQud2l0aERlZmF1bHQgMCAoRXJyIFwibm9cIikgPT0gMFxuXG4tfVxud2l0aERlZmF1bHQgOiBhIC0+IFJlc3VsdCB4IGEgLT4gYVxud2l0aERlZmF1bHQgZGVmIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBkZWZcblxuXG57LXwgU2FtZSBhcyBbd2l0aERlZmF1bHRdKCN3aXRoRGVmYXVsdCkgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgZnVuY3Rpb24uXG5UaGlzIGxldHMgeW91IGF2b2lkIGNvbXB1dGluZyB0aGUgZGVmYXVsdCB2YWx1ZSBpZiBpdCBpc24ndCBuZWNlc3NhcnkuXG5cbi19XG53aXRoRGVmYXVsdExhenkgOiAoe30gLT4gYSkgLT4gUmVzdWx0IHggYSAtPiBhXG53aXRoRGVmYXVsdExhenkgcHJvdmlkZXIgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICBhXG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIHByb3ZpZGVyIHt9XG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gdG8gYSByZXN1bHQuIElmIHRoZSByZXN1bHQgaXMgYE9rYCwgaXQgd2lsbCBiZSBjb252ZXJ0ZWQuXG5JZiB0aGUgcmVzdWx0IGlzIGFuIGBFcnJgLCB0aGUgc2FtZSBlcnJvciB2YWx1ZSB3aWxsIHByb3BhZ2F0ZSB0aHJvdWdoLlxuXG4gICAgbWFwIHNxcnQgKE9rIDQuMCkgPT0gT2sgMi4wXG5cbiAgICBtYXAgc3FydCAoRXJyIFwiYmFkIGlucHV0XCIpID09IEVyciBcImJhZCBpbnB1dFwiXG5cbi19XG5tYXAgOiAoYSAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwIGZ1bmMgcmEgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgT2sgKGZ1bmMgYSlcblxuICAgICAgICBFcnIgZSAtPlxuICAgICAgICAgICAgRXJyIGVcblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiBpZiBib3RoIHJlc3VsdHMgYXJlIGBPa2AuIElmIG5vdCwgdGhlIGZpcnN0IGBFcnJgIHdpbGxcbnByb3BhZ2F0ZSB0aHJvdWdoLlxuXG4gICAgbWFwMiBtYXggKE9rIDQyKSAoT2sgMTMpID09IE9rIDQyXG5cbiAgICBtYXAyIG1heCAoRXJyIFwieFwiKSAoT2sgMTMpID09IEVyciBcInhcIlxuXG4gICAgbWFwMiBtYXggKE9rIDQyKSAoRXJyIFwieVwiKSA9PSBFcnIgXCJ5XCJcblxuICAgIG1hcDIgbWF4IChFcnIgXCJ4XCIpIChFcnIgXCJ5XCIpID09IEVyciBcInhcIlxuXG5UaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IGhhdmUgdHdvIGNvbXB1dGF0aW9ucyB0aGF0IG1heSBmYWlsLCBhbmQgeW91IHdhbnRcbnRvIHB1dCB0aGVtIHRvZ2V0aGVyIHF1aWNrbHkuXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXAyIGZ1bmMgcmEgcmIgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYilcblxuXG57LXwgLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCBjIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXAzIGZ1bmMgcmEgcmIgcmMgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcmMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2sgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjKVxuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggYyAtPiBSZXN1bHQgeCBkIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXA0IGZ1bmMgcmEgcmIgcmMgcmQgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcmMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2sgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcmQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgKGZ1bmMgYSBiIGMgZClcblxuXG57LXwgLX1cbm1hcDUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggYyAtPiBSZXN1bHQgeCBkIC0+IFJlc3VsdCB4IGUgLT4gUmVzdWx0IHggdmFsdWVcbm1hcDUgZnVuYyByYSByYiByYyByZCByZSA9XG4gICAgd2hlbiByYSBpc1xuICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICBPayBhIC0+XG4gICAgICAgICAgICB3aGVuIHJiIGlzXG4gICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgIE9rIGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiByYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBPayBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiByZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIGUgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgKGZ1bmMgYSBiIGMgZCBlKVxuXG5cbnstfCBDaGFpbiB0b2dldGhlciBhIHNlcXVlbmNlIG9mIGNvbXB1dGF0aW9ucyB0aGF0IG1heSBmYWlsLiBJdCBpcyBoZWxwZnVsXG50byBzZWUgaXRzIGRlZmluaXRpb246XG5cbiAgICBhbmRUaGVuIDogKGEgLT4gUmVzdWx0IGUgYikgLT4gUmVzdWx0IGUgYSAtPiBSZXN1bHQgZSBiXG4gICAgYW5kVGhlbiBjYWxsYmFjayByZXN1bHQgPVxuICAgICAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICAgICAgT2sgdmFsdWUgLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgICAgICBFcnIgbXNnIC0+XG4gICAgICAgICAgICAgICAgRXJyIG1zZ1xuXG5UaGlzIG1lYW5zIHdlIG9ubHkgY29udGludWUgd2l0aCB0aGUgY2FsbGJhY2sgaWYgdGhpbmdzIGFyZSBnb2luZyB3ZWxsLiBGb3JcbmV4YW1wbGUsIHNheSB5b3UgbmVlZCB0byB1c2UgKGB0b0ludCA6IFN0cmluZyAtPiBSZXN1bHQgU3RyaW5nIEludGApIHRvIHBhcnNlXG5hIG1vbnRoIGFuZCBtYWtlIHN1cmUgaXQgaXMgYmV0d2VlbiAxIGFuZCAxMjpcblxuXG4gICAgdG9WYWxpZE1vbnRoIDogSW50IC0+IFJlc3VsdCBTdHJpbmcgSW50XG4gICAgdG9WYWxpZE1vbnRoIG1vbnRoID1cbiAgICAgICAgaWYgbW9udGggPj0gMSAmJiBtb250aCA8PSAxMiB0aGVuXG4gICAgICAgICAgICBPayBtb250aFxuXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIEVyciBcIm1vbnRocyBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMTJcIlxuXG4gICAgdG9Nb250aCA6IFN0cmluZyAtPiBSZXN1bHQgU3RyaW5nIEludFxuICAgIHRvTW9udGggcmF3U3RyaW5nID1cbiAgICAgICAgdG9JbnQgcmF3U3RyaW5nXG4gICAgICAgICAgICB8PiBhbmRUaGVuIHRvVmFsaWRNb250aFxuXG4gICAgLS0gdG9Nb250aCBcIjRcIiA9PSBPayA0XG4gICAgLS0gdG9Nb250aCBcIjlcIiA9PSBPayA5XG4gICAgLS0gdG9Nb250aCBcImFcIiA9PSBFcnIgXCJjYW5ub3QgcGFyc2UgdG8gYW4gSW50XCJcbiAgICAtLSB0b01vbnRoIFwiMFwiID09IEVyciBcIm1vbnRocyBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMTJcIlxuXG5UaGlzIGFsbG93cyB1cyB0byBjb21lIG91dCBvZiBhIGNoYWluIG9mIG9wZXJhdGlvbnMgd2l0aCBxdWl0ZSBhIHNwZWNpZmljIGVycm9yXG5tZXNzYWdlLiBJdCBpcyBvZnRlbiBiZXN0IHRvIGNyZWF0ZSBhIGN1c3RvbSB0eXBlIHRoYXQgZXhwbGljaXRseSByZXByZXNlbnRzXG50aGUgZXhhY3Qgd2F5cyB5b3VyIGNvbXB1dGF0aW9uIG1heSBmYWlsLiBUaGlzIHdheSBpdCBpcyBlYXN5IHRvIGhhbmRsZSBpbiB5b3VyXG5jb2RlLlxuXG4tfVxuYW5kVGhlbiA6IChhIC0+IFJlc3VsdCB4IGIpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYlxuYW5kVGhlbiBjYWxsYmFjayByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIHZhbHVlIC0+XG4gICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgIEVyciBtc2cgLT5cbiAgICAgICAgICAgIEVyciBtc2dcblxuXG57LXwgVGhpcyBpcyBzaW1pbGFyIHRvIFthbmRUaGVuXSgjYW5kVGhlbikgYnV0IHRoZSBjYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlblxudGhlIGBSZXN1bHRgIGlzIGFuIGBFcnJgIHZhbHVlLiBUaGlzIGdpdmVzIHlvdSB0aGUgb3B0aW9uIG9mIGRlYWxpbmcgd2l0aCBlcnJvcnNcbmluIGEgY2hhaW4uXG5cbiAgICB0b0ludCBcImFcIlxuICAgICAgICB8PiBvbkVycm9yIChcXF9tc2cgLT4gT2sgMSkgLS0gZGVmYXVsdGluZyB0byBmaXJzdCBtb250aCBvZiB0aGUgeWVhclxuICAgICAgICB8PiBhbmRUaGVuIHRvVmFsaWRNb250aFxuXG4tfVxub25FcnJvciA6IChhIC0+IFJlc3VsdCBiIHgpIC0+IFJlc3VsdCBhIHggLT4gUmVzdWx0IGIgeFxub25FcnJvciBjYWxsYmFjayByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIHZhbHVlIC0+XG4gICAgICAgICAgICBPayB2YWx1ZVxuXG4gICAgICAgIEVyciBlcnIgLT5cbiAgICAgICAgICAgIGNhbGxiYWNrIGVyclxuXG5cbnstfCBUcmFuc2Zvcm0gYW4gYEVycmAgdmFsdWUuIEZvciBleGFtcGxlLCBzYXkgdGhlIGVycm9ycyB3ZSBnZXQgaGF2ZSB0b28gbXVjaFxuaW5mb3JtYXRpb246XG5cbiAgICBwYXJzZUludCA6IFN0cmluZyAtPiBSZXN1bHQgUGFyc2VFcnJvciBJbnRcblxuICAgIHR5cGUgYWxpYXMgUGFyc2VFcnJvciA9XG4gICAgICAgIHsgbWVzc2FnZSA6IFN0cmluZ1xuICAgICAgICAsIGNvZGUgOiBJbnRcbiAgICAgICAgLCBwb3NpdGlvbiA6IChJbnQsSW50KVxuICAgICAgICB9XG5cbiAgICBtYXBFcnJvciAubWVzc2FnZSAocGFyc2VJbnQgXCIxMjNcIikgPT0gT2sgMTIzXG4gICAgbWFwRXJyb3IgLm1lc3NhZ2UgKHBhcnNlSW50IFwiYWJjXCIpID09IEVyciBcImNoYXIgJ2EnIGlzIG5vdCBhIG51bWJlclwiXG5cbi19XG5tYXBFcnJvciA6ICh4IC0+IHkpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHkgYVxubWFwRXJyb3IgZiByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIHYgLT5cbiAgICAgICAgICAgIE9rIHZcblxuICAgICAgICBFcnIgZSAtPlxuICAgICAgICAgICAgRXJyIChmIGUpXG5cblxuey18IENvbnZlcnQgdG8gYSBzaW1wbGVyIGBNYXliZWAgaWYgdGhlIGFjdHVhbCBlcnJvciBtZXNzYWdlIGlzIG5vdCBuZWVkZWQgb3JcbnlvdSBuZWVkIHRvIGludGVyYWN0IHdpdGggc29tZSBjb2RlIHRoYXQgcHJpbWFyaWx5IHVzZXMgbWF5YmVzLlxuXG4gICAgcGFyc2VJbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFBhcnNlRXJyb3IgSW50XG5cbiAgICBtYXliZVBhcnNlSW50IDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIG1heWJlUGFyc2VJbnQgc3RyaW5nID1cbiAgICAgICAgdG9NYXliZSAocGFyc2VJbnQgc3RyaW5nKVxuXG4tfVxudG9NYXliZSA6IFJlc3VsdCB4IGEgLT4gTWF5YmUgYVxudG9NYXliZSByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIHYgLT5cbiAgICAgICAgICAgIEp1c3QgdlxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IENvbnZlcnQgZnJvbSBhIHNpbXBsZSBgTWF5YmVgIHRvIGludGVyYWN0IHdpdGggc29tZSBjb2RlIHRoYXQgcHJpbWFyaWx5XG51c2VzIGBSZXN1bHRzYC5cblxuICAgIHBhcnNlSW50IDogU3RyaW5nIC0+IE1heWJlIEludFxuXG4gICAgcmVzdWx0UGFyc2VJbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRcbiAgICByZXN1bHRQYXJzZUludCBzdHJpbmcgPVxuICAgICAgICBmcm9tTWF5YmUgKFwiZXJyb3IgcGFyc2luZyBzdHJpbmc6IFwiICsrIHRvU3RyaW5nIHN0cmluZykgKHBhcnNlSW50IHN0cmluZylcblxuLX1cbmZyb21NYXliZSA6IHggLT4gTWF5YmUgYSAtPiBSZXN1bHQgeCBhXG5mcm9tTWF5YmUgZXJyIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdiAtPlxuICAgICAgICAgICAgT2sgdlxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEVyciBlcnJcblxuXG5cbi0tIEZPUiBJTlRFUk5BTCBVU0UgT05MWVxuLS1cbi0tIFVzZSBgd2hlbmAgZXhwcmVzc2lvbnMgZm9yIHRoaXMgaW4gR3JlbiBjb2RlIVxuXG5cbmlzT2sgOiBSZXN1bHQgeCBhIC0+IEJvb2xcbmlzT2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgRXJyIF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG4iLAogICAgICAgICJtb2R1bGUgVmlydHVhbERvbSBleHBvc2luZ1xuICAoIE5vZGVcbiAgLCB0ZXh0LCBub2RlLCBub2RlTlNcbiAgLCBBdHRyaWJ1dGUsIHN0eWxlLCBwcm9wZXJ0eSwgYXR0cmlidXRlLCBhdHRyaWJ1dGVOU1xuICAsIG9uLCBIYW5kbGVyKC4uKVxuICAsIG1hcCwgbWFwQXR0cmlidXRlXG4gICwga2V5ZWROb2RlLCBrZXllZE5vZGVOU1xuICAsIGxhenksIGxhenkyLCBsYXp5MywgbGF6eTQsIGxhenk1LCBsYXp5NiwgbGF6eTcsIGxhenk4XG4gIClcblxuey18IEFQSSB0byB0aGUgY29yZSBkaWZmaW5nIGFsZ29yaXRobS4gQ2FuIHNlcnZlIGFzIGEgZm91bmRhdGlvbiBmb3IgbGlicmFyaWVzXG50aGF0IGV4cG9zZSBtb3JlIGhlbHBlciBmdW5jdGlvbnMgZm9yIEhUTUwgb3IgU1ZHLlxuXG4jIyBDcmVhdGVcbkBkb2NzIE5vZGUsIHRleHQsIG5vZGUsIG5vZGVOU1xuXG4jIyBBdHRyaWJ1dGVzXG5AZG9jcyBBdHRyaWJ1dGUsIHN0eWxlLCBwcm9wZXJ0eSwgYXR0cmlidXRlLCBhdHRyaWJ1dGVOU1xuXG4jIyBFdmVudHNcbkBkb2NzIG9uLCBIYW5kbGVyXG5cbiMjIFJvdXRpbmcgTWVzc2FnZXNcbkBkb2NzIG1hcCwgbWFwQXR0cmlidXRlXG5cbiMjIEtleWVkIE5vZGVzXG5AZG9jcyBrZXllZE5vZGUsIGtleWVkTm9kZU5TXG5cbiMjIExhenkgTm9kZXNcbkBkb2NzIGxhenksIGxhenkyLCBsYXp5MywgbGF6eTQsIGxhenk1LCBsYXp5NiwgbGF6eTcsIGxhenk4XG5cbi19XG5cbmltcG9ydCBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tXG5pbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG5cbnstfCBBbiBpbW11dGFibGUgY2h1bmsgb2YgZGF0YSByZXByZXNlbnRpbmcgYSBET00gbm9kZS4gVGhpcyBjYW4gYmUgSFRNTCBvciBTVkcuXG4tfVxudHlwZSBOb2RlIG1zZyA9IE5vZGVcblxuXG57LXwgQ3JlYXRlIGEgRE9NIG5vZGUgd2l0aCBhIHRhZyBuYW1lLCBhIGxpc3Qgb2YgSFRNTCBwcm9wZXJ0aWVzIHRoYXQgY2FuXG5pbmNsdWRlIHN0eWxlcyBhbmQgZXZlbnQgbGlzdGVuZXJzLCBhIGxpc3Qgb2YgQ1NTIHByb3BlcnRpZXMgbGlrZSBgY29sb3JgLCBhbmRcbmEgbGlzdCBvZiBjaGlsZCBub2Rlcy5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBKc29uXG5cbiAgICBoZWxsbyA6IE5vZGUgbXNnXG4gICAgaGVsbG8gPVxuICAgICAgbm9kZSBcImRpdlwiIFtdIFsgdGV4dCBcIkhlbGxvIVwiIF1cblxuICAgIGdyZWV0aW5nIDogTm9kZSBtc2dcbiAgICBncmVldGluZyA9XG4gICAgICBub2RlIFwiZGl2XCJcbiAgICAgICAgWyBwcm9wZXJ0eSBcImlkXCIgKEpzb24uc3RyaW5nIFwiZ3JlZXRpbmdcIikgXVxuICAgICAgICBbIHRleHQgXCJIZWxsbyFcIiBdXG4tfVxubm9kZSA6IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKE5vZGUgbXNnKSAtPiBOb2RlIG1zZ1xubm9kZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vZGUgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cbnstfCBDcmVhdGUgYSBuYW1lc3BhY2VkIERPTSBub2RlLiBGb3IgZXhhbXBsZSwgYW4gU1ZHIGA8cGF0aD5gIG5vZGUgY291bGQgYmVcbmRlZmluZWQgbGlrZSB0aGlzOlxuXG4gICAgcGF0aCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoTm9kZSBtc2cpIC0+IE5vZGUgbXNnXG4gICAgcGF0aCBhdHRydWJ1dGVzIGNoaWxkcmVuID1cbiAgICAgIG5vZGVOUyBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXCJwYXRoXCIgYXR0cmlidXRlcyBjaGlsZHJlblxuLX1cbm5vZGVOUyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChOb2RlIG1zZykgLT4gTm9kZSBtc2dcbm5vZGVOUyB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vZGVOUyAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuey18IEp1c3QgcHV0IHBsYWluIHRleHQgaW4gdGhlIERPTS4gSXQgd2lsbCBlc2NhcGUgdGhlIHN0cmluZyBzbyB0aGF0IGl0IGFwcGVhcnNcbmV4YWN0bHkgYXMgeW91IHNwZWNpZnkuXG5cbiAgICB0ZXh0IFwiSGVsbG8gV29ybGQhXCJcbi19XG50ZXh0IDogU3RyaW5nIC0+IE5vZGUgbXNnXG50ZXh0ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS50ZXh0XG5cblxuey18IFRoaXMgZnVuY3Rpb24gaXMgdXNlZnVsIHdoZW4gbmVzdGluZyBjb21wb25lbnRzIHdpdGggW3RoZSBFbG1cbkFyY2hpdGVjdHVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2V2YW5jei9lbG0tYXJjaGl0ZWN0dXJlLXR1dG9yaWFsLykuIEl0IGxldHNcbnlvdSB0cmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGEgc3VidHJlZS5cblxuU2F5IHlvdSBoYXZlIGEgbm9kZSBuYW1lZCBgYnV0dG9uYCB0aGF0IHByb2R1Y2VzIGAoKWAgdmFsdWVzIHdoZW4gaXQgaXNcbmNsaWNrZWQuIFRvIGdldCB5b3VyIG1vZGVsIHVwZGF0aW5nIHByb3Blcmx5LCB5b3Ugd2lsbCBwcm9iYWJseSB3YW50IHRvIHRhZ1xudGhpcyBgKClgIHZhbHVlIGxpa2UgdGhpczpcblxuICAgIHR5cGUgTXNnID0gQ2xpY2sgfCAuLi5cblxuICAgIHVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgICAgd2hlbiBtc2cgaXNcbiAgICAgICAgQ2xpY2sgLT5cbiAgICAgICAgICAuLi5cblxuICAgIHZpZXcgbW9kZWwgPVxuICAgICAgbWFwIChcXF8gLT4gQ2xpY2spIGJ1dHRvblxuXG5TbyBub3cgYWxsIHRoZSBldmVudHMgcHJvZHVjZWQgYnkgYGJ1dHRvbmAgd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBiZSBvZiB0eXBlXG5gTXNnYCBzbyB0aGV5IGNhbiBiZSBoYW5kbGVkIGJ5IHlvdXIgdXBkYXRlIGZ1bmN0aW9uIVxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gTm9kZSBhIC0+IE5vZGUgbXNnXG5tYXAgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm1hcFxuXG5cblxuLS0gQVRUUklCVVRFU1xuXG5cbnstfCBXaGVuIHVzaW5nIEhUTUwgYW5kIEpTLCB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBwYXJ0cyBvZiBhIERPTSBub2RlLlxuXG4gIDEuIEF0dHJpYnV0ZXMgJm1kYXNoOyBZb3UgY2FuIHNldCB0aGluZ3MgaW4gSFRNTCBpdHNlbGYuIFNvIHRoZSBgY2xhc3NgXG4gICAgIGluIGA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdcIj48L2Rpdj5gIGlzIGNhbGxlZCBhbiAqYXR0cmlidXRlKi5cblxuICAyLiBQcm9wZXJ0aWVzICZtZGFzaDsgWW91IGNhbiBhbHNvIHNldCB0aGluZ3MgaW4gSlMuIFNvIHRoZSBgY2xhc3NOYW1lYFxuICAgICBpbiBgZGl2LmNsYXNzTmFtZSA9ICdncmVldGluZydgIGlzIGNhbGxlZCBhICpwcm9wZXJ0eSouXG5cblNvIHRoZSBgY2xhc3NgIGF0dHJpYnV0ZSBjb3JyZXNwb25kcyB0byB0aGUgYGNsYXNzTmFtZWAgcHJvcGVydHkuIEF0IGZpcnN0XG5nbGFuY2UsIHBlcmhhcHMgdGhpcyBkaXN0aW5jdGlvbiBpcyBkZWZlbnNpYmxlLCBidXQgaXQgZ2V0cyBtdWNoIGNyYXppZXIuXG4qVGhlcmUgaXMgbm90IGFsd2F5cyBhIG9uZS10by1vbmUgbWFwcGluZyBiZXR3ZWVuIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnRpZXMhKlxuWWVzLCB0aGF0IGlzIGEgdHJ1ZSBmYWN0LiBTb21ldGltZXMgYW4gYXR0cmlidXRlIGV4aXN0cywgYnV0IHRoZXJlIGlzIG5vXG5jb3JyZXNwb25kaW5nIHByb3BlcnR5LiBTb21ldGltZXMgY2hhbmdpbmcgYW4gYXR0cmlidXRlIGRvZXMgbm90IGNoYW5nZSB0aGVcbnVuZGVybHlpbmcgcHJvcGVydHkuIEZvciBleGFtcGxlLCBhcyBvZiB0aGlzIHdyaXRpbmcsIHRoZSBgd2Via2l0LXBsYXlzaW5saW5lYFxuYXR0cmlidXRlIGNhbiBiZSB1c2VkIGluIEhUTUwsIGJ1dCB0aGVyZSBpcyBubyBjb3JyZXNwb25kaW5nIHByb3BlcnR5IVxuLX1cbnR5cGUgQXR0cmlidXRlIG1zZyA9IEF0dHJpYnV0ZVxuXG5cbnstfCBTcGVjaWZ5IGEgc3R5bGUuXG5cbiAgICBncmVldGluZyA6IE5vZGUgbXNnXG4gICAgZ3JlZXRpbmcgPVxuICAgICAgbm9kZSBcImRpdlwiXG4gICAgICAgIFsgc3R5bGUgXCJiYWNrZ3JvdW5kQ29sb3JcIiBcInJlZFwiXG4gICAgICAgICwgc3R5bGUgXCJoZWlnaHRcIiBcIjkwcHhcIlxuICAgICAgICAsIHN0eWxlIFwid2lkdGhcIiBcIjEwMCVcIlxuICAgICAgICBdXG4gICAgICAgIFsgdGV4dCBcIkhlbGxvIVwiXG4gICAgICAgIF1cblxuLX1cbnN0eWxlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zdHlsZSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20uc3R5bGVcblxuXG57LXwgQ3JlYXRlIGEgcHJvcGVydHkuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICBidXR0b25MYWJlbCA6IE5vZGUgbXNnXG4gICAgYnV0dG9uTGFiZWwgPVxuICAgICAgbm9kZSBcImxhYmVsXCIgWyBwcm9wZXJ0eSBcImh0bWxGb3JcIiAoRW5jb2RlLnN0cmluZyBcImJ1dHRvblwiKSBdIFsgdGV4dCBcIkxhYmVsXCIgXVxuXG5Ob3RpY2UgdGhhdCB5b3UgbXVzdCBnaXZlIHRoZSAqcHJvcGVydHkqIG5hbWUsIHNvIHdlIHVzZSBgaHRtbEZvcmAgYXMgaXRcbndvdWxkIGJlIGluIEphdmFTY3JpcHQsIG5vdCBgZm9yYCBhcyBpdCB3b3VsZCBhcHBlYXIgaW4gSFRNTC5cbi19XG5wcm9wZXJ0eSA6IFN0cmluZyAtPiBKc29uLlZhbHVlIC0+IEF0dHJpYnV0ZSBtc2dcbnByb3BlcnR5IGtleSB2YWx1ZSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ucHJvcGVydHlcbiAgICAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub0lubmVySHRtbE9yRm9ybUFjdGlvbiBrZXkpXG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9KYXZhU2NyaXB0T3JIdG1sVXJpIHZhbHVlKVxuXG5cbnstfCBDcmVhdGUgYW4gYXR0cmlidXRlLiBUaGlzIHVzZXMgSmF2YVNjcmlwdOKAmXMgYHNldEF0dHJpYnV0ZWAgZnVuY3Rpb25cbmJlaGluZCB0aGUgc2NlbmVzLlxuXG4gICAgYnV0dG9uTGFiZWwgOiBOb2RlIG1zZ1xuICAgIGJ1dHRvbkxhYmVsID1cbiAgICAgIG5vZGUgXCJsYWJlbFwiIFsgYXR0cmlidXRlIFwiZm9yXCIgXCJidXR0b25cIiBdIFsgdGV4dCBcIkxhYmVsXCIgXVxuXG5Ob3RpY2UgdGhhdCB5b3UgbXVzdCBnaXZlIHRoZSAqYXR0cmlidXRlKiBuYW1lLCBzbyB3ZSB1c2UgYGZvcmAgYXMgaXQgd291bGRcbmJlIGluIEhUTUwsIG5vdCBgaHRtbEZvcmAgYXMgaXQgd291bGQgYXBwZWFyIGluIEpTLlxuLX1cbmF0dHJpYnV0ZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYXR0cmlidXRlIGtleSB2YWx1ZSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20uYXR0cmlidXRlXG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9Pbk9yRm9ybUFjdGlvbiBrZXkpXG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9KYXZhU2NyaXB0T3JIdG1sVXJpIHZhbHVlKVxuXG5cbnstfCBXb3VsZCB5b3UgYmVsaWV2ZSB0aGF0IHRoZXJlIGlzIGFub3RoZXIgd2F5IHRvIGRvIHRoaXM/ISBUaGlzIHVzZXNcbkphdmFTY3JpcHQncyBgc2V0QXR0cmlidXRlTlNgIGZ1bmN0aW9uIGJlaGluZCB0aGUgc2NlbmVzLiBJdCBpcyBkb2luZyBwcmV0dHlcbm11Y2ggdGhlIHNhbWUgdGhpbmcgYXMgYGF0dHJpYnV0ZWAgYnV0IHlvdSBhcmUgYWJsZSB0byBoYXZlIG5hbWVzcGFjZWRcbmF0dHJpYnV0ZXMuIEFzIGFuIGV4YW1wbGUsIHRoZSBgZWxtL3N2Z2AgcGFja2FnZSBkZWZpbmVzIGFuIGF0dHJpYnV0ZVxubGlrZSB0aGlzOlxuXG4gICAgeGxpbmtIcmVmIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICB4bGlua0hyZWYgdmFsdWUgPVxuICAgICAgYXR0cmlidXRlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgXCJ4bGluazpocmVmXCIgdmFsdWVcbi19XG5hdHRyaWJ1dGVOUyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmF0dHJpYnV0ZU5TIG5hbWVzcGFjZSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmF0dHJpYnV0ZU5TXG4gICAgbmFtZXNwYWNlXG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9Pbk9yRm9ybUFjdGlvbiBrZXkpXG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9KYXZhU2NyaXB0T3JIdG1sVXJpIHZhbHVlKVxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGEgYEF0dHJpYnV0ZWAuXG4tfVxubWFwQXR0cmlidXRlIDogKGEgLT4gYikgLT4gQXR0cmlidXRlIGEgLT4gQXR0cmlidXRlIGJcbm1hcEF0dHJpYnV0ZSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubWFwQXR0cmlidXRlXG5cblxuXG4tLSBFVkVOVFNcblxuXG57LXwgQ3JlYXRlIGN1c3RvbSBldmVudCBoYW5kbGVycy5cblxuWW91IGNhbiBkZWZpbmUgYG9uQ2xpY2tgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIG9uQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uQ2xpY2sgbXNnID1cbiAgICAgIG9uIFwiY2xpY2tcIiAoTm9ybWFsIChEZWNvZGUuc3VjY2VlZCBtc2cpKVxuXG4qKk5vdGU6KiogVGhlc2UgZXZlbnQgaGFuZGxlcnMgdHJpZ2dlciBpbiB0aGUgYnViYmxlIHBoYXNlLiBZb3UgY2FuIGxlYXJuIG1vcmVcbmFib3V0IHdoYXQgdGhhdCBtZWFucyBbaGVyZV1bXS4gVGhlcmUgaXMgbm90IHN1cHBvcnQgd2l0aGluIEdyZW4gZm9yIGRvaW5nXG50cmlja3Mgd2l0aCB0aGUgY2FwdHVyZSBwaGFzZS4gV2UgcmVjb21tZW5kIGRvaW5nIHRoYXQgaW4gSlMgdGhyb3VnaCBwb3J0cy5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL3ZpcnR1YWwtZG9tL2Jsb2IvbWFzdGVyL2hpbnRzL2NhcHR1cmUtdnMtYnViYmxlLm1kXG4tfVxub24gOiBTdHJpbmcgLT4gSGFuZGxlciBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub24gPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm9uXG5cblxuey18IFdoZW4gdXNpbmcgYG9uYCB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgZXZlbnQgYmVoYXZpb3JcbmEgYml0LiBUaGVyZSBhcmUgdHdvIHdheXMgdG8gZG8gdGhpczpcblxuICAtIFtgc3RvcFByb3BhZ2F0aW9uYF1bc3BdIG1lYW5zIHRoZSBldmVudCBzdG9wcyB0cmF2ZWxpbmcgdGhyb3VnaCB0aGUgRE9NLlxuICBTbyBpZiBwcm9wYWdhdGlvbiBvZiBhIGNsaWNrIGlzIHN0b3BwZWQsIGl0IHdpbGwgbm90IHRyaWdnZXIgYW55IG90aGVyIGV2ZW50XG4gIGxpc3RlbmVycy5cblxuICAtIFtgcHJldmVudERlZmF1bHRgXVtwZF0gbWVhbnMgYW55IGJ1aWx0LWluIGJyb3dzZXIgYmVoYXZpb3IgcmVsYXRlZCB0byB0aGVcbiAgZXZlbnQgaXMgcHJldmVudGVkLiBUaGlzIGNhbiBiZSBoYW5keSB3aXRoIGtleSBwcmVzc2VzIG9yIHRvdWNoIGdlc3R1cmVzLlxuXG4qKk5vdGUgMToqKiBBIFtwYXNzaXZlXVtdIGV2ZW50IGxpc3RlbmVyIHdpbGwgYmUgY3JlYXRlZCBpZiB5b3UgdXNlIGBOb3JtYWxgXG5vciBgTWF5U3RvcFByb3BhZ2F0aW9uYC4gSW4gYm90aCBjYXNlcyBgcHJldmVudERlZmF1bHRgIGNhbm5vdCBiZSB1c2VkLCBzb1xud2UgY2FuIGVuYWJsZSBvcHRpbWl6YXRpb25zIGZvciB0b3VjaCwgc2Nyb2xsLCBhbmQgd2hlZWwgZXZlbnRzIGluIHNvbWVcbmJyb3dzZXJzLlxuXG4qKk5vdGUgMjoqKiBTb21lIGFjdGlvbnMsIGxpa2UgdXBsb2FkaW5nIGFuZCBkb3dubG9hZGluZyBmaWxlcywgYXJlIG9ubHlcbmFsbG93ZWQgd2hlbiB0aGUgSmF2YVNjcmlwdCBldmVudCBsb29wIGlzIHJ1bm5pbmcgYmVjYXVzZSBvZiB1c2VyIGlucHV0LiBUaGlzXG5pcyBmb3Igc2VjdXJpdHkhIFNvIHdoZW4gYW4gZXZlbnQgb2NjdXJzLCB3ZSBjYWxsIGB1cGRhdGVgIGFuZCBzZW5kIGFueSBgcG9ydGBcbm1lc3NhZ2VzIGltbWVkaWF0ZWx5LCBhbGwgd2l0aGluIHRoZSBzYW1lIHRpY2sgb2YgdGhlIGV2ZW50IGxvb3AuIFRoaXMgbWFrZXNcbml0IHBvc3NpYmxlIHRvIGhhbmRsZSB1c2VyLWluc3RpZ2F0ZWQgZXZlbnRzIGluIHBvcnRzLlxuXG4qKk5vdGUgMzoqKiBOb3JtYWxseSB0aGUgYHZpZXdgIGlzIHNob3duIGluIHRoZSBuZXh0IGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXG5jYWxsLiBUaGlzIGFsbG93cyB1cyB0byBzYXZlIHNvbWUgd29yayBpZiBtZXNzYWdlcyBhcmUgY29taW5nIGluIHZlcnkgcXVpY2tseS5cbkJ1dCBpZiBgc3RvcFByb3BhZ2F0aW9uYCBpcyB1c2VkLCB3ZSB1cGRhdGUgdGhlIERPTSBpbW1lZGlhdGVseSwgd2l0aGluIHRoZVxuc2FtZSB0aWNrIG9mIHRoZSBldmVudCBsb29wLiBUaGlzIGlzIHVzZWZ1bCBmb3IgRE9NIG5vZGVzIHRoYXQgaG9sZCB0aGVpciBvd25cbnN0YXRlLCBsaWtlIGA8aW5wdXQgdHlwZT1cInRleHRcIj5gLiBJZiBzb21lb25lIHR5cGVzIHZlcnkgZmFzdCwgdGhlIHN0YXRlIGluIHRoZVxuRE9NIGNhbiBkaXZlcmdlIGZyb20gdGhlIHN0YXRlIGluIHlvdXIgYE1vZGVsYCB3aGlsZSB3YWl0aW5nIG9uIHRoZSBuZXh0XG5gcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBjYWxsLiBTbyB1cGRhdGluZyB0aGUgRE9NIHN5bmNocm9ub3VzbHkgbWFrZXMgdGhpc1xuZGl2ZXJnZW5jZSBpbXBvc3NpYmxlLlxuXG5bc3BdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvc3RvcFByb3BhZ2F0aW9uXG5bcGRdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHRcbltwYXNzaXZlXTogaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbi19XG50eXBlIEhhbmRsZXIgbXNnXG4gID0gTm9ybWFsIChKc29uLkRlY29kZXIgbXNnKVxuICB8IE1heVN0b3BQcm9wYWdhdGlvbiAoSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCB9KVxuICB8IE1heVByZXZlbnREZWZhdWx0IChKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSlcbiAgfCBDdXN0b20gKEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wsIHByZXZlbnREZWZhdWx0IDogQm9vbCB9KVxuXG5cblxuLS0gTEFaWSBOT0RFU1xuXG5cbnstfCBBIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0aGF0IGRlbGF5cyB0aGUgYnVpbGRpbmcgb2YgdmlydHVhbCBET00gbm9kZXMuXG5cbkNhbGxpbmcgYCh2aWV3IG1vZGVsKWAgd2lsbCBkZWZpbml0ZWx5IGJ1aWxkIHNvbWUgdmlydHVhbCBET00sIHBlcmhhcHMgYSBsb3Qgb2Zcbml0LiBDYWxsaW5nIGAobGF6eSB2aWV3IG1vZGVsKWAgZGVsYXlzIHRoZSBjYWxsIHVudGlsIGxhdGVyLiBEdXJpbmcgZGlmZmluZywgd2VcbmNhbiBjaGVjayB0byBzZWUgaWYgYG1vZGVsYCBpcyByZWZlcmVudGlhbGx5IGVxdWFsIHRvIHRoZSBwcmV2aW91cyB2YWx1ZSB1c2VkLFxuYW5kIGlmIHNvLCB3ZSBqdXN0IHN0b3AuIE5vIG5lZWQgdG8gYnVpbGQgdXAgdGhlIHRyZWUgc3RydWN0dXJlIGFuZCBkaWZmIGl0LFxud2Uga25vdyBpZiB0aGUgaW5wdXQgdG8gYHZpZXdgIGlzIHRoZSBzYW1lLCB0aGUgb3V0cHV0IG11c3QgYmUgdGhlIHNhbWUhXG4tfVxubGF6eSA6IChhIC0+IE5vZGUgbXNnKSAtPiBhIC0+IE5vZGUgbXNnXG5sYXp5ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gdHdvIGFyZ3VtZW50cy5cbi19XG5sYXp5MiA6IChhIC0+IGIgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBOb2RlIG1zZ1xubGF6eTIgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenkyXG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gdGhyZWUgYXJndW1lbnRzLlxuLX1cbmxhenkzIDogKGEgLT4gYiAtPiBjIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBOb2RlIG1zZ1xubGF6eTMgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenkzXG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gZm91ciBhcmd1bWVudHMuXG4tfVxubGF6eTQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBOb2RlIG1zZ1xubGF6eTQgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk0XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gZml2ZSBhcmd1bWVudHMuXG4tfVxubGF6eTUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gTm9kZSBtc2dcbmxhenk1ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5NVxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHNpeCBhcmd1bWVudHMuXG4tfVxubGF6eTYgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IE5vZGUgbXNnXG5sYXp5NiA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTZcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBzZXZlbiBhcmd1bWVudHMuXG4tfVxubGF6eTcgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiBOb2RlIG1zZ1xubGF6eTcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk3XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gZWlnaHQgYXJndW1lbnRzLlxuLX1cbmxhenk4IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gZyAtPiBoIC0+IE5vZGUgbXNnXG5sYXp5OCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eThcblxuXG5cbi0tIEtFWUVEIE5PREVTXG5cblxuey18IFdvcmtzIGp1c3QgbGlrZSBgbm9kZWAsIGJ1dCB5b3UgYWRkIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gZWFjaCBjaGlsZFxubm9kZS4gWW91IHdhbnQgdGhpcyB3aGVuIHlvdSBoYXZlIGEgbGlzdCBvZiBub2RlcyB0aGF0IGlzIGNoYW5naW5nOiBhZGRpbmdcbm5vZGVzLCByZW1vdmluZyBub2RlcywgZXRjLiBJbiB0aGVzZSBjYXNlcywgdGhlIHVuaXF1ZSBpZGVudGlmaWVycyBoZWxwIG1ha2VcbnRoZSBET00gbW9kaWZpY2F0aW9ucyBtb3JlIGVmZmljaWVudC5cbi19XG5rZXllZE5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogTm9kZSBtc2cgfSAtPiBOb2RlIG1zZ1xua2V5ZWROb2RlIHRhZyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ua2V5ZWROb2RlIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG57LXwgQ3JlYXRlIGEga2V5ZWQgYW5kIG5hbWVzcGFjZWQgRE9NIG5vZGUuIEZvciBleGFtcGxlLCBhbiBTVkcgYDxnPmAgbm9kZVxuY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXM6XG5cbiAgICBnIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5ICggU3RyaW5nLCBOb2RlIG1zZyApIC0+IE5vZGUgbXNnXG4gICAgZyA9XG4gICAgICBrZXllZE5vZGVOUyBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXCJnXCJcbi19XG5rZXllZE5vZGVOUyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogTm9kZSBtc2cgfSAtPiBOb2RlIG1zZ1xua2V5ZWROb2RlTlMgbmFtZXNwYWNlIHRhZyA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ua2V5ZWROb2RlTlMgbmFtZXNwYWNlIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG5cbi0tIEZPUiBJTlRFUk5BTCBVU0UgT05MWVxuXG5cbnRvSGFuZGxlckludCA6IEhhbmRsZXIgbXNnIC0+IEludFxudG9IYW5kbGVySW50IGhhbmRsZXIgPVxuICB3aGVuIGhhbmRsZXIgaXNcbiAgICBOb3JtYWwgXyAtPiAwXG4gICAgTWF5U3RvcFByb3BhZ2F0aW9uIF8gLT4gMVxuICAgIE1heVByZXZlbnREZWZhdWx0IF8gLT4gMlxuICAgIEN1c3RvbSBfIC0+IDNcbiIsCiAgICAgICAgIm1vZHVsZSBVcmwgZXhwb3NpbmdcbiAgKCBVcmxcbiAgLCBQcm90b2NvbCguLilcbiAgLCB0b1N0cmluZ1xuICAsIGZyb21TdHJpbmdcbiAgLCBwZXJjZW50RW5jb2RlXG4gICwgcGVyY2VudERlY29kZVxuICApXG5cblxuey18XG5cbiMgVVJMc1xuQGRvY3MgVXJsLCBQcm90b2NvbCwgdG9TdHJpbmcsIGZyb21TdHJpbmdcblxuIyBQZXJjZW50LUVuY29kaW5nXG5AZG9jcyBwZXJjZW50RW5jb2RlLCBwZXJjZW50RGVjb2RlXG5cbi19XG5cblxuaW1wb3J0IEdyZW4uS2VybmVsLlVybFxuXG5cblxuLS0gVVJMXG5cblxuey18IEluIFt0aGUgVVJJIHNwZWNdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2KSwgVGltIEJlcm5lcnMtTGVlXG5zYXlzIGEgVVJMIGxvb2tzIGxpa2UgdGhpczpcblxuYGBgXG4gIGh0dHBzOi8vZXhhbXBsZS5jb206ODA0Mi9vdmVyL3RoZXJlP25hbWU9ZmVycmV0I25vc2VcbiAgXFxfX18vICAgXFxfX19fX19fX19fX19fXy9cXF9fX19fX19fXy8gXFxfX19fX19fX18vIFxcX18vXG4gICAgfCAgICAgICAgICAgIHwgICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgfFxuICBzY2hlbWUgICAgIGF1dGhvcml0eSAgICAgICBwYXRoICAgICAgICBxdWVyeSAgIGZyYWdtZW50XG5gYGBcblxuV2hlbiB5b3UgYXJlIGNyZWF0aW5nIGEgc2luZ2xlLXBhZ2UgYXBwIHdpdGggW2BCcm93c2VyLmFwcGxpY2F0aW9uYF1bYXBwXSwgeW91XG51c2UgdGhlIFtgVXJsLlBhcnNlcmBdKFVybC1QYXJzZXIpIG1vZHVsZSB0byB0dXJuIGEgYFVybGAgaW50byBldmVuIG5pY2VyIGRhdGEuXG5cbklmIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBVUkxzLCBjaGVjayBvdXQgdGhlIFtgVXJsLkJ1aWxkZXJgXShVcmwtQnVpbGRlcilcbm1vZHVsZSBhcyB3ZWxsIVxuXG5bYXBwXTogL3BhY2thZ2VzL2VsbS9icm93c2VyL2xhdGVzdC9Ccm93c2VyI2FwcGxpY2F0aW9uXG5cbioqTm90ZToqKiBUaGlzIGlzIGEgc3Vic2V0IG9mIGFsbCB0aGUgZnVsbCBwb3NzaWJpbGl0aWVzIGxpc3RlZCBpbiB0aGUgVVJJXG5zcGVjLiBTcGVjaWZpY2FsbHksIGl0IGRvZXMgbm90IGFjY2VwdCB0aGUgYHVzZXJpbmZvYCBzZWdtZW50IHlvdSBzZWUgaW4gZW1haWxcbmFkZHJlc3NlcyBsaWtlIGB0b21AZXhhbXBsZS5jb21gLlxuLX1cbnR5cGUgYWxpYXMgVXJsID1cbiAgeyBwcm90b2NvbCA6IFByb3RvY29sXG4gICwgaG9zdCA6IFN0cmluZ1xuICAsIHBvcnRfIDogTWF5YmUgSW50XG4gICwgcGF0aCA6IFN0cmluZ1xuICAsIHF1ZXJ5IDogTWF5YmUgU3RyaW5nXG4gICwgZnJhZ21lbnQgOiBNYXliZSBTdHJpbmdcbiAgfVxuXG5cbnstfCBJcyB0aGUgVVJMIHNlcnZlZCBvdmVyIGEgc2VjdXJlIGNvbm5lY3Rpb24gb3Igbm90P1xuLX1cbnR5cGUgUHJvdG9jb2wgPSBIdHRwIHwgSHR0cHNcblxuXG57LXwgQXR0ZW1wdCB0byBicmVhayBhIFVSTCB1cCBpbnRvIFtgVXJsYF0oI1VybCkuIFRoaXMgaXMgdXNlZnVsIGluXG5zaW5nbGUtcGFnZSBhcHBzIHdoZW4geW91IHdhbnQgdG8gcGFyc2UgY2VydGFpbiBjaHVua3Mgb2YgYSBVUkwgdG8gZmlndXJlIG91dFxud2hhdCB0byBzaG93IG9uIHNjcmVlbi5cblxuICAgIGZyb21TdHJpbmcgXCJodHRwczovL2V4YW1wbGUuY29tOjQ0M1wiXG4gICAgLS0gSnVzdFxuICAgIC0tICAgeyBwcm90b2NvbCA9IEh0dHBzXG4gICAgLS0gICAsIGhvc3QgPSBcImV4YW1wbGUuY29tXCJcbiAgICAtLSAgICwgcG9ydF8gPSBKdXN0IDQ0M1xuICAgIC0tICAgLCBwYXRoID0gXCIvXCJcbiAgICAtLSAgICwgcXVlcnkgPSBOb3RoaW5nXG4gICAgLS0gICAsIGZyYWdtZW50ID0gTm90aGluZ1xuICAgIC0tICAgfVxuXG4gICAgZnJvbVN0cmluZyBcImh0dHBzOi8vZXhhbXBsZS5jb20vaGF0cz9xPXRvcCUyMGhhdFwiXG4gICAgLS0gSnVzdFxuICAgIC0tICAgeyBwcm90b2NvbCA9IEh0dHBzXG4gICAgLS0gICAsIGhvc3QgPSBcImV4YW1wbGUuY29tXCJcbiAgICAtLSAgICwgcG9ydF8gPSBOb3RoaW5nXG4gICAgLS0gICAsIHBhdGggPSBcIi9oYXRzXCJcbiAgICAtLSAgICwgcXVlcnkgPSBKdXN0IFwicT10b3AlMjBoYXRcIlxuICAgIC0tICAgLCBmcmFnbWVudCA9IE5vdGhpbmdcbiAgICAtLSAgIH1cblxuICAgIGZyb21TdHJpbmcgXCJodHRwOi8vZXhhbXBsZS5jb20vY29yZS9MaXN0LyNtYXBcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwXG4gICAgLS0gICAsIGhvc3QgPSBcImV4YW1wbGUuY29tXCJcbiAgICAtLSAgICwgcG9ydF8gPSBOb3RoaW5nXG4gICAgLS0gICAsIHBhdGggPSBcIi9jb3JlL0xpc3QvXCJcbiAgICAtLSAgICwgcXVlcnkgPSBOb3RoaW5nXG4gICAgLS0gICAsIGZyYWdtZW50ID0gSnVzdCBcIm1hcFwiXG4gICAgLS0gICB9XG5cblRoZSBjb252ZXJzaW9uIHRvIHNlZ21lbnRzIGNhbiBmYWlsIGluIHNvbWUgY2FzZXMgYXMgd2VsbDpcblxuICAgIGZyb21TdHJpbmcgXCJleGFtcGxlLmNvbTo0NDNcIiAgICAgICAgPT0gTm90aGluZyAgLS0gbm8gcHJvdG9jb2xcbiAgICBmcm9tU3RyaW5nIFwiaHR0cDovL3RvbUBleGFtcGxlLmNvbVwiID09IE5vdGhpbmcgIC0tIHVzZXJpbmZvIGRpc2FsbG93ZWRcbiAgICBmcm9tU3RyaW5nIFwiaHR0cDovLyNjYXRzXCIgICAgICAgICAgID09IE5vdGhpbmcgIC0tIG5vIGhvc3RcblxuKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgdXNlIFtgcGVyY2VudERlY29kZWBdKCNwZXJjZW50RGVjb2RlKSBhbnl0aGluZy5cbkl0IGp1c3Qgc3BsaXRzIHRoaW5ncyB1cC4gW2BVcmwuUGFyc2VyYF0oVXJsLVBhcnNlcikgYWN0dWFsbHkgX25lZWRzXyB0aGUgcmF3XG5gcXVlcnlgIHN0cmluZyB0byBwYXJzZSBpdCBwcm9wZXJseS4gT3RoZXJ3aXNlIGl0IGNvdWxkIGdldCBjb25mdXNlZCBhYm91dCBgPWBcbmFuZCBgJmAgY2hhcmFjdGVycyFcbi19XG5mcm9tU3RyaW5nIDogU3RyaW5nIC0+IE1heWJlIFVybFxuZnJvbVN0cmluZyBzdHIgPVxuICBpZiBTdHJpbmcuc3RhcnRzV2l0aCBcImh0dHA6Ly9cIiBzdHIgdGhlblxuICAgIGNob21wQWZ0ZXJQcm90b2NvbCBIdHRwIChTdHJpbmcuZHJvcEZpcnN0IDcgc3RyKVxuXG4gIGVsc2UgaWYgU3RyaW5nLnN0YXJ0c1dpdGggXCJodHRwczovL1wiIHN0ciB0aGVuXG4gICAgY2hvbXBBZnRlclByb3RvY29sIEh0dHBzIChTdHJpbmcuZHJvcEZpcnN0IDggc3RyKVxuXG4gIGVsc2VcbiAgICBOb3RoaW5nXG5cblxuY2hvbXBBZnRlclByb3RvY29sIDogUHJvdG9jb2wgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBBZnRlclByb3RvY29sIHByb3RvY29sIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBBcnJheS5nZXQgMCAoU3RyaW5nLmluZGljZXMgXCIjXCIgc3RyKSBpc1xuICAgICAgTm90aGluZyAtPlxuICAgICAgICBjaG9tcEJlZm9yZUZyYWdtZW50IHByb3RvY29sIE5vdGhpbmcgc3RyXG5cbiAgICAgIEp1c3QgaSAtPlxuICAgICAgICBjaG9tcEJlZm9yZUZyYWdtZW50IHByb3RvY29sIChKdXN0IChTdHJpbmcuZHJvcEZpcnN0IChpICsgMSkgc3RyKSkgKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpXG5cblxuY2hvbXBCZWZvcmVGcmFnbWVudCA6IFByb3RvY29sIC0+IE1heWJlIFN0cmluZyAtPiBTdHJpbmcgLT4gTWF5YmUgVXJsXG5jaG9tcEJlZm9yZUZyYWdtZW50IHByb3RvY29sIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIEFycmF5LmdldCAwIChTdHJpbmcuaW5kaWNlcyBcIj9cIiBzdHIpIGlzXG4gICAgICBOb3RoaW5nIC0+XG4gICAgICAgIGNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgTm90aGluZyBmcmFnIHN0clxuXG4gICAgICBKdXN0IGkgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVRdWVyeSBwcm90b2NvbCAoSnVzdCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikpIGZyYWcgKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpXG5cblxuY2hvbXBCZWZvcmVRdWVyeSA6IFByb3RvY29sIC0+IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVRdWVyeSBwcm90b2NvbCBwYXJhbXMgZnJhZyBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgKFN0cmluZy5pbmRpY2VzIFwiL1wiIHN0cikgaXNcbiAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVQYXRoIHByb3RvY29sIFwiL1wiIHBhcmFtcyBmcmFnIHN0clxuXG4gICAgICBKdXN0IGkgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVQYXRoIHByb3RvY29sIChTdHJpbmcuZHJvcEZpcnN0IGkgc3RyKSBwYXJhbXMgZnJhZyAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cilcblxuXG5jaG9tcEJlZm9yZVBhdGggOiBQcm90b2NvbCAtPiBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBTdHJpbmcgLT4gTWF5YmUgVXJsXG5jaG9tcEJlZm9yZVBhdGggcHJvdG9jb2wgcGF0aCBwYXJhbXMgZnJhZyBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgfHwgU3RyaW5nLmNvbnRhaW5zIFwiQFwiIHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBTdHJpbmcuaW5kaWNlcyBcIjpcIiBzdHIgaXNcbiAgICAgIFtdIC0+XG4gICAgICAgIEp1c3QgPHwgXG4gICAgICAgICAgICB7IHByb3RvY29sID0gcHJvdG9jb2wgXG4gICAgICAgICAgICAsIGhvc3QgPSBzdHIgXG4gICAgICAgICAgICAsIHBvcnRfID0gTm90aGluZyBcbiAgICAgICAgICAgICwgcGF0aCA9IHBhdGggXG4gICAgICAgICAgICAsIHF1ZXJ5ID0gcGFyYW1zIFxuICAgICAgICAgICAgLCBmcmFnbWVudCA9IGZyYWdcbiAgICAgICAgICAgIH1cblxuICAgICAgW2ldIC0+XG4gICAgICAgIHdoZW4gU3RyaW5nLnRvSW50IChTdHJpbmcuZHJvcEZpcnN0IChpICsgMSkgc3RyKSBpc1xuICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgIHBvcnRfIC0+XG4gICAgICAgICAgICBKdXN0IDx8IFxuICAgICAgICAgICAgICAgIHsgcHJvdG9jb2wgPSBwcm90b2NvbFxuICAgICAgICAgICAgICAgICwgaG9zdCA9IChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKSBcbiAgICAgICAgICAgICAgICAsIHBvcnRfID0gcG9ydF8gXG4gICAgICAgICAgICAgICAgLCBwYXRoID0gcGF0aCBcbiAgICAgICAgICAgICAgICAsIHF1ZXJ5ID0gcGFyYW1zIFxuICAgICAgICAgICAgICAgICwgZnJhZ21lbnQgPSBmcmFnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICBfIC0+XG4gICAgICAgIE5vdGhpbmdcblxuXG57LXwgVHVybiBhIFtgVXJsYF0oI1VybCkgaW50byBhIGBTdHJpbmdgLlxuLX1cbnRvU3RyaW5nIDogVXJsIC0+IFN0cmluZ1xudG9TdHJpbmcgdXJsID1cbiAgbGV0XG4gICAgaHR0cCA9XG4gICAgICB3aGVuIHVybC5wcm90b2NvbCBpc1xuICAgICAgICBIdHRwIC0+XG4gICAgICAgICAgXCJodHRwOi8vXCJcblxuICAgICAgICBIdHRwcyAtPlxuICAgICAgICAgIFwiaHR0cHM6Ly9cIlxuICBpblxuICBhZGRQb3J0IHVybC5wb3J0XyAoaHR0cCArKyB1cmwuaG9zdCkgKysgdXJsLnBhdGhcbiAgICB8PiBhZGRQcmVmaXhlZCBcIj9cIiB1cmwucXVlcnlcbiAgICB8PiBhZGRQcmVmaXhlZCBcIiNcIiB1cmwuZnJhZ21lbnRcblxuXG5hZGRQb3J0IDogTWF5YmUgSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbmFkZFBvcnQgbWF5YmVQb3J0IHN0YXJ0ZXIgPVxuICB3aGVuIG1heWJlUG9ydCBpc1xuICAgIE5vdGhpbmcgLT5cbiAgICAgIHN0YXJ0ZXJcblxuICAgIEp1c3QgcG9ydF8gLT5cbiAgICAgIHN0YXJ0ZXIgKysgXCI6XCIgKysgU3RyaW5nLmZyb21JbnQgcG9ydF9cblxuXG5hZGRQcmVmaXhlZCA6IFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xuYWRkUHJlZml4ZWQgcHJlZml4IG1heWJlU2VnbWVudCBzdGFydGVyID1cbiAgd2hlbiBtYXliZVNlZ21lbnQgaXNcbiAgICBOb3RoaW5nIC0+XG4gICAgICBzdGFydGVyXG5cbiAgICBKdXN0IHNlZ21lbnQgLT5cbiAgICAgIHN0YXJ0ZXIgKysgcHJlZml4ICsrIHNlZ21lbnRcblxuXG5cbi0tIFBFUkNFTlQgRU5DT0RJTkdcblxuXG57LXwgKipVc2UgW1VybC5CdWlsZGVyXShVcmwtQnVpbGRlcikgaW5zdGVhZCEqKiBGdW5jdGlvbnMgbGlrZSBgYWJzb2x1dGVgLFxuYHJlbGF0aXZlYCwgYW5kIGBjcm9zc09yaWdpbmAgYWxyZWFkeSBkbyB0aGlzIGF1dG9tYXRpY2FsbHkhIGBwZXJjZW50RW5jb2RlYFxuaXMgb25seSBhdmFpbGFibGUgc28gdGhhdCBleHRyZW1lbHkgY3VzdG9tIGNhc2VzIGFyZSBwb3NzaWJsZSwgaWYgbmVlZGVkLlxuXG5QZXJjZW50LWVuY29kaW5nIGlzIGhvdyBbdGhlIG9mZmljaWFsIFVSSSBzcGVjXVt1cmldIOKAnGVzY2FwZXPigJ0gc3BlY2lhbFxuY2hhcmFjdGVycy4gWW91IGNhbiBzdGlsbCByZXByZXNlbnQgYSBgP2AgZXZlbiB0aG91Z2ggaXQgaXMgcmVzZXJ2ZWQgZm9yXG5xdWVyaWVzLlxuXG5UaGlzIGZ1bmN0aW9uIGV4aXN0cyBpbiBjYXNlIHlvdSB3YW50IHRvIGRvIHNvbWV0aGluZyBleHRyYSBjdXN0b20uIEhlcmUgYXJlXG5zb21lIGV4YW1wbGVzOlxuXG4gICAgLS0gc3RhbmRhcmQgQVNDSUkgZW5jb2RpbmdcbiAgICBwZXJjZW50RW5jb2RlIFwiaGF0XCIgICA9PSBcImhhdFwiXG4gICAgcGVyY2VudEVuY29kZSBcInRvIGJlXCIgPT0gXCJ0byUyMGJlXCJcbiAgICBwZXJjZW50RW5jb2RlIFwiOTklXCIgICA9PSBcIjk5JTI1XCJcblxuICAgIC0tIG5vbi1zdGFuZGFyZCwgYnV0IHdpZGVseSBhY2NlcHRlZCwgVVRGLTggZW5jb2RpbmdcbiAgICBwZXJjZW50RW5jb2RlIFwiJFwiID09IFwiJTI0XCJcbiAgICBwZXJjZW50RW5jb2RlIFwiwqJcIiA9PSBcIiVDMiVBMlwiXG4gICAgcGVyY2VudEVuY29kZSBcIuKCrFwiID09IFwiJUUyJTgyJUFDXCJcblxuVGhpcyBpcyB0aGUgc2FtZSBiZWhhdmlvciBhcyBKYXZhU2NyaXB0J3MgW2BlbmNvZGVVUklDb21wb25lbnRgXVtqc10gZnVuY3Rpb24sXG5hbmQgdGhlIHJ1bGVzIGFyZSBkZXNjcmliZWQgaW4gbW9yZSBkZXRhaWwgb2ZmaWNpYWxseSBbaGVyZV1bczJdIGFuZCB3aXRoIHNvbWVcbm5vdGVzIGFib3V0IFVuaWNvZGUgW2hlcmVdW3dpa2ldLlxuXG5banNdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9lbmNvZGVVUklDb21wb25lbnRcblt1cmldOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NlxuW3MyXTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjFcblt3aWtpXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGVyY2VudC1lbmNvZGluZ1xuLX1cbnBlcmNlbnRFbmNvZGUgOiBTdHJpbmcgLT4gU3RyaW5nXG5wZXJjZW50RW5jb2RlID1cbiAgR3Jlbi5LZXJuZWwuVXJsLnBlcmNlbnRFbmNvZGVcblxuXG57LXwgKipVc2UgW1VybC5QYXJzZXJdKFVybC1QYXJzZXIpIGluc3RlYWQhKiogSXQgd2lsbCBkZWNvZGUgcXVlcnlcbnBhcmFtZXRlcnMgYXBwcm9wcmlhdGVseSBhbHJlYWR5ISBgcGVyY2VudERlY29kZWAgaXMgb25seSBhdmFpbGFibGUgc28gdGhhdFxuZXh0cmVtZWx5IGN1c3RvbSBjYXNlcyBhcmUgcG9zc2libGUsIGlmIG5lZWRlZC5cblxuQ2hlY2sgb3V0IHRoZSBgcGVyY2VudEVuY29kZWAgZnVuY3Rpb24gdG8gbGVhcm4gYWJvdXQgcGVyY2VudC1lbmNvZGluZy5cblRoaXMgZnVuY3Rpb24gZG9lcyB0aGUgb3Bwb3NpdGUhIEhlcmUgYXJlIHRoZSByZXZlcnNlIGV4YW1wbGVzOlxuXG4gICAgLS0gQVNDSUlcbiAgICBwZXJjZW50RGVjb2RlIFwiaGF0XCIgICAgICAgPT0gSnVzdCBcImhhdFwiXG4gICAgcGVyY2VudERlY29kZSBcInRvJTIwYmVcIiAgID09IEp1c3QgXCJ0byBiZVwiXG4gICAgcGVyY2VudERlY29kZSBcIjk5JTI1XCIgICAgID09IEp1c3QgXCI5OSVcIlxuXG4gICAgLS0gVVRGLThcbiAgICBwZXJjZW50RGVjb2RlIFwiJTI0XCIgICAgICAgPT0gSnVzdCBcIiRcIlxuICAgIHBlcmNlbnREZWNvZGUgXCIlQzIlQTJcIiAgICA9PSBKdXN0IFwiwqJcIlxuICAgIHBlcmNlbnREZWNvZGUgXCIlRTIlODIlQUNcIiA9PSBKdXN0IFwi4oKsXCJcblxuV2h5IGlzIGl0IGEgYE1heWJlYCB0aG91Z2g/IFdlbGwsIHRoZXNlIHN0cmluZ3MgY29tZSBmcm9tIHN0cmFuZ2VycyBvbiB0aGVcbmludGVybmV0IGFzIGEgYnVuY2ggb2YgYml0cyBhbmQgbWF5IGhhdmUgZW5jb2RpbmcgcHJvYmxlbXMuIEZvciBleGFtcGxlOlxuXG4gICAgcGVyY2VudERlY29kZSBcIiVcIiAgID09IE5vdGhpbmcgIC0tIG5vdCBmb2xsb3dlZCBieSB0d28gaGV4IGRpZ2l0c1xuICAgIHBlcmNlbnREZWNvZGUgXCIlWFlcIiA9PSBOb3RoaW5nICAtLSBub3QgZm9sbG93ZWQgYnkgdHdvIEhFWCBkaWdpdHNcbiAgICBwZXJjZW50RGVjb2RlIFwiJUMyXCIgPT0gTm90aGluZyAgLS0gaGFsZiBvZiB0aGUgXCLColwiIGVuY29kaW5nIFwiJUMyJUEyXCJcblxuVGhpcyBpcyB0aGUgc2FtZSBiZWhhdmlvciBhcyBKYXZhU2NyaXB0J3MgW2BkZWNvZGVVUklDb21wb25lbnRgXVtqc10gZnVuY3Rpb24uXG5cbltqc106IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL2RlY29kZVVSSUNvbXBvbmVudFxuLX1cbnBlcmNlbnREZWNvZGUgOiBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nXG5wZXJjZW50RGVjb2RlID1cbiAgR3Jlbi5LZXJuZWwuVXJsLnBlcmNlbnREZWNvZGVcbiIsCiAgICAgICAgImVmZmVjdCBtb2R1bGUgVGFzayB3aGVyZSB7IGNvbW1hbmQgPSBNeUNtZCB9IGV4cG9zaW5nXG4gICAgKCBUYXNrLCBwZXJmb3JtLCBhdHRlbXB0LCBleGVjdXRlXG4gICAgLCBhbmRUaGVuLCBhd2FpdCwgc3VjY2VlZCwgZmFpbCwgc2VxdWVuY2VcbiAgICAsIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuICAgICwgb25FcnJvciwgbWFwRXJyb3JcbiAgICApXG5cbnstfCBUYXNrcyBtYWtlIGl0IGVhc3kgdG8gZGVzY3JpYmUgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMgdGhhdCBtYXkgZmFpbCwgbGlrZVxuSFRUUCByZXF1ZXN0cyBvciB3cml0aW5nIHRvIGEgZGF0YWJhc2UuXG5cblxuQGRvY3MgVGFzaywgcGVyZm9ybSwgYXR0ZW1wdCwgZXhlY3V0ZVxuXG5cbiMjIENoYWluc1xuXG5AZG9jcyBhbmRUaGVuLCBhd2FpdCwgc3VjY2VlZCwgZmFpbCwgc2VxdWVuY2VcblxuXG4jIyBNYXBzXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuXG5cbiMjIEVycm9yc1xuXG5AZG9jcyBvbkVycm9yLCBtYXBFcnJvclxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoKDw8KSwgKHw+KSwgTmV2ZXIpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBQbGF0Zm9ybVxuaW1wb3J0IFBsYXRmb3JtLkNtZCBleHBvc2luZyAoQ21kKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KC4uKSlcblxuXG57LXwgSGVyZSBhcmUgc29tZSBjb21tb24gdGFza3M6XG5cbiAgLSBbYG5vdyA6IFRhc2sgeCBQb3NpeGBdKFRpbWUjbm93KVxuICAtIFtgZm9jdXMgOiBTdHJpbmcgLT4gVGFzayBFcnJvciB7fWBdW2ZvY3VzXVxuICAtIFtgc2xlZXAgOiBGbG9hdCAtPiBUYXNrIHgge31gXShQcm9jZXNzI3NsZWVwKVxuXG5bZm9jdXNdOiAvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci9sYXRlc3QvbW9kdWxlL0Jyb3dzZXIuRG9tI2ZvY3VzXG5cbkluIGVhY2ggY2FzZSB3ZSBoYXZlIGEgYFRhc2tgIHRoYXQgd2lsbCByZXNvbHZlIHN1Y2Nlc3NmdWxseSB3aXRoIGFuIGBhYCB2YWx1ZVxub3IgdW5zdWNjZXNzZnVsbHkgd2l0aCBhbiBgeGAgdmFsdWUuIFNvIGBCcm93c2VyLkRvbS5mb2N1c2Agd2UgbWF5IGZhaWwgd2l0aCBhblxuYEVycm9yYCBpZiB0aGUgZ2l2ZW4gSUQgZG9lcyBub3QgZXhpc3QuIFdoZXJlYXMgYFRpbWUubm93YCBuZXZlciBmYWlscyBzb1xuSSBjYW5ub3QgYmUgbW9yZSBzcGVjaWZpYyB0aGFuIGB4YC4gTm8gc3VjaCB2YWx1ZSB3aWxsIGV2ZXIgZXhpc3QhIEluc3RlYWQgaXRcbmFsd2F5cyBzdWNjZWVkcyB3aXRoIHRoZSBjdXJyZW50IFBPU0lYIHRpbWUuXG5cbk1vcmUgZ2VuZXJhbGx5IGEgdGFzayBpcyBhIF9kZXNjcmlwdGlvbl8gb2Ygd2hhdCB5b3UgbmVlZCB0byBkby4gTGlrZSBhIHRvZG9cbmxpc3QuIE9yIGxpa2UgYSBncm9jZXJ5IGxpc3QuIE9yIGxpa2UgR2l0SHViIGlzc3Vlcy4gU28gc2F5aW5nIFwidGhlIHRhc2sgaXNcbnRvIHRlbGwgbWUgdGhlIGN1cnJlbnQgUE9TSVggdGltZVwiIGRvZXMgbm90IGNvbXBsZXRlIHRoZSB0YXNrISBZb3UgbmVlZFxuW2BwZXJmb3JtYF0oI3BlcmZvcm0pIHRhc2tzIG9yIFtgYXR0ZW1wdGBdKCNhdHRlbXB0KSB0YXNrcy5cblxuLX1cbnR5cGUgYWxpYXMgVGFzayB4IGEgPVxuICAgIFBsYXRmb3JtLlRhc2sgeCBhXG5cblxuXG4tLSBCQVNJQ1NcblxuXG57LXwgQSB0YXNrIHRoYXQgc3VjY2VlZHMgaW1tZWRpYXRlbHkgd2hlbiBydW4uIEl0IGlzIHVzdWFsbHkgdXNlZCB3aXRoXG5bYGFuZFRoZW5gXSgjYW5kVGhlbikuIFlvdSBjYW4gdXNlIGl0IGxpa2UgYG1hcGAgaWYgeW91IHdhbnQ6XG5cbiAgICBpbXBvcnQgVGltZVxuXG5cbiAgICB0aW1lSW5NaWxsaXMgOiBUYXNrIHggSW50XG4gICAgdGltZUluTWlsbGlzID1cbiAgICAgICAgVGltZS5ub3dcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcdCAtPiBzdWNjZWVkIChUaW1lLnBvc2l4VG9NaWxsaXMgdCkpXG5cbi19XG5zdWNjZWVkIDogYSAtPiBUYXNrIHggYVxuc3VjY2VlZCA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLnN1Y2NlZWRcblxuXG57LXwgQSB0YXNrIHRoYXQgZmFpbHMgaW1tZWRpYXRlbHkgd2hlbiBydW4uIExpa2Ugd2l0aCBgc3VjY2VlZGAsIHRoaXMgY2FuIGJlXG51c2VkIHdpdGggYGFuZFRoZW5gIHRvIGNoZWNrIG9uIHRoZSBvdXRjb21lIG9mIGFub3RoZXIgdGFzay5cblxuICAgIHR5cGUgRXJyb3JcbiAgICAgICAgPSBOb3RGb3VuZFxuXG4gICAgbm90Rm91bmQgOiBUYXNrIEVycm9yIGFcbiAgICBub3RGb3VuZCA9XG4gICAgICAgIGZhaWwgTm90Rm91bmRcblxuLX1cbmZhaWwgOiB4IC0+IFRhc2sgeCBhXG5mYWlsID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuZmFpbFxuXG5cblxuLS0gTUFQUElOR1xuXG5cbnstfCBUcmFuc2Zvcm0gYSB0YXNrLiBNYXliZSB5b3Ugd2FudCB0byB1c2UgW2BUaW1lYF1bdGltZV0gdG8gZmlndXJlXG5vdXQgd2hhdCB0aW1lIGl0IHdpbGwgYmUgaW4gb25lIGhvdXI6XG5cbiAgICBpbXBvcnQgVGFzayBleHBvc2luZyAoVGFzaylcbiAgICBpbXBvcnQgVGltZVxuXG5cbiAgICB0aW1lSW5PbmVIb3VyIDogVGFzayB4IFRpbWUuUG9zaXhcbiAgICB0aW1lSW5PbmVIb3VyID1cbiAgICAgICAgVGFzay5tYXAgYWRkQW5Ib3VyIFRpbWUubm93XG5cbiAgICBhZGRBbkhvdXIgOiBUaW1lLlBvc2l4IC0+IFRpbWUuUG9zaXhcbiAgICBhZGRBbkhvdXIgdGltZSA9XG4gICAgICAgIFRpbWUubWlsbGlzVG9Qb3NpeCAoVGltZS5wb3NpeFRvTWlsbGlzIHRpbWUgKyA2MCAqIDYwICogMTAwMClcblxuW3RpbWVdOiBUaW1lXG5cbi19XG5tYXAgOiAoYSAtPiBiKSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYlxubWFwIGZ1bmMgdGFza0EgPVxuICAgIHRhc2tBXG4gICAgICAgIHw+IGFuZFRoZW4gKFxcYSAtPiBzdWNjZWVkIChmdW5jIGEpKVxuXG5cbnstfCBQdXQgdGhlIHJlc3VsdHMgb2YgdHdvIHRhc2tzIHRvZ2V0aGVyLiBGb3IgZXhhbXBsZSwgaWYgd2Ugd2FudGVkIHRvIGtub3dcbnRoZSBjdXJyZW50IG1vbnRoLCB3ZSBjb3VsZCB1c2UgW2BUaW1lYF1bdGltZV0gdG8gYXNrOlxuXG4gICAgaW1wb3J0IFRhc2sgZXhwb3NpbmcgKFRhc2spXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgZ2V0TW9udGggOiBUYXNrIHggSW50XG4gICAgZ2V0TW9udGggPVxuICAgICAgICBUYXNrLm1hcDIgVGltZS50b01vbnRoIFRpbWUuaGVyZSBUaW1lLm5vd1xuXG4qKk5vdGU6KiogU2F5IHdlIHdlcmUgZG9pbmcgSFRUUCByZXF1ZXN0cyBpbnN0ZWFkLiBgbWFwMmAgZG9lcyBlYWNoIHRhc2sgaW5cbm9yZGVyLCBzbyBpdCB3b3VsZCB0cnkgdGhlIGZpcnN0IHJlcXVlc3QgYW5kIG9ubHkgY29udGludWUgYWZ0ZXIgaXQgc3VjY2VlZHMuXG5JZiBpdCBmYWlscywgdGhlIHdob2xlIHRoaW5nIGZhaWxzIVxuXG5bdGltZV06IFRpbWVcblxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IHJlc3VsdFxubWFwMiBmdW5jIHRhc2tBIHRhc2tCID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxiIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiKSlcbiAgICAgICAgICAgIClcblxuXG57LXwgLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gcmVzdWx0KSAtPiBUYXNrIHggYSAtPiBUYXNrIHggYiAtPiBUYXNrIHggYyAtPiBUYXNrIHggcmVzdWx0XG5tYXAzIGZ1bmMgdGFza0EgdGFza0IgdGFza0MgPVxuICAgIHRhc2tBXG4gICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgIChcXGEgLT5cbiAgICAgICAgICAgICAgICB0YXNrQlxuICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAoXFxiIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxjIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiIGMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IGMgLT4gVGFzayB4IGQgLT4gVGFzayB4IHJlc3VsdFxubWFwNCBmdW5jIHRhc2tBIHRhc2tCIHRhc2tDIHRhc2tEID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgKFxcYiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcXGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChcXGQgLT4gc3VjY2VlZCAoZnVuYyBhIGIgYyBkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuXG57LXwgLX1cbm1hcDUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IGMgLT4gVGFzayB4IGQgLT4gVGFzayB4IGUgLT4gVGFzayB4IHJlc3VsdFxubWFwNSBmdW5jIHRhc2tBIHRhc2tCIHRhc2tDIHRhc2tEIHRhc2tFID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgKFxcYiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcXGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxlIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiIGMgZCBlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuXG57LXwgU3RhcnQgd2l0aCBhbiBhcnJheSBvZiB0YXNrcywgYW5kIHR1cm4gdGhlbSBpbnRvIGEgc2luZ2xlIHRhc2sgdGhhdCByZXR1cm5zIGFcbmFycmF5LiBUaGUgdGFza3Mgd2lsbCBiZSBydW4gaW4gb3JkZXIgb25lLWJ5LW9uZSBhbmQgaWYgYW55IHRhc2sgZmFpbHMgdGhlIHdob2xlXG5zZXF1ZW5jZSBmYWlscy5cblxuICAgIHNlcXVlbmNlIFsgc3VjY2VlZCAxLCBzdWNjZWVkIDIgXSA9PSBzdWNjZWVkIFsgMSwgMiBdXG5cbi19XG5zZXF1ZW5jZSA6IEFycmF5IChUYXNrIHggYSkgLT4gVGFzayB4IChBcnJheSBhKVxuc2VxdWVuY2UgdGFza3MgPVxuICAgIEFycmF5LmZvbGRyIChtYXAyIEFycmF5LnB1c2hGaXJzdCkgKHN1Y2NlZWQgW10pIHRhc2tzXG5cblxuXG4tLSBDSEFJTklOR1xuXG5cbnstfCBDaGFpbiB0b2dldGhlciBhIHRhc2sgYW5kIGEgY2FsbGJhY2suIFRoZSBmaXJzdCB0YXNrIHdpbGwgcnVuLCBhbmQgaWYgaXQgaXNcbnN1Y2Nlc3NmdWwsIHlvdSBnaXZlIHRoZSByZXN1bHQgdG8gdGhlIGNhbGxiYWNrIHJlc3VsdGluZyBpbiBhbm90aGVyIHRhc2suIFRoaXNcbnRhc2sgdGhlbiBnZXRzIHJ1bi4gV2UgY291bGQgdXNlIHRoaXMgdG8gbWFrZSBhIHRhc2sgdGhhdCByZXNvbHZlcyBhbiBob3VyIGZyb21cbm5vdzpcblxuXG4gICAgaW1wb3J0IFByb2Nlc3NcbiAgICBpbXBvcnQgVGltZVxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFByb2Nlc3Muc2xlZXAgKDYwICogNjAgKiAxMDAwKVxuICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxfIC0+IFRpbWUubm93KVxuXG5GaXJzdCB0aGUgcHJvY2VzcyBzbGVlcHMgZm9yIGFuIGhvdXIgKiphbmQgdGhlbioqIGl0IHRlbGxzIHVzIHdoYXQgdGltZSBpdCBpcy5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBUYXNrIHggYikgLT4gVGFzayB4IGEgLT4gVGFzayB4IGJcbmFuZFRoZW4gPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5hbmRUaGVuXG5cblxuey18IFRoaXMgaXMgbGlrZSBbYW5kVGhlbl0oYW5kVGhlbikgYnV0IHRoZSBhcmd1bWVudHMgYXJlIHJldmVyc2VkLiBUaGUgY2FsbGJhY2tcbmlzIHRoZSBsYXN0IGFyZ3VtZW50LCBpbnN0ZWFkIG9mIHRoZSBmaXJzdC4gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gd3JpdGUgaW1wZXJhdGl2ZVxuY29kZSB3aGVyZSBlYWNoIGNhbGxiYWNrIGludm9sdmVzIG1vcmUgbG9naWMuXG5cbiAgICBpbXBvcnQgUHJvY2Vzc1xuICAgIGltcG9ydCBUaW1lXG5cbiAgICB0aW1lSW5PbmVIb3VyIDogVGFzayB4IFRpbWUuUG9zaXhcbiAgICB0aW1lSW5PbmVIb3VyID1cbiAgICAgICAgVGFzay5hd2FpdCAoUHJvY2Vzcy5zbGVlcCA8fCA2MCAqIDYwICogMTAwMCkgPHwgXFxfIC0+XG4gICAgICAgICAgICBUaW1lLm5vd1xuXG4oYSl3YWl0IGZvciBhbiBob3VyLCB0aGVuIGZldGNoIHRoZSBjdXJyZW50IHRpbWUuXG5cbi19XG5hd2FpdCA6IFRhc2sgeCBhIC0+IChhIC0+IFRhc2sgeCBiKSAtPiBUYXNrIHggYlxuYXdhaXQgdHNrIGNhbGxiYWNrID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuYW5kVGhlbiBjYWxsYmFjayB0c2tcblxuXG4tLSBFUlJPUlNcblxuXG57LXwgUmVjb3ZlciBmcm9tIGEgZmFpbHVyZSBpbiBhIHRhc2suIElmIHRoZSBnaXZlbiB0YXNrIGZhaWxzLCB3ZSB1c2UgdGhlXG5jYWxsYmFjayB0byByZWNvdmVyLlxuXG4gICAgZmFpbCBcImZpbGUgbm90IGZvdW5kXCJcbiAgICAgIHw+IG9uRXJyb3IgKFxcbXNnIC0+IHN1Y2NlZWQgNDIpXG4gICAgICAtLSBzdWNjZWVkIDQyXG5cbiAgICBzdWNjZWVkIDlcbiAgICAgIHw+IG9uRXJyb3IgKFxcbXNnIC0+IHN1Y2NlZWQgNDIpXG4gICAgICAtLSBzdWNjZWVkIDlcblxuLX1cbm9uRXJyb3IgOiAoeCAtPiBUYXNrIHkgYSkgLT4gVGFzayB4IGEgLT4gVGFzayB5IGFcbm9uRXJyb3IgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5vbkVycm9yXG5cblxuey18IFRyYW5zZm9ybSB0aGUgZXJyb3IgdmFsdWUuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgbmVlZCBhIGJ1bmNoIG9mIGVycm9yXG50eXBlcyB0byBtYXRjaCB1cC5cblxuICAgIHR5cGUgRXJyb3JcbiAgICAgICAgPSBIdHRwIEh0dHAuRXJyb3JcbiAgICAgICAgfCBXZWJHTCBXZWJHTC5FcnJvclxuXG4gICAgZ2V0UmVzb3VyY2VzIDogVGFzayBFcnJvciBSZXNvdXJjZVxuICAgIGdldFJlc291cmNlcyA9XG4gICAgICAgIHNlcXVlbmNlXG4gICAgICAgICAgICBbIG1hcEVycm9yIEh0dHAgc2VydmVyVGFza1xuICAgICAgICAgICAgLCBtYXBFcnJvciBXZWJHTCB0ZXh0dXJlVGFza1xuICAgICAgICAgICAgXVxuXG4tfVxubWFwRXJyb3IgOiAoeCAtPiB5KSAtPiBUYXNrIHggYSAtPiBUYXNrIHkgYVxubWFwRXJyb3IgY29udmVydCB0YXNrID1cbiAgICB0YXNrXG4gICAgICAgIHw+IG9uRXJyb3IgKGZhaWwgPDwgY29udmVydClcblxuXG5cbi0tIENPTU1BTkRTXG5cblxudHlwZSBNeUNtZCBtc2dcbiAgICA9IFBlcmZvcm0gKFRhc2sgTmV2ZXIgbXNnKVxuICAgIHwgRXhlY3V0ZSAoVGFzayBOZXZlciB7fSlcblxuXG57LXwgTGlrZSBJIHdhcyBzYXlpbmcgaW4gdGhlIFtgVGFza2BdKCNUYXNrKSBkb2N1bWVudGF0aW9uLCBqdXN0IGhhdmluZyBhXG5gVGFza2AgZG9lcyBub3QgbWVhbiBpdCBpcyBkb25lLiBXZSBtdXN0IGNvbW1hbmQgR3JlbiB0byBgcGVyZm9ybWAgdGhlIHRhc2s6XG5cblxuXG4gICAgaW1wb3J0IFRhc2tcbiAgICBpbXBvcnQgVGltZVxuXG4gICAgdHlwZSBNc2dcbiAgICAgICAgPSBDbGlja1xuICAgICAgICB8IFNlYXJjaCBTdHJpbmdcbiAgICAgICAgfCBOZXdUaW1lIFRpbWUuUG9zaXhcblxuICAgIGdldE5ld1RpbWUgOiBDbWQgTXNnXG4gICAgZ2V0TmV3VGltZSA9XG4gICAgICAgIFRhc2sucGVyZm9ybSBOZXdUaW1lIFRpbWUubm93XG5cblNvIHdlIGhhdmUgY2hhbmdlZCBhIHRhc2sgbGlrZSBcIm1ha2UgZGVsaWNpb3VzIGxhc2FnbmFcIiBpbnRvIGEgY29tbWFuZCBsaWtlXG5cIkhleSBHcmVuLCBtYWtlIGRlbGljaW91cyBsYXNhZ25hIGFuZCBnaXZlIGl0IHRvIG15IGB1cGRhdGVgIGZ1bmN0aW9uIGFzIGFcbmBNc2dgIHZhbHVlLlwiXG5cbi19XG5wZXJmb3JtIDogKGEgLT4gbXNnKSAtPiBUYXNrIE5ldmVyIGEgLT4gQ21kIG1zZ1xucGVyZm9ybSB0b01lc3NhZ2UgdGFzayA9XG4gICAgY29tbWFuZCAoUGVyZm9ybSAobWFwIHRvTWVzc2FnZSB0YXNrKSlcblxuXG57LXwgVGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG8gW2BwZXJmb3JtYF0oI3BlcmZvcm0pIGV4Y2VwdCBpdCBjYW4gaGFuZGxlIGZhaWx1cmVzIVxuU28gd2UgY291bGQgX2F0dGVtcHRfIHRvIGZvY3VzIG9uIGEgY2VydGFpbiBET00gbm9kZSBsaWtlIHRoaXM6XG5cbiAgICAtLSBncmVuIGluc3RhbGwgZ3Jlbi1sYW5nL2Jyb3dzZXJcblxuXG4gICAgaW1wb3J0IEJyb3dzZXIuRG9tXG4gICAgaW1wb3J0IFRhc2tcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tcbiAgICAgICAgfCBTZWFyY2ggU3RyaW5nXG4gICAgICAgIHwgRm9jdXMgKFJlc3VsdCBCcm93c2VyLkRvbUVycm9yIHt9KVxuXG4gICAgZm9jdXMgOiBDbWQgTXNnXG4gICAgZm9jdXMgPVxuICAgICAgICBUYXNrLmF0dGVtcHQgRm9jdXMgKEJyb3dzZXIuRG9tLmZvY3VzIFwibXktYXBwLXNlYXJjaC1ib3hcIilcblxuU28gdGhlIHRhc2sgaXMgXCJmb2N1cyBvbiB0aGlzIERPTSBub2RlXCIgYW5kIHdlIGFyZSB0dXJuaW5nIGl0IGludG8gdGhlIGNvbW1hbmRcblwiSGV5IEdyZW4sIGF0dGVtcHQgdG8gZm9jdXMgb24gdGhpcyBET00gbm9kZSBhbmQgZ2l2ZSBtZSBhIGBNc2dgIGFib3V0IHdoZXRoZXJcbnlvdSBzdWNjZWVkZWQgb3IgZmFpbGVkLlwiXG5cbi19XG5hdHRlbXB0IDogKFJlc3VsdCB4IGEgLT4gbXNnKSAtPiBUYXNrIHggYSAtPiBDbWQgbXNnXG5hdHRlbXB0IHJlc3VsdFRvTWVzc2FnZSB0YXNrID1cbiAgICBjb21tYW5kXG4gICAgICAgIChQZXJmb3JtXG4gICAgICAgICAgICAodGFza1xuICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKHN1Y2NlZWQgPDwgcmVzdWx0VG9NZXNzYWdlIDw8IE9rKVxuICAgICAgICAgICAgICAgIHw+IG9uRXJyb3IgKHN1Y2NlZWQgPDwgcmVzdWx0VG9NZXNzYWdlIDw8IEVycilcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG5cbnstfCBTb21ldGltZXMgd2Ugd2FudCB0byBnaXZlIGEgY29tbWFuZCB3aXRob3V0IGJlaW5nIHRvbGQgaG93IGl0IHdlbnQuIE1heWJlIHdlXG5hcmUgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIHNjcmVlbiwgb3IgY2hhbmdpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgd2luZG93LlxuSW4gZWl0aGVyIGNhc2UsIHRoZXJlJ3MgcmVhbGx5IG5vdGhpbmcgZm9yIHVzIHRvIGRvIGFmdGVyd2FyZHMuIEluIHRob3NlIGNhc2VzXG53ZSBjYW4gdXNlIGBleGVjdXRlYC5cbi19XG5leGVjdXRlIDogVGFzayBOZXZlciBhIC0+IENtZCBtc2dcbmV4ZWN1dGUgdGFzayA9XG4gICAgY29tbWFuZCAoRXhlY3V0ZSAobWFwIChcXF8gLT4ge30pIHRhc2spKVxuXG5cbmNtZE1hcCA6IChhIC0+IGIpIC0+IE15Q21kIGEgLT4gTXlDbWQgYlxuY21kTWFwIHRhZ2dlciBjbWQgPVxuICAgIHdoZW4gY21kIGlzXG4gICAgICAgIFBlcmZvcm0gdGFzayAtPlxuICAgICAgICAgICAgUGVyZm9ybSAobWFwIHRhZ2dlciB0YXNrKVxuXG4gICAgICAgIEV4ZWN1dGUgdGFzayAtPlxuICAgICAgICAgICAgRXhlY3V0ZSB0YXNrXG5cblxuLS0gTUFOQUdFUlxuXG5cbmluaXQgOiBUYXNrIE5ldmVyIHt9XG5pbml0ID1cbiAgICBzdWNjZWVkIHt9XG5cblxub25FZmZlY3RzIDogUGxhdGZvcm0uUm91dGVyIG1zZyBOZXZlciAtPiBBcnJheSAoTXlDbWQgbXNnKSAtPiB7fSAtPiBUYXNrIE5ldmVyIHt9XG5vbkVmZmVjdHMgcm91dGVyIGNvbW1hbmRzIHN0YXRlID1cbiAgICBtYXBcbiAgICAgICAgKFxcXyAtPiB7fSlcbiAgICAgICAgKHNlcXVlbmNlIChBcnJheS5tYXAgKHNwYXduQ21kIHJvdXRlcikgY29tbWFuZHMpKVxuXG5cbm9uU2VsZk1zZyA6IFBsYXRmb3JtLlJvdXRlciBtc2cgTmV2ZXIgLT4gTmV2ZXIgLT4ge30gLT4gVGFzayBOZXZlciB7fVxub25TZWxmTXNnIF8gXyBfID1cbiAgICBzdWNjZWVkIHt9XG5cblxuc3Bhd25DbWQgOiBQbGF0Zm9ybS5Sb3V0ZXIgbXNnIE5ldmVyIC0+IE15Q21kIG1zZyAtPiBUYXNrIHgge31cbnNwYXduQ21kIHJvdXRlciBjbWQgPVxuICAgIHdoZW4gY21kIGlzXG4gICAgICAgIFBlcmZvcm0gdGFzayAtPlxuICAgICAgICAgICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLnNwYXduXG4gICAgICAgICAgICAgICAgKHRhc2tcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoUGxhdGZvcm0uc2VuZFRvQXBwIHJvdXRlcilcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgRXhlY3V0ZSB0YXNrIC0+XG4gICAgICAgICAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuc3Bhd24gdGFza1xuIiwKICAgICAgICAibW9kdWxlIFBsYXRmb3JtIGV4cG9zaW5nXG4gICAgKCBQcm9ncmFtLCB3b3JrZXJcbiAgICAsIFRhc2ssIFByb2Nlc3NJZFxuICAgICwgUm91dGVyLCBzZW5kVG9BcHAsIHNlbmRUb1NlbGZcbiAgICApXG5cbnstfCBUaGlzIG1vZHVsZSBjb250YWlucyBkZWZpbml0aW9ucyBpbXBvcnRhbnQgdG8gdGhlIGxhbmd1YWdlIHJ1bnRpbWUuXG5Zb3UncmUgdW5saWtlbHkgdG8gbWFrZSBkaXJlY3QgdXNlIG9mIHRoZXNlIHRoaW5ncyB5b3Vyc2VsZi5cblxuXG5AZG9jcyBQcm9ncmFtLCB3b3JrZXJcblxuXG4jIyBUYXNrcyBhbmQgUHJvY2Vzc2VzXG5cbkBkb2NzIFRhc2ssIFByb2Nlc3NJZFxuXG5cbiMjIEVmZmVjdCBNYW5hZ2VyIEhlbHBlcnNcblxuRWZmZWN0IG1hbmFnZXJzIGNhbiBiZSB2aWV3ZWQgYXMgcHJvZ3JhbXMtd2l0aGluLWEtcHJvZ3JhbS4gVGhleSBoYXZlIHRoZWlyIG93blxuc3RhdGUsIGFuZCBjb21tdW5pY2F0ZSB3aXRoIHRoZSBhcHBsaWNhdGlvbiB1c2luZyBtZXNzYWdlcy5cblxuRWZmZWN0IG1hbmFnZXJzIGFyZSB1c2VkIGludGVybmFsbHkgZm9yIG1hbnkgdGhpbmdzLCBidXQgaXNuJ3QgY29uc2lkZXJlZCB0byBiZVxudHJ1bHkgc3RhYmxlLiBJdCdzIGxpa2VseSB0aGF0IHRoaXMgZmVhdHVyZSB3aWxsIGJlIHJlZGVzaWduZWQgaW4gYSBmdXR1cmUgcmVsYXNlLlxuXG5cbkBkb2NzIFJvdXRlciwgc2VuZFRvQXBwLCBzZW5kVG9TZWxmXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKE5ldmVyKVxuaW1wb3J0IEdyZW4uS2VybmVsLlBsYXRmb3JtXG5pbXBvcnQgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyXG5pbXBvcnQgUGxhdGZvcm0uQ21kIGV4cG9zaW5nIChDbWQpXG5pbXBvcnQgUGxhdGZvcm0uU3ViIGV4cG9zaW5nIChTdWIpXG5cblxuXG4tLSBQUk9HUkFNU1xuXG5cbnstfCBBIGBQcm9ncmFtYCBkZXNjcmliZXMgYW4gR3JlbiBwcm9ncmFtISBIb3cgZG9lcyBpdCByZWFjdCB0byBpbnB1dD8gRG9lcyBpdFxuc2hvdyBhbnl0aGluZyBvbiBzY3JlZW4/IEV0Yy5cbi19XG50eXBlIFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG4gICAgPSBQcm9ncmFtXG5cblxuey18IENyZWF0ZSBhIFtoZWFkbGVzc10gcHJvZ3JhbSB3aXRoIG5vIHVzZXIgaW50ZXJmYWNlLlxuXG5UaGlzIGlzIGdyZWF0IGlmIHlvdSB3YW50IHRvIHVzZSBHcmVuIGFzIHRoZSAmbGRxdW87YnJhaW4mcmRxdW87IGZvciBzb21ldGhpbmdcbmVsc2UuIEZvciBleGFtcGxlLCB5b3UgY291bGQgc2VuZCBtZXNzYWdlcyBvdXQgcG9ydHMgdG8gbW9kaWZ5IHRoZSBET00sIGJ1dCBkb1xuYWxsIHRoZSBjb21wbGV4IGxvZ2ljIGluIEdyZW4uXG5cbltoZWFkbGVzc106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlYWRsZXNzX3NvZnR3YXJlXG5cbkluaXRpYWxpemluZyBhIGhlYWRsZXNzIHByb2dyYW0gZnJvbSBKYXZhU2NyaXB0IGxvb2tzIGxpa2UgdGhpczpcblxuYGBgamF2YXNjcmlwdFxudmFyIGFwcCA9IEdyZW4uTXlUaGluZy5pbml0KCk7XG5gYGBcblxuSWYgeW91IF9kb18gd2FudCB0byBjb250cm9sIHRoZSB1c2VyIGludGVyZmFjZSBpbiBHcmVuLCB0aGUgW2BCcm93c2VyYF1bYnJvd3Nlcl1cbm1vZHVsZSBoYXMgYSBmZXcgd2F5cyB0byBjcmVhdGUgdGhhdCBraW5kIG9mIGBQcm9ncmFtYCBpbnN0ZWFkIVxuXG5baGVhZGxlc3NdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFkbGVzc19zb2Z0d2FyZVxuW2Jyb3dzZXJdOiAvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci9sYXRlc3QvbW9kdWxlL0Jyb3dzZXJcblxuLX1cbndvcmtlciA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xud29ya2VyID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS53b3JrZXJcblxuXG5cbi0tIFRBU0tTIGFuZCBQUk9DRVNTRVNcblxuXG57LXwgSGVhZCBvdmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgW2BUYXNrYF0oVGFzaykgbW9kdWxlIGZvciBtb3JlXG5pbmZvcm1hdGlvbiBvbiB0aGlzLiBJdCBpcyBvbmx5IGRlZmluZWQgaGVyZSBiZWNhdXNlIGl0IGlzIGEgcGxhdGZvcm1cbnByaW1pdGl2ZS5cbi19XG50eXBlIFRhc2sgZXJyIG9rXG4gICAgPSBUYXNrXG5cblxuey18IEhlYWQgb3ZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIFtgUHJvY2Vzc2BdKFByb2Nlc3MpIG1vZHVsZSBmb3JcbmluZm9ybWF0aW9uIG9uIHRoaXMuIEl0IGlzIG9ubHkgZGVmaW5lZCBoZXJlIGJlY2F1c2UgaXQgaXMgYSBwbGF0Zm9ybVxucHJpbWl0aXZlLlxuLX1cbnR5cGUgUHJvY2Vzc0lkXG4gICAgPSBQcm9jZXNzSWRcblxuXG5cbi0tIEVGRkVDVCBNQU5BR0VSIElOVEVSTkFMU1xuXG5cbnstfCBBbiBlZmZlY3QgbWFuYWdlciBoYXMgYWNjZXNzIHRvIGEg4oCccm91dGVy4oCdIHRoYXQgcm91dGVzIG1lc3NhZ2VzIGJldHdlZW5cbnRoZSBtYWluIGFwcCBhbmQgeW91ciBpbmRpdmlkdWFsIGVmZmVjdCBtYW5hZ2VyLlxuLX1cbnR5cGUgUm91dGVyIGFwcE1zZyBzZWxmTXNnXG4gICAgPSBSb3V0ZXJcblxuXG57LXwgU2VuZCB0aGUgcm91dGVyIGEgbWVzc2FnZSBmb3IgdGhlIG1haW4gbG9vcCBvZiB5b3VyIGFwcC4gVGhpcyBtZXNzYWdlIHdpbGxcbmJlIGhhbmRsZWQgYnkgdGhlIG92ZXJhbGwgYHVwZGF0ZWAgZnVuY3Rpb24sIGp1c3QgbGlrZSBldmVudHMgZnJvbSBgSHRtbGAuXG4tfVxuc2VuZFRvQXBwIDogUm91dGVyIG1zZyBhIC0+IG1zZyAtPiBUYXNrIHgge31cbnNlbmRUb0FwcCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uc2VuZFRvQXBwXG5cblxuey18IFNlbmQgdGhlIHJvdXRlciBhIG1lc3NhZ2UgZm9yIHlvdXIgZWZmZWN0IG1hbmFnZXIuIFRoaXMgbWVzc2FnZSB3aWxsXG5iZSByb3V0ZWQgdG8gdGhlIGBvblNlbGZNc2dgIGZ1bmN0aW9uLCB3aGVyZSB5b3UgY2FuIHVwZGF0ZSB0aGUgc3RhdGUgb2YgeW91clxuZWZmZWN0IG1hbmFnZXIgYXMgbmVjZXNzYXJ5LlxuXG5BcyBhbiBleGFtcGxlLCB0aGUgZWZmZWN0IG1hbmFnZXIgZm9yIHdlYiBzb2NrZXRzXG5cbi19XG5zZW5kVG9TZWxmIDogUm91dGVyIGEgbXNnIC0+IG1zZyAtPiBUYXNrIHgge31cbnNlbmRUb1NlbGYgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLnNlbmRUb1NlbGZcbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybS5DbWQgZXhwb3NpbmdcbiAgICAoIENtZCwgbm9uZSwgYmF0Y2hcbiAgICAsIG1hcFxuICAgIClcblxuey18XG5cbj4gKipOb3RlOioqIEdyZW4gaGFzICoqbWFuYWdlZCBlZmZlY3RzKiosIG1lYW5pbmcgdGhhdCB0aGluZ3MgbGlrZSBIVFRQXG4+IHJlcXVlc3RzIG9yIHdyaXRpbmcgdG8gZGlzayBhcmUgYWxsIHRyZWF0ZWQgYXMgX2RhdGFfIGluIEdyZW4uIFdoZW4gdGhpc1xuPiBkYXRhIGlzIGdpdmVuIHRvIHRoZSBHcmVuIHJ1bnRpbWUgc3lzdGVtLCBpdCBjYW4gZG8gc29tZSDigJxxdWVyeSBvcHRpbWl6YXRpb27igJ1cbj4gYmVmb3JlIGFjdHVhbGx5IHBlcmZvcm1pbmcgdGhlIGVmZmVjdC4gUGVyaGFwcyB1bmV4cGVjdGVkbHksIHRoaXMgbWFuYWdlZFxuPiBlZmZlY3RzIGlkZWEgaXMgdGhlIGhlYXJ0IG9mIHdoeSBHcmVuIGlzIHNvIG5pY2UgZm9yIHRlc3RpbmcsIHJldXNlLFxuPiByZXByb2R1Y2liaWxpdHksIGV0Yy5cbj5cbj4gR3JlbiBoYXMgdHdvIGtpbmRzIG9mIG1hbmFnZWQgZWZmZWN0czogY29tbWFuZHMgYW5kIHN1YnNjcmlwdGlvbnMuXG5cblxuIyMgQ29tbWFuZHNcblxuQGRvY3MgQ21kLCBub25lLCBiYXRjaFxuXG5cbiMjIEZhbmN5IFN0dWZmXG5cbkBkb2NzIG1hcFxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEdyZW4uS2VybmVsLlBsYXRmb3JtXG5cblxuXG4tLSBDT01NQU5EU1xuXG5cbnstfCBBIGNvbW1hbmQgaXMgYSB3YXkgb2YgdGVsbGluZyBHcmVuLCDigJxIZXksIEkgd2FudCB5b3UgdG8gZG8gdGhpcyB0aGluZyHigJ1cblNvIGlmIHlvdSB3YW50IHRvIHNlbmQgYW4gSFRUUCByZXF1ZXN0LCB5b3Ugd291bGQgbmVlZCB0byBjb21tYW5kIEdyZW4gdG8gZG8gaXQuXG5PciBpZiB5b3Ugd2FudGVkIHRvIGFzayBmb3IgZ2VvbG9jYXRpb24sIHlvdSB3b3VsZCBuZWVkIHRvIGNvbW1hbmQgR3JlbiB0byBnb1xuZ2V0IGl0LlxuXG5FdmVyeSBgQ21kYCBzcGVjaWZpZXMgKDEpIHdoaWNoIGVmZmVjdHMgeW91IG5lZWQgYWNjZXNzIHRvIGFuZCAoMikgdGhlIHR5cGUgb2Zcbm1lc3NhZ2VzIHRoYXQgd2lsbCBjb21lIGJhY2sgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxuXG4qKk5vdGU6KiogRG8gbm90IHdvcnJ5IGlmIHRoaXMgc2VlbXMgY29uZnVzaW5nIGF0IGZpcnN0ISBBcyB3aXRoIGV2ZXJ5IEdyZW4gdXNlclxuZXZlciwgY29tbWFuZHMgd2lsbCBtYWtlIG1vcmUgc2Vuc2UgYXMgeW91IHdvcmsgdGhyb3VnaCBbdGhlIEdyZW4gQXJjaGl0ZWN0dXJlXG5UdXRvcmlhbF0oaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2FyY2hpdGVjdHVyZS8pIGFuZCBzZWUgaG93IHRoZXlcbmZpdCBpbnRvIGEgcmVhbCBhcHBsaWNhdGlvbiFcblxuLX1cbnR5cGUgQ21kIG1zZ1xuICAgID0gQ21kXG5cblxuey18IFRlbGwgdGhlIHJ1bnRpbWUgdGhhdCB0aGVyZSBhcmUgbm8gY29tbWFuZHMuXG4tfVxubm9uZSA6IENtZCBtc2dcbm5vbmUgPVxuICAgIGJhdGNoIFtdXG5cblxuey18IFdoZW4geW91IG5lZWQgdGhlIHJ1bnRpbWUgc3lzdGVtIHRvIHBlcmZvcm0gYSBjb3VwbGUgY29tbWFuZHMsIHlvdVxuY2FuIGJhdGNoIHRoZW0gdG9nZXRoZXIuIEVhY2ggaXMgaGFuZGVkIHRvIHRoZSBydW50aW1lIGF0IHRoZSBzYW1lIHRpbWUsXG5hbmQgc2luY2UgZWFjaCBjYW4gcGVyZm9ybSBhcmJpdHJhcnkgb3BlcmF0aW9ucyBpbiB0aGUgd29ybGQsIHRoZXJlIGFyZVxubm8gb3JkZXJpbmcgZ3VhcmFudGVlcyBhYm91dCB0aGUgcmVzdWx0cy5cblxuKipOb3RlOioqIGBDbWQubm9uZWAgYW5kIGBDbWQuYmF0Y2ggWyBDbWQubm9uZSwgQ21kLm5vbmUgXWAgYW5kIGBDbWQuYmF0Y2ggW11gXG5hbGwgZG8gdGhlIHNhbWUgdGhpbmcuXG5cbi19XG5iYXRjaCA6IEFycmF5IChDbWQgbXNnKSAtPiBDbWQgbXNnXG5iYXRjaCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uYmF0Y2hcblxuXG5cbi0tIEZBTkNZIFNUVUZGXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBjb21tYW5kLlxuVmVyeSBzaW1pbGFyIHRvIFtgSHRtbC5tYXBgXSgvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci9sYXRlc3QvbW9kdWxlL0h0bWwjbWFwKS5cblxuVGhpcyBpcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gd2VsbC1zdHJ1Y3R1cmVkIEdyZW4gY29kZSwgc28gZGVmaW5pdGVseSByZWFkIHRoZVxuc2VjdGlvbiBvbiBbc3RydWN0dXJlXSBpbiB0aGUgZ3VpZGUgYmVmb3JlIHJlYWNoaW5nIGZvciB0aGlzIVxuXG5bc3RydWN0dXJlXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3dlYmFwcHMvc3RydWN0dXJlLmh0bWxcblxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gQ21kIGEgLT4gQ21kIG1zZ1xubWFwID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5tYXBcbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybS5TdWIgZXhwb3NpbmdcbiAgICAoIFN1Yiwgbm9uZSwgYmF0Y2hcbiAgICAsIG1hcFxuICAgIClcblxuey18XG5cbj4gKipOb3RlOioqIEdyZW4gaGFzICoqbWFuYWdlZCBlZmZlY3RzKiosIG1lYW5pbmcgdGhhdCB0aGluZ3MgbGlrZSBIVFRQXG4+IHJlcXVlc3RzIG9yIHdyaXRpbmcgdG8gZGlzayBhcmUgYWxsIHRyZWF0ZWQgYXMgX2RhdGFfIGluIEdyZW4uIFdoZW4gdGhpc1xuPiBkYXRhIGlzIGdpdmVuIHRvIHRoZSBHcmVuIHJ1bnRpbWUgc3lzdGVtLCBpdCBjYW4gZG8gc29tZSDigJxxdWVyeSBvcHRpbWl6YXRpb27igJ1cbj4gYmVmb3JlIGFjdHVhbGx5IHBlcmZvcm1pbmcgdGhlIGVmZmVjdC4gUGVyaGFwcyB1bmV4cGVjdGVkbHksIHRoaXMgbWFuYWdlZFxuPiBlZmZlY3RzIGlkZWEgaXMgdGhlIGhlYXJ0IG9mIHdoeSBHcmVuIGlzIHNvIG5pY2UgZm9yIHRlc3RpbmcsIHJldXNlLFxuPiByZXByb2R1Y2liaWxpdHksIGV0Yy5cbj5cbj4gR3JlbiBoYXMgdHdvIGtpbmRzIG9mIG1hbmFnZWQgZWZmZWN0czogY29tbWFuZHMgYW5kIHN1YnNjcmlwdGlvbnMuXG5cblxuIyMgU3Vic2NyaXB0aW9uc1xuXG5AZG9jcyBTdWIsIG5vbmUsIGJhdGNoXG5cblxuIyMgRmFuY3kgU3R1ZmZcblxuQGRvY3MgbWFwXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuUGxhdGZvcm1cblxuXG5cbi0tIFNVQlNDUklQVElPTlNcblxuXG57LXwgQSBzdWJzY3JpcHRpb24gaXMgYSB3YXkgb2YgdGVsbGluZyBHcmVuLCDigJxIZXksIGxldCBtZSBrbm93IGlmIGFueXRoaW5nXG5pbnRlcmVzdGluZyBoYXBwZW5zIG92ZXIgdGhlcmUh4oCdIFNvIGlmIHlvdSB3YW50IHRvIGxpc3RlbiBmb3IgbWVzc2FnZXMgb24gYSB3ZWJcbnNvY2tldCwgeW91IHdvdWxkIHRlbGwgR3JlbiB0byBjcmVhdGUgYSBzdWJzY3JpcHRpb24uIElmIHlvdSB3YW50IHRvIGdldCBjbG9ja1xudGlja3MsIHlvdSB3b3VsZCB0ZWxsIEdyZW4gdG8gc3Vic2NyaWJlIHRvIHRoYXQuIFRoZSBjb29sIHRoaW5nIGhlcmUgaXMgdGhhdFxudGhpcyBtZWFucyBfR3Jlbl8gbWFuYWdlcyBhbGwgdGhlIGRldGFpbHMgb2Ygc3Vic2NyaXB0aW9ucyBpbnN0ZWFkIG9mIF95b3VfLlxuU28gaWYgYSB3ZWIgc29ja2V0IGdvZXMgZG93biwgX3lvdV8gZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgcmVjb25uZWN0IHdpdGggYW5cbmV4cG9uZW50aWFsIGJhY2tvZmYgc3RyYXRlZ3ksIF9HcmVuXyBkb2VzIHRoaXMgYWxsIGZvciB5b3UgYmVoaW5kIHRoZSBzY2VuZXMhXG5cbkV2ZXJ5IGBTdWJgIHNwZWNpZmllcyAoMSkgd2hpY2ggZWZmZWN0cyB5b3UgbmVlZCBhY2Nlc3MgdG8gYW5kICgyKSB0aGUgdHlwZSBvZlxubWVzc2FnZXMgdGhhdCB3aWxsIGNvbWUgYmFjayBpbnRvIHlvdXIgYXBwbGljYXRpb24uXG5cbioqTm90ZToqKiBEbyBub3Qgd29ycnkgaWYgdGhpcyBzZWVtcyBjb25mdXNpbmcgYXQgZmlyc3QhIEFzIHdpdGggZXZlcnkgR3JlbiB1c2VyXG5ldmVyLCBzdWJzY3JpcHRpb25zIHdpbGwgbWFrZSBtb3JlIHNlbnNlIGFzIHlvdSB3b3JrIHRocm91Z2ggW3RoZSBHcmVuIEFyY2hpdGVjdHVyZVxuVHV0b3JpYWxdKGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvKSBhbmQgc2VlIGhvdyB0aGV5IGZpdFxuaW50byBhIHJlYWwgYXBwbGljYXRpb24hXG5cbi19XG50eXBlIFN1YiBtc2dcbiAgICA9IFN1YlxuXG5cbnstfCBUZWxsIHRoZSBydW50aW1lIHRoYXQgdGhlcmUgYXJlIG5vIHN1YnNjcmlwdGlvbnMuXG4tfVxubm9uZSA6IFN1YiBtc2dcbm5vbmUgPVxuICAgIGJhdGNoIFtdXG5cblxuey18IFdoZW4geW91IG5lZWQgdG8gc3Vic2NyaWJlIHRvIG11bHRpcGxlIHRoaW5ncywgeW91IGNhbiBjcmVhdGUgYSBgYmF0Y2hgIG9mXG5zdWJzY3JpcHRpb25zLlxuXG4qKk5vdGU6KiogYFN1Yi5ub25lYCBhbmQgYFN1Yi5iYXRjaCBbIFN1Yi5ub25lLCBTdWIubm9uZSBdYCBhbmRcbmBTdWIuYmF0Y2ggW11gIGFsbCBkbyB0aGUgc2FtZSB0aGluZy5cblxuLX1cbmJhdGNoIDogQXJyYXkgKFN1YiBtc2cpIC0+IFN1YiBtc2dcbmJhdGNoID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5iYXRjaFxuXG5cblxuLS0gRkFOQ1kgU1RVRkZcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIHN1YnNjcmlwdGlvbi5cblZlcnkgc2ltaWxhciB0byBbYEh0bWwubWFwYF0oL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9IdG1sI21hcCkuXG5cblRoaXMgaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIHdlbGwtc3RydWN0dXJlZCBHcmVuIGNvZGUsIHNvIGRlZmluaXRlbHkgcmVhZCB0aGVcbnNlY3Rpb24gb24gW3N0cnVjdHVyZV0gaW4gdGhlIGd1aWRlIGJlZm9yZSByZWFjaGluZyBmb3IgdGhpcyFcblxuW3N0cnVjdHVyZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy93ZWJhcHBzL3N0cnVjdHVyZS5odG1sXG5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IFN1YiBhIC0+IFN1YiBtc2dcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ubWFwXG4iLAogICAgICAgICJtb2R1bGUgQnJvd3NlciBleHBvc2luZ1xuICAgICggc2FuZGJveFxuICAgICwgZWxlbWVudFxuICAgICwgZG9jdW1lbnQsIERvY3VtZW50XG4gICAgLCBhcHBsaWNhdGlvbiwgVXJsUmVxdWVzdCguLilcbiAgICApXG5cbnstfCBUaGlzIG1vZHVsZSBoZWxwcyB5b3Ugc2V0IHVwIGFuIEdyZW4gYFByb2dyYW1gIHdpdGggZnVuY3Rpb25zIGxpa2Vcbltgc2FuZGJveGBdKCNzYW5kYm94KSBhbmQgW2Bkb2N1bWVudGBdKCNkb2N1bWVudCkuXG5cblxuIyMgU2FuZGJveGVzXG5cbkBkb2NzIHNhbmRib3hcblxuXG4jIyBFbGVtZW50c1xuXG5AZG9jcyBlbGVtZW50XG5cblxuIyMgRG9jdW1lbnRzXG5cbkBkb2NzIGRvY3VtZW50LCBEb2N1bWVudFxuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG5AZG9jcyBhcHBsaWNhdGlvbiwgVXJsUmVxdWVzdFxuXG4tfVxuXG5pbXBvcnQgQnJvd3Nlci5OYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25cbmltcG9ydCBEaWN0XG5pbXBvcnQgR3Jlbi5LZXJuZWwuQnJvd3NlclxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEh0bWwpXG5pbXBvcnQgVXJsXG5cblxuXG4tLSBTQU5EQk9YXG5cblxuey18IENyZWF0ZSBhIOKAnHNhbmRib3hlZOKAnSBwcm9ncmFtIHRoYXQgY2Fubm90IGNvbW11bmljYXRlIHdpdGggdGhlIG91dHNpZGVcbndvcmxkLlxuXG5UaGlzIGlzIGdyZWF0IGZvciBsZWFybmluZyB0aGUgYmFzaWNzIG9mIFtUaGUgRWxtIEFyY2hpdGVjdHVyZV1bdGVhXSwgd2hpY2ggR3JlblxudXNlcyBmb3Igc3RydWN0dXJpbmcgYXBwbGljYXRpb25zLiBZb3UgY2FuIHNlZSBzYW5kYm94ZXMgaW4gYWN0aW9uIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZXM6XG5cbiAgLSBbQnV0dG9uc10oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL2J1dHRvbnMuaHRtbClcbiAgLSBbVGV4dCBGaWVsZHNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS90ZXh0X2ZpZWxkcy5odG1sKVxuICAtIFtGb3Jtc10oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL2Zvcm1zLmh0bWwpXG5cblt0ZWFdOiBodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvXG5cbi19XG5zYW5kYm94IDpcbiAgICB7IGluaXQgOiBtb2RlbFxuICAgICwgdmlldyA6IG1vZGVsIC0+IEh0bWwgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4gbW9kZWxcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSB7fSBtb2RlbCBtc2dcbnNhbmRib3ggaW1wbCA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5lbGVtZW50XG4gICAgICAgIHsgaW5pdCA9IFxce30gLT4geyBtb2RlbCA9IGltcGwuaW5pdCwgY29tbWFuZCA9IENtZC5ub25lIH1cbiAgICAgICAgLCB2aWV3ID0gaW1wbC52aWV3XG4gICAgICAgICwgdXBkYXRlID0gXFxtc2cgbW9kZWwgLT4geyBtb2RlbCA9IGltcGwudXBkYXRlIG1zZyBtb2RlbCwgY29tbWFuZCA9IENtZC5ub25lIH1cbiAgICAgICAgLCBzdWJzY3JpcHRpb25zID0gXFxfIC0+IFN1Yi5ub25lXG4gICAgICAgIH1cblxuXG5cbi0tIEVMRU1FTlRcblxuXG57LXwgQ3JlYXRlIGFuIEhUTUwgZWxlbWVudCBtYW5hZ2VkIGJ5IEdyZW4uIFRoZSByZXN1bHRpbmcgZWxlbWVudHMgYXJlIGVhc3kgdG9cbmVtYmVkIGluIGxhcmdlciBKYXZhU2NyaXB0IHByb2plY3RzLCBhbmQgbG90cyBvZiBjb21wYW5pZXMgdGhhdCB1c2UgR3Jlblxuc3RhcnRlZCB3aXRoIHRoaXMgYXBwcm9hY2ghIFRyeSBpdCBvdXQgb24gc29tZXRoaW5nIHNtYWxsLiBJZiBpdCB3b3JrcywgZ3JlYXQsXG5kbyBtb3JlISBJZiBub3QsIHJldmVydCwgbm8gYmlnIGRlYWwuXG5cblVubGlrZSBhIFtgc2FuZGJveGBdKCNzYW5kYm94KSwgYW4gYGVsZW1lbnRgIGNhbiB0YWxrIHRvIHRoZSBvdXRzaWRlIHdvcmxkIGluXG5hIGNvdXBsZSB3YXlzOlxuXG4gIC0gYENtZGAgJm1kYXNoOyB5b3UgY2FuIOKAnGNvbW1hbmTigJ0gdGhlIEdyZW4gcnVudGltZSB0byBkbyBzdHVmZiwgbGlrZSBIVFRQLlxuICAtIGBTdWJgICZtZGFzaDsgeW91IGNhbiDigJxzdWJzY3JpYmXigJ0gdG8gZXZlbnQgc291cmNlcywgbGlrZSBjbG9jayB0aWNrcy5cbiAgLSBgZmxhZ3NgICZtZGFzaDsgSmF2YVNjcmlwdCBjYW4gcGFzcyBpbiBkYXRhIHdoZW4gc3RhcnRpbmcgdGhlIEdyZW4gcHJvZ3JhbVxuICAtIGBwb3J0c2AgJm1kYXNoOyBzZXQgdXAgYSBjbGllbnQtc2VydmVyIHJlbGF0aW9uc2hpcCB3aXRoIEphdmFTY3JpcHRcblxuQXMgeW91IHJlYWQgW3RoZSBndWlkZV1bZ3VpZGVdIHlvdSB3aWxsIHJ1biBpbnRvIGEgYnVuY2ggb2YgZXhhbXBsZXMgb2YgYGVsZW1lbnRgXG5pbiBbdGhpcyBzZWN0aW9uXVtmeF0uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBmbGFncyBhbmQgcG9ydHMgaW4gW3RoZSBpbnRlcm9wXG5zZWN0aW9uXVtpbnRlcm9wXS5cblxuW2d1aWRlXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL1xuW2Z4XTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2VmZmVjdHMvXG5baW50ZXJvcF06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9pbnRlcm9wL1xuXG4tfVxuZWxlbWVudCA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gSHRtbCBtc2dcbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHN1YnNjcmlwdGlvbnMgOiBtb2RlbCAtPiBTdWIgbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG5lbGVtZW50ID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmVsZW1lbnRcblxuXG5cbi0tIERPQ1VNRU5UXG5cblxuey18IENyZWF0ZSBhbiBIVE1MIGRvY3VtZW50IG1hbmFnZWQgYnkgR3Jlbi4gVGhpcyBleHBhbmRzIHVwb24gd2hhdCBgZWxlbWVudGBcbmNhbiBkbyBpbiB0aGF0IGB2aWV3YCBub3cgZ2l2ZXMgeW91IGNvbnRyb2wgb3ZlciB0aGUgYDx0aXRsZT5gIGFuZCBgPGJvZHk+YC5cbi19XG5kb2N1bWVudCA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gRG9jdW1lbnQgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuZG9jdW1lbnQgPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuZG9jdW1lbnRcblxuXG57LXwgVGhpcyBkYXRhIHNwZWNpZmllcyB0aGUgYDx0aXRsZT5gIGFuZCBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgc2hvdWxkIGdvIGluXG50aGUgYDxib2R5PmAuIFRoaXMgbWVhbnMgeW91IGNhbiB1cGRhdGUgdGhlIHRpdGxlIGFzIHlvdXIgYXBwbGljYXRpb24gY2hhbmdlcy5cbk1heWJlIHlvdXIgXCJzaW5nbGUtcGFnZSBhcHBcIiBuYXZpZ2F0ZXMgdG8gYSBcImRpZmZlcmVudCBwYWdlXCIsIG1heWJlIGEgY2FsZW5kYXJcbmFwcCBzaG93cyBhbiBhY2N1cmF0ZSBkYXRlIGluIHRoZSB0aXRsZSwgZXRjLlxuXG4+ICoqTm90ZSBhYm91dCBDU1M6KiogVGhpcyBsb29rcyBzaW1pbGFyIHRvIGFuIGA8aHRtbD5gIGRvY3VtZW50LCBidXQgdGhpcyBpc1xuPiBub3QgdGhlIHBsYWNlIHRvIG1hbmFnZSBDU1MgYXNzZXRzLiBJZiB5b3Ugd2FudCB0byB3b3JrIHdpdGggQ1NTLCB0aGVyZSBhcmVcbj4gYSBjb3VwbGUgd2F5czpcbj5cbj4gMS4gIFBhY2thZ2VzIGxpa2UgW2BydGZlbGRtYW4vZWxtLWNzc2BdW2VsbS1jc3NdIGdpdmUgYWxsIG9mIHRoZSBmZWF0dXJlc1xuPiAgICAgb2YgQ1NTIHdpdGhvdXQgYW55IENTUyBmaWxlcy4gWW91IGNhbiBhZGQgYWxsIHRoZSBzdHlsZXMgeW91IG5lZWQgaW4geW91clxuPiAgICAgYHZpZXdgIGZ1bmN0aW9uLCBhbmQgdGhlcmUgaXMgbm8gbmVlZCB0byB3b3JyeSBhYm91dCBjbGFzcyBuYW1lcyBtYXRjaGluZy5cbj5cbj4gMi4gIENvbXBpbGUgeW91ciBHcmVuIGNvZGUgdG8gSmF2YVNjcmlwdCB3aXRoIGBncmVuIG1ha2UgLS1vdXRwdXQ9Z3Jlbi5qc2AgYW5kXG4+ICAgICB0aGVuIG1ha2UgeW91ciBvd24gSFRNTCBmaWxlIHRoYXQgbG9hZHMgYGdyZW4uanNgIGFuZCB0aGUgQ1NTIGZpbGUgeW91IHdhbnQuXG4+ICAgICBXaXRoIHRoaXMgYXBwcm9hY2gsIGl0IGRvZXMgbm90IG1hdHRlciB3aGVyZSB0aGUgQ1NTIGNvbWVzIGZyb20uIFdyaXRlIGl0XG4+ICAgICBieSBoYW5kLiBHZW5lcmF0ZSBpdC4gV2hhdGV2ZXIgeW91IHdhbnQgdG8gZG8uXG4+XG4+IDMuICBJZiB5b3UgbmVlZCB0byBjaGFuZ2UgYDxsaW5rPmAgdGFncyBkeW5hbWljYWxseSwgeW91IGNhbiBzZW5kIG1lc3NhZ2VzXG4+ICAgICBvdXQgYSBwb3J0IHRvIGRvIGl0IGluIEphdmFTY3JpcHQuXG4+XG4+IFRoZSBiaWdnZXIgcG9pbnQgaGVyZSBpcyB0aGF0IGxvYWRpbmcgYXNzZXRzIGludm9sdmVzIHRvdWNoaW5nIHRoZSBgPGhlYWQ+YFxuPiBhcyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2YgYnJvd3NlcnMsIGJ1dCB0aGF0IGRvZXMgbm90IG1lYW4gaXQgc2hvdWxkIGJlXG4+IHRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgYHZpZXdgIGZ1bmN0aW9uIGluIEdyZW4uIFNvIHdlIGRvIGl0IGRpZmZlcmVudGx5IVxuXG5bZWxtLWNzc106IC9wYWNrYWdlcy9ydGZlbGRtYW4vZWxtLWNzcy9sYXRlc3QvXG5cbi19XG50eXBlIGFsaWFzIERvY3VtZW50IG1zZyA9XG4gICAgeyB0aXRsZSA6IFN0cmluZ1xuICAgICwgYm9keSA6IEFycmF5IChIdG1sIG1zZylcbiAgICB9XG5cblxuXG4tLSBBUFBMSUNBVElPTlxuXG5cbnstfCBDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBtYW5hZ2VzIFtgVXJsYF1bdXJsXSBjaGFuZ2VzLlxuXG4qKldoZW4gdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cyoqLCBgaW5pdGAgZ2V0cyB0aGUgaW5pdGlhbCBgVXJsYC4gWW91IGNhbiBzaG93XG5kaWZmZXJlbnQgdGhpbmdzIGRlcGVuZGluZyBvbiB0aGUgYFVybGAhXG5cbioqV2hlbiBzb21lb25lIGNsaWNrcyBhIGxpbmsqKiwgbGlrZSBgPGEgaHJlZj1cIi9ob21lXCI+SG9tZTwvYT5gLCBpdCBhbHdheXMgZ29lc1xudGhyb3VnaCBgb25VcmxSZXF1ZXN0YC4gVGhlIHJlc3VsdGluZyBtZXNzYWdlIGdvZXMgdG8geW91ciBgdXBkYXRlYCBmdW5jdGlvbixcbmdpdmluZyB5b3UgYSBjaGFuY2UgdG8gc2F2ZSBzY3JvbGwgcG9zaXRpb24gb3IgcGVyc2lzdCBkYXRhIGJlZm9yZSBjaGFuZ2luZ1xudGhlIFVSTCB5b3Vyc2VsZiB3aXRoIFtgcHVzaFVybGBdW2JucF0gb3IgW2Bsb2FkYF1bYm5sXS4gTW9yZSBpbmZvIG9uIHRoaXMgaW5cbnRoZSBbYFVybFJlcXVlc3RgXSgjVXJsUmVxdWVzdCkgZG9jcyFcblxuKipXaGVuIHRoZSBVUkwgY2hhbmdlcyoqLCB0aGUgbmV3IGBVcmxgIGdvZXMgdGhyb3VnaCBgb25VcmxDaGFuZ2VgLiBUaGVcbnJlc3VsdGluZyBtZXNzYWdlIGdvZXMgdG8gYHVwZGF0ZWAgd2hlcmUgeW91IGNhbiBkZWNpZGUgd2hhdCB0byBzaG93IG5leHQuXG5cbkFwcGxpY2F0aW9ucyBhbHdheXMgdXNlIHRoZSBbYEJyb3dzZXIuTmF2aWdhdGlvbmBdW2JuXSBtb2R1bGUgZm9yIHByZWNpc2VcbmNvbnRyb2wgb3ZlciBgVXJsYCBjaGFuZ2VzLlxuXG4qKk1vcmUgSW5mbzoqKiBIZXJlIGFyZSBzb21lIGV4YW1wbGUgdXNhZ2VzIG9mIGBhcHBsaWNhdGlvbmAgcHJvZ3JhbXM6XG5cbiAgLSBbUmVhbFdvcmxkIGV4YW1wbGUgYXBwXShodHRwczovL2dpdGh1Yi5jb20vcnRmZWxkbWFuL2VsbS1zcGEtZXhhbXBsZSlcbiAgLSBbR3JlbuKAmXMgcGFja2FnZSB3ZWJzaXRlXShodHRwczovL2dpdGh1Yi5jb20vZWxtL3BhY2thZ2UuZ3Jlbi1sYW5nLm9yZylcblxuVGhlc2UgYXJlIHF1aXRlIGFkdmFuY2VkIEdyZW4gcHJvZ3JhbXMsIHNvIGJlIHN1cmUgdG8gZ28gdGhyb3VnaCBbdGhlIGd1aWRlXVtnXVxuZmlyc3QgdG8gZ2V0IGEgc29saWQgY29uY2VwdHVhbCBmb3VuZGF0aW9uIGJlZm9yZSBkaXZpbmcgaW4hIElmIHlvdSBzdGFydFxucmVhZGluZyBhIGNhbGN1bHVzIGJvb2sgZnJvbSBwYWdlIDMxNCwgaXQgbWlnaHQgc2VlbSBjb25mdXNpbmcuIFNhbWUgaGVyZSFcblxuKipOb3RlOioqIENhbiBhbiBbYGVsZW1lbnRgXSgjZWxlbWVudCkgbWFuYWdlIHRoZSBVUkwgdG9vPyBSZWFkIFt0aGlzXSFcblxuW2ddOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvXG5bYm5dOiBCcm93c2VyLk5hdmlnYXRpb25cbltibnBdOiBCcm93c2VyLk5hdmlnYXRpb24jcHVzaFVybFxuW2JubF06IEJyb3dzZXIuTmF2aWdhdGlvbiNsb2FkXG5bdXJsXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL3VybC9sYXRlc3QvbW9kdWxlL1VybCNVcmxcblt0aGlzXTogaHR0cHM6Ly9naXRodWIuY29tL2dyZW4tbGFuZy9icm93c2VyL2Jsb2IvMS4wLjIvbm90ZXMvbmF2aWdhdGlvbi1pbi1lbGVtZW50cy5tZFxuXG4tfVxuYXBwbGljYXRpb24gOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IFVybC5VcmwgLT4gTmF2aWdhdGlvbi5LZXkgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gRG9jdW1lbnQgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgICwgb25VcmxSZXF1ZXN0IDogVXJsUmVxdWVzdCAtPiBtc2dcbiAgICAsIG9uVXJsQ2hhbmdlIDogVXJsLlVybCAtPiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbmFwcGxpY2F0aW9uID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmFwcGxpY2F0aW9uXG5cblxuey18IEFsbCBsaW5rcyBpbiBhbiBbYGFwcGxpY2F0aW9uYF0oI2FwcGxpY2F0aW9uKSBjcmVhdGUgYSBgVXJsUmVxdWVzdGAuIFNvXG53aGVuIHlvdSBjbGljayBgPGEgaHJlZj1cIi9ob21lXCI+SG9tZTwvYT5gLCBpdCBkb2VzIG5vdCBqdXN0IG5hdmlnYXRlISBJdFxubm90aWZpZXMgYG9uVXJsUmVxdWVzdGAgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgdGhlIGBVcmxgLlxuXG5cbiMjIyBgSW50ZXJuYWxgIHZzIGBFeHRlcm5hbGBcblxuSW1hZ2luZSB3ZSBhcmUgYnJvd3NpbmcgYGh0dHBzOi8vZXhhbXBsZS5jb21gLiBBbiBgSW50ZXJuYWxgIGxpbmsgd291bGQgYmVcbmxpa2U6XG5cbiAgLSBgc2V0dGluZ3MjcHJpdmFjeWBcbiAgLSBgL2hvbWVgXG4gIC0gYGh0dHBzOi8vZXhhbXBsZS5jb20vaG9tZWBcbiAgLSBgLy9leGFtcGxlLmNvbS9ob21lYFxuXG5BbGwgb2YgdGhlc2UgbGlua3MgZXhpc3QgdW5kZXIgdGhlIGBodHRwczovL2V4YW1wbGUuY29tYCBkb21haW4uIEFuIGBFeHRlcm5hbGBcbmxpbmsgd291bGQgYmUgbGlrZTpcblxuICAtIGBodHRwczovL2dyZW4tbGFuZy5vcmcvZXhhbXBsZXNgXG4gIC0gYGh0dHBzOi8vb3RoZXIuZXhhbXBsZS5jb20vaG9tZWBcbiAgLSBgaHR0cDovL2V4YW1wbGUuY29tL2hvbWVgXG5cbkFueXRoaW5nIHRoYXQgY2hhbmdlcyB0aGUgZG9tYWluLiBOb3RpY2UgdGhhdCBjaGFuZ2luZyB0aGUgcHJvdG9jb2wgZnJvbVxuYGh0dHBzYCB0byBgaHR0cGAgaXMgY29uc2lkZXJlZCBhIGRpZmZlcmVudCBkb21haW4hIChBbmQgdmljZSB2ZXJzYSEpXG5cblxuIyMjIFB1cnBvc2VcblxuSGF2aW5nIGEgYFVybFJlcXVlc3RgIHJlcXVpcmVzIGEgY2FzZSBpbiB5b3VyIGB1cGRhdGVgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBCcm93c2VyIGV4cG9zaW5nICguLilcbiAgICBpbXBvcnQgQnJvd3Nlci5OYXZpZ2F0aW9uIGFzIE5hdlxuICAgIGltcG9ydCBVcmxcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tlZExpbmsgVXJsUmVxdWVzdFxuXG4gICAgdXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IHsgbW9kZWwgOiBNb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgIHVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgICAgICBjYXNlIG1zZyBvZlxuICAgICAgICAgICAgQ2xpY2tlZExpbmsgdXJsUmVxdWVzdCAtPlxuICAgICAgICAgICAgICAgIGNhc2UgdXJsUmVxdWVzdCBvZlxuICAgICAgICAgICAgICAgICAgICBJbnRlcm5hbCB1cmwgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbW9kZWwgPSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBjb21tYW5kID0gTmF2LnB1c2hVcmwgbW9kZWwua2V5IChVcmwudG9TdHJpbmcgdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsIHVybCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlbCA9IG1vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGNvbW1hbmQgPSBOYXYubG9hZCB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSBpdCBnaXZlcyB5b3UgYSBjaGFuY2UgdG8gY3VzdG9taXplIHRoZSBiZWhhdmlvciBpbiBlYWNoXG5jYXNlLiBNYXliZSBvbiBzb21lIGBJbnRlcm5hbGAgbGlua3MgeW91IHNhdmUgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aXRoXG5bYEJyb3dzZXIuRG9tLmdldFZpZXdwb3J0YF0oQnJvd3Nlci5Eb20jZ2V0Vmlld3BvcnQpIHNvIHlvdSBjYW4gcmVzdG9yZSBpdFxubGF0ZXIuIE1heWJlIG9uIGBFeHRlcm5hbGAgbGlua3MgeW91IHBlcnNpc3QgcGFydHMgb2YgdGhlIGBNb2RlbGAgb24geW91clxuc2VydmVycyBiZWZvcmUgbGVhdmluZy4gV2hhdGV2ZXIgeW91IG5lZWQgdG8gZG8hXG5cbioqTm90ZToqKiBLbm93aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgbm90IGVub3VnaCB0byByZXN0b3JlIGl0ISBXaGF0IGlmIHRoZVxuYnJvd3NlciBkaW1lbnNpb25zIGNoYW5nZT8gVGhlIHNjcm9sbCBwb3NpdGlvbiB3aWxsIG5vdCBjb3JyZWxhdGUgd2l0aFxuJmxkcXVvO3doYXQgd2FzIG9uIHNjcmVlbiZyZHF1bzsgYW55bW9yZS4gU28gaXQgbWF5IGJlIGJldHRlciB0byByZW1lbWJlclxuJmxkcXVvO3doYXQgd2FzIG9uIHNjcmVlbiZyZHF1bzsgYW5kIHJlY3JlYXRlIHRoZSBwb3NpdGlvbiBiYXNlZCBvbiB0aGF0LiBGb3JcbmV4YW1wbGUsIGluIGEgV2lraXBlZGlhIGFydGljbGUsIHJlbWVtYmVyIHRoZSBoZWFkZXIgdGhhdCB0aGV5IHdlcmUgbG9va2luZyBhdFxubW9zdCByZWNlbnRseS4gW2BCcm93c2VyLkRvbS5nZXRFbGVtZW50YF0oQnJvd3Nlci5Eb20jZ2V0RWxlbWVudCkgaXMgZGVzaWduZWRcbmZvciBmaWd1cmluZyB0aGF0IG91dCFcblxuLX1cbnR5cGUgVXJsUmVxdWVzdFxuICAgID0gSW50ZXJuYWwgVXJsLlVybFxuICAgIHwgRXh0ZXJuYWwgU3RyaW5nXG4iLAogICAgICAgICJtb2R1bGUgSHRtbCBleHBvc2luZ1xuICAoIEh0bWwsIEF0dHJpYnV0ZVxuICAsIHRleHQsIG5vZGUsIG1hcFxuICAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcbiAgLCBkaXYsIHAsIGhyLCBwcmUsIGJsb2NrcXVvdGVcbiAgLCBzcGFuLCBhLCBjb2RlLCBlbSwgc3Ryb25nLCBpLCBiLCB1LCBzdWIsIHN1cCwgYnJcbiAgLCBvbCwgdWwsIGxpLCBkbCwgZHQsIGRkXG4gICwgaW1nLCBpZnJhbWUsIGNhbnZhcywgbWF0aFxuICAsIGZvcm0sIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3QsIG9wdGlvblxuICAsIHNlY3Rpb24sIG5hdiwgYXJ0aWNsZSwgYXNpZGUsIGhlYWRlciwgZm9vdGVyLCBhZGRyZXNzLCBtYWluX1xuICAsIGZpZ3VyZSwgZmlnY2FwdGlvblxuICAsIHRhYmxlLCBjYXB0aW9uLCBjb2xncm91cCwgY29sLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0ciwgdGQsIHRoXG4gICwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIGRhdGFsaXN0LCBvcHRncm91cCwgb3V0cHV0LCBwcm9ncmVzcywgbWV0ZXJcbiAgLCBhdWRpbywgdmlkZW8sIHNvdXJjZSwgdHJhY2tcbiAgLCBlbWJlZCwgb2JqZWN0LCBwYXJhbVxuICAsIGlucywgZGVsXG4gICwgc21hbGwsIGNpdGUsIGRmbiwgYWJiciwgdGltZSwgdmFyLCBzYW1wLCBrYmQsIHMsIHFcbiAgLCBtYXJrLCBydWJ5LCBydCwgcnAsIGJkaSwgYmRvLCB3YnJcbiAgLCBkZXRhaWxzLCBzdW1tYXJ5LCBtZW51aXRlbSwgbWVudVxuICApXG5cbnstfCBUaGlzIGZpbGUgaXMgb3JnYW5pemVkIHJvdWdobHkgaW4gb3JkZXIgb2YgcG9wdWxhcml0eS4gVGhlIHRhZ3Mgd2hpY2ggeW91J2RcbmV4cGVjdCB0byB1c2UgZnJlcXVlbnRseSB3aWxsIGJlIGNsb3NlciB0byB0aGUgdG9wLlxuXG5AZG9jcyBIdG1sLCBBdHRyaWJ1dGUsIHRleHQsIG5vZGUsIG1hcFxuXG4jIyBIZWFkZXJzXG5AZG9jcyBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XG5cbiMjIEdyb3VwaW5nIENvbnRlbnRcbkBkb2NzIGRpdiwgcCwgaHIsIHByZSwgYmxvY2txdW90ZVxuXG4jIyBUZXh0XG5AZG9jcyBzcGFuLCBhLCBjb2RlLCBlbSwgc3Ryb25nLCBpLCBiLCB1LCBzdWIsIHN1cCwgYnJcblxuIyMgTGlzdHNcbkBkb2NzIG9sLCB1bCwgbGksIGRsLCBkdCwgZGRcblxuIyMgRW1iZWRkZWQgQ29udGVudFxuQGRvY3MgaW1nLCBpZnJhbWUsIGNhbnZhcywgbWF0aFxuXG4jIyBJbnB1dHNcbkBkb2NzIGZvcm0sIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3QsIG9wdGlvblxuXG4jIyBTZWN0aW9uc1xuQGRvY3Mgc2VjdGlvbiwgbmF2LCBhcnRpY2xlLCBhc2lkZSwgaGVhZGVyLCBmb290ZXIsIGFkZHJlc3MsIG1haW5fXG5cbiMjIEZpZ3VyZXNcbkBkb2NzIGZpZ3VyZSwgZmlnY2FwdGlvblxuXG4jIyBUYWJsZXNcbkBkb2NzIHRhYmxlLCBjYXB0aW9uLCBjb2xncm91cCwgY29sLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0ciwgdGQsIHRoXG5cbiMjIExlc3MgQ29tbW9uIElucHV0c1xuQGRvY3MgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIGRhdGFsaXN0LCBvcHRncm91cCwgb3V0cHV0LCBwcm9ncmVzcywgbWV0ZXJcblxuIyMgQXVkaW8gYW5kIFZpZGVvXG5AZG9jcyBhdWRpbywgdmlkZW8sIHNvdXJjZSwgdHJhY2tcblxuIyMgRW1iZWRkZWQgT2JqZWN0c1xuQGRvY3MgZW1iZWQsIG9iamVjdCwgcGFyYW1cblxuIyMgVGV4dCBFZGl0c1xuQGRvY3MgaW5zLCBkZWxcblxuIyMgU2VtYW50aWMgVGV4dFxuQGRvY3Mgc21hbGwsIGNpdGUsIGRmbiwgYWJiciwgdGltZSwgdmFyLCBzYW1wLCBrYmQsIHMsIHFcblxuIyMgTGVzcyBDb21tb24gVGV4dCBUYWdzXG5AZG9jcyBtYXJrLCBydWJ5LCBydCwgcnAsIGJkaSwgYmRvLCB3YnJcblxuIyBJbnRlcmFjdGl2ZSBFbGVtZW50c1xuQGRvY3MgZGV0YWlscywgc3VtbWFyeSwgbWVudWl0ZW0sIG1lbnVcblxuLX1cblxuXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cblxuLS0gQ09SRSBUWVBFU1xuXG5cbnstfCBUaGUgY29yZSBidWlsZGluZyBibG9jayB1c2VkIHRvIGJ1aWxkIHVwIEhUTUwuIEhlcmUgd2UgY3JlYXRlIGFuIGBIdG1sYFxudmFsdWUgd2l0aCBubyBhdHRyaWJ1dGVzIGFuZCBvbmUgY2hpbGQ6XG5cbiAgICBoZWxsbyA6IEh0bWwgbXNnXG4gICAgaGVsbG8gPVxuICAgICAgZGl2IFtdIFsgdGV4dCBcIkhlbGxvIVwiIF1cbi19XG50eXBlIGFsaWFzIEh0bWwgbXNnID0gVmlydHVhbERvbS5Ob2RlIG1zZ1xuXG5cbnstfCBTZXQgYXR0cmlidXRlcyBvbiB5b3VyIGBIdG1sYC4gTGVhcm4gbW9yZSBpbiB0aGVcbltgSHRtbC5BdHRyaWJ1dGVzYF0oSHRtbC1BdHRyaWJ1dGVzKSBtb2R1bGUuXG4tfVxudHlwZSBhbGlhcyBBdHRyaWJ1dGUgbXNnID0gVmlydHVhbERvbS5BdHRyaWJ1dGUgbXNnXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IEdlbmVyYWwgd2F5IHRvIGNyZWF0ZSBIVE1MIG5vZGVzLiBJdCBpcyB1c2VkIHRvIGRlZmluZSBhbGwgb2YgdGhlIGhlbHBlclxuZnVuY3Rpb25zIGluIHRoaXMgbGlicmFyeS5cblxuICAgIGRpdiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG4gICAgZGl2IGF0dHJpYnV0ZXMgY2hpbGRyZW4gPVxuICAgICAgICBub2RlIFwiZGl2XCIgYXR0cmlidXRlcyBjaGlsZHJlblxuXG5Zb3UgY2FuIHVzZSB0aGlzIHRvIGNyZWF0ZSBjdXN0b20gbm9kZXMgaWYgeW91IG5lZWQgdG8gY3JlYXRlIHNvbWV0aGluZyB0aGF0XG5pcyBub3QgY292ZXJlZCBieSB0aGUgaGVscGVyIGZ1bmN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuXG4tfVxubm9kZSA6IFN0cmluZyAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubm9kZSA9XG4gIFZpcnR1YWxEb20ubm9kZVxuXG5cbnstfCBKdXN0IHB1dCBwbGFpbiB0ZXh0IGluIHRoZSBET00uIEl0IHdpbGwgZXNjYXBlIHRoZSBzdHJpbmcgc28gdGhhdCBpdCBhcHBlYXJzXG5leGFjdGx5IGFzIHlvdSBzcGVjaWZ5LlxuXG4gICAgdGV4dCBcIkhlbGxvIFdvcmxkIVwiXG4tfVxudGV4dCA6IFN0cmluZyAtPiBIdG1sIG1zZ1xudGV4dCA9XG4gIFZpcnR1YWxEb20udGV4dFxuXG5cblxuLS0gTkVTVElORyBWSUVXU1xuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IHNvbWUgYEh0bWxgLiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUsXG53ZSBoYXZlIGB2aWV3QnV0dG9uYCB0aGF0IHByb2R1Y2VzIGAoKWAgbWVzc2FnZXMsIGFuZCB3ZSB0cmFuc2Zvcm0gdGhvc2UgdmFsdWVzXG5pbnRvIGBNc2dgIHZhbHVlcyBpbiBgdmlld2AuXG5cbiAgICB0eXBlIE1zZyA9IExlZnQgfCBSaWdodFxuXG4gICAgdmlldyA6IG1vZGVsIC0+IEh0bWwgTXNnXG4gICAgdmlldyBtb2RlbCA9XG4gICAgICBkaXYgW11cbiAgICAgICAgWyBtYXAgKFxcXyAtPiBMZWZ0KSAodmlld0J1dHRvbiBcIkxlZnRcIilcbiAgICAgICAgLCBtYXAgKFxcXyAtPiBSaWdodCkgKHZpZXdCdXR0b24gXCJSaWdodFwiKVxuICAgICAgICBdXG5cbiAgICB2aWV3QnV0dG9uIDogU3RyaW5nIC0+IEh0bWwgKClcbiAgICB2aWV3QnV0dG9uIG5hbWUgPVxuICAgICAgYnV0dG9uIFsgb25DbGljayAoKSBdIFsgdGV4dCBuYW1lIF1cblxuSWYgeW91IGFyZSBncm93aW5nIHlvdXIgcHJvamVjdCBhcyByZWNvbW1lbmRlZCBpbiBbdGhlIG9mZmljaWFsXG5ndWlkZV0oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvKSwgdGhpcyBzaG91bGQgbm90IGNvbWUgaW4gaGFuZHkgaW4gbW9zdFxucHJvamVjdHMuIFVzdWFsbHkgaXQgaXMgZWFzaWVyIHRvIGp1c3QgcGFzcyB0aGluZ3MgaW4gYXMgYXJndW1lbnRzLlxuXG4qKk5vdGU6KiogU29tZSBmb2xrcyBoYXZlIHRyaWVkIHRvIHVzZSB0aGlzIHRvIG1ha2Ug4oCcY29tcG9uZW50c+KAnSBpbiB0aGVpclxucHJvamVjdHMsIGJ1dCB0aGV5IHJ1biBpbnRvIHRoZSBmYWN0IHRoYXQgY29tcG9uZW50cyBhcmUgb2JqZWN0cy4gQm90aCBhcmVcbmxvY2FsIG11dGFibGUgc3RhdGUgd2l0aCBtZXRob2RzLiBHcmVuIGlzIG5vdCBhbiBvYmplY3Qtb3JpZW50ZWQgbGFuZ3VhZ2UsIHNvXG55b3UgcnVuIGludG8gYWxsIHNvcnRzIG9mIGZyaWN0aW9uIGlmIHlvdSB0cnkgdG8gdXNlIGl0IGxpa2Ugb25lLiBJIGRlZmluaXRlbHlcbnJlY29tbWVuZCBhZ2FpbnN0IGdvaW5nIGRvd24gdGhhdCBwYXRoISBJbnN0ZWFkLCBtYWtlIHRoZSBzaW1wbGVzdCBmdW5jdGlvblxucG9zc2libGUgYW5kIHJlcGVhdC5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IEh0bWwgYSAtPiBIdG1sIG1zZ1xubWFwID1cbiAgVmlydHVhbERvbS5tYXBcblxuXG5cbi0tIFNFQ1RJT05TXG5cblxuey18IERlZmluZXMgYSBzZWN0aW9uIGluIGEgZG9jdW1lbnQuXG4tfVxuc2VjdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zZWN0aW9uID1cbiAgbm9kZSBcInNlY3Rpb25cIlxuXG5cbnstfCBEZWZpbmVzIGEgc2VjdGlvbiB0aGF0IGNvbnRhaW5zIG9ubHkgbmF2aWdhdGlvbiBsaW5rcy5cbi19XG5uYXYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubmF2ID1cbiAgbm9kZSBcIm5hdlwiXG5cblxuey18IERlZmluZXMgc2VsZi1jb250YWluZWQgY29udGVudCB0aGF0IGNvdWxkIGV4aXN0IGluZGVwZW5kZW50bHkgb2YgdGhlIHJlc3Rcbm9mIHRoZSBjb250ZW50LlxuLX1cbmFydGljbGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYXJ0aWNsZSA9XG4gIG5vZGUgXCJhcnRpY2xlXCJcblxuXG57LXwgRGVmaW5lcyBzb21lIGNvbnRlbnQgbG9vc2VseSByZWxhdGVkIHRvIHRoZSBwYWdlIGNvbnRlbnQuIElmIGl0IGlzIHJlbW92ZWQsXG50aGUgcmVtYWluaW5nIGNvbnRlbnQgc3RpbGwgbWFrZXMgc2Vuc2UuXG4tfVxuYXNpZGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYXNpZGUgPVxuICBub2RlIFwiYXNpZGVcIlxuXG5cbnstfC19XG5oMSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oMSA9XG4gIG5vZGUgXCJoMVwiXG5cblxuey18LX1cbmgyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmgyID1cbiAgbm9kZSBcImgyXCJcblxuXG57LXwtfVxuaDMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDMgPVxuICBub2RlIFwiaDNcIlxuXG5cbnstfC19XG5oNCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oNCA9XG4gIG5vZGUgXCJoNFwiXG5cblxuey18LX1cbmg1IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmg1ID1cbiAgbm9kZSBcImg1XCJcblxuXG57LXwtfVxuaDYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDYgPVxuICBub2RlIFwiaDZcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBoZWFkZXIgb2YgYSBwYWdlIG9yIHNlY3Rpb24uIEl0IG9mdGVuIGNvbnRhaW5zIGEgbG9nbywgdGhlXG50aXRsZSBvZiB0aGUgd2ViIHNpdGUsIGFuZCBhIG5hdmlnYXRpb25hbCB0YWJsZSBvZiBjb250ZW50LlxuLX1cbmhlYWRlciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oZWFkZXIgPVxuICBub2RlIFwiaGVhZGVyXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgZm9vdGVyIGZvciBhIHBhZ2Ugb3Igc2VjdGlvbi4gSXQgb2Z0ZW4gY29udGFpbnMgYSBjb3B5cmlnaHRcbm5vdGljZSwgc29tZSBsaW5rcyB0byBsZWdhbCBpbmZvcm1hdGlvbiwgb3IgYWRkcmVzc2VzIHRvIGdpdmUgZmVlZGJhY2suXG4tfVxuZm9vdGVyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZvb3RlciA9XG4gIG5vZGUgXCJmb290ZXJcIlxuXG5cbnstfCBEZWZpbmVzIGEgc2VjdGlvbiBjb250YWluaW5nIGNvbnRhY3QgaW5mb3JtYXRpb24uIC19XG5hZGRyZXNzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFkZHJlc3MgPVxuICBub2RlIFwiYWRkcmVzc1wiXG5cblxuey18IERlZmluZXMgdGhlIG1haW4gb3IgaW1wb3J0YW50IGNvbnRlbnQgaW4gdGhlIGRvY3VtZW50LiBUaGVyZSBpcyBvbmx5IG9uZVxuYG1haW5gIGVsZW1lbnQgaW4gdGhlIGRvY3VtZW50LlxuLX1cbm1haW5fIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1haW5fID1cbiAgbm9kZSBcIm1haW5cIlxuXG5cbi0tIEdST1VQSU5HIENPTlRFTlRcblxuey18IERlZmluZXMgYSBwb3J0aW9uIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhIHBhcmFncmFwaC4gLX1cbnAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucCA9XG4gIG5vZGUgXCJwXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRoZW1hdGljIGJyZWFrIGJldHdlZW4gcGFyYWdyYXBocyBvZiBhIHNlY3Rpb24gb3IgYXJ0aWNsZSBvclxuYW55IGxvbmdlciBjb250ZW50LlxuLX1cbmhyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmhyID1cbiAgbm9kZSBcImhyXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgaXRzIGNvbnRlbnQgaXMgcHJlZm9ybWF0dGVkIGFuZCB0aGF0IHRoaXMgZm9ybWF0IG11c3QgYmVcbnByZXNlcnZlZC5cbi19XG5wcmUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucHJlID1cbiAgbm9kZSBcInByZVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBjb250ZW50IHRoYXQgaXMgcXVvdGVkIGZyb20gYW5vdGhlciBzb3VyY2UuIC19XG5ibG9ja3F1b3RlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJsb2NrcXVvdGUgPVxuICBub2RlIFwiYmxvY2txdW90ZVwiXG5cblxuey18IERlZmluZXMgYW4gb3JkZXJlZCBsaXN0IG9mIGl0ZW1zLiAtfVxub2wgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub2wgPVxuICBub2RlIFwib2xcIlxuXG5cbnstfCBEZWZpbmVzIGFuIHVub3JkZXJlZCBsaXN0IG9mIGl0ZW1zLiAtfVxudWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudWwgPVxuICBub2RlIFwidWxcIlxuXG5cbnstfCBEZWZpbmVzIGEgaXRlbSBvZiBhbiBlbnVtZXJhdGlvbiBsaXN0LiAtfVxubGkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubGkgPVxuICBub2RlIFwibGlcIlxuXG5cbnstfCBEZWZpbmVzIGEgZGVmaW5pdGlvbiBsaXN0LCB0aGF0IGlzLCBhIGxpc3Qgb2YgdGVybXMgYW5kIHRoZWlyIGFzc29jaWF0ZWRcbmRlZmluaXRpb25zLlxuLX1cbmRsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRsID1cbiAgbm9kZSBcImRsXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRlcm0gZGVmaW5lZCBieSB0aGUgbmV4dCBgZGRgLiAtfVxuZHQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZHQgPVxuICBub2RlIFwiZHRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBkZWZpbml0aW9uIG9mIHRoZSB0ZXJtcyBpbW1lZGlhdGVseSBsaXN0ZWQgYmVmb3JlIGl0LiAtfVxuZGQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGQgPVxuICBub2RlIFwiZGRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgZmlndXJlIGlsbHVzdHJhdGVkIGFzIHBhcnQgb2YgdGhlIGRvY3VtZW50LiAtfVxuZmlndXJlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZpZ3VyZSA9XG4gIG5vZGUgXCJmaWd1cmVcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBsZWdlbmQgb2YgYSBmaWd1cmUuIC19XG5maWdjYXB0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZpZ2NhcHRpb24gPVxuICBub2RlIFwiZmlnY2FwdGlvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBnZW5lcmljIGNvbnRhaW5lciB3aXRoIG5vIHNwZWNpYWwgbWVhbmluZy4gLX1cbmRpdiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kaXYgPVxuICBub2RlIFwiZGl2XCJcblxuXG4tLSBURVhUIExFVkVMIFNFTUFOVElDXG5cbnstfCBSZXByZXNlbnRzIGEgaHlwZXJsaW5rLCBsaW5raW5nIHRvIGFub3RoZXIgcmVzb3VyY2UuIC19XG5hIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmEgPVxuICBub2RlIFwiYVwiXG5cblxuey18IFJlcHJlc2VudHMgZW1waGFzaXplZCB0ZXh0LCBsaWtlIGEgc3RyZXNzIGFjY2VudC4gLX1cbmVtIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmVtID1cbiAgbm9kZSBcImVtXCJcblxuXG57LXwgUmVwcmVzZW50cyBlc3BlY2lhbGx5IGltcG9ydGFudCB0ZXh0LiAtfVxuc3Ryb25nIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnN0cm9uZyA9XG4gIG5vZGUgXCJzdHJvbmdcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2lkZSBjb21tZW50LCB0aGF0IGlzLCB0ZXh0IGxpa2UgYSBkaXNjbGFpbWVyIG9yIGFcbmNvcHlyaWdodCwgd2hpY2ggaXMgbm90IGVzc2VudGlhbCB0byB0aGUgY29tcHJlaGVuc2lvbiBvZiB0aGUgZG9jdW1lbnQuXG4tfVxuc21hbGwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc21hbGwgPVxuICBub2RlIFwic21hbGxcIlxuXG5cbnstfCBSZXByZXNlbnRzIGNvbnRlbnQgdGhhdCBpcyBubyBsb25nZXIgYWNjdXJhdGUgb3IgcmVsZXZhbnQuIC19XG5zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnMgPVxuICBub2RlIFwic1wiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHRpdGxlIG9mIGEgd29yay4gLX1cbmNpdGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY2l0ZSA9XG4gIG5vZGUgXCJjaXRlXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBpbmxpbmUgcXVvdGF0aW9uLiAtfVxucSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5xID1cbiAgbm9kZSBcInFcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGVybSB3aG9zZSBkZWZpbml0aW9uIGlzIGNvbnRhaW5lZCBpbiBpdHMgbmVhcmVzdCBhbmNlc3RvclxuY29udGVudC5cbi19XG5kZm4gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGZuID1cbiAgbm9kZSBcImRmblwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gYWJicmV2aWF0aW9uIG9yIGFuIGFjcm9ueW07IHRoZSBleHBhbnNpb24gb2YgdGhlXG5hYmJyZXZpYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGluIHRoZSB0aXRsZSBhdHRyaWJ1dGUuXG4tfVxuYWJiciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hYmJyID1cbiAgbm9kZSBcImFiYnJcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgZGF0ZSBhbmQgdGltZSB2YWx1ZTsgdGhlIG1hY2hpbmUtcmVhZGFibGUgZXF1aXZhbGVudCBjYW4gYmVcbnJlcHJlc2VudGVkIGluIHRoZSBkYXRldGltZSBhdHRyaWJ1dGUuXG4tfVxudGltZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50aW1lID1cbiAgbm9kZSBcInRpbWVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGNvbXB1dGVyIGNvZGUuIC19XG5jb2RlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNvZGUgPVxuICBub2RlIFwiY29kZVwiXG5cblxuey18IFJlcHJlc2VudHMgYSB2YXJpYWJsZS4gU3BlY2lmaWMgY2FzZXMgd2hlcmUgaXQgc2hvdWxkIGJlIHVzZWQgaW5jbHVkZSBhblxuYWN0dWFsIG1hdGhlbWF0aWNhbCBleHByZXNzaW9uIG9yIHByb2dyYW1taW5nIGNvbnRleHQsIGFuIGlkZW50aWZpZXJcbnJlcHJlc2VudGluZyBhIGNvbnN0YW50LCBhIHN5bWJvbCBpZGVudGlmeWluZyBhIHBoeXNpY2FsIHF1YW50aXR5LCBhIGZ1bmN0aW9uXG5wYXJhbWV0ZXIsIG9yIGEgbWVyZSBwbGFjZWhvbGRlciBpbiBwcm9zZS5cbi19XG52YXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudmFyID1cbiAgbm9kZSBcInZhclwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIG91dHB1dCBvZiBhIHByb2dyYW0gb3IgYSBjb21wdXRlci4gLX1cbnNhbXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc2FtcCA9XG4gIG5vZGUgXCJzYW1wXCJcblxuXG57LXwgUmVwcmVzZW50cyB1c2VyIGlucHV0LCBvZnRlbiBmcm9tIHRoZSBrZXlib2FyZCwgYnV0IG5vdCBuZWNlc3NhcmlseTsgaXRcbm1heSByZXByZXNlbnQgb3RoZXIgaW5wdXQsIGxpa2UgdHJhbnNjcmliZWQgdm9pY2UgY29tbWFuZHMuXG4tfVxua2JkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmtiZCA9XG4gIG5vZGUgXCJrYmRcIlxuXG5cbnstfCBSZXByZXNlbnQgYSBzdWJzY3JpcHQuIC19XG5zdWIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3ViID1cbiAgbm9kZSBcInN1YlwiXG5cblxuey18IFJlcHJlc2VudCBhIHN1cGVyc2NyaXB0LiAtfVxuc3VwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnN1cCA9XG4gIG5vZGUgXCJzdXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIHNvbWUgdGV4dCBpbiBhbiBhbHRlcm5hdGUgdm9pY2Ugb3IgbW9vZCwgb3IgYXQgbGVhc3Qgb2ZcbmRpZmZlcmVudCBxdWFsaXR5LCBzdWNoIGFzIGEgdGF4b25vbWljIGRlc2lnbmF0aW9uLCBhIHRlY2huaWNhbCB0ZXJtLCBhblxuaWRpb21hdGljIHBocmFzZSwgYSB0aG91Z2h0LCBvciBhIHNoaXAgbmFtZS5cbi19XG5pIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmkgPVxuICBub2RlIFwiaVwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0ZXh0IHdoaWNoIHRvIHdoaWNoIGF0dGVudGlvbiBpcyBkcmF3biBmb3IgdXRpbGl0YXJpYW5cbnB1cnBvc2VzLiBJdCBkb2Vzbid0IGNvbnZleSBleHRyYSBpbXBvcnRhbmNlIGFuZCBkb2Vzbid0IGltcGx5IGFuIGFsdGVybmF0ZVxudm9pY2UuXG4tfVxuYiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iID1cbiAgbm9kZSBcImJcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbm9uLXRleHR1YWwgYW5ub3RhdGlvbiBmb3Igd2hpY2ggdGhlIGNvbnZlbnRpb25hbFxucHJlc2VudGF0aW9uIGlzIHVuZGVybGluaW5nLCBzdWNoIGxhYmVsaW5nIHRoZSB0ZXh0IGFzIGJlaW5nIG1pc3NwZWx0IG9yXG5sYWJlbGluZyBhIHByb3BlciBuYW1lIGluIENoaW5lc2UgdGV4dC5cbi19XG51IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnUgPVxuICBub2RlIFwidVwiXG5cblxuey18IFJlcHJlc2VudHMgdGV4dCBoaWdobGlnaHRlZCBmb3IgcmVmZXJlbmNlIHB1cnBvc2VzLCB0aGF0IGlzIGZvciBpdHNcbnJlbGV2YW5jZSBpbiBhbm90aGVyIGNvbnRleHQuXG4tfVxubWFyayA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tYXJrID1cbiAgbm9kZSBcIm1hcmtcIlxuXG5cbnstfCBSZXByZXNlbnRzIGNvbnRlbnQgdG8gYmUgbWFya2VkIHdpdGggcnVieSBhbm5vdGF0aW9ucywgc2hvcnQgcnVucyBvZiB0ZXh0XG5wcmVzZW50ZWQgYWxvbmdzaWRlIHRoZSB0ZXh0LiBUaGlzIGlzIG9mdGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBFYXN0IEFzaWFuXG5sYW5ndWFnZSB3aGVyZSB0aGUgYW5ub3RhdGlvbnMgYWN0IGFzIGEgZ3VpZGUgZm9yIHByb251bmNpYXRpb24sIGxpa2UgdGhlXG5KYXBhbmVzZSBmdXJpZ2FuYS5cbi19XG5ydWJ5IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnJ1YnkgPVxuICBub2RlIFwicnVieVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHRleHQgb2YgYSBydWJ5IGFubm90YXRpb24uIC19XG5ydCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ydCA9XG4gIG5vZGUgXCJydFwiXG5cblxuey18IFJlcHJlc2VudHMgcGFyZW50aGVzaXMgYXJvdW5kIGEgcnVieSBhbm5vdGF0aW9uLCB1c2VkIHRvIGRpc3BsYXkgdGhlXG5hbm5vdGF0aW9uIGluIGFuIGFsdGVybmF0ZSB3YXkgYnkgYnJvd3NlcnMgbm90IHN1cHBvcnRpbmcgdGhlIHN0YW5kYXJkIGRpc3BsYXlcbmZvciBhbm5vdGF0aW9ucy5cbi19XG5ycCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ycCA9XG4gIG5vZGUgXCJycFwiXG5cblxuey18IFJlcHJlc2VudHMgdGV4dCB0aGF0IG11c3QgYmUgaXNvbGF0ZWQgZnJvbSBpdHMgc3Vycm91bmRpbmcgZm9yXG5iaWRpcmVjdGlvbmFsIHRleHQgZm9ybWF0dGluZy4gSXQgYWxsb3dzIGVtYmVkZGluZyBhIHNwYW4gb2YgdGV4dCB3aXRoIGFcbmRpZmZlcmVudCwgb3IgdW5rbm93biwgZGlyZWN0aW9uYWxpdHkuXG4tfVxuYmRpIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJkaSA9XG4gIG5vZGUgXCJiZGlcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBkaXJlY3Rpb25hbGl0eSBvZiBpdHMgY2hpbGRyZW4sIGluIG9yZGVyIHRvIGV4cGxpY2l0bHlcbm92ZXJyaWRlIHRoZSBVbmljb2RlIGJpZGlyZWN0aW9uYWwgYWxnb3JpdGhtLlxuLX1cbmJkbyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iZG8gPVxuICBub2RlIFwiYmRvXCJcblxuXG57LXwgUmVwcmVzZW50cyB0ZXh0IHdpdGggbm8gc3BlY2lmaWMgbWVhbmluZy4gVGhpcyBoYXMgdG8gYmUgdXNlZCB3aGVuIG5vIG90aGVyXG50ZXh0LXNlbWFudGljIGVsZW1lbnQgY29udmV5cyBhbiBhZGVxdWF0ZSBtZWFuaW5nLCB3aGljaCwgaW4gdGhpcyBjYXNlLCBpc1xub2Z0ZW4gYnJvdWdodCBieSBnbG9iYWwgYXR0cmlidXRlcyBsaWtlIGBjbGFzc2AsIGBsYW5nYCwgb3IgYGRpcmAuXG4tfVxuc3BhbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zcGFuID1cbiAgbm9kZSBcInNwYW5cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbGluZSBicmVhay4gLX1cbmJyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJyID1cbiAgbm9kZSBcImJyXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHksIHRoYXQgaXMgYSBzdWdnZXN0ZWQgcG9pbnQgZm9yXG53cmFwcGluZyB0ZXh0IGluIG9yZGVyIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkgb2YgdGV4dCBzcGxpdCBvbiBzZXZlcmFsIGxpbmVzLlxuLX1cbndiciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG53YnIgPVxuICBub2RlIFwid2JyXCJcblxuXG4tLSBFRElUU1xuXG57LXwgRGVmaW5lcyBhbiBhZGRpdGlvbiB0byB0aGUgZG9jdW1lbnQuIC19XG5pbnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaW5zID1cbiAgbm9kZSBcImluc1wiXG5cblxuey18IERlZmluZXMgYSByZW1vdmFsIGZyb20gdGhlIGRvY3VtZW50LiAtfVxuZGVsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRlbCA9XG4gIG5vZGUgXCJkZWxcIlxuXG5cbi0tIEVNQkVEREVEIENPTlRFTlRcblxuey18IFJlcHJlc2VudHMgYW4gaW1hZ2UuIC19XG5pbWcgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaW1nID1cbiAgbm9kZSBcImltZ1wiXG5cblxuey18IEVtYmVkZGVkIGFuIEhUTUwgZG9jdW1lbnQuIC19XG5pZnJhbWUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaWZyYW1lID1cbiAgbm9kZSBcImlmcmFtZVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBpbnRlZ3JhdGlvbiBwb2ludCBmb3IgYW4gZXh0ZXJuYWwsIG9mdGVuIG5vbi1IVE1MLFxuYXBwbGljYXRpb24gb3IgaW50ZXJhY3RpdmUgY29udGVudC5cbi19XG5lbWJlZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5lbWJlZCA9XG4gIG5vZGUgXCJlbWJlZFwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gZXh0ZXJuYWwgcmVzb3VyY2UsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgYW4gaW1hZ2UsIGFuIEhUTUxcbnN1Yi1kb2N1bWVudCwgb3IgYW4gZXh0ZXJuYWwgcmVzb3VyY2UgdG8gYmUgcHJvY2Vzc2VkIGJ5IGEgcGx1Zy1pbi5cbi19XG5vYmplY3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub2JqZWN0ID1cbiAgbm9kZSBcIm9iamVjdFwiXG5cblxuey18IERlZmluZXMgcGFyYW1ldGVycyBmb3IgdXNlIGJ5IHBsdWctaW5zIGludm9rZWQgYnkgYG9iamVjdGAgZWxlbWVudHMuIC19XG5wYXJhbSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wYXJhbSA9XG4gIG5vZGUgXCJwYXJhbVwiXG5cblxuey18IFJlcHJlc2VudHMgYSB2aWRlbywgdGhlIGFzc29jaWF0ZWQgYXVkaW8gYW5kIGNhcHRpb25zLCBhbmQgY29udHJvbHMuIC19XG52aWRlbyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG52aWRlbyA9XG4gIG5vZGUgXCJ2aWRlb1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzb3VuZCBvciBhdWRpbyBzdHJlYW0uIC19XG5hdWRpbyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hdWRpbyA9XG4gIG5vZGUgXCJhdWRpb1wiXG5cblxuey18IEFsbG93cyBhdXRob3JzIHRvIHNwZWNpZnkgYWx0ZXJuYXRpdmUgbWVkaWEgcmVzb3VyY2VzIGZvciBtZWRpYSBlbGVtZW50c1xubGlrZSBgdmlkZW9gIG9yIGBhdWRpb2AuXG4tfVxuc291cmNlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNvdXJjZSA9XG4gIG5vZGUgXCJzb3VyY2VcIlxuXG5cbnstfCBBbGxvd3MgYXV0aG9ycyB0byBzcGVjaWZ5IHRpbWVkIHRleHQgdHJhY2sgZm9yIG1lZGlhIGVsZW1lbnRzIGxpa2UgYHZpZGVvYFxub3IgYGF1ZGlvYC5cbi19XG50cmFjayA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50cmFjayA9XG4gIG5vZGUgXCJ0cmFja1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBiaXRtYXAgYXJlYSBmb3IgZ3JhcGhpY3MgcmVuZGVyaW5nLiAtfVxuY2FudmFzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNhbnZhcyA9XG4gIG5vZGUgXCJjYW52YXNcIlxuXG5cbnstfCBEZWZpbmVzIGEgbWF0aGVtYXRpY2FsIGZvcm11bGEuIC19XG5tYXRoIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1hdGggPVxuICBub2RlIFwibWF0aFwiXG5cblxuLS0gVEFCVUxBUiBEQVRBXG5cbnstfCBSZXByZXNlbnRzIGRhdGEgd2l0aCBtb3JlIHRoYW4gb25lIGRpbWVuc2lvbi4gLX1cbnRhYmxlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRhYmxlID1cbiAgbm9kZSBcInRhYmxlXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgdGl0bGUgb2YgYSB0YWJsZS4gLX1cbmNhcHRpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY2FwdGlvbiA9XG4gIG5vZGUgXCJjYXB0aW9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBvbmUgb3IgbW9yZSBjb2x1bW5zIG9mIGEgdGFibGUuIC19XG5jb2xncm91cCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jb2xncm91cCA9XG4gIG5vZGUgXCJjb2xncm91cFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBjb2x1bW4gb2YgYSB0YWJsZS4gLX1cbmNvbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jb2wgPVxuICBub2RlIFwiY29sXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgYmxvY2sgb2Ygcm93cyB0aGF0IGRlc2NyaWJlcyB0aGUgY29uY3JldGUgZGF0YSBvZiBhIHRhYmxlLlxuLX1cbnRib2R5IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRib2R5ID1cbiAgbm9kZSBcInRib2R5XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgYmxvY2sgb2Ygcm93cyB0aGF0IGRlc2NyaWJlcyB0aGUgY29sdW1uIGxhYmVscyBvZiBhIHRhYmxlLlxuLX1cbnRoZWFkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRoZWFkID1cbiAgbm9kZSBcInRoZWFkXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgYmxvY2sgb2Ygcm93cyB0aGF0IGRlc2NyaWJlcyB0aGUgY29sdW1uIHN1bW1hcmllcyBvZiBhIHRhYmxlLlxuLX1cbnRmb290IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRmb290ID1cbiAgbm9kZSBcInRmb290XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHJvdyBvZiBjZWxscyBpbiBhIHRhYmxlLiAtfVxudHIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudHIgPVxuICBub2RlIFwidHJcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgZGF0YSBjZWxsIGluIGEgdGFibGUuIC19XG50ZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50ZCA9XG4gIG5vZGUgXCJ0ZFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBoZWFkZXIgY2VsbCBpbiBhIHRhYmxlLiAtfVxudGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGggPVxuICBub2RlIFwidGhcIlxuXG5cbi0tIEZPUk1TXG5cbnstfCBSZXByZXNlbnRzIGEgZm9ybSwgY29uc2lzdGluZyBvZiBjb250cm9scywgdGhhdCBjYW4gYmUgc3VibWl0dGVkIHRvIGFcbnNlcnZlciBmb3IgcHJvY2Vzc2luZy5cbi19XG5mb3JtIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZvcm0gPVxuICBub2RlIFwiZm9ybVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2YgY29udHJvbHMuIC19XG5maWVsZHNldCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5maWVsZHNldCA9XG4gIG5vZGUgXCJmaWVsZHNldFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGNhcHRpb24gZm9yIGEgYGZpZWxkc2V0YC4gLX1cbmxlZ2VuZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5sZWdlbmQgPVxuICBub2RlIFwibGVnZW5kXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgY2FwdGlvbiBvZiBhIGZvcm0gY29udHJvbC4gLX1cbmxhYmVsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmxhYmVsID1cbiAgbm9kZSBcImxhYmVsXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHR5cGVkIGRhdGEgZmllbGQgYWxsb3dpbmcgdGhlIHVzZXIgdG8gZWRpdCB0aGUgZGF0YS4gLX1cbmlucHV0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmlucHV0ID1cbiAgbm9kZSBcImlucHV0XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGJ1dHRvbi4gLX1cbmJ1dHRvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5idXR0b24gPVxuICBub2RlIFwiYnV0dG9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbnRyb2wgYWxsb3dpbmcgc2VsZWN0aW9uIGFtb25nIGEgc2V0IG9mIG9wdGlvbnMuIC19XG5zZWxlY3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc2VsZWN0ID1cbiAgbm9kZSBcInNlbGVjdFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2YgcHJlZGVmaW5lZCBvcHRpb25zIGZvciBvdGhlciBjb250cm9scy4gLX1cbmRhdGFsaXN0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRhdGFsaXN0ID1cbiAgbm9kZSBcImRhdGFsaXN0XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBvcHRpb25zLCBsb2dpY2FsbHkgZ3JvdXBlZC4gLX1cbm9wdGdyb3VwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9wdGdyb3VwID1cbiAgbm9kZSBcIm9wdGdyb3VwXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBvcHRpb24gaW4gYSBgc2VsZWN0YCBlbGVtZW50IG9yIGEgc3VnZ2VzdGlvbiBvZiBhIGBkYXRhbGlzdGBcbmVsZW1lbnQuXG4tfVxub3B0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9wdGlvbiA9XG4gIG5vZGUgXCJvcHRpb25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbXVsdGlsaW5lIHRleHQgZWRpdCBjb250cm9sLiAtfVxudGV4dGFyZWEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGV4dGFyZWEgPVxuICBub2RlIFwidGV4dGFyZWFcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgYSBjYWxjdWxhdGlvbi4gLX1cbm91dHB1dCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vdXRwdXQgPVxuICBub2RlIFwib3V0cHV0XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgY29tcGxldGlvbiBwcm9ncmVzcyBvZiBhIHRhc2suIC19XG5wcm9ncmVzcyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wcm9ncmVzcyA9XG4gIG5vZGUgXCJwcm9ncmVzc1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzY2FsYXIgbWVhc3VyZW1lbnQgKG9yIGEgZnJhY3Rpb25hbCB2YWx1ZSksIHdpdGhpbiBhIGtub3duXG5yYW5nZS5cbi19XG5tZXRlciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tZXRlciA9XG4gIG5vZGUgXCJtZXRlclwiXG5cblxuLS0gSU5URVJBQ1RJVkUgRUxFTUVOVFNcblxuey18IFJlcHJlc2VudHMgYSB3aWRnZXQgZnJvbSB3aGljaCB0aGUgdXNlciBjYW4gb2J0YWluIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbm9yIGNvbnRyb2xzLlxuLX1cbmRldGFpbHMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGV0YWlscyA9XG4gIG5vZGUgXCJkZXRhaWxzXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHN1bW1hcnksIGNhcHRpb24sIG9yIGxlZ2VuZCBmb3IgYSBnaXZlbiBgZGV0YWlsc2AuIC19XG5zdW1tYXJ5IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnN1bW1hcnkgPVxuICBub2RlIFwic3VtbWFyeVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBjb21tYW5kIHRoYXQgdGhlIHVzZXIgY2FuIGludm9rZS4gLX1cbm1lbnVpdGVtIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1lbnVpdGVtID1cbiAgbm9kZSBcIm1lbnVpdGVtXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGxpc3Qgb2YgY29tbWFuZHMuIC19XG5tZW51IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1lbnUgPVxuICBub2RlIFwibWVudVwiXG5cbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLkF0dHJpYnV0ZXMgZXhwb3NpbmdcbiAgKCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgbWFwXG4gICwgY2xhc3MsIGNsYXNzTGlzdCwgaWQsIHRpdGxlLCBoaWRkZW5cbiAgLCB0eXBlXywgdmFsdWUsIGNoZWNrZWQsIHBsYWNlaG9sZGVyLCBzZWxlY3RlZFxuICAsIGFjY2VwdCwgYWNjZXB0Q2hhcnNldCwgYWN0aW9uLCBhdXRvY29tcGxldGUsIGF1dG9mb2N1c1xuICAsIGRpc2FibGVkLCBlbmN0eXBlLCBsaXN0LCBtYXhsZW5ndGgsIG1pbmxlbmd0aCwgbWV0aG9kLCBtdWx0aXBsZVxuICAsIG5hbWUsIG5vdmFsaWRhdGUsIHBhdHRlcm4sIHJlYWRvbmx5LCByZXF1aXJlZCwgc2l6ZSwgZm9yLCBmb3JtXG4gICwgbWF4LCBtaW4sIHN0ZXBcbiAgLCBjb2xzLCByb3dzLCB3cmFwXG4gICwgaHJlZiwgdGFyZ2V0LCBkb3dubG9hZCwgaHJlZmxhbmcsIG1lZGlhLCBwaW5nLCByZWxcbiAgLCBpc21hcCwgdXNlbWFwLCBzaGFwZSwgY29vcmRzXG4gICwgc3JjLCBoZWlnaHQsIHdpZHRoLCBhbHRcbiAgLCBhdXRvcGxheSwgY29udHJvbHMsIGxvb3AsIHByZWxvYWQsIHBvc3RlciwgZGVmYXVsdCwga2luZCwgc3JjbGFuZ1xuICAsIHNhbmRib3gsIHNyY2RvY1xuICAsIHJldmVyc2VkLCBzdGFydFxuICAsIGFsaWduLCBjb2xzcGFuLCByb3dzcGFuLCBoZWFkZXJzLCBzY29wZVxuICAsIGFjY2Vzc2tleSwgY29udGVudGVkaXRhYmxlLCBjb250ZXh0bWVudSwgZGlyLCBkcmFnZ2FibGUsIGRyb3B6b25lXG4gICwgaXRlbXByb3AsIGxhbmcsIHNwZWxsY2hlY2ssIHRhYmluZGV4XG4gICwgY2l0ZSwgZGF0ZXRpbWUsIHB1YmRhdGUsIG1hbmlmZXN0XG4gIClcblxuey18IEhlbHBlciBmdW5jdGlvbnMgZm9yIEhUTUwgYXR0cmlidXRlcy4gVGhleSBhcmUgb3JnYW5pemVkIHJvdWdobHkgYnlcbmNhdGVnb3J5LiBFYWNoIGF0dHJpYnV0ZSBpcyBsYWJlbGVkIHdpdGggdGhlIEhUTUwgdGFncyBpdCBjYW4gYmUgdXNlZCB3aXRoLCBzb1xuanVzdCBzZWFyY2ggdGhlIHBhZ2UgZm9yIGB2aWRlb2AgaWYgeW91IHdhbnQgdmlkZW8gc3R1ZmYuXG5cbiMjIFByaW1pdGl2ZXNcbkBkb2NzIHN0eWxlLCBwcm9wZXJ0eSwgYXR0cmlidXRlLCBtYXBcblxuIyMgU3VwZXIgQ29tbW9uIEF0dHJpYnV0ZXNcbkBkb2NzIGNsYXNzLCBjbGFzc0xpc3QsIGlkLCB0aXRsZSwgaGlkZGVuXG5cbiMjIElucHV0c1xuQGRvY3MgdHlwZV8sIHZhbHVlLCBjaGVja2VkLCBwbGFjZWhvbGRlciwgc2VsZWN0ZWRcblxuIyMgSW5wdXQgSGVscGVyc1xuQGRvY3MgYWNjZXB0LCBhY2NlcHRDaGFyc2V0LCBhY3Rpb24sIGF1dG9jb21wbGV0ZSwgYXV0b2ZvY3VzLCBkaXNhYmxlZCwgZW5jdHlwZSwgbGlzdCwgbWF4bGVuZ3RoLCBtaW5sZW5ndGgsIG1ldGhvZCwgbXVsdGlwbGUsIG5hbWUsIG5vdmFsaWRhdGUsIHBhdHRlcm4sIHJlYWRvbmx5LCByZXF1aXJlZCwgc2l6ZSwgZm9yLCBmb3JtXG5cbiMjIElucHV0IFJhbmdlc1xuQGRvY3MgbWF4LCBtaW4sIHN0ZXBcblxuIyMgSW5wdXQgVGV4dCBBcmVhc1xuQGRvY3MgY29scywgcm93cywgd3JhcFxuXG4jIyBMaW5rcyBhbmQgQXJlYXNcbkBkb2NzIGhyZWYsIHRhcmdldCwgZG93bmxvYWQsIGhyZWZsYW5nLCBtZWRpYSwgcGluZywgcmVsXG5cbiMjIE1hcHNcbkBkb2NzIGlzbWFwLCB1c2VtYXAsIHNoYXBlLCBjb29yZHNcblxuXG4jIyBFbWJlZGRlZCBDb250ZW50XG5AZG9jcyBzcmMsIGhlaWdodCwgd2lkdGgsIGFsdFxuXG4jIyBBdWRpbyBhbmQgVmlkZW9cbkBkb2NzIGF1dG9wbGF5LCBjb250cm9scywgbG9vcCwgcHJlbG9hZCwgcG9zdGVyLCBkZWZhdWx0LCBraW5kLCBzcmNsYW5nXG5cbiMjIGlmcmFtZXNcbkBkb2NzIHNhbmRib3gsIHNyY2RvY1xuXG4jIyBPcmRlcmVkIExpc3RzXG5AZG9jcyByZXZlcnNlZCwgc3RhcnRcblxuIyMgVGFibGVzXG5AZG9jcyBhbGlnbiwgY29sc3Bhbiwgcm93c3BhbiwgaGVhZGVycywgc2NvcGVcblxuIyMgTGVzcyBDb21tb24gR2xvYmFsIEF0dHJpYnV0ZXNcblxuQXR0cmlidXRlcyB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byBhbnkgSFRNTCB0YWcgYnV0IGFyZSBsZXNzIGNvbW1vbmx5IHVzZWQuXG5cbkBkb2NzIGFjY2Vzc2tleSwgY29udGVudGVkaXRhYmxlLCBjb250ZXh0bWVudSwgZGlyLCBkcmFnZ2FibGUsIGRyb3B6b25lLFxuICAgICAgaXRlbXByb3AsIGxhbmcsIHNwZWxsY2hlY2ssIHRhYmluZGV4XG5cbiMjIE1pc2NlbGxhbmVvdXNcbkBkb2NzIGNpdGUsIGRhdGV0aW1lLCBwdWJkYXRlLCBtYW5pZmVzdFxuXG4tfVxuXG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUpXG5pbXBvcnQgSnNvbi5FbmNvZGUgYXMgSnNvblxuaW1wb3J0IFZpcnR1YWxEb21cblxuXG4tLSBUaGlzIGxpYnJhcnkgZG9lcyBub3QgaW5jbHVkZSBsb3csIGhpZ2gsIG9yIG9wdGltdW0gYmVjYXVzZSB0aGUgaWRlYSBvZiBhXG4tLSBgbWV0ZXJgIGlzIGp1c3QgdG9vIGNyYXp5LlxuXG5cblxuLS0gUFJJTUlUSVZFU1xuXG5cbnstfCBTcGVjaWZ5IGEgc3R5bGUuXG5cbiAgICBncmVldGluZyA6IE5vZGUgbXNnXG4gICAgZ3JlZXRpbmcgPVxuICAgICAgZGl2XG4gICAgICAgIFsgc3R5bGUgXCJiYWNrZ3JvdW5kLWNvbG9yXCIgXCJyZWRcIlxuICAgICAgICAsIHN0eWxlIFwiaGVpZ2h0XCIgXCI5MHB4XCJcbiAgICAgICAgLCBzdHlsZSBcIndpZHRoXCIgXCIxMDAlXCJcbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgXCJIZWxsbyFcIlxuICAgICAgICBdXG5cblRoZXJlIGlzIG5vIGBIdG1sLlN0eWxlc2AgbW9kdWxlIGJlY2F1c2UgYmVzdCBwcmFjdGljZXMgZm9yIHdvcmtpbmcgd2l0aCBIVE1MXG5zdWdnZXN0IHRoYXQgdGhpcyBzaG91bGQgcHJpbWFyaWx5IGJlIHNwZWNpZmllZCBpbiBDU1MgZmlsZXMuIFNvIHRoZSBnZW5lcmFsXG5yZWNvbW1lbmRhdGlvbiBpcyB0byB1c2UgdGhpcyBmdW5jdGlvbiBsaWdodGx5LlxuLX1cbnN0eWxlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zdHlsZSA9XG4gIFZpcnR1YWxEb20uc3R5bGVcblxuXG57LXwgVGhpcyBmdW5jdGlvbiBtYWtlcyBpdCBlYXNpZXIgdG8gYnVpbGQgYSBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgYXR0cmlidXRlLlxuRWFjaCBjbGFzcyBjYW4gZWFzaWx5IGJlIGFkZGVkIGFuZCByZW1vdmVkIGRlcGVuZGluZyBvbiB0aGUgYm9vbGVhbiB2YWx1ZSBpdFxuaXMgcGFpcmVkIHdpdGguIEZvciBleGFtcGxlLCBtYXliZSB3ZSB3YW50IGEgd2F5IHRvIHZpZXcgbm90aWNlczpcblxuICAgIHZpZXdOb3RpY2UgOiBOb3RpY2UgLT4gSHRtbCBtc2dcbiAgICB2aWV3Tm90aWNlIG5vdGljZSA9XG4gICAgICBkaXZcbiAgICAgICAgWyBjbGFzc0xpc3RcbiAgICAgICAgICAgIFsgeyBjbGFzcyA9IFwibm90aWNlXCIsIGVuYWJsZWQgPSBUcnVlIH1cbiAgICAgICAgICAgICwgeyBjbGFzcyA9IFwibm90aWNlLWltcG9ydGFudFwiLCBlbmFibGVkID0gbm90aWNlLmlzSW1wb3J0YW50IH1cbiAgICAgICAgICAgICwgeyBjbGFzcyA9IFwibm90aWNlLXNlZW5cIiwgZW5hYmxlZCA9IG5vdGljZS5pc1NlZW4gfVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICAgIFsgdGV4dCBub3RpY2UuY29udGVudCBdXG5cbioqTm90ZToqKiBZb3UgY2FuIGhhdmUgYXMgbWFueSBgY2xhc3NgIGFuZCBgY2xhc3NMaXN0YCBhdHRyaWJ1dGVzIGFzIHlvdSB3YW50LlxuVGhleSBhbGwgZ2V0IGFwcGxpZWQsIHNvIGlmIHlvdSBzYXkgYFsgY2xhc3MgXCJub3RpY2VcIiwgY2xhc3MgXCJub3RpY2Utc2VlblwiIF1gXG55b3Ugd2lsbCBnZXQgYm90aCBjbGFzc2VzIVxuLX1cbmNsYXNzTGlzdCA6IEFycmF5IHsgY2xhc3MgOiBTdHJpbmcsIGVuYWJsZWQgOiBCb29sIH0gLT4gQXR0cmlidXRlIG1zZ1xuY2xhc3NMaXN0IGNsYXNzZXMgPVxuICBjbGFzc2VzXG4gICAgfD4gQXJyYXkua2VlcElmIC5lbmFibGVkXG4gICAgfD4gQXJyYXkubWFwIC5jbGFzc1xuICAgIHw+IFN0cmluZy5qb2luIFwiIFwiXG4gICAgfD4gY2xhc3NcblxuXG5cbi0tIENVU1RPTSBBVFRSSUJVVEVTXG5cblxuey18IENyZWF0ZSAqcHJvcGVydGllcyosIGxpa2Ugc2F5aW5nIGBkb21Ob2RlLmNsYXNzTmFtZSA9ICdncmVldGluZydgIGluXG5KYXZhU2NyaXB0LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgY2xhc3MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuICAgIGNsYXNzIG5hbWUgPVxuICAgICAgcHJvcGVydHkgXCJjbGFzc05hbWVcIiAoRW5jb2RlLnN0cmluZyBuYW1lKVxuXG5SZWFkIG1vcmUgYWJvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIFtoZXJlXVtdLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vaHRtbC9ibG9iL21hc3Rlci9wcm9wZXJ0aWVzLXZzLWF0dHJpYnV0ZXMubWRcbi19XG5wcm9wZXJ0eSA6IFN0cmluZyAtPiBKc29uLlZhbHVlIC0+IEF0dHJpYnV0ZSBtc2dcbnByb3BlcnR5ID1cbiAgVmlydHVhbERvbS5wcm9wZXJ0eVxuXG5cbnN0cmluZ1Byb3BlcnR5IDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zdHJpbmdQcm9wZXJ0eSBrZXkgc3RyaW5nID1cbiAgcHJvcGVydHkga2V5IChKc29uLnN0cmluZyBzdHJpbmcpXG5cblxuYm9vbFByb3BlcnR5IDogU3RyaW5nIC0+IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYm9vbFByb3BlcnR5IGtleSBib29sID1cbiAgcHJvcGVydHkga2V5IChKc29uLmJvb2wgYm9vbClcblxuXG57LXwgQ3JlYXRlICphdHRyaWJ1dGVzKiwgbGlrZSBzYXlpbmcgYGRvbU5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmVldGluZycpYFxuaW4gSmF2YVNjcmlwdC5cblxuICAgIGNsYXNzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBjbGFzcyBuYW1lID1cbiAgICAgIGF0dHJpYnV0ZSBcImNsYXNzXCIgbmFtZVxuXG5SZWFkIG1vcmUgYWJvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIFtoZXJlXVtdLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vaHRtbC9ibG9iL21hc3Rlci9wcm9wZXJ0aWVzLXZzLWF0dHJpYnV0ZXMubWRcbi19XG5hdHRyaWJ1dGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmF0dHJpYnV0ZSA9XG4gIFZpcnR1YWxEb20uYXR0cmlidXRlXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYW4gYEF0dHJpYnV0ZWAuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgYSAtPiBBdHRyaWJ1dGUgbXNnXG5tYXAgPVxuICBWaXJ0dWFsRG9tLm1hcEF0dHJpYnV0ZVxuXG5cblxuLS0gR0xPQkFMIEFUVFJJQlVURVNcblxuXG57LXwgT2Z0ZW4gdXNlZCB3aXRoIENTUyB0byBzdHlsZSBlbGVtZW50cyB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzLlxuXG4qKk5vdGU6KiogWW91IGNhbiBoYXZlIGFzIG1hbnkgYGNsYXNzYCBhbmQgYGNsYXNzTGlzdGAgYXR0cmlidXRlcyBhcyB5b3Ugd2FudC5cblRoZXkgYWxsIGdldCBhcHBsaWVkLCBzbyBpZiB5b3Ugc2F5IGBbIGNsYXNzIFwibm90aWNlXCIsIGNsYXNzIFwibm90aWNlLXNlZW5cIiBdYFxueW91IHdpbGwgZ2V0IGJvdGggY2xhc3NlcyFcbi19XG5jbGFzcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jbGFzcyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY2xhc3NOYW1lXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSByZWxldmFuY2Ugb2YgYW4gZWxlbWVudC4gLX1cbmhpZGRlbiA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuaGlkZGVuID1cbiAgYm9vbFByb3BlcnR5IFwiaGlkZGVuXCJcblxuXG57LXwgT2Z0ZW4gdXNlZCB3aXRoIENTUyB0byBzdHlsZSBhIHNwZWNpZmljIGVsZW1lbnQuIFRoZSB2YWx1ZSBvZiB0aGlzXG5hdHRyaWJ1dGUgbXVzdCBiZSB1bmlxdWUuXG4tfVxuaWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaWQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImlkXCJcblxuXG57LXwgVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gYSB0b29sdGlwIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgZWxlbWVudC4gLX1cbnRpdGxlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnRpdGxlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ0aXRsZVwiXG5cblxuXG4tLSBMRVNTIENPTU1PTiBHTE9CQUwgQVRUUklCVVRFU1xuXG5cbnstfCBEZWZpbmVzIGEga2V5Ym9hcmQgc2hvcnRjdXQgdG8gYWN0aXZhdGUgb3IgYWRkIGZvY3VzIHRvIHRoZSBlbGVtZW50LiAtfVxuYWNjZXNza2V5IDogQ2hhciAtPiBBdHRyaWJ1dGUgbXNnXG5hY2Nlc3NrZXkgY2hhciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWNjZXNzS2V5XCIgKFN0cmluZy5mcm9tQ2hhciBjaGFyKVxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCdzIGNvbnRlbnQgaXMgZWRpdGFibGUuIC19XG5jb250ZW50ZWRpdGFibGUgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRlbnRlZGl0YWJsZSA9XG4gIGJvb2xQcm9wZXJ0eSBcImNvbnRlbnRFZGl0YWJsZVwiXG5cblxuey18IERlZmluZXMgdGhlIElEIG9mIGEgYG1lbnVgIGVsZW1lbnQgd2hpY2ggd2lsbCBzZXJ2ZSBhcyB0aGUgZWxlbWVudCdzXG5jb250ZXh0IG1lbnUuXG4tfVxuY29udGV4dG1lbnUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY29udGV4dG1lbnUgPVxuICBhdHRyaWJ1dGUgXCJjb250ZXh0bWVudVwiXG5cblxuey18IERlZmluZXMgdGhlIHRleHQgZGlyZWN0aW9uLiBBbGxvd2VkIHZhbHVlcyBhcmUgbHRyIChMZWZ0LVRvLVJpZ2h0KSBvciBydGxcbihSaWdodC1Uby1MZWZ0KS5cbi19XG5kaXIgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGlyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkaXJcIlxuXG5cbnstfCBEZWZpbmVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgY2FuIGJlIGRyYWdnZWQuIC19XG5kcmFnZ2FibGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZHJhZ2dhYmxlID1cbiAgYXR0cmlidXRlIFwiZHJhZ2dhYmxlXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgYWNjZXB0IHRoZSBkcm9wcGluZyBvZiBjb250ZW50IG9uIGl0LiAtfVxuZHJvcHpvbmUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZHJvcHpvbmUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRyb3B6b25lXCJcblxuXG57LXwtfVxuaXRlbXByb3AgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaXRlbXByb3AgPVxuICBhdHRyaWJ1dGUgXCJpdGVtcHJvcFwiXG5cblxuey18IERlZmluZXMgdGhlIGxhbmd1YWdlIHVzZWQgaW4gdGhlIGVsZW1lbnQuIC19XG5sYW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImxhbmdcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBzcGVsbCBjaGVja2luZyBpcyBhbGxvd2VkIGZvciB0aGUgZWxlbWVudC4gLX1cbnNwZWxsY2hlY2sgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnNwZWxsY2hlY2sgPVxuICBib29sUHJvcGVydHkgXCJzcGVsbGNoZWNrXCJcblxuXG57LXwgT3ZlcnJpZGVzIHRoZSBicm93c2VyJ3MgZGVmYXVsdCB0YWIgb3JkZXIgYW5kIGZvbGxvd3MgdGhlIG9uZSBzcGVjaWZpZWRcbmluc3RlYWQuXG4tfVxudGFiaW5kZXggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xudGFiaW5kZXggbiA9XG4gIGF0dHJpYnV0ZSBcInRhYkluZGV4XCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuXG4tLSBFTUJFRERFRCBDT05URU5UXG5cblxuey18IFRoZSBVUkwgb2YgdGhlIGVtYmVkZGFibGUgY29udGVudC4gRm9yIGBhdWRpb2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCxcbmBpbnB1dGAsIGBzY3JpcHRgLCBgc291cmNlYCwgYHRyYWNrYCwgYW5kIGB2aWRlb2AuXG4tfVxuc3JjIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNyYyB1cmwgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNyY1wiIHVybFxuXG5cbnstfCBEZWNsYXJlIHRoZSBoZWlnaHQgb2YgYSBgY2FudmFzYCwgYGVtYmVkYCwgYGlmcmFtZWAsIGBpbWdgLCBgaW5wdXRgLFxuYG9iamVjdGAsIG9yIGB2aWRlb2AuXG4tfVxuaGVpZ2h0IDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbmhlaWdodCBuID1cbiAgYXR0cmlidXRlIFwiaGVpZ2h0XCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IERlY2xhcmUgdGhlIHdpZHRoIG9mIGEgYGNhbnZhc2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCwgYGlucHV0YCxcbmBvYmplY3RgLCBvciBgdmlkZW9gLlxuLX1cbndpZHRoIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbndpZHRoIG4gPVxuICBhdHRyaWJ1dGUgXCJ3aWR0aFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBBbHRlcm5hdGl2ZSB0ZXh0IGluIGNhc2UgYW4gaW1hZ2UgY2FuJ3QgYmUgZGlzcGxheWVkLiBXb3JrcyB3aXRoIGBpbWdgLFxuYGFyZWFgLCBhbmQgYGlucHV0YC5cbi19XG5hbHQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWx0ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhbHRcIlxuXG5cblxuLS0gQVVESU8gYW5kIFZJREVPXG5cblxuey18IFRoZSBgYXVkaW9gIG9yIGB2aWRlb2Agc2hvdWxkIHBsYXkgYXMgc29vbiBhcyBwb3NzaWJsZS4gLX1cbmF1dG9wbGF5IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5hdXRvcGxheSA9XG4gIGJvb2xQcm9wZXJ0eSBcImF1dG9wbGF5XCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJyb3dzZXIgc2hvdWxkIHNob3cgcGxheWJhY2sgY29udHJvbHMgZm9yIHRoZSBgYXVkaW9gXG5vciBgdmlkZW9gLlxuLX1cbmNvbnRyb2xzIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5jb250cm9scyA9XG4gIGJvb2xQcm9wZXJ0eSBcImNvbnRyb2xzXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGBhdWRpb2Agb3IgYHZpZGVvYCBzaG91bGQgc3RhcnQgcGxheWluZyBmcm9tIHRoZVxuc3RhcnQgd2hlbiBpdCdzIGZpbmlzaGVkLlxuLX1cbmxvb3AgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmxvb3AgPVxuICBib29sUHJvcGVydHkgXCJsb29wXCJcblxuXG57LXwgQ29udHJvbCBob3cgbXVjaCBvZiBhbiBgYXVkaW9gIG9yIGB2aWRlb2AgcmVzb3VyY2Ugc2hvdWxkIGJlIHByZWxvYWRlZC4gLX1cbnByZWxvYWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucHJlbG9hZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwicHJlbG9hZFwiXG5cblxuey18IEEgVVJMIGluZGljYXRpbmcgYSBwb3N0ZXIgZnJhbWUgdG8gc2hvdyB1bnRpbCB0aGUgdXNlciBwbGF5cyBvciBzZWVrcyB0aGVcbmB2aWRlb2AuXG4tfVxucG9zdGVyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBvc3RlciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwicG9zdGVyXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGB0cmFja2Agc2hvdWxkIGJlIGVuYWJsZWQgdW5sZXNzIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZXNcbmluZGljYXRlIHNvbWV0aGluZyBkaWZmZXJlbnQuXG4tfVxuZGVmYXVsdCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGVmYXVsdCA9XG4gIGJvb2xQcm9wZXJ0eSBcImRlZmF1bHRcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIGtpbmQgb2YgdGV4dCBgdHJhY2tgLiAtfVxua2luZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5raW5kID1cbiAgc3RyaW5nUHJvcGVydHkgXCJraW5kXCJcblxuXG57LS0gVE9ETzogbWF5YmUgcmVpbnRyb2R1Y2Ugb25jZSB0aGVyZSdzIGEgYmV0dGVyIHdheSB0byBkaXNhbWJpZ3VhdGUgaW1wb3J0c1xuey18IFNwZWNpZmllcyBhIHVzZXItcmVhZGFibGUgdGl0bGUgb2YgdGhlIHRleHQgYHRyYWNrYC4gLX1cbmxhYmVsIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhYmVsID1cbiAgc3RyaW5nUHJvcGVydHkgXCJsYWJlbFwiXG4tLX1cblxuey18IEEgdHdvIGxldHRlciBsYW5ndWFnZSBjb2RlIGluZGljYXRpbmcgdGhlIGxhbmd1YWdlIG9mIHRoZSBgdHJhY2tgIHRleHQgZGF0YS5cbi19XG5zcmNsYW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNyY2xhbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNyY2xhbmdcIlxuXG5cblxuLS0gSUZSQU1FU1xuXG5cbnstfCBBIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIHNlY3VyaXR5IHJlc3RyaWN0aW9ucyB5b3UnZCBsaWtlIHRvIGxpZnQgZm9yIGFuXG5gaWZyYW1lYC5cbi19XG5zYW5kYm94IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNhbmRib3ggPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNhbmRib3hcIlxuXG5cbnstfCBBbiBIVE1MIGRvY3VtZW50IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgYXMgdGhlIGJvZHkgb2YgYW4gYGlmcmFtZWAuIEl0IHdpbGxcbm92ZXJyaWRlIHRoZSBjb250ZW50IG9mIHRoZSBgc3JjYCBhdHRyaWJ1dGUgaWYgaXQgaGFzIGJlZW4gc3BlY2lmaWVkLlxuLX1cbnNyY2RvYyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmNkb2MgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInNyY2RvY1wiXG5cblxuXG4tLSBJTlBVVFxuXG5cbnstfCBEZWZpbmVzIHRoZSB0eXBlIG9mIGEgYGJ1dHRvbmAsIGBjaGVja2JveGAsIGBpbnB1dGAsIGBlbWJlZGAsIGBtZW51YCxcbmBvYmplY3RgLCBgc2NyaXB0YCwgYHNvdXJjZWAsIG9yIGBzdHlsZWAuXG4tfVxudHlwZV8gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xudHlwZV8gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInR5cGVcIlxuXG5cbnstfCBUaGUgdmFsdWUgd2hpY2ggd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYSBgYnV0dG9uYCwgYG9wdGlvbmAsXG5gaW5wdXRgLCBgbGlgLCBgbWV0ZXJgLCBgcHJvZ3Jlc3NgLCBvciBgcGFyYW1gLlxuLX1cbnZhbHVlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnZhbHVlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ2YWx1ZVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGFuIGBpbnB1dGAgb2YgdHlwZSBjaGVja2JveCBpcyBjaGVja2VkLiAtfVxuY2hlY2tlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuY2hlY2tlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcImNoZWNrZWRcIlxuXG5cbnstfCBQcm92aWRlcyBhIGhpbnQgdG8gdGhlIHVzZXIgb2Ygd2hhdCBjYW4gYmUgZW50ZXJlZCBpbnRvIGFuIGBpbnB1dGAgb3JcbmB0ZXh0YXJlYWAuXG4tfVxucGxhY2Vob2xkZXIgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucGxhY2Vob2xkZXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBsYWNlaG9sZGVyXCJcblxuXG57LXwgRGVmaW5lcyB3aGljaCBgb3B0aW9uYCB3aWxsIGJlIHNlbGVjdGVkIG9uIHBhZ2UgbG9hZC4gLX1cbnNlbGVjdGVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5zZWxlY3RlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcInNlbGVjdGVkXCJcblxuXG5cbi0tIElOUFVUIEhFTFBFUlNcblxuXG57LXwgTGlzdCBvZiB0eXBlcyB0aGUgc2VydmVyIGFjY2VwdHMsIHR5cGljYWxseSBhIGZpbGUgdHlwZS5cbkZvciBgZm9ybWAgYW5kIGBpbnB1dGAuXG4tfVxuYWNjZXB0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFjY2VwdCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWNjZXB0XCJcblxuXG57LXwgTGlzdCBvZiBzdXBwb3J0ZWQgY2hhcnNldHMgaW4gYSBgZm9ybWAuXG4tfVxuYWNjZXB0Q2hhcnNldCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY2NlcHRDaGFyc2V0ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY2NlcHRDaGFyc2V0XCJcblxuXG57LXwgVGhlIFVSSSBvZiBhIHByb2dyYW0gdGhhdCBwcm9jZXNzZXMgdGhlIGluZm9ybWF0aW9uIHN1Ym1pdHRlZCB2aWEgYSBgZm9ybWAuXG4tfVxuYWN0aW9uIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFjdGlvbiB1cmkgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjdGlvblwiIHVyaVxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhIGBmb3JtYCBvciBhbiBgaW5wdXRgIGNhbiBoYXZlIHRoZWlyIHZhbHVlcyBhdXRvbWF0aWNhbGx5XG5jb21wbGV0ZWQgYnkgdGhlIGJyb3dzZXIuXG4tfVxuYXV0b2NvbXBsZXRlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5hdXRvY29tcGxldGUgYm9vbCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYXV0b2NvbXBsZXRlXCIgKGlmIGJvb2wgdGhlbiBcIm9uXCIgZWxzZSBcIm9mZlwiKVxuXG5cbnstfCBUaGUgZWxlbWVudCBzaG91bGQgYmUgYXV0b21hdGljYWxseSBmb2N1c2VkIGFmdGVyIHRoZSBwYWdlIGxvYWRlZC5cbkZvciBgYnV0dG9uYCwgYGlucHV0YCwgYHNlbGVjdGAsIGFuZCBgdGV4dGFyZWFgLlxuLX1cbmF1dG9mb2N1cyA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b2ZvY3VzID1cbiAgYm9vbFByb3BlcnR5IFwiYXV0b2ZvY3VzXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIGludGVyYWN0IHdpdGggYSBgYnV0dG9uYCwgYGZpZWxkc2V0YCxcbmBpbnB1dGAsIGBvcHRncm91cGAsIGBvcHRpb25gLCBgc2VsZWN0YCBvciBgdGV4dGFyZWFgLlxuLX1cbmRpc2FibGVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5kaXNhYmxlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcImRpc2FibGVkXCJcblxuXG57LXwgSG93IGBmb3JtYCBkYXRhIHNob3VsZCBiZSBlbmNvZGVkIHdoZW4gc3VibWl0dGVkIHdpdGggdGhlIFBPU1QgbWV0aG9kLlxuT3B0aW9ucyBpbmNsdWRlOiBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQsIG11bHRpcGFydC9mb3JtLWRhdGEsIGFuZFxudGV4dC9wbGFpbi5cbi19XG5lbmN0eXBlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmVuY3R5cGUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImVuY3R5cGVcIlxuXG5cbnstfCBBc3NvY2lhdGVzIGFuIGBpbnB1dGAgd2l0aCBhIGBkYXRhbGlzdGAgdGFnLiBUaGUgZGF0YWxpc3QgZ2l2ZXMgc29tZVxucHJlLWRlZmluZWQgb3B0aW9ucyB0byBzdWdnZXN0IHRvIHRoZSB1c2VyIGFzIHRoZXkgaW50ZXJhY3Qgd2l0aCBhbiBpbnB1dC5cblRoZSB2YWx1ZSBvZiB0aGUgbGlzdCBhdHRyaWJ1dGUgbXVzdCBtYXRjaCB0aGUgaWQgb2YgYSBgZGF0YWxpc3RgIG5vZGUuXG5Gb3IgYGlucHV0YC5cbi19XG5saXN0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxpc3QgPVxuICBhdHRyaWJ1dGUgXCJsaXN0XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGluIGFuIGBpbnB1dGAgb3JcbmB0ZXh0YXJlYWAuXG4tfVxubWlubGVuZ3RoIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbm1pbmxlbmd0aCBuID1cbiAgYXR0cmlidXRlIFwibWluTGVuZ3RoXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IERlZmluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBpbiBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbm1heGxlbmd0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5tYXhsZW5ndGggbiA9XG4gIGF0dHJpYnV0ZSBcIm1heGxlbmd0aFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHdoaWNoIEhUVFAgbWV0aG9kIHRvIHVzZSB3aGVuIHN1Ym1pdHRpbmcgYSBgZm9ybWAuIENhbiBiZSBHRVRcbihkZWZhdWx0KSBvciBQT1NULlxuLX1cbm1ldGhvZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tZXRob2QgPVxuICBzdHJpbmdQcm9wZXJ0eSBcIm1ldGhvZFwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIG11bHRpcGxlIHZhbHVlcyBjYW4gYmUgZW50ZXJlZCBpbiBhbiBgaW5wdXRgIG9mIHR5cGVcbmVtYWlsIG9yIGZpbGUuIENhbiBhbHNvIGluZGljYXRlIHRoYXQgeW91IGNhbiBgc2VsZWN0YCBtYW55IG9wdGlvbnMuXG4tfVxubXVsdGlwbGUgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbm11bHRpcGxlID1cbiAgYm9vbFByb3BlcnR5IFwibXVsdGlwbGVcIlxuXG5cbnstfCBOYW1lIG9mIHRoZSBlbGVtZW50LiBGb3IgZXhhbXBsZSB1c2VkIGJ5IHRoZSBzZXJ2ZXIgdG8gaWRlbnRpZnkgdGhlIGZpZWxkc1xuaW4gZm9ybSBzdWJtaXRzLiBGb3IgYGJ1dHRvbmAsIGBmb3JtYCwgYGZpZWxkc2V0YCwgYGlmcmFtZWAsIGBpbnB1dGAsXG5gb2JqZWN0YCwgYG91dHB1dGAsIGBzZWxlY3RgLCBgdGV4dGFyZWFgLCBgbWFwYCwgYG1ldGFgLCBhbmQgYHBhcmFtYC5cbi19XG5uYW1lIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm5hbWUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcIm5hbWVcIlxuXG5cbnstfCBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCBhIGBmb3JtYCBzaG91bGRuJ3QgYmUgdmFsaWRhdGVkIHdoZW5cbnN1Ym1pdHRlZC5cbi19XG5ub3ZhbGlkYXRlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5ub3ZhbGlkYXRlID1cbiAgYm9vbFByb3BlcnR5IFwibm9WYWxpZGF0ZVwiXG5cblxuey18IERlZmluZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gd2hpY2ggYW4gYGlucHV0YCdzIHZhbHVlIHdpbGwgYmUgdmFsaWRhdGVkXG5hZ2FpbnN0LlxuLX1cbnBhdHRlcm4gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucGF0dGVybiA9XG4gIHN0cmluZ1Byb3BlcnR5IFwicGF0dGVyblwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGFuIGBpbnB1dGAgb3IgYHRleHRhcmVhYCBjYW4gYmUgZWRpdGVkLiAtfVxucmVhZG9ubHkgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlYWRvbmx5ID1cbiAgYm9vbFByb3BlcnR5IFwicmVhZE9ubHlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgcmVxdWlyZWQgdG8gZmlsbCBvdXQgb3Igbm90LlxuRm9yIGBpbnB1dGAsIGBzZWxlY3RgLCBhbmQgYHRleHRhcmVhYC5cbi19XG5yZXF1aXJlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVxdWlyZWQgPVxuICBib29sUHJvcGVydHkgXCJyZXF1aXJlZFwiXG5cblxuey18IEZvciBgaW5wdXRgIHNwZWNpZmllcyB0aGUgd2lkdGggb2YgYW4gaW5wdXQgaW4gY2hhcmFjdGVycy5cblxuRm9yIGBzZWxlY3RgIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHZpc2libGUgb3B0aW9ucyBpbiBhIGRyb3AtZG93biBsaXN0LlxuLX1cbnNpemUgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuc2l6ZSBuID1cbiAgYXR0cmlidXRlIFwic2l6ZVwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBUaGUgZWxlbWVudCBJRCBkZXNjcmliZWQgYnkgdGhpcyBgbGFiZWxgIG9yIHRoZSBlbGVtZW50IElEcyB0aGF0IGFyZSB1c2VkXG5mb3IgYW4gYG91dHB1dGAuXG4tfVxuZm9yIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmZvciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaHRtbEZvclwiXG5cblxuey18IEluZGljYXRlcyB0aGUgZWxlbWVudCBJRCBvZiB0aGUgYGZvcm1gIHRoYXQgb3ducyB0aGlzIHBhcnRpY3VsYXIgYGJ1dHRvbmAsXG5gZmllbGRzZXRgLCBgaW5wdXRgLCBgbGFiZWxgLCBgbWV0ZXJgLCBgb2JqZWN0YCwgYG91dHB1dGAsIGBwcm9ncmVzc2AsXG5gc2VsZWN0YCwgb3IgYHRleHRhcmVhYC5cbi19XG5mb3JtIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmZvcm0gPVxuICBhdHRyaWJ1dGUgXCJmb3JtXCJcblxuXG5cbi0tIFJBTkdFU1xuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIG1heGltdW0gdmFsdWUgYWxsb3dlZC4gV2hlbiB1c2luZyBhbiBpbnB1dCBvZiB0eXBlIG51bWJlciBvclxuZGF0ZSwgdGhlIG1heCB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyIG9yIGRhdGUuIEZvciBgaW5wdXRgLCBgbWV0ZXJgLCBhbmQgYHByb2dyZXNzYC5cbi19XG5tYXggOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWF4ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtYXhcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIG1pbmltdW0gdmFsdWUgYWxsb3dlZC4gV2hlbiB1c2luZyBhbiBpbnB1dCBvZiB0eXBlIG51bWJlciBvclxuZGF0ZSwgdGhlIG1pbiB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyIG9yIGRhdGUuIEZvciBgaW5wdXRgIGFuZCBgbWV0ZXJgLlxuLX1cbm1pbiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5taW4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcIm1pblwiXG5cblxuey18IEFkZCBhIHN0ZXAgc2l6ZSB0byBhbiBgaW5wdXRgLiBVc2UgYHN0ZXAgXCJhbnlcImAgdG8gYWxsb3cgYW55IGZsb2F0aW5nLXBvaW50XG5udW1iZXIgdG8gYmUgdXNlZCBpbiB0aGUgaW5wdXQuXG4tfVxuc3RlcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zdGVwIG4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInN0ZXBcIiBuXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG57LXwgRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gYSBgdGV4dGFyZWFgLiAtfVxuY29scyA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5jb2xzIG4gPVxuICBhdHRyaWJ1dGUgXCJjb2xzXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiByb3dzIGluIGEgYHRleHRhcmVhYC4gLX1cbnJvd3MgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xucm93cyBuID1cbiAgYXR0cmlidXRlIFwicm93c1wiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdGV4dCBzaG91bGQgYmUgd3JhcHBlZCBpbiBhIGB0ZXh0YXJlYWAuIFBvc3NpYmxlXG52YWx1ZXMgYXJlIFwiaGFyZFwiIGFuZCBcInNvZnRcIi5cbi19XG53cmFwIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbndyYXAgPVxuICBzdHJpbmdQcm9wZXJ0eSBcIndyYXBcIlxuXG5cblxuLS0gTUFQU1xuXG5cbnstfCBXaGVuIGFuIGBpbWdgIGlzIGEgZGVzY2VuZGFudCBvZiBhbiBgYWAgdGFnLCB0aGUgYGlzbWFwYCBhdHRyaWJ1dGVcbmluZGljYXRlcyB0aGF0IHRoZSBjbGljayBsb2NhdGlvbiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHBhcmVudCBgYWAncyBocmVmIGFzXG5hIHF1ZXJ5IHN0cmluZy5cbi19XG5pc21hcCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuaXNtYXAgPVxuICBib29sUHJvcGVydHkgXCJpc01hcFwiXG5cblxuey18IFNwZWNpZnkgdGhlIGhhc2ggbmFtZSByZWZlcmVuY2Ugb2YgYSBgbWFwYCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciBhbiBgaW1nYFxub3IgYG9iamVjdGAuIEEgaGFzaCBuYW1lIHJlZmVyZW5jZSBpcyBhIGhhc2ggc3ltYm9sIGZvbGxvd2VkIGJ5IHRoZSBlbGVtZW50J3MgbmFtZSBvciBpZC5cbkUuZy4gYFwiI3BsYW5ldC1tYXBcImAuXG4tfVxudXNlbWFwIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnVzZW1hcCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidXNlTWFwXCJcblxuXG57LXwgRGVjbGFyZSB0aGUgc2hhcGUgb2YgdGhlIGNsaWNrYWJsZSBhcmVhIGluIGFuIGBhYCBvciBgYXJlYWAuIFZhbGlkIHZhbHVlc1xuaW5jbHVkZTogZGVmYXVsdCwgcmVjdCwgY2lyY2xlLCBwb2x5LiBUaGlzIGF0dHJpYnV0ZSBjYW4gYmUgcGFpcmVkIHdpdGhcbmBjb29yZHNgIHRvIGNyZWF0ZSBtb3JlIHBhcnRpY3VsYXIgc2hhcGVzLlxuLX1cbnNoYXBlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNoYXBlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzaGFwZVwiXG5cblxuey18IEEgc2V0IG9mIHZhbHVlcyBzcGVjaWZ5aW5nIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaG90LXNwb3QgcmVnaW9uIGluIGFuXG5gYXJlYWAuIE5lZWRzIHRvIGJlIHBhaXJlZCB3aXRoIGEgYHNoYXBlYCBhdHRyaWJ1dGUgdG8gYmUgbWVhbmluZ2Z1bC5cbi19XG5jb29yZHMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY29vcmRzID1cbiAgc3RyaW5nUHJvcGVydHkgXCJjb29yZHNcIlxuXG5cblxuLS0gUkVBTCBTVFVGRlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIGhvcml6b250YWwgYWxpZ25tZW50IG9mIGEgYGNhcHRpb25gLCBgY29sYCwgYGNvbGdyb3VwYCxcbmBocmAsIGBpZnJhbWVgLCBgaW1nYCwgYHRhYmxlYCwgYHRib2R5YCwgIGB0ZGAsICBgdGZvb3RgLCBgdGhgLCBgdGhlYWRgLCBvclxuYHRyYC5cbi19XG5hbGlnbiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hbGlnbiA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWxpZ25cIlxuXG5cbnstfCBDb250YWlucyBhIFVSSSB3aGljaCBwb2ludHMgdG8gdGhlIHNvdXJjZSBvZiB0aGUgcXVvdGUgb3IgY2hhbmdlIGluIGFcbmBibG9ja3F1b3RlYCwgYGRlbGAsIGBpbnNgLCBvciBgcWAuXG4tfVxuY2l0ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jaXRlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJjaXRlXCJcblxuXG5cblxuLS0gTElOS1MgQU5EIEFSRUFTXG5cblxuey18IFRoZSBVUkwgb2YgYSBsaW5rZWQgcmVzb3VyY2UsIHN1Y2ggYXMgYGFgLCBgYXJlYWAsIGBiYXNlYCwgb3IgYGxpbmtgLiAtfVxuaHJlZiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5ocmVmIHVybCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaHJlZlwiIHVybFxuXG5cbnstfCBTcGVjaWZ5IHdoZXJlIHRoZSByZXN1bHRzIG9mIGNsaWNraW5nIGFuIGBhYCwgYGFyZWFgLCBgYmFzZWAsIG9yIGBmb3JtYFxuc2hvdWxkIGFwcGVhci4gUG9zc2libGUgc3BlY2lhbCB2YWx1ZXMgaW5jbHVkZTpcblxuICAqIF9ibGFuayAmbWRhc2g7IGEgbmV3IHdpbmRvdyBvciB0YWJcbiAgKiBfc2VsZiAmbWRhc2g7IHRoZSBzYW1lIGZyYW1lICh0aGlzIGlzIGRlZmF1bHQpXG4gICogX3BhcmVudCAmbWRhc2g7IHRoZSBwYXJlbnQgZnJhbWVcbiAgKiBfdG9wICZtZGFzaDsgdGhlIGZ1bGwgYm9keSBvZiB0aGUgd2luZG93XG5cbllvdSBjYW4gYWxzbyBnaXZlIHRoZSBuYW1lIG9mIGFueSBgZnJhbWVgIHlvdSBoYXZlIGNyZWF0ZWQuXG4tfVxudGFyZ2V0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnRhcmdldCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidGFyZ2V0XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgY2xpY2tpbmcgYW4gYGFgIGFuZCBgYXJlYWAgd2lsbCBkb3dubG9hZCB0aGUgcmVzb3VyY2VcbmRpcmVjdGx5LiBUaGUgYFN0cmluZ2AgYXJndW1lbnQgZGV0ZXJtaW5zIHRoZSBuYW1lIG9mIHRoZSBkb3dubG9hZGVkIGZpbGUuXG5TYXkgdGhlIGZpbGUgeW91IGFyZSBzZXJ2aW5nIGlzIG5hbWVkIGBoYXRzLmpzb25gLlxuXG4gICAgZG93bmxvYWQgXCJcIiAgICAgICAgICAgICAgIC0tIGhhdHMuanNvblxuICAgIGRvd25sb2FkIFwibXktaGF0cy5qc29uXCIgICAtLSBteS1oYXRzLmpzb25cbiAgICBkb3dubG9hZCBcInNuYWtlcy5qc29uXCIgICAgLS0gc25ha2VzLmpzb25cblxuVGhlIGVtcHR5IGBTdHJpbmdgIHNheXMgdG8ganVzdCBuYW1lIGl0IHdoYXRldmVyIGl0IHdhcyBjYWxsZWQgb24gdGhlIHNlcnZlci5cbi19XG5kb3dubG9hZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kb3dubG9hZCBmaWxlTmFtZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZG93bmxvYWRcIiBmaWxlTmFtZVxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCBjbGlja2luZyBhbiBgYWAgYW5kIGBhcmVhYCB3aWxsIGRvd25sb2FkIHRoZSByZXNvdXJjZVxuZGlyZWN0bHksIGFuZCB0aGF0IHRoZSBkb3dubG9hZGVkIHJlc291cmNlIHdpdGggaGF2ZSB0aGUgZ2l2ZW4gZmlsZW5hbWUuXG5TbyBgZG93bmxvYWRBcyBcImhhdHMuanNvblwiYCBtZWFucyB0aGUgcGVyc29uIGdldHMgYSBmaWxlIG5hbWVkIGBoYXRzLmpzb25gLlxuLX1cbmRvd25sb2FkQXMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZG93bmxvYWRBcyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZG93bmxvYWRcIlxuXG5cbnstfCBUd28tbGV0dGVyIGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxpbmtlZCByZXNvdXJjZSBvZiBhbiBgYWAsIGBhcmVhYCwgb3IgYGxpbmtgLlxuLX1cbmhyZWZsYW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmhyZWZsYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJocmVmbGFuZ1wiXG5cblxuey18IFNwZWNpZmllcyBhIGhpbnQgb2YgdGhlIHRhcmdldCBtZWRpYSBvZiBhIGBhYCwgYGFyZWFgLCBgbGlua2AsIGBzb3VyY2VgLFxub3IgYHN0eWxlYC5cbi19XG5tZWRpYSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tZWRpYSA9XG4gIGF0dHJpYnV0ZSBcIm1lZGlhXCJcblxuXG57LXwgU3BlY2lmeSBhIFVSTCB0byBzZW5kIGEgc2hvcnQgUE9TVCByZXF1ZXN0IHRvIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGFuXG5gYWAgb3IgYGFyZWFgLiBVc2VmdWwgZm9yIG1vbml0b3JpbmcgYW5kIHRyYWNraW5nLlxuLX1cbnBpbmcgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucGluZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwicGluZ1wiXG5cblxuey18IFNwZWNpZmllcyB0aGUgcmVsYXRpb25zaGlwIG9mIHRoZSB0YXJnZXQgb2JqZWN0IHRvIHRoZSBsaW5rIG9iamVjdC5cbkZvciBgYWAsIGBhcmVhYCwgYGxpbmtgLlxuLX1cbnJlbCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5yZWwgPVxuICBhdHRyaWJ1dGUgXCJyZWxcIlxuXG5cblxuLS0gQ1JBWlkgU1RVRkZcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBkYXRlIGFuZCB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudC5cbkZvciBgZGVsYCwgYGluc2AsIGB0aW1lYC5cbi19XG5kYXRldGltZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kYXRldGltZSA9XG4gIGF0dHJpYnV0ZSBcImRhdGV0aW1lXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBkYXRlIGFuZCB0aW1lIGlzIHRoZSBkYXRlIG9mIHRoZSBuZWFyZXN0IGBhcnRpY2xlYFxuYW5jZXN0b3IgZWxlbWVudC4gRm9yIGB0aW1lYC5cbi19XG5wdWJkYXRlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnB1YmRhdGUgPVxuICBhdHRyaWJ1dGUgXCJwdWJkYXRlXCJcblxuXG5cbi0tIE9SREVSRUQgTElTVFNcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYW4gb3JkZXJlZCBsaXN0IGBvbGAgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRlc2NlbmRpbmdcbm9yZGVyIGluc3RlYWQgb2YgYSBhc2NlbmRpbmcuXG4tfVxucmV2ZXJzZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJldmVyc2VkID1cbiAgYm9vbFByb3BlcnR5IFwicmV2ZXJzZWRcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBmaXJzdCBudW1iZXIgb2YgYW4gb3JkZXJlZCBsaXN0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHNvbWV0aGluZ1xuYmVzaWRlcyAxLlxuLX1cbnN0YXJ0IDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnN0YXJ0IG4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInN0YXJ0XCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuXG4tLSBUQUJMRVNcblxuXG57LXwgVGhlIGNvbHNwYW4gYXR0cmlidXRlIGRlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGEgY2VsbCBzaG91bGQgc3Bhbi5cbkZvciBgdGRgIGFuZCBgdGhgLlxuLX1cbmNvbHNwYW4gOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuY29sc3BhbiBuID1cbiAgYXR0cmlidXRlIFwiY29sc3BhblwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBBIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGVsZW1lbnQgSURzIGluZGljYXRpbmcgd2hpY2ggYHRoYCBlbGVtZW50cyBhcmVcbmhlYWRlcnMgZm9yIHRoaXMgY2VsbC4gRm9yIGB0ZGAgYW5kIGB0aGAuXG4tfVxuaGVhZGVycyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5oZWFkZXJzID1cbiAgc3RyaW5nUHJvcGVydHkgXCJoZWFkZXJzXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbnVtYmVyIG9mIHJvd3MgYSB0YWJsZSBjZWxsIHNob3VsZCBzcGFuIG92ZXIuXG5Gb3IgYHRkYCBhbmQgYHRoYC5cbi19XG5yb3dzcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnJvd3NwYW4gbiA9XG4gIGF0dHJpYnV0ZSBcInJvd3NwYW5cIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBzY29wZSBvZiBhIGhlYWRlciBjZWxsIGB0aGAuIFBvc3NpYmxlIHZhbHVlcyBhcmU6IGNvbCwgcm93LFxuY29sZ3JvdXAsIHJvd2dyb3VwLlxuLX1cbnNjb3BlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNjb3BlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzY29wZVwiXG5cblxuey18IFNwZWNpZmllcyB0aGUgVVJMIG9mIHRoZSBjYWNoZSBtYW5pZmVzdCBmb3IgYW4gYGh0bWxgIHRhZy4gLX1cbm1hbmlmZXN0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1hbmlmZXN0ID1cbiAgYXR0cmlidXRlIFwibWFuaWZlc3RcIlxuXG5cbnstLSBUT0RPOiBtYXliZSByZWludHJvZHVjZSBvbmNlIHRoZXJlJ3MgYSBiZXR0ZXIgd2F5IHRvIGRpc2FtYmlndWF0ZSBpbXBvcnRzXG57LXwgVGhlIG51bWJlciBvZiBjb2x1bW5zIGEgYGNvbGAgb3IgYGNvbGdyb3VwYCBzaG91bGQgc3Bhbi4gLX1cbnNwYW4gOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuc3BhbiBuID1cbiAgICBzdHJpbmdQcm9wZXJ0eSBcInNwYW5cIiAoU3RyaW5nLmZyb21JbnQgbilcbi0tfVxuIiwKICAgICAgICAibW9kdWxlIEh0bWwuRXZlbnRzIGV4cG9zaW5nXG4gICggb25DbGljaywgb25Eb3VibGVDbGlja1xuICAsIG9uTW91c2VEb3duLCBvbk1vdXNlVXBcbiAgLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZVxuICAsIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0XG4gICwgb25JbnB1dCwgb25DaGVjaywgb25TdWJtaXRcbiAgLCBvbkJsdXIsIG9uRm9jdXNcbiAgLCBvbiwgc3RvcFByb3BhZ2F0aW9uT24sIHByZXZlbnREZWZhdWx0T24sIGN1c3RvbVxuICAsIHRhcmdldFZhbHVlLCB0YXJnZXRDaGVja2VkLCBrZXlDb2RlXG4gIClcblxuey18IEl0IGlzIG9mdGVuIGhlbHBmdWwgdG8gY3JlYXRlIGFuIFtDdXN0b20gVHlwZV1bXSBzbyB5b3UgY2FuIGhhdmUgbWFueSBkaWZmZXJlbnQga2luZHNcbm9mIGV2ZW50cyBhcyBzZWVuIGluIHRoZSBbVG9kb01WQ11bXSBleGFtcGxlLlxuXG5bQ3VzdG9tIFR5cGVdOiBodHRwczovL2dyZW4tbGFuZy5vcmcvYm9vay9zeW50YXgvY3VzdG9tX3R5cGVzLmh0bWxcbltUb2RvTVZDXTogaHR0cHM6Ly9naXRodWIuY29tL2dyZW4tbGFuZy9leGFtcGxlLXByb2plY3RzL3RyZWUvbWFpbi90b2RvX212YyBcblxuIyMgTW91c2VcbkBkb2NzIG9uQ2xpY2ssIG9uRG91YmxlQ2xpY2ssIG9uTW91c2VEb3duLCBvbk1vdXNlVXAsIG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dFxuXG4jIyBGb3Jtc1xuQGRvY3Mgb25JbnB1dCwgb25DaGVjaywgb25TdWJtaXRcblxuIyMgRm9jdXNcbkBkb2NzIG9uQmx1ciwgb25Gb2N1c1xuXG4jIyBDdXN0b21cbkBkb2NzIG9uLCBzdG9wUHJvcGFnYXRpb25PbiwgcHJldmVudERlZmF1bHRPbiwgY3VzdG9tXG5cbiMjIEN1c3RvbSBEZWNvZGVyc1xuQGRvY3MgdGFyZ2V0VmFsdWUsIHRhcmdldENoZWNrZWQsIGtleUNvZGVcbi19XG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUpXG5pbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuaW1wb3J0IFZpcnR1YWxEb21cblxuXG5cbi0tIE1PVVNFIEVWRU5UU1xuXG5cbnstfC19XG5vbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uQ2xpY2sgbXNnID1cbiAgb24gXCJjbGlja1wiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbkRvdWJsZUNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uRG91YmxlQ2xpY2sgbXNnID1cbiAgb24gXCJkYmxjbGlja1wiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlRG93biA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlRG93biBtc2cgPVxuICBvbiBcIm1vdXNlZG93blwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlVXAgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZVVwIG1zZyA9XG4gIG9uIFwibW91c2V1cFwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlRW50ZXIgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZUVudGVyIG1zZyA9XG4gIG9uIFwibW91c2VlbnRlclwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlTGVhdmUgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZUxlYXZlIG1zZyA9XG4gIG9uIFwibW91c2VsZWF2ZVwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlT3ZlciA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlT3ZlciBtc2cgPVxuICBvbiBcIm1vdXNlb3ZlclwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbk1vdXNlT3V0IDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VPdXQgbXNnID1cbiAgb24gXCJtb3VzZW91dFwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cblxuLS0gRk9STSBFVkVOVFNcblxuXG57LXwgRGV0ZWN0IFtpbnB1dF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2lucHV0KVxuZXZlbnRzIGZvciB0aGluZ3MgbGlrZSB0ZXh0IGZpZWxkcyBvciB0ZXh0IGFyZWFzLlxuXG5Gb3IgbW9yZSBkZXRhaWxzIG9uIGhvdyBgb25JbnB1dGAgd29ya3MsIGNoZWNrIG91dCBbYHRhcmdldFZhbHVlYF0oI3RhcmdldFZhbHVlKS5cblxuKipOb3RlIDE6KiogSXQgZ3JhYnMgdGhlICoqc3RyaW5nKiogdmFsdWUgYXQgYGV2ZW50LnRhcmdldC52YWx1ZWAsIHNvIGl0IHdpbGxcbm5vdCB3b3JrIGlmIHlvdSBuZWVkIHNvbWUgb3RoZXIgaW5mb3JtYXRpb24uIEZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCB0byB0cmFja1xuaW5wdXRzIG9uIGEgcmFuZ2Ugc2xpZGVyLCBtYWtlIGEgY3VzdG9tIGhhbmRsZXIgd2l0aCBbYG9uYF0oI29uKS5cblxuKipOb3RlIDI6KiogSXQgdXNlcyBgc3RvcFByb3BhZ2F0aW9uT25gIGludGVybmFsbHkgdG8gYWx3YXlzIHN0b3AgcHJvcGFnYXRpb25cbm9mIHRoZSBldmVudC4gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGNvbXBsaWNhdGVkIHJlYXNvbnMgZXhwbGFpbmVkIFtoZXJlXVsxXSBhbmRcbltoZXJlXVsyXS5cblxuWzFdOiAvcGFja2FnZXMvZWxtL3ZpcnR1YWwtZG9tL2xhdGVzdC9WaXJ0dWFsRG9tI0hhbmRsZXJcblsyXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9pc3N1ZXMvMTI1XG4tfVxub25JbnB1dCA6IChTdHJpbmcgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG5vbklucHV0IHRhZ2dlciA9XG4gIHN0b3BQcm9wYWdhdGlvbk9uIFwiaW5wdXRcIiAoSnNvbi5tYXAgYWx3YXlzU3RvcCAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldFZhbHVlKSlcblxuXG5hbHdheXNTdG9wIDogbXNnIC0+IHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCB9XG5hbHdheXNTdG9wIG1zZyA9XG4gIHsgbWVzc2FnZSA9IG1zZyBcbiAgLCBzdG9wUHJvcGFnYXRpb24gPSBUcnVlXG4gIH1cblxuXG57LXwgRGV0ZWN0IFtjaGFuZ2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jaGFuZ2UpXG5ldmVudHMgb24gY2hlY2tib3hlcy4gSXQgd2lsbCBncmFiIHRoZSBib29sZWFuIHZhbHVlIGZyb20gYGV2ZW50LnRhcmdldC5jaGVja2VkYFxub24gYW55IGlucHV0IGV2ZW50LlxuXG5DaGVjayBvdXQgW2B0YXJnZXRDaGVja2VkYF0oI3RhcmdldENoZWNrZWQpIGZvciBtb3JlIGRldGFpbHMgb24gaG93IHRoaXMgd29ya3MuXG4tfVxub25DaGVjayA6IChCb29sIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xub25DaGVjayB0YWdnZXIgPVxuICBvbiBcImNoYW5nZVwiIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0Q2hlY2tlZClcblxuXG57LXwgRGV0ZWN0IGEgW3N1Ym1pdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3N1Ym1pdClcbmV2ZW50IHdpdGggW2BwcmV2ZW50RGVmYXVsdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9wcmV2ZW50RGVmYXVsdClcbmluIG9yZGVyIHRvIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBjaGFuZ2luZyB0aGUgcGFnZeKAmXMgbG9jYXRpb24uIElmIHlvdSBuZWVkXG5kaWZmZXJlbnQgYmVoYXZpb3IsIGNyZWF0ZSBhIGN1c3RvbSBldmVudCBoYW5kbGVyLlxuLX1cbm9uU3VibWl0IDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uU3VibWl0IG1zZyA9XG4gIHByZXZlbnREZWZhdWx0T24gXCJzdWJtaXRcIiAoSnNvbi5tYXAgYWx3YXlzUHJldmVudERlZmF1bHQgKEpzb24uc3VjY2VlZCBtc2cpKVxuXG5cbmFsd2F5c1ByZXZlbnREZWZhdWx0IDogbXNnIC0+IHsgbWVzc2FnZSA6IG1zZywgcHJldmVudERlZmF1bHQgOiBCb29sIH1cbmFsd2F5c1ByZXZlbnREZWZhdWx0IG1zZyA9XG4gIHsgbWVzc2FnZSA9IG1zZ1xuICAsIHByZXZlbnREZWZhdWx0ID0gVHJ1ZVxuICB9XG5cblxuXG4tLSBGT0NVUyBFVkVOVFNcblxuXG57LXwtfVxub25CbHVyIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uQmx1ciBtc2cgPVxuICBvbiBcImJsdXJcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Gb2N1cyA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkZvY3VzIG1zZyA9XG4gIG9uIFwiZm9jdXNcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG5cbi0tIENVU1RPTSBFVkVOVFNcblxuXG57LXwgQ3JlYXRlIGEgY3VzdG9tIGV2ZW50IGxpc3RlbmVyLiBOb3JtYWxseSB0aGlzIHdpbGwgbm90IGJlIG5lY2Vzc2FyeSwgYnV0XG55b3UgaGF2ZSB0aGUgcG93ZXIhIEhlcmUgaXMgaG93IGBvbkNsaWNrYCBpcyBkZWZpbmVkIGZvciBleGFtcGxlOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIERlY29kZVxuXG4gICAgb25DbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25DbGljayBtZXNzYWdlID1cbiAgICAgIG9uIFwiY2xpY2tcIiAoRGVjb2RlLnN1Y2NlZWQgbWVzc2FnZSlcblxuVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSBldmVudCBuYW1lIGluIHRoZSBzYW1lIGZvcm1hdCBhcyB3aXRoIEphdmFTY3JpcHQnc1xuW2BhZGRFdmVudExpc3RlbmVyYF1bYUVMXSBmdW5jdGlvbi5cblxuVGhlIHNlY29uZCBhcmd1bWVudCBpcyBhIEpTT04gZGVjb2Rlci4gUmVhZCBtb3JlIGFib3V0IHRoZXNlIFtoZXJlXVtkZWNvZGVyXS5cbldoZW4gYW4gZXZlbnQgb2NjdXJzLCB0aGUgZGVjb2RlciB0cmllcyB0byB0dXJuIHRoZSBldmVudCBvYmplY3QgaW50byBhbiBHcmVuXG52YWx1ZS4gSWYgc3VjY2Vzc2Z1bCwgdGhlIHZhbHVlIGlzIHJvdXRlZCB0byB5b3VyIGB1cGRhdGVgIGZ1bmN0aW9uLiBJbiB0aGVcbmNhc2Ugb2YgYG9uQ2xpY2tgIHdlIGFsd2F5cyBqdXN0IHN1Y2NlZWQgd2l0aCB0aGUgZ2l2ZW4gYG1lc3NhZ2VgLlxuXG5JZiB0aGlzIGlzIGNvbmZ1c2luZywgd29yayB0aHJvdWdoIHRoZSBbRWxtIEFyY2hpdGVjdHVyZSBUdXRvcmlhbF1bdHV0b3JpYWxdLlxuSXQgcmVhbGx5IGhlbHBzIVxuXG5bYUVMXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbltkZWNvZGVyXTogL3BhY2thZ2VzL2VsbS9qc29uL2xhdGVzdC9Kc29uLURlY29kZVxuW3R1dG9yaWFsXTogaHR0cHM6Ly9naXRodWIuY29tL2V2YW5jei9lbG0tYXJjaGl0ZWN0dXJlLXR1dG9yaWFsL1xuXG4qKk5vdGU6KiogVGhpcyBjcmVhdGVzIGEgW3Bhc3NpdmVdW10gZXZlbnQgbGlzdGVuZXIsIGVuYWJsaW5nIG9wdGltaXphdGlvbnMgZm9yXG50b3VjaCwgc2Nyb2xsLCBhbmQgd2hlZWwgZXZlbnRzIGluIHNvbWUgYnJvd3NlcnMuXG5cbltwYXNzaXZlXTogaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbi19XG5vbiA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLk5vcm1hbCBkZWNvZGVyKVxuXG5cbnstfCBDcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBtYXkgW2BzdG9wUHJvcGFnYXRpb25gXVtzdG9wXS4gWW91ciBkZWNvZGVyXG5tdXN0IHByb2R1Y2UgYSBtZXNzYWdlIGFuZCBhIGBCb29sYCB0aGF0IGRlY2lkZXMgaWYgYHN0b3BQcm9wYWdhdGlvbmAgc2hvdWxkXG5iZSBjYWxsZWQuXG5cbltzdG9wXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuXG4qKk5vdGU6KiogVGhpcyBjcmVhdGVzIGEgW3Bhc3NpdmVdW10gZXZlbnQgbGlzdGVuZXIsIGVuYWJsaW5nIG9wdGltaXphdGlvbnMgZm9yXG50b3VjaCwgc2Nyb2xsLCBhbmQgd2hlZWwgZXZlbnRzIGluIHNvbWUgYnJvd3NlcnMuXG5cbltwYXNzaXZlXTogaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWRcbi19XG5zdG9wUHJvcGFnYXRpb25PbiA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sIH0gLT4gQXR0cmlidXRlIG1zZ1xuc3RvcFByb3BhZ2F0aW9uT24gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uTWF5U3RvcFByb3BhZ2F0aW9uIGRlY29kZXIpXG5cblxuey18IENyZWF0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IG1heSBbYHByZXZlbnREZWZhdWx0YF1bcHJldmVudF0uIFlvdXIgZGVjb2RlclxubXVzdCBwcm9kdWNlIGEgbWVzc2FnZSBhbmQgYSBgQm9vbGAgdGhhdCBkZWNpZGVzIGlmIGBwcmV2ZW50RGVmYXVsdGAgc2hvdWxkXG5iZSBjYWxsZWQuXG5cbkZvciBleGFtcGxlLCB0aGUgYG9uU3VibWl0YCBmdW5jdGlvbiBpbiB0aGlzIGxpYnJhcnkgKmFsd2F5cyogcHJldmVudHMgdGhlXG5kZWZhdWx0IGJlaGF2aW9yOlxuXG5bcHJldmVudF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9wcmV2ZW50RGVmYXVsdFxuXG4gICAgb25TdWJtaXQgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uU3VibWl0IG1zZyA9XG4gICAgICBwcmV2ZW50RGVmYXVsdE9uIFwic3VibWl0XCIgKEpzb24ubWFwIGFsd2F5c1ByZXZlbnREZWZhdWx0IChKc29uLnN1Y2NlZWQgbXNnKSlcblxuICAgIGFsd2F5c1ByZXZlbnREZWZhdWx0IDogbXNnIC0+ICggbXNnLCBCb29sIClcbiAgICBhbHdheXNQcmV2ZW50RGVmYXVsdCBtc2cgPVxuICAgICAgKCBtc2csIFRydWUgKVxuLX1cbnByZXZlbnREZWZhdWx0T24gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgcHJldmVudERlZmF1bHQgOiBCb29sIH0gLT4gQXR0cmlidXRlIG1zZ1xucHJldmVudERlZmF1bHRPbiBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5NYXlQcmV2ZW50RGVmYXVsdCBkZWNvZGVyKVxuXG5cbnstfCBDcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBtYXkgW2BzdG9wUHJvcGFnYXRpb25gXVtzdG9wXSBvclxuW2BwcmV2ZW50RGVmYXVsdGBdW3ByZXZlbnRdLlxuXG5bc3RvcF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9zdG9wUHJvcGFnYXRpb25cbltwcmV2ZW50XTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5baGFuZGxlcl06IGh0dHBzOi8vcGFja2FnZS5lbG0tbGFuZy5vcmcvcGFja2FnZXMvZWxtL3ZpcnR1YWwtZG9tL2xhdGVzdC9WaXJ0dWFsRG9tI0hhbmRsZXJcblxuKipOb3RlOioqIENoZWNrIG91dCB0aGUgbG93ZXItbGV2ZWwgZXZlbnQgQVBJIGluIGBlbG0vdmlydHVhbC1kb21gIGZvciBtb3JlXG5pbmZvcm1hdGlvbiBvbiBleGFjdGx5IGhvdyBldmVudHMgd29yaywgZXNwZWNpYWxseSB0aGUgW2BIYW5kbGVyYF1baGFuZGxlcl1cbmRvY3MuXG4tfVxuY3VzdG9tIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wsIHByZXZlbnREZWZhdWx0IDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbmN1c3RvbSBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5DdXN0b20gZGVjb2RlcilcblxuXG5cbi0tIENPTU1PTiBERUNPREVSU1xuXG5cbnstfCBBIGBKc29uLkRlY29kZXJgIGZvciBncmFiYmluZyBgZXZlbnQudGFyZ2V0LnZhbHVlYC4gV2UgdXNlIHRoaXMgdG8gZGVmaW5lXG5gb25JbnB1dGAgYXMgZm9sbG93czpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5cbiAgICBvbklucHV0IDogKFN0cmluZyAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbklucHV0IHRhZ2dlciA9XG4gICAgICBzdG9wUHJvcGFnYXRpb25PbiBcImlucHV0XCIgPHxcbiAgICAgICAgSnNvbi5tYXAgYWx3YXlzU3RvcCAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldFZhbHVlKVxuXG4gICAgYWx3YXlzU3RvcCA6IGEgLT4gKGEsIEJvb2wpXG4gICAgYWx3YXlzU3RvcCB4ID1cbiAgICAgICh4LCBUcnVlKVxuXG5Zb3UgcHJvYmFibHkgd2lsbCBuZXZlciBuZWVkIHRoaXMsIGJ1dCBob3BlZnVsbHkgaXQgZ2l2ZXMgc29tZSBpbnNpZ2h0cyBpbnRvXG5ob3cgdG8gbWFrZSBjdXN0b20gZXZlbnQgaGFuZGxlcnMuXG4tfVxudGFyZ2V0VmFsdWUgOiBKc29uLkRlY29kZXIgU3RyaW5nXG50YXJnZXRWYWx1ZSA9XG4gIEpzb24uYXQgW1widGFyZ2V0XCIsIFwidmFsdWVcIl0gSnNvbi5zdHJpbmdcblxuXG57LXwgQSBgSnNvbi5EZWNvZGVyYCBmb3IgZ3JhYmJpbmcgYGV2ZW50LnRhcmdldC5jaGVja2VkYC4gV2UgdXNlIHRoaXMgdG8gZGVmaW5lXG5gb25DaGVja2AgYXMgZm9sbG93czpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5cbiAgICBvbkNoZWNrIDogKEJvb2wgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25DaGVjayB0YWdnZXIgPVxuICAgICAgb24gXCJpbnB1dFwiIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0Q2hlY2tlZClcbi19XG50YXJnZXRDaGVja2VkIDogSnNvbi5EZWNvZGVyIEJvb2xcbnRhcmdldENoZWNrZWQgPVxuICBKc29uLmF0IFtcInRhcmdldFwiLCBcImNoZWNrZWRcIl0gSnNvbi5ib29sXG5cblxuey18IEEgYEpzb24uRGVjb2RlcmAgZm9yIGdyYWJiaW5nIGBldmVudC5rZXlDb2RlYC4gVGhpcyBoZWxwcyB5b3UgZGVmaW5lXG5rZXlib2FyZCBsaXN0ZW5lcnMgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuICAgIG9uS2V5VXAgOiAoSW50IC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uS2V5VXAgdGFnZ2VyID1cbiAgICAgIG9uIFwia2V5dXBcIiAoSnNvbi5tYXAgdGFnZ2VyIGtleUNvZGUpXG5cbioqTm90ZToqKiBJdCBsb29rcyBsaWtlIHRoZSBzcGVjIGlzIG1vdmluZyBhd2F5IGZyb20gYGV2ZW50LmtleUNvZGVgIGFuZFxudG93YXJkcyBgZXZlbnQua2V5YC4gT25jZSB0aGlzIGlzIHN1cHBvcnRlZCBpbiBtb3JlIGJyb3dzZXJzLCB3ZSBtYXkgYWRkXG5oZWxwZXJzIGhlcmUgZm9yIGBvbktleVVwYCwgYG9uS2V5RG93bmAsIGBvbktleVByZXNzYCwgZXRjLlxuLX1cbmtleUNvZGUgOiBKc29uLkRlY29kZXIgSW50XG5rZXlDb2RlID1cbiAgSnNvbi5maWVsZCBcImtleUNvZGVcIiBKc29uLmludFxuIiwKICAgICAgICAibW9kdWxlIEh0bWwuQXR0cmlidXRlcy5BcmlhIGV4cG9zaW5nXG4gICAgKCByb2xlXG4gICAgLCBhY3RpdmVEZXNjZW5kYW50XG4gICAgLCBjaGVja2VkXG4gICAgLCBjb250cm9sc1xuICAgICwgZGVzY3JpYmVkYnlcbiAgICAsIGRpc2FibGVkXG4gICAgLCBleHBhbmRlZFxuICAgICwgaGFzUG9wdXBcbiAgICAsIGhpZGRlblxuICAgICwgbGFiZWxcbiAgICAsIGxhYmVsbGVkYnlcbiAgICAsIGxpdmVcbiAgICAsIHByZXNzZWRcbiAgICAsIHJlYWRvbmx5XG4gICAgLCByZXF1aXJlZFxuICAgICwgc2VsZWN0ZWRcbiAgICAsIHNvcnRcbiAgICAsIHZhbHVlTWF4XG4gICAgLCB2YWx1ZU1pblxuICAgICwgdmFsdWVOb3dcbiAgICApXG5cbnstfCBBZGRpdGlvbmFsIGF0dHJpYnV0ZXMgZm9yIGh0bWxcblxuXG4jIEFyaWEgcm9sZVxuXG5AZG9jcyByb2xlXG5cblxuIyBBcmlhIEF0dHJpYnV0ZXNcblxuQGRvY3MgYWN0aXZlRGVzY2VuZGFudFxuQGRvY3MgY2hlY2tlZFxuQGRvY3MgY29udHJvbHNcbkBkb2NzIGRlc2NyaWJlZGJ5XG5AZG9jcyBkaXNhYmxlZFxuQGRvY3MgZXhwYW5kZWRcbkBkb2NzIGhhc1BvcHVwXG5AZG9jcyBoaWRkZW5cbkBkb2NzIGxhYmVsXG5AZG9jcyBsYWJlbGxlZGJ5XG5AZG9jcyBsaXZlXG5AZG9jcyBwcmVzc2VkXG5AZG9jcyByZWFkb25seVxuQGRvY3MgcmVxdWlyZWRcbkBkb2NzIHNlbGVjdGVkXG5AZG9jcyBzb3J0XG5AZG9jcyB2YWx1ZU1heFxuQGRvY3MgdmFsdWVNaW5cbkBkb2NzIHZhbHVlTm93XG5cbi19XG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChhdHRyaWJ1dGUpXG5pbXBvcnQgSnNvbi5FbmNvZGUgYXMgSkVcblxuXG5ib29sQXR0cmlidXRlIDogU3RyaW5nIC0+IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYm9vbEF0dHJpYnV0ZSBuYW1lIHZhbCA9XG4gICAgYXR0cmlidXRlIG5hbWUgKEpFLmVuY29kZSAwIDx8IEpFLmJvb2wgdmFsKVxuXG5cbmZsb2F0QXR0cmlidXRlIDogU3RyaW5nIC0+IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbmZsb2F0QXR0cmlidXRlIG5hbWUgdmFsID1cbiAgICBhdHRyaWJ1dGUgbmFtZSAoU3RyaW5nLmZyb21GbG9hdCB2YWwpXG5cblxuey18IElkZW50aWZpZXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgZGVzY2VuZGFudCBvZiBhIGNvbXBvc2l0ZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1hY3RpdmVkZXNjZW5kYW50KS5cblxuICAgIGRpdiBbIGFjdGl2ZURlc2NlbmRhbnQgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5hY3RpdmVEZXNjZW5kYW50IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFjdGl2ZURlc2NlbmRhbnQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcImNoZWNrZWRcIiBzdGF0ZSBvZiBjaGVja2JveGVzLCByYWRpbyBidXR0b25zLCBhbmQgb3RoZXIgd2lkZ2V0cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWNoZWNrZWQpLlxuXG4gICAgZGl2IFsgY2hlY2tlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuY2hlY2tlZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jaGVja2VkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWNoZWNrZWRcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgd2hvc2UgY29udGVudHMgb3IgcHJlc2VuY2UgYXJlIGNvbnRyb2xsZWQgYnkgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWNvbnRyb2xzKS5cblxuICAgIGRpdiBbIGNvbnRyb2xzIFwiZHJvcGRvd24tbWVudVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5jb250cm9scyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jb250cm9scyA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1jb250cm9sc1wiXG5cblxuey18IElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB0aGF0IGRlc2NyaWJlcyB0aGUgb2JqZWN0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtZGVzY3JpYmVkYnkpLlxuXG4gICAgZGl2IFsgZGVzY3JpYmVkYnkgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5kZXNjcmliZWRieSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kZXNjcmliZWRieSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1kZXNjcmliZWRieVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGlzIHBlcmNlaXZhYmxlIGJ1dCBkaXNhYmxlZCwgc28gaXQgaXMgbm90IGVkaXRhYmxlIG9yIG90aGVyd2lzZSBvcGVyYWJsZS5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWRpc2FibGVkKS5cblxuICAgIGRpdiBbIGRpc2FibGVkIFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmRpc2FibGVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5kaXNhYmxlZCA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtZGlzYWJsZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCwgb3IgYW5vdGhlciBncm91cGluZyBlbGVtZW50IGl0IGNvbnRyb2xzLCBpcyBjdXJyZW50bHkgZXhwYW5kZWQgb3IgY29sbGFwc2VkLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtZXhwYW5kZWQpLlxuXG4gICAgZGl2IFsgZXhwYW5kZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmV4cGFuZGVkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmV4cGFuZGVkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWV4cGFuZGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBhdmFpbGFiaWxpdHkgYW5kIHR5cGUgb2YgaW50ZXJhY3RpdmUgcG9wdXAgZWxlbWVudCwgc3VjaCBhcyBtZW51IG9yIGRpYWxvZywgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IGFuIGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1oYXNwb3B1cCkuXG5cbiAgICBkaXYgWyBoYXNQb3B1cCBcIm1lbnVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuaGFzUG9wdXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaGFzUG9wdXAgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtaGFzcG9wdXBcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBhbmQgYWxsIG9mIGl0cyBkZXNjZW5kYW50cyBhcmUgbm90IHZpc2libGUgb3IgcGVyY2VpdmFibGUgdG8gYW55IHVzZXIgYXMgaW1wbGVtZW50ZWQgYnkgdGhlIGF1dGhvci5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWhpZGRlbikuXG5cbiAgICBkaXYgWyBoaWRkZW4gVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuaGlkZGVuIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5oaWRkZW4gPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLWhpZGRlblwiXG5cblxuey18IERlZmluZXMgYSBzdHJpbmcgdmFsdWUgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxhYmVsKS5cblxuICAgIGRpdiBbIGxhYmVsIFwibGFiZWxcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxubGFiZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFiZWwgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtbGFiZWxcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxhYmVsbGVkYnkpLlxuXG4gICAgZGl2IFsgbGFiZWxsZWRieSBcImlkXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmxhYmVsbGVkYnkgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFiZWxsZWRieSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1sYWJlbGxlZGJ5XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgYW4gZWxlbWVudCB3aWxsIGJlIHVwZGF0ZWQsIGFuZCBkZXNjcmliZXMgdGhlIHR5cGVzIG9mIHVwZGF0ZXMgdGhlIHVzZXIgYWdlbnRzLFxuYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgYW5kIHVzZXIgY2FuIGV4cGVjdCBmcm9tIHRoZSBsaXZlIHJlZ2lvbi5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxpdmUpLlxuXG4gICAgaW5wdXQgWyBsaXZlIFwiYXNzZXJ0aXZlXCIgXSBbXVxuXG4tfVxubGl2ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5saXZlID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWxpdmVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJwcmVzc2VkXCIgc3RhdGUgb2YgdG9nZ2xlIGJ1dHRvbnMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1wcmVzc2VkKS5cblxuICAgIGJ1dHRvbiBbIHByZXNzZWQgVHJ1ZSBdIFsgdGV4dCBcIlN1Ym1pdFwiIF1cblxuLX1cbnByZXNzZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnByZXNzZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXByZXNzZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBpcyBub3QgZWRpdGFibGUsIGJ1dCBpcyBvdGhlcndpc2Ugb3BlcmFibGUuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1yZWFkb25seSkuXG5cbiAgICBkaXYgWyByZWFkb25seSBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5yZWFkb25seSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVhZG9ubHkgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXJlYWRvbmx5XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdXNlciBpbnB1dCBpcyByZXF1aXJlZCBvbiB0aGUgZWxlbWVudCBiZWZvcmUgYSBmb3JtIG1heSBiZSBzdWJtaXR0ZWQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1yZXF1aXJlZCkuXG5cbiAgICBkaXYgWyByZXF1aXJlZCBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5yZXF1aXJlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVxdWlyZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXJlcXVpcmVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwic2VsZWN0ZWRcIiBzdGF0ZSBvZiB2YXJpb3VzIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1zZWxlY3RlZCkuXG5cbiAgICBkaXYgWyBzZWxlY3RlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuc2VsZWN0ZWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc2VsZWN0ZWQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtc2VsZWN0ZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJzZWxlY3RlZFwiIHN0YXRlIG9mIHZhcmlvdXMgd2lkZ2V0cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXNlbGVjdGVkKS5cblxuICAgIGRpdiBbIHNlbGVjdGVkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5zb3J0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNvcnQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtc29ydFwiXG5cblxuey18IERlZmluZXMgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZSBmb3IgYSByYW5nZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS12YWx1ZW1heCkuXG5cbiAgICBkaXYgWyB2YWx1ZU1heCAxMCwgcm9sZSBcInByb2dyZXNzYmFyXCIgXSBbXVxuXG4tfVxudmFsdWVNYXggOiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZU1heCA9XG4gICAgZmxvYXRBdHRyaWJ1dGUgXCJhcmlhLXZhbHVlbWF4XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWluaW11bSBhbGxvd2VkIHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXZhbHVlbWluKS5cblxuICAgIGRpdiBbIHZhbHVlTWluIDEsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTWluIDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVNaW4gPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW1pblwiXG5cblxuey18IERlZmluZXMgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIGEgcmFuZ2Ugd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtdmFsdWVub3cpLlxuXG4gICAgZGl2IFsgdmFsdWVOb3cgNCwgcm9sZSBcInByb2dyZXNzYmFyXCIgXSBbXVxuXG4tfVxudmFsdWVOb3cgOiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZU5vdyA9XG4gICAgZmxvYXRBdHRyaWJ1dGUgXCJhcmlhLXZhbHVlbm93XCJcblxuXG57LXwgQW4gYXR0cmlidXRlIHRvIHN1cHBvcnQgdGhlIHJvbGUgY2xhc3NpZmljYXRpb24gb2YgZWxlbWVudHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3JvbGUtYXR0cmlidXRlKS5cblxuICAgIGRpdiBbIHJvbGUgXCJidXR0b25cIiBdIFsgdGV4dCBcIlN1Ym1pdFwiIF1cblxuLX1cbnJvbGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucm9sZSA9XG4gICAgYXR0cmlidXRlIFwicm9sZVwiXG4iLAogICAgICAgICJtb2R1bGUgTWF5YmUgZXhwb3NpbmdcbiAgICAoIE1heWJlKC4uKVxuICAgICwgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGtlZXBJZlxuICAgICwgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBhbmRUaGVuXG4gICAgKVxuXG57LXwgVGhpcyBsaWJyYXJ5IGZpbGxzIGEgYnVuY2ggb2YgaW1wb3J0YW50IG5pY2hlcyBpbiBHcmVuLiBBIGBNYXliZWAgY2FuIGhlbHBcbnlvdSB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50cywgZXJyb3IgaGFuZGxpbmcsIGFuZCByZWNvcmRzIHdpdGggb3B0aW9uYWwgZmllbGRzLlxuXG5AZG9jcyBNYXliZVxuXG5cbiMjIFF1ZXJpZXNcblxuQGRvY3MgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGtlZXBJZlxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIGFuZFRoZW5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5cblxuey18IFJlcHJlc2VudCB2YWx1ZXMgdGhhdCBtYXkgb3IgbWF5IG5vdCBleGlzdC4gSXQgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBhXG5yZWNvcmQgZmllbGQgdGhhdCBpcyBvbmx5IGZpbGxlZCBpbiBzb21ldGltZXMuIE9yIGlmIGEgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZVxuc29tZXRpbWVzLCBidXQgZG9lcyBub3QgYWJzb2x1dGVseSBuZWVkIGl0LlxuXG4gICAgLS0gQSBwZXJzb24sIGJ1dCBtYXliZSB3ZSBkbyBub3Qga25vdyB0aGVpciBhZ2UuXG4gICAgdHlwZSBhbGlhcyBQZXJzb24gPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBhZ2UgOiBNYXliZSBJbnRcbiAgICAgICAgfVxuXG4gICAgdG9tID1cbiAgICAgICAgeyBuYW1lID0gXCJUb21cIiwgYWdlID0gSnVzdCA0MiB9XG5cbiAgICBzdWUgPVxuICAgICAgICB7IG5hbWUgPSBcIlN1ZVwiLCBhZ2UgPSBOb3RoaW5nIH1cblxuLX1cbnR5cGUgTWF5YmUgYVxuICAgID0gSnVzdCBhXG4gICAgfCBOb3RoaW5nXG5cblxuey18IENoZWNrcyB0byBzZWUgaWYgdGhlIFtNYXliZV0oI01heWJlKSBpcyBgSnVzdGAsIGFuZCB0aGF0IHRoZSBjb250YWluZWQgdmFsdWVcbmVxdWFscyBhIHByb3ZpZGVkIGNvbnN0YW50LlxuXG4gICAgaGFzVmFsdWUgNSAoSnVzdCA1KSA9PSBUcnVlXG5cbiAgICBoYXNWYWx1ZSA1IChKdXN0IDMpID09IEZhbHNlXG5cbiAgICBoYXNWYWx1ZSA1IE5vdGhpbmcgPT0gRmFsc2VcblxuLX1cbmhhc1ZhbHVlIDogYSAtPiBNYXliZSBhIC0+IEJvb2xcbmhhc1ZhbHVlIHZhbHVlIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICBjb250YWluZWQgPT0gdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBDaGVja3MgdG8gc2VlIGlmIHRoZSBbTWF5YmVdKCNNYXliZSkgaXMgYEp1c3RgLCBhbmQgdGhhdCB0aGUgY29udGFpbmVkIHZhbHVlXG5wYXNzZXMgdGhlIHByb3ZpZGVkIHRlc3QuXG5cbiAgICBjaGVja1ZhbHVlIGlzT2RkIChKdXN0IDUpID09IFRydWVcblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgKEp1c3QgMikgPT0gRmFsc2VcblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgTm90aGluZyA9PSBGYWxzZVxuXG4tfVxuY2hlY2tWYWx1ZSA6IChhIC0+IEJvb2wpIC0+IE1heWJlIGEgLT4gQm9vbFxuY2hlY2tWYWx1ZSB0ZXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICB0ZXN0IGNvbnRhaW5lZFxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IFByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlLCB0dXJuaW5nIGFuIG9wdGlvbmFsIHZhbHVlIGludG8gYSBub3JtYWxcbnZhbHVlLiBUaGlzIGNvbWVzIGluIGhhbmR5IHdoZW4gcGFpcmVkIHdpdGggZnVuY3Rpb25zIGxpa2VcbltgRGljdC5nZXRgXShEaWN0I2dldCkgd2hpY2ggZ2l2ZXMgYmFjayBhIGBNYXliZWAuXG5cbiAgICB3aXRoRGVmYXVsdCAxMDAgKEp1c3QgNDIpID09IDQyXG4gICAgXG4gICAgd2l0aERlZmF1bHQgMTAwIE5vdGhpbmcgPT0gMTAwXG4gICAgXG4gICAgd2l0aERlZmF1bHQgXCJ1bmtub3duXCIgKERpY3QuZ2V0IFwiVG9tXCIgRGljdC5lbXB0eSkgPT0gXCJ1bmtub3duXCJcblxuLX1cbndpdGhEZWZhdWx0IDogYSAtPiBNYXliZSBhIC0+IGFcbndpdGhEZWZhdWx0IGRlZmF1bHQgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkZWZhdWx0XG5cblxuey18IFNhbWUgYXMgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB3cmFwcGVkIGluXG5hIGZ1bmN0aW9uLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNvbXB1dGluZyB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBleHBlbnNpdmUsIGFzXG55b3UgY2FuIGNvbXB1dGUgaXQgb25seSB3aGVuIGl0IGlzIHJlcXVpcmVkLlxuXG5JbiBtb3N0IGNhc2VzIHlvdSBzaG91bGQgdXNlIHBhdHRlcm4gbWF0Y2hpbmcgb3IgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGluc3RlYWQuXG5cbi19XG53aXRoRGVmYXVsdExhenkgOiAoe30gLT4gYSkgLT4gTWF5YmUgYSAtPiBhXG53aXRoRGVmYXVsdExhenkgZGVmYXVsdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRlZmF1bHQge31cblxuXG57LXwgVHJhbnNmb3JtIGEgYE1heWJlYCB2YWx1ZSB3aXRoIGEgZ2l2ZW4gZnVuY3Rpb246XG5cbiAgICBtYXAgc3FydCAoSnVzdCA5KSA9PSBKdXN0IDNcblxuICAgIG1hcCBzcXJ0IE5vdGhpbmcgPT0gTm90aGluZ1xuXG4gICAgbWFwIHNxcnQgKFN0cmluZy50b0Zsb2F0IFwiOVwiKSA9PSBKdXN0IDNcblxuICAgIG1hcCBzcXJ0IChTdHJpbmcudG9GbG9hdCBcInhcIikgPT0gTm90aGluZ1xuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG5tYXAgZiBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBKdXN0IChmIHZhbHVlKVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiBpZiBhbGwgdGhlIGFyZ3VtZW50cyBhcmUgYEp1c3RgIGEgdmFsdWUuXG5cbiAgICBtYXAyICgrKSAoSnVzdCAzKSAoSnVzdCA0KSA9PSBKdXN0IDdcblxuICAgIG1hcDIgKCspIChKdXN0IDMpIE5vdGhpbmcgPT0gTm90aGluZ1xuXG4gICAgbWFwMiAoKykgTm90aGluZyAoSnVzdCA0KSA9PSBOb3RoaW5nXG5cbiAgICBtYXAyICgrKSAoU3RyaW5nLnRvSW50IFwiMVwiKSAoU3RyaW5nLnRvSW50IFwiMTIzXCIpID09IEp1c3QgMTI0XG5cbiAgICBtYXAyICgrKSAoU3RyaW5nLnRvSW50IFwieFwiKSAoU3RyaW5nLnRvSW50IFwiMTIzXCIpID09IE5vdGhpbmdcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCIxXCIpIChTdHJpbmcudG9JbnQgXCIxLjNcIikgPT0gTm90aGluZ1xuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSB2YWx1ZVxubWFwMiBmdW5jIG1hIG1iID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYilcblxuXG57LXwgLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSBjIC0+IE1heWJlIHZhbHVlXG5tYXAzIGZ1bmMgbWEgbWIgbWMgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbWMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMpXG5cblxuey18IC19XG5tYXA0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSBjIC0+IE1heWJlIGQgLT4gTWF5YmUgdmFsdWVcbm1hcDQgZnVuYyBtYSBtYiBtYyBtZCA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYiBjIGQpXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgZCAtPiBNYXliZSBlIC0+IE1heWJlIHZhbHVlXG5tYXA1IGZ1bmMgbWEgbWIgbWMgbWQgbWUgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbWMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBlIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMgZCBlKVxuXG5cbnstfCBSZXR1cm5zIGBOb3RoaW5nYCBpZiB0aGUgY29udGFpbmVkIHZhbHVlIGRvZXNuJ3QgcGFzcyB0aGUgZ2l2ZW5cbnRlc3QuXG5cbiAgICBrZWVwSWYgaXNPZGQgKEp1c3QgNSkgPT0gSnVzdCA1XG5cbiAgICBrZWVwSWYgaXNPZGQgKEp1c3QgMikgPT0gTm90aGluZ1xuXG4tfVxua2VlcElmIDogKGEgLT4gQm9vbCkgLT4gTWF5YmUgYSAtPiBNYXliZSBhXG5rZWVwSWYgdGVzdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IGNvbnRhaW5lZCAtPlxuICAgICAgICAgICAgaWYgdGVzdCBjb250YWluZWQgdGhlblxuICAgICAgICAgICAgICAgIG1heWJlXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBDaGFpbiB0b2dldGhlciBtYW55IGNvbXB1dGF0aW9ucyB0aGF0IG1heSBmYWlsLiBJdCBpcyBoZWxwZnVsIHRvIHNlZSBpdHNcbmRlZmluaXRpb246XG5cbiAgICBhbmRUaGVuIDogKGEgLT4gTWF5YmUgYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG4gICAgYW5kVGhlbiBjYWxsYmFjayBtYXliZSA9XG4gICAgICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgTm90aGluZ1xuXG5UaGlzIG1lYW5zIHdlIG9ubHkgY29udGludWUgd2l0aCB0aGUgY2FsbGJhY2sgaWYgdGhpbmdzIGFyZSBnb2luZyB3ZWxsLiBGb3JcbmV4YW1wbGUsIHNheSB5b3UgbmVlZCB0byBwYXJzZSBzb21lIHVzZXIgaW5wdXQgYXMgYSBtb250aDpcblxuICAgIHBhcnNlTW9udGggOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgcGFyc2VNb250aCB1c2VySW5wdXQgPVxuICAgICAgICBTdHJpbmcudG9JbnQgdXNlcklucHV0XG4gICAgICAgICAgICB8PiBhbmRUaGVuIHRvVmFsaWRNb250aFxuXG4gICAgdG9WYWxpZE1vbnRoIDogSW50IC0+IE1heWJlIEludFxuICAgIHRvVmFsaWRNb250aCBtb250aCA9XG4gICAgICAgIGlmIDEgPD0gbW9udGggJiYgbW9udGggPD0gMTIgdGhlblxuICAgICAgICAgICAgSnVzdCBtb250aFxuXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE5vdGhpbmdcblxuSW4gdGhlIGBwYXJzZU1vbnRoYCBmdW5jdGlvbiwgaWYgYFN0cmluZy50b0ludGAgcHJvZHVjZXMgYE5vdGhpbmdgIChiZWNhdXNlXG50aGUgYHVzZXJJbnB1dGAgd2FzIG5vdCBhbiBpbnRlZ2VyKSB0aGlzIGVudGlyZSBjaGFpbiBvZiBvcGVyYXRpb25zIHdpbGxcbnNob3J0LWNpcmN1aXQgYW5kIHJlc3VsdCBpbiBgTm90aGluZ2AuIElmIGB0b1ZhbGlkTW9udGhgIHJlc3VsdHMgaW4gYE5vdGhpbmdgLFxuYWdhaW4gdGhlIGNoYWluIG9mIGNvbXB1dGF0aW9ucyB3aWxsIHJlc3VsdCBpbiBgTm90aGluZ2AuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gTWF5YmUgYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG5hbmRUaGVuIGNhbGxiYWNrIG1heWJlVmFsdWUgPVxuICAgIHdoZW4gbWF5YmVWYWx1ZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG5cbi0tIEZPUiBJTlRFUk5BTCBVU0UgT05MWVxuLS1cbi0tIFVzZSBgd2hlbmAgZXhwcmVzc2lvbnMgZm9yIHRoaXMgaW4gR3JlbiBjb2RlIVxuXG5cbmlzSnVzdCA6IE1heWJlIGEgLT4gQm9vbFxuaXNKdXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuZGVzdHJ1Y3QgOiBiIC0+IChhIC0+IGIpIC0+IE1heWJlIGEgLT4gYlxuZGVzdHJ1Y3QgZGVmYXVsdCBmdW5jIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgZnVuYyBhXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGVmYXVsdFxuIiwKICAgICAgICAibW9kdWxlIE1hdGggZXhwb3NpbmdcbiAgICAoIHJvdW5kLCBmbG9vciwgY2VpbGluZywgdHJ1bmNhdGVcbiAgICAsIG1vZEJ5LCByZW1haW5kZXJCeSwgYWJzLCBzcXJ0LCBsb2dCYXNlXG4gICAgLCBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcbiAgICAsIGRlZ3JlZXMsIHJhZGlhbnMsIHR1cm5zXG4gICAgLCBjb3MsIHNpbiwgdGFuLCBhY29zLCBhc2luLCBhdGFuLCBhdGFuMlxuICAgIClcblxuey18IEZ1bmN0aW9ucyBmb3IgZG9pbmcgbWF0aFxuXG5AZG9jcyByb3VuZCwgZmxvb3IsIGNlaWxpbmcsIHRydW5jYXRlLCBtb2RCeSwgcmVtYWluZGVyQnksIGFicywgc3FydCwgbG9nQmFzZVxuXG5cbiMjIENvbnN0YW50c1xuXG5AZG9jcyBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcblxuXG4jIyBBbmdsZXNcblxuQGRvY3MgZGVncmVlcywgcmFkaWFucywgdHVybnNcblxuXG4jIyBUcmlnb25vbWV0cnlcblxuQGRvY3MgY29zLCBzaW4sIHRhbiwgYWNvcywgYXNpbiwgYXRhbiwgYXRhbjJcblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChJbnQsIEZsb2F0LCAoPT0pLCAoLyksICgqKSwgKDwpKVxuaW1wb3J0IEdyZW4uS2VybmVsLk1hdGhcblxuXG57LXwgUm91bmQgYSBudW1iZXIgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci5cblxuICAgIHJvdW5kIDEuMCA9PSAxXG5cbiAgICByb3VuZCAxLjIgPT0gMVxuXG4gICAgcm91bmQgMS41ID09IDJcblxuICAgIHJvdW5kIDEuOCA9PSAyXG5cbiAgICByb3VuZCAtMS4yID09IC0xXG5cbiAgICByb3VuZCAtMS41ID09IC0xXG5cbiAgICByb3VuZCAtMS44ID09IC0yXG5cbi19XG5yb3VuZCA6IEZsb2F0IC0+IEludFxucm91bmQgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucm91bmRcblxuXG57LXwgRmxvb3IgZnVuY3Rpb24sIHJvdW5kaW5nIGRvd24uXG5cbiAgICBmbG9vciAxLjAgPT0gMVxuXG4gICAgZmxvb3IgMS4yID09IDFcblxuICAgIGZsb29yIDEuNSA9PSAxXG5cbiAgICBmbG9vciAxLjggPT0gMVxuXG4gICAgZmxvb3IgLTEuMiA9PSAtMlxuXG4gICAgZmxvb3IgLTEuNSA9PSAtMlxuXG4gICAgZmxvb3IgLTEuOCA9PSAtMlxuXG4tfVxuZmxvb3IgOiBGbG9hdCAtPiBJbnRcbmZsb29yID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmZsb29yXG5cblxuey18IENlaWxpbmcgZnVuY3Rpb24sIHJvdW5kaW5nIHVwLlxuXG4gICAgY2VpbGluZyAxLjAgPT0gMVxuXG4gICAgY2VpbGluZyAxLjIgPT0gMlxuXG4gICAgY2VpbGluZyAxLjUgPT0gMlxuXG4gICAgY2VpbGluZyAxLjggPT0gMlxuXG4gICAgY2VpbGluZyAtMS4yID09IC0xXG5cbiAgICBjZWlsaW5nIC0xLjUgPT0gLTFcblxuICAgIGNlaWxpbmcgLTEuOCA9PSAtMVxuXG4tfVxuY2VpbGluZyA6IEZsb2F0IC0+IEludFxuY2VpbGluZyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5jZWlsaW5nXG5cblxuey18IFRydW5jYXRlIGEgbnVtYmVyLCByb3VuZGluZyB0b3dhcmRzIHplcm8uXG5cbiAgICB0cnVuY2F0ZSAxLjAgPT0gMVxuXG4gICAgdHJ1bmNhdGUgMS4yID09IDFcblxuICAgIHRydW5jYXRlIDEuNSA9PSAxXG5cbiAgICB0cnVuY2F0ZSAxLjggPT0gMVxuXG4gICAgdHJ1bmNhdGUgLTEuMiA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuNSA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuOCA9PSAtMVxuXG4tfVxudHJ1bmNhdGUgOiBGbG9hdCAtPiBJbnRcbnRydW5jYXRlID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnRydW5jYXRlXG5cblxuey18IFBlcmZvcm0gW21vZHVsYXIgYXJpdGhtZXRpY10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxhcl9hcml0aG1ldGljKS5cbkEgY29tbW9uIHRyaWNrIGlzIHRvIHVzZSAobiBtb2QgMikgdG8gZGV0ZWN0IGV2ZW4gYW5kIG9kZCBudW1iZXJzOlxuXG4gICAgbW9kQnkgMiAwID09IDBcblxuICAgIG1vZEJ5IDIgMSA9PSAxXG5cbiAgICBtb2RCeSAyIDIgPT0gMFxuXG4gICAgbW9kQnkgMiAzID09IDFcblxuT3VyIGBtb2RCeWAgZnVuY3Rpb24gd29ya3MgaW4gdGhlIHR5cGljYWwgbWF0aGVtYXRpY2FsIHdheSB3aGVuIHlvdSBydW4gaW50b1xubmVnYXRpdmUgbnVtYmVyczpcblxuICAgIExpc3QubWFwIChtb2RCeSA0KSBbIC01LCAtNCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICA0LCAgNSBdXG4gICAgLS0gICAgICAgICAgICAgICAgIFsgIDMsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEsICAyLCAgMywgIDAsICAxIF1cblxuVXNlIFtgcmVtYWluZGVyQnlgXSgjcmVtYWluZGVyQnkpIGZvciBhIGRpZmZlcmVudCB0cmVhdG1lbnQgb2YgbmVnYXRpdmUgbnVtYmVycyxcbm9yIHJlYWQgRGFhbiBMZWlqZW7igJlzIFtEaXZpc2lvbiBhbmQgTW9kdWx1cyBmb3IgQ29tcHV0ZXIgU2NpZW50aXN0c11bZG1dIGZvciBtb3JlXG5pbmZvcm1hdGlvbi5cblxuW2RtXTogaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9yZXNlYXJjaC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMi9kaXZtb2Rub3RlLWxldHRlci5wZGZcblxuLX1cbm1vZEJ5IDogSW50IC0+IEludCAtPiBJbnRcbm1vZEJ5ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1vZEJ5XG5cblxuey18IEdldCB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlzaW9uLiBIZXJlIGFyZSBidW5jaCBvZiBleGFtcGxlcyBvZiBkaXZpZGluZyBieSBmb3VyOlxuXG4gICAgTGlzdC5tYXAgKHJlbWFpbmRlckJ5IDQpIFsgLTUsIC00LCAtMywgLTIsIC0xLCAgMCwgIDEsICAyLCAgMywgIDQsICA1IF1cbiAgICAtLSAgICAgICAgICAgICAgICAgICAgICAgWyAtMSwgIDAsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEgXVxuXG5Vc2UgW2Btb2RCeWBdKCNtb2RCeSkgZm9yIGEgZGlmZmVyZW50IHRyZWF0bWVudCBvZiBuZWdhdGl2ZSBudW1iZXJzLFxub3IgcmVhZCBEYWFuIExlaWplbuKAmXMgW0RpdmlzaW9uIGFuZCBNb2R1bHVzIGZvciBDb21wdXRlciBTY2llbnRpc3RzXVtkbV0gZm9yIG1vcmVcbmluZm9ybWF0aW9uLlxuXG5bZG1dOiBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxuXG4tfVxucmVtYWluZGVyQnkgOiBJbnQgLT4gSW50IC0+IEludFxucmVtYWluZGVyQnkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucmVtYWluZGVyQnlcblxuXG57LXwgR2V0IHRoZSBbYWJzb2x1dGUgdmFsdWVdW2Fic10gb2YgYSBudW1iZXIuXG5cbiAgICBhYnMgMTYgPT0gMTZcblxuICAgIGFicyAtNCA9PSA0XG5cbiAgICBhYnMgLTguNSA9PSA4LjVcblxuICAgIGFicyAzLjE0ID09IDMuMTRcblxuW2Fic106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Fic29sdXRlX3ZhbHVlXG5cbi19XG5hYnMgOiBudW1iZXIgLT4gbnVtYmVyXG5hYnMgbiA9XG4gICAgaWYgbiA8IDAgdGhlblxuICAgICAgICAtblxuXG4gICAgZWxzZVxuICAgICAgICBuXG5cbnstfCBUYWtlIHRoZSBzcXVhcmUgcm9vdCBvZiBhIG51bWJlci5cblxuICAgIHNxcnQgNCA9PSAyXG5cbiAgICBzcXJ0IDkgPT0gM1xuXG4gICAgc3FydCAxNiA9PSA0XG5cbiAgICBzcXJ0IDI1ID09IDVcblxuLX1cbnNxcnQgOiBGbG9hdCAtPiBGbG9hdFxuc3FydCA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5zcXJ0XG5cblxuey18IENhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIG9mIGEgbnVtYmVyIHdpdGggYSBnaXZlbiBiYXNlLlxuXG4gICAgbG9nQmFzZSAxMCAxMDAgPT0gMlxuXG4gICAgbG9nQmFzZSAyIDI1NiA9PSA4XG5cbi19XG5sb2dCYXNlIDogRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRcbmxvZ0Jhc2UgYmFzZSBudW1iZXIgPVxuICAgIGlmIGJhc2UgPT0gMTAgdGhlblxuICAgICAgICBHcmVuLktlcm5lbC5NYXRoLmxvZzEwIG51bWJlclxuXG4gICAgZWxzZVxuICAgICAgICAoR3Jlbi5LZXJuZWwuTWF0aC5sb2cgbnVtYmVyKSAvIChHcmVuLktlcm5lbC5NYXRoLmxvZyBiYXNlKVxuXG5cbi0tIEFOR0xFU1xuXG5cbnstfCBDb252ZXJ0IHJhZGlhbnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgcmFkaWFucyBwaSA9PSAzLjE0MTU5MjY1MzU4OTc5M1xuXG4tfVxucmFkaWFucyA6IEZsb2F0IC0+IEZsb2F0XG5yYWRpYW5zIGFuZ2xlSW5SYWRpYW5zID1cbiAgICBhbmdsZUluUmFkaWFuc1xuXG5cbnstfCBDb252ZXJ0IGRlZ3JlZXMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgZGVncmVlcyAxODAgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbmRlZ3JlZXMgOiBGbG9hdCAtPiBGbG9hdFxuZGVncmVlcyBhbmdsZUluRGVncmVlcyA9XG4gICAgKGFuZ2xlSW5EZWdyZWVzICogcGkpIC8gMTgwXG5cblxuey18IENvbnZlcnQgdHVybnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLiBPbmUgdHVybiBpcyBlcXVhbCB0byAzNjDCsC5cblxuICAgIHR1cm5zICgxIC8gMikgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbnR1cm5zIDogRmxvYXQgLT4gRmxvYXRcbnR1cm5zIGFuZ2xlSW5UdXJucyA9XG4gICAgKDIgKiBwaSkgKiBhbmdsZUluVHVybnNcblxuXG4tLSBDT05TVEFOVFNcblxuXG57LXwgQW4gYXBwcm94aW1hdGlvbiBvZiBlLlxuLX1cbmUgOiBGbG9hdFxuZSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5lXG5cblxuey18IEFuIGFwcHJveGltYXRpb24gb2YgcGkuXG4tfVxucGkgOiBGbG9hdFxucGkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucGlcblxuXG57LXwgVGhlIGxhcmdlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBhYm92ZSB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1heFNhZmVJbnRlZ2VyIDogSW50XG5tYXhTYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5tYXhTYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgc21hbGxlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBiZWxvdyB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1pblNhZmVJbnRlZ2VyIDogSW50XG5taW5TYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5taW5TYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgbGFyZ2VzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1heEZsb2F0IDogRmxvYXRcbm1heEZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1heEZsb2F0XG5cblxuey18IFRoZSBzbWFsbGVzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1pbkZsb2F0IDogRmxvYXRcbm1pbkZsb2F0ID1cbiAgICAtbWF4RmxvYXRcblxuXG4tLSBUUklHT05PTUVUUllcblxuXG57LXwgRmlndXJlIG91dCB0aGUgY29zaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBjb3MgKGRlZ3JlZXMgNjApID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4gICAgY29zICh0dXJucyAoMSAvIDYpKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuICAgIGNvcyAocmFkaWFucyAocGkgLyAzKSkgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbiAgICBjb3MgKHBpIC8gMykgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbi19XG5jb3MgOiBGbG9hdCAtPiBGbG9hdFxuY29zID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmNvc1xuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBzaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBzaW4gKGRlZ3JlZXMgMzApID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAodHVybnMgKDEgLyAxMikpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAocmFkaWFucyAocGkgLyA2KSkgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4gICAgc2luIChwaSAvIDYpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuLX1cbnNpbiA6IEZsb2F0IC0+IEZsb2F0XG5zaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguc2luXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIHRhbmdlbnQgZ2l2ZW4gYW4gYW5nbGUgaW4gcmFkaWFucy5cblxuICAgIHRhbiAoZGVncmVlcyA0NSkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbiAgICB0YW4gKHR1cm5zICgxIC8gOCkpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4gICAgdGFuIChyYWRpYW5zIChwaSAvIDQpKSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuICAgIHRhbiAocGkgLyA0KSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuLX1cbnRhbiA6IEZsb2F0IC0+IEZsb2F0XG50YW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGgudGFuXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY2Nvc2luZSBmb3IgYGFkamFjZW50IC8gaHlwb3RlbnVzZWAgaW4gcmFkaWFuczpcblxuICAgIGFjb3MgKDEgLyAyKSA9PSAxLjA0NzE5NzU1MTE5NjU5NzkgLS0gNjDCsCBvciBwaS8zIHJhZGlhbnNcblxuLX1cbmFjb3MgOiBGbG9hdCAtPiBGbG9hdFxuYWNvcyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hY29zXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY3NpbmUgZm9yIGBvcHBvc2l0ZSAvIGh5cG90ZW51c2VgIGluIHJhZGlhbnM6XG5cbiAgICBhc2luICgxIC8gMikgPT0gMC41MjM1OTg3NzU1OTgyOTg5IC0tIDMwwrAgb3IgcGkvNiByYWRpYW5zXG5cbi19XG5hc2luIDogRmxvYXQgLT4gRmxvYXRcbmFzaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXNpblxuXG5cbnstfCBUaGlzIGhlbHBzIHlvdSBmaW5kIHRoZSBhbmdsZSAoaW4gcmFkaWFucykgdG8gYW4gYCh4LHkpYCBjb29yZGluYXRlLCBidXRcbmluIGEgd2F5IHRoYXQgaXMgcmFyZWx5IHVzZWZ1bCBpbiBwcm9ncmFtbWluZy4gKipZb3UgcHJvYmFibHkgd2FudFxuW2BhdGFuMmBdKCNhdGFuMikgaW5zdGVhZCEqKlxuXG5UaGlzIHZlcnNpb24gdGFrZXMgYHkveGAgYXMgaXRzIGFyZ3VtZW50LCBzbyB0aGVyZSBpcyBubyB3YXkgdG8ga25vdyB3aGV0aGVyXG50aGUgbmVnYXRpdmUgc2lnbnMgY29tZXMgZnJvbSB0aGUgYHlgIG9yIGB4YCB2YWx1ZS4gU28gYXMgd2UgZ28gY291bnRlci1jbG9ja3dpc2VcbmFyb3VuZCB0aGUgb3JpZ2luIGZyb20gcG9pbnQgYCgxLDEpYCB0byBgKDEsLTEpYCB0byBgKC0xLC0xKWAgdG8gYCgtMSwxKWAgd2UgZG9cbm5vdCBnZXQgYW5nbGVzIHRoYXQgZ28gaW4gdGhlIGZ1bGwgY2lyY2xlOlxuXG4gICAgYXRhbiAoMSAvIDEpID09IDAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAgNDXCsCBvciAgIHBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbiAoMSAvIC0xKSA9PSAtMC43ODUzOTgxNjMzOTc0NDgzIC0tIDMxNcKwIG9yIDcqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuICgtMSAvIC0xKSA9PSAwLjc4NTM5ODE2MzM5NzQ0ODMgLS0gIDQ1wrAgb3IgICBwaS80IHJhZGlhbnNcblxuICAgIGF0YW4gKC0xIC8gMSkgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG5Ob3RpY2UgdGhhdCBldmVyeXRoaW5nIGlzIGJldHdlZW4gYHBpLzJgIGFuZCBgLXBpLzJgLiBUaGF0IGlzIHByZXR0eSB1c2VsZXNzXG5mb3IgZmlndXJpbmcgb3V0IGFuZ2xlcyBpbiBhbnkgc29ydCBvZiB2aXN1YWxpemF0aW9uLCBzbyBhZ2FpbiwgY2hlY2sgb3V0XG5bYGF0YW4yYF0oI2F0YW4yKSBpbnN0ZWFkIVxuXG4tfVxuYXRhbiA6IEZsb2F0IC0+IEZsb2F0XG5hdGFuID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmF0YW5cblxuXG57LXwgVGhpcyBoZWxwcyB5b3UgZmluZCB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHRvIGFuIGAoeCx5KWAgY29vcmRpbmF0ZS5cblNvIHJhdGhlciB0aGFuIHNheWluZyBgYXRhbiAoeS94KWAgeW91IHNheSBgYXRhbjIgeSB4YCBhbmQgeW91IGNhbiBnZXQgYSBmdWxsXG5yYW5nZSBvZiBhbmdsZXM6XG5cbiAgICBhdGFuMiAxIDEgPT0gMC43ODUzOTgxNjMzOTc0NDgzIC0tICA0NcKwIG9yICAgcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAxIC0xID09IDIuMzU2MTk0NDkwMTkyMzQ1IC0tIDEzNcKwIG9yIDMqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAtMSAtMSA9PSAtMi4zNTYxOTQ0OTAxOTIzNDUgLS0gMjI1wrAgb3IgNSpwaS80IHJhZGlhbnNcblxuICAgIGF0YW4yIC0xIDEgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG4tfVxuYXRhbjIgOiBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdFxuYXRhbjIgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXRhbjJcbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLktleWVkIGV4cG9zaW5nXG4gICggbm9kZVxuICAsIG9sXG4gICwgdWxcbiAgKVxuXG5cbnstfCBBIGtleWVkIG5vZGUgaGVscHMgb3B0aW1pemUgY2FzZXMgd2hlcmUgY2hpbGRyZW4gYXJlIGdldHRpbmcgYWRkZWQsIG1vdmVkLFxucmVtb3ZlZCwgZXRjLiBDb21tb24gZXhhbXBsZXMgaW5jbHVkZTpcblxuICAtIFRoZSB1c2VyIGNhbiBkZWxldGUgaXRlbXMgZnJvbSBhIGxpc3QuXG4gIC0gVGhlIHVzZXIgY2FuIGNyZWF0ZSBuZXcgaXRlbXMgaW4gYSBsaXN0LlxuICAtIFlvdSBjYW4gc29ydCBhIGxpc3QgYmFzZWQgb24gbmFtZSBvciBkYXRlIG9yIHdoYXRldmVyLlxuXG5XaGVuIHlvdSB1c2UgYSBrZXllZCBub2RlLCBldmVyeSBjaGlsZCBpcyBwYWlyZWQgd2l0aCBhIHN0cmluZyBpZGVudGlmaWVyLiBUaGlzXG5tYWtlcyBpdCBwb3NzaWJsZSBmb3IgdGhlIHVuZGVybHlpbmcgZGlmZmluZyBhbGdvcml0aG0gdG8gcmV1c2Ugbm9kZXMgbW9yZVxuZWZmaWNpZW50bHkuXG5cbiMjIEtleWVkIE5vZGVzXG5AZG9jcyBub2RlXG5cbiMjIENvbW1vbmx5IEtleWVkIE5vZGVzXG5AZG9jcyBvbCwgdWxcbi19XG5cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbClcbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuey18IFdvcmtzIGp1c3QgbGlrZSBgSHRtbC5ub2RlYCwgYnV0IHlvdSBhZGQgYSB1bmlxdWUgaWRlbnRpZmllciB0byBlYWNoIGNoaWxkXG5ub2RlLiBZb3Ugd2FudCB0aGlzIHdoZW4geW91IGhhdmUgYSBsaXN0IG9mIG5vZGVzIHRoYXQgaXMgY2hhbmdpbmc6IGFkZGluZ1xubm9kZXMsIHJlbW92aW5nIG5vZGVzLCBldGMuIEluIHRoZXNlIGNhc2VzLCB0aGUgdW5pcXVlIGlkZW50aWZpZXJzIGhlbHAgbWFrZVxudGhlIERPTSBtb2RpZmljYXRpb25zIG1vcmUgZWZmaWNpZW50LlxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfSAtPiBIdG1sIG1zZ1xubm9kZSA9XG4gIFZpcnR1YWxEb20ua2V5ZWROb2RlXG5cblxuey18LX1cbm9sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfSAtPiBIdG1sIG1zZ1xub2wgPVxuICBub2RlIFwib2xcIlxuXG5cbnstfC19XG51bCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbnVsID1cbiAgbm9kZSBcInVsXCJcbiIKICAgIF0sCiAgICAibmFtZXMiOiBbCiAgICAgICAgIkRpY3QuZm9sZGwiLAogICAgICAgICJmdW5jIiwKICAgICAgICAiYWNjIiwKICAgICAgICAiZGljdCIsCiAgICAgICAgImtleSIsCiAgICAgICAgInZhbHVlIiwKICAgICAgICAibGVmdCIsCiAgICAgICAgInJpZ2h0IiwKICAgICAgICAiQXJyYXkubGVuZ3RoIiwKICAgICAgICAiX0FycmF5X2xlbmd0aCIsCiAgICAgICAgIkFycmF5LnB1c2hMYXN0IiwKICAgICAgICAiYXJyYXkiLAogICAgICAgICJfQXJyYXlfc3BsaWNlMSIsCiAgICAgICAgIkRpY3Qua2V5cyIsCiAgICAgICAgImtleUFycmF5IiwKICAgICAgICAiU2V0LnRvQXJyYXkiLAogICAgICAgICJfdjAiLAogICAgICAgICJCYXNpY3MuYXBSIiwKICAgICAgICAieCIsCiAgICAgICAgImYiLAogICAgICAgICJCYXNpY3MuaWRlbnRpdHkiLAogICAgICAgICJEYXRhVGFibGUubmV3IiwKICAgICAgICAiaWQiLAogICAgICAgICJkIiwKICAgICAgICAiYiIsCiAgICAgICAgIkRhdGFUYWJsZS5Ob1BhZ2luYXRpb24iLAogICAgICAgICJrIiwKICAgICAgICAibCIsCiAgICAgICAgIkJhc2ljcy5hcEwiLAogICAgICAgICJCYXNpY3MuYXBwZW5kIiwKICAgICAgICAiX1V0aWxzX2FwcGVuZCIsCiAgICAgICAgIkFycmF5LnNvcnQiLAogICAgICAgICJfQXJyYXlfc29ydCIsCiAgICAgICAgIkRhdGFUYWJsZS5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCIsCiAgICAgICAgImRlZmF1bHRQYWdlU2l6ZSIsCiAgICAgICAgIm90aGVyUGFnZVNpemVzIiwKICAgICAgICAic3RhdGUiLAogICAgICAgICJjdXJyZW50U3RhdGUiLAogICAgICAgICJEYXRhVGFibGUuU2Nyb2xsZXIiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlQWN0aXZlUm93SWQiLAogICAgICAgICJuZXdBY3RpdmVSb3dJZCIsCiAgICAgICAgInBhZ2VTaXplIiwKICAgICAgICAicGFnaW5hdGlvbiIsCiAgICAgICAgInNvcnRDb2x1bW5zIiwKICAgICAgICAidGFibGVJZCIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVTb3J0U3RhdGUiLAogICAgICAgICJuZXdTb3J0Q29sdW1uIiwKICAgICAgICAic29ydERpcmVjdGlvbiIsCiAgICAgICAgImFjdGl2ZVJvd0lkIiwKICAgICAgICAiYWUiLAogICAgICAgICJQIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQuaW5pdCIsCiAgICAgICAgInBlb3BsZSIsCiAgICAgICAgIm1vZGVsIiwKICAgICAgICAiYnoiLAogICAgICAgICJhTCIsCiAgICAgICAgImFUIiwKICAgICAgICAiRGF0YVRhYmxlLmluaXRpYWxTb3J0IiwKICAgICAgICAiaGVhZGVyIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLmluaXQiLAogICAgICAgICJTaGFyZWQuRXhhbXBsZURhdGEucGVyc29uV2l0aE5hbWVZZWFyQ2l0eVN0YXRlIiwKICAgICAgICAibmFtZSIsCiAgICAgICAgInllYXIiLAogICAgICAgICJjaXR5IiwKICAgICAgICAiYTkiLAogICAgICAgICJpIiwKICAgICAgICAiYkwiLAogICAgICAgICJiVCIsCiAgICAgICAgIlNoYXJlZC5FeGFtcGxlRGF0YS5wcmVzaWRlbnRzIiwKICAgICAgICAiRG9jQm9vay5pbml0IiwKICAgICAgICAiQyIsCiAgICAgICAgIk0iLAogICAgICAgICJOIiwKICAgICAgICAiQmFzaWNzLmFkZCIsCiAgICAgICAgIl9CYXNpY3NfYWRkIiwKICAgICAgICAiU3RyaW5nLmFueSIsCiAgICAgICAgIl9TdHJpbmdfYW55IiwKICAgICAgICAiQmFzaWNzLmNvbXBvc2VMIiwKICAgICAgICAiZyIsCiAgICAgICAgIkJhc2ljcy5ub3QiLAogICAgICAgICJfQmFzaWNzX25vdCIsCiAgICAgICAgIlN0cmluZy5hbGwiLAogICAgICAgICJpc0dvb2QiLAogICAgICAgICJzdHIiLAogICAgICAgICJCYXNpY3MuYW5kIiwKICAgICAgICAiX0Jhc2ljc19hbmQiLAogICAgICAgICJKc29uLkVuY29kZS5lbmNvZGUiLAogICAgICAgICJfSnNvbl9lbmNvZGUiLAogICAgICAgICJTdHJpbmcuZnJvbUludCIsCiAgICAgICAgIl9TdHJpbmdfZnJvbU51bWJlciIsCiAgICAgICAgIlN0cmluZy5qb2luIiwKICAgICAgICAiX1N0cmluZ19qb2luIiwKICAgICAgICAiU3RyaW5nLnNwbGl0IiwKICAgICAgICAiX1N0cmluZ19zcGxpdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLmluZGVudCIsCiAgICAgICAgIkFycmF5LmluZGV4ZWRNYXAiLAogICAgICAgICJfQXJyYXlfaW5kZXhlZE1hcCIsCiAgICAgICAgIkJhc2ljcy5sZSIsCiAgICAgICAgIl9VdGlsc19sZSIsCiAgICAgICAgIkNoYXIudG9Db2RlIiwKICAgICAgICAiX0NoYXJfdG9Db2RlIiwKICAgICAgICAiQ2hhci5pc0xvd2VyIiwKICAgICAgICAiX2NoYXIiLAogICAgICAgICJjb2RlIiwKICAgICAgICAiY2hhciIsCiAgICAgICAgIkNoYXIuaXNVcHBlciIsCiAgICAgICAgIkJhc2ljcy5vciIsCiAgICAgICAgIl9CYXNpY3Nfb3IiLAogICAgICAgICJDaGFyLmlzQWxwaGEiLAogICAgICAgICJDaGFyLmlzRGlnaXQiLAogICAgICAgICJDaGFyLmlzQWxwaGFOdW0iLAogICAgICAgICJTdHJpbmcucG9wRmlyc3QiLAogICAgICAgICJfU3RyaW5nX3BvcEZpcnN0IiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JPbmVPZiIsCiAgICAgICAgImVycm9yIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JUb1N0cmluZyIsCiAgICAgICAgIkpzb24uRGVjb2RlLmVycm9yVG9TdHJpbmdIZWxwIiwKICAgICAgICAiY29udGV4dCIsCiAgICAgICAgImlzU2ltcGxlIiwKICAgICAgICAiX3YyIiwKICAgICAgICAicmVzdCIsCiAgICAgICAgImZpZWxkTmFtZSIsCiAgICAgICAgImVyciIsCiAgICAgICAgImluZGV4TmFtZSIsCiAgICAgICAgInN0YXJ0ZXIiLAogICAgICAgICJpbnRyb2R1Y3Rpb24iLAogICAgICAgICJlcnJvcnMiLAogICAgICAgICJqc29uIiwKICAgICAgICAibXNnIiwKICAgICAgICAiUmVzdWx0LmlzT2siLAogICAgICAgICJyZXN1bHQiLAogICAgICAgICJKc29uLkRlY29kZS5tYXAiLAogICAgICAgICJfSnNvbl9tYXAxIiwKICAgICAgICAiSnNvbi5EZWNvZGUubWFwMiIsCiAgICAgICAgIl9Kc29uX21hcDIiLAogICAgICAgICJKc29uLkRlY29kZS5zdWNjZWVkIiwKICAgICAgICAiX0pzb25fc3VjY2VlZCIsCiAgICAgICAgIlZpcnR1YWxEb20udG9IYW5kbGVySW50IiwKICAgICAgICAiaGFuZGxlciIsCiAgICAgICAgIlN0cmluZy5jb250YWlucyIsCiAgICAgICAgIl9TdHJpbmdfY29udGFpbnMiLAogICAgICAgICJCYXNpY3MubHQiLAogICAgICAgICJfVXRpbHNfbHQiLAogICAgICAgICJTdHJpbmcuc2xpY2UiLAogICAgICAgICJfU3RyaW5nX3NsaWNlIiwKICAgICAgICAiU3RyaW5nLnVuaXRMZW5ndGgiLAogICAgICAgICJfU3RyaW5nX3VuaXRMZW5ndGgiLAogICAgICAgICJTdHJpbmcuZHJvcEZpcnN0IiwKICAgICAgICAibiIsCiAgICAgICAgInN0cmluZyIsCiAgICAgICAgIlN0cmluZy5pbmRpY2VzIiwKICAgICAgICAiX1N0cmluZ19pbmRleGVzIiwKICAgICAgICAiQmFzaWNzLmVxIiwKICAgICAgICAiX1V0aWxzX2VxdWFsIiwKICAgICAgICAiU3RyaW5nLmlzRW1wdHkiLAogICAgICAgICJTdHJpbmcudGFrZUZpcnN0IiwKICAgICAgICAiU3RyaW5nLnRvSW50IiwKICAgICAgICAiX1N0cmluZ190b0ludCIsCiAgICAgICAgIlVybC5jaG9tcEJlZm9yZVBhdGgiLAogICAgICAgICJwcm90b2NvbCIsCiAgICAgICAgInBhdGgiLAogICAgICAgICJwYXJhbXMiLAogICAgICAgICJmcmFnIiwKICAgICAgICAiTWF5YmUuTm90aGluZyIsCiAgICAgICAgIk1heWJlLkp1c3QiLAogICAgICAgICJYIiwKICAgICAgICAiYXgiLAogICAgICAgICJaIiwKICAgICAgICAiYUYiLAogICAgICAgICJhSiIsCiAgICAgICAgIl92MSIsCiAgICAgICAgInBvcnRfIiwKICAgICAgICAiQXJyYXkuZ2V0IiwKICAgICAgICAiX0FycmF5X2dldCIsCiAgICAgICAgIlVybC5jaG9tcEJlZm9yZVF1ZXJ5IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlRnJhZ21lbnQiLAogICAgICAgICJVcmwuY2hvbXBBZnRlclByb3RvY29sIiwKICAgICAgICAiU3RyaW5nLnN0YXJ0c1dpdGgiLAogICAgICAgICJfU3RyaW5nX3N0YXJ0c1dpdGgiLAogICAgICAgICJVcmwuZnJvbVN0cmluZyIsCiAgICAgICAgIkJhc2ljcy5uZXZlciIsCiAgICAgICAgIm52ciIsCiAgICAgICAgIlRhc2suc3VjY2VlZCIsCiAgICAgICAgIl9TY2hlZHVsZXJfc3VjY2VlZCIsCiAgICAgICAgIlRhc2suaW5pdCIsCiAgICAgICAgIkFycmF5Lm1hcCIsCiAgICAgICAgIl9BcnJheV9tYXAiLAogICAgICAgICJUYXNrLmFuZFRoZW4iLAogICAgICAgICJfU2NoZWR1bGVyX2FuZFRoZW4iLAogICAgICAgICJUYXNrLm1hcCIsCiAgICAgICAgInRhc2tBIiwKICAgICAgICAiYSIsCiAgICAgICAgIkFycmF5LmZvbGRyIiwKICAgICAgICAiX0FycmF5X2ZvbGRyIiwKICAgICAgICAiVGFzay5tYXAyIiwKICAgICAgICAidGFza0IiLAogICAgICAgICJBcnJheS5wdXNoRmlyc3QiLAogICAgICAgICJUYXNrLnNlcXVlbmNlIiwKICAgICAgICAidGFza3MiLAogICAgICAgICJQbGF0Zm9ybS5zZW5kVG9BcHAiLAogICAgICAgICJfUGxhdGZvcm1fc2VuZFRvQXBwIiwKICAgICAgICAiVGFzay5zcGF3bkNtZCIsCiAgICAgICAgInJvdXRlciIsCiAgICAgICAgImNtZCIsCiAgICAgICAgIl9TY2hlZHVsZXJfc3Bhd24iLAogICAgICAgICJ0YXNrIiwKICAgICAgICAiVGFzay5vbkVmZmVjdHMiLAogICAgICAgICJjb21tYW5kcyIsCiAgICAgICAgIlRhc2sub25TZWxmTXNnIiwKICAgICAgICAiVGFzay5jbWRNYXAiLAogICAgICAgICJ0YWdnZXIiLAogICAgICAgICJUYXNrLlBlcmZvcm0iLAogICAgICAgICJUYXNrLkV4ZWN1dGUiLAogICAgICAgICJUYXNrLnBlcmZvcm0iLAogICAgICAgICJ0b01lc3NhZ2UiLAogICAgICAgICJUYXNrLmNvbW1hbmQiLAogICAgICAgICJQbGF0Zm9ybS5DbWQuYmF0Y2giLAogICAgICAgICJfUGxhdGZvcm1fYmF0Y2giLAogICAgICAgICJQbGF0Zm9ybS5DbWQubm9uZSIsCiAgICAgICAgIlBsYXRmb3JtLlN1Yi5iYXRjaCIsCiAgICAgICAgIlBsYXRmb3JtLlN1Yi5ub25lIiwKICAgICAgICAiQnJvd3Nlci5zYW5kYm94IiwKICAgICAgICAiaW1wbCIsCiAgICAgICAgIl9Ccm93c2VyX2VsZW1lbnQiLAogICAgICAgICJibCIsCiAgICAgICAgImFvIiwKICAgICAgICAiYUIiLAogICAgICAgICJiTyIsCiAgICAgICAgImJRIiwKICAgICAgICAiYlIiLAogICAgICAgICJFeGFtcGxlLlBhZ2luYXRlZC51cGRhdGUiLAogICAgICAgICJuZXdRdWVyeSIsCiAgICAgICAgIm5ld1N0YXRlIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLnVwZGF0ZSIsCiAgICAgICAgIkRvY0Jvb2sudXBkYXRlIiwKICAgICAgICAiZXhhbXBsZVRvU3dpdGNoVG8iLAogICAgICAgICJleGFtcGxlTXNnIiwKICAgICAgICAiVmlydHVhbERvbS5ub2RlIiwKICAgICAgICAidGFnIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9kZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vU2NyaXB0IiwKICAgICAgICAiSHRtbC5ub2RlIiwKICAgICAgICAiSHRtbC5hcnRpY2xlIiwKICAgICAgICAiSHRtbC5idXR0b24iLAogICAgICAgICJEb2NCb29rLmJ1dHRvbnMiLAogICAgICAgICJWaXJ0dWFsRG9tLnByb3BlcnR5IiwKICAgICAgICAiX1ZpcnR1YWxEb21fcHJvcGVydHkiLAogICAgICAgICJfVmlydHVhbERvbV9ub0lubmVySHRtbE9yRm9ybUFjdGlvbiIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5wcm9wZXJ0eSIsCiAgICAgICAgIkpzb24uRW5jb2RlLnN0cmluZyIsCiAgICAgICAgIl9Kc29uX3dyYXAiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuc3RyaW5nUHJvcGVydHkiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuY2xhc3MiLAogICAgICAgICJIdG1sLmRpdiIsCiAgICAgICAgIkRvY0Jvb2suZXhhbXBsZU5hbWUiLAogICAgICAgICJ2YXJpYW50IiwKICAgICAgICAiSHRtbC5oMyIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5pZCIsCiAgICAgICAgIlZpcnR1YWxEb20ubWFwIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbWFwIiwKICAgICAgICAiSHRtbC5tYXAiLAogICAgICAgICJIdG1sLm5hdiIsCiAgICAgICAgIkJhc2ljcy5uZWdhdGUiLAogICAgICAgICJWaXJ0dWFsRG9tLm9uIiwKICAgICAgICAiX1ZpcnR1YWxEb21fb24iLAogICAgICAgICJIdG1sLkV2ZW50cy5vbiIsCiAgICAgICAgImV2ZW50IiwKICAgICAgICAiZGVjb2RlciIsCiAgICAgICAgIlZpcnR1YWxEb20uTm9ybWFsIiwKICAgICAgICAiSHRtbC5FdmVudHMub25DbGljayIsCiAgICAgICAgIlZpcnR1YWxEb20uYXR0cmlidXRlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fYXR0cmlidXRlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9Pbk9yRm9ybUFjdGlvbiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5hdHRyaWJ1dGUiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMudGFiaW5kZXgiLAogICAgICAgICJWaXJ0dWFsRG9tLnRleHQiLAogICAgICAgICJfVmlydHVhbERvbV90ZXh0IiwKICAgICAgICAiSHRtbC50ZXh0IiwKICAgICAgICAiQXJyYXkua2VlcElmIiwKICAgICAgICAiX0FycmF5X2ZpbHRlciIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5jbGFzc0xpc3QiLAogICAgICAgICJjbGFzc2VzIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNvbHNwYW4iLAogICAgICAgICJCYXNpY3MuZ3QiLAogICAgICAgICJfVXRpbHNfZ3QiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYS5sYWJlbCIsCiAgICAgICAgIkFycmF5LmZpbmRGaXJzdCIsCiAgICAgICAgIl9BcnJheV9maW5kRmlyc3QiLAogICAgICAgICJBcnJheS5tZW1iZXIiLAogICAgICAgICJ2IiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnJvd3NwYW4iLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYS5zb3J0IiwKICAgICAgICAiRGF0YVRhYmxlLnNvcnREaXJlY3Rpb25Ub1N0cmluZyIsCiAgICAgICAgIkh0bWwuc3BhbiIsCiAgICAgICAgIlZpcnR1YWxEb20uc3R5bGUiLAogICAgICAgICJfVmlydHVhbERvbV9zdHlsZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5zdHlsZSIsCiAgICAgICAgIkh0bWwuc3VwIiwKICAgICAgICAiSHRtbC50aCIsCiAgICAgICAgIkh0bWwudHIiLAogICAgICAgICJEYXRhVGFibGUuZGVmYXVsdFRhYmxlSGVhZGVyIiwKICAgICAgICAiaGVhZGVySW5mb3MiLAogICAgICAgICJkZWZhdWx0VEgiLAogICAgICAgICJfdjMiLAogICAgICAgICJzb3J0U2VxdWVuY2VOdW1iZXIiLAogICAgICAgICJzb3J0UmFuayIsCiAgICAgICAgInJvd0FuZENvbFNwYW4iLAogICAgICAgICJpc1NvcnRlZCIsCiAgICAgICAgInZpZXdlZFNvcnREaXJlY3Rpb24iLAogICAgICAgICJjb2x1bW5UaXRsZSIsCiAgICAgICAgImNvbHVtbk9yZGVyIiwKICAgICAgICAic29ydERpcmVjdGlvbnMiLAogICAgICAgICJvIiwKICAgICAgICAiY2FuQmVTb3J0ZWQiLAogICAgICAgICJ0aENsYXNzZXMiLAogICAgICAgICJhcmlhU29ydCIsCiAgICAgICAgInRoQXR0cmlidXRlcyIsCiAgICAgICAgImNsaWNrQWN0aW9ucyIsCiAgICAgICAgIkQiLAogICAgICAgICJFIiwKICAgICAgICAiRGF0YVRhYmxlLmdldEFjdGl2ZVJvd0lkIiwKICAgICAgICAiRGF0YVRhYmxlLnNpbXBsZVJvd0F0dHJzIiwKICAgICAgICAidG9JZCIsCiAgICAgICAgInRvTXNnIiwKICAgICAgICAiZGF0YSIsCiAgICAgICAgImlzX2N1cnJlbnRfcm93IiwKICAgICAgICAiRGF0YVRhYmxlLmRlZmF1bHRDdXN0b21pemF0aW9ucyIsCiAgICAgICAgImE0IiwKICAgICAgICAiYTEiLAogICAgICAgICJhMyIsCiAgICAgICAgImFtIiwKICAgICAgICAiYmIiLAogICAgICAgICJhTiIsCiAgICAgICAgImFTIiwKICAgICAgICAiYVUiLAogICAgICAgICJhViIsCiAgICAgICAgImFXIiwKICAgICAgICAiRGF0YVRhYmxlLmNvbmZpZyIsCiAgICAgICAgImFuIiwKICAgICAgICAiY0RhdGEiLAogICAgICAgICJjb2x1bW5zIiwKICAgICAgICAiYXAiLAogICAgICAgICJhWiIsCiAgICAgICAgImEkIiwKICAgICAgICAiQXJyYXkuc29ydEJ5IiwKICAgICAgICAiX0FycmF5X3NvcnRCeSIsCiAgICAgICAgIkRhdGFUYWJsZS5pbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkiLAogICAgICAgICJ0b0NvbXBhcmFibGUiLAogICAgICAgICJEYXRhVGFibGUuSW5jT3JEZWMiLAogICAgICAgICJEYXRhVGFibGUudGV4dERldGFpbHMiLAogICAgICAgICJEYXRhVGFibGUuaW50Q29sdW1uIiwKICAgICAgICAidG9JbnQiLAogICAgICAgICJ6IiwKICAgICAgICAiQiIsCiAgICAgICAgIkRhdGFUYWJsZS5zdHJpbmdDb2x1bW4iLAogICAgICAgICJ0b1N0ciIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLmNvbmZpZyIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJIdG1sLmgxIiwKICAgICAgICAiSHRtbC5pbnB1dCIsCiAgICAgICAgIkh0bWwuRXZlbnRzLmFsd2F5c1N0b3AiLAogICAgICAgICJoIiwKICAgICAgICAiQSIsCiAgICAgICAgIkh0bWwuRXZlbnRzLnN0b3BQcm9wYWdhdGlvbk9uIiwKICAgICAgICAiVmlydHVhbERvbS5NYXlTdG9wUHJvcGFnYXRpb24iLAogICAgICAgICJKc29uLkRlY29kZS5maWVsZCIsCiAgICAgICAgIl9Kc29uX2RlY29kZUZpZWxkIiwKICAgICAgICAiSnNvbi5EZWNvZGUuYXQiLAogICAgICAgICJmaWVsZHMiLAogICAgICAgICJKc29uLkRlY29kZS5zdHJpbmciLAogICAgICAgICJfSnNvbl9kZWNvZGVTdHJpbmciLAogICAgICAgICJIdG1sLkV2ZW50cy50YXJnZXRWYWx1ZSIsCiAgICAgICAgIkh0bWwuRXZlbnRzLm9uSW5wdXQiLAogICAgICAgICJEYXRhVGFibGUuZ2V0UGFnZVNpemUiLAogICAgICAgICJIdG1sLm9wdGlvbiIsCiAgICAgICAgIkh0bWwuc2VsZWN0IiwKICAgICAgICAiSnNvbi5FbmNvZGUuYm9vbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5ib29sUHJvcGVydHkiLAogICAgICAgICJib29sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnNlbGVjdGVkIiwKICAgICAgICAiQmFzaWNzLmdlIiwKICAgICAgICAiX1V0aWxzX2dlIiwKICAgICAgICAiQXJyYXkuc2xpY2UiLAogICAgICAgICJfQXJyYXlfc2xpY2UiLAogICAgICAgICJBcnJheS5kcm9wRmlyc3QiLAogICAgICAgICJBcnJheS5maXJzdCIsCiAgICAgICAgIkFycmF5LnBvcEZpcnN0IiwKICAgICAgICAiYmgiLAogICAgICAgICJiRCIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVQYWdlU2l6ZSIsCiAgICAgICAgIm1pbmltdW1OZXdQYWdlU2l6ZSIsCiAgICAgICAgIm5leHRIaWdoZXJJbkxpc3QiLAogICAgICAgICJpbnB1dCIsCiAgICAgICAgImxpc3QiLAogICAgICAgICJuZXdQYWdlU2l6ZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy52YWx1ZSIsCiAgICAgICAgIk1heWJlLndpdGhEZWZhdWx0IiwKICAgICAgICAiX2RlZmF1bHQiLAogICAgICAgICJtYXliZSIsCiAgICAgICAgImRlZmF1bHQiLAogICAgICAgICJEYXRhVGFibGUucGFnZUxlbmd0aENob29zZXIiLAogICAgICAgICJ0YWJsZVN0YXRlIiwKICAgICAgICAidmlld09wdGlvbiIsCiAgICAgICAgInZhbHVlcyIsCiAgICAgICAgInZhbCIsCiAgICAgICAgImh0bWwiLAogICAgICAgICJvblBhZ2VTaXplQ2hvaWNlIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnBsYWNlaG9sZGVyIiwKICAgICAgICAiU3RyaW5nLnRvTG93ZXIiLAogICAgICAgICJfU3RyaW5nX3RvTG93ZXIiLAogICAgICAgICJIdG1sLmNhcHRpb24iLAogICAgICAgICJCYXNpY3MuY29tcGFyZSIsCiAgICAgICAgIl9VdGlsc19jb21wYXJlIiwKICAgICAgICAiQmFzaWNzLmlkaXYiLAogICAgICAgICJfQmFzaWNzX2lkaXYiLAogICAgICAgICJNYXRoLm1vZEJ5IiwKICAgICAgICAiX01hdGhfbW9kQnkiLAogICAgICAgICJEYXRhVGFibGUuaXNFdmVuIiwKICAgICAgICAiX2ludCIsCiAgICAgICAgImludCIsCiAgICAgICAgIk1heWJlLm1hcCIsCiAgICAgICAgIkJhc2ljcy5tdWwiLAogICAgICAgICJfQmFzaWNzX211bCIsCiAgICAgICAgIkRhdGFUYWJsZS5uZWdhdGl2ZVRvWmVybyIsCiAgICAgICAgIkJhc2ljcy5zdWIiLAogICAgICAgICJfQmFzaWNzX3N1YiIsCiAgICAgICAgIkFycmF5LnRha2VGaXJzdCIsCiAgICAgICAgIkRhdGFUYWJsZS5nZXRQYWdpbmF0ZWREYXRhIiwKICAgICAgICAicm93Q3Vyc29yIiwKICAgICAgICAicHJlY2VkaW5nRnVsbFBhZ2VzIiwKICAgICAgICAibGFzdFJvd09uUGFnZSIsCiAgICAgICAgIl92NyIsCiAgICAgICAgImxhc3RSb3dCZWZvcmVQYWdlIiwKICAgICAgICAiX3Y0IiwKICAgICAgICAiQXJyYXkucmV2ZXJzZSIsCiAgICAgICAgIl9BcnJheV9yZXZlcnNlIiwKICAgICAgICAiRGF0YVRhYmxlLmFwcGx5U29ydGVyIiwKICAgICAgICAic29ydGVyIiwKICAgICAgICAic3J0IiwKICAgICAgICAiRGF0YVRhYmxlLmZpbmRTb3J0ZXIiLAogICAgICAgICJzZWxlY3RlZENvbHVtbiIsCiAgICAgICAgIkRhdGFUYWJsZS5zb3J0IiwKICAgICAgICAiX3Y1IiwKICAgICAgICAic29ydENvbHVtbk5hbWUiLAogICAgICAgICJEYXRhVGFibGUuZ2V0U29ydGVkRGF0YSIsCiAgICAgICAgIlZpcnR1YWxEb20ua2V5ZWROb2RlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fa2V5ZWROb2RlIiwKICAgICAgICAiSHRtbC5LZXllZC5ub2RlIiwKICAgICAgICAiSHRtbC50YWJsZSIsCiAgICAgICAgIkh0bWwudGZvb3QiLAogICAgICAgICJIdG1sLnRoZWFkIiwKICAgICAgICAiRGF0YVRhYmxlLnRvSGVhZGVyIiwKICAgICAgICAiRGF0YVRhYmxlLmhlYWRlckluZm8iLAogICAgICAgICJzZWxlY3RlZCIsCiAgICAgICAgImJhIiwKICAgICAgICAiYkgiLAogICAgICAgICJhUSIsCiAgICAgICAgIkh0bWwuRXZlbnRzLm9uTW91c2VVcCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy50aXRsZSIsCiAgICAgICAgIkJhc2ljcy5uZXEiLAogICAgICAgICJfVXRpbHNfbm90RXF1YWwiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlTXVsdGlTb3J0U3RhdGUiLAogICAgICAgICJuZXdTb3J0U3RhdGUiLAogICAgICAgICJEYXRhVGFibGUub25Db2x1bW5IZWFkZXIiLAogICAgICAgICJEYXRhVGFibGUudG9IZWFkZXJJbmZvIiwKICAgICAgICAiaW5kZXhlZExpc3QiLAogICAgICAgICJpZHgiLAogICAgICAgICJiciIsCiAgICAgICAgImJFIiwKICAgICAgICAibm9uRW1wdHlMaXN0IiwKICAgICAgICAiZmlsdGVyZWRMaXN0IiwKICAgICAgICAiX3Y4IiwKICAgICAgICAiX3Y2IiwKICAgICAgICAiYksiLAogICAgICAgICJpbmRleCIsCiAgICAgICAgInJldmVyc2UiLAogICAgICAgICJyZXZlcnNlZFNvcnREaXJlY3Rpb24iLAogICAgICAgICJIdG1sLnRkIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdDZWxsIiwKICAgICAgICAiZGV0YWlscyIsCiAgICAgICAgInZpZXdEYXRhIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdSb3dIZWxwIiwKICAgICAgICAidG9Sb3dBdHRycyIsCiAgICAgICAgIkRhdGFUYWJsZS52aWV3Um93IiwKICAgICAgICAiYnAiLAogICAgICAgICJidyIsCiAgICAgICAgIkRhdGFUYWJsZS52aWV3IiwKICAgICAgICAiY29uZiIsCiAgICAgICAgInJvd3MiLAogICAgICAgICJ0Ym9keSIsCiAgICAgICAgImN1c3RvbWl6YXRpb25zIiwKICAgICAgICAid2l0aEZvb3QiLAogICAgICAgICJhdHRyaWJ1dGVzIiwKICAgICAgICAiY2hpbGRyZW4iLAogICAgICAgICJoZWFkZXJzIiwKICAgICAgICAidGhlYWREZXRhaWxzIiwKICAgICAgICAidGhlYWQiLAogICAgICAgICJFeGFtcGxlLlBhZ2luYXRlZC52aWV3IiwKICAgICAgICAibG93ZXJRdWVyeSIsCiAgICAgICAgInF1ZXJ5IiwKICAgICAgICAiYWNjZXB0YWJsZVBlb3BsZSIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLlNldFF1ZXJ5IiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLmNvbmZpZyIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5TZXRUYWJsZVN0YXRlIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLnZpZXciLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMuU2V0UXVlcnkiLAogICAgICAgICJEb2NCb29rLnZpZXciLAogICAgICAgICJpc0FjdGl2ZSIsCiAgICAgICAgInZhcmlhbnRzIiwKICAgICAgICAiRG9jQm9vay5Td2l0Y2hFeGFtcGxlIiwKICAgICAgICAiRG9jQm9vay5QcmVzaWRlbnRzTXNnIiwKICAgICAgICAiRG9jQm9vay5QYWdpbmF0ZWRNc2ciLAogICAgICAgICJEb2NCb29rLm1haW4iCiAgICBdLAogICAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdsQkFBLHVDQUFNQyxNQUFLQyxLQUFJQzs7OztVQUdIRDs7Ozs7OztvQkFHTUQ7ZUFBS0EsR0FBQ0EsTUFBS0csS0FBSUMsT0FBTUwsNEJBQU9DLE1BQUtDLEtBQUlJO2dCQUFPQzs7Ozs7Ozs7O0lDM1Y5REMsK0JBQ0lDO0lBZ1FKQywyQ0FBU0wsT0FBTU07UUFDWEMsR0FBQUEsZ0JBQTBCSiw2QkFBUUcsUUFBTyxHQUFFTixPQUFNTTs7O0lEcUxyREUscUNBQUtWO1FBQ0RILCtCQUFNLFNBQUVJLEtBQUlDLE9BQU1TO1dBQVlKLGdDQUFlTixLQUFJVTtPQUFVLEdBQUMsR0FBRVg7O0lFMWZsRVksdUNBQVNDOztRQUNMSCwwQkFBVVY7Ozs7Ozs7Ozs7SUNtZGRjLHVDQUFJQyxHQUFFQztRQUNGQSxFQUFFRDs7OztJQWtCTkUsMkNBQVNGO1FBQ0xBOzs7SUN4Z0JKRyx5Q0FBSUM7UUFDTSxFQUFrQ0gsQ0FBVyxFQUFHLElBQTVCSSxDQUFRLEVBQUcsR0FBcUJDLENBQVUsRUFBR0Msd0NBQS9EQyxDQUFXLEVBQUcsR0FBQyxHQUE4REMsQ0FBTyxFQUFHTCxHQUFHOzs7OztJRDhmdEdNLHVDQUFJVCxHQUFFRDtRQUNGQyxFQUFFRDs7O0lBM0hOVyxnQ0FDSUM7SUZxT0pDLDZCQUNJQztJRzBQSkMsaUVBQTJCQyxpQkFBZ0JDLGdCQUFlQzs7c0JBSXhDQyxjQUFGLEVBRU1kLENBQVEsRUFBR1csaUJBRFhWLENBQVUsRUFBR2MsbUNBQVlQLHFDQUFjLEVBQUVHLGdCQUFnQixHQUFLQyxrQkFFcEU7OztJQWh5QmhCSSx3REFBa0JDLGdCQUFnQnhCOzs7Ozs7UUFDeEIsRUFBa0RHLENBQVcsRUFBR3FCLGdCQUFuQ2pCLENBQVEsRUFBR2tCLFVBQXdDakIsQ0FBVSxFQUFHa0IsWUFBM0ZoQixDQUFXLEVBQUdpQixhQUF5RmhCLENBQU8sRUFBR2lCLFFBQVE7OztJQTdDcklDLHNEQUFnQkMsZUFBY0MsZUFBZS9COzs7Ozs7UUFDbkMsRUFBNEdHLENBQVcsRUFBRzZCLGFBQW5DekIsQ0FBUSxFQUFHa0IsVUFBcUNqQixDQUFVLEVBQUdrQixZQUFsSmhCLENBQVcsRUFBRyxFQUFFLEVBQUV1QixFQUFjLEVBQUdILGVBQWVJLENBQWEsRUFBR0gsY0FBYyxFQUFFLEdBQTRFcEIsQ0FBTyxFQUFHaUIsUUFBUTs7O0lDM0o1TE8sa0RBQUtDO0tBRUdDLFFBQ0ksRUFBRUMsRUFBTSxFQUFHRixRQU1URyxFQUFLLEVBQUcsSUFMUkMsRUFBVSxFQUlEakIsNkNBQXdCLElBRHhCTSwyQ0FBc0IsV0FEdEJaLHNEQUFpQyxJQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUQxRFosOEJBQVUsaUJBS2Q7UUFFUmdDOztJRDBGSkksaURBQVlDO1FBRUosRUFFRXZDLENBQVcsRUFBRyxJQURkSSxDQUFRLEVBQUcsR0FFWEMsQ0FBVSxFQUFHQyx3Q0FIYkMsQ0FBVyxFQUFHLEVBQUUsRUFBRXVCLEVBQWMsRUFBR1MsUUFBUVIsQ0FBYSxJQUFPLEVBQUUsR0FJakV2QixDQUFPLEVBQUcsZ0JBQ1o7O0lFOUdSZ0MsbURBQUtQO0tBRUdDLFFBQ0ksRUFBRUMsRUFBTSxFQUFHRixRQUVURyxFQUFLLEVBQUcsSUFEUkMsRUFBVSxFQUFHQyxzQ0FBa0IsU0FFakM7UUFFUko7O0lDdEJKTywyRUFBNEJDLE1BQUtDLE1BQUtDLE1BQUszQjtRQUN2QyxFQUE0QjRCLEVBQUksRUFBR0QsTUFBakNFLENBQUksRUFBR0osTUFBZ0NLLEVBQUssRUFBRzlCLE9BQWxDK0IsRUFBSSxFQUFHTCxLQUFpQzs7O0lBSTNETSxnREFDSSxFQUFFUixnRUFBNEIscUJBQW9CLE1BQUssdUJBQXNCLGFBQzNFQSxnRUFBNEIsY0FBYSxNQUFLLGFBQVksa0JBQzFEQSxnRUFBNEIsb0JBQW1CLE1BQUssWUFBVyxhQUMvREEsZ0VBQTRCLGlCQUFnQixNQUFLLGVBQWMsYUFDL0RBLGdFQUE0QixnQkFBZSxNQUFLLGVBQWMsYUFDOURBLGdFQUE0QixrQkFBaUIsTUFBSyxrQkFBaUIseUJBQ25FQSxnRUFBNEIscUJBQW9CLE1BQUssYUFBWSxrQkFDakVBLGdFQUE0QiwwQkFBeUIsTUFBSyx1QkFBc0IsYUFDaEZBLGdFQUE0QixvQkFBbUIsTUFBSyxjQUFhLGFBQ2pFQSxnRUFBNEIsa0JBQWlCLE1BQUssaUJBQWdCLGFBQ2xFQSxnRUFBNEIsY0FBYSxNQUFLLHVCQUFzQixhQUNwRUEsZ0VBQTRCLGtCQUFpQixNQUFLLFlBQVcsaUJBQzdEQSxnRUFBNEIsaUJBQWdCLE1BQUssYUFBWSxtQkFDN0RBLGdFQUE0QixvQkFBbUIsTUFBSyxjQUFhLGFBQ2pFQSxnRUFBNEIsbUJBQWtCLE1BQUssZ0JBQWUsa0JBQ2xFQSxnRUFBNEIsa0JBQWlCLE1BQUssV0FBVSxtQkFDNURBLGdFQUE0QixtQkFBa0IsTUFBSyxrQkFBaUIsYUFDcEVBLGdFQUE0QixvQkFBbUIsTUFBSyxrQkFBaUIsU0FDckVBLGdFQUE0Qix1QkFBc0IsTUFBSyxZQUFXLFNBQ2xFQSxnRUFBNEIscUJBQW9CLE1BQUssYUFBWSxZQUNqRUEsZ0VBQTRCLHFCQUFvQixNQUFLLGtCQUFpQixTQUN0RUEsZ0VBQTRCLHFCQUFvQixNQUFLLGNBQWEsU0FDbEVBLGdFQUE0QixvQkFBbUIsTUFBSyxZQUFXLGVBQy9EQSxnRUFBNEIsb0JBQW1CLE1BQUssU0FBUSxTQUM1REEsZ0VBQTRCLGtCQUFpQixNQUFLLFlBQVcsYUFDN0RBLGdFQUE0Qix1QkFBc0IsTUFBSyxjQUFhLFNBQ3BFQSxnRUFBNEIsc0JBQXFCLE1BQUssaUJBQWdCLGFBQ3RFQSxnRUFBNEIscUJBQW9CLE1BQUssa0JBQWlCLFNBQ3RFQSxnRUFBNEIsbUJBQWtCLE1BQUssWUFBVyxZQUM5REEsZ0VBQTRCLGtCQUFpQixNQUFLLGVBQWMsU0FDaEVBLGdFQUE0Qix5QkFBd0IsTUFBSyxhQUFZLGFBQ3JFQSxnRUFBNEIsbUJBQWtCLE1BQUssU0FBUSxhQUMzREEsZ0VBQTRCLHdCQUF1QixNQUFLLFdBQVUsVUFDbEVBLGdFQUE0QixxQkFBb0IsTUFBSyxhQUFZLFVBQ2pFQSxnRUFBNEIsaUJBQWdCLE1BQUssV0FBVSxhQUMzREEsZ0VBQTRCLG9CQUFtQixNQUFLLGVBQWMsZUFDbEVBLGdFQUE0QixrQkFBaUIsTUFBSyxTQUFRLGFBQzFEQSxnRUFBNEIsbUJBQWtCLE1BQUssYUFBWSxrQkFDL0RBLGdFQUE0QixxQkFBb0IsTUFBSyxVQUFTLGtCQUM5REEsZ0VBQTRCLGdCQUFlLE1BQUssVUFBUyxZQUN6REEsZ0VBQTRCLGtCQUFpQixNQUFLLGFBQVksZ0JBQzlEQSxnRUFBNEIsZ0JBQWUsTUFBSyxRQUFPLGFBQ3ZEQSxnRUFBNEIsZ0JBQWUsTUFBSyxZQUFXLFdBQzNEQSxnRUFBNEIsZ0JBQWUsTUFBSyxpQkFBZ0IsYUFDaEVBLGdFQUE0QixhQUFZLE1BQUssWUFBVyxnQkFDMUQ7SUMxQ0pTLCtCQUNJLEVBQUVDLENBQWEsS0FFYkMsQ0FBUyxFQUFHcEIsdUNBQWVpQixnREFEM0JJLENBQVUsRUFBR2Isd0NBQWdCUywrQ0FFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJTDJJSkssNkJBQ0lD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lGMUJaQyxrQ0FDSUM7SUE2QkpDLG1DQUNJQztJQW1PSkMsc0NBQ0lDO0lHdlNKQyxzREFBYUM7OztVQUVHOztVQUNZOztVQUNEOztVQUNYOzs7Ozs7Ozs7Ozs7SUxSaEJDLGtDQUNJQztJTi9CSkMsNEJBQ0lDO0lNbkRKQywrQkFDSUM7SUErZ0JKQyxvQ0FDSUM7SUFyZUpDLDZDQUFVQyxHQUFFQztTQUNMRCxJQUFJLEtBQ0hDLFNBR0FOLEdBQUFBLDhCQUFNSyxHQUFFSCxrQ0FBWUksU0FBUUE7OztJQStGcENDLGlDQUNJQztJTm5ISkMsNEJBQ0lDO0lNckxKQywwQ0FBUUw7UUFDSkEsV0FBVTs7SUFrS2RNLDZDQUFVUCxHQUFFQztTQUNMRCxJQUFJLEtBQ0gsS0FHQUwsR0FBQUEsOEJBQU0sR0FBRUssR0FBRUM7OztJQThQbEJPLCtCQUNJQztJTW5aSkMsK0NBQWdCQyxVQUFTQyxNQUFLQyxRQUFPQyxNQUFLL0U7S0FDckN1RSwrQkFBZXZFLFFBQU93RCxHQUFBQSxpQ0FBZ0IsS0FBSXhEO1NBQzNDZ0Y7O01BRUFuSixNQUFLc0ksR0FBQUEsZ0NBQWUsS0FBSW5FOzs7V0FFcEJpRiwyQkFDSSxFQUtFQyxDQUFRLEVBQUdILE1BSlhJLEVBQUksRUFBR25GLEtBRVBvRixDQUFJLEVBQUdQLE1BRFBRLEVBQUssRUFBR0wsK0JBRlJNLEVBQVEsRUFBR1YsVUFJWHhHLEVBQUssRUFBRzBHLE9BRVY7OztRQUdKUyxNQUFLZCw2QkFBYVQsa0NBQW1CbEYsSUFBSSxHQUFHa0I7O1lBRXhDZ0Y7OztZQUdBQywyQkFDSSxFQUtFQyxDQUFRLEVBQUdILE1BSlhJLEVBQUksRUFBR1gsa0NBQWtCMUYsR0FBRWtCLE1BRTNCb0YsQ0FBSSxFQUFHUCxNQURQUSxFQUFLLEVBQUdHLE9BRlJGLEVBQVEsRUFBR1YsVUFJWHhHLEVBQUssRUFBRzBHLE9BRVY7OztXQUdSRTs7Ozs7SWR1RVJTLDRCQUNJQztJY3BISkMsZ0RBQWlCZixVQUFTRSxRQUFPQyxNQUFLL0U7S0FDakN1RSwrQkFBZXZFO1NBQ2hCZ0Y7O01BRUFuSixNQUFLNEosR0FBQUEsMkJBQVUsR0FBRXRCLEdBQUFBLGdDQUFnQixLQUFJbkU7O1VBRWpDMkUsb0NBQWdCQyxVQUFTLEtBQUlFLFFBQU9DLE1BQUsvRTs7O1VBR3pDMkUsb0NBQWdCQyxVQUFTWixrQ0FBa0JsRixHQUFFa0IsTUFBSzhFLFFBQU9DLE1BQUtQLGtDQUFrQjFGLEdBQUVrQjs7Ozs7SUF0QjFGNEYsbURBQW9CaEIsVUFBU0csTUFBSy9FO0tBQzdCdUUsK0JBQWV2RTtTQUNoQmdGOztNQUVBbkosTUFBSzRKLEdBQUFBLDJCQUFVLEdBQUV0QixHQUFBQSxnQ0FBZ0IsS0FBSW5FOztVQUVqQzJGLHFDQUFpQmYsVUFBU0ksK0JBQVFELE1BQUsvRTs7O1VBR3ZDMkYscUNBQWlCZixVQUFTSywyQkFBTWpCLGtDQUFtQmxGLElBQUksR0FBR2tCLE9BQU0rRSxNQUFLUCxrQ0FBa0IxRixHQUFFa0I7Ozs7O0lBdEJqRzZGLGtEQUFtQmpCLFVBQVM1RTtLQUN2QnVFLCtCQUFldkU7U0FDaEJnRjs7TUFFQW5KLE1BQUs0SixHQUFBQSwyQkFBVSxHQUFFdEIsR0FBQUEsZ0NBQWdCLEtBQUluRTs7VUFFakM0Rix3Q0FBb0JoQixVQUFTSSwrQkFBUWhGOzs7VUFHckM0Rix3Q0FBb0JoQixVQUFTSywyQkFBTWpCLGtDQUFtQmxGLElBQUksR0FBR2tCLE9BQU13RSxrQ0FBa0IxRixHQUFFa0I7Ozs7O0lONFAvRjhGLG9DQUNJQztJTWxSSkMseUNBQVdoRztRQUNOOEYsR0FBQUEsbUNBQWtCLFdBQVU5RixPQUM3QjZGLDBDQUF3QjdCLGtDQUFrQixHQUFFaEUsU0FFdEM4RixHQUFBQSxtQ0FBa0IsWUFBVzlGLE9BQ25DNkYsMENBQXlCN0Isa0NBQWtCLEdBQUVoRSxRQUc3Q2dGOztJWnVsQkppQix3Q0FBT3BLOzs7O2tCQUNHcUs7Ozs7Ozs7O0lhL25CVkMsK0JBQ0lDO0lBcVVKQyw0QkFDSUYsNkJBQVEsR0FBQztJZjFSYkcsNEJBQ0lDO0lleUhKQywrQkFDSUM7SUE3SEpDLHFDQUFJNUwsTUFBSzZMO1FBRUVILEdBQUFBLDhCQUFRLFNBQUVJO1VBQUtULDZCQUFTckwsS0FBSzhMO0tBRHBDRDs7O0lmbUNKRSw4QkFDSUM7SWViSkMsc0NBQUtqTSxNQUFLNkwsT0FBTUs7UUFFTFIsR0FBQUEsOEJBQ0MsU0FBRUk7VUFFU0osR0FBQUEsOEJBQVEsU0FBRW5LO1lBQUs4Siw2QkFBUXJMLEdBQUNBLE1BQUs4TCxHQUFFdks7T0FEdEMySztLQUhaTDs7O0lmNlZKTSw0Q0FBVS9MLE9BQU1NO1FBQ1pDLEdBQUFBLGdCQUEwQixHQUFFLEdBQUVQLE9BQU1NOzs7SWVyUnhDMEwseUNBQVNDO1FBQ0xOLEdBQUFBLDZCQUFZRSwwQkFBTUUsa0NBQWlCZCw2QkFBUyxHQUFDLElBQUdnQjs7SUMzR3BEQyxxQ0FDSUM7SURtVEpDLDBDQUFTQyxRQUFPQzs7O1NBR0pDLGlCQUVXakIsR0FBQUEsOEJBQVFZLG1DQUFvQkcsU0FEbENHOzs7U0FLTEQsaUJBQTRCQzs7OztJQXJCeENDLDJDQUFVSixRQUFPSyxVQUFTM0s7UUFDdEJ5SiwwQkFDSSxTQUFFN0s7VUFBSyxHQUFDO0tBQ1JxTCw4QkFBVVosR0FBQUEsMkJBQVdnQiw4QkFBVUMsU0FBUUs7OztJQUkvQ0MsMkNBQVVoTSxLQUFFMEosS0FBRW5EO1FBQ1YrRCw2QkFBUSxHQUFDOzs7Ozs7SUExQmIyQix3Q0FBT0MsUUFBT1A7OztTQUdGUSw2QkFBUXRCLDBCQUFLcUIsUUFBT0w7OztTQUdwQk8sNkJBQVFQOzs7Ozs7SUF2RHBCUSx5Q0FBUUMsV0FBVVQ7UUFDZFUsNkJBQVFKLDZCQUFTdEIsMEJBQUt5QixXQUFVVDs7O0lFbFJwQ1cscUNBQ0lDO0lBZkpDLG9DQUNJRixtQ0FBTSxHQUFDO0lDY1hHLHFDQUNJRjtJQWJKRyxvQ0FDSUQsbUNBQU0sR0FBQztJQ0NYRSw4Q0FBUUM7UUFDSkMsaUJBQ0ksRUFBRUMsRUFBSSxFQUFHLFNBQUNoTjtVQUFNLEVBQXFCaU4sRUFBTyxFQUFHUCxtQ0FBN0JRLEVBQUssRUFBR0osSUFBSSxDQUFDRSxHQUF5QjtLQUd0REcsRUFBYSxFQUFHLFNBQUN6RDtVQUFLa0Q7S0FEdEJRLEVBQU0sS0FBRyxTQUFDcEcsS0FBSTNFO1dBQVMsRUFBaUM0SyxFQUFPLEVBQUdQLG1DQUF6Q1EsRUFBSyxLQUFHSixJQUFJLENBQUNNLElBQU9wRyxLQUFJM0UsT0FBMEI7T0FEM0VnTCxFQUFJLEVBQUdQLElBQUksQ0FBQ08sR0FHZDs7SWZYUkMscURBQU90RyxLQUFJM0U7Ozt1QkFHR0EsT0FBRixFQUFVRSxFQUFLLEVBQUdnTCxTQUFTOzs7dUJBR3pCbEwsT0FBRixFQUFVRyxFQUFVLEVBQUdnTCxTQUFTOzs7O0lDWDVDQyxzREFBT3pHLEtBQUkzRTs7O3VCQUdHQSxPQUFGLEVBQVVFLEVBQUssRUFBR2dMLFNBQVM7Ozt1QkFHekJsTCxPQUFGLEVBQVVHLEVBQVUsRUFBR2dMLFNBQVM7Ozs7SUVXNUNFLDJDQUFPMUcsS0FBSTNFOzs7O3dCQUdHQSxPQUFGLEVBQVVpQixDQUFhLEVBQUdxSyxrQkFBa0I7Ozt3QkFHMUN0TCxPQUFGLEVBQVVtQixDQUFVLEVBQUdpSywyQ0FBa0JHOztPQUEwQnZMLFFBQU07Ozt3QkFHdkVBLE9BQUYsRUFBVWtCLENBQVMsRUFBRytKLDBDQUFpQk07O09BQXlCdkwsUUFBTTs7Ozs7Ozs7Ozs7OztJTW5CbEZ3TCw4Q0FBS0M7UUFDSEMsaUJBQTZCQyxxQkFBZ0NGOztJT3VEL0RHLCtCQUNFSjtJQXdFRkssa0NBQ0VELDZCQUFLO0lBc2pCUEUsaUNBQ0VGLDZCQUFLOztJYjlwQlBHLGtDQUVJLE9BQWdDO0lNNEVwQ0MsbURBQVNqUCxLQUFJQztRQUNYaVAsR0FBQUEsc0JBQ0dDLG9DQUErQ25QLE1BQy9Db1Asa0NBQTZDblA7OztJUVRsRG9QLDhDQUNFSjtJWm5FRksscUNBQ0lDO0lZc0VKQyw4REFBZXhQLEtBQUlpSjtRQUNqQm9HLEdBQUFBLDZDQUFTclAsS0FBSXNQLG1DQUFhckc7OztJQTBDNUJ3RywyQ0FDRUQsa0RBQWU7SUQ2SWpCRSw4QkFDRWIsNkJBQUs7SWJqUVBjLCtDQUFZQzs7U0FHQTs7U0FHQTs7O0lhb0haQyw2QkFDRWhCLDZCQUFLO0lDS1BpQix3Q0FDRU4sa0RBQWU7SVJsSGpCTyxvQ0FDRUM7SU9zREZDLDhCQUNFRjtJQWlCRkcsOEJBQ0VyQiw2QkFBSztJbEI0RlBzQix5Q0FBT25IO1NBQ0ZBOzs7OztJV3pDTG9ILG1DQUNFQztJU2xDRkMsOENBQUdDLE9BQU1DO1FBQ1BKLEdBQUFBLGtDQUFjRyxPQUFNRSxxQ0FBbUJEOzs7SUE3SnpDRSxrREFBUTlJO1FBQ04wSSxtQ0FBRyxTQUFRbkksb0NBQWNQOztJVHdJM0IrSSxvREFBVTNRLEtBQUlDO1FBQ1oyUSxHQUFBQSx1QkFDR0MsNkJBQXdDN1EsTUFDeENvUCxrQ0FBNkNuUDs7O0lRQWxENlEsK0NBQ0VIO0lBK0dGSSx1REFBUy9IO1FBQ1A4SCxHQUFBQSw4Q0FBVSxZQUFXMUwsK0JBQWdCNEQ7O0lSeE52Q2dJLHFDQUNFQztJTzJDRkMsK0JBQ0VGOzs7Ozs7Ozs7SXBCK0RGRywrQkFDSUM7SXFCMURKQyx3REFBVUM7UUFLSDdCLHlDQURBbkssR0FBQUEsNkJBQVksS0FEWitGLEdBQUFBOztPQURBOEYsR0FBQUE7O1FBRExHOztJQWl1QkZDLHNEQUFRdkk7UUFDTjhILEdBQUFBLDhDQUFVLFdBQVUxTCwrQkFBZ0I0RDs7SW5CM2dCdEN3SSw0QkFDSUM7SXFCeExKQyw2Q0FDSVosNkNBQVU7SXZCNEdkYSxrQ0FDSUM7SUFvQkpDLHlDQUFPNVIsT0FBTU07S0FDVEssTUFBSytRLEdBQUFBLGlDQUFVLFNBQUVHO29CQUFLQSxHQUFLN1I7S0FBT007O1NBRTFCOztTQUdBOzs7O0lxQnlrQlp3UixzREFBUS9JO1FBQ044SCxHQUFBQSw4Q0FBVSxXQUFVMUwsK0JBQWdCNEQ7O0lFcG9CdENnSiw0Q0FDSWxCLDZDQUFVO0lwQm5JZG1CLDJEQUFzQnRQOztTQUdWOztTQUdBOzs7SWlCMmFadVAsK0JBQ0VyRCw2QkFBSztJUC9ZUHNELHNDQUNFQztJUXpDRkMsMkNBQ0VGO0lEK1ZGRyw4QkFDRXpELDZCQUFLO0lBOFBQMEQsNkJBQ0UxRCw2QkFBSztJQWJQMkQsNkJBQ0UzRCw2QkFBSztJakI3VVA0RCx3REFBbUJDO0tBR1hDLFlBQUEsU0FBVUM7Ozs7O01BRUZDOzs7WUFHZUMsYUFBWSxLQUNYLEdBQUMsSUFHRCxFQUFFUixHQUFBQSw2QkFBUyxFQUFFRCxHQUFBQSwwQ0FBUSxXQUFVLE9BQU0sR0FBRSxFQUFFbkIsNkJBQWE5TCwrQkFBZTBOLFdBQVMsR0FBRTs7V0FHcEYsR0FBQzs7O01BdUNiQyxnQkFDSSxFQUFFaEIsMkNBQVUsSUFBR1IsMkNBQVUsR0FBRTtNQWpCL0J5QixXQUFBLFNBQVNDOzs7cUJBR0dBLHFCQUF1QnRROztXQUd2Qjs7O01BM0JadVEsY0FDSWhCLEdBQUFBLDhCQUFVLEVBQUV6Qyx5Q0FBUSxtQkFBa0IsR0FBRSxFQUFFeUIsNkJBQVV6TixNQUFLO01BRTdEMFAsZUFDTy9TLDZCQUFhZ1Qsa0JBQWlCLEtBQzdCbEIsR0FBQUEsOEJBQ0ksRUFBRWIsNkNBQVksRUFBRSxFQUFFckksQ0FBSyxFQUFHLG1CQUFtQnFLLENBQU8sRUFBRyxLQUFLLEVBQUUsSUFDNUQzQiwyQ0FBYyxzQ0FDZFosR0FBQUEsOENBQVksUUFBTyxXQUNuQkMsNENBQVcsR0FDYixHQUNBOEIsc0JBR0ozQiw2QkFBVTtNQUdsQm9DLGNBQUEsU0FBWTNRO1VBQ1JrUCw4QkFBYWxQLGVBQWN5UTs7TUFzQi9CRyxZQUNJLEVBQUVsQyw2Q0FDRSxFQUFFLEVBQUVySSxDQUFLLEVBQUcsb0JBQW9CcUssQ0FBTyxFQUFHQyxlQUFnQixHQUN4RCxFQUFFdEssQ0FBSyxFQUFHLHFCQUFxQnFLLENBQU8sRUFBR0MsZUFBaUIsR0FDMUQsRUFBRXRLLENBQUssRUFBRyxtQkFBbUJxSyxDQUFPLEVBQUdMLFlBQWEsR0FDcEQsRUFBRWhLLENBQUssRUFBRyxvQkFBb0JxSyxDQUFPLEVBQUdMLFlBQWMsR0FDdEQsRUFBRWhLLENBQUssRUFBRyxvQkFBb0JxSyxDQUFPLElBQVFMLGtCQUFzQkEsYUFBZSxFQUNwRixHQUNKO01BbkJKUTs7O1dBR1ksRUFBRXhCLDBDQUFhQyxnREFBc0J0UCxnQkFBYzs7V0FHbkQsR0FBQzs7O01BZWI4USx5QkFDSUMsd0JBQWdCRixvQkFBWVQsZUFBaUJRO1NBRXJEaEIsR0FBQUEsNEJBQVFrQixjQUFhLEVBQUUvRCxHQUFBQSw2QkFBUyxFQUFFRCx5Q0FBUSxvQkFBbUIsR0FBRSxFQUFFeUQsYUFBYUMsWUFBWSxHQUFFOztRQUVwRyxFQUFFUSxDQUFVLEVBQUcsR0FBQyxHQUFHQyxDQUFRLEVBQUcsRUFBRXBCLEdBQUFBLDRCQUFRLEdBQUMsR0FBS25ILEdBQUFBLDJCQUFVc0gsV0FBVUQsY0FBWSxFQUFFOztJQXZRcEZtQixvREFBZ0JqVDs7UUFDWmdDOztJQTBRSmtSLHFEQUFlQyxNQUFLQyxPQUFNaFMsT0FBTWlTO0tBRXhCQywyQkFDT0gsS0FBS0UsT0FBUUoseUNBQWU3UixVQUMzQixPQUdBO1FBRVRrUyxpQkFDQyxFQUFFN0IsR0FBQUEsMENBQVEsY0FBYSxXQUFVLElBR2pDLEVBQUUzQix1Q0FBYXNELE1BQVM3Uiw2Q0FBbUI0UixLQUFLRSxPQUFNalMsU0FBTTs7O0lBdEdwRW1TLGtEQUNJLEVBQUVDLEVBQW1CLEVBQUcsRUFBb0JDLEVBQUssRUFBR3RLLCtCQUExQnVLLEVBQU0sRUFBR3ZLLDhCQUF5QixHQUUxRHdLLEVBQU8sRUFBR3hLLCtCQUNWeUssRUFBUSxFQUFHLFNBQUM1VDtRQUFLbUo7R0FHakIwSyxFQUFRLEVBQUdYLDBDQUxYWSxFQUFVLEVBQUcsRUFBRWpGLHlDQUFRLGFBQVksR0FJbkNrRixFQUFVLEVBQUcsR0FBQyxHQUVkQyxFQUFLLEVBQUc3SywrQkFIUjhLLEVBQUssRUFBR3BDLDZDQUlWO0lBekVKcUMsNENBQU9sVTs7OztRQUVDLEVBRUVtVSxFQUFPLEVBQUcxSixHQUFBQSwyQkFBVSxTQUFHZjs7VUFBaUIwSztLQUFPQyxVQUMvQ0MsRUFBYyxFQUFHZixpREFIakJnQixFQUFJLEVBQUdwQixNQUNQcUIsRUFBSyxFQUFHcEIsTUFHVjs7Ozs7O0lIa2VScUIsK0JBQ0lDO0lHd01KQyw4REFBeUJDO1FBQ3JCQyxtQ0FBU0osNkJBQWNHOztJQS9hM0JFLGlEQUFZM1E7UUFDUixFQUFFNE8sQ0FBVSxFQUFHLEdBQUMsR0FBR0MsQ0FBUSxFQUFHLEVBQUUxQyw2QkFBVW5NLEtBQUksRUFBRTs7SUE1Q3BENFEsZ0RBQVVsUyxNQUFLbVM7UUFFUCxFQUFFL1IsQ0FBSSxFQUFHSixNQUVQb1MsQ0FBTSxFQUFHTixtREFBeUJLLFFBRGxDRSxDQUFRLEVBQUdyUixpQ0FBQUEsaUNBQUFpUix1Q0FBZXRRLGlDQUFrQndRLE9BRTlDOzs7SUFmUkcsbURBQWF0UyxNQUFLdVM7UUFFVixFQUFFblMsQ0FBSSxFQUFHSixNQUVQb1MsQ0FBTSxFQUFHTixtREFBeUJTLFFBRGxDRixDQUFRLEVBQUdyUixpQ0FBQWlSLHVDQUFlTSxPQUU1Qjs7O0lDaGFSQywyQ0FDSW5CLGlDQUNJLEVBRUVDLEVBQU8sRUFDTCxFQUFFZ0Isd0NBQW1COztNQUNuQkoscUNBQWdCOztNQUNoQkksd0NBQW1COztNQUNuQkEsd0NBQW1COztLQUNyQixHQVBGWixFQUFJOztJQUNKQyxFQUFLLEVBQUdjLGdEQU9WO0lnQnVHUkMsNkJBQ0V0SCw2QkFBSztJQWtpQlB1SCxnQ0FDRXZILDZCQUFLO0lFMW5CUHdILHFEQUFXek87UUFDVCxFQUFFME8sQ0FBTyxFQUFHMU8sS0FDVjJPLENBQWUsRUFBRyxLQUNwQjs7Ozs7SUFpR0ZDLDZEQUFrQmpHLE9BQU1DO1FBQ3RCSixHQUFBQSxrQ0FBY0csT0FBTWtHLGlEQUErQmpHOzs7SVo2RXJEa0csb0NBQ0lDO0lBZ0JKQywyQ0FBR0MsUUFBT3JHO1FBQ041RSxHQUFBQSw2QkFBWThLLG1DQUFNbEcsU0FBUXFHOzs7SUFsTzlCQyxxQ0FDSUM7SVlpTUpDLDZDQUNFSixnQ0FBUSxFQUFDLFVBQVUsUUFBTyxHQUFFRTtJQTFLOUJHLGtEQUFRbks7UUFDTjBKLGtEQUFrQixTQUFRek8sR0FBQUEsaUNBQVVzTywyQ0FBV3RPLEdBQUFBLGlDQUFVK0UsUUFBT2tLOztJbkIyRGxFRSxpREFBYXRXOztRQUNUeUI7O0lpQmltQko4VSxpQ0FDRXRJLDZCQUFLO0lBckJQdUksaUNBQ0V2SSw2QkFBSztJWHhtQlB3SSxtQ0FDSTlIO0lZcUJKK0gsNERBQWF0WCxLQUFJdVg7UUFDZmxJLEdBQUFBLDZDQUFTclAsS0FBSXFYLGlDQUFXRTs7O0lBbVMxQkMsOENBQ0VGLGdEQUFhO0luQnJHZkcsNEJBQ0lDO0lGc1NKQyw4QkFDSUM7SUFVSkMsNENBQVU3TyxHQUFFekk7UUFDUm9YLEdBQUFBLDZCQUFNM08sR0FBRTVJLDZCQUFRRyxRQUFPQTs7O0lBekMzQnVYLHVDQUFNdlg7UUFDRmlLLEdBQUFBLDJCQUFJLEdBQUVqSzs7SUFtRlZ3WCwwQ0FBU3hYO0tBQ0xLLE1BQUtrWCw0QkFBTXZYOzs7U0FFSHlKLDJCQUNJLEVBQUVnTyxFQUFLLEVBQUcvWCxPQUNSZ1ksRUFBSSxFQUFHSixpQ0FBVSxHQUFFdFgsT0FDckI7O1NBR0p3Sjs7O0lHcGdCWm1PLHFEQUFlQyxvQkFBb0J2WDs7Ozs7O0tBRzNCd1gsc0JBQUEsU0FBaUJDLE9BQU1DO09BQ25CMUYsTUFBS21GLCtCQUFrQjVHLEdBQUFBLDhCQUFhLFNBQUVyUTt3QkFBS0EsR0FBS3VYO1FBQVUxVywyQkFBVzJXOzs7OztNQUV0RHhYOztXQUdQOzs7S0FFWnlYOzs7O1dBR1lILEdBQUFBLGtCQUFpQkQsb0JBQW1CRzs7O1dBR3BDRixHQUFBQSxrQkFBaUJELG9CQUFtQkc7O1dBR3BDOzs7UUFFVixFQUFxRHZYLENBQVcsRUFBRzZCLGFBQXRDekIsQ0FBUSxFQUFHb1gsYUFBd0NuWCxDQUFVLEVBQUdrQixZQUEzRmhCLENBQVcsRUFBR2lCLGFBQXlGaEIsQ0FBTyxFQUFHaUIsUUFBUTs7O0lrQnVOcklnVywyQ0FDRWhKLGtEQUFlO0lHcFZqQmlKLDhDQUFZQyxVQUFRQzs7O1NBR1IxWTs7U0FHQTJZOzs7O0lyQnErQlpDLHdEQUFtQmpZLEtBQW1Ca1k7OztLQVM5QkMsYUFBQSxTQUFXQztTQUNQcE4sR0FBQUEsZ0NBQ0ksU0FBRXFOLEtBQUlDO3NCQUNGLEVBQUUvQixHQUFBQSxnQ0FBWSxFQUFFcUIseUNBQVFTLE1BQUt6QixzREFBZXBTLCtCQUFrQjhSLHNDQUFZNEIsY0FBZUcsTUFBSSxHQUFFLEVBQUUvSCw2QkFBVStILEtBQUksR0FDL0csR0FDT0M7UUFFWCxHQUFDLEdBRUQ3TixHQUFBQSwyQkFBVWpHLGdDQUFlNFQ7O0tBZmpDRyxtQkFBQSxTQUFpQm5YO1NBQ2JzTyxtQ0FBSyxVQUNEdkksR0FBQUEsaUNBQWdCLFNBQUV3UTtZQUFldkUsTUFBU2tFLDBDQUFlSyxhQUFZdlc7T0FDakUrRixHQUFBQSxpQ0FBZ0J0RCxpQ0FBQ2dVLGtDQUFrQixJQUFLalAsK0JBQ3BDd047O1FBYXBCSSxHQUFBQSxnQ0FBWSxFQUFFK0IsaUJBQWlCTCxZQUFXOzs7O1lBRzlCQyxXQUFXQzs7O1lBR1hELFdBQVdDOztZQUdYLEdBQUM7Ozs7O0lrQnZxQmpCSSxpREFDRTVKLGtEQUFlO0liTWpCNkosaUNBQ0lDO0lZME1KQyxrQ0FDRTFLLDZCQUFLO0lsQjdPUDJLLGlDQUNJQztJQXRMSkMsOEJBQ0lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0l1QnJHSkMsNkJBQ0lDO0l0Qjg5QkpDLDRDQUFPQztRQUNISCxHQUFBQSw0QkFBVyxHQUFFSSxVQUFPOztJcUJ4K0J4QkMsc0NBQUlsWixHQUFFNFg7OztTQUdNM08sMkJBQU1qSixFQUFFZDs7U0FHUjhKOzs7O0l0QjRDWm1RLDZCQUNJQztJQ3k3QkpDLG9EQUFlcFI7S0FDWHBJLE1BQUs0WSxHQUFBQSxnQ0FBUXhRLEdBQUU7O1NBRVA7O1NBR0FBOzs7SUQxOEJacVIsNkJBQ0lDO0lGMGZKQyw0Q0FBVXZSLEdBQUV6STtRQUNSb1gsR0FBQUEsNkJBQU0sR0FBRTNPLEdBQUV6STs7O0lHNFZkaWEsdURBQWtCNVosS0FBa0IwSixLQUE2QzJKOzs7Ozs7S0FFekV3RyxZQUtXaEMsbUNBQWtCLEdBRGxCd0IsMkJBQVUsU0FBRXBXO1dBQUtBLElBQUk7TUFEckJvVzs7T0FEQXRJLEdBQUFBLGlDQUFnQixTQUFFRzt1QkFBS2lDLEtBQUtqQyxJQUFLbFA7UUFEeENxUjtLQU1KeUcsdUJBQ0tELFlBQVksS0FBTXBZO0tBRXZCc1k7Ozs7WUFNb0J2YSw2QkFBYTZUOzthQUdaeUcscUJBQXFCLEtBQUtyWTs7O1FBR2hDQSxhQUFZO1lBQ1hqQyw2QkFBYTZUOztTQUdiMkcsTUFBS3BCLEdBQUFBLGdDQUFRaUIsWUFBV3BZLFdBQVk7O2FBRTVCb1ksY0FBWXBZLFdBQVk7O2FBR3hCQTs7OztXQUdaakMsNkJBQWE2VDs7O0tBRXpCNEc7OztXQUdZSCxxQkFBcUJyWTs7UUFHbEJBLGFBQVk7WUFDWG9ZLFlBQVk7O1NBR1pLLE1BQUt0QixHQUFBQSxnQ0FBUWlCLFdBQWFyYSw2QkFBYTZULFVBQU81UixXQUFZOzthQUVsRGpDLDZCQUFhNlQsUUFBTzVSOzthQUdqQnlYLGlDQUFPelgsYUFDTm9ZLGNBQVlwWSxXQUFZLGFBR3hCb1ksY0FBWXBZLFdBQVksV0FBSTs7OztXQUc1Qzs7O1FBSVR3VixpQ0FBZ0J1Qyx5Q0FBZ0JTLG9CQURoQ04saUNBQWdCSCx5Q0FBZ0JPLGdCQUR2QzFHOzs7SUh0MkJKOEcsZ0NBQ0lDO0lHcW5CSkMsa0RBQVl0WSxlQUFjdVksUUFBT2pIOzs7VUFHckJBOztVQUdBQTs7O1VBR0FrSCxJQUFJbEg7OztVQUdKOEcsOEJBQWVJLElBQUlsSDs7O1dBR2hCdFIsdUJBQ0NvWSw4QkFBZUksSUFBSWxILFNBR25Ca0gsSUFBSWxIOzs7V0FHTHRSLHVCQUNDd1ksSUFBSWxILFFBR0o4Ryw4QkFBZUksSUFBSWxIOzs7O0lBSW5DbUgsaURBQVdDLGdCQUFlckc7OztNQUN0QnBVLE1BQUttWCwrQkFBZS9DOztVQUVaakw7Ozs7Ozs7aUJBR0d0RyxNQUFRNFg7V0FDUHJSLDJCQUFLa1I7OytCQUdNRztrQkFBZWpVOzs7Ozs7Ozs7SUF2RDFDa1UsMkNBQU0xYSxLQUFtRW9VLE9BQU1mOzs7Ozs7O0tBQzNFOU0sTUFBSzRRLCtCQUFleFY7Ozs7Ozs7TUFFWmdaLE1BQUtILHNDQUFXSSxnQkFBZXhHOztVQUV2QmY7OztVQUdBcUgsZ0NBQVksRUFBMkN2YSxDQUFXLEVBQUc2QixhQUFuQ3pCLENBQVEsRUFBR2tCLFVBQXFDakIsQ0FBVSxFQUFHa0IsWUFBakZoQixDQUFXLEVBQUc4RixNQUErRTdGLENBQU8sRUFBR2lCLFFBQVEsR0FBR3dTLE9BQVNpRyx1Q0FBWXRZLGVBQWN1WSxRQUFPakg7OztTQUdsTEE7Ozs7SUFrRFp3SCxvREFBZTdhLEtBQW9Cb0IsT0FBTWlTOztRQUNyQ3FILGdDQUFLdFosT0FBTWlULFNBQVFoQjs7O0lVdGlCdkJ5SCxtREFBVWhOO1FBQ1JpTixzQkFBa0MvTSxxQkFBZ0NGOztJYS9UcEVrTixxQ0FDRUY7SU42bUJGRyxnQ0FDRWhOLDZCQUFLO0lBc0NQaU4sZ0NBQ0VqTiw2QkFBSztJQVJQa04sZ0NBQ0VsTiw2QkFBSztJakJyTVBtTiw4Q0FBU3BiOzs7UUFDTCxFQUFFaUQsQ0FBSSxFQUFHSixNQUFNb1MsQ0FBTSxFQUFHcUYsT0FBTzs7SUFnT25DZSxpREFBV3hZLE1BQUt5WSxVQUFTOUksZ0JBQWVNO1FBQ3BDLEVBR0V5SSxFQUFZLEVBQUd6SSxjQUhmN1AsQ0FBSSxFQUFHSixNQUNQMlksRUFBUSxFQUFHRixVQUNYRyxFQUFjLEVBQUdqSixlQUVuQjs7O0ltQnRwQkprSixvREFBVTFVO1FBQ1IwSSxtQ0FBRyxXQUFVbkksb0NBQWNQOztJRG1LN0IyVSwyQ0FDRS9NLGtEQUFlO0luQnlHakJnTiw2QkFDSUM7SUM3SUpDLDJEQUFxQmhhLGVBQWNDLGVBQWUvQjs7Ozs7OztLQUUxQytiLHlCQUNJLEVBQUUsRUFBRTlaLEVBQWMsRUFBR0gsZUFBZUksQ0FBYSxFQUFHSCxjQUFjLEVBQUUsR0FDN0R3TyxHQUFBQSw4QkFBYSxTQUFFaEs7O3NCQUFzQnFVLGdCQUFrQjlZO01BQWVIO1FBRS9FLEVBQW1EeEIsQ0FBVyxFQUFHNkIsYUFBbkN6QixDQUFRLEVBQUdrQixVQUFxQ2pCLENBQVUsRUFBR2tCLFlBQXpGaEIsQ0FBVyxFQUFHcWIsY0FBdUZwYixDQUFPLEVBQUdpQixRQUFROzs7SUEybEJuSW9hLHFEQUFlNWEsT0FBTXlCLE1BQUtkLGVBQWNxUjtRQUNwQyxFQUFFdEQsdUNBQ0VzRCxNQUNJdlIsMkNBQWdCZ0IsTUFBS2QsZUFBY1gsVUFDekNzYSx5Q0FDRXRJLE1BQ0kwSSxnREFBcUJqWixNQUFLZCxlQUFjWCxVQUM5Q3VhLHlDQUNFLHFDQUNPLHVDQUNBLDBDQUNYOzs7SUFwRkpNLG1EQUFjN2EsT0FBa0NnUyxPQUFNcFQ7Ozs7S0FVOUNzYjs7VUFHWW5TOzs7T0FLSStTLGNBQ0luWCxHQUFBQSxxQ0FBaUIsU0FBRW9YLEtBQUk5RDthQUFPLEVBQUUrRCxFQUFJLEVBQUdELEtBQUtFLEVBQUssRUFBR2hFLElBQUk7U0FBTThCLDhCQUFjbUM7T0FFaEZDLGVBQ0loTSxHQUFBQSw4QkFBYSxTQUFFaU07O3NCQUFrQzNaLE1BQVErWDtPQUFnQnNCO09BRWpGTyxNQUFLOUMsaUNBQWdCLEdBQUU0Qzs7Ozs7V0FFZm5ULDJCQUNJLEVBQUVsSCxDQUFhLEVBQUdILGVBQ2hCMmEsRUFBUSxHQUNIbGQsNkJBQWEwYyxpQkFBZSxLQUMzQixLQUdBUyxRQUFRLEdBQ2hCOztXQUdKeFQ7Ozs7S0FuQ3BCeVQsVUFBQSxTQUFRN1I7Ozs7Ozs7S0FxQ1I4Ujs7O1VBR1lELFFBQVE3YTs7Ozs7Ozs7Ozs7VUFZaEJzWixzQ0FBV3hZLE1BQUtzRywrQkFBUSxHQUFDLEdBQUUsR0FBQzs7VUFHNUJrUyxzQ0FBV3hZLE1BQUtzRywrQkFBUSxHQUFDLEdBQUUsR0FBQzs7VUFHNUJrUyxzQ0FBV3hZLE1BQUt5WSxVQUFTLElBQU0sR0FBS1UsMENBQWU1YSxPQUFNeUIsU0FBU3VROztVQUdsRWlJLHNDQUFXeFksTUFBS3lZLFVBQVMsSUFBTyxHQUFLVSwwQ0FBZTVhLE9BQU15QixTQUFVdVE7O1VBR3BFaUksc0NBQVd4WSxNQUFLeVksVUFBUyxPQUFZLEdBQUtVLDBDQUFlNWEsT0FBTXlCLE1BQUtnYSx1QkFBc0J6Sjs7VUFHMUZpSSxzQ0FBV3hZLE1BQUt5WSxVQUFTLE9BQVksR0FBS1UsMENBQWU1YSxPQUFNeUIsTUFBS2dhLHVCQUFzQnpKOzs7O0lpQnhGdEcwSiw2QkFDRTdPLDZCQUFLO0lqQnVIUDhPLCtDQUFTMUosTUFBS3JUOzs7S0FFTmdkLFVBQ0lDLFNBQVM1SjtRQUVqQnlKLEdBQUFBLDRCQUFRRSxPQUFPLENBQUNqSyxHQUFXaUssT0FBTyxDQUFDaEs7OztJQVh2Q2tLLGtEQUFZN0ksU0FBUThJLFlBQVdoSyxNQUFLQyxPQUFNaFMsT0FBTWlTO1FBQzVDekIsR0FBQUEsNEJBQVF1TCxHQUFDQSxZQUFXaEssTUFBS0MsT0FBTWhTLE9BQU1pUyxPQUNqQzVJLEdBQUFBLDJCQUFVc1MsbUNBQVUxSixPQUFNZ0I7OztJQVRsQytJLDhDQUFRakssTUFBS0MsT0FBTWlCLFNBQVE4SSxZQUFXL2IsT0FBTWlTO1FBQ3hDLEVBQUVnSyxFQUFHLEVBQUdsSyxLQUFLRSxPQUNYaUssRUFBSSxFQUFHSix1Q0FBWTdJLFNBQVE4SSxZQUFXaEssTUFBS0MsT0FBTWhTLE9BQU1pUyxNQUN6RDs7O0lBaEpKa0ssMkNBQU1DLE1BQTJEcGMsT0FBTWlTOzs7Ozs7S0FFL0RvSyxPQUNJN0QsNENBQWlCNEQsTUFBS3BjLE9BQVN5Wix5Q0FBYzJDLE1BQUtwYyxPQUFNaVM7S0FXNURxSyxRQUNJMUMsR0FBQUEsb0NBQVcsU0FBUTJDLGNBQWMsQ0FBQzVKLElBQzlCdEosR0FBQUEsMkJBQVUyUyxHQUFBQSxtQ0FBU2pLLE1BQUtDLE9BQU1pQixTQUFRc0osY0FBYyxDQUFDOUosSUFBU3pTLFFBQU9xYztLQUU3RUc7TUFDSTVMLE1BQUsyTCxjQUFjLENBQUMzSjs7VUFFWixFQUFFMEosTUFBTTs7Ozs7VUFHUixFQUFFeEMsR0FBQUEsK0JBQVcyQyxZQUFXQyxXQUFVSixNQUFNOzs7S0FuQnBESyxVQUNJdFQsR0FBQUEsMkJBQVUyUSxvQ0FBUy9HO0tBRXZCMkosZUFDSUwsY0FBYyxDQUFDMUosR0FBU3hKLEdBQUFBLDJCQUFVd1IsR0FBQUEsd0NBQWM3YSxPQUFNZ1MsUUFBTzJLO0tBRWpFRSxRQUNJOUMsR0FBQUEsK0JBQVc2QyxZQUFZLENBQUNqTCxHQUFXaUwsWUFBWSxDQUFDaEw7UUFjeERpSSxHQUFBQSwrQkFBVzBDLGNBQWMsQ0FBQzdKO09BQ3RCcEssTUFBTWlVLGNBQWMsQ0FBQ2hLOztxQkFFYixFQUFFc0ssTUFBTSxHQUFLTDs7Ozs7cUJBR2IsRUFBRWpGLEdBQUFBLGlDQUFha0YsWUFBV0MsVUFBUyxhQUFLLEVBQUVHLE1BQU0sR0FBS0w7Ozs7O0lDNW5CckVNLGtEQUFLbGU7Ozs7S0FFR21lLGFBQ0kxRiwrQkFBZTJGO0tBRW5CQyxtQkFDSTlOLEdBQUFBLDhCQUFhMU0saUNBQUNBLGlDQUFBOEQsZ0NBQWdCd1csYUFBYzFGOztPQUF5QnJXO1FBRTdFME0sR0FBQUEsNkJBQUksR0FBQyxHQUNELEVBQUV5RyxHQUFBQSw0QkFBRyxHQUFDLEdBQUUsRUFBRWpGLDZCQUFLLGtDQUFpQyxJQUM5Q3hCLEdBQUFBLDZCQUFJLEdBQUMsR0FBRSxHQUFDLElBQ1IwRyxHQUFBQSwrQkFBTSxFQUFFZ0QsK0NBQVksbUJBQWtCbkMsdUNBQVFpSSw0Q0FBUyxHQUFFLEdBQUMsSUFDMURyRyw2Q0FBd0I1QywwQ0FBTzZDLGFBQy9CcUYsZ0NBQVdsSSwwQ0FBTzZDLFlBQVdtRyxrQkFDL0I7Ozs7Ozs7O0lDSVJFLDRDQUNJckssaUNBQ0ksRUFFRUMsRUFBTyxFQUNMLEVBQUVnQix3Q0FBbUI7O01BQ25CSixxQ0FBZ0I7O01BQ2hCSSx3Q0FBbUI7O01BQ25CQSx3Q0FBbUI7O0tBQ3JCLEdBUEZaLEVBQUk7O0lBQ0pDLEVBQUssRUFBR2dLLGlEQU9WO0lBakNSQyxtREFBS3plOzs7O0tBRUdtZSxhQUNJMUYsK0JBQWUyRjtLQUVuQkMsbUJBQ0k5TixHQUFBQSw4QkFBYTFNLGlDQUFDQSxpQ0FBQThELGdDQUFnQndXLGFBQWMxRjs7T0FBeUJyVztRQUU3RTBNLEdBQUFBLDZCQUFJLEdBQUMsR0FDRCxFQUFFeUcsR0FBQUEsNEJBQUcsR0FBQyxHQUFFLEVBQUVqRiw2QkFBSyxtQkFBa0IsSUFDL0J4QixHQUFBQSw2QkFBSSxHQUFDLEdBQ0gsRUFBRXdCLDZCQUFLLHdEQUNMQSw2QkFBSyxxRUFDTEEsNkJBQUssb0lBQ0xBLDZCQUFLLDJGQUNQLElBQ0ZpRixHQUFBQSw0QkFBRyxHQUFDLEdBQUUsRUFBRWpGLDZCQUFLLGtDQUFpQyxJQUM5Q2tGLEdBQUFBLCtCQUFNLEVBQUVnRCwrQ0FBWSxtQkFBa0JuQyx1Q0FBUXFJLDZDQUFTLEdBQUUsR0FBQyxJQUMxRG5CLGdDQUFXZ0IsMkNBQU9yRyxZQUFXbUcsa0JBQy9COztJRTVDUk0sd0NBQUt0YztLQUVHdWMsV0FBQSxTQUFTNVA7bUJBQ0YzTSxLQUFLLENBQUNpQixHQUFpQjBMLFdBQ3RCLEVBQUVILHlDQUFNLFdBQVVzQiw2Q0FBMEIsR0FBRSxJQUc5QyxHQUFDOztLQUVUME8sV0FDSXBVLEdBQUFBLDJCQUNJLFNBQUV1RTtVQUFXYixHQUFBQSwwQ0FBYSxFQUFFMkIsdUNBQVdnUCxzQ0FBYzlQLFVBQVEsR0FBSzRQLFNBQVM1UCxXQUFTLEVBQUVzQiw2QkFBYXZCLG9DQUFZQyxVQUFRO0tBQ3ZIWjtRQUVaVSxHQUFBQSw2QkFBUyxFQUFFSSxzQ0FBRyxXQUFVLEdBQ3BCLEVBQUVJLEdBQUFBLDZCQUFTLEVBQUVKLHNDQUFHLGNBQWEsYUFBRyxFQUFFRCxHQUFBQSw0QkFBUSxHQUFDLEdBQUUsRUFBRXFCLDZCQUFVLFlBQVcsR0FBRSxHQUFLdU8sWUFDekUzUSxHQUFBQSxpQ0FBYSxFQUFFZ0Isc0NBQUcsV0FBVSxHQUMxQjtRQUFFbFAsTUFBS3FDLEtBQUssQ0FBQ2lCOztZQUUrQitMLEdBQUFBLDZCQUFTMFAsdUNBQTdDTix3Q0FBZ0JwYyxLQUFLLENBQUNtQjs7WUFHWTZMLEdBQUFBLDZCQUFTMlAsc0NBQTNDZCx1Q0FBZTdiLEtBQUssQ0FBQ2tCOztPQUM3QixHQUNKOztJQXJEUjBiLCtCQUNJcFMsbUNBQ0ksRUFBRUcsRUFBSSxFQUFHM0osOEJBQ1ArSixFQUFNLEVBQUdNLGdDQUNUTCxFQUFJLEVBQUdzUiw2QkFDVDsiCn0=