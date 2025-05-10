
export const LoadingOverlay = () => {
 
  return (
    <>
      {/* {isLoading && ( */}
        <div className="overlay">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      {/* )} */}
      <style jsx>{`
        /* Overlay styles with blur effect */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3); /* Slight transparency */
          backdrop-filter: blur(8px); /* Apply blur effect */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 9999;
        }

        /* Green spinner animation */
        .spinner {
          width: 60px;
          height: 60px;
          border: 6px solid rgba(255, 255, 255, 0.3);
          border-top: 6px solid #4caf50; /* Green color */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Loading text */
        .loading-text {
          margin-top: 20px;
          color: #fff;
          font-size: 1.5rem;
          font-family: Arial, sans-serif;
          opacity: 0.9;
        }

        /* Content */
        .content {
          text-align: center;
          padding: 50px;
        }
      `}</style>
    </>
  );
};

