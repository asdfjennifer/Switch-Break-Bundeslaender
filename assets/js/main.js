// let BadenWürttemberg = case 1;
// let case2 = "Bayern";
// let 3 = "Berlin";
// let 4 = "Brandenburg";
// let 5 = "Bremen";
// let 6 = "Hamburg";
// let 7 = "Hessen";
// let 8 = "Mecklenburg-Vorpommern";
// let 9 = "Niedersachsen";
// let 10 = "Nordrhein-Westfalen";
// let 11 = "Rheinland-Pfalz";
// let 12 = "Saarland";
// let 13 = "Sachsen";
// let 14 = "Sachsen-Anhalt";
// let 15 = "Schleswig-Holstein";
// let 16 = "Thüringen";

let input = document.getElementById("bundeslandInfo");

function check() {
    // console.log(input.value);
    // console.log(input);
    switch(input.value) {
    case "Baden-Württemberg":
        console.log("Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt");
        break;
    case "Bayern":
        console.log("Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt");
        break;
    case "Berlin":
        console.log("Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt");
        break;
    case "Brandenburg":
        console.log("Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt        ");
        break;
    case "Bremen":
        console.log("Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt");
        break;
    case "Hamburg":
        console.log("Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt");
        break;
    case "Hessen":
        console.log("Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt        ");
        break;
    case "Mecklenburg-Vorpommern":
        console.log("Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt");
        break;
    case "Niedersachsen":
        console.log("Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt");
        break;
    case "Nordrhein-Westfalen":
        console.log("Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt");
        break;
    case "Rheinland-Pfalz":
        console.log("Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt");
        break;
    case "Saarland":
        console.log("Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt");
        break;
    case "Sachsen":
        console.log("Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt");
        break;
    case "Sachsen-Anhalt":
        console.log("Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt");
        break;
    case "Schleswig-Holstein":
        console.log("Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt");
            break;
    case "Thüringen":
        console.log("Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt");
        break;
    default:
        console.log("Ein solches Bundesland gibt es in Deutschland nicht.");
    }
}

