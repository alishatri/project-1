import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  FlickerData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
