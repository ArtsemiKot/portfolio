import style from './style.module.css'
import foto from '../../assets/nonefoto.jpg'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
function Preview() {
    const arr_skills = [
        {
            id: 1, name: 'Frontend', decription: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS,SCSS', 'Redux Toolkit', 'Material UI', 'Mantine', 'Framer motion', 'Styled components'], icon: icon1
        },
        { id: 2, name: 'Backend', decription: ['JavaScript', 'TypeScript', 'Node.js', 'Express'], icon: icon2 },
        { id: 3, name: 'Other technologies', decription: ['API RESTful', 'MySQL', 'PostgreSQL', 'Figma', 'Git'], icon: icon3 }]
    const arr_text_skills = [
        { id: 1, name: 'I`ve had experiences with', decription: ['Coding React.js', 'Coding CSS3', 'Coding JavaScript', 'Coding TypeScript', 'Studying Node.js', 'basics Studying API RESTful', 'Studying User Experience'] },
        { id: 2, name: 'I have years of experience with', decription: ['Coding React.js', 'Coding CSS3', 'Coding JavaScript', 'Coding TypeScript', 'Studying Node.js', 'basics Studying API RESTful', 'Studying User Experience'] },
        { id: 3, name: 'I work and study about', decription: ['Coding React.js', 'Coding CSS3', 'Coding JavaScript', 'Coding TypeScript', 'Studying Node.js', 'basics Studying API RESTful', 'Studying User Experience'] }]

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.infome}>
                    <img src={foto} alt='img_foto'></img>
                    <div className={style.text}>
                        <p>Всем привет! Меня зовут Артемий Кот, и я</p>
                        <h2>Full Stack Developer</h2>
                        <p>который желает получить должность разработчика JavaScript. Обладаю навыками как в
                            области Back, так и во Front-end разработки.</p>
                    </div>
                </div>
                <div className={style.skills}>
                    {arr_skills.map(el => (
                        <div className={style.item_wrapper}>
                            <img className={style.icon_img} src={el.icon} alt="img" />
                            <div className={style.line}></div>
                            <div className={style.text_skills}>
                                <p>{el.name}</p>
                                {el.decription.map((elem, i) => (
                                    <ul key={i}>
                                        <li>{elem}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Preview;