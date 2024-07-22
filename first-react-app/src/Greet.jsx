function Greet() {
    //javascript code
    let name = 'James'
    return (
        //Any html tags (we dont print inconsole, we return it on the browser, so use html code)
        <>  
            {/* comment in JSX */}
            {/* root tag- empty tag - react fragment */}
            <div className="App">Welcome {name}!!!</div>
            <b>Good Morning!!!</b>
        </>
    );
}
export default Greet