export default function AdsterraMiddleAd() {
    // Iframe ke andar ka mukammal HTML aur script code
    const iframeCode = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden;}</style>
            </head>
            <body>
                <script type="text/javascript">
                    atOptions = {
                        'key' : 'f603e8efa4c88431d08ccf86a64709ea',
                        'format' : 'iframe',
                        'height' : 250,
                        'width' : 300,
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="https://www.highperformanceformat.com/f603e8efa4c88431d08ccf86a64709ea/invoke.js"></script>
            </body>
        </html>
    `;

    return (
        <div className="w-full flex justify-center my-4 overflow-hidden">
            <iframe
                title="Adsterra Middle Ad"
                srcDoc={iframeCode}
                width="300"
                height="250"
                frameBorder="0"
                scrolling="no"
                style={{ border: 'none', overflow: 'hidden' }}
            ></iframe>
        </div>
    );
}