import React from "react";

const List = ({ results }) => {
    if (!results?.length || !Array.isArray(results)) {
        return <p>Ничего не найдено.</p>;
    }
    return (
        <>
            {results.map((result, index) => (
                <div key={index}>
                    <strong>
                        {result.city}, {result.type}:
                    </strong>
                    <br />
                    {result.description}
                    <br />
                    <br />
                </div>
            ))}
        </>
    );
};

export default List;