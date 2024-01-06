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
var Footer_module_sass_1 = require("./Footer.module.sass");
var GenerateSvg_1 = require("../GenerateSvg/GenerateSvg");
var react_transition_group_1 = require("react-transition-group");
var animate_1 = require("../../animate/animate");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
function Footer(props) {
    return (React.createElement(react_transition_group_1.Transition, { "in": props.visible, timeout: 1000 }, function (state) { return (React.createElement("footer", { style: __assign(__assign(__assign({}, animate_1.defaultStyleFooter), { 'transitionDelay': '2.2s' }), animate_1.transitionY[state]), className: Footer_module_sass_1["default"].footer },
        React.createElement("div", { className: Footer_module_sass_1["default"].cont_icon },
            React.createElement("a", { className: Footer_module_sass_1["default"].footer_icon, href: "" },
                React.createElement(GenerateSvg_1["default"], { id: '#' }),
                " "),
            React.createElement("a", { className: Footer_module_sass_1["default"].footer_icon, href: "https://github.com/IliaBes" },
                React.createElement(bs_1.BsGithub, null),
                " "),
            React.createElement("a", { className: Footer_module_sass_1["default"].footer_icon, href: "https://t.me/@warpBes" },
                " ",
                React.createElement(fa_1.FaTelegramPlane, null),
                " ")))); }));
}
exports["default"] = Footer;
