import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component'
const routes: Routes = [
      { path: 'home', component: HomeComponent},
      { path: "projects", component: ProjectsComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: '', component: HomeComponent},
      { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
