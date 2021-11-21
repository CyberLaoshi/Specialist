class Basket extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }
    
    getIndexById( id ) {
        for (let p in dataBook) {
            if (id == dataBook[p]['id']){
                return p;
            } 
        }
    }

    deleteItem = ev => {
        ev.preventDefault();
        this.props.handleRemoveBasket(ev.target.id); // просмотри еше раз
    }

    render = () => {
        let items = [], sum = 0;
        for (let i in this.props.items){
            let j = this.getIndexById( i );
            sum += dataBook[j]['price'] * this.props.items[i];
            items.push(
                <div className='basket-item' key={i}>
                    <a href='#'>{dataBook[j]['title']}</a>
                    <span>{this.props.items[i]}шт.</span>
                    <span>{dataBook[j]['price'] * this.props.items[i]} руб.</span>
                    <a href='#' onClick={this.deleteItem} id={i}>Удалить</a>
            </div>
            )
        }
        items.push(
            <div className='basket-item' key='0'>
                <span>Итого: {sum}</span>
            </div>
        )
        
        
        return (
            <div className='basket'>
                <h3>Корзина</h3>
                {items}
            </div>
        )
    }
}
