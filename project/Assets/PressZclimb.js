 #pragma strict
 
 var playerObject : GameObject;
 var message : String = "Enter through the Dharahara Tower Entrance to reach the balcony!";
 var displayMessage : boolean = false;
  
 function Update() {
     if (Input.GetKeyDown(KeyCode.X)) {
         displayMessage = false;
          }
          
 } 
 
 function OnTriggerExit(other: Collider){
 GameObject.Find("CustomPlayer").SendMessage("UpdateGCD",0.3);
 GameObject.Find("CustomPlayer").SendMessage("UpdateGCDuc",0.3);
 GameObject.Find("CustomPlayer").SendMessage("UpdateSpeedControl",0);
  if(other.tag=="Player") {
        displayMessage = false;    
     } 
 }
 
   
 function OnTriggerStay(other : Collider) {
 GameObject.Find("CustomPlayer").SendMessage("UpdateGCD",30);
 GameObject.Find("CustomPlayer").SendMessage("UpdateGCDuc",30);
 GameObject.Find("CustomPlayer").SendMessage("UpdateSpeedControl",1);
     if(other.tag=="Player") {
        displayMessage = true;    
     }  
 }
  
 function OnGUI () {
     if (displayMessage) {
         GUI.Label(new Rect(Screen.width / 2, Screen.height / 2, 200f, 200f), message);
     }
 }