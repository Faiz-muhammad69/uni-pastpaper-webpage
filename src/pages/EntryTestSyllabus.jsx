import { Link } from 'react-router-dom';
import syllabusData from '../data/syllabus.json';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';




export default function EntryTestSyllabus() {
    return (
        <div className="max-w-5xl mx-auto p-4 md:p-8">

            {/* SEO Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    Sindh University Entry Test Syllabus 2026
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Get the complete, subject-wise breakdown for the University of Sindh Jamshoro Bachelor's degree admission test. Plan your studies and focus on the most important topics.
                </p>
            </div>

            {/* Test Pattern Overview */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap justify-center gap-8 mb-10">
                <div className="text-center">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Total MCQs</p>
                    <p className="text-3xl font-black text-blue-600">{syllabusData.testInfo.totalMcqs}</p>
                </div>
                <div className="hidden md:block w-px bg-gray-200"></div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Time Limit</p>
                    <p className="text-3xl font-black text-green-600">{syllabusData.testInfo.timeLimit}</p>
                </div>
                <div className="hidden md:block w-px bg-gray-200"></div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Subjects</p>
                    <p className="text-3xl font-black text-purple-600">{syllabusData.testInfo.totalSubjects}</p>
                </div>
            </div>

            {/* TOP AD PLACEHOLDER */}
            <AdsterraNativeAd />

            {/* Subject Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {syllabusData.subjects.map((subject) => (
                    <div key={subject.id} className={`p-6 rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow ${subject.color}`}>
                        <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-4">
                            <h2 className="text-2xl font-bold">{subject.name}</h2>
                            <span className="bg-white/50 px-4 py-1 rounded-full font-black text-lg shadow-sm">
                                {subject.mcqs} MCQs
                            </span>
                        </div>

                        <ul className="space-y-2">
                            {subject.topics.map((topic, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 mt-1 opacity-70">➔</span>
                                    <span className="font-medium opacity-90">{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* IN-ARTICLE AD PLACEHOLDER */}
            <AdsterraMiddleAd />

            {/* Call to Action - Link to MCQs */}
            <div className="bg-blue-600 text-white p-8 rounded-3xl text-center shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">Ready to test your knowledge?</h3>
                    <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                        Now that you know the syllabus, start practicing with our interactive MCQs engine built from authentic past papers.
                    </p>
                    <Link to="/mcqs" className="bg-white text-blue-600 font-extrabold py-3 px-8 rounded-full hover:bg-gray-100 shadow-md transition-transform hover:scale-105 inline-block">
                        Start MCQs Practice Test
                    </Link>
                </div>
            </div>

        </div>
    );
}