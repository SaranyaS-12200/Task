// let division=document.createElement('div');
// division.innerHTML="this is dynamic div";
// division.className="main";
// division.setAttribute('id','main');
// document.body.append(division);

// let span=document.createElement('span');
// span.innerHTML="this is dynamic span";
// span.style.backgroundColor="yellow";
// span.style.fontFamily="courier";
// document.body.append(span);

// let p=document.createElement('p');
// p.innerText="<div>this is dynamic p</div>";
// p.style.backgroundColor="red";
// p.style.fontFamily="courier";
// document.body.append(p);

// let container=document.createElement('div');
// container.innerHTML="<div class="row">
// <div class="col-1"></div></div>";
// container.className="container";
// document.body.append(container);

// let div1=document.createElement('div');
// div1.className="container";

// let div2=document.createElement('div');
// div2.className="row";

// let div3=document.createElement('div');
// div3.className="col-1";

// div2.append(div3);
// div1.append(div2);
// document.body.append(div1);

// let s=document.createElement('div');
// s.innerText="<p>This is saranya</p>";
// s.style.backgroundColor="yellow";
// document.body.append(s);

// let s1=document.createElement('div');
// s1.className="container";
// let s2=document.createElement('div');
// s2.className="row";
// let s3=document.createElement('div');
// s3.className="col-1";

// // s2.append(s3);
// // s1.append(s2);
// // document.body.append(s1);
// //table using dom
// var table=document.createElement('table');
// table.setAttribute('class','table');
// var thead=document.createElement('thead');
// thead.setAttribute('class','thead-dark');
// var tr=document.createElement('tr');
// var th1=createelement('th','first');
// var th2=createelement('th','last');
// tr.append(th1,th2);
// thead.append(tr);


// var tbody=document.createElement('tbody');
// var tr1=document.createElement
// ('tr');
// var td1=createelement('td','john');
// var td2=createelement('td','doe');


// var tr2=document.createElement
// ('tr');
// var td3=createelement('td','saran');
// var td4=createelement('td','sharan');





// tr1.append(td1,td2);
// tr2.append(td3,td4);

// tbody.append(tr1,tr2);
// table.append(thead,tbody);
// document.body.append(table);



// function createelement(elename,value=""){
// var element=document.createElement(elename);
// element.innerHTML=value;
// console.log(element);
// return element;
// }

//append vs appendchild
// let parent = document.createElement('div');
// parent.innerHTML="this is parent";

// let child = document.createElement('div');
// child.innerHTML="this is child";

// let child1 = document.createElement('div');
// child1.innerHTML="this is child";


// let res = parent.append(child,child1);
// console.log(res);

//using append we can add multiple elements
//the return type of append is always undefined

//using append child we can add only one element
//the return type of appendchild is an added element

// function foo(){
//     let res1=document.getElementById("main").value;console.log(res1);
// }



var form=document.createElement('form');
form.setAttribute=('onsubmit','myfun()');



var label=document.createElement('label');
label.innerHTML="Name";
label.setAttribute('for','name');



var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','name');
input.setAttribute('placeholder','enter your name');
input.className="main";
label.append(input);


var label1=document.createElement('label');
label1.innerHTML="email";
label1.setAttribute('for','email');


var input1=document.createElement('input');
input1.setAttribute('type','email');
input1.setAttribute('id','email');
input1.setAttribute('placeholder','enter your email');
input1.className="main";
label1.append(input1);

var label2=document.createElement('label');
label2.innerHTML="Password";
label2.setAttribute('for','password');


var input2=document.createElement('input');
input2.setAttribute('type','password');
input2.setAttribute('id','password');
input2.setAttribute('placeholder','enter your password');
input2.className="main";
label2.append(input2);



var label3=document.createElement('label');
label3.innerHTML="Image";
label3.setAttribute('for','image');


var input3=document.createElement('input');
input3.setAttribute('type','file');
input3.setAttribute('id','image');
input3.className="main";
label3.append(input3);





form.append(label,label1,label2);
document.body.append(form);

function myfun(){
    var res=document.getElementsByTagName('input').value;
    console.log(res);
}


