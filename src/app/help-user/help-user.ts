import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-help-user',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './help-user.html',
  styleUrl: './help-user.css'
})
export class HelpUser {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
