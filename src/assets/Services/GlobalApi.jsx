// import axios from "axios";

// const dogUrl = "https://api.thedogapi.com/v1";
// const dogapiKey =
//   "live_Ej05sMHSM0OGeTfWMD1jmNAfrFlBEHqLNn3OVB6MLRf5obkI6KR9fUXaGCcdUzll";
// const randomDogImage = "https://dog.ceo/api/breeds/image/random";

// const getRandomDogImage = axios.get(this.randomDogImage);

// const getDogBreeds = async () => {
//   try {
//     const response = await axios.get(`${dogUrl}/breeds?api_key=${dogapiKey}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching dog breeds:", error);
//     throw error;
//   }
// };

// export default {
//   getDogBreeds,
// };

// GlobalApi.js
import axios from "axios";

const randomDogImageUrl = "https://dog.ceo/api/breeds/image/random/5"; // URL for multiple images

export const getRandomDogImage = () => {
  return axios.get(randomDogImageUrl);
};
