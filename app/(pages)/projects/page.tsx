'use client';

import { projectThumbs } from '@/data/project-thumbs';
import { handleClick } from '@/utlis/projectThumbUtils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const router = useRouter();

  return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
			{Object.entries(projectThumbs).map(([key, thumb]) => {
				return (
					<div key={key} className="mb-4">
						<div className="relative aspect-square rounded-lg overflow-hidden mb-4">
							<Image
								src={thumb.imgSrc}
								alt={thumb.title}
								fill
								className={`object-cover border-pink-500 ${thumb.linkHref ? 'hover:cursor-pointer  hover:border-2' : ''}`}
								sizes="(max-width: 768px) 50vw, 25vw"
								onClick={() => handleClick(thumb, router)}
							/>
						</div>

						<h2 className="font-heading font-semibold text-xl mb-2">{thumb.title}</h2>

						<p className="mb-6">{thumb.description}</p>

						{thumb.linkHref &&
							<Link
								href={thumb.linkHref}
								className="border py-1 px-3 rounded-md text-base hover:text-pink-600"
								target={thumb.openInNewTab ? '_blank' : '_self'}
							>
								View Project
							</Link>
						}
					</div>
				);
			})}
		</div>
  );
}