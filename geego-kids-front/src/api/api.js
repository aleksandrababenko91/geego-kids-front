const ChallengesFetchAPI = async (token, lang) => {
  if (!token) {
    throw new Error('Dont have token for auth');
  }

  try {
    console.log('Fetching with token:', token);
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/challengecategories/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        "Accept-language": lang,
      },
    });

    if (!request.ok) {
      console.error('Mistake with API request:', await request.text());
      throw new Error('Error with  API');
    }

    const data = await request.json();
    console.log('Recieved data:', data);
    return data;
  } catch (error) {
    console.error('error request:', error);
    throw new Error('colunt get data with  API');
  }
};
