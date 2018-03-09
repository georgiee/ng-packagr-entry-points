(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.magic = global.magic || {}, global.magic.library = global.magic.library || {}, global.magic.library.foo = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var FooDirective = /** @class */ (function () {
    function FooDirective() {
        console.log('hello from foo');
    }
    return FooDirective;
}());
FooDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[magic-foo]',
                host: {
                    '[class.magic-foo-applied]': 'true'
                }
            },] },
];
FooDirective.ctorParameters = function () { return []; };
var FooModule = /** @class */ (function () {
    function FooModule() {
    }
    return FooModule;
}());
FooModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [FooDirective],
                exports: [FooDirective]
            },] },
];
FooModule.ctorParameters = function () { return []; };

exports.FooModule = FooModule;
exports.FooDirective = FooDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=magic-library-foo.umd.js.map
