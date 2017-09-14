import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationService} from "./common/navigation.service";
import {PizzaModule} from "./pizza/pizza.module";
import {PIZZA_ROUTES} from "./pizza/pizza.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaModule,
    RouterModule.forRoot(PIZZA_ROUTES)
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
