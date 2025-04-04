const nanoid = require("nanoid");
const TABLE = "user";

module.exports = (injectedStore) => {
  if (!injectedStore) injectedStore = require("../../../store/dummy");
  return {
    list: () => injectedStore.list(TABLE),
    get: (id) => injectedStore.get(TABLE, id),
    // upsert: (payload = null) => injectedStore.upsert(TABLE, payload),
    upsert: (payload = {}) => {
      if (!payload.name) {
        throw new Error("El campo 'name' es requerido");
      }
      const data = {
        id: payload.id || nanoid(),
        name: payload.name,
      };

      return injectedStore.upsert(TABLE, data);
    },
    _delete: (id) => injectedStore.remove(TABLE, id),
  };
};
