import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as getPresignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;

export const uploadToS3 = async (file: File): Promise<string> => {
  try {
    const key = `resumes/${Date.now()}-${file.name}`;
    
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: await file.arrayBuffer(),
      ContentType: file.type,
    });

    await s3Client.send(command);
    return `https://${bucketName}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error('Failed to upload file to S3');
  }
};

export const getSignedUrl = async (key: string): Promise<string> => {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const url = await getPresignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  } catch (error) {
    console.error('Error generating signed URL:', error);
    throw new Error('Failed to generate download URL');
  }
};