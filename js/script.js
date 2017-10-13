"use strict";

function Device(name, brand, power, energyEfficiencyClass){
   this._name = name;
   this._brand = brand;
   this._power = power;
   this._energyEfficiencyClass = energyEfficiencyClass;
   this._state = false;    
}
Device.prototype.getName = function () {
   return this._name;
};
Device.prototype.setName = function (name) {
   this._name = name;
};
Device.prototype.getBrand = function () {
   return this._brand;
};
Device.prototype.setBrand = function (brand) {
   this._brand = brand;
};
Device.prototype.getPower = function () {
   return this._power;
};
Device.prototype.setPower = function (power) {
   this._power = power;
};
Device.prototype.getEnergyEfficiencyClass = function () {
   return this._energyEfficiencyClass;
};
Device.prototype.setEnergyEfficiencyClass = function (energyEfficiencyClass) {
   this._energyEfficiencyClass = energyEfficiencyClass;
};
Device.prototype.getState = function () {
   return this._state;
};
Device.prototype.switchOn = function () {
   if ($('#switch').prop('checked')){
      this._state = true;
   }
};
Device.prototype.switchOff = function () {
   if (!($('#switch').prop('checked'))){
      this._state = false;
   }
};


function Fridge(name, brand, power, energyEfficiencyClass, capacity, numberOfCameras, coolingSystem) {
   Device.call(this, name, brand, power, energyEfficiencyClass); 
   this._capacity = capacity;
   this._numberOfCameras = numberOfCameras;
   this._coolingSystem = coolingSystem;
}
// Наследование родительского прототипа
Fridge.prototype = Object.create(Device.prototype); 
// Восстановления свойства constructor
Fridge.prototype.constructor = Fridge;
Fridge.prototype.getCapacity = function () {
   return this._capacity;
};
Fridge.prototype.setCapacity = function (capacity) {
   this._capacity = capacity;
};
Fridge.prototype.getNumberOfCameras = function () {
   return this._numberOfCameras;
};
Fridge.prototype.setNumberOfCameras = function (numberOfCameras) {
   this._numberOfCameras = numberOfCameras;
};
Fridge.prototype.getCoolingSystem = function () {
   return this._coolingSystem;
};
Fridge.prototype.setCoolingSystem = function (coolingSystem) {
   this._coolingSystem = coolingSystem;
};

var fridge = new Fridge("Fridge", "Liebherr", 4, "AAA+", 100, 2, "No Frost");
var fridge2 = new Fridge("Fridge", "Samsung", 2.5, "AA+", 80, 1, "No Frost");
console.log(fridge.getState()); 



function WashingMachine(name, brand, power, energyEfficiencyClass, typeWM, maxLoading, enginesType) {
   Device.call(this, name, brand, power, energyEfficiencyClass); 
   this._typeWM = typeWM;
   this._maxLoading = maxLoading;
   this._enginesType = enginesType;
}
// Наследование родительского прототипа
WashingMachine.prototype = Object.create(Device.prototype); 
// Восстановления свойства constructor
WashingMachine.prototype.constructor = WashingMachine;
WashingMachine.prototype.getTypeWM = function () {
   return this._typeWM;
};
WashingMachine.prototype.setTypeWM = function (typeWM) {
   this._typeWM = typeWM;
};
WashingMachine.prototype.getMaxLoading = function () {
   return this._maxLoading;
};
WashingMachine.prototype.setMaxLoading = function (maxLoading) {
   this._maxLoading = maxLoading;
};
WashingMachine.prototype.getEnginesType = function () {
   return this._enginesType;
};
WashingMachine.prototype.setEnginesType = function (enginesType) {
   this._enginesType = enginesType;
};

var washingMachine = new WashingMachine("Washing Machine", "Indesit", 1, "A+", "Frontal", 7, "Inverter Direct Drive");

function TV(name, brand, power, energyEfficiencyClass, typeTV, diagonal, resolution) {
   Device.call(this, name, brand, power, energyEfficiencyClass); 
   this._typeTV = typeTV;
   this._diagonal = diagonal;
   this._resolution = resolution;
}
// Наследование родительского прототипа
TV.prototype = Object.create(Device.prototype); 
// Восстановления свойства constructor
TV.prototype.constructor = TV;
TV.prototype.getTypeTV = function () {
   return this._typeTV;
};
TV.prototype.setTypeTV = function (typeTV) {
   this._typeWM = typeWM;
};
TV.prototype.getDiagonal = function () {
   return this._diagonal;
};
TV.prototype.setDiagonal = function (diagonal) {
   this._diagonal = diagonal;
};
TV.prototype.getResolution = function () {
   return this._resolution;
};
TV.prototype.setResolution = function (resolution) {
   this._resolution = resolution;
};

var tv1 = new TV("TV", "Samsung", 0.2, "AAA+", "LED", 55, "3840x2160 Ultra HD");



function SmartHome() {
   
   this._devices = [];
}
SmartHome.prototype.getDevices = function () {
   return this._devices;
};

