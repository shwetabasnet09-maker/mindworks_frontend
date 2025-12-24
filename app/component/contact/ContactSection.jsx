import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Subarna Shamsher Marg",
      link: null,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "admin@malpins.edu.np",
      link: "mailto:admin@malpins.edu.np",
    },
    {
      icon: Phone,
      title: "Call Now",
      content: "01-4542066",
      link: "tel:01-4542066",
    },
  ];

  return (
    <div className="w-full wrapper py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="bg-[#F2F2F2] rounded-[10px] p-6 flex flex-col items-center text-center"
            >
              <div className="bg-[#255833] rounded-full p-4 w-15 h-15 flex items-center justify-center mb-4">
                <IconComponent className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-[20px] lexend font-bold text-[#255833]">
                {item.title}
              </h3>

              <p className="mt-2 lexend text-[#000000] font-medium text-[16.5px]">
                {item.link ? (
                  <Link href={item.link} className="hover:underline">
                    {item.content}
                  </Link>
                ) : (
                  item.content
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
