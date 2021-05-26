var XLSX = require("xlsx");

let dataCities = {};
let dataCountries = {};
let dataStates = {};

const excelToJSON = () => {
  const cities = XLSX.readFile(
    "D:\\Documentos\\Escritorio\\GlobantBootcamp\\Test\\Listas\\cities.xlsx"
  );
  const countries = XLSX.readFile(
    "D:\\Documentos\\Escritorio\\GlobantBootcamp\\Test\\Listas\\countries.xlsx"
  );
  const states = XLSX.readFile(
    "D:\\Documentos\\Escritorio\\GlobantBootcamp\\Test\\Listas\\states.xlsx"
  );

  let nameCities = cities.SheetNames;
  let nameCountries = countries.SheetNames;
  let nameStates = states.SheetNames;

  dataCities = XLSX.utils.sheet_to_json(cities.Sheets[nameCities[0]], {
    cellDates: true,
  });

  dataCountries = XLSX.utils.sheet_to_json(countries.Sheets[nameCountries[0]], {
    cellDates: true,
  });

  dataStates = XLSX.utils.sheet_to_json(states.Sheets[nameStates[0]], {
    cellDates: true,
  });
};

excelToJSON();

module.exports = { dataCities, dataCountries, dataStates };
