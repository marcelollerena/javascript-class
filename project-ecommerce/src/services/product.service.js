import { BASE_URL } from "../utils/constants.js";

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
  } catch (error) {
    console.error("Ocurrio error trayendo productos", error);
  }
};
