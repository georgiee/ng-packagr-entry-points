import { Directive, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonDirective {
    constructor() {
        console.log('hello from button');
    }
}
ButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[magic-button]',
                host: {
                    '[class.magic-button-applied]': 'true'
                }
            },] },
];
/** @nocollapse */
ButtonDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonDirective],
                exports: [ButtonDirective]
            },] },
];
/** @nocollapse */
ButtonModule.ctorParameters = () => [];

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

export { ButtonModule, ButtonDirective };
//# sourceMappingURL=magic-library-button.js.map
