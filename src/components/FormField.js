import React, { useState } from 'react'


function FormField( {getData} ) {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [alert, setAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            console.log("Not a Valid Input")
            setAlert(true);
        }
        else {
            console.log(weight,height);
            getData(weight,height);
            setAlert(false);
        }
    }
    return (
        <div className="col-sm-4 shadow rounded px-5">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col col-sm-6">
                        <label className="form-label">Weight(kg)</label>
                        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="form-control" placeholder="EG: 70KG" aria-label="Weight" required />
                    </div>
                    <div className="col col-sm-6">
                        <label className="form-label">Height(m)</label>
                        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="form-control" placeholder="EG: 1.9M" aria-label="Height" required />
                    </div>
                </div>

                <div className="col">
                    <input type="submit" className="btn btn-primary my-3" value="Get BMI" aria-label="submit" />
                </div>
            </form>
            {alert && (
                <div className="alert alert-danger" role="alert">
                    Please enter a valid Input
                </div>
            )}
        </div>
    )
}

export default FormField
