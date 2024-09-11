import axios from "axios";

const randomDogImageUrl = "https://dog.ceo/api/breeds/image/random/5";
const onerandomDogImageUrl = "https://dog.ceo/api/breeds/image/random";
const onerandomCatImageUrl = "https://api.thecatapi.com/v1/images/search";
const dogUrl = "https://api.thedogapi.com/v1";
const dogapiKey =
  "live_Ej05sMHSM0OGeTfWMD1jmNAfrFlBEHqLNn3OVB6MLRf5obkI6KR9fUXaGCcdUzll";
const catUrl = "https://api.thecatapi.com/v1";
const catapiKey =
  "live_Ej05sMHSM0OGeTfWMD1jmNAfrFlBEHqLNn3OVB6MLRf5obkI6KR9fUXaGCcdUzll";

const getoneRandomCat = axios.get(onerandomCatImageUrl);
const getoneRandomDog = axios.get(onerandomDogImageUrl);
const getrandomDog = axios.get(randomDogImageUrl);

const getdogBreed = async (limit = 15) => {
  try {
    const response = await axios.get(
      `${dogUrl}/breeds?api_key=${dogapiKey}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error Fecthing dog breeds:", error);
    throw error;
  }
};

const getcatBreed = async (limit = 15) => {
  try {
    const response = await axios.get(
      `${catUrl}/breeds?api_key=${catapiKey}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error Fecthing cat breeds:", error);
    throw error;
  }
};

export default {
  getoneRandomCat,
  getoneRandomDog,
  getrandomDog,
  getdogBreed,
  getcatBreed,
};
