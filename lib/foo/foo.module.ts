import { NgModule } from '@angular/core';
import { FooDirective } from './foo.directive';
import { ButtonModule } from '@magic/library/button';

@NgModule({
  declarations: [ FooDirective ],
  imports:[ButtonModule],
  exports: [ FooDirective ]
})
export class FooModule { }
