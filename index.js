// //----------------------Lekce 3 Základy JavaScriptu------------------

// //--------------------Výplata--------------------------------
// document.body.innerHTML += 'Měsíční příjem je: ' +(265*7*21)+ ' cze <br>';
// document.body.innerHTML += 'dan je: ' + Math.floor(((265*7*21)*0.4)*0.15) + ' cze <br>';

// //---------------------Délka filmu------------------------
// document.body.innerHTML += 'Film Pán prstenů trva: ' + Math.floor(223 / 60) + ' hod. a ' + 223 % 60 + ' min <br>';

// //----------------------E-mail--------------------
// document.body.innerHTML += 'Franta' + '.' + 'Dobrota' + '@mujmail.com <br>';

// //------------------Náhodná čísla--------------------
// document.body.innerHTML += Math.floor(Math.random()*100) + '<br>';


// //----------------------------Lekce 4 Proměnné --------------------------------

// //----------------------------Převod měny--------------------------
// const wageInEur = 20;
// const rate = 26.58;
// const wageInCzk = Math.round(wageInEur*rate);
// document.body.innerHTML += '<h1>Mzda v korunách: ' + wageInCzk + ' Kč</h1> <br>';

// //--------------------------------Ultramaraton-------------------------------------
// const start = 15;
// const delka = 10;
// const konec = (start + delka)%24;
// document.body.innerHTML += '<h1>Závod pro našeho běžce skončí ve: ' + konec + ' h.</h1> <br>';


// //----------------------Očkování------------------------------------------------------
// // const jmeno = String(prompt('Zadejte Vaše přijmene a jmeno:'));
// // const vek = Number(prompt('Zadejte Vaš věk:'));
// // document.body.innerHTML += jmeno + ', věk: ' + vek + '<br>';

// //--------------------Výplata jako stránka--------------------------------------------
// // const sazba = Number(prompt('Prosim Vas uvedit vasu hodinovou sazbu v korunách:'));
// // const hodin = Number(prompt('Prosim Vas uvedit kolik hodin pracujete denne:'));
// // const days = Number(prompt('Prosim Vas uvedit kolik dni pracujete mesicne:'));
// // const total = sazba*hodin*days;
// // document.body.innerHTML += '<p>Hruba mzda za mesec je: ' + total + ' Kč </p>';


//---------------------Lekce 5 Podmínky--------------------------------------------------------

//----------------------Přihlášení-------------------------------------
// const jmeno = String(prompt('Zadejte Vaše  uživatelské jméno:'));
// if (jmeno === 'krakonos') {
//     alert('uživatelské jméno je správně');
//     const password = String(prompt('Zadejte Vaše heslo'));
//     if( password === 'sojka'){
//         alert ('zadál jste správné heslo')
//     } else {
//         alert('zadál jste špatné heslo')
//     }
// } else {
//     alert ('jméno je nesprávné');
// }

// //-------------------------Cena vstupenky-----------------
// // const vek = Number(prompt('Zadejte Vaš věk:'));
// // const plnaCena = 12;
// // let cena;
// // if (vek < 6) {
// //     cena = 0;
// // }
// // else if (vek > 6 && vek < 26) {
// //     cena = Math.round(plnaCena*0.65);
// // }
// // else if (vek > 27 && vek < 64) {
// //     cena = plnaCena;
// // }
// // else {
// //     cena = Math.round(plnaCena/2);
// // }
// // document.body.innerHTML += `<p> cena na vstupenku bude ${cena} eur.</p>`;


// //---------------------------Lekce 6 Objekty a pole--------------------------------

// //---------------------------Knihovna--------------------------------
// // Definice objektu pro knihu
// const book1 = {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     pageCount: 224,
//     publishedYear: 1951,
//     genre: "Fiction",
//     available: true,
//     ratings: [4.5, 5, 3.8],
//     details: {
//         language: "English",
//         hardcover: false
//     }
// };

// // Vytvoření další knihy s odlišnými hodnotami
// const book2 = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pageCount: 281,
//     publishedYear: 1960,
//     genre: "Classics",
//     available: false,
//     ratings: [4.8, 4.9, 5],
//     details: {
//         language: "English",
//         hardcover: true      //tvrdý obal
//     }
// };

// //--------------------------------------------Realitka------------------------------------

// const apartment = {
//     type: 'rent',
//     disposition: '3+1',
//     area: {
//       floorage: 100,
//       balcony: 2,
//       units: 'sqm',
//     },
//     city: 'Prague',
//     district: 'Old Town',
//     price: {
//       rent: 28000,
//       fees: {
//         water: 1000,
//         energy: 2500,
//         services: 560,
//       },
//       currency: 'czk',
//     },
//     ownership: 'personal',
//     condition: 'renovated',
//     status: 'free',
//     floor: 3,
//   };

