import sun from '../assets/sun.svg'
import water from '../assets/sun.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? <img src={sun} alt='soleil' className='lmj-logo' />: <img src={water} alt="goutte d'eau" className='lmj-logo' />

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale