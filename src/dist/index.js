"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
require("./style/index.sass");
var App_1 = require("./App");
var store_1 = require("./store/store");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var themeProvider_1 = require("./provider/themeProvider");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_redux_1.Provider, { store: store_1["default"] },
        React.createElement(themeProvider_1["default"], null,
            React.createElement(App_1["default"], null)))));
