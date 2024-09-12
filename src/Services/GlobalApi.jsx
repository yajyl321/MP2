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

// Fetch dog breeds
const getDogBreed = async (limit = 15) => {
  try {
    const response = await axios.get(
      `${dogUrl}/images/search?api_key=${dogapiKey}&limit=${limit}`
    );

    return response.data.map((dog) => ({
      id: dog.id,
      name:
        dog.breeds && dog.breeds.length > 0
          ? dog.breeds[0].name
          : "Unknown Breed",
      image: dog.url,
    }));
  } catch (error) {
    console.error("Error Fetching dog breeds:", error);
    throw error;
  }
};

const getCatBreed = async (limit = 15) => {
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
  getDogBreed,
  getCatBreed,
};
