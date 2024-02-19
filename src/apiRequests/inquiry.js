export const createInquiry = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:3001/inquiry", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error, "this is the error from enquiry");
  }
};
