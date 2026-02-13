const Notification = ({ message, type }) => {
    if (message == null) {
        return null
    }

    const notification = {
        color: type == "success" ? "green" : "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={notification}>
            {message}
        </div>
    )
    
}

export default Notification