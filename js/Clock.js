// Написать компонент Clock, который показывает время по Москве, Берлину и Пекину. Реализовать с использованием состояний.

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeCurrent: new Date(),
            cities: [
                {name: 'Moscow', zone: 'Europe/Moscow'},
                {name: 'Berlin', zone: 'Europe/Berlin'},
                {name: 'Beijing', zone: 'Asia/Shanghai'},
            ],
            timeMoscow: new Date().toLocaleTimeString(), // создавать текущее время через getTime
            timeBerlin: new Date().toLocaleTimeString('en-US', { timeZone: "Europe/Berlin" }),
            timeBeijing: new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Shanghai" })
        };
    }
    
    // через this.setState() можно приплюсовать часы до нужного часового пояса, чтобы не обращаться к timeZone в toLocaleTimeString?
    render() {
        setTimeout(() => this.setState({timeCurrent: new Date()}), 1000);
        return (
            <div>
                {this.state.cities.map(city => {
                    return <h4>{city.name} time is {this.state.timeCurrent.toLocaleTimeString('en-US', { timeZone: city.zone})}</h4>
                })}
                
                
            </div>
        )
    }
}