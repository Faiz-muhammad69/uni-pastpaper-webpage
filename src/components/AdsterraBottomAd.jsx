export default function AdsterraBottomAd() {
    // Isme width 468 aur height 60 set ki hai
    const iframeCode = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden;}</style>
            </head>
            <body>
                <script type="text/javascript">
                    atOptions = {
                        'key' : '867e491b5a66500dbcc654fdcb75bd51',
                        'format' : 'iframe',
                        'height' : 60,
                        'width' : 468,
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="https://www.highperformanceformat.com/867e491b5a66500dbcc654fdcb75bd51/invoke.js"></script>
            </body>
        </html>
    `;

    return (
        <div className="w-full flex justify-center my-4 overflow-hidden">
            <iframe
                title="Adsterra Bottom Ad"
                srcDoc={iframeCode}
                width="468"
                height="60"
                frameBorder="0"
                scrolling="no"
                style={{ border: 'none', overflow: 'hidden' }}
            ></iframe>
        </div>
    );
}