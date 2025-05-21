// src/components/home/AboutSection.jsx
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaCalendarAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <motion.h2
          className="mb-4 fw-bold text-success"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Pitch for Profit
        </motion.h2>

        <motion.p
          className="mb-5 text-muted"
          style={{ maxWidth: "700px", margin: "0 auto" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Pitch for Profit is a platform that bridges the gap between brilliant entrepreneurs and visionary investors. 
          Whether you're building the next big thing or looking to fund it — we make the connection seamless.
        </motion.p>

        <div className="row g-4">
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <FaLightbulb className="text-success mb-3" size={40} />
                <h5 className="card-title">Pitch Your Idea</h5>
                <p className="card-text text-muted">
                  Entrepreneurs showcase their ideas to gain attention and investment from potential backers.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <FaHandshake className="text-success mb-3" size={40} />
                <h5 className="card-title">Connect with Investors</h5>
                <p className="card-text text-muted">
                  Investors browse, evaluate, and connect with passionate founders in their area of interest.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <FaCalendarAlt className="text-success mb-3" size={40} />
                <h5 className="card-title">Schedule Video Meetings</h5>
                <p className="card-text text-muted">
                  Securely schedule and conduct virtual meetings to discuss potential collaborations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
