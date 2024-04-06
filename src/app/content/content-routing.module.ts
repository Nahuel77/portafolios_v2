import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path: 'navbar', component:NavbarComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'proyects', component:ProyectsComponent},
  {path: 'education', component:EducationComponent},
  {path: 'contact', component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
