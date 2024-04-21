
import PropTypes from 'prop-types';
import Feature from '../../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-300 rounded-md p-6 flex flex-col text-black'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className="text-3xl my-8 text-center" >{name}</h3>
            <div className='pl-8 flex-grow'>
                {
                    features.map((feature, i) => <Feature key={i} feature={feature}></Feature>)
                }
            </div>
            <button className="btn mt-12 bg-green-700 w-full py-4 font-bold rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;