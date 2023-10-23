import { news } from "../types";

export const removeDuplicateNews = (articles: any) => {
  const randomArticles: news[] = articles.articles;

  const filterArticles = randomArticles.filter(
    (article) => article?.source?.id != null
  );
  return filterArticles;
};
