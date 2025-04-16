async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export default class data {
  constructor(name) {
    this.name = name;
    this.path = `../../json/${this.name}.json`;
  }
 async getData() {
    
    const reponse =  await fetch(this.path)
    const cities = await convertToJson(reponse);
    return cities;
  }
  async findCityByName(name) {
    const city = await this.getData();
    return city.find((item) => item.City === name);
  }
}
