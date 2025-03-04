
interface DashBoardLink {
    key: string;
    Label: string;
    path: string;
    icon: JSX.Element;
}

export const DashBoardLinks: DashBoardLink[] = [
    {
        key: 'dashboard',
        Label: 'DashBoard',
        path: '/dashboard',
        icon: (
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13.1665H10.0075" stroke="#595D61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.6666 6.08325V10.2499C16.6666 13.3926 16.6666 14.964 15.6903 15.9403C14.714 16.9166 13.1427 16.9166 9.99998 16.9166C6.85728 16.9166 5.28593 16.9166 4.30962 15.9403C3.33331 14.964 3.33331 13.3926 3.33331 10.2499V6.08325" stroke="#595D61" strokeWidth="1.5"/>
                <path d="M18.3333 7.74992L14.714 4.27949C12.4918 2.14866 11.3807 1.08325 9.99999 1.08325C8.61928 1.08325 7.50817 2.14866 5.28595 4.27949L1.66666 7.74992" stroke="#595D61" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        key: 'products',
        Label: 'Products',
        path: '/products',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21V21H3V3Z" stroke="#595D61" strokeWidth="1.5"/>
            </svg>
        )
    },
    {
        key: 'orders',
        Label: 'Orders',
        path: '/orders',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H18V18H6V6Z" stroke="#595D61" strokeWidth="1.5"/>
            </svg>
        )
    },
    {
        key: 'transaction',
        Label: 'Transaction',
        path: '/transaction',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M12 5V19" stroke="#595D61" strokeWidth="1.5"/>
            </svg>
        )
    },
    {
        key: 'coupons',
        Label: 'Coupons',
        path: '/coupons',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M12 4V20" stroke="#595D61" strokeWidth="1.5"/>
            </svg>
        )
    },
    {
        key: 'settings',
        Label: 'Settings',
        path: '/settings',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V22M2 12H22" stroke="#595D61" strokeWidth="1.5"/>
            </svg>
        )
    }
];
