import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { TokenService } from './token.service';

const apiUrl = GlobalConstants.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  headers = new HttpHeaders({
    token: this.tokenService.getToken(), 
  });
 
  constructor(
    private http: HttpClient,private tokenService: TokenService  ) { }

  uploadPhotoProfile(photoProfile: any) {
    return this.http.post(
      `${apiUrl}/profile/updatePhotoProfile`,
      photoProfile,
      { headers: this.headers } 
      
    );
  }

  getProfile() {
    return this.http.get(`${apiUrl}/profile/getProfile`,{
    headers: this.headers,  // Se adiciona el header con el token a la solicitud de API
  });
}
}
