import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeCredentials } from '../../model/employee-credentials';
import { EmployeeDetails } from '../../model/employee-details';
import { Address } from '../../model/address';
import { ShareBetweenComponentsService } from '../../services/share-between-components.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit,OnDestroy {
  count:number;
   username:string;
   password:string;
  first_name:string;
  last_name:string;
  branchId:number;
  gender:string;
  adhar:string;
  pan:string;
  dob:string;
  phone:string;
  age:string='22';
  street:string;
  city:string;
  state:string;
  zipcode:string;
  credentials:EmployeeCredentials;
  EmployeeDetails:EmployeeDetails;
  address:Address;
  constructor(private router: Router,private sharer:ShareBetweenComponentsService,private http:HttpClient) { 
    
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    
  }
 
  addEmployee()
  {
    let cnt=this.sharer.getCount();
    this.username=(116000+cnt).toString();
    cnt=cnt+1;
    this.password=(this.first_name).toLowerCase()+this.branchId;

    this.address={
      street: this.street,
      city: this.city,
      state:this.state,
      zipCode:this.zipcode
    }
    console.log(this.address);


    this.EmployeeDetails={
      employeeFirstName:this.first_name,
      employeeLastName:this.last_name,
      dob:this.dob,
      adharNumber:this.adhar,
      panNumber:this.pan,
      branchId:this.branchId,
      age:this.age,
      gender:this.gender,
      mobileNumber:this.phone,
      address:this.address

    }
    console.log(this.EmployeeDetails);
   
    this.credentials={
      employeeId:this.username,
      employeePassword:this.password,
      employeeDetails:this.EmployeeDetails
    }
    console.log(this.credentials);
    
    this.http.post('http://localhost:8082/addEmployee',this.credentials).subscribe((data)=>{
      console.log(data+'added');
    });
    window.alert('Employee Added'+ 'Username: '+this.username + ' Password: '+this.password);
    this.sharer.setCount(cnt);
    this.router.navigateByUrl('/home');
  }

}
