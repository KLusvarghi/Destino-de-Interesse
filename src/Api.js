export function GET_CITY() {
  async function fetchCity() {
    const reponseValue = (data) => ({
      value: data.id,
      label: data.name,
    });
    const response = await fetch('https://amazon-api.sellead.com/city');
    const json = await response.json();
    const data = json.map(reponseValue);
    return data;
  }
  fetchCity();
  return { fetchCity };
}

export function GET_COUNTRY() {
  async function fetchCountry() {
    const reponseValue = (data) => ({
      value: data.name,
      label: data.name,
    });
    const response = await fetch('https://amazon-api.sellead.com/country');
    const json = await response.json();
    const data = json.map(reponseValue);
    return data;
  }
  fetchCountry();
  return { fetchCountry };
}
