import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/imgs/logo';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('logo')}>
                    <img src={logo.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <div className={cx('box-input')}>
                        <input
                            type="text"
                            placeholder="tìm kiếm tài khoản và video"
                        />
                        {/* <i class="fa-solid fa-xmark"></i> */}
                    </div>

                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className={cx('nav')}></div>
            </div>
        </header>
    );
}
export default Header;
