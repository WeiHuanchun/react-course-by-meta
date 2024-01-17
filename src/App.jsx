const topDeserts = [
    {
        id: 1,
        title: 'Desert 1',
        price: 10.0,
    },
    {
        id: 2,
        title: 'Desert 2',
        price: 15.0,
    },
    {
        id: 3,
        title: 'Desert 3',
        price: 20.0,
    },
    {
        id: 4,
        title: 'Desert 4',
        price: 25.0,
    },
    {
        id: 5,
        title: 'Desert 5',
        price: 30.0,
    },
];

function App() {
    const listItems = topDeserts.map((dessert) => {
        const itemText = `${dessert.title} - $${dessert.price}`;
        return <li key={dessert.id}>{itemText}</li>;
    });

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default App;
