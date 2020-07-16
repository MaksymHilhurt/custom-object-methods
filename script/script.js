const testObject = {
  name: "Elrond",
  secondName: "Smith",
  role: "agent"
};

function customObjectFreeze(object) {
    for (key in object) {
      Object.defineProperty(object, key, {
        configurable: false,
        writable: false
      })
    };
  return object;
};

function customObjectKeys(object) {
  const keysArray = [];
    for (key in object) {
      keysArray.push(key)
    };
  return keysArray;
};

function customObjectSeal(object) {
    for (key in object) {
      Object.defineProperty(object, key, {
        configurable: false,
      })
    };
  return object;
}
