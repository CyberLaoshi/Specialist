// Напишите код компонента Form, который не отправляет форму, пока не заполнены его поля.

class Form extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            text: "",
            checked: false
        };
    }

    checkText = (ev) => {
        const str = ev.target.value;
        this.setState({text: str});
    }

    checkChecked = (ev) => {
        if (ev.target.checked){
            this.setState({checked: true})
        } else {
            this.setState({checked: false}) // не срабатывает проверка галочки, если на галочку нажать два раза и снять checked
        };        
    }

    checkComplete = (ev) => {        
        if (this.state.text.length == 0 || this.state.checked == false) {
            ev.preventDefault();
        }
    }
    
    render() {
        return (
            <div>
                <p>Please fill and submit the form</p>
                <form>
                    <input id="text1" value={this.state.text} onChange={this.checkText} type="text" placeholder="Type smth here" />
                    <br />
                    <input id="checkBox1" checked={this.state.checked} onClick={this.checkChecked} type="checkbox" id="id-checkbox"/>
                    <br />
                    <input type="submit" onClick={this.checkComplete} />
                </form>
            </div>
        )
    }
}



