import React, { useEffect, useState } from "react";
import portfolios from "./../../assets/data/portfolioData";
import Modal from "./Modal";

function Portfolio() {
    const [data, setData] = useState(6);
    const [next, setNext] = useState(portfolios);
    const [selectTab, setSelectTab] = useState("all");
    const [showModal, setShowModal] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveId(id);
    };

    const loadMore = () => {
        setData((prev) => prev + 3);
    };

    useEffect(() => {
        if (selectTab === "all") {
            setNext(portfolios);
        }
        if (selectTab === "web-design") {
            const filterData = portfolios.filter((item) => item.category === "Web Design");
            setNext(filterData);
        }
        if (selectTab === "ux-design") {
            const filterData = portfolios.filter((item) => item.category === "Ux");
            setNext(filterData);
        }
    }, [selectTab]);

    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">My recent projects</h3>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectTab("all")}
                            className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectTab("web-design")}
                            className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                        >
                            Web Design
                        </button>
                        <button
                            onClick={() => setSelectTab("ux-design")}
                            className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
                        >
                            Web Application
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {portfolios?.slice(0, data)?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                            >
                                <figure>
                                    <img src={item?.imgUrl} className="rounded-[8px]" alt="" />
                                </figure>
                                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z=[5] hidden group-hover:block">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button
                                            onClick={() => showModalHandler(item.id)}
                                            className="text-white  bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                                        >
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-6">
                    {data < next.length && portfolios.length > 6 && (
                        <button
                            onClick={loadMore}
                            className="text-white  bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
        </section>
    );
}

export default Portfolio;
