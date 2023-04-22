import style from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Header() {
    return <h1 className={cx('hello')}> Hello</h1>;
}

export default Header;
