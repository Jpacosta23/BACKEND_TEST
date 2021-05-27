const mySQL = require("mysql");
const data = require("./src/data/data");
const fs = require("fs");

let infoCities = data.dataCities;
let infoCountries = data.dataCountries;
let infoStates = data.dataStates;

const clone = (obj) => Object.assign({}, obj);

const renameKey = (object, key, newKey) => {
  const clonedObj = clone(object);

  const targetKey = clonedObj[key];

  delete clonedObj[key];

  clonedObj[newKey] = targetKey;

  return clonedObj;
};

const merge = (arr1, arr2) => {
  let newArray = [];
  arr1.forEach((a) => {
    arr2.forEach((b) => {
      if (a["ID_COUNTRY"] === b["ID_COUNTRY"]) {
        delete b["ID_COUNTRY"];
        b = renameKey(b, "NAME", "NAME_STATE");
        let c = { ...a, ...b };
        newArray.push(c);
      }
    });
  });
  return newArray;
};

let dat = merge(infoCountries, infoStates);

const merge2 = (arr1, arr2) => {
  let newArray = [];
  arr1.forEach((a) => {
    arr2.forEach((b) => {
      if (a["ID_STATE"] === b["ID_STATE"]) {
        delete b["ID_STATE"];
        b = renameKey(b, "NAME", "NAME_CITY");
        let c = { ...a, ...b };
        newArray.push(c);
      }
    });
  });
  return newArray;
};

let finalMerge = merge2(dat, infoCities); //fuciona todos los archivos de excel por ID
//LINEA 58,59 SE CREA UN ARCHIVO "pool-session.json" CON LA INFORMACION DE FINALMERGE Y LUEGO SE IMPORTA A MYSQL
// const json = JSON.stringify(finalMerge, null, 2);
// const json2 = fs.writeFileSync("pool-session.json", json);
// console.log(JSON.stringify(finalMerge));

const connection = mySQL.createConnection({
  host: "localhost",
  database: "Test",
  user: "root",
  password: "",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("MYSQL Connected");
  }
});

module.exports = connection;
