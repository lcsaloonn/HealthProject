import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('./view/view-recipe/view-recipe.module').then(
        (m) => m.ViewRecipeModule
      ),
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
