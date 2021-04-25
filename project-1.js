// Alert #1 
function alert1(){
    alert('Witaj');
    alert('Oto mój pierwszy projekt');
}

// Alert #2
function alert2(){
let zdanie='nazywam się Matthiass i mam ';
let age = 20;
let zdanie2=' lat, mam nadzieję, że nie załamałeś się wchodząc i widząc tyle alertów';
alert(zdanie+age+zdanie2);
}

// Alert #3
function alert3(){
let poco = prompt('Zaglądasz tu ponieważ?',"");
alert(`${poco}...... dobrze wiedzieć ;p`);
}

// Alert #4
function alert4(){
let isDev= confirm("Jesteś developerem?");
alert(isDev);
}


/* Kalkulator */
function Calculator(operator) 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;  
 
    switch(operator) 
    {
        case '+':
            var result = parseFloat(a) + parseFloat(b);         
        break;
        case '-':
            var result = parseFloat(a) - parseFloat(b);         
        break;  
        case 'x':
            var result = parseFloat(a) * parseFloat(b);         
        break;  
        case '/':
            var result = parseFloat(a) / parseFloat(b);         
        break;
        case '%':
            var result = parseFloat(a) % parseFloat(b);         
        break;
        case '**':
            var result = parseFloat(a) ** parseFloat(b);         
        break;    
    }
 
    document.getElementById('result').value = '= ' + result;
}

/* Popup for Kalkulator*/
