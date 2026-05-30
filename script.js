const quizData = [
    { img: "images/1.jpeg", options: ["Hard Hat", "Bucket", "Box", "Cap"], correct: "Hard Hat", def: "A hard hat protects the head from falling objects and electrical shocks.", pronunciation: "/hɑːrd hæt/" },
    { img: "images/2.jpeg", options: ["Sunglasses", "Visor", "Mask", "Safety Goggles"], correct: "Safety Goggles", def: "Safety Goggles protect eyes from dust, chemicals, and flying particles.", pronunciation: "/ˈseɪfti ˈɡɒɡəlz/" },
    { img: "images/3.jpeg", options: ["Earplugs", "Headphones", "Cotton Balls", "Muffs"], correct: "Earplugs", def: "Earplugs are used to reduce noise levels in loud industrial environments.", pronunciation: "/ˈɪrplʌɡz/" },
    { img: "images/4.jpeg", options: ["Sneakers", "Sandals", "Safety Boots", "Heels"], correct: "Safety Boots", def: "Safety Boots protect feet from heavy falling objects and punctures.", pronunciation: "/ˈseɪfti buːts/" },
    { img: "images/5.jpeg", options: ["Jacket", "Raincoat", "Shirt", "High-Vis Vest"], correct: "High-Vis Vest", def: "A High-Vis Vest ensures workers are visible in low-light or high-traffic areas.", pronunciation: "/haɪ vɪz vɛst/" },
    { img: "images/6.jpeg", options: ["Cut-Resistant Gloves", "Crowbar", "Mittens", "Handwraps"], correct: "Cut-Resistant Gloves", def: "Cut-Resistant Gloves protect hands from sharp blades and abrasive materials.", pronunciation: "/kʌt rɪˈzɪstənt ɡlʌvz/" },
    { img: "images/7.jpeg", options: ["Mask", "Respirator", "Scarf", "Bandana"], correct: "Respirator", def: "A Respirator filters out hazardous dust, fumes, or vapors from the air.", pronunciation: "/ˈrɛspəreɪtər/" },
    { img: "images/8.jpeg", options: ["Hat", "Hood", "Cap", "Welding Helmet"], correct: "Welding Helmet", def: "A welding helmet protects the face and eyes from intense light and sparks.", pronunciation: "/ˈwɛldɪŋ ˈhɛlmɪt/" },
    { img: "images/9.jpeg", options: ["Rope", "Belt", "Safety Harness", "Strap"], correct: "Safety Harness", def: "A safety harness prevents falls when working at significant heights.", pronunciation: "/ˈseɪfti ˈhɑːrnɪs/" },
    { img: "images/10.jpeg", options: ["Mask", "Face Shield", "Goggles", "Glasses"], correct: "Face Shield", def: "A face shield provides full-face protection against liquid splashes.", pronunciation: "/feɪs ʃiːld/" },
    { img: "images/11.jpeg", options: ["Uniform", "Pajamas", "Raincoat", "Fire-Resistant Suit"], correct: "Fire-Resistant Suit", def: "Fire-Resistant Suit protects the body against extreme heat and flames.", pronunciation: "/ˈfaɪər rɪˈzɪstənt suːt/" },
    { img: "images/12.jpeg", options: ["Pads", "Guards", "Cushions", "Knee Pads"], correct: "Knee Pads", def: "Knee pads Protect knees during long periods of kneeling on hard surfaces.", pronunciation: "/niː pædz/" },
    { img: "images/13.jpeg", options: ["Glasses", "Buckets", "Monocle", "Safety Spectacles"], correct: "Safety Spectacles", def: "Safety Spectacles are lightweight eye protection against minor debris.", pronunciation: "/ˈseɪfti ˈspɛktəkəlz/" },
    { img: "images/14.jpeg", options: ["Earplugs", "Earmuffs", "Headset", "Cotton"], correct: "Earmuffs", def: "Earmufs provides a physical barrier to block high-intensity noise.", pronunciation: "/ˈɪrmʌfs/" },
    { img: "images/15.jpeg", options: ["Chemical Apron", "Apron", "Jacket", "Vest"], correct: "Chemical Apron", def: "A Chemical Apron protects clothing and skin from hazardous chemical spills.", pronunciation: "/ˈkɛmɪkəl ˈeɪprən/" },
    { img: "images/16.jpeg", options: ["barrier", "Pliers", "Hammer", "Adjustable Wrench"], correct: "Adjustable Wrench", def: "An adjustable wrench is used for gripping and turning nuts and bolts of various sizes.", pronunciation: "/əˈdʒʌstəbəl rɛntʃ/" },
    { img: "images/17.jpeg", options: ["Crowbar", "Claw Hammer", "Mallet", "Sledgehammer"], correct: "Crowbar", def: "A crowbar is used for driving nails into or pulling nails from materials.", pronunciation: "/ˈkroʊbɑːr/" },
    { img: "images/18.jpeg", options: ["Driver", "Drill", "Wrench", "Screwdriver"], correct: "Screwdriver", def: "A screwdriver is used for installing or removing screws.", pronunciation: "/ˈskruːdraɪvər/" },
    { img: "images/19.jpeg", options: ["Scissors", "Tweezers", "Clamps", "Pliers"], correct: "Pliers", def: "Pliers are used for holding, bending, or cutting wire and small parts.", pronunciation: "/ˈplaɪərz/" },
    { img: "images/20.jpeg", options: ["Ruler", "Yardstick", "Tape Measure", "Scale"], correct: "Tape Measure", def: "A tape measure is used for accurate linear measurement of distances.", pronunciation: "/teɪp ˈmɛʒər/" },
    { img: "images/21.jpeg", options: ["Level", "Spirit Level", "Gauge", "Indicator"], correct: "Spirit Level", def: "A sprit level is used to determine if a surface is perfectly horizontal or vertical.", pronunciation: "/ˈspɪrɪt ˈlɛvəl/" },
    { img: "images/22.jpeg", options: ["Safety Pin", "Utility Knife", "Tape", "Blade"], correct: "Utility Knife", def: "A utility knife is a sharp cutting tool for trimming or opening packaging.", pronunciation: "/juːˈtɪləti naɪf/" },
    { img: "images/23.jpeg", options: ["Hacksaw", "Saw", "Knife", "Chisel"], correct: "Hacksaw", def: "A hacksaw is a fine-tooth saw used primarily for cutting metal.", pronunciation: "/ˈhæksɔː/" },
    { img: "images/24.jpeg", options: ["Drill", "Hammer", "Driver", "Power Drill"], correct: "Power Drill", def: "A power drill is used for boring holes or driving fasteners into materials.", pronunciation: "/ˈpaʊər drɪl/" },
    { img: "images/25.jpeg", options: ["Angle Grinder", "Grinder", "Sander", "Cutter"], correct: "Angle Grinder", def: "An angle grinder is used for cutting, grinding, or polishing metal and stone.", pronunciation: "/ˈæŋɡəl ˈɡraɪndər/" },
    { img: "images/26.jpeg", options: ["C-Clamp", "Clamp", "Vice", "Grip"], correct: "C-Clamp", def: "A C-Clamp is used to hold workpieces securely during assembly.", pronunciation: "/siː klæmp/" },
    { img: "images/27.jpeg", options: ["Eraser", "Socket", "File", "Wood Rasp"], correct: "Wood Rasp", def: "A Wood rasp is used to shape wood by abrasion.", pronunciation: "/wʊd ræsp/" },
    { img: "images/28.jpeg", options: ["Wrench", "Ket", "Spanner", "Socket Wrench"], correct: "Socket Wrench", def: "A socket wrench is used for fast turning of nuts and bolts in tight spaces.", pronunciation: "/ˈsɒkɪt rɛntʃ/" },
    { img: "images/29.jpeg", options: ["Belt", "Harness", "Strap", "Tool Belt"], correct: "Tool Belt", def: "A tool belt is used for keeping essential hand tools accessible on the body.", pronunciation: "/tuːl bɛlt/" },
    { img: "images/30.jpeg", options: ["Extension Cord", "Cable", "Wire", "Plug"], correct: "Extension Cord", def: "An extension cord is used to provide power to tools at a distance from an outlet.", pronunciation: "/ɪkˈstɛnʃən kɔːrd/" },
    { img: "images/31.jpeg", options: ["Lamp", "Work Light", "Flashlight", "Bulb"], correct: "Work Light", def: "A work light provides illumination in dark workspaces or confined areas.", pronunciation: "/wɜːrk laɪt/" },
    { img: "images/32.jpeg", options: ["Pliers", "Hoist", "Pants", "Jack"], correct: "Jack", def: "A jack is used for lifting a car.", pronunciation: "/dʒæk/" },
    { img: "images/33.jpeg", options: ["Belt", "Hoist", "Conveyor Belt", "Spirit Level"], correct: "Conveyor Belt", def: "A conveyor belt is a handling tool used for moving items.", pronunciation: "/kənˈveɪər bɛlt/" },
    { img: "images/34.jpeg", options: ["Stable gun", "Nail gun", "chisel", "Vise"], correct: "Vise", def: "A vise is used for securing an object firmly in place so you can work on it safely with both hands.", pronunciation: "/vaɪs/" },
    { img: "images/35.jpeg", options: ["Trowel", "Mallet", "Pipe Wrench", "Ruler"], correct: "Trowel", def: "A trowel is used for digging, scooping, smoothing, or spreading materials.", pronunciation: "/ˈtraʊəl/" },
    { img: "images/36.jpeg", options: ["Sledge Hammer", "scalpel", "Scraper", "Pipe Wrench"], correct: "Pipe Wrench", def: "A Pipe Wrench is used for turning, tightening, or loosening threaded pipes and cylindrical pipe fittings.", pronunciation: "/paɪp rɛntʃ/" },
    { img: "images/37.jpeg", options: ["Scalpel", "Nail", "Wire Stripper", "Jack"], correct: "Scalpel", def: "A scalpel is used for ultra-precise cutting, detailing, and trimming.", pronunciation: "/ˈskælpəl/" },
    { img: "images/38.jpeg", options: ["Mallet", "Hammer", "Chisel", "Clamp"], correct: "Mallet", def: "A mallet is used to deliver soft, controlled blows without damaging the work surface.", pronunciation: "/ˈmælɪt/" },
    { img: "images/39.jpeg", options: ["Pipe Cutter", "Hacksaw", "Pliers", "File"], correct: "Pipe Cutter", def: "A pipe cutter is used to make clean, precise cuts through pipes and tubing.", pronunciation: "/paɪp ˈkʌtər/" },
    { img: "images/40.jpeg", options: ["Wire Stripper", "Screwdriver", "Crimping Tool", "Utility Knife"], correct: "Wire Stripper", def: "A wire stripper is used to remove the insulation from electrical wires without damaging the metal core.", pronunciation: "/ˈwaɪər ˈstrɪpər/" },
    { img: "images/41.jpeg", options: ["Shovel", "Rake", "Hoe", "Spade"], correct: "Shovel", def: "A shovel is a tool primarily used for digging, lifting, and moving loose materials like soil, sand, gravel, and snow.", pronunciation: "/ˈʃʌvəl/" },
    { img: "images/42.jpeg", options: ["Wire Cutter", "Pliers", "Pincer", "Clamp"], correct: "Pincer", def: "A pincer acts as a first-class lever used to grip, pull, or cut materials.", pronunciation: "/ˈpɪnsər/" },
    { img: "images/43.jpeg", options: ["Handsaw", "Jigsaw", "Nibbler", "Coping Saw"], correct: "Jigsaw", def: "A jigsaw is most commonly used for cutting out shapes and rounding corners.", pronunciation: "/ˈdʒɪɡsɔː/" },
    { img: "images/44.jpeg", options: ["Screed", "Cement Mixer", "Wheelbarrow", "Concrete Pump"], correct: "Concrete Pump", def: "A concrete pump transfers liquid concrete from a mixing truck to the exact location where it is needed.", pronunciation: "/ˈkɒŋkriːt pʌmp/" },
    { img: "images/45.jpeg", options: ["Screed", "Level", "Trowel", "Float"], correct: "Screed", def: "A screed is used for creating a smooth, perfectly level base.", pronunciation: "/skriːd/" },
    { img: "images/46.jpeg", options: ["Clamp Meter", "Voltage Tester", "Multimeter", "Oscilloscope"], correct: "Multimeter", def: "A multimeter is used for diagnosing, troubleshooting, and measuring parameters in electrical circuits.", pronunciation: "/ˌmʌltiˈmiːtər/" },
    { img: "images/47.jpeg", options: ["Air Pump", "Caulking Gun", "Oil Can", "Grease Gun"], correct: "Grease Gun", def: "A grease gun is used to inject lubricant into hard-to-reach moving parts such as bearings, joints, and gears.", pronunciation: "/ɡriːs ɡʌn/" },
    { img: "images/48.jpeg", options: ["Ruler", "Caliper", "Feeler Gauge", "Micrometer"], correct: "Feeler Gauge", def: "A feeler gauge is a precision tool used to measure and verify the exact size of small gaps or clearances between two surfaces.", pronunciation: "/ˈfiːlər ɡeɪdʒ/" },
    { img: "images/49.jpeg", options: ["Socket Wrench", "Pipe Wrench", "Strap Wrench", "Oil Filter Wrench"], correct: "Oil Filter Wrench", def: "An oil filter wrench is used to loosen and remove tight spin-on oil filters during an oil change.", pronunciation: "/ɔɪl ˈfɪltər rɛntʃ/" },
    { img: "images/50.jpeg", options: ["Heat Gun", "Blow Torch", "Hair Dryer", "Hot Air Station"], correct: "Heat Gun", def: "A heat gun is used for stripping paint, shrinking materials, bending plastics, and loosening adhesives.", pronunciation: "/hiːt ɡʌn/" }
];

