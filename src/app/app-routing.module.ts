import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreskillsComponent } from './coreskills/coreskills.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';



const routes: Routes = [
    { path: '', component: AboutmeComponent },
    {path: 'coreskills', component:CoreskillsComponent},
    {path: 'hobbies', component: HobbiesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contacts', component: ContactsComponent}
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}