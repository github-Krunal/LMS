import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { IAttachmentResponse } from '../../../model/uploadImage.interface';
import { ApiService } from '../../../services/api.service';
import { AngularModule } from '../../../modules/angular/angular.module';
import { UtilityService } from '../../../utility/utility.service';

@Component({
  selector: 'attachment',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './attachment.component.html',
  styleUrl: './attachment.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class AttachmentComponent {
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;

  @ViewChild('fileInput') fileInput!: ElementRef;

  protected fieldValue:string="";
  protected selectedFile:{displayName:string,fileURL:string}={displayName:'',fileURL:''};

  constructor (private apiService:ApiService,private utilityService:UtilityService){}

  ngOnInit(): void {
    this.initializeForm();
  }
  private initializeForm(){
    this.addControlInForm();
 }

 private getFormValue(){
   this.frameworkForm.get(this.field.formControlName)?.valueChanges.subscribe(value => {
     this.selectedFile.displayName=this.utilityService.formatAttachmentName(value);
     this.selectedFile.fileURL=value;
   });
 }

 private addControlInForm(): void {
   this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
   this.getFormValue();
 }

 onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    this.handleFiles(input.files);
  }
}

private handleFiles(fileList: FileList): void {
  const files = Array.from(fileList);
  // 🚀 Trigger API upload right away
  this.uploadFiles(files);
}

private uploadFiles(files: File[]): void {
  this.apiService.uploadAttachment(files[0]).subscribe((attachmentResponse:IAttachmentResponse) => {
    this.frameworkForm.get(this.field.formControlName)?.setValue(attachmentResponse.fileurl);
    this.selectedFile.displayName=files[0].name;
    this.selectedFile.fileURL=attachmentResponse.fileurl;
  });
}

  protected removeFile() {
    const internalName = this.selectedFile.fileURL.replace(/attachments\\/, '');
    this.apiService.deleteAttachment(internalName).subscribe((attachmentResponse: IAttachmentResponse) => {
      this.selectedFile = { displayName: '', fileURL: '' };
      this.frameworkForm.get(this.field.formControlName)?.setValue('');
      this.fileInput.nativeElement.value = null;
    })
  }

protected downloadFile(){
  this.utilityService.downloadAttachment(this.selectedFile.fileURL)
}
}
