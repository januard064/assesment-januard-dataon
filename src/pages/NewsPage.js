import React from "react";


import { DUMP_DATA } from "../dump-data";

import NewsCard from "../component/news-card/news-card";
import TitleHead from "../component/title-head/title-head";
import FloattingButton from "../component/floating-button/floating-button";

const NewsPage = () => {

    return (
        <>
            <TitleHead title={"City News"} />
            {DUMP_DATA.map((data, index) => (
                <NewsCard data={data} index={index} />
            ))}
            <FloattingButton />
        </>
    )
}

export default NewsPage