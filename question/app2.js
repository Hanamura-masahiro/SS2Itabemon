// Initialize Firebase

var firebaseConfig = {

//firestore コンソールからコピー＆ペーストしてください。
	apiKey: "AIzaSyAuVePpKV5ehmOKw44HLyQEQy26id6Uwqo",
    authDomain: "ss2itabemon.firebaseapp.com",
    databaseURL: "https://ss2itabemon-default-rtdb.firebaseio.com",
    projectId: "ss2itabemon",
    storageBucket: "ss2itabemon.appspot.com",
    messagingSenderId: "662166986208",
    appId: "1:662166986208:web:d357f2fdb6bff6f7885f85",
    measurementId: "G-MFSRGXTWRQ"
  };

// Retrieve an instance of Firebase Messaging so that it can handle background messages.

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

// データの場所（パス）
/**　和食　**/
const docRef01 = firestore.doc("sample/wa/go/ni");   
const docRef02 = firestore.doc("sample/wa/go/sa");   
const docRef03 = firestore.doc("sample/wa/go/age");  

const docRef04 = firestore.doc("sample/wa/me/ni");
const docRef05 = firestore.doc("sample/wa/me/sa");
const docRef06 = firestore.doc("sample/wa/me/age");

const docRef07 = firestore.doc("sample/wa/ko/ni");
const docRef08 = firestore.doc("sample/wa/ko/sa");

/**　洋食　**/
const docRef11 = firestore.doc("sample/yo/go/ni");  
const docRef12 = firestore.doc("sample/yo/go/sa");
const docRef13 = firestore.doc("sample/yo/go/age");

const docRef14 = firestore.doc("sample/yo/pa/ni");
const docRef15 = firestore.doc("sample/yo/pa/sa");
const docRef16 = firestore.doc("sample/yo/pa/age");

const docRef17 = firestore.doc("sample/yo/me/ni");
const docRef18 = firestore.doc("sample/yo/me/sa");

/**　中華　**/
const docRef21 = firestore.doc("sample/chu/go/ni");  
const docRef22 = firestore.doc("sample/chu/go/sa");
const docRef23 = firestore.doc("sample/chu/go/age");

const docRef24 = firestore.doc("sample/chu/pa/ni");

const docRef27 = firestore.doc("sample/chu/me/ni");
const docRef28 = firestore.doc("sample/chu/me/sa");
const docRef29 = firestore.doc("sample/chu/me/age");

//答えボタン（idは解答ごとに違う）
/*　和食　*/
const wagoni = document.querySelector("#wagoni");
const wagosahot = document.querySelector("#wagosahot");
const wagosacold = document.querySelector("#wagosacold");
const wagoage = document.querySelector("#wagoage");

const wamenihot = document.querySelector("#wamenihot");
const wamenicold = document.querySelector("#wamenicold");
const wamesahot = document.querySelector("#wamesahot");
const wamesacold = document.querySelector("#wamesacold");
const wameagehot = document.querySelector("#wameagehot");
const wameagecold = document.querySelector("#wameagecold");

const wakoni = document.querySelector("#wakoni");
const wakosa = document.querySelector("#wakosa");

/*　洋食　*/
const yogoni = document.querySelector("#yogoni");
const yogosa = document.querySelector("#yogosa");
const yogoage = document.querySelector("#yogoage");

const yomeni = document.querySelector("#yomeni");
const yomesa = document.querySelector("#yomesa");

const yopani = document.querySelector("#yopani");
const yopasa = document.querySelector("#yopasa");
const yopaage = document.querySelector("#yopaage");

/*　中華　*/
const chugoni = document.querySelector("#chugoni");
const chugosa = document.querySelector("#chugosa");
const chugoage = document.querySelector("#chugoage");

const chupa = document.querySelector("#chupa");

const chumenihot = document.querySelector("#chumenihot");
const chumenicold = document.querySelector("#chumenicold");
const chumesa = document.querySelector("#chumesa");
const chumeage = document.querySelector("#chumeage");



/*　答えを出力する場所のid　*/
const answerField= document.querySelector("#answer");


// 答えボタンが押されたら実行する処理
wagoni.addEventListener("click", function(){
    docRef01.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wagosahot.addEventListener("click", function(){
    docRef02.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wagosacold.addEventListener("click", function(){
    docRef02.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.cold1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wagoage.addEventListener("click", function(){
    docRef03.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wamenihot.addEventListener("click", function(){
    docRef04.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wamenicold.addEventListener("click", function(){
    docRef04.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.cold1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wamesahot.addEventListener("click", function(){
    docRef05.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wamesacold.addEventListener("click", function(){
    docRef05.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.cold1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wameagehot.addEventListener("click", function(){
    docRef06.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wameagecold.addEventListener("click", function(){
    docRef06.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.cold1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wakoni.addEventListener("click", function(){
    docRef07.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

wakosa.addEventListener("click", function(){
    docRef08.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

/*　洋食　*/
yogoni.addEventListener("click", function(){
    docRef11.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yogosa.addEventListener("click", function(){
    docRef12.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yogoage.addEventListener("click", function(){
    docRef13.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yopani.addEventListener("click", function(){
    docRef14.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yopasa.addEventListener("click", function(){
    docRef15.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yopaage.addEventListener("click", function(){
    docRef16.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yomeni.addEventListener("click", function(){
    docRef17.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

yomesa.addEventListener("click", function(){
    docRef18.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});


/*　中華　*/
chugoni.addEventListener("click", function(){
    docRef21.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chugosa.addEventListener("click", function(){
    docRef22.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chugoage.addEventListener("click", function(){
    docRef23.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chupa.addEventListener("click", function(){
    docRef24.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chumenihot.addEventListener("click", function(){
    docRef27.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chumenicold.addEventListener("click", function(){
    docRef27.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.cold1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

chumesa.addEventListener("click", function(){
    docRef28.get().then(function(doc){
        if(doc && doc.exists){
            const myData = doc.data();
            answerField.innerText = myData.hot1;
        }
    }).catch(function(error){
        console.log("Got an error:", error);
    });
});

