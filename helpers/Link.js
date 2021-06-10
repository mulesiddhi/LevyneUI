import Link from 'next/link';

const LinkCustom = ({children, ...props}) => {
    
    if(!props.href) {
        props.href = "/";
    }

    if(children) {
        return <Link {...props}><a>{children}</a></Link>
    } else {
        return <Link {...props}><a>test</a></Link>
    }
}

export default LinkCustom;