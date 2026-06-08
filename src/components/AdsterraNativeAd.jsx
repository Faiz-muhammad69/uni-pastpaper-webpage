import { useEffect, useRef } from 'react';

export default function AdsterraNativeAd() {
    const adContainerRef = useRef(null);

    useEffect(() => {
        // Yeh check karega ke script pehle se toh nahi lag gayi (taake React Strict Mode mein double ad na aaye)
        if (!adContainerRef.current || adContainerRef.current.querySelector('script')) {
            return;
        }

        // Script element dynamically create kar rahe hain
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://pl29675588.effectivecpmnetwork.com/9ee86494953328181904e83cd758cb0f/invoke.js';

        // Script ko div ke andar append kar diya
        adContainerRef.current.appendChild(script);
    }, []);

    return (
        <div className="w-full flex justify-center my-8 overflow-hidden">
            {/* Yeh wahi exact div ID hai jo Adsterra ne aapko di hai */}
            <div id="container-9ee86494953328181904e83cd758cb0f" ref={adContainerRef}></div>
        </div>
    );
}