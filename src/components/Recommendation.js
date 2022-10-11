function Recommendation(){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <=4
    console.log(currentMonth)
    if(!isSpring){
        return <div>Ce n'est pas le moment de rempoter !</div>
    } else {
        return <div>C'est le moment de rempoter 😊</div>
    }
}

export default Recommendation