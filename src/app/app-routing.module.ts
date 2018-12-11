import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenSourceComponent } from './open-source/open-source.component';

const routes: Routes = [
      { path: 'home', component: HomeComponent},
      { path: 'projects', component: ProjectsComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'opensource', component: OpenSourceComponent },
      { path: '', component: HomeComponent},
      { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
