import admin from 'firebase-admin';
import pino from 'pino';

const logger = pino();
try {
  // admin.initializeApp({
  //   credential: admin.credential.cert(firebaseConfig),
  // });
  const credential = JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString());
  admin.initializeApp({
    credential: admin.credential.cert(credential),
  });
  logger.info('Firebase Admin SDK Initialised.');
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    logger.error('Firebase admin initialization error', error.stack);
  }
}

export default admin;
