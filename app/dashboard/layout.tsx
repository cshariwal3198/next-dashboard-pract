import React from 'react';

export default function DashboardLayout({ children, analytics, notifications, user }: { children: React.ReactNode, user: any, notifications: any, analytics: any }) {
    return (
        <>
            {children}
            <div className='flex'>
                <div>
                    <div className='flex flex-col m-5 p-10 justify-center border border-spacing-5 border-black'>{user}</div>
                    <div className='flex flex-col m-5 p-10 justify-center border border-spacing-5 border-black'>{analytics}</div>
                </div>
                <div className='flex flex-col m-2 p-2 justify-center border border-spacing-5 border-black'>{notifications}</div>
            </div>
        </>
    )
}