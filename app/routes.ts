import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CounterComponent, RecordListComponent } from './components';

const appRoutes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'list', component: RecordListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
