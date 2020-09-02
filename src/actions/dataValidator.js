export default function dataValidator(name, countries, age, gender) {
  let nameFixed = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let countriesFixed = countries.map((e) => e.country_id).join(", ");

  return {
    type: "NEW_DATA",
    name: nameFixed,
    countries: checkIfEmpty(countriesFixed),
    age: checkIfEmpty(age),
    gender: checkIfEmpty(gender),
  };
}

function checkIfEmpty(value) {
  const noResults = "No results";
  if (value) {
    return value;
  } else {
    return noResults;
  }
}
