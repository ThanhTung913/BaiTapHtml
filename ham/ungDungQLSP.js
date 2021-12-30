class Product{
    constructor(a,name,quantity,price ){
        this.id=a;
        this.name=name;
        this.quantity=quantity;
        this.price=price;   
    }
    toString() {
        return `Product ${this.id},${this.name}, ${this.quantity}, ${this.price}`
    }
}

let pro1 = new Product(1,'Iphone 13 Pro Max', 50,32000000 )
let pro2 = new Product(2,'Iphone 13 Pro', 50,28000000 )
let pro3 = new Product(3,'Iphone 13', 50,20000000 )
let pro4 = new Product(4,'Iphone 12 Pro Max', 50,27000000 )
let pro5 = new Product(5,'Iphone 12 Pro', 50,19000000 )
let pro6 = new Product(6,'Iphone 11 Pro Max', 50,19000000 )
let pro7 = new Product(7,'Iphone 11 Pro', 50,16000000 )
let pro8 = new Product(8,'Iphone 11', 50,13000000 )
let pro9 = new Product(9,'Vertu', 50,47000000 )
let pro10 = new Product(10,'Galaxy Z ', 50,44000000 )

let products =[pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro9,pro10]

function load(){
loadProducts();
}
function loadProducts(){
    for (let index =0 ; index < products.length; index++){
        
        document.getElementById('tbody').innerHTML += `
        <tr>
            <td>${products[index].id}</td>
            <td>${products[index].name}</td>
            <td>${products[index].quantity}</td>
            <td>${products[index].price}</td>
        `;
    }
}
// function addProduct(id) {
//     let product =document.getElementById('search').value;
//     let ip10 = new Product(product)
//    products.push(ip10);
//    document.getElementById('tbody').innerHTML = ''
//    for (let index =0 ; index < products.length; index++){
        
//     document.getElementById('tbody').innerHTML +=   `
//     <tr>
//         <td>${products[index].id}</td>
//         <td>${products[index].name}</td>
//         <td>${products[index].quantity}</td>
//         <td>${products[index].price}</td>
//     `;
// }
// } 

function search(){
    let product =document.getElementById('search').value;
    products.filter(function(phone,index){
        return  phone.indexOf(product) != -1;
         
    })

}