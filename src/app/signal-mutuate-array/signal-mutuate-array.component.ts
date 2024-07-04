import { Component, signal } from '@angular/core';

interface EmpDetail {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

}

@Component({
  selector: 'app-signal-mutuate-array',
  templateUrl: './signal-mutuate-array.component.html',
  styleUrls: ['./signal-mutuate-array.component.scss']
})
export class SignalMutuateArrayComponent {

  empArray = signal <EmpDetail[]>([
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    }])


    addEmp(formValues:any){
      console.log(formValues)
      this.empArray.update((empValues)=>empValues.concat(formValues))

    }

}
