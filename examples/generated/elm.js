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



// ELEMENT

var _Browser_element = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.init,
    impl.update,
    impl.subscriptions,
    function (sendToApp, initialModel) {
      var view = impl.view;
      /**_UNUSED/
			var domNode = args['node'];
			//*/
      /**/
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
    impl.init,
    impl.update,
    impl.subscriptions,
    function (sendToApp, initialModel) {
      var divertHrefToApp = impl.setup && impl.setup(sendToApp);
      var view = impl.view;
      var title = _VirtualDom_doc.title;
      var bodyNode = _VirtualDom_doc.body;
      var currNode = _VirtualDom_virtualize(bodyNode);
      return _Browser_makeAnimator(initialModel, function (model) {
        _VirtualDom_divertHrefToApp = divertHrefToApp;
        var doc = view(model);
        var nextNode = _VirtualDom_node("body")([])(doc.body);
        var patches = _VirtualDom_diff(currNode, nextNode);
        bodyNode = _VirtualDom_applyPatches(
          bodyNode,
          currNode,
          patches,
          sendToApp
        );
        currNode = nextNode;
        _VirtualDom_divertHrefToApp = 0;
        title !== doc.title &&
          (_VirtualDom_doc.title = title = doc.title);
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
  var onUrlChange = impl.onUrlChange;
  var onUrlRequest = impl.onUrlRequest;
  var key = function () {
    key.a(onUrlChange(_Browser_getUrl()));
  };

  return _Browser_document({
    setup: function (sendToApp) {
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
                curr.protocol === next.protocol &&
                curr.host === next.host &&
                curr.port_.a === next.port_.a
                ? $gren_lang$browser$Browser$Internal(next)
                : $gren_lang$browser$Browser$External(href)
            )
          );
        }
      });
    },
    init: function (flags) {
      return A3(impl.init, flags, _Browser_getUrl(), key);
    },
    view: impl.view,
    update: impl.update,
    subscriptions: impl.subscriptions,
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
    ? { hidden: "hidden", change: "visibilitychange" }
    : typeof _VirtualDom_doc.mozHidden !== "undefined"
    ? { hidden: "mozHidden", change: "mozvisibilitychange" }
    : typeof _VirtualDom_doc.msHidden !== "undefined"
    ? { hidden: "msHidden", change: "msvisibilitychange" }
    : typeof _VirtualDom_doc.webkitHidden !== "undefined"
    ? { hidden: "webkitHidden", change: "webkitvisibilitychange" }
    : { hidden: "hidden", change: "visibilitychange" };
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
    scene: _Browser_getScene(),
    viewport: {
      x: _Browser_window.pageXOffset,
      y: _Browser_window.pageYOffset,
      width: _Browser_doc.documentElement.clientWidth,
      height: _Browser_doc.documentElement.clientHeight,
    },
  };
}

function _Browser_getScene() {
  var body = _Browser_doc.body;
  var elem = _Browser_doc.documentElement;
  return {
    width: Math.max(
      body.scrollWidth,
      body.offsetWidth,
      elem.scrollWidth,
      elem.offsetWidth,
      elem.clientWidth
    ),
    height: Math.max(
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
      scene: {
        width: node.scrollWidth,
        height: node.scrollHeight,
      },
      viewport: {
        x: node.scrollLeft,
        y: node.scrollTop,
        width: node.clientWidth,
        height: node.clientHeight,
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
      scene: _Browser_getScene(),
      viewport: {
        x: x,
        y: y,
        width: _Browser_doc.documentElement.clientWidth,
        height: _Browser_doc.documentElement.clientHeight,
      },
      element: {
        x: x + rect.left,
        y: y + rect.top,
        width: rect.width,
        height: rect.height,
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


// LOG

var _Debug_log_UNUSED = F2(function (tag, value) {
  return value;
});

var _Debug_log = F2(function (tag, value) {
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

function _Debug_toString_UNUSED(value) {
  return "<internals>";
}

function _Debug_toString(value) {
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
    return _Debug_toAnsiString(ansi, value.array.slice(0, value.target));
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

function _Debug_crash_UNUSED(identifier) {
  throw new Error(
    "https://github.com/gren-lang/core/blob/1.0.0/hints/" + identifier + ".md",
  );
}

function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
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
  if (region.start.line === region.end.line) {
    return "on line " + region.start.line;
  }
  return (
    "on lines " + region.start.line + " through " + region.end.line
  );
}
var $gren_lang$core$Dict$foldl$ = function(func, acc, dict) {
	foldl:
	while (true) {
		if (dict.$ === 'RBEmpty_gren_builtin') {
			return acc;
		} else {
			var _v1 = dict.a;
			var key = _v1.key;
			var value = _v1.value;
			var left = _v1.left;
			var right = _v1.right;
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
      return $gren_lang$core$Maybe$Just({ index: i, value: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_findLast = F2(function (pred, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ index: i, value: element });
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
    this.target = target;
    this.finalized = finalized;
    this.array = array;
  }
}

var _Array_emptyBuilder = function (capacity) {
  return new _Array_Builder(0, false, new Array(capacity));
};

var _Array_pushToBuilder = F2(function (value, builder) {
  var array = builder.array;
  var target = builder.target;

  if (builder.finalized) {
    array = array.slice(0, target);
  } else {
    builder.finalized = true;
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
  var result = builder.array;

  if (builder.finalized) {
    result = result.slice(0, builder.target);
  } else {
    builder.finalized = true;
    result.length = builder.target;
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

  /**/
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

  /**_UNUSED/
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

  /**/
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

function _Utils_chr_UNUSED(c) {
  return c;
}
function _Utils_chr(c) {
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
var $gren_lang$core$Basics$EQ = { $: 'EQ' };
var $gren_lang$core$Basics$GT = { $: 'GT' };
var $gren_lang$core$Basics$LT = { $: 'LT' };
var $gren_lang$core$Maybe$Just = function (a) {
	return { $: 'Just', a: a };
};
var $gren_lang$core$Maybe$Nothing = { $: 'Nothing' };
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
	var dict = _v0.a;
	return $gren_lang$core$Dict$keys(dict);
};


/**/
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
        message: "This is not valid JSON! " + e.message,
        value: _Json_wrap(string),
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
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Field({ name: field, error: result.a }));

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
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ index: index, error: result.a }));

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
              $gren_lang$core$Json$Decode$Field({ name: key, error: result.a }),
            );
          }
          keyValuePairs.push({ key: key, value: result.a });
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
          message: decoder.a,
          value: _Json_wrap(value),
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
      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ index: i, error: result.a }));
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
      message: "Expecting " + type,
      value: _Json_wrap(value),
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

function _Json_wrap(value) {
  return { $: 0, a: value };
}
function _Json_unwrap(value) {
  return value.a;
}

function _Json_wrap_UNUSED(value) {
  return value;
}
function _Json_unwrap_UNUSED(value) {
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
	return { $: 'Err', a: a };
};
var $gren_lang$core$Json$Decode$Failure = function (a) {
	return { $: 'Failure', a: a };
};
var $gren_lang$core$Json$Decode$Field = function (a) {
	return { $: 'Field', a: a };
};
var $gren_lang$core$Json$Decode$Index = function (a) {
	return { $: 'Index', a: a };
};
var $gren_lang$core$Result$Ok = function (a) {
	return { $: 'Ok', a: a };
};
var $gren_lang$core$Json$Decode$OneOf = function (a) {
	return { $: 'OneOf', a: a };
};
var $gren_lang$core$Basics$False = { $: 'False' };


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
    first: _Utils_chr(firstChar),
    rest: string.slice(firstChar.length),
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
      last: _Utils_chr(string[string.length - 1]),
      rest: string.slice(string.length - 1),
    });
  }

  // last char is a point
  return $gren_lang$core$Maybe$Just({
    last: _Utils_chr(String.fromCodePoint(possibleLastPoint)),
    rest: string.slice(string.length - 2),
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
var $gren_lang$core$Basics$append = _Utils_append;
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
			case 'Field':
				var _v1 = error.a;
				var f = _v1.name;
				var err = _v1.error;
				var isSimple = function () {
					var _v2 = $gren_lang$core$String$popFirst(f);
					if (_v2.$ === 'Nothing') {
						return false;
					} else {
						var _v3 = _v2.a;
						var _char = _v3.first;
						var rest = _v3.rest;
						return $gren_lang$core$Char$isAlpha(_char) && $gren_lang$core$String$all$($gren_lang$core$Char$isAlphaNum, rest);
					}
				}();
				var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
				var $temp$error = err,
				$temp$context = _Utils_ap([ fieldName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 'Index':
				var _v4 = error.a;
				var i = _v4.index;
				var err = _v4.error;
				var indexName = '[' + ($gren_lang$core$String$fromInt(i) + ']');
				var $temp$error = err,
				$temp$context = _Utils_ap([ indexName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 'OneOf':
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
				var msg = _v8.message;
				var json = _v8.value;
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
var $gren_lang$core$Basics$True = { $: 'True' };
var $gren_lang$core$Result$isOk = function(result) {
	if (result.$ === 'Ok') {
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
    impl.init,
    impl.update,
    impl.subscriptions,
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
    _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
  var managers = {};
  var initPair = init(result.a);
  var model = initPair.model;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp);

  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper((model = pair.model), viewMetadata);
    _Platform_enqueueEffects(managers, pair.command, subscriptions(model));
  }

  _Platform_enqueueEffects(managers, initPair.command, subscriptions(model));

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

function _Platform_export_UNUSED(exports) {
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

function _Platform_export(exports) {
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

  /**_UNUSED/
	var node = args['node'];
	//*/
  /**/
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
      descendantsCount += kid.node.b || 0;
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

function _VirtualDom_noJavaScriptUri_UNUSED(value) {
  return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
}

function _VirtualDom_noJavaScriptUri(value) {
  return /^javascript:/i.test(value.replace(/\s/g, ""))
    ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
    : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
  return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value) {
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
    message: func(record.message),
    stopPropagation: record.stopPropagation,
  };
});

var _VirtualDom_mapMayPreventDefault = F2(function (func, record) {
  return {
    message: func(record.message),
    preventDefault: record.preventDefault,
  };
});

var _VirtualDom_mapEventRecord = F2(function (func, record) {
  return {
    message: func(record.message),
    stopPropagation: record.stopPropagation,
    preventDefault: record.preventDefault,
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
        tag === 1 ? kids[i] : kids[i].node,
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
    var message = !tag ? value : value.message;
    var stopPropagation =
      tag == 1 || tag == 3 ? value.stopPropagation : false;
    var currentEventNode =
      (stopPropagation && event.stopPropagation(),
      (tag == 2 || tag == 3 ? value.preventDefault : false) &&
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

    var xKey = x.key;
    var yKey = y.key;
    var xNode = x.node;
    var yNode = y.node;

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
      var xNextKey = xNext.key;
      var xNextNode = xNext.node;
      oldMatch = yKey === xNextKey;
    }

    if (yNext) {
      var yNextKey = yNext.key;
      var yNextNode = yNext.node;
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
    var xNode = x.node;
    _VirtualDom_removeNode(changes, localPatches, x.key, xNode, index);
    index += xNode.b || 0;
    xIndex++;
  }

  while (yIndex < yLen) {
    var endInserts = endInserts || [];
    var y = yKids[yIndex];
    _VirtualDom_insertNode(
      changes,
      localPatches,
      y.key,
      y.node,
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
    var vKid = tag === 1 ? vKids[j] : vKids[j].node;
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
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $gren_lang$browser$Browser$External = function (a) {
	return { $: 'External', a: a };
};
var $gren_lang$browser$Browser$Internal = function (a) {
	return { $: 'Internal', a: a };
};
var $gren_lang$core$Basics$identity = function(x) {
	return x;
};
var $gren_lang$browser$Browser$Dom$NotFound = function (a) {
	return { $: 'NotFound', a: a };
};
var $gren_lang$url$Url$Http = { $: 'Http' };
var $gren_lang$url$Url$Https = { $: 'Https' };
var $gren_lang$core$Basics$apL$ = function(f, x) {
	return f(x);
};
var $gren_lang$core$Basics$apL = F2($gren_lang$core$Basics$apL$);
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
				return $gren_lang$core$Maybe$Just({ fragment: frag, host: str, path: path, port_: $gren_lang$core$Maybe$Nothing, protocol: protocol, query: params });
			case 1:
				var i = _v0[0];
				var _v1 = $gren_lang$core$String$toInt($gren_lang$core$String$dropFirst$(i + 1, str));
				if (_v1.$ === 'Nothing') {
					return $gren_lang$core$Maybe$Nothing;
				} else {
					var port_ = _v1;
					return $gren_lang$core$Maybe$Just({ fragment: frag, host: $gren_lang$core$String$takeFirst$(i, str), path: path, port_: port_, protocol: protocol, query: params });
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
		if (_v0.$ === 'Nothing') {
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
		if (_v0.$ === 'Nothing') {
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
		if (_v0.$ === 'Nothing') {
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
	return A2($gren_lang$core$String$startsWith, 'http://', str) ? $gren_lang$url$Url$chompAfterProtocol$($gren_lang$url$Url$Http, $gren_lang$core$String$dropFirst$(7, str)) : (A2($gren_lang$core$String$startsWith, 'https://', str) ? $gren_lang$url$Url$chompAfterProtocol$($gren_lang$url$Url$Https, $gren_lang$core$String$dropFirst$(8, str)) : $gren_lang$core$Maybe$Nothing);
};
var $gren_lang$core$Basics$never = function(_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $gren_lang$core$Task$Perform = function (a) {
	return { $: 'Perform', a: a };
};
var $gren_lang$core$Task$succeed = _Scheduler_succeed;
var $gren_lang$core$Task$init = $gren_lang$core$Task$succeed({  });
var $gren_lang$core$Array$map = _Array_map;
var $gren_lang$core$Task$andThen = _Scheduler_andThen;
var $gren_lang$core$Basics$apR$ = function(x, f) {
	return f(x);
};
var $gren_lang$core$Basics$apR = F2($gren_lang$core$Basics$apR$);
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
	if (cmd.$ === 'Perform') {
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
	return { $: 'Execute', a: a };
};
var $gren_lang$core$Task$cmdMap$ = function(tagger, cmd) {
	if (cmd.$ === 'Perform') {
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
var $gren_lang$browser$Browser$element = _Browser_element;
var $author$project$DataTable$Asc = { $: 'Asc' };
var $author$project$DataTable$NoPagination = { $: 'NoPagination' };
var $author$project$DataTable$State = function (a) {
	return { $: 'State', a: a };
};
var $author$project$DataTable$new = function(id) {
	return $author$project$DataTable$State({ activeRowId: '', pageSize: 0, pagination: $author$project$DataTable$NoPagination, sortColumns: [  ], tableId: id });
};
var $gren_lang$core$Platform$Cmd$batch = _Platform_batch;
var $gren_lang$core$Platform$Cmd$none = $gren_lang$core$Platform$Cmd$batch([  ]);
var $author$project$DataTable$Scroller = function (a) {
	return { $: 'Scroller', a: a };
};
var $gren_lang$core$Array$sort = _Array_sort;
var $author$project$DataTable$setScrollingPaginationWith$ = function(defaultPageSize, otherPageSizes, state) {
	var currentState = state.a;
	return $author$project$DataTable$State(_Utils_update(currentState, { pageSize: defaultPageSize, pagination: $author$project$DataTable$Scroller($gren_lang$core$Array$sort(_Utils_ap([ defaultPageSize ], otherPageSizes))) }));
};
var $author$project$DataTable$setScrollingPaginationWith = F3($author$project$DataTable$setScrollingPaginationWith$);
var $author$project$DataTable$updateActiveRowId$ = function(newActiveRowId, _v0) {
	var _v1 = _v0.a;
	var sortColumns = _v1.sortColumns;
	var pageSize = _v1.pageSize;
	var pagination = _v1.pagination;
	var tableId = _v1.tableId;
	return $author$project$DataTable$State({ activeRowId: newActiveRowId, pageSize: pageSize, pagination: pagination, sortColumns: sortColumns, tableId: tableId });
};
var $author$project$DataTable$updateActiveRowId = F2($author$project$DataTable$updateActiveRowId$);
var $gren_lang$core$Array$keepIf = _Array_filter;
var $gren_lang$core$Basics$neq = _Utils_notEqual;
var $author$project$DataTable$updateMultiSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0.a;
	var sortColumns = _v1.sortColumns;
	var pageSize = _v1.pageSize;
	var activeRowId = _v1.activeRowId;
	var pagination = _v1.pagination;
	var tableId = _v1.tableId;
	var newSortState = _Utils_ap([ { sortColumnName: newSortColumn, sortDirection: sortDirection } ], A2($gren_lang$core$Array$keepIf, function(_v2) {
				var sortColumnName = _v2.sortColumnName;
				return !_Utils_eq(sortColumnName, newSortColumn);
			}, sortColumns));
	return $author$project$DataTable$State({ activeRowId: activeRowId, pageSize: pageSize, pagination: pagination, sortColumns: newSortState, tableId: tableId });
};
var $author$project$DataTable$updateMultiSortState = F3($author$project$DataTable$updateMultiSortState$);
var $author$project$PresidentsPaginated$init = function(people) {
	var model = { people: people, query: '', tableState: $author$project$DataTable$updateActiveRowId$('', $author$project$DataTable$updateMultiSortState$('Year', $author$project$DataTable$Asc, $author$project$DataTable$setScrollingPaginationWith$(10, [ 0, 5, 25, 50 ], $author$project$DataTable$new('Presidents')))) };
	return { command: $gren_lang$core$Platform$Cmd$none, model: model };
};
var $gren_lang$core$Platform$Sub$batch = _Platform_batch;
var $gren_lang$core$Platform$Sub$none = $gren_lang$core$Platform$Sub$batch([  ]);
var $author$project$PresidentsPaginated$person$ = function(name, year, city, state) {
	return { city: city, name: name, state: state, year: year };
};
var $author$project$PresidentsPaginated$person = F4($author$project$PresidentsPaginated$person$);
var $author$project$PresidentsPaginated$presidents = [ $author$project$PresidentsPaginated$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$PresidentsPaginated$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$PresidentsPaginated$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$PresidentsPaginated$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$PresidentsPaginated$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$PresidentsPaginated$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$PresidentsPaginated$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$PresidentsPaginated$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$PresidentsPaginated$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$PresidentsPaginated$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$PresidentsPaginated$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$PresidentsPaginated$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$PresidentsPaginated$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$PresidentsPaginated$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$PresidentsPaginated$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$PresidentsPaginated$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$PresidentsPaginated$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$PresidentsPaginated$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$PresidentsPaginated$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$PresidentsPaginated$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$PresidentsPaginated$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$PresidentsPaginated$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$PresidentsPaginated$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$PresidentsPaginated$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$PresidentsPaginated$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$PresidentsPaginated$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$PresidentsPaginated$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$PresidentsPaginated$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$PresidentsPaginated$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$PresidentsPaginated$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$PresidentsPaginated$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$PresidentsPaginated$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$PresidentsPaginated$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$PresidentsPaginated$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$PresidentsPaginated$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$PresidentsPaginated$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$PresidentsPaginated$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$PresidentsPaginated$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$PresidentsPaginated$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$PresidentsPaginated$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$PresidentsPaginated$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$PresidentsPaginated$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$PresidentsPaginated$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$PresidentsPaginated$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$PresidentsPaginated$update$ = function(msg, model) {
	if (msg.$ === 'SetQuery') {
		var newQuery = msg.a;
		return { command: $gren_lang$core$Platform$Cmd$none, model: _Utils_update(model, { query: newQuery }) };
	} else {
		var newState = msg.a;
		return { command: $gren_lang$core$Platform$Cmd$none, model: _Utils_update(model, { tableState: newState }) };
	}
};
var $author$project$PresidentsPaginated$update = F2($author$project$PresidentsPaginated$update$);
var $author$project$PresidentsPaginated$SetQuery = function (a) {
	return { $: 'SetQuery', a: a };
};
var $author$project$PresidentsPaginated$SetTableState = function (a) {
	return { $: 'SetTableState', a: a };
};
var $author$project$DataTable$Config = function (a) {
	return { $: 'Config', a: a };
};
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
var $author$project$DataTable$Desc = { $: 'Desc' };
var $gren_lang$browser$VirtualDom$attribute$ = function(key, value) {
	return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
};
var $gren_lang$browser$VirtualDom$attribute = F2($gren_lang$browser$VirtualDom$attribute$);
var $gren_lang$browser$Html$Attributes$attribute = $gren_lang$browser$VirtualDom$attribute;
var $gren_lang$browser$Html$Attributes$classList = function(classes) {
	return $gren_lang$browser$Html$Attributes$class(A2($gren_lang$core$String$join, ' ', A2($gren_lang$core$Array$map, function ($) {
					return $._class;
				}, A2($gren_lang$core$Array$keepIf, function ($) {
						return $.enabled;
					}, classes))));
};
var $gren_lang$browser$Html$Attributes$colspan = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'colspan', $gren_lang$core$String$fromInt(n));
};
var $gren_lang$browser$VirtualDom$node = function(tag) {
	return _VirtualDom_node(_VirtualDom_noScript(tag));
};
var $gren_lang$browser$Html$node = $gren_lang$browser$VirtualDom$node;
var $gren_lang$browser$Html$div = $gren_lang$browser$Html$node('div');
var $gren_lang$core$Basics$gt = _Utils_gt;
var $author$project$Html$Attributes$Aria$label = $gren_lang$browser$Html$Attributes$attribute('aria-label');
var $gren_lang$core$Array$findFirst = _Array_findFirst;
var $gren_lang$core$Array$member$ = function(value, array) {
	var _v0 = A2($gren_lang$core$Array$findFirst, function(v) {
			return _Utils_eq(v, value);
		}, array);
	if (_v0.$ === 'Just') {
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
	if (sortDirection.$ === 'Asc') {
		return 'Asc';
	} else {
		return 'Desc';
	}
};
var $gren_lang$browser$Html$span = $gren_lang$browser$Html$node('span');
var $gren_lang$browser$Html$Attributes$tabindex = function(n) {
	return A2($gren_lang$browser$Html$Attributes$attribute, 'tabIndex', $gren_lang$core$String$fromInt(n));
};
var $gren_lang$browser$VirtualDom$text = _VirtualDom_text;
var $gren_lang$browser$Html$text = $gren_lang$browser$VirtualDom$text;
var $gren_lang$browser$Html$th = $gren_lang$browser$Html$node('th');
var $gren_lang$browser$Html$tr = $gren_lang$browser$Html$node('tr');
var $author$project$DataTable$defaultTableHeader = function(headerInfos) {
	var defaultTH = function(_v2) {
		var name = _v2.name;
		var selected = _v2.selected;
		var sortDirections = _v2.sortDirections;
		var clickActions = _v2.clickActions;
		var rowAndColSpan = [ $gren_lang$browser$Html$Attributes$rowspan(1), $gren_lang$browser$Html$Attributes$colspan(1) ];
		var isSorted = function(viewedSortDirection) {
			if (selected.$ === 'Just') {
				var sortDirection = selected.a.sortDirection;
				return _Utils_eq(viewedSortDirection, sortDirection);
			} else {
				return false;
			}
		};
		var columnTitle = A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$class('dt-column-title') ], [ $gren_lang$browser$Html$text(name) ]);
		var columnOrder = ($gren_lang$core$Array$length(sortDirections) > 0) ? A2($gren_lang$browser$Html$span, [ $gren_lang$browser$Html$Attributes$classList([ { _class: 'dt-column-order', enabled: true } ]), $author$project$Html$Attributes$Aria$label('Click here to sort by this column'), A2($gren_lang$browser$Html$Attributes$attribute, 'role', 'button'), $gren_lang$browser$Html$Attributes$tabindex(0) ], [  ]) : $gren_lang$browser$Html$text('');
		var canBeSorted = function(sortDirection) {
			return $gren_lang$core$Array$member$(sortDirection, sortDirections);
		};
		var thClasses = [ $gren_lang$browser$Html$Attributes$classList([ { _class: 'dt-orderable-asc', enabled: canBeSorted($author$project$DataTable$Asc) }, { _class: 'dt-orderable-desc', enabled: canBeSorted($author$project$DataTable$Desc) }, { _class: 'dt-ordering-asc', enabled: isSorted($author$project$DataTable$Asc) }, { _class: 'dt-ordering-desc', enabled: isSorted($author$project$DataTable$Desc) }, { _class: 'dt-ordering-none', enabled: (!isSorted($author$project$DataTable$Asc)) && (!isSorted($author$project$DataTable$Desc)) } ]) ];
		var ariaSort = function () {
			if (selected.$ === 'Just') {
				var sortDirection = selected.a.sortDirection;
				return [ $author$project$Html$Attributes$Aria$sort($author$project$DataTable$sortDirectionToString(sortDirection)) ];
			} else {
				return [  ];
			}
		}();
		var thAttributes = _Utils_ap(clickActions, _Utils_ap(ariaSort, _Utils_ap(rowAndColSpan, thClasses)));
		return A2($gren_lang$browser$Html$th, thAttributes, [ A2($gren_lang$browser$Html$div, [ $gren_lang$browser$Html$Attributes$class('dt-column-header') ], [ columnTitle, columnOrder ]) ]);
	};
	return { attributes: [  ], children: [ A2($gren_lang$browser$Html$tr, [  ], A2($gren_lang$core$Array$map, defaultTH, headerInfos)) ] };
};
var $author$project$DataTable$getActiveRowId = function(_v0) {
	var activeRowId = _v0.a.activeRowId;
	return activeRowId;
};
var $gren_lang$browser$VirtualDom$Normal = function (a) {
	return { $: 'Normal', a: a };
};
var $gren_lang$browser$VirtualDom$on = _VirtualDom_on;
var $gren_lang$browser$Html$Events$on$ = function(event, decoder) {
	return A2($gren_lang$browser$VirtualDom$on, event, $gren_lang$browser$VirtualDom$Normal(decoder));
};
var $gren_lang$browser$Html$Events$on = F2($gren_lang$browser$Html$Events$on$);
var $gren_lang$browser$Html$Events$onClick = function(msg) {
	return $gren_lang$browser$Html$Events$on$('click', $gren_lang$core$Json$Decode$succeed(msg));
};
var $gren_lang$browser$VirtualDom$style = _VirtualDom_style;
var $gren_lang$browser$Html$Attributes$style = $gren_lang$browser$VirtualDom$style;
var $author$project$DataTable$simpleRowAttrs$ = function(toId, toMsg, state, data) {
	var is_current_row = _Utils_eq(toId(data), $author$project$DataTable$getActiveRowId(state)) ? true : false;
	return is_current_row ? [ A2($gren_lang$browser$Html$Attributes$style, 'background', '#CEFAF8') ] : [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateActiveRowId$(toId(data), state))) ];
};
var $author$project$DataTable$simpleRowAttrs = F4($author$project$DataTable$simpleRowAttrs$);
var $author$project$DataTable$defaultCustomizations = { beforeAndAfterTable: { after: $gren_lang$core$Maybe$Nothing, before: $gren_lang$core$Maybe$Nothing }, caption: $gren_lang$core$Maybe$Nothing, colgroup: function(_v0) {
	return $gren_lang$core$Maybe$Nothing;
}, rowAttrs: $author$project$DataTable$simpleRowAttrs, tableAttrs: [ $gren_lang$browser$Html$Attributes$class('dataTable') ], tbodyAttrs: [  ], tfoot: $gren_lang$core$Maybe$Nothing, thead: $author$project$DataTable$defaultTableHeader };
var $author$project$DataTable$config = function(_v0) {
	var toId = _v0.toId;
	var toMsg = _v0.toMsg;
	var columns = _v0.columns;
	return $author$project$DataTable$Config({ columns: A2($gren_lang$core$Array$map, function(_v1) {
				var cData = _v1.a;
				return cData;
			}, columns), customizations: $author$project$DataTable$defaultCustomizations, toId: toId, toMsg: toMsg });
};
var $author$project$DataTable$Column = function (a) {
	return { $: 'Column', a: a };
};
var $author$project$DataTable$IncOrDec = function (a) {
	return { $: 'IncOrDec', a: a };
};
var $gren_lang$core$Array$sortBy = _Array_sortBy;
var $author$project$DataTable$increasingOrDecreasingBy = function(toComparable) {
	return $author$project$DataTable$IncOrDec($gren_lang$core$Array$sortBy(toComparable));
};
var $author$project$DataTable$textDetails = function(str) {
	return { attributes: [  ], children: [ $gren_lang$browser$Html$text(str) ] };
};
var $author$project$DataTable$intColumn$ = function(name, toInt) {
	return $author$project$DataTable$Column({ name: name, sorter: $author$project$DataTable$increasingOrDecreasingBy(toInt), viewData: $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, $gren_lang$core$String$fromInt), toInt) });
};
var $author$project$DataTable$intColumn = F2($author$project$DataTable$intColumn$);
var $author$project$DataTable$stringColumn$ = function(name, toStr) {
	return $author$project$DataTable$Column({ name: name, sorter: $author$project$DataTable$increasingOrDecreasingBy(toStr), viewData: $gren_lang$core$Basics$composeL$($author$project$DataTable$textDetails, toStr) });
};
var $author$project$DataTable$stringColumn = F2($author$project$DataTable$stringColumn$);
var $author$project$PresidentsPaginated$config = $author$project$DataTable$config({ columns: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.name;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.year;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.city;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.state;
		}) ], toId: function ($) {
		return $.name;
	}, toMsg: $author$project$PresidentsPaginated$SetTableState });
var $gren_lang$browser$Html$h1 = $gren_lang$browser$Html$node('h1');
var $gren_lang$browser$Html$input = $gren_lang$browser$Html$node('input');
var $gren_lang$browser$Html$li = $gren_lang$browser$Html$node('li');
var $gren_lang$browser$Html$Events$alwaysStop = function(msg) {
	return { message: msg, stopPropagation: true };
};
var $gren_lang$browser$VirtualDom$MayStopPropagation = function (a) {
	return { $: 'MayStopPropagation', a: a };
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
	var pageSize = _v0.a.pageSize;
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
	if (_v0.$ === 'Just') {
		var value = _v0.a;
		return $gren_lang$core$Maybe$Just({ first: value, rest: $gren_lang$core$Array$dropFirst$(1, array) });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $author$project$DataTable$updatePageSize$ = function(minimumNewPageSize, _v0) {
	var _v1 = _v0.a;
	var sortColumns = _v1.sortColumns;
	var activeRowId = _v1.activeRowId;
	var pagination = _v1.pagination;
	var tableId = _v1.tableId;
	var nextHigherInList = F2(function(input, list) {
			var _v3 = $gren_lang$core$Array$popFirst(A2($gren_lang$core$Array$keepIf, function(x) {
						return _Utils_cmp(x, input) > -1;
					}, $gren_lang$core$Array$sort(list)));
			if (_v3.$ === 'Just') {
				var x = _v3.a;
				return function ($) {
					return $.first;
				}(x);
			} else {
				return 0;
			}
		});
	var newPageSize = function () {
		switch (pagination.$) {
			case 'Pager':
				var list = pagination.a;
				return A2(nextHigherInList, minimumNewPageSize, list);
			case 'Scroller':
				var list = pagination.a;
				return A2(nextHigherInList, minimumNewPageSize, list);
			default:
				return 0;
		}
	}();
	return $author$project$DataTable$State({ activeRowId: activeRowId, pageSize: newPageSize, pagination: pagination, sortColumns: sortColumns, tableId: tableId });
};
var $author$project$DataTable$updatePageSize = F2($author$project$DataTable$updatePageSize$);
var $gren_lang$browser$Html$Attributes$value = $gren_lang$browser$Html$Attributes$stringProperty('value');
var $gren_lang$core$Maybe$withDefault$ = function(_default, maybe) {
	if (maybe.$ === 'Just') {
		var value = maybe.a;
		return value;
	} else {
		return _default;
	}
};
var $gren_lang$core$Maybe$withDefault = F2($gren_lang$core$Maybe$withDefault$);
var $author$project$DataTable$pageLengthChooser$ = function(_v0, tableState) {
	var toMsg = _v0.a.toMsg;
	var pagination = tableState.a.pagination;
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
				case 'Pager':
					var values = pagination.a;
					return viewOption(values);
				case 'Scroller':
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
var $gren_lang$browser$Html$ul = $gren_lang$browser$Html$node('ul');
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
	if (maybe.$ === 'Just') {
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
	if (_v0.$ === 'LT') {
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
	var toId = _v0.a.toId;
	var _v2 = _v1.a;
	var pageSize = _v2.pageSize;
	var activeRowId = _v2.activeRowId;
	var pagination = _v2.pagination;
	var rowCursor = $gren_lang$core$Maybe$withDefault$(0, $gren_lang$core$Maybe$map$(function(i) {
				return i + 1;
			}, $gren_lang$core$Maybe$map$(function ($) {
					return $.index;
				}, A2($gren_lang$core$Array$findFirst, function(v) {
						return _Utils_eq(toId(v), activeRowId);
					}, data))));
	var precedingFullPages = ((rowCursor - 1) / pageSize) | 0;
	var lastRowOnPage = function () {
		switch (pagination.$) {
			case 'Pager':
				if (!pageSize) {
					return $gren_lang$core$Array$length(data);
				} else {
					return (precedingFullPages + 1) * pageSize;
				}
			case 'Scroller':
				if (pageSize === 0) {
					return $gren_lang$core$Array$length(data);
				} else {
					var _v7 = A2($gren_lang$core$Basics$compare, rowCursor, (pageSize / 2) | 0);
					if (_v7.$ === 'GT') {
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
			case 'Pager':
				return precedingFullPages * pageSize;
			case 'Scroller':
				if (pageSize === 0) {
					return rowCursor - 2;
				} else {
					var _v4 = A2($gren_lang$core$Basics$compare, rowCursor, $gren_lang$core$Array$length(data) - ((pageSize / 2) | 0));
					if (_v4.$ === 'GT') {
						return $gren_lang$core$Array$length(data) - pageSize;
					} else {
						return ($author$project$DataTable$isEven(pageSize) && (pageSize !== 0)) ? (rowCursor - ((pageSize / 2) | 0)) : ((rowCursor - ((pageSize / 2) | 0)) - 1);
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
		case 'None':
			return data;
		case 'RowNumber':
			return data;
		case 'Increasing':
			var srt = sorter.a;
			return srt(data);
		case 'Decreasing':
			var srt = sorter.a;
			return $gren_lang$core$Array$reverse(srt(data));
		case 'IncOrDec':
			var srt = sorter.a;
			return _Utils_eq(sortDirection, $author$project$DataTable$Desc) ? $gren_lang$core$Array$reverse(srt(data)) : srt(data);
		default:
			var srt = sorter.a;
			return _Utils_eq(sortDirection, $author$project$DataTable$Desc) ? srt(data) : $gren_lang$core$Array$reverse(srt(data));
	}
};
var $author$project$DataTable$applySorter = F3($author$project$DataTable$applySorter$);
var $author$project$DataTable$findSorter$ = function(selectedColumn, cData) {
	findSorter:
	while (true) {
		var _v0 = $gren_lang$core$Array$popFirst(cData);
		if (_v0.$ === 'Nothing') {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var _v1 = _v0.a;
			var _v2 = _v1.first;
			var name = _v2.name;
			var sorter = _v2.sorter;
			var rest = _v1.rest;
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
	var _v1 = _v0.a;
	var sortColumns = _v1.sortColumns;
	var pageSize = _v1.pageSize;
	var activeRowId = _v1.activeRowId;
	var pagination = _v1.pagination;
	var tableId = _v1.tableId;
	var _v2 = $gren_lang$core$Array$popFirst(sortColumns);
	if (_v2.$ === 'Just') {
		var _v3 = _v2.a;
		var _v4 = _v3.first;
		var sortColumnName = _v4.sortColumnName;
		var sortDirection = _v4.sortDirection;
		var rest = _v3.rest;
		var _v5 = $author$project$DataTable$findSorter$(sortColumnName, cData);
		if (_v5.$ === 'Nothing') {
			return data;
		} else {
			var sorter = _v5.a;
			return $author$project$DataTable$sort$($author$project$DataTable$State({ activeRowId: activeRowId, pageSize: pageSize, pagination: pagination, sortColumns: rest, tableId: tableId }), cData, $author$project$DataTable$applySorter$(sortDirection, sorter, data));
		}
	} else {
		return data;
	}
};
var $author$project$DataTable$sort = F3($author$project$DataTable$sort$);
var $author$project$DataTable$getSortedData$ = function(_v0, state, data) {
	var columns = _v0.a.columns;
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
	var name = _v0.name;
	var sorter = _v0.sorter;
	return { name: name, sorter: sorter };
};
var $author$project$DataTable$headerInfo$ = function(name, selected, sortDirections, clickActions) {
	return { clickActions: clickActions, name: name, selected: selected, sortDirections: sortDirections };
};
var $author$project$DataTable$headerInfo = F4($author$project$DataTable$headerInfo$);
var $gren_lang$browser$Html$Events$onDoubleClick = function(msg) {
	return $gren_lang$browser$Html$Events$on$('dblclick', $gren_lang$core$Json$Decode$succeed(msg));
};
var $author$project$DataTable$updateSortState$ = function(newSortColumn, sortDirection, _v0) {
	var _v1 = _v0.a;
	var pageSize = _v1.pageSize;
	var activeRowId = _v1.activeRowId;
	var pagination = _v1.pagination;
	var tableId = _v1.tableId;
	return $author$project$DataTable$State({ activeRowId: activeRowId, pageSize: pageSize, pagination: pagination, sortColumns: [ { sortColumnName: newSortColumn, sortDirection: sortDirection } ], tableId: tableId });
};
var $author$project$DataTable$updateSortState = F3($author$project$DataTable$updateSortState$);
var $author$project$DataTable$onColumnHeader$ = function(state, name, sortDirection, toMsg) {
	return [ $gren_lang$browser$Html$Events$onClick(toMsg($author$project$DataTable$updateMultiSortState$(name, sortDirection, state))), $gren_lang$browser$Html$Events$onDoubleClick(toMsg($author$project$DataTable$updateSortState$(name, sortDirection, state))) ];
};
var $author$project$DataTable$onColumnHeader = F4($author$project$DataTable$onColumnHeader$);
var $author$project$DataTable$toHeaderInfo$ = function(state, toMsg, _v0) {
	var sortColumns = state.a.sortColumns;
	var name = _v0.name;
	var sorter = _v0.sorter;
	var selected = function () {
		if (sortColumns.length === 0) {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var nonEmptyList = sortColumns;
			var indexedList = A2($gren_lang$core$Array$indexedMap, F2(function(idx, val) {
						return { left: idx, right: val };
					}), $gren_lang$core$Array$reverse(nonEmptyList));
			var filteredList = A2($gren_lang$core$Array$keepIf, function(_v8) {
					var sortColumnName = _v8.right.sortColumnName;
					return _Utils_eq(name, sortColumnName);
				}, indexedList);
			var _v6 = $gren_lang$core$Array$takeFirst$(1, filteredList);
			if (_v6.length === 1) {
				var _v7 = _v6[0];
				var index = _v7.left;
				var sortDirection = _v7.right.sortDirection;
				return $gren_lang$core$Maybe$Just({ sortDirection: sortDirection, sortRank: index });
			} else {
				return $gren_lang$core$Maybe$Nothing;
			}
		}
	}();
	var reverse = function(a) {
		if (a.$ === 'Desc') {
			return $author$project$DataTable$Asc;
		} else {
			return $author$project$DataTable$Desc;
		}
	};
	var reversedSortDirection = function () {
		if (selected.$ === 'Just') {
			var sortDirection = selected.a.sortDirection;
			return reverse(sortDirection);
		} else {
			if (sorter.$ === 'DecOrInc') {
				return $author$project$DataTable$Desc;
			} else {
				return $author$project$DataTable$Asc;
			}
		}
	}();
	switch (sorter.$) {
		case 'None':
			return $author$project$DataTable$headerInfo$(name, $gren_lang$core$Maybe$Nothing, [  ], [  ]);
		case 'RowNumber':
			return $author$project$DataTable$headerInfo$(name, $gren_lang$core$Maybe$Nothing, [  ], [  ]);
		case 'Increasing':
			return $author$project$DataTable$headerInfo$(name, selected, [ $author$project$DataTable$Asc ], $author$project$DataTable$onColumnHeader$(state, name, $author$project$DataTable$Asc, toMsg));
		case 'Decreasing':
			return $author$project$DataTable$headerInfo$(name, selected, [ $author$project$DataTable$Desc ], $author$project$DataTable$onColumnHeader$(state, name, $author$project$DataTable$Desc, toMsg));
		case 'IncOrDec':
			return $author$project$DataTable$headerInfo$(name, selected, [ $author$project$DataTable$Asc, $author$project$DataTable$Desc ], $author$project$DataTable$onColumnHeader$(state, name, reversedSortDirection, toMsg));
		default:
			return $author$project$DataTable$headerInfo$(name, selected, [ $author$project$DataTable$Desc, $author$project$DataTable$Asc ], $author$project$DataTable$onColumnHeader$(state, name, reversedSortDirection, toMsg));
	}
};
var $author$project$DataTable$toHeaderInfo = F3($author$project$DataTable$toHeaderInfo$);
var $gren_lang$browser$Html$td = $gren_lang$browser$Html$node('td');
var $author$project$DataTable$viewCell$ = function(data, _v0) {
	var viewData = _v0.viewData;
	var sorter = _v0.sorter;
	var details = viewData(data);
	return A2($gren_lang$browser$Html$td, details.attributes, details.children);
};
var $author$project$DataTable$viewCell = F2($author$project$DataTable$viewCell$);
var $author$project$DataTable$viewRowHelp$ = function(columns, toRowAttrs, toId, toMsg, state, data) {
	return A2($gren_lang$browser$Html$tr, A4(toRowAttrs, toId, toMsg, state, data), A2($gren_lang$core$Array$map, $author$project$DataTable$viewCell(data), columns));
};
var $author$project$DataTable$viewRowHelp = F6($author$project$DataTable$viewRowHelp$);
var $author$project$DataTable$viewRow$ = function(toId, toMsg, columns, toRowAttrs, state, data) {
	return { key: toId(data), node: $author$project$DataTable$viewRowHelp$(columns, toRowAttrs, toId, toMsg, state, data) };
};
var $author$project$DataTable$viewRow = F6($author$project$DataTable$viewRow$);
var $author$project$DataTable$view$ = function(conf, state, data) {
	var _v0 = conf.a;
	var toId = _v0.toId;
	var toMsg = _v0.toMsg;
	var columns = _v0.columns;
	var customizations = _v0.customizations;
	var rows = $author$project$DataTable$getPaginatedData$(conf, state, $author$project$DataTable$getSortedData$(conf, state, data));
	var tbody = A3($gren_lang$browser$Html$Keyed$node, 'tbody', customizations.tbodyAttrs, A2($gren_lang$core$Array$map, A5($author$project$DataTable$viewRow, toId, toMsg, columns, customizations.rowAttrs, state), rows));
	var withFoot = function () {
		var _v3 = customizations.tfoot;
		if (_v3.$ === 'Nothing') {
			return [ tbody ];
		} else {
			var _v4 = _v3.a;
			var attributes = _v4.attributes;
			var children = _v4.children;
			return [ A2($gren_lang$browser$Html$tfoot, attributes, children), tbody ];
		}
	}();
	var headers = A2($gren_lang$core$Array$map, $author$project$DataTable$toHeader, columns);
	var theadDetails = customizations.thead(A2($gren_lang$core$Array$map, A2($author$project$DataTable$toHeaderInfo, state, toMsg), headers));
	var thead = A2($gren_lang$browser$Html$thead, theadDetails.attributes, theadDetails.children);
	return A2($gren_lang$browser$Html$table, customizations.tableAttrs, function () {
			var _v1 = customizations.caption;
			if (_v1.$ === 'Nothing') {
				return _Utils_ap([ thead ], withFoot);
			} else {
				var _v2 = _v1.a;
				var attributes = _v2.attributes;
				var children = _v2.children;
				return _Utils_ap([ A2($gren_lang$browser$Html$caption, attributes, children) ], _Utils_ap([ thead ], withFoot));
			}
		}());
};
var $author$project$DataTable$view = F3($author$project$DataTable$view$);
var $author$project$PresidentsPaginated$view = function(_v0) {
	var people = _v0.people;
	var tableState = _v0.tableState;
	var query = _v0.query;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.name;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Single click on column header to add/move that column to the end of the sort order (...then sort by Year)') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Double click to reset the sort order to just that column (Sort by Name).') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I don\'t like this user interaction, but it is, what it is for now. Suggestions for change welcome.') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I\'d prefer to make short click reset and long click add to sort order.') ]) ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$PresidentsPaginated$SetQuery) ], [  ]), $author$project$DataTable$pageLengthChooser$($author$project$PresidentsPaginated$config, tableState), $author$project$DataTable$view$($author$project$PresidentsPaginated$config, tableState, acceptablePeople) ]);
};
var $author$project$PresidentsPaginated$main = $gren_lang$browser$Browser$element({ init: function(_v0) {
		return $author$project$PresidentsPaginated$init($author$project$PresidentsPaginated$presidents);
	}, subscriptions: function(_v1) {
		return $gren_lang$core$Platform$Sub$none;
	}, update: $author$project$PresidentsPaginated$update, view: $author$project$PresidentsPaginated$view });
var $author$project$DataTable$initialSort = function(header) {
	return $author$project$DataTable$State({ activeRowId: '', pageSize: 0, pagination: $author$project$DataTable$NoPagination, sortColumns: [ { sortColumnName: header, sortDirection: $author$project$DataTable$Asc } ], tableId: 'sortableTable' });
};
var $author$project$Presidents$init = function(people) {
	var model = { people: people, query: '', tableState: $author$project$DataTable$initialSort('State') };
	return { command: $gren_lang$core$Platform$Cmd$none, model: model };
};
var $author$project$Presidents$person$ = function(name, year, city, state) {
	return { city: city, name: name, state: state, year: year };
};
var $author$project$Presidents$person = F4($author$project$Presidents$person$);
var $author$project$Presidents$presidents = [ $author$project$Presidents$person$('George Washington', 1732, 'Westmoreland County', 'Virginia'), $author$project$Presidents$person$('John Adams', 1735, 'Braintree', 'Massachusetts'), $author$project$Presidents$person$('Thomas Jefferson', 1743, 'Shadwell', 'Virginia'), $author$project$Presidents$person$('James Madison', 1751, 'Port Conway', 'Virginia'), $author$project$Presidents$person$('James Monroe', 1758, 'Monroe Hall', 'Virginia'), $author$project$Presidents$person$('Andrew Jackson', 1767, 'Waxhaws Region', 'South/North Carolina'), $author$project$Presidents$person$('John Quincy Adams', 1767, 'Braintree', 'Massachusetts'), $author$project$Presidents$person$('William Henry Harrison', 1773, 'Charles City County', 'Virginia'), $author$project$Presidents$person$('Martin Van Buren', 1782, 'Kinderhook', 'New York'), $author$project$Presidents$person$('Zachary Taylor', 1784, 'Barboursville', 'Virginia'), $author$project$Presidents$person$('John Tyler', 1790, 'Charles City County', 'Virginia'), $author$project$Presidents$person$('James Buchanan', 1791, 'Cove Gap', 'Pennsylvania'), $author$project$Presidents$person$('James K. Polk', 1795, 'Pineville', 'North Carolina'), $author$project$Presidents$person$('Millard Fillmore', 1800, 'Summerhill', 'New York'), $author$project$Presidents$person$('Franklin Pierce', 1804, 'Hillsborough', 'New Hampshire'), $author$project$Presidents$person$('Andrew Johnson', 1808, 'Raleigh', 'North Carolina'), $author$project$Presidents$person$('Abraham Lincoln', 1809, 'Sinking spring', 'Kentucky'), $author$project$Presidents$person$('Ulysses S. Grant', 1822, 'Point Pleasant', 'Ohio'), $author$project$Presidents$person$('Rutherford B. Hayes', 1822, 'Delaware', 'Ohio'), $author$project$Presidents$person$('Chester A. Arthur', 1829, 'Fairfield', 'Vermont'), $author$project$Presidents$person$('James A. Garfield', 1831, 'Moreland Hills', 'Ohio'), $author$project$Presidents$person$('Benjamin Harrison', 1833, 'North Bend', 'Ohio'), $author$project$Presidents$person$('Grover Cleveland', 1837, 'Caldwell', 'New Jersey'), $author$project$Presidents$person$('William McKinley', 1843, 'Niles', 'Ohio'), $author$project$Presidents$person$('Woodrow Wilson', 1856, 'Staunton', 'Virginia'), $author$project$Presidents$person$('William Howard Taft', 1857, 'Cincinnati', 'Ohio'), $author$project$Presidents$person$('Theodore Roosevelt', 1858, 'New York City', 'New York'), $author$project$Presidents$person$('Warren G. Harding', 1865, 'Blooming Grove', 'Ohio'), $author$project$Presidents$person$('Calvin Coolidge', 1872, 'Plymouth', 'Vermont'), $author$project$Presidents$person$('Herbert Hoover', 1874, 'West Branch', 'Iowa'), $author$project$Presidents$person$('Franklin D. Roosevelt', 1882, 'Hyde Park', 'New York'), $author$project$Presidents$person$('Harry S. Truman', 1884, 'Lamar', 'Missouri'), $author$project$Presidents$person$('Dwight D. Eisenhower', 1890, 'Denison', 'Texas'), $author$project$Presidents$person$('Lyndon B. Johnson', 1908, 'Stonewall', 'Texas'), $author$project$Presidents$person$('Ronald Reagan', 1911, 'Tampico', 'Illinois'), $author$project$Presidents$person$('Richard M. Nixon', 1913, 'Yorba Linda', 'California'), $author$project$Presidents$person$('Gerald R. Ford', 1913, 'Omaha', 'Nebraska'), $author$project$Presidents$person$('John F. Kennedy', 1917, 'Brookline', 'Massachusetts'), $author$project$Presidents$person$('George H. W. Bush', 1924, 'Milton', 'Massachusetts'), $author$project$Presidents$person$('Jimmy Carter', 1924, 'Plains', 'Georgia'), $author$project$Presidents$person$('George W. Bush', 1946, 'New Haven', 'Connecticut'), $author$project$Presidents$person$('Bill Clinton', 1946, 'Hope', 'Arkansas'), $author$project$Presidents$person$('Barack Obama', 1961, 'Honolulu', 'Hawaii'), $author$project$Presidents$person$('Donald Trump', 1946, 'New York City', 'New York') ];
var $author$project$Presidents$update$ = function(msg, model) {
	if (msg.$ === 'SetQuery') {
		var newQuery = msg.a;
		return { command: $gren_lang$core$Platform$Cmd$none, model: _Utils_update(model, { query: newQuery }) };
	} else {
		var newState = msg.a;
		return { command: $gren_lang$core$Platform$Cmd$none, model: _Utils_update(model, { tableState: newState }) };
	}
};
var $author$project$Presidents$update = F2($author$project$Presidents$update$);
var $author$project$Presidents$SetQuery = function (a) {
	return { $: 'SetQuery', a: a };
};
var $author$project$Presidents$SetTableState = function (a) {
	return { $: 'SetTableState', a: a };
};
var $author$project$Presidents$config = $author$project$DataTable$config({ columns: [ $author$project$DataTable$stringColumn$('Name', function ($) {
			return $.name;
		}), $author$project$DataTable$intColumn$('Year', function ($) {
			return $.year;
		}), $author$project$DataTable$stringColumn$('City', function ($) {
			return $.city;
		}), $author$project$DataTable$stringColumn$('State', function ($) {
			return $.state;
		}) ], toId: function ($) {
		return $.name;
	}, toMsg: $author$project$Presidents$SetTableState });
var $author$project$Presidents$view = function(_v0) {
	var people = _v0.people;
	var tableState = _v0.tableState;
	var query = _v0.query;
	var lowerQuery = $gren_lang$core$String$toLower(query);
	var acceptablePeople = A2($gren_lang$core$Array$keepIf, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$String$contains(lowerQuery), $gren_lang$core$String$toLower), function ($) {
				return $.name;
			}), people);
	return A2($gren_lang$browser$Html$div, [  ], [ A2($gren_lang$browser$Html$h1, [  ], [ $gren_lang$browser$Html$text('Birthplaces of U.S. Presidents') ]), A2($gren_lang$browser$Html$ul, [  ], [ A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Single click on column header to add/move that column to the end of the sort order (...then sort by Year)') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('Double click to reset the sort order to just that column (Sort by Name).') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I don\'t like this user interaction, but it is, what it is for now. Suggestions for change welcome.') ]), A2($gren_lang$browser$Html$li, [  ], [ $gren_lang$browser$Html$text('I\'d prefer to make short click reset and long click add to sort order.') ]) ]), A2($gren_lang$browser$Html$div, [  ], [  ]), A2($gren_lang$browser$Html$input, [ $gren_lang$browser$Html$Attributes$placeholder('Search by Name'), $gren_lang$browser$Html$Events$onInput($author$project$Presidents$SetQuery) ], [  ]), $author$project$DataTable$view$($author$project$Presidents$config, tableState, acceptablePeople) ]);
};
var $author$project$Presidents$main = $gren_lang$browser$Browser$element({ init: function(_v0) {
		return $author$project$Presidents$init($author$project$Presidents$presidents);
	}, subscriptions: function(_v1) {
		return $gren_lang$core$Platform$Sub$none;
	}, update: $author$project$Presidents$update, view: $author$project$Presidents$view });
_Platform_export({'Presidents':{'init':$author$project$Presidents$main($gren_lang$core$Json$Decode$succeed({  }))},'PresidentsPaginated':{'init':$author$project$PresidentsPaginated$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));
//# sourceMappingURL=data:application/json;base64,ewogICAgInZlcnNpb24iOiAzLAogICAgInNvdXJjZXMiOiBbCiAgICAgICAgIkRpY3QiLAogICAgICAgICJBcnJheSIsCiAgICAgICAgIlNldCIsCiAgICAgICAgIkJhc2ljcyIsCiAgICAgICAgIlN0cmluZyIsCiAgICAgICAgIkpzb24uRW5jb2RlIiwKICAgICAgICAiSnNvbi5EZWNvZGUiLAogICAgICAgICJDaGFyIiwKICAgICAgICAiUmVzdWx0IiwKICAgICAgICAiVmlydHVhbERvbSIsCiAgICAgICAgIlVybCIsCiAgICAgICAgIlRhc2siLAogICAgICAgICJQbGF0Zm9ybSIsCiAgICAgICAgIkJyb3dzZXIiLAogICAgICAgICJEYXRhVGFibGUiLAogICAgICAgICJQbGF0Zm9ybS5DbWQiLAogICAgICAgICJQcmVzaWRlbnRzUGFnaW5hdGVkIiwKICAgICAgICAiUGxhdGZvcm0uU3ViIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzIiwKICAgICAgICAiSHRtbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5BcmlhIiwKICAgICAgICAiSHRtbC5FdmVudHMiLAogICAgICAgICJNYXliZSIsCiAgICAgICAgIk1hdGgiLAogICAgICAgICJIdG1sLktleWVkIiwKICAgICAgICAiUHJlc2lkZW50cyIKICAgIF0sCiAgICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAgICAgIm1vZHVsZSBEaWN0IGV4cG9zaW5nXG4gICAgKCBEaWN0XG4gICAgLCBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHVwZGF0ZSwgdXBkYXRlV2l0aERlZmF1bHQsIHJlbW92ZVxuICAgICwgaXNFbXB0eSwgY291bnQsIGdldCwgbWVtYmVyLCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgYW55LCBhbGxcbiAgICAsIGtleXMsIHZhbHVlc1xuICAgICwgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuICAgICwgdW5pb24sIGludGVyc2VjdCwgZGlmZiwgbWVyZ2VcbiAgICApXG5cbnstfCBBIGRpY3Rpb25hcnkgbWFwcGluZyB1bmlxdWUga2V5cyB0byB2YWx1ZXMuIFRoZSBrZXlzIGNhbiBiZSBhbnkgY29tcGFyYWJsZVxudHlwZS4gVGhpcyBpbmNsdWRlcyBgSW50YCwgYEZsb2F0YCwgYFRpbWVgLCBgQ2hhcmAgYW5kIGBTdHJpbmdgLlxuXG5TZXQsIHJlbW92ZSwgYW5kIHF1ZXJ5IG9wZXJhdGlvbnMgYWxsIHRha2UgX08obG9nIG4pXyB0aW1lLlxuXG5cbkBkb2NzIERpY3RcblxuXG5AZG9jcyBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHVwZGF0ZSwgdXBkYXRlV2l0aERlZmF1bHQsIHJlbW92ZVxuXG5cbiMjIFF1ZXJ5XG5cbkBkb2NzIGlzRW1wdHksIGNvdW50LCBnZXQsIG1lbWJlciwgZmlyc3QsIGxhc3QsIGZpbmRGaXJzdCwgZmluZExhc3QsIGFueSwgYWxsXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIGtleXMsIHZhbHVlc1xuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyBtYXAsIGZvbGRsLCBmb2xkciwga2VlcElmLCBtYXBBbmRLZWVwSnVzdCwgcGFydGl0aW9uXG5cblxuIyMgQ29tYmluZVxuXG5AZG9jcyB1bmlvbiwgaW50ZXJzZWN0LCBkaWZmLCBtZXJnZVxuXG4tfVxuXG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXliZSBleHBvc2luZyAoLi4pXG5cblxuXG4tLSBESUNUSU9OQVJJRVNcbi0tIFRoZSBjb2xvciBvZiBhIG5vZGUuIExlYXZlcyBhcmUgY29uc2lkZXJlZCBCbGFjay5cblxuXG50eXBlIE5Db2xvclxuICAgID0gUmVkXG4gICAgfCBCbGFja1xuXG5cbnstfCBBIGRpY3Rpb25hcnkgb2Yga2V5cyBhbmQgdmFsdWVzLiBTbyBhIGBEaWN0IFN0cmluZyBVc2VyYCBpcyBhIGRpY3Rpb25hcnlcbnRoYXQgbGV0cyB5b3UgbG9vayB1cCBhIGBTdHJpbmdgIChzdWNoIGFzIHVzZXIgbmFtZXMpIGFuZCBmaW5kIHRoZSBhc3NvY2lhdGVkXG5gVXNlcmAuXG5cbiAgICBpbXBvcnQgRGljdCBleHBvc2luZyAoIERpY3QgKVxuXG4gICAgdXNlcnMgOiBEaWN0IFN0cmluZyBVc2VyXG4gICAgdXNlcnMgPVxuICAgICAgICBEaWN0LmVtcHR5XG4gICAgICAgICAgICB8PiBEaWN0LnNldCBcIkFsaWNlXCIgKG1ha2VVc2VyIFwiQWxpY2VcIiAyOCAxLjY1KVxuICAgICAgICAgICAgfD4gRGljdC5zZXQgXCJCb2JcIiAobWFrZVVzZXIgXCJCb2JcIiAxOSAxLjgyKVxuICAgICAgICAgICAgfD4gRGljdC5zZXQgXCJDaHVja1wiIChtYWtlVXNlciBcIkNodWNrXCIgMzMgMS43NSlcblxuICAgIHR5cGUgYWxpYXMgVXNlciA9XG4gICAgICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICAgICAsIGFnZSA6IEludFxuICAgICAgICAsIGhlaWdodCA6IEZsb2F0XG4gICAgICAgIH1cblxuICAgIG1ha2VVc2VyIDogU3RyaW5nIC0+IEludCAtPiBGbG9hdCAtPiBVc2VyXG4gICAgbWFrZVVzZXIgbmFtZSBhZ2UgaGVpZ2h0ID1cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIGFnZSA9IGFnZVxuICAgICAgICAsIGhlaWdodCA9IGhlaWdodFxuICAgICAgICB9XG4tfVxudHlwZSBEaWN0IGsgdlxuICAgID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yIDogTkNvbG9yLCBrZXkgOiBrLCB2YWx1ZSA6IHYsIGxlZnQgOiAoRGljdCBrIHYpLCByaWdodCA6IChEaWN0IGsgdikgfVxuICAgIHwgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG57LXwgQ3JlYXRlIGFuIGVtcHR5IGRpY3Rpb25hcnkuXG4tfVxuZW1wdHkgOiBEaWN0IGsgdlxuZW1wdHkgPVxuICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxubm9kZSA6IE5Db2xvciAtPiBrIC0+IHYgLT4gRGljdCBrIHYgLT4gRGljdCBrIHYgLT4gRGljdCBrIHZcbm5vZGUgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQgPVxuICAgIFJCTm9kZV9ncmVuX2J1aWx0aW5cbiAgICAgICAgeyBjb2xvciA9IGNvbG9yXG4gICAgICAgICwga2V5ID0ga2V5XG4gICAgICAgICwgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAsIGxlZnQgPSBsZWZ0XG4gICAgICAgICwgcmlnaHQgPSByaWdodFxuICAgICAgICB9XG5cblxuey18IEdldCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGEga2V5LiBJZiB0aGUga2V5IGlzIG5vdCBmb3VuZCwgcmV0dXJuXG5gTm90aGluZ2AuIFRoaXMgaXMgdXNlZnVsIHdoZW4geW91IGFyZSBub3Qgc3VyZSBpZiBhIGtleSB3aWxsIGJlIGluIHRoZVxuZGljdGlvbmFyeS5cblxuICAgIGFuaW1hbHMgPSBEaWN0LmVtcHR5IHw+IERpY3Quc2V0IFwiVG9tXCIgQ2F0IHw+IERpY3Quc2V0IFwiSmVycnlcIiBNb3VzZVxuXG4gICAgZ2V0IFwiVG9tXCIgICBhbmltYWxzID09IEp1c3QgQ2F0XG4gICAgZ2V0IFwiSmVycnlcIiBhbmltYWxzID09IEp1c3QgTW91c2VcbiAgICBnZXQgXCJTcGlrZVwiIGFuaW1hbHMgPT0gTm90aGluZ1xuXG4tfVxuZ2V0IDogY29tcGFyYWJsZSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBNYXliZSB2XG5nZXQgdGFyZ2V0S2V5IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGNvbXBhcmUgdGFyZ2V0S2V5IGtleSBpc1xuICAgICAgICAgICAgICAgIExUIC0+XG4gICAgICAgICAgICAgICAgICAgIGdldCB0YXJnZXRLZXkgbGVmdFxuXG4gICAgICAgICAgICAgICAgRVEgLT5cbiAgICAgICAgICAgICAgICAgICAgSnVzdCB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgR1QgLT5cbiAgICAgICAgICAgICAgICAgICAgZ2V0IHRhcmdldEtleSByaWdodFxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYSBrZXkgaXMgaW4gYSBkaWN0aW9uYXJ5LlxuLX1cbm1lbWJlciA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gQm9vbFxubWVtYmVyIGtleSBkaWN0ID1cbiAgICB3aGVuIGdldCBrZXkgZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBrZXktdmFsdWUgcGFpcnMgaW4gdGhlIGRpY3Rpb25hcnkuXG4tfVxuY291bnQgOiBEaWN0IGsgdiAtPiBJbnRcbmNvdW50IGRpY3QgPVxuICAgIGNvdW50SGVscCAwIGRpY3RcblxuXG5jb3VudEhlbHAgOiBJbnQgLT4gRGljdCBrIHYgLT4gSW50XG5jb3VudEhlbHAgbiBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIG5cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgbGVmdCwgcmlnaHQgfSAtPlxuICAgICAgICAgICAgY291bnRIZWxwIChjb3VudEhlbHAgKG4gKyAxKSByaWdodCkgbGVmdFxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgZmlyc3QsIG9yIGxvd2VzdCwga2V5LXZhbHVlIHBhaXIuXG4tfVxuZmlyc3QgOiBEaWN0IGsgdiAtPiBNYXliZSB7IGtleSA6IGssIHZhbHVlIDogdiB9XG5maXJzdCBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5LCB2YWx1ZSwgbGVmdCA9IFJCRW1wdHlfZ3Jlbl9idWlsdGluIH0gLT5cbiAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBsZWZ0IH0gLT5cbiAgICAgICAgICAgIGZpcnN0IGxlZnRcblxuXG57LXwgUmV0cmlldmUgdGhlIGxhc3QsIG9yIGhpZ2hlc3QsIGtleS12YWx1ZSBwYWlyLlxuLX1cbmxhc3QgOiBEaWN0IGsgdiAtPiBNYXliZSB7IGtleSA6IGssIHZhbHVlIDogdiB9XG5sYXN0IGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCByaWdodCA9IFJCRW1wdHlfZ3Jlbl9idWlsdGluIH0gLT5cbiAgICAgICAgICAgIEp1c3QgeyBrZXkgPSBrZXksIHZhbHVlID0gdmFsdWUgfVxuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyByaWdodCB9IC0+XG4gICAgICAgICAgICBsYXN0IHJpZ2h0XG5cblxuey18IEZpbmQgdGhlIGZpcnN0IGtleS12YWx1ZSBwYWlyIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRGaXJzdCA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxuZmluZEZpcnN0IGZuIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGZpbmRGaXJzdCBmbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBmbiBrZXkgdmFsdWUgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB7IGtleSA9IGtleSwgdmFsdWUgPSB2YWx1ZSB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluZEZpcnN0IGZuIHJpZ2h0XG5cbiAgICAgICAgICAgICAgICBmb3VuZFZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsdWVcblxuXG57LXwgRmluZCB0aGUgbGFzdCBrZXktdmFsdWUgcGFpciB0aGF0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5maW5kTGFzdCA6IChrIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBrIHYgLT4gTWF5YmUgeyBrZXkgOiBrLCB2YWx1ZSA6IHYgfVxuZmluZExhc3QgZm4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gZmluZExhc3QgZm4gcmlnaHQgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIGlmIGZuIGtleSB2YWx1ZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH1cblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kTGFzdCBmbiBsZWZ0XG5cbiAgICAgICAgICAgICAgICBmb3VuZFZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kVmFsdWVcblxuXG57LXwgQ2hlY2tzIGlmIGFueSBrZXktdmFsdWUgcGFpciBpbiB0aGUgZGljdGlvbmFyeSBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYW55IDogKGsgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGsgdiAtPiBCb29sXG5hbnkgZm4gZGljdCA9XG4gICAgd2hlbiBmaW5kRmlyc3QgZm4gZGljdCBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBDaGVja3MgaWYgYWxsIGtleS12YWx1ZSBwYWlycyBpbiB0aGUgZGljdGlvbmFyeSBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuYWxsIDogKGsgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGsgdiAtPiBCb29sXG5hbGwgZm4gZGljdCA9XG4gICAgd2hlbiBmaW5kRmlyc3QgKFxca2V5IHZhbHVlIC0+IG5vdCA8fCBmbiBrZXkgdmFsdWUpIGRpY3QgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFRydWVcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgZGljdGlvbmFyeSBpcyBlbXB0eS5cblxuICAgIGlzRW1wdHkgZW1wdHkgPT0gVHJ1ZVxuXG4tfVxuaXNFbXB0eSA6IERpY3QgayB2IC0+IEJvb2xcbmlzRW1wdHkgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBTZXRzIGEgdmFsdWUgZm9yIGEgZ2l2ZW4ga2V5LiBFeGlzdGluZyB2YWx1ZXMgd2lsbCBiZSByZXBsYWNlZC5cbklmIHRoZSBrZXkgaXNuJ3QgYWxyZWFkeSByZWdpc3RlcmVkLCB0aGUga2V5LXZhbHVlIHBhaXIgd2lsbCBiZSBpbnNlcnRlZC5cbi19XG5zZXQgOiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnNldCBzZXRLZXkgc2V0VmFsdWUgZGljdCA9XG4gICAgLS0gUm9vdCBub2RlIGlzIGFsd2F5cyBCbGFja1xuICAgIHdoZW4gc2V0SGVscCBzZXRLZXkgc2V0VmFsdWUgZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgQmxhY2sga2V5IHZhbHVlIGxlZnQgcmlnaHRcblxuICAgICAgICB4IC0+XG4gICAgICAgICAgICB4XG5cblxuc2V0SGVscCA6IGNvbXBhcmFibGUgLT4gdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxuc2V0SGVscCBrZXkgdmFsdWUgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICAtLSBOZXcgbm9kZXMgYXJlIGFsd2F5cyByZWQuIElmIGl0IHZpb2xhdGVzIHRoZSBydWxlcywgaXQgd2lsbCBiZSBmaXhlZFxuICAgICAgICAgICAgLS0gd2hlbiBiYWxhbmNpbmcuXG4gICAgICAgICAgICBub2RlIFJlZCBrZXkgdmFsdWUgUkJFbXB0eV9ncmVuX2J1aWx0aW4gUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBuQ29sb3IsIGtleSA9IG5LZXksIHZhbHVlID0gblZhbHVlLCBsZWZ0ID0gIG5MZWZ0LCByaWdodCA9IG5SaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGNvbXBhcmUga2V5IG5LZXkgaXNcbiAgICAgICAgICAgICAgICBMVCAtPlxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSAoc2V0SGVscCBrZXkgdmFsdWUgbkxlZnQpIG5SaWdodFxuXG4gICAgICAgICAgICAgICAgRVEgLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBuQ29sb3IgbktleSB2YWx1ZSBuTGVmdCBuUmlnaHRcblxuICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgbkNvbG9yIG5LZXkgblZhbHVlIG5MZWZ0IChzZXRIZWxwIGtleSB2YWx1ZSBuUmlnaHQpXG5cblxuYmFsYW5jZSA6IE5Db2xvciAtPiBrIC0+IHYgLT4gRGljdCBrIHYgLT4gRGljdCBrIHYgLT4gRGljdCBrIHZcbmJhbGFuY2UgY29sb3Iga2V5IHZhbHVlIGxlZnQgcmlnaHQgPVxuICAgIHdoZW4gcmlnaHQgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IC0+XG4gICAgICAgICAgICB3aGVuIGxlZnQgaXNcbiAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxLLCB2YWx1ZSA9IGxWLCBsZWZ0ID0gbExlZnQsIHJpZ2h0ID0gbFJpZ2h0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBSZWQga2V5IHZhbHVlIChub2RlIEJsYWNrIGxLIGxWIGxMZWZ0IGxSaWdodCkgKG5vZGUgQmxhY2sgcksgclYgckxlZnQgclJpZ2h0KVxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIHJLIHJWIChub2RlIFJlZCBrZXkgdmFsdWUgbGVmdCByTGVmdCkgclJpZ2h0XG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbGxLLCB2YWx1ZSA9IGxsViwgbGVmdCA9IGxsTGVmdCwgcmlnaHQgPSBsbFJpZ2h0IH0sIHJpZ2h0ID0gbFJpZ2h0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBSZWQgbEsgbFYgKG5vZGUgQmxhY2sgbGxLIGxsViBsbExlZnQgbGxSaWdodCkgKG5vZGUgQmxhY2sga2V5IHZhbHVlIGxSaWdodCByaWdodClcblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgbGVmdCByaWdodFxuXG5cbnstfCBSZW1vdmUgYSBrZXktdmFsdWUgcGFpciBmcm9tIGEgZGljdGlvbmFyeS4gSWYgdGhlIGtleSBpcyBub3QgZm91bmQsXG5ubyBjaGFuZ2VzIGFyZSBtYWRlLlxuLX1cbnJlbW92ZSA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnJlbW92ZSBrZXkgZGljdCA9XG4gICAgLS0gUm9vdCBub2RlIGlzIGFsd2F5cyBCbGFja1xuICAgIHdoZW4gcmVtb3ZlSGVscCBrZXkgZGljdCBpc1xuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IG5LZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBub2RlIEJsYWNrIG5LZXkgdmFsdWUgbGVmdCByaWdodFxuXG4gICAgICAgIHggLT5cbiAgICAgICAgICAgIHhcblxuXG57LXwgVGhlIGVhc2llc3QgdGhpbmcgdG8gcmVtb3ZlIGZyb20gdGhlIHRyZWUsIGlzIGEgcmVkIG5vZGUuIEhvd2V2ZXIsIHdoZW4gc2VhcmNoaW5nIGZvciB0aGVcbm5vZGUgdG8gcmVtb3ZlLCB3ZSBoYXZlIG5vIHdheSBvZiBrbm93aW5nIGlmIGl0IHdpbGwgYmUgcmVkIG9yIG5vdC4gVGhpcyByZW1vdmUgaW1wbGVtZW50YXRpb25cbm1ha2VzIHN1cmUgdGhhdCB0aGUgYm90dG9tIG5vZGUgaXMgcmVkIGJ5IG1vdmluZyByZWQgY29sb3JzIGRvd24gdGhlIHRyZWUgdGhyb3VnaCByb3RhdGlvblxuYW5kIGNvbG9yIGZsaXBzLiBBbnkgdmlvbGF0aW9ucyB0aGlzIHdpbGwgY2F1c2UsIGNhbiBlYXNpbHkgYmUgZml4ZWQgYnkgYmFsYW5jaW5nIG9uIHRoZSB3YXlcbnVwIGFnYWluLlxuLX1cbnJlbW92ZUhlbHAgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5yZW1vdmVIZWxwIHRhcmdldEtleSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW4gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBpZiB0YXJnZXRLZXkgPCBrZXkgdGhlblxuICAgICAgICAgICAgICAgIHdoZW4gbGVmdCBpc1xuICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjaywgbGVmdCA9IGxMZWZ0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbExlZnQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIGtleSB2YWx1ZSAocmVtb3ZlSGVscCB0YXJnZXRLZXkgbGVmdCkgcmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtb3ZlUmVkTGVmdCBkaWN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBuQ29sb3IsIGtleSA9IG5LZXksIHZhbHVlID0gblZhbHVlLCBsZWZ0ID0gbkxlZnQsIHJpZ2h0ID0gblJpZ2h0IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSAocmVtb3ZlSGVscCB0YXJnZXRLZXkgbkxlZnQpIG5SaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cbiAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZW1vdmVIZWxwRVFHVCB0YXJnZXRLZXkgKHJlbW92ZUhlbHBQcmVwRVFHVCB0YXJnZXRLZXkgZGljdCBjb2xvciBrZXkgdmFsdWUgbGVmdCByaWdodClcblxuXG5yZW1vdmVIZWxwUHJlcEVRR1QgOiBjb21wYXJhYmxlIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IE5Db2xvciAtPiBjb21wYXJhYmxlIC0+IHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnJlbW92ZUhlbHBQcmVwRVFHVCB0YXJnZXRLZXkgZGljdCBjb2xvciBrZXkgdmFsdWUgbGVmdCByaWdodCA9XG4gICAgd2hlbiBsZWZ0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IFJlZCwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSAtPlxuICAgICAgICAgICAgbm9kZSBjb2xvciBsSyBsViBsTGVmdCAobm9kZSBSZWQga2V5IHZhbHVlIGxSaWdodCByaWdodClcblxuICAgICAgICBfIC0+XG4gICAgICAgICAgICB3aGVuIHJpZ2h0IGlzXG4gICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gQmxhY2ssIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBCbGFjayB9IH0gLT5cbiAgICAgICAgICAgICAgICAgICAgbW92ZVJlZFJpZ2h0IGRpY3RcblxuICAgICAgICAgICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IEJsYWNrLCBsZWZ0ID0gUkJFbXB0eV9ncmVuX2J1aWx0aW4gfSAtPlxuICAgICAgICAgICAgICAgICAgICBtb3ZlUmVkUmlnaHQgZGljdFxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBkaWN0XG5cblxuey18IFdoZW4gd2UgZmluZCB0aGUgbm9kZSB3ZSBhcmUgbG9va2luZyBmb3IsIHdlIGNhbiByZW1vdmUgYnkgcmVwbGFjaW5nIHRoZSBrZXktdmFsdWVcbnBhaXIgd2l0aCB0aGUga2V5LXZhbHVlIHBhaXIgb2YgdGhlIGxlZnQtbW9zdCBub2RlIG9uIHRoZSByaWdodCBzaWRlICh0aGUgY2xvc2VzdCBwYWlyKS5cbi19XG5yZW1vdmVIZWxwRVFHVCA6IGNvbXBhcmFibGUgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnJlbW92ZUhlbHBFUUdUIHRhcmdldEtleSBkaWN0ID1cbiAgICB3aGVuIGRpY3QgaXNcbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCB9IC0+XG4gICAgICAgICAgICBpZiB0YXJnZXRLZXkgPT0ga2V5IHRoZW5cbiAgICAgICAgICAgICAgICB3aGVuIGdldE1pbiByaWdodCBpc1xuICAgICAgICAgICAgICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsga2V5ID0gbWluS2V5LCB2YWx1ZSA9IG1pblZhbHVlIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgY29sb3IgbWluS2V5IG1pblZhbHVlIGxlZnQgKHJlbW92ZU1pbiByaWdodClcblxuICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJhbGFuY2UgY29sb3Iga2V5IHZhbHVlIGxlZnQgKHJlbW92ZUhlbHAgdGFyZ2V0S2V5IHJpZ2h0KVxuXG4gICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluIC0+XG4gICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpblxuXG5cbmdldE1pbiA6IERpY3QgayB2IC0+IERpY3QgayB2XG5nZXRNaW4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBsZWZ0ID0gKChSQk5vZGVfZ3Jlbl9idWlsdGluIF8pIGFzIGxlZnQpIH0gLT5cbiAgICAgICAgICAgIGdldE1pbiBsZWZ0XG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgZGljdFxuXG5cbnJlbW92ZU1pbiA6IERpY3QgayB2IC0+IERpY3QgayB2XG5yZW1vdmVNaW4gZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCA9ICgoUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENvbG9yLCBsZWZ0ID0gbExlZnQgfSkgYXMgbGVmdCksIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIHdoZW4gbENvbG9yIGlzXG4gICAgICAgICAgICAgICAgQmxhY2sgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBsTGVmdCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gUmVkIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIGNvbG9yIGtleSB2YWx1ZSAocmVtb3ZlTWluIGxlZnQpIHJpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIG1vdmVSZWRMZWZ0IGRpY3QgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbkNvbG9yLCBrZXkgPSBuS2V5LCB2YWx1ZSA9IG5WYWx1ZSwgbGVmdCA9IG5MZWZ0LCByaWdodCA9IG5SaWdodCB9IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlIG5Db2xvciBuS2V5IG5WYWx1ZSAocmVtb3ZlTWluIG5MZWZ0KSBuUmlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgbm9kZSBjb2xvciBrZXkgdmFsdWUgKHJlbW92ZU1pbiBsZWZ0KSByaWdodFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIFJCRW1wdHlfZ3Jlbl9idWlsdGluXG5cblxubW92ZVJlZExlZnQgOiBEaWN0IGsgdiAtPiBEaWN0IGsgdlxubW92ZVJlZExlZnQgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBsTGVmdCwgcmlnaHQgPSBsUmlnaHQgfSwgcmlnaHQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSByQ2xyLCBrZXkgPSBySywgdmFsdWUgPSByViwgbGVmdCA9IChSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IHJsSywgdmFsdWUgPSBybFYsIGxlZnQgPSBybEwsIHJpZ2h0ID0gcmxSIH0pIGFzIHJMZWZ0LCByaWdodCA9IHJSaWdodCB9IH0gLT5cbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICBSZWRcbiAgICAgICAgICAgICAgICBybEtcbiAgICAgICAgICAgICAgICBybFZcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBrIHYgKG5vZGUgUmVkIGxLIGxWIGxMZWZ0IGxSaWdodCkgcmxMKVxuICAgICAgICAgICAgICAgIChub2RlIEJsYWNrIHJLIHJWIHJsUiByUmlnaHQpXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gY2xyLCBrZXkgPSBrLCB2YWx1ZSA9IHYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBsQ2xyLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9LCByaWdodCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IHJDbHIsIGtleSA9IHJLLCB2YWx1ZSA9IHJWLCBsZWZ0ID0gckxlZnQsIHJpZ2h0ID0gclJpZ2h0IH0gfSAtPlxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgICAgIEJsYWNrXG4gICAgICAgICAgICAgICAga1xuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgbEsgbFYgbExlZnQgbFJpZ2h0KVxuICAgICAgICAgICAgICAgIChub2RlIFJlZCBySyByViByTGVmdCByUmlnaHQpXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgZGljdFxuXG5cbm1vdmVSZWRSaWdodCA6IERpY3QgayB2IC0+IERpY3QgayB2XG5tb3ZlUmVkUmlnaHQgZGljdCA9XG4gICAgd2hlbiBkaWN0IGlzXG4gICAgICAgIFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IGNsciwga2V5ID0gaywgdmFsdWUgPSB2LCBsZWZ0ID0gUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gbENsciwga2V5ID0gbEssIHZhbHVlID0gbFYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBSZWQsIGtleSA9IGxsSywgdmFsdWUgPSBsbFYsIGxlZnQgPSBsbExlZnQsIHJpZ2h0ID0gbGxSaWdodCB9LCByaWdodCA9IGxSaWdodCB9LCByaWdodCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IHJDbHIsIGtleSA9IHJLLCB2YWx1ZSA9IHJWLCBsZWZ0ID0gckxlZnQsIHJpZ2h0ID0gclJpZ2h0IH0gfSAtPlxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgICAgIFJlZFxuICAgICAgICAgICAgICAgIGxLXG4gICAgICAgICAgICAgICAgbFZcbiAgICAgICAgICAgICAgICAobm9kZSBCbGFjayBsbEsgbGxWIGxsTGVmdCBsbFJpZ2h0KVxuICAgICAgICAgICAgICAgIChub2RlIEJsYWNrIGsgdiBsUmlnaHQgKG5vZGUgUmVkIHJLIHJWIHJMZWZ0IHJSaWdodCkpXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGNvbG9yID0gY2xyLCBrZXkgPSBrLCB2YWx1ZSA9IHYsIGxlZnQgPSBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IgPSBsQ2xyLCBrZXkgPSBsSywgdmFsdWUgPSBsViwgbGVmdCA9IGxMZWZ0LCByaWdodCA9IGxSaWdodCB9LCByaWdodCA9IFJCTm9kZV9ncmVuX2J1aWx0aW4geyBjb2xvciA9IHJDbHIsIGtleSA9IHJLLCB2YWx1ZSA9IHJWLCBsZWZ0ID0gckxlZnQsIHJpZ2h0ID0gclJpZ2h0IH0gfSAtPlxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgICAgIEJsYWNrXG4gICAgICAgICAgICAgICAga1xuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgICAgICAobm9kZSBSZWQgbEsgbFYgbExlZnQgbFJpZ2h0KVxuICAgICAgICAgICAgICAgIChub2RlIFJlZCBySyByViByTGVmdCByUmlnaHQpXG5cbiAgICAgICAgXyAtPlxuICAgICAgICAgICAgZGljdFxuXG5cbnstfCBVcGRhdGUgdGhlIHZhbHVlIG9mIGEgZGljdGlvbmFyeSBmb3IgYSBzcGVjaWZpYyBrZXkgd2l0aCBhIGdpdmVuIGZ1bmN0aW9uLlxuLX1cbnVwZGF0ZSA6IGNvbXBhcmFibGUgLT4gKE1heWJlIHYgLT4gTWF5YmUgdikgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbnVwZGF0ZSB0YXJnZXRLZXkgYWx0ZXIgZGljdGlvbmFyeSA9XG4gICAgd2hlbiBhbHRlciAoZ2V0IHRhcmdldEtleSBkaWN0aW9uYXJ5KSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBzZXQgdGFyZ2V0S2V5IHZhbHVlIGRpY3Rpb25hcnlcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICByZW1vdmUgdGFyZ2V0S2V5IGRpY3Rpb25hcnlcblxuXG57LXwgU2FtZSBhcyBbdXBkYXRlXSgjdXBkYXRlKSBidXQgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0IGluIHRoZSBkaWN0aW9uYXJ5LCBhIGRlZmF1bHQgdmFsdWVcbmlzIHBhc3NlZCB0byB0aGUgcHJvdmlkZWQgdXBkYXRlIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBgTWF5YmVgLlxuLX1cbnVwZGF0ZVdpdGhEZWZhdWx0IDogY29tcGFyYWJsZSAtPiB2IC0+ICh2IC0+IHYpIC0+IERpY3QgY29tcGFyYWJsZSB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG51cGRhdGVXaXRoRGVmYXVsdCB0YXJnZXRLZXkgZGVmYXVsdFZhbHVlIGFsdGVyIGRpY3Rpb25hcnkgPVxuICAgIHdoZW4gZ2V0IHRhcmdldEtleSBkaWN0aW9uYXJ5IGlzXG4gICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgIHNldCB0YXJnZXRLZXkgKGFsdGVyIHZhbHVlKSBkaWN0aW9uYXJ5XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgc2V0IHRhcmdldEtleSAoYWx0ZXIgZGVmYXVsdFZhbHVlKSBkaWN0aW9uYXJ5XG5cblxuey18IENyZWF0ZSBhIGRpY3Rpb25hcnkgd2l0aCBvbmUga2V5LXZhbHVlIHBhaXIuXG4tfVxuc2luZ2xldG9uIDogY29tcGFyYWJsZSAtPiB2IC0+IERpY3QgY29tcGFyYWJsZSB2XG5zaW5nbGV0b24ga2V5IHZhbHVlID1cbiAgICAtLSBSb290IG5vZGUgaXMgYWx3YXlzIEJsYWNrXG4gICAgbm9kZSBCbGFjayBrZXkgdmFsdWUgUkJFbXB0eV9ncmVuX2J1aWx0aW4gUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuXG5cbi0tIENPTUJJTkVcblxuXG57LXwgQ29tYmluZSB0d28gZGljdGlvbmFyaWVzLiBJZiB0aGVyZSBpcyBhIGNvbGxpc2lvbiwgcHJlZmVyZW5jZSBpcyBnaXZlblxudG8gdGhlIGZpcnN0IGRpY3Rpb25hcnkuXG4tfVxudW5pb24gOiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgdlxudW5pb24gdDEgdDIgPVxuICAgIGZvbGRsIHNldCB0MiB0MVxuXG5cbnstfCBLZWVwIGEga2V5LXZhbHVlIHBhaXIgd2hlbiBpdHMga2V5IGFwcGVhcnMgaW4gdGhlIHNlY29uZCBkaWN0aW9uYXJ5LlxuUHJlZmVyZW5jZSBpcyBnaXZlbiB0byB2YWx1ZXMgaW4gdGhlIGZpcnN0IGRpY3Rpb25hcnkuXG4tfVxuaW50ZXJzZWN0IDogRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbmludGVyc2VjdCB0MSB0MiA9XG4gICAga2VlcElmIChcXGsgXyAtPiBtZW1iZXIgayB0MikgdDFcblxuXG57LXwgS2VlcCBhIGtleS12YWx1ZSBwYWlyIHdoZW4gaXRzIGtleSBkb2VzIG5vdCBhcHBlYXIgaW4gdGhlIHNlY29uZCBkaWN0aW9uYXJ5LlxuLX1cbmRpZmYgOiBEaWN0IGNvbXBhcmFibGUgYSAtPiBEaWN0IGNvbXBhcmFibGUgYiAtPiBEaWN0IGNvbXBhcmFibGUgYVxuZGlmZiB0MSB0MiA9XG4gICAgZm9sZGwgKFxcayB2IHQgLT4gcmVtb3ZlIGsgdCkgdDEgdDJcblxuXG5cbi0tIFRSQU5TRk9STVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIHRvIGFsbCB2YWx1ZXMgaW4gYSBkaWN0aW9uYXJ5LlxuLX1cbm1hcCA6IChrIC0+IGEgLT4gYikgLT4gRGljdCBrIGEgLT4gRGljdCBrIGJcbm1hcCBmdW5jIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgUkJFbXB0eV9ncmVuX2J1aWx0aW5cblxuICAgICAgICBSQk5vZGVfZ3Jlbl9idWlsdGluIHsgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIG5vZGUgY29sb3Iga2V5IChmdW5jIGtleSB2YWx1ZSkgKG1hcCBmdW5jIGxlZnQpIChtYXAgZnVuYyByaWdodClcblxuXG57LXwgRm9sZCBvdmVyIHRoZSBrZXktdmFsdWUgcGFpcnMgaW4gYSBkaWN0aW9uYXJ5IGZyb20gbG93ZXN0IGtleSB0byBoaWdoZXN0IGtleS5cblxuICAgIGltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuXG4gICAgZ2V0QWdlcyA6IERpY3QgU3RyaW5nIFVzZXIgLT4gQXJyYXkgU3RyaW5nXG4gICAgZ2V0QWdlcyB1c2VycyA9XG4gICAgICAgIERpY3QuZm9sZGwgYWRkQWdlIFtdIHVzZXJzXG5cbiAgICBhZGRBZ2UgOiBTdHJpbmcgLT4gVXNlciAtPiBBcnJheSBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG4gICAgYWRkQWdlIF8gdXNlciBhZ2VzID1cbiAgICAgICAgdXNlci5hZ2UgOjogYWdlc1xuXG4gICAgLS0gZ2V0QWdlcyB1c2VycyA9PSBbMzMsMTksMjhdXG5cbi19XG5mb2xkbCA6IChrIC0+IHYgLT4gYiAtPiBiKSAtPiBiIC0+IERpY3QgayB2IC0+IGJcbmZvbGRsIGZ1bmMgYWNjIGRpY3QgPVxuICAgIHdoZW4gZGljdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgYWNjXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGZvbGRsIGZ1bmMgKGZ1bmMga2V5IHZhbHVlIChmb2xkbCBmdW5jIGFjYyBsZWZ0KSkgcmlnaHRcblxuXG57LXwgRm9sZCBvdmVyIHRoZSBrZXktdmFsdWUgcGFpcnMgaW4gYSBkaWN0aW9uYXJ5IGZyb20gaGlnaGVzdCBrZXkgdG8gbG93ZXN0IGtleS5cblxuICAgIGltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuXG4gICAgZ2V0QWdlcyA6IERpY3QgU3RyaW5nIFVzZXIgLT4gQXJyYXkgU3RyaW5nXG4gICAgZ2V0QWdlcyB1c2VycyA9XG4gICAgICAgIERpY3QuZm9sZHIgYWRkQWdlIFtdIHVzZXJzXG5cbiAgICBhZGRBZ2UgOiBTdHJpbmcgLT4gVXNlciAtPiBBcnJheSBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG4gICAgYWRkQWdlIF8gdXNlciBhZ2VzID1cbiAgICAgICAgdXNlci5hZ2UgOjogYWdlc1xuXG4gICAgLS0gZ2V0QWdlcyB1c2VycyA9PSBbMjgsMTksMzNdXG5cbi19XG5mb2xkciA6IChrIC0+IHYgLT4gYiAtPiBiKSAtPiBiIC0+IERpY3QgayB2IC0+IGJcbmZvbGRyIGZ1bmMgYWNjIHQgPVxuICAgIHdoZW4gdCBpc1xuICAgICAgICBSQkVtcHR5X2dyZW5fYnVpbHRpbiAtPlxuICAgICAgICAgICAgYWNjXG5cbiAgICAgICAgUkJOb2RlX2dyZW5fYnVpbHRpbiB7IGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0IH0gLT5cbiAgICAgICAgICAgIGZvbGRyIGZ1bmMgKGZ1bmMga2V5IHZhbHVlIChmb2xkciBmdW5jIGFjYyByaWdodCkpIGxlZnRcblxuXG57LXwgS2VlcCBvbmx5IHRoZSBrZXktdmFsdWUgcGFpcnMgdGhhdCBwYXNzIHRoZSBnaXZlbiB0ZXN0LlxuLX1cbmtlZXBJZiA6IChjb21wYXJhYmxlIC0+IHYgLT4gQm9vbCkgLT4gRGljdCBjb21wYXJhYmxlIHYgLT4gRGljdCBjb21wYXJhYmxlIHZcbmtlZXBJZiBpc0dvb2QgZGljdCA9XG4gICAgZm9sZGxcbiAgICAgICAgKFxcayB2IGQgLT5cbiAgICAgICAgICAgIGlmIGlzR29vZCBrIHYgdGhlblxuICAgICAgICAgICAgICAgIHNldCBrIHYgZFxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZFxuICAgICAgICApXG4gICAgICAgIGVtcHR5XG4gICAgICAgIGRpY3RcblxuXG57LXwgUmVtb3ZlIHVud2FudGVkIHJlc3VsdHMgb2YgYSBtYXAgb3BlcmF0aW9uLlxuLX1cbm1hcEFuZEtlZXBKdXN0IDogKGNvbXBhcmFibGUgLT4gdiAtPiBNYXliZSB4KSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiBEaWN0IGNvbXBhcmFibGUgeFxubWFwQW5kS2VlcEp1c3QgdG9NYXliZSBkaWN0ID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxrIHYgZCAtPlxuICAgICAgICAgICAgd2hlbiB0b01heWJlIGsgdiBpc1xuICAgICAgICAgICAgICAgIEp1c3QgbmV3VmFsdWUgLT5cbiAgICAgICAgICAgICAgICAgICAgc2V0IGsgbmV3VmFsdWUgZFxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBkXG4gICAgICAgIClcbiAgICAgICAgZW1wdHlcbiAgICAgICAgZGljdFxuXG5cbnstfCBQYXJ0aXRpb24gYSBkaWN0aW9uYXJ5IGFjY29yZGluZyB0byBzb21lIHRlc3QuIFRoZSBmaXJzdCBkaWN0aW9uYXJ5XG5jb250YWlucyBhbGwga2V5LXZhbHVlIHBhaXJzIHdoaWNoIHBhc3NlZCB0aGUgdGVzdCwgYW5kIHRoZSBzZWNvbmQgY29udGFpbnNcbnRoZSBwYWlycyB0aGF0IGRpZCBub3QuXG4tfVxucGFydGl0aW9uIDogKGNvbXBhcmFibGUgLT4gdiAtPiBCb29sKSAtPiBEaWN0IGNvbXBhcmFibGUgdiAtPiB7IHRydWVzIDogRGljdCBjb21wYXJhYmxlIHYsIGZhbHNlcyA6IERpY3QgY29tcGFyYWJsZSB2IH1cbnBhcnRpdGlvbiBpc0dvb2QgZGljdCA9XG4gICAgbGV0XG4gICAgICAgIGFkZCBrZXkgdmFsdWUgeyB0cnVlcywgZmFsc2VzIH0gPVxuICAgICAgICAgICAgaWYgaXNHb29kIGtleSB2YWx1ZSB0aGVuXG4gICAgICAgICAgICAgICAgeyB0cnVlcyA9IHNldCBrZXkgdmFsdWUgdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IGZhbHNlc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHsgdHJ1ZXMgPSB0cnVlc1xuICAgICAgICAgICAgICAgICwgZmFsc2VzID0gc2V0IGtleSB2YWx1ZSBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgaW5cbiAgICBmb2xkbCBhZGQgeyB0cnVlcyA9IGVtcHR5LCBmYWxzZXMgPSBlbXB0eSB9IGRpY3RcblxuXG5cbi0tIEFSUkFZU1xuXG5cbnstfCBHZXQgYWxsIG9mIHRoZSBrZXlzIGluIGEgZGljdGlvbmFyeSwgc29ydGVkIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXG5cbiAgICBrZXlzIChEaWN0LmVtcHR5IHw+IERpY3Quc2V0IDAgXCJBbGljZVwiIHw+IERpY3Quc2V0IDEgXCJCb2JcIikgPT0gWyAwLCAxIF1cblxuLX1cbmtleXMgOiBEaWN0IGsgdiAtPiBBcnJheSBrXG5rZXlzIGRpY3QgPVxuICAgIGZvbGRsIChcXGtleSB2YWx1ZSBrZXlBcnJheSAtPiBBcnJheS5wdXNoTGFzdCBrZXkga2V5QXJyYXkpIFtdIGRpY3RcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUgdmFsdWVzIGluIGEgZGljdGlvbmFyeSwgaW4gdGhlIG9yZGVyIG9mIHRoZWlyIGtleXMuXG5cbiAgICB2YWx1ZXMgKERpY3QuZW1wdHkgfD4gRGljdC5zZXQgMCBcIkFsaWNlXCIgfD4gRGljdC5zZXQgMSBcIkJvYlwiKSA9PSBbIFwiQWxpY2VcIiwgXCJCb2JcIiBdXG5cbi19XG52YWx1ZXMgOiBEaWN0IGsgdiAtPiBBcnJheSB2XG52YWx1ZXMgZGljdCA9XG4gICAgZm9sZGwgKFxca2V5IHZhbHVlIHZhbHVlQXJyYXkgLT4gQXJyYXkucHVzaExhc3QgdmFsdWUgdmFsdWVBcnJheSkgW10gZGljdFxuXG5cbnstfCBUaGUgbW9zdCBnZW5lcmFsIHdheSBvZiBjb21iaW5pbmcgdHdvIGRpY3Rpb25hcmllcy4gWW91IHByb3ZpZGUgdGhyZWVcbmFjY3VtdWxhdG9ycyBmb3Igd2hlbiBhIGdpdmVuIGtleSBhcHBlYXJzOlxuXG4xLiAgT25seSBpbiB0aGUgbGVmdCBkaWN0aW9uYXJ5LlxuMi4gIEluIGJvdGggZGljdGlvbmFyaWVzLlxuMy4gIE9ubHkgaW4gdGhlIHJpZ2h0IGRpY3Rpb25hcnkuXG4gICAgWW91IHRoZW4gdHJhdmVyc2UgYWxsIHRoZSBrZXlzIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QsIGJ1aWxkaW5nIHVwIHdoYXRldmVyXG4gICAgeW91IHdhbnQuXG5cbi19XG5tZXJnZSA6XG4gICAgKGNvbXBhcmFibGUgLT4gYSAtPiByZXN1bHQgLT4gcmVzdWx0KVxuICAgIC0+IChjb21wYXJhYmxlIC0+IGEgLT4gYiAtPiByZXN1bHQgLT4gcmVzdWx0KVxuICAgIC0+IChjb21wYXJhYmxlIC0+IGIgLT4gcmVzdWx0IC0+IHJlc3VsdClcbiAgICAtPiBEaWN0IGNvbXBhcmFibGUgYVxuICAgIC0+IERpY3QgY29tcGFyYWJsZSBiXG4gICAgLT4gcmVzdWx0XG4gICAgLT4gcmVzdWx0XG5tZXJnZSBsZWZ0U3RlcCBib3RoU3RlcCByaWdodFN0ZXAgbGVmdERpY3QgcmlnaHREaWN0IGluaXRpYWxSZXN1bHQgPVxuICAgIGxldFxuICAgICAgICBzdGVwU3RhdGUgcktleSByVmFsdWUgeyBhcnJheSwgcmVzdWx0IH0gPVxuICAgICAgICAgICAgd2hlbiBBcnJheS5wb3BGaXJzdCBhcnJheSBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgeyBhcnJheSA9IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gcmlnaHRTdGVwIHJLZXkgclZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBKdXN0IHsgZmlyc3QgPSB7IGtleSA9IGxLZXksIHZhbHVlID0gbFZhbHVlIH0sIHJlc3QgfSAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBsS2V5IDwgcktleSB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwU3RhdGUgcktleSByVmFsdWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhcnJheSA9IHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIHJlc3VsdCA9IGxlZnRTdGVwIGxLZXkgbFZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGxLZXkgPiByS2V5IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXJyYXkgPSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLCByZXN1bHQgPSByaWdodFN0ZXAgcktleSByVmFsdWUgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhcnJheSA9IHJlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICwgcmVzdWx0ID0gYm90aFN0ZXAgbEtleSBsVmFsdWUgclZhbHVlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHsgYXJyYXkgPSBsZWZ0b3ZlcnMsIHJlc3VsdCA9IGludGVybWVkaWF0ZVJlc3VsdCB9ID1cbiAgICAgICAgICAgIGZvbGRsIHN0ZXBTdGF0ZSB7IGFycmF5ID0gZm9sZGwgKFxca2V5IHZhbHVlIGFycmF5IC0+IEFycmF5LnB1c2hMYXN0IHsga2V5ID0ga2V5LCB2YWx1ZSA9IHZhbHVlIH0gYXJyYXkpIFtdIGxlZnREaWN0LCByZXN1bHQgPSBpbml0aWFsUmVzdWx0IH0gcmlnaHREaWN0XG4gICAgaW5cbiAgICBBcnJheS5mb2xkbCAoXFx7IGtleSwgdmFsdWUgfSByZXN1bHQgLT4gbGVmdFN0ZXAga2V5IHZhbHVlIHJlc3VsdCkgaW50ZXJtZWRpYXRlUmVzdWx0IGxlZnRvdmVyc1xuIiwKICAgICAgICAibW9kdWxlIEFycmF5IGV4cG9zaW5nXG4gICAgKCBBcnJheVxuICAgICwgc2luZ2xldG9uLCBpbml0aWFsaXplLCByZXBlYXQsIHJhbmdlXG4gICAgLCBtYXAsIGluZGV4ZWRNYXAsIGZvbGRsLCBmb2xkciwgaW5kZXhlZEZvbGRsLCBpbmRleGVkRm9sZHIsIGtlZXBJZiwgaW5kZXhlZEtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHJldmVyc2VcbiAgICAsIGlzRW1wdHksIGxlbmd0aCwgZ2V0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBtZW1iZXIsIGFueSwgYWxsLCBtaW5pbXVtLCBtYXhpbXVtXG4gICAgLCBzZXQsIHNldE1hbnksIHVwZGF0ZSwgaW5zZXJ0LCBpbnNlcnRNYW55LCByZW1vdmUsIHJlbW92ZU1hbnksIHB1c2hGaXJzdCwgcHVzaExhc3QsIHNwbGljZVxuICAgICwgcHJlcGVuZCwgYXBwZW5kLCBmbGF0dGVuLCBtYXBBbmRGbGF0dGVuLCBpbnRlcnNwZXJzZSwgbWFwMiwgbWFwM1xuICAgICwgZmlyc3QsIGxhc3QsIHNsaWNlLCBkcm9wRmlyc3QsIGRyb3BMYXN0LCB0YWtlRmlyc3QsIHRha2VMYXN0LCBwb3BGaXJzdCwgcG9wTGFzdCwgcGFydGl0aW9uXG4gICAgLCBzb3J0LCBzb3J0QnksIHNvcnRXaXRoXG4gICAgKVxuXG57LXwgWW91IGNhbiBjcmVhdGUgYW4gYEFycmF5YCB1c2luZyB0aGUgYFsxLCAyLCAzXWAgc3ludGF4LiBUaGlzIG1vZHVsZSBoYXMgYSBidW5jaCBvZlxuZnVuY3Rpb25zIHRvIGhlbHAgeW91IHdvcmsgd2l0aCB0aGVtLlxuXG5AZG9jcyBBcnJheVxuXG5AZG9jcyBzaW5nbGV0b24sIGluaXRpYWxpemUsIHJlcGVhdCwgcmFuZ2VcblxuXG4jIyBUcmFuc2Zvcm1cblxuQGRvY3MgbWFwLCBpbmRleGVkTWFwLCBmb2xkbCwgZm9sZHIsIGluZGV4ZWRGb2xkbCwgaW5kZXhlZEZvbGRyLCBrZWVwSWYsIGluZGV4ZWRLZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCByZXZlcnNlXG5cblxuIyMgUXVlcnlcblxuQGRvY3MgaXNFbXB0eSwgbGVuZ3RoLCBnZXQsIGZpcnN0LCBsYXN0LCBmaW5kRmlyc3QsIGZpbmRMYXN0LCBtZW1iZXIsIGFueSwgYWxsLCBtaW5pbXVtLCBtYXhpbXVtXG5cblxuIyMgTW9kaWZ5XG5cbkBkb2NzIHNldCwgc2V0TWFueSwgdXBkYXRlLCBpbnNlcnQsIGluc2VydE1hbnksIHJlbW92ZSwgcmVtb3ZlTWFueSwgcHVzaEZpcnN0LCBwdXNoTGFzdCwgc3BsaWNlXG5cblxuIyMgQ29tYmluZVxuXG5AZG9jcyBwcmVwZW5kLCBhcHBlbmQsIGZsYXR0ZW4sIG1hcEFuZEZsYXR0ZW4sIGludGVyc3BlcnNlLCBtYXAyLCBtYXAzXG5cblxuIyMgRGVjb25zdHJ1Y3RcblxuQGRvY3Mgc2xpY2UsIHRha2VGaXJzdCwgdGFrZUxhc3QsIGRyb3BGaXJzdCwgZHJvcExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0LCBwYXJ0aXRpb25cblxuXG4jIyBTb3J0XG5cbkBkb2NzIHNvcnQsIHNvcnRCeSwgc29ydFdpdGhcblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IEdyZW4uS2VybmVsLkFycmF5XG5cblxuey18IEFuIEFycmF5IGlzIGFuIG9yZGVyZWQgY29sbGVjdGlvbiBvZiBlbGVtZW50cy5cbi19XG50eXBlIEFycmF5IGFcbiAgICA9IEFycmF5IGFcblxuXG4tLSBDUkVBVEVcblxuXG57LXwgQ3JlYXRlIGFuIGFycmF5IGNvbnRhaW5pbmcgYSBzaW5nbGUgdmFsdWUuXG4tfVxuc2luZ2xldG9uIDogYSAtPiBBcnJheSBhXG5zaW5nbGV0b24gYSA9XG4gICAgWyBhIF1cblxuXG57LXwgQ3JlYXRlIGFuIGFycmF5IG9mIGBuYCBlbGVtZW50cywgY29udGFpbmluZyB0aGUgZWxlbWVudHNcbnJlc3VsdGluZyBmcm9tIGNhbGxpbmcgYGZuYCB3aXRoIGBvZmZzZXQgKyBpbmRleGAuXG5cbiAgICBpbml0aWFsaXplIDMgNSBpZGVudGl0eSA9PSBbIDUsIDYsIDcgXVxuXG5JbiB0aGUgYWJvdmUgZXhhbXBsZSwgd2UgY3JlYXRlIGFuIGFycmF5IGNvbnRhaW5pbmcgMyBpbnRlZ2Vyc1xuc3RhcnRpbmcgYXQgNS5cbi19XG5pbml0aWFsaXplIDogSW50IC0+IEludCAtPiAoSW50IC0+IGEpIC0+IEFycmF5IGFcbmluaXRpYWxpemUgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmluaXRpYWxpemVcblxuXG57LXwgQ3JlYXRlIGFuIGFycmF5IHdpdGggYG5gIGNvcGllcyBvZiBhIHZhbHVlOlxuXG4gICAgcmVwZWF0IDUgMyA9PSBbIDMsIDMsIDMsIDMsIDMgXVxuXG4tfVxucmVwZWF0IDogSW50IC0+IGEgLT4gQXJyYXkgYVxucmVwZWF0IG4gdmFsID1cbiAgICBpbml0aWFsaXplIG4gMCAoXFxfIC0+IHZhbClcblxuXG57LXwgQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMsIGV2ZXJ5IGVsZW1lbnQgaW5jcmVhc2luZyBieSBvbmUuIFlvdSBnaXZlIHRoZSBsb3dlc3QgYW5kIGhpZ2hlc3QgbnVtYmVyIHRoYXQgc2hvdWxkIGJlIGluIHRoZSBhcnJheS5cblxuICAgIHJhbmdlIDMgNiA9PSBbMywgNCwgNSwgNl1cbiAgICByYW5nZSAzIDMgPT0gWzNdXG4gICAgcmFuZ2UgNiAzID09IFtdXG5cbi19XG5yYW5nZSA6IEludCAtPiBJbnQgLT4gQXJyYXkgSW50XG5yYW5nZSBmcm9tIHRvID1cbiAgICBpZiBmcm9tID4gdG8gdGhlblxuICAgICAgICBbXVxuXG4gICAgZWxzZSBpZiBmcm9tID09IHRvIHRoZW5cbiAgICAgICAgW2Zyb21dXG5cbiAgICBlbHNlIFxuICAgICAgICBpbml0aWFsaXplICh0byAtIGZyb20gKyAxKSBmcm9tIGlkZW50aXR5XG5cblxuLS0gVFJBTlNGT1JNXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gb24gZXZlcnkgZWxlbWVudCBpbiBhbiBhcnJheS5cblxuICAgIG1hcCBuZWdhdGUgWyAxLCA0LCA5IF0gPT0gWyAtMSwgLTQsIC05IF1cblxuU28gYG1hcCBmdW5jIFsgYSwgYiwgYyBdYCBpcyB0aGUgc2FtZSBhcyBgWyBmdW5jIGEsIGZ1bmMgYiwgZnVuYyBjIF1gXG5cbi19XG5tYXAgOiAoYSAtPiBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkubWFwXG5cblxuey18IFNhbWUgYXMgYG1hcGAgYnV0IHRoZSBmdW5jdGlvbiBpcyBhbHNvIGFwcGxpZWQgdG8gdGhlIGluZGV4IG9mIGVhY2ggZWxlbWVudC5cblxuICAgIGluZGV4ZWRNYXAgKFxcaWR4IHZhbCAtPiBbaWR4LCB2YWxdKSBbIDMsIDMsIDMgXSA9PSBbIFsgMCwgMyBdLCBbIDEsIDMgXSwgWyAyLCAzIF0gXVxuXG4tfVxuaW5kZXhlZE1hcCA6IChJbnQgLT4gYSAtPiBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbmluZGV4ZWRNYXAgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmluZGV4ZWRNYXBcblxuXG57LXwgUmVkdWNlIHRoZSBhcnJheSBmcm9tIHRoZSBsZWZ0LlxuXG4gICAgZm9sZGwgKCspIDAgWyAxLCAyLCAzIF0gPT0gNlxuXG5TbyBgZm9sZGwgc3RlcCBzdGF0ZSBbIDEsIDIsIDMgXWAgaXMgbGlrZSBzYXlpbmc6XG5cbiAgICBzdGF0ZVxuICAgICAgICB8PiBzdGVwIDFcbiAgICAgICAgfD4gc3RlcCAyXG4gICAgICAgIHw+IHN0ZXAgM1xuLX1cbmZvbGRsIDogKGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuZm9sZGwgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZvbGRsXG5cblxuey18IFJlZHVjZSB0aGUgYXJyYXkgZnJvbSB0aGUgcmlnaHQuIFNhbWUgYXMgYGZvbGRsYCBidXRcbnRoZSBleGVjdXRpb24gb3JkZXIgaXMgcmV2ZXJzZWQuXG4tfVxuZm9sZHIgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gQXJyYXkgYSAtPiBiXG5mb2xkciA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZm9sZHJcblxuXG57LXwgUmVkdWNlIHRoZSBhcnJheSBmcm9tIHRoZSBsZWZ0LiBUaGUgcmVkdWNpbmcgZnVuY3Rpb24gaXMgXG5wYXNzZWQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHZhbHVlLlxuXG4gICAgaW5kZXhlZEZvbGRsIChcXGlkeCB2YWwgc3VtIC0+IGlkeCArIHZhbCArIHN1bSkgMCBbIDEsIDIsIDMgXSA9PSA5XG5cbi19XG5pbmRleGVkRm9sZGwgOiAoSW50IC0+IGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuaW5kZXhlZEZvbGRsID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkRm9sZGxcblxuXG57LXwgUmVkdWNlIHRoZSBhcnJheSBmcm9tIHRoZSByaWdodC4gVGhlIHJlZHVjaW5nIGZ1bmN0aW9uXG5pcyBwYXNzZWQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHZhbHVlLiBTYW1lIGFzIGBpbmRleGVkRm9sZGxgXG5idXQgdGhlIGV4ZWN1dGlvbiBvcmRlciBpcyByZXZlcnNlZC5cbi19XG5pbmRleGVkRm9sZHIgOiAoSW50IC0+IGEgLT4gYiAtPiBiKSAtPiBiIC0+IEFycmF5IGEgLT4gYlxuaW5kZXhlZEZvbGRyID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkRm9sZHJcblxuXG57LXwgS2VlcCB2YWx1ZXMgdGhhdCBwYXNzIHRoZSB0ZXN0LlxuXG4gICAga2VlcElmIChcXG4gLT4gbiA8IDMpIFsgMSwgMiwgMywgNCBdID09IFsgMSwgMiBdXG5cbi19XG5rZWVwSWYgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmtlZXBJZiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZmlsdGVyXG5cbnstfCBTYW1lIGFzIGBrZWVwSWZgIGJ1dCB0aGUgdGVzdCBpcyBhbHNvIGFwcGxpZWQgdG8gdGhlIGluZGV4IG9mIGVhY2ggZWxlbWVudC5cblxuICAgIGluZGV4ZWRLZWVwSWYgKFxcaWR4IHZhbCAtPiBpZHggKyB2YWwgPiA0KSBbIDEsIDIsIDMsIDQgXSA9PSBbIDMsIDQgXVxuLX1cbmluZGV4ZWRLZWVwSWYgOiAoSW50IC0+IGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5pbmRleGVkS2VlcElmID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5pbmRleGVkRmlsdGVyXG5cblxuey18IFJlbW92ZSB1bndhbnRlZCByZXN1bHRzIG9mIGEgbWFwIG9wZXJhdGlvbi5cblxuICAgIG1hcEFuZEtlZXBKdXN0IFN0cmluZy50b0ludCBbIFwiM1wiLCBcIm5vdCBhIG51bWJlclwiLCBcIi01XCIgXSA9PSBbIDMsIC01IF1cbiAgICBtYXBBbmRLZWVwSnVzdCBpZGVudGl0eSBbIEp1c3QgMSwgTm90aGluZyBdID09IFsgMSBdXG5cbi19XG5tYXBBbmRLZWVwSnVzdCA6IChhIC0+IE1heWJlIGIpIC0+IEFycmF5IGEgLT4gQXJyYXkgYlxubWFwQW5kS2VlcEp1c3QgbWFwcGVyIGFycmF5ID1cbiAgICBtYXBBbmRGbGF0dGVuXG4gICAgICAgIChcXHYgLT5cbiAgICAgICAgICAgIHdoZW4gbWFwcGVyIHYgaXNcbiAgICAgICAgICAgICAgICBKdXN0IG5ld1ZhbHVlIC0+XG4gICAgICAgICAgICAgICAgICAgIFsgbmV3VmFsdWUgXVxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICApXG4gICAgICAgIGFycmF5XG5cblxuey18IFJldmVyc2UgYW4gYXJyYXkuXG5cbiAgICByZXZlcnNlIFsgMSwgMiwgMyBdID09IFsgMywgMiwgMSBdXG5cbi19XG5yZXZlcnNlIDogQXJyYXkgYSAtPiBBcnJheSBhXG5yZXZlcnNlID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5yZXZlcnNlXG5cblxuLS0gUVVFUllcblxuXG57LXwgQ2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkuXG5cbiAgICBpc0VtcHR5IFtdID09IFRydWVcbiAgICBpc0VtcHR5IFsgMSwgMiwgMyBdID09IEZhbHNlXG5cbi19XG5pc0VtcHR5IDogQXJyYXkgYSAtPiBCb29sXG5pc0VtcHR5IGFycmF5ID1cbiAgICBsZW5ndGggYXJyYXkgPT0gMFxuXG5cbnstfCBSZXR1cm4gdGhlIGxlbmd0aCBvZiBhbiBhcnJheS5cblxuICAgIGxlbmd0aCBbIDEsIDIsIDMgXSA9PSAzXG5cbi19XG5sZW5ndGggOiBBcnJheSBhIC0+IEludFxubGVuZ3RoID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5sZW5ndGhcblxuXG57LXwgUmV0cmlldmUgdGhlIGVsZW1lbnQgYXQgYSBnaXZlbiBpbmRleCwgb3IgYE5vdGhpbmdgIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLlxuQSBuZWdhdGl2ZSBpbmRleCBsb29rcyB1cCBhbiBlbGVtZW50IGluIHJldmVyc2UgZnJvbSB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuICAgIGdldCAxIFsgMSwgMiwgMyBdID09IEp1c3QgMlxuICAgIGdldCAxMCBbIDEsIDIsIDMgXSA9PSBOb3RoaW5nXG4gICAgZ2V0IC0xIFsgMSwgMiwgMyBdID09IEp1c3QgM1xuXG4tfVxuZ2V0IDogSW50IC0+IEFycmF5IGEgLT4gTWF5YmUgYVxuZ2V0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5nZXRcblxuXG57LXwgRmluZCB0aGUgZmlyc3QgdmFsdWUgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG5cbiAgICBmaW5kIChcXG4gLT4gbiA+IDApIFsgLTEsIDAsIDEsIDIgXSA9PSBKdXN0IDFcblxuLX1cbmZpbmRGaXJzdCA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gTWF5YmUgeyBpbmRleCA6IEludCwgdmFsdWUgOiBhIH1cbmZpbmRGaXJzdCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZmluZEZpcnN0XG5cblxuey18IEZpbmQgdGhlIGxhc3QgdmFsdWUgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG5cbiAgICBmaW5kIChcXG4gLT4gbiA+IDApIFsgLTEsIDAsIDEsIDIgXSA9PSBKdXN0IDJcblxuLX1cbmZpbmRMYXN0IDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiBNYXliZSB7IGluZGV4IDogSW50LCB2YWx1ZSA6IGEgfVxuZmluZExhc3QgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZpbmRMYXN0XG5cblxuey18IEZpZ3VyZSBvdXQgd2hldGhlciBhbiBhcnJheSBjb250YWlucyBhIHZhbHVlLlxuXG4gICAgbWVtYmVyIDkgWzEsMiwzLDRdID09IEZhbHNlXG4gICAgbWVtYmVyIDQgWzEsMiwzLDRdID09IFRydWVcblxuLX1cbm1lbWJlciA6IGEgLT4gQXJyYXkgYSAtPiBCb29sXG5tZW1iZXIgdmFsdWUgYXJyYXkgPVxuICAgIHdoZW4gZmluZEZpcnN0IChcXHYgLT4gdiA9PSB2YWx1ZSkgYXJyYXkgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBUcnVlXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGFueSBlbGVtZW50cyBwYXNzIHRoZSB0ZXN0LlxuXG4gICAgYW55IGlzRXZlbiBbMiwzXSA9PSBUcnVlXG4gICAgYW55IGlzRXZlbiBbMSwzXSA9PSBGYWxzZVxuICAgIGFueSBpc0V2ZW4gW10gPT0gRmFsc2VcblxuLX1cbmFueSA6IChhIC0+IEJvb2wpIC0+IEFycmF5IGEgLT4gQm9vbFxuYW55IGZuIGFycmF5ID1cbiAgICB3aGVuIGZpbmRGaXJzdCBmbiBhcnJheSBpc1xuICAgICAgICBKdXN0IF8gLT5cbiAgICAgICAgICAgIFRydWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYWxsIGVsZW1lbnRzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbGwgaXNFdmVuIFsyLDRdID09IFRydWVcbiAgICBhbGwgaXNFdmVuIFsyLDNdID09IEZhbHNlXG4gICAgYWxsIGlzRXZlbiBbXSA9PSBUcnVlXG5cbi19XG5hbGwgOiAoYSAtPiBCb29sKSAtPiBBcnJheSBhIC0+IEJvb2xcbmFsbCBmbiBhcnJheSA9XG4gICAgd2hlbiBmaW5kRmlyc3QgKG5vdCA8PCBmbikgYXJyYXkgaXNcbiAgICAgICAgSnVzdCBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFRydWVcblxuXG57LXwgRmluZCB0aGUgbWluaW11bSBlbGVtZW50IGluIGEgbm9uLWVtcHR5IGFycmF5LlxuXG4gICAgbWluaW11bSBbMywyLDFdID09IEp1c3QgMVxuICAgIG1pbmltdW0gW10gICAgICA9PSBOb3RoaW5nXG5cbi19XG5taW5pbXVtIDogQXJyYXkgY29tcGFyYWJsZSAtPiBNYXliZSBjb21wYXJhYmxlXG5taW5pbXVtIGFycmF5ID1cbiAgICB3aGVuIGZpcnN0IGFycmF5IGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IHZhbCAtPlxuICAgICAgICAgICAgSnVzdCA8fFxuICAgICAgICAgICAgICAgIGZvbGRsXG4gICAgICAgICAgICAgICAgICAgIChcXGN1cnJlbnQgbG93ZXN0IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiBjdXJyZW50IDwgbG93ZXN0IHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB2YWxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlcblxuXG57LXwgRmluZCB0aGUgbWF4aW11bSBlbGVtZW50IGluIGEgbm9uLWVtcHR5IGFycmF5LlxuXG4gICAgbWF4aW11bSBbMywyLDFdID09IEp1c3QgM1xuICAgIG1heGltdW0gW10gICAgICA9PSBOb3RoaW5nXG5cbi19XG5tYXhpbXVtIDogQXJyYXkgY29tcGFyYWJsZSAtPiBNYXliZSBjb21wYXJhYmxlXG5tYXhpbXVtIGFycmF5ID1cbiAgICB3aGVuIGZpcnN0IGFycmF5IGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IHZhbCAtPlxuICAgICAgICAgICAgSnVzdCA8fFxuICAgICAgICAgICAgICAgIGZvbGRsXG4gICAgICAgICAgICAgICAgICAgIChcXGN1cnJlbnQgaGlnaGVzdCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgY3VycmVudCA+IGhpZ2hlc3QgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB2YWxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlcblxuXG4tLSBNT0RJRllcblxuXG57LXwgUmVwbGFjZSB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXgsIG9yIHJldHVybiB0aGUgYXJyYXkgdW5tb2RpZmllZCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcy5cblBhc3NpbmcgYSBuZWdhdGl2ZSBpbmRleCBtZWFucyB5b3Ugd2FudCB0byByZXBsYWNlIGFuIGVsZW1lbnQgY291bnRpbmcgYmFja3dhcmRzIGZyb20gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG5cbiAgICBzZXQgMSAxMCBbIDEsIDIsIDMgXSA9PSBbIDEsIDEwLCAzIF1cbiAgICBzZXQgMTAgMTAgWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAzIF1cbiAgICBzZXQgLTEgMTAgWyAxLCAyLCAzIF0gPT0gWyAxLCAyLCAxMCBdXG5cbi19XG5zZXQgOiBJbnQgLT4gYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNldCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc2V0XG5cblxuey18IFRoaXMgZnVuY3Rpb24gd29ya3MganVzdCBsaWtlIFtzZXRdKCNzZXQpIGV4Y2VwdCBpdCB0YWtlcyBpbiBhbiBhcnJheSBvZiB2YWx1ZXMgdG8gc2V0LCBhbGxvd2luZyB5b3VcbnRvIHJlcGxhY2Ugc2V2ZXJhbCB2YWx1ZXMgYXQgb25jZS5cblxuSWYgdGhlIHByb3ZpZGVkIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYXQgdGhlIGJlZ2lubmluZyAobmVnYXRpdmUgaW5kZXgpIG9yIGF0IHRoZVxuZW5kIChwb3NpdGl2ZSBpbmRleCkuXG5cbiAgICBzZXRNYW55IDEgWyAwLCAwIF0gWyAxLCAyLCAzLCA0IF0gPT0gWyAxLCAwLCAwLCA0IF1cblxuLX1cbnNldE1hbnkgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNldE1hbnkgaW5kZXggdmFsdWVzIGFycmF5ID1cbiAgICBzcGxpY2UgaW5kZXggKGxlbmd0aCB2YWx1ZXMpIHZhbHVlcyBhcnJheVxuXG5cbnstfCBVcGRhdGUgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXggdXNpbmcgYSBmdW5jdGlvbi4gSWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMsIG5vdGhpbmcgaGFwcGVucy5cblxuICAgIHVwZGF0ZSAxIChcXG4gLT4gbiArIDEpIFsgMSwgMiwgMyBdID09IFsgMSwgMywgMyBdXG4gICAgdXBkYXRlIDEwIChcXG4gLT4gbiArIDEpIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMyBdXG5cbi19XG51cGRhdGUgOiBJbnQgLT4gKGEgLT4gYSkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG51cGRhdGUgaWR4IGZuIGFycmF5ID1cbiAgICB3aGVuIGdldCBpZHggYXJyYXkgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgYXJyYXlcblxuICAgICAgICBKdXN0IHZhbCAtPlxuICAgICAgICAgICAgc2V0IGlkeCAoZm4gdmFsKSBhcnJheVxuXG5cbnstfCBJbnNlcnQgYSBuZXcgdmFsdWUgaW50byB0aGUgYXJyYXkgYXQgdGhlIGdpdmVuIGluZGV4LiBUaGUgdmFsdWUgYWxyZWFkeSBhdCB0aGVcbmdpdmVuIGluZGV4LCBhcyB3ZWxsIGFzIGFsbCBzdWJzZXF1ZW50IHZhbHVlcywgd2lsbCBiZSBtb3ZlZCBvbmUgc3BhY2UgdG8gdGhlIHJpZ2h0LlxuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG5JZiB0aGUgcHJvdmlkZWQgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgdGhlIGVsZW1lbnQgd2lsbCBiZSBhZGRlZCBhdCB0aGUgYmVnaW5uaW5nIChuZWdhdGl2ZSBpbmRleCkgb3IgYXQgdGhlXG5lbmQgKHBvc2l0aXZlIGluZGV4KS5cblxuICAgIGluc2VydCAxIDAgWyAxLCAyLCAzIF0gPT0gWyAxLCAwLCAyLCAzIF1cblxuLX1cbmluc2VydCA6IEludCAtPiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW5zZXJ0IGluZGV4IHZhbHVlIGFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zcGxpY2UxIGluZGV4IDAgdmFsdWUgYXJyYXlcblxuXG57LXwgVGhpcyBmdW5jdGlvbiB3b3JrcyBqdXN0IGxpa2UgW2luc2VydF0oI2luc2VydCkgYnV0IGFsbG93cyB5b3UgdG8gaW5zZXJ0IG11bHRpcGxlXG52YWx1ZXMgYXQgb25jZS5cblxuICAgIGluc2VydE1hbnkgMSBbIDAsIDAgXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDAsIDAsIDIsIDMgXVxuXG4tfVxuaW5zZXJ0TWFueSA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuaW5zZXJ0TWFueSBpbmRleCB2YWx1ZXMgYXJyYXkgPVxuICAgIHNwbGljZSBpbmRleCAwIHZhbHVlcyBhcnJheVxuXG5cbnstfCBSZW1vdmUgYW4gZWxlbWVudCBmcm9tIGFuIGFycmF5LlxuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG5JZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcywgbm8gZWxlbWVudCB3aWxsIGJlIHJlbW92ZWQuXG5cbiAgICByZW1vdmUgMSBbIDEsIDIsIDMgXSA9PSBbIDEsIDMgXVxuXG4tfVxucmVtb3ZlIDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucmVtb3ZlIGluZGV4IGFycmF5ID1cbiAgICByZW1vdmVNYW55IGluZGV4IDEgYXJyYXlcblxuXG57LXwgVGhpcyBmdW5jdGlvbiB3b3JrcyBqdXN0IGxpa2UgW3JlbW92ZV0oI3JlbW92ZSksIGV4Y2VwdCBpdCBhbGxvd3MgeW91IHRvIHJlbW92ZSBtdWx0aXBsZSBlbGVtZW50cyBhdCBvbmNlLlxuXG5UaGUgZmlyc3QgYXJndW1lbnQgaXMgdGhlIGluZGV4IGZyb20gd2hlcmUgdG8gcmVtb3ZlIGVsZW1lbnRzIGZyb20sIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgdGhlIG51bWJlciBvZiBlbGVtZW50c1xudG8gcmVtb3ZlLlxuXG4gICAgcmVtb3ZlIDAgMiBbIDEsIDIsIDMgXSA9PSBbIDMgXVxuXG4tfVxucmVtb3ZlTWFueSA6IEludCAtPiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5yZW1vdmVNYW55ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zcGxpY2UwXG5cblxuey18IEFkZCBhIHZhbHVlIHRvIHRoZSBzdGFydCBvZiB0aGUgYXJyYXkuXG5cbiAgICBwdXNoRmlyc3QgMSBbXSAgICAgICAgICA9PSBbIDEgXVxuICAgIHB1c2hGaXJzdCA1IFsgMSwgNCwgOSBdID09IFsgNSwgMSwgNCwgOSBdXG5cbi19XG5wdXNoRmlyc3QgOiBhIC0+IEFycmF5IGEgLT4gQXJyYXkgYVxucHVzaEZpcnN0IHZhbHVlIGFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zcGxpY2UxIDAgMCB2YWx1ZSBhcnJheVxuXG5cbnstfCBBZGQgYSB2YWx1ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cblxuICAgIHB1c2hMYXN0IDEgW10gICAgICAgICAgPT0gWyAxIF1cbiAgICBwdXNoTGFzdCA1IFsgMSwgNCwgOSBdID09IFsgMSwgNCwgOSwgNSBdXG5cbi19XG5wdXNoTGFzdCA6IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5wdXNoTGFzdCB2YWx1ZSBhcnJheSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlMSAobGVuZ3RoIGFycmF5KSAwIHZhbHVlIGFycmF5XG5cblxuey18IEFsbG93cyB5b3UgdG8gcGVyZm9ybSBtdWx0aXBsZSBtb2RpZmljYXRpb25zIGluIGEgc2luZ2xlIG9wZXJhdGlvbi4gU3BsaWNlIHRha2VzIGFuIGluZGV4XG5hcyBpdHMgZmlyc3QgYXJndW1lbnQuIFRoaXMgbWFya3MgdGhlIHBvaW50IHdoZXJlIG1vZGlmaWNhdGlvbnMgd2lsbCBiZSBwZXJmb3JtZWQuIFRoZVxuc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcmVtb3ZlLiBUaGUgdGhpcmQgYXJndW1lbnQgaXMgdGhlIGVsZW1lbnRzIHRoYXRcbndpbGwgYmUgaW5zZXJ0ZWQuIFRoZSBhcmd1bWVudCBvcmRlciByZXByZXNlbnRzIHRoZSBvcmRlciBvZiBtb2RpZmljYXRpb25zLiBFbGVtZW50cyB3aWxsIGJlXG5yZW1vdmVkIGJlZm9yZSBuZXcgZWxlbWVudHMgYXJlIGluc2VydGVkLlxuXG5QYXNzaW5nIGEgbmVnYXRpdmUgaW5kZXggbWVhbnMgeW91IHdhbnQgdG8gcmVwbGFjZSBhbiBlbGVtZW50IGNvdW50aW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuXG5JZiB0aGUgaW5kZXggaXMgb3V0IG9mIGJvdW5kcyBubyBlbGVtZW50cyB3aWxsIGJlIHJlbW92ZWQsIGJ1dCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGF0IHRoZVxuYmVnaW5uaW5nIChuZWdhdGl2ZSBpbmRleCkgb3IgYXQgdGhlIGVuZCAocG9zaXRpdmUgaW5kZXgpLlxuXG5cbiAgICBzcGxpY2UgMiAwIFsgMCBdIFsgMSwgMiwgMyBdID09IFsgMSwgMiwgMCwgMyBdXG4gICAgc3BsaWNlIDIgMSBbIDAgXSBbIDEsIDIsIDMgXSA9PSBbIDEsIDIsIDAgXVxuICAgIHNwbGljZSAyIDEgW10gWyAxLCAyLCAzIF0gPT0gWyAxLCAyIF1cblxuLX1cbnNwbGljZSA6IEludCAtPiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhIC0+IEFycmF5IGFcbnNwbGljZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc3BsaWNlTlxuXG5cbi0tIENPTUJJTkVcblxuXG57LXwgQ29tYmluZSB0d28gYXJyYXlzIHNvIHRoYXQgdGhlIGZpcnN0IGFycmF5IGJlY29tZXMgdGhlIHByZWZpeCxcbmFuZCB0aGUgc2Vjb25kIGFycmF5IGJlY29tZXMgdGhlIHBvc3RmaXggb2YgdGhlIHJlc3VsdGluZyBhcnJheS5cblxuICAgIHByZXBlbmQgWyAxLCAyLCAzIF0gWyA0LCA1LCA2IF0gPT0gWyAxLCAyLCAzLCA0LCA1LCA2IF0gXG5cbllvdSBjYW4gYWxzbyB1c2UgdGhlIGArK2Agb3BlcmF0b3IgZm9yIHRoaXMgcHVycG9zZS5cblxuICAgIFsgMSwgMiwgMyBdICsrIFsgNCwgNSwgNiBdID09IFsgMSwgMiwgMywgNCwgNSwgNiBdXG4tfVxucHJlcGVuZCA6IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5wcmVwZW5kID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5hcHBlbmRcblxuXG57LXwgQ29tYmluZSB0d28gYXJyYXlzIHNvIHRoYXQgdGhlIGZpcnN0IGFycmF5IGJlY29tZXMgdGhlIHBvc3RmaXgsXG5hbmQgdGhlIHNlY29uZCBhcnJheSBiZWNvbWVzIHRoZSBwcmVmaXggb2YgdGhlIHJlc3VsdGluZyBhcnJheS5cblxuICAgIGFwcGVuZCBbIDEsIDIsIDMgXSBbIDQsIDUsIDYgXSA9PSBbIDQsIDUsIDYsIDEsIDIsIDMgXVxuICAgIFxuLX1cbmFwcGVuZCA6IEFycmF5IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5hcHBlbmQgZnN0IHNlY29uZCA9XG4gICAgcHJlcGVuZCBzZWNvbmQgZnN0XG5cblxuey18IENvbWJpbmUgYSBidW5jaCBvZiBhcnJheXMgaW50byBhIHNpbmdsZSBhcnJheS5cblxuICAgIGZsYXR0ZW4gWyBbIDEgXSwgWyAyIF0sIFsgNCwgNSBdIF0gPT0gWyAxLCAyLCA0LCA1IF1cblxuLX1cbmZsYXR0ZW4gOiBBcnJheSAoQXJyYXkgYSkgLT4gQXJyYXkgYVxuZmxhdHRlbiA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuZmxhdFxuXG5cbnstfCBNYXAgYSBnaXZlbiBmdW5jdGlvbiBvbnRvIGFuIGFycmF5LCB0aGVuIGZsYXR0ZW4gdGhlIHJlc3VsdGluZyBhcnJheS5cblxuICAgIG1hcEFuZEZsYXR0ZW4gZiB4cyA9PSBmbGF0dGVuIChtYXAgZiB4cylcblxuLX1cbm1hcEFuZEZsYXR0ZW4gOiAoYSAtPiBBcnJheSBiKSAtPiBBcnJheSBhIC0+IEFycmF5IGJcbm1hcEFuZEZsYXR0ZW4gPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LmZsYXRNYXBcblxuXG57LXwgUGxhY2VzIHRoZSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGFsbCBtZW1iZXJzIG9mIHRoZSBnaXZlbiBhcnJheS5cblxuICAgIGludGVyc3BlcnNlIFwib25cIiBbIFwidHVydGxlc1wiLCBcInR1cnRsZXNcIiwgXCJ0dXJ0bGVzXCJdID09IFsgXCJ0dXJ0bGVzXCIsIFwib25cIiwgXCJ0dXJ0bGVzXCIsIFwib25cIiwgXCJ0dXJ0bGVzXCJdXG5cbi19XG5pbnRlcnNwZXJzZSA6IGEgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5pbnRlcnNwZXJzZSBzZXAgeHMgPVxuICAgIHdoZW4gcG9wRmlyc3QgeHMgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgW11cblxuICAgICAgICBKdXN0IHsgZmlyc3QgPSBoZWFkLCByZXN0ID0gdGFpbCB9IC0+XG4gICAgICAgICAgICBwdXNoRmlyc3QgaGVhZCA8fCBtYXBBbmRGbGF0dGVuIChcXHZhbCAtPiBbIHNlcCwgdmFsIF0pIHRhaWxcblxuXG57LXwgQ29tYmluZSB0d28gYXJyYXlzLCBjb21iaW5pbmcgdGhlbSB3aXRoIHRoZSBnaXZlbiBmdW5jdGlvbi5cbklmIG9uZSBhcnJheSBpcyBsb25nZXIsIHRoZSBleHRyYSBlbGVtZW50cyBhcmUgZHJvcHBlZC5cblxuICAgIG1hcDIgKFxceCB5IC0+IHsgeCA9IHgsIHkgPSB5IH0pIFsgMSBdIFsgMiBdID09IFsgeyB4ID0gMSwgeSA9IDIgfSBdXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gcmVzdWx0KSAtPiBBcnJheSBhIC0+IEFycmF5IGIgLT4gQXJyYXkgcmVzdWx0XG5tYXAyID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5tYXAyXG5cblxuey18IENvbWJpbmUgdGhyZWUgYXJyYXlzLCBjb21iaW5pbmcgdGhlbSB3aXRoIHRoZSBnaXZlbiBmdW5jdGlvbi5cbklmIG9uZSBhcnJheSBpcyBsb25nZXIsIHRoZSBleHRyYSBlbGVtZW50cyBhcmUgZHJvcHBlZC5cblxuICAgIG1hcDMgKFxceCB5IHogLT4geyB4ID0geCwgeSA9IHksIHogPSB6IH0pIFsgMSBdIFsgMiBdIFsgMyBdID09IFsgeyB4ID0gMSwgeSA9IDIsIHogPSAzIH0gXVxuLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gcmVzdWx0KSAtPiBBcnJheSBhIC0+IEFycmF5IGIgLT4gQXJyYXkgYyAtPiBBcnJheSByZXN1bHRcbm1hcDMgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5Lm1hcDNcblxuXG4tLSBERUNPTlNUUlVDVFxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXksIGlmIGl0IGV4aXN0cy5cblxuICAgIGZpcnN0IFsgMSwgMiwgMyBdID09IEp1c3QgMVxuXG4tfVxuZmlyc3QgOiBBcnJheSBhIC0+IE1heWJlIGFcbmZpcnN0IGFycmF5ID1cbiAgICBnZXQgMCBhcnJheVxuXG5cbnstfCBSZXRyaWV2ZSB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSwgaWYgaXQgZXhpc3RzLlxuXG4gICAgbGFzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IDNcblxuLX1cbmxhc3QgOiBBcnJheSBhIC0+IE1heWJlIGFcbmxhc3QgYXJyYXkgPVxuICAgIGdldCAtMSBhcnJheVxuXG5cbnstfCBHZXQgYSBzdWIgc2VjdGlvbiBvZiBhbiBhcnJheTogYChzbGljZSBzdGFydCBlbmQgYXJyYXkpYC5cblxuVGhlIGBzdGFydGAgaXMgYSB6ZXJvLWJhc2VkIGluZGV4IHdoZXJlIHdlIHdpbGwgc3RhcnQgb3VyIHNsaWNlLlxuVGhlIGBlbmRgIGlzIGEgemVyby1iYXNlZCBpbmRleCB0aGF0IGluZGljYXRlcyB0aGUgZW5kIG9mIHRoZSBzbGljZS5cblRoZSBzbGljZSBleHRyYWN0cyB1cCB0bywgYnV0IG5vIGluY2x1ZGluZywgdGhlIGBlbmRgLlxuXG5Cb3RoIGBzdGFydGAgYW5kIGBlbmRgIGNhbiBiZSBuZWdhdGl2ZSwgaW5kaWNhdGluZyBhbiBvZmZzZXQgZnJvbSB0aGUgZW5kXG5vZiB0aGUgYXJyYXkuIFJlbW92aW5nIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGNhbiBiZSBleHByZXNzZWQgYXM6XG5cbiAgICBgc2xpY2UgMCAtMSBhcnJgLlxuXG5JbiB0aGUgY2FzZSBvZiBhbiBpbXBvc3NpYmxlIHNsaWNlLCB0aGUgZW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQuXG5cbi19XG5zbGljZSA6IEludCAtPiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zbGljZSA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc2xpY2VcblxuXG57LXwgUmVtb3ZlIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGFycmF5LlxuXG4gICAgZHJvcEZpcnN0IDUgWyAxIF0gPT0gW11cbiAgICBkcm9wRmlyc3QgMSBbIDEsIDIsIDMgXSA9PSBbIDIsIDMgXVxuXG4tfVxuZHJvcEZpcnN0IDogSW50IC0+IEFycmF5IGEgLT4gQXJyYXkgYVxuZHJvcEZpcnN0IG4gYXJyYXkgPVxuICAgIHNsaWNlIG4gKGxlbmd0aCBhcnJheSkgYXJyYXlcblxuXG57LXwgUmVtb3ZlIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiB0aGUgYXJyYXkuXG5cbiAgICBkcm9wTGFzdCAxIFsgMSwgMiwgMyBdID09IFsgMSwgMiBdXG5cbi19XG5kcm9wTGFzdCA6IEludCAtPiBBcnJheSBhIC0+IEFycmF5IGFcbmRyb3BMYXN0IG4gYXJyYXkgPVxuICAgIHNsaWNlIDAgKGxlbmd0aCBhcnJheSAtIG4pIGFycmF5XG5cblxuey18IFRha2UgdGhlIGZpcnN0IGBuYCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cblxuICAgIHRha2VGaXJzdCAyIFsgMSwgMiwgMyBdID09IFsgMSwgMiBdXG5cbi19XG50YWtlRmlyc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG50YWtlRmlyc3QgbiBhcnJheSA9XG4gICAgc2xpY2UgMCBuIGFycmF5XG5cblxuey18IFRha2UgdGhlIGxhc3QgYG5gIGVsZW1lbnRzIGZyb20gdGhlIGFycmF5LlxuXG4gICAgdGFrZUxhc3QgMiBbIDEsIDIsIDMgXSA9PSBbIDIsIDMgXVxuXG4tfVxudGFrZUxhc3QgOiBJbnQgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG50YWtlTGFzdCBuIGFycmF5ID1cbiAgICBsZXRcbiAgICAgICAgbGVuID1cbiAgICAgICAgICAgIGxlbmd0aCBhcnJheVxuICAgIGluXG4gICAgc2xpY2UgKGxlbiAtIG4pIGxlbiBhcnJheVxuXG5cbnstfCBTcGxpdCBhbiBhcnJheSBpbnRvIGl0cyBmaXJzdCBlbGVtZW50LCBhbmQgaXRzIHJlbWFpbmluZyBlbGVtZW50cywgaWYgcG9zc2libGUuXG5cbiAgICBwb3BGaXJzdCBbIDEsIDIsIDMgXSA9PSBKdXN0IHsgZmlyc3QgPSAxLCByZXN0ID0gWyAyLCAzIF0gfVxuXG4tfVxucG9wRmlyc3QgOiBBcnJheSBhIC0+IE1heWJlIHsgZmlyc3QgOiBhLCByZXN0IDogQXJyYXkgYSB9XG5wb3BGaXJzdCBhcnJheSA9XG4gICAgd2hlbiBmaXJzdCBhcnJheSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBKdXN0XG4gICAgICAgICAgICAgICAgeyBmaXJzdCA9IHZhbHVlXG4gICAgICAgICAgICAgICAgLCByZXN0ID0gZHJvcEZpcnN0IDEgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBTcGxpdCBhbiBhcnJheSBpbnRvIGl0cyBsYXN0IGVsZW1lbnQsIGFuZCBpdHMgcmVtYWluaW5nIGVsZW1lbnRzLCBpZiBwb3NzaWJsZS5cblxuICAgIHBvcEZpcnN0IFsgMSwgMiwgMyBdID09IEp1c3QgeyBsYXN0ID0gMywgaW5pdGlhbCA9IFsgMSwgMiBdIH1cblxuLX1cbnBvcExhc3QgOiBBcnJheSBhIC0+IE1heWJlIHsgbGFzdCA6IGEsIGluaXRpYWwgOiBBcnJheSBhIH1cbnBvcExhc3QgYXJyYXkgPVxuICAgIHdoZW4gbGFzdCBhcnJheSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBKdXN0XG4gICAgICAgICAgICAgICAgeyBsYXN0ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAsIGluaXRpYWwgPSBkcm9wTGFzdCAxIGFycmF5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgRGl2aWRlIGVsZW1lbnRzIGludG8gdHdvIGFycmF5cyBiYXNlZCBvbiB0aGUgcmVzdWx0IG9mIGEgYm9vbGVhbiB0ZXN0LlxuXG4gICAgcGFydGl0aW9uIChcXHggLT4geCA8IDMpIFsgMCwgMSwgMiwgMywgNCwgNSBdID09IHsgdHJ1ZXMgPSBbIDAsIDEsIDIgXSwgZmFsc2VzID0gWyAzLCA0LCA1IF0gfVxuXG4tfVxucGFydGl0aW9uIDogKGEgLT4gQm9vbCkgLT4gQXJyYXkgYSAtPiB7IHRydWVzIDogQXJyYXkgYSwgZmFsc2VzIDogQXJyYXkgYSB9XG5wYXJ0aXRpb24gZm4gYXJyYXkgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXHZhbCB7IHRydWVzLCBmYWxzZXMgfSAtPlxuICAgICAgICAgICAgaWYgZm4gdmFsIHRoZW5cbiAgICAgICAgICAgICAgICB7IHRydWVzID0gcHVzaExhc3QgdmFsIHRydWVzXG4gICAgICAgICAgICAgICAgLCBmYWxzZXMgPSBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7IHRydWVzID0gdHJ1ZXNcbiAgICAgICAgICAgICAgICAsIGZhbHNlcyA9IHB1c2hMYXN0IHZhbCBmYWxzZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgeyB0cnVlcyA9IFtdLCBmYWxzZXMgPSBbXSB9XG4gICAgICAgIGFycmF5XG5cblxuLS0gU09SVFxuXG5cbnstfCBTb3J0IHZhbHVlcyBmcm9tIGxvd2VzdCB0byBoaWdoZXN0XG5cbiAgICBzb3J0IFsgMywgMSwgNSBdID09IFsgMSwgMywgNSBdXG5cbi19XG5zb3J0IDogQXJyYXkgY29tcGFyYWJsZSAtPiBBcnJheSBjb21wYXJhYmxlXG5zb3J0ID1cbiAgICBHcmVuLktlcm5lbC5BcnJheS5zb3J0XG5cblxuey18IFNvcnQgdmFsdWVzIGJ5IGEgZGVyaXZlZCBwcm9wZXJ0eS5cblxuICAgIHNvcnRCeSBTdHJpbmcubGVuZ3RoIFsgXCJtb3VzZVwiLCBcImNhdFwiIF0gPT0gWyBcImNhdFwiLCBcIm1vdXNlXCIgXVxuXG4tfVxuc29ydEJ5IDogKGEgLT4gY29tcGFyYWJsZSkgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zb3J0QnkgPVxuICAgIEdyZW4uS2VybmVsLkFycmF5LnNvcnRCeVxuXG5cbnstfCBTb3J0IHZhbHVlcyB3aXRoIGEgY3VzdG9tIGNvbXBhcmlzb24gZnVuY3Rpb24uXG5cbiAgICBzb3J0V2l0aCBmbGlwcGVkQ29tcGFyaXNvbiBbMSwyLDMsNCw1XSA9PSBbNSw0LDMsMiwxXVxuXG4gICAgZmxpcHBlZENvbXBhcmlzb24gYSBiID1cbiAgICAgICAgd2hlbiBjb21wYXJlIGEgYiBpc1xuICAgICAgICAgIExUIC0+IEdUXG4gICAgICAgICAgRVEgLT4gRVFcbiAgICAgICAgICBHVCAtPiBMVFxuXG5UaGlzIGlzIGFsc28gdGhlIG1vc3QgZ2VuZXJhbCBzb3J0IGZ1bmN0aW9uLCBhbGxvd2luZyB5b3UgdG8gZGVmaW5lIGFueSBvdGhlcjogYHNvcnQgPT0gc29ydFdpdGggY29tcGFyZWBcblxuLX1cbnNvcnRXaXRoIDogKGEgLT4gYSAtPiBPcmRlcikgLT4gQXJyYXkgYSAtPiBBcnJheSBhXG5zb3J0V2l0aCA9XG4gICAgR3Jlbi5LZXJuZWwuQXJyYXkuc29ydFdpdGhcblxuIiwKICAgICAgICAibW9kdWxlIFNldCBleHBvc2luZ1xuICAgICggU2V0XG4gICAgLCBlbXB0eSwgc2luZ2xldG9uLCBzZXQsIHJlbW92ZSwgdG9nZ2xlXG4gICAgLCBpc0VtcHR5LCBtZW1iZXIsIGNvdW50LCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgYW55LCBhbGxcbiAgICAsIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmZcbiAgICAsIHRvQXJyYXksIGZyb21BcnJheVxuICAgICwgbWFwLCBmb2xkbCwgZm9sZHIsIGtlZXBJZiwgbWFwQW5kS2VlcEp1c3QsIHBhcnRpdGlvblxuICAgIClcblxuey18IEEgc2V0IG9mIHVuaXF1ZSB2YWx1ZXMuIFRoZSB2YWx1ZXMgY2FuIGJlIGFueSBjb21wYXJhYmxlIHR5cGUuIFRoaXNcbmluY2x1ZGVzIGBJbnRgLCBgRmxvYXRgLCBgVGltZWAsIGBDaGFyYCwgYFN0cmluZ2AsIGFuZCB0dXBsZXMgb3IgYXJyYXlzXG5vZiBjb21wYXJhYmxlIHR5cGVzLlxuXG5TZXQsIHJlbW92ZSwgYW5kIHF1ZXJ5IG9wZXJhdGlvbnMgYWxsIHRha2UgX08obG9nIG4pXyB0aW1lLlxuXG5cbkBkb2NzIFNldFxuXG5cbkBkb2NzIGVtcHR5LCBzaW5nbGV0b24sIHNldCwgcmVtb3ZlLCB0b2dnbGVcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBpc0VtcHR5LCBtZW1iZXIsIGNvdW50LCBmaXJzdCwgbGFzdCwgZmluZEZpcnN0LCBmaW5kTGFzdCwgYW55LCBhbGxcblxuXG4jIyBDb21iaW5lXG5cbkBkb2NzIHVuaW9uLCBpbnRlcnNlY3QsIGRpZmZcblxuXG4jIyBBcnJheXNcblxuQGRvY3MgdG9BcnJheSwgZnJvbUFycmF5XG5cblxuIyMgVHJhbnNmb3JtXG5cbkBkb2NzIG1hcCwgZm9sZGwsIGZvbGRyLCBrZWVwSWYsIG1hcEFuZEtlZXBKdXN0LCBwYXJ0aXRpb25cblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IERpY3RcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIHVuaXF1ZSB2YWx1ZXMuIFNvIGAoU2V0IEludClgIGlzIGEgc2V0IG9mIGludGVnZXJzIGFuZFxuYChTZXQgU3RyaW5nKWAgaXMgYSBzZXQgb2Ygc3RyaW5ncy5cbi19XG50eXBlIFNldCB0XG4gICAgPSBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LkRpY3QgdCB7fSlcblxuXG57LXwgQ3JlYXRlIGFuIGVtcHR5IHNldC5cbi19XG5lbXB0eSA6IFNldCBhXG5lbXB0eSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiBEaWN0LmVtcHR5XG5cblxuey18IENyZWF0ZSBhIHNldCB3aXRoIG9uZSB2YWx1ZS5cbi19XG5zaW5nbGV0b24gOiBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5zaW5nbGV0b24ga2V5ID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LnNpbmdsZXRvbiBrZXkge30pXG5cblxuey18IFNldCBhIHZhbHVlIGludG8gYSBzZXQuXG4tfVxuc2V0IDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxuc2V0IGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5zZXQga2V5IHt9IGRpY3QpXG5cblxuey18IFJlbW92ZSBhIHZhbHVlIGZyb20gYSBzZXQuIElmIHRoZSB2YWx1ZSBpcyBub3QgZm91bmQsIG5vIGNoYW5nZXMgYXJlIG1hZGUuXG4tfVxucmVtb3ZlIDogY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxucmVtb3ZlIGtleSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC5yZW1vdmUga2V5IGRpY3QpXG5cblxuey18IFRvZ2dsZSBhIHZhbHVlIGluIGEgc2V0LiBJZiB0aGUgdmFsdWUgaXNuJ3QgaW4gdGhlIHNldCwgaXQgaXMgYWRkZWQuIElmIHRoZVxudmFsdWUgaXMgaW4gdGhlIHNldCwgaXQgaXMgcmVtb3ZlZC5cbi19XG50b2dnbGUgOiBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG50b2dnbGUga2V5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICB3aGVuIERpY3QuZ2V0IGtleSBkaWN0IGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgU2V0X2dyZW5fYnVpbHRpbiA8fCBEaWN0LnJlbW92ZSBrZXkgZGljdFxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIFNldF9ncmVuX2J1aWx0aW4gPHwgRGljdC5zZXQga2V5IHt9IGRpY3RcblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgc2V0IGlzIGVtcHR5LlxuLX1cbmlzRW1wdHkgOiBTZXQgYSAtPiBCb29sXG5pc0VtcHR5IChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBEaWN0LmlzRW1wdHkgZGljdFxuXG5cbnstfCBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBpbiBhIHNldC5cbi19XG5tZW1iZXIgOiBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IEJvb2xcbm1lbWJlciBrZXkgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QubWVtYmVyIGtleSBkaWN0XG5cblxuey18IERldGVybWluZSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgc2V0LlxuLX1cbmNvdW50IDogU2V0IGEgLT4gSW50XG5jb3VudCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5jb3VudCBkaWN0XG5cblxuey18IEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgc2V0LlxuLX1cbmZpcnN0IDogU2V0IGEgLT4gTWF5YmUgYVxuZmlyc3QgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIE1heWJlLm1hcCAua2V5IChEaWN0LmZpcnN0IGRpY3QpXG5cblxuey18IEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBzZXQuXG4tfVxubGFzdCA6IFNldCBhIC0+IE1heWJlIGFcbmxhc3QgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIE1heWJlLm1hcCAua2V5IChEaWN0Lmxhc3QgZGljdClcblxuXG57LXwgRmluZCB0aGUgZmlyc3QgdmFsdWUgdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG4tfVxuZmluZEZpcnN0IDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gTWF5YmUgYVxuZmluZEZpcnN0IGZuIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBNYXliZS5tYXAgLmtleSAoRGljdC5maW5kRmlyc3QgKFxca2V5IF8gLT4gZm4ga2V5KSBkaWN0KVxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IHZhbHVlIHRoYXQgcGFzc2VzIHRoZSB0ZXN0LlxuLX1cbmZpbmRMYXN0IDogKGEgLT4gQm9vbCkgLT4gU2V0IGEgLT4gTWF5YmUgYVxuZmluZExhc3QgZm4gKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIE1heWJlLm1hcCAua2V5IChEaWN0LmZpbmRMYXN0IChcXGtleSBfIC0+IGZuIGtleSkgZGljdClcblxuXG57LXwgQ2hlY2tzIGlmIGFueSB2YWx1ZSBpbiB0aGUgc2V0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5hbnkgOiAoYSAtPiBCb29sKSAtPiBTZXQgYSAtPiBCb29sXG5hbnkgZm4gKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuYW55IChcXGtleSBfIC0+IGZuIGtleSkgZGljdFxuXG5cbnstfCBDaGVja3MgaWYgYWxsIHZhbHVlcyBpbiB0aGUgc2V0IHBhc3NlcyB0aGUgdGVzdC5cbi19XG5hbGwgOiAoYSAtPiBCb29sKSAtPiBTZXQgYSAtPiBCb29sXG5hbGwgZm4gKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuYWxsIChcXGtleSBfIC0+IGZuIGtleSkgZGljdFxuXG5cbnstfCBHZXQgdGhlIHVuaW9uIG9mIHR3byBzZXRzLiBLZWVwIGFsbCB2YWx1ZXMuXG4tfVxudW5pb24gOiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZSAtPiBTZXQgY29tcGFyYWJsZVxudW5pb24gKFNldF9ncmVuX2J1aWx0aW4gZGljdDEpIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QyKSA9XG4gICAgU2V0X2dyZW5fYnVpbHRpbiAoRGljdC51bmlvbiBkaWN0MSBkaWN0MilcblxuXG57LXwgR2V0IHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIHNldHMuIEtlZXBzIHZhbHVlcyB0aGF0IGFwcGVhciBpbiBib3RoIHNldHMuXG4tfVxuaW50ZXJzZWN0IDogU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGVcbmludGVyc2VjdCAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MSkgKFNldF9ncmVuX2J1aWx0aW4gZGljdDIpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LmludGVyc2VjdCBkaWN0MSBkaWN0MilcblxuXG57LXwgR2V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGZpcnN0IHNldCBhbmQgdGhlIHNlY29uZC4gS2VlcHMgdmFsdWVzXG50aGF0IGRvIG5vdCBhcHBlYXIgaW4gdGhlIHNlY29uZCBzZXQuXG4tfVxuZGlmZiA6IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5kaWZmIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QxKSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0MikgPVxuICAgIFNldF9ncmVuX2J1aWx0aW4gKERpY3QuZGlmZiBkaWN0MSBkaWN0MilcblxuXG57LXwgQ29udmVydCBhIHNldCBpbnRvIGFuIGFycmF5LCBzb3J0ZWQgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdC5cbi19XG50b0FycmF5IDogU2V0IGEgLT4gQXJyYXkgYVxudG9BcnJheSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5rZXlzIGRpY3RcblxuXG57LXwgQ29udmVydCBhbiBhcnJheSBpbnRvIGEgc2V0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcy5cbi19XG5mcm9tQXJyYXkgOiBBcnJheSBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5mcm9tQXJyYXkgYXJyYXkgPVxuICAgIEFycmF5LmZvbGRsIHNldCBlbXB0eSBhcnJheVxuXG5cbnstfCBGb2xkIG92ZXIgdGhlIHZhbHVlcyBpbiBhIHNldCwgaW4gb3JkZXIgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdC5cbi19XG5mb2xkbCA6IChhIC0+IGIgLT4gYikgLT4gYiAtPiBTZXQgYSAtPiBiXG5mb2xkbCBmdW5jIGluaXRpYWxTdGF0ZSAoU2V0X2dyZW5fYnVpbHRpbiBkaWN0KSA9XG4gICAgRGljdC5mb2xkbCAoXFxrZXkgXyBzdGF0ZSAtPiBmdW5jIGtleSBzdGF0ZSkgaW5pdGlhbFN0YXRlIGRpY3RcblxuXG57LXwgRm9sZCBvdmVyIHRoZSB2YWx1ZXMgaW4gYSBzZXQsIGluIG9yZGVyIGZyb20gaGlnaGVzdCB0byBsb3dlc3QuXG4tfVxuZm9sZHIgOiAoYSAtPiBiIC0+IGIpIC0+IGIgLT4gU2V0IGEgLT4gYlxuZm9sZHIgZnVuYyBpbml0aWFsU3RhdGUgKFNldF9ncmVuX2J1aWx0aW4gZGljdCkgPVxuICAgIERpY3QuZm9sZHIgKFxca2V5IF8gc3RhdGUgLT4gZnVuYyBrZXkgc3RhdGUpIGluaXRpYWxTdGF0ZSBkaWN0XG5cblxuey18IE1hcCBhIGZ1bmN0aW9uIG9udG8gYSBzZXQsIGNyZWF0aW5nIGEgbmV3IHNldCB3aXRoIG5vIGR1cGxpY2F0ZXMuXG4tfVxubWFwIDogKGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZTIpIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlMlxubWFwIGZ1bmMgY29sbCA9XG4gICAgZm9sZGwgKFxceCB4cyAtPiBzZXQgKGZ1bmMgeCkgeHMpIGVtcHR5IGNvbGxcblxuXG57LXwgT25seSBrZWVwIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgZ2l2ZW4gdGVzdC5cblxuICAgIGltcG9ydCBTZXQgZXhwb3NpbmcgKFNldClcblxuICAgIG51bWJlcnMgOiBTZXQgSW50XG4gICAgbnVtYmVycyA9XG4gICAgICAgIFNldC5mcm9tQXJyYXkgWyAtMiwgLTEsIDAsIDEsIDIgXVxuXG4gICAgcG9zaXRpdmVzIDogU2V0IEludFxuICAgIHBvc2l0aXZlcyA9XG4gICAgICAgIFNldC5rZWVwSWYgKFxceCAtPiB4ID4gMCkgbnVtYmVyc1xuXG4gICAgLS0gcG9zaXRpdmVzID09IFNldC5mcm9tQXJyYXkgWzEsMl1cblxuLX1cbmtlZXBJZiA6IChjb21wYXJhYmxlIC0+IEJvb2wpIC0+IFNldCBjb21wYXJhYmxlIC0+IFNldCBjb21wYXJhYmxlXG5rZWVwSWYgaXNHb29kIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBTZXRfZ3Jlbl9idWlsdGluIChEaWN0LmtlZXBJZiAoXFxrZXkgXyAtPiBpc0dvb2Qga2V5KSBkaWN0KVxuXG5cbnstfCBSZW1vdmUgdW53YW50ZWQgcmVzdWx0cyBvZiBhIG1hcCBvcGVyYXRpb24uXG4gICAgXG4gICAgaW1wb3J0IFNldFxuXG4gICAgc3RyaW5ncyA6IFNldCBTdHJpbmdcbiAgICBzdHJpbmdzID1cbiAgICAgICAgU2V0LmZyb21BcnJheSBbIFwiM1wiLCBcIm5vdCBhIG51bWJlclwiLCBcIi01XCIgXVxuXG4gICAgbnVtYmVycyA6IFNldCBJbnRcbiAgICBudW1iZXJzID1cbiAgICAgICAgU2V0Lm1hcEFuZEtlZXBKdXN0IFN0cmluZy50b0ludCBzdHJpbmdzXG5cbiAgICAtLSBudW1iZXJzID09IFNldC5mcm9tQXJyYXkgWyAzLCAtNSBdXG4tfVxubWFwQW5kS2VlcEp1c3QgOiAoY29tcGFyYWJsZSAtPiBNYXliZSBjb21wYXJhYmxlMikgLT4gU2V0IGNvbXBhcmFibGUgLT4gU2V0IGNvbXBhcmFibGUyXG5tYXBBbmRLZWVwSnVzdCB0b01heWJlIGNvbGwgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXG9sZCBuZXdzIC0+XG4gICAgICAgICAgICB3aGVuIHRvTWF5YmUgb2xkIGlzXG4gICAgICAgICAgICAgICAgSnVzdCBuZXcgLT5cbiAgICAgICAgICAgICAgICAgICAgc2V0IG5ldyBuZXdzXG5cbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIG5ld3NcbiAgICAgICAgKVxuICAgICAgICBlbXB0eVxuICAgICAgICBjb2xsXG5cblxuey18IENyZWF0ZSB0d28gbmV3IHNldHMuIFRoZSBmaXJzdCBjb250YWlucyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzc2VkIHRoZVxuZ2l2ZW4gdGVzdCwgYW5kIHRoZSBzZWNvbmQgY29udGFpbnMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IGRpZCBub3QuXG4tfVxucGFydGl0aW9uIDogKGNvbXBhcmFibGUgLT4gQm9vbCkgLT4gU2V0IGNvbXBhcmFibGUgLT4geyB0cnVlcyA6IFNldCBjb21wYXJhYmxlLCBmYWxzZXMgOiBTZXQgY29tcGFyYWJsZSB9XG5wYXJ0aXRpb24gaXNHb29kIChTZXRfZ3Jlbl9idWlsdGluIGRpY3QpID1cbiAgICBsZXRcbiAgICAgICAgeyB0cnVlcywgZmFsc2VzIH0gPVxuICAgICAgICAgICAgRGljdC5wYXJ0aXRpb24gKFxca2V5IF8gLT4gaXNHb29kIGtleSkgZGljdFxuICAgIGluXG4gICAgeyB0cnVlcyA9IFNldF9ncmVuX2J1aWx0aW4gdHJ1ZXNcbiAgICAsIGZhbHNlcyA9IFNldF9ncmVuX2J1aWx0aW4gZmFsc2VzXG4gICAgfVxuIiwKICAgICAgICAibW9kdWxlIEJhc2ljcyBleHBvc2luZ1xuICAgICggSW50LCAoKyksICgtKSwgKCopLCAoLyksICgvLyksICheKSwgbmVnYXRlXG4gICAgLCBGbG9hdCwgdG9GbG9hdCwgaXNOYU4sIGlzSW5maW5pdGVcbiAgICAsICg9PSksICgvPSlcbiAgICAsICg8KSwgKD4pLCAoPD0pLCAoPj0pLCBtYXgsIG1pbiwgY2xhbXAsIGNvbXBhcmUsIE9yZGVyKC4uKVxuICAgICwgQm9vbCguLiksIG5vdCwgKCYmKSwgKHx8KSwgeG9yXG4gICAgLCAoKyspXG4gICAgLCBpZGVudGl0eSwgKDx8KSwgKHw+KSwgKDw8KSwgKD4+KSwgTmV2ZXIsIG5ldmVyXG4gICAgKVxuXG57LXwgVG9ucyBvZiB1c2VmdWwgZnVuY3Rpb25zIHRoYXQgZ2V0IGltcG9ydGVkIGJ5IGRlZmF1bHQuXG5cblxuIyMgTnVtYmVyc1xuXG5AZG9jcyBJbnQsICgrKSwgKC0pLCAoKiksICgvKSwgKC8vKSwgKF4pLCBuZWdhdGVcblxuXG4jIyBGbG9hdFxuXG5AZG9jcyBGbG9hdCwgdG9GbG9hdCwgaXNOYU4sIGlzSW5maW5pdGVcblxuXG4jIyBFcXVhbGl0eVxuXG5AZG9jcyAoPT0pLCAoLz0pXG5cblxuIyMgQ29tcGFyaXNvblxuXG5UaGVzZSBmdW5jdGlvbnMgb25seSB3b3JrIG9uIGBjb21wYXJhYmxlYCB0eXBlcy4gVGhpcyBpbmNsdWRlcyBudW1iZXJzLFxuY2hhcmFjdGVycywgc3RyaW5ncyBhbmQgYXJyYXlzIG9mIGNvbXBhcmFibGUgdGhpbmdzLlxuXG5AZG9jcyBPcmRlciwgKDwpLCAoPiksICg8PSksICg+PSksIG1heCwgbWluLCBjbGFtcCwgY29tcGFyZVxuXG5cbiMjIEJvb2xlYW5zXG5cbkBkb2NzIEJvb2wsIG5vdCwgKCYmKSwgKHx8KSwgeG9yXG5cblxuIyMgQXBwZW5kIFN0cmluZ3MgYW5kIEFycmF5c1xuXG5AZG9jcyAoKyspXG5cblxuIyMgRnVuY3Rpb24gSGVscGVyc1xuXG5AZG9jcyBpZGVudGl0eSwgKDx8KSwgKHw+KSwgKDw8KSwgKD4+KSwgTmV2ZXIsIG5ldmVyXG5cbi19XG5cbmltcG9ydCBHcmVuLktlcm5lbC5CYXNpY3NcbmltcG9ydCBHcmVuLktlcm5lbC5VdGlsc1xuXG5cblxuLS0gSU5GSVggT1BFUkFUT1JTXG5cblxuaW5maXggcmlnaHQgMCAoPHwpID0gYXBMXG5pbmZpeCBsZWZ0ICAwICh8PikgPSBhcFJcbmluZml4IHJpZ2h0IDIgKHx8KSA9IG9yXG5pbmZpeCByaWdodCAzICgmJikgPSBhbmRcbmluZml4IG5vbiAgIDQgKD09KSA9IGVxXG5pbmZpeCBub24gICA0ICgvPSkgPSBuZXFcbmluZml4IG5vbiAgIDQgKDwpID0gbHRcbmluZml4IG5vbiAgIDQgKD4pID0gZ3RcbmluZml4IG5vbiAgIDQgKDw9KSA9IGxlXG5pbmZpeCBub24gICA0ICg+PSkgPSBnZVxuaW5maXggcmlnaHQgNSAoKyspID0gYXBwZW5kXG5pbmZpeCBsZWZ0ICA2ICgrKSA9IGFkZFxuaW5maXggbGVmdCAgNiAoLSkgPSBzdWJcbmluZml4IGxlZnQgIDcgKCopID0gbXVsXG5pbmZpeCBsZWZ0ICA3ICgvKSA9IGZkaXZcbmluZml4IGxlZnQgIDcgKC8vKSA9IGlkaXZcbmluZml4IHJpZ2h0IDggKF4pID0gcG93XG5pbmZpeCBsZWZ0ICA5ICg8PCkgPSBjb21wb3NlTFxuaW5maXggcmlnaHQgOSAoPj4pID0gY29tcG9zZVJcblxuXG5cbi0tIE1BVEhFTUFUSUNTXG5cblxuey18IEFuIGBJbnRgIGlzIGEgd2hvbGUgbnVtYmVyLiBWYWxpZCBzeW50YXggZm9yIGludGVnZXJzIGluY2x1ZGVzOlxuXG4gICAgMFxuXG4gICAgNDJcblxuICAgIDkwMDBcblxuICAgIDB4RkYgLS0gMjU1IGluIGhleGFkZWNpbWFsXG5cbiAgICAweDBBIC0tICAxMCBpbiBoZXhhZGVjaW1hbFxuXG4qKk5vdGU6KiogYEludGAgbWF0aCBpcyB3ZWxsLWRlZmluZWQgaW4gdGhlIHJhbmdlIGAtMl4zMWAgdG8gYDJeMzEgLSAxYC4gT3V0c2lkZVxub2YgdGhhdCByYW5nZSwgdGhlIGJlaGF2aW9yIGlzIGRldGVybWluZWQgYnkgdGhlIGNvbXBpbGF0aW9uIHRhcmdldC4gV2hlblxuZ2VuZXJhdGluZyBKYXZhU2NyaXB0LCB0aGUgc2FmZSByYW5nZSBleHBhbmRzIHRvIGAtKDJeNTMgLSAxKWAgdG8gYDJeNTMgLSAxYCBmb3Igc29tZVxub3BlcmF0aW9ucywgYnV0IGlmIHdlIGdlbmVyYXRlIFdlYkFzc2VtYmx5IHNvbWUgZGF5LCB3ZSB3b3VsZCBkbyB0aGUgdHJhZGl0aW9uYWxcbltpbnRlZ2VyIG92ZXJmbG93XVtpb10uIFRoaXMgcXVpcmsgaXMgbmVjZXNzYXJ5IHRvIGdldCBnb29kIHBlcmZvcm1hbmNlIG9uXG5xdWlya3kgY29tcGlsYXRpb24gdGFyZ2V0cy5cblxuKipIaXN0b3JpY2FsIE5vdGU6KiogVGhlIG5hbWUgYEludGAgY29tZXMgZnJvbSB0aGUgdGVybSBbaW50ZWdlcl0uIEl0IGFwcGVhcnNcbnRoYXQgdGhlIGBpbnRgIGFiYnJldmlhdGlvbiB3YXMgaW50cm9kdWNlZCBpbiBbQUxHT0wgNjhdWzY4XSwgc2hvcnRlbmluZyBpdFxuZnJvbSBgaW50ZWdlcmAgaW4gW0FMR09MIDYwXVs2MF0uIFRvZGF5LCBhbG1vc3QgYWxsIHByb2dyYW1taW5nIGxhbmd1YWdlcyB1c2VcbnRoaXMgYWJicmV2aWF0aW9uLlxuXG5baW9dOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlZ2VyX292ZXJmbG93XG5baW50ZWdlcl06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVnZXJcbls2MF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FMR09MXzYwXG5bNjhdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTEdPTF82OFxuXG4tfVxudHlwZSBJbnRcbiAgICA9IEludCAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuey18IEEgYEZsb2F0YCBpcyBhIFtmbG9hdGluZy1wb2ludCBudW1iZXJdW2ZwXS4gVmFsaWQgc3ludGF4IGZvciBmbG9hdHMgaW5jbHVkZXM6XG5cbiAgICAwXG4gICAgNDJcbiAgICAzLjE0XG4gICAgMC4xMjM0XG4gICAgNi4wMjJlMjMgICAtLSA9PSAoNi4wMjIgKiAxMF4yMylcbiAgICA2LjAyMmUrMjMgIC0tID09ICg2LjAyMiAqIDEwXjIzKVxuICAgIDEuNjAyZeKIkjE5ICAtLSA9PSAoMS42MDIgKiAxMF4tMTkpXG4gICAgMWUzICAgICAgICAtLSA9PSAoMSAqIDEwXjMpID09IDEwMDBcblxuKipIaXN0b3JpY2FsIE5vdGU6KiogVGhlIHBhcnRpY3VsYXIgZGV0YWlscyBvZiBmbG9hdHMgKGUuZy4gYE5hTmApIGFyZVxuc3BlY2lmaWVkIGJ5IFtJRUVFIDc1NF1baWVlZV0gd2hpY2ggaXMgbGl0ZXJhbGx5IGhhcmQtY29kZWQgaW50byBhbG1vc3QgYWxsXG5DUFVzIGluIHRoZSB3b3JsZC4gVGhhdCBtZWFucyBpZiB5b3UgdGhpbmsgYE5hTmAgaXMgd2VpcmQsIHlvdSBtdXN0XG5zdWNjZXNzZnVsbHkgb3ZlcnRha2UgSW50ZWwgYW5kIEFNRCB3aXRoIGEgY2hpcCB0aGF0IGlzIG5vdCBiYWNrd2FyZHNcbmNvbXBhdGlibGUgd2l0aCBhbnkgd2lkZWx5LXVzZWQgYXNzZW1ibHkgbGFuZ3VhZ2UuXG5cbltmcF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zsb2F0aW5nLXBvaW50X2FyaXRobWV0aWNcbltpZWVlXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSUVFRV83NTRcblxuLX1cbnR5cGUgRmxvYXRcbiAgICA9IEZsb2F0IC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG57LXwgQWRkIHR3byBudW1iZXJzLiBUaGUgYG51bWJlcmAgdHlwZSB2YXJpYWJsZSBtZWFucyB0aGlzIG9wZXJhdGlvbiBjYW4gYmVcbnNwZWNpYWxpemVkIHRvIGBJbnQgLT4gSW50IC0+IEludGAgb3IgdG8gYEZsb2F0IC0+IEZsb2F0IC0+IEZsb2F0YC4gU28geW91XG5jYW4gZG8gdGhpbmdzIGxpa2UgdGhpczpcblxuICAgIDMwMDIgKyA0MDA0ID09IDcwMDYgLS0gYWxsIGludHNcblxuICAgIDMuMTQgKyAzLjE0ID09IDYuMjggLS0gYWxsIGZsb2F0c1xuXG5Zb3UgX2Nhbm5vdF8gYWRkIGFuIGBJbnRgIGFuZCBhIGBGbG9hdGAgZGlyZWN0bHkgdGhvdWdoLiBVc2UgZnVuY3Rpb25zIGxpa2Vcblt0b0Zsb2F0XSgjdG9GbG9hdCkgb3IgW3JvdW5kXSgjcm91bmQpIHRvIGNvbnZlcnQgYm90aCB2YWx1ZXMgdG8gdGhlIHNhbWUgdHlwZS5cblNvIGlmIHlvdSBuZWVkZWQgdG8gYWRkIGEgYXJyYXkgbGVuZ3RoIHRvIGEgYEZsb2F0YCBmb3Igc29tZSByZWFzb24sIHlvdVxuY291bGQgc2F5IG9uZSBvZiB0aGVzZTpcblxuICAgIDMuMTQgKyB0b0Zsb2F0IChBcnJheS5sZW5ndGggWyAxLCAyLCAzIF0pID09IDYuMTRcblxuICAgIHJvdW5kIDMuMTQgKyBBcnJheS5sZW5ndGggWyAxLCAyLCAzIF0gPT0gNlxuXG4qKk5vdGU6KiogTGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmQgSmF2YVNjcmlwdCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgYEludGAgdmFsdWVzXG50byBgRmxvYXRgIHZhbHVlcyB3aGVuIHlvdSBtaXggYW5kIG1hdGNoLiBUaGlzIGNhbiBtYWtlIGl0IGRpZmZpY3VsdCB0byBiZSBzdXJlXG5leGFjdGx5IHdoYXQgdHlwZSBvZiBudW1iZXIgeW91IGFyZSBkZWFsaW5nIHdpdGguIFdoZW4geW91IHRyeSB0byBfaW5mZXJfIHRoZXNlXG5jb252ZXJzaW9ucyAoYXMgU2NhbGEgZG9lcykgaXQgY2FuIGJlIGV2ZW4gbW9yZSBjb25mdXNpbmcuIEdyZW4gaGFzIG9wdGVkIGZvciBhXG5kZXNpZ24gdGhhdCBtYWtlcyBhbGwgY29udmVyc2lvbnMgZXhwbGljaXQuXG5cbi19XG5hZGQgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxuYWRkID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuYWRkXG5cblxuey18IFN1YnRyYWN0IG51bWJlcnMgbGlrZSBgNCAtIDMgPT0gMWAuXG5cblNlZSBbYCgrKWBdKCMrKSBmb3IgZG9jcyBvbiB0aGUgYG51bWJlcmAgdHlwZSB2YXJpYWJsZS5cblxuLX1cbnN1YiA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyXG5zdWIgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5zdWJcblxuXG57LXwgTXVsdGlwbHkgbnVtYmVycyBsaWtlIGAyICogMyA9PSA2YC5cblxuU2VlIFtgKCspYF0oIyspIGZvciBkb2NzIG9uIHRoZSBgbnVtYmVyYCB0eXBlIHZhcmlhYmxlLlxuXG4tfVxubXVsIDogbnVtYmVyIC0+IG51bWJlciAtPiBudW1iZXJcbm11bCA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLm11bFxuXG5cbnstfCBGbG9hdGluZy1wb2ludCBkaXZpc2lvbjpcblxuICAgIDEwIC8gNCA9PSAyLjVcblxuICAgIDExIC8gNCA9PSAyLjc1XG5cbiAgICAxMiAvIDQgPT0gM1xuXG4gICAgMTMgLyA0ID09IDMuMjVcblxuICAgIDE0XG4gICAgICAgIC8gNFxuICAgICAgICA9PSAzLjVcbiAgICAgICAgLSAxXG4gICAgICAgIC8gNFxuICAgICAgICA9PSAtMC4yNVxuICAgICAgICAtIDVcbiAgICAgICAgLyA0XG4gICAgICAgID09IC0xLjI1XG5cbi19XG5mZGl2IDogRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRcbmZkaXYgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5mZGl2XG5cblxuey18IEludGVnZXIgZGl2aXNpb246XG5cbiAgICAxMCAvLyA0ID09IDJcblxuICAgIDExIC8vIDQgPT0gMlxuXG4gICAgMTIgLy8gNCA9PSAzXG5cbiAgICAxMyAvLyA0ID09IDNcblxuICAgIDE0XG4gICAgICAgIC8vIDRcbiAgICAgICAgPT0gM1xuICAgICAgICAtIDFcbiAgICAgICAgLy8gNFxuICAgICAgICA9PSAwXG4gICAgICAgIC0gNVxuICAgICAgICAvLyA0XG4gICAgICAgID09IC0xXG5cbk5vdGljZSB0aGF0IHRoZSByZW1haW5kZXIgaXMgZGlzY2FyZGVkLCBzbyBgMyAvLyA0YCBpcyBnaXZpbmcgb3V0cHV0XG5zaW1pbGFyIHRvIGB0cnVuY2F0ZSAoMyAvIDQpYC5cblxuSXQgbWF5IHNvbWV0aW1lcyBiZSB1c2VmdWwgdG8gcGFpciB0aGlzIHdpdGggdGhlIFtgcmVtYWluZGVyQnlgXSgjcmVtYWluZGVyQnkpXG5mdW5jdGlvbi5cblxuLX1cbmlkaXYgOiBJbnQgLT4gSW50IC0+IEludFxuaWRpdiA9XG4gICAgR3Jlbi5LZXJuZWwuQmFzaWNzLmlkaXZcblxuXG57LXwgRXhwb25lbnRpYXRpb25cblxuICAgIDMgXiAyID09IDlcblxuICAgIDMgXiAzID09IDI3XG5cbi19XG5wb3cgOiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxucG93ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MucG93XG5cblxuey18IE5lZ2F0ZSBhIG51bWJlci5cblxuICAgIG5lZ2F0ZSA0MiA9PSAtNDJcblxuICAgIG5lZ2F0ZSAtNDIgPT0gNDJcblxuICAgIG5lZ2F0ZSAwID09IDBcblxuLX1cbm5lZ2F0ZSA6IG51bWJlciAtPiBudW1iZXJcbm5lZ2F0ZSBuID1cbiAgICAtblxuXG5cbi0tIElOVCBUTyBGTE9BVCAvIEZMT0FUIFRPIElOVFxuXG5cbnstfCBDb252ZXJ0IGFuIGludGVnZXIgaW50byBhIGZsb2F0LiBVc2VmdWwgd2hlbiBtaXhpbmcgYEludGAgYW5kIGBGbG9hdGBcbnZhbHVlcyBsaWtlIHRoaXM6XG5cbiAgICBoYWxmT2YgOiBJbnQgLT4gRmxvYXRcbiAgICBoYWxmT2YgbnVtYmVyID1cbiAgICAgICAgdG9GbG9hdCBudW1iZXIgLyAyXG5cbi19XG50b0Zsb2F0IDogSW50IC0+IEZsb2F0XG50b0Zsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MudG9GbG9hdFxuXG5cblxuLS0gRVFVQUxJVFlcblxuXG57LXwgQ2hlY2sgaWYgdmFsdWVzIGFyZSAmbGRxdW87dGhlIHNhbWUmcmRxdW87LlxuXG4qKk5vdGU6KiogR3JlbiB1c2VzIHN0cnVjdHVyYWwgZXF1YWxpdHkgb24gdHVwbGVzLCByZWNvcmRzLCBhbmQgdXNlci1kZWZpbmVkXG51bmlvbiB0eXBlcy4gVGhpcyBtZWFucyB0aGUgdmFsdWVzIGAoMywgNClgIGFuZCBgKDMsIDQpYCBhcmUgZGVmaW5pdGVseSBlcXVhbC5cblRoaXMgaXMgbm90IHRydWUgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YVNjcmlwdCB0aGF0IHVzZSByZWZlcmVuY2UgZXF1YWxpdHkgb25cbm9iamVjdHMuXG5cbioqTm90ZToqKiBEbyBub3QgdXNlIGAoPT0pYCB3aXRoIGZ1bmN0aW9ucywgSlNPTiB2YWx1ZXMgZnJvbSBgZ3Jlbi9qc29uYCwgb3JcbnJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBgZ3Jlbi9yZWdleGAuIEl0IGRvZXMgbm90IHdvcmsuIEl0IHdpbGwgY3Jhc2ggaWZcbnBvc3NpYmxlLiBXaXRoIEpTT04gdmFsdWVzLCBkZWNvZGUgdG8gR3JlbiB2YWx1ZXMgYmVmb3JlIGRvaW5nIGFueSBlcXVhbGl0eVxuY2hlY2tzIVxuXG5XaHkgaXMgaXQgbGlrZSB0aGlzPyBFcXVhbGl0eSBpbiB0aGUgR3JlbiBzZW5zZSBjYW4gYmUgZGlmZmljdWx0IG9yIGltcG9zc2libGVcbnRvIGNvbXB1dGUuIFByb3ZpbmcgdGhhdCBmdW5jdGlvbnMgYXJlIHRoZSBzYW1lIGlzIFt1bmRlY2lkYWJsZV0sIGFuZCBKU09OXG52YWx1ZXMgY2FuIGNvbWUgaW4gdGhyb3VnaCBwb3J0cyBhbmQgaGF2ZSBmdW5jdGlvbnMsIGN5Y2xlcywgYW5kIG5ldyBKUyBkYXRhXG50eXBlcyB0aGF0IGludGVyYWN0IHdlaXJkbHkgd2l0aCBvdXIgZXF1YWxpdHkgaW1wbGVtZW50YXRpb24uIEluIGEgZnV0dXJlXG5yZWxlYXNlLCB0aGUgY29tcGlsZXIgd2lsbCBkZXRlY3Qgd2hlbiBgKD09KWAgaXMgdXNlZCB3aXRoIHByb2JsZW1hdGljIHR5cGVzXG5hbmQgcHJvdmlkZSBhIGhlbHBmdWwgZXJyb3IgbWVzc2FnZSBhdCBjb21waWxlIHRpbWUuIFRoaXMgd2lsbCByZXF1aXJlIHNvbWVcbnByZXR0eSBzZXJpb3VzIGluZnJhc3RydWN0dXJlIHdvcmssIHNvIHRoZSBzdG9wZ2FwIGlzIHRvIGNyYXNoIGFzIHF1aWNrbHkgYXNcbnBvc3NpYmxlLlxuXG5bdW5kZWNpZGFibGVdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbmRlY2lkYWJsZV9wcm9ibGVtXG5cbi19XG5lcSA6IGEgLT4gYSAtPiBCb29sXG5lcSA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuZXF1YWxcblxuXG57LXwgQ2hlY2sgaWYgdmFsdWVzIGFyZSBub3QgJmxkcXVvO3RoZSBzYW1lJnJkcXVvOy5cblxuU28gYChhIC89IGIpYCBpcyB0aGUgc2FtZSBhcyBgKG5vdCAoYSA9PSBiKSlgLlxuXG4tfVxubmVxIDogYSAtPiBhIC0+IEJvb2xcbm5lcSA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMubm90RXF1YWxcblxuXG5cbi0tIENPTVBBUklTT05TXG5cblxuey18IC19XG5sdCA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5sdCA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMubHRcblxuXG57LXwgLX1cbmd0IDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IEJvb2xcbmd0ID1cbiAgICBHcmVuLktlcm5lbC5VdGlscy5ndFxuXG5cbnstfCAtfVxubGUgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gQm9vbFxubGUgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmxlXG5cblxuey18IC19XG5nZSA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBCb29sXG5nZSA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuZ2VcblxuXG57LXwgRmluZCB0aGUgc21hbGxlciBvZiB0d28gY29tcGFyYWJsZXMuXG5cbiAgICBtaW4gNDIgMTIzNDU2NzggPT0gNDJcblxuICAgIG1pbiBcImFiY1wiIFwieHl6XCIgPT0gXCJhYmNcIlxuXG4tfVxubWluIDogY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGVcbm1pbiB4IHkgPVxuICAgIGlmIGx0IHggeSB0aGVuXG4gICAgICAgIHhcblxuICAgIGVsc2VcbiAgICAgICAgeVxuXG5cbnstfCBGaW5kIHRoZSBsYXJnZXIgb2YgdHdvIGNvbXBhcmFibGVzLlxuXG4gICAgbWF4IDQyIDEyMzQ1Njc4ID09IDEyMzQ1Njc4XG5cbiAgICBtYXggXCJhYmNcIiBcInh5elwiID09IFwieHl6XCJcblxuLX1cbm1heCA6IGNvbXBhcmFibGUgLT4gY29tcGFyYWJsZSAtPiBjb21wYXJhYmxlXG5tYXggeCB5ID1cbiAgICBpZiBndCB4IHkgdGhlblxuICAgICAgICB4XG5cbiAgICBlbHNlXG4gICAgICAgIHlcblxuXG57LXwgQ2xhbXBzIGEgbnVtYmVyIHdpdGhpbiBhIGdpdmVuIHJhbmdlLiBXaXRoIHRoZSBleHByZXNzaW9uXG5gY2xhbXAgMTAwIDIwMCB4YCB0aGUgcmVzdWx0cyBhcmUgYXMgZm9sbG93czpcblxuICAgIDEwMCAgICAgaWYgeCA8IDEwMFxuICAgICB4ICAgICAgaWYgMTAwIDw9IHggPCAyMDBcbiAgICAyMDAgICAgIGlmIDIwMCA8PSB4XG5cbi19XG5jbGFtcCA6IG51bWJlciAtPiBudW1iZXIgLT4gbnVtYmVyIC0+IG51bWJlclxuY2xhbXAgbG93IGhpZ2ggbnVtYmVyID1cbiAgICBpZiBsdCBudW1iZXIgbG93IHRoZW5cbiAgICAgICAgbG93XG5cbiAgICBlbHNlIGlmIGd0IG51bWJlciBoaWdoIHRoZW5cbiAgICAgICAgaGlnaFxuXG4gICAgZWxzZVxuICAgICAgICBudW1iZXJcblxuXG57LXwgQ29tcGFyZSBhbnkgdHdvIGNvbXBhcmFibGUgdmFsdWVzLiBDb21wYXJhYmxlIHZhbHVlcyBpbmNsdWRlIGBTdHJpbmdgLFxuYENoYXJgLCBgSW50YCwgYEZsb2F0YCwgb3IgYW4gYXJyYXkgb3IgdHVwbGUgY29udGFpbmluZyBjb21wYXJhYmxlIHZhbHVlcy4gVGhlc2VcbmFyZSBhbHNvIHRoZSBvbmx5IHZhbHVlcyB0aGF0IHdvcmsgYXMgYERpY3RgIGtleXMgb3IgYFNldGAgbWVtYmVycy5cblxuICAgIGNvbXBhcmUgMyA0ID09IExUXG5cbiAgICBjb21wYXJlIDQgNCA9PSBFUVxuXG4gICAgY29tcGFyZSA1IDQgPT0gR1RcblxuLX1cbmNvbXBhcmUgOiBjb21wYXJhYmxlIC0+IGNvbXBhcmFibGUgLT4gT3JkZXJcbmNvbXBhcmUgPVxuICAgIEdyZW4uS2VybmVsLlV0aWxzLmNvbXBhcmVcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgcmVsYXRpdmUgb3JkZXJpbmcgb2YgdHdvIHRoaW5ncy5cblRoZSByZWxhdGlvbnMgYXJlIGxlc3MgdGhhbiwgZXF1YWwgdG8sIGFuZCBncmVhdGVyIHRoYW4uXG4tfVxudHlwZSBPcmRlclxuICAgID0gTFRcbiAgICB8IEVRXG4gICAgfCBHVFxuXG5cblxuLS0gQk9PTEVBTlNcblxuXG57LXwgQSDigJxCb29sZWFu4oCdIHZhbHVlLiBJdCBjYW4gZWl0aGVyIGJlIGBUcnVlYCBvciBgRmFsc2VgLlxuXG4qKk5vdGU6KiogUHJvZ3JhbW1lcnMgY29taW5nIGZyb20gSmF2YVNjcmlwdCwgSmF2YSwgZXRjLiB0ZW5kIHRvIHJlYWNoIGZvclxuYm9vbGVhbiB2YWx1ZXMgd2F5IHRvbyBvZnRlbiBpbiBHcmVuLiBVc2luZyBhIFt1bmlvbiB0eXBlXVt1dF0gaXMgb2Z0ZW4gY2xlYXJlclxuYW5kIG1vcmUgcmVsaWFibGUuIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGlzIGZyb20gSmVyZW15IFtoZXJlXVtqZl0gb3JcbmZyb20gUmljaGFyZCBbaGVyZV1bcnRdLlxuXG5bdXRdOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvdHlwZXMvdW5pb25fdHlwZXMuaHRtbFxuW2pmXTogaHR0cHM6Ly95b3V0dS5iZS82VERLSEd0QXhlZz90PTFtMjVzXG5bcnRdOiBodHRwczovL3lvdXR1LmJlL0ljZ21TUkpIdV84P3Q9MW0xNHNcblxuLX1cbnR5cGUgQm9vbFxuICAgID0gVHJ1ZVxuICAgIHwgRmFsc2VcblxuXG57LXwgTmVnYXRlIGEgYm9vbGVhbiB2YWx1ZS5cblxuICAgIG5vdCBUcnVlID09IEZhbHNlXG5cbiAgICBub3QgRmFsc2UgPT0gVHJ1ZVxuXG4tfVxubm90IDogQm9vbCAtPiBCb29sXG5ub3QgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5ub3RcblxuXG57LXwgVGhlIGxvZ2ljYWwgQU5EIG9wZXJhdG9yLiBgVHJ1ZWAgaWYgYm90aCBpbnB1dHMgYXJlIGBUcnVlYC5cblxuICAgIFRydWUgJiYgVHJ1ZSA9PSBUcnVlXG5cbiAgICBUcnVlICYmIEZhbHNlID09IEZhbHNlXG5cbiAgICBGYWxzZSAmJiBUcnVlID09IEZhbHNlXG5cbiAgICBGYWxzZSAmJiBGYWxzZSA9PSBGYWxzZVxuXG4qKk5vdGU6KiogV2hlbiB1c2VkIGluIHRoZSBpbmZpeCBwb3NpdGlvbiwgbGlrZSBgKGxlZnQgJiYgcmlnaHQpYCwgdGhlIG9wZXJhdG9yXG5zaG9ydC1jaXJjdWl0cy4gVGhpcyBtZWFucyBpZiBgbGVmdGAgaXMgYEZhbHNlYCB3ZSBkbyBub3QgYm90aGVyIGV2YWx1YXRpbmcgYHJpZ2h0YFxuYW5kIGp1c3QgcmV0dXJuIGBGYWxzZWAgb3ZlcmFsbC5cblxuLX1cbmFuZCA6IEJvb2wgLT4gQm9vbCAtPiBCb29sXG5hbmQgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5hbmRcblxuXG57LXwgVGhlIGxvZ2ljYWwgT1Igb3BlcmF0b3IuIGBUcnVlYCBpZiBvbmUgb3IgYm90aCBpbnB1dHMgYXJlIGBUcnVlYC5cblxuICAgIFRydWUgfHwgVHJ1ZSA9PSBUcnVlXG5cbiAgICBUcnVlIHx8IEZhbHNlID09IFRydWVcblxuICAgIEZhbHNlIHx8IFRydWUgPT0gVHJ1ZVxuXG4gICAgRmFsc2UgfHwgRmFsc2UgPT0gRmFsc2VcblxuKipOb3RlOioqIFdoZW4gdXNlZCBpbiB0aGUgaW5maXggcG9zaXRpb24sIGxpa2UgYChsZWZ0IHx8IHJpZ2h0KWAsIHRoZSBvcGVyYXRvclxuc2hvcnQtY2lyY3VpdHMuIFRoaXMgbWVhbnMgaWYgYGxlZnRgIGlzIGBUcnVlYCB3ZSBkbyBub3QgYm90aGVyIGV2YWx1YXRpbmcgYHJpZ2h0YFxuYW5kIGp1c3QgcmV0dXJuIGBUcnVlYCBvdmVyYWxsLlxuXG4tfVxub3IgOiBCb29sIC0+IEJvb2wgLT4gQm9vbFxub3IgPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5vclxuXG5cbnstfCBUaGUgZXhjbHVzaXZlLW9yIG9wZXJhdG9yLiBgVHJ1ZWAgaWYgZXhhY3RseSBvbmUgaW5wdXQgaXMgYFRydWVgLlxuXG4gICAgeG9yIFRydWUgVHJ1ZSA9PSBGYWxzZVxuXG4gICAgeG9yIFRydWUgRmFsc2UgPT0gVHJ1ZVxuXG4gICAgeG9yIEZhbHNlIFRydWUgPT0gVHJ1ZVxuXG4gICAgeG9yIEZhbHNlIEZhbHNlID09IEZhbHNlXG5cbi19XG54b3IgOiBCb29sIC0+IEJvb2wgLT4gQm9vbFxueG9yID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MueG9yXG5cblxuXG4tLSBBUFBFTkRcblxuXG57LXwgUHV0IHR3byBhcHBlbmRhYmxlIHRoaW5ncyB0b2dldGhlci4gVGhpcyBpbmNsdWRlcyBzdHJpbmdzIGFuZCBhcnJheXMuXG5cbiAgICBcImhlbGxvXCIgKysgXCJ3b3JsZFwiID09IFwiaGVsbG93b3JsZFwiXG5cbiAgICBbIDEsIDEsIDIgXSArKyBbIDMsIDUsIDggXSA9PSBbIDEsIDEsIDIsIDMsIDUsIDggXVxuXG4tfVxuYXBwZW5kIDogYXBwZW5kYWJsZSAtPiBhcHBlbmRhYmxlIC0+IGFwcGVuZGFibGVcbmFwcGVuZCA9XG4gICAgR3Jlbi5LZXJuZWwuVXRpbHMuYXBwZW5kXG5cblxuXG4tLSBDUkFaWSBGTE9BVFNcblxuXG57LXwgRGV0ZXJtaW5lIHdoZXRoZXIgYSBmbG9hdCBpcyBhbiB1bmRlZmluZWQgb3IgdW5yZXByZXNlbnRhYmxlIG51bWJlci5cbk5hTiBzdGFuZHMgZm9yIF9ub3QgYSBudW1iZXJfIGFuZCBpdCBpcyBbYSBzdGFuZGFyZGl6ZWQgcGFydCBvZiBmbG9hdGluZyBwb2ludFxubnVtYmVyc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmFOKS5cblxuICAgIGlzTmFOICgwIC8gMCkgPT0gVHJ1ZVxuXG4gICAgaXNOYU4gKHNxcnQgLTEpID09IFRydWVcblxuICAgIGlzTmFOICgxIC8gMCkgPT0gRmFsc2UgLS0gaW5maW5pdHkgaXMgYSBudW1iZXJcblxuICAgIGlzTmFOIDEgPT0gRmFsc2VcblxuLX1cbmlzTmFOIDogRmxvYXQgLT4gQm9vbFxuaXNOYU4gPVxuICAgIEdyZW4uS2VybmVsLkJhc2ljcy5pc05hTlxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBhIGZsb2F0IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGluZmluaXR5LlxuXG4gICAgaXNJbmZpbml0ZSAoMCAvIDApID09IEZhbHNlXG5cbiAgICBpc0luZmluaXRlIChzcXJ0IC0xKSA9PSBGYWxzZVxuXG4gICAgaXNJbmZpbml0ZSAoMSAvIDApID09IFRydWVcblxuICAgIGlzSW5maW5pdGUgMSA9PSBGYWxzZVxuXG5Ob3RpY2UgdGhhdCBOYU4gaXMgbm90IGluZmluaXRlISBGb3IgZmxvYXQgYG5gIHRvIGJlIGZpbml0ZSBpbXBsaWVzIHRoYXRcbmBub3QgKGlzSW5maW5pdGUgbiB8fCBpc05hTiBuKWAgZXZhbHVhdGVzIHRvIGBUcnVlYC5cblxuLX1cbmlzSW5maW5pdGUgOiBGbG9hdCAtPiBCb29sXG5pc0luZmluaXRlID1cbiAgICBHcmVuLktlcm5lbC5CYXNpY3MuaXNJbmZpbml0ZVxuXG5cblxuLS0gRlVOQ1RJT04gSEVMUEVSU1xuXG5cbnstfCBGdW5jdGlvbiBjb21wb3NpdGlvbiwgcGFzc2luZyByZXN1bHRzIGFsb25nIGluIHRoZSBzdWdnZXN0ZWQgZGlyZWN0aW9uLiBGb3JcbmV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgY29kZSBjaGVja3MgaWYgdGhlIHJlc3VsdCBvZiByb3VuZGluZyBhIGZsb2F0IGlzIG9kZDpcblxuICAgIG5vdCA8PCBpc0V2ZW4gPDwgcm91bmRcblxuWW91IGNhbiB0aGluayBvZiB0aGlzIG9wZXJhdG9yIGFzIGVxdWl2YWxlbnQgdG8gdGhlIGZvbGxvd2luZzpcblxuICAgIChnIDw8IGYpID09IChcXHggLT4gZyAoZiB4KSlcblxuU28gb3VyIGV4YW1wbGUgZXhwYW5kcyBvdXQgdG8gc29tZXRoaW5nIGxpa2UgdGhpczpcblxuICAgIFxcbiAtPiBub3QgKGlzRXZlbiAocm91bmQgbikpXG5cbi19XG5jb21wb3NlTCA6IChiIC0+IGMpIC0+IChhIC0+IGIpIC0+IChhIC0+IGMpXG5jb21wb3NlTCBnIGYgPVxuICAgIFxceCAtPiBnIChmIHgpXG5cblxuey18IEZ1bmN0aW9uIGNvbXBvc2l0aW9uLCBwYXNzaW5nIHJlc3VsdHMgYWxvbmcgaW4gdGhlIHN1Z2dlc3RlZCBkaXJlY3Rpb24uIEZvclxuZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBjb2RlIGNoZWNrcyBpZiB0aGUgcmVzdWx0IG9mIHJvdW5kaW5nIGEgZmxvYXQgaXMgb2RkOlxuXG4gICAgcm91bmQgPj4gaXNFdmVuID4+IG5vdFxuXG4tfVxuY29tcG9zZVIgOiAoYSAtPiBiKSAtPiAoYiAtPiBjKSAtPiAoYSAtPiBjKVxuY29tcG9zZVIgZiBnID1cbiAgICBcXHggLT4gZyAoZiB4KVxuXG5cbnstfCBTYXlpbmcgYHggfD4gZmAgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBgZiB4YC5cblxuSXQgaXMgY2FsbGVkIHRoZSDigJxwaXBl4oCdIG9wZXJhdG9yIGJlY2F1c2UgaXQgbGV0cyB5b3Ugd3JpdGUg4oCccGlwZWxpbmVk4oCdIGNvZGUuXG5Gb3IgZXhhbXBsZSwgc2F5IHdlIGhhdmUgYSBgc2FuaXRpemVgIGZ1bmN0aW9uIGZvciB0dXJuaW5nIHVzZXIgaW5wdXQgaW50b1xuaW50ZWdlcnM6XG5cbiAgICAtLSBCRUZPUkVcbiAgICBzYW5pdGl6ZSA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBzYW5pdGl6ZSBpbnB1dCA9XG4gICAgICAgIFN0cmluZy50b0ludCAoU3RyaW5nLnRyaW0gaW5wdXQpXG5cbldlIGNhbiByZXdyaXRlIGl0IGxpa2UgdGhpczpcblxuICAgIC0tIEFGVEVSXG4gICAgc2FuaXRpemUgOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgc2FuaXRpemUgaW5wdXQgPVxuICAgICAgICBpbnB1dFxuICAgICAgICAgICAgfD4gU3RyaW5nLnRyaW1cbiAgICAgICAgICAgIHw+IFN0cmluZy50b0ludFxuXG5Ub3RhbGx5IGVxdWl2YWxlbnQhIEkgcmVjb21tZW5kIHRyeWluZyB0byByZXdyaXRlIGNvZGUgdGhhdCB1c2VzIGB4IHw+IGZgXG5pbnRvIGNvZGUgbGlrZSBgZiB4YCB1bnRpbCB0aGVyZSBhcmUgbm8gcGlwZXMgbGVmdC4gVGhhdCBjYW4gaGVscCB5b3UgYnVpbGRcbnlvdXIgaW50dWl0aW9uLlxuXG4qKk5vdGU6KiogVGhpcyBjYW4gYmUgb3ZlcnVzZWQhIEkgdGhpbmsgZm9sa3MgZmluZCBpdCBxdWl0ZSBuZWF0LCBidXQgd2hlbiB5b3VcbmhhdmUgdGhyZWUgb3IgZm91ciBzdGVwcywgdGhlIGNvZGUgb2Z0ZW4gZ2V0cyBjbGVhcmVyIGlmIHlvdSBicmVhayBvdXQgYVxudG9wLWxldmVsIGhlbHBlciBmdW5jdGlvbi4gTm93IHRoZSB0cmFuc2Zvcm1hdGlvbiBoYXMgYSBuYW1lLiBUaGUgYXJndW1lbnRzIGFyZVxubmFtZWQuIEl0IGhhcyBhIHR5cGUgYW5ub3RhdGlvbi4gSXQgaXMgbXVjaCBtb3JlIHNlbGYtZG9jdW1lbnRpbmcgdGhhdCB3YXkhXG5UZXN0aW5nIHRoZSBsb2dpYyBnZXRzIGVhc2llciB0b28uIE5pY2Ugc2lkZSBiZW5lZml0IVxuXG4tfVxuYXBSIDogYSAtPiAoYSAtPiBiKSAtPiBiXG5hcFIgeCBmID1cbiAgICBmIHhcblxuXG57LXwgU2F5aW5nIGBmIDx8IHhgIGlzIGV4YWN0bHkgdGhlIHNhbWUgYXMgYGYgeGAuXG5cbkl0IGNhbiBoZWxwIHlvdSBhdm9pZCBwYXJlbnRoZXNlcywgd2hpY2ggY2FuIGJlIG5pY2Ugc29tZXRpbWVzLiBNYXliZSB5b3Ugd2FudFxudG8gYXBwbHkgYSBmdW5jdGlvbiB0byBhIGBjYXNlYCBleHByZXNzaW9uPyBUaGF0IHNvcnQgb2YgdGhpbmcuXG5cbi19XG5hcEwgOiAoYSAtPiBiKSAtPiBhIC0+IGJcbmFwTCBmIHggPVxuICAgIGYgeFxuXG5cbnstfCBHaXZlbiBhIHZhbHVlLCByZXR1cm5zIGV4YWN0bHkgdGhlIHNhbWUgdmFsdWUuIFRoaXMgaXMgY2FsbGVkXG5bdGhlIGlkZW50aXR5IGZ1bmN0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JZGVudGl0eV9mdW5jdGlvbikuXG4tfVxuaWRlbnRpdHkgOiBhIC0+IGFcbmlkZW50aXR5IHggPVxuICAgIHhcblxuXG57LXwgQSB2YWx1ZSB0aGF0IGNhbiBuZXZlciBoYXBwZW4hIEZvciBjb250ZXh0OlxuXG4gIC0gVGhlIGJvb2xlYW4gdHlwZSBgQm9vbGAgaGFzIHR3byB2YWx1ZXM6IGBUcnVlYCBhbmQgYEZhbHNlYFxuICAtIFRoZSB1bml0IHR5cGUgYCgpYCBoYXMgb25lIHZhbHVlOiBgKClgXG4gIC0gVGhlIG5ldmVyIHR5cGUgYE5ldmVyYCBoYXMgbm8gdmFsdWVzIVxuXG5Zb3UgbWF5IHNlZSBpdCBpbiB0aGUgd2lsZCBpbiBgSHRtbCBOZXZlcmAgd2hpY2ggbWVhbnMgdGhpcyBIVE1MIHdpbGwgbmV2ZXJcbnByb2R1Y2UgYW55IG1lc3NhZ2VzLiBZb3Ugd291bGQgbmVlZCB0byB3cml0ZSBhbiBldmVudCBoYW5kbGVyIGxpa2VcbmBvbkNsaWNrID8/PyA6IEF0dHJpYnV0ZSBOZXZlcmAgYnV0IGhvdyBjYW4gd2UgZmlsbCBpbiB0aGUgcXVlc3Rpb24gbWFya3M/IVxuU28gdGhlcmUgY2Fubm90IGJlIGFueSBldmVudCBoYW5kbGVycyBvbiB0aGF0IEhUTUwuXG5cbllvdSBtYXkgYWxzbyBzZWUgdGhpcyB1c2VkIHdpdGggdGFza3MgdGhhdCBuZXZlciBmYWlsLCBsaWtlIGBUYXNrIE5ldmVyICgpYC5cblxuVGhlIGBOZXZlcmAgdHlwZSBpcyB1c2VmdWwgZm9yIHJlc3RyaWN0aW5nIF9hcmd1bWVudHNfIHRvIGEgZnVuY3Rpb24uIE1heWJlIG15XG5BUEkgY2FuIG9ubHkgYWNjZXB0IEhUTUwgd2l0aG91dCBldmVudCBoYW5kbGVycywgc28gSSByZXF1aXJlIGBIdG1sIE5ldmVyYCBhbmRcbnVzZXJzIGNhbiBnaXZlIGBIdG1sIG1zZ2AgYW5kIGV2ZXJ5dGhpbmcgd2lsbCBnbyBmaW5lLiBHZW5lcmFsbHkgc3BlYWtpbmcsIHlvdVxuZG8gbm90IHdhbnQgYE5ldmVyYCBpbiB5b3VyIHJldHVybiB0eXBlcyB0aG91Z2guXG5cbi19XG50eXBlIE5ldmVyXG4gICAgPSBKdXN0T25lTW9yZSBOZXZlclxuXG5cbnstfCBBIGZ1bmN0aW9uIHRoYXQgY2FuIG5ldmVyIGJlIGNhbGxlZC4gU2VlbXMgZXh0cmVtZWx5IHBvaW50bGVzcywgYnV0IGl0XG5fY2FuXyBjb21lIGluIGhhbmR5LiBJbWFnaW5lIHlvdSBoYXZlIHNvbWUgSFRNTCB0aGF0IHNob3VsZCBuZXZlciBwcm9kdWNlIGFueVxubWVzc2FnZXMuIEFuZCBzYXkgeW91IHdhbnQgdG8gdXNlIGl0IGluIHNvbWUgb3RoZXIgSFRNTCB0aGF0IF9kb2VzXyBwcm9kdWNlXG5tZXNzYWdlcy4gWW91IGNvdWxkIHNheTpcblxuICAgIGltcG9ydCBIdG1sIGV4cG9zaW5nICguLilcblxuICAgIGVtYmVkSHRtbCA6IEh0bWwgTmV2ZXIgLT4gSHRtbCBtc2dcbiAgICBlbWJlZEh0bWwgc3RhdGljU3R1ZmYgPVxuICAgICAgICBkaXYgW11cbiAgICAgICAgICAgIFsgdGV4dCBcImhlbGxvXCJcbiAgICAgICAgICAgICwgSHRtbC5tYXAgbmV2ZXIgc3RhdGljU3R1ZmZcbiAgICAgICAgICAgIF1cblxuU28gdGhlIGBuZXZlcmAgZnVuY3Rpb24gaXMgYmFzaWNhbGx5IHRlbGxpbmcgdGhlIHR5cGUgc3lzdGVtLCBtYWtlIHN1cmUgbm8gb25lXG5ldmVyIGNhbGxzIG1lIVxuXG4tfVxubmV2ZXIgOiBOZXZlciAtPiBhXG5uZXZlciAoSnVzdE9uZU1vcmUgbnZyKSA9XG4gICAgbmV2ZXIgbnZyXG4iLAogICAgICAgICJtb2R1bGUgU3RyaW5nIGV4cG9zaW5nXG4gICAgKCBTdHJpbmcsIGlzRW1wdHksIGNvdW50LCByZXZlcnNlLCByZXBlYXQsIHJlcGxhY2VcbiAgICAsIHByZXBlbmQsIGFwcGVuZCwgc3BsaXQsIGpvaW4sIHdvcmRzLCBsaW5lc1xuICAgICwgc2xpY2UsIHRha2VGaXJzdCwgdGFrZUxhc3QsIGRyb3BGaXJzdCwgZHJvcExhc3RcbiAgICAsIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuICAgICwgdG9JbnQsIGZyb21JbnRcbiAgICAsIHRvRmxvYXQsIGZyb21GbG9hdFxuICAgICwgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG4gICAgLCB0b0FycmF5LCBmcm9tQXJyYXlcbiAgICAsIHRvVXBwZXIsIHRvTG93ZXIsIHBhZCwgcGFkTGVmdCwgcGFkUmlnaHQsIHRyaW0sIHRyaW1MZWZ0LCB0cmltUmlnaHRcbiAgICAsIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG4gICAgLCB1bml0TGVuZ3RoLCBnZXRVbml0LCBmb2xkbFVuaXRzLCBmb2xkclVuaXRzXG4gICAgKVxuXG57LXwgQSBidWlsdC1pbiByZXByZXNlbnRhdGlvbiBmb3IgZWZmaWNpZW50IHN0cmluZyBtYW5pcHVsYXRpb24uIFdoZW4gaXQgY29tZXMgdG8gc3RyaW5ncyxcbnRoZXJlIGFyZSB0aHJlZSBjb25jZXB0cyB3b3J0aCBrbm93aW5nIGFib3V0OlxuXG4qIENvZGUgdW5pdHM6IHJlcHJlc2VudHMgdGhlIHNtYWxsZXN0IHByaW1pdGl2ZSB2YWx1ZSBvZiBhIHN0cmluZy4gSW4gR3JlbixcbmNvZGUgdW5pdHMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgMTYtYml0IHZhbHVlLiBUaGlzIGlzIGVub3VnaCB0byBzdG9yZSB0aGUgbW9zdCBjb21tb25cbmNoYXJhY3RlcnMgaW4gd2VzdGVybiBsYW5ndWFnZXMgKExhdGluLCBHcmVlaywgQ3lyaWxpYyksIGJ1dCBub3QgYWxsIHVuaWNvZGUgY2hhcmFjdGVycy5cbiogQ29kZSBwb2ludHM6IHJlcHJlc2VudHMgYSB1bmljb2RlIGNoYXJhY3Rlci4gQ29kZSBwb2ludHMgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IG9uZVxudW5pdCwgb3IgYSBwYWlyIG9mIHVuaXRzLlxuKiBHcmFwaGVtZXM6IHJlcHJlc2VudHMgYSBzaW5nbGUgdmlzdWFsIGdseXBoLCBsaWtlIGNlcnRhaW4gZW1vamlzIG9yIGNoYXJhY3RlcnMgd2l0aFxuYWNjZW50cy5cblxuVW5sZXNzIG90aGVyd2lzZSBub3RlZCwgYWxsIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBkZWFsIHdpdGggY29kZSBwb2ludHMuXG5cblxuQGRvY3MgU3RyaW5nLCBpc0VtcHR5LCBjb3VudCwgcmV2ZXJzZSwgcmVwZWF0LCByZXBsYWNlXG5cblxuIyMgQnVpbGRpbmcgYW5kIFNwbGl0dGluZ1xuXG5AZG9jcyBwcmVwZW5kLCBhcHBlbmQsIHNwbGl0LCBqb2luLCB3b3JkcywgbGluZXNcblxuXG4jIyBHZXQgU3Vic3RyaW5nc1xuXG5AZG9jcyBzbGljZSwgdGFrZUZpcnN0LCB0YWtlTGFzdCwgZHJvcEZpcnN0LCBkcm9wTGFzdFxuXG5cbiMjIENoZWNrIGZvciBTdWJzdHJpbmdzXG5cbkBkb2NzIGNvbnRhaW5zLCBzdGFydHNXaXRoLCBlbmRzV2l0aCwgZmlyc3RJbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5kaWNlc1xuXG5cbiMjIEludCBDb252ZXJzaW9uc1xuXG5AZG9jcyB0b0ludCwgZnJvbUludFxuXG5cbiMjIEZsb2F0IENvbnZlcnNpb25zXG5cbkBkb2NzIHRvRmxvYXQsIGZyb21GbG9hdFxuXG5cbiMjIENoYXIgQ29udmVyc2lvbnNcblxuQGRvY3MgZnJvbUNoYXIsIHB1c2hGaXJzdCwgcHVzaExhc3QsIHBvcEZpcnN0LCBwb3BMYXN0XG5cblxuIyMgQXJyYXkgQ29udmVyc2lvbnNcblxuQGRvY3MgdG9BcnJheSwgZnJvbUFycmF5XG5cblxuIyMgRm9ybWF0dGluZ1xuXG5Db3NtZXRpYyBvcGVyYXRpb25zIHN1Y2ggYXMgcGFkZGluZyB3aXRoIGV4dHJhIGNoYXJhY3RlcnMgb3IgdHJpbW1pbmcgd2hpdGVzcGFjZS5cblxuQGRvY3MgdG9VcHBlciwgdG9Mb3dlciwgcGFkLCBwYWRMZWZ0LCBwYWRSaWdodCwgdHJpbSwgdHJpbUxlZnQsIHRyaW1SaWdodFxuXG4jIyBIaWdoZXItT3JkZXIgRnVuY3Rpb25zXG5cbkBkb2NzIG1hcCwga2VlcElmLCBmb2xkbCwgZm9sZHIsIGFueSwgYWxsXG5cbiMjIENoYXIgVW5pdHNcblxuRnVuY3Rpb25zIHRoYXQgb3BlcmF0ZXMgb24gdW5pdHMgaW5zdGVhZCBvZiBjb2RlIHBvaW50cy5cblxuQGRvY3MgdW5pdExlbmd0aCwgZ2V0VW5pdCwgZm9sZGxVbml0cywgZm9sZHJVbml0c1xuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5pbXBvcnQgTWF0aCBleHBvc2luZyAoZmxvb3IsIGNlaWxpbmcpXG5pbXBvcnQgQml0d2lzZVxuaW1wb3J0IENoYXIgZXhwb3NpbmcgKENoYXIpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuU3RyaW5nXG5pbXBvcnQgTWF5YmUgZXhwb3NpbmcgKE1heWJlKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KVxuXG5cblxuLS0gU1RSSU5HU1xuXG5cbnstfCBBIGBTdHJpbmdgIGlzIGEgY2h1bmsgb2YgdGV4dC4gYFN0cmluZ2AgbGl0ZXJhbHMgYXJlIGVuY2xvc2VkIGluIGBcImRvdWJsZSBxdW90ZXNcImAuXG5cbiAgICBcIkhlbGxvIVwiXG5cbiAgICBcIkhvdyBhcmUgeW91P1wiXG5cbiAgICBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBzdHJpbmdzIHdpdGggZXNjYXBlIGNoYXJhY3RlcnNcbiAgICBcInRoaXNcXG5cXHRcXFwidGhhdFxcXCJcIlxuXG4gICAgXCLwn5mI8J+ZifCfmYpcIiAtLSBcIvCfmYjwn5mJ8J+ZilwiXG5cbiAgICAtLSBtdWx0aWxpbmUgc3RyaW5nc1xuICAgIFwiXCJcIlRyaXBsZSBkb3VibGUgcXVvdGVzIGxldCB5b3VcbiAgICBjcmVhdGUgXCJtdWx0aWxpbmUgc3RyaW5nc1wiIHdoaWNoXG4gICAgY2FuIGhhdmUgdW5lc2NhcGVkIHF1b3RlcyBhbmQgbmV3bGluZXMuXG4gICAgXCJcIlwiXG5cbkEgYFN0cmluZ2AgY2FuIHJlcHJlc2VudCBhbnkgc2VxdWVuY2Ugb2YgW3VuaWNvZGUgY2hhcmFjdGVyc11bdV0uIFlvdSBjYW4gdXNlXG50aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0byByZXByZXNlbnQgY2hhcmFjdGVyc1xuYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBkaXJlY3RseS5cblVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZSBtYW55IHdoaXRlc3BhY2VcbmNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuKipOb3RlOioqIEphdmFTY3JpcHQgbGV0cyB5b3UgdXNlIGRvdWJsZSBxdW90ZXMgYW5kIHNpbmdsZSBxdW90ZXMgaW50ZXJjaGFuZ2FibHkuXG5UaGlzIGlzIG5vdCB0cnVlIGluIEdyZW4uIFlvdSBtdXN0IHVzZSBkb3VibGUgcXVvdGVzIGZvciBhIGBTdHJpbmdgLCBhbmQgeW91IG11c3RcbnVzZSBzaW5nbGUgcXVvdGVzIGZvciBhIFtgQ2hhcmBdKENoYXIjQ2hhcikuXG5cbi19XG50eXBlIFN0cmluZ1xuICAgID0gU3RyaW5nIC0tIE5PVEU6IFRoZSBjb21waWxlciBwcm92aWRlcyB0aGUgcmVhbCBpbXBsZW1lbnRhdGlvbi5cblxuXG57LXwgRGV0ZXJtaW5lIGlmIGEgc3RyaW5nIGlzIGVtcHR5LlxuXG4gICAgaXNFbXB0eSBcIlwiID09IFRydWVcblxuICAgIGlzRW1wdHkgXCJ0aGUgd29ybGRcIiA9PSBGYWxzZVxuXG4tfVxuaXNFbXB0eSA6IFN0cmluZyAtPiBCb29sXG5pc0VtcHR5IHN0cmluZyA9XG4gICAgc3RyaW5nID09IFwiXCJcblxuXG57LXwgQ291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLlxuXG4gICAgY291bnQgXCJpbm51bWVyYWJsZVwiID09IDExXG5cbiAgICBjb3VudCBcIlwiID09IDBcblxuLX1cbmNvdW50IDogU3RyaW5nIC0+IEludFxuY291bnQgc3RyaW5nID1cbiAgICBmb2xkbCAoXFxfIG51bSAtPiBudW0gKyAxKSAwIHN0cmluZ1xuXG5cbnstfCBSZXZlcnNlIGEgc3RyaW5nLlxuXG4gICAgcmV2ZXJzZSBcInN0cmVzc2VkXCIgPT0gXCJkZXNzZXJ0c1wiXG5cbi19XG5yZXZlcnNlIDogU3RyaW5nIC0+IFN0cmluZ1xucmV2ZXJzZSBzdHIgPVxuICAgIHRvQXJyYXkgc3RyXG4gICAgICAgIHw+IEFycmF5LnJldmVyc2VcbiAgICAgICAgfD4gZnJvbUFycmF5XG5cblxuey18IFJlcGVhdCBhIHN0cmluZyBfbl8gdGltZXMuXG5cbiAgICByZXBlYXQgMyBcImhhXCIgPT0gXCJoYWhhaGFcIlxuXG4tfVxucmVwZWF0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnJlcGVhdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnJlcGVhdFxuXG5cbnstfCBSZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiBzb21lIHN1YnN0cmluZy5cblxuICAgIHJlcGxhY2UgXCIuXCIgXCItXCIgXCJKc29uLkRlY29kZS5zdWNjZWVkXCIgPT0gXCJKc29uLURlY29kZS1zdWNjZWVkXCJcblxuICAgIHJlcGxhY2UgXCIsXCIgXCIvXCIgXCJhLGIsYyxkLGVcIiA9PSBcImEvYi9jL2QvZVwiXG5cbioqTm90ZToqKiBJZiB5b3UgbmVlZCBtb3JlIGFkdmFuY2VkIHJlcGxhY2VtZW50cywgY2hlY2sgb3V0IHRoZVxuW2BncmVuLWxhbmcvcGFyc2VyYF1bcGFyc2VyXSBwYWNrYWdlIG9yIFtgU3RyaW5nLlJlZ2V4YF1bcmVnZXhdIG1vZHVsZS5cblxuW3BhcnNlcl06IC9wYWNrYWdlL2dyZW4tbGFuZy9wYXJzZXJcbltyZWdleF06IFN0cmluZy5SZWdleFxuXG4tfVxucmVwbGFjZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZ1xucmVwbGFjZSBiZWZvcmUgYWZ0ZXIgc3RyaW5nID1cbiAgICBqb2luIGFmdGVyIChzcGxpdCBiZWZvcmUgc3RyaW5nKVxuXG5cblxuLS0gQlVJTERJTkcgQU5EIFNQTElUVElOR1xuXG5cbnstfCBDb21iaW5lIHR3byBzdHJpbmdzLiBZb3UgY2FuIGFsc28gdXNlIFt0aGUgYCgrKylgIG9wZXJhdG9yXShCYXNpY3MjKyspXG50byBkbyB0aGlzLlxuXG4gICAgcHJlcGVuZCBcImJ1dHRlclwiIFwiZmx5XCIgPT0gXCJidXR0ZXJmbHlcIlxuXG4tfVxucHJlcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wcmVwZW5kID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuYXBwZW5kXG5cblxuey18IEFwcGVuZCBvbmUgc3RyaW5nIG9udG8gYW5vdGhlci4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgW3ByZXBlbmRdKHByZXBlbmQpLFxuYnV0IHdpdGggdGhlIGFyZ3VtZW50cyByZXZlcnNlZC5cbiAgICBcbiAgICBhcHBlbmQgXCJidXR0ZXJcIiBcImZseVwiID09IFwiZmx5YnV0dGVyXCJcblxuLX1cbmFwcGVuZCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hcHBlbmQgbGhzIHJocyA9XG4gICAgcHJlcGVuZCByaHMgbGhzXG5cblxuey18IFNwbGl0IGEgc3RyaW5nIHVzaW5nIGEgZ2l2ZW4gc2VwYXJhdG9yLiBJZiB0aGUgc2VwZXJhdG9yIGRvZXNuJ3QgYXBwZWFyLFxueW91IHdpbGwgZ2V0IGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9yaWdpbmFsIHN0cmluZy5cblxuICAgIHNwbGl0IFwiLFwiIFwiXCIgPT0gW1wiXCJdXG4gICAgXG4gICAgc3BsaXQgXCIsXCIgXCJjYXRcIiA9PSBbXCJjYXRcIl1cbiAgICBcbiAgICBzcGxpdCBcIixcIiBcImNhdCxkb2csY293XCIgPT0gWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF1cbiAgICBcbiAgICBzcGxpdCBcIi9cIiBcImhvbWUvZXZhbi9EZXNrdG9wL1wiID09IFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiwgXCJcIiBdXG5cbi19XG5zcGxpdCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5zcGxpdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnNwbGl0XG5cblxuey18IFB1dCBtYW55IHN0cmluZ3MgdG9nZXRoZXIgd2l0aCBhIGdpdmVuIHNlcGFyYXRvci5cblxuICAgIGpvaW4gXCJhXCIgWyBcIkhcIiwgXCJ3XCIsIFwiaWlcIiwgXCJuXCIgXSA9PSBcIkhhd2FpaWFuXCJcblxuICAgIGpvaW4gXCIgXCIgWyBcImNhdFwiLCBcImRvZ1wiLCBcImNvd1wiIF0gPT0gXCJjYXQgZG9nIGNvd1wiXG5cbiAgICBqb2luIFwiL1wiIFsgXCJob21lXCIsIFwiZXZhblwiLCBcIkRlc2t0b3BcIiBdID09IFwiaG9tZS9ldmFuL0Rlc2t0b3BcIlxuXG4tfVxuam9pbiA6IFN0cmluZyAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5qb2luID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuam9pblxuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIHdvcmRzLCBzcGxpdHRpbmcgb24gY2h1bmtzIG9mIHdoaXRlc3BhY2UuXG5cbiAgICB3b3JkcyBcIkhvdyBhcmUgXFx0IHlvdT8gXFxuIEdvb2Q/XCIgPT0gWyBcIkhvd1wiLCBcImFyZVwiLCBcInlvdT9cIiwgXCJHb29kP1wiIF1cblxuLX1cbndvcmRzIDogU3RyaW5nIC0+IEFycmF5IFN0cmluZ1xud29yZHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy53b3Jkc1xuXG5cbnstfCBCcmVhayBhIHN0cmluZyBpbnRvIGxpbmVzLCBzcGxpdHRpbmcgb24gbmV3bGluZXMuXG5cbiAgICBsaW5lcyBcIkhvdyBhcmUgeW91P1xcbkdvb2Q/XCIgPT0gWyBcIkhvdyBhcmUgeW91P1wiLCBcIkdvb2Q/XCIgXVxuXG4tfVxubGluZXMgOiBTdHJpbmcgLT4gQXJyYXkgU3RyaW5nXG5saW5lcyA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmxpbmVzXG5cblxuXG4tLSBTVUJTVFJJTkdTXG5cblxuey18IFRha2UgYSBzdWJzdHJpbmcgZ2l2ZW4gYSBzdGFydCBhbmQgZW5kIGluZGV4LiBOZWdhdGl2ZSBpbmRleGVzXG5hcmUgdGFrZW4gc3RhcnRpbmcgZnJvbSB0aGUgX2VuZF8gb2YgdGhlIGFycmF5LlxuXG4gICAgc2xpY2UgNyA5IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJvblwiXG5cbiAgICBzbGljZSAwIDYgXCJzbmFrZXMgb24gYSBwbGFuZSFcIiA9PSBcInNuYWtlc1wiXG5cbiAgICBzbGljZSAwIC03IFwic25ha2VzIG9uIGEgcGxhbmUhXCIgPT0gXCJzbmFrZXMgb24gYVwiXG5cbiAgICBzbGljZSAtNiAtMSBcInNuYWtlcyBvbiBhIHBsYW5lIVwiID09IFwicGxhbmVcIlxuXG4tfVxuc2xpY2UgOiBJbnQgLT4gSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnNsaWNlID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuc2xpY2VcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGZpcnN0IF9uXyBjaGFyYWN0ZXJzLiBJZiBfbl8gaXMgbGFyZ2VyIHRoYW5cbnRoZSBsZW5ndGggb2YgdGhlIHN0cmluZywgdGhlbiB0aGUgc3RyaW5nIGlzIHJldHVybmVkIGFzIGlzLlxuXG4gICAgdGFrZUZpcnN0IDIgXCJNdWxkZXJcIiA9PSBcIk11XCJcblxuICAgIHRha2VGaXJzdCA4IFwiTXVsZGVyXCIgPT0gXCJNdWxkZXJcIlxuXG4tfVxudGFrZUZpcnN0IDogSW50IC0+IFN0cmluZyAtPiBTdHJpbmdcbnRha2VGaXJzdCBuIHN0cmluZyA9XG4gICAgaWYgbiA8IDEgdGhlblxuICAgICAgICBcIlwiXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgbiBzdHJpbmdcblxuXG57LXwgTWFrZSBhIG5ldyBzdHJpbmcgdXNpbmcgdGhlIGxhc3QgX25fIGNoYXJhY3RlcnMuIElmIF9uXyBpcyBsYXJnZXIgdGhhblxudGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLCB0aGVuIHRoZSBzdHJpbmcgaXMgcmV0dXJuZWQgYXMgaXMuXG5cbiAgICB0YWtlTGFzdCAyIFwiU2N1bGx5XCIgPT0gXCJseVwiXG5cbiAgICB0YWtlTGFzdCA4IFwiU2N1bGx5XCIgPT0gXCJTY3VsbHlcIlxuXG4tfVxudGFrZUxhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xudGFrZUxhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgXCJcIlxuXG4gICAgZWxzZVxuICAgICAgICBzbGljZSAtbiAodW5pdExlbmd0aCBzdHJpbmcpIHN0cmluZ1xuXG5cbnstfCBEcm9wIHRoZSBmaXJzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BGaXJzdCAyIFwiVGhlIExvbmUgR3VubWVuXCIgPT0gXCJlIExvbmUgR3VubWVuXCJcblxuLX1cbmRyb3BGaXJzdCA6IEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5kcm9wRmlyc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIG4gKHVuaXRMZW5ndGggc3RyaW5nKSBzdHJpbmdcblxuXG57LXwgRHJvcCB0aGUgbGFzdCBfbl8gY2hhcmFjdGVycy5cblxuICAgIGRyb3BMYXN0IDIgXCJDaWdhcmV0dGUgU21va2luZyBNYW5cIiA9PSBcIkNpZ2FyZXR0ZSBTbW9raW5nIE1cIlxuXG4tfVxuZHJvcExhc3QgOiBJbnQgLT4gU3RyaW5nIC0+IFN0cmluZ1xuZHJvcExhc3QgbiBzdHJpbmcgPVxuICAgIGlmIG4gPCAxIHRoZW5cbiAgICAgICAgc3RyaW5nXG5cbiAgICBlbHNlXG4gICAgICAgIHNsaWNlIDAgLW4gc3RyaW5nXG5cblxuXG4tLSBERVRFQ1QgU1VCU1RSSU5HU1xuXG5cbnstfCBTZWUgaWYgdGhlIHNlY29uZCBzdHJpbmcgY29udGFpbnMgdGhlIGZpcnN0IG9uZS5cblxuICAgIGNvbnRhaW5zIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBjb250YWlucyBcImhhdFwiIFwidGhlb3J5XCIgPT0gRmFsc2VcblxuICAgIGNvbnRhaW5zIFwiVEhFXCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuY29udGFpbnMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmNvbnRhaW5zID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuY29udGFpbnNcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBvbmUuXG5cbiAgICBzdGFydHNXaXRoIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBUcnVlXG5cbiAgICBzdGFydHNXaXRoIFwib3J5XCIgXCJ0aGVvcnlcIiA9PSBGYWxzZVxuXG4tfVxuc3RhcnRzV2l0aCA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQm9vbFxuc3RhcnRzV2l0aCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnN0YXJ0c1dpdGhcblxuXG57LXwgU2VlIGlmIHRoZSBzZWNvbmQgc3RyaW5nIGVuZHMgd2l0aCB0aGUgZmlyc3Qgb25lLlxuXG4gICAgZW5kc1dpdGggXCJ0aGVcIiBcInRoZW9yeVwiID09IEZhbHNlXG5cbiAgICBlbmRzV2l0aCBcIm9yeVwiIFwidGhlb3J5XCIgPT0gVHJ1ZVxuXG4tfVxuZW5kc1dpdGggOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEJvb2xcbmVuZHNXaXRoID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZW5kc1dpdGhcblxuXG57LXwgRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyB3aXRoaW4gdGhlIHNlY29uZCBvbmUsIGlmIGl0J3MgdGhlcmUuXG5cbiAgICBpbmRleE9mIFwidGhlXCIgXCJ0aGVvcnlcIiA9PSBKdXN0IDBcblxuICAgIGluZGV4T2YgXCJvcnlcIiBcInRoZW9yeVwiID09IEp1c3QgM1xuICAgIFxuICAgIGluZGV4T2YgXCJhXCIgXCJ0aGVvcnlcIiA9PSBOb3RoaW5nXG5cbi19XG5maXJzdEluZGV4T2YgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIEludFxuZmlyc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhPZlxuXG5cbnstfCBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZSBmaXJzdCBzdHJpbmcgd2l0aGluIHRoZSBzZWNvbmQgb25lLCBpZiBpdCdzIHRoZXJlLlxuXG4gICAgbGFzdEluZGV4T2YgXCJhYnJhXCIgXCJhYnJhY2FkYWJyYVwiID09IEp1c3QgN1xuXG4gICAgbGFzdEluZGV4T2YgXCJiYXJiXCIgXCJhYnJhY2FkYWJyYVwiID09IE5vdGhpbmdcblxuLX1cbmxhc3RJbmRleE9mIDogU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBJbnRcbmxhc3RJbmRleE9mID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcubGFzdEluZGV4T2ZcblxuXG57LXwgR2V0IGFsbCBvZiB0aGUgaW5kaWNlcyBmb3IgYSBzdWJzdHJpbmcgaW4gYW5vdGhlciBzdHJpbmcuXG5cbiAgICBpbmRleGVzIFwiaVwiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDEsIDQsIDcsIDEwIF1cblxuICAgIGluZGV4ZXMgXCJzc1wiIFwiTWlzc2lzc2lwcGlcIiA9PSBbIDIsIDUgXVxuXG4gICAgaW5kZXhlcyBcIm5lZWRsZVwiIFwiaGF5c3RhY2tcIiA9PSBbXVxuXG4tfVxuaW5kaWNlcyA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXJyYXkgSW50XG5pbmRpY2VzID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuaW5kZXhlc1xuXG5cblxuLS0gRk9STUFUVElOR1xuXG5cbnstfCBDb252ZXJ0IGEgc3RyaW5nIHRvIGFsbCB1cHBlciBjYXNlLiBVc2VmdWwgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbnNcbmFuZCBWSVJUVUFMIFlFTExJTkcuXG5cbiAgICB0b1VwcGVyIFwic2tpbm5lclwiID09IFwiU0tJTk5FUlwiXG5cbi19XG50b1VwcGVyIDogU3RyaW5nIC0+IFN0cmluZ1xudG9VcHBlciA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnRvVXBwZXJcblxuXG57LXwgQ29udmVydCBhIHN0cmluZyB0byBhbGwgbG93ZXIgY2FzZS4gVXNlZnVsIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25zLlxuXG4gICAgdG9Mb3dlciBcIlgtRklMRVNcIiA9PSBcIngtZmlsZXNcIlxuXG4tfVxudG9Mb3dlciA6IFN0cmluZyAtPiBTdHJpbmdcbnRvTG93ZXIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0xvd2VyXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiBib3RoIHNpZGVzIHVudGlsIGl0IGhhcyBhIGdpdmVuIGxlbmd0aC5cblxuICAgIHBhZCA1ICcgJyBcIjFcIiA9PSBcIiAgMSAgXCJcblxuICAgIHBhZCA1ICcgJyBcIjExXCIgPT0gXCIgIDExIFwiXG5cbiAgICBwYWQgNSAnICcgXCIxMjFcIiA9PSBcIiAxMjEgXCJcblxuLX1cbnBhZCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZCBuIGNoYXIgc3RyaW5nID1cbiAgICBsZXRcbiAgICAgICAgaGFsZiA9XG4gICAgICAgICAgICBCYXNpY3MudG9GbG9hdCAobiAtIGNvdW50IHN0cmluZykgLyAyXG4gICAgaW5cbiAgICByZXBlYXQgKGNlaWxpbmcgaGFsZikgKGZyb21DaGFyIGNoYXIpICsrIHN0cmluZyArKyByZXBlYXQgKGZsb29yIGhhbGYpIChmcm9tQ2hhciBjaGFyKVxuXG5cbnstfCBQYWQgYSBzdHJpbmcgb24gdGhlIGxlZnQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjFcIiA9PSBcIi4uLi4xXCJcblxuICAgIHBhZExlZnQgNSAnLicgXCIxMVwiID09IFwiLi4uMTFcIlxuXG4gICAgcGFkTGVmdCA1ICcuJyBcIjEyMVwiID09IFwiLi4xMjFcIlxuXG4tfVxucGFkTGVmdCA6IEludCAtPiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnBhZExlZnQgbiBjaGFyIHN0cmluZyA9XG4gICAgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcikgKysgc3RyaW5nXG5cblxuey18IFBhZCBhIHN0cmluZyBvbiB0aGUgcmlnaHQgdW50aWwgaXQgaGFzIGEgZ2l2ZW4gbGVuZ3RoLlxuXG4gICAgcGFkUmlnaHQgNSAnLicgXCIxXCIgPT0gXCIxLi4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjExXCIgPT0gXCIxMS4uLlwiXG5cbiAgICBwYWRSaWdodCA1ICcuJyBcIjEyMVwiID09IFwiMTIxLi5cIlxuXG4tfVxucGFkUmlnaHQgOiBJbnQgLT4gQ2hhciAtPiBTdHJpbmcgLT4gU3RyaW5nXG5wYWRSaWdodCBuIGNoYXIgc3RyaW5nID1cbiAgICBzdHJpbmcgKysgcmVwZWF0IChuIC0gY291bnQgc3RyaW5nKSAoZnJvbUNoYXIgY2hhcilcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIGJvdGggc2lkZXMgb2YgYSBzdHJpbmcuXG5cbiAgICB0cmltIFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHNcIlxuXG4tfVxudHJpbSA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW0gPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50cmltXG5cblxuey18IEdldCByaWQgb2Ygd2hpdGVzcGFjZSBvbiB0aGUgbGVmdCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1MZWZ0IFwiICBoYXRzICBcXG5cIiA9PSBcImhhdHMgIFxcblwiXG5cbi19XG50cmltTGVmdCA6IFN0cmluZyAtPiBTdHJpbmdcbnRyaW1MZWZ0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbUxlZnRcblxuXG57LXwgR2V0IHJpZCBvZiB3aGl0ZXNwYWNlIG9uIHRoZSByaWdodCBvZiBhIHN0cmluZy5cblxuICAgIHRyaW1SaWdodCBcIiAgaGF0cyAgXFxuXCIgPT0gXCIgIGhhdHNcIlxuXG4tfVxudHJpbVJpZ2h0IDogU3RyaW5nIC0+IFN0cmluZ1xudHJpbVJpZ2h0ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcudHJpbVJpZ2h0XG5cblxuXG4tLSBJTlQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhbiBpbnQsIGZhaWxpbmcgb24gaW1wcm9wZXJseSBmb3JtYXR0ZWQgc3RyaW5ncy5cblxuICAgIFN0cmluZy50b0ludCBcIjEyM1wiID09IEp1c3QgMTIzXG5cbiAgICBTdHJpbmcudG9JbnQgXCItNDJcIiA9PSBKdXN0IC00MlxuXG4gICAgU3RyaW5nLnRvSW50IFwiMy4xXCIgPT0gTm90aGluZ1xuXG4gICAgU3RyaW5nLnRvSW50IFwiMzFhXCIgPT0gTm90aGluZ1xuXG5JZiB5b3UgYXJlIGV4dHJhY3RpbmcgYSBudW1iZXIgZnJvbSBzb21lIHJhdyB1c2VyIGlucHV0LCB5b3Ugd2lsbCB0eXBpY2FsbHlcbndhbnQgdG8gdXNlIFtgTWF5YmUud2l0aERlZmF1bHRgXShNYXliZSN3aXRoRGVmYXVsdCkgdG8gaGFuZGxlIGJhZCBkYXRhOlxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvSW50IFwiNDJcIikgPT0gNDJcblxuICAgIE1heWJlLndpdGhEZWZhdWx0IDAgKFN0cmluZy50b0ludCBcImFiXCIpID09IDBcblxuLX1cbnRvSW50IDogU3RyaW5nIC0+IE1heWJlIEludFxudG9JbnQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0ludFxuXG5cbnstfCBDb252ZXJ0IGFuIGBJbnRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUludCAxMjMgPT0gXCIxMjNcIlxuXG4gICAgU3RyaW5nLmZyb21JbnQgLTQyID09IFwiLTQyXCJcblxuQ2hlY2sgb3V0IFtgRGVidWcudG9TdHJpbmdgXShEZWJ1ZyN0b1N0cmluZykgdG8gY29udmVydCBfYW55XyB2YWx1ZSB0byBhIHN0cmluZ1xuZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cblxuLX1cbmZyb21JbnQgOiBJbnQgLT4gU3RyaW5nXG5mcm9tSW50ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbU51bWJlclxuXG5cblxuLS0gRkxPQVQgQ09OVkVSU0lPTlNcblxuXG57LXwgVHJ5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZsb2F0LCBmYWlsaW5nIG9uIGltcHJvcGVybHkgZm9ybWF0dGVkIHN0cmluZ3MuXG5cbiAgICBTdHJpbmcudG9GbG9hdCBcIjEyM1wiID09IEp1c3QgMTIzLjBcblxuICAgIFN0cmluZy50b0Zsb2F0IFwiLTQyXCIgPT0gSnVzdCAtNDIuMFxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzLjFcIiA9PSBKdXN0IDMuMVxuXG4gICAgU3RyaW5nLnRvRmxvYXQgXCIzMWFcIiA9PSBOb3RoaW5nXG5cbklmIHlvdSBhcmUgZXh0cmFjdGluZyBhIG51bWJlciBmcm9tIHNvbWUgcmF3IHVzZXIgaW5wdXQsIHlvdSB3aWxsIHR5cGljYWxseVxud2FudCB0byB1c2UgW2BNYXliZS53aXRoRGVmYXVsdGBdKE1heWJlI3dpdGhEZWZhdWx0KSB0byBoYW5kbGUgYmFkIGRhdGE6XG5cbiAgICBNYXliZS53aXRoRGVmYXVsdCAwIChTdHJpbmcudG9GbG9hdCBcIjQyLjVcIikgPT0gNDIuNVxuXG4gICAgTWF5YmUud2l0aERlZmF1bHQgMCAoU3RyaW5nLnRvRmxvYXQgXCJjYXRzXCIpID09IDBcblxuLX1cbnRvRmxvYXQgOiBTdHJpbmcgLT4gTWF5YmUgRmxvYXRcbnRvRmxvYXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy50b0Zsb2F0XG5cblxuey18IENvbnZlcnQgYSBgRmxvYXRgIHRvIGEgYFN0cmluZ2AuXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDEyMyA9PSBcIjEyM1wiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IC00MiA9PSBcIi00MlwiXG5cbiAgICBTdHJpbmcuZnJvbUZsb2F0IDMuOSA9PSBcIjMuOVwiXG5cbkNoZWNrIG91dCBbYERlYnVnLnRvU3RyaW5nYF0oRGVidWcjdG9TdHJpbmcpIHRvIGNvbnZlcnQgX2FueV8gdmFsdWUgdG8gYSBzdHJpbmdcbmZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG5cbi19XG5mcm9tRmxvYXQgOiBGbG9hdCAtPiBTdHJpbmdcbmZyb21GbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmZyb21OdW1iZXJcblxuXG5cbi0tIEFSUkFZIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgYSBzdHJpbmcgdG8gYW4gYXJyYXkgb2YgY2hhcmFjdGVycy5cblxuICAgIHRvQXJyYXkgXCJhYmNcIiA9PSBbICdhJywgJ2InLCAnYycgXVxuXG4gICAgdG9BcnJheSBcIvCfmYjwn5mJ8J+ZilwiID09IFsgJ/CfmYgnLCAn8J+ZiScsICfwn5mKJyBdXG5cbi19XG50b0FycmF5IDogU3RyaW5nIC0+IEFycmF5IENoYXJcbnRvQXJyYXkgc3RyaW5nID1cbiAgICBmb2xkbCBBcnJheS5wdXNoTGFzdCBbXSBzdHJpbmdcblxuXG57LXwgQ29udmVydCBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBTdHJpbmcuXG4gICAgXG4gICAgZnJvbUFycmF5IFsgJ2EnLCAnYicsICdjJyBdID09IFwiYWJjXCJcblxuICAgIGZyb21BcnJheSBbICfwn5mIJywgJ/CfmYknLCAn8J+ZiicgXSA9PSBcIvCfmYjwn5mJ8J+ZilwiXG5cbi19XG5mcm9tQXJyYXkgOiBBcnJheSBDaGFyIC0+IFN0cmluZ1xuZnJvbUFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5TdHJpbmcuZnJvbUFycmF5XG5cblxuXG4tLSBDSEFSIENPTlZFUlNJT05TXG5cblxuey18IENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgZ2l2ZW4gY2hhcmFjdGVyLlxuXG4gICAgZnJvbUNoYXIgJ2EnID09IFwiYVwiXG5cbi19XG5mcm9tQ2hhciA6IENoYXIgLT4gU3RyaW5nXG5mcm9tQ2hhciBjaGFyID1cbiAgICBwdXNoRmlyc3QgY2hhciBcIlwiXG5cblxuey18IEFkZCBhIGNoYXJhY3RlciB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc3RyaW5nLlxuXG4gICAgcHVzaEZpcnN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiVGhlIHRydXRoIGlzIG91dCB0aGVyZVwiXG5cbi19XG5wdXNoRmlyc3QgOiBDaGFyIC0+IFN0cmluZyAtPiBTdHJpbmdcbnB1c2hGaXJzdCA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLnB1c2hGaXJzdFxuXG5cbnstfCBBZGQgYSBjaGFyYWN0ZXIgdG8gdGhlIGVuZCBvZiBhIHN0cmluZy5cblxuICAgIHB1c2hMYXN0ICdUJyBcImhlIHRydXRoIGlzIG91dCB0aGVyZVwiID09IFwiaGUgdHJ1dGggaXMgb3V0IHRoZXJlVFwiXG5cbi19XG5wdXNoTGFzdCA6IENoYXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xucHVzaExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wdXNoTGFzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgZmlyc3QgY2hhcmFjdGVyIGFuZCBpdHMgcmVtYWluaW5nIGNoYXJhY3RlcnMuIFRoaXMgbGV0cyB5b3VcbnBhdHRlcm4gbWF0Y2ggb24gc3RyaW5ncyBleGFjdGx5IGFzIHlvdSB3b3VsZCB3aXRoIGFycmF5cy5cblxuICAgIHBvcEZpcnN0IFwiYWJjXCIgPT0gSnVzdCB7IGZpcnN0ID0gJ2EnLCByZXN0ID0gXCJiY1wiIH1cblxuICAgIHBvcEZpcnN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wRmlyc3QgOiBTdHJpbmcgLT4gTWF5YmUgeyBmaXJzdCA6IENoYXIsIHJlc3QgOiBTdHJpbmcgfVxucG9wRmlyc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BGaXJzdFxuXG5cbnstfCBTcGxpdCBhIG5vbi1lbXB0eSBzdHJpbmcgaW50byBpdHMgbGFzdCBjaGFyYWN0ZXIgYW5kIGl0cyByZW1haW5pbmcgY2hhcmFjdGVycy4gVGhpcyBsZXRzIHlvdVxucGF0dGVybiBtYXRjaCBvbiBzdHJpbmdzIGV4YWN0bHkgYXMgeW91IHdvdWxkIHdpdGggYXJyYXlzLlxuXG4gICAgcG9wTGFzdCBcImFiY1wiID09IEp1c3QgeyBmaXJzdCA9ICdjJywgcmVzdCA9IFwiYWJcIiB9XG5cbiAgICBwb3BMYXN0IFwiXCIgPT0gTm90aGluZ1xuXG4tfVxucG9wTGFzdCA6IFN0cmluZyAtPiBNYXliZSB7IGxhc3QgOiBDaGFyLCByZXN0IDogU3RyaW5nIH1cbnBvcExhc3QgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5wb3BMYXN0XG5cblxuLS0gSElHSEVSLU9SREVSIEZVTkNUSU9OU1xuXG5cbnstfCBUcmFuc2Zvcm0gZXZlcnkgY2hhcmFjdGVyIGluIGEgc3RyaW5nXG5cbiAgICBtYXBcbiAgICAgICAgKFxcYyAtPlxuICAgICAgICAgICAgaWYgYyA9PSAnLycgdGhlblxuICAgICAgICAgICAgICAgICcuJ1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY1xuICAgICAgICApXG4gICAgICAgIFwiYS9iL2NcIlxuICAgICAgICA9PSBcImEuYi5jXCJcblxuLX1cbm1hcCA6IChDaGFyIC0+IENoYXIpIC0+IFN0cmluZyAtPiBTdHJpbmdcbm1hcCBmbiBzdHIgPVxuICAgIGZvbGRsXG4gICAgICAgIChcXGNoYXIgYWNjIC0+XG4gICAgICAgICAgICBwdXNoTGFzdCAoZm4gY2hhcikgYWNjXG4gICAgICAgIClcbiAgICAgICAgXCJcIlxuICAgICAgICBzdHJcblxuXG57LXwgS2VlcCBvbmx5IHRoZSBjaGFyYWN0ZXJzIHRoYXQgcGFzcyB0aGUgdGVzdC5cblxuICAgIGtlZXBJZiBpc0RpZ2l0IFwiUjItRDJcIiA9PSBcIjIyXCJcblxuLX1cbmtlZXBJZiA6IChDaGFyIC0+IEJvb2wpIC0+IFN0cmluZyAtPiBTdHJpbmdcbmtlZXBJZiBpc0dvb2Qgc3RyID1cbiAgICBmb2xkbFxuICAgICAgICAoXFxjaGFyIGFjYyAtPlxuICAgICAgICAgICAgaWYgaXNHb29kIGNoYXIgdGhlblxuICAgICAgICAgICAgICAgIHB1c2hMYXN0IGNoYXIgYWNjXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhY2NcbiAgICAgICAgKVxuICAgICAgICBcIlwiXG4gICAgICAgIHN0clxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgYmVnaW5uaW5nLlxuXG4gICAgZm9sZGwgY29ucyBcIlwiIFwidGltZVwiID09IFwiZW1pdFwiXG5cbi19XG5mb2xkbCA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZGwgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFxuXG5cbnstfCBSZWR1Y2UgYSBzdHJpbmcgZnJvbSB0aGUgZW5kLlxuXG4gICAgZm9sZHIgY29ucyBcIlwiIFwidGltZVwiID09IFwidGltZVwiXG5cbi19XG5mb2xkciA6IChDaGFyIC0+IGIgLT4gYikgLT4gYiAtPiBTdHJpbmcgLT4gYlxuZm9sZHIgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYW55XyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbnkgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYW55IGlzRGlnaXQgXCJSMi1EMlwiID09IFRydWVcblxuICAgIGFueSBpc0RpZ2l0IFwiaGVhcnRcIiA9PSBGYWxzZVxuXG4gICAgYW55IGlzRGlnaXQgXCJcIiA9PSBGYWxzZVxuXG4tfVxuYW55IDogKENoYXIgLT4gQm9vbCkgLT4gU3RyaW5nIC0+IEJvb2xcbmFueSA9XG4gICAgR3Jlbi5LZXJuZWwuU3RyaW5nLmFueVxuXG5cbnstfCBEZXRlcm1pbmUgd2hldGhlciBfYWxsXyBjaGFyYWN0ZXJzIHBhc3MgdGhlIHRlc3QuXG5cbiAgICBhbGwgaXNEaWdpdCBcIjkwMjEwXCIgPT0gVHJ1ZVxuXG4gICAgYWxsIGlzRGlnaXQgXCJSMi1EMlwiID09IEZhbHNlXG5cbiAgICBhbGwgaXNEaWdpdCBcImhlYXJ0XCIgPT0gRmFsc2VcblxuICAgIGFsbCBpc0RpZ2l0IFwiXCIgPSBUcnVlXG5cbi19XG5hbGwgOiAoQ2hhciAtPiBCb29sKSAtPiBTdHJpbmcgLT4gQm9vbFxuYWxsIGlzR29vZCBzdHIgPVxuICAgIG5vdCAoYW55IChub3QgPDwgaXNHb29kKSBzdHIpXG5cblxuLS0gVU5JVFNcblxuXG57LXwgR2V0IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVyIHVuaXRzIGluIGEgc3RyaW5nLiBBcyBzdHJpbmdzIGFyZSwgZXNzZW50aWFsbHksXG5hcnJheXMgb2YgY2hhcmFjdGVyIHVuaXRzLCB0aGlzIGlzIGEgY29uc3RhbnQgdGltZSBvcGVyYXRpb24uXG4tfVxudW5pdExlbmd0aCA6IFN0cmluZyAtPiBJbnRcbnVuaXRMZW5ndGggPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy51bml0TGVuZ3RoXG5cblxuey18IFJldHJpZXZlIHRoZSBjaGFyYWN0ZXIgdW5pdCBhdCBhIGdpdmVuIGluZGV4LCBvciBgTm90aGluZ2AgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG5BIG5lZ2F0aXZlIGluZGV4IHVzZXMgdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGFzIHRoZSBzdGFydGluZyBwb2ludC5cblxuICAgIGdldFVuaXQgMSBcImFiY1wiID09IEp1c3QgJ2EnXG4gICAgXG4gICAgZ2V0VW5pdCAxMCBcImFiY1wiID09IE5vdGhpbmdcbiAgICBcbiAgICBnZXRVbml0IC0xIFwiYWJjXCIgPT0gSnVzdCAnYydcblxuLX1cbmdldFVuaXQgOiBJbnQgLT4gU3RyaW5nIC0+IE1heWJlIENoYXJcbmdldFVuaXQgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5nZXRVbml0XG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBiZWdpbm5pbmcuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZGxVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcImVtaXRcIlxuLX1cbmZvbGRsVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRsVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkbFVuaXRzXG5cblxuey18IFJlZHVjZSBhIHN0cmluZyBmcm9tIHRoZSBlbmQuIFRoZSBnaXZlbiBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgY2hhcmFjdGVyIHVuaXRzIGluc3RlYWRcbm9mIGEgY29kZSBwb2ludCwgbWVhbmluZyB0aGF0IHRoZSBwcm92aWRlZCBgQ2hhcmAgY291bGQgcG9zc2libHkgcmVwcmVzZW50IG9uZSBoYWxmIG9mIGEgZnVsbFxuY2hhcmFjdGVyLlxuXG4gICAgZm9sZHJVbml0cyBwdXNoRmlyc3QgXCJcIiBcInRpbWVcIiA9PSBcInRpbWVcIlxuLX1cbmZvbGRyVW5pdHMgOiAoQ2hhciAtPiBiIC0+IGIpIC0+IGIgLT4gU3RyaW5nIC0+IGJcbmZvbGRyVW5pdHMgPVxuICAgIEdyZW4uS2VybmVsLlN0cmluZy5mb2xkclVuaXRzXG4iLAogICAgICAgICJtb2R1bGUgSnNvbi5FbmNvZGUgZXhwb3NpbmdcbiAgICAoIGVuY29kZSwgVmFsdWVcbiAgICAsIHN0cmluZywgaW50LCBmbG9hdCwgYm9vbCwgbnVsbFxuICAgICwgYXJyYXksIHNldFxuICAgICwgb2JqZWN0LCBkaWN0XG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB0dXJuaW5nIEdyZW4gdmFsdWVzIGludG8gSnNvbiB2YWx1ZXMuXG5cblxuQGRvY3MgZW5jb2RlLCBWYWx1ZVxuXG5cbiMjIFByaW1pdGl2ZXNcblxuQGRvY3Mgc3RyaW5nLCBpbnQsIGZsb2F0LCBib29sLCBudWxsXG5cblxuIyMgQXJyYXlzXG5cbkBkb2NzIGFycmF5LCBzZXRcblxuXG4jIyBPYmplY3RzXG5cbkBkb2NzIG9iamVjdCwgZGljdFxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgRGljdCBleHBvc2luZyAoRGljdClcbmltcG9ydCBTZXQgZXhwb3NpbmcgKFNldClcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5cblxuXG4tLSBFTkNPREVcblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBWYWx1ZVxuICAgID0gVmFsdWVcblxuXG57LXwgQ29udmVydCBhIGBWYWx1ZWAgaW50byBhIHByZXR0aWZpZWQgc3RyaW5nLiBUaGUgZmlyc3QgYXJndW1lbnQgc3BlY2lmaWVzXG50aGUgYW1vdW50IG9mIGluZGVudGF0aW9uIGluIHRoZSByZXN1bHRpbmcgc3RyaW5nLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgdG9tIDogRW5jb2RlLlZhbHVlXG4gICAgdG9tID1cbiAgICAgICAgRW5jb2RlLm9iamVjdFxuICAgICAgICAgICAgWyB7IGtleSA9IFwibmFtZVwiLCB2YWx1ZSA9IEVuY29kZS5zdHJpbmcgXCJUb21cIiB9XG4gICAgICAgICAgICAsIHsga2V5ID0gXCJhZ2VcIiwgdmFsdWUgPSBFbmNvZGUuaW50IDQyIClcbiAgICAgICAgICAgIF1cblxuICAgIGNvbXBhY3QgPVxuICAgICAgICBFbmNvZGUuZW5jb2RlIDAgdG9tXG5cbiAgICAtLSB7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVxuICAgIHJlYWRhYmxlID1cbiAgICAgICAgRW5jb2RlLmVuY29kZSA0IHRvbVxuXG4gICAgLS0ge1xuICAgIC0tICAgICBcIm5hbWVcIjogXCJUb21cIixcbiAgICAtLSAgICAgXCJhZ2VcIjogNDJcbiAgICAtLSB9XG5cbi19XG5lbmNvZGUgOiBJbnQgLT4gVmFsdWUgLT4gU3RyaW5nXG5lbmNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZW5jb2RlXG5cblxuXG4tLSBQUklNSVRJVkVTXG5cblxuey18IFR1cm4gYSBgU3RyaW5nYCBpbnRvIGEgSlNPTiBzdHJpbmcuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgZXhwb3NpbmcgKGVuY29kZSwgc3RyaW5nKVxuXG5cbiAgICAtLSBlbmNvZGUgMCAoc3RyaW5nIFwiXCIpICAgICAgPT0gXCJcXFwiXFxcIlwiXG4gICAgLS0gZW5jb2RlIDAgKHN0cmluZyBcImFiY1wiKSAgID09IFwiXFxcImFiY1xcXCJcIlxuICAgIC0tIGVuY29kZSAwIChzdHJpbmcgXCJoZWxsb1wiKSA9PSBcIlxcXCJoZWxsb1xcXCJcIlxuXG4tfVxuc3RyaW5nIDogU3RyaW5nIC0+IFZhbHVlXG5zdHJpbmcgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ud3JhcFxuXG5cbnstfCBUdXJuIGFuIGBJbnRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBpbnQpXG5cblxuICAgIC0tIGVuY29kZSAwIChpbnQgNDIpID09IFwiNDJcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgLTcpID09IFwiLTdcIlxuICAgIC0tIGVuY29kZSAwIChpbnQgMCkgID09IFwiMFwiXG5cbi19XG5pbnQgOiBJbnQgLT4gVmFsdWVcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG5cblxuey18IFR1cm4gYSBgRmxvYXRgIGludG8gYSBKU09OIG51bWJlci5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBleHBvc2luZyAoZW5jb2RlLCBmbG9hdClcblxuXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IDMuMTQpICAgICA9PSBcIjMuMTRcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCAxLjYxOCkgICAgPT0gXCIxLjYxOFwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IC00MikgICAgICA9PSBcIi00MlwiXG4gICAgLS0gZW5jb2RlIDAgKGZsb2F0IE5hTikgICAgICA9PSBcIm51bGxcIlxuICAgIC0tIGVuY29kZSAwIChmbG9hdCBJbmZpbml0eSkgPT0gXCJudWxsXCJcblxuKipOb3RlOioqIEZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIGRlZmluZWQgaW4gdGhlIFtJRUVFIDc1NCBzdGFuZGFyZF1baWVlZV1cbndoaWNoIGlzIGhhcmRjb2RlZCBpbnRvIGFsbW9zdCBhbGwgQ1BVcy4gVGhpcyBzdGFuZGFyZCBhbGxvd3MgYEluZmluaXR5YCBhbmRcbmBOYU5gLiBbVGhlIEpTT04gc3BlY11banNvbl0gZG9lcyBub3QgaW5jbHVkZSB0aGVzZSB2YWx1ZXMsIHNvIHdlIGVuY29kZSB0aGVtXG5ib3RoIGFzIGBudWxsYC5cblxuW2llZWVdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JRUVFXzc1NFxuW2pzb25dOiBodHRwczovL3d3dy5qc29uLm9yZy9cblxuLX1cbmZsb2F0IDogRmxvYXQgLT4gVmFsdWVcbmZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG57LXwgVHVybiBhIGBCb29sYCBpbnRvIGEgSlNPTiBib29sZWFuLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChib29sLCBlbmNvZGUpXG5cblxuICAgIC0tIGVuY29kZSAwIChib29sIFRydWUpICA9PSBcInRydWVcIlxuICAgIC0tIGVuY29kZSAwIChib29sIEZhbHNlKSA9PSBcImZhbHNlXCJcblxuLX1cbmJvb2wgOiBCb29sIC0+IFZhbHVlXG5ib29sID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcblxuXG5cbi0tIE5VTExTXG5cblxuey18IENyZWF0ZSBhIEpTT04gYG51bGxgIHZhbHVlLlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGV4cG9zaW5nIChlbmNvZGUsIG51bGwpXG5cblxuICAgIC0tIGVuY29kZSAwIG51bGwgPT0gXCJudWxsXCJcblxuLX1cbm51bGwgOiBWYWx1ZVxubnVsbCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5lbmNvZGVOdWxsXG5cblxuXG4tLSBBUlJBWVNcblxuXG57LXwgVHVybiBhIGBBcnJheWAgaW50byBhIEpTT04gYXJyYXkuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlIGV4cG9zaW5nIChhcnJheSwgYm9vbCwgZW5jb2RlLCBpbnQsIHN0cmluZylcblxuXG4gICAgLS0gZW5jb2RlIDAgKGFycmF5IGludCBbMSwzLDRdKSAgICAgICA9PSBcIlsxLDMsNF1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBib29sIFtUcnVlLEZhbHNlXSkgPT0gXCJbdHJ1ZSxmYWxzZV1cIlxuICAgIC0tIGVuY29kZSAwIChhcnJheSBzdHJpbmcgW1wiYVwiLFwiYlwiXSkgID09IFwiXCJcIltcImFcIixcImJcIl1cIlwiXCJcblxuLX1cbmFycmF5IDogKGEgLT4gVmFsdWUpIC0+IEFycmF5IGEgLT4gVmFsdWVcbmFycmF5IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChBcnJheS5mb2xkbCAoR3Jlbi5LZXJuZWwuSnNvbi5hZGRFbnRyeSBmdW5jKSAoR3Jlbi5LZXJuZWwuSnNvbi5lbXB0eUFycmF5IHt9KSBlbnRyaWVzKVxuXG5cbnstfCBUdXJuIGFuIGBTZXRgIGludG8gYSBKU09OIGFycmF5LlxuLX1cbnNldCA6IChhIC0+IFZhbHVlKSAtPiBTZXQgYSAtPiBWYWx1ZVxuc2V0IGZ1bmMgZW50cmllcyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi53cmFwXG4gICAgICAgIChTZXQuZm9sZGwgKEdyZW4uS2VybmVsLkpzb24uYWRkRW50cnkgZnVuYykgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlBcnJheSB7fSkgZW50cmllcylcblxuXG5cbi0tIE9CSkVDVFNcblxuXG57LXwgQ3JlYXRlIGEgSlNPTiBvYmplY3QuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgRW5jb2RlXG5cbiAgICB0b20gOiBFbmNvZGUuVmFsdWVcbiAgICB0b20gPVxuICAgICAgICBFbmNvZGUub2JqZWN0XG4gICAgICAgICAgICBbIHsga2V5ID0gXCJuYW1lXCIsIHZhbHVlID0gRW5jb2RlLnN0cmluZyBcIlRvbVwiIH1cbiAgICAgICAgICAgICwgeyBrZXkgPSBcImFnZVwiLCB2YWx1ZSA9IEVuY29kZS5pbnQgNDIgfVxuICAgICAgICAgICAgXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIHRvbSA9PSBcIlwiXCJ7XCJuYW1lXCI6XCJUb21cIixcImFnZVwiOjQyfVwiXCJcIlxuXG4tfVxub2JqZWN0IDogQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfSAtPiBWYWx1ZVxub2JqZWN0IHBhaXJzID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKEFycmF5LmZvbGRsXG4gICAgICAgICAgICAoXFx7IGtleSwgdmFsdWUgfSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCBrZXkgdmFsdWUgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBwYWlyc1xuICAgICAgICApXG5cblxuey18IFR1cm4gYSBgRGljdGAgaW50byBhIEpTT04gb2JqZWN0LlxuXG4gICAgaW1wb3J0IERpY3QgZXhwb3NpbmcgKERpY3QpXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgcGVvcGxlIDogRGljdCBTdHJpbmcgSW50XG4gICAgcGVvcGxlID1cbiAgICAgICAgRGljdC5mcm9tQXJyYXkgWyB7IGtleSA9IFwiVG9tXCIsIHZhbHVlID0gNDIgfSwgeyBrZXkgPSBcIlN1ZVwiLCB2YWx1ZSA9IDM4IH0gXVxuXG4gICAgLS0gRW5jb2RlLmVuY29kZSAwIChFbmNvZGUuZGljdCBpZGVudGl0eSBFbmNvZGUuaW50IHBlb3BsZSlcbiAgICAtLSAgID09IFwiXCJcIntcIlRvbVwiOjQyLFwiU3VlXCI6Mzh9XCJcIlwiXG5cbi19XG5kaWN0IDogKGsgLT4gU3RyaW5nKSAtPiAodiAtPiBWYWx1ZSkgLT4gRGljdCBrIHYgLT4gVmFsdWVcbmRpY3QgdG9LZXkgdG9WYWx1ZSBkaWN0aW9uYXJ5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLndyYXBcbiAgICAgICAgKERpY3QuZm9sZGxcbiAgICAgICAgICAgIChcXGtleSB2YWx1ZSBvYmogLT4gR3Jlbi5LZXJuZWwuSnNvbi5hZGRGaWVsZCAodG9LZXkga2V5KSAodG9WYWx1ZSB2YWx1ZSkgb2JqKVxuICAgICAgICAgICAgKEdyZW4uS2VybmVsLkpzb24uZW1wdHlPYmplY3Qge30pXG4gICAgICAgICAgICBkaWN0aW9uYXJ5XG4gICAgICAgIClcbiIsCiAgICAgICAgIm1vZHVsZSBKc29uLkRlY29kZSBleHBvc2luZ1xuICAgICggRGVjb2Rlciwgc3RyaW5nLCBib29sLCBpbnQsIGZsb2F0XG4gICAgLCBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuICAgICwgZmllbGQsIGF0LCBpbmRleFxuICAgICwgbWF5YmUsIG9uZU9mXG4gICAgLCBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IoLi4pLCBlcnJvclRvU3RyaW5nXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIG1hcDYsIG1hcDcsIG1hcDhcbiAgICAsIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG4gICAgKVxuXG57LXwgVHVybiBKU09OIHZhbHVlcyBpbnRvIEdyZW4gdmFsdWVzLiBXZSd2ZSBpbmhlcml0ZWQgdGhpcyBmcm9tIEVsbS4gRGVmaW5pdGVseSBjaGVjayBvdXQgdGhpcyBbaW50cm8gdG9cbkpTT04gZGVjb2RlcnNdW2d1aWRlXSB0byBnZXQgYSBmZWVsIGZvciBob3cgdGhpcyBsaWJyYXJ5IHdvcmtzIVxuXG5bZ3VpZGVdOiBodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9lZmZlY3RzL2pzb24uaHRtbFxuXG5cbkBkb2NzIERlY29kZXIsIHN0cmluZywgYm9vbCwgaW50LCBmbG9hdFxuXG5cbiMjIERhdGEgU3RydWN0dXJlc1xuXG5AZG9jcyBudWxsYWJsZSwgYXJyYXksIGRpY3QsIGtleVZhbHVlUGFpcnMsIG9uZU9yTW9yZVxuXG5cbiMjIE9iamVjdCBQcmltaXRpdmVzXG5cbkBkb2NzIGZpZWxkLCBhdCwgaW5kZXhcblxuXG4jIyBJbmNvbnNpc3RlbnQgU3RydWN0dXJlXG5cbkBkb2NzIG1heWJlLCBvbmVPZlxuXG5cbiMjIFJ1biBEZWNvZGVyc1xuXG5AZG9jcyBkZWNvZGVTdHJpbmcsIGRlY29kZVZhbHVlLCBWYWx1ZSwgRXJyb3IsIGVycm9yVG9TdHJpbmdcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNSwgbWFwNiwgbWFwNywgbWFwOFxuXG5cbiMjIEZhbmN5IERlY29kaW5nXG5cbkBkb2NzIGxhenksIHZhbHVlLCBudWxsLCBzdWNjZWVkLCBmYWlsLCBhbmRUaGVuXG5cbi19XG5cbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKC4uKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBEaWN0IGV4cG9zaW5nIChEaWN0KVxuaW1wb3J0IENoYXJcbmltcG9ydCBTdHJpbmcgZXhwb3NpbmcgKFN0cmluZylcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IFJlc3VsdCBleHBvc2luZyAoUmVzdWx0KC4uKSlcbmltcG9ydCBHcmVuLktlcm5lbC5Kc29uXG5pbXBvcnQgSnNvbi5FbmNvZGVcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgQSB2YWx1ZSB0aGF0IGtub3dzIGhvdyB0byBkZWNvZGUgSlNPTiB2YWx1ZXMuXG5cblRoZXJlIGlzIGEgd2hvbGUgc2VjdGlvbiBpbiBgZ3VpZGUuZWxtLWxhbmcub3JnYCBhYm91dCBkZWNvZGVycywgc28gW2NoZWNrIGl0XG5vdXRdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2ludGVyb3AvanNvbi5odG1sKSBmb3IgYSBtb3JlIGNvbXByZWhlbnNpdmVcbmludHJvZHVjdGlvbiFcblxuLX1cbnR5cGUgRGVjb2RlciBhXG4gICAgPSBEZWNvZGVyXG5cblxuey18IERlY29kZSBhIEpTT04gc3RyaW5nIGludG8gYW4gR3JlbiBgU3RyaW5nYC5cblxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIHN0cmluZyBcIjMuMTRcIiAgICAgICAgICAgICAgPT0gRXJyIC4uLlxuICAgIGRlY29kZVN0cmluZyBzdHJpbmcgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBPayBcImhlbGxvXCJcbiAgICBkZWNvZGVTdHJpbmcgc3RyaW5nIFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuc3RyaW5nIDogRGVjb2RlciBTdHJpbmdcbnN0cmluZyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVTdHJpbmdcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBib29sZWFuIGludG8gYW4gR3JlbiBgQm9vbGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInRydWVcIiAgICAgICAgICAgICAgPT0gT2sgVHJ1ZVxuICAgIGRlY29kZVN0cmluZyBib29sIFwiNDJcIiAgICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGJvb2wgXCIzLjE0XCIgICAgICAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgYm9vbCBcInsgXFxcImhlbGxvXFxcIjogNDIgfVwiID09IEVyciAuLi5cblxuLX1cbmJvb2wgOiBEZWNvZGVyIEJvb2xcbmJvb2wgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlQm9vbFxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG51bWJlciBpbnRvIGFuIEdyZW4gYEludGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwidHJ1ZVwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiMy4xNFwiICAgICAgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGludCBcIlxcXCJoZWxsb1xcXCJcIiAgICAgICAgID09IEVyciAuLi5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuaW50IDogRGVjb2RlciBJbnRcbmludCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbnRcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBudW1iZXIgaW50byBhbiBHcmVuIGBGbG9hdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJ0cnVlXCIgICAgICAgICAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyBmbG9hdCBcIjQyXCIgICAgICAgICAgICAgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCIzLjE0XCIgICAgICAgICAgICAgID09IE9rIDMuMTRcbiAgICBkZWNvZGVTdHJpbmcgZmxvYXQgXCJcXFwiaGVsbG9cXFwiXCIgICAgICAgICA9PSBFcnIgLi4uXG4gICAgZGVjb2RlU3RyaW5nIGZsb2F0IFwieyBcXFwiaGVsbG9cXFwiOiA0MiB9XCIgPT0gRXJyIC4uLlxuXG4tfVxuZmxvYXQgOiBEZWNvZGVyIEZsb2F0XG5mbG9hdCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVGbG9hdFxuXG5cblxuLS0gREFUQSBTVFJVQ1RVUkVTXG5cblxuey18IERlY29kZSBhIG51bGxhYmxlIEpTT04gdmFsdWUgaW50byBhbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsYWJsZSBpbnQpIFwiMTNcIiAgICA9PSBPayAoSnVzdCAxMylcbiAgICBkZWNvZGVTdHJpbmcgKG51bGxhYmxlIGludCkgXCI0MlwiICAgID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcIm51bGxcIiAgPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobnVsbGFibGUgaW50KSBcInRydWVcIiAgPT0gRXJyIC4uXG5cbi19XG5udWxsYWJsZSA6IERlY29kZXIgYSAtPiBEZWNvZGVyIChNYXliZSBhKVxubnVsbGFibGUgZGVjb2RlciA9XG4gICAgb25lT2ZcbiAgICAgICAgWyBudWxsIE5vdGhpbmdcbiAgICAgICAgLCBtYXAgSnVzdCBkZWNvZGVyXG4gICAgICAgIF1cblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSBpbnRvIGFuIEdyZW4gYEFycmF5YC5cblxuICAgIGRlY29kZVN0cmluZyAoYXJyYXkgaW50KSBcIlsxLDIsM11cIiA9PSBPayBbIDEsIDIsIDMgXVxuXG4gICAgZGVjb2RlU3RyaW5nIChhcnJheSBib29sKSBcIlt0cnVlLGZhbHNlXVwiID09IE9rIFsgVHJ1ZSwgRmFsc2UgXVxuXG4tfVxuYXJyYXkgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgYSlcbmFycmF5ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUFycmF5XG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0IGludG8gYW4gR3JlbiBgRGljdGAuXG5cbiAgICBkZWNvZGVTdHJpbmcgKGRpY3QgaW50KSBcInsgXFxcImFsaWNlXFxcIjogNDIsIFxcXCJib2JcXFwiOiA5OSB9XCJcbiAgICAgICAgPT0gT2sgKERpY3QuZW1wdHkgfD4gRGljdC5zZXQgXCJhbGljZVwiIDQyIHw+IERpY3Quc2V0IFwiYm9iXCIgOTkpXG5cbklmIHlvdSBuZWVkIHRoZSBrZXlzIChsaWtlIGBcImFsaWNlXCJgIGFuZCBgXCJib2JcImApIGF2YWlsYWJsZSBpbiB0aGUgYERpY3RgXG52YWx1ZXMgYXMgd2VsbCwgSSByZWNvbW1lbmQgdXNpbmcgYSAocHJpdmF0ZSkgaW50ZXJtZWRpYXRlIGRhdGEgc3RydWN0dXJlIGxpa2VcbmBJbmZvYCBpbiB0aGlzIGV4YW1wbGU6XG5cbiAgICBtb2R1bGUgVXNlciBleHBvc2luZyAoIFVzZXIsIGRlY29kZXIgKVxuXG4gICAgaW1wb3J0IERpY3RcbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgZXhwb3NpbmcgKC4uKVxuXG4gICAgdHlwZSBhbGlhcyBVc2VyID1cbiAgICAgICAgeyBuYW1lIDogU3RyaW5nXG4gICAgICAgICwgaGVpZ2h0IDogRmxvYXRcbiAgICAgICAgLCBhZ2UgOiBJbnRcbiAgICAgICAgfVxuXG4gICAgbWFrZVVzZXIgOiBTdHJpbmcgLT4gRmxvYXQgLT4gSW50IC0+IFVzZXJcbiAgICBtYWtlVXNlciBuYW1lIGhlaWdodCBhZ2UgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgIH1cblxuICAgIGRlY29kZXIgOiBEZWNvZGVyIChEaWN0LkRpY3QgU3RyaW5nIFVzZXIpXG4gICAgZGVjb2RlciA9XG4gICAgICAgIG1hcCAoRGljdC5tYXAgaW5mb1RvVXNlcikgKGRpY3QgaW5mb0RlY29kZXIpXG5cbiAgICB0eXBlIGFsaWFzIEluZm8gPVxuICAgICAgICB7IGhlaWdodCA6IEZsb2F0XG4gICAgICAgICwgYWdlIDogSW50XG4gICAgICAgIH1cblxuICAgIG1ha2VJbmZvIDogRmxvYXQgLT4gSW50IC0+IEluZm9cbiAgICBtYWtlSW5mbyBoZWlnaHQgYWdlID1cbiAgICAgICAgeyBoZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgLCBhZ2UgPSBhZ2VcbiAgICAgICAgfVxuXG4gICAgaW5mb0RlY29kZXIgOiBEZWNvZGVyIEluZm9cbiAgICBpbmZvRGVjb2RlciA9XG4gICAgICAgIG1hcDIgbWFrZUluZm9cbiAgICAgICAgICAgIChmaWVsZCBcImhlaWdodFwiIGZsb2F0KVxuICAgICAgICAgICAgKGZpZWxkIFwiYWdlXCIgaW50KVxuXG4gICAgaW5mb1RvVXNlciA6IFN0cmluZyAtPiBJbmZvIC0+IFVzZXJcbiAgICBpbmZvVG9Vc2VyIG5hbWUgeyBoZWlnaHQsIGFnZSB9ID1cbiAgICAgICAgbWFrZVVzZXIgbmFtZSBoZWlnaHQgYWdlXG5cblNvIG5vdyBKU09OIGxpa2UgYHsgXCJhbGljZVwiOiB7IGhlaWdodDogMS42LCBhZ2U6IDMzIH19YCBhcmUgdHVybmVkIGludG9cbmRpY3Rpb25hcnkgdmFsdWVzIGxpa2UgYERpY3Quc2luZ2xldG9uIFwiYWxpY2VcIiAoVXNlciBcImFsaWNlXCIgMS42IDMzKWAgaWZcbnlvdSBuZWVkIHRoYXQuXG5cbi19XG5kaWN0IDogRGVjb2RlciBhIC0+IERlY29kZXIgKERpY3QgU3RyaW5nIGEpXG5kaWN0IGRlY29kZXIgPVxuICAgIG1hcCAoXFxwYWlycyAtPiBBcnJheS5mb2xkbCAoXFxwIGNvbGwgLT4gRGljdC5zZXQgcC5rZXkgcC52YWx1ZSBjb2xsKSBEaWN0LmVtcHR5IHBhaXJzKSAoa2V5VmFsdWVQYWlycyBkZWNvZGVyKVxuXG5cbnstfCBEZWNvZGUgYSBKU09OIG9iamVjdCBpbnRvIGFuIEdyZW4gYEFycmF5YCBvZiBwYWlycy5cblxuICAgIGRlY29kZVN0cmluZyAoa2V5VmFsdWVQYWlycyBpbnQpIFwieyBcXFwiYWxpY2VcXFwiOiA0MiwgXFxcImJvYlxcXCI6IDk5IH1cIlxuICAgICAgICA9PSBPayBbIHsga2V5ID0gXCJhbGljZVwiLCB2YWx1ZSA9IDQyIH0sIHsga2V5ID0gXCJib2JcIiwgdmFsdWUgPSA5OSB9IF1cblxuLX1cbmtleVZhbHVlUGFpcnMgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoQXJyYXkgeyBrZXkgOiBTdHJpbmcsIHZhbHVlIDogYSB9KVxua2V5VmFsdWVQYWlycyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVLZXlWYWx1ZVBhaXJzXG5cblxuey18IERlY29kZSBhIEpTT04gYXJyYXkgdGhhdCBoYXMgb25lIG9yIG1vcmUgZWxlbWVudHMuIFRoaXMgY29tZXMgdXAgaWYgeW91XG53YW50IHRvIGVuYWJsZSBkcmFnLWFuZC1kcm9wIG9mIGZpbGVzIGludG8geW91ciBhcHBsaWNhdGlvbi4gWW91IHdvdWxkIHBhaXJcbnRoaXMgZnVuY3Rpb24gd2l0aCBbYGVsbS9maWxlYF0oKSB0byB3cml0ZSBhIGBkcm9wRGVjb2RlcmAgbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IEZpbGUgZXhwb3NpbmcgKEZpbGUpXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlciBhcyBEXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IEdvdEZpbGVzIEZpbGUgKEFycmF5IEZpbGVzKVxuXG4gICAgaW5wdXREZWNvZGVyIDogRC5EZWNvZGVyIE1zZ1xuICAgIGlucHV0RGVjb2RlciA9XG4gICAgICAgIEQuYXQgWyBcImRhdGFUcmFuc2ZlclwiLCBcImZpbGVzXCIgXSAoRC5vbmVPck1vcmUgR290RmlsZXMgRmlsZS5kZWNvZGVyKVxuXG5UaGlzIGNhcHR1cmVzIHRoZSBmYWN0IHRoYXQgeW91IGNhbiBuZXZlciBkcmFnLWFuZC1kcm9wIHplcm8gZmlsZXMuXG5cbi19XG5vbmVPck1vcmUgOiAoYSAtPiBBcnJheSBhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlIHRvVmFsdWUgZGVjb2RlciA9XG4gICAgYXJyYXkgZGVjb2RlclxuICAgICAgICB8PiBhbmRUaGVuIChvbmVPck1vcmVIZWxwIHRvVmFsdWUpXG5cblxub25lT3JNb3JlSGVscCA6IChhIC0+IEFycmF5IGEgLT4gdmFsdWUpIC0+IEFycmF5IGEgLT4gRGVjb2RlciB2YWx1ZVxub25lT3JNb3JlSGVscCB0b1ZhbHVlIHhzID1cbiAgICB3aGVuIEFycmF5LmdldCAwIHhzIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGZhaWwgXCJhIEFSUkFZIHdpdGggYXQgbGVhc3QgT05FIGVsZW1lbnRcIlxuXG4gICAgICAgIEp1c3QgeSAtPlxuICAgICAgICAgICAgc3VjY2VlZCAodG9WYWx1ZSB5IChBcnJheS5zbGljZSAxIChBcnJheS5sZW5ndGggeHMpIHhzKSlcblxuXG5cbi0tIE9CSkVDVCBQUklNSVRJVkVTXG5cblxuey18IERlY29kZSBhIEpTT04gb2JqZWN0LCByZXF1aXJpbmcgYSBwYXJ0aWN1bGFyIGZpZWxkLlxuXG4gICAgZGVjb2RlU3RyaW5nIChmaWVsZCBcInhcIiBpbnQpIFwieyBcXFwieFxcXCI6IDMgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiAzLCBcXFwieVxcXCI6IDQgfVwiID09IE9rIDNcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInhcXFwiOiB0cnVlIH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJ4XCIgaW50KSBcInsgXFxcInlcXFwiOiA0IH1cIlxuICAgICAgICA9PSBFcnJcbiAgICAgICAgLi4uIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSBcInsgXFxcIm5hbWVcXFwiOiBcXFwidG9tXFxcIiB9XCJcbiAgICAgICAgPT0gT2sgXCJ0b21cIlxuXG5UaGUgb2JqZWN0IF9jYW5fIGhhdmUgb3RoZXIgZmllbGRzLiBMb3RzIG9mIHRoZW0hIFRoZSBvbmx5IHRoaW5nIHRoaXMgZGVjb2RlclxuY2FyZXMgYWJvdXQgaXMgaWYgYHhgIGlzIHByZXNlbnQgYW5kIHRoYXQgdGhlIHZhbHVlIHRoZXJlIGlzIGFuIGBJbnRgLlxuXG5DaGVjayBvdXQgW2BtYXAyYF0oI21hcDIpIHRvIHNlZSBob3cgdG8gZGVjb2RlIG11bHRpcGxlIGZpZWxkcyFcblxuLX1cbmZpZWxkIDogU3RyaW5nIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGFcbmZpZWxkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZUZpZWxkXG5cblxuey18IERlY29kZSBhIG5lc3RlZCBKU09OIG9iamVjdCwgcmVxdWlyaW5nIGNlcnRhaW4gZmllbGRzLlxuXG4gICAganNvbiA9IFwiXCJcInsgXCJwZXJzb25cIjogeyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfSB9XCJcIlwiXG5cbiAgICBkZWNvZGVTdHJpbmcgKGF0IFtcInBlcnNvblwiLCBcIm5hbWVcIl0gc3RyaW5nKSBqc29uICA9PSBPayBcInRvbVwiXG4gICAgZGVjb2RlU3RyaW5nIChhdCBbXCJwZXJzb25cIiwgXCJhZ2VcIiBdIGludCAgICkganNvbiAgPT0gT2sgNDJcblxuVGhpcyBpcyByZWFsbHkganVzdCBhIHNob3J0aGFuZCBmb3Igc2F5aW5nIHRoaW5ncyBsaWtlOlxuXG4gICAgZmllbGQgXCJwZXJzb25cIiAoZmllbGQgXCJuYW1lXCIgc3RyaW5nKSA9PSBhdCBbIFwicGVyc29uXCIsIFwibmFtZVwiIF0gc3RyaW5nXG5cbi19XG5hdCA6IEFycmF5IFN0cmluZyAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5hdCBmaWVsZHMgZGVjb2RlciA9XG4gICAgQXJyYXkuZm9sZHIgZmllbGQgZGVjb2RlciBmaWVsZHNcblxuXG57LXwgRGVjb2RlIGEgSlNPTiBhcnJheSwgcmVxdWlyaW5nIGEgcGFydGljdWxhciBpbmRleC5cblxuICAgIGpzb24gPSBcIlwiXCJbIFwiYWxpY2VcIiwgXCJib2JcIiwgXCJjaHVja1wiIF1cIlwiXCJcblxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMCBzdHJpbmcpIGpzb24gID09IE9rIFwiYWxpY2VcIlxuICAgIGRlY29kZVN0cmluZyAoaW5kZXggMSBzdHJpbmcpIGpzb24gID09IE9rIFwiYm9iXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDIgc3RyaW5nKSBqc29uICA9PSBPayBcImNodWNrXCJcbiAgICBkZWNvZGVTdHJpbmcgKGluZGV4IDMgc3RyaW5nKSBqc29uICA9PSBFcnIgLi4uXG5cbi19XG5pbmRleCA6IEludCAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBhXG5pbmRleCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5kZWNvZGVJbmRleFxuXG5cblxuLS0gV0VJUkQgU1RSVUNUVVJFXG5cblxuey18IEhlbHBmdWwgZm9yIGRlYWxpbmcgd2l0aCBvcHRpb25hbCBmaWVsZHMuIEhlcmUgYXJlIGEgZmV3IHNsaWdodGx5IGRpZmZlcmVudFxuZXhhbXBsZXM6XG5cbiAgICBqc29uID0gXCJcIlwieyBcIm5hbWVcIjogXCJ0b21cIiwgXCJhZ2VcIjogNDIgfVwiXCJcIlxuXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJhZ2VcIiAgICBpbnQgICkpIGpzb24gPT0gT2sgKEp1c3QgNDIpXG4gICAgZGVjb2RlU3RyaW5nIChtYXliZSAoZmllbGQgXCJuYW1lXCIgICBpbnQgICkpIGpzb24gPT0gT2sgTm90aGluZ1xuICAgIGRlY29kZVN0cmluZyAobWF5YmUgKGZpZWxkIFwiaGVpZ2h0XCIgZmxvYXQpKSBqc29uID09IE9rIE5vdGhpbmdcblxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJhZ2VcIiAgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIChKdXN0IDQyKVxuICAgIGRlY29kZVN0cmluZyAoZmllbGQgXCJuYW1lXCIgICAobWF5YmUgaW50ICApKSBqc29uID09IE9rIE5vdGhpbmdcbiAgICBkZWNvZGVTdHJpbmcgKGZpZWxkIFwiaGVpZ2h0XCIgKG1heWJlIGZsb2F0KSkganNvbiA9PSBFcnIgLi4uXG5cbk5vdGljZSB0aGUgbGFzdCBleGFtcGxlISBJdCBpcyBzYXlpbmcgd2UgX211c3RfIGhhdmUgYSBmaWVsZCBuYW1lZCBgaGVpZ2h0YCBhbmRcbnRoZSBjb250ZW50IF9tYXlfIGJlIGEgZmxvYXQuIFRoZXJlIGlzIG5vIGBoZWlnaHRgIGZpZWxkLCBzbyB0aGUgZGVjb2RlciBmYWlscy5cblxuUG9pbnQgaXMsIGBtYXliZWAgd2lsbCBtYWtlIGV4YWN0bHkgd2hhdCBpdCBjb250YWlucyBjb25kaXRpb25hbC4gRm9yIG9wdGlvbmFsXG5maWVsZHMsIHRoaXMgbWVhbnMgeW91IHByb2JhYmx5IHdhbnQgaXQgX291dHNpZGVfIGEgdXNlIG9mIGBmaWVsZGAgb3IgYGF0YC5cblxuLX1cbm1heWJlIDogRGVjb2RlciBhIC0+IERlY29kZXIgKE1heWJlIGEpXG5tYXliZSBkZWNvZGVyID1cbiAgICBvbmVPZlxuICAgICAgICBbIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgLCBzdWNjZWVkIE5vdGhpbmdcbiAgICAgICAgXVxuXG5cbnstfCBUcnkgYSBidW5jaCBvZiBkaWZmZXJlbnQgZGVjb2RlcnMuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB0aGUgSlNPTiBtYXkgY29tZVxuaW4gYSBjb3VwbGUgZGlmZmVyZW50IGZvcm1hdHMuIEZvciBleGFtcGxlLCBzYXkgeW91IHdhbnQgdG8gcmVhZCBhbiBhcnJheSBvZlxubnVtYmVycywgYnV0IHNvbWUgb2YgdGhlbSBhcmUgYG51bGxgLlxuXG4gICAgaW1wb3J0IFN0cmluZ1xuXG4gICAgYmFkSW50IDogRGVjb2RlciBJbnRcbiAgICBiYWRJbnQgPVxuICAgICAgICBvbmVPZiBbIGludCwgbnVsbCAwIF1cblxuICAgIC0tIGRlY29kZVN0cmluZyAoYXJyYXkgYmFkSW50KSBcIlsxLDIsbnVsbCw0XVwiID09IE9rIFsxLDIsMCw0XVxuXG5XaHkgd291bGQgc29tZW9uZSBnZW5lcmF0ZSBKU09OIGxpa2UgdGhpcz8gUXVlc3Rpb25zIGxpa2UgdGhpcyBhcmUgbm90IGdvb2RcbmZvciB5b3VyIGhlYWx0aC4gVGhlIHBvaW50IGlzIHRoYXQgeW91IGNhbiB1c2UgYG9uZU9mYCB0byBoYW5kbGUgc2l0dWF0aW9uc1xubGlrZSB0aGlzIVxuXG5Zb3UgY291bGQgYWxzbyB1c2UgYG9uZU9mYCB0byBoZWxwIHZlcnNpb24geW91ciBkYXRhLiBUcnkgdGhlIGxhdGVzdCBmb3JtYXQsXG50aGVuIGEgZmV3IG9sZGVyIG9uZXMgdGhhdCB5b3Ugc3RpbGwgc3VwcG9ydC4gWW91IGNvdWxkIHVzZSBgYW5kVGhlbmAgdG8gYmVcbmV2ZW4gbW9yZSBwYXJ0aWN1bGFyIGlmIHlvdSB3YW50ZWQuXG5cbi19XG5vbmVPZiA6IEFycmF5IChEZWNvZGVyIGEpIC0+IERlY29kZXIgYVxub25lT2YgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ub25lT2ZcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgZGVjb2Rlci4gTWF5YmUgeW91IGp1c3Qgd2FudCB0byBrbm93IHRoZSBsZW5ndGggb2YgYSBzdHJpbmc6XG5cbiAgICBpbXBvcnQgU3RyaW5nXG5cbiAgICBzdHJpbmdMZW5ndGggOiBEZWNvZGVyIEludFxuICAgIHN0cmluZ0xlbmd0aCA9XG4gICAgICAgIG1hcCBTdHJpbmcubGVuZ3RoIHN0cmluZ1xuXG5JdCBpcyBvZnRlbiBoZWxwZnVsIHRvIHVzZSBgbWFwYCB3aXRoIGBvbmVPZmAsIGxpa2Ugd2hlbiBkZWZpbmluZyBgbnVsbGFibGVgOlxuXG4gICAgbnVsbGFibGUgOiBEZWNvZGVyIGEgLT4gRGVjb2RlciAoTWF5YmUgYSlcbiAgICBudWxsYWJsZSBkZWNvZGVyID1cbiAgICAgICAgb25lT2ZcbiAgICAgICAgICAgIFsgbnVsbCBOb3RoaW5nXG4gICAgICAgICAgICAsIG1hcCBKdXN0IGRlY29kZXJcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcCA6IChhIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciB2YWx1ZVxubWFwID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDFcblxuXG57LXwgVHJ5IHR3byBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQb2ludCA9XG4gICAgICAgIHsgeCA6IEZsb2F0XG4gICAgICAgICwgeSA6IEZsb2F0XG4gICAgICAgIH1cblxuICAgIG1ha2VQb2ludCA6IEZsb2F0IC0+IEZsb2F0IC0+IFBvaW50XG4gICAgbWFrZVBvaW50IHggeSA9XG4gICAgICAgIHsgeCA9IHhcbiAgICAgICAgLCB5ID0geVxuICAgICAgICB9XG5cbiAgICBwb2ludCA6IERlY29kZXIgUG9pbnRcbiAgICBwb2ludCA9XG4gICAgICAgIG1hcDIgbWFrZVBvaW50IChmaWVsZCBcInhcIiBmbG9hdCkgKGZpZWxkIFwieVwiIGZsb2F0KVxuXG4gICAgLS0gZGVjb2RlU3RyaW5nIHBvaW50IFwiXCJcInsgXCJ4XCI6IDMsIFwieVwiOiA0IH1cIlwiXCIgPT0gT2sgeyB4ID0gMywgeSA9IDQgfVxuXG5JdCB0cmllcyBlYWNoIGluZGl2aWR1YWwgZGVjb2RlciBhbmQgcHV0cyB0aGUgcmVzdWx0IHRvZ2V0aGVyIHdpdGggdGhlIGBQb2ludGBcbmNvbnN0cnVjdG9yLlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciB2YWx1ZVxubWFwMiA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXAyXG5cblxuey18IFRyeSB0aHJlZSBkZWNvZGVycyBhbmQgdGhlbiBjb21iaW5lIHRoZSByZXN1bHQuIFdlIGNhbiB1c2UgdGhpcyB0byBkZWNvZGVcbm9iamVjdHMgd2l0aCBtYW55IGZpZWxkczpcblxuXG4gICAgdHlwZSBhbGlhcyBQZXJzb24gPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmcsIGFnZSA6IEludCwgaGVpZ2h0IDogRmxvYXQgfVxuXG4gICAgbWFrZVBlcnNvbiA6IFN0cmluZyAtPiBJbnQgLT4gRmxvYXQgLT4gUGVyc29uXG4gICAgbWFrZVBlcnNvbiBuYW1lIGFnZSBoZWlnaHQgPVxuICAgICAgICB7IG5hbWUgPSBuYW1lXG4gICAgICAgICwgYWdlID0gYWdlXG4gICAgICAgICwgaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cblxuICAgIHBlcnNvbiA6IERlY29kZXIgUGVyc29uXG4gICAgcGVyc29uID1cbiAgICAgICAgbWFwMyBtYWtlUGVyc29uXG4gICAgICAgICAgICAoYXQgWyBcIm5hbWVcIiBdIHN0cmluZylcbiAgICAgICAgICAgIChhdCBbIFwiaW5mb1wiLCBcImFnZVwiIF0gaW50KVxuICAgICAgICAgICAgKGF0IFsgXCJpbmZvXCIsIFwiaGVpZ2h0XCIgXSBmbG9hdClcblxuICAgIC0tIGpzb24gPSBcIlwiXCJ7IFwibmFtZVwiOiBcInRvbVwiLCBcImluZm9cIjogeyBcImFnZVwiOiA0MiwgXCJoZWlnaHRcIjogMS44IH0gfVwiXCJcIlxuICAgIC0tIGRlY29kZVN0cmluZyBwZXJzb24ganNvbiA9PSBPayB7IG5hbWUgPSBcInRvbVwiLCBhZ2UgPSA0MiwgaGVpZ2h0ID0gMS44IH1cblxuTGlrZSBgbWFwMmAgaXQgdHJpZXMgZWFjaCBkZWNvZGVyIGluIG9yZGVyIGFuZCB0aGVuIGdpdmUgdGhlIHJlc3VsdHMgdG8gdGhlXG5gUGVyc29uYCBjb25zdHJ1Y3Rvci4gVGhhdCBjYW4gYmUgYW55IGZ1bmN0aW9uIHRob3VnaCFcblxuLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgdmFsdWVcbm1hcDMgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwM1xuXG5cbnstfCAtfVxubWFwNCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciB2YWx1ZVxubWFwNCA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA0XG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIHZhbHVlXG5tYXA1ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDVcblxuXG57LXwgLX1cbm1hcDYgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IGYgLT4gdmFsdWUpIC0+IERlY29kZXIgYSAtPiBEZWNvZGVyIGIgLT4gRGVjb2RlciBjIC0+IERlY29kZXIgZCAtPiBEZWNvZGVyIGUgLT4gRGVjb2RlciBmIC0+IERlY29kZXIgdmFsdWVcbm1hcDYgPVxuICAgIEdyZW4uS2VybmVsLkpzb24ubWFwNlxuXG5cbnstfCAtfVxubWFwNyA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IHZhbHVlKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiIC0+IERlY29kZXIgYyAtPiBEZWNvZGVyIGQgLT4gRGVjb2RlciBlIC0+IERlY29kZXIgZiAtPiBEZWNvZGVyIGcgLT4gRGVjb2RlciB2YWx1ZVxubWFwNyA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5tYXA3XG5cblxuey18IC19XG5tYXA4IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiB2YWx1ZSkgLT4gRGVjb2RlciBhIC0+IERlY29kZXIgYiAtPiBEZWNvZGVyIGMgLT4gRGVjb2RlciBkIC0+IERlY29kZXIgZSAtPiBEZWNvZGVyIGYgLT4gRGVjb2RlciBnIC0+IERlY29kZXIgaCAtPiBEZWNvZGVyIHZhbHVlXG5tYXA4ID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLm1hcDhcblxuXG5cbi0tIFJVTiBERUNPREVSU1xuXG5cbnstfCBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gYSBKU09OIHZhbHVlIGFuZCB0aGVuIHJ1biB0aGUgYERlY29kZXJgIG9uIGl0LlxuVGhpcyB3aWxsIGZhaWwgaWYgdGhlIHN0cmluZyBpcyBub3Qgd2VsbC1mb3JtZWQgSlNPTiBvciBpZiB0aGUgYERlY29kZXJgXG5mYWlscyBmb3Igc29tZSByZWFzb24uXG5cbiAgICBkZWNvZGVTdHJpbmcgaW50IFwiNFwiICAgICA9PSBPayA0XG4gICAgZGVjb2RlU3RyaW5nIGludCBcIjEgKyAyXCIgPT0gRXJyIC4uLlxuXG4tfVxuZGVjb2RlU3RyaW5nIDogRGVjb2RlciBhIC0+IFN0cmluZyAtPiBSZXN1bHQgRXJyb3IgYVxuZGVjb2RlU3RyaW5nID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnJ1bk9uU3RyaW5nXG5cblxuey18IFJ1biBhIGBEZWNvZGVyYCBvbiBzb21lIEpTT04gYFZhbHVlYC4gWW91IGNhbiBzZW5kIHRoZXNlIEpTT04gdmFsdWVzXG50aHJvdWdoIHBvcnRzLCBzbyB0aGF0IGlzIHByb2JhYmx5IHRoZSBtYWluIHRpbWUgeW91IHdvdWxkIHVzZSB0aGlzIGZ1bmN0aW9uLlxuLX1cbmRlY29kZVZhbHVlIDogRGVjb2RlciBhIC0+IFZhbHVlIC0+IFJlc3VsdCBFcnJvciBhXG5kZWNvZGVWYWx1ZSA9XG4gICAgR3Jlbi5LZXJuZWwuSnNvbi5ydW5cblxuXG57LXwgUmVwcmVzZW50cyBhIEphdmFTY3JpcHQgdmFsdWUuXG4tfVxudHlwZSBhbGlhcyBWYWx1ZSA9XG4gICAgSnNvbi5FbmNvZGUuVmFsdWVcblxuXG57LXwgQSBzdHJ1Y3R1cmVkIGVycm9yIGRlc2NyaWJpbmcgZXhhY3RseSBob3cgdGhlIGRlY29kZXIgZmFpbGVkLiBZb3UgY2FuIHVzZVxudGhpcyB0byBjcmVhdGUgbW9yZSBlbGFib3JhdGUgdmlzdWFsaXphdGlvbnMgb2YgYSBkZWNvZGVyIHByb2JsZW0uIEZvciBleGFtcGxlLFxueW91IGNvdWxkIHNob3cgdGhlIGVudGlyZSBKU09OIG9iamVjdCBhbmQgc2hvdyB0aGUgcGFydCBjYXVzaW5nIHRoZSBmYWlsdXJlIGluXG5yZWQuXG4tfVxudHlwZSBFcnJvclxuICAgID0gRmllbGQgeyBuYW1lIDogU3RyaW5nLCBlcnJvciA6IEVycm9yIH1cbiAgICB8IEluZGV4IHsgaW5kZXggOiBJbnQsIGVycm9yIDogRXJyb3IgfVxuICAgIHwgT25lT2YgKEFycmF5IEVycm9yKVxuICAgIHwgRmFpbHVyZSB7IG1lc3NhZ2UgOiBTdHJpbmcsIHZhbHVlIDogVmFsdWUgfVxuXG5cbnstfCBDb252ZXJ0IGEgZGVjb2RpbmcgZXJyb3IgaW50byBhIGBTdHJpbmdgIHRoYXQgaXMgbmljZSBmb3IgZGVidWdnaW5nLlxuXG5JdCBwcm9kdWNlcyBtdWx0aXBsZSBsaW5lcyBvZiBvdXRwdXQsIHNvIHlvdSBtYXkgd2FudCB0byBwZWVrIGF0IGl0IHdpdGhcbnNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSHRtbFxuICAgIGltcG9ydCBKc29uLkRlY29kZSBhcyBEZWNvZGVcblxuICAgIGVycm9yVG9IdG1sIDogRGVjb2RlLkVycm9yIC0+IEh0bWwuSHRtbCBtc2dcbiAgICBlcnJvclRvSHRtbCBlcnJvciA9XG4gICAgICAgIEh0bWwucHJlIFtdIFsgSHRtbC50ZXh0IChEZWNvZGUuZXJyb3JUb1N0cmluZyBlcnJvcikgXVxuXG4qKk5vdGU6KiogSXQgd291bGQgYmUgY29vbCB0byBkbyBuaWNlciBjb2xvcmluZyBhbmQgZmFuY2llciBIVE1MLCBidXQgSSB3YW50ZWRcbnRvIGF2b2lkIGhhdmluZyBhbiBgZWxtL2h0bWxgIGRlcGVuZGVuY3kgZm9yIG5vdy4gSXQgaXMgdG90YWxseSBwb3NzaWJsZSB0b1xuY3Jhd2wgdGhlIGBFcnJvcmAgc3RydWN0dXJlIGFuZCBjcmVhdGUgdGhpcyBzZXBhcmF0ZWx5IHRob3VnaCFcblxuLX1cbmVycm9yVG9TdHJpbmcgOiBFcnJvciAtPiBTdHJpbmdcbmVycm9yVG9TdHJpbmcgZXJyb3IgPVxuICAgIGVycm9yVG9TdHJpbmdIZWxwIGVycm9yIFtdXG5cblxuZXJyb3JUb1N0cmluZ0hlbHAgOiBFcnJvciAtPiBBcnJheSBTdHJpbmcgLT4gU3RyaW5nXG5lcnJvclRvU3RyaW5nSGVscCBlcnJvciBjb250ZXh0ID1cbiAgICB3aGVuIGVycm9yIGlzXG4gICAgICAgIEZpZWxkIHsgbmFtZSA9IGYsIGVycm9yID0gZXJyIH0gLT5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIGlzU2ltcGxlID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBTdHJpbmcucG9wRmlyc3QgZiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBmaXJzdCA9IGNoYXIsIHJlc3QgfSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXIuaXNBbHBoYSBjaGFyICYmIFN0cmluZy5hbGwgQ2hhci5pc0FscGhhTnVtIHJlc3RcblxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIGlmIGlzU2ltcGxlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsrIGZcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlsnXCIgKysgZiArKyBcIiddXCJcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgKFsgZmllbGROYW1lIF0gKysgY29udGV4dClcblxuICAgICAgICBJbmRleCB7IGluZGV4ID0gaSwgZXJyb3IgPSBlcnIgfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW5kZXhOYW1lID1cbiAgICAgICAgICAgICAgICAgICAgXCJbXCIgKysgU3RyaW5nLmZyb21JbnQgaSArKyBcIl1cIlxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIGVycm9yVG9TdHJpbmdIZWxwIGVyciAoWyBpbmRleE5hbWUgXSArKyBjb250ZXh0KVxuXG4gICAgICAgIE9uZU9mIGVycm9ycyAtPlxuICAgICAgICAgICAgd2hlbiBlcnJvcnMgaXNcbiAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICBcIlJhbiBpbnRvIGEgSnNvbi5EZWNvZGUub25lT2Ygd2l0aCBubyBwb3NzaWJpbGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrICh3aGVuIGNvbnRleHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgWyBlcnIgXSAtPlxuICAgICAgICAgICAgICAgICAgICBlcnJvclRvU3RyaW5nSGVscCBlcnIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29udGV4dCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKc29uLkRlY29kZS5vbmVPZlwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgSnNvbi5EZWNvZGUub25lT2YgYXQganNvblwiICsrIFN0cmluZy5qb2luIFwiXCIgY29udGV4dFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRyb2R1Y3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXIgKysgXCIgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgXCIgKysgU3RyaW5nLmZyb21JbnQgKEFycmF5Lmxlbmd0aCBlcnJvcnMpICsrIFwiIHdheXM6XCJcbiAgICAgICAgICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmpvaW4gXCJcXG5cXG5cIiAoWyBpbnRyb2R1Y3Rpb24gXSArKyBBcnJheS5pbmRleGVkTWFwIGVycm9yT25lT2YgZXJyb3JzKVxuXG4gICAgICAgIEZhaWx1cmUgeyBtZXNzYWdlID0gbXNnLCB2YWx1ZSA9IGpzb24gfSAtPlxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgaW50cm9kdWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBjb250ZXh0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG5cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb25cIiArKyBTdHJpbmcuam9pbiBcIlwiIGNvbnRleHQgKysgXCI6XFxuXFxuICAgIFwiXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgaW50cm9kdWN0aW9uICsrIGluZGVudCAoSnNvbi5FbmNvZGUuZW5jb2RlIDQganNvbikgKysgXCJcXG5cXG5cIiArKyBtc2dcblxuXG5lcnJvck9uZU9mIDogSW50IC0+IEVycm9yIC0+IFN0cmluZ1xuZXJyb3JPbmVPZiBpIGVycm9yID1cbiAgICBcIlxcblxcbihcIiArKyBTdHJpbmcuZnJvbUludCAoaSArIDEpICsrIFwiKSBcIiArKyBpbmRlbnQgKGVycm9yVG9TdHJpbmcgZXJyb3IpXG5cblxuaW5kZW50IDogU3RyaW5nIC0+IFN0cmluZ1xuaW5kZW50IHN0ciA9XG4gICAgU3RyaW5nLmpvaW4gXCJcXG4gICAgXCIgKFN0cmluZy5zcGxpdCBcIlxcblwiIHN0cilcblxuXG5cbi0tIEZBTkNZIFBSSU1JVElWRVNcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBwcm9kdWNlIGEgY2VydGFpbiBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChzdWNjZWVkIDQyKSBcInRydWVcIiAgICA9PSBPayA0MlxuICAgIGRlY29kZVN0cmluZyAoc3VjY2VlZCA0MikgXCJbMSwyLDNdXCIgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKHN1Y2NlZWQgNDIpIFwiaGVsbG9cIiAgID09IEVyciAuLi4gLS0gdGhpcyBpcyBub3QgYSB2YWxpZCBKU09OIHN0cmluZ1xuXG5UaGlzIGlzIGhhbmR5IHdoZW4gdXNlZCB3aXRoIGBvbmVPZmAgb3IgYGFuZFRoZW5gLlxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gRGVjb2RlciBhXG5zdWNjZWVkID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLnN1Y2NlZWRcblxuXG57LXwgSWdub3JlIHRoZSBKU09OIGFuZCBtYWtlIHRoZSBkZWNvZGVyIGZhaWwuIFRoaXMgaXMgaGFuZHkgd2hlbiB1c2VkIHdpdGhcbmBvbmVPZmAgb3IgYGFuZFRoZW5gIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgYSBjdXN0b20gZXJyb3IgbWVzc2FnZSBpbiBzb21lXG5jYXNlLlxuXG5TZWUgdGhlIFtgYW5kVGhlbmBdKCNhbmRUaGVuKSBkb2NzIGZvciBhbiBleGFtcGxlLlxuXG4tfVxuZmFpbCA6IFN0cmluZyAtPiBEZWNvZGVyIGFcbmZhaWwgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZmFpbFxuXG5cbnstfCBDcmVhdGUgZGVjb2RlcnMgdGhhdCBkZXBlbmQgb24gcHJldmlvdXMgcmVzdWx0cy4gSWYgeW91IGFyZSBjcmVhdGluZ1xudmVyc2lvbmVkIGRhdGEsIHlvdSBtaWdodCBkbyBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXG5cbiAgICBpbmZvIDogRGVjb2RlciBJbmZvXG4gICAgaW5mbyA9XG4gICAgICAgIGZpZWxkIFwidmVyc2lvblwiIGludFxuICAgICAgICAgICAgfD4gYW5kVGhlbiBpbmZvSGVscFxuXG4gICAgaW5mb0hlbHAgOiBJbnQgLT4gRGVjb2RlciBJbmZvXG4gICAgaW5mb0hlbHAgdmVyc2lvbiA9XG4gICAgICAgIHdoZW4gdmVyc2lvbiBpc1xuICAgICAgICAgICAgNCAtPlxuICAgICAgICAgICAgICAgIGluZm9EZWNvZGVyNFxuXG4gICAgICAgICAgICAzIC0+XG4gICAgICAgICAgICAgICAgaW5mb0RlY29kZXIzXG5cbiAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICBmYWlsIDx8XG4gICAgICAgICAgICAgICAgICAgIFwiVHJ5aW5nIHRvIGRlY29kZSBpbmZvLCBidXQgdmVyc2lvbiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKysgdG9TdHJpbmcgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgKysgXCIgaXMgbm90IHN1cHBvcnRlZC5cIlxuXG4gICAgLS0gaW5mb0RlY29kZXI0IDogRGVjb2RlciBJbmZvXG4gICAgLS0gaW5mb0RlY29kZXIzIDogRGVjb2RlciBJbmZvXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gRGVjb2RlciBiKSAtPiBEZWNvZGVyIGEgLT4gRGVjb2RlciBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmFuZFRoZW5cblxuXG57LXwgU29tZXRpbWVzIHlvdSBoYXZlIEpTT04gd2l0aCByZWN1cnNpdmUgc3RydWN0dXJlLCBsaWtlIG5lc3RlZCBjb21tZW50cy5cbllvdSBjYW4gdXNlIGBsYXp5YCB0byBtYWtlIHN1cmUgeW91ciBkZWNvZGVyIHVucm9sbHMgbGF6aWx5LlxuXG4gICAgdHlwZSBhbGlhcyBDb21tZW50ID1cbiAgICAgICAgeyBtZXNzYWdlIDogU3RyaW5nXG4gICAgICAgICwgcmVzcG9uc2VzIDogUmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIG1ha2VDb21tZW50IDogU3RyaW5nIC0+IFJlc3BvbnNlcyAtPiBDb21tZW50XG4gICAgbWFrZUNvbW1lbnQgbWVzc2FnZSByZXNwb25zZXMgPVxuICAgICAgICB7IG1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAgICwgcmVzcG9uc2VzID0gcmVzcG9uc2VzXG4gICAgICAgIH1cblxuICAgIHR5cGUgUmVzcG9uc2VzXG4gICAgICAgID0gUmVzcG9uc2VzIChBcnJheSBDb21tZW50KVxuXG4gICAgY29tbWVudCA6IERlY29kZXIgQ29tbWVudFxuICAgIGNvbW1lbnQgPVxuICAgICAgICBtYXAyIG1ha2VDb21tZW50XG4gICAgICAgICAgICAoZmllbGQgXCJtZXNzYWdlXCIgc3RyaW5nKVxuICAgICAgICAgICAgKGZpZWxkIFwicmVzcG9uc2VzXCIgKG1hcCBSZXNwb25zZXMgKGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpKSkpXG5cbklmIHdlIGhhZCBzYWlkIGBhcnJheSBjb21tZW50YCBpbnN0ZWFkLCB3ZSB3b3VsZCBzdGFydCBleHBhbmRpbmcgdGhlIHZhbHVlXG5pbmZpbml0ZWx5LiBXaGF0IGlzIGEgYGNvbW1lbnRgPyBJdCBpcyBhIGRlY29kZXIgZm9yIG9iamVjdHMgd2hlcmUgdGhlXG5gcmVzcG9uc2VzYCBmaWVsZCBjb250YWlucyBjb21tZW50cy4gV2hhdCBpcyBhIGBjb21tZW50YCB0aG91Z2g/IEV0Yy5cblxuQnkgdXNpbmcgYGFycmF5IChsYXp5IChcXF8gLT4gY29tbWVudCkpYCB3ZSBtYWtlIHN1cmUgdGhlIGRlY29kZXIgb25seSBleHBhbmRzXG50byBiZSBhcyBkZWVwIGFzIHRoZSBKU09OIHdlIGFyZSBnaXZlbi4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgcmVjdXJzaXZlIGRhdGFcbnN0cnVjdHVyZXMgW2hlcmVdLlxuXG5baGVyZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29tcGlsZXIvYmxvYi9tYXN0ZXIvaGludHMvcmVjdXJzaXZlLWFsaWFzLm1kXG5cbi19XG5sYXp5IDogKHt9IC0+IERlY29kZXIgYSkgLT4gRGVjb2RlciBhXG5sYXp5IHRodW5rID1cbiAgICBhbmRUaGVuIHRodW5rIChzdWNjZWVkIHt9KVxuXG5cbnstfCBEbyBub3QgZG8gYW55dGhpbmcgd2l0aCBhIEpTT04gdmFsdWUsIGp1c3QgYnJpbmcgaXQgaW50byBHcmVuIGFzIGEgYFZhbHVlYC5cblRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBwYXJ0aWN1bGFybHkgY29tcGxleCBkYXRhIHRoYXQgeW91IHdvdWxkIGxpa2UgdG9cbmRlYWwgd2l0aCBsYXRlci4gT3IgaWYgeW91IGFyZSBnb2luZyB0byBzZW5kIGl0IG91dCBhIHBvcnQgYW5kIGRvIG5vdCBjYXJlXG5hYm91dCBpdHMgc3RydWN0dXJlLlxuLX1cbnZhbHVlIDogRGVjb2RlciBWYWx1ZVxudmFsdWUgPVxuICAgIEdyZW4uS2VybmVsLkpzb24uZGVjb2RlVmFsdWVcblxuXG57LXwgRGVjb2RlIGEgYG51bGxgIHZhbHVlIGludG8gc29tZSBHcmVuIHZhbHVlLlxuXG4gICAgZGVjb2RlU3RyaW5nIChudWxsIEZhbHNlKSBcIm51bGxcIiA9PSBPayBGYWxzZVxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJudWxsXCIgICAgPT0gT2sgNDJcbiAgICBkZWNvZGVTdHJpbmcgKG51bGwgNDIpIFwiNDJcIiAgICAgID09IEVyciAuLlxuICAgIGRlY29kZVN0cmluZyAobnVsbCA0MikgXCJmYWxzZVwiICAgPT0gRXJyIC4uXG5cblNvIGlmIHlvdSBldmVyIHNlZSBhIGBudWxsYCwgdGhpcyB3aWxsIHJldHVybiB3aGF0ZXZlciB2YWx1ZSB5b3Ugc3BlY2lmaWVkLlxuXG4tfVxubnVsbCA6IGEgLT4gRGVjb2RlciBhXG5udWxsID1cbiAgICBHcmVuLktlcm5lbC5Kc29uLmRlY29kZU51bGxcbiIsCiAgICAgICAgIm1vZHVsZSBDaGFyIGV4cG9zaW5nXG4gICAgKCBDaGFyXG4gICAgLCBpc1VwcGVyLCBpc0xvd2VyLCBpc0FscGhhLCBpc0FscGhhTnVtXG4gICAgLCBpc0RpZ2l0LCBpc09jdERpZ2l0LCBpc0hleERpZ2l0XG4gICAgLCB0b0NvZGUsIGZyb21Db2RlXG4gICAgKVxuXG57LXwgRnVuY3Rpb25zIGZvciB3b3JraW5nIHdpdGggY2hhcmFjdGVycy4gQ2hhcmFjdGVyIGxpdGVyYWxzIGFyZSBlbmNsb3NlZCBpblxuYCdhJ2AgcGFpciBvZiBzaW5nbGUgcXVvdGVzLlxuXG5cbkBkb2NzIENoYXJcblxuXG4jIyBBU0NJSSBMZXR0ZXJzXG5cbkBkb2NzIGlzVXBwZXIsIGlzTG93ZXIsIGlzQWxwaGEsIGlzQWxwaGFOdW1cblxuXG4jIyBEaWdpdHNcblxuQGRvY3MgaXNEaWdpdCwgaXNPY3REaWdpdCwgaXNIZXhEaWdpdFxuXG5cbiMjIFVuaWNvZGUgQ29kZSBQb2ludHNcblxuQGRvY3MgdG9Db2RlLCBmcm9tQ29kZVxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICgoJiYpLCAoPD0pLCAoPj0pLCAofHwpLCBCb29sLCBJbnQpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuQ2hhclxuXG5cblxuLS0gQ0hBUlxuXG5cbnstfCBBIGBDaGFyYCBpcyBhIHNpbmdsZSBbdW5pY29kZV1bdV0gY2hhcmFjdGVyOlxuXG4gICAgJ2EnXG5cbiAgICAnMCdcblxuICAgICdaJ1xuXG4gICAgJz8nXG5cbiAgICAnXCInXG5cbiAgICAnzqMnXG5cbiAgICAn8J+ZiCdcblxuICAgICdcXHQnXG5cbiAgICAnXCInXG5cbiAgICAnXFwnJ1xuXG4gICAgJ/CfmYgnIC0tICfwn5mIJ1xuXG4qKk5vdGUgMToqKiBZb3UgX2Nhbm5vdF8gdXNlIHNpbmdsZSBxdW90ZXMgYXJvdW5kIG11bHRpcGxlIGNoYXJhY3RlcnMgbGlrZSBpblxuSmF2YVNjcmlwdC4gVGhpcyBpcyBob3cgd2UgZGlzdGluZ3Vpc2ggW2BTdHJpbmdgXShTdHJpbmcjU3RyaW5nKSBhbmQgYENoYXJgXG52YWx1ZXMgaW4gc3ludGF4LlxuXG4qKk5vdGUgMjoqKiBZb3UgY2FuIHVzZSB0aGUgdW5pY29kZSBlc2NhcGVzIGZyb20gYFxcdXswMDAwfWAgdG8gYFxcdXsxMEZGRkZ9YCB0b1xucmVwcmVzZW50IGNoYXJhY3RlcnMgYnkgdGhlaXIgY29kZSBwb2ludC4gWW91IGNhbiBhbHNvIGluY2x1ZGUgdGhlIHVuaWNvZGVcbmNoYXJhY3RlcnMgZGlyZWN0bHkuIFVzaW5nIHRoZSBlc2NhcGVzIGNhbiBiZSBiZXR0ZXIgaWYgeW91IG5lZWQgb25lIG9mIHRoZVxubWFueSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2l0aCBkaWZmZXJlbnQgd2lkdGhzLlxuXG5bdV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaWNvZGVcblxuLX1cbnR5cGUgQ2hhclxuICAgID0gQ2hhciAtLSBOT1RFOiBUaGUgY29tcGlsZXIgcHJvdmlkZXMgdGhlIHJlYWwgaW1wbGVtZW50YXRpb24uXG5cblxuXG4tLSBDTEFTU0lGSUNBVElPTlxuXG5cbnstfCBEZXRlY3QgdXBwZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gICAgaXNVcHBlciAnQScgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnQidcbiAgICAgICAgPT0gVHJ1ZVxuICAgICAgICAuLi4gaXNVcHBlciAnWidcbiAgICAgICAgPT0gVHJ1ZVxuXG4gICAgaXNVcHBlciAnMCcgPT0gRmFsc2VcblxuICAgIGlzVXBwZXIgJ2EnID09IEZhbHNlXG5cbiAgICBpc1VwcGVyICctJyA9PSBGYWxzZVxuXG4gICAgaXNVcHBlciAnzqMnID09IEZhbHNlXG5cbi19XG5pc1VwcGVyIDogQ2hhciAtPiBCb29sXG5pc1VwcGVyIGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4NUEgJiYgMHg0MSA8PSBjb2RlXG5cblxuey18IERldGVjdCBsb3dlciBjYXNlIEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgICBpc0xvd2VyICdhJyA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICdiJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc0xvd2VyICd6J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc0xvd2VyICcwJyA9PSBGYWxzZVxuXG4gICAgaXNMb3dlciAnQScgPT0gRmFsc2VcblxuICAgIGlzTG93ZXIgJy0nID09IEZhbHNlXG5cbiAgICBpc0xvd2VyICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzTG93ZXIgOiBDaGFyIC0+IEJvb2xcbmlzTG93ZXIgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4N0FcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGEgJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ2InID09IFRydWVcblxuICAgIGlzQWxwaGEgJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGEgJ1knID09IFRydWVcblxuICAgIGlzQWxwaGEgJzAnID09IEZhbHNlXG5cbiAgICBpc0FscGhhICctJyA9PSBGYWxzZVxuXG4gICAgaXNBbHBoYSAnz4AnID09IEZhbHNlXG5cbi19XG5pc0FscGhhIDogQ2hhciAtPiBCb29sXG5pc0FscGhhIGNoYXIgPVxuICAgIGlzTG93ZXIgY2hhciB8fCBpc1VwcGVyIGNoYXJcblxuXG57LXwgRGV0ZWN0IHVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgQVNDSUkgY2hhcmFjdGVycy5cblxuICAgIGlzQWxwaGFOdW0gJ2EnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ2InID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ0UnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJ1knID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzAnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJzcnID09IFRydWVcblxuICAgIGlzQWxwaGFOdW0gJy0nID09IEZhbHNlXG5cbiAgICBpc0FscGhhTnVtICfPgCcgPT0gRmFsc2VcblxuLX1cbmlzQWxwaGFOdW0gOiBDaGFyIC0+IEJvb2xcbmlzQWxwaGFOdW0gY2hhciA9XG4gICAgaXNMb3dlciBjaGFyIHx8IGlzVXBwZXIgY2hhciB8fCBpc0RpZ2l0IGNoYXJcblxuXG57LXwgRGV0ZWN0IGRpZ2l0cyBgMDEyMzQ1Njc4OWBcblxuICAgIGlzRGlnaXQgJzAnID09IFRydWVcblxuICAgIGlzRGlnaXQgJzEnXG4gICAgICAgID09IFRydWVcbiAgICAgICAgLi4uIGlzRGlnaXQgJzknXG4gICAgICAgID09IFRydWVcblxuICAgIGlzRGlnaXQgJ2EnID09IEZhbHNlXG5cbiAgICBpc0RpZ2l0ICdiJyA9PSBGYWxzZVxuXG4gICAgaXNEaWdpdCAnQScgPT0gRmFsc2VcblxuLX1cbmlzRGlnaXQgOiBDaGFyIC0+IEJvb2xcbmlzRGlnaXQgY2hhciA9XG4gICAgbGV0XG4gICAgICAgIGNvZGUgPVxuICAgICAgICAgICAgdG9Db2RlIGNoYXJcbiAgICBpblxuICAgIGNvZGUgPD0gMHgzOSAmJiAweDMwIDw9IGNvZGVcblxuXG57LXwgRGV0ZWN0IG9jdGFsIGRpZ2l0cyBgMDEyMzQ1NjdgXG5cbiAgICBpc09jdERpZ2l0ICcwJyA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICcxJ1xuICAgICAgICA9PSBUcnVlXG4gICAgICAgIC4uLiBpc09jdERpZ2l0ICc3J1xuICAgICAgICA9PSBUcnVlXG5cbiAgICBpc09jdERpZ2l0ICc4JyA9PSBGYWxzZVxuXG4gICAgaXNPY3REaWdpdCAnYScgPT0gRmFsc2VcblxuICAgIGlzT2N0RGlnaXQgJ0EnID09IEZhbHNlXG5cbi19XG5pc09jdERpZ2l0IDogQ2hhciAtPiBCb29sXG5pc09jdERpZ2l0IGNoYXIgPVxuICAgIGxldFxuICAgICAgICBjb2RlID1cbiAgICAgICAgICAgIHRvQ29kZSBjaGFyXG4gICAgaW5cbiAgICBjb2RlIDw9IDB4MzcgJiYgMHgzMCA8PSBjb2RlXG5cblxuey18IERldGVjdCBoZXhhZGVjaW1hbCBkaWdpdHMgYDAxMjM0NTY3ODlhYmNkZWZBQkNERUZgXG4tfVxuaXNIZXhEaWdpdCA6IENoYXIgLT4gQm9vbFxuaXNIZXhEaWdpdCBjaGFyID1cbiAgICBsZXRcbiAgICAgICAgY29kZSA9XG4gICAgICAgICAgICB0b0NvZGUgY2hhclxuICAgIGluXG4gICAgKDB4MzAgPD0gY29kZSAmJiBjb2RlIDw9IDB4MzkpXG4gICAgICAgIHx8ICgweDQxIDw9IGNvZGUgJiYgY29kZSA8PSAweDQ2KVxuICAgICAgICB8fCAoMHg2MSA8PSBjb2RlICYmIGNvZGUgPD0gMHg2NilcblxuXG5cbi0tIENPTlZFUlNJT05TXG5cblxuey18IENvbnZlcnQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgVW5pY29kZSBbY29kZSBwb2ludF1bY3BdLlxuXG5bY3BdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db2RlX3BvaW50XG5cbiAgICB0b0NvZGUgJ0EnID09IDY1XG5cbiAgICB0b0NvZGUgJ0InID09IDY2XG5cbiAgICB0b0NvZGUgJ+acqCcgPT0gMHg2NzI4XG5cbiAgICB0b0NvZGUgJ/CdjIYnID09IDB4MDAwMUQzMDZcblxuICAgIHRvQ29kZSAn8J+YgycgPT0gMHgwMDAxRjYwM1xuXG4tfVxudG9Db2RlIDogQ2hhciAtPiBJbnRcbnRvQ29kZSA9XG4gICAgR3Jlbi5LZXJuZWwuQ2hhci50b0NvZGVcblxuXG57LXwgQ29udmVydCBhIFVuaWNvZGUgW2NvZGUgcG9pbnRdW2NwXSB0byBhIGNoYXJhY3Rlci5cblxuICAgIGZyb21Db2RlIDY1ID09ICdBJ1xuXG4gICAgZnJvbUNvZGUgNjYgPT0gJ0InXG5cbiAgICBmcm9tQ29kZSAweDY3MjggPT0gJ+acqCdcblxuICAgIGZyb21Db2RlIDB4MDAwMUQzMDYgPT0gJ/CdjIYnXG5cbiAgICBmcm9tQ29kZSAweDAwMDFGNjAzID09ICfwn5iDJ1xuXG4gICAgZnJvbUNvZGUgLTEgPT0gJ++/vSdcblxuVGhlIGZ1bGwgcmFuZ2Ugb2YgdW5pY29kZSBpcyBmcm9tIGAwYCB0byBgMHgxMEZGRkZgLiBXaXRoIG51bWJlcnMgb3V0c2lkZSB0aGF0XG5yYW5nZSwgeW91IGdldCBbdGhlIHJlcGxhY2VtZW50IGNoYXJhY3Rlcl1bZmZmZF0uXG5cbltjcF06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvZGVfcG9pbnRcbltmZmZkXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spI1JlcGxhY2VtZW50X2NoYXJhY3RlclxuXG4tfVxuZnJvbUNvZGUgOiBJbnQgLT4gQ2hhclxuZnJvbUNvZGUgPVxuICAgIEdyZW4uS2VybmVsLkNoYXIuZnJvbUNvZGVcbiIsCiAgICAgICAgIm1vZHVsZSBSZXN1bHQgZXhwb3NpbmdcbiAgICAoIFJlc3VsdCguLilcbiAgICAsIGhhc1ZhbHVlLCBjaGVja1ZhbHVlLCBmaXJzdE9rLCBhbGxPa1xuICAgICwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBhbmRUaGVuLCBvbkVycm9yXG4gICAgLCB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCB0b01heWJlLCBmcm9tTWF5YmUsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgQSBgUmVzdWx0YCBpcyB0aGUgcmVzdWx0IG9mIGEgY29tcHV0YXRpb24gdGhhdCBtYXkgZmFpbC4gVGhpcyBpcyBhIGdyZWF0XG53YXkgdG8gbWFuYWdlIGVycm9ycyBpbiBHcmVuLlxuXG5AZG9jcyBSZXN1bHRcblxuXG4jIyBRdWVyeVxuXG5AZG9jcyBoYXNWYWx1ZSwgY2hlY2tWYWx1ZSwgZmlyc3RPaywgYWxsT2tcblxuXG4jIyBNYXBwaW5nXG5cbkBkb2NzIG1hcCwgbWFwMiwgbWFwMywgbWFwNCwgbWFwNVxuXG5cbiMjIENoYWluaW5nXG5cbkBkb2NzIGFuZFRoZW4sIG9uRXJyb3JcblxuXG4jIyBIYW5kbGluZyBFcnJvcnNcblxuQGRvY3Mgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgdG9NYXliZSwgZnJvbU1heWJlLCBtYXBFcnJvclxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nICguLilcbmltcG9ydCBNYXliZSBleHBvc2luZyAoTWF5YmUoLi4pKVxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcblxuXG57LXwgQSBgUmVzdWx0YCBpcyBlaXRoZXIgYE9rYCBtZWFuaW5nIHRoZSBjb21wdXRhdGlvbiBzdWNjZWVkZWQsIG9yIGl0IGlzIGFuXG5gRXJyYCBtZWFuaW5nIHRoYXQgdGhlcmUgd2FzIHNvbWUgZmFpbHVyZS5cbi19XG50eXBlIFJlc3VsdCBlcnJvciB2YWx1ZVxuICAgID0gT2sgdmFsdWVcbiAgICB8IEVyciBlcnJvclxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBtYXRjaGVzIHRoZSBwcm92aWRlZCB2YWx1ZS5cblxuICAgIFJlc3VsdC5oYXNWYWx1ZSAxMjMgKE9rIDEyMykgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0Lmhhc1ZhbHVlIDEyMyAoT2sgNSkgPT0gRmFsc2VcbiAgICBcbiAgICBSZXN1bHQuaGFzVmFsdWUgMTIzIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmhhc1ZhbHVlIDogYSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmhhc1ZhbHVlIHZhbHVlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYSA9PSB2YWx1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBJZiB0aGUgcmVzdWx0IGlzIGBPa2AgY2hlY2sgaWYgdGhlIGNvbnRhaW5lZCB2YWx1ZSBwYXNzZXMgdGhlIHByb3ZpZGVkIHRlc3QuXG5cbiAgICBSZXN1bHQuY2hlY2tWYWx1ZSBpc09kZCAoT2sgNSkgPT0gVHJ1ZVxuXG4gICAgUmVzdWx0LmNoZWNrVmFsdWUgaXNPZGQgKE9rIDEyKSA9PSBGYWxzZVxuICAgIFxuICAgIFJlc3VsdC5jaGVja1ZhbHVlIGlzT2RkIChFcnIgXCJmYWlsZWRcIikgPT0gRmFsc2VcblxuLX1cbmNoZWNrVmFsdWUgOiAoYSAtPiBCb29sKSAtPiBSZXN1bHQgeCBhIC0+IEJvb2xcbmNoZWNrVmFsdWUgdGVzdCByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHRlc3QgYSBcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgRmFsc2VcblxuXG57LXwgUmV0dXJucyB0aGUgZmlyc3QgYE9rYCB2YWx1ZSBpbiBhbiBgQXJyYXlgIG9mIGBSZXN1bHRgcy5cblxuICAgIFJlc3VsdC5maXJzdE9rIFsgT2sgNSwgRXJyIDAsIE9rIDEwIF0gPT0gSnVzdCA1XG5cbiAgICBSZXN1bHQuZmlyc3RPayBbIEVyciAwLCBFcnIgMSBdID09IE5vdGhpbmdcblxuLX1cbmZpcnN0T2sgOiBBcnJheSAoUmVzdWx0IHggYSkgLT4gTWF5YmUgYVxuZmlyc3RPayBhcnJheSA9XG4gICAgQXJyYXkuZmluZEZpcnN0IGlzT2sgYXJyYXlcbiAgICAgICAgfD4gTWF5YmUubWFwIC52YWx1ZVxuICAgICAgICB8PiBNYXliZS5hbmRUaGVuIHRvTWF5YmVcblxuXG57LXwgQ29udmVydCBhbiBgQXJyYXlgIG9mIGBSZXN1bHQgZXJyIG9rYCB0byBgUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylgLiBZb3UnbGwgb25seVxucmVjZWl2ZSBhbiBgT2tgIGlmIHRoZXJlIGFyZSBubyBgRXJyYCB2YWx1ZXMgaW4gdGhlIGBBcnJheWAuXG5cbiAgICBSZXN1bHQuYWxsT2sgWyBPayA1LCBFcnIgMCwgT2sgMTAgXSA9PSBFcnIgWyAwIF1cblxuICAgIFJlc3VsdC5hbGxPayBbIE9rIDAsIE9rIDEgXSA9PSBPayBbIDAsIDEgXVxuXG4tfVxuYWxsT2sgOiBBcnJheSAoUmVzdWx0IGVyciBvaykgLT4gUmVzdWx0IChBcnJheSBlcnIpIChBcnJheSBvaylcbmFsbE9rIGFycmF5ID1cbiAgICBsZXRcbiAgICAgICAgZXJyb3JzID1cbiAgICAgICAgICAgIEFycmF5Lm1hcEFuZEtlZXBKdXN0IGVyclRvTWF5YmUgYXJyYXlcbiAgICBpblxuICAgIGlmIEFycmF5Lmxlbmd0aCBlcnJvcnMgPiAwIHRoZW5cbiAgICAgICAgRXJyIGVycm9yc1xuXG4gICAgZWxzZVxuICAgICAgICBPayA8fCBBcnJheS5tYXBBbmRLZWVwSnVzdCB0b01heWJlIGFycmF5XG5cblxuZXJyVG9NYXliZSA6IFJlc3VsdCBlcnIgb2sgLT4gTWF5YmUgZXJyXG5lcnJUb01heWJlIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEVyciBlcnIgLT5cbiAgICAgICAgICAgIEp1c3QgZXJyXG5cblxuey18IElmIHRoZSByZXN1bHQgaXMgYE9rYCByZXR1cm4gdGhlIHZhbHVlLCBidXQgaWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCB0aGVuXG5yZXR1cm4gYSBnaXZlbiBkZWZhdWx0IHZhbHVlLiBUaGUgZm9sbG93aW5nIGV4YW1wbGVzIHRyeSB0byBwYXJzZSBpbnRlZ2Vycy5cblxuICAgIFJlc3VsdC53aXRoRGVmYXVsdCAwIChPayAxMjMpID09IDEyM1xuXG4gICAgUmVzdWx0LndpdGhEZWZhdWx0IDAgKEVyciBcIm5vXCIpID09IDBcblxuLX1cbndpdGhEZWZhdWx0IDogYSAtPiBSZXN1bHQgeCBhIC0+IGFcbndpdGhEZWZhdWx0IGRlZiByZXN1bHQgPVxuICAgIHdoZW4gcmVzdWx0IGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIGFcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgZGVmXG5cblxuey18IFNhbWUgYXMgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIGZ1bmN0aW9uLlxuVGhpcyBsZXRzIHlvdSBhdm9pZCBjb21wdXRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaWYgaXQgaXNuJ3QgbmVjZXNzYXJ5LlxuXG4tfVxud2l0aERlZmF1bHRMYXp5IDogKHt9IC0+IGEpIC0+IFJlc3VsdCB4IGEgLT4gYVxud2l0aERlZmF1bHRMYXp5IHByb3ZpZGVyIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgYVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBwcm92aWRlciB7fVxuXG5cbnstfCBBcHBseSBhIGZ1bmN0aW9uIHRvIGEgcmVzdWx0LiBJZiB0aGUgcmVzdWx0IGlzIGBPa2AsIGl0IHdpbGwgYmUgY29udmVydGVkLlxuSWYgdGhlIHJlc3VsdCBpcyBhbiBgRXJyYCwgdGhlIHNhbWUgZXJyb3IgdmFsdWUgd2lsbCBwcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcCBzcXJ0IChPayA0LjApID09IE9rIDIuMFxuXG4gICAgbWFwIHNxcnQgKEVyciBcImJhZCBpbnB1dFwiKSA9PSBFcnIgXCJiYWQgaW5wdXRcIlxuXG4tfVxubWFwIDogKGEgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggdmFsdWVcbm1hcCBmdW5jIHJhID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIE9rIChmdW5jIGEpXG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciBlXG5cblxuey18IEFwcGx5IGEgZnVuY3Rpb24gaWYgYm90aCByZXN1bHRzIGFyZSBgT2tgLiBJZiBub3QsIHRoZSBmaXJzdCBgRXJyYCB3aWxsXG5wcm9wYWdhdGUgdGhyb3VnaC5cblxuICAgIG1hcDIgbWF4IChPayA0MikgKE9rIDEzKSA9PSBPayA0MlxuXG4gICAgbWFwMiBtYXggKEVyciBcInhcIikgKE9rIDEzKSA9PSBFcnIgXCJ4XCJcblxuICAgIG1hcDIgbWF4IChPayA0MikgKEVyciBcInlcIikgPT0gRXJyIFwieVwiXG5cbiAgICBtYXAyIG1heCAoRXJyIFwieFwiKSAoRXJyIFwieVwiKSA9PSBFcnIgXCJ4XCJcblxuVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIHR3byBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbCwgYW5kIHlvdSB3YW50XG50byBwdXQgdGhlbSB0b2dldGhlciBxdWlja2x5LlxuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IFJlc3VsdCB4IGEgLT4gUmVzdWx0IHggYiAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMiBmdW5jIHJhIHJiID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIpXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHZhbHVlKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGIgLT4gUmVzdWx0IHggYyAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwMyBmdW5jIHJhIHJiIHJjID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayAoZnVuYyBhIGIgYylcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCB2YWx1ZVxubWFwNCBmdW5jIHJhIHJiIHJjIHJkID1cbiAgICB3aGVuIHJhIGlzXG4gICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgIE9rIGEgLT5cbiAgICAgICAgICAgIHdoZW4gcmIgaXNcbiAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgT2sgYiAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHJjIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnIgeCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9rIGMgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHJkIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnIgeFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIGQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQpXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gUmVzdWx0IHggYSAtPiBSZXN1bHQgeCBiIC0+IFJlc3VsdCB4IGMgLT4gUmVzdWx0IHggZCAtPiBSZXN1bHQgeCBlIC0+IFJlc3VsdCB4IHZhbHVlXG5tYXA1IGZ1bmMgcmEgcmIgcmMgcmQgcmUgPVxuICAgIHdoZW4gcmEgaXNcbiAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgT2sgYSAtPlxuICAgICAgICAgICAgd2hlbiByYiBpc1xuICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICBPayBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gcmMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2sgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcmQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyIHggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2sgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiByZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVyciB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPayBlIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rIChmdW5jIGEgYiBjIGQgZSlcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSBzZXF1ZW5jZSBvZiBjb21wdXRhdGlvbnMgdGhhdCBtYXkgZmFpbC4gSXQgaXMgaGVscGZ1bFxudG8gc2VlIGl0cyBkZWZpbml0aW9uOlxuXG4gICAgYW5kVGhlbiA6IChhIC0+IFJlc3VsdCBlIGIpIC0+IFJlc3VsdCBlIGEgLT4gUmVzdWx0IGUgYlxuICAgIGFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICAgICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgICAgIE9rIHZhbHVlIC0+XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICAgICAgRXJyIG1zZyAtPlxuICAgICAgICAgICAgICAgIEVyciBtc2dcblxuVGhpcyBtZWFucyB3ZSBvbmx5IGNvbnRpbnVlIHdpdGggdGhlIGNhbGxiYWNrIGlmIHRoaW5ncyBhcmUgZ29pbmcgd2VsbC4gRm9yXG5leGFtcGxlLCBzYXkgeW91IG5lZWQgdG8gdXNlIChgdG9JbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRgKSB0byBwYXJzZVxuYSBtb250aCBhbmQgbWFrZSBzdXJlIGl0IGlzIGJldHdlZW4gMSBhbmQgMTI6XG5cblxuICAgIHRvVmFsaWRNb250aCA6IEludCAtPiBSZXN1bHQgU3RyaW5nIEludFxuICAgIHRvVmFsaWRNb250aCBtb250aCA9XG4gICAgICAgIGlmIG1vbnRoID49IDEgJiYgbW9udGggPD0gMTIgdGhlblxuICAgICAgICAgICAgT2sgbW9udGhcblxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuICAgIHRvTW9udGggOiBTdHJpbmcgLT4gUmVzdWx0IFN0cmluZyBJbnRcbiAgICB0b01vbnRoIHJhd1N0cmluZyA9XG4gICAgICAgIHRvSW50IHJhd1N0cmluZ1xuICAgICAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuICAgIC0tIHRvTW9udGggXCI0XCIgPT0gT2sgNFxuICAgIC0tIHRvTW9udGggXCI5XCIgPT0gT2sgOVxuICAgIC0tIHRvTW9udGggXCJhXCIgPT0gRXJyIFwiY2Fubm90IHBhcnNlIHRvIGFuIEludFwiXG4gICAgLS0gdG9Nb250aCBcIjBcIiA9PSBFcnIgXCJtb250aHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEyXCJcblxuVGhpcyBhbGxvd3MgdXMgdG8gY29tZSBvdXQgb2YgYSBjaGFpbiBvZiBvcGVyYXRpb25zIHdpdGggcXVpdGUgYSBzcGVjaWZpYyBlcnJvclxubWVzc2FnZS4gSXQgaXMgb2Z0ZW4gYmVzdCB0byBjcmVhdGUgYSBjdXN0b20gdHlwZSB0aGF0IGV4cGxpY2l0bHkgcmVwcmVzZW50c1xudGhlIGV4YWN0IHdheXMgeW91ciBjb21wdXRhdGlvbiBtYXkgZmFpbC4gVGhpcyB3YXkgaXQgaXMgZWFzeSB0byBoYW5kbGUgaW4geW91clxuY29kZS5cblxuLX1cbmFuZFRoZW4gOiAoYSAtPiBSZXN1bHQgeCBiKSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB4IGJcbmFuZFRoZW4gY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgY2FsbGJhY2sgdmFsdWVcblxuICAgICAgICBFcnIgbXNnIC0+XG4gICAgICAgICAgICBFcnIgbXNnXG5cblxuey18IFRoaXMgaXMgc2ltaWxhciB0byBbYW5kVGhlbl0oI2FuZFRoZW4pIGJ1dCB0aGUgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW5cbnRoZSBgUmVzdWx0YCBpcyBhbiBgRXJyYCB2YWx1ZS4gVGhpcyBnaXZlcyB5b3UgdGhlIG9wdGlvbiBvZiBkZWFsaW5nIHdpdGggZXJyb3JzXG5pbiBhIGNoYWluLlxuXG4gICAgdG9JbnQgXCJhXCJcbiAgICAgICAgfD4gb25FcnJvciAoXFxfbXNnIC0+IE9rIDEpIC0tIGRlZmF1bHRpbmcgdG8gZmlyc3QgbW9udGggb2YgdGhlIHllYXJcbiAgICAgICAgfD4gYW5kVGhlbiB0b1ZhbGlkTW9udGhcblxuLX1cbm9uRXJyb3IgOiAoYSAtPiBSZXN1bHQgYiB4KSAtPiBSZXN1bHQgYSB4IC0+IFJlc3VsdCBiIHhcbm9uRXJyb3IgY2FsbGJhY2sgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2YWx1ZSAtPlxuICAgICAgICAgICAgT2sgdmFsdWVcblxuICAgICAgICBFcnIgZXJyIC0+XG4gICAgICAgICAgICBjYWxsYmFjayBlcnJcblxuXG57LXwgVHJhbnNmb3JtIGFuIGBFcnJgIHZhbHVlLiBGb3IgZXhhbXBsZSwgc2F5IHRoZSBlcnJvcnMgd2UgZ2V0IGhhdmUgdG9vIG11Y2hcbmluZm9ybWF0aW9uOlxuXG4gICAgcGFyc2VJbnQgOiBTdHJpbmcgLT4gUmVzdWx0IFBhcnNlRXJyb3IgSW50XG5cbiAgICB0eXBlIGFsaWFzIFBhcnNlRXJyb3IgPVxuICAgICAgICB7IG1lc3NhZ2UgOiBTdHJpbmdcbiAgICAgICAgLCBjb2RlIDogSW50XG4gICAgICAgICwgcG9zaXRpb24gOiAoSW50LEludClcbiAgICAgICAgfVxuXG4gICAgbWFwRXJyb3IgLm1lc3NhZ2UgKHBhcnNlSW50IFwiMTIzXCIpID09IE9rIDEyM1xuICAgIG1hcEVycm9yIC5tZXNzYWdlIChwYXJzZUludCBcImFiY1wiKSA9PSBFcnIgXCJjaGFyICdhJyBpcyBub3QgYSBudW1iZXJcIlxuXG4tfVxubWFwRXJyb3IgOiAoeCAtPiB5KSAtPiBSZXN1bHQgeCBhIC0+IFJlc3VsdCB5IGFcbm1hcEVycm9yIGYgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBPayB2XG5cbiAgICAgICAgRXJyIGUgLT5cbiAgICAgICAgICAgIEVyciAoZiBlKVxuXG5cbnstfCBDb252ZXJ0IHRvIGEgc2ltcGxlciBgTWF5YmVgIGlmIHRoZSBhY3R1YWwgZXJyb3IgbWVzc2FnZSBpcyBub3QgbmVlZGVkIG9yXG55b3UgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseSB1c2VzIG1heWJlcy5cblxuICAgIHBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBQYXJzZUVycm9yIEludFxuXG4gICAgbWF5YmVQYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcbiAgICBtYXliZVBhcnNlSW50IHN0cmluZyA9XG4gICAgICAgIHRvTWF5YmUgKHBhcnNlSW50IHN0cmluZylcblxuLX1cbnRvTWF5YmUgOiBSZXN1bHQgeCBhIC0+IE1heWJlIGFcbnRvTWF5YmUgcmVzdWx0ID1cbiAgICB3aGVuIHJlc3VsdCBpc1xuICAgICAgICBPayB2IC0+XG4gICAgICAgICAgICBKdXN0IHZcblxuICAgICAgICBFcnIgXyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBDb252ZXJ0IGZyb20gYSBzaW1wbGUgYE1heWJlYCB0byBpbnRlcmFjdCB3aXRoIHNvbWUgY29kZSB0aGF0IHByaW1hcmlseVxudXNlcyBgUmVzdWx0c2AuXG5cbiAgICBwYXJzZUludCA6IFN0cmluZyAtPiBNYXliZSBJbnRcblxuICAgIHJlc3VsdFBhcnNlSW50IDogU3RyaW5nIC0+IFJlc3VsdCBTdHJpbmcgSW50XG4gICAgcmVzdWx0UGFyc2VJbnQgc3RyaW5nID1cbiAgICAgICAgZnJvbU1heWJlIChcImVycm9yIHBhcnNpbmcgc3RyaW5nOiBcIiArKyB0b1N0cmluZyBzdHJpbmcpIChwYXJzZUludCBzdHJpbmcpXG5cbi19XG5mcm9tTWF5YmUgOiB4IC0+IE1heWJlIGEgLT4gUmVzdWx0IHggYVxuZnJvbU1heWJlIGVyciBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHYgLT5cbiAgICAgICAgICAgIE9rIHZcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBFcnIgZXJyXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcbi0tXG4tLSBVc2UgYHdoZW5gIGV4cHJlc3Npb25zIGZvciB0aGlzIGluIEdyZW4gY29kZSFcblxuXG5pc09rIDogUmVzdWx0IHggYSAtPiBCb29sXG5pc09rIHJlc3VsdCA9XG4gICAgd2hlbiByZXN1bHQgaXNcbiAgICAgICAgT2sgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIEVyciBfIC0+XG4gICAgICAgICAgICBGYWxzZVxuIiwKICAgICAgICAibW9kdWxlIFZpcnR1YWxEb20gZXhwb3NpbmdcbiAgKCBOb2RlXG4gICwgdGV4dCwgbm9kZSwgbm9kZU5TXG4gICwgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcbiAgLCBvbiwgSGFuZGxlciguLilcbiAgLCBtYXAsIG1hcEF0dHJpYnV0ZVxuICAsIGtleWVkTm9kZSwga2V5ZWROb2RlTlNcbiAgLCBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuICApXG5cbnstfCBBUEkgdG8gdGhlIGNvcmUgZGlmZmluZyBhbGdvcml0aG0uIENhbiBzZXJ2ZSBhcyBhIGZvdW5kYXRpb24gZm9yIGxpYnJhcmllc1xudGhhdCBleHBvc2UgbW9yZSBoZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIG9yIFNWRy5cblxuIyMgQ3JlYXRlXG5AZG9jcyBOb2RlLCB0ZXh0LCBub2RlLCBub2RlTlNcblxuIyMgQXR0cmlidXRlc1xuQGRvY3MgQXR0cmlidXRlLCBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgYXR0cmlidXRlTlNcblxuIyMgRXZlbnRzXG5AZG9jcyBvbiwgSGFuZGxlclxuXG4jIyBSb3V0aW5nIE1lc3NhZ2VzXG5AZG9jcyBtYXAsIG1hcEF0dHJpYnV0ZVxuXG4jIyBLZXllZCBOb2Rlc1xuQGRvY3Mga2V5ZWROb2RlLCBrZXllZE5vZGVOU1xuXG4jIyBMYXp5IE5vZGVzXG5AZG9jcyBsYXp5LCBsYXp5MiwgbGF6eTMsIGxhenk0LCBsYXp5NSwgbGF6eTYsIGxhenk3LCBsYXp5OFxuXG4tfVxuXG5pbXBvcnQgR3Jlbi5LZXJuZWwuVmlydHVhbERvbVxuaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuXG57LXwgQW4gaW1tdXRhYmxlIGNodW5rIG9mIGRhdGEgcmVwcmVzZW50aW5nIGEgRE9NIG5vZGUuIFRoaXMgY2FuIGJlIEhUTUwgb3IgU1ZHLlxuLX1cbnR5cGUgTm9kZSBtc2cgPSBOb2RlXG5cblxuey18IENyZWF0ZSBhIERPTSBub2RlIHdpdGggYSB0YWcgbmFtZSwgYSBsaXN0IG9mIEhUTUwgcHJvcGVydGllcyB0aGF0IGNhblxuaW5jbHVkZSBzdHlsZXMgYW5kIGV2ZW50IGxpc3RlbmVycywgYSBsaXN0IG9mIENTUyBwcm9wZXJ0aWVzIGxpa2UgYGNvbG9yYCwgYW5kXG5hIGxpc3Qgb2YgY2hpbGQgbm9kZXMuXG5cbiAgICBpbXBvcnQgSnNvbi5FbmNvZGUgYXMgSnNvblxuXG4gICAgaGVsbG8gOiBOb2RlIG1zZ1xuICAgIGhlbGxvID1cbiAgICAgIG5vZGUgXCJkaXZcIiBbXSBbIHRleHQgXCJIZWxsbyFcIiBdXG5cbiAgICBncmVldGluZyA6IE5vZGUgbXNnXG4gICAgZ3JlZXRpbmcgPVxuICAgICAgbm9kZSBcImRpdlwiXG4gICAgICAgIFsgcHJvcGVydHkgXCJpZFwiIChKc29uLnN0cmluZyBcImdyZWV0aW5nXCIpIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCIgXVxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChOb2RlIG1zZykgLT4gTm9kZSBtc2dcbm5vZGUgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vU2NyaXB0IHRhZylcblxuXG57LXwgQ3JlYXRlIGEgbmFtZXNwYWNlZCBET00gbm9kZS4gRm9yIGV4YW1wbGUsIGFuIFNWRyBgPHBhdGg+YCBub2RlIGNvdWxkIGJlXG5kZWZpbmVkIGxpa2UgdGhpczpcblxuICAgIHBhdGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKE5vZGUgbXNnKSAtPiBOb2RlIG1zZ1xuICAgIHBhdGggYXR0cnVidXRlcyBjaGlsZHJlbiA9XG4gICAgICBub2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwicGF0aFwiIGF0dHJpYnV0ZXMgY2hpbGRyZW5cbi19XG5ub2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoTm9kZSBtc2cpIC0+IE5vZGUgbXNnXG5ub2RlTlMgdGFnID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub2RlTlMgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9TY3JpcHQgdGFnKVxuXG5cbnstfCBKdXN0IHB1dCBwbGFpbiB0ZXh0IGluIHRoZSBET00uIEl0IHdpbGwgZXNjYXBlIHRoZSBzdHJpbmcgc28gdGhhdCBpdCBhcHBlYXJzXG5leGFjdGx5IGFzIHlvdSBzcGVjaWZ5LlxuXG4gICAgdGV4dCBcIkhlbGxvIFdvcmxkIVwiXG4tfVxudGV4dCA6IFN0cmluZyAtPiBOb2RlIG1zZ1xudGV4dCA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20udGV4dFxuXG5cbnstfCBUaGlzIGZ1bmN0aW9uIGlzIHVzZWZ1bCB3aGVuIG5lc3RpbmcgY29tcG9uZW50cyB3aXRoIFt0aGUgRWxtXG5BcmNoaXRlY3R1cmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFuY3ovZWxtLWFyY2hpdGVjdHVyZS10dXRvcmlhbC8pLiBJdCBsZXRzXG55b3UgdHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIHN1YnRyZWUuXG5cblNheSB5b3UgaGF2ZSBhIG5vZGUgbmFtZWQgYGJ1dHRvbmAgdGhhdCBwcm9kdWNlcyBgKClgIHZhbHVlcyB3aGVuIGl0IGlzXG5jbGlja2VkLiBUbyBnZXQgeW91ciBtb2RlbCB1cGRhdGluZyBwcm9wZXJseSwgeW91IHdpbGwgcHJvYmFibHkgd2FudCB0byB0YWdcbnRoaXMgYCgpYCB2YWx1ZSBsaWtlIHRoaXM6XG5cbiAgICB0eXBlIE1zZyA9IENsaWNrIHwgLi4uXG5cbiAgICB1cGRhdGUgbXNnIG1vZGVsID1cbiAgICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIENsaWNrIC0+XG4gICAgICAgICAgLi4uXG5cbiAgICB2aWV3IG1vZGVsID1cbiAgICAgIG1hcCAoXFxfIC0+IENsaWNrKSBidXR0b25cblxuU28gbm93IGFsbCB0aGUgZXZlbnRzIHByb2R1Y2VkIGJ5IGBidXR0b25gIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gYmUgb2YgdHlwZVxuYE1zZ2Agc28gdGhleSBjYW4gYmUgaGFuZGxlZCBieSB5b3VyIHVwZGF0ZSBmdW5jdGlvbiFcbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IE5vZGUgYSAtPiBOb2RlIG1zZ1xubWFwID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5tYXBcblxuXG5cbi0tIEFUVFJJQlVURVNcblxuXG57LXwgV2hlbiB1c2luZyBIVE1MIGFuZCBKUywgdGhlcmUgYXJlIHR3byB3YXlzIHRvIHNwZWNpZnkgcGFydHMgb2YgYSBET00gbm9kZS5cblxuICAxLiBBdHRyaWJ1dGVzICZtZGFzaDsgWW91IGNhbiBzZXQgdGhpbmdzIGluIEhUTUwgaXRzZWxmLiBTbyB0aGUgYGNsYXNzYFxuICAgICBpbiBgPGRpdiBjbGFzcz1cImdyZWV0aW5nXCI+PC9kaXY+YCBpcyBjYWxsZWQgYW4gKmF0dHJpYnV0ZSouXG5cbiAgMi4gUHJvcGVydGllcyAmbWRhc2g7IFlvdSBjYW4gYWxzbyBzZXQgdGhpbmdzIGluIEpTLiBTbyB0aGUgYGNsYXNzTmFtZWBcbiAgICAgaW4gYGRpdi5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpcyBjYWxsZWQgYSAqcHJvcGVydHkqLlxuXG5TbyB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgY29ycmVzcG9uZHMgdG8gdGhlIGBjbGFzc05hbWVgIHByb3BlcnR5LiBBdCBmaXJzdFxuZ2xhbmNlLCBwZXJoYXBzIHRoaXMgZGlzdGluY3Rpb24gaXMgZGVmZW5zaWJsZSwgYnV0IGl0IGdldHMgbXVjaCBjcmF6aWVyLlxuKlRoZXJlIGlzIG5vdCBhbHdheXMgYSBvbmUtdG8tb25lIG1hcHBpbmcgYmV0d2VlbiBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0aWVzISpcblllcywgdGhhdCBpcyBhIHRydWUgZmFjdC4gU29tZXRpbWVzIGFuIGF0dHJpYnV0ZSBleGlzdHMsIGJ1dCB0aGVyZSBpcyBub1xuY29ycmVzcG9uZGluZyBwcm9wZXJ0eS4gU29tZXRpbWVzIGNoYW5naW5nIGFuIGF0dHJpYnV0ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlXG51bmRlcmx5aW5nIHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgYXMgb2YgdGhpcyB3cml0aW5nLCB0aGUgYHdlYmtpdC1wbGF5c2lubGluZWBcbmF0dHJpYnV0ZSBjYW4gYmUgdXNlZCBpbiBIVE1MLCBidXQgdGhlcmUgaXMgbm8gY29ycmVzcG9uZGluZyBwcm9wZXJ0eSFcbi19XG50eXBlIEF0dHJpYnV0ZSBtc2cgPSBBdHRyaWJ1dGVcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIG5vZGUgXCJkaXZcIlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZENvbG9yXCIgXCJyZWRcIlxuICAgICAgICAsIHN0eWxlIFwiaGVpZ2h0XCIgXCI5MHB4XCJcbiAgICAgICAgLCBzdHlsZSBcIndpZHRoXCIgXCIxMDAlXCJcbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgXCJIZWxsbyFcIlxuICAgICAgICBdXG5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IENyZWF0ZSBhIHByb3BlcnR5LlxuXG4gICAgaW1wb3J0IEpzb24uRW5jb2RlIGFzIEVuY29kZVxuXG4gICAgYnV0dG9uTGFiZWwgOiBOb2RlIG1zZ1xuICAgIGJ1dHRvbkxhYmVsID1cbiAgICAgIG5vZGUgXCJsYWJlbFwiIFsgcHJvcGVydHkgXCJodG1sRm9yXCIgKEVuY29kZS5zdHJpbmcgXCJidXR0b25cIikgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKnByb3BlcnR5KiBuYW1lLCBzbyB3ZSB1c2UgYGh0bWxGb3JgIGFzIGl0XG53b3VsZCBiZSBpbiBKYXZhU2NyaXB0LCBub3QgYGZvcmAgYXMgaXQgd291bGQgYXBwZWFyIGluIEhUTUwuXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLnByb3BlcnR5XG4gICAgKEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubm9Jbm5lckh0bWxPckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgQ3JlYXRlIGFuIGF0dHJpYnV0ZS4gVGhpcyB1c2VzIEphdmFTY3JpcHTigJlzIGBzZXRBdHRyaWJ1dGVgIGZ1bmN0aW9uXG5iZWhpbmQgdGhlIHNjZW5lcy5cblxuICAgIGJ1dHRvbkxhYmVsIDogTm9kZSBtc2dcbiAgICBidXR0b25MYWJlbCA9XG4gICAgICBub2RlIFwibGFiZWxcIiBbIGF0dHJpYnV0ZSBcImZvclwiIFwiYnV0dG9uXCIgXSBbIHRleHQgXCJMYWJlbFwiIF1cblxuTm90aWNlIHRoYXQgeW91IG11c3QgZ2l2ZSB0aGUgKmF0dHJpYnV0ZSogbmFtZSwgc28gd2UgdXNlIGBmb3JgIGFzIGl0IHdvdWxkXG5iZSBpbiBIVE1MLCBub3QgYGh0bWxGb3JgIGFzIGl0IHdvdWxkIGFwcGVhciBpbiBKUy5cbi19XG5hdHRyaWJ1dGUgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmF0dHJpYnV0ZSBrZXkgdmFsdWUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgV291bGQgeW91IGJlbGlldmUgdGhhdCB0aGVyZSBpcyBhbm90aGVyIHdheSB0byBkbyB0aGlzPyEgVGhpcyB1c2VzXG5KYXZhU2NyaXB0J3MgYHNldEF0dHJpYnV0ZU5TYCBmdW5jdGlvbiBiZWhpbmQgdGhlIHNjZW5lcy4gSXQgaXMgZG9pbmcgcHJldHR5XG5tdWNoIHRoZSBzYW1lIHRoaW5nIGFzIGBhdHRyaWJ1dGVgIGJ1dCB5b3UgYXJlIGFibGUgdG8gaGF2ZSBuYW1lc3BhY2VkXG5hdHRyaWJ1dGVzLiBBcyBhbiBleGFtcGxlLCB0aGUgYGVsbS9zdmdgIHBhY2thZ2UgZGVmaW5lcyBhbiBhdHRyaWJ1dGVcbmxpa2UgdGhpczpcblxuICAgIHhsaW5rSHJlZiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgeGxpbmtIcmVmIHZhbHVlID1cbiAgICAgIGF0dHJpYnV0ZU5TIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIFwieGxpbms6aHJlZlwiIHZhbHVlXG4tfVxuYXR0cmlidXRlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGVOUyBuYW1lc3BhY2Uga2V5IHZhbHVlID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5hdHRyaWJ1dGVOU1xuICAgIG5hbWVzcGFjZVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vT25PckZvcm1BY3Rpb24ga2V5KVxuICAgIChHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm5vSmF2YVNjcmlwdE9ySHRtbFVyaSB2YWx1ZSlcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcEF0dHJpYnV0ZSA6IChhIC0+IGIpIC0+IEF0dHJpYnV0ZSBhIC0+IEF0dHJpYnV0ZSBiXG5tYXBBdHRyaWJ1dGUgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLm1hcEF0dHJpYnV0ZVxuXG5cblxuLS0gRVZFTlRTXG5cblxuey18IENyZWF0ZSBjdXN0b20gZXZlbnQgaGFuZGxlcnMuXG5cbllvdSBjYW4gZGVmaW5lIGBvbkNsaWNrYCBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBvbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNsaWNrIG1zZyA9XG4gICAgICBvbiBcImNsaWNrXCIgKE5vcm1hbCAoRGVjb2RlLnN1Y2NlZWQgbXNnKSlcblxuKipOb3RlOioqIFRoZXNlIGV2ZW50IGhhbmRsZXJzIHRyaWdnZXIgaW4gdGhlIGJ1YmJsZSBwaGFzZS4gWW91IGNhbiBsZWFybiBtb3JlXG5hYm91dCB3aGF0IHRoYXQgbWVhbnMgW2hlcmVdW10uIFRoZXJlIGlzIG5vdCBzdXBwb3J0IHdpdGhpbiBHcmVuIGZvciBkb2luZ1xudHJpY2tzIHdpdGggdGhlIGNhcHR1cmUgcGhhc2UuIFdlIHJlY29tbWVuZCBkb2luZyB0aGF0IGluIEpTIHRocm91Z2ggcG9ydHMuXG5cbltoZXJlXTogaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9ibG9iL21hc3Rlci9oaW50cy9jYXB0dXJlLXZzLWJ1YmJsZS5tZFxuLX1cbm9uIDogU3RyaW5nIC0+IEhhbmRsZXIgbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5vblxuXG5cbnstfCBXaGVuIHVzaW5nIGBvbmAgeW91IGNhbiBjdXN0b21pemUgdGhlIGV2ZW50IGJlaGF2aW9yXG5hIGJpdC4gVGhlcmUgYXJlIHR3byB3YXlzIHRvIGRvIHRoaXM6XG5cbiAgLSBbYHN0b3BQcm9wYWdhdGlvbmBdW3NwXSBtZWFucyB0aGUgZXZlbnQgc3RvcHMgdHJhdmVsaW5nIHRocm91Z2ggdGhlIERPTS5cbiAgU28gaWYgcHJvcGFnYXRpb24gb2YgYSBjbGljayBpcyBzdG9wcGVkLCBpdCB3aWxsIG5vdCB0cmlnZ2VyIGFueSBvdGhlciBldmVudFxuICBsaXN0ZW5lcnMuXG5cbiAgLSBbYHByZXZlbnREZWZhdWx0YF1bcGRdIG1lYW5zIGFueSBidWlsdC1pbiBicm93c2VyIGJlaGF2aW9yIHJlbGF0ZWQgdG8gdGhlXG4gIGV2ZW50IGlzIHByZXZlbnRlZC4gVGhpcyBjYW4gYmUgaGFuZHkgd2l0aCBrZXkgcHJlc3NlcyBvciB0b3VjaCBnZXN0dXJlcy5cblxuKipOb3RlIDE6KiogQSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIGNyZWF0ZWQgaWYgeW91IHVzZSBgTm9ybWFsYFxub3IgYE1heVN0b3BQcm9wYWdhdGlvbmAuIEluIGJvdGggY2FzZXMgYHByZXZlbnREZWZhdWx0YCBjYW5ub3QgYmUgdXNlZCwgc29cbndlIGNhbiBlbmFibGUgb3B0aW1pemF0aW9ucyBmb3IgdG91Y2gsIHNjcm9sbCwgYW5kIHdoZWVsIGV2ZW50cyBpbiBzb21lXG5icm93c2Vycy5cblxuKipOb3RlIDI6KiogU29tZSBhY3Rpb25zLCBsaWtlIHVwbG9hZGluZyBhbmQgZG93bmxvYWRpbmcgZmlsZXMsIGFyZSBvbmx5XG5hbGxvd2VkIHdoZW4gdGhlIEphdmFTY3JpcHQgZXZlbnQgbG9vcCBpcyBydW5uaW5nIGJlY2F1c2Ugb2YgdXNlciBpbnB1dC4gVGhpc1xuaXMgZm9yIHNlY3VyaXR5ISBTbyB3aGVuIGFuIGV2ZW50IG9jY3Vycywgd2UgY2FsbCBgdXBkYXRlYCBhbmQgc2VuZCBhbnkgYHBvcnRgXG5tZXNzYWdlcyBpbW1lZGlhdGVseSwgYWxsIHdpdGhpbiB0aGUgc2FtZSB0aWNrIG9mIHRoZSBldmVudCBsb29wLiBUaGlzIG1ha2VzXG5pdCBwb3NzaWJsZSB0byBoYW5kbGUgdXNlci1pbnN0aWdhdGVkIGV2ZW50cyBpbiBwb3J0cy5cblxuKipOb3RlIDM6KiogTm9ybWFsbHkgdGhlIGB2aWV3YCBpcyBzaG93biBpbiB0aGUgbmV4dCBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuY2FsbC4gVGhpcyBhbGxvd3MgdXMgdG8gc2F2ZSBzb21lIHdvcmsgaWYgbWVzc2FnZXMgYXJlIGNvbWluZyBpbiB2ZXJ5IHF1aWNrbHkuXG5CdXQgaWYgYHN0b3BQcm9wYWdhdGlvbmAgaXMgdXNlZCwgd2UgdXBkYXRlIHRoZSBET00gaW1tZWRpYXRlbHksIHdpdGhpbiB0aGVcbnNhbWUgdGljayBvZiB0aGUgZXZlbnQgbG9vcC4gVGhpcyBpcyB1c2VmdWwgZm9yIERPTSBub2RlcyB0aGF0IGhvbGQgdGhlaXIgb3duXG5zdGF0ZSwgbGlrZSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+YC4gSWYgc29tZW9uZSB0eXBlcyB2ZXJ5IGZhc3QsIHRoZSBzdGF0ZSBpbiB0aGVcbkRPTSBjYW4gZGl2ZXJnZSBmcm9tIHRoZSBzdGF0ZSBpbiB5b3VyIGBNb2RlbGAgd2hpbGUgd2FpdGluZyBvbiB0aGUgbmV4dFxuYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgY2FsbC4gU28gdXBkYXRpbmcgdGhlIERPTSBzeW5jaHJvbm91c2x5IG1ha2VzIHRoaXNcbmRpdmVyZ2VuY2UgaW1wb3NzaWJsZS5cblxuW3NwXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuW3BkXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5bcGFzc2l2ZV06IGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4tfVxudHlwZSBIYW5kbGVyIG1zZ1xuICA9IE5vcm1hbCAoSnNvbi5EZWNvZGVyIG1zZylcbiAgfCBNYXlTdG9wUHJvcGFnYXRpb24gKEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfSlcbiAgfCBNYXlQcmV2ZW50RGVmYXVsdCAoSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgcHJldmVudERlZmF1bHQgOiBCb29sIH0pXG4gIHwgQ3VzdG9tIChKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSlcblxuXG5cbi0tIExBWlkgTk9ERVNcblxuXG57LXwgQSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdGhhdCBkZWxheXMgdGhlIGJ1aWxkaW5nIG9mIHZpcnR1YWwgRE9NIG5vZGVzLlxuXG5DYWxsaW5nIGAodmlldyBtb2RlbClgIHdpbGwgZGVmaW5pdGVseSBidWlsZCBzb21lIHZpcnR1YWwgRE9NLCBwZXJoYXBzIGEgbG90IG9mXG5pdC4gQ2FsbGluZyBgKGxhenkgdmlldyBtb2RlbClgIGRlbGF5cyB0aGUgY2FsbCB1bnRpbCBsYXRlci4gRHVyaW5nIGRpZmZpbmcsIHdlXG5jYW4gY2hlY2sgdG8gc2VlIGlmIGBtb2RlbGAgaXMgcmVmZXJlbnRpYWxseSBlcXVhbCB0byB0aGUgcHJldmlvdXMgdmFsdWUgdXNlZCxcbmFuZCBpZiBzbywgd2UganVzdCBzdG9wLiBObyBuZWVkIHRvIGJ1aWxkIHVwIHRoZSB0cmVlIHN0cnVjdHVyZSBhbmQgZGlmZiBpdCxcbndlIGtub3cgaWYgdGhlIGlucHV0IHRvIGB2aWV3YCBpcyB0aGUgc2FtZSwgdGhlIG91dHB1dCBtdXN0IGJlIHRoZSBzYW1lIVxuLX1cbmxhenkgOiAoYSAtPiBOb2RlIG1zZykgLT4gYSAtPiBOb2RlIG1zZ1xubGF6eSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eVxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHR3byBhcmd1bWVudHMuXG4tfVxubGF6eTIgOiAoYSAtPiBiIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gTm9kZSBtc2dcbmxhenkyID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5MlxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIHRocmVlIGFyZ3VtZW50cy5cbi19XG5sYXp5MyA6IChhIC0+IGIgLT4gYyAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gTm9kZSBtc2dcbmxhenkzID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5M1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZvdXIgYXJndW1lbnRzLlxuLX1cbmxhenk0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gTm9kZSBtc2dcbmxhenk0ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5NFxuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGZpdmUgYXJndW1lbnRzLlxuLX1cbmxhenk1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBOb2RlIG1zZykgLT4gYSAtPiBiIC0+IGMgLT4gZCAtPiBlIC0+IE5vZGUgbXNnXG5sYXp5NSA9XG4gIEdyZW4uS2VybmVsLlZpcnR1YWxEb20ubGF6eTVcblxuXG57LXwgU2FtZSBhcyBgbGF6eWAgYnV0IGNoZWNrcyBvbiBzaXggYXJndW1lbnRzLlxuLX1cbmxhenk2IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IE5vZGUgbXNnKSAtPiBhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBOb2RlIG1zZ1xubGF6eTYgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk2XG5cblxuey18IFNhbWUgYXMgYGxhenlgIGJ1dCBjaGVja3Mgb24gc2V2ZW4gYXJndW1lbnRzLlxuLX1cbmxhenk3IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gTm9kZSBtc2dcbmxhenk3ID1cbiAgR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5sYXp5N1xuXG5cbnstfCBTYW1lIGFzIGBsYXp5YCBidXQgY2hlY2tzIG9uIGVpZ2h0IGFyZ3VtZW50cy5cbi19XG5sYXp5OCA6IChhIC0+IGIgLT4gYyAtPiBkIC0+IGUgLT4gZiAtPiBnIC0+IGggLT4gTm9kZSBtc2cpIC0+IGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiBmIC0+IGcgLT4gaCAtPiBOb2RlIG1zZ1xubGF6eTggPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmxhenk4XG5cblxuXG4tLSBLRVlFRCBOT0RFU1xuXG5cbnstfCBXb3JrcyBqdXN0IGxpa2UgYG5vZGVgLCBidXQgeW91IGFkZCBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGVhY2ggY2hpbGRcbm5vZGUuIFlvdSB3YW50IHRoaXMgd2hlbiB5b3UgaGF2ZSBhIGxpc3Qgb2Ygbm9kZXMgdGhhdCBpcyBjaGFuZ2luZzogYWRkaW5nXG5ub2RlcywgcmVtb3Zpbmcgbm9kZXMsIGV0Yy4gSW4gdGhlc2UgY2FzZXMsIHRoZSB1bmlxdWUgaWRlbnRpZmllcnMgaGVscCBtYWtlXG50aGUgRE9NIG1vZGlmaWNhdGlvbnMgbW9yZSBlZmZpY2llbnQuXG4tfVxua2V5ZWROb2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuey18IENyZWF0ZSBhIGtleWVkIGFuZCBuYW1lc3BhY2VkIERPTSBub2RlLiBGb3IgZXhhbXBsZSwgYW4gU1ZHIGA8Zz5gIG5vZGVcbmNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzOlxuXG4gICAgZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoIFN0cmluZywgTm9kZSBtc2cgKSAtPiBOb2RlIG1zZ1xuICAgIGcgPVxuICAgICAga2V5ZWROb2RlTlMgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFwiZ1wiXG4tfVxua2V5ZWROb2RlTlMgOiBTdHJpbmcgLT4gU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IE5vZGUgbXNnIH0gLT4gTm9kZSBtc2dcbmtleWVkTm9kZU5TIG5hbWVzcGFjZSB0YWcgPVxuICBHcmVuLktlcm5lbC5WaXJ0dWFsRG9tLmtleWVkTm9kZU5TIG5hbWVzcGFjZSAoR3Jlbi5LZXJuZWwuVmlydHVhbERvbS5ub1NjcmlwdCB0YWcpXG5cblxuXG4tLSBGT1IgSU5URVJOQUwgVVNFIE9OTFlcblxuXG50b0hhbmRsZXJJbnQgOiBIYW5kbGVyIG1zZyAtPiBJbnRcbnRvSGFuZGxlckludCBoYW5kbGVyID1cbiAgd2hlbiBoYW5kbGVyIGlzXG4gICAgTm9ybWFsIF8gLT4gMFxuICAgIE1heVN0b3BQcm9wYWdhdGlvbiBfIC0+IDFcbiAgICBNYXlQcmV2ZW50RGVmYXVsdCBfIC0+IDJcbiAgICBDdXN0b20gXyAtPiAzXG4iLAogICAgICAgICJtb2R1bGUgVXJsIGV4cG9zaW5nXG4gICggVXJsXG4gICwgUHJvdG9jb2woLi4pXG4gICwgdG9TdHJpbmdcbiAgLCBmcm9tU3RyaW5nXG4gICwgcGVyY2VudEVuY29kZVxuICAsIHBlcmNlbnREZWNvZGVcbiAgKVxuXG5cbnstfFxuXG4jIFVSTHNcbkBkb2NzIFVybCwgUHJvdG9jb2wsIHRvU3RyaW5nLCBmcm9tU3RyaW5nXG5cbiMgUGVyY2VudC1FbmNvZGluZ1xuQGRvY3MgcGVyY2VudEVuY29kZSwgcGVyY2VudERlY29kZVxuXG4tfVxuXG5cbmltcG9ydCBHcmVuLktlcm5lbC5VcmxcblxuXG5cbi0tIFVSTFxuXG5cbnstfCBJbiBbdGhlIFVSSSBzcGVjXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiksIFRpbSBCZXJuZXJzLUxlZVxuc2F5cyBhIFVSTCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYFxuICBodHRwczovL2V4YW1wbGUuY29tOjgwNDIvb3Zlci90aGVyZT9uYW1lPWZlcnJldCNub3NlXG4gIFxcX19fLyAgIFxcX19fX19fX19fX19fX18vXFxfX19fX19fX18vIFxcX19fX19fX19fLyBcXF9fL1xuICAgIHwgICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAgc2NoZW1lICAgICBhdXRob3JpdHkgICAgICAgcGF0aCAgICAgICAgcXVlcnkgICBmcmFnbWVudFxuYGBgXG5cbldoZW4geW91IGFyZSBjcmVhdGluZyBhIHNpbmdsZS1wYWdlIGFwcCB3aXRoIFtgQnJvd3Nlci5hcHBsaWNhdGlvbmBdW2FwcF0sIHlvdVxudXNlIHRoZSBbYFVybC5QYXJzZXJgXShVcmwtUGFyc2VyKSBtb2R1bGUgdG8gdHVybiBhIGBVcmxgIGludG8gZXZlbiBuaWNlciBkYXRhLlxuXG5JZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gVVJMcywgY2hlY2sgb3V0IHRoZSBbYFVybC5CdWlsZGVyYF0oVXJsLUJ1aWxkZXIpXG5tb2R1bGUgYXMgd2VsbCFcblxuW2FwcF06IC9wYWNrYWdlcy9lbG0vYnJvd3Nlci9sYXRlc3QvQnJvd3NlciNhcHBsaWNhdGlvblxuXG4qKk5vdGU6KiogVGhpcyBpcyBhIHN1YnNldCBvZiBhbGwgdGhlIGZ1bGwgcG9zc2liaWxpdGllcyBsaXN0ZWQgaW4gdGhlIFVSSVxuc3BlYy4gU3BlY2lmaWNhbGx5LCBpdCBkb2VzIG5vdCBhY2NlcHQgdGhlIGB1c2VyaW5mb2Agc2VnbWVudCB5b3Ugc2VlIGluIGVtYWlsXG5hZGRyZXNzZXMgbGlrZSBgdG9tQGV4YW1wbGUuY29tYC5cbi19XG50eXBlIGFsaWFzIFVybCA9XG4gIHsgcHJvdG9jb2wgOiBQcm90b2NvbFxuICAsIGhvc3QgOiBTdHJpbmdcbiAgLCBwb3J0XyA6IE1heWJlIEludFxuICAsIHBhdGggOiBTdHJpbmdcbiAgLCBxdWVyeSA6IE1heWJlIFN0cmluZ1xuICAsIGZyYWdtZW50IDogTWF5YmUgU3RyaW5nXG4gIH1cblxuXG57LXwgSXMgdGhlIFVSTCBzZXJ2ZWQgb3ZlciBhIHNlY3VyZSBjb25uZWN0aW9uIG9yIG5vdD9cbi19XG50eXBlIFByb3RvY29sID0gSHR0cCB8IEh0dHBzXG5cblxuey18IEF0dGVtcHQgdG8gYnJlYWsgYSBVUkwgdXAgaW50byBbYFVybGBdKCNVcmwpLiBUaGlzIGlzIHVzZWZ1bCBpblxuc2luZ2xlLXBhZ2UgYXBwcyB3aGVuIHlvdSB3YW50IHRvIHBhcnNlIGNlcnRhaW4gY2h1bmtzIG9mIGEgVVJMIHRvIGZpZ3VyZSBvdXRcbndoYXQgdG8gc2hvdyBvbiBzY3JlZW4uXG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cHM6Ly9leGFtcGxlLmNvbTo0NDNcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gSnVzdCA0NDNcbiAgICAtLSAgICwgcGF0aCA9IFwiL1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IE5vdGhpbmdcbiAgICAtLSAgIH1cblxuICAgIGZyb21TdHJpbmcgXCJodHRwczovL2V4YW1wbGUuY29tL2hhdHM/cT10b3AlMjBoYXRcIlxuICAgIC0tIEp1c3RcbiAgICAtLSAgIHsgcHJvdG9jb2wgPSBIdHRwc1xuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvaGF0c1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gSnVzdCBcInE9dG9wJTIwaGF0XCJcbiAgICAtLSAgICwgZnJhZ21lbnQgPSBOb3RoaW5nXG4gICAgLS0gICB9XG5cbiAgICBmcm9tU3RyaW5nIFwiaHR0cDovL2V4YW1wbGUuY29tL2NvcmUvTGlzdC8jbWFwXCJcbiAgICAtLSBKdXN0XG4gICAgLS0gICB7IHByb3RvY29sID0gSHR0cFxuICAgIC0tICAgLCBob3N0ID0gXCJleGFtcGxlLmNvbVwiXG4gICAgLS0gICAsIHBvcnRfID0gTm90aGluZ1xuICAgIC0tICAgLCBwYXRoID0gXCIvY29yZS9MaXN0L1wiXG4gICAgLS0gICAsIHF1ZXJ5ID0gTm90aGluZ1xuICAgIC0tICAgLCBmcmFnbWVudCA9IEp1c3QgXCJtYXBcIlxuICAgIC0tICAgfVxuXG5UaGUgY29udmVyc2lvbiB0byBzZWdtZW50cyBjYW4gZmFpbCBpbiBzb21lIGNhc2VzIGFzIHdlbGw6XG5cbiAgICBmcm9tU3RyaW5nIFwiZXhhbXBsZS5jb206NDQzXCIgICAgICAgID09IE5vdGhpbmcgIC0tIG5vIHByb3RvY29sXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly90b21AZXhhbXBsZS5jb21cIiA9PSBOb3RoaW5nICAtLSB1c2VyaW5mbyBkaXNhbGxvd2VkXG4gICAgZnJvbVN0cmluZyBcImh0dHA6Ly8jY2F0c1wiICAgICAgICAgICA9PSBOb3RoaW5nICAtLSBubyBob3N0XG5cbioqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHVzZSBbYHBlcmNlbnREZWNvZGVgXSgjcGVyY2VudERlY29kZSkgYW55dGhpbmcuXG5JdCBqdXN0IHNwbGl0cyB0aGluZ3MgdXAuIFtgVXJsLlBhcnNlcmBdKFVybC1QYXJzZXIpIGFjdHVhbGx5IF9uZWVkc18gdGhlIHJhd1xuYHF1ZXJ5YCBzdHJpbmcgdG8gcGFyc2UgaXQgcHJvcGVybHkuIE90aGVyd2lzZSBpdCBjb3VsZCBnZXQgY29uZnVzZWQgYWJvdXQgYD1gXG5hbmQgYCZgIGNoYXJhY3RlcnMhXG4tfVxuZnJvbVN0cmluZyA6IFN0cmluZyAtPiBNYXliZSBVcmxcbmZyb21TdHJpbmcgc3RyID1cbiAgaWYgU3RyaW5nLnN0YXJ0c1dpdGggXCJodHRwOi8vXCIgc3RyIHRoZW5cbiAgICBjaG9tcEFmdGVyUHJvdG9jb2wgSHR0cCAoU3RyaW5nLmRyb3BGaXJzdCA3IHN0cilcblxuICBlbHNlIGlmIFN0cmluZy5zdGFydHNXaXRoIFwiaHR0cHM6Ly9cIiBzdHIgdGhlblxuICAgIGNob21wQWZ0ZXJQcm90b2NvbCBIdHRwcyAoU3RyaW5nLmRyb3BGaXJzdCA4IHN0cilcblxuICBlbHNlXG4gICAgTm90aGluZ1xuXG5cbmNob21wQWZ0ZXJQcm90b2NvbCA6IFByb3RvY29sIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQWZ0ZXJQcm90b2NvbCBwcm90b2NvbCBzdHIgPVxuICBpZiBTdHJpbmcuaXNFbXB0eSBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gQXJyYXkuZ2V0IDAgKFN0cmluZy5pbmRpY2VzIFwiI1wiIHN0cikgaXNcbiAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBOb3RoaW5nIHN0clxuXG4gICAgICBKdXN0IGkgLT5cbiAgICAgICAgY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCAoSnVzdCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikpIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlRnJhZ21lbnQgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVGcmFnbWVudCBwcm90b2NvbCBmcmFnIHN0ciA9XG4gIGlmIFN0cmluZy5pc0VtcHR5IHN0ciB0aGVuXG4gICAgTm90aGluZ1xuICBlbHNlXG4gICAgd2hlbiBBcnJheS5nZXQgMCAoU3RyaW5nLmluZGljZXMgXCI/XCIgc3RyKSBpc1xuICAgICAgTm90aGluZyAtPlxuICAgICAgICBjaG9tcEJlZm9yZVF1ZXJ5IHByb3RvY29sIE5vdGhpbmcgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgKEp1c3QgKFN0cmluZy5kcm9wRmlyc3QgKGkgKyAxKSBzdHIpKSBmcmFnIChTdHJpbmcudGFrZUZpcnN0IGkgc3RyKVxuXG5cbmNob21wQmVmb3JlUXVlcnkgOiBQcm90b2NvbCAtPiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBNYXliZSBVcmxcbmNob21wQmVmb3JlUXVlcnkgcHJvdG9jb2wgcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHRoZW5cbiAgICBOb3RoaW5nXG4gIGVsc2VcbiAgICB3aGVuIEFycmF5LmdldCAwIChTdHJpbmcuaW5kaWNlcyBcIi9cIiBzdHIpIGlzXG4gICAgICBOb3RoaW5nIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCBcIi9cIiBwYXJhbXMgZnJhZyBzdHJcblxuICAgICAgSnVzdCBpIC0+XG4gICAgICAgIGNob21wQmVmb3JlUGF0aCBwcm90b2NvbCAoU3RyaW5nLmRyb3BGaXJzdCBpIHN0cikgcGFyYW1zIGZyYWcgKFN0cmluZy50YWtlRmlyc3QgaSBzdHIpXG5cblxuY2hvbXBCZWZvcmVQYXRoIDogUHJvdG9jb2wgLT4gU3RyaW5nIC0+IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmcgLT4gU3RyaW5nIC0+IE1heWJlIFVybFxuY2hvbXBCZWZvcmVQYXRoIHByb3RvY29sIHBhdGggcGFyYW1zIGZyYWcgc3RyID1cbiAgaWYgU3RyaW5nLmlzRW1wdHkgc3RyIHx8IFN0cmluZy5jb250YWlucyBcIkBcIiBzdHIgdGhlblxuICAgIE5vdGhpbmdcbiAgZWxzZVxuICAgIHdoZW4gU3RyaW5nLmluZGljZXMgXCI6XCIgc3RyIGlzXG4gICAgICBbXSAtPlxuICAgICAgICBKdXN0IDx8IFxuICAgICAgICAgICAgeyBwcm90b2NvbCA9IHByb3RvY29sIFxuICAgICAgICAgICAgLCBob3N0ID0gc3RyIFxuICAgICAgICAgICAgLCBwb3J0XyA9IE5vdGhpbmcgXG4gICAgICAgICAgICAsIHBhdGggPSBwYXRoIFxuICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICwgZnJhZ21lbnQgPSBmcmFnXG4gICAgICAgICAgICB9XG5cbiAgICAgIFtpXSAtPlxuICAgICAgICB3aGVuIFN0cmluZy50b0ludCAoU3RyaW5nLmRyb3BGaXJzdCAoaSArIDEpIHN0cikgaXNcbiAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICBwb3J0XyAtPlxuICAgICAgICAgICAgSnVzdCA8fCBcbiAgICAgICAgICAgICAgICB7IHByb3RvY29sID0gcHJvdG9jb2xcbiAgICAgICAgICAgICAgICAsIGhvc3QgPSAoU3RyaW5nLnRha2VGaXJzdCBpIHN0cikgXG4gICAgICAgICAgICAgICAgLCBwb3J0XyA9IHBvcnRfIFxuICAgICAgICAgICAgICAgICwgcGF0aCA9IHBhdGggXG4gICAgICAgICAgICAgICAgLCBxdWVyeSA9IHBhcmFtcyBcbiAgICAgICAgICAgICAgICAsIGZyYWdtZW50ID0gZnJhZ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgXyAtPlxuICAgICAgICBOb3RoaW5nXG5cblxuey18IFR1cm4gYSBbYFVybGBdKCNVcmwpIGludG8gYSBgU3RyaW5nYC5cbi19XG50b1N0cmluZyA6IFVybCAtPiBTdHJpbmdcbnRvU3RyaW5nIHVybCA9XG4gIGxldFxuICAgIGh0dHAgPVxuICAgICAgd2hlbiB1cmwucHJvdG9jb2wgaXNcbiAgICAgICAgSHR0cCAtPlxuICAgICAgICAgIFwiaHR0cDovL1wiXG5cbiAgICAgICAgSHR0cHMgLT5cbiAgICAgICAgICBcImh0dHBzOi8vXCJcbiAgaW5cbiAgYWRkUG9ydCB1cmwucG9ydF8gKGh0dHAgKysgdXJsLmhvc3QpICsrIHVybC5wYXRoXG4gICAgfD4gYWRkUHJlZml4ZWQgXCI/XCIgdXJsLnF1ZXJ5XG4gICAgfD4gYWRkUHJlZml4ZWQgXCIjXCIgdXJsLmZyYWdtZW50XG5cblxuYWRkUG9ydCA6IE1heWJlIEludCAtPiBTdHJpbmcgLT4gU3RyaW5nXG5hZGRQb3J0IG1heWJlUG9ydCBzdGFydGVyID1cbiAgd2hlbiBtYXliZVBvcnQgaXNcbiAgICBOb3RoaW5nIC0+XG4gICAgICBzdGFydGVyXG5cbiAgICBKdXN0IHBvcnRfIC0+XG4gICAgICBzdGFydGVyICsrIFwiOlwiICsrIFN0cmluZy5mcm9tSW50IHBvcnRfXG5cblxuYWRkUHJlZml4ZWQgOiBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbmFkZFByZWZpeGVkIHByZWZpeCBtYXliZVNlZ21lbnQgc3RhcnRlciA9XG4gIHdoZW4gbWF5YmVTZWdtZW50IGlzXG4gICAgTm90aGluZyAtPlxuICAgICAgc3RhcnRlclxuXG4gICAgSnVzdCBzZWdtZW50IC0+XG4gICAgICBzdGFydGVyICsrIHByZWZpeCArKyBzZWdtZW50XG5cblxuXG4tLSBQRVJDRU5UIEVOQ09ESU5HXG5cblxuey18ICoqVXNlIFtVcmwuQnVpbGRlcl0oVXJsLUJ1aWxkZXIpIGluc3RlYWQhKiogRnVuY3Rpb25zIGxpa2UgYGFic29sdXRlYCxcbmByZWxhdGl2ZWAsIGFuZCBgY3Jvc3NPcmlnaW5gIGFscmVhZHkgZG8gdGhpcyBhdXRvbWF0aWNhbGx5ISBgcGVyY2VudEVuY29kZWBcbmlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXQgZXh0cmVtZWx5IGN1c3RvbSBjYXNlcyBhcmUgcG9zc2libGUsIGlmIG5lZWRlZC5cblxuUGVyY2VudC1lbmNvZGluZyBpcyBob3cgW3RoZSBvZmZpY2lhbCBVUkkgc3BlY11bdXJpXSDigJxlc2NhcGVz4oCdIHNwZWNpYWxcbmNoYXJhY3RlcnMuIFlvdSBjYW4gc3RpbGwgcmVwcmVzZW50IGEgYD9gIGV2ZW4gdGhvdWdoIGl0IGlzIHJlc2VydmVkIGZvclxucXVlcmllcy5cblxuVGhpcyBmdW5jdGlvbiBleGlzdHMgaW4gY2FzZSB5b3Ugd2FudCB0byBkbyBzb21ldGhpbmcgZXh0cmEgY3VzdG9tLiBIZXJlIGFyZVxuc29tZSBleGFtcGxlczpcblxuICAgIC0tIHN0YW5kYXJkIEFTQ0lJIGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcImhhdFwiICAgPT0gXCJoYXRcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCJ0byBiZVwiID09IFwidG8lMjBiZVwiXG4gICAgcGVyY2VudEVuY29kZSBcIjk5JVwiICAgPT0gXCI5OSUyNVwiXG5cbiAgICAtLSBub24tc3RhbmRhcmQsIGJ1dCB3aWRlbHkgYWNjZXB0ZWQsIFVURi04IGVuY29kaW5nXG4gICAgcGVyY2VudEVuY29kZSBcIiRcIiA9PSBcIiUyNFwiXG4gICAgcGVyY2VudEVuY29kZSBcIsKiXCIgPT0gXCIlQzIlQTJcIlxuICAgIHBlcmNlbnRFbmNvZGUgXCLigqxcIiA9PSBcIiVFMiU4MiVBQ1wiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZW5jb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLFxuYW5kIHRoZSBydWxlcyBhcmUgZGVzY3JpYmVkIGluIG1vcmUgZGV0YWlsIG9mZmljaWFsbHkgW2hlcmVdW3MyXSBhbmQgd2l0aCBzb21lXG5ub3RlcyBhYm91dCBVbmljb2RlIFtoZXJlXVt3aWtpXS5cblxuW2pzXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZW5jb2RlVVJJQ29tcG9uZW50XG5bdXJpXTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODZcbltzMl06IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4xXG5bd2lraV06IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BlcmNlbnQtZW5jb2Rpbmdcbi19XG5wZXJjZW50RW5jb2RlIDogU3RyaW5nIC0+IFN0cmluZ1xucGVyY2VudEVuY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RW5jb2RlXG5cblxuey18ICoqVXNlIFtVcmwuUGFyc2VyXShVcmwtUGFyc2VyKSBpbnN0ZWFkISoqIEl0IHdpbGwgZGVjb2RlIHF1ZXJ5XG5wYXJhbWV0ZXJzIGFwcHJvcHJpYXRlbHkgYWxyZWFkeSEgYHBlcmNlbnREZWNvZGVgIGlzIG9ubHkgYXZhaWxhYmxlIHNvIHRoYXRcbmV4dHJlbWVseSBjdXN0b20gY2FzZXMgYXJlIHBvc3NpYmxlLCBpZiBuZWVkZWQuXG5cbkNoZWNrIG91dCB0aGUgYHBlcmNlbnRFbmNvZGVgIGZ1bmN0aW9uIHRvIGxlYXJuIGFib3V0IHBlcmNlbnQtZW5jb2RpbmcuXG5UaGlzIGZ1bmN0aW9uIGRvZXMgdGhlIG9wcG9zaXRlISBIZXJlIGFyZSB0aGUgcmV2ZXJzZSBleGFtcGxlczpcblxuICAgIC0tIEFTQ0lJXG4gICAgcGVyY2VudERlY29kZSBcImhhdFwiICAgICAgID09IEp1c3QgXCJoYXRcIlxuICAgIHBlcmNlbnREZWNvZGUgXCJ0byUyMGJlXCIgICA9PSBKdXN0IFwidG8gYmVcIlxuICAgIHBlcmNlbnREZWNvZGUgXCI5OSUyNVwiICAgICA9PSBKdXN0IFwiOTklXCJcblxuICAgIC0tIFVURi04XG4gICAgcGVyY2VudERlY29kZSBcIiUyNFwiICAgICAgID09IEp1c3QgXCIkXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUMyJUEyXCIgICAgPT0gSnVzdCBcIsKiXCJcbiAgICBwZXJjZW50RGVjb2RlIFwiJUUyJTgyJUFDXCIgPT0gSnVzdCBcIuKCrFwiXG5cbldoeSBpcyBpdCBhIGBNYXliZWAgdGhvdWdoPyBXZWxsLCB0aGVzZSBzdHJpbmdzIGNvbWUgZnJvbSBzdHJhbmdlcnMgb24gdGhlXG5pbnRlcm5ldCBhcyBhIGJ1bmNoIG9mIGJpdHMgYW5kIG1heSBoYXZlIGVuY29kaW5nIHByb2JsZW1zLiBGb3IgZXhhbXBsZTpcblxuICAgIHBlcmNlbnREZWNvZGUgXCIlXCIgICA9PSBOb3RoaW5nICAtLSBub3QgZm9sbG93ZWQgYnkgdHdvIGhleCBkaWdpdHNcbiAgICBwZXJjZW50RGVjb2RlIFwiJVhZXCIgPT0gTm90aGluZyAgLS0gbm90IGZvbGxvd2VkIGJ5IHR3byBIRVggZGlnaXRzXG4gICAgcGVyY2VudERlY29kZSBcIiVDMlwiID09IE5vdGhpbmcgIC0tIGhhbGYgb2YgdGhlIFwiwqJcIiBlbmNvZGluZyBcIiVDMiVBMlwiXG5cblRoaXMgaXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgSmF2YVNjcmlwdCdzIFtgZGVjb2RlVVJJQ29tcG9uZW50YF1banNdIGZ1bmN0aW9uLlxuXG5banNdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9kZWNvZGVVUklDb21wb25lbnRcbi19XG5wZXJjZW50RGVjb2RlIDogU3RyaW5nIC0+IE1heWJlIFN0cmluZ1xucGVyY2VudERlY29kZSA9XG4gIEdyZW4uS2VybmVsLlVybC5wZXJjZW50RGVjb2RlXG4iLAogICAgICAgICJlZmZlY3QgbW9kdWxlIFRhc2sgd2hlcmUgeyBjb21tYW5kID0gTXlDbWQgfSBleHBvc2luZ1xuICAgICggVGFzaywgcGVyZm9ybSwgYXR0ZW1wdCwgZXhlY3V0ZVxuICAgICwgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG4gICAgLCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcbiAgICAsIG9uRXJyb3IsIG1hcEVycm9yXG4gICAgKVxuXG57LXwgVGFza3MgbWFrZSBpdCBlYXN5IHRvIGRlc2NyaWJlIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIHRoYXQgbWF5IGZhaWwsIGxpa2VcbkhUVFAgcmVxdWVzdHMgb3Igd3JpdGluZyB0byBhIGRhdGFiYXNlLlxuXG5cbkBkb2NzIFRhc2ssIHBlcmZvcm0sIGF0dGVtcHQsIGV4ZWN1dGVcblxuXG4jIyBDaGFpbnNcblxuQGRvY3MgYW5kVGhlbiwgYXdhaXQsIHN1Y2NlZWQsIGZhaWwsIHNlcXVlbmNlXG5cblxuIyMgTWFwc1xuXG5AZG9jcyBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDVcblxuXG4jIyBFcnJvcnNcblxuQGRvY3Mgb25FcnJvciwgbWFwRXJyb3JcblxuLX1cblxuaW1wb3J0IEFycmF5IGV4cG9zaW5nIChBcnJheSlcbmltcG9ydCBCYXNpY3MgZXhwb3NpbmcgKCg8PCksICh8PiksIE5ldmVyKVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IE1heWJlIGV4cG9zaW5nIChNYXliZSguLikpXG5pbXBvcnQgUGxhdGZvcm1cbmltcG9ydCBQbGF0Zm9ybS5DbWQgZXhwb3NpbmcgKENtZClcbmltcG9ydCBSZXN1bHQgZXhwb3NpbmcgKFJlc3VsdCguLikpXG5cblxuey18IEhlcmUgYXJlIHNvbWUgY29tbW9uIHRhc2tzOlxuXG4gIC0gW2Bub3cgOiBUYXNrIHggUG9zaXhgXShUaW1lI25vdylcbiAgLSBbYGZvY3VzIDogU3RyaW5nIC0+IFRhc2sgRXJyb3Ige31gXVtmb2N1c11cbiAgLSBbYHNsZWVwIDogRmxvYXQgLT4gVGFzayB4IHt9YF0oUHJvY2VzcyNzbGVlcClcblxuW2ZvY3VzXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyLkRvbSNmb2N1c1xuXG5JbiBlYWNoIGNhc2Ugd2UgaGF2ZSBhIGBUYXNrYCB0aGF0IHdpbGwgcmVzb2x2ZSBzdWNjZXNzZnVsbHkgd2l0aCBhbiBgYWAgdmFsdWVcbm9yIHVuc3VjY2Vzc2Z1bGx5IHdpdGggYW4gYHhgIHZhbHVlLiBTbyBgQnJvd3Nlci5Eb20uZm9jdXNgIHdlIG1heSBmYWlsIHdpdGggYW5cbmBFcnJvcmAgaWYgdGhlIGdpdmVuIElEIGRvZXMgbm90IGV4aXN0LiBXaGVyZWFzIGBUaW1lLm5vd2AgbmV2ZXIgZmFpbHMgc29cbkkgY2Fubm90IGJlIG1vcmUgc3BlY2lmaWMgdGhhbiBgeGAuIE5vIHN1Y2ggdmFsdWUgd2lsbCBldmVyIGV4aXN0ISBJbnN0ZWFkIGl0XG5hbHdheXMgc3VjY2VlZHMgd2l0aCB0aGUgY3VycmVudCBQT1NJWCB0aW1lLlxuXG5Nb3JlIGdlbmVyYWxseSBhIHRhc2sgaXMgYSBfZGVzY3JpcHRpb25fIG9mIHdoYXQgeW91IG5lZWQgdG8gZG8uIExpa2UgYSB0b2RvXG5saXN0LiBPciBsaWtlIGEgZ3JvY2VyeSBsaXN0LiBPciBsaWtlIEdpdEh1YiBpc3N1ZXMuIFNvIHNheWluZyBcInRoZSB0YXNrIGlzXG50byB0ZWxsIG1lIHRoZSBjdXJyZW50IFBPU0lYIHRpbWVcIiBkb2VzIG5vdCBjb21wbGV0ZSB0aGUgdGFzayEgWW91IG5lZWRcbltgcGVyZm9ybWBdKCNwZXJmb3JtKSB0YXNrcyBvciBbYGF0dGVtcHRgXSgjYXR0ZW1wdCkgdGFza3MuXG5cbi19XG50eXBlIGFsaWFzIFRhc2sgeCBhID1cbiAgICBQbGF0Zm9ybS5UYXNrIHggYVxuXG5cblxuLS0gQkFTSUNTXG5cblxuey18IEEgdGFzayB0aGF0IHN1Y2NlZWRzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBJdCBpcyB1c3VhbGx5IHVzZWQgd2l0aFxuW2BhbmRUaGVuYF0oI2FuZFRoZW4pLiBZb3UgY2FuIHVzZSBpdCBsaWtlIGBtYXBgIGlmIHlvdSB3YW50OlxuXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluTWlsbGlzIDogVGFzayB4IEludFxuICAgIHRpbWVJbk1pbGxpcyA9XG4gICAgICAgIFRpbWUubm93XG4gICAgICAgICAgICB8PiBhbmRUaGVuIChcXHQgLT4gc3VjY2VlZCAoVGltZS5wb3NpeFRvTWlsbGlzIHQpKVxuXG4tfVxuc3VjY2VlZCA6IGEgLT4gVGFzayB4IGFcbnN1Y2NlZWQgPVxuICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zdWNjZWVkXG5cblxuey18IEEgdGFzayB0aGF0IGZhaWxzIGltbWVkaWF0ZWx5IHdoZW4gcnVuLiBMaWtlIHdpdGggYHN1Y2NlZWRgLCB0aGlzIGNhbiBiZVxudXNlZCB3aXRoIGBhbmRUaGVuYCB0byBjaGVjayBvbiB0aGUgb3V0Y29tZSBvZiBhbm90aGVyIHRhc2suXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gTm90Rm91bmRcblxuICAgIG5vdEZvdW5kIDogVGFzayBFcnJvciBhXG4gICAgbm90Rm91bmQgPVxuICAgICAgICBmYWlsIE5vdEZvdW5kXG5cbi19XG5mYWlsIDogeCAtPiBUYXNrIHggYVxuZmFpbCA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmZhaWxcblxuXG5cbi0tIE1BUFBJTkdcblxuXG57LXwgVHJhbnNmb3JtIGEgdGFzay4gTWF5YmUgeW91IHdhbnQgdG8gdXNlIFtgVGltZWBdW3RpbWVdIHRvIGZpZ3VyZVxub3V0IHdoYXQgdGltZSBpdCB3aWxsIGJlIGluIG9uZSBob3VyOlxuXG4gICAgaW1wb3J0IFRhc2sgZXhwb3NpbmcgKFRhc2spXG4gICAgaW1wb3J0IFRpbWVcblxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2subWFwIGFkZEFuSG91ciBUaW1lLm5vd1xuXG4gICAgYWRkQW5Ib3VyIDogVGltZS5Qb3NpeCAtPiBUaW1lLlBvc2l4XG4gICAgYWRkQW5Ib3VyIHRpbWUgPVxuICAgICAgICBUaW1lLm1pbGxpc1RvUG9zaXggKFRpbWUucG9zaXhUb01pbGxpcyB0aW1lICsgNjAgKiA2MCAqIDEwMDApXG5cblt0aW1lXTogVGltZVxuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gVGFzayB4IGEgLT4gVGFzayB4IGJcbm1hcCBmdW5jIHRhc2tBID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuIChcXGEgLT4gc3VjY2VlZCAoZnVuYyBhKSlcblxuXG57LXwgUHV0IHRoZSByZXN1bHRzIG9mIHR3byB0YXNrcyB0b2dldGhlci4gRm9yIGV4YW1wbGUsIGlmIHdlIHdhbnRlZCB0byBrbm93XG50aGUgY3VycmVudCBtb250aCwgd2UgY291bGQgdXNlIFtgVGltZWBdW3RpbWVdIHRvIGFzazpcblxuICAgIGltcG9ydCBUYXNrIGV4cG9zaW5nIChUYXNrKVxuICAgIGltcG9ydCBUaW1lXG5cblxuICAgIGdldE1vbnRoIDogVGFzayB4IEludFxuICAgIGdldE1vbnRoID1cbiAgICAgICAgVGFzay5tYXAyIFRpbWUudG9Nb250aCBUaW1lLmhlcmUgVGltZS5ub3dcblxuKipOb3RlOioqIFNheSB3ZSB3ZXJlIGRvaW5nIEhUVFAgcmVxdWVzdHMgaW5zdGVhZC4gYG1hcDJgIGRvZXMgZWFjaCB0YXNrIGluXG5vcmRlciwgc28gaXQgd291bGQgdHJ5IHRoZSBmaXJzdCByZXF1ZXN0IGFuZCBvbmx5IGNvbnRpbnVlIGFmdGVyIGl0IHN1Y2NlZWRzLlxuSWYgaXQgZmFpbHMsIHRoZSB3aG9sZSB0aGluZyBmYWlscyFcblxuW3RpbWVdOiBUaW1lXG5cbi19XG5tYXAyIDogKGEgLT4gYiAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCByZXN1bHRcbm1hcDIgZnVuYyB0YXNrQSB0YXNrQiA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYiAtPiBzdWNjZWVkIChmdW5jIGEgYikpXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXAzIDogKGEgLT4gYiAtPiBjIC0+IHJlc3VsdCkgLT4gVGFzayB4IGEgLT4gVGFzayB4IGIgLT4gVGFzayB4IGMgLT4gVGFzayB4IHJlc3VsdFxubWFwMyBmdW5jIHRhc2tBIHRhc2tCIHRhc2tDID1cbiAgICB0YXNrQVxuICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAoXFxhIC0+XG4gICAgICAgICAgICAgICAgdGFza0JcbiAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgKFxcYiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcYyAtPiBzdWNjZWVkIChmdW5jIGEgYiBjKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuXG57LXwgLX1cbm1hcDQgOiAoYSAtPiBiIC0+IGMgLT4gZCAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCByZXN1bHRcbm1hcDQgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlbiAoXFxkIC0+IHN1Y2NlZWQgKGZ1bmMgYSBiIGMgZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiByZXN1bHQpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiIC0+IFRhc2sgeCBjIC0+IFRhc2sgeCBkIC0+IFRhc2sgeCBlIC0+IFRhc2sgeCByZXN1bHRcbm1hcDUgZnVuYyB0YXNrQSB0YXNrQiB0YXNrQyB0YXNrRCB0YXNrRSA9XG4gICAgdGFza0FcbiAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgKFxcYSAtPlxuICAgICAgICAgICAgICAgIHRhc2tCXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcXGIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8PiBhbmRUaGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXFxjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfD4gYW5kVGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxcZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcZSAtPiBzdWNjZWVkIChmdW5jIGEgYiBjIGQgZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cblxuey18IFN0YXJ0IHdpdGggYW4gYXJyYXkgb2YgdGFza3MsIGFuZCB0dXJuIHRoZW0gaW50byBhIHNpbmdsZSB0YXNrIHRoYXQgcmV0dXJucyBhXG5hcnJheS4gVGhlIHRhc2tzIHdpbGwgYmUgcnVuIGluIG9yZGVyIG9uZS1ieS1vbmUgYW5kIGlmIGFueSB0YXNrIGZhaWxzIHRoZSB3aG9sZVxuc2VxdWVuY2UgZmFpbHMuXG5cbiAgICBzZXF1ZW5jZSBbIHN1Y2NlZWQgMSwgc3VjY2VlZCAyIF0gPT0gc3VjY2VlZCBbIDEsIDIgXVxuXG4tfVxuc2VxdWVuY2UgOiBBcnJheSAoVGFzayB4IGEpIC0+IFRhc2sgeCAoQXJyYXkgYSlcbnNlcXVlbmNlIHRhc2tzID1cbiAgICBBcnJheS5mb2xkciAobWFwMiBBcnJheS5wdXNoRmlyc3QpIChzdWNjZWVkIFtdKSB0YXNrc1xuXG5cblxuLS0gQ0hBSU5JTkdcblxuXG57LXwgQ2hhaW4gdG9nZXRoZXIgYSB0YXNrIGFuZCBhIGNhbGxiYWNrLiBUaGUgZmlyc3QgdGFzayB3aWxsIHJ1biwgYW5kIGlmIGl0IGlzXG5zdWNjZXNzZnVsLCB5b3UgZ2l2ZSB0aGUgcmVzdWx0IHRvIHRoZSBjYWxsYmFjayByZXN1bHRpbmcgaW4gYW5vdGhlciB0YXNrLiBUaGlzXG50YXNrIHRoZW4gZ2V0cyBydW4uIFdlIGNvdWxkIHVzZSB0aGlzIHRvIG1ha2UgYSB0YXNrIHRoYXQgcmVzb2x2ZXMgYW4gaG91ciBmcm9tXG5ub3c6XG5cblxuICAgIGltcG9ydCBQcm9jZXNzXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHRpbWVJbk9uZUhvdXIgOiBUYXNrIHggVGltZS5Qb3NpeFxuICAgIHRpbWVJbk9uZUhvdXIgPVxuICAgICAgICBQcm9jZXNzLnNsZWVwICg2MCAqIDYwICogMTAwMClcbiAgICAgICAgICAgIHw+IGFuZFRoZW4gKFxcXyAtPiBUaW1lLm5vdylcblxuRmlyc3QgdGhlIHByb2Nlc3Mgc2xlZXBzIGZvciBhbiBob3VyICoqYW5kIHRoZW4qKiBpdCB0ZWxscyB1cyB3aGF0IHRpbWUgaXQgaXMuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gVGFzayB4IGIpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeCBiXG5hbmRUaGVuID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIuYW5kVGhlblxuXG5cbnstfCBUaGlzIGlzIGxpa2UgW2FuZFRoZW5dKGFuZFRoZW4pIGJ1dCB0aGUgYXJndW1lbnRzIGFyZSByZXZlcnNlZC4gVGhlIGNhbGxiYWNrXG5pcyB0aGUgbGFzdCBhcmd1bWVudCwgaW5zdGVhZCBvZiB0aGUgZmlyc3QuIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIHdyaXRlIGltcGVyYXRpdmVcbmNvZGUgd2hlcmUgZWFjaCBjYWxsYmFjayBpbnZvbHZlcyBtb3JlIGxvZ2ljLlxuXG4gICAgaW1wb3J0IFByb2Nlc3NcbiAgICBpbXBvcnQgVGltZVxuXG4gICAgdGltZUluT25lSG91ciA6IFRhc2sgeCBUaW1lLlBvc2l4XG4gICAgdGltZUluT25lSG91ciA9XG4gICAgICAgIFRhc2suYXdhaXQgKFByb2Nlc3Muc2xlZXAgPHwgNjAgKiA2MCAqIDEwMDApIDx8IFxcXyAtPlxuICAgICAgICAgICAgVGltZS5ub3dcblxuKGEpd2FpdCBmb3IgYW4gaG91ciwgdGhlbiBmZXRjaCB0aGUgY3VycmVudCB0aW1lLlxuXG4tfVxuYXdhaXQgOiBUYXNrIHggYSAtPiAoYSAtPiBUYXNrIHggYikgLT4gVGFzayB4IGJcbmF3YWl0IHRzayBjYWxsYmFjayA9XG4gICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLmFuZFRoZW4gY2FsbGJhY2sgdHNrXG5cblxuLS0gRVJST1JTXG5cblxuey18IFJlY292ZXIgZnJvbSBhIGZhaWx1cmUgaW4gYSB0YXNrLiBJZiB0aGUgZ2l2ZW4gdGFzayBmYWlscywgd2UgdXNlIHRoZVxuY2FsbGJhY2sgdG8gcmVjb3Zlci5cblxuICAgIGZhaWwgXCJmaWxlIG5vdCBmb3VuZFwiXG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA0MlxuXG4gICAgc3VjY2VlZCA5XG4gICAgICB8PiBvbkVycm9yIChcXG1zZyAtPiBzdWNjZWVkIDQyKVxuICAgICAgLS0gc3VjY2VlZCA5XG5cbi19XG5vbkVycm9yIDogKHggLT4gVGFzayB5IGEpIC0+IFRhc2sgeCBhIC0+IFRhc2sgeSBhXG5vbkVycm9yID1cbiAgICBHcmVuLktlcm5lbC5TY2hlZHVsZXIub25FcnJvclxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIGVycm9yIHZhbHVlLiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IG5lZWQgYSBidW5jaCBvZiBlcnJvclxudHlwZXMgdG8gbWF0Y2ggdXAuXG5cbiAgICB0eXBlIEVycm9yXG4gICAgICAgID0gSHR0cCBIdHRwLkVycm9yXG4gICAgICAgIHwgV2ViR0wgV2ViR0wuRXJyb3JcblxuICAgIGdldFJlc291cmNlcyA6IFRhc2sgRXJyb3IgUmVzb3VyY2VcbiAgICBnZXRSZXNvdXJjZXMgPVxuICAgICAgICBzZXF1ZW5jZVxuICAgICAgICAgICAgWyBtYXBFcnJvciBIdHRwIHNlcnZlclRhc2tcbiAgICAgICAgICAgICwgbWFwRXJyb3IgV2ViR0wgdGV4dHVyZVRhc2tcbiAgICAgICAgICAgIF1cblxuLX1cbm1hcEVycm9yIDogKHggLT4geSkgLT4gVGFzayB4IGEgLT4gVGFzayB5IGFcbm1hcEVycm9yIGNvbnZlcnQgdGFzayA9XG4gICAgdGFza1xuICAgICAgICB8PiBvbkVycm9yIChmYWlsIDw8IGNvbnZlcnQpXG5cblxuXG4tLSBDT01NQU5EU1xuXG5cbnR5cGUgTXlDbWQgbXNnXG4gICAgPSBQZXJmb3JtIChUYXNrIE5ldmVyIG1zZylcbiAgICB8IEV4ZWN1dGUgKFRhc2sgTmV2ZXIge30pXG5cblxuey18IExpa2UgSSB3YXMgc2F5aW5nIGluIHRoZSBbYFRhc2tgXSgjVGFzaykgZG9jdW1lbnRhdGlvbiwganVzdCBoYXZpbmcgYVxuYFRhc2tgIGRvZXMgbm90IG1lYW4gaXQgaXMgZG9uZS4gV2UgbXVzdCBjb21tYW5kIEdyZW4gdG8gYHBlcmZvcm1gIHRoZSB0YXNrOlxuXG5cblxuICAgIGltcG9ydCBUYXNrXG4gICAgaW1wb3J0IFRpbWVcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tcbiAgICAgICAgfCBTZWFyY2ggU3RyaW5nXG4gICAgICAgIHwgTmV3VGltZSBUaW1lLlBvc2l4XG5cbiAgICBnZXROZXdUaW1lIDogQ21kIE1zZ1xuICAgIGdldE5ld1RpbWUgPVxuICAgICAgICBUYXNrLnBlcmZvcm0gTmV3VGltZSBUaW1lLm5vd1xuXG5TbyB3ZSBoYXZlIGNoYW5nZWQgYSB0YXNrIGxpa2UgXCJtYWtlIGRlbGljaW91cyBsYXNhZ25hXCIgaW50byBhIGNvbW1hbmQgbGlrZVxuXCJIZXkgR3JlbiwgbWFrZSBkZWxpY2lvdXMgbGFzYWduYSBhbmQgZ2l2ZSBpdCB0byBteSBgdXBkYXRlYCBmdW5jdGlvbiBhcyBhXG5gTXNnYCB2YWx1ZS5cIlxuXG4tfVxucGVyZm9ybSA6IChhIC0+IG1zZykgLT4gVGFzayBOZXZlciBhIC0+IENtZCBtc2dcbnBlcmZvcm0gdG9NZXNzYWdlIHRhc2sgPVxuICAgIGNvbW1hbmQgKFBlcmZvcm0gKG1hcCB0b01lc3NhZ2UgdGFzaykpXG5cblxuey18IFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIFtgcGVyZm9ybWBdKCNwZXJmb3JtKSBleGNlcHQgaXQgY2FuIGhhbmRsZSBmYWlsdXJlcyFcblNvIHdlIGNvdWxkIF9hdHRlbXB0XyB0byBmb2N1cyBvbiBhIGNlcnRhaW4gRE9NIG5vZGUgbGlrZSB0aGlzOlxuXG4gICAgLS0gZ3JlbiBpbnN0YWxsIGdyZW4tbGFuZy9icm93c2VyXG5cblxuICAgIGltcG9ydCBCcm93c2VyLkRvbVxuICAgIGltcG9ydCBUYXNrXG5cbiAgICB0eXBlIE1zZ1xuICAgICAgICA9IENsaWNrXG4gICAgICAgIHwgU2VhcmNoIFN0cmluZ1xuICAgICAgICB8IEZvY3VzIChSZXN1bHQgQnJvd3Nlci5Eb21FcnJvciB7fSlcblxuICAgIGZvY3VzIDogQ21kIE1zZ1xuICAgIGZvY3VzID1cbiAgICAgICAgVGFzay5hdHRlbXB0IEZvY3VzIChCcm93c2VyLkRvbS5mb2N1cyBcIm15LWFwcC1zZWFyY2gtYm94XCIpXG5cblNvIHRoZSB0YXNrIGlzIFwiZm9jdXMgb24gdGhpcyBET00gbm9kZVwiIGFuZCB3ZSBhcmUgdHVybmluZyBpdCBpbnRvIHRoZSBjb21tYW5kXG5cIkhleSBHcmVuLCBhdHRlbXB0IHRvIGZvY3VzIG9uIHRoaXMgRE9NIG5vZGUgYW5kIGdpdmUgbWUgYSBgTXNnYCBhYm91dCB3aGV0aGVyXG55b3Ugc3VjY2VlZGVkIG9yIGZhaWxlZC5cIlxuXG4tfVxuYXR0ZW1wdCA6IChSZXN1bHQgeCBhIC0+IG1zZykgLT4gVGFzayB4IGEgLT4gQ21kIG1zZ1xuYXR0ZW1wdCByZXN1bHRUb01lc3NhZ2UgdGFzayA9XG4gICAgY29tbWFuZFxuICAgICAgICAoUGVyZm9ybVxuICAgICAgICAgICAgKHRhc2tcbiAgICAgICAgICAgICAgICB8PiBhbmRUaGVuIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBPaylcbiAgICAgICAgICAgICAgICB8PiBvbkVycm9yIChzdWNjZWVkIDw8IHJlc3VsdFRvTWVzc2FnZSA8PCBFcnIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuXG57LXwgU29tZXRpbWVzIHdlIHdhbnQgdG8gZ2l2ZSBhIGNvbW1hbmQgd2l0aG91dCBiZWluZyB0b2xkIGhvdyBpdCB3ZW50LiBNYXliZSB3ZVxuYXJlIGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBzY3JlZW4sIG9yIGNoYW5naW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdy5cbkluIGVpdGhlciBjYXNlLCB0aGVyZSdzIHJlYWxseSBub3RoaW5nIGZvciB1cyB0byBkbyBhZnRlcndhcmRzLiBJbiB0aG9zZSBjYXNlc1xud2UgY2FuIHVzZSBgZXhlY3V0ZWAuXG4tfVxuZXhlY3V0ZSA6IFRhc2sgTmV2ZXIgYSAtPiBDbWQgbXNnXG5leGVjdXRlIHRhc2sgPVxuICAgIGNvbW1hbmQgKEV4ZWN1dGUgKG1hcCAoXFxfIC0+IHt9KSB0YXNrKSlcblxuXG5jbWRNYXAgOiAoYSAtPiBiKSAtPiBNeUNtZCBhIC0+IE15Q21kIGJcbmNtZE1hcCB0YWdnZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIFBlcmZvcm0gKG1hcCB0YWdnZXIgdGFzaylcblxuICAgICAgICBFeGVjdXRlIHRhc2sgLT5cbiAgICAgICAgICAgIEV4ZWN1dGUgdGFza1xuXG5cbi0tIE1BTkFHRVJcblxuXG5pbml0IDogVGFzayBOZXZlciB7fVxuaW5pdCA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbm9uRWZmZWN0cyA6IFBsYXRmb3JtLlJvdXRlciBtc2cgTmV2ZXIgLT4gQXJyYXkgKE15Q21kIG1zZykgLT4ge30gLT4gVGFzayBOZXZlciB7fVxub25FZmZlY3RzIHJvdXRlciBjb21tYW5kcyBzdGF0ZSA9XG4gICAgbWFwXG4gICAgICAgIChcXF8gLT4ge30pXG4gICAgICAgIChzZXF1ZW5jZSAoQXJyYXkubWFwIChzcGF3bkNtZCByb3V0ZXIpIGNvbW1hbmRzKSlcblxuXG5vblNlbGZNc2cgOiBQbGF0Zm9ybS5Sb3V0ZXIgbXNnIE5ldmVyIC0+IE5ldmVyIC0+IHt9IC0+IFRhc2sgTmV2ZXIge31cbm9uU2VsZk1zZyBfIF8gXyA9XG4gICAgc3VjY2VlZCB7fVxuXG5cbnNwYXduQ21kIDogUGxhdGZvcm0uUm91dGVyIG1zZyBOZXZlciAtPiBNeUNtZCBtc2cgLT4gVGFzayB4IHt9XG5zcGF3bkNtZCByb3V0ZXIgY21kID1cbiAgICB3aGVuIGNtZCBpc1xuICAgICAgICBQZXJmb3JtIHRhc2sgLT5cbiAgICAgICAgICAgIEdyZW4uS2VybmVsLlNjaGVkdWxlci5zcGF3blxuICAgICAgICAgICAgICAgICh0YXNrXG4gICAgICAgICAgICAgICAgICAgIHw+IGFuZFRoZW4gKFBsYXRmb3JtLnNlbmRUb0FwcCByb3V0ZXIpXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgIEV4ZWN1dGUgdGFzayAtPlxuICAgICAgICAgICAgR3Jlbi5LZXJuZWwuU2NoZWR1bGVyLnNwYXduIHRhc2tcbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybSBleHBvc2luZ1xuICAgICggUHJvZ3JhbSwgd29ya2VyXG4gICAgLCBUYXNrLCBQcm9jZXNzSWRcbiAgICAsIFJvdXRlciwgc2VuZFRvQXBwLCBzZW5kVG9TZWxmXG4gICAgKVxuXG57LXwgVGhpcyBtb2R1bGUgY29udGFpbnMgZGVmaW5pdGlvbnMgaW1wb3J0YW50IHRvIHRoZSBsYW5ndWFnZSBydW50aW1lLlxuWW91J3JlIHVubGlrZWx5IHRvIG1ha2UgZGlyZWN0IHVzZSBvZiB0aGVzZSB0aGluZ3MgeW91cnNlbGYuXG5cblxuQGRvY3MgUHJvZ3JhbSwgd29ya2VyXG5cblxuIyMgVGFza3MgYW5kIFByb2Nlc3Nlc1xuXG5AZG9jcyBUYXNrLCBQcm9jZXNzSWRcblxuXG4jIyBFZmZlY3QgTWFuYWdlciBIZWxwZXJzXG5cbkVmZmVjdCBtYW5hZ2VycyBjYW4gYmUgdmlld2VkIGFzIHByb2dyYW1zLXdpdGhpbi1hLXByb2dyYW0uIFRoZXkgaGF2ZSB0aGVpciBvd25cbnN0YXRlLCBhbmQgY29tbXVuaWNhdGUgd2l0aCB0aGUgYXBwbGljYXRpb24gdXNpbmcgbWVzc2FnZXMuXG5cbkVmZmVjdCBtYW5hZ2VycyBhcmUgdXNlZCBpbnRlcm5hbGx5IGZvciBtYW55IHRoaW5ncywgYnV0IGlzbid0IGNvbnNpZGVyZWQgdG8gYmVcbnRydWx5IHN0YWJsZS4gSXQncyBsaWtlbHkgdGhhdCB0aGlzIGZlYXR1cmUgd2lsbCBiZSByZWRlc2lnbmVkIGluIGEgZnV0dXJlIHJlbGFzZS5cblxuXG5AZG9jcyBSb3V0ZXIsIHNlbmRUb0FwcCwgc2VuZFRvU2VsZlxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChOZXZlcilcbmltcG9ydCBHcmVuLktlcm5lbC5QbGF0Zm9ybVxuaW1wb3J0IEdyZW4uS2VybmVsLlNjaGVkdWxlclxuaW1wb3J0IFBsYXRmb3JtLkNtZCBleHBvc2luZyAoQ21kKVxuaW1wb3J0IFBsYXRmb3JtLlN1YiBleHBvc2luZyAoU3ViKVxuXG5cblxuLS0gUFJPR1JBTVNcblxuXG57LXwgQSBgUHJvZ3JhbWAgZGVzY3JpYmVzIGFuIEdyZW4gcHJvZ3JhbSEgSG93IGRvZXMgaXQgcmVhY3QgdG8gaW5wdXQ/IERvZXMgaXRcbnNob3cgYW55dGhpbmcgb24gc2NyZWVuPyBFdGMuXG4tfVxudHlwZSBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuICAgID0gUHJvZ3JhbVxuXG5cbnstfCBDcmVhdGUgYSBbaGVhZGxlc3NdIHByb2dyYW0gd2l0aCBubyB1c2VyIGludGVyZmFjZS5cblxuVGhpcyBpcyBncmVhdCBpZiB5b3Ugd2FudCB0byB1c2UgR3JlbiBhcyB0aGUgJmxkcXVvO2JyYWluJnJkcXVvOyBmb3Igc29tZXRoaW5nXG5lbHNlLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIHNlbmQgbWVzc2FnZXMgb3V0IHBvcnRzIHRvIG1vZGlmeSB0aGUgRE9NLCBidXQgZG9cbmFsbCB0aGUgY29tcGxleCBsb2dpYyBpbiBHcmVuLlxuXG5baGVhZGxlc3NdOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFkbGVzc19zb2Z0d2FyZVxuXG5Jbml0aWFsaXppbmcgYSBoZWFkbGVzcyBwcm9ncmFtIGZyb20gSmF2YVNjcmlwdCBsb29rcyBsaWtlIHRoaXM6XG5cbmBgYGphdmFzY3JpcHRcbnZhciBhcHAgPSBHcmVuLk15VGhpbmcuaW5pdCgpO1xuYGBgXG5cbklmIHlvdSBfZG9fIHdhbnQgdG8gY29udHJvbCB0aGUgdXNlciBpbnRlcmZhY2UgaW4gR3JlbiwgdGhlIFtgQnJvd3NlcmBdW2Jyb3dzZXJdXG5tb2R1bGUgaGFzIGEgZmV3IHdheXMgdG8gY3JlYXRlIHRoYXQga2luZCBvZiBgUHJvZ3JhbWAgaW5zdGVhZCFcblxuW2hlYWRsZXNzXTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVhZGxlc3Nfc29mdHdhcmVcblticm93c2VyXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9Ccm93c2VyXG5cbi19XG53b3JrZXIgOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgdXBkYXRlIDogbXNnIC0+IG1vZGVsIC0+IHsgbW9kZWwgOiBtb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgICwgc3Vic2NyaXB0aW9ucyA6IG1vZGVsIC0+IFN1YiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbndvcmtlciA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ud29ya2VyXG5cblxuXG4tLSBUQVNLUyBhbmQgUFJPQ0VTU0VTXG5cblxuey18IEhlYWQgb3ZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIFtgVGFza2BdKFRhc2spIG1vZHVsZSBmb3IgbW9yZVxuaW5mb3JtYXRpb24gb24gdGhpcy4gSXQgaXMgb25seSBkZWZpbmVkIGhlcmUgYmVjYXVzZSBpdCBpcyBhIHBsYXRmb3JtXG5wcmltaXRpdmUuXG4tfVxudHlwZSBUYXNrIGVyciBva1xuICAgID0gVGFza1xuXG5cbnstfCBIZWFkIG92ZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBbYFByb2Nlc3NgXShQcm9jZXNzKSBtb2R1bGUgZm9yXG5pbmZvcm1hdGlvbiBvbiB0aGlzLiBJdCBpcyBvbmx5IGRlZmluZWQgaGVyZSBiZWNhdXNlIGl0IGlzIGEgcGxhdGZvcm1cbnByaW1pdGl2ZS5cbi19XG50eXBlIFByb2Nlc3NJZFxuICAgID0gUHJvY2Vzc0lkXG5cblxuXG4tLSBFRkZFQ1QgTUFOQUdFUiBJTlRFUk5BTFNcblxuXG57LXwgQW4gZWZmZWN0IG1hbmFnZXIgaGFzIGFjY2VzcyB0byBhIOKAnHJvdXRlcuKAnSB0aGF0IHJvdXRlcyBtZXNzYWdlcyBiZXR3ZWVuXG50aGUgbWFpbiBhcHAgYW5kIHlvdXIgaW5kaXZpZHVhbCBlZmZlY3QgbWFuYWdlci5cbi19XG50eXBlIFJvdXRlciBhcHBNc2cgc2VsZk1zZ1xuICAgID0gUm91dGVyXG5cblxuey18IFNlbmQgdGhlIHJvdXRlciBhIG1lc3NhZ2UgZm9yIHRoZSBtYWluIGxvb3Agb2YgeW91ciBhcHAuIFRoaXMgbWVzc2FnZSB3aWxsXG5iZSBoYW5kbGVkIGJ5IHRoZSBvdmVyYWxsIGB1cGRhdGVgIGZ1bmN0aW9uLCBqdXN0IGxpa2UgZXZlbnRzIGZyb20gYEh0bWxgLlxuLX1cbnNlbmRUb0FwcCA6IFJvdXRlciBtc2cgYSAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9BcHAgPVxuICAgIEdyZW4uS2VybmVsLlBsYXRmb3JtLnNlbmRUb0FwcFxuXG5cbnstfCBTZW5kIHRoZSByb3V0ZXIgYSBtZXNzYWdlIGZvciB5b3VyIGVmZmVjdCBtYW5hZ2VyLiBUaGlzIG1lc3NhZ2Ugd2lsbFxuYmUgcm91dGVkIHRvIHRoZSBgb25TZWxmTXNnYCBmdW5jdGlvbiwgd2hlcmUgeW91IGNhbiB1cGRhdGUgdGhlIHN0YXRlIG9mIHlvdXJcbmVmZmVjdCBtYW5hZ2VyIGFzIG5lY2Vzc2FyeS5cblxuQXMgYW4gZXhhbXBsZSwgdGhlIGVmZmVjdCBtYW5hZ2VyIGZvciB3ZWIgc29ja2V0c1xuXG4tfVxuc2VuZFRvU2VsZiA6IFJvdXRlciBhIG1zZyAtPiBtc2cgLT4gVGFzayB4IHt9XG5zZW5kVG9TZWxmID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5zZW5kVG9TZWxmXG4iLAogICAgICAgICJtb2R1bGUgQnJvd3NlciBleHBvc2luZ1xuICAgICggc2FuZGJveFxuICAgICwgZWxlbWVudFxuICAgICwgZG9jdW1lbnQsIERvY3VtZW50XG4gICAgLCBhcHBsaWNhdGlvbiwgVXJsUmVxdWVzdCguLilcbiAgICApXG5cbnstfCBUaGlzIG1vZHVsZSBoZWxwcyB5b3Ugc2V0IHVwIGFuIEdyZW4gYFByb2dyYW1gIHdpdGggZnVuY3Rpb25zIGxpa2Vcbltgc2FuZGJveGBdKCNzYW5kYm94KSBhbmQgW2Bkb2N1bWVudGBdKCNkb2N1bWVudCkuXG5cblxuIyMgU2FuZGJveGVzXG5cbkBkb2NzIHNhbmRib3hcblxuXG4jIyBFbGVtZW50c1xuXG5AZG9jcyBlbGVtZW50XG5cblxuIyMgRG9jdW1lbnRzXG5cbkBkb2NzIGRvY3VtZW50LCBEb2N1bWVudFxuXG5cbiMjIEFwcGxpY2F0aW9uc1xuXG5AZG9jcyBhcHBsaWNhdGlvbiwgVXJsUmVxdWVzdFxuXG4tfVxuXG5pbXBvcnQgQnJvd3Nlci5OYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25cbmltcG9ydCBEaWN0XG5pbXBvcnQgR3Jlbi5LZXJuZWwuQnJvd3NlclxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEh0bWwpXG5pbXBvcnQgVXJsXG5cblxuXG4tLSBTQU5EQk9YXG5cblxuey18IENyZWF0ZSBhIOKAnHNhbmRib3hlZOKAnSBwcm9ncmFtIHRoYXQgY2Fubm90IGNvbW11bmljYXRlIHdpdGggdGhlIG91dHNpZGVcbndvcmxkLlxuXG5UaGlzIGlzIGdyZWF0IGZvciBsZWFybmluZyB0aGUgYmFzaWNzIG9mIFtUaGUgRWxtIEFyY2hpdGVjdHVyZV1bdGVhXSwgd2hpY2ggR3JlblxudXNlcyBmb3Igc3RydWN0dXJpbmcgYXBwbGljYXRpb25zLiBZb3UgY2FuIHNlZSBzYW5kYm94ZXMgaW4gYWN0aW9uIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZXM6XG5cbiAgLSBbQnV0dG9uc10oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL2J1dHRvbnMuaHRtbClcbiAgLSBbVGV4dCBGaWVsZHNdKGh0dHBzOi8vZ3VpZGUuZWxtLWxhbmcub3JnL2FyY2hpdGVjdHVyZS90ZXh0X2ZpZWxkcy5odG1sKVxuICAtIFtGb3Jtc10oaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvYXJjaGl0ZWN0dXJlL2Zvcm1zLmh0bWwpXG5cblt0ZWFdOiBodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvXG5cbi19XG5zYW5kYm94IDpcbiAgICB7IGluaXQgOiBtb2RlbFxuICAgICwgdmlldyA6IG1vZGVsIC0+IEh0bWwgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4gbW9kZWxcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSB7fSBtb2RlbCBtc2dcbnNhbmRib3ggaW1wbCA9XG4gICAgR3Jlbi5LZXJuZWwuQnJvd3Nlci5lbGVtZW50XG4gICAgICAgIHsgaW5pdCA9IFxce30gLT4geyBtb2RlbCA9IGltcGwuaW5pdCwgY29tbWFuZCA9IENtZC5ub25lIH1cbiAgICAgICAgLCB2aWV3ID0gaW1wbC52aWV3XG4gICAgICAgICwgdXBkYXRlID0gXFxtc2cgbW9kZWwgLT4geyBtb2RlbCA9IGltcGwudXBkYXRlIG1zZyBtb2RlbCwgY29tbWFuZCA9IENtZC5ub25lIH1cbiAgICAgICAgLCBzdWJzY3JpcHRpb25zID0gXFxfIC0+IFN1Yi5ub25lXG4gICAgICAgIH1cblxuXG5cbi0tIEVMRU1FTlRcblxuXG57LXwgQ3JlYXRlIGFuIEhUTUwgZWxlbWVudCBtYW5hZ2VkIGJ5IEdyZW4uIFRoZSByZXN1bHRpbmcgZWxlbWVudHMgYXJlIGVhc3kgdG9cbmVtYmVkIGluIGxhcmdlciBKYXZhU2NyaXB0IHByb2plY3RzLCBhbmQgbG90cyBvZiBjb21wYW5pZXMgdGhhdCB1c2UgR3Jlblxuc3RhcnRlZCB3aXRoIHRoaXMgYXBwcm9hY2ghIFRyeSBpdCBvdXQgb24gc29tZXRoaW5nIHNtYWxsLiBJZiBpdCB3b3JrcywgZ3JlYXQsXG5kbyBtb3JlISBJZiBub3QsIHJldmVydCwgbm8gYmlnIGRlYWwuXG5cblVubGlrZSBhIFtgc2FuZGJveGBdKCNzYW5kYm94KSwgYW4gYGVsZW1lbnRgIGNhbiB0YWxrIHRvIHRoZSBvdXRzaWRlIHdvcmxkIGluXG5hIGNvdXBsZSB3YXlzOlxuXG4gIC0gYENtZGAgJm1kYXNoOyB5b3UgY2FuIOKAnGNvbW1hbmTigJ0gdGhlIEdyZW4gcnVudGltZSB0byBkbyBzdHVmZiwgbGlrZSBIVFRQLlxuICAtIGBTdWJgICZtZGFzaDsgeW91IGNhbiDigJxzdWJzY3JpYmXigJ0gdG8gZXZlbnQgc291cmNlcywgbGlrZSBjbG9jayB0aWNrcy5cbiAgLSBgZmxhZ3NgICZtZGFzaDsgSmF2YVNjcmlwdCBjYW4gcGFzcyBpbiBkYXRhIHdoZW4gc3RhcnRpbmcgdGhlIEdyZW4gcHJvZ3JhbVxuICAtIGBwb3J0c2AgJm1kYXNoOyBzZXQgdXAgYSBjbGllbnQtc2VydmVyIHJlbGF0aW9uc2hpcCB3aXRoIEphdmFTY3JpcHRcblxuQXMgeW91IHJlYWQgW3RoZSBndWlkZV1bZ3VpZGVdIHlvdSB3aWxsIHJ1biBpbnRvIGEgYnVuY2ggb2YgZXhhbXBsZXMgb2YgYGVsZW1lbnRgXG5pbiBbdGhpcyBzZWN0aW9uXVtmeF0uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBmbGFncyBhbmQgcG9ydHMgaW4gW3RoZSBpbnRlcm9wXG5zZWN0aW9uXVtpbnRlcm9wXS5cblxuW2d1aWRlXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL1xuW2Z4XTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2VmZmVjdHMvXG5baW50ZXJvcF06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9pbnRlcm9wL1xuXG4tfVxuZWxlbWVudCA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gSHRtbCBtc2dcbiAgICAsIHVwZGF0ZSA6IG1zZyAtPiBtb2RlbCAtPiB7IG1vZGVsIDogbW9kZWwsIGNvbW1hbmQgOiBDbWQgbXNnIH1cbiAgICAsIHN1YnNjcmlwdGlvbnMgOiBtb2RlbCAtPiBTdWIgbXNnXG4gICAgfVxuICAgIC0+IFByb2dyYW0gZmxhZ3MgbW9kZWwgbXNnXG5lbGVtZW50ID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmVsZW1lbnRcblxuXG5cbi0tIERPQ1VNRU5UXG5cblxuey18IENyZWF0ZSBhbiBIVE1MIGRvY3VtZW50IG1hbmFnZWQgYnkgR3Jlbi4gVGhpcyBleHBhbmRzIHVwb24gd2hhdCBgZWxlbWVudGBcbmNhbiBkbyBpbiB0aGF0IGB2aWV3YCBub3cgZ2l2ZXMgeW91IGNvbnRyb2wgb3ZlciB0aGUgYDx0aXRsZT5gIGFuZCBgPGJvZHk+YC5cbi19XG5kb2N1bWVudCA6XG4gICAgeyBpbml0IDogZmxhZ3MgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gRG9jdW1lbnQgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgIH1cbiAgICAtPiBQcm9ncmFtIGZsYWdzIG1vZGVsIG1zZ1xuZG9jdW1lbnQgPVxuICAgIEdyZW4uS2VybmVsLkJyb3dzZXIuZG9jdW1lbnRcblxuXG57LXwgVGhpcyBkYXRhIHNwZWNpZmllcyB0aGUgYDx0aXRsZT5gIGFuZCBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgc2hvdWxkIGdvIGluXG50aGUgYDxib2R5PmAuIFRoaXMgbWVhbnMgeW91IGNhbiB1cGRhdGUgdGhlIHRpdGxlIGFzIHlvdXIgYXBwbGljYXRpb24gY2hhbmdlcy5cbk1heWJlIHlvdXIgXCJzaW5nbGUtcGFnZSBhcHBcIiBuYXZpZ2F0ZXMgdG8gYSBcImRpZmZlcmVudCBwYWdlXCIsIG1heWJlIGEgY2FsZW5kYXJcbmFwcCBzaG93cyBhbiBhY2N1cmF0ZSBkYXRlIGluIHRoZSB0aXRsZSwgZXRjLlxuXG4+ICoqTm90ZSBhYm91dCBDU1M6KiogVGhpcyBsb29rcyBzaW1pbGFyIHRvIGFuIGA8aHRtbD5gIGRvY3VtZW50LCBidXQgdGhpcyBpc1xuPiBub3QgdGhlIHBsYWNlIHRvIG1hbmFnZSBDU1MgYXNzZXRzLiBJZiB5b3Ugd2FudCB0byB3b3JrIHdpdGggQ1NTLCB0aGVyZSBhcmVcbj4gYSBjb3VwbGUgd2F5czpcbj5cbj4gMS4gIFBhY2thZ2VzIGxpa2UgW2BydGZlbGRtYW4vZWxtLWNzc2BdW2VsbS1jc3NdIGdpdmUgYWxsIG9mIHRoZSBmZWF0dXJlc1xuPiAgICAgb2YgQ1NTIHdpdGhvdXQgYW55IENTUyBmaWxlcy4gWW91IGNhbiBhZGQgYWxsIHRoZSBzdHlsZXMgeW91IG5lZWQgaW4geW91clxuPiAgICAgYHZpZXdgIGZ1bmN0aW9uLCBhbmQgdGhlcmUgaXMgbm8gbmVlZCB0byB3b3JyeSBhYm91dCBjbGFzcyBuYW1lcyBtYXRjaGluZy5cbj5cbj4gMi4gIENvbXBpbGUgeW91ciBHcmVuIGNvZGUgdG8gSmF2YVNjcmlwdCB3aXRoIGBncmVuIG1ha2UgLS1vdXRwdXQ9Z3Jlbi5qc2AgYW5kXG4+ICAgICB0aGVuIG1ha2UgeW91ciBvd24gSFRNTCBmaWxlIHRoYXQgbG9hZHMgYGdyZW4uanNgIGFuZCB0aGUgQ1NTIGZpbGUgeW91IHdhbnQuXG4+ICAgICBXaXRoIHRoaXMgYXBwcm9hY2gsIGl0IGRvZXMgbm90IG1hdHRlciB3aGVyZSB0aGUgQ1NTIGNvbWVzIGZyb20uIFdyaXRlIGl0XG4+ICAgICBieSBoYW5kLiBHZW5lcmF0ZSBpdC4gV2hhdGV2ZXIgeW91IHdhbnQgdG8gZG8uXG4+XG4+IDMuICBJZiB5b3UgbmVlZCB0byBjaGFuZ2UgYDxsaW5rPmAgdGFncyBkeW5hbWljYWxseSwgeW91IGNhbiBzZW5kIG1lc3NhZ2VzXG4+ICAgICBvdXQgYSBwb3J0IHRvIGRvIGl0IGluIEphdmFTY3JpcHQuXG4+XG4+IFRoZSBiaWdnZXIgcG9pbnQgaGVyZSBpcyB0aGF0IGxvYWRpbmcgYXNzZXRzIGludm9sdmVzIHRvdWNoaW5nIHRoZSBgPGhlYWQ+YFxuPiBhcyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2YgYnJvd3NlcnMsIGJ1dCB0aGF0IGRvZXMgbm90IG1lYW4gaXQgc2hvdWxkIGJlXG4+IHRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgYHZpZXdgIGZ1bmN0aW9uIGluIEdyZW4uIFNvIHdlIGRvIGl0IGRpZmZlcmVudGx5IVxuXG5bZWxtLWNzc106IC9wYWNrYWdlcy9ydGZlbGRtYW4vZWxtLWNzcy9sYXRlc3QvXG5cbi19XG50eXBlIGFsaWFzIERvY3VtZW50IG1zZyA9XG4gICAgeyB0aXRsZSA6IFN0cmluZ1xuICAgICwgYm9keSA6IEFycmF5IChIdG1sIG1zZylcbiAgICB9XG5cblxuXG4tLSBBUFBMSUNBVElPTlxuXG5cbnstfCBDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBtYW5hZ2VzIFtgVXJsYF1bdXJsXSBjaGFuZ2VzLlxuXG4qKldoZW4gdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cyoqLCBgaW5pdGAgZ2V0cyB0aGUgaW5pdGlhbCBgVXJsYC4gWW91IGNhbiBzaG93XG5kaWZmZXJlbnQgdGhpbmdzIGRlcGVuZGluZyBvbiB0aGUgYFVybGAhXG5cbioqV2hlbiBzb21lb25lIGNsaWNrcyBhIGxpbmsqKiwgbGlrZSBgPGEgaHJlZj1cIi9ob21lXCI+SG9tZTwvYT5gLCBpdCBhbHdheXMgZ29lc1xudGhyb3VnaCBgb25VcmxSZXF1ZXN0YC4gVGhlIHJlc3VsdGluZyBtZXNzYWdlIGdvZXMgdG8geW91ciBgdXBkYXRlYCBmdW5jdGlvbixcbmdpdmluZyB5b3UgYSBjaGFuY2UgdG8gc2F2ZSBzY3JvbGwgcG9zaXRpb24gb3IgcGVyc2lzdCBkYXRhIGJlZm9yZSBjaGFuZ2luZ1xudGhlIFVSTCB5b3Vyc2VsZiB3aXRoIFtgcHVzaFVybGBdW2JucF0gb3IgW2Bsb2FkYF1bYm5sXS4gTW9yZSBpbmZvIG9uIHRoaXMgaW5cbnRoZSBbYFVybFJlcXVlc3RgXSgjVXJsUmVxdWVzdCkgZG9jcyFcblxuKipXaGVuIHRoZSBVUkwgY2hhbmdlcyoqLCB0aGUgbmV3IGBVcmxgIGdvZXMgdGhyb3VnaCBgb25VcmxDaGFuZ2VgLiBUaGVcbnJlc3VsdGluZyBtZXNzYWdlIGdvZXMgdG8gYHVwZGF0ZWAgd2hlcmUgeW91IGNhbiBkZWNpZGUgd2hhdCB0byBzaG93IG5leHQuXG5cbkFwcGxpY2F0aW9ucyBhbHdheXMgdXNlIHRoZSBbYEJyb3dzZXIuTmF2aWdhdGlvbmBdW2JuXSBtb2R1bGUgZm9yIHByZWNpc2VcbmNvbnRyb2wgb3ZlciBgVXJsYCBjaGFuZ2VzLlxuXG4qKk1vcmUgSW5mbzoqKiBIZXJlIGFyZSBzb21lIGV4YW1wbGUgdXNhZ2VzIG9mIGBhcHBsaWNhdGlvbmAgcHJvZ3JhbXM6XG5cbiAgLSBbUmVhbFdvcmxkIGV4YW1wbGUgYXBwXShodHRwczovL2dpdGh1Yi5jb20vcnRmZWxkbWFuL2VsbS1zcGEtZXhhbXBsZSlcbiAgLSBbR3JlbuKAmXMgcGFja2FnZSB3ZWJzaXRlXShodHRwczovL2dpdGh1Yi5jb20vZWxtL3BhY2thZ2UuZ3Jlbi1sYW5nLm9yZylcblxuVGhlc2UgYXJlIHF1aXRlIGFkdmFuY2VkIEdyZW4gcHJvZ3JhbXMsIHNvIGJlIHN1cmUgdG8gZ28gdGhyb3VnaCBbdGhlIGd1aWRlXVtnXVxuZmlyc3QgdG8gZ2V0IGEgc29saWQgY29uY2VwdHVhbCBmb3VuZGF0aW9uIGJlZm9yZSBkaXZpbmcgaW4hIElmIHlvdSBzdGFydFxucmVhZGluZyBhIGNhbGN1bHVzIGJvb2sgZnJvbSBwYWdlIDMxNCwgaXQgbWlnaHQgc2VlbSBjb25mdXNpbmcuIFNhbWUgaGVyZSFcblxuKipOb3RlOioqIENhbiBhbiBbYGVsZW1lbnRgXSgjZWxlbWVudCkgbWFuYWdlIHRoZSBVUkwgdG9vPyBSZWFkIFt0aGlzXSFcblxuW2ddOiBodHRwczovL2d1aWRlLmdyZW4tbGFuZy5vcmcvXG5bYm5dOiBCcm93c2VyLk5hdmlnYXRpb25cbltibnBdOiBCcm93c2VyLk5hdmlnYXRpb24jcHVzaFVybFxuW2JubF06IEJyb3dzZXIuTmF2aWdhdGlvbiNsb2FkXG5bdXJsXTogL3BhY2thZ2UvZ3Jlbi1sYW5nL3VybC9sYXRlc3QvbW9kdWxlL1VybCNVcmxcblt0aGlzXTogaHR0cHM6Ly9naXRodWIuY29tL2dyZW4tbGFuZy9icm93c2VyL2Jsb2IvMS4wLjIvbm90ZXMvbmF2aWdhdGlvbi1pbi1lbGVtZW50cy5tZFxuXG4tfVxuYXBwbGljYXRpb24gOlxuICAgIHsgaW5pdCA6IGZsYWdzIC0+IFVybC5VcmwgLT4gTmF2aWdhdGlvbi5LZXkgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCB2aWV3IDogbW9kZWwgLT4gRG9jdW1lbnQgbXNnXG4gICAgLCB1cGRhdGUgOiBtc2cgLT4gbW9kZWwgLT4geyBtb2RlbCA6IG1vZGVsLCBjb21tYW5kIDogQ21kIG1zZyB9XG4gICAgLCBzdWJzY3JpcHRpb25zIDogbW9kZWwgLT4gU3ViIG1zZ1xuICAgICwgb25VcmxSZXF1ZXN0IDogVXJsUmVxdWVzdCAtPiBtc2dcbiAgICAsIG9uVXJsQ2hhbmdlIDogVXJsLlVybCAtPiBtc2dcbiAgICB9XG4gICAgLT4gUHJvZ3JhbSBmbGFncyBtb2RlbCBtc2dcbmFwcGxpY2F0aW9uID1cbiAgICBHcmVuLktlcm5lbC5Ccm93c2VyLmFwcGxpY2F0aW9uXG5cblxuey18IEFsbCBsaW5rcyBpbiBhbiBbYGFwcGxpY2F0aW9uYF0oI2FwcGxpY2F0aW9uKSBjcmVhdGUgYSBgVXJsUmVxdWVzdGAuIFNvXG53aGVuIHlvdSBjbGljayBgPGEgaHJlZj1cIi9ob21lXCI+SG9tZTwvYT5gLCBpdCBkb2VzIG5vdCBqdXN0IG5hdmlnYXRlISBJdFxubm90aWZpZXMgYG9uVXJsUmVxdWVzdGAgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjaGFuZ2UgdGhlIGBVcmxgLlxuXG5cbiMjIyBgSW50ZXJuYWxgIHZzIGBFeHRlcm5hbGBcblxuSW1hZ2luZSB3ZSBhcmUgYnJvd3NpbmcgYGh0dHBzOi8vZXhhbXBsZS5jb21gLiBBbiBgSW50ZXJuYWxgIGxpbmsgd291bGQgYmVcbmxpa2U6XG5cbiAgLSBgc2V0dGluZ3MjcHJpdmFjeWBcbiAgLSBgL2hvbWVgXG4gIC0gYGh0dHBzOi8vZXhhbXBsZS5jb20vaG9tZWBcbiAgLSBgLy9leGFtcGxlLmNvbS9ob21lYFxuXG5BbGwgb2YgdGhlc2UgbGlua3MgZXhpc3QgdW5kZXIgdGhlIGBodHRwczovL2V4YW1wbGUuY29tYCBkb21haW4uIEFuIGBFeHRlcm5hbGBcbmxpbmsgd291bGQgYmUgbGlrZTpcblxuICAtIGBodHRwczovL2dyZW4tbGFuZy5vcmcvZXhhbXBsZXNgXG4gIC0gYGh0dHBzOi8vb3RoZXIuZXhhbXBsZS5jb20vaG9tZWBcbiAgLSBgaHR0cDovL2V4YW1wbGUuY29tL2hvbWVgXG5cbkFueXRoaW5nIHRoYXQgY2hhbmdlcyB0aGUgZG9tYWluLiBOb3RpY2UgdGhhdCBjaGFuZ2luZyB0aGUgcHJvdG9jb2wgZnJvbVxuYGh0dHBzYCB0byBgaHR0cGAgaXMgY29uc2lkZXJlZCBhIGRpZmZlcmVudCBkb21haW4hIChBbmQgdmljZSB2ZXJzYSEpXG5cblxuIyMjIFB1cnBvc2VcblxuSGF2aW5nIGEgYFVybFJlcXVlc3RgIHJlcXVpcmVzIGEgY2FzZSBpbiB5b3VyIGB1cGRhdGVgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBCcm93c2VyIGV4cG9zaW5nICguLilcbiAgICBpbXBvcnQgQnJvd3Nlci5OYXZpZ2F0aW9uIGFzIE5hdlxuICAgIGltcG9ydCBVcmxcblxuICAgIHR5cGUgTXNnXG4gICAgICAgID0gQ2xpY2tlZExpbmsgVXJsUmVxdWVzdFxuXG4gICAgdXBkYXRlIDogTXNnIC0+IE1vZGVsIC0+IHsgbW9kZWwgOiBNb2RlbCwgY29tbWFuZCA6IENtZCBtc2cgfVxuICAgIHVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgICAgICBjYXNlIG1zZyBvZlxuICAgICAgICAgICAgQ2xpY2tlZExpbmsgdXJsUmVxdWVzdCAtPlxuICAgICAgICAgICAgICAgIGNhc2UgdXJsUmVxdWVzdCBvZlxuICAgICAgICAgICAgICAgICAgICBJbnRlcm5hbCB1cmwgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbW9kZWwgPSBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBjb21tYW5kID0gTmF2LnB1c2hVcmwgbW9kZWwua2V5IChVcmwudG9TdHJpbmcgdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsIHVybCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtb2RlbCA9IG1vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGNvbW1hbmQgPSBOYXYubG9hZCB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuVGhpcyBpcyB1c2VmdWwgYmVjYXVzZSBpdCBnaXZlcyB5b3UgYSBjaGFuY2UgdG8gY3VzdG9taXplIHRoZSBiZWhhdmlvciBpbiBlYWNoXG5jYXNlLiBNYXliZSBvbiBzb21lIGBJbnRlcm5hbGAgbGlua3MgeW91IHNhdmUgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aXRoXG5bYEJyb3dzZXIuRG9tLmdldFZpZXdwb3J0YF0oQnJvd3Nlci5Eb20jZ2V0Vmlld3BvcnQpIHNvIHlvdSBjYW4gcmVzdG9yZSBpdFxubGF0ZXIuIE1heWJlIG9uIGBFeHRlcm5hbGAgbGlua3MgeW91IHBlcnNpc3QgcGFydHMgb2YgdGhlIGBNb2RlbGAgb24geW91clxuc2VydmVycyBiZWZvcmUgbGVhdmluZy4gV2hhdGV2ZXIgeW91IG5lZWQgdG8gZG8hXG5cbioqTm90ZToqKiBLbm93aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgbm90IGVub3VnaCB0byByZXN0b3JlIGl0ISBXaGF0IGlmIHRoZVxuYnJvd3NlciBkaW1lbnNpb25zIGNoYW5nZT8gVGhlIHNjcm9sbCBwb3NpdGlvbiB3aWxsIG5vdCBjb3JyZWxhdGUgd2l0aFxuJmxkcXVvO3doYXQgd2FzIG9uIHNjcmVlbiZyZHF1bzsgYW55bW9yZS4gU28gaXQgbWF5IGJlIGJldHRlciB0byByZW1lbWJlclxuJmxkcXVvO3doYXQgd2FzIG9uIHNjcmVlbiZyZHF1bzsgYW5kIHJlY3JlYXRlIHRoZSBwb3NpdGlvbiBiYXNlZCBvbiB0aGF0LiBGb3JcbmV4YW1wbGUsIGluIGEgV2lraXBlZGlhIGFydGljbGUsIHJlbWVtYmVyIHRoZSBoZWFkZXIgdGhhdCB0aGV5IHdlcmUgbG9va2luZyBhdFxubW9zdCByZWNlbnRseS4gW2BCcm93c2VyLkRvbS5nZXRFbGVtZW50YF0oQnJvd3Nlci5Eb20jZ2V0RWxlbWVudCkgaXMgZGVzaWduZWRcbmZvciBmaWd1cmluZyB0aGF0IG91dCFcblxuLX1cbnR5cGUgVXJsUmVxdWVzdFxuICAgID0gSW50ZXJuYWwgVXJsLlVybFxuICAgIHwgRXh0ZXJuYWwgU3RyaW5nXG4iLAogICAgICAgICJtb2R1bGUgRGF0YVRhYmxlIGV4cG9zaW5nXG4gICAgKCB2aWV3XG4gICAgLCBjb25maWcsIHN0cmluZ0NvbHVtbiwgaW50Q29sdW1uLCBmbG9hdENvbHVtbiwgY29sdW1uXG4gICAgLCBTdGF0ZSwgbmV3XG4gICAgLCBTb3J0RGlyZWN0aW9uKC4uKSwgaW5pdGlhbFNvcnRcbiAgICAsIGdldFNvcnRTdGF0ZSwgdXBkYXRlU29ydFN0YXRlLCB1cGRhdGVNdWx0aVNvcnRTdGF0ZVxuICAgICwgZ2V0UGFnZVNpemUsIGdldEFjdGl2ZVJvd0lkLCB1cGRhdGVQYWdlU2l6ZSwgdXBkYXRlQWN0aXZlUm93SWRcbiAgICAsIHNldE5vUGFnaW5hdGlvbiwgc2V0U2ltcGxlUGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbldpdGgsIHNldFNjcm9sbGluZ1BhZ2luYXRpb25XaXRoXG4gICAgLCBwYWdlTGVuZ3RoQ2hvb3NlclxuICAgICwgQ29sdW1uLCBjdXN0b21Db2x1bW4sIHZlcnlDdXN0b21Db2x1bW5cbiAgICAsIFNvcnRlciwgdW5zb3J0YWJsZSwgaW5jcmVhc2luZ0J5LCBkZWNyZWFzaW5nQnksIGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSwgZGVjcmVhc2luZ09ySW5jcmVhc2luZ0J5XG4gICAgLCBDb25maWcsIGN1c3RvbUNvbmZpZywgQ3VzdG9taXphdGlvbnMsIEh0bWxEZXRhaWxzXG4gICAgLCBkZWZhdWx0Q3VzdG9taXphdGlvbnNcbiAgICAsIGdldFNvcnRlZERhdGEsIGdldFBhZ2luYXRlZERhdGFcbiAgICApXG5cbnstfCBUaGlzIGxpYnJhcnkgaGVscHMgeW91IGNyZWF0ZSBzb3J0YWJsZSB0YWJsZXMuIFRoZSBjcnVjaWFsIGZlYXR1cmUgaXMgdGhhdCBpdFxubGV0cyB5b3Ugb3duIHlvdXIgZGF0YSBzZXBhcmF0ZWx5IGFuZCBrZWVwIGl0IGluIHdoYXRldmVyIGZvcm1hdCBpcyBiZXN0IGZvclxueW91LiBUaGlzIHdheSB5b3UgYXJlIGZyZWUgdG8gY2hhbmdlIHlvdXIgZGF0YSB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHRoZSB0YWJsZVxuJmxkcXVvO2dldHRpbmcgb3V0IG9mIHN5bmMmcmRxdW87IHdpdGggdGhlIGRhdGEuIEhhdmluZyBhIHNpbmdsZSBzb3VyY2Ugb2ZcbnRydXRoIGlzIHByZXR0eSBncmVhdCFcblxuSSByZWNvbW1lbmQgY2hlY2tpbmcgb3V0IHRoZSBbZXhhbXBsZXNdIHRvIGdldCBhIGZlZWwgZm9yIGhvdyBpdCB3b3Jrcy5cblxuW2V4YW1wbGVzXTogaHR0cHM6Ly9naXRodWIuY29tL2JpbGxzdGNsYWlyL2VsbS1zb3J0YWJsZS10YWJsZS90cmVlL21hc3Rlci9leGFtcGxlc1xuXG5cbiMgVmlld1xuXG5AZG9jcyB2aWV3XG5cblxuIyBDb25maWd1cmF0aW9uXG5cbkBkb2NzIGNvbmZpZywgc3RyaW5nQ29sdW1uLCBpbnRDb2x1bW4sIGZsb2F0Q29sdW1uLCBjb2x1bW5cblxuXG4jIFN0YXRlXG5cbkBkb2NzIFN0YXRlLCBuZXdcblxuXG4jIFNvcnRlZCBUYWJsZVxuXG5AZG9jcyBTb3J0RGlyZWN0aW9uLCBpbml0aWFsU29ydFxuQGRvY3MgZ2V0U29ydFN0YXRlLCB1cGRhdGVTb3J0U3RhdGUsIHVwZGF0ZU11bHRpU29ydFN0YXRlXG5cblxuIyBQYWdpbmF0ZWQgU29ydGVkIFRhYmxlXG5cbkBkb2NzIGdldFBhZ2VTaXplLCBnZXRBY3RpdmVSb3dJZCwgdXBkYXRlUGFnZVNpemUsIHVwZGF0ZUFjdGl2ZVJvd0lkXG5AZG9jcyBzZXROb1BhZ2luYXRpb24sIHNldFNpbXBsZVBhZ2luYXRpb24sIHNldFBhZ2luYXRpb25XaXRoLCBzZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aFxuQGRvY3MgcGFnZUxlbmd0aENob29zZXJcblxuIyBDcmF6eSBDdXN0b21pemF0aW9uXG5cbklmIHlvdSBhcmUgbmV3IHRvIHRoaXMgbGlicmFyeSwgeW91IGNhbiBwcm9iYWJseSBzdG9wIHJlYWRpbmcgaGVyZS4gQWZ0ZXIgdGhpc1xucG9pbnQgYXJlIGEgYnVuY2ggb2Ygd2F5cyB0byBjdXN0b21pemUgeW91ciB0YWJsZSBmdXJ0aGVyLiBJZiBpdCBkb2VzIG5vdFxucHJvdmlkZSB3aGF0IHlvdSBuZWVkLCB5b3UgbWF5IGp1c3Qgd2FudCB0byB3cml0ZSBhIGN1c3RvbSB0YWJsZSB5b3Vyc2VsZi4gSXRcbmlzIG5vdCB0aGF0IGNyYXp5LlxuXG5cbiMjIEN1c3RvbSBDb2x1bW5zXG5cbkBkb2NzIENvbHVtbiwgY3VzdG9tQ29sdW1uLCB2ZXJ5Q3VzdG9tQ29sdW1uXG5AZG9jcyBTb3J0ZXIsIHVuc29ydGFibGUsIGluY3JlYXNpbmdCeSwgZGVjcmVhc2luZ0J5LCBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnksIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeVxuXG5cbiMjIEN1c3RvbSBUYWJsZXNcblxuQGRvY3MgQ29uZmlnLCBjdXN0b21Db25maWcsIEN1c3RvbWl6YXRpb25zLCBIdG1sRGV0YWlsc1xuQGRvY3MgZGVmYXVsdEN1c3RvbWl6YXRpb25zXG5cbiMjIEludGVybWVkaWF0ZSBEYXRhIEFjY2Vzc1xuXG5AZG9jcyBnZXRTb3J0ZWREYXRhLCBnZXRQYWdpbmF0ZWREYXRhXG5cbi19XG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGFzIEFcbmltcG9ydCBIdG1sLkF0dHJpYnV0ZXMuQXJpYSBhcyBBcmlhXG5pbXBvcnQgSHRtbC5FdmVudHMgYXMgRVxuaW1wb3J0IEh0bWwuS2V5ZWQgYXMgS2V5ZWRcbmltcG9ydCBIdG1sLkxhenkgYXMgTGF6eVxuaW1wb3J0IEpzb24uRGVjb2RlXG5pbXBvcnQgTWF0aFxuXG5cblxuLS0gU1RBVEVcblxuXG57LXwgVHJhY2tzIHdoaWNoIGNvbHVtbiB0byBzb3J0IGJ5LCBpbiB3aGljaCBkaXJlY3Rpb24sIHRoZSBwYWdlIHNpemUgYW5kIHRoZVxucG9zaXRpb24gb2YgdGhlIHJvdyBjdXJzb3IsIGFzIHdlbGwgYXMgdG90YWwgbnVtYmVyIG9mIHJvd3Mgb2YgdGhlIHdob2xlXG4ocG9zc2libHkgcmVtb3RlKSB0YWJsZS4gVGhpcyB0eXBlIGlzIG9wYXF1ZS5cbi19XG50eXBlIFN0YXRlXG4gICAgPSBTdGF0ZVxuICAgICAgICB7IHNvcnRDb2x1bW5zIDogQXJyYXkgeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuICAgICAgICAsIHBhZ2VTaXplIDogSW50XG4gICAgICAgICwgYWN0aXZlUm93SWQgOiBTdHJpbmdcbiAgICAgICAgLCBwYWdpbmF0aW9uIDogUGFnaW5hdGlvblN0eWxlXG4gICAgICAgICwgdGFibGVJZCA6IFN0cmluZ1xuICAgICAgICB9XG5cblxuey18IFNpbXBsZSBib29sZWFuIHR5cGUgZm9yIGNvbHVtbiBzb3J0IGRpcmVjdGlvbi4gVGhpcyB0eXBlIGlzIG5vdCBvcGFxdWUgYW5kXG5tZWFudCB0byBiZSB1c2VkIGJ5IG90aGVyIG1vZHVsZXMgd2hlbiBjb25zdHJ1Y3RpbmcgVGFibGUgU3RhdGVcbi19XG50eXBlIFNvcnREaXJlY3Rpb25cbiAgICA9IEFzY1xuICAgIHwgRGVzY1xuXG5cbnNvcnREaXJlY3Rpb25Ub1N0cmluZyA6IFNvcnREaXJlY3Rpb24gLT4gU3RyaW5nXG5zb3J0RGlyZWN0aW9uVG9TdHJpbmcgc29ydERpcmVjdGlvbiA9XG4gICAgd2hlbiBzb3J0RGlyZWN0aW9uIGlzXG4gICAgICAgIEFzYyAtPlxuICAgICAgICAgICAgXCJBc2NcIlxuXG4gICAgICAgIERlc2MgLT5cbiAgICAgICAgICAgIFwiRGVzY1wiXG5cblxuey18IENyZWF0ZSBhbiBpbml0aWFsIHN0YXRlIGZvciBhIHRhYmxlIHdpdGhvdXQgcGFnaW5hdGlvbi4gQnkgcHJvdmlkaW5nIGEgY29sdW1uXG5uYW1lLCB5b3UgZGV0ZXJtaW5lIHdoaWNoIGNvbHVtbiBzaG91bGQgYmUgdXNlZCBmb3Igc29ydGluZyBieSBkZWZhdWx0LiBUaGlzIGlzXG5tZWFudCB0byBiZSB1c2VkIGZvciBzaW1wbGUgdGFibGVzLiBNb3JlXG5TbyBpZlxueW91IHdhbnQgeW91ciB0YWJsZSBvZiB5YWNodHMgdG8gYmUgc29ydGVkIGJ5IGxlbmd0aCBieSBkZWZhdWx0LCB5b3UgbWlnaHQgc2F5OlxuXG5pbXBvcnQgVGFibGVcblxuICAgIFRhYmxlLmluaXRpYWxTb3J0IFwiTGVuZ3RoXCJcblxuLX1cbmluaXRpYWxTb3J0IDogU3RyaW5nIC0+IFN0YXRlXG5pbml0aWFsU29ydCBoZWFkZXIgPVxuICAgIFN0YXRlXG4gICAgICAgIHsgc29ydENvbHVtbnMgPSBbIHsgc29ydENvbHVtbk5hbWUgPSBoZWFkZXIsIHNvcnREaXJlY3Rpb24gPSBBc2MgfSBdXG4gICAgICAgICwgcGFnZVNpemUgPSAwXG4gICAgICAgICwgYWN0aXZlUm93SWQgPSBcIlwiXG4gICAgICAgICwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvblxuICAgICAgICAsIHRhYmxlSWQgPSBcInNvcnRhYmxlVGFibGVcIlxuICAgICAgICB9XG5cblxuey18IENyZWF0ZSBhIGRlZmF1bHQgdGFibGUgc3RhdGUuIE9ubHkgdGhlIGlkIG9mIHRoZSB0YWJsZSBpcyBzdXBwbGllZC4gQWxsIG90aGVyIHN0YXRlIGlzIGluaXRpYWxpc2VkIHdpdGggZGVmYXVsdCB2YWx1ZXMuIFRoaXMgc3RhdGUgY2FuIHRoZW4gYmUgc2V0IHdpdGggdXBkYXRlIGZ1bmN0aW9ucy4gU28gaWYgeW91IHdhbnRlZCBhIHRhYmxlIG9mIGNvdW50cmllcyB0aGF0IGlzIGJ5IGRlZmF1bHQgc29ydGVkIGJ5IHBvcHVsYXRpb24gY291bnQgaW4gZGVzY2VuZGluZyBvcmRlciB5b3UgbWlnaHQgd3JpdGVcblxuaW1wb3J0IFRhYmxlXG5cbiAgICBUYWJsZS5uZXcgXCJDb3VudHJpZXNcIlxuICAgICAgICB8PiBEYXRhVGFibGUudXBkYXRlU29ydFN0YXRlIFwiUG9wdWxhdGlvblwiIERhdGFUYWJsZS5EZXNjXG5cbi19XG5uZXcgOiBTdHJpbmcgLT4gU3RhdGVcbm5ldyBpZCA9XG4gICAgU3RhdGUgeyBzb3J0Q29sdW1ucyA9IFtdLCBwYWdlU2l6ZSA9IDAsIGFjdGl2ZVJvd0lkID0gXCJcIiwgcGFnaW5hdGlvbiA9IE5vUGFnaW5hdGlvbiwgdGFibGVJZCA9IGlkIH1cblxuXG57LXwgSW5zcGVjdCB0aGUgY3VycmVudCB0YWJsZSBzdGF0ZS4gV2hpY2ggY29sdW1uIGlzIGJlaW5nIHNvcnRlZCBieSwgYW5kXG53aGV0aGVyIHRoZSBzb3J0IG9yZGVyIGlzIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nLiBUaGlzIGNvdWxkIGJlIHVzZWZ1bCBmb3JcbnN0b3JpbmcgdGhlIHNvcnQgc3RhdGUgaW4gYSBVUkwgb3Igc29tZXdoZXJlIGVsc2Ugb3V0c2lkZSBvZiBFbG0uXG4tfVxuZ2V0U29ydFN0YXRlIDogU3RhdGUgLT4gQXJyYXkgeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuZ2V0U29ydFN0YXRlIChTdGF0ZSB7IHNvcnRDb2x1bW5zIH0pID1cbiAgICBzb3J0Q29sdW1uc1xuXG5cbnstfCBJbnNwZWN0IHRoZSBjdXJyZW50IHRhYmxlIHN0YXRlLiBXaGF0IGlzIHRoZSBjdXJyZW50IHBhZ2Ugc2l6ZSBmb3IgdGhlXG5wYWdpbmF0aW9uLiBTaG93aW5nIFwiYWxsIHJvd3NcIiByZXR1cm5zIDAuIFRoaXMgY291bGQgYmUgdXNlZnVsIGZvciBzdG9yaW5nXG50aGUgc29ydCBzdGF0ZSBpbiBhIFVSTCBvciBzb21ld2hlcmUgZWxzZSBvdXRzaWRlIG9mIEVsbS5cbi19XG5nZXRQYWdlU2l6ZSA6IFN0YXRlIC0+IEludFxuZ2V0UGFnZVNpemUgKFN0YXRlIHsgcGFnZVNpemUgfSkgPVxuICAgIHBhZ2VTaXplXG5cblxuey18IEluc3BlY3QgdGhlIGN1cnJlbnQgdGFibGUgc3RhdGUuIFdoYXQgaXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHJvd1xuY3Vyc29yLiBUb2dldGhlciB3aXRoIHRoZSBjdXJyZW50IHBhZ2Ugc2l6ZSB0aGlzIGRldGVybWluZXMgd2hpY2ggdGFibGUgcGFnZVxuaXMgc2hvd24uXG4tfVxuZ2V0QWN0aXZlUm93SWQgOiBTdGF0ZSAtPiBTdHJpbmdcbmdldEFjdGl2ZVJvd0lkIChTdGF0ZSB7IGFjdGl2ZVJvd0lkIH0pID1cbiAgICBhY3RpdmVSb3dJZFxuXG5cbnstfCAtfVxudXBkYXRlU29ydFN0YXRlIDogU3RyaW5nIC0+IFNvcnREaXJlY3Rpb24gLT4gU3RhdGUgLT4gU3RhdGVcbnVwZGF0ZVNvcnRTdGF0ZSBuZXdTb3J0Q29sdW1uIHNvcnREaXJlY3Rpb24gKFN0YXRlIHsgcGFnZVNpemUsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gWyB7IHNvcnRDb2x1bW5OYW1lID0gbmV3U29ydENvbHVtbiwgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gfSBdLCBwYWdlU2l6ZSA9IHBhZ2VTaXplLCBhY3RpdmVSb3dJZCA9IGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uID0gcGFnaW5hdGlvbiwgdGFibGVJZCA9IHRhYmxlSWQgfVxuXG5cbnstfCAtfVxudXBkYXRlTXVsdGlTb3J0U3RhdGUgOiBTdHJpbmcgLT4gU29ydERpcmVjdGlvbiAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlTXVsdGlTb3J0U3RhdGUgbmV3U29ydENvbHVtbiBzb3J0RGlyZWN0aW9uIChTdGF0ZSB7IHNvcnRDb2x1bW5zLCBwYWdlU2l6ZSwgYWN0aXZlUm93SWQsIHBhZ2luYXRpb24sIHRhYmxlSWQgfSkgPVxuICAgIGxldFxuICAgICAgICBuZXdTb3J0U3RhdGUgPVxuICAgICAgICAgICAgWyB7IHNvcnRDb2x1bW5OYW1lID0gbmV3U29ydENvbHVtbiwgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gfSBdXG4gICAgICAgICAgICAgICAgKysgQXJyYXkua2VlcElmIChcXHsgc29ydENvbHVtbk5hbWUgfSAtPiBzb3J0Q29sdW1uTmFtZSAvPSBuZXdTb3J0Q29sdW1uKSBzb3J0Q29sdW1uc1xuICAgIGluXG4gICAgU3RhdGUgeyBzb3J0Q29sdW1ucyA9IG5ld1NvcnRTdGF0ZSwgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH1cblxuXG57LXwgLX1cbnVwZGF0ZVBhZ2VTaXplIDogSW50IC0+IFN0YXRlIC0+IFN0YXRlXG51cGRhdGVQYWdlU2l6ZSBtaW5pbXVtTmV3UGFnZVNpemUgKFN0YXRlIHsgc29ydENvbHVtbnMsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBsZXRcbiAgICAgICAgbmV4dEhpZ2hlckluTGlzdCA6IEludCAtPiBBcnJheSBJbnQgLT4gSW50XG4gICAgICAgIG5leHRIaWdoZXJJbkxpc3QgaW5wdXQgbGlzdCA9XG4gICAgICAgICAgICB3aGVuIEFycmF5LnBvcEZpcnN0IDx8IEFycmF5LmtlZXBJZiAoXFx4IC0+IHggPj0gaW5wdXQpIDx8IEFycmF5LnNvcnQgbGlzdCBpc1xuICAgICAgICAgICAgICAgIEp1c3QgeCAtPlxuICAgICAgICAgICAgICAgICAgICAuZmlyc3QgeFxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAwXG5cbiAgICAgICAgbmV3UGFnZVNpemUgPVxuICAgICAgICAgICAgd2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICAgICAgUGFnZXIgbGlzdCAtPlxuICAgICAgICAgICAgICAgICAgICBuZXh0SGlnaGVySW5MaXN0IG1pbmltdW1OZXdQYWdlU2l6ZSBsaXN0XG5cbiAgICAgICAgICAgICAgICBTY3JvbGxlciBsaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIG5leHRIaWdoZXJJbkxpc3QgbWluaW11bU5ld1BhZ2VTaXplIGxpc3RcblxuICAgICAgICAgICAgICAgIE5vUGFnaW5hdGlvbiAtPlxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgaW5cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gc29ydENvbHVtbnMsIHBhZ2VTaXplID0gbmV3UGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gYWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuey18IC19XG51cGRhdGVBY3RpdmVSb3dJZCA6IFN0cmluZyAtPiBTdGF0ZSAtPiBTdGF0ZVxudXBkYXRlQWN0aXZlUm93SWQgbmV3QWN0aXZlUm93SWQgKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBwYWdpbmF0aW9uLCB0YWJsZUlkIH0pID1cbiAgICBTdGF0ZSB7IHNvcnRDb2x1bW5zID0gc29ydENvbHVtbnMsIHBhZ2VTaXplID0gcGFnZVNpemUsIGFjdGl2ZVJvd0lkID0gbmV3QWN0aXZlUm93SWQsIHBhZ2luYXRpb24gPSBwYWdpbmF0aW9uLCB0YWJsZUlkID0gdGFibGVJZCB9XG5cblxuXG4tLSBDT05GSUdcblxuXG57LXwgQ29uZmlndXJhdGlvbiBmb3IgeW91ciB0YWJsZSwgZGVzY3JpYmluZyB5b3VyIGNvbHVtbnMuXG5cbioqTm90ZToqKiBZb3VyIGBDb25maWdgIHNob3VsZCBfbmV2ZXJfIGJlIGhlbGQgaW4geW91ciBtb2RlbC5cbkl0IHNob3VsZCBvbmx5IGFwcGVhciBpbiBgdmlld2AgY29kZS5cblxuLX1cbnR5cGUgQ29uZmlnIGRhdGEgbXNnXG4gICAgPSBDb25maWdcbiAgICAgICAgeyB0b0lkIDogZGF0YSAtPiBTdHJpbmdcbiAgICAgICAgLCB0b01zZyA6IFN0YXRlIC0+IG1zZ1xuICAgICAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZylcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA6IEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnXG4gICAgICAgIH1cblxuXG57LXwgQ3JlYXRlIHRoZSBgQ29uZmlnYCBmb3IgeW91ciBgdmlld2AgZnVuY3Rpb24uIEV2ZXJ5dGhpbmcgeW91IG5lZWQgdG9cbnJlbmRlciB5b3VyIGNvbHVtbnMgZWZmaWNpZW50bHkgYW5kIGhhbmRsZSBzZWxlY3Rpb24gb2YgY29sdW1ucy5cblxuU2F5IHdlIGhhdmUgYSBgQXJyYXkgUGVyc29uYCB0aGF0IHdlIHdhbnQgdG8gc2hvdyBhcyBhIHRhYmxlLiBUaGUgdGFibGUgc2hvdWxkXG5oYXZlIGEgY29sdW1uIGZvciBuYW1lIGFuZCBhZ2UuIFdlIHdvdWxkIGNyZWF0ZSBhIGBDb25maWdgIGxpa2UgdGhpczpcblxuICAgIGltcG9ydCBUYWJsZVxuXG4gICAgdHlwZSBNc2cgPSBOZXdUYWJsZVN0YXRlIFN0YXRlIHwgLi4uXG5cbiAgICBjb25maWcgOiBUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuICAgIGNvbmZpZyA9XG4gICAgICBUYWJsZS5jb25maWdcbiAgICAgICAgeyB0b0lkID0gLm5hbWVcbiAgICAgICAgLCB0b01zZyA9IE5ld1RhYmxlU3RhdGVcbiAgICAgICAgLCBjb2x1bW5zID1cbiAgICAgICAgICAgIFsgVGFibGUuc3RyaW5nQ29sdW1uIFwiTmFtZVwiIC5uYW1lXG4gICAgICAgICAgICAsIFRhYmxlLmludENvbHVtbiBcIkFnZVwiIC5hZ2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5Zb3UgcHJvdmlkZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHlvdXIgdGFibGUgY29uZmlndXJhdGlvbjpcblxuICAtIGB0b0lkYCAmbWRhc2g7IHR1cm4gYSBgUGVyc29uYCBpbnRvIGEgdW5pcXVlIElELiBUaGlzIGxldHMgdXMgdXNlXG4gICAgW2BIdG1sLktleWVkYF1ba2V5ZWRdIHVuZGVyIHRoZSBob29kIHRvIG1ha2UgcmUtc29ydHMgZmFzdGVyLlxuICAtIGBjb2x1bW5zYCAmbWRhc2g7IHNwZWNpZnkgc29tZSBjb2x1bW5zIHRvIHNob3cuXG4gIC0gYHRvTXNnYCAmbWRhc2g7IGEgd2F5IHRvIHNlbmQgbmV3IHRhYmxlIHN0YXRlcyB0byB5b3VyIGFwcCBhcyBtZXNzYWdlcy5cblxuU2VlIHRoZSBbZXhhbXBsZXNdIHRvIGdldCBhIGJldHRlciBmZWVsIGZvciB0aGlzIVxuXG5ba2V5ZWRdOiBodHRwOi8vcGFja2FnZS5lbG0tbGFuZy5vcmcvcGFja2FnZXMvZWxtLWxhbmcvaHRtbC9sYXRlc3QvSHRtbC1LZXllZFxuW2V4YW1wbGVzXTogaHR0cHM6Ly9naXRodWIuY29tL2JpbGxzdGNsYWlyL2VsbS1zb3J0YWJsZS10YWJsZS90cmVlL21hc3Rlci9leGFtcGxlc1xuXG4tfVxuY29uZmlnIDpcbiAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgdG9Nc2cgOiBTdGF0ZSAtPiBtc2dcbiAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uIGRhdGEgbXNnKVxuICAgIH1cbiAgICAtPiBDb25maWcgZGF0YSBtc2dcbmNvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zIH0gPVxuICAgIENvbmZpZ1xuICAgICAgICB7IHRvSWQgPSB0b0lkXG4gICAgICAgICwgdG9Nc2cgPSB0b01zZ1xuICAgICAgICAsIGNvbHVtbnMgPSBBcnJheS5tYXAgKFxcKENvbHVtbiBjRGF0YSkgLT4gY0RhdGEpIGNvbHVtbnNcbiAgICAgICAgLCBjdXN0b21pemF0aW9ucyA9IGRlZmF1bHRDdXN0b21pemF0aW9uc1xuICAgICAgICB9XG5cblxuey18IEp1c3QgbGlrZSBgY29uZmlnYCBidXQgeW91IGNhbiBzcGVjaWZ5IGEgYnVuY2ggb2YgdGFibGUgY3VzdG9taXphdGlvbnMuXG4tfVxuY3VzdG9tQ29uZmlnIDpcbiAgICB7IHRvSWQgOiBkYXRhIC0+IFN0cmluZ1xuICAgICwgdG9Nc2cgOiBTdGF0ZSAtPiBtc2dcbiAgICAsIGNvbHVtbnMgOiBBcnJheSAoQ29sdW1uIGRhdGEgbXNnKVxuICAgICwgY3VzdG9taXphdGlvbnMgOiBDdXN0b21pemF0aW9ucyBkYXRhIG1zZ1xuICAgIH1cbiAgICAtPiBDb25maWcgZGF0YSBtc2dcbmN1c3RvbUNvbmZpZyB7IHRvSWQsIHRvTXNnLCBjb2x1bW5zLCBjdXN0b21pemF0aW9ucyB9ID1cbiAgICBDb25maWdcbiAgICAgICAgeyB0b0lkID0gdG9JZFxuICAgICAgICAsIHRvTXNnID0gdG9Nc2dcbiAgICAgICAgLCBjb2x1bW5zID0gQXJyYXkubWFwIChcXChDb2x1bW4gY0RhdGEpIC0+IGNEYXRhKSBjb2x1bW5zXG4gICAgICAgICwgY3VzdG9taXphdGlvbnMgPSBjdXN0b21pemF0aW9uc1xuICAgICAgICB9XG5cblxuey18IFRoZXJlIGFyZSBxdWl0ZSBhIGxvdCBvZiB3YXlzIHRvIGN1c3RvbWl6ZSB0aGUgYDx0YWJsZT5gIHRhZy4gWW91IGNhbiBhZGRcbmEgYDxjYXB0aW9uPmAgd2hpY2ggY2FuIGJlIHN0eWxlZCB2aWEgQ1NTLiBZb3UgY2FuIGRvIGNyYXp5IHN0dWZmIHdpdGhcbmA8dGhlYWQ+YCB0byBncm91cCBjb2x1bW5zIGluIHdlaXJkIHdheXMuIFlvdSBjYW4gaGF2ZSBhIGA8dGZvb3Q+YCB0YWcgZm9yXG5zdW1tYXJpZXMgb2YgdmFyaW91cyBjb2x1bW5zLiBBbmQgbWF5YmUgeW91IHdhbnQgdG8gcHV0IGF0dHJpYnV0ZXMgb24gYDx0Ym9keT5gXG5vciBvbiBwYXJ0aWN1bGFyIHJvd3MgaW4gdGhlIGJvZHkuIEFsbCB0aGVzZSBjdXN0b21pemF0aW9ucyBhcmUgYXZhaWxhYmxlIHRvIHlvdS5cblxuKipOb3RlOioqIFRoZSBsZXZlbCBvZiBjcmF6aW5lc3MgcG9zc2libGUgaW4gYDx0aGVhZD5gIGFuZCBgPHRmb290PmAgYXJlIHNvXG5oaWdoIHRoYXQgSSBjb3VsZCBub3Qgc2VlIGhvdyB0byBwcm92aWRlIHRoZSBmdWxsIGZ1bmN0aW9uYWxpdHkgX2FuZF8gbWFrZSBpdFxuaW1wb3NzaWJsZSB0byBkbyBiYWQgc3R1ZmYuIFNvIGp1c3QgYmUgYXdhcmUgb2YgdGhhdCwgYW5kIHNoYXJlIGFueSBzdG9yaWVzXG55b3UgaGF2ZS4gU3RvcmllcyBtYWtlIGl0IHBvc3NpYmxlIHRvIGRlc2lnbiBiZXR0ZXIhXG5cbi19XG50eXBlIGFsaWFzIEN1c3RvbWl6YXRpb25zIGRhdGEgbXNnID1cbiAgICB7IGJlZm9yZUFuZEFmdGVyVGFibGUgOiB7IGJlZm9yZSA6IE1heWJlIChIdG1sIG1zZyksIGFmdGVyIDogTWF5YmUgKEh0bWwgbXNnKSB9XG4gICAgLCB0YWJsZUF0dHJzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCBjYXB0aW9uIDogTWF5YmUgKEh0bWxEZXRhaWxzIG1zZylcbiAgICAsIGNvbGdyb3VwIDogQXJyYXkgKEhlYWRlckluZm8gbXNnKSAtPiBNYXliZSAoSHRtbERldGFpbHMgbXNnKVxuICAgICwgdGhlYWQgOiBBcnJheSAoSGVhZGVySW5mbyBtc2cpIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgdGJvZHlBdHRycyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxuICAgICwgcm93QXR0cnMgOiAoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCB0Zm9vdCA6IE1heWJlIChIdG1sRGV0YWlscyBtc2cpXG4gICAgfVxuXG5cbnstfCBTb21ldGltZXMgeW91IG11c3QgdXNlIGEgYDx0ZD5gIHRhZywgYnV0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjaGlsZHJlbiBhcmUgdXBcbnRvIHlvdS4gVGhpcyB0eXBlIGxldHMgeW91IHNwZWNpZnkgYWxsIHRoZSBkZXRhaWxzIG9mIGFuIEhUTUwgbm9kZSBleGNlcHQgdGhlXG50YWcgbmFtZS5cbi19XG50eXBlIGFsaWFzIEh0bWxEZXRhaWxzIG1zZyA9XG4gICAgeyBhdHRyaWJ1dGVzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgLCBjaGlsZHJlbiA6IEFycmF5IChIdG1sIG1zZylcbiAgICB9XG5cblxuey18IFRoZSBjdXN0b21pemF0aW9ucyB1c2VkIGluIGBjb25maWdgIGJ5IGRlZmF1bHQuXG4tfVxuZGVmYXVsdEN1c3RvbWl6YXRpb25zIDogQ3VzdG9taXphdGlvbnMgZGF0YSBtc2dcbmRlZmF1bHRDdXN0b21pemF0aW9ucyA9XG4gICAgeyBiZWZvcmVBbmRBZnRlclRhYmxlID0geyBiZWZvcmUgPSBOb3RoaW5nLCBhZnRlciA9IE5vdGhpbmcgfVxuICAgICwgdGFibGVBdHRycyA9IFsgQS5jbGFzcyBcImRhdGFUYWJsZVwiIF1cbiAgICAsIGNhcHRpb24gPSBOb3RoaW5nXG4gICAgLCBjb2xncm91cCA9IFxcXyAtPiBOb3RoaW5nXG4gICAgLCB0aGVhZCA9IGRlZmF1bHRUYWJsZUhlYWRlclxuICAgICwgdGJvZHlBdHRycyA9IFtdXG4gICAgLCByb3dBdHRycyA9IHNpbXBsZVJvd0F0dHJzXG4gICAgLCB0Zm9vdCA9IE5vdGhpbmdcbiAgICB9XG5cblxuZGVmYXVsdFRhYmxlSGVhZGVyIDogQXJyYXkgKEhlYWRlckluZm8gbXNnKSAtPiBIdG1sRGV0YWlscyBtc2dcbmRlZmF1bHRUYWJsZUhlYWRlciBoZWFkZXJJbmZvcyA9XG4gICAgbGV0XG4gICAgICAgIGRlZmF1bHRUSCA6IEhlYWRlckluZm8gbXNnIC0+IEh0bWwgbXNnXG4gICAgICAgIGRlZmF1bHRUSCB7IG5hbWUsIHNlbGVjdGVkLCBzb3J0RGlyZWN0aW9ucywgY2xpY2tBY3Rpb25zIH0gPVxuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgICAgY29sdW1uVGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW4gWyBBLmNsYXNzIFwiZHQtY29sdW1uLXRpdGxlXCIgXSBbIEh0bWwudGV4dCBuYW1lIF1cblxuICAgICAgICAgICAgICAgIGNvbHVtbk9yZGVyID1cbiAgICAgICAgICAgICAgICAgICAgaWYgQXJyYXkubGVuZ3RoIHNvcnREaXJlY3Rpb25zID4gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEEuY2xhc3NMaXN0IFsgeyBjbGFzcyA9IFwiZHQtY29sdW1uLW9yZGVyXCIsIGVuYWJsZWQgPSBUcnVlIH0gXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgQXJpYS5sYWJlbCA8fCBcIkNsaWNrIGhlcmUgdG8gc29ydCBieSB0aGlzIGNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLmF0dHJpYnV0ZSBcInJvbGVcIiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBBLnRhYmluZGV4IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW11cblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sLnRleHQgXCJcIlxuXG4gICAgICAgICAgICAgICAgY2FuQmVTb3J0ZWQgOiBTb3J0RGlyZWN0aW9uIC0+IEJvb2xcbiAgICAgICAgICAgICAgICBjYW5CZVNvcnRlZCBzb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgQXJyYXkubWVtYmVyIHNvcnREaXJlY3Rpb24gc29ydERpcmVjdGlvbnNcblxuICAgICAgICAgICAgICAgIGlzU29ydGVkIDogU29ydERpcmVjdGlvbiAtPiBCb29sXG4gICAgICAgICAgICAgICAgaXNTb3J0ZWQgdmlld2VkU29ydERpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3ZWRTb3J0RGlyZWN0aW9uID09IHNvcnREaXJlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbHNlXG5cbiAgICAgICAgICAgICAgICBhcmlhU29ydCA9XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uIH0gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIEFyaWEuc29ydCA8fCBzb3J0RGlyZWN0aW9uVG9TdHJpbmcgc29ydERpcmVjdGlvbiBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuXG4gICAgICAgICAgICAgICAgcm93QW5kQ29sU3BhbiA9XG4gICAgICAgICAgICAgICAgICAgIFsgQS5yb3dzcGFuIDEsIEEuY29sc3BhbiAxIF1cblxuICAgICAgICAgICAgICAgIHRoQ2xhc3NlcyA9XG4gICAgICAgICAgICAgICAgICAgIFsgQS5jbGFzc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgeyBjbGFzcyA9IFwiZHQtb3JkZXJhYmxlLWFzY1wiLCBlbmFibGVkID0gY2FuQmVTb3J0ZWQgQXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgeyBjbGFzcyA9IFwiZHQtb3JkZXJhYmxlLWRlc2NcIiwgZW5hYmxlZCA9IGNhbkJlU29ydGVkIERlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1hc2NcIiwgZW5hYmxlZCA9IGlzU29ydGVkIEFzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAsIHsgY2xhc3MgPSBcImR0LW9yZGVyaW5nLWRlc2NcIiwgZW5hYmxlZCA9IGlzU29ydGVkIERlc2MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCB7IGNsYXNzID0gXCJkdC1vcmRlcmluZy1ub25lXCIsIGVuYWJsZWQgPSBub3QgKGlzU29ydGVkIEFzYykgJiYgbm90IChpc1NvcnRlZCBEZXNjKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgICAgIHRoQXR0cmlidXRlcyA9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQWN0aW9ucyArKyBhcmlhU29ydCArKyByb3dBbmRDb2xTcGFuICsrIHRoQ2xhc3Nlc1xuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIEh0bWwudGggdGhBdHRyaWJ1dGVzIFsgSHRtbC5kaXYgWyBBLmNsYXNzIFwiZHQtY29sdW1uLWhlYWRlclwiIF0gWyBjb2x1bW5UaXRsZSwgY29sdW1uT3JkZXIgXSBdXG4gICAgaW5cbiAgICB7IGF0dHJpYnV0ZXMgPSBbXSwgY2hpbGRyZW4gPSBbIEh0bWwudHIgW10gPHwgQXJyYXkubWFwIGRlZmF1bHRUSCBoZWFkZXJJbmZvcyBdIH1cblxuXG5zaW1wbGVSb3dBdHRycyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZylcbnNpbXBsZVJvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YSA9XG4gICAgbGV0XG4gICAgICAgIGlzX2N1cnJlbnRfcm93ID1cbiAgICAgICAgICAgIGlmIHRvSWQgZGF0YSA9PSBnZXRBY3RpdmVSb3dJZCBzdGF0ZSB0aGVuXG4gICAgICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgRmFsc2VcbiAgICBpblxuICAgIGlmIGlzX2N1cnJlbnRfcm93IHRoZW5cbiAgICAgICAgWyBBLnN0eWxlIFwiYmFja2dyb3VuZFwiIFwiI0NFRkFGOFwiIF1cblxuICAgIGVsc2VcbiAgICAgICAgWyBFLm9uQ2xpY2sgPHwgdG9Nc2cgPHwgdXBkYXRlQWN0aXZlUm93SWQgKHRvSWQgZGF0YSkgc3RhdGUgXVxuXG5cblxuLS0gQ09MVU1OU1xuXG5cbnstfCBEZXNjcmliZXMgaG93IHRvIHR1cm4gYGRhdGFgIGludG8gYSBjb2x1bW4gaW4geW91ciB0YWJsZS5cbi19XG50eXBlIENvbHVtbiBkYXRhIG1zZ1xuICAgID0gQ29sdW1uIChDb2x1bW5EYXRhIGRhdGEgbXNnKVxuXG5cbnR5cGUgYWxpYXMgQ29sdW1uRGF0YSBkYXRhIG1zZyA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB2aWV3RGF0YSA6IGRhdGEgLT4gSHRtbERldGFpbHMgbXNnXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cblxuXG5jb2x1bW5EYXRhIG5hbWUgdmlld0RhdGEgc29ydGVyID1cbiAgICB7IG5hbWUgPSBuYW1lXG4gICAgLCB2aWV3RGF0YSA9IHZpZXdEYXRhXG4gICAgLCBzb3J0ZXIgPSBzb3J0ZXJcbiAgICB9XG5cblxudHlwZSBhbGlhcyBDb2x1bW5IZWFkZXIgZGF0YSA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cblxuXG50b0hlYWRlciA6IENvbHVtbkRhdGEgZGF0YSBtc2cgLT4gQ29sdW1uSGVhZGVyIGRhdGFcbnRvSGVhZGVyIHsgbmFtZSwgc29ydGVyIH0gPVxuICAgIHsgbmFtZSA9IG5hbWUsIHNvcnRlciA9IHNvcnRlciB9XG5cblxuey18IC19XG5zdHJpbmdDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gU3RyaW5nKSAtPiBDb2x1bW4gZGF0YSBtc2dcbnN0cmluZ0NvbHVtbiBuYW1lIHRvU3RyID1cbiAgICBDb2x1bW5cbiAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAsIHZpZXdEYXRhID0gdGV4dERldGFpbHMgPDwgdG9TdHJcbiAgICAgICAgLCBzb3J0ZXIgPSBpbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgdG9TdHJcbiAgICAgICAgfVxuXG5cbnstfCAtfVxuaW50Q29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEludCkgLT4gQ29sdW1uIGRhdGEgbXNnXG5pbnRDb2x1bW4gbmFtZSB0b0ludCA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IFN0cmluZy5mcm9tSW50IDw8IHRvSW50XG4gICAgICAgICwgc29ydGVyID0gaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvSW50XG4gICAgICAgIH1cblxuXG57LXwgLX1cbmZsb2F0Q29sdW1uIDogU3RyaW5nIC0+IChkYXRhIC0+IEZsb2F0KSAtPiBDb2x1bW4gZGF0YSBtc2dcbmZsb2F0Q29sdW1uIG5hbWUgdG9GbG9hdCA9XG4gICAgQ29sdW1uXG4gICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgLCB2aWV3RGF0YSA9IHRleHREZXRhaWxzIDw8IFN0cmluZy5mcm9tRmxvYXQgPDwgdG9GbG9hdFxuICAgICAgICAsIHNvcnRlciA9IGluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSB0b0Zsb2F0XG4gICAgICAgIH1cblxuXG57LXwgLX1cbmNvbHVtbiA6ICgoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YSkgLT4gU3RyaW5nIC0+IChkYXRhIC0+IFN0cmluZykgLT4gKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gQ29sdW1uIGRhdGEgbXNnXG5jb2x1bW4gc29ydGVyIG5hbWUgdG9TdHJpbmcgdG9Db21wYXJhYmxlID1cbiAgICBjdXN0b21Db2x1bW4geyBuYW1lID0gbmFtZSwgdmlld0RhdGEgPSB0b1N0cmluZywgc29ydGVyID0gc29ydGVyIHRvQ29tcGFyYWJsZSB9XG5cblxudGV4dERldGFpbHMgOiBTdHJpbmcgLT4gSHRtbERldGFpbHMgbXNnXG50ZXh0RGV0YWlscyBzdHIgPVxuICAgIHsgYXR0cmlidXRlcyA9IFtdLCBjaGlsZHJlbiA9IFsgSHRtbC50ZXh0IHN0ciBdIH1cblxuXG57LXwgUGVyaGFwcyB0aGUgYmFzaWMgY29sdW1ucyBhcmUgbm90IHF1aXRlIHdoYXQgeW91IHdhbnQuIE1heWJlIHlvdSB3YW50IHRvXG5kaXNwbGF5IG1vbmV0YXJ5IHZhbHVlcyBpbiB0aG91c2FuZHMgb2YgZG9sbGFycywgYW5kIGBmbG9hdENvbHVtbmAgZG9lcyBub3RcbnF1aXRlIGN1dCBpdC4gWW91IGNvdWxkIGRlZmluZSBhIGN1c3RvbSBjb2x1bW4gbGlrZSB0aGlzOlxuXG4gICAgaW1wb3J0IFRhYmxlXG5cbiAgICBkb2xsYXJDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuICAgIGRvbGxhckNvbHVtbiBuYW1lIHRvRG9sbGFycyA9XG4gICAgICAgIFRhYmxlLmN1c3RvbUNvbHVtblxuICAgICAgICAgICAgeyBuYW1lID0gbmFtZVxuICAgICAgICAgICAgLCB2aWV3RGF0YSA9IFxcZGF0YSAtPiB2aWV3RG9sbGFycyAodG9Eb2xsYXJzIGRhdGEpXG4gICAgICAgICAgICAsIHNvcnRlciA9IFRhYmxlLmRlY3JlYXNpbmdCeSB0b0RvbGxhcnNcbiAgICAgICAgICAgIH1cblxuICAgIHZpZXdEb2xsYXJzIDogRmxvYXQgLT4gU3RyaW5nXG4gICAgdmlld0RvbGxhcnMgZG9sbGFycyA9XG4gICAgICAgIFwiJFwiICsrIFN0cmluZy5mcm9tSW50IChyb3VuZCAoZG9sbGFycyAvIDEwMDApKSArKyBcImtcIlxuXG5UaGUgYHZpZXdEYXRhYCBmaWVsZCBtZWFucyB3ZSB3aWxsIGRpc3BsYXlzIHRoZSBudW1iZXIgYDEyMzQ1LjY3YCBhcyBgJDEya2AuXG5cblRoZSBgc29ydGVyYCBmaWVsZCBzcGVjaWZpZXMgaG93IHRoZSBjb2x1bW4gY2FuIGJlIHNvcnRlZC4gSW4gYGRvbGxhckNvbHVtbmAgd2VcbmFyZSBzYXlpbmcgdGhhdCBpdCBjYW4gX29ubHlfIGJlIHNob3duIGZyb20gaGlnaGVzdC10by1sb3dlc3QgbW9uZXRhcnkgdmFsdWUuXG5Nb3JlIGFib3V0IHNvcnRlcnMgc29vbiFcblxuLX1cbmN1c3RvbUNvbHVtbiA6XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB2aWV3RGF0YSA6IGRhdGEgLT4gU3RyaW5nXG4gICAgLCBzb3J0ZXIgOiBTb3J0ZXIgZGF0YVxuICAgIH1cbiAgICAtPiBDb2x1bW4gZGF0YSBtc2dcbmN1c3RvbUNvbHVtbiB7IG5hbWUsIHZpZXdEYXRhLCBzb3J0ZXIgfSA9XG4gICAgQ29sdW1uIDx8XG4gICAgICAgIGNvbHVtbkRhdGEgbmFtZSAodGV4dERldGFpbHMgPDwgdmlld0RhdGEpIHNvcnRlclxuXG5cbnstfCBJdCBpcyBfcG9zc2libGVfIHRoYXQgeW91IHdhbnQgc29tZXRoaW5nIGNyYXppZXIgdGhhbiBgY3VzdG9tQ29sdW1uYC4gSW5cbnRoYXQgdW5saWtlbHkgc2NlbmFyaW8sIHRoaXMgZnVuY3Rpb24gbGV0cyB5b3UgaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGVcbmF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIG9mIGVhY2ggYDx0ZD5gIGNlbGwgaW4gdGhpcyBjb2x1bW4uXG5cblNvIG1heWJlIHlvdSB3YW50IHRvIGEgZG9sbGFycyBjb2x1bW4sIGFuZCB0aGUgZG9sbGFyIHNpZ25zIHNob3VsZCBiZSBncmVlbi5cblxuICAgIGltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUsIEh0bWwsIHNwYW4sIHRleHQpXG4gICAgaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAoc3R5bGUpXG4gICAgaW1wb3J0IFRhYmxlXG5cbiAgICBkb2xsYXJDb2x1bW4gOiBTdHJpbmcgLT4gKGRhdGEgLT4gRmxvYXQpIC0+IENvbHVtbiBkYXRhIG1zZ1xuICAgIGRvbGxhckNvbHVtbiBuYW1lIHRvRG9sbGFycyA9XG4gICAgICAgIFRhYmxlLnZlcnlDdXN0b21Db2x1bW5cbiAgICAgICAgICAgIHsgbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICwgdmlld0RhdGEgPSBcXGRhdGEgLT4gdmlld0RvbGxhcnMgKHRvRG9sbGFycyBkYXRhKVxuICAgICAgICAgICAgLCBzb3J0ZXIgPSBUYWJsZS5kZWNyZWFzaW5nQnkgdG9Eb2xsYXJzXG4gICAgICAgICAgICB9XG5cbiAgICB2aWV3RG9sbGFycyA6IEZsb2F0IC0+IFRhYmxlLkh0bWxEZXRhaWxzIG1zZ1xuICAgIHZpZXdEb2xsYXJzIGRvbGxhcnMgPVxuICAgICAgICBUYWJsZS5IdG1sRGV0YWlscyBbXVxuICAgICAgICAgICAgWyBzcGFuIFsgc3R5bGUgXCJjb2xvclwiIFwiZ3JlZW5cIiBdIFsgdGV4dCBcIiRcIiBdXG4gICAgICAgICAgICAsIHRleHQgKFN0cmluZy5mcm9tSW50IChyb3VuZCAoZG9sbGFycyAvIDEwMDApKSArKyBcImtcIilcbiAgICAgICAgICAgIF1cblxuLX1cbnZlcnlDdXN0b21Db2x1bW4gOlxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgdmlld0RhdGEgOiBkYXRhIC0+IEh0bWxEZXRhaWxzIG1zZ1xuICAgICwgc29ydGVyIDogU29ydGVyIGRhdGFcbiAgICB9XG4gICAgLT4gQ29sdW1uIGRhdGEgbXNnXG52ZXJ5Q3VzdG9tQ29sdW1uID1cbiAgICBDb2x1bW5cblxuXG5cbi0tIFZJRVdcblxuXG57LXwgVGFrZSBhIGxpc3Qgb2YgZGF0YSBhbmQgdHVybiBpdCBpbnRvIGEgdGFibGUuIFRoZSBgQ29uZmlnYCBhcmd1bWVudCBpcyB0aGVcbmNvbmZpZ3VyYXRpb24gZm9yIHRoZSB0YWJsZS4gSXQgZGVzY3JpYmVzIHRoZSBjb2x1bW5zIHRoYXQgd2Ugd2FudCB0byBzaG93LiBUaGVcbmBTdGF0ZWAgYXJndW1lbnQgZGVzY3JpYmVzIHdoaWNoIGNvbHVtbiB3ZSBhcmUgc29ydGluZyBieSBhdCB0aGUgbW9tZW50LlxuXG4qKk5vdGU6KiogVGhlIGBTdGF0ZWAgYW5kIGBBcnJheSBkYXRhYCBzaG91bGQgbGl2ZSBpbiB5b3VyIGBNb2RlbGAuIFRoZSBgQ29uZmlnYFxuZm9yIHRoZSB0YWJsZSBiZWxvbmdzIGluIHlvdXIgYHZpZXdgIGNvZGUuIEkgdmVyeSBzdHJvbmdseSByZWNvbW1lbmQgYWdhaW5zdFxucHV0dGluZyBgQ29uZmlnYCBpbiB5b3VyIG1vZGVsLiBEZXNjcmliZSBhbnkgcG90ZW50aWFsIHRhYmxlIGNvbmZpZ3VyYXRpb25zXG5zdGF0aWNhbGx5LCBhbmQgbG9vayBmb3IgYSBkaWZmZXJlbnQgbGlicmFyeSBpZiB5b3UgbmVlZCBzb21ldGhpbmcgY3JhemllciB0aGFuXG50aGF0LlxuXG4tfVxudmlldyA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBBcnJheSBkYXRhIC0+IEh0bWwgbXNnXG52aWV3ICgoQ29uZmlnIHsgdG9JZCwgdG9Nc2csIGNvbHVtbnMsIGN1c3RvbWl6YXRpb25zIH0pIGFzIGNvbmYpIHN0YXRlIGRhdGEgPVxuICAgIGxldFxuICAgICAgICByb3dzID1cbiAgICAgICAgICAgIGdldFBhZ2luYXRlZERhdGEgY29uZiBzdGF0ZSA8fCBnZXRTb3J0ZWREYXRhIGNvbmYgc3RhdGUgZGF0YVxuXG4gICAgICAgIGhlYWRlcnMgPVxuICAgICAgICAgICAgQXJyYXkubWFwIHRvSGVhZGVyIGNvbHVtbnNcblxuICAgICAgICB0aGVhZERldGFpbHMgPVxuICAgICAgICAgICAgY3VzdG9taXphdGlvbnMudGhlYWQgPHwgQXJyYXkubWFwICh0b0hlYWRlckluZm8gc3RhdGUgdG9Nc2cpIGhlYWRlcnNcblxuICAgICAgICB0aGVhZCA9XG4gICAgICAgICAgICBIdG1sLnRoZWFkIHRoZWFkRGV0YWlscy5hdHRyaWJ1dGVzIHRoZWFkRGV0YWlscy5jaGlsZHJlblxuXG4gICAgICAgIHRib2R5ID1cbiAgICAgICAgICAgIEtleWVkLm5vZGUgXCJ0Ym9keVwiIGN1c3RvbWl6YXRpb25zLnRib2R5QXR0cnMgPHxcbiAgICAgICAgICAgICAgICBBcnJheS5tYXAgKHZpZXdSb3cgdG9JZCB0b01zZyBjb2x1bW5zIGN1c3RvbWl6YXRpb25zLnJvd0F0dHJzIHN0YXRlKSByb3dzXG5cbiAgICAgICAgd2l0aEZvb3QgPVxuICAgICAgICAgICAgd2hlbiBjdXN0b21pemF0aW9ucy50Zm9vdCBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgWyB0Ym9keSBdXG5cbiAgICAgICAgICAgICAgICBKdXN0IHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSAtPlxuICAgICAgICAgICAgICAgICAgICBbIEh0bWwudGZvb3QgYXR0cmlidXRlcyBjaGlsZHJlbiwgdGJvZHkgXVxuICAgIGluXG4gICAgSHRtbC50YWJsZSBjdXN0b21pemF0aW9ucy50YWJsZUF0dHJzIDx8XG4gICAgICAgICh3aGVuIGN1c3RvbWl6YXRpb25zLmNhcHRpb24gaXNcbiAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICBbIHRoZWFkIF0gKysgd2l0aEZvb3RcblxuICAgICAgICAgICAgSnVzdCB7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0gLT5cbiAgICAgICAgICAgICAgICBbIEh0bWwuY2FwdGlvbiBhdHRyaWJ1dGVzIGNoaWxkcmVuIF0gKysgWyB0aGVhZCBdICsrIHdpdGhGb290XG4gICAgICAgIClcblxuXG50eXBlIGFsaWFzIEhlYWRlckluZm8gbXNnID1cbiAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAsIHNlbGVjdGVkIDogTWF5YmUgeyBzb3J0UmFuayA6IEludCwgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfVxuICAgICwgLS0gTm90aGluZyBpZiBub3Qgc2VsZWN0ZWQsIG90aGVyd2lzZSBKdXN0IHtzb3J0UmFuaywgc29ydERpcmVjdGlvbn1cbiAgICAgIHNvcnREaXJlY3Rpb25zIDogQXJyYXkgU29ydERpcmVjdGlvblxuICAgICwgLS0gRW1wdHkgaWYgVW5zb3J0YWJsZVxuICAgICAgY2xpY2tBY3Rpb25zIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpXG4gICAgfVxuXG5cbmhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBzb3J0RGlyZWN0aW9ucyBjbGlja0FjdGlvbnMgPVxuICAgIHsgbmFtZSA9IG5hbWVcbiAgICAsIHNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAsIHNvcnREaXJlY3Rpb25zID0gc29ydERpcmVjdGlvbnNcbiAgICAsIGNsaWNrQWN0aW9ucyA9IGNsaWNrQWN0aW9uc1xuICAgIH1cblxuXG50b0hlYWRlckluZm8gOiBTdGF0ZSAtPiAoU3RhdGUgLT4gbXNnKSAtPiBDb2x1bW5IZWFkZXIgZGF0YSAtPiBIZWFkZXJJbmZvIG1zZ1xudG9IZWFkZXJJbmZvICgoU3RhdGUgeyBzb3J0Q29sdW1ucyB9KSBhcyBzdGF0ZSkgdG9Nc2cgeyBuYW1lLCBzb3J0ZXIgfSA9XG4gICAgbGV0XG4gICAgICAgIHJldmVyc2UgYSA9XG4gICAgICAgICAgICB3aGVuIGEgaXNcbiAgICAgICAgICAgICAgICBEZXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIEFzY1xuXG4gICAgICAgICAgICAgICAgQXNjIC0+XG4gICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICB3aGVuIHNvcnRDb2x1bW5zIGlzXG4gICAgICAgICAgICAgICAgW10gLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgbm9uRW1wdHlMaXN0IC0+XG4gICAgICAgICAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlZExpc3QgOiBBcnJheSB7IGxlZnQgOiBJbnQsIHJpZ2h0IDogeyBzb3J0Q29sdW1uTmFtZSA6IFN0cmluZywgc29ydERpcmVjdGlvbiA6IFNvcnREaXJlY3Rpb24gfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVkTGlzdCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaW5kZXhlZE1hcCAoXFxpZHggdmFsIC0+IHsgbGVmdCA9IGlkeCwgcmlnaHQgPSB2YWwgfSkgPHwgQXJyYXkucmV2ZXJzZSBub25FbXB0eUxpc3RcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5rZWVwSWYgKFxceyByaWdodCA9IHsgc29ydENvbHVtbk5hbWUgfSB9IC0+IG5hbWUgPT0gc29ydENvbHVtbk5hbWUpIGluZGV4ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIGluXG4gICAgICAgICAgICAgICAgICAgIHdoZW4gQXJyYXkudGFrZUZpcnN0IDEgZmlsdGVyZWRMaXN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBbIHsgbGVmdCA9IGluZGV4LCByaWdodCA9IHsgc29ydERpcmVjdGlvbiB9IH0gXSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgeyBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiwgc29ydFJhbmsgPSBpbmRleCB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uID1cbiAgICAgICAgICAgIHdoZW4gc2VsZWN0ZWQgaXNcbiAgICAgICAgICAgICAgICBKdXN0IHsgc29ydERpcmVjdGlvbiB9IC0+XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2Ugc29ydERpcmVjdGlvblxuXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICB3aGVuIHNvcnRlciBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NcblxuICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzY1xuICAgIGluXG4gICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgTm9uZSAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIE5vdGhpbmcgW10gW11cblxuICAgICAgICBSb3dOdW1iZXIgLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBOb3RoaW5nIFtdIFtdXG5cbiAgICAgICAgSW5jcmVhc2luZyBfIC0+XG4gICAgICAgICAgICBoZWFkZXJJbmZvIG5hbWUgc2VsZWN0ZWQgWyBBc2MgXSA8fCBvbkNvbHVtbkhlYWRlciBzdGF0ZSBuYW1lIEFzYyB0b01zZ1xuXG4gICAgICAgIERlY3JlYXNpbmcgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgRGVzYyB0b01zZ1xuXG4gICAgICAgIEluY09yRGVjIF8gLT5cbiAgICAgICAgICAgIGhlYWRlckluZm8gbmFtZSBzZWxlY3RlZCBbIEFzYywgRGVzYyBdIDx8IG9uQ29sdW1uSGVhZGVyIHN0YXRlIG5hbWUgcmV2ZXJzZWRTb3J0RGlyZWN0aW9uIHRvTXNnXG5cbiAgICAgICAgRGVjT3JJbmMgXyAtPlxuICAgICAgICAgICAgaGVhZGVySW5mbyBuYW1lIHNlbGVjdGVkIFsgRGVzYywgQXNjIF0gPHwgb25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSByZXZlcnNlZFNvcnREaXJlY3Rpb24gdG9Nc2dcblxuXG5vbkNvbHVtbkhlYWRlciA6IFN0YXRlIC0+IFN0cmluZyAtPiBTb3J0RGlyZWN0aW9uIC0+IChTdGF0ZSAtPiBtc2cpIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKVxub25Db2x1bW5IZWFkZXIgc3RhdGUgbmFtZSBzb3J0RGlyZWN0aW9uIHRvTXNnID1cbiAgICBbIEUub25DbGljayA8fFxuICAgICAgICB0b01zZyA8fFxuICAgICAgICAgICAgdXBkYXRlTXVsdGlTb3J0U3RhdGUgbmFtZSBzb3J0RGlyZWN0aW9uIHN0YXRlXG4gICAgLCBFLm9uRG91YmxlQ2xpY2sgPHxcbiAgICAgICAgdG9Nc2cgPHxcbiAgICAgICAgICAgIHVwZGF0ZVNvcnRTdGF0ZSBuYW1lIHNvcnREaXJlY3Rpb24gc3RhdGVcbiAgICBdXG5cblxudmlld1JvdyA6IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gQXJyYXkgKENvbHVtbkRhdGEgZGF0YSBtc2cpIC0+ICgoZGF0YSAtPiBTdHJpbmcpIC0+IChTdGF0ZSAtPiBtc2cpIC0+IFN0YXRlIC0+IGRhdGEgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpKSAtPiBTdGF0ZSAtPiBkYXRhIC0+IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfVxudmlld1JvdyB0b0lkIHRvTXNnIGNvbHVtbnMgdG9Sb3dBdHRycyBzdGF0ZSBkYXRhID1cbiAgICB7IGtleSA9IHRvSWQgZGF0YVxuICAgICwgbm9kZSA9IHZpZXdSb3dIZWxwIGNvbHVtbnMgdG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGFcbiAgICB9XG5cblxudmlld1Jvd0hlbHAgOiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gKChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBBcnJheSAoQXR0cmlidXRlIG1zZykpIC0+IChkYXRhIC0+IFN0cmluZykgLT4gKFN0YXRlIC0+IG1zZykgLT4gU3RhdGUgLT4gZGF0YSAtPiBIdG1sIG1zZ1xudmlld1Jvd0hlbHAgY29sdW1ucyB0b1Jvd0F0dHJzIHRvSWQgdG9Nc2cgc3RhdGUgZGF0YSA9XG4gICAgSHRtbC50ciAodG9Sb3dBdHRycyB0b0lkIHRvTXNnIHN0YXRlIGRhdGEpIDx8XG4gICAgICAgIEFycmF5Lm1hcCAodmlld0NlbGwgZGF0YSkgY29sdW1uc1xuXG5cbnZpZXdDZWxsIDogZGF0YSAtPiBDb2x1bW5EYXRhIGRhdGEgbXNnIC0+IEh0bWwgbXNnXG52aWV3Q2VsbCBkYXRhIHsgdmlld0RhdGEsIHNvcnRlciB9ID1cbiAgICBsZXRcbiAgICAgICAgZGV0YWlscyA9XG4gICAgICAgICAgICB2aWV3RGF0YSBkYXRhXG4gICAgaW5cbiAgICBIdG1sLnRkIGRldGFpbHMuYXR0cmlidXRlcyBkZXRhaWxzLmNoaWxkcmVuXG5cblxuXG4tLSBTT1JUSU5HXG5cblxuc29ydCA6IFN0YXRlIC0+IEFycmF5IChDb2x1bW5EYXRhIGRhdGEgbXNnKSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbnNvcnQgKFN0YXRlIHsgc29ydENvbHVtbnMsIHBhZ2VTaXplLCBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiwgdGFibGVJZCB9KSBjRGF0YSBkYXRhID1cbiAgICB3aGVuIEFycmF5LnBvcEZpcnN0IHNvcnRDb2x1bW5zIGlzXG4gICAgICAgIEp1c3QgeyBmaXJzdCA9IHsgc29ydENvbHVtbk5hbWUsIHNvcnREaXJlY3Rpb24gfSwgcmVzdCA9IHJlc3QgfSAtPlxuICAgICAgICAgICAgd2hlbiBmaW5kU29ydGVyIHNvcnRDb2x1bW5OYW1lIGNEYXRhIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBkYXRhXG5cbiAgICAgICAgICAgICAgICBKdXN0IHNvcnRlciAtPlxuICAgICAgICAgICAgICAgICAgICBzb3J0IChTdGF0ZSB7IHNvcnRDb2x1bW5zID0gcmVzdCwgcGFnZVNpemUgPSBwYWdlU2l6ZSwgYWN0aXZlUm93SWQgPSBhY3RpdmVSb3dJZCwgcGFnaW5hdGlvbiA9IHBhZ2luYXRpb24sIHRhYmxlSWQgPSB0YWJsZUlkIH0pIGNEYXRhIDx8IGFwcGx5U29ydGVyIHNvcnREaXJlY3Rpb24gc29ydGVyIGRhdGFcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkYXRhXG5cblxuYXBwbHlTb3J0ZXIgOiBTb3J0RGlyZWN0aW9uIC0+IFNvcnRlciBkYXRhIC0+IEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YVxuYXBwbHlTb3J0ZXIgc29ydERpcmVjdGlvbiBzb3J0ZXIgZGF0YSA9XG4gICAgd2hlbiBzb3J0ZXIgaXNcbiAgICAgICAgTm9uZSAtPlxuICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgIFJvd051bWJlciAtPlxuICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgIEluY3JlYXNpbmcgc3J0IC0+XG4gICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgIERlY3JlYXNpbmcgc3J0IC0+XG4gICAgICAgICAgICBBcnJheS5yZXZlcnNlIChzcnQgZGF0YSlcblxuICAgICAgICBJbmNPckRlYyBzcnQgLT5cbiAgICAgICAgICAgIGlmIHNvcnREaXJlY3Rpb24gPT0gRGVzYyB0aGVuXG4gICAgICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgIERlY09ySW5jIHNydCAtPlxuICAgICAgICAgICAgaWYgc29ydERpcmVjdGlvbiA9PSBEZXNjIHRoZW5cbiAgICAgICAgICAgICAgICBzcnQgZGF0YVxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgQXJyYXkucmV2ZXJzZSAoc3J0IGRhdGEpXG5cblxuZmluZFNvcnRlciA6IFN0cmluZyAtPiBBcnJheSAoQ29sdW1uRGF0YSBkYXRhIG1zZykgLT4gTWF5YmUgKFNvcnRlciBkYXRhKVxuZmluZFNvcnRlciBzZWxlY3RlZENvbHVtbiBjRGF0YSA9XG4gICAgd2hlbiBBcnJheS5wb3BGaXJzdCBjRGF0YSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCB7IGZpcnN0ID0geyBuYW1lLCBzb3J0ZXIgfSwgcmVzdCB9IC0+XG4gICAgICAgICAgICBpZiBuYW1lID09IHNlbGVjdGVkQ29sdW1uIHRoZW5cbiAgICAgICAgICAgICAgICBKdXN0IHNvcnRlclxuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZmluZFNvcnRlciBzZWxlY3RlZENvbHVtbiByZXN0XG5cblxuey18IFJldHVybiB0aGUgZGF0YSBzb3J0ZWQgZXhhY3RseSBhcyBpdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLlxuLX1cbmdldFNvcnRlZERhdGEgOiBDb25maWcgZGF0YSBtc2cgLT4gU3RhdGUgLT4gQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhXG5nZXRTb3J0ZWREYXRhIChDb25maWcgeyBjb2x1bW5zIH0pIHN0YXRlIGRhdGEgPVxuICAgIHNvcnQgc3RhdGUgY29sdW1ucyBkYXRhXG5cblxuXG4tLSBTT1JURVJTXG5cblxuey18IFNwZWNpZmllcyBhIHBhcnRpY3VsYXIgd2F5IG9mIHNvcnRpbmcgZGF0YS5cbi19XG50eXBlIFNvcnRlciBkYXRhXG4gICAgPSBOb25lXG4gICAgfCBSb3dOdW1iZXJcbiAgICB8IEluY3JlYXNpbmcgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcbiAgICB8IERlY3JlYXNpbmcgKEFycmF5IGRhdGEgLT4gQXJyYXkgZGF0YSlcbiAgICB8IEluY09yRGVjIChBcnJheSBkYXRhIC0+IEFycmF5IGRhdGEpXG4gICAgfCBEZWNPckluYyAoQXJyYXkgZGF0YSAtPiBBcnJheSBkYXRhKVxuXG5cbnstfCBBIHNvcnRlciBmb3IgY29sdW1ucyB0aGF0IGFyZSB1bnNvcnRhYmxlLiBNYXliZSB5b3UgaGF2ZSBhIGNvbHVtbiBpbiB5b3VyXG50YWJsZSBmb3IgZGVsZXRlIGJ1dHRvbnMgdGhhdCBkZWxldGUgdGhlIHJvdy4gSXQgd291bGQgbm90IG1ha2UgYW55IHNlbnNlIHRvXG5zb3J0IGJhc2VkIG9uIHRoYXQgY29sdW1uLlxuLX1cbnVuc29ydGFibGUgOiBTb3J0ZXIgZGF0YVxudW5zb3J0YWJsZSA9XG4gICAgTm9uZVxuXG5cbnstfCBDcmVhdGUgYSBzb3J0ZXIgdGhhdCBjYW4gb25seSBkaXNwbGF5IHRoZSBkYXRhIGluIGluY3JlYXNpbmcgb3JkZXIuIElmIHdlXG53YW50IGEgdGFibGUgb2YgcGVvcGxlLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkgYnkgbmFtZSwgd2Ugd291bGQgc2F5IHRoaXM6XG5cbiAgICBzb3J0ZXIgOiBTb3J0ZXIgeyBhIHwgbmFtZSA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGluY3JlYXNpbmdCeSAubmFtZVxuXG4tfVxuaW5jcmVhc2luZ0J5IDogKGRhdGEgLT4gY29tcGFyYWJsZSkgLT4gU29ydGVyIGRhdGFcbmluY3JlYXNpbmdCeSB0b0NvbXBhcmFibGUgPVxuICAgIEluY3JlYXNpbmcgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxuey18IENyZWF0ZSBhIHNvcnRlciB0aGF0IGNhbiBvbmx5IGRpc3BsYXkgdGhlIGRhdGEgaW4gZGVjcmVhc2luZyBvcmRlci4gSWYgd2VcbndhbnQgYSB0YWJsZSBvZiBjb3VudHJpZXMsIHNvcnRlZCBieSBwb3B1bGF0aW9uIGZyb20gaGlnaGVzdCB0byBsb3dlc3QsIHdlXG53b3VsZCBzYXkgdGhpczpcblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCBwb3B1bGF0aW9uIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgZGVjcmVhc2luZ0J5IC5wb3B1bGF0aW9uXG5cbi19XG5kZWNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuZGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgRGVjcmVhc2luZyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG57LXwgU29tZXRpbWVzIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gc29ydCBkYXRhIGluIGluY3JlYXNpbmcgX29yXyBkZWNyZWFzaW5nXG5vcmRlci4gTWF5YmUgeW91IGhhdmUgYSBidW5jaCBvZiBkYXRhIGFib3V0IG9yYW5nZSBqdWljZSwgYW5kIHlvdSB3YW50IHRvIGtub3dcbmJvdGggd2hpY2ggaGFzIHRoZSBtb3N0IHN1Z2FyLCBhbmQgd2hpY2ggaGFzIHRoZSBsZWFzdCBzdWdhci4gQm90aCBpbnRlcmVzdGluZyFcblRoaXMgZnVuY3Rpb24gbGV0cyB5b3Ugc2VlIGJvdGgsIHN0YXJ0aW5nIHdpdGggZGVjcmVhc2luZyBvcmRlci5cblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCBzdWdhciA6IGNvbXBhcmFibGUgfVxuICAgIHNvcnRlciA9XG4gICAgICAgIGRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSAuc3VnYXJcblxuLX1cbmRlY3JlYXNpbmdPckluY3JlYXNpbmdCeSA6IChkYXRhIC0+IGNvbXBhcmFibGUpIC0+IFNvcnRlciBkYXRhXG5kZWNyZWFzaW5nT3JJbmNyZWFzaW5nQnkgdG9Db21wYXJhYmxlID1cbiAgICBEZWNPckluYyAoQXJyYXkuc29ydEJ5IHRvQ29tcGFyYWJsZSlcblxuXG57LXwgU29tZXRpbWVzIHlvdSB3YW50IHRvIGJlIGFibGUgdG8gc29ydCBkYXRhIGluIGluY3JlYXNpbmcgX29yXyBkZWNyZWFzaW5nXG5vcmRlci4gTWF5YmUgeW91IGhhdmUgcmFjZSB0aW1lcyBmb3IgdGhlIDEwMCBtZXRlciBzcHJpbnQuIFRoaXMgZnVuY3Rpb24gbGV0c1xuc29ydCBieSBiZXN0IHRpbWUgYnkgZGVmYXVsdCwgYnV0IGFsc28gc2VlIHRoZSBvdGhlciBvcmRlci5cblxuICAgIHNvcnRlciA6IFNvcnRlciB7IGEgfCB0aW1lIDogY29tcGFyYWJsZSB9XG4gICAgc29ydGVyID1cbiAgICAgICAgaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IC50aW1lXG5cbi19XG5pbmNyZWFzaW5nT3JEZWNyZWFzaW5nQnkgOiAoZGF0YSAtPiBjb21wYXJhYmxlKSAtPiBTb3J0ZXIgZGF0YVxuaW5jcmVhc2luZ09yRGVjcmVhc2luZ0J5IHRvQ29tcGFyYWJsZSA9XG4gICAgSW5jT3JEZWMgKEFycmF5LnNvcnRCeSB0b0NvbXBhcmFibGUpXG5cblxudHlwZSBQYWdpbmF0aW9uU3R5bGVcbiAgICA9IE5vUGFnaW5hdGlvblxuICAgIHwgUGFnZXIgKEFycmF5IEludClcbiAgICB8IFNjcm9sbGVyIChBcnJheSBJbnQpXG5cblxuey18IC19XG5zZXROb1BhZ2luYXRpb24gOiBTdGF0ZSAtPiBTdGF0ZVxuc2V0Tm9QYWdpbmF0aW9uIHN0YXRlID1cbiAgICB3aGVuIHN0YXRlIGlzXG4gICAgICAgIFN0YXRlIGN1cnJlbnRTdGF0ZSAtPlxuICAgICAgICAgICAgU3RhdGUgeyBjdXJyZW50U3RhdGUgfCBwYWdpbmF0aW9uID0gTm9QYWdpbmF0aW9uIH1cblxuXG57LXwgLX1cbnNldFNpbXBsZVBhZ2luYXRpb24gOiBTdGF0ZSAtPiBTdGF0ZVxuc2V0U2ltcGxlUGFnaW5hdGlvbiBzdGF0ZSA9XG4gICAgd2hlbiBzdGF0ZSBpc1xuICAgICAgICBTdGF0ZSBjdXJyZW50U3RhdGUgLT5cbiAgICAgICAgICAgIFN0YXRlIHsgY3VycmVudFN0YXRlIHwgcGFnaW5hdGlvbiA9IFBhZ2VyIFsgMTAsIDI1LCA1MCwgMTAwIF0gfVxuXG5cbnstfCAtfVxuc2V0UGFnaW5hdGlvbldpdGggOiBJbnQgLT4gQXJyYXkgSW50IC0+IFN0YXRlIC0+IFN0YXRlXG5zZXRQYWdpbmF0aW9uV2l0aCBkZWZhdWx0UGFnZVNpemUgb3RoZXJQYWdlU2l6ZXMgc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZVxuICAgICAgICAgICAgICAgIHsgY3VycmVudFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHwgcGFnaW5hdGlvbiA9IFBhZ2VyIDx8IEFycmF5LnNvcnQgPHwgWyBkZWZhdWx0UGFnZVNpemUgXSArKyBvdGhlclBhZ2VTaXplc1xuICAgICAgICAgICAgICAgICAgICAsIHBhZ2VTaXplID0gZGVmYXVsdFBhZ2VTaXplXG4gICAgICAgICAgICAgICAgfVxuXG5cbnstfCAtfVxuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGggOiBJbnQgLT4gQXJyYXkgSW50IC0+IFN0YXRlIC0+IFN0YXRlXG5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCBkZWZhdWx0UGFnZVNpemUgb3RoZXJQYWdlU2l6ZXMgc3RhdGUgPVxuICAgIHdoZW4gc3RhdGUgaXNcbiAgICAgICAgU3RhdGUgY3VycmVudFN0YXRlIC0+XG4gICAgICAgICAgICBTdGF0ZVxuICAgICAgICAgICAgICAgIHsgY3VycmVudFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHwgcGFnaW5hdGlvbiA9IFNjcm9sbGVyIDx8IEFycmF5LnNvcnQgPHwgWyBkZWZhdWx0UGFnZVNpemUgXSArKyBvdGhlclBhZ2VTaXplc1xuICAgICAgICAgICAgICAgICAgICAsIHBhZ2VTaXplID0gZGVmYXVsdFBhZ2VTaXplXG4gICAgICAgICAgICAgICAgfVxuXG5cbnstfCAtfVxuZ2V0UGFnaW5hdGVkRGF0YSA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBBcnJheSBkYXRhIC0+IEFycmF5IGRhdGFcbmdldFBhZ2luYXRlZERhdGEgKENvbmZpZyB7IHRvSWQgfSkgKFN0YXRlIHsgcGFnZVNpemUsIGFjdGl2ZVJvd0lkLCBwYWdpbmF0aW9uIH0pIGRhdGEgPVxuICAgIGxldFxuICAgICAgICByb3dDdXJzb3IgPVxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIHw+IEFycmF5LmZpbmRGaXJzdCAoXFx2IC0+IHRvSWQgdiA9PSBhY3RpdmVSb3dJZClcbiAgICAgICAgICAgICAgICB8PiBNYXliZS5tYXAgLmluZGV4XG4gICAgICAgICAgICAgICAgfD4gTWF5YmUubWFwIChcXGkgLT4gaSArIDEpXG4gICAgICAgICAgICAgICAgfD4gTWF5YmUud2l0aERlZmF1bHQgMFxuXG4gICAgICAgIHByZWNlZGluZ0Z1bGxQYWdlcyA9XG4gICAgICAgICAgICAocm93Q3Vyc29yIC0gMSkgLy8gcGFnZVNpemVcblxuICAgICAgICBsYXN0Um93T25QYWdlID1cbiAgICAgICAgICAgIHdoZW4gcGFnaW5hdGlvbiBpc1xuICAgICAgICAgICAgICAgIFBhZ2VyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBwYWdlU2l6ZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLS0gcGFnZSBzaXplIDAgbWVhbnMgc2hvdyBhbGwgcm93cyB3YXMgY2hvc2VuIGZyb20gcGFnZSBzaXplIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZWNlZGluZ0Z1bGxQYWdlcyArIDEpICogcGFnZVNpemVcblxuICAgICAgICAgICAgICAgIFNjcm9sbGVyIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgaWYgcGFnZVNpemUgPT0gMCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5sZW5ndGggZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gY29tcGFyZSByb3dDdXJzb3IgKHBhZ2VTaXplIC8vIDIpIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1QgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yICsgcGFnZVNpemUgLy8gMlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgTm9QYWdpbmF0aW9uIC0+XG4gICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhXG5cbiAgICAgICAgbGFzdFJvd0JlZm9yZVBhZ2UgPVxuICAgICAgICAgICAgd2hlbiBwYWdpbmF0aW9uIGlzXG4gICAgICAgICAgICAgICAgUGFnZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICBwcmVjZWRpbmdGdWxsUGFnZXMgKiBwYWdlU2l6ZVxuXG4gICAgICAgICAgICAgICAgU2Nyb2xsZXIgXyAtPlxuICAgICAgICAgICAgICAgICAgICBpZiBwYWdlU2l6ZSA9PSAwIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciAtIDJcblxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVuIGNvbXBhcmUgcm93Q3Vyc29yIDx8IEFycmF5Lmxlbmd0aCBkYXRhIC0gcGFnZVNpemUgLy8gMiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5Lmxlbmd0aCBkYXRhIC0gcGFnZVNpemVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgaXNFdmVuIHBhZ2VTaXplICYmIHBhZ2VTaXplIC89IDAgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q3Vyc29yIC0gcGFnZVNpemUgLy8gMlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0N1cnNvciAtIHBhZ2VTaXplIC8vIDIgLSAxXG5cbiAgICAgICAgICAgICAgICBOb1BhZ2luYXRpb24gLT5cbiAgICAgICAgICAgICAgICAgICAgMFxuICAgIGluXG4gICAgZGF0YVxuICAgICAgICB8PiBBcnJheS50YWtlRmlyc3QgKG5lZ2F0aXZlVG9aZXJvIGxhc3RSb3dPblBhZ2UpXG4gICAgICAgIHw+IEFycmF5LmRyb3BGaXJzdCAobmVnYXRpdmVUb1plcm8gbGFzdFJvd0JlZm9yZVBhZ2UpXG5cblxuey18IC19XG5wYWdlTGVuZ3RoQ2hvb3NlciA6IENvbmZpZyBkYXRhIG1zZyAtPiBTdGF0ZSAtPiBIdG1sIG1zZ1xucGFnZUxlbmd0aENob29zZXIgKENvbmZpZyB7IHRvTXNnIH0pICgoU3RhdGUgeyBwYWdpbmF0aW9uIH0pIGFzIHRhYmxlU3RhdGUpID1cbiAgICBsZXRcbiAgICAgICAgb25QYWdlU2l6ZUNob2ljZSA6IFN0YXRlIC0+IEh0bWwuQXR0cmlidXRlIG1zZ1xuICAgICAgICBvblBhZ2VTaXplQ2hvaWNlIHN0YXRlID1cbiAgICAgICAgICAgIEUub24gXCJjaGFuZ2VcIiA8fFxuICAgICAgICAgICAgICAgIEpzb24uRGVjb2RlLm1hcCAoXFxuZXdQYWdlU2l6ZSAtPiB0b01zZyA8fCB1cGRhdGVQYWdlU2l6ZSBuZXdQYWdlU2l6ZSBzdGF0ZSkgPHxcbiAgICAgICAgICAgICAgICAgICAgSnNvbi5EZWNvZGUubWFwIChNYXliZS53aXRoRGVmYXVsdCAwIDw8IFN0cmluZy50b0ludCkgPHxcbiAgICAgICAgICAgICAgICAgICAgICAgIEUudGFyZ2V0VmFsdWVcblxuICAgICAgICB2aWV3T3B0aW9uIHZhbHVlcyA9XG4gICAgICAgICAgICBBcnJheS5mb2xkclxuICAgICAgICAgICAgICAgIChcXHZhbCBodG1sIC0+XG4gICAgICAgICAgICAgICAgICAgIFsgSHRtbC5vcHRpb24gWyBBLnZhbHVlIHZhbCwgQS5zZWxlY3RlZCA8fCAoU3RyaW5nLmZyb21JbnQgPHwgZ2V0UGFnZVNpemUgdGFibGVTdGF0ZSkgPT0gdmFsIF0gWyBIdG1sLnRleHQgdmFsIF1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKysgaHRtbFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgPHxcbiAgICAgICAgICAgICAgICBBcnJheS5tYXAgU3RyaW5nLmZyb21JbnQgdmFsdWVzXG4gICAgaW5cbiAgICBIdG1sLnNlbGVjdCBbIG9uUGFnZVNpemVDaG9pY2UgdGFibGVTdGF0ZSBdIDx8XG4gICAgICAgICh3aGVuIHBhZ2luYXRpb24gaXNcbiAgICAgICAgICAgIFBhZ2VyIHZhbHVlcyAtPlxuICAgICAgICAgICAgICAgIHZpZXdPcHRpb24gdmFsdWVzXG5cbiAgICAgICAgICAgIFNjcm9sbGVyIHZhbHVlcyAtPlxuICAgICAgICAgICAgICAgIHZpZXdPcHRpb24gdmFsdWVzXG5cbiAgICAgICAgICAgIF8gLT5cbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICApXG5cblxuaXNFdmVuIDogSW50IC0+IEJvb2xcbmlzRXZlbiBpbnQgPVxuICAgIE1hdGgubW9kQnkgMiBpbnQgPT0gMFxuXG5cbm5lZ2F0aXZlVG9aZXJvIDogSW50IC0+IEludFxubmVnYXRpdmVUb1plcm8gbiA9XG4gICAgd2hlbiBjb21wYXJlIG4gMCBpc1xuICAgICAgICBMVCAtPlxuICAgICAgICAgICAgMFxuXG4gICAgICAgIF8gLT5cbiAgICAgICAgICAgIG5cbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybS5DbWQgZXhwb3NpbmdcbiAgICAoIENtZCwgbm9uZSwgYmF0Y2hcbiAgICAsIG1hcFxuICAgIClcblxuey18XG5cbj4gKipOb3RlOioqIEdyZW4gaGFzICoqbWFuYWdlZCBlZmZlY3RzKiosIG1lYW5pbmcgdGhhdCB0aGluZ3MgbGlrZSBIVFRQXG4+IHJlcXVlc3RzIG9yIHdyaXRpbmcgdG8gZGlzayBhcmUgYWxsIHRyZWF0ZWQgYXMgX2RhdGFfIGluIEdyZW4uIFdoZW4gdGhpc1xuPiBkYXRhIGlzIGdpdmVuIHRvIHRoZSBHcmVuIHJ1bnRpbWUgc3lzdGVtLCBpdCBjYW4gZG8gc29tZSDigJxxdWVyeSBvcHRpbWl6YXRpb27igJ1cbj4gYmVmb3JlIGFjdHVhbGx5IHBlcmZvcm1pbmcgdGhlIGVmZmVjdC4gUGVyaGFwcyB1bmV4cGVjdGVkbHksIHRoaXMgbWFuYWdlZFxuPiBlZmZlY3RzIGlkZWEgaXMgdGhlIGhlYXJ0IG9mIHdoeSBHcmVuIGlzIHNvIG5pY2UgZm9yIHRlc3RpbmcsIHJldXNlLFxuPiByZXByb2R1Y2liaWxpdHksIGV0Yy5cbj5cbj4gR3JlbiBoYXMgdHdvIGtpbmRzIG9mIG1hbmFnZWQgZWZmZWN0czogY29tbWFuZHMgYW5kIHN1YnNjcmlwdGlvbnMuXG5cblxuIyMgQ29tbWFuZHNcblxuQGRvY3MgQ21kLCBub25lLCBiYXRjaFxuXG5cbiMjIEZhbmN5IFN0dWZmXG5cbkBkb2NzIG1hcFxuXG4tfVxuXG5pbXBvcnQgQXJyYXkgZXhwb3NpbmcgKEFycmF5KVxuaW1wb3J0IEdyZW4uS2VybmVsLlBsYXRmb3JtXG5cblxuXG4tLSBDT01NQU5EU1xuXG5cbnstfCBBIGNvbW1hbmQgaXMgYSB3YXkgb2YgdGVsbGluZyBHcmVuLCDigJxIZXksIEkgd2FudCB5b3UgdG8gZG8gdGhpcyB0aGluZyHigJ1cblNvIGlmIHlvdSB3YW50IHRvIHNlbmQgYW4gSFRUUCByZXF1ZXN0LCB5b3Ugd291bGQgbmVlZCB0byBjb21tYW5kIEdyZW4gdG8gZG8gaXQuXG5PciBpZiB5b3Ugd2FudGVkIHRvIGFzayBmb3IgZ2VvbG9jYXRpb24sIHlvdSB3b3VsZCBuZWVkIHRvIGNvbW1hbmQgR3JlbiB0byBnb1xuZ2V0IGl0LlxuXG5FdmVyeSBgQ21kYCBzcGVjaWZpZXMgKDEpIHdoaWNoIGVmZmVjdHMgeW91IG5lZWQgYWNjZXNzIHRvIGFuZCAoMikgdGhlIHR5cGUgb2Zcbm1lc3NhZ2VzIHRoYXQgd2lsbCBjb21lIGJhY2sgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxuXG4qKk5vdGU6KiogRG8gbm90IHdvcnJ5IGlmIHRoaXMgc2VlbXMgY29uZnVzaW5nIGF0IGZpcnN0ISBBcyB3aXRoIGV2ZXJ5IEdyZW4gdXNlclxuZXZlciwgY29tbWFuZHMgd2lsbCBtYWtlIG1vcmUgc2Vuc2UgYXMgeW91IHdvcmsgdGhyb3VnaCBbdGhlIEdyZW4gQXJjaGl0ZWN0dXJlXG5UdXRvcmlhbF0oaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL2FyY2hpdGVjdHVyZS8pIGFuZCBzZWUgaG93IHRoZXlcbmZpdCBpbnRvIGEgcmVhbCBhcHBsaWNhdGlvbiFcblxuLX1cbnR5cGUgQ21kIG1zZ1xuICAgID0gQ21kXG5cblxuey18IFRlbGwgdGhlIHJ1bnRpbWUgdGhhdCB0aGVyZSBhcmUgbm8gY29tbWFuZHMuXG4tfVxubm9uZSA6IENtZCBtc2dcbm5vbmUgPVxuICAgIGJhdGNoIFtdXG5cblxuey18IFdoZW4geW91IG5lZWQgdGhlIHJ1bnRpbWUgc3lzdGVtIHRvIHBlcmZvcm0gYSBjb3VwbGUgY29tbWFuZHMsIHlvdVxuY2FuIGJhdGNoIHRoZW0gdG9nZXRoZXIuIEVhY2ggaXMgaGFuZGVkIHRvIHRoZSBydW50aW1lIGF0IHRoZSBzYW1lIHRpbWUsXG5hbmQgc2luY2UgZWFjaCBjYW4gcGVyZm9ybSBhcmJpdHJhcnkgb3BlcmF0aW9ucyBpbiB0aGUgd29ybGQsIHRoZXJlIGFyZVxubm8gb3JkZXJpbmcgZ3VhcmFudGVlcyBhYm91dCB0aGUgcmVzdWx0cy5cblxuKipOb3RlOioqIGBDbWQubm9uZWAgYW5kIGBDbWQuYmF0Y2ggWyBDbWQubm9uZSwgQ21kLm5vbmUgXWAgYW5kIGBDbWQuYmF0Y2ggW11gXG5hbGwgZG8gdGhlIHNhbWUgdGhpbmcuXG5cbi19XG5iYXRjaCA6IEFycmF5IChDbWQgbXNnKSAtPiBDbWQgbXNnXG5iYXRjaCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0uYmF0Y2hcblxuXG5cbi0tIEZBTkNZIFNUVUZGXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgYSBjb21tYW5kLlxuVmVyeSBzaW1pbGFyIHRvIFtgSHRtbC5tYXBgXSgvcGFja2FnZS9ncmVuLWxhbmcvYnJvd3Nlci9sYXRlc3QvbW9kdWxlL0h0bWwjbWFwKS5cblxuVGhpcyBpcyB2ZXJ5IHJhcmVseSB1c2VmdWwgaW4gd2VsbC1zdHJ1Y3R1cmVkIEdyZW4gY29kZSwgc28gZGVmaW5pdGVseSByZWFkIHRoZVxuc2VjdGlvbiBvbiBbc3RydWN0dXJlXSBpbiB0aGUgZ3VpZGUgYmVmb3JlIHJlYWNoaW5nIGZvciB0aGlzIVxuXG5bc3RydWN0dXJlXTogaHR0cHM6Ly9ndWlkZS5ncmVuLWxhbmcub3JnL3dlYmFwcHMvc3RydWN0dXJlLmh0bWxcblxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gQ21kIGEgLT4gQ21kIG1zZ1xubWFwID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5tYXBcbiIsCiAgICAgICAgIm1vZHVsZSBQcmVzaWRlbnRzUGFnaW5hdGVkIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgUGVyc29uLCBjb25maWcsIGluaXQsIG1haW4sIHByZXNpZGVudHMsIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGUgZXhwb3NpbmcgKFNvcnREaXJlY3Rpb24oLi4pKVxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEh0bWwsIGRpdiwgaDEsIGlucHV0LCBsaSwgdGV4dCwgdWwpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChwbGFjZWhvbGRlcilcbmltcG9ydCBIdG1sLkV2ZW50cyBleHBvc2luZyAob25JbnB1dClcblxuXG5tYWluIDogUHJvZ3JhbSB7fSBNb2RlbCBNc2dcbm1haW4gPVxuICAgIEJyb3dzZXIuZWxlbWVudFxuICAgICAgICB7IGluaXQgPSBcXHt9IC0+IGluaXQgcHJlc2lkZW50c1xuICAgICAgICAsIHVwZGF0ZSA9IHVwZGF0ZVxuICAgICAgICAsIHZpZXcgPSB2aWV3XG4gICAgICAgICwgc3Vic2NyaXB0aW9ucyA9IFxcXyAtPiBTdWIubm9uZVxuICAgICAgICB9XG5cblxuXG4tLSBNT0RFTFxuXG5cbnR5cGUgYWxpYXMgTW9kZWwgPVxuICAgIHsgcGVvcGxlIDogQXJyYXkgUGVyc29uXG4gICAgLCB0YWJsZVN0YXRlIDogVGFibGUuU3RhdGVcbiAgICAsIHF1ZXJ5IDogU3RyaW5nXG4gICAgfVxuXG5cbmluaXQgOiBBcnJheSBQZXJzb24gLT4geyBtb2RlbCA6IE1vZGVsLCBjb21tYW5kIDogQ21kIE1zZyB9XG5pbml0IHBlb3BsZSA9XG4gICAgbGV0XG4gICAgICAgIG1vZGVsID1cbiAgICAgICAgICAgIHsgcGVvcGxlID0gcGVvcGxlXG4gICAgICAgICAgICAsIHRhYmxlU3RhdGUgPVxuICAgICAgICAgICAgICAgIFRhYmxlLm5ldyBcIlByZXNpZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS5zZXRTY3JvbGxpbmdQYWdpbmF0aW9uV2l0aCAxMCBbIDAsIDUsIDI1LCA1MCBdXG4gICAgICAgICAgICAgICAgICAgIHw+IFRhYmxlLnVwZGF0ZU11bHRpU29ydFN0YXRlIFwiWWVhclwiIEFzY1xuICAgICAgICAgICAgICAgICAgICB8PiBUYWJsZS51cGRhdGVBY3RpdmVSb3dJZCBcIlwiXG4gICAgICAgICAgICAsIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgIGluXG4gICAgeyBtb2RlbCA9IG1vZGVsLCBjb21tYW5kID0gQ21kLm5vbmUgfVxuXG5cblxuLS0gVVBEQVRFXG5cblxudHlwZSBNc2dcbiAgICA9IFNldFF1ZXJ5IFN0cmluZ1xuICAgIHwgU2V0VGFibGVTdGF0ZSBUYWJsZS5TdGF0ZVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiB7IG1vZGVsIDogTW9kZWwsIGNvbW1hbmQgOiBDbWQgTXNnIH1cbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFNldFF1ZXJ5IG5ld1F1ZXJ5IC0+XG4gICAgICAgICAgICB7IG1vZGVsID0geyBtb2RlbCB8IHF1ZXJ5ID0gbmV3UXVlcnkgfVxuICAgICAgICAgICAgLCBjb21tYW5kID0gQ21kLm5vbmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICBTZXRUYWJsZVN0YXRlIG5ld1N0YXRlIC0+XG4gICAgICAgICAgICB7IG1vZGVsID0geyBtb2RlbCB8IHRhYmxlU3RhdGUgPSBuZXdTdGF0ZSB9XG4gICAgICAgICAgICAsIGNvbW1hbmQgPSBDbWQubm9uZVxuICAgICAgICAgICAgfVxuXG5cblxuLS0gVklFV1xuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyB7IHBlb3BsZSwgdGFibGVTdGF0ZSwgcXVlcnkgfSA9XG4gICAgbGV0XG4gICAgICAgIGxvd2VyUXVlcnkgPVxuICAgICAgICAgICAgU3RyaW5nLnRvTG93ZXIgcXVlcnlcblxuICAgICAgICBhY2NlcHRhYmxlUGVvcGxlID1cbiAgICAgICAgICAgIEFycmF5LmtlZXBJZiAoU3RyaW5nLmNvbnRhaW5zIGxvd2VyUXVlcnkgPDwgU3RyaW5nLnRvTG93ZXIgPDwgLm5hbWUpIHBlb3BsZVxuICAgIGluXG4gICAgZGl2IFtdXG4gICAgICAgIFsgaDEgW10gWyB0ZXh0IFwiQmlydGhwbGFjZXMgb2YgVS5TLiBQcmVzaWRlbnRzXCIgXVxuICAgICAgICAsIHVsIFtdXG4gICAgICAgICAgICBbIGxpIFtdIFsgdGV4dCBcIlNpbmdsZSBjbGljayBvbiBjb2x1bW4gaGVhZGVyIHRvIGFkZC9tb3ZlIHRoYXQgY29sdW1uIHRvIHRoZSBlbmQgb2YgdGhlIHNvcnQgb3JkZXIgKC4uLnRoZW4gc29ydCBieSBZZWFyKVwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiRG91YmxlIGNsaWNrIHRvIHJlc2V0IHRoZSBzb3J0IG9yZGVyIHRvIGp1c3QgdGhhdCBjb2x1bW4gKFNvcnQgYnkgTmFtZSkuXCIgXVxuICAgICAgICAgICAgLCBsaSBbXSBbIHRleHQgXCJJIGRvbid0IGxpa2UgdGhpcyB1c2VyIGludGVyYWN0aW9uLCBidXQgaXQgaXMsIHdoYXQgaXQgaXMgZm9yIG5vdy4gU3VnZ2VzdGlvbnMgZm9yIGNoYW5nZSB3ZWxjb21lLlwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiSSdkIHByZWZlciB0byBtYWtlIHNob3J0IGNsaWNrIHJlc2V0IGFuZCBsb25nIGNsaWNrIGFkZCB0byBzb3J0IG9yZGVyLlwiIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgLCBkaXYgW10gW11cbiAgICAgICAgLCBpbnB1dCBbIHBsYWNlaG9sZGVyIFwiU2VhcmNoIGJ5IE5hbWVcIiwgb25JbnB1dCBTZXRRdWVyeSBdIFtdXG4gICAgICAgICwgVGFibGUucGFnZUxlbmd0aENob29zZXIgY29uZmlnIHRhYmxlU3RhdGVcbiAgICAgICAgLCBUYWJsZS52aWV3IGNvbmZpZyB0YWJsZVN0YXRlIGFjY2VwdGFibGVQZW9wbGVcbiAgICAgICAgXVxuXG5cbmNvbmZpZyA6IFRhYmxlLkNvbmZpZyBQZXJzb24gTXNnXG5jb25maWcgPVxuICAgIFRhYmxlLmNvbmZpZ1xuICAgICAgICB7IHRvSWQgPSAubmFtZVxuICAgICAgICAsIHRvTXNnID0gU2V0VGFibGVTdGF0ZVxuICAgICAgICAsIGNvbHVtbnMgPVxuICAgICAgICAgICAgWyBUYWJsZS5zdHJpbmdDb2x1bW4gXCJOYW1lXCIgLm5hbWVcbiAgICAgICAgICAgICwgVGFibGUuaW50Q29sdW1uIFwiWWVhclwiIC55ZWFyXG4gICAgICAgICAgICAsIFRhYmxlLnN0cmluZ0NvbHVtbiBcIkNpdHlcIiAuY2l0eVxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJTdGF0ZVwiIC5zdGF0ZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cblxuXG4tLSBQRU9QTEVcblxuXG50eXBlIGFsaWFzIFBlcnNvbiA9XG4gICAgeyBuYW1lIDogU3RyaW5nXG4gICAgLCB5ZWFyIDogSW50XG4gICAgLCBjaXR5IDogU3RyaW5nXG4gICAgLCBzdGF0ZSA6IFN0cmluZ1xuICAgIH1cblxuXG5wZXJzb24gbmFtZSB5ZWFyIGNpdHkgc3RhdGUgPVxuICAgIHsgbmFtZSA9IG5hbWUsIHllYXIgPSB5ZWFyLCBjaXR5ID0gY2l0eSwgc3RhdGUgPSBzdGF0ZSB9XG5cblxucHJlc2lkZW50cyA6IEFycmF5IFBlcnNvblxucHJlc2lkZW50cyA9XG4gICAgWyBwZXJzb24gXCJHZW9yZ2UgV2FzaGluZ3RvblwiIDE3MzIgXCJXZXN0bW9yZWxhbmQgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIEFkYW1zXCIgMTczNSBcIkJyYWludHJlZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJUaG9tYXMgSmVmZmVyc29uXCIgMTc0MyBcIlNoYWR3ZWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNYWRpc29uXCIgMTc1MSBcIlBvcnQgQ29ud2F5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBNb25yb2VcIiAxNzU4IFwiTW9ucm9lIEhhbGxcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKYWNrc29uXCIgMTc2NyBcIldheGhhd3MgUmVnaW9uXCIgXCJTb3V0aC9Ob3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIFF1aW5jeSBBZGFtc1wiIDE3NjcgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIZW5yeSBIYXJyaXNvblwiIDE3NzMgXCJDaGFybGVzIENpdHkgQ291bnR5XCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJNYXJ0aW4gVmFuIEJ1cmVuXCIgMTc4MiBcIktpbmRlcmhvb2tcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIlphY2hhcnkgVGF5bG9yXCIgMTc4NCBcIkJhcmJvdXJzdmlsbGVcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gVHlsZXJcIiAxNzkwIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgQnVjaGFuYW5cIiAxNzkxIFwiQ292ZSBHYXBcIiBcIlBlbm5zeWx2YW5pYVwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBLLiBQb2xrXCIgMTc5NSBcIlBpbmV2aWxsZVwiIFwiTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiTWlsbGFyZCBGaWxsbW9yZVwiIDE4MDAgXCJTdW1tZXJoaWxsXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJGcmFua2xpbiBQaWVyY2VcIiAxODA0IFwiSGlsbHNib3JvdWdoXCIgXCJOZXcgSGFtcHNoaXJlXCJcbiAgICAsIHBlcnNvbiBcIkFuZHJldyBKb2huc29uXCIgMTgwOCBcIlJhbGVpZ2hcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIkFicmFoYW0gTGluY29sblwiIDE4MDkgXCJTaW5raW5nIHNwcmluZ1wiIFwiS2VudHVja3lcIlxuICAgICwgcGVyc29uIFwiVWx5c3NlcyBTLiBHcmFudFwiIDE4MjIgXCJQb2ludCBQbGVhc2FudFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJSdXRoZXJmb3JkIEIuIEhheWVzXCIgMTgyMiBcIkRlbGF3YXJlXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkNoZXN0ZXIgQS4gQXJ0aHVyXCIgMTgyOSBcIkZhaXJmaWVsZFwiIFwiVmVybW9udFwiXG4gICAgLCBwZXJzb24gXCJKYW1lcyBBLiBHYXJmaWVsZFwiIDE4MzEgXCJNb3JlbGFuZCBIaWxsc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJCZW5qYW1pbiBIYXJyaXNvblwiIDE4MzMgXCJOb3J0aCBCZW5kXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIkdyb3ZlciBDbGV2ZWxhbmRcIiAxODM3IFwiQ2FsZHdlbGxcIiBcIk5ldyBKZXJzZXlcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBNY0tpbmxleVwiIDE4NDMgXCJOaWxlc1wiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJXb29kcm93IFdpbHNvblwiIDE4NTYgXCJTdGF1bnRvblwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiV2lsbGlhbSBIb3dhcmQgVGFmdFwiIDE4NTcgXCJDaW5jaW5uYXRpXCIgXCJPaGlvXCJcbiAgICAsIHBlcnNvbiBcIlRoZW9kb3JlIFJvb3NldmVsdFwiIDE4NTggXCJOZXcgWW9yayBDaXR5XCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJXYXJyZW4gRy4gSGFyZGluZ1wiIDE4NjUgXCJCbG9vbWluZyBHcm92ZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJDYWx2aW4gQ29vbGlkZ2VcIiAxODcyIFwiUGx5bW91dGhcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uIFwiSGVyYmVydCBIb292ZXJcIiAxODc0IFwiV2VzdCBCcmFuY2hcIiBcIklvd2FcIlxuICAgICwgcGVyc29uIFwiRnJhbmtsaW4gRC4gUm9vc2V2ZWx0XCIgMTg4MiBcIkh5ZGUgUGFya1wiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiSGFycnkgUy4gVHJ1bWFuXCIgMTg4NCBcIkxhbWFyXCIgXCJNaXNzb3VyaVwiXG4gICAgLCBwZXJzb24gXCJEd2lnaHQgRC4gRWlzZW5ob3dlclwiIDE4OTAgXCJEZW5pc29uXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb24gXCJMeW5kb24gQi4gSm9obnNvblwiIDE5MDggXCJTdG9uZXdhbGxcIiBcIlRleGFzXCJcbiAgICAsIHBlcnNvbiBcIlJvbmFsZCBSZWFnYW5cIiAxOTExIFwiVGFtcGljb1wiIFwiSWxsaW5vaXNcIlxuICAgICwgcGVyc29uIFwiUmljaGFyZCBNLiBOaXhvblwiIDE5MTMgXCJZb3JiYSBMaW5kYVwiIFwiQ2FsaWZvcm5pYVwiXG4gICAgLCBwZXJzb24gXCJHZXJhbGQgUi4gRm9yZFwiIDE5MTMgXCJPbWFoYVwiIFwiTmVicmFza2FcIlxuICAgICwgcGVyc29uIFwiSm9obiBGLiBLZW5uZWR5XCIgMTkxNyBcIkJyb29rbGluZVwiIFwiTWFzc2FjaHVzZXR0c1wiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgSC4gVy4gQnVzaFwiIDE5MjQgXCJNaWx0b25cIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiSmltbXkgQ2FydGVyXCIgMTkyNCBcIlBsYWluc1wiIFwiR2VvcmdpYVwiXG4gICAgLCBwZXJzb24gXCJHZW9yZ2UgVy4gQnVzaFwiIDE5NDYgXCJOZXcgSGF2ZW5cIiBcIkNvbm5lY3RpY3V0XCJcbiAgICAsIHBlcnNvbiBcIkJpbGwgQ2xpbnRvblwiIDE5NDYgXCJIb3BlXCIgXCJBcmthbnNhc1wiXG4gICAgLCBwZXJzb24gXCJCYXJhY2sgT2JhbWFcIiAxOTYxIFwiSG9ub2x1bHVcIiBcIkhhd2FpaVwiXG4gICAgLCBwZXJzb24gXCJEb25hbGQgVHJ1bXBcIiAxOTQ2IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgIF1cbiIsCiAgICAgICAgIm1vZHVsZSBQbGF0Zm9ybS5TdWIgZXhwb3NpbmdcbiAgICAoIFN1Yiwgbm9uZSwgYmF0Y2hcbiAgICAsIG1hcFxuICAgIClcblxuey18XG5cbj4gKipOb3RlOioqIEdyZW4gaGFzICoqbWFuYWdlZCBlZmZlY3RzKiosIG1lYW5pbmcgdGhhdCB0aGluZ3MgbGlrZSBIVFRQXG4+IHJlcXVlc3RzIG9yIHdyaXRpbmcgdG8gZGlzayBhcmUgYWxsIHRyZWF0ZWQgYXMgX2RhdGFfIGluIEdyZW4uIFdoZW4gdGhpc1xuPiBkYXRhIGlzIGdpdmVuIHRvIHRoZSBHcmVuIHJ1bnRpbWUgc3lzdGVtLCBpdCBjYW4gZG8gc29tZSDigJxxdWVyeSBvcHRpbWl6YXRpb27igJ1cbj4gYmVmb3JlIGFjdHVhbGx5IHBlcmZvcm1pbmcgdGhlIGVmZmVjdC4gUGVyaGFwcyB1bmV4cGVjdGVkbHksIHRoaXMgbWFuYWdlZFxuPiBlZmZlY3RzIGlkZWEgaXMgdGhlIGhlYXJ0IG9mIHdoeSBHcmVuIGlzIHNvIG5pY2UgZm9yIHRlc3RpbmcsIHJldXNlLFxuPiByZXByb2R1Y2liaWxpdHksIGV0Yy5cbj5cbj4gR3JlbiBoYXMgdHdvIGtpbmRzIG9mIG1hbmFnZWQgZWZmZWN0czogY29tbWFuZHMgYW5kIHN1YnNjcmlwdGlvbnMuXG5cblxuIyMgU3Vic2NyaXB0aW9uc1xuXG5AZG9jcyBTdWIsIG5vbmUsIGJhdGNoXG5cblxuIyMgRmFuY3kgU3R1ZmZcblxuQGRvY3MgbWFwXG5cbi19XG5cbmltcG9ydCBBcnJheSBleHBvc2luZyAoQXJyYXkpXG5pbXBvcnQgR3Jlbi5LZXJuZWwuUGxhdGZvcm1cblxuXG5cbi0tIFNVQlNDUklQVElPTlNcblxuXG57LXwgQSBzdWJzY3JpcHRpb24gaXMgYSB3YXkgb2YgdGVsbGluZyBHcmVuLCDigJxIZXksIGxldCBtZSBrbm93IGlmIGFueXRoaW5nXG5pbnRlcmVzdGluZyBoYXBwZW5zIG92ZXIgdGhlcmUh4oCdIFNvIGlmIHlvdSB3YW50IHRvIGxpc3RlbiBmb3IgbWVzc2FnZXMgb24gYSB3ZWJcbnNvY2tldCwgeW91IHdvdWxkIHRlbGwgR3JlbiB0byBjcmVhdGUgYSBzdWJzY3JpcHRpb24uIElmIHlvdSB3YW50IHRvIGdldCBjbG9ja1xudGlja3MsIHlvdSB3b3VsZCB0ZWxsIEdyZW4gdG8gc3Vic2NyaWJlIHRvIHRoYXQuIFRoZSBjb29sIHRoaW5nIGhlcmUgaXMgdGhhdFxudGhpcyBtZWFucyBfR3Jlbl8gbWFuYWdlcyBhbGwgdGhlIGRldGFpbHMgb2Ygc3Vic2NyaXB0aW9ucyBpbnN0ZWFkIG9mIF95b3VfLlxuU28gaWYgYSB3ZWIgc29ja2V0IGdvZXMgZG93biwgX3lvdV8gZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgcmVjb25uZWN0IHdpdGggYW5cbmV4cG9uZW50aWFsIGJhY2tvZmYgc3RyYXRlZ3ksIF9HcmVuXyBkb2VzIHRoaXMgYWxsIGZvciB5b3UgYmVoaW5kIHRoZSBzY2VuZXMhXG5cbkV2ZXJ5IGBTdWJgIHNwZWNpZmllcyAoMSkgd2hpY2ggZWZmZWN0cyB5b3UgbmVlZCBhY2Nlc3MgdG8gYW5kICgyKSB0aGUgdHlwZSBvZlxubWVzc2FnZXMgdGhhdCB3aWxsIGNvbWUgYmFjayBpbnRvIHlvdXIgYXBwbGljYXRpb24uXG5cbioqTm90ZToqKiBEbyBub3Qgd29ycnkgaWYgdGhpcyBzZWVtcyBjb25mdXNpbmcgYXQgZmlyc3QhIEFzIHdpdGggZXZlcnkgR3JlbiB1c2VyXG5ldmVyLCBzdWJzY3JpcHRpb25zIHdpbGwgbWFrZSBtb3JlIHNlbnNlIGFzIHlvdSB3b3JrIHRocm91Z2ggW3RoZSBHcmVuIEFyY2hpdGVjdHVyZVxuVHV0b3JpYWxdKGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy9hcmNoaXRlY3R1cmUvKSBhbmQgc2VlIGhvdyB0aGV5IGZpdFxuaW50byBhIHJlYWwgYXBwbGljYXRpb24hXG5cbi19XG50eXBlIFN1YiBtc2dcbiAgICA9IFN1YlxuXG5cbnstfCBUZWxsIHRoZSBydW50aW1lIHRoYXQgdGhlcmUgYXJlIG5vIHN1YnNjcmlwdGlvbnMuXG4tfVxubm9uZSA6IFN1YiBtc2dcbm5vbmUgPVxuICAgIGJhdGNoIFtdXG5cblxuey18IFdoZW4geW91IG5lZWQgdG8gc3Vic2NyaWJlIHRvIG11bHRpcGxlIHRoaW5ncywgeW91IGNhbiBjcmVhdGUgYSBgYmF0Y2hgIG9mXG5zdWJzY3JpcHRpb25zLlxuXG4qKk5vdGU6KiogYFN1Yi5ub25lYCBhbmQgYFN1Yi5iYXRjaCBbIFN1Yi5ub25lLCBTdWIubm9uZSBdYCBhbmRcbmBTdWIuYmF0Y2ggW11gIGFsbCBkbyB0aGUgc2FtZSB0aGluZy5cblxuLX1cbmJhdGNoIDogQXJyYXkgKFN1YiBtc2cpIC0+IFN1YiBtc2dcbmJhdGNoID1cbiAgICBHcmVuLktlcm5lbC5QbGF0Zm9ybS5iYXRjaFxuXG5cblxuLS0gRkFOQ1kgU1RVRkZcblxuXG57LXwgVHJhbnNmb3JtIHRoZSBtZXNzYWdlcyBwcm9kdWNlZCBieSBhIHN1YnNjcmlwdGlvbi5cblZlcnkgc2ltaWxhciB0byBbYEh0bWwubWFwYF0oL3BhY2thZ2UvZ3Jlbi1sYW5nL2Jyb3dzZXIvbGF0ZXN0L21vZHVsZS9IdG1sI21hcCkuXG5cblRoaXMgaXMgdmVyeSByYXJlbHkgdXNlZnVsIGluIHdlbGwtc3RydWN0dXJlZCBHcmVuIGNvZGUsIHNvIGRlZmluaXRlbHkgcmVhZCB0aGVcbnNlY3Rpb24gb24gW3N0cnVjdHVyZV0gaW4gdGhlIGd1aWRlIGJlZm9yZSByZWFjaGluZyBmb3IgdGhpcyFcblxuW3N0cnVjdHVyZV06IGh0dHBzOi8vZ3VpZGUuZ3Jlbi1sYW5nLm9yZy93ZWJhcHBzL3N0cnVjdHVyZS5odG1sXG5cbi19XG5tYXAgOiAoYSAtPiBtc2cpIC0+IFN1YiBhIC0+IFN1YiBtc2dcbm1hcCA9XG4gICAgR3Jlbi5LZXJuZWwuUGxhdGZvcm0ubWFwXG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nXG4gICggc3R5bGUsIHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hcFxuICAsIGNsYXNzLCBjbGFzc0xpc3QsIGlkLCB0aXRsZSwgaGlkZGVuXG4gICwgdHlwZV8sIHZhbHVlLCBjaGVja2VkLCBwbGFjZWhvbGRlciwgc2VsZWN0ZWRcbiAgLCBhY2NlcHQsIGFjY2VwdENoYXJzZXQsIGFjdGlvbiwgYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXNcbiAgLCBkaXNhYmxlZCwgZW5jdHlwZSwgbGlzdCwgbWF4bGVuZ3RoLCBtaW5sZW5ndGgsIG1ldGhvZCwgbXVsdGlwbGVcbiAgLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuICAsIG1heCwgbWluLCBzdGVwXG4gICwgY29scywgcm93cywgd3JhcFxuICAsIGhyZWYsIHRhcmdldCwgZG93bmxvYWQsIGhyZWZsYW5nLCBtZWRpYSwgcGluZywgcmVsXG4gICwgaXNtYXAsIHVzZW1hcCwgc2hhcGUsIGNvb3Jkc1xuICAsIHNyYywgaGVpZ2h0LCB3aWR0aCwgYWx0XG4gICwgYXV0b3BsYXksIGNvbnRyb2xzLCBsb29wLCBwcmVsb2FkLCBwb3N0ZXIsIGRlZmF1bHQsIGtpbmQsIHNyY2xhbmdcbiAgLCBzYW5kYm94LCBzcmNkb2NcbiAgLCByZXZlcnNlZCwgc3RhcnRcbiAgLCBhbGlnbiwgY29sc3Bhbiwgcm93c3BhbiwgaGVhZGVycywgc2NvcGVcbiAgLCBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZVxuICAsIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuICAsIGNpdGUsIGRhdGV0aW1lLCBwdWJkYXRlLCBtYW5pZmVzdFxuICApXG5cbnstfCBIZWxwZXIgZnVuY3Rpb25zIGZvciBIVE1MIGF0dHJpYnV0ZXMuIFRoZXkgYXJlIG9yZ2FuaXplZCByb3VnaGx5IGJ5XG5jYXRlZ29yeS4gRWFjaCBhdHRyaWJ1dGUgaXMgbGFiZWxlZCB3aXRoIHRoZSBIVE1MIHRhZ3MgaXQgY2FuIGJlIHVzZWQgd2l0aCwgc29cbmp1c3Qgc2VhcmNoIHRoZSBwYWdlIGZvciBgdmlkZW9gIGlmIHlvdSB3YW50IHZpZGVvIHN0dWZmLlxuXG4jIyBQcmltaXRpdmVzXG5AZG9jcyBzdHlsZSwgcHJvcGVydHksIGF0dHJpYnV0ZSwgbWFwXG5cbiMjIFN1cGVyIENvbW1vbiBBdHRyaWJ1dGVzXG5AZG9jcyBjbGFzcywgY2xhc3NMaXN0LCBpZCwgdGl0bGUsIGhpZGRlblxuXG4jIyBJbnB1dHNcbkBkb2NzIHR5cGVfLCB2YWx1ZSwgY2hlY2tlZCwgcGxhY2Vob2xkZXIsIHNlbGVjdGVkXG5cbiMjIElucHV0IEhlbHBlcnNcbkBkb2NzIGFjY2VwdCwgYWNjZXB0Q2hhcnNldCwgYWN0aW9uLCBhdXRvY29tcGxldGUsIGF1dG9mb2N1cywgZGlzYWJsZWQsIGVuY3R5cGUsIGxpc3QsIG1heGxlbmd0aCwgbWlubGVuZ3RoLCBtZXRob2QsIG11bHRpcGxlLCBuYW1lLCBub3ZhbGlkYXRlLCBwYXR0ZXJuLCByZWFkb25seSwgcmVxdWlyZWQsIHNpemUsIGZvciwgZm9ybVxuXG4jIyBJbnB1dCBSYW5nZXNcbkBkb2NzIG1heCwgbWluLCBzdGVwXG5cbiMjIElucHV0IFRleHQgQXJlYXNcbkBkb2NzIGNvbHMsIHJvd3MsIHdyYXBcblxuIyMgTGlua3MgYW5kIEFyZWFzXG5AZG9jcyBocmVmLCB0YXJnZXQsIGRvd25sb2FkLCBocmVmbGFuZywgbWVkaWEsIHBpbmcsIHJlbFxuXG4jIyBNYXBzXG5AZG9jcyBpc21hcCwgdXNlbWFwLCBzaGFwZSwgY29vcmRzXG5cblxuIyMgRW1iZWRkZWQgQ29udGVudFxuQGRvY3Mgc3JjLCBoZWlnaHQsIHdpZHRoLCBhbHRcblxuIyMgQXVkaW8gYW5kIFZpZGVvXG5AZG9jcyBhdXRvcGxheSwgY29udHJvbHMsIGxvb3AsIHByZWxvYWQsIHBvc3RlciwgZGVmYXVsdCwga2luZCwgc3JjbGFuZ1xuXG4jIyBpZnJhbWVzXG5AZG9jcyBzYW5kYm94LCBzcmNkb2NcblxuIyMgT3JkZXJlZCBMaXN0c1xuQGRvY3MgcmV2ZXJzZWQsIHN0YXJ0XG5cbiMjIFRhYmxlc1xuQGRvY3MgYWxpZ24sIGNvbHNwYW4sIHJvd3NwYW4sIGhlYWRlcnMsIHNjb3BlXG5cbiMjIExlc3MgQ29tbW9uIEdsb2JhbCBBdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gYW55IEhUTUwgdGFnIGJ1dCBhcmUgbGVzcyBjb21tb25seSB1c2VkLlxuXG5AZG9jcyBhY2Nlc3NrZXksIGNvbnRlbnRlZGl0YWJsZSwgY29udGV4dG1lbnUsIGRpciwgZHJhZ2dhYmxlLCBkcm9wem9uZSxcbiAgICAgIGl0ZW1wcm9wLCBsYW5nLCBzcGVsbGNoZWNrLCB0YWJpbmRleFxuXG4jIyBNaXNjZWxsYW5lb3VzXG5AZG9jcyBjaXRlLCBkYXRldGltZSwgcHViZGF0ZSwgbWFuaWZlc3RcblxuLX1cblxuXG5pbXBvcnQgSHRtbCBleHBvc2luZyAoQXR0cmlidXRlKVxuaW1wb3J0IEpzb24uRW5jb2RlIGFzIEpzb25cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuLS0gVGhpcyBsaWJyYXJ5IGRvZXMgbm90IGluY2x1ZGUgbG93LCBoaWdoLCBvciBvcHRpbXVtIGJlY2F1c2UgdGhlIGlkZWEgb2YgYVxuLS0gYG1ldGVyYCBpcyBqdXN0IHRvbyBjcmF6eS5cblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgU3BlY2lmeSBhIHN0eWxlLlxuXG4gICAgZ3JlZXRpbmcgOiBOb2RlIG1zZ1xuICAgIGdyZWV0aW5nID1cbiAgICAgIGRpdlxuICAgICAgICBbIHN0eWxlIFwiYmFja2dyb3VuZC1jb2xvclwiIFwicmVkXCJcbiAgICAgICAgLCBzdHlsZSBcImhlaWdodFwiIFwiOTBweFwiXG4gICAgICAgICwgc3R5bGUgXCJ3aWR0aFwiIFwiMTAwJVwiXG4gICAgICAgIF1cbiAgICAgICAgWyB0ZXh0IFwiSGVsbG8hXCJcbiAgICAgICAgXVxuXG5UaGVyZSBpcyBubyBgSHRtbC5TdHlsZXNgIG1vZHVsZSBiZWNhdXNlIGJlc3QgcHJhY3RpY2VzIGZvciB3b3JraW5nIHdpdGggSFRNTFxuc3VnZ2VzdCB0aGF0IHRoaXMgc2hvdWxkIHByaW1hcmlseSBiZSBzcGVjaWZpZWQgaW4gQ1NTIGZpbGVzLiBTbyB0aGUgZ2VuZXJhbFxucmVjb21tZW5kYXRpb24gaXMgdG8gdXNlIHRoaXMgZnVuY3Rpb24gbGlnaHRseS5cbi19XG5zdHlsZSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3R5bGUgPVxuICBWaXJ0dWFsRG9tLnN0eWxlXG5cblxuey18IFRoaXMgZnVuY3Rpb24gbWFrZXMgaXQgZWFzaWVyIHRvIGJ1aWxkIGEgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIGF0dHJpYnV0ZS5cbkVhY2ggY2xhc3MgY2FuIGVhc2lseSBiZSBhZGRlZCBhbmQgcmVtb3ZlZCBkZXBlbmRpbmcgb24gdGhlIGJvb2xlYW4gdmFsdWUgaXRcbmlzIHBhaXJlZCB3aXRoLiBGb3IgZXhhbXBsZSwgbWF5YmUgd2Ugd2FudCBhIHdheSB0byB2aWV3IG5vdGljZXM6XG5cbiAgICB2aWV3Tm90aWNlIDogTm90aWNlIC0+IEh0bWwgbXNnXG4gICAgdmlld05vdGljZSBub3RpY2UgPVxuICAgICAgZGl2XG4gICAgICAgIFsgY2xhc3NMaXN0XG4gICAgICAgICAgICBbIHsgY2xhc3MgPSBcIm5vdGljZVwiLCBlbmFibGVkID0gVHJ1ZSB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1pbXBvcnRhbnRcIiwgZW5hYmxlZCA9IG5vdGljZS5pc0ltcG9ydGFudCB9XG4gICAgICAgICAgICAsIHsgY2xhc3MgPSBcIm5vdGljZS1zZWVuXCIsIGVuYWJsZWQgPSBub3RpY2UuaXNTZWVuIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgICBbIHRleHQgbm90aWNlLmNvbnRlbnQgXVxuXG4qKk5vdGU6KiogWW91IGNhbiBoYXZlIGFzIG1hbnkgYGNsYXNzYCBhbmQgYGNsYXNzTGlzdGAgYXR0cmlidXRlcyBhcyB5b3Ugd2FudC5cblRoZXkgYWxsIGdldCBhcHBsaWVkLCBzbyBpZiB5b3Ugc2F5IGBbIGNsYXNzIFwibm90aWNlXCIsIGNsYXNzIFwibm90aWNlLXNlZW5cIiBdYFxueW91IHdpbGwgZ2V0IGJvdGggY2xhc3NlcyFcbi19XG5jbGFzc0xpc3QgOiBBcnJheSB7IGNsYXNzIDogU3RyaW5nLCBlbmFibGVkIDogQm9vbCB9IC0+IEF0dHJpYnV0ZSBtc2dcbmNsYXNzTGlzdCBjbGFzc2VzID1cbiAgY2xhc3Nlc1xuICAgIHw+IEFycmF5LmtlZXBJZiAuZW5hYmxlZFxuICAgIHw+IEFycmF5Lm1hcCAuY2xhc3NcbiAgICB8PiBTdHJpbmcuam9pbiBcIiBcIlxuICAgIHw+IGNsYXNzXG5cblxuXG4tLSBDVVNUT00gQVRUUklCVVRFU1xuXG5cbnstfCBDcmVhdGUgKnByb3BlcnRpZXMqLCBsaWtlIHNheWluZyBgZG9tTm9kZS5jbGFzc05hbWUgPSAnZ3JlZXRpbmcnYCBpblxuSmF2YVNjcmlwdC5cblxuICAgIGltcG9ydCBKc29uLkVuY29kZSBhcyBFbmNvZGVcblxuICAgIGNsYXNzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBjbGFzcyBuYW1lID1cbiAgICAgIHByb3BlcnR5IFwiY2xhc3NOYW1lXCIgKEVuY29kZS5zdHJpbmcgbmFtZSlcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxucHJvcGVydHkgOiBTdHJpbmcgLT4gSnNvbi5WYWx1ZSAtPiBBdHRyaWJ1dGUgbXNnXG5wcm9wZXJ0eSA9XG4gIFZpcnR1YWxEb20ucHJvcGVydHlcblxuXG5zdHJpbmdQcm9wZXJ0eSA6IFN0cmluZyAtPiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RyaW5nUHJvcGVydHkga2V5IHN0cmluZyA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5zdHJpbmcgc3RyaW5nKVxuXG5cbmJvb2xQcm9wZXJ0eSA6IFN0cmluZyAtPiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmJvb2xQcm9wZXJ0eSBrZXkgYm9vbCA9XG4gIHByb3BlcnR5IGtleSAoSnNvbi5ib29sIGJvb2wpXG5cblxuey18IENyZWF0ZSAqYXR0cmlidXRlcyosIGxpa2Ugc2F5aW5nIGBkb21Ob2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ3JlZXRpbmcnKWBcbmluIEphdmFTY3JpcHQuXG5cbiAgICBjbGFzcyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgY2xhc3MgbmFtZSA9XG4gICAgICBhdHRyaWJ1dGUgXCJjbGFzc1wiIG5hbWVcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBbaGVyZV1bXS5cblxuW2hlcmVdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL2h0bWwvYmxvYi9tYXN0ZXIvcHJvcGVydGllcy12cy1hdHRyaWJ1dGVzLm1kXG4tfVxuYXR0cmlidXRlIDogU3RyaW5nIC0+IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hdHRyaWJ1dGUgPVxuICBWaXJ0dWFsRG9tLmF0dHJpYnV0ZVxuXG5cbnstfCBUcmFuc2Zvcm0gdGhlIG1lc3NhZ2VzIHByb2R1Y2VkIGJ5IGFuIGBBdHRyaWJ1dGVgLlxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gQXR0cmlidXRlIGEgLT4gQXR0cmlidXRlIG1zZ1xubWFwID1cbiAgVmlydHVhbERvbS5tYXBBdHRyaWJ1dGVcblxuXG5cbi0tIEdMT0JBTCBBVFRSSUJVVEVTXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgZWxlbWVudHMgd2l0aCBjb21tb24gcHJvcGVydGllcy5cblxuKipOb3RlOioqIFlvdSBjYW4gaGF2ZSBhcyBtYW55IGBjbGFzc2AgYW5kIGBjbGFzc0xpc3RgIGF0dHJpYnV0ZXMgYXMgeW91IHdhbnQuXG5UaGV5IGFsbCBnZXQgYXBwbGllZCwgc28gaWYgeW91IHNheSBgWyBjbGFzcyBcIm5vdGljZVwiLCBjbGFzcyBcIm5vdGljZS1zZWVuXCIgXWBcbnlvdSB3aWxsIGdldCBib3RoIGNsYXNzZXMhXG4tfVxuY2xhc3MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2xhc3MgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImNsYXNzTmFtZVwiXG5cblxuey18IEluZGljYXRlcyB0aGUgcmVsZXZhbmNlIG9mIGFuIGVsZW1lbnQuIC19XG5oaWRkZW4gOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmhpZGRlbiA9XG4gIGJvb2xQcm9wZXJ0eSBcImhpZGRlblwiXG5cblxuey18IE9mdGVuIHVzZWQgd2l0aCBDU1MgdG8gc3R5bGUgYSBzcGVjaWZpYyBlbGVtZW50LiBUaGUgdmFsdWUgb2YgdGhpc1xuYXR0cmlidXRlIG11c3QgYmUgdW5pcXVlLlxuLX1cbmlkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmlkID1cbiAgc3RyaW5nUHJvcGVydHkgXCJpZFwiXG5cblxuey18IFRleHQgdG8gYmUgZGlzcGxheWVkIGluIGEgdG9vbHRpcCB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGVsZW1lbnQuIC19XG50aXRsZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50aXRsZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidGl0bGVcIlxuXG5cblxuLS0gTEVTUyBDT01NT04gR0xPQkFMIEFUVFJJQlVURVNcblxuXG57LXwgRGVmaW5lcyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIGFjdGl2YXRlIG9yIGFkZCBmb2N1cyB0byB0aGUgZWxlbWVudC4gLX1cbmFjY2Vzc2tleSA6IENoYXIgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXNza2V5IGNoYXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2Vzc0tleVwiIChTdHJpbmcuZnJvbUNoYXIgY2hhcilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQncyBjb250ZW50IGlzIGVkaXRhYmxlLiAtfVxuY29udGVudGVkaXRhYmxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5jb250ZW50ZWRpdGFibGUgPVxuICBib29sUHJvcGVydHkgXCJjb250ZW50RWRpdGFibGVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBJRCBvZiBhIGBtZW51YCBlbGVtZW50IHdoaWNoIHdpbGwgc2VydmUgYXMgdGhlIGVsZW1lbnQnc1xuY29udGV4dCBtZW51LlxuLX1cbmNvbnRleHRtZW51IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvbnRleHRtZW51ID1cbiAgYXR0cmlidXRlIFwiY29udGV4dG1lbnVcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSB0ZXh0IGRpcmVjdGlvbi4gQWxsb3dlZCB2YWx1ZXMgYXJlIGx0ciAoTGVmdC1Uby1SaWdodCkgb3IgcnRsXG4oUmlnaHQtVG8tTGVmdCkuXG4tfVxuZGlyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRpciA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiZGlyXCJcblxuXG57LXwgRGVmaW5lcyB3aGV0aGVyIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkLiAtfVxuZHJhZ2dhYmxlIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyYWdnYWJsZSA9XG4gIGF0dHJpYnV0ZSBcImRyYWdnYWJsZVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGFjY2VwdCB0aGUgZHJvcHBpbmcgb2YgY29udGVudCBvbiBpdC4gLX1cbmRyb3B6b25lIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRyb3B6b25lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJkcm9wem9uZVwiXG5cblxuey18LX1cbml0ZW1wcm9wIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbml0ZW1wcm9wID1cbiAgYXR0cmlidXRlIFwiaXRlbXByb3BcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBsYW5ndWFnZSB1c2VkIGluIHRoZSBlbGVtZW50LiAtfVxubGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJsYW5nXCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgc3BlbGwgY2hlY2tpbmcgaXMgYWxsb3dlZCBmb3IgdGhlIGVsZW1lbnQuIC19XG5zcGVsbGNoZWNrIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5zcGVsbGNoZWNrID1cbiAgYm9vbFByb3BlcnR5IFwic3BlbGxjaGVja1wiXG5cblxuey18IE92ZXJyaWRlcyB0aGUgYnJvd3NlcidzIGRlZmF1bHQgdGFiIG9yZGVyIGFuZCBmb2xsb3dzIHRoZSBvbmUgc3BlY2lmaWVkXG5pbnN0ZWFkLlxuLX1cbnRhYmluZGV4IDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnRhYmluZGV4IG4gPVxuICBhdHRyaWJ1dGUgXCJ0YWJJbmRleFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gRU1CRURERUQgQ09OVEVOVFxuXG5cbnstfCBUaGUgVVJMIG9mIHRoZSBlbWJlZGRhYmxlIGNvbnRlbnQuIEZvciBgYXVkaW9gLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsXG5gaW5wdXRgLCBgc2NyaXB0YCwgYHNvdXJjZWAsIGB0cmFja2AsIGFuZCBgdmlkZW9gLlxuLX1cbnNyYyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmMgdXJsID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNcIiB1cmxcblxuXG57LXwgRGVjbGFyZSB0aGUgaGVpZ2h0IG9mIGEgYGNhbnZhc2AsIGBlbWJlZGAsIGBpZnJhbWVgLCBgaW1nYCwgYGlucHV0YCxcbmBvYmplY3RgLCBvciBgdmlkZW9gLlxuLX1cbmhlaWdodCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5oZWlnaHQgbiA9XG4gIGF0dHJpYnV0ZSBcImhlaWdodFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWNsYXJlIHRoZSB3aWR0aCBvZiBhIGBjYW52YXNgLCBgZW1iZWRgLCBgaWZyYW1lYCwgYGltZ2AsIGBpbnB1dGAsXG5gb2JqZWN0YCwgb3IgYHZpZGVvYC5cbi19XG53aWR0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG53aWR0aCBuID1cbiAgYXR0cmlidXRlIFwid2lkdGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQWx0ZXJuYXRpdmUgdGV4dCBpbiBjYXNlIGFuIGltYWdlIGNhbid0IGJlIGRpc3BsYXllZC4gV29ya3Mgd2l0aCBgaW1nYCxcbmBhcmVhYCwgYW5kIGBpbnB1dGAuXG4tfVxuYWx0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFsdCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWx0XCJcblxuXG5cbi0tIEFVRElPIGFuZCBWSURFT1xuXG5cbnstfCBUaGUgYGF1ZGlvYCBvciBgdmlkZW9gIHNob3VsZCBwbGF5IGFzIHNvb24gYXMgcG9zc2libGUuIC19XG5hdXRvcGxheSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b3BsYXkgPVxuICBib29sUHJvcGVydHkgXCJhdXRvcGxheVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBzaG93IHBsYXliYWNrIGNvbnRyb2xzIGZvciB0aGUgYGF1ZGlvYFxub3IgYHZpZGVvYC5cbi19XG5jb250cm9scyA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuY29udHJvbHMgPVxuICBib29sUHJvcGVydHkgXCJjb250cm9sc1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSBgYXVkaW9gIG9yIGB2aWRlb2Agc2hvdWxkIHN0YXJ0IHBsYXlpbmcgZnJvbSB0aGVcbnN0YXJ0IHdoZW4gaXQncyBmaW5pc2hlZC5cbi19XG5sb29wIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5sb29wID1cbiAgYm9vbFByb3BlcnR5IFwibG9vcFwiXG5cblxuey18IENvbnRyb2wgaG93IG11Y2ggb2YgYW4gYGF1ZGlvYCBvciBgdmlkZW9gIHJlc291cmNlIHNob3VsZCBiZSBwcmVsb2FkZWQuIC19XG5wcmVsb2FkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnByZWxvYWQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInByZWxvYWRcIlxuXG5cbnstfCBBIFVSTCBpbmRpY2F0aW5nIGEgcG9zdGVyIGZyYW1lIHRvIHNob3cgdW50aWwgdGhlIHVzZXIgcGxheXMgb3Igc2Vla3MgdGhlXG5gdmlkZW9gLlxuLX1cbnBvc3RlciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wb3N0ZXIgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBvc3RlclwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBgdHJhY2tgIHNob3VsZCBiZSBlbmFibGVkIHVubGVzcyB0aGUgdXNlcidzIHByZWZlcmVuY2VzXG5pbmRpY2F0ZSBzb21ldGhpbmcgZGlmZmVyZW50LlxuLX1cbmRlZmF1bHQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmRlZmF1bHQgPVxuICBib29sUHJvcGVydHkgXCJkZWZhdWx0XCJcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBraW5kIG9mIHRleHQgYHRyYWNrYC4gLX1cbmtpbmQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xua2luZCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwia2luZFwiXG5cblxuey0tIFRPRE86IG1heWJlIHJlaW50cm9kdWNlIG9uY2UgdGhlcmUncyBhIGJldHRlciB3YXkgdG8gZGlzYW1iaWd1YXRlIGltcG9ydHNcbnstfCBTcGVjaWZpZXMgYSB1c2VyLXJlYWRhYmxlIHRpdGxlIG9mIHRoZSB0ZXh0IGB0cmFja2AuIC19XG5sYWJlbCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5sYWJlbCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibGFiZWxcIlxuLS19XG5cbnstfCBBIHR3byBsZXR0ZXIgbGFuZ3VhZ2UgY29kZSBpbmRpY2F0aW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgYHRyYWNrYCB0ZXh0IGRhdGEuXG4tfVxuc3JjbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zcmNsYW5nID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNsYW5nXCJcblxuXG5cbi0tIElGUkFNRVNcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBzZWN1cml0eSByZXN0cmljdGlvbnMgeW91J2QgbGlrZSB0byBsaWZ0IGZvciBhblxuYGlmcmFtZWAuXG4tfVxuc2FuZGJveCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zYW5kYm94ID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzYW5kYm94XCJcblxuXG57LXwgQW4gSFRNTCBkb2N1bWVudCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGFzIHRoZSBib2R5IG9mIGFuIGBpZnJhbWVgLiBJdCB3aWxsXG5vdmVycmlkZSB0aGUgY29udGVudCBvZiB0aGUgYHNyY2AgYXR0cmlidXRlIGlmIGl0IGhhcyBiZWVuIHNwZWNpZmllZC5cbi19XG5zcmNkb2MgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3JjZG9jID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzcmNkb2NcIlxuXG5cblxuLS0gSU5QVVRcblxuXG57LXwgRGVmaW5lcyB0aGUgdHlwZSBvZiBhIGBidXR0b25gLCBgY2hlY2tib3hgLCBgaW5wdXRgLCBgZW1iZWRgLCBgbWVudWAsXG5gb2JqZWN0YCwgYHNjcmlwdGAsIGBzb3VyY2VgLCBvciBgc3R5bGVgLlxuLX1cbnR5cGVfIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnR5cGVfID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ0eXBlXCJcblxuXG57LXwgVGhlIHZhbHVlIHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGluIGEgYGJ1dHRvbmAsIGBvcHRpb25gLFxuYGlucHV0YCwgYGxpYCwgYG1ldGVyYCwgYHByb2dyZXNzYCwgb3IgYHBhcmFtYC5cbi19XG52YWx1ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwidmFsdWVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9mIHR5cGUgY2hlY2tib3ggaXMgY2hlY2tlZC4gLX1cbmNoZWNrZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmNoZWNrZWQgPVxuICBib29sUHJvcGVydHkgXCJjaGVja2VkXCJcblxuXG57LXwgUHJvdmlkZXMgYSBoaW50IHRvIHRoZSB1c2VyIG9mIHdoYXQgY2FuIGJlIGVudGVyZWQgaW50byBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbnBsYWNlaG9sZGVyIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBsYWNlaG9sZGVyID1cbiAgc3RyaW5nUHJvcGVydHkgXCJwbGFjZWhvbGRlclwiXG5cblxuey18IERlZmluZXMgd2hpY2ggYG9wdGlvbmAgd2lsbCBiZSBzZWxlY3RlZCBvbiBwYWdlIGxvYWQuIC19XG5zZWxlY3RlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuc2VsZWN0ZWQgPVxuICBib29sUHJvcGVydHkgXCJzZWxlY3RlZFwiXG5cblxuXG4tLSBJTlBVVCBIRUxQRVJTXG5cblxuey18IExpc3Qgb2YgdHlwZXMgdGhlIHNlcnZlciBhY2NlcHRzLCB0eXBpY2FsbHkgYSBmaWxlIHR5cGUuXG5Gb3IgYGZvcm1gIGFuZCBgaW5wdXRgLlxuLX1cbmFjY2VwdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY2NlcHQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFjY2VwdFwiXG5cblxuey18IExpc3Qgb2Ygc3VwcG9ydGVkIGNoYXJzZXRzIGluIGEgYGZvcm1gLlxuLX1cbmFjY2VwdENoYXJzZXQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWNjZXB0Q2hhcnNldCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiYWNjZXB0Q2hhcnNldFwiXG5cblxuey18IFRoZSBVUkkgb2YgYSBwcm9ncmFtIHRoYXQgcHJvY2Vzc2VzIHRoZSBpbmZvcm1hdGlvbiBzdWJtaXR0ZWQgdmlhIGEgYGZvcm1gLlxuLX1cbmFjdGlvbiA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5hY3Rpb24gdXJpID1cbiAgc3RyaW5nUHJvcGVydHkgXCJhY3Rpb25cIiB1cmlcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgYSBgZm9ybWAgb3IgYW4gYGlucHV0YCBjYW4gaGF2ZSB0aGVpciB2YWx1ZXMgYXV0b21hdGljYWxseVxuY29tcGxldGVkIGJ5IHRoZSBicm93c2VyLlxuLX1cbmF1dG9jb21wbGV0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYXV0b2NvbXBsZXRlIGJvb2wgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImF1dG9jb21wbGV0ZVwiIChpZiBib29sIHRoZW4gXCJvblwiIGVsc2UgXCJvZmZcIilcblxuXG57LXwgVGhlIGVsZW1lbnQgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZCBhZnRlciB0aGUgcGFnZSBsb2FkZWQuXG5Gb3IgYGJ1dHRvbmAsIGBpbnB1dGAsIGBzZWxlY3RgLCBhbmQgYHRleHRhcmVhYC5cbi19XG5hdXRvZm9jdXMgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmF1dG9mb2N1cyA9XG4gIGJvb2xQcm9wZXJ0eSBcImF1dG9mb2N1c1wiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoZSB1c2VyIGNhbiBpbnRlcmFjdCB3aXRoIGEgYGJ1dHRvbmAsIGBmaWVsZHNldGAsXG5gaW5wdXRgLCBgb3B0Z3JvdXBgLCBgb3B0aW9uYCwgYHNlbGVjdGAgb3IgYHRleHRhcmVhYC5cbi19XG5kaXNhYmxlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuZGlzYWJsZWQgPVxuICBib29sUHJvcGVydHkgXCJkaXNhYmxlZFwiXG5cblxuey18IEhvdyBgZm9ybWAgZGF0YSBzaG91bGQgYmUgZW5jb2RlZCB3aGVuIHN1Ym1pdHRlZCB3aXRoIHRoZSBQT1NUIG1ldGhvZC5cbk9wdGlvbnMgaW5jbHVkZTogYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkLCBtdWx0aXBhcnQvZm9ybS1kYXRhLCBhbmRcbnRleHQvcGxhaW4uXG4tfVxuZW5jdHlwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5lbmN0eXBlID1cbiAgc3RyaW5nUHJvcGVydHkgXCJlbmN0eXBlXCJcblxuXG57LXwgQXNzb2NpYXRlcyBhbiBgaW5wdXRgIHdpdGggYSBgZGF0YWxpc3RgIHRhZy4gVGhlIGRhdGFsaXN0IGdpdmVzIHNvbWVcbnByZS1kZWZpbmVkIG9wdGlvbnMgdG8gc3VnZ2VzdCB0byB0aGUgdXNlciBhcyB0aGV5IGludGVyYWN0IHdpdGggYW4gaW5wdXQuXG5UaGUgdmFsdWUgb2YgdGhlIGxpc3QgYXR0cmlidXRlIG11c3QgbWF0Y2ggdGhlIGlkIG9mIGEgYGRhdGFsaXN0YCBub2RlLlxuRm9yIGBpbnB1dGAuXG4tfVxubGlzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5saXN0ID1cbiAgYXR0cmlidXRlIFwibGlzdFwiXG5cblxuey18IERlZmluZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYWxsb3dlZCBpbiBhbiBgaW5wdXRgIG9yXG5gdGV4dGFyZWFgLlxuLX1cbm1pbmxlbmd0aCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5taW5sZW5ndGggbiA9XG4gIGF0dHJpYnV0ZSBcIm1pbkxlbmd0aFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGFsbG93ZWQgaW4gYW4gYGlucHV0YCBvclxuYHRleHRhcmVhYC5cbi19XG5tYXhsZW5ndGggOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xubWF4bGVuZ3RoIG4gPVxuICBhdHRyaWJ1dGUgXCJtYXhsZW5ndGhcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgRGVmaW5lcyB3aGljaCBIVFRQIG1ldGhvZCB0byB1c2Ugd2hlbiBzdWJtaXR0aW5nIGEgYGZvcm1gLiBDYW4gYmUgR0VUXG4oZGVmYXVsdCkgb3IgUE9TVC5cbi19XG5tZXRob2QgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWV0aG9kID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtZXRob2RcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIGVudGVyZWQgaW4gYW4gYGlucHV0YCBvZiB0eXBlXG5lbWFpbCBvciBmaWxlLiBDYW4gYWxzbyBpbmRpY2F0ZSB0aGF0IHlvdSBjYW4gYHNlbGVjdGAgbWFueSBvcHRpb25zLlxuLX1cbm11bHRpcGxlIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5tdWx0aXBsZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm11bHRpcGxlXCJcblxuXG57LXwgTmFtZSBvZiB0aGUgZWxlbWVudC4gRm9yIGV4YW1wbGUgdXNlZCBieSB0aGUgc2VydmVyIHRvIGlkZW50aWZ5IHRoZSBmaWVsZHNcbmluIGZvcm0gc3VibWl0cy4gRm9yIGBidXR0b25gLCBgZm9ybWAsIGBmaWVsZHNldGAsIGBpZnJhbWVgLCBgaW5wdXRgLFxuYG9iamVjdGAsIGBvdXRwdXRgLCBgc2VsZWN0YCwgYHRleHRhcmVhYCwgYG1hcGAsIGBtZXRhYCwgYW5kIGBwYXJhbWAuXG4tfVxubmFtZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5uYW1lID1cbiAgc3RyaW5nUHJvcGVydHkgXCJuYW1lXCJcblxuXG57LXwgVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgYSBgZm9ybWAgc2hvdWxkbid0IGJlIHZhbGlkYXRlZCB3aGVuXG5zdWJtaXR0ZWQuXG4tfVxubm92YWxpZGF0ZSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xubm92YWxpZGF0ZSA9XG4gIGJvb2xQcm9wZXJ0eSBcIm5vVmFsaWRhdGVcIlxuXG5cbnstfCBEZWZpbmVzIGEgcmVndWxhciBleHByZXNzaW9uIHdoaWNoIGFuIGBpbnB1dGAncyB2YWx1ZSB3aWxsIGJlIHZhbGlkYXRlZFxuYWdhaW5zdC5cbi19XG5wYXR0ZXJuIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBhdHRlcm4gPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBhdHRlcm5cIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciBhbiBgaW5wdXRgIG9yIGB0ZXh0YXJlYWAgY2FuIGJlIGVkaXRlZC4gLX1cbnJlYWRvbmx5IDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZWFkb25seSA9XG4gIGJvb2xQcm9wZXJ0eSBcInJlYWRPbmx5XCJcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBlbGVtZW50IGlzIHJlcXVpcmVkIHRvIGZpbGwgb3V0IG9yIG5vdC5cbkZvciBgaW5wdXRgLCBgc2VsZWN0YCwgYW5kIGB0ZXh0YXJlYWAuXG4tfVxucmVxdWlyZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnJlcXVpcmVkID1cbiAgYm9vbFByb3BlcnR5IFwicmVxdWlyZWRcIlxuXG5cbnstfCBGb3IgYGlucHV0YCBzcGVjaWZpZXMgdGhlIHdpZHRoIG9mIGFuIGlucHV0IGluIGNoYXJhY3RlcnMuXG5cbkZvciBgc2VsZWN0YCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIG9wdGlvbnMgaW4gYSBkcm9wLWRvd24gbGlzdC5cbi19XG5zaXplIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNpemUgbiA9XG4gIGF0dHJpYnV0ZSBcInNpemVcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgVGhlIGVsZW1lbnQgSUQgZGVzY3JpYmVkIGJ5IHRoaXMgYGxhYmVsYCBvciB0aGUgZWxlbWVudCBJRHMgdGhhdCBhcmUgdXNlZFxuZm9yIGFuIGBvdXRwdXRgLlxuLX1cbmZvciA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3IgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImh0bWxGb3JcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGVsZW1lbnQgSUQgb2YgdGhlIGBmb3JtYCB0aGF0IG93bnMgdGhpcyBwYXJ0aWN1bGFyIGBidXR0b25gLFxuYGZpZWxkc2V0YCwgYGlucHV0YCwgYGxhYmVsYCwgYG1ldGVyYCwgYG9iamVjdGAsIGBvdXRwdXRgLCBgcHJvZ3Jlc3NgLFxuYHNlbGVjdGAsIG9yIGB0ZXh0YXJlYWAuXG4tfVxuZm9ybSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5mb3JtID1cbiAgYXR0cmlidXRlIFwiZm9ybVwiXG5cblxuXG4tLSBSQU5HRVNcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtYXhpbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtYXggdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCwgYG1ldGVyYCwgYW5kIGBwcm9ncmVzc2AuXG4tfVxubWF4IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbm1heCA9XG4gIHN0cmluZ1Byb3BlcnR5IFwibWF4XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBtaW5pbXVtIHZhbHVlIGFsbG93ZWQuIFdoZW4gdXNpbmcgYW4gaW5wdXQgb2YgdHlwZSBudW1iZXIgb3JcbmRhdGUsIHRoZSBtaW4gdmFsdWUgbXVzdCBiZSBhIG51bWJlciBvciBkYXRlLiBGb3IgYGlucHV0YCBhbmQgYG1ldGVyYC5cbi19XG5taW4gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWluID1cbiAgc3RyaW5nUHJvcGVydHkgXCJtaW5cIlxuXG5cbnstfCBBZGQgYSBzdGVwIHNpemUgdG8gYW4gYGlucHV0YC4gVXNlIGBzdGVwIFwiYW55XCJgIHRvIGFsbG93IGFueSBmbG9hdGluZy1wb2ludFxubnVtYmVyIHRvIGJlIHVzZWQgaW4gdGhlIGlucHV0LlxuLX1cbnN0ZXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc3RlcCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGVwXCIgblxuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIGEgYHRleHRhcmVhYC4gLX1cbmNvbHMgOiBJbnQgLT4gQXR0cmlidXRlIG1zZ1xuY29scyBuID1cbiAgYXR0cmlidXRlIFwiY29sc1wiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cbnstfCBEZWZpbmVzIHRoZSBudW1iZXIgb2Ygcm93cyBpbiBhIGB0ZXh0YXJlYWAuIC19XG5yb3dzIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnJvd3MgbiA9XG4gIGF0dHJpYnV0ZSBcInJvd3NcIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRleHQgc2hvdWxkIGJlIHdyYXBwZWQgaW4gYSBgdGV4dGFyZWFgLiBQb3NzaWJsZVxudmFsdWVzIGFyZSBcImhhcmRcIiBhbmQgXCJzb2Z0XCIuXG4tfVxud3JhcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG53cmFwID1cbiAgc3RyaW5nUHJvcGVydHkgXCJ3cmFwXCJcblxuXG5cbi0tIE1BUFNcblxuXG57LXwgV2hlbiBhbiBgaW1nYCBpcyBhIGRlc2NlbmRhbnQgb2YgYW4gYGFgIHRhZywgdGhlIGBpc21hcGAgYXR0cmlidXRlXG5pbmRpY2F0ZXMgdGhhdCB0aGUgY2xpY2sgbG9jYXRpb24gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBwYXJlbnQgYGFgJ3MgaHJlZiBhc1xuYSBxdWVyeSBzdHJpbmcuXG4tfVxuaXNtYXAgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbmlzbWFwID1cbiAgYm9vbFByb3BlcnR5IFwiaXNNYXBcIlxuXG5cbnstfCBTcGVjaWZ5IHRoZSBoYXNoIG5hbWUgcmVmZXJlbmNlIG9mIGEgYG1hcGAgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgYW4gYGltZ2Bcbm9yIGBvYmplY3RgLiBBIGhhc2ggbmFtZSByZWZlcmVuY2UgaXMgYSBoYXNoIHN5bWJvbCBmb2xsb3dlZCBieSB0aGUgZWxlbWVudCdzIG5hbWUgb3IgaWQuXG5FLmcuIGBcIiNwbGFuZXQtbWFwXCJgLlxuLX1cbnVzZW1hcCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG51c2VtYXAgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInVzZU1hcFwiXG5cblxuey18IERlY2xhcmUgdGhlIHNoYXBlIG9mIHRoZSBjbGlja2FibGUgYXJlYSBpbiBhbiBgYWAgb3IgYGFyZWFgLiBWYWxpZCB2YWx1ZXNcbmluY2x1ZGU6IGRlZmF1bHQsIHJlY3QsIGNpcmNsZSwgcG9seS4gVGhpcyBhdHRyaWJ1dGUgY2FuIGJlIHBhaXJlZCB3aXRoXG5gY29vcmRzYCB0byBjcmVhdGUgbW9yZSBwYXJ0aWN1bGFyIHNoYXBlcy5cbi19XG5zaGFwZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zaGFwZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2hhcGVcIlxuXG5cbnstfCBBIHNldCBvZiB2YWx1ZXMgc3BlY2lmeWluZyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhvdC1zcG90IHJlZ2lvbiBpbiBhblxuYGFyZWFgLiBOZWVkcyB0byBiZSBwYWlyZWQgd2l0aCBhIGBzaGFwZWAgYXR0cmlidXRlIHRvIGJlIG1lYW5pbmdmdWwuXG4tfVxuY29vcmRzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmNvb3JkcyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY29vcmRzXCJcblxuXG5cbi0tIFJFQUwgU1RVRkZcblxuXG57LXwgU3BlY2lmaWVzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiBhIGBjYXB0aW9uYCwgYGNvbGAsIGBjb2xncm91cGAsXG5gaHJgLCBgaWZyYW1lYCwgYGltZ2AsIGB0YWJsZWAsIGB0Ym9keWAsICBgdGRgLCAgYHRmb290YCwgYHRoYCwgYHRoZWFkYCwgb3JcbmB0cmAuXG4tfVxuYWxpZ24gOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuYWxpZ24gPVxuICBzdHJpbmdQcm9wZXJ0eSBcImFsaWduXCJcblxuXG57LXwgQ29udGFpbnMgYSBVUkkgd2hpY2ggcG9pbnRzIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHF1b3RlIG9yIGNoYW5nZSBpbiBhXG5gYmxvY2txdW90ZWAsIGBkZWxgLCBgaW5zYCwgb3IgYHFgLlxuLX1cbmNpdGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuY2l0ZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiY2l0ZVwiXG5cblxuXG5cbi0tIExJTktTIEFORCBBUkVBU1xuXG5cbnstfCBUaGUgVVJMIG9mIGEgbGlua2VkIHJlc291cmNlLCBzdWNoIGFzIGBhYCwgYGFyZWFgLCBgYmFzZWAsIG9yIGBsaW5rYC4gLX1cbmhyZWYgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaHJlZiB1cmwgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImhyZWZcIiB1cmxcblxuXG57LXwgU3BlY2lmeSB3aGVyZSB0aGUgcmVzdWx0cyBvZiBjbGlja2luZyBhbiBgYWAsIGBhcmVhYCwgYGJhc2VgLCBvciBgZm9ybWBcbnNob3VsZCBhcHBlYXIuIFBvc3NpYmxlIHNwZWNpYWwgdmFsdWVzIGluY2x1ZGU6XG5cbiAgKiBfYmxhbmsgJm1kYXNoOyBhIG5ldyB3aW5kb3cgb3IgdGFiXG4gICogX3NlbGYgJm1kYXNoOyB0aGUgc2FtZSBmcmFtZSAodGhpcyBpcyBkZWZhdWx0KVxuICAqIF9wYXJlbnQgJm1kYXNoOyB0aGUgcGFyZW50IGZyYW1lXG4gICogX3RvcCAmbWRhc2g7IHRoZSBmdWxsIGJvZHkgb2YgdGhlIHdpbmRvd1xuXG5Zb3UgY2FuIGFsc28gZ2l2ZSB0aGUgbmFtZSBvZiBhbnkgYGZyYW1lYCB5b3UgaGF2ZSBjcmVhdGVkLlxuLX1cbnRhcmdldCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG50YXJnZXQgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInRhcmdldFwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IGNsaWNraW5nIGFuIGBhYCBhbmQgYGFyZWFgIHdpbGwgZG93bmxvYWQgdGhlIHJlc291cmNlXG5kaXJlY3RseS4gVGhlIGBTdHJpbmdgIGFyZ3VtZW50IGRldGVybWlucyB0aGUgbmFtZSBvZiB0aGUgZG93bmxvYWRlZCBmaWxlLlxuU2F5IHRoZSBmaWxlIHlvdSBhcmUgc2VydmluZyBpcyBuYW1lZCBgaGF0cy5qc29uYC5cblxuICAgIGRvd25sb2FkIFwiXCIgICAgICAgICAgICAgICAtLSBoYXRzLmpzb25cbiAgICBkb3dubG9hZCBcIm15LWhhdHMuanNvblwiICAgLS0gbXktaGF0cy5qc29uXG4gICAgZG93bmxvYWQgXCJzbmFrZXMuanNvblwiICAgIC0tIHNuYWtlcy5qc29uXG5cblRoZSBlbXB0eSBgU3RyaW5nYCBzYXlzIHRvIGp1c3QgbmFtZSBpdCB3aGF0ZXZlciBpdCB3YXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXG4tfVxuZG93bmxvYWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZG93bmxvYWQgZmlsZU5hbWUgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCIgZmlsZU5hbWVcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgY2xpY2tpbmcgYW4gYGFgIGFuZCBgYXJlYWAgd2lsbCBkb3dubG9hZCB0aGUgcmVzb3VyY2VcbmRpcmVjdGx5LCBhbmQgdGhhdCB0aGUgZG93bmxvYWRlZCByZXNvdXJjZSB3aXRoIGhhdmUgdGhlIGdpdmVuIGZpbGVuYW1lLlxuU28gYGRvd25sb2FkQXMgXCJoYXRzLmpzb25cImAgbWVhbnMgdGhlIHBlcnNvbiBnZXRzIGEgZmlsZSBuYW1lZCBgaGF0cy5qc29uYC5cbi19XG5kb3dubG9hZEFzIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmRvd25sb2FkQXMgPVxuICBzdHJpbmdQcm9wZXJ0eSBcImRvd25sb2FkXCJcblxuXG57LXwgVHdvLWxldHRlciBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2Ugb2YgYW4gYGFgLCBgYXJlYWAsIG9yIGBsaW5rYC5cbi19XG5ocmVmbGFuZyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5ocmVmbGFuZyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaHJlZmxhbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgYSBoaW50IG9mIHRoZSB0YXJnZXQgbWVkaWEgb2YgYSBgYWAsIGBhcmVhYCwgYGxpbmtgLCBgc291cmNlYCxcbm9yIGBzdHlsZWAuXG4tfVxubWVkaWEgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubWVkaWEgPVxuICBhdHRyaWJ1dGUgXCJtZWRpYVwiXG5cblxuey18IFNwZWNpZnkgYSBVUkwgdG8gc2VuZCBhIHNob3J0IFBPU1QgcmVxdWVzdCB0byB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhblxuYGFgIG9yIGBhcmVhYC4gVXNlZnVsIGZvciBtb25pdG9yaW5nIGFuZCB0cmFja2luZy5cbi19XG5waW5nIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnBpbmcgPVxuICBzdHJpbmdQcm9wZXJ0eSBcInBpbmdcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIHJlbGF0aW9uc2hpcCBvZiB0aGUgdGFyZ2V0IG9iamVjdCB0byB0aGUgbGluayBvYmplY3QuXG5Gb3IgYGFgLCBgYXJlYWAsIGBsaW5rYC5cbi19XG5yZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucmVsID1cbiAgYXR0cmlidXRlIFwicmVsXCJcblxuXG5cbi0tIENSQVpZIFNUVUZGXG5cblxuey18IEluZGljYXRlcyB0aGUgZGF0ZSBhbmQgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnQuXG5Gb3IgYGRlbGAsIGBpbnNgLCBgdGltZWAuXG4tfVxuZGF0ZXRpbWUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuZGF0ZXRpbWUgPVxuICBhdHRyaWJ1dGUgXCJkYXRldGltZVwiXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIHRoaXMgZGF0ZSBhbmQgdGltZSBpcyB0aGUgZGF0ZSBvZiB0aGUgbmVhcmVzdCBgYXJ0aWNsZWBcbmFuY2VzdG9yIGVsZW1lbnQuIEZvciBgdGltZWAuXG4tfVxucHViZGF0ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5wdWJkYXRlID1cbiAgYXR0cmlidXRlIFwicHViZGF0ZVwiXG5cblxuXG4tLSBPUkRFUkVEIExJU1RTXG5cblxuey18IEluZGljYXRlcyB3aGV0aGVyIGFuIG9yZGVyZWQgbGlzdCBgb2xgIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkZXNjZW5kaW5nXG5vcmRlciBpbnN0ZWFkIG9mIGEgYXNjZW5kaW5nLlxuLX1cbnJldmVyc2VkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5yZXZlcnNlZCA9XG4gIGJvb2xQcm9wZXJ0eSBcInJldmVyc2VkXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgZmlyc3QgbnVtYmVyIG9mIGFuIG9yZGVyZWQgbGlzdCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzb21ldGhpbmdcbmJlc2lkZXMgMS5cbi19XG5zdGFydCA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5zdGFydCBuID1cbiAgc3RyaW5nUHJvcGVydHkgXCJzdGFydFwiIChTdHJpbmcuZnJvbUludCBuKVxuXG5cblxuLS0gVEFCTEVTXG5cblxuey18IFRoZSBjb2xzcGFuIGF0dHJpYnV0ZSBkZWZpbmVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGNlbGwgc2hvdWxkIHNwYW4uXG5Gb3IgYHRkYCBhbmQgYHRoYC5cbi19XG5jb2xzcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbmNvbHNwYW4gbiA9XG4gIGF0dHJpYnV0ZSBcImNvbHNwYW5cIiAoU3RyaW5nLmZyb21JbnQgbilcblxuXG57LXwgQSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBlbGVtZW50IElEcyBpbmRpY2F0aW5nIHdoaWNoIGB0aGAgZWxlbWVudHMgYXJlXG5oZWFkZXJzIGZvciB0aGlzIGNlbGwuIEZvciBgdGRgIGFuZCBgdGhgLlxuLX1cbmhlYWRlcnMgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaGVhZGVycyA9XG4gIHN0cmluZ1Byb3BlcnR5IFwiaGVhZGVyc1wiXG5cblxuey18IERlZmluZXMgdGhlIG51bWJlciBvZiByb3dzIGEgdGFibGUgY2VsbCBzaG91bGQgc3BhbiBvdmVyLlxuRm9yIGB0ZGAgYW5kIGB0aGAuXG4tfVxucm93c3BhbiA6IEludCAtPiBBdHRyaWJ1dGUgbXNnXG5yb3dzcGFuIG4gPVxuICBhdHRyaWJ1dGUgXCJyb3dzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG5cblxuey18IFNwZWNpZmllcyB0aGUgc2NvcGUgb2YgYSBoZWFkZXIgY2VsbCBgdGhgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBjb2wsIHJvdyxcbmNvbGdyb3VwLCByb3dncm91cC5cbi19XG5zY29wZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5zY29wZSA9XG4gIHN0cmluZ1Byb3BlcnR5IFwic2NvcGVcIlxuXG5cbnstfCBTcGVjaWZpZXMgdGhlIFVSTCBvZiB0aGUgY2FjaGUgbWFuaWZlc3QgZm9yIGFuIGBodG1sYCB0YWcuIC19XG5tYW5pZmVzdCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5tYW5pZmVzdCA9XG4gIGF0dHJpYnV0ZSBcIm1hbmlmZXN0XCJcblxuXG57LS0gVE9ETzogbWF5YmUgcmVpbnRyb2R1Y2Ugb25jZSB0aGVyZSdzIGEgYmV0dGVyIHdheSB0byBkaXNhbWJpZ3VhdGUgaW1wb3J0c1xuey18IFRoZSBudW1iZXIgb2YgY29sdW1ucyBhIGBjb2xgIG9yIGBjb2xncm91cGAgc2hvdWxkIHNwYW4uIC19XG5zcGFuIDogSW50IC0+IEF0dHJpYnV0ZSBtc2dcbnNwYW4gbiA9XG4gICAgc3RyaW5nUHJvcGVydHkgXCJzcGFuXCIgKFN0cmluZy5mcm9tSW50IG4pXG4tLX1cbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sIGV4cG9zaW5nXG4gICggSHRtbCwgQXR0cmlidXRlXG4gICwgdGV4dCwgbm9kZSwgbWFwXG4gICwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxuICAsIGRpdiwgcCwgaHIsIHByZSwgYmxvY2txdW90ZVxuICAsIHNwYW4sIGEsIGNvZGUsIGVtLCBzdHJvbmcsIGksIGIsIHUsIHN1Yiwgc3VwLCBiclxuICAsIG9sLCB1bCwgbGksIGRsLCBkdCwgZGRcbiAgLCBpbWcsIGlmcmFtZSwgY2FudmFzLCBtYXRoXG4gICwgZm9ybSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCwgb3B0aW9uXG4gICwgc2VjdGlvbiwgbmF2LCBhcnRpY2xlLCBhc2lkZSwgaGVhZGVyLCBmb290ZXIsIGFkZHJlc3MsIG1haW5fXG4gICwgZmlndXJlLCBmaWdjYXB0aW9uXG4gICwgdGFibGUsIGNhcHRpb24sIGNvbGdyb3VwLCBjb2wsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRyLCB0ZCwgdGhcbiAgLCBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgZGF0YWxpc3QsIG9wdGdyb3VwLCBvdXRwdXQsIHByb2dyZXNzLCBtZXRlclxuICAsIGF1ZGlvLCB2aWRlbywgc291cmNlLCB0cmFja1xuICAsIGVtYmVkLCBvYmplY3QsIHBhcmFtXG4gICwgaW5zLCBkZWxcbiAgLCBzbWFsbCwgY2l0ZSwgZGZuLCBhYmJyLCB0aW1lLCB2YXIsIHNhbXAsIGtiZCwgcywgcVxuICAsIG1hcmssIHJ1YnksIHJ0LCBycCwgYmRpLCBiZG8sIHdiclxuICAsIGRldGFpbHMsIHN1bW1hcnksIG1lbnVpdGVtLCBtZW51XG4gIClcblxuey18IFRoaXMgZmlsZSBpcyBvcmdhbml6ZWQgcm91Z2hseSBpbiBvcmRlciBvZiBwb3B1bGFyaXR5LiBUaGUgdGFncyB3aGljaCB5b3UnZFxuZXhwZWN0IHRvIHVzZSBmcmVxdWVudGx5IHdpbGwgYmUgY2xvc2VyIHRvIHRoZSB0b3AuXG5cbkBkb2NzIEh0bWwsIEF0dHJpYnV0ZSwgdGV4dCwgbm9kZSwgbWFwXG5cbiMjIEhlYWRlcnNcbkBkb2NzIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcblxuIyMgR3JvdXBpbmcgQ29udGVudFxuQGRvY3MgZGl2LCBwLCBociwgcHJlLCBibG9ja3F1b3RlXG5cbiMjIFRleHRcbkBkb2NzIHNwYW4sIGEsIGNvZGUsIGVtLCBzdHJvbmcsIGksIGIsIHUsIHN1Yiwgc3VwLCBiclxuXG4jIyBMaXN0c1xuQGRvY3Mgb2wsIHVsLCBsaSwgZGwsIGR0LCBkZFxuXG4jIyBFbWJlZGRlZCBDb250ZW50XG5AZG9jcyBpbWcsIGlmcmFtZSwgY2FudmFzLCBtYXRoXG5cbiMjIElucHV0c1xuQGRvY3MgZm9ybSwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24sIHNlbGVjdCwgb3B0aW9uXG5cbiMjIFNlY3Rpb25zXG5AZG9jcyBzZWN0aW9uLCBuYXYsIGFydGljbGUsIGFzaWRlLCBoZWFkZXIsIGZvb3RlciwgYWRkcmVzcywgbWFpbl9cblxuIyMgRmlndXJlc1xuQGRvY3MgZmlndXJlLCBmaWdjYXB0aW9uXG5cbiMjIFRhYmxlc1xuQGRvY3MgdGFibGUsIGNhcHRpb24sIGNvbGdyb3VwLCBjb2wsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRyLCB0ZCwgdGhcblxuIyMgTGVzcyBDb21tb24gSW5wdXRzXG5AZG9jcyBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgZGF0YWxpc3QsIG9wdGdyb3VwLCBvdXRwdXQsIHByb2dyZXNzLCBtZXRlclxuXG4jIyBBdWRpbyBhbmQgVmlkZW9cbkBkb2NzIGF1ZGlvLCB2aWRlbywgc291cmNlLCB0cmFja1xuXG4jIyBFbWJlZGRlZCBPYmplY3RzXG5AZG9jcyBlbWJlZCwgb2JqZWN0LCBwYXJhbVxuXG4jIyBUZXh0IEVkaXRzXG5AZG9jcyBpbnMsIGRlbFxuXG4jIyBTZW1hbnRpYyBUZXh0XG5AZG9jcyBzbWFsbCwgY2l0ZSwgZGZuLCBhYmJyLCB0aW1lLCB2YXIsIHNhbXAsIGtiZCwgcywgcVxuXG4jIyBMZXNzIENvbW1vbiBUZXh0IFRhZ3NcbkBkb2NzIG1hcmssIHJ1YnksIHJ0LCBycCwgYmRpLCBiZG8sIHdiclxuXG4jIEludGVyYWN0aXZlIEVsZW1lbnRzXG5AZG9jcyBkZXRhaWxzLCBzdW1tYXJ5LCBtZW51aXRlbSwgbWVudVxuXG4tfVxuXG5cbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuXG4tLSBDT1JFIFRZUEVTXG5cblxuey18IFRoZSBjb3JlIGJ1aWxkaW5nIGJsb2NrIHVzZWQgdG8gYnVpbGQgdXAgSFRNTC4gSGVyZSB3ZSBjcmVhdGUgYW4gYEh0bWxgXG52YWx1ZSB3aXRoIG5vIGF0dHJpYnV0ZXMgYW5kIG9uZSBjaGlsZDpcblxuICAgIGhlbGxvIDogSHRtbCBtc2dcbiAgICBoZWxsbyA9XG4gICAgICBkaXYgW10gWyB0ZXh0IFwiSGVsbG8hXCIgXVxuLX1cbnR5cGUgYWxpYXMgSHRtbCBtc2cgPSBWaXJ0dWFsRG9tLk5vZGUgbXNnXG5cblxuey18IFNldCBhdHRyaWJ1dGVzIG9uIHlvdXIgYEh0bWxgLiBMZWFybiBtb3JlIGluIHRoZVxuW2BIdG1sLkF0dHJpYnV0ZXNgXShIdG1sLUF0dHJpYnV0ZXMpIG1vZHVsZS5cbi19XG50eXBlIGFsaWFzIEF0dHJpYnV0ZSBtc2cgPSBWaXJ0dWFsRG9tLkF0dHJpYnV0ZSBtc2dcblxuXG5cbi0tIFBSSU1JVElWRVNcblxuXG57LXwgR2VuZXJhbCB3YXkgdG8gY3JlYXRlIEhUTUwgbm9kZXMuIEl0IGlzIHVzZWQgdG8gZGVmaW5lIGFsbCBvZiB0aGUgaGVscGVyXG5mdW5jdGlvbnMgaW4gdGhpcyBsaWJyYXJ5LlxuXG4gICAgZGl2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbiAgICBkaXYgYXR0cmlidXRlcyBjaGlsZHJlbiA9XG4gICAgICAgIG5vZGUgXCJkaXZcIiBhdHRyaWJ1dGVzIGNoaWxkcmVuXG5cbllvdSBjYW4gdXNlIHRoaXMgdG8gY3JlYXRlIGN1c3RvbSBub2RlcyBpZiB5b3UgbmVlZCB0byBjcmVhdGUgc29tZXRoaW5nIHRoYXRcbmlzIG5vdCBjb3ZlcmVkIGJ5IHRoZSBoZWxwZXIgZnVuY3Rpb25zIGluIHRoaXMgbGlicmFyeS5cbi19XG5ub2RlIDogU3RyaW5nIC0+IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5ub2RlID1cbiAgVmlydHVhbERvbS5ub2RlXG5cblxuey18IEp1c3QgcHV0IHBsYWluIHRleHQgaW4gdGhlIERPTS4gSXQgd2lsbCBlc2NhcGUgdGhlIHN0cmluZyBzbyB0aGF0IGl0IGFwcGVhcnNcbmV4YWN0bHkgYXMgeW91IHNwZWNpZnkuXG5cbiAgICB0ZXh0IFwiSGVsbG8gV29ybGQhXCJcbi19XG50ZXh0IDogU3RyaW5nIC0+IEh0bWwgbXNnXG50ZXh0ID1cbiAgVmlydHVhbERvbS50ZXh0XG5cblxuXG4tLSBORVNUSU5HIFZJRVdTXG5cblxuey18IFRyYW5zZm9ybSB0aGUgbWVzc2FnZXMgcHJvZHVjZWQgYnkgc29tZSBgSHRtbGAuIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSxcbndlIGhhdmUgYHZpZXdCdXR0b25gIHRoYXQgcHJvZHVjZXMgYCgpYCBtZXNzYWdlcywgYW5kIHdlIHRyYW5zZm9ybSB0aG9zZSB2YWx1ZXNcbmludG8gYE1zZ2AgdmFsdWVzIGluIGB2aWV3YC5cblxuICAgIHR5cGUgTXNnID0gTGVmdCB8IFJpZ2h0XG5cbiAgICB2aWV3IDogbW9kZWwgLT4gSHRtbCBNc2dcbiAgICB2aWV3IG1vZGVsID1cbiAgICAgIGRpdiBbXVxuICAgICAgICBbIG1hcCAoXFxfIC0+IExlZnQpICh2aWV3QnV0dG9uIFwiTGVmdFwiKVxuICAgICAgICAsIG1hcCAoXFxfIC0+IFJpZ2h0KSAodmlld0J1dHRvbiBcIlJpZ2h0XCIpXG4gICAgICAgIF1cblxuICAgIHZpZXdCdXR0b24gOiBTdHJpbmcgLT4gSHRtbCAoKVxuICAgIHZpZXdCdXR0b24gbmFtZSA9XG4gICAgICBidXR0b24gWyBvbkNsaWNrICgpIF0gWyB0ZXh0IG5hbWUgXVxuXG5JZiB5b3UgYXJlIGdyb3dpbmcgeW91ciBwcm9qZWN0IGFzIHJlY29tbWVuZGVkIGluIFt0aGUgb2ZmaWNpYWxcbmd1aWRlXShodHRwczovL2d1aWRlLmVsbS1sYW5nLm9yZy8pLCB0aGlzIHNob3VsZCBub3QgY29tZSBpbiBoYW5keSBpbiBtb3N0XG5wcm9qZWN0cy4gVXN1YWxseSBpdCBpcyBlYXNpZXIgdG8ganVzdCBwYXNzIHRoaW5ncyBpbiBhcyBhcmd1bWVudHMuXG5cbioqTm90ZToqKiBTb21lIGZvbGtzIGhhdmUgdHJpZWQgdG8gdXNlIHRoaXMgdG8gbWFrZSDigJxjb21wb25lbnRz4oCdIGluIHRoZWlyXG5wcm9qZWN0cywgYnV0IHRoZXkgcnVuIGludG8gdGhlIGZhY3QgdGhhdCBjb21wb25lbnRzIGFyZSBvYmplY3RzLiBCb3RoIGFyZVxubG9jYWwgbXV0YWJsZSBzdGF0ZSB3aXRoIG1ldGhvZHMuIEdyZW4gaXMgbm90IGFuIG9iamVjdC1vcmllbnRlZCBsYW5ndWFnZSwgc29cbnlvdSBydW4gaW50byBhbGwgc29ydHMgb2YgZnJpY3Rpb24gaWYgeW91IHRyeSB0byB1c2UgaXQgbGlrZSBvbmUuIEkgZGVmaW5pdGVseVxucmVjb21tZW5kIGFnYWluc3QgZ29pbmcgZG93biB0aGF0IHBhdGghIEluc3RlYWQsIG1ha2UgdGhlIHNpbXBsZXN0IGZ1bmN0aW9uXG5wb3NzaWJsZSBhbmQgcmVwZWF0LlxuLX1cbm1hcCA6IChhIC0+IG1zZykgLT4gSHRtbCBhIC0+IEh0bWwgbXNnXG5tYXAgPVxuICBWaXJ0dWFsRG9tLm1hcFxuXG5cblxuLS0gU0VDVElPTlNcblxuXG57LXwgRGVmaW5lcyBhIHNlY3Rpb24gaW4gYSBkb2N1bWVudC5cbi19XG5zZWN0aW9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNlY3Rpb24gPVxuICBub2RlIFwic2VjdGlvblwiXG5cblxuey18IERlZmluZXMgYSBzZWN0aW9uIHRoYXQgY29udGFpbnMgb25seSBuYXZpZ2F0aW9uIGxpbmtzLlxuLX1cbm5hdiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5uYXYgPVxuICBub2RlIFwibmF2XCJcblxuXG57LXwgRGVmaW5lcyBzZWxmLWNvbnRhaW5lZCBjb250ZW50IHRoYXQgY291bGQgZXhpc3QgaW5kZXBlbmRlbnRseSBvZiB0aGUgcmVzdFxub2YgdGhlIGNvbnRlbnQuXG4tfVxuYXJ0aWNsZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hcnRpY2xlID1cbiAgbm9kZSBcImFydGljbGVcIlxuXG5cbnstfCBEZWZpbmVzIHNvbWUgY29udGVudCBsb29zZWx5IHJlbGF0ZWQgdG8gdGhlIHBhZ2UgY29udGVudC4gSWYgaXQgaXMgcmVtb3ZlZCxcbnRoZSByZW1haW5pbmcgY29udGVudCBzdGlsbCBtYWtlcyBzZW5zZS5cbi19XG5hc2lkZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5hc2lkZSA9XG4gIG5vZGUgXCJhc2lkZVwiXG5cblxuey18LX1cbmgxIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmgxID1cbiAgbm9kZSBcImgxXCJcblxuXG57LXwtfVxuaDIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDIgPVxuICBub2RlIFwiaDJcIlxuXG5cbnstfC19XG5oMyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oMyA9XG4gIG5vZGUgXCJoM1wiXG5cblxuey18LX1cbmg0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmg0ID1cbiAgbm9kZSBcImg0XCJcblxuXG57LXwtfVxuaDUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaDUgPVxuICBub2RlIFwiaDVcIlxuXG5cbnstfC19XG5oNiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5oNiA9XG4gIG5vZGUgXCJoNlwiXG5cblxuey18IERlZmluZXMgdGhlIGhlYWRlciBvZiBhIHBhZ2Ugb3Igc2VjdGlvbi4gSXQgb2Z0ZW4gY29udGFpbnMgYSBsb2dvLCB0aGVcbnRpdGxlIG9mIHRoZSB3ZWIgc2l0ZSwgYW5kIGEgbmF2aWdhdGlvbmFsIHRhYmxlIG9mIGNvbnRlbnQuXG4tfVxuaGVhZGVyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmhlYWRlciA9XG4gIG5vZGUgXCJoZWFkZXJcIlxuXG5cbnstfCBEZWZpbmVzIHRoZSBmb290ZXIgZm9yIGEgcGFnZSBvciBzZWN0aW9uLiBJdCBvZnRlbiBjb250YWlucyBhIGNvcHlyaWdodFxubm90aWNlLCBzb21lIGxpbmtzIHRvIGxlZ2FsIGluZm9ybWF0aW9uLCBvciBhZGRyZXNzZXMgdG8gZ2l2ZSBmZWVkYmFjay5cbi19XG5mb290ZXIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZm9vdGVyID1cbiAgbm9kZSBcImZvb3RlclwiXG5cblxuey18IERlZmluZXMgYSBzZWN0aW9uIGNvbnRhaW5pbmcgY29udGFjdCBpbmZvcm1hdGlvbi4gLX1cbmFkZHJlc3MgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYWRkcmVzcyA9XG4gIG5vZGUgXCJhZGRyZXNzXCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWFpbiBvciBpbXBvcnRhbnQgY29udGVudCBpbiB0aGUgZG9jdW1lbnQuIFRoZXJlIGlzIG9ubHkgb25lXG5gbWFpbmAgZWxlbWVudCBpbiB0aGUgZG9jdW1lbnQuXG4tfVxubWFpbl8gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWFpbl8gPVxuICBub2RlIFwibWFpblwiXG5cblxuLS0gR1JPVVBJTkcgQ09OVEVOVFxuXG57LXwgRGVmaW5lcyBhIHBvcnRpb24gdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgcGFyYWdyYXBoLiAtfVxucCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wID1cbiAgbm9kZSBcInBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGhlbWF0aWMgYnJlYWsgYmV0d2VlbiBwYXJhZ3JhcGhzIG9mIGEgc2VjdGlvbiBvciBhcnRpY2xlIG9yXG5hbnkgbG9uZ2VyIGNvbnRlbnQuXG4tfVxuaHIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaHIgPVxuICBub2RlIFwiaHJcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCBpdHMgY29udGVudCBpcyBwcmVmb3JtYXR0ZWQgYW5kIHRoYXQgdGhpcyBmb3JtYXQgbXVzdCBiZVxucHJlc2VydmVkLlxuLX1cbnByZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5wcmUgPVxuICBub2RlIFwicHJlXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbnRlbnQgdGhhdCBpcyBxdW90ZWQgZnJvbSBhbm90aGVyIHNvdXJjZS4gLX1cbmJsb2NrcXVvdGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmxvY2txdW90ZSA9XG4gIG5vZGUgXCJibG9ja3F1b3RlXCJcblxuXG57LXwgRGVmaW5lcyBhbiBvcmRlcmVkIGxpc3Qgb2YgaXRlbXMuIC19XG5vbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vbCA9XG4gIG5vZGUgXCJvbFwiXG5cblxuey18IERlZmluZXMgYW4gdW5vcmRlcmVkIGxpc3Qgb2YgaXRlbXMuIC19XG51bCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG51bCA9XG4gIG5vZGUgXCJ1bFwiXG5cblxuey18IERlZmluZXMgYSBpdGVtIG9mIGFuIGVudW1lcmF0aW9uIGxpc3QuIC19XG5saSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5saSA9XG4gIG5vZGUgXCJsaVwiXG5cblxuey18IERlZmluZXMgYSBkZWZpbml0aW9uIGxpc3QsIHRoYXQgaXMsIGEgbGlzdCBvZiB0ZXJtcyBhbmQgdGhlaXIgYXNzb2NpYXRlZFxuZGVmaW5pdGlvbnMuXG4tfVxuZGwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGwgPVxuICBub2RlIFwiZGxcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdGVybSBkZWZpbmVkIGJ5IHRoZSBuZXh0IGBkZGAuIC19XG5kdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kdCA9XG4gIG5vZGUgXCJkdFwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGRlZmluaXRpb24gb2YgdGhlIHRlcm1zIGltbWVkaWF0ZWx5IGxpc3RlZCBiZWZvcmUgaXQuIC19XG5kZCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZCA9XG4gIG5vZGUgXCJkZFwiXG5cblxuey18IFJlcHJlc2VudHMgYSBmaWd1cmUgaWxsdXN0cmF0ZWQgYXMgcGFydCBvZiB0aGUgZG9jdW1lbnQuIC19XG5maWd1cmUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmlndXJlID1cbiAgbm9kZSBcImZpZ3VyZVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGxlZ2VuZCBvZiBhIGZpZ3VyZS4gLX1cbmZpZ2NhcHRpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZmlnY2FwdGlvbiA9XG4gIG5vZGUgXCJmaWdjYXB0aW9uXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGdlbmVyaWMgY29udGFpbmVyIHdpdGggbm8gc3BlY2lhbCBtZWFuaW5nLiAtfVxuZGl2IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmRpdiA9XG4gIG5vZGUgXCJkaXZcIlxuXG5cbi0tIFRFWFQgTEVWRUwgU0VNQU5USUNcblxuey18IFJlcHJlc2VudHMgYSBoeXBlcmxpbmssIGxpbmtpbmcgdG8gYW5vdGhlciByZXNvdXJjZS4gLX1cbmEgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYSA9XG4gIG5vZGUgXCJhXCJcblxuXG57LXwgUmVwcmVzZW50cyBlbXBoYXNpemVkIHRleHQsIGxpa2UgYSBzdHJlc3MgYWNjZW50LiAtfVxuZW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZW0gPVxuICBub2RlIFwiZW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGVzcGVjaWFsbHkgaW1wb3J0YW50IHRleHQuIC19XG5zdHJvbmcgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3Ryb25nID1cbiAgbm9kZSBcInN0cm9uZ1wiXG5cblxuey18IFJlcHJlc2VudHMgYSBzaWRlIGNvbW1lbnQsIHRoYXQgaXMsIHRleHQgbGlrZSBhIGRpc2NsYWltZXIgb3IgYVxuY29weXJpZ2h0LCB3aGljaCBpcyBub3QgZXNzZW50aWFsIHRvIHRoZSBjb21wcmVoZW5zaW9uIG9mIHRoZSBkb2N1bWVudC5cbi19XG5zbWFsbCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zbWFsbCA9XG4gIG5vZGUgXCJzbWFsbFwiXG5cblxuey18IFJlcHJlc2VudHMgY29udGVudCB0aGF0IGlzIG5vIGxvbmdlciBhY2N1cmF0ZSBvciByZWxldmFudC4gLX1cbnMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucyA9XG4gIG5vZGUgXCJzXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgdGl0bGUgb2YgYSB3b3JrLiAtfVxuY2l0ZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jaXRlID1cbiAgbm9kZSBcImNpdGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIGlubGluZSBxdW90YXRpb24uIC19XG5xIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnEgPVxuICBub2RlIFwicVwiXG5cblxuey18IFJlcHJlc2VudHMgYSB0ZXJtIHdob3NlIGRlZmluaXRpb24gaXMgY29udGFpbmVkIGluIGl0cyBuZWFyZXN0IGFuY2VzdG9yXG5jb250ZW50LlxuLX1cbmRmbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZm4gPVxuICBub2RlIFwiZGZuXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBhYmJyZXZpYXRpb24gb3IgYW4gYWNyb255bTsgdGhlIGV4cGFuc2lvbiBvZiB0aGVcbmFiYnJldmlhdGlvbiBjYW4gYmUgcmVwcmVzZW50ZWQgaW4gdGhlIHRpdGxlIGF0dHJpYnV0ZS5cbi19XG5hYmJyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmFiYnIgPVxuICBub2RlIFwiYWJiclwiXG5cblxuey18IFJlcHJlc2VudHMgYSBkYXRlIGFuZCB0aW1lIHZhbHVlOyB0aGUgbWFjaGluZS1yZWFkYWJsZSBlcXVpdmFsZW50IGNhbiBiZVxucmVwcmVzZW50ZWQgaW4gdGhlIGRhdGV0aW1lIGF0dHJpYnV0ZS5cbi19XG50aW1lIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRpbWUgPVxuICBub2RlIFwidGltZVwiXG5cblxuey18IFJlcHJlc2VudHMgY29tcHV0ZXIgY29kZS4gLX1cbmNvZGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY29kZSA9XG4gIG5vZGUgXCJjb2RlXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHZhcmlhYmxlLiBTcGVjaWZpYyBjYXNlcyB3aGVyZSBpdCBzaG91bGQgYmUgdXNlZCBpbmNsdWRlIGFuXG5hY3R1YWwgbWF0aGVtYXRpY2FsIGV4cHJlc3Npb24gb3IgcHJvZ3JhbW1pbmcgY29udGV4dCwgYW4gaWRlbnRpZmllclxucmVwcmVzZW50aW5nIGEgY29uc3RhbnQsIGEgc3ltYm9sIGlkZW50aWZ5aW5nIGEgcGh5c2ljYWwgcXVhbnRpdHksIGEgZnVuY3Rpb25cbnBhcmFtZXRlciwgb3IgYSBtZXJlIHBsYWNlaG9sZGVyIGluIHByb3NlLlxuLX1cbnZhciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG52YXIgPVxuICBub2RlIFwidmFyXCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgb3V0cHV0IG9mIGEgcHJvZ3JhbSBvciBhIGNvbXB1dGVyLiAtfVxuc2FtcCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zYW1wID1cbiAgbm9kZSBcInNhbXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIHVzZXIgaW5wdXQsIG9mdGVuIGZyb20gdGhlIGtleWJvYXJkLCBidXQgbm90IG5lY2Vzc2FyaWx5OyBpdFxubWF5IHJlcHJlc2VudCBvdGhlciBpbnB1dCwgbGlrZSB0cmFuc2NyaWJlZCB2b2ljZSBjb21tYW5kcy5cbi19XG5rYmQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xua2JkID1cbiAgbm9kZSBcImtiZFwiXG5cblxuey18IFJlcHJlc2VudCBhIHN1YnNjcmlwdC4gLX1cbnN1YiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zdWIgPVxuICBub2RlIFwic3ViXCJcblxuXG57LXwgUmVwcmVzZW50IGEgc3VwZXJzY3JpcHQuIC19XG5zdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3VwID1cbiAgbm9kZSBcInN1cFwiXG5cblxuey18IFJlcHJlc2VudHMgc29tZSB0ZXh0IGluIGFuIGFsdGVybmF0ZSB2b2ljZSBvciBtb29kLCBvciBhdCBsZWFzdCBvZlxuZGlmZmVyZW50IHF1YWxpdHksIHN1Y2ggYXMgYSB0YXhvbm9taWMgZGVzaWduYXRpb24sIGEgdGVjaG5pY2FsIHRlcm0sIGFuXG5pZGlvbWF0aWMgcGhyYXNlLCBhIHRob3VnaHQsIG9yIGEgc2hpcCBuYW1lLlxuLX1cbmkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaSA9XG4gIG5vZGUgXCJpXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHRleHQgd2hpY2ggdG8gd2hpY2ggYXR0ZW50aW9uIGlzIGRyYXduIGZvciB1dGlsaXRhcmlhblxucHVycG9zZXMuIEl0IGRvZXNuJ3QgY29udmV5IGV4dHJhIGltcG9ydGFuY2UgYW5kIGRvZXNuJ3QgaW1wbHkgYW4gYWx0ZXJuYXRlXG52b2ljZS5cbi19XG5iIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmIgPVxuICBub2RlIFwiYlwiXG5cblxuey18IFJlcHJlc2VudHMgYSBub24tdGV4dHVhbCBhbm5vdGF0aW9uIGZvciB3aGljaCB0aGUgY29udmVudGlvbmFsXG5wcmVzZW50YXRpb24gaXMgdW5kZXJsaW5pbmcsIHN1Y2ggbGFiZWxpbmcgdGhlIHRleHQgYXMgYmVpbmcgbWlzc3BlbHQgb3JcbmxhYmVsaW5nIGEgcHJvcGVyIG5hbWUgaW4gQ2hpbmVzZSB0ZXh0LlxuLX1cbnUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudSA9XG4gIG5vZGUgXCJ1XCJcblxuXG57LXwgUmVwcmVzZW50cyB0ZXh0IGhpZ2hsaWdodGVkIGZvciByZWZlcmVuY2UgcHVycG9zZXMsIHRoYXQgaXMgZm9yIGl0c1xucmVsZXZhbmNlIGluIGFub3RoZXIgY29udGV4dC5cbi19XG5tYXJrIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1hcmsgPVxuICBub2RlIFwibWFya1wiXG5cblxuey18IFJlcHJlc2VudHMgY29udGVudCB0byBiZSBtYXJrZWQgd2l0aCBydWJ5IGFubm90YXRpb25zLCBzaG9ydCBydW5zIG9mIHRleHRcbnByZXNlbnRlZCBhbG9uZ3NpZGUgdGhlIHRleHQuIFRoaXMgaXMgb2Z0ZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEVhc3QgQXNpYW5cbmxhbmd1YWdlIHdoZXJlIHRoZSBhbm5vdGF0aW9ucyBhY3QgYXMgYSBndWlkZSBmb3IgcHJvbnVuY2lhdGlvbiwgbGlrZSB0aGVcbkphcGFuZXNlIGZ1cmlnYW5hLlxuLX1cbnJ1YnkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xucnVieSA9XG4gIG5vZGUgXCJydWJ5XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgdGV4dCBvZiBhIHJ1YnkgYW5ub3RhdGlvbi4gLX1cbnJ0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnJ0ID1cbiAgbm9kZSBcInJ0XCJcblxuXG57LXwgUmVwcmVzZW50cyBwYXJlbnRoZXNpcyBhcm91bmQgYSBydWJ5IGFubm90YXRpb24sIHVzZWQgdG8gZGlzcGxheSB0aGVcbmFubm90YXRpb24gaW4gYW4gYWx0ZXJuYXRlIHdheSBieSBicm93c2VycyBub3Qgc3VwcG9ydGluZyB0aGUgc3RhbmRhcmQgZGlzcGxheVxuZm9yIGFubm90YXRpb25zLlxuLX1cbnJwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnJwID1cbiAgbm9kZSBcInJwXCJcblxuXG57LXwgUmVwcmVzZW50cyB0ZXh0IHRoYXQgbXVzdCBiZSBpc29sYXRlZCBmcm9tIGl0cyBzdXJyb3VuZGluZyBmb3JcbmJpZGlyZWN0aW9uYWwgdGV4dCBmb3JtYXR0aW5nLiBJdCBhbGxvd3MgZW1iZWRkaW5nIGEgc3BhbiBvZiB0ZXh0IHdpdGggYVxuZGlmZmVyZW50LCBvciB1bmtub3duLCBkaXJlY3Rpb25hbGl0eS5cbi19XG5iZGkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYmRpID1cbiAgbm9kZSBcImJkaVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIGRpcmVjdGlvbmFsaXR5IG9mIGl0cyBjaGlsZHJlbiwgaW4gb3JkZXIgdG8gZXhwbGljaXRseVxub3ZlcnJpZGUgdGhlIFVuaWNvZGUgYmlkaXJlY3Rpb25hbCBhbGdvcml0aG0uXG4tfVxuYmRvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJkbyA9XG4gIG5vZGUgXCJiZG9cIlxuXG5cbnstfCBSZXByZXNlbnRzIHRleHQgd2l0aCBubyBzcGVjaWZpYyBtZWFuaW5nLiBUaGlzIGhhcyB0byBiZSB1c2VkIHdoZW4gbm8gb3RoZXJcbnRleHQtc2VtYW50aWMgZWxlbWVudCBjb252ZXlzIGFuIGFkZXF1YXRlIG1lYW5pbmcsIHdoaWNoLCBpbiB0aGlzIGNhc2UsIGlzXG5vZnRlbiBicm91Z2h0IGJ5IGdsb2JhbCBhdHRyaWJ1dGVzIGxpa2UgYGNsYXNzYCwgYGxhbmdgLCBvciBgZGlyYC5cbi19XG5zcGFuIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnNwYW4gPVxuICBub2RlIFwic3BhblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBsaW5lIGJyZWFrLiAtfVxuYnIgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuYnIgPVxuICBub2RlIFwiYnJcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSwgdGhhdCBpcyBhIHN1Z2dlc3RlZCBwb2ludCBmb3JcbndyYXBwaW5nIHRleHQgaW4gb3JkZXIgdG8gaW1wcm92ZSByZWFkYWJpbGl0eSBvZiB0ZXh0IHNwbGl0IG9uIHNldmVyYWwgbGluZXMuXG4tfVxud2JyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbndiciA9XG4gIG5vZGUgXCJ3YnJcIlxuXG5cbi0tIEVESVRTXG5cbnstfCBEZWZpbmVzIGFuIGFkZGl0aW9uIHRvIHRoZSBkb2N1bWVudC4gLX1cbmlucyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbnMgPVxuICBub2RlIFwiaW5zXCJcblxuXG57LXwgRGVmaW5lcyBhIHJlbW92YWwgZnJvbSB0aGUgZG9jdW1lbnQuIC19XG5kZWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGVsID1cbiAgbm9kZSBcImRlbFwiXG5cblxuLS0gRU1CRURERUQgQ09OVEVOVFxuXG57LXwgUmVwcmVzZW50cyBhbiBpbWFnZS4gLX1cbmltZyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pbWcgPVxuICBub2RlIFwiaW1nXCJcblxuXG57LXwgRW1iZWRkZWQgYW4gSFRNTCBkb2N1bWVudC4gLX1cbmlmcmFtZSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5pZnJhbWUgPVxuICBub2RlIFwiaWZyYW1lXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGludGVncmF0aW9uIHBvaW50IGZvciBhbiBleHRlcm5hbCwgb2Z0ZW4gbm9uLUhUTUwsXG5hcHBsaWNhdGlvbiBvciBpbnRlcmFjdGl2ZSBjb250ZW50LlxuLX1cbmVtYmVkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmVtYmVkID1cbiAgbm9kZSBcImVtYmVkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhbiBleHRlcm5hbCByZXNvdXJjZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBhbiBpbWFnZSwgYW4gSFRNTFxuc3ViLWRvY3VtZW50LCBvciBhbiBleHRlcm5hbCByZXNvdXJjZSB0byBiZSBwcm9jZXNzZWQgYnkgYSBwbHVnLWluLlxuLX1cbm9iamVjdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5vYmplY3QgPVxuICBub2RlIFwib2JqZWN0XCJcblxuXG57LXwgRGVmaW5lcyBwYXJhbWV0ZXJzIGZvciB1c2UgYnkgcGx1Zy1pbnMgaW52b2tlZCBieSBgb2JqZWN0YCBlbGVtZW50cy4gLX1cbnBhcmFtIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnBhcmFtID1cbiAgbm9kZSBcInBhcmFtXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHZpZGVvLCB0aGUgYXNzb2NpYXRlZCBhdWRpbyBhbmQgY2FwdGlvbnMsIGFuZCBjb250cm9scy4gLX1cbnZpZGVvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnZpZGVvID1cbiAgbm9kZSBcInZpZGVvXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNvdW5kIG9yIGF1ZGlvIHN0cmVhbS4gLX1cbmF1ZGlvIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmF1ZGlvID1cbiAgbm9kZSBcImF1ZGlvXCJcblxuXG57LXwgQWxsb3dzIGF1dGhvcnMgdG8gc3BlY2lmeSBhbHRlcm5hdGl2ZSBtZWRpYSByZXNvdXJjZXMgZm9yIG1lZGlhIGVsZW1lbnRzXG5saWtlIGB2aWRlb2Agb3IgYGF1ZGlvYC5cbi19XG5zb3VyY2UgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc291cmNlID1cbiAgbm9kZSBcInNvdXJjZVwiXG5cblxuey18IEFsbG93cyBhdXRob3JzIHRvIHNwZWNpZnkgdGltZWQgdGV4dCB0cmFjayBmb3IgbWVkaWEgZWxlbWVudHMgbGlrZSBgdmlkZW9gXG5vciBgYXVkaW9gLlxuLX1cbnRyYWNrIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRyYWNrID1cbiAgbm9kZSBcInRyYWNrXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGJpdG1hcCBhcmVhIGZvciBncmFwaGljcyByZW5kZXJpbmcuIC19XG5jYW52YXMgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuY2FudmFzID1cbiAgbm9kZSBcImNhbnZhc1wiXG5cblxuey18IERlZmluZXMgYSBtYXRoZW1hdGljYWwgZm9ybXVsYS4gLX1cbm1hdGggOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWF0aCA9XG4gIG5vZGUgXCJtYXRoXCJcblxuXG4tLSBUQUJVTEFSIERBVEFcblxuey18IFJlcHJlc2VudHMgZGF0YSB3aXRoIG1vcmUgdGhhbiBvbmUgZGltZW5zaW9uLiAtfVxudGFibGUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGFibGUgPVxuICBub2RlIFwidGFibGVcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSB0aXRsZSBvZiBhIHRhYmxlLiAtfVxuY2FwdGlvbiA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5jYXB0aW9uID1cbiAgbm9kZSBcImNhcHRpb25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIG9uZSBvciBtb3JlIGNvbHVtbnMgb2YgYSB0YWJsZS4gLX1cbmNvbGdyb3VwIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNvbGdyb3VwID1cbiAgbm9kZSBcImNvbGdyb3VwXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbHVtbiBvZiBhIHRhYmxlLiAtfVxuY29sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmNvbCA9XG4gIG5vZGUgXCJjb2xcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb25jcmV0ZSBkYXRhIG9mIGEgdGFibGUuXG4tfVxudGJvZHkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGJvZHkgPVxuICBub2RlIFwidGJvZHlcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb2x1bW4gbGFiZWxzIG9mIGEgdGFibGUuXG4tfVxudGhlYWQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGhlYWQgPVxuICBub2RlIFwidGhlYWRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBibG9jayBvZiByb3dzIHRoYXQgZGVzY3JpYmVzIHRoZSBjb2x1bW4gc3VtbWFyaWVzIG9mIGEgdGFibGUuXG4tfVxudGZvb3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xudGZvb3QgPVxuICBub2RlIFwidGZvb3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgcm93IG9mIGNlbGxzIGluIGEgdGFibGUuIC19XG50ciA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50ciA9XG4gIG5vZGUgXCJ0clwiXG5cblxuey18IFJlcHJlc2VudHMgYSBkYXRhIGNlbGwgaW4gYSB0YWJsZS4gLX1cbnRkIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnRkID1cbiAgbm9kZSBcInRkXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGhlYWRlciBjZWxsIGluIGEgdGFibGUuIC19XG50aCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50aCA9XG4gIG5vZGUgXCJ0aFwiXG5cblxuLS0gRk9STVNcblxuey18IFJlcHJlc2VudHMgYSBmb3JtLCBjb25zaXN0aW5nIG9mIGNvbnRyb2xzLCB0aGF0IGNhbiBiZSBzdWJtaXR0ZWQgdG8gYVxuc2VydmVyIGZvciBwcm9jZXNzaW5nLlxuLX1cbmZvcm0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZm9ybSA9XG4gIG5vZGUgXCJmb3JtXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBjb250cm9scy4gLX1cbmZpZWxkc2V0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmZpZWxkc2V0ID1cbiAgbm9kZSBcImZpZWxkc2V0XCJcblxuXG57LXwgUmVwcmVzZW50cyB0aGUgY2FwdGlvbiBmb3IgYSBgZmllbGRzZXRgLiAtfVxubGVnZW5kIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmxlZ2VuZCA9XG4gIG5vZGUgXCJsZWdlbmRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjYXB0aW9uIG9mIGEgZm9ybSBjb250cm9sLiAtfVxubGFiZWwgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubGFiZWwgPVxuICBub2RlIFwibGFiZWxcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgdHlwZWQgZGF0YSBmaWVsZCBhbGxvd2luZyB0aGUgdXNlciB0byBlZGl0IHRoZSBkYXRhLiAtfVxuaW5wdXQgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuaW5wdXQgPVxuICBub2RlIFwiaW5wdXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgYnV0dG9uLiAtfVxuYnV0dG9uIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbmJ1dHRvbiA9XG4gIG5vZGUgXCJidXR0b25cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgY29udHJvbCBhbGxvd2luZyBzZWxlY3Rpb24gYW1vbmcgYSBzZXQgb2Ygb3B0aW9ucy4gLX1cbnNlbGVjdCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5zZWxlY3QgPVxuICBub2RlIFwic2VsZWN0XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNldCBvZiBwcmVkZWZpbmVkIG9wdGlvbnMgZm9yIG90aGVyIGNvbnRyb2xzLiAtfVxuZGF0YWxpc3QgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuZGF0YWxpc3QgPVxuICBub2RlIFwiZGF0YWxpc3RcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc2V0IG9mIG9wdGlvbnMsIGxvZ2ljYWxseSBncm91cGVkLiAtfVxub3B0Z3JvdXAgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3B0Z3JvdXAgPVxuICBub2RlIFwib3B0Z3JvdXBcIlxuXG5cbnstfCBSZXByZXNlbnRzIGFuIG9wdGlvbiBpbiBhIGBzZWxlY3RgIGVsZW1lbnQgb3IgYSBzdWdnZXN0aW9uIG9mIGEgYGRhdGFsaXN0YFxuZWxlbWVudC5cbi19XG5vcHRpb24gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xub3B0aW9uID1cbiAgbm9kZSBcIm9wdGlvblwiXG5cblxuey18IFJlcHJlc2VudHMgYSBtdWx0aWxpbmUgdGV4dCBlZGl0IGNvbnRyb2wuIC19XG50ZXh0YXJlYSA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG50ZXh0YXJlYSA9XG4gIG5vZGUgXCJ0ZXh0YXJlYVwiXG5cblxuey18IFJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBhIGNhbGN1bGF0aW9uLiAtfVxub3V0cHV0IDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm91dHB1dCA9XG4gIG5vZGUgXCJvdXRwdXRcIlxuXG5cbnstfCBSZXByZXNlbnRzIHRoZSBjb21wbGV0aW9uIHByb2dyZXNzIG9mIGEgdGFzay4gLX1cbnByb2dyZXNzIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbnByb2dyZXNzID1cbiAgbm9kZSBcInByb2dyZXNzXCJcblxuXG57LXwgUmVwcmVzZW50cyBhIHNjYWxhciBtZWFzdXJlbWVudCAob3IgYSBmcmFjdGlvbmFsIHZhbHVlKSwgd2l0aGluIGEga25vd25cbnJhbmdlLlxuLX1cbm1ldGVyIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IChIdG1sIG1zZykgLT4gSHRtbCBtc2dcbm1ldGVyID1cbiAgbm9kZSBcIm1ldGVyXCJcblxuXG4tLSBJTlRFUkFDVElWRSBFTEVNRU5UU1xuXG57LXwgUmVwcmVzZW50cyBhIHdpZGdldCBmcm9tIHdoaWNoIHRoZSB1c2VyIGNhbiBvYnRhaW4gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxub3IgY29udHJvbHMuXG4tfVxuZGV0YWlscyA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSAoSHRtbCBtc2cpIC0+IEh0bWwgbXNnXG5kZXRhaWxzID1cbiAgbm9kZSBcImRldGFpbHNcIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgc3VtbWFyeSwgY2FwdGlvbiwgb3IgbGVnZW5kIGZvciBhIGdpdmVuIGBkZXRhaWxzYC4gLX1cbnN1bW1hcnkgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xuc3VtbWFyeSA9XG4gIG5vZGUgXCJzdW1tYXJ5XCJcblxuXG57LXwgUmVwcmVzZW50cyBhIGNvbW1hbmQgdGhhdCB0aGUgdXNlciBjYW4gaW52b2tlLiAtfVxubWVudWl0ZW0gOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWVudWl0ZW0gPVxuICBub2RlIFwibWVudWl0ZW1cIlxuXG5cbnstfCBSZXByZXNlbnRzIGEgbGlzdCBvZiBjb21tYW5kcy4gLX1cbm1lbnUgOiBBcnJheSAoQXR0cmlidXRlIG1zZykgLT4gQXJyYXkgKEh0bWwgbXNnKSAtPiBIdG1sIG1zZ1xubWVudSA9XG4gIG5vZGUgXCJtZW51XCJcblxuIiwKICAgICAgICAibW9kdWxlIEh0bWwuQXR0cmlidXRlcy5BcmlhIGV4cG9zaW5nXG4gICAgKCByb2xlXG4gICAgLCBhY3RpdmVEZXNjZW5kYW50XG4gICAgLCBjaGVja2VkXG4gICAgLCBjb250cm9sc1xuICAgICwgZGVzY3JpYmVkYnlcbiAgICAsIGRpc2FibGVkXG4gICAgLCBleHBhbmRlZFxuICAgICwgaGFzUG9wdXBcbiAgICAsIGhpZGRlblxuICAgICwgbGFiZWxcbiAgICAsIGxhYmVsbGVkYnlcbiAgICAsIGxpdmVcbiAgICAsIHByZXNzZWRcbiAgICAsIHJlYWRvbmx5XG4gICAgLCByZXF1aXJlZFxuICAgICwgc2VsZWN0ZWRcbiAgICAsIHNvcnRcbiAgICAsIHZhbHVlTWF4XG4gICAgLCB2YWx1ZU1pblxuICAgICwgdmFsdWVOb3dcbiAgICApXG5cbnstfCBBZGRpdGlvbmFsIGF0dHJpYnV0ZXMgZm9yIGh0bWxcblxuXG4jIEFyaWEgcm9sZVxuXG5AZG9jcyByb2xlXG5cblxuIyBBcmlhIEF0dHJpYnV0ZXNcblxuQGRvY3MgYWN0aXZlRGVzY2VuZGFudFxuQGRvY3MgY2hlY2tlZFxuQGRvY3MgY29udHJvbHNcbkBkb2NzIGRlc2NyaWJlZGJ5XG5AZG9jcyBkaXNhYmxlZFxuQGRvY3MgZXhwYW5kZWRcbkBkb2NzIGhhc1BvcHVwXG5AZG9jcyBoaWRkZW5cbkBkb2NzIGxhYmVsXG5AZG9jcyBsYWJlbGxlZGJ5XG5AZG9jcyBsaXZlXG5AZG9jcyBwcmVzc2VkXG5AZG9jcyByZWFkb25seVxuQGRvY3MgcmVxdWlyZWRcbkBkb2NzIHNlbGVjdGVkXG5AZG9jcyBzb3J0XG5AZG9jcyB2YWx1ZU1heFxuQGRvY3MgdmFsdWVNaW5cbkBkb2NzIHZhbHVlTm93XG5cbi19XG5cbmltcG9ydCBIdG1sIGV4cG9zaW5nIChBdHRyaWJ1dGUpXG5pbXBvcnQgSHRtbC5BdHRyaWJ1dGVzIGV4cG9zaW5nIChhdHRyaWJ1dGUpXG5pbXBvcnQgSnNvbi5FbmNvZGUgYXMgSkVcblxuXG5ib29sQXR0cmlidXRlIDogU3RyaW5nIC0+IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xuYm9vbEF0dHJpYnV0ZSBuYW1lIHZhbCA9XG4gICAgYXR0cmlidXRlIG5hbWUgKEpFLmVuY29kZSAwIDx8IEpFLmJvb2wgdmFsKVxuXG5cbmZsb2F0QXR0cmlidXRlIDogU3RyaW5nIC0+IEZsb2F0IC0+IEF0dHJpYnV0ZSBtc2dcbmZsb2F0QXR0cmlidXRlIG5hbWUgdmFsID1cbiAgICBhdHRyaWJ1dGUgbmFtZSAoU3RyaW5nLmZyb21GbG9hdCB2YWwpXG5cblxuey18IElkZW50aWZpZXMgdGhlIGN1cnJlbnRseSBhY3RpdmUgZGVzY2VuZGFudCBvZiBhIGNvbXBvc2l0ZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1hY3RpdmVkZXNjZW5kYW50KS5cblxuICAgIGRpdiBbIGFjdGl2ZURlc2NlbmRhbnQgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5hY3RpdmVEZXNjZW5kYW50IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmFjdGl2ZURlc2NlbmRhbnQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiXG5cblxuey18IEluZGljYXRlcyB0aGUgY3VycmVudCBcImNoZWNrZWRcIiBzdGF0ZSBvZiBjaGVja2JveGVzLCByYWRpbyBidXR0b25zLCBhbmQgb3RoZXIgd2lkZ2V0cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWNoZWNrZWQpLlxuXG4gICAgZGl2IFsgY2hlY2tlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuY2hlY2tlZCA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jaGVja2VkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWNoZWNrZWRcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgd2hvc2UgY29udGVudHMgb3IgcHJlc2VuY2UgYXJlIGNvbnRyb2xsZWQgYnkgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWNvbnRyb2xzKS5cblxuICAgIGRpdiBbIGNvbnRyb2xzIFwiZHJvcGRvd24tbWVudVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5jb250cm9scyA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5jb250cm9scyA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1jb250cm9sc1wiXG5cblxuey18IElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB0aGF0IGRlc2NyaWJlcyB0aGUgb2JqZWN0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtZGVzY3JpYmVkYnkpLlxuXG4gICAgZGl2IFsgZGVzY3JpYmVkYnkgXCJpZFwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5kZXNjcmliZWRieSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5kZXNjcmliZWRieSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1kZXNjcmliZWRieVwiXG5cblxuey18IEluZGljYXRlcyB0aGF0IHRoZSBlbGVtZW50IGlzIHBlcmNlaXZhYmxlIGJ1dCBkaXNhYmxlZCwgc28gaXQgaXMgbm90IGVkaXRhYmxlIG9yIG90aGVyd2lzZSBvcGVyYWJsZS5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWRpc2FibGVkKS5cblxuICAgIGRpdiBbIGRpc2FibGVkIFRydWUgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmRpc2FibGVkIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5kaXNhYmxlZCA9XG4gICAgYm9vbEF0dHJpYnV0ZSBcImFyaWEtZGlzYWJsZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCwgb3IgYW5vdGhlciBncm91cGluZyBlbGVtZW50IGl0IGNvbnRyb2xzLCBpcyBjdXJyZW50bHkgZXhwYW5kZWQgb3IgY29sbGFwc2VkLlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtZXhwYW5kZWQpLlxuXG4gICAgZGl2IFsgZXhwYW5kZWQgXCJ0cnVlXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmV4cGFuZGVkIDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbmV4cGFuZGVkID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWV4cGFuZGVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBhdmFpbGFiaWxpdHkgYW5kIHR5cGUgb2YgaW50ZXJhY3RpdmUgcG9wdXAgZWxlbWVudCwgc3VjaCBhcyBtZW51IG9yIGRpYWxvZywgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IGFuIGVsZW1lbnQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1oYXNwb3B1cCkuXG5cbiAgICBkaXYgWyBoYXNQb3B1cCBcIm1lbnVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuaGFzUG9wdXAgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuaGFzUG9wdXAgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtaGFzcG9wdXBcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBhbmQgYWxsIG9mIGl0cyBkZXNjZW5kYW50cyBhcmUgbm90IHZpc2libGUgb3IgcGVyY2VpdmFibGUgdG8gYW55IHVzZXIgYXMgaW1wbGVtZW50ZWQgYnkgdGhlIGF1dGhvci5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWhpZGRlbikuXG5cbiAgICBkaXYgWyBoaWRkZW4gVHJ1ZSBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuaGlkZGVuIDogQm9vbCAtPiBBdHRyaWJ1dGUgbXNnXG5oaWRkZW4gPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLWhpZGRlblwiXG5cblxuey18IERlZmluZXMgYSBzdHJpbmcgdmFsdWUgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxhYmVsKS5cblxuICAgIGRpdiBbIGxhYmVsIFwibGFiZWxcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxubGFiZWwgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFiZWwgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtbGFiZWxcIlxuXG5cbnstfCBJZGVudGlmaWVzIHRoZSBlbGVtZW50IChvciBlbGVtZW50cykgdGhhdCBsYWJlbHMgdGhlIGN1cnJlbnQgZWxlbWVudC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxhYmVsbGVkYnkpLlxuXG4gICAgZGl2IFsgbGFiZWxsZWRieSBcImlkXCIgXSBbIHRleHQgXCJIZWxsbyBhcmlhIVwiIF1cblxuLX1cbmxhYmVsbGVkYnkgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xubGFiZWxsZWRieSA9XG4gICAgYXR0cmlidXRlIFwiYXJpYS1sYWJlbGxlZGJ5XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgYW4gZWxlbWVudCB3aWxsIGJlIHVwZGF0ZWQsIGFuZCBkZXNjcmliZXMgdGhlIHR5cGVzIG9mIHVwZGF0ZXMgdGhlIHVzZXIgYWdlbnRzLFxuYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgYW5kIHVzZXIgY2FuIGV4cGVjdCBmcm9tIHRoZSBsaXZlIHJlZ2lvbi5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLWxpdmUpLlxuXG4gICAgaW5wdXQgWyBsaXZlIFwiYXNzZXJ0aXZlXCIgXSBbXVxuXG4tfVxubGl2ZSA6IFN0cmluZyAtPiBBdHRyaWJ1dGUgbXNnXG5saXZlID1cbiAgICBhdHRyaWJ1dGUgXCJhcmlhLWxpdmVcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJwcmVzc2VkXCIgc3RhdGUgb2YgdG9nZ2xlIGJ1dHRvbnMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1wcmVzc2VkKS5cblxuICAgIGJ1dHRvbiBbIHByZXNzZWQgVHJ1ZSBdIFsgdGV4dCBcIlN1Ym1pdFwiIF1cblxuLX1cbnByZXNzZWQgOiBCb29sIC0+IEF0dHJpYnV0ZSBtc2dcbnByZXNzZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXByZXNzZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBpcyBub3QgZWRpdGFibGUsIGJ1dCBpcyBvdGhlcndpc2Ugb3BlcmFibGUuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1yZWFkb25seSkuXG5cbiAgICBkaXYgWyByZWFkb25seSBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5yZWFkb25seSA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVhZG9ubHkgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXJlYWRvbmx5XCJcblxuXG57LXwgSW5kaWNhdGVzIHRoYXQgdXNlciBpbnB1dCBpcyByZXF1aXJlZCBvbiB0aGUgZWxlbWVudCBiZWZvcmUgYSBmb3JtIG1heSBiZSBzdWJtaXR0ZWQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1yZXF1aXJlZCkuXG5cbiAgICBkaXYgWyByZXF1aXJlZCBUcnVlIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5yZXF1aXJlZCA6IEJvb2wgLT4gQXR0cmlidXRlIG1zZ1xucmVxdWlyZWQgPVxuICAgIGJvb2xBdHRyaWJ1dGUgXCJhcmlhLXJlcXVpcmVkXCJcblxuXG57LXwgSW5kaWNhdGVzIHRoZSBjdXJyZW50IFwic2VsZWN0ZWRcIiBzdGF0ZSBvZiB2YXJpb3VzIHdpZGdldHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS1zZWxlY3RlZCkuXG5cbiAgICBkaXYgWyBzZWxlY3RlZCBcInRydWVcIiBdIFsgdGV4dCBcIkhlbGxvIGFyaWEhXCIgXVxuXG4tfVxuc2VsZWN0ZWQgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xuc2VsZWN0ZWQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtc2VsZWN0ZWRcIlxuXG5cbnstfCBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgXCJzZWxlY3RlZFwiIHN0YXRlIG9mIHZhcmlvdXMgd2lkZ2V0cy5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXNlbGVjdGVkKS5cblxuICAgIGRpdiBbIHNlbGVjdGVkIFwidHJ1ZVwiIF0gWyB0ZXh0IFwiSGVsbG8gYXJpYSFcIiBdXG5cbi19XG5zb3J0IDogU3RyaW5nIC0+IEF0dHJpYnV0ZSBtc2dcbnNvcnQgPVxuICAgIGF0dHJpYnV0ZSBcImFyaWEtc29ydFwiXG5cblxuey18IERlZmluZXMgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZSBmb3IgYSByYW5nZSB3aWRnZXQuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jYXJpYS12YWx1ZW1heCkuXG5cbiAgICBkaXYgWyB2YWx1ZU1heCAxMCwgcm9sZSBcInByb2dyZXNzYmFyXCIgXSBbXVxuXG4tfVxudmFsdWVNYXggOiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZU1heCA9XG4gICAgZmxvYXRBdHRyaWJ1dGUgXCJhcmlhLXZhbHVlbWF4XCJcblxuXG57LXwgRGVmaW5lcyB0aGUgbWluaW11bSBhbGxvd2VkIHZhbHVlIGZvciBhIHJhbmdlIHdpZGdldC5cblNlZSB0aGUgW29mZmljaWFsIHNwZWNzXShodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtMS4xLyNhcmlhLXZhbHVlbWluKS5cblxuICAgIGRpdiBbIHZhbHVlTWluIDEsIHJvbGUgXCJwcm9ncmVzc2JhclwiIF0gW11cblxuLX1cbnZhbHVlTWluIDogRmxvYXQgLT4gQXR0cmlidXRlIG1zZ1xudmFsdWVNaW4gPVxuICAgIGZsb2F0QXR0cmlidXRlIFwiYXJpYS12YWx1ZW1pblwiXG5cblxuey18IERlZmluZXMgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIGEgcmFuZ2Ugd2lkZ2V0LlxuU2VlIHRoZSBbb2ZmaWNpYWwgc3BlY3NdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS0xLjEvI2FyaWEtdmFsdWVub3cpLlxuXG4gICAgZGl2IFsgdmFsdWVOb3cgNCwgcm9sZSBcInByb2dyZXNzYmFyXCIgXSBbXVxuXG4tfVxudmFsdWVOb3cgOiBGbG9hdCAtPiBBdHRyaWJ1dGUgbXNnXG52YWx1ZU5vdyA9XG4gICAgZmxvYXRBdHRyaWJ1dGUgXCJhcmlhLXZhbHVlbm93XCJcblxuXG57LXwgQW4gYXR0cmlidXRlIHRvIHN1cHBvcnQgdGhlIHJvbGUgY2xhc3NpZmljYXRpb24gb2YgZWxlbWVudHMuXG5TZWUgdGhlIFtvZmZpY2lhbCBzcGVjc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3JvbGUtYXR0cmlidXRlKS5cblxuICAgIGRpdiBbIHJvbGUgXCJidXR0b25cIiBdIFsgdGV4dCBcIlN1Ym1pdFwiIF1cblxuLX1cbnJvbGUgOiBTdHJpbmcgLT4gQXR0cmlidXRlIG1zZ1xucm9sZSA9XG4gICAgYXR0cmlidXRlIFwicm9sZVwiXG4iLAogICAgICAgICJtb2R1bGUgSHRtbC5FdmVudHMgZXhwb3NpbmdcbiAgKCBvbkNsaWNrLCBvbkRvdWJsZUNsaWNrXG4gICwgb25Nb3VzZURvd24sIG9uTW91c2VVcFxuICAsIG9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlXG4gICwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXRcbiAgLCBvbklucHV0LCBvbkNoZWNrLCBvblN1Ym1pdFxuICAsIG9uQmx1ciwgb25Gb2N1c1xuICAsIG9uLCBzdG9wUHJvcGFnYXRpb25PbiwgcHJldmVudERlZmF1bHRPbiwgY3VzdG9tXG4gICwgdGFyZ2V0VmFsdWUsIHRhcmdldENoZWNrZWQsIGtleUNvZGVcbiAgKVxuXG57LXwgSXQgaXMgb2Z0ZW4gaGVscGZ1bCB0byBjcmVhdGUgYW4gW0N1c3RvbSBUeXBlXVtdIHNvIHlvdSBjYW4gaGF2ZSBtYW55IGRpZmZlcmVudCBraW5kc1xub2YgZXZlbnRzIGFzIHNlZW4gaW4gdGhlIFtUb2RvTVZDXVtdIGV4YW1wbGUuXG5cbltDdXN0b20gVHlwZV06IGh0dHBzOi8vZ3Jlbi1sYW5nLm9yZy9ib29rL3N5bnRheC9jdXN0b21fdHlwZXMuaHRtbFxuW1RvZG9NVkNdOiBodHRwczovL2dpdGh1Yi5jb20vZ3Jlbi1sYW5nL2V4YW1wbGUtcHJvamVjdHMvdHJlZS9tYWluL3RvZG9fbXZjIFxuXG4jIyBNb3VzZVxuQGRvY3Mgb25DbGljaywgb25Eb3VibGVDbGljaywgb25Nb3VzZURvd24sIG9uTW91c2VVcCwgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmUsIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0XG5cbiMjIEZvcm1zXG5AZG9jcyBvbklucHV0LCBvbkNoZWNrLCBvblN1Ym1pdFxuXG4jIyBGb2N1c1xuQGRvY3Mgb25CbHVyLCBvbkZvY3VzXG5cbiMjIEN1c3RvbVxuQGRvY3Mgb24sIHN0b3BQcm9wYWdhdGlvbk9uLCBwcmV2ZW50RGVmYXVsdE9uLCBjdXN0b21cblxuIyMgQ3VzdG9tIERlY29kZXJzXG5AZG9jcyB0YXJnZXRWYWx1ZSwgdGFyZ2V0Q2hlY2tlZCwga2V5Q29kZVxuLX1cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSlcbmltcG9ydCBKc29uLkRlY29kZSBhcyBKc29uXG5pbXBvcnQgVmlydHVhbERvbVxuXG5cblxuLS0gTU9VU0UgRVZFTlRTXG5cblxuey18LX1cbm9uQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25DbGljayBtc2cgPVxuICBvbiBcImNsaWNrXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uRG91YmxlQ2xpY2sgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Eb3VibGVDbGljayBtc2cgPVxuICBvbiBcImRibGNsaWNrXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VEb3duIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VEb3duIG1zZyA9XG4gIG9uIFwibW91c2Vkb3duXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VVcCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlVXAgbXNnID1cbiAgb24gXCJtb3VzZXVwXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VFbnRlciA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlRW50ZXIgbXNnID1cbiAgb24gXCJtb3VzZWVudGVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VMZWF2ZSA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG5vbk1vdXNlTGVhdmUgbXNnID1cbiAgb24gXCJtb3VzZWxlYXZlXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VPdmVyIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uTW91c2VPdmVyIG1zZyA9XG4gIG9uIFwibW91c2VvdmVyXCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuey18LX1cbm9uTW91c2VPdXQgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25Nb3VzZU91dCBtc2cgPVxuICBvbiBcIm1vdXNlb3V0XCIgKEpzb24uc3VjY2VlZCBtc2cpXG5cblxuXG4tLSBGT1JNIEVWRU5UU1xuXG5cbnstfCBEZXRlY3QgW2lucHV0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvaW5wdXQpXG5ldmVudHMgZm9yIHRoaW5ncyBsaWtlIHRleHQgZmllbGRzIG9yIHRleHQgYXJlYXMuXG5cbkZvciBtb3JlIGRldGFpbHMgb24gaG93IGBvbklucHV0YCB3b3JrcywgY2hlY2sgb3V0IFtgdGFyZ2V0VmFsdWVgXSgjdGFyZ2V0VmFsdWUpLlxuXG4qKk5vdGUgMToqKiBJdCBncmFicyB0aGUgKipzdHJpbmcqKiB2YWx1ZSBhdCBgZXZlbnQudGFyZ2V0LnZhbHVlYCwgc28gaXQgd2lsbFxubm90IHdvcmsgaWYgeW91IG5lZWQgc29tZSBvdGhlciBpbmZvcm1hdGlvbi4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIHRyYWNrXG5pbnB1dHMgb24gYSByYW5nZSBzbGlkZXIsIG1ha2UgYSBjdXN0b20gaGFuZGxlciB3aXRoIFtgb25gXSgjb24pLlxuXG4qKk5vdGUgMjoqKiBJdCB1c2VzIGBzdG9wUHJvcGFnYXRpb25PbmAgaW50ZXJuYWxseSB0byBhbHdheXMgc3RvcCBwcm9wYWdhdGlvblxub2YgdGhlIGV2ZW50LiBUaGlzIGlzIGltcG9ydGFudCBmb3IgY29tcGxpY2F0ZWQgcmVhc29ucyBleHBsYWluZWQgW2hlcmVdWzFdIGFuZFxuW2hlcmVdWzJdLlxuXG5bMV06IC9wYWNrYWdlcy9lbG0vdmlydHVhbC1kb20vbGF0ZXN0L1ZpcnR1YWxEb20jSGFuZGxlclxuWzJdOiBodHRwczovL2dpdGh1Yi5jb20vZWxtL3ZpcnR1YWwtZG9tL2lzc3Vlcy8xMjVcbi19XG5vbklucHV0IDogKFN0cmluZyAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbm9uSW5wdXQgdGFnZ2VyID1cbiAgc3RvcFByb3BhZ2F0aW9uT24gXCJpbnB1dFwiIChKc29uLm1hcCBhbHdheXNTdG9wIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0VmFsdWUpKVxuXG5cbmFsd2F5c1N0b3AgOiBtc2cgLT4geyBtZXNzYWdlIDogbXNnLCBzdG9wUHJvcGFnYXRpb24gOiBCb29sIH1cbmFsd2F5c1N0b3AgbXNnID1cbiAgeyBtZXNzYWdlID0gbXNnIFxuICAsIHN0b3BQcm9wYWdhdGlvbiA9IFRydWVcbiAgfVxuXG5cbnstfCBEZXRlY3QgW2NoYW5nZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NoYW5nZSlcbmV2ZW50cyBvbiBjaGVja2JveGVzLiBJdCB3aWxsIGdyYWIgdGhlIGJvb2xlYW4gdmFsdWUgZnJvbSBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgXG5vbiBhbnkgaW5wdXQgZXZlbnQuXG5cbkNoZWNrIG91dCBbYHRhcmdldENoZWNrZWRgXSgjdGFyZ2V0Q2hlY2tlZCkgZm9yIG1vcmUgZGV0YWlscyBvbiBob3cgdGhpcyB3b3Jrcy5cbi19XG5vbkNoZWNrIDogKEJvb2wgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG5vbkNoZWNrIHRhZ2dlciA9XG4gIG9uIFwiY2hhbmdlXCIgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRDaGVja2VkKVxuXG5cbnstfCBEZXRlY3QgYSBbc3VibWl0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvc3VibWl0KVxuZXZlbnQgd2l0aCBbYHByZXZlbnREZWZhdWx0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0KVxuaW4gb3JkZXIgdG8gcHJldmVudCB0aGUgZm9ybSBmcm9tIGNoYW5naW5nIHRoZSBwYWdl4oCZcyBsb2NhdGlvbi4gSWYgeW91IG5lZWRcbmRpZmZlcmVudCBiZWhhdmlvciwgY3JlYXRlIGEgY3VzdG9tIGV2ZW50IGhhbmRsZXIuXG4tfVxub25TdWJtaXQgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25TdWJtaXQgbXNnID1cbiAgcHJldmVudERlZmF1bHRPbiBcInN1Ym1pdFwiIChKc29uLm1hcCBhbHdheXNQcmV2ZW50RGVmYXVsdCAoSnNvbi5zdWNjZWVkIG1zZykpXG5cblxuYWx3YXlzUHJldmVudERlZmF1bHQgOiBtc2cgLT4geyBtZXNzYWdlIDogbXNnLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfVxuYWx3YXlzUHJldmVudERlZmF1bHQgbXNnID1cbiAgeyBtZXNzYWdlID0gbXNnXG4gICwgcHJldmVudERlZmF1bHQgPSBUcnVlXG4gIH1cblxuXG5cbi0tIEZPQ1VTIEVWRU5UU1xuXG5cbnstfC19XG5vbkJsdXIgOiBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub25CbHVyIG1zZyA9XG4gIG9uIFwiYmx1clwiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cbnstfC19XG5vbkZvY3VzIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbm9uRm9jdXMgbXNnID1cbiAgb24gXCJmb2N1c1wiIChKc29uLnN1Y2NlZWQgbXNnKVxuXG5cblxuLS0gQ1VTVE9NIEVWRU5UU1xuXG5cbnstfCBDcmVhdGUgYSBjdXN0b20gZXZlbnQgbGlzdGVuZXIuIE5vcm1hbGx5IHRoaXMgd2lsbCBub3QgYmUgbmVjZXNzYXJ5LCBidXRcbnlvdSBoYXZlIHRoZSBwb3dlciEgSGVyZSBpcyBob3cgYG9uQ2xpY2tgIGlzIGRlZmluZWQgZm9yIGV4YW1wbGU6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgRGVjb2RlXG5cbiAgICBvbkNsaWNrIDogbXNnIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNsaWNrIG1lc3NhZ2UgPVxuICAgICAgb24gXCJjbGlja1wiIChEZWNvZGUuc3VjY2VlZCBtZXNzYWdlKVxuXG5UaGUgZmlyc3QgYXJndW1lbnQgaXMgdGhlIGV2ZW50IG5hbWUgaW4gdGhlIHNhbWUgZm9ybWF0IGFzIHdpdGggSmF2YVNjcmlwdCdzXG5bYGFkZEV2ZW50TGlzdGVuZXJgXVthRUxdIGZ1bmN0aW9uLlxuXG5UaGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgSlNPTiBkZWNvZGVyLiBSZWFkIG1vcmUgYWJvdXQgdGhlc2UgW2hlcmVdW2RlY29kZXJdLlxuV2hlbiBhbiBldmVudCBvY2N1cnMsIHRoZSBkZWNvZGVyIHRyaWVzIHRvIHR1cm4gdGhlIGV2ZW50IG9iamVjdCBpbnRvIGFuIEdyZW5cbnZhbHVlLiBJZiBzdWNjZXNzZnVsLCB0aGUgdmFsdWUgaXMgcm91dGVkIHRvIHlvdXIgYHVwZGF0ZWAgZnVuY3Rpb24uIEluIHRoZVxuY2FzZSBvZiBgb25DbGlja2Agd2UgYWx3YXlzIGp1c3Qgc3VjY2VlZCB3aXRoIHRoZSBnaXZlbiBgbWVzc2FnZWAuXG5cbklmIHRoaXMgaXMgY29uZnVzaW5nLCB3b3JrIHRocm91Z2ggdGhlIFtFbG0gQXJjaGl0ZWN0dXJlIFR1dG9yaWFsXVt0dXRvcmlhbF0uXG5JdCByZWFsbHkgaGVscHMhXG5cblthRUxdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lclxuW2RlY29kZXJdOiAvcGFja2FnZXMvZWxtL2pzb24vbGF0ZXN0L0pzb24tRGVjb2RlXG5bdHV0b3JpYWxdOiBodHRwczovL2dpdGh1Yi5jb20vZXZhbmN6L2VsbS1hcmNoaXRlY3R1cmUtdHV0b3JpYWwvXG5cbioqTm90ZToqKiBUaGlzIGNyZWF0ZXMgYSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciwgZW5hYmxpbmcgb3B0aW1pemF0aW9ucyBmb3JcbnRvdWNoLCBzY3JvbGwsIGFuZCB3aGVlbCBldmVudHMgaW4gc29tZSBicm93c2Vycy5cblxuW3Bhc3NpdmVdOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuLX1cbm9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciBtc2cgLT4gQXR0cmlidXRlIG1zZ1xub24gZXZlbnQgZGVjb2RlciA9XG4gIFZpcnR1YWxEb20ub24gZXZlbnQgKFZpcnR1YWxEb20uTm9ybWFsIGRlY29kZXIpXG5cblxuey18IENyZWF0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IG1heSBbYHN0b3BQcm9wYWdhdGlvbmBdW3N0b3BdLiBZb3VyIGRlY29kZXJcbm11c3QgcHJvZHVjZSBhIG1lc3NhZ2UgYW5kIGEgYEJvb2xgIHRoYXQgZGVjaWRlcyBpZiBgc3RvcFByb3BhZ2F0aW9uYCBzaG91bGRcbmJlIGNhbGxlZC5cblxuW3N0b3BdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvc3RvcFByb3BhZ2F0aW9uXG5cbioqTm90ZToqKiBUaGlzIGNyZWF0ZXMgYSBbcGFzc2l2ZV1bXSBldmVudCBsaXN0ZW5lciwgZW5hYmxpbmcgb3B0aW1pemF0aW9ucyBmb3JcbnRvdWNoLCBzY3JvbGwsIGFuZCB3aGVlbCBldmVudHMgaW4gc29tZSBicm93c2Vycy5cblxuW3Bhc3NpdmVdOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuLX1cbnN0b3BQcm9wYWdhdGlvbk9uIDogU3RyaW5nIC0+IEpzb24uRGVjb2RlciB7IG1lc3NhZ2UgOiBtc2csIHN0b3BQcm9wYWdhdGlvbiA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5zdG9wUHJvcGFnYXRpb25PbiBldmVudCBkZWNvZGVyID1cbiAgVmlydHVhbERvbS5vbiBldmVudCAoVmlydHVhbERvbS5NYXlTdG9wUHJvcGFnYXRpb24gZGVjb2RlcilcblxuXG57LXwgQ3JlYXRlIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgbWF5IFtgcHJldmVudERlZmF1bHRgXVtwcmV2ZW50XS4gWW91ciBkZWNvZGVyXG5tdXN0IHByb2R1Y2UgYSBtZXNzYWdlIGFuZCBhIGBCb29sYCB0aGF0IGRlY2lkZXMgaWYgYHByZXZlbnREZWZhdWx0YCBzaG91bGRcbmJlIGNhbGxlZC5cblxuRm9yIGV4YW1wbGUsIHRoZSBgb25TdWJtaXRgIGZ1bmN0aW9uIGluIHRoaXMgbGlicmFyeSAqYWx3YXlzKiBwcmV2ZW50cyB0aGVcbmRlZmF1bHQgYmVoYXZpb3I6XG5cbltwcmV2ZW50XTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3ByZXZlbnREZWZhdWx0XG5cbiAgICBvblN1Ym1pdCA6IG1zZyAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25TdWJtaXQgbXNnID1cbiAgICAgIHByZXZlbnREZWZhdWx0T24gXCJzdWJtaXRcIiAoSnNvbi5tYXAgYWx3YXlzUHJldmVudERlZmF1bHQgKEpzb24uc3VjY2VlZCBtc2cpKVxuXG4gICAgYWx3YXlzUHJldmVudERlZmF1bHQgOiBtc2cgLT4gKCBtc2csIEJvb2wgKVxuICAgIGFsd2F5c1ByZXZlbnREZWZhdWx0IG1zZyA9XG4gICAgICAoIG1zZywgVHJ1ZSApXG4tfVxucHJldmVudERlZmF1bHRPbiA6IFN0cmluZyAtPiBKc29uLkRlY29kZXIgeyBtZXNzYWdlIDogbXNnLCBwcmV2ZW50RGVmYXVsdCA6IEJvb2wgfSAtPiBBdHRyaWJ1dGUgbXNnXG5wcmV2ZW50RGVmYXVsdE9uIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLk1heVByZXZlbnREZWZhdWx0IGRlY29kZXIpXG5cblxuey18IENyZWF0ZSBhbiBldmVudCBsaXN0ZW5lciB0aGF0IG1heSBbYHN0b3BQcm9wYWdhdGlvbmBdW3N0b3BdIG9yXG5bYHByZXZlbnREZWZhdWx0YF1bcHJldmVudF0uXG5cbltzdG9wXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L3N0b3BQcm9wYWdhdGlvblxuW3ByZXZlbnRdOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvcHJldmVudERlZmF1bHRcbltoYW5kbGVyXTogaHR0cHM6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0vdmlydHVhbC1kb20vbGF0ZXN0L1ZpcnR1YWxEb20jSGFuZGxlclxuXG4qKk5vdGU6KiogQ2hlY2sgb3V0IHRoZSBsb3dlci1sZXZlbCBldmVudCBBUEkgaW4gYGVsbS92aXJ0dWFsLWRvbWAgZm9yIG1vcmVcbmluZm9ybWF0aW9uIG9uIGV4YWN0bHkgaG93IGV2ZW50cyB3b3JrLCBlc3BlY2lhbGx5IHRoZSBbYEhhbmRsZXJgXVtoYW5kbGVyXVxuZG9jcy5cbi19XG5jdXN0b20gOiBTdHJpbmcgLT4gSnNvbi5EZWNvZGVyIHsgbWVzc2FnZSA6IG1zZywgc3RvcFByb3BhZ2F0aW9uIDogQm9vbCwgcHJldmVudERlZmF1bHQgOiBCb29sIH0gLT4gQXR0cmlidXRlIG1zZ1xuY3VzdG9tIGV2ZW50IGRlY29kZXIgPVxuICBWaXJ0dWFsRG9tLm9uIGV2ZW50IChWaXJ0dWFsRG9tLkN1c3RvbSBkZWNvZGVyKVxuXG5cblxuLS0gQ09NTU9OIERFQ09ERVJTXG5cblxuey18IEEgYEpzb24uRGVjb2RlcmAgZm9yIGdyYWJiaW5nIGBldmVudC50YXJnZXQudmFsdWVgLiBXZSB1c2UgdGhpcyB0byBkZWZpbmVcbmBvbklucHV0YCBhcyBmb2xsb3dzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuICAgIG9uSW5wdXQgOiAoU3RyaW5nIC0+IG1zZykgLT4gQXR0cmlidXRlIG1zZ1xuICAgIG9uSW5wdXQgdGFnZ2VyID1cbiAgICAgIHN0b3BQcm9wYWdhdGlvbk9uIFwiaW5wdXRcIiA8fFxuICAgICAgICBKc29uLm1hcCBhbHdheXNTdG9wIChKc29uLm1hcCB0YWdnZXIgdGFyZ2V0VmFsdWUpXG5cbiAgICBhbHdheXNTdG9wIDogYSAtPiAoYSwgQm9vbClcbiAgICBhbHdheXNTdG9wIHggPVxuICAgICAgKHgsIFRydWUpXG5cbllvdSBwcm9iYWJseSB3aWxsIG5ldmVyIG5lZWQgdGhpcywgYnV0IGhvcGVmdWxseSBpdCBnaXZlcyBzb21lIGluc2lnaHRzIGludG9cbmhvdyB0byBtYWtlIGN1c3RvbSBldmVudCBoYW5kbGVycy5cbi19XG50YXJnZXRWYWx1ZSA6IEpzb24uRGVjb2RlciBTdHJpbmdcbnRhcmdldFZhbHVlID1cbiAgSnNvbi5hdCBbXCJ0YXJnZXRcIiwgXCJ2YWx1ZVwiXSBKc29uLnN0cmluZ1xuXG5cbnstfCBBIGBKc29uLkRlY29kZXJgIGZvciBncmFiYmluZyBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgLiBXZSB1c2UgdGhpcyB0byBkZWZpbmVcbmBvbkNoZWNrYCBhcyBmb2xsb3dzOlxuXG4gICAgaW1wb3J0IEpzb24uRGVjb2RlIGFzIEpzb25cblxuICAgIG9uQ2hlY2sgOiAoQm9vbCAtPiBtc2cpIC0+IEF0dHJpYnV0ZSBtc2dcbiAgICBvbkNoZWNrIHRhZ2dlciA9XG4gICAgICBvbiBcImlucHV0XCIgKEpzb24ubWFwIHRhZ2dlciB0YXJnZXRDaGVja2VkKVxuLX1cbnRhcmdldENoZWNrZWQgOiBKc29uLkRlY29kZXIgQm9vbFxudGFyZ2V0Q2hlY2tlZCA9XG4gIEpzb24uYXQgW1widGFyZ2V0XCIsIFwiY2hlY2tlZFwiXSBKc29uLmJvb2xcblxuXG57LXwgQSBgSnNvbi5EZWNvZGVyYCBmb3IgZ3JhYmJpbmcgYGV2ZW50LmtleUNvZGVgLiBUaGlzIGhlbHBzIHlvdSBkZWZpbmVcbmtleWJvYXJkIGxpc3RlbmVycyBsaWtlIHRoaXM6XG5cbiAgICBpbXBvcnQgSnNvbi5EZWNvZGUgYXMgSnNvblxuXG4gICAgb25LZXlVcCA6IChJbnQgLT4gbXNnKSAtPiBBdHRyaWJ1dGUgbXNnXG4gICAgb25LZXlVcCB0YWdnZXIgPVxuICAgICAgb24gXCJrZXl1cFwiIChKc29uLm1hcCB0YWdnZXIga2V5Q29kZSlcblxuKipOb3RlOioqIEl0IGxvb2tzIGxpa2UgdGhlIHNwZWMgaXMgbW92aW5nIGF3YXkgZnJvbSBgZXZlbnQua2V5Q29kZWAgYW5kXG50b3dhcmRzIGBldmVudC5rZXlgLiBPbmNlIHRoaXMgaXMgc3VwcG9ydGVkIGluIG1vcmUgYnJvd3NlcnMsIHdlIG1heSBhZGRcbmhlbHBlcnMgaGVyZSBmb3IgYG9uS2V5VXBgLCBgb25LZXlEb3duYCwgYG9uS2V5UHJlc3NgLCBldGMuXG4tfVxua2V5Q29kZSA6IEpzb24uRGVjb2RlciBJbnRcbmtleUNvZGUgPVxuICBKc29uLmZpZWxkIFwia2V5Q29kZVwiIEpzb24uaW50XG4iLAogICAgICAgICJtb2R1bGUgTWF5YmUgZXhwb3NpbmdcbiAgICAoIE1heWJlKC4uKVxuICAgICwgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGtlZXBJZlxuICAgICwgd2l0aERlZmF1bHQsIHdpdGhEZWZhdWx0TGF6eSwgbWFwLCBtYXAyLCBtYXAzLCBtYXA0LCBtYXA1XG4gICAgLCBhbmRUaGVuXG4gICAgKVxuXG57LXwgVGhpcyBsaWJyYXJ5IGZpbGxzIGEgYnVuY2ggb2YgaW1wb3J0YW50IG5pY2hlcyBpbiBHcmVuLiBBIGBNYXliZWAgY2FuIGhlbHBcbnlvdSB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50cywgZXJyb3IgaGFuZGxpbmcsIGFuZCByZWNvcmRzIHdpdGggb3B0aW9uYWwgZmllbGRzLlxuXG5AZG9jcyBNYXliZVxuXG5cbiMjIFF1ZXJpZXNcblxuQGRvY3MgaGFzVmFsdWUsIGNoZWNrVmFsdWUsIGtlZXBJZlxuXG5cbiMjIFRyYW5zZm9ybVxuXG5AZG9jcyB3aXRoRGVmYXVsdCwgd2l0aERlZmF1bHRMYXp5LCBtYXAsIG1hcDIsIG1hcDMsIG1hcDQsIG1hcDUsIGFuZFRoZW5cblxuLX1cblxuaW1wb3J0IEJhc2ljcyBleHBvc2luZyAoLi4pXG5cblxuey18IFJlcHJlc2VudCB2YWx1ZXMgdGhhdCBtYXkgb3IgbWF5IG5vdCBleGlzdC4gSXQgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBhXG5yZWNvcmQgZmllbGQgdGhhdCBpcyBvbmx5IGZpbGxlZCBpbiBzb21ldGltZXMuIE9yIGlmIGEgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZVxuc29tZXRpbWVzLCBidXQgZG9lcyBub3QgYWJzb2x1dGVseSBuZWVkIGl0LlxuXG4gICAgLS0gQSBwZXJzb24sIGJ1dCBtYXliZSB3ZSBkbyBub3Qga25vdyB0aGVpciBhZ2UuXG4gICAgdHlwZSBhbGlhcyBQZXJzb24gPVxuICAgICAgICB7IG5hbWUgOiBTdHJpbmdcbiAgICAgICAgLCBhZ2UgOiBNYXliZSBJbnRcbiAgICAgICAgfVxuXG4gICAgdG9tID1cbiAgICAgICAgeyBuYW1lID0gXCJUb21cIiwgYWdlID0gSnVzdCA0MiB9XG5cbiAgICBzdWUgPVxuICAgICAgICB7IG5hbWUgPSBcIlN1ZVwiLCBhZ2UgPSBOb3RoaW5nIH1cblxuLX1cbnR5cGUgTWF5YmUgYVxuICAgID0gSnVzdCBhXG4gICAgfCBOb3RoaW5nXG5cblxuey18IENoZWNrcyB0byBzZWUgaWYgdGhlIFtNYXliZV0oI01heWJlKSBpcyBgSnVzdGAsIGFuZCB0aGF0IHRoZSBjb250YWluZWQgdmFsdWVcbmVxdWFscyBhIHByb3ZpZGVkIGNvbnN0YW50LlxuXG4gICAgaGFzVmFsdWUgNSAoSnVzdCA1KSA9PSBUcnVlXG5cbiAgICBoYXNWYWx1ZSA1IChKdXN0IDMpID09IEZhbHNlXG5cbiAgICBoYXNWYWx1ZSA1IE5vdGhpbmcgPT0gRmFsc2VcblxuLX1cbmhhc1ZhbHVlIDogYSAtPiBNYXliZSBhIC0+IEJvb2xcbmhhc1ZhbHVlIHZhbHVlIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICBjb250YWluZWQgPT0gdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBGYWxzZVxuXG5cbnstfCBDaGVja3MgdG8gc2VlIGlmIHRoZSBbTWF5YmVdKCNNYXliZSkgaXMgYEp1c3RgLCBhbmQgdGhhdCB0aGUgY29udGFpbmVkIHZhbHVlXG5wYXNzZXMgdGhlIHByb3ZpZGVkIHRlc3QuXG5cbiAgICBjaGVja1ZhbHVlIGlzT2RkIChKdXN0IDUpID09IFRydWVcblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgKEp1c3QgMikgPT0gRmFsc2VcblxuICAgIGNoZWNrVmFsdWUgaXNPZGQgTm90aGluZyA9PSBGYWxzZVxuXG4tfVxuY2hlY2tWYWx1ZSA6IChhIC0+IEJvb2wpIC0+IE1heWJlIGEgLT4gQm9vbFxuY2hlY2tWYWx1ZSB0ZXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgY29udGFpbmVkIC0+XG4gICAgICAgICAgICB0ZXN0IGNvbnRhaW5lZFxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuey18IFByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlLCB0dXJuaW5nIGFuIG9wdGlvbmFsIHZhbHVlIGludG8gYSBub3JtYWxcbnZhbHVlLiBUaGlzIGNvbWVzIGluIGhhbmR5IHdoZW4gcGFpcmVkIHdpdGggZnVuY3Rpb25zIGxpa2VcbltgRGljdC5nZXRgXShEaWN0I2dldCkgd2hpY2ggZ2l2ZXMgYmFjayBhIGBNYXliZWAuXG5cbiAgICB3aXRoRGVmYXVsdCAxMDAgKEp1c3QgNDIpID09IDQyXG4gICAgXG4gICAgd2l0aERlZmF1bHQgMTAwIE5vdGhpbmcgPT0gMTAwXG4gICAgXG4gICAgd2l0aERlZmF1bHQgXCJ1bmtub3duXCIgKERpY3QuZ2V0IFwiVG9tXCIgRGljdC5lbXB0eSkgPT0gXCJ1bmtub3duXCJcblxuLX1cbndpdGhEZWZhdWx0IDogYSAtPiBNYXliZSBhIC0+IGFcbndpdGhEZWZhdWx0IGRlZmF1bHQgbWF5YmUgPVxuICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgSnVzdCB2YWx1ZSAtPlxuICAgICAgICAgICAgdmFsdWVcblxuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBkZWZhdWx0XG5cblxuey18IFNhbWUgYXMgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB3cmFwcGVkIGluXG5hIGZ1bmN0aW9uLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNvbXB1dGluZyB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBleHBlbnNpdmUsIGFzXG55b3UgY2FuIGNvbXB1dGUgaXQgb25seSB3aGVuIGl0IGlzIHJlcXVpcmVkLlxuXG5JbiBtb3N0IGNhc2VzIHlvdSBzaG91bGQgdXNlIHBhdHRlcm4gbWF0Y2hpbmcgb3IgW3dpdGhEZWZhdWx0XSgjd2l0aERlZmF1bHQpIGluc3RlYWQuXG5cbi19XG53aXRoRGVmYXVsdExhenkgOiAoe30gLT4gYSkgLT4gTWF5YmUgYSAtPiBhXG53aXRoRGVmYXVsdExhenkgZGVmYXVsdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIGRlZmF1bHQge31cblxuXG57LXwgVHJhbnNmb3JtIGEgYE1heWJlYCB2YWx1ZSB3aXRoIGEgZ2l2ZW4gZnVuY3Rpb246XG5cbiAgICBtYXAgc3FydCAoSnVzdCA5KSA9PSBKdXN0IDNcblxuICAgIG1hcCBzcXJ0IE5vdGhpbmcgPT0gTm90aGluZ1xuXG4gICAgbWFwIHNxcnQgKFN0cmluZy50b0Zsb2F0IFwiOVwiKSA9PSBKdXN0IDNcblxuICAgIG1hcCBzcXJ0IChTdHJpbmcudG9GbG9hdCBcInhcIikgPT0gTm90aGluZ1xuXG4tfVxubWFwIDogKGEgLT4gYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG5tYXAgZiBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBKdXN0IChmIHZhbHVlKVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG57LXwgQXBwbHkgYSBmdW5jdGlvbiBpZiBhbGwgdGhlIGFyZ3VtZW50cyBhcmUgYEp1c3RgIGEgdmFsdWUuXG5cbiAgICBtYXAyICgrKSAoSnVzdCAzKSAoSnVzdCA0KSA9PSBKdXN0IDdcblxuICAgIG1hcDIgKCspIChKdXN0IDMpIE5vdGhpbmcgPT0gTm90aGluZ1xuXG4gICAgbWFwMiAoKykgTm90aGluZyAoSnVzdCA0KSA9PSBOb3RoaW5nXG5cbiAgICBtYXAyICgrKSAoU3RyaW5nLnRvSW50IFwiMVwiKSAoU3RyaW5nLnRvSW50IFwiMTIzXCIpID09IEp1c3QgMTI0XG5cbiAgICBtYXAyICgrKSAoU3RyaW5nLnRvSW50IFwieFwiKSAoU3RyaW5nLnRvSW50IFwiMTIzXCIpID09IE5vdGhpbmdcblxuICAgIG1hcDIgKCspIChTdHJpbmcudG9JbnQgXCIxXCIpIChTdHJpbmcudG9JbnQgXCIxLjNcIikgPT0gTm90aGluZ1xuXG4tfVxubWFwMiA6IChhIC0+IGIgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSB2YWx1ZVxubWFwMiBmdW5jIG1hIG1iID1cbiAgICB3aGVuIG1hIGlzXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICBKdXN0IGEgLT5cbiAgICAgICAgICAgIHdoZW4gbWIgaXNcbiAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgIEp1c3QgYiAtPlxuICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYilcblxuXG57LXwgLX1cbm1hcDMgOiAoYSAtPiBiIC0+IGMgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSBjIC0+IE1heWJlIHZhbHVlXG5tYXAzIGZ1bmMgbWEgbWIgbWMgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbWMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMpXG5cblxuey18IC19XG5tYXA0IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gdmFsdWUpIC0+IE1heWJlIGEgLT4gTWF5YmUgYiAtPiBNYXliZSBjIC0+IE1heWJlIGQgLT4gTWF5YmUgdmFsdWVcbm1hcDQgZnVuYyBtYSBtYiBtYyBtZCA9XG4gICAgd2hlbiBtYSBpc1xuICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgSnVzdCBhIC0+XG4gICAgICAgICAgICB3aGVuIG1iIGlzXG4gICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICBKdXN0IGIgLT5cbiAgICAgICAgICAgICAgICAgICAgd2hlbiBtYyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBjIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBkIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IChmdW5jIGEgYiBjIGQpXG5cblxuey18IC19XG5tYXA1IDogKGEgLT4gYiAtPiBjIC0+IGQgLT4gZSAtPiB2YWx1ZSkgLT4gTWF5YmUgYSAtPiBNYXliZSBiIC0+IE1heWJlIGMgLT4gTWF5YmUgZCAtPiBNYXliZSBlIC0+IE1heWJlIHZhbHVlXG5tYXA1IGZ1bmMgbWEgbWIgbWMgbWQgbWUgPVxuICAgIHdoZW4gbWEgaXNcbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgd2hlbiBtYiBpc1xuICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgSnVzdCBiIC0+XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gbWMgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgYyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gbWQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgZCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiBtZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBlIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3QgKGZ1bmMgYSBiIGMgZCBlKVxuXG5cbnstfCBSZXR1cm5zIGBOb3RoaW5nYCBpZiB0aGUgY29udGFpbmVkIHZhbHVlIGRvZXNuJ3QgcGFzcyB0aGUgZ2l2ZW5cbnRlc3QuXG5cbiAgICBrZWVwSWYgaXNPZGQgKEp1c3QgNSkgPT0gSnVzdCA1XG5cbiAgICBrZWVwSWYgaXNPZGQgKEp1c3QgMikgPT0gTm90aGluZ1xuXG4tfVxua2VlcElmIDogKGEgLT4gQm9vbCkgLT4gTWF5YmUgYSAtPiBNYXliZSBhXG5rZWVwSWYgdGVzdCBtYXliZSA9XG4gICAgd2hlbiBtYXliZSBpc1xuICAgICAgICBKdXN0IGNvbnRhaW5lZCAtPlxuICAgICAgICAgICAgaWYgdGVzdCBjb250YWluZWQgdGhlblxuICAgICAgICAgICAgICAgIG1heWJlXG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBOb3RoaW5nXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgTm90aGluZ1xuXG5cbnstfCBDaGFpbiB0b2dldGhlciBtYW55IGNvbXB1dGF0aW9ucyB0aGF0IG1heSBmYWlsLiBJdCBpcyBoZWxwZnVsIHRvIHNlZSBpdHNcbmRlZmluaXRpb246XG5cbiAgICBhbmRUaGVuIDogKGEgLT4gTWF5YmUgYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG4gICAgYW5kVGhlbiBjYWxsYmFjayBtYXliZSA9XG4gICAgICAgIHdoZW4gbWF5YmUgaXNcbiAgICAgICAgICAgIEp1c3QgdmFsdWUgLT5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgICAgICBOb3RoaW5nIC0+XG4gICAgICAgICAgICAgICAgTm90aGluZ1xuXG5UaGlzIG1lYW5zIHdlIG9ubHkgY29udGludWUgd2l0aCB0aGUgY2FsbGJhY2sgaWYgdGhpbmdzIGFyZSBnb2luZyB3ZWxsLiBGb3JcbmV4YW1wbGUsIHNheSB5b3UgbmVlZCB0byBwYXJzZSBzb21lIHVzZXIgaW5wdXQgYXMgYSBtb250aDpcblxuICAgIHBhcnNlTW9udGggOiBTdHJpbmcgLT4gTWF5YmUgSW50XG4gICAgcGFyc2VNb250aCB1c2VySW5wdXQgPVxuICAgICAgICBTdHJpbmcudG9JbnQgdXNlcklucHV0XG4gICAgICAgICAgICB8PiBhbmRUaGVuIHRvVmFsaWRNb250aFxuXG4gICAgdG9WYWxpZE1vbnRoIDogSW50IC0+IE1heWJlIEludFxuICAgIHRvVmFsaWRNb250aCBtb250aCA9XG4gICAgICAgIGlmIDEgPD0gbW9udGggJiYgbW9udGggPD0gMTIgdGhlblxuICAgICAgICAgICAgSnVzdCBtb250aFxuXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE5vdGhpbmdcblxuSW4gdGhlIGBwYXJzZU1vbnRoYCBmdW5jdGlvbiwgaWYgYFN0cmluZy50b0ludGAgcHJvZHVjZXMgYE5vdGhpbmdgIChiZWNhdXNlXG50aGUgYHVzZXJJbnB1dGAgd2FzIG5vdCBhbiBpbnRlZ2VyKSB0aGlzIGVudGlyZSBjaGFpbiBvZiBvcGVyYXRpb25zIHdpbGxcbnNob3J0LWNpcmN1aXQgYW5kIHJlc3VsdCBpbiBgTm90aGluZ2AuIElmIGB0b1ZhbGlkTW9udGhgIHJlc3VsdHMgaW4gYE5vdGhpbmdgLFxuYWdhaW4gdGhlIGNoYWluIG9mIGNvbXB1dGF0aW9ucyB3aWxsIHJlc3VsdCBpbiBgTm90aGluZ2AuXG5cbi19XG5hbmRUaGVuIDogKGEgLT4gTWF5YmUgYikgLT4gTWF5YmUgYSAtPiBNYXliZSBiXG5hbmRUaGVuIGNhbGxiYWNrIG1heWJlVmFsdWUgPVxuICAgIHdoZW4gbWF5YmVWYWx1ZSBpc1xuICAgICAgICBKdXN0IHZhbHVlIC0+XG4gICAgICAgICAgICBjYWxsYmFjayB2YWx1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIE5vdGhpbmdcblxuXG5cbi0tIEZPUiBJTlRFUk5BTCBVU0UgT05MWVxuLS1cbi0tIFVzZSBgd2hlbmAgZXhwcmVzc2lvbnMgZm9yIHRoaXMgaW4gR3JlbiBjb2RlIVxuXG5cbmlzSnVzdCA6IE1heWJlIGEgLT4gQm9vbFxuaXNKdXN0IG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgXyAtPlxuICAgICAgICAgICAgVHJ1ZVxuXG4gICAgICAgIE5vdGhpbmcgLT5cbiAgICAgICAgICAgIEZhbHNlXG5cblxuZGVzdHJ1Y3QgOiBiIC0+IChhIC0+IGIpIC0+IE1heWJlIGEgLT4gYlxuZGVzdHJ1Y3QgZGVmYXVsdCBmdW5jIG1heWJlID1cbiAgICB3aGVuIG1heWJlIGlzXG4gICAgICAgIEp1c3QgYSAtPlxuICAgICAgICAgICAgZnVuYyBhXG5cbiAgICAgICAgTm90aGluZyAtPlxuICAgICAgICAgICAgZGVmYXVsdFxuIiwKICAgICAgICAibW9kdWxlIE1hdGggZXhwb3NpbmdcbiAgICAoIHJvdW5kLCBmbG9vciwgY2VpbGluZywgdHJ1bmNhdGVcbiAgICAsIG1vZEJ5LCByZW1haW5kZXJCeSwgYWJzLCBzcXJ0LCBsb2dCYXNlXG4gICAgLCBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcbiAgICAsIGRlZ3JlZXMsIHJhZGlhbnMsIHR1cm5zXG4gICAgLCBjb3MsIHNpbiwgdGFuLCBhY29zLCBhc2luLCBhdGFuLCBhdGFuMlxuICAgIClcblxuey18IEZ1bmN0aW9ucyBmb3IgZG9pbmcgbWF0aFxuXG5AZG9jcyByb3VuZCwgZmxvb3IsIGNlaWxpbmcsIHRydW5jYXRlLCBtb2RCeSwgcmVtYWluZGVyQnksIGFicywgc3FydCwgbG9nQmFzZVxuXG5cbiMjIENvbnN0YW50c1xuXG5AZG9jcyBlLCBwaSwgbWF4U2FmZUludGVnZXIsIG1pblNhZmVJbnRlZ2VyLCBtYXhGbG9hdCwgbWluRmxvYXRcblxuXG4jIyBBbmdsZXNcblxuQGRvY3MgZGVncmVlcywgcmFkaWFucywgdHVybnNcblxuXG4jIyBUcmlnb25vbWV0cnlcblxuQGRvY3MgY29zLCBzaW4sIHRhbiwgYWNvcywgYXNpbiwgYXRhbiwgYXRhbjJcblxuXG4tfVxuXG5pbXBvcnQgQmFzaWNzIGV4cG9zaW5nIChJbnQsIEZsb2F0LCAoPT0pLCAoLyksICgqKSwgKDwpKVxuaW1wb3J0IEdyZW4uS2VybmVsLk1hdGhcblxuXG57LXwgUm91bmQgYSBudW1iZXIgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci5cblxuICAgIHJvdW5kIDEuMCA9PSAxXG5cbiAgICByb3VuZCAxLjIgPT0gMVxuXG4gICAgcm91bmQgMS41ID09IDJcblxuICAgIHJvdW5kIDEuOCA9PSAyXG5cbiAgICByb3VuZCAtMS4yID09IC0xXG5cbiAgICByb3VuZCAtMS41ID09IC0xXG5cbiAgICByb3VuZCAtMS44ID09IC0yXG5cbi19XG5yb3VuZCA6IEZsb2F0IC0+IEludFxucm91bmQgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucm91bmRcblxuXG57LXwgRmxvb3IgZnVuY3Rpb24sIHJvdW5kaW5nIGRvd24uXG5cbiAgICBmbG9vciAxLjAgPT0gMVxuXG4gICAgZmxvb3IgMS4yID09IDFcblxuICAgIGZsb29yIDEuNSA9PSAxXG5cbiAgICBmbG9vciAxLjggPT0gMVxuXG4gICAgZmxvb3IgLTEuMiA9PSAtMlxuXG4gICAgZmxvb3IgLTEuNSA9PSAtMlxuXG4gICAgZmxvb3IgLTEuOCA9PSAtMlxuXG4tfVxuZmxvb3IgOiBGbG9hdCAtPiBJbnRcbmZsb29yID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmZsb29yXG5cblxuey18IENlaWxpbmcgZnVuY3Rpb24sIHJvdW5kaW5nIHVwLlxuXG4gICAgY2VpbGluZyAxLjAgPT0gMVxuXG4gICAgY2VpbGluZyAxLjIgPT0gMlxuXG4gICAgY2VpbGluZyAxLjUgPT0gMlxuXG4gICAgY2VpbGluZyAxLjggPT0gMlxuXG4gICAgY2VpbGluZyAtMS4yID09IC0xXG5cbiAgICBjZWlsaW5nIC0xLjUgPT0gLTFcblxuICAgIGNlaWxpbmcgLTEuOCA9PSAtMVxuXG4tfVxuY2VpbGluZyA6IEZsb2F0IC0+IEludFxuY2VpbGluZyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5jZWlsaW5nXG5cblxuey18IFRydW5jYXRlIGEgbnVtYmVyLCByb3VuZGluZyB0b3dhcmRzIHplcm8uXG5cbiAgICB0cnVuY2F0ZSAxLjAgPT0gMVxuXG4gICAgdHJ1bmNhdGUgMS4yID09IDFcblxuICAgIHRydW5jYXRlIDEuNSA9PSAxXG5cbiAgICB0cnVuY2F0ZSAxLjggPT0gMVxuXG4gICAgdHJ1bmNhdGUgLTEuMiA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuNSA9PSAtMVxuXG4gICAgdHJ1bmNhdGUgLTEuOCA9PSAtMVxuXG4tfVxudHJ1bmNhdGUgOiBGbG9hdCAtPiBJbnRcbnRydW5jYXRlID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLnRydW5jYXRlXG5cblxuey18IFBlcmZvcm0gW21vZHVsYXIgYXJpdGhtZXRpY10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxhcl9hcml0aG1ldGljKS5cbkEgY29tbW9uIHRyaWNrIGlzIHRvIHVzZSAobiBtb2QgMikgdG8gZGV0ZWN0IGV2ZW4gYW5kIG9kZCBudW1iZXJzOlxuXG4gICAgbW9kQnkgMiAwID09IDBcblxuICAgIG1vZEJ5IDIgMSA9PSAxXG5cbiAgICBtb2RCeSAyIDIgPT0gMFxuXG4gICAgbW9kQnkgMiAzID09IDFcblxuT3VyIGBtb2RCeWAgZnVuY3Rpb24gd29ya3MgaW4gdGhlIHR5cGljYWwgbWF0aGVtYXRpY2FsIHdheSB3aGVuIHlvdSBydW4gaW50b1xubmVnYXRpdmUgbnVtYmVyczpcblxuICAgIExpc3QubWFwIChtb2RCeSA0KSBbIC01LCAtNCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICA0LCAgNSBdXG4gICAgLS0gICAgICAgICAgICAgICAgIFsgIDMsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEsICAyLCAgMywgIDAsICAxIF1cblxuVXNlIFtgcmVtYWluZGVyQnlgXSgjcmVtYWluZGVyQnkpIGZvciBhIGRpZmZlcmVudCB0cmVhdG1lbnQgb2YgbmVnYXRpdmUgbnVtYmVycyxcbm9yIHJlYWQgRGFhbiBMZWlqZW7igJlzIFtEaXZpc2lvbiBhbmQgTW9kdWx1cyBmb3IgQ29tcHV0ZXIgU2NpZW50aXN0c11bZG1dIGZvciBtb3JlXG5pbmZvcm1hdGlvbi5cblxuW2RtXTogaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbS9lbi11cy9yZXNlYXJjaC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wMi9kaXZtb2Rub3RlLWxldHRlci5wZGZcblxuLX1cbm1vZEJ5IDogSW50IC0+IEludCAtPiBJbnRcbm1vZEJ5ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1vZEJ5XG5cblxuey18IEdldCB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlzaW9uLiBIZXJlIGFyZSBidW5jaCBvZiBleGFtcGxlcyBvZiBkaXZpZGluZyBieSBmb3VyOlxuXG4gICAgTGlzdC5tYXAgKHJlbWFpbmRlckJ5IDQpIFsgLTUsIC00LCAtMywgLTIsIC0xLCAgMCwgIDEsICAyLCAgMywgIDQsICA1IF1cbiAgICAtLSAgICAgICAgICAgICAgICAgICAgICAgWyAtMSwgIDAsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgMCwgIDEgXVxuXG5Vc2UgW2Btb2RCeWBdKCNtb2RCeSkgZm9yIGEgZGlmZmVyZW50IHRyZWF0bWVudCBvZiBuZWdhdGl2ZSBudW1iZXJzLFxub3IgcmVhZCBEYWFuIExlaWplbuKAmXMgW0RpdmlzaW9uIGFuZCBNb2R1bHVzIGZvciBDb21wdXRlciBTY2llbnRpc3RzXVtkbV0gZm9yIG1vcmVcbmluZm9ybWF0aW9uLlxuXG5bZG1dOiBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxuXG4tfVxucmVtYWluZGVyQnkgOiBJbnQgLT4gSW50IC0+IEludFxucmVtYWluZGVyQnkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucmVtYWluZGVyQnlcblxuXG57LXwgR2V0IHRoZSBbYWJzb2x1dGUgdmFsdWVdW2Fic10gb2YgYSBudW1iZXIuXG5cbiAgICBhYnMgMTYgPT0gMTZcblxuICAgIGFicyAtNCA9PSA0XG5cbiAgICBhYnMgLTguNSA9PSA4LjVcblxuICAgIGFicyAzLjE0ID09IDMuMTRcblxuW2Fic106IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Fic29sdXRlX3ZhbHVlXG5cbi19XG5hYnMgOiBudW1iZXIgLT4gbnVtYmVyXG5hYnMgbiA9XG4gICAgaWYgbiA8IDAgdGhlblxuICAgICAgICAtblxuXG4gICAgZWxzZVxuICAgICAgICBuXG5cbnstfCBUYWtlIHRoZSBzcXVhcmUgcm9vdCBvZiBhIG51bWJlci5cblxuICAgIHNxcnQgNCA9PSAyXG5cbiAgICBzcXJ0IDkgPT0gM1xuXG4gICAgc3FydCAxNiA9PSA0XG5cbiAgICBzcXJ0IDI1ID09IDVcblxuLX1cbnNxcnQgOiBGbG9hdCAtPiBGbG9hdFxuc3FydCA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5zcXJ0XG5cblxuey18IENhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIG9mIGEgbnVtYmVyIHdpdGggYSBnaXZlbiBiYXNlLlxuXG4gICAgbG9nQmFzZSAxMCAxMDAgPT0gMlxuXG4gICAgbG9nQmFzZSAyIDI1NiA9PSA4XG5cbi19XG5sb2dCYXNlIDogRmxvYXQgLT4gRmxvYXQgLT4gRmxvYXRcbmxvZ0Jhc2UgYmFzZSBudW1iZXIgPVxuICAgIGlmIGJhc2UgPT0gMTAgdGhlblxuICAgICAgICBHcmVuLktlcm5lbC5NYXRoLmxvZzEwIG51bWJlclxuXG4gICAgZWxzZVxuICAgICAgICAoR3Jlbi5LZXJuZWwuTWF0aC5sb2cgbnVtYmVyKSAvIChHcmVuLktlcm5lbC5NYXRoLmxvZyBiYXNlKVxuXG5cbi0tIEFOR0xFU1xuXG5cbnstfCBDb252ZXJ0IHJhZGlhbnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgcmFkaWFucyBwaSA9PSAzLjE0MTU5MjY1MzU4OTc5M1xuXG4tfVxucmFkaWFucyA6IEZsb2F0IC0+IEZsb2F0XG5yYWRpYW5zIGFuZ2xlSW5SYWRpYW5zID1cbiAgICBhbmdsZUluUmFkaWFuc1xuXG5cbnstfCBDb252ZXJ0IGRlZ3JlZXMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLlxuXG4gICAgZGVncmVlcyAxODAgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbmRlZ3JlZXMgOiBGbG9hdCAtPiBGbG9hdFxuZGVncmVlcyBhbmdsZUluRGVncmVlcyA9XG4gICAgKGFuZ2xlSW5EZWdyZWVzICogcGkpIC8gMTgwXG5cblxuey18IENvbnZlcnQgdHVybnMgdG8gc3RhbmRhcmQgR3JlbiBhbmdsZXMgKHJhZGlhbnMpLiBPbmUgdHVybiBpcyBlcXVhbCB0byAzNjDCsC5cblxuICAgIHR1cm5zICgxIC8gMikgPT0gMy4xNDE1OTI2NTM1ODk3OTNcblxuLX1cbnR1cm5zIDogRmxvYXQgLT4gRmxvYXRcbnR1cm5zIGFuZ2xlSW5UdXJucyA9XG4gICAgKDIgKiBwaSkgKiBhbmdsZUluVHVybnNcblxuXG4tLSBDT05TVEFOVFNcblxuXG57LXwgQW4gYXBwcm94aW1hdGlvbiBvZiBlLlxuLX1cbmUgOiBGbG9hdFxuZSA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5lXG5cblxuey18IEFuIGFwcHJveGltYXRpb24gb2YgcGkuXG4tfVxucGkgOiBGbG9hdFxucGkgPVxuICAgIEdyZW4uS2VybmVsLk1hdGgucGlcblxuXG57LXwgVGhlIGxhcmdlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBhYm92ZSB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1heFNhZmVJbnRlZ2VyIDogSW50XG5tYXhTYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5tYXhTYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgc21hbGxlc3QgaW50ZWdlciB2YWx1ZSB0aGF0IGNhbiBiZSBleGFjdGx5IHJlcHJlc2VudGVkIGFuZCBjb21wYXJlZCBpbiBhIEphdmFTY3JpcHQgZW52aXJvbm1lbnQuXG5JbnRlZ2VycyBiZWxvdyB0aGlzIHZhbHVlIG1heSBub3Qgd29yayBhcyB5b3UgZXhwZWN0LlxuLX1cbm1pblNhZmVJbnRlZ2VyIDogSW50XG5taW5TYWZlSW50ZWdlciA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5taW5TYWZlSW50ZWdlclxuXG5cbnstfCBUaGUgbGFyZ2VzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1heEZsb2F0IDogRmxvYXRcbm1heEZsb2F0ID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLm1heEZsb2F0XG5cblxuey18IFRoZSBzbWFsbGVzdCBgRmxvYXRgIHZhbHVlLlxuLX1cbm1pbkZsb2F0IDogRmxvYXRcbm1pbkZsb2F0ID1cbiAgICAtbWF4RmxvYXRcblxuXG4tLSBUUklHT05PTUVUUllcblxuXG57LXwgRmlndXJlIG91dCB0aGUgY29zaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBjb3MgKGRlZ3JlZXMgNjApID09IDAuNTAwMDAwMDAwMDAwMDAwMVxuXG4gICAgY29zICh0dXJucyAoMSAvIDYpKSA9PSAwLjUwMDAwMDAwMDAwMDAwMDFcblxuICAgIGNvcyAocmFkaWFucyAocGkgLyAzKSkgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbiAgICBjb3MgKHBpIC8gMykgPT0gMC41MDAwMDAwMDAwMDAwMDAxXG5cbi19XG5jb3MgOiBGbG9hdCAtPiBGbG9hdFxuY29zID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmNvc1xuXG5cbnstfCBGaWd1cmUgb3V0IHRoZSBzaW5lIGdpdmVuIGFuIGFuZ2xlIGluIHJhZGlhbnMuXG5cbiAgICBzaW4gKGRlZ3JlZXMgMzApID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAodHVybnMgKDEgLyAxMikpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuICAgIHNpbiAocmFkaWFucyAocGkgLyA2KSkgPT0gMC40OTk5OTk5OTk5OTk5OTk5NFxuXG4gICAgc2luIChwaSAvIDYpID09IDAuNDk5OTk5OTk5OTk5OTk5OTRcblxuLX1cbnNpbiA6IEZsb2F0IC0+IEZsb2F0XG5zaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguc2luXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIHRhbmdlbnQgZ2l2ZW4gYW4gYW5nbGUgaW4gcmFkaWFucy5cblxuICAgIHRhbiAoZGVncmVlcyA0NSkgPT0gMC45OTk5OTk5OTk5OTk5OTk5XG5cbiAgICB0YW4gKHR1cm5zICgxIC8gOCkpID09IDAuOTk5OTk5OTk5OTk5OTk5OVxuXG4gICAgdGFuIChyYWRpYW5zIChwaSAvIDQpKSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuICAgIHRhbiAocGkgLyA0KSA9PSAwLjk5OTk5OTk5OTk5OTk5OTlcblxuLX1cbnRhbiA6IEZsb2F0IC0+IEZsb2F0XG50YW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGgudGFuXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY2Nvc2luZSBmb3IgYGFkamFjZW50IC8gaHlwb3RlbnVzZWAgaW4gcmFkaWFuczpcblxuICAgIGFjb3MgKDEgLyAyKSA9PSAxLjA0NzE5NzU1MTE5NjU5NzkgLS0gNjDCsCBvciBwaS8zIHJhZGlhbnNcblxuLX1cbmFjb3MgOiBGbG9hdCAtPiBGbG9hdFxuYWNvcyA9XG4gICAgR3Jlbi5LZXJuZWwuTWF0aC5hY29zXG5cblxuey18IEZpZ3VyZSBvdXQgdGhlIGFyY3NpbmUgZm9yIGBvcHBvc2l0ZSAvIGh5cG90ZW51c2VgIGluIHJhZGlhbnM6XG5cbiAgICBhc2luICgxIC8gMikgPT0gMC41MjM1OTg3NzU1OTgyOTg5IC0tIDMwwrAgb3IgcGkvNiByYWRpYW5zXG5cbi19XG5hc2luIDogRmxvYXQgLT4gRmxvYXRcbmFzaW4gPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXNpblxuXG5cbnstfCBUaGlzIGhlbHBzIHlvdSBmaW5kIHRoZSBhbmdsZSAoaW4gcmFkaWFucykgdG8gYW4gYCh4LHkpYCBjb29yZGluYXRlLCBidXRcbmluIGEgd2F5IHRoYXQgaXMgcmFyZWx5IHVzZWZ1bCBpbiBwcm9ncmFtbWluZy4gKipZb3UgcHJvYmFibHkgd2FudFxuW2BhdGFuMmBdKCNhdGFuMikgaW5zdGVhZCEqKlxuXG5UaGlzIHZlcnNpb24gdGFrZXMgYHkveGAgYXMgaXRzIGFyZ3VtZW50LCBzbyB0aGVyZSBpcyBubyB3YXkgdG8ga25vdyB3aGV0aGVyXG50aGUgbmVnYXRpdmUgc2lnbnMgY29tZXMgZnJvbSB0aGUgYHlgIG9yIGB4YCB2YWx1ZS4gU28gYXMgd2UgZ28gY291bnRlci1jbG9ja3dpc2VcbmFyb3VuZCB0aGUgb3JpZ2luIGZyb20gcG9pbnQgYCgxLDEpYCB0byBgKDEsLTEpYCB0byBgKC0xLC0xKWAgdG8gYCgtMSwxKWAgd2UgZG9cbm5vdCBnZXQgYW5nbGVzIHRoYXQgZ28gaW4gdGhlIGZ1bGwgY2lyY2xlOlxuXG4gICAgYXRhbiAoMSAvIDEpID09IDAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAgNDXCsCBvciAgIHBpLzQgcmFkaWFuc1xuXG4gICAgYXRhbiAoMSAvIC0xKSA9PSAtMC43ODUzOTgxNjMzOTc0NDgzIC0tIDMxNcKwIG9yIDcqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuICgtMSAvIC0xKSA9PSAwLjc4NTM5ODE2MzM5NzQ0ODMgLS0gIDQ1wrAgb3IgICBwaS80IHJhZGlhbnNcblxuICAgIGF0YW4gKC0xIC8gMSkgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG5Ob3RpY2UgdGhhdCBldmVyeXRoaW5nIGlzIGJldHdlZW4gYHBpLzJgIGFuZCBgLXBpLzJgLiBUaGF0IGlzIHByZXR0eSB1c2VsZXNzXG5mb3IgZmlndXJpbmcgb3V0IGFuZ2xlcyBpbiBhbnkgc29ydCBvZiB2aXN1YWxpemF0aW9uLCBzbyBhZ2FpbiwgY2hlY2sgb3V0XG5bYGF0YW4yYF0oI2F0YW4yKSBpbnN0ZWFkIVxuXG4tfVxuYXRhbiA6IEZsb2F0IC0+IEZsb2F0XG5hdGFuID1cbiAgICBHcmVuLktlcm5lbC5NYXRoLmF0YW5cblxuXG57LXwgVGhpcyBoZWxwcyB5b3UgZmluZCB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHRvIGFuIGAoeCx5KWAgY29vcmRpbmF0ZS5cblNvIHJhdGhlciB0aGFuIHNheWluZyBgYXRhbiAoeS94KWAgeW91IHNheSBgYXRhbjIgeSB4YCBhbmQgeW91IGNhbiBnZXQgYSBmdWxsXG5yYW5nZSBvZiBhbmdsZXM6XG5cbiAgICBhdGFuMiAxIDEgPT0gMC43ODUzOTgxNjMzOTc0NDgzIC0tICA0NcKwIG9yICAgcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAxIC0xID09IDIuMzU2MTk0NDkwMTkyMzQ1IC0tIDEzNcKwIG9yIDMqcGkvNCByYWRpYW5zXG5cbiAgICBhdGFuMiAtMSAtMSA9PSAtMi4zNTYxOTQ0OTAxOTIzNDUgLS0gMjI1wrAgb3IgNSpwaS80IHJhZGlhbnNcblxuICAgIGF0YW4yIC0xIDEgPT0gLTAuNzg1Mzk4MTYzMzk3NDQ4MyAtLSAzMTXCsCBvciA3KnBpLzQgcmFkaWFuc1xuXG4tfVxuYXRhbjIgOiBGbG9hdCAtPiBGbG9hdCAtPiBGbG9hdFxuYXRhbjIgPVxuICAgIEdyZW4uS2VybmVsLk1hdGguYXRhbjJcbiIsCiAgICAgICAgIm1vZHVsZSBIdG1sLktleWVkIGV4cG9zaW5nXG4gICggbm9kZVxuICAsIG9sXG4gICwgdWxcbiAgKVxuXG5cbnstfCBBIGtleWVkIG5vZGUgaGVscHMgb3B0aW1pemUgY2FzZXMgd2hlcmUgY2hpbGRyZW4gYXJlIGdldHRpbmcgYWRkZWQsIG1vdmVkLFxucmVtb3ZlZCwgZXRjLiBDb21tb24gZXhhbXBsZXMgaW5jbHVkZTpcblxuICAtIFRoZSB1c2VyIGNhbiBkZWxldGUgaXRlbXMgZnJvbSBhIGxpc3QuXG4gIC0gVGhlIHVzZXIgY2FuIGNyZWF0ZSBuZXcgaXRlbXMgaW4gYSBsaXN0LlxuICAtIFlvdSBjYW4gc29ydCBhIGxpc3QgYmFzZWQgb24gbmFtZSBvciBkYXRlIG9yIHdoYXRldmVyLlxuXG5XaGVuIHlvdSB1c2UgYSBrZXllZCBub2RlLCBldmVyeSBjaGlsZCBpcyBwYWlyZWQgd2l0aCBhIHN0cmluZyBpZGVudGlmaWVyLiBUaGlzXG5tYWtlcyBpdCBwb3NzaWJsZSBmb3IgdGhlIHVuZGVybHlpbmcgZGlmZmluZyBhbGdvcml0aG0gdG8gcmV1c2Ugbm9kZXMgbW9yZVxuZWZmaWNpZW50bHkuXG5cbiMjIEtleWVkIE5vZGVzXG5AZG9jcyBub2RlXG5cbiMjIENvbW1vbmx5IEtleWVkIE5vZGVzXG5AZG9jcyBvbCwgdWxcbi19XG5cblxuaW1wb3J0IEh0bWwgZXhwb3NpbmcgKEF0dHJpYnV0ZSwgSHRtbClcbmltcG9ydCBWaXJ0dWFsRG9tXG5cblxuey18IFdvcmtzIGp1c3QgbGlrZSBgSHRtbC5ub2RlYCwgYnV0IHlvdSBhZGQgYSB1bmlxdWUgaWRlbnRpZmllciB0byBlYWNoIGNoaWxkXG5ub2RlLiBZb3Ugd2FudCB0aGlzIHdoZW4geW91IGhhdmUgYSBsaXN0IG9mIG5vZGVzIHRoYXQgaXMgY2hhbmdpbmc6IGFkZGluZ1xubm9kZXMsIHJlbW92aW5nIG5vZGVzLCBldGMuIEluIHRoZXNlIGNhc2VzLCB0aGUgdW5pcXVlIGlkZW50aWZpZXJzIGhlbHAgbWFrZVxudGhlIERPTSBtb2RpZmljYXRpb25zIG1vcmUgZWZmaWNpZW50LlxuLX1cbm5vZGUgOiBTdHJpbmcgLT4gQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfSAtPiBIdG1sIG1zZ1xubm9kZSA9XG4gIFZpcnR1YWxEb20ua2V5ZWROb2RlXG5cblxuey18LX1cbm9sIDogQXJyYXkgKEF0dHJpYnV0ZSBtc2cpIC0+IEFycmF5IHsga2V5IDogU3RyaW5nLCBub2RlIDogSHRtbCBtc2cgfSAtPiBIdG1sIG1zZ1xub2wgPVxuICBub2RlIFwib2xcIlxuXG5cbnstfC19XG51bCA6IEFycmF5IChBdHRyaWJ1dGUgbXNnKSAtPiBBcnJheSB7IGtleSA6IFN0cmluZywgbm9kZSA6IEh0bWwgbXNnIH0gLT4gSHRtbCBtc2dcbnVsID1cbiAgbm9kZSBcInVsXCJcbiIsCiAgICAgICAgIm1vZHVsZSBQcmVzaWRlbnRzIGV4cG9zaW5nIChNb2RlbCwgTXNnKC4uKSwgUGVyc29uLCBjb25maWcsIGluaXQsIG1haW4sIHByZXNpZGVudHMsIHVwZGF0ZSwgdmlldylcblxuaW1wb3J0IEJyb3dzZXJcbmltcG9ydCBEYXRhVGFibGUgYXMgVGFibGVcbmltcG9ydCBIdG1sIGV4cG9zaW5nIChIdG1sLCBkaXYsIGgxLCBpbnB1dCwgbGksIHRleHQsIHVsKVxuaW1wb3J0IEh0bWwuQXR0cmlidXRlcyBleHBvc2luZyAocGxhY2Vob2xkZXIpXG5pbXBvcnQgSHRtbC5FdmVudHMgZXhwb3NpbmcgKG9uSW5wdXQpXG5cblxubWFpbiA6IFByb2dyYW0ge30gTW9kZWwgTXNnXG5tYWluID1cbiAgICBCcm93c2VyLmVsZW1lbnRcbiAgICAgICAgeyBpbml0ID0gXFx7fSAtPiBpbml0IHByZXNpZGVudHNcbiAgICAgICAgLCB1cGRhdGUgPSB1cGRhdGVcbiAgICAgICAgLCB2aWV3ID0gdmlld1xuICAgICAgICAsIHN1YnNjcmlwdGlvbnMgPSBcXF8gLT4gU3ViLm5vbmVcbiAgICAgICAgfVxuXG5cblxuLS0gTU9ERUxcblxuXG50eXBlIGFsaWFzIE1vZGVsID1cbiAgICB7IHBlb3BsZSA6IEFycmF5IFBlcnNvblxuICAgICwgdGFibGVTdGF0ZSA6IFRhYmxlLlN0YXRlXG4gICAgLCBxdWVyeSA6IFN0cmluZ1xuICAgIH1cblxuXG5pbml0IDogQXJyYXkgUGVyc29uIC0+IHsgbW9kZWwgOiBNb2RlbCwgY29tbWFuZCA6IENtZCBNc2cgfVxuaW5pdCBwZW9wbGUgPVxuICAgIGxldFxuICAgICAgICBtb2RlbCA9XG4gICAgICAgICAgICB7IHBlb3BsZSA9IHBlb3BsZVxuICAgICAgICAgICAgLCB0YWJsZVN0YXRlID0gVGFibGUuaW5pdGlhbFNvcnQgXCJTdGF0ZVwiXG4gICAgICAgICAgICAsIHF1ZXJ5ID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgIGluXG4gICAgeyBtb2RlbCA9IG1vZGVsLCBjb21tYW5kID0gQ21kLm5vbmUgfVxuXG5cblxuLS0gVVBEQVRFXG5cblxudHlwZSBNc2dcbiAgICA9IFNldFF1ZXJ5IFN0cmluZ1xuICAgIHwgU2V0VGFibGVTdGF0ZSBUYWJsZS5TdGF0ZVxuXG5cbnVwZGF0ZSA6IE1zZyAtPiBNb2RlbCAtPiB7IG1vZGVsIDogTW9kZWwsIGNvbW1hbmQgOiBDbWQgTXNnIH1cbnVwZGF0ZSBtc2cgbW9kZWwgPVxuICAgIHdoZW4gbXNnIGlzXG4gICAgICAgIFNldFF1ZXJ5IG5ld1F1ZXJ5IC0+XG4gICAgICAgICAgICB7IG1vZGVsID0geyBtb2RlbCB8IHF1ZXJ5ID0gbmV3UXVlcnkgfVxuICAgICAgICAgICAgLCBjb21tYW5kID0gQ21kLm5vbmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICBTZXRUYWJsZVN0YXRlIG5ld1N0YXRlIC0+XG4gICAgICAgICAgICB7IG1vZGVsID0geyBtb2RlbCB8IHRhYmxlU3RhdGUgPSBuZXdTdGF0ZSB9XG4gICAgICAgICAgICAsIGNvbW1hbmQgPSBDbWQubm9uZVxuICAgICAgICAgICAgfVxuXG5cblxuLS0gVklFV1xuXG5cbnZpZXcgOiBNb2RlbCAtPiBIdG1sIE1zZ1xudmlldyB7IHBlb3BsZSwgdGFibGVTdGF0ZSwgcXVlcnkgfSA9XG4gICAgbGV0XG4gICAgICAgIGxvd2VyUXVlcnkgPVxuICAgICAgICAgICAgU3RyaW5nLnRvTG93ZXIgcXVlcnlcblxuICAgICAgICBhY2NlcHRhYmxlUGVvcGxlID1cbiAgICAgICAgICAgIEFycmF5LmtlZXBJZiAoU3RyaW5nLmNvbnRhaW5zIGxvd2VyUXVlcnkgPDwgU3RyaW5nLnRvTG93ZXIgPDwgLm5hbWUpIHBlb3BsZVxuICAgIGluXG4gICAgZGl2IFtdXG4gICAgICAgIFsgaDEgW10gWyB0ZXh0IFwiQmlydGhwbGFjZXMgb2YgVS5TLiBQcmVzaWRlbnRzXCIgXVxuICAgICAgICAsIHVsIFtdXG4gICAgICAgICAgICBbIGxpIFtdIFsgdGV4dCBcIlNpbmdsZSBjbGljayBvbiBjb2x1bW4gaGVhZGVyIHRvIGFkZC9tb3ZlIHRoYXQgY29sdW1uIHRvIHRoZSBlbmQgb2YgdGhlIHNvcnQgb3JkZXIgKC4uLnRoZW4gc29ydCBieSBZZWFyKVwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiRG91YmxlIGNsaWNrIHRvIHJlc2V0IHRoZSBzb3J0IG9yZGVyIHRvIGp1c3QgdGhhdCBjb2x1bW4gKFNvcnQgYnkgTmFtZSkuXCIgXVxuICAgICAgICAgICAgLCBsaSBbXSBbIHRleHQgXCJJIGRvbid0IGxpa2UgdGhpcyB1c2VyIGludGVyYWN0aW9uLCBidXQgaXQgaXMsIHdoYXQgaXQgaXMgZm9yIG5vdy4gU3VnZ2VzdGlvbnMgZm9yIGNoYW5nZSB3ZWxjb21lLlwiIF1cbiAgICAgICAgICAgICwgbGkgW10gWyB0ZXh0IFwiSSdkIHByZWZlciB0byBtYWtlIHNob3J0IGNsaWNrIHJlc2V0IGFuZCBsb25nIGNsaWNrIGFkZCB0byBzb3J0IG9yZGVyLlwiIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgLCBkaXYgW10gW11cbiAgICAgICAgLCBpbnB1dCBbIHBsYWNlaG9sZGVyIFwiU2VhcmNoIGJ5IE5hbWVcIiwgb25JbnB1dCBTZXRRdWVyeSBdIFtdXG4gICAgICAgICwgVGFibGUudmlldyBjb25maWcgdGFibGVTdGF0ZSBhY2NlcHRhYmxlUGVvcGxlXG4gICAgICAgIF1cblxuXG5jb25maWcgOiBUYWJsZS5Db25maWcgUGVyc29uIE1zZ1xuY29uZmlnID1cbiAgICBUYWJsZS5jb25maWdcbiAgICAgICAgeyB0b0lkID0gLm5hbWVcbiAgICAgICAgLCB0b01zZyA9IFNldFRhYmxlU3RhdGVcbiAgICAgICAgLCBjb2x1bW5zID1cbiAgICAgICAgICAgIFsgVGFibGUuc3RyaW5nQ29sdW1uIFwiTmFtZVwiIC5uYW1lXG4gICAgICAgICAgICAsIFRhYmxlLmludENvbHVtbiBcIlllYXJcIiAueWVhclxuICAgICAgICAgICAgLCBUYWJsZS5zdHJpbmdDb2x1bW4gXCJDaXR5XCIgLmNpdHlcbiAgICAgICAgICAgICwgVGFibGUuc3RyaW5nQ29sdW1uIFwiU3RhdGVcIiAuc3RhdGVcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG5cblxuLS0gUEVPUExFXG5cblxudHlwZSBhbGlhcyBQZXJzb24gPVxuICAgIHsgbmFtZSA6IFN0cmluZ1xuICAgICwgeWVhciA6IEludFxuICAgICwgY2l0eSA6IFN0cmluZ1xuICAgICwgc3RhdGUgOiBTdHJpbmdcbiAgICB9XG5cblxucGVyc29uIG5hbWUgeWVhciBjaXR5IHN0YXRlID1cbiAgICB7IG5hbWUgPSBuYW1lLCB5ZWFyID0geWVhciwgY2l0eSA9IGNpdHksIHN0YXRlID0gc3RhdGUgfVxuXG5cbnByZXNpZGVudHMgOiBBcnJheSBQZXJzb25cbnByZXNpZGVudHMgPVxuICAgIFsgcGVyc29uIFwiR2VvcmdlIFdhc2hpbmd0b25cIiAxNzMyIFwiV2VzdG1vcmVsYW5kIENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSm9obiBBZGFtc1wiIDE3MzUgXCJCcmFpbnRyZWVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiVGhvbWFzIEplZmZlcnNvblwiIDE3NDMgXCJTaGFkd2VsbFwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgTWFkaXNvblwiIDE3NTEgXCJQb3J0IENvbndheVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgTW9ucm9lXCIgMTc1OCBcIk1vbnJvZSBIYWxsXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJBbmRyZXcgSmFja3NvblwiIDE3NjcgXCJXYXhoYXdzIFJlZ2lvblwiIFwiU291dGgvTm9ydGggQ2Fyb2xpbmFcIlxuICAgICwgcGVyc29uIFwiSm9obiBRdWluY3kgQWRhbXNcIiAxNzY3IFwiQnJhaW50cmVlXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gSGVucnkgSGFycmlzb25cIiAxNzczIFwiQ2hhcmxlcyBDaXR5IENvdW50eVwiIFwiVmlyZ2luaWFcIlxuICAgICwgcGVyc29uIFwiTWFydGluIFZhbiBCdXJlblwiIDE3ODIgXCJLaW5kZXJob29rXCIgXCJOZXcgWW9ya1wiXG4gICAgLCBwZXJzb24gXCJaYWNoYXJ5IFRheWxvclwiIDE3ODQgXCJCYXJib3Vyc3ZpbGxlXCIgXCJWaXJnaW5pYVwiXG4gICAgLCBwZXJzb24gXCJKb2huIFR5bGVyXCIgMTc5MCBcIkNoYXJsZXMgQ2l0eSBDb3VudHlcIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIkphbWVzIEJ1Y2hhbmFuXCIgMTc5MSBcIkNvdmUgR2FwXCIgXCJQZW5uc3lsdmFuaWFcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgSy4gUG9sa1wiIDE3OTUgXCJQaW5ldmlsbGVcIiBcIk5vcnRoIENhcm9saW5hXCJcbiAgICAsIHBlcnNvbiBcIk1pbGxhcmQgRmlsbG1vcmVcIiAxODAwIFwiU3VtbWVyaGlsbFwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiRnJhbmtsaW4gUGllcmNlXCIgMTgwNCBcIkhpbGxzYm9yb3VnaFwiIFwiTmV3IEhhbXBzaGlyZVwiXG4gICAgLCBwZXJzb24gXCJBbmRyZXcgSm9obnNvblwiIDE4MDggXCJSYWxlaWdoXCIgXCJOb3J0aCBDYXJvbGluYVwiXG4gICAgLCBwZXJzb24gXCJBYnJhaGFtIExpbmNvbG5cIiAxODA5IFwiU2lua2luZyBzcHJpbmdcIiBcIktlbnR1Y2t5XCJcbiAgICAsIHBlcnNvbiBcIlVseXNzZXMgUy4gR3JhbnRcIiAxODIyIFwiUG9pbnQgUGxlYXNhbnRcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiUnV0aGVyZm9yZCBCLiBIYXllc1wiIDE4MjIgXCJEZWxhd2FyZVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJDaGVzdGVyIEEuIEFydGh1clwiIDE4MjkgXCJGYWlyZmllbGRcIiBcIlZlcm1vbnRcIlxuICAgICwgcGVyc29uIFwiSmFtZXMgQS4gR2FyZmllbGRcIiAxODMxIFwiTW9yZWxhbmQgSGlsbHNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQmVuamFtaW4gSGFycmlzb25cIiAxODMzIFwiTm9ydGggQmVuZFwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJHcm92ZXIgQ2xldmVsYW5kXCIgMTgzNyBcIkNhbGR3ZWxsXCIgXCJOZXcgSmVyc2V5XCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gTWNLaW5sZXlcIiAxODQzIFwiTmlsZXNcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiV29vZHJvdyBXaWxzb25cIiAxODU2IFwiU3RhdW50b25cIiBcIlZpcmdpbmlhXCJcbiAgICAsIHBlcnNvbiBcIldpbGxpYW0gSG93YXJkIFRhZnRcIiAxODU3IFwiQ2luY2lubmF0aVwiIFwiT2hpb1wiXG4gICAgLCBwZXJzb24gXCJUaGVvZG9yZSBSb29zZXZlbHRcIiAxODU4IFwiTmV3IFlvcmsgQ2l0eVwiIFwiTmV3IFlvcmtcIlxuICAgICwgcGVyc29uIFwiV2FycmVuIEcuIEhhcmRpbmdcIiAxODY1IFwiQmxvb21pbmcgR3JvdmVcIiBcIk9oaW9cIlxuICAgICwgcGVyc29uIFwiQ2FsdmluIENvb2xpZGdlXCIgMTg3MiBcIlBseW1vdXRoXCIgXCJWZXJtb250XCJcbiAgICAsIHBlcnNvbiBcIkhlcmJlcnQgSG9vdmVyXCIgMTg3NCBcIldlc3QgQnJhbmNoXCIgXCJJb3dhXCJcbiAgICAsIHBlcnNvbiBcIkZyYW5rbGluIEQuIFJvb3NldmVsdFwiIDE4ODIgXCJIeWRlIFBhcmtcIiBcIk5ldyBZb3JrXCJcbiAgICAsIHBlcnNvbiBcIkhhcnJ5IFMuIFRydW1hblwiIDE4ODQgXCJMYW1hclwiIFwiTWlzc291cmlcIlxuICAgICwgcGVyc29uIFwiRHdpZ2h0IEQuIEVpc2VuaG93ZXJcIiAxODkwIFwiRGVuaXNvblwiIFwiVGV4YXNcIlxuICAgICwgcGVyc29uIFwiTHluZG9uIEIuIEpvaG5zb25cIiAxOTA4IFwiU3RvbmV3YWxsXCIgXCJUZXhhc1wiXG4gICAgLCBwZXJzb24gXCJSb25hbGQgUmVhZ2FuXCIgMTkxMSBcIlRhbXBpY29cIiBcIklsbGlub2lzXCJcbiAgICAsIHBlcnNvbiBcIlJpY2hhcmQgTS4gTml4b25cIiAxOTEzIFwiWW9yYmEgTGluZGFcIiBcIkNhbGlmb3JuaWFcIlxuICAgICwgcGVyc29uIFwiR2VyYWxkIFIuIEZvcmRcIiAxOTEzIFwiT21haGFcIiBcIk5lYnJhc2thXCJcbiAgICAsIHBlcnNvbiBcIkpvaG4gRi4gS2VubmVkeVwiIDE5MTcgXCJCcm9va2xpbmVcIiBcIk1hc3NhY2h1c2V0dHNcIlxuICAgICwgcGVyc29uIFwiR2VvcmdlIEguIFcuIEJ1c2hcIiAxOTI0IFwiTWlsdG9uXCIgXCJNYXNzYWNodXNldHRzXCJcbiAgICAsIHBlcnNvbiBcIkppbW15IENhcnRlclwiIDE5MjQgXCJQbGFpbnNcIiBcIkdlb3JnaWFcIlxuICAgICwgcGVyc29uIFwiR2VvcmdlIFcuIEJ1c2hcIiAxOTQ2IFwiTmV3IEhhdmVuXCIgXCJDb25uZWN0aWN1dFwiXG4gICAgLCBwZXJzb24gXCJCaWxsIENsaW50b25cIiAxOTQ2IFwiSG9wZVwiIFwiQXJrYW5zYXNcIlxuICAgICwgcGVyc29uIFwiQmFyYWNrIE9iYW1hXCIgMTk2MSBcIkhvbm9sdWx1XCIgXCJIYXdhaWlcIlxuICAgICwgcGVyc29uIFwiRG9uYWxkIFRydW1wXCIgMTk0NiBcIk5ldyBZb3JrIENpdHlcIiBcIk5ldyBZb3JrXCJcbiAgICBdXG4iCiAgICBdLAogICAgIm5hbWVzIjogWwogICAgICAgICJEaWN0LmZvbGRsIiwKICAgICAgICAiZnVuYyIsCiAgICAgICAgImFjYyIsCiAgICAgICAgImRpY3QiLAogICAgICAgICJrZXkiLAogICAgICAgICJ2YWx1ZSIsCiAgICAgICAgImxlZnQiLAogICAgICAgICJyaWdodCIsCiAgICAgICAgIkFycmF5Lmxlbmd0aCIsCiAgICAgICAgIl9BcnJheV9sZW5ndGgiLAogICAgICAgICJBcnJheS5wdXNoTGFzdCIsCiAgICAgICAgImFycmF5IiwKICAgICAgICAiX0FycmF5X3NwbGljZTEiLAogICAgICAgICJEaWN0LmtleXMiLAogICAgICAgICJrZXlBcnJheSIsCiAgICAgICAgIlNldC50b0FycmF5IiwKICAgICAgICAiX3YwIiwKICAgICAgICAiQmFzaWNzLmFkZCIsCiAgICAgICAgIl9CYXNpY3NfYWRkIiwKICAgICAgICAiU3RyaW5nLmFueSIsCiAgICAgICAgIl9TdHJpbmdfYW55IiwKICAgICAgICAiQmFzaWNzLmNvbXBvc2VMIiwKICAgICAgICAiZyIsCiAgICAgICAgImYiLAogICAgICAgICJ4IiwKICAgICAgICAiQmFzaWNzLm5vdCIsCiAgICAgICAgIl9CYXNpY3Nfbm90IiwKICAgICAgICAiU3RyaW5nLmFsbCIsCiAgICAgICAgImlzR29vZCIsCiAgICAgICAgInN0ciIsCiAgICAgICAgIkJhc2ljcy5hbmQiLAogICAgICAgICJfQmFzaWNzX2FuZCIsCiAgICAgICAgIkJhc2ljcy5hcHBlbmQiLAogICAgICAgICJfVXRpbHNfYXBwZW5kIiwKICAgICAgICAiSnNvbi5FbmNvZGUuZW5jb2RlIiwKICAgICAgICAiX0pzb25fZW5jb2RlIiwKICAgICAgICAiU3RyaW5nLmZyb21JbnQiLAogICAgICAgICJfU3RyaW5nX2Zyb21OdW1iZXIiLAogICAgICAgICJTdHJpbmcuam9pbiIsCiAgICAgICAgIl9TdHJpbmdfam9pbiIsCiAgICAgICAgIlN0cmluZy5zcGxpdCIsCiAgICAgICAgIl9TdHJpbmdfc3BsaXQiLAogICAgICAgICJKc29uLkRlY29kZS5pbmRlbnQiLAogICAgICAgICJBcnJheS5pbmRleGVkTWFwIiwKICAgICAgICAiX0FycmF5X2luZGV4ZWRNYXAiLAogICAgICAgICJCYXNpY3MubGUiLAogICAgICAgICJfVXRpbHNfbGUiLAogICAgICAgICJDaGFyLnRvQ29kZSIsCiAgICAgICAgIl9DaGFyX3RvQ29kZSIsCiAgICAgICAgIkNoYXIuaXNMb3dlciIsCiAgICAgICAgIl9jaGFyIiwKICAgICAgICAiY29kZSIsCiAgICAgICAgImNoYXIiLAogICAgICAgICJDaGFyLmlzVXBwZXIiLAogICAgICAgICJCYXNpY3Mub3IiLAogICAgICAgICJfQmFzaWNzX29yIiwKICAgICAgICAiQ2hhci5pc0FscGhhIiwKICAgICAgICAiQ2hhci5pc0RpZ2l0IiwKICAgICAgICAiQ2hhci5pc0FscGhhTnVtIiwKICAgICAgICAiU3RyaW5nLnBvcEZpcnN0IiwKICAgICAgICAiX1N0cmluZ19wb3BGaXJzdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLmVycm9yT25lT2YiLAogICAgICAgICJpIiwKICAgICAgICAiZXJyb3IiLAogICAgICAgICJKc29uLkRlY29kZS5lcnJvclRvU3RyaW5nIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZXJyb3JUb1N0cmluZ0hlbHAiLAogICAgICAgICJjb250ZXh0IiwKICAgICAgICAiaXNTaW1wbGUiLAogICAgICAgICJfdjIiLAogICAgICAgICJyZXN0IiwKICAgICAgICAiZmllbGROYW1lIiwKICAgICAgICAiZXJyIiwKICAgICAgICAiaW5kZXhOYW1lIiwKICAgICAgICAic3RhcnRlciIsCiAgICAgICAgImludHJvZHVjdGlvbiIsCiAgICAgICAgImVycm9ycyIsCiAgICAgICAgImpzb24iLAogICAgICAgICJtc2ciLAogICAgICAgICJSZXN1bHQuaXNPayIsCiAgICAgICAgInJlc3VsdCIsCiAgICAgICAgIkpzb24uRGVjb2RlLm1hcCIsCiAgICAgICAgIl9Kc29uX21hcDEiLAogICAgICAgICJKc29uLkRlY29kZS5tYXAyIiwKICAgICAgICAiX0pzb25fbWFwMiIsCiAgICAgICAgIkpzb24uRGVjb2RlLnN1Y2NlZWQiLAogICAgICAgICJfSnNvbl9zdWNjZWVkIiwKICAgICAgICAiVmlydHVhbERvbS50b0hhbmRsZXJJbnQiLAogICAgICAgICJoYW5kbGVyIiwKICAgICAgICAiQmFzaWNzLmlkZW50aXR5IiwKICAgICAgICAiQmFzaWNzLmFwTCIsCiAgICAgICAgIlN0cmluZy5jb250YWlucyIsCiAgICAgICAgIl9TdHJpbmdfY29udGFpbnMiLAogICAgICAgICJCYXNpY3MubHQiLAogICAgICAgICJfVXRpbHNfbHQiLAogICAgICAgICJTdHJpbmcuc2xpY2UiLAogICAgICAgICJfU3RyaW5nX3NsaWNlIiwKICAgICAgICAiU3RyaW5nLnVuaXRMZW5ndGgiLAogICAgICAgICJfU3RyaW5nX3VuaXRMZW5ndGgiLAogICAgICAgICJTdHJpbmcuZHJvcEZpcnN0IiwKICAgICAgICAibiIsCiAgICAgICAgInN0cmluZyIsCiAgICAgICAgIlN0cmluZy5pbmRpY2VzIiwKICAgICAgICAiX1N0cmluZ19pbmRleGVzIiwKICAgICAgICAiQmFzaWNzLmVxIiwKICAgICAgICAiX1V0aWxzX2VxdWFsIiwKICAgICAgICAiU3RyaW5nLmlzRW1wdHkiLAogICAgICAgICJTdHJpbmcudGFrZUZpcnN0IiwKICAgICAgICAiU3RyaW5nLnRvSW50IiwKICAgICAgICAiX1N0cmluZ190b0ludCIsCiAgICAgICAgIlVybC5jaG9tcEJlZm9yZVBhdGgiLAogICAgICAgICJwcm90b2NvbCIsCiAgICAgICAgInBhdGgiLAogICAgICAgICJwYXJhbXMiLAogICAgICAgICJmcmFnIiwKICAgICAgICAiTWF5YmUuTm90aGluZyIsCiAgICAgICAgIk1heWJlLkp1c3QiLAogICAgICAgICJmcmFnbWVudCIsCiAgICAgICAgImhvc3QiLAogICAgICAgICJwb3J0XyIsCiAgICAgICAgInF1ZXJ5IiwKICAgICAgICAiX3YxIiwKICAgICAgICAiQXJyYXkuZ2V0IiwKICAgICAgICAiX0FycmF5X2dldCIsCiAgICAgICAgIlVybC5jaG9tcEJlZm9yZVF1ZXJ5IiwKICAgICAgICAiVXJsLmNob21wQmVmb3JlRnJhZ21lbnQiLAogICAgICAgICJVcmwuY2hvbXBBZnRlclByb3RvY29sIiwKICAgICAgICAiU3RyaW5nLnN0YXJ0c1dpdGgiLAogICAgICAgICJfU3RyaW5nX3N0YXJ0c1dpdGgiLAogICAgICAgICJVcmwuZnJvbVN0cmluZyIsCiAgICAgICAgIlVybC5IdHRwIiwKICAgICAgICAiVXJsLkh0dHBzIiwKICAgICAgICAiQmFzaWNzLm5ldmVyIiwKICAgICAgICAibnZyIiwKICAgICAgICAiVGFzay5zdWNjZWVkIiwKICAgICAgICAiX1NjaGVkdWxlcl9zdWNjZWVkIiwKICAgICAgICAiVGFzay5pbml0IiwKICAgICAgICAiQXJyYXkubWFwIiwKICAgICAgICAiX0FycmF5X21hcCIsCiAgICAgICAgIlRhc2suYW5kVGhlbiIsCiAgICAgICAgIl9TY2hlZHVsZXJfYW5kVGhlbiIsCiAgICAgICAgIkJhc2ljcy5hcFIiLAogICAgICAgICJUYXNrLm1hcCIsCiAgICAgICAgInRhc2tBIiwKICAgICAgICAiYSIsCiAgICAgICAgIkFycmF5LmZvbGRyIiwKICAgICAgICAiX0FycmF5X2ZvbGRyIiwKICAgICAgICAiVGFzay5tYXAyIiwKICAgICAgICAidGFza0IiLAogICAgICAgICJiIiwKICAgICAgICAiQXJyYXkucHVzaEZpcnN0IiwKICAgICAgICAiVGFzay5zZXF1ZW5jZSIsCiAgICAgICAgInRhc2tzIiwKICAgICAgICAiUGxhdGZvcm0uc2VuZFRvQXBwIiwKICAgICAgICAiX1BsYXRmb3JtX3NlbmRUb0FwcCIsCiAgICAgICAgIlRhc2suc3Bhd25DbWQiLAogICAgICAgICJyb3V0ZXIiLAogICAgICAgICJjbWQiLAogICAgICAgICJfU2NoZWR1bGVyX3NwYXduIiwKICAgICAgICAidGFzayIsCiAgICAgICAgIlRhc2sub25FZmZlY3RzIiwKICAgICAgICAiY29tbWFuZHMiLAogICAgICAgICJzdGF0ZSIsCiAgICAgICAgIlRhc2sub25TZWxmTXNnIiwKICAgICAgICAiVGFzay5jbWRNYXAiLAogICAgICAgICJ0YWdnZXIiLAogICAgICAgICJUYXNrLlBlcmZvcm0iLAogICAgICAgICJUYXNrLkV4ZWN1dGUiLAogICAgICAgICJUYXNrLnBlcmZvcm0iLAogICAgICAgICJ0b01lc3NhZ2UiLAogICAgICAgICJUYXNrLmNvbW1hbmQiLAogICAgICAgICJCcm93c2VyLmVsZW1lbnQiLAogICAgICAgICJfQnJvd3Nlcl9lbGVtZW50IiwKICAgICAgICAiRGF0YVRhYmxlLm5ldyIsCiAgICAgICAgImlkIiwKICAgICAgICAiRGF0YVRhYmxlLlN0YXRlIiwKICAgICAgICAiYWN0aXZlUm93SWQiLAogICAgICAgICJwYWdlU2l6ZSIsCiAgICAgICAgInBhZ2luYXRpb24iLAogICAgICAgICJEYXRhVGFibGUuTm9QYWdpbmF0aW9uIiwKICAgICAgICAic29ydENvbHVtbnMiLAogICAgICAgICJ0YWJsZUlkIiwKICAgICAgICAiUGxhdGZvcm0uQ21kLmJhdGNoIiwKICAgICAgICAiX1BsYXRmb3JtX2JhdGNoIiwKICAgICAgICAiUGxhdGZvcm0uQ21kLm5vbmUiLAogICAgICAgICJBcnJheS5zb3J0IiwKICAgICAgICAiX0FycmF5X3NvcnQiLAogICAgICAgICJEYXRhVGFibGUuc2V0U2Nyb2xsaW5nUGFnaW5hdGlvbldpdGgiLAogICAgICAgICJkZWZhdWx0UGFnZVNpemUiLAogICAgICAgICJvdGhlclBhZ2VTaXplcyIsCiAgICAgICAgImN1cnJlbnRTdGF0ZSIsCiAgICAgICAgIkRhdGFUYWJsZS5TY3JvbGxlciIsCiAgICAgICAgIkRhdGFUYWJsZS51cGRhdGVBY3RpdmVSb3dJZCIsCiAgICAgICAgIm5ld0FjdGl2ZVJvd0lkIiwKICAgICAgICAiQXJyYXkua2VlcElmIiwKICAgICAgICAiX0FycmF5X2ZpbHRlciIsCiAgICAgICAgIkJhc2ljcy5uZXEiLAogICAgICAgICJfVXRpbHNfbm90RXF1YWwiLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlTXVsdGlTb3J0U3RhdGUiLAogICAgICAgICJuZXdTb3J0Q29sdW1uIiwKICAgICAgICAic29ydERpcmVjdGlvbiIsCiAgICAgICAgIm5ld1NvcnRTdGF0ZSIsCiAgICAgICAgInNvcnRDb2x1bW5OYW1lIiwKICAgICAgICAiUHJlc2lkZW50c1BhZ2luYXRlZC5pbml0IiwKICAgICAgICAicGVvcGxlIiwKICAgICAgICAibW9kZWwiLAogICAgICAgICJ0YWJsZVN0YXRlIiwKICAgICAgICAiRGF0YVRhYmxlLkFzYyIsCiAgICAgICAgImNvbW1hbmQiLAogICAgICAgICJQbGF0Zm9ybS5TdWIuYmF0Y2giLAogICAgICAgICJQbGF0Zm9ybS5TdWIubm9uZSIsCiAgICAgICAgIlByZXNpZGVudHNQYWdpbmF0ZWQucGVyc29uIiwKICAgICAgICAibmFtZSIsCiAgICAgICAgInllYXIiLAogICAgICAgICJjaXR5IiwKICAgICAgICAiUHJlc2lkZW50c1BhZ2luYXRlZC5wcmVzaWRlbnRzIiwKICAgICAgICAiUHJlc2lkZW50c1BhZ2luYXRlZC51cGRhdGUiLAogICAgICAgICJuZXdRdWVyeSIsCiAgICAgICAgIm5ld1N0YXRlIiwKICAgICAgICAiVmlydHVhbERvbS5wcm9wZXJ0eSIsCiAgICAgICAgIl9WaXJ0dWFsRG9tX3Byb3BlcnR5IiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24iLAogICAgICAgICJfVmlydHVhbERvbV9ub0phdmFTY3JpcHRPckh0bWxVcmkiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMucHJvcGVydHkiLAogICAgICAgICJKc29uLkVuY29kZS5zdHJpbmciLAogICAgICAgICJfSnNvbl93cmFwIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnN0cmluZ1Byb3BlcnR5IiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNsYXNzIiwKICAgICAgICAiVmlydHVhbERvbS5hdHRyaWJ1dGUiLAogICAgICAgICJfVmlydHVhbERvbV9hdHRyaWJ1dGUiLAogICAgICAgICJfVmlydHVhbERvbV9ub09uT3JGb3JtQWN0aW9uIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmF0dHJpYnV0ZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5jbGFzc0xpc3QiLAogICAgICAgICJjbGFzc2VzIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLmNvbHNwYW4iLAogICAgICAgICJWaXJ0dWFsRG9tLm5vZGUiLAogICAgICAgICJ0YWciLAogICAgICAgICJfVmlydHVhbERvbV9ub2RlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fbm9TY3JpcHQiLAogICAgICAgICJIdG1sLm5vZGUiLAogICAgICAgICJIdG1sLmRpdiIsCiAgICAgICAgIkJhc2ljcy5ndCIsCiAgICAgICAgIl9VdGlsc19ndCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5BcmlhLmxhYmVsIiwKICAgICAgICAiQXJyYXkuZmluZEZpcnN0IiwKICAgICAgICAiX0FycmF5X2ZpbmRGaXJzdCIsCiAgICAgICAgIkFycmF5Lm1lbWJlciIsCiAgICAgICAgInYiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMucm93c3BhbiIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5BcmlhLnNvcnQiLAogICAgICAgICJEYXRhVGFibGUuc29ydERpcmVjdGlvblRvU3RyaW5nIiwKICAgICAgICAiSHRtbC5zcGFuIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnRhYmluZGV4IiwKICAgICAgICAiVmlydHVhbERvbS50ZXh0IiwKICAgICAgICAiX1ZpcnR1YWxEb21fdGV4dCIsCiAgICAgICAgIkh0bWwudGV4dCIsCiAgICAgICAgIkh0bWwudGgiLAogICAgICAgICJIdG1sLnRyIiwKICAgICAgICAiRGF0YVRhYmxlLmRlZmF1bHRUYWJsZUhlYWRlciIsCiAgICAgICAgImhlYWRlckluZm9zIiwKICAgICAgICAiZGVmYXVsdFRIIiwKICAgICAgICAicm93QW5kQ29sU3BhbiIsCiAgICAgICAgImlzU29ydGVkIiwKICAgICAgICAidmlld2VkU29ydERpcmVjdGlvbiIsCiAgICAgICAgImNvbHVtblRpdGxlIiwKICAgICAgICAiY29sdW1uT3JkZXIiLAogICAgICAgICJzb3J0RGlyZWN0aW9ucyIsCiAgICAgICAgIl9jbGFzcyIsCiAgICAgICAgImVuYWJsZWQiLAogICAgICAgICJjYW5CZVNvcnRlZCIsCiAgICAgICAgInRoQ2xhc3NlcyIsCiAgICAgICAgIkRhdGFUYWJsZS5EZXNjIiwKICAgICAgICAiYXJpYVNvcnQiLAogICAgICAgICJ0aEF0dHJpYnV0ZXMiLAogICAgICAgICJjbGlja0FjdGlvbnMiLAogICAgICAgICJhdHRyaWJ1dGVzIiwKICAgICAgICAiY2hpbGRyZW4iLAogICAgICAgICJEYXRhVGFibGUuZ2V0QWN0aXZlUm93SWQiLAogICAgICAgICJWaXJ0dWFsRG9tLm9uIiwKICAgICAgICAiX1ZpcnR1YWxEb21fb24iLAogICAgICAgICJIdG1sLkV2ZW50cy5vbiIsCiAgICAgICAgImV2ZW50IiwKICAgICAgICAiZGVjb2RlciIsCiAgICAgICAgIlZpcnR1YWxEb20uTm9ybWFsIiwKICAgICAgICAiSHRtbC5FdmVudHMub25DbGljayIsCiAgICAgICAgIlZpcnR1YWxEb20uc3R5bGUiLAogICAgICAgICJfVmlydHVhbERvbV9zdHlsZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5zdHlsZSIsCiAgICAgICAgIkRhdGFUYWJsZS5zaW1wbGVSb3dBdHRycyIsCiAgICAgICAgInRvSWQiLAogICAgICAgICJ0b01zZyIsCiAgICAgICAgImRhdGEiLAogICAgICAgICJpc19jdXJyZW50X3JvdyIsCiAgICAgICAgIkRhdGFUYWJsZS5kZWZhdWx0Q3VzdG9taXphdGlvbnMiLAogICAgICAgICJiZWZvcmVBbmRBZnRlclRhYmxlIiwKICAgICAgICAiYWZ0ZXIiLAogICAgICAgICJiZWZvcmUiLAogICAgICAgICJjYXB0aW9uIiwKICAgICAgICAiY29sZ3JvdXAiLAogICAgICAgICJyb3dBdHRycyIsCiAgICAgICAgInRhYmxlQXR0cnMiLAogICAgICAgICJ0Ym9keUF0dHJzIiwKICAgICAgICAidGZvb3QiLAogICAgICAgICJ0aGVhZCIsCiAgICAgICAgIkRhdGFUYWJsZS5jb25maWciLAogICAgICAgICJEYXRhVGFibGUuQ29uZmlnIiwKICAgICAgICAiY29sdW1ucyIsCiAgICAgICAgImNEYXRhIiwKICAgICAgICAiY3VzdG9taXphdGlvbnMiLAogICAgICAgICJBcnJheS5zb3J0QnkiLAogICAgICAgICJfQXJyYXlfc29ydEJ5IiwKICAgICAgICAiRGF0YVRhYmxlLmluY3JlYXNpbmdPckRlY3JlYXNpbmdCeSIsCiAgICAgICAgInRvQ29tcGFyYWJsZSIsCiAgICAgICAgIkRhdGFUYWJsZS5JbmNPckRlYyIsCiAgICAgICAgIkRhdGFUYWJsZS50ZXh0RGV0YWlscyIsCiAgICAgICAgIkRhdGFUYWJsZS5pbnRDb2x1bW4iLAogICAgICAgICJ0b0ludCIsCiAgICAgICAgIkRhdGFUYWJsZS5Db2x1bW4iLAogICAgICAgICJzb3J0ZXIiLAogICAgICAgICJ2aWV3RGF0YSIsCiAgICAgICAgIkRhdGFUYWJsZS5zdHJpbmdDb2x1bW4iLAogICAgICAgICJ0b1N0ciIsCiAgICAgICAgIlByZXNpZGVudHNQYWdpbmF0ZWQuY29uZmlnIiwKICAgICAgICAiUHJlc2lkZW50c1BhZ2luYXRlZC5TZXRUYWJsZVN0YXRlIiwKICAgICAgICAiSHRtbC5oMSIsCiAgICAgICAgIkh0bWwuaW5wdXQiLAogICAgICAgICJIdG1sLmxpIiwKICAgICAgICAiSHRtbC5FdmVudHMuYWx3YXlzU3RvcCIsCiAgICAgICAgIm1lc3NhZ2UiLAogICAgICAgICJzdG9wUHJvcGFnYXRpb24iLAogICAgICAgICJIdG1sLkV2ZW50cy5zdG9wUHJvcGFnYXRpb25PbiIsCiAgICAgICAgIlZpcnR1YWxEb20uTWF5U3RvcFByb3BhZ2F0aW9uIiwKICAgICAgICAiSnNvbi5EZWNvZGUuZmllbGQiLAogICAgICAgICJfSnNvbl9kZWNvZGVGaWVsZCIsCiAgICAgICAgIkpzb24uRGVjb2RlLmF0IiwKICAgICAgICAiZmllbGRzIiwKICAgICAgICAiSnNvbi5EZWNvZGUuc3RyaW5nIiwKICAgICAgICAiX0pzb25fZGVjb2RlU3RyaW5nIiwKICAgICAgICAiSHRtbC5FdmVudHMudGFyZ2V0VmFsdWUiLAogICAgICAgICJIdG1sLkV2ZW50cy5vbklucHV0IiwKICAgICAgICAiRGF0YVRhYmxlLmdldFBhZ2VTaXplIiwKICAgICAgICAiSHRtbC5vcHRpb24iLAogICAgICAgICJIdG1sLnNlbGVjdCIsCiAgICAgICAgIkpzb24uRW5jb2RlLmJvb2wiLAogICAgICAgICJIdG1sLkF0dHJpYnV0ZXMuYm9vbFByb3BlcnR5IiwKICAgICAgICAiYm9vbCIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5zZWxlY3RlZCIsCiAgICAgICAgIkJhc2ljcy5nZSIsCiAgICAgICAgIl9VdGlsc19nZSIsCiAgICAgICAgIkFycmF5LnNsaWNlIiwKICAgICAgICAiX0FycmF5X3NsaWNlIiwKICAgICAgICAiQXJyYXkuZHJvcEZpcnN0IiwKICAgICAgICAiQXJyYXkuZmlyc3QiLAogICAgICAgICJBcnJheS5wb3BGaXJzdCIsCiAgICAgICAgImZpcnN0IiwKICAgICAgICAiRGF0YVRhYmxlLnVwZGF0ZVBhZ2VTaXplIiwKICAgICAgICAibWluaW11bU5ld1BhZ2VTaXplIiwKICAgICAgICAibmV4dEhpZ2hlckluTGlzdCIsCiAgICAgICAgImlucHV0IiwKICAgICAgICAibGlzdCIsCiAgICAgICAgIl92MyIsCiAgICAgICAgIm5ld1BhZ2VTaXplIiwKICAgICAgICAiSHRtbC5BdHRyaWJ1dGVzLnZhbHVlIiwKICAgICAgICAiTWF5YmUud2l0aERlZmF1bHQiLAogICAgICAgICJfZGVmYXVsdCIsCiAgICAgICAgIm1heWJlIiwKICAgICAgICAiZGVmYXVsdCIsCiAgICAgICAgIkRhdGFUYWJsZS5wYWdlTGVuZ3RoQ2hvb3NlciIsCiAgICAgICAgInZpZXdPcHRpb24iLAogICAgICAgICJ2YWx1ZXMiLAogICAgICAgICJ2YWwiLAogICAgICAgICJodG1sIiwKICAgICAgICAib25QYWdlU2l6ZUNob2ljZSIsCiAgICAgICAgIkh0bWwuQXR0cmlidXRlcy5wbGFjZWhvbGRlciIsCiAgICAgICAgIlN0cmluZy50b0xvd2VyIiwKICAgICAgICAiX1N0cmluZ190b0xvd2VyIiwKICAgICAgICAiSHRtbC51bCIsCiAgICAgICAgIkh0bWwuY2FwdGlvbiIsCiAgICAgICAgIkJhc2ljcy5jb21wYXJlIiwKICAgICAgICAiX1V0aWxzX2NvbXBhcmUiLAogICAgICAgICJCYXNpY3MuaWRpdiIsCiAgICAgICAgIl9CYXNpY3NfaWRpdiIsCiAgICAgICAgIk1hdGgubW9kQnkiLAogICAgICAgICJfTWF0aF9tb2RCeSIsCiAgICAgICAgIkRhdGFUYWJsZS5pc0V2ZW4iLAogICAgICAgICJfaW50IiwKICAgICAgICAiaW50IiwKICAgICAgICAiTWF5YmUubWFwIiwKICAgICAgICAiQmFzaWNzLm11bCIsCiAgICAgICAgIl9CYXNpY3NfbXVsIiwKICAgICAgICAiRGF0YVRhYmxlLm5lZ2F0aXZlVG9aZXJvIiwKICAgICAgICAiQmFzaWNzLnN1YiIsCiAgICAgICAgIl9CYXNpY3Nfc3ViIiwKICAgICAgICAiQXJyYXkudGFrZUZpcnN0IiwKICAgICAgICAiRGF0YVRhYmxlLmdldFBhZ2luYXRlZERhdGEiLAogICAgICAgICJyb3dDdXJzb3IiLAogICAgICAgICJwcmVjZWRpbmdGdWxsUGFnZXMiLAogICAgICAgICJsYXN0Um93T25QYWdlIiwKICAgICAgICAiX3Y3IiwKICAgICAgICAibGFzdFJvd0JlZm9yZVBhZ2UiLAogICAgICAgICJfdjQiLAogICAgICAgICJBcnJheS5yZXZlcnNlIiwKICAgICAgICAiX0FycmF5X3JldmVyc2UiLAogICAgICAgICJEYXRhVGFibGUuYXBwbHlTb3J0ZXIiLAogICAgICAgICJzcnQiLAogICAgICAgICJEYXRhVGFibGUuZmluZFNvcnRlciIsCiAgICAgICAgInNlbGVjdGVkQ29sdW1uIiwKICAgICAgICAiRGF0YVRhYmxlLnNvcnQiLAogICAgICAgICJfdjUiLAogICAgICAgICJEYXRhVGFibGUuZ2V0U29ydGVkRGF0YSIsCiAgICAgICAgIlZpcnR1YWxEb20ua2V5ZWROb2RlIiwKICAgICAgICAiX1ZpcnR1YWxEb21fa2V5ZWROb2RlIiwKICAgICAgICAiSHRtbC5LZXllZC5ub2RlIiwKICAgICAgICAiSHRtbC50YWJsZSIsCiAgICAgICAgIkh0bWwudGZvb3QiLAogICAgICAgICJIdG1sLnRoZWFkIiwKICAgICAgICAiRGF0YVRhYmxlLnRvSGVhZGVyIiwKICAgICAgICAiRGF0YVRhYmxlLmhlYWRlckluZm8iLAogICAgICAgICJzZWxlY3RlZCIsCiAgICAgICAgIkh0bWwuRXZlbnRzLm9uRG91YmxlQ2xpY2siLAogICAgICAgICJEYXRhVGFibGUudXBkYXRlU29ydFN0YXRlIiwKICAgICAgICAiRGF0YVRhYmxlLm9uQ29sdW1uSGVhZGVyIiwKICAgICAgICAiRGF0YVRhYmxlLnRvSGVhZGVySW5mbyIsCiAgICAgICAgImluZGV4ZWRMaXN0IiwKICAgICAgICAiaWR4IiwKICAgICAgICAibm9uRW1wdHlMaXN0IiwKICAgICAgICAiZmlsdGVyZWRMaXN0IiwKICAgICAgICAiX3Y4IiwKICAgICAgICAiX3Y2IiwKICAgICAgICAic29ydFJhbmsiLAogICAgICAgICJpbmRleCIsCiAgICAgICAgInJldmVyc2UiLAogICAgICAgICJyZXZlcnNlZFNvcnREaXJlY3Rpb24iLAogICAgICAgICJIdG1sLnRkIiwKICAgICAgICAiRGF0YVRhYmxlLnZpZXdDZWxsIiwKICAgICAgICAiZGV0YWlscyIsCiAgICAgICAgIkRhdGFUYWJsZS52aWV3Um93SGVscCIsCiAgICAgICAgInRvUm93QXR0cnMiLAogICAgICAgICJEYXRhVGFibGUudmlld1JvdyIsCiAgICAgICAgIm5vZGUiLAogICAgICAgICJEYXRhVGFibGUudmlldyIsCiAgICAgICAgImNvbmYiLAogICAgICAgICJyb3dzIiwKICAgICAgICAidGJvZHkiLAogICAgICAgICJ3aXRoRm9vdCIsCiAgICAgICAgImhlYWRlcnMiLAogICAgICAgICJ0aGVhZERldGFpbHMiLAogICAgICAgICJQcmVzaWRlbnRzUGFnaW5hdGVkLnZpZXciLAogICAgICAgICJsb3dlclF1ZXJ5IiwKICAgICAgICAiYWNjZXB0YWJsZVBlb3BsZSIsCiAgICAgICAgIlByZXNpZGVudHNQYWdpbmF0ZWQuU2V0UXVlcnkiLAogICAgICAgICJQcmVzaWRlbnRzUGFnaW5hdGVkLm1haW4iLAogICAgICAgICJpbml0IiwKICAgICAgICAic3Vic2NyaXB0aW9ucyIsCiAgICAgICAgInVwZGF0ZSIsCiAgICAgICAgInZpZXciLAogICAgICAgICJEYXRhVGFibGUuaW5pdGlhbFNvcnQiLAogICAgICAgICJoZWFkZXIiLAogICAgICAgICJQcmVzaWRlbnRzLmluaXQiLAogICAgICAgICJQcmVzaWRlbnRzLnBlcnNvbiIsCiAgICAgICAgIlByZXNpZGVudHMucHJlc2lkZW50cyIsCiAgICAgICAgIlByZXNpZGVudHMudXBkYXRlIiwKICAgICAgICAiUHJlc2lkZW50cy5jb25maWciLAogICAgICAgICJQcmVzaWRlbnRzLlNldFRhYmxlU3RhdGUiLAogICAgICAgICJQcmVzaWRlbnRzLnZpZXciLAogICAgICAgICJQcmVzaWRlbnRzLlNldFF1ZXJ5IiwKICAgICAgICAiUHJlc2lkZW50cy5tYWluIgogICAgXSwKICAgICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnbEJBQSx1Q0FBTUMsTUFBS0MsS0FBSUM7Ozs7VUFHSEQ7Ozs7Ozs7b0JBR01EO2VBQUtBLEdBQUNBLE1BQUtHLEtBQUlDLE9BQU1MLDRCQUFPQyxNQUFLQyxLQUFJSTtnQkFBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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