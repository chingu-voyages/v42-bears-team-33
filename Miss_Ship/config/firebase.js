import admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import pino from 'pino';

const logger = pino();
try {
  // admin.initializeApp({
  //   credential: admin.credential.cert(firebaseConfig),
  // });
  admin.initializeApp({
    credential: applicationDefault(),
  });
  logger.info('Firebase Admin SDK Initialised.');
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    logger.error('Firebase admin initialization error', error.stack);
  }
}

export default admin;
