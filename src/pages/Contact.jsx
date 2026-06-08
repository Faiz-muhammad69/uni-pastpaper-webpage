import { useState } from "react";
import axios from "axios";
import AdsterraNativeAd from '../components/AdsterraNativeAd';
import AdsterraMiddleAd from '../components/AdsterraMiddleAd';
import AdsterraBottomAd from '../components/AdsterraBottomAd';




export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ message: "", success: null });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: "", success: null });

        try {
            // Data ke sath 'source' bhej rahe hain taake backend par identify ho sake
            const payload = {
                ...formData,
                source: "Uni Papers Website"
            };

            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, payload);

            setStatus({ message: "Message sent successfully! We will get back to you soon. ✅", success: true });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus({ message: "Something went wrong. Please try again later. ❌", success: false });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen">

            {/* Page Header & SEO Content */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
                    Contact Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Have questions about the Sindh University entry test, past papers, or the CPN calculator? Drop us a message and our team will assist you.
                </p>
            </div>

            {/* TOP AD PLACEHOLDER */}
            <AdsterraNativeAd />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">

                {/* Left Side: Contact Information */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">Get In Touch</h3>
                        <p className="text-gray-600">Fill out the form and let us know how we can improve your exam preparation experience.</p>
                    </div>

                    <AdsterraMiddleAd />
                </div>

                {/* Right Side: Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g. Ali Raza"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ali@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {/* Status Message */}
                    {status.message && (
                        <div className={`p-4 rounded-xl text-center font-medium ${status.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}