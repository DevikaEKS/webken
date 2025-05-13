

import { useEffect, useState } from 'react';

export default function BookOrderPage() {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const pathSegments = window.location.pathname
                .split('/')
                .filter(Boolean)
                .map(segment => decodeURIComponent(segment));
            setBreadcrumbs(pathSegments);
        }
    }, []);

    return (
        <section className="py-10 px-6">
            <div className="text-gray-600 text-sm mb-4">
                {breadcrumbs.map((crumb, index) => (
                    <span key={index}>
                        {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                        {index < breadcrumbs.length - 1 && ' > '}
                    </span>
                ))}
            </div>

            <div className="flex flex-row space-x-10 ">
                <div className="flex flex-col">
                    <div className="border border-[#BAB8B8] bg-[#F5F5F5] w-[500px] h-[597px] flex flex-col justify-center items-center rounded-lg ">
                        <img
                            src="/watch.png"
                            alt="Watch Your Back Book Cover"
                            className="w-[334px] h-[500px] shadow-lg"
                        />
                    </div>
                </div>
                <div className="max-w-[754px] flex flex-col space-y-3">
                    <h1 className="text-[#001040] font-semibold text-[35px] leading-10 w-full">Watch Your Back: Nine Proven Strategies to Reduce Your Neck and Back Pain Without Surgery</h1>
                    <p className="text-[#001040] font-medium">by MD Hansraj, Ken (Author), Gary Crumpler (Illustrator)</p>
                </div>
            </div>
        </section>
    );
}
