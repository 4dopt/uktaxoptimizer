
import os
from PIL import Image
import glob

def optimize_images(directory):
    # Find all PNG files in the directory
    png_files = glob.glob(os.path.join(directory, '*.png'))
    
    print(f"Found {len(png_files)} PNG files in {directory}")
    
    optimized_count = 0
    saved_space = 0
    
    for file_path in png_files:
        try:
            # Open the image
            with Image.open(file_path) as img:
                # Create the new filename with .webp extension
                webp_path = os.path.splitext(file_path)[0] + '.webp'
                
                # Get original size
                original_size = os.path.getsize(file_path)
                
                # Save as WebP
                # quality=80 is usually a good balance for web
                img.save(webp_path, 'WEBP', quality=80)
                
                # Get new size
                new_size = os.path.getsize(webp_path)
                
                # Calculate savings
                savings = original_size - new_size
                saved_space += savings
                
                print(f"Converted: {os.path.basename(file_path)}")
                print(f"  Size: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({savings/original_size:.1%} reduction)")
                
                optimized_count += 1
                
        except Exception as e:
            print(f"Error converting {file_path}: {e}")

    print("-" * 30)
    print(f"Total images optimized: {optimized_count}")
    print(f"Total space saved: {saved_space/1024/1024:.2f} MB")

if __name__ == "__main__":
    # Target directory based on user's project structure
    target_dir = r"c:\Users\KING\uktaxoptimizer\public\assets\images"
    
    if os.path.exists(target_dir):
        optimize_images(target_dir)
    else:
        print(f"Directory not found: {target_dir}")
