const DateTime = () => {
    const today = new Date().toDateString();
    
    return (
        <div className="text-center my-2">
            <h2 className="text-xl font-bold">Weather</h2>
            <p className="text-gray-500">{today}</p>
        </div>
    );
}

export default DateTime;