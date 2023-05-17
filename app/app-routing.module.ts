import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeUpComponent } from './make-up/make-up.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitMakeUpComponent } from './update-produit-make-up/update-produit-make-up.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarqueComponent } from './liste-marque/liste-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MakeUpGuard } from './make-up.guard';
const routes: Routes = [
  {path: "makeUp", component : MakeUpComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[MakeUpGuard]},
  {path :"rechercheParNom" , component : RechercheParNomComponent},
  {path:"rechercheParMarque",component :RechercheParMarqueComponent},
  {path: "updateMakeUp/:id", component: UpdateProduitMakeUpComponent},
  {path: "listeMarque", component : ListeMarqueComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "MakeUp", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
