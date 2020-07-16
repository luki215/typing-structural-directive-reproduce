import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

export class ExampleGenericDirectiveContext<T> {
  constructor(public $implicit: T) {}
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[exampleGeneric][exampleGenericOf]'
})
export class ExampleGenericDirective<T> {
  constructor(private templateRef: TemplateRef<ExampleGenericDirectiveContext<T>>, private viewContainer: ViewContainerRef) {}

  @Input() public set exampleGenericOf(obs: Observable<T>) {
    obs.subscribe((res) => {
      this.viewContainer.createEmbeddedView(this.templateRef, new ExampleGenericDirectiveContext(res));
    });
  }

  // https://angular.io/guide/structural-directives#typing-the-directives-context
  public static ngTemplateContextGuard<T>(dir: ExampleGenericDirective<T>, ctx: any): ctx is ExampleGenericDirectiveContext<T> {
    return true;
  }
}
