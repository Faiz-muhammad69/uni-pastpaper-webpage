import entryTestData from '../data/entryTests.json';
import { Link } from 'react-router-dom';
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';




export default function EntryTests() {
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
            {/* Page Header & SEO Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    Sindh University Entry Test Past Papers
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Download and practice year-wise original past papers to secure your admission. Familiarize yourself with the exact paper pattern.
                </p>
            </div>

            {/* NEW: Syllabus Banner (Traffic Booster) */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-10 rounded-r-xl shadow-sm flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow border border-y-yellow-100 border-r-yellow-100">
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="font-bold text-xl text-yellow-800 mb-1">Looking for what to study? 📚</h3>
                    <p className="text-sm text-yellow-700 font-medium">Check out the complete and updated subject-wise syllabus for 2026 admissions.</p>
                </div>
                <Link to="/entry-test-syllabus" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-md whitespace-nowrap">
                    View Syllabus 👉
                </Link>
            </div>

            {/* TOP AD PLACEHOLDER */}
            <AdsterraNativeAd />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {entryTestData.map((testYear) => (
                    <div key={testYear.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group flex flex-col">

                        {/* Year Info */}
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-3xl font-black text-blue-600 group-hover:text-blue-700 transition-colors">
                                {testYear.year}
                            </h2>
                            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                                PDF Format
                            </span>
                        </div>
                        <p className="text-gray-500 mb-6 text-sm min-h-[40px] leading-relaxed">
                            {testYear.description}
                        </p>

                        {/* Papers List */}
                        <div className="space-y-3 mt-auto">
                            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 text-xs uppercase tracking-widest">
                                Available Papers
                            </h3>
                            {testYear.papers.map((paper) => (
                                <div key={paper.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all group/item">
                                    <span className="text-sm font-semibold text-gray-700 truncate mr-3" title={paper.title}>
                                        📄 {paper.title}
                                    </span>

                                    <Link
                                        to={`/paper/${paper.id}`}
                                        className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
                                    >
                                        Open PDF
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* IN-FEED NATIVE AD (Grid ke andar fit hoga) */}
                <AdsterraMiddleAd />
            </div>

            {/* Bottom SEO Text Section - Keywords Rich */}
            <div className="mt-16 p-6 md:p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sindh University Entry Test Preparation Guide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    To secure admission in the bachelor's programs at the University of Sindh (UoS), Jamshoro, passing the pre-entry test is mandatory. Downloading and practicing these original past papers will help you understand the exact paper pattern, time management, and the difficulty level of questions across English, General Knowledge, General Science, Math, and IQ sections.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Combine these PDF past papers with our <strong>CPN Calculator</strong> to check your merit standing, and regularly practice our interactive MCQs section to guarantee your success in the 2026 admissions.
                </p>
            </div>

            {/* BOTTOM MULTIPLEX AD PLACEHOLDER */}
            <AdsterraBottomAd />
        </div>
    )
}