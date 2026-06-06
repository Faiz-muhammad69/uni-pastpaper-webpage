import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import entryTestData from '../data/entryTests.json';
import departmentsData from '../data/departments.json';

export default function SecureDownload() {
    const { paperId } = useParams();
    const [timeLeft, setTimeLeft] = useState(15); // 15 seconds timer
    const [canDownload, setCanDownload] = useState(false);

    // PaperId ke zariye actual PDF ka URL dhoondna
    const allPapers = [
        ...entryTestData.flatMap(year => year.papers),
        ...departmentsData.flatMap(dept => dept.papers)
    ];
    const paper = allPapers.find(p => p.id === paperId);

    useEffect(() => {
        // Timer Logic
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            setCanDownload(true);
        }
    }, [timeLeft]);

    // Agar URL me ghalat ID aa jaye
    if (!paper) {
        return (
            <div className="text-center p-12 min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-red-600">File Not Found!</h2>
                <Link to="/entry-tests" className="text-blue-500 underline mt-4 font-semibold">Go Back to Papers</Link>
            </div>
        );
    }

    // Download Function
    const handleDownload = () => {
        // Yeh tareeqa PDF ko properly download karne ke liye best hai
        const link = document.createElement('a');
        link.href = paper.fileUrl;
        link.download = paper.fileUrl.split('/').pop(); // Extract filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 md:p-12 min-h-screen text-center">

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Secure Document Download</h1>
            <p className="text-gray-500 mb-8 font-medium">File: {paper.title}</p>

            {/* TOP AD PLACEHOLDER - Yeh ad user 15 second tak lazmi dekhega */}
            <div className="bg-gray-50 border border-dashed border-gray-300 p-4 mb-8 text-center text-sm text-gray-400 rounded-xl min-h-[250px] flex items-center justify-center shadow-inner">
                [Google AdSense - Square Display Ad]
            </div>

            {/* Timer Section */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-8">
                {!canDownload ? (
                    <div>
                        <div className="text-7xl font-black text-blue-600 mb-6 animate-pulse drop-shadow-sm">
                            {timeLeft}
                        </div>
                        <p className="text-lg text-gray-600 font-medium">
                            Please wait while we prepare your PDF document...
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Downloading authentic past papers directly from our secure servers.
                        </p>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <p className="text-green-600 font-bold mb-6 text-xl">Your file is ready!</p>
                        <button
                            onClick={handleDownload}
                            className="bg-green-500 hover:bg-green-600 text-white font-extrabold text-xl py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center mx-auto gap-3"
                        >
                            <span className="text-2xl">📥</span> Download Now
                        </button>
                    </div>
                )}
            </div>

            {/* BOTTOM AD PLACEHOLDER */}
            <div className="bg-gray-50 border border-dashed border-gray-300 p-4 text-center text-sm text-gray-400 rounded-xl min-h-[100px] flex items-center justify-center">
                [Google AdSense - Horizontal Banner Ad]
            </div>

        </div>
    );
}