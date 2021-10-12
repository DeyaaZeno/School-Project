// wavesurfer first
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
wavesurfer.load('audio/mercy-badshah.mp3');

var playBtn = document.getElementById("playBtn");
var stopBtn = document.getElementById("stopBtn");
var volumeBtn = document.getElementById("volumeBtn");


playBtn.onclick = () => {
    wavesurfer.playPause();
    if(playBtn.src.includes("play.png")){
        playBtn.src = "img/pause.png";
    }else{
        playBtn.src = "img/play.png";
    }
}
stopBtn.onclick = () => {
    wavesurfer.stop();
    playBtn.src = "img/play.png";
}
volumeBtn.onclick = () => {
    wavesurfer.toggleMute();
    if(volumeBtn.src.includes("volume.png")){
        volumeBtn.src = "img/mute.png";
    }else{
        volumeBtn.src = "img/volume.png";
    }
}
wavesurfer.on('finish', function () {
    playBtn.src = "img/play.png";
    wavesurfer.stop();
});

// wavesurfer second
var waveformSecond = WaveSurfer.create({
    container: '#waveformSecond',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformSecond.load('audio/mercy-badshah.mp3');

var playBtn2 = document.getElementById("playBtn2");
var stopBtn2 = document.getElementById("stopBtn2");
var volumeBtn2 = document.getElementById("volumeBtn2");


playBtn2.onclick = () => {
    waveformSecond.playPause();
    if(playBtn2.src.includes("play.png")){
        playBtn2.src = "img/pause.png";
    }else{
        playBtn2.src = "img/play.png";
    }
}
stopBtn2.onclick = () => {
    waveformSecond.stop();
    playBtn2.src = "img/play.png";
}
volumeBtn2.onclick = () => {
    waveformSecond.toggleMute();
    if(volumeBtn2.src.includes("volume.png")){
        volumeBtn2.src = "img/mute.png";
    }else{
        volumeBtn2.src = "img/volume.png";
    }
}
waveformSecond.on('finish', function () {
    playBtn2.src = "img/play.png";
    waveformSecond.stop();
});

// wavesurfer third
var waveformThird = WaveSurfer.create({
    container: '#waveformThird',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformThird.load('audio/mercy-badshah.mp3');

var playBtn3 = document.getElementById("playBtn3");
var stopBtn3 = document.getElementById("stopBtn3");
var volumeBtn3 = document.getElementById("volumeBtn3");


playBtn3.onclick = () => {
    waveformThird.playPause();
    if(playBtn3.src.includes("play.png")){
        playBtn3.src = "img/pause.png";
    }else{
        playBtn3.src = "img/play.png";
    }
}
stopBtn3.onclick = () => {
    waveformThird.stop();
    playBtn3.src = "img/play.png";
}
volumeBtn3.onclick = () => {
    waveformThird.toggleMute();
    if(volumeBtn3.src.includes("volume.png")){
        volumeBtn3.src = "img/mute.png";
    }else{
        volumeBtn3.src = "img/volume.png";
    }
}
waveformThird.on('finish', function () {
    playBtn3.src = "img/play.png";
    waveformThird.stop();
});

// wavesurfer four
var waveformFour = WaveSurfer.create({
    container: '#waveformFour',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformFour.load('audio/mercy-badshah.mp3');

var playBtn4 = document.getElementById("playBtn4");
var stopBtn4 = document.getElementById("stopBtn4");
var volumeBtn4 = document.getElementById("volumeBtn4");


playBtn4.onclick = () => {
    waveformFour.playPause();
    if(playBtn4.src.includes("play.png")){
        playBtn4.src = "img/pause.png";
    }else{
        playBtn4.src = "img/play.png";
    }
}
stopBtn4.onclick = () => {
    waveformFour.stop();
    playBtn4.src = "img/play.png";
}
volumeBtn4.onclick = () => {
    waveformFour.toggleMute();
    if(volumeBtn4.src.includes("volume.png")){
        volumeBtn4.src = "img/mute.png";
    }else{
        volumeBtn4.src = "img/volume.png";
    }
}
waveformFour.on('finish', function () {
    playBtn4.src = "img/play.png";
    waveformFour.stop();
});

// wavesurfer five
var waveformFive = WaveSurfer.create({
    container: '#waveformFive',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformFive.load('audio/mercy-badshah.mp3');

var playBtn5 = document.getElementById("playBtn5");
var stopBtn5 = document.getElementById("stopBtn5");
var volumeBtn5 = document.getElementById("volumeBtn5");


playBtn5.onclick = () => {
    waveformFive.playPause();
    if(playBtn5.src.includes("play.png")){
        playBtn5.src = "img/pause.png";
    }else{
        playBtn5.src = "img/play.png";
    }
}
stopBtn5.onclick = () => {
    waveformFive.stop();
    playBtn5.src = "img/play.png";
}
volumeBtn5.onclick = () => {
    waveformFive.toggleMute();
    if(volumeBtn5.src.includes("volume.png")){
        volumeBtn5.src = "img/mute.png";
    }else{
        volumeBtn5.src = "img/volume.png";
    }
}
waveformFive.on('finish', function () {
    playBtn5.src = "img/play.png";
    waveformFive.stop();
});

// wavesurfer sex
var waveformSex = WaveSurfer.create({
    container: '#waveformSex',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformSex.load('audio/mercy-badshah.mp3');

var playBtn6 = document.getElementById("playBtn6");
var stopBtn6 = document.getElementById("stopBtn6");
var volumeBtn6 = document.getElementById("volumeBtn6");


playBtn6.onclick = () => {
    waveformSex.playPause();
    if(playBtn6.src.includes("play.png")){
        playBtn6.src = "img/pause.png";
    }else{
        playBtn6.src = "img/play.png";
    }
}
stopBtn6.onclick = () => {
    waveformSex.stop();
    playBtn6.src = "img/play.png";
}
volumeBtn6.onclick = () => {
    waveformSex.toggleMute();
    if(volumeBtn6.src.includes("volume.png")){
        volumeBtn6.src = "img/mute.png";
    }else{
        volumeBtn6.src = "img/volume.png";
    }
}
waveformSex.on('finish', function () {
    playBtn6.src = "img/play.png";
    waveformSex.stop();
});

// wavesurfer seven
var waveformSeven = WaveSurfer.create({
    container: '#waveformSeven',
    waveColor: 'violet',
    progressColor: 'purple',
    barWidth: 4,
    height: 80,
    responsive: true,
    hideScrollbar: true,
    braRadius: 4
});
waveformSeven.load('audio/mercy-badshah.mp3');

var playBtn7 = document.getElementById("playBtn7");
var stopBtn7 = document.getElementById("stopBtn7");
var volumeBtn7 = document.getElementById("volumeBtn7");


playBtn7.onclick = () => {
    waveformSeven.playPause();
    if(playBtn7.src.includes("play.png")){
        playBtn7.src = "img/pause.png";
    }else{
        playBtn7.src = "img/play.png";
    }
}
stopBtn7.onclick = () => {
    waveformSeven.stop();
    playBtn7.src = "img/play.png";
}
volumeBtn7.onclick = () => {
    waveformSeven.toggleMute();
    if(volumeBtn7.src.includes("volume.png")){
        volumeBtn7.src = "img/mute.png";
    }else{
        volumeBtn7.src = "img/volume.png";
    }
}
waveformSeven.on('finish', function () {
    playBtn7.src = "img/play.png";
    waveformSeven.stop();
});