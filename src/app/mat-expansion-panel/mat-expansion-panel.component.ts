import {Component, Inject, inject} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'app-mat-expansion-panel',
  templateUrl: 'mat-expansion-panel.component.html',
  styleUrls: ['mat-expansion-panel.component.css'],
})
export class MatExpansionPanelComponent {
  panelOpenState = false;
  messageType = "";

  constructor(@Inject()panelOpenState: boolean, messageType: string) {
    this.panelOpenState = panelOpenState;
    this.messageType = messageType;
  }
}
