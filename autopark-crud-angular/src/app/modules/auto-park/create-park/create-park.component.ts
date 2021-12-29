import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ParksService } from '../../../services/parks/parks.service';

@Component({
  selector: 'jmc-create-park',
  templateUrl: './create-park.component.html',
  styleUrls: ['./create-park.component.scss']
})
export class CreateParkComponent implements OnInit {

  public parkForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateParkComponent>,
    private snackBar: MatSnackBar,
    private parkService: ParksService
  ) { }

  ngOnInit() {
    this.initForms();
  }

  private initForms() {
    this.parkForm = this.formBuilder.group({
      name: [{ value: null, disabled: false}, [Validators.required, Validators.minLength(6)]]
    });
  }

  public close(result = null) {
    this.dialogRef.close(result);
  }

  public save() {
    this.parkService.create(this.parkForm.getRawValue()).toPromise()
    .then(response => this.close(response))
    .catch(error => this.snackBar.open(error.message));
  }

}
