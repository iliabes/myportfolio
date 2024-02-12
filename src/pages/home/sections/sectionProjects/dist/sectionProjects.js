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
var sectionProjects_module_sass_1 = require("./sectionProjects.module.sass");
var react_transition_group_1 = require("react-transition-group");
var react_1 = require("react");
var project_1 = require("./projetc/project");
var store_1 = require("../../../../hooks/store");
var weather_jpg_1 = require("../../../../assets/img/weather.jpg");
var appBook_jpg_1 = require("../../../../assets/img/appBook.jpg");
var waha_jpg_1 = require("../../../../assets/img/waha.jpg");
var food_png_1 = require("../../../../assets/img/food.png");
var neuro_png_1 = require("../../../../assets/img/neuro.png");
var animate_1 = require("../../../../animate/animate");
var SectionProjects = function () {
    var sectionState = store_1.useAppSelector(function (state) { return (state.counterSlice.visProj); });
    var _a = react_1.useState(store_1.useAppSelector(function (state) { return (state.counterSlice.visProj); })), visible = _a[0], setVisible = _a[1];
    react_1.useEffect(function () {
        if (sectionState != visible) {
            setVisible(sectionState);
        }
    });
    return (React.createElement(react_transition_group_1.Transition, { "in": visible, timeout: 700 }, function (state) { return (React.createElement(React.Fragment, null,
        React.createElement("section", { style: __assign(__assign({}, animate_1.defaultStyleSection), animate_1.transitionY[state]), className: sectionProjects_module_sass_1["default"].section_projects },
            React.createElement(project_1["default"], { techologi: ['Vue', 'Vuex', 'Tailwind', 'Vite'], directionRigth: true, visible: visible, link: 'https://admirable-madeleine-faeb93.netlify.app/', title: 'Delicious day recipes', left: true, text: '\u0441\u0430\u0438\u0442 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u044B\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432, \u0432\u0441\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u0441\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0438\u0445 \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u0439\u0442\u0438. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u0430\u043D\u043E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Vue Composition API. \u0414\u0430\u043D\u043D\u044B\u0435 \u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 Edamam API \u0438 TheMealDB API', image: food_png_1["default"] }),
            React.createElement(project_1["default"], { techologi: ['React', 'Redux', 'Typescript', 'ReduxTooolkit', 'Sass'], directionRigth: false, visible: visible, link: 'https://choose-book.vercel.app/', title: 'Choose book', left: false, text: '\u041F\u0440\u0438\u043B\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043A\u043D\u0438\u0433 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430 \u0433\u0430\u0439\u0434\u0435 Sfsignal, \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043A\u043D\u0438\u0433, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u043E\u0442 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u0431\u0435\u0441\u0442\u0441\u0435\u043B\u043B\u0435\u0440\u0430\u043C\u0438. ', image: appBook_jpg_1["default"] }),
            React.createElement(project_1["default"], { techologi: ['Vite', 'Sass'], directionRigth: true, visible: visible, link: 'https://neuro-lending-page.vercel.app/', title: 'Grand Park', left: true, text: '\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u0436\u0438\u043B\u0438\u0449\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 Grand Park. \u041C\u0430\u043A\u0435\u0442 \u0441\u0430\u0439\u0442\u0430 \u0431\u044B\u043B \u0441\u043E\u0437\u0434\u0430\u043D \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0438 Midjourney, \u0434\u043B\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0441\u044F \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 SASS, \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D Vite', image: neuro_png_1["default"] }),
            React.createElement(project_1["default"], { techologi: ['React', 'Redux', 'Typescript', 'ReduxTooolkit', 'Sass'], directionRigth: false, visible: visible, link: 'https://zippy-naiad-c0d8ef.netlify.app/', title: 'Memory card', left: false, text: '\u041A\u0430\u0440\u0442\u043E\u0447\u043D\u0430\u044F \u043C\u0438\u043D\u0438 \u0438\u0433\u0440\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043F\u0430\u043C\u044F\u0442\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 Warhammer 40000.\u0426\u0435\u043B\u044C \u0438\u0433\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u0430 - \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u0432\u0435 \u043A\u0430\u0440\u0442\u044B \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438 \u043D\u0430\u0439\u0442\u0438 \u043F\u0430\u0440\u0443 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.', image: waha_jpg_1["default"] }),
            React.createElement(project_1["default"], { techologi: ['React', 'Redux', 'Typescript', 'ReduxTooolkit', 'Sass'], directionRigth: true, visible: visible, link: 'https://bejewelled-biscochitos-22bf1c.netlify.app/ ', title: 'Weather-forecast', left: true, text: '\u0421\u0430\u0439\u0442 \u043F\u043E\u0433\u043E\u0434\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u0430\u043C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0432 \u0435\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433\u0435,\u043D\u0430 \u043D\u0435\u043C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435  \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u0430\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u043E\u0441\u0430\u0434\u043A\u0430\u043C, \u0432\u0435\u0442\u0440\u0443 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u043C\u0435\u0442\u0435\u043E\u0440\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u043C  , \u0434\u0430\u043D\u044B\u044B\u0435 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 OpenWeatherMap', image: weather_jpg_1["default"] })))); }));
};
exports["default"] = SectionProjects;
