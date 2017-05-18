//How many of everything you have to start out with
let sites = 0,
  clicks = 0,
  cursor = 0,
  grandma = 0,
  farm = 0,
  mine = 0,
  factory = 0,
  bank = 0,
  temple = 0,
  tower = 0;
//How much everything costs to start with
let clickCost = 50,
  cursorCost = 15,
  grandmaCost = 100,
  farmCost = 1100,
  mineCost = 12000,
  factoryCost = 130000,
  bankCost = 1200000,
  templeCost = 20000000,
  towerCost = 330000000;
//How much CPS you get (it starts as 0 but gets higher every time you buy one)
let click = 1,
  cursors = 0,
  grandmas = 0,
  farms = 0,
  mines = 0,
  factories = 0,
  banks = 0,
  temples = 0,
  towers = 0;
//Every time you click, you get X number of sites
document.querySelector(".mainCookie").addEventListener("click", function() {
  sites = sites + click;
  document.getElementById("sites").innerHTML = sites + " sites";
});
//Every time you buy a power click your clickers and cursor give twice as many sites
document.querySelector(".powerClick").addEventListener("click", function() {
  if (sites - clickCost >= 0) {
    sites = sites - 50;
    click = click * 2;
    clicks = clicks + 1;
    clickCost = clickCost * 5;
    cursors = cursors * 2;
    document.getElementById("pp").innerHTML = "You have " + clicks + " Power Clicks | Cost: " + clickCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Power Click. Now you have " + clicks + ".";
  } else {
    sites = sites;
    clicks = clicks;
    clickCost = clickCost;
  }
});

let clickerRun = function() {
  sites = sites + cursors;
  sites = Math.ceil(sites * 10) / 10;
  document.getElementById("sites").innerHTML = sites + " sites";
};

document.querySelector(".clicker").addEventListener("click", function() {
  if (sites - cursorCost >= 0) {
    console.log("clicker is equal to " + cursorCost);
    sites = sites - cursorCost;
    cursorCost = Math.round(cursorCost * 1.5);
    cursors = cursors + 0.1;
    setInterval(clickerRun, 1000);
    cursor = cursor + 1;
    document.getElementById("pc").innerHTML = "You have " + cursor + " Clickers | Cost: " + cursorCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Clicker. Now you have " + cursor + ".";
  }
});
//same thing again with diff settings
let grandmaRun = function() {
    sites = sites + grandmas;
    document.getElementById("sites").innerHTML = sites + " sites"
  }
  //again
document.querySelector(".grandma").addEventListener("click", function() {
  if (sites - grandmaCost >= 0) {
    sites = sites - grandmaCost;
    grandmaCost = Math.round(grandmaCost * 1.5);
    grandmas = grandmas + 1;
    setInterval(grandmaRun, 1000);
    grandma = grandma + 1;
    document.getElementById("pg").innerHTML = "You have " + grandma + " Grandmas | Cost: " + grandmaCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Grandma. Now you have " + grandma + ".";
  }
});
//you get it
let farmRun = function() {
    sites = sites + farms;
    document.getElementById("sites").innerHTML = sites + " sites"
  }
  //again SAME
document.querySelector(".farm").addEventListener("click", function() {
  if (sites - farmCost >= 0) {
    sites = sites - farmCost;
    farmCost = Math.round(farmCost * 1.5);
    farms = farms + 3;
    setInterval(farmRun, 1000);
    farm = farm + 1;
    document.getElementById("pf").innerHTML = "You have " + farm + " Farms | Cost: " + farmCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Farm. Now you have " + farm + ".";
  }
});

let mineRun = function() {
  sites = sites + mines;
  document.getElementById("sites").innerHTML = sites + " sites"
}

document.querySelector(".mine").addEventListener("click", function() {
  if (sites - mineCost >= 0) {
    sites = sites - mineCost;
    mineCost = Math.round(mineCost * 1.5);
    mines = mines + 10;
    setInterval(mineRun, 1000);
    mine = mine + 1;
    document.getElementById("pm").innerHTML = "You have " + mine + " Mines | Cost: " + mineCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Mine. Now you have " + mine + ".";
  }
});

let factoryRun = function() {
  sites = sites + factories;
  document.getElementById("sites").innerHTML = sites + " sites"
}

document.querySelector(".factory").addEventListener("click", function() {
  if (sites - factoryCost >= 0) {
    sites = sites - factoryCost;
    factoryCost = Math.round(factoryCost * 1.5);
    factories = factories + 50;
    setInterval(factoryRun, 1000);
    factory = factory + 1;
    document.getElementById("fp").innerHTML = "You have " + factory + " Factories | Cost: " + factoryCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Factory. Now you have " + factory + ".";
  }
});

let bankRun = function() {
  sites = sites + banks;
  document.getElementById("sites").innerHTML = sites + " sites"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (sites - bankCost >= 0) {
    sites = sites - bankCost;
    bankCost = Math.round(bankCost * 1.5);
    banks = banks + 100;
    setInterval(bankRun, 1000);
    bank = bank + 1;
    document.getElementById("pb").innerHTML = "You have " + bank + " Banks | Cost: " + bankCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Bank. Now you have " + bank + ".";
  }
});

let templeRun = function() {
  sites = sites + temples;
  document.getElementById("sites").innerHTML = sites + " sites"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (sites - templeCost >= 0) {
    sites = sites - templeCost;
    templeCost = Math.round(templeCost * 1.5);
    temples = temples + 500;
    setInterval(templeRun, 1000);
    temple = temple + 1;
    document.getElementById("pt").innerHTML = "You have " + temple + " Temples | Cost: " + templeCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Temple. Now you have " + temple + ".";
  }
});

let towerRun = function() {
  sites = sites + towers;
  document.getElementById("sites").innerHTML = sites + " sites"
}

document.querySelector(".tower").addEventListener("click", function() {
  if (sites - towerCost >= 0) {
    sites = sites - towerCost;
    towerCost = Math.round(towerCost * 1.5);
    towers = towers + 1000;
    setInterval(towerRun, 1000);
    tower = tower + 1;
    document.getElementById("pw").innerHTML = "You have " + tower + " Towers | Cost: " + towerCost + " sites";
    document.getElementById("messages").innerHTML = "You bought 1 Wizard Tower. Now you have " + tower + ".";
  }
});