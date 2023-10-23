import React from "react";
import { newsSearch } from "../api";
import { removeDuplicateNews } from "../utils";
import RandomArticle from "./RandomArticle";

const WorldRandomNews = async () => {
  const randomNews = await newsSearch("random-news");
  const filterArticles = removeDuplicateNews(randomNews);
  return (
    <div className="mt-4 w-[450px] border-1 border-gray-300">
      <h1 className="pl-2 text-2xl font-bold underline">Random World News</h1>
      {filterArticles.map((article, id) => (
        <div key={`${article?.title}-${id}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
};

export default WorldRandomNews;
