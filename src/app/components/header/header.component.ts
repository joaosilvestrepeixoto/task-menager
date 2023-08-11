import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title = 'Pudim🍮';

  constructor(
    private router: Router
  ) { }

ngOnInit(): void {}

  toggleAddTask() {
    this.router.navigate(['/create'])
  }

}
