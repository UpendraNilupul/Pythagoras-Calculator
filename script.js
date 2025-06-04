function calculate(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    const solution = document.getElementById('solution');
           

    if(a == ""){
        console.log("ans a");
        solution.innerHTML = "Solving for: a <br>";
        solution.innerHTML += "a = √(c<sup>2</sup>) - (b<sup>2</sup>) <br>";
        solution.innerHTML += "a = √("+c+"<sup>2</sup>) - ("+b+"<sup>2</sup>) <br>";
        let ansA = Math.sqrt(Math.pow(Number(c), 2) - Math.pow(Number(b), 2));
        //ansA = Math.round(ansA * 100) / 100;
        solution.innerHTML += "a = " + ansA;

        document.getElementById('a').value = ansA;
    }
    else if(b == ""){
        console.log("ans b");
        solution.innerHTML = "Solving for: b <br>";
        solution.innerHTML += "b = √(c<sup>2</sup>) - (a<sup>2</sup>) <br>";
        solution.innerHTML += "b = √(" + c + "<sup>2</sup>) - (" + a + "<sup>2</sup>) <br>";
        let ansB = Math.sqrt(Math.pow(Number(c), 2) - Math.pow(Number(a), 2));
        //ansB = Math.round(ansB * 100) / 100;
        solution.innerHTML += "b = " + ansB;

        document.getElementById('b').value = ansB;
    }
    else if(c == ""){
        console.log("ans c");
        solution.innerHTML = "Solving for: c <br>";
        solution.innerHTML += "c = √(a<sup>2</sup> + b<sup>2</sup>) <br>";
        solution.innerHTML += "c = √(" + a + "<sup>2</sup> + " + b + "<sup>2</sup>) <br>";
        let ansC = Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
        //ansC = Math.round(ansC * 100) / 100;
        solution.innerHTML += "c = " + ansC;

        document.getElementById('c').value = ansC;
    }
    else{
        alert("Please leave one side empty to solve");
    }
}