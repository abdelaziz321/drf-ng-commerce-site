
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-file-type',
  templateUrl: './formly-file-type.component.html',
  styleUrls: []
})
export class FormlyFileTypeComponent extends FieldType {
  formControl!: FormControl
}
