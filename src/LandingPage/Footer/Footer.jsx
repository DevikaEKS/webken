import { Links,CONTACT_US,SOCIAL } from "../../utils/Links";

export default function Footer() {
  return (
    <div className="bg-[#001040] w-full px-6 md:px-10 py-10 md:py-0">
      <div className="flex flex-col md:flex-row items-start md:items-center md:h-[392px] w-full gap-y-8 md:gap-0">
        
        <div className="w-full md:w-[25%] flex justify-center md:justify-start md:ml-20">
          <img className="w-[250px] md:w-[356px] h-auto" src="./image 66.png" alt="Logo" />
        </div>

        
        <div className="flex flex-col md:flex-row w-full md:w-[75%] justify-between md:justify-center md:space-x-20 gap-y-10 md:gap-y-0 mt-8 md:mt-0">
          
          <div className="flex flex-col space-y-3">
            <h1 className="font-helvetica font-bold text-[#FFA200] text-[20px] md:text-[24px]">
              Quick Links
            </h1>
            {Links.map((link) => (
              <a
                key={link.id}
                className="font-helvetica font-medium text-white text-[16px] md:text-[18px]"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
          </div>

         
          <div className="flex flex-col space-y-3">
            <h1 className="font-helvetica font-bold text-[#FFA200] text-[20px] md:text-[24px]">
              Contact Us
            </h1>
            {CONTACT_US.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="text-white text-[16px] md:text-[18px] flex items-start gap-2"
                >
                  {item.type === "address" ? (
                    <div className="flex flex-col  font-medium">
                      <div>{item.value.split(',')[0]},</div>
                      <div>
                        {item.value.split(',')[1]?.trim()},{" "}
                        {item.value.split(',')[2]?.trim()}
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
          <div className="flex flex-col space-y-3">
            <h1 className="font-helvetica font-bold text-[#FFA200] text-[20px] md:text-[24px]">
              Follow Us
            </h1>
            <div className="flex space-x-3">
              {SOCIAL.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    className="text-white text-[18px] flex items-center gap-2"
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
