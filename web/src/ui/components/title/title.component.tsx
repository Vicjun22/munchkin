import './title.style.scss';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';

export function Title() {
    
    return (
        <Link to={ROUTES.HOME_PAGE.path} id={'cy-title'} className={'title_content'}>
            <span className={'title'}>Munchkin </span>
            <span className={'title_img'}></span> 
            <span className={'title'}> Helper</span>
        </Link>
    )
}