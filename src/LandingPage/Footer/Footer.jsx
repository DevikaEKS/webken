import { Links, CONTACT_US, SOCIAL } from "../../utils/Links";

export default function Footer() {
  return (
    <div className="bg-[#001040] w-full px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-10 md:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center md:h-[392px] w-full gap-y-8 md:gap-y-0">
        
        {/* Logo Section */}
        <div className="w-full md:w-[25%] flex justify-center md:justify-start md:ml-20">
          <img
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[356px] h-auto"
            src="/image 66.png"
            alt="Logo"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-[75%] justify-between md:justify-center md:space-x-20 gap-y-10 md:gap-y-0 mt-8 md:mt-0">
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-3 min-w-[140px] md:min-w-[180px]">
            <h1
              className="font-bold text-[20px] md:text-[24px]"
              style={{ color: "#ffa200" }}
            >
              Quick Links
            </h1>
            {Links.map((link) => (
              <a
                key={link.id}
                className="font-medium text-white text-[14px] sm:text-[16px] md:text-[18px] hover:text-[#ffa200] transition-colors duration-300"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-3 min-w-[180px] md:min-w-[220px]">
            <h1
              className="font-bold text-[20px] md:text-[24px]"
              style={{ color: "#ffa200" }}
            >
              Contact Us
            </h1>
            {CONTACT_US.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="text-white text-[14px] sm:text-[16px] md:text-[18px] flex items-start gap-2"
                >
                  {item.type === "address" ? (
                    <div className="flex flex-col font-medium">
                      <div>{item.value.split(",")[0]},</div>
                      <div>
                        {item.value.split(",")[1]?.trim()},{" "}
                        {item.value.split(",")[2]?.trim()}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      {Icon && <Icon />}
                      <span className="font-helvetica font-medium">{item.value}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Follow Us */}
          <div className="flex flex-col space-y-3 min-w-[140px] md:min-w-[160px]">
            <h1
              className="font-helvetica font-bold text-[20px] md:text-[24px]"
              style={{ color: "#ffa200" }}
            >
              Follow Us
            </h1>
            <div className="flex space-x-4">
              {SOCIAL.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    className="text-white text-[20px] sm:text-[22px] md:text-[24px] flex items-center gap-2 hover:text-[#ffa200] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
