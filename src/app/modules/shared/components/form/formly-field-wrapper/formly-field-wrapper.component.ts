import { FieldWrapper } from '@ngx-formly/core'
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'formly-field-wrapper',
  templateUrl: './formly-field-wrapper.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldWrapperComponent extends FieldWrapper {}
