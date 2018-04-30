import {
    MatButtonModule, 
    MatCheckboxModule,
    MatLineModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
} from '@angular/material';

import {NgModule} from '@angular/core';

@NgModule({
    imports: [MatButtonModule, 
        MatCheckboxModule,
        MatLineModule,
        MatListModule,
        MatExpansionModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
        MatTabsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ],
        exports: [
            MatButtonModule, 
            MatCheckboxModule,
            MatLineModule,
            MatListModule,
            MatExpansionModule,
            MatToolbarModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDialogModule,
            MatTooltipModule,
            MatTabsModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            MatGridListModule
        ]
})
export class AngularMaterialModule{}