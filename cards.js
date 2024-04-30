/**
 * []Crear tarjeta
 * [X]Crear secciones p/tarjeta
 * IMG
 * Nombre,desc,edad,lista de algo
 * []Insertar en la tarjeta
 * []Mostrar dentro de div.container
 */
const CARDS_CONTAINER = document.querySelector("#card-container");
//los objetos se declaran con llaves { } y se utilizan dos puntos en lugar de =
const USER={
 id:1,
 username:"User Name",
 desc:"Sobre mi",
 age:'26',
 fav_books:{
    books:['percyjackson','el principito','ensayo sobre la ceguera','la mecanica del corazon'],
 },
};

//CREAR SECCIONES
const card=document.createElement("div");
const name_section=document.createElement("h3");
const desc_section=document.createElement("p");
const age_section = document.createElement("p");
const book_section=document.createElement("div");
//lista----------------------------------------
const bookList=USER.fav_books.books.map((e) => {
    const item =document.createElement("ul");
    item.textContent=e;
    return item;
});
console.log(bookList);
//CREAR TARJETA
//Inyectamos info
name_section.textContent=USER.username;
desc_section.textContent=USER.desc;
age_section.textContent=USER.age;
book_section.append(...bookList);
card.append(name_section,desc_section,age_section,book_section);

//Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);

