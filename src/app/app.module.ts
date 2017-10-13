import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { FormService } from "./services/form.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
