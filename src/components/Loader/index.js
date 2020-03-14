import React from 'react';
import styles from './styles.module.scss';

const Loader = () => {
    return (
        <div>
            <div className={styles.loader}>
                <div className={styles.loaderCircle}></div>
            </div>
        </div>
    );
}

export default Loader;
