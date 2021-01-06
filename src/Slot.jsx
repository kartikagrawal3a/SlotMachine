import React from 'react';

const Slot = (props) => {
    
    let a = props.a;
    let b = props.b;
    let c = props.c;

    const Alltrue = () => {
        return(
            <>
                <div className="inner">
                    <h1>{`${a} ${b} ${c}`}</h1>
                    <p>All Three are Same</p>
                </div>
            </>
        );
    }

    const Twotrue = () => {
        return(
            <>
                <div className="inner">
                    <h1>{`${a} ${b} ${c}`}</h1>
                    <p>Two of Them are Same</p>
                </div>
            </>
        );
    }

    const Notrue = () => {
        return(
            <>
                <div className="inner">
                    <h1>{`${a} ${b} ${c}`}</h1>
                    <p>All Three are Not Same</p>
                </div>
            </>
        );
    }

    if (a === b && b === c) {
        return(
            <Alltrue />
        );
    }
    else if((a === b && b !== c) || (a === c && b !== c) || (b === c && a!==c)){
        return(
            <Twotrue />
        );
    }
    else{
        return(
            <Notrue />
        );
    }
}

export default Slot;