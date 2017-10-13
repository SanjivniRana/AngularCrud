import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormService } from "./services/form.service";

@Component({
      moduleId: module.id,

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
        Image: string;
        img: string;
        posts:any;

   complexForm: FormGroup;

constructor(private formService: FormService,
private fb: FormBuilder)
{}

ngOnInit() {
    this.complexForm = this.fb.group({
           
           'image' :  [null,Validators.required],
           'Email' :  [null,Validators.required],
           'DOB' :  [null,Validators.required]

         });
         return this.formService.getDataStudent().subscribe((posts) => {
            console.log(posts);
            this.posts = posts;
        });

}

        get image(){
            return this.complexForm.get('image');
        }
        get Email(){
            return this.complexForm.get('Email');
        }

        get DOB(){
            return this.complexForm.get('DOB');
        }
       
        submitForm(data)
        { 
            var res= new User
            {
                res.Image=this.img
                res.Email=data.Email
                res.DOB=data.DOB
            }
              this.Image=this.img
            this.formService.create(res)
            .subscribe(
            data => {
              console.log(data);
            window.location.reload();
                },
            
            );
        }
            
    
     onUploadFinished(event)
     {
    this.img=event.src
     }

}
class User{
    public Image:string;
    public DOB:string;
    public Email:string;
}
