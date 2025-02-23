import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-8 items-start">
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-8 text-sm">
          Bizimle iletişime geçmekten çekinmeyin, en kısa sürede size geri
          döneceğiz.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
          ></textarea>
          <button
            type="button"
            className="w-full text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Send
          </button>
        </form>
      </section>

      <section className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-indigo-900 mb-6">
            Contact Information
          </h3>
          <div className="space-y-4">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-indigo-900" />,
                title: "Our Location",
                details: ["Merkez Mah.", "Avcılar, İstanbul"],
              },
              {
                icon: <Phone className="w-5 h-5 text-indigo-900" />,
                title: "Phone Number",
                details: ["02126359568"],
              },
              {
                icon: <Mail className="w-5 h-5 text-indigo-900" />,
                title: "Email Address",
                details: ["cara@business.com"],
              },
            ].map(({ icon, title, details }, index) => (
              <div key={index} className="flex items-start space-x-3">
                {icon}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {title}
                  </h4>
                  {details.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-indigo-900 mb-6">
            Hours of Operation
          </h3>
          <div className="space-y-4">
            {[
              { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map(({ day, hours }, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600 text-sm">{day}</span>
                <span className="text-gray-800 text-sm">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
