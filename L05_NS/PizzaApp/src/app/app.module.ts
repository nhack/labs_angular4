import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TabsComponent} from "./tabs.component";
import {ReviewsComponent} from "./reviews.component";
import {PizzaFileService} from "./pizzaFile.service";
import {PizzaRestService} from "./pizzaRest.service";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PizzaFileService, PizzaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
