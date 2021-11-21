class AddBookForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            id: 0,
            title: '',
            author: '',
            price: ''
            };
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const {id, title, author, price} = this.state; // почему фигурные скобки при деструктуризации, а не круглые?
        if (id && title && author && price) {
            dataBook.push({
                id: id, // первым идет key, потом value?
                title: title,
                author: author,
                price: price
            });        
        this.setState({
            id: 0,
            title: '',
            author: '',
            price: ''        
        });
        console.log(dataBook);
        } else {alert('Заполните поля корректно!')};
        }

    handleChange = ev => {
        const newState = {};
        newState[ev.target.name] = ev.target.value;
        this.setState(newState);
        console.log(newState);
    }
    
    render(){
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div>id <input value={this.state.id} onChange={this.handleChange} type="text" name="id"  autoComplete="off"/></div>
                <div>Название <input type="text" value={this.state.title} onChange={this.handleChange} name="title"  autoComplete="off"/></div>
                <div>Авторы <input type="text" value={this.state.author} onChange={this.handleChange} name="author"  autoComplete="off"/></div>
                <div>Цена <input type="text" value={this.state.price} onChange={this.handleChange} name="price"  autoComplete="off"/></div>
                <div><input type="submit" value="Добавить" autoComplete="off"/></div>
            </form>
        )
    }
}