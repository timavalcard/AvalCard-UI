import styles from './MenuModal.module.css'
import Link from 'next/link'

export default function MenuItem({ icon, external = false, title, description, active, href = "/", className, py = "py-2.5", m = "mb-0" }) {
    const content = (
        <div className={`${m} items-start text-gray-500 border border-transparent transition-all duration-300 hover:text-blue-custom gap-2.5 w-full rounded-2xl px-3 ${className} ${styles.menuItem} ${py}`} style={{ background: active && '#F5F7FB' }}>
            {/* <div style={{ color: 'inherit !important' }}>
                {icon}
            </div> */}
                <strong className={'text-base'}>{title}</strong>
                {description && <div className={`${styles.textGray2} text-sm`}>{description}</div>}
            
        </div>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="svgNotHover">
                {content}
            </a>
        );
    }

    return (
        <Link href={href}>
                {content}
        </Link>
    );
}
