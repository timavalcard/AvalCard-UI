import styles from './CartBox.module.css'

export default function CartBox() {
    return (
        <div className={`${styles.shoppingCart} cursor-pointer`}>
            <div className={`bg-green-light ${styles.badgee}`}>2</div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2.94118H3.74001C4.82001 2.94118 5.67 3.87118 5.58 4.94118L4.75 14.9012C4.61 16.5312 5.89999 17.9312 7.53999 17.9312H18.19C19.63 17.9312 20.89 16.7512 21 15.3212L21.54 7.82118C21.66 6.16118 20.4 4.81117 18.73 4.81117H5.82001" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.25 22.9412C16.9404 22.9412 17.5 22.3815 17.5 21.6912C17.5 21.0008 16.9404 20.4412 16.25 20.4412C15.5596 20.4412 15 21.0008 15 21.6912C15 22.3815 15.5596 22.9412 16.25 22.9412Z" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 22.9412C8.94036 22.9412 9.5 22.3815 9.5 21.6912C9.5 21.0008 8.94036 20.4412 8.25 20.4412C7.55964 20.4412 7 21.0008 7 21.6912C7 22.3815 7.55964 22.9412 8.25 22.9412Z" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 8.94118H21" stroke="#464646" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}