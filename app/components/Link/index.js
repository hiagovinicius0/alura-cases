import { Text } from '@/app/theme/components';
import NextLink from 'next/link';

export default function Link({ children, href, ...props}) {
    return (
        <NextLink href={href} passHref>
            <Text as="span" {...props}>{children}</Text>
        </NextLink>
    );
}