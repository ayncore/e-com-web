import React from 'react'

import { cls } from '@/utils/cls'

interface MaxWidthWrapperProps {


    children?: React.ReactNode
    className?: string

}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
    return (
        <div className={cls("flex flex-col  items-center justify-center py-5 px-5 w-full max-w-full mx-auto lg:py-10 lg:px-10 ", className)}>
            {children}
        </div >
    );
}


export default MaxWidthWrapper