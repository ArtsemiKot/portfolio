import style from './style.module.css'
function About() {
    return (
        <div className={style.wrapper}>
            <div className={style.wrpper_info}>
                <h1>Связь со мной</h1>
                <p>Я являюсь FullStack разработчиком.
                    Основной стек технологий: HTML, CSS(SCSS), JavaScript, TypeScript, Node.js (Express), React. Всегда открыт к изучению новых технологий и совершенствованию текущих.
                    Готов прикладывать 100+% усилий для того, чтобы стать полезным в своей сфере.
                    Буду рад подробнее ответить на ваши вопросы.</p>
                <div className={style.button}>Контакты</div>
            </div>
        </div>);
}

export default About;