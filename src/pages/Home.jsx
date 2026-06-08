import { Link } from 'react-router-dom';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';



export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-20 px-4 text-center shadow-lg relative overflow-hidden">
                {/* Background Pattern (Optional subtle overlay) */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
                        Crack Sindh University Admissions with <span className="text-yellow-300">Past Papers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                        Your ultimate study hub for UoS Jamshoro. Access year-wise entry test papers, department exams, interactive MCQs, and calculate your CPN instantly.
                    </p>

                    {/* Primary Call to Action Buttons */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link to="/entry-test-past-papers" className="bg-yellow-400 text-blue-900 font-extrabold py-3.5 px-8 rounded-full hover:bg-yellow-300 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
                            🚀 Start Preparation
                        </Link>
                        <Link to="/cpn-calculator" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/50 font-bold py-3.5 px-8 rounded-full hover:bg-white/20 shadow-lg transition-transform hover:-translate-y-1">
                            🧮 Calculate CPN
                        </Link>
                    </div>
                </div>
            </section>

            {/* TOP AD PLACEHOLDER */}
            <div className="max-w-5xl mx-auto w-full px-4 mt-8">
                <AdsterraNativeAd />
            </div>

            {/* Quick Navigation / Features Grid */}
            <section className="py-12 px-4 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Feature 1 */}
                    <Link to="/entry-test-past-papers" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">Entry Tests</h3>
                        <p className="text-sm text-gray-500">Download year-wise original admission test PDFs.</p>
                    </Link>

                    {/* Feature 2 */}
                    <Link to="/mcqs" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">MCQs Practice</h3>
                        <p className="text-sm text-gray-500">Interactive quizzes from past papers with explanations.</p>
                    </Link>

                    {/* Feature 3 */}
                    <Link to="/sindh-university-past-papers" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">Semester Papers</h3>
                        <p className="text-sm text-gray-500">Find mid-term and final-term papers by department.</p>
                    </Link>

                    {/* Feature 4 */}
                    <Link to="/entry-test-syllabus" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all group text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">Test Syllabus</h3>
                        <p className="text-sm text-gray-500">Complete subject breakdown for 2026 admissions.</p>
                    </Link>
                </div>
            </section>

            {/* MIDDLE IN-ARTICLE AD PLACEHOLDER */}
            <div className="max-w-4xl mx-auto w-full px-4 mb-12">
                <AdsterraMiddleAd />

            </div>

            {/* SEO Optimized Content Section (AdSense & Google Search Loves This) */}
            <section className="py-12 px-6 max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 mb-12">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center pb-6 border-b border-gray-100">
                    Why Use Uni Papers for Your Preparation?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed">
                    <div>
                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                            🎯 Sindh Uni Admission Guide
                        </h3>
                        <p className="mb-6">
                            Securing admission into the University of Sindh requires a strong CPN and intense preparation[cite: 30]. Our dedicated section for <strong>university entry test past papers</strong> helps students understand the exact exam pattern[cite: 30]. We provide compiled PDFs so you can practice real questions that appeared in previous merit lists[cite: 30].
                        </p>

                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                            📊 CPN Calculator & Merit
                        </h3>
                        <p>
                            Knowing where you stand is crucial. Use our specialized CPN Calculator to input your Matric, Inter, and Entry Test (or LAT) scores to instantly find your Cumulative Prerequisite Number and check your chances in top departments.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                            💻 Interactive MCQs Engine
                        </h3>
                        <p className="mb-6">
                            Theory is good, but testing your knowledge is better[cite: 30]. Our platform features an interactive <strong>MCQs practice test</strong> covering English, General Knowledge, General Science, and Math[cite: 30]. Evaluate your concepts instantly with detailed explanations before stepping into the examination hall[cite: 30].
                        </p>

                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                            📘 Department-Wise Exams
                        </h3>
                        <p>
                            Already enrolled? Whether you are studying Computer Science, Data Science, or AI, our <strong>department-wise past papers</strong> archive is tailored for you[cite: 30]. Reviewing previous mid-term and final exams is the proven strategy to secure a high GPA[cite: 30].
                        </p>
                    </div>
                </div>
            </section>

            {/* BOTTOM MULTIPLEX AD PLACEHOLDER */}
            <div className="max-w-5xl mx-auto w-full px-4 mb-16">
                <AdsterraBottomAd />
            </div>

        </div>
    )
}