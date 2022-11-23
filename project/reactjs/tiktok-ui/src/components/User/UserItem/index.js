import styles from './UserItem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function UserItem(props) {
    const { avatar, title, type, name, follower, like } = props.dataUserItem;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('avatar-wrapper')}>
                    <span className={cx('avatar')}>
                        <img src={avatar} />
                    </span>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title-wrapper')}>
                        <h5 className={cx('title')}>{title}</h5>{' '}
                        {type ? (
                            <span className={cx('type-user')}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                        ) : (
                            <span></span>
                        )}
                    </div>
                    <span className={cx('name')}>{name}</span>
                </div>
            </div>
            <div className={cx('hover')}>
                <div className={cx('hover-avatar-wrapper')}>
                    <span className={cx('hover-avatar')}>
                        <img src={avatar} />
                    </span>
                    <button className={cx('hover-avatar-btn')}>follow</button>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title-wrapper')}>
                        <h5 className={cx('hover-title')}>{title}</h5>{' '}
                        {type ? (
                            <span className={cx('type-user')}>
                                <i className="fa-solid fa-check"></i>
                            </span>
                        ) : (
                            <span></span>
                        )}
                    </div>
                    <span className={cx('hover-name')}>{name}</span>
                </div>
                <div>
                    <span className={cx('follower')}>
                        <b>{follower} </b>follower
                    </span>
                    <span className={cx('like')}>
                        <b>{like}</b> like
                    </span>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
