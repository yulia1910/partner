import { Injectable } from '@angular/core';
import { User } from './user.models';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor() { }

  getUsers(): User[]{
    return [
      { "firstName": "Yulia",
        "id":  "30089567",
        "subscriptions": [
            { "subName": "fgh",
              "subNum": "123",
              "packages": [
                { "name": "SMS",
                  "id": "789",
                  "quantity": 2,
                  "using": 1
              },
                {
                  "name": "Internet",
                  "id": "456",
                  "quantity": 3,
                  "using": 2
                }
              ]},
            {
              "subName": "hjk",
              "subNum": "890",
              "packages": [
                { "name": "SMS",
                  "id": "789",
                  "quantity": 1,
                  "using": 1
              },
                {
                  "name": "Internet",
                  "id": "456",
                  "quantity": 2,
                  "using": 2
                }
              ]
            }
       ]},
       { "firstName": "Baruch",
       "id":  "20089567",
       "subscriptions": [
           { "subName": "fgh",
             "subNum": "123",
             "packages": [
               { "name": "SMS",
                 "id": "789",
                 "quantity": 2,
                 "using": 1
             },
               {
                 "name": "Internet",
                 "id": "456",
                 "quantity": 3,
                 "using": 2
               }
             ]},
           {
             "subName": "hjk",
             "subNum": "890",
             "packages": [
               { "name": "SMS",
                 "id": "789",
                 "quantity": 1,
                 "using": 1
             },
               {
                 "name": "Internet",
                 "id": "456",
                 "quantity": 2,
                 "using": 2
               }
             ]
           }
      ]}
    ]


  }


}

