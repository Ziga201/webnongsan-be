import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faMagnifyingGlass, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';
import avatar from './img/avatar.jpg';
import logo from './img/logo.svg';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('logo')}>
                <img src={logo} />
            </div>
            <div className={cx('info')}>
                <div className={cx('function')}>
                    <div className={cx('element')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={cx('element')}>
                        <span>Tạo mới </span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className={cx('element')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('notify')}>
                    <div className={cx('element')}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className={cx('element')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={cx('element')}>
                        <img src={avatar} width="35px" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
