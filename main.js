


function createDay(){
    var text=document.getElementById('oneText').value;
    const btn = document.createElement('button');
    btn.innerText=text;
    btn.id="dayButton"+days;
    btn.setAttribute( "onClick", "javascript: switchDay(this);" );
    document.getElementById("Workouts").appendChild(btn);
    return btn;
}
function switchDay(btn){
    currentday=parseInt(btn.id.charAt(btn.id.length-1))
    document.getElementById("dayName").innerHTML = btn.innerText;
    document.getElementById("titleAdd").innerHTML = "Add a new Workout";
    document.getElementById("sWD").style.display = 'block'; 
    document.getElementById("Workouts").style.display = 'none'; 
    document.getElementById("backBtn").style.display = 'block'; 
    document.getElementById("addButton2").style.display = 'block'; 
    document.getElementById("addButton").style.display = 'none'; 
    document.getElementById("workoutDay"+currentday).style.display = 'block'; 
}
function backBtn(){
    document.getElementById("sWD").style.display = 'none'; 
    document.getElementById("titleAdd").innerHTML = "Add a Workout Day"
    document.getElementById("Workouts").style.display = 'block'; 
    document.getElementById("backBtn").style.display = 'none'; 
    document.getElementById("addButton").style.display = 'block'; 
    document.getElementById("addButton2").style.display = 'none';
    document.getElementById("addButton3").style.display = 'none';
    document.getElementById("workoutDay"+currentday).style.display = 'none'; 
    currentday=0; 
}

function addToWorkout(){
    addAmountDisplay();
    let counter=0;
    var text=document.getElementById('oneText').value;
    var li=document.createElement("li");
    var currentWorkoutDay= "workoutDay"+currentday;
    for (let i=0; i < document.getElementById(currentWorkoutDay).getElementsByTagName('li').length; i++ ){
        counter++;
    }
    currentworkoutid=currentWorkoutDay+counter;
    li.setAttribute("id", currentworkoutid);
    li.appendChild(document.createTextNode(text));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(''));
    
    document.getElementById("workoutDay"+currentday).appendChild(li);
    
}
function createUL(){
    var ul= document.createElement("ul");
    ul.id="workoutDay"+days;
    document.getElementById("sWD").appendChild(ul);
}

function addAmountDisplay(){
    document.getElementById("sWD").style.display = 'none'; 
    document.getElementById("titleAdd").innerHTML = "Length of Workout (Sets,reps,minutes,etc.)"
    document.getElementById("Workouts").style.display = 'none'; 
    document.getElementById("addButton3").style.display = 'block'; 
    document.getElementById("addButton2").style.display = 'none';  
    document.getElementById("backBtn").style.display = 'none'; 
    
    
}
function addAmount(){
    var li= document.getElementById(currentworkoutid);
    var textnodes=li.childNodes;
    textnodes[2].textContent=document.getElementById('oneText').value;
    addAmountDisplayBack();
}
function addAmountDisplayBack(){
    
    document.getElementById("titleAdd").innerHTML = "Add a new Workout";
    document.getElementById("sWD").style.display = 'block'; 
    document.getElementById("Workouts").style.display = 'none'; 
    document.getElementById("backBtn").style.display = 'block'; 
    document.getElementById("addButton2").style.display = 'block'; 
    document.getElementById("addButton3").style.display = 'none'; 
   
    
}