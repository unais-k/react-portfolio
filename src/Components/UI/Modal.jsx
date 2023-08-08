import React from "react";
import portfolios from "../../assets/data/portfolioData";

function Modal({ activeId, setShowModal }) {
    const portfolio = portfolios.find((item) => item.id === activeId);
    return (
        <div className="w-full h-full top-0 left-0 bg-headingColor bg-opacity-40">
            <div className="max-w--[600px] absolute top-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-u-1/2 p-5">
                <figure>
                    <img src={portfolio.imgUrl} alt="" />
                </figure>
            </div>
            <div>
                <h2 className="text-2xl text-headingColor font-[700] my-5">{portfolio.title}</h2>
                <p className="text-[15px] leading-7 text-smallTextColor">{portfolio.description}</p>
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                    <h4 className="text-headingColor text-[18px] fond-[700]">Technologies:</h4>
                    {portfolio?.technologies.map((item) => {
                        return <span className="bg-gray-200 py-1 px-2 rounded-[8px] text-[14px] leading-0">{item}</span>;
                    })}
                </div>
                <a href={portfolio.imgUrl}></a>
            </div>
        </div>
    );
}

export default Modal;
