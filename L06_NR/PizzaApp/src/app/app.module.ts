import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {PizzaComponent} from "./pizza/pizza.component";
import {TabsComponent} from "./pizza/components/tabs/tabs.component";
import {ReviewsComponent} from "./pizza/components/reviews/reviews.component";
import {PizzaRestService} from "./pizza/service/pizzaRest.service";
import {PIZZA_SERVICE} from "./pizza/service/pizza.service";
import {ExtrasComponent} from "./pizza/components/extras/extras.component";
import {IngredientsComponent} from "./pizza/components/ingredients/ingredients.component";
import {AppComponent} from "./app.component";
import {ROUTES} from "./pizza/pizza.routes";
import {PizzaListComponent} from "./pizza/pizzaList.component";
import {NavigationService} from "./common/navigation.service";

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    TabsComponent,
    ReviewsComponent,
    ExtrasComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
