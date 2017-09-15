import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationService} from "./common/navigation.service";
import {ROUTES} from "./app.routes";
import {PreloadSelectedModules} from "./app.preloading";
import {AUTH_SERVICE} from "./auth/service/authorization.service";
import {AuthorizationFileService} from "./auth/service/authroizationFile.service";
import {FeatureGuard} from "./auth/service/featureGuard.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadSelectedModules})
  ],
  providers: [
    NavigationService,
    PreloadSelectedModules,
    FeatureGuard,
    {provide: AUTH_SERVICE, useClass: AuthorizationFileService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
