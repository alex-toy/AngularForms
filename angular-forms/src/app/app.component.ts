import { NgFor, JsonPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './Models/user';
import { UserFormComponent } from './forms/user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, JsonPipe, CommonModule, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel : User = User.CreateEmptyUser();

  createUser(){
    console.log(this.userModel)
  }
}
