import React from "react";
import { CardContainer, Listcontainer } from './List.styled';
import { Button } from "react-bootstrap";
const List = ({ results }) => {
    if (!results?.length || !Array.isArray(results)) {
        return <p>Ничего не найдено.</p>;
    }
    return (
        <Listcontainer>
            {results.map((result, index) => (
                <CardContainer key={index}>
                    <img src={result?.photo} style={{width:500, alignItems:"center", flex: 1}}/>
                    <br />
                    <strong>
                        Название: {result.name}
                    </strong>
                    <br />
                    <strong>
                        Города вылета: {result.city.join(', ')}
                    </strong>
                    <br />
                    {result.description}
                    <br />
                    <strong>
                        Географическое положение: {result.geo}
                    </strong>
                    <br />
                    <strong>
                       Климат: {result.climate}
                    </strong>
                    <br />
                    <strong>
                       Часовой пояс: {result.timezone}
                    </strong>
                    <br />
                    <strong>
                       Минимальная стоимость перелёта (туда-обратно): {result.cost +' руб.'}
                    </strong>
                    <br />
                    <Button src={result.more} target="_blank" styles={'w-full bg-violet-500'}> Подробнее </Button>
                </CardContainer>
            ))}
        </Listcontainer>
    );
};

export default List;