import { Component, OnInit ,ViewChild,ChangeDetectorRef,ElementRef} from '@angular/core';
import {Post} from './post.model';
import {PostService} from './post.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

@ViewChild('posts_noproblem') posts_noproblem: ElementRef;
@ViewChild('posts_problem') posts_problem: ElementRef;
@ViewChild('posts_problem_label', { read: ElementRef }) posts_problem_label: ElementRef;

posts:Post[]=[];
next_posts:string="";
problem:number=0;
//toastController:ToastController=new ToastController()
  constructor(private postsService : PostService,private changeDetector: ChangeDetectorRef,public toastController:ToastController) { }
  //posts:Post[];
  ngOnInit() {
    var x =this.postsService.getPosts(this.next_posts);
    x.subscribe(res => {
      //console.log(data);
      this.posts=res.results;
      this.next_posts=res.next;
      //x.NEXT_POSTS=res.next;
    }, err => {
      console.log(err);
     //  loading.dismiss();
     this.problem=1;
     this.changeDetector.detectChanges();
     this.posts_problem_label.nativeElement.innerHTML='NETWORK ERROR. PLEASE CHECK NETWORK CONNECTION'//JSON.stringify(err);
     this.changeDetector.detectChanges();
    });


    //console.log(this.posts);
  }

  LoadNext(){
    if(!this.next_posts)
    {
      //let toastctrl=new ToastController();
       this.presentToast();
    }
    else{
    var x =this.postsService.getPosts(this.next_posts);
    x.subscribe(res => {
      //console.log(data);
      this.posts=this.posts.concat(res.results);
      this.next_posts=res.next;
      //x.NEXT_POSTS=res.next;
    }, err => {
      console.log(err);
     this.problem=1;
     //console.log('PROGRAM GOING HERE');
     this.changeDetector.detectChanges();
     this.posts_problem_label.nativeElement.innerHTML='NETWORK ERROR. PLEASE CHECK NETWORK CONNECTION'//JSON.stringify(err);
     this.changeDetector.detectChanges();

    });
  }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No More posts to show',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Okay!'
    });
    toast.present();
  }

}
