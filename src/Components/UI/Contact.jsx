import React from "react";

function Contact() {
    return (
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        {/* <iframe
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31313.23735662024!2d75.8232162539504!3d11.17618164585027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba650968482c131%3A0x719dca021ac7bfd7!2sFeroke%2C%20Kerala!5e0!3m2!1sen!2sin!4v1691561655914!5m2!1sen!2sin"
                            className="border-0 w-full h-full"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                        <iframe
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131189314!2d80.0441988105771!3d13.04747331662676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700978719475!5m2!1sen!2sin"
                            className="border-0 w-full h-full"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form className="w-full">
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    type="text"
                                    rows={3}
                                    placeholder="Write your message"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <button className="w-full focus:outline-none p-3 rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
