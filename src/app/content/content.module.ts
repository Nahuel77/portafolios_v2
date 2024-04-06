import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProyectsComponent,
    ContactComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
