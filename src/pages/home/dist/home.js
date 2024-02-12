"use strict";
exports.__esModule = true;
var home_module_sass_1 = require("./home.module.sass");
var sectionAbout_1 = require("./sections/sectionAbout/sectionAbout");
var sectionProjects_1 = require("./sections/sectionProjects/sectionProjects");
var sectionSkills_1 = require("./sections/sectionSkills/sectionSkills");
var sectionContacts_module_1 = require("./sections/sectionContacts/sectionContacts.module");
var Header_1 = require("../../global/Header/Header");
var Home = function () {
    return (React.createElement("div", { className: home_module_sass_1["default"].home },
        React.createElement(Header_1["default"], null),
        React.createElement(sectionAbout_1["default"], null),
        React.createElement(sectionProjects_1["default"], null),
        React.createElement(sectionSkills_1["default"], null),
        React.createElement(sectionContacts_module_1["default"], null)));
};
exports["default"] = Home;
