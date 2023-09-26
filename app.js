function updatedProductNumber(product ,price ,isIncresing) {
    const productTotal = document.getElementById(product+'-number');
    let productNumber = productTotal.value ;
    if(isIncresing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(isIncresing != true && productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }
    productTotal.value = productNumber

    //update  total--
    const Producttotal = document.getElementById(product +'-total');
    Producttotal.innerText = productNumber* price;
    // calculate--
    calculateTotal();
}
function getInput(product){
    const produtInput = document.getElementById(product+'-number');
    const productNumber =parseInt(produtInput.value);
    return productNumber;
}
function calculateTotal(){
    const phonetotla = getInput('phone') * 1219;
    const casetotal = getInput('case') * 59;
    const subtotal = phonetotla + casetotal;
    const taxamount = subtotal /10;
    const total = subtotal + taxamount;
    // updatr on the html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = taxamount;
    document.getElementById('total-price').innerText = total;
}
// phone increse decrease event---
document.getElementById('phone-plus').addEventListener('click',function(){
    updatedProductNumber("phone",1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updatedProductNumber("phone",1219,false);
})

//handel case increse decrease event---
document.getElementById('case-pluse').addEventListener('click',function(){
    updatedProductNumber('case',59,true);
});

document.getElementById('case-mainus').addEventListener('click',function(){
    updatedProductNumber('case',59,false);
})

