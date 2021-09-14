import s from './style.module.css';
import cn from 'classnames'

const Layout = ({id,title,colorBg, urlBg, children})=>{
    const styleRoot = urlBg ? {backgroundImage:`url("${urlBg}")`}:{backgroundColor:colorBg};
    return(
        <section className={s.root} style={styleRoot} >
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                    {title}
                    <span className={s.separator}></span>
            </div>
            <div className={cn(s.desc, s.full)}>
                {children}
            </div>
                </article>
            </div>
        </section>
    )
};

export default Layout