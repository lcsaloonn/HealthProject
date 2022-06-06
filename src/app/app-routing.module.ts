import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe/:id',
    loadChildren: () =>
      import('./view/view-recipe/view-recipe.module').then(
        (m) => m.ViewRecipeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./view/view-home/view-home.module').then((m) => m.ViewHomeModule),
    pathMatch: 'full',
    // full = que si tous l'url est blanc alors on redirige
  },
  {
    path: 'home',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
