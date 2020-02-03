let userModelObj1 = new userModel();
    userModelObj1.firstName="Kanaiya";
    userModelObj1.lastName="Bhanushali";

let userModelObj2=new userModel();
    userModelObj2.firstName="Tushar";
    userModelObj2.lastName="Patil";

let userModelObj3=new userModel();
    userModelObj3.firstName="Sagar";
    userModelObj3.lastName="Adkhale";

let userModelObj4=new userModel();
    userModelObj4.firstName="Amol";
    userModelObj4.lastName="Patil";

let userModelObj5=new userModel();
    userModelObj5.firstName="Ankit";
    userModelObj5.lastName="Shah";

let userModelObj6=new userModel();
    userModelObj6.firstName="Kanaiya";
    userModelObj6.lastName="Bhanushali";

let userModelObj7=new userModel();
    userModelObj7.firstName="Ajay";
    userModelObj7.lastName="Rohra";

let userModelObj8=new userModel();
    userModelObj8.firstName="Harshal";
    userModelObj8.lastName="Dalvi";

let userModelObj9=new userModel();
    userModelObj9.firstName="Kishor";
    userModelObj9.lastName="Naik";

let userModelObj10=new userModel();
    userModelObj10.firstName="Shradha";
    userModelObj10.lastName="Borse";

let userModelObj11=new userModel();
    userModelObj11.firstName="Nahid Fatima";
    userModelObj11.lastName="Ansari";

let userModelObj12=new userModel();
    userModelObj12.firstName="Jueeli";
    userModelObj12.lastName="Sawant";

let userModelObj13=new userModel();
    userModelObj13.firstName="Pragati";
    userModelObj13.lastName="Parab";

let userModelObj14=new userModel();
    userModelObj14.firstName="Shyam";
    userModelObj14.lastName="Badgujjar";

let userModelObj15=new userModel();
    userModelObj15.firstName="Deepa";
    userModelObj15.lastName="Prakash";

let collectionObj = new Array();
    collectionObj.push(userModelObj1,userModelObj2,userModelObj3,userModelObj4,userModelObj5,
        userModelObj6,userModelObj7,userModelObj8,userModelObj9,userModelObj10,userModelObj11,
        userModelObj12,userModelObj13,userModelObj14,userModelObj15);

console.log(collectionObj);

//Need individual elements of the array

collectionObj
        .forEach((leElement)=>{
            console.log(`${leElement.firstName} ${leElement.lastName}`);
        })


//Custom forEach Method / Working of ForEach method.


function ForEach(collectionObj,callBack){ 
    for(let value of collectionObj){
        callBack(value);
    }
}

//Above parameter passing of function is similar to below syntax 
// function callBack(eachElement){
//     console.log(leUserModel.firstName);
// }
//In callback function we pass the whole function/method as a parameter
//we use callback whenever we have to perform certain set of actions for multiple times.


ForEach(collectionObj,(eachElement)=>{ //passing the whole function as a parameter
    console.log(eachElement.firstName);
})
