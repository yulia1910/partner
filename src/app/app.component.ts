import { Component } from '@angular/core';
import { GetUsersService } from "./get-users.service";
import { Router, ActivatedRoute, ParamMap,  NavigationExtras } from '@angular/router';
import { User, Subscription, Package } from './user.models';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GetUsersService ]
})
export class AppComponent {
  title = 'appPartner';
  users: User[];
  subs: Subscription[];
  packages: Package[];
  currentUser: User;

  form = new FormGroup({
    usersList: new FormControl('', Validators.required)
  })

  formSubscription = new FormGroup({
    subscriptionList: new FormControl('', Validators.required)
  })
  

  constructor ( private getUsers: GetUsersService,
                private router: Router ){}
 
  ngOnInit() {
    this.users = this.getUsers.getUsers();
    console.log(this.users);
  }

  search(id: number) {
    var user = this.getUsers.getUsers().filter( user => user.id == id.toString());
    if( user.length != 0 ) {
      console.log(user);
      this.router.navigate(['all-user']);
    }
  }

  submit() {
    console.log(this.form.value   );
    this.currentUser = this.users.filter( user => user.id == this.form.value.usersList   )[0];
    this.subs = this.currentUser.subscriptions;
   
  }
             
           
  submitSubscription(){
    
    this.packages = this.currentUser.subscriptions.filter( sub => sub.subNum == this.formSubscription.value.subscriptionList)[0].packages;
    
  }
  
}
