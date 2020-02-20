/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../browserConfig.js":
/*!***************************!*\
  !*** ../browserConfig.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst chromeOptions = {\n  headless: true,\n  slowMo: 10,\n  devtools: true,\n  args: ['--no-sandbox', '--disable-setuid-sandbox']\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chromeOptions);\n\n//# sourceURL=webpack:///../browserConfig.js?");

/***/ }),

/***/ "./interfaces/mercabarna.js":
/*!**********************************!*\
  !*** ./interfaces/mercabarna.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _browserConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../browserConfig */ \"../browserConfig.js\");\n\n\n\n\nconst url = 'https://www.mercabarna.es/serveis/es_estadistiques-diaries';\n\nconst getData = async () => {\n  console.log('Attempting to scrape');\n\n  try {\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0___default.a.launch({ ..._browserConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      executablePath: process.env.CHROME_EXECUTABLE_PATH\n    });\n    const page = await browser.newPage();\n    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');\n    await page._client.send('Page.setDownloadBehavior', {\n      behavior: 'allow',\n      downloadPath: path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, '../')\n    });\n    await page.goto(url);\n    const element = await page.$('[name=\"generar\"]');\n    element.click();\n    await page.waitForNavigation({\n      waitUntil: 'networkidle0'\n    });\n    await page.waitFor('tbody');\n    const data = await page.evaluate(() => {\n      const tbody = Array.from(document.querySelector('tbody').children);\n      const caption = document.querySelector('caption').innerHTML;\n      const date = caption.slice(caption.match(/[0-9]/).index, caption.length);\n      const products = tbody.map(child => ({\n        name: child.children[0].innerHTML,\n        dominant: parseFloat(child.children[1].innerHTML.replace(/,/g, '.')),\n        max: parseFloat(child.children[2].innerHTML.replace(/,/g, '.')),\n        min: parseFloat(child.children[3].innerHTML.replace(/,/g, '.'))\n      }));\n      return {\n        date,\n        products\n      };\n    });\n    await browser.close();\n    return data;\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst ISO = fileDate => {\n  const fragments = fileDate.split('-');\n  return `${fragments[2]}-${fragments[1]}-${fragments[0]}`;\n};\n\nconst checkDate = dataDate => {\n  const date = new Date();\n  const maxPeriod = new Date().setDate(date.getDate() - 3);\n  const dataDateOnTime = new Date(ISO(dataDate)).getTime();\n  return maxPeriod < dataDateOnTime;\n};\n\nconst mercabarna = async () => {\n  const data = await getData();\n  const isValidDate = checkDate(data.date);\n\n  if (isValidDate) {\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, `../assets/output/${data.date}.json`), JSON.stringify(data, null, 2));\n    console.log('File has been written');\n    return;\n  }\n\n  console.log('Invalid date');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mercabarna);\n/* WEBPACK VAR INJECTION */}.call(this, \"interfaces\"))\n\n//# sourceURL=webpack:///./interfaces/mercabarna.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./server/tasks.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_0__[\"config\"])();\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst port = process.env.PORT;\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\nconst server = app.listen(port, async () => {\n  console.log(`Starting on port ${port}`);\n  await Object(_tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/tasks.js":
/*!*************************!*\
  !*** ./server/tasks.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var interfaces_mercabarna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! interfaces/mercabarna */ \"./interfaces/mercabarna.js\");\n\n\nconst toMilliseconds = seconds => seconds * 1000;\n\nconst tasks = async () => {\n  const cicle = async () => {\n    await Object(interfaces_mercabarna__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const oneDay26h = toMilliseconds(93600);\n    console.log(`New task scheduled`);\n    setTimeout(cicle, oneDay26h);\n  };\n\n  await cicle();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasks);\n\n//# sourceURL=webpack:///./server/tasks.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });