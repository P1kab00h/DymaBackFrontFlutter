const mongoose = require("mongoose");
const City = require("./models/city.model");

// version web

// mongoose
//   .connect(
//     "mongodb+srv://dymatripuser:dymatripuser@cluster0.xti6nde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     //"mongodb+srv://jean:123@cluster0-urpjt.gcp.mongodb.net/dymatrip?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     Promise.all([
//       new City({
//         name: "Paris",
//         image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
//         //image: "http://127.0.0.1/assets/images/paris.jpg",
//         activities: [
//           {
//             image: "http://127.0.0.1/assets/images/activities/louvre.jpg",
//             name: "Louvre",
//             city: "Paris",
//             price: 12.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/chaumont.jpg",
//             name: "Chaumont",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/dame.jpg",
//             name: "Notre Dame",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/defense.jpg",
//             name: "La défense",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/effeil.jpg",
//             name: "Tour Eiffel",
//             city: "Paris",
//             price: 15.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/luxembourg.jpg",
//             name: "Jardin Luxembourg",
//             id: "a6",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/mitterrand.jpg",
//             name: "Bibliothèque Mitterrand",
//             id: "a7",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/montmartre.jpg",
//             name: "Montmartre",
//             id: "a8",
//             city: "Paris",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/catacombe.jpg",
//             name: "Catacombes",
//             id: "a9",
//             city: "Paris",
//             price: 10.0,
//           },
//         ],
//       }).save(),
//       new City({
//         name: "Lyon",
//         image: "http://127.0.0.1/assets/images/lyon.jpg",
//         activities: [
//           {
//             image: "http://127.0.0.1/assets/images/activities/lyon_opera.jpg",
//             name: "Opéra",
//             id: "l1",
//             city: "Lyon",
//             price: 100.0,
//           },
//           {
//             image:
//               "http://127.0.0.1/assets/images/activities/lyon_bellecour.jpg",
//             name: "Place Bellecour",
//             id: "l2",
//             city: "Lyon",
//             price: 0.0,
//           },
//           {
//             image:
//               "http://127.0.0.1/assets/images/activities/lyon_basilique.jpg",
//             name: "Basilique St-Pierre",
//             id: "l3",
//             city: "Lyon",
//             price: 10.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/lyon_mairie.jpg",
//             name: "Mairie",
//             id: "l4",
//             city: "Lyon",
//             price: 0.0,
//           },
//         ],
//       }).save(),
//       new City({
//         name: "Nice",
//         image: "http://127.0.0.1/assets/images/nice.jpg",
//         activities: [
//           {
//             image:
//               "https://media.ouest-france.fr/v1/pictures/MjAyMzA5YmViZDQwYjI2MjQ2OTU1Mjk5OWQ2MmZjMWVlNTVlYzc?width=1260&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=bde779a7d3990288a930a58db9fec91da7cba425656e5cc60d7fd269dbeb44c0",
//             name: "Eglise Orthodoxe",
//             id: "n1",
//             city: "Nice",
//             price: 5.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/nice_riviera.jpg",
//             name: "Riviera",
//             id: "n2",
//             city: "Nice",
//             price: 0.0,
//           },
//           {
//             image:
//               "http://127.0.0.1/assets/images/activities/nice_promenade.jpg",
//             name: "Promenade des Anglais",
//             id: "n3",
//             city: "Nice",
//             price: 0.0,
//           },
//           {
//             image: "http://127.0.0.1/assets/images/activities/nice_opera.jpg",
//             name: "Opéra",
//             id: "n4",
//             city: "Nice",
//             price: 100.0,
//           },
//         ],
//       }).save(),
//     ]).then((res) => {
//       console.log("data installed");
//       mongoose.connection.close();
//     });
//   });


// version avec l'émulateur

mongoose
  .connect(
    "mongodb+srv://dymatripuser:dymatripuser@cluster0.xti6nde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    //"mongodb+srv://jean:123@cluster0-urpjt.gcp.mongodb.net/dymatrip_emu?retryWrites=true&w=majority"
  )
  .then(() => {
    Promise.all([
      new City({
        name: "Paris",
        image: "http://10.0.2.2/assets/images/paris.jpg",
        activities: [
          {
            image: "http://10.0.2.2/assets/images/activities/louvre.jpg",
            name: "Louvre",
            city: "Paris",
            price: 12.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/chaumont.jpg",
            name: "Chaumont",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/dame.jpg",
            name: "Notre Dame",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/defense.jpg",
            name: "La défense",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/effeil.jpg",
            name: "Tour Eiffel",
            city: "Paris",
            price: 15.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/luxembourg.jpg",
            name: "Jardin Luxembourg",
            id: "a6",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/mitterrand.jpg",
            name: "Bibliothèque Mitterrand",
            id: "a7",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/montmartre.jpg",
            name: "Montmartre",
            id: "a8",
            city: "Paris",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/catacombe.jpg",
            name: "Catacombes",
            id: "a9",
            city: "Paris",
            price: 10.0,
          },
        ],
      }).save(),
      new City({
        name: "Lyon",
        image: "http://10.0.2.2/assets/images/lyon.jpg",
        activities: [
          {
            image: "http://10.0.2.2/assets/images/activities/lyon_opera.jpg",
            name: "Opéra",
            id: "l1",
            city: "Lyon",
            price: 100.0,
          },
          {
            image:
              "http://10.0.2.2/assets/images/activities/lyon_bellecour.jpg",
            name: "Place Bellecour",
            id: "l2",
            city: "Lyon",
            price: 0.0,
          },
          {
            image:
              "http://10.0.2.2/assets/images/activities/lyon_basilique.jpg",
            name: "Basilique St-Pierre",
            id: "l3",
            city: "Lyon",
            price: 10.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/lyon_mairie.jpg",
            name: "Mairie",
            id: "l4",
            city: "Lyon",
            price: 0.0,
          },
        ],
      }).save(),
      new City({
        name: "Nice",
        image: "http://10.0.2.2/assets/images/nice.jpg",
        activities: [
          {
            image: "http://10.0.2.2/assets/images/activities/nice_orthodox.jpg",
            name: "Eglise Orthodoxe",
            id: "n1",
            city: "Nice",
            price: 5.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/nice_riviera.jpg",
            name: "Riviera",
            id: "n2",
            city: "Nice",
            price: 0.0,
          },
          {
            image:
              "http://10.0.2.2/assets/images/activities/nice_promenade.jpg",
            name: "Promenade des Anglais",
            id: "n3",
            city: "Nice",
            price: 0.0,
          },
          {
            image: "http://10.0.2.2/assets/images/activities/nice_opera.jpg",
            name: "Opéra",
            id: "n4",
            city: "Nice",
            price: 100.0,
          },
        ],
      }).save(),
      new City({
        image: 'http://10.0.2.2/assets/images/ajaccio.jpg',
    name: 'Ajaccio',
    activities: [
      {
        image: 'http://10.0.2.2/assets/images/activities/nice_opera.jpg',
        name: 'Opéra',
        id: 'n4',
        city: 'Nice',
        price: 100.00,
      }
    ],
      }).save(),
      new City({
        image: 'http://10.0.2.2/assets/images/marseille.jpg',
        name: "Marseille"
  }).save(),
  new City({
    image: 'http://10.0.2.2/assets/images/montpellier.jpg',
    name: "Montpellier"
}).save(),
    ]).then((res) => {
      console.log("data installed");
      mongoose.connection.close();
    });
  });
