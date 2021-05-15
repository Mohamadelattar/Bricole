import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-portfolio-two',
  templateUrl: './post-portfolio-two.component.html',
  styleUrls: ['./post-portfolio-two.component.css']
})
export class PostPortfolioTwoComponent implements OnInit {
  images = [];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  imageUpload(event)
  {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.images.push(event.target.result); 
                 this.myForm.patchValue({
                    fileSource: this.images
                 });
              }
              reader.readAsDataURL(event.target.files[i]);
      }
  }
  }
  filedata:any;
  /* File onchange event */
  fileEvent(e){
      this.filedata = e.target.files[0];
  }
  submit(){
  var myFormData = new FormData();
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  myFormData.append('image', this.filedata);
  /* Image Post Request */
  this.http.post('http://127.0.0.1:8000/api/galleryPortfolio', myFormData, {
  headers: headers
  }).subscribe(data => {
   console.log("err");
     
  });  

}
}
