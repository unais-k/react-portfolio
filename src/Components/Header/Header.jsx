import React, { useEffect, useRef } from "react";

function Header() {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHead = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                headerRef.current.classList.add("stickyHead");
            } else {
                headerRef.current.classList.remove("stickyHead");
            }
        });
    };
    useEffect(() => {
        stickyHead();
        return window.removeEventListener("scroll", stickyHead);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        const targetAt = e.target.getAttribute("href");
        const loc = document.querySelector(targetAt).offsetTop;

        window.scrollTo({
            top: loc - 80,
            left: 0,
        });
    };

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* =============== logo ================ */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35px] h-[35px] bg-primaryColor text-white font-[500] rounded-full flex items-center justify-center">
                            U
                        </span>
                        <div className="leading-[20px]">
                            <h2 className="text-xl text-smallTextColor font-[700]">Unais</h2>
                            <p className="text-smallTextColor text-[16px] font-[500]">personal</p>
                        </div>
                    </div>
                    {/* ============logo end============ */}
                    {/* ============= menu start ============= */}
                    <div className="menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="flex items-center gap-10">
                            <li>
                                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ============= menu end ============= */}
                    {/* ============== menu right ============= */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 ">
                            <i class="ri-send-plane-line"></i> let's Talk
                        </button>
                        <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* ============== menu end ============= */}
                </div>
            </div>
        </header>
    );
}

export default Header;
