const API_BASE_URL = "http://localhost:8080/api/houses";

export const getHouses = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

export const createHouse = async (house) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(house),
  });
  return response.json();
};

export const updateHouse = async (id, house) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(house),
  });
  return response.json();
};

export const deleteHouse = async (id) => {
  await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
