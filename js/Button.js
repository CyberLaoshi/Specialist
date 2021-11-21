function Button(props){

    const [count, setCount] = React.useState(0); // Уточните, пожалуйста, useState здесь только для onClick? Для чего еще его можно использовать? 
    
    return <a
    className="btn btn-success"
    onClick={() => {
        setCount(count + 1);
        this.handler;
    }}
    >
        {props.title} {count}
    </a>
    
}

