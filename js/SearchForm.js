class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        };

        this.handleChange = this.handleChange.bind(this);
            
    }

    handleChange(ev){
        let str = ev.target.value;
        this.setState({searchString: str});
        console.log(str);
    }


    render(){
        return <div className="searchForm">
            <h2>Форма поиска</h2>
            <input 
            value={this.state.searchString} 
            onChange={this.handleChange}
            />
        </div>
    }
}
