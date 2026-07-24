import { apiService } from "./api.service";

export interface IS3Service {
  uploadToS3(file: File): Promise<string>;
  getSignedUrl(key: string): Promise<string>;
}

export class S3Service implements IS3Service {
  async uploadToS3(file: File): Promise<string> {
    try {
      const response = await apiService.get<{ url: string }>(
        `s3/presigned-url?filename=${encodeURIComponent(file.name)}&type=${encodeURIComponent(file.type)}`
      );
      const { url } = response;

      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      return file.name;
    } catch (error) {
      console.error("Error uploading file to R2:", error);
      throw new Error("Failed to upload file to R2");
    }
  }

  async getSignedUrl(key: string): Promise<string> {
    try {
      const response = await apiService.get<{ url: string }>(
        `s3/download-url?filename=${encodeURIComponent(key)}`
      );
      return response.url;
    } catch (error) {
      console.error("Error generating signed URL:", error);
      throw new Error("Failed to generate download URL");
    }
  }
}

export const s3Service = new S3Service();
