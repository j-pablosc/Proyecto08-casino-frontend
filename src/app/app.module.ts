import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PrincipalLayoutComponent } from './layouts/principal-layout/principal-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AuthLayoutComponent,
    PrincipalLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
