// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: "Tempo de Semear e Colher",
    author: "Neville Goddard",
    anoPublicacao: "1956",
    genero: "Metafísica",
}

//livro.editora = "Causa&Efeito"

for (const key in livro) {
    if (key !== "editora") {
        livro.editora = "Causa&Efeito" 
    }
}  
console.log(livro);