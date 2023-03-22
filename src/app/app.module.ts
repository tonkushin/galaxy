import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpHeadersInterceptor } from '../shared/interceptors';
import { API_PATH } from '../shared/tokens';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const MAT_MODULES = [MatToolbarModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...MAT_MODULES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: API_PATH,
      useValue: window.location.origin + '/api' // because of the proxy.config.json
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
