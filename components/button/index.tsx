import { cn } from '@/lib/utils';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    as?: 'button' | 'link';
    href?: string;
}

const Button = ({ className, children, as = 'button', href }: ButtonProps) => {
    if (as === 'link') {
        if (!href) {
            throw new Error("The 'href' prop is required when 'as' is 'link'");
        }
        return (
            <a href={href} className={cn('border border-black text-sm w-fit h-fit  py-2 px-5 bg-background text-foreground font-medium lg:text-base', className)}>
                {children}
            </a>
        );
    }

    return (
        <button className={cn('border border-black text-sm w-fit h-fit py-2 px-5 bg-background text-foreground font-medium lg:text-base', className)}>
            {children}
        </button>
    );
};

export default Button;