import "./Header.css";
import { motion } from "framer-motion";

function Header() {
  const userName = "Rohit";

  // menu variable
  const menu = (
    <>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="group text-[#CBE4DE] px-2.5 py-1 bg-[#0E8388] rounded-full cursor-pointer hover:bg-[#CBE4DE] hover:text-[#2E4F4F] active:bg-[#0E8388] active:text-[#CBE4DE] active:shadow active:shadow-[#2E4F4F] transition-all duration-300 "
      >
        <i class="fas fa-regular fa-house"></i>
        <span className="ml-2 group-hover:inline">Home</span>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="group text-[#CBE4DE] px-2.5 py-1 bg-[#0E8388] rounded-full cursor-pointer hover:bg-[#CBE4DE] hover:text-[#2E4F4F] active:bg-[#0E8388] active:text-[#CBE4DE] active:shadow active:shadow-[#2E4F4F] transition-all duration-300"
      >
        <i class="fas fa-regular fa-bell"></i>
        <span className="ml-2 group-hover:inline">Notifications</span>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="group text-[#CBE4DE] px-2.5 py-1 bg-[#0E8388] rounded-full cursor-pointer hover:bg-[#CBE4DE] hover:text-[#2E4F4F] active:bg-[#0E8388] active:text-[#CBE4DE] active:shadow active:shadow-[#2E4F4F] transition-all duration-300"
      >
        <i class="fas fa-solid fa-message"></i>
        <span className="ml-2 group-hover:inline">Messages</span>
      </motion.div>
    </>
  );

  return (
    <>
      {/* navbar goes here */}
      <nav className="grid grid-cols-5 lg:grid-cols-11 text-center pt-2">
        {/* logo */}
        <div className="col-span-1 flex items-center justify-center">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            src="/letterR.svg"
            className="h-7"
            alt=""
          />
        </div>
        {/* input search */}
        <div className="col-span-3 lg:col-span-5 flex items-center md:justify-left">
          <input
            type="text"
            className="form-control rounded-xl bg-[#334756] border-[#082032] focus:outline-dashed text-white focus:shadow-none focus:bg-[#334756] lg:w-2/4 h-8"
            placeholder="# Explore"
          />
        </div>
        {/* user profile and menu for desktop */}
        <div className="col-span-1 lg:col-span-5">
          <div className="lg:hidden flex justify-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              src="/rohit.jpg"
              className="h-9 cursor-pointer border border-[#CBE4DE] overflow-hidden rounded-full"
              alt=""
            />
          </div>
          <motion.div
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="hidden lg:flex sm:float-right gap-2 items-center"
          >
            <div className="flex float-right gap-2">{menu}</div>
            <div className="group flex overflow-hidden rounded-full items-center glass justify-center cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/rohit.jpg"
                className="h-9 rounded-full"
                alt=""
              />
              <span className="text-white mx-2">Hi, {userName}</span>
            </div>
          </motion.div>
        </div>
        {/* menu for phones */}
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          className="lg:hidden col-span-5 flex justify-center mt-3 gap-2"
        >
          {menu}
        </motion.div>
      </nav>
      <hr className="text-white mt-3 lg:hidden" />
    </>
  );
}

export default Header;
