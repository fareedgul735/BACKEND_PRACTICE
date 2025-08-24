// const bodyParser = {
//   json: () => {
//     return (req, res, next) => {
//       let userdata = "";
//       req.on("data", (chunk) => {
//         const stringedBuffer = chunk.toString();
//         userdata += stringedBuffer;
//       });
//       req.on("end", () => {
//         if (userdata) {
//           try {
//             req.body = JSON.parse(userdata);
//           } catch (err) {
//             return res.status(400).json({ error: "Invalid JSON" });
//           }
//         } else {
//           req.body = {};
//         }
//         next();
//       });
//     };
//   },
// };

const bodyParser = {
  json: () => {
    return (req, res, next) => {
      let bodyData = "";
      req.on("data", (chunk) => {
        bufferConvertString = chunk.toString();
        bodyData += bufferConvertString;
      });
      req.on("end", () => {
        if (bodyData) {
          try {
            req.body = JSON.parse(bodyData);
          } catch (err) {
            return res.statu(400).json({ error: err.message });
          }
        } else {
          req.body = {};
        }
        next();
      });
    };
  },
};

module.exports = { bodyParser };