SmartHome.prototype.addDevice = function (dev) {
   this._devices.push(dev);
};

var sh = new SmartHome();
sh.addDevice(fridge);
sh.addDevice(washingMachine);
sh.addDevice(tv1);
//sh.addDevice(fridge2);

console.log(sh.getDevices());

/*SmartHome.prototype.delDevice = function (dev) {
   for (var key in this._devices) {
      if (this._devices[key] === dev) {
         this._devices.splice(key, 1); 
      }
   }
   return this._devices;
};*/

SmartHome.prototype.delDevice = function (numbDev) {
   this._devices.splice(numbDev, 1); 
};


console.log(sh.getDevices().length);
console.log("My devices:");
console.log(sh.getDevices());

var formSH = document.getElementById("SH");
var arrDivMed = [];
function createSmartHome() {
   if ((sh.getDevices().length) !== 0){
      //console.log(sh.getDevices().length);
      for (var j = 0; j < sh.getDevices().length; j++){
         //console.log(sh.getDevices()[key]);
         var divMed = document.createElement("div");
         divMed.className = "media";
         var divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         var divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         var a = document.createElement("a");
         a.href = "#";
         var img = document.createElement("img");
         img.className = "media-object";
         var h4 = document.createElement("h4");
         h4.className = "media-heading";
         var p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[j].getName();
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[j].getBrand() + "<br>Power: " + sh.getDevices()[j].getPower() +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[j].getEnergyEfficiencyClass();

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);

         if (sh.getDevices()[j].getName() === "Fridge"){
            img.src = "img/fridge.jpg";
            img.alt = "fridge";
            p.innerHTML += "<br>Capacity: " + sh.getDevices()[j].getCapacity() + " l" + "<br>Number of cameras: " + 
            sh.getDevices()[j].getNumberOfCameras() + "<br>Cooling system: " + sh.getDevices()[j].getCoolingSystem();
            
         } else if (sh.getDevices()[j].getName() === "Washing Machine"){
            img.src = "img/wm.jpg";
            img.alt = "washing machine";
            p.innerHTML += "<br>Type: " + sh.getDevices()[j].getTypeWM() + "<br>Max loading: " + sh.getDevices()[j].getMaxLoading() + " kg" +
            "<br>Engines type: " + sh.getDevices()[j].getEnginesType();
            
         } else if (sh.getDevices()[j].getName() === "TV"){
            img.src = "img/tv.jpg";
            img.alt = "tv";
            p.innerHTML += "<br>Type: " + sh.getDevices()[j].getTypeTV() + "<br>Diagonal: " + 
            sh.getDevices()[j].getDiagonal() + '"' + "<br>Resolution: " + sh.getDevices()[j].getResolution();
            
         }
      }
   }
}

var elemDivDev = document.getElementById("formGrDiv");
var elemsDev = formSH.getElementsByClassName("media");

createSmartHome();
      
function fillDevice() {          
   for (var i = 0; i < sh.getDevices().length; i++) {
      elemsDev[i].onclick = getStep(i);
   }
   
}


function getStep(i) {
   return function () {
      $('#switch').bootstrapToggle("enable");
      addBut.disabled = true;
      delBut.disabled = false;
      document.getElementById("name").value = sh.getDevices()[i].getName();
      document.getElementById("brand").value = sh.getDevices()[i].getBrand();
      document.getElementById("power").value = sh.getDevices()[i].getPower();
      document.getElementById("energyEfficiencyClass").value = sh.getDevices()[i].getEnergyEfficiencyClass();

      var nameDev = elemsDev[i].getElementsByClassName("media-heading");
      if (nameDev[0].innerHTML == "Fridge"){
         
            document.getElementById("labDesc1").innerHTML = "Capacity";
            document.getElementById("labDesc2").innerHTML = "Number of cameras";
            document.getElementById("labDesc3").innerHTML = "Cooling system";

            document.getElementById("desc1").value = sh.getDevices()[i].getCapacity();
            document.getElementById("desc2").value = sh.getDevices()[i].getNumberOfCameras();
            document.getElementById("desc3").value = sh.getDevices()[i].getCoolingSystem();

      } else if (nameDev[0].innerHTML == "Washing Machine"){

            document.getElementById("labDesc1").innerHTML = "Type";
            document.getElementById("labDesc2").innerHTML = "Max loading";
            document.getElementById("labDesc3").innerHTML = "Engines type";

            document.getElementById("desc1").value = sh.getDevices()[i].getTypeWM();
            document.getElementById("desc2").value = sh.getDevices()[i].getMaxLoading();
            document.getElementById("desc3").value = sh.getDevices()[i].getEnginesType();
        
      } else if (nameDev[0].innerHTML == "TV"){

            document.getElementById("labDesc1").innerHTML = "Type";
            document.getElementById("labDesc2").innerHTML = "Diagonal";
            document.getElementById("labDesc3").innerHTML = "Resolution";

            document.getElementById("desc1").value = sh.getDevices()[i].getTypeTV();
            document.getElementById("desc2").value = sh.getDevices()[i].getDiagonal();
            document.getElementById("desc3").value = sh.getDevices()[i].getResolution();

      } 
   }
   
}

