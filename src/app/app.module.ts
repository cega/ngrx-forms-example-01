import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";

import { reducers } from "./app.reducer";
import { routes } from "./app.routes";
import { LayoutModule } from "./layout/layout.module";
import { MaterialModule } from "./material";
import { SharedModule } from "./shared/shared.module";
import { CustomRouterStateSerializer } from "./shared/utils";

export const COMPONENTS = [AppComponent];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    LayoutModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [{
    provide: RouterStateSerializer,
    useClass: CustomRouterStateSerializer
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
