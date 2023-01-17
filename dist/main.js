/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Map from './scripts/map.js';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const root = document.querySelector('#')\n  // console.log('hello world')\n\n  // const map = new Map ();\n  let locations = [['Empire State Building', 40.748817, -73.985428, 1], ['The Vessel', 40.753826, -74.002228, 2]];\n  const f = document.getElementById('myForm');\n  f.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    locations.splice(0, 1);\n    console.log(locations);\n    // window.initMap = initMap;\n    initMap();\n  });\n  function initMap() {\n    var map = new google.maps.Map(document.getElementById('map'), {\n      zoom: 10,\n      center: new google.maps.LatLng(40.776676, -73.971321),\n      mapTypeId: google.maps.MapTypeId.ROADMAP\n    });\n    var infowindow = new google.maps.InfoWindow();\n    var marker, i;\n    for (i = 0; i < locations.length; i++) {\n      marker = new google.maps.Marker({\n        position: new google.maps.LatLng(locations[i][1], locations[i][2]),\n        map: map\n      });\n      google.maps.event.addListener(marker, 'click', function (marker, i) {\n        return function () {\n          infowindow.setContent(locations[i][0]);\n          infowindow.open(map, marker);\n        };\n      }(marker, i));\n    }\n  }\n\n  // window.initMap = initMap;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbnMiLCJmIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImluaXRNYXAiLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiem9vbSIsImNlbnRlciIsIkxhdExuZyIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIlJPQURNQVAiLCJpbmZvd2luZG93IiwiSW5mb1dpbmRvdyIsIm1hcmtlciIsImkiLCJsZW5ndGgiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImFkZExpc3RlbmVyIiwic2V0Q29udGVudCIsIm9wZW4iXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL255Yy1nby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNYXAgZnJvbSAnLi9zY3JpcHRzL21hcC5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKVxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpXG5cbiAgICAvLyBjb25zdCBtYXAgPSBuZXcgTWFwICgpO1xuICAgIGxldCBsb2NhdGlvbnMgPSBbXG4gICAgICAgIFsnRW1waXJlIFN0YXRlIEJ1aWxkaW5nJywgNDAuNzQ4ODE3LCAtNzMuOTg1NDI4LCAxXSxcbiAgICAgICAgWydUaGUgVmVzc2VsJywgNDAuNzUzODI2LCAtNzQuMDAyMjI4LCAyXSxcblxuICAgIF07XG5cbiAgICBjb25zdCBmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpO1xuXG5cbiAgICBmLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxvY2F0aW9ucy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9ucyk7XG4gICAgICAgIC8vIHdpbmRvdy5pbml0TWFwID0gaW5pdE1hcDtcbiAgICAgICAgaW5pdE1hcCgpXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgICAgIHpvb206IDEwLFxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQwLjc3NjY3NiwgLTczLjk3MTMyMSksXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coKTtcblxuICAgICAgICB2YXIgbWFya2VyLCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVsxXSwgbG9jYXRpb25zW2ldWzJdKSxcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgKGZ1bmN0aW9uIChtYXJrZXIsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbmZvd2luZG93LnNldENvbnRlbnQobG9jYXRpb25zW2ldWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KShtYXJrZXIsIGkpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gd2luZG93LmluaXRNYXAgPSBpbml0TWFwO1xufSkgIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEO0VBQ0E7O0VBRUE7RUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWixDQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFDbkQsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUUzQztFQUVELE1BQU1DLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxjQUFjLENBQUMsUUFBUSxDQUFDO0VBRzNDRCxDQUFDLENBQUNGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVSSxLQUFLLEVBQUU7SUFDMUNBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCSixTQUFTLENBQUNLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsU0FBUyxDQUFDO0lBQ3RCO0lBQ0FRLE9BQU8sRUFBRTtFQUNiLENBQUMsQ0FBQztFQUVGLFNBQVNBLE9BQU8sR0FBRztJQUNmLElBQUlDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDZCxRQUFRLENBQUNJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUMxRFcsSUFBSSxFQUFFLEVBQUU7TUFDUkMsTUFBTSxFQUFFLElBQUlKLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSSxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO01BQ3JEQyxTQUFTLEVBQUVOLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTSxTQUFTLENBQUNDO0lBQ3JDLENBQUMsQ0FBQztJQUVGLElBQUlDLFVBQVUsR0FBRyxJQUFJVCxNQUFNLENBQUNDLElBQUksQ0FBQ1MsVUFBVSxFQUFFO0lBRTdDLElBQUlDLE1BQU0sRUFBRUMsQ0FBQztJQUViLEtBQUtBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3RCLFNBQVMsQ0FBQ3VCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDbkNELE1BQU0sR0FBRyxJQUFJWCxNQUFNLENBQUNDLElBQUksQ0FBQ2EsTUFBTSxDQUFDO1FBQzVCQyxRQUFRLEVBQUUsSUFBSWYsTUFBTSxDQUFDQyxJQUFJLENBQUNJLE1BQU0sQ0FBQ2YsU0FBUyxDQUFDc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUV0QixTQUFTLENBQUNzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRWIsR0FBRyxFQUFFQTtNQUNULENBQUMsQ0FBQztNQUVGQyxNQUFNLENBQUNDLElBQUksQ0FBQ1IsS0FBSyxDQUFDdUIsV0FBVyxDQUFDTCxNQUFNLEVBQUUsT0FBTyxFQUFHLFVBQVVBLE1BQU0sRUFBRUMsQ0FBQyxFQUFFO1FBQ2pFLE9BQU8sWUFBWTtVQUNmSCxVQUFVLENBQUNRLFVBQVUsQ0FBQzNCLFNBQVMsQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3RDSCxVQUFVLENBQUNTLElBQUksQ0FBQ25CLEdBQUcsRUFBRVksTUFBTSxDQUFDO1FBQ2hDLENBQUM7TUFDTCxDQUFDLENBQUVBLE1BQU0sRUFBRUMsQ0FBQyxDQUFDLENBQUM7SUFDbEI7RUFFSjs7RUFFQTtBQUNKLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueWMtZ28vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;