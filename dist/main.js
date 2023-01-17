/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map.js */ \"./src/scripts/map.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const root = document.querySelector('#')\n  // console.log('hello world')\n\n  const map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUM7QUFFbkNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBOztFQUVBLE1BQU1DLEdBQUcsR0FBRyxJQUFJSCx1REFBRyxFQUFHO0FBQzFCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255Yy1nby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXAgZnJvbSAnLi9zY3JpcHRzL21hcC5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKVxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpXG5cbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwICgpO1xufSkgIl0sIm5hbWVzIjpbIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// my codes for map\nclass Map {\n  constructor() {\n    let locations = [['Empire State Building', 40.748817, -73.985428, 1], ['The Vessel', 40.753826, -74.002228, 2]];\n    const f = document.getElementById('myForm');\n    f.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      locations.splice(0, 1);\n      console.log(locations);\n      window.initMap = initMap;\n    });\n    function initMap() {\n      var map = new google.maps.Map(document.getElementById('map'), {\n        zoom: 10,\n        center: new google.maps.LatLng(40.776676, -73.971321),\n        mapTypeId: google.maps.MapTypeId.ROADMAP\n      });\n      var infowindow = new google.maps.InfoWindow();\n      var marker, i;\n      for (i = 0; i < locations.length; i++) {\n        marker = new google.maps.Marker({\n          position: new google.maps.LatLng(locations[i][1], locations[i][2]),\n          map: map\n        });\n        google.maps.event.addListener(marker, 'click', function (marker, i) {\n          return function () {\n            infowindow.setContent(locations[i][0]);\n            infowindow.open(map, marker);\n          };\n        }(marker, i));\n      }\n    }\n    window.initMap = initMap;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0EsTUFBTUEsR0FBRyxDQUFDO0VBQ05DLFdBQVcsR0FBSTtJQUNYLElBQUlDLFNBQVMsR0FBRyxDQUNaLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUNuRCxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBRTNDO0lBRUQsTUFBTUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFHM0NGLENBQUMsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVVDLEtBQUssRUFBRTtNQUMxQ0EsS0FBSyxDQUFDQyxjQUFjLEVBQUU7TUFDdEJOLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxTQUFTLENBQUM7TUFDdEJVLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQzVCLENBQUMsQ0FBQztJQUVGLFNBQVNBLE9BQU8sR0FBRztNQUNmLElBQUlDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMURZLElBQUksRUFBRSxFQUFFO1FBQ1JDLE1BQU0sRUFBRSxJQUFJSCxNQUFNLENBQUNDLElBQUksQ0FBQ0csTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNyREMsU0FBUyxFQUFFTCxNQUFNLENBQUNDLElBQUksQ0FBQ0ssU0FBUyxDQUFDQztNQUNyQyxDQUFDLENBQUM7TUFFRixJQUFJQyxVQUFVLEdBQUcsSUFBSVIsTUFBTSxDQUFDQyxJQUFJLENBQUNRLFVBQVUsRUFBRTtNQUU3QyxJQUFJQyxNQUFNLEVBQUVDLENBQUM7TUFFYixLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd4QixTQUFTLENBQUN5QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ25DRCxNQUFNLEdBQUcsSUFBSVYsTUFBTSxDQUFDQyxJQUFJLENBQUNZLE1BQU0sQ0FBQztVQUM1QkMsUUFBUSxFQUFFLElBQUlkLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRyxNQUFNLENBQUNqQixTQUFTLENBQUN3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRXhCLFNBQVMsQ0FBQ3dCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2xFWixHQUFHLEVBQUVBO1FBQ1QsQ0FBQyxDQUFDO1FBRUZDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVCxLQUFLLENBQUN1QixXQUFXLENBQUNMLE1BQU0sRUFBRSxPQUFPLEVBQUcsVUFBVUEsTUFBTSxFQUFFQyxDQUFDLEVBQUU7VUFDakUsT0FBTyxZQUFZO1lBQ2ZILFVBQVUsQ0FBQ1EsVUFBVSxDQUFDN0IsU0FBUyxDQUFDd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdENILFVBQVUsQ0FBQ1MsSUFBSSxDQUFDbEIsR0FBRyxFQUFFVyxNQUFNLENBQUM7VUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBRUEsTUFBTSxFQUFFQyxDQUFDLENBQUMsQ0FBQztNQUNsQjtJQUVKO0lBRUFkLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQzVCO0FBQ0o7QUFFQSwrREFBZWIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL255Yy1nby8uL3NyYy9zY3JpcHRzL21hcC5qcz9mNTZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG15IGNvZGVzIGZvciBtYXBcbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBsZXQgbG9jYXRpb25zID0gW1xuICAgICAgICAgICAgWydFbXBpcmUgU3RhdGUgQnVpbGRpbmcnLCA0MC43NDg4MTcsIC03My45ODU0MjgsIDFdLFxuICAgICAgICAgICAgWydUaGUgVmVzc2VsJywgNDAuNzUzODI2LCAtNzQuMDAyMjI4LCAyXSxcblxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJyk7XG5cblxuICAgICAgICBmLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbG9jYXRpb25zLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9ucyk7XG4gICAgICAgICAgICB3aW5kb3cuaW5pdE1hcCA9IGluaXRNYXA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgICAgICAgICB6b29tOiAxMCxcbiAgICAgICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNzc2Njc2LCAtNzMuOTcxMzIxKSxcbiAgICAgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpO1xuXG4gICAgICAgICAgICB2YXIgbWFya2VyLCBpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVsxXSwgbG9jYXRpb25zW2ldWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgKGZ1bmN0aW9uIChtYXJrZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm93aW5kb3cuc2V0Q29udGVudChsb2NhdGlvbnNbaV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKG1hcmtlciwgaSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuaW5pdE1hcCA9IGluaXRNYXA7IFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sIm5hbWVzIjpbIk1hcCIsImNvbnN0cnVjdG9yIiwibG9jYXRpb25zIiwiZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJpbml0TWFwIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsInpvb20iLCJjZW50ZXIiLCJMYXRMbmciLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJST0FETUFQIiwiaW5mb3dpbmRvdyIsIkluZm9XaW5kb3ciLCJtYXJrZXIiLCJpIiwibGVuZ3RoIiwiTWFya2VyIiwicG9zaXRpb24iLCJhZGRMaXN0ZW5lciIsInNldENvbnRlbnQiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueWMtZ28vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;