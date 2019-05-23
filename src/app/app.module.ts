import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEqualizerModule } from 'ngx-equalizer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEqualizerModule,
    NgbTabsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
