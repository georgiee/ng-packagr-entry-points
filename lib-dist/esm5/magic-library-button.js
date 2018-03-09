import { Directive, NgModule } from '@angular/core';

var ButtonDirective = /** @class */ (function () {
    function ButtonDirective() {
        console.log('hello from button');
    }
    return ButtonDirective;
}());
ButtonDirective.decorators = [
    { type: Directive, args: [{
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
    { type: NgModule, args: [{
                declarations: [ButtonDirective],
                exports: [ButtonDirective]
            },] },
];
ButtonModule.ctorParameters = function () { return []; };

export { ButtonModule, ButtonDirective };
//# sourceMappingURL=magic-library-button.js.map
