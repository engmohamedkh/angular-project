import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mid-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mid-nav.component.html',
  styleUrl: './mid-nav.component.css'
})
export class MidNavComponent {

  searchTerm: string = '';
  selectedCategory: string = 'all';

  onSearch(): void {
    // Handle the search logic here (e.g., navigate to a search results page)
    console.log('Search term:', this.searchTerm);
    console.log('Selected category:', this.selectedCategory);
  }
}
