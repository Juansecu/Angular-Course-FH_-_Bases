import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CountersModule } from './counters/counters.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountersModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
