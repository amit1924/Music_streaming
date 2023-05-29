let songIndex = 0
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')
let gif= document.getElementById('gif')
//let masterSongName = document.getElementById('masterSongName');
//let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:"Sach keh raha hai", filePath:'1.mp3'},

    {songName:"Maine dil se kaha", filePath:'2.mp3'},

    {songName:"Tu mujhe soch kabhi", filePath:'3.mp3'},

    {songName:"Zara si dil me", filePath:'4.mp3'},

    {songName:"Tu sochta hu", filePath:'5.mp3'},

    {songName:"Haan tu hai", filePath:'6.mp3'},

    {songName:"Sajde kiye hai", filePath:'7.mp3'},
]
/*songItems.forEach((element, i)=>{ 
   
    element.getElementsByClassName("sach")[0].innerText = songs[i].sach; 
})*/

masterPlay.addEventListener('click' ,()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity =1
}else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause')
    masterPlay.classList.add('fa-circle-play')
    gif.style.opacity =0
}

})

audioElement.addEventListener('timeupdate',()=>{

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
 
  progressBar.value = progress
})
progressBar.addEventListener('change',()=>{
   audioElement.currentTime = progressBar.value*audioElement.duration/100;
})
const makeAllPlays=function(){
Array.from(document.getElementsByClassName('fa')).forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')

})
}
Array.from(document.getElementsByClassName('fa')).forEach((element)=>{
    element.addEventListener('click',function(e){
        makeAllPlays()
        songIndex = parseInt(e.target.id);
     console.log(e.target)
     e.target.classList.remove('fa-circle-play')
     e.target.classList.add('fa-circle-pause')
     audioElement.src ="1.mp3"
     //masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=6){
    songIndex += 0
    }
    else{
        songIndex += 1
    }
    audioElement.src ='2.mp3'
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=0){
    songIndex += 0
    }
    else{
        songIndex -= 1
    }
    audioElement.src ="7.mp3"
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})