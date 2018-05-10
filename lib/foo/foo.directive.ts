import {Component} from "@angular/core";

@Component({
	selector: '[magic-foo]',
	template: `
      <div class="magic-foo-applied" magic-button></div>`

})

export class FooDirective {
	constructor() {
		console.log('hello from foo');
	}
}
