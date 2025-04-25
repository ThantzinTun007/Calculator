import { Routes } from '@angular/router';
import { CalculatorUiComponent } from './components/calculator-ui/calculator-ui.component';

export const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorUiComponent },
];
