const products = [
  {
    id: 1,
    title: "Super Mario Bros.",
    price: 200,
    desc: "Un juego de plataformas clásico donde Mario debe salvar a la princesa Peach del malvado Bowser.",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Nintendo",
    stock: 10,
    gen: "Plataformas",
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 500,
    desc: "Un juego de aventuras y acción donde el jugador asume el rol del héroe Link, quien debe salvar al reino de Hyrule de la calamidad que se avecina.",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Nintendo",
    stock: 5,
    gen: "Aventura",
  },
  {
    id: 3,
    title: "Minecraft",
    price: 300,
    desc: "Un juego de construcción y aventuras en un mundo de bloques. El jugador puede construir cualquier cosa que se le ocurra, explorar cuevas y derrotar a enemigos.",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Mojang Studios",
    stock: 7,
    gen: "Sandbox",
  },
  {
    id: 4,
    title: "Fortnite",
    price: 400,
    desc: "Un juego de disparos en tercera persona y construcción. El jugador se une a otros jugadores para luchar contra hordas de monstruos mientras construye defensas para protegerse.",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Epic Games",
    stock: 3,
    gen: "Battle Royale",
  },
  {
    id: 5,
    title: "League of Legends",
    price: 250,
    desc: "Un juego de estrategia en tiempo real donde dos equipos de cinco jugadores luchan por destruir la base del equipo contrario mientras defienden la suya propia.",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Riot Games",
    stock: 8,
    gen: "MOBA",
  },
  {
    id: 6,
    title: "Crash Team Racing",
    price: 250,
    desc: "Un clásico de carreras de karts con los personajes de Crash Bandicoot",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Naughty Dog",
    stock: 15,
    gen: "Kart Racing",
  },
  {
    id: 7,
    title: "Diablo",
    price: 300,
    desc: "El primer juego de la legendaria saga de RPGs de Blizzard",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 10,
    gen: "RPG",
  },
  {
    id: 8,
    title: "Diablo II",
    price: 350,
    desc: "La secuela del juego original, que mejoró en todo a su predecesor",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 8,
    gen: "RPG",
  },
  {
    id: 9,
    title: "Diablo III",
    price: 400,
    desc: "La tercera entrega de la serie, que trajo cambios significativos a la mecánica de juego",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 5,
    gen: "RPG",
  },
  {
    id: 10,
    title: "Chrono Cross",
    price: 1999,
    desc: "Juego de rol para PlayStation",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Square Enix",
    stock: 5,
    gen: "RPG",
  },
  {
    id: 11,
    title: "Age of Empires II: Definitive Edition",
    price: 1499,
    desc: "Juego de estrategia en tiempo real para PC",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Microsoft",
    stock: 8,
    gen: "Estrategia",
  },
  {
    id: 12,
    title: "Diablo IV",
    price: 400,
    desc: "El último juego de la aclamada saga Diablo",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 1,
    gen: "RPG",
  },
  {
    id: 13,
    title: "Crash Bandicoot N. Sane Trilogy",
    price: 1499,
    desc: "Juego de plataformas para PlayStation 4",
    image: "https://via.placeholder.com/200",
    cat: "games",
    brand: "Activision",
    stock: 7,
    gen: "Plataformas",
  },
  {
    id: 14,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    year: 2001,
    price: 700,
    director: "Peter Jackson",
    image: "https://via.placeholder.com/200",
    cat: "movies",
    gen: "Fantasia",
    desc: "Un joven hobbit llamado Frodo Bolsón hereda un anillo mágico de su tío. Acompañado por un grupo de amigos y aliados, Frodo parte en una peligrosa misión para destruir el anillo en las profundidades del Monte del Destino.",
  },
  {
    id: 15,
    title: "Star Wars: Episodio IV - Una Nueva Esperanza",
    year: 1977,
    price: 900,
    director: "George Lucas",
    image: "https://via.placeholder.com/200",
    cat: "movies",
    gen: "Ciencia-Ficcion",
    desc: "La Princesa Leia es capturada por el Imperio Galáctico y el joven Luke Skywalker, junto con un par de robots, comienza una peligrosa misión para rescatarla. En el camino, se unen al mercenario Han Solo y su copiloto Wookiee, Chewbacca.",
  },
  {
    id: 16,
    title: "Harry Potter y la Piedra Filosofal",
    year: 2001,
    price: 10000,
    director: "Chris Columbus",
    image: "https://via.placeholder.com/200",
    cat: "movies",
    gen: "Fantasia",
    desc: "Un huérfano llamado Harry Potter descubre que es un mago y es aceptado en la Escuela de Magia y Hechicería de Hogwarts. Allí, hace nuevos amigos y enemigos mientras descubre su lugar en el mundo mágico.",
  },
  {
    id: 17,
    title: "Blade Runner",
    year: 1982,
    price: 1000,
    director: "Ridley Scott",
    image: "https://via.placeholder.com/200",
    cat: "movies",
    gen: "Ciencia-Ficcion",
    desc: "En el futuro, los androides llamados 'replicantes' son usados para trabajos peligrosos en colonias extraterrestres. Cuando un grupo de replicantes rebeldes regresa a la Tierra, un ex policía llamado Rick Deckard es llamado de vuelta a servicio para encontrarlos y 'retirarlos'.",
  },
  {
    id: 18,
    title: "Indiana Jones y los Raiders del Arca Perdida",
    year: 1981,
    price: 100,
    director: "Steven Spielberg",
    image: "https://via.placeholder.com/200",
    cat: "movies",
    gen: "Aventuras",
    desc: "En 1936, el arqueólogo y aventurero Indiana Jones es contratado por el gobierno estadounidense para encontrar el Arca de la Alianza antes que los nazis. Con la ayuda de una antigua amante, Marion Ravenwood, Jones se enfrenta a peligrosos enemigos y enfrenta desafiantes obstáculos en su búsqueda.",
  },
  {
    id: 19,
    title: "Game of Thrones: The Complete Series",
    price: 100,
    desc: "La épica historia de las siete casas de Westeros en una colección imprescindible.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "HBO",
    stock: 5,
    gen: "Fantasia",
  },
  {
    id: 20,
    title: "The Witcher: Season 1",
    price: 50,
    desc: "Geralt de Rivia, un solitario cazador de monstruos, lucha por encontrar su lugar en un mundo donde las personas a menudo son más perversas que las bestias.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "Netflix",
    stock: 3,
    gen: "Fantasia",
  },
  {
    id: 21,
    title: "Breaking Bad: The Complete Series",
    price: 80,
    desc: "Un profesor de química de secundaria con cáncer terminal se convierte en un fabricante de metanfetamina para asegurar el futuro de su familia.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "AMC",
    stock: 7,
    gen: "Drama",
  },
  {
    id: 22,
    title: "Stranger Things: Season 1",
    price: 30,
    desc: "Cuando un niño desaparece, un pequeño pueblo revela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales y una niña muy extraña.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "Netflix",
    stock: 2,
    gen: "Ciencia-Ficcion",
  },
  {
    id: 23,
    title: "The Office: The Complete Series",
    price: 60,
    desc: "El cotidiano y absurdo mundo de la oficina de Dunder Mifflin.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "NBC",
    stock: 4,
    gen: "Comedia",
  },
  {
    id: 24,
    title: "The Crown: Season 1",
    price: 40,
    desc: "La vida de la reina Isabel II, desde su boda en 1947 hasta nuestros días.",
    image: "https://via.placeholder.com/200",
    cat: "series",
    brand: "Netflix",
    stock: 2,
    gen: "Drama",
  },

  {
    id: 25,
    title: "Nvidia GeForce RTX 3080 Ti",
    price: 1500,
    desc: "Una de las tarjetas gráficas más potentes del mercado",
    image: "https://via.placeholder.com/200",
    cat: "hardware",
    brand: "Nvidia",
    stock: 5,
    gen: "RTX 30 Series",
  },
  {
    id: 26,
    title: "AMD Ryzen 9 5950X",
    price: 900,
    desc: "Uno de los procesadores más potentes del mercado",
    image: "https://via.placeholder.com/200",
    cat: "hardware",
    brand: "AMD",
    stock: 3,
    gen: "Ryzen 9",
  },
  {
    id: 27,
    title: "Samsung Odyssey G7",
    price: 800,
    desc: "Un monitor curvo con una tasa de refresco de 240Hz",
    image: "https://via.placeholder.com/200",
    cat: "hardware",
    brand: "Samsung",
    stock: 2,
    gen: "Odyssey G7",
  },
  {
    id: 28,
    title: "Auriculares inalámbricos Sony WH-1000XM4",
    price: 300,
    desc: "Auriculares inalámbricos con cancelación de ruido líder en la industria",
    image: "https://via.placeholder.com/200",
    cat: "accessories",
    brand: "Sony",
    stock: 10,
    gen: "Headphones",
  },
  {
    id: 29,
    title: "Auriculares inalámbricos Bose QuietComfort Earbuds",
    price: 280,
    desc: "Auriculares inalámbricos con cancelación de ruido avanzada y un sonido nítido y equilibrado",
    image: "https://via.placeholder.com/200",
    cat: "accessories",
    brand: "Bose",
    stock: 5,
    gen: "Headphones",
  },
];

export default products;
