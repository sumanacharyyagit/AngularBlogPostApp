import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

import { PageData as pd } from '../data';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public img: string = '';
  public place: string = '';
  public title: string = '';
  public date: string = '';
  public description: string = '';
  
  // For Adding Posts
  public reactiveFormEdit: FormGroup = this._formBuilder.group({
    'img': ['', [Validators.required]],
    'place': ['', [Validators.required]],
    'title': ['', [Validators.required, Validators.maxLength(20)]],
    'date': ['Nov 12'],
    'description': ['', [Validators.required, Validators.maxLength(1000)]],
  });

  alertMsg: boolean = false;

  reactiveFormUpdateSubmitted(){
    // console.log(this.reactiveFormEdit.value);
    this._postsService.updatePostsDataJsonById(this._activatedRoute.snapshot.params.blogId, this.reactiveFormEdit.value).subscribe((result) => {
      // console.log(result);
      this.alertMsg = true;
      
    });

  }

  chkDescLen(){
    // console.log(this.reactiveForm.value.description.length);
    this.reactiveFormEdit.value.description.length;
    //  this.reactiveForm.controls['description'];
  }


  public pageData: any = {};
  public arrGetPosts: any;
  public displayPost: any;

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _router: Router, private _title: Title,
    private _formBuilder: FormBuilder, 
    private _postsService: PostsService,
    private _postSaveJson: PostsService 
    ) {

    this._title.setTitle('Post Details || Blog Post App');

    this._activatedRoute.params.subscribe(param =>{
      console.log(param);
      this._postSaveJson.getAllPosts().subscribe((res) => {
        console.log(res);
        this.arrGetPosts = res;
        let flag = false;
        for(let getPost of this.arrGetPosts){
          // console.log(typeof getPost.id, typeof param.blogId);
          if(getPost.id.toString() === param.blogId){
            console.log(getPost);
            flag = true;
            this.displayPost = getPost;
            console.log(this.displayPost);
            
          }
        }
        if(flag == false){
          this._router.navigateByUrl('/404-Not-Found', {skipLocationChange: true});
        }
      })
      // let flag = false;
      // for(let data of pd.home.postCardsArr) {
      //   if(data.id == param.blogId) {
      //     this.pageData = data;
      //     flag = true;
      //     break;
      //   }
      // }

    });

  }


  postData: any = [];

  ngOnInit(): void {

    // console.log(this._activatedRoute.snapshot.params.blogId);

    this._postsService.getPostsDataJsonById(this._activatedRoute.snapshot.params.blogId).subscribe((result: any) => {
      console.log(result);
      this.reactiveFormEdit = new FormGroup({
        img: new FormControl(result['img']),
        place: new FormControl(result['place']),
        title: new FormControl(result['title']),
        date: new FormControl(result['date']),
        description: new FormControl(result['description']),
      });
      
    });

    // this.ngOnInit(); 
  }

  goToPostsFromDetails() {
    this._router.navigateByUrl('/posts');
  }

}
