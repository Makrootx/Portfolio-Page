import { useRouter } from 'next/router'
import { Link } from '@chakra-ui/react'

const myLink = ({ href, children }) => {
    const router = useRouter()
    return (
        <Link
            onClick={() => {
                router.push(href)
            }}
        >
            {children}
        </Link>
    )
}

export default myLink
