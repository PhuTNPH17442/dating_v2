const express = require("express");
const cors = require("cors");
const firebase = require('firebase')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended : true
}));
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views' , path.join(__dirname,'resources/views'));
  const firebaseConfig ={
    apiKey: "AIzaSyC0ALYEQcMqnXHT-gZyexMdX37HCPdfuAM",
    authDomain: "fpoly-friend.firebaseapp.com",
    databaseURL: "https://fpoly-friend-default-rtdb.firebaseio.com",
    projectId: "fpoly-friend",
    storageBucket: "fpoly-friend.appspot.com",
    messagingSenderId: "475753837744",
    appId: "1:475753837744:web:5887cf11dca611f1bf7775",
    measurementId: "G-MGVJ00L9LE"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("user_profile");
  const auth = firebase.auth();
// app.get("/", async (req, res) => {
//   const snapshot = await User.get();
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });
// app.get("/", async (req, res) => {
//    try {
//     let response = []
//     await db.collection('user_profile').get().then(querysnapshot=>{
//       let docs = querysnapshot.docs

//       for (let doc of docs){
//         response.push(doc.database())
//       }
//       return res.status(200).send(response)
//     }

//     )
//    } catch (error) {
//     return res.status(500).send(error)
//    }
//   });

app.post('/forgot')
const POST = process.env.POST||4000
app.listen(POST,()=> console.log(`Sever running in `+POST))