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
var $author$project$DataTable$NoPagination = { $: 0 };
var $gren_lang$core$Basics$identity = function(x) {
	return x;
};
var $author$project$DataTable$State = $gren_lang$core$Basics$identity;
var $author$project$DataTable$initialSort = function(header) {
	return { f: '', d: 0, b: $author$project$DataTable$NoPagination, k: [ { ae: header, P: 0 } ], l: 'sortableTable' };
};
var $author$project$Example$Presidents$init = function(people) {
	var model = { bB: people, aM: '', aV: $author$project$DataTable$initialSort('State') };
	return model;
};
var $gren_lang$core$Basics$apR$ = function(x, f) {
	return f(x);
};
var $gren_lang$core$Basics$apR = F2($gren_lang$core$Basics$apR$);
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
var $author$project$Example$PresidentsPaginated$init = function(people) {
	var model = { bB: people, aM: '', aV: $author$project$DataTable$updateActiveRowId$('', $author$project$DataTable$updateSortState$('Year', 0, $author$project$DataTable$setScrollingPaginationWith$(10, [ 0, 5, 25, 50 ], $author$project$DataTable$new('Presidents')))) };
	return model;
};
var $author$project$Example$Presidents$person$ = function(name, year, city, state) {
	return { an: city, i: name, aS: state, a3: year };
};
var $author$project$Example$Presidents$person = F4($author$project$Example$Presidents$person$);
var $author$project$Example$Presidents$presidents = [ $author$project$Example$Presidents$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$Presidents$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$Presidents$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$Presidents$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$Presidents$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$Presidents$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$Presidents$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$Presidents$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$Presidents$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$Presidents$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$Presidents$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$Presidents$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$Presidents$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$Presidents$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$Presidents$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$Presidents$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$Presidents$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$Presidents$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$Presidents$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$Presidents$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$Presidents$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$Presidents$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$Presidents$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$Presidents$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$Presidents$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$Presidents$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$Presidents$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$Presidents$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$Presidents$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$Presidents$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$Presidents$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$Presidents$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$Presidents$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$Presidents$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$Presidents$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$Presidents$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$Presidents$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$Presidents$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$Presidents$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$Presidents$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$Presidents$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$Presidents$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$Example$PresidentsPaginated$person$ = function(name, year, city, state) {
	return { an: city, i: name, aS: state, a3: year };
};
var $author$project$Example$PresidentsPaginated$person = F4($author$project$Example$PresidentsPaginated$person$);
var $author$project$Example$PresidentsPaginated$presidents = [ $author$project$Example$PresidentsPaginated$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Example$PresidentsPaginated$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Example$PresidentsPaginated$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Example$PresidentsPaginated$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Example$PresidentsPaginated$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Example$PresidentsPaginated$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Example$PresidentsPaginated$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Example$PresidentsPaginated$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Example$PresidentsPaginated$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Example$PresidentsPaginated$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Example$PresidentsPaginated$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Example$PresidentsPaginated$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Example$PresidentsPaginated$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Example$PresidentsPaginated$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Example$PresidentsPaginated$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Example$PresidentsPaginated$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Example$PresidentsPaginated$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Example$PresidentsPaginated$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Example$PresidentsPaginated$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Example$PresidentsPaginated$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Example$PresidentsPaginated$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Example$PresidentsPaginated$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Example$PresidentsPaginated$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Example$PresidentsPaginated$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Example$PresidentsPaginated$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Example$PresidentsPaginated$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Example$PresidentsPaginated$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Example$PresidentsPaginated$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Example$PresidentsPaginated$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Example$PresidentsPaginated$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Example$PresidentsPaginated$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$DocBook$init = { C: 0, M: $author$project$Example$PresidentsPaginated$init($author$project$Example$PresidentsPaginated$presidents), N: $author$project$Example$Presidents$init($author$project$Example$Presidents$presidents) };


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
var $author$project$Example$PresidentsPaginated$update$ = function(msg, model) {
	if (!msg.$) {
		var newQuery = msg.a;
		return _Utils_update(model, { aM: newQuery });
	} else {
		var newState = msg.a;
		return _Utils_update(model, { aV: newState });
	}
};
var $author$project$Example$PresidentsPaginated$update = F2($author$project$Example$PresidentsPaginated$update$);
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
			return _Utils_update(model, { M: $author$project$Example$PresidentsPaginated$update$(exampleMsg, function ($) {
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
var $gren_lang$browser$Html$h2 = $gren_lang$browser$Html$node('h2');
var $gren_lang$browser$Html$Attributes$id = $gren_lang$browser$Html$Attributes$stringProperty('id');
var $gren_lang$browser$VirtualDom$map = _VirtualDom_map;
var $gren_lang$browser$Html$map = $gren_lang$browser$VirtualDom$map;
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
var $gren_lang$browser$VirtualDom$text = _VirtualDom_text;
var $gren_lang$browser$Html$text = $gren_lang$browser$VirtualDom$text;
var $author$project$Example$Presidents$SetQuery = function (a) {
	return { $: 0, a: a };
};
var $author$project$Example$Presidents$SetTableState = function (a) {
	return { $: 1, a: a };
};
var $author$project$DataTable$Config = $gren_lang$core$Basics$identity;
var $author$project$DataTable$Desc = 1;
var $gren_lang$browser$VirtualDom$attribute$ = function(key, value) {
	return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
};
var $gren_lang$browser$VirtualDom$attribute = F2($gren_lang$browser$VirtualDom$attribute$);
var $gren_lang$browser$Html$Attributes$attribute = $gren_lang$browser$VirtualDom$attribute;
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
var $gren_lang$browser$Html$Attributes$tabindex = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'tabIndex', $gren_lang$core$String$fromInt(n));
};
var $gren_lang$browser$Html$th = $gren_lang$browser$Html$node('th');
var $gren_lang$browser$Html$tr = $gren_lang$browser$Html$node('tr');
var $author$project$DataTable$defaultTableHeader = function(headerInfos) {
	var defaultTH = function(_v2) {
		var name = _v2.i;
		var selected = _v2.bJ;
		var sortDirections = _v2.aR;
		var clickActions = _v2.bc;
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
		var columnOrder = ($gren_lang$core$Array$length(sortDirections) > 0) ? A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$classList([ { n: 'dt-column-order', o: true } ]), $author$project$Html$Attributes$Aria$label('Click here to sort by this column'), A2($gren_lang$browser$Html$Attributes$attribute, 'role', 'button'), $gren_lang$browser$Html$Attributes$tabindex(0) ], [  ]) : $gren_lang$browser$Html$text('');
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
var $gren_lang$browser$VirtualDom$style = _VirtualDom_style;
var $gren_lang$browser$Html$Attributes$style = $gren_lang$browser$VirtualDom$style;
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
var $gren_lang$browser$Html$h1 = $gren_lang$browser$Html$node('h1');
var $gren_lang$browser$Html$input = $gren_lang$browser$Html$node('input');
var $gren_lang$browser$Html$li = $gren_lang$browser$Html$node('li');
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
var $gren_lang$browser$Html$Attributes$placeholder = $gren_lang$browser$Html$Attributes$stringProperty('placeholder');
var $gren_lang$core$String$toLower = _String_toLower;
var $gren_lang$browser$Html$ul = $gren_lang$browser$Html$node('ul');
var $gren_lang$browser$Html$caption = $gren_lang$browser$Html$node('caption');
var $gren_lang$core$Basics$compare = _Utils_compare;
var $gren_lang$core$Array$slice = _Array_slice;
var $gren_lang$core$Array$dropFirst$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, n, $gren_lang$core$Array$length(array), array);
};
var $gren_lang$core$Array$dropFirst = F2($gren_lang$core$Array$dropFirst$);
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
var $gren_lang$core$Maybe$withDefault$ = function(_default, maybe) {
	if (!maybe.$) {
		var value = maybe.a;
		return value;
	} else {
		return _default;
	}
};
var $gren_lang$core$Maybe$withDefault = F2($gren_lang$core$Maybe$withDefault$);
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
var $gren_lang$browser$Html$Events$onDoubleClick = function(msg) {
	return $gren_lang$browser$Html$Events$on$('dblclick', $gren_lang$core$Json$Decode$succeed(msg));
};
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
	return [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateMultiSortState$(name, sortDirection, state))), $gren_lang$browser$Html$Events$onDoubleClick(toMsg($author$project$DataTable$updateSortState$(name, sortDirection, state))) ];
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
				return $gren_lang$core$Maybe$Just({ P: sortDirection, bM: index });
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
var $author$project$Example$Presidents$view = function(_v0) {
	var people = _v0.bB;
	var tableState = _v0.aV;
	var query = _v0.aM;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.i;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Single click on column header to add/move that column to the end of the sort order (...then sort by Year)') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Double click to reset the sort order to just that column (Sort by Name).') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I don\'t like this user interaction, but it is, what it is for now. Suggestions for change welcome.') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I\'d prefer to make short click reset and long click add to sort order.') ]) ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$Presidents$SetQuery) ], [  ]), $author$project$DataTable$view$($author$project$Example$Presidents$config, tableState, acceptablePeople) ]);
};
var $author$project$Example$PresidentsPaginated$SetQuery = function (a) {
	return { $: 0, a: a };
};
var $author$project$Example$PresidentsPaginated$SetTableState = function (a) {
	return { $: 1, a: a };
};
var $author$project$Example$PresidentsPaginated$config = $author$project$DataTable$config({ ao: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.i;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.a3;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.an;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.aS;
		}) ], a$: function ($) {
		return $.i;
	}, a1: $author$project$Example$PresidentsPaginated$SetTableState });
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
var $author$project$Example$PresidentsPaginated$view = function(_v0) {
	var people = _v0.bB;
	var tableState = _v0.aV;
	var query = _v0.aM;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.i;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Single click on column header to add/move that column to the end of the sort order (...then sort by Year)') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Double click to reset the sort order to just that column (Sort by Name).') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I don\'t like this user interaction, but it is, what it is for now. Suggestions for change welcome.') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I\'d prefer to make short click reset and long click add to sort order.') ]) ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Example$PresidentsPaginated$SetQuery) ], [  ]), $author$project$DataTable$pageLengthChooser$($author$project$Example$PresidentsPaginated$config, tableState), $author$project$DataTable$view$($author$project$Example$PresidentsPaginated$config, tableState, acceptablePeople) ]);
};
var $author$project$DocBook$view = function(model) {
	var isActive = function(variant) {
		return _Utils_eq(model.C, variant) ? $gren_lang$browser$Html$Attributes$class('active') : $gren_lang$browser$Html$Attributes$class('');
	};
	var variants = A2($gren_lang$core$Array$map, function(variant) {
			return A2($gren_lang$browser$Html$button, [ $gren_lang$browser$Html$Events$onClick($author$project$DocBook$SwitchExample(variant)), isActive(variant) ], [ $gren_lang$browser$Html$text($author$project$DocBook$exampleName(variant)) ]);
		}, $author$project$DocBook$buttons);
	return A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$id('wrapper') ], [ A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$id('navigation') ], _Utils_ap([ A2($gren_lang$browser$Html$h2, [  ], [ $gren_lang$browser$Html$text('Examples') ]) ], variants)), A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$id('example') ], [ function () {
				var _v0 = model.C;
				if (!_v0) {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PresidentsMsg, $author$project$Example$Presidents$view(model.N));
				} else {
					return A2($gren_lang$browser$Html$map, $author$project$DocBook$PaginatedMsg, $author$project$Example$PresidentsPaginated$view(model.M));
				}
			}() ]) ]);
};
var $author$project$DocBook$main = $gren_lang$browser$Browser$sandbox({ bn: $author$project$DocBook$init, bR: $author$project$DocBook$update, bS: $author$project$DocBook$view });
_Platform_export({'DocBook':{'init':$author$project$DocBook$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));
//# sourceMappingURL=data:application/json;base64,ewogICAgInZlcnNpb24iOiAzLAogICAgInNvdXJjZXMiOiBbCiAgICAgICAgIkRpY3QiLAogICAgICAgICJBcnJheSIsCiAgICAgICAgIlNldCIsCiAgICAgICAgIkJhc2ljcyIsCiAgICAgICAgIkRhdGFUYWJsZSIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cyIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50c1BhZ2luYXRlZCIsCiAgICAgICAgIkRvY0Jvb2siLAogICAgICAgICJTdHJpbmciLAogICAgICAgICJKc29uLkVuY29kZSIsCiAgICAgICAgIkpzb24uRGVjb2RlIiwKICAgICAgICAiQ2hhciIsCiAgICAgICAgIlJlc3VsdCIsCiAgICAgICAgIlZpcnR1YWxEb20iLAogICAgICAgICJVcmwiLAogICAgICAgICJUYXNrIiwKICAgICAgICAiUGxhdGZvcm0iLAogICAgICAgICJQbGF0Zm9ybS5DbWQiLAogICAgICAgICJQbGF0Zm9ybS5TdWIiLAogICAgICAgICJCcm93c2VyIiwKICAgICAgICAiSHRtbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcyIsCiAgICAgICAgIkh0bWwuRXZlbnRzIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLkFyaWEiLAogICAgICAgICJNYXRoIiwKICAgICAgICAiTWF5YmUiLAogICAgICAgICJIdG1sLktleWVkIgogICAgXSwKICAgICJzb3VyY2VzQ29udGVudCI6IFsKICAgICAgICAibW9kdWxlIERpY3QgZXhwb3NpbmdcbiAgICAoIERpY3RcbiAgICAsIGVtcHR5LCBzaW5nbGV0b24sIHNldCwgdXBkYXRlLCB1cGRhdGVXaXRoRGVmYXVsdCwgcmVtb3ZlXG4gICAgLCBpc0VtcHR5LCBjb3VudCwgZ2V0LCBtZW1iZXIsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuICAgICwga2V5cywgdmFsdWVzXG4gICAgLCBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG4gICAgLCB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmLCBtZXJnZVxuICAgIClcblxuey18IEEgZGljdGlvbmFyeSBtYXBwaW5nIHVuaXF1ZSBrZXlzIHRvIHZhbHVlcy4gVGhlIGtleXMgY2FuIGJlIGFueSBjb21wYXJhYmxlXG50eXBlLiBUaGlzIGluY2x1ZGVzIGBJbnRgLCBgRmxvYXRgLCBgVGltZWAsIGBDaGFyYCBhbmQgYFN0cmluZ2AuXG5cblNldCwgcmVtb3ZlLCBhbmQgcXVlcnkgb3BlcmF0aW9ucyBhbGwgdGFrZSBfTyhsb2cgbilfIHRpbWUuXG5cblxuQGRvY3MgRGljdFxuXG5cbkBkb2NzIGVtcHR5LCBzaW5nbGV0b24sIHNldCwgdXBkYXRlLCB1cGRhdGVXaXRoRGVmYXVsdCwgcmVtb3ZlXG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaXNFbXB0eSwgY291bnQsIGdldCwgbWVtYmVyLCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgYW55LCBhbGxcblxuXG4jIyBBcnJheXNcblxuQGRvY3Mga2V5cywgdmFsdWVzXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cblxuXG4jIyBDb21iaW5lXG5cbkBkb2NzIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmYsIG1lcmdlXG5cbi19XG5cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IE1heWJlIGV4cG9zaW5nICguLilcblxuXG5cbi0tIERJQ1RJT05BUklFU1xuLS0gVGhlIGNvbG9yIG9mIGEgbm9kZS4gTGVhdmVzIGFyZSBjb25zaWRlcmVkIEJsYWNrLlxuXG5cbnR5cGUgTkNvbG9yXG4gICAgPSBSZWRcbiAgICB8IEJsYWNrXG5cblxuey18IEEgZGljdGlvbmFyeSBvZiBrZXlzIGFuZCB2YWx1ZXMuIFNvIGEgYERpY3QgU3RyaW5nIFVzZXJgIGlzIGEgZGljdGlvbmFyeVxudGhhdCBsZXRzIHlvdSBsb29rIHVwIGEgYFN0cmluZ2AgKHN1Y2ggYXMgdXNlciBuYW1lcykgYW5kIGZpbmQgdGhlIGFzc29jaWF0ZWRcbmBVc2VyYC5cblxuICAgIGltcG9ydCBEaWN0IGV4cG9zaW5nICggRGljdCApXG5cbiAgICB1c2VycyA6IERpY3QgU3RyaW5nIFVzZXJcbiAgICB1c2VycyA9XG4gICAgICAgIERpY3QuZW1wdHlcbiAgICAgICAgICAgIHw+IERpY3Quc2V0IFwiQWxpY2VcIiAobWFrZVVzZXIgXCJBbGljZVwiIDI4IDEuNjUpXG4gICAgICAgICAgICB8PiBEaWN0LnNldCBcIkJvYlwiIChtYWtlVXNlciBcIkJvYlwiIDE5IDEuODIpXG4gICAgICAgICAgICB8PiBEaWN0LnNldCBcIkNodWNrXCIgKG1ha2VVc2VyIFwiQ2h1Y2tcIiAzMyAxLjc1KVxuXG4gICAgdHlwZSBhbGlhcyBVc2VyID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nXG4gICAgICAgICwgYWdlIDogSW50XG4gICAgICAgICwgaGVpZ2h0IDogRmxvYXRcbiAgICAgICAgfVxuXG4gICAgbWFrZVVzZXIgOiBTdHJpbmcgLT4gSW50IC0+IEZsb2F0IC0+IFVzZXJcbiAgICBtYWtlVXNlciBuYW1lIGFnZSBoZWlnaHQgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cbi19XG50eXBlIERpY3QgayB2XG4gICAgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgOiBOQ29sb3IsIGtleSA6IGssIHZhbHVlIDogdiwgbGVmdCA6IChEaWN0IGsgdiksIHJpZ2h0IDogKERpY3QgayB2KSB9XG4gICAgfCBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbnstfCBDcmVhdGUgYW4gZW1wdHkgZGljdGlvbmFyeS5cbi19XG5lbXB0eSA6IERpY3QgayB2XG5lbXB0eSA9XG4gICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5ub2RlIDogTkNvbG9yIC0+IGsgLT4gdiAtPiBEaWN0IGsgdiAtPiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxubm9kZSBjb2xvciBrZXkgdmFsdWUgbGVmdCByaWdodCA9XG4gICAgUkJOb2RlX2dyZW5fYnVpbHRpblxuICAgICAgICB7IGNvbG9yID0gY29sb3JcbiAgICAgICAgLCBrZXkgPSBrZXlcbiAgICAgICAgLCB2YWx1ZSA9IHZhbHVlXG4gICAgICAgICwgbGVmdCA9IGxlZnRcbiAgICAgICAgLCByaWdodCA9IHJpZ2h0XG4gICAgICAgIH1cblxuXG57LXwgR2V0IHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggYSBrZXkuIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kLCByZXR1cm5cbmBOb3RoaW5nYC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB5b3UgYXJlIG5vdCBzdXJlIGlmIGEga2V5IHdpbGwgYmUgaW4gdGhlXG5kaWN0aW9uYXJ5LlxuXG4gICAgYW5pbWFscyA9IERpY3QuZW1wdHkgfD4gRGljdC5zZXQgXCJUb21cIiBDYXQgfD4gRGljdC5zZXQgXCJKZXJyeVwiIE1vdXNlXG5cbiAgICBnZXQgXCJUb21cIiAgIGFuaW1hbHMgPT0gSnVzdCBDYXRcbiAgICBnZXQgXCJKZXJyeVwiIGFuaW1hbHMgPT0gSnVzdCBNb3VzZVxuICAgIGdldCBcIlNwaWtlXCIgYW5pbWFscyA9PSBOb3RoaW5nXG5cbi19XG5nZXQgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IE1heWJlIHZcbmdldCB0YXJnZXRLZXkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gY29tcGFyZSB0YXJnZXRLZXkga2V5IGlzXG4gICAgICAgICAgICAgICAgTFQgLT5cbiAgICAgICAgICAgICAgICAgICAgZ2V0IHRhcmdldEtleSBsZWZ0XG5cbiAgICAgICAgICAgICAgICBFUSAtPlxuICAgICAgICAgICAgICAgICAgICBKdXN0IHZhbHVlXG5cbiAgICAgICAgICAgICAgICBHVCAtPlxuICAgICAgICAgICAgICAgICAgICBnZXQgdGFyZ2V0S2V5IHJpZ2h0XG5cblxuey18IERldGVybWluZSBpZiBhIGtleSBpcyBpbiBhIGRpY3Rpb25hcnkuXG4tfVxubWVtYmVyIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBCb29sXG5tZW1iZXIga2V5IGRpY3QgPVxuICAgIHdoZW4gZ2V0IGtleSBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IERldGVybWluZSB0aGUgbnVtYmVyIG9mIGtleS12YWx1ZSBwYWlycyBpbiB0aGUgZGljdGlvbmFyeS5cbi19XG5jb3VudCA6IERpY3QgayB2IC0+IEludFxuY291bnQgZGljdCA9XG4gICAgY291bnRIZWxwIDAgZGljdFxuXG5cbmNvdW50SGVscCA6IEludCAtPiBEaWN0IGsgdiAtPiBJbnRcbmNvdW50SGVscCBuIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBjb3VudEhlbHAgKGNvdW50SGVscCAobiArIDEpIHJpZ2h0KSBsZWZ0XG5cblxuey18IFJldHJpZXZlIHRoZSBmaXJzdCwgb3IgbG93ZXN0LCBrZXktdmFsdWUgcGFpci5cbi19XG5maXJzdCA6IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmZpcnN0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0ID0gUkJFbXB0eV9ncmVuX2J1aWx0aW4gfSAtPlxuICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGxlZnQgfSAtPlxuICAgICAgICAgICAgZmlyc3QgbGVmdFxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgbGFzdCwgb3IgaGlnaGVzdCwga2V5LXZhbHVlIHBhaXIuXG4tfVxubGFzdCA6IERpY3QgayB2IC0+IE1heWJlIHsga2V5IDogaywgdmFsdWUgOiB2IH1cbmxhc3QgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIHJpZ2h0ID0gUkJFbXB0eV9ncmVuX2J1aWx0aW4gfSAtPlxuICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGxhc3QgcmlnaHRcblxuXG57LXwgRmluZCB0aGUgZmlyc3Qga2V5LXZhbHVlIHBhaXIgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZEZpcnN0IDogKGsgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGsgdiAtPiBNYXliZSB7IGtleSA6IGssIHZhbHVlIDogdiB9XG5maW5kRmlyc3QgZm4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gZmluZEZpcnN0IGZuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIGZuIGtleSB2YWx1ZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kRmlyc3QgZm4gcmlnaHRcblxuICAgICAgICAgICAgICAgIGZvdW5kVmFsdWUgLT5cbiAgICAgICAgICAgICAgICAgICAgZm91bmRWYWx1ZVxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IGtleS12YWx1ZSBwYWlyIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRMYXN0IDogKGsgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGsgdiAtPiBNYXliZSB7IGtleSA6IGssIHZhbHVlIDogdiB9XG5maW5kTGFzdCBmbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kTGFzdCBmbiByaWdodCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgZm4ga2V5IHZhbHVlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRMYXN0IGZuIGxlZnRcblxuICAgICAgICAgICAgICAgIGZvdW5kVmFsdWUgLT5cbiAgICAgICAgICAgICAgICAgICAgZm91bmRWYWx1ZVxuXG5cbnstfCBDaGVja3MgaWYgYW55IGtleS12YWx1ZSBwYWlyIGluIHRoZSBkaWN0aW9uYXJ5IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5hbnkgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IEJvb2xcbmFueSBmbiBkaWN0ID1cbiAgICB3aGVuIGZpbmRGaXJzdCBmbiBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IENoZWNrcyBpZiBhbGwga2V5LXZhbHVlIHBhaXJzIGluIHRoZSBkaWN0aW9uYXJ5IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5hbGwgOiAoayAtPiB2IC0+IEJvb2wpIC0+IERpY3QgayB2IC0+IEJvb2xcbmFsbCBmbiBkaWN0ID1cbiAgICB3aGVuIGZpbmRGaXJzdCAoXFxrZXkgdmFsdWUgLT4gbm90IDx8IGZuIGtleSB2YWx1ZSkgZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYSBkaWN0aW9uYXJ5IGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBlbXB0eSA9PSBUcnVlXG5cbi19XG5pc0VtcHR5IDogRGljdCBrIHYgLT4gQm9vbFxuaXNFbXB0eSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IFNldHMgYSB2YWx1ZSBmb3IgYSBnaXZlbiBrZXkuIEV4aXN0aW5nIHZhbHVlcyB3aWxsIGJlIHJlcGxhY2VkLlxuSWYgdGhlIGtleSBpc24ndCBhbHJlYWR5IHJlZ2lzdGVyZWQsIHRoZSBrZXktdmFsdWUgcGFpciB3aWxsIGJlIGluc2VydGVkLlxuLX1cbnNldCA6IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuc2V0IHNldEtleSBzZXRWYWx1ZSBkaWN0ID1cbiAgICAtLSBSb290IG5vZGUgaXMgYWx3YXlzIEJsYWNrXG4gICAgd2hlbiBzZXRIZWxwIHNldEtleSBzZXRWYWx1ZSBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBCbGFjayBrZXkgdmFsdWUgbGVmdCByaWdodFxuXG4gICAgICAgIHggLT5cbiAgICAgICAgICAgIHhcblxuXG5zZXRIZWxwIDogY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5zZXRIZWxwIGtleSB2YWx1ZSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIC0tIE5ldyBub2RlcyBhcmUgYWx3YXlzIHJlZC4gSWYgaXQgdmlvbGF0ZXMgdGhlIHJ1bGVzLCBpdCB3aWxsIGJlIGZpeGVkXG4gICAgICAgICAgICAtLSB3aGVuIGJhbGFuY2luZy5cbiAgICAgICAgICAgIG5vZGUgUmVkIGtleSB2YWx1ZSBSQkVtcHR5X2dyZW5fYnVpbHRpbiBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IG5Db2xvciwga2V5ID0gbktleSwgdmFsdWUgPSBuVmFsdWUsIGxlZnQgPSAgbkxlZnQsIHJpZ2h0ID0gblJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gY29tcGFyZSBrZXkgbktleSBpc1xuICAgICAgICAgICAgICAgIExUIC0+XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgbkNvbG9yIG5LZXkgblZhbHVlIChzZXRIZWxwIGtleSB2YWx1ZSBuTGVmdCkgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICBFUSAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIG5Db2xvciBuS2V5IHZhbHVlIG5MZWZ0IG5SaWdodFxuXG4gICAgICAgICAgICAgICAgR1QgLT5cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBuQ29sb3IgbktleSBuVmFsdWUgbkxlZnQgKHNldEhlbHAga2V5IHZhbHVlIG5SaWdodClcblxuXG5iYWxhbmNlIDogTkNvbG9yIC0+IGsgLT4gdiAtPiBEaWN0IGsgdiAtPiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxuYmFsYW5jZSBjb2xvciBrZXkgdmFsdWUgbGVmdCByaWdodCA9XG4gICAgd2hlbiByaWdodCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IHJLLCB2YWx1ZSA9IHJWLCBsZWZ0ID0gckxlZnQsIHJpZ2h0ID0gclJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIFJlZCBrZXkgdmFsdWUgKG5vZGUgQmxhY2sgbEsgbFYgbExlZnQgbFJpZ2h0KSAobm9kZSBCbGFjayBySyByViByTGVmdCByUmlnaHQpXG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3IgcksgclYgKG5vZGUgUmVkIGtleSB2YWx1ZSBsZWZ0IHJMZWZ0KSByUmlnaHRcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsbEssIHZhbHVlID0gbGxWLCBsZWZ0ID0gbGxMZWZ0LCByaWdodCA9IGxsUmlnaHQgfSwgcmlnaHQgPSBsUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIFJlZCBsSyBsViAobm9kZSBCbGFjayBsbEsgbGxWIGxsTGVmdCBsbFJpZ2h0KSAobm9kZSBCbGFjayBrZXkgdmFsdWUgbFJpZ2h0IHJpZ2h0KVxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0XG5cblxuey18IFJlbW92ZSBhIGtleS12YWx1ZSBwYWlyIGZyb20gYSBkaWN0aW9uYXJ5LiBJZiB0aGUga2V5IGlzIG5vdCBmb3VuZCxcbm5vIGNoYW5nZXMgYXJlIG1hZGUuXG4tfVxucmVtb3ZlIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlIGtleSBkaWN0ID1cbiAgICAtLSBSb290IG5vZGUgaXMgYWx3YXlzIEJsYWNrXG4gICAgd2hlbiByZW1vdmVIZWxwIGtleSBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbktleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgQmxhY2sgbktleSB2YWx1ZSBsZWZ0IHJpZ2h0XG5cbiAgICAgICAgeCAtPlxuICAgICAgICAgICAgeFxuXG5cbnstfCBUaGUgZWFzaWVzdCB0aGluZyB0byByZW1vdmUgZnJvbSB0aGUgdHJlZSwgaXMgYSByZWQgbm9kZS4gSG93ZXZlciwgd2hlbiBzZWFyY2hpbmcgZm9yIHRoZVxubm9kZSB0byByZW1vdmUsIHdlIGhhdmUgbm8gd2F5IG9mIGtub3dpbmcgaWYgaXQgd2lsbCBiZSByZWQgb3Igbm90LiBUaGlzIHJlbW92ZSBpbXBsZW1lbnRhdGlvblxubWFrZXMgc3VyZSB0aGF0IHRoZSBib3R0b20gbm9kZSBpcyByZWQgYnkgbW92aW5nIHJlZCBjb2xvcnMgZG93biB0aGUgdHJlZSB0aHJvdWdoIHJvdGF0aW9uXG5hbmQgY29sb3IgZmxpcHMuIEFueSB2aW9sYXRpb25zIHRoaXMgd2lsbCBjYXVzZSwgY2FuIGVhc2lseSBiZSBmaXhlZCBieSBiYWxhbmNpbmcgb24gdGhlIHdheVxudXAgYWdhaW4uXG4tfVxucmVtb3ZlSGVscCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnJlbW92ZUhlbHAgdGFyZ2V0S2V5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGlmIHRhcmdldEtleSA8IGtleSB0aGVuXG4gICAgICAgICAgICAgICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrLCBsZWZ0ID0gbExlZnQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBsTGVmdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVIZWxwIHRhcmdldEtleSBsZWZ0KSByaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1vdmVSZWRMZWZ0IGRpY3QgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IG5Db2xvciwga2V5ID0gbktleSwgdmFsdWUgPSBuVmFsdWUsIGxlZnQgPSBuTGVmdCwgcmlnaHQgPSBuUmlnaHQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgbkNvbG9yIG5LZXkgblZhbHVlIChyZW1vdmVIZWxwIHRhcmdldEtleSBuTGVmdCkgblJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIGtleSB2YWx1ZSAocmVtb3ZlSGVscCB0YXJnZXRLZXkgbGVmdCkgcmlnaHRcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlbW92ZUhlbHBFUUdUIHRhcmdldEtleSAocmVtb3ZlSGVscFByZXBFUUdUIHRhcmdldEtleSBkaWN0IGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0KVxuXG5cbnJlbW92ZUhlbHBQcmVwRVFHVCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gTkNvbG9yIC0+IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlSGVscFByZXBFUUdUIHRhcmdldEtleSBkaWN0IGNvbG9yIGtleSB2YWx1ZSBsZWZ0IHJpZ2h0ID1cbiAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIGNvbG9yIGxLIGxWIGxMZWZ0IChub2RlIFJlZCBrZXkgdmFsdWUgbFJpZ2h0IHJpZ2h0KVxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIHdoZW4gcmlnaHQgaXNcbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjaywgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrIH0gfSAtPlxuICAgICAgICAgICAgICAgICAgICBtb3ZlUmVkUmlnaHQgZGljdFxuXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2ssIGxlZnQgPSBSQkVtcHR5X2dyZW5fYnVpbHRpbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSZWRSaWdodCBkaWN0XG5cbiAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgIGRpY3RcblxuXG57LXwgV2hlbiB3ZSBmaW5kIHRoZSBub2RlIHdlIGFyZSBsb29raW5nIGZvciwgd2UgY2FuIHJlbW92ZSBieSByZXBsYWNpbmcgdGhlIGtleS12YWx1ZVxucGFpciB3aXRoIHRoZSBrZXktdmFsdWUgcGFpciBvZiB0aGUgbGVmdC1tb3N0IG5vZGUgb24gdGhlIHJpZ2h0IHNpZGUgKHRoZSBjbG9zZXN0IHBhaXIpLlxuLX1cbnJlbW92ZUhlbHBFUUdUIDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxucmVtb3ZlSGVscEVRR1QgdGFyZ2V0S2V5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGlmIHRhcmdldEtleSA9PSBrZXkgdGhlblxuICAgICAgICAgICAgICAgIHdoZW4gZ2V0TWluIHJpZ2h0IGlzXG4gICAgICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXkgPSBtaW5LZXksIHZhbHVlID0gbWluVmFsdWUgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSBjb2xvciBtaW5LZXkgbWluVmFsdWUgbGVmdCAocmVtb3ZlTWluIHJpZ2h0KVxuXG4gICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYmFsYW5jZSBjb2xvciBrZXkgdmFsdWUgbGVmdCAocmVtb3ZlSGVscCB0YXJnZXRLZXkgcmlnaHQpXG5cbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxuZ2V0TWluIDogRGljdCBrIHYgLT4gRGljdCBrIHZcbmdldE1pbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGxlZnQgPSAoKFJCTm9kZV9ncmVuX2J1aWx0aW4gXykgYXMgbGVmdCkgfSAtPlxuICAgICAgICAgICAgZ2V0TWluIGxlZnRcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBkaWN0XG5cblxucmVtb3ZlTWluIDogRGljdCBrIHYgLT4gRGljdCBrIHZcbnJlbW92ZU1pbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0ID0gKChSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBsQ29sb3IsIGxlZnQgPSBsTGVmdCB9KSBhcyBsZWZ0KSwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgd2hlbiBsQ29sb3IgaXNcbiAgICAgICAgICAgICAgICBCbGFjayAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIGxMZWZ0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IHZhbHVlIChyZW1vdmVNaW4gbGVmdCkgcmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbW92ZVJlZExlZnQgZGljdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBuQ29sb3IsIGtleSA9IG5LZXksIHZhbHVlID0gblZhbHVlLCBsZWZ0ID0gbkxlZnQsIHJpZ2h0ID0gblJpZ2h0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgbkNvbG9yIG5LZXkgblZhbHVlIChyZW1vdmVNaW4gbkxlZnQpIG5SaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIGtleSB2YWx1ZSAocmVtb3ZlTWluIGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5tb3ZlUmVkTGVmdCA6IERpY3QgayB2IC0+IERpY3QgayB2XG5tb3ZlUmVkTGVmdCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gY2xyLCBrZXkgPSBrLCB2YWx1ZSA9IHYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBsQ2xyLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9LCByaWdodCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IHJDbHIsIGtleSA9IHJLLCB2YWx1ZSA9IHJWLCBsZWZ0ID0gKFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gcmxLLCB2YWx1ZSA9IHJsViwgbGVmdCA9IHJsTCwgcmlnaHQgPSBybFIgfSkgYXMgckxlZnQsIHJpZ2h0ID0gclJpZ2h0IH0gfSAtPlxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgICAgIFJlZFxuICAgICAgICAgICAgICAgIHJsS1xuICAgICAgICAgICAgICAgIHJsVlxuICAgICAgICAgICAgICAgIChub2RlIEJsYWNrIGsgdiAobm9kZSBSZWQgbEsgbFYgbExlZnQgbFJpZ2h0KSBybEwpXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgcksgclYgcmxSIHJSaWdodClcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgQmxhY2tcbiAgICAgICAgICAgICAgICBrXG4gICAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgICAgIChub2RlIFJlZCBsSyBsViBsTGVmdCBsUmlnaHQpXG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIHJLIHJWIHJMZWZ0IHJSaWdodClcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBkaWN0XG5cblxubW92ZVJlZFJpZ2h0IDogRGljdCBrIHYgLT4gRGljdCBrIHZcbm1vdmVSZWRSaWdodCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gY2xyLCBrZXkgPSBrLCB2YWx1ZSA9IHYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBsQ2xyLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbGxLLCB2YWx1ZSA9IGxsViwgbGVmdCA9IGxsTGVmdCwgcmlnaHQgPSBsbFJpZ2h0IH0sIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgUmVkXG4gICAgICAgICAgICAgICAgbEtcbiAgICAgICAgICAgICAgICBsVlxuICAgICAgICAgICAgICAgIChub2RlIEJsYWNrIGxsSyBsbFYgbGxMZWZ0IGxsUmlnaHQpXG4gICAgICAgICAgICAgICAgKG5vZGUgQmxhY2sgayB2IGxSaWdodCAobm9kZSBSZWQgcksgclYgckxlZnQgclJpZ2h0KSlcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBjbHIsIGtleSA9IGssIHZhbHVlID0gdiwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGxDbHIsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0sIHJpZ2h0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gckNsciwga2V5ID0gckssIHZhbHVlID0gclYsIGxlZnQgPSByTGVmdCwgcmlnaHQgPSByUmlnaHQgfSB9IC0+XG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgQmxhY2tcbiAgICAgICAgICAgICAgICBrXG4gICAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgICAgIChub2RlIFJlZCBsSyBsViBsTGVmdCBsUmlnaHQpXG4gICAgICAgICAgICAgICAgKG5vZGUgUmVkIHJLIHJWIHJMZWZ0IHJSaWdodClcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBkaWN0XG5cblxuey18IFVwZGF0ZSB0aGUgdmFsdWUgb2YgYSBkaWN0aW9uYXJ5IGZvciBhIHNwZWNpZmljIGtleSB3aXRoIGEgZ2l2ZW4gZnVuY3Rpb24uXG4tfVxudXBkYXRlIDogY29tcGFyYWJsZSAtPiAoTWF5YmUgdiAtPiBNYXliZSB2KSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxudXBkYXRlIHRhcmdldEtleSBhbHRlciBkaWN0aW9uYXJ5ID1cbiAgICB3aGVuIGFsdGVyIChnZXQgdGFyZ2V0S2V5IGRpY3Rpb25hcnkpIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIHNldCB0YXJnZXRLZXkgdmFsdWUgZGljdGlvbmFyeVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIHJlbW92ZSB0YXJnZXRLZXkgZGljdGlvbmFyeVxuXG5cbnstfCBTYW1lIGFzIFt1cGRhdGVdKCN1cGRhdGUpIGJ1dCBpZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGRpY3Rpb25hcnksIGEgZGVmYXVsdCB2YWx1ZVxuaXMgcGFzc2VkIHRvIHRoZSBwcm92aWRlZCB1cGRhdGUgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIGBNYXliZWAuXG4tfVxudXBkYXRlV2l0aERlZmF1bHQgOiBjb21wYXJhYmxlIC0+IHYgLT4gKHYgLT4gdikgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnVwZGF0ZVdpdGhEZWZhdWx0IHRhcmdldEtleSBkZWZhdWx0VmFsdWUgYWx0ZXIgZGljdGlvbmFyeSA9XG4gICAgd2hlbiBnZXQgdGFyZ2V0S2V5IGRpY3Rpb25hcnkgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgc2V0IHRhcmdldEtleSAoYWx0ZXIgdmFsdWUpIGRpY3Rpb25hcnlcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBzZXQgdGFyZ2V0S2V5IChhbHRlciBkZWZhdWx0VmFsdWUpIGRpY3Rpb25hcnlcblxuXG57LXwgQ3JlYXRlIGEgZGljdGlvbmFyeSB3aXRoIG9uZSBrZXktdmFsdWUgcGFpci5cbi19XG5zaW5nbGV0b24gOiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnNpbmdsZXRvbiBrZXkgdmFsdWUgPVxuICAgIC0tIFJvb3Qgbm9kZSBpcyBhbHdheXMgQmxhY2tcbiAgICBub2RlIEJsYWNrIGtleSB2YWx1ZSBSQkVtcHR5X2dyZW5fYnVpbHRpbiBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cblxuLS0gQ09NQklORVxuXG5cbnstfCBDb21iaW5lIHR3byBkaWN0aW9uYXJpZXMuIElmIHRoZXJlIGlzIGEgY29sbGlzaW9uLCBwcmVmZXJlbmNlIGlzIGdpdmVuXG50byB0aGUgZmlyc3QgZGljdGlvbmFyeS5cbi19XG51bmlvbiA6IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG51bmlvbiB0MSB0MiA9XG4gICAgZm9sZGwgc2V0IHQyIHQxXG5cblxuey18IEtlZXAgYSBrZXktdmFsdWUgcGFpciB3aGVuIGl0cyBrZXkgYXBwZWFycyBpbiB0aGUgc2Vjb25kIGRpY3Rpb25hcnkuXG5QcmVmZXJlbmNlIGlzIGdpdmVuIHRvIHZhbHVlcyBpbiB0aGUgZmlyc3QgZGljdGlvbmFyeS5cbi19XG5pbnRlcnNlY3QgOiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuaW50ZXJzZWN0IHQxIHQyID1cbiAgICBrZWVwSWYgKFxcayBfIC0+IG1lbWJlciBrIHQyKSB0MVxuXG5cbnstfCBLZWVwIGEga2V5LXZhbHVlIHBhaXIgd2hlbiBpdHMga2V5IGRvZXMgbm90IGFwcGVhciBpbiB0aGUgc2Vjb25kIGRpY3Rpb25hcnkuXG4tfVxuZGlmZiA6IERpY3QgY29tcGFyYWJsZSBhIC0+IERpY3QgY29tcGFyYWJsZSBiIC0+IERpY3QgY29tcGFyYWJsZSBhXG5kaWZmIHQxIHQyID1cbiAgICBmb2xkbCAoXFxrIHYgdCAtPiByZW1vdmUgayB0KSB0MSB0MlxuXG5cblxuLS0gVFJBTlNGT1JNXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gdG8gYWxsIHZhbHVlcyBpbiBhIGRpY3Rpb25hcnkuXG4tfVxubWFwIDogKGsgLT4gYSAtPiBiKSAtPiBEaWN0IGsgYSAtPiBEaWN0IGsgYlxubWFwIGZ1bmMgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgKGZ1bmMga2V5IHZhbHVlKSAobWFwIGZ1bmMgbGVmdCkgKG1hcCBmdW5jIHJpZ2h0KVxuXG5cbnstfCBGb2xkIG92ZXIgdGhlIGtleS12YWx1ZSBwYWlycyBpbiBhIGRpY3Rpb25hcnkgZnJvbSBsb3dlc3Qga2V5IHRvIGhpZ2hlc3Qga2V5LlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG5cbiAgICBnZXRBZ2VzIDogRGljdCBTdHJpbmcgVXNlciAtPiBBcnJheSBTdHJpbmdcbiAgICBnZXRBZ2VzIHVzZXJzID1cbiAgICAgICAgRGljdC5mb2xkbCBhZGRBZ2UgW10gdXNlcnNcblxuICAgIGFkZEFnZSA6IFN0cmluZyAtPiBVc2VyIC0+IEFycmF5IFN0cmluZyAtPiBBcnJheSBTdHJpbmdcbiAgICBhZGRBZ2UgXyB1c2VyIGFnZXMgPVxuICAgICAgICB1c2VyLmFnZSA6OiBhZ2VzXG5cbiAgICAtLSBnZXRBZ2VzIHVzZXJzID09IFszMywxOSwyOF1cblxuLX1cbmZvbGRsIDogKGsgLT4gdiAtPiBiIC0+IGIpIC0+IGIgLT4gRGljdCBrIHYgLT4gYlxuZm9sZGwgZnVuYyBhY2MgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBhY2NcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgZm9sZGwgZnVuYyAoZnVuYyBrZXkgdmFsdWUgKGZvbGRsIGZ1bmMgYWNjIGxlZnQpKSByaWdodFxuXG5cbnstfCBGb2xkIG92ZXIgdGhlIGtleS12YWx1ZSBwYWlycyBpbiBhIGRpY3Rpb25hcnkgZnJvbSBoaWdoZXN0IGtleSB0byBsb3dlc3Qga2V5LlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG5cbiAgICBnZXRBZ2VzIDogRGljdCBTdHJpbmcgVXNlciAtPiBBcnJheSBTdHJpbmdcbiAgICBnZXRBZ2VzIHVzZXJzID1cbiAgICAgICAgRGljdC5mb2xkciBhZGRBZ2UgW10gdXNlcnNcblxuICAgIGFkZEFnZSA6IFN0cmluZyAtPiBVc2VyIC0+IEFycmF5IFN0cmluZyAtPiBBcnJheSBTdHJpbmdcbiAgICBhZGRBZ2UgXyB1c2VyIGFnZXMgPVxuICAgICAgICB1c2VyLmFnZSA6OiBhZ2VzXG5cbiAgICAtLSBnZXRBZ2VzIHVzZXJzID09IFsyOCwxOSwzM11cblxuLX1cbmZvbGRyIDogKGsgLT4gdiAtPiBiIC0+IGIpIC0+IGIgLT4gRGljdCBrIHYgLT4gYlxuZm9sZHIgZnVuYyBhY2MgdCA9XG4gICAgd2hlbiB0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBhY2NcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgZm9sZHIgZnVuYyAoZnVuYyBrZXkgdmFsdWUgKGZvbGRyIGZ1bmMgYWNjIHJpZ2h0KSkgbGVmdFxuXG5cbnstfCBLZWVwIG9ubHkgdGhlIGtleS12YWx1ZSBwYWlycyB0aGF0IHBhc3MgdGhlIGdpdmVuIHRlc3QuXG4tfVxua2VlcElmIDogKGNvbXBhcmFibGUgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxua2VlcElmIGlzR29vZCBkaWN0ID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxrIHYgZCAtPlxuICAgICAgICAgICAgaWYgaXNHb29kIGsgdiB0aGVuXG4gICAgICAgICAgICAgICAgc2V0IGsgdiBkXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkXG4gICAgICAgIClcbiAgICAgICAgZW1wdHlcbiAgICAgICAgZGljdFxuXG5cbnstfCBSZW1vdmUgdW53YW50ZWQgcmVzdWx0cyBvZiBhIG1hcCBvcGVyYXRpb24uXG4tfVxubWFwQW5kS2VlcEp1c3QgOiAoY29tcGFyYWJsZSAtPiB2IC0+IE1heWJlIHgpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB4XG5tYXBBbmRLZWVwSnVzdCB0b01heWJlIGRpY3QgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGsgdiBkIC0+XG4gICAgICAgICAgICB3aGVuIHRvTWF5YmUgayB2IGlzXG4gICAgICAgICAgICAgICAgSnVzdCBuZXdWYWx1ZSAtPlxuICAgICAgICAgICAgICAgICAgICBzZXQgayBuZXdWYWx1ZSBkXG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIGRcbiAgICAgICAgKVxuICAgICAgICBlbXB0eVxuICAgICAgICBkaWN0XG5cblxuey18IFBhcnRpdGlvbiBhIGRpY3Rpb25hcnkgYWNjb3JkaW5nIHRvIHNvbWUgdGVzdC4gVGhlIGZpcnN0IGRpY3Rpb25hcnlcbmNvbnRhaW5zIGFsbCBrZXktdmFsdWUgcGFpcnMgd2hpY2ggcGFzc2VkIHRoZSB0ZXN0LCBhbmQgdGhlIHNlY29uZCBjb250YWluc1xudGhlIHBhaXJzIHRoYXQgZGlkIG5vdC5cbi19XG5wYXJ0aXRpb24gOiAoY29tcGFyYWJsZSAtPiB2IC0+IEJvb2wpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IHsgdHJ1ZXMgOiBEaWN0IGNvbXBhcmFibGUgdiwgZmFsc2VzIDogRGljdCBjb21wYXJhYmxlIHYgfVxucGFydGl0aW9uIGlzR29vZCBkaWN0ID1cbiAgICBsZXRcbiAgICAgICAgYWRkIGtleSB2YWx1ZSB7IHRydWVzLCBmYWxzZXMgfSA9XG4gICAgICAgICAgICBpZiBpc0dvb2Qga2V5IHZhbHVlIHRoZW5cbiAgICAgICAgICAgICAgICB7IHRydWVzID0gc2V0IGtleSB2YWx1ZSB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gZmFsc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBzZXQga2V5IHZhbHVlIGZhbHNlc1xuICAgICAgICAgICAgICAgIH1cbiAgICBpblxuICAgIGZvbGRsIGFkZCB7IHRydWVzID0gZW1wdHksIGZhbHNlcyA9IGVtcHR5IH0gZGljdFxuXG5cblxuLS0gQVJSQVlTXG5cblxuey18IEdldCBhbGwgb2YgdGhlIGtleXMgaW4gYSBkaWN0aW9uYXJ5LCBzb3J0ZWQgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdC5cblxuICAgIGtleXMgKERpY3QuZW1wdHkgfD4gRGljdC5zZXQgMCBcIkFsaWNlXCIgfD4gRGljdC5zZXQgMSBcIkJvYlwiKSA9PSBbIDAsIDEgXVxuXG4tfVxua2V5cyA6IERpY3QgayB2IC0+IEFycmF5IGtcbmtleXMgZGljdCA9XG4gICAgZm9sZGwgKFxca2V5IHZhbHVlIGtleUFycmF5IC0+IEFycmF5LnB1c2hMYXN0IGtleSBrZXlBcnJheSkgW10gZGljdFxuXG5cbnstfCBHZXQgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gYSBkaWN0aW9uYXJ5LCBpbiB0aGUgb3JkZXIgb2YgdGhlaXIga2V5cy5cblxuICAgIHZhbHVlcyAoRGljdC5lbXB0eSB8PiBEaWN0LnNldCAwIFwiQWxpY2VcIiB8PiBEaWN0LnNldCAxIFwiQm9iXCIpID09IFsgXCJBbGljZVwiLCBcIkJvYlwiIF1cblxuLX1cbnZhbHVlcyA6IERpY3QgayB2IC0+IEFycmF5IHZcbnZhbHVlcyBkaWN0ID1cbiAgICBmb2xkbCAoXFxrZXkgdmFsdWUgdmFsdWVBcnJheSAtPiBBcnJheS5wdXNoTGFzdCB2YWx1ZSB2YWx1ZUFycmF5KSBbXSBkaWN0XG5cblxuey18IFRoZSBtb3N0IGdlbmVyYWwgd2F5IG9mIGNvbWJpbmluZyB0d28gZGljdGlvbmFyaWVzLiBZb3UgcHJvdmlkZSB0aHJlZVxuYWNjdW11bGF0b3JzIGZvciB3aGVuIGEgZ2l2ZW4ga2V5IGFwcGVhcnM6XG5cbjEuICBPbmx5IGluIHRoZSBsZWZ0IGRpY3Rpb25hcnkuXG4yLiAgSW4gYm90aCBkaWN0aW9uYXJpZXMuXG4zLiAgT25seSBpbiB0aGUgcmlnaHQgZGljdGlvbmFyeS5cbiAgICBZb3UgdGhlbiB0cmF2ZXJzZSBhbGwgdGhlIGtleXMgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdCwgYnVpbGRpbmcgdXAgd2hhdGV2ZXJcbiAgICB5b3Ugd2FudC5cblxuLX1cbm1lcmdlIDpcbiAgICAoY29tcGFyYWJsZSAtPiBhIC0+IHJlc3VsdCAtPiByZXN1bHQpXG4gICAgLT4gKGNvbXBhcmFibGUgLT4gYSAtPiBiIC0+IHJlc3VsdCAtPiByZXN1bHQpXG4gICAgLT4gKGNvbXBhcmFibGUgLT4gYiAtPiByZXN1bHQgLT4gcmVzdWx0KVxuICAgIC0+IERpY3QgY29tcGFyYWJsZSBhXG4gICAgLT4gRGljdCBjb21wYXJhYmxlIGJcbiAgICAtPiByZXN1bHRcbiAgICAtPiByZXN1bHRcbm1lcmdlIGxlZnRTdGVwIGJvdGhTdGVwIHJpZ2h0U3RlcCBsZWZ0RGljdCByaWdodERpY3QgaW5pdGlhbFJlc3VsdCA9XG4gICAgbGV0XG4gICAgICAgIHN0ZXBTdGF0ZSByS2V5IHJWYWx1ZSB7IGFycmF5LCByZXN1bHQgfSA9XG4gICAgICAgICAgICB3aGVuIEFycmF5LnBvcEZpcnN0IGFycmF5IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSByaWdodFN0ZXAgcktleSByVmFsdWUgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEp1c3QgeyBmaXJzdCA9IHsga2V5ID0gbEtleSwgdmFsdWUgPSBsVmFsdWUgfSwgcmVzdCB9IC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIGxLZXkgPCByS2V5IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBTdGF0ZSByS2V5IHJWYWx1ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gbGVmdFN0ZXAgbEtleSBsVmFsdWUgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgbEtleSA+IHJLZXkgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhcnJheSA9IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IHJpZ2h0U3RlcCByS2V5IHJWYWx1ZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFycmF5ID0gcmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSBib3RoU3RlcCBsS2V5IGxWYWx1ZSByVmFsdWUgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgeyBhcnJheSA9IGxlZnRvdmVycywgcmVzdWx0ID0gaW50ZXJtZWRpYXRlUmVzdWx0IH0gPVxuICAgICAgICAgICAgZm9sZGwgc3RlcFN0YXRlIHsgYXJyYXkgPSBmb2xkbCAoXFxrZXkgdmFsdWUgYXJyYXkgLT4gQXJyYXkucHVzaExhc3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfSBhcnJheSkgW10gbGVmdERpY3QsIHJlc3VsdCA9IGluaXRpYWxSZXN1bHQgfSByaWdodERpY3RcbiAgICBpblxuICAgIEFycmF5LmZvbGRsIChcXHsga2V5LCB2YWx1ZSB9IHJlc3VsdCAtPiBsZWZ0U3RlcCBrZXkgdmFsdWUgcmVzdWx0KSBpbnRlcm1lZGlhdGVSZXN1bHQgbGVmdG92ZXJzXG4iLAogICAgICAgICJtb2R1bGUgQXJyYXkgZXhwb3NpbmdcbiAgICAoIEFycmF5XG4gICAgLCBzaW5nbGV0b24sIGluaXRpYWxpemUsIHJlcGVhdCwgcmFuZ2VcbiAgICAsIG1hcCwgaW5kZXhlZE1hcCwgZm9sZGwsIGZvbGRyLCBpbmRleGVkRm9sZGwsIGluZGV4ZWRGb2xkciwga2VlcElmLCBpbmRleGVkS2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcmV2ZXJzZVxuICAgICwgaXNFbXB0eSwgbGVuZ3RoLCBnZXQsIGZpbmRGaXJzdCwgZmluZExhc3QsIG1lbWJlciwgYW55LCBhbGwsIG1pbmltdW0sIG1heGltdW1cbiAgICAsIHNldCwgc2V0TWFueSwgdXBkYXRlLCBpbnNlcnQsIGluc2VydE1hbnksIHJlbW92ZSwgcmVtb3ZlTWFueSwgcHVzaEZpcnN0LCBwdXNoTGFzdCwgc3BsaWNlXG4gICAgLCBwcmVwZW5kLCBhcHBlbmQsIGZsYXR0ZW4sIG1hcEFuZEZsYXR0ZW4sIGludGVyc3BlcnNlLCBtYXAyLCBtYXAzXG4gICAgLCBmaXJzdCwgbGFzdCwgc2xpY2UsIGRyb3BGaXJzdCwgZHJvcExhc3QsIHRha2VGaXJzdCwgdGFrZUxhc3QsIHBvcEZpcnN0LCBwb3BMYXN0LCBwYXJ0aXRpb25cbiAgICAsIHNvcnQsIHNvcnRCeSwgc29ydFdpdGhcbiAgICApXG5cbnstfCBZb3UgY2FuIGNyZWF0ZSBhbiBgQXJyYXlgIHVzaW5nIHRoZSBgWzEsIDIsIDNdYCBzeW50YXguIFRoaXMgbW9kdWxlIGhhcyBhIGJ1bmNoIG9mXG5mdW5jdGlvbnMgdG8gaGVscCB5b3Ugd29yayB3aXRoIHRoZW0uXG5cbkBkb2NzIEFycmF5XG5cbkBkb2NzIHNpbmdsZXRvbiwgaW5pdGlhbGl6ZSwgcmVwZWF0LCByYW5nZVxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyBtYXAsIGluZGV4ZWRNYXAsIGZvbGRsLCBmb2xkciwgaW5kZXhlZEZvbGRsLCBpbmRleGVkRm9sZHIsIGtlZXBJZiwgaW5kZXhlZEtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHJldmVyc2VcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBpc0VtcHR5LCBsZW5ndGgsIGdldCwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIG1lbWJlciwgYW55LCBhbGwsIG1pbmltdW0sIG1heGltdW1cblxuXG4jIyBNb2RpZnlcblxuQGRvY3Mgc2V0LCBzZXRNYW55LCB1cGRhdGUsIGluc2VydCwgaW5zZXJ0TWFueSwgcmVtb3ZlLCByZW1vdmVNYW55LCBwdXNoRmlyc3QsIHB1c2hMYXN0LCBzcGxpY2VcblxuXG4jIyBDb21iaW5lXG5cbkBkb2NzIHByZXBlbmQsIGFwcGVuZCwgZmxhdHRlbiwgbWFwQW5kRmxhdHRlbiwgaW50ZXJzcGVyc2UsIG1hcDIsIG1hcDNcblxuXG4jIyBEZWNvbnN0cnVjdFxuXG5AZG9jcyBzbGljZSwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgZHJvcEZpcnN0LCBkcm9wTGFzdCwgcG9wRmlyc3QsIHBvcExhc3QsIHBhcnRpdGlvblxuXG5cbiMjIFNvcnRcblxuQGRvY3Mgc29ydCwgc29ydEJ5LCBzb3J0V2l0aFxuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQXJyYXlcblxuXG57LXwgQW4gQXJyYXkgaXMgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLlxuLX1cbnR5cGUgQXJyYXkgYVxuICAgID0gQXJyYXkgYVxuXG5cbi0tIENSRUFURVxuXG5cbnstfCBDcmVhdGUgYW4gYXJyYXkgY29udGFpbmluZyBhIHNpbmdsZSB2YWx1ZS5cbi19XG5zaW5nbGV0b24gOiBhIC0+IEFycmF5IGFcbnNpbmdsZXRvbiBhID1cbiAgICBbIGEgXVxuXG5cbnstfCBDcmVhdGUgYW4gYXJyYXkgb2YgYG5gIGVsZW1lbnRzLCBjb250YWluaW5nIHRoZSBlbGVtZW50c1xucmVzdWx0aW5nIGZyb20gY2FsbGluZyBgZm5gIHdpdGggYG9mZnNldCArIGluZGV4YC5cblxuICAgIGluaXRpYWxpemUgMyA1IGlkZW50aXR5ID09IFsgNSwgNiwgNyBdXG5cbkluIHRoZSBhYm92ZSBleGFtcGxlLCB3ZSBjcmVhdGUgYW4gYXJyYXkgY29udGFpbmluZyAzIGludGVnZXJzXG5zdGFydGluZyBhdCA1LlxuLX1cbmluaXRpYWxpemUgOiBJbnQgLT4gSW50IC0+IChJbnQgLT4gYSkgLT4gQXJyYXkgYVxuaW5pdGlhbGl6ZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5pdGlhbGl6ZVxuXG5cbnstfCBDcmVhdGUgYW4gYXJyYXkgd2l0aCBgbmAgY29waWVzIG9mIGEgdmFsdWU6XG5cbiAgICByZXBlYXQgNSAzID09IFsgMywgMywgMywgMywgMyBdXG5cbi19XG5yZXBlYXQgOiBJbnQgLT4gYSAtPiBBcnJheSBhXG5yZXBlYXQgbiB2YWwgPVxuICAgIGluaXRpYWxpemUgbiAwIChcXF8gLT4gdmFsKVxuXG5cbnstfCBDcmVhdGUgYW4gYXJyYXkgb2YgbnVtYmVycywgZXZlcnkgZWxlbWVudCBpbmNyZWFzaW5nIGJ5IG9uZS4gWW91IGdpdmUgdGhlIGxvd2VzdCBhbmQgaGlnaGVzdCBudW1iZXIgdGhhdCBzaG91bGQgYmUgaW4gdGhlIGFycmF5LlxuXG4gICAgcmFuZ2UgMyA2ID09IFszLCA0LCA1LCA2XVxuICAgIHJhbmdlIDMgMyA9PSBbM11cbiAgICByYW5nZSA2IDMgPT0gW11cblxuLX1cbnJhbmdlIDogSW50IC0+IEludCAtPiBBcnJheSBJbnRcbnJhbmdlIGZyb20gdG8gPVxuICAgIGlmIGZyb20gPiB0byB0aGVuXG4gICAgICAgIFtdXG5cbiAgICBlbHNlIGlmIGZyb20gPT0gdG8gdGhlblxuICAgICAgICBbZnJvbV1cblxuICAgIGVsc2UgXG4gICAgICAgIGluaXRpYWxpemUgKHRvIC0gZnJvbSArIDEpIGZyb20gaWRlbnRpdHlcblxuXG4tLSBUUkFOU0ZPUk1cblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiBvbiBldmVyeSBlbGVtZW50IGluIGFuIGFycmF5LlxuXG4gICAgbWFwIG5lZ2F0ZSBbIDEsIDQsIDkgXSA9PSBbIC0xLCAtNCwgLTkgXVxuXG5TbyBgbWFwIGZ1bmMgWyBhLCBiLCBjIF1gIGlzIHRoZSBzYW1lIGFzIGBbIGZ1bmMgYSwgZnVuYyBiLCBmdW5jIGMgXWBcblxuLX1cbm1hcCA6IChhIC0+IGIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYlxubWFwID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5tYXBcblxuXG57LXwgU2FtZSBhcyBgbWFwYCBidXQgdGhlIGZ1bmN0aW9uIGlzIGFsc28gYXBwbGllZCB0byB0aGUgaW5kZXggb2YgZWFjaCBlbGVtZW50LlxuXG4gICAgaW5kZXhlZE1hcCAoXFxpZHggdmFsIC0+IFtpZHgsIHZhbF0pIFsgMywgMywgMyBdID09IFsgWyAwLCAzIF0sIFsgMSwgMyBdLCBbIDIsIDMgXSBdXG5cbi19XG5pbmRleGVkTWFwIDogKEludCAtPiBhIC0+IGIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYlxuaW5kZXhlZE1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuaW5kZXhlZE1hcFxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIGxlZnQuXG5cbiAgICBmb2xkbCAoKykgMCBbIDEsIDIsIDMgXSA9PSA2XG5cblNvIGBmb2xkbCBzdGVwIHN0YXRlIFsgMSwgMiwgMyBdYCBpcyBsaWtlIHNheWluZzpcblxuICAgIHN0YXRlXG4gICAgICAgIHw+IHN0ZXAgMVxuICAgICAgICB8PiBzdGVwIDJcbiAgICAgICAgfD4gc3RlcCAzXG4tfVxuZm9sZGwgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gQXJyYXkgYSAtPiBiXG5mb2xkbCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZm9sZGxcblxuXG57LXwgUmVkdWNlIHRoZSBhcnJheSBmcm9tIHRoZSByaWdodC4gU2FtZSBhcyBgZm9sZGxgIGJ1dFxudGhlIGV4ZWN1dGlvbiBvcmRlciBpcyByZXZlcnNlZC5cbi19XG5mb2xkciA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBBcnJheSBhIC0+IGJcbmZvbGRyID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mb2xkclxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIGxlZnQuIFRoZSByZWR1Y2luZyBmdW5jdGlvbiBpcyBcbnBhc3NlZCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgdmFsdWUuXG5cbiAgICBpbmRleGVkRm9sZGwgKFxcaWR4IHZhbCBzdW0gLT4gaWR4ICsgdmFsICsgc3VtKSAwIFsgMSwgMiwgMyBdID09IDlcblxuLX1cbmluZGV4ZWRGb2xkbCA6IChJbnQgLT4gYSAtPiBiIC0+IGIpIC0+IGIgLT4gQXJyYXkgYSAtPiBiXG5pbmRleGVkRm9sZGwgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmluZGV4ZWRGb2xkbFxuXG5cbnstfCBSZWR1Y2UgdGhlIGFycmF5IGZyb20gdGhlIHJpZ2h0LiBUaGUgcmVkdWNpbmcgZnVuY3Rpb25cbmlzIHBhc3NlZCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgdmFsdWUuIFNhbWUgYXMgYGluZGV4ZWRGb2xkbGBcbmJ1dCB0aGUgZXhlY3V0aW9uIG9yZGVyIGlzIHJldmVyc2VkLlxuLX1cbmluZGV4ZWRGb2xkciA6IChJbnQgLT4gYSAtPiBiIC0+IGIpIC0+IGIgLT4gQXJyYXkgYSAtPiBiXG5pbmRleGVkRm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmluZGV4ZWRGb2xkclxuXG5cbnstfCBLZWVwIHZhbHVlcyB0aGF0IHBhc3MgdGhlIHRlc3QuXG5cbiAgICBrZWVwSWYgKFxcbiAtPiBuIDwgMykgWyAxLCAyLCAzLCA0IF0gPT0gWyAxLCAyIF1cblxuLX1cbmtlZXBJZiA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxua2VlcElmID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5maWx0ZXJcblxuey18IFNhbWUgYXMgYGtlZXBJZmAgYnV0IHRoZSB0ZXN0IGlzIGFsc28gYXBwbGllZCB0byB0aGUgaW5kZXggb2YgZWFjaCBlbGVtZW50LlxuXG4gICAgaW5kZXhlZEtlZXBJZiAoXFxpZHggdmFsIC0+IGlkeCArIHZhbCA+IDQpIFsgMSwgMiwgMywgNCBdID09IFsgMywgNCBdXG4tfVxuaW5kZXhlZEtlZXBJZiA6IChJbnQgLT4gYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmluZGV4ZWRLZWVwSWYgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmluZGV4ZWRGaWx0ZXJcblxuXG57LXwgUmVtb3ZlIHVud2FudGVkIHJlc3VsdHMgb2YgYSBtYXAgb3BlcmF0aW9uLlxuXG4gICAgbWFwQW5kS2VlcEp1c3QgU3RyaW5nLnRvSW50IFsgXCIzXCIsIFwibm90IGEgbnVtYmVyXCIsIFwiLTVcIiBdID09IFsgMywgLTUgXVxuICAgIG1hcEFuZEtlZXBKdXN0IGlkZW50aXR5IFsgSnVzdCAxLCBOb3RoaW5nIF0gPT0gWyAxIF1cblxuLX1cbm1hcEFuZEtlZXBKdXN0IDogKGEgLT4gTWF5YmUgYikgLT4gQXJyYXkgYSAtPiBBcnJheSBiXG5tYXBBbmRLZWVwSnVzdCBtYXBwZXIgYXJyYXkgPVxuICAgIG1hcEFuZEZsYXR0ZW5cbiAgICAgICAgKFxcdiAtPlxuICAgICAgICAgICAgd2hlbiBtYXBwZXIgdiBpc1xuICAgICAgICAgICAgICAgIEp1c3QgbmV3VmFsdWUgLT5cbiAgICAgICAgICAgICAgICAgICAgWyBuZXdWYWx1ZSBdXG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgIClcbiAgICAgICAgYXJyYXlcblxuXG57LXwgUmV2ZXJzZSBhbiBhcnJheS5cblxuICAgIHJldmVyc2UgWyAxLCAyLCAzIF0gPT0gWyAzLCAyLCAxIF1cblxuLX1cbnJldmVyc2UgOiBBcnJheSBhIC0+IEFycmF5IGFcbnJldmVyc2UgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnJldmVyc2VcblxuXG4tLSBRVUVSWVxuXG5cbnstfCBDaGVjayBpZiBhbiBhcnJheSBpcyBlbXB0eS5cblxuICAgIGlzRW1wdHkgW10gPT0gVHJ1ZVxuICAgIGlzRW1wdHkgWyAxLCAyLCAzIF0gPT0gRmFsc2VcblxuLX1cbmlzRW1wdHkgOiBBcnJheSBhIC0+IEJvb2xcbmlzRW1wdHkgYXJyYXkgPVxuICAgIGxlbmd0aCBhcnJheSA9PSAwXG5cblxuey18IFJldHVybiB0aGUgbGVuZ3RoIG9mIGFuIGFycmF5LlxuXG4gICAgbGVuZ3RoIFsgMSwgMiwgMyBdID09IDNcblxuLX1cbmxlbmd0aCA6IEFycmF5IGEgLT4gSW50XG5sZW5ndGggPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lmxlbmd0aFxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgZWxlbWVudCBhdCBhIGdpdmVuIGluZGV4LCBvciBgTm90aGluZ2AgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5BIG5lZ2F0aXZlIGluZGV4IGxvb2tzIHVwIGFuIGVsZW1lbnQgaW4gcmV2ZXJzZSBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG4gICAgZ2V0IDEgWyAxLCAyLCAzIF0gPT0gSnVzdCAyXG4gICAgZ2V0IDEwIFsgMSwgMiwgMyBdID09IE5vdGhpbmdcbiAgICBnZXQgLTEgWyAxLCAyLCAzIF0gPT0gSnVzdCAzXG5cbi19XG5nZXQgOiBJbnQgLT4gQXJyYXkgYSAtPiBNYXliZSBhXG5nZXQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmdldFxuXG5cbnstfCBGaW5kIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cblxuICAgIGZpbmQgKFxcbiAtPiBuID4gMCkgWyAtMSwgMCwgMSwgMiBdID09IEp1c3QgMVxuXG4tfVxuZmluZEZpcnN0IDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBNYXliZSB7IGluZGV4IDogSW50LCB2YWx1ZSA6IGEgfVxuZmluZEZpcnN0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5maW5kRmlyc3RcblxuXG57LXwgRmluZCB0aGUgbGFzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cblxuICAgIGZpbmQgKFxcbiAtPiBuID4gMCkgWyAtMSwgMCwgMSwgMiBdID09IEp1c3QgMlxuXG4tfVxuZmluZExhc3QgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IE1heWJlIHsgaW5kZXggOiBJbnQsIHZhbHVlIDogYSB9XG5maW5kTGFzdCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZmluZExhc3RcblxuXG57LXwgRmlndXJlIG91dCB3aGV0aGVyIGFuIGFycmF5IGNvbnRhaW5zIGEgdmFsdWUuXG5cbiAgICBtZW1iZXIgOSBbMSwyLDMsNF0gPT0gRmFsc2VcbiAgICBtZW1iZXIgNCBbMSwyLDMsNF0gPT0gVHJ1ZVxuXG4tfVxubWVtYmVyIDogYSAtPiBBcnJheSBhIC0+IEJvb2xcbm1lbWJlciB2YWx1ZSBhcnJheSA9XG4gICAgd2hlbiBmaW5kRmlyc3QgKFxcdiAtPiB2ID09IHZhbHVlKSBhcnJheSBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYW55IGVsZW1lbnRzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbnkgaXNFdmVuIFsyLDNdID09IFRydWVcbiAgICBhbnkgaXNFdmVuIFsxLDNdID09IEZhbHNlXG4gICAgYW55IGlzRXZlbiBbXSA9PSBGYWxzZVxuXG4tfVxuYW55IDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBCb29sXG5hbnkgZm4gYXJyYXkgPVxuICAgIHdoZW4gZmluZEZpcnN0IGZuIGFycmF5IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IERldGVybWluZSBpZiBhbGwgZWxlbWVudHMgcGFzcyB0aGUgdGVzdC5cblxuICAgIGFsbCBpc0V2ZW4gWzIsNF0gPT0gVHJ1ZVxuICAgIGFsbCBpc0V2ZW4gWzIsM10gPT0gRmFsc2VcbiAgICBhbGwgaXNFdmVuIFtdID09IFRydWVcblxuLX1cbmFsbCA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQm9vbFxuYWxsIGZuIGFycmF5ID1cbiAgICB3aGVuIGZpbmRGaXJzdCAobm90IDw8IGZuKSBhcnJheSBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG5cbnstfCBGaW5kIHRoZSBtaW5pbXVtIGVsZW1lbnQgaW4gYSBub24tZW1wdHkgYXJyYXkuXG5cbiAgICBtaW5pbXVtIFszLDIsMV0gPT0gSnVzdCAxXG4gICAgbWluaW11bSBbXSAgICAgID09IE5vdGhpbmdcblxuLX1cbm1pbmltdW0gOiBBcnJheSBjb21wYXJhYmxlIC0+IE1heWJlIGNvbXBhcmFibGVcbm1pbmltdW0gYXJyYXkgPVxuICAgIHdoZW4gZmlyc3QgYXJyYXkgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgdmFsIC0+XG4gICAgICAgICAgICBKdXN0IDx8XG4gICAgICAgICAgICAgICAgZm9sZGxcbiAgICAgICAgICAgICAgICAgICAgKFxcY3VycmVudCBsb3dlc3QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGN1cnJlbnQgPCBsb3dlc3QgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHZhbFxuICAgICAgICAgICAgICAgICAgICBhcnJheVxuXG5cbnstfCBGaW5kIHRoZSBtYXhpbXVtIGVsZW1lbnQgaW4gYSBub24tZW1wdHkgYXJyYXkuXG5cbiAgICBtYXhpbXVtIFszLDIsMV0gPT0gSnVzdCAzXG4gICAgbWF4aW11bSBbXSAgICAgID09IE5vdGhpbmdcblxuLX1cbm1heGltdW0gOiBBcnJheSBjb21wYXJhYmxlIC0+IE1heWJlIGNvbXBhcmFibGVcbm1heGltdW0gYXJyYXkgPVxuICAgIHdoZW4gZmlyc3QgYXJyYXkgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgdmFsIC0+XG4gICAgICAgICAgICBKdXN0IDx8XG4gICAgICAgICAgICAgICAgZm9sZGxcbiAgICAgICAgICAgICAgICAgICAgKFxcY3VycmVudCBoaWdoZXN0IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiBjdXJyZW50ID4gaGlnaGVzdCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHZhbFxuICAgICAgICAgICAgICAgICAgICBhcnJheVxuXG5cbi0tIE1PRElGWVxuXG5cbnstfCBSZXBsYWNlIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCwgb3IgcmV0dXJuIHRoZSBhcnJheSB1bm1vZGlmaWVkIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLlxuUGFzc2luZyBhIG5lZ2F0aXZlIGluZGV4IG1lYW5zIHlvdSB3YW50IHRvIHJlcGxhY2UgYW4gZWxlbWVudCBjb3VudGluZyBiYWNrd2FyZHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuICAgIHNldCAxIDEwIFsgMSwgMiwgMyBdID09IFsgMSwgMTAsIDMgXVxuICAgIHNldCAxMCAxMCBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDMgXVxuICAgIHNldCAtMSAxMCBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDEwIF1cblxuLX1cbnNldCA6IEludCAtPiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc2V0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zZXRcblxuXG57LXwgVGhpcyBmdW5jdGlvbiB3b3JrcyBqdXN0IGxpa2UgW3NldF0oI3NldCkgZXhjZXB0IGl0IHRha2VzIGluIGFuIGFycmF5IG9mIHZhbHVlcyB0byBzZXQsIGFsbG93aW5nIHlvdVxudG8gcmVwbGFjZSBzZXZlcmFsIHZhbHVlcyBhdCBvbmNlLlxuXG5JZiB0aGUgcHJvdmlkZWQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBhdCB0aGUgYmVnaW5uaW5nIChuZWdhdGl2ZSBpbmRleCkgb3IgYXQgdGhlXG5lbmQgKHBvc2l0aXZlIGluZGV4KS5cblxuICAgIHNldE1hbnkgMSBbIDAsIDAgXSBbIDEsIDIsIDMsIDQgXSA9PSBbIDEsIDAsIDAsIDQgXVxuXG4tfVxuc2V0TWFueSA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc2V0TWFueSBpbmRleCB2YWx1ZXMgYXJyYXkgPVxuICAgIHNwbGljZSBpbmRleCAobGVuZ3RoIHZhbHVlcykgdmFsdWVzIGFycmF5XG5cblxuey18IFVwZGF0ZSBhIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleCB1c2luZyBhIGZ1bmN0aW9uLiBJZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgbm90aGluZyBoYXBwZW5zLlxuXG4gICAgdXBkYXRlIDEgKFxcbiAtPiBuICsgMSkgWyAxLCAyLCAzIF0gPT0gWyAxLCAzLCAzIF1cbiAgICB1cGRhdGUgMTAgKFxcbiAtPiBuICsgMSkgWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAzIF1cblxuLX1cbnVwZGF0ZSA6IEludCAtPiAoYSAtPiBhKSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnVwZGF0ZSBpZHggZm4gYXJyYXkgPVxuICAgIHdoZW4gZ2V0IGlkeCBhcnJheSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBhcnJheVxuXG4gICAgICAgIEp1c3QgdmFsIC0+XG4gICAgICAgICAgICBzZXQgaWR4IChmbiB2YWwpIGFycmF5XG5cblxuey18IEluc2VydCBhIG5ldyB2YWx1ZSBpbnRvIHRoZSBhcnJheSBhdCB0aGUgZ2l2ZW4gaW5kZXguIFRoZSB2YWx1ZSBhbHJlYWR5IGF0IHRoZVxuZ2l2ZW4gaW5kZXgsIGFzIHdlbGwgYXMgYWxsIHN1YnNlcXVlbnQgdmFsdWVzLCB3aWxsIGJlIG1vdmVkIG9uZSBzcGFjZSB0byB0aGUgcmlnaHQuXG5cblBhc3NpbmcgYSBuZWdhdGl2ZSBpbmRleCBtZWFucyB5b3Ugd2FudCB0byByZXBsYWNlIGFuIGVsZW1lbnQgY291bnRpbmcgYmFja3dhcmRzIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbklmIHRoZSBwcm92aWRlZCBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCB0aGUgZWxlbWVudCB3aWxsIGJlIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgKG5lZ2F0aXZlIGluZGV4KSBvciBhdCB0aGVcbmVuZCAocG9zaXRpdmUgaW5kZXgpLlxuXG4gICAgaW5zZXJ0IDEgMCBbIDEsIDIsIDMgXSA9PSBbIDEsIDAsIDIsIDMgXVxuXG4tfVxuaW5zZXJ0IDogSW50IC0+IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5pbnNlcnQgaW5kZXggdmFsdWUgYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTEgaW5kZXggMCB2YWx1ZSBhcnJheVxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIHdvcmtzIGp1c3QgbGlrZSBbaW5zZXJ0XSgjaW5zZXJ0KSBidXQgYWxsb3dzIHlvdSB0byBpbnNlcnQgbXVsdGlwbGVcbnZhbHVlcyBhdCBvbmNlLlxuXG4gICAgaW5zZXJ0TWFueSAxIFsgMCwgMCBdIFsgMSwgMiwgMyBdID09IFsgMSwgMCwgMCwgMiwgMyBdXG5cbi19XG5pbnNlcnRNYW55IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5pbnNlcnRNYW55IGluZGV4IHZhbHVlcyBhcnJheSA9XG4gICAgc3BsaWNlIGluZGV4IDAgdmFsdWVzIGFycmF5XG5cblxuey18IFJlbW92ZSBhbiBlbGVtZW50IGZyb20gYW4gYXJyYXkuXG5cblBhc3NpbmcgYSBuZWdhdGl2ZSBpbmRleCBtZWFucyB5b3Ugd2FudCB0byByZXBsYWNlIGFuIGVsZW1lbnQgY291bnRpbmcgYmFja3dhcmRzIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbklmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLCBubyBlbGVtZW50IHdpbGwgYmUgcmVtb3ZlZC5cblxuICAgIHJlbW92ZSAxIFsgMSwgMiwgMyBdID09IFsgMSwgMyBdXG5cbi19XG5yZW1vdmUgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5yZW1vdmUgaW5kZXggYXJyYXkgPVxuICAgIHJlbW92ZU1hbnkgaW5kZXggMSBhcnJheVxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIHdvcmtzIGp1c3QgbGlrZSBbcmVtb3ZlXSgjcmVtb3ZlKSwgZXhjZXB0IGl0IGFsbG93cyB5b3UgdG8gcmVtb3ZlIG11bHRpcGxlIGVsZW1lbnRzIGF0IG9uY2UuXG5cblRoZSBmaXJzdCBhcmd1bWVudCBpcyB0aGUgaW5kZXggZnJvbSB3aGVyZSB0byByZW1vdmUgZWxlbWVudHMgZnJvbSwgdGhlIHNlY29uZCBhcmd1bWVudCBpcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzXG50byByZW1vdmUuXG5cbiAgICByZW1vdmUgMCAyIFsgMSwgMiwgMyBdID09IFsgMyBdXG5cbi19XG5yZW1vdmVNYW55IDogSW50IC0+IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnJlbW92ZU1hbnkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTBcblxuXG57LXwgQWRkIGEgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheS5cblxuICAgIHB1c2hGaXJzdCAxIFtdICAgICAgICAgID09IFsgMSBdXG4gICAgcHVzaEZpcnN0IDUgWyAxLCA0LCA5IF0gPT0gWyA1LCAxLCA0LCA5IF1cblxuLX1cbnB1c2hGaXJzdCA6IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5wdXNoRmlyc3QgdmFsdWUgYXJyYXkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNwbGljZTEgMCAwIHZhbHVlIGFycmF5XG5cblxuey18IEFkZCBhIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG4gICAgcHVzaExhc3QgMSBbXSAgICAgICAgICA9PSBbIDEgXVxuICAgIHB1c2hMYXN0IDUgWyAxLCA0LCA5IF0gPT0gWyAxLCA0LCA5LCA1IF1cblxuLX1cbnB1c2hMYXN0IDogYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnB1c2hMYXN0IHZhbHVlIGFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zcGxpY2UxIChsZW5ndGggYXJyYXkpIDAgdmFsdWUgYXJyYXlcblxuXG57LXwgQWxsb3dzIHlvdSB0byBwZXJmb3JtIG11bHRpcGxlIG1vZGlmaWNhdGlvbnMgaW4gYSBzaW5nbGUgb3BlcmF0aW9uLiBTcGxpY2UgdGFrZXMgYW4gaW5kZXhcbmFzIGl0cyBmaXJzdCBhcmd1bWVudC4gVGhpcyBtYXJrcyB0aGUgcG9pbnQgd2hlcmUgbW9kaWZpY2F0aW9ucyB3aWxsIGJlIHBlcmZvcm1lZC4gVGhlXG5zZWNvbmQgYXJndW1lbnQgaXMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB0byByZW1vdmUuIFRoZSB0aGlyZCBhcmd1bWVudCBpcyB0aGUgZWxlbWVudHMgdGhhdFxud2lsbCBiZSBpbnNlcnRlZC4gVGhlIGFyZ3VtZW50IG9yZGVyIHJlcHJlc2VudHMgdGhlIG9yZGVyIG9mIG1vZGlmaWNhdGlvbnMuIEVsZW1lbnRzIHdpbGwgYmVcbnJlbW92ZWQgYmVmb3JlIG5ldyBlbGVtZW50cyBhcmUgaW5zZXJ0ZWQuXG5cblBhc3NpbmcgYSBuZWdhdGl2ZSBpbmRleCBtZWFucyB5b3Ugd2FudCB0byByZXBsYWNlIGFuIGVsZW1lbnQgY291bnRpbmcgYmFja3dhcmRzIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbklmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzIG5vIGVsZW1lbnRzIHdpbGwgYmUgcmVtb3ZlZCwgYnV0IGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYXQgdGhlXG5iZWdpbm5pbmcgKG5lZ2F0aXZlIGluZGV4KSBvciBhdCB0aGUgZW5kIChwb3NpdGl2ZSBpbmRleCkuXG5cblxuICAgIHNwbGljZSAyIDAgWyAwIF0gWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAwLCAzIF1cbiAgICBzcGxpY2UgMiAxIFsgMCBdIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMCBdXG4gICAgc3BsaWNlIDIgMSBbXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIgXVxuXG4tfVxuc3BsaWNlIDogSW50IC0+IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuc3BsaWNlID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zcGxpY2VOXG5cblxuLS0gQ09NQklORVxuXG5cbnstfCBDb21iaW5lIHR3byBhcnJheXMgc28gdGhhdCB0aGUgZmlyc3QgYXJyYXkgYmVjb21lcyB0aGUgcHJlZml4LFxuYW5kIHRoZSBzZWNvbmQgYXJyYXkgYmVjb21lcyB0aGUgcG9zdGZpeCBvZiB0aGUgcmVzdWx0aW5nIGFycmF5LlxuXG4gICAgcHJlcGVuZCBbIDEsIDIsIDMgXSBbIDQsIDUsIDYgXSA9PSBbIDEsIDIsIDMsIDQsIDUsIDYgXSBcblxuWW91IGNhbiBhbHNvIHVzZSB0aGUgYCsrYCBvcGVyYXRvciBmb3IgdGhpcyBwdXJwb3NlLlxuXG4gICAgWyAxLCAyLCAzIF0gKysgWyA0LCA1LCA2IF0gPT0gWyAxLCAyLCAzLCA0LCA1LCA2IF1cbi19XG5wcmVwZW5kIDogQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnByZXBlbmQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmFwcGVuZFxuXG5cbnstfCBDb21iaW5lIHR3byBhcnJheXMgc28gdGhhdCB0aGUgZmlyc3QgYXJyYXkgYmVjb21lcyB0aGUgcG9zdGZpeCxcbmFuZCB0aGUgc2Vjb25kIGFycmF5IGJlY29tZXMgdGhlIHByZWZpeCBvZiB0aGUgcmVzdWx0aW5nIGFycmF5LlxuXG4gICAgYXBwZW5kIFsgMSwgMiwgMyBdIFsgNCwgNSwgNiBdID09IFsgNCwgNSwgNiwgMSwgMiwgMyBdXG4gICAgXG4tfVxuYXBwZW5kIDogQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmFwcGVuZCBmc3Qgc2Vjb25kID1cbiAgICBwcmVwZW5kIHNlY29uZCBmc3RcblxuXG57LXwgQ29tYmluZSBhIGJ1bmNoIG9mIGFycmF5cyBpbnRvIGEgc2luZ2xlIGFycmF5LlxuXG4gICAgZmxhdHRlbiBbIFsgMSBdLCBbIDIgXSwgWyA0LCA1IF0gXSA9PSBbIDEsIDIsIDQsIDUgXVxuXG4tfVxuZmxhdHRlbiA6IEFycmF5IChBcnJheSBhKSAtPiBBcnJheSBhXG5mbGF0dGVuID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5mbGF0XG5cblxuey18IE1hcCBhIGdpdmVuIGZ1bmN0aW9uIG9udG8gYW4gYXJyYXksIHRoZW4gZmxhdHRlbiB0aGUgcmVzdWx0aW5nIGFycmF5LlxuXG4gICAgbWFwQW5kRmxhdHRlbiBmIHhzID09IGZsYXR0ZW4gKG1hcCBmIHhzKVxuXG4tfVxubWFwQW5kRmxhdHRlbiA6IChhIC0+IEFycmF5IGIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYlxubWFwQW5kRmxhdHRlbiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZmxhdE1hcFxuXG5cbnstfCBQbGFjZXMgdGhlIGdpdmVuIHZhbHVlIGJldHdlZW4gYWxsIG1lbWJlcnMgb2YgdGhlIGdpdmVuIGFycmF5LlxuXG4gICAgaW50ZXJzcGVyc2UgXCJvblwiIFsgXCJ0dXJ0bGVzXCIsIFwidHVydGxlc1wiLCBcInR1cnRsZXNcIl0gPT0gWyBcInR1cnRsZXNcIiwgXCJvblwiLCBcInR1cnRsZXNcIiwgXCJvblwiLCBcInR1cnRsZXNcIl1cblxuLX1cbmludGVyc3BlcnNlIDogYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmludGVyc3BlcnNlIHNlcCB4cyA9XG4gICAgd2hlbiBwb3BGaXJzdCB4cyBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBbXVxuXG4gICAgICAgIEp1c3QgeyBmaXJzdCA9IGhlYWQsIHJlc3QgPSB0YWlsIH0gLT5cbiAgICAgICAgICAgIHB1c2hGaXJzdCBoZWFkIDx8IG1hcEFuZEZsYXR0ZW4gKFxcdmFsIC0+IFsgc2VwLCB2YWwgXSkgdGFpbFxuXG5cbnstfCBDb21iaW5lIHR3byBhcnJheXMsIGNvbWJpbmluZyB0aGVtIHdpdGggdGhlIGdpdmVuIGZ1bmN0aW9uLlxuSWYgb25lIGFycmF5IGlzIGxvbmdlciwgdGhlIGV4dHJhIGVsZW1lbnRzIGFyZSBkcm9wcGVkLlxuXG4gICAgbWFwMiAoXFx4IHkgLT4geyB4ID0geCwgeSA9IHkgfSkgWyAxIF0gWyAyIF0gPT0gWyB7IHggPSAxLCB5ID0gMiB9IF1cbi19XG5tYXAyIDogKGEgLT4gYiAtPiByZXN1bHQpIC0+IEFycmF5IGEgLT4gQXJyYXkgYiAtPiBBcnJheSByZXN1bHRcbm1hcDIgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lm1hcDJcblxuXG57LXwgQ29tYmluZSB0aHJlZSBhcnJheXMsIGNvbWJpbmluZyB0aGVtIHdpdGggdGhlIGdpdmVuIGZ1bmN0aW9uLlxuSWYgb25lIGFycmF5IGlzIGxvbmdlciwgdGhlIGV4dHJhIGVsZW1lbnRzIGFyZSBkcm9wcGVkLlxuXG4gICAgbWFwMyAoXFx4IHkgeiAtPiB7IHggPSB4LCB5ID0geSwgeiA9IHogfSkgWyAxIF0gWyAyIF0gWyAzIF0gPT0gWyB7IHggPSAxLCB5ID0gMiwgeiA9IDMgfSBdXG4tfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiByZXN1bHQpIC0+IEFycmF5IGEgLT4gQXJyYXkgYiAtPiBBcnJheSBjIC0+IEFycmF5IHJlc3VsdFxubWFwMyA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubWFwM1xuXG5cbi0tIERFQ09OU1RSVUNUXG5cblxuey18IFJldHJpZXZlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSwgaWYgaXQgZXhpc3RzLlxuXG4gICAgZmlyc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCAxXG5cbi19XG5maXJzdCA6IEFycmF5IGEgLT4gTWF5YmUgYVxuZmlyc3QgYXJyYXkgPVxuICAgIGdldCAwIGFycmF5XG5cblxuey18IFJldHJpZXZlIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5LCBpZiBpdCBleGlzdHMuXG5cbiAgICBsYXN0IFsgMSwgMiwgMyBdID09IEp1c3QgM1xuXG4tfVxubGFzdCA6IEFycmF5IGEgLT4gTWF5YmUgYVxubGFzdCBhcnJheSA9XG4gICAgZ2V0IC0xIGFycmF5XG5cblxuey18IEdldCBhIHN1YiBzZWN0aW9uIG9mIGFuIGFycmF5OiBgKHNsaWNlIHN0YXJ0IGVuZCBhcnJheSlgLlxuXG5UaGUgYHN0YXJ0YCBpcyBhIHplcm8tYmFzZWQgaW5kZXggd2hlcmUgd2Ugd2lsbCBzdGFydCBvdXIgc2xpY2UuXG5UaGUgYGVuZGAgaXMgYSB6ZXJvLWJhc2VkIGluZGV4IHRoYXQgaW5kaWNhdGVzIHRoZSBlbmQgb2YgdGhlIHNsaWNlLlxuVGhlIHNsaWNlIGV4dHJhY3RzIHVwIHRvLCBidXQgbm8gaW5jbHVkaW5nLCB0aGUgYGVuZGAuXG5cbkJvdGggYHN0YXJ0YCBhbmQgYGVuZGAgY2FuIGJlIG5lZ2F0aXZlLCBpbmRpY2F0aW5nIGFuIG9mZnNldCBmcm9tIHRoZSBlbmRcbm9mIHRoZSBhcnJheS4gUmVtb3ZpbmcgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgY2FuIGJlIGV4cHJlc3NlZCBhczpcblxuICAgIGBzbGljZSAwIC0xIGFycmAuXG5cbkluIHRoZSBjYXNlIG9mIGFuIGltcG9zc2libGUgc2xpY2UsIHRoZSBlbXB0eSBhcnJheSBpcyByZXR1cm5lZC5cblxuLX1cbnNsaWNlIDogSW50IC0+IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNsaWNlID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zbGljZVxuXG5cbnstfCBSZW1vdmUgdGhlIGZpcnN0IGBuYCBlbGVtZW50cyBvZiB0aGUgYXJyYXkuXG5cbiAgICBkcm9wRmlyc3QgNSBbIDEgXSA9PSBbXVxuICAgIGRyb3BGaXJzdCAxIFsgMSwgMiwgMyBdID09IFsgMiwgMyBdXG5cbi19XG5kcm9wRmlyc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5kcm9wRmlyc3QgbiBhcnJheSA9XG4gICAgc2xpY2UgbiAobGVuZ3RoIGFycmF5KSBhcnJheVxuXG5cbnstfCBSZW1vdmUgdGhlIGxhc3QgYG5gIGVsZW1lbnRzIG9mIHRoZSBhcnJheS5cblxuICAgIGRyb3BMYXN0IDEgWyAxLCAyLCAzIF0gPT0gWyAxLCAyIF1cblxuLX1cbmRyb3BMYXN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuZHJvcExhc3QgbiBhcnJheSA9XG4gICAgc2xpY2UgMCAobGVuZ3RoIGFycmF5IC0gbikgYXJyYXlcblxuXG57LXwgVGFrZSB0aGUgZmlyc3QgYG5gIGVsZW1lbnRzIGZyb20gdGhlIGFycmF5LlxuXG4gICAgdGFrZUZpcnN0IDIgWyAxLCAyLCAzIF0gPT0gWyAxLCAyIF1cblxuLX1cbnRha2VGaXJzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnRha2VGaXJzdCBuIGFycmF5ID1cbiAgICBzbGljZSAwIG4gYXJyYXlcblxuXG57LXwgVGFrZSB0aGUgbGFzdCBgbmAgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXkuXG5cbiAgICB0YWtlTGFzdCAyIFsgMSwgMiwgMyBdID09IFsgMiwgMyBdXG5cbi19XG50YWtlTGFzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnRha2VMYXN0IG4gYXJyYXkgPVxuICAgIGxldFxuICAgICAgICBsZW4gPVxuICAgICAgICAgICAgbGVuZ3RoIGFycmF5XG4gICAgaW5cbiAgICBzbGljZSAobGVuIC0gbikgbGVuIGFycmF5XG5cblxuey18IFNwbGl0IGFuIGFycmF5IGludG8gaXRzIGZpcnN0IGVsZW1lbnQsIGFuZCBpdHMgcmVtYWluaW5nIGVsZW1lbnRzLCBpZiBwb3NzaWJsZS5cblxuICAgIHBvcEZpcnN0IFsgMSwgMiwgMyBdID09IEp1c3QgeyBmaXJzdCA9IDEsIHJlc3QgPSBbIDIsIDMgXSB9XG5cbi19XG5wb3BGaXJzdCA6IEFycmF5IGEgLT4gTWF5YmUgeyBmaXJzdCA6IGEsIHJlc3QgOiBBcnJheSBhIH1cbnBvcEZpcnN0IGFycmF5ID1cbiAgICB3aGVuIGZpcnN0IGFycmF5IGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIEp1c3RcbiAgICAgICAgICAgICAgICB7IGZpcnN0ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAsIHJlc3QgPSBkcm9wRmlyc3QgMSBhcnJheVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IFNwbGl0IGFuIGFycmF5IGludG8gaXRzIGxhc3QgZWxlbWVudCwgYW5kIGl0cyByZW1haW5pbmcgZWxlbWVudHMsIGlmIHBvc3NpYmxlLlxuXG4gICAgcG9wRmlyc3QgWyAxLCAyLCAzIF0gPT0gSnVzdCB7IGxhc3QgPSAzLCBpbml0aWFsID0gWyAxLCAyIF0gfVxuXG4tfVxucG9wTGFzdCA6IEFycmF5IGEgLT4gTWF5YmUgeyBsYXN0IDogYSwgaW5pdGlhbCA6IEFycmF5IGEgfVxucG9wTGFzdCBhcnJheSA9XG4gICAgd2hlbiBsYXN0IGFycmF5IGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIEp1c3RcbiAgICAgICAgICAgICAgICB7IGxhc3QgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICwgaW5pdGlhbCA9IGRyb3BMYXN0IDEgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBEaXZpZGUgZWxlbWVudHMgaW50byB0d28gYXJyYXlzIGJhc2VkIG9uIHRoZSByZXN1bHQgb2YgYSBib29sZWFuIHRlc3QuXG5cbiAgICBwYXJ0aXRpb24gKFxceCAtPiB4IDwgMykgWyAwLCAxLCAyLCAzLCA0LCA1IF0gPT0geyB0cnVlcyA9IFsgMCwgMSwgMiBdLCBmYWxzZXMgPSBbIDMsIDQsIDUgXSB9XG5cbi19XG5wYXJ0aXRpb24gOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IHsgdHJ1ZXMgOiBBcnJheSBhLCBmYWxzZXMgOiBBcnJheSBhIH1cbnBhcnRpdGlvbiBmbiBhcnJheSA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcdmFsIHsgdHJ1ZXMsIGZhbHNlcyB9IC0+XG4gICAgICAgICAgICBpZiBmbiB2YWwgdGhlblxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSBwdXNoTGFzdCB2YWwgdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IGZhbHNlc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gcHVzaExhc3QgdmFsIGZhbHNlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICB7IHRydWVzID0gW10sIGZhbHNlcyA9IFtdIH1cbiAgICAgICAgYXJyYXlcblxuXG4tLSBTT1JUXG5cblxuey18IFNvcnQgdmFsdWVzIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3RcblxuICAgIHNvcnQgWyAzLCAxLCA1IF0gPT0gWyAxLCAzLCA1IF1cblxuLX1cbnNvcnQgOiBBcnJheSBjb21wYXJhYmxlIC0+IEFycmF5IGNvbXBhcmFibGVcbnNvcnQgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNvcnRcblxuXG57LXwgU29ydCB2YWx1ZXMgYnkgYSBkZXJpdmVkIHByb3BlcnR5LlxuXG4gICAgc29ydEJ5IFN0cmluZy5sZW5ndGggWyBcIm1vdXNlXCIsIFwiY2F0XCIgXSA9PSBbIFwiY2F0XCIsIFwibW91c2VcIiBdXG5cbi19XG5zb3J0QnkgOiAoYSAtPiBjb21wYXJhYmxlKSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNvcnRCeSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc29ydEJ5XG5cblxuey18IFNvcnQgdmFsdWVzIHdpdGggYSBjdXN0b20gY29tcGFyaXNvbiBmdW5jdGlvbi5cblxuICAgIHNvcnRXaXRoIGZsaXBwZWRDb21wYXJpc29uIFsxLDIsMyw0LDVdID09IFs1LDQsMywyLDFdXG5cbiAgICBmbGlwcGVkQ29tcGFyaXNvbiBhIGIgPVxuICAgICAgICB3aGVuIGNvbXBhcmUgYSBiIGlzXG4gICAgICAgICAgTFQgLT4gR1RcbiAgICAgICAgICBFUSAtPiBFUVxuICAgICAgICAgIEdUIC0+IExUXG5cblRoaXMgaXMgYWxzbyB0aGUgbW9zdCBnZW5lcmFsIHNvcnQgZnVuY3Rpb24sIGFsbG93aW5nIHlvdSB0byBkZWZpbmUgYW55IG90aGVyOiBgc29ydCA9PSBzb3J0V2l0aCBjb21wYXJlYFxuXG4tfVxuc29ydFdpdGggOiAoYSAtPiBhIC0+IE9yZGVyKSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNvcnRXaXRoID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zb3J0V2l0aFxuXG4iLAogICAgICAgICJtb2R1bGUgU2V0IGV4cG9zaW5nXG4gICAgKCBTZXRcbiAgICAsIGVtcHR5LCBzaW5nbGV0b24sIHNldCwgcmVtb3ZlLCB0b2dnbGVcbiAgICAsIGlzRW1wdHksIG1lbWJlciwgY291bnQsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuICAgICwgdW5pb24sIGludGVyc2VjdCwgZGlmZlxuICAgICwgdG9BcnJheSwgZnJvbUFycmF5XG4gICAgLCBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG4gICAgKVxuXG57LXwgQSBzZXQgb2YgdW5pcXVlIHZhbHVlcy4gVGhlIHZhbHVlcyBjYW4gYmUgYW55IGNvbXBhcmFibGUgdHlwZS4gVGhpc1xuaW5jbHVkZXMgYEludGAsIGBGbG9hdGAsIGBUaW1lYCwgYENoYXJgLCBgU3RyaW5nYCwgYW5kIHR1cGxlcyBvciBhcnJheXNcbm9mIGNvbXBhcmFibGUgdHlwZXMuXG5cblNldCwgcmVtb3ZlLCBhbmQgcXVlcnkgb3BlcmF0aW9ucyBhbGwgdGFrZSBfTyhsb2cgbilfIHRpbWUuXG5cblxuQGRvY3MgU2V0XG5cblxuQGRvY3MgZW1wdHksIHNpbmdsZXRvbiwgc2V0LCByZW1vdmUsIHRvZ2dsZVxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGlzRW1wdHksIG1lbWJlciwgY291bnQsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBhbnksIGFsbFxuXG5cbiMjIENvbWJpbmVcblxuQGRvY3MgdW5pb24sIGludGVyc2VjdCwgZGlmZlxuXG5cbiMjIEFycmF5c1xuXG5AZG9jcyB0b0FycmF5LCBmcm9tQXJyYXlcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3MgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgRGljdFxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2YgdW5pcXVlIHZhbHVlcy4gU28gYChTZXQgSW50KWAgaXMgYSBzZXQgb2YgaW50ZWdlcnMgYW5kXG5gKFNldCBTdHJpbmcpYCBpcyBhIHNldCBvZiBzdHJpbmdzLlxuLX1cbnR5cGUgU2V0IHRcbiAgICA9IFNldF9ncmVuX2J1aWx0aW4gKERpY3QuRGljdCB0IHt9KVxuXG5cbnstfCBDcmVhdGUgYW4gZW1wdHkgc2V0LlxuLX1cbmVtcHR5IDogU2V0IGFcbmVtcHR5ID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIERpY3QuZW1wdHlcblxuXG57LXwgQ3JlYXRlIGEgc2V0IHdpdGggb25lIHZhbHVlLlxuLX1cbnNpbmdsZXRvbiA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnNpbmdsZXRvbiBrZXkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3Quc2luZ2xldG9uIGtleSB7fSlcblxuXG57LXwgU2V0IGEgdmFsdWUgaW50byBhIHNldC5cbi19XG5zZXQgOiBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5zZXQga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LnNldCBrZXkge30gZGljdClcblxuXG57LXwgUmVtb3ZlIGEgdmFsdWUgZnJvbSBhIHNldC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBmb3VuZCwgbm8gY2hhbmdlcyBhcmUgbWFkZS5cbi19XG5yZW1vdmUgOiBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5yZW1vdmUga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LnJlbW92ZSBrZXkgZGljdClcblxuXG57LXwgVG9nZ2xlIGEgdmFsdWUgaW4gYSBzZXQuIElmIHRoZSB2YWx1ZSBpc24ndCBpbiB0aGUgc2V0LCBpdCBpcyBhZGRlZC4gSWYgdGhlXG52YWx1ZSBpcyBpbiB0aGUgc2V0LCBpdCBpcyByZW1vdmVkLlxuLX1cbnRvZ2dsZSA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbnRvZ2dsZSBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIHdoZW4gRGljdC5nZXQga2V5IGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBTZXRfZ3Jlbl9idWlsdGluIDx8IERpY3QucmVtb3ZlIGtleSBkaWN0XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgU2V0X2dyZW5fYnVpbHRpbiA8fCBEaWN0LnNldCBrZXkge30gZGljdFxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYSBzZXQgaXMgZW1wdHkuXG4tfVxuaXNFbXB0eSA6IFNldCBhIC0+IEJvb2xcbmlzRW1wdHkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuaXNFbXB0eSBkaWN0XG5cblxuey18IERldGVybWluZSBpZiBhIHZhbHVlIGlzIGluIGEgc2V0LlxuLX1cbm1lbWJlciA6IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gQm9vbFxubWVtYmVyIGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5tZW1iZXIga2V5IGRpY3RcblxuXG57LXwgRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBzZXQuXG4tfVxuY291bnQgOiBTZXQgYSAtPiBJbnRcbmNvdW50IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmNvdW50IGRpY3RcblxuXG57LXwgR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBzZXQuXG4tfVxuZmlyc3QgOiBTZXQgYSAtPiBNYXliZSBhXG5maXJzdCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QuZmlyc3QgZGljdClcblxuXG57LXwgR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIHNldC5cbi19XG5sYXN0IDogU2V0IGEgLT4gTWF5YmUgYVxubGFzdCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QubGFzdCBkaWN0KVxuXG5cbnstfCBGaW5kIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kRmlyc3QgOiAoYSAtPiBCb29sKSAtPiBTZXQgYSAtPiBNYXliZSBhXG5maW5kRmlyc3QgZm4gKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIE1heWJlLm1hcCAua2V5IChEaWN0LmZpbmRGaXJzdCAoXFxrZXkgXyAtPiBmbiBrZXkpIGRpY3QpXG5cblxuey18IEZpbmQgdGhlIGxhc3QgdmFsdWUgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZExhc3QgOiAoYSAtPiBCb29sKSAtPiBTZXQgYSAtPiBNYXliZSBhXG5maW5kTGFzdCBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgTWF5YmUubWFwIC5rZXkgKERpY3QuZmluZExhc3QgKFxca2V5IF8gLT4gZm4ga2V5KSBkaWN0KVxuXG5cbnstfCBDaGVja3MgaWYgYW55IHZhbHVlIGluIHRoZSBzZXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFueSA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IEJvb2xcbmFueSBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5hbnkgKFxca2V5IF8gLT4gZm4ga2V5KSBkaWN0XG5cblxuey18IENoZWNrcyBpZiBhbGwgdmFsdWVzIGluIHRoZSBzZXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmFsbCA6IChhIC0+IEJvb2wpIC0+IFNldCBhIC0+IEJvb2xcbmFsbCBmbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5hbGwgKFxca2V5IF8gLT4gZm4ga2V5KSBkaWN0XG5cblxuey18IEdldCB0aGUgdW5pb24gb2YgdHdvIHNldHMuIEtlZXAgYWxsIHZhbHVlcy5cbi19XG51bmlvbiA6IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG51bmlvbiAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MSkgKFNldF9ncmVuX2J1aWx0aW4gZGljdDIpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LnVuaW9uIGRpY3QxIGRpY3QyKVxuXG5cbnstfCBHZXQgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gc2V0cy4gS2VlcHMgdmFsdWVzIHRoYXQgYXBwZWFyIGluIGJvdGggc2V0cy5cbi19XG5pbnRlcnNlY3QgOiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuaW50ZXJzZWN0IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QxKSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MikgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QuaW50ZXJzZWN0IGRpY3QxIGRpY3QyKVxuXG5cbnstfCBHZXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZmlyc3Qgc2V0IGFuZCB0aGUgc2Vjb25kLiBLZWVwcyB2YWx1ZXNcbnRoYXQgZG8gbm90IGFwcGVhciBpbiB0aGUgc2Vjb25kIHNldC5cbi19XG5kaWZmIDogU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbmRpZmYgKFNldF9ncmVuX2J1aWx0aW4gZGljdDEpIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QyKSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5kaWZmIGRpY3QxIGRpY3QyKVxuXG5cbnstfCBDb252ZXJ0IGEgc2V0IGludG8gYW4gYXJyYXksIHNvcnRlZCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxuLX1cbnRvQXJyYXkgOiBTZXQgYSAtPiBBcnJheSBhXG50b0FycmF5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmtleXMgZGljdFxuXG5cbnstfCBDb252ZXJ0IGFuIGFycmF5IGludG8gYSBzZXQsIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzLlxuLX1cbmZyb21BcnJheSA6IEFycmF5IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbmZyb21BcnJheSBhcnJheSA9XG4gICAgQXJyYXkuZm9sZGwgc2V0IGVtcHR5IGFycmF5XG5cblxuey18IEZvbGQgb3ZlciB0aGUgdmFsdWVzIGluIGEgc2V0LCBpbiBvcmRlciBmcm9tIGxvd2VzdCB0byBoaWdoZXN0LlxuLX1cbmZvbGRsIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IFNldCBhIC0+IGJcbmZvbGRsIGZ1bmMgaW5pdGlhbFN0YXRlIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmZvbGRsIChcXGtleSBfIHN0YXRlIC0+IGZ1bmMga2V5IHN0YXRlKSBpbml0aWFsU3RhdGUgZGljdFxuXG5cbnstfCBGb2xkIG92ZXIgdGhlIHZhbHVlcyBpbiBhIHNldCwgaW4gb3JkZXIgZnJvbSBoaWdoZXN0IHRvIGxvd2VzdC5cbi19XG5mb2xkciA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBTZXQgYSAtPiBiXG5mb2xkciBmdW5jIGluaXRpYWxTdGF0ZSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5mb2xkciAoXFxrZXkgXyBzdGF0ZSAtPiBmdW5jIGtleSBzdGF0ZSkgaW5pdGlhbFN0YXRlIGRpY3RcblxuXG57LXwgTWFwIGEgZnVuY3Rpb24gb250byBhIHNldCwgY3JlYXRpbmcgYSBuZXcgc2V0IHdpdGggbm8gZHVwbGljYXRlcy5cbi19XG5tYXAgOiAoY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlMikgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUyXG5tYXAgZnVuYyBjb2xsID1cbiAgICBmb2xkbCAoXFx4IHhzIC0+IHNldCAoZnVuYyB4KSB4cykgZW1wdHkgY29sbFxuXG5cbnstfCBPbmx5IGtlZXAgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSBnaXZlbiB0ZXN0LlxuXG4gICAgaW1wb3J0IFNldCBleHBvc2luZyAoU2V0KVxuXG4gICAgbnVtYmVycyA6IFNldCBJbnRcbiAgICBudW1iZXJzID1cbiAgICAgICAgU2V0LmZyb21BcnJheSBbIC0yLCAtMSwgMCwgMSwgMiBdXG5cbiAgICBwb3NpdGl2ZXMgOiBTZXQgSW50XG4gICAgcG9zaXRpdmVzID1cbiAgICAgICAgU2V0LmtlZXBJZiAoXFx4IC0+IHggPiAwKSBudW1iZXJzXG5cbiAgICAtLSBwb3NpdGl2ZXMgPT0gU2V0LmZyb21BcnJheSBbMSwyXVxuXG4tfVxua2VlcElmIDogKGNvbXBhcmFibGUgLT4gQm9vbCkgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbmtlZXBJZiBpc0dvb2QgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3Qua2VlcElmIChcXGtleSBfIC0+IGlzR29vZCBrZXkpIGRpY3QpXG5cblxuey18IFJlbW92ZSB1bndhbnRlZCByZXN1bHRzIG9mIGEgbWFwIG9wZXJhdGlvbi5cbiAgICBcbiAgICBpbXBvcnQgU2V0XG5cbiAgICBzdHJpbmdzIDogU2V0IFN0cmluZ1xuICAgIHN0cmluZ3MgPVxuICAgICAgICBTZXQuZnJvbUFycmF5IFsgXCIzXCIsIFwibm90IGEgbnVtYmVyXCIsIFwiLTVcIiBdXG5cbiAgICBudW1iZXJzIDogU2V0IEludFxuICAgIG51bWJlcnMgPVxuICAgICAgICBTZXQubWFwQW5kS2VlcEp1c3QgU3RyaW5nLnRvSW50IHN0cmluZ3NcblxuICAgIC0tIG51bWJlcnMgPT0gU2V0LmZyb21BcnJheSBbIDMsIC01IF1cbi19XG5tYXBBbmRLZWVwSnVzdCA6IChjb21wYXJhYmxlIC0+IE1heWJlIGNvbXBhcmFibGUyKSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZTJcbm1hcEFuZEtlZXBKdXN0IHRvTWF5YmUgY29sbCA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcb2xkIG5ld3MgLT5cbiAgICAgICAgICAgIHdoZW4gdG9NYXliZSBvbGQgaXNcbiAgICAgICAgICAgICAgICBKdXN0IG5ldyAtPlxuICAgICAgICAgICAgICAgICAgICBzZXQgbmV3IG5ld3NcblxuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgbmV3c1xuICAgICAgICApXG4gICAgICAgIGVtcHR5XG4gICAgICAgIGNvbGxcblxuXG57LXwgQ3JlYXRlIHR3byBuZXcgc2V0cy4gVGhlIGZpcnN0IGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzZWQgdGhlXG5naXZlbiB0ZXN0LCBhbmQgdGhlIHNlY29uZCBjb250YWlucyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgZGlkIG5vdC5cbi19XG5wYXJ0aXRpb24gOiAoY29tcGFyYWJsZSAtPiBCb29sKSAtPiBTZXQgY29tcGFyYWJsZSAtPiB7IHRydWVzIDogU2V0IGNvbXBhcmFibGUsIGZhbHNlcyA6IFNldCBjb21wYXJhYmxlIH1cbnBhcnRpdGlvbiBpc0dvb2QgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIGxldFxuICAgICAgICB7IHRydWVzLCBmYWxzZXMgfSA9XG4gICAgICAgICAgICBEaWN0LnBhcnRpdGlvbiAoXFxrZXkgXyAtPiBpc0dvb2Qga2V5KSBkaWN0XG4gICAgaW5cbiAgICB7IHRydWVzID0gU2V0X2dyZW5fYnVpbHRpbiB0cnVlc1xuICAgICwgZmFsc2VzID0gU2V0X2dyZW5fYnVpbHRpbiBmYWxzZXNcbiAgICB9XG4iLAogICAgICAgICJtb2R1bGUgQmFzaWNzIGV4cG9zaW5nXG4gICAgKCBJbnQsICgrKSwgKC0pLCAoKiksICgvKSwgKC8vKSwgKF4pLCBuZWdhdGVcbiAgICAsIEZsb2F0LCB0b0Zsb2F0LCBpc05hTiwgaXNJbmZpbml0ZVxuICAgICwgKD09KSwgKC89KVxuICAgICwgKDwpLCAoPiksICg8PSksICg+PSksIG1heCwgbWluLCBjbGFtcCwgY29tcGFyZSwgT3JkZXIoLi4pXG4gICAgLCBCb29sKC4uKSwgbm90LCAoJiYpLCAofHwpLCB4b3JcbiAgICAsICgrKylcbiAgICAsIGlkZW50aXR5LCAoPHwpLCAofD4pLCAoPDwpLCAoPj4pLCBOZXZlciwgbmV2ZXJcbiAgICApXG5cbnstfCBUb25zIG9mIHVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBnZXQgaW1wb3J0ZWQgYnkgZGVmYXVsdC5cblxuXG4jIyBOdW1iZXJzXG5cbkBkb2NzIEludCwgKCspLCAoLSksICgqKSwgKC8pLCAoLy8pLCAoXiksIG5lZ2F0ZVxuXG5cbiMjIEZsb2F0XG5cbkBkb2NzIEZsb2F0LCB0b0Zsb2F0LCBpc05hTiwgaXNJbmZpbml0ZVxuXG5cbiMjIEVxdWFsaXR5XG5cbkBkb2NzICg9PSksICgvPSlcblxuXG4jIyBDb21wYXJpc29uXG5cblRoZXNlIGZ1bmN0aW9ucyBvbmx5IHdvcmsgb24gYGNvbXBhcmFibGVgIHR5cGVzLiBUaGlzIGluY2x1ZGVzIG51bWJlcnMsXG5jaGFyYWN0ZXJzLCBzdHJpbmdzIGFuZCBhcnJheXMgb2YgY29tcGFyYWJsZSB0aGluZ3MuXG5cbkBkb2NzIE9yZGVyLCAoPCksICg+KSwgKDw9KSwgKD49KSwgbWF4LCBtaW4sIGNsYW1wLCBjb21wYXJlXG5cblxuIyMgQm9vbGVhbnNcblxuQGRvY3MgQm9vbCwgbm90LCAoJiYpLCAofHwpLCB4b3JcblxuXG4jIyBBcHBlbmQgU3RyaW5ncyBhbmQgQXJyYXlzXG5cbkBkb2NzICgrKylcblxuXG4jIyBGdW5jdGlvbiBIZWxwZXJzXG5cbkBkb2NzIGlkZW50aXR5LCAoPHwpLCAofD4pLCAoPDwpLCAoPj4pLCBOZXZlciwgbmV2ZXJcblxuLX1cblxuaW1wb3J0IEdyZW4uS2VybmVsLkJhc2ljc1xuaW1wb3J0IEdyZW4uS2VybmVsLlV0aWxzXG5cblxuXG4tLSBJTkZJWCBPUEVSQVRPUlNcblxuXG5pbmZpeCByaWdodCAwICg8fCkgPSBhcExcbmluZml4IGxlZnQgIDAgKHw+KSA9IGFwUlxuaW5maXggcmlnaHQgMiAofHwpID0gb3JcbmluZml4IHJpZ2h0IDMgKCYmKSA9IGFuZFxuaW5maXggbm9uICAgNCAoPT0pID0gZXFcbmluZml4IG5vbiAgIDQgKC89KSA9IG5lcVxuaW5maXggbm9uICAgNCAoPCkgPSBsdFxuaW5maXggbm9uICAgNCAoPikgPSBndFxuaW5maXggbm9uICAgNCAoPD0pID0gbGVcbmluZml4IG5vbiAgIDQgKD49KSA9IGdlXG5pbmZpeCByaWdodCA1ICgrKykgPSBhcHBlbmRcbmluZml4IGxlZnQgIDYgKCspID0gYWRkXG5pbmZpeCBsZWZ0ICA2ICgtKSA9IHN1YlxuaW5maXggbGVmdCAgNyAoKikgPSBtdWxcbmluZml4IGxlZnQgIDcgKC8pID0gZmRpdlxuaW5maXggbGVmdCAgNyAoLy8pID0gaWRpdlxuaW5maXggcmlnaHQgOCAoXikgPSBwb3dcbmluZml4IGxlZnQgIDkgKDw8KSA9IGNvbXBvc2VMXG5pbmZpeCByaWdodCA5ICg+PikgPSBjb21wb3NlUlxuXG5cblxuLS0gTUFUSEVNQVRJQ1NcblxuXG57LXwgQW4gYEludGAgaXMgYSB3aG9sZSBudW1iZXIuIFZhbGlkIHN5bnRheCBmb3IgaW50ZWdlcnMgaW5jbHVkZXM6XG5cbiAgICAwXG5cbiAgICA0MlxuXG4gICAgOTAwMFxuXG4gICAgMHhGRiAtLSAyNTUgaW4gaGV4YWRlY2ltYWxcblxuICAgIDB4MEEgLS0gIDEwIGluIGhleGFkZWNpbWFsXG5cbioqTm90ZToqKiBgSW50YCBtYXRoIGlzIHdlbGwtZGVmaW5lZCBpbiB0aGUgcmFuZ2UgYC0yXjMxYCB0byBgMl4zMSAtIDFgLiBPdXRzaWRlXG5vZiB0aGF0IHJhbmdlLCB0aGUgYmVoYXZpb3IgaXMgZGV0ZXJtaW5lZCBieSB0aGUgY29tcGlsYXRpb24gdGFyZ2V0LiBXaGVuXG5nZW5lcmF0aW5nIEphdmFTY3JpcHQsIHRoZSBzYWZlIHJhbmdlIGV4cGFuZHMgdG8gYC0oMl41MyAtIDEpYCB0byBgMl41MyAtIDFgIGZvciBzb21lXG5vcGVyYXRpb25zLCBidXQgaWYgd2UgZ2VuZXJhdGUgV2ViQXNzZW1ibHkgc29tZSBkYXksIHdlIHdvdWxkIGRvIHRoZSB0cmFkaXRpb25hbFxuW2ludGVnZXIgb3ZlcmZsb3ddW2lvXS4gVGhpcyBxdWlyayBpcyBuZWNlc3NhcnkgdG8gZ2V0IGdvb2QgcGVyZm9ybWFuY2Ugb25cbnF1aXJreSBjb21waWxhdGlvbiB0YXJnZXRzLlxuXG4qKkhpc3RvcmljYWwgTm90ZToqKiBUaGUgbmFtZSBgSW50YCBjb21lcyBmcm9tIHRoZSB0ZXJtIFtpbnRlZ2VyXS4gSXQgYXBwZWFyc1xudGhhdCB0aGUgYGludGAgYWJicmV2aWF0aW9uIHdhcyBpbnRyb2R1Y2VkIGluIFtBTEdPTCA2OF1bNjhdLCBzaG9ydGVuaW5nIGl0XG5mcm9tIGBpbnRlZ2VyYCBpbiBbQUxHT0wgNjBdWzYwXS4gVG9kYXksIGFsbW9zdCBhbGwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIHVzZVxudGhpcyBhYmJyZXZpYXRpb24uXG5cbltpb106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVnZXJfb3ZlcmZsb3dcbltpbnRlZ2VyXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZWdlclxuWzYwXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQUxHT0xfNjBcbls2OF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FMR09MXzY4XG5cbi19XG50eXBlIEludFxuICAgID0gSW50IC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG57LXwgQSBgRmxvYXRgIGlzIGEgW2Zsb2F0aW5nLXBvaW50IG51bWJlcl1bZnBdLiBWYWxpZCBzeW50YXggZm9yIGZsb2F0cyBpbmNsdWRlczpcblxuICAgIDBcbiAgICA0MlxuICAgIDMuMTRcbiAgICAwLjEyMzRcbiAgICA2LjAyMmUyMyAgIC0tID09ICg2LjAyMiAqIDEwXjIzKVxuICAgIDYuMDIyZSsyMyAgLS0gPT0gKDYuMDIyICogMTBeMjMpXG4gICAgMS42MDJl4oiSMTkgIC0tID09ICgxLjYwMiAqIDEwXi0xOSlcbiAgICAxZTMgICAgICAgIC0tID09ICgxICogMTBeMykgPT0gMTAwMFxuXG4qKkhpc3RvcmljYWwgTm90ZToqKiBUaGUgcGFydGljdWxhciBkZXRhaWxzIG9mIGZsb2F0cyAoZS5nLiBgTmFOYCkgYXJlXG5zcGVjaWZpZWQgYnkgW0lFRUUgNzU0XVtpZWVlXSB3aGljaCBpcyBsaXRlcmFsbHkgaGFyZC1jb2RlZCBpbnRvIGFsbW9zdCBhbGxcbkNQVXMgaW4gdGhlIHdvcmxkLiBUaGF0IG1lYW5zIGlmIHlvdSB0aGluayBgTmFOYCBpcyB3ZWlyZCwgeW91IG11c3RcbnN1Y2Nlc3NmdWxseSBvdmVydGFrZSBJbnRlbCBhbmQgQU1EIHdpdGggYSBjaGlwIHRoYXQgaXMgbm90IGJhY2t3YXJkc1xuY29tcGF0aWJsZSB3aXRoIGFueSB3aWRlbHktdXNlZCBhc3NlbWJseSBsYW5ndWFnZS5cblxuW2ZwXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmxvYXRpbmctcG9pbnRfYXJpdGhtZXRpY1xuW2llZWVdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JRUVFXzc1NFxuXG4tfVxudHlwZSBGbG9hdFxuICAgID0gRmxvYXQgLS0gTk9URTogVGhlIGNvbXBpbGVyIHByb3ZpZGVzIHRoZSByZWFsIGltcGxlbWVudGF0aW9uLlxuXG5cbnstfCBBZGQgdHdvIG51bWJlcnMuIFRoZSBgbnVtYmVyYCB0eXBlIHZhcmlhYmxlIG1lYW5zIHRoaXMgb3BlcmF0aW9uIGNhbiBiZVxuc3BlY2lhbGl6ZWQgdG8gYEludCAtPiBJbnQgLT4gSW50YCBvciB0byBgRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRgLiBTbyB5b3VcbmNhbiBkbyB0aGluZ3MgbGlrZSB0aGlzOlxuXG4gICAgMzAwMiArIDQwMDQgPT0gNzAwNiAtLSBhbGwgaW50c1xuXG4gICAgMy4xNCArIDMuMTQgPT0gNi4yOCAtLSBhbGwgZmxvYXRzXG5cbllvdSBfY2Fubm90XyBhZGQgYW4gYEludGAgYW5kIGEgYEZsb2F0YCBkaXJlY3RseSB0aG91Z2guIFVzZSBmdW5jdGlvbnMgbGlrZVxuW3RvRmxvYXRdKCN0b0Zsb2F0KSBvciBbcm91bmRdKCNyb3VuZCkgdG8gY29udmVydCBib3RoIHZhbHVlcyB0byB0aGUgc2FtZSB0eXBlLlxuU28gaWYgeW91IG5lZWRlZCB0byBhZGQgYSBhcnJheSBsZW5ndGggdG8gYSBgRmxvYXRgIGZvciBzb21lIHJlYXNvbiwgeW91XG5jb3VsZCBzYXkgb25lIG9mIHRoZXNlOlxuXG4gICAgMy4xNCArIHRvRmxvYXQgKEFycmF5Lmxlbmd0aCBbIDEsIDIsIDMgXSkgPT0gNi4xNFxuXG4gICAgcm91bmQgMy4xNCArIEFycmF5Lmxlbmd0aCBbIDEsIDIsIDMgXSA9PSA2XG5cbioqTm90ZToqKiBMYW5ndWFnZXMgbGlrZSBKYXZhIGFuZCBKYXZhU2NyaXB0IGF1dG9tYXRpY2FsbHkgY29udmVydCBgSW50YCB2YWx1ZXNcbnRvIGBGbG9hdGAgdmFsdWVzIHdoZW4geW91IG1peCBhbmQgbWF0Y2guIFRoaXMgY2FuIG1ha2UgaXQgZGlmZmljdWx0IHRvIGJlIHN1cmVcbmV4YWN0bHkgd2hhdCB0eXBlIG9mIG51bWJlciB5b3UgYXJlIGRlYWxpbmcgd2l0aC4gV2hlbiB5b3UgdHJ5IHRvIF9pbmZlcl8gdGhlc2VcbmNvbnZlcnNpb25zIChhcyBTY2FsYSBkb2VzKSBpdCBjYW4gYmUgZXZlbiBtb3JlIGNvbmZ1c2luZy4gR3JlbiBoYXMgb3B0ZWQgZm9yIGFcbmRlc2lnbiB0aGF0IG1ha2VzIGFsbCBjb252ZXJzaW9ucyBleHBsaWNpdC5cblxuLX1cbmFkZCA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5hZGQgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5hZGRcblxuXG57LXwgU3VidHJhY3QgbnVtYmVycyBsaWtlIGA0IC0gMyA9PSAxYC5cblxuU2VlIFtgKCspYF0oIyspIGZvciBkb2NzIG9uIHRoZSBgbnVtYmVyYCB0eXBlIHZhcmlhYmxlLlxuXG4tfVxuc3ViIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbnN1YiA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLnN1YlxuXG5cbnstfCBNdWx0aXBseSBudW1iZXJzIGxpa2UgYDIgKiAzID09IDZgLlxuXG5TZWUgW2AoKylgXSgjKykgZm9yIGRvY3Mgb24gdGhlIGBudW1iZXJgIHR5cGUgdmFyaWFibGUuXG5cbi19XG5tdWwgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxubXVsID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MubXVsXG5cblxuey18IEZsb2F0aW5nLXBvaW50IGRpdmlzaW9uOlxuXG4gICAgMTAgLyA0ID09IDIuNVxuXG4gICAgMTEgLyA0ID09IDIuNzVcblxuICAgIDEyIC8gNCA9PSAzXG5cbiAgICAxMyAvIDQgPT0gMy4yNVxuXG4gICAgMTRcbiAgICAgICAgLyA0XG4gICAgICAgID09IDMuNVxuICAgICAgICAtIDFcbiAgICAgICAgLyA0XG4gICAgICAgID09IC0wLjI1XG4gICAgICAgIC0gNVxuICAgICAgICAvIDRcbiAgICAgICAgPT0gLTEuMjVcblxuLX1cbmZkaXYgOiBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdFxuZmRpdiA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmZkaXZcblxuXG57LXwgSW50ZWdlciBkaXZpc2lvbjpcblxuICAgIDEwIC8vIDQgPT0gMlxuXG4gICAgMTEgLy8gNCA9PSAyXG5cbiAgICAxMiAvLyA0ID09IDNcblxuICAgIDEzIC8vIDQgPT0gM1xuXG4gICAgMTRcbiAgICAgICAgLy8gNFxuICAgICAgICA9PSAzXG4gICAgICAgIC0gMVxuICAgICAgICAvLyA0XG4gICAgICAgID09IDBcbiAgICAgICAgLSA1XG4gICAgICAgIC8vIDRcbiAgICAgICAgPT0gLTFcblxuTm90aWNlIHRoYXQgdGhlIHJlbWFpbmRlciBpcyBkaXNjYXJkZWQsIHNvIGAzIC8vIDRgIGlzIGdpdmluZyBvdXRwdXRcbnNpbWlsYXIgdG8gYHRydW5jYXRlICgzIC8gNClgLlxuXG5JdCBtYXkgc29tZXRpbWVzIGJlIHVzZWZ1bCB0byBwYWlyIHRoaXMgd2l0aCB0aGUgW2ByZW1haW5kZXJCeWBdKCNyZW1haW5kZXJCeSlcbmZ1bmN0aW9uLlxuXG4tfVxuaWRpdiA6IEludCAtPiBJbnQgLT4gSW50XG5pZGl2ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuaWRpdlxuXG5cbnstfCBFeHBvbmVudGlhdGlvblxuXG4gICAgMyBeIDIgPT0gOVxuXG4gICAgMyBeIDMgPT0gMjdcblxuLX1cbnBvdyA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5wb3cgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5wb3dcblxuXG57LXwgTmVnYXRlIGEgbnVtYmVyLlxuXG4gICAgbmVnYXRlIDQyID09IC00MlxuXG4gICAgbmVnYXRlIC00MiA9PSA0MlxuXG4gICAgbmVnYXRlIDAgPT0gMFxuXG4tfVxubmVnYXRlIDogbnVtYmVyIC0+IG51bWJlclxubmVnYXRlIG4gPVxuICAgIC1uXG5cblxuLS0gSU5UIFRPIEZMT0FUIC8gRkxPQVQgVE8gSU5UXG5cblxuey18IENvbnZlcnQgYW4gaW50ZWdlciBpbnRvIGEgZmxvYXQuIFVzZWZ1bCB3aGVuIG1peGluZyBgSW50YCBhbmQgYEZsb2F0YFxudmFsdWVzIGxpa2UgdGhpczpcblxuICAgIGhhbGZPZiA6IEludCAtPiBGbG9hdFxuICAgIGhhbGZPZiBudW1iZXIgPVxuICAgICAgICB0b0Zsb2F0IG51bWJlciAvIDJcblxuLX1cbnRvRmxvYXQgOiBJbnQgLT4gRmxvYXRcbnRvRmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy50b0Zsb2F0XG5cblxuXG4tLSBFUVVBTElUWVxuXG5cbnstfCBDaGVjayBpZiB2YWx1ZXMgYXJlICZsZHF1bzt0aGUgc2FtZSZyZHF1bzsuXG5cbioqTm90ZToqKiBHcmVuIHVzZXMgc3RydWN0dXJhbCBlcXVhbGl0eSBvbiB0dXBsZXMsIHJlY29yZHMsIGFuZCB1c2VyLWRlZmluZWRcbnVuaW9uIHR5cGVzLiBUaGlzIG1lYW5zIHRoZSB2YWx1ZXMgYCgzLCA0KWAgYW5kIGAoMywgNClgIGFyZSBkZWZpbml0ZWx5IGVxdWFsLlxuVGhpcyBpcyBub3QgdHJ1ZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhU2NyaXB0IHRoYXQgdXNlIHJlZmVyZW5jZSBlcXVhbGl0eSBvblxub2JqZWN0cy5cblxuKipOb3RlOioqIERvIG5vdCB1c2UgYCg9PSlgIHdpdGggZnVuY3Rpb25zLCBKU09OIHZhbHVlcyBmcm9tIGBncmVuL2pzb25gLCBvclxucmVndWxhciBleHByZXNzaW9ucyBmcm9tIGBncmVuL3JlZ2V4YC4gSXQgZG9lcyBub3Qgd29yay4gSXQgd2lsbCBjcmFzaCBpZlxucG9zc2libGUuIFdpdGggSlNPTiB2YWx1ZXMsIGRlY29kZSB0byBHcmVuIHZhbHVlcyBiZWZvcmUgZG9pbmcgYW55IGVxdWFsaXR5XG5jaGVja3MhXG5cbldoeSBpcyBpdCBsaWtlIHRoaXM/IEVxdWFsaXR5IGluIHRoZSBHcmVuIHNlbnNlIGNhbiBiZSBkaWZmaWN1bHQgb3IgaW1wb3NzaWJsZVxudG8gY29tcHV0ZS4gUHJvdmluZyB0aGF0IGZ1bmN0aW9ucyBhcmUgdGhlIHNhbWUgaXMgW3VuZGVjaWRhYmxlXSwgYW5kIEpTT05cbnZhbHVlcyBjYW4gY29tZSBpbiB0aHJvdWdoIHBvcnRzIGFuZCBoYXZlIGZ1bmN0aW9ucywgY3ljbGVzLCBhbmQgbmV3IEpTIGRhdGFcbnR5cGVzIHRoYXQgaW50ZXJhY3Qgd2VpcmRseSB3aXRoIG91ciBlcXVhbGl0eSBpbXBsZW1lbnRhdGlvbi4gSW4gYSBmdXR1cmVcbnJlbGVhc2UsIHRoZSBjb21waWxlciB3aWxsIGRldGVjdCB3aGVuIGAoPT0pYCBpcyB1c2VkIHdpdGggcHJvYmxlbWF0aWMgdHlwZXNcbmFuZCBwcm92aWRlIGEgaGVscGZ1bCBlcnJvciBtZXNzYWdlIGF0IGNvbXBpbGUgdGltZS4gVGhpcyB3aWxsIHJlcXVpcmUgc29tZVxucHJldHR5IHNlcmlvdXMgaW5mcmFzdHJ1Y3R1cmUgd29yaywgc28gdGhlIHN0b3BnYXAgaXMgdG8gY3Jhc2ggYXMgcXVpY2tseSBhc1xucG9zc2libGUuXG5cblt1bmRlY2lkYWJsZV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuZGVjaWRhYmxlX3Byb2JsZW1cblxuLX1cbmVxIDogYSAtPiBhIC0+IEJvb2xcbmVxID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5lcXVhbFxuXG5cbnstfCBDaGVjayBpZiB2YWx1ZXMgYXJlIG5vdCAmbGRxdW87dGhlIHNhbWUmcmRxdW87LlxuXG5TbyBgKGEgLz0gYilgIGlzIHRoZSBzYW1lIGFzIGAobm90IChhID09IGIpKWAuXG5cbi19XG5uZXEgOiBhIC0+IGEgLT4gQm9vbFxubmVxID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5ub3RFcXVhbFxuXG5cblxuLS0gQ09NUEFSSVNPTlNcblxuXG57LXwgLX1cbmx0IDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmx0ID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5sdFxuXG5cbnstfCAtfVxuZ3QgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxuZ3QgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmd0XG5cblxuey18IC19XG5sZSA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5sZSA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMubGVcblxuXG57LXwgLX1cbmdlIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmdlID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5nZVxuXG5cbnstfCBGaW5kIHRoZSBzbWFsbGVyIG9mIHR3byBjb21wYXJhYmxlcy5cblxuICAgIG1pbiA0MiAxMjM0NTY3OCA9PSA0MlxuXG4gICAgbWluIFwiYWJjXCIgXCJ4eXpcIiA9PSBcImFiY1wiXG5cbi19XG5taW4gOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZVxubWluIHggeSA9XG4gICAgaWYgbHQgeCB5IHRoZW5cbiAgICAgICAgeFxuXG4gICAgZWxzZVxuICAgICAgICB5XG5cblxuey18IEZpbmQgdGhlIGxhcmdlciBvZiB0d28gY29tcGFyYWJsZXMuXG5cbiAgICBtYXggNDIgMTIzNDU2NzggPT0gMTIzNDU2NzhcblxuICAgIG1heCBcImFiY1wiIFwieHl6XCIgPT0gXCJ4eXpcIlxuXG4tfVxubWF4IDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGVcbm1heCB4IHkgPVxuICAgIGlmIGd0IHggeSB0aGVuXG4gICAgICAgIHhcblxuICAgIGVsc2VcbiAgICAgICAgeVxuXG5cbnstfCBDbGFtcHMgYSBudW1iZXIgd2l0aGluIGEgZ2l2ZW4gcmFuZ2UuIFdpdGggdGhlIGV4cHJlc3Npb25cbmBjbGFtcCAxMDAgMjAwIHhgIHRoZSByZXN1bHRzIGFyZSBhcyBmb2xsb3dzOlxuXG4gICAgMTAwICAgICBpZiB4IDwgMTAwXG4gICAgIHggICAgICBpZiAxMDAgPD0geCA8IDIwMFxuICAgIDIwMCAgICAgaWYgMjAwIDw9IHhcblxuLX1cbmNsYW1wIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5jbGFtcCBsb3cgaGlnaCBudW1iZXIgPVxuICAgIGlmIGx0IG51bWJlciBsb3cgdGhlblxuICAgICAgICBsb3dcblxuICAgIGVsc2UgaWYgZ3QgbnVtYmVyIGhpZ2ggdGhlblxuICAgICAgICBoaWdoXG5cbiAgICBlbHNlXG4gICAgICAgIG51bWJlclxuXG5cbnstfCBDb21wYXJlIGFueSB0d28gY29tcGFyYWJsZSB2YWx1ZXMuIENvbXBhcmFibGUgdmFsdWVzIGluY2x1ZGUgYFN0cmluZ2AsXG5gQ2hhcmAsIGBJbnRgLCBgRmxvYXRgLCBvciBhbiBhcnJheSBvciB0dXBsZSBjb250YWluaW5nIGNvbXBhcmFibGUgdmFsdWVzLiBUaGVzZVxuYXJlIGFsc28gdGhlIG9ubHkgdmFsdWVzIHRoYXQgd29yayBhcyBgRGljdGAga2V5cyBvciBgU2V0YCBtZW1iZXJzLlxuXG4gICAgY29tcGFyZSAzIDQgPT0gTFRcblxuICAgIGNvbXBhcmUgNCA0ID09IEVRXG5cbiAgICBjb21wYXJlIDUgNCA9PSBHVFxuXG4tfVxuY29tcGFyZSA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBPcmRlclxuY29tcGFyZSA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuY29tcGFyZVxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSByZWxhdGl2ZSBvcmRlcmluZyBvZiB0d28gdGhpbmdzLlxuVGhlIHJlbGF0aW9ucyBhcmUgbGVzcyB0aGFuLCBlcXVhbCB0bywgYW5kIGdyZWF0ZXIgdGhhbi5cbi19XG50eXBlIE9yZGVyXG4gICAgPSBMVFxuICAgIHwgRVFcbiAgICB8IEdUXG5cblxuXG4tLSBCT09MRUFOU1xuXG5cbnstfCBBIOKAnEJvb2xlYW7igJ0gdmFsdWUuIEl0IGNhbiBlaXRoZXIgYmUgYFRydWVgIG9yIGBGYWxzZWAuXG5cbioqTm90ZToqKiBQcm9ncmFtbWVycyBjb21pbmcgZnJvbSBKYXZhU2NyaXB0LCBKYXZhLCBldGMuIHRlbmQgdG8gcmVhY2ggZm9yXG5ib29sZWFuIHZhbHVlcyB3YXkgdG9vIG9mdGVuIGluIEdyZW4uIFVzaW5nIGEgW3VuaW9uIHR5cGVdW3V0XSBpcyBvZnRlbiBjbGVhcmVyXG5hbmQgbW9yZSByZWxpYWJsZS4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoaXMgZnJvbSBKZXJlbXkgW2hlcmVdW2pmXSBvclxuZnJvbSBSaWNoYXJkIFtoZXJlXVtydF0uXG5cblt1dF06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy90eXBlcy91bmlvbl90eXBlcy5odG1sXG5bamZdOiBodHRwczovL3lvdXR1LmJlLzZUREtIR3RBeGVnP3Q9MW0yNXNcbltydF06IGh0dHBzOi8veW91dHUuYmUvSWNnbVNSSkh1Xzg/dD0xbTE0c1xuXG4tfVxudHlwZSBCb29sXG4gICAgPSBUcnVlXG4gICAgfCBGYWxzZVxuXG5cbnstfCBOZWdhdGUgYSBib29sZWFuIHZhbHVlLlxuXG4gICAgbm90IFRydWUgPT0gRmFsc2VcblxuICAgIG5vdCBGYWxzZSA9PSBUcnVlXG5cbi19XG5ub3QgOiBCb29sIC0+IEJvb2xcbm5vdCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLm5vdFxuXG5cbnstfCBUaGUgbG9naWNhbCBBTkQgb3BlcmF0b3IuIGBUcnVlYCBpZiBib3RoIGlucHV0cyBhcmUgYFRydWVgLlxuXG4gICAgVHJ1ZSAmJiBUcnVlID09IFRydWVcblxuICAgIFRydWUgJiYgRmFsc2UgPT0gRmFsc2VcblxuICAgIEZhbHNlICYmIFRydWUgPT0gRmFsc2VcblxuICAgIEZhbHNlICYmIEZhbHNlID09IEZhbHNlXG5cbioqTm90ZToqKiBXaGVuIHVzZWQgaW4gdGhlIGluZml4IHBvc2l0aW9uLCBsaWtlIGAobGVmdCAmJiByaWdodClgLCB0aGUgb3BlcmF0b3JcbnNob3J0LWNpcmN1aXRzLiBUaGlzIG1lYW5zIGlmIGBsZWZ0YCBpcyBgRmFsc2VgIHdlIGRvIG5vdCBib3RoZXIgZXZhbHVhdGluZyBgcmlnaHRgXG5hbmQganVzdCByZXR1cm4gYEZhbHNlYCBvdmVyYWxsLlxuXG4tfVxuYW5kIDogQm9vbCAtPiBCb29sIC0+IEJvb2xcbmFuZCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmFuZFxuXG5cbnstfCBUaGUgbG9naWNhbCBPUiBvcGVyYXRvci4gYFRydWVgIGlmIG9uZSBvciBib3RoIGlucHV0cyBhcmUgYFRydWVgLlxuXG4gICAgVHJ1ZSB8fCBUcnVlID09IFRydWVcblxuICAgIFRydWUgfHwgRmFsc2UgPT0gVHJ1ZVxuXG4gICAgRmFsc2UgfHwgVHJ1ZSA9PSBUcnVlXG5cbiAgICBGYWxzZSB8fCBGYWxzZSA9PSBGYWxzZVxuXG4qKk5vdGU6KiogV2hlbiB1c2VkIGluIHRoZSBpbmZpeCBwb3NpdGlvbiwgbGlrZSBgKGxlZnQgfHwgcmlnaHQpYCwgdGhlIG9wZXJhdG9yXG5zaG9ydC1jaXJjdWl0cy4gVGhpcyBtZWFucyBpZiBgbGVmdGAgaXMgYFRydWVgIHdlIGRvIG5vdCBib3RoZXIgZXZhbHVhdGluZyBgcmlnaHRgXG5hbmQganVzdCByZXR1cm4gYFRydWVgIG92ZXJhbGwuXG5cbi19XG5vciA6IEJvb2wgLT4gQm9vbCAtPiBCb29sXG5vciA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLm9yXG5cblxuey18IFRoZSBleGNsdXNpdmUtb3Igb3BlcmF0b3IuIGBUcnVlYCBpZiBleGFjdGx5IG9uZSBpbnB1dCBpcyBgVHJ1ZWAuXG5cbiAgICB4b3IgVHJ1ZSBUcnVlID09IEZhbHNlXG5cbiAgICB4b3IgVHJ1ZSBGYWxzZSA9PSBUcnVlXG5cbiAgICB4b3IgRmFsc2UgVHJ1ZSA9PSBUcnVlXG5cbiAgICB4b3IgRmFsc2UgRmFsc2UgPT0gRmFsc2VcblxuLX1cbnhvciA6IEJvb2wgLT4gQm9vbCAtPiBCb29sXG54b3IgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy54b3JcblxuXG5cbi0tIEFQUEVORFxuXG5cbnstfCBQdXQgdHdvIGFwcGVuZGFibGUgdGhpbmdzIHRvZ2V0aGVyLiBUaGlzIGluY2x1ZGVzIHN0cmluZ3MgYW5kIGFycmF5cy5cblxuICAgIFwiaGVsbG9cIiArKyBcIndvcmxkXCIgPT0gXCJoZWxsb3dvcmxkXCJcblxuICAgIFsgMSwgMSwgMiBdICsrIFsgMywgNSwgOCBdID09IFsgMSwgMSwgMiwgMywgNSwgOCBdXG5cbi19XG5hcHBlbmQgOiBhcHBlbmRhYmxlIC0+IGFwcGVuZGFibGUgLT4gYXBwZW5kYWJsZVxuYXBwZW5kID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5hcHBlbmRcblxuXG5cbi0tIENSQVpZIEZMT0FUU1xuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBhIGZsb2F0IGlzIGFuIHVuZGVmaW5lZCBvciB1bnJlcHJlc2VudGFibGUgbnVtYmVyLlxuTmFOIHN0YW5kcyBmb3IgX25vdCBhIG51bWJlcl8gYW5kIGl0IGlzIFthIHN0YW5kYXJkaXplZCBwYXJ0IG9mIGZsb2F0aW5nIHBvaW50XG5udW1iZXJzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9OYU4pLlxuXG4gICAgaXNOYU4gKDAgLyAwKSA9PSBUcnVlXG5cbiAgICBpc05hTiAoc3FydCAtMSkgPT0gVHJ1ZVxuXG4gICAgaXNOYU4gKDEgLyAwKSA9PSBGYWxzZSAtLSBpbmZpbml0eSBpcyBhIG51bWJlclxuXG4gICAgaXNOYU4gMSA9PSBGYWxzZVxuXG4tfVxuaXNOYU4gOiBGbG9hdCAtPiBCb29sXG5pc05hTiA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmlzTmFOXG5cblxuey18IERldGVybWluZSB3aGV0aGVyIGEgZmxvYXQgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW5maW5pdHkuXG5cbiAgICBpc0luZmluaXRlICgwIC8gMCkgPT0gRmFsc2VcblxuICAgIGlzSW5maW5pdGUgKHNxcnQgLTEpID09IEZhbHNlXG5cbiAgICBpc0luZmluaXRlICgxIC8gMCkgPT0gVHJ1ZVxuXG4gICAgaXNJbmZpbml0ZSAxID09IEZhbHNlXG5cbk5vdGljZSB0aGF0IE5hTiBpcyBub3QgaW5maW5pdGUhIEZvciBmbG9hdCBgbmAgdG8gYmUgZmluaXRlIGltcGxpZXMgdGhhdFxuYG5vdCAoaXNJbmZpbml0ZSBuIHx8IGlzTmFOIG4pYCBldmFsdWF0ZXMgdG8gYFRydWVgLlxuXG4tfVxuaXNJbmZpbml0ZSA6IEZsb2F0IC0+IEJvb2xcbmlzSW5maW5pdGUgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5pc0luZmluaXRlXG5cblxuXG4tLSBGVU5DVElPTiBIRUxQRVJTXG5cblxuey18IEZ1bmN0aW9uIGNvbXBvc2l0aW9uLCBwYXNzaW5nIHJlc3VsdHMgYWxvbmcgaW4gdGhlIHN1Z2dlc3RlZCBkaXJlY3Rpb24uIEZvclxuZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBjb2RlIGNoZWNrcyBpZiB0aGUgcmVzdWx0IG9mIHJvdW5kaW5nIGEgZmxvYXQgaXMgb2RkOlxuXG4gICAgbm90IDw8IGlzRXZlbiA8PCByb3VuZFxuXG5Zb3UgY2FuIHRoaW5rIG9mIHRoaXMgb3BlcmF0b3IgYXMgZXF1aXZhbGVudCB0byB0aGUgZm9sbG93aW5nOlxuXG4gICAgKGcgPDwgZikgPT0gKFxceCAtPiBnIChmIHgpKVxuXG5TbyBvdXIgZXhhbXBsZSBleHBhbmRzIG91dCB0byBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXG4gICAgXFxuIC0+IG5vdCAoaXNFdmVuIChyb3VuZCBuKSlcblxuLX1cbmNvbXBvc2VMIDogKGIgLT4gYykgLT4gKGEgLT4gYikgLT4gKGEgLT4gYylcbmNvbXBvc2VMIGcgZiA9XG4gICAgXFx4IC0+IGcgKGYgeClcblxuXG57LXwgRnVuY3Rpb24gY29tcG9zaXRpb24sIHBhc3NpbmcgcmVzdWx0cyBhbG9uZyBpbiB0aGUgc3VnZ2VzdGVkIGRpcmVjdGlvbi4gRm9yXG5leGFtcGxlLCB0aGUgZm9sbG93aW5nIGNvZGUgY2hlY2tzIGlmIHRoZSByZXN1bHQgb2Ygcm91bmRpbmcgYSBmbG9hdCBpcyBvZGQ6XG5cbiAgICByb3VuZCA+PiBpc0V2ZW4gPj4gbm90XG5cbi19XG5jb21wb3NlUiA6IChhIC0+IGIpIC0+IChiIC0+IGMpIC0+IChhIC0+IGMpXG5jb21wb3NlUiBmIGcgPVxuICAgIFxceCAtPiBnIChmIHgpXG5cblxuey18IFNheWluZyBgeCB8PiBmYCBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGBmIHhgLlxuXG5JdCBpcyBjYWxsZWQgdGhlIOKAnHBpcGXigJ0gb3BlcmF0b3IgYmVjYXVzZSBpdCBsZXRzIHlvdSB3cml0ZSDigJxwaXBlbGluZWTigJ0gY29kZS5cbkZvciBleGFtcGxlLCBzYXkgd2UgaGF2ZSBhIGBzYW5pdGl6ZWAgZnVuY3Rpb24gZm9yIHR1cm5pbmcgdXNlciBpbnB1dCBpbnRvXG5pbnRlZ2VyczpcblxuICAgIC0tIEJFRk9SRVxuICAgIHNhbml0aXplIDogU3RyaW5nIC0+IE1heWJlIEludFxuICAgIHNhbml0aXplIGlucHV0ID1cbiAgICAgICAgU3RyaW5nLnRvSW50IChTdHJpbmcudHJpbSBpbnB1dClcblxuV2UgY2FuIHJld3JpdGUgaXQgbGlrZSB0aGlzOlxuXG4gICAgLS0gQUZURVJcbiAgICBzYW5pdGl6ZSA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBzYW5pdGl6ZSBpbnB1dCA9XG4gICAgICAgIGlucHV0XG4gICAgICAgICAgICB8PiBTdHJpbmcudHJpbVxuICAgICAgICAgICAgfD4gU3RyaW5nLnRvSW50XG5cblRvdGFsbHkgZXF1aXZhbGVudCEgSSByZWNvbW1lbmQgdHJ5aW5nIHRvIHJld3JpdGUgY29kZSB0aGF0IHVzZXMgYHggfD4gZmBcbmludG8gY29kZSBsaWtlIGBmIHhgIHVudGlsIHRoZXJlIGFyZSBubyBwaXBlcyBsZWZ0LiBUaGF0IGNhbiBoZWxwIHlvdSBidWlsZFxueW91ciBpbnR1aXRpb24uXG5cbioqTm90ZToqKiBUaGlzIGNhbiBiZSBvdmVydXNlZCEgSSB0aGluayBmb2xrcyBmaW5kIGl0IHF1aXRlIG5lYXQsIGJ1dCB3aGVuIHlvdVxuaGF2ZSB0aHJlZSBvciBmb3VyIHN0ZXBzLCB0aGUgY29kZSBvZnRlbiBnZXRzIGNsZWFyZXIgaWYgeW91IGJyZWFrIG91dCBhXG50b3AtbGV2ZWwgaGVscGVyIGZ1bmN0aW9uLiBOb3cgdGhlIHRyYW5zZm9ybWF0aW9uIGhhcyBhIG5hbWUuIFRoZSBhcmd1bWVudHMgYXJlXG5uYW1lZC4gSXQgaGFzIGEgdHlwZSBhbm5vdGF0aW9uLiBJdCBpcyBtdWNoIG1vcmUgc2VsZi1kb2N1bWVudGluZyB0aGF0IHdheSFcblRlc3RpbmcgdGhlIGxvZ2ljIGdldHMgZWFzaWVyIHRvby4gTmljZSBzaWRlIGJlbmVmaXQhXG5cbi19XG5hcFIgOiBhIC0+IChhIC0+IGIpIC0+IGJcbmFwUiB4IGYgPVxuICAgIGYgeFxuXG5cbnstfCBTYXlpbmcgYGYgPHwgeGAgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBgZiB4YC5cblxuSXQgY2FuIGhlbHAgeW91IGF2b2lkIHBhcmVudGhlc2VzLCB3aGljaCBjYW4gYmUgbmljZSBzb21ldGltZXMuIE1heWJlIHlvdSB3YW50XG50byBhcHBseSBhIGZ1bmN0aW9uIHRvIGEgYGNhc2VgIGV4cHJlc3Npb24/IFRoYXQgc29ydCBvZiB0aGluZy5cblxuLX1cbmFwTCA6IChhIC0+IGIpIC0+IGEgLT4gYlxuYXBMIGYgeCA9XG4gICAgZiB4XG5cblxuey18IEdpdmVuIGEgdmFsdWUsIHJldHVybnMgZXhhY3RseSB0aGUgc2FtZSB2YWx1ZS4gVGhpcyBpcyBjYWxsZWRcblt0aGUgaWRlbnRpdHkgZnVuY3Rpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lkZW50aXR5X2Z1bmN0aW9uKS5cbi19XG5pZGVudGl0eSA6IGEgLT4gYVxuaWRlbnRpdHkgeCA9XG4gICAgeFxuXG5cbnstfCBBIHZhbHVlIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiEgRm9yIGNvbnRleHQ6XG5cbiAgLSBUaGUgYm9vbGVhbiB0eXBlIGBCb29sYCBoYXMgdHdvIHZhbHVlczogYFRydWVgIGFuZCBgRmFsc2VgXG4gIC0gVGhlIHVuaXQgdHlwZSBgKClgIGhhcyBvbmUgdmFsdWU6IGAoKWBcbiAgLSBUaGUgbmV2ZXIgdHlwZSBgTmV2ZXJgIGhhcyBubyB2YWx1ZXMhXG5cbllvdSBtYXkgc2VlIGl0IGluIHRoZSB3aWxkIGluIGBIdG1sIE5ldmVyYCB3aGljaCBtZWFucyB0aGlzIEhUTUwgd2lsbCBuZXZlclxucHJvZHVjZSBhbnkgbWVzc2FnZXMuIFlvdSB3b3VsZCBuZWVkIHRvIHdyaXRlIGFuIGV2ZW50IGhhbmRsZXIgbGlrZVxuYG9uQ2xpY2sgPz8/IDogQXR0cmlidXRlIE5ldmVyYCBidXQgaG93IGNhbiB3ZSBmaWxsIGluIHRoZSBxdWVzdGlvbiBtYXJrcz8hXG5TbyB0aGVyZSBjYW5ub3QgYmUgYW55IGV2ZW50IGhhbmRsZXJzIG9uIHRoYXQgSFRNTC5cblxuWW91IG1heSBhbHNvIHNlZSB0aGlzIHVzZWQgd2l0aCB0YXNrcyB0aGF0IG5ldmVyIGZhaWwsIGxpa2UgYFRhc2sgTmV2ZXIgKClgLlxuXG5UaGUgYE5ldmVyYCB0eXBlIGlzIHVzZWZ1bCBmb3IgcmVzdHJpY3RpbmcgX2FyZ3VtZW50c18gdG8gYSBmdW5jdGlvbi4gTWF5YmUgbXlcbkFQSSBjYW4gb25seSBhY2NlcHQgSFRNTCB3aXRob3V0IGV2ZW50IGhhbmRsZXJzLCBzbyBJIHJlcXVpcmUgYEh0bWwgTmV2ZXJgIGFuZFxudXNlcnMgY2FuIGdpdmUgYEh0bWwgbXNnYCBhbmQgZXZlcnl0aGluZyB3aWxsIGdvIGZpbmUuIEdlbmVyYWxseSBzcGVha2luZywgeW91XG5kbyBub3Qgd2FudCBgTmV2ZXJgIGluIHlvdXIgcmV0dXJuIHR5cGVzIHRob3VnaC5cblxuLX1cbnR5cGUgTmV2ZXJcbiAgICA9IEp1c3RPbmVNb3JlIE5ldmVyXG5cblxuey18IEEgZnVuY3Rpb24gdGhhdCBjYW4gbmV2ZXIgYmUgY2FsbGVkLiBTZWVtcyBleHRyZW1lbHkgcG9pbnRsZXNzLCBidXQgaXRcbl9jYW5fIGNvbWUgaW4gaGFuZHkuIEltYWdpbmUgeW91IGhhdmUgc29tZSBIVE1MIHRoYXQgc2hvdWxkIG5ldmVyIHByb2R1Y2UgYW55XG5tZXNzYWdlcy4gQW5kIHNheSB5b3Ugd2FudCB0byB1c2UgaXQgaW4gc29tZSBvdGhlciBIVE1MIHRoYXQgX2RvZXNfIHByb2R1Y2Vcbm1lc3NhZ2VzLiBZb3UgY291bGQgc2F5OlxuXG4gICAgaW1wb3J0IEh0bWwgZXhwb3NpbmcgKC4uKVxuXG4gICAgZW1iZWRIdG1sIDogSHRtbCBOZXZlciAtPiBIdG1sIG1zZ1xuICAgIGVtYmVkSHRtbCBzdGF0aWNTdHVmZiA9XG4gICAgICAgIGRpdiBbXVxuICAgICAgICAgICAgWyB0ZXh0IFwiaGVsbG9cIlxuICAgICAgICAgICAgLCBIdG1sLm1hcCBuZXZlciBzdGF0aWNTdHVmZlxuICAgICAgICAgICAgXVxuXG5TbyB0aGUgYG5ldmVyYCBmdW5jdGlvbiBpcyBiYXNpY2FsbHkgdGVsbGluZyB0aGUgdHlwZSBzeXN0ZW0sIG1ha2Ugc3VyZSBubyBvbmVcbmV2ZXIgY2FsbHMgbWUhXG5cbi19XG5uZXZlciA6IE5ldmVyIC0+IGFcbm5ldmVyIChKdXN0T25lTW9yZSBudnIpID1cbiAgICBuZXZlciBudnJcbiIsCiAgICAgICAgIm1vZHVsZSBEYXRhVGFibGUgZXhwb3NpbmdcbiAgICAoIHZpZXdcbiAgICAsIGNvbmZpZywgc3RyaW5nQ29sdW1uLCBpbnRDb2x1bW4sIGZsb2F0Q29sdW1uLCBjb2x1bW5cbiAgICAsIFN0YXRlLCBuZXdcbiAgICAsIFNvcnREaXJlY3Rpb24oLi4pLCBpbml0aWFsU29ydFxuICAgICwgZ2V0U29ydFN0YXRlLCB1cGRhdGVTb3J0U3RhdGUsIHVwZGF0ZU11bHRpU29ydFN0YXRlXG4gICAgLCBnZXRQYWdlU2l6ZSwgZ2V0QWN0aXZlUm93SWQsIHVwZGF0ZVBhZ2VTaXplLCB1cGRhdGVBY3RpdmVSb3dJZFxuICAgICwgc2V0Tm9QYWdpbmF0aW9uLCBzZXRTaW1wbGVQYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uV2l0aCwgc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGhcbiAgICAsIHBhZ2VMZW5ndGhDaG9vc2VyXG4gICAgLCBDb2x1bW4sIGN1c3RvbUNvbHVtbiwgdmVyeUN1c3RvbUNvbHVtblxuICAgICwgU29ydGVyLCB1bnNvcnRhYmxlLCBpbmNyZWFzaW5nQnksIGRlY3JlYXNpbmdCeSwgaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5LCBkZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnlcbiAgICAsIENvbmZpZywgY3VzdG9tQ29uZmlnLCBDdXN0b21pemF0aW9ucywgSHRtbERldGFpbHNcbiAgICAsIGRlZmF1bHRDdXN0b21pemF0aW9uc1xuICAgICwgZ2V0U29ydGVkRGF0YSwgZ2V0UGFnaW5hdGVkRGF0YVxuICAgIClcblxuey18IFRoaXMgbGlicmFyeSBoZWxwcyB5b3UgY3JlYXRlIHNvcnRhYmxlIHRhYmxlcyB3aXRoIHBhZ2luYXRpb24gYW5kIGZpbHRlciBvcHRpb25zLlxuVGhlIGNydWNpYWwgZmVhdHVyZSBpcyB0aGF0IGl0IGxldHMgeW91IG93biB5b3VyIGRhdGEgc2VwYXJhdGVseSBhbmQga2VlcCBpdCBpblxud2hhdGV2ZXIgZm9ybWF0IGlzIGJlc3QgZm9yIHlvdS4gVGhpcyB3YXkgeW91IGFyZSBmcmVlIHRvIGNoYW5nZSB5b3VyIGRhdGEgd2l0aG91dFxud29ycnlpbmcgYWJvdXQgdGhlIHRhYmxlICZsZHF1bztnZXR0aW5nIG91dCBvZiBzeW5jJnJkcXVvOyB3aXRoIHRoZSBkYXRhLiBIYXZpbmcgYSBzaW5nbGVcbnNvdXJjZSBvZiB0cnV0aCBpcyBwcmV0dHkgZ3JlYXQhXG5cbkkgcmVjb21tZW5kIGNoZWNraW5nIG91dCB0aGUgW2V4YW1wbGVzXSB0byBnZXQgYSBmZWVsIGZvciBob3cgaXQgd29ya3MuXG5cbltleGFtcGxlc106IGh0dHBzOi8vZ2l0aHViLmNvbS9saW5kZW5saW9uL2dyZW4tZGF0YXRhYmxlcy90cmVlL21hbWEvZXhhbXBsZXNcblxuXG4jIyBWaWV3XG5cbkBkb2NzIHZpZXdcblxuXG4jIyBDb25maWd1cmF0aW9uXG5cbkBkb2NzIGNvbmZpZywgc3RyaW5nQ29sdW1uLCBpbnRDb2x1bW4sIGZsb2F0Q29sdW1uLCBjb2x1bW5cblxuXG4jIyBTdGF0ZVxuXG5AZG9jcyBTdGF0ZSwgbmV3XG5cblxuIyMgU29ydCBvcmRlclxuXG5AZG9jcyBTb3J0RGlyZWN0aW9uLCBpbml0aWFsU29ydFxuQGRvY3MgZ2V0U29ydFN0YXRlLCB1cGRhdGVTb3J0U3RhdGUsIHVwZGF0ZU11bHRpU29ydFN0YXRlXG5cblxuIyMgUGFnaW5hdGlvblxuXG5AZG9jcyBnZXRQYWdlU2l6ZSwgZ2V0QWN0aXZlUm93SWQsIHVwZGF0ZVBhZ2VTaXplLCB1cGRhdGVBY3RpdmVSb3dJZFxuQGRvY3Mgc2V0Tm9QYWdpbmF0aW9uLCBzZXRTaW1wbGVQYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uV2l0aCwgc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGhcbkBkb2NzIHBhZ2VMZW5ndGhDaG9vc2VyXG5cbiMjIENyYXp5IEN1c3RvbWl6YXRpb25cblxuSWYgeW91IGFyZSBuZXcgdG8gdGhpcyBsaWJyYXJ5LCB5b3UgY2FuIHByb2JhYmx5IHN0b3AgcmVhZGluZyBoZXJlLiBBZnRlciB0aGlzXG5wb2ludCB0aGVyZSBhcmUgYSBidW5jaCBvZiB3YXlzIHRvIGN1c3RvbWl6ZSB5b3VyIHRhYmxlIGZ1cnRoZXIuXG5cbiMjIyBDdXN0b20gQ29sdW1uc1xuXG5AZG9jcyBDb2x1bW4sIGN1c3RvbUNvbHVtbiwgdmVyeUN1c3RvbUNvbHVtblxuQGRvY3MgU29ydGVyLCB1bnNvcnRhYmxlLCBpbmNyZWFzaW5nQnksIGRlY3JlYXNpbmdCeSwgaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5LCBkZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnlcblxuXG4jIyMgQ3VzdG9tIENvbmZpZ1xuXG5AZG9jcyBDb25maWcsIGN1c3RvbUNvbmZpZywgQ3VzdG9taXphdGlvbnMsIEh0bWxEZXRhaWxzXG5AZG9jcyBkZWZhdWx0Q3VzdG9taXphdGlvbnNcblxuIyMjIEludGVybWVkaWF0ZSBEYXRhIEFjY2Vzc1xuXG5AZG9jcyBnZXRTb3J0ZWREYXRhLCBnZXRQYWdpbmF0ZWREYXRhXG5cbi19XG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGFzIEFcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMuQXJpYSBhcyBBcmlhXG5pbXBvcnQgSHRtbC5FdmVudHMgYXMgRVxuaW1wb3J0IEh0bWwuS2V5ZWQgYXMgS2V5ZWRcbmltcG9ydCBIdG1sLkxhenkgYXMgTGF6eVxuaW1wb3J0IEpzb24uRGVjb2RlXG5pbXBvcnQgTWF0aFxuXG5cblxuLS0gU1RBVEVcblxuXG57LXwgVHJhY2tzIHdoaWNoIGNvbHVtbiB0byBzb3J0IGJ5LCBpbiB3aGljaCBkaXJlY3Rpb24sIHRoZSBwYWdlIHNpemUgYW5kIHRoZVxucG9zaXRpb24gb2YgdGhlIHJvdyBjdXJzb3IsIGFzIHdlbGwgYXMgdG90YWwgbnVtYmVyIG9mIHJvd3Mgb2YgdGhlIHdob2xlXG4ocG9zc2libHkgcmVtb3RlKSB0YWJsZS4gVGhpcyB0eXBlIGlzIG9wYXF1ZS5cbi19XG50eXBlIFN0YXRlXG4gICAgPSBTdGF0ZVxuICAgICAgICB7IHNvcnRDb2x1bW5zIDogQXJyYXkgeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuICAgICAgICAsIHBhZ2VTaXplIDogSW50XG4gICAgICAgICwgYWN0aXZlUm93SWQgOiBTdHJpbmdcbiAgICAgICAgLCBwYWdpbmF0aW9uIDogUGFnaW5hdGlvblN0eWxlXG4gICAgICAgICwgdGFibGVJZCA6IFN0cmluZ1xuICAgICAgICB9XG5cblxuey18IFNpbXBsZSBib29sZWFuIHR5cGUgZm9yIGNvbHVtbiBzb3J0IGRpcmVjdGlvbi4gVGhpcyB0eXBlIGlzIG5vdCBvcGFxdWUgYW5kXG5tZWFudCB0byBiZSB1c2VkIGJ5IG90aGVyIG1vZHVsZXMgd2hlbiBjb25zdHJ1Y3RpbmcgVGFibGUgU3RhdGVcbi19XG50eXBlIFNvcnREaXJlY3Rpb25cbiAgICA9IEFzY1xuICAgIHwgRGVzY1xuXG5cbnNvcnREaXJlY3Rpb25Ub1N0cmluZyA6IFNvcnREaXJlY3Rpb24gLT4gU3RyaW5nXG5zb3J0RGlyZWN0aW9uVG9TdHJpbmcgc29ydERpcmVjdGlvbiA9XG4gICAgd2hlbiBzb3J0RGlyZWN0aW9uIGlzXG4gICAgICAgIEFzYyAtPlxuICAgICAgICAgICAgXCJBc2NcIlxuXG4gICAgICAgIERlc2MgLT5cbiAgICAgICAgICAgIFwiRGVzY1wiXG5cblxuey18IENyZWF0ZSBhbiBpbml0aWFsIHN0YXRlIGZvciBhIHRhYmxlIHdpdGhvdXQgcGFnaW5hdGlvbi4gQnkgcHJvdmlkaW5nIGEgY29sdW1uXG5uYW1lLCB5b3UgZGV0ZXJtaW5lIHdoaWNoIGNvbHVtbiBzaG91bGQgYmUgdXNlZCBmb3Igc29ydGluZyBieSBkZWZhdWx0LiBUaGlzIGlzXG5tZWFudCB0byBiZSB1c2VkIGZvciBzaW1wbGUgdGFibGVzLiBNb3JlXG5TbyBpZlxueW91IHdhbnQgeW91ciB0YWJsZSBvZiB5YWNodHMgdG8gYmUgc29ydGVkIGJ5IGxlbmd0aCBieSBkZWZhdWx0LCB5b3UgbWlnaHQgc2F5OlxuXG5pbXBvcnQgVGFibGVcblxuICAgIFRhYmxlLmluaXRpYWxTb3J0IFwiTGVuZ3RoXCJcblxuLX1cbmluaXRpYWxTb3J0IDogU3RyaW5nIC0+IFN0YXRlXG5pbml0aWFsU29ydCBoZWFkZXIgPVxuICAgIFN0YXRlXG4gICAgICAgIHsgc29ydENvbHVtbnMgPSBbIHsgc29ydENvbHVtbk5hbWUgPSBoZWFkZXIsIHNvcnREaXJlY3Rpb24gPSBBc2MgfSBdXG4gICAgICAgICwgcGFnZVNpemUgPSAwXG4gICAgICAgICwgYWN0aXZlUm93SWQgPSBcIlwiXG4gICAgICAgICwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvblxuICAgICAgICAsIHRhYmxlSWQgPSBcInNvcnRhYmxlVGFibGVcIlxuICAgICAgICB9XG5cblxuey18IENyZWF0ZSBhIGRlZmF1bHQgdGFibGUgc3RhdGUuIE9ubHkgdGhlIGlkIG9mIHRoZSB0YWJsZSBpcyBzdXBwbGllZC4gQWxsIG90aGVyIHN0YXRlIGlzIGluaXRpYWxpc2VkIHdpdGggZGVmYXVsdCB2YWx1ZXMuIFRoaXMgc3RhdGUgY2FuIHRoZW4gYmUgc2V0IHdpdGggdXBkYXRlIGZ1bmN0aW9ucy4gU28gaWYgeW91IHdhbnRlZCBhIHRhYmxlIG9mIGNvdW50cmllcyB0aGF0IGlzIGJ5IGRlZmF1bHQgc29ydGVkIGJ5IHBvcHVsYXRpb24gY291bnQgaW4gZGVzY2VuZGluZyBvcmRlciB5b3UgbWlnaHQgd3JpdGVcblxuaW1wb3J0IFRhYmxlXG5cbiAgICBUYWJsZS5uZXcgXCJDb3VudHJpZXNcIlxuICAgICAgICB8PiBEYXRhVGFibGUudXBkYXRlU29ydFN0YXRlIFwiUG9wdWxhdGlvblwiIERhdGFUYWJsZS5EZXNjXG5cbi19XG5uZXcgOiBTdHJpbmcgLT4gU3RhdGVcbm5ldyBpZCA9XG4gICAgU3RhdGUgeyBzb3J0Q29sdW1ucyA9IFtdLCBwYWdlU2l6ZSA9IDAsIGFjdGl2ZVJvd0lkID0gXCJcIiwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvbiwgdGFibGVJZCA9IGlkIH1cblxuXG57LXwgSW5zcGVjdCB0aGUgY3VycmVudCB0YWJsZSBzdGF0ZS4gV2hpY2ggY29sdW1uIGlzIGJlaW5nIHNvcnRlZCBieSwgYW5kXG53aGV0aGVyIHRoZSBzb3J0IG9yZGVyIGlzIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nLiBUaGlzIGNvdWxkIGJlIHVzZWZ1bCBmb3JcbnN0b3JpbmcgdGhlIHNvcnQgc3RhdGUgaW4gYSBVUkwgb3Igc29tZXdoZXJlIGVsc2Ugb3V0c2lkZSBvZiBFbG0uXG4tfVxuZ2V0U29ydFN0YXRlIDogU3RhdGUgLT4gQXJyYXkgeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuZ2V0U29ydFN0YXRlIChTdGF0ZSB7IHNvcnRDb2x1bW5zIH0pID1cbiAgICBzb3J0Q29sdW1uc1xuXG5cbnstfCBJbnNwZWN0IHRoZSBjdXJyZW50IHRhYmxlIHN0YXRlLiBXaGF0IGlzIHRoZSBjdXJyZW50IHBhZ2Ugc2l6ZSBmb3IgdGhlXG5wYWdpbmF0aW9uLiBTaG93aW5nIFwiYWxsIHJvd3NcIiByZXR1cm5zIDAuIFRoaXMgY291bGQgYmUgdXNlZnVsIGZvciBzdG9yaW5nXG50aGUgc29ydCBzdGF0ZSBpbiBhIFVSTCBvciBzb21ld2hlcmUgZWxzZSBvdXRzaWRlIG9mIEVsbS5cbi19XG5nZXRQYWdlU2l6ZSA6IFN0YXRlIC0+IEludFxuZ2V0UGFnZVNpemUgKFN0YXRlIHsgcGFnZVNpemUgfSkgPVxuICAgIHBhZ2VTaXplXG5cblxuey18IEluc3BlY3QgdGhlIGN1cnJlbnQgdGFibGUgc3RhdGUuIFdoYXQgaXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHJvd1xuY3Vyc29yLiBUb2dldGhlciB3aXRoIHRoZSBjdXJyZW50IHBhZ2Ugc2l6ZSB0aGlzIGRldGVybWluZXMgd2hpY2ggdGFibGUgcGFnZVxuaXMgc2hvd24uXG4tfVxuZ2V0QWN0aXZlUm93SWQgOiBTdGF0ZSAtPiBTdHJpbmdcbmdldEFjdGl2ZVJvd0lkIChTdGF0ZSB7IGFjdGl2ZVJvd0lkIH0pID1cbiAgICBhY3RpdmVSb3dJZFxuXG5cbnstfCAtfVxudXBkYXRlU29ydFN0YXRlIDogU3RyaW5nIC0+IFNvcnREaXJlY3Rpb24gLT4gU3RhdGUgLT4gU3RhdGVcbnVwZGF0ZVNvcnRTdGF0ZSBuZXdTb3J0Q29sdW1uIHNvcnREaXJlY3Rpb24gKFN0YXRlIHsgcGFnZVNpemUsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gWyB7IHNvcnRDb2x1bW5OYW1lID0gbmV3U29ydENvbHVtbiwgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gfSBdLCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfVxuXG5cbnstfCAtfVxudXBkYXRlTXVsdGlTb3J0U3RhdGUgOiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlTXVsdGlTb3J0U3RhdGUgbmV3U29ydENvbHVtbiBzb3J0RGlyZWN0aW9uIChTdGF0ZSB7IHNvcnRDb2x1bW5zLCBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIGxldFxuICAgICAgICBuZXdTb3J0U3RhdGUgPVxuICAgICAgICAgICAgWyB7IHNvcnRDb2x1bW5OYW1lID0gbmV3U29ydENvbHVtbiwgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gfSBdXG4gICAgICAgICAgICAgICAgKysgQXJyYXkua2VlcElmIChcXHsgc29ydENvbHVtbk5hbWUgfSAtPiBzb3J0Q29sdW1uTmFtZSAvPSBuZXdTb3J0Q29sdW1uKSBzb3J0Q29sdW1uc1xuICAgIGluXG4gICAgU3RhdGUgeyBzb3J0Q29sdW1ucyA9IG5ld1NvcnRTdGF0ZSwgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG57LXwgLX1cbnVwZGF0ZVBhZ2VTaXplIDogSW50IC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVQYWdlU2l6ZSBtaW5pbXVtTmV3UGFnZVNpemUgKFN0YXRlIHsgc29ydENvbHVtbnMsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBsZXRcbiAgICAgICAgbmV4dEhpZ2hlckluTGlzdCA6IEludCAtPiBBcnJheSBJbnQgLT4gSW50XG4gICAgICAgIG5leHRIaWdoZXJJbkxpc3QgaW5wdXQgbGlzdCA9XG4gICAgICAgICAgICB3aGVuIEFycmF5LnBvcEZpcnN0IDx8IEFycmF5LmtlZXBJZiAoXFx4IC0+IHggPj0gaW5wdXQpIDx8IEFycmF5LnNvcnQgbGlzdCBpc1xuICAgICAgICAgICAgICAgIEp1c3QgeCAtPlxuICAgICAgICAgICAgICAgICAgICAuZmlyc3QgeFxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAwXG5cbiAgICAgICAgbmV3UGFnZVNpemUgPVxuICAgICAgICAgICAgd2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICAgICAgUGFnZXIgbGlzdCAtPlxuICAgICAgICAgICAgICAgICAgICBuZXh0SGlnaGVySW5MaXN0IG1pbmltdW1OZXdQYWdlU2l6ZSBsaXN0XG5cbiAgICAgICAgICAgICAgICBTY3JvbGxlciBsaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIG5leHRIaWdoZXJJbkxpc3QgbWluaW11bU5ld1BhZ2VTaXplIGxpc3RcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgaW5cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gc29ydENvbHVtbnMsIHBhZ2VTaXplID0gbmV3UGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuey18IC19XG51cGRhdGVBY3RpdmVSb3dJZCA6IFN0cmluZyAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlQWN0aXZlUm93SWQgbmV3QWN0aXZlUm93SWQgKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gc29ydENvbHVtbnMsIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gbmV3QWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuXG4tLSBDT05GSUdcblxuXG57LXwgQ29uZmlndXJhdGlvbiBmb3IgeW91ciB0YWJsZSwgZGVzY3JpYmluZyB5b3VyIGNvbHVtbnMuXG5cbioqTm90ZToqKiBZb3VyIGBDb25maWdgIHNob3VsZCBfbmV2ZXJfIGJlIGhlbGQgaW4geW91ciBtb2RlbC5cbkl0IHNob3VsZCBvbmx5IGFwcGVhciBpbiBgdmlld2AgY29kZS5cblxuLX1cbnR5cGUgQ29uZmlnIGRhdGEgbXNnXG4gICAgPSBDb25maWdcbiAgICAgICAgeyB0b0lkIDogZGF0YSAtPiBTdHJpbmdcbiAgICAgICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZylcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA6IEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnXG4gICAgICAgIH1cblxuXG57LXwgQ3JlYXRlIHRoZSBgQ29uZmlnYCBmb3IgeW91ciBgdmlld2AgZnVuY3Rpb24uIEV2ZXJ5dGhpbmcgeW91IG5lZWQgdG9cbnJlbmRlciB5b3VyIGNvbHVtbnMgZWZmaWNpZW50bHkgYW5kIGhhbmRsZSBzZWxlY3Rpb24gb2YgY29sdW1ucy5cblxuU2F5IHdlIGhhdmUgYW4gYEFycmF5IFBlcnNvbmAsIHdoZXJlIFBlcnNvbiBpcyBhIHR5cGUgYWxpYXMgZm9yXG5geyBuYW1lIDogU3RyaW5nLCBhZ2UgOiBJbnQsIG90aGVyOiBGbG9hdCB9YCB0aGF0IHdlIHdhbnQgdG8gc2hvdyBhcyBhIHRhYmxlLlxuWW91IHdhbnQgdG8gc2hvdyBhIGNvbHVtbiBmb3IgbmFtZSBhbmQgYWdlLCBpZ25vcmluZyB0aGUgb3RoZXIgdmFsdWUuIFlvdSB3b3VsZFxudGhlbiBjcmVhdGUgYSBgQ29uZmlnYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgRGF0YVRhYmxlXG5cbiAgICB0eXBlIE1zZyA9IE5ld1RhYmxlU3RhdGUgRGF0YVRhYmxlLlN0YXRlIHwgLi4uXG5cbiAgICBjb25maWcgOiBEYXRhVGFibGUuQ29uZmlnIFBlcnNvbiBNc2dcbiAgICBjb25maWcgPVxuICAgICAgRGF0YVRhYmxlLmNvbmZpZ1xuICAgICAgICB7IHRvSWQgPSAubmFtZVxuICAgICAgICAsIHRvTXNnID0gTmV3VGFibGVTdGF0ZVxuICAgICAgICAsIGNvbHVtbnMgPVxuICAgICAgICAgICAgWyBEYXRhVGFibGUuc3RyaW5nQ29sdW1uIFwiTmFtZVwiIC5uYW1lXG4gICAgICAgICAgICAsIERhdGFUYWJsZS5pbnRDb2x1bW4gXCJBZ2VcIiAuYWdlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuWW91IHByb3ZpZGUgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiBpbiB5b3VyIHRhYmxlIGNvbmZpZ3VyYXRpb246XG5cbiAgLSBgdG9JZGAgJm1kYXNoOyB0dXJucyBhIGBQZXJzb25gIGludG8gYSB1bmlxdWUgSUQgb2YgdHlwZSBTdHJpbmcuXG4gICAgVGhpcyBsZXRzIHVzIHVzZVxuICAgIFtgSHRtbC5LZXllZGBdW2tleWVkXSB1bmRlciB0aGUgaG9vZCB0byBtYWtlIHJlLXNvcnRzIGZhc3Rlci5cbiAgLSBgdG9Nc2dgICZtZGFzaDsgdGhlIG1lc3NhZ2UgdGhyb3VnaCB3aGljaCB0aGUgRGF0YVRhYmxlIGNhbiBzZW5kXG4gICAgdXBkYXRlZCBpbnRlcm5hbCB0YWJsZSBzdGF0ZXMgdG8geW91ciBhcHAncyBtb2RlbC5cbiAgLSBgY29sdW1uc2AgJm1kYXNoOyBzcGVjaWZ5IHNvbWUgY29sdW1ucyB0byBzaG93LlxuXG5ba2V5ZWRdOiBodHRwczovL3BhY2thZ2VzLmdyZW4tbGFuZy5vcmcvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci92ZXJzaW9uL2xhdGVzdC9tb2R1bGUvSHRtbC5LZXllZFxuXG4tfVxuY29uZmlnIDpcbiAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgdG9Nc2cgOiBTdGF0ZSAtPiBtc2dcbiAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uIGRhdGEgbXNnKVxuICAgIH1cbiAgICAtPiBDb25maWcgZGF0YSBtc2dcbmNvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zIH0gPVxuICAgIENvbmZpZ1xuICAgICAgICB7IHRvSWQgPSB0b0lkXG4gICAgICAgICwgdG9Nc2cgPSB0b01zZ1xuICAgICAgICAsIGNvbHVtbnMgPSBBcnJheS5tYXAgKFxcKENvbHVtbiBjRGF0YSkgLT4gY0RhdGEpIGNvbHVtbnNcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA9IGRlZmF1bHRDdXN0b21pemF0aW9uc1xuICAgICAgICB9XG5cblxuey18IEp1c3QgbGlrZSBgY29uZmlnYCBidXQgeW91IGNhbiBzcGVjaWZ5IGEgYnVuY2ggb2YgdGFibGUgY3VzdG9taXphdGlvbnMuXG4tfVxuY3VzdG9tQ29uZmlnIDpcbiAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgdG9Nc2cgOiBTdGF0ZSAtPiBtc2dcbiAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uIGRhdGEgbXNnKVxuICAgICwgY3VzdG9taXphdGlvbnMgOiBDdXN0b21pemF0aW9ucyBkYXRhIG1zZ1xuICAgIH1cbiAgICAtPiBDb25maWcgZGF0YSBtc2dcbmN1c3RvbUNvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zLCBjdXN0b21pemF0aW9ucyB9ID1cbiAgICBDb25maWdcbiAgICAgICAgeyB0b0lkID0gdG9JZFxuICAgICAgICAsIHRvTXNnID0gdG9Nc2dcbiAgICAgICAgLCBjb2x1bW5zID0gQXJyYXkubWFwIChcXChDb2x1bW4gY0RhdGEpIC0+IGNEYXRhKSBjb2x1bW5zXG4gICAgICAgICwgY3VzdG9taXphdGlvbnMgPSBjdXN0b21pemF0aW9uc1xuICAgICAgICB9XG5cblxuey18IFRoZXJlIGFyZSBxdWl0ZSBhIGxvdCBvZiB3YXlzIHRvIGN1c3RvbWl6ZSB0aGUgYDx0YWJsZT5gIHRhZy4gWW91IGNhbiBhZGRcbmEgYDxjYXB0aW9uPmAgd2hpY2ggY2FuIGJlIHN0eWxlZCB2aWEgQ1NTLiBZb3UgY2FuIGRvIGNyYXp5IHN0dWZmIHdpdGhcbmA8dGhlYWQ+YCB0byBncm91cCBjb2x1bW5zIGluIHdlaXJkIHdheXMuIFlvdSBjYW4gaGF2ZSBhIGA8dGZvb3Q+YCB0YWcgZm9yXG5zdW1tYXJpZXMgb2YgdmFyaW91cyBjb2x1bW5zLiBBbmQgbWF5YmUgeW91IHdhbnQgdG8gcHV0IGF0dHJpYnV0ZXMgb24gYDx0Ym9keT5gXG5vciBvbiBwYXJ0aWN1bGFyIHJvd3MgaW4gdGhlIGJvZHkuIEFsbCB0aGVzZSBjdXN0b21pemF0aW9ucyBhcmUgYXZhaWxhYmxlIHRvIHlvdS5cblxuKipOb3RlOioqIFRoZSBsZXZlbCBvZiBjcmF6aW5lc3MgcG9zc2libGUgaW4gYDx0aGVhZD5gIGFuZCBgPHRmb290PmAgYXJlIHNvXG5oaWdoIHRoYXQgSSBjb3VsZCBub3Qgc2VlIGhvdyB0byBwcm92aWRlIHRoZSBmdWxsIGZ1bmN0aW9uYWxpdHkgX2FuZF8gbWFrZSBpdFxuaW1wb3NzaWJsZSB0byBkbyBiYWQgc3R1ZmYuIFNvIGp1c3QgYmUgYXdhcmUgb2YgdGhhdCwgYW5kIHNoYXJlIGFueSBzdG9yaWVzXG55b3UgaGF2ZS4gU3RvcmllcyBtYWtlIGl0IHBvc3NpYmxlIHRvIGRlc2lnbiBiZXR0ZXIhXG5cbi19XG50eXBlIGFsaWFzIEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnID1cbiAgICB7IGJlZm9yZUFuZEFmdGVyVGFibGUgOiB7IGJlZm9yZSA6IE1heWJlIChIdG1sIG1zZyksIGFmdGVyIDogTWF5YmUgKEh0bWwgbXNnKSB9XG4gICAgLCB0YWJsZUF0dHJzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCBjYXB0aW9uIDogTWF5YmUgKEh0bWxEZXRhaWxzIG1zZylcbiAgICAsIGNvbGdyb3VwIDogQXJyYXkgKEhlYWRlckluZm8gbXNnKSAtPiBNYXliZSAoSHRtbERldGFpbHMgbXNnKVxuICAgICwgdGhlYWQgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgdGJvZHlBdHRycyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxuICAgICwgcm93QXR0cnMgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCB0Zm9vdCA6IE1heWJlIChIdG1sRGV0YWlscyBtc2cpXG4gICAgfVxuXG5cbnstfCBTb21ldGltZXMgeW91IG11c3QgdXNlIGEgYDx0ZD5gIHRhZywgYnV0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjaGlsZHJlbiBhcmUgdXBcbnRvIHlvdS4gVGhpcyB0eXBlIGxldHMgeW91IHNwZWNpZnkgYWxsIHRoZSBkZXRhaWxzIG9mIGFuIEhUTUwgbm9kZSBleGNlcHQgdGhlXG50YWcgbmFtZS5cbi19XG50eXBlIGFsaWFzIEh0bWxEZXRhaWxzIG1zZyA9XG4gICAgeyBhdHRyaWJ1dGVzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCBjaGlsZHJlbiA6IEFycmF5IChIdG1sIG1zZylcbiAgICB9XG5cblxuey18IFRoZSBjdXN0b21pemF0aW9ucyB1c2VkIGluIGBjb25maWdgIGJ5IGRlZmF1bHQuXG4tfVxuZGVmYXVsdEN1c3RvbWl6YXRpb25zIDogQ3VzdG9taXphdGlvbnMgZGF0YSBtc2dcbmRlZmF1bHRDdXN0b21pemF0aW9ucyA9XG4gICAgeyBiZWZvcmVBbmRBZnRlclRhYmxlID0geyBiZWZvcmUgPSBOb3RoaW5nLCBhZnRlciA9IE5vdGhpbmcgfVxuICAgICwgdGFibGVBdHRycyA9IFsgQS5jbGFzcyBcImRhdGFUYWJsZVwiIF1cbiAgICAsIGNhcHRpb24gPSBOb3RoaW5nXG4gICAgLCBjb2xncm91cCA9IFxcXyAtPiBOb3RoaW5nXG4gICAgLCB0aGVhZCA9IGRlZmF1bHRUYWJsZUhlYWRlclxuICAgICwgdGJvZHlBdHRycyA9IFtdXG4gICAgLCByb3dBdHRycyA9IHNpbXBsZVJvd0F0dHJzXG4gICAgLCB0Zm9vdCA9IE5vdGhpbmdcbiAgICB9XG5cblxuZGVmYXVsdFRhYmxlSGVhZGVyIDogQXJyYXkgKEhlYWRlckluZm8gbXNnKSAtPiBIdG1sRGV0YWlscyBtc2dcbmRlZmF1bHRUYWJsZUhlYWRlciBoZWFkZXJJbmZvcyA9XG4gICAgbGV0XG4gICAgICAgIGRlZmF1bHRUSCA6IEhlYWRlckluZm8gbXNnIC0+IEh0bWwgbXNnXG4gICAgICAgIGRlZmF1bHRUSCB7IG5hbWUsIHNlbGVjdGVkLCBzb3J0RGlyZWN0aW9ucywgY2xpY2tBY3Rpb25zIH0gPVxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgY29sdW1uVGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW4gWyBBLmNsYXNzIFwiZHQtY29sdW1uLXRpdGxlXCIgXSBbIEh0bWwudGV4dCBuYW1lIF1cblxuICAgICAgICAgICAgICAgIGNvbHVtbk9yZGVyID1cbiAgICAgICAgICAgICAgICAgICAgaWYgQXJyYXkubGVuZ3RoIHNvcnREaXJlY3Rpb25zID4gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0IFsgeyBjbGFzcyA9IFwiZHQtY29sdW1uLW9yZGVyXCIsIGVuYWJsZWQgPSBUcnVlIH0gXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQXJpYS5sYWJlbCA8fCBcIkNsaWNrIGhlcmUgdG8gc29ydCBieSB0aGlzIGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLmF0dHJpYnV0ZSBcInJvbGVcIiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLnRhYmluZGV4IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW11cblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnRleHQgXCJcIlxuXG4gICAgICAgICAgICAgICAgY2FuQmVTb3J0ZWQgOiBTb3J0RGlyZWN0aW9uIC0+IEJvb2xcbiAgICAgICAgICAgICAgICBjYW5CZVNvcnRlZCBzb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkubWVtYmVyIHNvcnREaXJlY3Rpb24gc29ydERpcmVjdGlvbnNcblxuICAgICAgICAgICAgICAgIGlzU29ydGVkIDogU29ydERpcmVjdGlvbiAtPiBCb29sXG4gICAgICAgICAgICAgICAgaXNTb3J0ZWQgdmlld2VkU29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3ZWRTb3J0RGlyZWN0aW9uID09IHNvcnREaXJlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgICAgICAgICBhcmlhU29ydCA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEFyaWEuc29ydCA8fCBzb3J0RGlyZWN0aW9uVG9TdHJpbmcgc29ydERpcmVjdGlvbiBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgcm93QW5kQ29sU3BhbiA9XG4gICAgICAgICAgICAgICAgICAgIFsgQS5yb3dzcGFuIDEsIEEuY29sc3BhbiAxIF1cblxuICAgICAgICAgICAgICAgIHRoQ2xhc3NlcyA9XG4gICAgICAgICAgICAgICAgICAgIFsgQS5jbGFzc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgeyBjbGFzcyA9IFwiZHQtb3JkZXJhYmxlLWFzY1wiLCBlbmFibGVkID0gY2FuQmVTb3J0ZWQgQXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJhYmxlLWRlc2NcIiwgZW5hYmxlZCA9IGNhbkJlU29ydGVkIERlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1hc2NcIiwgZW5hYmxlZCA9IGlzU29ydGVkIEFzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyaW5nLWRlc2NcIiwgZW5hYmxlZCA9IGlzU29ydGVkIERlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1ub25lXCIsIGVuYWJsZWQgPSBub3QgKGlzU29ydGVkIEFzYykgJiYgbm90IChpc1NvcnRlZCBEZXNjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICAgIHRoQXR0cmlidXRlcyA9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQWN0aW9ucyArKyBhcmlhU29ydCArKyByb3dBbmRDb2xTcGFuICsrIHRoQ2xhc3Nlc1xuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIEh0bWwudGggdGhBdHRyaWJ1dGVzIFsgSHRtbC5kaXYgWyBBLmNsYXNzIFwiZHQtY29sdW1uLWhlYWRlclwiIF0gWyBjb2x1bW5UaXRsZSwgY29sdW1uT3JkZXIgXSBdXG4gICAgaW5cbiAgICB7IGF0dHJpYnV0ZXMgPSBbXSwgY2hpbGRyZW4gPSBbIEh0bWwudHIgW10gPHwgQXJyYXkubWFwIGRlZmF1bHRUSCBoZWFkZXJJbmZvcyBdIH1cblxuXG5zaW1wbGVSb3dBdHRycyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbnNpbXBsZVJvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YSA9XG4gICAgbGV0XG4gICAgICAgIGlzX2N1cnJlbnRfcm93ID1cbiAgICAgICAgICAgIGlmIHRvSWQgZGF0YSA9PSBnZXRBY3RpdmVSb3dJZCBzdGF0ZSB0aGVuXG4gICAgICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgRmFsc2VcbiAgICBpblxuICAgIGlmIGlzX2N1cnJlbnRfcm93IHRoZW5cbiAgICAgICAgWyBBLnN0eWxlIFwiYmFja2dyb3VuZFwiIFwiI0NFRkFGOFwiIF1cblxuICAgIGVsc2VcbiAgICAgICAgWyBFLm9uQ2xpY2sgPHwgdG9Nc2cgPHwgdXBkYXRlQWN0aXZlUm93SWQgKHRvSWQgZGF0YSkgc3RhdGUgXVxuXG5cblxuLS0gQ09MVU1OU1xuXG5cbnstfCBEZXNjcmliZXMgaG93IHRvIHR1cm4gYGRhdGFgIGludG8gYSBjb2x1bW4gaW4geW91ciB0YWJsZS5cbi19XG50eXBlIENvbHVtbiBkYXRhIG1zZ1xuICAgID0gQ29sdW1uIChDb2x1bW5EYXRhIGRhdGEgbXNnKVxuXG5cbnR5cGUgYWxpYXMgQ29sdW1uRGF0YSBkYXRhIG1zZyA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB2aWV3RGF0YSA6IGRhdGEgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cblxuXG5jb2x1bW5EYXRhIG5hbWUgdmlld0RhdGEgc29ydGVyID1cbiAgICB7IG5hbWUgPSBuYW1lXG4gICAgLCB2aWV3RGF0YSA9IHZpZXdEYXRhXG4gICAgLCBzb3J0ZXIgPSBzb3J0ZXJcbiAgICB9XG5cblxudHlwZSBhbGlhcyBDb2x1bW5IZWFkZXIgZGF0YSA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cblxuXG50b0hlYWRlciA6IENvbHVtbkRhdGEgZGF0YSBtc2cgLT4gQ29sdW1uSGVhZGVyIGRhdGFcbnRvSGVhZGVyIHsgbmFtZSwgc29ydGVyIH0gPVxuICAgIHsgbmFtZSA9IG5hbWUsIHNvcnRlciA9IHNvcnRlciB9XG5cblxuey18IC19XG5zdHJpbmdDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gU3RyaW5nKSAtPiBDb2x1bW4gZGF0YSBtc2dcbnN0cmluZ0NvbHVtbiBuYW1lIHRvU3RyID1cbiAgICBDb2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdGV4dERldGFpbHMgPDwgdG9TdHJcbiAgICAgICAgLCBzb3J0ZXIgPSBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9TdHJcbiAgICAgICAgfVxuXG5cbnstfCAtfVxuaW50Q29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEludCkgLT4gQ29sdW1uIGRhdGEgbXNnXG5pbnRDb2x1bW4gbmFtZSB0b0ludCA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IFN0cmluZy5mcm9tSW50IDw8IHRvSW50XG4gICAgICAgICwgc29ydGVyID0gaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvSW50XG4gICAgICAgIH1cblxuXG57LXwgLX1cbmZsb2F0Q29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEZsb2F0KSAtPiBDb2x1bW4gZGF0YSBtc2dcbmZsb2F0Q29sdW1uIG5hbWUgdG9GbG9hdCA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IFN0cmluZy5mcm9tRmxvYXQgPDwgdG9GbG9hdFxuICAgICAgICAsIHNvcnRlciA9IGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0Zsb2F0XG4gICAgICAgIH1cblxuXG57LXwgWW91IG1heSBub3QgZmluZCB0aGUgaGVscGVyIGZ1bmN0aW9ucyBmb3IgYFN0cmluZ2AsIGBJbnRgIGFuZCBgRmxvYXRgIHRvIGJlIGZsZXhpYmxlXG4gICAgZW5vdWdoIGZvciB5b3VyIG5lZWRzLiBZb3UgbWF5IGRlZmluZSB5b3VyIG93biBjb2x1bW4gY29uZmlndXJhdGlvbiB3aXRoIHRoaXMgZnVuY3Rpb24sXG4gICAgYnkgcHJvdmlkaW5nIG9wdGlvbmFsbHkgZGlzdGluY3QgY29sdW1uIGhlYWRlciBuYW1lIGFuZCBjb2x1bW4gaWQgZnVuY3Rpb25zLCBvcHRpb25hbGx5IGRpc3RpbmN0IGRpc3BsYXksIGZpbHRlciBhbmQgc29ydCByZW5kZXIgZnVuY3Rpb25zXG4gICAgYW5kIGFuIEFycmF5IG9mIGBTb3J0RGlyZWN0aW9uYHMuXG5cblxuLX1cbmNvbHVtbiA6XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB0b1N0cmluZyA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCBzb3J0RGlyZWN0aW9ucyA6IFplcm9PbmVPclR3byBTb3J0RGlyZWN0aW9uXG4gICAgfVxuICAgIC0+IENvbHVtbiBkYXRhIG1zZ1xuY29sdW1uIHsgbmFtZSwgdG9TdHJpbmcsIHNvcnREaXJlY3Rpb25zIH0gPVxuICAgIGN1c3RvbUNvbHVtblxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgaWQgPSBuYW1lXG4gICAgICAgICwgdmlld0RhdGEgPSB0b1N0cmluZ1xuICAgICAgICAsIGZpbHRlckRhdGEgPSB0b1N0cmluZ1xuICAgICAgICAsIHNvcnREYXRhID0gdG9TdHJpbmdcbiAgICAgICAgLCBzb3J0RGlyZWN0aW9ucyA9IHNvcnREaXJlY3Rpb25zXG4gICAgICAgIH1cblxuXG50ZXh0RGV0YWlscyA6IFN0cmluZyAtPiBIdG1sRGV0YWlscyBtc2dcbnRleHREZXRhaWxzIHN0ciA9XG4gICAgeyBhdHRyaWJ1dGVzID0gW10sIGNoaWxkcmVuID0gWyBIdG1sLnRleHQgc3RyIF0gfVxuXG5cbnR5cGUgWmVyb09uZU9yVHdvIGFcbiAgICA9IFplcm9cbiAgICB8IE9uZSBhXG4gICAgfCBUd28gYVxuXG5cbmdldFNvcnRlciA6IFplcm9PbmVPclR3byBTb3J0RGlyZWN0aW9uIC0+IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5nZXRTb3J0ZXIgc29ydERpcmVjdGlvbnMgdG9Db21wYXJhYmxlID1cbiAgICB3aGVuIHNvcnREaXJlY3Rpb25zIGlzXG4gICAgICAgIFR3byBBc2MgLT5cbiAgICAgICAgICAgIGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBUd28gRGVzYyAtPlxuICAgICAgICAgICAgZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5IHRvQ29tcGFyYWJsZVxuXG4gICAgICAgIE9uZSBBc2MgLT5cbiAgICAgICAgICAgIGluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGVcblxuICAgICAgICBPbmUgRGVzYyAtPlxuICAgICAgICAgICAgZGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZVxuXG4gICAgICAgIFplcm8gLT5cbiAgICAgICAgICAgIHVuc29ydGFibGVcblxuXG57LXwgUGVyaGFwcyB0aGUgYmFzaWMgY29sdW1ucyBhcmUgbm90IHF1aXRlIHdoYXQgeW91IHdhbnQuIE1heWJlIHlvdSB3YW50IHRvXG5kaXNwbGF5IG1vbmV0YXJ5IHZhbHVlcyBpbiB0aG91c2FuZHMgb2YgZG9sbGFycywgYW5kIGBmbG9hdENvbHVtbmAgZG9lcyBub3RcbnF1aXRlIGN1dCBpdC4gWW91IGNvdWxkIGRlZmluZSBhIGN1c3RvbSBjb2x1bW4gbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IFRhYmxlXG5cbiAgICBkb2xsYXJDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuICAgIGRvbGxhckNvbHVtbiBuYW1lIHRvRG9sbGFycyA9XG4gICAgICAgIFRhYmxlLmN1c3RvbUNvbHVtblxuICAgICAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAgICAgLCB2aWV3RGF0YSA9IFxcZGF0YSAtPiB2aWV3RG9sbGFycyAodG9Eb2xsYXJzIGRhdGEpXG4gICAgICAgICAgICAsIHNvcnRlciA9IFRhYmxlLmRlY3JlYXNpbmdCeSB0b0RvbGxhcnNcbiAgICAgICAgICAgIH1cblxuICAgIHZpZXdEb2xsYXJzIDogRmxvYXQgLT4gU3RyaW5nXG4gICAgdmlld0RvbGxhcnMgZG9sbGFycyA9XG4gICAgICAgIFwiJFwiICsrIFN0cmluZy5mcm9tSW50IChyb3VuZCAoZG9sbGFycyAvIDEwMDApKSArKyBcImtcIlxuXG5UaGUgYHZpZXdEYXRhYCBmaWVsZCBtZWFucyB3ZSB3aWxsIGRpc3BsYXlzIHRoZSBudW1iZXIgYDEyMzQ1LjY3YCBhcyBgJDEya2AuXG5cblRoZSBgc29ydGVyYCBmaWVsZCBzcGVjaWZpZXMgaG93IHRoZSBjb2x1bW4gY2FuIGJlIHNvcnRlZC4gSW4gYGRvbGxhckNvbHVtbmAgd2VcbmFyZSBzYXlpbmcgdGhhdCBpdCBjYW4gX29ubHlfIGJlIHNob3duIGZyb20gaGlnaGVzdC10by1sb3dlc3QgbW9uZXRhcnkgdmFsdWUuXG5Nb3JlIGFib3V0IHNvcnRlcnMgc29vbiFcblxuLX1cbmN1c3RvbUNvbHVtbiA6XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCBpZCA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgZmlsdGVyRGF0YSA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCBzb3J0RGF0YSA6IGRhdGEgLT4gY29tcGFyYWJsZVxuICAgICwgc29ydERpcmVjdGlvbnMgOiBaZXJvT25lT3JUd28gU29ydERpcmVjdGlvblxuICAgIH1cbiAgICAtPiBDb2x1bW4gZGF0YSBtc2dcbmN1c3RvbUNvbHVtbiB7IG5hbWUsIGlkLCB2aWV3RGF0YSwgZmlsdGVyRGF0YSwgc29ydERhdGEsIHNvcnREaXJlY3Rpb25zIH0gPVxuICAgIENvbHVtbiA8fFxuICAgICAgICBjb2x1bW5EYXRhIG5hbWUgKHRleHREZXRhaWxzIDw8IHZpZXdEYXRhKSA8fFxuICAgICAgICAgICAgZ2V0U29ydGVyIHNvcnREaXJlY3Rpb25zIHNvcnREYXRhXG5cblxuey18IEl0IGlzIF9wb3NzaWJsZV8gdGhhdCB5b3Ugd2FudCBzb21ldGhpbmcgY3JhemllciB0aGFuIGBjdXN0b21Db2x1bW5gLiBJblxudGhhdCB1bmxpa2VseSBzY2VuYXJpbywgdGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZVxuYXR0cmlidXRlcyBhbmQgY2hpbGRyZW4gb2YgZWFjaCBgPHRkPmAgY2VsbCBpbiB0aGlzIGNvbHVtbi5cblxuU28gbWF5YmUgeW91IHdhbnQgdG8gYSBkb2xsYXJzIGNvbHVtbiwgYW5kIHRoZSBkb2xsYXIgc2lnbnMgc2hvdWxkIGJlIGdyZWVuLlxuXG4gICAgaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbCwgc3BhbiwgdGV4dClcbiAgICBpbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChzdHlsZSlcbiAgICBpbXBvcnQgVGFibGVcblxuICAgIGRvbGxhckNvbHVtbiA6IFN0cmluZyAtPiAoZGF0YSAtPiBGbG9hdCkgLT4gQ29sdW1uIGRhdGEgbXNnXG4gICAgZG9sbGFyQ29sdW1uIG5hbWUgdG9Eb2xsYXJzID1cbiAgICAgICAgVGFibGUudmVyeUN1c3RvbUNvbHVtblxuICAgICAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAgICAgLCB2aWV3RGF0YSA9IFxcZGF0YSAtPiB2aWV3RG9sbGFycyAodG9Eb2xsYXJzIGRhdGEpXG4gICAgICAgICAgICAsIHNvcnRlciA9IFRhYmxlLmRlY3JlYXNpbmdCeSB0b0RvbGxhcnNcbiAgICAgICAgICAgIH1cblxuICAgIHZpZXdEb2xsYXJzIDogRmxvYXQgLT4gVGFibGUuSHRtbERldGFpbHMgbXNnXG4gICAgdmlld0RvbGxhcnMgZG9sbGFycyA9XG4gICAgICAgIFRhYmxlLkh0bWxEZXRhaWxzIFtdXG4gICAgICAgICAgICBbIHNwYW4gWyBzdHlsZSBcImNvbG9yXCIgXCJncmVlblwiIF0gWyB0ZXh0IFwiJFwiIF1cbiAgICAgICAgICAgICwgdGV4dCAoU3RyaW5nLmZyb21JbnQgKHJvdW5kIChkb2xsYXJzIC8gMTAwMCkpICsrIFwia1wiKVxuICAgICAgICAgICAgXVxuXG4tfVxudmVyeUN1c3RvbUNvbHVtbiA6XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB2aWV3RGF0YSA6IGRhdGEgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cbiAgICAtPiBDb2x1bW4gZGF0YSBtc2dcbnZlcnlDdXN0b21Db2x1bW4gPVxuICAgIENvbHVtblxuXG5cblxuLS0gVklFV1xuXG5cbnstfCBUYWtlIGFuIGFycmF5IG9mIGRhdGEgYW5kIHR1cm4gaXQgaW50byBhIHRhYmxlLiBUaGUgYENvbmZpZ2AgYXJndW1lbnQgaXMgdGhlXG5jb25maWd1cmF0aW9uIGZvciB0aGUgdGFibGUuIEl0IGRlc2NyaWJlcyB0aGUgY29sdW1ucyB0aGF0IHdlIHdhbnQgdG8gc2hvdy4gVGhlXG5gU3RhdGVgIGFyZ3VtZW50IGNvbnRhaW5zIHRoZSBjdXJyZW50IGludGVybmFsIHN0YXRlIG9mIHRoZSB0YWJsZSwgaW5jbHVkaW5nIHdoaWNoXG5jb2x1bW4ocykgdGhlIHJvd3MgYXJlIHNvcnRlZCBieSBhdCB0aGUgbW9tZW50LCBvciB3aGljaCByb3cgaXMgY3VycmVudGx5IGFjdGl2ZS5cblRoZSBgZGF0YWAgdHlwZSB3aWxsIHVzdWFsbHkgYmUgYSByZWNvcmQsIGJ1dCBhbnkgdmFsdWUgaXMgcG9zc2libGUuXG5cbioqTm90ZToqKiBUaGUgYFN0YXRlYCBhbmQgYEFycmF5IGRhdGFgIHNob3VsZCBsaXZlIGluIHlvdXIgYE1vZGVsYC4gVGhlIGBDb25maWdgXG5mb3IgdGhlIHRhYmxlIGJlbG9uZ3MgKGhhcmQtY29kZWQpIGluIHlvdXIgYHZpZXdgIGNvZGUsIGFzIGl0IGlzIGp1c3QgYSBjb2xsZWN0aW9uXG5vZiBjdXN0b21pemFibGUgdmlldyBhbmQgaGVscGVyIGZ1bmN0aW9ucyBhbmQgaXQgaXMgc3Ryb25nbHkgcmVjb21tZW5kZWQgbm90IHRvXG5wdXQgYW55IGZ1bmN0aW9ucyBpbiB5b3VyIG1vZGVsLlxuXG4tfVxudmlldyA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBBcnJheSBkYXRhIC0+IEh0bWwgbXNnXG52aWV3ICgoQ29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMsIGN1c3RvbWl6YXRpb25zIH0pIGFzIGNvbmYpIHN0YXRlIGRhdGEgPVxuICAgIGxldFxuICAgICAgICByb3dzID1cbiAgICAgICAgICAgIGdldFBhZ2luYXRlZERhdGEgY29uZiBzdGF0ZSA8fCBnZXRTb3J0ZWREYXRhIGNvbmYgc3RhdGUgZGF0YVxuXG4gICAgICAgIGhlYWRlcnMgPVxuICAgICAgICAgICAgQXJyYXkubWFwIHRvSGVhZGVyIGNvbHVtbnNcblxuICAgICAgICB0aGVhZERldGFpbHMgPVxuICAgICAgICAgICAgY3VzdG9taXphdGlvbnMudGhlYWQgPHwgQXJyYXkubWFwICh0b0hlYWRlckluZm8gc3RhdGUgdG9Nc2cpIGhlYWRlcnNcblxuICAgICAgICB0aGVhZCA9XG4gICAgICAgICAgICBIdG1sLnRoZWFkIHRoZWFkRGV0YWlscy5hdHRyaWJ1dGVzIHRoZWFkRGV0YWlscy5jaGlsZHJlblxuXG4gICAgICAgIHRib2R5ID1cbiAgICAgICAgICAgIEtleWVkLm5vZGUgXCJ0Ym9keVwiIGN1c3RvbWl6YXRpb25zLnRib2R5QXR0cnMgPHxcbiAgICAgICAgICAgICAgICBBcnJheS5tYXAgKHZpZXdSb3cgdG9JZCB0b01zZyBjb2x1bW5zIGN1c3RvbWl6YXRpb25zLnJvd0F0dHJzIHN0YXRlKSByb3dzXG5cbiAgICAgICAgd2l0aEZvb3QgPVxuICAgICAgICAgICAgd2hlbiBjdXN0b21pemF0aW9ucy50Zm9vdCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgWyB0Ym9keSBdXG5cbiAgICAgICAgICAgICAgICBKdXN0IHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSAtPlxuICAgICAgICAgICAgICAgICAgICBbIEh0bWwudGZvb3QgYXR0cmlidXRlcyBjaGlsZHJlbiwgdGJvZHkgXVxuICAgIGluXG4gICAgSHRtbC50YWJsZSBjdXN0b21pemF0aW9ucy50YWJsZUF0dHJzIDx8XG4gICAgICAgICh3aGVuIGN1c3RvbWl6YXRpb25zLmNhcHRpb24gaXNcbiAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICBbIHRoZWFkIF0gKysgd2l0aEZvb3RcblxuICAgICAgICAgICAgSnVzdCB7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0gLT5cbiAgICAgICAgICAgICAgICBbIEh0bWwuY2FwdGlvbiBhdHRyaWJ1dGVzIGNoaWxkcmVuIF0gKysgWyB0aGVhZCBdICsrIHdpdGhGb290XG4gICAgICAgIClcblxuXG50eXBlIGFsaWFzIEhlYWRlckluZm8gbXNnID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHNlbGVjdGVkIDogTWF5YmUgeyBzb3J0UmFuayA6IEludCwgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuICAgICwgLS0gTm90aGluZyBpZiBub3Qgc2VsZWN0ZWQsIG90aGVyd2lzZSBKdXN0IHtzb3J0UmFuaywgc29ydERpcmVjdGlvbn1cbiAgICAgIHNvcnREaXJlY3Rpb25zIDogQXJyYXkgU29ydERpcmVjdGlvblxuICAgICwgLS0gRW1wdHkgaWYgVW5zb3J0YWJsZVxuICAgICAgY2xpY2tBY3Rpb25zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgfVxuXG5cbmhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBzb3J0RGlyZWN0aW9ucyBjbGlja0FjdGlvbnMgPVxuICAgIHsgbmFtZSA9IG5hbWVcbiAgICAsIHNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAsIHNvcnREaXJlY3Rpb25zID0gc29ydERpcmVjdGlvbnNcbiAgICAsIGNsaWNrQWN0aW9ucyA9IGNsaWNrQWN0aW9uc1xuICAgIH1cblxuXG50b0hlYWRlckluZm8gOiBTdGF0ZSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBDb2x1bW5IZWFkZXIgZGF0YSAtPiBIZWFkZXJJbmZvIG1zZ1xudG9IZWFkZXJJbmZvICgoU3RhdGUgeyBzb3J0Q29sdW1ucyB9KSBhcyBzdGF0ZSkgdG9Nc2cgeyBuYW1lLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIHJldmVyc2UgYSA9XG4gICAgICAgICAgICB3aGVuIGEgaXNcbiAgICAgICAgICAgICAgICBEZXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIEFzY1xuXG4gICAgICAgICAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICB3aGVuIHNvcnRDb2x1bW5zIGlzXG4gICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgbm9uRW1wdHlMaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlZExpc3QgOiBBcnJheSB7IGxlZnQgOiBJbnQsIHJpZ2h0IDogeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVkTGlzdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaW5kZXhlZE1hcCAoXFxpZHggdmFsIC0+IHsgbGVmdCA9IGlkeCwgcmlnaHQgPSB2YWwgfSkgPHwgQXJyYXkucmV2ZXJzZSBub25FbXB0eUxpc3RcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5rZWVwSWYgKFxceyByaWdodCA9IHsgc29ydENvbHVtbk5hbWUgfSB9IC0+IG5hbWUgPT0gc29ydENvbHVtbk5hbWUpIGluZGV4ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIGluXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gQXJyYXkudGFrZUZpcnN0IDEgZmlsdGVyZWRMaXN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgbGVmdCA9IGluZGV4LCByaWdodCA9IHsgc29ydERpcmVjdGlvbiB9IH0gXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiwgc29ydFJhbmsgPSBpbmRleCB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2Ugc29ydERpcmVjdGlvblxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNvcnRlciBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzY1xuICAgIGluXG4gICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgTm9uZSAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIE5vdGhpbmcgW10gW11cblxuICAgICAgICBSb3dOdW1iZXIgLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBOb3RoaW5nIFtdIFtdXG5cbiAgICAgICAgSW5jcmVhc2luZyBfIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgWyBBc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIEFzYyB0b01zZ1xuXG4gICAgICAgIERlY3JlYXNpbmcgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgRGVzYyB0b01zZ1xuXG4gICAgICAgIEluY09yRGVjIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIEFzYywgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uIHRvTXNnXG5cbiAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYywgQXNjIF0gPHwgb25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSByZXZlcnNlZFNvcnREaXJlY3Rpb24gdG9Nc2dcblxuXG5vbkNvbHVtbkhlYWRlciA6IFN0YXRlIC0+IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IChTdGF0ZSAtPiBtc2cpIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxub25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSBzb3J0RGlyZWN0aW9uIHRvTXNnID1cbiAgICBbIEUub25DbGljayA8fFxuICAgICAgICB0b01zZyA8fFxuICAgICAgICAgICAgdXBkYXRlTXVsdGlTb3J0U3RhdGUgbmFtZSBzb3J0RGlyZWN0aW9uIHN0YXRlXG4gICAgLCBFLm9uRG91YmxlQ2xpY2sgPHxcbiAgICAgICAgdG9Nc2cgPHxcbiAgICAgICAgICAgIHVwZGF0ZVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICBdXG5cblxudmlld1JvdyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+ICgoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfVxudmlld1JvdyB0b0lkIHRvTXNnIGNvbHVtbnMgdG9Sb3dBdHRycyBzdGF0ZSBkYXRhID1cbiAgICB7IGtleSA9IHRvSWQgZGF0YVxuICAgICwgbm9kZSA9IHZpZXdSb3dIZWxwIGNvbHVtbnMgdG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGFcbiAgICB9XG5cblxudmlld1Jvd0hlbHAgOiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gKChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykpIC0+IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBIdG1sIG1zZ1xudmlld1Jvd0hlbHAgY29sdW1ucyB0b1Jvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YSA9XG4gICAgSHRtbC50ciAodG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEpIDx8XG4gICAgICAgIEFycmF5Lm1hcCAodmlld0NlbGwgZGF0YSkgY29sdW1uc1xuXG5cbnZpZXdDZWxsIDogZGF0YSAtPiBDb2x1bW5EYXRhIGRhdGEgbXNnIC0+IEh0bWwgbXNnXG52aWV3Q2VsbCBkYXRhIHsgdmlld0RhdGEsIHNvcnRlciB9ID1cbiAgICBsZXRcbiAgICAgICAgZGV0YWlscyA9XG4gICAgICAgICAgICB2aWV3RGF0YSBkYXRhXG4gICAgaW5cbiAgICBIdG1sLnRkIGRldGFpbHMuYXR0cmlidXRlcyBkZXRhaWxzLmNoaWxkcmVuXG5cblxuXG4tLSBTT1JUSU5HXG5cblxuc29ydCA6IFN0YXRlIC0+IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbnNvcnQgKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiwgdGFibGVJZCB9KSBjRGF0YSBkYXRhID1cbiAgICB3aGVuIEFycmF5LnBvcEZpcnN0IHNvcnRDb2x1bW5zIGlzXG4gICAgICAgIEp1c3QgeyBmaXJzdCA9IHsgc29ydENvbHVtbk5hbWUsIHNvcnREaXJlY3Rpb24gfSwgcmVzdCA9IHJlc3QgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kU29ydGVyIHNvcnRDb2x1bW5OYW1lIGNEYXRhIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBkYXRhXG5cbiAgICAgICAgICAgICAgICBKdXN0IHNvcnRlciAtPlxuICAgICAgICAgICAgICAgICAgICBzb3J0IChTdGF0ZSB7IHNvcnRDb2x1bW5zID0gcmVzdCwgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH0pIGNEYXRhIDx8IGFwcGx5U29ydGVyIHNvcnREaXJlY3Rpb24gc29ydGVyIGRhdGFcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkYXRhXG5cblxuYXBwbHlTb3J0ZXIgOiBTb3J0RGlyZWN0aW9uIC0+IFNvcnRlciBkYXRhIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuYXBwbHlTb3J0ZXIgc29ydERpcmVjdGlvbiBzb3J0ZXIgZGF0YSA9XG4gICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgTm9uZSAtPlxuICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgIFJvd051bWJlciAtPlxuICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgIEluY3JlYXNpbmcgc3J0IC0+XG4gICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgIERlY3JlYXNpbmcgc3J0IC0+XG4gICAgICAgICAgICBBcnJheS5yZXZlcnNlIChzcnQgZGF0YSlcblxuICAgICAgICBJbmNPckRlYyBzcnQgLT5cbiAgICAgICAgICAgIGlmIHNvcnREaXJlY3Rpb24gPT0gRGVzYyB0aGVuXG4gICAgICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgIERlY09ySW5jIHNydCAtPlxuICAgICAgICAgICAgaWYgc29ydERpcmVjdGlvbiA9PSBEZXNjIHRoZW5cbiAgICAgICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cblxuZmluZFNvcnRlciA6IFN0cmluZyAtPiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gTWF5YmUgKFNvcnRlciBkYXRhKVxuZmluZFNvcnRlciBzZWxlY3RlZENvbHVtbiBjRGF0YSA9XG4gICAgd2hlbiBBcnJheS5wb3BGaXJzdCBjRGF0YSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBuYW1lLCBzb3J0ZXIgfSwgcmVzdCB9IC0+XG4gICAgICAgICAgICBpZiBuYW1lID09IHNlbGVjdGVkQ29sdW1uIHRoZW5cbiAgICAgICAgICAgICAgICBKdXN0IHNvcnRlclxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZmluZFNvcnRlciBzZWxlY3RlZENvbHVtbiByZXN0XG5cblxuey18IFJldHVybiB0aGUgZGF0YSBzb3J0ZWQgZXhhY3RseSBhcyBpdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLlxuLX1cbmdldFNvcnRlZERhdGEgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5nZXRTb3J0ZWREYXRhIChDb25maWcgeyBjb2x1bW5zIH0pIHN0YXRlIGRhdGEgPVxuICAgIHNvcnQgc3RhdGUgY29sdW1ucyBkYXRhXG5cblxuXG4tLSBTT1JURVJTXG5cblxuey18IFNwZWNpZmllcyBhIHBhcnRpY3VsYXIgd2F5IG9mIHNvcnRpbmcgZGF0YS5cbi19XG50eXBlIFNvcnRlciBkYXRhXG4gICAgPSBOb25lXG4gICAgfCBSb3dOdW1iZXJcbiAgICB8IEluY3JlYXNpbmcgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcbiAgICB8IERlY3JlYXNpbmcgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcbiAgICB8IEluY09yRGVjIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBEZWNPckluYyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuXG5cbnstfCBBIHNvcnRlciBmb3IgY29sdW1ucyB0aGF0IGFyZSB1bnNvcnRhYmxlLiBNYXliZSB5b3UgaGF2ZSBhIGNvbHVtbiBpbiB5b3VyXG50YWJsZSBmb3IgZGVsZXRlIGJ1dHRvbnMgdGhhdCBkZWxldGUgdGhlIHJvdy4gSXQgd291bGQgbm90IG1ha2UgYW55IHNlbnNlIHRvXG5zb3J0IGJhc2VkIG9uIHRoYXQgY29sdW1uLlxuLX1cbnVuc29ydGFibGUgOiBTb3J0ZXIgZGF0YVxudW5zb3J0YWJsZSA9XG4gICAgTm9uZVxuXG5cbnstfCBDcmVhdGUgYSBzb3J0ZXIgdGhhdCBjYW4gb25seSBkaXNwbGF5IHRoZSBkYXRhIGluIGluY3JlYXNpbmcgb3JkZXIuIElmIHdlXG53YW50IGEgdGFibGUgb2YgcGVvcGxlLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkgYnkgbmFtZSwgd2Ugd291bGQgc2F5IHRoaXM6XG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgbmFtZSA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGluY3JlYXNpbmdCeSAubmFtZVxuXG4tfVxuaW5jcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIEluY3JlYXNpbmcgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IENyZWF0ZSBhIHNvcnRlciB0aGF0IGNhbiBvbmx5IGRpc3BsYXkgdGhlIGRhdGEgaW4gZGVjcmVhc2luZyBvcmRlci4gSWYgd2VcbndhbnQgYSB0YWJsZSBvZiBjb3VudHJpZXMsIHNvcnRlZCBieSBwb3B1bGF0aW9uIGZyb20gaGlnaGVzdCB0byBsb3dlc3QsIHdlXG53b3VsZCBzYXkgdGhpczpcblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCBwb3B1bGF0aW9uIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgZGVjcmVhc2luZ0J5IC5wb3B1bGF0aW9uXG5cbi19XG5kZWNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgRGVjcmVhc2luZyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG57LXwgU29tZXRpbWVzIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gc29ydCBkYXRhIGluIGluY3JlYXNpbmcgX29yXyBkZWNyZWFzaW5nXG5vcmRlci4gTWF5YmUgeW91IGhhdmUgYSBidW5jaCBvZiBkYXRhIGFib3V0IG9yYW5nZSBqdWljZSwgYW5kIHlvdSB3YW50IHRvIGtub3dcbmJvdGggd2hpY2ggaGFzIHRoZSBtb3N0IHN1Z2FyLCBhbmQgd2hpY2ggaGFzIHRoZSBsZWFzdCBzdWdhci4gQm90aCBpbnRlcmVzdGluZyFcblRoaXMgZnVuY3Rpb24gbGV0cyB5b3Ugc2VlIGJvdGgsIHN0YXJ0aW5nIHdpdGggZGVjcmVhc2luZyBvcmRlci5cblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCBzdWdhciA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSAuc3VnYXJcblxuLX1cbmRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5kZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBEZWNPckluYyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG57LXwgU29tZXRpbWVzIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gc29ydCBkYXRhIGluIGluY3JlYXNpbmcgX29yXyBkZWNyZWFzaW5nXG5vcmRlci4gTWF5YmUgeW91IGhhdmUgcmFjZSB0aW1lcyBmb3IgdGhlIDEwMCBtZXRlciBzcHJpbnQuIFRoaXMgZnVuY3Rpb24gbGV0c1xuc29ydCBieSBiZXN0IHRpbWUgYnkgZGVmYXVsdCwgYnV0IGFsc28gc2VlIHRoZSBvdGhlciBvcmRlci5cblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCB0aW1lIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IC50aW1lXG5cbi19XG5pbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgSW5jT3JEZWMgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxudHlwZSBQYWdpbmF0aW9uU3R5bGVcbiAgICA9IE5vUGFnaW5hdGlvblxuICAgIHwgUGFnZXIgKEFycmF5IEludClcbiAgICB8IFNjcm9sbGVyIChBcnJheSBJbnQpXG5cblxuey18IC19XG5zZXROb1BhZ2luYXRpb24gOiBTdGF0ZSAtPiBTdGF0ZVxuc2V0Tm9QYWdpbmF0aW9uIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGUgeyBjdXJyZW50U3RhdGUgfCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uIH1cblxuXG57LXwgLX1cbnNldFNpbXBsZVBhZ2luYXRpb24gOiBTdGF0ZSAtPiBTdGF0ZVxuc2V0U2ltcGxlUGFnaW5hdGlvbiBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlIHsgY3VycmVudFN0YXRlIHwgcGFnaW5hdGlvbiA9IFBhZ2VyIFsgMTAsIDI1LCA1MCwgMTAwIF0gfVxuXG5cbnstfCAtfVxuc2V0UGFnaW5hdGlvbldpdGggOiBJbnQgLT4gQXJyYXkgSW50IC0+IFN0YXRlIC0+IFN0YXRlXG5zZXRQYWdpbmF0aW9uV2l0aCBkZWZhdWx0UGFnZVNpemUgb3RoZXJQYWdlU2l6ZXMgc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZVxuICAgICAgICAgICAgICAgIHsgY3VycmVudFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHwgcGFnaW5hdGlvbiA9IFBhZ2VyIDx8IEFycmF5LnNvcnQgPHwgWyBkZWZhdWx0UGFnZVNpemUgXSArKyBvdGhlclBhZ2VTaXplc1xuICAgICAgICAgICAgICAgICAgICAsIHBhZ2VTaXplID0gZGVmYXVsdFBhZ2VTaXplXG4gICAgICAgICAgICAgICAgfVxuXG5cbnstfCAtfVxuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGggOiBJbnQgLT4gQXJyYXkgSW50IC0+IFN0YXRlIC0+IFN0YXRlXG5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCBkZWZhdWx0UGFnZVNpemUgb3RoZXJQYWdlU2l6ZXMgc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZVxuICAgICAgICAgICAgICAgIHsgY3VycmVudFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHwgcGFnaW5hdGlvbiA9IFNjcm9sbGVyIDx8IEFycmF5LnNvcnQgPHwgWyBkZWZhdWx0UGFnZVNpemUgXSArKyBvdGhlclBhZ2VTaXplc1xuICAgICAgICAgICAgICAgICAgICAsIHBhZ2VTaXplID0gZGVmYXVsdFBhZ2VTaXplXG4gICAgICAgICAgICAgICAgfVxuXG5cbnstfCAtfVxuZ2V0UGFnaW5hdGVkRGF0YSA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbmdldFBhZ2luYXRlZERhdGEgKENvbmZpZyB7IHRvSWQgfSkgKFN0YXRlIHsgcGFnZVNpemUsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uIH0pIGRhdGEgPVxuICAgIGxldFxuICAgICAgICByb3dDdXJzb3IgPVxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIHw+IEFycmF5LmZpbmRGaXJzdCAoXFx2IC0+IHRvSWQgdiA9PSBhY3RpdmVSb3dJZClcbiAgICAgICAgICAgICAgICB8PiBNYXliZS5tYXAgLmluZGV4XG4gICAgICAgICAgICAgICAgfD4gTWF5YmUubWFwIChcXGkgLT4gaSArIDEpXG4gICAgICAgICAgICAgICAgfD4gTWF5YmUud2l0aERlZmF1bHQgMFxuXG4gICAgICAgIHByZWNlZGluZ0Z1bGxQYWdlcyA9XG4gICAgICAgICAgICAocm93Q3Vyc29yIC0gMSkgLy8gcGFnZVNpemVcblxuICAgICAgICBsYXN0Um93T25QYWdlID1cbiAgICAgICAgICAgIHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgICAgIFBhZ2VyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBwYWdlU2l6ZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLS0gcGFnZSBzaXplIDAgbWVhbnMgc2hvdyBhbGwgcm93cyB3YXMgY2hvc2VuIGZyb20gcGFnZSBzaXplIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZWNlZGluZ0Z1bGxQYWdlcyArIDEpICogcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgcGFnZVNpemUgPT0gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29tcGFyZSByb3dDdXJzb3IgKHBhZ2VTaXplIC8vIDIpIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yICsgcGFnZVNpemUgLy8gMlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhXG5cbiAgICAgICAgbGFzdFJvd0JlZm9yZVBhZ2UgPVxuICAgICAgICAgICAgd2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICAgICAgUGFnZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICBwcmVjZWRpbmdGdWxsUGFnZXMgKiBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgU2Nyb2xsZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBwYWdlU2l6ZSA9PSAwIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciAtIDJcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbXBhcmUgcm93Q3Vyc29yIDx8IEFycmF5Lmxlbmd0aCBkYXRhIC0gcGFnZVNpemUgLy8gMiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhIC0gcGFnZVNpemVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaXNFdmVuIHBhZ2VTaXplIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciAtIHBhZ2VTaXplIC8vIDJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDdXJzb3IgLSBwYWdlU2l6ZSAvLyAyIC0gMVxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICBpblxuICAgIGRhdGFcbiAgICAgICAgfD4gQXJyYXkudGFrZUZpcnN0IChuZWdhdGl2ZVRvWmVybyBsYXN0Um93T25QYWdlKVxuICAgICAgICB8PiBBcnJheS5kcm9wRmlyc3QgKG5lZ2F0aXZlVG9aZXJvIGxhc3RSb3dCZWZvcmVQYWdlKVxuXG5cbnstfCAtfVxucGFnZUxlbmd0aENob29zZXIgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gSHRtbCBtc2dcbnBhZ2VMZW5ndGhDaG9vc2VyIChDb25maWcgeyB0b01zZyB9KSAoKFN0YXRlIHsgcGFnaW5hdGlvbiB9KSBhcyB0YWJsZVN0YXRlKSA9XG4gICAgbGV0XG4gICAgICAgIG9uUGFnZVNpemVDaG9pY2UgOiBTdGF0ZSAtPiBIdG1sLkF0dHJpYnV0ZSBtc2dcbiAgICAgICAgb25QYWdlU2l6ZUNob2ljZSBzdGF0ZSA9XG4gICAgICAgICAgICBFLm9uIFwiY2hhbmdlXCIgPHxcbiAgICAgICAgICAgICAgICBKc29uLkRlY29kZS5tYXAgKFxcbmV3UGFnZVNpemUgLT4gdG9Nc2cgPHwgdXBkYXRlUGFnZVNpemUgbmV3UGFnZVNpemUgc3RhdGUpIDx8XG4gICAgICAgICAgICAgICAgICAgIEpzb24uRGVjb2RlLm1hcCAoTWF5YmUud2l0aERlZmF1bHQgMCA8PCBTdHJpbmcudG9JbnQpIDx8XG4gICAgICAgICAgICAgICAgICAgICAgICBFLnRhcmdldFZhbHVlXG5cbiAgICAgICAgdmlld09wdGlvbiB2YWx1ZXMgPVxuICAgICAgICAgICAgQXJyYXkuZm9sZHJcbiAgICAgICAgICAgICAgICAoXFx2YWwgaHRtbCAtPlxuICAgICAgICAgICAgICAgICAgICBbIEh0bWwub3B0aW9uIFsgQS52YWx1ZSB2YWwsIEEuc2VsZWN0ZWQgPHwgKFN0cmluZy5mcm9tSW50IDx8IGdldFBhZ2VTaXplIHRhYmxlU3RhdGUpID09IHZhbCBdIFsgSHRtbC50ZXh0IHZhbCBdXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICsrIGh0bWxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgIDx8XG4gICAgICAgICAgICAgICAgQXJyYXkubWFwIFN0cmluZy5mcm9tSW50IHZhbHVlc1xuICAgIGluXG4gICAgSHRtbC5zZWxlY3QgWyBvblBhZ2VTaXplQ2hvaWNlIHRhYmxlU3RhdGUgXSA8fFxuICAgICAgICAod2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICBQYWdlciB2YWx1ZXMgLT5cbiAgICAgICAgICAgICAgICB2aWV3T3B0aW9uIHZhbHVlc1xuXG4gICAgICAgICAgICBTY3JvbGxlciB2YWx1ZXMgLT5cbiAgICAgICAgICAgICAgICB2aWV3T3B0aW9uIHZhbHVlc1xuXG4gICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgKVxuXG5cbmlzRXZlbiA6IEludCAtPiBCb29sXG5pc0V2ZW4gaW50ID1cbiAgICBNYXRoLm1vZEJ5IDIgaW50ID09IDBcblxuXG5uZWdhdGl2ZVRvWmVybyA6IEludCAtPiBJbnRcbm5lZ2F0aXZlVG9aZXJvIG4gPVxuICAgIHdoZW4gY29tcGFyZSBuIDAgaXNcbiAgICAgICAgTFQgLT5cbiAgICAgICAgICAgIDBcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICBuXG4iLAogICAgICAgICJtb2R1bGUgRXhhbXBsZS5QcmVzaWRlbnRzIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgUGVyc29uLCBjb25maWcsIGluaXQsIG1haW4sIHByZXNpZGVudHMsIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGVcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdCBwcmVzaWRlbnRzXG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IFBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgUGVyc29uIC0+IE1vZGVsXG5pbml0IHBlb3BsZSA9XG4gICAgbGV0XG4gICAgICAgIG1vZGVsID1cbiAgICAgICAgICAgIHsgcGVvcGxlID0gcGVvcGxlXG4gICAgICAgICAgICAsIHRhYmxlU3RhdGUgPSBUYWJsZS5pbml0aWFsU29ydCBcIlN0YXRlXCJcbiAgICAgICAgICAgICwgcXVlcnkgPSBcIlwiXG4gICAgICAgICAgICB9XG4gICAgaW5cbiAgICBtb2RlbFxuXG5cblxuLS0gVVBEQVRFXG5cblxudHlwZSBNc2dcbiAgICA9IFNldFF1ZXJ5IFN0cmluZ1xuICAgIHwgU2V0VGFibGVTdGF0ZSBUYWJsZS5TdGF0ZVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiBNb2RlbFxudXBkYXRlIG1zZyBtb2RlbCA9XG4gICAgd2hlbiBtc2cgaXNcbiAgICAgICAgU2V0UXVlcnkgbmV3UXVlcnkgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBxdWVyeSA9IG5ld1F1ZXJ5IH1cblxuICAgICAgICBTZXRUYWJsZVN0YXRlIG5ld1N0YXRlIC0+XG4gICAgICAgICAgICB7IG1vZGVsIHwgdGFibGVTdGF0ZSA9IG5ld1N0YXRlIH1cblxuXG5cbi0tIFZJRVdcblxuXG52aWV3IDogTW9kZWwgLT4gSHRtbCBNc2dcbnZpZXcgeyBwZW9wbGUsIHRhYmxlU3RhdGUsIHF1ZXJ5IH0gPVxuICAgIGxldFxuICAgICAgICBsb3dlclF1ZXJ5ID1cbiAgICAgICAgICAgIFN0cmluZy50b0xvd2VyIHF1ZXJ5XG5cbiAgICAgICAgYWNjZXB0YWJsZVBlb3BsZSA9XG4gICAgICAgICAgICBBcnJheS5rZWVwSWYgKFN0cmluZy5jb250YWlucyBsb3dlclF1ZXJ5IDw8IFN0cmluZy50b0xvd2VyIDw8IC5uYW1lKSBwZW9wbGVcbiAgICBpblxuICAgIGRpdiBbXVxuICAgICAgICBbIGgxIFtdIFsgdGV4dCBcIkJpcnRocGxhY2VzIG9mIFUuUy4gUHJlc2lkZW50c1wiIF1cbiAgICAgICAgLCB1bCBbXVxuICAgICAgICAgICAgWyBsaSBbXSBbIHRleHQgXCJTaW5nbGUgY2xpY2sgb24gY29sdW1uIGhlYWRlciB0byBhZGQvbW92ZSB0aGF0IGNvbHVtbiB0byB0aGUgZW5kIG9mIHRoZSBzb3J0IG9yZGVyICguLi50aGVuIHNvcnQgYnkgWWVhcilcIiBdXG4gICAgICAgICAgICAsIGxpIFtdIFsgdGV4dCBcIkRvdWJsZSBjbGljayB0byByZXNldCB0aGUgc29ydCBvcmRlciB0byBqdXN0IHRoYXQgY29sdW1uIChTb3J0IGJ5IE5hbWUpLlwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiSSBkb24ndCBsaWtlIHRoaXMgdXNlciBpbnRlcmFjdGlvbiwgYnV0IGl0IGlzLCB3aGF0IGl0IGlzIGZvciBub3cuIFN1Z2dlc3Rpb25zIGZvciBjaGFuZ2Ugd2VsY29tZS5cIiBdXG4gICAgICAgICAgICAsIGxpIFtdIFsgdGV4dCBcIkknZCBwcmVmZXIgdG8gbWFrZSBzaG9ydCBjbGljayByZXNldCBhbmQgbG9uZyBjbGljayBhZGQgdG8gc29ydCBvcmRlci5cIiBdXG4gICAgICAgICAgICBdXG4gICAgICAgICwgZGl2IFtdIFtdXG4gICAgICAgICwgaW5wdXQgWyBwbGFjZWhvbGRlciBcIlNlYXJjaCBieSBOYW1lXCIsIG9uSW5wdXQgU2V0UXVlcnkgXSBbXVxuICAgICAgICAsIFRhYmxlLnZpZXcgY29uZmlnIHRhYmxlU3RhdGUgYWNjZXB0YWJsZVBlb3BsZVxuICAgICAgICBdXG5cblxuY29uZmlnIDogVGFibGUuQ29uZmlnIFBlcnNvbiBNc2dcbmNvbmZpZyA9XG4gICAgVGFibGUuY29uZmlnXG4gICAgICAgIHsgdG9JZCA9IC5uYW1lXG4gICAgICAgICwgdG9Nc2cgPSBTZXRUYWJsZVN0YXRlXG4gICAgICAgICwgY29sdW1ucyA9XG4gICAgICAgICAgICBbIFRhYmxlLnN0cmluZ0NvbHVtbiBcIk5hbWVcIiAubmFtZVxuICAgICAgICAgICAgLCBUYWJsZS5pbnRDb2x1bW4gXCJZZWFyXCIgLnllYXJcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiQ2l0eVwiIC5jaXR5XG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIlN0YXRlXCIgLnN0YXRlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuXG5cbi0tIFBFT1BMRVxuXG5cbnR5cGUgYWxpYXMgUGVyc29uID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHllYXIgOiBJbnRcbiAgICAsIGNpdHkgOiBTdHJpbmdcbiAgICAsIHN0YXRlIDogU3RyaW5nXG4gICAgfVxuXG5cbnBlcnNvbiBuYW1lIHllYXIgY2l0eSBzdGF0ZSA9XG4gICAgeyBuYW1lID0gbmFtZSwgeWVhciA9IHllYXIsIGNpdHkgPSBjaXR5LCBzdGF0ZSA9IHN0YXRlIH1cblxuXG5wcmVzaWRlbnRzIDogQXJyYXkgUGVyc29uXG5wcmVzaWRlbnRzID1cbiAgICBbIHBlcnNvbiBcIkdlb3JnZSBXYXNoaW5ndG9uXCIgMTczMiBcIldlc3Rtb3JlbGFuZCBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gQWRhbXNcIiAxNzM1IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIlRob21hcyBKZWZmZXJzb25cIiAxNzQzIFwiU2hhZHdlbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1hZGlzb25cIiAxNzUxIFwiUG9ydCBDb253YXlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIE1vbnJvZVwiIDE3NTggXCJNb25yb2UgSGFsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEphY2tzb25cIiAxNzY3IFwiV2F4aGF3cyBSZWdpb25cIiBcIlNvdXRoL05vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gUXVpbmN5IEFkYW1zXCIgMTc2NyBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhlbnJ5IEhhcnJpc29uXCIgMTc3MyBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIk1hcnRpbiBWYW4gQnVyZW5cIiAxNzgyIFwiS2luZGVyaG9va1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiWmFjaGFyeSBUYXlsb3JcIiAxNzg0IFwiQmFyYm91cnN2aWxsZVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSm9obiBUeWxlclwiIDE3OTAgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBCdWNoYW5hblwiIDE3OTEgXCJDb3ZlIEdhcFwiIFwiUGVubnN5bHZhbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEsuIFBvbGtcIiAxNzk1IFwiUGluZXZpbGxlXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJNaWxsYXJkIEZpbGxtb3JlXCIgMTgwMCBcIlN1bW1lcmhpbGxcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIkZyYW5rbGluIFBpZXJjZVwiIDE4MDQgXCJIaWxsc2Jvcm91Z2hcIiBcIk5ldyBIYW1wc2hpcmVcIlxuICAgICwgcGVyc29uIFwiQW5kcmV3IEpvaG5zb25cIiAxODA4IFwiUmFsZWlnaFwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiQWJyYWhhbSBMaW5jb2xuXCIgMTgwOSBcIlNpbmtpbmcgc3ByaW5nXCIgXCJLZW50dWNreVwiXG4gICAgLCBwZXJzb24gXCJVbHlzc2VzIFMuIEdyYW50XCIgMTgyMiBcIlBvaW50IFBsZWFzYW50XCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlJ1dGhlcmZvcmQgQi4gSGF5ZXNcIiAxODIyIFwiRGVsYXdhcmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQ2hlc3RlciBBLiBBcnRodXJcIiAxODI5IFwiRmFpcmZpZWxkXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEEuIEdhcmZpZWxkXCIgMTgzMSBcIk1vcmVsYW5kIEhpbGxzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkJlbmphbWluIEhhcnJpc29uXCIgMTgzMyBcIk5vcnRoIEJlbmRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiR3JvdmVyIENsZXZlbGFuZFwiIDE4MzcgXCJDYWxkd2VsbFwiIFwiTmV3IEplcnNleVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIE1jS2lubGV5XCIgMTg0MyBcIk5pbGVzXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIldvb2Ryb3cgV2lsc29uXCIgMTg1NiBcIlN0YXVudG9uXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJXaWxsaWFtIEhvd2FyZCBUYWZ0XCIgMTg1NyBcIkNpbmNpbm5hdGlcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiVGhlb2RvcmUgUm9vc2V2ZWx0XCIgMTg1OCBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIldhcnJlbiBHLiBIYXJkaW5nXCIgMTg2NSBcIkJsb29taW5nIEdyb3ZlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNhbHZpbiBDb29saWRnZVwiIDE4NzIgXCJQbHltb3V0aFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJIZXJiZXJ0IEhvb3ZlclwiIDE4NzQgXCJXZXN0IEJyYW5jaFwiIFwiSW93YVwiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBELiBSb29zZXZlbHRcIiAxODgyIFwiSHlkZSBQYXJrXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJIYXJyeSBTLiBUcnVtYW5cIiAxODg0IFwiTGFtYXJcIiBcIk1pc3NvdXJpXCJcbiAgICAsIHBlcnNvbiBcIkR3aWdodCBELiBFaXNlbmhvd2VyXCIgMTg5MCBcIkRlbmlzb25cIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIkx5bmRvbiBCLiBKb2huc29uXCIgMTkwOCBcIlN0b25ld2FsbFwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uIFwiUm9uYWxkIFJlYWdhblwiIDE5MTEgXCJUYW1waWNvXCIgXCJJbGxpbm9pc1wiXG4gICAgLCBwZXJzb24gXCJSaWNoYXJkIE0uIE5peG9uXCIgMTkxMyBcIllvcmJhIExpbmRhXCIgXCJDYWxpZm9ybmlhXCJcbiAgICAsIHBlcnNvbiBcIkdlcmFsZCBSLiBGb3JkXCIgMTkxMyBcIk9tYWhhXCIgXCJOZWJyYXNrYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEYuIEtlbm5lZHlcIiAxOTE3IFwiQnJvb2tsaW5lXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBILiBXLiBCdXNoXCIgMTkyNCBcIk1pbHRvblwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJKaW1teSBDYXJ0ZXJcIiAxOTI0IFwiUGxhaW5zXCIgXCJHZW9yZ2lhXCJcbiAgICAsIHBlcnNvbiBcIkdlb3JnZSBXLiBCdXNoXCIgMTk0NiBcIk5ldyBIYXZlblwiIFwiQ29ubmVjdGljdXRcIlxuICAgICwgcGVyc29uIFwiQmlsbCBDbGludG9uXCIgMTk0NiBcIkhvcGVcIiBcIkFya2Fuc2FzXCJcbiAgICAsIHBlcnNvbiBcIkJhcmFjayBPYmFtYVwiIDE5NjEgXCJIb25vbHVsdVwiIFwiSGF3YWlpXCJcbiAgICAsIHBlcnNvbiBcIkRvbmFsZCBUcnVtcFwiIDE5NDYgXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgXVxuIiwKICAgICAgICAibW9kdWxlIEV4YW1wbGUuUHJlc2lkZW50c1BhZ2luYXRlZCBleHBvc2luZyAoTW9kZWwsIE1zZyguLiksIFBlcnNvbiwgY29uZmlnLCBpbml0LCBtYWluLCBwcmVzaWRlbnRzLCB1cGRhdGUsIHZpZXcpXG5cbmltcG9ydCBCcm93c2VyXG5pbXBvcnQgRGF0YVRhYmxlIGFzIFRhYmxlIGV4cG9zaW5nIChTb3J0RGlyZWN0aW9uKC4uKSlcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLnNhbmRib3hcbiAgICAgICAgeyBpbml0ID0gaW5pdCBwcmVzaWRlbnRzXG4gICAgICAgICwgdXBkYXRlID0gdXBkYXRlXG4gICAgICAgICwgdmlldyA9IHZpZXdcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IFBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgUGVyc29uIC0+IE1vZGVsXG5pbml0IHBlb3BsZSA9XG4gICAgbGV0XG4gICAgICAgIG1vZGVsID1cbiAgICAgICAgICAgIHsgcGVvcGxlID0gcGVvcGxlXG4gICAgICAgICAgICAsIHRhYmxlU3RhdGUgPVxuICAgICAgICAgICAgICAgIFRhYmxlLm5ldyBcIlByZXNpZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCAxMCBbIDAsIDUsIDI1LCA1MCBdXG4gICAgICAgICAgICAgICAgICAgIHw+IFRhYmxlLnVwZGF0ZVNvcnRTdGF0ZSBcIlllYXJcIiBBc2NcbiAgICAgICAgICAgICAgICAgICAgfD4gVGFibGUudXBkYXRlQWN0aXZlUm93SWQgXCJcIlxuICAgICAgICAgICAgLCBxdWVyeSA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICBpblxuICAgIG1vZGVsXG5cblxuXG4tLSBVUERBVEVcblxuXG50eXBlIE1zZ1xuICAgID0gU2V0UXVlcnkgU3RyaW5nXG4gICAgfCBTZXRUYWJsZVN0YXRlIFRhYmxlLlN0YXRlXG5cblxudXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IE1vZGVsXG51cGRhdGUgbXNnIG1vZGVsID1cbiAgICB3aGVuIG1zZyBpc1xuICAgICAgICBTZXRRdWVyeSBuZXdRdWVyeSAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHF1ZXJ5ID0gbmV3UXVlcnkgfVxuXG4gICAgICAgIFNldFRhYmxlU3RhdGUgbmV3U3RhdGUgLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCB0YWJsZVN0YXRlID0gbmV3U3RhdGUgfVxuXG5cblxuLS0gVklFV1xuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyB7IHBlb3BsZSwgdGFibGVTdGF0ZSwgcXVlcnkgfSA9XG4gICAgbGV0XG4gICAgICAgIGxvd2VyUXVlcnkgPVxuICAgICAgICAgICAgU3RyaW5nLnRvTG93ZXIgcXVlcnlcblxuICAgICAgICBhY2NlcHRhYmxlUGVvcGxlID1cbiAgICAgICAgICAgIEFycmF5LmtlZXBJZiAoU3RyaW5nLmNvbnRhaW5zIGxvd2VyUXVlcnkgPDwgU3RyaW5nLnRvTG93ZXIgPDwgLm5hbWUpIHBlb3BsZVxuICAgIGluXG4gICAgZGl2IFtdXG4gICAgICAgIFsgaDEgW10gWyB0ZXh0IFwiQmlydGhwbGFjZXMgb2YgVS5TLiBQcmVzaWRlbnRzXCIgXVxuICAgICAgICAsIHVsIFtdXG4gICAgICAgICAgICBbIGxpIFtdIFsgdGV4dCBcIlNpbmdsZSBjbGljayBvbiBjb2x1bW4gaGVhZGVyIHRvIGFkZC9tb3ZlIHRoYXQgY29sdW1uIHRvIHRoZSBlbmQgb2YgdGhlIHNvcnQgb3JkZXIgKC4uLnRoZW4gc29ydCBieSBZZWFyKVwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiRG91YmxlIGNsaWNrIHRvIHJlc2V0IHRoZSBzb3J0IG9yZGVyIHRvIGp1c3QgdGhhdCBjb2x1bW4gKFNvcnQgYnkgTmFtZSkuXCIgXVxuICAgICAgICAgICAgLCBsaSBbXSBbIHRleHQgXCJJIGRvbid0IGxpa2UgdGhpcyB1c2VyIGludGVyYWN0aW9uLCBidXQgaXQgaXMsIHdoYXQgaXQgaXMgZm9yIG5vdy4gU3VnZ2VzdGlvbnMgZm9yIGNoYW5nZSB3ZWxjb21lLlwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiSSdkIHByZWZlciB0byBtYWtlIHNob3J0IGNsaWNrIHJlc2V0IGFuZCBsb25nIGNsaWNrIGFkZCB0byBzb3J0IG9yZGVyLlwiIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgLCBkaXYgW10gW11cbiAgICAgICAgLCBpbnB1dCBbIHBsYWNlaG9sZGVyIFwiU2VhcmNoIGJ5IE5hbWVcIiwgb25JbnB1dCBTZXRRdWVyeSBdIFtdXG4gICAgICAgICwgVGFibGUucGFnZUxlbmd0aENob29zZXIgY29uZmlnIHRhYmxlU3RhdGVcbiAgICAgICAgLCBUYWJsZS52aWV3IGNvbmZpZyB0YWJsZVN0YXRlIGFjY2VwdGFibGVQZW9wbGVcbiAgICAgICAgXVxuXG5cbmNvbmZpZyA6IFRhYmxlLkNvbmZpZyBQZXJzb24gTXNnXG5jb25maWcgPVxuICAgIFRhYmxlLmNvbmZpZ1xuICAgICAgICB7IHRvSWQgPSAubmFtZVxuICAgICAgICAsIHRvTXNnID0gU2V0VGFibGVTdGF0ZVxuICAgICAgICAsIGNvbHVtbnMgPVxuICAgICAgICAgICAgWyBUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgVGFibGUuaW50Q29sdW1uIFwiWWVhclwiIC55ZWFyXG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIkNpdHlcIiAuY2l0eVxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJTdGF0ZVwiIC5zdGF0ZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cblxuXG4tLSBQRU9QTEVcblxuXG50eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB5ZWFyIDogSW50XG4gICAgLCBjaXR5IDogU3RyaW5nXG4gICAgLCBzdGF0ZSA6IFN0cmluZ1xuICAgIH1cblxuXG5wZXJzb24gbmFtZSB5ZWFyIGNpdHkgc3RhdGUgPVxuICAgIHsgbmFtZSA9IG5hbWUsIHllYXIgPSB5ZWFyLCBjaXR5ID0gY2l0eSwgc3RhdGUgPSBzdGF0ZSB9XG5cblxucHJlc2lkZW50cyA6IEFycmF5IFBlcnNvblxucHJlc2lkZW50cyA9XG4gICAgWyBwZXJzb24gXCJHZW9yZ2UgV2FzaGluZ3RvblwiIDE3MzIgXCJXZXN0bW9yZWxhbmQgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEFkYW1zXCIgMTczNSBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJUaG9tYXMgSmVmZmVyc29uXCIgMTc0MyBcIlNoYWR3ZWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNYWRpc29uXCIgMTc1MSBcIlBvcnQgQ29ud2F5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNb25yb2VcIiAxNzU4IFwiTW9ucm9lIEhhbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKYWNrc29uXCIgMTc2NyBcIldheGhhd3MgUmVnaW9uXCIgXCJTb3V0aC9Ob3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIFF1aW5jeSBBZGFtc1wiIDE3NjcgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIZW5yeSBIYXJyaXNvblwiIDE3NzMgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJNYXJ0aW4gVmFuIEJ1cmVuXCIgMTc4MiBcIktpbmRlcmhvb2tcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIlphY2hhcnkgVGF5bG9yXCIgMTc4NCBcIkJhcmJvdXJzdmlsbGVcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gVHlsZXJcIiAxNzkwIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgQnVjaGFuYW5cIiAxNzkxIFwiQ292ZSBHYXBcIiBcIlBlbm5zeWx2YW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBLLiBQb2xrXCIgMTc5NSBcIlBpbmV2aWxsZVwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiTWlsbGFyZCBGaWxsbW9yZVwiIDE4MDAgXCJTdW1tZXJoaWxsXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBQaWVyY2VcIiAxODA0IFwiSGlsbHNib3JvdWdoXCIgXCJOZXcgSGFtcHNoaXJlXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKb2huc29uXCIgMTgwOCBcIlJhbGVpZ2hcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkFicmFoYW0gTGluY29sblwiIDE4MDkgXCJTaW5raW5nIHNwcmluZ1wiIFwiS2VudHVja3lcIlxuICAgICwgcGVyc29uIFwiVWx5c3NlcyBTLiBHcmFudFwiIDE4MjIgXCJQb2ludCBQbGVhc2FudFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJSdXRoZXJmb3JkIEIuIEhheWVzXCIgMTgyMiBcIkRlbGF3YXJlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNoZXN0ZXIgQS4gQXJ0aHVyXCIgMTgyOSBcIkZhaXJmaWVsZFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBBLiBHYXJmaWVsZFwiIDE4MzEgXCJNb3JlbGFuZCBIaWxsc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJCZW5qYW1pbiBIYXJyaXNvblwiIDE4MzMgXCJOb3J0aCBCZW5kXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkdyb3ZlciBDbGV2ZWxhbmRcIiAxODM3IFwiQ2FsZHdlbGxcIiBcIk5ldyBKZXJzZXlcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBNY0tpbmxleVwiIDE4NDMgXCJOaWxlc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJXb29kcm93IFdpbHNvblwiIDE4NTYgXCJTdGF1bnRvblwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIb3dhcmQgVGFmdFwiIDE4NTcgXCJDaW5jaW5uYXRpXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlRoZW9kb3JlIFJvb3NldmVsdFwiIDE4NTggXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJXYXJyZW4gRy4gSGFyZGluZ1wiIDE4NjUgXCJCbG9vbWluZyBHcm92ZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJDYWx2aW4gQ29vbGlkZ2VcIiAxODcyIFwiUGx5bW91dGhcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uIFwiSGVyYmVydCBIb292ZXJcIiAxODc0IFwiV2VzdCBCcmFuY2hcIiBcIklvd2FcIlxuICAgICwgcGVyc29uIFwiRnJhbmtsaW4gRC4gUm9vc2V2ZWx0XCIgMTg4MiBcIkh5ZGUgUGFya1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiSGFycnkgUy4gVHJ1bWFuXCIgMTg4NCBcIkxhbWFyXCIgXCJNaXNzb3VyaVwiXG4gICAgLCBwZXJzb24gXCJEd2lnaHQgRC4gRWlzZW5ob3dlclwiIDE4OTAgXCJEZW5pc29uXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb24gXCJMeW5kb24gQi4gSm9obnNvblwiIDE5MDggXCJTdG9uZXdhbGxcIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIlJvbmFsZCBSZWFnYW5cIiAxOTExIFwiVGFtcGljb1wiIFwiSWxsaW5vaXNcIlxuICAgICwgcGVyc29uIFwiUmljaGFyZCBNLiBOaXhvblwiIDE5MTMgXCJZb3JiYSBMaW5kYVwiIFwiQ2FsaWZvcm5pYVwiXG4gICAgLCBwZXJzb24gXCJHZXJhbGQgUi4gRm9yZFwiIDE5MTMgXCJPbWFoYVwiIFwiTmVicmFza2FcIlxuICAgICwgcGVyc29uIFwiSm9obiBGLiBLZW5uZWR5XCIgMTkxNyBcIkJyb29rbGluZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgSC4gVy4gQnVzaFwiIDE5MjQgXCJNaWx0b25cIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiSmltbXkgQ2FydGVyXCIgMTkyNCBcIlBsYWluc1wiIFwiR2VvcmdpYVwiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgVy4gQnVzaFwiIDE5NDYgXCJOZXcgSGF2ZW5cIiBcIkNvbm5lY3RpY3V0XCJcbiAgICAsIHBlcnNvbiBcIkJpbGwgQ2xpbnRvblwiIDE5NDYgXCJIb3BlXCIgXCJBcmthbnNhc1wiXG4gICAgLCBwZXJzb24gXCJCYXJhY2sgT2JhbWFcIiAxOTYxIFwiSG9ub2x1bHVcIiBcIkhhd2FpaVwiXG4gICAgLCBwZXJzb24gXCJEb25hbGQgVHJ1bXBcIiAxOTQ2IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgIF1cbiIsCiAgICAgICAgIm1vZHVsZSBEb2NCb29rIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgaW5pdCwgbWFpbiwgdXBkYXRlLCB2aWV3KVxuXG5pbXBvcnQgQnJvd3NlclxuaW1wb3J0IEV4YW1wbGUuUHJlc2lkZW50cyBhcyBQcmVzaWRlbnRzXG5pbXBvcnQgRXhhbXBsZS5QcmVzaWRlbnRzUGFnaW5hdGVkIGFzIFBhZ2luYXRlZFxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEh0bWwpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChjbGFzcywgaWQsIHN0eWxlKVxuaW1wb3J0IEh0bWwuRXZlbnRzIGV4cG9zaW5nIChvbkNsaWNrKVxuXG5cbm1haW4gOiBQcm9ncmFtIHt9IE1vZGVsIE1zZ1xubWFpbiA9XG4gICAgQnJvd3Nlci5zYW5kYm94XG4gICAgICAgIHsgaW5pdCA9IGluaXRcbiAgICAgICAgLCB1cGRhdGUgPSB1cGRhdGVcbiAgICAgICAgLCB2aWV3ID0gdmlld1xuICAgICAgICB9XG5cblxudHlwZSBNc2dcbiAgICA9IFN3aXRjaEV4YW1wbGUgRXhhbXBsZVNob3duXG4gICAgfCBQcmVzaWRlbnRzTXNnIFByZXNpZGVudHMuTXNnXG4gICAgfCBQYWdpbmF0ZWRNc2cgUGFnaW5hdGVkLk1zZ1xuXG5cbmluaXQgPVxuICAgIHsgYWN0aXZlRXhhbXBsZSA9IFNob3dQcmVzaWRlbnRzXG4gICAgLCBwcmVzaWRlbnRzID0gUHJlc2lkZW50cy5pbml0IFByZXNpZGVudHMucHJlc2lkZW50c1xuICAgICwgcGFnaW5hdGVkID0gUGFnaW5hdGVkLmluaXQgUGFnaW5hdGVkLnByZXNpZGVudHNcbiAgICB9XG5cblxudHlwZSBhbGlhcyBNb2RlbCA9XG4gICAgeyBhY3RpdmVFeGFtcGxlIDogRXhhbXBsZVNob3duXG4gICAgLCBwcmVzaWRlbnRzIDogUHJlc2lkZW50cy5Nb2RlbFxuICAgICwgcGFnaW5hdGVkIDogUGFnaW5hdGVkLk1vZGVsXG4gICAgfVxuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyBtb2RlbCA9XG4gICAgbGV0XG4gICAgICAgIGlzQWN0aXZlIHZhcmlhbnQgPVxuICAgICAgICAgICAgaWYgbW9kZWwuYWN0aXZlRXhhbXBsZSA9PSB2YXJpYW50IHRoZW5cbiAgICAgICAgICAgICAgICBjbGFzcyBcImFjdGl2ZVwiXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjbGFzcyBcIlwiXG5cbiAgICAgICAgdmFyaWFudHMgPVxuICAgICAgICAgICAgQXJyYXkubWFwXG4gICAgICAgICAgICAgICAgKFxcdmFyaWFudCAtPiBIdG1sLmJ1dHRvbiBbIG9uQ2xpY2sgKFN3aXRjaEV4YW1wbGUgdmFyaWFudCksIGlzQWN0aXZlIHZhcmlhbnQgXSBbIEh0bWwudGV4dCA8fCBleGFtcGxlTmFtZSB2YXJpYW50IF0pXG4gICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgIGluXG4gICAgSHRtbC5kaXYgWyBpZCBcIndyYXBwZXJcIiBdXG4gICAgICAgIFsgSHRtbC5kaXYgWyBpZCBcIm5hdmlnYXRpb25cIiBdIChbIEh0bWwuaDIgW10gWyBIdG1sLnRleHQgXCJFeGFtcGxlc1wiIF0gXSArKyB2YXJpYW50cylcbiAgICAgICAgLCBIdG1sLmRpdiBbIGlkIFwiZXhhbXBsZVwiIF1cbiAgICAgICAgICAgIFsgd2hlbiBtb2RlbC5hY3RpdmVFeGFtcGxlIGlzXG4gICAgICAgICAgICAgICAgU2hvd1ByZXNpZGVudHMgLT5cbiAgICAgICAgICAgICAgICAgICAgUHJlc2lkZW50cy52aWV3IG1vZGVsLnByZXNpZGVudHMgfD4gSHRtbC5tYXAgUHJlc2lkZW50c01zZ1xuXG4gICAgICAgICAgICAgICAgU2hvd1BhZ2luYXRlZCAtPlxuICAgICAgICAgICAgICAgICAgICBQYWdpbmF0ZWQudmlldyBtb2RlbC5wYWdpbmF0ZWQgfD4gSHRtbC5tYXAgUGFnaW5hdGVkTXNnXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cblxuXG51cGRhdGUgOiBNc2cgLT4gTW9kZWwgLT4gTW9kZWxcbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFN3aXRjaEV4YW1wbGUgZXhhbXBsZVRvU3dpdGNoVG8gLT5cbiAgICAgICAgICAgIHsgbW9kZWwgfCBhY3RpdmVFeGFtcGxlID0gZXhhbXBsZVRvU3dpdGNoVG8gfVxuXG4gICAgICAgIFByZXNpZGVudHNNc2cgZXhhbXBsZU1zZyAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHByZXNpZGVudHMgPSBQcmVzaWRlbnRzLnVwZGF0ZSBleGFtcGxlTXNnIDx8IC5wcmVzaWRlbnRzIG1vZGVsIH1cblxuICAgICAgICBQYWdpbmF0ZWRNc2cgZXhhbXBsZU1zZyAtPlxuICAgICAgICAgICAgeyBtb2RlbCB8IHBhZ2luYXRlZCA9IFBhZ2luYXRlZC51cGRhdGUgZXhhbXBsZU1zZyA8fCAucGFnaW5hdGVkIG1vZGVsIH1cblxuXG50eXBlIEV4YW1wbGVTaG93blxuICAgID0gU2hvd1ByZXNpZGVudHNcbiAgICB8IFNob3dQYWdpbmF0ZWRcblxuXG5cbi0tIGRvbid0IGZvcmdldCB0byBhZGQgdGhlIGV4YW1wbGUgdG8gdGhpcyBsaXN0LCBvdGhlcndpc2UgaXQgd29uJ3Qgc2hvdyB1cC4uLlxuXG5cbmJ1dHRvbnMgPVxuICAgIFsgU2hvd1ByZXNpZGVudHMsIFNob3dQYWdpbmF0ZWQgXVxuXG5cbmV4YW1wbGVOYW1lIDogRXhhbXBsZVNob3duIC0+IFN0cmluZ1xuZXhhbXBsZU5hbWUgdmFyaWFudCA9XG4gICAgd2hlbiB2YXJpYW50IGlzXG4gICAgICAgIFNob3dQcmVzaWRlbnRzIC0+XG4gICAgICAgICAgICBcIlNvcnRpbmdcIlxuXG4gICAgICAgIFNob3dQYWdpbmF0ZWQgLT5cbiAgICAgICAgICAgIFwiUGFnaW5hdGlvblwiXG4iLAogICAgICAgICJtb2R1bGUgU3RyaW5nIGV4cG9zaW5nXG4gICAgKCBTdHJpbmcsIGlzRW1wdHksIGNvdW50LCByZXZlcnNlLCByZXBlYXQsIHJlcGxhY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgc3BsaXQsIGpvaW4sIHdvcmRzLCBsaW5lc1xuICAgICwgc2xpY2UsIHRha2VGaXJzdCwgdGFrZUxhc3QsIGRyb3BGaXJzdCwgZHJvcExhc3RcbiAgICAsIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuICAgICwgdG9JbnQsIGZyb21JbnRcbiAgICAsIHRvRmxvYXQsIGZyb21GbG9hdFxuICAgICwgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIHRvVXBwZXIsIHRvTG93ZXIsIHBhZCwgcGFkTGVmdCwgcGFkUmlnaHQsIHRyaW0sIHRyaW1MZWZ0LCB0cmltUmlnaHRcbiAgICAsIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG4gICAgLCB1bml0TGVuZ3RoLCBnZXRVbml0LCBmb2xkbFVuaXRzLCBmb2xkclVuaXRzXG4gICAgKVxuXG57LXwgQSBidWlsdC1pbiByZXByZXNlbnRhdGlvbiBmb3IgZWZmaWNpZW50IHN0cmluZyBtYW5pcHVsYXRpb24uIFdoZW4gaXQgY29tZXMgdG8gc3RyaW5ncyxcbnRoZXJlIGFyZSB0aHJlZSBjb25jZXB0cyB3b3J0aCBrbm93aW5nIGFib3V0OlxuXG4qIENvZGUgdW5pdHM6IHJlcHJlc2VudHMgdGhlIHNtYWxsZXN0IHByaW1pdGl2ZSB2YWx1ZSBvZiBhIHN0cmluZy4gSW4gR3JlbixcbmNvZGUgdW5pdHMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgMTYtYml0IHZhbHVlLiBUaGlzIGlzIGVub3VnaCB0byBzdG9yZSB0aGUgbW9zdCBjb21tb25cbmNoYXJhY3RlcnMgaW4gd2VzdGVybiBsYW5ndWFnZXMgKExhdGluLCBHcmVlaywgQ3lyaWxpYyksIGJ1dCBub3QgYWxsIHVuaWNvZGUgY2hhcmFjdGVycy5cbiogQ29kZSBwb2ludHM6IHJlcHJlc2VudHMgYSB1bmljb2RlIGNoYXJhY3Rlci4gQ29kZSBwb2ludHMgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IG9uZVxudW5pdCwgb3IgYSBwYWlyIG9mIHVuaXRzLlxuKiBHcmFwaGVtZXM6IHJlcHJlc2VudHMgYSBzaW5nbGUgdmlzdWFsIGdseXBoLCBsaWtlIGNlcnRhaW4gZW1vamlzIG9yIGNoYXJhY3RlcnMgd2l0aFxuYWNjZW50cy5cblxuVW5sZXNzIG90aGVyd2lzZSBub3RlZCwgYWxsIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBkZWFsIHdpdGggY29kZSBwb2ludHMuXG5cblxuQGRvY3MgU3RyaW5nLCBpc0VtcHR5LCBjb3VudCwgcmV2ZXJzZSwgcmVwZWF0LCByZXBsYWNlXG5cblxuIyMgQnVpbGRpbmcgYW5kIFNwbGl0dGluZ1xuXG5AZG9jcyBwcmVwZW5kLCBhcHBlbmQsIHNwbGl0LCBqb2luLCB3b3JkcywgbGluZXNcblxuXG4jIyBHZXQgU3Vic3RyaW5nc1xuXG5AZG9jcyBzbGljZSwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgZHJvcEZpcnN0LCBkcm9wTGFzdFxuXG5cbiMjIENoZWNrIGZvciBTdWJzdHJpbmdzXG5cbkBkb2NzIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuXG5cbiMjIEludCBDb252ZXJzaW9uc1xuXG5AZG9jcyB0b0ludCwgZnJvbUludFxuXG5cbiMjIEZsb2F0IENvbnZlcnNpb25zXG5cbkBkb2NzIHRvRmxvYXQsIGZyb21GbG9hdFxuXG5cbiMjIENoYXIgQ29udmVyc2lvbnNcblxuQGRvY3MgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG5cblxuIyMgQXJyYXkgQ29udmVyc2lvbnNcblxuQGRvY3MgdG9BcnJheSwgZnJvbUFycmF5XG5cblxuIyMgRm9ybWF0dGluZ1xuXG5Db3NtZXRpYyBvcGVyYXRpb25zIHN1Y2ggYXMgcGFkZGluZyB3aXRoIGV4dHJhIGNoYXJhY3RlcnMgb3IgdHJpbW1pbmcgd2hpdGVzcGFjZS5cblxuQGRvY3MgdG9VcHBlciwgdG9Mb3dlciwgcGFkLCBwYWRMZWZ0LCBwYWRSaWdodCwgdHJpbSwgdHJpbUxlZnQsIHRyaW1SaWdodFxuXG4jIyBIaWdoZXItT3JkZXIgRnVuY3Rpb25zXG5cbkBkb2NzIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG5cbiMjIENoYXIgVW5pdHNcblxuRnVuY3Rpb25zIHRoYXQgb3BlcmF0ZXMgb24gdW5pdHMgaW5zdGVhZCBvZiBjb2RlIHBvaW50cy5cblxuQGRvY3MgdW5pdExlbmd0aCwgZ2V0VW5pdCwgZm9sZGxVbml0cywgZm9sZHJVbml0c1xuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF0aCBleHBvc2luZyAoZmxvb3IsIGNlaWxpbmcpXG5pbXBvcnQgQml0d2lzZVxuaW1wb3J0IENoYXIgZXhwb3NpbmcgKENoYXIpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuU3RyaW5nXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KVxuXG5cblxuLS0gU1RSSU5HU1xuXG5cbnstfCBBIGBTdHJpbmdgIGlzIGEgY2h1bmsgb2YgdGV4dC4gYFN0cmluZ2AgbGl0ZXJhbHMgYXJlIGVuY2xvc2VkIGluIGBcImRvdWJsZSBxdW90ZXNcImAuXG5cbiAgICBcIkhlbGxvIVwiXG5cbiAgICBcIkhvdyBhcmUgeW91P1wiXG5cbiAgICBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBzdHJpbmdzIHdpdGggZXNjYXBlIGNoYXJhY3RlcnNcbiAgICBcInRoaXNcXG5cXHRcXFwidGhhdFxcXCJcIlxuXG4gICAgXCLwn5mI8J+ZifCfmYpcIiAtLSBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBtdWx0aWxpbmUgc3RyaW5nc1xuICAgIFwiXCJcIlRyaXBsZSBkb3VibGUgcXVvdGVzIGxldCB5b3VcbiAgICBjcmVhdGUgXCJtdWx0aWxpbmUgc3RyaW5nc1wiIHdoaWNoXG4gICAgY2FuIGhhdmUgdW5lc2NhcGVkIHF1b3RlcyBhbmQgbmV3bGluZXMuXG4gICAgXCJcIlwiXG5cbkEgYFN0cmluZ2AgY2FuIHJlcHJlc2VudCBhbnkgc2VxdWVuY2Ugb2YgW3VuaWNvZGUgY2hhcmFjdGVyc11bdV0uIFlvdSBjYW4gdXNlXG50aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0byByZXByZXNlbnQgY2hhcmFjdGVyc1xuYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBkaXJlY3RseS5cblVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZSBtYW55IHdoaXRlc3BhY2VcbmNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuKipOb3RlOioqIEphdmFTY3JpcHQgbGV0cyB5b3UgdXNlIGRvdWJsZSBxdW90ZXMgYW5kIHNpbmdsZSBxdW90ZXMgaW50ZXJjaGFuZ2FibHkuXG5UaGlzIGlzIG5vdCB0cnVlIGluIEdyZW4uIFlvdSBtdXN0IHVzZSBkb3VibGUgcXVvdGVzIGZvciBhIGBTdHJpbmdgLCBhbmQgeW91IG11c3RcbnVzZSBzaW5nbGUgcXVvdGVzIGZvciBhIFtgQ2hhcmBdKENoYXIjQ2hhcikuXG5cbi19XG50eXBlIFN0cmluZ1xuICAgID0gU3RyaW5nIC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgc3RyaW5nIGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBcIlwiID09IFRydWVcblxuICAgIGlzRW1wdHkgXCJ0aGUgd29ybGRcIiA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IFN0cmluZyAtPiBCb29sXG5pc0VtcHR5IHN0cmluZyA9XG4gICAgc3RyaW5nID09IFwiXCJcblxuXG57LXwgQ291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLlxuXG4gICAgY291bnQgXCJpbm51bWVyYWJsZVwiID09IDExXG5cbiAgICBjb3VudCBcIlwiID09IDBcblxuLX1cbmNvdW50IDogU3RyaW5nIC0+IEludFxuY291bnQgc3RyaW5nID1cbiAgICBmb2xkbCAoXFxfIG51bSAtPiBudW0gKyAxKSAwIHN0cmluZ1xuXG5cbnstfCBSZXZlcnNlIGEgc3RyaW5nLlxuXG4gICAgcmV2ZXJzZSBcInN0cmVzc2VkXCIgPT0gXCJkZXNzZXJ0c1wiXG5cbi19XG5yZXZlcnNlIDogU3RyaW5nIC0+IFN0cmluZ1xucmV2ZXJzZSBzdHIgPVxuICAgIHRvQXJyYXkgc3RyXG4gICAgICAgIHw+IEFycmF5LnJldmVyc2VcbiAgICAgICAgfD4gZnJvbUFycmF5XG5cblxuey18IFJlcGVhdCBhIHN0cmluZyBfbl8gdGltZXMuXG5cbiAgICByZXBlYXQgMyBcImhhXCIgPT0gXCJoYWhhaGFcIlxuXG4tfVxucmVwZWF0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnJlcGVhdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnJlcGVhdFxuXG5cbnstfCBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiBzb21lIHN1YnN0cmluZy5cblxuICAgIHJlcGxhY2UgXCIuXCIgXCItXCIgXCJKc29uLkRlY29kZS5zdWNjZWVkXCIgPT0gXCJKc29uLURlY29kZS1zdWNjZWVkXCJcblxuICAgIHJlcGxhY2UgXCIsXCIgXCIvXCIgXCJhLGIsYyxkLGVcIiA9PSBcImEvYi9jL2QvZVwiXG5cbioqTm90ZToqKiBJZiB5b3UgbmVlZCBtb3JlIGFkdmFuY2VkIHJlcGxhY2VtZW50cywgY2hlY2sgb3V0IHRoZVxuW2BncmVuLWxhbmcvcGFyc2VyYF1bcGFyc2VyXSBwYWNrYWdlIG9yIFtgU3RyaW5nLlJlZ2V4YF1bcmVnZXhdIG1vZHVsZS5cblxuW3BhcnNlcl06IC9wYWNrYWdlL2dyZW4tbGFuZy9wYXJzZXJcbltyZWdleF06IFN0cmluZy5SZWdleFxuXG4tfVxucmVwbGFjZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xucmVwbGFjZSBiZWZvcmUgYWZ0ZXIgc3RyaW5nID1cbiAgICBqb2luIGFmdGVyIChzcGxpdCBiZWZvcmUgc3RyaW5nKVxuXG5cblxuLS0gQlVJTERJTkcgQU5EIFNQTElUVElOR1xuXG5cbnstfCBDb21iaW5lIHR3byBzdHJpbmdzLiBZb3UgY2FuIGFsc28gdXNlIFt0aGUgYCgrKylgIG9wZXJhdG9yXShCYXNpY3MjKyspXG50byBkbyB0aGlzLlxuXG4gICAgcHJlcGVuZCBcImJ1dHRlclwiIFwiZmx5XCIgPT0gXCJidXR0ZXJmbHlcIlxuXG4tfVxucHJlcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wcmVwZW5kID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuYXBwZW5kXG5cblxuey18IEFwcGVuZCBvbmUgc3RyaW5nIG9udG8gYW5vdGhlci4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgW3ByZXBlbmRdKHByZXBlbmQpLFxuYnV0IHdpdGggdGhlIGFyZ3VtZW50cyByZXZlcnNlZC5cbiAgICBcbiAgICBhcHBlbmQgXCJidXR0ZXJcIiBcImZseVwiID09IFwiZmx5YnV0dGVyXCJcblxuLX1cbmFwcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hcHBlbmQgbGhzIHJocyA9XG4gICAgcHJlcGVuZCByaHMgbGhzXG5cblxuey18IFNwbGl0IGEgc3RyaW5nIHVzaW5nIGEgZ2l2ZW4gc2VwYXJhdG9yLiBJZiB0aGUgc2VwZXJhdG9yIGRvZXNuJ3QgYXBwZWFyLFxueW91IHdpbGwgZ2V0IGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHN0cmluZy5cblxuICAgIHNwbGl0IFwiLFwiIFwiXCIgPT0gW1wiXCJdXG4gICAgXG4gICAgc3BsaXQgXCIsXCIgXCJjYXRcIiA9PSBbXCJjYXRcIl1cbiAgICBcbiAgICBzcGxpdCBcIixcIiBcImNhdCxkb2csY293XCIgPT0gWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF1cbiAgICBcbiAgICBzcGxpdCBcIi9cIiBcImhvbWUvZXZhbi9EZXNrdG9wL1wiID09IFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiwgXCJcIiBdXG5cbi19XG5zcGxpdCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5zcGxpdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnNwbGl0XG5cblxuey18IFB1dCBtYW55IHN0cmluZ3MgdG9nZXRoZXIgd2l0aCBhIGdpdmVuIHNlcGFyYXRvci5cblxuICAgIGpvaW4gXCJhXCIgWyBcIkhcIiwgXCJ3XCIsIFwiaWlcIiwgXCJuXCIgXSA9PSBcIkhhd2FpaWFuXCJcblxuICAgIGpvaW4gXCIgXCIgWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF0gPT0gXCJjYXQgZG9nIGNvd1wiXG5cbiAgICBqb2luIFwiL1wiIFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiBdID09IFwiaG9tZS9ldmFuL0Rlc2t0b3BcIlxuXG4tfVxuam9pbiA6IFN0cmluZyAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5qb2luID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuam9pblxuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIHdvcmRzLCBzcGxpdHRpbmcgb24gY2h1bmtzIG9mIHdoaXRlc3BhY2UuXG5cbiAgICB3b3JkcyBcIkhvdyBhcmUgXFx0IHlvdT8gXFxuIEdvb2Q/XCIgPT0gWyBcIkhvd1wiLCBcImFyZVwiLCBcInlvdT9cIiwgXCJHb29kP1wiIF1cblxuLX1cbndvcmRzIDogU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xud29yZHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy53b3Jkc1xuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIGxpbmVzLCBzcGxpdHRpbmcgb24gbmV3bGluZXMuXG5cbiAgICBsaW5lcyBcIkhvdyBhcmUgeW91P1xcbkdvb2Q/XCIgPT0gWyBcIkhvdyBhcmUgeW91P1wiLCBcIkdvb2Q/XCIgXVxuXG4tfVxubGluZXMgOiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5saW5lcyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmxpbmVzXG5cblxuXG4tLSBTVUJTVFJJTkdTXG5cblxuey18IFRha2UgYSBzdWJzdHJpbmcgZ2l2ZW4gYSBzdGFydCBhbmQgZW5kIGluZGV4LiBOZWdhdGl2ZSBpbmRleGVzXG5hcmUgdGFrZW4gc3RhcnRpbmcgZnJvbSB0aGUgX2VuZF8gb2YgdGhlIGFycmF5LlxuXG4gICAgc2xpY2UgNyA5IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJvblwiXG5cbiAgICBzbGljZSAwIDYgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcInNuYWtlc1wiXG5cbiAgICBzbGljZSAwIC03IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJzbmFrZXMgb24gYVwiXG5cbiAgICBzbGljZSAtNiAtMSBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwicGxhbmVcIlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnNsaWNlID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuc2xpY2VcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGZpcnN0IF9uXyBjaGFyYWN0ZXJzLiBJZiBfbl8gaXMgbGFyZ2VyIHRoYW5cbnRoZSBsZW5ndGggb2YgdGhlIHN0cmluZywgdGhlbiB0aGUgc3RyaW5nIGlzIHJldHVybmVkIGFzIGlzLlxuXG4gICAgdGFrZUZpcnN0IDIgXCJNdWxkZXJcIiA9PSBcIk11XCJcblxuICAgIHRha2VGaXJzdCA4IFwiTXVsZGVyXCIgPT0gXCJNdWxkZXJcIlxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnRha2VGaXJzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBcIlwiXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgbiBzdHJpbmdcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGxhc3QgX25fIGNoYXJhY3RlcnMuIElmIF9uXyBpcyBsYXJnZXIgdGhhblxudGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLCB0aGVuIHRoZSBzdHJpbmcgaXMgcmV0dXJuZWQgYXMgaXMuXG5cbiAgICB0YWtlTGFzdCAyIFwiU2N1bGx5XCIgPT0gXCJseVwiXG5cbiAgICB0YWtlTGFzdCA4IFwiU2N1bGx5XCIgPT0gXCJTY3VsbHlcIlxuXG4tfVxudGFrZUxhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xudGFrZUxhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgXCJcIlxuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSAtbiAodW5pdExlbmd0aCBzdHJpbmcpIHN0cmluZ1xuXG5cbnstfCBEcm9wIHRoZSBmaXJzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BGaXJzdCAyIFwiVGhlIExvbmUgR3VubWVuXCIgPT0gXCJlIExvbmUgR3VubWVuXCJcblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5kcm9wRmlyc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIG4gKHVuaXRMZW5ndGggc3RyaW5nKSBzdHJpbmdcblxuXG57LXwgRHJvcCB0aGUgbGFzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BMYXN0IDIgXCJDaWdhcmV0dGUgU21va2luZyBNYW5cIiA9PSBcIkNpZ2FyZXR0ZSBTbW9raW5nIE1cIlxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuZHJvcExhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgLW4gc3RyaW5nXG5cblxuXG4tLSBERVRFQ1QgU1VCU1RSSU5HU1xuXG5cbnstfCBTZWUgaWYgdGhlIHNlY29uZCBzdHJpbmcgY29udGFpbnMgdGhlIGZpcnN0IG9uZS5cblxuICAgIGNvbnRhaW5zIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBjb250YWlucyBcImhhdFwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuICAgIGNvbnRhaW5zIFwiVEhFXCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuY29udGFpbnMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmNvbnRhaW5zID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuY29udGFpbnNcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBvbmUuXG5cbiAgICBzdGFydHNXaXRoIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBzdGFydHNXaXRoIFwib3J5XCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuc3RhcnRzV2l0aCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQm9vbFxuc3RhcnRzV2l0aCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnN0YXJ0c1dpdGhcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIGVuZHMgd2l0aCB0aGUgZmlyc3Qgb25lLlxuXG4gICAgZW5kc1dpdGggXCJ0aGVcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbiAgICBlbmRzV2l0aCBcIm9yeVwiIFwidGhlb3J5XCIgPT0gVHJ1ZVxuXG4tfVxuZW5kc1dpdGggOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmVuZHNXaXRoID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZW5kc1dpdGhcblxuXG57LXwgRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyB3aXRoaW4gdGhlIHNlY29uZCBvbmUsIGlmIGl0J3MgdGhlcmUuXG5cbiAgICBpbmRleE9mIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBKdXN0IDBcblxuICAgIGluZGV4T2YgXCJvcnlcIiBcInRoZW9yeVwiID09IEp1c3QgM1xuICAgIFxuICAgIGluZGV4T2YgXCJhXCIgXCJ0aGVvcnlcIiA9PSBOb3RoaW5nXG5cbi19XG5maXJzdEluZGV4T2YgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIEludFxuZmlyc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhPZlxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZSBmaXJzdCBzdHJpbmcgd2l0aGluIHRoZSBzZWNvbmQgb25lLCBpZiBpdCdzIHRoZXJlLlxuXG4gICAgbGFzdEluZGV4T2YgXCJhYnJhXCIgXCJhYnJhY2FkYWJyYVwiID09IEp1c3QgN1xuXG4gICAgbGFzdEluZGV4T2YgXCJiYXJiXCIgXCJhYnJhY2FkYWJyYVwiID09IE5vdGhpbmdcblxuLX1cbmxhc3RJbmRleE9mIDogU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBJbnRcbmxhc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcubGFzdEluZGV4T2ZcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUgaW5kaWNlcyBmb3IgYSBzdWJzdHJpbmcgaW4gYW5vdGhlciBzdHJpbmcuXG5cbiAgICBpbmRleGVzIFwiaVwiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDEsIDQsIDcsIDEwIF1cblxuICAgIGluZGV4ZXMgXCJzc1wiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDIsIDUgXVxuXG4gICAgaW5kZXhlcyBcIm5lZWRsZVwiIFwiaGF5c3RhY2tcIiA9PSBbXVxuXG4tfVxuaW5kaWNlcyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgSW50XG5pbmRpY2VzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhlc1xuXG5cblxuLS0gRk9STUFUVElOR1xuXG5cbnstfCBDb252ZXJ0IGEgc3RyaW5nIHRvIGFsbCB1cHBlciBjYXNlLiBVc2VmdWwgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbnNcbmFuZCBWSVJUVUFMIFlFTExJTkcuXG5cbiAgICB0b1VwcGVyIFwic2tpbm5lclwiID09IFwiU0tJTk5FUlwiXG5cbi19XG50b1VwcGVyIDogU3RyaW5nIC0+IFN0cmluZ1xudG9VcHBlciA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvVXBwZXJcblxuXG57LXwgQ29udmVydCBhIHN0cmluZyB0byBhbGwgbG93ZXIgY2FzZS4gVXNlZnVsIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25zLlxuXG4gICAgdG9Mb3dlciBcIlgtRklMRVNcIiA9PSBcIngtZmlsZXNcIlxuXG4tfVxudG9Mb3dlciA6IFN0cmluZyAtPiBTdHJpbmdcbnRvTG93ZXIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0xvd2VyXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiBib3RoIHNpZGVzIHVudGlsIGl0IGhhcyBhIGdpdmVuIGxlbmd0aC5cblxuICAgIHBhZCA1ICcgJyBcIjFcIiA9PSBcIiAgMSAgXCJcblxuICAgIHBhZCA1ICcgJyBcIjExXCIgPT0gXCIgIDExIFwiXG5cbiAgICBwYWQgNSAnICcgXCIxMjFcIiA9PSBcIiAxMjEgXCJcblxuLX1cbnBhZCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZCBuIGNoYXIgc3RyaW5nID1cbiAgICBsZXRcbiAgICAgICAgaGFsZiA9XG4gICAgICAgICAgICBCYXNpY3MudG9GbG9hdCAobiAtIGNvdW50IHN0cmluZykgLyAyXG4gICAgaW5cbiAgICByZXBlYXQgKGNlaWxpbmcgaGFsZikgKGZyb21DaGFyIGNoYXIpICsrIHN0cmluZyArKyByZXBlYXQgKGZsb29yIGhhbGYpIChmcm9tQ2hhciBjaGFyKVxuXG5cbnstfCBQYWQgYSBzdHJpbmcgb24gdGhlIGxlZnQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjFcIiA9PSBcIi4uLi4xXCJcblxuICAgIHBhZExlZnQgNSAnLicgXCIxMVwiID09IFwiLi4uMTFcIlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjEyMVwiID09IFwiLi4xMjFcIlxuXG4tfVxucGFkTGVmdCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZExlZnQgbiBjaGFyIHN0cmluZyA9XG4gICAgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcikgKysgc3RyaW5nXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiB0aGUgcmlnaHQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkUmlnaHQgNSAnLicgXCIxXCIgPT0gXCIxLi4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjExXCIgPT0gXCIxMS4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjEyMVwiID09IFwiMTIxLi5cIlxuXG4tfVxucGFkUmlnaHQgOiBJbnQgLT4gQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wYWRSaWdodCBuIGNoYXIgc3RyaW5nID1cbiAgICBzdHJpbmcgKysgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcilcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIGJvdGggc2lkZXMgb2YgYSBzdHJpbmcuXG5cbiAgICB0cmltIFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHNcIlxuXG4tfVxudHJpbSA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW0gPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50cmltXG5cblxuey18IEdldCByaWQgb2Ygd2hpdGVzcGFjZSBvbiB0aGUgbGVmdCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1MZWZ0IFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHMgIFxcblwiXG5cbi19XG50cmltTGVmdCA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW1MZWZ0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbUxlZnRcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIHRoZSByaWdodCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1SaWdodCBcIiAgaGF0cyAgXFxuXCIgPT0gXCIgIGhhdHNcIlxuXG4tfVxudHJpbVJpZ2h0IDogU3RyaW5nIC0+IFN0cmluZ1xudHJpbVJpZ2h0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbVJpZ2h0XG5cblxuXG4tLSBJTlQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhbiBpbnQsIGZhaWxpbmcgb24gaW1wcm9wZXJseSBmb3JtYXR0ZWQgc3RyaW5ncy5cblxuICAgIFN0cmluZy50b0ludCBcIjEyM1wiID09IEp1c3QgMTIzXG5cbiAgICBTdHJpbmcudG9JbnQgXCItNDJcIiA9PSBKdXN0IC00MlxuXG4gICAgU3RyaW5nLnRvSW50IFwiMy4xXCIgPT0gTm90aGluZ1xuXG4gICAgU3RyaW5nLnRvSW50IFwiMzFhXCIgPT0gTm90aGluZ1xuXG5JZiB5b3UgYXJlIGV4dHJhY3RpbmcgYSBudW1iZXIgZnJvbSBzb21lIHJhdyB1c2VyIGlucHV0LCB5b3Ugd2lsbCB0eXBpY2FsbHlcbndhbnQgdG8gdXNlIFtgTWF5YmUud2l0aERlZmF1bHRgXShNYXliZSN3aXRoRGVmYXVsdCkgdG8gaGFuZGxlIGJhZCBkYXRhOlxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvSW50IFwiNDJcIikgPT0gNDJcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0ludCBcImFiXCIpID09IDBcblxuLX1cbnRvSW50IDogU3RyaW5nIC0+IE1heWJlIEludFxudG9JbnQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0ludFxuXG5cbnstfCBDb252ZXJ0IGFuIGBJbnRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUludCAxMjMgPT0gXCIxMjNcIlxuXG4gICAgU3RyaW5nLmZyb21JbnQgLTQyID09IFwiLTQyXCJcblxuQ2hlY2sgb3V0IFtgRGVidWcudG9TdHJpbmdgXShEZWJ1ZyN0b1N0cmluZykgdG8gY29udmVydCBfYW55XyB2YWx1ZSB0byBhIHN0cmluZ1xuZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cblxuLX1cbmZyb21JbnQgOiBJbnQgLT4gU3RyaW5nXG5mcm9tSW50ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbU51bWJlclxuXG5cblxuLS0gRkxPQVQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZsb2F0LCBmYWlsaW5nIG9uIGltcHJvcGVybHkgZm9ybWF0dGVkIHN0cmluZ3MuXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIjEyM1wiID09IEp1c3QgMTIzLjBcblxuICAgIFN0cmluZy50b0Zsb2F0IFwiLTQyXCIgPT0gSnVzdCAtNDIuMFxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzLjFcIiA9PSBKdXN0IDMuMVxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzMWFcIiA9PSBOb3RoaW5nXG5cbklmIHlvdSBhcmUgZXh0cmFjdGluZyBhIG51bWJlciBmcm9tIHNvbWUgcmF3IHVzZXIgaW5wdXQsIHlvdSB3aWxsIHR5cGljYWxseVxud2FudCB0byB1c2UgW2BNYXliZS53aXRoRGVmYXVsdGBdKE1heWJlI3dpdGhEZWZhdWx0KSB0byBoYW5kbGUgYmFkIGRhdGE6XG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9GbG9hdCBcIjQyLjVcIikgPT0gNDIuNVxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvRmxvYXQgXCJjYXRzXCIpID09IDBcblxuLX1cbnRvRmxvYXQgOiBTdHJpbmcgLT4gTWF5YmUgRmxvYXRcbnRvRmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0Zsb2F0XG5cblxuey18IENvbnZlcnQgYSBgRmxvYXRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDEyMyA9PSBcIjEyM1wiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IC00MiA9PSBcIi00MlwiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDMuOSA9PSBcIjMuOVwiXG5cbkNoZWNrIG91dCBbYERlYnVnLnRvU3RyaW5nYF0oRGVidWcjdG9TdHJpbmcpIHRvIGNvbnZlcnQgX2FueV8gdmFsdWUgdG8gYSBzdHJpbmdcbmZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG5cbi19XG5mcm9tRmxvYXQgOiBGbG9hdCAtPiBTdHJpbmdcbmZyb21GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZyb21OdW1iZXJcblxuXG5cbi0tIEFSUkFZIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgY2hhcmFjdGVycy5cblxuICAgIHRvQXJyYXkgXCJhYmNcIiA9PSBbICdhJywgJ2InLCAnYycgXVxuXG4gICAgdG9BcnJheSBcIvCfmYjwn5mJ8J+ZilwiID09IFsgJ/CfmYgnLCAn8J+ZiScsICfwn5mKJyBdXG5cbi19XG50b0FycmF5IDogU3RyaW5nIC0+IEFycmF5IENoYXJcbnRvQXJyYXkgc3RyaW5nID1cbiAgICBmb2xkbCBBcnJheS5wdXNoTGFzdCBbXSBzdHJpbmdcblxuXG57LXwgQ29udmVydCBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBTdHJpbmcuXG4gICAgXG4gICAgZnJvbUFycmF5IFsgJ2EnLCAnYicsICdjJyBdID09IFwiYWJjXCJcblxuICAgIGZyb21BcnJheSBbICfwn5mIJywgJ/CfmYknLCAn8J+ZiicgXSA9PSBcIvCfmYjwn5mJ8J+ZilwiXG5cbi19XG5mcm9tQXJyYXkgOiBBcnJheSBDaGFyIC0+IFN0cmluZ1xuZnJvbUFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbUFycmF5XG5cblxuXG4tLSBDSEFSIENPTlZFUlNJT05TXG5cblxuey18IENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgZ2l2ZW4gY2hhcmFjdGVyLlxuXG4gICAgZnJvbUNoYXIgJ2EnID09IFwiYVwiXG5cbi19XG5mcm9tQ2hhciA6IENoYXIgLT4gU3RyaW5nXG5mcm9tQ2hhciBjaGFyID1cbiAgICBwdXNoRmlyc3QgY2hhciBcIlwiXG5cblxuey18IEFkZCBhIGNoYXJhY3RlciB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc3RyaW5nLlxuXG4gICAgcHVzaEZpcnN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiVGhlIHRydXRoIGlzIG91dCB0aGVyZVwiXG5cbi19XG5wdXNoRmlyc3QgOiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnB1c2hGaXJzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnB1c2hGaXJzdFxuXG5cbnstfCBBZGQgYSBjaGFyYWN0ZXIgdG8gdGhlIGVuZCBvZiBhIHN0cmluZy5cblxuICAgIHB1c2hMYXN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiaGUgdHJ1dGggaXMgb3V0IHRoZXJlVFwiXG5cbi19XG5wdXNoTGFzdCA6IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucHVzaExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wdXNoTGFzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgZmlyc3QgY2hhcmFjdGVyIGFuZCBpdHMgcmVtYWluaW5nIGNoYXJhY3RlcnMuIFRoaXMgbGV0cyB5b3VcbnBhdHRlcm4gbWF0Y2ggb24gc3RyaW5ncyBleGFjdGx5IGFzIHlvdSB3b3VsZCB3aXRoIGFycmF5cy5cblxuICAgIHBvcEZpcnN0IFwiYWJjXCIgPT0gSnVzdCB7IGZpcnN0ID0gJ2EnLCByZXN0ID0gXCJiY1wiIH1cblxuICAgIHBvcEZpcnN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wRmlyc3QgOiBTdHJpbmcgLT4gTWF5YmUgeyBmaXJzdCA6IENoYXIsIHJlc3QgOiBTdHJpbmcgfVxucG9wRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BGaXJzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgbGFzdCBjaGFyYWN0ZXIgYW5kIGl0cyByZW1haW5pbmcgY2hhcmFjdGVycy4gVGhpcyBsZXRzIHlvdVxucGF0dGVybiBtYXRjaCBvbiBzdHJpbmdzIGV4YWN0bHkgYXMgeW91IHdvdWxkIHdpdGggYXJyYXlzLlxuXG4gICAgcG9wTGFzdCBcImFiY1wiID09IEp1c3QgeyBmaXJzdCA9ICdjJywgcmVzdCA9IFwiYWJcIiB9XG5cbiAgICBwb3BMYXN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wTGFzdCA6IFN0cmluZyAtPiBNYXliZSB7IGxhc3QgOiBDaGFyLCByZXN0IDogU3RyaW5nIH1cbnBvcExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BMYXN0XG5cblxuLS0gSElHSEVSLU9SREVSIEZVTkNUSU9OU1xuXG5cbnstfCBUcmFuc2Zvcm0gZXZlcnkgY2hhcmFjdGVyIGluIGEgc3RyaW5nXG5cbiAgICBtYXBcbiAgICAgICAgKFxcYyAtPlxuICAgICAgICAgICAgaWYgYyA9PSAnLycgdGhlblxuICAgICAgICAgICAgICAgICcuJ1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY1xuICAgICAgICApXG4gICAgICAgIFwiYS9iL2NcIlxuICAgICAgICA9PSBcImEuYi5jXCJcblxuLX1cbm1hcCA6IChDaGFyIC0+IENoYXIpIC0+IFN0cmluZyAtPiBTdHJpbmdcbm1hcCBmbiBzdHIgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGNoYXIgYWNjIC0+XG4gICAgICAgICAgICBwdXNoTGFzdCAoZm4gY2hhcikgYWNjXG4gICAgICAgIClcbiAgICAgICAgXCJcIlxuICAgICAgICBzdHJcblxuXG57LXwgS2VlcCBvbmx5IHRoZSBjaGFyYWN0ZXJzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiBpc0RpZ2l0IFwiUjItRDJcIiA9PSBcIjIyXCJcblxuLX1cbmtlZXBJZiA6IChDaGFyIC0+IEJvb2wpIC0+IFN0cmluZyAtPiBTdHJpbmdcbmtlZXBJZiBpc0dvb2Qgc3RyID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxjaGFyIGFjYyAtPlxuICAgICAgICAgICAgaWYgaXNHb29kIGNoYXIgdGhlblxuICAgICAgICAgICAgICAgIHB1c2hMYXN0IGNoYXIgYWNjXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhY2NcbiAgICAgICAgKVxuICAgICAgICBcIlwiXG4gICAgICAgIHN0clxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgYmVnaW5uaW5nLlxuXG4gICAgZm9sZGwgY29ucyBcIlwiIFwidGltZVwiID09IFwiZW1pdFwiXG5cbi19XG5mb2xkbCA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZGwgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgZW5kLlxuXG4gICAgZm9sZHIgY29ucyBcIlwiIFwidGltZVwiID09IFwidGltZVwiXG5cbi19XG5mb2xkciA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYW55XyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbnkgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYW55IGlzRGlnaXQgXCJSMi1EMlwiID09IFRydWVcblxuICAgIGFueSBpc0RpZ2l0IFwiaGVhcnRcIiA9PSBGYWxzZVxuXG4gICAgYW55IGlzRGlnaXQgXCJcIiA9PSBGYWxzZVxuXG4tfVxuYW55IDogKENoYXIgLT4gQm9vbCkgLT4gU3RyaW5nIC0+IEJvb2xcbmFueSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmFueVxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYWxsXyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbGwgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYWxsIGlzRGlnaXQgXCJSMi1EMlwiID09IEZhbHNlXG5cbiAgICBhbGwgaXNEaWdpdCBcImhlYXJ0XCIgPT0gRmFsc2VcblxuICAgIGFsbCBpc0RpZ2l0IFwiXCIgPSBUcnVlXG5cbi19XG5hbGwgOiAoQ2hhciAtPiBCb29sKSAtPiBTdHJpbmcgLT4gQm9vbFxuYWxsIGlzR29vZCBzdHIgPVxuICAgIG5vdCAoYW55IChub3QgPDwgaXNHb29kKSBzdHIpXG5cblxuLS0gVU5JVFNcblxuXG57LXwgR2V0IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVyIHVuaXRzIGluIGEgc3RyaW5nLiBBcyBzdHJpbmdzIGFyZSwgZXNzZW50aWFsbHksXG5hcnJheXMgb2YgY2hhcmFjdGVyIHVuaXRzLCB0aGlzIGlzIGEgY29uc3RhbnQgdGltZSBvcGVyYXRpb24uXG4tfVxudW5pdExlbmd0aCA6IFN0cmluZyAtPiBJbnRcbnVuaXRMZW5ndGggPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy51bml0TGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBjaGFyYWN0ZXIgdW5pdCBhdCBhIGdpdmVuIGluZGV4LCBvciBgTm90aGluZ2AgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5BIG5lZ2F0aXZlIGluZGV4IHVzZXMgdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGFzIHRoZSBzdGFydGluZyBwb2ludC5cblxuICAgIGdldFVuaXQgMSBcImFiY1wiID09IEp1c3QgJ2EnXG4gICAgXG4gICAgZ2V0VW5pdCAxMCBcImFiY1wiID09IE5vdGhpbmdcbiAgICBcbiAgICBnZXRVbml0IC0xIFwiYWJjXCIgPT0gSnVzdCAnYydcblxuLX1cbmdldFVuaXQgOiBJbnQgLT4gU3RyaW5nIC0+IE1heWJlIENoYXJcbmdldFVuaXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5nZXRVbml0XG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBiZWdpbm5pbmcuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZGxVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcImVtaXRcIlxuLX1cbmZvbGRsVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRsVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFVuaXRzXG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBlbmQuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZHJVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcInRpbWVcIlxuLX1cbmZvbGRyVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRyVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclVuaXRzXG4iLAogICAgICAgICJtb2R1bGUgSnNvbi5FbmNvZGUgZXhwb3NpbmdcbiAgICAoIGVuY29kZSwgVmFsdWVcbiAgICAsIHN0cmluZywgaW50LCBmbG9hdCwgYm9vbCwgbnVsbFxuICAgICwgYXJyYXksIHNldFxuICAgICwgb2JqZWN0LCBkaWN0XG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB0dXJuaW5nIEdyZW4gdmFsdWVzIGludG8gSnNvbiB2YWx1ZXMuXG5cblxuQGRvY3MgZW5jb2RlLCBWYWx1ZVxuXG5cbiMjIFByaW1pdGl2ZXNcblxuQGRvY3Mgc3RyaW5nLCBpbnQsIGZsb2F0LCBib29sLCBudWxsXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIGFycmF5LCBzZXRcblxuXG4jIyBPYmplY3RzXG5cbkBkb2NzIG9iamVjdCwgZGljdFxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcbmltcG9ydCBTZXQgZXhwb3NpbmcgKFNldClcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5cblxuXG4tLSBFTkNPREVcblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBWYWx1ZVxuICAgID0gVmFsdWVcblxuXG57LXwgQ29udmVydCBhIGBWYWx1ZWAgaW50byBhIHByZXR0aWZpZWQgc3RyaW5nLiBUaGUgZmlyc3QgYXJndW1lbnQgc3BlY2lmaWVzXG50aGUgYW1vdW50IG9mIGluZGVudGF0aW9uIGluIHRoZSByZXN1bHRpbmcgc3RyaW5nLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgdG9tIDogRW5jb2RlLlZhbHVlXG4gICAgdG9tID1cbiAgICAgICAgRW5jb2RlLm9iamVjdFxuICAgICAgICAgICAgWyB7IGtleSA9IFwibmFtZVwiLCB2YWx1ZSA9IEVuY29kZS5zdHJpbmcgXCJUb21cIiB9XG4gICAgICAgICAgICAsIHsga2V5ID0gXCJhZ2VcIiwgdmFsdWUgPSBFbmNvZGUuaW50IDQyIClcbiAgICAgICAgICAgIF1cblxuICAgIGNvbXBhY3QgPVxuICAgICAgICBFbmNvZGUuZW5jb2RlIDAgdG9tXG5cbiAgICAtLSB7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVxuICAgIHJlYWRhYmxlID1cbiAgICAgICAgRW5jb2RlLmVuY29kZSA0IHRvbVxuXG4gICAgLS0ge1xuICAgIC0tICAgICBcIm5hbWVcIjogXCJUb21cIixcbiAgICAtLSAgICAgXCJhZ2VcIjogNDJcbiAgICAtLSB9XG5cbi19XG5lbmNvZGUgOiBJbnQgLT4gVmFsdWUgLT4gU3RyaW5nXG5lbmNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZW5jb2RlXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IFR1cm4gYSBgU3RyaW5nYCBpbnRvIGEgSlNPTiBzdHJpbmcuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgc3RyaW5nKVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoc3RyaW5nIFwiXCIpICAgICAgPT0gXCJcXFwiXFxcIlwiXG4gICAgLS0gZW5jb2RlIDAgKHN0cmluZyBcImFiY1wiKSAgID09IFwiXFxcImFiY1xcXCJcIlxuICAgIC0tIGVuY29kZSAwIChzdHJpbmcgXCJoZWxsb1wiKSA9PSBcIlxcXCJoZWxsb1xcXCJcIlxuXG4tfVxuc3RyaW5nIDogU3RyaW5nIC0+IFZhbHVlXG5zdHJpbmcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cbnstfCBUdXJuIGFuIGBJbnRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBpbnQpXG5cblxuICAgIC0tIGVuY29kZSAwIChpbnQgNDIpID09IFwiNDJcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgLTcpID09IFwiLTdcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgMCkgID09IFwiMFwiXG5cbi19XG5pbnQgOiBJbnQgLT4gVmFsdWVcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuey18IFR1cm4gYSBgRmxvYXRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBmbG9hdClcblxuXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IDMuMTQpICAgICA9PSBcIjMuMTRcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCAxLjYxOCkgICAgPT0gXCIxLjYxOFwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IC00MikgICAgICA9PSBcIi00MlwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IE5hTikgICAgICA9PSBcIm51bGxcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCBJbmZpbml0eSkgPT0gXCJudWxsXCJcblxuKipOb3RlOioqIEZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIGRlZmluZWQgaW4gdGhlIFtJRUVFIDc1NCBzdGFuZGFyZF1baWVlZV1cbndoaWNoIGlzIGhhcmRjb2RlZCBpbnRvIGFsbW9zdCBhbGwgQ1BVcy4gVGhpcyBzdGFuZGFyZCBhbGxvd3MgYEluZmluaXR5YCBhbmRcbmBOYU5gLiBbVGhlIEpTT04gc3BlY11banNvbl0gZG9lcyBub3QgaW5jbHVkZSB0aGVzZSB2YWx1ZXMsIHNvIHdlIGVuY29kZSB0aGVtXG5ib3RoIGFzIGBudWxsYC5cblxuW2llZWVdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JRUVFXzc1NFxuW2pzb25dOiBodHRwczovL3d3dy5qc29uLm9yZy9cblxuLX1cbmZsb2F0IDogRmxvYXQgLT4gVmFsdWVcbmZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG57LXwgVHVybiBhIGBCb29sYCBpbnRvIGEgSlNPTiBib29sZWFuLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChib29sLCBlbmNvZGUpXG5cblxuICAgIC0tIGVuY29kZSAwIChib29sIFRydWUpICA9PSBcInRydWVcIlxuICAgIC0tIGVuY29kZSAwIChib29sIEZhbHNlKSA9PSBcImZhbHNlXCJcblxuLX1cbmJvb2wgOiBCb29sIC0+IFZhbHVlXG5ib29sID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG5cbi0tIE5VTExTXG5cblxuey18IENyZWF0ZSBhIEpTT04gYG51bGxgIHZhbHVlLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIG51bGwpXG5cblxuICAgIC0tIGVuY29kZSAwIG51bGwgPT0gXCJudWxsXCJcblxuLX1cbm51bGwgOiBWYWx1ZVxubnVsbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5lbmNvZGVOdWxsXG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgVHVybiBhIGBBcnJheWAgaW50byBhIEpTT04gYXJyYXkuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlIGV4cG9zaW5nIChhcnJheSwgYm9vbCwgZW5jb2RlLCBpbnQsIHN0cmluZylcblxuXG4gICAgLS0gZW5jb2RlIDAgKGFycmF5IGludCBbMSwzLDRdKSAgICAgICA9PSBcIlsxLDMsNF1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBib29sIFtUcnVlLEZhbHNlXSkgPT0gXCJbdHJ1ZSxmYWxzZV1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBzdHJpbmcgW1wiYVwiLFwiYlwiXSkgID09IFwiXCJcIltcImFcIixcImJcIl1cIlwiXCJcblxuLX1cbmFycmF5IDogKGEgLT4gVmFsdWUpIC0+IEFycmF5IGEgLT4gVmFsdWVcbmFycmF5IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChBcnJheS5mb2xkbCAoR3Jlbi5LZXJuZWwuSnNvbi5hZGRFbnRyeSBmdW5jKSAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eUFycmF5IHt9KSBlbnRyaWVzKVxuXG5cbnstfCBUdXJuIGFuIGBTZXRgIGludG8gYSBKU09OIGFycmF5LlxuLX1cbnNldCA6IChhIC0+IFZhbHVlKSAtPiBTZXQgYSAtPiBWYWx1ZVxuc2V0IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChTZXQuZm9sZGwgKEdyZW4uS2VybmVsLkpzb24uYWRkRW50cnkgZnVuYykgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlBcnJheSB7fSkgZW50cmllcylcblxuXG5cbi0tIE9CSkVDVFNcblxuXG57LXwgQ3JlYXRlIGEgSlNPTiBvYmplY3QuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICB0b20gOiBFbmNvZGUuVmFsdWVcbiAgICB0b20gPVxuICAgICAgICBFbmNvZGUub2JqZWN0XG4gICAgICAgICAgICBbIHsga2V5ID0gXCJuYW1lXCIsIHZhbHVlID0gRW5jb2RlLnN0cmluZyBcIlRvbVwiIH1cbiAgICAgICAgICAgICwgeyBrZXkgPSBcImFnZVwiLCB2YWx1ZSA9IEVuY29kZS5pbnQgNDIgfVxuICAgICAgICAgICAgXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIHRvbSA9PSBcIlwiXCJ7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVwiXCJcIlxuXG4tfVxub2JqZWN0IDogQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfSAtPiBWYWx1ZVxub2JqZWN0IHBhaXJzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKEFycmF5LmZvbGRsXG4gICAgICAgICAgICAoXFx7IGtleSwgdmFsdWUgfSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCBrZXkgdmFsdWUgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBwYWlyc1xuICAgICAgICApXG5cblxuey18IFR1cm4gYSBgRGljdGAgaW50byBhIEpTT04gb2JqZWN0LlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgcGVvcGxlIDogRGljdCBTdHJpbmcgSW50XG4gICAgcGVvcGxlID1cbiAgICAgICAgRGljdC5mcm9tQXJyYXkgWyB7IGtleSA9IFwiVG9tXCIsIHZhbHVlID0gNDIgfSwgeyBrZXkgPSBcIlN1ZVwiLCB2YWx1ZSA9IDM4IH0gXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIChFbmNvZGUuZGljdCBpZGVudGl0eSBFbmNvZGUuaW50IHBlb3BsZSlcbiAgICAtLSAgID09IFwiXCJcIntcIlRvbVwiOjQyLFwiU3VlXCI6Mzh9XCJcIlwiXG5cbi19XG5kaWN0IDogKGsgLT4gU3RyaW5nKSAtPiAodiAtPiBWYWx1ZSkgLT4gRGljdCBrIHYgLT4gVmFsdWVcbmRpY3QgdG9LZXkgdG9WYWx1ZSBkaWN0aW9uYXJ5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKERpY3QuZm9sZGxcbiAgICAgICAgICAgIChcXGtleSB2YWx1ZSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCAodG9LZXkga2V5KSAodG9WYWx1ZSB2YWx1ZSkgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBkaWN0aW9uYXJ5XG4gICAgICAgIClcbiIsCiAgICAgICAgIm1vZHVsZSBKc29uLkRlY29kZSBleHBvc2luZ1xuICAgICggRGVjb2Rlciwgc3RyaW5nLCBib29sLCBpbnQsIGZsb2F0XG4gICAgLCBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuICAgICwgZmllbGQsIGF0LCBpbmRleFxuICAgICwgbWF5YmUsIG9uZU9mXG4gICAgLCBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IoLi4pLCBlcnJvclRvU3RyaW5nXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIG1hcDYsIG1hcDcsIG1hcDhcbiAgICAsIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG4gICAgKVxuXG57LXwgVHVybiBKU09OIHZhbHVlcyBpbnRvIEdyZW4gdmFsdWVzLiBXZSd2ZSBpbmhlcml0ZWQgdGhpcyBmcm9tIEVsbS4gRGVmaW5pdGVseSBjaGVjayBvdXQgdGhpcyBbaW50cm8gdG9cbkpTT04gZGVjb2RlcnNdW2d1aWRlXSB0byBnZXQgYSBmZWVsIGZvciBob3cgdGhpcyBsaWJyYXJ5IHdvcmtzIVxuXG5bZ3VpZGVdOiBodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9lZmZlY3RzL2pzb24uaHRtbFxuXG5cbkBkb2NzIERlY29kZXIsIHN0cmluZywgYm9vbCwgaW50LCBmbG9hdFxuXG5cbiMjIERhdGEgU3RydWN0dXJlc1xuXG5AZG9jcyBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuXG5cbiMjIE9iamVjdCBQcmltaXRpdmVzXG5cbkBkb2NzIGZpZWxkLCBhdCwgaW5kZXhcblxuXG4jIyBJbmNvbnNpc3RlbnQgU3RydWN0dXJlXG5cbkBkb2NzIG1heWJlLCBvbmVPZlxuXG5cbiMjIFJ1biBEZWNvZGVyc1xuXG5AZG9jcyBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IsIGVycm9yVG9TdHJpbmdcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgbWFwNiwgbWFwNywgbWFwOFxuXG5cbiMjIEZhbmN5IERlY29kaW5nXG5cbkBkb2NzIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuaW1wb3J0IENoYXJcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5pbXBvcnQgSnNvbi5FbmNvZGVcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgQSB2YWx1ZSB0aGF0IGtub3dzIGhvdyB0byBkZWNvZGUgSlNPTiB2YWx1ZXMuXG5cblRoZXJlIGlzIGEgd2hvbGUgc2VjdGlvbiBpbiBgZ3VpZGUuZWxtLWxhbmcub3JnYCBhYm91dCBkZWNvZGVycywgc28gW2NoZWNrIGl0XG5vdXRdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2ludGVyb3AvanNvbi5odG1sKSBmb3IgYSBtb3JlIGNvbXByZWhlbnNpdmVcbmludHJvZHVjdGlvbiFcblxuLX1cbnR5cGUgRGVjb2RlciBhXG4gICAgPSBEZWNvZGVyXG5cblxuey18IERlY29kZSBhIEpTT04gc3RyaW5nIGludG8gYW4gR3JlbiBgU3RyaW5nYC5cblxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBPayBcImhlbGxvXCJcbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuc3RyaW5nIDogRGVjb2RlciBTdHJpbmdcbnN0cmluZyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVTdHJpbmdcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBib29sZWFuIGludG8gYW4gR3JlbiBgQm9vbGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInRydWVcIiAgICAgICAgICAgICAgPT0gT2sgVHJ1ZVxuICAgIGRlY29kZVN0cmluZyBib29sIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCIzLjE0XCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbmJvb2wgOiBEZWNvZGVyIEJvb2xcbmJvb2wgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlQm9vbFxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG51bWJlciBpbnRvIGFuIEdyZW4gYEludGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiMy4xNFwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuaW50IDogRGVjb2RlciBJbnRcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbnRcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBudW1iZXIgaW50byBhbiBHcmVuIGBGbG9hdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCIzLjE0XCIgICAgICAgICAgICAgID09IE9rIDMuMTRcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuZmxvYXQgOiBEZWNvZGVyIEZsb2F0XG5mbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVGbG9hdFxuXG5cblxuLS0gREFUQSBTVFJVQ1RVUkVTXG5cblxuey18IERlY29kZSBhIG51bGxhYmxlIEpTT04gdmFsdWUgaW50byBhbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwiMTNcIiAgICA9PSBPayAoSnVzdCAxMylcbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCI0MlwiICAgID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcIm51bGxcIiAgPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcInRydWVcIiAgPT0gRXJyIC4uXG5cbi19XG5udWxsYWJsZSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChNYXliZSBhKVxubnVsbGFibGUgZGVjb2RlciA9XG4gICAgb25lT2ZcbiAgICAgICAgWyBudWxsIE5vdGhpbmdcbiAgICAgICAgLCBtYXAgSnVzdCBkZWNvZGVyXG4gICAgICAgIF1cblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSBpbnRvIGFuIEdyZW4gYEFycmF5YC5cblxuICAgIGRlY29kZVN0cmluZyAoYXJyYXkgaW50KSBcIlsxLDIsM11cIiA9PSBPayBbIDEsIDIsIDMgXVxuXG4gICAgZGVjb2RlU3RyaW5nIChhcnJheSBib29sKSBcIlt0cnVlLGZhbHNlXVwiID09IE9rIFsgVHJ1ZSwgRmFsc2UgXVxuXG4tfVxuYXJyYXkgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgYSlcbmFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUFycmF5XG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0IGludG8gYW4gR3JlbiBgRGljdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGRpY3QgaW50KSBcInsgXFxcImFsaWNlXFxcIjogNDIsIFxcXCJib2JcXFwiOiA5OSB9XCJcbiAgICAgICAgPT0gT2sgKERpY3QuZW1wdHkgfD4gRGljdC5zZXQgXCJhbGljZVwiIDQyIHw+IERpY3Quc2V0IFwiYm9iXCIgOTkpXG5cbklmIHlvdSBuZWVkIHRoZSBrZXlzIChsaWtlIGBcImFsaWNlXCJgIGFuZCBgXCJib2JcImApIGF2YWlsYWJsZSBpbiB0aGUgYERpY3RgXG52YWx1ZXMgYXMgd2VsbCwgSSByZWNvbW1lbmQgdXNpbmcgYSAocHJpdmF0ZSkgaW50ZXJtZWRpYXRlIGRhdGEgc3RydWN0dXJlIGxpa2VcbmBJbmZvYCBpbiB0aGlzIGV4YW1wbGU6XG5cbiAgICBtb2R1bGUgVXNlciBleHBvc2luZyAoIFVzZXIsIGRlY29kZXIgKVxuXG4gICAgaW1wb3J0IERpY3RcbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgZXhwb3NpbmcgKC4uKVxuXG4gICAgdHlwZSBhbGlhcyBVc2VyID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nXG4gICAgICAgICwgaGVpZ2h0IDogRmxvYXRcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgfVxuXG4gICAgbWFrZVVzZXIgOiBTdHJpbmcgLT4gRmxvYXQgLT4gSW50IC0+IFVzZXJcbiAgICBtYWtlVXNlciBuYW1lIGhlaWdodCBhZ2UgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgIH1cblxuICAgIGRlY29kZXIgOiBEZWNvZGVyIChEaWN0LkRpY3QgU3RyaW5nIFVzZXIpXG4gICAgZGVjb2RlciA9XG4gICAgICAgIG1hcCAoRGljdC5tYXAgaW5mb1RvVXNlcikgKGRpY3QgaW5mb0RlY29kZXIpXG5cbiAgICB0eXBlIGFsaWFzIEluZm8gPVxuICAgICAgICB7IGhlaWdodCA6IEZsb2F0XG4gICAgICAgICwgYWdlIDogSW50XG4gICAgICAgIH1cblxuICAgIG1ha2VJbmZvIDogRmxvYXQgLT4gSW50IC0+IEluZm9cbiAgICBtYWtlSW5mbyBoZWlnaHQgYWdlID1cbiAgICAgICAgeyBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgfVxuXG4gICAgaW5mb0RlY29kZXIgOiBEZWNvZGVyIEluZm9cbiAgICBpbmZvRGVjb2RlciA9XG4gICAgICAgIG1hcDIgbWFrZUluZm9cbiAgICAgICAgICAgIChmaWVsZCBcImhlaWdodFwiIGZsb2F0KVxuICAgICAgICAgICAgKGZpZWxkIFwiYWdlXCIgaW50KVxuXG4gICAgaW5mb1RvVXNlciA6IFN0cmluZyAtPiBJbmZvIC0+IFVzZXJcbiAgICBpbmZvVG9Vc2VyIG5hbWUgeyBoZWlnaHQsIGFnZSB9ID1cbiAgICAgICAgbWFrZVVzZXIgbmFtZSBoZWlnaHQgYWdlXG5cblNvIG5vdyBKU09OIGxpa2UgYHsgXCJhbGljZVwiOiB7IGhlaWdodDogMS42LCBhZ2U6IDMzIH19YCBhcmUgdHVybmVkIGludG9cbmRpY3Rpb25hcnkgdmFsdWVzIGxpa2UgYERpY3Quc2luZ2xldG9uIFwiYWxpY2VcIiAoVXNlciBcImFsaWNlXCIgMS42IDMzKWAgaWZcbnlvdSBuZWVkIHRoYXQuXG5cbi19XG5kaWN0IDogRGVjb2RlciBhIC0+IERlY29kZXIgKERpY3QgU3RyaW5nIGEpXG5kaWN0IGRlY29kZXIgPVxuICAgIG1hcCAoXFxwYWlycyAtPiBBcnJheS5mb2xkbCAoXFxwIGNvbGwgLT4gRGljdC5zZXQgcC5rZXkgcC52YWx1ZSBjb2xsKSBEaWN0LmVtcHR5IHBhaXJzKSAoa2V5VmFsdWVQYWlycyBkZWNvZGVyKVxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG9iamVjdCBpbnRvIGFuIEdyZW4gYEFycmF5YCBvZiBwYWlycy5cblxuICAgIGRlY29kZVN0cmluZyAoa2V5VmFsdWVQYWlycyBpbnQpIFwieyBcXFwiYWxpY2VcXFwiOiA0MiwgXFxcImJvYlxcXCI6IDk5IH1cIlxuICAgICAgICA9PSBPayBbIHsga2V5ID0gXCJhbGljZVwiLCB2YWx1ZSA9IDQyIH0sIHsga2V5ID0gXCJib2JcIiwgdmFsdWUgPSA5OSB9IF1cblxuLX1cbmtleVZhbHVlUGFpcnMgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogYSB9KVxua2V5VmFsdWVQYWlycyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVLZXlWYWx1ZVBhaXJzXG5cblxuey18IERlY29kZSBhIEpTT04gYXJyYXkgdGhhdCBoYXMgb25lIG9yIG1vcmUgZWxlbWVudHMuIFRoaXMgY29tZXMgdXAgaWYgeW91XG53YW50IHRvIGVuYWJsZSBkcmFnLWFuZC1kcm9wIG9mIGZpbGVzIGludG8geW91ciBhcHBsaWNhdGlvbi4gWW91IHdvdWxkIHBhaXJcbnRoaXMgZnVuY3Rpb24gd2l0aCBbYGVsbS9maWxlYF0oKSB0byB3cml0ZSBhIGBkcm9wRGVjb2RlcmAgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEZpbGUgZXhwb3NpbmcgKEZpbGUpXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlciBhcyBEXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IEdvdEZpbGVzIEZpbGUgKEFycmF5IEZpbGVzKVxuXG4gICAgaW5wdXREZWNvZGVyIDogRC5EZWNvZGVyIE1zZ1xuICAgIGlucHV0RGVjb2RlciA9XG4gICAgICAgIEQuYXQgWyBcImRhdGFUcmFuc2ZlclwiLCBcImZpbGVzXCIgXSAoRC5vbmVPck1vcmUgR290RmlsZXMgRmlsZS5kZWNvZGVyKVxuXG5UaGlzIGNhcHR1cmVzIHRoZSBmYWN0IHRoYXQgeW91IGNhbiBuZXZlciBkcmFnLWFuZC1kcm9wIHplcm8gZmlsZXMuXG5cbi19XG5vbmVPck1vcmUgOiAoYSAtPiBBcnJheSBhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlIHRvVmFsdWUgZGVjb2RlciA9XG4gICAgYXJyYXkgZGVjb2RlclxuICAgICAgICB8PiBhbmRUaGVuIChvbmVPck1vcmVIZWxwIHRvVmFsdWUpXG5cblxub25lT3JNb3JlSGVscCA6IChhIC0+IEFycmF5IGEgLT4gdmFsdWUpIC0+IEFycmF5IGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlSGVscCB0b1ZhbHVlIHhzID1cbiAgICB3aGVuIEFycmF5LmdldCAwIHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGZhaWwgXCJhIEFSUkFZIHdpdGggYXQgbGVhc3QgT05FIGVsZW1lbnRcIlxuXG4gICAgICAgIEp1c3QgeSAtPlxuICAgICAgICAgICAgc3VjY2VlZCAodG9WYWx1ZSB5IChBcnJheS5zbGljZSAxIChBcnJheS5sZW5ndGggeHMpIHhzKSlcblxuXG5cbi0tIE9CSkVDVCBQUklNSVRJVkVTXG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0LCByZXF1aXJpbmcgYSBwYXJ0aWN1bGFyIGZpZWxkLlxuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieFxcXCI6IDMgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiAzLCBcXFwieVxcXCI6IDQgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiB0cnVlIH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInlcXFwiOiA0IH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSBcInsgXFxcIm5hbWVcXFwiOiBcXFwidG9tXFxcIiB9XCJcbiAgICAgICAgPT0gT2sgXCJ0b21cIlxuXG5UaGUgb2JqZWN0IF9jYW5fIGhhdmUgb3RoZXIgZmllbGRzLiBMb3RzIG9mIHRoZW0hIFRoZSBvbmx5IHRoaW5nIHRoaXMgZGVjb2RlclxuY2FyZXMgYWJvdXQgaXMgaWYgYHhgIGlzIHByZXNlbnQgYW5kIHRoYXQgdGhlIHZhbHVlIHRoZXJlIGlzIGFuIGBJbnRgLlxuXG5DaGVjayBvdXQgW2BtYXAyYF0oI21hcDIpIHRvIHNlZSBob3cgdG8gZGVjb2RlIG11bHRpcGxlIGZpZWxkcyFcblxuLX1cbmZpZWxkIDogU3RyaW5nIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGFcbmZpZWxkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUZpZWxkXG5cblxuey18IERlY29kZSBhIG5lc3RlZCBKU09OIG9iamVjdCwgcmVxdWlyaW5nIGNlcnRhaW4gZmllbGRzLlxuXG4gICAganNvbiA9IFwiXCJcInsgXCJwZXJzb25cIjogeyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfSB9XCJcIlwiXG5cbiAgICBkZWNvZGVTdHJpbmcgKGF0IFtcInBlcnNvblwiLCBcIm5hbWVcIl0gc3RyaW5nKSBqc29uICA9PSBPayBcInRvbVwiXG4gICAgZGVjb2RlU3RyaW5nIChhdCBbXCJwZXJzb25cIiwgXCJhZ2VcIiBdIGludCAgICkganNvbiAgPT0gT2sgNDJcblxuVGhpcyBpcyByZWFsbHkganVzdCBhIHNob3J0aGFuZCBmb3Igc2F5aW5nIHRoaW5ncyBsaWtlOlxuXG4gICAgZmllbGQgXCJwZXJzb25cIiAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSA9PSBhdCBbIFwicGVyc29uXCIsIFwibmFtZVwiIF0gc3RyaW5nXG5cbi19XG5hdCA6IEFycmF5IFN0cmluZyAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5hdCBmaWVsZHMgZGVjb2RlciA9XG4gICAgQXJyYXkuZm9sZHIgZmllbGQgZGVjb2RlciBmaWVsZHNcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSwgcmVxdWlyaW5nIGEgcGFydGljdWxhciBpbmRleC5cblxuICAgIGpzb24gPSBcIlwiXCJbIFwiYWxpY2VcIiwgXCJib2JcIiwgXCJjaHVja1wiIF1cIlwiXCJcblxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMCBzdHJpbmcpIGpzb24gID09IE9rIFwiYWxpY2VcIlxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMSBzdHJpbmcpIGpzb24gID09IE9rIFwiYm9iXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDIgc3RyaW5nKSBqc29uICA9PSBPayBcImNodWNrXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDMgc3RyaW5nKSBqc29uICA9PSBFcnIgLi4uXG5cbi19XG5pbmRleCA6IEludCAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5pbmRleCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbmRleFxuXG5cblxuLS0gV0VJUkQgU1RSVUNUVVJFXG5cblxuey18IEhlbHBmdWwgZm9yIGRlYWxpbmcgd2l0aCBvcHRpb25hbCBmaWVsZHMuIEhlcmUgYXJlIGEgZmV3IHNsaWdodGx5IGRpZmZlcmVudFxuZXhhbXBsZXM6XG5cbiAgICBqc29uID0gXCJcIlwieyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfVwiXCJcIlxuXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJhZ2VcIiAgICBpbnQgICkpIGpzb24gPT0gT2sgKEp1c3QgNDIpXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJuYW1lXCIgICBpbnQgICkpIGpzb24gPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobWF5YmUgKGZpZWxkIFwiaGVpZ2h0XCIgZmxvYXQpKSBqc29uID09IE9rIE5vdGhpbmdcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJhZ2VcIiAgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIE5vdGhpbmdcbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwiaGVpZ2h0XCIgKG1heWJlIGZsb2F0KSkganNvbiA9PSBFcnIgLi4uXG5cbk5vdGljZSB0aGUgbGFzdCBleGFtcGxlISBJdCBpcyBzYXlpbmcgd2UgX211c3RfIGhhdmUgYSBmaWVsZCBuYW1lZCBgaGVpZ2h0YCBhbmRcbnRoZSBjb250ZW50IF9tYXlfIGJlIGEgZmxvYXQuIFRoZXJlIGlzIG5vIGBoZWlnaHRgIGZpZWxkLCBzbyB0aGUgZGVjb2RlciBmYWlscy5cblxuUG9pbnQgaXMsIGBtYXliZWAgd2lsbCBtYWtlIGV4YWN0bHkgd2hhdCBpdCBjb250YWlucyBjb25kaXRpb25hbC4gRm9yIG9wdGlvbmFsXG5maWVsZHMsIHRoaXMgbWVhbnMgeW91IHByb2JhYmx5IHdhbnQgaXQgX291dHNpZGVfIGEgdXNlIG9mIGBmaWVsZGAgb3IgYGF0YC5cblxuLX1cbm1heWJlIDogRGVjb2RlciBhIC0+IERlY29kZXIgKE1heWJlIGEpXG5tYXliZSBkZWNvZGVyID1cbiAgICBvbmVPZlxuICAgICAgICBbIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgLCBzdWNjZWVkIE5vdGhpbmdcbiAgICAgICAgXVxuXG5cbnstfCBUcnkgYSBidW5jaCBvZiBkaWZmZXJlbnQgZGVjb2RlcnMuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB0aGUgSlNPTiBtYXkgY29tZVxuaW4gYSBjb3VwbGUgZGlmZmVyZW50IGZvcm1hdHMuIEZvciBleGFtcGxlLCBzYXkgeW91IHdhbnQgdG8gcmVhZCBhbiBhcnJheSBvZlxubnVtYmVycywgYnV0IHNvbWUgb2YgdGhlbSBhcmUgYG51bGxgLlxuXG4gICAgaW1wb3J0IFN0cmluZ1xuXG4gICAgYmFkSW50IDogRGVjb2RlciBJbnRcbiAgICBiYWRJbnQgPVxuICAgICAgICBvbmVPZiBbIGludCwgbnVsbCAwIF1cblxuICAgIC0tIGRlY29kZVN0cmluZyAoYXJyYXkgYmFkSW50KSBcIlsxLDIsbnVsbCw0XVwiID09IE9rIFsxLDIsMCw0XVxuXG5XaHkgd291bGQgc29tZW9uZSBnZW5lcmF0ZSBKU09OIGxpa2UgdGhpcz8gUXVlc3Rpb25zIGxpa2UgdGhpcyBhcmUgbm90IGdvb2RcbmZvciB5b3VyIGhlYWx0aC4gVGhlIHBvaW50IGlzIHRoYXQgeW91IGNhbiB1c2UgYG9uZU9mYCB0byBoYW5kbGUgc2l0dWF0aW9uc1xubGlrZSB0aGlzIVxuXG5Zb3UgY291bGQgYWxzbyB1c2UgYG9uZU9mYCB0byBoZWxwIHZlcnNpb24geW91ciBkYXRhLiBUcnkgdGhlIGxhdGVzdCBmb3JtYXQsXG50aGVuIGEgZmV3IG9sZGVyIG9uZXMgdGhhdCB5b3Ugc3RpbGwgc3VwcG9ydC4gWW91IGNvdWxkIHVzZSBgYW5kVGhlbmAgdG8gYmVcbmV2ZW4gbW9yZSBwYXJ0aWN1bGFyIGlmIHlvdSB3YW50ZWQuXG5cbi19XG5vbmVPZiA6IEFycmF5IChEZWNvZGVyIGEpIC0+IERlY29kZXIgYVxub25lT2YgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ub25lT2ZcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgZGVjb2Rlci4gTWF5YmUgeW91IGp1c3Qgd2FudCB0byBrbm93IHRoZSBsZW5ndGggb2YgYSBzdHJpbmc6XG5cbiAgICBpbXBvcnQgU3RyaW5nXG5cbiAgICBzdHJpbmdMZW5ndGggOiBEZWNvZGVyIEludFxuICAgIHN0cmluZ0xlbmd0aCA9XG4gICAgICAgIG1hcCBTdHJpbmcubGVuZ3RoIHN0cmluZ1xuXG5JdCBpcyBvZnRlbiBoZWxwZnVsIHRvIHVzZSBgbWFwYCB3aXRoIGBvbmVPZmAsIGxpa2Ugd2hlbiBkZWZpbmluZyBgbnVsbGFibGVgOlxuXG4gICAgbnVsbGFibGUgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoTWF5YmUgYSlcbiAgICBudWxsYWJsZSBkZWNvZGVyID1cbiAgICAgICAgb25lT2ZcbiAgICAgICAgICAgIFsgbnVsbCBOb3RoaW5nXG4gICAgICAgICAgICAsIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcCA6IChhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxubWFwID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDFcblxuXG57LXwgVHJ5IHR3byBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQb2ludCA9XG4gICAgICAgIHsgeCA6IEZsb2F0XG4gICAgICAgICwgeSA6IEZsb2F0XG4gICAgICAgIH1cblxuICAgIG1ha2VQb2ludCA6IEZsb2F0IC0+IEZsb2F0IC0+IFBvaW50XG4gICAgbWFrZVBvaW50IHggeSA9XG4gICAgICAgIHsgeCA9IHhcbiAgICAgICAgLCB5ID0geVxuICAgICAgICB9XG5cbiAgICBwb2ludCA6IERlY29kZXIgUG9pbnRcbiAgICBwb2ludCA9XG4gICAgICAgIG1hcDIgbWFrZVBvaW50IChmaWVsZCBcInhcIiBmbG9hdCkgKGZpZWxkIFwieVwiIGZsb2F0KVxuXG4gICAgLS0gZGVjb2RlU3RyaW5nIHBvaW50IFwiXCJcInsgXCJ4XCI6IDMsIFwieVwiOiA0IH1cIlwiXCIgPT0gT2sgeyB4ID0gMywgeSA9IDQgfVxuXG5JdCB0cmllcyBlYWNoIGluZGl2aWR1YWwgZGVjb2RlciBhbmQgcHV0cyB0aGUgcmVzdWx0IHRvZ2V0aGVyIHdpdGggdGhlIGBQb2ludGBcbmNvbnN0cnVjdG9yLlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciB2YWx1ZVxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXAyXG5cblxuey18IFRyeSB0aHJlZSBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQZXJzb24gPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgaGVpZ2h0IDogRmxvYXQgfVxuXG4gICAgbWFrZVBlcnNvbiA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gUGVyc29uXG4gICAgbWFrZVBlcnNvbiBuYW1lIGFnZSBoZWlnaHQgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cblxuICAgIHBlcnNvbiA6IERlY29kZXIgUGVyc29uXG4gICAgcGVyc29uID1cbiAgICAgICAgbWFwMyBtYWtlUGVyc29uXG4gICAgICAgICAgICAoYXQgWyBcIm5hbWVcIiBdIHN0cmluZylcbiAgICAgICAgICAgIChhdCBbIFwiaW5mb1wiLCBcImFnZVwiIF0gaW50KVxuICAgICAgICAgICAgKGF0IFsgXCJpbmZvXCIsIFwiaGVpZ2h0XCIgXSBmbG9hdClcblxuICAgIC0tIGpzb24gPSBcIlwiXCJ7IFwibmFtZVwiOiBcInRvbVwiLCBcImluZm9cIjogeyBcImFnZVwiOiA0MiwgXCJoZWlnaHRcIjogMS44IH0gfVwiXCJcIlxuICAgIC0tIGRlY29kZVN0cmluZyBwZXJzb24ganNvbiA9PSBPayB7IG5hbWUgPSBcInRvbVwiLCBhZ2UgPSA0MiwgaGVpZ2h0ID0gMS44IH1cblxuTGlrZSBgbWFwMmAgaXQgdHJpZXMgZWFjaCBkZWNvZGVyIGluIG9yZGVyIGFuZCB0aGVuIGdpdmUgdGhlIHJlc3VsdHMgdG8gdGhlXG5gUGVyc29uYCBjb25zdHJ1Y3Rvci4gVGhhdCBjYW4gYmUgYW55IGZ1bmN0aW9uIHRob3VnaCFcblxuLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgdmFsdWVcbm1hcDMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwM1xuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciB2YWx1ZVxubWFwNCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA0XG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIHZhbHVlXG5tYXA1ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDVcblxuXG57LXwgLX1cbm1hcDYgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciBmIC0+IERlY29kZXIgdmFsdWVcbm1hcDYgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwNlxuXG5cbnstfCAtfVxubWFwNyA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgZiAtPiBEZWNvZGVyIGcgLT4gRGVjb2RlciB2YWx1ZVxubWFwNyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA3XG5cblxuey18IC19XG5tYXA4IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIGYgLT4gRGVjb2RlciBnIC0+IERlY29kZXIgaCAtPiBEZWNvZGVyIHZhbHVlXG5tYXA4ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDhcblxuXG5cbi0tIFJVTiBERUNPREVSU1xuXG5cbnstfCBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gYSBKU09OIHZhbHVlIGFuZCB0aGVuIHJ1biB0aGUgYERlY29kZXJgIG9uIGl0LlxuVGhpcyB3aWxsIGZhaWwgaWYgdGhlIHN0cmluZyBpcyBub3Qgd2VsbC1mb3JtZWQgSlNPTiBvciBpZiB0aGUgYERlY29kZXJgXG5mYWlscyBmb3Igc29tZSByZWFzb24uXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiNFwiICAgICA9PSBPayA0XG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjEgKyAyXCIgPT0gRXJyIC4uLlxuXG4tfVxuZGVjb2RlU3RyaW5nIDogRGVjb2RlciBhIC0+IFN0cmluZyAtPiBSZXN1bHQgRXJyb3IgYVxuZGVjb2RlU3RyaW5nID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnJ1bk9uU3RyaW5nXG5cblxuey18IFJ1biBhIGBEZWNvZGVyYCBvbiBzb21lIEpTT04gYFZhbHVlYC4gWW91IGNhbiBzZW5kIHRoZXNlIEpTT04gdmFsdWVzXG50aHJvdWdoIHBvcnRzLCBzbyB0aGF0IGlzIHByb2JhYmx5IHRoZSBtYWluIHRpbWUgeW91IHdvdWxkIHVzZSB0aGlzIGZ1bmN0aW9uLlxuLX1cbmRlY29kZVZhbHVlIDogRGVjb2RlciBhIC0+IFZhbHVlIC0+IFJlc3VsdCBFcnJvciBhXG5kZWNvZGVWYWx1ZSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5ydW5cblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBhbGlhcyBWYWx1ZSA9XG4gICAgSnNvbi5FbmNvZGUuVmFsdWVcblxuXG57LXwgQSBzdHJ1Y3R1cmVkIGVycm9yIGRlc2NyaWJpbmcgZXhhY3RseSBob3cgdGhlIGRlY29kZXIgZmFpbGVkLiBZb3UgY2FuIHVzZVxudGhpcyB0byBjcmVhdGUgbW9yZSBlbGFib3JhdGUgdmlzdWFsaXphdGlvbnMgb2YgYSBkZWNvZGVyIHByb2JsZW0uIEZvciBleGFtcGxlLFxueW91IGNvdWxkIHNob3cgdGhlIGVudGlyZSBKU09OIG9iamVjdCBhbmQgc2hvdyB0aGUgcGFydCBjYXVzaW5nIHRoZSBmYWlsdXJlIGluXG5yZWQuXG4tfVxudHlwZSBFcnJvclxuICAgID0gRmllbGQgeyBuYW1lIDogU3RyaW5nLCBlcnJvciA6IEVycm9yIH1cbiAgICB8IEluZGV4IHsgaW5kZXggOiBJbnQsIGVycm9yIDogRXJyb3IgfVxuICAgIHwgT25lT2YgKEFycmF5IEVycm9yKVxuICAgIHwgRmFpbHVyZSB7IG1lc3NhZ2UgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfVxuXG5cbnstfCBDb252ZXJ0IGEgZGVjb2RpbmcgZXJyb3IgaW50byBhIGBTdHJpbmdgIHRoYXQgaXMgbmljZSBmb3IgZGVidWdnaW5nLlxuXG5JdCBwcm9kdWNlcyBtdWx0aXBsZSBsaW5lcyBvZiBvdXRwdXQsIHNvIHlvdSBtYXkgd2FudCB0byBwZWVrIGF0IGl0IHdpdGhcbnNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSHRtbFxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIGVycm9yVG9IdG1sIDogRGVjb2RlLkVycm9yIC0+IEh0bWwuSHRtbCBtc2dcbiAgICBlcnJvclRvSHRtbCBlcnJvciA9XG4gICAgICAgIEh0bWwucHJlIFtdIFsgSHRtbC50ZXh0IChEZWNvZGUuZXJyb3JUb1N0cmluZyBlcnJvcikgXVxuXG4qKk5vdGU6KiogSXQgd291bGQgYmUgY29vbCB0byBkbyBuaWNlciBjb2xvcmluZyBhbmQgZmFuY2llciBIVE1MLCBidXQgSSB3YW50ZWRcbnRvIGF2b2lkIGhhdmluZyBhbiBgZWxtL2h0bWxgIGRlcGVuZGVuY3kgZm9yIG5vdy4gSXQgaXMgdG90YWxseSBwb3NzaWJsZSB0b1xuY3Jhd2wgdGhlIGBFcnJvcmAgc3RydWN0dXJlIGFuZCBjcmVhdGUgdGhpcyBzZXBhcmF0ZWx5IHRob3VnaCFcblxuLX1cbmVycm9yVG9TdHJpbmcgOiBFcnJvciAtPiBTdHJpbmdcbmVycm9yVG9TdHJpbmcgZXJyb3IgPVxuICAgIGVycm9yVG9TdHJpbmdIZWxwIGVycm9yIFtdXG5cblxuZXJyb3JUb1N0cmluZ0hlbHAgOiBFcnJvciAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5lcnJvclRvU3RyaW5nSGVscCBlcnJvciBjb250ZXh0ID1cbiAgICB3aGVuIGVycm9yIGlzXG4gICAgICAgIEZpZWxkIHsgbmFtZSA9IGYsIGVycm9yID0gZXJyIH0gLT5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIGlzU2ltcGxlID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBTdHJpbmcucG9wRmlyc3QgZiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBmaXJzdCA9IGNoYXIsIHJlc3QgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXIuaXNBbHBoYSBjaGFyICYmIFN0cmluZy5hbGwgQ2hhci5pc0FscGhhTnVtIHJlc3RcblxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIGlmIGlzU2ltcGxlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsrIGZcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlsnXCIgKysgZiArKyBcIiddXCJcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgKFsgZmllbGROYW1lIF0gKysgY29udGV4dClcblxuICAgICAgICBJbmRleCB7IGluZGV4ID0gaSwgZXJyb3IgPSBlcnIgfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW5kZXhOYW1lID1cbiAgICAgICAgICAgICAgICAgICAgXCJbXCIgKysgU3RyaW5nLmZyb21JbnQgaSArKyBcIl1cIlxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIGVycm9yVG9TdHJpbmdIZWxwIGVyciAoWyBpbmRleE5hbWUgXSArKyBjb250ZXh0KVxuXG4gICAgICAgIE9uZU9mIGVycm9ycyAtPlxuICAgICAgICAgICAgd2hlbiBlcnJvcnMgaXNcbiAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICBcIlJhbiBpbnRvIGEgSnNvbi5EZWNvZGUub25lT2Ygd2l0aCBubyBwb3NzaWJpbGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrICh3aGVuIGNvbnRleHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgWyBlcnIgXSAtPlxuICAgICAgICAgICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29udGV4dCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKc29uLkRlY29kZS5vbmVPZlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgSnNvbi5EZWNvZGUub25lT2YgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRyb2R1Y3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgKysgXCIgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgXCIgKysgU3RyaW5nLmZyb21JbnQgKEFycmF5Lmxlbmd0aCBlcnJvcnMpICsrIFwiIHdheXM6XCJcbiAgICAgICAgICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmpvaW4gXCJcXG5cXG5cIiAoWyBpbnRyb2R1Y3Rpb24gXSArKyBBcnJheS5pbmRleGVkTWFwIGVycm9yT25lT2YgZXJyb3JzKVxuXG4gICAgICAgIEZhaWx1cmUgeyBtZXNzYWdlID0gbXNnLCB2YWx1ZSA9IGpzb24gfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW50cm9kdWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBjb250ZXh0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG5cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb25cIiArKyBTdHJpbmcuam9pbiBcIlwiIGNvbnRleHQgKysgXCI6XFxuXFxuICAgIFwiXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgaW50cm9kdWN0aW9uICsrIGluZGVudCAoSnNvbi5FbmNvZGUuZW5jb2RlIDQganNvbikgKysgXCJcXG5cXG5cIiArKyBtc2dcblxuXG5lcnJvck9uZU9mIDogSW50IC0+IEVycm9yIC0+IFN0cmluZ1xuZXJyb3JPbmVPZiBpIGVycm9yID1cbiAgICBcIlxcblxcbihcIiArKyBTdHJpbmcuZnJvbUludCAoaSArIDEpICsrIFwiKSBcIiArKyBpbmRlbnQgKGVycm9yVG9TdHJpbmcgZXJyb3IpXG5cblxuaW5kZW50IDogU3RyaW5nIC0+IFN0cmluZ1xuaW5kZW50IHN0ciA9XG4gICAgU3RyaW5nLmpvaW4gXCJcXG4gICAgXCIgKFN0cmluZy5zcGxpdCBcIlxcblwiIHN0cilcblxuXG5cbi0tIEZBTkNZIFBSSU1JVElWRVNcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBwcm9kdWNlIGEgY2VydGFpbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChzdWNjZWVkIDQyKSBcInRydWVcIiAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyAoc3VjY2VlZCA0MikgXCJbMSwyLDNdXCIgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKHN1Y2NlZWQgNDIpIFwiaGVsbG9cIiAgID09IEVyciAuLi4gLS0gdGhpcyBpcyBub3QgYSB2YWxpZCBKU09OIHN0cmluZ1xuXG5UaGlzIGlzIGhhbmR5IHdoZW4gdXNlZCB3aXRoIGBvbmVPZmAgb3IgYGFuZFRoZW5gLlxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gRGVjb2RlciBhXG5zdWNjZWVkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnN1Y2NlZWRcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBtYWtlIHRoZSBkZWNvZGVyIGZhaWwuIFRoaXMgaXMgaGFuZHkgd2hlbiB1c2VkIHdpdGhcbmBvbmVPZmAgb3IgYGFuZFRoZW5gIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgYSBjdXN0b20gZXJyb3IgbWVzc2FnZSBpbiBzb21lXG5jYXNlLlxuXG5TZWUgdGhlIFtgYW5kVGhlbmBdKCNhbmRUaGVuKSBkb2NzIGZvciBhbiBleGFtcGxlLlxuXG4tfVxuZmFpbCA6IFN0cmluZyAtPiBEZWNvZGVyIGFcbmZhaWwgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZmFpbFxuXG5cbnstfCBDcmVhdGUgZGVjb2RlcnMgdGhhdCBkZXBlbmQgb24gcHJldmlvdXMgcmVzdWx0cy4gSWYgeW91IGFyZSBjcmVhdGluZ1xudmVyc2lvbmVkIGRhdGEsIHlvdSBtaWdodCBkbyBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXG5cbiAgICBpbmZvIDogRGVjb2RlciBJbmZvXG4gICAgaW5mbyA9XG4gICAgICAgIGZpZWxkIFwidmVyc2lvblwiIGludFxuICAgICAgICAgICAgfD4gYW5kVGhlbiBpbmZvSGVscFxuXG4gICAgaW5mb0hlbHAgOiBJbnQgLT4gRGVjb2RlciBJbmZvXG4gICAgaW5mb0hlbHAgdmVyc2lvbiA9XG4gICAgICAgIHdoZW4gdmVyc2lvbiBpc1xuICAgICAgICAgICAgNCAtPlxuICAgICAgICAgICAgICAgIGluZm9EZWNvZGVyNFxuXG4gICAgICAgICAgICAzIC0+XG4gICAgICAgICAgICAgICAgaW5mb0RlY29kZXIzXG5cbiAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICBmYWlsIDx8XG4gICAgICAgICAgICAgICAgICAgIFwiVHJ5aW5nIHRvIGRlY29kZSBpbmZvLCBidXQgdmVyc2lvbiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKysgdG9TdHJpbmcgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgKysgXCIgaXMgbm90IHN1cHBvcnRlZC5cIlxuXG4gICAgLS0gaW5mb0RlY29kZXI0IDogRGVjb2RlciBJbmZvXG4gICAgLS0gaW5mb0RlY29kZXIzIDogRGVjb2RlciBJbmZvXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gRGVjb2RlciBiKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmFuZFRoZW5cblxuXG57LXwgU29tZXRpbWVzIHlvdSBoYXZlIEpTT04gd2l0aCByZWN1cnNpdmUgc3RydWN0dXJlLCBsaWtlIG5lc3RlZCBjb21tZW50cy5cbllvdSBjYW4gdXNlIGBsYXp5YCB0byBtYWtlIHN1cmUgeW91ciBkZWNvZGVyIHVucm9sbHMgbGF6aWx5LlxuXG4gICAgdHlwZSBhbGlhcyBDb21tZW50ID1cbiAgICAgICAgeyBtZXNzYWdlIDogU3RyaW5nXG4gICAgICAgICwgcmVzcG9uc2VzIDogUmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIG1ha2VDb21tZW50IDogU3RyaW5nIC0+IFJlc3BvbnNlcyAtPiBDb21tZW50XG4gICAgbWFrZUNvbW1lbnQgbWVzc2FnZSByZXNwb25zZXMgPVxuICAgICAgICB7IG1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAgICwgcmVzcG9uc2VzID0gcmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIHR5cGUgUmVzcG9uc2VzXG4gICAgICAgID0gUmVzcG9uc2VzIChBcnJheSBDb21tZW50KVxuXG4gICAgY29tbWVudCA6IERlY29kZXIgQ29tbWVudFxuICAgIGNvbW1lbnQgPVxuICAgICAgICBtYXAyIG1ha2VDb21tZW50XG4gICAgICAgICAgICAoZmllbGQgXCJtZXNzYWdlXCIgc3RyaW5nKVxuICAgICAgICAgICAgKGZpZWxkIFwicmVzcG9uc2VzXCIgKG1hcCBSZXNwb25zZXMgKGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpKSkpXG5cbklmIHdlIGhhZCBzYWlkIGBhcnJheSBjb21tZW50YCBpbnN0ZWFkLCB3ZSB3b3VsZCBzdGFydCBleHBhbmRpbmcgdGhlIHZhbHVlXG5pbmZpbml0ZWx5LiBXaGF0IGlzIGEgYGNvbW1lbnRgPyBJdCBpcyBhIGRlY29kZXIgZm9yIG9iamVjdHMgd2hlcmUgdGhlXG5gcmVzcG9uc2VzYCBmaWVsZCBjb250YWlucyBjb21tZW50cy4gV2hhdCBpcyBhIGBjb21tZW50YCB0aG91Z2g/IEV0Yy5cblxuQnkgdXNpbmcgYGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpYCB3ZSBtYWtlIHN1cmUgdGhlIGRlY29kZXIgb25seSBleHBhbmRzXG50byBiZSBhcyBkZWVwIGFzIHRoZSBKU09OIHdlIGFyZSBnaXZlbi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgcmVjdXJzaXZlIGRhdGFcbnN0cnVjdHVyZXMgW2hlcmVdLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29tcGlsZXIvYmxvYi9tYXN0ZXIvaGludHMvcmVjdXJzaXZlLWFsaWFzLm1kXG5cbi19XG5sYXp5IDogKHt9IC0+IERlY29kZXIgYSkgLT4gRGVjb2RlciBhXG5sYXp5IHRodW5rID1cbiAgICBhbmRUaGVuIHRodW5rIChzdWNjZWVkIHt9KVxuXG5cbnstfCBEbyBub3QgZG8gYW55dGhpbmcgd2l0aCBhIEpTT04gdmFsdWUsIGp1c3QgYnJpbmcgaXQgaW50byBHcmVuIGFzIGEgYFZhbHVlYC5cblRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBwYXJ0aWN1bGFybHkgY29tcGxleCBkYXRhIHRoYXQgeW91IHdvdWxkIGxpa2UgdG9cbmRlYWwgd2l0aCBsYXRlci4gT3IgaWYgeW91IGFyZSBnb2luZyB0byBzZW5kIGl0IG91dCBhIHBvcnQgYW5kIGRvIG5vdCBjYXJlXG5hYm91dCBpdHMgc3RydWN0dXJlLlxuLX1cbnZhbHVlIDogRGVjb2RlciBWYWx1ZVxudmFsdWUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlVmFsdWVcblxuXG57LXwgRGVjb2RlIGEgYG51bGxgIHZhbHVlIGludG8gc29tZSBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIEZhbHNlKSBcIm51bGxcIiA9PSBPayBGYWxzZVxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJudWxsXCIgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgNDIpIFwiNDJcIiAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJmYWxzZVwiICAgPT0gRXJyIC4uXG5cblNvIGlmIHlvdSBldmVyIHNlZSBhIGBudWxsYCwgdGhpcyB3aWxsIHJldHVybiB3aGF0ZXZlciB2YWx1ZSB5b3Ugc3BlY2lmaWVkLlxuXG4tfVxubnVsbCA6IGEgLT4gRGVjb2RlciBhXG5udWxsID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZU51bGxcbiIsCiAgICAgICAgIm1vZHVsZSBDaGFyIGV4cG9zaW5nXG4gICAgKCBDaGFyXG4gICAgLCBpc1VwcGVyLCBpc0xvd2VyLCBpc0FscGhhLCBpc0FscGhhTnVtXG4gICAgLCBpc0RpZ2l0LCBpc09jdERpZ2l0LCBpc0hleERpZ2l0XG4gICAgLCB0b0NvZGUsIGZyb21Db2RlXG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2hhcmFjdGVycy4gQ2hhcmFjdGVyIGxpdGVyYWxzIGFyZSBlbmNsb3NlZCBpblxuYCdhJ2AgcGFpciBvZiBzaW5nbGUgcXVvdGVzLlxuXG5cbkBkb2NzIENoYXJcblxuXG4jIyBBU0NJSSBMZXR0ZXJzXG5cbkBkb2NzIGlzVXBwZXIsIGlzTG93ZXIsIGlzQWxwaGEsIGlzQWxwaGFOdW1cblxuXG4jIyBEaWdpdHNcblxuQGRvY3MgaXNEaWdpdCwgaXNPY3REaWdpdCwgaXNIZXhEaWdpdFxuXG5cbiMjIFVuaWNvZGUgQ29kZSBQb2ludHNcblxuQGRvY3MgdG9Db2RlLCBmcm9tQ29kZVxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICgoJiYpLCAoPD0pLCAoPj0pLCAofHwpLCBCb29sLCBJbnQpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQ2hhclxuXG5cblxuLS0gQ0hBUlxuXG5cbnstfCBBIGBDaGFyYCBpcyBhIHNpbmdsZSBbdW5pY29kZV1bdV0gY2hhcmFjdGVyOlxuXG4gICAgJ2EnXG5cbiAgICAnMCdcblxuICAgICdaJ1xuXG4gICAgJz8nXG5cbiAgICAnXCInXG5cbiAgICAnzqMnXG5cbiAgICAn8J+ZiCdcblxuICAgICdcXHQnXG5cbiAgICAnXCInXG5cbiAgICAnXFwnJ1xuXG4gICAgJ/CfmYgnIC0tICfwn5mIJ1xuXG4qKk5vdGUgMToqKiBZb3UgX2Nhbm5vdF8gdXNlIHNpbmdsZSBxdW90ZXMgYXJvdW5kIG11bHRpcGxlIGNoYXJhY3RlcnMgbGlrZSBpblxuSmF2YVNjcmlwdC4gVGhpcyBpcyBob3cgd2UgZGlzdGluZ3Vpc2ggW2BTdHJpbmdgXShTdHJpbmcjU3RyaW5nKSBhbmQgYENoYXJgXG52YWx1ZXMgaW4gc3ludGF4LlxuXG4qKk5vdGUgMjoqKiBZb3UgY2FuIHVzZSB0aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0b1xucmVwcmVzZW50IGNoYXJhY3RlcnMgYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGVcbmNoYXJhY3RlcnMgZGlyZWN0bHkuIFVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZVxubWFueSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuLX1cbnR5cGUgQ2hhclxuICAgID0gQ2hhciAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuXG4tLSBDTEFTU0lGSUNBVElPTlxuXG5cbnstfCBEZXRlY3QgdXBwZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNVcHBlciAnQScgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnQidcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNVcHBlciAnWidcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnMCcgPT0gRmFsc2VcblxuICAgIGlzVXBwZXIgJ2EnID09IEZhbHNlXG5cbiAgICBpc1VwcGVyICctJyA9PSBGYWxzZVxuXG4gICAgaXNVcHBlciAnzqMnID09IEZhbHNlXG5cbi19XG5pc1VwcGVyIDogQ2hhciAtPiBCb29sXG5pc1VwcGVyIGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4NUEgJiYgMHg0MSA8PSBjb2RlXG5cblxuey18IERldGVjdCBsb3dlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc0xvd2VyICdhJyA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICdiJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc0xvd2VyICd6J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICcwJyA9PSBGYWxzZVxuXG4gICAgaXNMb3dlciAnQScgPT0gRmFsc2VcblxuICAgIGlzTG93ZXIgJy0nID09IEZhbHNlXG5cbiAgICBpc0xvd2VyICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzTG93ZXIgOiBDaGFyIC0+IEJvb2xcbmlzTG93ZXIgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4N0FcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGEgJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ2InID09IFRydWVcblxuICAgIGlzQWxwaGEgJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ1knID09IFRydWVcblxuICAgIGlzQWxwaGEgJzAnID09IEZhbHNlXG5cbiAgICBpc0FscGhhICctJyA9PSBGYWxzZVxuXG4gICAgaXNBbHBoYSAnz4AnID09IEZhbHNlXG5cbi19XG5pc0FscGhhIDogQ2hhciAtPiBCb29sXG5pc0FscGhhIGNoYXIgPVxuICAgIGlzTG93ZXIgY2hhciB8fCBpc1VwcGVyIGNoYXJcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGFOdW0gJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ2InID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ1knID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzAnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzcnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJy0nID09IEZhbHNlXG5cbiAgICBpc0FscGhhTnVtICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzQWxwaGFOdW0gOiBDaGFyIC0+IEJvb2xcbmlzQWxwaGFOdW0gY2hhciA9XG4gICAgaXNMb3dlciBjaGFyIHx8IGlzVXBwZXIgY2hhciB8fCBpc0RpZ2l0IGNoYXJcblxuXG57LXwgRGV0ZWN0IGRpZ2l0cyBgMDEyMzQ1Njc4OWBcblxuICAgIGlzRGlnaXQgJzAnID09IFRydWVcblxuICAgIGlzRGlnaXQgJzEnXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzRGlnaXQgJzknXG4gICAgICAgID09IFRydWVcblxuICAgIGlzRGlnaXQgJ2EnID09IEZhbHNlXG5cbiAgICBpc0RpZ2l0ICdiJyA9PSBGYWxzZVxuXG4gICAgaXNEaWdpdCAnQScgPT0gRmFsc2VcblxuLX1cbmlzRGlnaXQgOiBDaGFyIC0+IEJvb2xcbmlzRGlnaXQgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIGNvZGUgPD0gMHgzOSAmJiAweDMwIDw9IGNvZGVcblxuXG57LXwgRGV0ZWN0IG9jdGFsIGRpZ2l0cyBgMDEyMzQ1NjdgXG5cbiAgICBpc09jdERpZ2l0ICcwJyA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICcxJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc09jdERpZ2l0ICc3J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICc4JyA9PSBGYWxzZVxuXG4gICAgaXNPY3REaWdpdCAnYScgPT0gRmFsc2VcblxuICAgIGlzT2N0RGlnaXQgJ0EnID09IEZhbHNlXG5cbi19XG5pc09jdERpZ2l0IDogQ2hhciAtPiBCb29sXG5pc09jdERpZ2l0IGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4MzcgJiYgMHgzMCA8PSBjb2RlXG5cblxuey18IERldGVjdCBoZXhhZGVjaW1hbCBkaWdpdHMgYDAxMjM0NTY3ODlhYmNkZWZBQkNERUZgXG4tfVxuaXNIZXhEaWdpdCA6IENoYXIgLT4gQm9vbFxuaXNIZXhEaWdpdCBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgKDB4MzAgPD0gY29kZSAmJiBjb2RlIDw9IDB4MzkpXG4gICAgICAgIHx8ICgweDQxIDw9IGNvZGUgJiYgY29kZSA8PSAweDQ2KVxuICAgICAgICB8fCAoMHg2MSA8PSBjb2RlICYmIGNvZGUgPD0gMHg2NilcblxuXG5cbi0tIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgVW5pY29kZSBbY29kZSBwb2ludF1bY3BdLlxuXG5bY3BdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlX3BvaW50XG5cbiAgICB0b0NvZGUgJ0EnID09IDY1XG5cbiAgICB0b0NvZGUgJ0InID09IDY2XG5cbiAgICB0b0NvZGUgJ+acqCcgPT0gMHg2NzI4XG5cbiAgICB0b0NvZGUgJ/CdjIYnID09IDB4MDAwMUQzMDZcblxuICAgIHRvQ29kZSAn8J+YgycgPT0gMHgwMDAxRjYwM1xuXG4tfVxudG9Db2RlIDogQ2hhciAtPiBJbnRcbnRvQ29kZSA9XG4gICAgR3Jlbi5LZXJuZWwuQ2hhci50b0NvZGVcblxuXG57LXwgQ29udmVydCBhIFVuaWNvZGUgW2NvZGUgcG9pbnRdW2NwXSB0byBhIGNoYXJhY3Rlci5cblxuICAgIGZyb21Db2RlIDY1ID09ICdBJ1xuXG4gICAgZnJvbUNvZGUgNjYgPT0gJ0InXG5cbiAgICBmcm9tQ29kZSAweDY3MjggPT0gJ+acqCdcblxuICAgIGZyb21Db2RlIDB4MDAwMUQzMDYgPT0gJ/CdjIYnXG5cbiAgICBmcm9tQ29kZSAweDAwMDFGNjAzID09ICfwn5iDJ1xuXG4gICAgZnJvbUNvZGUgLTEgPT0gJ++/vSdcblxuVGhlIGZ1bGwgcmFuZ2Ugb2YgdW5pY29kZSBpcyBmcm9tIGAwYCB0byBgMHgxMEZGRkZgLiBXaXRoIG51bWJlcnMgb3V0c2lkZSB0aGF0XG5yYW5nZSwgeW91IGdldCBbdGhlIHJlcGxhY2VtZW50IGNoYXJhY3Rlcl1bZmZmZF0uXG5cbltjcF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfcG9pbnRcbltmZmZkXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spI1JlcGxhY2VtZW50X2NoYXJhY3RlclxuXG4tfVxuZnJvbUNvZGUgOiBJbnQgLT4gQ2hhclxuZnJvbUNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkNoYXIuZnJvbUNvZGVcbiIsCiAgICAgICAgIm1vZHVsZSBSZXN1bHQgZXhwb3NpbmdcbiAgICAoIFJlc3VsdCguLilcbiAgICAsIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBmaXJzdE9rLCBhbGxPa1xuICAgICwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBhbmRUaGVuLCBvbkVycm9yXG4gICAgLCB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCB0b01heWJlLCBmcm9tTWF5YmUsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgQSBgUmVzdWx0YCBpcyB0aGUgcmVzdWx0IG9mIGEgY29tcHV0YXRpb24gdGhhdCBtYXkgZmFpbC4gVGhpcyBpcyBhIGdyZWF0XG53YXkgdG8gbWFuYWdlIGVycm9ycyBpbiBHcmVuLlxuXG5AZG9jcyBSZXN1bHRcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwgZmlyc3RPaywgYWxsT2tcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuXG5cbiMjIENoYWluaW5nXG5cbkBkb2NzIGFuZFRoZW4sIG9uRXJyb3JcblxuXG4jIyBIYW5kbGluZyBFcnJvcnNcblxuQGRvY3Mgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgdG9NYXliZSwgZnJvbU1heWJlLCBtYXBFcnJvclxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcblxuXG57LXwgQSBgUmVzdWx0YCBpcyBlaXRoZXIgYE9rYCBtZWFuaW5nIHRoZSBjb21wdXRhdGlvbiBzdWNjZWVkZWQsIG9yIGl0IGlzIGFuXG5gRXJyYCBtZWFuaW5nIHRoYXQgdGhlcmUgd2FzIHNvbWUgZmFpbHVyZS5cbi19XG50eXBlIFJlc3VsdCBlcnJvciB2YWx1ZVxuICAgID0gT2sgdmFsdWVcbiAgICB8IEVyciBlcnJvclxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBtYXRjaGVzIHRoZSBwcm92aWRlZCB2YWx1ZS5cblxuICAgIFJlc3VsdC5oYXNWYWx1ZSAxMjMgKE9rIDEyMykgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0Lmhhc1ZhbHVlIDEyMyAoT2sgNSkgPT0gRmFsc2VcbiAgICBcbiAgICBSZXN1bHQuaGFzVmFsdWUgMTIzIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmhhc1ZhbHVlIDogYSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmhhc1ZhbHVlIHZhbHVlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYSA9PSB2YWx1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBwYXNzZXMgdGhlIHByb3ZpZGVkIHRlc3QuXG5cbiAgICBSZXN1bHQuY2hlY2tWYWx1ZSBpc09kZCAoT2sgNSkgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0LmNoZWNrVmFsdWUgaXNPZGQgKE9rIDEyKSA9PSBGYWxzZVxuICAgIFxuICAgIFJlc3VsdC5jaGVja1ZhbHVlIGlzT2RkIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmNoZWNrVmFsdWUgOiAoYSAtPiBCb29sKSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmNoZWNrVmFsdWUgdGVzdCByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHRlc3QgYSBcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgUmV0dXJucyB0aGUgZmlyc3QgYE9rYCB2YWx1ZSBpbiBhbiBgQXJyYXlgIG9mIGBSZXN1bHRgcy5cblxuICAgIFJlc3VsdC5maXJzdE9rIFsgT2sgNSwgRXJyIDAsIE9rIDEwIF0gPT0gSnVzdCA1XG5cbiAgICBSZXN1bHQuZmlyc3RPayBbIEVyciAwLCBFcnIgMSBdID09IE5vdGhpbmdcblxuLX1cbmZpcnN0T2sgOiBBcnJheSAoUmVzdWx0IHggYSkgLT4gTWF5YmUgYVxuZmlyc3RPayBhcnJheSA9XG4gICAgQXJyYXkuZmluZEZpcnN0IGlzT2sgYXJyYXlcbiAgICAgICAgfD4gTWF5YmUubWFwIC52YWx1ZVxuICAgICAgICB8PiBNYXliZS5hbmRUaGVuIHRvTWF5YmVcblxuXG57LXwgQ29udmVydCBhbiBgQXJyYXlgIG9mIGBSZXN1bHQgZXJyIG9rYCB0byBgUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylgLiBZb3UnbGwgb25seVxucmVjZWl2ZSBhbiBgT2tgIGlmIHRoZXJlIGFyZSBubyBgRXJyYCB2YWx1ZXMgaW4gdGhlIGBBcnJheWAuXG5cbiAgICBSZXN1bHQuYWxsT2sgWyBPayA1LCBFcnIgMCwgT2sgMTAgXSA9PSBFcnIgWyAwIF1cblxuICAgIFJlc3VsdC5hbGxPayBbIE9rIDAsIE9rIDEgXSA9PSBPayBbIDAsIDEgXVxuXG4tfVxuYWxsT2sgOiBBcnJheSAoUmVzdWx0IGVyciBvaykgLT4gUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylcbmFsbE9rIGFycmF5ID1cbiAgICBsZXRcbiAgICAgICAgZXJyb3JzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcEFuZEtlZXBKdXN0IGVyclRvTWF5YmUgYXJyYXlcbiAgICBpblxuICAgIGlmIEFycmF5Lmxlbmd0aCBlcnJvcnMgPiAwIHRoZW5cbiAgICAgICAgRXJyIGVycm9yc1xuXG4gICAgZWxzZVxuICAgICAgICBPayA8fCBBcnJheS5tYXBBbmRLZWVwSnVzdCB0b01heWJlIGFycmF5XG5cblxuZXJyVG9NYXliZSA6IFJlc3VsdCBlcnIgb2sgLT4gTWF5YmUgZXJyXG5lcnJUb01heWJlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEVyciBlcnIgLT5cbiAgICAgICAgICAgIEp1c3QgZXJyXG5cblxuey18IElmIHRoZSByZXN1bHQgaXMgYE9rYCByZXR1cm4gdGhlIHZhbHVlLCBidXQgaWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCB0aGVuXG5yZXR1cm4gYSBnaXZlbiBkZWZhdWx0IHZhbHVlLiBUaGUgZm9sbG93aW5nIGV4YW1wbGVzIHRyeSB0byBwYXJzZSBpbnRlZ2Vycy5cblxuICAgIFJlc3VsdC53aXRoRGVmYXVsdCAwIChPayAxMjMpID09IDEyM1xuXG4gICAgUmVzdWx0LndpdGhEZWZhdWx0IDAgKEVyciBcIm5vXCIpID09IDBcblxuLX1cbndpdGhEZWZhdWx0IDogYSAtPiBSZXN1bHQgeCBhIC0+IGFcbndpdGhEZWZhdWx0IGRlZiByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIGFcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgZGVmXG5cblxuey18IFNhbWUgYXMgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIGZ1bmN0aW9uLlxuVGhpcyBsZXRzIHlvdSBhdm9pZCBjb21wdXRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXNuJ3QgbmVjZXNzYXJ5LlxuXG4tfVxud2l0aERlZmF1bHRMYXp5IDogKHt9IC0+IGEpIC0+IFJlc3VsdCB4IGEgLT4gYVxud2l0aERlZmF1bHRMYXp5IHByb3ZpZGVyIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBwcm92aWRlciB7fVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIHRvIGEgcmVzdWx0LiBJZiB0aGUgcmVzdWx0IGlzIGBPa2AsIGl0IHdpbGwgYmUgY29udmVydGVkLlxuSWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCwgdGhlIHNhbWUgZXJyb3IgdmFsdWUgd2lsbCBwcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcCBzcXJ0IChPayA0LjApID09IE9rIDIuMFxuXG4gICAgbWFwIHNxcnQgKEVyciBcImJhZCBpbnB1dFwiKSA9PSBFcnIgXCJiYWQgaW5wdXRcIlxuXG4tfVxubWFwIDogKGEgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggdmFsdWVcbm1hcCBmdW5jIHJhID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIE9rIChmdW5jIGEpXG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciBlXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gaWYgYm90aCByZXN1bHRzIGFyZSBgT2tgLiBJZiBub3QsIHRoZSBmaXJzdCBgRXJyYCB3aWxsXG5wcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcDIgbWF4IChPayA0MikgKE9rIDEzKSA9PSBPayA0MlxuXG4gICAgbWFwMiBtYXggKEVyciBcInhcIikgKE9rIDEzKSA9PSBFcnIgXCJ4XCJcblxuICAgIG1hcDIgbWF4IChPayA0MikgKEVyciBcInlcIikgPT0gRXJyIFwieVwiXG5cbiAgICBtYXAyIG1heCAoRXJyIFwieFwiKSAoRXJyIFwieVwiKSA9PSBFcnIgXCJ4XCJcblxuVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIHR3byBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbCwgYW5kIHlvdSB3YW50XG50byBwdXQgdGhlbSB0b2dldGhlciBxdWlja2x5LlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMiBmdW5jIHJhIHJiID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIpXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggYyAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMyBmdW5jIHJhIHJiIHJjID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIgYylcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwNCBmdW5jIHJhIHJiIHJjIHJkID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHJkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQpXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCBlIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXA1IGZ1bmMgcmEgcmIgcmMgcmQgcmUgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcmMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2sgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcmQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiByZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayBlIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQgZSlcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSBzZXF1ZW5jZSBvZiBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbC4gSXQgaXMgaGVscGZ1bFxudG8gc2VlIGl0cyBkZWZpbml0aW9uOlxuXG4gICAgYW5kVGhlbiA6IChhIC0+IFJlc3VsdCBlIGIpIC0+IFJlc3VsdCBlIGEgLT4gUmVzdWx0IGUgYlxuICAgIGFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICAgICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgICAgIE9rIHZhbHVlIC0+XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICAgICAgRXJyIG1zZyAtPlxuICAgICAgICAgICAgICAgIEVyciBtc2dcblxuVGhpcyBtZWFucyB3ZSBvbmx5IGNvbnRpbnVlIHdpdGggdGhlIGNhbGxiYWNrIGlmIHRoaW5ncyBhcmUgZ29pbmcgd2VsbC4gRm9yXG5leGFtcGxlLCBzYXkgeW91IG5lZWQgdG8gdXNlIChgdG9JbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRgKSB0byBwYXJzZVxuYSBtb250aCBhbmQgbWFrZSBzdXJlIGl0IGlzIGJldHdlZW4gMSBhbmQgMTI6XG5cblxuICAgIHRvVmFsaWRNb250aCA6IEludCAtPiBSZXN1bHQgU3RyaW5nIEludFxuICAgIHRvVmFsaWRNb250aCBtb250aCA9XG4gICAgICAgIGlmIG1vbnRoID49IDEgJiYgbW9udGggPD0gMTIgdGhlblxuICAgICAgICAgICAgT2sgbW9udGhcblxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuICAgIHRvTW9udGggOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRcbiAgICB0b01vbnRoIHJhd1N0cmluZyA9XG4gICAgICAgIHRvSW50IHJhd1N0cmluZ1xuICAgICAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuICAgIC0tIHRvTW9udGggXCI0XCIgPT0gT2sgNFxuICAgIC0tIHRvTW9udGggXCI5XCIgPT0gT2sgOVxuICAgIC0tIHRvTW9udGggXCJhXCIgPT0gRXJyIFwiY2Fubm90IHBhcnNlIHRvIGFuIEludFwiXG4gICAgLS0gdG9Nb250aCBcIjBcIiA9PSBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuVGhpcyBhbGxvd3MgdXMgdG8gY29tZSBvdXQgb2YgYSBjaGFpbiBvZiBvcGVyYXRpb25zIHdpdGggcXVpdGUgYSBzcGVjaWZpYyBlcnJvclxubWVzc2FnZS4gSXQgaXMgb2Z0ZW4gYmVzdCB0byBjcmVhdGUgYSBjdXN0b20gdHlwZSB0aGF0IGV4cGxpY2l0bHkgcmVwcmVzZW50c1xudGhlIGV4YWN0IHdheXMgeW91ciBjb21wdXRhdGlvbiBtYXkgZmFpbC4gVGhpcyB3YXkgaXQgaXMgZWFzeSB0byBoYW5kbGUgaW4geW91clxuY29kZS5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBSZXN1bHQgeCBiKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGJcbmFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICBFcnIgbXNnIC0+XG4gICAgICAgICAgICBFcnIgbXNnXG5cblxuey18IFRoaXMgaXMgc2ltaWxhciB0byBbYW5kVGhlbl0oI2FuZFRoZW4pIGJ1dCB0aGUgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW5cbnRoZSBgUmVzdWx0YCBpcyBhbiBgRXJyYCB2YWx1ZS4gVGhpcyBnaXZlcyB5b3UgdGhlIG9wdGlvbiBvZiBkZWFsaW5nIHdpdGggZXJyb3JzXG5pbiBhIGNoYWluLlxuXG4gICAgdG9JbnQgXCJhXCJcbiAgICAgICAgfD4gb25FcnJvciAoXFxfbXNnIC0+IE9rIDEpIC0tIGRlZmF1bHRpbmcgdG8gZmlyc3QgbW9udGggb2YgdGhlIHllYXJcbiAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuLX1cbm9uRXJyb3IgOiAoYSAtPiBSZXN1bHQgYiB4KSAtPiBSZXN1bHQgYSB4IC0+IFJlc3VsdCBiIHhcbm9uRXJyb3IgY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgT2sgdmFsdWVcblxuICAgICAgICBFcnIgZXJyIC0+XG4gICAgICAgICAgICBjYWxsYmFjayBlcnJcblxuXG57LXwgVHJhbnNmb3JtIGFuIGBFcnJgIHZhbHVlLiBGb3IgZXhhbXBsZSwgc2F5IHRoZSBlcnJvcnMgd2UgZ2V0IGhhdmUgdG9vIG11Y2hcbmluZm9ybWF0aW9uOlxuXG4gICAgcGFyc2VJbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFBhcnNlRXJyb3IgSW50XG5cbiAgICB0eXBlIGFsaWFzIFBhcnNlRXJyb3IgPVxuICAgICAgICB7IG1lc3NhZ2UgOiBTdHJpbmdcbiAgICAgICAgLCBjb2RlIDogSW50XG4gICAgICAgICwgcG9zaXRpb24gOiAoSW50LEludClcbiAgICAgICAgfVxuXG4gICAgbWFwRXJyb3IgLm1lc3NhZ2UgKHBhcnNlSW50IFwiMTIzXCIpID09IE9rIDEyM1xuICAgIG1hcEVycm9yIC5tZXNzYWdlIChwYXJzZUludCBcImFiY1wiKSA9PSBFcnIgXCJjaGFyICdhJyBpcyBub3QgYSBudW1iZXJcIlxuXG4tfVxubWFwRXJyb3IgOiAoeCAtPiB5KSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB5IGFcbm1hcEVycm9yIGYgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBPayB2XG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciAoZiBlKVxuXG5cbnstfCBDb252ZXJ0IHRvIGEgc2ltcGxlciBgTWF5YmVgIGlmIHRoZSBhY3R1YWwgZXJyb3IgbWVzc2FnZSBpcyBub3QgbmVlZGVkIG9yXG55b3UgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseSB1c2VzIG1heWJlcy5cblxuICAgIHBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBQYXJzZUVycm9yIEludFxuXG4gICAgbWF5YmVQYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBtYXliZVBhcnNlSW50IHN0cmluZyA9XG4gICAgICAgIHRvTWF5YmUgKHBhcnNlSW50IHN0cmluZylcblxuLX1cbnRvTWF5YmUgOiBSZXN1bHQgeCBhIC0+IE1heWJlIGFcbnRvTWF5YmUgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBKdXN0IHZcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBDb252ZXJ0IGZyb20gYSBzaW1wbGUgYE1heWJlYCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseVxudXNlcyBgUmVzdWx0c2AuXG5cbiAgICBwYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcblxuICAgIHJlc3VsdFBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBTdHJpbmcgSW50XG4gICAgcmVzdWx0UGFyc2VJbnQgc3RyaW5nID1cbiAgICAgICAgZnJvbU1heWJlIChcImVycm9yIHBhcnNpbmcgc3RyaW5nOiBcIiArKyB0b1N0cmluZyBzdHJpbmcpIChwYXJzZUludCBzdHJpbmcpXG5cbi19XG5mcm9tTWF5YmUgOiB4IC0+IE1heWJlIGEgLT4gUmVzdWx0IHggYVxuZnJvbU1heWJlIGVyciBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHYgLT5cbiAgICAgICAgICAgIE9rIHZcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBFcnIgZXJyXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcbi0tXG4tLSBVc2UgYHdoZW5gIGV4cHJlc3Npb25zIGZvciB0aGlzIGluIEdyZW4gY29kZSFcblxuXG5pc09rIDogUmVzdWx0IHggYSAtPiBCb29sXG5pc09rIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuIiwKICAgICAgICAibW9kdWxlIFZpcnR1YWxEb20gZXhwb3NpbmdcbiAgKCBOb2RlXG4gICwgdGV4dCwgbm9kZSwgbm9kZU5TXG4gICwgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcbiAgLCBvbiwgSGFuZGxlciguLilcbiAgLCBtYXAsIG1hcEF0dHJpYnV0ZVxuICAsIGtleWVkTm9kZSwga2V5ZWROb2RlTlNcbiAgLCBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuICApXG5cbnstfCBBUEkgdG8gdGhlIGNvcmUgZGlmZmluZyBhbGdvcml0aG0uIENhbiBzZXJ2ZSBhcyBhIGZvdW5kYXRpb24gZm9yIGxpYnJhcmllc1xudGhhdCBleHBvc2UgbW9yZSBoZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIG9yIFNWRy5cblxuIyMgQ3JlYXRlXG5AZG9jcyBOb2RlLCB0ZXh0LCBub2RlLCBub2RlTlNcblxuIyMgQXR0cmlidXRlc1xuQGRvY3MgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcblxuIyMgRXZlbnRzXG5AZG9jcyBvbiwgSGFuZGxlclxuXG4jIyBSb3V0aW5nIE1lc3NhZ2VzXG5AZG9jcyBtYXAsIG1hcEF0dHJpYnV0ZVxuXG4jIyBLZXllZCBOb2Rlc1xuQGRvY3Mga2V5ZWROb2RlLCBrZXllZE5vZGVOU1xuXG4jIyBMYXp5IE5vZGVzXG5AZG9jcyBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVmlydHVhbERvbVxuaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuXG57LXwgQW4gaW1tdXRhYmxlIGNodW5rIG9mIGRhdGEgcmVwcmVzZW50aW5nIGEgRE9NIG5vZGUuIFRoaXMgY2FuIGJlIEhUTUwgb3IgU1ZHLlxuLX1cbnR5cGUgTm9kZSBtc2cgPSBOb2RlXG5cblxuey18IENyZWF0ZSBhIERPTSBub2RlIHdpdGggYSB0YWcgbmFtZSwgYSBsaXN0IG9mIEhUTUwgcHJvcGVydGllcyB0aGF0IGNhblxuaW5jbHVkZSBzdHlsZXMgYW5kIGV2ZW50IGxpc3RlbmVycywgYSBsaXN0IG9mIENTUyBwcm9wZXJ0aWVzIGxpa2UgYGNvbG9yYCwgYW5kXG5hIGxpc3Qgb2YgY2hpbGQgbm9kZXMuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgSnNvblxuXG4gICAgaGVsbG8gOiBOb2RlIG1zZ1xuICAgIGhlbGxvID1cbiAgICAgIG5vZGUgXCJkaXZcIiBbXSBbIHRleHQgXCJIZWxsbyFcIiBdXG5cbiAgICBncmVldGluZyA6IE5vZGUgbXNnXG4gICAgZ3JlZXRpbmcgPVxuICAgICAgbm9kZSBcImRpdlwiXG4gICAgICAgIFsgcHJvcGVydHkgXCJpZFwiIChKc29uLnN0cmluZyBcImdyZWV0aW5nXCIpIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCIgXVxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChOb2RlIG1zZykgLT4gTm9kZSBtc2dcbm5vZGUgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG57LXwgQ3JlYXRlIGEgbmFtZXNwYWNlZCBET00gbm9kZS4gRm9yIGV4YW1wbGUsIGFuIFNWRyBgPHBhdGg+YCBub2RlIGNvdWxkIGJlXG5kZWZpbmVkIGxpa2UgdGhpczpcblxuICAgIHBhdGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKE5vZGUgbXNnKSAtPiBOb2RlIG1zZ1xuICAgIHBhdGggYXR0cnVidXRlcyBjaGlsZHJlbiA9XG4gICAgICBub2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwicGF0aFwiIGF0dHJpYnV0ZXMgY2hpbGRyZW5cbi19XG5ub2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoTm9kZSBtc2cpIC0+IE5vZGUgbXNnXG5ub2RlTlMgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlTlMgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cbnstfCBKdXN0IHB1dCBwbGFpbiB0ZXh0IGluIHRoZSBET00uIEl0IHdpbGwgZXNjYXBlIHRoZSBzdHJpbmcgc28gdGhhdCBpdCBhcHBlYXJzXG5leGFjdGx5IGFzIHlvdSBzcGVjaWZ5LlxuXG4gICAgdGV4dCBcIkhlbGxvIFdvcmxkIVwiXG4tfVxudGV4dCA6IFN0cmluZyAtPiBOb2RlIG1zZ1xudGV4dCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20udGV4dFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIGlzIHVzZWZ1bCB3aGVuIG5lc3RpbmcgY29tcG9uZW50cyB3aXRoIFt0aGUgRWxtXG5BcmNoaXRlY3R1cmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLWFyY2hpdGVjdHVyZS10dXRvcmlhbC8pLiBJdCBsZXRzXG55b3UgdHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIHN1YnRyZWUuXG5cblNheSB5b3UgaGF2ZSBhIG5vZGUgbmFtZWQgYGJ1dHRvbmAgdGhhdCBwcm9kdWNlcyBgKClgIHZhbHVlcyB3aGVuIGl0IGlzXG5jbGlja2VkLiBUbyBnZXQgeW91ciBtb2RlbCB1cGRhdGluZyBwcm9wZXJseSwgeW91IHdpbGwgcHJvYmFibHkgd2FudCB0byB0YWdcbnRoaXMgYCgpYCB2YWx1ZSBsaWtlIHRoaXM6XG5cbiAgICB0eXBlIE1zZyA9IENsaWNrIHwgLi4uXG5cbiAgICB1cGRhdGUgbXNnIG1vZGVsID1cbiAgICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIENsaWNrIC0+XG4gICAgICAgICAgLi4uXG5cbiAgICB2aWV3IG1vZGVsID1cbiAgICAgIG1hcCAoXFxfIC0+IENsaWNrKSBidXR0b25cblxuU28gbm93IGFsbCB0aGUgZXZlbnRzIHByb2R1Y2VkIGJ5IGBidXR0b25gIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gYmUgb2YgdHlwZVxuYE1zZ2Agc28gdGhleSBjYW4gYmUgaGFuZGxlZCBieSB5b3VyIHVwZGF0ZSBmdW5jdGlvbiFcbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IE5vZGUgYSAtPiBOb2RlIG1zZ1xubWFwID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5tYXBcblxuXG5cbi0tIEFUVFJJQlVURVNcblxuXG57LXwgV2hlbiB1c2luZyBIVE1MIGFuZCBKUywgdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgcGFydHMgb2YgYSBET00gbm9kZS5cblxuICAxLiBBdHRyaWJ1dGVzICZtZGFzaDsgWW91IGNhbiBzZXQgdGhpbmdzIGluIEhUTUwgaXRzZWxmLiBTbyB0aGUgYGNsYXNzYFxuICAgICBpbiBgPGRpdiBjbGFzcz1cImdyZWV0aW5nXCI+PC9kaXY+YCBpcyBjYWxsZWQgYW4gKmF0dHJpYnV0ZSouXG5cbiAgMi4gUHJvcGVydGllcyAmbWRhc2g7IFlvdSBjYW4gYWxzbyBzZXQgdGhpbmdzIGluIEpTLiBTbyB0aGUgYGNsYXNzTmFtZWBcbiAgICAgaW4gYGRpdi5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpcyBjYWxsZWQgYSAqcHJvcGVydHkqLlxuXG5TbyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgY29ycmVzcG9uZHMgdG8gdGhlIGBjbGFzc05hbWVgIHByb3BlcnR5LiBBdCBmaXJzdFxuZ2xhbmNlLCBwZXJoYXBzIHRoaXMgZGlzdGluY3Rpb24gaXMgZGVmZW5zaWJsZSwgYnV0IGl0IGdldHMgbXVjaCBjcmF6aWVyLlxuKlRoZXJlIGlzIG5vdCBhbHdheXMgYSBvbmUtdG8tb25lIG1hcHBpbmcgYmV0d2VlbiBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0aWVzISpcblllcywgdGhhdCBpcyBhIHRydWUgZmFjdC4gU29tZXRpbWVzIGFuIGF0dHJpYnV0ZSBleGlzdHMsIGJ1dCB0aGVyZSBpcyBub1xuY29ycmVzcG9uZGluZyBwcm9wZXJ0eS4gU29tZXRpbWVzIGNoYW5naW5nIGFuIGF0dHJpYnV0ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlXG51bmRlcmx5aW5nIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgYXMgb2YgdGhpcyB3cml0aW5nLCB0aGUgYHdlYmtpdC1wbGF5c2lubGluZWBcbmF0dHJpYnV0ZSBjYW4gYmUgdXNlZCBpbiBIVE1MLCBidXQgdGhlcmUgaXMgbm8gY29ycmVzcG9uZGluZyBwcm9wZXJ0eSFcbi19XG50eXBlIEF0dHJpYnV0ZSBtc2cgPSBBdHRyaWJ1dGVcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIG5vZGUgXCJkaXZcIlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZENvbG9yXCIgXCJyZWRcIlxuICAgICAgICAsIHN0eWxlIFwiaGVpZ2h0XCIgXCI5MHB4XCJcbiAgICAgICAgLCBzdHlsZSBcIndpZHRoXCIgXCIxMDAlXCJcbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgXCJIZWxsbyFcIlxuICAgICAgICBdXG5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IENyZWF0ZSBhIHByb3BlcnR5LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgYnV0dG9uTGFiZWwgOiBOb2RlIG1zZ1xuICAgIGJ1dHRvbkxhYmVsID1cbiAgICAgIG5vZGUgXCJsYWJlbFwiIFsgcHJvcGVydHkgXCJodG1sRm9yXCIgKEVuY29kZS5zdHJpbmcgXCJidXR0b25cIikgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKnByb3BlcnR5KiBuYW1lLCBzbyB3ZSB1c2UgYGh0bWxGb3JgIGFzIGl0XG53b3VsZCBiZSBpbiBKYXZhU2NyaXB0LCBub3QgYGZvcmAgYXMgaXQgd291bGQgYXBwZWFyIGluIEhUTUwuXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnByb3BlcnR5XG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9Jbm5lckh0bWxPckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgQ3JlYXRlIGFuIGF0dHJpYnV0ZS4gVGhpcyB1c2VzIEphdmFTY3JpcHTigJlzIGBzZXRBdHRyaWJ1dGVgIGZ1bmN0aW9uXG5iZWhpbmQgdGhlIHNjZW5lcy5cblxuICAgIGJ1dHRvbkxhYmVsIDogTm9kZSBtc2dcbiAgICBidXR0b25MYWJlbCA9XG4gICAgICBub2RlIFwibGFiZWxcIiBbIGF0dHJpYnV0ZSBcImZvclwiIFwiYnV0dG9uXCIgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKmF0dHJpYnV0ZSogbmFtZSwgc28gd2UgdXNlIGBmb3JgIGFzIGl0IHdvdWxkXG5iZSBpbiBIVE1MLCBub3QgYGh0bWxGb3JgIGFzIGl0IHdvdWxkIGFwcGVhciBpbiBKUy5cbi19XG5hdHRyaWJ1dGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmF0dHJpYnV0ZSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgV291bGQgeW91IGJlbGlldmUgdGhhdCB0aGVyZSBpcyBhbm90aGVyIHdheSB0byBkbyB0aGlzPyEgVGhpcyB1c2VzXG5KYXZhU2NyaXB0J3MgYHNldEF0dHJpYnV0ZU5TYCBmdW5jdGlvbiBiZWhpbmQgdGhlIHNjZW5lcy4gSXQgaXMgZG9pbmcgcHJldHR5XG5tdWNoIHRoZSBzYW1lIHRoaW5nIGFzIGBhdHRyaWJ1dGVgIGJ1dCB5b3UgYXJlIGFibGUgdG8gaGF2ZSBuYW1lc3BhY2VkXG5hdHRyaWJ1dGVzLiBBcyBhbiBleGFtcGxlLCB0aGUgYGVsbS9zdmdgIHBhY2thZ2UgZGVmaW5lcyBhbiBhdHRyaWJ1dGVcbmxpa2UgdGhpczpcblxuICAgIHhsaW5rSHJlZiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgeGxpbmtIcmVmIHZhbHVlID1cbiAgICAgIGF0dHJpYnV0ZU5TIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIFwieGxpbms6aHJlZlwiIHZhbHVlXG4tfVxuYXR0cmlidXRlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGVOUyBuYW1lc3BhY2Uga2V5IHZhbHVlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5hdHRyaWJ1dGVOU1xuICAgIG5hbWVzcGFjZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcEF0dHJpYnV0ZSA6IChhIC0+IGIpIC0+IEF0dHJpYnV0ZSBhIC0+IEF0dHJpYnV0ZSBiXG5tYXBBdHRyaWJ1dGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm1hcEF0dHJpYnV0ZVxuXG5cblxuLS0gRVZFTlRTXG5cblxuey18IENyZWF0ZSBjdXN0b20gZXZlbnQgaGFuZGxlcnMuXG5cbllvdSBjYW4gZGVmaW5lIGBvbkNsaWNrYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBvbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNsaWNrIG1zZyA9XG4gICAgICBvbiBcImNsaWNrXCIgKE5vcm1hbCAoRGVjb2RlLnN1Y2NlZWQgbXNnKSlcblxuKipOb3RlOioqIFRoZXNlIGV2ZW50IGhhbmRsZXJzIHRyaWdnZXIgaW4gdGhlIGJ1YmJsZSBwaGFzZS4gWW91IGNhbiBsZWFybiBtb3JlXG5hYm91dCB3aGF0IHRoYXQgbWVhbnMgW2hlcmVdW10uIFRoZXJlIGlzIG5vdCBzdXBwb3J0IHdpdGhpbiBHcmVuIGZvciBkb2luZ1xudHJpY2tzIHdpdGggdGhlIGNhcHR1cmUgcGhhc2UuIFdlIHJlY29tbWVuZCBkb2luZyB0aGF0IGluIEpTIHRocm91Z2ggcG9ydHMuXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9ibG9iL21hc3Rlci9oaW50cy9jYXB0dXJlLXZzLWJ1YmJsZS5tZFxuLX1cbm9uIDogU3RyaW5nIC0+IEhhbmRsZXIgbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5vblxuXG5cbnstfCBXaGVuIHVzaW5nIGBvbmAgeW91IGNhbiBjdXN0b21pemUgdGhlIGV2ZW50IGJlaGF2aW9yXG5hIGJpdC4gVGhlcmUgYXJlIHR3byB3YXlzIHRvIGRvIHRoaXM6XG5cbiAgLSBbYHN0b3BQcm9wYWdhdGlvbmBdW3NwXSBtZWFucyB0aGUgZXZlbnQgc3RvcHMgdHJhdmVsaW5nIHRocm91Z2ggdGhlIERPTS5cbiAgU28gaWYgcHJvcGFnYXRpb24gb2YgYSBjbGljayBpcyBzdG9wcGVkLCBpdCB3aWxsIG5vdCB0cmlnZ2VyIGFueSBvdGhlciBldmVudFxuICBsaXN0ZW5lcnMuXG5cbiAgLSBbYHByZXZlbnREZWZhdWx0YF1bcGRdIG1lYW5zIGFueSBidWlsdC1pbiBicm93c2VyIGJlaGF2aW9yIHJlbGF0ZWQgdG8gdGhlXG4gIGV2ZW50IGlzIHByZXZlbnRlZC4gVGhpcyBjYW4gYmUgaGFuZHkgd2l0aCBrZXkgcHJlc3NlcyBvciB0b3VjaCBnZXN0dXJlcy5cblxuKipOb3RlIDE6KiogQSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIGNyZWF0ZWQgaWYgeW91IHVzZSBgTm9ybWFsYFxub3IgYE1heVN0b3BQcm9wYWdhdGlvbmAuIEluIGJvdGggY2FzZXMgYHByZXZlbnREZWZhdWx0YCBjYW5ub3QgYmUgdXNlZCwgc29cbndlIGNhbiBlbmFibGUgb3B0aW1pemF0aW9ucyBmb3IgdG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lXG5icm93c2Vycy5cblxuKipOb3RlIDI6KiogU29tZSBhY3Rpb25zLCBsaWtlIHVwbG9hZGluZyBhbmQgZG93bmxvYWRpbmcgZmlsZXMsIGFyZSBvbmx5XG5hbGxvd2VkIHdoZW4gdGhlIEphdmFTY3JpcHQgZXZlbnQgbG9vcCBpcyBydW5uaW5nIGJlY2F1c2Ugb2YgdXNlciBpbnB1dC4gVGhpc1xuaXMgZm9yIHNlY3VyaXR5ISBTbyB3aGVuIGFuIGV2ZW50IG9jY3Vycywgd2UgY2FsbCBgdXBkYXRlYCBhbmQgc2VuZCBhbnkgYHBvcnRgXG5tZXNzYWdlcyBpbW1lZGlhdGVseSwgYWxsIHdpdGhpbiB0aGUgc2FtZSB0aWNrIG9mIHRoZSBldmVudCBsb29wLiBUaGlzIG1ha2VzXG5pdCBwb3NzaWJsZSB0byBoYW5kbGUgdXNlci1pbnN0aWdhdGVkIGV2ZW50cyBpbiBwb3J0cy5cblxuKipOb3RlIDM6KiogTm9ybWFsbHkgdGhlIGB2aWV3YCBpcyBzaG93biBpbiB0aGUgbmV4dCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuY2FsbC4gVGhpcyBhbGxvd3MgdXMgdG8gc2F2ZSBzb21lIHdvcmsgaWYgbWVzc2FnZXMgYXJlIGNvbWluZyBpbiB2ZXJ5IHF1aWNrbHkuXG5CdXQgaWYgYHN0b3BQcm9wYWdhdGlvbmAgaXMgdXNlZCwgd2UgdXBkYXRlIHRoZSBET00gaW1tZWRpYXRlbHksIHdpdGhpbiB0aGVcbnNhbWUgdGljayBvZiB0aGUgZXZlbnQgbG9vcC4gVGhpcyBpcyB1c2VmdWwgZm9yIERPTSBub2RlcyB0aGF0IGhvbGQgdGhlaXIgb3duXG5zdGF0ZSwgbGlrZSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+YC4gSWYgc29tZW9uZSB0eXBlcyB2ZXJ5IGZhc3QsIHRoZSBzdGF0ZSBpbiB0aGVcbkRPTSBjYW4gZGl2ZXJnZSBmcm9tIHRoZSBzdGF0ZSBpbiB5b3VyIGBNb2RlbGAgd2hpbGUgd2FpdGluZyBvbiB0aGUgbmV4dFxuYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgY2FsbC4gU28gdXBkYXRpbmcgdGhlIERPTSBzeW5jaHJvbm91c2x5IG1ha2VzIHRoaXNcbmRpdmVyZ2VuY2UgaW1wb3NzaWJsZS5cblxuW3NwXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuW3BkXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxudHlwZSBIYW5kbGVyIG1zZ1xuICA9IE5vcm1hbCAoSnNvbi5EZWNvZGVyIG1zZylcbiAgfCBNYXlTdG9wUHJvcGFnYXRpb24gKEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfSlcbiAgfCBNYXlQcmV2ZW50RGVmYXVsdCAoSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgcHJldmVudERlZmF1bHQgOiBCb29sIH0pXG4gIHwgQ3VzdG9tIChKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSlcblxuXG5cbi0tIExBWlkgTk9ERVNcblxuXG57LXwgQSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdGhhdCBkZWxheXMgdGhlIGJ1aWxkaW5nIG9mIHZpcnR1YWwgRE9NIG5vZGVzLlxuXG5DYWxsaW5nIGAodmlldyBtb2RlbClgIHdpbGwgZGVmaW5pdGVseSBidWlsZCBzb21lIHZpcnR1YWwgRE9NLCBwZXJoYXBzIGEgbG90IG9mXG5pdC4gQ2FsbGluZyBgKGxhenkgdmlldyBtb2RlbClgIGRlbGF5cyB0aGUgY2FsbCB1bnRpbCBsYXRlci4gRHVyaW5nIGRpZmZpbmcsIHdlXG5jYW4gY2hlY2sgdG8gc2VlIGlmIGBtb2RlbGAgaXMgcmVmZXJlbnRpYWxseSBlcXVhbCB0byB0aGUgcHJldmlvdXMgdmFsdWUgdXNlZCxcbmFuZCBpZiBzbywgd2UganVzdCBzdG9wLiBObyBuZWVkIHRvIGJ1aWxkIHVwIHRoZSB0cmVlIHN0cnVjdHVyZSBhbmQgZGlmZiBpdCxcbndlIGtub3cgaWYgdGhlIGlucHV0IHRvIGB2aWV3YCBpcyB0aGUgc2FtZSwgdGhlIG91dHB1dCBtdXN0IGJlIHRoZSBzYW1lIVxuLX1cbmxhenkgOiAoYSAtPiBOb2RlIG1zZykgLT4gYSAtPiBOb2RlIG1zZ1xubGF6eSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eVxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHR3byBhcmd1bWVudHMuXG4tfVxubGF6eTIgOiAoYSAtPiBiIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gTm9kZSBtc2dcbmxhenkyID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5MlxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHRocmVlIGFyZ3VtZW50cy5cbi19XG5sYXp5MyA6IChhIC0+IGIgLT4gYyAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gTm9kZSBtc2dcbmxhenkzID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5M1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZvdXIgYXJndW1lbnRzLlxuLX1cbmxhenk0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2dcbmxhenk0ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5NFxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZpdmUgYXJndW1lbnRzLlxuLX1cbmxhenk1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IE5vZGUgbXNnXG5sYXp5NSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTVcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBzaXggYXJndW1lbnRzLlxuLX1cbmxhenk2IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBOb2RlIG1zZ1xubGF6eTYgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk2XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gc2V2ZW4gYXJndW1lbnRzLlxuLX1cbmxhenk3IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2dcbmxhenk3ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5N1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGVpZ2h0IGFyZ3VtZW50cy5cbi19XG5sYXp5OCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IGggLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiBOb2RlIG1zZ1xubGF6eTggPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk4XG5cblxuXG4tLSBLRVlFRCBOT0RFU1xuXG5cbnstfCBXb3JrcyBqdXN0IGxpa2UgYG5vZGVgLCBidXQgeW91IGFkZCBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGVhY2ggY2hpbGRcbm5vZGUuIFlvdSB3YW50IHRoaXMgd2hlbiB5b3UgaGF2ZSBhIGxpc3Qgb2Ygbm9kZXMgdGhhdCBpcyBjaGFuZ2luZzogYWRkaW5nXG5ub2RlcywgcmVtb3Zpbmcgbm9kZXMsIGV0Yy4gSW4gdGhlc2UgY2FzZXMsIHRoZSB1bmlxdWUgaWRlbnRpZmllcnMgaGVscCBtYWtlXG50aGUgRE9NIG1vZGlmaWNhdGlvbnMgbW9yZSBlZmZpY2llbnQuXG4tfVxua2V5ZWROb2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuey18IENyZWF0ZSBhIGtleWVkIGFuZCBuYW1lc3BhY2VkIERPTSBub2RlLiBGb3IgZXhhbXBsZSwgYW4gU1ZHIGA8Zz5gIG5vZGVcbmNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzOlxuXG4gICAgZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoIFN0cmluZywgTm9kZSBtc2cgKSAtPiBOb2RlIG1zZ1xuICAgIGcgPVxuICAgICAga2V5ZWROb2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwiZ1wiXG4tfVxua2V5ZWROb2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZU5TIG5hbWVzcGFjZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZU5TIG5hbWVzcGFjZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcblxuXG50b0hhbmRsZXJJbnQgOiBIYW5kbGVyIG1zZyAtPiBJbnRcbnRvSGFuZGxlckludCBoYW5kbGVyID1cbiAgd2hlbiBoYW5kbGVyIGlzXG4gICAgTm9ybWFsIF8gLT4gMFxuICAgIE1heVN0b3BQcm9wYWdhdGlvbiBfIC0+IDFcbiAgICBNYXlQcmV2ZW50RGVmYXVsdCBfIC0+IDJcbiAgICBDdXN0b20gXyAtPiAzXG4iLAogICAgICAgICJtb2R1bGUgVXJsIGV4cG9zaW5nXG4gICggVXJsXG4gICwgUHJvdG9jb2woLi4pXG4gICwgdG9TdHJpbmdcbiAgLCBmcm9tU3RyaW5nXG4gICwgcGVyY2VudEVuY29kZVxuICAsIHBlcmNlbnREZWNvZGVcbiAgKVxuXG5cbnstfFxuXG4jIFVSTHNcbkBkb2NzIFVybCwgUHJvdG9jb2wsIHRvU3RyaW5nLCBmcm9tU3RyaW5nXG5cbiMgUGVyY2VudC1FbmNvZGluZ1xuQGRvY3MgcGVyY2VudEVuY29kZSwgcGVyY2VudERlY29kZVxuXG4tfVxuXG5cbmltcG9ydCBHcmVuLktlcm5lbC5VcmxcblxuXG5cbi0tIFVSTFxuXG5cbnstfCBJbiBbdGhlIFVSSSBzcGVjXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiksIFRpbSBCZXJuZXJzLUxlZVxuc2F5cyBhIFVSTCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYFxuICBodHRwczovL2V4YW1wbGUuY29tOjgwNDIvb3Zlci90aGVyZT9uYW1lPWZlcnJldCNub3NlXG4gIFxcX19fLyAgIFxcX19fX19fX19fX19fX18vXFxfX19fX19fX18vIFxcX19fX19fX19fLyBcXF9fL1xuICAgIHwgICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAgc2NoZW1lICAgICBhdXRob3JpdHkgICAgICAgcGF0aCAgICAgICAgcXVlcnkgICBmcmFnbWVudFxuYGBgXG5cbldoZW4geW91IGFyZSBjcmVhdGluZyBhIHNpbmdsZS1wYWdlIGFwcCB3aXRoIFtgQnJvd3Nlci5hcHBsaWNhdGlvbmBdW2FwcF0sIHlvdVxudXNlIHRoZSBbYFVybC5QYXJzZXJgXShVcmwtUGFyc2VyKSBtb2R1bGUgdG8gdHVybiBhIGBVcmxgIGludG8gZXZlbiBuaWNlciBkYXRhLlxuXG5JZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gVVJMcywgY2hlY2sgb3V0IHRoZSBbYFVybC5CdWlsZGVyYF0oVXJsLUJ1aWxkZXIpXG5tb2R1bGUgYXMgd2VsbCFcblxuW2FwcF06IC9wYWNrYWdlcy9lbG0vYnJvd3Nlci9sYXRlc3QvQnJvd3NlciNhcHBsaWNhdGlvblxuXG4qKk5vdGU6KiogVGhpcyBpcyBhIHN1YnNldCBvZiBhbGwgdGhlIGZ1bGwgcG9zc2liaWxpdGllcyBsaXN0ZWQgaW4gdGhlIFVSSVxuc3BlYy4gU3BlY2lmaWNhbGx5LCBpdCBkb2VzIG5vdCBhY2NlcHQgdGhlIGB1c2VyaW5mb2Agc2VnbWVudCB5b3Ugc2VlIGluIGVtYWlsXG5hZGRyZXNzZXMgbGlrZSBgdG9tQGV4YW1wbGUuY29tYC5cbi19XG50eXBlIGFsaWFzIFVybCA9XG4gIHsgcHJvdG9jb2wgOiBQcm90b2NvbFxuICAsIGhvc3QgOiBTdHJpbmdcbiAgLCBwb3J0XyA6IE1heWJlIEludFxuICAsIHBhdGggOiBTdHJpbmdcbiAgLCBxdWVyeSA6IE1heWJlIFN0cmluZ1xuICAsIGZyYWdtZW50IDogTWF5YmUgU3RyaW5nXG4gIH1cblxuXG57LXwgSXMgdGhlIFVSTCBzZXJ2ZWQgb3ZlciBhIHNlY3VyZSBjb25uZWN0aW9uIG9yIG5vdD9cbi19XG50eXBlIFByb3RvY29sID0gSHR0cCB8IEh0dHBzXG5cblxuey18IEF0dGVtcHQgdG8gYnJlYWsgYSBVUkwgdXAgaW50byBbYFVybGBdKCNVcmwpLiBUaGlzIGlzIHVzZWZ1bCBpblxuc2luZ2xlLXBhZ2UgYXBwcyB3aGVuIHlvdSB3YW50IHRvIHBhcnNlIGNlcnRhaW4gY2h1bmtzIG9mIGEgVVJMIHRvIGZpZ3VyZSBvdXRcbndoYXQgdG8gc2hvdyBvbiBzY3JlZW4uXG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cHM6Ly9leGFtcGxlLmNvbTo0NDNcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gSnVzdCA0NDNcbiAgICAtLSAgICwgcGF0aCA9IFwiL1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IE5vdGhpbmdcbiAgICAtLSAgIH1cblxuICAgIGZyb21TdHJpbmcgXCJodHRwczovL2V4YW1wbGUuY29tL2hhdHM/cT10b3AlMjBoYXRcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvaGF0c1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gSnVzdCBcInE9dG9wJTIwaGF0XCJcbiAgICAtLSAgICwgZnJhZ21lbnQgPSBOb3RoaW5nXG4gICAgLS0gICB9XG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cDovL2V4YW1wbGUuY29tL2NvcmUvTGlzdC8jbWFwXCJcbiAgICAtLSBKdXN0XG4gICAgLS0gICB7IHByb3RvY29sID0gSHR0cFxuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvY29yZS9MaXN0L1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IEp1c3QgXCJtYXBcIlxuICAgIC0tICAgfVxuXG5UaGUgY29udmVyc2lvbiB0byBzZWdtZW50cyBjYW4gZmFpbCBpbiBzb21lIGNhc2VzIGFzIHdlbGw6XG5cbiAgICBmcm9tU3RyaW5nIFwiZXhhbXBsZS5jb206NDQzXCIgICAgICAgID09IE5vdGhpbmcgIC0tIG5vIHByb3RvY29sXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly90b21AZXhhbXBsZS5jb21cIiA9PSBOb3RoaW5nICAtLSB1c2VyaW5mbyBkaXNhbGxvd2VkXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly8jY2F0c1wiICAgICAgICAgICA9PSBOb3RoaW5nICAtLSBubyBob3N0XG5cbioqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHVzZSBbYHBlcmNlbnREZWNvZGVgXSgjcGVyY2VudERlY29kZSkgYW55dGhpbmcuXG5JdCBqdXN0IHNwbGl0cyB0aGluZ3MgdXAuIFtgVXJsLlBhcnNlcmBdKFVybC1QYXJzZXIpIGFjdHVhbGx5IF9uZWVkc18gdGhlIHJhd1xuYHF1ZXJ5YCBzdHJpbmcgdG8gcGFyc2UgaXQgcHJvcGVybHkuIE90aGVyd2lzZSBpdCBjb3VsZCBnZXQgY29uZnVzZWQgYWJvdXQgYD1gXG5hbmQgYCZgIGNoYXJhY3RlcnMhXG4tfVxuZnJvbVN0cmluZyA6IFN0cmluZyAtPiBNYXliZSBVcmxcbmZyb21TdHJpbmcgc3RyID1cbiAgaWYgU3RyaW5nLnN0YXJ0c1dpdGggXCJodHRwOi8vXCIgc3RyIHRoZW5cbiAgICBjaG9tcEFmdGVyUHJvdG9jb2wgSHR0cCAoU3RyaW5nLmRyb3BGaXJzdCA3IHN0cilcblxuICBlbHNlIGlmIFN0cmluZy5zdGFydHNXaXRoIFwiaHR0cHM6Ly9cIiBzdHIgdGhlblxuICAgIGNob21wQWZ0ZXJQcm90b2NvbCBIdHRwcyAoU3RyaW5nLmRyb3BGaXJzdCA4IHN0cilcblxuICBlbHNlXG4gICAgTm90aGluZ1xuXG5cbmNob21wQWZ0ZXJQcm90b2NvbCA6IFByb3RvY29sIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQWZ0ZXJQcm90b2NvbCBwcm90b2NvbCBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgKFN0cmluZy5pbmRpY2VzIFwiI1wiIHN0cikgaXNcbiAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBOb3RoaW5nIHN0clxuXG4gICAgICBKdXN0IGkgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCAoSnVzdCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikpIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlRnJhZ21lbnQgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBmcmFnIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBBcnJheS5nZXQgMCAoU3RyaW5nLmluZGljZXMgXCI/XCIgc3RyKSBpc1xuICAgICAgTm90aGluZyAtPlxuICAgICAgICBjaG9tcEJlZm9yZVF1ZXJ5IHByb3RvY29sIE5vdGhpbmcgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgKEp1c3QgKFN0cmluZy5kcm9wRmlyc3QgKGkgKyAxKSBzdHIpKSBmcmFnIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlUXVlcnkgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIEFycmF5LmdldCAwIChTdHJpbmcuaW5kaWNlcyBcIi9cIiBzdHIpIGlzXG4gICAgICBOb3RoaW5nIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCBcIi9cIiBwYXJhbXMgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCAoU3RyaW5nLmRyb3BGaXJzdCBpIHN0cikgcGFyYW1zIGZyYWcgKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpXG5cblxuY2hvbXBCZWZvcmVQYXRoIDogUHJvdG9jb2wgLT4gU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVQYXRoIHByb3RvY29sIHBhdGggcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHx8IFN0cmluZy5jb250YWlucyBcIkBcIiBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gU3RyaW5nLmluZGljZXMgXCI6XCIgc3RyIGlzXG4gICAgICBbXSAtPlxuICAgICAgICBKdXN0IDx8IFxuICAgICAgICAgICAgeyBwcm90b2NvbCA9IHByb3RvY29sIFxuICAgICAgICAgICAgLCBob3N0ID0gc3RyIFxuICAgICAgICAgICAgLCBwb3J0XyA9IE5vdGhpbmcgXG4gICAgICAgICAgICAsIHBhdGggPSBwYXRoIFxuICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICwgZnJhZ21lbnQgPSBmcmFnXG4gICAgICAgICAgICB9XG5cbiAgICAgIFtpXSAtPlxuICAgICAgICB3aGVuIFN0cmluZy50b0ludCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikgaXNcbiAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICBwb3J0XyAtPlxuICAgICAgICAgICAgSnVzdCA8fCBcbiAgICAgICAgICAgICAgICB7IHByb3RvY29sID0gcHJvdG9jb2xcbiAgICAgICAgICAgICAgICAsIGhvc3QgPSAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cikgXG4gICAgICAgICAgICAgICAgLCBwb3J0XyA9IHBvcnRfIFxuICAgICAgICAgICAgICAgICwgcGF0aCA9IHBhdGggXG4gICAgICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICAgICAsIGZyYWdtZW50ID0gZnJhZ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgXyAtPlxuICAgICAgICBOb3RoaW5nXG5cblxuey18IFR1cm4gYSBbYFVybGBdKCNVcmwpIGludG8gYSBgU3RyaW5nYC5cbi19XG50b1N0cmluZyA6IFVybCAtPiBTdHJpbmdcbnRvU3RyaW5nIHVybCA9XG4gIGxldFxuICAgIGh0dHAgPVxuICAgICAgd2hlbiB1cmwucHJvdG9jb2wgaXNcbiAgICAgICAgSHR0cCAtPlxuICAgICAgICAgIFwiaHR0cDovL1wiXG5cbiAgICAgICAgSHR0cHMgLT5cbiAgICAgICAgICBcImh0dHBzOi8vXCJcbiAgaW5cbiAgYWRkUG9ydCB1cmwucG9ydF8gKGh0dHAgKysgdXJsLmhvc3QpICsrIHVybC5wYXRoXG4gICAgfD4gYWRkUHJlZml4ZWQgXCI/XCIgdXJsLnF1ZXJ5XG4gICAgfD4gYWRkUHJlZml4ZWQgXCIjXCIgdXJsLmZyYWdtZW50XG5cblxuYWRkUG9ydCA6IE1heWJlIEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hZGRQb3J0IG1heWJlUG9ydCBzdGFydGVyID1cbiAgd2hlbiBtYXliZVBvcnQgaXNcbiAgICBOb3RoaW5nIC0+XG4gICAgICBzdGFydGVyXG5cbiAgICBKdXN0IHBvcnRfIC0+XG4gICAgICBzdGFydGVyICsrIFwiOlwiICsrIFN0cmluZy5mcm9tSW50IHBvcnRfXG5cblxuYWRkUHJlZml4ZWQgOiBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbmFkZFByZWZpeGVkIHByZWZpeCBtYXliZVNlZ21lbnQgc3RhcnRlciA9XG4gIHdoZW4gbWF5YmVTZWdtZW50IGlzXG4gICAgTm90aGluZyAtPlxuICAgICAgc3RhcnRlclxuXG4gICAgSnVzdCBzZWdtZW50IC0+XG4gICAgICBzdGFydGVyICsrIHByZWZpeCArKyBzZWdtZW50XG5cblxuXG4tLSBQRVJDRU5UIEVOQ09ESU5HXG5cblxuey18ICoqVXNlIFtVcmwuQnVpbGRlcl0oVXJsLUJ1aWxkZXIpIGluc3RlYWQhKiogRnVuY3Rpb25zIGxpa2UgYGFic29sdXRlYCxcbmByZWxhdGl2ZWAsIGFuZCBgY3Jvc3NPcmlnaW5gIGFscmVhZHkgZG8gdGhpcyBhdXRvbWF0aWNhbGx5ISBgcGVyY2VudEVuY29kZWBcbmlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXQgZXh0cmVtZWx5IGN1c3RvbSBjYXNlcyBhcmUgcG9zc2libGUsIGlmIG5lZWRlZC5cblxuUGVyY2VudC1lbmNvZGluZyBpcyBob3cgW3RoZSBvZmZpY2lhbCBVUkkgc3BlY11bdXJpXSDigJxlc2NhcGVz4oCdIHNwZWNpYWxcbmNoYXJhY3RlcnMuIFlvdSBjYW4gc3RpbGwgcmVwcmVzZW50IGEgYD9gIGV2ZW4gdGhvdWdoIGl0IGlzIHJlc2VydmVkIGZvclxucXVlcmllcy5cblxuVGhpcyBmdW5jdGlvbiBleGlzdHMgaW4gY2FzZSB5b3Ugd2FudCB0byBkbyBzb21ldGhpbmcgZXh0cmEgY3VzdG9tLiBIZXJlIGFyZVxuc29tZSBleGFtcGxlczpcblxuICAgIC0tIHN0YW5kYXJkIEFTQ0lJIGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcImhhdFwiICAgPT0gXCJoYXRcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCJ0byBiZVwiID09IFwidG8lMjBiZVwiXG4gICAgcGVyY2VudEVuY29kZSBcIjk5JVwiICAgPT0gXCI5OSUyNVwiXG5cbiAgICAtLSBub24tc3RhbmRhcmQsIGJ1dCB3aWRlbHkgYWNjZXB0ZWQsIFVURi04IGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcIiRcIiA9PSBcIiUyNFwiXG4gICAgcGVyY2VudEVuY29kZSBcIsKiXCIgPT0gXCIlQzIlQTJcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCLigqxcIiA9PSBcIiVFMiU4MiVBQ1wiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZW5jb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLFxuYW5kIHRoZSBydWxlcyBhcmUgZGVzY3JpYmVkIGluIG1vcmUgZGV0YWlsIG9mZmljaWFsbHkgW2hlcmVdW3MyXSBhbmQgd2l0aCBzb21lXG5ub3RlcyBhYm91dCBVbmljb2RlIFtoZXJlXVt3aWtpXS5cblxuW2pzXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZW5jb2RlVVJJQ29tcG9uZW50XG5bdXJpXTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODZcbltzMl06IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4xXG5bd2lraV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BlcmNlbnQtZW5jb2Rpbmdcbi19XG5wZXJjZW50RW5jb2RlIDogU3RyaW5nIC0+IFN0cmluZ1xucGVyY2VudEVuY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RW5jb2RlXG5cblxuey18ICoqVXNlIFtVcmwuUGFyc2VyXShVcmwtUGFyc2VyKSBpbnN0ZWFkISoqIEl0IHdpbGwgZGVjb2RlIHF1ZXJ5XG5wYXJhbWV0ZXJzIGFwcHJvcHJpYXRlbHkgYWxyZWFkeSEgYHBlcmNlbnREZWNvZGVgIGlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXRcbmV4dHJlbWVseSBjdXN0b20gY2FzZXMgYXJlIHBvc3NpYmxlLCBpZiBuZWVkZWQuXG5cbkNoZWNrIG91dCB0aGUgYHBlcmNlbnRFbmNvZGVgIGZ1bmN0aW9uIHRvIGxlYXJuIGFib3V0IHBlcmNlbnQtZW5jb2RpbmcuXG5UaGlzIGZ1bmN0aW9uIGRvZXMgdGhlIG9wcG9zaXRlISBIZXJlIGFyZSB0aGUgcmV2ZXJzZSBleGFtcGxlczpcblxuICAgIC0tIEFTQ0lJXG4gICAgcGVyY2VudERlY29kZSBcImhhdFwiICAgICAgID09IEp1c3QgXCJoYXRcIlxuICAgIHBlcmNlbnREZWNvZGUgXCJ0byUyMGJlXCIgICA9PSBKdXN0IFwidG8gYmVcIlxuICAgIHBlcmNlbnREZWNvZGUgXCI5OSUyNVwiICAgICA9PSBKdXN0IFwiOTklXCJcblxuICAgIC0tIFVURi04XG4gICAgcGVyY2VudERlY29kZSBcIiUyNFwiICAgICAgID09IEp1c3QgXCIkXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUMyJUEyXCIgICAgPT0gSnVzdCBcIsKiXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUUyJTgyJUFDXCIgPT0gSnVzdCBcIuKCrFwiXG5cbldoeSBpcyBpdCBhIGBNYXliZWAgdGhvdWdoPyBXZWxsLCB0aGVzZSBzdHJpbmdzIGNvbWUgZnJvbSBzdHJhbmdlcnMgb24gdGhlXG5pbnRlcm5ldCBhcyBhIGJ1bmNoIG9mIGJpdHMgYW5kIG1heSBoYXZlIGVuY29kaW5nIHByb2JsZW1zLiBGb3IgZXhhbXBsZTpcblxuICAgIHBlcmNlbnREZWNvZGUgXCIlXCIgICA9PSBOb3RoaW5nICAtLSBub3QgZm9sbG93ZWQgYnkgdHdvIGhleCBkaWdpdHNcbiAgICBwZXJjZW50RGVjb2RlIFwiJVhZXCIgPT0gTm90aGluZyAgLS0gbm90IGZvbGxvd2VkIGJ5IHR3byBIRVggZGlnaXRzXG4gICAgcGVyY2VudERlY29kZSBcIiVDMlwiID09IE5vdGhpbmcgIC0tIGhhbGYgb2YgdGhlIFwiwqJcIiBlbmNvZGluZyBcIiVDMiVBMlwiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZGVjb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLlxuXG5banNdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9kZWNvZGVVUklDb21wb25lbnRcbi19XG5wZXJjZW50RGVjb2RlIDogU3RyaW5nIC0+IE1heWJlIFN0cmluZ1xucGVyY2VudERlY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RGVjb2RlXG4iLAogICAgICAgICJlZmZlY3QgbW9kdWxlIFRhc2sgd2hlcmUgeyBjb21tYW5kID0gTXlDbWQgfSBleHBvc2luZ1xuICAgICggVGFzaywgcGVyZm9ybSwgYXR0ZW1wdCwgZXhlY3V0ZVxuICAgICwgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIG9uRXJyb3IsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgVGFza3MgbWFrZSBpdCBlYXN5IHRvIGRlc2NyaWJlIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIHRoYXQgbWF5IGZhaWwsIGxpa2VcbkhUVFAgcmVxdWVzdHMgb3Igd3JpdGluZyB0byBhIGRhdGFiYXNlLlxuXG5cbkBkb2NzIFRhc2ssIHBlcmZvcm0sIGF0dGVtcHQsIGV4ZWN1dGVcblxuXG4jIyBDaGFpbnNcblxuQGRvY3MgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG5cblxuIyMgTWFwc1xuXG5AZG9jcyBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcblxuXG4jIyBFcnJvcnNcblxuQGRvY3Mgb25FcnJvciwgbWFwRXJyb3JcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKCg8PCksICh8PiksIE5ldmVyKVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgUGxhdGZvcm1cbmltcG9ydCBQbGF0Zm9ybS5DbWQgZXhwb3NpbmcgKENtZClcbmltcG9ydCBSZXN1bHQgZXhwb3NpbmcgKFJlc3VsdCguLikpXG5cblxuey18IEhlcmUgYXJlIHNvbWUgY29tbW9uIHRhc2tzOlxuXG4gIC0gW2Bub3cgOiBUYXNrIHggUG9zaXhgXShUaW1lI25vdylcbiAgLSBbYGZvY3VzIDogU3RyaW5nIC0+IFRhc2sgRXJyb3Ige31gXVtmb2N1c11cbiAgLSBbYHNsZWVwIDogRmxvYXQgLT4gVGFzayB4IHt9YF0oUHJvY2VzcyNzbGVlcClcblxuW2ZvY3VzXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyLkRvbSNmb2N1c1xuXG5JbiBlYWNoIGNhc2Ugd2UgaGF2ZSBhIGBUYXNrYCB0aGF0IHdpbGwgcmVzb2x2ZSBzdWNjZXNzZnVsbHkgd2l0aCBhbiBgYWAgdmFsdWVcbm9yIHVuc3VjY2Vzc2Z1bGx5IHdpdGggYW4gYHhgIHZhbHVlLiBTbyBgQnJvd3Nlci5Eb20uZm9jdXNgIHdlIG1heSBmYWlsIHdpdGggYW5cbmBFcnJvcmAgaWYgdGhlIGdpdmVuIElEIGRvZXMgbm90IGV4aXN0LiBXaGVyZWFzIGBUaW1lLm5vd2AgbmV2ZXIgZmFpbHMgc29cbkkgY2Fubm90IGJlIG1vcmUgc3BlY2lmaWMgdGhhbiBgeGAuIE5vIHN1Y2ggdmFsdWUgd2lsbCBldmVyIGV4aXN0ISBJbnN0ZWFkIGl0XG5hbHdheXMgc3VjY2VlZHMgd2l0aCB0aGUgY3VycmVudCBQT1NJWCB0aW1lLlxuXG5Nb3JlIGdlbmVyYWxseSBhIHRhc2sgaXMgYSBfZGVzY3JpcHRpb25fIG9mIHdoYXQgeW91IG5lZWQgdG8gZG8uIExpa2UgYSB0b2RvXG5saXN0LiBPciBsaWtlIGEgZ3JvY2VyeSBsaXN0LiBPciBsaWtlIEdpdEh1YiBpc3N1ZXMuIFNvIHNheWluZyBcInRoZSB0YXNrIGlzXG50byB0ZWxsIG1lIHRoZSBjdXJyZW50IFBPU0lYIHRpbWVcIiBkb2VzIG5vdCBjb21wbGV0ZSB0aGUgdGFzayEgWW91IG5lZWRcbltgcGVyZm9ybWBdKCNwZXJmb3JtKSB0YXNrcyBvciBbYGF0dGVtcHRgXSgjYXR0ZW1wdCkgdGFza3MuXG5cbi19XG50eXBlIGFsaWFzIFRhc2sgeCBhID1cbiAgICBQbGF0Zm9ybS5UYXNrIHggYVxuXG5cblxuLS0gQkFTSUNTXG5cblxuey18IEEgdGFzayB0aGF0IHN1Y2NlZWRzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBJdCBpcyB1c3VhbGx5IHVzZWQgd2l0aFxuW2BhbmRUaGVuYF0oI2FuZFRoZW4pLiBZb3UgY2FuIHVzZSBpdCBsaWtlIGBtYXBgIGlmIHlvdSB3YW50OlxuXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluTWlsbGlzIDogVGFzayB4IEludFxuICAgIHRpbWVJbk1pbGxpcyA9XG4gICAgICAgIFRpbWUubm93XG4gICAgICAgICAgICB8PiBhbmRUaGVuIChcXHQgLT4gc3VjY2VlZCAoVGltZS5wb3NpeFRvTWlsbGlzIHQpKVxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gVGFzayB4IGFcbnN1Y2NlZWQgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zdWNjZWVkXG5cblxuey18IEEgdGFzayB0aGF0IGZhaWxzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBMaWtlIHdpdGggYHN1Y2NlZWRgLCB0aGlzIGNhbiBiZVxudXNlZCB3aXRoIGBhbmRUaGVuYCB0byBjaGVjayBvbiB0aGUgb3V0Y29tZSBvZiBhbm90aGVyIHRhc2suXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gTm90Rm91bmRcblxuICAgIG5vdEZvdW5kIDogVGFzayBFcnJvciBhXG4gICAgbm90Rm91bmQgPVxuICAgICAgICBmYWlsIE5vdEZvdW5kXG5cbi19XG5mYWlsIDogeCAtPiBUYXNrIHggYVxuZmFpbCA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmZhaWxcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgdGFzay4gTWF5YmUgeW91IHdhbnQgdG8gdXNlIFtgVGltZWBdW3RpbWVdIHRvIGZpZ3VyZVxub3V0IHdoYXQgdGltZSBpdCB3aWxsIGJlIGluIG9uZSBob3VyOlxuXG4gICAgaW1wb3J0IFRhc2sgZXhwb3NpbmcgKFRhc2spXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2subWFwIGFkZEFuSG91ciBUaW1lLm5vd1xuXG4gICAgYWRkQW5Ib3VyIDogVGltZS5Qb3NpeCAtPiBUaW1lLlBvc2l4XG4gICAgYWRkQW5Ib3VyIHRpbWUgPVxuICAgICAgICBUaW1lLm1pbGxpc1RvUG9zaXggKFRpbWUucG9zaXhUb01pbGxpcyB0aW1lICsgNjAgKiA2MCAqIDEwMDApXG5cblt0aW1lXTogVGltZVxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gVGFzayB4IGEgLT4gVGFzayB4IGJcbm1hcCBmdW5jIHRhc2tBID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuIChcXGEgLT4gc3VjY2VlZCAoZnVuYyBhKSlcblxuXG57LXwgUHV0IHRoZSByZXN1bHRzIG9mIHR3byB0YXNrcyB0b2dldGhlci4gRm9yIGV4YW1wbGUsIGlmIHdlIHdhbnRlZCB0byBrbm93XG50aGUgY3VycmVudCBtb250aCwgd2UgY291bGQgdXNlIFtgVGltZWBdW3RpbWVdIHRvIGFzazpcblxuICAgIGltcG9ydCBUYXNrIGV4cG9zaW5nIChUYXNrKVxuICAgIGltcG9ydCBUaW1lXG5cblxuICAgIGdldE1vbnRoIDogVGFzayB4IEludFxuICAgIGdldE1vbnRoID1cbiAgICAgICAgVGFzay5tYXAyIFRpbWUudG9Nb250aCBUaW1lLmhlcmUgVGltZS5ub3dcblxuKipOb3RlOioqIFNheSB3ZSB3ZXJlIGRvaW5nIEhUVFAgcmVxdWVzdHMgaW5zdGVhZC4gYG1hcDJgIGRvZXMgZWFjaCB0YXNrIGluXG5vcmRlciwgc28gaXQgd291bGQgdHJ5IHRoZSBmaXJzdCByZXF1ZXN0IGFuZCBvbmx5IGNvbnRpbnVlIGFmdGVyIGl0IHN1Y2NlZWRzLlxuSWYgaXQgZmFpbHMsIHRoZSB3aG9sZSB0aGluZyBmYWlscyFcblxuW3RpbWVdOiBUaW1lXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCByZXN1bHRcbm1hcDIgZnVuYyB0YXNrQSB0YXNrQiA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYiAtPiBzdWNjZWVkIChmdW5jIGEgYikpXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IGMgLT4gVGFzayB4IHJlc3VsdFxubWFwMyBmdW5jIHRhc2tBIHRhc2tCIHRhc2tDID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgKFxcYiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYyAtPiBzdWNjZWVkIChmdW5jIGEgYiBjKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCByZXN1bHRcbm1hcDQgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxkIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiIGMgZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCBlIC0+IFRhc2sgeCByZXN1bHRcbm1hcDUgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCB0YXNrRSA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxcZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcZSAtPiBzdWNjZWVkIChmdW5jIGEgYiBjIGQgZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IFN0YXJ0IHdpdGggYW4gYXJyYXkgb2YgdGFza3MsIGFuZCB0dXJuIHRoZW0gaW50byBhIHNpbmdsZSB0YXNrIHRoYXQgcmV0dXJucyBhXG5hcnJheS4gVGhlIHRhc2tzIHdpbGwgYmUgcnVuIGluIG9yZGVyIG9uZS1ieS1vbmUgYW5kIGlmIGFueSB0YXNrIGZhaWxzIHRoZSB3aG9sZVxuc2VxdWVuY2UgZmFpbHMuXG5cbiAgICBzZXF1ZW5jZSBbIHN1Y2NlZWQgMSwgc3VjY2VlZCAyIF0gPT0gc3VjY2VlZCBbIDEsIDIgXVxuXG4tfVxuc2VxdWVuY2UgOiBBcnJheSAoVGFzayB4IGEpIC0+IFRhc2sgeCAoQXJyYXkgYSlcbnNlcXVlbmNlIHRhc2tzID1cbiAgICBBcnJheS5mb2xkciAobWFwMiBBcnJheS5wdXNoRmlyc3QpIChzdWNjZWVkIFtdKSB0YXNrc1xuXG5cblxuLS0gQ0hBSU5JTkdcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSB0YXNrIGFuZCBhIGNhbGxiYWNrLiBUaGUgZmlyc3QgdGFzayB3aWxsIHJ1biwgYW5kIGlmIGl0IGlzXG5zdWNjZXNzZnVsLCB5b3UgZ2l2ZSB0aGUgcmVzdWx0IHRvIHRoZSBjYWxsYmFjayByZXN1bHRpbmcgaW4gYW5vdGhlciB0YXNrLiBUaGlzXG50YXNrIHRoZW4gZ2V0cyBydW4uIFdlIGNvdWxkIHVzZSB0aGlzIHRvIG1ha2UgYSB0YXNrIHRoYXQgcmVzb2x2ZXMgYW4gaG91ciBmcm9tXG5ub3c6XG5cblxuICAgIGltcG9ydCBQcm9jZXNzXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHRpbWVJbk9uZUhvdXIgOiBUYXNrIHggVGltZS5Qb3NpeFxuICAgIHRpbWVJbk9uZUhvdXIgPVxuICAgICAgICBQcm9jZXNzLnNsZWVwICg2MCAqIDYwICogMTAwMClcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcXyAtPiBUaW1lLm5vdylcblxuRmlyc3QgdGhlIHByb2Nlc3Mgc2xlZXBzIGZvciBhbiBob3VyICoqYW5kIHRoZW4qKiBpdCB0ZWxscyB1cyB3aGF0IHRpbWUgaXQgaXMuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gVGFzayB4IGIpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuYW5kVGhlblxuXG5cbnstfCBUaGlzIGlzIGxpa2UgW2FuZFRoZW5dKGFuZFRoZW4pIGJ1dCB0aGUgYXJndW1lbnRzIGFyZSByZXZlcnNlZC4gVGhlIGNhbGxiYWNrXG5pcyB0aGUgbGFzdCBhcmd1bWVudCwgaW5zdGVhZCBvZiB0aGUgZmlyc3QuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIHdyaXRlIGltcGVyYXRpdmVcbmNvZGUgd2hlcmUgZWFjaCBjYWxsYmFjayBpbnZvbHZlcyBtb3JlIGxvZ2ljLlxuXG4gICAgaW1wb3J0IFByb2Nlc3NcbiAgICBpbXBvcnQgVGltZVxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2suYXdhaXQgKFByb2Nlc3Muc2xlZXAgPHwgNjAgKiA2MCAqIDEwMDApIDx8IFxcXyAtPlxuICAgICAgICAgICAgVGltZS5ub3dcblxuKGEpd2FpdCBmb3IgYW4gaG91ciwgdGhlbiBmZXRjaCB0aGUgY3VycmVudCB0aW1lLlxuXG4tfVxuYXdhaXQgOiBUYXNrIHggYSAtPiAoYSAtPiBUYXNrIHggYikgLT4gVGFzayB4IGJcbmF3YWl0IHRzayBjYWxsYmFjayA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmFuZFRoZW4gY2FsbGJhY2sgdHNrXG5cblxuLS0gRVJST1JTXG5cblxuey18IFJlY292ZXIgZnJvbSBhIGZhaWx1cmUgaW4gYSB0YXNrLiBJZiB0aGUgZ2l2ZW4gdGFzayBmYWlscywgd2UgdXNlIHRoZVxuY2FsbGJhY2sgdG8gcmVjb3Zlci5cblxuICAgIGZhaWwgXCJmaWxlIG5vdCBmb3VuZFwiXG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA0MlxuXG4gICAgc3VjY2VlZCA5XG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA5XG5cbi19XG5vbkVycm9yIDogKHggLT4gVGFzayB5IGEpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeSBhXG5vbkVycm9yID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIub25FcnJvclxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIGVycm9yIHZhbHVlLiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IG5lZWQgYSBidW5jaCBvZiBlcnJvclxudHlwZXMgdG8gbWF0Y2ggdXAuXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gSHR0cCBIdHRwLkVycm9yXG4gICAgICAgIHwgV2ViR0wgV2ViR0wuRXJyb3JcblxuICAgIGdldFJlc291cmNlcyA6IFRhc2sgRXJyb3IgUmVzb3VyY2VcbiAgICBnZXRSZXNvdXJjZXMgPVxuICAgICAgICBzZXF1ZW5jZVxuICAgICAgICAgICAgWyBtYXBFcnJvciBIdHRwIHNlcnZlclRhc2tcbiAgICAgICAgICAgICwgbWFwRXJyb3IgV2ViR0wgdGV4dHVyZVRhc2tcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcEVycm9yIDogKHggLT4geSkgLT4gVGFzayB4IGEgLT4gVGFzayB5IGFcbm1hcEVycm9yIGNvbnZlcnQgdGFzayA9XG4gICAgdGFza1xuICAgICAgICB8PiBvbkVycm9yIChmYWlsIDw8IGNvbnZlcnQpXG5cblxuXG4tLSBDT01NQU5EU1xuXG5cbnR5cGUgTXlDbWQgbXNnXG4gICAgPSBQZXJmb3JtIChUYXNrIE5ldmVyIG1zZylcbiAgICB8IEV4ZWN1dGUgKFRhc2sgTmV2ZXIge30pXG5cblxuey18IExpa2UgSSB3YXMgc2F5aW5nIGluIHRoZSBbYFRhc2tgXSgjVGFzaykgZG9jdW1lbnRhdGlvbiwganVzdCBoYXZpbmcgYVxuYFRhc2tgIGRvZXMgbm90IG1lYW4gaXQgaXMgZG9uZS4gV2UgbXVzdCBjb21tYW5kIEdyZW4gdG8gYHBlcmZvcm1gIHRoZSB0YXNrOlxuXG5cblxuICAgIGltcG9ydCBUYXNrXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tcbiAgICAgICAgfCBTZWFyY2ggU3RyaW5nXG4gICAgICAgIHwgTmV3VGltZSBUaW1lLlBvc2l4XG5cbiAgICBnZXROZXdUaW1lIDogQ21kIE1zZ1xuICAgIGdldE5ld1RpbWUgPVxuICAgICAgICBUYXNrLnBlcmZvcm0gTmV3VGltZSBUaW1lLm5vd1xuXG5TbyB3ZSBoYXZlIGNoYW5nZWQgYSB0YXNrIGxpa2UgXCJtYWtlIGRlbGljaW91cyBsYXNhZ25hXCIgaW50byBhIGNvbW1hbmQgbGlrZVxuXCJIZXkgR3JlbiwgbWFrZSBkZWxpY2lvdXMgbGFzYWduYSBhbmQgZ2l2ZSBpdCB0byBteSBgdXBkYXRlYCBmdW5jdGlvbiBhcyBhXG5gTXNnYCB2YWx1ZS5cIlxuXG4tfVxucGVyZm9ybSA6IChhIC0+IG1zZykgLT4gVGFzayBOZXZlciBhIC0+IENtZCBtc2dcbnBlcmZvcm0gdG9NZXNzYWdlIHRhc2sgPVxuICAgIGNvbW1hbmQgKFBlcmZvcm0gKG1hcCB0b01lc3NhZ2UgdGFzaykpXG5cblxuey18IFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIFtgcGVyZm9ybWBdKCNwZXJmb3JtKSBleGNlcHQgaXQgY2FuIGhhbmRsZSBmYWlsdXJlcyFcblNvIHdlIGNvdWxkIF9hdHRlbXB0XyB0byBmb2N1cyBvbiBhIGNlcnRhaW4gRE9NIG5vZGUgbGlrZSB0aGlzOlxuXG4gICAgLS0gZ3JlbiBpbnN0YWxsIGdyZW4tbGFuZy9icm93c2VyXG5cblxuICAgIGltcG9ydCBCcm93c2VyLkRvbVxuICAgIGltcG9ydCBUYXNrXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrXG4gICAgICAgIHwgU2VhcmNoIFN0cmluZ1xuICAgICAgICB8IEZvY3VzIChSZXN1bHQgQnJvd3Nlci5Eb21FcnJvciB7fSlcblxuICAgIGZvY3VzIDogQ21kIE1zZ1xuICAgIGZvY3VzID1cbiAgICAgICAgVGFzay5hdHRlbXB0IEZvY3VzIChCcm93c2VyLkRvbS5mb2N1cyBcIm15LWFwcC1zZWFyY2gtYm94XCIpXG5cblNvIHRoZSB0YXNrIGlzIFwiZm9jdXMgb24gdGhpcyBET00gbm9kZVwiIGFuZCB3ZSBhcmUgdHVybmluZyBpdCBpbnRvIHRoZSBjb21tYW5kXG5cIkhleSBHcmVuLCBhdHRlbXB0IHRvIGZvY3VzIG9uIHRoaXMgRE9NIG5vZGUgYW5kIGdpdmUgbWUgYSBgTXNnYCBhYm91dCB3aGV0aGVyXG55b3Ugc3VjY2VlZGVkIG9yIGZhaWxlZC5cIlxuXG4tfVxuYXR0ZW1wdCA6IChSZXN1bHQgeCBhIC0+IG1zZykgLT4gVGFzayB4IGEgLT4gQ21kIG1zZ1xuYXR0ZW1wdCByZXN1bHRUb01lc3NhZ2UgdGFzayA9XG4gICAgY29tbWFuZFxuICAgICAgICAoUGVyZm9ybVxuICAgICAgICAgICAgKHRhc2tcbiAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBPaylcbiAgICAgICAgICAgICAgICB8PiBvbkVycm9yIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBFcnIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuXG57LXwgU29tZXRpbWVzIHdlIHdhbnQgdG8gZ2l2ZSBhIGNvbW1hbmQgd2l0aG91dCBiZWluZyB0b2xkIGhvdyBpdCB3ZW50LiBNYXliZSB3ZVxuYXJlIGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBzY3JlZW4sIG9yIGNoYW5naW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdy5cbkluIGVpdGhlciBjYXNlLCB0aGVyZSdzIHJlYWxseSBub3RoaW5nIGZvciB1cyB0byBkbyBhZnRlcndhcmRzLiBJbiB0aG9zZSBjYXNlc1xud2UgY2FuIHVzZSBgZXhlY3V0ZWAuXG4tfVxuZXhlY3V0ZSA6IFRhc2sgTmV2ZXIgYSAtPiBDbWQgbXNnXG5leGVjdXRlIHRhc2sgPVxuICAgIGNvbW1hbmQgKEV4ZWN1dGUgKG1hcCAoXFxfIC0+IHt9KSB0YXNrKSlcblxuXG5jbWRNYXAgOiAoYSAtPiBiKSAtPiBNeUNtZCBhIC0+IE15Q21kIGJcbmNtZE1hcCB0YWdnZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIFBlcmZvcm0gKG1hcCB0YWdnZXIgdGFzaylcblxuICAgICAgICBFeGVjdXRlIHRhc2sgLT5cbiAgICAgICAgICAgIEV4ZWN1dGUgdGFza1xuXG5cbi0tIE1BTkFHRVJcblxuXG5pbml0IDogVGFzayBOZXZlciB7fVxuaW5pdCA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbm9uRWZmZWN0cyA6IFBsYXRmb3JtLlJvdXRlciBtc2cgTmV2ZXIgLT4gQXJyYXkgKE15Q21kIG1zZykgLT4ge30gLT4gVGFzayBOZXZlciB7fVxub25FZmZlY3RzIHJvdXRlciBjb21tYW5kcyBzdGF0ZSA9XG4gICAgbWFwXG4gICAgICAgIChcXF8gLT4ge30pXG4gICAgICAgIChzZXF1ZW5jZSAoQXJyYXkubWFwIChzcGF3bkNtZCByb3V0ZXIpIGNvbW1hbmRzKSlcblxuXG5vblNlbGZNc2cgOiBQbGF0Zm9ybS5Sb3V0ZXIgbXNnIE5ldmVyIC0+IE5ldmVyIC0+IHt9IC0+IFRhc2sgTmV2ZXIge31cbm9uU2VsZk1zZyBfIF8gXyA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbnNwYXduQ21kIDogUGxhdGZvcm0uUm91dGVyIG1zZyBOZXZlciAtPiBNeUNtZCBtc2cgLT4gVGFzayB4IHt9XG5zcGF3bkNtZCByb3V0ZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zcGF3blxuICAgICAgICAgICAgICAgICh0YXNrXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFBsYXRmb3JtLnNlbmRUb0FwcCByb3V0ZXIpXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgIEV4ZWN1dGUgdGFzayAtPlxuICAgICAgICAgICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLnNwYXduIHRhc2tcbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybSBleHBvc2luZ1xuICAgICggUHJvZ3JhbSwgd29ya2VyXG4gICAgLCBUYXNrLCBQcm9jZXNzSWRcbiAgICAsIFJvdXRlciwgc2VuZFRvQXBwLCBzZW5kVG9TZWxmXG4gICAgKVxuXG57LXwgVGhpcyBtb2R1bGUgY29udGFpbnMgZGVmaW5pdGlvbnMgaW1wb3J0YW50IHRvIHRoZSBsYW5ndWFnZSBydW50aW1lLlxuWW91J3JlIHVubGlrZWx5IHRvIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGVzZSB0aGluZ3MgeW91cnNlbGYuXG5cblxuQGRvY3MgUHJvZ3JhbSwgd29ya2VyXG5cblxuIyMgVGFza3MgYW5kIFByb2Nlc3Nlc1xuXG5AZG9jcyBUYXNrLCBQcm9jZXNzSWRcblxuXG4jIyBFZmZlY3QgTWFuYWdlciBIZWxwZXJzXG5cbkVmZmVjdCBtYW5hZ2VycyBjYW4gYmUgdmlld2VkIGFzIHByb2dyYW1zLXdpdGhpbi1hLXByb2dyYW0uIFRoZXkgaGF2ZSB0aGVpciBvd25cbnN0YXRlLCBhbmQgY29tbXVuaWNhdGUgd2l0aCB0aGUgYXBwbGljYXRpb24gdXNpbmcgbWVzc2FnZXMuXG5cbkVmZmVjdCBtYW5hZ2VycyBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBtYW55IHRoaW5ncywgYnV0IGlzbid0IGNvbnNpZGVyZWQgdG8gYmVcbnRydWx5IHN0YWJsZS4gSXQncyBsaWtlbHkgdGhhdCB0aGlzIGZlYXR1cmUgd2lsbCBiZSByZWRlc2lnbmVkIGluIGEgZnV0dXJlIHJlbGFzZS5cblxuXG5AZG9jcyBSb3V0ZXIsIHNlbmRUb0FwcCwgc2VuZFRvU2VsZlxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChOZXZlcilcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IFBsYXRmb3JtLkNtZCBleHBvc2luZyAoQ21kKVxuaW1wb3J0IFBsYXRmb3JtLlN1YiBleHBvc2luZyAoU3ViKVxuXG5cblxuLS0gUFJPR1JBTVNcblxuXG57LXwgQSBgUHJvZ3JhbWAgZGVzY3JpYmVzIGFuIEdyZW4gcHJvZ3JhbSEgSG93IGRvZXMgaXQgcmVhY3QgdG8gaW5wdXQ/IERvZXMgaXRcbnNob3cgYW55dGhpbmcgb24gc2NyZWVuPyBFdGMuXG4tfVxudHlwZSBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuICAgID0gUHJvZ3JhbVxuXG5cbnstfCBDcmVhdGUgYSBbaGVhZGxlc3NdIHByb2dyYW0gd2l0aCBubyB1c2VyIGludGVyZmFjZS5cblxuVGhpcyBpcyBncmVhdCBpZiB5b3Ugd2FudCB0byB1c2UgR3JlbiBhcyB0aGUgJmxkcXVvO2JyYWluJnJkcXVvOyBmb3Igc29tZXRoaW5nXG5lbHNlLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIHNlbmQgbWVzc2FnZXMgb3V0IHBvcnRzIHRvIG1vZGlmeSB0aGUgRE9NLCBidXQgZG9cbmFsbCB0aGUgY29tcGxleCBsb2dpYyBpbiBHcmVuLlxuXG5baGVhZGxlc3NdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFkbGVzc19zb2Z0d2FyZVxuXG5Jbml0aWFsaXppbmcgYSBoZWFkbGVzcyBwcm9ncmFtIGZyb20gSmF2YVNjcmlwdCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYGphdmFzY3JpcHRcbnZhciBhcHAgPSBHcmVuLk15VGhpbmcuaW5pdCgpO1xuYGBgXG5cbklmIHlvdSBfZG9fIHdhbnQgdG8gY29udHJvbCB0aGUgdXNlciBpbnRlcmZhY2UgaW4gR3JlbiwgdGhlIFtgQnJvd3NlcmBdW2Jyb3dzZXJdXG5tb2R1bGUgaGFzIGEgZmV3IHdheXMgdG8gY3JlYXRlIHRoYXQga2luZCBvZiBgUHJvZ3JhbWAgaW5zdGVhZCFcblxuW2hlYWRsZXNzXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVhZGxlc3Nfc29mdHdhcmVcblticm93c2VyXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyXG5cbi19XG53b3JrZXIgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbndvcmtlciA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ud29ya2VyXG5cblxuXG4tLSBUQVNLUyBhbmQgUFJPQ0VTU0VTXG5cblxuey18IEhlYWQgb3ZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIFtgVGFza2BdKFRhc2spIG1vZHVsZSBmb3IgbW9yZVxuaW5mb3JtYXRpb24gb24gdGhpcy4gSXQgaXMgb25seSBkZWZpbmVkIGhlcmUgYmVjYXVzZSBpdCBpcyBhIHBsYXRmb3JtXG5wcmltaXRpdmUuXG4tfVxudHlwZSBUYXNrIGVyciBva1xuICAgID0gVGFza1xuXG5cbnstfCBIZWFkIG92ZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBbYFByb2Nlc3NgXShQcm9jZXNzKSBtb2R1bGUgZm9yXG5pbmZvcm1hdGlvbiBvbiB0aGlzLiBJdCBpcyBvbmx5IGRlZmluZWQgaGVyZSBiZWNhdXNlIGl0IGlzIGEgcGxhdGZvcm1cbnByaW1pdGl2ZS5cbi19XG50eXBlIFByb2Nlc3NJZFxuICAgID0gUHJvY2Vzc0lkXG5cblxuXG4tLSBFRkZFQ1QgTUFOQUdFUiBJTlRFUk5BTFNcblxuXG57LXwgQW4gZWZmZWN0IG1hbmFnZXIgaGFzIGFjY2VzcyB0byBhIOKAnHJvdXRlcuKAnSB0aGF0IHJvdXRlcyBtZXNzYWdlcyBiZXR3ZWVuXG50aGUgbWFpbiBhcHAgYW5kIHlvdXIgaW5kaXZpZHVhbCBlZmZlY3QgbWFuYWdlci5cbi19XG50eXBlIFJvdXRlciBhcHBNc2cgc2VsZk1zZ1xuICAgID0gUm91dGVyXG5cblxuey18IFNlbmQgdGhlIHJvdXRlciBhIG1lc3NhZ2UgZm9yIHRoZSBtYWluIGxvb3Agb2YgeW91ciBhcHAuIFRoaXMgbWVzc2FnZSB3aWxsXG5iZSBoYW5kbGVkIGJ5IHRoZSBvdmVyYWxsIGB1cGRhdGVgIGZ1bmN0aW9uLCBqdXN0IGxpa2UgZXZlbnRzIGZyb20gYEh0bWxgLlxuLX1cbnNlbmRUb0FwcCA6IFJvdXRlciBtc2cgYSAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9BcHAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLnNlbmRUb0FwcFxuXG5cbnstfCBTZW5kIHRoZSByb3V0ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGVmZmVjdCBtYW5hZ2VyLiBUaGlzIG1lc3NhZ2Ugd2lsbFxuYmUgcm91dGVkIHRvIHRoZSBgb25TZWxmTXNnYCBmdW5jdGlvbiwgd2hlcmUgeW91IGNhbiB1cGRhdGUgdGhlIHN0YXRlIG9mIHlvdXJcbmVmZmVjdCBtYW5hZ2VyIGFzIG5lY2Vzc2FyeS5cblxuQXMgYW4gZXhhbXBsZSwgdGhlIGVmZmVjdCBtYW5hZ2VyIGZvciB3ZWIgc29ja2V0c1xuXG4tfVxuc2VuZFRvU2VsZiA6IFJvdXRlciBhIG1zZyAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9TZWxmID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5zZW5kVG9TZWxmXG4iLAogICAgICAgICJtb2R1bGUgUGxhdGZvcm0uQ21kIGV4cG9zaW5nXG4gICAgKCBDbWQsIG5vbmUsIGJhdGNoXG4gICAgLCBtYXBcbiAgICApXG5cbnstfFxuXG4+ICoqTm90ZToqKiBHcmVuIGhhcyAqKm1hbmFnZWQgZWZmZWN0cyoqLCBtZWFuaW5nIHRoYXQgdGhpbmdzIGxpa2UgSFRUUFxuPiByZXF1ZXN0cyBvciB3cml0aW5nIHRvIGRpc2sgYXJlIGFsbCB0cmVhdGVkIGFzIF9kYXRhXyBpbiBHcmVuLiBXaGVuIHRoaXNcbj4gZGF0YSBpcyBnaXZlbiB0byB0aGUgR3JlbiBydW50aW1lIHN5c3RlbSwgaXQgY2FuIGRvIHNvbWUg4oCccXVlcnkgb3B0aW1pemF0aW9u4oCdXG4+IGJlZm9yZSBhY3R1YWxseSBwZXJmb3JtaW5nIHRoZSBlZmZlY3QuIFBlcmhhcHMgdW5leHBlY3RlZGx5LCB0aGlzIG1hbmFnZWRcbj4gZWZmZWN0cyBpZGVhIGlzIHRoZSBoZWFydCBvZiB3aHkgR3JlbiBpcyBzbyBuaWNlIGZvciB0ZXN0aW5nLCByZXVzZSxcbj4gcmVwcm9kdWNpYmlsaXR5LCBldGMuXG4+XG4+IEdyZW4gaGFzIHR3byBraW5kcyBvZiBtYW5hZ2VkIGVmZmVjdHM6IGNvbW1hbmRzIGFuZCBzdWJzY3JpcHRpb25zLlxuXG5cbiMjIENvbW1hbmRzXG5cbkBkb2NzIENtZCwgbm9uZSwgYmF0Y2hcblxuXG4jIyBGYW5jeSBTdHVmZlxuXG5AZG9jcyBtYXBcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuXG5cblxuLS0gQ09NTUFORFNcblxuXG57LXwgQSBjb21tYW5kIGlzIGEgd2F5IG9mIHRlbGxpbmcgR3Jlbiwg4oCcSGV5LCBJIHdhbnQgeW91IHRvIGRvIHRoaXMgdGhpbmch4oCdXG5TbyBpZiB5b3Ugd2FudCB0byBzZW5kIGFuIEhUVFAgcmVxdWVzdCwgeW91IHdvdWxkIG5lZWQgdG8gY29tbWFuZCBHcmVuIHRvIGRvIGl0LlxuT3IgaWYgeW91IHdhbnRlZCB0byBhc2sgZm9yIGdlb2xvY2F0aW9uLCB5b3Ugd291bGQgbmVlZCB0byBjb21tYW5kIEdyZW4gdG8gZ29cbmdldCBpdC5cblxuRXZlcnkgYENtZGAgc3BlY2lmaWVzICgxKSB3aGljaCBlZmZlY3RzIHlvdSBuZWVkIGFjY2VzcyB0byBhbmQgKDIpIHRoZSB0eXBlIG9mXG5tZXNzYWdlcyB0aGF0IHdpbGwgY29tZSBiYWNrIGludG8geW91ciBhcHBsaWNhdGlvbi5cblxuKipOb3RlOioqIERvIG5vdCB3b3JyeSBpZiB0aGlzIHNlZW1zIGNvbmZ1c2luZyBhdCBmaXJzdCEgQXMgd2l0aCBldmVyeSBHcmVuIHVzZXJcbmV2ZXIsIGNvbW1hbmRzIHdpbGwgbWFrZSBtb3JlIHNlbnNlIGFzIHlvdSB3b3JrIHRocm91Z2ggW3RoZSBHcmVuIEFyY2hpdGVjdHVyZVxuVHV0b3JpYWxdKGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvKSBhbmQgc2VlIGhvdyB0aGV5XG5maXQgaW50byBhIHJlYWwgYXBwbGljYXRpb24hXG5cbi19XG50eXBlIENtZCBtc2dcbiAgICA9IENtZFxuXG5cbnstfCBUZWxsIHRoZSBydW50aW1lIHRoYXQgdGhlcmUgYXJlIG5vIGNvbW1hbmRzLlxuLX1cbm5vbmUgOiBDbWQgbXNnXG5ub25lID1cbiAgICBiYXRjaCBbXVxuXG5cbnstfCBXaGVuIHlvdSBuZWVkIHRoZSBydW50aW1lIHN5c3RlbSB0byBwZXJmb3JtIGEgY291cGxlIGNvbW1hbmRzLCB5b3VcbmNhbiBiYXRjaCB0aGVtIHRvZ2V0aGVyLiBFYWNoIGlzIGhhbmRlZCB0byB0aGUgcnVudGltZSBhdCB0aGUgc2FtZSB0aW1lLFxuYW5kIHNpbmNlIGVhY2ggY2FuIHBlcmZvcm0gYXJiaXRyYXJ5IG9wZXJhdGlvbnMgaW4gdGhlIHdvcmxkLCB0aGVyZSBhcmVcbm5vIG9yZGVyaW5nIGd1YXJhbnRlZXMgYWJvdXQgdGhlIHJlc3VsdHMuXG5cbioqTm90ZToqKiBgQ21kLm5vbmVgIGFuZCBgQ21kLmJhdGNoIFsgQ21kLm5vbmUsIENtZC5ub25lIF1gIGFuZCBgQ21kLmJhdGNoIFtdYFxuYWxsIGRvIHRoZSBzYW1lIHRoaW5nLlxuXG4tfVxuYmF0Y2ggOiBBcnJheSAoQ21kIG1zZykgLT4gQ21kIG1zZ1xuYmF0Y2ggPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLmJhdGNoXG5cblxuXG4tLSBGQU5DWSBTVFVGRlxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGEgY29tbWFuZC5cblZlcnkgc2ltaWxhciB0byBbYEh0bWwubWFwYF0oL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9IdG1sI21hcCkuXG5cblRoaXMgaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIHdlbGwtc3RydWN0dXJlZCBHcmVuIGNvZGUsIHNvIGRlZmluaXRlbHkgcmVhZCB0aGVcbnNlY3Rpb24gb24gW3N0cnVjdHVyZV0gaW4gdGhlIGd1aWRlIGJlZm9yZSByZWFjaGluZyBmb3IgdGhpcyFcblxuW3N0cnVjdHVyZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy93ZWJhcHBzL3N0cnVjdHVyZS5odG1sXG5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IENtZCBhIC0+IENtZCBtc2dcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ubWFwXG4iLAogICAgICAgICJtb2R1bGUgUGxhdGZvcm0uU3ViIGV4cG9zaW5nXG4gICAgKCBTdWIsIG5vbmUsIGJhdGNoXG4gICAgLCBtYXBcbiAgICApXG5cbnstfFxuXG4+ICoqTm90ZToqKiBHcmVuIGhhcyAqKm1hbmFnZWQgZWZmZWN0cyoqLCBtZWFuaW5nIHRoYXQgdGhpbmdzIGxpa2UgSFRUUFxuPiByZXF1ZXN0cyBvciB3cml0aW5nIHRvIGRpc2sgYXJlIGFsbCB0cmVhdGVkIGFzIF9kYXRhXyBpbiBHcmVuLiBXaGVuIHRoaXNcbj4gZGF0YSBpcyBnaXZlbiB0byB0aGUgR3JlbiBydW50aW1lIHN5c3RlbSwgaXQgY2FuIGRvIHNvbWUg4oCccXVlcnkgb3B0aW1pemF0aW9u4oCdXG4+IGJlZm9yZSBhY3R1YWxseSBwZXJmb3JtaW5nIHRoZSBlZmZlY3QuIFBlcmhhcHMgdW5leHBlY3RlZGx5LCB0aGlzIG1hbmFnZWRcbj4gZWZmZWN0cyBpZGVhIGlzIHRoZSBoZWFydCBvZiB3aHkgR3JlbiBpcyBzbyBuaWNlIGZvciB0ZXN0aW5nLCByZXVzZSxcbj4gcmVwcm9kdWNpYmlsaXR5LCBldGMuXG4+XG4+IEdyZW4gaGFzIHR3byBraW5kcyBvZiBtYW5hZ2VkIGVmZmVjdHM6IGNvbW1hbmRzIGFuZCBzdWJzY3JpcHRpb25zLlxuXG5cbiMjIFN1YnNjcmlwdGlvbnNcblxuQGRvY3MgU3ViLCBub25lLCBiYXRjaFxuXG5cbiMjIEZhbmN5IFN0dWZmXG5cbkBkb2NzIG1hcFxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEdyZW4uS2VybmVsLlBsYXRmb3JtXG5cblxuXG4tLSBTVUJTQ1JJUFRJT05TXG5cblxuey18IEEgc3Vic2NyaXB0aW9uIGlzIGEgd2F5IG9mIHRlbGxpbmcgR3Jlbiwg4oCcSGV5LCBsZXQgbWUga25vdyBpZiBhbnl0aGluZ1xuaW50ZXJlc3RpbmcgaGFwcGVucyBvdmVyIHRoZXJlIeKAnSBTbyBpZiB5b3Ugd2FudCB0byBsaXN0ZW4gZm9yIG1lc3NhZ2VzIG9uIGEgd2ViXG5zb2NrZXQsIHlvdSB3b3VsZCB0ZWxsIEdyZW4gdG8gY3JlYXRlIGEgc3Vic2NyaXB0aW9uLiBJZiB5b3Ugd2FudCB0byBnZXQgY2xvY2tcbnRpY2tzLCB5b3Ugd291bGQgdGVsbCBHcmVuIHRvIHN1YnNjcmliZSB0byB0aGF0LiBUaGUgY29vbCB0aGluZyBoZXJlIGlzIHRoYXRcbnRoaXMgbWVhbnMgX0dyZW5fIG1hbmFnZXMgYWxsIHRoZSBkZXRhaWxzIG9mIHN1YnNjcmlwdGlvbnMgaW5zdGVhZCBvZiBfeW91Xy5cblNvIGlmIGEgd2ViIHNvY2tldCBnb2VzIGRvd24sIF95b3VfIGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IHJlY29ubmVjdCB3aXRoIGFuXG5leHBvbmVudGlhbCBiYWNrb2ZmIHN0cmF0ZWd5LCBfR3Jlbl8gZG9lcyB0aGlzIGFsbCBmb3IgeW91IGJlaGluZCB0aGUgc2NlbmVzIVxuXG5FdmVyeSBgU3ViYCBzcGVjaWZpZXMgKDEpIHdoaWNoIGVmZmVjdHMgeW91IG5lZWQgYWNjZXNzIHRvIGFuZCAoMikgdGhlIHR5cGUgb2Zcbm1lc3NhZ2VzIHRoYXQgd2lsbCBjb21lIGJhY2sgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxuXG4qKk5vdGU6KiogRG8gbm90IHdvcnJ5IGlmIHRoaXMgc2VlbXMgY29uZnVzaW5nIGF0IGZpcnN0ISBBcyB3aXRoIGV2ZXJ5IEdyZW4gdXNlclxuZXZlciwgc3Vic2NyaXB0aW9ucyB3aWxsIG1ha2UgbW9yZSBzZW5zZSBhcyB5b3Ugd29yayB0aHJvdWdoIFt0aGUgR3JlbiBBcmNoaXRlY3R1cmVcblR1dG9yaWFsXShodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlLykgYW5kIHNlZSBob3cgdGhleSBmaXRcbmludG8gYSByZWFsIGFwcGxpY2F0aW9uIVxuXG4tfVxudHlwZSBTdWIgbXNnXG4gICAgPSBTdWJcblxuXG57LXwgVGVsbCB0aGUgcnVudGltZSB0aGF0IHRoZXJlIGFyZSBubyBzdWJzY3JpcHRpb25zLlxuLX1cbm5vbmUgOiBTdWIgbXNnXG5ub25lID1cbiAgICBiYXRjaCBbXVxuXG5cbnstfCBXaGVuIHlvdSBuZWVkIHRvIHN1YnNjcmliZSB0byBtdWx0aXBsZSB0aGluZ3MsIHlvdSBjYW4gY3JlYXRlIGEgYGJhdGNoYCBvZlxuc3Vic2NyaXB0aW9ucy5cblxuKipOb3RlOioqIGBTdWIubm9uZWAgYW5kIGBTdWIuYmF0Y2ggWyBTdWIubm9uZSwgU3ViLm5vbmUgXWAgYW5kXG5gU3ViLmJhdGNoIFtdYCBhbGwgZG8gdGhlIHNhbWUgdGhpbmcuXG5cbi19XG5iYXRjaCA6IEFycmF5IChTdWIgbXNnKSAtPiBTdWIgbXNnXG5iYXRjaCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uYmF0Y2hcblxuXG5cbi0tIEZBTkNZIFNUVUZGXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBzdWJzY3JpcHRpb24uXG5WZXJ5IHNpbWlsYXIgdG8gW2BIdG1sLm1hcGBdKC9wYWNrYWdlL2dyZW4tbGFuZy9icm93c2VyL2xhdGVzdC9tb2R1bGUvSHRtbCNtYXApLlxuXG5UaGlzIGlzIHZlcnkgcmFyZWx5IHVzZWZ1bCBpbiB3ZWxsLXN0cnVjdHVyZWQgR3JlbiBjb2RlLCBzbyBkZWZpbml0ZWx5IHJlYWQgdGhlXG5zZWN0aW9uIG9uIFtzdHJ1Y3R1cmVdIGluIHRoZSBndWlkZSBiZWZvcmUgcmVhY2hpbmcgZm9yIHRoaXMhXG5cbltzdHJ1Y3R1cmVdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvd2ViYXBwcy9zdHJ1Y3R1cmUuaHRtbFxuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBTdWIgYSAtPiBTdWIgbXNnXG5tYXAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLm1hcFxuIiwKICAgICAgICAibW9kdWxlIEJyb3dzZXIgZXhwb3NpbmdcbiAgICAoIHNhbmRib3hcbiAgICAsIGVsZW1lbnRcbiAgICAsIGRvY3VtZW50LCBEb2N1bWVudFxuICAgICwgYXBwbGljYXRpb24sIFVybFJlcXVlc3QoLi4pXG4gICAgKVxuXG57LXwgVGhpcyBtb2R1bGUgaGVscHMgeW91IHNldCB1cCBhbiBHcmVuIGBQcm9ncmFtYCB3aXRoIGZ1bmN0aW9ucyBsaWtlXG5bYHNhbmRib3hgXSgjc2FuZGJveCkgYW5kIFtgZG9jdW1lbnRgXSgjZG9jdW1lbnQpLlxuXG5cbiMjIFNhbmRib3hlc1xuXG5AZG9jcyBzYW5kYm94XG5cblxuIyMgRWxlbWVudHNcblxuQGRvY3MgZWxlbWVudFxuXG5cbiMjIERvY3VtZW50c1xuXG5AZG9jcyBkb2N1bWVudCwgRG9jdW1lbnRcblxuXG4jIyBBcHBsaWNhdGlvbnNcblxuQGRvY3MgYXBwbGljYXRpb24sIFVybFJlcXVlc3RcblxuLX1cblxuaW1wb3J0IEJyb3dzZXIuTmF2aWdhdGlvbiBhcyBOYXZpZ2F0aW9uXG5pbXBvcnQgRGljdFxuaW1wb3J0IEdyZW4uS2VybmVsLkJyb3dzZXJcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sKVxuaW1wb3J0IFVybFxuXG5cblxuLS0gU0FOREJPWFxuXG5cbnstfCBDcmVhdGUgYSDigJxzYW5kYm94ZWTigJ0gcHJvZ3JhbSB0aGF0IGNhbm5vdCBjb21tdW5pY2F0ZSB3aXRoIHRoZSBvdXRzaWRlXG53b3JsZC5cblxuVGhpcyBpcyBncmVhdCBmb3IgbGVhcm5pbmcgdGhlIGJhc2ljcyBvZiBbVGhlIEVsbSBBcmNoaXRlY3R1cmVdW3RlYV0sIHdoaWNoIEdyZW5cbnVzZXMgZm9yIHN0cnVjdHVyaW5nIGFwcGxpY2F0aW9ucy4gWW91IGNhbiBzZWUgc2FuZGJveGVzIGluIGFjdGlvbiBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzOlxuXG4gIC0gW0J1dHRvbnNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS9idXR0b25zLmh0bWwpXG4gIC0gW1RleHQgRmllbGRzXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvdGV4dF9maWVsZHMuaHRtbClcbiAgLSBbRm9ybXNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS9mb3Jtcy5odG1sKVxuXG5bdGVhXTogaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL1xuXG4tfVxuc2FuZGJveCA6XG4gICAgeyBpbml0IDogbW9kZWxcbiAgICAsIHZpZXcgOiBtb2RlbCAtPiBIdG1sIG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IG1vZGVsXG4gICAgfVxuICAgIC0+IFByb2dyYW0ge30gbW9kZWwgbXNnXG5zYW5kYm94IGltcGwgPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuZWxlbWVudFxuICAgICAgICB7IGluaXQgPSBcXHt9IC0+IHsgbW9kZWwgPSBpbXBsLmluaXQsIGNvbW1hbmQgPSBDbWQubm9uZSB9XG4gICAgICAgICwgdmlldyA9IGltcGwudmlld1xuICAgICAgICAsIHVwZGF0ZSA9IFxcbXNnIG1vZGVsIC0+IHsgbW9kZWwgPSBpbXBsLnVwZGF0ZSBtc2cgbW9kZWwsIGNvbW1hbmQgPSBDbWQubm9uZSB9XG4gICAgICAgICwgc3Vic2NyaXB0aW9ucyA9IFxcXyAtPiBTdWIubm9uZVxuICAgICAgICB9XG5cblxuXG4tLSBFTEVNRU5UXG5cblxuey18IENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgbWFuYWdlZCBieSBHcmVuLiBUaGUgcmVzdWx0aW5nIGVsZW1lbnRzIGFyZSBlYXN5IHRvXG5lbWJlZCBpbiBsYXJnZXIgSmF2YVNjcmlwdCBwcm9qZWN0cywgYW5kIGxvdHMgb2YgY29tcGFuaWVzIHRoYXQgdXNlIEdyZW5cbnN0YXJ0ZWQgd2l0aCB0aGlzIGFwcHJvYWNoISBUcnkgaXQgb3V0IG9uIHNvbWV0aGluZyBzbWFsbC4gSWYgaXQgd29ya3MsIGdyZWF0LFxuZG8gbW9yZSEgSWYgbm90LCByZXZlcnQsIG5vIGJpZyBkZWFsLlxuXG5Vbmxpa2UgYSBbYHNhbmRib3hgXSgjc2FuZGJveCksIGFuIGBlbGVtZW50YCBjYW4gdGFsayB0byB0aGUgb3V0c2lkZSB3b3JsZCBpblxuYSBjb3VwbGUgd2F5czpcblxuICAtIGBDbWRgICZtZGFzaDsgeW91IGNhbiDigJxjb21tYW5k4oCdIHRoZSBHcmVuIHJ1bnRpbWUgdG8gZG8gc3R1ZmYsIGxpa2UgSFRUUC5cbiAgLSBgU3ViYCAmbWRhc2g7IHlvdSBjYW4g4oCcc3Vic2NyaWJl4oCdIHRvIGV2ZW50IHNvdXJjZXMsIGxpa2UgY2xvY2sgdGlja3MuXG4gIC0gYGZsYWdzYCAmbWRhc2g7IEphdmFTY3JpcHQgY2FuIHBhc3MgaW4gZGF0YSB3aGVuIHN0YXJ0aW5nIHRoZSBHcmVuIHByb2dyYW1cbiAgLSBgcG9ydHNgICZtZGFzaDsgc2V0IHVwIGEgY2xpZW50LXNlcnZlciByZWxhdGlvbnNoaXAgd2l0aCBKYXZhU2NyaXB0XG5cbkFzIHlvdSByZWFkIFt0aGUgZ3VpZGVdW2d1aWRlXSB5b3Ugd2lsbCBydW4gaW50byBhIGJ1bmNoIG9mIGV4YW1wbGVzIG9mIGBlbGVtZW50YFxuaW4gW3RoaXMgc2VjdGlvbl1bZnhdLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZmxhZ3MgYW5kIHBvcnRzIGluIFt0aGUgaW50ZXJvcFxuc2VjdGlvbl1baW50ZXJvcF0uXG5cbltndWlkZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9cbltmeF06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9lZmZlY3RzL1xuW2ludGVyb3BdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvaW50ZXJvcC9cblxuLX1cbmVsZW1lbnQgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IEh0bWwgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuZWxlbWVudCA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5lbGVtZW50XG5cblxuXG4tLSBET0NVTUVOVFxuXG5cbnstfCBDcmVhdGUgYW4gSFRNTCBkb2N1bWVudCBtYW5hZ2VkIGJ5IEdyZW4uIFRoaXMgZXhwYW5kcyB1cG9uIHdoYXQgYGVsZW1lbnRgXG5jYW4gZG8gaW4gdGhhdCBgdmlld2Agbm93IGdpdmVzIHlvdSBjb250cm9sIG92ZXIgdGhlIGA8dGl0bGU+YCBhbmQgYDxib2R5PmAuXG4tfVxuZG9jdW1lbnQgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IERvY3VtZW50IG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbmRvY3VtZW50ID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmRvY3VtZW50XG5cblxuey18IFRoaXMgZGF0YSBzcGVjaWZpZXMgdGhlIGA8dGl0bGU+YCBhbmQgYWxsIG9mIHRoZSBub2RlcyB0aGF0IHNob3VsZCBnbyBpblxudGhlIGA8Ym9keT5gLiBUaGlzIG1lYW5zIHlvdSBjYW4gdXBkYXRlIHRoZSB0aXRsZSBhcyB5b3VyIGFwcGxpY2F0aW9uIGNoYW5nZXMuXG5NYXliZSB5b3VyIFwic2luZ2xlLXBhZ2UgYXBwXCIgbmF2aWdhdGVzIHRvIGEgXCJkaWZmZXJlbnQgcGFnZVwiLCBtYXliZSBhIGNhbGVuZGFyXG5hcHAgc2hvd3MgYW4gYWNjdXJhdGUgZGF0ZSBpbiB0aGUgdGl0bGUsIGV0Yy5cblxuPiAqKk5vdGUgYWJvdXQgQ1NTOioqIFRoaXMgbG9va3Mgc2ltaWxhciB0byBhbiBgPGh0bWw+YCBkb2N1bWVudCwgYnV0IHRoaXMgaXNcbj4gbm90IHRoZSBwbGFjZSB0byBtYW5hZ2UgQ1NTIGFzc2V0cy4gSWYgeW91IHdhbnQgdG8gd29yayB3aXRoIENTUywgdGhlcmUgYXJlXG4+IGEgY291cGxlIHdheXM6XG4+XG4+IDEuICBQYWNrYWdlcyBsaWtlIFtgcnRmZWxkbWFuL2VsbS1jc3NgXVtlbG0tY3NzXSBnaXZlIGFsbCBvZiB0aGUgZmVhdHVyZXNcbj4gICAgIG9mIENTUyB3aXRob3V0IGFueSBDU1MgZmlsZXMuIFlvdSBjYW4gYWRkIGFsbCB0aGUgc3R5bGVzIHlvdSBuZWVkIGluIHlvdXJcbj4gICAgIGB2aWV3YCBmdW5jdGlvbiwgYW5kIHRoZXJlIGlzIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgY2xhc3MgbmFtZXMgbWF0Y2hpbmcuXG4+XG4+IDIuICBDb21waWxlIHlvdXIgR3JlbiBjb2RlIHRvIEphdmFTY3JpcHQgd2l0aCBgZ3JlbiBtYWtlIC0tb3V0cHV0PWdyZW4uanNgIGFuZFxuPiAgICAgdGhlbiBtYWtlIHlvdXIgb3duIEhUTUwgZmlsZSB0aGF0IGxvYWRzIGBncmVuLmpzYCBhbmQgdGhlIENTUyBmaWxlIHlvdSB3YW50LlxuPiAgICAgV2l0aCB0aGlzIGFwcHJvYWNoLCBpdCBkb2VzIG5vdCBtYXR0ZXIgd2hlcmUgdGhlIENTUyBjb21lcyBmcm9tLiBXcml0ZSBpdFxuPiAgICAgYnkgaGFuZC4gR2VuZXJhdGUgaXQuIFdoYXRldmVyIHlvdSB3YW50IHRvIGRvLlxuPlxuPiAzLiAgSWYgeW91IG5lZWQgdG8gY2hhbmdlIGA8bGluaz5gIHRhZ3MgZHluYW1pY2FsbHksIHlvdSBjYW4gc2VuZCBtZXNzYWdlc1xuPiAgICAgb3V0IGEgcG9ydCB0byBkbyBpdCBpbiBKYXZhU2NyaXB0LlxuPlxuPiBUaGUgYmlnZ2VyIHBvaW50IGhlcmUgaXMgdGhhdCBsb2FkaW5nIGFzc2V0cyBpbnZvbHZlcyB0b3VjaGluZyB0aGUgYDxoZWFkPmBcbj4gYXMgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIGJyb3dzZXJzLCBidXQgdGhhdCBkb2VzIG5vdCBtZWFuIGl0IHNob3VsZCBiZVxuPiB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIGB2aWV3YCBmdW5jdGlvbiBpbiBHcmVuLiBTbyB3ZSBkbyBpdCBkaWZmZXJlbnRseSFcblxuW2VsbS1jc3NdOiAvcGFja2FnZXMvcnRmZWxkbWFuL2VsbS1jc3MvbGF0ZXN0L1xuXG4tfVxudHlwZSBhbGlhcyBEb2N1bWVudCBtc2cgPVxuICAgIHsgdGl0bGUgOiBTdHJpbmdcbiAgICAsIGJvZHkgOiBBcnJheSAoSHRtbCBtc2cpXG4gICAgfVxuXG5cblxuLS0gQVBQTElDQVRJT05cblxuXG57LXwgQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgbWFuYWdlcyBbYFVybGBdW3VybF0gY2hhbmdlcy5cblxuKipXaGVuIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMqKiwgYGluaXRgIGdldHMgdGhlIGluaXRpYWwgYFVybGAuIFlvdSBjYW4gc2hvd1xuZGlmZmVyZW50IHRoaW5ncyBkZXBlbmRpbmcgb24gdGhlIGBVcmxgIVxuXG4qKldoZW4gc29tZW9uZSBjbGlja3MgYSBsaW5rKiosIGxpa2UgYDxhIGhyZWY9XCIvaG9tZVwiPkhvbWU8L2E+YCwgaXQgYWx3YXlzIGdvZXNcbnRocm91Z2ggYG9uVXJsUmVxdWVzdGAuIFRoZSByZXN1bHRpbmcgbWVzc2FnZSBnb2VzIHRvIHlvdXIgYHVwZGF0ZWAgZnVuY3Rpb24sXG5naXZpbmcgeW91IGEgY2hhbmNlIHRvIHNhdmUgc2Nyb2xsIHBvc2l0aW9uIG9yIHBlcnNpc3QgZGF0YSBiZWZvcmUgY2hhbmdpbmdcbnRoZSBVUkwgeW91cnNlbGYgd2l0aCBbYHB1c2hVcmxgXVtibnBdIG9yIFtgbG9hZGBdW2JubF0uIE1vcmUgaW5mbyBvbiB0aGlzIGluXG50aGUgW2BVcmxSZXF1ZXN0YF0oI1VybFJlcXVlc3QpIGRvY3MhXG5cbioqV2hlbiB0aGUgVVJMIGNoYW5nZXMqKiwgdGhlIG5ldyBgVXJsYCBnb2VzIHRocm91Z2ggYG9uVXJsQ2hhbmdlYC4gVGhlXG5yZXN1bHRpbmcgbWVzc2FnZSBnb2VzIHRvIGB1cGRhdGVgIHdoZXJlIHlvdSBjYW4gZGVjaWRlIHdoYXQgdG8gc2hvdyBuZXh0LlxuXG5BcHBsaWNhdGlvbnMgYWx3YXlzIHVzZSB0aGUgW2BCcm93c2VyLk5hdmlnYXRpb25gXVtibl0gbW9kdWxlIGZvciBwcmVjaXNlXG5jb250cm9sIG92ZXIgYFVybGAgY2hhbmdlcy5cblxuKipNb3JlIEluZm86KiogSGVyZSBhcmUgc29tZSBleGFtcGxlIHVzYWdlcyBvZiBgYXBwbGljYXRpb25gIHByb2dyYW1zOlxuXG4gIC0gW1JlYWxXb3JsZCBleGFtcGxlIGFwcF0oaHR0cHM6Ly9naXRodWIuY29tL3J0ZmVsZG1hbi9lbG0tc3BhLWV4YW1wbGUpXG4gIC0gW0dyZW7igJlzIHBhY2thZ2Ugd2Vic2l0ZV0oaHR0cHM6Ly9naXRodWIuY29tL2VsbS9wYWNrYWdlLmdyZW4tbGFuZy5vcmcpXG5cblRoZXNlIGFyZSBxdWl0ZSBhZHZhbmNlZCBHcmVuIHByb2dyYW1zLCBzbyBiZSBzdXJlIHRvIGdvIHRocm91Z2ggW3RoZSBndWlkZV1bZ11cbmZpcnN0IHRvIGdldCBhIHNvbGlkIGNvbmNlcHR1YWwgZm91bmRhdGlvbiBiZWZvcmUgZGl2aW5nIGluISBJZiB5b3Ugc3RhcnRcbnJlYWRpbmcgYSBjYWxjdWx1cyBib29rIGZyb20gcGFnZSAzMTQsIGl0IG1pZ2h0IHNlZW0gY29uZnVzaW5nLiBTYW1lIGhlcmUhXG5cbioqTm90ZToqKiBDYW4gYW4gW2BlbGVtZW50YF0oI2VsZW1lbnQpIG1hbmFnZSB0aGUgVVJMIHRvbz8gUmVhZCBbdGhpc10hXG5cbltnXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL1xuW2JuXTogQnJvd3Nlci5OYXZpZ2F0aW9uXG5bYm5wXTogQnJvd3Nlci5OYXZpZ2F0aW9uI3B1c2hVcmxcbltibmxdOiBCcm93c2VyLk5hdmlnYXRpb24jbG9hZFxuW3VybF06IC9wYWNrYWdlL2dyZW4tbGFuZy91cmwvbGF0ZXN0L21vZHVsZS9VcmwjVXJsXG5bdGhpc106IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVuLWxhbmcvYnJvd3Nlci9ibG9iLzEuMC4yL25vdGVzL25hdmlnYXRpb24taW4tZWxlbWVudHMubWRcblxuLX1cbmFwcGxpY2F0aW9uIDpcbiAgICB7IGluaXQgOiBmbGFncyAtPiBVcmwuVXJsIC0+IE5hdmlnYXRpb24uS2V5IC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdmlldyA6IG1vZGVsIC0+IERvY3VtZW50IG1zZ1xuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICAsIG9uVXJsUmVxdWVzdCA6IFVybFJlcXVlc3QgLT4gbXNnXG4gICAgLCBvblVybENoYW5nZSA6IFVybC5VcmwgLT4gbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG5hcHBsaWNhdGlvbiA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5hcHBsaWNhdGlvblxuXG5cbnstfCBBbGwgbGlua3MgaW4gYW4gW2BhcHBsaWNhdGlvbmBdKCNhcHBsaWNhdGlvbikgY3JlYXRlIGEgYFVybFJlcXVlc3RgLiBTb1xud2hlbiB5b3UgY2xpY2sgYDxhIGhyZWY9XCIvaG9tZVwiPkhvbWU8L2E+YCwgaXQgZG9lcyBub3QganVzdCBuYXZpZ2F0ZSEgSXRcbm5vdGlmaWVzIGBvblVybFJlcXVlc3RgIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gY2hhbmdlIHRoZSBgVXJsYC5cblxuXG4jIyMgYEludGVybmFsYCB2cyBgRXh0ZXJuYWxgXG5cbkltYWdpbmUgd2UgYXJlIGJyb3dzaW5nIGBodHRwczovL2V4YW1wbGUuY29tYC4gQW4gYEludGVybmFsYCBsaW5rIHdvdWxkIGJlXG5saWtlOlxuXG4gIC0gYHNldHRpbmdzI3ByaXZhY3lgXG4gIC0gYC9ob21lYFxuICAtIGBodHRwczovL2V4YW1wbGUuY29tL2hvbWVgXG4gIC0gYC8vZXhhbXBsZS5jb20vaG9tZWBcblxuQWxsIG9mIHRoZXNlIGxpbmtzIGV4aXN0IHVuZGVyIHRoZSBgaHR0cHM6Ly9leGFtcGxlLmNvbWAgZG9tYWluLiBBbiBgRXh0ZXJuYWxgXG5saW5rIHdvdWxkIGJlIGxpa2U6XG5cbiAgLSBgaHR0cHM6Ly9ncmVuLWxhbmcub3JnL2V4YW1wbGVzYFxuICAtIGBodHRwczovL290aGVyLmV4YW1wbGUuY29tL2hvbWVgXG4gIC0gYGh0dHA6Ly9leGFtcGxlLmNvbS9ob21lYFxuXG5Bbnl0aGluZyB0aGF0IGNoYW5nZXMgdGhlIGRvbWFpbi4gTm90aWNlIHRoYXQgY2hhbmdpbmcgdGhlIHByb3RvY29sIGZyb21cbmBodHRwc2AgdG8gYGh0dHBgIGlzIGNvbnNpZGVyZWQgYSBkaWZmZXJlbnQgZG9tYWluISAoQW5kIHZpY2UgdmVyc2EhKVxuXG5cbiMjIyBQdXJwb3NlXG5cbkhhdmluZyBhIGBVcmxSZXF1ZXN0YCByZXF1aXJlcyBhIGNhc2UgaW4geW91ciBgdXBkYXRlYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgQnJvd3NlciBleHBvc2luZyAoLi4pXG4gICAgaW1wb3J0IEJyb3dzZXIuTmF2aWdhdGlvbiBhcyBOYXZcbiAgICBpbXBvcnQgVXJsXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrZWRMaW5rIFVybFJlcXVlc3RcblxuICAgIHVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiB7IG1vZGVsIDogTW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICB1cGRhdGUgbXNnIG1vZGVsID1cbiAgICAgICAgY2FzZSBtc2cgb2ZcbiAgICAgICAgICAgIENsaWNrZWRMaW5rIHVybFJlcXVlc3QgLT5cbiAgICAgICAgICAgICAgICBjYXNlIHVybFJlcXVlc3Qgb2ZcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJuYWwgdXJsIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1vZGVsID0gbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICwgY29tbWFuZCA9IE5hdi5wdXNoVXJsIG1vZGVsLmtleSAoVXJsLnRvU3RyaW5nIHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbCB1cmwgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbW9kZWwgPSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBjb21tYW5kID0gTmF2LmxvYWQgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgaXQgZ2l2ZXMgeW91IGEgY2hhbmNlIHRvIGN1c3RvbWl6ZSB0aGUgYmVoYXZpb3IgaW4gZWFjaFxuY2FzZS4gTWF5YmUgb24gc29tZSBgSW50ZXJuYWxgIGxpbmtzIHlvdSBzYXZlIHRoZSBzY3JvbGwgcG9zaXRpb24gd2l0aFxuW2BCcm93c2VyLkRvbS5nZXRWaWV3cG9ydGBdKEJyb3dzZXIuRG9tI2dldFZpZXdwb3J0KSBzbyB5b3UgY2FuIHJlc3RvcmUgaXRcbmxhdGVyLiBNYXliZSBvbiBgRXh0ZXJuYWxgIGxpbmtzIHlvdSBwZXJzaXN0IHBhcnRzIG9mIHRoZSBgTW9kZWxgIG9uIHlvdXJcbnNlcnZlcnMgYmVmb3JlIGxlYXZpbmcuIFdoYXRldmVyIHlvdSBuZWVkIHRvIGRvIVxuXG4qKk5vdGU6KiogS25vd2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG5vdCBlbm91Z2ggdG8gcmVzdG9yZSBpdCEgV2hhdCBpZiB0aGVcbmJyb3dzZXIgZGltZW5zaW9ucyBjaGFuZ2U/IFRoZSBzY3JvbGwgcG9zaXRpb24gd2lsbCBub3QgY29ycmVsYXRlIHdpdGhcbiZsZHF1bzt3aGF0IHdhcyBvbiBzY3JlZW4mcmRxdW87IGFueW1vcmUuIFNvIGl0IG1heSBiZSBiZXR0ZXIgdG8gcmVtZW1iZXJcbiZsZHF1bzt3aGF0IHdhcyBvbiBzY3JlZW4mcmRxdW87IGFuZCByZWNyZWF0ZSB0aGUgcG9zaXRpb24gYmFzZWQgb24gdGhhdC4gRm9yXG5leGFtcGxlLCBpbiBhIFdpa2lwZWRpYSBhcnRpY2xlLCByZW1lbWJlciB0aGUgaGVhZGVyIHRoYXQgdGhleSB3ZXJlIGxvb2tpbmcgYXRcbm1vc3QgcmVjZW50bHkuIFtgQnJvd3Nlci5Eb20uZ2V0RWxlbWVudGBdKEJyb3dzZXIuRG9tI2dldEVsZW1lbnQpIGlzIGRlc2lnbmVkXG5mb3IgZmlndXJpbmcgdGhhdCBvdXQhXG5cbi19XG50eXBlIFVybFJlcXVlc3RcbiAgICA9IEludGVybmFsIFVybC5VcmxcbiAgICB8IEV4dGVybmFsIFN0cmluZ1xuIiwKICAgICAgICAibW9kdWxlIEh0bWwgZXhwb3NpbmdcbiAgKCBIdG1sLCBBdHRyaWJ1dGVcbiAgLCB0ZXh0LCBub2RlLCBtYXBcbiAgLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XG4gICwgZGl2LCBwLCBociwgcHJlLCBibG9ja3F1b3RlXG4gICwgc3BhbiwgYSwgY29kZSwgZW0sIHN0cm9uZywgaSwgYiwgdSwgc3ViLCBzdXAsIGJyXG4gICwgb2wsIHVsLCBsaSwgZGwsIGR0LCBkZFxuICAsIGltZywgaWZyYW1lLCBjYW52YXMsIG1hdGhcbiAgLCBmb3JtLCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cbiAgLCBzZWN0aW9uLCBuYXYsIGFydGljbGUsIGFzaWRlLCBoZWFkZXIsIGZvb3RlciwgYWRkcmVzcywgbWFpbl9cbiAgLCBmaWd1cmUsIGZpZ2NhcHRpb25cbiAgLCB0YWJsZSwgY2FwdGlvbiwgY29sZ3JvdXAsIGNvbCwgdGJvZHksIHRoZWFkLCB0Zm9vdCwgdHIsIHRkLCB0aFxuICAsIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCBkYXRhbGlzdCwgb3B0Z3JvdXAsIG91dHB1dCwgcHJvZ3Jlc3MsIG1ldGVyXG4gICwgYXVkaW8sIHZpZGVvLCBzb3VyY2UsIHRyYWNrXG4gICwgZW1iZWQsIG9iamVjdCwgcGFyYW1cbiAgLCBpbnMsIGRlbFxuICAsIHNtYWxsLCBjaXRlLCBkZm4sIGFiYnIsIHRpbWUsIHZhciwgc2FtcCwga2JkLCBzLCBxXG4gICwgbWFyaywgcnVieSwgcnQsIHJwLCBiZGksIGJkbywgd2JyXG4gICwgZGV0YWlscywgc3VtbWFyeSwgbWVudWl0ZW0sIG1lbnVcbiAgKVxuXG57LXwgVGhpcyBmaWxlIGlzIG9yZ2FuaXplZCByb3VnaGx5IGluIG9yZGVyIG9mIHBvcHVsYXJpdHkuIFRoZSB0YWdzIHdoaWNoIHlvdSdkXG5leHBlY3QgdG8gdXNlIGZyZXF1ZW50bHkgd2lsbCBiZSBjbG9zZXIgdG8gdGhlIHRvcC5cblxuQGRvY3MgSHRtbCwgQXR0cmlidXRlLCB0ZXh0LCBub2RlLCBtYXBcblxuIyMgSGVhZGVyc1xuQGRvY3MgaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxuXG4jIyBHcm91cGluZyBDb250ZW50XG5AZG9jcyBkaXYsIHAsIGhyLCBwcmUsIGJsb2NrcXVvdGVcblxuIyMgVGV4dFxuQGRvY3Mgc3BhbiwgYSwgY29kZSwgZW0sIHN0cm9uZywgaSwgYiwgdSwgc3ViLCBzdXAsIGJyXG5cbiMjIExpc3RzXG5AZG9jcyBvbCwgdWwsIGxpLCBkbCwgZHQsIGRkXG5cbiMjIEVtYmVkZGVkIENvbnRlbnRcbkBkb2NzIGltZywgaWZyYW1lLCBjYW52YXMsIG1hdGhcblxuIyMgSW5wdXRzXG5AZG9jcyBmb3JtLCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0LCBvcHRpb25cblxuIyMgU2VjdGlvbnNcbkBkb2NzIHNlY3Rpb24sIG5hdiwgYXJ0aWNsZSwgYXNpZGUsIGhlYWRlciwgZm9vdGVyLCBhZGRyZXNzLCBtYWluX1xuXG4jIyBGaWd1cmVzXG5AZG9jcyBmaWd1cmUsIGZpZ2NhcHRpb25cblxuIyMgVGFibGVzXG5AZG9jcyB0YWJsZSwgY2FwdGlvbiwgY29sZ3JvdXAsIGNvbCwgdGJvZHksIHRoZWFkLCB0Zm9vdCwgdHIsIHRkLCB0aFxuXG4jIyBMZXNzIENvbW1vbiBJbnB1dHNcbkBkb2NzIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCBkYXRhbGlzdCwgb3B0Z3JvdXAsIG91dHB1dCwgcHJvZ3Jlc3MsIG1ldGVyXG5cbiMjIEF1ZGlvIGFuZCBWaWRlb1xuQGRvY3MgYXVkaW8sIHZpZGVvLCBzb3VyY2UsIHRyYWNrXG5cbiMjIEVtYmVkZGVkIE9iamVjdHNcbkBkb2NzIGVtYmVkLCBvYmplY3QsIHBhcmFtXG5cbiMjIFRleHQgRWRpdHNcbkBkb2NzIGlucywgZGVsXG5cbiMjIFNlbWFudGljIFRleHRcbkBkb2NzIHNtYWxsLCBjaXRlLCBkZm4sIGFiYnIsIHRpbWUsIHZhciwgc2FtcCwga2JkLCBzLCBxXG5cbiMjIExlc3MgQ29tbW9uIFRleHQgVGFnc1xuQGRvY3MgbWFyaywgcnVieSwgcnQsIHJwLCBiZGksIGJkbywgd2JyXG5cbiMgSW50ZXJhY3RpdmUgRWxlbWVudHNcbkBkb2NzIGRldGFpbHMsIHN1bW1hcnksIG1lbnVpdGVtLCBtZW51XG5cbi19XG5cblxuaW1wb3J0IFZpcnR1YWxEb21cblxuXG5cbi0tIENPUkUgVFlQRVNcblxuXG57LXwgVGhlIGNvcmUgYnVpbGRpbmcgYmxvY2sgdXNlZCB0byBidWlsZCB1cCBIVE1MLiBIZXJlIHdlIGNyZWF0ZSBhbiBgSHRtbGBcbnZhbHVlIHdpdGggbm8gYXR0cmlidXRlcyBhbmQgb25lIGNoaWxkOlxuXG4gICAgaGVsbG8gOiBIdG1sIG1zZ1xuICAgIGhlbGxvID1cbiAgICAgIGRpdiBbXSBbIHRleHQgXCJIZWxsbyFcIiBdXG4tfVxudHlwZSBhbGlhcyBIdG1sIG1zZyA9IFZpcnR1YWxEb20uTm9kZSBtc2dcblxuXG57LXwgU2V0IGF0dHJpYnV0ZXMgb24geW91ciBgSHRtbGAuIExlYXJuIG1vcmUgaW4gdGhlXG5bYEh0bWwuQXR0cmlidXRlc2BdKEh0bWwtQXR0cmlidXRlcykgbW9kdWxlLlxuLX1cbnR5cGUgYWxpYXMgQXR0cmlidXRlIG1zZyA9IFZpcnR1YWxEb20uQXR0cmlidXRlIG1zZ1xuXG5cblxuLS0gUFJJTUlUSVZFU1xuXG5cbnstfCBHZW5lcmFsIHdheSB0byBjcmVhdGUgSFRNTCBub2Rlcy4gSXQgaXMgdXNlZCB0byBkZWZpbmUgYWxsIG9mIHRoZSBoZWxwZXJcbmZ1bmN0aW9ucyBpbiB0aGlzIGxpYnJhcnkuXG5cbiAgICBkaXYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuICAgIGRpdiBhdHRyaWJ1dGVzIGNoaWxkcmVuID1cbiAgICAgICAgbm9kZSBcImRpdlwiIGF0dHJpYnV0ZXMgY2hpbGRyZW5cblxuWW91IGNhbiB1c2UgdGhpcyB0byBjcmVhdGUgY3VzdG9tIG5vZGVzIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzb21ldGhpbmcgdGhhdFxuaXMgbm90IGNvdmVyZWQgYnkgdGhlIGhlbHBlciBmdW5jdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LlxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm5vZGUgPVxuICBWaXJ0dWFsRG9tLm5vZGVcblxuXG57LXwgSnVzdCBwdXQgcGxhaW4gdGV4dCBpbiB0aGUgRE9NLiBJdCB3aWxsIGVzY2FwZSB0aGUgc3RyaW5nIHNvIHRoYXQgaXQgYXBwZWFyc1xuZXhhY3RseSBhcyB5b3Ugc3BlY2lmeS5cblxuICAgIHRleHQgXCJIZWxsbyBXb3JsZCFcIlxuLX1cbnRleHQgOiBTdHJpbmcgLT4gSHRtbCBtc2dcbnRleHQgPVxuICBWaXJ0dWFsRG9tLnRleHRcblxuXG5cbi0tIE5FU1RJTkcgVklFV1NcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBzb21lIGBIdG1sYC4gSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLFxud2UgaGF2ZSBgdmlld0J1dHRvbmAgdGhhdCBwcm9kdWNlcyBgKClgIG1lc3NhZ2VzLCBhbmQgd2UgdHJhbnNmb3JtIHRob3NlIHZhbHVlc1xuaW50byBgTXNnYCB2YWx1ZXMgaW4gYHZpZXdgLlxuXG4gICAgdHlwZSBNc2cgPSBMZWZ0IHwgUmlnaHRcblxuICAgIHZpZXcgOiBtb2RlbCAtPiBIdG1sIE1zZ1xuICAgIHZpZXcgbW9kZWwgPVxuICAgICAgZGl2IFtdXG4gICAgICAgIFsgbWFwIChcXF8gLT4gTGVmdCkgKHZpZXdCdXR0b24gXCJMZWZ0XCIpXG4gICAgICAgICwgbWFwIChcXF8gLT4gUmlnaHQpICh2aWV3QnV0dG9uIFwiUmlnaHRcIilcbiAgICAgICAgXVxuXG4gICAgdmlld0J1dHRvbiA6IFN0cmluZyAtPiBIdG1sICgpXG4gICAgdmlld0J1dHRvbiBuYW1lID1cbiAgICAgIGJ1dHRvbiBbIG9uQ2xpY2sgKCkgXSBbIHRleHQgbmFtZSBdXG5cbklmIHlvdSBhcmUgZ3Jvd2luZyB5b3VyIHByb2plY3QgYXMgcmVjb21tZW5kZWQgaW4gW3RoZSBvZmZpY2lhbFxuZ3VpZGVdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnLyksIHRoaXMgc2hvdWxkIG5vdCBjb21lIGluIGhhbmR5IGluIG1vc3RcbnByb2plY3RzLiBVc3VhbGx5IGl0IGlzIGVhc2llciB0byBqdXN0IHBhc3MgdGhpbmdzIGluIGFzIGFyZ3VtZW50cy5cblxuKipOb3RlOioqIFNvbWUgZm9sa3MgaGF2ZSB0cmllZCB0byB1c2UgdGhpcyB0byBtYWtlIOKAnGNvbXBvbmVudHPigJ0gaW4gdGhlaXJcbnByb2plY3RzLCBidXQgdGhleSBydW4gaW50byB0aGUgZmFjdCB0aGF0IGNvbXBvbmVudHMgYXJlIG9iamVjdHMuIEJvdGggYXJlXG5sb2NhbCBtdXRhYmxlIHN0YXRlIHdpdGggbWV0aG9kcy4gR3JlbiBpcyBub3QgYW4gb2JqZWN0LW9yaWVudGVkIGxhbmd1YWdlLCBzb1xueW91IHJ1biBpbnRvIGFsbCBzb3J0cyBvZiBmcmljdGlvbiBpZiB5b3UgdHJ5IHRvIHVzZSBpdCBsaWtlIG9uZS4gSSBkZWZpbml0ZWx5XG5yZWNvbW1lbmQgYWdhaW5zdCBnb2luZyBkb3duIHRoYXQgcGF0aCEgSW5zdGVhZCwgbWFrZSB0aGUgc2ltcGxlc3QgZnVuY3Rpb25cbnBvc3NpYmxlIGFuZCByZXBlYXQuXG4tfVxubWFwIDogKGEgLT4gbXNnKSAtPiBIdG1sIGEgLT4gSHRtbCBtc2dcbm1hcCA9XG4gIFZpcnR1YWxEb20ubWFwXG5cblxuXG4tLSBTRUNUSU9OU1xuXG5cbnstfCBEZWZpbmVzIGEgc2VjdGlvbiBpbiBhIGRvY3VtZW50LlxuLX1cbnNlY3Rpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc2VjdGlvbiA9XG4gIG5vZGUgXCJzZWN0aW9uXCJcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gdGhhdCBjb250YWlucyBvbmx5IG5hdmlnYXRpb24gbGlua3MuXG4tfVxubmF2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm5hdiA9XG4gIG5vZGUgXCJuYXZcIlxuXG5cbnstfCBEZWZpbmVzIHNlbGYtY29udGFpbmVkIGNvbnRlbnQgdGhhdCBjb3VsZCBleGlzdCBpbmRlcGVuZGVudGx5IG9mIHRoZSByZXN0XG5vZiB0aGUgY29udGVudC5cbi19XG5hcnRpY2xlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFydGljbGUgPVxuICBub2RlIFwiYXJ0aWNsZVwiXG5cblxuey18IERlZmluZXMgc29tZSBjb250ZW50IGxvb3NlbHkgcmVsYXRlZCB0byB0aGUgcGFnZSBjb250ZW50LiBJZiBpdCBpcyByZW1vdmVkLFxudGhlIHJlbWFpbmluZyBjb250ZW50IHN0aWxsIG1ha2VzIHNlbnNlLlxuLX1cbmFzaWRlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFzaWRlID1cbiAgbm9kZSBcImFzaWRlXCJcblxuXG57LXwtfVxuaDEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDEgPVxuICBub2RlIFwiaDFcIlxuXG5cbnstfC19XG5oMiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oMiA9XG4gIG5vZGUgXCJoMlwiXG5cblxuey18LX1cbmgzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmgzID1cbiAgbm9kZSBcImgzXCJcblxuXG57LXwtfVxuaDQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDQgPVxuICBub2RlIFwiaDRcIlxuXG5cbnstfC19XG5oNSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oNSA9XG4gIG5vZGUgXCJoNVwiXG5cblxuey18LX1cbmg2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmg2ID1cbiAgbm9kZSBcImg2XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgaGVhZGVyIG9mIGEgcGFnZSBvciBzZWN0aW9uLiBJdCBvZnRlbiBjb250YWlucyBhIGxvZ28sIHRoZVxudGl0bGUgb2YgdGhlIHdlYiBzaXRlLCBhbmQgYSBuYXZpZ2F0aW9uYWwgdGFibGUgb2YgY29udGVudC5cbi19XG5oZWFkZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaGVhZGVyID1cbiAgbm9kZSBcImhlYWRlclwiXG5cblxuey18IERlZmluZXMgdGhlIGZvb3RlciBmb3IgYSBwYWdlIG9yIHNlY3Rpb24uIEl0IG9mdGVuIGNvbnRhaW5zIGEgY29weXJpZ2h0XG5ub3RpY2UsIHNvbWUgbGlua3MgdG8gbGVnYWwgaW5mb3JtYXRpb24sIG9yIGFkZHJlc3NlcyB0byBnaXZlIGZlZWRiYWNrLlxuLX1cbmZvb3RlciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5mb290ZXIgPVxuICBub2RlIFwiZm9vdGVyXCJcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gY29udGFpbmluZyBjb250YWN0IGluZm9ybWF0aW9uLiAtfVxuYWRkcmVzcyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hZGRyZXNzID1cbiAgbm9kZSBcImFkZHJlc3NcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYWluIG9yIGltcG9ydGFudCBjb250ZW50IGluIHRoZSBkb2N1bWVudC4gVGhlcmUgaXMgb25seSBvbmVcbmBtYWluYCBlbGVtZW50IGluIHRoZSBkb2N1bWVudC5cbi19XG5tYWluXyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tYWluXyA9XG4gIG5vZGUgXCJtYWluXCJcblxuXG4tLSBHUk9VUElORyBDT05URU5UXG5cbnstfCBEZWZpbmVzIGEgcG9ydGlvbiB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSBwYXJhZ3JhcGguIC19XG5wIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnAgPVxuICBub2RlIFwicFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0aGVtYXRpYyBicmVhayBiZXR3ZWVuIHBhcmFncmFwaHMgb2YgYSBzZWN0aW9uIG9yIGFydGljbGUgb3JcbmFueSBsb25nZXIgY29udGVudC5cbi19XG5ociA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ociA9XG4gIG5vZGUgXCJoclwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGl0cyBjb250ZW50IGlzIHByZWZvcm1hdHRlZCBhbmQgdGhhdCB0aGlzIGZvcm1hdCBtdXN0IGJlXG5wcmVzZXJ2ZWQuXG4tfVxucHJlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnByZSA9XG4gIG5vZGUgXCJwcmVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29udGVudCB0aGF0IGlzIHF1b3RlZCBmcm9tIGFub3RoZXIgc291cmNlLiAtfVxuYmxvY2txdW90ZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ibG9ja3F1b3RlID1cbiAgbm9kZSBcImJsb2NrcXVvdGVcIlxuXG5cbnstfCBEZWZpbmVzIGFuIG9yZGVyZWQgbGlzdCBvZiBpdGVtcy4gLX1cbm9sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9sID1cbiAgbm9kZSBcIm9sXCJcblxuXG57LXwgRGVmaW5lcyBhbiB1bm9yZGVyZWQgbGlzdCBvZiBpdGVtcy4gLX1cbnVsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnVsID1cbiAgbm9kZSBcInVsXCJcblxuXG57LXwgRGVmaW5lcyBhIGl0ZW0gb2YgYW4gZW51bWVyYXRpb24gbGlzdC4gLX1cbmxpIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmxpID1cbiAgbm9kZSBcImxpXCJcblxuXG57LXwgRGVmaW5lcyBhIGRlZmluaXRpb24gbGlzdCwgdGhhdCBpcywgYSBsaXN0IG9mIHRlcm1zIGFuZCB0aGVpciBhc3NvY2lhdGVkXG5kZWZpbml0aW9ucy5cbi19XG5kbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kbCA9XG4gIG5vZGUgXCJkbFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0ZXJtIGRlZmluZWQgYnkgdGhlIG5leHQgYGRkYC4gLX1cbmR0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmR0ID1cbiAgbm9kZSBcImR0XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgdGVybXMgaW1tZWRpYXRlbHkgbGlzdGVkIGJlZm9yZSBpdC4gLX1cbmRkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRkID1cbiAgbm9kZSBcImRkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGZpZ3VyZSBpbGx1c3RyYXRlZCBhcyBwYXJ0IG9mIHRoZSBkb2N1bWVudC4gLX1cbmZpZ3VyZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5maWd1cmUgPVxuICBub2RlIFwiZmlndXJlXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgbGVnZW5kIG9mIGEgZmlndXJlLiAtfVxuZmlnY2FwdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5maWdjYXB0aW9uID1cbiAgbm9kZSBcImZpZ2NhcHRpb25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgZ2VuZXJpYyBjb250YWluZXIgd2l0aCBubyBzcGVjaWFsIG1lYW5pbmcuIC19XG5kaXYgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGl2ID1cbiAgbm9kZSBcImRpdlwiXG5cblxuLS0gVEVYVCBMRVZFTCBTRU1BTlRJQ1xuXG57LXwgUmVwcmVzZW50cyBhIGh5cGVybGluaywgbGlua2luZyB0byBhbm90aGVyIHJlc291cmNlLiAtfVxuYSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hID1cbiAgbm9kZSBcImFcIlxuXG5cbnstfCBSZXByZXNlbnRzIGVtcGhhc2l6ZWQgdGV4dCwgbGlrZSBhIHN0cmVzcyBhY2NlbnQuIC19XG5lbSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5lbSA9XG4gIG5vZGUgXCJlbVwiXG5cblxuey18IFJlcHJlc2VudHMgZXNwZWNpYWxseSBpbXBvcnRhbnQgdGV4dC4gLX1cbnN0cm9uZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdHJvbmcgPVxuICBub2RlIFwic3Ryb25nXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNpZGUgY29tbWVudCwgdGhhdCBpcywgdGV4dCBsaWtlIGEgZGlzY2xhaW1lciBvciBhXG5jb3B5cmlnaHQsIHdoaWNoIGlzIG5vdCBlc3NlbnRpYWwgdG8gdGhlIGNvbXByZWhlbnNpb24gb2YgdGhlIGRvY3VtZW50LlxuLX1cbnNtYWxsIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNtYWxsID1cbiAgbm9kZSBcInNtYWxsXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb250ZW50IHRoYXQgaXMgbm8gbG9uZ2VyIGFjY3VyYXRlIG9yIHJlbGV2YW50LiAtfVxucyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zID1cbiAgbm9kZSBcInNcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0aXRsZSBvZiBhIHdvcmsuIC19XG5jaXRlIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNpdGUgPVxuICBub2RlIFwiY2l0ZVwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gaW5saW5lIHF1b3RhdGlvbi4gLX1cbnEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucSA9XG4gIG5vZGUgXCJxXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRlcm0gd2hvc2UgZGVmaW5pdGlvbiBpcyBjb250YWluZWQgaW4gaXRzIG5lYXJlc3QgYW5jZXN0b3JcbmNvbnRlbnQuXG4tfVxuZGZuIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRmbiA9XG4gIG5vZGUgXCJkZm5cIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGFiYnJldmlhdGlvbiBvciBhbiBhY3JvbnltOyB0aGUgZXhwYW5zaW9uIG9mIHRoZVxuYWJicmV2aWF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBpbiB0aGUgdGl0bGUgYXR0cmlidXRlLlxuLX1cbmFiYnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYWJiciA9XG4gIG5vZGUgXCJhYmJyXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGRhdGUgYW5kIHRpbWUgdmFsdWU7IHRoZSBtYWNoaW5lLXJlYWRhYmxlIGVxdWl2YWxlbnQgY2FuIGJlXG5yZXByZXNlbnRlZCBpbiB0aGUgZGF0ZXRpbWUgYXR0cmlidXRlLlxuLX1cbnRpbWUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGltZSA9XG4gIG5vZGUgXCJ0aW1lXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb21wdXRlciBjb2RlLiAtfVxuY29kZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jb2RlID1cbiAgbm9kZSBcImNvZGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdmFyaWFibGUuIFNwZWNpZmljIGNhc2VzIHdoZXJlIGl0IHNob3VsZCBiZSB1c2VkIGluY2x1ZGUgYW5cbmFjdHVhbCBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbiBvciBwcm9ncmFtbWluZyBjb250ZXh0LCBhbiBpZGVudGlmaWVyXG5yZXByZXNlbnRpbmcgYSBjb25zdGFudCwgYSBzeW1ib2wgaWRlbnRpZnlpbmcgYSBwaHlzaWNhbCBxdWFudGl0eSwgYSBmdW5jdGlvblxucGFyYW1ldGVyLCBvciBhIG1lcmUgcGxhY2Vob2xkZXIgaW4gcHJvc2UuXG4tfVxudmFyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnZhciA9XG4gIG5vZGUgXCJ2YXJcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBvdXRwdXQgb2YgYSBwcm9ncmFtIG9yIGEgY29tcHV0ZXIuIC19XG5zYW1wIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNhbXAgPVxuICBub2RlIFwic2FtcFwiXG5cblxuey18IFJlcHJlc2VudHMgdXNlciBpbnB1dCwgb2Z0ZW4gZnJvbSB0aGUga2V5Ym9hcmQsIGJ1dCBub3QgbmVjZXNzYXJpbHk7IGl0XG5tYXkgcmVwcmVzZW50IG90aGVyIGlucHV0LCBsaWtlIHRyYW5zY3JpYmVkIHZvaWNlIGNvbW1hbmRzLlxuLX1cbmtiZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5rYmQgPVxuICBub2RlIFwia2JkXCJcblxuXG57LXwgUmVwcmVzZW50IGEgc3Vic2NyaXB0LiAtfVxuc3ViIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnN1YiA9XG4gIG5vZGUgXCJzdWJcIlxuXG5cbnstfCBSZXByZXNlbnQgYSBzdXBlcnNjcmlwdC4gLX1cbnN1cCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdXAgPVxuICBub2RlIFwic3VwXCJcblxuXG57LXwgUmVwcmVzZW50cyBzb21lIHRleHQgaW4gYW4gYWx0ZXJuYXRlIHZvaWNlIG9yIG1vb2QsIG9yIGF0IGxlYXN0IG9mXG5kaWZmZXJlbnQgcXVhbGl0eSwgc3VjaCBhcyBhIHRheG9ub21pYyBkZXNpZ25hdGlvbiwgYSB0ZWNobmljYWwgdGVybSwgYW5cbmlkaW9tYXRpYyBwaHJhc2UsIGEgdGhvdWdodCwgb3IgYSBzaGlwIG5hbWUuXG4tfVxuaSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pID1cbiAgbm9kZSBcImlcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGV4dCB3aGljaCB0byB3aGljaCBhdHRlbnRpb24gaXMgZHJhd24gZm9yIHV0aWxpdGFyaWFuXG5wdXJwb3Nlcy4gSXQgZG9lc24ndCBjb252ZXkgZXh0cmEgaW1wb3J0YW5jZSBhbmQgZG9lc24ndCBpbXBseSBhbiBhbHRlcm5hdGVcbnZvaWNlLlxuLX1cbmIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYiA9XG4gIG5vZGUgXCJiXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIG5vbi10ZXh0dWFsIGFubm90YXRpb24gZm9yIHdoaWNoIHRoZSBjb252ZW50aW9uYWxcbnByZXNlbnRhdGlvbiBpcyB1bmRlcmxpbmluZywgc3VjaCBsYWJlbGluZyB0aGUgdGV4dCBhcyBiZWluZyBtaXNzcGVsdCBvclxubGFiZWxpbmcgYSBwcm9wZXIgbmFtZSBpbiBDaGluZXNlIHRleHQuXG4tfVxudSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG51ID1cbiAgbm9kZSBcInVcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgaGlnaGxpZ2h0ZWQgZm9yIHJlZmVyZW5jZSBwdXJwb3NlcywgdGhhdCBpcyBmb3IgaXRzXG5yZWxldmFuY2UgaW4gYW5vdGhlciBjb250ZXh0LlxuLX1cbm1hcmsgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWFyayA9XG4gIG5vZGUgXCJtYXJrXCJcblxuXG57LXwgUmVwcmVzZW50cyBjb250ZW50IHRvIGJlIG1hcmtlZCB3aXRoIHJ1YnkgYW5ub3RhdGlvbnMsIHNob3J0IHJ1bnMgb2YgdGV4dFxucHJlc2VudGVkIGFsb25nc2lkZSB0aGUgdGV4dC4gVGhpcyBpcyBvZnRlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggRWFzdCBBc2lhblxubGFuZ3VhZ2Ugd2hlcmUgdGhlIGFubm90YXRpb25zIGFjdCBhcyBhIGd1aWRlIGZvciBwcm9udW5jaWF0aW9uLCBsaWtlIHRoZVxuSmFwYW5lc2UgZnVyaWdhbmEuXG4tfVxucnVieSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ydWJ5ID1cbiAgbm9kZSBcInJ1YnlcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0ZXh0IG9mIGEgcnVieSBhbm5vdGF0aW9uLiAtfVxucnQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnQgPVxuICBub2RlIFwicnRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHBhcmVudGhlc2lzIGFyb3VuZCBhIHJ1YnkgYW5ub3RhdGlvbiwgdXNlZCB0byBkaXNwbGF5IHRoZVxuYW5ub3RhdGlvbiBpbiBhbiBhbHRlcm5hdGUgd2F5IGJ5IGJyb3dzZXJzIG5vdCBzdXBwb3J0aW5nIHRoZSBzdGFuZGFyZCBkaXNwbGF5XG5mb3IgYW5ub3RhdGlvbnMuXG4tfVxucnAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnAgPVxuICBub2RlIFwicnBcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgdGhhdCBtdXN0IGJlIGlzb2xhdGVkIGZyb20gaXRzIHN1cnJvdW5kaW5nIGZvclxuYmlkaXJlY3Rpb25hbCB0ZXh0IGZvcm1hdHRpbmcuIEl0IGFsbG93cyBlbWJlZGRpbmcgYSBzcGFuIG9mIHRleHQgd2l0aCBhXG5kaWZmZXJlbnQsIG9yIHVua25vd24sIGRpcmVjdGlvbmFsaXR5LlxuLX1cbmJkaSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iZGkgPVxuICBub2RlIFwiYmRpXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uYWxpdHkgb2YgaXRzIGNoaWxkcmVuLCBpbiBvcmRlciB0byBleHBsaWNpdGx5XG5vdmVycmlkZSB0aGUgVW5pY29kZSBiaWRpcmVjdGlvbmFsIGFsZ29yaXRobS5cbi19XG5iZG8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmRvID1cbiAgbm9kZSBcImJkb1wiXG5cblxuey18IFJlcHJlc2VudHMgdGV4dCB3aXRoIG5vIHNwZWNpZmljIG1lYW5pbmcuIFRoaXMgaGFzIHRvIGJlIHVzZWQgd2hlbiBubyBvdGhlclxudGV4dC1zZW1hbnRpYyBlbGVtZW50IGNvbnZleXMgYW4gYWRlcXVhdGUgbWVhbmluZywgd2hpY2gsIGluIHRoaXMgY2FzZSwgaXNcbm9mdGVuIGJyb3VnaHQgYnkgZ2xvYmFsIGF0dHJpYnV0ZXMgbGlrZSBgY2xhc3NgLCBgbGFuZ2AsIG9yIGBkaXJgLlxuLX1cbnNwYW4gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3BhbiA9XG4gIG5vZGUgXCJzcGFuXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGxpbmUgYnJlYWsuIC19XG5iciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5iciA9XG4gIG5vZGUgXCJiclwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5LCB0aGF0IGlzIGEgc3VnZ2VzdGVkIHBvaW50IGZvclxud3JhcHBpbmcgdGV4dCBpbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5IG9mIHRleHQgc3BsaXQgb24gc2V2ZXJhbCBsaW5lcy5cbi19XG53YnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xud2JyID1cbiAgbm9kZSBcIndiclwiXG5cblxuLS0gRURJVFNcblxuey18IERlZmluZXMgYW4gYWRkaXRpb24gdG8gdGhlIGRvY3VtZW50LiAtfVxuaW5zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmlucyA9XG4gIG5vZGUgXCJpbnNcIlxuXG5cbnstfCBEZWZpbmVzIGEgcmVtb3ZhbCBmcm9tIHRoZSBkb2N1bWVudC4gLX1cbmRlbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZWwgPVxuICBub2RlIFwiZGVsXCJcblxuXG4tLSBFTUJFRERFRCBDT05URU5UXG5cbnstfCBSZXByZXNlbnRzIGFuIGltYWdlLiAtfVxuaW1nIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmltZyA9XG4gIG5vZGUgXCJpbWdcIlxuXG5cbnstfCBFbWJlZGRlZCBhbiBIVE1MIGRvY3VtZW50LiAtfVxuaWZyYW1lIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmlmcmFtZSA9XG4gIG5vZGUgXCJpZnJhbWVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgaW50ZWdyYXRpb24gcG9pbnQgZm9yIGFuIGV4dGVybmFsLCBvZnRlbiBub24tSFRNTCxcbmFwcGxpY2F0aW9uIG9yIGludGVyYWN0aXZlIGNvbnRlbnQuXG4tfVxuZW1iZWQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZW1iZWQgPVxuICBub2RlIFwiZW1iZWRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGV4dGVybmFsIHJlc291cmNlLCB3aGljaCBpcyB0cmVhdGVkIGFzIGFuIGltYWdlLCBhbiBIVE1MXG5zdWItZG9jdW1lbnQsIG9yIGFuIGV4dGVybmFsIHJlc291cmNlIHRvIGJlIHByb2Nlc3NlZCBieSBhIHBsdWctaW4uXG4tfVxub2JqZWN0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm9iamVjdCA9XG4gIG5vZGUgXCJvYmplY3RcIlxuXG5cbnstfCBEZWZpbmVzIHBhcmFtZXRlcnMgZm9yIHVzZSBieSBwbHVnLWlucyBpbnZva2VkIGJ5IGBvYmplY3RgIGVsZW1lbnRzLiAtfVxucGFyYW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucGFyYW0gPVxuICBub2RlIFwicGFyYW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdmlkZW8sIHRoZSBhc3NvY2lhdGVkIGF1ZGlvIGFuZCBjYXB0aW9ucywgYW5kIGNvbnRyb2xzLiAtfVxudmlkZW8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudmlkZW8gPVxuICBub2RlIFwidmlkZW9cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc291bmQgb3IgYXVkaW8gc3RyZWFtLiAtfVxuYXVkaW8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYXVkaW8gPVxuICBub2RlIFwiYXVkaW9cIlxuXG5cbnstfCBBbGxvd3MgYXV0aG9ycyB0byBzcGVjaWZ5IGFsdGVybmF0aXZlIG1lZGlhIHJlc291cmNlcyBmb3IgbWVkaWEgZWxlbWVudHNcbmxpa2UgYHZpZGVvYCBvciBgYXVkaW9gLlxuLX1cbnNvdXJjZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zb3VyY2UgPVxuICBub2RlIFwic291cmNlXCJcblxuXG57LXwgQWxsb3dzIGF1dGhvcnMgdG8gc3BlY2lmeSB0aW1lZCB0ZXh0IHRyYWNrIGZvciBtZWRpYSBlbGVtZW50cyBsaWtlIGB2aWRlb2Bcbm9yIGBhdWRpb2AuXG4tfVxudHJhY2sgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudHJhY2sgPVxuICBub2RlIFwidHJhY2tcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgYml0bWFwIGFyZWEgZm9yIGdyYXBoaWNzIHJlbmRlcmluZy4gLX1cbmNhbnZhcyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jYW52YXMgPVxuICBub2RlIFwiY2FudmFzXCJcblxuXG57LXwgRGVmaW5lcyBhIG1hdGhlbWF0aWNhbCBmb3JtdWxhLiAtfVxubWF0aCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tYXRoID1cbiAgbm9kZSBcIm1hdGhcIlxuXG5cbi0tIFRBQlVMQVIgREFUQVxuXG57LXwgUmVwcmVzZW50cyBkYXRhIHdpdGggbW9yZSB0aGFuIG9uZSBkaW1lbnNpb24uIC19XG50YWJsZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50YWJsZSA9XG4gIG5vZGUgXCJ0YWJsZVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHRpdGxlIG9mIGEgdGFibGUuIC19XG5jYXB0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNhcHRpb24gPVxuICBub2RlIFwiY2FwdGlvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2Ygb25lIG9yIG1vcmUgY29sdW1ucyBvZiBhIHRhYmxlLiAtfVxuY29sZ3JvdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29sZ3JvdXAgPVxuICBub2RlIFwiY29sZ3JvdXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29sdW1uIG9mIGEgdGFibGUuIC19XG5jb2wgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29sID1cbiAgbm9kZSBcImNvbFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbmNyZXRlIGRhdGEgb2YgYSB0YWJsZS5cbi19XG50Ym9keSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50Ym9keSA9XG4gIG5vZGUgXCJ0Ym9keVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbHVtbiBsYWJlbHMgb2YgYSB0YWJsZS5cbi19XG50aGVhZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50aGVhZCA9XG4gIG5vZGUgXCJ0aGVhZFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGJsb2NrIG9mIHJvd3MgdGhhdCBkZXNjcmliZXMgdGhlIGNvbHVtbiBzdW1tYXJpZXMgb2YgYSB0YWJsZS5cbi19XG50Zm9vdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50Zm9vdCA9XG4gIG5vZGUgXCJ0Zm9vdFwiXG5cblxuey18IFJlcHJlc2VudHMgYSByb3cgb2YgY2VsbHMgaW4gYSB0YWJsZS4gLX1cbnRyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRyID1cbiAgbm9kZSBcInRyXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGRhdGEgY2VsbCBpbiBhIHRhYmxlLiAtfVxudGQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGQgPVxuICBub2RlIFwidGRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgaGVhZGVyIGNlbGwgaW4gYSB0YWJsZS4gLX1cbnRoIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRoID1cbiAgbm9kZSBcInRoXCJcblxuXG4tLSBGT1JNU1xuXG57LXwgUmVwcmVzZW50cyBhIGZvcm0sIGNvbnNpc3Rpbmcgb2YgY29udHJvbHMsIHRoYXQgY2FuIGJlIHN1Ym1pdHRlZCB0byBhXG5zZXJ2ZXIgZm9yIHByb2Nlc3NpbmcuXG4tfVxuZm9ybSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5mb3JtID1cbiAgbm9kZSBcImZvcm1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIGNvbnRyb2xzLiAtfVxuZmllbGRzZXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmllbGRzZXQgPVxuICBub2RlIFwiZmllbGRzZXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjYXB0aW9uIGZvciBhIGBmaWVsZHNldGAuIC19XG5sZWdlbmQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubGVnZW5kID1cbiAgbm9kZSBcImxlZ2VuZFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGNhcHRpb24gb2YgYSBmb3JtIGNvbnRyb2wuIC19XG5sYWJlbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5sYWJlbCA9XG4gIG5vZGUgXCJsYWJlbFwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0eXBlZCBkYXRhIGZpZWxkIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVkaXQgdGhlIGRhdGEuIC19XG5pbnB1dCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbnB1dCA9XG4gIG5vZGUgXCJpbnB1dFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBidXR0b24uIC19XG5idXR0b24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYnV0dG9uID1cbiAgbm9kZSBcImJ1dHRvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBjb250cm9sIGFsbG93aW5nIHNlbGVjdGlvbiBhbW9uZyBhIHNldCBvZiBvcHRpb25zLiAtfVxuc2VsZWN0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNlbGVjdCA9XG4gIG5vZGUgXCJzZWxlY3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIHByZWRlZmluZWQgb3B0aW9ucyBmb3Igb3RoZXIgY29udHJvbHMuIC19XG5kYXRhbGlzdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kYXRhbGlzdCA9XG4gIG5vZGUgXCJkYXRhbGlzdFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBzZXQgb2Ygb3B0aW9ucywgbG9naWNhbGx5IGdyb3VwZWQuIC19XG5vcHRncm91cCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vcHRncm91cCA9XG4gIG5vZGUgXCJvcHRncm91cFwiXG5cblxuey18IFJlcHJlc2VudHMgYW4gb3B0aW9uIGluIGEgYHNlbGVjdGAgZWxlbWVudCBvciBhIHN1Z2dlc3Rpb24gb2YgYSBgZGF0YWxpc3RgXG5lbGVtZW50LlxuLX1cbm9wdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vcHRpb24gPVxuICBub2RlIFwib3B0aW9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIG11bHRpbGluZSB0ZXh0IGVkaXQgY29udHJvbC4gLX1cbnRleHRhcmVhIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRleHRhcmVhID1cbiAgbm9kZSBcInRleHRhcmVhXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIGEgY2FsY3VsYXRpb24uIC19XG5vdXRwdXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3V0cHV0ID1cbiAgbm9kZSBcIm91dHB1dFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGNvbXBsZXRpb24gcHJvZ3Jlc3Mgb2YgYSB0YXNrLiAtfVxucHJvZ3Jlc3MgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucHJvZ3Jlc3MgPVxuICBub2RlIFwicHJvZ3Jlc3NcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2NhbGFyIG1lYXN1cmVtZW50IChvciBhIGZyYWN0aW9uYWwgdmFsdWUpLCB3aXRoaW4gYSBrbm93blxucmFuZ2UuXG4tfVxubWV0ZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWV0ZXIgPVxuICBub2RlIFwibWV0ZXJcIlxuXG5cbi0tIElOVEVSQUNUSVZFIEVMRU1FTlRTXG5cbnstfCBSZXByZXNlbnRzIGEgd2lkZ2V0IGZyb20gd2hpY2ggdGhlIHVzZXIgY2FuIG9idGFpbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG5vciBjb250cm9scy5cbi19XG5kZXRhaWxzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRldGFpbHMgPVxuICBub2RlIFwiZGV0YWlsc1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzdW1tYXJ5LCBjYXB0aW9uLCBvciBsZWdlbmQgZm9yIGEgZ2l2ZW4gYGRldGFpbHNgLiAtfVxuc3VtbWFyeSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdW1tYXJ5ID1cbiAgbm9kZSBcInN1bW1hcnlcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29tbWFuZCB0aGF0IHRoZSB1c2VyIGNhbiBpbnZva2UuIC19XG5tZW51aXRlbSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tZW51aXRlbSA9XG4gIG5vZGUgXCJtZW51aXRlbVwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaXN0IG9mIGNvbW1hbmRzLiAtfVxubWVudSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5tZW51ID1cbiAgbm9kZSBcIm1lbnVcIlxuXG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nXG4gICggc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hcFxuICAsIGNsYXNzLCBjbGFzc0xpc3QsIGlkLCB0aXRsZSwgaGlkZGVuXG4gICwgdHlwZV8sIHZhbHVlLCBjaGVja2VkLCBwbGFjZWhvbGRlciwgc2VsZWN0ZWRcbiAgLCBhY2NlcHQsIGFjY2VwdENoYXJzZXQsIGFjdGlvbiwgYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXNcbiAgLCBkaXNhYmxlZCwgZW5jdHlwZSwgbGlzdCwgbWF4bGVuZ3RoLCBtaW5sZW5ndGgsIG1ldGhvZCwgbXVsdGlwbGVcbiAgLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuICAsIG1heCwgbWluLCBzdGVwXG4gICwgY29scywgcm93cywgd3JhcFxuICAsIGhyZWYsIHRhcmdldCwgZG93bmxvYWQsIGhyZWZsYW5nLCBtZWRpYSwgcGluZywgcmVsXG4gICwgaXNtYXAsIHVzZW1hcCwgc2hhcGUsIGNvb3Jkc1xuICAsIHNyYywgaGVpZ2h0LCB3aWR0aCwgYWx0XG4gICwgYXV0b3BsYXksIGNvbnRyb2xzLCBsb29wLCBwcmVsb2FkLCBwb3N0ZXIsIGRlZmF1bHQsIGtpbmQsIHNyY2xhbmdcbiAgLCBzYW5kYm94LCBzcmNkb2NcbiAgLCByZXZlcnNlZCwgc3RhcnRcbiAgLCBhbGlnbiwgY29sc3Bhbiwgcm93c3BhbiwgaGVhZGVycywgc2NvcGVcbiAgLCBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZVxuICAsIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuICAsIGNpdGUsIGRhdGV0aW1lLCBwdWJkYXRlLCBtYW5pZmVzdFxuICApXG5cbnstfCBIZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIGF0dHJpYnV0ZXMuIFRoZXkgYXJlIG9yZ2FuaXplZCByb3VnaGx5IGJ5XG5jYXRlZ29yeS4gRWFjaCBhdHRyaWJ1dGUgaXMgbGFiZWxlZCB3aXRoIHRoZSBIVE1MIHRhZ3MgaXQgY2FuIGJlIHVzZWQgd2l0aCwgc29cbmp1c3Qgc2VhcmNoIHRoZSBwYWdlIGZvciBgdmlkZW9gIGlmIHlvdSB3YW50IHZpZGVvIHN0dWZmLlxuXG4jIyBQcmltaXRpdmVzXG5AZG9jcyBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgbWFwXG5cbiMjIFN1cGVyIENvbW1vbiBBdHRyaWJ1dGVzXG5AZG9jcyBjbGFzcywgY2xhc3NMaXN0LCBpZCwgdGl0bGUsIGhpZGRlblxuXG4jIyBJbnB1dHNcbkBkb2NzIHR5cGVfLCB2YWx1ZSwgY2hlY2tlZCwgcGxhY2Vob2xkZXIsIHNlbGVjdGVkXG5cbiMjIElucHV0IEhlbHBlcnNcbkBkb2NzIGFjY2VwdCwgYWNjZXB0Q2hhcnNldCwgYWN0aW9uLCBhdXRvY29tcGxldGUsIGF1dG9mb2N1cywgZGlzYWJsZWQsIGVuY3R5cGUsIGxpc3QsIG1heGxlbmd0aCwgbWlubGVuZ3RoLCBtZXRob2QsIG11bHRpcGxlLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuXG4jIyBJbnB1dCBSYW5nZXNcbkBkb2NzIG1heCwgbWluLCBzdGVwXG5cbiMjIElucHV0IFRleHQgQXJlYXNcbkBkb2NzIGNvbHMsIHJvd3MsIHdyYXBcblxuIyMgTGlua3MgYW5kIEFyZWFzXG5AZG9jcyBocmVmLCB0YXJnZXQsIGRvd25sb2FkLCBocmVmbGFuZywgbWVkaWEsIHBpbmcsIHJlbFxuXG4jIyBNYXBzXG5AZG9jcyBpc21hcCwgdXNlbWFwLCBzaGFwZSwgY29vcmRzXG5cblxuIyMgRW1iZWRkZWQgQ29udGVudFxuQGRvY3Mgc3JjLCBoZWlnaHQsIHdpZHRoLCBhbHRcblxuIyMgQXVkaW8gYW5kIFZpZGVvXG5AZG9jcyBhdXRvcGxheSwgY29udHJvbHMsIGxvb3AsIHByZWxvYWQsIHBvc3RlciwgZGVmYXVsdCwga2luZCwgc3JjbGFuZ1xuXG4jIyBpZnJhbWVzXG5AZG9jcyBzYW5kYm94LCBzcmNkb2NcblxuIyMgT3JkZXJlZCBMaXN0c1xuQGRvY3MgcmV2ZXJzZWQsIHN0YXJ0XG5cbiMjIFRhYmxlc1xuQGRvY3MgYWxpZ24sIGNvbHNwYW4sIHJvd3NwYW4sIGhlYWRlcnMsIHNjb3BlXG5cbiMjIExlc3MgQ29tbW9uIEdsb2JhbCBBdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gYW55IEhUTUwgdGFnIGJ1dCBhcmUgbGVzcyBjb21tb25seSB1c2VkLlxuXG5AZG9jcyBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZSxcbiAgICAgIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuXG4jIyBNaXNjZWxsYW5lb3VzXG5AZG9jcyBjaXRlLCBkYXRldGltZSwgcHViZGF0ZSwgbWFuaWZlc3RcblxuLX1cblxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpzb25cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuLS0gVGhpcyBsaWJyYXJ5IGRvZXMgbm90IGluY2x1ZGUgbG93LCBoaWdoLCBvciBvcHRpbXVtIGJlY2F1c2UgdGhlIGlkZWEgb2YgYVxuLS0gYG1ldGVyYCBpcyBqdXN0IHRvbyBjcmF6eS5cblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIGRpdlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZC1jb2xvclwiIFwicmVkXCJcbiAgICAgICAgLCBzdHlsZSBcImhlaWdodFwiIFwiOTBweFwiXG4gICAgICAgICwgc3R5bGUgXCJ3aWR0aFwiIFwiMTAwJVwiXG4gICAgICAgIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCJcbiAgICAgICAgXVxuXG5UaGVyZSBpcyBubyBgSHRtbC5TdHlsZXNgIG1vZHVsZSBiZWNhdXNlIGJlc3QgcHJhY3RpY2VzIGZvciB3b3JraW5nIHdpdGggSFRNTFxuc3VnZ2VzdCB0aGF0IHRoaXMgc2hvdWxkIHByaW1hcmlseSBiZSBzcGVjaWZpZWQgaW4gQ1NTIGZpbGVzLiBTbyB0aGUgZ2VuZXJhbFxucmVjb21tZW5kYXRpb24gaXMgdG8gdXNlIHRoaXMgZnVuY3Rpb24gbGlnaHRseS5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBWaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IFRoaXMgZnVuY3Rpb24gbWFrZXMgaXQgZWFzaWVyIHRvIGJ1aWxkIGEgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIGF0dHJpYnV0ZS5cbkVhY2ggY2xhc3MgY2FuIGVhc2lseSBiZSBhZGRlZCBhbmQgcmVtb3ZlZCBkZXBlbmRpbmcgb24gdGhlIGJvb2xlYW4gdmFsdWUgaXRcbmlzIHBhaXJlZCB3aXRoLiBGb3IgZXhhbXBsZSwgbWF5YmUgd2Ugd2FudCBhIHdheSB0byB2aWV3IG5vdGljZXM6XG5cbiAgICB2aWV3Tm90aWNlIDogTm90aWNlIC0+IEh0bWwgbXNnXG4gICAgdmlld05vdGljZSBub3RpY2UgPVxuICAgICAgZGl2XG4gICAgICAgIFsgY2xhc3NMaXN0XG4gICAgICAgICAgICBbIHsgY2xhc3MgPSBcIm5vdGljZVwiLCBlbmFibGVkID0gVHJ1ZSB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1pbXBvcnRhbnRcIiwgZW5hYmxlZCA9IG5vdGljZS5pc0ltcG9ydGFudCB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1zZWVuXCIsIGVuYWJsZWQgPSBub3RpY2UuaXNTZWVuIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgbm90aWNlLmNvbnRlbnQgXVxuXG4qKk5vdGU6KiogWW91IGNhbiBoYXZlIGFzIG1hbnkgYGNsYXNzYCBhbmQgYGNsYXNzTGlzdGAgYXR0cmlidXRlcyBhcyB5b3Ugd2FudC5cblRoZXkgYWxsIGdldCBhcHBsaWVkLCBzbyBpZiB5b3Ugc2F5IGBbIGNsYXNzIFwibm90aWNlXCIsIGNsYXNzIFwibm90aWNlLXNlZW5cIiBdYFxueW91IHdpbGwgZ2V0IGJvdGggY2xhc3NlcyFcbi19XG5jbGFzc0xpc3QgOiBBcnJheSB7IGNsYXNzIDogU3RyaW5nLCBlbmFibGVkIDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbmNsYXNzTGlzdCBjbGFzc2VzID1cbiAgY2xhc3Nlc1xuICAgIHw+IEFycmF5LmtlZXBJZiAuZW5hYmxlZFxuICAgIHw+IEFycmF5Lm1hcCAuY2xhc3NcbiAgICB8PiBTdHJpbmcuam9pbiBcIiBcIlxuICAgIHw+IGNsYXNzXG5cblxuXG4tLSBDVVNUT00gQVRUUklCVVRFU1xuXG5cbnstfCBDcmVhdGUgKnByb3BlcnRpZXMqLCBsaWtlIHNheWluZyBgZG9tTm9kZS5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpblxuSmF2YVNjcmlwdC5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIGNsYXNzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBjbGFzcyBuYW1lID1cbiAgICAgIHByb3BlcnR5IFwiY2xhc3NOYW1lXCIgKEVuY29kZS5zdHJpbmcgbmFtZSlcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSA9XG4gIFZpcnR1YWxEb20ucHJvcGVydHlcblxuXG5zdHJpbmdQcm9wZXJ0eSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RyaW5nUHJvcGVydHkga2V5IHN0cmluZyA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5zdHJpbmcgc3RyaW5nKVxuXG5cbmJvb2xQcm9wZXJ0eSA6IFN0cmluZyAtPiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmJvb2xQcm9wZXJ0eSBrZXkgYm9vbCA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5ib29sIGJvb2wpXG5cblxuey18IENyZWF0ZSAqYXR0cmlidXRlcyosIGxpa2Ugc2F5aW5nIGBkb21Ob2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ3JlZXRpbmcnKWBcbmluIEphdmFTY3JpcHQuXG5cbiAgICBjbGFzcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgY2xhc3MgbmFtZSA9XG4gICAgICBhdHRyaWJ1dGUgXCJjbGFzc1wiIG5hbWVcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxuYXR0cmlidXRlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGUgPVxuICBWaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGFuIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gQXR0cmlidXRlIGEgLT4gQXR0cmlidXRlIG1zZ1xubWFwID1cbiAgVmlydHVhbERvbS5tYXBBdHRyaWJ1dGVcblxuXG5cbi0tIEdMT0JBTCBBVFRSSUJVVEVTXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cblxuKipOb3RlOioqIFlvdSBjYW4gaGF2ZSBhcyBtYW55IGBjbGFzc2AgYW5kIGBjbGFzc0xpc3RgIGF0dHJpYnV0ZXMgYXMgeW91IHdhbnQuXG5UaGV5IGFsbCBnZXQgYXBwbGllZCwgc28gaWYgeW91IHNheSBgWyBjbGFzcyBcIm5vdGljZVwiLCBjbGFzcyBcIm5vdGljZS1zZWVuXCIgXWBcbnlvdSB3aWxsIGdldCBib3RoIGNsYXNzZXMhXG4tfVxuY2xhc3MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2xhc3MgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImNsYXNzTmFtZVwiXG5cblxuey18IEluZGljYXRlcyB0aGUgcmVsZXZhbmNlIG9mIGFuIGVsZW1lbnQuIC19XG5oaWRkZW4gOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmhpZGRlbiA9XG4gIGJvb2xQcm9wZXJ0eSBcImhpZGRlblwiXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgYSBzcGVjaWZpYyBlbGVtZW50LiBUaGUgdmFsdWUgb2YgdGhpc1xuYXR0cmlidXRlIG11c3QgYmUgdW5pcXVlLlxuLX1cbmlkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmlkID1cbiAgc3RyaW5nUHJvcGVydHkgXCJpZFwiXG5cblxuey18IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIGEgdG9vbHRpcCB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGVsZW1lbnQuIC19XG50aXRsZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50aXRsZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidGl0bGVcIlxuXG5cblxuLS0gTEVTUyBDT01NT04gR0xPQkFMIEFUVFJJQlVURVNcblxuXG57LXwgRGVmaW5lcyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIGFjdGl2YXRlIG9yIGFkZCBmb2N1cyB0byB0aGUgZWxlbWVudC4gLX1cbmFjY2Vzc2tleSA6IENoYXIgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXNza2V5IGNoYXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2Vzc0tleVwiIChTdHJpbmcuZnJvbUNoYXIgY2hhcilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQncyBjb250ZW50IGlzIGVkaXRhYmxlLiAtfVxuY29udGVudGVkaXRhYmxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5jb250ZW50ZWRpdGFibGUgPVxuICBib29sUHJvcGVydHkgXCJjb250ZW50RWRpdGFibGVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBJRCBvZiBhIGBtZW51YCBlbGVtZW50IHdoaWNoIHdpbGwgc2VydmUgYXMgdGhlIGVsZW1lbnQnc1xuY29udGV4dCBtZW51LlxuLX1cbmNvbnRleHRtZW51IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRleHRtZW51ID1cbiAgYXR0cmlidXRlIFwiY29udGV4dG1lbnVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSB0ZXh0IGRpcmVjdGlvbi4gQWxsb3dlZCB2YWx1ZXMgYXJlIGx0ciAoTGVmdC1Uby1SaWdodCkgb3IgcnRsXG4oUmlnaHQtVG8tTGVmdCkuXG4tfVxuZGlyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRpciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZGlyXCJcblxuXG57LXwgRGVmaW5lcyB3aGV0aGVyIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkLiAtfVxuZHJhZ2dhYmxlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyYWdnYWJsZSA9XG4gIGF0dHJpYnV0ZSBcImRyYWdnYWJsZVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGFjY2VwdCB0aGUgZHJvcHBpbmcgb2YgY29udGVudCBvbiBpdC4gLX1cbmRyb3B6b25lIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyb3B6b25lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkcm9wem9uZVwiXG5cblxuey18LX1cbml0ZW1wcm9wIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbml0ZW1wcm9wID1cbiAgYXR0cmlidXRlIFwiaXRlbXByb3BcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBsYW5ndWFnZSB1c2VkIGluIHRoZSBlbGVtZW50LiAtfVxubGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJsYW5nXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgc3BlbGwgY2hlY2tpbmcgaXMgYWxsb3dlZCBmb3IgdGhlIGVsZW1lbnQuIC19XG5zcGVsbGNoZWNrIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5zcGVsbGNoZWNrID1cbiAgYm9vbFByb3BlcnR5IFwic3BlbGxjaGVja1wiXG5cblxuey18IE92ZXJyaWRlcyB0aGUgYnJvd3NlcidzIGRlZmF1bHQgdGFiIG9yZGVyIGFuZCBmb2xsb3dzIHRoZSBvbmUgc3BlY2lmaWVkXG5pbnN0ZWFkLlxuLX1cbnRhYmluZGV4IDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnRhYmluZGV4IG4gPVxuICBhdHRyaWJ1dGUgXCJ0YWJJbmRleFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gRU1CRURERUQgQ09OVEVOVFxuXG5cbnstfCBUaGUgVVJMIG9mIHRoZSBlbWJlZGRhYmxlIGNvbnRlbnQuIEZvciBgYXVkaW9gLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsXG5gaW5wdXRgLCBgc2NyaXB0YCwgYHNvdXJjZWAsIGB0cmFja2AsIGFuZCBgdmlkZW9gLlxuLX1cbnNyYyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmMgdXJsID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNcIiB1cmxcblxuXG57LXwgRGVjbGFyZSB0aGUgaGVpZ2h0IG9mIGEgYGNhbnZhc2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCwgYGlucHV0YCxcbmBvYmplY3RgLCBvciBgdmlkZW9gLlxuLX1cbmhlaWdodCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5oZWlnaHQgbiA9XG4gIGF0dHJpYnV0ZSBcImhlaWdodFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWNsYXJlIHRoZSB3aWR0aCBvZiBhIGBjYW52YXNgLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsIGBpbnB1dGAsXG5gb2JqZWN0YCwgb3IgYHZpZGVvYC5cbi19XG53aWR0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG53aWR0aCBuID1cbiAgYXR0cmlidXRlIFwid2lkdGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQWx0ZXJuYXRpdmUgdGV4dCBpbiBjYXNlIGFuIGltYWdlIGNhbid0IGJlIGRpc3BsYXllZC4gV29ya3Mgd2l0aCBgaW1nYCxcbmBhcmVhYCwgYW5kIGBpbnB1dGAuXG4tfVxuYWx0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFsdCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWx0XCJcblxuXG5cbi0tIEFVRElPIGFuZCBWSURFT1xuXG5cbnstfCBUaGUgYGF1ZGlvYCBvciBgdmlkZW9gIHNob3VsZCBwbGF5IGFzIHNvb24gYXMgcG9zc2libGUuIC19XG5hdXRvcGxheSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b3BsYXkgPVxuICBib29sUHJvcGVydHkgXCJhdXRvcGxheVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBzaG93IHBsYXliYWNrIGNvbnRyb2xzIGZvciB0aGUgYGF1ZGlvYFxub3IgYHZpZGVvYC5cbi19XG5jb250cm9scyA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuY29udHJvbHMgPVxuICBib29sUHJvcGVydHkgXCJjb250cm9sc1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBgYXVkaW9gIG9yIGB2aWRlb2Agc2hvdWxkIHN0YXJ0IHBsYXlpbmcgZnJvbSB0aGVcbnN0YXJ0IHdoZW4gaXQncyBmaW5pc2hlZC5cbi19XG5sb29wIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5sb29wID1cbiAgYm9vbFByb3BlcnR5IFwibG9vcFwiXG5cblxuey18IENvbnRyb2wgaG93IG11Y2ggb2YgYW4gYGF1ZGlvYCBvciBgdmlkZW9gIHJlc291cmNlIHNob3VsZCBiZSBwcmVsb2FkZWQuIC19XG5wcmVsb2FkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnByZWxvYWQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInByZWxvYWRcIlxuXG5cbnstfCBBIFVSTCBpbmRpY2F0aW5nIGEgcG9zdGVyIGZyYW1lIHRvIHNob3cgdW50aWwgdGhlIHVzZXIgcGxheXMgb3Igc2Vla3MgdGhlXG5gdmlkZW9gLlxuLX1cbnBvc3RlciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wb3N0ZXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBvc3RlclwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBgdHJhY2tgIHNob3VsZCBiZSBlbmFibGVkIHVubGVzcyB0aGUgdXNlcidzIHByZWZlcmVuY2VzXG5pbmRpY2F0ZSBzb21ldGhpbmcgZGlmZmVyZW50LlxuLX1cbmRlZmF1bHQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmRlZmF1bHQgPVxuICBib29sUHJvcGVydHkgXCJkZWZhdWx0XCJcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBraW5kIG9mIHRleHQgYHRyYWNrYC4gLX1cbmtpbmQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xua2luZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwia2luZFwiXG5cblxuey0tIFRPRE86IG1heWJlIHJlaW50cm9kdWNlIG9uY2UgdGhlcmUncyBhIGJldHRlciB3YXkgdG8gZGlzYW1iaWd1YXRlIGltcG9ydHNcbnstfCBTcGVjaWZpZXMgYSB1c2VyLXJlYWRhYmxlIHRpdGxlIG9mIHRoZSB0ZXh0IGB0cmFja2AuIC19XG5sYWJlbCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYWJlbCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibGFiZWxcIlxuLS19XG5cbnstfCBBIHR3byBsZXR0ZXIgbGFuZ3VhZ2UgY29kZSBpbmRpY2F0aW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgYHRyYWNrYCB0ZXh0IGRhdGEuXG4tfVxuc3JjbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmNsYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNsYW5nXCJcblxuXG5cbi0tIElGUkFNRVNcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBzZWN1cml0eSByZXN0cmljdGlvbnMgeW91J2QgbGlrZSB0byBsaWZ0IGZvciBhblxuYGlmcmFtZWAuXG4tfVxuc2FuZGJveCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zYW5kYm94ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzYW5kYm94XCJcblxuXG57LXwgQW4gSFRNTCBkb2N1bWVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGFzIHRoZSBib2R5IG9mIGFuIGBpZnJhbWVgLiBJdCB3aWxsXG5vdmVycmlkZSB0aGUgY29udGVudCBvZiB0aGUgYHNyY2AgYXR0cmlidXRlIGlmIGl0IGhhcyBiZWVuIHNwZWNpZmllZC5cbi19XG5zcmNkb2MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3JjZG9jID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNkb2NcIlxuXG5cblxuLS0gSU5QVVRcblxuXG57LXwgRGVmaW5lcyB0aGUgdHlwZSBvZiBhIGBidXR0b25gLCBgY2hlY2tib3hgLCBgaW5wdXRgLCBgZW1iZWRgLCBgbWVudWAsXG5gb2JqZWN0YCwgYHNjcmlwdGAsIGBzb3VyY2VgLCBvciBgc3R5bGVgLlxuLX1cbnR5cGVfIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnR5cGVfID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ0eXBlXCJcblxuXG57LXwgVGhlIHZhbHVlIHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGluIGEgYGJ1dHRvbmAsIGBvcHRpb25gLFxuYGlucHV0YCwgYGxpYCwgYG1ldGVyYCwgYHByb2dyZXNzYCwgb3IgYHBhcmFtYC5cbi19XG52YWx1ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidmFsdWVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9mIHR5cGUgY2hlY2tib3ggaXMgY2hlY2tlZC4gLX1cbmNoZWNrZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmNoZWNrZWQgPVxuICBib29sUHJvcGVydHkgXCJjaGVja2VkXCJcblxuXG57LXwgUHJvdmlkZXMgYSBoaW50IHRvIHRoZSB1c2VyIG9mIHdoYXQgY2FuIGJlIGVudGVyZWQgaW50byBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbnBsYWNlaG9sZGVyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBsYWNlaG9sZGVyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwbGFjZWhvbGRlclwiXG5cblxuey18IERlZmluZXMgd2hpY2ggYG9wdGlvbmAgd2lsbCBiZSBzZWxlY3RlZCBvbiBwYWdlIGxvYWQuIC19XG5zZWxlY3RlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuc2VsZWN0ZWQgPVxuICBib29sUHJvcGVydHkgXCJzZWxlY3RlZFwiXG5cblxuXG4tLSBJTlBVVCBIRUxQRVJTXG5cblxuey18IExpc3Qgb2YgdHlwZXMgdGhlIHNlcnZlciBhY2NlcHRzLCB0eXBpY2FsbHkgYSBmaWxlIHR5cGUuXG5Gb3IgYGZvcm1gIGFuZCBgaW5wdXRgLlxuLX1cbmFjY2VwdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY2NlcHQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2VwdFwiXG5cblxuey18IExpc3Qgb2Ygc3VwcG9ydGVkIGNoYXJzZXRzIGluIGEgYGZvcm1gLlxuLX1cbmFjY2VwdENoYXJzZXQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXB0Q2hhcnNldCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWNjZXB0Q2hhcnNldFwiXG5cblxuey18IFRoZSBVUkkgb2YgYSBwcm9ncmFtIHRoYXQgcHJvY2Vzc2VzIHRoZSBpbmZvcm1hdGlvbiBzdWJtaXR0ZWQgdmlhIGEgYGZvcm1gLlxuLX1cbmFjdGlvbiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY3Rpb24gdXJpID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY3Rpb25cIiB1cmlcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYSBgZm9ybWAgb3IgYW4gYGlucHV0YCBjYW4gaGF2ZSB0aGVpciB2YWx1ZXMgYXV0b21hdGljYWxseVxuY29tcGxldGVkIGJ5IHRoZSBicm93c2VyLlxuLX1cbmF1dG9jb21wbGV0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b2NvbXBsZXRlIGJvb2wgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImF1dG9jb21wbGV0ZVwiIChpZiBib29sIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIilcblxuXG57LXwgVGhlIGVsZW1lbnQgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZCBhZnRlciB0aGUgcGFnZSBsb2FkZWQuXG5Gb3IgYGJ1dHRvbmAsIGBpbnB1dGAsIGBzZWxlY3RgLCBhbmQgYHRleHRhcmVhYC5cbi19XG5hdXRvZm9jdXMgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmF1dG9mb2N1cyA9XG4gIGJvb2xQcm9wZXJ0eSBcImF1dG9mb2N1c1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBpbnRlcmFjdCB3aXRoIGEgYGJ1dHRvbmAsIGBmaWVsZHNldGAsXG5gaW5wdXRgLCBgb3B0Z3JvdXBgLCBgb3B0aW9uYCwgYHNlbGVjdGAgb3IgYHRleHRhcmVhYC5cbi19XG5kaXNhYmxlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGlzYWJsZWQgPVxuICBib29sUHJvcGVydHkgXCJkaXNhYmxlZFwiXG5cblxuey18IEhvdyBgZm9ybWAgZGF0YSBzaG91bGQgYmUgZW5jb2RlZCB3aGVuIHN1Ym1pdHRlZCB3aXRoIHRoZSBQT1NUIG1ldGhvZC5cbk9wdGlvbnMgaW5jbHVkZTogYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkLCBtdWx0aXBhcnQvZm9ybS1kYXRhLCBhbmRcbnRleHQvcGxhaW4uXG4tfVxuZW5jdHlwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5lbmN0eXBlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJlbmN0eXBlXCJcblxuXG57LXwgQXNzb2NpYXRlcyBhbiBgaW5wdXRgIHdpdGggYSBgZGF0YWxpc3RgIHRhZy4gVGhlIGRhdGFsaXN0IGdpdmVzIHNvbWVcbnByZS1kZWZpbmVkIG9wdGlvbnMgdG8gc3VnZ2VzdCB0byB0aGUgdXNlciBhcyB0aGV5IGludGVyYWN0IHdpdGggYW4gaW5wdXQuXG5UaGUgdmFsdWUgb2YgdGhlIGxpc3QgYXR0cmlidXRlIG11c3QgbWF0Y2ggdGhlIGlkIG9mIGEgYGRhdGFsaXN0YCBub2RlLlxuRm9yIGBpbnB1dGAuXG4tfVxubGlzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5saXN0ID1cbiAgYXR0cmlidXRlIFwibGlzdFwiXG5cblxuey18IERlZmluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBpbiBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbm1pbmxlbmd0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5taW5sZW5ndGggbiA9XG4gIGF0dHJpYnV0ZSBcIm1pbkxlbmd0aFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFsbG93ZWQgaW4gYW4gYGlucHV0YCBvclxuYHRleHRhcmVhYC5cbi19XG5tYXhsZW5ndGggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xubWF4bGVuZ3RoIG4gPVxuICBhdHRyaWJ1dGUgXCJtYXhsZW5ndGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVmaW5lcyB3aGljaCBIVFRQIG1ldGhvZCB0byB1c2Ugd2hlbiBzdWJtaXR0aW5nIGEgYGZvcm1gLiBDYW4gYmUgR0VUXG4oZGVmYXVsdCkgb3IgUE9TVC5cbi19XG5tZXRob2QgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWV0aG9kID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtZXRob2RcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIGVudGVyZWQgaW4gYW4gYGlucHV0YCBvZiB0eXBlXG5lbWFpbCBvciBmaWxlLiBDYW4gYWxzbyBpbmRpY2F0ZSB0aGF0IHlvdSBjYW4gYHNlbGVjdGAgbWFueSBvcHRpb25zLlxuLX1cbm11bHRpcGxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5tdWx0aXBsZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm11bHRpcGxlXCJcblxuXG57LXwgTmFtZSBvZiB0aGUgZWxlbWVudC4gRm9yIGV4YW1wbGUgdXNlZCBieSB0aGUgc2VydmVyIHRvIGlkZW50aWZ5IHRoZSBmaWVsZHNcbmluIGZvcm0gc3VibWl0cy4gRm9yIGBidXR0b25gLCBgZm9ybWAsIGBmaWVsZHNldGAsIGBpZnJhbWVgLCBgaW5wdXRgLFxuYG9iamVjdGAsIGBvdXRwdXRgLCBgc2VsZWN0YCwgYHRleHRhcmVhYCwgYG1hcGAsIGBtZXRhYCwgYW5kIGBwYXJhbWAuXG4tfVxubmFtZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5uYW1lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJuYW1lXCJcblxuXG57LXwgVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgYSBgZm9ybWAgc2hvdWxkbid0IGJlIHZhbGlkYXRlZCB3aGVuXG5zdWJtaXR0ZWQuXG4tfVxubm92YWxpZGF0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xubm92YWxpZGF0ZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm5vVmFsaWRhdGVcIlxuXG5cbnstfCBEZWZpbmVzIGEgcmVndWxhciBleHByZXNzaW9uIHdoaWNoIGFuIGBpbnB1dGAncyB2YWx1ZSB3aWxsIGJlIHZhbGlkYXRlZFxuYWdhaW5zdC5cbi19XG5wYXR0ZXJuIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBhdHRlcm4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBhdHRlcm5cIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9yIGB0ZXh0YXJlYWAgY2FuIGJlIGVkaXRlZC4gLX1cbnJlYWRvbmx5IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZWFkb25seSA9XG4gIGJvb2xQcm9wZXJ0eSBcInJlYWRPbmx5XCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIHJlcXVpcmVkIHRvIGZpbGwgb3V0IG9yIG5vdC5cbkZvciBgaW5wdXRgLCBgc2VsZWN0YCwgYW5kIGB0ZXh0YXJlYWAuXG4tfVxucmVxdWlyZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlcXVpcmVkID1cbiAgYm9vbFByb3BlcnR5IFwicmVxdWlyZWRcIlxuXG5cbnstfCBGb3IgYGlucHV0YCBzcGVjaWZpZXMgdGhlIHdpZHRoIG9mIGFuIGlucHV0IGluIGNoYXJhY3RlcnMuXG5cbkZvciBgc2VsZWN0YCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIG9wdGlvbnMgaW4gYSBkcm9wLWRvd24gbGlzdC5cbi19XG5zaXplIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNpemUgbiA9XG4gIGF0dHJpYnV0ZSBcInNpemVcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgVGhlIGVsZW1lbnQgSUQgZGVzY3JpYmVkIGJ5IHRoaXMgYGxhYmVsYCBvciB0aGUgZWxlbWVudCBJRHMgdGhhdCBhcmUgdXNlZFxuZm9yIGFuIGBvdXRwdXRgLlxuLX1cbmZvciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3IgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImh0bWxGb3JcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGVsZW1lbnQgSUQgb2YgdGhlIGBmb3JtYCB0aGF0IG93bnMgdGhpcyBwYXJ0aWN1bGFyIGBidXR0b25gLFxuYGZpZWxkc2V0YCwgYGlucHV0YCwgYGxhYmVsYCwgYG1ldGVyYCwgYG9iamVjdGAsIGBvdXRwdXRgLCBgcHJvZ3Jlc3NgLFxuYHNlbGVjdGAsIG9yIGB0ZXh0YXJlYWAuXG4tfVxuZm9ybSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3JtID1cbiAgYXR0cmlidXRlIFwiZm9ybVwiXG5cblxuXG4tLSBSQU5HRVNcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtYXhpbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtYXggdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCwgYG1ldGVyYCwgYW5kIGBwcm9ncmVzc2AuXG4tfVxubWF4IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1heCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibWF4XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtaW5pbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtaW4gdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCBhbmQgYG1ldGVyYC5cbi19XG5taW4gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWluID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtaW5cIlxuXG5cbnstfCBBZGQgYSBzdGVwIHNpemUgdG8gYW4gYGlucHV0YC4gVXNlIGBzdGVwIFwiYW55XCJgIHRvIGFsbG93IGFueSBmbG9hdGluZy1wb2ludFxubnVtYmVyIHRvIGJlIHVzZWQgaW4gdGhlIGlucHV0LlxuLX1cbnN0ZXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RlcCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGVwXCIgblxuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIGEgYHRleHRhcmVhYC4gLX1cbmNvbHMgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuY29scyBuID1cbiAgYXR0cmlidXRlIFwiY29sc1wiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBudW1iZXIgb2Ygcm93cyBpbiBhIGB0ZXh0YXJlYWAuIC19XG5yb3dzIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnJvd3MgbiA9XG4gIGF0dHJpYnV0ZSBcInJvd3NcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRleHQgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYSBgdGV4dGFyZWFgLiBQb3NzaWJsZVxudmFsdWVzIGFyZSBcImhhcmRcIiBhbmQgXCJzb2Z0XCIuXG4tfVxud3JhcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG53cmFwID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ3cmFwXCJcblxuXG5cbi0tIE1BUFNcblxuXG57LXwgV2hlbiBhbiBgaW1nYCBpcyBhIGRlc2NlbmRhbnQgb2YgYW4gYGFgIHRhZywgdGhlIGBpc21hcGAgYXR0cmlidXRlXG5pbmRpY2F0ZXMgdGhhdCB0aGUgY2xpY2sgbG9jYXRpb24gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBwYXJlbnQgYGFgJ3MgaHJlZiBhc1xuYSBxdWVyeSBzdHJpbmcuXG4tfVxuaXNtYXAgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmlzbWFwID1cbiAgYm9vbFByb3BlcnR5IFwiaXNNYXBcIlxuXG5cbnstfCBTcGVjaWZ5IHRoZSBoYXNoIG5hbWUgcmVmZXJlbmNlIG9mIGEgYG1hcGAgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgYW4gYGltZ2Bcbm9yIGBvYmplY3RgLiBBIGhhc2ggbmFtZSByZWZlcmVuY2UgaXMgYSBoYXNoIHN5bWJvbCBmb2xsb3dlZCBieSB0aGUgZWxlbWVudCdzIG5hbWUgb3IgaWQuXG5FLmcuIGBcIiNwbGFuZXQtbWFwXCJgLlxuLX1cbnVzZW1hcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG51c2VtYXAgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInVzZU1hcFwiXG5cblxuey18IERlY2xhcmUgdGhlIHNoYXBlIG9mIHRoZSBjbGlja2FibGUgYXJlYSBpbiBhbiBgYWAgb3IgYGFyZWFgLiBWYWxpZCB2YWx1ZXNcbmluY2x1ZGU6IGRlZmF1bHQsIHJlY3QsIGNpcmNsZSwgcG9seS4gVGhpcyBhdHRyaWJ1dGUgY2FuIGJlIHBhaXJlZCB3aXRoXG5gY29vcmRzYCB0byBjcmVhdGUgbW9yZSBwYXJ0aWN1bGFyIHNoYXBlcy5cbi19XG5zaGFwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zaGFwZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2hhcGVcIlxuXG5cbnstfCBBIHNldCBvZiB2YWx1ZXMgc3BlY2lmeWluZyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhvdC1zcG90IHJlZ2lvbiBpbiBhblxuYGFyZWFgLiBOZWVkcyB0byBiZSBwYWlyZWQgd2l0aCBhIGBzaGFwZWAgYXR0cmlidXRlIHRvIGJlIG1lYW5pbmdmdWwuXG4tfVxuY29vcmRzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvb3JkcyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY29vcmRzXCJcblxuXG5cbi0tIFJFQUwgU1RVRkZcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiBhIGBjYXB0aW9uYCwgYGNvbGAsIGBjb2xncm91cGAsXG5gaHJgLCBgaWZyYW1lYCwgYGltZ2AsIGB0YWJsZWAsIGB0Ym9keWAsICBgdGRgLCAgYHRmb290YCwgYHRoYCwgYHRoZWFkYCwgb3JcbmB0cmAuXG4tfVxuYWxpZ24gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWxpZ24gPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFsaWduXCJcblxuXG57LXwgQ29udGFpbnMgYSBVUkkgd2hpY2ggcG9pbnRzIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHF1b3RlIG9yIGNoYW5nZSBpbiBhXG5gYmxvY2txdW90ZWAsIGBkZWxgLCBgaW5zYCwgb3IgYHFgLlxuLX1cbmNpdGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2l0ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY2l0ZVwiXG5cblxuXG5cbi0tIExJTktTIEFORCBBUkVBU1xuXG5cbnstfCBUaGUgVVJMIG9mIGEgbGlua2VkIHJlc291cmNlLCBzdWNoIGFzIGBhYCwgYGFyZWFgLCBgYmFzZWAsIG9yIGBsaW5rYC4gLX1cbmhyZWYgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaHJlZiB1cmwgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImhyZWZcIiB1cmxcblxuXG57LXwgU3BlY2lmeSB3aGVyZSB0aGUgcmVzdWx0cyBvZiBjbGlja2luZyBhbiBgYWAsIGBhcmVhYCwgYGJhc2VgLCBvciBgZm9ybWBcbnNob3VsZCBhcHBlYXIuIFBvc3NpYmxlIHNwZWNpYWwgdmFsdWVzIGluY2x1ZGU6XG5cbiAgKiBfYmxhbmsgJm1kYXNoOyBhIG5ldyB3aW5kb3cgb3IgdGFiXG4gICogX3NlbGYgJm1kYXNoOyB0aGUgc2FtZSBmcmFtZSAodGhpcyBpcyBkZWZhdWx0KVxuICAqIF9wYXJlbnQgJm1kYXNoOyB0aGUgcGFyZW50IGZyYW1lXG4gICogX3RvcCAmbWRhc2g7IHRoZSBmdWxsIGJvZHkgb2YgdGhlIHdpbmRvd1xuXG5Zb3UgY2FuIGFsc28gZ2l2ZSB0aGUgbmFtZSBvZiBhbnkgYGZyYW1lYCB5b3UgaGF2ZSBjcmVhdGVkLlxuLX1cbnRhcmdldCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50YXJnZXQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInRhcmdldFwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGNsaWNraW5nIGFuIGBhYCBhbmQgYGFyZWFgIHdpbGwgZG93bmxvYWQgdGhlIHJlc291cmNlXG5kaXJlY3RseS4gVGhlIGBTdHJpbmdgIGFyZ3VtZW50IGRldGVybWlucyB0aGUgbmFtZSBvZiB0aGUgZG93bmxvYWRlZCBmaWxlLlxuU2F5IHRoZSBmaWxlIHlvdSBhcmUgc2VydmluZyBpcyBuYW1lZCBgaGF0cy5qc29uYC5cblxuICAgIGRvd25sb2FkIFwiXCIgICAgICAgICAgICAgICAtLSBoYXRzLmpzb25cbiAgICBkb3dubG9hZCBcIm15LWhhdHMuanNvblwiICAgLS0gbXktaGF0cy5qc29uXG4gICAgZG93bmxvYWQgXCJzbmFrZXMuanNvblwiICAgIC0tIHNuYWtlcy5qc29uXG5cblRoZSBlbXB0eSBgU3RyaW5nYCBzYXlzIHRvIGp1c3QgbmFtZSBpdCB3aGF0ZXZlciBpdCB3YXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXG4tfVxuZG93bmxvYWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZG93bmxvYWQgZmlsZU5hbWUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCIgZmlsZU5hbWVcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgY2xpY2tpbmcgYW4gYGFgIGFuZCBgYXJlYWAgd2lsbCBkb3dubG9hZCB0aGUgcmVzb3VyY2VcbmRpcmVjdGx5LCBhbmQgdGhhdCB0aGUgZG93bmxvYWRlZCByZXNvdXJjZSB3aXRoIGhhdmUgdGhlIGdpdmVuIGZpbGVuYW1lLlxuU28gYGRvd25sb2FkQXMgXCJoYXRzLmpzb25cImAgbWVhbnMgdGhlIHBlcnNvbiBnZXRzIGEgZmlsZSBuYW1lZCBgaGF0cy5qc29uYC5cbi19XG5kb3dubG9hZEFzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRvd25sb2FkQXMgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCJcblxuXG57LXwgVHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2Ugb2YgYW4gYGFgLCBgYXJlYWAsIG9yIGBsaW5rYC5cbi19XG5ocmVmbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5ocmVmbGFuZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaHJlZmxhbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgYSBoaW50IG9mIHRoZSB0YXJnZXQgbWVkaWEgb2YgYSBgYWAsIGBhcmVhYCwgYGxpbmtgLCBgc291cmNlYCxcbm9yIGBzdHlsZWAuXG4tfVxubWVkaWEgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWVkaWEgPVxuICBhdHRyaWJ1dGUgXCJtZWRpYVwiXG5cblxuey18IFNwZWNpZnkgYSBVUkwgdG8gc2VuZCBhIHNob3J0IFBPU1QgcmVxdWVzdCB0byB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhblxuYGFgIG9yIGBhcmVhYC4gVXNlZnVsIGZvciBtb25pdG9yaW5nIGFuZCB0cmFja2luZy5cbi19XG5waW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBpbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBpbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIHJlbGF0aW9uc2hpcCBvZiB0aGUgdGFyZ2V0IG9iamVjdCB0byB0aGUgbGluayBvYmplY3QuXG5Gb3IgYGFgLCBgYXJlYWAsIGBsaW5rYC5cbi19XG5yZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucmVsID1cbiAgYXR0cmlidXRlIFwicmVsXCJcblxuXG5cbi0tIENSQVpZIFNUVUZGXG5cblxuey18IEluZGljYXRlcyB0aGUgZGF0ZSBhbmQgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnQuXG5Gb3IgYGRlbGAsIGBpbnNgLCBgdGltZWAuXG4tfVxuZGF0ZXRpbWUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGF0ZXRpbWUgPVxuICBhdHRyaWJ1dGUgXCJkYXRldGltZVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZGF0ZSBhbmQgdGltZSBpcyB0aGUgZGF0ZSBvZiB0aGUgbmVhcmVzdCBgYXJ0aWNsZWBcbmFuY2VzdG9yIGVsZW1lbnQuIEZvciBgdGltZWAuXG4tfVxucHViZGF0ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wdWJkYXRlID1cbiAgYXR0cmlidXRlIFwicHViZGF0ZVwiXG5cblxuXG4tLSBPUkRFUkVEIExJU1RTXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGFuIG9yZGVyZWQgbGlzdCBgb2xgIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkZXNjZW5kaW5nXG5vcmRlciBpbnN0ZWFkIG9mIGEgYXNjZW5kaW5nLlxuLX1cbnJldmVyc2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZXZlcnNlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcInJldmVyc2VkXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgZmlyc3QgbnVtYmVyIG9mIGFuIG9yZGVyZWQgbGlzdCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzb21ldGhpbmdcbmJlc2lkZXMgMS5cbi19XG5zdGFydCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5zdGFydCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGFydFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gVEFCTEVTXG5cblxuey18IFRoZSBjb2xzcGFuIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGNlbGwgc2hvdWxkIHNwYW4uXG5Gb3IgYHRkYCBhbmQgYHRoYC5cbi19XG5jb2xzcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbmNvbHNwYW4gbiA9XG4gIGF0dHJpYnV0ZSBcImNvbHNwYW5cIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBlbGVtZW50IElEcyBpbmRpY2F0aW5nIHdoaWNoIGB0aGAgZWxlbWVudHMgYXJlXG5oZWFkZXJzIGZvciB0aGlzIGNlbGwuIEZvciBgdGRgIGFuZCBgdGhgLlxuLX1cbmhlYWRlcnMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaGVhZGVycyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaGVhZGVyc1wiXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiByb3dzIGEgdGFibGUgY2VsbCBzaG91bGQgc3BhbiBvdmVyLlxuRm9yIGB0ZGAgYW5kIGB0aGAuXG4tfVxucm93c3BhbiA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5yb3dzcGFuIG4gPVxuICBhdHRyaWJ1dGUgXCJyb3dzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IFNwZWNpZmllcyB0aGUgc2NvcGUgb2YgYSBoZWFkZXIgY2VsbCBgdGhgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBjb2wsIHJvdyxcbmNvbGdyb3VwLCByb3dncm91cC5cbi19XG5zY29wZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zY29wZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2NvcGVcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIFVSTCBvZiB0aGUgY2FjaGUgbWFuaWZlc3QgZm9yIGFuIGBodG1sYCB0YWcuIC19XG5tYW5pZmVzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tYW5pZmVzdCA9XG4gIGF0dHJpYnV0ZSBcIm1hbmlmZXN0XCJcblxuXG57LS0gVE9ETzogbWF5YmUgcmVpbnRyb2R1Y2Ugb25jZSB0aGVyZSdzIGEgYmV0dGVyIHdheSB0byBkaXNhbWJpZ3VhdGUgaW1wb3J0c1xuey18IFRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGBjb2xgIG9yIGBjb2xncm91cGAgc2hvdWxkIHNwYW4uIC19XG5zcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNwYW4gbiA9XG4gICAgc3RyaW5nUHJvcGVydHkgXCJzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG4tLX1cbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLkV2ZW50cyBleHBvc2luZ1xuICAoIG9uQ2xpY2ssIG9uRG91YmxlQ2xpY2tcbiAgLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwXG4gICwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmVcbiAgLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dFxuICAsIG9uSW5wdXQsIG9uQ2hlY2ssIG9uU3VibWl0XG4gICwgb25CbHVyLCBvbkZvY3VzXG4gICwgb24sIHN0b3BQcm9wYWdhdGlvbk9uLCBwcmV2ZW50RGVmYXVsdE9uLCBjdXN0b21cbiAgLCB0YXJnZXRWYWx1ZSwgdGFyZ2V0Q2hlY2tlZCwga2V5Q29kZVxuICApXG5cbnstfCBJdCBpcyBvZnRlbiBoZWxwZnVsIHRvIGNyZWF0ZSBhbiBbQ3VzdG9tIFR5cGVdW10gc28geW91IGNhbiBoYXZlIG1hbnkgZGlmZmVyZW50IGtpbmRzXG5vZiBldmVudHMgYXMgc2VlbiBpbiB0aGUgW1RvZG9NVkNdW10gZXhhbXBsZS5cblxuW0N1c3RvbSBUeXBlXTogaHR0cHM6Ly9ncmVuLWxhbmcub3JnL2Jvb2svc3ludGF4L2N1c3RvbV90eXBlcy5odG1sXG5bVG9kb01WQ106IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVuLWxhbmcvZXhhbXBsZS1wcm9qZWN0cy90cmVlL21haW4vdG9kb19tdmMgXG5cbiMjIE1vdXNlXG5AZG9jcyBvbkNsaWNrLCBvbkRvdWJsZUNsaWNrLCBvbk1vdXNlRG93biwgb25Nb3VzZVVwLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZSwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXRcblxuIyMgRm9ybXNcbkBkb2NzIG9uSW5wdXQsIG9uQ2hlY2ssIG9uU3VibWl0XG5cbiMjIEZvY3VzXG5AZG9jcyBvbkJsdXIsIG9uRm9jdXNcblxuIyMgQ3VzdG9tXG5AZG9jcyBvbiwgc3RvcFByb3BhZ2F0aW9uT24sIHByZXZlbnREZWZhdWx0T24sIGN1c3RvbVxuXG4jIyBDdXN0b20gRGVjb2RlcnNcbkBkb2NzIHRhcmdldFZhbHVlLCB0YXJnZXRDaGVja2VkLCBrZXlDb2RlXG4tfVxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuXG4tLSBNT1VTRSBFVkVOVFNcblxuXG57LXwtfVxub25DbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkNsaWNrIG1zZyA9XG4gIG9uIFwiY2xpY2tcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Eb3VibGVDbGljayA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkRvdWJsZUNsaWNrIG1zZyA9XG4gIG9uIFwiZGJsY2xpY2tcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZURvd24gOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZURvd24gbXNnID1cbiAgb24gXCJtb3VzZWRvd25cIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZVVwIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VVcCBtc2cgPVxuICBvbiBcIm1vdXNldXBcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZUVudGVyIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VFbnRlciBtc2cgPVxuICBvbiBcIm1vdXNlZW50ZXJcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZUxlYXZlIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VMZWF2ZSBtc2cgPVxuICBvbiBcIm1vdXNlbGVhdmVcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZU92ZXIgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZU92ZXIgbXNnID1cbiAgb24gXCJtb3VzZW92ZXJcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG57LXwtfVxub25Nb3VzZU91dCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlT3V0IG1zZyA9XG4gIG9uIFwibW91c2VvdXRcIiAoSnNvbi5zdWNjZWVkIG1zZylcblxuXG5cbi0tIEZPUk0gRVZFTlRTXG5cblxuey18IERldGVjdCBbaW5wdXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9pbnB1dClcbmV2ZW50cyBmb3IgdGhpbmdzIGxpa2UgdGV4dCBmaWVsZHMgb3IgdGV4dCBhcmVhcy5cblxuRm9yIG1vcmUgZGV0YWlscyBvbiBob3cgYG9uSW5wdXRgIHdvcmtzLCBjaGVjayBvdXQgW2B0YXJnZXRWYWx1ZWBdKCN0YXJnZXRWYWx1ZSkuXG5cbioqTm90ZSAxOioqIEl0IGdyYWJzIHRoZSAqKnN0cmluZyoqIHZhbHVlIGF0IGBldmVudC50YXJnZXQudmFsdWVgLCBzbyBpdCB3aWxsXG5ub3Qgd29yayBpZiB5b3UgbmVlZCBzb21lIG90aGVyIGluZm9ybWF0aW9uLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gdHJhY2tcbmlucHV0cyBvbiBhIHJhbmdlIHNsaWRlciwgbWFrZSBhIGN1c3RvbSBoYW5kbGVyIHdpdGggW2BvbmBdKCNvbikuXG5cbioqTm90ZSAyOioqIEl0IHVzZXMgYHN0b3BQcm9wYWdhdGlvbk9uYCBpbnRlcm5hbGx5IHRvIGFsd2F5cyBzdG9wIHByb3BhZ2F0aW9uXG5vZiB0aGUgZXZlbnQuIFRoaXMgaXMgaW1wb3J0YW50IGZvciBjb21wbGljYXRlZCByZWFzb25zIGV4cGxhaW5lZCBbaGVyZV1bMV0gYW5kXG5baGVyZV1bMl0uXG5cblsxXTogL3BhY2thZ2VzL2VsbS92aXJ0dWFsLWRvbS9sYXRlc3QvVmlydHVhbERvbSNIYW5kbGVyXG5bMl06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vaXNzdWVzLzEyNVxuLX1cbm9uSW5wdXQgOiAoU3RyaW5nIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xub25JbnB1dCB0YWdnZXIgPVxuICBzdG9wUHJvcGFnYXRpb25PbiBcImlucHV0XCIgKEpzb24ubWFwIGFsd2F5c1N0b3AgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRWYWx1ZSkpXG5cblxuYWx3YXlzU3RvcCA6IG1zZyAtPiB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfVxuYWx3YXlzU3RvcCBtc2cgPVxuICB7IG1lc3NhZ2UgPSBtc2cgXG4gICwgc3RvcFByb3BhZ2F0aW9uID0gVHJ1ZVxuICB9XG5cblxuey18IERldGVjdCBbY2hhbmdlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2hhbmdlKVxuZXZlbnRzIG9uIGNoZWNrYm94ZXMuIEl0IHdpbGwgZ3JhYiB0aGUgYm9vbGVhbiB2YWx1ZSBmcm9tIGBldmVudC50YXJnZXQuY2hlY2tlZGBcbm9uIGFueSBpbnB1dCBldmVudC5cblxuQ2hlY2sgb3V0IFtgdGFyZ2V0Q2hlY2tlZGBdKCN0YXJnZXRDaGVja2VkKSBmb3IgbW9yZSBkZXRhaWxzIG9uIGhvdyB0aGlzIHdvcmtzLlxuLX1cbm9uQ2hlY2sgOiAoQm9vbCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbm9uQ2hlY2sgdGFnZ2VyID1cbiAgb24gXCJjaGFuZ2VcIiAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldENoZWNrZWQpXG5cblxuey18IERldGVjdCBhIFtzdWJtaXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9zdWJtaXQpXG5ldmVudCB3aXRoIFtgcHJldmVudERlZmF1bHRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHQpXG5pbiBvcmRlciB0byBwcmV2ZW50IHRoZSBmb3JtIGZyb20gY2hhbmdpbmcgdGhlIHBhZ2XigJlzIGxvY2F0aW9uLiBJZiB5b3UgbmVlZFxuZGlmZmVyZW50IGJlaGF2aW9yLCBjcmVhdGUgYSBjdXN0b20gZXZlbnQgaGFuZGxlci5cbi19XG5vblN1Ym1pdCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vblN1Ym1pdCBtc2cgPVxuICBwcmV2ZW50RGVmYXVsdE9uIFwic3VibWl0XCIgKEpzb24ubWFwIGFsd2F5c1ByZXZlbnREZWZhdWx0IChKc29uLnN1Y2NlZWQgbXNnKSlcblxuXG5hbHdheXNQcmV2ZW50RGVmYXVsdCA6IG1zZyAtPiB7IG1lc3NhZ2UgOiBtc2csIHByZXZlbnREZWZhdWx0IDogQm9vbCB9XG5hbHdheXNQcmV2ZW50RGVmYXVsdCBtc2cgPVxuICB7IG1lc3NhZ2UgPSBtc2dcbiAgLCBwcmV2ZW50RGVmYXVsdCA9IFRydWVcbiAgfVxuXG5cblxuLS0gRk9DVVMgRVZFTlRTXG5cblxuey18LX1cbm9uQmx1ciA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbkJsdXIgbXNnID1cbiAgb24gXCJibHVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uRm9jdXMgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Gb2N1cyBtc2cgPVxuICBvbiBcImZvY3VzXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuXG4tLSBDVVNUT00gRVZFTlRTXG5cblxuey18IENyZWF0ZSBhIGN1c3RvbSBldmVudCBsaXN0ZW5lci4gTm9ybWFsbHkgdGhpcyB3aWxsIG5vdCBiZSBuZWNlc3NhcnksIGJ1dFxueW91IGhhdmUgdGhlIHBvd2VyISBIZXJlIGlzIGhvdyBgb25DbGlja2AgaXMgZGVmaW5lZCBmb3IgZXhhbXBsZTpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIG9uQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uQ2xpY2sgbWVzc2FnZSA9XG4gICAgICBvbiBcImNsaWNrXCIgKERlY29kZS5zdWNjZWVkIG1lc3NhZ2UpXG5cblRoZSBmaXJzdCBhcmd1bWVudCBpcyB0aGUgZXZlbnQgbmFtZSBpbiB0aGUgc2FtZSBmb3JtYXQgYXMgd2l0aCBKYXZhU2NyaXB0J3NcbltgYWRkRXZlbnRMaXN0ZW5lcmBdW2FFTF0gZnVuY3Rpb24uXG5cblRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYSBKU09OIGRlY29kZXIuIFJlYWQgbW9yZSBhYm91dCB0aGVzZSBbaGVyZV1bZGVjb2Rlcl0uXG5XaGVuIGFuIGV2ZW50IG9jY3VycywgdGhlIGRlY29kZXIgdHJpZXMgdG8gdHVybiB0aGUgZXZlbnQgb2JqZWN0IGludG8gYW4gR3JlblxudmFsdWUuIElmIHN1Y2Nlc3NmdWwsIHRoZSB2YWx1ZSBpcyByb3V0ZWQgdG8geW91ciBgdXBkYXRlYCBmdW5jdGlvbi4gSW4gdGhlXG5jYXNlIG9mIGBvbkNsaWNrYCB3ZSBhbHdheXMganVzdCBzdWNjZWVkIHdpdGggdGhlIGdpdmVuIGBtZXNzYWdlYC5cblxuSWYgdGhpcyBpcyBjb25mdXNpbmcsIHdvcmsgdGhyb3VnaCB0aGUgW0VsbSBBcmNoaXRlY3R1cmUgVHV0b3JpYWxdW3R1dG9yaWFsXS5cbkl0IHJlYWxseSBoZWxwcyFcblxuW2FFTF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyXG5bZGVjb2Rlcl06IC9wYWNrYWdlcy9lbG0vanNvbi9sYXRlc3QvSnNvbi1EZWNvZGVcblt0dXRvcmlhbF06IGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLWFyY2hpdGVjdHVyZS10dXRvcmlhbC9cblxuKipOb3RlOioqIFRoaXMgY3JlYXRlcyBhIFtwYXNzaXZlXVtdIGV2ZW50IGxpc3RlbmVyLCBlbmFibGluZyBvcHRpbWl6YXRpb25zIGZvclxudG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lIGJyb3dzZXJzLlxuXG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxub24gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbiBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5Ob3JtYWwgZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgc3RvcFByb3BhZ2F0aW9uYF1bc3RvcF0uIFlvdXIgZGVjb2RlclxubXVzdCBwcm9kdWNlIGEgbWVzc2FnZSBhbmQgYSBgQm9vbGAgdGhhdCBkZWNpZGVzIGlmIGBzdG9wUHJvcGFnYXRpb25gIHNob3VsZFxuYmUgY2FsbGVkLlxuXG5bc3RvcF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9zdG9wUHJvcGFnYXRpb25cblxuKipOb3RlOioqIFRoaXMgY3JlYXRlcyBhIFtwYXNzaXZlXVtdIGV2ZW50IGxpc3RlbmVyLCBlbmFibGluZyBvcHRpbWl6YXRpb25zIGZvclxudG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lIGJyb3dzZXJzLlxuXG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxuc3RvcFByb3BhZ2F0aW9uT24gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbnN0b3BQcm9wYWdhdGlvbk9uIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLk1heVN0b3BQcm9wYWdhdGlvbiBkZWNvZGVyKVxuXG5cbnstfCBDcmVhdGUgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBtYXkgW2BwcmV2ZW50RGVmYXVsdGBdW3ByZXZlbnRdLiBZb3VyIGRlY29kZXJcbm11c3QgcHJvZHVjZSBhIG1lc3NhZ2UgYW5kIGEgYEJvb2xgIHRoYXQgZGVjaWRlcyBpZiBgcHJldmVudERlZmF1bHRgIHNob3VsZFxuYmUgY2FsbGVkLlxuXG5Gb3IgZXhhbXBsZSwgdGhlIGBvblN1Ym1pdGAgZnVuY3Rpb24gaW4gdGhpcyBsaWJyYXJ5ICphbHdheXMqIHByZXZlbnRzIHRoZVxuZGVmYXVsdCBiZWhhdmlvcjpcblxuW3ByZXZlbnRdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHRcblxuICAgIG9uU3VibWl0IDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvblN1Ym1pdCBtc2cgPVxuICAgICAgcHJldmVudERlZmF1bHRPbiBcInN1Ym1pdFwiIChKc29uLm1hcCBhbHdheXNQcmV2ZW50RGVmYXVsdCAoSnNvbi5zdWNjZWVkIG1zZykpXG5cbiAgICBhbHdheXNQcmV2ZW50RGVmYXVsdCA6IG1zZyAtPiAoIG1zZywgQm9vbCApXG4gICAgYWx3YXlzUHJldmVudERlZmF1bHQgbXNnID1cbiAgICAgICggbXNnLCBUcnVlIClcbi19XG5wcmV2ZW50RGVmYXVsdE9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHByZXZlbnREZWZhdWx0IDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbnByZXZlbnREZWZhdWx0T24gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uTWF5UHJldmVudERlZmF1bHQgZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgc3RvcFByb3BhZ2F0aW9uYF1bc3RvcF0gb3JcbltgcHJldmVudERlZmF1bHRgXVtwcmV2ZW50XS5cblxuW3N0b3BdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvc3RvcFByb3BhZ2F0aW9uXG5bcHJldmVudF06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC9wcmV2ZW50RGVmYXVsdFxuW2hhbmRsZXJdOiBodHRwczovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2VsbS92aXJ0dWFsLWRvbS9sYXRlc3QvVmlydHVhbERvbSNIYW5kbGVyXG5cbioqTm90ZToqKiBDaGVjayBvdXQgdGhlIGxvd2VyLWxldmVsIGV2ZW50IEFQSSBpbiBgZWxtL3ZpcnR1YWwtZG9tYCBmb3IgbW9yZVxuaW5mb3JtYXRpb24gb24gZXhhY3RseSBob3cgZXZlbnRzIHdvcmssIGVzcGVjaWFsbHkgdGhlIFtgSGFuZGxlcmBdW2hhbmRsZXJdXG5kb2NzLlxuLX1cbmN1c3RvbSA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5jdXN0b20gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uQ3VzdG9tIGRlY29kZXIpXG5cblxuXG4tLSBDT01NT04gREVDT0RFUlNcblxuXG57LXwgQSBgSnNvbi5EZWNvZGVyYCBmb3IgZ3JhYmJpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAuIFdlIHVzZSB0aGlzIHRvIGRlZmluZVxuYG9uSW5wdXRgIGFzIGZvbGxvd3M6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25JbnB1dCA6IChTdHJpbmcgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25JbnB1dCB0YWdnZXIgPVxuICAgICAgc3RvcFByb3BhZ2F0aW9uT24gXCJpbnB1dFwiIDx8XG4gICAgICAgIEpzb24ubWFwIGFsd2F5c1N0b3AgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRWYWx1ZSlcblxuICAgIGFsd2F5c1N0b3AgOiBhIC0+IChhLCBCb29sKVxuICAgIGFsd2F5c1N0b3AgeCA9XG4gICAgICAoeCwgVHJ1ZSlcblxuWW91IHByb2JhYmx5IHdpbGwgbmV2ZXIgbmVlZCB0aGlzLCBidXQgaG9wZWZ1bGx5IGl0IGdpdmVzIHNvbWUgaW5zaWdodHMgaW50b1xuaG93IHRvIG1ha2UgY3VzdG9tIGV2ZW50IGhhbmRsZXJzLlxuLX1cbnRhcmdldFZhbHVlIDogSnNvbi5EZWNvZGVyIFN0cmluZ1xudGFyZ2V0VmFsdWUgPVxuICBKc29uLmF0IFtcInRhcmdldFwiLCBcInZhbHVlXCJdIEpzb24uc3RyaW5nXG5cblxuey18IEEgYEpzb24uRGVjb2RlcmAgZm9yIGdyYWJiaW5nIGBldmVudC50YXJnZXQuY2hlY2tlZGAuIFdlIHVzZSB0aGlzIHRvIGRlZmluZVxuYG9uQ2hlY2tgIGFzIGZvbGxvd3M6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25DaGVjayA6IChCb29sIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uQ2hlY2sgdGFnZ2VyID1cbiAgICAgIG9uIFwiaW5wdXRcIiAoSnNvbi5tYXAgdGFnZ2VyIHRhcmdldENoZWNrZWQpXG4tfVxudGFyZ2V0Q2hlY2tlZCA6IEpzb24uRGVjb2RlciBCb29sXG50YXJnZXRDaGVja2VkID1cbiAgSnNvbi5hdCBbXCJ0YXJnZXRcIiwgXCJjaGVja2VkXCJdIEpzb24uYm9vbFxuXG5cbnstfCBBIGBKc29uLkRlY29kZXJgIGZvciBncmFiYmluZyBgZXZlbnQua2V5Q29kZWAuIFRoaXMgaGVscHMgeW91IGRlZmluZVxua2V5Ym9hcmQgbGlzdGVuZXJzIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5cbiAgICBvbktleVVwIDogKEludCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbktleVVwIHRhZ2dlciA9XG4gICAgICBvbiBcImtleXVwXCIgKEpzb24ubWFwIHRhZ2dlciBrZXlDb2RlKVxuXG4qKk5vdGU6KiogSXQgbG9va3MgbGlrZSB0aGUgc3BlYyBpcyBtb3ZpbmcgYXdheSBmcm9tIGBldmVudC5rZXlDb2RlYCBhbmRcbnRvd2FyZHMgYGV2ZW50LmtleWAuIE9uY2UgdGhpcyBpcyBzdXBwb3J0ZWQgaW4gbW9yZSBicm93c2Vycywgd2UgbWF5IGFkZFxuaGVscGVycyBoZXJlIGZvciBgb25LZXlVcGAsIGBvbktleURvd25gLCBgb25LZXlQcmVzc2AsIGV0Yy5cbi19XG5rZXlDb2RlIDogSnNvbi5EZWNvZGVyIEludFxua2V5Q29kZSA9XG4gIEpzb24uZmllbGQgXCJrZXlDb2RlXCIgSnNvbi5pbnRcbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLkF0dHJpYnV0ZXMuQXJpYSBleHBvc2luZ1xuICAgICggcm9sZVxuICAgICwgYWN0aXZlRGVzY2VuZGFudFxuICAgICwgY2hlY2tlZFxuICAgICwgY29udHJvbHNcbiAgICAsIGRlc2NyaWJlZGJ5XG4gICAgLCBkaXNhYmxlZFxuICAgICwgZXhwYW5kZWRcbiAgICAsIGhhc1BvcHVwXG4gICAgLCBoaWRkZW5cbiAgICAsIGxhYmVsXG4gICAgLCBsYWJlbGxlZGJ5XG4gICAgLCBsaXZlXG4gICAgLCBwcmVzc2VkXG4gICAgLCByZWFkb25seVxuICAgICwgcmVxdWlyZWRcbiAgICAsIHNlbGVjdGVkXG4gICAgLCBzb3J0XG4gICAgLCB2YWx1ZU1heFxuICAgICwgdmFsdWVNaW5cbiAgICAsIHZhbHVlTm93XG4gICAgKVxuXG57LXwgQWRkaXRpb25hbCBhdHRyaWJ1dGVzIGZvciBodG1sXG5cblxuIyBBcmlhIHJvbGVcblxuQGRvY3Mgcm9sZVxuXG5cbiMgQXJpYSBBdHRyaWJ1dGVzXG5cbkBkb2NzIGFjdGl2ZURlc2NlbmRhbnRcbkBkb2NzIGNoZWNrZWRcbkBkb2NzIGNvbnRyb2xzXG5AZG9jcyBkZXNjcmliZWRieVxuQGRvY3MgZGlzYWJsZWRcbkBkb2NzIGV4cGFuZGVkXG5AZG9jcyBoYXNQb3B1cFxuQGRvY3MgaGlkZGVuXG5AZG9jcyBsYWJlbFxuQGRvY3MgbGFiZWxsZWRieVxuQGRvY3MgbGl2ZVxuQGRvY3MgcHJlc3NlZFxuQGRvY3MgcmVhZG9ubHlcbkBkb2NzIHJlcXVpcmVkXG5AZG9jcyBzZWxlY3RlZFxuQGRvY3Mgc29ydFxuQGRvY3MgdmFsdWVNYXhcbkBkb2NzIHZhbHVlTWluXG5AZG9jcyB2YWx1ZU5vd1xuXG4tfVxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoYXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpFXG5cblxuYm9vbEF0dHJpYnV0ZSA6IFN0cmluZyAtPiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmJvb2xBdHRyaWJ1dGUgbmFtZSB2YWwgPVxuICAgIGF0dHJpYnV0ZSBuYW1lIChKRS5lbmNvZGUgMCA8fCBKRS5ib29sIHZhbClcblxuXG5mbG9hdEF0dHJpYnV0ZSA6IFN0cmluZyAtPiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG5mbG9hdEF0dHJpYnV0ZSBuYW1lIHZhbCA9XG4gICAgYXR0cmlidXRlIG5hbWUgKFN0cmluZy5mcm9tRmxvYXQgdmFsKVxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBjdXJyZW50bHkgYWN0aXZlIGRlc2NlbmRhbnQgb2YgYSBjb21wb3NpdGUgd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtYWN0aXZlZGVzY2VuZGFudCkuXG5cbiAgICBkaXYgWyBhY3RpdmVEZXNjZW5kYW50IFwiaWRcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuYWN0aXZlRGVzY2VuZGFudCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY3RpdmVEZXNjZW5kYW50ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJjaGVja2VkXCIgc3RhdGUgb2YgY2hlY2tib3hlcywgcmFkaW8gYnV0dG9ucywgYW5kIG90aGVyIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1jaGVja2VkKS5cblxuICAgIGRpdiBbIGNoZWNrZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmNoZWNrZWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2hlY2tlZCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1jaGVja2VkXCJcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHdob3NlIGNvbnRlbnRzIG9yIHByZXNlbmNlIGFyZSBjb250cm9sbGVkIGJ5IHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1jb250cm9scykuXG5cbiAgICBkaXYgWyBjb250cm9scyBcImRyb3Bkb3duLW1lbnVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuY29udHJvbHMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY29udHJvbHMgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtY29udHJvbHNcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBkZXNjcmliZXMgdGhlIG9iamVjdC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWRlc2NyaWJlZGJ5KS5cblxuICAgIGRpdiBbIGRlc2NyaWJlZGJ5IFwiaWRcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuZGVzY3JpYmVkYnkgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGVzY3JpYmVkYnkgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtZGVzY3JpYmVkYnlcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBpcyBwZXJjZWl2YWJsZSBidXQgZGlzYWJsZWQsIHNvIGl0IGlzIG5vdCBlZGl0YWJsZSBvciBvdGhlcndpc2Ugb3BlcmFibGUuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1kaXNhYmxlZCkuXG5cbiAgICBkaXYgWyBkaXNhYmxlZCBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5kaXNhYmxlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGlzYWJsZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLWRpc2FibGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQsIG9yIGFub3RoZXIgZ3JvdXBpbmcgZWxlbWVudCBpdCBjb250cm9scywgaXMgY3VycmVudGx5IGV4cGFuZGVkIG9yIGNvbGxhcHNlZC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWV4cGFuZGVkKS5cblxuICAgIGRpdiBbIGV4cGFuZGVkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5leHBhbmRlZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5leHBhbmRlZCA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1leHBhbmRlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgYXZhaWxhYmlsaXR5IGFuZCB0eXBlIG9mIGludGVyYWN0aXZlIHBvcHVwIGVsZW1lbnQsIHN1Y2ggYXMgbWVudSBvciBkaWFsb2csIHRoYXQgY2FuIGJlIHRyaWdnZXJlZCBieSBhbiBlbGVtZW50LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtaGFzcG9wdXApLlxuXG4gICAgZGl2IFsgaGFzUG9wdXAgXCJtZW51XCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmhhc1BvcHVwIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmhhc1BvcHVwID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWhhc3BvcHVwXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgYW5kIGFsbCBvZiBpdHMgZGVzY2VuZGFudHMgYXJlIG5vdCB2aXNpYmxlIG9yIHBlcmNlaXZhYmxlIHRvIGFueSB1c2VyIGFzIGltcGxlbWVudGVkIGJ5IHRoZSBhdXRob3IuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1oaWRkZW4pLlxuXG4gICAgZGl2IFsgaGlkZGVuIFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmhpZGRlbiA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuaGlkZGVuID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1oaWRkZW5cIlxuXG5cbnstfCBEZWZpbmVzIGEgc3RyaW5nIHZhbHVlIHRoYXQgbGFiZWxzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1sYWJlbCkuXG5cbiAgICBkaXYgWyBsYWJlbCBcImxhYmVsXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmxhYmVsIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhYmVsID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWxhYmVsXCJcblxuXG57LXwgSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHRoYXQgbGFiZWxzIHRoZSBjdXJyZW50IGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1sYWJlbGxlZGJ5KS5cblxuICAgIGRpdiBbIGxhYmVsbGVkYnkgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5sYWJlbGxlZGJ5IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmxhYmVsbGVkYnkgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtbGFiZWxsZWRieVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGFuIGVsZW1lbnQgd2lsbCBiZSB1cGRhdGVkLCBhbmQgZGVzY3JpYmVzIHRoZSB0eXBlcyBvZiB1cGRhdGVzIHRoZSB1c2VyIGFnZW50cyxcbmFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGFuZCB1c2VyIGNhbiBleHBlY3QgZnJvbSB0aGUgbGl2ZSByZWdpb24uXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1saXZlKS5cblxuICAgIGlucHV0IFsgbGl2ZSBcImFzc2VydGl2ZVwiIF0gW11cblxuLX1cbmxpdmUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGl2ZSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1saXZlXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwicHJlc3NlZFwiIHN0YXRlIG9mIHRvZ2dsZSBidXR0b25zLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcHJlc3NlZCkuXG5cbiAgICBidXR0b24gWyBwcmVzc2VkIFRydWUgXSBbIHRleHQgXCJTdWJtaXRcIiBdXG5cbi19XG5wcmVzc2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5wcmVzc2VkID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1wcmVzc2VkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdGhlIGVsZW1lbnQgaXMgbm90IGVkaXRhYmxlLCBidXQgaXMgb3RoZXJ3aXNlIG9wZXJhYmxlLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcmVhZG9ubHkpLlxuXG4gICAgZGl2IFsgcmVhZG9ubHkgVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxucmVhZG9ubHkgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlYWRvbmx5ID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1yZWFkb25seVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHVzZXIgaW5wdXQgaXMgcmVxdWlyZWQgb24gdGhlIGVsZW1lbnQgYmVmb3JlIGEgZm9ybSBtYXkgYmUgc3VibWl0dGVkLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtcmVxdWlyZWQpLlxuXG4gICAgZGl2IFsgcmVxdWlyZWQgVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxucmVxdWlyZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlcXVpcmVkID1cbiAgICBib29sQXR0cmlidXRlIFwiYXJpYS1yZXF1aXJlZFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcInNlbGVjdGVkXCIgc3RhdGUgb2YgdmFyaW91cyB3aWRnZXRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtc2VsZWN0ZWQpLlxuXG4gICAgZGl2IFsgc2VsZWN0ZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbnNlbGVjdGVkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNlbGVjdGVkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLXNlbGVjdGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwic2VsZWN0ZWRcIiBzdGF0ZSBvZiB2YXJpb3VzIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1zZWxlY3RlZCkuXG5cbiAgICBkaXYgWyBzZWxlY3RlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuc29ydCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zb3J0ID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLXNvcnRcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUgZm9yIGEgcmFuZ2Ugd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtdmFsdWVtYXgpLlxuXG4gICAgZGl2IFsgdmFsdWVNYXggMTAsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTWF4IDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVNYXggPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW1heFwiXG5cblxuey18IERlZmluZXMgdGhlIG1pbmltdW0gYWxsb3dlZCB2YWx1ZSBmb3IgYSByYW5nZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS12YWx1ZW1pbikuXG5cbiAgICBkaXYgWyB2YWx1ZU1pbiAxLCByb2xlIFwicHJvZ3Jlc3NiYXJcIiBdIFtdXG5cbi19XG52YWx1ZU1pbiA6IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbnZhbHVlTWluID1cbiAgICBmbG9hdEF0dHJpYnV0ZSBcImFyaWEtdmFsdWVtaW5cIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBjdXJyZW50IHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXZhbHVlbm93KS5cblxuICAgIGRpdiBbIHZhbHVlTm93IDQsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTm93IDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVOb3cgPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW5vd1wiXG5cblxuey18IEFuIGF0dHJpYnV0ZSB0byBzdXBwb3J0IHRoZSByb2xlIGNsYXNzaWZpY2F0aW9uIG9mIGVsZW1lbnRzLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9yb2xlLWF0dHJpYnV0ZSkuXG5cbiAgICBkaXYgWyByb2xlIFwiYnV0dG9uXCIgXSBbIHRleHQgXCJTdWJtaXRcIiBdXG5cbi19XG5yb2xlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnJvbGUgPVxuICAgIGF0dHJpYnV0ZSBcInJvbGVcIlxuIiwKICAgICAgICAibW9kdWxlIE1hdGggZXhwb3NpbmdcbiAgICAoIHJvdW5kLCBmbG9vciwgY2VpbGluZywgdHJ1bmNhdGVcbiAgICAsIG1vZEJ5LCByZW1haW5kZXJCeSwgYWJzLCBzcXJ0LCBsb2dCYXNlXG4gICAgLCBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcbiAgICAsIGRlZ3JlZXMsIHJhZGlhbnMsIHR1cm5zXG4gICAgLCBjb3MsIHNpbiwgdGFuLCBhY29zLCBhc2luLCBhdGFuLCBhdGFuMlxuICAgIClcblxuey18IEZ1bmN0aW9ucyBmb3IgZG9pbmcgbWF0aFxuXG5AZG9jcyByb3VuZCwgZmxvb3IsIGNlaWxpbmcsIHRydW5jYXRlLCBtb2RCeSwgcmVtYWluZGVyQnksIGFicywgc3FydCwgbG9nQmFzZVxuXG5cbiMjIENvbnN0YW50c1xuXG5AZG9jcyBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcblxuXG4jIyBBbmdsZXNcblxuQGRvY3MgZGVncmVlcywgcmFkaWFucywgdHVybnNcblxuXG4jIyBUcmlnb25vbWV0cnlcblxuQGRvY3MgY29zLCBzaW4sIHRhbiwgYWNvcywgYXNpbiwgYXRhbiwgYXRhbjJcblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChJbnQsIEZsb2F0LCAoPT0pLCAoLyksICgqKSwgKDwpKVxuaW1wb3J0IEdyZW4uS2VybmVsLk1hdGhcblxuXG57LXwgUm91bmQgYSBudW1iZXIgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci5cblxuICAgIHJvdW5kIDEuMCA9PSAxXG5cbiAgICByb3VuZCAxLjIgPT0gMVxuXG4gICAgcm91bmQgMS41ID09IDJcblxuICAgIHJvdW5kIDEuOCA9PSAyXG5cbiAgICByb3VuZCAtMS4yID09IC0xXG5cbiAgICByb3VuZCAtMS41ID09IC0xXG5cbiAgICByb3VuZCAtMS44ID09IC0yXG5cbi19XG5yb3VuZCA6IEZsb2F0IC0+IEludFxucm91bmQgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucm91bmRcblxuXG57LXwgRmxvb3IgZnVuY3Rpb24sIHJvdW5kaW5nIGRvd24uXG5cbiAgICBmbG9vciAxLjAgPT0gMVxuXG4gICAgZmxvb3IgMS4yID09IDFcblxuICAgIGZsb29yIDEuNSA9PSAxXG5cbiAgICBmbG9vciAxLjggPT0gMVxuXG4gICAgZmxvb3IgLTEuMiA9PSAtMlxuXG4gICAgZmxvb3IgLTEuNSA9PSAtMlxuXG4gICAgZmxvb3IgLTEuOCA9PSAtMlxuXG4tfVxuZmxvb3IgOiBGbG9hdCAtPiBJbnRcbmZsb29yID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmZsb29yXG5cblxuey18IENlaWxpbmcgZnVuY3Rpb24sIHJvdW5kaW5nIHVwLlxuXG4gICAgY2VpbGluZyAxLjAgPT0gMVxuXG4gICAgY2VpbGluZyAxLjIgPT0gMlxuXG4gICAgY2VpbGluZyAxLjUgPT0gMlxuXG4gICAgY2VpbGluZyAxLjggPT0gMlxuXG4gICAgY2VpbGluZyAtMS4yID09IC0xXG5cbiAgICBjZWlsaW5nIC0xLjUgPT0gLTFcblxuICAgIGNlaWxpbmcgLTEuOCA9PSAtMVxuXG4tfVxuY2VpbGluZyA6IEZsb2F0IC0+IEludFxuY2VpbGluZyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5jZWlsaW5nXG5cblxuey18IFRydW5jYXRlIGEgbnVtYmVyLCByb3VuZGluZyB0b3dhcmRzIHplcm8uXG5cbiAgICB0cnVuY2F0ZSAxLjAgPT0gMVxuXG4gICAgdHJ1bmNhdGUgMS4yID09IDFcblxuICAgIHRydW5jYXRlIDEuNSA9PSAxXG5cbiAgICB0cnVuY2F0ZSAxLjggPT0gMVxuXG4gICAgdHJ1bmNhdGUgLTEuMiA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuNSA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuOCA9PSAtMVxuXG4tfVxudHJ1bmNhdGUgOiBGbG9hdCAtPiBJbnRcbnRydW5jYXRlID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnRydW5jYXRlXG5cblxuey18IFBlcmZvcm0gW21vZHVsYXIgYXJpdGhtZXRpY10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxhcl9hcml0aG1ldGljKS5cbkEgY29tbW9uIHRyaWNrIGlzIHRvIHVzZSAobiBtb2QgMikgdG8gZGV0ZWN0IGV2ZW4gYW5kIG9kZCBudW1iZXJzOlxuXG4gICAgbW9kQnkgMiAwID09IDBcblxuICAgIG1vZEJ5IDIgMSA9PSAxXG5cbiAgICBtb2RCeSAyIDIgPT0gMFxuXG4gICAgbW9kQnkgMiAzID09IDFcblxuT3VyIGBtb2RCeWAgZnVuY3Rpb24gd29ya3MgaW4gdGhlIHR5cGljYWwgbWF0aGVtYXRpY2FsIHdheSB3aGVuIHlvdSBydW4gaW50b1xubmVnYXRpdmUgbnVtYmVyczpcblxuICAgIExpc3QubWFwIChtb2RCeSA0KSBbIC01LCAtNCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICA0LCAgNSBdXG4gICAgLS0gICAgICAgICAgICAgICAgIFsgIDMsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEsICAyLCAgMywgIDAsICAxIF1cblxuVXNlIFtgcmVtYWluZGVyQnlgXSgjcmVtYWluZGVyQnkpIGZvciBhIGRpZmZlcmVudCB0cmVhdG1lbnQgb2YgbmVnYXRpdmUgbnVtYmVycyxcbm9yIHJlYWQgRGFhbiBMZWlqZW7igJlzIFtEaXZpc2lvbiBhbmQgTW9kdWx1cyBmb3IgQ29tcHV0ZXIgU2NpZW50aXN0c11bZG1dIGZvciBtb3JlXG5pbmZvcm1hdGlvbi5cblxuW2RtXTogaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9yZXNlYXJjaC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMi9kaXZtb2Rub3RlLWxldHRlci5wZGZcblxuLX1cbm1vZEJ5IDogSW50IC0+IEludCAtPiBJbnRcbm1vZEJ5ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1vZEJ5XG5cblxuey18IEdldCB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlzaW9uLiBIZXJlIGFyZSBidW5jaCBvZiBleGFtcGxlcyBvZiBkaXZpZGluZyBieSBmb3VyOlxuXG4gICAgTGlzdC5tYXAgKHJlbWFpbmRlckJ5IDQpIFsgLTUsIC00LCAtMywgLTIsIC0xLCAgMCwgIDEsICAyLCAgMywgIDQsICA1IF1cbiAgICAtLSAgICAgICAgICAgICAgICAgICAgICAgWyAtMSwgIDAsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEgXVxuXG5Vc2UgW2Btb2RCeWBdKCNtb2RCeSkgZm9yIGEgZGlmZmVyZW50IHRyZWF0bWVudCBvZiBuZWdhdGl2ZSBudW1iZXJzLFxub3IgcmVhZCBEYWFuIExlaWplbuKAmXMgW0RpdmlzaW9uIGFuZCBNb2R1bHVzIGZvciBDb21wdXRlciBTY2llbnRpc3RzXVtkbV0gZm9yIG1vcmVcbmluZm9ybWF0aW9uLlxuXG5bZG1dOiBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxuXG4tfVxucmVtYWluZGVyQnkgOiBJbnQgLT4gSW50IC0+IEludFxucmVtYWluZGVyQnkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucmVtYWluZGVyQnlcblxuXG57LXwgR2V0IHRoZSBbYWJzb2x1dGUgdmFsdWVdW2Fic10gb2YgYSBudW1iZXIuXG5cbiAgICBhYnMgMTYgPT0gMTZcblxuICAgIGFicyAtNCA9PSA0XG5cbiAgICBhYnMgLTguNSA9PSA4LjVcblxuICAgIGFicyAzLjE0ID09IDMuMTRcblxuW2Fic106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Fic29sdXRlX3ZhbHVlXG5cbi19XG5hYnMgOiBudW1iZXIgLT4gbnVtYmVyXG5hYnMgbiA9XG4gICAgaWYgbiA8IDAgdGhlblxuICAgICAgICAtblxuXG4gICAgZWxzZVxuICAgICAgICBuXG5cbnstfCBUYWtlIHRoZSBzcXVhcmUgcm9vdCBvZiBhIG51bWJlci5cblxuICAgIHNxcnQgNCA9PSAyXG5cbiAgICBzcXJ0IDkgPT0gM1xuXG4gICAgc3FydCAxNiA9PSA0XG5cbiAgICBzcXJ0IDI1ID09IDVcblxuLX1cbnNxcnQgOiBGbG9hdCAtPiBGbG9hdFxuc3FydCA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5zcXJ0XG5cblxuey18IENhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIG9mIGEgbnVtYmVyIHdpdGggYSBnaXZlbiBiYXNlLlxuXG4gICAgbG9nQmFzZSAxMCAxMDAgPT0gMlxuXG4gICAgbG9nQmFzZSAyIDI1NiA9PSA4XG5cbi19XG5sb2dCYXNlIDogRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRcbmxvZ0Jhc2UgYmFzZSBudW1iZXIgPVxuICAgIGlmIGJhc2UgPT0gMTAgdGhlblxuICAgICAgICBHcmVuLktlcm5lbC5NYXRoLmxvZzEwIG51bWJlclxuXG4gICAgZWxzZVxuICAgICAgICAoR3Jlbi5LZXJuZWwuTWF0aC5sb2cgbnVtYmVyKSAvIChHcmVuLktlcm5lbC5NYXRoLmxvZyBiYXNlKVxuXG5cbi0tIEFOR0xFU1xuXG5cbnstfCBDb252ZXJ0IHJhZGlhbnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgcmFkaWFucyBwaSA9PSAzLjE0MTU5MjY1MzU4OTc5M1xuXG4tfVxucmFkaWFucyA6IEZsb2F0IC0+IEZsb2F0XG5yYWRpYW5zIGFuZ2xlSW5SYWRpYW5zID1cbiAgICBhbmdsZUluUmFkaWFuc1xuXG5cbnstfCBDb252ZXJ0IGRlZ3JlZXMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgZGVncmVlcyAxODAgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbmRlZ3JlZXMgOiBGbG9hdCAtPiBGbG9hdFxuZGVncmVlcyBhbmdsZUluRGVncmVlcyA9XG4gICAgKGFuZ2xlSW5EZWdyZWVzICogcGkpIC8gMTgwXG5cblxuey18IENvbnZlcnQgdHVybnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLiBPbmUgdHVybiBpcyBlcXVhbCB0byAzNjDCsC5cblxuICAgIHR1cm5zICgxIC8gMikgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbnR1cm5zIDogRmxvYXQgLT4gRmxvYXRcbnR1cm5zIGFuZ2xlSW5UdXJucyA9XG4gICAgKDIgKiBwaSkgKiBhbmdsZUluVHVybnNcblxuXG4tLSBDT05TVEFOVFNcblxuXG57LXwgQW4gYXBwcm94aW1hdGlvbiBvZiBlLlxuLX1cbmUgOiBGbG9hdFxuZSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5lXG5cblxuey18IEFuIGFwcHJveGltYXRpb24gb2YgcGkuXG4tfVxucGkgOiBGbG9hdFxucGkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucGlcblxuXG57LXwgVGhlIGxhcmdlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBhYm92ZSB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1heFNhZmVJbnRlZ2VyIDogSW50XG5tYXhTYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5tYXhTYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgc21hbGxlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBiZWxvdyB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1pblNhZmVJbnRlZ2VyIDogSW50XG5taW5TYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5taW5TYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgbGFyZ2VzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1heEZsb2F0IDogRmxvYXRcbm1heEZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1heEZsb2F0XG5cblxuey18IFRoZSBzbWFsbGVzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1pbkZsb2F0IDogRmxvYXRcbm1pbkZsb2F0ID1cbiAgICAtbWF4RmxvYXRcblxuXG4tLSBUUklHT05PTUVUUllcblxuXG57LXwgRmlndXJlIG91dCB0aGUgY29zaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBjb3MgKGRlZ3JlZXMgNjApID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4gICAgY29zICh0dXJucyAoMSAvIDYpKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuICAgIGNvcyAocmFkaWFucyAocGkgLyAzKSkgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbiAgICBjb3MgKHBpIC8gMykgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbi19XG5jb3MgOiBGbG9hdCAtPiBGbG9hdFxuY29zID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmNvc1xuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBzaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBzaW4gKGRlZ3JlZXMgMzApID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAodHVybnMgKDEgLyAxMikpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAocmFkaWFucyAocGkgLyA2KSkgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4gICAgc2luIChwaSAvIDYpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuLX1cbnNpbiA6IEZsb2F0IC0+IEZsb2F0XG5zaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguc2luXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIHRhbmdlbnQgZ2l2ZW4gYW4gYW5nbGUgaW4gcmFkaWFucy5cblxuICAgIHRhbiAoZGVncmVlcyA0NSkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbiAgICB0YW4gKHR1cm5zICgxIC8gOCkpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4gICAgdGFuIChyYWRpYW5zIChwaSAvIDQpKSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuICAgIHRhbiAocGkgLyA0KSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuLX1cbnRhbiA6IEZsb2F0IC0+IEZsb2F0XG50YW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGgudGFuXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY2Nvc2luZSBmb3IgYGFkamFjZW50IC8gaHlwb3RlbnVzZWAgaW4gcmFkaWFuczpcblxuICAgIGFjb3MgKDEgLyAyKSA9PSAxLjA0NzE5NzU1MTE5NjU5NzkgLS0gNjDCsCBvciBwaS8zIHJhZGlhbnNcblxuLX1cbmFjb3MgOiBGbG9hdCAtPiBGbG9hdFxuYWNvcyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hY29zXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY3NpbmUgZm9yIGBvcHBvc2l0ZSAvIGh5cG90ZW51c2VgIGluIHJhZGlhbnM6XG5cbiAgICBhc2luICgxIC8gMikgPT0gMC41MjM1OTg3NzU1OTgyOTg5IC0tIDMwwrAgb3IgcGkvNiByYWRpYW5zXG5cbi19XG5hc2luIDogRmxvYXQgLT4gRmxvYXRcbmFzaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXNpblxuXG5cbnstfCBUaGlzIGhlbHBzIHlvdSBmaW5kIHRoZSBhbmdsZSAoaW4gcmFkaWFucykgdG8gYW4gYCh4LHkpYCBjb29yZGluYXRlLCBidXRcbmluIGEgd2F5IHRoYXQgaXMgcmFyZWx5IHVzZWZ1bCBpbiBwcm9ncmFtbWluZy4gKipZb3UgcHJvYmFibHkgd2FudFxuW2BhdGFuMmBdKCNhdGFuMikgaW5zdGVhZCEqKlxuXG5UaGlzIHZlcnNpb24gdGFrZXMgYHkveGAgYXMgaXRzIGFyZ3VtZW50LCBzbyB0aGVyZSBpcyBubyB3YXkgdG8ga25vdyB3aGV0aGVyXG50aGUgbmVnYXRpdmUgc2lnbnMgY29tZXMgZnJvbSB0aGUgYHlgIG9yIGB4YCB2YWx1ZS4gU28gYXMgd2UgZ28gY291bnRlci1jbG9ja3dpc2VcbmFyb3VuZCB0aGUgb3JpZ2luIGZyb20gcG9pbnQgYCgxLDEpYCB0byBgKDEsLTEpYCB0byBgKC0xLC0xKWAgdG8gYCgtMSwxKWAgd2UgZG9cbm5vdCBnZXQgYW5nbGVzIHRoYXQgZ28gaW4gdGhlIGZ1bGwgY2lyY2xlOlxuXG4gICAgYXRhbiAoMSAvIDEpID09IDAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAgNDXCsCBvciAgIHBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbiAoMSAvIC0xKSA9PSAtMC43ODUzOTgxNjMzOTc0NDgzIC0tIDMxNcKwIG9yIDcqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuICgtMSAvIC0xKSA9PSAwLjc4NTM5ODE2MzM5NzQ0ODMgLS0gIDQ1wrAgb3IgICBwaS80IHJhZGlhbnNcblxuICAgIGF0YW4gKC0xIC8gMSkgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG5Ob3RpY2UgdGhhdCBldmVyeXRoaW5nIGlzIGJldHdlZW4gYHBpLzJgIGFuZCBgLXBpLzJgLiBUaGF0IGlzIHByZXR0eSB1c2VsZXNzXG5mb3IgZmlndXJpbmcgb3V0IGFuZ2xlcyBpbiBhbnkgc29ydCBvZiB2aXN1YWxpemF0aW9uLCBzbyBhZ2FpbiwgY2hlY2sgb3V0XG5bYGF0YW4yYF0oI2F0YW4yKSBpbnN0ZWFkIVxuXG4tfVxuYXRhbiA6IEZsb2F0IC0+IEZsb2F0XG5hdGFuID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmF0YW5cblxuXG57LXwgVGhpcyBoZWxwcyB5b3UgZmluZCB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHRvIGFuIGAoeCx5KWAgY29vcmRpbmF0ZS5cblNvIHJhdGhlciB0aGFuIHNheWluZyBgYXRhbiAoeS94KWAgeW91IHNheSBgYXRhbjIgeSB4YCBhbmQgeW91IGNhbiBnZXQgYSBmdWxsXG5yYW5nZSBvZiBhbmdsZXM6XG5cbiAgICBhdGFuMiAxIDEgPT0gMC43ODUzOTgxNjMzOTc0NDgzIC0tICA0NcKwIG9yICAgcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAxIC0xID09IDIuMzU2MTk0NDkwMTkyMzQ1IC0tIDEzNcKwIG9yIDMqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAtMSAtMSA9PSAtMi4zNTYxOTQ0OTAxOTIzNDUgLS0gMjI1wrAgb3IgNSpwaS80IHJhZGlhbnNcblxuICAgIGF0YW4yIC0xIDEgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG4tfVxuYXRhbjIgOiBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdFxuYXRhbjIgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXRhbjJcbiIsCiAgICAgICAgIm1vZHVsZSBNYXliZSBleHBvc2luZ1xuICAgICggTWF5YmUoLi4pXG4gICAgLCBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwga2VlcElmXG4gICAgLCB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIGFuZFRoZW5cbiAgICApXG5cbnstfCBUaGlzIGxpYnJhcnkgZmlsbHMgYSBidW5jaCBvZiBpbXBvcnRhbnQgbmljaGVzIGluIEdyZW4uIEEgYE1heWJlYCBjYW4gaGVscFxueW91IHdpdGggb3B0aW9uYWwgYXJndW1lbnRzLCBlcnJvciBoYW5kbGluZywgYW5kIHJlY29yZHMgd2l0aCBvcHRpb25hbCBmaWVsZHMuXG5cbkBkb2NzIE1heWJlXG5cblxuIyMgUXVlcmllc1xuXG5AZG9jcyBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwga2VlcElmXG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIHdpdGhEZWZhdWx0LCB3aXRoRGVmYXVsdExhenksIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgYW5kVGhlblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcblxuXG57LXwgUmVwcmVzZW50IHZhbHVlcyB0aGF0IG1heSBvciBtYXkgbm90IGV4aXN0LiBJdCBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIGFcbnJlY29yZCBmaWVsZCB0aGF0IGlzIG9ubHkgZmlsbGVkIGluIHNvbWV0aW1lcy4gT3IgaWYgYSBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlXG5zb21ldGltZXMsIGJ1dCBkb2VzIG5vdCBhYnNvbHV0ZWx5IG5lZWQgaXQuXG5cbiAgICAtLSBBIHBlcnNvbiwgYnV0IG1heWJlIHdlIGRvIG5vdCBrbm93IHRoZWlyIGFnZS5cbiAgICB0eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICAgICAsIGFnZSA6IE1heWJlIEludFxuICAgICAgICB9XG5cbiAgICB0b20gPVxuICAgICAgICB7IG5hbWUgPSBcIlRvbVwiLCBhZ2UgPSBKdXN0IDQyIH1cblxuICAgIHN1ZSA9XG4gICAgICAgIHsgbmFtZSA9IFwiU3VlXCIsIGFnZSA9IE5vdGhpbmcgfVxuXG4tfVxudHlwZSBNYXliZSBhXG4gICAgPSBKdXN0IGFcbiAgICB8IE5vdGhpbmdcblxuXG57LXwgQ2hlY2tzIHRvIHNlZSBpZiB0aGUgW01heWJlXSgjTWF5YmUpIGlzIGBKdXN0YCwgYW5kIHRoYXQgdGhlIGNvbnRhaW5lZCB2YWx1ZVxuZXF1YWxzIGEgcHJvdmlkZWQgY29uc3RhbnQuXG5cbiAgICBoYXNWYWx1ZSA1IChKdXN0IDUpID09IFRydWVcblxuICAgIGhhc1ZhbHVlIDUgKEp1c3QgMykgPT0gRmFsc2VcblxuICAgIGhhc1ZhbHVlIDUgTm90aGluZyA9PSBGYWxzZVxuXG4tfVxuaGFzVmFsdWUgOiBhIC0+IE1heWJlIGEgLT4gQm9vbFxuaGFzVmFsdWUgdmFsdWUgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBjb250YWluZWQgLT5cbiAgICAgICAgICAgIGNvbnRhaW5lZCA9PSB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IENoZWNrcyB0byBzZWUgaWYgdGhlIFtNYXliZV0oI01heWJlKSBpcyBgSnVzdGAsIGFuZCB0aGF0IHRoZSBjb250YWluZWQgdmFsdWVcbnBhc3NlcyB0aGUgcHJvdmlkZWQgdGVzdC5cblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgKEp1c3QgNSkgPT0gVHJ1ZVxuXG4gICAgY2hlY2tWYWx1ZSBpc09kZCAoSnVzdCAyKSA9PSBGYWxzZVxuXG4gICAgY2hlY2tWYWx1ZSBpc09kZCBOb3RoaW5nID09IEZhbHNlXG5cbi19XG5jaGVja1ZhbHVlIDogKGEgLT4gQm9vbCkgLT4gTWF5YmUgYSAtPiBCb29sXG5jaGVja1ZhbHVlIHRlc3QgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBjb250YWluZWQgLT5cbiAgICAgICAgICAgIHRlc3QgY29udGFpbmVkXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgUHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUsIHR1cm5pbmcgYW4gb3B0aW9uYWwgdmFsdWUgaW50byBhIG5vcm1hbFxudmFsdWUuIFRoaXMgY29tZXMgaW4gaGFuZHkgd2hlbiBwYWlyZWQgd2l0aCBmdW5jdGlvbnMgbGlrZVxuW2BEaWN0LmdldGBdKERpY3QjZ2V0KSB3aGljaCBnaXZlcyBiYWNrIGEgYE1heWJlYC5cblxuICAgIHdpdGhEZWZhdWx0IDEwMCAoSnVzdCA0MikgPT0gNDJcbiAgICBcbiAgICB3aXRoRGVmYXVsdCAxMDAgTm90aGluZyA9PSAxMDBcbiAgICBcbiAgICB3aXRoRGVmYXVsdCBcInVua25vd25cIiAoRGljdC5nZXQgXCJUb21cIiBEaWN0LmVtcHR5KSA9PSBcInVua25vd25cIlxuXG4tfVxud2l0aERlZmF1bHQgOiBhIC0+IE1heWJlIGEgLT4gYVxud2l0aERlZmF1bHQgZGVmYXVsdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRlZmF1bHRcblxuXG57LXwgU2FtZSBhcyBbd2l0aERlZmF1bHRdKCN3aXRoRGVmYXVsdCkgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIGlzIHdyYXBwZWQgaW5cbmEgZnVuY3Rpb24uIFRoaXMgaXMgdXNlZnVsIHdoZW4gY29tcHV0aW5nIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGV4cGVuc2l2ZSwgYXNcbnlvdSBjYW4gY29tcHV0ZSBpdCBvbmx5IHdoZW4gaXQgaXMgcmVxdWlyZWQuXG5cbkluIG1vc3QgY2FzZXMgeW91IHNob3VsZCB1c2UgcGF0dGVybiBtYXRjaGluZyBvciBbd2l0aERlZmF1bHRdKCN3aXRoRGVmYXVsdCkgaW5zdGVhZC5cblxuLX1cbndpdGhEZWZhdWx0TGF6eSA6ICh7fSAtPiBhKSAtPiBNYXliZSBhIC0+IGFcbndpdGhEZWZhdWx0TGF6eSBkZWZhdWx0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGVmYXVsdCB7fVxuXG5cbnstfCBUcmFuc2Zvcm0gYSBgTWF5YmVgIHZhbHVlIHdpdGggYSBnaXZlbiBmdW5jdGlvbjpcblxuICAgIG1hcCBzcXJ0IChKdXN0IDkpID09IEp1c3QgM1xuXG4gICAgbWFwIHNxcnQgTm90aGluZyA9PSBOb3RoaW5nXG5cbiAgICBtYXAgc3FydCAoU3RyaW5nLnRvRmxvYXQgXCI5XCIpID09IEp1c3QgM1xuXG4gICAgbWFwIHNxcnQgKFN0cmluZy50b0Zsb2F0IFwieFwiKSA9PSBOb3RoaW5nXG5cbi19XG5tYXAgOiAoYSAtPiBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbm1hcCBmIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIEp1c3QgKGYgdmFsdWUpXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIGlmIGFsbCB0aGUgYXJndW1lbnRzIGFyZSBgSnVzdGAgYSB2YWx1ZS5cblxuICAgIG1hcDIgKCspIChKdXN0IDMpIChKdXN0IDQpID09IEp1c3QgN1xuXG4gICAgbWFwMiAoKykgKEp1c3QgMykgTm90aGluZyA9PSBOb3RoaW5nXG5cbiAgICBtYXAyICgrKSBOb3RoaW5nIChKdXN0IDQpID09IE5vdGhpbmdcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCIxXCIpIChTdHJpbmcudG9JbnQgXCIxMjNcIikgPT0gSnVzdCAxMjRcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCJ4XCIpIChTdHJpbmcudG9JbnQgXCIxMjNcIikgPT0gTm90aGluZ1xuXG4gICAgbWFwMiAoKykgKFN0cmluZy50b0ludCBcIjFcIikgKFN0cmluZy50b0ludCBcIjEuM1wiKSA9PSBOb3RoaW5nXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIHZhbHVlXG5tYXAyIGZ1bmMgbWEgbWIgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiKVxuXG5cbnstfCAtfVxubWFwMyA6IChhIC0+IGIgLT4gYyAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgdmFsdWVcbm1hcDMgZnVuYyBtYSBtYiBtYyA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIgYylcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgZCAtPiBNYXliZSB2YWx1ZVxubWFwNCBmdW5jIG1hIG1iIG1jIG1kID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIG1jIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1kIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMgZClcblxuXG57LXwgLX1cbm1hcDUgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IHZhbHVlKSAtPiBNYXliZSBhIC0+IE1heWJlIGIgLT4gTWF5YmUgYyAtPiBNYXliZSBkIC0+IE1heWJlIGUgLT4gTWF5YmUgdmFsdWVcbm1hcDUgZnVuYyBtYSBtYiBtYyBtZCBtZSA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1lIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGUgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCAoZnVuYyBhIGIgYyBkIGUpXG5cblxuey18IFJldHVybnMgYE5vdGhpbmdgIGlmIHRoZSBjb250YWluZWQgdmFsdWUgZG9lc24ndCBwYXNzIHRoZSBnaXZlblxudGVzdC5cblxuICAgIGtlZXBJZiBpc09kZCAoSnVzdCA1KSA9PSBKdXN0IDVcblxuICAgIGtlZXBJZiBpc09kZCAoSnVzdCAyKSA9PSBOb3RoaW5nXG5cbi19XG5rZWVwSWYgOiAoYSAtPiBCb29sKSAtPiBNYXliZSBhIC0+IE1heWJlIGFcbmtlZXBJZiB0ZXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICBpZiB0ZXN0IGNvbnRhaW5lZCB0aGVuXG4gICAgICAgICAgICAgICAgbWF5YmVcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cblxuey18IENoYWluIHRvZ2V0aGVyIG1hbnkgY29tcHV0YXRpb25zIHRoYXQgbWF5IGZhaWwuIEl0IGlzIGhlbHBmdWwgdG8gc2VlIGl0c1xuZGVmaW5pdGlvbjpcblxuICAgIGFuZFRoZW4gOiAoYSAtPiBNYXliZSBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbiAgICBhbmRUaGVuIGNhbGxiYWNrIG1heWJlID1cbiAgICAgICAgd2hlbiBtYXliZSBpc1xuICAgICAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICBOb3RoaW5nXG5cblRoaXMgbWVhbnMgd2Ugb25seSBjb250aW51ZSB3aXRoIHRoZSBjYWxsYmFjayBpZiB0aGluZ3MgYXJlIGdvaW5nIHdlbGwuIEZvclxuZXhhbXBsZSwgc2F5IHlvdSBuZWVkIHRvIHBhcnNlIHNvbWUgdXNlciBpbnB1dCBhcyBhIG1vbnRoOlxuXG4gICAgcGFyc2VNb250aCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBwYXJzZU1vbnRoIHVzZXJJbnB1dCA9XG4gICAgICAgIFN0cmluZy50b0ludCB1c2VySW5wdXRcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gdG9WYWxpZE1vbnRoXG5cbiAgICB0b1ZhbGlkTW9udGggOiBJbnQgLT4gTWF5YmUgSW50XG4gICAgdG9WYWxpZE1vbnRoIG1vbnRoID1cbiAgICAgICAgaWYgMSA8PSBtb250aCAmJiBtb250aCA8PSAxMiB0aGVuXG4gICAgICAgICAgICBKdXN0IG1vbnRoXG5cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgTm90aGluZ1xuXG5JbiB0aGUgYHBhcnNlTW9udGhgIGZ1bmN0aW9uLCBpZiBgU3RyaW5nLnRvSW50YCBwcm9kdWNlcyBgTm90aGluZ2AgKGJlY2F1c2VcbnRoZSBgdXNlcklucHV0YCB3YXMgbm90IGFuIGludGVnZXIpIHRoaXMgZW50aXJlIGNoYWluIG9mIG9wZXJhdGlvbnMgd2lsbFxuc2hvcnQtY2lyY3VpdCBhbmQgcmVzdWx0IGluIGBOb3RoaW5nYC4gSWYgYHRvVmFsaWRNb250aGAgcmVzdWx0cyBpbiBgTm90aGluZ2AsXG5hZ2FpbiB0aGUgY2hhaW4gb2YgY29tcHV0YXRpb25zIHdpbGwgcmVzdWx0IGluIGBOb3RoaW5nYC5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBNYXliZSBiKSAtPiBNYXliZSBhIC0+IE1heWJlIGJcbmFuZFRoZW4gY2FsbGJhY2sgbWF5YmVWYWx1ZSA9XG4gICAgd2hlbiBtYXliZVZhbHVlIGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIGNhbGxiYWNrIHZhbHVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cblxuLS0gRk9SIElOVEVSTkFMIFVTRSBPTkxZXG4tLVxuLS0gVXNlIGB3aGVuYCBleHByZXNzaW9ucyBmb3IgdGhpcyBpbiBHcmVuIGNvZGUhXG5cblxuaXNKdXN0IDogTWF5YmUgYSAtPiBCb29sXG5pc0p1c3QgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG5kZXN0cnVjdCA6IGIgLT4gKGEgLT4gYikgLT4gTWF5YmUgYSAtPiBiXG5kZXN0cnVjdCBkZWZhdWx0IGZ1bmMgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICBmdW5jIGFcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkZWZhdWx0XG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5LZXllZCBleHBvc2luZ1xuICAoIG5vZGVcbiAgLCBvbFxuICAsIHVsXG4gIClcblxuXG57LXwgQSBrZXllZCBub2RlIGhlbHBzIG9wdGltaXplIGNhc2VzIHdoZXJlIGNoaWxkcmVuIGFyZSBnZXR0aW5nIGFkZGVkLCBtb3ZlZCxcbnJlbW92ZWQsIGV0Yy4gQ29tbW9uIGV4YW1wbGVzIGluY2x1ZGU6XG5cbiAgLSBUaGUgdXNlciBjYW4gZGVsZXRlIGl0ZW1zIGZyb20gYSBsaXN0LlxuICAtIFRoZSB1c2VyIGNhbiBjcmVhdGUgbmV3IGl0ZW1zIGluIGEgbGlzdC5cbiAgLSBZb3UgY2FuIHNvcnQgYSBsaXN0IGJhc2VkIG9uIG5hbWUgb3IgZGF0ZSBvciB3aGF0ZXZlci5cblxuV2hlbiB5b3UgdXNlIGEga2V5ZWQgbm9kZSwgZXZlcnkgY2hpbGQgaXMgcGFpcmVkIHdpdGggYSBzdHJpbmcgaWRlbnRpZmllci4gVGhpc1xubWFrZXMgaXQgcG9zc2libGUgZm9yIHRoZSB1bmRlcmx5aW5nIGRpZmZpbmcgYWxnb3JpdGhtIHRvIHJldXNlIG5vZGVzIG1vcmVcbmVmZmljaWVudGx5LlxuXG4jIyBLZXllZCBOb2Rlc1xuQGRvY3Mgbm9kZVxuXG4jIyBDb21tb25seSBLZXllZCBOb2Rlc1xuQGRvY3Mgb2wsIHVsXG4tfVxuXG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwpXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cbnstfCBXb3JrcyBqdXN0IGxpa2UgYEh0bWwubm9kZWAsIGJ1dCB5b3UgYWRkIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gZWFjaCBjaGlsZFxubm9kZS4gWW91IHdhbnQgdGhpcyB3aGVuIHlvdSBoYXZlIGEgbGlzdCBvZiBub2RlcyB0aGF0IGlzIGNoYW5naW5nOiBhZGRpbmdcbm5vZGVzLCByZW1vdmluZyBub2RlcywgZXRjLiBJbiB0aGVzZSBjYXNlcywgdGhlIHVuaXF1ZSBpZGVudGlmaWVycyBoZWxwIG1ha2VcbnRoZSBET00gbW9kaWZpY2F0aW9ucyBtb3JlIGVmZmljaWVudC5cbi19XG5ub2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbm5vZGUgPVxuICBWaXJ0dWFsRG9tLmtleWVkTm9kZVxuXG5cbnstfC19XG5vbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbm9sID1cbiAgbm9kZSBcIm9sXCJcblxuXG57LXwtfVxudWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgeyBrZXkgOiBTdHJpbmcsIG5vZGUgOiBIdG1sIG1zZyB9IC0+IEh0bWwgbXNnXG51bCA9XG4gIG5vZGUgXCJ1bFwiXG4iCiAgICBdLAogICAgIm5hbWVzIjogWwogICAgICAgICJEaWN0LmZvbGRsIiwKICAgICAgICAiZnVuYyIsCiAgICAgICAgImFjYyIsCiAgICAgICAgImRpY3QiLAogICAgICAgICJrZXkiLAogICAgICAgICJ2YWx1ZSIsCiAgICAgICAgImxlZnQiLAogICAgICAgICJyaWdodCIsCiAgICAgICAgIkFycmF5Lmxlbmd0aCIsCiAgICAgICAgIl9BcnJheV9sZW5ndGgiLAogICAgICAgICJBcnJheS5wdXNoTGFzdCIsCiAgICAgICAgImFycmF5IiwKICAgICAgICAiX0FycmF5X3NwbGljZTEiLAogICAgICAgICJEaWN0LmtleXMiLAogICAgICAgICJrZXlBcnJheSIsCiAgICAgICAgIlNldC50b0FycmF5IiwKICAgICAgICAiX3YwIiwKICAgICAgICAiQmFzaWNzLmlkZW50aXR5IiwKICAgICAgICAieCIsCiAgICAgICAgIkRhdGFUYWJsZS5pbml0aWFsU29ydCIsCiAgICAgICAgImhlYWRlciIsCiAgICAgICAgImYiLAogICAgICAgICJkIiwKICAgICAgICAiYiIsCiAgICAgICAgIkRhdGFUYWJsZS5Ob1BhZ2luYXRpb24iLAogICAgICAgICJrIiwKICAgICAgICAiYWUiLAogICAgICAgICJQIiwKICAgICAgICAibCIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5pbml0IiwKICAgICAgICAicGVvcGxlIiwKICAgICAgICAibW9kZWwiLAogICAgICAgICJiQiIsCiAgICAgICAgImFNIiwKICAgICAgICAiYVYiLAogICAgICAgICJCYXNpY3MuYXBSIiwKICAgICAgICAiRGF0YVRhYmxlLm5ldyIsCiAgICAgICAgImlkIiwKICAgICAgICAiQmFzaWNzLmFwTCIsCiAgICAgICAgIkJhc2ljcy5hcHBlbmQiLAogICAgICAgICJfVXRpbHNfYXBwZW5kIiwKICAgICAgICAiQXJyYXkuc29ydCIsCiAgICAgICAgIl9BcnJheV9zb3J0IiwKICAgICAgICAiRGF0YVRhYmxlLnNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoIiwKICAgICAgICAiZGVmYXVsdFBhZ2VTaXplIiwKICAgICAgICAib3RoZXJQYWdlU2l6ZXMiLAogICAgICAgICJzdGF0ZSIsCiAgICAgICAgImN1cnJlbnRTdGF0ZSIsCiAgICAgICAgIkRhdGFUYWJsZS5TY3JvbGxlciIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVBY3RpdmVSb3dJZCIsCiAgICAgICAgIm5ld0FjdGl2ZVJvd0lkIiwKICAgICAgICAicGFnZVNpemUiLAogICAgICAgICJwYWdpbmF0aW9uIiwKICAgICAgICAic29ydENvbHVtbnMiLAogICAgICAgICJ0YWJsZUlkIiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZVNvcnRTdGF0ZSIsCiAgICAgICAgIm5ld1NvcnRDb2x1bW4iLAogICAgICAgICJzb3J0RGlyZWN0aW9uIiwKICAgICAgICAiYWN0aXZlUm93SWQiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHNQYWdpbmF0ZWQuaW5pdCIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5wZXJzb24iLAogICAgICAgICJuYW1lIiwKICAgICAgICAieWVhciIsCiAgICAgICAgImNpdHkiLAogICAgICAgICJhbiIsCiAgICAgICAgImkiLAogICAgICAgICJhUyIsCiAgICAgICAgImEzIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLnByZXNpZGVudHMiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHNQYWdpbmF0ZWQucGVyc29uIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzUGFnaW5hdGVkLnByZXNpZGVudHMiLAogICAgICAgICJEb2NCb29rLmluaXQiLAogICAgICAgICJDIiwKICAgICAgICAiTSIsCiAgICAgICAgIk4iLAogICAgICAgICJCYXNpY3MuYWRkIiwKICAgICAgICAiX0Jhc2ljc19hZGQiLAogICAgICAgICJTdHJpbmcuYW55IiwKICAgICAgICAiX1N0cmluZ19hbnkiLAogICAgICAgICJCYXNpY3MuY29tcG9zZUwiLAogICAgICAgICJnIiwKICAgICAgICAiQmFzaWNzLm5vdCIsCiAgICAgICAgIl9CYXNpY3Nfbm90IiwKICAgICAgICAiU3RyaW5nLmFsbCIsCiAgICAgICAgImlzR29vZCIsCiAgICAgICAgInN0ciIsCiAgICAgICAgIkJhc2ljcy5hbmQiLAogICAgICAgICJfQmFzaWNzX2FuZCIsCiAgICAgICAgIkpzb24uRW5jb2RlLmVuY29kZSIsCiAgICAgICAgIl9Kc29uX2VuY29kZSIsCiAgICAgICAgIlN0cmluZy5mcm9tSW50IiwKICAgICAgICAiX1N0cmluZ19mcm9tTnVtYmVyIiwKICAgICAgICAiU3RyaW5nLmpvaW4iLAogICAgICAgICJfU3RyaW5nX2pvaW4iLAogICAgICAgICJTdHJpbmcuc3BsaXQiLAogICAgICAgICJfU3RyaW5nX3NwbGl0IiwKICAgICAgICAiSnNvbi5EZWNvZGUuaW5kZW50IiwKICAgICAgICAiQXJyYXkuaW5kZXhlZE1hcCIsCiAgICAgICAgIl9BcnJheV9pbmRleGVkTWFwIiwKICAgICAgICAiQmFzaWNzLmxlIiwKICAgICAgICAiX1V0aWxzX2xlIiwKICAgICAgICAiQ2hhci50b0NvZGUiLAogICAgICAgICJfQ2hhcl90b0NvZGUiLAogICAgICAgICJDaGFyLmlzTG93ZXIiLAogICAgICAgICJfY2hhciIsCiAgICAgICAgImNvZGUiLAogICAgICAgICJjaGFyIiwKICAgICAgICAiQ2hhci5pc1VwcGVyIiwKICAgICAgICAiQmFzaWNzLm9yIiwKICAgICAgICAiX0Jhc2ljc19vciIsCiAgICAgICAgIkNoYXIuaXNBbHBoYSIsCiAgICAgICAgIkNoYXIuaXNEaWdpdCIsCiAgICAgICAgIkNoYXIuaXNBbHBoYU51bSIsCiAgICAgICAgIlN0cmluZy5wb3BGaXJzdCIsCiAgICAgICAgIl9TdHJpbmdfcG9wRmlyc3QiLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvck9uZU9mIiwKICAgICAgICAiZXJyb3IiLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvclRvU3RyaW5nIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JUb1N0cmluZ0hlbHAiLAogICAgICAgICJjb250ZXh0IiwKICAgICAgICAiaXNTaW1wbGUiLAogICAgICAgICJfdjIiLAogICAgICAgICJyZXN0IiwKICAgICAgICAiZmllbGROYW1lIiwKICAgICAgICAiZXJyIiwKICAgICAgICAiaW5kZXhOYW1lIiwKICAgICAgICAic3RhcnRlciIsCiAgICAgICAgImludHJvZHVjdGlvbiIsCiAgICAgICAgImVycm9ycyIsCiAgICAgICAgImpzb24iLAogICAgICAgICJtc2ciLAogICAgICAgICJSZXN1bHQuaXNPayIsCiAgICAgICAgInJlc3VsdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLm1hcCIsCiAgICAgICAgIl9Kc29uX21hcDEiLAogICAgICAgICJKc29uLkRlY29kZS5tYXAyIiwKICAgICAgICAiX0pzb25fbWFwMiIsCiAgICAgICAgIkpzb24uRGVjb2RlLnN1Y2NlZWQiLAogICAgICAgICJfSnNvbl9zdWNjZWVkIiwKICAgICAgICAiVmlydHVhbERvbS50b0hhbmRsZXJJbnQiLAogICAgICAgICJoYW5kbGVyIiwKICAgICAgICAiU3RyaW5nLmNvbnRhaW5zIiwKICAgICAgICAiX1N0cmluZ19jb250YWlucyIsCiAgICAgICAgIkJhc2ljcy5sdCIsCiAgICAgICAgIl9VdGlsc19sdCIsCiAgICAgICAgIlN0cmluZy5zbGljZSIsCiAgICAgICAgIl9TdHJpbmdfc2xpY2UiLAogICAgICAgICJTdHJpbmcudW5pdExlbmd0aCIsCiAgICAgICAgIl9TdHJpbmdfdW5pdExlbmd0aCIsCiAgICAgICAgIlN0cmluZy5kcm9wRmlyc3QiLAogICAgICAgICJuIiwKICAgICAgICAic3RyaW5nIiwKICAgICAgICAiU3RyaW5nLmluZGljZXMiLAogICAgICAgICJfU3RyaW5nX2luZGV4ZXMiLAogICAgICAgICJCYXNpY3MuZXEiLAogICAgICAgICJfVXRpbHNfZXF1YWwiLAogICAgICAgICJTdHJpbmcuaXNFbXB0eSIsCiAgICAgICAgIlN0cmluZy50YWtlRmlyc3QiLAogICAgICAgICJTdHJpbmcudG9JbnQiLAogICAgICAgICJfU3RyaW5nX3RvSW50IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlUGF0aCIsCiAgICAgICAgInByb3RvY29sIiwKICAgICAgICAicGF0aCIsCiAgICAgICAgInBhcmFtcyIsCiAgICAgICAgImZyYWciLAogICAgICAgICJNYXliZS5Ob3RoaW5nIiwKICAgICAgICAiTWF5YmUuSnVzdCIsCiAgICAgICAgIlgiLAogICAgICAgICJheSIsCiAgICAgICAgIloiLAogICAgICAgICJhRyIsCiAgICAgICAgImFLIiwKICAgICAgICAiX3YxIiwKICAgICAgICAicG9ydF8iLAogICAgICAgICJBcnJheS5nZXQiLAogICAgICAgICJfQXJyYXlfZ2V0IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlUXVlcnkiLAogICAgICAgICJVcmwuY2hvbXBCZWZvcmVGcmFnbWVudCIsCiAgICAgICAgIlVybC5jaG9tcEFmdGVyUHJvdG9jb2wiLAogICAgICAgICJTdHJpbmcuc3RhcnRzV2l0aCIsCiAgICAgICAgIl9TdHJpbmdfc3RhcnRzV2l0aCIsCiAgICAgICAgIlVybC5mcm9tU3RyaW5nIiwKICAgICAgICAiQmFzaWNzLm5ldmVyIiwKICAgICAgICAibnZyIiwKICAgICAgICAiVGFzay5zdWNjZWVkIiwKICAgICAgICAiX1NjaGVkdWxlcl9zdWNjZWVkIiwKICAgICAgICAiVGFzay5pbml0IiwKICAgICAgICAiQXJyYXkubWFwIiwKICAgICAgICAiX0FycmF5X21hcCIsCiAgICAgICAgIlRhc2suYW5kVGhlbiIsCiAgICAgICAgIl9TY2hlZHVsZXJfYW5kVGhlbiIsCiAgICAgICAgIlRhc2subWFwIiwKICAgICAgICAidGFza0EiLAogICAgICAgICJhIiwKICAgICAgICAiQXJyYXkuZm9sZHIiLAogICAgICAgICJfQXJyYXlfZm9sZHIiLAogICAgICAgICJUYXNrLm1hcDIiLAogICAgICAgICJ0YXNrQiIsCiAgICAgICAgIkFycmF5LnB1c2hGaXJzdCIsCiAgICAgICAgIlRhc2suc2VxdWVuY2UiLAogICAgICAgICJ0YXNrcyIsCiAgICAgICAgIlBsYXRmb3JtLnNlbmRUb0FwcCIsCiAgICAgICAgIl9QbGF0Zm9ybV9zZW5kVG9BcHAiLAogICAgICAgICJUYXNrLnNwYXduQ21kIiwKICAgICAgICAicm91dGVyIiwKICAgICAgICAiY21kIiwKICAgICAgICAiX1NjaGVkdWxlcl9zcGF3biIsCiAgICAgICAgInRhc2siLAogICAgICAgICJUYXNrLm9uRWZmZWN0cyIsCiAgICAgICAgImNvbW1hbmRzIiwKICAgICAgICAiVGFzay5vblNlbGZNc2ciLAogICAgICAgICJUYXNrLmNtZE1hcCIsCiAgICAgICAgInRhZ2dlciIsCiAgICAgICAgIlRhc2suUGVyZm9ybSIsCiAgICAgICAgIlRhc2suRXhlY3V0ZSIsCiAgICAgICAgIlRhc2sucGVyZm9ybSIsCiAgICAgICAgInRvTWVzc2FnZSIsCiAgICAgICAgIlRhc2suY29tbWFuZCIsCiAgICAgICAgIlBsYXRmb3JtLkNtZC5iYXRjaCIsCiAgICAgICAgIl9QbGF0Zm9ybV9iYXRjaCIsCiAgICAgICAgIlBsYXRmb3JtLkNtZC5ub25lIiwKICAgICAgICAiUGxhdGZvcm0uU3ViLmJhdGNoIiwKICAgICAgICAiUGxhdGZvcm0uU3ViLm5vbmUiLAogICAgICAgICJCcm93c2VyLnNhbmRib3giLAogICAgICAgICJpbXBsIiwKICAgICAgICAiX0Jyb3dzZXJfZWxlbWVudCIsCiAgICAgICAgImJuIiwKICAgICAgICAiYXAiLAogICAgICAgICJhQyIsCiAgICAgICAgImJQIiwKICAgICAgICAiYlIiLAogICAgICAgICJiUyIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy51cGRhdGUiLAogICAgICAgICJuZXdRdWVyeSIsCiAgICAgICAgIm5ld1N0YXRlIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzUGFnaW5hdGVkLnVwZGF0ZSIsCiAgICAgICAgIkRvY0Jvb2sudXBkYXRlIiwKICAgICAgICAiZXhhbXBsZVRvU3dpdGNoVG8iLAogICAgICAgICJleGFtcGxlTXNnIiwKICAgICAgICAiVmlydHVhbERvbS5ub2RlIiwKICAgICAgICAidGFnIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9kZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vU2NyaXB0IiwKICAgICAgICAiSHRtbC5ub2RlIiwKICAgICAgICAiSHRtbC5idXR0b24iLAogICAgICAgICJEb2NCb29rLmJ1dHRvbnMiLAogICAgICAgICJWaXJ0dWFsRG9tLnByb3BlcnR5IiwKICAgICAgICAiX1ZpcnR1YWxEb21fcHJvcGVydHkiLAogICAgICAgICJfVmlydHVhbERvbV9ub0lubmVySHRtbE9yRm9ybUFjdGlvbiIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5wcm9wZXJ0eSIsCiAgICAgICAgIkpzb24uRW5jb2RlLnN0cmluZyIsCiAgICAgICAgIl9Kc29uX3dyYXAiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuc3RyaW5nUHJvcGVydHkiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuY2xhc3MiLAogICAgICAgICJIdG1sLmRpdiIsCiAgICAgICAgIkRvY0Jvb2suZXhhbXBsZU5hbWUiLAogICAgICAgICJ2YXJpYW50IiwKICAgICAgICAiSHRtbC5oMiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5pZCIsCiAgICAgICAgIlZpcnR1YWxEb20ubWFwIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbWFwIiwKICAgICAgICAiSHRtbC5tYXAiLAogICAgICAgICJWaXJ0dWFsRG9tLm9uIiwKICAgICAgICAiX1ZpcnR1YWxEb21fb24iLAogICAgICAgICJIdG1sLkV2ZW50cy5vbiIsCiAgICAgICAgImV2ZW50IiwKICAgICAgICAiZGVjb2RlciIsCiAgICAgICAgIlZpcnR1YWxEb20uTm9ybWFsIiwKICAgICAgICAiSHRtbC5FdmVudHMub25DbGljayIsCiAgICAgICAgIlZpcnR1YWxEb20udGV4dCIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX3RleHQiLAogICAgICAgICJIdG1sLnRleHQiLAogICAgICAgICJWaXJ0dWFsRG9tLmF0dHJpYnV0ZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24iLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuYXR0cmlidXRlIiwKICAgICAgICAiQXJyYXkua2VlcElmIiwKICAgICAgICAiX0FycmF5X2ZpbHRlciIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5jbGFzc0xpc3QiLAogICAgICAgICJjbGFzc2VzIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNvbHNwYW4iLAogICAgICAgICJCYXNpY3MuZ3QiLAogICAgICAgICJfVXRpbHNfZ3QiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYS5sYWJlbCIsCiAgICAgICAgIkFycmF5LmZpbmRGaXJzdCIsCiAgICAgICAgIl9BcnJheV9maW5kRmlyc3QiLAogICAgICAgICJBcnJheS5tZW1iZXIiLAogICAgICAgICJ2IiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnJvd3NwYW4iLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuQXJpYS5zb3J0IiwKICAgICAgICAiRGF0YVRhYmxlLnNvcnREaXJlY3Rpb25Ub1N0cmluZyIsCiAgICAgICAgIkh0bWwuc3BhbiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy50YWJpbmRleCIsCiAgICAgICAgIkh0bWwudGgiLAogICAgICAgICJIdG1sLnRyIiwKICAgICAgICAiRGF0YVRhYmxlLmRlZmF1bHRUYWJsZUhlYWRlciIsCiAgICAgICAgImhlYWRlckluZm9zIiwKICAgICAgICAiZGVmYXVsdFRIIiwKICAgICAgICAicm93QW5kQ29sU3BhbiIsCiAgICAgICAgImlzU29ydGVkIiwKICAgICAgICAidmlld2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgImNvbHVtblRpdGxlIiwKICAgICAgICAiY29sdW1uT3JkZXIiLAogICAgICAgICJzb3J0RGlyZWN0aW9ucyIsCiAgICAgICAgIm8iLAogICAgICAgICJjYW5CZVNvcnRlZCIsCiAgICAgICAgInRoQ2xhc3NlcyIsCiAgICAgICAgImFyaWFTb3J0IiwKICAgICAgICAidGhBdHRyaWJ1dGVzIiwKICAgICAgICAiY2xpY2tBY3Rpb25zIiwKICAgICAgICAiRCIsCiAgICAgICAgIkUiLAogICAgICAgICJEYXRhVGFibGUuZ2V0QWN0aXZlUm93SWQiLAogICAgICAgICJWaXJ0dWFsRG9tLnN0eWxlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fc3R5bGUiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuc3R5bGUiLAogICAgICAgICJEYXRhVGFibGUuc2ltcGxlUm93QXR0cnMiLAogICAgICAgICJ0b0lkIiwKICAgICAgICAidG9Nc2ciLAogICAgICAgICJkYXRhIiwKICAgICAgICAiaXNfY3VycmVudF9yb3ciLAogICAgICAgICJEYXRhVGFibGUuZGVmYXVsdEN1c3RvbWl6YXRpb25zIiwKICAgICAgICAiYTciLAogICAgICAgICJhNCIsCiAgICAgICAgImE2IiwKICAgICAgICAiYW0iLAogICAgICAgICJiZCIsCiAgICAgICAgImFPIiwKICAgICAgICAiYVUiLAogICAgICAgICJhVyIsCiAgICAgICAgImFYIiwKICAgICAgICAiYVkiLAogICAgICAgICJEYXRhVGFibGUuY29uZmlnIiwKICAgICAgICAiYW8iLAogICAgICAgICJjRGF0YSIsCiAgICAgICAgImNvbHVtbnMiLAogICAgICAgICJhcSIsCiAgICAgICAgImEkIiwKICAgICAgICAiYTEiLAogICAgICAgICJBcnJheS5zb3J0QnkiLAogICAgICAgICJfQXJyYXlfc29ydEJ5IiwKICAgICAgICAiRGF0YVRhYmxlLmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSIsCiAgICAgICAgInRvQ29tcGFyYWJsZSIsCiAgICAgICAgIkRhdGFUYWJsZS5JbmNPckRlYyIsCiAgICAgICAgIkRhdGFUYWJsZS50ZXh0RGV0YWlscyIsCiAgICAgICAgIkRhdGFUYWJsZS5pbnRDb2x1bW4iLAogICAgICAgICJ0b0ludCIsCiAgICAgICAgInoiLAogICAgICAgICJCIiwKICAgICAgICAiRGF0YVRhYmxlLnN0cmluZ0NvbHVtbiIsCiAgICAgICAgInRvU3RyIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzLmNvbmZpZyIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5TZXRUYWJsZVN0YXRlIiwKICAgICAgICAiSHRtbC5oMSIsCiAgICAgICAgIkh0bWwuaW5wdXQiLAogICAgICAgICJIdG1sLmxpIiwKICAgICAgICAiSHRtbC5FdmVudHMuYWx3YXlzU3RvcCIsCiAgICAgICAgImgiLAogICAgICAgICJBIiwKICAgICAgICAiSHRtbC5FdmVudHMuc3RvcFByb3BhZ2F0aW9uT24iLAogICAgICAgICJWaXJ0dWFsRG9tLk1heVN0b3BQcm9wYWdhdGlvbiIsCiAgICAgICAgIkpzb24uRGVjb2RlLmZpZWxkIiwKICAgICAgICAiX0pzb25fZGVjb2RlRmllbGQiLAogICAgICAgICJKc29uLkRlY29kZS5hdCIsCiAgICAgICAgImZpZWxkcyIsCiAgICAgICAgIkpzb24uRGVjb2RlLnN0cmluZyIsCiAgICAgICAgIl9Kc29uX2RlY29kZVN0cmluZyIsCiAgICAgICAgIkh0bWwuRXZlbnRzLnRhcmdldFZhbHVlIiwKICAgICAgICAiSHRtbC5FdmVudHMub25JbnB1dCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5wbGFjZWhvbGRlciIsCiAgICAgICAgIlN0cmluZy50b0xvd2VyIiwKICAgICAgICAiX1N0cmluZ190b0xvd2VyIiwKICAgICAgICAiSHRtbC51bCIsCiAgICAgICAgIkh0bWwuY2FwdGlvbiIsCiAgICAgICAgIkJhc2ljcy5jb21wYXJlIiwKICAgICAgICAiX1V0aWxzX2NvbXBhcmUiLAogICAgICAgICJBcnJheS5zbGljZSIsCiAgICAgICAgIl9BcnJheV9zbGljZSIsCiAgICAgICAgIkFycmF5LmRyb3BGaXJzdCIsCiAgICAgICAgIkJhc2ljcy5pZGl2IiwKICAgICAgICAiX0Jhc2ljc19pZGl2IiwKICAgICAgICAiTWF0aC5tb2RCeSIsCiAgICAgICAgIl9NYXRoX21vZEJ5IiwKICAgICAgICAiRGF0YVRhYmxlLmlzRXZlbiIsCiAgICAgICAgIl9pbnQiLAogICAgICAgICJpbnQiLAogICAgICAgICJNYXliZS5tYXAiLAogICAgICAgICJtYXliZSIsCiAgICAgICAgIkJhc2ljcy5tdWwiLAogICAgICAgICJfQmFzaWNzX211bCIsCiAgICAgICAgIkRhdGFUYWJsZS5uZWdhdGl2ZVRvWmVybyIsCiAgICAgICAgIkJhc2ljcy5zdWIiLAogICAgICAgICJfQmFzaWNzX3N1YiIsCiAgICAgICAgIkFycmF5LnRha2VGaXJzdCIsCiAgICAgICAgIk1heWJlLndpdGhEZWZhdWx0IiwKICAgICAgICAiX2RlZmF1bHQiLAogICAgICAgICJkZWZhdWx0IiwKICAgICAgICAiRGF0YVRhYmxlLmdldFBhZ2luYXRlZERhdGEiLAogICAgICAgICJyb3dDdXJzb3IiLAogICAgICAgICJwcmVjZWRpbmdGdWxsUGFnZXMiLAogICAgICAgICJsYXN0Um93T25QYWdlIiwKICAgICAgICAiX3Y3IiwKICAgICAgICAibGFzdFJvd0JlZm9yZVBhZ2UiLAogICAgICAgICJfdjQiLAogICAgICAgICJBcnJheS5yZXZlcnNlIiwKICAgICAgICAiX0FycmF5X3JldmVyc2UiLAogICAgICAgICJEYXRhVGFibGUuYXBwbHlTb3J0ZXIiLAogICAgICAgICJzb3J0ZXIiLAogICAgICAgICJzcnQiLAogICAgICAgICJBcnJheS5maXJzdCIsCiAgICAgICAgIkFycmF5LnBvcEZpcnN0IiwKICAgICAgICAiYmoiLAogICAgICAgICJiRiIsCiAgICAgICAgIkRhdGFUYWJsZS5maW5kU29ydGVyIiwKICAgICAgICAic2VsZWN0ZWRDb2x1bW4iLAogICAgICAgICJEYXRhVGFibGUuc29ydCIsCiAgICAgICAgIl92NSIsCiAgICAgICAgInNvcnRDb2x1bW5OYW1lIiwKICAgICAgICAiRGF0YVRhYmxlLmdldFNvcnRlZERhdGEiLAogICAgICAgICJWaXJ0dWFsRG9tLmtleWVkTm9kZSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX2tleWVkTm9kZSIsCiAgICAgICAgIkh0bWwuS2V5ZWQubm9kZSIsCiAgICAgICAgIkh0bWwudGFibGUiLAogICAgICAgICJIdG1sLnRmb290IiwKICAgICAgICAiSHRtbC50aGVhZCIsCiAgICAgICAgIkRhdGFUYWJsZS50b0hlYWRlciIsCiAgICAgICAgIkRhdGFUYWJsZS5oZWFkZXJJbmZvIiwKICAgICAgICAic2VsZWN0ZWQiLAogICAgICAgICJiYyIsCiAgICAgICAgImJKIiwKICAgICAgICAiYVIiLAogICAgICAgICJIdG1sLkV2ZW50cy5vbkRvdWJsZUNsaWNrIiwKICAgICAgICAiQmFzaWNzLm5lcSIsCiAgICAgICAgIl9VdGlsc19ub3RFcXVhbCIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVNdWx0aVNvcnRTdGF0ZSIsCiAgICAgICAgIm5ld1NvcnRTdGF0ZSIsCiAgICAgICAgIkRhdGFUYWJsZS5vbkNvbHVtbkhlYWRlciIsCiAgICAgICAgIkRhdGFUYWJsZS50b0hlYWRlckluZm8iLAogICAgICAgICJpbmRleGVkTGlzdCIsCiAgICAgICAgImlkeCIsCiAgICAgICAgInZhbCIsCiAgICAgICAgImJ0IiwKICAgICAgICAiYkciLAogICAgICAgICJub25FbXB0eUxpc3QiLAogICAgICAgICJmaWx0ZXJlZExpc3QiLAogICAgICAgICJfdjgiLAogICAgICAgICJfdjYiLAogICAgICAgICJiTSIsCiAgICAgICAgImluZGV4IiwKICAgICAgICAicmV2ZXJzZSIsCiAgICAgICAgInJldmVyc2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgIkh0bWwudGQiLAogICAgICAgICJEYXRhVGFibGUudmlld0NlbGwiLAogICAgICAgICJkZXRhaWxzIiwKICAgICAgICAidmlld0RhdGEiLAogICAgICAgICJEYXRhVGFibGUudmlld1Jvd0hlbHAiLAogICAgICAgICJ0b1Jvd0F0dHJzIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdSb3ciLAogICAgICAgICJiciIsCiAgICAgICAgImJ5IiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXciLAogICAgICAgICJjb25mIiwKICAgICAgICAicm93cyIsCiAgICAgICAgInRib2R5IiwKICAgICAgICAiY3VzdG9taXphdGlvbnMiLAogICAgICAgICJ3aXRoRm9vdCIsCiAgICAgICAgIl92MyIsCiAgICAgICAgImF0dHJpYnV0ZXMiLAogICAgICAgICJjaGlsZHJlbiIsCiAgICAgICAgImhlYWRlcnMiLAogICAgICAgICJ0aGVhZERldGFpbHMiLAogICAgICAgICJ0aGVhZCIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy52aWV3IiwKICAgICAgICAibG93ZXJRdWVyeSIsCiAgICAgICAgInF1ZXJ5IiwKICAgICAgICAiYWNjZXB0YWJsZVBlb3BsZSIsCiAgICAgICAgIkV4YW1wbGUuUHJlc2lkZW50cy5TZXRRdWVyeSIsCiAgICAgICAgInRhYmxlU3RhdGUiLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHNQYWdpbmF0ZWQuY29uZmlnIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzUGFnaW5hdGVkLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJEYXRhVGFibGUuZ2V0UGFnZVNpemUiLAogICAgICAgICJIdG1sLm9wdGlvbiIsCiAgICAgICAgIkh0bWwuc2VsZWN0IiwKICAgICAgICAiSnNvbi5FbmNvZGUuYm9vbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5ib29sUHJvcGVydHkiLAogICAgICAgICJib29sIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnNlbGVjdGVkIiwKICAgICAgICAiQmFzaWNzLmdlIiwKICAgICAgICAiX1V0aWxzX2dlIiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZVBhZ2VTaXplIiwKICAgICAgICAibWluaW11bU5ld1BhZ2VTaXplIiwKICAgICAgICAibmV4dEhpZ2hlckluTGlzdCIsCiAgICAgICAgImlucHV0IiwKICAgICAgICAibGlzdCIsCiAgICAgICAgIm5ld1BhZ2VTaXplIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnZhbHVlIiwKICAgICAgICAiRGF0YVRhYmxlLnBhZ2VMZW5ndGhDaG9vc2VyIiwKICAgICAgICAidmlld09wdGlvbiIsCiAgICAgICAgInZhbHVlcyIsCiAgICAgICAgImh0bWwiLAogICAgICAgICJvblBhZ2VTaXplQ2hvaWNlIiwKICAgICAgICAiRXhhbXBsZS5QcmVzaWRlbnRzUGFnaW5hdGVkLnZpZXciLAogICAgICAgICJFeGFtcGxlLlByZXNpZGVudHNQYWdpbmF0ZWQuU2V0UXVlcnkiLAogICAgICAgICJEb2NCb29rLnZpZXciLAogICAgICAgICJpc0FjdGl2ZSIsCiAgICAgICAgInZhcmlhbnRzIiwKICAgICAgICAiRG9jQm9vay5Td2l0Y2hFeGFtcGxlIiwKICAgICAgICAiRG9jQm9vay5QcmVzaWRlbnRzTXNnIiwKICAgICAgICAiRG9jQm9vay5QYWdpbmF0ZWRNc2ciLAogICAgICAgICJEb2NCb29rLm1haW4iCiAgICBdLAogICAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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