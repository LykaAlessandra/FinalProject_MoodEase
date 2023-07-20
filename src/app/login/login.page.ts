// Import the necessary modules and components
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Define variables to store the user's input
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Function to handle the login process
  loginUser() {
    // Perform validation checks
    if (!this.username || !this.password) {
      // Display an error message to the user
      alert('Please enter both username and password.');
      return; // Prevent login if either field is empty
    }

    // If both fields are provided, proceed with the login process
    // Here, you can add your logic to authenticate the user
    // For example, calling an authentication service, etc.

    // For this example, let's simulate a successful login
    // You can replace this with your actual authentication logic
    const isLoggedIn = true;

    if (isLoggedIn) {
      // If login is successful, navigate to the home page
      this.router.navigate(['/home']);
    } else {
      // If login fails, display an error message
      alert('Invalid username or password. Please try again.');
    }
  }
}
