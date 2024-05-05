import {FC} from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css'; 

const Loader: FC = () => {
    return (
        <div className={styles.loaderStyle}>
            <RotatingLines
                visible={true}
                height={50}
                width={50}
                color="gray"
                strokeWidth={5}
                animationDuration={0.75}
                ariaLabel="rotating-lines-loading"
            />
        </div>
    );
};

export default Loader;

