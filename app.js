var cvBtns = document.querySelectorAll('.cvBtn');

// var cv1Btn = document.getElementById("cv1Btn");
// var cv2Btn = document.getElementById("cv2Btn");

// var cvBox1 = document.querySelector("#cvBox1");
// var cvBox2 = document.querySelector("#cvBox2");

var home = document.querySelector(".home");
var goToHome = document.querySelector(".goToHome");

var editBtn = document.querySelector('.editBtn');
var saveBtn = document.querySelector('.saveBtn');

// is may all cvBox a rahy hn, in the array 
var cvBoxs = document.querySelectorAll(".cvBox");
var topRow = document.querySelector(".topRow");

// console.log(cvBox[1]);



// ---------- TO SHOW CV TEMPLATE ---------------- 
cvBtns.forEach((b)=>{

  b.addEventListener('click',()=> {
  
    var desireBtn = b;
    var desireBtnID = desireBtn.getAttribute('id');
    var desireBtnIDNum = desireBtnID.slice(2,3)
    console.log(desireBtnIDNum);
    // console.log(desireBtn.getAttribute('id'));

      // ager none nhe h
  if (!home.classList.contains("none")) {
    // to none kr do
    home.classList.add("none");

    console.log("line no 16");
  }

  // ager none  h
  if (topRow.classList.contains("none")) {
    // to show kr do
    topRow.classList.remove("none");

    console.log("line no 16");
  }

  // to get desire cv template 
  console.log(document.getElementById(`cvBox${desireBtnIDNum}`));

  if (document.getElementById(`cvBox${desireBtnIDNum}`).classList.contains("none")) {

        // to show krwa do
        document.getElementById(`cvBox${desireBtnIDNum}`).classList.remove("none");
    
        // console.log("line no 26");
        // alert('Now you can customize your CV by click on Edit Button, Make sure before download CV your changes were save!')
  }
  
  
  })

  
})




// ----------- UPPER IN MULTIPLES FUNCTIONS KA KAM AIK HI FUNCTION M KR LIA ------------
// ---------- for show cv 1 ----------------
// cv1Btn.addEventListener("click", () => {
//   console.log("line no 8");

//   // ager none nhe h
//   if (!home.classList.contains("none")) {
//     // to none kr do
//     home.classList.add("none");

//     console.log("line no 16");
//   }

//   // ager none  h
//   if (topRow.classList.contains("none")) {
//     // to show kr do
//     topRow.classList.remove("none");

//     console.log("line no 16");
//   }

//   // ager none h
//   if (cvBox1.classList.contains("none")) {
//     // to show krwa do
//     cvBox1.classList.remove("none");

//     console.log("line no 26");
//   }
// });

// // ---------- for show cv 2 ----------------
// cv2Btn.addEventListener("click", () => {
//   console.log("line no 46");

//   // ager home none nhe h
//   if (!home.classList.contains("none")) {
//     // to kr none do
//     home.classList.add("none");

//     console.log("line no 54");
//   }

//   // ager none nhe h
//   if (topRow.classList.contains("none")) {
//     // to show kr  do
//     topRow.classList.remove("none");

//     console.log("line no 16");
//   }

//   // ager none h
//   if (cvBox2.classList.contains("none")) {
//     // to show krwa do
//     cvBox2.classList.remove("none");

//     console.log("line no 64");
//   }
// });



// --------------- goToHome ----------------
goToHome.addEventListener("click", () => {
  console.log("line no 77");

  // ager  home none  h
  if (home.classList.contains("none")) {
    // to show krwa do
    home.classList.remove("none");

    console.log("line no 85");
  }

  // ager topRow none nhe  h
  if (!topRow.classList.contains("none")) {
    // to topRow none kr do
    topRow.classList.add("none");

    console.log("line no 16");
  }

  cvBoxs.forEach((box) => {
    console.log("line no 91");
    if (!box.classList.contains("none")) {
      // console.log(box);
      // console.log(box.classList);
      box.classList.add("none");
      console.log("line no 94");
    }
  });

});


var textAreas = document.querySelectorAll("textarea");
var paras = document.querySelectorAll('.cvBox p');

textAreas.forEach((t) => {
  t.disabled = true;
});



// ---------- edit btn ka kam 
editBtn.addEventListener('click', ()=> {

  // ager saveBtn k aps none ki claass h 
  if(saveBtn.classList.contains('none')) {

    saveBtn.classList.remove('none');
    
  }

  // ager saveBtn k aps none ki claas nhe h 
  // if(!editBtn.classList.contains('none')) {

  //   editBtn.classList.add('none');

  // }

  console.log(textAreas);

  
  textAreas.forEach((t) => {
    t.disabled = false;
  });

})




// ---------- save btn ka kam 
saveBtn.addEventListener('click', ()=> {

    // ager saveBtn k aps none ki claas nhe h 
    if(!saveBtn.classList.contains('none')) {

      saveBtn.classList.add('none');
      
    }

    textAreas.forEach((t)=> {

     console.log( t);
     console.log( t.value);
     console.log(t.parentElement);
     console.log(t.parentElement.innerHTML);
     t.parentElement.innerText = t.value;
     console.log( t);
     console.log( t.value);
    //  console.log( t.target.value);

    })
  

})



// for download id card 
function downloadCV() {

  cvBoxs.forEach((c)=> {

    // desire cv ki id nikalnay k lien 
    if(!c.classList.contains('none')){
      var cvID = c.getAttribute('id');
      console.log(cvID);

      html2canvas(document.getElementById(cvID)).then(canvas => {
        let link = document.createElement("a");
        link.download = "professional_cv.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });

      
    }
    
  })
  
  // console.log(cvID);
  // print the cv 
  // html2canvas(document.getElementById(cvID)).then(canvas => {
  //   let link = document.createElement("a");
  //   link.download = "professional_cv.png";
  //   link.href = canvas.toDataURL("image/png");
  //   link.click();
  // });
}
// paras.forEach((t) => {
//   console.log("h ehe he");
//   console.log(t);

//   t.addEventListener("click", () => {
//     console.log("h ehe he IN");
//     console.log(t);
//     console.log(t.querySelector("textarea"));
//     var textA = t.querySelector("textarea");
//     textA.disabled = false
//     textA.focus();
//   });

//   console.log("h ehe he END");
// });

// console.log(textAreas);
