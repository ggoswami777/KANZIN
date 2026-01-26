import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/Animation";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { User } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token");
    setOpen(false);
    navigate("/");
  };

  return (
    <motion.nav
      layout
      className="
        mx-auto w-[90%]
        px-6 py-4
        rounded-3xl
        backdrop-blur bg-white/5
        border border-white/10 shadow-lg
        overflow-hidden
      "
    >
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-bold tracking-[0.25rem] text-white"
          style={{ fontFamily: "var(--font-stack)" }}
        >
          KANZIN
        </motion.h1>

        {/* DESKTOP RIGHT SIDE */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-4"
        >
          {token ? (
            /* Profile Icon – Desktop only */
            <>
            <button
              className="
                text-[#f5e1c8]
                hover:text-[#f35faf]
                transition
                p-2
                rounded-full
                flex items-center justify-center
              "
            >
              <User size={26} />
            </button>
            <button
                onClick={logoutHandler}
                className="
                  w-full
                  text-center
                  bg-[#f35faf]/80 hover:bg-[#d64694]
                  text-white py-2 rounded-full
                  transition px-5
                "
              >
                Sign Out
              </button>
            </>
            
            
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className=" bg-[#f35faf]/80 hover:bg-[#d64694]
                    text-white px-6 py-2 rounded-full
                    transition shadow-[0_0_10px_rgba(243,95,175,0.3)]"
              >
                Login
              </button>

             
            </>
          )}
        </motion.div>

        {/* Hamburger – Mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-6 flex flex-col gap-4"
          >
            {token ? (
              /* Sign Out – Mobile */
              <button
                onClick={logoutHandler}
                className="
                  w-full
                  text-center
                  bg-[#f35faf]/80 hover:bg-[#d64694]
                  text-white py-2 rounded-full
                  transition
                "
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/login");
                  }}
                  className=" bg-[#f35faf]/80 hover:bg-[#d64694]
                    text-white px-6 py-2 rounded-full
                    transition shadow-[0_0_10px_rgba(243,95,175,0.3)]"
                >
                  Login
                </button>

 
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
