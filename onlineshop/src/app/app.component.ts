import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StartNavComponent } from './component/start-nav/start-nav.component';
import { MidNavComponent } from './component/mid-nav/mid-nav.component';
import { EndNavComponent } from './component/end-nav/end-nav.component';
import { PagesNavComponent } from './component/pages-nav/pages-nav.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StartNavComponent,MidNavComponent,EndNavComponent,PagesNavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlineShop';
}
