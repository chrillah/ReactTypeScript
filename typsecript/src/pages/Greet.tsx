interface GreetProps {
    name : string,
    age : number
}

export const Greet = (props : GreetProps) => {
    return (
        <>
            <div>
                <h2>Hej {props.name} och välkommen</h2>
                <h2>Du är år {props.age +1} gammal</h2>
            </div>
        </>
    )
}
