import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/pets'},
  {path: "pets", component: ListComponent},
  {path: "pets/new", component:AddComponent},
  {path: "pets/:id", component:DetailComponent},
  {path: "pets/edit/:id",component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
