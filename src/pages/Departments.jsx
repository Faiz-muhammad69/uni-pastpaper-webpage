import departmentsData from '../data/departments.json';
import { Link } from 'react-router-dom';

export default function Departments() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Department-wise Past Papers</h1>
                <p className="text-gray-600">Select your subject to download past papers and prepare for your exams.</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentsData.map((dept) => (
                    <div key={dept.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                        {/* Department Info */}
                        <h2 className="text-2xl font-bold text-blue-600 mb-2">{dept.name}</h2>
                        <p className="text-gray-600 mb-6 text-sm min-h-[40px]">{dept.description}</p>

                        {/* Papers List */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-gray-800 border-b pb-2">Available Papers:</h3>
                            {dept.papers.map((paper) => (
                                <div key={paper.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100 hover:bg-blue-50 transition-colors">
                                    <span className="text-sm font-medium text-gray-700">{paper.title}</span>

                                    {/* View Button */}
                                    <Link
                                        to={`/paper/${paper.id}`}
                                        className="bg-green-500 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded transition-colors"
                                    >
                                        View Paper
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}