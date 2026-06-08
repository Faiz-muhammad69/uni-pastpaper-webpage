import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import entryTestData from '../data/entryTests.json';
import departmentsData from '../data/departments.json';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';

// React-PDF CSS imports
// React-PDF ke default styles (text selection aur annotations ke liye)
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Vite aur React-PDF ka worker setup (CDN use kar rahe hain taake build me koi error na aaye)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PaperViewer() {
    const { paperId } = useParams();

    // PDF Viewer States
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    // Dono data files se target paper dhoondna
    const allPapers = [
        ...entryTestData.flatMap(year => year.papers),
        ...departmentsData.flatMap(dept => dept.papers)
    ];

    const paper = allPapers.find(p => p.id === paperId);

    // Agar paper na mile
    if (!paper) {
        return (
            <div className="text-center p-12">
                <h2 className="text-2xl font-bold text-red-600">Paper Not Found!</h2>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">Go Back Home</Link>
            </div>
        );
    }

    // PDF Load Success Handler
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
        setLoading(false);
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <Link to={-1} className="text-sm font-semibold text-blue-600 hover:underline mb-4 inline-block">
                ← Back to Papers
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                {paper.title}
            </h1>

            {/* --- ADSENSE PLACEHOLDER (TOP AD) --- */}
            <div className="my-8 w-full flex justify-center">
                <AdsterraNativeAd />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* Humne <a> tag ko hata kar <Link> laga diya hai jo SecureDownload page par jayega */}
                <Link
                    to={`/download/${paper.id}`}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors flex items-center gap-2"
                >
                    📥 Download Original PDF
                </Link>
            </div>

            {/* Custom PDF Viewer Window */}
            <div className="bg-gray-200 p-4 rounded-xl shadow-inner mb-2 flex flex-col items-center min-h-[600px] justify-center overflow-x-auto border border-gray-300">
                {loading && <p className="text-gray-600 animate-pulse">Loading Document...</p>}

                <Document
                    file={paper.fileUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading=""
                    className="shadow-lg border border-gray-300 bg-white"
                >
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false} // Clean rendering ke liye
                        renderAnnotationLayer={false}
                        width={Math.min(window.innerWidth * 0.9, 800)} // Responsive width
                    />
                </Document>
            </div>

            {/* Pagination Controls */}
            {numPages && (
                <div className="flex justify-center items-center gap-4 mb-8 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <button
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(prev => prev - 1)}
                        className={`px-4 py-2 font-bold rounded ${pageNumber <= 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Previous
                    </button>
                    <span className="text-gray-700 font-semibold">
                        Page {pageNumber} of {numPages}
                    </span>
                    <button
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(prev => prev + 1)}
                        className={`px-4 py-2 font-bold rounded ${pageNumber >= numPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* --- ADSENSE PLACEHOLDER (BOTTOM AD) --- */}
            <div className="my-8 w-full flex justify-center">
                <AdsterraBottomAd />
            </div>
        </div>
    );
}