import { Link } from '@remix-run/react';

type HeroProps = {
    title: string;
    subtitle?: string;
    imageUrl: string;
    ctaLink: string;
    ctaText: string;
    ctaLink2: string;
    ctaText2: string;
}

export default function Hero({ title, subtitle, imageUrl, ctaLink, ctaText, ctaLink2, ctaText2 }: HeroProps) {
    return (
        <div className="relative bg-gray-200 h-96 flex flex-col justify-center items-center text-center overflow-hidden">
            <img src={imageUrl} alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="z-10 text-white">
                <h1 className="">{title}</h1>
                {subtitle && <p className="text-xl mb-4">{subtitle}</p>}
                <Link to={ctaLink} className="">
                    {ctaText}
                </Link>
                <Link to={ctaLink2} className=''>
                    {ctaText2}
                </Link>
            </div>
        </div>
      );
}