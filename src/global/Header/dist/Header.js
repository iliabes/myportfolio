"use strict";
exports.__esModule = true;
var Header_module_sass_1 = require("./Header.module.sass");
var classnames_1 = require("classnames");
var react_1 = require("react");
var store_1 = require("../../hooks/store");
var slice_1 = require("../../store/slices/slice");
function Header() {
    console.log('header');
    var _a = react_1.useState(true), btnAbout = _a[0], setBtnAbout = _a[1];
    var _b = react_1.useState(false), btnProject = _b[0], setBtnProject = _b[1];
    var _c = react_1.useState(false), btnContact = _c[0], setBtnContact = _c[1];
    var _d = react_1.useState(false), btnSkils = _d[0], setBtnSkils = _d[1];
    var _e = react_1.useState(0), count = _e[0], setCount = _e[1];
    var dispatch = store_1.useAppDispatch();
    function changeSlideBtn(direction) {
        if (direction === '+' && count < 3) {
            changeSlide(++count);
        }
        else if (direction === '-' && count > 0) {
            changeSlide(--count);
        }
    }
    function visibleOff() {
        dispatch(slice_1.visibleProject(false));
        dispatch(slice_1.visibleSkills(false));
        dispatch(slice_1.visibleContacts(false));
        setBtnAbout(false);
        setBtnProject(false);
        setBtnContact(false);
        setBtnSkils(false);
    }
    function changeSlide(num) {
        console.log('input', count);
        switch (num) {
            case (0):
                setCount(0);
                visibleOff();
                setBtnAbout(true);
                break;
            case (1):
                setCount(1);
                visibleOff();
                dispatch(slice_1.visibleProject(true));
                setBtnProject(true);
                break;
            case (2):
                setCount(2);
                visibleOff();
                dispatch(slice_1.visibleProject(true));
                dispatch(slice_1.visibleSkills(true));
                dispatch(slice_1.visibleContacts(false));
                setBtnSkils(true);
                break;
            case (3):
                setCount(3);
                visibleOff();
                dispatch(slice_1.visibleProject(true));
                dispatch(slice_1.visibleSkills(true));
                dispatch(slice_1.visibleContacts(true));
                setBtnContact(true);
                break;
        }
    }
    return (React.createElement("div", { id: 'topLine', className: Header_module_sass_1["default"].top_menu },
        React.createElement("div", { onClick: function () { changeSlideBtn('+'); }, className: classnames_1["default"](Header_module_sass_1["default"].arrow, Header_module_sass_1["default"].arrow_right) }),
        React.createElement("div", { onClick: function () { changeSlideBtn('-'); }, className: classnames_1["default"](Header_module_sass_1["default"].arrow, Header_module_sass_1["default"].arrow_left) }),
        React.createElement("div", { className: Header_module_sass_1["default"].top_item },
            React.createElement("button", { onClick: function () { changeSlide(0); }, id: 'topAbout', className: btnAbout ? classnames_1["default"](Header_module_sass_1["default"].btn, Header_module_sass_1["default"].active) : Header_module_sass_1["default"].btn }, "About "),
            React.createElement("button", { onClick: function () { changeSlide(1); }, id: 'topProjects', className: btnProject ? classnames_1["default"](Header_module_sass_1["default"].btn, Header_module_sass_1["default"].active) : Header_module_sass_1["default"].btn }, "Projects"),
            React.createElement("button", { onClick: function () { changeSlide(2); }, id: 'topSkils', className: btnSkils ? classnames_1["default"](Header_module_sass_1["default"].btn, Header_module_sass_1["default"].active) : Header_module_sass_1["default"].btn }, "Skils"),
            React.createElement("button", { onClick: function () { changeSlide(3); }, id: 'topContacts', className: btnContact ? classnames_1["default"](Header_module_sass_1["default"].btn, Header_module_sass_1["default"].active) : Header_module_sass_1["default"].btn }, "Contacts"))));
}
exports["default"] = Header;
