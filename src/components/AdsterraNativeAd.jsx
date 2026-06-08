import { useEffect, useRef } from 'react';

export default function AdsterraNativeAd() {
    const adRef = useRef(null);

    useEffect(() => {
        if (!adRef.current || adRef.current.querySelector('script')) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://pl29675588.effectivecpmnetwork.com/9ee86494953328181904e83cd758cb0f/invoke.js';

        adRef.current.appendChild(script);
    }, []);

    return (
        <div className="w-full flex justify-center my-8 overflow-hidden">
            <div id="container-9ee86494953328181904e83cd758cb0f" ref={adRef}></div>
        </div>
    );
}