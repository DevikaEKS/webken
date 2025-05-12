

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

            <div>
                {/* Page content goes here */}
            </div>
        </section>
    );
}
