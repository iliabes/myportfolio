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
var css3_png_1 = require("../../../../../assets/img/css3.png");
var bootstrap_png_1 = require("../../../../../assets/img/bootstrap.png");
var sass_png_1 = require("../../../../../assets/img/sass.png");
var materialize_png_1 = require("../../../../../assets/img/materialize.png");
var tailwind_png_1 = require("../../../../../assets/img/tailwind.png");
var react_transition_group_1 = require("react-transition-group");
var animate_1 = require("../../../../../animate/animate");
var skillBarTitle_1 = require("../components/skillBarTitle/skillBarTitle");
var skillBar_1 = require("../components/skillBar/skillBar");
var SkillCss = function (props) {
    return (React.createElement(react_transition_group_1.Transition, { "in": props.visible, timeout: 1000 }, function (state) { return (React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleField), { 'transitionDelay': '1.2s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].set_skil },
        React.createElement(skillBarTitle_1["default"], { title: "CSS" }),
        React.createElement("p", { className: sectionSkills_module_sass_1["default"].note }, "\u0423\u043C\u0435\u044E Materialize,Foundation, LESS, SASS, jQuery,\u0411\u042D\u041C, Bootstrap 3, "),
        React.createElement(skillBar_1["default"], { visible: props.visible, number: 70 }),
        React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '2.6s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_technologis },
            React.createElement("div", { className: sectionSkills_module_sass_1["default"].cont_techno },
                React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: css3_png_1["default"], alt: "" })),
            React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: sass_png_1["default"], alt: "" })),
            React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '2.8s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: bootstrap_png_1["default"], alt: "" })),
            React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3.2s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: materialize_png_1["default"], alt: "" })),
            React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleSkillBar), { 'transitionDelay': '3.2s' }), animate_1.trasitonX[state]), className: sectionSkills_module_sass_1["default"].cont_techno },
                React.createElement("img", { className: sectionSkills_module_sass_1["default"].technologi, src: tailwind_png_1["default"], alt: "" }))))); }));
};
exports["default"] = SkillCss;
