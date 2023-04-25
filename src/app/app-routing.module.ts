import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaTablaComponent } from "./pages/pagina-tabla/pagina-tabla.component";

const routes: Routes = [
    { path: '', redirectTo: 'tabla', pathMatch: 'full'},
    { path: 'tabla', component: PaginaTablaComponent}
];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {}