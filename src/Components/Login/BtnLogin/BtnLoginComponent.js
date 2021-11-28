import './BtnLoginStyle.css'

const BtnLoginComponent = () => {

    const btnClick = (e) =>{
        //e.preventDefault()
        console.log("click button login")
    }

    return (
        <button onClick={(e) => btnClick(e)}>Login</button>
    )
}

export default BtnLoginComponent