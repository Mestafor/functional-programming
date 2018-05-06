var flickr =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/flickr/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/flickr/src/index.js":
/*!*************************************!*\
  !*** ./src/app/flickr/src/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst compose = __webpack_require__(/*! ../../../functions/compose */ \"./src/functions/compose/index.js\");\nconst trace = __webpack_require__(/*! ../../../functions/trace */ \"./src/functions/trace/index.js\");\nconst curry = __webpack_require__(/*! ../../../functions/curry */ \"./src/functions/curry/index.js\");\nconst prop = __webpack_require__(/*! ../../../objects/prop */ \"./src/objects/prop/index.js\");\nconst map = __webpack_require__(/*! ../../../lists/map */ \"./src/lists/map/index.js\");\nconst setHTML = __webpack_require__(/*! ../../../dom/setHTML */ \"./src/dom/setHTML/index.js\");\n\nconsole.log('Flickr APP');\n\nconst data = {\n\t\t\"title\": \"Recent Uploads tagged cats\",\n\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/tags\\/cats\\/\",\n\t\t\"description\": \"\",\n\t\t\"modified\": \"2018-05-06T07:29:28Z\",\n\t\t\"generator\": \"https:\\/\\/www.flickr.com\",\n\t\t\"items\": [\n\t   {\n\t\t\t\"title\": \" \",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/157057197@N06\\/41878220132\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/947\\/41878220132_8dc5e3ec19_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-03-14T07:47:14-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/157057197@N06\\/\\\">nina_blechschmidt<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/157057197@N06\\/41878220132\\/\\\" title=\\\" \\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/947\\/41878220132_8dc5e3ec19_m.jpg\\\" width=\\\"240\\\" height=\\\"180\\\" alt=\\\" \\\" \\/><\\/a><\\/p> \",\n\t\t\t\"published\": \"2018-05-06T07:29:28Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"nina_blechschmidt\\\")\",\n\t\t\t\"author_id\": \"157057197@N06\",\n\t\t\t\"tags\": \"blackandwhite cats\"\n\t   },\n\t   {\n\t\t\t\"title\": \"_NCL4871-Edit\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/118463423@N07\\/41204527244\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/946\\/41204527244_4d1572f90f_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-04-28T14:25:20-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/118463423@N07\\/\\\">chitoroid<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/118463423@N07\\/41204527244\\/\\\" title=\\\"_NCL4871-Edit\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/946\\/41204527244_4d1572f90f_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"_NCL4871-Edit\\\" \\/><\\/a><\\/p> \",\n\t\t\t\"published\": \"2018-05-06T07:28:39Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"chitoroid\\\")\",\n\t\t\t\"author_id\": \"118463423@N07\",\n\t\t\t\"tags\": \"nikond750 afsnikkor2470mmf28ged japan hokkaido sapporo cats\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/27052823017\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/962\\/27052823017_7b7d6e79e0_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-06T00:08:17-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/imoviesh\\/\\\">ImovieSh<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/27052823017\\/\\\" title=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/962\\/27052823017_7b7d6e79e0_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\" \\/><\\/a><\\/p> <p>Watch high quality movies at <a href=\\\"http:\\/\\/ImovieSh.com\\/\\\" rel=\\\"nofollow\\\">ImovieSh.com\\/<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T07:08:17Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"ImovieSh\\\")\",\n\t\t\t\"author_id\": \"160658215@N07\",\n\t\t\t\"tags\": \"cute dogs animals aww cats love girls movie animal images baby birds adorable\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Buster\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/lsmcosio\\/27052793427\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/825\\/27052793427_f3654f53c8_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-03T10:22:46-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/lsmcosio\\/\\\">lsmcosio<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/lsmcosio\\/27052793427\\/\\\" title=\\\"Buster\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/825\\/27052793427_f3654f53c8_m.jpg\\\" width=\\\"240\\\" height=\\\"135\\\" alt=\\\"Buster\\\" \\/><\\/a><\\/p> \",\n\t\t\t\"published\": \"2018-05-06T07:05:45Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"lsmcosio\\\")\",\n\t\t\t\"author_id\": \"39319018@N03\",\n\t\t\t\"tags\": \"fujifilm pets cats blackandwhite x100f\"\n\t   },\n\t   {\n\t\t\t\"title\": \"IMG_0033(Edited)\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/7151568@N02\\/41203885084\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/824\\/41203885084_57286ff121_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-02-03T17:23:22-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/7151568@N02\\/\\\">teffnelson<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/7151568@N02\\/41203885084\\/\\\" title=\\\"IMG_0033(Edited)\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/824\\/41203885084_57286ff121_m.jpg\\\" width=\\\"209\\\" height=\\\"240\\\" alt=\\\"IMG_0033(Edited)\\\" \\/><\\/a><\\/p> <p>Cami Girl<\\/p>\",\n\t\t\t\"published\": \"2018-05-06T06:59:24Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"teffnelson\\\")\",\n\t\t\t\"author_id\": \"7151568@N02\",\n\t\t\t\"tags\": \"camigirl cats\"\n\t   },\n\t   {\n\t\t\t\"title\": \"my-moonlight-us: This cat is a selfie addict \\ud83d\\ude01\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/41877769312\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/954\\/41877769312_a7745cf69a_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T23:54:21-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/cutecatsrus\\/\\\">CuteCatsRUs<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/41877769312\\/\\\" title=\\\"my-moonlight-us: This cat is a selfie addict \\ud83d\\ude01\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/954\\/41877769312_a7745cf69a_m.jpg\\\" width=\\\"240\\\" height=\\\"240\\\" alt=\\\"my-moonlight-us: This cat is a selfie addict \\ud83d\\ude01\\\" \\/><\\/a><\\/p> <p>via Tumblr <a href=\\\"https:\\/\\/ift.tt\\/2HXSmRq\\\" rel=\\\"nofollow\\\">ift.tt\\/2HXSmRq<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T06:54:21Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"CuteCatsRUs\\\")\",\n\t\t\t\"author_id\": \"154161330@N05\",\n\t\t\t\"tags\": \"cute cats kitty kittens cat love cutest animals\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/40114348150\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/871\\/40114348150_94cd570162_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T23:33:09-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/imoviesh\\/\\\">ImovieSh<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/40114348150\\/\\\" title=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/871\\/40114348150_94cd570162_m.jpg\\\" width=\\\"160\\\" height=\\\"240\\\" alt=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\" \\/><\\/a><\\/p> <p>Watch high quality movies at <a href=\\\"http:\\/\\/ImovieSh.com\\/\\\" rel=\\\"nofollow\\\">ImovieSh.com\\/<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T06:33:09Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"ImovieSh\\\")\",\n\t\t\t\"author_id\": \"160658215@N07\",\n\t\t\t\"tags\": \"cute dogs animals aww cats love girls movie animal images baby birds adorable\"\n\t   },\n\t   {\n\t\t\t\"title\": \"A Tail Of 2 Shelter Kitties (as written by Gigi)\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/katzenworld\\/40114005860\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/869\\/40114005860_81b7803da8_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T23:07:15-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/katzenworld\\/\\\">katzenworld<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/katzenworld\\/40114005860\\/\\\" title=\\\"A Tail Of 2 Shelter Kitties (as written by Gigi)\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/869\\/40114005860_81b7803da8_m.jpg\\\" width=\\\"240\\\" height=\\\"162\\\" alt=\\\"A Tail Of 2 Shelter Kitties (as written by Gigi)\\\" \\/><\\/a><\\/p> <p>Hi, I\\u2019m Gigi, aren\\u2019t I beautiful! Sadly I didn\\u2019t always look so good. When I was younger I was found in a really bad way at the side of a road. I was taken to an animal shelter where the hoomans made me well and put me up for adoption.<br \\/> I was re-homed and taken back twice before my next hooman ad... <br \\/> <br \\/> #Cat, #Cats, #Cute, #Funny, #Katze, #Katzen, #Katzenworld, #Kawaii, #\\u306d\\u3053, #\\u732b #GuestCats<br \\/> <br \\/> <a href=\\\"https:\\/\\/katzenworld.co.uk\\/2018\\/05\\/06\\/a-tail-of-2-shelter-kitties-as-written-by-gigi\\/\\\" rel=\\\"nofollow\\\">katzenworld.co.uk\\/2018\\/05\\/06\\/a-tail-of-2-shelter-kitties-...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T06:07:15Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"katzenworld\\\")\",\n\t\t\t\"author_id\": \"141909205@N08\",\n\t\t\t\"tags\": \"cat cats cute funny katze katzen katzenworld kawaii \\u306d\\u3053 \\u732b\"\n\t   },\n\t   {\n\t\t\t\"title\": \"my-moonlight-us: Celebpurrties\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/41921424811\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/946\\/41921424811_2789bf3776_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T23:09:08-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/cutecatsrus\\/\\\">CuteCatsRUs<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/41921424811\\/\\\" title=\\\"my-moonlight-us: Celebpurrties\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/946\\/41921424811_2789bf3776_m.jpg\\\" width=\\\"195\\\" height=\\\"240\\\" alt=\\\"my-moonlight-us: Celebpurrties\\\" \\/><\\/a><\\/p> <p>via Tumblr <a href=\\\"https:\\/\\/ift.tt\\/2FKqZsl\\\" rel=\\\"nofollow\\\">ift.tt\\/2FKqZsl<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T06:09:08Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"CuteCatsRUs\\\")\",\n\t\t\t\"author_id\": \"154161330@N05\",\n\t\t\t\"tags\": \"cute cats kitty kittens cat love cutest animals\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Ziva Among The Ranunculus Bulbosus \\u273f\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/xena_bestfriend\\/41021430005\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/973\\/41021430005_e662842a63_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T09:25:07-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/xena_bestfriend\\/\\\">Xena*best friend*<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/xena_bestfriend\\/41021430005\\/\\\" title=\\\"Ziva Among The Ranunculus Bulbosus \\u273f\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/973\\/41021430005_e662842a63_m.jpg\\\" width=\\\"240\\\" height=\\\"136\\\" alt=\\\"Ziva Among The Ranunculus Bulbosus \\u273f\\\" \\/><\\/a><\\/p> <p>Ziva David having a walk through the green grass and the bulbous buttercup (ranunculus bulbosus) flowers.<br \\/> <br \\/> Have a great Sunday, dear Flickr Friends \\u2665<\\/p>\",\n\t\t\t\"published\": \"2018-05-06T05:54:00Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Xena*best friend*\\\")\",\n\t\t\t\"author_id\": \"8740272@N04\",\n\t\t\t\"tags\": \"zivadavid zd ncisspecialagent blackandwhitecats spring ranunculus greengrass longtailcats cats whiskers feline katzen gatto gato chats furry fur pussycat feral tiger pets kittens kitty animals piedmontitaly piemonte canoneos760d italy wood woods wildanimals wild paws calico markings :copyright:allrightsreserved purr digitalrebelt6s canonef70300mm flickr outdoor animal pet ranunculusbulbosus bulbousbuttercup\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/40113663650\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/866\\/40113663650_1c0e30cf5b_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T22:38:05-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/imoviesh\\/\\\">ImovieSh<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/40113663650\\/\\\" title=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/866\\/40113663650_1c0e30cf5b_m.jpg\\\" width=\\\"240\\\" height=\\\"240\\\" alt=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\" \\/><\\/a><\\/p> <p>Watch high quality movies at <a href=\\\"http:\\/\\/ImovieSh.com\\/\\\" rel=\\\"nofollow\\\">ImovieSh.com\\/<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T05:38:05Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"ImovieSh\\\")\",\n\t\t\t\"author_id\": \"160658215@N07\",\n\t\t\t\"tags\": \"cute dogs animals aww cats love girls movie animal images baby birds adorable\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Squeaky\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/136985373@N08\\/41021200085\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/825\\/41021200085_9530c183a7_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-04-20T00:20:11-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/136985373@N08\\/\\\">heights.18145<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/136985373@N08\\/41021200085\\/\\\" title=\\\"Squeaky\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/825\\/41021200085_9530c183a7_m.jpg\\\" width=\\\"240\\\" height=\\\"189\\\" alt=\\\"Squeaky\\\" \\/><\\/a><\\/p> \",\n\t\t\t\"published\": \"2018-05-06T05:28:35Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"heights.18145\\\")\",\n\t\t\t\"author_id\": \"136985373@N08\",\n\t\t\t\"tags\": \"cats feral stray ginger feline kitty ccncby\"\n\t   },\n\t   {\n\t\t\t\"title\": \"my-moonlight-us: \\ud83c\\udf3aSpring\\ud83c\\udf3a cats with \\ud83d\\udc51 \\ud83c\\udf3a \\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/40113320700\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/829\\/40113320700_0118e0d167_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T22:09:12-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/cutecatsrus\\/\\\">CuteCatsRUs<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/cutecatsrus\\/40113320700\\/\\\" title=\\\"my-moonlight-us: \\ud83c\\udf3aSpring\\ud83c\\udf3a cats with \\ud83d\\udc51 \\ud83c\\udf3a \\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/829\\/40113320700_0118e0d167_m.jpg\\\" width=\\\"188\\\" height=\\\"240\\\" alt=\\\"my-moonlight-us: \\ud83c\\udf3aSpring\\ud83c\\udf3a cats with \\ud83d\\udc51 \\ud83c\\udf3a \\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\ud83c\\udf38\\ud83c\\udf3c\\ud83c\\udf3a\\\" \\/><\\/a><\\/p> <p>via Tumblr <a href=\\\"https:\\/\\/ift.tt\\/2IkRiur\\\" rel=\\\"nofollow\\\">ift.tt\\/2IkRiur<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T05:09:12Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"CuteCatsRUs\\\")\",\n\t\t\t\"author_id\": \"154161330@N05\",\n\t\t\t\"tags\": \"cute cats kitty kittens cat love cutest animals\"\n\t   },\n\t   {\n\t\t\t\"title\": \"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/41876367582\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/872\\/41876367582_71b7c559cc_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T21:48:24-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/imoviesh\\/\\\">ImovieSh<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/imoviesh\\/41876367582\\/\\\" title=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/872\\/41876367582_71b7c559cc_m.jpg\\\" width=\\\"240\\\" height=\\\"159\\\" alt=\\\"Watch high quality movies at http:\\/\\/ImovieSh.com\\/\\\" \\/><\\/a><\\/p> <p>Watch high quality movies at <a href=\\\"http:\\/\\/ImovieSh.com\\/\\\" rel=\\\"nofollow\\\">ImovieSh.com\\/<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:48:24Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"ImovieSh\\\")\",\n\t\t\t\"author_id\": \"160658215@N07\",\n\t\t\t\"tags\": \"cute dogs animals aww cats love girls movie animal images baby birds adorable\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Ash\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/27050664807\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/963\\/27050664807_86f625c7b7_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T16:21:18-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/27050664807\\/\\\" title=\\\"The Cats of University Heights: Ash\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/963\\/27050664807_86f625c7b7_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Ash\\\" \\/><\\/a><\\/p> <p>Ash has poor eyesight but he was plenty aware of me. Perhaps I was downwind to him?<br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2017\\/03\\/21\\/the-cats-of-university-heights-grump\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2017\\/03\\/21\\/the-cats-of-university-heights-g...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:34:55Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"leicam10 cats catsofuniversityheights animals sandiego\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Ash\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41876097262\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/946\\/41876097262_e1a6a061f3_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-05T16:21:09-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41876097262\\/\\\" title=\\\"The Cats of University Heights: Ash\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/946\\/41876097262_e1a6a061f3_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Ash\\\" \\/><\\/a><\\/p> <p>More than 13 months after our first meeting, Ash poses during late afternoon. He and Sebastian (<a href=\\\"http:\\/\\/joewilcox.com\\/2017\\/03\\/15\\/the-cats-of-university-heights-slumber\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2017\\/03\\/15\\/the-cats-of-university-heights-s...<\\/a>) live in a designated wildlife habitat.<br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2017\\/03\\/21\\/the-cats-of-university-heights-grump\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2017\\/03\\/21\\/the-cats-of-university-heights-g...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:34:54Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"leicam10 cats catsofuniversityheights animals sandiego\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Charlie (the Third)\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875965362\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/866\\/41875965362_db659ea381_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-03T18:27:19-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875965362\\/\\\" title=\\\"The Cats of University Heights: Charlie (the Third)\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/866\\/41875965362_db659ea381_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Charlie (the Third)\\\" \\/><\\/a><\\/p> <p>Nearly two months after our first meeting, Charlie greets me along Meade Ave., and a few houses down from our first encounter.<br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2018\\/03\\/07\\/the-cats-of-university-heights-charlie-the-third\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2018\\/03\\/07\\/the-cats-of-university-heights-c...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:22:08Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"cats catsofuniversityheights iphonex sandiego animals\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Charlie (the Third)\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875965152\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/975\\/41875965152_be714ba135_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-03T18:27:22-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875965152\\/\\\" title=\\\"The Cats of University Heights: Charlie (the Third)\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/975\\/41875965152_be714ba135_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Charlie (the Third)\\\" \\/><\\/a><\\/p> <p>Charlie hangs out where I expected to find Amanda (<a href=\\\"http:\\/\\/joewilcox.com\\/2017\\/09\\/09\\/the-cats-of-university-heights-amanda\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2017\\/09\\/09\\/the-cats-of-university-heights-a...<\\/a>), whom I had been watching for. The previous week, she limped distressingly, and I want to see that she is okay (hopefully). <br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2018\\/03\\/07\\/the-cats-of-university-heights-charlie-the-third\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2018\\/03\\/07\\/the-cats-of-university-heights-c...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:22:09Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"cats catsofuniversityheights iphonex sandiego animals\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Lucy, Too\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/27050329767\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/909\\/27050329767_a346f15c82_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-04T19:30:21-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/27050329767\\/\\\" title=\\\"The Cats of University Heights: Lucy, Too\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/909\\/27050329767_a346f15c82_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Lucy, Too\\\" \\/><\\/a><\\/p> <p>Meet the second Lucy to appear in the series\\u2014hence the attached \\u201ctoo\\u201d. The first (<a href=\\\"http:\\/\\/joewilcox.com\\/2018\\/04\\/05\\/the-cats-of-university-heights-lucy\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2018\\/04\\/05\\/the-cats-of-university-heights-l...<\\/a>) lives on Georgia Street; my wife and I met her namesake on Florida, between Meade and Mission. The 9-year-old beauty has a stub tail and sweet demeanor. You can\\u2019t not like her.<br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2018\\/05\\/05\\/the-cats-of-university-heights-lucy-too\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2018\\/05\\/05\\/the-cats-of-university-heights-l...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:10:54Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"cats catsofuniversityheights animals sandiego leicam10\"\n\t   },\n\t   {\n\t\t\t\"title\": \"The Cats of University Heights: Lucy, Too\",\n\t\t\t\"link\": \"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875847162\\/\",\n\t\t\t\"media\": {\"m\":\"https:\\/\\/farm1.staticflickr.com\\/947\\/41875847162_a81662c0d0_m.jpg\"},\n\t\t\t\"date_taken\": \"2018-05-04T19:32:48-08:00\",\n\t\t\t\"description\": \" <p><a href=\\\"https:\\/\\/www.flickr.com\\/people\\/joewilcox\\/\\\">Joe Wilcox<\\/a> posted a photo:<\\/p> <p><a href=\\\"https:\\/\\/www.flickr.com\\/photos\\/joewilcox\\/41875847162\\/\\\" title=\\\"The Cats of University Heights: Lucy, Too\\\"><img src=\\\"https:\\/\\/farm1.staticflickr.com\\/947\\/41875847162_a81662c0d0_m.jpg\\\" width=\\\"240\\\" height=\\\"160\\\" alt=\\\"The Cats of University Heights: Lucy, Too\\\" \\/><\\/a><\\/p> <p>Lucy adopted her eventual caretaker, when the woman worked for a consignment shop. The stray came around and grew friendlier until she was transplanted from North Park business to University Heights residence\\u2014where she stayed without fuss. <br \\/> <br \\/> <a href=\\\"http:\\/\\/joewilcox.com\\/2018\\/05\\/05\\/the-cats-of-university-heights-lucy-too\\/\\\" rel=\\\"nofollow\\\">joewilcox.com\\/2018\\/05\\/05\\/the-cats-of-university-heights-l...<\\/a><\\/p>\",\n\t\t\t\"published\": \"2018-05-06T04:10:54Z\",\n\t\t\t\"author\": \"nobody@flickr.com (\\\"Joe Wilcox\\\")\",\n\t\t\t\"author_id\": \"58491094@N00\",\n\t\t\t\"tags\": \"cats catsofuniversityheights animals sandiego leicam10\"\n\t   }\n        ]\n};\n\nconst join = curry(\n  (separator, array) => array.join(separator)\n);\n\nconst app = compose(\n  setHTML('body'),\n  join(''),\n  map(compose(\n    url => `<img src=${url} />`,\n    prop(['media', 'm'])\n  )),\n  prop('items'),\n)\n\napp(data);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/flickr/src/index.js?");

