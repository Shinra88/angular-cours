import { Component } from '@angular/core';
import { IconDefinition, faRightToBracket, faChessRook, faBookOpen, faClipboardList, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faLogin = faRightToBracket
  faLogo = faChessRook
  faMenu = faBookOpen
  faCarte = faClipboardList
  faCart = faBagShopping

  constructor(private router: Router){}
  // arrow function
  onLoginClick = () => {
    console.log('🧤 clicked on loginIcon')
    this.router.navigate(['login-page'])
  }

  onLandingClick = () => {
    this.router.navigate(['']);
  }

  onCartClick = () => {
    this.router.navigate(['cart-page'])
  }

}
