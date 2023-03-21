// class Password {
//   generate() {

let passwordLen = parseInt(document.getElementById('passwordLen').value)
let charsNum = parseInt(document.getElementById('spl').value)
let capsNum = parseInt(document.getElementById('cap').value)
let numsNum = parseInt(document.getElementById('num').value)
let smallNum = passwordLen - (charsNum + capsNum + numsNum)
document.getElementById('sml').innerHTML = smallNum
updateSmall(passwordLen, charsNum, capsNum, numsNum)

let all = {
  chars: "!@#$%^&*()_-",
  cap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  small: "abcdefghijklmnopqrstuvwxyz",
  num: "1234567890"
}

//give option to randomize above parameters with minimum value of 1 for each
//use classes for this  


let observeElements = document.querySelectorAll("#passwordLen, #spl, #cap, #num,#sml")

for (let i = 0; i < observeElements.length; i++) {
  observeElements[i].addEventListener("click", updateAll);
}
for (let i = 0; i < observeElements.length; i++) {
  observeElements[i].addEventListener("keyup", updateAll);
}

btn.addEventListener("click", generatePassword);

randomize.addEventListener("click", function () {
  let passwordLen = randomNum(8) + 4
  document.getElementById('passwordLen').value = passwordLen
  let numsNum = randomNum(passwordLen - 1)
  let charsNum = randomNum(passwordLen - 1)
  let capsNum = randomNum(passwordLen - 1)

  document.getElementById('num').value = numsNum
  document.getElementById('spl').value = charsNum
  document.getElementById('cap').value = capsNum



  updateSmall(passwordLen, charsNum, capsNum, numsNum)
  generatePassword()
  // console.log("randoo")
})

function updateAll() {
  let passwordLen = parseInt(document.getElementById('passwordLen').value)
  let charsNum = parseInt(document.getElementById('spl').value)
  let capsNum = parseInt(document.getElementById('cap').value)
  let numsNum = parseInt(document.getElementById('num').value)
  updateSmall(passwordLen, charsNum, capsNum, numsNum)

}
function updateSmall(a, b, c, d) {
  // console.log("clicked")
  let smallNum = a - (b + c + d)
  console.log(a, b, c, d, smallNum)
  if (smallNum >= 0) {
    document.getElementById('sml').innerHTML = smallNum
    console.log(a, b, c, d, smallNum);
  }
  else if (smallNum < 0) {
    smallNum = 0;
    console.log(a, b, c, d, smallNum)
    while ((b + c + d) > a) {
      console.log(a, b, c, d, smallNum)
      if (b > c && b > d) {
        b--;
      }
      else if (c > d) {
        c--;
      } else {
        d--;
      }
      document.getElementById('passwordLen').value = b + c + d + smallNum
      document.getElementById('num').value =  d
      document.getElementById('spl').value = b
      document.getElementById('cap').value = c
    }
  }

}




const randomNum = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength)
}

const generateRandomChar = (j) => {
  return Object.values(all)[j][randomNum(Object.values(all)[j].length)]
}

function generatePassword() {
  let passwordLen = parseInt(document.getElementById('passwordLen').value)
  let charsNum = parseInt(document.getElementById('spl').value)
  let capsNum = parseInt(document.getElementById('cap').value)
  let numsNum = parseInt(document.getElementById('num').value)
  let smallNum = parseInt(document.getElementById('sml').innerHTML)


  // console.log(passwordLen,charsNum,capsNum,numsNum,smallNum)
  // let arr = Array.apply(null, Array(passwordLen)).map(function () { })
  arr = []
  // console.log(arr)

  for (let l = 0; l < charsNum; l++) {
    arr.splice(randomNum(passwordLen), 0, generateRandomChar(0));
  }
  for (let m = 0; m < capsNum; m++) {
    arr.splice(randomNum(passwordLen), 0, generateRandomChar(1));
  }
  for (let n = 0; n < numsNum; n++) {
    arr.splice(randomNum(passwordLen), 0, generateRandomChar(3));
  }
  for (let o = 0; o < smallNum; o++) {
    arr.splice(randomNum(passwordLen), 0, generateRandomChar(2));
  }

  let pw = arr.join('')


  // console.log(pw)

  document.getElementById('password').value = pw;

}

copyfn = document.getElementById('copypw')
copyfn.addEventListener("click", copypw)

function copypw() {
  let password = document.getElementById('password')
  password.focus()
  password.select()

  let copied = document.execCommand('copy')

  console.log("clicked")

}


let btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener("click", submitForm);

function submitForm() {
  let email = document.getElementById('email')
  let message = document.getElementById('message')

  let feedbackReply = document.getElementById('feedback-reply')
  email.value = ""
  message.value = ""
  feedbackReply.innerHTML = "Thank You for submitting your feedback!"

}
