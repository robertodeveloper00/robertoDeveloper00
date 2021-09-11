// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
'use strict'; // // PLAY AND PAUSE ABOUT VIDEO
// // Selectors
// const aboutVideo = document.getElementById('about-video');
// const pauseTag = document.querySelector('.about-video__tag--pause');
// const playTag = document.querySelector('.about-video__tag--play');
// // Functions
// function playVid() {
//   aboutVideo.play();
// }
// function pauseVid() {
//   aboutVideo.pause();
// }
// function togglePlayPause() {
//   aboutVideo.classList.toggle('playing');
//   aboutVideo.classList.toggle('paused');
// }
// function resetHover() {
//   aboutVideo.style.filter = 'brightness(100%)';
//   playTag.classList.add('hidden');
//   pauseTag.classList.add('hidden');
// }
// // Event listeners
// aboutVideo.addEventListener('click', () => {
//   if (aboutVideo.classList.contains('playing')) {
//     pauseVid();
//     togglePlayPause();
//     resetHover();
//   } else if (aboutVideo.classList.contains('paused')) {
//     playVid();
//     togglePlayPause();
//     resetHover();
//   }
// });
// aboutVideo.addEventListener('mouseover', () => {
//   aboutVideo.style.filter = 'brightness(70%)';
//   if (aboutVideo.classList.contains('playing')) {
//     pauseTag.classList.remove('hidden');
//   } else if (aboutVideo.classList.contains('paused')) {
//     playTag.classList.remove('hidden');
//   }
// });
// aboutVideo.addEventListener('mouseout', () => {
//   resetHover();
// });
// PORTFOLIO PAGE
// Project Objects

var projectOneObj = {
  backgroundUrl: 'https://www.nopainnumbing.com/assets/hero-bg.5b4f0377.jpg',
  logoUrl: 'https://www.nopainnumbing.com/assets/No_Pain_logo.d9a41c89.png',
  modalBody: ['I was given the opportunity to do some work with <a href="https://lionix.com/">Lionix Evolve</a> and this project is one of the results from it.', 'I was given a Figma design which I then translated to the web.', 'I coded everything in this website except for the addresses widget which was coded by another team member while I worked on the layout.'],
  websiteUrl: 'https://www.nopainnumbing.com/'
};
var projectTwoObj = {
  backgroundUrl: 'https://monasterioanunciada.com/img/extra-img/james-coleman-QHRZv6PIW4s-unsplash.jpg',
  logoUrl: 'https://monasterioanunciada.com/img/logo%20web%20bueno.png',
  modalBody: ['This project was created while working with <a href="https://lionix.com/">Lionix Evolve</a>.', 'I designed and developed this project from scratch, where the branding we had was just the logo.', 'The look and feel is a marriage between conservative, scripture-like textures and modern Web Design.'],
  websiteUrl: 'https://monasterioanunciada.com/'
};

function generateModal(projectObject) {
  // Constructing Modal Conatiners
  var projectsContainer = document.querySelector('.projects-container');
  var modalContainer = document.createElement('div');
  modalContainer.className = 'modal__container';
  var modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.background = "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(".concat(projectObject.backgroundUrl, ") no-repeat bottom right 90% / cover");
  modalContainer.append(modal);
  projectsContainer.append(modalContainer); // Constructing the header

  var modalHeader = document.createElement('div');
  modalHeader.className = 'modal__header';
  var modalLogo = document.createElement('img');
  modalLogo.src = "".concat(projectObject.logoUrl);
  modalLogo.className = 'modal__header--logo';
  var modalExit = document.createElement('img');
  modalExit.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.69em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20352%20512%22%3E%3Cpath%20d%3D%22M242.72%20256l100.07-100.07c12.28-12.28%2012.28-32.19%200-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48%200L176%20189.28L75.93%2089.21c-12.28-12.28-32.19-12.28-44.48%200L9.21%20111.45c-12.28%2012.28-12.28%2032.19%200%2044.48L109.28%20256L9.21%20356.07c-12.28%2012.28-12.28%2032.19%200%2044.48l22.24%2022.24c12.28%2012.28%2032.2%2012.28%2044.48%200L176%20322.72l100.07%20100.07c12.28%2012.28%2032.2%2012.28%2044.48%200l22.24-22.24c12.28-12.28%2012.28-32.19%200-44.48L242.72%20256z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E';
  modalExit.className = 'modal__header--exitBtn';
  modalHeader.append(modalLogo);
  modalHeader.append(modalExit);
  modal.appendChild(modalHeader); // Constructing the body

  var modalBody = document.createElement('ul');
  modalBody.className = 'modal__body';
  modalBody.classList.add('container');
  modalBody.innerHTML = "\n  <li><img class=\"modal__body--icon\" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>\n  <p>".concat(projectObject.modalBody[0], "</p></li>\n\n  <li><img class=\"modal__body--icon\" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>\n  <p>").concat(projectObject.modalBody[1], "</p></li>\n\n  <li><img class=\"modal__body--icon\" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>\n  <p>").concat(projectObject.modalBody[2], "</p></li>\n");
  modal.appendChild(modalBody); // Contructing the Footer

  var modalFooter = document.createElement('div');
  modalFooter.className = 'modal__footer';
  modalFooter.innerHTML = "\n  <a href=\"".concat(projectObject.websiteUrl, "\" target=\"_blank\">Visit Site</a>\n  <a href=\"mailto:robertodeveloper00@gmail.com\">Email Me</a>\n");
  modal.appendChild(modalFooter); // Close modal

  modalExit.addEventListener('click', function () {
    return closeModal();
  }); // Hide Modal on Outside Click

  window.addEventListener('click', function (e) {
    return e.target == modalContainer ? closeModal() : false;
  }); // Hide Modal on ESC

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalContainer.classList.contains('show-modal')) {
      closeModal();
    }
  }); // We return the whole Modal Element to be constructed Dynamicaly with a click Listener

  return modalContainer;
} // OPEN AND CLOSE MODAL
// Selectors


var projectOne = document.querySelector('.project-one');
var projectTwo = document.querySelector('.project-two');
var modalContainer;

function closeModal() {
  modalContainer.classList.remove('show-modal');
} // Show Modal


projectOne.addEventListener('click', function () {
  modalContainer = generateModal(projectOneObj);
  modalContainer.classList.add('show-modal');
});
projectTwo.addEventListener('click', function () {
  modalContainer = generateModal(projectTwoObj);
  modalContainer.classList.add('show-modal');
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54072" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map