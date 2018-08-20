import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Router} from '@angular/router';
import {SocialAuthService} from '../../services/social-auth.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor(private adminService: AdminService,
              private socialAuthService: SocialAuthService,
              private router: Router,
              ) {

  }

  logOut() {
    this.socialAuthService.logout();
    localStorage.clear();
  }

  isAdmin() {
    return this.adminService.checkOnAdmin();
  }

  ngOnInit() {

  }

}
