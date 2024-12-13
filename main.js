output=document.getElementById('output')
type=document.getElementById('type')
const notes=[
   'C',
   'Db',
   'D',
   'Eb',
   'E',
   'F',
   'Gb',
   'G',
   'Ab',
   'A',
   'Bb',
   'B'
]
const chords=[
   '',
   'Minor',
   'Dominant 7',
   'Minor 7',
   'Major 7'
]
const scales=[
   '',
   'Minor'
]
let toggle=true
function randFromList(x){
   return x[Math.floor(Math.random() * x.length)];
}
function run(){
   if(toggle){
      output.innerHTML=randFromList(notes)+' '+randFromList(chords)
   }else{
      output.innerHTML=randFromList(notes)+' '+randFromList(scales)
   }
}
function togglefunction(){
   toggle=!toggle
   if(toggle){type.innerHTML='Chords'}else{type.innerHTML='Scales'}
}