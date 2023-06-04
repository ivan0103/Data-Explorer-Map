import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PointOfInterest } from 'src/app/Services/models/poi';
import { PoiService } from 'src/app/Services/poi.service';

@Component({
  selector: 'app-poi-infotainment-panel',
  templateUrl: './poi-infotainment-panel.component.html',
  styleUrls: ['./poi-infotainment-panel.component.css']
})
export class PoiInfotainmentPanelComponent {
  @Input()
  showInfotainmentPanel = false;
  @Input() selectedHexId = '';
  constructor(private poiService: PoiService) {}


}
