import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;
  profile: any;
  ProfileService: any;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.getUser();
    this.getProfile();
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    this.user = this.authService.getUser();
    console.log(this.user);
  }

  uploadImage(e: any) {
    console.log('cargando foto ');
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    console.log(file);

    const formData = new FormData();
    formData.append('photo', file);
    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        this.profile = response.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
