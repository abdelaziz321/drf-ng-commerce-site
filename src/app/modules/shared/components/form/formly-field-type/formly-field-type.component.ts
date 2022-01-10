import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-type',
  templateUrl: './formly-field-type.component.html',
  styleUrls: []
})
export class FormlyFieldTypeComponent extends FieldType {
  formControl!: FormControl

  get type(): string {
    return this.to.type || 'text'
  }
}
