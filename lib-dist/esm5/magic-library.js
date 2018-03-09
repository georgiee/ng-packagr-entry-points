import { Directive, NgModule } from '@angular/core';

var FooDirective = /** @class */ (function () {
    function FooDirective() {
        console.log('hello from foo');
    }
    return FooDirective;
}());
FooDirective.decorators = [
    { type: Directive, args: [{
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
    { type: NgModule, args: [{
                declarations: [FooDirective],
                exports: [FooDirective]
            },] },
];
FooModule.ctorParameters = function () { return []; };

export { FooModule, FooDirective };
//# sourceMappingURL=magic-library.js.map
