import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService, Wards } from '../api.service';
import { Province } from '../api.service';
import { Districts } from '../api.service';
@Component({
  selector: 'app-tinh-thanh',
  templateUrl: './tinh-thanh.component.html',
  styleUrls: ['./tinh-thanh.component.css']
})
export class TinhThanhComponent implements OnInit {
  provinces!: any;
  districts: Districts[] = [];
  ditrict:any;
  wards:Wards[]=[];
  tinhThanh:any;
  quanHuyen:any;
  xaPhuong:any;
  address:any;
  constructor(public api: ApiService) {

  }

  ngOnInit(): void {
    this.getProvince();

  }
  getProvince() {
    this.api.getProvince().subscribe((data: Array<Province>) => {
      this.provinces = data;
    });
  }
  onChangeProvince(tinh: any) {
    this.districts = [];
    this.wards=[];
    this.tinhThanh="";
    this.quanHuyen="";
    this.xaPhuong="";
    this.tinhThanh=tinh;
    console.log(tinh);
    for (var i = 0; i < this.provinces.length; i++) {
      if (this.provinces[i].name == tinh) {
        this.districts = this.provinces[i].districts;
      }
    }
  }
  a:any;
 onChangeDistricts(huyen:any){
   this.wards=[];
   this.quanHuyen="";
   this.xaPhuong="";
   this.quanHuyen=huyen;
  console.log(huyen);
   for(var i = 0; i < this.districts.length; i++){
     if(this.districts[i].name == huyen){
       this.a = this.districts[i].code;
       console.log(this.a);
     }
  }
  this.getWards(this.a);
 }
 onChangeWards(xa:any){
   this.xaPhuong="";
   this.xaPhuong=xa;
 }
 submit(){
   this.api.addAddress(this.tinhThanh,this.quanHuyen,this.xaPhuong).subscribe(response=>{
     if(response.status==200){
       console.log("Thêm địa chỉ thành công");
     } else console.log("Thêm địa chỉ thất bại");

   })
   this.address="Địa chỉ của bạn là : "+this.xaPhuong+" "+this.quanHuyen+" "+this.tinhThanh;
 }
 getWards(code:any){
  this.api.getWards(code).subscribe(data=>{
    this.ditrict = data;
    this.wards= this.ditrict.wards;
    });
 }
 
}
