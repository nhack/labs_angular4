import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationService} from "./common/navigation.service";
import {ROUTES} from "./app.routes";
import {PreloadSelectedModules} from "./app.preloading";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadSelectedModules})
  ],
  providers: [NavigationService, PreloadSelectedModules],
  bootstrap: [AppComponent]
})
export class AppModule {
}
