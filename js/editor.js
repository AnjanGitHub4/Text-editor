const icons = document.querySelectorAll('.icons i');
let txt = "";
let fs = 16;
/*** getting textarea input value ***/
function getEditorText() {
  let editorArea = document.querySelector('#text-area');
  editorArea.addEventListener("keyup", (e)=> {
    txt = editorArea.value;
    return txt.trim();
  });
  return txt.trim();
}
getEditorText();

/*** event listener add && ui handle ***/
icons.forEach((elem, id)=> {
  icons[id].addEventListener("click", (event)=> {
    //console.log(event.target.classList[1]);
    let targetClass = event.target.classList[1];
    const editorText = document.querySelector('#text-area');
    /*** ui handle ***/
    if (txt.length > 0) {
      if (targetClass == "bi-check2-all") {
        editorText.select();
      } else if (targetClass == "bi-type-italic") {
        if (editorText.classList.contains("italic")) {
          editorText.classList.remove("italic");
        } else {
          editorText.classList.add("italic");
        }
        return;
      } else if (targetClass == "bi-type-bold") {
        if (editorText.style.fontWeight == "bold") {
          editorText.style.fontWeight = "normal";
        } else {
          editorText.style.fontWeight = "bold";
        }
        return;
      } else if (targetClass == "bi-list") {
        if (editorText.style.textAlign == "center") {
          editorText.style.textAlign = "left";
        } else {
          editorText.style.textAlign = "center";
        }
        return;
      }
    }
  });
});

/*** font-size ui handle ***/
function fontCaps(self) {
  document.querySelector("#text-area").style.fontSize = fs+"px";
  fs += 2;
}

function fontSmall(self) {
  fs -= 2;
  document.querySelector("#text-area").style.fontSize = fs+"px";
  if (fs === 16 || fs <= 16) {
    document.querySelector("#text-area").style.fontSize = "16px";
    fs = 16;
  }
}

/*** dark mode toggle ***/
function darkMode() {
  const darkIcon = document.querySelector("i.dark-icon");
  darkIcon.addEventListener("click", ()=> {
    // icon change
    if (document.querySelector(".header-icon").classList.contains("bi-brightness-low-fill")) {
      document.querySelector(".header-icon").classList.remove("bi-brightness-low-fill");
      document.querySelector(".header-icon").classList.add("bi-brightness-low", "text-white");
    } else {
      document.querySelector(".header-icon").classList.add("bi-brightness-low-fill", "text-dark");
      document.querySelector(".header-icon").classList.remove("bi-brightness-low", "text-white");
    }


    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.querySelector(".editor-title").classList.remove("bg-dark");
      document.querySelector("#text-area").classList.remove("dark");
      document.querySelector(".icons").classList.remove("bg-dark");
    } else {
      document.body.classList.add("dark");
      document.querySelector(".editor-title").classList.add("bg-dark");
      document.querySelector("#text-area").classList.add("dark");
      document.querySelector(".icons").classList.add("bg-dark");
    }
  });
}
darkMode();