
import React, { useEffect, useState } from "react";

export const Menu = ({ children, toggle }: { children: React.ReactNode, toggle: any }) => {

    return (
        <div className={`${toggle ? 'hidden': 'block'} w-full lg:block lg:w-auto`}>
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-red dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                {children}
            </ul>
        </div>
    )
}