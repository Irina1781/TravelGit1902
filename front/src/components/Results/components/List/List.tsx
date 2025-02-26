import React from "react";
import { CardContainer, Listcontainer } from './List.styled';
import { Button } from "react-bootstrap";

const List = ({ results, climate, timezone}) => {
    if (!results?.length || !Array.isArray(results)) {
        return <p>Ничего не найдено.</p>;
    }

    const getClimateName = (id) => {
        if (climate?.length) {
            const nameClimate = climate.find(item => item.id === id);
            if (nameClimate?.climate) {
                return nameClimate.climate
            }
        }
        return '-'
    }

    const getTimezoneName = (id) => {
        if (timezone?.length) {
            const nameTimezone = timezone.find(item => item.id === id);
            if (nameTimezone?.timezone) {
                return nameTimezone.timezone
            }
        }
        return '-'
    }

    return (
        <Listcontainer>
            {results.map((result, index) => (
                <CardContainer key={index}>
                    <div className="Img">
                    <img src={result?.photo} style={{width:490}}/>
                    <br /></div>
                    <div className="Text">
                    <strong>
                        Название: {result.name}
                    </strong>
                    <br /><br />
                    <strong>
                        Города вылета: {result.city.join(', ')}
                    </strong>
                    <br /><br />
                    {result.description}
                    <br /> <br />
                    <strong>
                       Географическое положение: {result.geo}
                    </strong>
                    <br /><br />
                    <strong>
                       Климат: {getClimateName(result.climate)}
                    </strong>
                    <br /><br />
                    <strong>
                       Часовой пояс: {getTimezoneName(result.timezone)}
                    </strong>
                    <br /><br />
                    <strong>
                       Минимальная стоимость перелёта (туда-обратно): {result.cost +' руб.'}
                    </strong>
                    <br /><br />
                    <a href={result?.more} className="Button" target="_blank"> Подробнее </a></div>
                </CardContainer>
            ))}
        </Listcontainer>
    );
};

export default List;