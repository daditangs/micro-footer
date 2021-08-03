import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  year = '2021'
  yoshiUrl = assetUrl("yoshi.png");
  ytUrl = assetUrl("yt.png");
  liUrl = assetUrl("li.png");
}
