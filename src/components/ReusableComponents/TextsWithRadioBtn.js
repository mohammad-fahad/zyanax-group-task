import React from 'react'

function TextsWithRadioBtn({data, i}) {
    return (
        <div>
            <div key={i} className="my-3">
                <input type="radio" className="mr-3" id={data.name} name={data.name} value="male" />
                <label for={data.name}><strong className="text-muted">{data.name}</strong></label><br/>
            </div>
        </div>
    )
}

export default TextsWithRadioBtn
