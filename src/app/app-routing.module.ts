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
    path: 'findExercices',
    loadChildren: () =>
      import(
        './view/view-find-exercices-trainning/view-find-exercices-trainning.module'
      ).then((m) => m.ViewFindExercicesTrainningModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./view/view-home-training/view-home-training.module').then(
        (m) => m.ViewHomeTrainingModule
      ),
    pathMatch: 'full',
    // full = que si tous l'url est blanc alors on redirige
  },

  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./view/view-home/view-home.module').then((m) => m.ViewHomeModule),
  //   pathMatch: 'full',
  //   // full = que si tous l'url est blanc alors on redirige
  // },
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
