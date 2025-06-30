import TitleWithBlue from "../TitleWithBlue";
import styles from "./ScrollBox.module.css";

export default function ScrollBox({title, children}) {
    return (
        <div className="pt-10">
            <TitleWithBlue>
                {title}
            </TitleWithBlue>

            <div className={`text-[#191919] ${styles.box}`}>
                {children}
            </div>
        </div>
    );
}