export const newsHeadlines = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_NEWS}`,
    { cache: "no-store" }
  );

  return newsData.json();
};

export const newsSearch = async (keyword: string) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_NEWS}&q=${keyword}&pageSize=10`,
    { cache: "no-store" }
  );

  return newsData.json();
};
