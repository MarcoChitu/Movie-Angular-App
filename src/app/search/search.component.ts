import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  implements OnInit {

  onSearchChange(searchValue: string): void {
    // Implement search logic here
  }
  
  ngOnInit(): void {
    
  }
}
