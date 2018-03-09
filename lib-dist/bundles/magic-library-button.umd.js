(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.magic = global.magic || {}, global.magic.library = global.magic.library || {}, global.magic.library.button = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var ButtonDirective = /** @class */ (function () {
    function ButtonDirective() {
        console.log('hello from button');
    }
    return ButtonDirective;
}());
ButtonDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[magic-button]',
                host: {
                    '[class.magic-button-applied]': 'true'
                }
            },] },
];
ButtonDirective.ctorParameters = function () { return []; };
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    return ButtonModule;
}());
ButtonModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [ButtonDirective],
                exports: [ButtonDirective]
            },] },
];
ButtonModule.ctorParameters = function () { return []; };

exports.ButtonModule = ButtonModule;
exports.ButtonDirective = ButtonDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=magic-library-button.umd.js.map
