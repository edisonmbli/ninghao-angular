import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  closePopup(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
