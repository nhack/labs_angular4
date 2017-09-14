import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PizzaComponent} from "./pizza/pizza.component";
import {TabsComponent} from "./pizza/components/tabs/tabs.component";
import {ReviewsComponent} from "./pizza/components/reviews/reviews.component";
import {PizzaRestService} from "./pizza/service/pizzaRest.service";
import {PIZZA_SERVICE} from "./pizza/service/pizza.service";

@NgModule({
  declarations: [
    PizzaComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}],
  bootstrap: [PizzaComponent]
})
export class AppModule {
}
