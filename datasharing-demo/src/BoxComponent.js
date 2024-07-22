function BoxComponent({bgcolor,text,height,weight}){
    return(<>

    <div style={
        {padding:'20px',
            height:'120px',
            width:'120px',
            'borderRadius':'10px',
            'backgroundColor':bgcolor}
            
    }>
    </div>
     {/* Get the backgroundColor and box content from parent 
        instead of blue, get the value from Parent
        instead of Box, get the text from Parent */}
    </>)
}
export default BoxComponent