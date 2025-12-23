/* ================= AUDIO KETIKAN ================= */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function typeSound(){
  if(!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.value = 600 + Math.random()*300;
  gain.gain.value = 0.04;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.03);
}

/* ================= ELEMENT ================= */
const title = document.getElementById("title");
const start = document.getElementById("start");
const screen = document.getElementById("screen");
const hack = document.getElementById("hack");

/* ================= TEXT ================= */
const titleText = "WALCOM";
const startText = "START? >> ☠️";

const hackerLines = [
  "[ACCESS GRANTED] :: 0xA91F",
  "BYPASSING SECURITY LAYER",
  "INJECTING PAYLOAD",
  "EXTRACTING DATA STREAM",
  "OVERRIDE SYSTEM CONTROL",
  "UPLOADING MALWARE CORE",
  "ROOT ACCESS ACHIEVED",
  "INITIALIZING DARK MODE",
  "TRACE DISABLED",
  "CONNECTION STABLE"
];

/* ================= TYPE EFFECT ================= */
function typeText(el,text,speed,callback){
  el.innerHTML="";
  let i=0;
  const timer=setInterval(()=>{
    el.innerHTML+=text[i];
    typeSound();
    i++;
    if(i>=text.length){
      clearInterval(timer);
      if(callback) callback();
    }
  },speed);
}

/* ================= INTRO ================= */
typeText(title,titleText,120,()=>{
  setTimeout(()=>{
    start.classList.remove("hidden");
    typeText(start,startText,80);
  },500);
});

/* ================= CLICK START ================= */
start.onclick=()=>{
  audioCtx = new AudioCtx(); // aktifkan audio
  screen.classList.add("shake");

  const bomb=document.createElement("div");
  bomb.id="bomb";
  bomb.textContent="💣";
  document.body.appendChild(bomb);

  setTimeout(()=>{
    bomb.remove();

    const boom=document.createElement("div");
    boom.id="boom";
    document.body.appendChild(boom);

    setTimeout(()=>{
      boom.remove();
      screen.remove();
      startHacker();
    },800);

  },1000);
};

/* ================= HACKER STREAM ================= */
function startHacker(){
  hack.classList.remove("hidden");
  setInterval(()=>{
    const line=hackerLines[Math.floor(Math.random()*hackerLines.length)];
    hack.innerText+=line+"\n";
    hack.scrollTop=hack.scrollHeight;
    typeSound();
  },60);
}