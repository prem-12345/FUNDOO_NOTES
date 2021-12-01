import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetNotesComponent } from './component/get-notes/get-notes.component';
import { AuthenticationGuard } from './services/authguardService/authentication.guard'
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ArchiveNotesComponent } from './component/archive-notes/archive-notes.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },

  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: 'get-notes', pathMatch: 'full' },
      { path: "get-notes", component: GetNotesComponent },
      { path: 'trash-note', component: TrashNoteComponent },
      { path: 'archive-notes', component: ArchiveNotesComponent }
    ]
  },

  { path: 'collaborator' , component: CollaboratorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
