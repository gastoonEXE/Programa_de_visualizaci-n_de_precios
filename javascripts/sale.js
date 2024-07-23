const prodElement = document.getElementById("product"); //producto
const numberElement = document.getElementById("number"); //cantidad


let texto = ['', 
            'Mezcla original 200g a 500 Yenes',
            'Mezcla original 500g a 900 Yenes',
            'Mezcla especial 200g a 700 Yenes',
            'Mezcla especial 500g a 1.200 Yenes']
let precio = [0, 500, 900, 700, 1200]            
let purchases = [0, 0, 0, 0, 0]; // cantidad de cada producto

function add() 
{
    let number = parseInt(numberElement.value); // cantidad
    let id_producto = parseInt(prodElement.value); //id del producto
    
    if (number <= 5 && number >= 1) {
    } else {
        number = 0;
    }
    purchases[id_producto] = purchases[id_producto] + number;
    window.alert(`${display()}\nsubtotal: ${subtotal()} Yenes`);
};

function display() 
{
    let string = "";
    for (let i = 1; i < purchases.length; i++) 
    {
        if (purchases[i] > 0) {
            string += `${texto[i]}: ${purchases[i]} artículos\n`;
        }
    }
    return string;
}

function subtotal() 
{
    let sum = 0;
    for (let index = 1; index < purchases.length; index++) 
        {
            sum = sum + purchases[index] * precio[index];
            
        }
    return sum;
}

function calc() 
{
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    
    window.alert(display() + "\nsubtotal es: " + sum + " Yenes, \nLos gastos de envio son: "+ postage + " Yenes, \nTotal: " + (sum + postage) + " Yenes.")

    purchases = [0, 0, 0, 0, 0];
    priceElement.value = "";
    numberElement.value = "";
};

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 2000) {
        return 500;
    } else {
        return 250;
    }
}




