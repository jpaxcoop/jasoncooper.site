'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
    const router = useRouter();

    const thumbs = [
		{
			title: 'Peerless Portal',
			imgSrc: '/peerless-portal.png',
			linkHref: '/projects/peerless-portal',
			description: 'I designed and developed the Peerless Portal, an ordering automation and provisioning platform for a telecommunications company.',
		},
		{
			title: 'PGi',
			imgSrc: '/pgi-landing-page.jpg',
			linkHref: '/projects/pgi',
			description: 'I built hundreds of landing pages and emails, and orchestrated dozens of campaigns for PGi. I was so efficient that I replaced two team members, and my more effective designs increased engagement measurably.',
		},
		{
			title: 'Hope Industrial Systems',
			imgSrc: '/hope-industrial-shopping.png',
			linkHref: 'https://shop.hopeindustrial.com/19-industrial-rack-mount-monitor-and-touch-screen?product_power=AC&product_window=No%20Protective%20Window%20(non-touch)&product_bezel=Powder-Coat%20Carbon%20Steel',
			description: 'I was hired to develop some temporary shopping pages while a full-scale ecommerce site was built. The "temporary" pages performed so well they are still in use years later.',
		},
		{
			title: 'Streamline Wealth',
			imgSrc: '/streamline-wealth.png',
			linkHref: '/projects/streamline-wealth',
			description: 'I designed sales materials for a financial firm. My clean, attractive design communicated complex information clearly and made multi-page forms approachable.',
		},
		{
			title: 'paxton',
			imgSrc: '/paxton.png',
			linkHref: 'https://jasonpaxtoncooper.com/paxton',
			description: 'Paxton Cooper is my son. The hard work of getting him here fell upon my wife. I contributed by building this website to keep me organized and informed.',
		},
		{
			title: 'Veritiv LeaderLink',
			imgSrc: '/leaderlink-quick-links.jpg',
			linkHref: '/projects/veritiv-leaderlink',
			description: 'LeaderLink was one of several applications I designed for Veritiv, a multi-billion-dollar paper, packaging, and facility supplies distributor.',
		},
	];

    return (
        <div className="max-w-full xl:max-w-6xl mx-auto p-4 md:px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
				{thumbs.map((thumb, index) => {
					return (
						<div key={index} className="mb-4">
							<div className="relative aspect-square rounded-lg overflow-hidden mb-4">
								<Image
									src={thumb.imgSrc}
									alt={thumb.title}
									fill
									className="object-cover hover:border-2 border-pink-500 hover:cursor-pointer"
									sizes="(max-width: 768px) 50vw, 25vw"
									onClick={() => router.push(thumb.linkHref)}
								/>
							</div>

							<h2 className="font-heading font-semibold text-xl mb-2">{thumb.title}</h2>

							<p className="mb-6">{thumb.description}</p>

							<Link
								href={thumb.linkHref}
								className="border py-1 px-3 rounded-md text-base hover:text-pink-600"
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