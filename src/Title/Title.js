import React, { useState } from 'react';
import './Title.css'

const Title = () => {
    const [title, setTitle] = useState('This is dummy title')
    const [editTitle, setEditTitle] = useState(false)

    const titleSubmit = e => {
        e.preventDefault()
        setEditTitle(false)
    }

    const blurHandler = e => {
        setEditTitle(false)
    }
    
    return (
        <div>
            {
                editTitle ? (
                    <form onSubmit={titleSubmit}>
                        <div className="form-group">
                            <input onBlur={(e) => blurHandler(e)} type="text" className="form-control" placeholder="Edit your title" onChange={e => setTitle(e.target.value)} value={title} />
                        </div>
                    </form>
                ) : (
                        <div className="d-flex title">
                            <h1 className="font-weight-normal"> {title} </h1>
                            <span onClick={() => setEditTitle(true)} className="ml-auto">
                                <i className="fas fa-pen"></i>
                            </span>
                        </div>
                    )
            }
        </div>
    );
};

export default Title;