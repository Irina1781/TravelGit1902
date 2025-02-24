import { useState } from 'react';
import Results from '../../components/Results';
import Button from "react-bootstrap/Button";
import Filter from '../../components/Filter';

export const TravelSearch = () => {

    const [resultData, setResultData ] = useState<any>([]);

    const handleSearch = (dataFromServer: any) => {

        setResultData(dataFromServer);
    }

    console.log('result', resultData);
    return (
        <div className="App">
          <h1>Найдите свое путешествие!</h1>
          <h2>Поиск идеи для отдыха</h2>
            {/*получение данных в зависимости от фильтра*/}
          <Filter handleSearch={handleSearch} />
          <Results resultData={resultData} />
        </div>
    )
};