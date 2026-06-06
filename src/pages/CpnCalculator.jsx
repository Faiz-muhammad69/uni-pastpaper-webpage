import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CpnCalculator() {
    // Input States
    const [sscObt, setSscObt] = useState('');
    const [sscTotal, setSscTotal] = useState('');
    const [hscObt, setHscObt] = useState('');
    const [hscTotal, setHscTotal] = useState('');
    const [testScore, setTestScore] = useState('');

    // Result States
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    // Calculation Logic
    const calculateCPN = (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        const sscO = parseFloat(sscObt);
        const sscT = parseFloat(sscTotal);
        const hscO = parseFloat(hscObt);
        const hscT = parseFloat(hscTotal);
        const test = parseFloat(testScore);

        // Validation
        if (isNaN(sscO) || isNaN(sscT) || isNaN(hscO) || isNaN(hscT) || isNaN(test)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }
        if (sscO > sscT || hscO > hscT) {
            setError("Obtained marks cannot be greater than total marks.");
            return;
        }
        if (test > 100 || test < 0) {
            setError("Test score must be between 0 and 100.");
            return;
        }

        // CPN Formula
        const matricPercent = (sscO / sscT) * 100;
        const interPercent = (hscO / hscT) * 100;
        const finalCpn = (matricPercent * 0.1) + (interPercent * 0.3) + (test * 0.6);

        setResult(finalCpn.toFixed(2));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 p-6 md:p-12 text-white">
            <div className="max-w-6xl mx-auto">

                {/* Back Link & Header */}
                <Link to="/" className="text-blue-200 hover:text-white hover:underline mb-8 inline-block font-semibold">
                    ← Back to Home
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Column: Text & SEO Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-6 drop-shadow-lg">
                            UNIVERSITY OF SINDH
                        </h1>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Official CPN Calculator</h2>
                        <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                            Easily calculate your Cumulative Prerequisite Number (CPN) for the University of Sindh admissions. Just input your Matric, Intermediate marks, and Entry Test score (or LAT score for the LLB department), then press "Calculate" to get your instant result.
                        </p>

                        {/* AD PLACEHOLDER (Left Side) */}
                        <div className="bg-white/10 border border-dashed border-white/30 p-4 rounded-lg text-center text-sm text-white/50 min-h-[250px] flex items-center justify-center backdrop-blur-sm">
                            [Google AdSense - Square Display Ad]
                        </div>
                    </div>

                    {/* Right Column: Calculator Form */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-white/10 backdrop-blur-md border border-cyan-400/50 p-8 rounded-2xl shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-md">Calculate Your CPN</h3>

                            <form onSubmit={calculateCPN} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-blue-100">SSC Obtained</label>
                                        <input type="number" value={sscObt} onChange={(e) => setSscObt(e.target.value)} placeholder="e.g. 750" className="w-full p-3 rounded-lg bg-black/20 border border-transparent focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-blue-100">SSC Total</label>
                                        <input type="number" value={sscTotal} onChange={(e) => setSscTotal(e.target.value)} placeholder="e.g. 850" className="w-full p-3 rounded-lg bg-black/20 border border-transparent focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-blue-100">HSC Obtained</label>
                                        <input type="number" value={hscObt} onChange={(e) => setHscObt(e.target.value)} placeholder="e.g. 800" className="w-full p-3 rounded-lg bg-black/20 border border-transparent focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-blue-100">HSC Total</label>
                                        <input type="number" value={hscTotal} onChange={(e) => setHscTotal(e.target.value)} placeholder="e.g. 1100" className="w-full p-3 rounded-lg bg-black/20 border border-transparent focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 text-blue-100">Test Score / LAT Score (out of 100)</label>
                                    <input type="number" value={testScore} onChange={(e) => setTestScore(e.target.value)} placeholder="Enter your test score" className="w-full p-3 rounded-lg bg-black/20 border border-transparent focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50" />
                                </div>

                                <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold py-3 rounded-lg mt-4 transition-transform hover:scale-[1.02] active:scale-95">
                                    Calculate CPN
                                </button>
                            </form>

                            {/* Error & Result Display */}
                            {error && <p className="text-red-400 text-center mt-4 font-semibold animate-pulse">{error}</p>}
                            {result && (
                                <div className="mt-6 text-center p-4 bg-green-500/20 border border-green-400 rounded-lg">
                                    <p className="text-sm text-green-200 uppercase tracking-wide">Your Calculated CPN</p>
                                    <p className="text-4xl font-bold text-green-400">{result}%</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* AD PLACEHOLDER (Bottom) */}
                <div className="mt-12 bg-white/10 border border-dashed border-white/30 p-4 rounded-lg text-center text-sm text-white/50 min-h-[90px] flex items-center justify-center backdrop-blur-sm">
                    [Google AdSense - Horizontal Banner Ad]
                </div>
            </div>
        </div>
    );
}