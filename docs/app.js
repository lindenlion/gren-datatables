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
      return $gren_lang$core$Maybe$Just({ bm: i, a2: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_findLast = F2(function (pred, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ bm: i, a2: element });
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
  if (region.af.w === region.at.w) {
    return "on line " + region.af.w;
  }
  return (
    "on lines " + region.af.w + " through " + region.at.w
  );
}
var $gren_lang$core$Dict$foldl$ = function(func, acc, dict) {
	foldl:
	while (true) {
		if (dict.$ === -2) {
			return acc;
		} else {
			var _v1 = dict.a;
			var key = _v1.br;
			var value = _v1.a2;
			var left = _v1.bt;
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
	var model = { bB: people, aM: '', aV: $author$project$DataTable$updateActiveRowId$('', $author$project$DataTable$updateSortState$('Year', 0, $author$project$DataTable$setScrollingPaginationWith$(10, [ 0, 5, 25, 50 ], $author$project$DataTable$new('Presidents')))) };
	return model;
};
var $author$project$DataTable$initialSort = function(header) {
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, k: [ { ae: header, P: 0 } ], l: 'sortableTable' };
};
var $author$project$Example$Presidents$init = function(people) {
	var model = { bB: people, aM: '', aV: $author$project$DataTable$initialSort('State') };
	return model;
};
var $author$project$Example$Paginated$person$ = function(name, year, city, state) {
	return { an: city, i: name, aS: state, a3: year };
};
var $author$project$Example$Paginated$person = F4($author$project$Example$Paginated$person$);
var $author$project$Example$Paginated$presidents = [ $author$project$Example$Paginated$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$Paginated$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$Paginated$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$Paginated$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$Paginated$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$Paginated$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$Paginated$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$Paginated$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$Paginated$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$Paginated$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$Paginated$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$Paginated$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$Paginated$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$Paginated$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$Paginated$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$Paginated$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$Paginated$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$Paginated$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$Paginated$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$Paginated$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$Paginated$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$Paginated$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$Paginated$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$Paginated$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$Paginated$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$Paginated$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$Paginated$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$Paginated$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$Paginated$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$Paginated$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$Paginated$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$Paginated$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$Paginated$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$Paginated$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$Paginated$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$Paginated$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$Paginated$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$Paginated$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$Paginated$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$Paginated$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$Paginated$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$Paginated$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$Paginated$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$Paginated$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$Example$Presidents$person$ = function(name, year, city, state) {
	return { an: city, i: name, aS: state, a3: year };
};
var $author$project$Example$Presidents$person = F4($author$project$Example$Presidents$person$);
var $author$project$Example$Presidents$presidents = [ $author$project$Example$Presidents$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$Presidents$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$Presidents$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$Presidents$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$Presidents$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$Presidents$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$Presidents$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$Presidents$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$Presidents$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$Presidents$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$Presidents$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$Presidents$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$Presidents$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$Presidents$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$Presidents$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$Presidents$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$Presidents$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$Presidents$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$Presidents$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$Presidents$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$Presidents$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$Presidents$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$Presidents$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$Presidents$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$Presidents$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$Presidents$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$Presidents$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$Presidents$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$Presidents$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$Presidents$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$Presidents$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$Presidents$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$Presidents$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$Presidents$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$Presidents$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$Presidents$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$Presidents$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$Presidents$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$Presidents$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$Presidents$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$DocBook$init = { C: 0, M: $author$project$Example$Paginated$init($author$project$Example$Paginated$presidents), N: $author$project$Example$Presidents$init($author$project$Example$Presidents$presidents) };


// ELEMENT

var _Browser_element = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.bn,
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
    impl.bn,
    impl.bR,
    impl.bP,
    function (sendToApp, initialModel) {
      var divertHrefToApp = impl.ad && impl.ad(sendToApp);
      var view = impl.bS;
      var title = _VirtualDom_doc.title;
      var bodyNode = _VirtualDom_doc.body;
      var currNode = _VirtualDom_virtualize(bodyNode);
      return _Browser_makeAnimator(initialModel, function (model) {
        _VirtualDom_divertHrefToApp = divertHrefToApp;
        var doc = view(model);
        var nextNode = _VirtualDom_node("body")([])(doc.a8);
        var patches = _VirtualDom_diff(currNode, nextNode);
        bodyNode = _VirtualDom_applyPatches(
          bodyNode,
          currNode,
          patches,
          sendToApp
        );
        currNode = nextNode;
        _VirtualDom_divertHrefToApp = 0;
        title !== doc.aZ &&
          (_VirtualDom_doc.title = title = doc.aZ);
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
  var onUrlChange = impl.bz;
  var onUrlRequest = impl.bA;
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
                curr.aK === next.aK &&
                curr.ay === next.ay &&
                curr.aG.a === next.aG.a
                ? $gren_lang$browser$Browser$Internal(next)
                : $gren_lang$browser$Browser$External(href)
            )
          );
        }
      });
    },
    bn: function (flags) {
      return A3(impl.bn, flags, _Browser_getUrl(), key);
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
    ? { bk: "hidden", bb: "visibilitychange" }
    : typeof _VirtualDom_doc.mozHidden !== "undefined"
    ? { bk: "mozHidden", bb: "mozvisibilitychange" }
    : typeof _VirtualDom_doc.msHidden !== "undefined"
    ? { bk: "msHidden", bb: "msvisibilitychange" }
    : typeof _VirtualDom_doc.webkitHidden !== "undefined"
    ? { bk: "webkitHidden", bb: "webkitvisibilitychange" }
    : { bk: "hidden", bb: "visibilitychange" };
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
      bg: {
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
        a2: _Json_wrap(string),
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
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bm: index, G: result.a }));

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
          keyValuePairs.push({ br: key, a2: result.a });
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
          a2: _Json_wrap(value),
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
      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ bm: i, G: result.a }));
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
      a2: _Json_wrap(value),
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
    bj: _Utils_chr(firstChar),
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
      bs: _Utils_chr(string[string.length - 1]),
      bF: string.slice(string.length - 1),
    });
  }

  // last char is a point
  return $gren_lang$core$Maybe$Just({
    bs: _Utils_chr(String.fromCodePoint(possibleLastPoint)),
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
				var f = _v1.i;
				var err = _v1.G;
				var isSimple = function () {
					var _v2 = $gren_lang$core$String$popFirst(f);
					if (_v2.$ === 1) {
						return false;
					} else {
						var _v3 = _v2.a;
						var _char = _v3.bj;
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
				var i = _v4.bm;
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
				var json = _v8.a2;
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
    impl.bn,
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
  var model = initPair.aC;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);

  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper((model = pair.aC), viewMetadata);
    _Platform_enqueueEffects(managers, pair.ap, subscriptions(model));
  }

  _Platform_enqueueEffects(managers, initPair.ap, subscriptions(model));

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
      descendantsCount += kid.by.b || 0;
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
        tag === 1 ? kids[i] : kids[i].by,
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

    var xKey = x.br;
    var yKey = y.br;
    var xNode = x.by;
    var yNode = y.by;

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
      var xNextKey = xNext.br;
      var xNextNode = xNext.by;
      oldMatch = yKey === xNextKey;
    }

    if (yNext) {
      var yNextKey = yNext.br;
      var yNextNode = yNext.by;
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
    var xNode = x.by;
    _VirtualDom_removeNode(changes, localPatches, x.br, xNode, index);
    index += xNode.b || 0;
    xIndex++;
  }

  while (yIndex < yLen) {
    var endInserts = endInserts || [];
    var y = yKids[yIndex];
    _VirtualDom_insertNode(
      changes,
      localPatches,
      y.br,
      y.by,
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
    var vKid = tag === 1 ? vKids[j] : vKids[j].by;
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
				return $gren_lang$core$Maybe$Just({ X: frag, ay: str, Z: path, aG: $gren_lang$core$Maybe$Nothing, aK: protocol, aM: params });
			case 1:
				var i = _v0[0];
				var _v1 = $gren_lang$core$String$toInt($gren_lang$core$String$dropFirst$(i + 1, str));
				if (_v1.$ === 1) {
					return $gren_lang$core$Maybe$Nothing;
				} else {
					var port_ = _v1;
					return $gren_lang$core$Maybe$Just({ X: frag, ay: $gren_lang$core$String$takeFirst$(i, str), Z: path, aG: port_, aK: protocol, aM: params });
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
	return _Browser_element({ bn: function(_v0) {
			return { ap: $gren_lang$core$Platform$Cmd$none, aC: impl.bn };
		}, bP: function(_v1) {
			return $gren_lang$core$Platform$Sub$none;
		}, bR: F2(function(msg, model) {
				return { ap: $gren_lang$core$Platform$Cmd$none, aC: A2(impl.bR, msg, model) };
			}), bS: impl.bS });
};
var $author$project$Example$Paginated$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aM: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aV: newState });
	}
};
var $author$project$Example$Paginated$update = F2($author$project$Example$Paginated$update$);
var $author$project$Example$Presidents$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aM: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aV: newState });
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
		var selected = _v3.bJ;
		var sortDirections = _v3.aR;
		var clickActions = _v3.bc;
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
var $author$project$DataTable$defaultCustomizations = { a7: { a4: $gren_lang$core$Maybe$Nothing, a6: $gren_lang$core$Maybe$Nothing }, am: $gren_lang$core$Maybe$Nothing, bd: function(_v0) {
	return $gren_lang$core$Maybe$Nothing;
}, aO: $author$project$DataTable$simpleRowAttrs, aU: [ $gren_lang$browser$Html$Attributes$class('dataTable') ], aW: [  ], aX: $gren_lang$core$Maybe$Nothing, aY: $author$project$DataTable$defaultTableHeader };
var $author$project$DataTable$config = function(_v0) {
	var toId = _v0.a$;
	var toMsg = _v0.a1;
	var columns = _v0.ao;
	return { ao: A2($gren_lang$core$Array$map, function(_v1) {
			var cData = _v1;
			return cData;
		}, columns), aq: $author$project$DataTable$defaultCustomizations, a$: toId, a1: toMsg };
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
var $author$project$Example$Paginated$config = $author$project$DataTable$config({ ao: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.i;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.a3;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.an;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.aS;
		}) ], a$: function ($) {
		return $.i;
	}, a1: $author$project$Example$Paginated$SetTableState });
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
		return $gren_lang$core$Maybe$Just({ bj: value, bF: $gren_lang$core$Array$dropFirst$(1, array) });
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
					return $.bj;
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
	var toMsg = _v0.a1;
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
	var toId = _v0.a$;
	var _v2 = _v1;
	var pageSize = _v2.d;
	var activeRowId = _v2.f;
	var pagination = _v2.b;
	var rowCursor = $gren_lang$core$Maybe$withDefault$(0, $gren_lang$core$Maybe$map$(function(i) {
				return i + 1;
			}, $gren_lang$core$Maybe$map$(function ($) {
					return $.bm;
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
			var _v2 = _v1.bj;
			var name = _v2.i;
			var sorter = _v2.z;
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
	var sortColumns = _v1.k;
	var pageSize = _v1.d;
	var activeRowId = _v1.f;
	var pagination = _v1.b;
	var tableId = _v1.l;
	var _v2 = $gren_lang$core$Array$popFirst(sortColumns);
	if (!_v2.$) {
		var _v3 = _v2.a;
		var _v4 = _v3.bj;
		var sortColumnName = _v4.ae;
		var sortDirection = _v4.P;
		var rest = _v3.bF;
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
	var columns = _v0.ao;
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
	return { bc: clickActions, i: name, bJ: selected, aR: sortDirections };
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
						return { bt: idx, bG: val };
					}), $gren_lang$core$Array$reverse(nonEmptyList));
			var filteredList = A2($gren_lang$core$Array$keepIf, function(_v8) {
					var sortColumnName = _v8.bG.ae;
					return _Utils_eq(name, sortColumnName);
				}, indexedList);
			var _v6 = $gren_lang$core$Array$takeFirst$(1, filteredList);
			if (_v6.length === 1) {
				var _v7 = _v6[0];
				var index = _v7.bt;
				var sortDirection = _v7.bG.P;
				return $gren_lang$core$Maybe$Just({ P: sortDirection, bM: ($gren_lang$core$Array$length(indexedList) === 1) ? 0 : (index + 1) });
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
	return { br: toId(data), by: $author$project$DataTable$viewRowHelp$(columns, toRowAttrs, toId, toMsg, state, data) };
};
var $author$project$DataTable$viewRow = F6($author$project$DataTable$viewRow$);
var $author$project$DataTable$view$ = function(conf, state, data) {
	var _v0 = conf;
	var toId = _v0.a$;
	var toMsg = _v0.a1;
	var columns = _v0.ao;
	var customizations = _v0.aq;
	var rows = $author$project$DataTable$getPaginatedData$(conf, state, $author$project$DataTable$getSortedData$(conf, state, data));
	var tbody = A3($gren_lang$browser$Html$Keyed$node, 'tbody', customizations.aW, A2($gren_lang$core$Array$map, A5($author$project$DataTable$viewRow, toId, toMsg, columns, customizations.aO, state), rows));
	var withFoot = function () {
		var _v3 = customizations.aX;
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
	var theadDetails = customizations.aY(A2($gren_lang$core$Array$map, A2($author$project$DataTable$toHeaderInfo, state, toMsg), headers));
	var thead = A2($gren_lang$browser$Html$thead, theadDetails.D, theadDetails.E);
	return A2($gren_lang$browser$Html$table, customizations.aU, function () {
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
	var people = _v0.bB;
	var tableState = _v0.aV;
	var query = _v0.aM;
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
var $author$project$Example$Presidents$config = $author$project$DataTable$config({ ao: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.i;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.a3;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.an;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.aS;
		}) ], a$: function ($) {
		return $.i;
	}, a1: $author$project$Example$Presidents$SetTableState });
var $author$project$Example$Presidents$view = function(_v0) {
	var people = _v0.bB;
	var tableState = _v0.aV;
	var query = _v0.aM;
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
var $author$project$DocBook$main = $gren_lang$browser$Browser$sandbox({ bn: $author$project$DocBook$init, bR: $author$project$DocBook$update, bS: $author$project$DocBook$view });
_Platform_export({'DocBook':{'init':$author$project$DocBook$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));
//# sourceMappingURL=data:application/json;base64,ewogICAgInZlcnNpb24iOiAzLAogICAgInNvdXJjZXMiOiBbCiAgICAgICAgIkRpY3QiLAogICAgICAgICJBcnJheSIsCiAgICAgICAgIlNldCIsCiAgICAgICAgIkJhc2ljcyIsCiAgICAgICAgIkRhdGFUYWJsZSIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzIiwKICAgICAgICAiRG9jQm9vayIsCiAgICAgICAgIlN0cmluZyIsCiAgICAgICAgIkpzb24uRW5jb2RlIiwKICAgICAgICAiSnNvbi5EZWNvZGUiLAogICAgICAgICJDaGFyIiwKICAgICAgICAiUmVzdWx0IiwKICAgICAgICAiVmlydHVhbERvbSIsCiAgICAgICAgIlVybCIsCiAgICAgICAgIlRhc2siLAogICAgICAgICJQbGF0Zm9ybSIsCiAgICAgICAgIlBsYXRmb3JtLkNtZCIsCiAgICAgICAgIlBsYXRmb3JtLlN1YiIsCiAgICAgICAgIkJyb3dzZXIiLAogICAgICAgICJIdG1sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzIiwKICAgICAgICAiSHRtbC5FdmVudHMiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYSIsCiAgICAgICAgIk1heWJlIiwKICAgICAgICAiTWF0aCIsCiAgICAgICAgIkh0bWwuS2V5ZWQiCiAgICBdLAogICAgInNvdXJjZXNDb250ZW50IjogWwogICAgICAgICJtb2R1bGUgRGljdCBleHBvc2luZ1xuICAgICggRGljdFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcbiAgICAsIGlzRW1wdHksIGNvdW50LCBnZXQsIG1lbWJlciwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCBrZXlzLCB2YWx1ZXNcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICAsIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmYsIG1lcmdlXG4gICAgKVxuXG57LXwgQSBkaWN0aW9uYXJ5IG1hcHBpbmcgdW5pcXVlIGtleXMgdG8gdmFsdWVzLiBUaGUga2V5cyBjYW4gYmUgYW55IGNvbXBhcmFibGVcbnR5cGUuIFRoaXMgaW5jbHVkZXMgYEludGAsIGBGbG9hdGAsIGBUaW1lYCwgYENoYXJgIGFuZCBgU3RyaW5nYC5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBEaWN0XG5cblxuQGRvY3MgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCB1cGRhdGUsIHVwZGF0ZVdpdGhEZWZhdWx0LCByZW1vdmVcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBpc0VtcHR5LCBjb3VudCwgZ2V0LCBtZW1iZXIsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuXG5cbiMjIEFycmF5c1xuXG5AZG9jcyBrZXlzLCB2YWx1ZXNcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3MgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgdW5pb24sIGludGVyc2VjdCwgZGlmZiwgbWVyZ2VcblxuLX1cblxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKC4uKVxuXG5cblxuLS0gRElDVElPTkFSSUVTXG4tLSBUaGUgY29sb3Igb2YgYSBub2RlLiBMZWF2ZXMgYXJlIGNvbnNpZGVyZWQgQmxhY2suXG5cblxudHlwZSBOQ29sb3JcbiAgICA9IFJlZFxuICAgIHwgQmxhY2tcblxuXG57LXwgQSBkaWN0aW9uYXJ5IG9mIGtleXMgYW5kIHZhbHVlcy4gU28gYSBgRGljdCBTdHJpbmcgVXNlcmAgaXMgYSBkaWN0aW9uYXJ5XG50aGF0IGxldHMgeW91IGxvb2sgdXAgYSBgU3RyaW5nYCAoc3VjaCBhcyB1c2VyIG5hbWVzKSBhbmQgZmluZCB0aGUgYXNzb2NpYXRlZFxuYFVzZXJgLlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKCBEaWN0IClcblxuICAgIHVzZXJzIDogRGljdCBTdHJpbmcgVXNlclxuICAgIHVzZXJzID1cbiAgICAgICAgRGljdC5lbXB0eVxuICAgICAgICAgICAgfD4gRGljdC5zZXQgXCJBbGljZVwiIChtYWtlVXNlciBcIkFsaWNlXCIgMjggMS42NSlcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQm9iXCIgKG1ha2VVc2VyIFwiQm9iXCIgMTkgMS44MilcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQ2h1Y2tcIiAobWFrZVVzZXIgXCJDaHVja1wiIDMzIDEuNzUpXG5cbiAgICB0eXBlIGFsaWFzIFVzZXIgPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgLCBoZWlnaHQgOiBGbG9hdFxuICAgICAgICB9XG5cbiAgICBtYWtlVXNlciA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gVXNlclxuICAgIG1ha2VVc2VyIG5hbWUgYWdlIGhlaWdodCA9XG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgLCBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgfVxuLX1cbnR5cGUgRGljdCBrIHZcbiAgICA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA6IE5Db2xvciwga2V5IDogaywgdmFsdWUgOiB2LCBsZWZ0IDogKERpY3QgayB2KSwgcmlnaHQgOiAoRGljdCBrIHYpIH1cbiAgICB8IFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBkaWN0aW9uYXJ5LlxuLX1cbmVtcHR5IDogRGljdCBrIHZcbmVtcHR5ID1cbiAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm5vZGUgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5ub2RlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICBSQk5vZGVfZ3Jlbl9idWlsdGluXG4gICAgICAgIHsgY29sb3IgPSBjb2xvclxuICAgICAgICAsIGtleSA9IGtleVxuICAgICAgICAsIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLCBsZWZ0ID0gbGVmdFxuICAgICAgICAsIHJpZ2h0ID0gcmlnaHRcbiAgICAgICAgfVxuXG5cbnstfCBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBhIGtleS4gSWYgdGhlIGtleSBpcyBub3QgZm91bmQsIHJldHVyblxuYE5vdGhpbmdgLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSBhcmUgbm90IHN1cmUgaWYgYSBrZXkgd2lsbCBiZSBpbiB0aGVcbmRpY3Rpb25hcnkuXG5cbiAgICBhbmltYWxzID0gRGljdC5lbXB0eSB8PiBEaWN0LnNldCBcIlRvbVwiIENhdCB8PiBEaWN0LnNldCBcIkplcnJ5XCIgTW91c2VcblxuICAgIGdldCBcIlRvbVwiICAgYW5pbWFscyA9PSBKdXN0IENhdFxuICAgIGdldCBcIkplcnJ5XCIgYW5pbWFscyA9PSBKdXN0IE1vdXNlXG4gICAgZ2V0IFwiU3Bpa2VcIiBhbmltYWxzID09IE5vdGhpbmdcblxuLX1cbmdldCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gTWF5YmUgdlxuZ2V0IHRhcmdldEtleSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIHRhcmdldEtleSBrZXkgaXNcbiAgICAgICAgICAgICAgICBMVCAtPlxuICAgICAgICAgICAgICAgICAgICBnZXQgdGFyZ2V0S2V5IGxlZnRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgdmFsdWVcblxuICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgIGdldCB0YXJnZXRLZXkgcmlnaHRcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEga2V5IGlzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tZW1iZXIgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IEJvb2xcbm1lbWJlciBrZXkgZGljdCA9XG4gICAgd2hlbiBnZXQga2V5IGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIHBhaXJzIGluIHRoZSBkaWN0aW9uYXJ5LlxuLX1cbmNvdW50IDogRGljdCBrIHYgLT4gSW50XG5jb3VudCBkaWN0ID1cbiAgICBjb3VudEhlbHAgMCBkaWN0XG5cblxuY291bnRIZWxwIDogSW50IC0+IERpY3QgayB2IC0+IEludFxuY291bnRIZWxwIG4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBuXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGNvdW50SGVscCAoY291bnRIZWxwIChuICsgMSkgcmlnaHQpIGxlZnRcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0LCBvciBsb3dlc3QsIGtleS12YWx1ZSBwYWlyLlxuLX1cbmZpcnN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxuZmlyc3QgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCB9IC0+XG4gICAgICAgICAgICBmaXJzdCBsZWZ0XG5cblxuey18IFJldHJpZXZlIHRoZSBsYXN0LCBvciBoaWdoZXN0LCBrZXktdmFsdWUgcGFpci5cbi19XG5sYXN0IDogRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxubGFzdCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgcmlnaHQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbGFzdCByaWdodFxuXG5cbnstfCBGaW5kIHRoZSBmaXJzdCBrZXktdmFsdWUgcGFpciB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kRmlyc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRGaXJzdCBmbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kRmlyc3QgZm4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgZm4ga2V5IHZhbHVlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRGaXJzdCBmbiByaWdodFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IEZpbmQgdGhlIGxhc3Qga2V5LXZhbHVlIHBhaXIgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZExhc3QgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpbmRMYXN0IGZuIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGZpbmRMYXN0IGZuIHJpZ2h0IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBmbiBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZExhc3QgZm4gbGVmdFxuXG4gICAgICAgICAgICAgICAgZm91bmRWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBmb3VuZFZhbHVlXG5cblxuey18IENoZWNrcyBpZiBhbnkga2V5LXZhbHVlIHBhaXIgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFueSA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYW55IGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IGZuIGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCBrZXktdmFsdWUgcGFpcnMgaW4gdGhlIGRpY3Rpb25hcnkgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFsbCA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gQm9vbFxuYWxsIGZuIGRpY3QgPVxuICAgIHdoZW4gZmluZEZpcnN0IChcXGtleSB2YWx1ZSAtPiBub3QgPHwgZm4ga2V5IHZhbHVlKSBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IERldGVybWluZSBpZiBhIGRpY3Rpb25hcnkgaXMgZW1wdHkuXG5cbiAgICBpc0VtcHR5IGVtcHR5ID09IFRydWVcblxuLX1cbmlzRW1wdHkgOiBEaWN0IGsgdiAtPiBCb29sXG5pc0VtcHR5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4gXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgU2V0cyBhIHZhbHVlIGZvciBhIGdpdmVuIGtleS4gRXhpc3RpbmcgdmFsdWVzIHdpbGwgYmUgcmVwbGFjZWQuXG5JZiB0aGUga2V5IGlzbid0IGFscmVhZHkgcmVnaXN0ZXJlZCwgdGhlIGtleS12YWx1ZSBwYWlyIHdpbGwgYmUgaW5zZXJ0ZWQuXG4tfVxuc2V0IDogY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5zZXQgc2V0S2V5IHNldFZhbHVlIGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHNldEhlbHAgc2V0S2V5IHNldFZhbHVlIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIEJsYWNrIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0XG5cbiAgICAgICAgeCAtPlxuICAgICAgICAgICAgeFxuXG5cbnNldEhlbHAgOiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnNldEhlbHAga2V5IHZhbHVlIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgLS0gTmV3IG5vZGVzIGFyZSBhbHdheXMgcmVkLiBJZiBpdCB2aW9sYXRlcyB0aGUgcnVsZXMsIGl0IHdpbGwgYmUgZml4ZWRcbiAgICAgICAgICAgIC0tIHdoZW4gYmFsYW5jaW5nLlxuICAgICAgICAgICAgbm9kZSBSZWQga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9ICBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBjb21wYXJlIGtleSBuS2V5IGlzXG4gICAgICAgICAgICAgICAgTFQgLT5cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHNldEhlbHAga2V5IHZhbHVlIG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgIEVRIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgbkNvbG9yIG5LZXkgdmFsdWUgbkxlZnQgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSBuTGVmdCAoc2V0SGVscCBrZXkgdmFsdWUgblJpZ2h0KVxuXG5cbmJhbGFuY2UgOiBOQ29sb3IgLT4gayAtPiB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2IC0+IERpY3QgayB2XG5iYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICB3aGVuIHJpZ2h0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGtleSB2YWx1ZSAobm9kZSBCbGFjayBsSyBsViBsTGVmdCBsUmlnaHQpIChub2RlIEJsYWNrIHJLIHJWIHJMZWZ0IHJSaWdodClcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBySyByViAobm9kZSBSZWQga2V5IHZhbHVlIGxlZnQgckxlZnQpIHJSaWdodFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxsSywgdmFsdWUgPSBsbFYsIGxlZnQgPSBsbExlZnQsIHJpZ2h0ID0gbGxSaWdodCB9LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgUmVkIGxLIGxWIChub2RlIEJsYWNrIGxsSyBsbFYgbGxMZWZ0IGxsUmlnaHQpIChub2RlIEJsYWNrIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuXG57LXwgUmVtb3ZlIGEga2V5LXZhbHVlIHBhaXIgZnJvbSBhIGRpY3Rpb25hcnkuIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kLFxubm8gY2hhbmdlcyBhcmUgbWFkZS5cbi19XG5yZW1vdmUgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmUga2V5IGRpY3QgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICB3aGVuIHJlbW92ZUhlbHAga2V5IGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBuS2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBCbGFjayBuS2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuICAgICAgICB4IC0+XG4gICAgICAgICAgICB4XG5cblxuey18IFRoZSBlYXNpZXN0IHRoaW5nIHRvIHJlbW92ZSBmcm9tIHRoZSB0cmVlLCBpcyBhIHJlZCBub2RlLiBIb3dldmVyLCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlXG5ub2RlIHRvIHJlbW92ZSwgd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZiBpdCB3aWxsIGJlIHJlZCBvciBub3QuIFRoaXMgcmVtb3ZlIGltcGxlbWVudGF0aW9uXG5tYWtlcyBzdXJlIHRoYXQgdGhlIGJvdHRvbSBub2RlIGlzIHJlZCBieSBtb3ZpbmcgcmVkIGNvbG9ycyBkb3duIHRoZSB0cmVlIHRocm91Z2ggcm90YXRpb25cbmFuZCBjb2xvciBmbGlwcy4gQW55IHZpb2xhdGlvbnMgdGhpcyB3aWxsIGNhdXNlLCBjYW4gZWFzaWx5IGJlIGZpeGVkIGJ5IGJhbGFuY2luZyBvbiB0aGUgd2F5XG51cCBhZ2Fpbi5cbi19XG5yZW1vdmVIZWxwIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlSGVscCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5IDwga2V5IHRoZW5cbiAgICAgICAgICAgICAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2ssIGxlZnQgPSBsTGVmdCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGxMZWZ0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbW92ZVJlZExlZnQgZGljdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9IG5MZWZ0LCByaWdodCA9IG5SaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVIZWxwIHRhcmdldEtleSBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmVtb3ZlSGVscEVRR1QgdGFyZ2V0S2V5IChyZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQpXG5cblxucmVtb3ZlSGVscFByZXBFUUdUIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBOQ29sb3IgLT4gY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwUHJlcEVRR1QgdGFyZ2V0S2V5IGRpY3QgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQgPVxuICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgY29sb3IgbEsgbFYgbExlZnQgKG5vZGUgUmVkIGtleSB2YWx1ZSBsUmlnaHQgcmlnaHQpXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgd2hlbiByaWdodCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2sgfSB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSZWRSaWdodCBkaWN0XG5cbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjaywgbGVmdCA9IFJCRW1wdHlfZ3Jlbl9idWlsdGluIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbW92ZVJlZFJpZ2h0IGRpY3RcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgZGljdFxuXG5cbnstfCBXaGVuIHdlIGZpbmQgdGhlIG5vZGUgd2UgYXJlIGxvb2tpbmcgZm9yLCB3ZSBjYW4gcmVtb3ZlIGJ5IHJlcGxhY2luZyB0aGUga2V5LXZhbHVlXG5wYWlyIHdpdGggdGhlIGtleS12YWx1ZSBwYWlyIG9mIHRoZSBsZWZ0LW1vc3Qgbm9kZSBvbiB0aGUgcmlnaHQgc2lkZSAodGhlIGNsb3Nlc3QgcGFpcikuXG4tfVxucmVtb3ZlSGVscEVRR1QgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwRVFHVCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgaWYgdGFyZ2V0S2V5ID09IGtleSB0aGVuXG4gICAgICAgICAgICAgICAgd2hlbiBnZXRNaW4gcmlnaHQgaXNcbiAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSA9IG1pbktleSwgdmFsdWUgPSBtaW5WYWx1ZSB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIG1pbktleSBtaW5WYWx1ZSBsZWZ0IChyZW1vdmVNaW4gcmlnaHQpXG5cbiAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBiYWxhbmNlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IChyZW1vdmVIZWxwIHRhcmdldEtleSByaWdodClcblxuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5nZXRNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxuZ2V0TWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCA9ICgoUkJOb2RlX2dyZW5fYnVpbHRpbiBfKSBhcyBsZWZ0KSB9IC0+XG4gICAgICAgICAgICBnZXRNaW4gbGVmdFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5yZW1vdmVNaW4gOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxucmVtb3ZlTWluIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQgPSAoKFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDb2xvciwgbGVmdCA9IGxMZWZ0IH0pIGFzIGxlZnQpLCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGxDb2xvciBpc1xuICAgICAgICAgICAgICAgIEJsYWNrIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbExlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZU1pbiBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtb3ZlUmVkTGVmdCBkaWN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IG5Db2xvciwga2V5ID0gbktleSwgdmFsdWUgPSBuVmFsdWUsIGxlZnQgPSBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgKHJlbW92ZU1pbiBuTGVmdCkgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVNaW4gbGVmdCkgcmlnaHRcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbm1vdmVSZWRMZWZ0IDogRGljdCBrIHYgLT4gRGljdCBrIHZcbm1vdmVSZWRMZWZ0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSAoUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBybEssIHZhbHVlID0gcmxWLCBsZWZ0ID0gcmxMLCByaWdodCA9IHJsUiB9KSBhcyByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgUmVkXG4gICAgICAgICAgICAgICAgcmxLXG4gICAgICAgICAgICAgICAgcmxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgayB2IChub2RlIFJlZCBsSyBsViBsTGVmdCBsUmlnaHQpIHJsTClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBySyByViBybFIgclJpZ2h0KVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG5tb3ZlUmVkUmlnaHQgOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxubW92ZVJlZFJpZ2h0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsbEssIHZhbHVlID0gbGxWLCBsZWZ0ID0gbGxMZWZ0LCByaWdodCA9IGxsUmlnaHQgfSwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBSZWRcbiAgICAgICAgICAgICAgICBsS1xuICAgICAgICAgICAgICAgIGxWXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgbGxLIGxsViBsbExlZnQgbGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBrIHYgbFJpZ2h0IChub2RlIFJlZCBySyByViByTGVmdCByUmlnaHQpKVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBCbGFja1xuICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodClcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIGRpY3RcblxuXG57LXwgVXBkYXRlIHRoZSB2YWx1ZSBvZiBhIGRpY3Rpb25hcnkgZm9yIGEgc3BlY2lmaWMga2V5IHdpdGggYSBnaXZlbiBmdW5jdGlvbi5cbi19XG51cGRhdGUgOiBjb21wYXJhYmxlIC0+IChNYXliZSB2IC0+IE1heWJlIHYpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG51cGRhdGUgdGFyZ2V0S2V5IGFsdGVyIGRpY3Rpb25hcnkgPVxuICAgIHdoZW4gYWx0ZXIgKGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgc2V0IHRhcmdldEtleSB2YWx1ZSBkaWN0aW9uYXJ5XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgcmVtb3ZlIHRhcmdldEtleSBkaWN0aW9uYXJ5XG5cblxuey18IFNhbWUgYXMgW3VwZGF0ZV0oI3VwZGF0ZSkgYnV0IGlmIHRoZSBrZXkgZG9lc24ndCBleGlzdCBpbiB0aGUgZGljdGlvbmFyeSwgYSBkZWZhdWx0IHZhbHVlXG5pcyBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIHVwZGF0ZSBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgYE1heWJlYC5cbi19XG51cGRhdGVXaXRoRGVmYXVsdCA6IGNvbXBhcmFibGUgLT4gdiAtPiAodiAtPiB2KSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxudXBkYXRlV2l0aERlZmF1bHQgdGFyZ2V0S2V5IGRlZmF1bHRWYWx1ZSBhbHRlciBkaWN0aW9uYXJ5ID1cbiAgICB3aGVuIGdldCB0YXJnZXRLZXkgZGljdGlvbmFyeSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBzZXQgdGFyZ2V0S2V5IChhbHRlciB2YWx1ZSkgZGljdGlvbmFyeVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIHNldCB0YXJnZXRLZXkgKGFsdGVyIGRlZmF1bHRWYWx1ZSkgZGljdGlvbmFyeVxuXG5cbnstfCBDcmVhdGUgYSBkaWN0aW9uYXJ5IHdpdGggb25lIGtleS12YWx1ZSBwYWlyLlxuLX1cbnNpbmdsZXRvbiA6IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuc2luZ2xldG9uIGtleSB2YWx1ZSA9XG4gICAgLS0gUm9vdCBub2RlIGlzIGFsd2F5cyBCbGFja1xuICAgIG5vZGUgQmxhY2sga2V5IHZhbHVlIFJCRW1wdHlfZ3Jlbl9idWlsdGluIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGRpY3Rpb25hcmllcy4gSWYgdGhlcmUgaXMgYSBjb2xsaXNpb24sIHByZWZlcmVuY2UgaXMgZ2l2ZW5cbnRvIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbnVuaW9uIDogRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnVuaW9uIHQxIHQyID1cbiAgICBmb2xkbCBzZXQgdDIgdDFcblxuXG57LXwgS2VlcCBhIGtleS12YWx1ZSBwYWlyIHdoZW4gaXRzIGtleSBhcHBlYXJzIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cblByZWZlcmVuY2UgaXMgZ2l2ZW4gdG8gdmFsdWVzIGluIHRoZSBmaXJzdCBkaWN0aW9uYXJ5LlxuLX1cbmludGVyc2VjdCA6IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5pbnRlcnNlY3QgdDEgdDIgPVxuICAgIGtlZXBJZiAoXFxrIF8gLT4gbWVtYmVyIGsgdDIpIHQxXG5cblxuey18IEtlZXAgYSBrZXktdmFsdWUgcGFpciB3aGVuIGl0cyBrZXkgZG9lcyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgZGljdGlvbmFyeS5cbi19XG5kaWZmIDogRGljdCBjb21wYXJhYmxlIGEgLT4gRGljdCBjb21wYXJhYmxlIGIgLT4gRGljdCBjb21wYXJhYmxlIGFcbmRpZmYgdDEgdDIgPVxuICAgIGZvbGRsIChcXGsgdiB0IC0+IHJlbW92ZSBrIHQpIHQxIHQyXG5cblxuXG4tLSBUUkFOU0ZPUk1cblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiB0byBhbGwgdmFsdWVzIGluIGEgZGljdGlvbmFyeS5cbi19XG5tYXAgOiAoayAtPiBhIC0+IGIpIC0+IERpY3QgayBhIC0+IERpY3QgayBiXG5tYXAgZnVuYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIGNvbG9yIGtleSAoZnVuYyBrZXkgdmFsdWUpIChtYXAgZnVuYyBsZWZ0KSAobWFwIGZ1bmMgcmlnaHQpXG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGxvd2VzdCBrZXkgdG8gaGlnaGVzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRsIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzMzLDE5LDI4XVxuXG4tfVxuZm9sZGwgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkbCBmdW5jIGFjYyBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkbCBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZGwgZnVuYyBhY2MgbGVmdCkpIHJpZ2h0XG5cblxuey18IEZvbGQgb3ZlciB0aGUga2V5LXZhbHVlIHBhaXJzIGluIGEgZGljdGlvbmFyeSBmcm9tIGhpZ2hlc3Qga2V5IHRvIGxvd2VzdCBrZXkuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcblxuICAgIGdldEFnZXMgOiBEaWN0IFN0cmluZyBVc2VyIC0+IEFycmF5IFN0cmluZ1xuICAgIGdldEFnZXMgdXNlcnMgPVxuICAgICAgICBEaWN0LmZvbGRyIGFkZEFnZSBbXSB1c2Vyc1xuXG4gICAgYWRkQWdlIDogU3RyaW5nIC0+IFVzZXIgLT4gQXJyYXkgU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xuICAgIGFkZEFnZSBfIHVzZXIgYWdlcyA9XG4gICAgICAgIHVzZXIuYWdlIDo6IGFnZXNcblxuICAgIC0tIGdldEFnZXMgdXNlcnMgPT0gWzI4LDE5LDMzXVxuXG4tfVxuZm9sZHIgOiAoayAtPiB2IC0+IGIgLT4gYikgLT4gYiAtPiBEaWN0IGsgdiAtPiBiXG5mb2xkciBmdW5jIGFjYyB0ID1cbiAgICB3aGVuIHQgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIGFjY1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBmb2xkciBmdW5jIChmdW5jIGtleSB2YWx1ZSAoZm9sZHIgZnVuYyBhY2MgcmlnaHQpKSBsZWZ0XG5cblxuey18IEtlZXAgb25seSB0aGUga2V5LXZhbHVlIHBhaXJzIHRoYXQgcGFzcyB0aGUgZ2l2ZW4gdGVzdC5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiB2IC0+IEJvb2wpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5rZWVwSWYgaXNHb29kIGRpY3QgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGsgdiBkIC0+XG4gICAgICAgICAgICBpZiBpc0dvb2QgayB2IHRoZW5cbiAgICAgICAgICAgICAgICBzZXQgayB2IGRcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRcbiAgICAgICAgKVxuICAgICAgICBlbXB0eVxuICAgICAgICBkaWN0XG5cblxuey18IFJlbW92ZSB1bndhbnRlZCByZXN1bHRzIG9mIGEgbWFwIG9wZXJhdGlvbi5cbi19XG5tYXBBbmRLZWVwSnVzdCA6IChjb21wYXJhYmxlIC0+IHYgLT4gTWF5YmUgeCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHhcbm1hcEFuZEtlZXBKdXN0IHRvTWF5YmUgZGljdCA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcayB2IGQgLT5cbiAgICAgICAgICAgIHdoZW4gdG9NYXliZSBrIHYgaXNcbiAgICAgICAgICAgICAgICBKdXN0IG5ld1ZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBrIG5ld1ZhbHVlIGRcblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgZFxuICAgICAgICApXG4gICAgICAgIGVtcHR5XG4gICAgICAgIGRpY3RcblxuXG57LXwgUGFydGl0aW9uIGEgZGljdGlvbmFyeSBhY2NvcmRpbmcgdG8gc29tZSB0ZXN0LiBUaGUgZmlyc3QgZGljdGlvbmFyeVxuY29udGFpbnMgYWxsIGtleS12YWx1ZSBwYWlycyB3aGljaCBwYXNzZWQgdGhlIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zXG50aGUgcGFpcnMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4geyB0cnVlcyA6IERpY3QgY29tcGFyYWJsZSB2LCBmYWxzZXMgOiBEaWN0IGNvbXBhcmFibGUgdiB9XG5wYXJ0aXRpb24gaXNHb29kIGRpY3QgPVxuICAgIGxldFxuICAgICAgICBhZGQga2V5IHZhbHVlIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIGlmIGlzR29vZCBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSBzZXQga2V5IHZhbHVlIHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7IHRydWVzID0gdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IHNldCBrZXkgdmFsdWUgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgIGluXG4gICAgZm9sZGwgYWRkIHsgdHJ1ZXMgPSBlbXB0eSwgZmFsc2VzID0gZW1wdHkgfSBkaWN0XG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUga2V5cyBpbiBhIGRpY3Rpb25hcnksIHNvcnRlZCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxuXG4gICAga2V5cyAoRGljdC5lbXB0eSB8PiBEaWN0LnNldCAwIFwiQWxpY2VcIiB8PiBEaWN0LnNldCAxIFwiQm9iXCIpID09IFsgMCwgMSBdXG5cbi19XG5rZXlzIDogRGljdCBrIHYgLT4gQXJyYXkga1xua2V5cyBkaWN0ID1cbiAgICBmb2xkbCAoXFxrZXkgdmFsdWUga2V5QXJyYXkgLT4gQXJyYXkucHVzaExhc3Qga2V5IGtleUFycmF5KSBbXSBkaWN0XG5cblxuey18IEdldCBhbGwgb2YgdGhlIHZhbHVlcyBpbiBhIGRpY3Rpb25hcnksIGluIHRoZSBvcmRlciBvZiB0aGVpciBrZXlzLlxuXG4gICAgdmFsdWVzIChEaWN0LmVtcHR5IHw+IERpY3Quc2V0IDAgXCJBbGljZVwiIHw+IERpY3Quc2V0IDEgXCJCb2JcIikgPT0gWyBcIkFsaWNlXCIsIFwiQm9iXCIgXVxuXG4tfVxudmFsdWVzIDogRGljdCBrIHYgLT4gQXJyYXkgdlxudmFsdWVzIGRpY3QgPVxuICAgIGZvbGRsIChcXGtleSB2YWx1ZSB2YWx1ZUFycmF5IC0+IEFycmF5LnB1c2hMYXN0IHZhbHVlIHZhbHVlQXJyYXkpIFtdIGRpY3RcblxuXG57LXwgVGhlIG1vc3QgZ2VuZXJhbCB3YXkgb2YgY29tYmluaW5nIHR3byBkaWN0aW9uYXJpZXMuIFlvdSBwcm92aWRlIHRocmVlXG5hY2N1bXVsYXRvcnMgZm9yIHdoZW4gYSBnaXZlbiBrZXkgYXBwZWFyczpcblxuMS4gIE9ubHkgaW4gdGhlIGxlZnQgZGljdGlvbmFyeS5cbjIuICBJbiBib3RoIGRpY3Rpb25hcmllcy5cbjMuICBPbmx5IGluIHRoZSByaWdodCBkaWN0aW9uYXJ5LlxuICAgIFlvdSB0aGVuIHRyYXZlcnNlIGFsbCB0aGUga2V5cyBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LCBidWlsZGluZyB1cCB3aGF0ZXZlclxuICAgIHlvdSB3YW50LlxuXG4tfVxubWVyZ2UgOlxuICAgIChjb21wYXJhYmxlIC0+IGEgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBhIC0+IGIgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiAoY29tcGFyYWJsZSAtPiBiIC0+IHJlc3VsdCAtPiByZXN1bHQpXG4gICAgLT4gRGljdCBjb21wYXJhYmxlIGFcbiAgICAtPiBEaWN0IGNvbXBhcmFibGUgYlxuICAgIC0+IHJlc3VsdFxuICAgIC0+IHJlc3VsdFxubWVyZ2UgbGVmdFN0ZXAgYm90aFN0ZXAgcmlnaHRTdGVwIGxlZnREaWN0IHJpZ2h0RGljdCBpbml0aWFsUmVzdWx0ID1cbiAgICBsZXRcbiAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIHsgYXJyYXksIHJlc3VsdCB9ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgYXJyYXkgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IHJpZ2h0U3RlcCByS2V5IHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBrZXkgPSBsS2V5LCB2YWx1ZSA9IGxWYWx1ZSB9LCByZXN0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgbEtleSA8IHJLZXkgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFN0YXRlIHJLZXkgclZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSBsZWZ0U3RlcCBsS2V5IGxWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBsS2V5ID4gcktleSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gcmlnaHRTdGVwIHJLZXkgclZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSByZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IGJvdGhTdGVwIGxLZXkgbFZhbHVlIHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB7IGFycmF5ID0gbGVmdG92ZXJzLCByZXN1bHQgPSBpbnRlcm1lZGlhdGVSZXN1bHQgfSA9XG4gICAgICAgICAgICBmb2xkbCBzdGVwU3RhdGUgeyBhcnJheSA9IGZvbGRsIChcXGtleSB2YWx1ZSBhcnJheSAtPiBBcnJheS5wdXNoTGFzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9IGFycmF5KSBbXSBsZWZ0RGljdCwgcmVzdWx0ID0gaW5pdGlhbFJlc3VsdCB9IHJpZ2h0RGljdFxuICAgIGluXG4gICAgQXJyYXkuZm9sZGwgKFxceyBrZXksIHZhbHVlIH0gcmVzdWx0IC0+IGxlZnRTdGVwIGtleSB2YWx1ZSByZXN1bHQpIGludGVybWVkaWF0ZVJlc3VsdCBsZWZ0b3ZlcnNcbiIsCiAgICAgICAgIm1vZHVsZSBBcnJheSBleHBvc2luZ1xuICAgICggQXJyYXlcbiAgICAsIHNpbmdsZXRvbiwgaW5pdGlhbGl6ZSwgcmVwZWF0LCByYW5nZVxuICAgICwgbWFwLCBpbmRleGVkTWFwLCBmb2xkbCwgZm9sZHIsIGluZGV4ZWRGb2xkbCwgaW5kZXhlZEZvbGRyLCBrZWVwSWYsIGluZGV4ZWRLZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCByZXZlcnNlXG4gICAgLCBpc0VtcHR5LCBsZW5ndGgsIGdldCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuICAgICwgc2V0LCBzZXRNYW55LCB1cGRhdGUsIGluc2VydCwgaW5zZXJ0TWFueSwgcmVtb3ZlLCByZW1vdmVNYW55LCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBzcGxpY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgZmxhdHRlbiwgbWFwQW5kRmxhdHRlbiwgaW50ZXJzcGVyc2UsIG1hcDIsIG1hcDNcbiAgICAsIGZpcnN0LCBsYXN0LCBzbGljZSwgZHJvcEZpcnN0LCBkcm9wTGFzdCwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgcG9wRmlyc3QsIHBvcExhc3QsIHBhcnRpdGlvblxuICAgICwgc29ydCwgc29ydEJ5LCBzb3J0V2l0aFxuICAgIClcblxuey18IFlvdSBjYW4gY3JlYXRlIGFuIGBBcnJheWAgdXNpbmcgdGhlIGBbMSwgMiwgM11gIHN5bnRheC4gVGhpcyBtb2R1bGUgaGFzIGEgYnVuY2ggb2ZcbmZ1bmN0aW9ucyB0byBoZWxwIHlvdSB3b3JrIHdpdGggdGhlbS5cblxuQGRvY3MgQXJyYXlcblxuQGRvY3Mgc2luZ2xldG9uLCBpbml0aWFsaXplLCByZXBlYXQsIHJhbmdlXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIG1hcCwgaW5kZXhlZE1hcCwgZm9sZGwsIGZvbGRyLCBpbmRleGVkRm9sZGwsIGluZGV4ZWRGb2xkciwga2VlcElmLCBpbmRleGVkS2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcmV2ZXJzZVxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGlzRW1wdHksIGxlbmd0aCwgZ2V0LCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgbWVtYmVyLCBhbnksIGFsbCwgbWluaW11bSwgbWF4aW11bVxuXG5cbiMjIE1vZGlmeVxuXG5AZG9jcyBzZXQsIHNldE1hbnksIHVwZGF0ZSwgaW5zZXJ0LCBpbnNlcnRNYW55LCByZW1vdmUsIHJlbW92ZU1hbnksIHB1c2hGaXJzdCwgcHVzaExhc3QsIHNwbGljZVxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgcHJlcGVuZCwgYXBwZW5kLCBmbGF0dGVuLCBtYXBBbmRGbGF0dGVuLCBpbnRlcnNwZXJzZSwgbWFwMiwgbWFwM1xuXG5cbiMjIERlY29uc3RydWN0XG5cbkBkb2NzIHNsaWNlLCB0YWtlRmlyc3QsIHRha2VMYXN0LCBkcm9wRmlyc3QsIGRyb3BMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdCwgcGFydGl0aW9uXG5cblxuIyMgU29ydFxuXG5AZG9jcyBzb3J0LCBzb3J0QnksIHNvcnRXaXRoXG5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5BcnJheVxuXG5cbnstfCBBbiBBcnJheSBpcyBhbiBvcmRlcmVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4tfVxudHlwZSBBcnJheSBhXG4gICAgPSBBcnJheSBhXG5cblxuLS0gQ1JFQVRFXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIGEgc2luZ2xlIHZhbHVlLlxuLX1cbnNpbmdsZXRvbiA6IGEgLT4gQXJyYXkgYVxuc2luZ2xldG9uIGEgPVxuICAgIFsgYSBdXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBgbmAgZWxlbWVudHMsIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnRzXG5yZXN1bHRpbmcgZnJvbSBjYWxsaW5nIGBmbmAgd2l0aCBgb2Zmc2V0ICsgaW5kZXhgLlxuXG4gICAgaW5pdGlhbGl6ZSAzIDUgaWRlbnRpdHkgPT0gWyA1LCA2LCA3IF1cblxuSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHdlIGNyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIDMgaW50ZWdlcnNcbnN0YXJ0aW5nIGF0IDUuXG4tfVxuaW5pdGlhbGl6ZSA6IEludCAtPiBJbnQgLT4gKEludCAtPiBhKSAtPiBBcnJheSBhXG5pbml0aWFsaXplID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbml0aWFsaXplXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSB3aXRoIGBuYCBjb3BpZXMgb2YgYSB2YWx1ZTpcblxuICAgIHJlcGVhdCA1IDMgPT0gWyAzLCAzLCAzLCAzLCAzIF1cblxuLX1cbnJlcGVhdCA6IEludCAtPiBhIC0+IEFycmF5IGFcbnJlcGVhdCBuIHZhbCA9XG4gICAgaW5pdGlhbGl6ZSBuIDAgKFxcXyAtPiB2YWwpXG5cblxuey18IENyZWF0ZSBhbiBhcnJheSBvZiBudW1iZXJzLCBldmVyeSBlbGVtZW50IGluY3JlYXNpbmcgYnkgb25lLiBZb3UgZ2l2ZSB0aGUgbG93ZXN0IGFuZCBoaWdoZXN0IG51bWJlciB0aGF0IHNob3VsZCBiZSBpbiB0aGUgYXJyYXkuXG5cbiAgICByYW5nZSAzIDYgPT0gWzMsIDQsIDUsIDZdXG4gICAgcmFuZ2UgMyAzID09IFszXVxuICAgIHJhbmdlIDYgMyA9PSBbXVxuXG4tfVxucmFuZ2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IEludFxucmFuZ2UgZnJvbSB0byA9XG4gICAgaWYgZnJvbSA+IHRvIHRoZW5cbiAgICAgICAgW11cblxuICAgIGVsc2UgaWYgZnJvbSA9PSB0byB0aGVuXG4gICAgICAgIFtmcm9tXVxuXG4gICAgZWxzZSBcbiAgICAgICAgaW5pdGlhbGl6ZSAodG8gLSBmcm9tICsgMSkgZnJvbSBpZGVudGl0eVxuXG5cbi0tIFRSQU5TRk9STVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIG9uIGV2ZXJ5IGVsZW1lbnQgaW4gYW4gYXJyYXkuXG5cbiAgICBtYXAgbmVnYXRlIFsgMSwgNCwgOSBdID09IFsgLTEsIC00LCAtOSBdXG5cblNvIGBtYXAgZnVuYyBbIGEsIGIsIGMgXWAgaXMgdGhlIHNhbWUgYXMgYFsgZnVuYyBhLCBmdW5jIGIsIGZ1bmMgYyBdYFxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lm1hcFxuXG5cbnstfCBTYW1lIGFzIGBtYXBgIGJ1dCB0aGUgZnVuY3Rpb24gaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkTWFwIChcXGlkeCB2YWwgLT4gW2lkeCwgdmFsXSkgWyAzLCAzLCAzIF0gPT0gWyBbIDAsIDMgXSwgWyAxLCAzIF0sIFsgMiwgMyBdIF1cblxuLX1cbmluZGV4ZWRNYXAgOiAoSW50IC0+IGEgLT4gYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5pbmRleGVkTWFwID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkTWFwXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC5cblxuICAgIGZvbGRsICgrKSAwIFsgMSwgMiwgMyBdID09IDZcblxuU28gYGZvbGRsIHN0ZXAgc3RhdGUgWyAxLCAyLCAzIF1gIGlzIGxpa2Ugc2F5aW5nOlxuXG4gICAgc3RhdGVcbiAgICAgICAgfD4gc3RlcCAxXG4gICAgICAgIHw+IHN0ZXAgMlxuICAgICAgICB8PiBzdGVwIDNcbi19XG5mb2xkbCA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmZvbGRsID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIHJpZ2h0LiBTYW1lIGFzIGBmb2xkbGAgYnV0XG50aGUgZXhlY3V0aW9uIG9yZGVyIGlzIHJldmVyc2VkLlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZvbGRyXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgbGVmdC4gVGhlIHJlZHVjaW5nIGZ1bmN0aW9uIGlzIFxucGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS5cblxuICAgIGluZGV4ZWRGb2xkbCAoXFxpZHggdmFsIHN1bSAtPiBpZHggKyB2YWwgKyBzdW0pIDAgWyAxLCAyLCAzIF0gPT0gOVxuXG4tfVxuaW5kZXhlZEZvbGRsIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkbCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRsXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgcmlnaHQuIFRoZSByZWR1Y2luZyBmdW5jdGlvblxuaXMgcGFzc2VkIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB2YWx1ZS4gU2FtZSBhcyBgaW5kZXhlZEZvbGRsYFxuYnV0IHRoZSBleGVjdXRpb24gb3JkZXIgaXMgcmV2ZXJzZWQuXG4tfVxuaW5kZXhlZEZvbGRyIDogKEludCAtPiBhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmluZGV4ZWRGb2xkciA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZvbGRyXG5cblxuey18IEtlZXAgdmFsdWVzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiAoXFxuIC0+IG4gPCAzKSBbIDEsIDIsIDMsIDQgXSA9PSBbIDEsIDIgXVxuXG4tfVxua2VlcElmIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5rZWVwSWYgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbHRlclxuXG57LXwgU2FtZSBhcyBga2VlcElmYCBidXQgdGhlIHRlc3QgaXMgYWxzbyBhcHBsaWVkIHRvIHRoZSBpbmRleCBvZiBlYWNoIGVsZW1lbnQuXG5cbiAgICBpbmRleGVkS2VlcElmIChcXGlkeCB2YWwgLT4gaWR4ICsgdmFsID4gNCkgWyAxLCAyLCAzLCA0IF0gPT0gWyAzLCA0IF1cbi19XG5pbmRleGVkS2VlcElmIDogKEludCAtPiBhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW5kZXhlZEtlZXBJZiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZEZpbHRlclxuXG5cbnstfCBSZW1vdmUgdW53YW50ZWQgcmVzdWx0cyBvZiBhIG1hcCBvcGVyYXRpb24uXG5cbiAgICBtYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF0gPT0gWyAzLCAtNSBdXG4gICAgbWFwQW5kS2VlcEp1c3QgaWRlbnRpdHkgWyBKdXN0IDEsIE5vdGhpbmcgXSA9PSBbIDEgXVxuXG4tfVxubWFwQW5kS2VlcEp1c3QgOiAoYSAtPiBNYXliZSBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbm1hcEFuZEtlZXBKdXN0IG1hcHBlciBhcnJheSA9XG4gICAgbWFwQW5kRmxhdHRlblxuICAgICAgICAoXFx2IC0+XG4gICAgICAgICAgICB3aGVuIG1hcHBlciB2IGlzXG4gICAgICAgICAgICAgICAgSnVzdCBuZXdWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBbIG5ld1ZhbHVlIF1cblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgKVxuICAgICAgICBhcnJheVxuXG5cbnstfCBSZXZlcnNlIGFuIGFycmF5LlxuXG4gICAgcmV2ZXJzZSBbIDEsIDIsIDMgXSA9PSBbIDMsIDIsIDEgXVxuXG4tfVxucmV2ZXJzZSA6IEFycmF5IGEgLT4gQXJyYXkgYVxucmV2ZXJzZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkucmV2ZXJzZVxuXG5cbi0tIFFVRVJZXG5cblxuey18IENoZWNrIGlmIGFuIGFycmF5IGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBbXSA9PSBUcnVlXG4gICAgaXNFbXB0eSBbIDEsIDIsIDMgXSA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IEFycmF5IGEgLT4gQm9vbFxuaXNFbXB0eSBhcnJheSA9XG4gICAgbGVuZ3RoIGFycmF5ID09IDBcblxuXG57LXwgUmV0dXJuIHRoZSBsZW5ndGggb2YgYW4gYXJyYXkuXG5cbiAgICBsZW5ndGggWyAxLCAyLCAzIF0gPT0gM1xuXG4tfVxubGVuZ3RoIDogQXJyYXkgYSAtPiBJbnRcbmxlbmd0aCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBlbGVtZW50IGF0IGEgZ2l2ZW4gaW5kZXgsIG9yIGBOb3RoaW5nYCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cbkEgbmVnYXRpdmUgaW5kZXggbG9va3MgdXAgYW4gZWxlbWVudCBpbiByZXZlcnNlIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBnZXQgMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDJcbiAgICBnZXQgMTAgWyAxLCAyLCAzIF0gPT0gTm90aGluZ1xuICAgIGdldCAtMSBbIDEsIDIsIDMgXSA9PSBKdXN0IDNcblxuLX1cbmdldCA6IEludCAtPiBBcnJheSBhIC0+IE1heWJlIGFcbmdldCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZ2V0XG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAxXG5cbi19XG5maW5kRmlyc3QgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IE1heWJlIHsgaW5kZXggOiBJbnQsIHZhbHVlIDogYSB9XG5maW5kRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbmRGaXJzdFxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuXG4gICAgZmluZCAoXFxuIC0+IG4gPiAwKSBbIC0xLCAwLCAxLCAyIF0gPT0gSnVzdCAyXG5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gTWF5YmUgeyBpbmRleCA6IEludCwgdmFsdWUgOiBhIH1cbmZpbmRMYXN0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5maW5kTGFzdFxuXG5cbnstfCBGaWd1cmUgb3V0IHdoZXRoZXIgYW4gYXJyYXkgY29udGFpbnMgYSB2YWx1ZS5cblxuICAgIG1lbWJlciA5IFsxLDIsMyw0XSA9PSBGYWxzZVxuICAgIG1lbWJlciA0IFsxLDIsMyw0XSA9PSBUcnVlXG5cbi19XG5tZW1iZXIgOiBhIC0+IEFycmF5IGEgLT4gQm9vbFxubWVtYmVyIHZhbHVlIGFycmF5ID1cbiAgICB3aGVuIGZpbmRGaXJzdCAoXFx2IC0+IHYgPT0gdmFsdWUpIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IERldGVybWluZSBpZiBhbnkgZWxlbWVudHMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFueSBpc0V2ZW4gWzIsM10gPT0gVHJ1ZVxuICAgIGFueSBpc0V2ZW4gWzEsM10gPT0gRmFsc2VcbiAgICBhbnkgaXNFdmVuIFtdID09IEZhbHNlXG5cbi19XG5hbnkgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEJvb2xcbmFueSBmbiBhcnJheSA9XG4gICAgd2hlbiBmaW5kRmlyc3QgZm4gYXJyYXkgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGFsbCBlbGVtZW50cyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYWxsIGlzRXZlbiBbMiw0XSA9PSBUcnVlXG4gICAgYWxsIGlzRXZlbiBbMiwzXSA9PSBGYWxzZVxuICAgIGFsbCBpc0V2ZW4gW10gPT0gVHJ1ZVxuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBCb29sXG5hbGwgZm4gYXJyYXkgPVxuICAgIHdoZW4gZmluZEZpcnN0IChub3QgPDwgZm4pIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBUcnVlXG5cblxuey18IEZpbmQgdGhlIG1pbmltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1pbmltdW0gWzMsMiwxXSA9PSBKdXN0IDFcbiAgICBtaW5pbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWluaW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWluaW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGxvd2VzdCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgY3VycmVudCA8IGxvd2VzdCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuey18IEZpbmQgdGhlIG1heGltdW0gZWxlbWVudCBpbiBhIG5vbi1lbXB0eSBhcnJheS5cblxuICAgIG1heGltdW0gWzMsMiwxXSA9PSBKdXN0IDNcbiAgICBtYXhpbXVtIFtdICAgICAgPT0gTm90aGluZ1xuXG4tfVxubWF4aW11bSA6IEFycmF5IGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZVxubWF4aW11bSBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIEp1c3QgPHxcbiAgICAgICAgICAgICAgICBmb2xkbFxuICAgICAgICAgICAgICAgICAgICAoXFxjdXJyZW50IGhpZ2hlc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGN1cnJlbnQgPiBoaWdoZXN0IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoZXN0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICAgICAgICAgIGFycmF5XG5cblxuLS0gTU9ESUZZXG5cblxuey18IFJlcGxhY2UgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4LCBvciByZXR1cm4gdGhlIGFycmF5IHVubW9kaWZpZWQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG4gICAgc2V0IDEgMTAgWyAxLCAyLCAzIF0gPT0gWyAxLCAxMCwgMyBdXG4gICAgc2V0IDEwIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMyBdXG4gICAgc2V0IC0xIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMTAgXVxuXG4tfVxuc2V0IDogSW50IC0+IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNldFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIHdvcmtzIGp1c3QgbGlrZSBbc2V0XSgjc2V0KSBleGNlcHQgaXQgdGFrZXMgaW4gYW4gYXJyYXkgb2YgdmFsdWVzIHRvIHNldCwgYWxsb3dpbmcgeW91XG50byByZXBsYWNlIHNldmVyYWwgdmFsdWVzIGF0IG9uY2UuXG5cbklmIHRoZSBwcm92aWRlZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgKG5lZ2F0aXZlIGluZGV4KSBvciBhdCB0aGVcbmVuZCAocG9zaXRpdmUgaW5kZXgpLlxuXG4gICAgc2V0TWFueSAxIFsgMCwgMCBdIFsgMSwgMiwgMywgNCBdID09IFsgMSwgMCwgMCwgNCBdXG5cbi19XG5zZXRNYW55IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zZXRNYW55IGluZGV4IHZhbHVlcyBhcnJheSA9XG4gICAgc3BsaWNlIGluZGV4IChsZW5ndGggdmFsdWVzKSB2YWx1ZXMgYXJyYXlcblxuXG57LXwgVXBkYXRlIGEgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4IHVzaW5nIGEgZnVuY3Rpb24uIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBub3RoaW5nIGhhcHBlbnMuXG5cbiAgICB1cGRhdGUgMSAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDMsIDMgXVxuICAgIHVwZGF0ZSAxMCAoXFxuIC0+IG4gKyAxKSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDMgXVxuXG4tfVxudXBkYXRlIDogSW50IC0+IChhIC0+IGEpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudXBkYXRlIGlkeCBmbiBhcnJheSA9XG4gICAgd2hlbiBnZXQgaWR4IGFycmF5IGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGFycmF5XG5cbiAgICAgICAgSnVzdCB2YWwgLT5cbiAgICAgICAgICAgIHNldCBpZHggKGZuIHZhbCkgYXJyYXlcblxuXG57LXwgSW5zZXJ0IGEgbmV3IHZhbHVlIGludG8gdGhlIGFycmF5IGF0IHRoZSBnaXZlbiBpbmRleC4gVGhlIHZhbHVlIGFscmVhZHkgYXQgdGhlXG5naXZlbiBpbmRleCwgYXMgd2VsbCBhcyBhbGwgc3Vic2VxdWVudCB2YWx1ZXMsIHdpbGwgYmUgbW92ZWQgb25lIHNwYWNlIHRvIHRoZSByaWdodC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIHByb3ZpZGVkIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIHRoZSBlbGVtZW50IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZVxuZW5kIChwb3NpdGl2ZSBpbmRleCkuXG5cbiAgICBpbnNlcnQgMSAwIFsgMSwgMiwgMyBdID09IFsgMSwgMCwgMiwgMyBdXG5cbi19XG5pbnNlcnQgOiBJbnQgLT4gYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydCBpbmRleCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSBpbmRleCAwIHZhbHVlIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtpbnNlcnRdKCNpbnNlcnQpIGJ1dCBhbGxvd3MgeW91IHRvIGluc2VydCBtdWx0aXBsZVxudmFsdWVzIGF0IG9uY2UuXG5cbiAgICBpbnNlcnRNYW55IDEgWyAwLCAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAwLCAwLCAyLCAzIF1cblxuLX1cbmluc2VydE1hbnkgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluc2VydE1hbnkgaW5kZXggdmFsdWVzIGFycmF5ID1cbiAgICBzcGxpY2UgaW5kZXggMCB2YWx1ZXMgYXJyYXlcblxuXG57LXwgUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSBhbiBhcnJheS5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIG5vIGVsZW1lbnQgd2lsbCBiZSByZW1vdmVkLlxuXG4gICAgcmVtb3ZlIDEgWyAxLCAyLCAzIF0gPT0gWyAxLCAzIF1cblxuLX1cbnJlbW92ZSA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnJlbW92ZSBpbmRleCBhcnJheSA9XG4gICAgcmVtb3ZlTWFueSBpbmRleCAxIGFycmF5XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtyZW1vdmVdKCNyZW1vdmUpLCBleGNlcHQgaXQgYWxsb3dzIHlvdSB0byByZW1vdmUgbXVsdGlwbGUgZWxlbWVudHMgYXQgb25jZS5cblxuVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSBpbmRleCBmcm9tIHdoZXJlIHRvIHJlbW92ZSBlbGVtZW50cyBmcm9tLCB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBudW1iZXIgb2YgZWxlbWVudHNcbnRvIHJlbW92ZS5cblxuICAgIHJlbW92ZSAwIDIgWyAxLCAyLCAzIF0gPT0gWyAzIF1cblxuLX1cbnJlbW92ZU1hbnkgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucmVtb3ZlTWFueSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMFxuXG5cbnstfCBBZGQgYSB2YWx1ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGFycmF5LlxuXG4gICAgcHVzaEZpcnN0IDEgW10gICAgICAgICAgPT0gWyAxIF1cbiAgICBwdXNoRmlyc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDUsIDEsIDQsIDkgXVxuXG4tfVxucHVzaEZpcnN0IDogYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnB1c2hGaXJzdCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSAwIDAgdmFsdWUgYXJyYXlcblxuXG57LXwgQWRkIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBwdXNoTGFzdCAxIFtdICAgICAgICAgID09IFsgMSBdXG4gICAgcHVzaExhc3QgNSBbIDEsIDQsIDkgXSA9PSBbIDEsIDQsIDksIDUgXVxuXG4tfVxucHVzaExhc3QgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHVzaExhc3QgdmFsdWUgYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTEgKGxlbmd0aCBhcnJheSkgMCB2YWx1ZSBhcnJheVxuXG5cbnstfCBBbGxvd3MgeW91IHRvIHBlcmZvcm0gbXVsdGlwbGUgbW9kaWZpY2F0aW9ucyBpbiBhIHNpbmdsZSBvcGVyYXRpb24uIFNwbGljZSB0YWtlcyBhbiBpbmRleFxuYXMgaXRzIGZpcnN0IGFyZ3VtZW50LiBUaGlzIG1hcmtzIHRoZSBwb2ludCB3aGVyZSBtb2RpZmljYXRpb25zIHdpbGwgYmUgcGVyZm9ybWVkLiBUaGVcbnNlY29uZCBhcmd1bWVudCBpcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJlbW92ZS4gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIHRoZSBlbGVtZW50cyB0aGF0XG53aWxsIGJlIGluc2VydGVkLiBUaGUgYXJndW1lbnQgb3JkZXIgcmVwcmVzZW50cyB0aGUgb3JkZXIgb2YgbW9kaWZpY2F0aW9ucy4gRWxlbWVudHMgd2lsbCBiZVxucmVtb3ZlZCBiZWZvcmUgbmV3IGVsZW1lbnRzIGFyZSBpbnNlcnRlZC5cblxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMgbm8gZWxlbWVudHMgd2lsbCBiZSByZW1vdmVkLCBidXQgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBhdCB0aGVcbmJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZSBlbmQgKHBvc2l0aXZlIGluZGV4KS5cblxuXG4gICAgc3BsaWNlIDIgMCBbIDAgXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDAsIDMgXVxuICAgIHNwbGljZSAyIDEgWyAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAwIF1cbiAgICBzcGxpY2UgMiAxIFtdIFsgMSwgMiwgMyBdID09IFsgMSwgMiBdXG5cbi19XG5zcGxpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zcGxpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZU5cblxuXG4tLSBDT01CSU5FXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwcmVmaXgsXG5hbmQgdGhlIHNlY29uZCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBwcmVwZW5kIFsgMSwgMiwgMyBdIFsgNCwgNSwgNiBdID09IFsgMSwgMiwgMywgNCwgNSwgNiBdIFxuXG5Zb3UgY2FuIGFsc28gdXNlIHRoZSBgKytgIG9wZXJhdG9yIGZvciB0aGlzIHB1cnBvc2UuXG5cbiAgICBbIDEsIDIsIDMgXSArKyBbIDQsIDUsIDYgXSA9PSBbIDEsIDIsIDMsIDQsIDUsIDYgXVxuLX1cbnByZXBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHJlcGVuZCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuYXBwZW5kXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cyBzbyB0aGF0IHRoZSBmaXJzdCBhcnJheSBiZWNvbWVzIHRoZSBwb3N0Zml4LFxuYW5kIHRoZSBzZWNvbmQgYXJyYXkgYmVjb21lcyB0aGUgcHJlZml4IG9mIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBhcHBlbmQgWyAxLCAyLCAzIF0gWyA0LCA1LCA2IF0gPT0gWyA0LCA1LCA2LCAxLCAyLCAzIF1cbiAgICBcbi19XG5hcHBlbmQgOiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuYXBwZW5kIGZzdCBzZWNvbmQgPVxuICAgIHByZXBlbmQgc2Vjb25kIGZzdFxuXG5cbnstfCBDb21iaW5lIGEgYnVuY2ggb2YgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXkuXG5cbiAgICBmbGF0dGVuIFsgWyAxIF0sIFsgMiBdLCBbIDQsIDUgXSBdID09IFsgMSwgMiwgNCwgNSBdXG5cbi19XG5mbGF0dGVuIDogQXJyYXkgKEFycmF5IGEpIC0+IEFycmF5IGFcbmZsYXR0ZW4gPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZsYXRcblxuXG57LXwgTWFwIGEgZ2l2ZW4gZnVuY3Rpb24gb250byBhbiBhcnJheSwgdGhlbiBmbGF0dGVuIHRoZSByZXN1bHRpbmcgYXJyYXkuXG5cbiAgICBtYXBBbmRGbGF0dGVuIGYgeHMgPT0gZmxhdHRlbiAobWFwIGYgeHMpXG5cbi19XG5tYXBBbmRGbGF0dGVuIDogKGEgLT4gQXJyYXkgYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXBBbmRGbGF0dGVuID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mbGF0TWFwXG5cblxuey18IFBsYWNlcyB0aGUgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBhbGwgbWVtYmVycyBvZiB0aGUgZ2l2ZW4gYXJyYXkuXG5cbiAgICBpbnRlcnNwZXJzZSBcIm9uXCIgWyBcInR1cnRsZXNcIiwgXCJ0dXJ0bGVzXCIsIFwidHVydGxlc1wiXSA9PSBbIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiLCBcIm9uXCIsIFwidHVydGxlc1wiXVxuXG4tfVxuaW50ZXJzcGVyc2UgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW50ZXJzcGVyc2Ugc2VwIHhzID1cbiAgICB3aGVuIHBvcEZpcnN0IHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFtdXG5cbiAgICAgICAgSnVzdCB7IGZpcnN0ID0gaGVhZCwgcmVzdCA9IHRhaWwgfSAtPlxuICAgICAgICAgICAgcHVzaEZpcnN0IGhlYWQgPHwgbWFwQW5kRmxhdHRlbiAoXFx2YWwgLT4gWyBzZXAsIHZhbCBdKSB0YWlsXG5cblxuey18IENvbWJpbmUgdHdvIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAyIChcXHggeSAtPiB7IHggPSB4LCB5ID0geSB9KSBbIDEgXSBbIDIgXSA9PSBbIHsgeCA9IDEsIHkgPSAyIH0gXVxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IHJlc3VsdFxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubWFwMlxuXG5cbnstfCBDb21iaW5lIHRocmVlIGFycmF5cywgY29tYmluaW5nIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG5JZiBvbmUgYXJyYXkgaXMgbG9uZ2VyLCB0aGUgZXh0cmEgZWxlbWVudHMgYXJlIGRyb3BwZWQuXG5cbiAgICBtYXAzIChcXHggeSB6IC0+IHsgeCA9IHgsIHkgPSB5LCB6ID0geiB9KSBbIDEgXSBbIDIgXSBbIDMgXSA9PSBbIHsgeCA9IDEsIHkgPSAyLCB6ID0gMyB9IF1cbi19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gQXJyYXkgYSAtPiBBcnJheSBiIC0+IEFycmF5IGMgLT4gQXJyYXkgcmVzdWx0XG5tYXAzID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5tYXAzXG5cblxuLS0gREVDT05TVFJVQ1RcblxuXG57LXwgUmV0cmlldmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LCBpZiBpdCBleGlzdHMuXG5cbiAgICBmaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IDFcblxuLX1cbmZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5maXJzdCBhcnJheSA9XG4gICAgZ2V0IDAgYXJyYXlcblxuXG57LXwgUmV0cmlldmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXJyYXksIGlmIGl0IGV4aXN0cy5cblxuICAgIGxhc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCAzXG5cbi19XG5sYXN0IDogQXJyYXkgYSAtPiBNYXliZSBhXG5sYXN0IGFycmF5ID1cbiAgICBnZXQgLTEgYXJyYXlcblxuXG57LXwgR2V0IGEgc3ViIHNlY3Rpb24gb2YgYW4gYXJyYXk6IGAoc2xpY2Ugc3RhcnQgZW5kIGFycmF5KWAuXG5cblRoZSBgc3RhcnRgIGlzIGEgemVyby1iYXNlZCBpbmRleCB3aGVyZSB3ZSB3aWxsIHN0YXJ0IG91ciBzbGljZS5cblRoZSBgZW5kYCBpcyBhIHplcm8tYmFzZWQgaW5kZXggdGhhdCBpbmRpY2F0ZXMgdGhlIGVuZCBvZiB0aGUgc2xpY2UuXG5UaGUgc2xpY2UgZXh0cmFjdHMgdXAgdG8sIGJ1dCBubyBpbmNsdWRpbmcsIHRoZSBgZW5kYC5cblxuQm90aCBgc3RhcnRgIGFuZCBgZW5kYCBjYW4gYmUgbmVnYXRpdmUsIGluZGljYXRpbmcgYW4gb2Zmc2V0IGZyb20gdGhlIGVuZFxub2YgdGhlIGFycmF5LiBSZW1vdmluZyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBjYW4gYmUgZXhwcmVzc2VkIGFzOlxuXG4gICAgYHNsaWNlIDAgLTEgYXJyYC5cblxuSW4gdGhlIGNhc2Ugb2YgYW4gaW1wb3NzaWJsZSBzbGljZSwgdGhlIGVtcHR5IGFycmF5IGlzIHJldHVybmVkLlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc2xpY2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNsaWNlXG5cblxuey18IFJlbW92ZSB0aGUgZmlyc3QgYG5gIGVsZW1lbnRzIG9mIHRoZSBhcnJheS5cblxuICAgIGRyb3BGaXJzdCA1IFsgMSBdID09IFtdXG4gICAgZHJvcEZpcnN0IDEgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmRyb3BGaXJzdCBuIGFycmF5ID1cbiAgICBzbGljZSBuIChsZW5ndGggYXJyYXkpIGFycmF5XG5cblxuey18IFJlbW92ZSB0aGUgbGFzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuXG4gICAgZHJvcExhc3QgMSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5kcm9wTGFzdCBuIGFycmF5ID1cbiAgICBzbGljZSAwIChsZW5ndGggYXJyYXkgLSBuKSBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXkuXG5cbiAgICB0YWtlRmlyc3QgMiBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUZpcnN0IG4gYXJyYXkgPVxuICAgIHNsaWNlIDAgbiBhcnJheVxuXG5cbnstfCBUYWtlIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cblxuICAgIHRha2VMYXN0IDIgWyAxLCAyLCAzIF0gPT0gWyAyLCAzIF1cblxuLX1cbnRha2VMYXN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxudGFrZUxhc3QgbiBhcnJheSA9XG4gICAgbGV0XG4gICAgICAgIGxlbiA9XG4gICAgICAgICAgICBsZW5ndGggYXJyYXlcbiAgICBpblxuICAgIHNsaWNlIChsZW4gLSBuKSBsZW4gYXJyYXlcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgZmlyc3QgZWxlbWVudCwgYW5kIGl0cyByZW1haW5pbmcgZWxlbWVudHMsIGlmIHBvc3NpYmxlLlxuXG4gICAgcG9wRmlyc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCB7IGZpcnN0ID0gMSwgcmVzdCA9IFsgMiwgMyBdIH1cblxuLX1cbnBvcEZpcnN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGZpcnN0IDogYSwgcmVzdCA6IEFycmF5IGEgfVxucG9wRmlyc3QgYXJyYXkgPVxuICAgIHdoZW4gZmlyc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgZmlyc3QgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICwgcmVzdCA9IGRyb3BGaXJzdCAxIGFycmF5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgU3BsaXQgYW4gYXJyYXkgaW50byBpdHMgbGFzdCBlbGVtZW50LCBhbmQgaXRzIHJlbWFpbmluZyBlbGVtZW50cywgaWYgcG9zc2libGUuXG5cbiAgICBwb3BGaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IHsgbGFzdCA9IDMsIGluaXRpYWwgPSBbIDEsIDIgXSB9XG5cbi19XG5wb3BMYXN0IDogQXJyYXkgYSAtPiBNYXliZSB7IGxhc3QgOiBhLCBpbml0aWFsIDogQXJyYXkgYSB9XG5wb3BMYXN0IGFycmF5ID1cbiAgICB3aGVuIGxhc3QgYXJyYXkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdFxuICAgICAgICAgICAgICAgIHsgbGFzdCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgLCBpbml0aWFsID0gZHJvcExhc3QgMSBhcnJheVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IERpdmlkZSBlbGVtZW50cyBpbnRvIHR3byBhcnJheXMgYmFzZWQgb24gdGhlIHJlc3VsdCBvZiBhIGJvb2xlYW4gdGVzdC5cblxuICAgIHBhcnRpdGlvbiAoXFx4IC0+IHggPCAzKSBbIDAsIDEsIDIsIDMsIDQsIDUgXSA9PSB7IHRydWVzID0gWyAwLCAxLCAyIF0sIGZhbHNlcyA9IFsgMywgNCwgNSBdIH1cblxuLX1cbnBhcnRpdGlvbiA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4geyB0cnVlcyA6IEFycmF5IGEsIGZhbHNlcyA6IEFycmF5IGEgfVxucGFydGl0aW9uIGZuIGFycmF5ID1cbiAgICBmb2xkbFxuICAgICAgICAoXFx2YWwgeyB0cnVlcywgZmFsc2VzIH0gLT5cbiAgICAgICAgICAgIGlmIGZuIHZhbCB0aGVuXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHB1c2hMYXN0IHZhbCB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBwdXNoTGFzdCB2YWwgZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHsgdHJ1ZXMgPSBbXSwgZmFsc2VzID0gW10gfVxuICAgICAgICBhcnJheVxuXG5cbi0tIFNPUlRcblxuXG57LXwgU29ydCB2YWx1ZXMgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdFxuXG4gICAgc29ydCBbIDMsIDEsIDUgXSA9PSBbIDEsIDMsIDUgXVxuXG4tfVxuc29ydCA6IEFycmF5IGNvbXBhcmFibGUgLT4gQXJyYXkgY29tcGFyYWJsZVxuc29ydCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc29ydFxuXG5cbnstfCBTb3J0IHZhbHVlcyBieSBhIGRlcml2ZWQgcHJvcGVydHkuXG5cbiAgICBzb3J0QnkgU3RyaW5nLmxlbmd0aCBbIFwibW91c2VcIiwgXCJjYXRcIiBdID09IFsgXCJjYXRcIiwgXCJtb3VzZVwiIF1cblxuLX1cbnNvcnRCeSA6IChhIC0+IGNvbXBhcmFibGUpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydEJ5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zb3J0QnlcblxuXG57LXwgU29ydCB2YWx1ZXMgd2l0aCBhIGN1c3RvbSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuXG4gICAgc29ydFdpdGggZmxpcHBlZENvbXBhcmlzb24gWzEsMiwzLDQsNV0gPT0gWzUsNCwzLDIsMV1cblxuICAgIGZsaXBwZWRDb21wYXJpc29uIGEgYiA9XG4gICAgICAgIHdoZW4gY29tcGFyZSBhIGIgaXNcbiAgICAgICAgICBMVCAtPiBHVFxuICAgICAgICAgIEVRIC0+IEVRXG4gICAgICAgICAgR1QgLT4gTFRcblxuVGhpcyBpcyBhbHNvIHRoZSBtb3N0IGdlbmVyYWwgc29ydCBmdW5jdGlvbiwgYWxsb3dpbmcgeW91IHRvIGRlZmluZSBhbnkgb3RoZXI6IGBzb3J0ID09IHNvcnRXaXRoIGNvbXBhcmVgXG5cbi19XG5zb3J0V2l0aCA6IChhIC0+IGEgLT4gT3JkZXIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc29ydFdpdGggPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNvcnRXaXRoXG5cbiIsCiAgICAgICAgIm1vZHVsZSBTZXQgZXhwb3NpbmdcbiAgICAoIFNldFxuICAgICwgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCByZW1vdmUsIHRvZ2dsZVxuICAgICwgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG4gICAgLCB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cbiAgICApXG5cbnstfCBBIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBUaGUgdmFsdWVzIGNhbiBiZSBhbnkgY29tcGFyYWJsZSB0eXBlLiBUaGlzXG5pbmNsdWRlcyBgSW50YCwgYEZsb2F0YCwgYFRpbWVgLCBgQ2hhcmAsIGBTdHJpbmdgLCBhbmQgdHVwbGVzIG9yIGFycmF5c1xub2YgY29tcGFyYWJsZSB0eXBlcy5cblxuU2V0LCByZW1vdmUsIGFuZCBxdWVyeSBvcGVyYXRpb25zIGFsbCB0YWtlIF9PKGxvZyBuKV8gdGltZS5cblxuXG5AZG9jcyBTZXRcblxuXG5AZG9jcyBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHJlbW92ZSwgdG9nZ2xlXG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaXNFbXB0eSwgbWVtYmVyLCBjb3VudCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG5cblxuIyMgQ29tYmluZVxuXG5AZG9jcyB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIHRvQXJyYXksIGZyb21BcnJheVxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBEaWN0XG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKC4uKSlcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiB1bmlxdWUgdmFsdWVzLiBTbyBgKFNldCBJbnQpYCBpcyBhIHNldCBvZiBpbnRlZ2VycyBhbmRcbmAoU2V0IFN0cmluZylgIGlzIGEgc2V0IG9mIHN0cmluZ3MuXG4tfVxudHlwZSBTZXQgdFxuICAgID0gU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5EaWN0IHQge30pXG5cblxuey18IENyZWF0ZSBhbiBlbXB0eSBzZXQuXG4tfVxuZW1wdHkgOiBTZXQgYVxuZW1wdHkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gRGljdC5lbXB0eVxuXG5cbnstfCBDcmVhdGUgYSBzZXQgd2l0aCBvbmUgdmFsdWUuXG4tfVxuc2luZ2xldG9uIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuc2luZ2xldG9uIGtleSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5zaW5nbGV0b24ga2V5IHt9KVxuXG5cbnstfCBTZXQgYSB2YWx1ZSBpbnRvIGEgc2V0LlxuLX1cbnNldCA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnNldCBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3Quc2V0IGtleSB7fSBkaWN0KVxuXG5cbnstfCBSZW1vdmUgYSB2YWx1ZSBmcm9tIGEgc2V0LiBJZiB0aGUgdmFsdWUgaXMgbm90IGZvdW5kLCBubyBjaGFuZ2VzIGFyZSBtYWRlLlxuLX1cbnJlbW92ZSA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnJlbW92ZSBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QucmVtb3ZlIGtleSBkaWN0KVxuXG5cbnstfCBUb2dnbGUgYSB2YWx1ZSBpbiBhIHNldC4gSWYgdGhlIHZhbHVlIGlzbid0IGluIHRoZSBzZXQsIGl0IGlzIGFkZGVkLiBJZiB0aGVcbnZhbHVlIGlzIGluIHRoZSBzZXQsIGl0IGlzIHJlbW92ZWQuXG4tfVxudG9nZ2xlIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxudG9nZ2xlIGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgd2hlbiBEaWN0LmdldCBrZXkgZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFNldF9ncmVuX2J1aWx0aW4gPHwgRGljdC5yZW1vdmUga2V5IGRpY3RcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBTZXRfZ3Jlbl9idWlsdGluIDx8IERpY3Quc2V0IGtleSB7fSBkaWN0XG5cblxuey18IERldGVybWluZSBpZiBhIHNldCBpcyBlbXB0eS5cbi19XG5pc0VtcHR5IDogU2V0IGEgLT4gQm9vbFxuaXNFbXB0eSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5pc0VtcHR5IGRpY3RcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgaW4gYSBzZXQuXG4tfVxubWVtYmVyIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBCb29sXG5tZW1iZXIga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0Lm1lbWJlciBrZXkgZGljdFxuXG5cbnstfCBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNldC5cbi19XG5jb3VudCA6IFNldCBhIC0+IEludFxuY291bnQgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuY291bnQgZGljdFxuXG5cbnstfCBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHNldC5cbi19XG5maXJzdCA6IFNldCBhIC0+IE1heWJlIGFcbmZpcnN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maXJzdCBkaWN0KVxuXG5cbnstfCBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgc2V0LlxuLX1cbmxhc3QgOiBTZXQgYSAtPiBNYXliZSBhXG5sYXN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5sYXN0IGRpY3QpXG5cblxuey18IEZpbmQgdGhlIGZpcnN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRGaXJzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRGaXJzdCBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QuZmluZEZpcnN0IChcXGtleSBfIC0+IGZuIGtleSkgZGljdClcblxuXG57LXwgRmluZCB0aGUgbGFzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kTGFzdCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IE1heWJlIGFcbmZpbmRMYXN0IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maW5kTGFzdCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3QpXG5cblxuey18IENoZWNrcyBpZiBhbnkgdmFsdWUgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYW55IDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYW55IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFueSAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgQ2hlY2tzIGlmIGFsbCB2YWx1ZXMgaW4gdGhlIHNldCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYWxsIDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gQm9vbFxuYWxsIGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmFsbCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3RcblxuXG57LXwgR2V0IHRoZSB1bmlvbiBvZiB0d28gc2V0cy4gS2VlcCBhbGwgdmFsdWVzLlxuLX1cbnVuaW9uIDogU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnVuaW9uIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QxKSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MikgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QudW5pb24gZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBzZXRzLiBLZWVwcyB2YWx1ZXMgdGhhdCBhcHBlYXIgaW4gYm90aCBzZXRzLlxuLX1cbmludGVyc2VjdCA6IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5pbnRlcnNlY3QgKFNldF9ncmVuX2J1aWx0aW4gZGljdDEpIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QyKSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5pbnRlcnNlY3QgZGljdDEgZGljdDIpXG5cblxuey18IEdldCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBzZXQgYW5kIHRoZSBzZWNvbmQuIEtlZXBzIHZhbHVlc1xudGhhdCBkbyBub3QgYXBwZWFyIGluIHRoZSBzZWNvbmQgc2V0LlxuLX1cbmRpZmYgOiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZGlmZiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MSkgKFNldF9ncmVuX2J1aWx0aW4gZGljdDIpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LmRpZmYgZGljdDEgZGljdDIpXG5cblxuey18IENvbnZlcnQgYSBzZXQgaW50byBhbiBhcnJheSwgc29ydGVkIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxudG9BcnJheSA6IFNldCBhIC0+IEFycmF5IGFcbnRvQXJyYXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3Qua2V5cyBkaWN0XG5cblxuey18IENvbnZlcnQgYW4gYXJyYXkgaW50byBhIHNldCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMuXG4tfVxuZnJvbUFycmF5IDogQXJyYXkgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuZnJvbUFycmF5IGFycmF5ID1cbiAgICBBcnJheS5mb2xkbCBzZXQgZW1wdHkgYXJyYXlcblxuXG57LXwgRm9sZCBvdmVyIHRoZSB2YWx1ZXMgaW4gYSBzZXQsIGluIG9yZGVyIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG4tfVxuZm9sZGwgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gU2V0IGEgLT4gYlxuZm9sZGwgZnVuYyBpbml0aWFsU3RhdGUgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuZm9sZGwgKFxca2V5IF8gc3RhdGUgLT4gZnVuYyBrZXkgc3RhdGUpIGluaXRpYWxTdGF0ZSBkaWN0XG5cblxuey18IEZvbGQgb3ZlciB0aGUgdmFsdWVzIGluIGEgc2V0LCBpbiBvcmRlciBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0LlxuLX1cbmZvbGRyIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IFNldCBhIC0+IGJcbmZvbGRyIGZ1bmMgaW5pdGlhbFN0YXRlIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmZvbGRyIChcXGtleSBfIHN0YXRlIC0+IGZ1bmMga2V5IHN0YXRlKSBpbml0aWFsU3RhdGUgZGljdFxuXG5cbnstfCBNYXAgYSBmdW5jdGlvbiBvbnRvIGEgc2V0LCBjcmVhdGluZyBhIG5ldyBzZXQgd2l0aCBubyBkdXBsaWNhdGVzLlxuLX1cbm1hcCA6IChjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUyKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZTJcbm1hcCBmdW5jIGNvbGwgPVxuICAgIGZvbGRsIChcXHggeHMgLT4gc2V0IChmdW5jIHgpIHhzKSBlbXB0eSBjb2xsXG5cblxuey18IE9ubHkga2VlcCBlbGVtZW50cyB0aGF0IHBhc3MgdGhlIGdpdmVuIHRlc3QuXG5cbiAgICBpbXBvcnQgU2V0IGV4cG9zaW5nIChTZXQpXG5cbiAgICBudW1iZXJzIDogU2V0IEludFxuICAgIG51bWJlcnMgPVxuICAgICAgICBTZXQuZnJvbUFycmF5IFsgLTIsIC0xLCAwLCAxLCAyIF1cblxuICAgIHBvc2l0aXZlcyA6IFNldCBJbnRcbiAgICBwb3NpdGl2ZXMgPVxuICAgICAgICBTZXQua2VlcElmIChcXHggLT4geCA+IDApIG51bWJlcnNcblxuICAgIC0tIHBvc2l0aXZlcyA9PSBTZXQuZnJvbUFycmF5IFsxLDJdXG5cbi19XG5rZWVwSWYgOiAoY29tcGFyYWJsZSAtPiBCb29sKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxua2VlcElmIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5rZWVwSWYgKFxca2V5IF8gLT4gaXNHb29kIGtleSkgZGljdClcblxuXG57LXwgUmVtb3ZlIHVud2FudGVkIHJlc3VsdHMgb2YgYSBtYXAgb3BlcmF0aW9uLlxuICAgIFxuICAgIGltcG9ydCBTZXRcblxuICAgIHN0cmluZ3MgOiBTZXQgU3RyaW5nXG4gICAgc3RyaW5ncyA9XG4gICAgICAgIFNldC5mcm9tQXJyYXkgWyBcIjNcIiwgXCJub3QgYSBudW1iZXJcIiwgXCItNVwiIF1cblxuICAgIG51bWJlcnMgOiBTZXQgSW50XG4gICAgbnVtYmVycyA9XG4gICAgICAgIFNldC5tYXBBbmRLZWVwSnVzdCBTdHJpbmcudG9JbnQgc3RyaW5nc1xuXG4gICAgLS0gbnVtYmVycyA9PSBTZXQuZnJvbUFycmF5IFsgMywgLTUgXVxuLX1cbm1hcEFuZEtlZXBKdXN0IDogKGNvbXBhcmFibGUgLT4gTWF5YmUgY29tcGFyYWJsZTIpIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlMlxubWFwQW5kS2VlcEp1c3QgdG9NYXliZSBjb2xsID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxvbGQgbmV3cyAtPlxuICAgICAgICAgICAgd2hlbiB0b01heWJlIG9sZCBpc1xuICAgICAgICAgICAgICAgIEp1c3QgbmV3IC0+XG4gICAgICAgICAgICAgICAgICAgIHNldCBuZXcgbmV3c1xuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBuZXdzXG4gICAgICAgIClcbiAgICAgICAgZW1wdHlcbiAgICAgICAgY29sbFxuXG5cbnstfCBDcmVhdGUgdHdvIG5ldyBzZXRzLiBUaGUgZmlyc3QgY29udGFpbnMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3NlZCB0aGVcbmdpdmVuIHRlc3QsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBkaWQgbm90LlxuLX1cbnBhcnRpdGlvbiA6IChjb21wYXJhYmxlIC0+IEJvb2wpIC0+IFNldCBjb21wYXJhYmxlIC0+IHsgdHJ1ZXMgOiBTZXQgY29tcGFyYWJsZSwgZmFsc2VzIDogU2V0IGNvbXBhcmFibGUgfVxucGFydGl0aW9uIGlzR29vZCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgbGV0XG4gICAgICAgIHsgdHJ1ZXMsIGZhbHNlcyB9ID1cbiAgICAgICAgICAgIERpY3QucGFydGl0aW9uIChcXGtleSBfIC0+IGlzR29vZCBrZXkpIGRpY3RcbiAgICBpblxuICAgIHsgdHJ1ZXMgPSBTZXRfZ3Jlbl9idWlsdGluIHRydWVzXG4gICAgLCBmYWxzZXMgPSBTZXRfZ3Jlbl9idWlsdGluIGZhbHNlc1xuICAgIH1cbiIsCiAgICAgICAgIm1vZHVsZSBCYXNpY3MgZXhwb3NpbmdcbiAgICAoIEludCwgKCspLCAoLSksICgqKSwgKC8pLCAoLy8pLCAoXiksIG5lZ2F0ZVxuICAgICwgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG4gICAgLCAoPT0pLCAoLz0pXG4gICAgLCAoPCksICg+KSwgKDw9KSwgKD49KSwgbWF4LCBtaW4sIGNsYW1wLCBjb21wYXJlLCBPcmRlciguLilcbiAgICAsIEJvb2woLi4pLCBub3QsICgmJiksICh8fCksIHhvclxuICAgICwgKCsrKVxuICAgICwgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuICAgIClcblxuey18IFRvbnMgb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGdldCBpbXBvcnRlZCBieSBkZWZhdWx0LlxuXG5cbiMjIE51bWJlcnNcblxuQGRvY3MgSW50LCAoKyksICgtKSwgKCopLCAoLyksICgvLyksICheKSwgbmVnYXRlXG5cblxuIyMgRmxvYXRcblxuQGRvY3MgRmxvYXQsIHRvRmxvYXQsIGlzTmFOLCBpc0luZmluaXRlXG5cblxuIyMgRXF1YWxpdHlcblxuQGRvY3MgKD09KSwgKC89KVxuXG5cbiMjIENvbXBhcmlzb25cblxuVGhlc2UgZnVuY3Rpb25zIG9ubHkgd29yayBvbiBgY29tcGFyYWJsZWAgdHlwZXMuIFRoaXMgaW5jbHVkZXMgbnVtYmVycyxcbmNoYXJhY3RlcnMsIHN0cmluZ3MgYW5kIGFycmF5cyBvZiBjb21wYXJhYmxlIHRoaW5ncy5cblxuQGRvY3MgT3JkZXIsICg8KSwgKD4pLCAoPD0pLCAoPj0pLCBtYXgsIG1pbiwgY2xhbXAsIGNvbXBhcmVcblxuXG4jIyBCb29sZWFuc1xuXG5AZG9jcyBCb29sLCBub3QsICgmJiksICh8fCksIHhvclxuXG5cbiMjIEFwcGVuZCBTdHJpbmdzIGFuZCBBcnJheXNcblxuQGRvY3MgKCsrKVxuXG5cbiMjIEZ1bmN0aW9uIEhlbHBlcnNcblxuQGRvY3MgaWRlbnRpdHksICg8fCksICh8PiksICg8PCksICg+PiksIE5ldmVyLCBuZXZlclxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQmFzaWNzXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVXRpbHNcblxuXG5cbi0tIElORklYIE9QRVJBVE9SU1xuXG5cbmluZml4IHJpZ2h0IDAgKDx8KSA9IGFwTFxuaW5maXggbGVmdCAgMCAofD4pID0gYXBSXG5pbmZpeCByaWdodCAyICh8fCkgPSBvclxuaW5maXggcmlnaHQgMyAoJiYpID0gYW5kXG5pbmZpeCBub24gICA0ICg9PSkgPSBlcVxuaW5maXggbm9uICAgNCAoLz0pID0gbmVxXG5pbmZpeCBub24gICA0ICg8KSA9IGx0XG5pbmZpeCBub24gICA0ICg+KSA9IGd0XG5pbmZpeCBub24gICA0ICg8PSkgPSBsZVxuaW5maXggbm9uICAgNCAoPj0pID0gZ2VcbmluZml4IHJpZ2h0IDUgKCsrKSA9IGFwcGVuZFxuaW5maXggbGVmdCAgNiAoKykgPSBhZGRcbmluZml4IGxlZnQgIDYgKC0pID0gc3ViXG5pbmZpeCBsZWZ0ICA3ICgqKSA9IG11bFxuaW5maXggbGVmdCAgNyAoLykgPSBmZGl2XG5pbmZpeCBsZWZ0ICA3ICgvLykgPSBpZGl2XG5pbmZpeCByaWdodCA4ICheKSA9IHBvd1xuaW5maXggbGVmdCAgOSAoPDwpID0gY29tcG9zZUxcbmluZml4IHJpZ2h0IDkgKD4+KSA9IGNvbXBvc2VSXG5cblxuXG4tLSBNQVRIRU1BVElDU1xuXG5cbnstfCBBbiBgSW50YCBpcyBhIHdob2xlIG51bWJlci4gVmFsaWQgc3ludGF4IGZvciBpbnRlZ2VycyBpbmNsdWRlczpcblxuICAgIDBcblxuICAgIDQyXG5cbiAgICA5MDAwXG5cbiAgICAweEZGIC0tIDI1NSBpbiBoZXhhZGVjaW1hbFxuXG4gICAgMHgwQSAtLSAgMTAgaW4gaGV4YWRlY2ltYWxcblxuKipOb3RlOioqIGBJbnRgIG1hdGggaXMgd2VsbC1kZWZpbmVkIGluIHRoZSByYW5nZSBgLTJeMzFgIHRvIGAyXjMxIC0gMWAuIE91dHNpZGVcbm9mIHRoYXQgcmFuZ2UsIHRoZSBiZWhhdmlvciBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjb21waWxhdGlvbiB0YXJnZXQuIFdoZW5cbmdlbmVyYXRpbmcgSmF2YVNjcmlwdCwgdGhlIHNhZmUgcmFuZ2UgZXhwYW5kcyB0byBgLSgyXjUzIC0gMSlgIHRvIGAyXjUzIC0gMWAgZm9yIHNvbWVcbm9wZXJhdGlvbnMsIGJ1dCBpZiB3ZSBnZW5lcmF0ZSBXZWJBc3NlbWJseSBzb21lIGRheSwgd2Ugd291bGQgZG8gdGhlIHRyYWRpdGlvbmFsXG5baW50ZWdlciBvdmVyZmxvd11baW9dLiBUaGlzIHF1aXJrIGlzIG5lY2Vzc2FyeSB0byBnZXQgZ29vZCBwZXJmb3JtYW5jZSBvblxucXVpcmt5IGNvbXBpbGF0aW9uIHRhcmdldHMuXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBuYW1lIGBJbnRgIGNvbWVzIGZyb20gdGhlIHRlcm0gW2ludGVnZXJdLiBJdCBhcHBlYXJzXG50aGF0IHRoZSBgaW50YCBhYmJyZXZpYXRpb24gd2FzIGludHJvZHVjZWQgaW4gW0FMR09MIDY4XVs2OF0sIHNob3J0ZW5pbmcgaXRcbmZyb20gYGludGVnZXJgIGluIFtBTEdPTCA2MF1bNjBdLiBUb2RheSwgYWxtb3N0IGFsbCBwcm9ncmFtbWluZyBsYW5ndWFnZXMgdXNlXG50aGlzIGFiYnJldmlhdGlvbi5cblxuW2lvXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZWdlcl9vdmVyZmxvd1xuW2ludGVnZXJdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlZ2VyXG5bNjBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTEdPTF82MFxuWzY4XTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQUxHT0xfNjhcblxuLX1cbnR5cGUgSW50XG4gICAgPSBJbnQgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cbnstfCBBIGBGbG9hdGAgaXMgYSBbZmxvYXRpbmctcG9pbnQgbnVtYmVyXVtmcF0uIFZhbGlkIHN5bnRheCBmb3IgZmxvYXRzIGluY2x1ZGVzOlxuXG4gICAgMFxuICAgIDQyXG4gICAgMy4xNFxuICAgIDAuMTIzNFxuICAgIDYuMDIyZTIzICAgLS0gPT0gKDYuMDIyICogMTBeMjMpXG4gICAgNi4wMjJlKzIzICAtLSA9PSAoNi4wMjIgKiAxMF4yMylcbiAgICAxLjYwMmXiiJIxOSAgLS0gPT0gKDEuNjAyICogMTBeLTE5KVxuICAgIDFlMyAgICAgICAgLS0gPT0gKDEgKiAxMF4zKSA9PSAxMDAwXG5cbioqSGlzdG9yaWNhbCBOb3RlOioqIFRoZSBwYXJ0aWN1bGFyIGRldGFpbHMgb2YgZmxvYXRzIChlLmcuIGBOYU5gKSBhcmVcbnNwZWNpZmllZCBieSBbSUVFRSA3NTRdW2llZWVdIHdoaWNoIGlzIGxpdGVyYWxseSBoYXJkLWNvZGVkIGludG8gYWxtb3N0IGFsbFxuQ1BVcyBpbiB0aGUgd29ybGQuIFRoYXQgbWVhbnMgaWYgeW91IHRoaW5rIGBOYU5gIGlzIHdlaXJkLCB5b3UgbXVzdFxuc3VjY2Vzc2Z1bGx5IG92ZXJ0YWtlIEludGVsIGFuZCBBTUQgd2l0aCBhIGNoaXAgdGhhdCBpcyBub3QgYmFja3dhcmRzXG5jb21wYXRpYmxlIHdpdGggYW55IHdpZGVseS11c2VkIGFzc2VtYmx5IGxhbmd1YWdlLlxuXG5bZnBdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GbG9hdGluZy1wb2ludF9hcml0aG1ldGljXG5baWVlZV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lFRUVfNzU0XG5cbi19XG50eXBlIEZsb2F0XG4gICAgPSBGbG9hdCAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuey18IEFkZCB0d28gbnVtYmVycy4gVGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUgbWVhbnMgdGhpcyBvcGVyYXRpb24gY2FuIGJlXG5zcGVjaWFsaXplZCB0byBgSW50IC0+IEludCAtPiBJbnRgIG9yIHRvIGBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdGAuIFNvIHlvdVxuY2FuIGRvIHRoaW5ncyBsaWtlIHRoaXM6XG5cbiAgICAzMDAyICsgNDAwNCA9PSA3MDA2IC0tIGFsbCBpbnRzXG5cbiAgICAzLjE0ICsgMy4xNCA9PSA2LjI4IC0tIGFsbCBmbG9hdHNcblxuWW91IF9jYW5ub3RfIGFkZCBhbiBgSW50YCBhbmQgYSBgRmxvYXRgIGRpcmVjdGx5IHRob3VnaC4gVXNlIGZ1bmN0aW9ucyBsaWtlXG5bdG9GbG9hdF0oI3RvRmxvYXQpIG9yIFtyb3VuZF0oI3JvdW5kKSB0byBjb252ZXJ0IGJvdGggdmFsdWVzIHRvIHRoZSBzYW1lIHR5cGUuXG5TbyBpZiB5b3UgbmVlZGVkIHRvIGFkZCBhIGFycmF5IGxlbmd0aCB0byBhIGBGbG9hdGAgZm9yIHNvbWUgcmVhc29uLCB5b3VcbmNvdWxkIHNheSBvbmUgb2YgdGhlc2U6XG5cbiAgICAzLjE0ICsgdG9GbG9hdCAoQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdKSA9PSA2LjE0XG5cbiAgICByb3VuZCAzLjE0ICsgQXJyYXkubGVuZ3RoIFsgMSwgMiwgMyBdID09IDZcblxuKipOb3RlOioqIExhbmd1YWdlcyBsaWtlIEphdmEgYW5kIEphdmFTY3JpcHQgYXV0b21hdGljYWxseSBjb252ZXJ0IGBJbnRgIHZhbHVlc1xudG8gYEZsb2F0YCB2YWx1ZXMgd2hlbiB5b3UgbWl4IGFuZCBtYXRjaC4gVGhpcyBjYW4gbWFrZSBpdCBkaWZmaWN1bHQgdG8gYmUgc3VyZVxuZXhhY3RseSB3aGF0IHR5cGUgb2YgbnVtYmVyIHlvdSBhcmUgZGVhbGluZyB3aXRoLiBXaGVuIHlvdSB0cnkgdG8gX2luZmVyXyB0aGVzZVxuY29udmVyc2lvbnMgKGFzIFNjYWxhIGRvZXMpIGl0IGNhbiBiZSBldmVuIG1vcmUgY29uZnVzaW5nLiBHcmVuIGhhcyBvcHRlZCBmb3IgYVxuZGVzaWduIHRoYXQgbWFrZXMgYWxsIGNvbnZlcnNpb25zIGV4cGxpY2l0LlxuXG4tfVxuYWRkIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmFkZCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmFkZFxuXG5cbnstfCBTdWJ0cmFjdCBudW1iZXJzIGxpa2UgYDQgLSAzID09IDFgLlxuXG5TZWUgW2AoKylgXSgjKykgZm9yIGRvY3Mgb24gdGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUuXG5cbi19XG5zdWIgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxuc3ViID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Muc3ViXG5cblxuey18IE11bHRpcGx5IG51bWJlcnMgbGlrZSBgMiAqIDMgPT0gNmAuXG5cblNlZSBbYCgrKWBdKCMrKSBmb3IgZG9jcyBvbiB0aGUgYG51bWJlcmAgdHlwZSB2YXJpYWJsZS5cblxuLX1cbm11bCA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5tdWwgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5tdWxcblxuXG57LXwgRmxvYXRpbmctcG9pbnQgZGl2aXNpb246XG5cbiAgICAxMCAvIDQgPT0gMi41XG5cbiAgICAxMSAvIDQgPT0gMi43NVxuXG4gICAgMTIgLyA0ID09IDNcblxuICAgIDEzIC8gNCA9PSAzLjI1XG5cbiAgICAxNFxuICAgICAgICAvIDRcbiAgICAgICAgPT0gMy41XG4gICAgICAgIC0gMVxuICAgICAgICAvIDRcbiAgICAgICAgPT0gLTAuMjVcbiAgICAgICAgLSA1XG4gICAgICAgIC8gNFxuICAgICAgICA9PSAtMS4yNVxuXG4tfVxuZmRpdiA6IEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0XG5mZGl2ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuZmRpdlxuXG5cbnstfCBJbnRlZ2VyIGRpdmlzaW9uOlxuXG4gICAgMTAgLy8gNCA9PSAyXG5cbiAgICAxMSAvLyA0ID09IDJcblxuICAgIDEyIC8vIDQgPT0gM1xuXG4gICAgMTMgLy8gNCA9PSAzXG5cbiAgICAxNFxuICAgICAgICAvLyA0XG4gICAgICAgID09IDNcbiAgICAgICAgLSAxXG4gICAgICAgIC8vIDRcbiAgICAgICAgPT0gMFxuICAgICAgICAtIDVcbiAgICAgICAgLy8gNFxuICAgICAgICA9PSAtMVxuXG5Ob3RpY2UgdGhhdCB0aGUgcmVtYWluZGVyIGlzIGRpc2NhcmRlZCwgc28gYDMgLy8gNGAgaXMgZ2l2aW5nIG91dHB1dFxuc2ltaWxhciB0byBgdHJ1bmNhdGUgKDMgLyA0KWAuXG5cbkl0IG1heSBzb21ldGltZXMgYmUgdXNlZnVsIHRvIHBhaXIgdGhpcyB3aXRoIHRoZSBbYHJlbWFpbmRlckJ5YF0oI3JlbWFpbmRlckJ5KVxuZnVuY3Rpb24uXG5cbi19XG5pZGl2IDogSW50IC0+IEludCAtPiBJbnRcbmlkaXYgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5pZGl2XG5cblxuey18IEV4cG9uZW50aWF0aW9uXG5cbiAgICAzIF4gMiA9PSA5XG5cbiAgICAzIF4gMyA9PSAyN1xuXG4tfVxucG93IDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbnBvdyA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnBvd1xuXG5cbnstfCBOZWdhdGUgYSBudW1iZXIuXG5cbiAgICBuZWdhdGUgNDIgPT0gLTQyXG5cbiAgICBuZWdhdGUgLTQyID09IDQyXG5cbiAgICBuZWdhdGUgMCA9PSAwXG5cbi19XG5uZWdhdGUgOiBudW1iZXIgLT4gbnVtYmVyXG5uZWdhdGUgbiA9XG4gICAgLW5cblxuXG4tLSBJTlQgVE8gRkxPQVQgLyBGTE9BVCBUTyBJTlRcblxuXG57LXwgQ29udmVydCBhbiBpbnRlZ2VyIGludG8gYSBmbG9hdC4gVXNlZnVsIHdoZW4gbWl4aW5nIGBJbnRgIGFuZCBgRmxvYXRgXG52YWx1ZXMgbGlrZSB0aGlzOlxuXG4gICAgaGFsZk9mIDogSW50IC0+IEZsb2F0XG4gICAgaGFsZk9mIG51bWJlciA9XG4gICAgICAgIHRvRmxvYXQgbnVtYmVyIC8gMlxuXG4tfVxudG9GbG9hdCA6IEludCAtPiBGbG9hdFxudG9GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnRvRmxvYXRcblxuXG5cbi0tIEVRVUFMSVRZXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgJmxkcXVvO3RoZSBzYW1lJnJkcXVvOy5cblxuKipOb3RlOioqIEdyZW4gdXNlcyBzdHJ1Y3R1cmFsIGVxdWFsaXR5IG9uIHR1cGxlcywgcmVjb3JkcywgYW5kIHVzZXItZGVmaW5lZFxudW5pb24gdHlwZXMuIFRoaXMgbWVhbnMgdGhlIHZhbHVlcyBgKDMsIDQpYCBhbmQgYCgzLCA0KWAgYXJlIGRlZmluaXRlbHkgZXF1YWwuXG5UaGlzIGlzIG5vdCB0cnVlIGluIGxhbmd1YWdlcyBsaWtlIEphdmFTY3JpcHQgdGhhdCB1c2UgcmVmZXJlbmNlIGVxdWFsaXR5IG9uXG5vYmplY3RzLlxuXG4qKk5vdGU6KiogRG8gbm90IHVzZSBgKD09KWAgd2l0aCBmdW5jdGlvbnMsIEpTT04gdmFsdWVzIGZyb20gYGdyZW4vanNvbmAsIG9yXG5yZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gYGdyZW4vcmVnZXhgLiBJdCBkb2VzIG5vdCB3b3JrLiBJdCB3aWxsIGNyYXNoIGlmXG5wb3NzaWJsZS4gV2l0aCBKU09OIHZhbHVlcywgZGVjb2RlIHRvIEdyZW4gdmFsdWVzIGJlZm9yZSBkb2luZyBhbnkgZXF1YWxpdHlcbmNoZWNrcyFcblxuV2h5IGlzIGl0IGxpa2UgdGhpcz8gRXF1YWxpdHkgaW4gdGhlIEdyZW4gc2Vuc2UgY2FuIGJlIGRpZmZpY3VsdCBvciBpbXBvc3NpYmxlXG50byBjb21wdXRlLiBQcm92aW5nIHRoYXQgZnVuY3Rpb25zIGFyZSB0aGUgc2FtZSBpcyBbdW5kZWNpZGFibGVdLCBhbmQgSlNPTlxudmFsdWVzIGNhbiBjb21lIGluIHRocm91Z2ggcG9ydHMgYW5kIGhhdmUgZnVuY3Rpb25zLCBjeWNsZXMsIGFuZCBuZXcgSlMgZGF0YVxudHlwZXMgdGhhdCBpbnRlcmFjdCB3ZWlyZGx5IHdpdGggb3VyIGVxdWFsaXR5IGltcGxlbWVudGF0aW9uLiBJbiBhIGZ1dHVyZVxucmVsZWFzZSwgdGhlIGNvbXBpbGVyIHdpbGwgZGV0ZWN0IHdoZW4gYCg9PSlgIGlzIHVzZWQgd2l0aCBwcm9ibGVtYXRpYyB0eXBlc1xuYW5kIHByb3ZpZGUgYSBoZWxwZnVsIGVycm9yIG1lc3NhZ2UgYXQgY29tcGlsZSB0aW1lLiBUaGlzIHdpbGwgcmVxdWlyZSBzb21lXG5wcmV0dHkgc2VyaW91cyBpbmZyYXN0cnVjdHVyZSB3b3JrLCBzbyB0aGUgc3RvcGdhcCBpcyB0byBjcmFzaCBhcyBxdWlja2x5IGFzXG5wb3NzaWJsZS5cblxuW3VuZGVjaWRhYmxlXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5kZWNpZGFibGVfcHJvYmxlbVxuXG4tfVxuZXEgOiBhIC0+IGEgLT4gQm9vbFxuZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmVxdWFsXG5cblxuey18IENoZWNrIGlmIHZhbHVlcyBhcmUgbm90ICZsZHF1bzt0aGUgc2FtZSZyZHF1bzsuXG5cblNvIGAoYSAvPSBiKWAgaXMgdGhlIHNhbWUgYXMgYChub3QgKGEgPT0gYikpYC5cblxuLX1cbm5lcSA6IGEgLT4gYSAtPiBCb29sXG5uZXEgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLm5vdEVxdWFsXG5cblxuXG4tLSBDT01QQVJJU09OU1xuXG5cbnstfCAtfVxubHQgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxubHQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmx0XG5cblxuey18IC19XG5ndCA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5ndCA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuZ3RcblxuXG57LXwgLX1cbmxlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmxlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5sZVxuXG5cbnstfCAtfVxuZ2UgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxuZ2UgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmdlXG5cblxuey18IEZpbmQgdGhlIHNtYWxsZXIgb2YgdHdvIGNvbXBhcmFibGVzLlxuXG4gICAgbWluIDQyIDEyMzQ1Njc4ID09IDQyXG5cbiAgICBtaW4gXCJhYmNcIiBcInh5elwiID09IFwiYWJjXCJcblxuLX1cbm1pbiA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlXG5taW4geCB5ID1cbiAgICBpZiBsdCB4IHkgdGhlblxuICAgICAgICB4XG5cbiAgICBlbHNlXG4gICAgICAgIHlcblxuXG57LXwgRmluZCB0aGUgbGFyZ2VyIG9mIHR3byBjb21wYXJhYmxlcy5cblxuICAgIG1heCA0MiAxMjM0NTY3OCA9PSAxMjM0NTY3OFxuXG4gICAgbWF4IFwiYWJjXCIgXCJ4eXpcIiA9PSBcInh5elwiXG5cbi19XG5tYXggOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZVxubWF4IHggeSA9XG4gICAgaWYgZ3QgeCB5IHRoZW5cbiAgICAgICAgeFxuXG4gICAgZWxzZVxuICAgICAgICB5XG5cblxuey18IENsYW1wcyBhIG51bWJlciB3aXRoaW4gYSBnaXZlbiByYW5nZS4gV2l0aCB0aGUgZXhwcmVzc2lvblxuYGNsYW1wIDEwMCAyMDAgeGAgdGhlIHJlc3VsdHMgYXJlIGFzIGZvbGxvd3M6XG5cbiAgICAxMDAgICAgIGlmIHggPCAxMDBcbiAgICAgeCAgICAgIGlmIDEwMCA8PSB4IDwgMjAwXG4gICAgMjAwICAgICBpZiAyMDAgPD0geFxuXG4tfVxuY2xhbXAgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbmNsYW1wIGxvdyBoaWdoIG51bWJlciA9XG4gICAgaWYgbHQgbnVtYmVyIGxvdyB0aGVuXG4gICAgICAgIGxvd1xuXG4gICAgZWxzZSBpZiBndCBudW1iZXIgaGlnaCB0aGVuXG4gICAgICAgIGhpZ2hcblxuICAgIGVsc2VcbiAgICAgICAgbnVtYmVyXG5cblxuey18IENvbXBhcmUgYW55IHR3byBjb21wYXJhYmxlIHZhbHVlcy4gQ29tcGFyYWJsZSB2YWx1ZXMgaW5jbHVkZSBgU3RyaW5nYCxcbmBDaGFyYCwgYEludGAsIGBGbG9hdGAsIG9yIGFuIGFycmF5IG9yIHR1cGxlIGNvbnRhaW5pbmcgY29tcGFyYWJsZSB2YWx1ZXMuIFRoZXNlXG5hcmUgYWxzbyB0aGUgb25seSB2YWx1ZXMgdGhhdCB3b3JrIGFzIGBEaWN0YCBrZXlzIG9yIGBTZXRgIG1lbWJlcnMuXG5cbiAgICBjb21wYXJlIDMgNCA9PSBMVFxuXG4gICAgY29tcGFyZSA0IDQgPT0gRVFcblxuICAgIGNvbXBhcmUgNSA0ID09IEdUXG5cbi19XG5jb21wYXJlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IE9yZGVyXG5jb21wYXJlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5jb21wYXJlXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHJlbGF0aXZlIG9yZGVyaW5nIG9mIHR3byB0aGluZ3MuXG5UaGUgcmVsYXRpb25zIGFyZSBsZXNzIHRoYW4sIGVxdWFsIHRvLCBhbmQgZ3JlYXRlciB0aGFuLlxuLX1cbnR5cGUgT3JkZXJcbiAgICA9IExUXG4gICAgfCBFUVxuICAgIHwgR1RcblxuXG5cbi0tIEJPT0xFQU5TXG5cblxuey18IEEg4oCcQm9vbGVhbuKAnSB2YWx1ZS4gSXQgY2FuIGVpdGhlciBiZSBgVHJ1ZWAgb3IgYEZhbHNlYC5cblxuKipOb3RlOioqIFByb2dyYW1tZXJzIGNvbWluZyBmcm9tIEphdmFTY3JpcHQsIEphdmEsIGV0Yy4gdGVuZCB0byByZWFjaCBmb3JcbmJvb2xlYW4gdmFsdWVzIHdheSB0b28gb2Z0ZW4gaW4gR3Jlbi4gVXNpbmcgYSBbdW5pb24gdHlwZV1bdXRdIGlzIG9mdGVuIGNsZWFyZXJcbmFuZCBtb3JlIHJlbGlhYmxlLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBmcm9tIEplcmVteSBbaGVyZV1bamZdIG9yXG5mcm9tIFJpY2hhcmQgW2hlcmVdW3J0XS5cblxuW3V0XTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3R5cGVzL3VuaW9uX3R5cGVzLmh0bWxcbltqZl06IGh0dHBzOi8veW91dHUuYmUvNlRES0hHdEF4ZWc/dD0xbTI1c1xuW3J0XTogaHR0cHM6Ly95b3V0dS5iZS9JY2dtU1JKSHVfOD90PTFtMTRzXG5cbi19XG50eXBlIEJvb2xcbiAgICA9IFRydWVcbiAgICB8IEZhbHNlXG5cblxuey18IE5lZ2F0ZSBhIGJvb2xlYW4gdmFsdWUuXG5cbiAgICBub3QgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgbm90IEZhbHNlID09IFRydWVcblxuLX1cbm5vdCA6IEJvb2wgLT4gQm9vbFxubm90ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mubm90XG5cblxuey18IFRoZSBsb2dpY2FsIEFORCBvcGVyYXRvci4gYFRydWVgIGlmIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlICYmIFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSAmJiBGYWxzZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgRmFsc2UgJiYgRmFsc2UgPT0gRmFsc2VcblxuKipOb3RlOioqIFdoZW4gdXNlZCBpbiB0aGUgaW5maXggcG9zaXRpb24sIGxpa2UgYChsZWZ0ICYmIHJpZ2h0KWAsIHRoZSBvcGVyYXRvclxuc2hvcnQtY2lyY3VpdHMuIFRoaXMgbWVhbnMgaWYgYGxlZnRgIGlzIGBGYWxzZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgRmFsc2VgIG92ZXJhbGwuXG5cbi19XG5hbmQgOiBCb29sIC0+IEJvb2wgLT4gQm9vbFxuYW5kID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuYW5kXG5cblxuey18IFRoZSBsb2dpY2FsIE9SIG9wZXJhdG9yLiBgVHJ1ZWAgaWYgb25lIG9yIGJvdGggaW5wdXRzIGFyZSBgVHJ1ZWAuXG5cbiAgICBUcnVlIHx8IFRydWUgPT0gVHJ1ZVxuXG4gICAgVHJ1ZSB8fCBGYWxzZSA9PSBUcnVlXG5cbiAgICBGYWxzZSB8fCBUcnVlID09IFRydWVcblxuICAgIEZhbHNlIHx8IEZhbHNlID09IEZhbHNlXG5cbioqTm90ZToqKiBXaGVuIHVzZWQgaW4gdGhlIGluZml4IHBvc2l0aW9uLCBsaWtlIGAobGVmdCB8fCByaWdodClgLCB0aGUgb3BlcmF0b3JcbnNob3J0LWNpcmN1aXRzLiBUaGlzIG1lYW5zIGlmIGBsZWZ0YCBpcyBgVHJ1ZWAgd2UgZG8gbm90IGJvdGhlciBldmFsdWF0aW5nIGByaWdodGBcbmFuZCBqdXN0IHJldHVybiBgVHJ1ZWAgb3ZlcmFsbC5cblxuLX1cbm9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbm9yID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3Mub3JcblxuXG57LXwgVGhlIGV4Y2x1c2l2ZS1vciBvcGVyYXRvci4gYFRydWVgIGlmIGV4YWN0bHkgb25lIGlucHV0IGlzIGBUcnVlYC5cblxuICAgIHhvciBUcnVlIFRydWUgPT0gRmFsc2VcblxuICAgIHhvciBUcnVlIEZhbHNlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBUcnVlID09IFRydWVcblxuICAgIHhvciBGYWxzZSBGYWxzZSA9PSBGYWxzZVxuXG4tfVxueG9yIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbnhvciA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnhvclxuXG5cblxuLS0gQVBQRU5EXG5cblxuey18IFB1dCB0d28gYXBwZW5kYWJsZSB0aGluZ3MgdG9nZXRoZXIuIFRoaXMgaW5jbHVkZXMgc3RyaW5ncyBhbmQgYXJyYXlzLlxuXG4gICAgXCJoZWxsb1wiICsrIFwid29ybGRcIiA9PSBcImhlbGxvd29ybGRcIlxuXG4gICAgWyAxLCAxLCAyIF0gKysgWyAzLCA1LCA4IF0gPT0gWyAxLCAxLCAyLCAzLCA1LCA4IF1cblxuLX1cbmFwcGVuZCA6IGFwcGVuZGFibGUgLT4gYXBwZW5kYWJsZSAtPiBhcHBlbmRhYmxlXG5hcHBlbmQgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmFwcGVuZFxuXG5cblxuLS0gQ1JBWlkgRkxPQVRTXG5cblxuey18IERldGVybWluZSB3aGV0aGVyIGEgZmxvYXQgaXMgYW4gdW5kZWZpbmVkIG9yIHVucmVwcmVzZW50YWJsZSBudW1iZXIuXG5OYU4gc3RhbmRzIGZvciBfbm90IGEgbnVtYmVyXyBhbmQgaXQgaXMgW2Egc3RhbmRhcmRpemVkIHBhcnQgb2YgZmxvYXRpbmcgcG9pbnRcbm51bWJlcnNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05hTikuXG5cbiAgICBpc05hTiAoMCAvIDApID09IFRydWVcblxuICAgIGlzTmFOIChzcXJ0IC0xKSA9PSBUcnVlXG5cbiAgICBpc05hTiAoMSAvIDApID09IEZhbHNlIC0tIGluZmluaXR5IGlzIGEgbnVtYmVyXG5cbiAgICBpc05hTiAxID09IEZhbHNlXG5cbi19XG5pc05hTiA6IEZsb2F0IC0+IEJvb2xcbmlzTmFOID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuaXNOYU5cblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgYSBmbG9hdCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBpbmZpbml0eS5cblxuICAgIGlzSW5maW5pdGUgKDAgLyAwKSA9PSBGYWxzZVxuXG4gICAgaXNJbmZpbml0ZSAoc3FydCAtMSkgPT0gRmFsc2VcblxuICAgIGlzSW5maW5pdGUgKDEgLyAwKSA9PSBUcnVlXG5cbiAgICBpc0luZmluaXRlIDEgPT0gRmFsc2VcblxuTm90aWNlIHRoYXQgTmFOIGlzIG5vdCBpbmZpbml0ZSEgRm9yIGZsb2F0IGBuYCB0byBiZSBmaW5pdGUgaW1wbGllcyB0aGF0XG5gbm90IChpc0luZmluaXRlIG4gfHwgaXNOYU4gbilgIGV2YWx1YXRlcyB0byBgVHJ1ZWAuXG5cbi19XG5pc0luZmluaXRlIDogRmxvYXQgLT4gQm9vbFxuaXNJbmZpbml0ZSA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmlzSW5maW5pdGVcblxuXG5cbi0tIEZVTkNUSU9OIEhFTFBFUlNcblxuXG57LXwgRnVuY3Rpb24gY29tcG9zaXRpb24sIHBhc3NpbmcgcmVzdWx0cyBhbG9uZyBpbiB0aGUgc3VnZ2VzdGVkIGRpcmVjdGlvbi4gRm9yXG5leGFtcGxlLCB0aGUgZm9sbG93aW5nIGNvZGUgY2hlY2tzIGlmIHRoZSByZXN1bHQgb2Ygcm91bmRpbmcgYSBmbG9hdCBpcyBvZGQ6XG5cbiAgICBub3QgPDwgaXNFdmVuIDw8IHJvdW5kXG5cbllvdSBjYW4gdGhpbmsgb2YgdGhpcyBvcGVyYXRvciBhcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmc6XG5cbiAgICAoZyA8PCBmKSA9PSAoXFx4IC0+IGcgKGYgeCkpXG5cblNvIG91ciBleGFtcGxlIGV4cGFuZHMgb3V0IHRvIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBcXG4gLT4gbm90IChpc0V2ZW4gKHJvdW5kIG4pKVxuXG4tfVxuY29tcG9zZUwgOiAoYiAtPiBjKSAtPiAoYSAtPiBiKSAtPiAoYSAtPiBjKVxuY29tcG9zZUwgZyBmID1cbiAgICBcXHggLT4gZyAoZiB4KVxuXG5cbnstfCBGdW5jdGlvbiBjb21wb3NpdGlvbiwgcGFzc2luZyByZXN1bHRzIGFsb25nIGluIHRoZSBzdWdnZXN0ZWQgZGlyZWN0aW9uLiBGb3JcbmV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgY29kZSBjaGVja3MgaWYgdGhlIHJlc3VsdCBvZiByb3VuZGluZyBhIGZsb2F0IGlzIG9kZDpcblxuICAgIHJvdW5kID4+IGlzRXZlbiA+PiBub3RcblxuLX1cbmNvbXBvc2VSIDogKGEgLT4gYikgLT4gKGIgLT4gYykgLT4gKGEgLT4gYylcbmNvbXBvc2VSIGYgZyA9XG4gICAgXFx4IC0+IGcgKGYgeClcblxuXG57LXwgU2F5aW5nIGB4IHw+IGZgIGlzIGV4YWN0bHkgdGhlIHNhbWUgYXMgYGYgeGAuXG5cbkl0IGlzIGNhbGxlZCB0aGUg4oCccGlwZeKAnSBvcGVyYXRvciBiZWNhdXNlIGl0IGxldHMgeW91IHdyaXRlIOKAnHBpcGVsaW5lZOKAnSBjb2RlLlxuRm9yIGV4YW1wbGUsIHNheSB3ZSBoYXZlIGEgYHNhbml0aXplYCBmdW5jdGlvbiBmb3IgdHVybmluZyB1c2VyIGlucHV0IGludG9cbmludGVnZXJzOlxuXG4gICAgLS0gQkVGT1JFXG4gICAgc2FuaXRpemUgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgc2FuaXRpemUgaW5wdXQgPVxuICAgICAgICBTdHJpbmcudG9JbnQgKFN0cmluZy50cmltIGlucHV0KVxuXG5XZSBjYW4gcmV3cml0ZSBpdCBsaWtlIHRoaXM6XG5cbiAgICAtLSBBRlRFUlxuICAgIHNhbml0aXplIDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIHNhbml0aXplIGlucHV0ID1cbiAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIHw+IFN0cmluZy50cmltXG4gICAgICAgICAgICB8PiBTdHJpbmcudG9JbnRcblxuVG90YWxseSBlcXVpdmFsZW50ISBJIHJlY29tbWVuZCB0cnlpbmcgdG8gcmV3cml0ZSBjb2RlIHRoYXQgdXNlcyBgeCB8PiBmYFxuaW50byBjb2RlIGxpa2UgYGYgeGAgdW50aWwgdGhlcmUgYXJlIG5vIHBpcGVzIGxlZnQuIFRoYXQgY2FuIGhlbHAgeW91IGJ1aWxkXG55b3VyIGludHVpdGlvbi5cblxuKipOb3RlOioqIFRoaXMgY2FuIGJlIG92ZXJ1c2VkISBJIHRoaW5rIGZvbGtzIGZpbmQgaXQgcXVpdGUgbmVhdCwgYnV0IHdoZW4geW91XG5oYXZlIHRocmVlIG9yIGZvdXIgc3RlcHMsIHRoZSBjb2RlIG9mdGVuIGdldHMgY2xlYXJlciBpZiB5b3UgYnJlYWsgb3V0IGFcbnRvcC1sZXZlbCBoZWxwZXIgZnVuY3Rpb24uIE5vdyB0aGUgdHJhbnNmb3JtYXRpb24gaGFzIGEgbmFtZS4gVGhlIGFyZ3VtZW50cyBhcmVcbm5hbWVkLiBJdCBoYXMgYSB0eXBlIGFubm90YXRpb24uIEl0IGlzIG11Y2ggbW9yZSBzZWxmLWRvY3VtZW50aW5nIHRoYXQgd2F5IVxuVGVzdGluZyB0aGUgbG9naWMgZ2V0cyBlYXNpZXIgdG9vLiBOaWNlIHNpZGUgYmVuZWZpdCFcblxuLX1cbmFwUiA6IGEgLT4gKGEgLT4gYikgLT4gYlxuYXBSIHggZiA9XG4gICAgZiB4XG5cblxuey18IFNheWluZyBgZiA8fCB4YCBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGBmIHhgLlxuXG5JdCBjYW4gaGVscCB5b3UgYXZvaWQgcGFyZW50aGVzZXMsIHdoaWNoIGNhbiBiZSBuaWNlIHNvbWV0aW1lcy4gTWF5YmUgeW91IHdhbnRcbnRvIGFwcGx5IGEgZnVuY3Rpb24gdG8gYSBgY2FzZWAgZXhwcmVzc2lvbj8gVGhhdCBzb3J0IG9mIHRoaW5nLlxuXG4tfVxuYXBMIDogKGEgLT4gYikgLT4gYSAtPiBiXG5hcEwgZiB4ID1cbiAgICBmIHhcblxuXG57LXwgR2l2ZW4gYSB2YWx1ZSwgcmV0dXJucyBleGFjdGx5IHRoZSBzYW1lIHZhbHVlLiBUaGlzIGlzIGNhbGxlZFxuW3RoZSBpZGVudGl0eSBmdW5jdGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSWRlbnRpdHlfZnVuY3Rpb24pLlxuLX1cbmlkZW50aXR5IDogYSAtPiBhXG5pZGVudGl0eSB4ID1cbiAgICB4XG5cblxuey18IEEgdmFsdWUgdGhhdCBjYW4gbmV2ZXIgaGFwcGVuISBGb3IgY29udGV4dDpcblxuICAtIFRoZSBib29sZWFuIHR5cGUgYEJvb2xgIGhhcyB0d28gdmFsdWVzOiBgVHJ1ZWAgYW5kIGBGYWxzZWBcbiAgLSBUaGUgdW5pdCB0eXBlIGAoKWAgaGFzIG9uZSB2YWx1ZTogYCgpYFxuICAtIFRoZSBuZXZlciB0eXBlIGBOZXZlcmAgaGFzIG5vIHZhbHVlcyFcblxuWW91IG1heSBzZWUgaXQgaW4gdGhlIHdpbGQgaW4gYEh0bWwgTmV2ZXJgIHdoaWNoIG1lYW5zIHRoaXMgSFRNTCB3aWxsIG5ldmVyXG5wcm9kdWNlIGFueSBtZXNzYWdlcy4gWW91IHdvdWxkIG5lZWQgdG8gd3JpdGUgYW4gZXZlbnQgaGFuZGxlciBsaWtlXG5gb25DbGljayA/Pz8gOiBBdHRyaWJ1dGUgTmV2ZXJgIGJ1dCBob3cgY2FuIHdlIGZpbGwgaW4gdGhlIHF1ZXN0aW9uIG1hcmtzPyFcblNvIHRoZXJlIGNhbm5vdCBiZSBhbnkgZXZlbnQgaGFuZGxlcnMgb24gdGhhdCBIVE1MLlxuXG5Zb3UgbWF5IGFsc28gc2VlIHRoaXMgdXNlZCB3aXRoIHRhc2tzIHRoYXQgbmV2ZXIgZmFpbCwgbGlrZSBgVGFzayBOZXZlciAoKWAuXG5cblRoZSBgTmV2ZXJgIHR5cGUgaXMgdXNlZnVsIGZvciByZXN0cmljdGluZyBfYXJndW1lbnRzXyB0byBhIGZ1bmN0aW9uLiBNYXliZSBteVxuQVBJIGNhbiBvbmx5IGFjY2VwdCBIVE1MIHdpdGhvdXQgZXZlbnQgaGFuZGxlcnMsIHNvIEkgcmVxdWlyZSBgSHRtbCBOZXZlcmAgYW5kXG51c2VycyBjYW4gZ2l2ZSBgSHRtbCBtc2dgIGFuZCBldmVyeXRoaW5nIHdpbGwgZ28gZmluZS4gR2VuZXJhbGx5IHNwZWFraW5nLCB5b3VcbmRvIG5vdCB3YW50IGBOZXZlcmAgaW4geW91ciByZXR1cm4gdHlwZXMgdGhvdWdoLlxuXG4tfVxudHlwZSBOZXZlclxuICAgID0gSnVzdE9uZU1vcmUgTmV2ZXJcblxuXG57LXwgQSBmdW5jdGlvbiB0aGF0IGNhbiBuZXZlciBiZSBjYWxsZWQuIFNlZW1zIGV4dHJlbWVseSBwb2ludGxlc3MsIGJ1dCBpdFxuX2Nhbl8gY29tZSBpbiBoYW5keS4gSW1hZ2luZSB5b3UgaGF2ZSBzb21lIEhUTUwgdGhhdCBzaG91bGQgbmV2ZXIgcHJvZHVjZSBhbnlcbm1lc3NhZ2VzLiBBbmQgc2F5IHlvdSB3YW50IHRvIHVzZSBpdCBpbiBzb21lIG90aGVyIEhUTUwgdGhhdCBfZG9lc18gcHJvZHVjZVxubWVzc2FnZXMuIFlvdSBjb3VsZCBzYXk6XG5cbiAgICBpbXBvcnQgSHRtbCBleHBvc2luZyAoLi4pXG5cbiAgICBlbWJlZEh0bWwgOiBIdG1sIE5ldmVyIC0+IEh0bWwgbXNnXG4gICAgZW1iZWRIdG1sIHN0YXRpY1N0dWZmID1cbiAgICAgICAgZGl2IFtdXG4gICAgICAgICAgICBbIHRleHQgXCJoZWxsb1wiXG4gICAgICAgICAgICAsIEh0bWwubWFwIG5ldmVyIHN0YXRpY1N0dWZmXG4gICAgICAgICAgICBdXG5cblNvIHRoZSBgbmV2ZXJgIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSB0ZWxsaW5nIHRoZSB0eXBlIHN5c3RlbSwgbWFrZSBzdXJlIG5vIG9uZVxuZXZlciBjYWxscyBtZSFcblxuLX1cbm5ldmVyIDogTmV2ZXIgLT4gYVxubmV2ZXIgKEp1c3RPbmVNb3JlIG52cikgPVxuICAgIG5ldmVyIG52clxuIiwKICAgICAgICAibW9kdWxlIERhdGFUYWJsZSBleHBvc2luZ1xuICAgICggdmlld1xuICAgICwgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuICAgICwgU3RhdGUsIG5ld1xuICAgICwgU29ydERpcmVjdGlvbiguLiksIGluaXRpYWxTb3J0XG4gICAgLCBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcbiAgICAsIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG4gICAgLCBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuICAgICwgcGFnZUxlbmd0aENob29zZXJcbiAgICAsIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG4gICAgLCBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuICAgICwgQ29uZmlnLCBjdXN0b21Db25maWcsIEN1c3RvbWl6YXRpb25zLCBIdG1sRGV0YWlsc1xuICAgICwgZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgLCBnZXRTb3J0ZWREYXRhLCBnZXRQYWdpbmF0ZWREYXRhXG4gICAgKVxuXG57LXwgVGhpcyBsaWJyYXJ5IGhlbHBzIHlvdSBjcmVhdGUgc29ydGFibGUgdGFibGVzIHdpdGggcGFnaW5hdGlvbiBhbmQgZmlsdGVyIG9wdGlvbnMuXG5UaGUgY3J1Y2lhbCBmZWF0dXJlIGlzIHRoYXQgaXQgbGV0cyB5b3Ugb3duIHlvdXIgZGF0YSBzZXBhcmF0ZWx5IGFuZCBrZWVwIGl0IGluXG53aGF0ZXZlciBmb3JtYXQgaXMgYmVzdCBmb3IgeW91LiBUaGlzIHdheSB5b3UgYXJlIGZyZWUgdG8gY2hhbmdlIHlvdXIgZGF0YSB3aXRob3V0XG53b3JyeWluZyBhYm91dCB0aGUgdGFibGUgJmxkcXVvO2dldHRpbmcgb3V0IG9mIHN5bmMmcmRxdW87IHdpdGggdGhlIGRhdGEuIEhhdmluZyBhIHNpbmdsZVxuc291cmNlIG9mIHRydXRoIGlzIHByZXR0eSBncmVhdCFcblxuSSByZWNvbW1lbmQgY2hlY2tpbmcgb3V0IHRoZSBbZXhhbXBsZXNdIHRvIGdldCBhIGZlZWwgZm9yIGhvdyBpdCB3b3Jrcy5cblxuW2V4YW1wbGVzXTogaHR0cHM6Ly9naXRodWIuY29tL2xpbmRlbmxpb24vZ3Jlbi1kYXRhdGFibGVzL3RyZWUvbWFtYS9leGFtcGxlc1xuXG5cbiMjIFZpZXdcblxuQGRvY3Mgdmlld1xuXG5cbiMjIENvbmZpZ3VyYXRpb25cblxuQGRvY3MgY29uZmlnLCBzdHJpbmdDb2x1bW4sIGludENvbHVtbiwgZmxvYXRDb2x1bW4sIGNvbHVtblxuXG5cbiMjIFN0YXRlXG5cbkBkb2NzIFN0YXRlLCBuZXdcblxuXG4jIyBTb3J0IG9yZGVyXG5cbkBkb2NzIFNvcnREaXJlY3Rpb24sIGluaXRpYWxTb3J0XG5AZG9jcyBnZXRTb3J0U3RhdGUsIHVwZGF0ZVNvcnRTdGF0ZSwgdXBkYXRlTXVsdGlTb3J0U3RhdGVcblxuXG4jIyBQYWdpbmF0aW9uXG5cbkBkb2NzIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG5AZG9jcyBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuQGRvY3MgcGFnZUxlbmd0aENob29zZXJcblxuIyMgQ3JhenkgQ3VzdG9taXphdGlvblxuXG5JZiB5b3UgYXJlIG5ldyB0byB0aGlzIGxpYnJhcnksIHlvdSBjYW4gcHJvYmFibHkgc3RvcCByZWFkaW5nIGhlcmUuIEFmdGVyIHRoaXNcbnBvaW50IHRoZXJlIGFyZSBhIGJ1bmNoIG9mIHdheXMgdG8gY3VzdG9taXplIHlvdXIgdGFibGUgZnVydGhlci5cblxuIyMjIEN1c3RvbSBDb2x1bW5zXG5cbkBkb2NzIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG5AZG9jcyBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuXG5cbiMjIyBDdXN0b20gQ29uZmlnXG5cbkBkb2NzIENvbmZpZywgY3VzdG9tQ29uZmlnLCBDdXN0b21pemF0aW9ucywgSHRtbERldGFpbHNcbkBkb2NzIGRlZmF1bHRDdXN0b21pemF0aW9uc1xuXG4jIyMgSW50ZXJtZWRpYXRlIERhdGEgQWNjZXNzXG5cbkBkb2NzIGdldFNvcnRlZERhdGEsIGdldFBhZ2luYXRlZERhdGFcblxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbClcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMgYXMgQVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcy5BcmlhIGFzIEFyaWFcbmltcG9ydCBIdG1sLkV2ZW50cyBhcyBFXG5pbXBvcnQgSHRtbC5LZXllZCBhcyBLZXllZFxuaW1wb3J0IEh0bWwuTGF6eSBhcyBMYXp5XG5pbXBvcnQgSnNvbi5EZWNvZGVcbmltcG9ydCBNYXRoXG5cblxuXG4tLSBTVEFURVxuXG5cbnstfCBUcmFja3Mgd2hpY2ggY29sdW1uIHRvIHNvcnQgYnksIGluIHdoaWNoIGRpcmVjdGlvbiwgdGhlIHBhZ2Ugc2l6ZSBhbmQgdGhlXG5wb3NpdGlvbiBvZiB0aGUgcm93IGN1cnNvciwgYXMgd2VsbCBhcyB0b3RhbCBudW1iZXIgb2Ygcm93cyBvZiB0aGUgd2hvbGVcbihwb3NzaWJseSByZW1vdGUpIHRhYmxlLiBUaGlzIHR5cGUgaXMgb3BhcXVlLlxuLX1cbnR5cGUgU3RhdGVcbiAgICA9IFN0YXRlXG4gICAgICAgIHsgc29ydENvbHVtbnMgOiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG4gICAgICAgICwgcGFnZVNpemUgOiBJbnRcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA6IFN0cmluZ1xuICAgICAgICAsIHBhZ2luYXRpb24gOiBQYWdpbmF0aW9uU3R5bGVcbiAgICAgICAgLCB0YWJsZUlkIDogU3RyaW5nXG4gICAgICAgIH1cblxuXG57LXwgU2ltcGxlIGJvb2xlYW4gdHlwZSBmb3IgY29sdW1uIHNvcnQgZGlyZWN0aW9uLiBUaGlzIHR5cGUgaXMgbm90IG9wYXF1ZSBhbmRcbm1lYW50IHRvIGJlIHVzZWQgYnkgb3RoZXIgbW9kdWxlcyB3aGVuIGNvbnN0cnVjdGluZyBUYWJsZSBTdGF0ZVxuLX1cbnR5cGUgU29ydERpcmVjdGlvblxuICAgID0gQXNjXG4gICAgfCBEZXNjXG5cblxuc29ydERpcmVjdGlvblRvU3RyaW5nIDogU29ydERpcmVjdGlvbiAtPiBTdHJpbmdcbnNvcnREaXJlY3Rpb25Ub1N0cmluZyBzb3J0RGlyZWN0aW9uID1cbiAgICB3aGVuIHNvcnREaXJlY3Rpb24gaXNcbiAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICBcIkFzY1wiXG5cbiAgICAgICAgRGVzYyAtPlxuICAgICAgICAgICAgXCJEZXNjXCJcblxuXG57LXwgQ3JlYXRlIGFuIGluaXRpYWwgc3RhdGUgZm9yIGEgdGFibGUgd2l0aG91dCBwYWdpbmF0aW9uLiBCeSBwcm92aWRpbmcgYSBjb2x1bW5cbm5hbWUsIHlvdSBkZXRlcm1pbmUgd2hpY2ggY29sdW1uIHNob3VsZCBiZSB1c2VkIGZvciBzb3J0aW5nIGJ5IGRlZmF1bHQuIFRoaXMgaXNcbm1lYW50IHRvIGJlIHVzZWQgZm9yIHNpbXBsZSB0YWJsZXMuIE1vcmVcblNvIGlmXG55b3Ugd2FudCB5b3VyIHRhYmxlIG9mIHlhY2h0cyB0byBiZSBzb3J0ZWQgYnkgbGVuZ3RoIGJ5IGRlZmF1bHQsIHlvdSBtaWdodCBzYXk6XG5cbmltcG9ydCBUYWJsZVxuXG4gICAgVGFibGUuaW5pdGlhbFNvcnQgXCJMZW5ndGhcIlxuXG4tfVxuaW5pdGlhbFNvcnQgOiBTdHJpbmcgLT4gU3RhdGVcbmluaXRpYWxTb3J0IGhlYWRlciA9XG4gICAgU3RhdGVcbiAgICAgICAgeyBzb3J0Q29sdW1ucyA9IFsgeyBzb3J0Q29sdW1uTmFtZSA9IGhlYWRlciwgc29ydERpcmVjdGlvbiA9IEFzYyB9IF1cbiAgICAgICAgLCBwYWdlU2l6ZSA9IDBcbiAgICAgICAgLCBhY3RpdmVSb3dJZCA9IFwiXCJcbiAgICAgICAgLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uXG4gICAgICAgICwgdGFibGVJZCA9IFwic29ydGFibGVUYWJsZVwiXG4gICAgICAgIH1cblxuXG57LXwgQ3JlYXRlIGEgZGVmYXVsdCB0YWJsZSBzdGF0ZS4gT25seSB0aGUgaWQgb2YgdGhlIHRhYmxlIGlzIHN1cHBsaWVkLiBBbGwgb3RoZXIgc3RhdGUgaXMgaW5pdGlhbGlzZWQgd2l0aCBkZWZhdWx0IHZhbHVlcy4gVGhpcyBzdGF0ZSBjYW4gdGhlbiBiZSBzZXQgd2l0aCB1cGRhdGUgZnVuY3Rpb25zLiBTbyBpZiB5b3Ugd2FudGVkIGEgdGFibGUgb2YgY291bnRyaWVzIHRoYXQgaXMgYnkgZGVmYXVsdCBzb3J0ZWQgYnkgcG9wdWxhdGlvbiBjb3VudCBpbiBkZXNjZW5kaW5nIG9yZGVyIHlvdSBtaWdodCB3cml0ZVxuXG5pbXBvcnQgVGFibGVcblxuICAgIFRhYmxlLm5ldyBcIkNvdW50cmllc1wiXG4gICAgICAgIHw+IERhdGFUYWJsZS51cGRhdGVTb3J0U3RhdGUgXCJQb3B1bGF0aW9uXCIgRGF0YVRhYmxlLkRlc2NcblxuLX1cbm5ldyA6IFN0cmluZyAtPiBTdGF0ZVxubmV3IGlkID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gW10sIHBhZ2VTaXplID0gMCwgYWN0aXZlUm93SWQgPSBcIlwiLCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uLCB0YWJsZUlkID0gaWQgfVxuXG5cbnstfCBJbnNwZWN0IHRoZSBjdXJyZW50IHRhYmxlIHN0YXRlLiBXaGljaCBjb2x1bW4gaXMgYmVpbmcgc29ydGVkIGJ5LCBhbmRcbndoZXRoZXIgdGhlIHNvcnQgb3JkZXIgaXMgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuIFRoaXMgY291bGQgYmUgdXNlZnVsIGZvclxuc3RvcmluZyB0aGUgc29ydCBzdGF0ZSBpbiBhIFVSTCBvciBzb21ld2hlcmUgZWxzZSBvdXRzaWRlIG9mIEVsbS5cbi19XG5nZXRTb3J0U3RhdGUgOiBTdGF0ZSAtPiBBcnJheSB7IHNvcnRDb2x1bW5OYW1lIDogU3RyaW5nLCBzb3J0RGlyZWN0aW9uIDogU29ydERpcmVjdGlvbiB9XG5nZXRTb3J0U3RhdGUgKFN0YXRlIHsgc29ydENvbHVtbnMgfSkgPVxuICAgIHNvcnRDb2x1bW5zXG5cblxuey18IEluc3BlY3QgdGhlIGN1cnJlbnQgdGFibGUgc3RhdGUuIFdoYXQgaXMgdGhlIGN1cnJlbnQgcGFnZSBzaXplIGZvciB0aGVcbnBhZ2luYXRpb24uIFNob3dpbmcgXCJhbGwgcm93c1wiIHJldHVybnMgMC4gVGhpcyBjb3VsZCBiZSB1c2VmdWwgZm9yIHN0b3JpbmdcbnRoZSBzb3J0IHN0YXRlIGluIGEgVVJMIG9yIHNvbWV3aGVyZSBlbHNlIG91dHNpZGUgb2YgRWxtLlxuLX1cbmdldFBhZ2VTaXplIDogU3RhdGUgLT4gSW50XG5nZXRQYWdlU2l6ZSAoU3RhdGUgeyBwYWdlU2l6ZSB9KSA9XG4gICAgcGFnZVNpemVcblxuXG57LXwgSW5zcGVjdCB0aGUgY3VycmVudCB0YWJsZSBzdGF0ZS4gV2hhdCBpcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcm93XG5jdXJzb3IuIFRvZ2V0aGVyIHdpdGggdGhlIGN1cnJlbnQgcGFnZSBzaXplIHRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0YWJsZSBwYWdlXG5pcyBzaG93bi5cbi19XG5nZXRBY3RpdmVSb3dJZCA6IFN0YXRlIC0+IFN0cmluZ1xuZ2V0QWN0aXZlUm93SWQgKFN0YXRlIHsgYWN0aXZlUm93SWQgfSkgPVxuICAgIGFjdGl2ZVJvd0lkXG5cblxuey18IC19XG51cGRhdGVTb3J0U3RhdGUgOiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlU29ydFN0YXRlIG5ld1NvcnRDb2x1bW4gc29ydERpcmVjdGlvbiAoU3RhdGUgeyBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF0sIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuey18IC19XG51cGRhdGVNdWx0aVNvcnRTdGF0ZSA6IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVNdWx0aVNvcnRTdGF0ZSBuZXdTb3J0Q29sdW1uIHNvcnREaXJlY3Rpb24gKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiwgdGFibGVJZCB9KSA9XG4gICAgbGV0XG4gICAgICAgIG5ld1NvcnRTdGF0ZSA9XG4gICAgICAgICAgICBbIHsgc29ydENvbHVtbk5hbWUgPSBuZXdTb3J0Q29sdW1uLCBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiB9IF1cbiAgICAgICAgICAgICAgICArKyBBcnJheS5rZWVwSWYgKFxceyBzb3J0Q29sdW1uTmFtZSB9IC0+IHNvcnRDb2x1bW5OYW1lIC89IG5ld1NvcnRDb2x1bW4pIHNvcnRDb2x1bW5zXG4gICAgaW5cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gbmV3U29ydFN0YXRlLCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfVxuXG5cbnstfCAtfVxudXBkYXRlUGFnZVNpemUgOiBJbnQgLT4gU3RhdGUgLT4gU3RhdGVcbnVwZGF0ZVBhZ2VTaXplIG1pbmltdW1OZXdQYWdlU2l6ZSAoU3RhdGUgeyBzb3J0Q29sdW1ucywgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIGxldFxuICAgICAgICBuZXh0SGlnaGVySW5MaXN0IDogSW50IC0+IEFycmF5IEludCAtPiBJbnRcbiAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBpbnB1dCBsaXN0ID1cbiAgICAgICAgICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgPHwgQXJyYXkua2VlcElmIChcXHggLT4geCA+PSBpbnB1dCkgPHwgQXJyYXkuc29ydCBsaXN0IGlzXG4gICAgICAgICAgICAgICAgSnVzdCB4IC0+XG4gICAgICAgICAgICAgICAgICAgIC5maXJzdCB4XG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcblxuICAgICAgICBuZXdQYWdlU2l6ZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBsaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIG5leHRIaWdoZXJJbkxpc3QgbWluaW11bU5ld1BhZ2VTaXplIGxpc3RcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIGxpc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgbmV4dEhpZ2hlckluTGlzdCBtaW5pbXVtTmV3UGFnZVNpemUgbGlzdFxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICBpblxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBuZXdQYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG57LXwgLX1cbnVwZGF0ZUFjdGl2ZVJvd0lkIDogU3RyaW5nIC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVBY3RpdmVSb3dJZCBuZXdBY3RpdmVSb3dJZCAoU3RhdGUgeyBzb3J0Q29sdW1ucywgcGFnZVNpemUsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIFN0YXRlIHsgc29ydENvbHVtbnMgPSBzb3J0Q29sdW1ucywgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBuZXdBY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG5cbi0tIENPTkZJR1xuXG5cbnstfCBDb25maWd1cmF0aW9uIGZvciB5b3VyIHRhYmxlLCBkZXNjcmliaW5nIHlvdXIgY29sdW1ucy5cblxuKipOb3RlOioqIFlvdXIgYENvbmZpZ2Agc2hvdWxkIF9uZXZlcl8gYmUgaGVsZCBpbiB5b3VyIG1vZGVsLlxuSXQgc2hvdWxkIG9ubHkgYXBwZWFyIGluIGB2aWV3YCBjb2RlLlxuXG4tfVxudHlwZSBDb25maWcgZGF0YSBtc2dcbiAgICA9IENvbmZpZ1xuICAgICAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICAgICAsIHRvTXNnIDogU3RhdGUgLT4gbXNnXG4gICAgICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKVxuICAgICAgICAsIGN1c3RvbWl6YXRpb25zIDogQ3VzdG9taXphdGlvbnMgZGF0YSBtc2dcbiAgICAgICAgfVxuXG5cbnstfCBDcmVhdGUgdGhlIGBDb25maWdgIGZvciB5b3VyIGB2aWV3YCBmdW5jdGlvbi4gRXZlcnl0aGluZyB5b3UgbmVlZCB0b1xucmVuZGVyIHlvdXIgY29sdW1ucyBlZmZpY2llbnRseSBhbmQgaGFuZGxlIHNlbGVjdGlvbiBvZiBjb2x1bW5zLlxuXG5TYXkgd2UgaGF2ZSBhbiBgQXJyYXkgUGVyc29uYCwgd2hlcmUgUGVyc29uIGlzIGEgdHlwZSBhbGlhcyBmb3JcbmB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgb3RoZXI6IEZsb2F0IH1gIHRoYXQgd2Ugd2FudCB0byBzaG93IGFzIGEgdGFibGUuXG5Zb3Ugd2FudCB0byBzaG93IGEgY29sdW1uIGZvciBuYW1lIGFuZCBhZ2UsIGlnbm9yaW5nIHRoZSBvdGhlciB2YWx1ZS4gWW91IHdvdWxkXG50aGVuIGNyZWF0ZSBhIGBDb25maWdgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBEYXRhVGFibGVcblxuICAgIHR5cGUgTXNnID0gTmV3VGFibGVTdGF0ZSBEYXRhVGFibGUuU3RhdGUgfCAuLi5cblxuICAgIGNvbmZpZyA6IERhdGFUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuICAgIGNvbmZpZyA9XG4gICAgICBEYXRhVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBOZXdUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIERhdGFUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgRGF0YVRhYmxlLmludENvbHVtbiBcIkFnZVwiIC5hZ2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5Zb3UgcHJvdmlkZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHlvdXIgdGFibGUgY29uZmlndXJhdGlvbjpcblxuICAtIGB0b0lkYCAmbWRhc2g7IHR1cm5zIGEgYFBlcnNvbmAgaW50byBhIHVuaXF1ZSBJRCBvZiB0eXBlIFN0cmluZy5cbiAgICBUaGlzIGxldHMgdXMgdXNlXG4gICAgW2BIdG1sLktleWVkYF1ba2V5ZWRdIHVuZGVyIHRoZSBob29kIHRvIG1ha2UgcmUtc29ydHMgZmFzdGVyLlxuICAtIGB0b01zZ2AgJm1kYXNoOyB0aGUgbWVzc2FnZSB0aHJvdWdoIHdoaWNoIHRoZSBEYXRhVGFibGUgY2FuIHNlbmRcbiAgICB1cGRhdGVkIGludGVybmFsIHRhYmxlIHN0YXRlcyB0byB5b3VyIGFwcCdzIG1vZGVsLlxuICAtIGBjb2x1bW5zYCAmbWRhc2g7IHNwZWNpZnkgc29tZSBjb2x1bW5zIHRvIHNob3cuXG5cbltrZXllZF06IGh0dHBzOi8vcGFja2FnZXMuZ3Jlbi1sYW5nLm9yZy9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL3ZlcnNpb24vbGF0ZXN0L21vZHVsZS9IdG1sLktleWVkXG5cbi19XG5jb25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMgfSA9XG4gICAgQ29uZmlnXG4gICAgICAgIHsgdG9JZCA9IHRvSWRcbiAgICAgICAgLCB0b01zZyA9IHRvTXNnXG4gICAgICAgICwgY29sdW1ucyA9IEFycmF5Lm1hcCAoXFwoQ29sdW1uIGNEYXRhKSAtPiBjRGF0YSkgY29sdW1uc1xuICAgICAgICAsIGN1c3RvbWl6YXRpb25zID0gZGVmYXVsdEN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgSnVzdCBsaWtlIGBjb25maWdgIGJ1dCB5b3UgY2FuIHNwZWNpZnkgYSBidW5jaCBvZiB0YWJsZSBjdXN0b21pemF0aW9ucy5cbi19XG5jdXN0b21Db25maWcgOlxuICAgIHsgdG9JZCA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICwgY29sdW1ucyA6IEFycmF5IChDb2x1bW4gZGF0YSBtc2cpXG4gICAgLCBjdXN0b21pemF0aW9ucyA6IEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnXG4gICAgfVxuICAgIC0+IENvbmZpZyBkYXRhIG1zZ1xuY3VzdG9tQ29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMsIGN1c3RvbWl6YXRpb25zIH0gPVxuICAgIENvbmZpZ1xuICAgICAgICB7IHRvSWQgPSB0b0lkXG4gICAgICAgICwgdG9Nc2cgPSB0b01zZ1xuICAgICAgICAsIGNvbHVtbnMgPSBBcnJheS5tYXAgKFxcKENvbHVtbiBjRGF0YSkgLT4gY0RhdGEpIGNvbHVtbnNcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA9IGN1c3RvbWl6YXRpb25zXG4gICAgICAgIH1cblxuXG57LXwgVGhlcmUgYXJlIHF1aXRlIGEgbG90IG9mIHdheXMgdG8gY3VzdG9taXplIHRoZSBgPHRhYmxlPmAgdGFnLiBZb3UgY2FuIGFkZFxuYSBgPGNhcHRpb24+YCB3aGljaCBjYW4gYmUgc3R5bGVkIHZpYSBDU1MuIFlvdSBjYW4gZG8gY3Jhenkgc3R1ZmYgd2l0aFxuYDx0aGVhZD5gIHRvIGdyb3VwIGNvbHVtbnMgaW4gd2VpcmQgd2F5cy4gWW91IGNhbiBoYXZlIGEgYDx0Zm9vdD5gIHRhZyBmb3JcbnN1bW1hcmllcyBvZiB2YXJpb3VzIGNvbHVtbnMuIEFuZCBtYXliZSB5b3Ugd2FudCB0byBwdXQgYXR0cmlidXRlcyBvbiBgPHRib2R5PmBcbm9yIG9uIHBhcnRpY3VsYXIgcm93cyBpbiB0aGUgYm9keS4gQWxsIHRoZXNlIGN1c3RvbWl6YXRpb25zIGFyZSBhdmFpbGFibGUgdG8geW91LlxuXG4qKk5vdGU6KiogVGhlIGxldmVsIG9mIGNyYXppbmVzcyBwb3NzaWJsZSBpbiBgPHRoZWFkPmAgYW5kIGA8dGZvb3Q+YCBhcmUgc29cbmhpZ2ggdGhhdCBJIGNvdWxkIG5vdCBzZWUgaG93IHRvIHByb3ZpZGUgdGhlIGZ1bGwgZnVuY3Rpb25hbGl0eSBfYW5kXyBtYWtlIGl0XG5pbXBvc3NpYmxlIHRvIGRvIGJhZCBzdHVmZi4gU28ganVzdCBiZSBhd2FyZSBvZiB0aGF0LCBhbmQgc2hhcmUgYW55IHN0b3JpZXNcbnlvdSBoYXZlLiBTdG9yaWVzIG1ha2UgaXQgcG9zc2libGUgdG8gZGVzaWduIGJldHRlciFcblxuLX1cbnR5cGUgYWxpYXMgQ3VzdG9taXphdGlvbnMgZGF0YSBtc2cgPVxuICAgIHsgYmVmb3JlQW5kQWZ0ZXJUYWJsZSA6IHsgYmVmb3JlIDogTWF5YmUgKEh0bWwgbXNnKSwgYWZ0ZXIgOiBNYXliZSAoSHRtbCBtc2cpIH1cbiAgICAsIHRhYmxlQXR0cnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNhcHRpb24gOiBNYXliZSAoSHRtbERldGFpbHMgbXNnKVxuICAgICwgY29sZ3JvdXAgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IE1heWJlIChIdG1sRGV0YWlscyBtc2cpXG4gICAgLCB0aGVhZCA6IEFycmF5IChIZWFkZXJJbmZvIG1zZykgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCB0Ym9keUF0dHJzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCByb3dBdHRycyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIHRmb290IDogTWF5YmUgKEh0bWxEZXRhaWxzIG1zZylcbiAgICB9XG5cblxuey18IFNvbWV0aW1lcyB5b3UgbXVzdCB1c2UgYSBgPHRkPmAgdGFnLCBidXQgdGhlIGF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIGFyZSB1cFxudG8geW91LiBUaGlzIHR5cGUgbGV0cyB5b3Ugc3BlY2lmeSBhbGwgdGhlIGRldGFpbHMgb2YgYW4gSFRNTCBub2RlIGV4Y2VwdCB0aGVcbnRhZyBuYW1lLlxuLX1cbnR5cGUgYWxpYXMgSHRtbERldGFpbHMgbXNnID1cbiAgICB7IGF0dHJpYnV0ZXMgOiBBcnJheSAoQXR0cmlidXRlIG1zZylcbiAgICAsIGNoaWxkcmVuIDogQXJyYXkgKEh0bWwgbXNnKVxuICAgIH1cblxuXG57LXwgVGhlIGN1c3RvbWl6YXRpb25zIHVzZWQgaW4gYGNvbmZpZ2AgYnkgZGVmYXVsdC5cbi19XG5kZWZhdWx0Q3VzdG9taXphdGlvbnMgOiBDdXN0b21pemF0aW9ucyBkYXRhIG1zZ1xuZGVmYXVsdEN1c3RvbWl6YXRpb25zID1cbiAgICB7IGJlZm9yZUFuZEFmdGVyVGFibGUgPSB7IGJlZm9yZSA9IE5vdGhpbmcsIGFmdGVyID0gTm90aGluZyB9XG4gICAgLCB0YWJsZUF0dHJzID0gWyBBLmNsYXNzIFwiZGF0YVRhYmxlXCIgXVxuICAgICwgY2FwdGlvbiA9IE5vdGhpbmdcbiAgICAsIGNvbGdyb3VwID0gXFxfIC0+IE5vdGhpbmdcbiAgICAsIHRoZWFkID0gZGVmYXVsdFRhYmxlSGVhZGVyXG4gICAgLCB0Ym9keUF0dHJzID0gW11cbiAgICAsIHJvd0F0dHJzID0gc2ltcGxlUm93QXR0cnNcbiAgICAsIHRmb290ID0gTm90aGluZ1xuICAgIH1cblxuXG5kZWZhdWx0VGFibGVIZWFkZXIgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IEh0bWxEZXRhaWxzIG1zZ1xuZGVmYXVsdFRhYmxlSGVhZGVyIGhlYWRlckluZm9zID1cbiAgICBsZXRcbiAgICAgICAgZGVmYXVsdFRIIDogSGVhZGVySW5mbyBtc2cgLT4gSHRtbCBtc2dcbiAgICAgICAgZGVmYXVsdFRIIHsgbmFtZSwgc2VsZWN0ZWQsIHNvcnREaXJlY3Rpb25zLCBjbGlja0FjdGlvbnMgfSA9XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICBzb3J0U2VxdWVuY2VOdW1iZXIgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydFJhbmsgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHNvcnRSYW5rID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEh0bWwuc3VwIFsgQS5zdHlsZSBcIm9wYWNpdHlcIiBcIjAuNFwiIF0gWyBIdG1sLnRleHQgPHwgU3RyaW5nLmZyb21JbnQgc29ydFJhbmsgXSBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgY29sdW1uVGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW4gWyBBLmNsYXNzIFwiZHQtY29sdW1uLXRpdGxlXCIgXSBbIEh0bWwudGV4dCBuYW1lIF1cblxuICAgICAgICAgICAgICAgIGNvbHVtbk9yZGVyID1cbiAgICAgICAgICAgICAgICAgICAgaWYgQXJyYXkubGVuZ3RoIHNvcnREaXJlY3Rpb25zID4gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0IFsgeyBjbGFzcyA9IFwiZHQtY29sdW1uLW9yZGVyXCIsIGVuYWJsZWQgPSBUcnVlIH0gXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQXJpYS5sYWJlbCA8fCBcIkNsaWNrIGhlcmUgdG8gc29ydCBieSB0aGlzIGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLmF0dHJpYnV0ZSBcInJvbGVcIiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLnRhYmluZGV4IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFNlcXVlbmNlTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgSHRtbC50ZXh0IFwiXCJcblxuICAgICAgICAgICAgICAgIGNhbkJlU29ydGVkIDogU29ydERpcmVjdGlvbiAtPiBCb29sXG4gICAgICAgICAgICAgICAgY2FuQmVTb3J0ZWQgc29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIEFycmF5Lm1lbWJlciBzb3J0RGlyZWN0aW9uIHNvcnREaXJlY3Rpb25zXG5cbiAgICAgICAgICAgICAgICBpc1NvcnRlZCA6IFNvcnREaXJlY3Rpb24gLT4gQm9vbFxuICAgICAgICAgICAgICAgIGlzU29ydGVkIHZpZXdlZFNvcnREaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkU29ydERpcmVjdGlvbiA9PSBzb3J0RGlyZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWxzZVxuXG4gICAgICAgICAgICAgICAgYXJpYVNvcnQgPVxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBBcmlhLnNvcnQgPHwgc29ydERpcmVjdGlvblRvU3RyaW5nIHNvcnREaXJlY3Rpb24gXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW11cblxuICAgICAgICAgICAgICAgIHJvd0FuZENvbFNwYW4gPVxuICAgICAgICAgICAgICAgICAgICBbIEEucm93c3BhbiAxLCBBLmNvbHNwYW4gMSBdXG5cbiAgICAgICAgICAgICAgICB0aENsYXNzZXMgPVxuICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgY2xhc3MgPSBcImR0LW9yZGVyYWJsZS1hc2NcIiwgZW5hYmxlZCA9IGNhbkJlU29ydGVkIEFzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyYWJsZS1kZXNjXCIsIGVuYWJsZWQgPSBjYW5CZVNvcnRlZCBEZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJpbmctYXNjXCIsIGVuYWJsZWQgPSBpc1NvcnRlZCBBc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1kZXNjXCIsIGVuYWJsZWQgPSBpc1NvcnRlZCBEZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJpbmctbm9uZVwiLCBlbmFibGVkID0gbm90IChpc1NvcnRlZCBBc2MpICYmIG5vdCAoaXNTb3J0ZWQgRGVzYykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICB0aEF0dHJpYnV0ZXMgPVxuICAgICAgICAgICAgICAgICAgICBjbGlja0FjdGlvbnMgKysgYXJpYVNvcnQgKysgcm93QW5kQ29sU3BhbiArKyB0aENsYXNzZXNcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBIdG1sLnRoIHRoQXR0cmlidXRlcyBbIEh0bWwuZGl2IFsgQS5jbGFzcyBcImR0LWNvbHVtbi1oZWFkZXJcIiBdIFsgY29sdW1uVGl0bGUsIGNvbHVtbk9yZGVyIF0gXVxuICAgIGluXG4gICAgeyBhdHRyaWJ1dGVzID0gW10sIGNoaWxkcmVuID0gWyBIdG1sLnRyIFtdIDx8IEFycmF5Lm1hcCBkZWZhdWx0VEggaGVhZGVySW5mb3MgXSB9XG5cblxuc2ltcGxlUm93QXR0cnMgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG5zaW1wbGVSb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEgPVxuICAgIGxldFxuICAgICAgICBpc19jdXJyZW50X3JvdyA9XG4gICAgICAgICAgICBpZiB0b0lkIGRhdGEgPT0gZ2V0QWN0aXZlUm93SWQgc3RhdGUgdGhlblxuICAgICAgICAgICAgICAgIFRydWVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIEZhbHNlXG4gICAgaW5cbiAgICBpZiBpc19jdXJyZW50X3JvdyB0aGVuXG4gICAgICAgIFsgQS5zdHlsZSBcImJhY2tncm91bmRcIiBcIiNDRUZBRjhcIiBdXG5cbiAgICBlbHNlXG4gICAgICAgIFsgRS5vbkNsaWNrIDx8IHRvTXNnIDx8IHVwZGF0ZUFjdGl2ZVJvd0lkICh0b0lkIGRhdGEpIHN0YXRlIF1cblxuXG5cbi0tIENPTFVNTlNcblxuXG57LXwgRGVzY3JpYmVzIGhvdyB0byB0dXJuIGBkYXRhYCBpbnRvIGEgY29sdW1uIGluIHlvdXIgdGFibGUuXG4tfVxudHlwZSBDb2x1bW4gZGF0YSBtc2dcbiAgICA9IENvbHVtbiAoQ29sdW1uRGF0YSBkYXRhIG1zZylcblxuXG50eXBlIGFsaWFzIENvbHVtbkRhdGEgZGF0YSBtc2cgPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG5cblxuY29sdW1uRGF0YSBuYW1lIHZpZXdEYXRhIHNvcnRlciA9XG4gICAgeyBuYW1lID0gbmFtZVxuICAgICwgdmlld0RhdGEgPSB2aWV3RGF0YVxuICAgICwgc29ydGVyID0gc29ydGVyXG4gICAgfVxuXG5cbnR5cGUgYWxpYXMgQ29sdW1uSGVhZGVyIGRhdGEgPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG5cblxudG9IZWFkZXIgOiBDb2x1bW5EYXRhIGRhdGEgbXNnIC0+IENvbHVtbkhlYWRlciBkYXRhXG50b0hlYWRlciB7IG5hbWUsIHNvcnRlciB9ID1cbiAgICB7IG5hbWUgPSBuYW1lLCBzb3J0ZXIgPSBzb3J0ZXIgfVxuXG5cbnstfCAtfVxuc3RyaW5nQ29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IFN0cmluZykgLT4gQ29sdW1uIGRhdGEgbXNnXG5zdHJpbmdDb2x1bW4gbmFtZSB0b1N0ciA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IHRvU3RyXG4gICAgICAgICwgc29ydGVyID0gaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvU3RyXG4gICAgICAgIH1cblxuXG57LXwgLX1cbmludENvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBJbnQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuaW50Q29sdW1uIG5hbWUgdG9JbnQgPVxuICAgIENvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0ZXh0RGV0YWlscyA8PCBTdHJpbmcuZnJvbUludCA8PCB0b0ludFxuICAgICAgICAsIHNvcnRlciA9IGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0ludFxuICAgICAgICB9XG5cblxuey18IC19XG5mbG9hdENvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBGbG9hdCkgLT4gQ29sdW1uIGRhdGEgbXNnXG5mbG9hdENvbHVtbiBuYW1lIHRvRmxvYXQgPVxuICAgIENvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0ZXh0RGV0YWlscyA8PCBTdHJpbmcuZnJvbUZsb2F0IDw8IHRvRmxvYXRcbiAgICAgICAgLCBzb3J0ZXIgPSBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9GbG9hdFxuICAgICAgICB9XG5cblxuey18IFlvdSBtYXkgbm90IGZpbmQgdGhlIGhlbHBlciBmdW5jdGlvbnMgZm9yIGBTdHJpbmdgLCBgSW50YCBhbmQgYEZsb2F0YCB0byBiZSBmbGV4aWJsZVxuICAgIGVub3VnaCBmb3IgeW91ciBuZWVkcy4gWW91IG1heSBkZWZpbmUgeW91ciBvd24gY29sdW1uIGNvbmZpZ3VyYXRpb24gd2l0aCB0aGlzIGZ1bmN0aW9uLFxuICAgIGJ5IHByb3ZpZGluZyBvcHRpb25hbGx5IGRpc3RpbmN0IGNvbHVtbiBoZWFkZXIgbmFtZSBhbmQgY29sdW1uIGlkIGZ1bmN0aW9ucywgb3B0aW9uYWxseSBkaXN0aW5jdCBkaXNwbGF5LCBmaWx0ZXIgYW5kIHNvcnQgcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGFuZCBhbiBBcnJheSBvZiBgU29ydERpcmVjdGlvbmBzLlxuXG5cbi19XG5jb2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdG9TdHJpbmcgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgc29ydERpcmVjdGlvbnMgOiBaZXJvT25lT3JUd28gU29ydERpcmVjdGlvblxuICAgIH1cbiAgICAtPiBDb2x1bW4gZGF0YSBtc2dcbmNvbHVtbiB7IG5hbWUsIHRvU3RyaW5nLCBzb3J0RGlyZWN0aW9ucyB9ID1cbiAgICBjdXN0b21Db2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIGlkID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdG9TdHJpbmdcbiAgICAgICAgLCBmaWx0ZXJEYXRhID0gdG9TdHJpbmdcbiAgICAgICAgLCBzb3J0RGF0YSA9IHRvU3RyaW5nXG4gICAgICAgICwgc29ydERpcmVjdGlvbnMgPSBzb3J0RGlyZWN0aW9uc1xuICAgICAgICB9XG5cblxudGV4dERldGFpbHMgOiBTdHJpbmcgLT4gSHRtbERldGFpbHMgbXNnXG50ZXh0RGV0YWlscyBzdHIgPVxuICAgIHsgYXR0cmlidXRlcyA9IFtdLCBjaGlsZHJlbiA9IFsgSHRtbC50ZXh0IHN0ciBdIH1cblxuXG50eXBlIFplcm9PbmVPclR3byBhXG4gICAgPSBaZXJvXG4gICAgfCBPbmUgYVxuICAgIHwgVHdvIGFcblxuXG5nZXRTb3J0ZXIgOiBaZXJvT25lT3JUd28gU29ydERpcmVjdGlvbiAtPiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZ2V0U29ydGVyIHNvcnREaXJlY3Rpb25zIHRvQ29tcGFyYWJsZSA9XG4gICAgd2hlbiBzb3J0RGlyZWN0aW9ucyBpc1xuICAgICAgICBUd28gQXNjIC0+XG4gICAgICAgICAgICBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgVHdvIERlc2MgLT5cbiAgICAgICAgICAgIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBPbmUgQXNjIC0+XG4gICAgICAgICAgICBpbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlXG5cbiAgICAgICAgT25lIERlc2MgLT5cbiAgICAgICAgICAgIGRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBaZXJvIC0+XG4gICAgICAgICAgICB1bnNvcnRhYmxlXG5cblxuey18IFBlcmhhcHMgdGhlIGJhc2ljIGNvbHVtbnMgYXJlIG5vdCBxdWl0ZSB3aGF0IHlvdSB3YW50LiBNYXliZSB5b3Ugd2FudCB0b1xuZGlzcGxheSBtb25ldGFyeSB2YWx1ZXMgaW4gdGhvdXNhbmRzIG9mIGRvbGxhcnMsIGFuZCBgZmxvYXRDb2x1bW5gIGRvZXMgbm90XG5xdWl0ZSBjdXQgaXQuIFlvdSBjb3VsZCBkZWZpbmUgYSBjdXN0b20gY29sdW1uIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBUYWJsZVxuXG4gICAgZG9sbGFyQ29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEZsb2F0KSAtPiBDb2x1bW4gZGF0YSBtc2dcbiAgICBkb2xsYXJDb2x1bW4gbmFtZSB0b0RvbGxhcnMgPVxuICAgICAgICBUYWJsZS5jdXN0b21Db2x1bW5cbiAgICAgICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICwgdmlld0RhdGEgPSBcXGRhdGEgLT4gdmlld0RvbGxhcnMgKHRvRG9sbGFycyBkYXRhKVxuICAgICAgICAgICAgLCBzb3J0ZXIgPSBUYWJsZS5kZWNyZWFzaW5nQnkgdG9Eb2xsYXJzXG4gICAgICAgICAgICB9XG5cbiAgICB2aWV3RG9sbGFycyA6IEZsb2F0IC0+IFN0cmluZ1xuICAgIHZpZXdEb2xsYXJzIGRvbGxhcnMgPVxuICAgICAgICBcIiRcIiArKyBTdHJpbmcuZnJvbUludCAocm91bmQgKGRvbGxhcnMgLyAxMDAwKSkgKysgXCJrXCJcblxuVGhlIGB2aWV3RGF0YWAgZmllbGQgbWVhbnMgd2Ugd2lsbCBkaXNwbGF5cyB0aGUgbnVtYmVyIGAxMjM0NS42N2AgYXMgYCQxMmtgLlxuXG5UaGUgYHNvcnRlcmAgZmllbGQgc3BlY2lmaWVzIGhvdyB0aGUgY29sdW1uIGNhbiBiZSBzb3J0ZWQuIEluIGBkb2xsYXJDb2x1bW5gIHdlXG5hcmUgc2F5aW5nIHRoYXQgaXQgY2FuIF9vbmx5XyBiZSBzaG93biBmcm9tIGhpZ2hlc3QtdG8tbG93ZXN0IG1vbmV0YXJ5IHZhbHVlLlxuTW9yZSBhYm91dCBzb3J0ZXJzIHNvb24hXG5cbi19XG5jdXN0b21Db2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgaWQgOiBTdHJpbmdcbiAgICAsIHZpZXdEYXRhIDogZGF0YSAtPiBTdHJpbmdcbiAgICAsIGZpbHRlckRhdGEgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgc29ydERhdGEgOiBkYXRhIC0+IGNvbXBhcmFibGVcbiAgICAsIHNvcnREaXJlY3Rpb25zIDogWmVyb09uZU9yVHdvIFNvcnREaXJlY3Rpb25cbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG5jdXN0b21Db2x1bW4geyBuYW1lLCBpZCwgdmlld0RhdGEsIGZpbHRlckRhdGEsIHNvcnREYXRhLCBzb3J0RGlyZWN0aW9ucyB9ID1cbiAgICBDb2x1bW4gPHxcbiAgICAgICAgY29sdW1uRGF0YSBuYW1lICh0ZXh0RGV0YWlscyA8PCB2aWV3RGF0YSkgPHxcbiAgICAgICAgICAgIGdldFNvcnRlciBzb3J0RGlyZWN0aW9ucyBzb3J0RGF0YVxuXG5cbnstfCBJdCBpcyBfcG9zc2libGVfIHRoYXQgeW91IHdhbnQgc29tZXRoaW5nIGNyYXppZXIgdGhhbiBgY3VzdG9tQ29sdW1uYC4gSW5cbnRoYXQgdW5saWtlbHkgc2NlbmFyaW8sIHRoaXMgZnVuY3Rpb24gbGV0cyB5b3UgaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGVcbmF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIG9mIGVhY2ggYDx0ZD5gIGNlbGwgaW4gdGhpcyBjb2x1bW4uXG5cblNvIG1heWJlIHlvdSB3YW50IHRvIGEgZG9sbGFycyBjb2x1bW4sIGFuZCB0aGUgZG9sbGFyIHNpZ25zIHNob3VsZCBiZSBncmVlbi5cblxuICAgIGltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwsIHNwYW4sIHRleHQpXG4gICAgaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoc3R5bGUpXG4gICAgaW1wb3J0IFRhYmxlXG5cbiAgICBkb2xsYXJDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuICAgIGRvbGxhckNvbHVtbiBuYW1lIHRvRG9sbGFycyA9XG4gICAgICAgIFRhYmxlLnZlcnlDdXN0b21Db2x1bW5cbiAgICAgICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICwgdmlld0RhdGEgPSBcXGRhdGEgLT4gdmlld0RvbGxhcnMgKHRvRG9sbGFycyBkYXRhKVxuICAgICAgICAgICAgLCBzb3J0ZXIgPSBUYWJsZS5kZWNyZWFzaW5nQnkgdG9Eb2xsYXJzXG4gICAgICAgICAgICB9XG5cbiAgICB2aWV3RG9sbGFycyA6IEZsb2F0IC0+IFRhYmxlLkh0bWxEZXRhaWxzIG1zZ1xuICAgIHZpZXdEb2xsYXJzIGRvbGxhcnMgPVxuICAgICAgICBUYWJsZS5IdG1sRGV0YWlscyBbXVxuICAgICAgICAgICAgWyBzcGFuIFsgc3R5bGUgXCJjb2xvclwiIFwiZ3JlZW5cIiBdIFsgdGV4dCBcIiRcIiBdXG4gICAgICAgICAgICAsIHRleHQgKFN0cmluZy5mcm9tSW50IChyb3VuZCAoZG9sbGFycyAvIDEwMDApKSArKyBcImtcIilcbiAgICAgICAgICAgIF1cblxuLX1cbnZlcnlDdXN0b21Db2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG52ZXJ5Q3VzdG9tQ29sdW1uID1cbiAgICBDb2x1bW5cblxuXG5cbi0tIFZJRVdcblxuXG57LXwgVGFrZSBhbiBhcnJheSBvZiBkYXRhIGFuZCB0dXJuIGl0IGludG8gYSB0YWJsZS4gVGhlIGBDb25maWdgIGFyZ3VtZW50IGlzIHRoZVxuY29uZmlndXJhdGlvbiBmb3IgdGhlIHRhYmxlLiBJdCBkZXNjcmliZXMgdGhlIGNvbHVtbnMgdGhhdCB3ZSB3YW50IHRvIHNob3cuIFRoZVxuYFN0YXRlYCBhcmd1bWVudCBjb250YWlucyB0aGUgY3VycmVudCBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgdGFibGUsIGluY2x1ZGluZyB3aGljaFxuY29sdW1uKHMpIHRoZSByb3dzIGFyZSBzb3J0ZWQgYnkgYXQgdGhlIG1vbWVudCwgb3Igd2hpY2ggcm93IGlzIGN1cnJlbnRseSBhY3RpdmUuXG5UaGUgYGRhdGFgIHR5cGUgd2lsbCB1c3VhbGx5IGJlIGEgcmVjb3JkLCBidXQgYW55IHZhbHVlIGlzIHBvc3NpYmxlLlxuXG4qKk5vdGU6KiogVGhlIGBTdGF0ZWAgYW5kIGBBcnJheSBkYXRhYCBzaG91bGQgbGl2ZSBpbiB5b3VyIGBNb2RlbGAuIFRoZSBgQ29uZmlnYFxuZm9yIHRoZSB0YWJsZSBiZWxvbmdzIChoYXJkLWNvZGVkKSBpbiB5b3VyIGB2aWV3YCBjb2RlLCBhcyBpdCBpcyBqdXN0IGEgY29sbGVjdGlvblxub2YgY3VzdG9taXphYmxlIHZpZXcgYW5kIGhlbHBlciBmdW5jdGlvbnMgYW5kIGl0IGlzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIG5vdCB0b1xucHV0IGFueSBmdW5jdGlvbnMgaW4geW91ciBtb2RlbC5cblxuLX1cbnZpZXcgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBIdG1sIG1zZ1xudmlldyAoKENvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zLCBjdXN0b21pemF0aW9ucyB9KSBhcyBjb25mKSBzdGF0ZSBkYXRhID1cbiAgICBsZXRcbiAgICAgICAgcm93cyA9XG4gICAgICAgICAgICBnZXRQYWdpbmF0ZWREYXRhIGNvbmYgc3RhdGUgPHwgZ2V0U29ydGVkRGF0YSBjb25mIHN0YXRlIGRhdGFcblxuICAgICAgICBoZWFkZXJzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcCB0b0hlYWRlciBjb2x1bW5zXG5cbiAgICAgICAgdGhlYWREZXRhaWxzID1cbiAgICAgICAgICAgIGN1c3RvbWl6YXRpb25zLnRoZWFkIDx8IEFycmF5Lm1hcCAodG9IZWFkZXJJbmZvIHN0YXRlIHRvTXNnKSBoZWFkZXJzXG5cbiAgICAgICAgdGhlYWQgPVxuICAgICAgICAgICAgSHRtbC50aGVhZCB0aGVhZERldGFpbHMuYXR0cmlidXRlcyB0aGVhZERldGFpbHMuY2hpbGRyZW5cblxuICAgICAgICB0Ym9keSA9XG4gICAgICAgICAgICBLZXllZC5ub2RlIFwidGJvZHlcIiBjdXN0b21pemF0aW9ucy50Ym9keUF0dHJzIDx8XG4gICAgICAgICAgICAgICAgQXJyYXkubWFwICh2aWV3Um93IHRvSWQgdG9Nc2cgY29sdW1ucyBjdXN0b21pemF0aW9ucy5yb3dBdHRycyBzdGF0ZSkgcm93c1xuXG4gICAgICAgIHdpdGhGb290ID1cbiAgICAgICAgICAgIHdoZW4gY3VzdG9taXphdGlvbnMudGZvb3QgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIFsgdGJvZHkgXVxuXG4gICAgICAgICAgICAgICAgSnVzdCB7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgWyBIdG1sLnRmb290IGF0dHJpYnV0ZXMgY2hpbGRyZW4sIHRib2R5IF1cbiAgICBpblxuICAgIEh0bWwudGFibGUgY3VzdG9taXphdGlvbnMudGFibGVBdHRycyA8fFxuICAgICAgICAod2hlbiBjdXN0b21pemF0aW9ucy5jYXB0aW9uIGlzXG4gICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgWyB0aGVhZCBdICsrIHdpdGhGb290XG5cbiAgICAgICAgICAgIEp1c3QgeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9IC0+XG4gICAgICAgICAgICAgICAgWyBIdG1sLmNhcHRpb24gYXR0cmlidXRlcyBjaGlsZHJlbiBdICsrIFsgdGhlYWQgXSArKyB3aXRoRm9vdFxuICAgICAgICApXG5cblxudHlwZSBhbGlhcyBIZWFkZXJJbmZvIG1zZyA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCBzZWxlY3RlZCA6IE1heWJlIHsgc29ydFJhbmsgOiBJbnQsIHNvcnREaXJlY3Rpb24gOiBTb3J0RGlyZWN0aW9uIH1cbiAgICAsIHNvcnREaXJlY3Rpb25zIDogQXJyYXkgU29ydERpcmVjdGlvblxuICAgICwgY2xpY2tBY3Rpb25zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgfVxuXG5cbmhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBzb3J0RGlyZWN0aW9ucyBjbGlja0FjdGlvbnMgPVxuICAgIHsgbmFtZSA9IG5hbWVcbiAgICAsIHNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAsIHNvcnREaXJlY3Rpb25zID0gc29ydERpcmVjdGlvbnNcbiAgICAsIGNsaWNrQWN0aW9ucyA9IGNsaWNrQWN0aW9uc1xuICAgIH1cblxuXG50b0hlYWRlckluZm8gOiBTdGF0ZSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBDb2x1bW5IZWFkZXIgZGF0YSAtPiBIZWFkZXJJbmZvIG1zZ1xudG9IZWFkZXJJbmZvICgoU3RhdGUgeyBzb3J0Q29sdW1ucyB9KSBhcyBzdGF0ZSkgdG9Nc2cgeyBuYW1lLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIHJldmVyc2UgYSA9XG4gICAgICAgICAgICB3aGVuIGEgaXNcbiAgICAgICAgICAgICAgICBEZXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIEFzY1xuXG4gICAgICAgICAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICB3aGVuIHNvcnRDb2x1bW5zIGlzXG4gICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgbm9uRW1wdHlMaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlZExpc3QgOiBBcnJheSB7IGxlZnQgOiBJbnQsIHJpZ2h0IDogeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVkTGlzdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaW5kZXhlZE1hcCAoXFxpZHggdmFsIC0+IHsgbGVmdCA9IGlkeCwgcmlnaHQgPSB2YWwgfSkgPHwgQXJyYXkucmV2ZXJzZSBub25FbXB0eUxpc3RcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5rZWVwSWYgKFxceyByaWdodCA9IHsgc29ydENvbHVtbk5hbWUgfSB9IC0+IG5hbWUgPT0gc29ydENvbHVtbk5hbWUpIGluZGV4ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIGluXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gQXJyYXkudGFrZUZpcnN0IDEgZmlsdGVyZWRMaXN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgbGVmdCA9IGluZGV4LCByaWdodCA9IHsgc29ydERpcmVjdGlvbiB9IH0gXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIHNvcnRSYW5rID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIEFycmF5Lmxlbmd0aCBpbmRleGVkTGlzdCA9PSAxIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIHJldmVyc2VkU29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICB3aGVuIHNlbGVjdGVkIGlzXG4gICAgICAgICAgICAgICAgSnVzdCB7IHNvcnREaXJlY3Rpb24gfSAtPlxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlIHNvcnREaXJlY3Rpb25cblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIERlY09ySW5jIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2NcbiAgICBpblxuICAgIHdoZW4gc29ydGVyIGlzXG4gICAgICAgIE5vbmUgLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBOb3RoaW5nIFtdIFtdXG5cbiAgICAgICAgUm93TnVtYmVyIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgTm90aGluZyBbXSBbXVxuXG4gICAgICAgIEluY3JlYXNpbmcgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgQXNjIF0gPHwgb25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSBBc2MgdG9Nc2dcblxuICAgICAgICBEZWNyZWFzaW5nIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIERlc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIERlc2MgdG9Nc2dcblxuICAgICAgICBJbmNPckRlYyBfIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgWyBBc2MsIERlc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIHJldmVyc2VkU29ydERpcmVjdGlvbiB0b01zZ1xuXG4gICAgICAgIERlY09ySW5jIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIERlc2MsIEFzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uIHRvTXNnXG5cblxub25Db2x1bW5IZWFkZXIgOiBTdGF0ZSAtPiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiAoU3RhdGUgLT4gbXNnKSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbm9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgc29ydERpcmVjdGlvbiB0b01zZyA9XG4gICAgWyBFLm9uQ2xpY2sgPHxcbiAgICAgICAgdG9Nc2cgPHxcbiAgICAgICAgICAgIHVwZGF0ZVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICAsIEUub25Nb3VzZVVwIDx8XG4gICAgICAgIHRvTXNnIDx8XG4gICAgICAgICAgICB1cGRhdGVNdWx0aVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICAsIEEudGl0bGUgPHxcbiAgICAgICAgXCJDbGljayB0byBzb3J0IGJ5IHRoaXMgY29sdW1uLlxcblwiXG4gICAgICAgICAgICArKyBcIkNsaWNrIGVsc2V3aGVyZSBhbmQgcmVsZWFzZSBoZXJlXFxuXCJcbiAgICAgICAgICAgICsrIFwidG8gYWRkIHRoaXMgY29sdW1uIHRvIHRoZSBzb3J0IG9yZGVyLlwiXG4gICAgXVxuXG5cbnZpZXdSb3cgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiAoKGRhdGEgLT4gU3RyaW5nKSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSkgLT4gU3RhdGUgLT4gZGF0YSAtPiB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH1cbnZpZXdSb3cgdG9JZCB0b01zZyBjb2x1bW5zIHRvUm93QXR0cnMgc3RhdGUgZGF0YSA9XG4gICAgeyBrZXkgPSB0b0lkIGRhdGFcbiAgICAsIG5vZGUgPSB2aWV3Um93SGVscCBjb2x1bW5zIHRvUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhXG4gICAgfVxuXG5cbnZpZXdSb3dIZWxwIDogQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+ICgoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpKSAtPiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gSHRtbCBtc2dcbnZpZXdSb3dIZWxwIGNvbHVtbnMgdG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEgPVxuICAgIEh0bWwudHIgKHRvUm93QXR0cnMgdG9JZCB0b01zZyBzdGF0ZSBkYXRhKSA8fFxuICAgICAgICBBcnJheS5tYXAgKHZpZXdDZWxsIGRhdGEpIGNvbHVtbnNcblxuXG52aWV3Q2VsbCA6IGRhdGEgLT4gQ29sdW1uRGF0YSBkYXRhIG1zZyAtPiBIdG1sIG1zZ1xudmlld0NlbGwgZGF0YSB7IHZpZXdEYXRhLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIGRldGFpbHMgPVxuICAgICAgICAgICAgdmlld0RhdGEgZGF0YVxuICAgIGluXG4gICAgSHRtbC50ZCBkZXRhaWxzLmF0dHJpYnV0ZXMgZGV0YWlscy5jaGlsZHJlblxuXG5cblxuLS0gU09SVElOR1xuXG5cbnNvcnQgOiBTdGF0ZSAtPiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5zb3J0IChTdGF0ZSB7IHNvcnRDb2x1bW5zLCBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgY0RhdGEgZGF0YSA9XG4gICAgd2hlbiBBcnJheS5wb3BGaXJzdCBzb3J0Q29sdW1ucyBpc1xuICAgICAgICBKdXN0IHsgZmlyc3QgPSB7IHNvcnRDb2x1bW5OYW1lLCBzb3J0RGlyZWN0aW9uIH0sIHJlc3QgPSByZXN0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gZmluZFNvcnRlciBzb3J0Q29sdW1uTmFtZSBjRGF0YSBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgICAgICAgICAgSnVzdCBzb3J0ZXIgLT5cbiAgICAgICAgICAgICAgICAgICAgc29ydCAoU3RhdGUgeyBzb3J0Q29sdW1ucyA9IHJlc3QsIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9KSBjRGF0YSA8fCBhcHBseVNvcnRlciBzb3J0RGlyZWN0aW9uIHNvcnRlciBkYXRhXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGF0YVxuXG5cbmFwcGx5U29ydGVyIDogU29ydERpcmVjdGlvbiAtPiBTb3J0ZXIgZGF0YSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbmFwcGx5U29ydGVyIHNvcnREaXJlY3Rpb24gc29ydGVyIGRhdGEgPVxuICAgIHdoZW4gc29ydGVyIGlzXG4gICAgICAgIE5vbmUgLT5cbiAgICAgICAgICAgIGRhdGFcblxuICAgICAgICBSb3dOdW1iZXIgLT5cbiAgICAgICAgICAgIGRhdGFcblxuICAgICAgICBJbmNyZWFzaW5nIHNydCAtPlxuICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICBEZWNyZWFzaW5nIHNydCAtPlxuICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cbiAgICAgICAgSW5jT3JEZWMgc3J0IC0+XG4gICAgICAgICAgICBpZiBzb3J0RGlyZWN0aW9uID09IERlc2MgdGhlblxuICAgICAgICAgICAgICAgIEFycmF5LnJldmVyc2UgKHNydCBkYXRhKVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICBEZWNPckluYyBzcnQgLT5cbiAgICAgICAgICAgIGlmIHNvcnREaXJlY3Rpb24gPT0gRGVzYyB0aGVuXG4gICAgICAgICAgICAgICAgc3J0IGRhdGFcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIEFycmF5LnJldmVyc2UgKHNydCBkYXRhKVxuXG5cbmZpbmRTb3J0ZXIgOiBTdHJpbmcgLT4gQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+IE1heWJlIChTb3J0ZXIgZGF0YSlcbmZpbmRTb3J0ZXIgc2VsZWN0ZWRDb2x1bW4gY0RhdGEgPVxuICAgIHdoZW4gQXJyYXkucG9wRmlyc3QgY0RhdGEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgeyBmaXJzdCA9IHsgbmFtZSwgc29ydGVyIH0sIHJlc3QgfSAtPlxuICAgICAgICAgICAgaWYgbmFtZSA9PSBzZWxlY3RlZENvbHVtbiB0aGVuXG4gICAgICAgICAgICAgICAgSnVzdCBzb3J0ZXJcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGZpbmRTb3J0ZXIgc2VsZWN0ZWRDb2x1bW4gcmVzdFxuXG5cbnstfCBSZXR1cm4gdGhlIGRhdGEgc29ydGVkIGV4YWN0bHkgYXMgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbi5cbi19XG5nZXRTb3J0ZWREYXRhIDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuZ2V0U29ydGVkRGF0YSAoQ29uZmlnIHsgY29sdW1ucyB9KSBzdGF0ZSBkYXRhID1cbiAgICBzb3J0IHN0YXRlIGNvbHVtbnMgZGF0YVxuXG5cblxuLS0gU09SVEVSU1xuXG5cbnstfCBTcGVjaWZpZXMgYSBwYXJ0aWN1bGFyIHdheSBvZiBzb3J0aW5nIGRhdGEuXG4tfVxudHlwZSBTb3J0ZXIgZGF0YVxuICAgID0gTm9uZVxuICAgIHwgUm93TnVtYmVyXG4gICAgfCBJbmNyZWFzaW5nIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBEZWNyZWFzaW5nIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBJbmNPckRlYyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuICAgIHwgRGVjT3JJbmMgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcblxuXG57LXwgQSBzb3J0ZXIgZm9yIGNvbHVtbnMgdGhhdCBhcmUgdW5zb3J0YWJsZS4gTWF5YmUgeW91IGhhdmUgYSBjb2x1bW4gaW4geW91clxudGFibGUgZm9yIGRlbGV0ZSBidXR0b25zIHRoYXQgZGVsZXRlIHRoZSByb3cuIEl0IHdvdWxkIG5vdCBtYWtlIGFueSBzZW5zZSB0b1xuc29ydCBiYXNlZCBvbiB0aGF0IGNvbHVtbi5cbi19XG51bnNvcnRhYmxlIDogU29ydGVyIGRhdGFcbnVuc29ydGFibGUgPVxuICAgIE5vbmVcblxuXG57LXwgQ3JlYXRlIGEgc29ydGVyIHRoYXQgY2FuIG9ubHkgZGlzcGxheSB0aGUgZGF0YSBpbiBpbmNyZWFzaW5nIG9yZGVyLiBJZiB3ZVxud2FudCBhIHRhYmxlIG9mIHBlb3BsZSwgc29ydGVkIGFscGhhYmV0aWNhbGx5IGJ5IG5hbWUsIHdlIHdvdWxkIHNheSB0aGlzOlxuXG4gICAgc29ydGVyIDogU29ydGVyIHsgYSB8IG5hbWUgOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBpbmNyZWFzaW5nQnkgLm5hbWVcblxuLX1cbmluY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5pbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBJbmNyZWFzaW5nIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnstfCBDcmVhdGUgYSBzb3J0ZXIgdGhhdCBjYW4gb25seSBkaXNwbGF5IHRoZSBkYXRhIGluIGRlY3JlYXNpbmcgb3JkZXIuIElmIHdlXG53YW50IGEgdGFibGUgb2YgY291bnRyaWVzLCBzb3J0ZWQgYnkgcG9wdWxhdGlvbiBmcm9tIGhpZ2hlc3QgdG8gbG93ZXN0LCB3ZVxud291bGQgc2F5IHRoaXM6XG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgcG9wdWxhdGlvbiA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGRlY3JlYXNpbmdCeSAucG9wdWxhdGlvblxuXG4tfVxuZGVjcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIERlY3JlYXNpbmcgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IFNvbWV0aW1lcyB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHNvcnQgZGF0YSBpbiBpbmNyZWFzaW5nIF9vcl8gZGVjcmVhc2luZ1xub3JkZXIuIE1heWJlIHlvdSBoYXZlIGEgYnVuY2ggb2YgZGF0YSBhYm91dCBvcmFuZ2UganVpY2UsIGFuZCB5b3Ugd2FudCB0byBrbm93XG5ib3RoIHdoaWNoIGhhcyB0aGUgbW9zdCBzdWdhciwgYW5kIHdoaWNoIGhhcyB0aGUgbGVhc3Qgc3VnYXIuIEJvdGggaW50ZXJlc3RpbmchXG5UaGlzIGZ1bmN0aW9uIGxldHMgeW91IHNlZSBib3RoLCBzdGFydGluZyB3aXRoIGRlY3JlYXNpbmcgb3JkZXIuXG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgc3VnYXIgOiBjb21wYXJhYmxlIH1cbiAgICBzb3J0ZXIgPVxuICAgICAgICBkZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgLnN1Z2FyXG5cbi19XG5kZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgRGVjT3JJbmMgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IFNvbWV0aW1lcyB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHNvcnQgZGF0YSBpbiBpbmNyZWFzaW5nIF9vcl8gZGVjcmVhc2luZ1xub3JkZXIuIE1heWJlIHlvdSBoYXZlIHJhY2UgdGltZXMgZm9yIHRoZSAxMDAgbWV0ZXIgc3ByaW50LiBUaGlzIGZ1bmN0aW9uIGxldHNcbnNvcnQgYnkgYmVzdCB0aW1lIGJ5IGRlZmF1bHQsIGJ1dCBhbHNvIHNlZSB0aGUgb3RoZXIgb3JkZXIuXG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgdGltZSA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSAudGltZVxuXG4tfVxuaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIEluY09yRGVjIChBcnJheS5zb3J0QnkgdG9Db21wYXJhYmxlKVxuXG5cbnR5cGUgUGFnaW5hdGlvblN0eWxlXG4gICAgPSBOb1BhZ2luYXRpb25cbiAgICB8IFBhZ2VyIChBcnJheSBJbnQpXG4gICAgfCBTY3JvbGxlciAoQXJyYXkgSW50KVxuXG5cbnstfCAtfVxuc2V0Tm9QYWdpbmF0aW9uIDogU3RhdGUgLT4gU3RhdGVcbnNldE5vUGFnaW5hdGlvbiBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlIHsgY3VycmVudFN0YXRlIHwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvbiB9XG5cblxuey18IC19XG5zZXRTaW1wbGVQYWdpbmF0aW9uIDogU3RhdGUgLT4gU3RhdGVcbnNldFNpbXBsZVBhZ2luYXRpb24gc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZSB7IGN1cnJlbnRTdGF0ZSB8IHBhZ2luYXRpb24gPSBQYWdlciBbIDEwLCAyNSwgNTAsIDEwMCBdIH1cblxuXG57LXwgLX1cbnNldFBhZ2luYXRpb25XaXRoIDogSW50IC0+IEFycmF5IEludCAtPiBTdGF0ZSAtPiBTdGF0ZVxuc2V0UGFnaW5hdGlvbldpdGggZGVmYXVsdFBhZ2VTaXplIG90aGVyUGFnZVNpemVzIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGVcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICB8IHBhZ2luYXRpb24gPSBQYWdlciA8fCBBcnJheS5zb3J0IDx8IFsgZGVmYXVsdFBhZ2VTaXplIF0gKysgb3RoZXJQYWdlU2l6ZXNcbiAgICAgICAgICAgICAgICAgICAgLCBwYWdlU2l6ZSA9IGRlZmF1bHRQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIH1cblxuXG57LXwgLX1cbnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIDogSW50IC0+IEFycmF5IEludCAtPiBTdGF0ZSAtPiBTdGF0ZVxuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGggZGVmYXVsdFBhZ2VTaXplIG90aGVyUGFnZVNpemVzIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGVcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGF0ZVxuICAgICAgICAgICAgICAgICAgICB8IHBhZ2luYXRpb24gPSBTY3JvbGxlciA8fCBBcnJheS5zb3J0IDx8IFsgZGVmYXVsdFBhZ2VTaXplIF0gKysgb3RoZXJQYWdlU2l6ZXNcbiAgICAgICAgICAgICAgICAgICAgLCBwYWdlU2l6ZSA9IGRlZmF1bHRQYWdlU2l6ZVxuICAgICAgICAgICAgICAgIH1cblxuXG57LXwgLX1cbmdldFBhZ2luYXRlZERhdGEgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5nZXRQYWdpbmF0ZWREYXRhIChDb25maWcgeyB0b0lkIH0pIChTdGF0ZSB7IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiB9KSBkYXRhID1cbiAgICBsZXRcbiAgICAgICAgcm93Q3Vyc29yID1cbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB8PiBBcnJheS5maW5kRmlyc3QgKFxcdiAtPiB0b0lkIHYgPT0gYWN0aXZlUm93SWQpXG4gICAgICAgICAgICAgICAgfD4gTWF5YmUubWFwIC5pbmRleFxuICAgICAgICAgICAgICAgIHw+IE1heWJlLm1hcCAoXFxpIC0+IGkgKyAxKVxuICAgICAgICAgICAgICAgIHw+IE1heWJlLndpdGhEZWZhdWx0IDBcblxuICAgICAgICBwcmVjZWRpbmdGdWxsUGFnZXMgPVxuICAgICAgICAgICAgKHJvd0N1cnNvciAtIDEpIC8vIHBhZ2VTaXplXG5cbiAgICAgICAgbGFzdFJvd09uUGFnZSA9XG4gICAgICAgICAgICB3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgICAgICBQYWdlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcGFnZVNpemUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tIHBhZ2Ugc2l6ZSAwIG1lYW5zIHNob3cgYWxsIHJvd3Mgd2FzIGNob3NlbiBmcm9tIHBhZ2Ugc2l6ZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAwIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcmVjZWRpbmdGdWxsUGFnZXMgKyAxKSAqIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICBTY3JvbGxlciBfIC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIHBhZ2VTaXplID09IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkubGVuZ3RoIGRhdGFcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbXBhcmUgcm93Q3Vyc29yIChwYWdlU2l6ZSAvLyAyKSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciArIHBhZ2VTaXplIC8vIDJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgIGxhc3RSb3dCZWZvcmVQYWdlID1cbiAgICAgICAgICAgIHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgICAgIFBhZ2VyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgcHJlY2VkaW5nRnVsbFBhZ2VzICogcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgcGFnZVNpemUgPT0gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgLSAyXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBjb21wYXJlIHJvd0N1cnNvciA8fCBBcnJheS5sZW5ndGggZGF0YSAtIHBhZ2VTaXplIC8vIDIgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YSAtIHBhZ2VTaXplXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIGlzRXZlbiBwYWdlU2l6ZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgLSBwYWdlU2l6ZSAvLyAyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yIC0gcGFnZVNpemUgLy8gMiAtIDFcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgaW5cbiAgICBkYXRhXG4gICAgICAgIHw+IEFycmF5LnRha2VGaXJzdCAobmVnYXRpdmVUb1plcm8gbGFzdFJvd09uUGFnZSlcbiAgICAgICAgfD4gQXJyYXkuZHJvcEZpcnN0IChuZWdhdGl2ZVRvWmVybyBsYXN0Um93QmVmb3JlUGFnZSlcblxuXG57LXwgLX1cbnBhZ2VMZW5ndGhDaG9vc2VyIDogQ29uZmlnIGRhdGEgbXNnIC0+IFN0YXRlIC0+IEh0bWwgbXNnXG5wYWdlTGVuZ3RoQ2hvb3NlciAoQ29uZmlnIHsgdG9Nc2cgfSkgKChTdGF0ZSB7IHBhZ2luYXRpb24gfSkgYXMgdGFibGVTdGF0ZSkgPVxuICAgIGxldFxuICAgICAgICBvblBhZ2VTaXplQ2hvaWNlIDogU3RhdGUgLT4gSHRtbC5BdHRyaWJ1dGUgbXNnXG4gICAgICAgIG9uUGFnZVNpemVDaG9pY2Ugc3RhdGUgPVxuICAgICAgICAgICAgRS5vbiBcImNoYW5nZVwiIDx8XG4gICAgICAgICAgICAgICAgSnNvbi5EZWNvZGUubWFwIChcXG5ld1BhZ2VTaXplIC0+IHRvTXNnIDx8IHVwZGF0ZVBhZ2VTaXplIG5ld1BhZ2VTaXplIHN0YXRlKSA8fFxuICAgICAgICAgICAgICAgICAgICBKc29uLkRlY29kZS5tYXAgKE1heWJlLndpdGhEZWZhdWx0IDAgPDwgU3RyaW5nLnRvSW50KSA8fFxuICAgICAgICAgICAgICAgICAgICAgICAgRS50YXJnZXRWYWx1ZVxuXG4gICAgICAgIHZpZXdPcHRpb24gdmFsdWVzID1cbiAgICAgICAgICAgIEFycmF5LmZvbGRyXG4gICAgICAgICAgICAgICAgKFxcdmFsIGh0bWwgLT5cbiAgICAgICAgICAgICAgICAgICAgWyBIdG1sLm9wdGlvbiBbIEEudmFsdWUgdmFsLCBBLnNlbGVjdGVkIDx8IChTdHJpbmcuZnJvbUludCA8fCBnZXRQYWdlU2l6ZSB0YWJsZVN0YXRlKSA9PSB2YWwgXSBbIEh0bWwudGV4dCB2YWwgXVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICArKyBodG1sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICA8fFxuICAgICAgICAgICAgICAgIEFycmF5Lm1hcCBTdHJpbmcuZnJvbUludCB2YWx1ZXNcbiAgICBpblxuICAgIEh0bWwuc2VsZWN0IFsgb25QYWdlU2l6ZUNob2ljZSB0YWJsZVN0YXRlIF0gPHxcbiAgICAgICAgKHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgUGFnZXIgdmFsdWVzIC0+XG4gICAgICAgICAgICAgICAgdmlld09wdGlvbiB2YWx1ZXNcblxuICAgICAgICAgICAgU2Nyb2xsZXIgdmFsdWVzIC0+XG4gICAgICAgICAgICAgICAgdmlld09wdGlvbiB2YWx1ZXNcblxuICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgIClcblxuXG5pc0V2ZW4gOiBJbnQgLT4gQm9vbFxuaXNFdmVuIGludCA9XG4gICAgTWF0aC5tb2RCeSAyIGludCA9PSAwXG5cblxubmVnYXRpdmVUb1plcm8gOiBJbnQgLT4gSW50XG5uZWdhdGl2ZVRvWmVybyBuID1cbiAgICB3aGVuIGNvbXBhcmUgbiAwIGlzXG4gICAgICAgIExUIC0+XG4gICAgICAgICAgICAwXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgblxuIiwKICAgICAgICAibW9kdWxlIEV4YW1wbGUuUGFnaW5hdGVkIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgUGVyc29uLCBjb25maWcsIGluaXQsIG1haW4sIHByZXNpZGVudHMsIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGUgZXhwb3NpbmcgKFNvcnREaXJlY3Rpb24oLi4pKVxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEh0bWwsIGRpdiwgaDEsIGlucHV0LCBsaSwgdGV4dCwgdWwpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChwbGFjZWhvbGRlcilcbmltcG9ydCBIdG1sLkV2ZW50cyBleHBvc2luZyAob25JbnB1dClcblxuXG5tYWluIDogUHJvZ3JhbSB7fSBNb2RlbCBNc2dcbm1haW4gPVxuICAgIEJyb3dzZXIuc2FuZGJveFxuICAgICAgICB7IGluaXQgPSBpbml0IHByZXNpZGVudHNcbiAgICAgICAgLCB1cGRhdGUgPSB1cGRhdGVcbiAgICAgICAgLCB2aWV3ID0gdmlld1xuICAgICAgICB9XG5cblxuXG4tLSBNT0RFTFxuXG5cbnR5cGUgYWxpYXMgTW9kZWwgPVxuICAgIHsgcGVvcGxlIDogQXJyYXkgUGVyc29uXG4gICAgLCB0YWJsZVN0YXRlIDogVGFibGUuU3RhdGVcbiAgICAsIHF1ZXJ5IDogU3RyaW5nXG4gICAgfVxuXG5cbmluaXQgOiBBcnJheSBQZXJzb24gLT4gTW9kZWxcbmluaXQgcGVvcGxlID1cbiAgICBsZXRcbiAgICAgICAgbW9kZWwgPVxuICAgICAgICAgICAgeyBwZW9wbGUgPSBwZW9wbGVcbiAgICAgICAgICAgICwgdGFibGVTdGF0ZSA9XG4gICAgICAgICAgICAgICAgVGFibGUubmV3IFwiUHJlc2lkZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIHw+IFRhYmxlLnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIDEwIFsgMCwgNSwgMjUsIDUwIF1cbiAgICAgICAgICAgICAgICAgICAgfD4gVGFibGUudXBkYXRlU29ydFN0YXRlIFwiWWVhclwiIEFzY1xuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS51cGRhdGVBY3RpdmVSb3dJZCBcIlwiXG4gICAgICAgICAgICAsIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgIGluXG4gICAgbW9kZWxcblxuXG5cbi0tIFVQREFURVxuXG5cbnR5cGUgTXNnXG4gICAgPSBTZXRRdWVyeSBTdHJpbmdcbiAgICB8IFNldFRhYmxlU3RhdGUgVGFibGUuU3RhdGVcblxuXG51cGRhdGUgOiBNc2cgLT4gTW9kZWwgLT4gTW9kZWxcbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFNldFF1ZXJ5IG5ld1F1ZXJ5IC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgcXVlcnkgPSBuZXdRdWVyeSB9XG5cbiAgICAgICAgU2V0VGFibGVTdGF0ZSBuZXdTdGF0ZSAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHRhYmxlU3RhdGUgPSBuZXdTdGF0ZSB9XG5cblxuXG4tLSBWSUVXXG5cblxudmlldyA6IE1vZGVsIC0+IEh0bWwgTXNnXG52aWV3IHsgcGVvcGxlLCB0YWJsZVN0YXRlLCBxdWVyeSB9ID1cbiAgICBsZXRcbiAgICAgICAgbG93ZXJRdWVyeSA9XG4gICAgICAgICAgICBTdHJpbmcudG9Mb3dlciBxdWVyeVxuXG4gICAgICAgIGFjY2VwdGFibGVQZW9wbGUgPVxuICAgICAgICAgICAgQXJyYXkua2VlcElmIChTdHJpbmcuY29udGFpbnMgbG93ZXJRdWVyeSA8PCBTdHJpbmcudG9Mb3dlciA8PCAubmFtZSkgcGVvcGxlXG4gICAgaW5cbiAgICBkaXYgW11cbiAgICAgICAgWyBoMSBbXSBbIHRleHQgXCJQYWdpbmF0aW9uIChTY3JvbGxpbmcgdmFyaWFudClcIiBdXG4gICAgICAgICwgZGl2IFtdIFtdXG4gICAgICAgICwgaW5wdXQgWyBwbGFjZWhvbGRlciBcIlNlYXJjaCBieSBOYW1lXCIsIG9uSW5wdXQgU2V0UXVlcnkgXSBbXVxuICAgICAgICAsIFRhYmxlLnBhZ2VMZW5ndGhDaG9vc2VyIGNvbmZpZyB0YWJsZVN0YXRlXG4gICAgICAgICwgVGFibGUudmlldyBjb25maWcgdGFibGVTdGF0ZSBhY2NlcHRhYmxlUGVvcGxlXG4gICAgICAgIF1cblxuXG5jb25maWcgOiBUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuY29uZmlnID1cbiAgICBUYWJsZS5jb25maWdcbiAgICAgICAgeyB0b0lkID0gLm5hbWVcbiAgICAgICAgLCB0b01zZyA9IFNldFRhYmxlU3RhdGVcbiAgICAgICAgLCBjb2x1bW5zID1cbiAgICAgICAgICAgIFsgVGFibGUuc3RyaW5nQ29sdW1uIFwiTmFtZVwiIC5uYW1lXG4gICAgICAgICAgICAsIFRhYmxlLmludENvbHVtbiBcIlllYXJcIiAueWVhclxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJDaXR5XCIgLmNpdHlcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiU3RhdGVcIiAuc3RhdGVcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5cblxuLS0gUEVPUExFXG5cblxudHlwZSBhbGlhcyBQZXJzb24gPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgeWVhciA6IEludFxuICAgICwgY2l0eSA6IFN0cmluZ1xuICAgICwgc3RhdGUgOiBTdHJpbmdcbiAgICB9XG5cblxucGVyc29uIG5hbWUgeWVhciBjaXR5IHN0YXRlID1cbiAgICB7IG5hbWUgPSBuYW1lLCB5ZWFyID0geWVhciwgY2l0eSA9IGNpdHksIHN0YXRlID0gc3RhdGUgfVxuXG5cbnByZXNpZGVudHMgOiBBcnJheSBQZXJzb25cbnByZXNpZGVudHMgPVxuICAgIFsgcGVyc29uIFwiR2VvcmdlIFdhc2hpbmd0b25cIiAxNzMyIFwiV2VzdG1vcmVsYW5kIENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSm9obiBBZGFtc1wiIDE3MzUgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiVGhvbWFzIEplZmZlcnNvblwiIDE3NDMgXCJTaGFkd2VsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgTWFkaXNvblwiIDE3NTEgXCJQb3J0IENvbndheVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgTW9ucm9lXCIgMTc1OCBcIk1vbnJvZSBIYWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJBbmRyZXcgSmFja3NvblwiIDE3NjcgXCJXYXhoYXdzIFJlZ2lvblwiIFwiU291dGgvTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiSm9obiBRdWluY3kgQWRhbXNcIiAxNzY3IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gSGVucnkgSGFycmlzb25cIiAxNzczIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiTWFydGluIFZhbiBCdXJlblwiIDE3ODIgXCJLaW5kZXJob29rXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJaYWNoYXJ5IFRheWxvclwiIDE3ODQgXCJCYXJib3Vyc3ZpbGxlXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIFR5bGVyXCIgMTc5MCBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEJ1Y2hhbmFuXCIgMTc5MSBcIkNvdmUgR2FwXCIgXCJQZW5uc3lsdmFuaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgSy4gUG9sa1wiIDE3OTUgXCJQaW5ldmlsbGVcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIk1pbGxhcmQgRmlsbG1vcmVcIiAxODAwIFwiU3VtbWVyaGlsbFwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiRnJhbmtsaW4gUGllcmNlXCIgMTgwNCBcIkhpbGxzYm9yb3VnaFwiIFwiTmV3IEhhbXBzaGlyZVwiXG4gICAgLCBwZXJzb24gXCJBbmRyZXcgSm9obnNvblwiIDE4MDggXCJSYWxlaWdoXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJBYnJhaGFtIExpbmNvbG5cIiAxODA5IFwiU2lua2luZyBzcHJpbmdcIiBcIktlbnR1Y2t5XCJcbiAgICAsIHBlcnNvbiBcIlVseXNzZXMgUy4gR3JhbnRcIiAxODIyIFwiUG9pbnQgUGxlYXNhbnRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiUnV0aGVyZm9yZCBCLiBIYXllc1wiIDE4MjIgXCJEZWxhd2FyZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJDaGVzdGVyIEEuIEFydGh1clwiIDE4MjkgXCJGYWlyZmllbGRcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgQS4gR2FyZmllbGRcIiAxODMxIFwiTW9yZWxhbmQgSGlsbHNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQmVuamFtaW4gSGFycmlzb25cIiAxODMzIFwiTm9ydGggQmVuZFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJHcm92ZXIgQ2xldmVsYW5kXCIgMTgzNyBcIkNhbGR3ZWxsXCIgXCJOZXcgSmVyc2V5XCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gTWNLaW5sZXlcIiAxODQzIFwiTmlsZXNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiV29vZHJvdyBXaWxzb25cIiAxODU2IFwiU3RhdW50b25cIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gSG93YXJkIFRhZnRcIiAxODU3IFwiQ2luY2lubmF0aVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJUaGVvZG9yZSBSb29zZXZlbHRcIiAxODU4IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiV2FycmVuIEcuIEhhcmRpbmdcIiAxODY1IFwiQmxvb21pbmcgR3JvdmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQ2FsdmluIENvb2xpZGdlXCIgMTg3MiBcIlBseW1vdXRoXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbiBcIkhlcmJlcnQgSG9vdmVyXCIgMTg3NCBcIldlc3QgQnJhbmNoXCIgXCJJb3dhXCJcbiAgICAsIHBlcnNvbiBcIkZyYW5rbGluIEQuIFJvb3NldmVsdFwiIDE4ODIgXCJIeWRlIFBhcmtcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIkhhcnJ5IFMuIFRydW1hblwiIDE4ODQgXCJMYW1hclwiIFwiTWlzc291cmlcIlxuICAgICwgcGVyc29uIFwiRHdpZ2h0IEQuIEVpc2VuaG93ZXJcIiAxODkwIFwiRGVuaXNvblwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uIFwiTHluZG9uIEIuIEpvaG5zb25cIiAxOTA4IFwiU3RvbmV3YWxsXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb24gXCJSb25hbGQgUmVhZ2FuXCIgMTkxMSBcIlRhbXBpY29cIiBcIklsbGlub2lzXCJcbiAgICAsIHBlcnNvbiBcIlJpY2hhcmQgTS4gTml4b25cIiAxOTEzIFwiWW9yYmEgTGluZGFcIiBcIkNhbGlmb3JuaWFcIlxuICAgICwgcGVyc29uIFwiR2VyYWxkIFIuIEZvcmRcIiAxOTEzIFwiT21haGFcIiBcIk5lYnJhc2thXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gRi4gS2VubmVkeVwiIDE5MTcgXCJCcm9va2xpbmVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiR2VvcmdlIEguIFcuIEJ1c2hcIiAxOTI0IFwiTWlsdG9uXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIkppbW15IENhcnRlclwiIDE5MjQgXCJQbGFpbnNcIiBcIkdlb3JnaWFcIlxuICAgICwgcGVyc29uIFwiR2VvcmdlIFcuIEJ1c2hcIiAxOTQ2IFwiTmV3IEhhdmVuXCIgXCJDb25uZWN0aWN1dFwiXG4gICAgLCBwZXJzb24gXCJCaWxsIENsaW50b25cIiAxOTQ2IFwiSG9wZVwiIFwiQXJrYW5zYXNcIlxuICAgICwgcGVyc29uIFwiQmFyYWNrIE9iYW1hXCIgMTk2MSBcIkhvbm9sdWx1XCIgXCJIYXdhaWlcIlxuICAgICwgcGVyc29uIFwiRG9uYWxkIFRydW1wXCIgMTk0NiBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICBdXG4iLAogICAgICAgICJtb2R1bGUgRXhhbXBsZS5QcmVzaWRlbnRzIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgUGVyc29uLCBjb25maWcsIGluaXQsIG1haW4sIHByZXNpZGVudHMsIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGVcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdCBwcmVzaWRlbnRzXG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IFBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgUGVyc29uIC0+IE1vZGVsXG5pbml0IHBlb3BsZSA9XG4gICAgbGV0XG4gICAgICAgIG1vZGVsID1cbiAgICAgICAgICAgIHsgcGVvcGxlID0gcGVvcGxlXG4gICAgICAgICAgICAsIHRhYmxlU3RhdGUgPSBUYWJsZS5pbml0aWFsU29ydCBcIlN0YXRlXCJcbiAgICAgICAgICAgICwgcXVlcnkgPSBcIlwiXG4gICAgICAgICAgICB9XG4gICAgaW5cbiAgICBtb2RlbFxuXG5cblxuLS0gVVBEQVRFXG5cblxudHlwZSBNc2dcbiAgICA9IFNldFF1ZXJ5IFN0cmluZ1xuICAgIHwgU2V0VGFibGVTdGF0ZSBUYWJsZS5TdGF0ZVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiBNb2RlbFxudXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgd2hlbiBtc2cgaXNcbiAgICAgICAgU2V0UXVlcnkgbmV3UXVlcnkgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBxdWVyeSA9IG5ld1F1ZXJ5IH1cblxuICAgICAgICBTZXRUYWJsZVN0YXRlIG5ld1N0YXRlIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgdGFibGVTdGF0ZSA9IG5ld1N0YXRlIH1cblxuXG5cbi0tIFZJRVdcblxuXG52aWV3IDogTW9kZWwgLT4gSHRtbCBNc2dcbnZpZXcgeyBwZW9wbGUsIHRhYmxlU3RhdGUsIHF1ZXJ5IH0gPVxuICAgIGxldFxuICAgICAgICBsb3dlclF1ZXJ5ID1cbiAgICAgICAgICAgIFN0cmluZy50b0xvd2VyIHF1ZXJ5XG5cbiAgICAgICAgYWNjZXB0YWJsZVBlb3BsZSA9XG4gICAgICAgICAgICBBcnJheS5rZWVwSWYgKFN0cmluZy5jb250YWlucyBsb3dlclF1ZXJ5IDw8IFN0cmluZy50b0xvd2VyIDw8IC5uYW1lKSBwZW9wbGVcbiAgICBpblxuICAgIGRpdiBbXVxuICAgICAgICBbIGgxIFtdIFsgdGV4dCBcIlNvcnRhYmxlIHRhYmxlLlwiIF1cbiAgICAgICAgLCBkaXYgW11cbiAgICAgICAgICAgIFsgdGV4dCBcIlNpbmdsZSBjbGljayB0byBzZXQgdGhlIHNvcnQgb3JkZXIgdG8gdGhhdCBjb2x1bW4uIFwiXG4gICAgICAgICAgICAsIHRleHQgXCJJZiB0aGUgY29sdW1uIHdhcyBzZWxlY3RlZCBhbHJlYWR5LCB0aGUgc29ydCBvcmRlciBpcyByZXZlcnNlZC4gXCJcbiAgICAgICAgICAgICwgdGV4dCBcIkNsaWNrIGVsc2V3aGVyZSBhbmQgcmVsZWFzZSB0aGUgY2xpY2sgb24gY29sdW1uIGhlYWRlciB0byBhZGQgdGhhdCBjb2x1bW4gdG8gdGhlIGVuZCBvZiB0aGUgc29ydCBvcmRlciAoLi4udGhlbiBzb3J0IGJ5IFllYXIpLiBcIlxuICAgICAgICAgICAgLCB0ZXh0IFwiSWYgdGhlIGNvbHVtbiB3YXMgc2VsZWN0ZWQgYWxyZWFkeSwgaXQgaXMgbW92ZWQgdG8gdGhlIGVuZCBvZiB0aGUgc29ydCBvcmRlciBzZXF1ZW5jZS4gXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgLCBoMSBbXSBbIHRleHQgXCJCaXJ0aHBsYWNlcyBvZiBVLlMuIFByZXNpZGVudHNcIiBdXG4gICAgICAgICwgaW5wdXQgWyBwbGFjZWhvbGRlciBcIlNlYXJjaCBieSBOYW1lXCIsIG9uSW5wdXQgU2V0UXVlcnkgXSBbXVxuICAgICAgICAsIFRhYmxlLnZpZXcgY29uZmlnIHRhYmxlU3RhdGUgYWNjZXB0YWJsZVBlb3BsZVxuICAgICAgICBdXG5cblxuY29uZmlnIDogVGFibGUuQ29uZmlnIFBlcnNvbiBNc2dcbmNvbmZpZyA9XG4gICAgVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBTZXRUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIFRhYmxlLnN0cmluZ0NvbHVtbiBcIk5hbWVcIiAubmFtZVxuICAgICAgICAgICAgLCBUYWJsZS5pbnRDb2x1bW4gXCJZZWFyXCIgLnllYXJcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiQ2l0eVwiIC5jaXR5XG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIlN0YXRlXCIgLnN0YXRlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuXG5cbi0tIFBFT1BMRVxuXG5cbnR5cGUgYWxpYXMgUGVyc29uID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHllYXIgOiBJbnRcbiAgICAsIGNpdHkgOiBTdHJpbmdcbiAgICAsIHN0YXRlIDogU3RyaW5nXG4gICAgfVxuXG5cbnBlcnNvbiBuYW1lIHllYXIgY2l0eSBzdGF0ZSA9XG4gICAgeyBuYW1lID0gbmFtZSwgeWVhciA9IHllYXIsIGNpdHkgPSBjaXR5LCBzdGF0ZSA9IHN0YXRlIH1cblxuXG5wcmVzaWRlbnRzIDogQXJyYXkgUGVyc29uXG5wcmVzaWRlbnRzID1cbiAgICBbIHBlcnNvbiBcIkdlb3JnZSBXYXNoaW5ndG9uXCIgMTczMiBcIldlc3Rtb3JlbGFuZCBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gQWRhbXNcIiAxNzM1IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIlRob21hcyBKZWZmZXJzb25cIiAxNzQzIFwiU2hhZHdlbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1hZGlzb25cIiAxNzUxIFwiUG9ydCBDb253YXlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1vbnJvZVwiIDE3NTggXCJNb25yb2UgSGFsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEphY2tzb25cIiAxNzY3IFwiV2F4aGF3cyBSZWdpb25cIiBcIlNvdXRoL05vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gUXVpbmN5IEFkYW1zXCIgMTc2NyBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhlbnJ5IEhhcnJpc29uXCIgMTc3MyBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIk1hcnRpbiBWYW4gQnVyZW5cIiAxNzgyIFwiS2luZGVyaG9va1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiWmFjaGFyeSBUYXlsb3JcIiAxNzg0IFwiQmFyYm91cnN2aWxsZVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSm9obiBUeWxlclwiIDE3OTAgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBCdWNoYW5hblwiIDE3OTEgXCJDb3ZlIEdhcFwiIFwiUGVubnN5bHZhbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEsuIFBvbGtcIiAxNzk1IFwiUGluZXZpbGxlXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJNaWxsYXJkIEZpbGxtb3JlXCIgMTgwMCBcIlN1bW1lcmhpbGxcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIkZyYW5rbGluIFBpZXJjZVwiIDE4MDQgXCJIaWxsc2Jvcm91Z2hcIiBcIk5ldyBIYW1wc2hpcmVcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEpvaG5zb25cIiAxODA4IFwiUmFsZWlnaFwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiQWJyYWhhbSBMaW5jb2xuXCIgMTgwOSBcIlNpbmtpbmcgc3ByaW5nXCIgXCJLZW50dWNreVwiXG4gICAgLCBwZXJzb24gXCJVbHlzc2VzIFMuIEdyYW50XCIgMTgyMiBcIlBvaW50IFBsZWFzYW50XCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlJ1dGhlcmZvcmQgQi4gSGF5ZXNcIiAxODIyIFwiRGVsYXdhcmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQ2hlc3RlciBBLiBBcnRodXJcIiAxODI5IFwiRmFpcmZpZWxkXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEEuIEdhcmZpZWxkXCIgMTgzMSBcIk1vcmVsYW5kIEhpbGxzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkJlbmphbWluIEhhcnJpc29uXCIgMTgzMyBcIk5vcnRoIEJlbmRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiR3JvdmVyIENsZXZlbGFuZFwiIDE4MzcgXCJDYWxkd2VsbFwiIFwiTmV3IEplcnNleVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIE1jS2lubGV5XCIgMTg0MyBcIk5pbGVzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIldvb2Ryb3cgV2lsc29uXCIgMTg1NiBcIlN0YXVudG9uXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhvd2FyZCBUYWZ0XCIgMTg1NyBcIkNpbmNpbm5hdGlcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiVGhlb2RvcmUgUm9vc2V2ZWx0XCIgMTg1OCBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIldhcnJlbiBHLiBIYXJkaW5nXCIgMTg2NSBcIkJsb29taW5nIEdyb3ZlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNhbHZpbiBDb29saWRnZVwiIDE4NzIgXCJQbHltb3V0aFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJIZXJiZXJ0IEhvb3ZlclwiIDE4NzQgXCJXZXN0IEJyYW5jaFwiIFwiSW93YVwiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBELiBSb29zZXZlbHRcIiAxODgyIFwiSHlkZSBQYXJrXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJIYXJyeSBTLiBUcnVtYW5cIiAxODg0IFwiTGFtYXJcIiBcIk1pc3NvdXJpXCJcbiAgICAsIHBlcnNvbiBcIkR3aWdodCBELiBFaXNlbmhvd2VyXCIgMTg5MCBcIkRlbmlzb25cIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIkx5bmRvbiBCLiBKb2huc29uXCIgMTkwOCBcIlN0b25ld2FsbFwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uIFwiUm9uYWxkIFJlYWdhblwiIDE5MTEgXCJUYW1waWNvXCIgXCJJbGxpbm9pc1wiXG4gICAgLCBwZXJzb24gXCJSaWNoYXJkIE0uIE5peG9uXCIgMTkxMyBcIllvcmJhIExpbmRhXCIgXCJDYWxpZm9ybmlhXCJcbiAgICAsIHBlcnNvbiBcIkdlcmFsZCBSLiBGb3JkXCIgMTkxMyBcIk9tYWhhXCIgXCJOZWJyYXNrYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEYuIEtlbm5lZHlcIiAxOTE3IFwiQnJvb2tsaW5lXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBILiBXLiBCdXNoXCIgMTkyNCBcIk1pbHRvblwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJKaW1teSBDYXJ0ZXJcIiAxOTI0IFwiUGxhaW5zXCIgXCJHZW9yZ2lhXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBXLiBCdXNoXCIgMTk0NiBcIk5ldyBIYXZlblwiIFwiQ29ubmVjdGljdXRcIlxuICAgICwgcGVyc29uIFwiQmlsbCBDbGludG9uXCIgMTk0NiBcIkhvcGVcIiBcIkFya2Fuc2FzXCJcbiAgICAsIHBlcnNvbiBcIkJhcmFjayBPYmFtYVwiIDE5NjEgXCJIb25vbHVsdVwiIFwiSGF3YWlpXCJcbiAgICAsIHBlcnNvbiBcIkRvbmFsZCBUcnVtcFwiIDE5NDYgXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgXVxuXG5cblxuLS0gaHR0cHM6Ly9kYXRhLnN0YWR0LXp1ZXJpY2guY2gvYXBpLzMvYWN0aW9uL2RhdGFzdG9yZV9zZWFyY2hfc3FsP3NxbD1XSVRIJTIwbWFsZSUyMEFTJTIwKFNFTEVDVCUyMFNVTSglMjJBbnpHZWJ1V2lyJTIyOjppbnQpJTIwQVMlMjBtY291bnQsJTIwJTIyVm9ybmFtZSUyMiUyMGZyb20lMjAlMjI3YWJmODU2Mi00NTY4LTRjOGMtOGYxZi1hODQyYTVhNTQ2MTYlMjIlMjBXSEVSRSUyMCUyMlNleExhbmclMjIlMjA9JTIwJTI3bSVDMyVBNG5ubGljaCUyNyUyMEdST1VQJTIwQlklMjAlMjJWb3JuYW1lJTIyKSwlMjBmZW1hbGUlMjBBUyUyMChTRUxFQ1QlMjBTVU0oJTIyQW56R2VidVdpciUyMjo6aW50KSUyMEFTJTIwZmNvdW50LCUyMCUyMlZvcm5hbWUlMjIlMjBmcm9tJTIwJTIyN2FiZjg1NjItNDU2OC00YzhjLThmMWYtYTg0MmE1YTU0NjE2JTIyJTIwV0hFUkUlMjAlMjJTZXhMYW5nJTIyJTIwPSUyMCUyN3dlaWJsaWNoJTI3JTIwR1JPVVAlMjBCWSUyMCUyMlZvcm5hbWUlMjIpJTIwU0VMRUNUJTIwbWNvdW50LCUyMGZjb3VudCwlMjAobWNvdW50OjpkZWNpbWFsL2Zjb3VudDo6ZGVjaW1hbCklMjBBUyUyMHF1b3RpZW50LCUyMG1hbGUuJTIyVm9ybmFtZSUyMiUyMEZST00lMjBtYWxlJTIwSU5ORVIlMjBKT0lOJTIwZmVtYWxlJTIwT04lMjBtYWxlLiUyMlZvcm5hbWUlMjIlMjA9JTIwZmVtYWxlLiUyMlZvcm5hbWUlMjIlMjBXSEVSRSUyMG1jb3VudCUyMCUzRSUyMDElMjBBTkQlMjBmY291bnQlMjAlM0UlMjAxJTIwT1JERVIlMjBCWSUyMHF1b3RpZW50JTIwREVTQyUyMExJTUlUJTIwMTAwMFxuIiwKICAgICAgICAibW9kdWxlIERvY0Jvb2sgZXhwb3NpbmcgKE1vZGVsLCBNc2coLi4pLCBpbml0LCBtYWluLCB1cGRhdGUsIHZpZXcpXG5cbmltcG9ydCBCcm93c2VyXG5pbXBvcnQgRXhhbXBsZS5QYWdpbmF0ZWQgYXMgUGFnaW5hdGVkXG5pbXBvcnQgRXhhbXBsZS5QcmVzaWRlbnRzIGFzIFByZXNpZGVudHNcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoY2xhc3MsIGlkLCBzdHlsZSlcbmltcG9ydCBIdG1sLkV2ZW50cyBleHBvc2luZyAob25DbGljaylcblxuXG5tYWluIDogUHJvZ3JhbSB7fSBNb2RlbCBNc2dcbm1haW4gPVxuICAgIEJyb3dzZXIuc2FuZGJveFxuICAgICAgICB7IGluaXQgPSBpbml0XG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cbnR5cGUgTXNnXG4gICAgPSBTd2l0Y2hFeGFtcGxlIEV4YW1wbGVTaG93blxuICAgIHwgUHJlc2lkZW50c01zZyBQcmVzaWRlbnRzLk1zZ1xuICAgIHwgUGFnaW5hdGVkTXNnIFBhZ2luYXRlZC5Nc2dcblxuXG5pbml0ID1cbiAgICB7IGFjdGl2ZUV4YW1wbGUgPSBTaG93UHJlc2lkZW50c1xuICAgICwgcHJlc2lkZW50cyA9IFByZXNpZGVudHMuaW5pdCBQcmVzaWRlbnRzLnByZXNpZGVudHNcbiAgICAsIHBhZ2luYXRlZCA9IFBhZ2luYXRlZC5pbml0IFBhZ2luYXRlZC5wcmVzaWRlbnRzXG4gICAgfVxuXG5cbnR5cGUgYWxpYXMgTW9kZWwgPVxuICAgIHsgYWN0aXZlRXhhbXBsZSA6IEV4YW1wbGVTaG93blxuICAgICwgcHJlc2lkZW50cyA6IFByZXNpZGVudHMuTW9kZWxcbiAgICAsIHBhZ2luYXRlZCA6IFBhZ2luYXRlZC5Nb2RlbFxuICAgIH1cblxuXG52aWV3IDogTW9kZWwgLT4gSHRtbCBNc2dcbnZpZXcgbW9kZWwgPVxuICAgIGxldFxuICAgICAgICBpc0FjdGl2ZSB2YXJpYW50ID1cbiAgICAgICAgICAgIGlmIG1vZGVsLmFjdGl2ZUV4YW1wbGUgPT0gdmFyaWFudCB0aGVuXG4gICAgICAgICAgICAgICAgWyBjbGFzcyBcImFjdGl2ZVwiLCBIdG1sLkF0dHJpYnV0ZXMudGFiaW5kZXggLTEgXVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgW11cblxuICAgICAgICB2YXJpYW50cyA9XG4gICAgICAgICAgICBBcnJheS5tYXBcbiAgICAgICAgICAgICAgICAoXFx2YXJpYW50IC0+IEh0bWwuYnV0dG9uIChbIG9uQ2xpY2sgPHwgU3dpdGNoRXhhbXBsZSB2YXJpYW50IF0gKysgaXNBY3RpdmUgdmFyaWFudCkgWyBIdG1sLnRleHQgPHwgZXhhbXBsZU5hbWUgdmFyaWFudCBdKVxuICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICBpblxuICAgIEh0bWwuZGl2IFsgaWQgXCJ3cmFwcGVyXCIgXVxuICAgICAgICBbIEh0bWwubmF2IFsgaWQgXCJuYXZpZ2F0aW9uXCIgXSAoWyBIdG1sLmgzIFtdIFsgSHRtbC50ZXh0IFwiRXhhbXBsZXNcIiBdIF0gKysgdmFyaWFudHMpXG4gICAgICAgICwgSHRtbC5hcnRpY2xlIFsgaWQgXCJleGFtcGxlXCIgXVxuICAgICAgICAgICAgWyB3aGVuIG1vZGVsLmFjdGl2ZUV4YW1wbGUgaXNcbiAgICAgICAgICAgICAgICBTaG93UHJlc2lkZW50cyAtPlxuICAgICAgICAgICAgICAgICAgICBQcmVzaWRlbnRzLnZpZXcgbW9kZWwucHJlc2lkZW50cyB8PiBIdG1sLm1hcCBQcmVzaWRlbnRzTXNnXG5cbiAgICAgICAgICAgICAgICBTaG93UGFnaW5hdGVkIC0+XG4gICAgICAgICAgICAgICAgICAgIFBhZ2luYXRlZC52aWV3IG1vZGVsLnBhZ2luYXRlZCB8PiBIdG1sLm1hcCBQYWdpbmF0ZWRNc2dcbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiBNb2RlbFxudXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgd2hlbiBtc2cgaXNcbiAgICAgICAgU3dpdGNoRXhhbXBsZSBleGFtcGxlVG9Td2l0Y2hUbyAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IGFjdGl2ZUV4YW1wbGUgPSBleGFtcGxlVG9Td2l0Y2hUbyB9XG5cbiAgICAgICAgUHJlc2lkZW50c01zZyBleGFtcGxlTXNnIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgcHJlc2lkZW50cyA9IFByZXNpZGVudHMudXBkYXRlIGV4YW1wbGVNc2cgPHwgLnByZXNpZGVudHMgbW9kZWwgfVxuXG4gICAgICAgIFBhZ2luYXRlZE1zZyBleGFtcGxlTXNnIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgcGFnaW5hdGVkID0gUGFnaW5hdGVkLnVwZGF0ZSBleGFtcGxlTXNnIDx8IC5wYWdpbmF0ZWQgbW9kZWwgfVxuXG5cbnR5cGUgRXhhbXBsZVNob3duXG4gICAgPSBTaG93UHJlc2lkZW50c1xuICAgIHwgU2hvd1BhZ2luYXRlZFxuXG5cbmJ1dHRvbnMgPVxuICAgIC0tIGRvbid0IGZvcmdldCB0byBhZGQgdGhlIGV4YW1wbGUgdG8gdGhpcyBsaXN0LCBvdGhlcndpc2UgaXQgd29uJ3Qgc2hvdyB1cC4uLlxuICAgIFsgU2hvd1ByZXNpZGVudHMsIFNob3dQYWdpbmF0ZWQgXVxuXG5cbmV4YW1wbGVOYW1lIDogRXhhbXBsZVNob3duIC0+IFN0cmluZ1xuZXhhbXBsZU5hbWUgdmFyaWFudCA9XG4gICAgd2hlbiB2YXJpYW50IGlzXG4gICAgICAgIFNob3dQcmVzaWRlbnRzIC0+XG4gICAgICAgICAgICBcIlNvcnRpbmdcIlxuXG4gICAgICAgIFNob3dQYWdpbmF0ZWQgLT5cbiAgICAgICAgICAgIFwiUGFnaW5hdGlvblwiXG4iLAogICAgICAgICJtb2R1bGUgU3RyaW5nIGV4cG9zaW5nXG4gICAgKCBTdHJpbmcsIGlzRW1wdHksIGNvdW50LCByZXZlcnNlLCByZXBlYXQsIHJlcGxhY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgc3BsaXQsIGpvaW4sIHdvcmRzLCBsaW5lc1xuICAgICwgc2xpY2UsIHRha2VGaXJzdCwgdGFrZUxhc3QsIGRyb3BGaXJzdCwgZHJvcExhc3RcbiAgICAsIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuICAgICwgdG9JbnQsIGZyb21JbnRcbiAgICAsIHRvRmxvYXQsIGZyb21GbG9hdFxuICAgICwgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIHRvVXBwZXIsIHRvTG93ZXIsIHBhZCwgcGFkTGVmdCwgcGFkUmlnaHQsIHRyaW0sIHRyaW1MZWZ0LCB0cmltUmlnaHRcbiAgICAsIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG4gICAgLCB1bml0TGVuZ3RoLCBnZXRVbml0LCBmb2xkbFVuaXRzLCBmb2xkclVuaXRzXG4gICAgKVxuXG57LXwgQSBidWlsdC1pbiByZXByZXNlbnRhdGlvbiBmb3IgZWZmaWNpZW50IHN0cmluZyBtYW5pcHVsYXRpb24uIFdoZW4gaXQgY29tZXMgdG8gc3RyaW5ncyxcbnRoZXJlIGFyZSB0aHJlZSBjb25jZXB0cyB3b3J0aCBrbm93aW5nIGFib3V0OlxuXG4qIENvZGUgdW5pdHM6IHJlcHJlc2VudHMgdGhlIHNtYWxsZXN0IHByaW1pdGl2ZSB2YWx1ZSBvZiBhIHN0cmluZy4gSW4gR3JlbixcbmNvZGUgdW5pdHMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgMTYtYml0IHZhbHVlLiBUaGlzIGlzIGVub3VnaCB0byBzdG9yZSB0aGUgbW9zdCBjb21tb25cbmNoYXJhY3RlcnMgaW4gd2VzdGVybiBsYW5ndWFnZXMgKExhdGluLCBHcmVlaywgQ3lyaWxpYyksIGJ1dCBub3QgYWxsIHVuaWNvZGUgY2hhcmFjdGVycy5cbiogQ29kZSBwb2ludHM6IHJlcHJlc2VudHMgYSB1bmljb2RlIGNoYXJhY3Rlci4gQ29kZSBwb2ludHMgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IG9uZVxudW5pdCwgb3IgYSBwYWlyIG9mIHVuaXRzLlxuKiBHcmFwaGVtZXM6IHJlcHJlc2VudHMgYSBzaW5nbGUgdmlzdWFsIGdseXBoLCBsaWtlIGNlcnRhaW4gZW1vamlzIG9yIGNoYXJhY3RlcnMgd2l0aFxuYWNjZW50cy5cblxuVW5sZXNzIG90aGVyd2lzZSBub3RlZCwgYWxsIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBkZWFsIHdpdGggY29kZSBwb2ludHMuXG5cblxuQGRvY3MgU3RyaW5nLCBpc0VtcHR5LCBjb3VudCwgcmV2ZXJzZSwgcmVwZWF0LCByZXBsYWNlXG5cblxuIyMgQnVpbGRpbmcgYW5kIFNwbGl0dGluZ1xuXG5AZG9jcyBwcmVwZW5kLCBhcHBlbmQsIHNwbGl0LCBqb2luLCB3b3JkcywgbGluZXNcblxuXG4jIyBHZXQgU3Vic3RyaW5nc1xuXG5AZG9jcyBzbGljZSwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgZHJvcEZpcnN0LCBkcm9wTGFzdFxuXG5cbiMjIENoZWNrIGZvciBTdWJzdHJpbmdzXG5cbkBkb2NzIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuXG5cbiMjIEludCBDb252ZXJzaW9uc1xuXG5AZG9jcyB0b0ludCwgZnJvbUludFxuXG5cbiMjIEZsb2F0IENvbnZlcnNpb25zXG5cbkBkb2NzIHRvRmxvYXQsIGZyb21GbG9hdFxuXG5cbiMjIENoYXIgQ29udmVyc2lvbnNcblxuQGRvY3MgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG5cblxuIyMgQXJyYXkgQ29udmVyc2lvbnNcblxuQGRvY3MgdG9BcnJheSwgZnJvbUFycmF5XG5cblxuIyMgRm9ybWF0dGluZ1xuXG5Db3NtZXRpYyBvcGVyYXRpb25zIHN1Y2ggYXMgcGFkZGluZyB3aXRoIGV4dHJhIGNoYXJhY3RlcnMgb3IgdHJpbW1pbmcgd2hpdGVzcGFjZS5cblxuQGRvY3MgdG9VcHBlciwgdG9Mb3dlciwgcGFkLCBwYWRMZWZ0LCBwYWRSaWdodCwgdHJpbSwgdHJpbUxlZnQsIHRyaW1SaWdodFxuXG4jIyBIaWdoZXItT3JkZXIgRnVuY3Rpb25zXG5cbkBkb2NzIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG5cbiMjIENoYXIgVW5pdHNcblxuRnVuY3Rpb25zIHRoYXQgb3BlcmF0ZXMgb24gdW5pdHMgaW5zdGVhZCBvZiBjb2RlIHBvaW50cy5cblxuQGRvY3MgdW5pdExlbmd0aCwgZ2V0VW5pdCwgZm9sZGxVbml0cywgZm9sZHJVbml0c1xuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF0aCBleHBvc2luZyAoZmxvb3IsIGNlaWxpbmcpXG5pbXBvcnQgQml0d2lzZVxuaW1wb3J0IENoYXIgZXhwb3NpbmcgKENoYXIpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuU3RyaW5nXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KVxuXG5cblxuLS0gU1RSSU5HU1xuXG5cbnstfCBBIGBTdHJpbmdgIGlzIGEgY2h1bmsgb2YgdGV4dC4gYFN0cmluZ2AgbGl0ZXJhbHMgYXJlIGVuY2xvc2VkIGluIGBcImRvdWJsZSBxdW90ZXNcImAuXG5cbiAgICBcIkhlbGxvIVwiXG5cbiAgICBcIkhvdyBhcmUgeW91P1wiXG5cbiAgICBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBzdHJpbmdzIHdpdGggZXNjYXBlIGNoYXJhY3RlcnNcbiAgICBcInRoaXNcXG5cXHRcXFwidGhhdFxcXCJcIlxuXG4gICAgXCLwn5mI8J+ZifCfmYpcIiAtLSBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBtdWx0aWxpbmUgc3RyaW5nc1xuICAgIFwiXCJcIlRyaXBsZSBkb3VibGUgcXVvdGVzIGxldCB5b3VcbiAgICBjcmVhdGUgXCJtdWx0aWxpbmUgc3RyaW5nc1wiIHdoaWNoXG4gICAgY2FuIGhhdmUgdW5lc2NhcGVkIHF1b3RlcyBhbmQgbmV3bGluZXMuXG4gICAgXCJcIlwiXG5cbkEgYFN0cmluZ2AgY2FuIHJlcHJlc2VudCBhbnkgc2VxdWVuY2Ugb2YgW3VuaWNvZGUgY2hhcmFjdGVyc11bdV0uIFlvdSBjYW4gdXNlXG50aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0byByZXByZXNlbnQgY2hhcmFjdGVyc1xuYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBkaXJlY3RseS5cblVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZSBtYW55IHdoaXRlc3BhY2VcbmNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuKipOb3RlOioqIEphdmFTY3JpcHQgbGV0cyB5b3UgdXNlIGRvdWJsZSBxdW90ZXMgYW5kIHNpbmdsZSBxdW90ZXMgaW50ZXJjaGFuZ2FibHkuXG5UaGlzIGlzIG5vdCB0cnVlIGluIEdyZW4uIFlvdSBtdXN0IHVzZSBkb3VibGUgcXVvdGVzIGZvciBhIGBTdHJpbmdgLCBhbmQgeW91IG11c3RcbnVzZSBzaW5nbGUgcXVvdGVzIGZvciBhIFtgQ2hhcmBdKENoYXIjQ2hhcikuXG5cbi19XG50eXBlIFN0cmluZ1xuICAgID0gU3RyaW5nIC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgc3RyaW5nIGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBcIlwiID09IFRydWVcblxuICAgIGlzRW1wdHkgXCJ0aGUgd29ybGRcIiA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IFN0cmluZyAtPiBCb29sXG5pc0VtcHR5IHN0cmluZyA9XG4gICAgc3RyaW5nID09IFwiXCJcblxuXG57LXwgQ291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLlxuXG4gICAgY291bnQgXCJpbm51bWVyYWJsZVwiID09IDExXG5cbiAgICBjb3VudCBcIlwiID09IDBcblxuLX1cbmNvdW50IDogU3RyaW5nIC0+IEludFxuY291bnQgc3RyaW5nID1cbiAgICBmb2xkbCAoXFxfIG51bSAtPiBudW0gKyAxKSAwIHN0cmluZ1xuXG5cbnstfCBSZXZlcnNlIGEgc3RyaW5nLlxuXG4gICAgcmV2ZXJzZSBcInN0cmVzc2VkXCIgPT0gXCJkZXNzZXJ0c1wiXG5cbi19XG5yZXZlcnNlIDogU3RyaW5nIC0+IFN0cmluZ1xucmV2ZXJzZSBzdHIgPVxuICAgIHRvQXJyYXkgc3RyXG4gICAgICAgIHw+IEFycmF5LnJldmVyc2VcbiAgICAgICAgfD4gZnJvbUFycmF5XG5cblxuey18IFJlcGVhdCBhIHN0cmluZyBfbl8gdGltZXMuXG5cbiAgICByZXBlYXQgMyBcImhhXCIgPT0gXCJoYWhhaGFcIlxuXG4tfVxucmVwZWF0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnJlcGVhdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnJlcGVhdFxuXG5cbnstfCBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiBzb21lIHN1YnN0cmluZy5cblxuICAgIHJlcGxhY2UgXCIuXCIgXCItXCIgXCJKc29uLkRlY29kZS5zdWNjZWVkXCIgPT0gXCJKc29uLURlY29kZS1zdWNjZWVkXCJcblxuICAgIHJlcGxhY2UgXCIsXCIgXCIvXCIgXCJhLGIsYyxkLGVcIiA9PSBcImEvYi9jL2QvZVwiXG5cbioqTm90ZToqKiBJZiB5b3UgbmVlZCBtb3JlIGFkdmFuY2VkIHJlcGxhY2VtZW50cywgY2hlY2sgb3V0IHRoZVxuW2BncmVuLWxhbmcvcGFyc2VyYF1bcGFyc2VyXSBwYWNrYWdlIG9yIFtgU3RyaW5nLlJlZ2V4YF1bcmVnZXhdIG1vZHVsZS5cblxuW3BhcnNlcl06IC9wYWNrYWdlL2dyZW4tbGFuZy9wYXJzZXJcbltyZWdleF06IFN0cmluZy5SZWdleFxuXG4tfVxucmVwbGFjZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xucmVwbGFjZSBiZWZvcmUgYWZ0ZXIgc3RyaW5nID1cbiAgICBqb2luIGFmdGVyIChzcGxpdCBiZWZvcmUgc3RyaW5nKVxuXG5cblxuLS0gQlVJTERJTkcgQU5EIFNQTElUVElOR1xuXG5cbnstfCBDb21iaW5lIHR3byBzdHJpbmdzLiBZb3UgY2FuIGFsc28gdXNlIFt0aGUgYCgrKylgIG9wZXJhdG9yXShCYXNpY3MjKyspXG50byBkbyB0aGlzLlxuXG4gICAgcHJlcGVuZCBcImJ1dHRlclwiIFwiZmx5XCIgPT0gXCJidXR0ZXJmbHlcIlxuXG4tfVxucHJlcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wcmVwZW5kID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuYXBwZW5kXG5cblxuey18IEFwcGVuZCBvbmUgc3RyaW5nIG9udG8gYW5vdGhlci4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgW3ByZXBlbmRdKHByZXBlbmQpLFxuYnV0IHdpdGggdGhlIGFyZ3VtZW50cyByZXZlcnNlZC5cbiAgICBcbiAgICBhcHBlbmQgXCJidXR0ZXJcIiBcImZseVwiID09IFwiZmx5YnV0dGVyXCJcblxuLX1cbmFwcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hcHBlbmQgbGhzIHJocyA9XG4gICAgcHJlcGVuZCByaHMgbGhzXG5cblxuey18IFNwbGl0IGEgc3RyaW5nIHVzaW5nIGEgZ2l2ZW4gc2VwYXJhdG9yLiBJZiB0aGUgc2VwZXJhdG9yIGRvZXNuJ3QgYXBwZWFyLFxueW91IHdpbGwgZ2V0IGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHN0cmluZy5cblxuICAgIHNwbGl0IFwiLFwiIFwiXCIgPT0gW1wiXCJdXG4gICAgXG4gICAgc3BsaXQgXCIsXCIgXCJjYXRcIiA9PSBbXCJjYXRcIl1cbiAgICBcbiAgICBzcGxpdCBcIixcIiBcImNhdCxkb2csY293XCIgPT0gWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF1cbiAgICBcbiAgICBzcGxpdCBcIi9cIiBcImhvbWUvZXZhbi9EZXNrdG9wL1wiID09IFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiwgXCJcIiBdXG5cbi19XG5zcGxpdCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5zcGxpdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnNwbGl0XG5cblxuey18IFB1dCBtYW55IHN0cmluZ3MgdG9nZXRoZXIgd2l0aCBhIGdpdmVuIHNlcGFyYXRvci5cblxuICAgIGpvaW4gXCJhXCIgWyBcIkhcIiwgXCJ3XCIsIFwiaWlcIiwgXCJuXCIgXSA9PSBcIkhhd2FpaWFuXCJcblxuICAgIGpvaW4gXCIgXCIgWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF0gPT0gXCJjYXQgZG9nIGNvd1wiXG5cbiAgICBqb2luIFwiL1wiIFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiBdID09IFwiaG9tZS9ldmFuL0Rlc2t0b3BcIlxuXG4tfVxuam9pbiA6IFN0cmluZyAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5qb2luID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuam9pblxuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIHdvcmRzLCBzcGxpdHRpbmcgb24gY2h1bmtzIG9mIHdoaXRlc3BhY2UuXG5cbiAgICB3b3JkcyBcIkhvdyBhcmUgXFx0IHlvdT8gXFxuIEdvb2Q/XCIgPT0gWyBcIkhvd1wiLCBcImFyZVwiLCBcInlvdT9cIiwgXCJHb29kP1wiIF1cblxuLX1cbndvcmRzIDogU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xud29yZHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy53b3Jkc1xuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIGxpbmVzLCBzcGxpdHRpbmcgb24gbmV3bGluZXMuXG5cbiAgICBsaW5lcyBcIkhvdyBhcmUgeW91P1xcbkdvb2Q/XCIgPT0gWyBcIkhvdyBhcmUgeW91P1wiLCBcIkdvb2Q/XCIgXVxuXG4tfVxubGluZXMgOiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5saW5lcyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmxpbmVzXG5cblxuXG4tLSBTVUJTVFJJTkdTXG5cblxuey18IFRha2UgYSBzdWJzdHJpbmcgZ2l2ZW4gYSBzdGFydCBhbmQgZW5kIGluZGV4LiBOZWdhdGl2ZSBpbmRleGVzXG5hcmUgdGFrZW4gc3RhcnRpbmcgZnJvbSB0aGUgX2VuZF8gb2YgdGhlIGFycmF5LlxuXG4gICAgc2xpY2UgNyA5IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJvblwiXG5cbiAgICBzbGljZSAwIDYgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcInNuYWtlc1wiXG5cbiAgICBzbGljZSAwIC03IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJzbmFrZXMgb24gYVwiXG5cbiAgICBzbGljZSAtNiAtMSBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwicGxhbmVcIlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnNsaWNlID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuc2xpY2VcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGZpcnN0IF9uXyBjaGFyYWN0ZXJzLiBJZiBfbl8gaXMgbGFyZ2VyIHRoYW5cbnRoZSBsZW5ndGggb2YgdGhlIHN0cmluZywgdGhlbiB0aGUgc3RyaW5nIGlzIHJldHVybmVkIGFzIGlzLlxuXG4gICAgdGFrZUZpcnN0IDIgXCJNdWxkZXJcIiA9PSBcIk11XCJcblxuICAgIHRha2VGaXJzdCA4IFwiTXVsZGVyXCIgPT0gXCJNdWxkZXJcIlxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnRha2VGaXJzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBcIlwiXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgbiBzdHJpbmdcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGxhc3QgX25fIGNoYXJhY3RlcnMuIElmIF9uXyBpcyBsYXJnZXIgdGhhblxudGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLCB0aGVuIHRoZSBzdHJpbmcgaXMgcmV0dXJuZWQgYXMgaXMuXG5cbiAgICB0YWtlTGFzdCAyIFwiU2N1bGx5XCIgPT0gXCJseVwiXG5cbiAgICB0YWtlTGFzdCA4IFwiU2N1bGx5XCIgPT0gXCJTY3VsbHlcIlxuXG4tfVxudGFrZUxhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xudGFrZUxhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgXCJcIlxuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSAtbiAodW5pdExlbmd0aCBzdHJpbmcpIHN0cmluZ1xuXG5cbnstfCBEcm9wIHRoZSBmaXJzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BGaXJzdCAyIFwiVGhlIExvbmUgR3VubWVuXCIgPT0gXCJlIExvbmUgR3VubWVuXCJcblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5kcm9wRmlyc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIG4gKHVuaXRMZW5ndGggc3RyaW5nKSBzdHJpbmdcblxuXG57LXwgRHJvcCB0aGUgbGFzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BMYXN0IDIgXCJDaWdhcmV0dGUgU21va2luZyBNYW5cIiA9PSBcIkNpZ2FyZXR0ZSBTbW9raW5nIE1cIlxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuZHJvcExhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgLW4gc3RyaW5nXG5cblxuXG4tLSBERVRFQ1QgU1VCU1RSSU5HU1xuXG5cbnstfCBTZWUgaWYgdGhlIHNlY29uZCBzdHJpbmcgY29udGFpbnMgdGhlIGZpcnN0IG9uZS5cblxuICAgIGNvbnRhaW5zIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBjb250YWlucyBcImhhdFwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuICAgIGNvbnRhaW5zIFwiVEhFXCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuY29udGFpbnMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmNvbnRhaW5zID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuY29udGFpbnNcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBvbmUuXG5cbiAgICBzdGFydHNXaXRoIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBzdGFydHNXaXRoIFwib3J5XCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuc3RhcnRzV2l0aCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQm9vbFxuc3RhcnRzV2l0aCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnN0YXJ0c1dpdGhcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIGVuZHMgd2l0aCB0aGUgZmlyc3Qgb25lLlxuXG4gICAgZW5kc1dpdGggXCJ0aGVcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbiAgICBlbmRzV2l0aCBcIm9yeVwiIFwidGhlb3J5XCIgPT0gVHJ1ZVxuXG4tfVxuZW5kc1dpdGggOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmVuZHNXaXRoID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZW5kc1dpdGhcblxuXG57LXwgRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyB3aXRoaW4gdGhlIHNlY29uZCBvbmUsIGlmIGl0J3MgdGhlcmUuXG5cbiAgICBpbmRleE9mIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBKdXN0IDBcblxuICAgIGluZGV4T2YgXCJvcnlcIiBcInRoZW9yeVwiID09IEp1c3QgM1xuICAgIFxuICAgIGluZGV4T2YgXCJhXCIgXCJ0aGVvcnlcIiA9PSBOb3RoaW5nXG5cbi19XG5maXJzdEluZGV4T2YgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIEludFxuZmlyc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhPZlxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZSBmaXJzdCBzdHJpbmcgd2l0aGluIHRoZSBzZWNvbmQgb25lLCBpZiBpdCdzIHRoZXJlLlxuXG4gICAgbGFzdEluZGV4T2YgXCJhYnJhXCIgXCJhYnJhY2FkYWJyYVwiID09IEp1c3QgN1xuXG4gICAgbGFzdEluZGV4T2YgXCJiYXJiXCIgXCJhYnJhY2FkYWJyYVwiID09IE5vdGhpbmdcblxuLX1cbmxhc3RJbmRleE9mIDogU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBJbnRcbmxhc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcubGFzdEluZGV4T2ZcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUgaW5kaWNlcyBmb3IgYSBzdWJzdHJpbmcgaW4gYW5vdGhlciBzdHJpbmcuXG5cbiAgICBpbmRleGVzIFwiaVwiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDEsIDQsIDcsIDEwIF1cblxuICAgIGluZGV4ZXMgXCJzc1wiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDIsIDUgXVxuXG4gICAgaW5kZXhlcyBcIm5lZWRsZVwiIFwiaGF5c3RhY2tcIiA9PSBbXVxuXG4tfVxuaW5kaWNlcyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgSW50XG5pbmRpY2VzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhlc1xuXG5cblxuLS0gRk9STUFUVElOR1xuXG5cbnstfCBDb252ZXJ0IGEgc3RyaW5nIHRvIGFsbCB1cHBlciBjYXNlLiBVc2VmdWwgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbnNcbmFuZCBWSVJUVUFMIFlFTExJTkcuXG5cbiAgICB0b1VwcGVyIFwic2tpbm5lclwiID09IFwiU0tJTk5FUlwiXG5cbi19XG50b1VwcGVyIDogU3RyaW5nIC0+IFN0cmluZ1xudG9VcHBlciA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvVXBwZXJcblxuXG57LXwgQ29udmVydCBhIHN0cmluZyB0byBhbGwgbG93ZXIgY2FzZS4gVXNlZnVsIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25zLlxuXG4gICAgdG9Mb3dlciBcIlgtRklMRVNcIiA9PSBcIngtZmlsZXNcIlxuXG4tfVxudG9Mb3dlciA6IFN0cmluZyAtPiBTdHJpbmdcbnRvTG93ZXIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0xvd2VyXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiBib3RoIHNpZGVzIHVudGlsIGl0IGhhcyBhIGdpdmVuIGxlbmd0aC5cblxuICAgIHBhZCA1ICcgJyBcIjFcIiA9PSBcIiAgMSAgXCJcblxuICAgIHBhZCA1ICcgJyBcIjExXCIgPT0gXCIgIDExIFwiXG5cbiAgICBwYWQgNSAnICcgXCIxMjFcIiA9PSBcIiAxMjEgXCJcblxuLX1cbnBhZCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZCBuIGNoYXIgc3RyaW5nID1cbiAgICBsZXRcbiAgICAgICAgaGFsZiA9XG4gICAgICAgICAgICBCYXNpY3MudG9GbG9hdCAobiAtIGNvdW50IHN0cmluZykgLyAyXG4gICAgaW5cbiAgICByZXBlYXQgKGNlaWxpbmcgaGFsZikgKGZyb21DaGFyIGNoYXIpICsrIHN0cmluZyArKyByZXBlYXQgKGZsb29yIGhhbGYpIChmcm9tQ2hhciBjaGFyKVxuXG5cbnstfCBQYWQgYSBzdHJpbmcgb24gdGhlIGxlZnQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjFcIiA9PSBcIi4uLi4xXCJcblxuICAgIHBhZExlZnQgNSAnLicgXCIxMVwiID09IFwiLi4uMTFcIlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjEyMVwiID09IFwiLi4xMjFcIlxuXG4tfVxucGFkTGVmdCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZExlZnQgbiBjaGFyIHN0cmluZyA9XG4gICAgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcikgKysgc3RyaW5nXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiB0aGUgcmlnaHQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkUmlnaHQgNSAnLicgXCIxXCIgPT0gXCIxLi4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjExXCIgPT0gXCIxMS4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjEyMVwiID09IFwiMTIxLi5cIlxuXG4tfVxucGFkUmlnaHQgOiBJbnQgLT4gQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wYWRSaWdodCBuIGNoYXIgc3RyaW5nID1cbiAgICBzdHJpbmcgKysgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcilcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIGJvdGggc2lkZXMgb2YgYSBzdHJpbmcuXG5cbiAgICB0cmltIFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHNcIlxuXG4tfVxudHJpbSA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW0gPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50cmltXG5cblxuey18IEdldCByaWQgb2Ygd2hpdGVzcGFjZSBvbiB0aGUgbGVmdCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1MZWZ0IFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHMgIFxcblwiXG5cbi19XG50cmltTGVmdCA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW1MZWZ0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbUxlZnRcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIHRoZSByaWdodCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1SaWdodCBcIiAgaGF0cyAgXFxuXCIgPT0gXCIgIGhhdHNcIlxuXG4tfVxudHJpbVJpZ2h0IDogU3RyaW5nIC0+IFN0cmluZ1xudHJpbVJpZ2h0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbVJpZ2h0XG5cblxuXG4tLSBJTlQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhbiBpbnQsIGZhaWxpbmcgb24gaW1wcm9wZXJseSBmb3JtYXR0ZWQgc3RyaW5ncy5cblxuICAgIFN0cmluZy50b0ludCBcIjEyM1wiID09IEp1c3QgMTIzXG5cbiAgICBTdHJpbmcudG9JbnQgXCItNDJcIiA9PSBKdXN0IC00MlxuXG4gICAgU3RyaW5nLnRvSW50IFwiMy4xXCIgPT0gTm90aGluZ1xuXG4gICAgU3RyaW5nLnRvSW50IFwiMzFhXCIgPT0gTm90aGluZ1xuXG5JZiB5b3UgYXJlIGV4dHJhY3RpbmcgYSBudW1iZXIgZnJvbSBzb21lIHJhdyB1c2VyIGlucHV0LCB5b3Ugd2lsbCB0eXBpY2FsbHlcbndhbnQgdG8gdXNlIFtgTWF5YmUud2l0aERlZmF1bHRgXShNYXliZSN3aXRoRGVmYXVsdCkgdG8gaGFuZGxlIGJhZCBkYXRhOlxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvSW50IFwiNDJcIikgPT0gNDJcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0ludCBcImFiXCIpID09IDBcblxuLX1cbnRvSW50IDogU3RyaW5nIC0+IE1heWJlIEludFxudG9JbnQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0ludFxuXG5cbnstfCBDb252ZXJ0IGFuIGBJbnRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUludCAxMjMgPT0gXCIxMjNcIlxuXG4gICAgU3RyaW5nLmZyb21JbnQgLTQyID09IFwiLTQyXCJcblxuQ2hlY2sgb3V0IFtgRGVidWcudG9TdHJpbmdgXShEZWJ1ZyN0b1N0cmluZykgdG8gY29udmVydCBfYW55XyB2YWx1ZSB0byBhIHN0cmluZ1xuZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cblxuLX1cbmZyb21JbnQgOiBJbnQgLT4gU3RyaW5nXG5mcm9tSW50ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbU51bWJlclxuXG5cblxuLS0gRkxPQVQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZsb2F0LCBmYWlsaW5nIG9uIGltcHJvcGVybHkgZm9ybWF0dGVkIHN0cmluZ3MuXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIjEyM1wiID09IEp1c3QgMTIzLjBcblxuICAgIFN0cmluZy50b0Zsb2F0IFwiLTQyXCIgPT0gSnVzdCAtNDIuMFxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzLjFcIiA9PSBKdXN0IDMuMVxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzMWFcIiA9PSBOb3RoaW5nXG5cbklmIHlvdSBhcmUgZXh0cmFjdGluZyBhIG51bWJlciBmcm9tIHNvbWUgcmF3IHVzZXIgaW5wdXQsIHlvdSB3aWxsIHR5cGljYWxseVxud2FudCB0byB1c2UgW2BNYXliZS53aXRoRGVmYXVsdGBdKE1heWJlI3dpdGhEZWZhdWx0KSB0byBoYW5kbGUgYmFkIGRhdGE6XG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9GbG9hdCBcIjQyLjVcIikgPT0gNDIuNVxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvRmxvYXQgXCJjYXRzXCIpID09IDBcblxuLX1cbnRvRmxvYXQgOiBTdHJpbmcgLT4gTWF5YmUgRmxvYXRcbnRvRmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0Zsb2F0XG5cblxuey18IENvbnZlcnQgYSBgRmxvYXRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDEyMyA9PSBcIjEyM1wiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IC00MiA9PSBcIi00MlwiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDMuOSA9PSBcIjMuOVwiXG5cbkNoZWNrIG91dCBbYERlYnVnLnRvU3RyaW5nYF0oRGVidWcjdG9TdHJpbmcpIHRvIGNvbnZlcnQgX2FueV8gdmFsdWUgdG8gYSBzdHJpbmdcbmZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG5cbi19XG5mcm9tRmxvYXQgOiBGbG9hdCAtPiBTdHJpbmdcbmZyb21GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZyb21OdW1iZXJcblxuXG5cbi0tIEFSUkFZIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgY2hhcmFjdGVycy5cblxuICAgIHRvQXJyYXkgXCJhYmNcIiA9PSBbICdhJywgJ2InLCAnYycgXVxuXG4gICAgdG9BcnJheSBcIvCfmYjwn5mJ8J+ZilwiID09IFsgJ/CfmYgnLCAn8J+ZiScsICfwn5mKJyBdXG5cbi19XG50b0FycmF5IDogU3RyaW5nIC0+IEFycmF5IENoYXJcbnRvQXJyYXkgc3RyaW5nID1cbiAgICBmb2xkbCBBcnJheS5wdXNoTGFzdCBbXSBzdHJpbmdcblxuXG57LXwgQ29udmVydCBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBTdHJpbmcuXG4gICAgXG4gICAgZnJvbUFycmF5IFsgJ2EnLCAnYicsICdjJyBdID09IFwiYWJjXCJcblxuICAgIGZyb21BcnJheSBbICfwn5mIJywgJ/CfmYknLCAn8J+ZiicgXSA9PSBcIvCfmYjwn5mJ8J+ZilwiXG5cbi19XG5mcm9tQXJyYXkgOiBBcnJheSBDaGFyIC0+IFN0cmluZ1xuZnJvbUFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbUFycmF5XG5cblxuXG4tLSBDSEFSIENPTlZFUlNJT05TXG5cblxuey18IENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgZ2l2ZW4gY2hhcmFjdGVyLlxuXG4gICAgZnJvbUNoYXIgJ2EnID09IFwiYVwiXG5cbi19XG5mcm9tQ2hhciA6IENoYXIgLT4gU3RyaW5nXG5mcm9tQ2hhciBjaGFyID1cbiAgICBwdXNoRmlyc3QgY2hhciBcIlwiXG5cblxuey18IEFkZCBhIGNoYXJhY3RlciB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc3RyaW5nLlxuXG4gICAgcHVzaEZpcnN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiVGhlIHRydXRoIGlzIG91dCB0aGVyZVwiXG5cbi19XG5wdXNoRmlyc3QgOiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnB1c2hGaXJzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnB1c2hGaXJzdFxuXG5cbnstfCBBZGQgYSBjaGFyYWN0ZXIgdG8gdGhlIGVuZCBvZiBhIHN0cmluZy5cblxuICAgIHB1c2hMYXN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiaGUgdHJ1dGggaXMgb3V0IHRoZXJlVFwiXG5cbi19XG5wdXNoTGFzdCA6IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucHVzaExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wdXNoTGFzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgZmlyc3QgY2hhcmFjdGVyIGFuZCBpdHMgcmVtYWluaW5nIGNoYXJhY3RlcnMuIFRoaXMgbGV0cyB5b3VcbnBhdHRlcm4gbWF0Y2ggb24gc3RyaW5ncyBleGFjdGx5IGFzIHlvdSB3b3VsZCB3aXRoIGFycmF5cy5cblxuICAgIHBvcEZpcnN0IFwiYWJjXCIgPT0gSnVzdCB7IGZpcnN0ID0gJ2EnLCByZXN0ID0gXCJiY1wiIH1cblxuICAgIHBvcEZpcnN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wRmlyc3QgOiBTdHJpbmcgLT4gTWF5YmUgeyBmaXJzdCA6IENoYXIsIHJlc3QgOiBTdHJpbmcgfVxucG9wRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BGaXJzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgbGFzdCBjaGFyYWN0ZXIgYW5kIGl0cyByZW1haW5pbmcgY2hhcmFjdGVycy4gVGhpcyBsZXRzIHlvdVxucGF0dGVybiBtYXRjaCBvbiBzdHJpbmdzIGV4YWN0bHkgYXMgeW91IHdvdWxkIHdpdGggYXJyYXlzLlxuXG4gICAgcG9wTGFzdCBcImFiY1wiID09IEp1c3QgeyBmaXJzdCA9ICdjJywgcmVzdCA9IFwiYWJcIiB9XG5cbiAgICBwb3BMYXN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wTGFzdCA6IFN0cmluZyAtPiBNYXliZSB7IGxhc3QgOiBDaGFyLCByZXN0IDogU3RyaW5nIH1cbnBvcExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BMYXN0XG5cblxuLS0gSElHSEVSLU9SREVSIEZVTkNUSU9OU1xuXG5cbnstfCBUcmFuc2Zvcm0gZXZlcnkgY2hhcmFjdGVyIGluIGEgc3RyaW5nXG5cbiAgICBtYXBcbiAgICAgICAgKFxcYyAtPlxuICAgICAgICAgICAgaWYgYyA9PSAnLycgdGhlblxuICAgICAgICAgICAgICAgICcuJ1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY1xuICAgICAgICApXG4gICAgICAgIFwiYS9iL2NcIlxuICAgICAgICA9PSBcImEuYi5jXCJcblxuLX1cbm1hcCA6IChDaGFyIC0+IENoYXIpIC0+IFN0cmluZyAtPiBTdHJpbmdcbm1hcCBmbiBzdHIgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGNoYXIgYWNjIC0+XG4gICAgICAgICAgICBwdXNoTGFzdCAoZm4gY2hhcikgYWNjXG4gICAgICAgIClcbiAgICAgICAgXCJcIlxuICAgICAgICBzdHJcblxuXG57LXwgS2VlcCBvbmx5IHRoZSBjaGFyYWN0ZXJzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiBpc0RpZ2l0IFwiUjItRDJcIiA9PSBcIjIyXCJcblxuLX1cbmtlZXBJZiA6IChDaGFyIC0+IEJvb2wpIC0+IFN0cmluZyAtPiBTdHJpbmdcbmtlZXBJZiBpc0dvb2Qgc3RyID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxjaGFyIGFjYyAtPlxuICAgICAgICAgICAgaWYgaXNHb29kIGNoYXIgdGhlblxuICAgICAgICAgICAgICAgIHB1c2hMYXN0IGNoYXIgYWNjXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhY2NcbiAgICAgICAgKVxuICAgICAgICBcIlwiXG4gICAgICAgIHN0clxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgYmVnaW5uaW5nLlxuXG4gICAgZm9sZGwgY29ucyBcIlwiIFwidGltZVwiID09IFwiZW1pdFwiXG5cbi19XG5mb2xkbCA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZGwgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgZW5kLlxuXG4gICAgZm9sZHIgY29ucyBcIlwiIFwidGltZVwiID09IFwidGltZVwiXG5cbi19XG5mb2xkciA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYW55XyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbnkgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYW55IGlzRGlnaXQgXCJSMi1EMlwiID09IFRydWVcblxuICAgIGFueSBpc0RpZ2l0IFwiaGVhcnRcIiA9PSBGYWxzZVxuXG4gICAgYW55IGlzRGlnaXQgXCJcIiA9PSBGYWxzZVxuXG4tfVxuYW55IDogKENoYXIgLT4gQm9vbCkgLT4gU3RyaW5nIC0+IEJvb2xcbmFueSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmFueVxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYWxsXyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbGwgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYWxsIGlzRGlnaXQgXCJSMi1EMlwiID09IEZhbHNlXG5cbiAgICBhbGwgaXNEaWdpdCBcImhlYXJ0XCIgPT0gRmFsc2VcblxuICAgIGFsbCBpc0RpZ2l0IFwiXCIgPSBUcnVlXG5cbi19XG5hbGwgOiAoQ2hhciAtPiBCb29sKSAtPiBTdHJpbmcgLT4gQm9vbFxuYWxsIGlzR29vZCBzdHIgPVxuICAgIG5vdCAoYW55IChub3QgPDwgaXNHb29kKSBzdHIpXG5cblxuLS0gVU5JVFNcblxuXG57LXwgR2V0IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVyIHVuaXRzIGluIGEgc3RyaW5nLiBBcyBzdHJpbmdzIGFyZSwgZXNzZW50aWFsbHksXG5hcnJheXMgb2YgY2hhcmFjdGVyIHVuaXRzLCB0aGlzIGlzIGEgY29uc3RhbnQgdGltZSBvcGVyYXRpb24uXG4tfVxudW5pdExlbmd0aCA6IFN0cmluZyAtPiBJbnRcbnVuaXRMZW5ndGggPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy51bml0TGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBjaGFyYWN0ZXIgdW5pdCBhdCBhIGdpdmVuIGluZGV4LCBvciBgTm90aGluZ2AgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5BIG5lZ2F0aXZlIGluZGV4IHVzZXMgdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGFzIHRoZSBzdGFydGluZyBwb2ludC5cblxuICAgIGdldFVuaXQgMSBcImFiY1wiID09IEp1c3QgJ2EnXG4gICAgXG4gICAgZ2V0VW5pdCAxMCBcImFiY1wiID09IE5vdGhpbmdcbiAgICBcbiAgICBnZXRVbml0IC0xIFwiYWJjXCIgPT0gSnVzdCAnYydcblxuLX1cbmdldFVuaXQgOiBJbnQgLT4gU3RyaW5nIC0+IE1heWJlIENoYXJcbmdldFVuaXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5nZXRVbml0XG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBiZWdpbm5pbmcuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZGxVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcImVtaXRcIlxuLX1cbmZvbGRsVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRsVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFVuaXRzXG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBlbmQuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZHJVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcInRpbWVcIlxuLX1cbmZvbGRyVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRyVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclVuaXRzXG4iLAogICAgICAgICJtb2R1bGUgSnNvbi5FbmNvZGUgZXhwb3NpbmdcbiAgICAoIGVuY29kZSwgVmFsdWVcbiAgICAsIHN0cmluZywgaW50LCBmbG9hdCwgYm9vbCwgbnVsbFxuICAgICwgYXJyYXksIHNldFxuICAgICwgb2JqZWN0LCBkaWN0XG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB0dXJuaW5nIEdyZW4gdmFsdWVzIGludG8gSnNvbiB2YWx1ZXMuXG5cblxuQGRvY3MgZW5jb2RlLCBWYWx1ZVxuXG5cbiMjIFByaW1pdGl2ZXNcblxuQGRvY3Mgc3RyaW5nLCBpbnQsIGZsb2F0LCBib29sLCBudWxsXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIGFycmF5LCBzZXRcblxuXG4jIyBPYmplY3RzXG5cbkBkb2NzIG9iamVjdCwgZGljdFxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcbmltcG9ydCBTZXQgZXhwb3NpbmcgKFNldClcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5cblxuXG4tLSBFTkNPREVcblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBWYWx1ZVxuICAgID0gVmFsdWVcblxuXG57LXwgQ29udmVydCBhIGBWYWx1ZWAgaW50byBhIHByZXR0aWZpZWQgc3RyaW5nLiBUaGUgZmlyc3QgYXJndW1lbnQgc3BlY2lmaWVzXG50aGUgYW1vdW50IG9mIGluZGVudGF0aW9uIGluIHRoZSByZXN1bHRpbmcgc3RyaW5nLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgdG9tIDogRW5jb2RlLlZhbHVlXG4gICAgdG9tID1cbiAgICAgICAgRW5jb2RlLm9iamVjdFxuICAgICAgICAgICAgWyB7IGtleSA9IFwibmFtZVwiLCB2YWx1ZSA9IEVuY29kZS5zdHJpbmcgXCJUb21cIiB9XG4gICAgICAgICAgICAsIHsga2V5ID0gXCJhZ2VcIiwgdmFsdWUgPSBFbmNvZGUuaW50IDQyIClcbiAgICAgICAgICAgIF1cblxuICAgIGNvbXBhY3QgPVxuICAgICAgICBFbmNvZGUuZW5jb2RlIDAgdG9tXG5cbiAgICAtLSB7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVxuICAgIHJlYWRhYmxlID1cbiAgICAgICAgRW5jb2RlLmVuY29kZSA0IHRvbVxuXG4gICAgLS0ge1xuICAgIC0tICAgICBcIm5hbWVcIjogXCJUb21cIixcbiAgICAtLSAgICAgXCJhZ2VcIjogNDJcbiAgICAtLSB9XG5cbi19XG5lbmNvZGUgOiBJbnQgLT4gVmFsdWUgLT4gU3RyaW5nXG5lbmNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZW5jb2RlXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IFR1cm4gYSBgU3RyaW5nYCBpbnRvIGEgSlNPTiBzdHJpbmcuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgc3RyaW5nKVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoc3RyaW5nIFwiXCIpICAgICAgPT0gXCJcXFwiXFxcIlwiXG4gICAgLS0gZW5jb2RlIDAgKHN0cmluZyBcImFiY1wiKSAgID09IFwiXFxcImFiY1xcXCJcIlxuICAgIC0tIGVuY29kZSAwIChzdHJpbmcgXCJoZWxsb1wiKSA9PSBcIlxcXCJoZWxsb1xcXCJcIlxuXG4tfVxuc3RyaW5nIDogU3RyaW5nIC0+IFZhbHVlXG5zdHJpbmcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cbnstfCBUdXJuIGFuIGBJbnRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBpbnQpXG5cblxuICAgIC0tIGVuY29kZSAwIChpbnQgNDIpID09IFwiNDJcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgLTcpID09IFwiLTdcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgMCkgID09IFwiMFwiXG5cbi19XG5pbnQgOiBJbnQgLT4gVmFsdWVcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuey18IFR1cm4gYSBgRmxvYXRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBmbG9hdClcblxuXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IDMuMTQpICAgICA9PSBcIjMuMTRcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCAxLjYxOCkgICAgPT0gXCIxLjYxOFwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IC00MikgICAgICA9PSBcIi00MlwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IE5hTikgICAgICA9PSBcIm51bGxcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCBJbmZpbml0eSkgPT0gXCJudWxsXCJcblxuKipOb3RlOioqIEZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIGRlZmluZWQgaW4gdGhlIFtJRUVFIDc1NCBzdGFuZGFyZF1baWVlZV1cbndoaWNoIGlzIGhhcmRjb2RlZCBpbnRvIGFsbW9zdCBhbGwgQ1BVcy4gVGhpcyBzdGFuZGFyZCBhbGxvd3MgYEluZmluaXR5YCBhbmRcbmBOYU5gLiBbVGhlIEpTT04gc3BlY11banNvbl0gZG9lcyBub3QgaW5jbHVkZSB0aGVzZSB2YWx1ZXMsIHNvIHdlIGVuY29kZSB0aGVtXG5ib3RoIGFzIGBudWxsYC5cblxuW2llZWVdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JRUVFXzc1NFxuW2pzb25dOiBodHRwczovL3d3dy5qc29uLm9yZy9cblxuLX1cbmZsb2F0IDogRmxvYXQgLT4gVmFsdWVcbmZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG57LXwgVHVybiBhIGBCb29sYCBpbnRvIGEgSlNPTiBib29sZWFuLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChib29sLCBlbmNvZGUpXG5cblxuICAgIC0tIGVuY29kZSAwIChib29sIFRydWUpICA9PSBcInRydWVcIlxuICAgIC0tIGVuY29kZSAwIChib29sIEZhbHNlKSA9PSBcImZhbHNlXCJcblxuLX1cbmJvb2wgOiBCb29sIC0+IFZhbHVlXG5ib29sID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG5cbi0tIE5VTExTXG5cblxuey18IENyZWF0ZSBhIEpTT04gYG51bGxgIHZhbHVlLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIG51bGwpXG5cblxuICAgIC0tIGVuY29kZSAwIG51bGwgPT0gXCJudWxsXCJcblxuLX1cbm51bGwgOiBWYWx1ZVxubnVsbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5lbmNvZGVOdWxsXG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgVHVybiBhIGBBcnJheWAgaW50byBhIEpTT04gYXJyYXkuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlIGV4cG9zaW5nIChhcnJheSwgYm9vbCwgZW5jb2RlLCBpbnQsIHN0cmluZylcblxuXG4gICAgLS0gZW5jb2RlIDAgKGFycmF5IGludCBbMSwzLDRdKSAgICAgICA9PSBcIlsxLDMsNF1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBib29sIFtUcnVlLEZhbHNlXSkgPT0gXCJbdHJ1ZSxmYWxzZV1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBzdHJpbmcgW1wiYVwiLFwiYlwiXSkgID09IFwiXCJcIltcImFcIixcImJcIl1cIlwiXCJcblxuLX1cbmFycmF5IDogKGEgLT4gVmFsdWUpIC0+IEFycmF5IGEgLT4gVmFsdWVcbmFycmF5IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChBcnJheS5mb2xkbCAoR3Jlbi5LZXJuZWwuSnNvbi5hZGRFbnRyeSBmdW5jKSAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eUFycmF5IHt9KSBlbnRyaWVzKVxuXG5cbnstfCBUdXJuIGFuIGBTZXRgIGludG8gYSBKU09OIGFycmF5LlxuLX1cbnNldCA6IChhIC0+IFZhbHVlKSAtPiBTZXQgYSAtPiBWYWx1ZVxuc2V0IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChTZXQuZm9sZGwgKEdyZW4uS2VybmVsLkpzb24uYWRkRW50cnkgZnVuYykgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlBcnJheSB7fSkgZW50cmllcylcblxuXG5cbi0tIE9CSkVDVFNcblxuXG57LXwgQ3JlYXRlIGEgSlNPTiBvYmplY3QuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICB0b20gOiBFbmNvZGUuVmFsdWVcbiAgICB0b20gPVxuICAgICAgICBFbmNvZGUub2JqZWN0XG4gICAgICAgICAgICBbIHsga2V5ID0gXCJuYW1lXCIsIHZhbHVlID0gRW5jb2RlLnN0cmluZyBcIlRvbVwiIH1cbiAgICAgICAgICAgICwgeyBrZXkgPSBcImFnZVwiLCB2YWx1ZSA9IEVuY29kZS5pbnQgNDIgfVxuICAgICAgICAgICAgXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIHRvbSA9PSBcIlwiXCJ7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVwiXCJcIlxuXG4tfVxub2JqZWN0IDogQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfSAtPiBWYWx1ZVxub2JqZWN0IHBhaXJzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKEFycmF5LmZvbGRsXG4gICAgICAgICAgICAoXFx7IGtleSwgdmFsdWUgfSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCBrZXkgdmFsdWUgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBwYWlyc1xuICAgICAgICApXG5cblxuey18IFR1cm4gYSBgRGljdGAgaW50byBhIEpTT04gb2JqZWN0LlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgcGVvcGxlIDogRGljdCBTdHJpbmcgSW50XG4gICAgcGVvcGxlID1cbiAgICAgICAgRGljdC5mcm9tQXJyYXkgWyB7IGtleSA9IFwiVG9tXCIsIHZhbHVlID0gNDIgfSwgeyBrZXkgPSBcIlN1ZVwiLCB2YWx1ZSA9IDM4IH0gXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIChFbmNvZGUuZGljdCBpZGVudGl0eSBFbmNvZGUuaW50IHBlb3BsZSlcbiAgICAtLSAgID09IFwiXCJcIntcIlRvbVwiOjQyLFwiU3VlXCI6Mzh9XCJcIlwiXG5cbi19XG5kaWN0IDogKGsgLT4gU3RyaW5nKSAtPiAodiAtPiBWYWx1ZSkgLT4gRGljdCBrIHYgLT4gVmFsdWVcbmRpY3QgdG9LZXkgdG9WYWx1ZSBkaWN0aW9uYXJ5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKERpY3QuZm9sZGxcbiAgICAgICAgICAgIChcXGtleSB2YWx1ZSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCAodG9LZXkga2V5KSAodG9WYWx1ZSB2YWx1ZSkgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBkaWN0aW9uYXJ5XG4gICAgICAgIClcbiIsCiAgICAgICAgIm1vZHVsZSBKc29uLkRlY29kZSBleHBvc2luZ1xuICAgICggRGVjb2Rlciwgc3RyaW5nLCBib29sLCBpbnQsIGZsb2F0XG4gICAgLCBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuICAgICwgZmllbGQsIGF0LCBpbmRleFxuICAgICwgbWF5YmUsIG9uZU9mXG4gICAgLCBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IoLi4pLCBlcnJvclRvU3RyaW5nXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIG1hcDYsIG1hcDcsIG1hcDhcbiAgICAsIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG4gICAgKVxuXG57LXwgVHVybiBKU09OIHZhbHVlcyBpbnRvIEdyZW4gdmFsdWVzLiBXZSd2ZSBpbmhlcml0ZWQgdGhpcyBmcm9tIEVsbS4gRGVmaW5pdGVseSBjaGVjayBvdXQgdGhpcyBbaW50cm8gdG9cbkpTT04gZGVjb2RlcnNdW2d1aWRlXSB0byBnZXQgYSBmZWVsIGZvciBob3cgdGhpcyBsaWJyYXJ5IHdvcmtzIVxuXG5bZ3VpZGVdOiBodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9lZmZlY3RzL2pzb24uaHRtbFxuXG5cbkBkb2NzIERlY29kZXIsIHN0cmluZywgYm9vbCwgaW50LCBmbG9hdFxuXG5cbiMjIERhdGEgU3RydWN0dXJlc1xuXG5AZG9jcyBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuXG5cbiMjIE9iamVjdCBQcmltaXRpdmVzXG5cbkBkb2NzIGZpZWxkLCBhdCwgaW5kZXhcblxuXG4jIyBJbmNvbnNpc3RlbnQgU3RydWN0dXJlXG5cbkBkb2NzIG1heWJlLCBvbmVPZlxuXG5cbiMjIFJ1biBEZWNvZGVyc1xuXG5AZG9jcyBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IsIGVycm9yVG9TdHJpbmdcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgbWFwNiwgbWFwNywgbWFwOFxuXG5cbiMjIEZhbmN5IERlY29kaW5nXG5cbkBkb2NzIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuaW1wb3J0IENoYXJcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5pbXBvcnQgSnNvbi5FbmNvZGVcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgQSB2YWx1ZSB0aGF0IGtub3dzIGhvdyB0byBkZWNvZGUgSlNPTiB2YWx1ZXMuXG5cblRoZXJlIGlzIGEgd2hvbGUgc2VjdGlvbiBpbiBgZ3VpZGUuZWxtLWxhbmcub3JnYCBhYm91dCBkZWNvZGVycywgc28gW2NoZWNrIGl0XG5vdXRdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2ludGVyb3AvanNvbi5odG1sKSBmb3IgYSBtb3JlIGNvbXByZWhlbnNpdmVcbmludHJvZHVjdGlvbiFcblxuLX1cbnR5cGUgRGVjb2RlciBhXG4gICAgPSBEZWNvZGVyXG5cblxuey18IERlY29kZSBhIEpTT04gc3RyaW5nIGludG8gYW4gR3JlbiBgU3RyaW5nYC5cblxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBPayBcImhlbGxvXCJcbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuc3RyaW5nIDogRGVjb2RlciBTdHJpbmdcbnN0cmluZyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVTdHJpbmdcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBib29sZWFuIGludG8gYW4gR3JlbiBgQm9vbGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInRydWVcIiAgICAgICAgICAgICAgPT0gT2sgVHJ1ZVxuICAgIGRlY29kZVN0cmluZyBib29sIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCIzLjE0XCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbmJvb2wgOiBEZWNvZGVyIEJvb2xcbmJvb2wgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlQm9vbFxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG51bWJlciBpbnRvIGFuIEdyZW4gYEludGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiMy4xNFwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuaW50IDogRGVjb2RlciBJbnRcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbnRcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBudW1iZXIgaW50byBhbiBHcmVuIGBGbG9hdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCIzLjE0XCIgICAgICAgICAgICAgID09IE9rIDMuMTRcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuZmxvYXQgOiBEZWNvZGVyIEZsb2F0XG5mbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVGbG9hdFxuXG5cblxuLS0gREFUQSBTVFJVQ1RVUkVTXG5cblxuey18IERlY29kZSBhIG51bGxhYmxlIEpTT04gdmFsdWUgaW50byBhbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwiMTNcIiAgICA9PSBPayAoSnVzdCAxMylcbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCI0MlwiICAgID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcIm51bGxcIiAgPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcInRydWVcIiAgPT0gRXJyIC4uXG5cbi19XG5udWxsYWJsZSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChNYXliZSBhKVxubnVsbGFibGUgZGVjb2RlciA9XG4gICAgb25lT2ZcbiAgICAgICAgWyBudWxsIE5vdGhpbmdcbiAgICAgICAgLCBtYXAgSnVzdCBkZWNvZGVyXG4gICAgICAgIF1cblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSBpbnRvIGFuIEdyZW4gYEFycmF5YC5cblxuICAgIGRlY29kZVN0cmluZyAoYXJyYXkgaW50KSBcIlsxLDIsM11cIiA9PSBPayBbIDEsIDIsIDMgXVxuXG4gICAgZGVjb2RlU3RyaW5nIChhcnJheSBib29sKSBcIlt0cnVlLGZhbHNlXVwiID09IE9rIFsgVHJ1ZSwgRmFsc2UgXVxuXG4tfVxuYXJyYXkgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgYSlcbmFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUFycmF5XG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0IGludG8gYW4gR3JlbiBgRGljdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGRpY3QgaW50KSBcInsgXFxcImFsaWNlXFxcIjogNDIsIFxcXCJib2JcXFwiOiA5OSB9XCJcbiAgICAgICAgPT0gT2sgKERpY3QuZW1wdHkgfD4gRGljdC5zZXQgXCJhbGljZVwiIDQyIHw+IERpY3Quc2V0IFwiYm9iXCIgOTkpXG5cbklmIHlvdSBuZWVkIHRoZSBrZXlzIChsaWtlIGBcImFsaWNlXCJgIGFuZCBgXCJib2JcImApIGF2YWlsYWJsZSBpbiB0aGUgYERpY3RgXG52YWx1ZXMgYXMgd2VsbCwgSSByZWNvbW1lbmQgdXNpbmcgYSAocHJpdmF0ZSkgaW50ZXJtZWRpYXRlIGRhdGEgc3RydWN0dXJlIGxpa2VcbmBJbmZvYCBpbiB0aGlzIGV4YW1wbGU6XG5cbiAgICBtb2R1bGUgVXNlciBleHBvc2luZyAoIFVzZXIsIGRlY29kZXIgKVxuXG4gICAgaW1wb3J0IERpY3RcbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgZXhwb3NpbmcgKC4uKVxuXG4gICAgdHlwZSBhbGlhcyBVc2VyID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nXG4gICAgICAgICwgaGVpZ2h0IDogRmxvYXRcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgfVxuXG4gICAgbWFrZVVzZXIgOiBTdHJpbmcgLT4gRmxvYXQgLT4gSW50IC0+IFVzZXJcbiAgICBtYWtlVXNlciBuYW1lIGhlaWdodCBhZ2UgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgIH1cblxuICAgIGRlY29kZXIgOiBEZWNvZGVyIChEaWN0LkRpY3QgU3RyaW5nIFVzZXIpXG4gICAgZGVjb2RlciA9XG4gICAgICAgIG1hcCAoRGljdC5tYXAgaW5mb1RvVXNlcikgKGRpY3QgaW5mb0RlY29kZXIpXG5cbiAgICB0eXBlIGFsaWFzIEluZm8gPVxuICAgICAgICB7IGhlaWdodCA6IEZsb2F0XG4gICAgICAgICwgYWdlIDogSW50XG4gICAgICAgIH1cblxuICAgIG1ha2VJbmZvIDogRmxvYXQgLT4gSW50IC0+IEluZm9cbiAgICBtYWtlSW5mbyBoZWlnaHQgYWdlID1cbiAgICAgICAgeyBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgfVxuXG4gICAgaW5mb0RlY29kZXIgOiBEZWNvZGVyIEluZm9cbiAgICBpbmZvRGVjb2RlciA9XG4gICAgICAgIG1hcDIgbWFrZUluZm9cbiAgICAgICAgICAgIChmaWVsZCBcImhlaWdodFwiIGZsb2F0KVxuICAgICAgICAgICAgKGZpZWxkIFwiYWdlXCIgaW50KVxuXG4gICAgaW5mb1RvVXNlciA6IFN0cmluZyAtPiBJbmZvIC0+IFVzZXJcbiAgICBpbmZvVG9Vc2VyIG5hbWUgeyBoZWlnaHQsIGFnZSB9ID1cbiAgICAgICAgbWFrZVVzZXIgbmFtZSBoZWlnaHQgYWdlXG5cblNvIG5vdyBKU09OIGxpa2UgYHsgXCJhbGljZVwiOiB7IGhlaWdodDogMS42LCBhZ2U6IDMzIH19YCBhcmUgdHVybmVkIGludG9cbmRpY3Rpb25hcnkgdmFsdWVzIGxpa2UgYERpY3Quc2luZ2xldG9uIFwiYWxpY2VcIiAoVXNlciBcImFsaWNlXCIgMS42IDMzKWAgaWZcbnlvdSBuZWVkIHRoYXQuXG5cbi19XG5kaWN0IDogRGVjb2RlciBhIC0+IERlY29kZXIgKERpY3QgU3RyaW5nIGEpXG5kaWN0IGRlY29kZXIgPVxuICAgIG1hcCAoXFxwYWlycyAtPiBBcnJheS5mb2xkbCAoXFxwIGNvbGwgLT4gRGljdC5zZXQgcC5rZXkgcC52YWx1ZSBjb2xsKSBEaWN0LmVtcHR5IHBhaXJzKSAoa2V5VmFsdWVQYWlycyBkZWNvZGVyKVxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG9iamVjdCBpbnRvIGFuIEdyZW4gYEFycmF5YCBvZiBwYWlycy5cblxuICAgIGRlY29kZVN0cmluZyAoa2V5VmFsdWVQYWlycyBpbnQpIFwieyBcXFwiYWxpY2VcXFwiOiA0MiwgXFxcImJvYlxcXCI6IDk5IH1cIlxuICAgICAgICA9PSBPayBbIHsga2V5ID0gXCJhbGljZVwiLCB2YWx1ZSA9IDQyIH0sIHsga2V5ID0gXCJib2JcIiwgdmFsdWUgPSA5OSB9IF1cblxuLX1cbmtleVZhbHVlUGFpcnMgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogYSB9KVxua2V5VmFsdWVQYWlycyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVLZXlWYWx1ZVBhaXJzXG5cblxuey18IERlY29kZSBhIEpTT04gYXJyYXkgdGhhdCBoYXMgb25lIG9yIG1vcmUgZWxlbWVudHMuIFRoaXMgY29tZXMgdXAgaWYgeW91XG53YW50IHRvIGVuYWJsZSBkcmFnLWFuZC1kcm9wIG9mIGZpbGVzIGludG8geW91ciBhcHBsaWNhdGlvbi4gWW91IHdvdWxkIHBhaXJcbnRoaXMgZnVuY3Rpb24gd2l0aCBbYGVsbS9maWxlYF0oKSB0byB3cml0ZSBhIGBkcm9wRGVjb2RlcmAgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEZpbGUgZXhwb3NpbmcgKEZpbGUpXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlciBhcyBEXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IEdvdEZpbGVzIEZpbGUgKEFycmF5IEZpbGVzKVxuXG4gICAgaW5wdXREZWNvZGVyIDogRC5EZWNvZGVyIE1zZ1xuICAgIGlucHV0RGVjb2RlciA9XG4gICAgICAgIEQuYXQgWyBcImRhdGFUcmFuc2ZlclwiLCBcImZpbGVzXCIgXSAoRC5vbmVPck1vcmUgR290RmlsZXMgRmlsZS5kZWNvZGVyKVxuXG5UaGlzIGNhcHR1cmVzIHRoZSBmYWN0IHRoYXQgeW91IGNhbiBuZXZlciBkcmFnLWFuZC1kcm9wIHplcm8gZmlsZXMuXG5cbi19XG5vbmVPck1vcmUgOiAoYSAtPiBBcnJheSBhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlIHRvVmFsdWUgZGVjb2RlciA9XG4gICAgYXJyYXkgZGVjb2RlclxuICAgICAgICB8PiBhbmRUaGVuIChvbmVPck1vcmVIZWxwIHRvVmFsdWUpXG5cblxub25lT3JNb3JlSGVscCA6IChhIC0+IEFycmF5IGEgLT4gdmFsdWUpIC0+IEFycmF5IGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlSGVscCB0b1ZhbHVlIHhzID1cbiAgICB3aGVuIEFycmF5LmdldCAwIHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGZhaWwgXCJhIEFSUkFZIHdpdGggYXQgbGVhc3QgT05FIGVsZW1lbnRcIlxuXG4gICAgICAgIEp1c3QgeSAtPlxuICAgICAgICAgICAgc3VjY2VlZCAodG9WYWx1ZSB5IChBcnJheS5zbGljZSAxIChBcnJheS5sZW5ndGggeHMpIHhzKSlcblxuXG5cbi0tIE9CSkVDVCBQUklNSVRJVkVTXG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0LCByZXF1aXJpbmcgYSBwYXJ0aWN1bGFyIGZpZWxkLlxuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieFxcXCI6IDMgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiAzLCBcXFwieVxcXCI6IDQgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiB0cnVlIH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInlcXFwiOiA0IH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSBcInsgXFxcIm5hbWVcXFwiOiBcXFwidG9tXFxcIiB9XCJcbiAgICAgICAgPT0gT2sgXCJ0b21cIlxuXG5UaGUgb2JqZWN0IF9jYW5fIGhhdmUgb3RoZXIgZmllbGRzLiBMb3RzIG9mIHRoZW0hIFRoZSBvbmx5IHRoaW5nIHRoaXMgZGVjb2RlclxuY2FyZXMgYWJvdXQgaXMgaWYgYHhgIGlzIHByZXNlbnQgYW5kIHRoYXQgdGhlIHZhbHVlIHRoZXJlIGlzIGFuIGBJbnRgLlxuXG5DaGVjayBvdXQgW2BtYXAyYF0oI21hcDIpIHRvIHNlZSBob3cgdG8gZGVjb2RlIG11bHRpcGxlIGZpZWxkcyFcblxuLX1cbmZpZWxkIDogU3RyaW5nIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGFcbmZpZWxkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUZpZWxkXG5cblxuey18IERlY29kZSBhIG5lc3RlZCBKU09OIG9iamVjdCwgcmVxdWlyaW5nIGNlcnRhaW4gZmllbGRzLlxuXG4gICAganNvbiA9IFwiXCJcInsgXCJwZXJzb25cIjogeyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfSB9XCJcIlwiXG5cbiAgICBkZWNvZGVTdHJpbmcgKGF0IFtcInBlcnNvblwiLCBcIm5hbWVcIl0gc3RyaW5nKSBqc29uICA9PSBPayBcInRvbVwiXG4gICAgZGVjb2RlU3RyaW5nIChhdCBbXCJwZXJzb25cIiwgXCJhZ2VcIiBdIGludCAgICkganNvbiAgPT0gT2sgNDJcblxuVGhpcyBpcyByZWFsbHkganVzdCBhIHNob3J0aGFuZCBmb3Igc2F5aW5nIHRoaW5ncyBsaWtlOlxuXG4gICAgZmllbGQgXCJwZXJzb25cIiAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSA9PSBhdCBbIFwicGVyc29uXCIsIFwibmFtZVwiIF0gc3RyaW5nXG5cbi19XG5hdCA6IEFycmF5IFN0cmluZyAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5hdCBmaWVsZHMgZGVjb2RlciA9XG4gICAgQXJyYXkuZm9sZHIgZmllbGQgZGVjb2RlciBmaWVsZHNcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSwgcmVxdWlyaW5nIGEgcGFydGljdWxhciBpbmRleC5cblxuICAgIGpzb24gPSBcIlwiXCJbIFwiYWxpY2VcIiwgXCJib2JcIiwgXCJjaHVja1wiIF1cIlwiXCJcblxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMCBzdHJpbmcpIGpzb24gID09IE9rIFwiYWxpY2VcIlxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMSBzdHJpbmcpIGpzb24gID09IE9rIFwiYm9iXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDIgc3RyaW5nKSBqc29uICA9PSBPayBcImNodWNrXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDMgc3RyaW5nKSBqc29uICA9PSBFcnIgLi4uXG5cbi19XG5pbmRleCA6IEludCAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5pbmRleCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbmRleFxuXG5cblxuLS0gV0VJUkQgU1RSVUNUVVJFXG5cblxuey18IEhlbHBmdWwgZm9yIGRlYWxpbmcgd2l0aCBvcHRpb25hbCBmaWVsZHMuIEhlcmUgYXJlIGEgZmV3IHNsaWdodGx5IGRpZmZlcmVudFxuZXhhbXBsZXM6XG5cbiAgICBqc29uID0gXCJcIlwieyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfVwiXCJcIlxuXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJhZ2VcIiAgICBpbnQgICkpIGpzb24gPT0gT2sgKEp1c3QgNDIpXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJuYW1lXCIgICBpbnQgICkpIGpzb24gPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobWF5YmUgKGZpZWxkIFwiaGVpZ2h0XCIgZmxvYXQpKSBqc29uID09IE9rIE5vdGhpbmdcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJhZ2VcIiAgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIE5vdGhpbmdcbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwiaGVpZ2h0XCIgKG1heWJlIGZsb2F0KSkganNvbiA9PSBFcnIgLi4uXG5cbk5vdGljZSB0aGUgbGFzdCBleGFtcGxlISBJdCBpcyBzYXlpbmcgd2UgX211c3RfIGhhdmUgYSBmaWVsZCBuYW1lZCBgaGVpZ2h0YCBhbmRcbnRoZSBjb250ZW50IF9tYXlfIGJlIGEgZmxvYXQuIFRoZXJlIGlzIG5vIGBoZWlnaHRgIGZpZWxkLCBzbyB0aGUgZGVjb2RlciBmYWlscy5cblxuUG9pbnQgaXMsIGBtYXliZWAgd2lsbCBtYWtlIGV4YWN0bHkgd2hhdCBpdCBjb250YWlucyBjb25kaXRpb25hbC4gRm9yIG9wdGlvbmFsXG5maWVsZHMsIHRoaXMgbWVhbnMgeW91IHByb2JhYmx5IHdhbnQgaXQgX291dHNpZGVfIGEgdXNlIG9mIGBmaWVsZGAgb3IgYGF0YC5cblxuLX1cbm1heWJlIDogRGVjb2RlciBhIC0+IERlY29kZXIgKE1heWJlIGEpXG5tYXliZSBkZWNvZGVyID1cbiAgICBvbmVPZlxuICAgICAgICBbIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgLCBzdWNjZWVkIE5vdGhpbmdcbiAgICAgICAgXVxuXG5cbnstfCBUcnkgYSBidW5jaCBvZiBkaWZmZXJlbnQgZGVjb2RlcnMuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB0aGUgSlNPTiBtYXkgY29tZVxuaW4gYSBjb3VwbGUgZGlmZmVyZW50IGZvcm1hdHMuIEZvciBleGFtcGxlLCBzYXkgeW91IHdhbnQgdG8gcmVhZCBhbiBhcnJheSBvZlxubnVtYmVycywgYnV0IHNvbWUgb2YgdGhlbSBhcmUgYG51bGxgLlxuXG4gICAgaW1wb3J0IFN0cmluZ1xuXG4gICAgYmFkSW50IDogRGVjb2RlciBJbnRcbiAgICBiYWRJbnQgPVxuICAgICAgICBvbmVPZiBbIGludCwgbnVsbCAwIF1cblxuICAgIC0tIGRlY29kZVN0cmluZyAoYXJyYXkgYmFkSW50KSBcIlsxLDIsbnVsbCw0XVwiID09IE9rIFsxLDIsMCw0XVxuXG5XaHkgd291bGQgc29tZW9uZSBnZW5lcmF0ZSBKU09OIGxpa2UgdGhpcz8gUXVlc3Rpb25zIGxpa2UgdGhpcyBhcmUgbm90IGdvb2RcbmZvciB5b3VyIGhlYWx0aC4gVGhlIHBvaW50IGlzIHRoYXQgeW91IGNhbiB1c2UgYG9uZU9mYCB0byBoYW5kbGUgc2l0dWF0aW9uc1xubGlrZSB0aGlzIVxuXG5Zb3UgY291bGQgYWxzbyB1c2UgYG9uZU9mYCB0byBoZWxwIHZlcnNpb24geW91ciBkYXRhLiBUcnkgdGhlIGxhdGVzdCBmb3JtYXQsXG50aGVuIGEgZmV3IG9sZGVyIG9uZXMgdGhhdCB5b3Ugc3RpbGwgc3VwcG9ydC4gWW91IGNvdWxkIHVzZSBgYW5kVGhlbmAgdG8gYmVcbmV2ZW4gbW9yZSBwYXJ0aWN1bGFyIGlmIHlvdSB3YW50ZWQuXG5cbi19XG5vbmVPZiA6IEFycmF5IChEZWNvZGVyIGEpIC0+IERlY29kZXIgYVxub25lT2YgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ub25lT2ZcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgZGVjb2Rlci4gTWF5YmUgeW91IGp1c3Qgd2FudCB0byBrbm93IHRoZSBsZW5ndGggb2YgYSBzdHJpbmc6XG5cbiAgICBpbXBvcnQgU3RyaW5nXG5cbiAgICBzdHJpbmdMZW5ndGggOiBEZWNvZGVyIEludFxuICAgIHN0cmluZ0xlbmd0aCA9XG4gICAgICAgIG1hcCBTdHJpbmcubGVuZ3RoIHN0cmluZ1xuXG5JdCBpcyBvZnRlbiBoZWxwZnVsIHRvIHVzZSBgbWFwYCB3aXRoIGBvbmVPZmAsIGxpa2Ugd2hlbiBkZWZpbmluZyBgbnVsbGFibGVgOlxuXG4gICAgbnVsbGFibGUgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoTWF5YmUgYSlcbiAgICBudWxsYWJsZSBkZWNvZGVyID1cbiAgICAgICAgb25lT2ZcbiAgICAgICAgICAgIFsgbnVsbCBOb3RoaW5nXG4gICAgICAgICAgICAsIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcCA6IChhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxubWFwID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDFcblxuXG57LXwgVHJ5IHR3byBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQb2ludCA9XG4gICAgICAgIHsgeCA6IEZsb2F0XG4gICAgICAgICwgeSA6IEZsb2F0XG4gICAgICAgIH1cblxuICAgIG1ha2VQb2ludCA6IEZsb2F0IC0+IEZsb2F0IC0+IFBvaW50XG4gICAgbWFrZVBvaW50IHggeSA9XG4gICAgICAgIHsgeCA9IHhcbiAgICAgICAgLCB5ID0geVxuICAgICAgICB9XG5cbiAgICBwb2ludCA6IERlY29kZXIgUG9pbnRcbiAgICBwb2ludCA9XG4gICAgICAgIG1hcDIgbWFrZVBvaW50IChmaWVsZCBcInhcIiBmbG9hdCkgKGZpZWxkIFwieVwiIGZsb2F0KVxuXG4gICAgLS0gZGVjb2RlU3RyaW5nIHBvaW50IFwiXCJcInsgXCJ4XCI6IDMsIFwieVwiOiA0IH1cIlwiXCIgPT0gT2sgeyB4ID0gMywgeSA9IDQgfVxuXG5JdCB0cmllcyBlYWNoIGluZGl2aWR1YWwgZGVjb2RlciBhbmQgcHV0cyB0aGUgcmVzdWx0IHRvZ2V0aGVyIHdpdGggdGhlIGBQb2ludGBcbmNvbnN0cnVjdG9yLlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciB2YWx1ZVxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXAyXG5cblxuey18IFRyeSB0aHJlZSBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQZXJzb24gPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgaGVpZ2h0IDogRmxvYXQgfVxuXG4gICAgbWFrZVBlcnNvbiA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gUGVyc29uXG4gICAgbWFrZVBlcnNvbiBuYW1lIGFnZSBoZWlnaHQgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cblxuICAgIHBlcnNvbiA6IERlY29kZXIgUGVyc29uXG4gICAgcGVyc29uID1cbiAgICAgICAgbWFwMyBtYWtlUGVyc29uXG4gICAgICAgICAgICAoYXQgWyBcIm5hbWVcIiBdIHN0cmluZylcbiAgICAgICAgICAgIChhdCBbIFwiaW5mb1wiLCBcImFnZVwiIF0gaW50KVxuICAgICAgICAgICAgKGF0IFsgXCJpbmZvXCIsIFwiaGVpZ2h0XCIgXSBmbG9hdClcblxuICAgIC0tIGpzb24gPSBcIlwiXCJ7IFwibmFtZVwiOiBcInRvbVwiLCBcImluZm9cIjogeyBcImFnZVwiOiA0MiwgXCJoZWlnaHRcIjogMS44IH0gfVwiXCJcIlxuICAgIC0tIGRlY29kZVN0cmluZyBwZXJzb24ganNvbiA9PSBPayB7IG5hbWUgPSBcInRvbVwiLCBhZ2UgPSA0MiwgaGVpZ2h0ID0gMS44IH1cblxuTGlrZSBgbWFwMmAgaXQgdHJpZXMgZWFjaCBkZWNvZGVyIGluIG9yZGVyIGFuZCB0aGVuIGdpdmUgdGhlIHJlc3VsdHMgdG8gdGhlXG5gUGVyc29uYCBjb25zdHJ1Y3Rvci4gVGhhdCBjYW4gYmUgYW55IGZ1bmN0aW9uIHRob3VnaCFcblxuLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgdmFsdWVcbm1hcDMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwM1xuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciB2YWx1ZVxubWFwNCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA0XG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIHZhbHVlXG5tYXA1ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDVcblxuXG57LXwgLX1cbm1hcDYgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciBmIC0+IERlY29kZXIgdmFsdWVcbm1hcDYgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwNlxuXG5cbnstfCAtfVxubWFwNyA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgZiAtPiBEZWNvZGVyIGcgLT4gRGVjb2RlciB2YWx1ZVxubWFwNyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA3XG5cblxuey18IC19XG5tYXA4IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIGYgLT4gRGVjb2RlciBnIC0+IERlY29kZXIgaCAtPiBEZWNvZGVyIHZhbHVlXG5tYXA4ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDhcblxuXG5cbi0tIFJVTiBERUNPREVSU1xuXG5cbnstfCBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gYSBKU09OIHZhbHVlIGFuZCB0aGVuIHJ1biB0aGUgYERlY29kZXJgIG9uIGl0LlxuVGhpcyB3aWxsIGZhaWwgaWYgdGhlIHN0cmluZyBpcyBub3Qgd2VsbC1mb3JtZWQgSlNPTiBvciBpZiB0aGUgYERlY29kZXJgXG5mYWlscyBmb3Igc29tZSByZWFzb24uXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiNFwiICAgICA9PSBPayA0XG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjEgKyAyXCIgPT0gRXJyIC4uLlxuXG4tfVxuZGVjb2RlU3RyaW5nIDogRGVjb2RlciBhIC0+IFN0cmluZyAtPiBSZXN1bHQgRXJyb3IgYVxuZGVjb2RlU3RyaW5nID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnJ1bk9uU3RyaW5nXG5cblxuey18IFJ1biBhIGBEZWNvZGVyYCBvbiBzb21lIEpTT04gYFZhbHVlYC4gWW91IGNhbiBzZW5kIHRoZXNlIEpTT04gdmFsdWVzXG50aHJvdWdoIHBvcnRzLCBzbyB0aGF0IGlzIHByb2JhYmx5IHRoZSBtYWluIHRpbWUgeW91IHdvdWxkIHVzZSB0aGlzIGZ1bmN0aW9uLlxuLX1cbmRlY29kZVZhbHVlIDogRGVjb2RlciBhIC0+IFZhbHVlIC0+IFJlc3VsdCBFcnJvciBhXG5kZWNvZGVWYWx1ZSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5ydW5cblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBhbGlhcyBWYWx1ZSA9XG4gICAgSnNvbi5FbmNvZGUuVmFsdWVcblxuXG57LXwgQSBzdHJ1Y3R1cmVkIGVycm9yIGRlc2NyaWJpbmcgZXhhY3RseSBob3cgdGhlIGRlY29kZXIgZmFpbGVkLiBZb3UgY2FuIHVzZVxudGhpcyB0byBjcmVhdGUgbW9yZSBlbGFib3JhdGUgdmlzdWFsaXphdGlvbnMgb2YgYSBkZWNvZGVyIHByb2JsZW0uIEZvciBleGFtcGxlLFxueW91IGNvdWxkIHNob3cgdGhlIGVudGlyZSBKU09OIG9iamVjdCBhbmQgc2hvdyB0aGUgcGFydCBjYXVzaW5nIHRoZSBmYWlsdXJlIGluXG5yZWQuXG4tfVxudHlwZSBFcnJvclxuICAgID0gRmllbGQgeyBuYW1lIDogU3RyaW5nLCBlcnJvciA6IEVycm9yIH1cbiAgICB8IEluZGV4IHsgaW5kZXggOiBJbnQsIGVycm9yIDogRXJyb3IgfVxuICAgIHwgT25lT2YgKEFycmF5IEVycm9yKVxuICAgIHwgRmFpbHVyZSB7IG1lc3NhZ2UgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfVxuXG5cbnstfCBDb252ZXJ0IGEgZGVjb2RpbmcgZXJyb3IgaW50byBhIGBTdHJpbmdgIHRoYXQgaXMgbmljZSBmb3IgZGVidWdnaW5nLlxuXG5JdCBwcm9kdWNlcyBtdWx0aXBsZSBsaW5lcyBvZiBvdXRwdXQsIHNvIHlvdSBtYXkgd2FudCB0byBwZWVrIGF0IGl0IHdpdGhcbnNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSHRtbFxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIGVycm9yVG9IdG1sIDogRGVjb2RlLkVycm9yIC0+IEh0bWwuSHRtbCBtc2dcbiAgICBlcnJvclRvSHRtbCBlcnJvciA9XG4gICAgICAgIEh0bWwucHJlIFtdIFsgSHRtbC50ZXh0IChEZWNvZGUuZXJyb3JUb1N0cmluZyBlcnJvcikgXVxuXG4qKk5vdGU6KiogSXQgd291bGQgYmUgY29vbCB0byBkbyBuaWNlciBjb2xvcmluZyBhbmQgZmFuY2llciBIVE1MLCBidXQgSSB3YW50ZWRcbnRvIGF2b2lkIGhhdmluZyBhbiBgZWxtL2h0bWxgIGRlcGVuZGVuY3kgZm9yIG5vdy4gSXQgaXMgdG90YWxseSBwb3NzaWJsZSB0b1xuY3Jhd2wgdGhlIGBFcnJvcmAgc3RydWN0dXJlIGFuZCBjcmVhdGUgdGhpcyBzZXBhcmF0ZWx5IHRob3VnaCFcblxuLX1cbmVycm9yVG9TdHJpbmcgOiBFcnJvciAtPiBTdHJpbmdcbmVycm9yVG9TdHJpbmcgZXJyb3IgPVxuICAgIGVycm9yVG9TdHJpbmdIZWxwIGVycm9yIFtdXG5cblxuZXJyb3JUb1N0cmluZ0hlbHAgOiBFcnJvciAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5lcnJvclRvU3RyaW5nSGVscCBlcnJvciBjb250ZXh0ID1cbiAgICB3aGVuIGVycm9yIGlzXG4gICAgICAgIEZpZWxkIHsgbmFtZSA9IGYsIGVycm9yID0gZXJyIH0gLT5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIGlzU2ltcGxlID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBTdHJpbmcucG9wRmlyc3QgZiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBmaXJzdCA9IGNoYXIsIHJlc3QgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXIuaXNBbHBoYSBjaGFyICYmIFN0cmluZy5hbGwgQ2hhci5pc0FscGhhTnVtIHJlc3RcblxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIGlmIGlzU2ltcGxlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsrIGZcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlsnXCIgKysgZiArKyBcIiddXCJcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgKFsgZmllbGROYW1lIF0gKysgY29udGV4dClcblxuICAgICAgICBJbmRleCB7IGluZGV4ID0gaSwgZXJyb3IgPSBlcnIgfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW5kZXhOYW1lID1cbiAgICAgICAgICAgICAgICAgICAgXCJbXCIgKysgU3RyaW5nLmZyb21JbnQgaSArKyBcIl1cIlxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIGVycm9yVG9TdHJpbmdIZWxwIGVyciAoWyBpbmRleE5hbWUgXSArKyBjb250ZXh0KVxuXG4gICAgICAgIE9uZU9mIGVycm9ycyAtPlxuICAgICAgICAgICAgd2hlbiBlcnJvcnMgaXNcbiAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICBcIlJhbiBpbnRvIGEgSnNvbi5EZWNvZGUub25lT2Ygd2l0aCBubyBwb3NzaWJpbGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrICh3aGVuIGNvbnRleHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgWyBlcnIgXSAtPlxuICAgICAgICAgICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29udGV4dCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKc29uLkRlY29kZS5vbmVPZlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgSnNvbi5EZWNvZGUub25lT2YgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRyb2R1Y3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgKysgXCIgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgXCIgKysgU3RyaW5nLmZyb21JbnQgKEFycmF5Lmxlbmd0aCBlcnJvcnMpICsrIFwiIHdheXM6XCJcbiAgICAgICAgICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmpvaW4gXCJcXG5cXG5cIiAoWyBpbnRyb2R1Y3Rpb24gXSArKyBBcnJheS5pbmRleGVkTWFwIGVycm9yT25lT2YgZXJyb3JzKVxuXG4gICAgICAgIEZhaWx1cmUgeyBtZXNzYWdlID0gbXNnLCB2YWx1ZSA9IGpzb24gfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW50cm9kdWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBjb250ZXh0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG5cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb25cIiArKyBTdHJpbmcuam9pbiBcIlwiIGNvbnRleHQgKysgXCI6XFxuXFxuICAgIFwiXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgaW50cm9kdWN0aW9uICsrIGluZGVudCAoSnNvbi5FbmNvZGUuZW5jb2RlIDQganNvbikgKysgXCJcXG5cXG5cIiArKyBtc2dcblxuXG5lcnJvck9uZU9mIDogSW50IC0+IEVycm9yIC0+IFN0cmluZ1xuZXJyb3JPbmVPZiBpIGVycm9yID1cbiAgICBcIlxcblxcbihcIiArKyBTdHJpbmcuZnJvbUludCAoaSArIDEpICsrIFwiKSBcIiArKyBpbmRlbnQgKGVycm9yVG9TdHJpbmcgZXJyb3IpXG5cblxuaW5kZW50IDogU3RyaW5nIC0+IFN0cmluZ1xuaW5kZW50IHN0ciA9XG4gICAgU3RyaW5nLmpvaW4gXCJcXG4gICAgXCIgKFN0cmluZy5zcGxpdCBcIlxcblwiIHN0cilcblxuXG5cbi0tIEZBTkNZIFBSSU1JVElWRVNcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBwcm9kdWNlIGEgY2VydGFpbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChzdWNjZWVkIDQyKSBcInRydWVcIiAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyAoc3VjY2VlZCA0MikgXCJbMSwyLDNdXCIgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKHN1Y2NlZWQgNDIpIFwiaGVsbG9cIiAgID09IEVyciAuLi4gLS0gdGhpcyBpcyBub3QgYSB2YWxpZCBKU09OIHN0cmluZ1xuXG5UaGlzIGlzIGhhbmR5IHdoZW4gdXNlZCB3aXRoIGBvbmVPZmAgb3IgYGFuZFRoZW5gLlxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gRGVjb2RlciBhXG5zdWNjZWVkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnN1Y2NlZWRcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBtYWtlIHRoZSBkZWNvZGVyIGZhaWwuIFRoaXMgaXMgaGFuZHkgd2hlbiB1c2VkIHdpdGhcbmBvbmVPZmAgb3IgYGFuZFRoZW5gIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgYSBjdXN0b20gZXJyb3IgbWVzc2FnZSBpbiBzb21lXG5jYXNlLlxuXG5TZWUgdGhlIFtgYW5kVGhlbmBdKCNhbmRUaGVuKSBkb2NzIGZvciBhbiBleGFtcGxlLlxuXG4tfVxuZmFpbCA6IFN0cmluZyAtPiBEZWNvZGVyIGFcbmZhaWwgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZmFpbFxuXG5cbnstfCBDcmVhdGUgZGVjb2RlcnMgdGhhdCBkZXBlbmQgb24gcHJldmlvdXMgcmVzdWx0cy4gSWYgeW91IGFyZSBjcmVhdGluZ1xudmVyc2lvbmVkIGRhdGEsIHlvdSBtaWdodCBkbyBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXG5cbiAgICBpbmZvIDogRGVjb2RlciBJbmZvXG4gICAgaW5mbyA9XG4gICAgICAgIGZpZWxkIFwidmVyc2lvblwiIGludFxuICAgICAgICAgICAgfD4gYW5kVGhlbiBpbmZvSGVscFxuXG4gICAgaW5mb0hlbHAgOiBJbnQgLT4gRGVjb2RlciBJbmZvXG4gICAgaW5mb0hlbHAgdmVyc2lvbiA9XG4gICAgICAgIHdoZW4gdmVyc2lvbiBpc1xuICAgICAgICAgICAgNCAtPlxuICAgICAgICAgICAgICAgIGluZm9EZWNvZGVyNFxuXG4gICAgICAgICAgICAzIC0+XG4gICAgICAgICAgICAgICAgaW5mb0RlY29kZXIzXG5cbiAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICBmYWlsIDx8XG4gICAgICAgICAgICAgICAgICAgIFwiVHJ5aW5nIHRvIGRlY29kZSBpbmZvLCBidXQgdmVyc2lvbiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKysgdG9TdHJpbmcgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgKysgXCIgaXMgbm90IHN1cHBvcnRlZC5cIlxuXG4gICAgLS0gaW5mb0RlY29kZXI0IDogRGVjb2RlciBJbmZvXG4gICAgLS0gaW5mb0RlY29kZXIzIDogRGVjb2RlciBJbmZvXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gRGVjb2RlciBiKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmFuZFRoZW5cblxuXG57LXwgU29tZXRpbWVzIHlvdSBoYXZlIEpTT04gd2l0aCByZWN1cnNpdmUgc3RydWN0dXJlLCBsaWtlIG5lc3RlZCBjb21tZW50cy5cbllvdSBjYW4gdXNlIGBsYXp5YCB0byBtYWtlIHN1cmUgeW91ciBkZWNvZGVyIHVucm9sbHMgbGF6aWx5LlxuXG4gICAgdHlwZSBhbGlhcyBDb21tZW50ID1cbiAgICAgICAgeyBtZXNzYWdlIDogU3RyaW5nXG4gICAgICAgICwgcmVzcG9uc2VzIDogUmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIG1ha2VDb21tZW50IDogU3RyaW5nIC0+IFJlc3BvbnNlcyAtPiBDb21tZW50XG4gICAgbWFrZUNvbW1lbnQgbWVzc2FnZSByZXNwb25zZXMgPVxuICAgICAgICB7IG1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAgICwgcmVzcG9uc2VzID0gcmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIHR5cGUgUmVzcG9uc2VzXG4gICAgICAgID0gUmVzcG9uc2VzIChBcnJheSBDb21tZW50KVxuXG4gICAgY29tbWVudCA6IERlY29kZXIgQ29tbWVudFxuICAgIGNvbW1lbnQgPVxuICAgICAgICBtYXAyIG1ha2VDb21tZW50XG4gICAgICAgICAgICAoZmllbGQgXCJtZXNzYWdlXCIgc3RyaW5nKVxuICAgICAgICAgICAgKGZpZWxkIFwicmVzcG9uc2VzXCIgKG1hcCBSZXNwb25zZXMgKGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpKSkpXG5cbklmIHdlIGhhZCBzYWlkIGBhcnJheSBjb21tZW50YCBpbnN0ZWFkLCB3ZSB3b3VsZCBzdGFydCBleHBhbmRpbmcgdGhlIHZhbHVlXG5pbmZpbml0ZWx5LiBXaGF0IGlzIGEgYGNvbW1lbnRgPyBJdCBpcyBhIGRlY29kZXIgZm9yIG9iamVjdHMgd2hlcmUgdGhlXG5gcmVzcG9uc2VzYCBmaWVsZCBjb250YWlucyBjb21tZW50cy4gV2hhdCBpcyBhIGBjb21tZW50YCB0aG91Z2g/IEV0Yy5cblxuQnkgdXNpbmcgYGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpYCB3ZSBtYWtlIHN1cmUgdGhlIGRlY29kZXIgb25seSBleHBhbmRzXG50byBiZSBhcyBkZWVwIGFzIHRoZSBKU09OIHdlIGFyZSBnaXZlbi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgcmVjdXJzaXZlIGRhdGFcbnN0cnVjdHVyZXMgW2hlcmVdLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29tcGlsZXIvYmxvYi9tYXN0ZXIvaGludHMvcmVjdXJzaXZlLWFsaWFzLm1kXG5cbi19XG5sYXp5IDogKHt9IC0+IERlY29kZXIgYSkgLT4gRGVjb2RlciBhXG5sYXp5IHRodW5rID1cbiAgICBhbmRUaGVuIHRodW5rIChzdWNjZWVkIHt9KVxuXG5cbnstfCBEbyBub3QgZG8gYW55dGhpbmcgd2l0aCBhIEpTT04gdmFsdWUsIGp1c3QgYnJpbmcgaXQgaW50byBHcmVuIGFzIGEgYFZhbHVlYC5cblRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBwYXJ0aWN1bGFybHkgY29tcGxleCBkYXRhIHRoYXQgeW91IHdvdWxkIGxpa2UgdG9cbmRlYWwgd2l0aCBsYXRlci4gT3IgaWYgeW91IGFyZSBnb2luZyB0byBzZW5kIGl0IG91dCBhIHBvcnQgYW5kIGRvIG5vdCBjYXJlXG5hYm91dCBpdHMgc3RydWN0dXJlLlxuLX1cbnZhbHVlIDogRGVjb2RlciBWYWx1ZVxudmFsdWUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlVmFsdWVcblxuXG57LXwgRGVjb2RlIGEgYG51bGxgIHZhbHVlIGludG8gc29tZSBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIEZhbHNlKSBcIm51bGxcIiA9PSBPayBGYWxzZVxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJudWxsXCIgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgNDIpIFwiNDJcIiAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJmYWxzZVwiICAgPT0gRXJyIC4uXG5cblNvIGlmIHlvdSBldmVyIHNlZSBhIGBudWxsYCwgdGhpcyB3aWxsIHJldHVybiB3aGF0ZXZlciB2YWx1ZSB5b3Ugc3BlY2lmaWVkLlxuXG4tfVxubnVsbCA6IGEgLT4gRGVjb2RlciBhXG5udWxsID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZU51bGxcbiIsCiAgICAgICAgIm1vZHVsZSBDaGFyIGV4cG9zaW5nXG4gICAgKCBDaGFyXG4gICAgLCBpc1VwcGVyLCBpc0xvd2VyLCBpc0FscGhhLCBpc0FscGhhTnVtXG4gICAgLCBpc0RpZ2l0LCBpc09jdERpZ2l0LCBpc0hleERpZ2l0XG4gICAgLCB0b0NvZGUsIGZyb21Db2RlXG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2hhcmFjdGVycy4gQ2hhcmFjdGVyIGxpdGVyYWxzIGFyZSBlbmNsb3NlZCBpblxuYCdhJ2AgcGFpciBvZiBzaW5nbGUgcXVvdGVzLlxuXG5cbkBkb2NzIENoYXJcblxuXG4jIyBBU0NJSSBMZXR0ZXJzXG5cbkBkb2NzIGlzVXBwZXIsIGlzTG93ZXIsIGlzQWxwaGEsIGlzQWxwaGFOdW1cblxuXG4jIyBEaWdpdHNcblxuQGRvY3MgaXNEaWdpdCwgaXNPY3REaWdpdCwgaXNIZXhEaWdpdFxuXG5cbiMjIFVuaWNvZGUgQ29kZSBQb2ludHNcblxuQGRvY3MgdG9Db2RlLCBmcm9tQ29kZVxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICgoJiYpLCAoPD0pLCAoPj0pLCAofHwpLCBCb29sLCBJbnQpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQ2hhclxuXG5cblxuLS0gQ0hBUlxuXG5cbnstfCBBIGBDaGFyYCBpcyBhIHNpbmdsZSBbdW5pY29kZV1bdV0gY2hhcmFjdGVyOlxuXG4gICAgJ2EnXG5cbiAgICAnMCdcblxuICAgICdaJ1xuXG4gICAgJz8nXG5cbiAgICAnXCInXG5cbiAgICAnzqMnXG5cbiAgICAn8J+ZiCdcblxuICAgICdcXHQnXG5cbiAgICAnXCInXG5cbiAgICAnXFwnJ1xuXG4gICAgJ/CfmYgnIC0tICfwn5mIJ1xuXG4qKk5vdGUgMToqKiBZb3UgX2Nhbm5vdF8gdXNlIHNpbmdsZSBxdW90ZXMgYXJvdW5kIG11bHRpcGxlIGNoYXJhY3RlcnMgbGlrZSBpblxuSmF2YVNjcmlwdC4gVGhpcyBpcyBob3cgd2UgZGlzdGluZ3Vpc2ggW2BTdHJpbmdgXShTdHJpbmcjU3RyaW5nKSBhbmQgYENoYXJgXG52YWx1ZXMgaW4gc3ludGF4LlxuXG4qKk5vdGUgMjoqKiBZb3UgY2FuIHVzZSB0aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0b1xucmVwcmVzZW50IGNoYXJhY3RlcnMgYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGVcbmNoYXJhY3RlcnMgZGlyZWN0bHkuIFVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZVxubWFueSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuLX1cbnR5cGUgQ2hhclxuICAgID0gQ2hhciAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuXG4tLSBDTEFTU0lGSUNBVElPTlxuXG5cbnstfCBEZXRlY3QgdXBwZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNVcHBlciAnQScgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnQidcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNVcHBlciAnWidcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnMCcgPT0gRmFsc2VcblxuICAgIGlzVXBwZXIgJ2EnID09IEZhbHNlXG5cbiAgICBpc1VwcGVyICctJyA9PSBGYWxzZVxuXG4gICAgaXNVcHBlciAnzqMnID09IEZhbHNlXG5cbi19XG5pc1VwcGVyIDogQ2hhciAtPiBCb29sXG5pc1VwcGVyIGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4NUEgJiYgMHg0MSA8PSBjb2RlXG5cblxuey18IERldGVjdCBsb3dlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc0xvd2VyICdhJyA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICdiJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc0xvd2VyICd6J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICcwJyA9PSBGYWxzZVxuXG4gICAgaXNMb3dlciAnQScgPT0gRmFsc2VcblxuICAgIGlzTG93ZXIgJy0nID09IEZhbHNlXG5cbiAgICBpc0xvd2VyICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzTG93ZXIgOiBDaGFyIC0+IEJvb2xcbmlzTG93ZXIgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4N0FcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGEgJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ2InID09IFRydWVcblxuICAgIGlzQWxwaGEgJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ1knID09IFRydWVcblxuICAgIGlzQWxwaGEgJzAnID09IEZhbHNlXG5cbiAgICBpc0FscGhhICctJyA9PSBGYWxzZVxuXG4gICAgaXNBbHBoYSAnz4AnID09IEZhbHNlXG5cbi19XG5pc0FscGhhIDogQ2hhciAtPiBCb29sXG5pc0FscGhhIGNoYXIgPVxuICAgIGlzTG93ZXIgY2hhciB8fCBpc1VwcGVyIGNoYXJcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGFOdW0gJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ2InID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ1knID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzAnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzcnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJy0nID09IEZhbHNlXG5cbiAgICBpc0FscGhhTnVtICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzQWxwaGFOdW0gOiBDaGFyIC0+IEJvb2xcbmlzQWxwaGFOdW0gY2hhciA9XG4gICAgaXNMb3dlciBjaGFyIHx8IGlzVXBwZXIgY2hhciB8fCBpc0RpZ2l0IGNoYXJcblxuXG57LXwgRGV0ZWN0IGRpZ2l0cyBgMDEyMzQ1Njc4OWBcblxuICAgIGlzRGlnaXQgJzAnID09IFRydWVcblxuICAgIGlzRGlnaXQgJzEnXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzRGlnaXQgJzknXG4gICAgICAgID09IFRydWVcblxuICAgIGlzRGlnaXQgJ2EnID09IEZhbHNlXG5cbiAgICBpc0RpZ2l0ICdiJyA9PSBGYWxzZVxuXG4gICAgaXNEaWdpdCAnQScgPT0gRmFsc2VcblxuLX1cbmlzRGlnaXQgOiBDaGFyIC0+IEJvb2xcbmlzRGlnaXQgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIGNvZGUgPD0gMHgzOSAmJiAweDMwIDw9IGNvZGVcblxuXG57LXwgRGV0ZWN0IG9jdGFsIGRpZ2l0cyBgMDEyMzQ1NjdgXG5cbiAgICBpc09jdERpZ2l0ICcwJyA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICcxJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc09jdERpZ2l0ICc3J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICc4JyA9PSBGYWxzZVxuXG4gICAgaXNPY3REaWdpdCAnYScgPT0gRmFsc2VcblxuICAgIGlzT2N0RGlnaXQgJ0EnID09IEZhbHNlXG5cbi19XG5pc09jdERpZ2l0IDogQ2hhciAtPiBCb29sXG5pc09jdERpZ2l0IGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4MzcgJiYgMHgzMCA8PSBjb2RlXG5cblxuey18IERldGVjdCBoZXhhZGVjaW1hbCBkaWdpdHMgYDAxMjM0NTY3ODlhYmNkZWZBQkNERUZgXG4tfVxuaXNIZXhEaWdpdCA6IENoYXIgLT4gQm9vbFxuaXNIZXhEaWdpdCBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgKDB4MzAgPD0gY29kZSAmJiBjb2RlIDw9IDB4MzkpXG4gICAgICAgIHx8ICgweDQxIDw9IGNvZGUgJiYgY29kZSA8PSAweDQ2KVxuICAgICAgICB8fCAoMHg2MSA8PSBjb2RlICYmIGNvZGUgPD0gMHg2NilcblxuXG5cbi0tIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgVW5pY29kZSBbY29kZSBwb2ludF1bY3BdLlxuXG5bY3BdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlX3BvaW50XG5cbiAgICB0b0NvZGUgJ0EnID09IDY1XG5cbiAgICB0b0NvZGUgJ0InID09IDY2XG5cbiAgICB0b0NvZGUgJ+acqCcgPT0gMHg2NzI4XG5cbiAgICB0b0NvZGUgJ/CdjIYnID09IDB4MDAwMUQzMDZcblxuICAgIHRvQ29kZSAn8J+YgycgPT0gMHgwMDAxRjYwM1xuXG4tfVxudG9Db2RlIDogQ2hhciAtPiBJbnRcbnRvQ29kZSA9XG4gICAgR3Jlbi5LZXJuZWwuQ2hhci50b0NvZGVcblxuXG57LXwgQ29udmVydCBhIFVuaWNvZGUgW2NvZGUgcG9pbnRdW2NwXSB0byBhIGNoYXJhY3Rlci5cblxuICAgIGZyb21Db2RlIDY1ID09ICdBJ1xuXG4gICAgZnJvbUNvZGUgNjYgPT0gJ0InXG5cbiAgICBmcm9tQ29kZSAweDY3MjggPT0gJ+acqCdcblxuICAgIGZyb21Db2RlIDB4MDAwMUQzMDYgPT0gJ/CdjIYnXG5cbiAgICBmcm9tQ29kZSAweDAwMDFGNjAzID09ICfwn5iDJ1xuXG4gICAgZnJvbUNvZGUgLTEgPT0gJ++/vSdcblxuVGhlIGZ1bGwgcmFuZ2Ugb2YgdW5pY29kZSBpcyBmcm9tIGAwYCB0byBgMHgxMEZGRkZgLiBXaXRoIG51bWJlcnMgb3V0c2lkZSB0aGF0XG5yYW5nZSwgeW91IGdldCBbdGhlIHJlcGxhY2VtZW50IGNoYXJhY3Rlcl1bZmZmZF0uXG5cbltjcF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfcG9pbnRcbltmZmZkXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spI1JlcGxhY2VtZW50X2NoYXJhY3RlclxuXG4tfVxuZnJvbUNvZGUgOiBJbnQgLT4gQ2hhclxuZnJvbUNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkNoYXIuZnJvbUNvZGVcbiIsCiAgICAgICAgIm1vZHVsZSBSZXN1bHQgZXhwb3NpbmdcbiAgICAoIFJlc3VsdCguLilcbiAgICAsIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBmaXJzdE9rLCBhbGxPa1xuICAgICwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBhbmRUaGVuLCBvbkVycm9yXG4gICAgLCB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCB0b01heWJlLCBmcm9tTWF5YmUsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgQSBgUmVzdWx0YCBpcyB0aGUgcmVzdWx0IG9mIGEgY29tcHV0YXRpb24gdGhhdCBtYXkgZmFpbC4gVGhpcyBpcyBhIGdyZWF0XG53YXkgdG8gbWFuYWdlIGVycm9ycyBpbiBHcmVuLlxuXG5AZG9jcyBSZXN1bHRcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwgZmlyc3RPaywgYWxsT2tcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuXG5cbiMjIENoYWluaW5nXG5cbkBkb2NzIGFuZFRoZW4sIG9uRXJyb3JcblxuXG4jIyBIYW5kbGluZyBFcnJvcnNcblxuQGRvY3Mgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgdG9NYXliZSwgZnJvbU1heWJlLCBtYXBFcnJvclxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcblxuXG57LXwgQSBgUmVzdWx0YCBpcyBlaXRoZXIgYE9rYCBtZWFuaW5nIHRoZSBjb21wdXRhdGlvbiBzdWNjZWVkZWQsIG9yIGl0IGlzIGFuXG5gRXJyYCBtZWFuaW5nIHRoYXQgdGhlcmUgd2FzIHNvbWUgZmFpbHVyZS5cbi19XG50eXBlIFJlc3VsdCBlcnJvciB2YWx1ZVxuICAgID0gT2sgdmFsdWVcbiAgICB8IEVyciBlcnJvclxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBtYXRjaGVzIHRoZSBwcm92aWRlZCB2YWx1ZS5cblxuICAgIFJlc3VsdC5oYXNWYWx1ZSAxMjMgKE9rIDEyMykgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0Lmhhc1ZhbHVlIDEyMyAoT2sgNSkgPT0gRmFsc2VcbiAgICBcbiAgICBSZXN1bHQuaGFzVmFsdWUgMTIzIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmhhc1ZhbHVlIDogYSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmhhc1ZhbHVlIHZhbHVlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYSA9PSB2YWx1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBwYXNzZXMgdGhlIHByb3ZpZGVkIHRlc3QuXG5cbiAgICBSZXN1bHQuY2hlY2tWYWx1ZSBpc09kZCAoT2sgNSkgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0LmNoZWNrVmFsdWUgaXNPZGQgKE9rIDEyKSA9PSBGYWxzZVxuICAgIFxuICAgIFJlc3VsdC5jaGVja1ZhbHVlIGlzT2RkIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmNoZWNrVmFsdWUgOiAoYSAtPiBCb29sKSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmNoZWNrVmFsdWUgdGVzdCByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHRlc3QgYSBcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgUmV0dXJucyB0aGUgZmlyc3QgYE9rYCB2YWx1ZSBpbiBhbiBgQXJyYXlgIG9mIGBSZXN1bHRgcy5cblxuICAgIFJlc3VsdC5maXJzdE9rIFsgT2sgNSwgRXJyIDAsIE9rIDEwIF0gPT0gSnVzdCA1XG5cbiAgICBSZXN1bHQuZmlyc3RPayBbIEVyciAwLCBFcnIgMSBdID09IE5vdGhpbmdcblxuLX1cbmZpcnN0T2sgOiBBcnJheSAoUmVzdWx0IHggYSkgLT4gTWF5YmUgYVxuZmlyc3RPayBhcnJheSA9XG4gICAgQXJyYXkuZmluZEZpcnN0IGlzT2sgYXJyYXlcbiAgICAgICAgfD4gTWF5YmUubWFwIC52YWx1ZVxuICAgICAgICB8PiBNYXliZS5hbmRUaGVuIHRvTWF5YmVcblxuXG57LXwgQ29udmVydCBhbiBgQXJyYXlgIG9mIGBSZXN1bHQgZXJyIG9rYCB0byBgUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylgLiBZb3UnbGwgb25seVxucmVjZWl2ZSBhbiBgT2tgIGlmIHRoZXJlIGFyZSBubyBgRXJyYCB2YWx1ZXMgaW4gdGhlIGBBcnJheWAuXG5cbiAgICBSZXN1bHQuYWxsT2sgWyBPayA1LCBFcnIgMCwgT2sgMTAgXSA9PSBFcnIgWyAwIF1cblxuICAgIFJlc3VsdC5hbGxPayBbIE9rIDAsIE9rIDEgXSA9PSBPayBbIDAsIDEgXVxuXG4tfVxuYWxsT2sgOiBBcnJheSAoUmVzdWx0IGVyciBvaykgLT4gUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylcbmFsbE9rIGFycmF5ID1cbiAgICBsZXRcbiAgICAgICAgZXJyb3JzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcEFuZEtlZXBKdXN0IGVyclRvTWF5YmUgYXJyYXlcbiAgICBpblxuICAgIGlmIEFycmF5Lmxlbmd0aCBlcnJvcnMgPiAwIHRoZW5cbiAgICAgICAgRXJyIGVycm9yc1xuXG4gICAgZWxzZVxuICAgICAgICBPayA8fCBBcnJheS5tYXBBbmRLZWVwSnVzdCB0b01heWJlIGFycmF5XG5cblxuZXJyVG9NYXliZSA6IFJlc3VsdCBlcnIgb2sgLT4gTWF5YmUgZXJyXG5lcnJUb01heWJlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEVyciBlcnIgLT5cbiAgICAgICAgICAgIEp1c3QgZXJyXG5cblxuey18IElmIHRoZSByZXN1bHQgaXMgYE9rYCByZXR1cm4gdGhlIHZhbHVlLCBidXQgaWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCB0aGVuXG5yZXR1cm4gYSBnaXZlbiBkZWZhdWx0IHZhbHVlLiBUaGUgZm9sbG93aW5nIGV4YW1wbGVzIHRyeSB0byBwYXJzZSBpbnRlZ2Vycy5cblxuICAgIFJlc3VsdC53aXRoRGVmYXVsdCAwIChPayAxMjMpID09IDEyM1xuXG4gICAgUmVzdWx0LndpdGhEZWZhdWx0IDAgKEVyciBcIm5vXCIpID09IDBcblxuLX1cbndpdGhEZWZhdWx0IDogYSAtPiBSZXN1bHQgeCBhIC0+IGFcbndpdGhEZWZhdWx0IGRlZiByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIGFcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgZGVmXG5cblxuey18IFNhbWUgYXMgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIGZ1bmN0aW9uLlxuVGhpcyBsZXRzIHlvdSBhdm9pZCBjb21wdXRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXNuJ3QgbmVjZXNzYXJ5LlxuXG4tfVxud2l0aERlZmF1bHRMYXp5IDogKHt9IC0+IGEpIC0+IFJlc3VsdCB4IGEgLT4gYVxud2l0aERlZmF1bHRMYXp5IHByb3ZpZGVyIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBwcm92aWRlciB7fVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIHRvIGEgcmVzdWx0LiBJZiB0aGUgcmVzdWx0IGlzIGBPa2AsIGl0IHdpbGwgYmUgY29udmVydGVkLlxuSWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCwgdGhlIHNhbWUgZXJyb3IgdmFsdWUgd2lsbCBwcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcCBzcXJ0IChPayA0LjApID09IE9rIDIuMFxuXG4gICAgbWFwIHNxcnQgKEVyciBcImJhZCBpbnB1dFwiKSA9PSBFcnIgXCJiYWQgaW5wdXRcIlxuXG4tfVxubWFwIDogKGEgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggdmFsdWVcbm1hcCBmdW5jIHJhID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIE9rIChmdW5jIGEpXG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciBlXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gaWYgYm90aCByZXN1bHRzIGFyZSBgT2tgLiBJZiBub3QsIHRoZSBmaXJzdCBgRXJyYCB3aWxsXG5wcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcDIgbWF4IChPayA0MikgKE9rIDEzKSA9PSBPayA0MlxuXG4gICAgbWFwMiBtYXggKEVyciBcInhcIikgKE9rIDEzKSA9PSBFcnIgXCJ4XCJcblxuICAgIG1hcDIgbWF4IChPayA0MikgKEVyciBcInlcIikgPT0gRXJyIFwieVwiXG5cbiAgICBtYXAyIG1heCAoRXJyIFwieFwiKSAoRXJyIFwieVwiKSA9PSBFcnIgXCJ4XCJcblxuVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIHR3byBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbCwgYW5kIHlvdSB3YW50XG50byBwdXQgdGhlbSB0b2dldGhlciBxdWlja2x5LlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMiBmdW5jIHJhIHJiID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIpXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggYyAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMyBmdW5jIHJhIHJiIHJjID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIgYylcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwNCBmdW5jIHJhIHJiIHJjIHJkID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHJkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQpXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCBlIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXA1IGZ1bmMgcmEgcmIgcmMgcmQgcmUgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcmMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2sgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcmQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiByZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayBlIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQgZSlcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSBzZXF1ZW5jZSBvZiBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbC4gSXQgaXMgaGVscGZ1bFxudG8gc2VlIGl0cyBkZWZpbml0aW9uOlxuXG4gICAgYW5kVGhlbiA6IChhIC0+IFJlc3VsdCBlIGIpIC0+IFJlc3VsdCBlIGEgLT4gUmVzdWx0IGUgYlxuICAgIGFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICAgICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgICAgIE9rIHZhbHVlIC0+XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICAgICAgRXJyIG1zZyAtPlxuICAgICAgICAgICAgICAgIEVyciBtc2dcblxuVGhpcyBtZWFucyB3ZSBvbmx5IGNvbnRpbnVlIHdpdGggdGhlIGNhbGxiYWNrIGlmIHRoaW5ncyBhcmUgZ29pbmcgd2VsbC4gRm9yXG5leGFtcGxlLCBzYXkgeW91IG5lZWQgdG8gdXNlIChgdG9JbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRgKSB0byBwYXJzZVxuYSBtb250aCBhbmQgbWFrZSBzdXJlIGl0IGlzIGJldHdlZW4gMSBhbmQgMTI6XG5cblxuICAgIHRvVmFsaWRNb250aCA6IEludCAtPiBSZXN1bHQgU3RyaW5nIEludFxuICAgIHRvVmFsaWRNb250aCBtb250aCA9XG4gICAgICAgIGlmIG1vbnRoID49IDEgJiYgbW9udGggPD0gMTIgdGhlblxuICAgICAgICAgICAgT2sgbW9udGhcblxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuICAgIHRvTW9udGggOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRcbiAgICB0b01vbnRoIHJhd1N0cmluZyA9XG4gICAgICAgIHRvSW50IHJhd1N0cmluZ1xuICAgICAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuICAgIC0tIHRvTW9udGggXCI0XCIgPT0gT2sgNFxuICAgIC0tIHRvTW9udGggXCI5XCIgPT0gT2sgOVxuICAgIC0tIHRvTW9udGggXCJhXCIgPT0gRXJyIFwiY2Fubm90IHBhcnNlIHRvIGFuIEludFwiXG4gICAgLS0gdG9Nb250aCBcIjBcIiA9PSBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuVGhpcyBhbGxvd3MgdXMgdG8gY29tZSBvdXQgb2YgYSBjaGFpbiBvZiBvcGVyYXRpb25zIHdpdGggcXVpdGUgYSBzcGVjaWZpYyBlcnJvclxubWVzc2FnZS4gSXQgaXMgb2Z0ZW4gYmVzdCB0byBjcmVhdGUgYSBjdXN0b20gdHlwZSB0aGF0IGV4cGxpY2l0bHkgcmVwcmVzZW50c1xudGhlIGV4YWN0IHdheXMgeW91ciBjb21wdXRhdGlvbiBtYXkgZmFpbC4gVGhpcyB3YXkgaXQgaXMgZWFzeSB0byBoYW5kbGUgaW4geW91clxuY29kZS5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBSZXN1bHQgeCBiKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGJcbmFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICBFcnIgbXNnIC0+XG4gICAgICAgICAgICBFcnIgbXNnXG5cblxuey18IFRoaXMgaXMgc2ltaWxhciB0byBbYW5kVGhlbl0oI2FuZFRoZW4pIGJ1dCB0aGUgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW5cbnRoZSBgUmVzdWx0YCBpcyBhbiBgRXJyYCB2YWx1ZS4gVGhpcyBnaXZlcyB5b3UgdGhlIG9wdGlvbiBvZiBkZWFsaW5nIHdpdGggZXJyb3JzXG5pbiBhIGNoYWluLlxuXG4gICAgdG9JbnQgXCJhXCJcbiAgICAgICAgfD4gb25FcnJvciAoXFxfbXNnIC0+IE9rIDEpIC0tIGRlZmF1bHRpbmcgdG8gZmlyc3QgbW9udGggb2YgdGhlIHllYXJcbiAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuLX1cbm9uRXJyb3IgOiAoYSAtPiBSZXN1bHQgYiB4KSAtPiBSZXN1bHQgYSB4IC0+IFJlc3VsdCBiIHhcbm9uRXJyb3IgY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgT2sgdmFsdWVcblxuICAgICAgICBFcnIgZXJyIC0+XG4gICAgICAgICAgICBjYWxsYmFjayBlcnJcblxuXG57LXwgVHJhbnNmb3JtIGFuIGBFcnJgIHZhbHVlLiBGb3IgZXhhbXBsZSwgc2F5IHRoZSBlcnJvcnMgd2UgZ2V0IGhhdmUgdG9vIG11Y2hcbmluZm9ybWF0aW9uOlxuXG4gICAgcGFyc2VJbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFBhcnNlRXJyb3IgSW50XG5cbiAgICB0eXBlIGFsaWFzIFBhcnNlRXJyb3IgPVxuICAgICAgICB7IG1lc3NhZ2UgOiBTdHJpbmdcbiAgICAgICAgLCBjb2RlIDogSW50XG4gICAgICAgICwgcG9zaXRpb24gOiAoSW50LEludClcbiAgICAgICAgfVxuXG4gICAgbWFwRXJyb3IgLm1lc3NhZ2UgKHBhcnNlSW50IFwiMTIzXCIpID09IE9rIDEyM1xuICAgIG1hcEVycm9yIC5tZXNzYWdlIChwYXJzZUludCBcImFiY1wiKSA9PSBFcnIgXCJjaGFyICdhJyBpcyBub3QgYSBudW1iZXJcIlxuXG4tfVxubWFwRXJyb3IgOiAoeCAtPiB5KSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB5IGFcbm1hcEVycm9yIGYgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBPayB2XG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciAoZiBlKVxuXG5cbnstfCBDb252ZXJ0IHRvIGEgc2ltcGxlciBgTWF5YmVgIGlmIHRoZSBhY3R1YWwgZXJyb3IgbWVzc2FnZSBpcyBub3QgbmVlZGVkIG9yXG55b3UgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseSB1c2VzIG1heWJlcy5cblxuICAgIHBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBQYXJzZUVycm9yIEludFxuXG4gICAgbWF5YmVQYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBtYXliZVBhcnNlSW50IHN0cmluZyA9XG4gICAgICAgIHRvTWF5YmUgKHBhcnNlSW50IHN0cmluZylcblxuLX1cbnRvTWF5YmUgOiBSZXN1bHQgeCBhIC0+IE1heWJlIGFcbnRvTWF5YmUgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBKdXN0IHZcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBDb252ZXJ0IGZyb20gYSBzaW1wbGUgYE1heWJlYCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseVxudXNlcyBgUmVzdWx0c2AuXG5cbiAgICBwYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcblxuICAgIHJlc3VsdFBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBTdHJpbmcgSW50XG4gICAgcmVzdWx0UGFyc2VJbnQgc3RyaW5nID1cbiAgICAgICAgZnJvbU1heWJlIChcImVycm9yIHBhcnNpbmcgc3RyaW5nOiBcIiArKyB0b1N0cmluZyBzdHJpbmcpIChwYXJzZUludCBzdHJpbmcpXG5cbi19XG5mcm9tTWF5YmUgOiB4IC0+IE1heWJlIGEgLT4gUmVzdWx0IHggYVxuZnJvbU1heWJlIGVyciBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHYgLT5cbiAgICAgICAgICAgIE9rIHZcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBFcnIgZXJyXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcbi0tXG4tLSBVc2UgYHdoZW5gIGV4cHJlc3Npb25zIGZvciB0aGlzIGluIEdyZW4gY29kZSFcblxuXG5pc09rIDogUmVzdWx0IHggYSAtPiBCb29sXG5pc09rIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuIiwKICAgICAgICAibW9kdWxlIFZpcnR1YWxEb20gZXhwb3NpbmdcbiAgKCBOb2RlXG4gICwgdGV4dCwgbm9kZSwgbm9kZU5TXG4gICwgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcbiAgLCBvbiwgSGFuZGxlciguLilcbiAgLCBtYXAsIG1hcEF0dHJpYnV0ZVxuICAsIGtleWVkTm9kZSwga2V5ZWROb2RlTlNcbiAgLCBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuICApXG5cbnstfCBBUEkgdG8gdGhlIGNvcmUgZGlmZmluZyBhbGdvcml0aG0uIENhbiBzZXJ2ZSBhcyBhIGZvdW5kYXRpb24gZm9yIGxpYnJhcmllc1xudGhhdCBleHBvc2UgbW9yZSBoZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIG9yIFNWRy5cblxuIyMgQ3JlYXRlXG5AZG9jcyBOb2RlLCB0ZXh0LCBub2RlLCBub2RlTlNcblxuIyMgQXR0cmlidXRlc1xuQGRvY3MgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcblxuIyMgRXZlbnRzXG5AZG9jcyBvbiwgSGFuZGxlclxuXG4jIyBSb3V0aW5nIE1lc3NhZ2VzXG5AZG9jcyBtYXAsIG1hcEF0dHJpYnV0ZVxuXG4jIyBLZXllZCBOb2Rlc1xuQGRvY3Mga2V5ZWROb2RlLCBrZXllZE5vZGVOU1xuXG4jIyBMYXp5IE5vZGVzXG5AZG9jcyBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVmlydHVhbERvbVxuaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuXG57LXwgQW4gaW1tdXRhYmxlIGNodW5rIG9mIGRhdGEgcmVwcmVzZW50aW5nIGEgRE9NIG5vZGUuIFRoaXMgY2FuIGJlIEhUTUwgb3IgU1ZHLlxuLX1cbnR5cGUgTm9kZSBtc2cgPSBOb2RlXG5cblxuey18IENyZWF0ZSBhIERPTSBub2RlIHdpdGggYSB0YWcgbmFtZSwgYSBsaXN0IG9mIEhUTUwgcHJvcGVydGllcyB0aGF0IGNhblxuaW5jbHVkZSBzdHlsZXMgYW5kIGV2ZW50IGxpc3RlbmVycywgYSBsaXN0IG9mIENTUyBwcm9wZXJ0aWVzIGxpa2UgYGNvbG9yYCwgYW5kXG5hIGxpc3Qgb2YgY2hpbGQgbm9kZXMuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgSnNvblxuXG4gICAgaGVsbG8gOiBOb2RlIG1zZ1xuICAgIGhlbGxvID1cbiAgICAgIG5vZGUgXCJkaXZcIiBbXSBbIHRleHQgXCJIZWxsbyFcIiBdXG5cbiAgICBncmVldGluZyA6IE5vZGUgbXNnXG4gICAgZ3JlZXRpbmcgPVxuICAgICAgbm9kZSBcImRpdlwiXG4gICAgICAgIFsgcHJvcGVydHkgXCJpZFwiIChKc29uLnN0cmluZyBcImdyZWV0aW5nXCIpIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCIgXVxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChOb2RlIG1zZykgLT4gTm9kZSBtc2dcbm5vZGUgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG57LXwgQ3JlYXRlIGEgbmFtZXNwYWNlZCBET00gbm9kZS4gRm9yIGV4YW1wbGUsIGFuIFNWRyBgPHBhdGg+YCBub2RlIGNvdWxkIGJlXG5kZWZpbmVkIGxpa2UgdGhpczpcblxuICAgIHBhdGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKE5vZGUgbXNnKSAtPiBOb2RlIG1zZ1xuICAgIHBhdGggYXR0cnVidXRlcyBjaGlsZHJlbiA9XG4gICAgICBub2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwicGF0aFwiIGF0dHJpYnV0ZXMgY2hpbGRyZW5cbi19XG5ub2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoTm9kZSBtc2cpIC0+IE5vZGUgbXNnXG5ub2RlTlMgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlTlMgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cbnstfCBKdXN0IHB1dCBwbGFpbiB0ZXh0IGluIHRoZSBET00uIEl0IHdpbGwgZXNjYXBlIHRoZSBzdHJpbmcgc28gdGhhdCBpdCBhcHBlYXJzXG5leGFjdGx5IGFzIHlvdSBzcGVjaWZ5LlxuXG4gICAgdGV4dCBcIkhlbGxvIFdvcmxkIVwiXG4tfVxudGV4dCA6IFN0cmluZyAtPiBOb2RlIG1zZ1xudGV4dCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20udGV4dFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIGlzIHVzZWZ1bCB3aGVuIG5lc3RpbmcgY29tcG9uZW50cyB3aXRoIFt0aGUgRWxtXG5BcmNoaXRlY3R1cmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLWFyY2hpdGVjdHVyZS10dXRvcmlhbC8pLiBJdCBsZXRzXG55b3UgdHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIHN1YnRyZWUuXG5cblNheSB5b3UgaGF2ZSBhIG5vZGUgbmFtZWQgYGJ1dHRvbmAgdGhhdCBwcm9kdWNlcyBgKClgIHZhbHVlcyB3aGVuIGl0IGlzXG5jbGlja2VkLiBUbyBnZXQgeW91ciBtb2RlbCB1cGRhdGluZyBwcm9wZXJseSwgeW91IHdpbGwgcHJvYmFibHkgd2FudCB0byB0YWdcbnRoaXMgYCgpYCB2YWx1ZSBsaWtlIHRoaXM6XG5cbiAgICB0eXBlIE1zZyA9IENsaWNrIHwgLi4uXG5cbiAgICB1cGRhdGUgbXNnIG1vZGVsID1cbiAgICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIENsaWNrIC0+XG4gICAgICAgICAgLi4uXG5cbiAgICB2aWV3IG1vZGVsID1cbiAgICAgIG1hcCAoXFxfIC0+IENsaWNrKSBidXR0b25cblxuU28gbm93IGFsbCB0aGUgZXZlbnRzIHByb2R1Y2VkIGJ5IGBidXR0b25gIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gYmUgb2YgdHlwZVxuYE1zZ2Agc28gdGhleSBjYW4gYmUgaGFuZGxlZCBieSB5b3VyIHVwZGF0ZSBmdW5jdGlvbiFcbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IE5vZGUgYSAtPiBOb2RlIG1zZ1xubWFwID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5tYXBcblxuXG5cbi0tIEFUVFJJQlVURVNcblxuXG57LXwgV2hlbiB1c2luZyBIVE1MIGFuZCBKUywgdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgcGFydHMgb2YgYSBET00gbm9kZS5cblxuICAxLiBBdHRyaWJ1dGVzICZtZGFzaDsgWW91IGNhbiBzZXQgdGhpbmdzIGluIEhUTUwgaXRzZWxmLiBTbyB0aGUgYGNsYXNzYFxuICAgICBpbiBgPGRpdiBjbGFzcz1cImdyZWV0aW5nXCI+PC9kaXY+YCBpcyBjYWxsZWQgYW4gKmF0dHJpYnV0ZSouXG5cbiAgMi4gUHJvcGVydGllcyAmbWRhc2g7IFlvdSBjYW4gYWxzbyBzZXQgdGhpbmdzIGluIEpTLiBTbyB0aGUgYGNsYXNzTmFtZWBcbiAgICAgaW4gYGRpdi5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpcyBjYWxsZWQgYSAqcHJvcGVydHkqLlxuXG5TbyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgY29ycmVzcG9uZHMgdG8gdGhlIGBjbGFzc05hbWVgIHByb3BlcnR5LiBBdCBmaXJzdFxuZ2xhbmNlLCBwZXJoYXBzIHRoaXMgZGlzdGluY3Rpb24gaXMgZGVmZW5zaWJsZSwgYnV0IGl0IGdldHMgbXVjaCBjcmF6aWVyLlxuKlRoZXJlIGlzIG5vdCBhbHdheXMgYSBvbmUtdG8tb25lIG1hcHBpbmcgYmV0d2VlbiBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0aWVzISpcblllcywgdGhhdCBpcyBhIHRydWUgZmFjdC4gU29tZXRpbWVzIGFuIGF0dHJpYnV0ZSBleGlzdHMsIGJ1dCB0aGVyZSBpcyBub1xuY29ycmVzcG9uZGluZyBwcm9wZXJ0eS4gU29tZXRpbWVzIGNoYW5naW5nIGFuIGF0dHJpYnV0ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlXG51bmRlcmx5aW5nIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgYXMgb2YgdGhpcyB3cml0aW5nLCB0aGUgYHdlYmtpdC1wbGF5c2lubGluZWBcbmF0dHJpYnV0ZSBjYW4gYmUgdXNlZCBpbiBIVE1MLCBidXQgdGhlcmUgaXMgbm8gY29ycmVzcG9uZGluZyBwcm9wZXJ0eSFcbi19XG50eXBlIEF0dHJpYnV0ZSBtc2cgPSBBdHRyaWJ1dGVcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIG5vZGUgXCJkaXZcIlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZENvbG9yXCIgXCJyZWRcIlxuICAgICAgICAsIHN0eWxlIFwiaGVpZ2h0XCIgXCI5MHB4XCJcbiAgICAgICAgLCBzdHlsZSBcIndpZHRoXCIgXCIxMDAlXCJcbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgXCJIZWxsbyFcIlxuICAgICAgICBdXG5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IENyZWF0ZSBhIHByb3BlcnR5LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgYnV0dG9uTGFiZWwgOiBOb2RlIG1zZ1xuICAgIGJ1dHRvbkxhYmVsID1cbiAgICAgIG5vZGUgXCJsYWJlbFwiIFsgcHJvcGVydHkgXCJodG1sRm9yXCIgKEVuY29kZS5zdHJpbmcgXCJidXR0b25cIikgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKnByb3BlcnR5KiBuYW1lLCBzbyB3ZSB1c2UgYGh0bWxGb3JgIGFzIGl0XG53b3VsZCBiZSBpbiBKYXZhU2NyaXB0LCBub3QgYGZvcmAgYXMgaXQgd291bGQgYXBwZWFyIGluIEhUTUwuXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnByb3BlcnR5XG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9Jbm5lckh0bWxPckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgQ3JlYXRlIGFuIGF0dHJpYnV0ZS4gVGhpcyB1c2VzIEphdmFTY3JpcHTigJlzIGBzZXRBdHRyaWJ1dGVgIGZ1bmN0aW9uXG5iZWhpbmQgdGhlIHNjZW5lcy5cblxuICAgIGJ1dHRvbkxhYmVsIDogTm9kZSBtc2dcbiAgICBidXR0b25MYWJlbCA9XG4gICAgICBub2RlIFwibGFiZWxcIiBbIGF0dHJpYnV0ZSBcImZvclwiIFwiYnV0dG9uXCIgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKmF0dHJpYnV0ZSogbmFtZSwgc28gd2UgdXNlIGBmb3JgIGFzIGl0IHdvdWxkXG5iZSBpbiBIVE1MLCBub3QgYGh0bWxGb3JgIGFzIGl0IHdvdWxkIGFwcGVhciBpbiBKUy5cbi19XG5hdHRyaWJ1dGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmF0dHJpYnV0ZSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgV291bGQgeW91IGJlbGlldmUgdGhhdCB0aGVyZSBpcyBhbm90aGVyIHdheSB0byBkbyB0aGlzPyEgVGhpcyB1c2VzXG5KYXZhU2NyaXB0J3MgYHNldEF0dHJpYnV0ZU5TYCBmdW5jdGlvbiBiZWhpbmQgdGhlIHNjZW5lcy4gSXQgaXMgZG9pbmcgcHJldHR5XG5tdWNoIHRoZSBzYW1lIHRoaW5nIGFzIGBhdHRyaWJ1dGVgIGJ1dCB5b3UgYXJlIGFibGUgdG8gaGF2ZSBuYW1lc3BhY2VkXG5hdHRyaWJ1dGVzLiBBcyBhbiBleGFtcGxlLCB0aGUgYGVsbS9zdmdgIHBhY2thZ2UgZGVmaW5lcyBhbiBhdHRyaWJ1dGVcbmxpa2UgdGhpczpcblxuICAgIHhsaW5rSHJlZiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgeGxpbmtIcmVmIHZhbHVlID1cbiAgICAgIGF0dHJpYnV0ZU5TIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIFwieGxpbms6aHJlZlwiIHZhbHVlXG4tfVxuYXR0cmlidXRlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGVOUyBuYW1lc3BhY2Uga2V5IHZhbHVlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5hdHRyaWJ1dGVOU1xuICAgIG5hbWVzcGFjZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcEF0dHJpYnV0ZSA6IChhIC0+IGIpIC0+IEF0dHJpYnV0ZSBhIC0+IEF0dHJpYnV0ZSBiXG5tYXBBdHRyaWJ1dGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm1hcEF0dHJpYnV0ZVxuXG5cblxuLS0gRVZFTlRTXG5cblxuey18IENyZWF0ZSBjdXN0b20gZXZlbnQgaGFuZGxlcnMuXG5cbllvdSBjYW4gZGVmaW5lIGBvbkNsaWNrYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBvbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNsaWNrIG1zZyA9XG4gICAgICBvbiBcImNsaWNrXCIgKE5vcm1hbCAoRGVjb2RlLnN1Y2NlZWQgbXNnKSlcblxuKipOb3RlOioqIFRoZXNlIGV2ZW50IGhhbmRsZXJzIHRyaWdnZXIgaW4gdGhlIGJ1YmJsZSBwaGFzZS4gWW91IGNhbiBsZWFybiBtb3JlXG5hYm91dCB3aGF0IHRoYXQgbWVhbnMgW2hlcmVdW10uIFRoZXJlIGlzIG5vdCBzdXBwb3J0IHdpdGhpbiBHcmVuIGZvciBkb2luZ1xudHJpY2tzIHdpdGggdGhlIGNhcHR1cmUgcGhhc2UuIFdlIHJlY29tbWVuZCBkb2luZyB0aGF0IGluIEpTIHRocm91Z2ggcG9ydHMuXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9ibG9iL21hc3Rlci9oaW50cy9jYXB0dXJlLXZzLWJ1YmJsZS5tZFxuLX1cbm9uIDogU3RyaW5nIC0+IEhhbmRsZXIgbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5vblxuXG5cbnstfCBXaGVuIHVzaW5nIGBvbmAgeW91IGNhbiBjdXN0b21pemUgdGhlIGV2ZW50IGJlaGF2aW9yXG5hIGJpdC4gVGhlcmUgYXJlIHR3byB3YXlzIHRvIGRvIHRoaXM6XG5cbiAgLSBbYHN0b3BQcm9wYWdhdGlvbmBdW3NwXSBtZWFucyB0aGUgZXZlbnQgc3RvcHMgdHJhdmVsaW5nIHRocm91Z2ggdGhlIERPTS5cbiAgU28gaWYgcHJvcGFnYXRpb24gb2YgYSBjbGljayBpcyBzdG9wcGVkLCBpdCB3aWxsIG5vdCB0cmlnZ2VyIGFueSBvdGhlciBldmVudFxuICBsaXN0ZW5lcnMuXG5cbiAgLSBbYHByZXZlbnREZWZhdWx0YF1bcGRdIG1lYW5zIGFueSBidWlsdC1pbiBicm93c2VyIGJlaGF2aW9yIHJlbGF0ZWQgdG8gdGhlXG4gIGV2ZW50IGlzIHByZXZlbnRlZC4gVGhpcyBjYW4gYmUgaGFuZHkgd2l0aCBrZXkgcHJlc3NlcyBvciB0b3VjaCBnZXN0dXJlcy5cblxuKipOb3RlIDE6KiogQSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIGNyZWF0ZWQgaWYgeW91IHVzZSBgTm9ybWFsYFxub3IgYE1heVN0b3BQcm9wYWdhdGlvbmAuIEluIGJvdGggY2FzZXMgYHByZXZlbnREZWZhdWx0YCBjYW5ub3QgYmUgdXNlZCwgc29cbndlIGNhbiBlbmFibGUgb3B0aW1pemF0aW9ucyBmb3IgdG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lXG5icm93c2Vycy5cblxuKipOb3RlIDI6KiogU29tZSBhY3Rpb25zLCBsaWtlIHVwbG9hZGluZyBhbmQgZG93bmxvYWRpbmcgZmlsZXMsIGFyZSBvbmx5XG5hbGxvd2VkIHdoZW4gdGhlIEphdmFTY3JpcHQgZXZlbnQgbG9vcCBpcyBydW5uaW5nIGJlY2F1c2Ugb2YgdXNlciBpbnB1dC4gVGhpc1xuaXMgZm9yIHNlY3VyaXR5ISBTbyB3aGVuIGFuIGV2ZW50IG9jY3Vycywgd2UgY2FsbCBgdXBkYXRlYCBhbmQgc2VuZCBhbnkgYHBvcnRgXG5tZXNzYWdlcyBpbW1lZGlhdGVseSwgYWxsIHdpdGhpbiB0aGUgc2FtZSB0aWNrIG9mIHRoZSBldmVudCBsb29wLiBUaGlzIG1ha2VzXG5pdCBwb3NzaWJsZSB0byBoYW5kbGUgdXNlci1pbnN0aWdhdGVkIGV2ZW50cyBpbiBwb3J0cy5cblxuKipOb3RlIDM6KiogTm9ybWFsbHkgdGhlIGB2aWV3YCBpcyBzaG93biBpbiB0aGUgbmV4dCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuY2FsbC4gVGhpcyBhbGxvd3MgdXMgdG8gc2F2ZSBzb21lIHdvcmsgaWYgbWVzc2FnZXMgYXJlIGNvbWluZyBpbiB2ZXJ5IHF1aWNrbHkuXG5CdXQgaWYgYHN0b3BQcm9wYWdhdGlvbmAgaXMgdXNlZCwgd2UgdXBkYXRlIHRoZSBET00gaW1tZWRpYXRlbHksIHdpdGhpbiB0aGVcbnNhbWUgdGljayBvZiB0aGUgZXZlbnQgbG9vcC4gVGhpcyBpcyB1c2VmdWwgZm9yIERPTSBub2RlcyB0aGF0IGhvbGQgdGhlaXIgb3duXG5zdGF0ZSwgbGlrZSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+YC4gSWYgc29tZW9uZSB0eXBlcyB2ZXJ5IGZhc3QsIHRoZSBzdGF0ZSBpbiB0aGVcbkRPTSBjYW4gZGl2ZXJnZSBmcm9tIHRoZSBzdGF0ZSBpbiB5b3VyIGBNb2RlbGAgd2hpbGUgd2FpdGluZyBvbiB0aGUgbmV4dFxuYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgY2FsbC4gU28gdXBkYXRpbmcgdGhlIERPTSBzeW5jaHJvbm91c2x5IG1ha2VzIHRoaXNcbmRpdmVyZ2VuY2UgaW1wb3NzaWJsZS5cblxuW3NwXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuW3BkXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxudHlwZSBIYW5kbGVyIG1zZ1xuICA9IE5vcm1hbCAoSnNvbi5EZWNvZGVyIG1zZylcbiAgfCBNYXlTdG9wUHJvcGFnYXRpb24gKEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfSlcbiAgfCBNYXlQcmV2ZW50RGVmYXVsdCAoSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgcHJldmVudERlZmF1bHQgOiBCb29sIH0pXG4gIHwgQ3VzdG9tIChKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSlcblxuXG5cbi0tIExBWlkgTk9ERVNcblxuXG57LXwgQSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdGhhdCBkZWxheXMgdGhlIGJ1aWxkaW5nIG9mIHZpcnR1YWwgRE9NIG5vZGVzLlxuXG5DYWxsaW5nIGAodmlldyBtb2RlbClgIHdpbGwgZGVmaW5pdGVseSBidWlsZCBzb21lIHZpcnR1YWwgRE9NLCBwZXJoYXBzIGEgbG90IG9mXG5pdC4gQ2FsbGluZyBgKGxhenkgdmlldyBtb2RlbClgIGRlbGF5cyB0aGUgY2FsbCB1bnRpbCBsYXRlci4gRHVyaW5nIGRpZmZpbmcsIHdlXG5jYW4gY2hlY2sgdG8gc2VlIGlmIGBtb2RlbGAgaXMgcmVmZXJlbnRpYWxseSBlcXVhbCB0byB0aGUgcHJldmlvdXMgdmFsdWUgdXNlZCxcbmFuZCBpZiBzbywgd2UganVzdCBzdG9wLiBObyBuZWVkIHRvIGJ1aWxkIHVwIHRoZSB0cmVlIHN0cnVjdHVyZSBhbmQgZGlmZiBpdCxcbndlIGtub3cgaWYgdGhlIGlucHV0IHRvIGB2aWV3YCBpcyB0aGUgc2FtZSwgdGhlIG91dHB1dCBtdXN0IGJlIHRoZSBzYW1lIVxuLX1cbmxhenkgOiAoYSAtPiBOb2RlIG1zZykgLT4gYSAtPiBOb2RlIG1zZ1xubGF6eSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eVxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHR3byBhcmd1bWVudHMuXG4tfVxubGF6eTIgOiAoYSAtPiBiIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gTm9kZSBtc2dcbmxhenkyID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5MlxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHRocmVlIGFyZ3VtZW50cy5cbi19XG5sYXp5MyA6IChhIC0+IGIgLT4gYyAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gTm9kZSBtc2dcbmxhenkzID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5M1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZvdXIgYXJndW1lbnRzLlxuLX1cbmxhenk0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2dcbmxhenk0ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5NFxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZpdmUgYXJndW1lbnRzLlxuLX1cbmxhenk1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IE5vZGUgbXNnXG5sYXp5NSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTVcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBzaXggYXJndW1lbnRzLlxuLX1cbmxhenk2IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBOb2RlIG1zZ1xubGF6eTYgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk2XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gc2V2ZW4gYXJndW1lbnRzLlxuLX1cbmxhenk3IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2dcbmxhenk3ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5N1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGVpZ2h0IGFyZ3VtZW50cy5cbi19XG5sYXp5OCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IGggLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiBOb2RlIG1zZ1xubGF6eTggPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk4XG5cblxuXG4tLSBLRVlFRCBOT0RFU1xuXG5cbnstfCBXb3JrcyBqdXN0IGxpa2UgYG5vZGVgLCBidXQgeW91IGFkZCBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGVhY2ggY2hpbGRcbm5vZGUuIFlvdSB3YW50IHRoaXMgd2hlbiB5b3UgaGF2ZSBhIGxpc3Qgb2Ygbm9kZXMgdGhhdCBpcyBjaGFuZ2luZzogYWRkaW5nXG5ub2RlcywgcmVtb3Zpbmcgbm9kZXMsIGV0Yy4gSW4gdGhlc2UgY2FzZXMsIHRoZSB1bmlxdWUgaWRlbnRpZmllcnMgaGVscCBtYWtlXG50aGUgRE9NIG1vZGlmaWNhdGlvbnMgbW9yZSBlZmZpY2llbnQuXG4tfVxua2V5ZWROb2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuey18IENyZWF0ZSBhIGtleWVkIGFuZCBuYW1lc3BhY2VkIERPTSBub2RlLiBGb3IgZXhhbXBsZSwgYW4gU1ZHIGA8Zz5gIG5vZGVcbmNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzOlxuXG4gICAgZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoIFN0cmluZywgTm9kZSBtc2cgKSAtPiBOb2RlIG1zZ1xuICAgIGcgPVxuICAgICAga2V5ZWROb2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwiZ1wiXG4tfVxua2V5ZWROb2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZU5TIG5hbWVzcGFjZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZU5TIG5hbWVzcGFjZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcblxuXG50b0hhbmRsZXJJbnQgOiBIYW5kbGVyIG1zZyAtPiBJbnRcbnRvSGFuZGxlckludCBoYW5kbGVyID1cbiAgd2hlbiBoYW5kbGVyIGlzXG4gICAgTm9ybWFsIF8gLT4gMFxuICAgIE1heVN0b3BQcm9wYWdhdGlvbiBfIC0+IDFcbiAgICBNYXlQcmV2ZW50RGVmYXVsdCBfIC0+IDJcbiAgICBDdXN0b20gXyAtPiAzXG4iLAogICAgICAgICJtb2R1bGUgVXJsIGV4cG9zaW5nXG4gICggVXJsXG4gICwgUHJvdG9jb2woLi4pXG4gICwgdG9TdHJpbmdcbiAgLCBmcm9tU3RyaW5nXG4gICwgcGVyY2VudEVuY29kZVxuICAsIHBlcmNlbnREZWNvZGVcbiAgKVxuXG5cbnstfFxuXG4jIFVSTHNcbkBkb2NzIFVybCwgUHJvdG9jb2wsIHRvU3RyaW5nLCBmcm9tU3RyaW5nXG5cbiMgUGVyY2VudC1FbmNvZGluZ1xuQGRvY3MgcGVyY2VudEVuY29kZSwgcGVyY2VudERlY29kZVxuXG4tfVxuXG5cbmltcG9ydCBHcmVuLktlcm5lbC5VcmxcblxuXG5cbi0tIFVSTFxuXG5cbnstfCBJbiBbdGhlIFVSSSBzcGVjXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiksIFRpbSBCZXJuZXJzLUxlZVxuc2F5cyBhIFVSTCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYFxuICBodHRwczovL2V4YW1wbGUuY29tOjgwNDIvb3Zlci90aGVyZT9uYW1lPWZlcnJldCNub3NlXG4gIFxcX19fLyAgIFxcX19fX19fX19fX19fX18vXFxfX19fX19fX18vIFxcX19fX19fX19fLyBcXF9fL1xuICAgIHwgICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAgc2NoZW1lICAgICBhdXRob3JpdHkgICAgICAgcGF0aCAgICAgICAgcXVlcnkgICBmcmFnbWVudFxuYGBgXG5cbldoZW4geW91IGFyZSBjcmVhdGluZyBhIHNpbmdsZS1wYWdlIGFwcCB3aXRoIFtgQnJvd3Nlci5hcHBsaWNhdGlvbmBdW2FwcF0sIHlvdVxudXNlIHRoZSBbYFVybC5QYXJzZXJgXShVcmwtUGFyc2VyKSBtb2R1bGUgdG8gdHVybiBhIGBVcmxgIGludG8gZXZlbiBuaWNlciBkYXRhLlxuXG5JZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gVVJMcywgY2hlY2sgb3V0IHRoZSBbYFVybC5CdWlsZGVyYF0oVXJsLUJ1aWxkZXIpXG5tb2R1bGUgYXMgd2VsbCFcblxuW2FwcF06IC9wYWNrYWdlcy9lbG0vYnJvd3Nlci9sYXRlc3QvQnJvd3NlciNhcHBsaWNhdGlvblxuXG4qKk5vdGU6KiogVGhpcyBpcyBhIHN1YnNldCBvZiBhbGwgdGhlIGZ1bGwgcG9zc2liaWxpdGllcyBsaXN0ZWQgaW4gdGhlIFVSSVxuc3BlYy4gU3BlY2lmaWNhbGx5LCBpdCBkb2VzIG5vdCBhY2NlcHQgdGhlIGB1c2VyaW5mb2Agc2VnbWVudCB5b3Ugc2VlIGluIGVtYWlsXG5hZGRyZXNzZXMgbGlrZSBgdG9tQGV4YW1wbGUuY29tYC5cbi19XG50eXBlIGFsaWFzIFVybCA9XG4gIHsgcHJvdG9jb2wgOiBQcm90b2NvbFxuICAsIGhvc3QgOiBTdHJpbmdcbiAgLCBwb3J0XyA6IE1heWJlIEludFxuICAsIHBhdGggOiBTdHJpbmdcbiAgLCBxdWVyeSA6IE1heWJlIFN0cmluZ1xuICAsIGZyYWdtZW50IDogTWF5YmUgU3RyaW5nXG4gIH1cblxuXG57LXwgSXMgdGhlIFVSTCBzZXJ2ZWQgb3ZlciBhIHNlY3VyZSBjb25uZWN0aW9uIG9yIG5vdD9cbi19XG50eXBlIFByb3RvY29sID0gSHR0cCB8IEh0dHBzXG5cblxuey18IEF0dGVtcHQgdG8gYnJlYWsgYSBVUkwgdXAgaW50byBbYFVybGBdKCNVcmwpLiBUaGlzIGlzIHVzZWZ1bCBpblxuc2luZ2xlLXBhZ2UgYXBwcyB3aGVuIHlvdSB3YW50IHRvIHBhcnNlIGNlcnRhaW4gY2h1bmtzIG9mIGEgVVJMIHRvIGZpZ3VyZSBvdXRcbndoYXQgdG8gc2hvdyBvbiBzY3JlZW4uXG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cHM6Ly9leGFtcGxlLmNvbTo0NDNcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gSnVzdCA0NDNcbiAgICAtLSAgICwgcGF0aCA9IFwiL1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IE5vdGhpbmdcbiAgICAtLSAgIH1cblxuICAgIGZyb21TdHJpbmcgXCJodHRwczovL2V4YW1wbGUuY29tL2hhdHM/cT10b3AlMjBoYXRcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvaGF0c1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gSnVzdCBcInE9dG9wJTIwaGF0XCJcbiAgICAtLSAgICwgZnJhZ21lbnQgPSBOb3RoaW5nXG4gICAgLS0gICB9XG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cDovL2V4YW1wbGUuY29tL2NvcmUvTGlzdC8jbWFwXCJcbiAgICAtLSBKdXN0XG4gICAgLS0gICB7IHByb3RvY29sID0gSHR0cFxuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvY29yZS9MaXN0L1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IEp1c3QgXCJtYXBcIlxuICAgIC0tICAgfVxuXG5UaGUgY29udmVyc2lvbiB0byBzZWdtZW50cyBjYW4gZmFpbCBpbiBzb21lIGNhc2VzIGFzIHdlbGw6XG5cbiAgICBmcm9tU3RyaW5nIFwiZXhhbXBsZS5jb206NDQzXCIgICAgICAgID09IE5vdGhpbmcgIC0tIG5vIHByb3RvY29sXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly90b21AZXhhbXBsZS5jb21cIiA9PSBOb3RoaW5nICAtLSB1c2VyaW5mbyBkaXNhbGxvd2VkXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly8jY2F0c1wiICAgICAgICAgICA9PSBOb3RoaW5nICAtLSBubyBob3N0XG5cbioqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHVzZSBbYHBlcmNlbnREZWNvZGVgXSgjcGVyY2VudERlY29kZSkgYW55dGhpbmcuXG5JdCBqdXN0IHNwbGl0cyB0aGluZ3MgdXAuIFtgVXJsLlBhcnNlcmBdKFVybC1QYXJzZXIpIGFjdHVhbGx5IF9uZWVkc18gdGhlIHJhd1xuYHF1ZXJ5YCBzdHJpbmcgdG8gcGFyc2UgaXQgcHJvcGVybHkuIE90aGVyd2lzZSBpdCBjb3VsZCBnZXQgY29uZnVzZWQgYWJvdXQgYD1gXG5hbmQgYCZgIGNoYXJhY3RlcnMhXG4tfVxuZnJvbVN0cmluZyA6IFN0cmluZyAtPiBNYXliZSBVcmxcbmZyb21TdHJpbmcgc3RyID1cbiAgaWYgU3RyaW5nLnN0YXJ0c1dpdGggXCJodHRwOi8vXCIgc3RyIHRoZW5cbiAgICBjaG9tcEFmdGVyUHJvdG9jb2wgSHR0cCAoU3RyaW5nLmRyb3BGaXJzdCA3IHN0cilcblxuICBlbHNlIGlmIFN0cmluZy5zdGFydHNXaXRoIFwiaHR0cHM6Ly9cIiBzdHIgdGhlblxuICAgIGNob21wQWZ0ZXJQcm90b2NvbCBIdHRwcyAoU3RyaW5nLmRyb3BGaXJzdCA4IHN0cilcblxuICBlbHNlXG4gICAgTm90aGluZ1xuXG5cbmNob21wQWZ0ZXJQcm90b2NvbCA6IFByb3RvY29sIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQWZ0ZXJQcm90b2NvbCBwcm90b2NvbCBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgKFN0cmluZy5pbmRpY2VzIFwiI1wiIHN0cikgaXNcbiAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBOb3RoaW5nIHN0clxuXG4gICAgICBKdXN0IGkgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCAoSnVzdCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikpIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlRnJhZ21lbnQgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBmcmFnIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBBcnJheS5nZXQgMCAoU3RyaW5nLmluZGljZXMgXCI/XCIgc3RyKSBpc1xuICAgICAgTm90aGluZyAtPlxuICAgICAgICBjaG9tcEJlZm9yZVF1ZXJ5IHByb3RvY29sIE5vdGhpbmcgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgKEp1c3QgKFN0cmluZy5kcm9wRmlyc3QgKGkgKyAxKSBzdHIpKSBmcmFnIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlUXVlcnkgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIEFycmF5LmdldCAwIChTdHJpbmcuaW5kaWNlcyBcIi9cIiBzdHIpIGlzXG4gICAgICBOb3RoaW5nIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCBcIi9cIiBwYXJhbXMgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCAoU3RyaW5nLmRyb3BGaXJzdCBpIHN0cikgcGFyYW1zIGZyYWcgKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpXG5cblxuY2hvbXBCZWZvcmVQYXRoIDogUHJvdG9jb2wgLT4gU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVQYXRoIHByb3RvY29sIHBhdGggcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHx8IFN0cmluZy5jb250YWlucyBcIkBcIiBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gU3RyaW5nLmluZGljZXMgXCI6XCIgc3RyIGlzXG4gICAgICBbXSAtPlxuICAgICAgICBKdXN0IDx8IFxuICAgICAgICAgICAgeyBwcm90b2NvbCA9IHByb3RvY29sIFxuICAgICAgICAgICAgLCBob3N0ID0gc3RyIFxuICAgICAgICAgICAgLCBwb3J0XyA9IE5vdGhpbmcgXG4gICAgICAgICAgICAsIHBhdGggPSBwYXRoIFxuICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICwgZnJhZ21lbnQgPSBmcmFnXG4gICAgICAgICAgICB9XG5cbiAgICAgIFtpXSAtPlxuICAgICAgICB3aGVuIFN0cmluZy50b0ludCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikgaXNcbiAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICBwb3J0XyAtPlxuICAgICAgICAgICAgSnVzdCA8fCBcbiAgICAgICAgICAgICAgICB7IHByb3RvY29sID0gcHJvdG9jb2xcbiAgICAgICAgICAgICAgICAsIGhvc3QgPSAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cikgXG4gICAgICAgICAgICAgICAgLCBwb3J0XyA9IHBvcnRfIFxuICAgICAgICAgICAgICAgICwgcGF0aCA9IHBhdGggXG4gICAgICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICAgICAsIGZyYWdtZW50ID0gZnJhZ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgXyAtPlxuICAgICAgICBOb3RoaW5nXG5cblxuey18IFR1cm4gYSBbYFVybGBdKCNVcmwpIGludG8gYSBgU3RyaW5nYC5cbi19XG50b1N0cmluZyA6IFVybCAtPiBTdHJpbmdcbnRvU3RyaW5nIHVybCA9XG4gIGxldFxuICAgIGh0dHAgPVxuICAgICAgd2hlbiB1cmwucHJvdG9jb2wgaXNcbiAgICAgICAgSHR0cCAtPlxuICAgICAgICAgIFwiaHR0cDovL1wiXG5cbiAgICAgICAgSHR0cHMgLT5cbiAgICAgICAgICBcImh0dHBzOi8vXCJcbiAgaW5cbiAgYWRkUG9ydCB1cmwucG9ydF8gKGh0dHAgKysgdXJsLmhvc3QpICsrIHVybC5wYXRoXG4gICAgfD4gYWRkUHJlZml4ZWQgXCI/XCIgdXJsLnF1ZXJ5XG4gICAgfD4gYWRkUHJlZml4ZWQgXCIjXCIgdXJsLmZyYWdtZW50XG5cblxuYWRkUG9ydCA6IE1heWJlIEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hZGRQb3J0IG1heWJlUG9ydCBzdGFydGVyID1cbiAgd2hlbiBtYXliZVBvcnQgaXNcbiAgICBOb3RoaW5nIC0+XG4gICAgICBzdGFydGVyXG5cbiAgICBKdXN0IHBvcnRfIC0+XG4gICAgICBzdGFydGVyICsrIFwiOlwiICsrIFN0cmluZy5mcm9tSW50IHBvcnRfXG5cblxuYWRkUHJlZml4ZWQgOiBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbmFkZFByZWZpeGVkIHByZWZpeCBtYXliZVNlZ21lbnQgc3RhcnRlciA9XG4gIHdoZW4gbWF5YmVTZWdtZW50IGlzXG4gICAgTm90aGluZyAtPlxuICAgICAgc3RhcnRlclxuXG4gICAgSnVzdCBzZWdtZW50IC0+XG4gICAgICBzdGFydGVyICsrIHByZWZpeCArKyBzZWdtZW50XG5cblxuXG4tLSBQRVJDRU5UIEVOQ09ESU5HXG5cblxuey18ICoqVXNlIFtVcmwuQnVpbGRlcl0oVXJsLUJ1aWxkZXIpIGluc3RlYWQhKiogRnVuY3Rpb25zIGxpa2UgYGFic29sdXRlYCxcbmByZWxhdGl2ZWAsIGFuZCBgY3Jvc3NPcmlnaW5gIGFscmVhZHkgZG8gdGhpcyBhdXRvbWF0aWNhbGx5ISBgcGVyY2VudEVuY29kZWBcbmlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXQgZXh0cmVtZWx5IGN1c3RvbSBjYXNlcyBhcmUgcG9zc2libGUsIGlmIG5lZWRlZC5cblxuUGVyY2VudC1lbmNvZGluZyBpcyBob3cgW3RoZSBvZmZpY2lhbCBVUkkgc3BlY11bdXJpXSDigJxlc2NhcGVz4oCdIHNwZWNpYWxcbmNoYXJhY3RlcnMuIFlvdSBjYW4gc3RpbGwgcmVwcmVzZW50IGEgYD9gIGV2ZW4gdGhvdWdoIGl0IGlzIHJlc2VydmVkIGZvclxucXVlcmllcy5cblxuVGhpcyBmdW5jdGlvbiBleGlzdHMgaW4gY2FzZSB5b3Ugd2FudCB0byBkbyBzb21ldGhpbmcgZXh0cmEgY3VzdG9tLiBIZXJlIGFyZVxuc29tZSBleGFtcGxlczpcblxuICAgIC0tIHN0YW5kYXJkIEFTQ0lJIGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcImhhdFwiICAgPT0gXCJoYXRcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCJ0byBiZVwiID09IFwidG8lMjBiZVwiXG4gICAgcGVyY2VudEVuY29kZSBcIjk5JVwiICAgPT0gXCI5OSUyNVwiXG5cbiAgICAtLSBub24tc3RhbmRhcmQsIGJ1dCB3aWRlbHkgYWNjZXB0ZWQsIFVURi04IGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcIiRcIiA9PSBcIiUyNFwiXG4gICAgcGVyY2VudEVuY29kZSBcIsKiXCIgPT0gXCIlQzIlQTJcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCLigqxcIiA9PSBcIiVFMiU4MiVBQ1wiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZW5jb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLFxuYW5kIHRoZSBydWxlcyBhcmUgZGVzY3JpYmVkIGluIG1vcmUgZGV0YWlsIG9mZmljaWFsbHkgW2hlcmVdW3MyXSBhbmQgd2l0aCBzb21lXG5ub3RlcyBhYm91dCBVbmljb2RlIFtoZXJlXVt3aWtpXS5cblxuW2pzXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZW5jb2RlVVJJQ29tcG9uZW50XG5bdXJpXTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODZcbltzMl06IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4xXG5bd2lraV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BlcmNlbnQtZW5jb2Rpbmdcbi19XG5wZXJjZW50RW5jb2RlIDogU3RyaW5nIC0+IFN0cmluZ1xucGVyY2VudEVuY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RW5jb2RlXG5cblxuey18ICoqVXNlIFtVcmwuUGFyc2VyXShVcmwtUGFyc2VyKSBpbnN0ZWFkISoqIEl0IHdpbGwgZGVjb2RlIHF1ZXJ5XG5wYXJhbWV0ZXJzIGFwcHJvcHJpYXRlbHkgYWxyZWFkeSEgYHBlcmNlbnREZWNvZGVgIGlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXRcbmV4dHJlbWVseSBjdXN0b20gY2FzZXMgYXJlIHBvc3NpYmxlLCBpZiBuZWVkZWQuXG5cbkNoZWNrIG91dCB0aGUgYHBlcmNlbnRFbmNvZGVgIGZ1bmN0aW9uIHRvIGxlYXJuIGFib3V0IHBlcmNlbnQtZW5jb2RpbmcuXG5UaGlzIGZ1bmN0aW9uIGRvZXMgdGhlIG9wcG9zaXRlISBIZXJlIGFyZSB0aGUgcmV2ZXJzZSBleGFtcGxlczpcblxuICAgIC0tIEFTQ0lJXG4gICAgcGVyY2VudERlY29kZSBcImhhdFwiICAgICAgID09IEp1c3QgXCJoYXRcIlxuICAgIHBlcmNlbnREZWNvZGUgXCJ0byUyMGJlXCIgICA9PSBKdXN0IFwidG8gYmVcIlxuICAgIHBlcmNlbnREZWNvZGUgXCI5OSUyNVwiICAgICA9PSBKdXN0IFwiOTklXCJcblxuICAgIC0tIFVURi04XG4gICAgcGVyY2VudERlY29kZSBcIiUyNFwiICAgICAgID09IEp1c3QgXCIkXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUMyJUEyXCIgICAgPT0gSnVzdCBcIsKiXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUUyJTgyJUFDXCIgPT0gSnVzdCBcIuKCrFwiXG5cbldoeSBpcyBpdCBhIGBNYXliZWAgdGhvdWdoPyBXZWxsLCB0aGVzZSBzdHJpbmdzIGNvbWUgZnJvbSBzdHJhbmdlcnMgb24gdGhlXG5pbnRlcm5ldCBhcyBhIGJ1bmNoIG9mIGJpdHMgYW5kIG1heSBoYXZlIGVuY29kaW5nIHByb2JsZW1zLiBGb3IgZXhhbXBsZTpcblxuICAgIHBlcmNlbnREZWNvZGUgXCIlXCIgICA9PSBOb3RoaW5nICAtLSBub3QgZm9sbG93ZWQgYnkgdHdvIGhleCBkaWdpdHNcbiAgICBwZXJjZW50RGVjb2RlIFwiJVhZXCIgPT0gTm90aGluZyAgLS0gbm90IGZvbGxvd2VkIGJ5IHR3byBIRVggZGlnaXRzXG4gICAgcGVyY2VudERlY29kZSBcIiVDMlwiID09IE5vdGhpbmcgIC0tIGhhbGYgb2YgdGhlIFwiwqJcIiBlbmNvZGluZyBcIiVDMiVBMlwiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZGVjb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLlxuXG5banNdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9kZWNvZGVVUklDb21wb25lbnRcbi19XG5wZXJjZW50RGVjb2RlIDogU3RyaW5nIC0+IE1heWJlIFN0cmluZ1xucGVyY2VudERlY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RGVjb2RlXG4iLAogICAgICAgICJlZmZlY3QgbW9kdWxlIFRhc2sgd2hlcmUgeyBjb21tYW5kID0gTXlDbWQgfSBleHBvc2luZ1xuICAgICggVGFzaywgcGVyZm9ybSwgYXR0ZW1wdCwgZXhlY3V0ZVxuICAgICwgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIG9uRXJyb3IsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgVGFza3MgbWFrZSBpdCBlYXN5IHRvIGRlc2NyaWJlIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIHRoYXQgbWF5IGZhaWwsIGxpa2VcbkhUVFAgcmVxdWVzdHMgb3Igd3JpdGluZyB0byBhIGRhdGFiYXNlLlxuXG5cbkBkb2NzIFRhc2ssIHBlcmZvcm0sIGF0dGVtcHQsIGV4ZWN1dGVcblxuXG4jIyBDaGFpbnNcblxuQGRvY3MgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG5cblxuIyMgTWFwc1xuXG5AZG9jcyBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcblxuXG4jIyBFcnJvcnNcblxuQGRvY3Mgb25FcnJvciwgbWFwRXJyb3JcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKCg8PCksICh8PiksIE5ldmVyKVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgUGxhdGZvcm1cbmltcG9ydCBQbGF0Zm9ybS5DbWQgZXhwb3NpbmcgKENtZClcbmltcG9ydCBSZXN1bHQgZXhwb3NpbmcgKFJlc3VsdCguLikpXG5cblxuey18IEhlcmUgYXJlIHNvbWUgY29tbW9uIHRhc2tzOlxuXG4gIC0gW2Bub3cgOiBUYXNrIHggUG9zaXhgXShUaW1lI25vdylcbiAgLSBbYGZvY3VzIDogU3RyaW5nIC0+IFRhc2sgRXJyb3Ige31gXVtmb2N1c11cbiAgLSBbYHNsZWVwIDogRmxvYXQgLT4gVGFzayB4IHt9YF0oUHJvY2VzcyNzbGVlcClcblxuW2ZvY3VzXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyLkRvbSNmb2N1c1xuXG5JbiBlYWNoIGNhc2Ugd2UgaGF2ZSBhIGBUYXNrYCB0aGF0IHdpbGwgcmVzb2x2ZSBzdWNjZXNzZnVsbHkgd2l0aCBhbiBgYWAgdmFsdWVcbm9yIHVuc3VjY2Vzc2Z1bGx5IHdpdGggYW4gYHhgIHZhbHVlLiBTbyBgQnJvd3Nlci5Eb20uZm9jdXNgIHdlIG1heSBmYWlsIHdpdGggYW5cbmBFcnJvcmAgaWYgdGhlIGdpdmVuIElEIGRvZXMgbm90IGV4aXN0LiBXaGVyZWFzIGBUaW1lLm5vd2AgbmV2ZXIgZmFpbHMgc29cbkkgY2Fubm90IGJlIG1vcmUgc3BlY2lmaWMgdGhhbiBgeGAuIE5vIHN1Y2ggdmFsdWUgd2lsbCBldmVyIGV4aXN0ISBJbnN0ZWFkIGl0XG5hbHdheXMgc3VjY2VlZHMgd2l0aCB0aGUgY3VycmVudCBQT1NJWCB0aW1lLlxuXG5Nb3JlIGdlbmVyYWxseSBhIHRhc2sgaXMgYSBfZGVzY3JpcHRpb25fIG9mIHdoYXQgeW91IG5lZWQgdG8gZG8uIExpa2UgYSB0b2RvXG5saXN0LiBPciBsaWtlIGEgZ3JvY2VyeSBsaXN0LiBPciBsaWtlIEdpdEh1YiBpc3N1ZXMuIFNvIHNheWluZyBcInRoZSB0YXNrIGlzXG50byB0ZWxsIG1lIHRoZSBjdXJyZW50IFBPU0lYIHRpbWVcIiBkb2VzIG5vdCBjb21wbGV0ZSB0aGUgdGFzayEgWW91IG5lZWRcbltgcGVyZm9ybWBdKCNwZXJmb3JtKSB0YXNrcyBvciBbYGF0dGVtcHRgXSgjYXR0ZW1wdCkgdGFza3MuXG5cbi19XG50eXBlIGFsaWFzIFRhc2sgeCBhID1cbiAgICBQbGF0Zm9ybS5UYXNrIHggYVxuXG5cblxuLS0gQkFTSUNTXG5cblxuey18IEEgdGFzayB0aGF0IHN1Y2NlZWRzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBJdCBpcyB1c3VhbGx5IHVzZWQgd2l0aFxuW2BhbmRUaGVuYF0oI2FuZFRoZW4pLiBZb3UgY2FuIHVzZSBpdCBsaWtlIGBtYXBgIGlmIHlvdSB3YW50OlxuXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluTWlsbGlzIDogVGFzayB4IEludFxuICAgIHRpbWVJbk1pbGxpcyA9XG4gICAgICAgIFRpbWUubm93XG4gICAgICAgICAgICB8PiBhbmRUaGVuIChcXHQgLT4gc3VjY2VlZCAoVGltZS5wb3NpeFRvTWlsbGlzIHQpKVxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gVGFzayB4IGFcbnN1Y2NlZWQgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zdWNjZWVkXG5cblxuey18IEEgdGFzayB0aGF0IGZhaWxzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBMaWtlIHdpdGggYHN1Y2NlZWRgLCB0aGlzIGNhbiBiZVxudXNlZCB3aXRoIGBhbmRUaGVuYCB0byBjaGVjayBvbiB0aGUgb3V0Y29tZSBvZiBhbm90aGVyIHRhc2suXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gTm90Rm91bmRcblxuICAgIG5vdEZvdW5kIDogVGFzayBFcnJvciBhXG4gICAgbm90Rm91bmQgPVxuICAgICAgICBmYWlsIE5vdEZvdW5kXG5cbi19XG5mYWlsIDogeCAtPiBUYXNrIHggYVxuZmFpbCA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmZhaWxcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgdGFzay4gTWF5YmUgeW91IHdhbnQgdG8gdXNlIFtgVGltZWBdW3RpbWVdIHRvIGZpZ3VyZVxub3V0IHdoYXQgdGltZSBpdCB3aWxsIGJlIGluIG9uZSBob3VyOlxuXG4gICAgaW1wb3J0IFRhc2sgZXhwb3NpbmcgKFRhc2spXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2subWFwIGFkZEFuSG91ciBUaW1lLm5vd1xuXG4gICAgYWRkQW5Ib3VyIDogVGltZS5Qb3NpeCAtPiBUaW1lLlBvc2l4XG4gICAgYWRkQW5Ib3VyIHRpbWUgPVxuICAgICAgICBUaW1lLm1pbGxpc1RvUG9zaXggKFRpbWUucG9zaXhUb01pbGxpcyB0aW1lICsgNjAgKiA2MCAqIDEwMDApXG5cblt0aW1lXTogVGltZVxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gVGFzayB4IGEgLT4gVGFzayB4IGJcbm1hcCBmdW5jIHRhc2tBID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuIChcXGEgLT4gc3VjY2VlZCAoZnVuYyBhKSlcblxuXG57LXwgUHV0IHRoZSByZXN1bHRzIG9mIHR3byB0YXNrcyB0b2dldGhlci4gRm9yIGV4YW1wbGUsIGlmIHdlIHdhbnRlZCB0byBrbm93XG50aGUgY3VycmVudCBtb250aCwgd2UgY291bGQgdXNlIFtgVGltZWBdW3RpbWVdIHRvIGFzazpcblxuICAgIGltcG9ydCBUYXNrIGV4cG9zaW5nIChUYXNrKVxuICAgIGltcG9ydCBUaW1lXG5cblxuICAgIGdldE1vbnRoIDogVGFzayB4IEludFxuICAgIGdldE1vbnRoID1cbiAgICAgICAgVGFzay5tYXAyIFRpbWUudG9Nb250aCBUaW1lLmhlcmUgVGltZS5ub3dcblxuKipOb3RlOioqIFNheSB3ZSB3ZXJlIGRvaW5nIEhUVFAgcmVxdWVzdHMgaW5zdGVhZC4gYG1hcDJgIGRvZXMgZWFjaCB0YXNrIGluXG5vcmRlciwgc28gaXQgd291bGQgdHJ5IHRoZSBmaXJzdCByZXF1ZXN0IGFuZCBvbmx5IGNvbnRpbnVlIGFmdGVyIGl0IHN1Y2NlZWRzLlxuSWYgaXQgZmFpbHMsIHRoZSB3aG9sZSB0aGluZyBmYWlscyFcblxuW3RpbWVdOiBUaW1lXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCByZXN1bHRcbm1hcDIgZnVuYyB0YXNrQSB0YXNrQiA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYiAtPiBzdWNjZWVkIChmdW5jIGEgYikpXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IGMgLT4gVGFzayB4IHJlc3VsdFxubWFwMyBmdW5jIHRhc2tBIHRhc2tCIHRhc2tDID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgKFxcYiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYyAtPiBzdWNjZWVkIChmdW5jIGEgYiBjKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCByZXN1bHRcbm1hcDQgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxkIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiIGMgZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCBlIC0+IFRhc2sgeCByZXN1bHRcbm1hcDUgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCB0YXNrRSA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxcZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcZSAtPiBzdWNjZWVkIChmdW5jIGEgYiBjIGQgZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IFN0YXJ0IHdpdGggYW4gYXJyYXkgb2YgdGFza3MsIGFuZCB0dXJuIHRoZW0gaW50byBhIHNpbmdsZSB0YXNrIHRoYXQgcmV0dXJucyBhXG5hcnJheS4gVGhlIHRhc2tzIHdpbGwgYmUgcnVuIGluIG9yZGVyIG9uZS1ieS1vbmUgYW5kIGlmIGFueSB0YXNrIGZhaWxzIHRoZSB3aG9sZVxuc2VxdWVuY2UgZmFpbHMuXG5cbiAgICBzZXF1ZW5jZSBbIHN1Y2NlZWQgMSwgc3VjY2VlZCAyIF0gPT0gc3VjY2VlZCBbIDEsIDIgXVxuXG4tfVxuc2VxdWVuY2UgOiBBcnJheSAoVGFzayB4IGEpIC0+IFRhc2sgeCAoQXJyYXkgYSlcbnNlcXVlbmNlIHRhc2tzID1cbiAgICBBcnJheS5mb2xkciAobWFwMiBBcnJheS5wdXNoRmlyc3QpIChzdWNjZWVkIFtdKSB0YXNrc1xuXG5cblxuLS0gQ0hBSU5JTkdcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSB0YXNrIGFuZCBhIGNhbGxiYWNrLiBUaGUgZmlyc3QgdGFzayB3aWxsIHJ1biwgYW5kIGlmIGl0IGlzXG5zdWNjZXNzZnVsLCB5b3UgZ2l2ZSB0aGUgcmVzdWx0IHRvIHRoZSBjYWxsYmFjayByZXN1bHRpbmcgaW4gYW5vdGhlciB0YXNrLiBUaGlzXG50YXNrIHRoZW4gZ2V0cyBydW4uIFdlIGNvdWxkIHVzZSB0aGlzIHRvIG1ha2UgYSB0YXNrIHRoYXQgcmVzb2x2ZXMgYW4gaG91ciBmcm9tXG5ub3c6XG5cblxuICAgIGltcG9ydCBQcm9jZXNzXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHRpbWVJbk9uZUhvdXIgOiBUYXNrIHggVGltZS5Qb3NpeFxuICAgIHRpbWVJbk9uZUhvdXIgPVxuICAgICAgICBQcm9jZXNzLnNsZWVwICg2MCAqIDYwICogMTAwMClcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcXyAtPiBUaW1lLm5vdylcblxuRmlyc3QgdGhlIHByb2Nlc3Mgc2xlZXBzIGZvciBhbiBob3VyICoqYW5kIHRoZW4qKiBpdCB0ZWxscyB1cyB3aGF0IHRpbWUgaXQgaXMuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gVGFzayB4IGIpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuYW5kVGhlblxuXG5cbnstfCBUaGlzIGlzIGxpa2UgW2FuZFRoZW5dKGFuZFRoZW4pIGJ1dCB0aGUgYXJndW1lbnRzIGFyZSByZXZlcnNlZC4gVGhlIGNhbGxiYWNrXG5pcyB0aGUgbGFzdCBhcmd1bWVudCwgaW5zdGVhZCBvZiB0aGUgZmlyc3QuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIHdyaXRlIGltcGVyYXRpdmVcbmNvZGUgd2hlcmUgZWFjaCBjYWxsYmFjayBpbnZvbHZlcyBtb3JlIGxvZ2ljLlxuXG4gICAgaW1wb3J0IFByb2Nlc3NcbiAgICBpbXBvcnQgVGltZVxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2suYXdhaXQgKFByb2Nlc3Muc2xlZXAgPHwgNjAgKiA2MCAqIDEwMDApIDx8IFxcXyAtPlxuICAgICAgICAgICAgVGltZS5ub3dcblxuKGEpd2FpdCBmb3IgYW4gaG91ciwgdGhlbiBmZXRjaCB0aGUgY3VycmVudCB0aW1lLlxuXG4tfVxuYXdhaXQgOiBUYXNrIHggYSAtPiAoYSAtPiBUYXNrIHggYikgLT4gVGFzayB4IGJcbmF3YWl0IHRzayBjYWxsYmFjayA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmFuZFRoZW4gY2FsbGJhY2sgdHNrXG5cblxuLS0gRVJST1JTXG5cblxuey18IFJlY292ZXIgZnJvbSBhIGZhaWx1cmUgaW4gYSB0YXNrLiBJZiB0aGUgZ2l2ZW4gdGFzayBmYWlscywgd2UgdXNlIHRoZVxuY2FsbGJhY2sgdG8gcmVjb3Zlci5cblxuICAgIGZhaWwgXCJmaWxlIG5vdCBmb3VuZFwiXG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA0MlxuXG4gICAgc3VjY2VlZCA5XG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA5XG5cbi19XG5vbkVycm9yIDogKHggLT4gVGFzayB5IGEpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeSBhXG5vbkVycm9yID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIub25FcnJvclxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIGVycm9yIHZhbHVlLiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IG5lZWQgYSBidW5jaCBvZiBlcnJvclxudHlwZXMgdG8gbWF0Y2ggdXAuXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gSHR0cCBIdHRwLkVycm9yXG4gICAgICAgIHwgV2ViR0wgV2ViR0wuRXJyb3JcblxuICAgIGdldFJlc291cmNlcyA6IFRhc2sgRXJyb3IgUmVzb3VyY2VcbiAgICBnZXRSZXNvdXJjZXMgPVxuICAgICAgICBzZXF1ZW5jZVxuICAgICAgICAgICAgWyBtYXBFcnJvciBIdHRwIHNlcnZlclRhc2tcbiAgICAgICAgICAgICwgbWFwRXJyb3IgV2ViR0wgdGV4dHVyZVRhc2tcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcEVycm9yIDogKHggLT4geSkgLT4gVGFzayB4IGEgLT4gVGFzayB5IGFcbm1hcEVycm9yIGNvbnZlcnQgdGFzayA9XG4gICAgdGFza1xuICAgICAgICB8PiBvbkVycm9yIChmYWlsIDw8IGNvbnZlcnQpXG5cblxuXG4tLSBDT01NQU5EU1xuXG5cbnR5cGUgTXlDbWQgbXNnXG4gICAgPSBQZXJmb3JtIChUYXNrIE5ldmVyIG1zZylcbiAgICB8IEV4ZWN1dGUgKFRhc2sgTmV2ZXIge30pXG5cblxuey18IExpa2UgSSB3YXMgc2F5aW5nIGluIHRoZSBbYFRhc2tgXSgjVGFzaykgZG9jdW1lbnRhdGlvbiwganVzdCBoYXZpbmcgYVxuYFRhc2tgIGRvZXMgbm90IG1lYW4gaXQgaXMgZG9uZS4gV2UgbXVzdCBjb21tYW5kIEdyZW4gdG8gYHBlcmZvcm1gIHRoZSB0YXNrOlxuXG5cblxuICAgIGltcG9ydCBUYXNrXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tcbiAgICAgICAgfCBTZWFyY2ggU3RyaW5nXG4gICAgICAgIHwgTmV3VGltZSBUaW1lLlBvc2l4XG5cbiAgICBnZXROZXdUaW1lIDogQ21kIE1zZ1xuICAgIGdldE5ld1RpbWUgPVxuICAgICAgICBUYXNrLnBlcmZvcm0gTmV3VGltZSBUaW1lLm5vd1xuXG5TbyB3ZSBoYXZlIGNoYW5nZWQgYSB0YXNrIGxpa2UgXCJtYWtlIGRlbGljaW91cyBsYXNhZ25hXCIgaW50byBhIGNvbW1hbmQgbGlrZVxuXCJIZXkgR3JlbiwgbWFrZSBkZWxpY2lvdXMgbGFzYWduYSBhbmQgZ2l2ZSBpdCB0byBteSBgdXBkYXRlYCBmdW5jdGlvbiBhcyBhXG5gTXNnYCB2YWx1ZS5cIlxuXG4tfVxucGVyZm9ybSA6IChhIC0+IG1zZykgLT4gVGFzayBOZXZlciBhIC0+IENtZCBtc2dcbnBlcmZvcm0gdG9NZXNzYWdlIHRhc2sgPVxuICAgIGNvbW1hbmQgKFBlcmZvcm0gKG1hcCB0b01lc3NhZ2UgdGFzaykpXG5cblxuey18IFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIFtgcGVyZm9ybWBdKCNwZXJmb3JtKSBleGNlcHQgaXQgY2FuIGhhbmRsZSBmYWlsdXJlcyFcblNvIHdlIGNvdWxkIF9hdHRlbXB0XyB0byBmb2N1cyBvbiBhIGNlcnRhaW4gRE9NIG5vZGUgbGlrZSB0aGlzOlxuXG4gICAgLS0gZ3JlbiBpbnN0YWxsIGdyZW4tbGFuZy9icm93c2VyXG5cblxuICAgIGltcG9ydCBCcm93c2VyLkRvbVxuICAgIGltcG9ydCBUYXNrXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrXG4gICAgICAgIHwgU2VhcmNoIFN0cmluZ1xuICAgICAgICB8IEZvY3VzIChSZXN1bHQgQnJvd3Nlci5Eb21FcnJvciB7fSlcblxuICAgIGZvY3VzIDogQ21kIE1zZ1xuICAgIGZvY3VzID1cbiAgICAgICAgVGFzay5hdHRlbXB0IEZvY3VzIChCcm93c2VyLkRvbS5mb2N1cyBcIm15LWFwcC1zZWFyY2gtYm94XCIpXG5cblNvIHRoZSB0YXNrIGlzIFwiZm9jdXMgb24gdGhpcyBET00gbm9kZVwiIGFuZCB3ZSBhcmUgdHVybmluZyBpdCBpbnRvIHRoZSBjb21tYW5kXG5cIkhleSBHcmVuLCBhdHRlbXB0IHRvIGZvY3VzIG9uIHRoaXMgRE9NIG5vZGUgYW5kIGdpdmUgbWUgYSBgTXNnYCBhYm91dCB3aGV0aGVyXG55b3Ugc3VjY2VlZGVkIG9yIGZhaWxlZC5cIlxuXG4tfVxuYXR0ZW1wdCA6IChSZXN1bHQgeCBhIC0+IG1zZykgLT4gVGFzayB4IGEgLT4gQ21kIG1zZ1xuYXR0ZW1wdCByZXN1bHRUb01lc3NhZ2UgdGFzayA9XG4gICAgY29tbWFuZFxuICAgICAgICAoUGVyZm9ybVxuICAgICAgICAgICAgKHRhc2tcbiAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBPaylcbiAgICAgICAgICAgICAgICB8PiBvbkVycm9yIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBFcnIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuXG57LXwgU29tZXRpbWVzIHdlIHdhbnQgdG8gZ2l2ZSBhIGNvbW1hbmQgd2l0aG91dCBiZWluZyB0b2xkIGhvdyBpdCB3ZW50LiBNYXliZSB3ZVxuYXJlIGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBzY3JlZW4sIG9yIGNoYW5naW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdy5cbkluIGVpdGhlciBjYXNlLCB0aGVyZSdzIHJlYWxseSBub3RoaW5nIGZvciB1cyB0byBkbyBhZnRlcndhcmRzLiBJbiB0aG9zZSBjYXNlc1xud2UgY2FuIHVzZSBgZXhlY3V0ZWAuXG4tfVxuZXhlY3V0ZSA6IFRhc2sgTmV2ZXIgYSAtPiBDbWQgbXNnXG5leGVjdXRlIHRhc2sgPVxuICAgIGNvbW1hbmQgKEV4ZWN1dGUgKG1hcCAoXFxfIC0+IHt9KSB0YXNrKSlcblxuXG5jbWRNYXAgOiAoYSAtPiBiKSAtPiBNeUNtZCBhIC0+IE15Q21kIGJcbmNtZE1hcCB0YWdnZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIFBlcmZvcm0gKG1hcCB0YWdnZXIgdGFzaylcblxuICAgICAgICBFeGVjdXRlIHRhc2sgLT5cbiAgICAgICAgICAgIEV4ZWN1dGUgdGFza1xuXG5cbi0tIE1BTkFHRVJcblxuXG5pbml0IDogVGFzayBOZXZlciB7fVxuaW5pdCA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbm9uRWZmZWN0cyA6IFBsYXRmb3JtLlJvdXRlciBtc2cgTmV2ZXIgLT4gQXJyYXkgKE15Q21kIG1zZykgLT4ge30gLT4gVGFzayBOZXZlciB7fVxub25FZmZlY3RzIHJvdXRlciBjb21tYW5kcyBzdGF0ZSA9XG4gICAgbWFwXG4gICAgICAgIChcXF8gLT4ge30pXG4gICAgICAgIChzZXF1ZW5jZSAoQXJyYXkubWFwIChzcGF3bkNtZCByb3V0ZXIpIGNvbW1hbmRzKSlcblxuXG5vblNlbGZNc2cgOiBQbGF0Zm9ybS5Sb3V0ZXIgbXNnIE5ldmVyIC0+IE5ldmVyIC0+IHt9IC0+IFRhc2sgTmV2ZXIge31cbm9uU2VsZk1zZyBfIF8gXyA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbnNwYXduQ21kIDogUGxhdGZvcm0uUm91dGVyIG1zZyBOZXZlciAtPiBNeUNtZCBtc2cgLT4gVGFzayB4IHt9XG5zcGF3bkNtZCByb3V0ZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zcGF3blxuICAgICAgICAgICAgICAgICh0YXNrXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFBsYXRmb3JtLnNlbmRUb0FwcCByb3V0ZXIpXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgIEV4ZWN1dGUgdGFzayAtPlxuICAgICAgICAgICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLnNwYXduIHRhc2tcbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybSBleHBvc2luZ1xuICAgICggUHJvZ3JhbSwgd29ya2VyXG4gICAgLCBUYXNrLCBQcm9jZXNzSWRcbiAgICAsIFJvdXRlciwgc2VuZFRvQXBwLCBzZW5kVG9TZWxmXG4gICAgKVxuXG57LXwgVGhpcyBtb2R1bGUgY29udGFpbnMgZGVmaW5pdGlvbnMgaW1wb3J0YW50IHRvIHRoZSBsYW5ndWFnZSBydW50aW1lLlxuWW91J3JlIHVubGlrZWx5IHRvIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGVzZSB0aGluZ3MgeW91cnNlbGYuXG5cblxuQGRvY3MgUHJvZ3JhbSwgd29ya2VyXG5cblxuIyMgVGFza3MgYW5kIFByb2Nlc3Nlc1xuXG5AZG9jcyBUYXNrLCBQcm9jZXNzSWRcblxuXG4jIyBFZmZlY3QgTWFuYWdlciBIZWxwZXJzXG5cbkVmZmVjdCBtYW5hZ2VycyBjYW4gYmUgdmlld2VkIGFzIHByb2dyYW1zLXdpdGhpbi1hLXByb2dyYW0uIFRoZXkgaGF2ZSB0aGVpciBvd25cbnN0YXRlLCBhbmQgY29tbXVuaWNhdGUgd2l0aCB0aGUgYXBwbGljYXRpb24gdXNpbmcgbWVzc2FnZXMuXG5cbkVmZmVjdCBtYW5hZ2VycyBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBtYW55IHRoaW5ncywgYnV0IGlzbid0IGNvbnNpZGVyZWQgdG8gYmVcbnRydWx5IHN0YWJsZS4gSXQncyBsaWtlbHkgdGhhdCB0aGlzIGZlYXR1cmUgd2lsbCBiZSByZWRlc2lnbmVkIGluIGEgZnV0dXJlIHJlbGFzZS5cblxuXG5AZG9jcyBSb3V0ZXIsIHNlbmRUb0FwcCwgc2VuZFRvU2VsZlxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChOZXZlcilcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IFBsYXRmb3JtLkNtZCBleHBvc2luZyAoQ21kKVxuaW1wb3J0IFBsYXRmb3JtLlN1YiBleHBvc2luZyAoU3ViKVxuXG5cblxuLS0gUFJPR1JBTVNcblxuXG57LXwgQSBgUHJvZ3JhbWAgZGVzY3JpYmVzIGFuIEdyZW4gcHJvZ3JhbSEgSG93IGRvZXMgaXQgcmVhY3QgdG8gaW5wdXQ/IERvZXMgaXRcbnNob3cgYW55dGhpbmcgb24gc2NyZWVuPyBFdGMuXG4tfVxudHlwZSBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuICAgID0gUHJvZ3JhbVxuXG5cbnstfCBDcmVhdGUgYSBbaGVhZGxlc3NdIHByb2dyYW0gd2l0aCBubyB1c2VyIGludGVyZmFjZS5cblxuVGhpcyBpcyBncmVhdCBpZiB5b3Ugd2FudCB0byB1c2UgR3JlbiBhcyB0aGUgJmxkcXVvO2JyYWluJnJkcXVvOyBmb3Igc29tZXRoaW5nXG5lbHNlLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIHNlbmQgbWVzc2FnZXMgb3V0IHBvcnRzIHRvIG1vZGlmeSB0aGUgRE9NLCBidXQgZG9cbmFsbCB0aGUgY29tcGxleCBsb2dpYyBpbiBHcmVuLlxuXG5baGVhZGxlc3NdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFkbGVzc19zb2Z0d2FyZVxuXG5Jbml0aWFsaXppbmcgYSBoZWFkbGVzcyBwcm9ncmFtIGZyb20gSmF2YVNjcmlwdCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYGphdmFzY3JpcHRcbnZhciBhcHAgPSBHcmVuLk15VGhpbmcuaW5pdCgpO1xuYGBgXG5cbklmIHlvdSBfZG9fIHdhbnQgdG8gY29udHJvbCB0aGUgdXNlciBpbnRlcmZhY2UgaW4gR3JlbiwgdGhlIFtgQnJvd3NlcmBdW2Jyb3dzZXJdXG5tb2R1bGUgaGFzIGEgZmV3IHdheXMgdG8gY3JlYXRlIHRoYXQga2luZCBvZiBgUHJvZ3JhbWAgaW5zdGVhZCFcblxuW2hlYWRsZXNzXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVhZGxlc3Nfc29mdHdhcmVcblticm93c2VyXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyXG5cbi19XG53b3JrZXIgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbndvcmtlciA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ud29ya2VyXG5cblxuXG4tLSBUQVNLUyBhbmQgUFJPQ0VTU0VTXG5cblxuey18IEhlYWQgb3ZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIFtgVGFza2BdKFRhc2spIG1vZHVsZSBmb3IgbW9yZVxuaW5mb3JtYXRpb24gb24gdGhpcy4gSXQgaXMgb25seSBkZWZpbmVkIGhlcmUgYmVjYXVzZSBpdCBpcyBhIHBsYXRmb3JtXG5wcmltaXRpdmUuXG4tfVxudHlwZSBUYXNrIGVyciBva1xuICAgID0gVGFza1xuXG5cbnstfCBIZWFkIG92ZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBbYFByb2Nlc3NgXShQcm9jZXNzKSBtb2R1bGUgZm9yXG5pbmZvcm1hdGlvbiBvbiB0aGlzLiBJdCBpcyBvbmx5IGRlZmluZWQgaGVyZSBiZWNhdXNlIGl0IGlzIGEgcGxhdGZvcm1cbnByaW1pdGl2ZS5cbi19XG50eXBlIFByb2Nlc3NJZFxuICAgID0gUHJvY2Vzc0lkXG5cblxuXG4tLSBFRkZFQ1QgTUFOQUdFUiBJTlRFUk5BTFNcblxuXG57LXwgQW4gZWZmZWN0IG1hbmFnZXIgaGFzIGFjY2VzcyB0byBhIOKAnHJvdXRlcuKAnSB0aGF0IHJvdXRlcyBtZXNzYWdlcyBiZXR3ZWVuXG50aGUgbWFpbiBhcHAgYW5kIHlvdXIgaW5kaXZpZHVhbCBlZmZlY3QgbWFuYWdlci5cbi19XG50eXBlIFJvdXRlciBhcHBNc2cgc2VsZk1zZ1xuICAgID0gUm91dGVyXG5cblxuey18IFNlbmQgdGhlIHJvdXRlciBhIG1lc3NhZ2UgZm9yIHRoZSBtYWluIGxvb3Agb2YgeW91ciBhcHAuIFRoaXMgbWVzc2FnZSB3aWxsXG5iZSBoYW5kbGVkIGJ5IHRoZSBvdmVyYWxsIGB1cGRhdGVgIGZ1bmN0aW9uLCBqdXN0IGxpa2UgZXZlbnRzIGZyb20gYEh0bWxgLlxuLX1cbnNlbmRUb0FwcCA6IFJvdXRlciBtc2cgYSAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9BcHAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLnNlbmRUb0FwcFxuXG5cbnstfCBTZW5kIHRoZSByb3V0ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGVmZmVjdCBtYW5hZ2VyLiBUaGlzIG1lc3NhZ2Ugd2lsbFxuYmUgcm91dGVkIHRvIHRoZSBgb25TZWxmTXNnYCBmdW5jdGlvbiwgd2hlcmUgeW91IGNhbiB1cGRhdGUgdGhlIHN0YXRlIG9mIHlvdXJcbmVmZmVjdCBtYW5hZ2VyIGFzIG5lY2Vzc2FyeS5cblxuQXMgYW4gZXhhbXBsZSwgdGhlIGVmZmVjdCBtYW5hZ2VyIGZvciB3ZWIgc29ja2V0c1xuXG4tfVxuc2VuZFRvU2VsZiA6IFJvdXRlciBhIG1zZyAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9TZWxmID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5zZW5kVG9TZWxmXG4iLAogICAgICAgICJtb2R1bGUgUGxhdGZvcm0uQ21kIGV4cG9zaW5nXG4gICAgKCBDbWQsIG5vbmUsIGJhdGNoXG4gICAgLCBtYXBcbiAgICApXG5cbnstfFxuXG4+ICoqTm90ZToqKiBHcmVuIGhhcyAqKm1hbmFnZWQgZWZmZWN0cyoqLCBtZWFuaW5nIHRoYXQgdGhpbmdzIGxpa2UgSFRUUFxuPiByZXF1ZXN0cyBvciB3cml0aW5nIHRvIGRpc2sgYXJlIGFsbCB0cmVhdGVkIGFzIF9kYXRhXyBpbiBHcmVuLiBXaGVuIHRoaXNcbj4gZGF0YSBpcyBnaXZlbiB0byB0aGUgR3JlbiBydW50aW1lIHN5c3RlbSwgaXQgY2FuIGRvIHNvbWUg4oCccXVlcnkgb3B0aW1pemF0aW9u4oCdXG4+IGJlZm9yZSBhY3R1YWxseSBwZXJmb3JtaW5nIHRoZSBlZmZlY3QuIFBlcmhhcHMgdW5leHBlY3RlZGx5LCB0aGlzIG1hbmFnZWRcbj4gZWZmZWN0cyBpZGVhIGlzIHRoZSBoZWFydCBvZiB3aHkgR3JlbiBpcyBzbyBuaWNlIGZvciB0ZXN0aW5nLCByZXVzZSxcbj4gcmVwcm9kdWNpYmlsaXR5LCBldGMuXG4+XG4+IEdyZW4gaGFzIHR3byBraW5kcyBvZiBtYW5hZ2VkIGVmZmVjdHM6IGNvbW1hbmRzIGFuZCBzdWJzY3JpcHRpb25zLlxuXG5cbiMjIENvbW1hbmRzXG5cbkBkb2NzIENtZCwgbm9uZSwgYmF0Y2hcblxuXG4jIyBGYW5jeSBTdHVmZlxuXG5AZG9jcyBtYXBcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuXG5cblxuLS0gQ09NTUFORFNcblxuXG57LXwgQSBjb21tYW5kIGlzIGEgd2F5IG9mIHRlbGxpbmcgR3Jlbiwg4oCcSGV5LCBJIHdhbnQgeW91IHRvIGRvIHRoaXMgdGhpbmch4oCdXG5TbyBpZiB5b3Ugd2FudCB0byBzZW5kIGFuIEhUVFAgcmVxdWVzdCwgeW91IHdvdWxkIG5lZWQgdG8gY29tbWFuZCBHcmVuIHRvIGRvIGl0LlxuT3IgaWYgeW91IHdhbnRlZCB0byBhc2sgZm9yIGdlb2xvY2F0aW9uLCB5b3Ugd291bGQgbmVlZCB0byBjb21tYW5kIEdyZW4gdG8gZ29cbmdldCBpdC5cblxuRXZlcnkgYENtZGAgc3BlY2lmaWVzICgxKSB3aGljaCBlZmZlY3RzIHlvdSBuZWVkIGFjY2VzcyB0byBhbmQgKDIpIHRoZSB0eXBlIG9mXG5tZXNzYWdlcyB0aGF0IHdpbGwgY29tZSBiYWNrIGludG8geW91ciBhcHBsaWNhdGlvbi5cblxuKipOb3RlOioqIERvIG5vdCB3b3JyeSBpZiB0aGlzIHNlZW1zIGNvbmZ1c2luZyBhdCBmaXJzdCEgQXMgd2l0aCBldmVyeSBHcmVuIHVzZXJcbmV2ZXIsIGNvbW1hbmRzIHdpbGwgbWFrZSBtb3JlIHNlbnNlIGFzIHlvdSB3b3JrIHRocm91Z2ggW3RoZSBHcmVuIEFyY2hpdGVjdHVyZVxuVHV0b3JpYWxdKGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvKSBhbmQgc2VlIGhvdyB0aGV5XG5maXQgaW50byBhIHJlYWwgYXBwbGljYXRpb24hXG5cbi19XG50eXBlIENtZCBtc2dcbiAgICA9IENtZFxuXG5cbnstfCBUZWxsIHRoZSBydW50aW1lIHRoYXQgdGhlcmUgYXJlIG5vIGNvbW1hbmRzLlxuLX1cbm5vbmUgOiBDbWQgbXNnXG5ub25lID1cbiAgICBiYXRjaCBbXVxuXG5cbnstfCBXaGVuIHlvdSBuZWVkIHRoZSBydW50aW1lIHN5c3RlbSB0byBwZXJmb3JtIGEgY291cGxlIGNvbW1hbmRzLCB5b3VcbmNhbiBiYXRjaCB0aGVtIHRvZ2V0aGVyLiBFYWNoIGlzIGhhbmRlZCB0byB0aGUgcnVudGltZSBhdCB0aGUgc2FtZSB0aW1lLFxuYW5kIHNpbmNlIGVhY2ggY2FuIHBlcmZvcm0gYXJiaXRyYXJ5IG9wZXJhdGlvbnMgaW4gdGhlIHdvcmxkLCB0aGVyZSBhcmVcbm5vIG9yZGVyaW5nIGd1YXJhbnRlZXMgYWJvdXQgdGhlIHJlc3VsdHMuXG5cbioqTm90ZToqKiBgQ21kLm5vbmVgIGFuZCBgQ21kLmJhdGNoIFsgQ21kLm5vbmUsIENtZC5ub25lIF1gIGFuZCBgQ21kLmJhdGNoIFtdYFxuYWxsIGRvIHRoZSBzYW1lIHRoaW5nLlxuXG4tfVxuYmF0Y2ggOiBBcnJheSAoQ21kIG1zZykgLT4gQ21kIG1zZ1xuYmF0Y2ggPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLmJhdGNoXG5cblxuXG4tLSBGQU5DWSBTVFVGRlxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGEgY29tbWFuZC5cblZlcnkgc2ltaWxhciB0byBbYEh0bWwubWFwYF0oL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9IdG1sI21hcCkuXG5cblRoaXMgaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIHdlbGwtc3RydWN0dXJlZCBHcmVuIGNvZGUsIHNvIGRlZmluaXRlbHkgcmVhZCB0aGVcbnNlY3Rpb24gb24gW3N0cnVjdHVyZV0gaW4gdGhlIGd1aWRlIGJlZm9yZSByZWFjaGluZyBmb3IgdGhpcyFcblxuW3N0cnVjdHVyZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy93ZWJhcHBzL3N0cnVjdHVyZS5odG1sXG5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IENtZCBhIC0+IENtZCBtc2dcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ubWFwXG4iLAogICAgICAgICJtb2R1bGUgUGxhdGZvcm0uU3ViIGV4cG9zaW5nXG4gICAgKCBTdWIsIG5vbmUsIGJhdGNoXG4gICAgLCBtYXBcbiAgICApXG5cbnstfFxuXG4+ICoqTm90ZToqKiBHcmVuIGhhcyAqKm1hbmFnZWQgZWZmZWN0cyoqLCBtZWFuaW5nIHRoYXQgdGhpbmdzIGxpa2UgSFRUUFxuPiByZXF1ZXN0cyBvciB3cml0aW5nIHRvIGRpc2sgYXJlIGFsbCB0cmVhdGVkIGFzIF9kYXRhXyBpbiBHcmVuLiBXaGVuIHRoaXNcbj4gZGF0YSBpcyBnaXZlbiB0byB0aGUgR3JlbiBydW50aW1lIHN5c3RlbSwgaXQgY2FuIGRvIHNvbWUg4oCccXVlcnkgb3B0aW1pemF0aW9u4oCdXG4+IGJlZm9yZSBhY3R1YWxseSBwZXJmb3JtaW5nIHRoZSBlZmZlY3QuIFBlcmhhcHMgdW5leHBlY3RlZGx5LCB0aGlzIG1hbmFnZWRcbj4gZWZmZWN0cyBpZGVhIGlzIHRoZSBoZWFydCBvZiB3aHkgR3JlbiBpcyBzbyBuaWNlIGZvciB0ZXN0aW5nLCByZXVzZSxcbj4gcmVwcm9kdWNpYmlsaXR5LCBldGMuXG4+XG4+IEdyZW4gaGFzIHR3byBraW5kcyBvZiBtYW5hZ2VkIGVmZmVjdHM6IGNvbW1hbmRzIGFuZCBzdWJzY3JpcHRpb25zLlxuXG5cbiMjIFN1YnNjcmlwdGlvbnNcblxuQGRvY3MgU3ViLCBub25lLCBiYXRjaFxuXG5cbiMjIEZhbmN5IFN0dWZmXG5cbkBkb2NzIG1hcFxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEdyZW4uS2VybmVsLlBsYXRmb3JtXG5cblxuXG4tLSBTVUJTQ1JJUFRJT05TXG5cblxuey18IEEgc3Vic2NyaXB0aW9uIGlzIGEgd2F5IG9mIHRlbGxpbmcgR3Jlbiwg4oCcSGV5LCBsZXQgbWUga25vdyBpZiBhbnl0aGluZ1xuaW50ZXJlc3RpbmcgaGFwcGVucyBvdmVyIHRoZXJlIeKAnSBTbyBpZiB5b3Ugd2FudCB0byBsaXN0ZW4gZm9yIG1lc3NhZ2VzIG9uIGEgd2ViXG5zb2NrZXQsIHlvdSB3b3VsZCB0ZWxsIEdyZW4gdG8gY3JlYXRlIGEgc3Vic2NyaXB0aW9uLiBJZiB5b3Ugd2FudCB0byBnZXQgY2xvY2tcbnRpY2tzLCB5b3Ugd291bGQgdGVsbCBHcmVuIHRvIHN1YnNjcmliZSB0byB0aGF0LiBUaGUgY29vbCB0aGluZyBoZXJlIGlzIHRoYXRcbnRoaXMgbWVhbnMgX0dyZW5fIG1hbmFnZXMgYWxsIHRoZSBkZXRhaWxzIG9mIHN1YnNjcmlwdGlvbnMgaW5zdGVhZCBvZiBfeW91Xy5cblNvIGlmIGEgd2ViIHNvY2tldCBnb2VzIGRvd24sIF95b3VfIGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IHJlY29ubmVjdCB3aXRoIGFuXG5leHBvbmVudGlhbCBiYWNrb2ZmIHN0cmF0ZWd5LCBfR3Jlbl8gZG9lcyB0aGlzIGFsbCBmb3IgeW91IGJlaGluZCB0aGUgc2NlbmVzIVxuXG5FdmVyeSBgU3ViYCBzcGVjaWZpZXMgKDEpIHdoaWNoIGVmZmVjdHMgeW91IG5lZWQgYWNjZXNzIHRvIGFuZCAoMikgdGhlIHR5cGUgb2Zcbm1lc3NhZ2VzIHRoYXQgd2lsbCBjb21lIGJhY2sgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxuXG4qKk5vdGU6KiogRG8gbm90IHdvcnJ5IGlmIHRoaXMgc2VlbXMgY29uZnVzaW5nIGF0IGZpcnN0ISBBcyB3aXRoIGV2ZXJ5IEdyZW4gdXNlclxuZXZlciwgc3Vic2NyaXB0aW9ucyB3aWxsIG1ha2UgbW9yZSBzZW5zZSBhcyB5b3Ugd29yayB0aHJvdWdoIFt0aGUgR3JlbiBBcmNoaXRlY3R1cmVcblR1dG9yaWFsXShodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlLykgYW5kIHNlZSBob3cgdGhleSBmaXRcbmludG8gYSByZWFsIGFwcGxpY2F0aW9uIVxuXG4tfVxudHlwZSBTdWIgbXNnXG4gICAgPSBTdWJcblxuXG57LXwgVGVsbCB0aGUgcnVudGltZSB0aGF0IHRoZXJlIGFyZSBubyBzdWJzY3JpcHRpb25zLlxuLX1cbm5vbmUgOiBTdWIgbXNnXG5ub25lID1cbiAgICBiYXRjaCBbXVxuXG5cbnstfCBXaGVuIHlvdSBuZWVkIHRvIHN1YnNjcmliZSB0byBtdWx0aXBsZSB0aGluZ3MsIHlvdSBjYW4gY3JlYXRlIGEgYGJhdGNoYCBvZlxuc3Vic2NyaXB0aW9ucy5cblxuKipOb3RlOioqIGBTdWIubm9uZWAgYW5kIGBTdWIuYmF0Y2ggWyBTdWIubm9uZSwgU3ViLm5vbmUgXWAgYW5kXG5gU3ViLmJhdGNoIFtdYCBhbGwgZG8gdGhlIHNhbWUgdGhpbmcuXG5cbi19XG5iYXRjaCA6IEFycmF5IChTdWIgbXNnKSAtPiBTdWIgbXNnXG5iYXRjaCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uYmF0Y2hcblxuXG5cbi0tIEZBTkNZIFNUVUZGXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBzdWJzY3JpcHRpb24uXG5WZXJ5IHNpbWlsYXIgdG8gW2BIdG1sLm1hcGBdKC9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL2xhdGVzdC9tb2R1bGUvSHRtbCNtYXApLlxuXG5UaGlzIGlzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiB3ZWxsLXN0cnVjdHVyZWQgR3JlbiBjb2RlLCBzbyBkZWZpbml0ZWx5IHJlYWQgdGhlXG5zZWN0aW9uIG9uIFtzdHJ1Y3R1cmVdIGluIHRoZSBndWlkZSBiZWZvcmUgcmVhY2hpbmcgZm9yIHRoaXMhXG5cbltzdHJ1Y3R1cmVdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvd2ViYXBwcy9zdHJ1Y3R1cmUuaHRtbFxuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBTdWIgYSAtPiBTdWIgbXNnXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLm1hcFxuIiwKICAgICAgICAibW9kdWxlIEJyb3dzZXIgZXhwb3NpbmdcbiAgICAoIHNhbmRib3hcbiAgICAsIGVsZW1lbnRcbiAgICAsIGRvY3VtZW50LCBEb2N1bWVudFxuICAgICwgYXBwbGljYXRpb24sIFVybFJlcXVlc3QoLi4pXG4gICAgKVxuXG57LXwgVGhpcyBtb2R1bGUgaGVscHMgeW91IHNldCB1cCBhbiBHcmVuIGBQcm9ncmFtYCB3aXRoIGZ1bmN0aW9ucyBsaWtlXG5bYHNhbmRib3hgXSgjc2FuZGJveCkgYW5kIFtgZG9jdW1lbnRgXSgjZG9jdW1lbnQpLlxuXG5cbiMjIFNhbmRib3hlc1xuXG5AZG9jcyBzYW5kYm94XG5cblxuIyMgRWxlbWVudHNcblxuQGRvY3MgZWxlbWVudFxuXG5cbiMjIERvY3VtZW50c1xuXG5AZG9jcyBkb2N1bWVudCwgRG9jdW1lbnRcblxuXG4jIyBBcHBsaWNhdGlvbnNcblxuQGRvY3MgYXBwbGljYXRpb24sIFVybFJlcXVlc3RcblxuLX1cblxuaW1wb3J0IEJyb3dzZXIuTmF2aWdhdGlvbiBhcyBOYXZpZ2F0aW9uXG5pbXBvcnQgRGljdFxuaW1wb3J0IEdyZW4uS2VybmVsLkJyb3dzZXJcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sKVxuaW1wb3J0IFVybFxuXG5cblxuLS0gU0FOREJPWFxuXG5cbnstfCBDcmVhdGUgYSDigJxzYW5kYm94ZWTigJ0gcHJvZ3JhbSB0aGF0IGNhbm5vdCBjb21tdW5pY2F0ZSB3aXRoIHRoZSBvdXRzaWRlXG53b3JsZC5cblxuVGhpcyBpcyBncmVhdCBmb3IgbGVhcm5pbmcgdGhlIGJhc2ljcyBvZiBbVGhlIEVsbSBBcmNoaXRlY3R1cmVdW3RlYV0sIHdoaWNoIEdyZW5cbnVzZXMgZm9yIHN0cnVjdHVyaW5nIGFwcGxpY2F0aW9ucy4gWW91IGNhbiBzZWUgc2FuZGJveGVzIGluIGFjdGlvbiBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzOlxuXG4gIC0gW0J1dHRvbnNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS9idXR0b25zLmh0bWwpXG4gIC0gW1RleHQgRmllbGRzXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvdGV4dF9maWVsZHMuaHRtbClcbiAgLSBbRm9ybXNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS9mb3Jtcy5odG1sKVxuXG5bdGVhXTogaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL1xuXG4tfVxuc2FuZGJveCA6XG4gICAgeyBpbml0IDogbW9kZWxcbiAgICAsIHZpZXcgOiBtb2RlbCAtPiBIdG1sIG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IG1vZGVsXG4gICAgfVxuICAgIC0+IFByb2dyYW0ge30gbW9kZWwgbXNnXG5zYW5kYm94IGltcGwgPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuZWxlbWVudFxuICAgICAgICB7IGluaXQgPSBcXHt9IC0+IHsgbW9kZWwgPSBpbXBsLmluaXQsIGNvbW1hbmQgPSBDbWQubm9uZSB9XG4gICAgICAgICwgdmlldyA9IGltcGwudmlld1xuICAgICAgICAsIHVwZGF0ZSA9IFxcbXNnIG1vZGVsIC0+IHsgbW9kZWwgPSBpbXBsLnVwZGF0ZSBtc2cgbW9kZWwsIGNvbW1hbmQgPSBDbWQubm9uZSB9XG4gICAgICAgICwgc3Vic2NyaXB0aW9ucyA9IFxcXyAtPiBTdWIubm9uZVxuICAgICAgICB9XG5cblxuXG4tLSBFTEVNRU5UXG5cblxuey18IENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgbWFuYWdlZCBieSBHcmVuLiBUaGUgcmVzdWx0aW5nIGVsZW1lbnRzIGFyZSBlYXN5IHRvXG5lbWJlZCBpbiBsYXJnZXIgSmF2YVNjcmlwdCBwcm9qZWN0cywgYW5kIGxvdHMgb2YgY29tcGFuaWVzIHRoYXQgdXNlIEdyZW5cbnN0YXJ0ZWQgd2l0aCB0aGlzIGFwcHJvYWNoISBUcnkgaXQgb3V0IG9uIHNvbWV0aGluZyBzbWFsbC4gSWYgaXQgd29ya3MsIGdyZWF0LFxuZG8gbW9yZSEgSWYgbm90LCByZXZlcnQsIG5vIGJpZyBkZWFsLlxuXG5Vbmxpa2UgYSBbYHNhbmRib3hgXSgjc2FuZGJveCksIGFuIGBlbGVtZW50YCBjYW4gdGFsayB0byB0aGUgb3V0c2lkZSB3b3JsZCBpblxuYSBjb3VwbGUgd2F5czpcblxuICAtIGBDbWRgICZtZGFzaDsgeW91IGNhbiDigJxjb21tYW5k4oCdIHRoZSBHcmVuIHJ1bnRpbWUgdG8gZG8gc3R1ZmYsIGxpa2UgSFRUUC5cbiAgLSBgU3ViYCAmbWRhc2g7IHlvdSBjYW4g4oCcc3Vic2NyaWJl4oCdIHRvIGV2ZW50IHNvdXJjZXMsIGxpa2UgY2xvY2sgdGlja3MuXG4gIC0gYGZsYWdzYCAmbWRhc2g7IEphdmFTY3JpcHQgY2FuIHBhc3MgaW4gZGF0YSB3aGVuIHN0YXJ0aW5nIHRoZSBHcmVuIHByb2dyYW1cbiAgLSBgcG9ydHNgICZtZGFzaDsgc2V0IHVwIGEgY2xpZW50LXNlcnZlciByZWxhdGlvbnNoaXAgd2l0aCBKYXZhU2NyaXB0XG5cbkFzIHlvdSByZWFkIFt0aGUgZ3VpZGVdW2d1aWRlXSB5b3Ugd2lsbCBydW4gaW50byBhIGJ1bmNoIG9mIGV4YW1wbGVzIG9mIGBlbGVtZW50YFxuaW4gW3RoaXMgc2VjdGlvbl1bZnhdLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZmxhZ3MgYW5kIHBvcnRzIGluIFt0aGUgaW50ZXJvcFxuc2VjdGlvbl1baW50ZXJvcF0uXG5cbltndWlkZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9cbltmeF06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9lZmZlY3RzL1xuW2ludGVyb3BdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvaW50ZXJvcC9cblxuLX1cbmVsZW1lbnQgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IEh0bWwgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuZWxlbWVudCA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5lbGVtZW50XG5cblxuXG4tLSBET0NVTUVOVFxuXG5cbnstfCBDcmVhdGUgYW4gSFRNTCBkb2N1bWVudCBtYW5hZ2VkIGJ5IEdyZW4uIFRoaXMgZXhwYW5kcyB1cG9uIHdoYXQgYGVsZW1lbnRgXG5jYW4gZG8gaW4gdGhhdCBgdmlld2Agbm93IGdpdmVzIHlvdSBjb250cm9sIG92ZXIgdGhlIGA8dGl0bGU+YCBhbmQgYDxib2R5PmAuXG4tfVxuZG9jdW1lbnQgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IERvY3VtZW50IG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbmRvY3VtZW50ID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmRvY3VtZW50XG5cblxuey18IFRoaXMgZGF0YSBzcGVjaWZpZXMgdGhlIGA8dGl0bGU+YCBhbmQgYWxsIG9mIHRoZSBub2RlcyB0aGF0IHNob3VsZCBnbyBpblxudGhlIGA8Ym9keT5gLiBUaGlzIG1lYW5zIHlvdSBjYW4gdXBkYXRlIHRoZSB0aXRsZSBhcyB5b3VyIGFwcGxpY2F0aW9uIGNoYW5nZXMuXG5NYXliZSB5b3VyIFwic2luZ2xlLXBhZ2UgYXBwXCIgbmF2aWdhdGVzIHRvIGEgXCJkaWZmZXJlbnQgcGFnZVwiLCBtYXliZSBhIGNhbGVuZGFyXG5hcHAgc2hvd3MgYW4gYWNjdXJhdGUgZGF0ZSBpbiB0aGUgdGl0bGUsIGV0Yy5cblxuPiAqKk5vdGUgYWJvdXQgQ1NTOioqIFRoaXMgbG9va3Mgc2ltaWxhciB0byBhbiBgPGh0bWw+YCBkb2N1bWVudCwgYnV0IHRoaXMgaXNcbj4gbm90IHRoZSBwbGFjZSB0byBtYW5hZ2UgQ1NTIGFzc2V0cy4gSWYgeW91IHdhbnQgdG8gd29yayB3aXRoIENTUywgdGhlcmUgYXJlXG4+IGEgY291cGxlIHdheXM6XG4+XG4+IDEuICBQYWNrYWdlcyBsaWtlIFtgcnRmZWxkbWFuL2VsbS1jc3NgXVtlbG0tY3NzXSBnaXZlIGFsbCBvZiB0aGUgZmVhdHVyZXNcbj4gICAgIG9mIENTUyB3aXRob3V0IGFueSBDU1MgZmlsZXMuIFlvdSBjYW4gYWRkIGFsbCB0aGUgc3R5bGVzIHlvdSBuZWVkIGluIHlvdXJcbj4gICAgIGB2aWV3YCBmdW5jdGlvbiwgYW5kIHRoZXJlIGlzIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgY2xhc3MgbmFtZXMgbWF0Y2hpbmcuXG4+XG4+IDIuICBDb21waWxlIHlvdXIgR3JlbiBjb2RlIHRvIEphdmFTY3JpcHQgd2l0aCBgZ3JlbiBtYWtlIC0tb3V0cHV0PWdyZW4uanNgIGFuZFxuPiAgICAgdGhlbiBtYWtlIHlvdXIgb3duIEhUTUwgZmlsZSB0aGF0IGxvYWRzIGBncmVuLmpzYCBhbmQgdGhlIENTUyBmaWxlIHlvdSB3YW50LlxuPiAgICAgV2l0aCB0aGlzIGFwcHJvYWNoLCBpdCBkb2VzIG5vdCBtYXR0ZXIgd2hlcmUgdGhlIENTUyBjb21lcyBmcm9tLiBXcml0ZSBpdFxuPiAgICAgYnkgaGFuZC4gR2VuZXJhdGUgaXQuIFdoYXRldmVyIHlvdSB3YW50IHRvIGRvLlxuPlxuPiAzLiAgSWYgeW91IG5lZWQgdG8gY2hhbmdlIGA8bGluaz5gIHRhZ3MgZHluYW1pY2FsbHksIHlvdSBjYW4gc2VuZCBtZXNzYWdlc1xuPiAgICAgb3V0IGEgcG9ydCB0byBkbyBpdCBpbiBKYXZhU2NyaXB0LlxuPlxuPiBUaGUgYmlnZ2VyIHBvaW50IGhlcmUgaXMgdGhhdCBsb2FkaW5nIGFzc2V0cyBpbnZvbHZlcyB0b3VjaGluZyB0aGUgYDxoZWFkPmBcbj4gYXMgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIGJyb3dzZXJzLCBidXQgdGhhdCBkb2VzIG5vdCBtZWFuIGl0IHNob3VsZCBiZVxuPiB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIGB2aWV3YCBmdW5jdGlvbiBpbiBHcmVuLiBTbyB3ZSBkbyBpdCBkaWZmZXJlbnRseSFcblxuW2VsbS1jc3NdOiAvcGFja2FnZXMvcnRmZWxkbWFuL2VsbS1jc3MvbGF0ZXN0L1xuXG4tfVxudHlwZSBhbGlhcyBEb2N1bWVudCBtc2cgPVxuICAgIHsgdGl0bGUgOiBTdHJpbmdcbiAgICAsIGJvZHkgOiBBcnJheSAoSHRtbCBtc2cpXG4gICAgfVxuXG5cblxuLS0gQVBQTElDQVRJT05cblxuXG57LXwgQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgbWFuYWdlcyBbYFVybGBdW3VybF0gY2hhbmdlcy5cblxuKipXaGVuIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMqKiwgYGluaXRgIGdldHMgdGhlIGluaXRpYWwgYFVybGAuIFlvdSBjYW4gc2hvd1xuZGlmZmVyZW50IHRoaW5ncyBkZXBlbmRpbmcgb24gdGhlIGBVcmxgIVxuXG4qKldoZW4gc29tZW9uZSBjbGlja3MgYSBsaW5rKiosIGxpa2UgYDxhIGhyZWY9XCIvaG9tZVwiPkhvbWU8L2E+YCwgaXQgYWx3YXlzIGdvZXNcbnRocm91Z2ggYG9uVXJsUmVxdWVzdGAuIFRoZSByZXN1bHRpbmcgbWVzc2FnZSBnb2VzIHRvIHlvdXIgYHVwZGF0ZWAgZnVuY3Rpb24sXG5naXZpbmcgeW91IGEgY2hhbmNlIHRvIHNhdmUgc2Nyb2xsIHBvc2l0aW9uIG9yIHBlcnNpc3QgZGF0YSBiZWZvcmUgY2hhbmdpbmdcbnRoZSBVUkwgeW91cnNlbGYgd2l0aCBbYHB1c2hVcmxgXVtibnBdIG9yIFtgbG9hZGBdW2JubF0uIE1vcmUgaW5mbyBvbiB0aGlzIGluXG50aGUgW2BVcmxSZXF1ZXN0YF0oI1VybFJlcXVlc3QpIGRvY3MhXG5cbioqV2hlbiB0aGUgVVJMIGNoYW5nZXMqKiwgdGhlIG5ldyBgVXJsYCBnb2VzIHRocm91Z2ggYG9uVXJsQ2hhbmdlYC4gVGhlXG5yZXN1bHRpbmcgbWVzc2FnZSBnb2VzIHRvIGB1cGRhdGVgIHdoZXJlIHlvdSBjYW4gZGVjaWRlIHdoYXQgdG8gc2hvdyBuZXh0LlxuXG5BcHBsaWNhdGlvbnMgYWx3YXlzIHVzZSB0aGUgW2BCcm93c2VyLk5hdmlnYXRpb25gXVtibl0gbW9kdWxlIGZvciBwcmVjaXNlXG5jb250cm9sIG92ZXIgYFVybGAgY2hhbmdlcy5cblxuKipNb3JlIEluZm86KiogSGVyZSBhcmUgc29tZSBleGFtcGxlIHVzYWdlcyBvZiBgYXBwbGljYXRpb25gIHByb2dyYW1zOlxuXG4gIC0gW1JlYWxXb3JsZCBleGFtcGxlIGFwcF0oaHR0cHM6Ly9naXRodWIuY29tL3J0ZmVsZG1hbi9lbG0tc3BhLWV4YW1wbGUpXG4gIC0gW0dyZW7igJlzIHBhY2thZ2Ugd2Vic2l0ZV0oaHR0cHM6Ly9naXRodWIuY29tL2VsbS9wYWNrYWdlLmdyZW4tbGFuZy5vcmcpXG5cblRoZXNlIGFyZSBxdWl0ZSBhZHZhbmNlZCBHcmVuIHByb2dyYW1zLCBzbyBiZSBzdXJlIHRvIGdvIHRocm91Z2ggW3RoZSBndWlkZV1bZ11cbmZpcnN0IHRvIGdldCBhIHNvbGlkIGNvbmNlcHR1YWwgZm91bmRhdGlvbiBiZWZvcmUgZGl2aW5nIGluISBJZiB5b3Ugc3RhcnRcbnJlYWRpbmcgYSBjYWxjdWx1cyBib29rIGZyb20gcGFnZSAzMTQsIGl0IG1pZ2h0IHNlZW0gY29uZnVzaW5nLiBTYW1lIGhlcmUhXG5cbioqTm90ZToqKiBDYW4gYW4gW2BlbGVtZW50YF0oI2VsZW1lbnQpIG1hbmFnZSB0aGUgVVJMIHRvbz8gUmVhZCBbdGhpc10hXG5cbltnXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL1xuW2JuXTogQnJvd3Nlci5OYXZpZ2F0aW9uXG5bYm5wXTogQnJvd3Nlci5OYXZpZ2F0aW9uI3B1c2hVcmxcbltibmxdOiBCcm93c2VyLk5hdmlnYXRpb24jbG9hZFxuW3VybF06IC9wYWNrYWdlL2dyZW4tbGFuZy91cmwvbGF0ZXN0L21vZHVsZS9VcmwjVXJsXG5bdGhpc106IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVuLWxhbmcvYnJvd3Nlci9ibG9iLzEuMC4yL25vdGVzL25hdmlnYXRpb24taW4tZWxlbWVudHMubWRcblxuLX1cbmFwcGxpY2F0aW9uIDpcbiAgICB7IGluaXQgOiBmbGFncyAtPiBVcmwuVXJsIC0+IE5hdmlnYXRpb24uS2V5IC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IERvY3VtZW50IG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICAsIG9uVXJsUmVxdWVzdCA6IFVybFJlcXVlc3QgLT4gbXNnXG4gICAgLCBvblVybENoYW5nZSA6IFVybC5VcmwgLT4gbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG5hcHBsaWNhdGlvbiA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5hcHBsaWNhdGlvblxuXG5cbnstfCBBbGwgbGlua3MgaW4gYW4gW2BhcHBsaWNhdGlvbmBdKCNhcHBsaWNhdGlvbikgY3JlYXRlIGEgYFVybFJlcXVlc3RgLiBTb1xud2hlbiB5b3UgY2xpY2sgYDxhIGhyZWY9XCIvaG9tZVwiPkhvbWU8L2E+YCwgaXQgZG9lcyBub3QganVzdCBuYXZpZ2F0ZSEgSXRcbm5vdGlmaWVzIGBvblVybFJlcXVlc3RgIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gY2hhbmdlIHRoZSBgVXJsYC5cblxuXG4jIyMgYEludGVybmFsYCB2cyBgRXh0ZXJuYWxgXG5cbkltYWdpbmUgd2UgYXJlIGJyb3dzaW5nIGBodHRwczovL2V4YW1wbGUuY29tYC4gQW4gYEludGVybmFsYCBsaW5rIHdvdWxkIGJlXG5saWtlOlxuXG4gIC0gYHNldHRpbmdzI3ByaXZhY3lgXG4gIC0gYC9ob21lYFxuICAtIGBodHRwczovL2V4YW1wbGUuY29tL2hvbWVgXG4gIC0gYC8vZXhhbXBsZS5jb20vaG9tZWBcblxuQWxsIG9mIHRoZXNlIGxpbmtzIGV4aXN0IHVuZGVyIHRoZSBgaHR0cHM6Ly9leGFtcGxlLmNvbWAgZG9tYWluLiBBbiBgRXh0ZXJuYWxgXG5saW5rIHdvdWxkIGJlIGxpa2U6XG5cbiAgLSBgaHR0cHM6Ly9ncmVuLWxhbmcub3JnL2V4YW1wbGVzYFxuICAtIGBodHRwczovL290aGVyLmV4YW1wbGUuY29tL2hvbWVgXG4gIC0gYGh0dHA6Ly9leGFtcGxlLmNvbS9ob21lYFxuXG5Bbnl0aGluZyB0aGF0IGNoYW5nZXMgdGhlIGRvbWFpbi4gTm90aWNlIHRoYXQgY2hhbmdpbmcgdGhlIHByb3RvY29sIGZyb21cbmBodHRwc2AgdG8gYGh0dHBgIGlzIGNvbnNpZGVyZWQgYSBkaWZmZXJlbnQgZG9tYWluISAoQW5kIHZpY2UgdmVyc2EhKVxuXG5cbiMjIyBQdXJwb3NlXG5cbkhhdmluZyBhIGBVcmxSZXF1ZXN0YCByZXF1aXJlcyBhIGNhc2UgaW4geW91ciBgdXBkYXRlYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgQnJvd3NlciBleHBvc2luZyAoLi4pXG4gICAgaW1wb3J0IEJyb3dzZXIuTmF2aWdhdGlvbiBhcyBOYXZcbiAgICBpbXBvcnQgVXJsXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrZWRMaW5rIFVybFJlcXVlc3RcblxuICAgIHVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiB7IG1vZGVsIDogTW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICB1cGRhdGUgbXNnIG1vZGVsID1cbiAgICAgICAgY2FzZSBtc2cgb2ZcbiAgICAgICAgICAgIENsaWNrZWRMaW5rIHVybFJlcXVlc3QgLT5cbiAgICAgICAgICAgICAgICBjYXNlIHVybFJlcXVlc3Qgb2ZcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJuYWwgdXJsIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGVsID0gbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICwgY29tbWFuZCA9IE5hdi5wdXNoVXJsIG1vZGVsLmtleSAoVXJsLnRvU3RyaW5nIHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbCB1cmwgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbW9kZWwgPSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBjb21tYW5kID0gTmF2LmxvYWQgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgaXQgZ2l2ZXMgeW91IGEgY2hhbmNlIHRvIGN1c3RvbWl6ZSB0aGUgYmVoYXZpb3IgaW4gZWFjaFxuY2FzZS4gTWF5YmUgb24gc29tZSBgSW50ZXJuYWxgIGxpbmtzIHlvdSBzYXZlIHRoZSBzY3JvbGwgcG9zaXRpb24gd2l0aFxuW2BCcm93c2VyLkRvbS5nZXRWaWV3cG9ydGBdKEJyb3dzZXIuRG9tI2dldFZpZXdwb3J0KSBzbyB5b3UgY2FuIHJlc3RvcmUgaXRcbmxhdGVyLiBNYXliZSBvbiBgRXh0ZXJuYWxgIGxpbmtzIHlvdSBwZXJzaXN0IHBhcnRzIG9mIHRoZSBgTW9kZWxgIG9uIHlvdXJcbnNlcnZlcnMgYmVmb3JlIGxlYXZpbmcuIFdoYXRldmVyIHlvdSBuZWVkIHRvIGRvIVxuXG4qKk5vdGU6KiogS25vd2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG5vdCBlbm91Z2ggdG8gcmVzdG9yZSBpdCEgV2hhdCBpZiB0aGVcbmJyb3dzZXIgZGltZW5zaW9ucyBjaGFuZ2U/IFRoZSBzY3JvbGwgcG9zaXRpb24gd2lsbCBub3QgY29ycmVsYXRlIHdpdGhcbiZsZHF1bzt3aGF0IHdhcyBvbiBzY3JlZW4mcmRxdW87IGFueW1vcmUuIFNvIGl0IG1heSBiZSBiZXR0ZXIgdG8gcmVtZW1iZXJcbiZsZHF1bzt3aGF0IHdhcyBvbiBzY3JlZW4mcmRxdW87IGFuZCByZWNyZWF0ZSB0aGUgcG9zaXRpb24gYmFzZWQgb24gdGhhdC4gRm9yXG5leGFtcGxlLCBpbiBhIFdpa2lwZWRpYSBhcnRpY2xlLCByZW1lbWJlciB0aGUgaGVhZGVyIHRoYXQgdGhleSB3ZXJlIGxvb2tpbmcgYXRcbm1vc3QgcmVjZW50bHkuIFtgQnJvd3Nlci5Eb20uZ2V0RWxlbWVudGBdKEJyb3dzZXIuRG9tI2dldEVsZW1lbnQpIGlzIGRlc2lnbmVkXG5mb3IgZmlndXJpbmcgdGhhdCBvdXQhXG5cbi19XG50eXBlIFVybFJlcXVlc3RcbiAgICA9IEludGVybmFsIFVybC5VcmxcbiAgICB8IEV4dGVybmFsIFN0cmluZ1xuIiwKICAgICAgICAibW9kdWxlIEh0bWwgZXhwb3NpbmdcbiAgKCBIdG1sLCBBdHRyaWJ1dGVcbiAgLCB0ZXh0LCBub2RlLCBtYXBcbiAgLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XG4gICwgZGl2LCBwLCBociwgcHJlLCBibG9ja3F1b3RlXG4gICwgc3BhbiwgYSwgY29kZSwgZW0sIHN0cm9uZywgaSwgYiwgdSwgc3ViLCBzdXAsIGJyXG4gICwgb2wsIHVsLCBsaSwgZGwsIGR0LCBkZFxuICAsIGltZywgaWZyYW1lLCBjYW52YXMsIG1hdGhcbiAgLCBmb3JtLCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cbiAgLCBzZWN0aW9uLCBuYXYsIGFydGljbGUsIGFzaWRlLCBoZWFkZXIsIGZvb3RlciwgYWRkcmVzcywgbWFpbl9cbiAgLCBmaWd1cmUsIGZpZ2NhcHRpb25cbiAgLCB0YWJsZSwgY2FwdGlvbiwgY29sZ3JvdXAsIGNvbCwgdGJvZHksIHRoZWFkLCB0Zm9vdCwgdHIsIHRkLCB0aFxuICAsIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCBkYXRhbGlzdCwgb3B0Z3JvdXAsIG91dHB1dCwgcHJvZ3Jlc3MsIG1ldGVyXG4gICwgYXVkaW8sIHZpZGVvLCBzb3VyY2UsIHRyYWNrXG4gICwgZW1iZWQsIG9iamVjdCwgcGFyYW1cbiAgLCBpbnMsIGRlbFxuICAsIHNtYWxsLCBjaXRlLCBkZm4sIGFiYnIsIHRpbWUsIHZhciwgc2FtcCwga2JkLCBzLCBxXG4gICwgbWFyaywgcnVieSwgcnQsIHJwLCBiZGksIGJkbywgd2JyXG4gICwgZGV0YWlscywgc3VtbWFyeSwgbWVudWl0ZW0sIG1lbnVcbiAgKVxuXG57LXwgVGhpcyBmaWxlIGlzIG9yZ2FuaXplZCByb3VnaGx5IGluIG9yZGVyIG9mIHBvcHVsYXJpdHkuIFRoZSB0YWdzIHdoaWNoIHlvdSdkXG5leHBlY3QgdG8gdXNlIGZyZXF1ZW50bHkgd2lsbCBiZSBjbG9zZXIgdG8gdGhlIHRvcC5cblxuQGRvY3MgSHRtbCwgQXR0cmlidXRlLCB0ZXh0LCBub2RlLCBtYXBcblxuIyMgSGVhZGVyc1xuQGRvY3MgaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxuXG4jIyBHcm91cGluZyBDb250ZW50XG5AZG9jcyBkaXYsIHAsIGhyLCBwcmUsIGJsb2NrcXVvdGVcblxuIyMgVGV4dFxuQGRvY3Mgc3BhbiwgYSwgY29kZSwgZW0sIHN0cm9uZywgaSwgYiwgdSwgc3ViLCBzdXAsIGJyXG5cbiMjIExpc3RzXG5AZG9jcyBvbCwgdWwsIGxpLCBkbCwgZHQsIGRkXG5cbiMjIEVtYmVkZGVkIENvbnRlbnRcbkBkb2NzIGltZywgaWZyYW1lLCBjYW52YXMsIG1hdGhcblxuIyMgSW5wdXRzXG5AZG9jcyBmb3JtLCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cblxuIyMgU2VjdGlvbnNcbkBkb2NzIHNlY3Rpb24sIG5hdiwgYXJ0aWNsZSwgYXNpZGUsIGhlYWRlciwgZm9vdGVyLCBhZGRyZXNzLCBtYWluX1xuXG4jIyBGaWd1cmVzXG5AZG9jcyBmaWd1cmUsIGZpZ2NhcHRpb25cblxuIyMgVGFibGVzXG5AZG9jcyB0YWJsZSwgY2FwdGlvbiwgY29sZ3JvdXAsIGNvbCwgdGJvZHksIHRoZWFkLCB0Zm9vdCwgdHIsIHRkLCB0aFxuXG4jIyBMZXNzIENvbW1vbiBJbnB1dHNcbkBkb2NzIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCBkYXRhbGlzdCwgb3B0Z3JvdXAsIG91dHB1dCwgcHJvZ3Jlc3MsIG1ldGVyXG5cbiMjIEF1ZGlvIGFuZCBWaWRlb1xuQGRvY3MgYXVkaW8sIHZpZGVvLCBzb3VyY2UsIHRyYWNrXG5cbiMjIEVtYmVkZGVkIE9iamVjdHNcbkBkb2NzIGVtYmVkLCBvYmplY3QsIHBhcmFtXG5cbiMjIFRleHQgRWRpdHNcbkBkb2NzIGlucywgZGVsXG5cbiMjIFNlbWFudGljIFRleHRcbkBkb2NzIHNtYWxsLCBjaXRlLCBkZm4sIGFiYnIsIHRpbWUsIHZhciwgc2FtcCwga2JkLCBzLCBxXG5cbiMjIExlc3MgQ29tbW9uIFRleHQgVGFnc1xuQGRvY3MgbWFyaywgcnVieSwgcnQsIHJwLCBiZGksIGJkbywgd2JyXG5cbiMgSW50ZXJhY3RpdmUgRWxlbWVudHNcbkBkb2NzIGRldGFpbHMsIHN1bW1hcnksIG1lbnVpdGVtLCBtZW51XG5cbi19XG5cblxuaW1wb3J0IFZpcnR1YWxEb21cblxuXG5cbi0tIENPUkUgVFlQRVNcblxuXG57LXwgVGhlIGNvcmUgYnVpbGRpbmcgYmxvY2sgdXNlZCB0byBidWlsZCB1cCBIVE1MLiBIZXJlIHdlIGNyZWF0ZSBhbiBgSHRtbGBcbnZhbHVlIHdpdGggbm8gYXR0cmlidXRlcyBhbmQgb25lIGNoaWxkOlxuXG4gICAgaGVsbG8gOiBIdG1sIG1zZ1xuICAgIGhlbGxvID1cbiAgICAgIGRpdiBbXSBbIHRleHQgXCJIZWxsbyFcIiBdXG4tfVxudHlwZSBhbGlhcyBIdG1sIG1zZyA9IFZpcnR1YWxEb20uTm9kZSBtc2dcblxuXG57LXwgU2V0IGF0dHJpYnV0ZXMgb24geW91ciBgSHRtbGAuIExlYXJuIG1vcmUgaW4gdGhlXG5bYEh0bWwuQXR0cmlidXRlc2BdKEh0bWwtQXR0cmlidXRlcykgbW9kdWxlLlxuLX1cbnR5cGUgYWxpYXMgQXR0cmlidXRlIG1zZyA9IFZpcnR1YWxEb20uQXR0cmlidXRlIG1zZ1xuXG5cblxuLS0gUFJJTUlUSVZFU1xuXG5cbnstfCBHZW5lcmFsIHdheSB0byBjcmVhdGUgSFRNTCBub2Rlcy4gSXQgaXMgdXNlZCB0byBkZWZpbmUgYWxsIG9mIHRoZSBoZWxwZXJcbmZ1bmN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuXG5cbiAgICBkaXYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuICAgIGRpdiBhdHRyaWJ1dGVzIGNoaWxkcmVuID1cbiAgICAgICAgbm9kZSBcImRpdlwiIGF0dHJpYnV0ZXMgY2hpbGRyZW5cblxuWW91IGNhbiB1c2UgdGhpcyB0byBjcmVhdGUgY3VzdG9tIG5vZGVzIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzb21ldGhpbmcgdGhhdFxuaXMgbm90IGNvdmVyZWQgYnkgdGhlIGhlbHBlciBmdW5jdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LlxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm5vZGUgPVxuICBWaXJ0dWFsRG9tLm5vZGVcblxuXG57LXwgSnVzdCBwdXQgcGxhaW4gdGV4dCBpbiB0aGUgRE9NLiBJdCB3aWxsIGVzY2FwZSB0aGUgc3RyaW5nIHNvIHRoYXQgaXQgYXBwZWFyc1xuZXhhY3RseSBhcyB5b3Ugc3BlY2lmeS5cblxuICAgIHRleHQgXCJIZWxsbyBXb3JsZCFcIlxuLX1cbnRleHQgOiBTdHJpbmcgLT4gSHRtbCBtc2dcbnRleHQgPVxuICBWaXJ0dWFsRG9tLnRleHRcblxuXG5cbi0tIE5FU1RJTkcgVklFV1NcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBzb21lIGBIdG1sYC4gSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLFxud2UgaGF2ZSBgdmlld0J1dHRvbmAgdGhhdCBwcm9kdWNlcyBgKClgIG1lc3NhZ2VzLCBhbmQgd2UgdHJhbnNmb3JtIHRob3NlIHZhbHVlc1xuaW50byBgTXNnYCB2YWx1ZXMgaW4gYHZpZXdgLlxuXG4gICAgdHlwZSBNc2cgPSBMZWZ0IHwgUmlnaHRcblxuICAgIHZpZXcgOiBtb2RlbCAtPiBIdG1sIE1zZ1xuICAgIHZpZXcgbW9kZWwgPVxuICAgICAgZGl2IFtdXG4gICAgICAgIFsgbWFwIChcXF8gLT4gTGVmdCkgKHZpZXdCdXR0b24gXCJMZWZ0XCIpXG4gICAgICAgICwgbWFwIChcXF8gLT4gUmlnaHQpICh2aWV3QnV0dG9uIFwiUmlnaHRcIilcbiAgICAgICAgXVxuXG4gICAgdmlld0J1dHRvbiA6IFN0cmluZyAtPiBIdG1sICgpXG4gICAgdmlld0J1dHRvbiBuYW1lID1cbiAgICAgIGJ1dHRvbiBbIG9uQ2xpY2sgKCkgXSBbIHRleHQgbmFtZSBdXG5cbklmIHlvdSBhcmUgZ3Jvd2luZyB5b3VyIHByb2plY3QgYXMgcmVjb21tZW5kZWQgaW4gW3RoZSBvZmZpY2lhbFxuZ3VpZGVdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnLyksIHRoaXMgc2hvdWxkIG5vdCBjb21lIGluIGhhbmR5IGluIG1vc3RcbnByb2plY3RzLiBVc3VhbGx5IGl0IGlzIGVhc2llciB0byBqdXN0IHBhc3MgdGhpbmdzIGluIGFzIGFyZ3VtZW50cy5cblxuKipOb3RlOioqIFNvbWUgZm9sa3MgaGF2ZSB0cmllZCB0byB1c2UgdGhpcyB0byBtYWtlIOKAnGNvbXBvbmVudHPigJ0gaW4gdGhlaXJcbnByb2plY3RzLCBidXQgdGhleSBydW4gaW50byB0aGUgZmFjdCB0aGF0IGNvbXBvbmVudHMgYXJlIG9iamVjdHMuIEJvdGggYXJlXG5sb2NhbCBtdXRhYmxlIHN0YXRlIHdpdGggbWV0aG9kcy4gR3JlbiBpcyBub3QgYW4gb2JqZWN0LW9yaWVudGVkIGxhbmd1YWdlLCBzb1xueW91IHJ1biBpbnRvIGFsbCBzb3J0cyBvZiBmcmljdGlvbiBpZiB5b3UgdHJ5IHRvIHVzZSBpdCBsaWtlIG9uZS4gSSBkZWZpbml0ZWx5XG5yZWNvbW1lbmQgYWdhaW5zdCBnb2luZyBkb3duIHRoYXQgcGF0aCEgSW5zdGVhZCwgbWFrZSB0aGUgc2ltcGxlc3QgZnVuY3Rpb25cbnBvc3NpYmxlIGFuZCByZXBlYXQuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBIdG1sIGEgLT4gSHRtbCBtc2dcbm1hcCA9XG4gIFZpcnR1YWxEb20ubWFwXG5cblxuXG4tLSBTRUNUSU9OU1xuXG5cbnstfCBEZWZpbmVzIGEgc2VjdGlvbiBpbiBhIGRvY3VtZW50LlxuLX1cbnNlY3Rpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc2VjdGlvbiA9XG4gIG5vZGUgXCJzZWN0aW9uXCJcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gdGhhdCBjb250YWlucyBvbmx5IG5hdmlnYXRpb24gbGlua3MuXG4tfVxubmF2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm5hdiA9XG4gIG5vZGUgXCJuYXZcIlxuXG5cbnstfCBEZWZpbmVzIHNlbGYtY29udGFpbmVkIGNvbnRlbnQgdGhhdCBjb3VsZCBleGlzdCBpbmRlcGVuZGVudGx5IG9mIHRoZSByZXN0XG5vZiB0aGUgY29udGVudC5cbi19XG5hcnRpY2xlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFydGljbGUgPVxuICBub2RlIFwiYXJ0aWNsZVwiXG5cblxuey18IERlZmluZXMgc29tZSBjb250ZW50IGxvb3NlbHkgcmVsYXRlZCB0byB0aGUgcGFnZSBjb250ZW50LiBJZiBpdCBpcyByZW1vdmVkLFxudGhlIHJlbWFpbmluZyBjb250ZW50IHN0aWxsIG1ha2VzIHNlbnNlLlxuLX1cbmFzaWRlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFzaWRlID1cbiAgbm9kZSBcImFzaWRlXCJcblxuXG57LXwtfVxuaDEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDEgPVxuICBub2RlIFwiaDFcIlxuXG5cbnstfC19XG5oMiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oMiA9XG4gIG5vZGUgXCJoMlwiXG5cblxuey18LX1cbmgzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmgzID1cbiAgbm9kZSBcImgzXCJcblxuXG57LXwtfVxuaDQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDQgPVxuICBub2RlIFwiaDRcIlxuXG5cbnstfC19XG5oNSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oNSA9XG4gIG5vZGUgXCJoNVwiXG5cblxuey18LX1cbmg2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmg2ID1cbiAgbm9kZSBcImg2XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgaGVhZGVyIG9mIGEgcGFnZSBvciBzZWN0aW9uLiBJdCBvZnRlbiBjb250YWlucyBhIGxvZ28sIHRoZVxudGl0bGUgb2YgdGhlIHdlYiBzaXRlLCBhbmQgYSBuYXZpZ2F0aW9uYWwgdGFibGUgb2YgY29udGVudC5cbi19XG5oZWFkZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaGVhZGVyID1cbiAgbm9kZSBcImhlYWRlclwiXG5cblxuey18IERlZmluZXMgdGhlIGZvb3RlciBmb3IgYSBwYWdlIG9yIHNlY3Rpb24uIEl0IG9mdGVuIGNvbnRhaW5zIGEgY29weXJpZ2h0XG5ub3RpY2UsIHNvbWUgbGlua3MgdG8gbGVnYWwgaW5mb3JtYXRpb24sIG9yIGFkZHJlc3NlcyB0byBnaXZlIGZlZWRiYWNrLlxuLX1cbmZvb3RlciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5mb290ZXIgPVxuICBub2RlIFwiZm9vdGVyXCJcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gY29udGFpbmluZyBjb250YWN0IGluZm9ybWF0aW9uLiAtfVxuYWRkcmVzcyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hZGRyZXNzID1cbiAgbm9kZSBcImFkZHJlc3NcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYWluIG9yIGltcG9ydGFudCBjb250ZW50IGluIHRoZSBkb2N1bWVudC4gVGhlcmUgaXMgb25seSBvbmVcbmBtYWluYCBlbGVtZW50IGluIHRoZSBkb2N1bWVudC5cbi19XG5tYWluXyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tYWluXyA9XG4gIG5vZGUgXCJtYWluXCJcblxuXG4tLSBHUk9VUElORyBDT05URU5UXG5cbnstfCBEZWZpbmVzIGEgcG9ydGlvbiB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSBwYXJhZ3JhcGguIC19XG5wIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnAgPVxuICBub2RlIFwicFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0aGVtYXRpYyBicmVhayBiZXR3ZWVuIHBhcmFncmFwaHMgb2YgYSBzZWN0aW9uIG9yIGFydGljbGUgb3JcbmFueSBsb25nZXIgY29udGVudC5cbi19XG5ociA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ociA9XG4gIG5vZGUgXCJoclwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGl0cyBjb250ZW50IGlzIHByZWZvcm1hdHRlZCBhbmQgdGhhdCB0aGlzIGZvcm1hdCBtdXN0IGJlXG5wcmVzZXJ2ZWQuXG4tfVxucHJlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnByZSA9XG4gIG5vZGUgXCJwcmVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29udGVudCB0aGF0IGlzIHF1b3RlZCBmcm9tIGFub3RoZXIgc291cmNlLiAtfVxuYmxvY2txdW90ZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ibG9ja3F1b3RlID1cbiAgbm9kZSBcImJsb2NrcXVvdGVcIlxuXG5cbnstfCBEZWZpbmVzIGFuIG9yZGVyZWQgbGlzdCBvZiBpdGVtcy4gLX1cbm9sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9sID1cbiAgbm9kZSBcIm9sXCJcblxuXG57LXwgRGVmaW5lcyBhbiB1bm9yZGVyZWQgbGlzdCBvZiBpdGVtcy4gLX1cbnVsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnVsID1cbiAgbm9kZSBcInVsXCJcblxuXG57LXwgRGVmaW5lcyBhIGl0ZW0gb2YgYW4gZW51bWVyYXRpb24gbGlzdC4gLX1cbmxpIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmxpID1cbiAgbm9kZSBcImxpXCJcblxuXG57LXwgRGVmaW5lcyBhIGRlZmluaXRpb24gbGlzdCwgdGhhdCBpcywgYSBsaXN0IG9mIHRlcm1zIGFuZCB0aGVpciBhc3NvY2lhdGVkXG5kZWZpbml0aW9ucy5cbi19XG5kbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kbCA9XG4gIG5vZGUgXCJkbFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0ZXJtIGRlZmluZWQgYnkgdGhlIG5leHQgYGRkYC4gLX1cbmR0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmR0ID1cbiAgbm9kZSBcImR0XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgdGVybXMgaW1tZWRpYXRlbHkgbGlzdGVkIGJlZm9yZSBpdC4gLX1cbmRkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRkID1cbiAgbm9kZSBcImRkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGZpZ3VyZSBpbGx1c3RyYXRlZCBhcyBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gLX1cbmZpZ3VyZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5maWd1cmUgPVxuICBub2RlIFwiZmlndXJlXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgbGVnZW5kIG9mIGEgZmlndXJlLiAtfVxuZmlnY2FwdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5maWdjYXB0aW9uID1cbiAgbm9kZSBcImZpZ2NhcHRpb25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgZ2VuZXJpYyBjb250YWluZXIgd2l0aCBubyBzcGVjaWFsIG1lYW5pbmcuIC19XG5kaXYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGl2ID1cbiAgbm9kZSBcImRpdlwiXG5cblxuLS0gVEVYVCBMRVZFTCBTRU1BTlRJQ1xuXG57LXwgUmVwcmVzZW50cyBhIGh5cGVybGluaywgbGlua2luZyB0byBhbm90aGVyIHJlc291cmNlLiAtfVxuYSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hID1cbiAgbm9kZSBcImFcIlxuXG5cbnstfCBSZXByZXNlbnRzIGVtcGhhc2l6ZWQgdGV4dCwgbGlrZSBhIHN0cmVzcyBhY2NlbnQuIC19XG5lbSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5lbSA9XG4gIG5vZGUgXCJlbVwiXG5cblxuey18IFJlcHJlc2VudHMgZXNwZWNpYWxseSBpbXBvcnRhbnQgdGV4dC4gLX1cbnN0cm9uZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdHJvbmcgPVxuICBub2RlIFwic3Ryb25nXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNpZGUgY29tbWVudCwgdGhhdCBpcywgdGV4dCBsaWtlIGEgZGlzY2xhaW1lciBvciBhXG5jb3B5cmlnaHQsIHdoaWNoIGlzIG5vdCBlc3NlbnRpYWwgdG8gdGhlIGNvbXByZWhlbnNpb24gb2YgdGhlIGRvY3VtZW50LlxuLX1cbnNtYWxsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNtYWxsID1cbiAgbm9kZSBcInNtYWxsXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb250ZW50IHRoYXQgaXMgbm8gbG9uZ2VyIGFjY3VyYXRlIG9yIHJlbGV2YW50LiAtfVxucyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zID1cbiAgbm9kZSBcInNcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0aXRsZSBvZiBhIHdvcmsuIC19XG5jaXRlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNpdGUgPVxuICBub2RlIFwiY2l0ZVwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gaW5saW5lIHF1b3RhdGlvbi4gLX1cbnEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucSA9XG4gIG5vZGUgXCJxXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRlcm0gd2hvc2UgZGVmaW5pdGlvbiBpcyBjb250YWluZWQgaW4gaXRzIG5lYXJlc3QgYW5jZXN0b3JcbmNvbnRlbnQuXG4tfVxuZGZuIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRmbiA9XG4gIG5vZGUgXCJkZm5cIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGFiYnJldmlhdGlvbiBvciBhbiBhY3JvbnltOyB0aGUgZXhwYW5zaW9uIG9mIHRoZVxuYWJicmV2aWF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBpbiB0aGUgdGl0bGUgYXR0cmlidXRlLlxuLX1cbmFiYnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYWJiciA9XG4gIG5vZGUgXCJhYmJyXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGRhdGUgYW5kIHRpbWUgdmFsdWU7IHRoZSBtYWNoaW5lLXJlYWRhYmxlIGVxdWl2YWxlbnQgY2FuIGJlXG5yZXByZXNlbnRlZCBpbiB0aGUgZGF0ZXRpbWUgYXR0cmlidXRlLlxuLX1cbnRpbWUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGltZSA9XG4gIG5vZGUgXCJ0aW1lXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb21wdXRlciBjb2RlLiAtfVxuY29kZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jb2RlID1cbiAgbm9kZSBcImNvZGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdmFyaWFibGUuIFNwZWNpZmljIGNhc2VzIHdoZXJlIGl0IHNob3VsZCBiZSB1c2VkIGluY2x1ZGUgYW5cbmFjdHVhbCBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbiBvciBwcm9ncmFtbWluZyBjb250ZXh0LCBhbiBpZGVudGlmaWVyXG5yZXByZXNlbnRpbmcgYSBjb25zdGFudCwgYSBzeW1ib2wgaWRlbnRpZnlpbmcgYSBwaHlzaWNhbCBxdWFudGl0eSwgYSBmdW5jdGlvblxucGFyYW1ldGVyLCBvciBhIG1lcmUgcGxhY2Vob2xkZXIgaW4gcHJvc2UuXG4tfVxudmFyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnZhciA9XG4gIG5vZGUgXCJ2YXJcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBvdXRwdXQgb2YgYSBwcm9ncmFtIG9yIGEgY29tcHV0ZXIuIC19XG5zYW1wIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNhbXAgPVxuICBub2RlIFwic2FtcFwiXG5cblxuey18IFJlcHJlc2VudHMgdXNlciBpbnB1dCwgb2Z0ZW4gZnJvbSB0aGUga2V5Ym9hcmQsIGJ1dCBub3QgbmVjZXNzYXJpbHk7IGl0XG5tYXkgcmVwcmVzZW50IG90aGVyIGlucHV0LCBsaWtlIHRyYW5zY3JpYmVkIHZvaWNlIGNvbW1hbmRzLlxuLX1cbmtiZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5rYmQgPVxuICBub2RlIFwia2JkXCJcblxuXG57LXwgUmVwcmVzZW50IGEgc3Vic2NyaXB0LiAtfVxuc3ViIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnN1YiA9XG4gIG5vZGUgXCJzdWJcIlxuXG5cbnstfCBSZXByZXNlbnQgYSBzdXBlcnNjcmlwdC4gLX1cbnN1cCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdXAgPVxuICBub2RlIFwic3VwXCJcblxuXG57LXwgUmVwcmVzZW50cyBzb21lIHRleHQgaW4gYW4gYWx0ZXJuYXRlIHZvaWNlIG9yIG1vb2QsIG9yIGF0IGxlYXN0IG9mXG5kaWZmZXJlbnQgcXVhbGl0eSwgc3VjaCBhcyBhIHRheG9ub21pYyBkZXNpZ25hdGlvbiwgYSB0ZWNobmljYWwgdGVybSwgYW5cbmlkaW9tYXRpYyBwaHJhc2UsIGEgdGhvdWdodCwgb3IgYSBzaGlwIG5hbWUuXG4tfVxuaSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pID1cbiAgbm9kZSBcImlcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGV4dCB3aGljaCB0byB3aGljaCBhdHRlbnRpb24gaXMgZHJhd24gZm9yIHV0aWxpdGFyaWFuXG5wdXJwb3Nlcy4gSXQgZG9lc24ndCBjb252ZXkgZXh0cmEgaW1wb3J0YW5jZSBhbmQgZG9lc24ndCBpbXBseSBhbiBhbHRlcm5hdGVcbnZvaWNlLlxuLX1cbmIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYiA9XG4gIG5vZGUgXCJiXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIG5vbi10ZXh0dWFsIGFubm90YXRpb24gZm9yIHdoaWNoIHRoZSBjb252ZW50aW9uYWxcbnByZXNlbnRhdGlvbiBpcyB1bmRlcmxpbmluZywgc3VjaCBsYWJlbGluZyB0aGUgdGV4dCBhcyBiZWluZyBtaXNzcGVsdCBvclxubGFiZWxpbmcgYSBwcm9wZXIgbmFtZSBpbiBDaGluZXNlIHRleHQuXG4tfVxudSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG51ID1cbiAgbm9kZSBcInVcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgaGlnaGxpZ2h0ZWQgZm9yIHJlZmVyZW5jZSBwdXJwb3NlcywgdGhhdCBpcyBmb3IgaXRzXG5yZWxldmFuY2UgaW4gYW5vdGhlciBjb250ZXh0LlxuLX1cbm1hcmsgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWFyayA9XG4gIG5vZGUgXCJtYXJrXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb250ZW50IHRvIGJlIG1hcmtlZCB3aXRoIHJ1YnkgYW5ub3RhdGlvbnMsIHNob3J0IHJ1bnMgb2YgdGV4dFxucHJlc2VudGVkIGFsb25nc2lkZSB0aGUgdGV4dC4gVGhpcyBpcyBvZnRlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggRWFzdCBBc2lhblxubGFuZ3VhZ2Ugd2hlcmUgdGhlIGFubm90YXRpb25zIGFjdCBhcyBhIGd1aWRlIGZvciBwcm9udW5jaWF0aW9uLCBsaWtlIHRoZVxuSmFwYW5lc2UgZnVyaWdhbmEuXG4tfVxucnVieSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ydWJ5ID1cbiAgbm9kZSBcInJ1YnlcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0ZXh0IG9mIGEgcnVieSBhbm5vdGF0aW9uLiAtfVxucnQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnQgPVxuICBub2RlIFwicnRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHBhcmVudGhlc2lzIGFyb3VuZCBhIHJ1YnkgYW5ub3RhdGlvbiwgdXNlZCB0byBkaXNwbGF5IHRoZVxuYW5ub3RhdGlvbiBpbiBhbiBhbHRlcm5hdGUgd2F5IGJ5IGJyb3dzZXJzIG5vdCBzdXBwb3J0aW5nIHRoZSBzdGFuZGFyZCBkaXNwbGF5XG5mb3IgYW5ub3RhdGlvbnMuXG4tfVxucnAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnAgPVxuICBub2RlIFwicnBcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgdGhhdCBtdXN0IGJlIGlzb2xhdGVkIGZyb20gaXRzIHN1cnJvdW5kaW5nIGZvclxuYmlkaXJlY3Rpb25hbCB0ZXh0IGZvcm1hdHRpbmcuIEl0IGFsbG93cyBlbWJlZGRpbmcgYSBzcGFuIG9mIHRleHQgd2l0aCBhXG5kaWZmZXJlbnQsIG9yIHVua25vd24sIGRpcmVjdGlvbmFsaXR5LlxuLX1cbmJkaSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iZGkgPVxuICBub2RlIFwiYmRpXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uYWxpdHkgb2YgaXRzIGNoaWxkcmVuLCBpbiBvcmRlciB0byBleHBsaWNpdGx5XG5vdmVycmlkZSB0aGUgVW5pY29kZSBiaWRpcmVjdGlvbmFsIGFsZ29yaXRobS5cbi19XG5iZG8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmRvID1cbiAgbm9kZSBcImJkb1wiXG5cblxuey18IFJlcHJlc2VudHMgdGV4dCB3aXRoIG5vIHNwZWNpZmljIG1lYW5pbmcuIFRoaXMgaGFzIHRvIGJlIHVzZWQgd2hlbiBubyBvdGhlclxudGV4dC1zZW1hbnRpYyBlbGVtZW50IGNvbnZleXMgYW4gYWRlcXVhdGUgbWVhbmluZywgd2hpY2gsIGluIHRoaXMgY2FzZSwgaXNcbm9mdGVuIGJyb3VnaHQgYnkgZ2xvYmFsIGF0dHJpYnV0ZXMgbGlrZSBgY2xhc3NgLCBgbGFuZ2AsIG9yIGBkaXJgLlxuLX1cbnNwYW4gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3BhbiA9XG4gIG5vZGUgXCJzcGFuXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGxpbmUgYnJlYWsuIC19XG5iciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iciA9XG4gIG5vZGUgXCJiclwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5LCB0aGF0IGlzIGEgc3VnZ2VzdGVkIHBvaW50IGZvclxud3JhcHBpbmcgdGV4dCBpbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5IG9mIHRleHQgc3BsaXQgb24gc2V2ZXJhbCBsaW5lcy5cbi19XG53YnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xud2JyID1cbiAgbm9kZSBcIndiclwiXG5cblxuLS0gRURJVFNcblxuey18IERlZmluZXMgYW4gYWRkaXRpb24gdG8gdGhlIGRvY3VtZW50LiAtfVxuaW5zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmlucyA9XG4gIG5vZGUgXCJpbnNcIlxuXG5cbnstfCBEZWZpbmVzIGEgcmVtb3ZhbCBmcm9tIHRoZSBkb2N1bWVudC4gLX1cbmRlbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZWwgPVxuICBub2RlIFwiZGVsXCJcblxuXG4tLSBFTUJFRERFRCBDT05URU5UXG5cbnstfCBSZXByZXNlbnRzIGFuIGltYWdlLiAtfVxuaW1nIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmltZyA9XG4gIG5vZGUgXCJpbWdcIlxuXG5cbnstfCBFbWJlZGRlZCBhbiBIVE1MIGRvY3VtZW50LiAtfVxuaWZyYW1lIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmlmcmFtZSA9XG4gIG5vZGUgXCJpZnJhbWVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgaW50ZWdyYXRpb24gcG9pbnQgZm9yIGFuIGV4dGVybmFsLCBvZnRlbiBub24tSFRNTCxcbmFwcGxpY2F0aW9uIG9yIGludGVyYWN0aXZlIGNvbnRlbnQuXG4tfVxuZW1iZWQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZW1iZWQgPVxuICBub2RlIFwiZW1iZWRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGV4dGVybmFsIHJlc291cmNlLCB3aGljaCBpcyB0cmVhdGVkIGFzIGFuIGltYWdlLCBhbiBIVE1MXG5zdWItZG9jdW1lbnQsIG9yIGFuIGV4dGVybmFsIHJlc291cmNlIHRvIGJlIHByb2Nlc3NlZCBieSBhIHBsdWctaW4uXG4tfVxub2JqZWN0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9iamVjdCA9XG4gIG5vZGUgXCJvYmplY3RcIlxuXG5cbnstfCBEZWZpbmVzIHBhcmFtZXRlcnMgZm9yIHVzZSBieSBwbHVnLWlucyBpbnZva2VkIGJ5IGBvYmplY3RgIGVsZW1lbnRzLiAtfVxucGFyYW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucGFyYW0gPVxuICBub2RlIFwicGFyYW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdmlkZW8sIHRoZSBhc3NvY2lhdGVkIGF1ZGlvIGFuZCBjYXB0aW9ucywgYW5kIGNvbnRyb2xzLiAtfVxudmlkZW8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudmlkZW8gPVxuICBub2RlIFwidmlkZW9cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc291bmQgb3IgYXVkaW8gc3RyZWFtLiAtfVxuYXVkaW8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYXVkaW8gPVxuICBub2RlIFwiYXVkaW9cIlxuXG5cbnstfCBBbGxvd3MgYXV0aG9ycyB0byBzcGVjaWZ5IGFsdGVybmF0aXZlIG1lZGlhIHJlc291cmNlcyBmb3IgbWVkaWEgZWxlbWVudHNcbmxpa2UgYHZpZGVvYCBvciBgYXVkaW9gLlxuLX1cbnNvdXJjZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zb3VyY2UgPVxuICBub2RlIFwic291cmNlXCJcblxuXG57LXwgQWxsb3dzIGF1dGhvcnMgdG8gc3BlY2lmeSB0aW1lZCB0ZXh0IHRyYWNrIGZvciBtZWRpYSBlbGVtZW50cyBsaWtlIGB2aWRlb2Bcbm9yIGBhdWRpb2AuXG4tfVxudHJhY2sgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudHJhY2sgPVxuICBub2RlIFwidHJhY2tcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgYml0bWFwIGFyZWEgZm9yIGdyYXBoaWNzIHJlbmRlcmluZy4gLX1cbmNhbnZhcyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jYW52YXMgPVxuICBub2RlIFwiY2FudmFzXCJcblxuXG57LXwgRGVmaW5lcyBhIG1hdGhlbWF0aWNhbCBmb3JtdWxhLiAtfVxubWF0aCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tYXRoID1cbiAgbm9kZSBcIm1hdGhcIlxuXG5cbi0tIFRBQlVMQVIgREFUQVxuXG57LXwgUmVwcmVzZW50cyBkYXRhIHdpdGggbW9yZSB0aGFuIG9uZSBkaW1lbnNpb24uIC19XG50YWJsZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50YWJsZSA9XG4gIG5vZGUgXCJ0YWJsZVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHRpdGxlIG9mIGEgdGFibGUuIC19XG5jYXB0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNhcHRpb24gPVxuICBub2RlIFwiY2FwdGlvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2Ygb25lIG9yIG1vcmUgY29sdW1ucyBvZiBhIHRhYmxlLiAtfVxuY29sZ3JvdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29sZ3JvdXAgPVxuICBub2RlIFwiY29sZ3JvdXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29sdW1uIG9mIGEgdGFibGUuIC19XG5jb2wgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29sID1cbiAgbm9kZSBcImNvbFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbmNyZXRlIGRhdGEgb2YgYSB0YWJsZS5cbi19XG50Ym9keSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50Ym9keSA9XG4gIG5vZGUgXCJ0Ym9keVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbHVtbiBsYWJlbHMgb2YgYSB0YWJsZS5cbi19XG50aGVhZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50aGVhZCA9XG4gIG5vZGUgXCJ0aGVhZFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbHVtbiBzdW1tYXJpZXMgb2YgYSB0YWJsZS5cbi19XG50Zm9vdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50Zm9vdCA9XG4gIG5vZGUgXCJ0Zm9vdFwiXG5cblxuey18IFJlcHJlc2VudHMgYSByb3cgb2YgY2VsbHMgaW4gYSB0YWJsZS4gLX1cbnRyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRyID1cbiAgbm9kZSBcInRyXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGRhdGEgY2VsbCBpbiBhIHRhYmxlLiAtfVxudGQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGQgPVxuICBub2RlIFwidGRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgaGVhZGVyIGNlbGwgaW4gYSB0YWJsZS4gLX1cbnRoIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRoID1cbiAgbm9kZSBcInRoXCJcblxuXG4tLSBGT1JNU1xuXG57LXwgUmVwcmVzZW50cyBhIGZvcm0sIGNvbnNpc3Rpbmcgb2YgY29udHJvbHMsIHRoYXQgY2FuIGJlIHN1Ym1pdHRlZCB0byBhXG5zZXJ2ZXIgZm9yIHByb2Nlc3NpbmcuXG4tfVxuZm9ybSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5mb3JtID1cbiAgbm9kZSBcImZvcm1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIGNvbnRyb2xzLiAtfVxuZmllbGRzZXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmllbGRzZXQgPVxuICBub2RlIFwiZmllbGRzZXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjYXB0aW9uIGZvciBhIGBmaWVsZHNldGAuIC19XG5sZWdlbmQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubGVnZW5kID1cbiAgbm9kZSBcImxlZ2VuZFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGNhcHRpb24gb2YgYSBmb3JtIGNvbnRyb2wuIC19XG5sYWJlbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5sYWJlbCA9XG4gIG5vZGUgXCJsYWJlbFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0eXBlZCBkYXRhIGZpZWxkIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVkaXQgdGhlIGRhdGEuIC19XG5pbnB1dCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbnB1dCA9XG4gIG5vZGUgXCJpbnB1dFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBidXR0b24uIC19XG5idXR0b24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYnV0dG9uID1cbiAgbm9kZSBcImJ1dHRvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBjb250cm9sIGFsbG93aW5nIHNlbGVjdGlvbiBhbW9uZyBhIHNldCBvZiBvcHRpb25zLiAtfVxuc2VsZWN0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNlbGVjdCA9XG4gIG5vZGUgXCJzZWxlY3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIHByZWRlZmluZWQgb3B0aW9ucyBmb3Igb3RoZXIgY29udHJvbHMuIC19XG5kYXRhbGlzdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kYXRhbGlzdCA9XG4gIG5vZGUgXCJkYXRhbGlzdFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2Ygb3B0aW9ucywgbG9naWNhbGx5IGdyb3VwZWQuIC19XG5vcHRncm91cCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vcHRncm91cCA9XG4gIG5vZGUgXCJvcHRncm91cFwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gb3B0aW9uIGluIGEgYHNlbGVjdGAgZWxlbWVudCBvciBhIHN1Z2dlc3Rpb24gb2YgYSBgZGF0YWxpc3RgXG5lbGVtZW50LlxuLX1cbm9wdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vcHRpb24gPVxuICBub2RlIFwib3B0aW9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIG11bHRpbGluZSB0ZXh0IGVkaXQgY29udHJvbC4gLX1cbnRleHRhcmVhIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRleHRhcmVhID1cbiAgbm9kZSBcInRleHRhcmVhXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIGEgY2FsY3VsYXRpb24uIC19XG5vdXRwdXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3V0cHV0ID1cbiAgbm9kZSBcIm91dHB1dFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGNvbXBsZXRpb24gcHJvZ3Jlc3Mgb2YgYSB0YXNrLiAtfVxucHJvZ3Jlc3MgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucHJvZ3Jlc3MgPVxuICBub2RlIFwicHJvZ3Jlc3NcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2NhbGFyIG1lYXN1cmVtZW50IChvciBhIGZyYWN0aW9uYWwgdmFsdWUpLCB3aXRoaW4gYSBrbm93blxucmFuZ2UuXG4tfVxubWV0ZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWV0ZXIgPVxuICBub2RlIFwibWV0ZXJcIlxuXG5cbi0tIElOVEVSQUNUSVZFIEVMRU1FTlRTXG5cbnstfCBSZXByZXNlbnRzIGEgd2lkZ2V0IGZyb20gd2hpY2ggdGhlIHVzZXIgY2FuIG9idGFpbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG5vciBjb250cm9scy5cbi19XG5kZXRhaWxzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRldGFpbHMgPVxuICBub2RlIFwiZGV0YWlsc1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzdW1tYXJ5LCBjYXB0aW9uLCBvciBsZWdlbmQgZm9yIGEgZ2l2ZW4gYGRldGFpbHNgLiAtfVxuc3VtbWFyeSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdW1tYXJ5ID1cbiAgbm9kZSBcInN1bW1hcnlcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29tbWFuZCB0aGF0IHRoZSB1c2VyIGNhbiBpbnZva2UuIC19XG5tZW51aXRlbSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tZW51aXRlbSA9XG4gIG5vZGUgXCJtZW51aXRlbVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaXN0IG9mIGNvbW1hbmRzLiAtfVxubWVudSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tZW51ID1cbiAgbm9kZSBcIm1lbnVcIlxuXG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nXG4gICggc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hcFxuICAsIGNsYXNzLCBjbGFzc0xpc3QsIGlkLCB0aXRsZSwgaGlkZGVuXG4gICwgdHlwZV8sIHZhbHVlLCBjaGVja2VkLCBwbGFjZWhvbGRlciwgc2VsZWN0ZWRcbiAgLCBhY2NlcHQsIGFjY2VwdENoYXJzZXQsIGFjdGlvbiwgYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXNcbiAgLCBkaXNhYmxlZCwgZW5jdHlwZSwgbGlzdCwgbWF4bGVuZ3RoLCBtaW5sZW5ndGgsIG1ldGhvZCwgbXVsdGlwbGVcbiAgLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuICAsIG1heCwgbWluLCBzdGVwXG4gICwgY29scywgcm93cywgd3JhcFxuICAsIGhyZWYsIHRhcmdldCwgZG93bmxvYWQsIGhyZWZsYW5nLCBtZWRpYSwgcGluZywgcmVsXG4gICwgaXNtYXAsIHVzZW1hcCwgc2hhcGUsIGNvb3Jkc1xuICAsIHNyYywgaGVpZ2h0LCB3aWR0aCwgYWx0XG4gICwgYXV0b3BsYXksIGNvbnRyb2xzLCBsb29wLCBwcmVsb2FkLCBwb3N0ZXIsIGRlZmF1bHQsIGtpbmQsIHNyY2xhbmdcbiAgLCBzYW5kYm94LCBzcmNkb2NcbiAgLCByZXZlcnNlZCwgc3RhcnRcbiAgLCBhbGlnbiwgY29sc3Bhbiwgcm93c3BhbiwgaGVhZGVycywgc2NvcGVcbiAgLCBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZVxuICAsIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuICAsIGNpdGUsIGRhdGV0aW1lLCBwdWJkYXRlLCBtYW5pZmVzdFxuICApXG5cbnstfCBIZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIGF0dHJpYnV0ZXMuIFRoZXkgYXJlIG9yZ2FuaXplZCByb3VnaGx5IGJ5XG5jYXRlZ29yeS4gRWFjaCBhdHRyaWJ1dGUgaXMgbGFiZWxlZCB3aXRoIHRoZSBIVE1MIHRhZ3MgaXQgY2FuIGJlIHVzZWQgd2l0aCwgc29cbmp1c3Qgc2VhcmNoIHRoZSBwYWdlIGZvciBgdmlkZW9gIGlmIHlvdSB3YW50IHZpZGVvIHN0dWZmLlxuXG4jIyBQcmltaXRpdmVzXG5AZG9jcyBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgbWFwXG5cbiMjIFN1cGVyIENvbW1vbiBBdHRyaWJ1dGVzXG5AZG9jcyBjbGFzcywgY2xhc3NMaXN0LCBpZCwgdGl0bGUsIGhpZGRlblxuXG4jIyBJbnB1dHNcbkBkb2NzIHR5cGVfLCB2YWx1ZSwgY2hlY2tlZCwgcGxhY2Vob2xkZXIsIHNlbGVjdGVkXG5cbiMjIElucHV0IEhlbHBlcnNcbkBkb2NzIGFjY2VwdCwgYWNjZXB0Q2hhcnNldCwgYWN0aW9uLCBhdXRvY29tcGxldGUsIGF1dG9mb2N1cywgZGlzYWJsZWQsIGVuY3R5cGUsIGxpc3QsIG1heGxlbmd0aCwgbWlubGVuZ3RoLCBtZXRob2QsIG11bHRpcGxlLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuXG4jIyBJbnB1dCBSYW5nZXNcbkBkb2NzIG1heCwgbWluLCBzdGVwXG5cbiMjIElucHV0IFRleHQgQXJlYXNcbkBkb2NzIGNvbHMsIHJvd3MsIHdyYXBcblxuIyMgTGlua3MgYW5kIEFyZWFzXG5AZG9jcyBocmVmLCB0YXJnZXQsIGRvd25sb2FkLCBocmVmbGFuZywgbWVkaWEsIHBpbmcsIHJlbFxuXG4jIyBNYXBzXG5AZG9jcyBpc21hcCwgdXNlbWFwLCBzaGFwZSwgY29vcmRzXG5cblxuIyMgRW1iZWRkZWQgQ29udGVudFxuQGRvY3Mgc3JjLCBoZWlnaHQsIHdpZHRoLCBhbHRcblxuIyMgQXVkaW8gYW5kIFZpZGVvXG5AZG9jcyBhdXRvcGxheSwgY29udHJvbHMsIGxvb3AsIHByZWxvYWQsIHBvc3RlciwgZGVmYXVsdCwga2luZCwgc3JjbGFuZ1xuXG4jIyBpZnJhbWVzXG5AZG9jcyBzYW5kYm94LCBzcmNkb2NcblxuIyMgT3JkZXJlZCBMaXN0c1xuQGRvY3MgcmV2ZXJzZWQsIHN0YXJ0XG5cbiMjIFRhYmxlc1xuQGRvY3MgYWxpZ24sIGNvbHNwYW4sIHJvd3NwYW4sIGhlYWRlcnMsIHNjb3BlXG5cbiMjIExlc3MgQ29tbW9uIEdsb2JhbCBBdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gYW55IEhUTUwgdGFnIGJ1dCBhcmUgbGVzcyBjb21tb25seSB1c2VkLlxuXG5AZG9jcyBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZSxcbiAgICAgIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuXG4jIyBNaXNjZWxsYW5lb3VzXG5AZG9jcyBjaXRlLCBkYXRldGltZSwgcHViZGF0ZSwgbWFuaWZlc3RcblxuLX1cblxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpzb25cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuLS0gVGhpcyBsaWJyYXJ5IGRvZXMgbm90IGluY2x1ZGUgbG93LCBoaWdoLCBvciBvcHRpbXVtIGJlY2F1c2UgdGhlIGlkZWEgb2YgYVxuLS0gYG1ldGVyYCBpcyBqdXN0IHRvbyBjcmF6eS5cblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIGRpdlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZC1jb2xvclwiIFwicmVkXCJcbiAgICAgICAgLCBzdHlsZSBcImhlaWdodFwiIFwiOTBweFwiXG4gICAgICAgICwgc3R5bGUgXCJ3aWR0aFwiIFwiMTAwJVwiXG4gICAgICAgIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCJcbiAgICAgICAgXVxuXG5UaGVyZSBpcyBubyBgSHRtbC5TdHlsZXNgIG1vZHVsZSBiZWNhdXNlIGJlc3QgcHJhY3RpY2VzIGZvciB3b3JraW5nIHdpdGggSFRNTFxuc3VnZ2VzdCB0aGF0IHRoaXMgc2hvdWxkIHByaW1hcmlseSBiZSBzcGVjaWZpZWQgaW4gQ1NTIGZpbGVzLiBTbyB0aGUgZ2VuZXJhbFxucmVjb21tZW5kYXRpb24gaXMgdG8gdXNlIHRoaXMgZnVuY3Rpb24gbGlnaHRseS5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBWaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IFRoaXMgZnVuY3Rpb24gbWFrZXMgaXQgZWFzaWVyIHRvIGJ1aWxkIGEgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIGF0dHJpYnV0ZS5cbkVhY2ggY2xhc3MgY2FuIGVhc2lseSBiZSBhZGRlZCBhbmQgcmVtb3ZlZCBkZXBlbmRpbmcgb24gdGhlIGJvb2xlYW4gdmFsdWUgaXRcbmlzIHBhaXJlZCB3aXRoLiBGb3IgZXhhbXBsZSwgbWF5YmUgd2Ugd2FudCBhIHdheSB0byB2aWV3IG5vdGljZXM6XG5cbiAgICB2aWV3Tm90aWNlIDogTm90aWNlIC0+IEh0bWwgbXNnXG4gICAgdmlld05vdGljZSBub3RpY2UgPVxuICAgICAgZGl2XG4gICAgICAgIFsgY2xhc3NMaXN0XG4gICAgICAgICAgICBbIHsgY2xhc3MgPSBcIm5vdGljZVwiLCBlbmFibGVkID0gVHJ1ZSB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1pbXBvcnRhbnRcIiwgZW5hYmxlZCA9IG5vdGljZS5pc0ltcG9ydGFudCB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1zZWVuXCIsIGVuYWJsZWQgPSBub3RpY2UuaXNTZWVuIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgbm90aWNlLmNvbnRlbnQgXVxuXG4qKk5vdGU6KiogWW91IGNhbiBoYXZlIGFzIG1hbnkgYGNsYXNzYCBhbmQgYGNsYXNzTGlzdGAgYXR0cmlidXRlcyBhcyB5b3Ugd2FudC5cblRoZXkgYWxsIGdldCBhcHBsaWVkLCBzbyBpZiB5b3Ugc2F5IGBbIGNsYXNzIFwibm90aWNlXCIsIGNsYXNzIFwibm90aWNlLXNlZW5cIiBdYFxueW91IHdpbGwgZ2V0IGJvdGggY2xhc3NlcyFcbi19XG5jbGFzc0xpc3QgOiBBcnJheSB7IGNsYXNzIDogU3RyaW5nLCBlbmFibGVkIDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbmNsYXNzTGlzdCBjbGFzc2VzID1cbiAgY2xhc3Nlc1xuICAgIHw+IEFycmF5LmtlZXBJZiAuZW5hYmxlZFxuICAgIHw+IEFycmF5Lm1hcCAuY2xhc3NcbiAgICB8PiBTdHJpbmcuam9pbiBcIiBcIlxuICAgIHw+IGNsYXNzXG5cblxuXG4tLSBDVVNUT00gQVRUUklCVVRFU1xuXG5cbnstfCBDcmVhdGUgKnByb3BlcnRpZXMqLCBsaWtlIHNheWluZyBgZG9tTm9kZS5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpblxuSmF2YVNjcmlwdC5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIGNsYXNzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBjbGFzcyBuYW1lID1cbiAgICAgIHByb3BlcnR5IFwiY2xhc3NOYW1lXCIgKEVuY29kZS5zdHJpbmcgbmFtZSlcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSA9XG4gIFZpcnR1YWxEb20ucHJvcGVydHlcblxuXG5zdHJpbmdQcm9wZXJ0eSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RyaW5nUHJvcGVydHkga2V5IHN0cmluZyA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5zdHJpbmcgc3RyaW5nKVxuXG5cbmJvb2xQcm9wZXJ0eSA6IFN0cmluZyAtPiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmJvb2xQcm9wZXJ0eSBrZXkgYm9vbCA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5ib29sIGJvb2wpXG5cblxuey18IENyZWF0ZSAqYXR0cmlidXRlcyosIGxpa2Ugc2F5aW5nIGBkb21Ob2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ3JlZXRpbmcnKWBcbmluIEphdmFTY3JpcHQuXG5cbiAgICBjbGFzcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgY2xhc3MgbmFtZSA9XG4gICAgICBhdHRyaWJ1dGUgXCJjbGFzc1wiIG5hbWVcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxuYXR0cmlidXRlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGUgPVxuICBWaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGFuIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gQXR0cmlidXRlIGEgLT4gQXR0cmlidXRlIG1zZ1xubWFwID1cbiAgVmlydHVhbERvbS5tYXBBdHRyaWJ1dGVcblxuXG5cbi0tIEdMT0JBTCBBVFRSSUJVVEVTXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cblxuKipOb3RlOioqIFlvdSBjYW4gaGF2ZSBhcyBtYW55IGBjbGFzc2AgYW5kIGBjbGFzc0xpc3RgIGF0dHJpYnV0ZXMgYXMgeW91IHdhbnQuXG5UaGV5IGFsbCBnZXQgYXBwbGllZCwgc28gaWYgeW91IHNheSBgWyBjbGFzcyBcIm5vdGljZVwiLCBjbGFzcyBcIm5vdGljZS1zZWVuXCIgXWBcbnlvdSB3aWxsIGdldCBib3RoIGNsYXNzZXMhXG4tfVxuY2xhc3MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2xhc3MgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImNsYXNzTmFtZVwiXG5cblxuey18IEluZGljYXRlcyB0aGUgcmVsZXZhbmNlIG9mIGFuIGVsZW1lbnQuIC19XG5oaWRkZW4gOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmhpZGRlbiA9XG4gIGJvb2xQcm9wZXJ0eSBcImhpZGRlblwiXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgYSBzcGVjaWZpYyBlbGVtZW50LiBUaGUgdmFsdWUgb2YgdGhpc1xuYXR0cmlidXRlIG11c3QgYmUgdW5pcXVlLlxuLX1cbmlkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmlkID1cbiAgc3RyaW5nUHJvcGVydHkgXCJpZFwiXG5cblxuey18IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIGEgdG9vbHRpcCB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGVsZW1lbnQuIC19XG50aXRsZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50aXRsZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidGl0bGVcIlxuXG5cblxuLS0gTEVTUyBDT01NT04gR0xPQkFMIEFUVFJJQlVURVNcblxuXG57LXwgRGVmaW5lcyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIGFjdGl2YXRlIG9yIGFkZCBmb2N1cyB0byB0aGUgZWxlbWVudC4gLX1cbmFjY2Vzc2tleSA6IENoYXIgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXNza2V5IGNoYXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2Vzc0tleVwiIChTdHJpbmcuZnJvbUNoYXIgY2hhcilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQncyBjb250ZW50IGlzIGVkaXRhYmxlLiAtfVxuY29udGVudGVkaXRhYmxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5jb250ZW50ZWRpdGFibGUgPVxuICBib29sUHJvcGVydHkgXCJjb250ZW50RWRpdGFibGVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBJRCBvZiBhIGBtZW51YCBlbGVtZW50IHdoaWNoIHdpbGwgc2VydmUgYXMgdGhlIGVsZW1lbnQnc1xuY29udGV4dCBtZW51LlxuLX1cbmNvbnRleHRtZW51IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRleHRtZW51ID1cbiAgYXR0cmlidXRlIFwiY29udGV4dG1lbnVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSB0ZXh0IGRpcmVjdGlvbi4gQWxsb3dlZCB2YWx1ZXMgYXJlIGx0ciAoTGVmdC1Uby1SaWdodCkgb3IgcnRsXG4oUmlnaHQtVG8tTGVmdCkuXG4tfVxuZGlyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRpciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZGlyXCJcblxuXG57LXwgRGVmaW5lcyB3aGV0aGVyIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkLiAtfVxuZHJhZ2dhYmxlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyYWdnYWJsZSA9XG4gIGF0dHJpYnV0ZSBcImRyYWdnYWJsZVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGFjY2VwdCB0aGUgZHJvcHBpbmcgb2YgY29udGVudCBvbiBpdC4gLX1cbmRyb3B6b25lIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyb3B6b25lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkcm9wem9uZVwiXG5cblxuey18LX1cbml0ZW1wcm9wIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbml0ZW1wcm9wID1cbiAgYXR0cmlidXRlIFwiaXRlbXByb3BcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBsYW5ndWFnZSB1c2VkIGluIHRoZSBlbGVtZW50LiAtfVxubGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJsYW5nXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgc3BlbGwgY2hlY2tpbmcgaXMgYWxsb3dlZCBmb3IgdGhlIGVsZW1lbnQuIC19XG5zcGVsbGNoZWNrIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5zcGVsbGNoZWNrID1cbiAgYm9vbFByb3BlcnR5IFwic3BlbGxjaGVja1wiXG5cblxuey18IE92ZXJyaWRlcyB0aGUgYnJvd3NlcidzIGRlZmF1bHQgdGFiIG9yZGVyIGFuZCBmb2xsb3dzIHRoZSBvbmUgc3BlY2lmaWVkXG5pbnN0ZWFkLlxuLX1cbnRhYmluZGV4IDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnRhYmluZGV4IG4gPVxuICBhdHRyaWJ1dGUgXCJ0YWJJbmRleFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gRU1CRURERUQgQ09OVEVOVFxuXG5cbnstfCBUaGUgVVJMIG9mIHRoZSBlbWJlZGRhYmxlIGNvbnRlbnQuIEZvciBgYXVkaW9gLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsXG5gaW5wdXRgLCBgc2NyaXB0YCwgYHNvdXJjZWAsIGB0cmFja2AsIGFuZCBgdmlkZW9gLlxuLX1cbnNyYyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmMgdXJsID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNcIiB1cmxcblxuXG57LXwgRGVjbGFyZSB0aGUgaGVpZ2h0IG9mIGEgYGNhbnZhc2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCwgYGlucHV0YCxcbmBvYmplY3RgLCBvciBgdmlkZW9gLlxuLX1cbmhlaWdodCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5oZWlnaHQgbiA9XG4gIGF0dHJpYnV0ZSBcImhlaWdodFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWNsYXJlIHRoZSB3aWR0aCBvZiBhIGBjYW52YXNgLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsIGBpbnB1dGAsXG5gb2JqZWN0YCwgb3IgYHZpZGVvYC5cbi19XG53aWR0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG53aWR0aCBuID1cbiAgYXR0cmlidXRlIFwid2lkdGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQWx0ZXJuYXRpdmUgdGV4dCBpbiBjYXNlIGFuIGltYWdlIGNhbid0IGJlIGRpc3BsYXllZC4gV29ya3Mgd2l0aCBgaW1nYCxcbmBhcmVhYCwgYW5kIGBpbnB1dGAuXG4tfVxuYWx0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFsdCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWx0XCJcblxuXG5cbi0tIEFVRElPIGFuZCBWSURFT1xuXG5cbnstfCBUaGUgYGF1ZGlvYCBvciBgdmlkZW9gIHNob3VsZCBwbGF5IGFzIHNvb24gYXMgcG9zc2libGUuIC19XG5hdXRvcGxheSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b3BsYXkgPVxuICBib29sUHJvcGVydHkgXCJhdXRvcGxheVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBzaG93IHBsYXliYWNrIGNvbnRyb2xzIGZvciB0aGUgYGF1ZGlvYFxub3IgYHZpZGVvYC5cbi19XG5jb250cm9scyA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuY29udHJvbHMgPVxuICBib29sUHJvcGVydHkgXCJjb250cm9sc1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBgYXVkaW9gIG9yIGB2aWRlb2Agc2hvdWxkIHN0YXJ0IHBsYXlpbmcgZnJvbSB0aGVcbnN0YXJ0IHdoZW4gaXQncyBmaW5pc2hlZC5cbi19XG5sb29wIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5sb29wID1cbiAgYm9vbFByb3BlcnR5IFwibG9vcFwiXG5cblxuey18IENvbnRyb2wgaG93IG11Y2ggb2YgYW4gYGF1ZGlvYCBvciBgdmlkZW9gIHJlc291cmNlIHNob3VsZCBiZSBwcmVsb2FkZWQuIC19XG5wcmVsb2FkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnByZWxvYWQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInByZWxvYWRcIlxuXG5cbnstfCBBIFVSTCBpbmRpY2F0aW5nIGEgcG9zdGVyIGZyYW1lIHRvIHNob3cgdW50aWwgdGhlIHVzZXIgcGxheXMgb3Igc2Vla3MgdGhlXG5gdmlkZW9gLlxuLX1cbnBvc3RlciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wb3N0ZXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBvc3RlclwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBgdHJhY2tgIHNob3VsZCBiZSBlbmFibGVkIHVubGVzcyB0aGUgdXNlcidzIHByZWZlcmVuY2VzXG5pbmRpY2F0ZSBzb21ldGhpbmcgZGlmZmVyZW50LlxuLX1cbmRlZmF1bHQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmRlZmF1bHQgPVxuICBib29sUHJvcGVydHkgXCJkZWZhdWx0XCJcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBraW5kIG9mIHRleHQgYHRyYWNrYC4gLX1cbmtpbmQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xua2luZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwia2luZFwiXG5cblxuey0tIFRPRE86IG1heWJlIHJlaW50cm9kdWNlIG9uY2UgdGhlcmUncyBhIGJldHRlciB3YXkgdG8gZGlzYW1iaWd1YXRlIGltcG9ydHNcbnstfCBTcGVjaWZpZXMgYSB1c2VyLXJlYWRhYmxlIHRpdGxlIG9mIHRoZSB0ZXh0IGB0cmFja2AuIC19XG5sYWJlbCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYWJlbCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibGFiZWxcIlxuLS19XG5cbnstfCBBIHR3byBsZXR0ZXIgbGFuZ3VhZ2UgY29kZSBpbmRpY2F0aW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgYHRyYWNrYCB0ZXh0IGRhdGEuXG4tfVxuc3JjbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmNsYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNsYW5nXCJcblxuXG5cbi0tIElGUkFNRVNcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBzZWN1cml0eSByZXN0cmljdGlvbnMgeW91J2QgbGlrZSB0byBsaWZ0IGZvciBhblxuYGlmcmFtZWAuXG4tfVxuc2FuZGJveCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zYW5kYm94ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzYW5kYm94XCJcblxuXG57LXwgQW4gSFRNTCBkb2N1bWVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGFzIHRoZSBib2R5IG9mIGFuIGBpZnJhbWVgLiBJdCB3aWxsXG5vdmVycmlkZSB0aGUgY29udGVudCBvZiB0aGUgYHNyY2AgYXR0cmlidXRlIGlmIGl0IGhhcyBiZWVuIHNwZWNpZmllZC5cbi19XG5zcmNkb2MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3JjZG9jID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNkb2NcIlxuXG5cblxuLS0gSU5QVVRcblxuXG57LXwgRGVmaW5lcyB0aGUgdHlwZSBvZiBhIGBidXR0b25gLCBgY2hlY2tib3hgLCBgaW5wdXRgLCBgZW1iZWRgLCBgbWVudWAsXG5gb2JqZWN0YCwgYHNjcmlwdGAsIGBzb3VyY2VgLCBvciBgc3R5bGVgLlxuLX1cbnR5cGVfIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnR5cGVfID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ0eXBlXCJcblxuXG57LXwgVGhlIHZhbHVlIHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGluIGEgYGJ1dHRvbmAsIGBvcHRpb25gLFxuYGlucHV0YCwgYGxpYCwgYG1ldGVyYCwgYHByb2dyZXNzYCwgb3IgYHBhcmFtYC5cbi19XG52YWx1ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidmFsdWVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9mIHR5cGUgY2hlY2tib3ggaXMgY2hlY2tlZC4gLX1cbmNoZWNrZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmNoZWNrZWQgPVxuICBib29sUHJvcGVydHkgXCJjaGVja2VkXCJcblxuXG57LXwgUHJvdmlkZXMgYSBoaW50IHRvIHRoZSB1c2VyIG9mIHdoYXQgY2FuIGJlIGVudGVyZWQgaW50byBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbnBsYWNlaG9sZGVyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBsYWNlaG9sZGVyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwbGFjZWhvbGRlclwiXG5cblxuey18IERlZmluZXMgd2hpY2ggYG9wdGlvbmAgd2lsbCBiZSBzZWxlY3RlZCBvbiBwYWdlIGxvYWQuIC19XG5zZWxlY3RlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuc2VsZWN0ZWQgPVxuICBib29sUHJvcGVydHkgXCJzZWxlY3RlZFwiXG5cblxuXG4tLSBJTlBVVCBIRUxQRVJTXG5cblxuey18IExpc3Qgb2YgdHlwZXMgdGhlIHNlcnZlciBhY2NlcHRzLCB0eXBpY2FsbHkgYSBmaWxlIHR5cGUuXG5Gb3IgYGZvcm1gIGFuZCBgaW5wdXRgLlxuLX1cbmFjY2VwdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY2NlcHQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2VwdFwiXG5cblxuey18IExpc3Qgb2Ygc3VwcG9ydGVkIGNoYXJzZXRzIGluIGEgYGZvcm1gLlxuLX1cbmFjY2VwdENoYXJzZXQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXB0Q2hhcnNldCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWNjZXB0Q2hhcnNldFwiXG5cblxuey18IFRoZSBVUkkgb2YgYSBwcm9ncmFtIHRoYXQgcHJvY2Vzc2VzIHRoZSBpbmZvcm1hdGlvbiBzdWJtaXR0ZWQgdmlhIGEgYGZvcm1gLlxuLX1cbmFjdGlvbiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY3Rpb24gdXJpID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY3Rpb25cIiB1cmlcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYSBgZm9ybWAgb3IgYW4gYGlucHV0YCBjYW4gaGF2ZSB0aGVpciB2YWx1ZXMgYXV0b21hdGljYWxseVxuY29tcGxldGVkIGJ5IHRoZSBicm93c2VyLlxuLX1cbmF1dG9jb21wbGV0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b2NvbXBsZXRlIGJvb2wgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImF1dG9jb21wbGV0ZVwiIChpZiBib29sIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIilcblxuXG57LXwgVGhlIGVsZW1lbnQgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZCBhZnRlciB0aGUgcGFnZSBsb2FkZWQuXG5Gb3IgYGJ1dHRvbmAsIGBpbnB1dGAsIGBzZWxlY3RgLCBhbmQgYHRleHRhcmVhYC5cbi19XG5hdXRvZm9jdXMgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmF1dG9mb2N1cyA9XG4gIGJvb2xQcm9wZXJ0eSBcImF1dG9mb2N1c1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBpbnRlcmFjdCB3aXRoIGEgYGJ1dHRvbmAsIGBmaWVsZHNldGAsXG5gaW5wdXRgLCBgb3B0Z3JvdXBgLCBgb3B0aW9uYCwgYHNlbGVjdGAgb3IgYHRleHRhcmVhYC5cbi19XG5kaXNhYmxlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGlzYWJsZWQgPVxuICBib29sUHJvcGVydHkgXCJkaXNhYmxlZFwiXG5cblxuey18IEhvdyBgZm9ybWAgZGF0YSBzaG91bGQgYmUgZW5jb2RlZCB3aGVuIHN1Ym1pdHRlZCB3aXRoIHRoZSBQT1NUIG1ldGhvZC5cbk9wdGlvbnMgaW5jbHVkZTogYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkLCBtdWx0aXBhcnQvZm9ybS1kYXRhLCBhbmRcbnRleHQvcGxhaW4uXG4tfVxuZW5jdHlwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5lbmN0eXBlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJlbmN0eXBlXCJcblxuXG57LXwgQXNzb2NpYXRlcyBhbiBgaW5wdXRgIHdpdGggYSBgZGF0YWxpc3RgIHRhZy4gVGhlIGRhdGFsaXN0IGdpdmVzIHNvbWVcbnByZS1kZWZpbmVkIG9wdGlvbnMgdG8gc3VnZ2VzdCB0byB0aGUgdXNlciBhcyB0aGV5IGludGVyYWN0IHdpdGggYW4gaW5wdXQuXG5UaGUgdmFsdWUgb2YgdGhlIGxpc3QgYXR0cmlidXRlIG11c3QgbWF0Y2ggdGhlIGlkIG9mIGEgYGRhdGFsaXN0YCBub2RlLlxuRm9yIGBpbnB1dGAuXG4tfVxubGlzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5saXN0ID1cbiAgYXR0cmlidXRlIFwibGlzdFwiXG5cblxuey18IERlZmluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBpbiBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbm1pbmxlbmd0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5taW5sZW5ndGggbiA9XG4gIGF0dHJpYnV0ZSBcIm1pbkxlbmd0aFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFsbG93ZWQgaW4gYW4gYGlucHV0YCBvclxuYHRleHRhcmVhYC5cbi19XG5tYXhsZW5ndGggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xubWF4bGVuZ3RoIG4gPVxuICBhdHRyaWJ1dGUgXCJtYXhsZW5ndGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVmaW5lcyB3aGljaCBIVFRQIG1ldGhvZCB0byB1c2Ugd2hlbiBzdWJtaXR0aW5nIGEgYGZvcm1gLiBDYW4gYmUgR0VUXG4oZGVmYXVsdCkgb3IgUE9TVC5cbi19XG5tZXRob2QgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWV0aG9kID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtZXRob2RcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIGVudGVyZWQgaW4gYW4gYGlucHV0YCBvZiB0eXBlXG5lbWFpbCBvciBmaWxlLiBDYW4gYWxzbyBpbmRpY2F0ZSB0aGF0IHlvdSBjYW4gYHNlbGVjdGAgbWFueSBvcHRpb25zLlxuLX1cbm11bHRpcGxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5tdWx0aXBsZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm11bHRpcGxlXCJcblxuXG57LXwgTmFtZSBvZiB0aGUgZWxlbWVudC4gRm9yIGV4YW1wbGUgdXNlZCBieSB0aGUgc2VydmVyIHRvIGlkZW50aWZ5IHRoZSBmaWVsZHNcbmluIGZvcm0gc3VibWl0cy4gRm9yIGBidXR0b25gLCBgZm9ybWAsIGBmaWVsZHNldGAsIGBpZnJhbWVgLCBgaW5wdXRgLFxuYG9iamVjdGAsIGBvdXRwdXRgLCBgc2VsZWN0YCwgYHRleHRhcmVhYCwgYG1hcGAsIGBtZXRhYCwgYW5kIGBwYXJhbWAuXG4tfVxubmFtZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5uYW1lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJuYW1lXCJcblxuXG57LXwgVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgYSBgZm9ybWAgc2hvdWxkbid0IGJlIHZhbGlkYXRlZCB3aGVuXG5zdWJtaXR0ZWQuXG4tfVxubm92YWxpZGF0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xubm92YWxpZGF0ZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm5vVmFsaWRhdGVcIlxuXG5cbnstfCBEZWZpbmVzIGEgcmVndWxhciBleHByZXNzaW9uIHdoaWNoIGFuIGBpbnB1dGAncyB2YWx1ZSB3aWxsIGJlIHZhbGlkYXRlZFxuYWdhaW5zdC5cbi19XG5wYXR0ZXJuIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBhdHRlcm4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBhdHRlcm5cIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9yIGB0ZXh0YXJlYWAgY2FuIGJlIGVkaXRlZC4gLX1cbnJlYWRvbmx5IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZWFkb25seSA9XG4gIGJvb2xQcm9wZXJ0eSBcInJlYWRPbmx5XCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIHJlcXVpcmVkIHRvIGZpbGwgb3V0IG9yIG5vdC5cbkZvciBgaW5wdXRgLCBgc2VsZWN0YCwgYW5kIGB0ZXh0YXJlYWAuXG4tfVxucmVxdWlyZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlcXVpcmVkID1cbiAgYm9vbFByb3BlcnR5IFwicmVxdWlyZWRcIlxuXG5cbnstfCBGb3IgYGlucHV0YCBzcGVjaWZpZXMgdGhlIHdpZHRoIG9mIGFuIGlucHV0IGluIGNoYXJhY3RlcnMuXG5cbkZvciBgc2VsZWN0YCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIG9wdGlvbnMgaW4gYSBkcm9wLWRvd24gbGlzdC5cbi19XG5zaXplIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNpemUgbiA9XG4gIGF0dHJpYnV0ZSBcInNpemVcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgVGhlIGVsZW1lbnQgSUQgZGVzY3JpYmVkIGJ5IHRoaXMgYGxhYmVsYCBvciB0aGUgZWxlbWVudCBJRHMgdGhhdCBhcmUgdXNlZFxuZm9yIGFuIGBvdXRwdXRgLlxuLX1cbmZvciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3IgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImh0bWxGb3JcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGVsZW1lbnQgSUQgb2YgdGhlIGBmb3JtYCB0aGF0IG93bnMgdGhpcyBwYXJ0aWN1bGFyIGBidXR0b25gLFxuYGZpZWxkc2V0YCwgYGlucHV0YCwgYGxhYmVsYCwgYG1ldGVyYCwgYG9iamVjdGAsIGBvdXRwdXRgLCBgcHJvZ3Jlc3NgLFxuYHNlbGVjdGAsIG9yIGB0ZXh0YXJlYWAuXG4tfVxuZm9ybSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3JtID1cbiAgYXR0cmlidXRlIFwiZm9ybVwiXG5cblxuXG4tLSBSQU5HRVNcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtYXhpbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtYXggdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCwgYG1ldGVyYCwgYW5kIGBwcm9ncmVzc2AuXG4tfVxubWF4IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1heCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibWF4XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtaW5pbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtaW4gdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCBhbmQgYG1ldGVyYC5cbi19XG5taW4gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWluID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtaW5cIlxuXG5cbnstfCBBZGQgYSBzdGVwIHNpemUgdG8gYW4gYGlucHV0YC4gVXNlIGBzdGVwIFwiYW55XCJgIHRvIGFsbG93IGFueSBmbG9hdGluZy1wb2ludFxubnVtYmVyIHRvIGJlIHVzZWQgaW4gdGhlIGlucHV0LlxuLX1cbnN0ZXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RlcCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGVwXCIgblxuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIGEgYHRleHRhcmVhYC4gLX1cbmNvbHMgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuY29scyBuID1cbiAgYXR0cmlidXRlIFwiY29sc1wiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBudW1iZXIgb2Ygcm93cyBpbiBhIGB0ZXh0YXJlYWAuIC19XG5yb3dzIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnJvd3MgbiA9XG4gIGF0dHJpYnV0ZSBcInJvd3NcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRleHQgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYSBgdGV4dGFyZWFgLiBQb3NzaWJsZVxudmFsdWVzIGFyZSBcImhhcmRcIiBhbmQgXCJzb2Z0XCIuXG4tfVxud3JhcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG53cmFwID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ3cmFwXCJcblxuXG5cbi0tIE1BUFNcblxuXG57LXwgV2hlbiBhbiBgaW1nYCBpcyBhIGRlc2NlbmRhbnQgb2YgYW4gYGFgIHRhZywgdGhlIGBpc21hcGAgYXR0cmlidXRlXG5pbmRpY2F0ZXMgdGhhdCB0aGUgY2xpY2sgbG9jYXRpb24gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBwYXJlbnQgYGFgJ3MgaHJlZiBhc1xuYSBxdWVyeSBzdHJpbmcuXG4tfVxuaXNtYXAgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmlzbWFwID1cbiAgYm9vbFByb3BlcnR5IFwiaXNNYXBcIlxuXG5cbnstfCBTcGVjaWZ5IHRoZSBoYXNoIG5hbWUgcmVmZXJlbmNlIG9mIGEgYG1hcGAgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgYW4gYGltZ2Bcbm9yIGBvYmplY3RgLiBBIGhhc2ggbmFtZSByZWZlcmVuY2UgaXMgYSBoYXNoIHN5bWJvbCBmb2xsb3dlZCBieSB0aGUgZWxlbWVudCdzIG5hbWUgb3IgaWQuXG5FLmcuIGBcIiNwbGFuZXQtbWFwXCJgLlxuLX1cbnVzZW1hcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG51c2VtYXAgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInVzZU1hcFwiXG5cblxuey18IERlY2xhcmUgdGhlIHNoYXBlIG9mIHRoZSBjbGlja2FibGUgYXJlYSBpbiBhbiBgYWAgb3IgYGFyZWFgLiBWYWxpZCB2YWx1ZXNcbmluY2x1ZGU6IGRlZmF1bHQsIHJlY3QsIGNpcmNsZSwgcG9seS4gVGhpcyBhdHRyaWJ1dGUgY2FuIGJlIHBhaXJlZCB3aXRoXG5gY29vcmRzYCB0byBjcmVhdGUgbW9yZSBwYXJ0aWN1bGFyIHNoYXBlcy5cbi19XG5zaGFwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zaGFwZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2hhcGVcIlxuXG5cbnstfCBBIHNldCBvZiB2YWx1ZXMgc3BlY2lmeWluZyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhvdC1zcG90IHJlZ2lvbiBpbiBhblxuYGFyZWFgLiBOZWVkcyB0byBiZSBwYWlyZWQgd2l0aCBhIGBzaGFwZWAgYXR0cmlidXRlIHRvIGJlIG1lYW5pbmdmdWwuXG4tfVxuY29vcmRzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvb3JkcyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY29vcmRzXCJcblxuXG5cbi0tIFJFQUwgU1RVRkZcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiBhIGBjYXB0aW9uYCwgYGNvbGAsIGBjb2xncm91cGAsXG5gaHJgLCBgaWZyYW1lYCwgYGltZ2AsIGB0YWJsZWAsIGB0Ym9keWAsICBgdGRgLCAgYHRmb290YCwgYHRoYCwgYHRoZWFkYCwgb3JcbmB0cmAuXG4tfVxuYWxpZ24gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWxpZ24gPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFsaWduXCJcblxuXG57LXwgQ29udGFpbnMgYSBVUkkgd2hpY2ggcG9pbnRzIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHF1b3RlIG9yIGNoYW5nZSBpbiBhXG5gYmxvY2txdW90ZWAsIGBkZWxgLCBgaW5zYCwgb3IgYHFgLlxuLX1cbmNpdGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2l0ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY2l0ZVwiXG5cblxuXG5cbi0tIExJTktTIEFORCBBUkVBU1xuXG5cbnstfCBUaGUgVVJMIG9mIGEgbGlua2VkIHJlc291cmNlLCBzdWNoIGFzIGBhYCwgYGFyZWFgLCBgYmFzZWAsIG9yIGBsaW5rYC4gLX1cbmhyZWYgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaHJlZiB1cmwgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImhyZWZcIiB1cmxcblxuXG57LXwgU3BlY2lmeSB3aGVyZSB0aGUgcmVzdWx0cyBvZiBjbGlja2luZyBhbiBgYWAsIGBhcmVhYCwgYGJhc2VgLCBvciBgZm9ybWBcbnNob3VsZCBhcHBlYXIuIFBvc3NpYmxlIHNwZWNpYWwgdmFsdWVzIGluY2x1ZGU6XG5cbiAgKiBfYmxhbmsgJm1kYXNoOyBhIG5ldyB3aW5kb3cgb3IgdGFiXG4gICogX3NlbGYgJm1kYXNoOyB0aGUgc2FtZSBmcmFtZSAodGhpcyBpcyBkZWZhdWx0KVxuICAqIF9wYXJlbnQgJm1kYXNoOyB0aGUgcGFyZW50IGZyYW1lXG4gICogX3RvcCAmbWRhc2g7IHRoZSBmdWxsIGJvZHkgb2YgdGhlIHdpbmRvd1xuXG5Zb3UgY2FuIGFsc28gZ2l2ZSB0aGUgbmFtZSBvZiBhbnkgYGZyYW1lYCB5b3UgaGF2ZSBjcmVhdGVkLlxuLX1cbnRhcmdldCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50YXJnZXQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInRhcmdldFwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGNsaWNraW5nIGFuIGBhYCBhbmQgYGFyZWFgIHdpbGwgZG93bmxvYWQgdGhlIHJlc291cmNlXG5kaXJlY3RseS4gVGhlIGBTdHJpbmdgIGFyZ3VtZW50IGRldGVybWlucyB0aGUgbmFtZSBvZiB0aGUgZG93bmxvYWRlZCBmaWxlLlxuU2F5IHRoZSBmaWxlIHlvdSBhcmUgc2VydmluZyBpcyBuYW1lZCBgaGF0cy5qc29uYC5cblxuICAgIGRvd25sb2FkIFwiXCIgICAgICAgICAgICAgICAtLSBoYXRzLmpzb25cbiAgICBkb3dubG9hZCBcIm15LWhhdHMuanNvblwiICAgLS0gbXktaGF0cy5qc29uXG4gICAgZG93bmxvYWQgXCJzbmFrZXMuanNvblwiICAgIC0tIHNuYWtlcy5qc29uXG5cblRoZSBlbXB0eSBgU3RyaW5nYCBzYXlzIHRvIGp1c3QgbmFtZSBpdCB3aGF0ZXZlciBpdCB3YXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXG4tfVxuZG93bmxvYWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZG93bmxvYWQgZmlsZU5hbWUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCIgZmlsZU5hbWVcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgY2xpY2tpbmcgYW4gYGFgIGFuZCBgYXJlYWAgd2lsbCBkb3dubG9hZCB0aGUgcmVzb3VyY2VcbmRpcmVjdGx5LCBhbmQgdGhhdCB0aGUgZG93bmxvYWRlZCByZXNvdXJjZSB3aXRoIGhhdmUgdGhlIGdpdmVuIGZpbGVuYW1lLlxuU28gYGRvd25sb2FkQXMgXCJoYXRzLmpzb25cImAgbWVhbnMgdGhlIHBlcnNvbiBnZXRzIGEgZmlsZSBuYW1lZCBgaGF0cy5qc29uYC5cbi19XG5kb3dubG9hZEFzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRvd25sb2FkQXMgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCJcblxuXG57LXwgVHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2Ugb2YgYW4gYGFgLCBgYXJlYWAsIG9yIGBsaW5rYC5cbi19XG5ocmVmbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5ocmVmbGFuZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaHJlZmxhbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgYSBoaW50IG9mIHRoZSB0YXJnZXQgbWVkaWEgb2YgYSBgYWAsIGBhcmVhYCwgYGxpbmtgLCBgc291cmNlYCxcbm9yIGBzdHlsZWAuXG4tfVxubWVkaWEgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWVkaWEgPVxuICBhdHRyaWJ1dGUgXCJtZWRpYVwiXG5cblxuey18IFNwZWNpZnkgYSBVUkwgdG8gc2VuZCBhIHNob3J0IFBPU1QgcmVxdWVzdCB0byB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhblxuYGFgIG9yIGBhcmVhYC4gVXNlZnVsIGZvciBtb25pdG9yaW5nIGFuZCB0cmFja2luZy5cbi19XG5waW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBpbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBpbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIHJlbGF0aW9uc2hpcCBvZiB0aGUgdGFyZ2V0IG9iamVjdCB0byB0aGUgbGluayBvYmplY3QuXG5Gb3IgYGFgLCBgYXJlYWAsIGBsaW5rYC5cbi19XG5yZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucmVsID1cbiAgYXR0cmlidXRlIFwicmVsXCJcblxuXG5cbi0tIENSQVpZIFNUVUZGXG5cblxuey18IEluZGljYXRlcyB0aGUgZGF0ZSBhbmQgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnQuXG5Gb3IgYGRlbGAsIGBpbnNgLCBgdGltZWAuXG4tfVxuZGF0ZXRpbWUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGF0ZXRpbWUgPVxuICBhdHRyaWJ1dGUgXCJkYXRldGltZVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZGF0ZSBhbmQgdGltZSBpcyB0aGUgZGF0ZSBvZiB0aGUgbmVhcmVzdCBgYXJ0aWNsZWBcbmFuY2VzdG9yIGVsZW1lbnQuIEZvciBgdGltZWAuXG4tfVxucHViZGF0ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wdWJkYXRlID1cbiAgYXR0cmlidXRlIFwicHViZGF0ZVwiXG5cblxuXG4tLSBPUkRFUkVEIExJU1RTXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGFuIG9yZGVyZWQgbGlzdCBgb2xgIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkZXNjZW5kaW5nXG5vcmRlciBpbnN0ZWFkIG9mIGEgYXNjZW5kaW5nLlxuLX1cbnJldmVyc2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZXZlcnNlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcInJldmVyc2VkXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgZmlyc3QgbnVtYmVyIG9mIGFuIG9yZGVyZWQgbGlzdCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzb21ldGhpbmdcbmJlc2lkZXMgMS5cbi19XG5zdGFydCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5zdGFydCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGFydFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gVEFCTEVTXG5cblxuey18IFRoZSBjb2xzcGFuIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGNlbGwgc2hvdWxkIHNwYW4uXG5Gb3IgYHRkYCBhbmQgYHRoYC5cbi19XG5jb2xzcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbmNvbHNwYW4gbiA9XG4gIGF0dHJpYnV0ZSBcImNvbHNwYW5cIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBlbGVtZW50IElEcyBpbmRpY2F0aW5nIHdoaWNoIGB0aGAgZWxlbWVudHMgYXJlXG5oZWFkZXJzIGZvciB0aGlzIGNlbGwuIEZvciBgdGRgIGFuZCBgdGhgLlxuLX1cbmhlYWRlcnMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaGVhZGVycyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaGVhZGVyc1wiXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiByb3dzIGEgdGFibGUgY2VsbCBzaG91bGQgc3BhbiBvdmVyLlxuRm9yIGB0ZGAgYW5kIGB0aGAuXG4tfVxucm93c3BhbiA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5yb3dzcGFuIG4gPVxuICBhdHRyaWJ1dGUgXCJyb3dzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IFNwZWNpZmllcyB0aGUgc2NvcGUgb2YgYSBoZWFkZXIgY2VsbCBgdGhgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBjb2wsIHJvdyxcbmNvbGdyb3VwLCByb3dncm91cC5cbi19XG5zY29wZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zY29wZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2NvcGVcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIFVSTCBvZiB0aGUgY2FjaGUgbWFuaWZlc3QgZm9yIGFuIGBodG1sYCB0YWcuIC19XG5tYW5pZmVzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tYW5pZmVzdCA9XG4gIGF0dHJpYnV0ZSBcIm1hbmlmZXN0XCJcblxuXG57LS0gVE9ETzogbWF5YmUgcmVpbnRyb2R1Y2Ugb25jZSB0aGVyZSdzIGEgYmV0dGVyIHdheSB0byBkaXNhbWJpZ3VhdGUgaW1wb3J0c1xuey18IFRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGBjb2xgIG9yIGBjb2xncm91cGAgc2hvdWxkIHNwYW4uIC19XG5zcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNwYW4gbiA9XG4gICAgc3RyaW5nUHJvcGVydHkgXCJzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG4tLX1cbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLkV2ZW50cyBleHBvc2luZ1xuICAoIG9uQ2xpY2ssIG9uRG91YmxlQ2xpY2tcbiAgLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwXG4gICwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmVcbiAgLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dFxuICAsIG9uSW5wdXQsIG9uQ2hlY2ssIG9uU3VibWl0XG4gICwgb25CbHVyLCBvbkZvY3VzXG4gICwgb24sIHN0b3BQcm9wYWdhdGlvbk9uLCBwcmV2ZW50RGVmYXVsdE9uLCBjdXN0b21cbiAgLCB0YXJnZXRWYWx1ZSwgdGFyZ2V0Q2hlY2tlZCwga2V5Q29kZVxuICApXG5cbnstfCBJdCBpcyBvZnRlbiBoZWxwZnVsIHRvIGNyZWF0ZSBhbiBbQ3VzdG9tIFR5cGVdW10gc28geW91IGNhbiBoYXZlIG1hbnkgZGlmZmVyZW50IGtpbmRzXG5vZiBldmVudHMgYXMgc2VlbiBpbiB0aGUgW1RvZG9NVkNdW10gZXhhbXBsZS5cblxuW0N1c3RvbSBUeXBlXTogaHR0cHM6Ly9ncmVuLWxhbmcub3JnL2Jvb2svc3ludGF4L2N1c3RvbV90eXBlcy5odG1sXG5bVG9kb01WQ106IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVuLWxhbmcvZXhhbXBsZS1wcm9qZWN0cy90cmVlL21haW4vdG9kb19tdmMgXG5cbiMjIE1vdXNlXG5AZG9jcyBvbkNsaWNrLCBvbkRvdWJsZUNsaWNrLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXRcblxuIyMgRm9ybXNcbkBkb2NzIG9uSW5wdXQsIG9uQ2hlY2ssIG9uU3VibWl0XG5cbiMjIEZvY3VzXG5AZG9jcyBvbkJsdXIsIG9uRm9jdXNcblxuIyMgQ3VzdG9tXG5AZG9jcyBvbiwgc3RvcFByb3BhZ2F0aW9uT24sIHByZXZlbnREZWZhdWx0T24sIGN1c3RvbVxuXG4jIyBDdXN0b20gRGVjb2RlcnNcbkBkb2NzIHRhcmdldFZhbHVlLCB0YXJnZXRDaGVja2VkLCBrZXlDb2RlXG4tfVxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuXG4tLSBNT1VTRSBFVkVOVFNcblxuXG57LXwtfVxub25DbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkNsaWNrIG1zZyA9XG4gIG9uIFwiY2xpY2tcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Eb3VibGVDbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkRvdWJsZUNsaWNrIG1zZyA9XG4gIG9uIFwiZGJsY2xpY2tcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZURvd24gOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZURvd24gbXNnID1cbiAgb24gXCJtb3VzZWRvd25cIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZVVwIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VVcCBtc2cgPVxuICBvbiBcIm1vdXNldXBcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZUVudGVyIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VFbnRlciBtc2cgPVxuICBvbiBcIm1vdXNlZW50ZXJcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZUxlYXZlIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VMZWF2ZSBtc2cgPVxuICBvbiBcIm1vdXNlbGVhdmVcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZU92ZXIgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZU92ZXIgbXNnID1cbiAgb24gXCJtb3VzZW92ZXJcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZU91dCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlT3V0IG1zZyA9XG4gIG9uIFwibW91c2VvdXRcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG5cbi0tIEZPUk0gRVZFTlRTXG5cblxuey18IERldGVjdCBbaW5wdXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9pbnB1dClcbmV2ZW50cyBmb3IgdGhpbmdzIGxpa2UgdGV4dCBmaWVsZHMgb3IgdGV4dCBhcmVhcy5cblxuRm9yIG1vcmUgZGV0YWlscyBvbiBob3cgYG9uSW5wdXRgIHdvcmtzLCBjaGVjayBvdXQgW2B0YXJnZXRWYWx1ZWBdKCN0YXJnZXRWYWx1ZSkuXG5cbioqTm90ZSAxOioqIEl0IGdyYWJzIHRoZSAqKnN0cmluZyoqIHZhbHVlIGF0IGBldmVudC50YXJnZXQudmFsdWVgLCBzbyBpdCB3aWxsXG5ub3Qgd29yayBpZiB5b3UgbmVlZCBzb21lIG90aGVyIGluZm9ybWF0aW9uLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gdHJhY2tcbmlucHV0cyBvbiBhIHJhbmdlIHNsaWRlciwgbWFrZSBhIGN1c3RvbSBoYW5kbGVyIHdpdGggW2BvbmBdKCNvbikuXG5cbioqTm90ZSAyOioqIEl0IHVzZXMgYHN0b3BQcm9wYWdhdGlvbk9uYCBpbnRlcm5hbGx5IHRvIGFsd2F5cyBzdG9wIHByb3BhZ2F0aW9uXG5vZiB0aGUgZXZlbnQuIFRoaXMgaXMgaW1wb3J0YW50IGZvciBjb21wbGljYXRlZCByZWFzb25zIGV4cGxhaW5lZCBbaGVyZV1bMV0gYW5kXG5baGVyZV1bMl0uXG5cblsxXTogL3BhY2thZ2VzL2VsbS92aXJ0dWFsLWRvbS9sYXRlc3QvVmlydHVhbERvbSNIYW5kbGVyXG5bMl06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vaXNzdWVzLzEyNVxuLX1cbm9uSW5wdXQgOiAoU3RyaW5nIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xub25JbnB1dCB0YWdnZXIgPVxuICBzdG9wUHJvcGFnYXRpb25PbiBcImlucHV0XCIgKEpzb24ubWFwIGFsd2F5c1N0b3AgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRWYWx1ZSkpXG5cblxuYWx3YXlzU3RvcCA6IG1zZyAtPiB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfVxuYWx3YXlzU3RvcCBtc2cgPVxuICB7IG1lc3NhZ2UgPSBtc2cgXG4gICwgc3RvcFByb3BhZ2F0aW9uID0gVHJ1ZVxuICB9XG5cblxuey18IERldGVjdCBbY2hhbmdlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2hhbmdlKVxuZXZlbnRzIG9uIGNoZWNrYm94ZXMuIEl0IHdpbGwgZ3JhYiB0aGUgYm9vbGVhbiB2YWx1ZSBmcm9tIGBldmVudC50YXJnZXQuY2hlY2tlZGBcbm9uIGFueSBpbnB1dCBldmVudC5cblxuQ2hlY2sgb3V0IFtgdGFyZ2V0Q2hlY2tlZGBdKCN0YXJnZXRDaGVja2VkKSBmb3IgbW9yZSBkZXRhaWxzIG9uIGhvdyB0aGlzIHdvcmtzLlxuLX1cbm9uQ2hlY2sgOiAoQm9vbCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbm9uQ2hlY2sgdGFnZ2VyID1cbiAgb24gXCJjaGFuZ2VcIiAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldENoZWNrZWQpXG5cblxuey18IERldGVjdCBhIFtzdWJtaXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9zdWJtaXQpXG5ldmVudCB3aXRoIFtgcHJldmVudERlZmF1bHRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHQpXG5pbiBvcmRlciB0byBwcmV2ZW50IHRoZSBmb3JtIGZyb20gY2hhbmdpbmcgdGhlIHBhZ2XigJlzIGxvY2F0aW9uLiBJZiB5b3UgbmVlZFxuZGlmZmVyZW50IGJlaGF2aW9yLCBjcmVhdGUgYSBjdXN0b20gZXZlbnQgaGFuZGxlci5cbi19XG5vblN1Ym1pdCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vblN1Ym1pdCBtc2cgPVxuICBwcmV2ZW50RGVmYXVsdE9uIFwic3VibWl0XCIgKEpzb24ubWFwIGFsd2F5c1ByZXZlbnREZWZhdWx0IChKc29uLnN1Y2NlZWQgbXNnKSlcblxuXG5hbHdheXNQcmV2ZW50RGVmYXVsdCA6IG1zZyAtPiB7IG1lc3NhZ2UgOiBtc2csIHByZXZlbnREZWZhdWx0IDogQm9vbCB9XG5hbHdheXNQcmV2ZW50RGVmYXVsdCBtc2cgPVxuICB7IG1lc3NhZ2UgPSBtc2dcbiAgLCBwcmV2ZW50RGVmYXVsdCA9IFRydWVcbiAgfVxuXG5cblxuLS0gRk9DVVMgRVZFTlRTXG5cblxuey18LX1cbm9uQmx1ciA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkJsdXIgbXNnID1cbiAgb24gXCJibHVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uRm9jdXMgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Gb2N1cyBtc2cgPVxuICBvbiBcImZvY3VzXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuXG4tLSBDVVNUT00gRVZFTlRTXG5cblxuey18IENyZWF0ZSBhIGN1c3RvbSBldmVudCBsaXN0ZW5lci4gTm9ybWFsbHkgdGhpcyB3aWxsIG5vdCBiZSBuZWNlc3NhcnksIGJ1dFxueW91IGhhdmUgdGhlIHBvd2VyISBIZXJlIGlzIGhvdyBgb25DbGlja2AgaXMgZGVmaW5lZCBmb3IgZXhhbXBsZTpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIG9uQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uQ2xpY2sgbWVzc2FnZSA9XG4gICAgICBvbiBcImNsaWNrXCIgKERlY29kZS5zdWNjZWVkIG1lc3NhZ2UpXG5cblRoZSBmaXJzdCBhcmd1bWVudCBpcyB0aGUgZXZlbnQgbmFtZSBpbiB0aGUgc2FtZSBmb3JtYXQgYXMgd2l0aCBKYXZhU2NyaXB0J3NcbltgYWRkRXZlbnRMaXN0ZW5lcmBdW2FFTF0gZnVuY3Rpb24uXG5cblRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYSBKU09OIGRlY29kZXIuIFJlYWQgbW9yZSBhYm91dCB0aGVzZSBbaGVyZV1bZGVjb2Rlcl0uXG5XaGVuIGFuIGV2ZW50IG9jY3VycywgdGhlIGRlY29kZXIgdHJpZXMgdG8gdHVybiB0aGUgZXZlbnQgb2JqZWN0IGludG8gYW4gR3JlblxudmFsdWUuIElmIHN1Y2Nlc3NmdWwsIHRoZSB2YWx1ZSBpcyByb3V0ZWQgdG8geW91ciBgdXBkYXRlYCBmdW5jdGlvbi4gSW4gdGhlXG5jYXNlIG9mIGBvbkNsaWNrYCB3ZSBhbHdheXMganVzdCBzdWNjZWVkIHdpdGggdGhlIGdpdmVuIGBtZXNzYWdlYC5cblxuSWYgdGhpcyBpcyBjb25mdXNpbmcsIHdvcmsgdGhyb3VnaCB0aGUgW0VsbSBBcmNoaXRlY3R1cmUgVHV0b3JpYWxdW3R1dG9yaWFsXS5cbkl0IHJlYWxseSBoZWxwcyFcblxuW2FFTF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyXG5bZGVjb2Rlcl06IC9wYWNrYWdlcy9lbG0vanNvbi9sYXRlc3QvSnNvbi1EZWNvZGVcblt0dXRvcmlhbF06IGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLWFyY2hpdGVjdHVyZS10dXRvcmlhbC9cblxuKipOb3RlOioqIFRoaXMgY3JlYXRlcyBhIFtwYXNzaXZlXVtdIGV2ZW50IGxpc3RlbmVyLCBlbmFibGluZyBvcHRpbWl6YXRpb25zIGZvclxudG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lIGJyb3dzZXJzLlxuXG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxub24gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbiBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5Ob3JtYWwgZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgc3RvcFByb3BhZ2F0aW9uYF1bc3RvcF0uIFlvdXIgZGVjb2RlclxubXVzdCBwcm9kdWNlIGEgbWVzc2FnZSBhbmQgYSBgQm9vbGAgdGhhdCBkZWNpZGVzIGlmIGBzdG9wUHJvcGFnYXRpb25gIHNob3VsZFxuYmUgY2FsbGVkLlxuXG5bc3RvcF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9zdG9wUHJvcGFnYXRpb25cblxuKipOb3RlOioqIFRoaXMgY3JlYXRlcyBhIFtwYXNzaXZlXVtdIGV2ZW50IGxpc3RlbmVyLCBlbmFibGluZyBvcHRpbWl6YXRpb25zIGZvclxudG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lIGJyb3dzZXJzLlxuXG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxuc3RvcFByb3BhZ2F0aW9uT24gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbnN0b3BQcm9wYWdhdGlvbk9uIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLk1heVN0b3BQcm9wYWdhdGlvbiBkZWNvZGVyKVxuXG5cbnstfCBDcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBtYXkgW2BwcmV2ZW50RGVmYXVsdGBdW3ByZXZlbnRdLiBZb3VyIGRlY29kZXJcbm11c3QgcHJvZHVjZSBhIG1lc3NhZ2UgYW5kIGEgYEJvb2xgIHRoYXQgZGVjaWRlcyBpZiBgcHJldmVudERlZmF1bHRgIHNob3VsZFxuYmUgY2FsbGVkLlxuXG5Gb3IgZXhhbXBsZSwgdGhlIGBvblN1Ym1pdGAgZnVuY3Rpb24gaW4gdGhpcyBsaWJyYXJ5ICphbHdheXMqIHByZXZlbnRzIHRoZVxuZGVmYXVsdCBiZWhhdmlvcjpcblxuW3ByZXZlbnRdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHRcblxuICAgIG9uU3VibWl0IDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvblN1Ym1pdCBtc2cgPVxuICAgICAgcHJldmVudERlZmF1bHRPbiBcInN1Ym1pdFwiIChKc29uLm1hcCBhbHdheXNQcmV2ZW50RGVmYXVsdCAoSnNvbi5zdWNjZWVkIG1zZykpXG5cbiAgICBhbHdheXNQcmV2ZW50RGVmYXVsdCA6IG1zZyAtPiAoIG1zZywgQm9vbCApXG4gICAgYWx3YXlzUHJldmVudERlZmF1bHQgbXNnID1cbiAgICAgICggbXNnLCBUcnVlIClcbi19XG5wcmV2ZW50RGVmYXVsdE9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHByZXZlbnREZWZhdWx0IDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbnByZXZlbnREZWZhdWx0T24gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uTWF5UHJldmVudERlZmF1bHQgZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgc3RvcFByb3BhZ2F0aW9uYF1bc3RvcF0gb3JcbltgcHJldmVudERlZmF1bHRgXVtwcmV2ZW50XS5cblxuW3N0b3BdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvc3RvcFByb3BhZ2F0aW9uXG5bcHJldmVudF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9wcmV2ZW50RGVmYXVsdFxuW2hhbmRsZXJdOiBodHRwczovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2VsbS92aXJ0dWFsLWRvbS9sYXRlc3QvVmlydHVhbERvbSNIYW5kbGVyXG5cbioqTm90ZToqKiBDaGVjayBvdXQgdGhlIGxvd2VyLWxldmVsIGV2ZW50IEFQSSBpbiBgZWxtL3ZpcnR1YWwtZG9tYCBmb3IgbW9yZVxuaW5mb3JtYXRpb24gb24gZXhhY3RseSBob3cgZXZlbnRzIHdvcmssIGVzcGVjaWFsbHkgdGhlIFtgSGFuZGxlcmBdW2hhbmRsZXJdXG5kb2NzLlxuLX1cbmN1c3RvbSA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5jdXN0b20gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uQ3VzdG9tIGRlY29kZXIpXG5cblxuXG4tLSBDT01NT04gREVDT0RFUlNcblxuXG57LXwgQSBgSnNvbi5EZWNvZGVyYCBmb3IgZ3JhYmJpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAuIFdlIHVzZSB0aGlzIHRvIGRlZmluZVxuYG9uSW5wdXRgIGFzIGZvbGxvd3M6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25JbnB1dCA6IChTdHJpbmcgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25JbnB1dCB0YWdnZXIgPVxuICAgICAgc3RvcFByb3BhZ2F0aW9uT24gXCJpbnB1dFwiIDx8XG4gICAgICAgIEpzb24ubWFwIGFsd2F5c1N0b3AgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRWYWx1ZSlcblxuICAgIGFsd2F5c1N0b3AgOiBhIC0+IChhLCBCb29sKVxuICAgIGFsd2F5c1N0b3AgeCA9XG4gICAgICAoeCwgVHJ1ZSlcblxuWW91IHByb2JhYmx5IHdpbGwgbmV2ZXIgbmVlZCB0aGlzLCBidXQgaG9wZWZ1bGx5IGl0IGdpdmVzIHNvbWUgaW5zaWdodHMgaW50b1xuaG93IHRvIG1ha2UgY3VzdG9tIGV2ZW50IGhhbmRsZXJzLlxuLX1cbnRhcmdldFZhbHVlIDogSnNvbi5EZWNvZGVyIFN0cmluZ1xudGFyZ2V0VmFsdWUgPVxuICBKc29uLmF0IFtcInRhcmdldFwiLCBcInZhbHVlXCJdIEpzb24uc3RyaW5nXG5cblxuey18IEEgYEpzb24uRGVjb2RlcmAgZm9yIGdyYWJiaW5nIGBldmVudC50YXJnZXQuY2hlY2tlZGAuIFdlIHVzZSB0aGlzIHRvIGRlZmluZVxuYG9uQ2hlY2tgIGFzIGZvbGxvd3M6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25DaGVjayA6IChCb29sIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uQ2hlY2sgdGFnZ2VyID1cbiAgICAgIG9uIFwiaW5wdXRcIiAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldENoZWNrZWQpXG4tfVxudGFyZ2V0Q2hlY2tlZCA6IEpzb24uRGVjb2RlciBCb29sXG50YXJnZXRDaGVja2VkID1cbiAgSnNvbi5hdCBbXCJ0YXJnZXRcIiwgXCJjaGVja2VkXCJdIEpzb24uYm9vbFxuXG5cbnstfCBBIGBKc29uLkRlY29kZXJgIGZvciBncmFiYmluZyBgZXZlbnQua2V5Q29kZWAuIFRoaXMgaGVscHMgeW91IGRlZmluZVxua2V5Ym9hcmQgbGlzdGVuZXJzIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5cbiAgICBvbktleVVwIDogKEludCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbktleVVwIHRhZ2dlciA9XG4gICAgICBvbiBcImtleXVwXCIgKEpzb24ubWFwIHRhZ2dlciBrZXlDb2RlKVxuXG4qKk5vdGU6KiogSXQgbG9va3MgbGlrZSB0aGUgc3BlYyBpcyBtb3ZpbmcgYXdheSBmcm9tIGBldmVudC5rZXlDb2RlYCBhbmRcbnRvd2FyZHMgYGV2ZW50LmtleWAuIE9uY2UgdGhpcyBpcyBzdXBwb3J0ZWQgaW4gbW9yZSBicm93c2Vycywgd2UgbWF5IGFkZFxuaGVscGVycyBoZXJlIGZvciBgb25LZXlVcGAsIGBvbktleURvd25gLCBgb25LZXlQcmVzc2AsIGV0Yy5cbi19XG5rZXlDb2RlIDogSnNvbi5EZWNvZGVyIEludFxua2V5Q29kZSA9XG4gIEpzb24uZmllbGQgXCJrZXlDb2RlXCIgSnNvbi5pbnRcbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLkF0dHJpYnV0ZXMuQXJpYSBleHBvc2luZ1xuICAgICggcm9sZVxuICAgICwgYWN0aXZlRGVzY2VuZGFudFxuICAgICwgY2hlY2tlZFxuICAgICwgY29udHJvbHNcbiAgICAsIGRlc2NyaWJlZGJ5XG4gICAgLCBkaXNhYmxlZFxuICAgICwgZXhwYW5kZWRcbiAgICAsIGhhc1BvcHVwXG4gICAgLCBoaWRkZW5cbiAgICAsIGxhYmVsXG4gICAgLCBsYWJlbGxlZGJ5XG4gICAgLCBsaXZlXG4gICAgLCBwcmVzc2VkXG4gICAgLCByZWFkb25seVxuICAgICwgcmVxdWlyZWRcbiAgICAsIHNlbGVjdGVkXG4gICAgLCBzb3J0XG4gICAgLCB2YWx1ZU1heFxuICAgICwgdmFsdWVNaW5cbiAgICAsIHZhbHVlTm93XG4gICAgKVxuXG57LXwgQWRkaXRpb25hbCBhdHRyaWJ1dGVzIGZvciBodG1sXG5cblxuIyBBcmlhIHJvbGVcblxuQGRvY3Mgcm9sZVxuXG5cbiMgQXJpYSBBdHRyaWJ1dGVzXG5cbkBkb2NzIGFjdGl2ZURlc2NlbmRhbnRcbkBkb2NzIGNoZWNrZWRcbkBkb2NzIGNvbnRyb2xzXG5AZG9jcyBkZXNjcmliZWRieVxuQGRvY3MgZGlzYWJsZWRcbkBkb2NzIGV4cGFuZGVkXG5AZG9jcyBoYXNQb3B1cFxuQGRvY3MgaGlkZGVuXG5AZG9jcyBsYWJlbFxuQGRvY3MgbGFiZWxsZWRieVxuQGRvY3MgbGl2ZVxuQGRvY3MgcHJlc3NlZFxuQGRvY3MgcmVhZG9ubHlcbkBkb2NzIHJlcXVpcmVkXG5AZG9jcyBzZWxlY3RlZFxuQGRvY3Mgc29ydFxuQGRvY3MgdmFsdWVNYXhcbkBkb2NzIHZhbHVlTWluXG5AZG9jcyB2YWx1ZU5vd1xuXG4tfVxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoYXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpFXG5cblxuYm9vbEF0dHJpYnV0ZSA6IFN0cmluZyAtPiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmJvb2xBdHRyaWJ1dGUgbmFtZSB2YWwgPVxuICAgIGF0dHJpYnV0ZSBuYW1lIChKRS5lbmNvZGUgMCA8fCBKRS5ib29sIHZhbClcblxuXG5mbG9hdEF0dHJpYnV0ZSA6IFN0cmluZyAtPiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG5mbG9hdEF0dHJpYnV0ZSBuYW1lIHZhbCA9XG4gICAgYXR0cmlidXRlIG5hbWUgKFN0cmluZy5mcm9tRmxvYXQgdmFsKVxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBjdXJyZW50bHkgYWN0aXZlIGRlc2NlbmRhbnQgb2YgYSBjb21wb3NpdGUgd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtYWN0aXZlZGVzY2VuZGFudCkuXG5cbiAgICBkaXYgWyBhY3RpdmVEZXNjZW5kYW50IFwiaWRcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuYWN0aXZlRGVzY2VuZGFudCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY3RpdmVEZXNjZW5kYW50ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJjaGVja2VkXCIgc3RhdGUgb2YgY2hlY2tib3hlcywgcmFkaW8gYnV0dG9ucywgYW5kIG90aGVyIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1jaGVja2VkKS5cblxuICAgIGRpdiBbIGNoZWNrZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmNoZWNrZWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2hlY2tlZCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1jaGVja2VkXCJcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHdob3NlIGNvbnRlbnRzIG9yIHByZXNlbmNlIGFyZSBjb250cm9sbGVkIGJ5IHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1jb250cm9scykuXG5cbiAgICBkaXYgWyBjb250cm9scyBcImRyb3Bkb3duLW1lbnVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuY29udHJvbHMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY29udHJvbHMgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtY29udHJvbHNcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBkZXNjcmliZXMgdGhlIG9iamVjdC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWRlc2NyaWJlZGJ5KS5cblxuICAgIGRpdiBbIGRlc2NyaWJlZGJ5IFwiaWRcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuZGVzY3JpYmVkYnkgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGVzY3JpYmVkYnkgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtZGVzY3JpYmVkYnlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBpcyBwZXJjZWl2YWJsZSBidXQgZGlzYWJsZWQsIHNvIGl0IGlzIG5vdCBlZGl0YWJsZSBvciBvdGhlcndpc2Ugb3BlcmFibGUuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1kaXNhYmxlZCkuXG5cbiAgICBkaXYgWyBkaXNhYmxlZCBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5kaXNhYmxlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGlzYWJsZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLWRpc2FibGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQsIG9yIGFub3RoZXIgZ3JvdXBpbmcgZWxlbWVudCBpdCBjb250cm9scywgaXMgY3VycmVudGx5IGV4cGFuZGVkIG9yIGNvbGxhcHNlZC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWV4cGFuZGVkKS5cblxuICAgIGRpdiBbIGV4cGFuZGVkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5leHBhbmRlZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5leHBhbmRlZCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1leHBhbmRlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgYXZhaWxhYmlsaXR5IGFuZCB0eXBlIG9mIGludGVyYWN0aXZlIHBvcHVwIGVsZW1lbnQsIHN1Y2ggYXMgbWVudSBvciBkaWFsb2csIHRoYXQgY2FuIGJlIHRyaWdnZXJlZCBieSBhbiBlbGVtZW50LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtaGFzcG9wdXApLlxuXG4gICAgZGl2IFsgaGFzUG9wdXAgXCJtZW51XCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmhhc1BvcHVwIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmhhc1BvcHVwID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWhhc3BvcHVwXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgYW5kIGFsbCBvZiBpdHMgZGVzY2VuZGFudHMgYXJlIG5vdCB2aXNpYmxlIG9yIHBlcmNlaXZhYmxlIHRvIGFueSB1c2VyIGFzIGltcGxlbWVudGVkIGJ5IHRoZSBhdXRob3IuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1oaWRkZW4pLlxuXG4gICAgZGl2IFsgaGlkZGVuIFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmhpZGRlbiA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuaGlkZGVuID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1oaWRkZW5cIlxuXG5cbnstfCBEZWZpbmVzIGEgc3RyaW5nIHZhbHVlIHRoYXQgbGFiZWxzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1sYWJlbCkuXG5cbiAgICBkaXYgWyBsYWJlbCBcImxhYmVsXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmxhYmVsIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhYmVsID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWxhYmVsXCJcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHRoYXQgbGFiZWxzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1sYWJlbGxlZGJ5KS5cblxuICAgIGRpdiBbIGxhYmVsbGVkYnkgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5sYWJlbGxlZGJ5IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhYmVsbGVkYnkgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtbGFiZWxsZWRieVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGFuIGVsZW1lbnQgd2lsbCBiZSB1cGRhdGVkLCBhbmQgZGVzY3JpYmVzIHRoZSB0eXBlcyBvZiB1cGRhdGVzIHRoZSB1c2VyIGFnZW50cyxcbmFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGFuZCB1c2VyIGNhbiBleHBlY3QgZnJvbSB0aGUgbGl2ZSByZWdpb24uXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1saXZlKS5cblxuICAgIGlucHV0IFsgbGl2ZSBcImFzc2VydGl2ZVwiIF0gW11cblxuLX1cbmxpdmUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGl2ZSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1saXZlXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwicHJlc3NlZFwiIHN0YXRlIG9mIHRvZ2dsZSBidXR0b25zLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcHJlc3NlZCkuXG5cbiAgICBidXR0b24gWyBwcmVzc2VkIFRydWUgXSBbIHRleHQgXCJTdWJtaXRcIiBdXG5cbi19XG5wcmVzc2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5wcmVzc2VkID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1wcmVzc2VkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgaXMgbm90IGVkaXRhYmxlLCBidXQgaXMgb3RoZXJ3aXNlIG9wZXJhYmxlLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcmVhZG9ubHkpLlxuXG4gICAgZGl2IFsgcmVhZG9ubHkgVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxucmVhZG9ubHkgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlYWRvbmx5ID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1yZWFkb25seVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHVzZXIgaW5wdXQgaXMgcmVxdWlyZWQgb24gdGhlIGVsZW1lbnQgYmVmb3JlIGEgZm9ybSBtYXkgYmUgc3VibWl0dGVkLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcmVxdWlyZWQpLlxuXG4gICAgZGl2IFsgcmVxdWlyZWQgVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxucmVxdWlyZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlcXVpcmVkID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1yZXF1aXJlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcInNlbGVjdGVkXCIgc3RhdGUgb2YgdmFyaW91cyB3aWRnZXRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtc2VsZWN0ZWQpLlxuXG4gICAgZGl2IFsgc2VsZWN0ZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbnNlbGVjdGVkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNlbGVjdGVkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLXNlbGVjdGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwic2VsZWN0ZWRcIiBzdGF0ZSBvZiB2YXJpb3VzIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1zZWxlY3RlZCkuXG5cbiAgICBkaXYgWyBzZWxlY3RlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuc29ydCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zb3J0ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLXNvcnRcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUgZm9yIGEgcmFuZ2Ugd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtdmFsdWVtYXgpLlxuXG4gICAgZGl2IFsgdmFsdWVNYXggMTAsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTWF4IDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVNYXggPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW1heFwiXG5cblxuey18IERlZmluZXMgdGhlIG1pbmltdW0gYWxsb3dlZCB2YWx1ZSBmb3IgYSByYW5nZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS12YWx1ZW1pbikuXG5cbiAgICBkaXYgWyB2YWx1ZU1pbiAxLCByb2xlIFwicHJvZ3Jlc3NiYXJcIiBdIFtdXG5cbi19XG52YWx1ZU1pbiA6IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbnZhbHVlTWluID1cbiAgICBmbG9hdEF0dHJpYnV0ZSBcImFyaWEtdmFsdWVtaW5cIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBjdXJyZW50IHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXZhbHVlbm93KS5cblxuICAgIGRpdiBbIHZhbHVlTm93IDQsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTm93IDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVOb3cgPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW5vd1wiXG5cblxuey18IEFuIGF0dHJpYnV0ZSB0byBzdXBwb3J0IHRoZSByb2xlIGNsYXNzaWZpY2F0aW9uIG9mIGVsZW1lbnRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9yb2xlLWF0dHJpYnV0ZSkuXG5cbiAgICBkaXYgWyByb2xlIFwiYnV0dG9uXCIgXSBbIHRleHQgXCJTdWJtaXRcIiBdXG5cbi19XG5yb2xlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnJvbGUgPVxuICAgIGF0dHJpYnV0ZSBcInJvbGVcIlxuIiwKICAgICAgICAibW9kdWxlIE1heWJlIGV4cG9zaW5nXG4gICAgKCBNYXliZSguLilcbiAgICAsIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBrZWVwSWZcbiAgICAsIHdpdGhEZWZhdWx0LCB3aXRoRGVmYXVsdExhenksIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuICAgICwgYW5kVGhlblxuICAgIClcblxuey18IFRoaXMgbGlicmFyeSBmaWxscyBhIGJ1bmNoIG9mIGltcG9ydGFudCBuaWNoZXMgaW4gR3Jlbi4gQSBgTWF5YmVgIGNhbiBoZWxwXG55b3Ugd2l0aCBvcHRpb25hbCBhcmd1bWVudHMsIGVycm9yIGhhbmRsaW5nLCBhbmQgcmVjb3JkcyB3aXRoIG9wdGlvbmFsIGZpZWxkcy5cblxuQGRvY3MgTWF5YmVcblxuXG4jIyBRdWVyaWVzXG5cbkBkb2NzIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBrZWVwSWZcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3Mgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1LCBhbmRUaGVuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuXG5cbnstfCBSZXByZXNlbnQgdmFsdWVzIHRoYXQgbWF5IG9yIG1heSBub3QgZXhpc3QuIEl0IGNhbiBiZSB1c2VmdWwgaWYgeW91IGhhdmUgYVxucmVjb3JkIGZpZWxkIHRoYXQgaXMgb25seSBmaWxsZWQgaW4gc29tZXRpbWVzLiBPciBpZiBhIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWVcbnNvbWV0aW1lcywgYnV0IGRvZXMgbm90IGFic29sdXRlbHkgbmVlZCBpdC5cblxuICAgIC0tIEEgcGVyc29uLCBidXQgbWF5YmUgd2UgZG8gbm90IGtub3cgdGhlaXIgYWdlLlxuICAgIHR5cGUgYWxpYXMgUGVyc29uID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nXG4gICAgICAgICwgYWdlIDogTWF5YmUgSW50XG4gICAgICAgIH1cblxuICAgIHRvbSA9XG4gICAgICAgIHsgbmFtZSA9IFwiVG9tXCIsIGFnZSA9IEp1c3QgNDIgfVxuXG4gICAgc3VlID1cbiAgICAgICAgeyBuYW1lID0gXCJTdWVcIiwgYWdlID0gTm90aGluZyB9XG5cbi19XG50eXBlIE1heWJlIGFcbiAgICA9IEp1c3QgYVxuICAgIHwgTm90aGluZ1xuXG5cbnstfCBDaGVja3MgdG8gc2VlIGlmIHRoZSBbTWF5YmVdKCNNYXliZSkgaXMgYEp1c3RgLCBhbmQgdGhhdCB0aGUgY29udGFpbmVkIHZhbHVlXG5lcXVhbHMgYSBwcm92aWRlZCBjb25zdGFudC5cblxuICAgIGhhc1ZhbHVlIDUgKEp1c3QgNSkgPT0gVHJ1ZVxuXG4gICAgaGFzVmFsdWUgNSAoSnVzdCAzKSA9PSBGYWxzZVxuXG4gICAgaGFzVmFsdWUgNSBOb3RoaW5nID09IEZhbHNlXG5cbi19XG5oYXNWYWx1ZSA6IGEgLT4gTWF5YmUgYSAtPiBCb29sXG5oYXNWYWx1ZSB2YWx1ZSBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IGNvbnRhaW5lZCAtPlxuICAgICAgICAgICAgY29udGFpbmVkID09IHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgQ2hlY2tzIHRvIHNlZSBpZiB0aGUgW01heWJlXSgjTWF5YmUpIGlzIGBKdXN0YCwgYW5kIHRoYXQgdGhlIGNvbnRhaW5lZCB2YWx1ZVxucGFzc2VzIHRoZSBwcm92aWRlZCB0ZXN0LlxuXG4gICAgY2hlY2tWYWx1ZSBpc09kZCAoSnVzdCA1KSA9PSBUcnVlXG5cbiAgICBjaGVja1ZhbHVlIGlzT2RkIChKdXN0IDIpID09IEZhbHNlXG5cbiAgICBjaGVja1ZhbHVlIGlzT2RkIE5vdGhpbmcgPT0gRmFsc2VcblxuLX1cbmNoZWNrVmFsdWUgOiAoYSAtPiBCb29sKSAtPiBNYXliZSBhIC0+IEJvb2xcbmNoZWNrVmFsdWUgdGVzdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IGNvbnRhaW5lZCAtPlxuICAgICAgICAgICAgdGVzdCBjb250YWluZWRcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBQcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSwgdHVybmluZyBhbiBvcHRpb25hbCB2YWx1ZSBpbnRvIGEgbm9ybWFsXG52YWx1ZS4gVGhpcyBjb21lcyBpbiBoYW5keSB3aGVuIHBhaXJlZCB3aXRoIGZ1bmN0aW9ucyBsaWtlXG5bYERpY3QuZ2V0YF0oRGljdCNnZXQpIHdoaWNoIGdpdmVzIGJhY2sgYSBgTWF5YmVgLlxuXG4gICAgd2l0aERlZmF1bHQgMTAwIChKdXN0IDQyKSA9PSA0MlxuICAgIFxuICAgIHdpdGhEZWZhdWx0IDEwMCBOb3RoaW5nID09IDEwMFxuICAgIFxuICAgIHdpdGhEZWZhdWx0IFwidW5rbm93blwiIChEaWN0LmdldCBcIlRvbVwiIERpY3QuZW1wdHkpID09IFwidW5rbm93blwiXG5cbi19XG53aXRoRGVmYXVsdCA6IGEgLT4gTWF5YmUgYSAtPiBhXG53aXRoRGVmYXVsdCBkZWZhdWx0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGVmYXVsdFxuXG5cbnstfCBTYW1lIGFzIFt3aXRoRGVmYXVsdF0oI3dpdGhEZWZhdWx0KSBidXQgdGhlIGRlZmF1bHQgdmFsdWUgaXMgd3JhcHBlZCBpblxuYSBmdW5jdGlvbi4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjb21wdXRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaXMgZXhwZW5zaXZlLCBhc1xueW91IGNhbiBjb21wdXRlIGl0IG9ubHkgd2hlbiBpdCBpcyByZXF1aXJlZC5cblxuSW4gbW9zdCBjYXNlcyB5b3Ugc2hvdWxkIHVzZSBwYXR0ZXJuIG1hdGNoaW5nIG9yIFt3aXRoRGVmYXVsdF0oI3dpdGhEZWZhdWx0KSBpbnN0ZWFkLlxuXG4tfVxud2l0aERlZmF1bHRMYXp5IDogKHt9IC0+IGEpIC0+IE1heWJlIGEgLT4gYVxud2l0aERlZmF1bHRMYXp5IGRlZmF1bHQgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkZWZhdWx0IHt9XG5cblxuey18IFRyYW5zZm9ybSBhIGBNYXliZWAgdmFsdWUgd2l0aCBhIGdpdmVuIGZ1bmN0aW9uOlxuXG4gICAgbWFwIHNxcnQgKEp1c3QgOSkgPT0gSnVzdCAzXG5cbiAgICBtYXAgc3FydCBOb3RoaW5nID09IE5vdGhpbmdcblxuICAgIG1hcCBzcXJ0IChTdHJpbmcudG9GbG9hdCBcIjlcIikgPT0gSnVzdCAzXG5cbiAgICBtYXAgc3FydCAoU3RyaW5nLnRvRmxvYXQgXCJ4XCIpID09IE5vdGhpbmdcblxuLX1cbm1hcCA6IChhIC0+IGIpIC0+IE1heWJlIGEgLT4gTWF5YmUgYlxubWFwIGYgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgSnVzdCAoZiB2YWx1ZSlcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gaWYgYWxsIHRoZSBhcmd1bWVudHMgYXJlIGBKdXN0YCBhIHZhbHVlLlxuXG4gICAgbWFwMiAoKykgKEp1c3QgMykgKEp1c3QgNCkgPT0gSnVzdCA3XG5cbiAgICBtYXAyICgrKSAoSnVzdCAzKSBOb3RoaW5nID09IE5vdGhpbmdcblxuICAgIG1hcDIgKCspIE5vdGhpbmcgKEp1c3QgNCkgPT0gTm90aGluZ1xuXG4gICAgbWFwMiAoKykgKFN0cmluZy50b0ludCBcIjFcIikgKFN0cmluZy50b0ludCBcIjEyM1wiKSA9PSBKdXN0IDEyNFxuXG4gICAgbWFwMiAoKykgKFN0cmluZy50b0ludCBcInhcIikgKFN0cmluZy50b0ludCBcIjEyM1wiKSA9PSBOb3RoaW5nXG5cbiAgICBtYXAyICgrKSAoU3RyaW5nLnRvSW50IFwiMVwiKSAoU3RyaW5nLnRvSW50IFwiMS4zXCIpID09IE5vdGhpbmdcblxuLX1cbm1hcDIgOiAoYSAtPiBiIC0+IHZhbHVlKSAtPiBNYXliZSBhIC0+IE1heWJlIGIgLT4gTWF5YmUgdmFsdWVcbm1hcDIgZnVuYyBtYSBtYiA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIpXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHZhbHVlKSAtPiBNYXliZSBhIC0+IE1heWJlIGIgLT4gTWF5YmUgYyAtPiBNYXliZSB2YWx1ZVxubWFwMyBmdW5jIG1hIG1iIG1jID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIG1jIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYiBjKVxuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHZhbHVlKSAtPiBNYXliZSBhIC0+IE1heWJlIGIgLT4gTWF5YmUgYyAtPiBNYXliZSBkIC0+IE1heWJlIHZhbHVlXG5tYXA0IGZ1bmMgbWEgbWIgbWMgbWQgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbWMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIgYyBkKVxuXG5cbnstfCAtfVxubWFwNSA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSBjIC0+IE1heWJlIGQgLT4gTWF5YmUgZSAtPiBNYXliZSB2YWx1ZVxubWFwNSBmdW5jIG1hIG1iIG1jIG1kIG1lID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIG1jIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1kIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbWUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgZSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYiBjIGQgZSlcblxuXG57LXwgUmV0dXJucyBgTm90aGluZ2AgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBkb2Vzbid0IHBhc3MgdGhlIGdpdmVuXG50ZXN0LlxuXG4gICAga2VlcElmIGlzT2RkIChKdXN0IDUpID09IEp1c3QgNVxuXG4gICAga2VlcElmIGlzT2RkIChKdXN0IDIpID09IE5vdGhpbmdcblxuLX1cbmtlZXBJZiA6IChhIC0+IEJvb2wpIC0+IE1heWJlIGEgLT4gTWF5YmUgYVxua2VlcElmIHRlc3QgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBjb250YWluZWQgLT5cbiAgICAgICAgICAgIGlmIHRlc3QgY29udGFpbmVkIHRoZW5cbiAgICAgICAgICAgICAgICBtYXliZVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgbWFueSBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbC4gSXQgaXMgaGVscGZ1bCB0byBzZWUgaXRzXG5kZWZpbml0aW9uOlxuXG4gICAgYW5kVGhlbiA6IChhIC0+IE1heWJlIGIpIC0+IE1heWJlIGEgLT4gTWF5YmUgYlxuICAgIGFuZFRoZW4gY2FsbGJhY2sgbWF5YmUgPVxuICAgICAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuVGhpcyBtZWFucyB3ZSBvbmx5IGNvbnRpbnVlIHdpdGggdGhlIGNhbGxiYWNrIGlmIHRoaW5ncyBhcmUgZ29pbmcgd2VsbC4gRm9yXG5leGFtcGxlLCBzYXkgeW91IG5lZWQgdG8gcGFyc2Ugc29tZSB1c2VyIGlucHV0IGFzIGEgbW9udGg6XG5cbiAgICBwYXJzZU1vbnRoIDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIHBhcnNlTW9udGggdXNlcklucHV0ID1cbiAgICAgICAgU3RyaW5nLnRvSW50IHVzZXJJbnB1dFxuICAgICAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuICAgIHRvVmFsaWRNb250aCA6IEludCAtPiBNYXliZSBJbnRcbiAgICB0b1ZhbGlkTW9udGggbW9udGggPVxuICAgICAgICBpZiAxIDw9IG1vbnRoICYmIG1vbnRoIDw9IDEyIHRoZW5cbiAgICAgICAgICAgIEp1c3QgbW9udGhcblxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBOb3RoaW5nXG5cbkluIHRoZSBgcGFyc2VNb250aGAgZnVuY3Rpb24sIGlmIGBTdHJpbmcudG9JbnRgIHByb2R1Y2VzIGBOb3RoaW5nYCAoYmVjYXVzZVxudGhlIGB1c2VySW5wdXRgIHdhcyBub3QgYW4gaW50ZWdlcikgdGhpcyBlbnRpcmUgY2hhaW4gb2Ygb3BlcmF0aW9ucyB3aWxsXG5zaG9ydC1jaXJjdWl0IGFuZCByZXN1bHQgaW4gYE5vdGhpbmdgLiBJZiBgdG9WYWxpZE1vbnRoYCByZXN1bHRzIGluIGBOb3RoaW5nYCxcbmFnYWluIHRoZSBjaGFpbiBvZiBjb21wdXRhdGlvbnMgd2lsbCByZXN1bHQgaW4gYE5vdGhpbmdgLlxuXG4tfVxuYW5kVGhlbiA6IChhIC0+IE1heWJlIGIpIC0+IE1heWJlIGEgLT4gTWF5YmUgYlxuYW5kVGhlbiBjYWxsYmFjayBtYXliZVZhbHVlID1cbiAgICB3aGVuIG1heWJlVmFsdWUgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcbi0tXG4tLSBVc2UgYHdoZW5gIGV4cHJlc3Npb25zIGZvciB0aGlzIGluIEdyZW4gY29kZSFcblxuXG5pc0p1c3QgOiBNYXliZSBhIC0+IEJvb2xcbmlzSnVzdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbmRlc3RydWN0IDogYiAtPiAoYSAtPiBiKSAtPiBNYXliZSBhIC0+IGJcbmRlc3RydWN0IGRlZmF1bHQgZnVuYyBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIGZ1bmMgYVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRlZmF1bHRcbiIsCiAgICAgICAgIm1vZHVsZSBNYXRoIGV4cG9zaW5nXG4gICAgKCByb3VuZCwgZmxvb3IsIGNlaWxpbmcsIHRydW5jYXRlXG4gICAgLCBtb2RCeSwgcmVtYWluZGVyQnksIGFicywgc3FydCwgbG9nQmFzZVxuICAgICwgZSwgcGksIG1heFNhZmVJbnRlZ2VyLCBtaW5TYWZlSW50ZWdlciwgbWF4RmxvYXQsIG1pbkZsb2F0XG4gICAgLCBkZWdyZWVzLCByYWRpYW5zLCB0dXJuc1xuICAgICwgY29zLCBzaW4sIHRhbiwgYWNvcywgYXNpbiwgYXRhbiwgYXRhbjJcbiAgICApXG5cbnstfCBGdW5jdGlvbnMgZm9yIGRvaW5nIG1hdGhcblxuQGRvY3Mgcm91bmQsIGZsb29yLCBjZWlsaW5nLCB0cnVuY2F0ZSwgbW9kQnksIHJlbWFpbmRlckJ5LCBhYnMsIHNxcnQsIGxvZ0Jhc2VcblxuXG4jIyBDb25zdGFudHNcblxuQGRvY3MgZSwgcGksIG1heFNhZmVJbnRlZ2VyLCBtaW5TYWZlSW50ZWdlciwgbWF4RmxvYXQsIG1pbkZsb2F0XG5cblxuIyMgQW5nbGVzXG5cbkBkb2NzIGRlZ3JlZXMsIHJhZGlhbnMsIHR1cm5zXG5cblxuIyMgVHJpZ29ub21ldHJ5XG5cbkBkb2NzIGNvcywgc2luLCB0YW4sIGFjb3MsIGFzaW4sIGF0YW4sIGF0YW4yXG5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoSW50LCBGbG9hdCwgKD09KSwgKC8pLCAoKiksICg8KSlcbmltcG9ydCBHcmVuLktlcm5lbC5NYXRoXG5cblxuey18IFJvdW5kIGEgbnVtYmVyIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuXG5cbiAgICByb3VuZCAxLjAgPT0gMVxuXG4gICAgcm91bmQgMS4yID09IDFcblxuICAgIHJvdW5kIDEuNSA9PSAyXG5cbiAgICByb3VuZCAxLjggPT0gMlxuXG4gICAgcm91bmQgLTEuMiA9PSAtMVxuXG4gICAgcm91bmQgLTEuNSA9PSAtMVxuXG4gICAgcm91bmQgLTEuOCA9PSAtMlxuXG4tfVxucm91bmQgOiBGbG9hdCAtPiBJbnRcbnJvdW5kID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnJvdW5kXG5cblxuey18IEZsb29yIGZ1bmN0aW9uLCByb3VuZGluZyBkb3duLlxuXG4gICAgZmxvb3IgMS4wID09IDFcblxuICAgIGZsb29yIDEuMiA9PSAxXG5cbiAgICBmbG9vciAxLjUgPT0gMVxuXG4gICAgZmxvb3IgMS44ID09IDFcblxuICAgIGZsb29yIC0xLjIgPT0gLTJcblxuICAgIGZsb29yIC0xLjUgPT0gLTJcblxuICAgIGZsb29yIC0xLjggPT0gLTJcblxuLX1cbmZsb29yIDogRmxvYXQgLT4gSW50XG5mbG9vciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5mbG9vclxuXG5cbnstfCBDZWlsaW5nIGZ1bmN0aW9uLCByb3VuZGluZyB1cC5cblxuICAgIGNlaWxpbmcgMS4wID09IDFcblxuICAgIGNlaWxpbmcgMS4yID09IDJcblxuICAgIGNlaWxpbmcgMS41ID09IDJcblxuICAgIGNlaWxpbmcgMS44ID09IDJcblxuICAgIGNlaWxpbmcgLTEuMiA9PSAtMVxuXG4gICAgY2VpbGluZyAtMS41ID09IC0xXG5cbiAgICBjZWlsaW5nIC0xLjggPT0gLTFcblxuLX1cbmNlaWxpbmcgOiBGbG9hdCAtPiBJbnRcbmNlaWxpbmcgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguY2VpbGluZ1xuXG5cbnstfCBUcnVuY2F0ZSBhIG51bWJlciwgcm91bmRpbmcgdG93YXJkcyB6ZXJvLlxuXG4gICAgdHJ1bmNhdGUgMS4wID09IDFcblxuICAgIHRydW5jYXRlIDEuMiA9PSAxXG5cbiAgICB0cnVuY2F0ZSAxLjUgPT0gMVxuXG4gICAgdHJ1bmNhdGUgMS44ID09IDFcblxuICAgIHRydW5jYXRlIC0xLjIgPT0gLTFcblxuICAgIHRydW5jYXRlIC0xLjUgPT0gLTFcblxuICAgIHRydW5jYXRlIC0xLjggPT0gLTFcblxuLX1cbnRydW5jYXRlIDogRmxvYXQgLT4gSW50XG50cnVuY2F0ZSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC50cnVuY2F0ZVxuXG5cbnstfCBQZXJmb3JtIFttb2R1bGFyIGFyaXRobWV0aWNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vZHVsYXJfYXJpdGhtZXRpYykuXG5BIGNvbW1vbiB0cmljayBpcyB0byB1c2UgKG4gbW9kIDIpIHRvIGRldGVjdCBldmVuIGFuZCBvZGQgbnVtYmVyczpcblxuICAgIG1vZEJ5IDIgMCA9PSAwXG5cbiAgICBtb2RCeSAyIDEgPT0gMVxuXG4gICAgbW9kQnkgMiAyID09IDBcblxuICAgIG1vZEJ5IDIgMyA9PSAxXG5cbk91ciBgbW9kQnlgIGZ1bmN0aW9uIHdvcmtzIGluIHRoZSB0eXBpY2FsIG1hdGhlbWF0aWNhbCB3YXkgd2hlbiB5b3UgcnVuIGludG9cbm5lZ2F0aXZlIG51bWJlcnM6XG5cbiAgICBMaXN0Lm1hcCAobW9kQnkgNCkgWyAtNSwgLTQsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgNCwgIDUgXVxuICAgIC0tICAgICAgICAgICAgICAgICBbICAzLCAgMCwgIDEsICAyLCAgMywgIDAsICAxLCAgMiwgIDMsICAwLCAgMSBdXG5cblVzZSBbYHJlbWFpbmRlckJ5YF0oI3JlbWFpbmRlckJ5KSBmb3IgYSBkaWZmZXJlbnQgdHJlYXRtZW50IG9mIG5lZ2F0aXZlIG51bWJlcnMsXG5vciByZWFkIERhYW4gTGVpamVu4oCZcyBbRGl2aXNpb24gYW5kIE1vZHVsdXMgZm9yIENvbXB1dGVyIFNjaWVudGlzdHNdW2RtXSBmb3IgbW9yZVxuaW5mb3JtYXRpb24uXG5cbltkbV06IGh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vZW4tdXMvcmVzZWFyY2gvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvZGl2bW9kbm90ZS1sZXR0ZXIucGRmXG5cbi19XG5tb2RCeSA6IEludCAtPiBJbnQgLT4gSW50XG5tb2RCeSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5tb2RCeVxuXG5cbnstfCBHZXQgdGhlIHJlbWFpbmRlciBhZnRlciBkaXZpc2lvbi4gSGVyZSBhcmUgYnVuY2ggb2YgZXhhbXBsZXMgb2YgZGl2aWRpbmcgYnkgZm91cjpcblxuICAgIExpc3QubWFwIChyZW1haW5kZXJCeSA0KSBbIC01LCAtNCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICA0LCAgNSBdXG4gICAgLS0gICAgICAgICAgICAgICAgICAgICAgIFsgLTEsICAwLCAtMywgLTIsIC0xLCAgMCwgIDEsICAyLCAgMywgIDAsICAxIF1cblxuVXNlIFtgbW9kQnlgXSgjbW9kQnkpIGZvciBhIGRpZmZlcmVudCB0cmVhdG1lbnQgb2YgbmVnYXRpdmUgbnVtYmVycyxcbm9yIHJlYWQgRGFhbiBMZWlqZW7igJlzIFtEaXZpc2lvbiBhbmQgTW9kdWx1cyBmb3IgQ29tcHV0ZXIgU2NpZW50aXN0c11bZG1dIGZvciBtb3JlXG5pbmZvcm1hdGlvbi5cblxuW2RtXTogaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9yZXNlYXJjaC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMi9kaXZtb2Rub3RlLWxldHRlci5wZGZcblxuLX1cbnJlbWFpbmRlckJ5IDogSW50IC0+IEludCAtPiBJbnRcbnJlbWFpbmRlckJ5ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnJlbWFpbmRlckJ5XG5cblxuey18IEdldCB0aGUgW2Fic29sdXRlIHZhbHVlXVthYnNdIG9mIGEgbnVtYmVyLlxuXG4gICAgYWJzIDE2ID09IDE2XG5cbiAgICBhYnMgLTQgPT0gNFxuXG4gICAgYWJzIC04LjUgPT0gOC41XG5cbiAgICBhYnMgMy4xNCA9PSAzLjE0XG5cblthYnNdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BYnNvbHV0ZV92YWx1ZVxuXG4tfVxuYWJzIDogbnVtYmVyIC0+IG51bWJlclxuYWJzIG4gPVxuICAgIGlmIG4gPCAwIHRoZW5cbiAgICAgICAgLW5cblxuICAgIGVsc2VcbiAgICAgICAgblxuXG57LXwgVGFrZSB0aGUgc3F1YXJlIHJvb3Qgb2YgYSBudW1iZXIuXG5cbiAgICBzcXJ0IDQgPT0gMlxuXG4gICAgc3FydCA5ID09IDNcblxuICAgIHNxcnQgMTYgPT0gNFxuXG4gICAgc3FydCAyNSA9PSA1XG5cbi19XG5zcXJ0IDogRmxvYXQgLT4gRmxvYXRcbnNxcnQgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguc3FydFxuXG5cbnstfCBDYWxjdWxhdGUgdGhlIGxvZ2FyaXRobSBvZiBhIG51bWJlciB3aXRoIGEgZ2l2ZW4gYmFzZS5cblxuICAgIGxvZ0Jhc2UgMTAgMTAwID09IDJcblxuICAgIGxvZ0Jhc2UgMiAyNTYgPT0gOFxuXG4tfVxubG9nQmFzZSA6IEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0XG5sb2dCYXNlIGJhc2UgbnVtYmVyID1cbiAgICBpZiBiYXNlID09IDEwIHRoZW5cbiAgICAgICAgR3Jlbi5LZXJuZWwuTWF0aC5sb2cxMCBudW1iZXJcblxuICAgIGVsc2VcbiAgICAgICAgKEdyZW4uS2VybmVsLk1hdGgubG9nIG51bWJlcikgLyAoR3Jlbi5LZXJuZWwuTWF0aC5sb2cgYmFzZSlcblxuXG4tLSBBTkdMRVNcblxuXG57LXwgQ29udmVydCByYWRpYW5zIHRvIHN0YW5kYXJkIEdyZW4gYW5nbGVzIChyYWRpYW5zKS5cblxuICAgIHJhZGlhbnMgcGkgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbnJhZGlhbnMgOiBGbG9hdCAtPiBGbG9hdFxucmFkaWFucyBhbmdsZUluUmFkaWFucyA9XG4gICAgYW5nbGVJblJhZGlhbnNcblxuXG57LXwgQ29udmVydCBkZWdyZWVzIHRvIHN0YW5kYXJkIEdyZW4gYW5nbGVzIChyYWRpYW5zKS5cblxuICAgIGRlZ3JlZXMgMTgwID09IDMuMTQxNTkyNjUzNTg5NzkzXG5cbi19XG5kZWdyZWVzIDogRmxvYXQgLT4gRmxvYXRcbmRlZ3JlZXMgYW5nbGVJbkRlZ3JlZXMgPVxuICAgIChhbmdsZUluRGVncmVlcyAqIHBpKSAvIDE4MFxuXG5cbnstfCBDb252ZXJ0IHR1cm5zIHRvIHN0YW5kYXJkIEdyZW4gYW5nbGVzIChyYWRpYW5zKS4gT25lIHR1cm4gaXMgZXF1YWwgdG8gMzYwwrAuXG5cbiAgICB0dXJucyAoMSAvIDIpID09IDMuMTQxNTkyNjUzNTg5NzkzXG5cbi19XG50dXJucyA6IEZsb2F0IC0+IEZsb2F0XG50dXJucyBhbmdsZUluVHVybnMgPVxuICAgICgyICogcGkpICogYW5nbGVJblR1cm5zXG5cblxuLS0gQ09OU1RBTlRTXG5cblxuey18IEFuIGFwcHJveGltYXRpb24gb2YgZS5cbi19XG5lIDogRmxvYXRcbmUgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguZVxuXG5cbnstfCBBbiBhcHByb3hpbWF0aW9uIG9mIHBpLlxuLX1cbnBpIDogRmxvYXRcbnBpID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnBpXG5cblxuey18IFRoZSBsYXJnZXN0IGludGVnZXIgdmFsdWUgdGhhdCBjYW4gYmUgZXhhY3RseSByZXByZXNlbnRlZCBhbmQgY29tcGFyZWQgaW4gYSBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuSW50ZWdlcnMgYWJvdmUgdGhpcyB2YWx1ZSBtYXkgbm90IHdvcmsgYXMgeW91IGV4cGVjdC5cbi19XG5tYXhTYWZlSW50ZWdlciA6IEludFxubWF4U2FmZUludGVnZXIgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgubWF4U2FmZUludGVnZXJcblxuXG57LXwgVGhlIHNtYWxsZXN0IGludGVnZXIgdmFsdWUgdGhhdCBjYW4gYmUgZXhhY3RseSByZXByZXNlbnRlZCBhbmQgY29tcGFyZWQgaW4gYSBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuSW50ZWdlcnMgYmVsb3cgdGhpcyB2YWx1ZSBtYXkgbm90IHdvcmsgYXMgeW91IGV4cGVjdC5cbi19XG5taW5TYWZlSW50ZWdlciA6IEludFxubWluU2FmZUludGVnZXIgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgubWluU2FmZUludGVnZXJcblxuXG57LXwgVGhlIGxhcmdlc3QgYEZsb2F0YCB2YWx1ZS5cbi19XG5tYXhGbG9hdCA6IEZsb2F0XG5tYXhGbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5tYXhGbG9hdFxuXG5cbnstfCBUaGUgc21hbGxlc3QgYEZsb2F0YCB2YWx1ZS5cbi19XG5taW5GbG9hdCA6IEZsb2F0XG5taW5GbG9hdCA9XG4gICAgLW1heEZsb2F0XG5cblxuLS0gVFJJR09OT01FVFJZXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGNvc2luZSBnaXZlbiBhbiBhbmdsZSBpbiByYWRpYW5zLlxuXG4gICAgY29zIChkZWdyZWVzIDYwKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuICAgIGNvcyAodHVybnMgKDEgLyA2KSkgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbiAgICBjb3MgKHJhZGlhbnMgKHBpIC8gMykpID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4gICAgY29zIChwaSAvIDMpID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4tfVxuY29zIDogRmxvYXQgLT4gRmxvYXRcbmNvcyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5jb3NcblxuXG57LXwgRmlndXJlIG91dCB0aGUgc2luZSBnaXZlbiBhbiBhbmdsZSBpbiByYWRpYW5zLlxuXG4gICAgc2luIChkZWdyZWVzIDMwKSA9PSAwLjQ5OTk5OTk5OTk5OTk5OTk0XG5cbiAgICBzaW4gKHR1cm5zICgxIC8gMTIpKSA9PSAwLjQ5OTk5OTk5OTk5OTk5OTk0XG5cbiAgICBzaW4gKHJhZGlhbnMgKHBpIC8gNikpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAocGkgLyA2KSA9PSAwLjQ5OTk5OTk5OTk5OTk5OTk0XG5cbi19XG5zaW4gOiBGbG9hdCAtPiBGbG9hdFxuc2luID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnNpblxuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSB0YW5nZW50IGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICB0YW4gKGRlZ3JlZXMgNDUpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4gICAgdGFuICh0dXJucyAoMSAvIDgpKSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuICAgIHRhbiAocmFkaWFucyAocGkgLyA0KSkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbiAgICB0YW4gKHBpIC8gNCkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbi19XG50YW4gOiBGbG9hdCAtPiBGbG9hdFxudGFuID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnRhblxuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBhcmNjb3NpbmUgZm9yIGBhZGphY2VudCAvIGh5cG90ZW51c2VgIGluIHJhZGlhbnM6XG5cbiAgICBhY29zICgxIC8gMikgPT0gMS4wNDcxOTc1NTExOTY1OTc5IC0tIDYwwrAgb3IgcGkvMyByYWRpYW5zXG5cbi19XG5hY29zIDogRmxvYXQgLT4gRmxvYXRcbmFjb3MgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYWNvc1xuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBhcmNzaW5lIGZvciBgb3Bwb3NpdGUgLyBoeXBvdGVudXNlYCBpbiByYWRpYW5zOlxuXG4gICAgYXNpbiAoMSAvIDIpID09IDAuNTIzNTk4Nzc1NTk4Mjk4OSAtLSAzMMKwIG9yIHBpLzYgcmFkaWFuc1xuXG4tfVxuYXNpbiA6IEZsb2F0IC0+IEZsb2F0XG5hc2luID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmFzaW5cblxuXG57LXwgVGhpcyBoZWxwcyB5b3UgZmluZCB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHRvIGFuIGAoeCx5KWAgY29vcmRpbmF0ZSwgYnV0XG5pbiBhIHdheSB0aGF0IGlzIHJhcmVseSB1c2VmdWwgaW4gcHJvZ3JhbW1pbmcuICoqWW91IHByb2JhYmx5IHdhbnRcbltgYXRhbjJgXSgjYXRhbjIpIGluc3RlYWQhKipcblxuVGhpcyB2ZXJzaW9uIHRha2VzIGB5L3hgIGFzIGl0cyBhcmd1bWVudCwgc28gdGhlcmUgaXMgbm8gd2F5IHRvIGtub3cgd2hldGhlclxudGhlIG5lZ2F0aXZlIHNpZ25zIGNvbWVzIGZyb20gdGhlIGB5YCBvciBgeGAgdmFsdWUuIFNvIGFzIHdlIGdvIGNvdW50ZXItY2xvY2t3aXNlXG5hcm91bmQgdGhlIG9yaWdpbiBmcm9tIHBvaW50IGAoMSwxKWAgdG8gYCgxLC0xKWAgdG8gYCgtMSwtMSlgIHRvIGAoLTEsMSlgIHdlIGRvXG5ub3QgZ2V0IGFuZ2xlcyB0aGF0IGdvIGluIHRoZSBmdWxsIGNpcmNsZTpcblxuICAgIGF0YW4gKDEgLyAxKSA9PSAwLjc4NTM5ODE2MzM5NzQ0ODMgLS0gIDQ1wrAgb3IgICBwaS80IHJhZGlhbnNcblxuICAgIGF0YW4gKDEgLyAtMSkgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbiAoLTEgLyAtMSkgPT0gMC43ODUzOTgxNjMzOTc0NDgzIC0tICA0NcKwIG9yICAgcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuICgtMSAvIDEpID09IC0wLjc4NTM5ODE2MzM5NzQ0ODMgLS0gMzE1wrAgb3IgNypwaS80IHJhZGlhbnNcblxuTm90aWNlIHRoYXQgZXZlcnl0aGluZyBpcyBiZXR3ZWVuIGBwaS8yYCBhbmQgYC1waS8yYC4gVGhhdCBpcyBwcmV0dHkgdXNlbGVzc1xuZm9yIGZpZ3VyaW5nIG91dCBhbmdsZXMgaW4gYW55IHNvcnQgb2YgdmlzdWFsaXphdGlvbiwgc28gYWdhaW4sIGNoZWNrIG91dFxuW2BhdGFuMmBdKCNhdGFuMikgaW5zdGVhZCFcblxuLX1cbmF0YW4gOiBGbG9hdCAtPiBGbG9hdFxuYXRhbiA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hdGFuXG5cblxuey18IFRoaXMgaGVscHMgeW91IGZpbmQgdGhlIGFuZ2xlIChpbiByYWRpYW5zKSB0byBhbiBgKHgseSlgIGNvb3JkaW5hdGUuXG5TbyByYXRoZXIgdGhhbiBzYXlpbmcgYGF0YW4gKHkveClgIHlvdSBzYXkgYGF0YW4yIHkgeGAgYW5kIHlvdSBjYW4gZ2V0IGEgZnVsbFxucmFuZ2Ugb2YgYW5nbGVzOlxuXG4gICAgYXRhbjIgMSAxID09IDAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAgNDXCsCBvciAgIHBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbjIgMSAtMSA9PSAyLjM1NjE5NDQ5MDE5MjM0NSAtLSAxMzXCsCBvciAzKnBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbjIgLTEgLTEgPT0gLTIuMzU2MTk0NDkwMTkyMzQ1IC0tIDIyNcKwIG9yIDUqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAtMSAxID09IC0wLjc4NTM5ODE2MzM5NzQ0ODMgLS0gMzE1wrAgb3IgNypwaS80IHJhZGlhbnNcblxuLX1cbmF0YW4yIDogRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRcbmF0YW4yID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmF0YW4yXG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5LZXllZCBleHBvc2luZ1xuICAoIG5vZGVcbiAgLCBvbFxuICAsIHVsXG4gIClcblxuXG57LXwgQSBrZXllZCBub2RlIGhlbHBzIG9wdGltaXplIGNhc2VzIHdoZXJlIGNoaWxkcmVuIGFyZSBnZXR0aW5nIGFkZGVkLCBtb3ZlZCxcbnJlbW92ZWQsIGV0Yy4gQ29tbW9uIGV4YW1wbGVzIGluY2x1ZGU6XG5cbiAgLSBUaGUgdXNlciBjYW4gZGVsZXRlIGl0ZW1zIGZyb20gYSBsaXN0LlxuICAtIFRoZSB1c2VyIGNhbiBjcmVhdGUgbmV3IGl0ZW1zIGluIGEgbGlzdC5cbiAgLSBZb3UgY2FuIHNvcnQgYSBsaXN0IGJhc2VkIG9uIG5hbWUgb3IgZGF0ZSBvciB3aGF0ZXZlci5cblxuV2hlbiB5b3UgdXNlIGEga2V5ZWQgbm9kZSwgZXZlcnkgY2hpbGQgaXMgcGFpcmVkIHdpdGggYSBzdHJpbmcgaWRlbnRpZmllci4gVGhpc1xubWFrZXMgaXQgcG9zc2libGUgZm9yIHRoZSB1bmRlcmx5aW5nIGRpZmZpbmcgYWxnb3JpdGhtIHRvIHJldXNlIG5vZGVzIG1vcmVcbmVmZmljaWVudGx5LlxuXG4jIyBLZXllZCBOb2Rlc1xuQGRvY3Mgbm9kZVxuXG4jIyBDb21tb25seSBLZXllZCBOb2Rlc1xuQGRvY3Mgb2wsIHVsXG4tfVxuXG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwpXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cbnstfCBXb3JrcyBqdXN0IGxpa2UgYEh0bWwubm9kZWAsIGJ1dCB5b3UgYWRkIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gZWFjaCBjaGlsZFxubm9kZS4gWW91IHdhbnQgdGhpcyB3aGVuIHlvdSBoYXZlIGEgbGlzdCBvZiBub2RlcyB0aGF0IGlzIGNoYW5naW5nOiBhZGRpbmdcbm5vZGVzLCByZW1vdmluZyBub2RlcywgZXRjLiBJbiB0aGVzZSBjYXNlcywgdGhlIHVuaXF1ZSBpZGVudGlmaWVycyBoZWxwIG1ha2VcbnRoZSBET00gbW9kaWZpY2F0aW9ucyBtb3JlIGVmZmljaWVudC5cbi19XG5ub2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbm5vZGUgPVxuICBWaXJ0dWFsRG9tLmtleWVkTm9kZVxuXG5cbnstfC19XG5vbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbm9sID1cbiAgbm9kZSBcIm9sXCJcblxuXG57LXwtfVxudWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBIdG1sIG1zZyB9IC0+IEh0bWwgbXNnXG51bCA9XG4gIG5vZGUgXCJ1bFwiXG4iCiAgICBdLAogICAgIm5hbWVzIjogWwogICAgICAgICJEaWN0LmZvbGRsIiwKICAgICAgICAiZnVuYyIsCiAgICAgICAgImFjYyIsCiAgICAgICAgImRpY3QiLAogICAgICAgICJrZXkiLAogICAgICAgICJ2YWx1ZSIsCiAgICAgICAgImxlZnQiLAogICAgICAgICJyaWdodCIsCiAgICAgICAgIkFycmF5Lmxlbmd0aCIsCiAgICAgICAgIl9BcnJheV9sZW5ndGgiLAogICAgICAgICJBcnJheS5wdXNoTGFzdCIsCiAgICAgICAgImFycmF5IiwKICAgICAgICAiX0FycmF5X3NwbGljZTEiLAogICAgICAgICJEaWN0LmtleXMiLAogICAgICAgICJrZXlBcnJheSIsCiAgICAgICAgIlNldC50b0FycmF5IiwKICAgICAgICAiX3YwIiwKICAgICAgICAiQmFzaWNzLmFwUiIsCiAgICAgICAgIngiLAogICAgICAgICJmIiwKICAgICAgICAiQmFzaWNzLmlkZW50aXR5IiwKICAgICAgICAiRGF0YVRhYmxlLm5ldyIsCiAgICAgICAgImlkIiwKICAgICAgICAiZCIsCiAgICAgICAgImIiLAogICAgICAgICJEYXRhVGFibGUuTm9QYWdpbmF0aW9uIiwKICAgICAgICAiayIsCiAgICAgICAgImwiLAogICAgICAgICJCYXNpY3MuYXBMIiwKICAgICAgICAiQmFzaWNzLmFwcGVuZCIsCiAgICAgICAgIl9VdGlsc19hcHBlbmQiLAogICAgICAgICJBcnJheS5zb3J0IiwKICAgICAgICAiX0FycmF5X3NvcnQiLAogICAgICAgICJEYXRhVGFibGUuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGgiLAogICAgICAgICJkZWZhdWx0UGFnZVNpemUiLAogICAgICAgICJvdGhlclBhZ2VTaXplcyIsCiAgICAgICAgInN0YXRlIiwKICAgICAgICAiY3VycmVudFN0YXRlIiwKICAgICAgICAiRGF0YVRhYmxlLlNjcm9sbGVyIiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZUFjdGl2ZVJvd0lkIiwKICAgICAgICAibmV3QWN0aXZlUm93SWQiLAogICAgICAgICJwYWdlU2l6ZSIsCiAgICAgICAgInBhZ2luYXRpb24iLAogICAgICAgICJzb3J0Q29sdW1ucyIsCiAgICAgICAgInRhYmxlSWQiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlU29ydFN0YXRlIiwKICAgICAgICAibmV3U29ydENvbHVtbiIsCiAgICAgICAgInNvcnREaXJlY3Rpb24iLAogICAgICAgICJhY3RpdmVSb3dJZCIsCiAgICAgICAgImFlIiwKICAgICAgICAiUCIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLmluaXQiLAogICAgICAgICJwZW9wbGUiLAogICAgICAgICJtb2RlbCIsCiAgICAgICAgImJCIiwKICAgICAgICAiYU0iLAogICAgICAgICJhViIsCiAgICAgICAgIkRhdGFUYWJsZS5pbml0aWFsU29ydCIsCiAgICAgICAgImhlYWRlciIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5pbml0IiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQucGVyc29uIiwKICAgICAgICAibmFtZSIsCiAgICAgICAgInllYXIiLAogICAgICAgICJjaXR5IiwKICAgICAgICAiYW4iLAogICAgICAgICJpIiwKICAgICAgICAiYVMiLAogICAgICAgICJhMyIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLnByZXNpZGVudHMiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMucGVyc29uIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLnByZXNpZGVudHMiLAogICAgICAgICJEb2NCb29rLmluaXQiLAogICAgICAgICJDIiwKICAgICAgICAiTSIsCiAgICAgICAgIk4iLAogICAgICAgICJCYXNpY3MuYWRkIiwKICAgICAgICAiX0Jhc2ljc19hZGQiLAogICAgICAgICJTdHJpbmcuYW55IiwKICAgICAgICAiX1N0cmluZ19hbnkiLAogICAgICAgICJCYXNpY3MuY29tcG9zZUwiLAogICAgICAgICJnIiwKICAgICAgICAiQmFzaWNzLm5vdCIsCiAgICAgICAgIl9CYXNpY3Nfbm90IiwKICAgICAgICAiU3RyaW5nLmFsbCIsCiAgICAgICAgImlzR29vZCIsCiAgICAgICAgInN0ciIsCiAgICAgICAgIkJhc2ljcy5hbmQiLAogICAgICAgICJfQmFzaWNzX2FuZCIsCiAgICAgICAgIkpzb24uRW5jb2RlLmVuY29kZSIsCiAgICAgICAgIl9Kc29uX2VuY29kZSIsCiAgICAgICAgIlN0cmluZy5mcm9tSW50IiwKICAgICAgICAiX1N0cmluZ19mcm9tTnVtYmVyIiwKICAgICAgICAiU3RyaW5nLmpvaW4iLAogICAgICAgICJfU3RyaW5nX2pvaW4iLAogICAgICAgICJTdHJpbmcuc3BsaXQiLAogICAgICAgICJfU3RyaW5nX3NwbGl0IiwKICAgICAgICAiSnNvbi5EZWNvZGUuaW5kZW50IiwKICAgICAgICAiQXJyYXkuaW5kZXhlZE1hcCIsCiAgICAgICAgIl9BcnJheV9pbmRleGVkTWFwIiwKICAgICAgICAiQmFzaWNzLmxlIiwKICAgICAgICAiX1V0aWxzX2xlIiwKICAgICAgICAiQ2hhci50b0NvZGUiLAogICAgICAgICJfQ2hhcl90b0NvZGUiLAogICAgICAgICJDaGFyLmlzTG93ZXIiLAogICAgICAgICJfY2hhciIsCiAgICAgICAgImNvZGUiLAogICAgICAgICJjaGFyIiwKICAgICAgICAiQ2hhci5pc1VwcGVyIiwKICAgICAgICAiQmFzaWNzLm9yIiwKICAgICAgICAiX0Jhc2ljc19vciIsCiAgICAgICAgIkNoYXIuaXNBbHBoYSIsCiAgICAgICAgIkNoYXIuaXNEaWdpdCIsCiAgICAgICAgIkNoYXIuaXNBbHBoYU51bSIsCiAgICAgICAgIlN0cmluZy5wb3BGaXJzdCIsCiAgICAgICAgIl9TdHJpbmdfcG9wRmlyc3QiLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvck9uZU9mIiwKICAgICAgICAiZXJyb3IiLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvclRvU3RyaW5nIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JUb1N0cmluZ0hlbHAiLAogICAgICAgICJjb250ZXh0IiwKICAgICAgICAiaXNTaW1wbGUiLAogICAgICAgICJfdjIiLAogICAgICAgICJyZXN0IiwKICAgICAgICAiZmllbGROYW1lIiwKICAgICAgICAiZXJyIiwKICAgICAgICAiaW5kZXhOYW1lIiwKICAgICAgICAic3RhcnRlciIsCiAgICAgICAgImludHJvZHVjdGlvbiIsCiAgICAgICAgImVycm9ycyIsCiAgICAgICAgImpzb24iLAogICAgICAgICJtc2ciLAogICAgICAgICJSZXN1bHQuaXNPayIsCiAgICAgICAgInJlc3VsdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLm1hcCIsCiAgICAgICAgIl9Kc29uX21hcDEiLAogICAgICAgICJKc29uLkRlY29kZS5tYXAyIiwKICAgICAgICAiX0pzb25fbWFwMiIsCiAgICAgICAgIkpzb24uRGVjb2RlLnN1Y2NlZWQiLAogICAgICAgICJfSnNvbl9zdWNjZWVkIiwKICAgICAgICAiVmlydHVhbERvbS50b0hhbmRsZXJJbnQiLAogICAgICAgICJoYW5kbGVyIiwKICAgICAgICAiU3RyaW5nLmNvbnRhaW5zIiwKICAgICAgICAiX1N0cmluZ19jb250YWlucyIsCiAgICAgICAgIkJhc2ljcy5sdCIsCiAgICAgICAgIl9VdGlsc19sdCIsCiAgICAgICAgIlN0cmluZy5zbGljZSIsCiAgICAgICAgIl9TdHJpbmdfc2xpY2UiLAogICAgICAgICJTdHJpbmcudW5pdExlbmd0aCIsCiAgICAgICAgIl9TdHJpbmdfdW5pdExlbmd0aCIsCiAgICAgICAgIlN0cmluZy5kcm9wRmlyc3QiLAogICAgICAgICJuIiwKICAgICAgICAic3RyaW5nIiwKICAgICAgICAiU3RyaW5nLmluZGljZXMiLAogICAgICAgICJfU3RyaW5nX2luZGV4ZXMiLAogICAgICAgICJCYXNpY3MuZXEiLAogICAgICAgICJfVXRpbHNfZXF1YWwiLAogICAgICAgICJTdHJpbmcuaXNFbXB0eSIsCiAgICAgICAgIlN0cmluZy50YWtlRmlyc3QiLAogICAgICAgICJTdHJpbmcudG9JbnQiLAogICAgICAgICJfU3RyaW5nX3RvSW50IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlUGF0aCIsCiAgICAgICAgInByb3RvY29sIiwKICAgICAgICAicGF0aCIsCiAgICAgICAgInBhcmFtcyIsCiAgICAgICAgImZyYWciLAogICAgICAgICJNYXliZS5Ob3RoaW5nIiwKICAgICAgICAiTWF5YmUuSnVzdCIsCiAgICAgICAgIlgiLAogICAgICAgICJheSIsCiAgICAgICAgIloiLAogICAgICAgICJhRyIsCiAgICAgICAgImFLIiwKICAgICAgICAiX3YxIiwKICAgICAgICAicG9ydF8iLAogICAgICAgICJBcnJheS5nZXQiLAogICAgICAgICJfQXJyYXlfZ2V0IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlUXVlcnkiLAogICAgICAgICJVcmwuY2hvbXBCZWZvcmVGcmFnbWVudCIsCiAgICAgICAgIlVybC5jaG9tcEFmdGVyUHJvdG9jb2wiLAogICAgICAgICJTdHJpbmcuc3RhcnRzV2l0aCIsCiAgICAgICAgIl9TdHJpbmdfc3RhcnRzV2l0aCIsCiAgICAgICAgIlVybC5mcm9tU3RyaW5nIiwKICAgICAgICAiQmFzaWNzLm5ldmVyIiwKICAgICAgICAibnZyIiwKICAgICAgICAiVGFzay5zdWNjZWVkIiwKICAgICAgICAiX1NjaGVkdWxlcl9zdWNjZWVkIiwKICAgICAgICAiVGFzay5pbml0IiwKICAgICAgICAiQXJyYXkubWFwIiwKICAgICAgICAiX0FycmF5X21hcCIsCiAgICAgICAgIlRhc2suYW5kVGhlbiIsCiAgICAgICAgIl9TY2hlZHVsZXJfYW5kVGhlbiIsCiAgICAgICAgIlRhc2subWFwIiwKICAgICAgICAidGFza0EiLAogICAgICAgICJhIiwKICAgICAgICAiQXJyYXkuZm9sZHIiLAogICAgICAgICJfQXJyYXlfZm9sZHIiLAogICAgICAgICJUYXNrLm1hcDIiLAogICAgICAgICJ0YXNrQiIsCiAgICAgICAgIkFycmF5LnB1c2hGaXJzdCIsCiAgICAgICAgIlRhc2suc2VxdWVuY2UiLAogICAgICAgICJ0YXNrcyIsCiAgICAgICAgIlBsYXRmb3JtLnNlbmRUb0FwcCIsCiAgICAgICAgIl9QbGF0Zm9ybV9zZW5kVG9BcHAiLAogICAgICAgICJUYXNrLnNwYXduQ21kIiwKICAgICAgICAicm91dGVyIiwKICAgICAgICAiY21kIiwKICAgICAgICAiX1NjaGVkdWxlcl9zcGF3biIsCiAgICAgICAgInRhc2siLAogICAgICAgICJUYXNrLm9uRWZmZWN0cyIsCiAgICAgICAgImNvbW1hbmRzIiwKICAgICAgICAiVGFzay5vblNlbGZNc2ciLAogICAgICAgICJUYXNrLmNtZE1hcCIsCiAgICAgICAgInRhZ2dlciIsCiAgICAgICAgIlRhc2suUGVyZm9ybSIsCiAgICAgICAgIlRhc2suRXhlY3V0ZSIsCiAgICAgICAgIlRhc2sucGVyZm9ybSIsCiAgICAgICAgInRvTWVzc2FnZSIsCiAgICAgICAgIlRhc2suY29tbWFuZCIsCiAgICAgICAgIlBsYXRmb3JtLkNtZC5iYXRjaCIsCiAgICAgICAgIl9QbGF0Zm9ybV9iYXRjaCIsCiAgICAgICAgIlBsYXRmb3JtLkNtZC5ub25lIiwKICAgICAgICAiUGxhdGZvcm0uU3ViLmJhdGNoIiwKICAgICAgICAiUGxhdGZvcm0uU3ViLm5vbmUiLAogICAgICAgICJCcm93c2VyLnNhbmRib3giLAogICAgICAgICJpbXBsIiwKICAgICAgICAiX0Jyb3dzZXJfZWxlbWVudCIsCiAgICAgICAgImJuIiwKICAgICAgICAiYXAiLAogICAgICAgICJhQyIsCiAgICAgICAgImJQIiwKICAgICAgICAiYlIiLAogICAgICAgICJiUyIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLnVwZGF0ZSIsCiAgICAgICAgIm5ld1F1ZXJ5IiwKICAgICAgICAibmV3U3RhdGUiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMudXBkYXRlIiwKICAgICAgICAiRG9jQm9vay51cGRhdGUiLAogICAgICAgICJleGFtcGxlVG9Td2l0Y2hUbyIsCiAgICAgICAgImV4YW1wbGVNc2ciLAogICAgICAgICJWaXJ0dWFsRG9tLm5vZGUiLAogICAgICAgICJ0YWciLAogICAgICAgICJfVmlydHVhbERvbV9ub2RlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9TY3JpcHQiLAogICAgICAgICJIdG1sLm5vZGUiLAogICAgICAgICJIdG1sLmFydGljbGUiLAogICAgICAgICJIdG1sLmJ1dHRvbiIsCiAgICAgICAgIkRvY0Jvb2suYnV0dG9ucyIsCiAgICAgICAgIlZpcnR1YWxEb20ucHJvcGVydHkiLAogICAgICAgICJfVmlydHVhbERvbV9wcm9wZXJ0eSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vSW5uZXJIdG1sT3JGb3JtQWN0aW9uIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0T3JIdG1sVXJpIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnByb3BlcnR5IiwKICAgICAgICAiSnNvbi5FbmNvZGUuc3RyaW5nIiwKICAgICAgICAiX0pzb25fd3JhcCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5zdHJpbmdQcm9wZXJ0eSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5jbGFzcyIsCiAgICAgICAgIkh0bWwuZGl2IiwKICAgICAgICAiRG9jQm9vay5leGFtcGxlTmFtZSIsCiAgICAgICAgInZhcmlhbnQiLAogICAgICAgICJIdG1sLmgzIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmlkIiwKICAgICAgICAiVmlydHVhbERvbS5tYXAiLAogICAgICAgICJfVmlydHVhbERvbV9tYXAiLAogICAgICAgICJIdG1sLm1hcCIsCiAgICAgICAgIkh0bWwubmF2IiwKICAgICAgICAiQmFzaWNzLm5lZ2F0ZSIsCiAgICAgICAgIlZpcnR1YWxEb20ub24iLAogICAgICAgICJfVmlydHVhbERvbV9vbiIsCiAgICAgICAgIkh0bWwuRXZlbnRzLm9uIiwKICAgICAgICAiZXZlbnQiLAogICAgICAgICJkZWNvZGVyIiwKICAgICAgICAiVmlydHVhbERvbS5Ob3JtYWwiLAogICAgICAgICJIdG1sLkV2ZW50cy5vbkNsaWNrIiwKICAgICAgICAiVmlydHVhbERvbS5hdHRyaWJ1dGUiLAogICAgICAgICJfVmlydHVhbERvbV9hdHRyaWJ1dGUiLAogICAgICAgICJfVmlydHVhbERvbV9ub09uT3JGb3JtQWN0aW9uIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmF0dHJpYnV0ZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy50YWJpbmRleCIsCiAgICAgICAgIlZpcnR1YWxEb20udGV4dCIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX3RleHQiLAogICAgICAgICJIdG1sLnRleHQiLAogICAgICAgICJBcnJheS5rZWVwSWYiLAogICAgICAgICJfQXJyYXlfZmlsdGVyIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNsYXNzTGlzdCIsCiAgICAgICAgImNsYXNzZXMiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuY29sc3BhbiIsCiAgICAgICAgIkJhc2ljcy5ndCIsCiAgICAgICAgIl9VdGlsc19ndCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5BcmlhLmxhYmVsIiwKICAgICAgICAiQXJyYXkuZmluZEZpcnN0IiwKICAgICAgICAiX0FycmF5X2ZpbmRGaXJzdCIsCiAgICAgICAgIkFycmF5Lm1lbWJlciIsCiAgICAgICAgInYiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMucm93c3BhbiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5BcmlhLnNvcnQiLAogICAgICAgICJEYXRhVGFibGUuc29ydERpcmVjdGlvblRvU3RyaW5nIiwKICAgICAgICAiSHRtbC5zcGFuIiwKICAgICAgICAiVmlydHVhbERvbS5zdHlsZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX3N0eWxlIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnN0eWxlIiwKICAgICAgICAiSHRtbC5zdXAiLAogICAgICAgICJIdG1sLnRoIiwKICAgICAgICAiSHRtbC50ciIsCiAgICAgICAgIkRhdGFUYWJsZS5kZWZhdWx0VGFibGVIZWFkZXIiLAogICAgICAgICJoZWFkZXJJbmZvcyIsCiAgICAgICAgImRlZmF1bHRUSCIsCiAgICAgICAgIl92MyIsCiAgICAgICAgInNvcnRTZXF1ZW5jZU51bWJlciIsCiAgICAgICAgInNvcnRSYW5rIiwKICAgICAgICAicm93QW5kQ29sU3BhbiIsCiAgICAgICAgImlzU29ydGVkIiwKICAgICAgICAidmlld2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgImNvbHVtblRpdGxlIiwKICAgICAgICAiY29sdW1uT3JkZXIiLAogICAgICAgICJzb3J0RGlyZWN0aW9ucyIsCiAgICAgICAgIm8iLAogICAgICAgICJjYW5CZVNvcnRlZCIsCiAgICAgICAgInRoQ2xhc3NlcyIsCiAgICAgICAgImFyaWFTb3J0IiwKICAgICAgICAidGhBdHRyaWJ1dGVzIiwKICAgICAgICAiY2xpY2tBY3Rpb25zIiwKICAgICAgICAiRCIsCiAgICAgICAgIkUiLAogICAgICAgICJEYXRhVGFibGUuZ2V0QWN0aXZlUm93SWQiLAogICAgICAgICJEYXRhVGFibGUuc2ltcGxlUm93QXR0cnMiLAogICAgICAgICJ0b0lkIiwKICAgICAgICAidG9Nc2ciLAogICAgICAgICJkYXRhIiwKICAgICAgICAiaXNfY3VycmVudF9yb3ciLAogICAgICAgICJEYXRhVGFibGUuZGVmYXVsdEN1c3RvbWl6YXRpb25zIiwKICAgICAgICAiYTciLAogICAgICAgICJhNCIsCiAgICAgICAgImE2IiwKICAgICAgICAiYW0iLAogICAgICAgICJiZCIsCiAgICAgICAgImFPIiwKICAgICAgICAiYVUiLAogICAgICAgICJhVyIsCiAgICAgICAgImFYIiwKICAgICAgICAiYVkiLAogICAgICAgICJEYXRhVGFibGUuY29uZmlnIiwKICAgICAgICAiYW8iLAogICAgICAgICJjRGF0YSIsCiAgICAgICAgImNvbHVtbnMiLAogICAgICAgICJhcSIsCiAgICAgICAgImEkIiwKICAgICAgICAiYTEiLAogICAgICAgICJBcnJheS5zb3J0QnkiLAogICAgICAgICJfQXJyYXlfc29ydEJ5IiwKICAgICAgICAiRGF0YVRhYmxlLmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSIsCiAgICAgICAgInRvQ29tcGFyYWJsZSIsCiAgICAgICAgIkRhdGFUYWJsZS5JbmNPckRlYyIsCiAgICAgICAgIkRhdGFUYWJsZS50ZXh0RGV0YWlscyIsCiAgICAgICAgIkRhdGFUYWJsZS5pbnRDb2x1bW4iLAogICAgICAgICJ0b0ludCIsCiAgICAgICAgInoiLAogICAgICAgICJCIiwKICAgICAgICAiRGF0YVRhYmxlLnN0cmluZ0NvbHVtbiIsCiAgICAgICAgInRvU3RyIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQuY29uZmlnIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQuU2V0VGFibGVTdGF0ZSIsCiAgICAgICAgIkh0bWwuaDEiLAogICAgICAgICJIdG1sLmlucHV0IiwKICAgICAgICAiSHRtbC5FdmVudHMuYWx3YXlzU3RvcCIsCiAgICAgICAgImgiLAogICAgICAgICJBIiwKICAgICAgICAiSHRtbC5FdmVudHMuc3RvcFByb3BhZ2F0aW9uT24iLAogICAgICAgICJWaXJ0dWFsRG9tLk1heVN0b3BQcm9wYWdhdGlvbiIsCiAgICAgICAgIkpzb24uRGVjb2RlLmZpZWxkIiwKICAgICAgICAiX0pzb25fZGVjb2RlRmllbGQiLAogICAgICAgICJKc29uLkRlY29kZS5hdCIsCiAgICAgICAgImZpZWxkcyIsCiAgICAgICAgIkpzb24uRGVjb2RlLnN0cmluZyIsCiAgICAgICAgIl9Kc29uX2RlY29kZVN0cmluZyIsCiAgICAgICAgIkh0bWwuRXZlbnRzLnRhcmdldFZhbHVlIiwKICAgICAgICAiSHRtbC5FdmVudHMub25JbnB1dCIsCiAgICAgICAgIkRhdGFUYWJsZS5nZXRQYWdlU2l6ZSIsCiAgICAgICAgIkh0bWwub3B0aW9uIiwKICAgICAgICAiSHRtbC5zZWxlY3QiLAogICAgICAgICJKc29uLkVuY29kZS5ib29sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmJvb2xQcm9wZXJ0eSIsCiAgICAgICAgImJvb2wiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuc2VsZWN0ZWQiLAogICAgICAgICJCYXNpY3MuZ2UiLAogICAgICAgICJfVXRpbHNfZ2UiLAogICAgICAgICJBcnJheS5zbGljZSIsCiAgICAgICAgIl9BcnJheV9zbGljZSIsCiAgICAgICAgIkFycmF5LmRyb3BGaXJzdCIsCiAgICAgICAgIkFycmF5LmZpcnN0IiwKICAgICAgICAiQXJyYXkucG9wRmlyc3QiLAogICAgICAgICJiaiIsCiAgICAgICAgImJGIiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZVBhZ2VTaXplIiwKICAgICAgICAibWluaW11bU5ld1BhZ2VTaXplIiwKICAgICAgICAibmV4dEhpZ2hlckluTGlzdCIsCiAgICAgICAgImlucHV0IiwKICAgICAgICAibGlzdCIsCiAgICAgICAgIm5ld1BhZ2VTaXplIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnZhbHVlIiwKICAgICAgICAiTWF5YmUud2l0aERlZmF1bHQiLAogICAgICAgICJfZGVmYXVsdCIsCiAgICAgICAgIm1heWJlIiwKICAgICAgICAiZGVmYXVsdCIsCiAgICAgICAgIkRhdGFUYWJsZS5wYWdlTGVuZ3RoQ2hvb3NlciIsCiAgICAgICAgInRhYmxlU3RhdGUiLAogICAgICAgICJ2aWV3T3B0aW9uIiwKICAgICAgICAidmFsdWVzIiwKICAgICAgICAidmFsIiwKICAgICAgICAiaHRtbCIsCiAgICAgICAgIm9uUGFnZVNpemVDaG9pY2UiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMucGxhY2Vob2xkZXIiLAogICAgICAgICJTdHJpbmcudG9Mb3dlciIsCiAgICAgICAgIl9TdHJpbmdfdG9Mb3dlciIsCiAgICAgICAgIkh0bWwuY2FwdGlvbiIsCiAgICAgICAgIkJhc2ljcy5jb21wYXJlIiwKICAgICAgICAiX1V0aWxzX2NvbXBhcmUiLAogICAgICAgICJCYXNpY3MuaWRpdiIsCiAgICAgICAgIl9CYXNpY3NfaWRpdiIsCiAgICAgICAgIk1hdGgubW9kQnkiLAogICAgICAgICJfTWF0aF9tb2RCeSIsCiAgICAgICAgIkRhdGFUYWJsZS5pc0V2ZW4iLAogICAgICAgICJfaW50IiwKICAgICAgICAiaW50IiwKICAgICAgICAiTWF5YmUubWFwIiwKICAgICAgICAiQmFzaWNzLm11bCIsCiAgICAgICAgIl9CYXNpY3NfbXVsIiwKICAgICAgICAiRGF0YVRhYmxlLm5lZ2F0aXZlVG9aZXJvIiwKICAgICAgICAiQmFzaWNzLnN1YiIsCiAgICAgICAgIl9CYXNpY3Nfc3ViIiwKICAgICAgICAiQXJyYXkudGFrZUZpcnN0IiwKICAgICAgICAiRGF0YVRhYmxlLmdldFBhZ2luYXRlZERhdGEiLAogICAgICAgICJyb3dDdXJzb3IiLAogICAgICAgICJwcmVjZWRpbmdGdWxsUGFnZXMiLAogICAgICAgICJsYXN0Um93T25QYWdlIiwKICAgICAgICAiX3Y3IiwKICAgICAgICAibGFzdFJvd0JlZm9yZVBhZ2UiLAogICAgICAgICJfdjQiLAogICAgICAgICJBcnJheS5yZXZlcnNlIiwKICAgICAgICAiX0FycmF5X3JldmVyc2UiLAogICAgICAgICJEYXRhVGFibGUuYXBwbHlTb3J0ZXIiLAogICAgICAgICJzb3J0ZXIiLAogICAgICAgICJzcnQiLAogICAgICAgICJEYXRhVGFibGUuZmluZFNvcnRlciIsCiAgICAgICAgInNlbGVjdGVkQ29sdW1uIiwKICAgICAgICAiRGF0YVRhYmxlLnNvcnQiLAogICAgICAgICJfdjUiLAogICAgICAgICJzb3J0Q29sdW1uTmFtZSIsCiAgICAgICAgIkRhdGFUYWJsZS5nZXRTb3J0ZWREYXRhIiwKICAgICAgICAiVmlydHVhbERvbS5rZXllZE5vZGUiLAogICAgICAgICJfVmlydHVhbERvbV9rZXllZE5vZGUiLAogICAgICAgICJIdG1sLktleWVkLm5vZGUiLAogICAgICAgICJIdG1sLnRhYmxlIiwKICAgICAgICAiSHRtbC50Zm9vdCIsCiAgICAgICAgIkh0bWwudGhlYWQiLAogICAgICAgICJEYXRhVGFibGUudG9IZWFkZXIiLAogICAgICAgICJEYXRhVGFibGUuaGVhZGVySW5mbyIsCiAgICAgICAgInNlbGVjdGVkIiwKICAgICAgICAiYmMiLAogICAgICAgICJiSiIsCiAgICAgICAgImFSIiwKICAgICAgICAiSHRtbC5FdmVudHMub25Nb3VzZVVwIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnRpdGxlIiwKICAgICAgICAiQmFzaWNzLm5lcSIsCiAgICAgICAgIl9VdGlsc19ub3RFcXVhbCIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVNdWx0aVNvcnRTdGF0ZSIsCiAgICAgICAgIm5ld1NvcnRTdGF0ZSIsCiAgICAgICAgIkRhdGFUYWJsZS5vbkNvbHVtbkhlYWRlciIsCiAgICAgICAgIkRhdGFUYWJsZS50b0hlYWRlckluZm8iLAogICAgICAgICJpbmRleGVkTGlzdCIsCiAgICAgICAgImlkeCIsCiAgICAgICAgImJ0IiwKICAgICAgICAiYkciLAogICAgICAgICJub25FbXB0eUxpc3QiLAogICAgICAgICJmaWx0ZXJlZExpc3QiLAogICAgICAgICJfdjgiLAogICAgICAgICJfdjYiLAogICAgICAgICJiTSIsCiAgICAgICAgImluZGV4IiwKICAgICAgICAicmV2ZXJzZSIsCiAgICAgICAgInJldmVyc2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgIkh0bWwudGQiLAogICAgICAgICJEYXRhVGFibGUudmlld0NlbGwiLAogICAgICAgICJkZXRhaWxzIiwKICAgICAgICAidmlld0RhdGEiLAogICAgICAgICJEYXRhVGFibGUudmlld1Jvd0hlbHAiLAogICAgICAgICJ0b1Jvd0F0dHJzIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdSb3ciLAogICAgICAgICJiciIsCiAgICAgICAgImJ5IiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXciLAogICAgICAgICJjb25mIiwKICAgICAgICAicm93cyIsCiAgICAgICAgInRib2R5IiwKICAgICAgICAiY3VzdG9taXphdGlvbnMiLAogICAgICAgICJ3aXRoRm9vdCIsCiAgICAgICAgImF0dHJpYnV0ZXMiLAogICAgICAgICJjaGlsZHJlbiIsCiAgICAgICAgImhlYWRlcnMiLAogICAgICAgICJ0aGVhZERldGFpbHMiLAogICAgICAgICJ0aGVhZCIsCiAgICAgICAgIkV4YW1wbGUuUGFnaW5hdGVkLnZpZXciLAogICAgICAgICJsb3dlclF1ZXJ5IiwKICAgICAgICAicXVlcnkiLAogICAgICAgICJhY2NlcHRhYmxlUGVvcGxlIiwKICAgICAgICAiRXhhbXBsZS5QYWdpbmF0ZWQuU2V0UXVlcnkiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMuY29uZmlnIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHMudmlldyIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5TZXRRdWVyeSIsCiAgICAgICAgIkRvY0Jvb2sudmlldyIsCiAgICAgICAgImlzQWN0aXZlIiwKICAgICAgICAidmFyaWFudHMiLAogICAgICAgICJEb2NCb29rLlN3aXRjaEV4YW1wbGUiLAogICAgICAgICJEb2NCb29rLlByZXNpZGVudHNNc2ciLAogICAgICAgICJEb2NCb29rLlBhZ2luYXRlZE1zZyIsCiAgICAgICAgIkRvY0Jvb2subWFpbiIKICAgIF0sCiAgICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUo0SUpLLDZCQUNJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJRjFCWkMsa0NBQ0lDO0lBNkJKQyxtQ0FDSUM7SUFtT0pDLHNDQUNJQztJR3ZTSkMsc0RBQWFDOzs7VUFFRzs7VUFDWTs7VUFDRDs7VUFDWDs7Ozs7Ozs7Ozs7O0lMUmhCQyxrQ0FDSUM7SUwvQkpDLDRCQUNJ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