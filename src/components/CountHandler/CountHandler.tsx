import { useState } from 'react';

import minusIcon from '../../assets/icons/icon-minus.svg';
import plusIcon from '../../assets/icons/icon-plus.svg';

type propsType = {
    className?: string,
    onChange: Function,
}

const CountHandler = ({className, onChange}: propsType): JSX.Element => {
    const [count, setCount] = useState(1);
    function handleChange(increment: number) {
        if (count + increment > 0){
            setCount(count + increment);
            onChange(count + increment);
        }
    }
    return (
        <div className={'bg-gray-100 inline-block rounded-xl ' + className}>
            <span className='p-3 px-5 cursor-pointer inline-block' onClick={() => handleChange(-1)}>
                <img className='inline' src={minusIcon} />
            </span>
            <span className='mx-8 font-semibold'>{count}</span>
            <span className='p-3 px-5 cursor-pointer inline-block' onClick={() => handleChange(+1)}>
                <img className='inline' src={plusIcon} />
            </span>
        </div>
    )
}

export default CountHandler;