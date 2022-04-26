import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  username!: string;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
    
  }
  searchUsername() {
    this.username = this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`]);
  }
}
