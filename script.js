let num ='1234567890'
let numLength = num.length
function genarate(length){
    let numLength = num.length
    let res = ''
    for(i=0;i<length;i++){
        res += num.charAt(Math.floor(Math.random()*numLength))
    }
      return res
}
document.getElementById('capcha').innerHTML = genarate(6)



function verify(){
    let inVal = document.getElementById('input').value
  let capVal = document.getElementById('capcha').innerText
    if(capVal === inVal){
        document.getElementById('check').style.display = 'block';
     }
     else{
        document.getElementById('check1').style.display = 'block'
     }
}
console.log(inVal)