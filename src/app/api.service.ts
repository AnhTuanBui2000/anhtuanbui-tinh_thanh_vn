import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_PATH= 'https://provinces.open-api.vn';
  constructor(private http: HttpClient) { }
 getProvince():Observable<Array<Province>>{
   console.log('Lấy danh sách tỉnh thành quận huyện');
return this.http.get<Array<Province>>(this.BASE_PATH+"/api/?depth=2").pipe();
 }
 getWards(code:string){
  console.log("Lấy danh sách xã của huyện có code="+code);
  return this.http.get<Districts>(this.BASE_PATH+"/api/d/"+code+"?depth=2").pipe();
 }
 addAddress(tinh:any,huyen:any,xa:any){
   console.log("Đẩy địa chỉ lên API");
   return this.http.post<Response>(this.BASE_PATH,{
     Tinh:tinh,
     Huyen:huyen,
     Xa:xa
   }).pipe();
 }
 //https://provinces.open-api.vn/api/d/3?depth=2
}
export class Province{
  name!:string;
  code!:string;
  division_type!:string;
  codename!:string;
  phone_code!:string;
  districts!:[
    {
      name:string;
      code:string;
      division_type:string;
      codename:string;
      province_code:string;
      wards:[

      ];
    }
  ]
}
export class Districts{
  name!:string;
  code!:string;
  division_type!:string;
  codename!:string;
  province_code!:string;
  wards!:[
    {
    name:string;
    code:string;
    division_type:string;
    codename:string;
    district_code:string;
    }
    
  ];
}
export class Wards{
    name!:string;
    code!:string;
    division_type!:string;
    codename!:string;
    district_code!:string;
}

