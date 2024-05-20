import Menu from '../components/Menu.js';

export default function MenuPage() {
    document.title = 'Menu | Oristingray';

    return(
        <div className='menu-page'>
            <h1>ORISTINGRAY</h1>
            <div>
                <Menu />
            </div>
        </div>
    )
}