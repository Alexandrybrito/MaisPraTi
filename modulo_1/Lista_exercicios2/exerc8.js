// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.


let movies = [
    {
        title: 'Black Panther',
        direction: 'Ryan Coogler',
        genre: 'ação · fantasia · aventura · ficção científica',
        yearRelease: 2018,
    },
    {
        title: 'Predator',
        direction: 'John McTiernan',
        genre: 'ação . suspense . ficção científica',
        yearRelease: 1987,
    },
    {
        title: 'Forrest Gump',
        direction: 'Robert Zemeckis',
        genre: 'comédia dramática',
        yearRelease: 1994,
    },
    {
        title: 'Malcolm X',
        direction: 'Spike Lee',
        genre: 'drama biográfico',
        yearRelease: 1992,
    },
    {
        title: 'Rocky',
        direction: 'John G. Avildsen',
        genre: 'drama, ação, esporte',
        yearRelease: 1976,
    },
    {
        title: 'Matrix',
        direction: 'Lilly e Lana Wachowski',
        genre: 'ação, ficção científica',
        yearRelease: 1999,
    }

];

let newList = [];

movies.forEach(movie => {
     newList.push(movie.title);
    
});

console.log(` The new list brings the movies ${newList} `)