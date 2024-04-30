const users = [
    {
      id: 1,
      username: "booklover123",
      description: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
      }
    },
    {
      id: 2,
      username: "literature_junkie",
      description: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"]
      }
    }
  ];
  // Función para crear una tarjeta de usuario
function crearTarjeta(usuario) {
    const card = document.createElement("div");
    const name_section = document.createElement("h3");
    const desc_section = document.createElement("p");
    const age_section = document.createElement("p");
    const book_section = document.createElement("div");

    // Lista de libros favoritos
    const bookList = usuario.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });

    // Inyectamos info
    name_section.textContent = usuario.username;
    desc_section.textContent = usuario.description;
    age_section.textContent = usuario.age;
    book_section.append(...bookList);
    card.append(name_section, desc_section, age_section, book_section);

    return card;
}
// Crear y mostrar tarjetas para cada usuario
users.forEach(usuario => {
    const tarjetaUsuario = crearTarjeta(usuario);
    insertarTarjeta(tarjetaUsuario);
});