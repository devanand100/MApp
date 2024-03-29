import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterCeptor } from './auth/authInterceptor';
import { HomepageModule } from './pages/homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    HomepageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
