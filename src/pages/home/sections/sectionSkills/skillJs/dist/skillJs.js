"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var sectionSkills_module_sass_1 = require("../sectionSkills.module.sass");
var javascript_png_1 = require("../../../../../assets/img/javascript.png");
var react2_png_1 = require("../../../../../assets/img/react2.png");
var jquery_png_1 = require("../../../../../assets/img/jquery.png");
var redux_png_1 = require("../../../../../assets/img/redux.png");
var typescript_png_1 = require("../../../../../assets/img/typescript.png");
var react_transition_group_1 = require("react-transition-group");
var animate_1 = require("../../../../../animate/animate");
var skillBar_1 = require("../components/skillBar/skillBar");
var skillBarTitle_1 = require("../components/skillBarTitle/skillBarTitle");
var SkillJs = function (props) {
    return (React.createElement(react_transition_group_1.Transition, { "in": props.visible, timeout: 700 }, function (state) {
        return (React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleField), { 'transitionDelay': '1.4s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].set_skil },
            React.createElement(skillBarTitle_1["default"], { title: "JS" }),
            React.createElement("p", { className: sectionSkills_module_sass_1["default"].note }, "\u0423\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u043D\u0438\u0435 js(ES 6),React,Typescript "),
            React.createElement(skillBar_1["default"], { visible: props.visible, number: 89 }),
            React.createElement("div", { className: sectionSkills_module_sass_1["default"].cont_technologis },
                React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '2.6s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                    React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: javascript_png_1["default"], alt: "" })),
                React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '2.8s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                    React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: react2_png_1["default"], alt: "" })),
                React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3.4s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                    React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: typescript_png_1["default"], alt: "" })),
                React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3.0s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                    React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: redux_png_1["default"], alt: "" })),
                React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3.2s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                    React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: jquery_png_1["default"], alt: "" })))));
    }));
};
exports["default"] = SkillJs;