/***/ }),

/***/ "./src/dom/setHTML/index.js":
/*!**********************************!*\
  !*** ./src/dom/setHTML/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../../functions/curry */ \"./src/functions/curry/index.js\");\n\nfunction setHTML(sel, html) {\n  document.querySelector(sel).innerHTML = html;\n}\n\nmodule.exports = curry(setHTML);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/dom/setHTML/index.js?");

/***/ }),

/***/ "./src/functions/IsObject/index.js":
/*!*****************************************!*\
  !*** ./src/functions/IsObject/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../curry */ \"./src/functions/curry/index.js\");\nconst is = curry(__webpack_require__(/*! ../is */ \"./src/functions/is/index.js\"));\n\nconst isObject = is((n) => (typeof n === \"object\") && (n !== null));\n\nmodule.exports = isObject;\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/IsObject/index.js?");

/***/ }),

/***/ "./src/functions/compose/index.js":
/*!****************************************!*\
  !*** ./src/functions/compose/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Composition\n */\n\nfunction compose(...fns) {\n    return (args) => {\n        let result = args;\n        for (let fn of [...fns].reverse()) {\n            result = fn(result);\n        }\n\n        return result;\n    }\n};\n\nmodule.exports = compose;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/compose/index.js?");

/***/ }),

/***/ "./src/functions/curry/index.js":
/*!**************************************!*\
  !*** ./src/functions/curry/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction curry(fn) {\n  return function curried(...args) {\n    if (args.length < fn.length) {\n      return (...next) =>\n        curried(...args, ...next);\n    }\n    return fn(...args);\n  }\n}\n\nmodule.exports = curry;\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/curry/index.js?");

/***/ }),

