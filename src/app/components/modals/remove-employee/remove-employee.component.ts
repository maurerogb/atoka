import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,  MatDialogClose} from '@angular/material/dialog';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-remove-employee',
  standalone: true,
  imports: [
    InputComponent,
MatDialogClose,
    ButtonComponent, ReactiveFormsModule, CommonModule
  ],
  templateUrl: './remove-employee.component.html',
  styleUrl: './remove-employee.component.scss'
})
export class RemoveEmployeeComponent {
  @Output() reasonToRemove = new EventEmitter<string>();
  form!: FormGroup ;
  constructor(
    public dialogRef: MatDialogRef<RemoveEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb :  FormBuilder
   ){}
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.fb.group({
      'reason': ['', Validators.required]
    })
   }

   removeEmployee(evt:boolean) {
    if(evt) {
      this.reasonToRemove.emit(this.form.get('reason')?.value)
    }
   }
   close() {
    this.dialogRef.close();
   }
}
