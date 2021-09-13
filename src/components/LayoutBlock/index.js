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
<<<<<<< HEAD
            <div className={`${s.desc} ${s.full}`}>
=======
            <div className={cn(s.desc, s.full)}>
>>>>>>> 84e68ad5ab8a8021ccefcb861dab1fac289b198d
                {children}
            </div>
                </article>
            </div>
        </section>
    )
};

export default Layout