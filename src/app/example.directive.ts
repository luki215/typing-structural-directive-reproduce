import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

export class ExampleDirectiveContext<T> {
  constructor(public $implicit: T) {}
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[example][exampleOf]'
})
export class ExampleDirective<T> {
  constructor(private templateRef: TemplateRef<ExampleDirectiveContext<string>>, private viewContainer: ViewContainerRef) {}

  @Input() public set exampleOf(obs: Observable<T>) {
    obs.subscribe((res) => {
      this.viewContainer.createEmbeddedView(this.templateRef, new ExampleDirectiveContext('asd'));
    });
  }

  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */
  public static ngTemplateContextGuard<T>(dir: ExampleDirective<T>, ctx: any): ctx is ExampleDirectiveContext<T> {
    return true;
  }
}