console.log(getStep());

fillDevice();

var frDev1 = document.getElementById("addDevice1");
var frDev2 = document.getElementById("addDevice2");
var frDev3 = document.getElementById("addDevice3");
console.log(frDev1);
console.log(frDev2);
console.log(frDev3);




function chooseAddForm(){
   var elemsInput = document.getElementsByTagName("input");
      

      function cleanInput(){
         for (var k = 0;k < elemsInput.length-1; k++) {
            elemsInput[k].value = "";
         }
      }

   frDev1.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "Fridge";
      document.getElementById("labDesc1").innerHTML = "Capacity";
      document.getElementById("labDesc2").innerHTML = "Number of cameras";
      document.getElementById("labDesc3").innerHTML = "Cooling system"; 
      return false;
   } 
   frDev2.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "Washing Machine";
      document.getElementById("labDesc1").innerHTML = "Type";
      document.getElementById("labDesc2").innerHTML = "Max loading";
      document.getElementById("labDesc3").innerHTML = "Engines type";
      return false;      
   }
   frDev3.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "TV";
      document.getElementById("labDesc1").innerHTML = "Type";
      document.getElementById("labDesc2").innerHTML = "Diagonal";
      document.getElementById("labDesc3").innerHTML = "Resolution";
      return false;
   }  
}


var addBut = document.getElementById("addBut");

function addingDevice(){
   chooseAddForm();

      addBut.onclick = function (){

      if (document.getElementById("name").value == ("Fridge")){
         
         var tempDev = new Fridge("Fridge", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         var divMed = document.createElement("div");
         divMed.className = "media";
         var divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         var divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         var a = document.createElement("a");
         a.href = "#";
         var img = document.createElement("img");
         img.className = "media-object";
         var h4 = document.createElement("h4");
         h4.className = "media-heading";
         var p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].getName();
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].getBrand() + "<br>Power: " + sh.getDevices()[sh.getDevices().length-1].getPower() +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].getEnergyEfficiencyClass();

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/fridge.jpg";
         img.alt = "fridge";
         p.innerHTML += "<br>Capacity: " + sh.getDevices()[sh.getDevices().length-1].getCapacity() + " l" + "<br>Number of cameras: " + 
         sh.getDevices()[sh.getDevices().length-1].getNumberOfCameras() + "<br>Cooling system: " + sh.getDevices()[sh.getDevices().length-1].getCoolingSystem();
      
      } else if (document.getElementById("name").value == ("Washing Machine")){
         
         var tempDev = new WashingMachine("Washing Machine", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         var divMed = document.createElement("div");
         divMed.className = "media";
         var divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         var divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         var a = document.createElement("a");
         a.href = "#";
         var img = document.createElement("img");
         img.className = "media-object";
         var h4 = document.createElement("h4");
         h4.className = "media-heading";
         var p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].getName();
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].getBrand() + "<br>Power: " + sh.getDevices()[sh.getDevices().length-1].getPower() +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].getEnergyEfficiencyClass();

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/wm.jpg";
         img.alt = "washing machine";
         p.innerHTML += "<br>Type: " + sh.getDevices()[sh.getDevices().length-1].getTypeWM() + "<br>Max loading: " + sh.getDevices()[sh.getDevices().length-1].getMaxLoading() + " kg" +
         "<br>Engines type: " + sh.getDevices()[sh.getDevices().length-1].getEnginesType();
      
      } else if (document.getElementById("name").value == ("TV")){
         
         var tempDev = new TV("TV", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         var divMed = document.createElement("div");
         divMed.className = "media";
         var divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         var divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         var a = document.createElement("a");
         a.href = "#";
         var img = document.createElement("img");
         img.className = "media-object";
         var h4 = document.createElement("h4");
         h4.className = "media-heading";
         var p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].getName();
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].getBrand() + "<br>Power: " + sh.getDevices()[sh.getDevices().length-1].getPower() +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].getEnergyEfficiencyClass();

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/tv.jpg";
         img.alt = "tv";
         p.innerHTML += "<br>Type: " + sh.getDevices()[sh.getDevices().length-1].getTypeTV() + "<br>Diagonal: " + 
         sh.getDevices()[sh.getDevices().length-1].getDiagonal() + '"' + "<br>Resolution: " + sh.getDevices()[sh.getDevices().length-1].getResolution();
      
      } else alert('"You can add only "Fridge" || "Washing Machine" || "TV"');
      fillDevice();
      return false;
   } 
}

addingDevice();


var delBut = document.getElementById("deleteButton");
console.log(delBut);


/*function delDevice(){
   delBut.onclick = function(){
      for (var i = 0; i < sh.getDevices().length; i++) {
         elemsDev[i].onclick = sh.delDevice(i);
         
      }
      createSmartHome();
      fillDevice();
      return false;
   }
}

delDevice();*/