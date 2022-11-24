import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroImagesComponent } from './components/hero-images/hero-images.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FeatureComponent } from './components/feature/feature.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImagesComponent,
    BenefitsComponent,
    FeatureComponent,
    MenuComponent,
    FooterComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
