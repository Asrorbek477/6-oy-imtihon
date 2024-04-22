import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



function Contact() {
  return (
    <div>
      <h1 className="text-center text-3xl mb-8">Do you need to contact us?</h1>
      <div>
        <h2 className="text-center text-2xl mb-4">you can do this as follows :</h2>
        <div className='flex justify-center items-center gap-4 mb-10'>
          <a href="https://t.me/asrorbek_477" target="blanck"><FaTelegram className="w-7 h-7 hover:text-violet-600"/></a>
          <a href="https://www.instagram.com/asror_bek_477/" target="blanck"><FaInstagram className="w-7 h-7 hover:text-violet-600"/></a>
        </div>
    </div>
  </div>        
  )
}

export default Contact