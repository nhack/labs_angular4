import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PizzaComponent} from "./pizza/pizza.component";
import {TabsComponent} from "./pizza/components/tabs/tabs.component";
import {ReviewsComponent} from "./pizza/components/reviews/reviews.component";
import {PizzaRestService} from "./pizza/service/pizzaRest.service";
import {PIZZA_SERVICE} from "./pizza/service/pizza.service";
import {ExtrasComponent} from "./pizza/components/extras/extras.component";
import {IngredientsComponent} from "./pizza/components/ingredients/ingredients.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    TabsComponent,
    ReviewsComponent,
    ExtrasComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
