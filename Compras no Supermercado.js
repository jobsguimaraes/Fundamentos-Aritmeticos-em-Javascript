let num = parseInt(gets());
let index = 0;

let listas = Array(num);
let listaSet = Array(num);

while (index < num ) {
    listas[index] = gets().split(" ");
    index++;
}

listas.map((i,d) => listaSet[d] = new Set(i));
listaSet.map((i,d) => listas[d] = [...i]);

listas.forEach(i => i.sort());
listas.forEach(i => console.log(i.join(" ")));