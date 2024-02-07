export const fetchCategories = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3001/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "this is the error");
  }
};
