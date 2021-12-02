import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TakeNotesComponent } from './component/take-notes/take-notes.component';
import { RoutesService } from './services/routerServices/routes.service';
import { IconsComponent } from './component/icons/icons.component';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { GetNotesComponent } from './component/get-notes/get-notes.component';
import { AuthguardServiceService } from './services/authguardService/authguard-service.service';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ArchiveNotesComponent } from './component/archive-notes/archive-notes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakeNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    GetNotesComponent,
    UpdateNoteComponent,
    TrashNoteComponent,
    ArchiveNotesComponent,
    CollaboratorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    

  ],
  providers: [
    RoutesService,
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
