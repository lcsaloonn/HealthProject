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
    path: 'recipe',
    loadChildren: () =>
      import('./view/view-recipe-home/view-recipe-home.module').then(
        (m) => m.ViewRecipeHomeModule
      ),
  },
  {
    path: 'startTraining',
    loadChildren: () =>
      import('./view/view-start-training/view-start-training.module').then(
        (m) => m.ViewStartTrainingModule
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
