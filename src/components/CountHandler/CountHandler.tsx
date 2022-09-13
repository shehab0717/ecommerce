
import minusIcon from '../../assets/icons/icon-minus.svg';
import plusIcon from '../../assets/icons/icon-plus.svg';


const CountHandler = ():JSX.Element => {
    return (
        <div className='bg-gray-100 inline-block rounded-xl'>
            <span className='p-3 px-5 cursor-pointer inline-block'><img className='inline' src={minusIcon}/></span>
            <span className='mx-8 font-semibold'>0</span>
            <span className='p-3 px-5 cursor-pointer inline-block'><img className='inline' src={plusIcon}/></span>
        </div>
    )
}

export default CountHandler;