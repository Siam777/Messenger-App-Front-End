import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule} from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

const components=[
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports:[
    components
  ]
})
export class MaterialModuleModule { }
