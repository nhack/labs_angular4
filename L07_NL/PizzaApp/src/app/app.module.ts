import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationService} from "./common/navigation.service";
import {PizzaModule} from "./pizza/pizza.module";
import {ROUTES} from "./app.routes";
import {CustomerModule} from "./customers/customer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaModule,
    CustomerModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
