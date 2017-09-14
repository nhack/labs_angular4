/**
 * Created by marius on 19/04/2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {ExtrasComponent} from "./components/extras/extras.component";
import {PizzaListComponent} from "./components/pizzaList/pizzaList.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {PIZZA_ROUTES} from "./pizza.routes";
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {PIZZA_SERVICE} from "./service/pizza.service";
import {PizzaRestService} from "./service/pizzaRest.service";

@NgModule({
  declarations: [
    PizzaComponent,
    PizzaListComponent,
    TabsComponent,
    ReviewsComponent,
    ExtrasComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(PIZZA_ROUTES)
  ],
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}],
})
export class PizzaModule {
}
