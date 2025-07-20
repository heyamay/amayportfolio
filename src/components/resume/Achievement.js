import { motion } from "framer-motion";
import badgeImage from "../../assets/images/Achivements/awsccpbadge.png"; // Ensure the path is correct

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
          AWS Cloud Practitioner Certification
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* Badge Image */}
        <img
          src={badgeImage}
          alt="awsccpbadge"
          className="w-40 h-40 object-cover"
        />
        {/* Description */}
        <p className="text-center text-lg">
          Scored a whooping 963 out of 1000 on the AWS Cloud Practitioner exam
        </p>
      </div>
    </motion.div>
  );
};

export default Achievement;
