// =============================
// Birthday Message
// =============================

const birthdayMessage = `

Dear Kaukab ❤️,


Happy Birthday! 🎂✨


Some people are special because of what they achieve,
but some people are special because of who they are.


Your honesty, kindness, and beautiful nature make you
a truly wonderful person.


I know you love snowfall, so I wanted this little surprise
to feel like a peaceful winter evening filled with snow,
stars, and beautiful moments. ❄️🌙


May your life always be filled with happiness,
success, and countless reasons to smile.


Never change the beautiful person you are.


Happy Birthday once again, Kaukab Saud ❤️


With warm wishes,

Ankit Kumar

`;


// =============================
// Selecting Elements
// =============================

const giftButton = document.getElementById("giftButton");

const letter = document.getElementById("letter");

const message = document.getElementById("message");

const closeLetter = document.getElementById("closeLetter");


// =============================
// Button Click
// =============================

giftButton.onclick = function(){
    // Fireworks Effect

for(let i=0;i<80;i++){

    let spark=document.createElement("div");


    spark.innerHTML="✨";


    spark.className="spark";


    spark.style.left="50vw";

    spark.style.top="50vh";


    spark.style.setProperty(
        "--x",
        (Math.random()*400-200)+"px"
    );


    spark.style.setProperty(
        "--y",
        (Math.random()*400-200)+"px"
    );


    document.body.appendChild(spark);



    setTimeout(()=>{

        spark.remove();

    },1500);

}


    // Hearts effect

    for(let i=0;i<120;i++){


        let heart=document.createElement("div");


        heart.innerHTML="❤️";


        heart.className="heart";


        heart.style.left=Math.random()*100+"vw";


        heart.style.top="100vh";


        heart.style.fontSize=
        (15+Math.random()*30)+"px";


        document.body.appendChild(heart);



        setTimeout(function(){

            heart.remove();

        },4000);


    }



    // Open letter

    letter.style.display="flex";


    message.innerHTML="";


    let index=0;


    function typing(){


        if(index < birthdayMessage.length){


            message.innerHTML += 
            birthdayMessage.charAt(index);


            index++;


            setTimeout(typing,40);


        }


    }


    typing();


};



// =============================
// Close Letter
// =============================

closeLetter.onclick=function(){


    letter.style.display="none";


};



// =============================
// Create Stars
// =============================

const stars=document.getElementById("stars");


for(let i=0;i<120;i++){


    let star=document.createElement("div");


    star.className="star";


    star.style.position="absolute";

    star.style.width="3px";

    star.style.height="3px";

    star.style.background="white";

    star.style.borderRadius="50%";


    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";


    stars.appendChild(star);

}



// =============================
// Create Snow
// =============================

const snow=document.getElementById("snow");


for(let i=0;i<150;i++){


    let flake=document.createElement("div");


    flake.innerHTML="❄";


    flake.style.position="absolute";

    flake.style.color="white";


    flake.style.left=Math.random()*100+"vw";


    flake.style.top=Math.random()*100+"vh";


    flake.style.fontSize=
    (10+Math.random()*20)+"px";


    flake.style.animation=
    "snowfall 8s linear infinite";


    snow.appendChild(flake);


}
// =============================
// Floating Rose Petals
// =============================

for(let i=0;i<120;i++){

    let rose=document.createElement("div");

    rose.innerHTML="🌹";

    rose.style.position="absolute";

    rose.style.left=Math.random()*100+"vw";

    rose.style.top=Math.random()*100+"vh";

    rose.style.fontSize=
    (8+Math.random()*18)+"px";

    rose.style.opacity="0.7";

    rose.style.animation=
    "roseFall 10s linear infinite";


    document.body.appendChild(rose);

}