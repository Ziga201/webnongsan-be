import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShop, faUser, faClipboardUser, faBlog } from '@fortawesome/free-solid-svg-icons';
import style from './Sidebar.module.scss';
import { Routes, Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Link to="/product" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faBox} />
                    </div>
                    <div className={cx('desc')}>Danh mục sản phẩm</div>
                </div>
            </Link>
            <Link to="/shop" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faShop} />
                    </div>
                    <div className={cx('desc')}>Danh mục cửa hàng</div>
                </div>
            </Link>
            <Link to="/account" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={cx('desc')}>Danh mục tài khoản</div>
                </div>
            </Link>
            <Link to="/staff" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faClipboardUser} />
                    </div>
                    <div className={cx('desc')}>Danh mục nhân viên</div>
                </div>
            </Link>
            <Link to="/blog" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faBlog} />
                    </div>
                    <div className={cx('desc')}>Danh mục bài viết</div>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;
