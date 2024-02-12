"use strict";
exports.__esModule = true;
var home_1 = require("./pages/home/home");
var react_router_dom_1 = require("react-router-dom");
require("./style/index.sass");
function App() {
    return (React.createElement("div", { className: 'App' },
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1["default"], null) }))));
}
exports["default"] = App;
