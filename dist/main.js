/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){\n    const container = document.querySelector('#content');\n\n    function load(){\n        const heading = document.createElement('h1');\n        heading.textContent = \"Get in Touch with us! 📞\";\n\n        const paragraph = document.createElement('p');\n        let text = `We're not just about crafting mouthwatering pizzas; we're also all ears when it comes to your feedback, questions, or special requests.\n        Connecting with Da Michele Paradise is a breeze through our customer-centric Contact Page. \n        Here's why it's the gateway to a slice of pizza perfection:`\n        paragraph.textContent = text;\n\n        const image = new Image();\n        const imageUrl = \"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n        image.src = imageUrl;\n        image.width = \"600\";\n        image.height = \"400\";\n\n        container.appendChild(heading);\n        container.appendChild(paragraph);\n        container.appendChild(image);\n        \n    }\n\n    return {load};\n})());\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactLoad.js?");

/***/ }),

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){\n    const container = document.querySelector('#content');\n\n    function load(){\n        const heading = document.createElement('h1');\n        heading.textContent = \"Da Michele\";\n\n        const paragraph = document.createElement('p');\n        let text = `At Da Michele Paradise, we're not just about pizza; we're about creating memories. \n        Our landing page is your first step towards a world of flavor and fun. \n        With a passion for excellence, we invite you to explore, savor, and indulge in the world of gourmet pizza. \n        So, what are you waiting for? Click, explore, and embark on a culinary adventure like no other! 🌟🍕🌟`\n        paragraph.textContent = text;\n\n        const image = new Image();\n        const imageUrl = \"https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n        image.src = imageUrl;\n        image.width = \"600\";\n        image.height = \"400\";\n\n        container.appendChild(heading);\n        container.appendChild(paragraph);\n        container.appendChild(image);\n        \n    }\n\n    return {load};\n})());\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homeLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLoad */ \"./src/homeLoad.js\");\n/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad */ \"./src/menuLoad.js\");\n/* harmony import */ var _contactLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoad */ \"./src/contactLoad.js\");\n\n\n\n\n_homeLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\n\nconst tabList = document.querySelectorAll('a');\n\ntabList.forEach((tab) => {\n    tab.addEventListener('click', (e) => {\n        //remove style from all tabs\n        styleTabs(getTabs(e));\n        //add style to current tab\n        e.target.style.color = \"orange\";\n        //unload previous module\n        clearContainer();\n        //module load\n        tabLoader(e.target.textContent);\n\n    });\n});\n\nfunction clearContainer() {\n    const container = document.querySelector('#content');\n    while (container.childElementCount != 0) {\n        container.removeChild(container.firstChild);\n    }\n}\n\nfunction styleTabs(tabs) {\n    for (let i = 0; i < tabs.length; i++) {\n        tabs[i].style.color = \"black\";\n    }\n}\n\nfunction getTabs(e) {\n    // for collecting siblings\n    let siblings = [];\n    // if no parent, return no sibling\n    if (!e.target.parentNode) {\n        return siblings;\n    }\n    // first child of the parent node\n    let sibling = e.target.parentNode.parentNode.firstElementChild;\n\n    // collecting siblings\n    while (sibling) {\n        if (sibling.nodeType === 1 && sibling !== e) {\n            siblings.push(sibling.firstChild);\n        }\n        sibling = sibling.nextSibling;\n    }\n\n    return siblings;\n}\n\nfunction tabLoader(tabName) {\n    switch (tabName) {\n        case \"Home\":\n            _homeLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\n            break;\n        case \"Menu\":\n            _menuLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load();\n            break;\n        case \"Contact\":\n            _contactLoad__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load();\n            break;\n        default:\n            break;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n    const container = document.querySelector('#content');\n\n    function load() {\n        const heading = document.createElement('h1');\n        heading.textContent = \"Pizza Paradise! 🍕\";\n\n        const paragraph = document.createElement('p');\n        let text = `At our cozy pizzeria, we believe in the magic of simplicity.\n        Our menu features just four outstanding pizzas, each a culinary masterpiece that will transport your taste buds to a world of pure delight. \n        From classic favorites to inventive creations, we've perfected the art of pizza-making. \n        Allow us to introduce our irresistible offerings:`\n        paragraph.textContent = text;\n\n        const grid = document.createElement('div');\n        grid.style.display = \"grid\";\n        grid.style.gridTemplateColumns = \"400px 400px\";\n        grid.style.gridTemplateRows = \"400px 400px\";\n\n        grid.appendChild(createPizza(\"https://images.pexels.com/photos/18542518/pexels-photo-18542518/free-photo-of-pizza-straight-from-oven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\"));\n        grid.appendChild(createPizza(\"https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\"));\n        grid.appendChild(createPizza(\"https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\"));\n        grid.appendChild(createPizza(\"https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\"));\n\n        container.appendChild(heading);\n        container.appendChild(paragraph);\n        container.appendChild(grid);\n\n    }\n\n    function createPizza(url){\n        let pizza = document.createElement('div');\n        pizza.style.backgroundPosition = \"center\"\n        pizza.style.backgroundSize = \"cover\";\n        pizza.style.backgroundImage = `url(${url})`;\n        return pizza;\n    }\n\n    return { load };\n})());\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuLoad.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;