import { newsSearch } from "@/app/api";
import Article from "@/app/components/Article";
import { removeDuplicateNews } from "@/app/utils";
import React from "react";

const World = async () => {
  const worldNews = await newsSearch("world");
  const filterArticles = removeDuplicateNews(worldNews);

  return (
    <div className="w-[700px]">
      {filterArticles.map((article, id) => (
        <div key={`${article?.title}-${id}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default World;
