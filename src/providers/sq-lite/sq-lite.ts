import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject} from '@ionic-native/sqlite';


/*
  Generated class for the SqLiteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SqLiteProvider {
public isOpen:boolean;
public sql:SQLite;
public db;
public userExists;
public access=0;
  constructor(public http: Http) {
    if(!this.isOpen){
            this.sql = new SQLite();
            this.sql.create({
                name: "data.db",
                location: "default"
            }).then((db: SQLiteObject) => {
              this.db=db;
              this.db.executeSql("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, userid TEXT, password TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                    this.isOpen=true;

                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
        }
      }
      public createUser(userid: string, password: string) {
              return new Promise((resolve, reject) => {
                  this.db.executeSql("INSERT INTO Users (userid, password) VALUES (?, ?)", [userid, password]).then((data) => {
                    console.log("below is after adding log");
                    //data.getRows();
                      console.log(data);
                      resolve(data);
                  }, (error) => {
                      reject(error);
                  });
              });
          }

          public verifyUser(userid:string, password:string) {
       return new Promise((resolve, reject) => {
           this.db.executeSql("SELECT * FROM Users WHERE userid=?", [userid]).then((data) => {
             //resolve(password);
             console.log("equals check");
             console.log(data);
             console.log(data.rows.item(0).password);

             console.log(password);
                if(data.rows.item(0).password == password)
                    resolve(true);
                    else
                    resolve(false);
           }, (error) => {
               reject(error);
               console.log(error);
               this.access= 2;
           });
       });
   }
        isUser(userid:string){
          return new Promise((resolve,reject) => {
            this.db.executeSql("SELECT password from Users WHERE userid = ?", [userid]).then((data)=>{
console.log("data from sqlite" );
//data = data.json();
console.log(data);

          if(data.rows.length>0){
            console.log(data);
            console.log("the above is the information retrieved from locallite");
            this.userExists= true;
          }
            else {
              console.log(data);
              this.userExists= false;}

        }
        )
      });
        }
        }
