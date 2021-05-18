import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesDisplayComponent } from './quote-form/quotes-display/quotes-display.component';
import { DateSincePipe } from './date-since.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuotesDisplayComponent,
    DateSincePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
