import departmentsData from '../data/departments.json';
import { Link } from 'react-router-dom';
import AdsterraNativeAd from '../components/AdsterraNativeAd';

export default function Departments() {
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen">

            {/* Page Header & SEO Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    UoS Department-Wise Past Papers
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Download authentic semester-wise past papers for various bachelor's programs at the University of Sindh. Boost your GPA by preparing with original exam patterns.
                </p>
            </div>

            {/* TOP AD PLACEHOLDER */}
            <AdsterraNativeAd />


            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departmentsData.map((dept, index) => (
                    <div key={dept.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 group flex flex-col relative overflow-hidden">

                        {/* Decorative background shape */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>

                        {/* Department Info */}
                        <h2 className="text-2xl font-black text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                            {dept.name}
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm min-h-[40px] leading-relaxed">
                            {dept.description}
                        </p>

                        {/* Papers List */}
                        <div className="space-y-3 mt-auto relative z-10">
                            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 text-xs uppercase tracking-widest">
                                Available Collections
                            </h3>
                            {dept.papers.map((paper) => (
                                <div key={paper.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all gap-3">
                                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        📄 {paper.title}
                                    </span>

                                    {/* Yeh user ko pehle Viewer par le jayega (jahan ads honge), phir wahan se timer download */}
                                    <Link
                                        to={`/paper/${paper.id}`}
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg shadow-sm hover:shadow transition-transform active:scale-95 w-full sm:w-auto text-center"
                                    >
                                        View & Download
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* IN-FEED NATIVE AD (Grid ke andar fit hoga) */}
                <AdsterraNativeAd />
            </div>

            {/* Bottom SEO Text Section - Keywords Rich */}
            <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Ace Your University Exams?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Scoring a high GPA in university requires smart studying. By reviewing previous mid-term and final-term examination papers, you can easily identify the most repeated questions and understand your professor's paper pattern.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Our database currently holds papers for major IT and Science fields including Computer Science, Software Engineering, Data Science, and Information Technology, along with Arts & Humanities departments like English and Islamic Studies at the University of Sindh.
                </p>
            </div>

            {/* BOTTOM MULTIPLEX AD PLACEHOLDER */}
            <AdsterraNativeAd />
        </div>
    )
}