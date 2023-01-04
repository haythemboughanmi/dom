var price= document.getElementById('price').textContent
var quantity= document.getElementById('quantity').textContent

function addition(){
    quantity++
    document.getElementById('quantity').textContent=quantity
    priceprod()
}
function soustraction(){
    if(quantity>1){
        quantity--

    }else{
        quantity=1
    }
    document.getElementById('quantity').textContent=quantity
    priceprod()

}
var totalprice=0
function priceprod(){
    
    totalprice=quantity*price
    document.getElementById('price').textContent=totalprice
   
}

function jadore(){
    var heart= document.getElementById('heart')
    if(heart.style.color==="black"){
        heart.style.color="red"
    }else{
        heart.style.color="black"
    }
 
}
function shopcard(){
    var image =document.getElementById("card1").src
    var object
    object={
        price:totalprice, 
        quantity:quantity,
        Image:image,
    
    }
    sessionStorage.setItem('data', JSON.stringify(object));
   console.log(object)
}
function getdata(){
    var object=JSON.parse(sessionStorage.getItem('data'))
    document.getElementById('card1').src=object.Image
    document.getElementById('price').textContent=object.price
    document.getElementById('quantity').textContent=object.quantity
}