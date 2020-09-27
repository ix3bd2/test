let Vraag = document.getElementsByClassName("col");
let Antwoord1 = document.getElementsByClassName("antwoord1");
let Antwoord2 = document.getElementsByClassName("antwoord2");
let Antwoord3 = document.getElementsByClassName("antwoord3");
let Antwoord4 = document.getElementsByClassName("antwoord4");
let Vorige = document.getElementsByClassName("vorige");

let Vragen = [
    {
   vraag :"Wat is 271 -123 ?",
    antwoord1 : 148,
    antwoord2 : 147,
    antwoord3 : 149,
    antwoord4 : 136,
    goedeantwoord :"A" ,


},
    {
        vraag :"Wat is 23 - 12 ?",
        antwoord1 : 10,
        antwoord2 : 12,
        antwoord3 : 14,
        antwoord4 : 11,
        goedeantwoord :"D" ,

    },
    {
        vraag :"Wat is 342 - 241 ?",
        antwoord1 : 100,
        antwoord2 : 102,
        antwoord3 : 101,
        antwoord4 : 103,
        goedeantwoord :"C" ,

    },
    {
        vraag :"Wat is 1000 - 231 ?",
        antwoord1 : 723,
        antwoord2 : 769,
        antwoord3 : 696,
        antwoord4 : 669,
        goedeantwoord :"B" ,

    },
    {
        vraag :"Wat is 243 - 54 ?",
        antwoord1 : 183,
        antwoord2 : 189,
        antwoord3 : 231,
        antwoord4 : 180,
        goedeantwoord :"B" ,

    },
    {
        vraag :"Wat is 42 ÷ 6 ?",
        antwoord1 : 4,
        antwoord2 : 6,
        antwoord3 : 7,
        antwoord4 : 5,
        goedeantwoord :"B" ,

    },
    {
        vraag :"Wat is 698 ÷ 63 ?",
        antwoord1 : 11,
        antwoord2 : 11.4,
        antwoord3 : 12,
        antwoord4 : 11.07,
        goedeantwoord :"D" ,

    },
    {
        vraag :"Wat is 271 -123 ?",
        antwoord1 : 148,
        antwoord2 : 147,
        antwoord3 : 149,
        antwoord4 : 136,
        goedeantwoord :"A" ,

    },
    {
        vraag :"Wat is 10 ÷ 10 ?",
        antwoord1 : 10,
        antwoord2 : 1,
        antwoord3 : 0,
        antwoord4 : 5,
        goedeantwoord :"B" ,

    },
    {
        vraag :"Wat is 235 ÷ 23 - 7 ?",
        antwoord1 : 3.21,
        antwoord2 : 4.32,
        antwoord3 : 2.32,
        antwoord4 : 5.23,
        goedeantwoord :"A" ,

    }
];

const laatsteVraag = Vragen.length -1;
let runningVraag = 0;

controleerAntwoord();
rendervraag();

function rendervraag(){
    let v = Vragen[runningVraag];

    Antwoord1.innerHTMl= v.antwoord1;
    Antwoord2.innerHTMl=v.antwoord2;
    Antwoord3.innerHTMl=v.antwoord3;
    Antwoord4.innerHTMl=v.antwoord4;

}
function controleerAntwoord(Ant){
    if (Ant == Vragen[runningVraag].goedeantwoord){
        if(runningVraag < laatsteVraag){
            runningVraag++;
            rendervraag();

        }
    }
}
