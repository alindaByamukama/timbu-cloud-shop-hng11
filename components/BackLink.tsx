import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const BackLink: React.FC<{ href: string }> = ({ href }) => {
    return (
        <Link href={href}>
            <a className="flex items-center text-blue-600">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back
            </a>
        </Link>
    );
};

export default BackLink;
