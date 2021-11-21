class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: {},
             
        }
        this.addBasket = this.addBasket.bind(this);
    }

    addBasket( $id ){   //зачем здесь $ ?
        let newItems = Object.assign({}, this.state.items);
        if ($id in newItems){
            newItems[ $id ] ++;
        } else {
            newItems[ $id ] = 1;
        }
        this.setState({items: newItems});
        console.log(newItems);
    }

    removeBasket = id => {
        let newItems = {};        
        for (let i in this.state.items) {
            if(id != i){
            newItems[i] = this.state.items[i];
        }
        }
        this.setState({items: newItems});
    } 
    
    
    render() {
        let books = this.props.dataBook.map( book => {
            if (book.price){
                return <Book
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    handleAddBasket={this.addBasket}
                    key={'book_'+book.id}
            />
            } else {
                return <BookWithoutPrice 
                    id={book.id}
                    title={book.title}
                    author={book.author}
                />
            };
            
        }) 
        return [
            <Button title="Включить" handler={ () => {alert('1')}} />,
            <Basket items={this.state.items} handleRemoveBasket={this.removeBasket} />,
            <AddBookForm />,
            <SearchForm />,
            books,
            <Footer year={new Date().getFullYear()} />,
            <hr />,
            <Timer seconds="10000" />,
            <hr />,
            <Clock />,
            <hr />,
            //<Form />
        ];}
}

