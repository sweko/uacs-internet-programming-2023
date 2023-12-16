import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HighlightComponent } from './highlight/highlight.component';
import { GeneralContainerComponent } from './general-container/general-container.component';
import { DisplayContainerComponent } from './display-container/display-container.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { ShowNumberComponent } from './show-number/show-number.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { SubtractButtonComponent } from './subtract-button/subtract-button.component';
import { StatexService } from './state/statex.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainContentComponent,
    HighlightComponent,
    GeneralContainerComponent,
    DisplayContainerComponent,
    ButtonContainerComponent,
    ShowNumberComponent,
    AddButtonComponent,
    SubtractButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StatexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
