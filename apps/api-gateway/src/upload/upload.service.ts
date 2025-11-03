import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(file: any) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'yaari/images',
          resource_type: 'image',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            format: result.format,
          });
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async uploadVideo(file: any) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'yaari/videos',
          resource_type: 'video',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            duration: result.duration,
            format: result.format,
          });
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async uploadMultiple(files: any[]) {
    const uploads = files.map((file) => {
      const isVideo = file.mimetype.startsWith('video/');
      return isVideo ? this.uploadVideo(file) : this.uploadImage(file);
    });

    return Promise.all(uploads);
  }
}
