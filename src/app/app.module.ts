import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CenterComponent } from './Components/center/center.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    
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
