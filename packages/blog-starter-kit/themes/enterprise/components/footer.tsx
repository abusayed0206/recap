import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex w-full items-center justify-center">
					<div className="flex w-full max-w-md flex-col items-center gap-5 text-center text-slate-600 dark:text-neutral-300">
						<SocialLinks />
						<p>&copy; 2024 Lutfor Rashid Sayed</p>
						<p>
							<a href="https://recap.sayed.page/privacy" className="hover:underline">
								Privacy Policy
							</a>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
