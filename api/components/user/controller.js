const TABLE = "user";

module.exports = (injectedStore) => {
  if (!injectedStore) injectedStore = require("../../../store/dummy");
  return {
    list: () => injectedStore.list(TABLE),
    get: (id) => injectedStore.get(TABLE, id),
    upsert: (payload = null) => injectedStore.upsert(TABLE, payload),
    _delete: (id) => injectedStore.remove(TABLE, id),
  };
};
