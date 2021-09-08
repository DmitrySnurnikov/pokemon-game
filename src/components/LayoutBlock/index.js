import s from './style.module.css';

const Layout = ({title,descr,colorBg, urlBg, hideBackground=false})=>{
    const styleRoot = hideBackground ? {backgroundColor:colorBg}:{backgroundImage:`url(${urlBg})`}
    console.log(styleRoot)
    return(
        <section className={s.root} style={styleRoot}>
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