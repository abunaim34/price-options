
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div>
            <p className='flex items-center gap-3'><AiFillCheckCircle className='text-green-500' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
};

export default Feature;