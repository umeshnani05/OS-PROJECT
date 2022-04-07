function sub(){
var vehicles=[];
vehicles.push({id:1,priority:2,cp:3,fuel_type:"P",vid:"Ap12"});
vehicles.push({id:2,priority:1,cp:4,fuel_type:"D",vid:"Ts1000"});
vehicles.push({id:3,priority:3,cp:9,fuel_type:"P",vid:"JK432"});
vehicles.push({id:4,priority:3,cp:5,fuel_type:"D",vid:"UP1234"});
vehicles.push({id:5,priority:2,cp:12,fuel_type:"P",vid:"TM145"});
var n = vehicles.length;
var petrol=[];
var diesel =[];
for(var i=0;i<n;i++){
     if(vehicles[i].fuel_type=="P"){
         petrol.push(vehicles[i]);
     }
     else{
         diesel.push(vehicles[i]);
     }
}
function comp(x,y){
   if(x.priority<y.priority){return -1;}
   if(x.priority==y.priority && x.id<y.id){return -1;}
   return 1;
}
var d = new Date();
var time = new Date().getTime();
console.log(time);
petrol.sort(comp);
diesel.sort(comp);
var m1 = petrol.length;
var m2 = diesel.length;
var x = 10000;
var y=time;
var avg_wt_pet=0;
for(var i=0;i<m1;i++){
    petrol[i].st = y;
    y+=(petrol[i].cp*x);
    petrol[i].ct = y;
    petrol[i].tat = petrol[i].ct - time;
    petrol[i].wt = petrol[i].tat - (petrol[i].cp*x);
    let h = new Date(petrol[i].st).getHours();
    let m = new Date(petrol[i].st).getMinutes();
     let s = new Date(petrol[i].st).getSeconds();
    petrol[i].st1 = h + ":" + m + ":" + s;
   
     h = new Date(petrol[i].ct).getHours();
     m = new  Date(petrol[i].ct).getMinutes();
      s = new Date(petrol[i].ct).getSeconds();
    petrol[i].ct1 = h + ":" + m + ":" + s;
    avg_wt_pet += (petrol[i].wt);
    

}
var avg_wt_die=0;
y = time;
for(var i=0;i<m2;i++){
    diesel[i].st = y;
   y+=(diesel[i].cp*x);
   diesel[i].ct = y;
   diesel[i].tat = diesel[i].ct  - time;
   diesel[i].wt = diesel[i].tat - (diesel[i].cp*x);
 
   let h = new Date(diesel[i].st).getHours();
   let m = new Date(diesel[i].st).getMinutes();
    let s = new Date(diesel[i].st).getSeconds();
   diesel[i].st1 = h + ":" + m + ":" + s;

    h = new Date(diesel[i].ct).getHours();
    m = new  Date(diesel[i].ct).getMinutes();
     s = new Date(diesel[i].ct).getSeconds();
   diesel[i].ct1 = h + ":" + m + ":" + s;
   avg_wt_die += (diesel[i].wt);

}
if(m2){
avg_wt_die /= m2;}
if(m1){
avg_wt_pet /=m1;
}
avg_wt_die /= 1000;
avg_wt_pet /= 1000;
console.log(petrol,diesel);
document.getElementById("ali").append(" Petrol Station : ");
document.getElementById("ali").innerHTML+="<br><br>";
for(var i=0;i<m1;i++){
    document.getElementById("ali").append("  Estimated fuel filing time period for vehicle "+petrol[i].vid + " is " + petrol[i].st1+" - "+petrol[i].ct1 );
    document.getElementById("ali").innerHTML+="<br>";
}
document.getElementById("ali").append("Avg waiting time : " + avg_wt_pet + " seconds ");
document.getElementById("ali").innerHTML+="<br><br>";
document.getElementById("ali").append(" Diesel Station : ");
document.getElementById("ali").innerHTML+="<br><br>";
for(var i=0;i<m2;i++){
    document.getElementById("ali").append(" Estimated fuel filing time period for vehicle "+diesel[i].vid + " is " + diesel[i].st1+" - "+diesel[i].ct1 );
    document.getElementById("ali").innerHTML+="<br>";
}
document.getElementById("ali").append("Avg waiting time : " + avg_wt_die + " seconds");



}