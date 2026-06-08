import { useState } from 'react';
import mcqsData from '../data/mcqsData.json';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';



export default function Mcqs() {
    // Unique Categories Extract karna ('All' hata diya gaya hai)
    const categories = [...new Set(mcqsData.map(mcq => mcq.category))];

    // Selected Category State (Default: Pehli category e.g., 'English')
    const [activeCategory, setActiveCategory] = useState(categories[0] || '');

    // User ke answers track karne ke liye state
    const [userAnswers, setUserAnswers] = useState({});

    // Filtered Data based on Category
    const filteredMcqs = mcqsData.filter(mcq => mcq.category === activeCategory);

    // Answer click handle karne ka function
    const handleOptionClick = (questionId, selectedOption) => {
        // Agar pehle se answer de diya hai to lock ho jayega
        if (userAnswers[questionId]) return;

        setUserAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">

            {/* Header / Dynamic SEO Meta Text */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    {activeCategory} MCQs - Sindh Uni Past Papers
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Master your preparation with these highly repeated <strong>{activeCategory} MCQs</strong> from previous University of Sindh Jamshoro entry tests. Attempt the questions, check the correct answers, and read the detailed explanations to boost your concepts.
                </p>
            </div>

            {/* TOP AD PLACEHOLDER */}
            <AdsterraNativeAd />

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${activeCategory === category
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* MCQs List Section */}
            <div className="space-y-8">
                {filteredMcqs.map((mcq, index) => {
                    const hasAnswered = !!userAnswers[mcq.id];
                    const userAnswer = userAnswers[mcq.id];

                    return (
                        <div key={mcq.id}>
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">

                                {/* Question Title */}
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
                                    <span className="text-blue-600 mr-3 font-bold">Q{index + 1}.</span>
                                    {mcq.question}
                                </h2>

                                {/* Options List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {mcq.options.map((option, i) => {
                                        // Default style
                                        let buttonClass = "w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors bg-white font-medium text-gray-700 text-lg";

                                        // Agar user ne answer de diya hai
                                        if (hasAnswered) {
                                            if (option === mcq.correctAnswer) {
                                                // Sahi answer hamesha green
                                                buttonClass = "w-full text-left p-4 rounded-xl border-2 border-green-500 bg-green-50 font-bold text-green-800 text-lg shadow-inner";
                                            } else if (option === userAnswer && userAnswer !== mcq.correctAnswer) {
                                                // Galat answer red
                                                buttonClass = "w-full text-left p-4 rounded-xl border-2 border-red-500 bg-red-50 font-bold text-red-800 text-lg";
                                            } else {
                                                // Baqi options dim
                                                buttonClass = "w-full text-left p-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed text-lg";
                                            }
                                        }

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionClick(mcq.id, option)}
                                                disabled={hasAnswered}
                                                className={buttonClass}
                                            >
                                                {option}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Explanation Reveal */}
                                {hasAnswered && (
                                    <div className="mt-6 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl animate-fade-in">
                                        <h3 className="text-base font-bold text-blue-900 mb-2 flex items-center gap-2">
                                            💡 Explanation:
                                        </h3>
                                        <p className="text-gray-700 text-base leading-relaxed">{mcq.explanation}</p>
                                    </div>
                                )}
                            </div>

                            {/* IN-ARTICLE AD (Har 5 questions ke baad aayega) */}
                            {(index + 1) % 5 === 0 && index !== filteredMcqs.length - 1 && (

                                <AdsterraMiddleAd />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom SEO Text Section - Keywords Rich */}
            <div className="mt-16 p-6 md:p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl border border-blue-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Why Practice These {activeCategory} Questions?</h3>
                <p className="text-gray-600 leading-relaxed">
                    The University of Sindh (UoS) Jamshoro conducts its entry test annually. Practicing year-wise past papers is the most proven strategy to secure a high CPN. The <strong>{activeCategory}</strong> section holds significant weightage in the final merit calculation. Make sure to review the explanations provided after each answer to understand the core concepts thoroughly.
                </p>
            </div>

            {/* BOTTOM MULTIPLEX AD PLACEHOLDER */}
            <AdsterraBottomAd />

        </div>
    );
}