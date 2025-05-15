'use client';

import { thumbs } from '@/data/thumb';
import { handleThumbClick } from '@/utlis/thumb-utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
    const router = useRouter();

    return (
        <div className="max-w-full xl:max-w-6xl mx-auto p-4 md:px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
				{Object.entries(thumbs).map(([key, thumb]) => {
					return (
						<div key={key} className="mb-4">
							<div className="relative aspect-square rounded-lg overflow-hidden mb-4">
								<Image
									src={thumb.imgSrc}
									alt={thumb.title}
									fill
									className="object-cover hover:border-2 border-pink-500 hover:cursor-pointer"
									sizes="(max-width: 768px) 50vw, 25vw"
									onClick={() => handleThumbClick(thumb, router)}
								/>
							</div>

							<h2 className="font-heading font-semibold text-xl mb-2">{thumb.title}</h2>

							<p className="mb-6">{thumb.description}</p>

							<Link
								href={thumb.linkHref}
								className="border py-1 px-3 rounded-md text-base hover:text-pink-600"
								target={thumb.openInNewTab ? '_blank' : '_self'}
							>
								View Project
							</Link>
						</div>
					);
				})}
			</div>
        </div>
    );
}