export const errorHandler = (err, req, res, next) => {
    // Determine the appropriate status code (default to 500 Internal Server Error)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    // Set the status code on the response
    res.status(statusCode);
  
    // Send a structured JSON response to the client
    res.json({
      message: err.message,
      // Only include stack trace if in development mode (for debugging)
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, 
    });
  };
  