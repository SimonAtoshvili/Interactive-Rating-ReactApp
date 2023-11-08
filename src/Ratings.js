let array = [1, 2, 3, 4, 5]

function Ratings(props) {
    return (
        <div className="ratings_div">
            {array.map((element) => (
                <div key={element} className={`rating ${(props.num == element) ? "checked" : ""}`}
                    onClick={() => {
                        props.setNum(element);
                    }}>

                    {element}
                </div>
            ))}
        </div>
    )
}

export default Ratings;