import { Directive, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooDirective {
    constructor() {
        console.log('hello from foo');
    }
}
FooDirective.decorators = [
    { type: Directive, args: [{
                selector: '[magic-foo]',
                host: {
                    '[class.magic-foo-applied]': 'true'
                }
            },] },
];
/** @nocollapse */
FooDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooModule {
}
FooModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FooDirective],
                exports: [FooDirective]
            },] },
];
/** @nocollapse */
FooModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FooModule, FooDirective };
//# sourceMappingURL=magic-library-foo.js.map
