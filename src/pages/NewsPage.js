import React from "react";


import { DUMP_DATA } from "../dump-data";

import NewsCard from "../component/news-card/news-card";

const NewsPage = () => {

    return (
        <>
            {DUMP_DATA.map((data) => (
                <NewsCard data={data} />
            ))}
        </>
    )
}

export default NewsPage