function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true})
     classifer=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/77qkQFbSO/model.json',modelloaded )

}
function modelloaded(){
    classifer.classify(gotresult)
}
function gotresult(error,results){
    if (error) {
      console.log(error) 
    } else {
   console.log(results)     
   document.getElementById("label").innerHTML=results[0].label
   document.getElementById("accuracy").innerHTML=results[0].confidence
   img1=document.getElementById("alien1")
     
   if (results[0].label=="bird") {
       img1.src="bird gif.gif"
     
   } else if(results[0].label=="dog") {
    img1.src="dog gif.gif"
  
   }
 else if(results[0].label=="cat") {
    img1.src="cat gif.gif"
   
   }
   else if(results[0].label=="Background Noise"){
    img1.src="ear png.jpg"
  
   }
    }
}