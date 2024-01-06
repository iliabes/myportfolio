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
var project_module_sass_1 = require("./project.module.sass");
var react_transition_group_1 = require("react-transition-group");
var animate_1 = require("../../../../../animate/animate");
var classnames_1 = require("classnames");
var numb = [1, 2, 3, 4, 5];
var Propject = function (props) {
    var defStyleImg = animate_1.defaultStyleFieldRight;
    var defStyleSign = animate_1.defaultStyleField;
    if (props.left) {
        defStyleImg = animate_1.defaultStyleField;
        defStyleSign = animate_1.defaultStyleFieldRight;
    }
    console.log(props.techologi);
    var listItems = props.techologi.map(function (item, index) { return React.createElement("div", { key: index, className: project_module_sass_1["default"].techologi },
        React.createElement("p", { className: project_module_sass_1["default"].text_techo }, item)); });
    return (React.createElement(react_transition_group_1.Transition, { "in": props.visible, timeout: 100 }, function (state) { return (React.createElement("div", { className: props.left ? classnames_1["default"](project_module_sass_1["default"].projects_cont) : classnames_1["default"](project_module_sass_1["default"].projects_cont, project_module_sass_1["default"].left) },
        React.createElement("div", { style: __assign(__assign(__assign({}, defStyleImg), { 'transitionDelay': '.6s' }), animate_1.trasitonX[state]), className: project_module_sass_1["default"].cont_img },
            React.createElement("div", { className: project_module_sass_1["default"].hoverCurtain },
                React.createElement("a", { href: props.link },
                    React.createElement("img", { className: project_module_sass_1["default"].img_portfolio, src: props.image, alt: "" })),
                React.createElement("div", { className: classnames_1["default"](project_module_sass_1["default"].curtain, project_module_sass_1["default"].curtain_left) }),
                React.createElement("div", { className: classnames_1["default"](project_module_sass_1["default"].curtain, project_module_sass_1["default"].curtain_right) }),
                React.createElement("figcaption", { className: project_module_sass_1["default"].fig },
                    React.createElement("h2", null, props.title)))),
        React.createElement("div", { style: __assign(__assign(__assign({}, defStyleSign), { 'transitionDelay': '.6s' }), animate_1.trasitonX[state]), className: props.directionRigth ? project_module_sass_1["default"].cont_sign : classnames_1["default"](project_module_sass_1["default"].cont_sign, project_module_sass_1["default"].cont_sign_left) },
            React.createElement("h2", { className: project_module_sass_1["default"].gold }, props.title),
            React.createElement("p", { className: project_module_sass_1["default"].sign_project }, props.text),
            React.createElement("div", { className: project_module_sass_1["default"].cont_techologi }, listItems)))); }));
};
exports["default"] = Propject;
// <div className={s.techologi}><p className={s.text_techo}>React</p></div>
// <div className={s.techologi}><p className={s.text_techo}>Redux</p></div>
// <div className={s.techologi}><p className={s.text_techo}>Typescript</p></div>
// <div className={s.techologi}><p className={s.text_techo}>ReduxTooolkit</p></div>
// <div className={s.techologi}><p className={s.text_techo}>Sass</p></div>
