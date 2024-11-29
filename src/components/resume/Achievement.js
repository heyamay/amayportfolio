import { motion } from "framer-motion";
import badgeImage from "../../assets/images/Achivements/5star_sql_badge.jpeg"; // Ensure the path is correct

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col items-center gap-10 px-6 sm:px-12"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Achievement</h2>
        <p className="text-sm text-designColor tracking-[4px] mt-2">
          5-Star SQL Badge on HackerRank
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Badge Image */}
        <img
          src={badgeImage}
          alt="5-Star SQL Badge on HackerRank"
          className="w-40 h-40 object-cover"
        />
        {/* Description */}
        <p className="text-center text-lg">
          Proudly earned the 5-star SQL badge on HackerRank, demonstrating 
          advanced expertise in writing efficient queries, data manipulation, 
          and database design principles.
        </p>
      </div>
    </motion.div>
  );
};

export default Achievement;
