import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private apiService:ApiService) { }

  public downloadAttachment(attachmentURL:string) {
    const attachmentInternalName = attachmentURL.replace(/attachments\\/, '');
      this.apiService.downloadAttachment(attachmentInternalName).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = attachmentInternalName; // 👈 Suggest filename for download
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }

    public formatAttachmentName(attachementURL:string):string{
      const regex = /attachments\\(.*)_[0-9]{4}-[0-9]{2}-[0-9]{2}_[0-9]{2}-[0-9]{2}-[0-9]{2}/;
      const attachmentName = attachementURL.replace(regex, '$1');
      return attachmentName;
    }
}