/***/ "./src/functions/is/index.js":
/*!***********************************!*\
  !*** ./src/functions/is/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports =  (fn, value) => fn(value);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/is/index.js?");

/***/ }),

/***/ "./src/functions/isArray/index.js":
/*!****************************************!*\
  !*** ./src/functions/isArray/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../curry */ \"./src/functions/curry/index.js\");\nconst is = curry(__webpack_require__(/*! ../is */ \"./src/functions/is/index.js\"));\n\nconst isArray = is(n => Array.isArray(n));\n\nmodule.exports = isArray;\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/isArray/index.js?");

/***/ }),

/***/ "./src/functions/isString/index.js":
/*!*****************************************!*\
  !*** ./src/functions/isString/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../curry */ \"./src/functions/curry/index.js\");\nconst is = curry(__webpack_require__(/*! ../is */ \"./src/functions/is/index.js\"));\n\nconst isString = is(value => typeof value === 'string');\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/isString/index.js?");

/***/ }),

/***/ "./src/functions/trace/index.js":
/*!**************************************!*\
  !*** ./src/functions/trace/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../curry */ \"./src/functions/curry/index.js\");\n\nconst trace = curry(function(tag, x){\n  console.log(tag, x);\n  return x;\n});\n\nmodule.exports = trace;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/functions/trace/index.js?");

