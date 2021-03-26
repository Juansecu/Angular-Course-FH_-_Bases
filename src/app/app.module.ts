import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { CountersModule } from './counters/counters.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountersModule, DbzModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
