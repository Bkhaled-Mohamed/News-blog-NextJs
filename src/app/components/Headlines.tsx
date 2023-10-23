import React from "react";
import { newsHeadlines } from "../api";
import { removeDuplicateNews } from "../utils";
import Article from "./Article";

const Headlines = async () => {
  const topNews = await newsHeadlines();

  const articlesFilter = removeDuplicateNews(topNews);
  return (
    <div className="w-[700px]">
      {articlesFilter.map((article, id) => (
        <div key={`${article.title}-${id}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Headlines;
