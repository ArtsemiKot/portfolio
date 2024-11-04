import style from './style.module.css'
function Header() {
    return (
        <>
            <div className={style.header_wrapper}>
                <div className={style.header_img}>
                    <div className={style.img_in}></div>
                    <div className={style.img_git}></div>
                    <div className={style.img_tg}></div>
                </div>
                <div className={style.header_info}>
                    <p>About</p>
                    <p>What I do</p>
                    <p>My Project</p>
                </div>
            </div>
        </>
    );
}

export default Header;