import React from "react";
import "./Contac.css";
import theme from "../../assets/theme_pattern.svg";
import email from '../../assets/mail_icon.svg';
import phone from '../../assets/call_icon.svg';
import address from '../../assets/location_icon.svg';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "16cede26-9c33-4c31-b97a-a811e27dafdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(result);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center" id="contact">
      <div className="contact mt-10 w-[80%]">
        <div className="title-1 relative md:mb-20 mb-12">
          <h1 className="text-center font-bold text-[2.5rem] md:text-[3.4rem] z-30 relative">
            Get in touch
          </h1>
          <img
            src={theme}
            alt=""
            className="absolute md:top-[-25px] top-[-1px] left-[55%] z-20 md:left-[50%] h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]"
          />
        </div>
        <div className="two-section flex justify-start items-start md:flex-row flex-col">
          <div className="left flex flex-col justify-start items-start m-2 p-2">
            <h1 className=" contact-title m-2 p-2 md:text-[3rem] text-[2rem] font-bold">Let's talk</h1>
            <p className="m-2 p-2 md:text-[1rem] text-[14px]">I'm currently availabel to take on new projects so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="email flex justify-center items-center m-2 p-2 gap-3 md:text-[1rem] text-[14px]">
              <img src={email} alt="" className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"/>
              <p>hedaumayur2003@gmail.com</p>
            </div>
            <div className="phone flex justify-center items-center m-2 p-2 gap-3">
              <img src={phone} alt="" className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"/>
              <p>(+91)9327741196</p>
            </div>
            <div className="location flex justify-center items-center m-2 p-2 gap-3">
              <img src={address} alt="" className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"/>
              <p>Ahmedabad,Gujarat</p>
            </div>
          </div>
          <div className="right flex justify-center items-center m-2 p-2">
            <form onSubmit={onSubmit} action="" method="post" className="flex flex-col justify-start items-start text-[14px] md:text-[1rem]">
              <label htmlFor="name" className="m-2 p-2 text-gray-300 font-bold">Your Name</label>
              <input type="text" name="name" id="name"  className="m-2 p-2 w-[90%] md:w-full bg-[#32323c] text-[#A0A0A0]"/>
              <label htmlFor="email" className="m-2 p-2 text-gray-300 font-bold">Your Email</label>
              <input type="email" name="email" id="email"  className="m-2 p-2 w-[90%] md:w-full  bg-[#32323c] text-[#A0A0A0]"/>
              <label htmlFor="message" className="m-2 p-2 text-gray-300 font-bold">Write your message here</label>
              <textarea name="message" id="message" cols="65" rows="6" className="ml-2 p-2 b bg-[#32323c] text-[#A0A0A0] w-[90%] md:w-full"></textarea>
              <button className="background-color m-2 p-3 mt-6 rounded-[30px] px-6 md:px-10 transform transition-all hover:scale-110 text-[12px] md:text-[1rem]" type="submit">Submit now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
