//En este mock se han almacenado los datos en arrays, objetos y arrays de objetos
//Habra que tebnerlo en cuenta a la hora de querer mostrar los datos
//Para saber si podemos hacer un map directamente o hay que tener primero acceso a propiedad

export const hobbies = {
    read: [{
              title: "El principito",
              authorName: "Antoine",
              authorSurname: "de Saint-Exupéry ",
              genre: " novela corta",
              dateOfPublication: "06/04/1943",
              authorBirthDate: "29/05/1970",
              bookImage: "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1712072815/El_principito_xuppkt.jpg",
            },
            {
              title: "Quo vadis",
              authorName: "AHenryk ",
              authorSurname: "Sienkiewicz ",
              genre: " novela histórica",
              dateOfPublication: "02/04/1987",
              authorBirthDate: "29/05/1970",
              bookImage: "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1712073750/7423309f92ecff723563f21541ee8bba_c2eac0.webp",
            },
          ],
    
    sports: [
      {
        name: "Football",
        indoor: false,
        favoriteTeam: "Betis",
      },

      {
        name: "Ciclismo",
        indoor: true,
        favoriteTeam: "Ineos",
      },
    ],
    movies: [
      {
        name: "El guerrero Pacífico",
        type: "Movie",
        genre: "Drama",
        vote: 9,
      },
     {
        name: "Narcos",
        type: "Serie",
        genre: "Drama",
        vote: 8,
      },
    ],
    languages: [
      {
        language: "English",
        wrlevel: "Native",
        splevel: "Native",
      },
      {
        language: "Italian",
        wrlevel: "Native",
        splevel: "Native",
      },
  ],

    songsHeard: [
      {
        song: "Fix you",
        artist: "Coldplay",
        genre: "Rock Alternativo",
      },
      {
        song: "Bohemian Rapsody",
        artist: "Queen",
        genre: "Rock",
      },
      
    ],
    
  };