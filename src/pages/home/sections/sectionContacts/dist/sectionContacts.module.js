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
var sectionContacts_module_sass_1 = require("./sectionContacts.module.sass");
var react_transition_group_1 = require("react-transition-group");
var react_1 = require("react");
var animate_1 = require("../../../../animate/animate");
var store_1 = require("../../../../hooks/store");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var ci_1 = require("react-icons/ci");
var io_1 = require("react-icons/io");
var ci_2 = require("react-icons/ci");
var SectionContacts = function () {
    var sectionState = store_1.useAppSelector(function (state) { return (state.counterSlice.visContact); });
    var _a = react_1.useState(store_1.useAppSelector(function (state) { return (state.counterSlice.visContact); })), visible = _a[0], setVisible = _a[1];
    react_1.useEffect(function () {
        if (sectionState != visible) {
            setVisible(sectionState);
        }
    });
    return (React.createElement(react_transition_group_1.Transition, { mountOnEnter: true, "in": visible, timeout: 10000 }, function (state) { return (React.createElement(React.Fragment, null,
        React.createElement("section", { style: __assign(__assign({}, animate_1.defaultStyleSection), animate_1.transitionY[state]), className: sectionContacts_module_sass_1["default"].contacts },
            React.createElement("div", { style: __assign(__assign(__assign({}, animate_1.defaultStyleField), { 'transitionDelay': '.7s' }), animate_1.trasitonX[state]), className: sectionContacts_module_sass_1["default"].cont },
                React.createElement("div", { className: sectionContacts_module_sass_1["default"].cont_bg }),
                React.createElement("p", { className: sectionContacts_module_sass_1["default"].quet }, "\u041C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439"),
                React.createElement("div", { className: sectionContacts_module_sass_1["default"].cont_input },
                    React.createElement("div", { className: sectionContacts_module_sass_1["default"].contact_icon },
                        React.createElement("p", { className: sectionContacts_module_sass_1["default"].sign_icon }, "Telegram"),
                        React.createElement("a", { className: sectionContacts_module_sass_1["default"].contact_icon, href: "https://t.me/warpBes" },
                            React.createElement(fa_1.FaTelegramPlane, null),
                            " ")),
                    React.createElement("div", { className: sectionContacts_module_sass_1["default"].contact_icon },
                        React.createElement("p", { className: sectionContacts_module_sass_1["default"].sign_icon }, "Githab"),
                        React.createElement("a", { className: sectionContacts_module_sass_1["default"].contact_icon, href: "https://github.com/IliaBes" },
                            React.createElement(bs_1.BsGithub, null),
                            " ")),
                    React.createElement("div", { className: sectionContacts_module_sass_1["default"].contact_icon },
                        React.createElement("p", { className: sectionContacts_module_sass_1["default"].sign_icon }, "Insta"),
                        React.createElement("a", { className: sectionContacts_module_sass_1["default"].contact_icon, href: "https://www.instagram.com/" },
                            React.createElement(ci_1.CiInstagram, null),
                            " ")),
                    React.createElement("div", { className: sectionContacts_module_sass_1["default"].contact_icon },
                        React.createElement("p", { className: sectionContacts_module_sass_1["default"].sign_icon }, "Mail"),
                        React.createElement("a", { className: sectionContacts_module_sass_1["default"].contact_icon, href: "mailto:f0rgetful@yandex.ru" },
                            React.createElement(io_1.IoMdMail, null),
                            " ")),
                    React.createElement("div", { className: sectionContacts_module_sass_1["default"].contact_icon },
                        React.createElement("p", { className: sectionContacts_module_sass_1["default"].sign_icon }, "Linkedin"),
                        React.createElement("a", { className: sectionContacts_module_sass_1["default"].contact_icon, href: "https://www.linkedin.com/" },
                            React.createElement(ci_2.CiLinkedin, null),
                            " ")))),
            React.createElement("p", { className: sectionContacts_module_sass_1["default"]["if"] }, "\u0418\u043B\u0438"),
            React.createElement("button", { style: __assign(__assign(__assign({}, animate_1.defaultStyleField), { 'transitionDelay': '.75s' }), animate_1.trasitonX[state]), className: sectionContacts_module_sass_1["default"].downloadBtn }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0437\u044E\u043C\u0435")))); }));
};
exports["default"] = SectionContacts;