/***/ }),

/***/ "./src/lists/map/index.js":
/*!********************************!*\
  !*** ./src/lists/map/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst curry = __webpack_require__(/*! ../../functions/curry */ \"./src/functions/curry/index.js\");\n\nfunction map(fn, list) {\n  if(!(list instanceof Array)) throw new Error('Shoud be array');\n  return list.map(fn);\n}\n\nmodule.exports = curry(map);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/lists/map/index.js?");

/***/ }),

/***/ "./src/objects/prop/index.js":
/*!***********************************!*\
  !*** ./src/objects/prop/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst isObject = __webpack_require__(/*! ../../functions/IsObject */ \"./src/functions/IsObject/index.js\");\nconst isArray = __webpack_require__(/*! ../../functions/isArray */ \"./src/functions/isArray/index.js\");\nconst isString = __webpack_require__(/*! ../../functions/isString */ \"./src/functions/isString/index.js\");\nconst curry = __webpack_require__(/*! ../../functions/curry */ \"./src/functions/curry/index.js\");\n\nfunction prop(props, obj) {\n  return isString(props) \n    ? obj[props]\n    : isArray(props)\n    ? props.reduce((value, prop) => {\n      return isObject(value) ? value[prop] : undefined;\n    }, obj) \n    : undefined;\n}\n\nmodule.exports = curry(prop);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/objects/prop/index.js?");

/***/ })

/******/ });