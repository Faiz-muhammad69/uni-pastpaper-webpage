import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
                    About <span className="text-blue-600">Uni Papers</span>
                </h1>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Welcome to <strong>Uni Papers</strong>, your ultimate digital study companion dedicated specifically to the students and aspirants of the <strong>University of Sindh (UoS), Jamshoro</strong>.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission 🎯</h2>
                    <p>
                        We understand how challenging it can be to secure admission and maintain a high GPA in university. Our mission is to simplify your exam preparation journey by providing free, easy-to-access, and high-quality study materials all in one place. We aim to bridge the gap between hard work and smart work.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What We Offer 📚</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Entry Test Past Papers:</strong> Original, year-wise compiled PDFs to help you understand the exact admission test pattern.</li>
                        <li><strong>Department-Wise Exams:</strong> Mid-term and final-term papers for currently enrolled university students.</li>
                        <li><strong>Interactive MCQs Engine:</strong> Test your knowledge with real past-paper questions and instant explanations.</li>
                        <li><strong>Official CPN Calculator:</strong> Instantly calculate your Cumulative Prerequisite Number to check your merit standing.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Who Are We? 🎓</h2>
                    <p>
                        Uni Papers is developed and maintained by a passionate software developer and university student who experienced the struggle of finding authentic study resources firsthand. This platform is built by a student, for the students.
                    </p>

                    <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                        <p className="font-semibold text-blue-800 mb-4">Have suggestions or need a specific past paper?</p>
                        <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors inline-block">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}