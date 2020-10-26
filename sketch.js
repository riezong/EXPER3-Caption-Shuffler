//Image Shuffler v3
//Juxtaposing Text and Image
//Based on 'Psycho' and 'Grey with Questions'

var scene = 1;

// Countdown timer variables
var timerTitle;
var timerRotate;
var countdown;
var timer;
var state;

var i = 0;
var imagesi;
var posX;
var posY;

//Images
// StringList imageShuffle;
var images = [
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs1.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs2.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs3.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs4.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs5.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs6.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs7.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs8.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs9.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs10.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs11.jpg",
  "https://riezong.github.io/EXPER3-Caption-Shuffler/data/Psycho_Screen_Grabs12.jpg",
];

var captions = [
  "outside,",
  "waiting.",
  "clustered",
  "to",
  "observe",
  "The",
  "hard-faced,",
  "few",
  "broken",
  "with",
  "flesh",
  "mottled",
  "gray,",
  "with",
  "questions.",
]

function preload() {
  // Need to address: Cannot load .txt file for some reason?
  // caption = loadStrings('https://riezong.github.io/EXPER3-Caption-Shuffler/data/caption.txt');

  // Shuffle images
  images = shuffle(images, true);
  // Shuffle captions
  captions = shuffle(captions, true);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  pixelDensity(displayDensity());

  // Generate first image
  imagesi = int(random(12));

  // Countdown timer setup
  timerTitle = 3000;
  timerRotate = 1000;
  timer = millis() + timerRotate;
  state = 0;

  // Typography (Totally optional)
  textAlign(LEFT);
  textFont('Helvetica');
  textSize(16);

  posX = (width / 2 - 200);
  posY = (height / 2 - 150);
}

function draw() {

  //Titles
  if (scene == 1) {
    background(0);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Experiment 3: Juxtaposing Text & Image", width / 2, height / 2 - 20);
    text("Saul Bass 'Psycho' storyboards", width / 2, height / 2);
    text("Sherry Hale 'Gray with questions'", width / 2, height / 2 + 20);

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {
      background(0);
      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }

  if (scene == 2) {
    background('#333333');
    imageShuffler(i);
    captionShuffler(i);

    //Fetch next combination after a timer

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {
      scene = 2;
      state = 0;
      i++;
      if (i == images.length) {
        scene = 3;
      }
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }

  if (scene == 3) {
    end();
  }
}

function imageShuffler(i) {
  //Loading image
  img = createImg(images[i], "");
  image(img, posX, posY, 400, 300);
  img.hide();
}

function captionShuffler(i) {
  //Print caption
  fill('#FF8800');
  textSize(16);
  textAlign(CENTER, CENTER);
  text(captions[i], width / 2, posY + 320);
}

function end() {
  background(0);
  text("Saul Bass 'Psycho' storyboards", width / 2, height / 2 - 20);
  text("Sherry Hale 'Gray with questions'", width / 2, height / 2);
  text("Click to replay", width / 2, height / 2 + 40);
}

function mousePressed() {
  if (scene == 3) {
    // Reset everything
    i = 0;
    timer = millis() + timerRotate;
    state = 0;
    
    scene = 2;
  } else {}
}