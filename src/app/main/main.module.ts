import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';


import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [HomeComponent,RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ImageModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePickerModule,
    PasswordModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    InputNumberModule,
    FileUploadModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule
],providers:[AuthService]
})
export class MainModule { }
