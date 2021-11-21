class BookWithoutPrice extends React.Component {
     render() {  
        return (
            <div 
            className=' book book-default' >
                <h3>{this.props.title}</h3>
                <img src={'http://placehold.it/100/120?text='+this.props.title} alt='' />
                <p>Автор: {this.props.author}</p>
            </div>)
    }
}