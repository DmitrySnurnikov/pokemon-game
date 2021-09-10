import s from './style.module.css';

const Layout = ({title,descr,colorBg, urlBg})=>{
    const styleRoot = urlBg ? {backgroundImage:`url("${urlBg}")`}:{backgroundColor:colorBg};
    console.log(colorBg)
    return(
        <section className={s.root} style={styleRoot} >
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                    {title}
                    <span className={s.separator}></span>
            </div>
            <div className={`{s.desc} {s.full}`}>
                {descr}
            </div>
                </article>
            </div>
        </section>
    )
};

export default Layout