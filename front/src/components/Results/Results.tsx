import React, { FC } from "react";
import List from './components/List';

interface ResultInterface {
    resultData: any[]
}

const Results: FC<ResultInterface> = ({ resultData }) => {
    return <List results={resultData} />;
};

export default Results;
