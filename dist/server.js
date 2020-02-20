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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/Product.model */ \"./models/Product.model.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _browserConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../browserConfig */ \"../browserConfig.js\");\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! csvtojson */ \"csvtojson\");\n/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst url = 'https://www.mercabarna.es/serveis/es_estadistiques-diaries';\n\nconst getCSV = async () => {\n  console.log('Attempting to download CSV');\n\n  try {\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0___default.a.launch({ ..._browserConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      executablePath: process.env.CHROME_EXECUTABLE_PATH\n    });\n    const page = await browser.newPage();\n    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');\n    await page._client.send('Page.setDownloadBehavior', {\n      behavior: 'allow',\n      downloadPath: path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(__dirname, '../')\n    });\n    await page.goto(url);\n    const element = await page.$('[name=\"generar\"]');\n    element.click();\n    await page.waitForNavigation({\n      waitUntil: 'networkidle0'\n    });\n    await page.goto(url + '?export');\n    await browser.close();\n  } catch (err) {// console.log(err)\n  }\n};\n\nconst stringToFloat = input => {\n  if (!input) {\n    return null;\n  }\n\n  const slices = input.split(',');\n  return parseFloat(slices[0]) + parseFloat(`0.${slices[1]}`);\n};\n\nconst ISO = fileDate => {\n  const fragments = fileDate.split('-');\n  return `${fragments[2]}-${fragments[1]}-${fragments[0]}`;\n};\n\nconst checkDate = json => {\n  const fileDate = json.find(row => row.name.includes('Fecha')).name.split(' ')[1];\n  const date = new Date();\n  const maxPeriod = new Date().setDate(date.getDate() - 3);\n  console.log('File date', new Date(ISO(fileDate)));\n  console.log('Current date', date);\n  const fileDateOnTime = new Date(ISO(fileDate)).getTime();\n  return {\n    fileDate: new Date(ISO(fileDate)).toISOString().split('T')[0],\n    isValid: maxPeriod < fileDateOnTime\n  };\n};\n\nconst mercabarna = async () => {\n  await getCSV();\n  console.log('Ready to parse');\n  const file = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(__dirname, '../export.csv'), {\n    encoding: 'latin1'\n  });\n  const json = await csvtojson__WEBPACK_IMPORTED_MODULE_5___default()({\n    delimiter: ';',\n    trim: true,\n    noheader: true,\n    headers: ['name', 'dominant', 'max', 'min']\n  }).fromString(file);\n  const {\n    fileDate,\n    isValid\n  } = checkDate(json);\n\n  if (isValid) {\n    console.log('Ready to write DB');\n    const filteredHeader = json.slice(3, json.length);\n    const results = filteredHeader.map(({\n      name,\n      dominant,\n      min,\n      max\n    }) => {\n      return {\n        name,\n        dominant: stringToFloat(dominant),\n        min: stringToFloat(min),\n        max: stringToFloat(max)\n      };\n    });\n    results.unshift({\n      date: fileDate\n    });\n    fs__WEBPACK_IMPORTED_MODULE_2___default.a.writeFileSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(__dirname, `../assets/output/${fileDate}.json`), JSON.stringify(results, null, 2));\n    console.log('Saved as file');\n    results.forEach(async ({\n      name,\n      min,\n      max,\n      dominant\n    }) => {\n      try {\n        const result = await models_Product_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n          name\n        }, {\n          '$push': {\n            min: {\n              value: min\n            },\n            max: {\n              value: max\n            },\n            dominant: {\n              value: dominant\n            }\n          }\n        }, {\n          upsert: true,\n          new: true\n        });\n      } catch (err) {\n        console.log(err);\n      }\n    });\n    console.log('Did DB write');\n    return;\n  }\n\n  console.log('Invalid date');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mercabarna);\n/* WEBPACK VAR INJECTION */}.call(this, \"interfaces\"))\n\n//# sourceURL=webpack:///./interfaces/mercabarna.js?");

/***/ }),

/***/ "./models/Product.model.js":
/*!*********************************!*\
  !*** ./models/Product.model.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Price = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  value: String | Number | NaN\n}, {\n  timestamps: true\n});\nconst Product = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    unique: true\n  },\n  max: [Price],\n  min: [Price],\n  dominant: [Price]\n}, {\n  timestamps: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Product', Product));\n\n//# sourceURL=webpack:///./models/Product.model.js?");

/***/ }),

/***/ "./models/Task.model.js":
/*!******************************!*\
  !*** ./models/Task.model.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Task = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  programmed: String\n}, {\n  timestamps: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Task', Task));\n\n//# sourceURL=webpack:///./models/Task.model.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ \"./server/tasks.js\");\n/* harmony import */ var models_Task_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! models/Task.model */ \"./models/Task.model.js\");\n/* harmony import */ var models_Product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! models/Product.model */ \"./models/Product.model.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_0__[\"config\"])();\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst port = process.env.PORT;\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.get('/find', async (req, res) => {\n  const result = await models_Product_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({ ...req.query\n  });\n  console.log(result);\n  res.send(result);\n});\nconst server = app.listen(port, () => {\n  console.log('Starting...');\n  mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(process.env.MONGO_STRING, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false,\n    useCreateIndex: true\n  });\n});\nconst db = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection;\ndb.on('err', err => console.log(err));\ndb.once('open', async err => {\n  if (err) console.log(err);\n  console.log(`Server started & DB connected. ${port}`);\n\n  if (process.env.LOCALHOST) {\n    await Object(_tasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/tasks.js":
/*!*************************!*\
  !*** ./server/tasks.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var interfaces_mercabarna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! interfaces/mercabarna */ \"./interfaces/mercabarna.js\");\n/* harmony import */ var models_Task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/Task.model */ \"./models/Task.model.js\");\n\n\n\nconst random = (min, max) => {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\n\nconst toMilliseconds = seconds => seconds * 1000;\n\nconst isDayTime = () => {\n  const hours = new Date().getHours();\n\n  if (hours > 5 && hours < 23) {\n    return true;\n  }\n\n  return false;\n};\n\nconst tasks = async () => {\n  const cicle = async () => {\n    await Object(interfaces_mercabarna__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const oneDay26h = toMilliseconds(93600);\n    const newTask = new models_Task_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      programmed: new Date(oneDay26h + Date.now()).toString()\n    });\n    await newTask.save();\n    console.log(`New task scheduled @ ${newTask.programmed}`);\n    setTimeout(cicle, oneDay26h);\n  };\n\n  await cicle();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasks);\n\n//# sourceURL=webpack:///./server/tasks.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csvtojson\");\n\n//# sourceURL=webpack:///external_%22csvtojson%22?");

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

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