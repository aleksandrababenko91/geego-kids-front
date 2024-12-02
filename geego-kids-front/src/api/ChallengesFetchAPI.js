const ChallengesFetchAPI = async (token, lang = 'fi') => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/challengecategories/`, // Получаем список категорий
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`, // Авторизация через токен
        "Accept-language": lang, // Язык (по умолчанию 'fi')
      },
    }
  );
  return await request.json(); // Возвращаем данные из API
};

export default ChallengesFetchAPI;
