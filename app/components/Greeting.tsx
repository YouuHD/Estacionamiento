export const Greeting = () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentHour = new Date().getHours();

    let greeting = "";

    if(currentHour < 12) {
        greeting = "Buenos días";
    } else if(currentHour < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }

    return (
        <>
            <h2 className="text-lg font-bold">{greeting}</h2>
            
        </>
    )
}
    

