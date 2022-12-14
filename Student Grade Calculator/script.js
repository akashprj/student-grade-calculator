const calcy = () =>{
    let jv = document.getElementById('jv').value;
    let cc = document.getElementById('cc').value;
    let py = document.getElementById('py').value;
    let wd = document.getElementById('wd').value;
    let ml = document.getElementById('ml').value;
    let ms = document.getElementById('ms').value;
    let grades = "";
    let totalGrades = parseFloat(jv) + parseFloat(cc) + parseFloat(py) + parseFloat(wd) + parseFloat(ml) + parseFloat(ms);
    alert(totalGrades);
    let perc = (totalGrades/600) * 100;
    alert(perc);
    debugger;
    if(perc <= 100  && perc >= 80){
    grades = 'A';
    }else if(perc <= 79  && perc >= 60){
    grades = 'B';
    }else if(perc <= 59  && perc >= 40){
    grades = 'C';
    }else{
    grades = 'F';
    }
    if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
    document.getElementById('showData').innerHTML = ` Out of 600 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
}