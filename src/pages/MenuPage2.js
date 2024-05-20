import Menu2 from '../components/Menu2.js';

export default function MenuPage2() {
    document.title = 'Menu | Oristingray';

    return(
        <div className='menu-page'>
            <h1>ORISTINGRAY</h1>
            <div>
                <Menu2 />
            </div>
        </div>
    )
}