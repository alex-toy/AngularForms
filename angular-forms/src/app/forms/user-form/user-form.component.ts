import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel : User = User.CreateEmptyUser();
  isDefaultTopic = true;

  createUser(){
    console.log(this.userModel)
  }

  validateTopic(topic : string){
    this.isDefaultTopic = topic === "default";
  }
}
