import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from 'ionic-angular';

import firebase from 'firebase';
import moment from 'moment';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { CommentsPage } from '../comments/comments';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  text: string = "";
  posts: any[] = [];
  pageSize: number = 10;
  cursor: any;
  infiniteEvent: any;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController, private camera: Camera, private http: HttpClient, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private modalCtrl: ModalController, private firebaseCordova: Firebase) {
    this.getPosts();

    this.firebaseCordova.getToken().then((token) => {
      console.log(token);

      this.updateToken(token, firebase.auth().currentUser.uid);
    }).catch((err) => {
      console.log(err);
    })
  }

  updateToken(token: string, uid: string) {
    firebase.firestore().collection("users").doc(uid).set({
      token: token,
      tokenUpdate: firebase.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    }).then(() => {
      console.log("Token guardado en Firestore");
    }).catch(err => {
      console.log(err);
    })
  }

  getPosts() {
    this.posts = [];

    let loading = this.loadingCtrl.create({
      content: "Cargando feeds..."
    });

    loading.present();

    let query = firebase.firestore().collection("posts").orderBy("created", "desc").limit(this.pageSize);
    
     query.onSnapshot((snapshot) => {
       let changedDocs = snapshot.docChanges();

       changedDocs.forEach((change) => {
         if(change.type == "added"){
           //TODO
         }
         if(change.type == "modified"){
           for(let i = 0; i> this.posts.length; i++){
             if(this.posts[i].id == change.doc.id) {
              this.posts[i] = change.doc;
             }
           }
         }
         if(change.type == "removed"){
           //TODO
         }
       })
     })
    
    query.get()
    .then((docs) => {
      docs.forEach((doc) => {
        this.posts.push(doc);
      })

      loading.dismiss();

      this.cursor = this.posts[this.posts.length - 1];

      console.log(this.posts);
    }).catch((err) => {
      console.log(err);
    })
  }


  loadMorePosts(event) {
    firebase.firestore().collection("posts").orderBy("created", "desc")
    .startAfter(this.cursor)
    .limit(this.pageSize).get()
    .then((docs) => {
      docs.forEach((doc) => {
        this.posts.push(doc);
      })

      console.log(this.posts);

      if(docs.size < this.pageSize){
        event.enable(false);
        this.infiniteEvent = event;
      } else {
        event.complete();
        this.cursor = this.posts[this.posts.length - 1];
      }

    }).catch((err) => {
      console.log(err);
    })
  }

  refresh(event) {
    this.posts = [];
    this.getPosts();

    if(this.infiniteEvent) {
      this.infiniteEvent.enable(true);
    }

    event.complete();
  }

  post() {
    firebase.firestore().collection("posts").add({
      text: this.text,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      owner: firebase.auth().currentUser.uid,
      owner_name: firebase.auth().currentUser.displayName
    }).then(async (doc) => {

      if(this.image) {
        await this.upload(doc.id)
      }

      this.text = "";
      this.image = undefined;

      let toast = this.toastCtrl.create({
        message: "Tu post a sido creado exitosamente.",
        duration: 3000
      }).present();

      this.getPosts();
    }).catch((err) => {
      console.log(err);
    })
  }

  ago(time) {
    let difference = moment(time).diff(moment());
    return moment.duration(difference).humanize();
  }

  logout() {
    firebase.auth().signOut().then(() =>{
      let toast = this.toastCtrl.create({
        message: "Te has deslogueado exitosamente.",
        duration: 3000
      }).present();
      
      this.navCtrl.setRoot(LoginPage);
    })
  }

  addPhoto() {
    this.launchCamera();
  }

  launchCamera() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64Image) => {
      console.log(base64Image);

      this.image = "data:image/png;base64," + base64Image;

    }).catch((err) => {
      console.log(err);
    })
  }

  upload(name: string) {
    return new Promise((resolve, reject) => {

      let loading = this.loadingCtrl.create({
        content: "Subiendo imagen"
      })

      let ref = firebase.storage().ref("postImages/" + name);

      let uploadTask = ref.putString(this.image.split(',')[1], "base64");

      uploadTask.on("state_changed", (taskSnapshot: any) => {
        console.log(taskSnapshot);

        let percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
        loading.setContent("Subiendo " + percentage + "%")

      }, (error) => {
        console.log(error);
      }, () => {
        console.log("La fotografia se termino de subir!");

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          firebase.firestore().collection("posts").doc(name).update({
            image: url
          }).then(() => {
            loading.dismiss()
            resolve()
          }).catch((err) => {
            loading.dismiss()
            reject()
          })
        }).catch((err) => {
          loading.dismiss()
          reject()
        })

      })
    })
  }

  like(post) {
    let body = {
      postId: post.id,
      userId: firebase.auth().currentUser.uid,
      action: post.data().likes && post.data().likes[firebase.auth().currentUser.uid] == true ? "unlike" : "like"
    }

    let toast = this.toastCtrl.create({
      message: "Actualizando likes... espere."
    });

    toast.present();

    this.http.post("https://us-central1-feedly-5e940.cloudfunctions.net/updateLikesCount", JSON.stringify(body), {
      responseType: "text"
    }).subscribe((data) => {
      console.log(data);
      toast.setMessage("Likes actualizados!");
      setTimeout(() => {
        toast.dismiss();
      }, 3000)
    }, (err) => {
      console.log(err);
      toast.setMessage("Ocurrio un error por favor intente mas tarde!");
      setTimeout(() => {
        toast.dismiss();
      }, 3000)
    })
  }

  comment(post) {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Ver todos los comentarios",
          handler: () => {
            this.modalCtrl.create(CommentsPage, {
              "post": post
            }).present();
          }
        },
        {
          text: "Nuevo comentario",
          handler: () => {
            this.alertCtrl.create({
              title: "Nuevo Comentario",
              message: "Escribe tu comentario",
              inputs: [
                {
                  name: "comment",
                  type: "text"
                }
              ],
              buttons: [
                {
                  text: "Cancelar"
                },
                {
                  text: "Post",
                  handler: (data) => {
                    if(data.comment){
                      firebase.firestore().collection("comments").add({
                        text: data.comment,
                        post: post.id,
                        owner: firebase.auth().currentUser.uid,
                        owner_name: firebase.auth().currentUser.displayName,
                        created: firebase.firestore.FieldValue.serverTimestamp()
                      }).then((doc) => {
                        this.toastCtrl.create({
                          message: "Comentario exitoso!",
                          duration: 3000
                        }).present();
                      }).catch((err) => {
                        this.toastCtrl.create({
                          message: err.message,
                          duration: 3000
                        }).present();
                      })
                    }
                  }
                }
              ]
            }).present();
          }
        }
      ]
    }).present();
  }

}
