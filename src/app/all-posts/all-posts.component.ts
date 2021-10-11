import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { PageData as pd } from '../data';

import { PostsService } from '../posts.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public pageData: any = pd;

  public img: string = '';
  public place: string = '';
  public title: string = '';
  public date: string = '';
  public description: string = '';
  
  // For Adding Posts
  public reactiveForm: FormGroup = this._formBuilder.group({
    'img': ['', [Validators.required]],
    'place': ['', [Validators.required]],
    'title': ['', [Validators.required, Validators.maxLength(20)]],
    'date': ['Nov 12'],
    'description': ['', [Validators.required, Validators.maxLength(1000)]],
  });




  chkDescLen(){
    // console.log(this.reactiveForm.value.description.length);
    this.reactiveForm.value.description.length;
    //  this.reactiveForm.controls['description'];
  }


  constructor(
    private _title: Title, 
    private _formBuilder: FormBuilder, 
    private _postsService: PostsService, 
    private _postSaveJson: PostsService
    ) { 

    this._title.setTitle('Posts || Blog Post App');

  }

  postData: any = [];

  alertMsg: boolean = false;

  public ngOnInit(): void {

    this._postsService.getAllPosts().subscribe((allData) => {

      console.log(allData);
      this.postData = allData;
      
    });


  }


  reactiveFormSubmitted(){
    // console.log(this.reactiveForm.controls['imageLink'].value);
    // console.log(this.reactiveForm.value.uniqueId);
    // console.log(this.reactiveForm.value.imageLink);
    // console.log(this.reactiveForm.value.place);
    // console.log(this.reactiveForm.value.postTitle);
    // console.log(this.reactiveForm.value.postDesc);

    this._postSaveJson.saveAllPostsDataJson(this.reactiveForm.value).subscribe((result) => {
      console.log(result);

      this.alertMsg = true;
      this.ngOnInit();  //auto refresh the page after delete
      
    });

  }

  deletePost(post_id: any){
    // console.log(post_id);
    this._postsService.deletePostsDataJson(post_id).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();  //auto refresh the page after delete
      
    });
  }

} 
