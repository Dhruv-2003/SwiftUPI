import QRCode from "qrcode";
import QrScanner from "qr-scanner";

export const createQRCode = async (requestId) => {
  QRCode.toDataURL(requestId)
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