// document.body.innerHTML += '<p>Dispozice bytu je: ' + apartment.disposition + ' </p> <br>';
// document.body.innerHTML += '<p>Cena cisteho majmu je: ' + apartment.price.rent + apartment.price.currency + ' </p> <br>';
// document.body.innerHTML += '<p>Vemer bytu je: ' + apartment.area.floorage + apartment.area.units + apartment.area.balcony + apartment.area.units +' </p> <br>';
// const city = apartment.city;
// const district = apartment.district;
// document.body.innerHTML += '<p>Mesto je: ' + city + ' lokalita je ' + district + ' </p> <br>';

// apartment.status='taken';  //Změnte stav inzerátu z 'free' na 'taken'.
// document.body.innerHTML += '<p>' + apartment.status + ' </p>';



// //------------------------------------------------Pole v divadle--------------------------------
// // // Pole celých čísel (počty diváků na představeních)
//  const pocetDivaku = [150, 200, 180, 250, 220];

// // // Pole desetinných čísel (zaplněnost divadla v procentech)
// const zaplnenostDivadla = [0.75, 0.85, 0.80, 0.90, 0.88];

// // // Pole řetězců (seznam názvů divadelních představení)
// const hry = ["Hamlet", "Romeo a Julie", "Othello", "Macbeth", "Královna Mab"];

// // // Uložení druhé položky ze seznamu do proměnné
// const druhaHra = hry[1];

// // // Pole objektů (hry a jejich hodnocení)
// const hodnoceniHer = [
//     { nazev: "Hamlet", casopis: "Divadelní recenze", hodnoceni: 9 },
//     { nazev: "Romeo a Julie", casopis: "Umělecký svět", hodnoceni: 8.5 },
//     { nazev: "Othello", casopis: "Kultura a umění", hodnoceni: 9.2 },
//     { nazev: "Macbeth", casopis: "Divadelní týdeník", hodnoceni: 8 },
//     { nazev: "Královna Mab", casopis: "Umění a divadlo", hodnoceni: 8.8 }
// ];



// //---------------------------------- Lekce 7 Cykly-------------------------------------

// //-------------------------------------------Seznam hodnocení-----------------------------
//  const hodnoceni = [7, 9, 6, 7, 9, 8];

//  for (const h of hodnoceni) {
//     document.body.innerHTML += h + '<br>';
//  }


// for (const h of hodnoceni) {
//     document.body.innerHTML += h + '/10 <br>';
// }

// //---------------------Výdaje---------------------------------

// const vydaje = [
//     { jmeno: 'Petr', zbozi: 'Prací prášek', utrata: 240 },
//     { jmeno: 'Ondra', zbozi: 'Savo', utrata: 80 },
//     { jmeno: 'Pavla', zbozi: 'Toaleťák', utrata: 65 },
//     { jmeno: 'Zuzka', zbozi: 'Mýdlo', utrata: 50 },
//     { jmeno: 'Pavla', zbozi: 'Závěs do koupelny', utrata: 350 },
//     { jmeno: 'Libor', zbozi: 'Pivka na kolaudačku', utrata: 124 },
//     { jmeno: 'Petr', zbozi: 'Pytle na odpadky', utrata: 75 },
//     { jmeno: 'Míša', zbozi: 'Utěrky na nádobí', utrata: 130 },
//     { jmeno: 'Ondra', zbozi: 'Toaleťák', utrata: 120 },
//     { jmeno: 'Míša', zbozi: 'Pečící papír', utrata: 30 },
//     { jmeno: 'Zuzka', zbozi: 'Savo', utrata: 80 },
//     { jmeno: 'Petr', zbozi: 'Tapeta na záchod', utrata: 315 },
//     { jmeno: 'Ondra', zbozi: 'Toaleťák', utrata: 6 },
// ];

//  for (const jmeno of vydaje){
//      document.body.innerHTML += jmeno.jmeno + '<br>';
//  };
// for (const petr of vydaje){
//      if (petr.jmeno === 'Petr') {
//         //document.body.innerHTML += petr + '<br>';
//         document.body.innerHTML += JSON.stringify(petr) + '<br>'; // převede objekt petr na řetězec formátu JSON. (JavaScript Object Notation)
//         document.body.innerHTML += `Jméno: ${petr.jmeno}, Zboží: ${petr.zbozi}, Útrata: ${petr.utrata}<br>`; // Řetězec šablony
//      }
// }
