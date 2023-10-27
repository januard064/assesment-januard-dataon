import React from "react";

import { useNavigate } from "react-router-dom";


import { DUMP_DATA } from "../dump-data";

import ArrowLeft from "../component/icons/arrow-left";

import NewsCard from "../component/news-card/news-card";
import TitleHead from "../component/title-head/title-head";
import FloattingButton from "../component/floating-button/floating-button";

const NewsPage = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate(`/`)
    }

    return (
        <>
            <div style={{ marginTop:'20px', cursor:'pointer' }} onClick={handleLogout}>
                <ArrowLeft />
            </div>
            <TitleHead title={"City News"} />
            {DUMP_DATA.map((data, index) => (
                <NewsCard data={data} index={index} />
            ))}
            <FloattingButton />
        </>
    )
}

export default NewsPage