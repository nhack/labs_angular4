import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationService} from "./common/navigation.service";
import {PizzaModule} from "./pizza/pizza.module";
import {ROUTES} from "./app.routes";
import {PreloadSelectedModules} from "./app.preloading";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadSelectedModules})
  ],
  providers: [NavigationService, PreloadSelectedModules],
  bootstrap: [AppComponent]
})
export class AppModule {
}
