
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSurprise(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-romance-soft to-white flex flex-col items-center justify-center p-4">
      {!showSurprise ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showSurprise ? 0 : 1 }}
          exit={{ opacity: 0 }}
          className="text-center space-y-6"
        >
          <span className="inline-block px-4 py-1 bg-romance-accent text-gray-700 rounded-full text-sm font-medium mb-4 animate-fade-in">
            404 Error
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in">
            Oops! You've stumbled upon this page...
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto animate-fade-in">
            But since you're here, I have something special to show you...
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1 bg-romance-muted text-gray-700 rounded-full text-sm font-medium animate-fade-in">
            A Special Message
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate-fade-in">
            My Dearest Valentine
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in-slow">
            <img
              src="/placeholder.svg"
              alt="Romantic moment"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto animate-fade-in px-4">
            In a world full of possibilities, finding you was my favorite accident.
            Every moment with you feels like a perfectly crafted surprise, just
            like this "404 error" that led you here. Will you be my Valentine?
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