let currentIdx = 0;
let timeLeft = 30;
let timerInterval;

function checkPasscode() {
    const correctCode = "12345";
    const entered = document.getElementById("passcode-input").value;

    if (entered === correctCode) {
        document.getElementById("passcode-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "block";
    } else {
        alert("Incorrect passcode. Try again.");
    }
}



function startApp() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    const q = quizData[currentIdx];
    document.getElementById('tool-image').src = q.img;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt === q.correct, q.def, q.correct, q.pronunciation);
        container.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(isCorrect, def, correctName, pronun) {
    clearInterval(timerInterval);
    speakAnswer(correctName);

    const modal = document.getElementById('feedback-modal');
    // If 'pronun' is undefined/missing, it simply leaves that part blank instead of breaking
    let displayPronun = pronun ? `<br><span style="color: #FFD700; font-size: 0.9em; font-style: italic;">${pronun}</span>` : "";
    
    document.getElementById('modal-title').innerHTML = (isCorrect ? "Correct!" : "Incorrect.") + displayPronun;
    document.getElementById('modal-text').innerText = def;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('feedback-modal').style.display = 'none';
    nextQuestion();
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < quizData.length) {
        loadQuestion();
    } else {
        alert("Well done! You've finished the quiz.");
        location.reload(); 
    }
}

function speakAnswer(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.9;     
    window.speechSynthesis.speak(utterance);
}