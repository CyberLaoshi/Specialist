//Напишите код компонента Timer. Компонент должен принимать параметр seconds - через сколько секунд таймер должен сработать (показать уведомление).

// не работает

function Timer (props) {
    return <div>
                <h3>The timer is set to {props.seconds}</h3>
                <a 
                    onClick={() => {
                        setTimeout(() => {alert('The time is over!')}, props.seconds)}
                    }
                >
                    Запуск таймера 
                </a>
            </div>
    }

