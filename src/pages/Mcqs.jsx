import { useState, useEffect } from 'react';
import mcqsData from '../data/mcqsData.json';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';

export default function Mcqs() {
    // Unique Categories Extract karna
    const categories = [...new Set(mcqsData.map(mcq => mcq.category))];
    const SUBJECT_OPTIONS = ['Mixed Subjects', ...categories];

    // States for Test Flow: 'setup', 'running', 'completed'
    const [testState, setTestState] = useState('setup');
    const [selectedSubject, setSelectedSubject] = useState(SUBJECT_OPTIONS[0]);

    // Test Data States
    const [testQuestions, setTestQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [userAnswers, setUserAnswers] = useState({});
    const [finalScore, setFinalScore] = useState(0);

    // Timer State (e.g., 30 minutes = 1800 seconds)
    const [timeLeft, setTimeLeft] = useState(1800);

    // Timer Logic using useEffect
    useEffect(() => {
        let timer;
        if (testState === 'running' && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && testState === 'running') {
            submitTest(); // Time up hone par auto-submit
        }
        return () => clearInterval(timer);
    }, [testState, timeLeft]);

    // Format Time to MM:SS
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Shuffle Array Function
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // Start Test Handler
    const handleStartTest = () => {
        let pool = [];
        if (selectedSubject === 'Mixed Subjects') {
            pool = [...mcqsData];
        } else {
            pool = mcqsData.filter(mcq => mcq.category === selectedSubject);
        }

        const selectedQuestions = shuffleArray(pool).slice(0, 30);

        setTestQuestions(selectedQuestions);
        setCurrentIndex(0);
        setUserAnswers({});
        setSelectedOption(null);
        setFinalScore(0);
        setTimeLeft(1800); // Reset timer to 30 mins
        setTestState('running');
    };

    // Submit Test Logic
    const submitTest = () => {
        let score = 0;
        testQuestions.forEach(mcq => {
            const answerGiven = mcq.id === testQuestions[currentIndex].id && selectedOption
                ? selectedOption
                : userAnswers[mcq.id];

            if (answerGiven === mcq.correctAnswer) {
                score += 1;
            }
        });
        setFinalScore(score);
        setTestState('completed');
    };

    // Next Question Handler
    const handleNext = () => {
        if (!selectedOption) return;

        // Answer save karna
        setUserAnswers(prev => ({
            ...prev,
            [testQuestions[currentIndex].id]: selectedOption
        }));

        if (currentIndex + 1 < testQuestions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            submitTest();
        }
    };

    // Restart Test
    const handleRestart = () => {
        setTestState('setup');
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">

            {/* HEADER */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    Sindh Uni Mock Test CBT
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Real-time Computer Based Test experience with actual past paper questions.
                </p>
            </div>

            {/* ================= STAGE 1: SETUP SCREEN ================= */}
            {testState === 'setup' && (
                <div className="animate-fade-in space-y-12">
                    <AdsterraNativeAd />

                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Configure Your Test</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-lg">Select Subject</label>
                                <select
                                    value={selectedSubject}
                                    onChange={(e) => setSelectedSubject(e.target.value)}
                                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 text-gray-800 text-lg font-medium transition-colors cursor-pointer"
                                >
                                    {SUBJECT_OPTIONS.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                                    <span className="block text-sm text-blue-600 font-bold mb-1">Questions</span>
                                    <span className="font-black text-2xl text-blue-900">30</span>
                                </div>
                                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                                    <span className="block text-sm text-red-600 font-bold mb-1">Time Limit</span>
                                    <span className="font-black text-2xl text-red-900">30 Min</span>
                                </div>
                            </div>

                            <div className="my-4">
                                <AdsterraMiddleAd />
                            </div>

                            <button
                                onClick={handleStartTest}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl shadow-lg transition-transform active:scale-95 text-xl tracking-wide"
                            >
                                START TEST NOW
                            </button>
                        </div>
                    </div>

                    {/* SEO FRIENDLY CONTENT SECTION */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-600 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Take the UoS Jamshoro Mock Test?</h2>
                        <p>
                            Securing admission at the <strong>University of Sindh (UoS) Jamshoro</strong> requires a highly competitive CPN. Our free online Mock Test simulator is designed specifically for pre-entry test preparation. By practicing these highly repeated General Knowledge, English, Science, and Maths questions, you can identify your weak areas and improve your time management skills.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-4">Features of our CBT Simulator:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Authentic Past Papers:</strong> All MCQs are extracted directly from UoS previous entry test phases.</li>
                            <li><strong>Real-time Timer:</strong> A strict 30-minute countdown helps you adapt to the pressure of the actual examination hall.</li>
                            <li><strong>Instant Score Calculation:</strong> Get your complete result and percentage immediately after submitting the test.</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-500">
                            Whether you are applying for BS IT, Software Engineering, LLB, or BBA, practicing these customized MCQs will give you the edge you need to secure your seat.
                        </p>
                    </div>
                </div>
            )}

            {/* ================= STAGE 2: RUNNING TEST ================= */}
            {testState === 'running' && testQuestions.length > 0 && (
                <div className="animate-fade-in space-y-6">

                    {/* Top Bar: Progress & Timer */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center sticky top-4 z-10">
                        <div className="font-bold text-gray-600 text-lg md:text-xl">
                            Q <span className="text-blue-600">{currentIndex + 1}</span><span className="text-sm text-gray-400">/{testQuestions.length}</span>
                        </div>

                        {/* Timer Display */}
                        <div className={`font-mono font-bold text-xl px-4 py-1.5 rounded-full border-2 ${timeLeft < 300 ? 'text-red-600 border-red-200 bg-red-50 animate-pulse' : 'text-gray-800 border-gray-200 bg-gray-50'
                            }`}>
                            ⏱ {formatTime(timeLeft)}
                        </div>

                        <div className="hidden md:block text-sm font-semibold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full border border-blue-100">
                            {selectedSubject}
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md border border-gray-200">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 leading-relaxed">
                            <span className="text-blue-600 mr-3 font-bold">Q.</span>
                            {testQuestions[currentIndex].question}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {testQuestions[currentIndex].options.map((option, i) => {
                                const isSelected = selectedOption === option;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedOption(option)}
                                        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 font-medium text-lg ${isSelected
                                            ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-md scale-[1.02]'
                                            : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <div className={`w-5 h-5 rounded-full border-2 mr-4 flex-shrink-0 transition-colors ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'}`}></div>
                                            {option}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <AdsterraBottomAd />

                        <div className="flex justify-end border-t border-gray-100 pt-6">
                            <button
                                onClick={handleNext}
                                disabled={!selectedOption}
                                className={`font-bold py-3 px-10 rounded-xl shadow-md transition-all text-lg ${selectedOption
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {currentIndex + 1 === testQuestions.length ? 'Submit Test' : 'Next ➔'}
                            </button>
                        </div>
                    </div>


                </div>
            )}

            {/* ================= STAGE 3: RESULT SCREEN ================= */}
            {testState === 'completed' && (
                <div className="animate-fade-in">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Test Completed!</h2>
                        <p className="text-lg text-gray-500 mb-8">Here is your final result for {selectedSubject}</p>

                        <div className="flex justify-center items-center mb-8">
                            <div className="relative">
                                <svg className="w-48 h-48 transform -rotate-90">
                                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                                    <circle
                                        cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent"
                                        strokeDasharray={88 * 2 * Math.PI}
                                        strokeDashoffset={(88 * 2 * Math.PI) - ((finalScore / testQuestions.length) * (88 * 2 * Math.PI))}
                                        className={`${finalScore / testQuestions.length >= 0.5 ? 'text-green-500' : 'text-red-500'} transition-all duration-1000`}
                                    />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    <span className="text-5xl font-black text-gray-800">{finalScore}</span>
                                    <div className="text-sm font-bold text-gray-400 mt-1">out of {testQuestions.length}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-10">
                            <p className="text-xl font-medium text-gray-700 mb-2">
                                Percentage: <span className="font-bold text-2xl">{Math.round((finalScore / testQuestions.length) * 100)}%</span>
                            </p>
                            <p className="text-gray-500">
                                Time Taken: <span className="font-semibold text-gray-700">{formatTime(1800 - timeLeft)}</span>
                            </p>
                        </div>

                        <div className="mb-8">
                            <AdsterraMiddleAd />
                        </div>

                        <button
                            onClick={handleRestart}
                            className="bg-gray-800 hover:bg-black text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform active:scale-95 text-lg w-full md:w-auto"
                        >
                            ↻ Take Another Test
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}