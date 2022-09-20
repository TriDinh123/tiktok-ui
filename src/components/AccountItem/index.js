import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import img1 from '~/assets/images/img1.PNG';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={img1} alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Nguyen Tri Dinh
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>frontend deverloper</span>
            </div>
        </div>
    );
}

export default AccountItem;
