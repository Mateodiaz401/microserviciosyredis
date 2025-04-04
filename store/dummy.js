const db = {
  user: [
    { id: 1, name: "Carlos" },
    { id: 2, name: "mateo" },
  ],
};

// function list(tabla) {
//   return db[tabla];
// }
const list = async (tabla) => await db[tabla];

const get = async (tabla, id) => {
  const col = await list(tabla);
  return col.find((item) => item.id == id) || null;
};

/*const upsert = async (tabla, data) => db[tabla].push(data);*/
const upsert = async (table, data) => {
  // Simula un "upsert": si no existe el id, lo agrega; si existe, lo actualiza
  const index = db[table].findIndex((item) => item.id === data.id);

  if (index === -1) {
    db[table].push(data);
  } else {
    db[table][index] = data;
  }

  return data;
};
// const upsert = async (tabla, data) => await db[tabla].insert(data);

// function upsert(tabla, data) {
//   db[collection].push(data);
// }
//Original
// function remove(tabla, id) {
//   return true;
// }
//Mejorado
const remove = async (tabla, id) => true;

module.exports = {
  list,
  get,
  upsert,
  remove,
};
