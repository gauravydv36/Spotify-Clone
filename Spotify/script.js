console.log('Welcome to Js');
let index = 1;
let masterplay = document.getElementById('masterplay');
let mypro = document.getElementById('myprogress');
let audioElement = new Audio('1.mp3');
let gif = document.getElementById('gif');
// audioElement.play();
let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {
        songname : "Salam-e-Ishq" , filePath : "songs/1.mp3" , coverpath: "covers/1.jpg"
    },
    {
        songname : "Song 2" , filePath : "songs/2.mp3" , coverpath: "covers/2.jpg"
    },
    {
        songname : "Song 3" , filePath : "songs/3.mp3" , coverpath: "covers/3.jpg"
    },
    {
        songname : "Song 4" , filePath : "songs/4.mp3" , coverpath: "covers/4.jpg"
    },
    {
        songname : "Song 5" , filePath : "songs/5.mp3" , coverpath: "covers/5.jpg"
    },
    {
        songname : "Song 6" , filePath : "songs/6.mp3" , coverpath: "covers/6.jpg"
    },
    {
        songname : "Song 7" , filePath : "songs/7.mp3" , coverpath: "covers/7.jpg"
    },
    {
        songname : "Song 8" , filePath : "songs/8.mp3" , coverpath: "covers/8.jpg"
    },
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    
    }
})
 
 audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    mypro.value = progress;
 })
 mypro.addEventListener('change', ()=>{
    audioElement.currentTime = mypro.value * audioElement.duration/100;
 })
 songitem.forEach((element,i)=>{
   element.getElementsByTagName('img')[0].src = songs[i].coverpath;
   element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
 })
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeallplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        index = parseInt(e.target.id);
        // index--;
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        audioElement.play();
        document.getElementById('gif').style.opacity = 1;
        document.getElementById('mastersong').innerText = songs[index-1].songname;
    })
 })
 const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>{
        e.classList.add('fa-play-circle');
        e.classList.remove('fa-pause-circle');
    }); 
 }
 document.getElementById('forward').addEventListener('click',()=>{
   if(index==8) index=1;
   else index++;
   makeallplays();
        document.getElementById(`${index}`).classList.add('fa-pause-circle');
        document.getElementById(`${index}`).classList.remove('fa-play-circle');
   audioElement.src = `songs/${index}.mp3`;
   audioElement.currentTime = 0;
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
   audioElement.play();
   document.getElementById('mastersong').innerText = songs[index-1].songname;
   document.getElementById('gif').style.opacity = 1;
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(index==1) index=8;
    else index--;
    makeallplays();
         document.getElementById(`${index}`).classList.add('fa-pause-circle');
         document.getElementById(`${index}`).classList.remove('fa-play-circle');
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    audioElement.play();
    document.getElementById('mastersong').innerText = songs[index-1].songname;
    document.getElementById('gif').style.opacity = 1;
  })
// Listen to events
