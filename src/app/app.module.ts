import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GradesManagerComponent } from './pages/configuration/grades-manager/grades-manager.component';
import { GradeSettingsComponent } from './pages/configuration/grade-settings/grade-settings.component';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GradesManagerComponent,
    GradeSettingsComponent,
    HomeComponent,
    ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    ...environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
